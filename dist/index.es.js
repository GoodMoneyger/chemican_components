import * as u from "react";
import S, { forwardRef as Pm, createElement as To, useState as _e, useLayoutEffect as Vi, createContext as Xr, useContext as $r, useCallback as ve, useRef as Nt, useEffect as Lt, useMemo as Rr } from "react";
import * as Un from "react-dom";
import Rm from "react-dom";
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
function Am() {
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
function Dm() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === W ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case k:
          return "Suspense";
        case N:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case h:
            return "Portal";
          case E:
            return A.displayName || "Context";
          case w:
            return (A._context.displayName || "Context") + ".Consumer";
          case C:
            var M = A.render;
            return A = A.displayName, A || (A = M.displayName || M.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case P:
            return M = A.displayName || null, M !== null ? M : e(A.type) || "Memo";
          case $:
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
        var R = M.error, j = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return R.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(A);
      }
    }
    function r(A) {
      if (A === g) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === $)
        return "<...>";
      try {
        var M = e(A);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var A = G.A;
      return A === null ? null : A.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(A) {
      if (X.call(A, "key")) {
        var M = Object.getOwnPropertyDescriptor(A, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function i(A, M) {
      function R() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: R,
        configurable: !0
      });
    }
    function l() {
      var A = e(this.type);
      return Y[A] || (Y[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function d(A, M, R, j, U, T) {
      var D = R.ref;
      return A = {
        $$typeof: x,
        type: A,
        key: M,
        props: R,
        _owner: j
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: l
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
        value: U
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, M, R, j, U, T) {
      var D = M.children;
      if (D !== void 0)
        if (j)
          if (I(D)) {
            for (j = 0; j < D.length; j++)
              m(D[j]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(D);
      if (X.call(M, "key")) {
        D = e(A);
        var K = Object.keys(M).filter(function(te) {
          return te !== "key";
        });
        j = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", ne[D + j] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          D,
          K,
          D
        ), ne[D + j] = !0);
      }
      if (D = null, R !== void 0 && (n(R), D = "" + R), s(M) && (n(M.key), D = "" + M.key), "key" in M) {
        R = {};
        for (var Q in M)
          Q !== "key" && (R[Q] = M[Q]);
      } else R = M;
      return D && i(
        R,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), d(
        A,
        D,
        R,
        o(),
        U,
        T
      );
    }
    function m(A) {
      p(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === $ && (A._payload.status === "fulfilled" ? p(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function p(A) {
      return typeof A == "object" && A !== null && A.$$typeof === x;
    }
    var v = S, x = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), E = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), G = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, I = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var L, Y = {}, _ = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), F = z(r(a)), ne = {};
    _n.Fragment = g, _n.jsx = function(A, M, R) {
      var j = 1e4 > G.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        R,
        !1,
        j ? Error("react-stack-top-frame") : _,
        j ? z(r(A)) : F
      );
    }, _n.jsxs = function(A, M, R) {
      var j = 1e4 > G.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        R,
        !0,
        j ? Error("react-stack-top-frame") : _,
        j ? z(r(A)) : F
      );
    };
  })()), _n;
}
var _s;
function _m() {
  return _s || (_s = 1, process.env.NODE_ENV === "production" ? pr.exports = Am() : pr.exports = Dm()), pr.exports;
}
var c = _m();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Om = {
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
  const o = Pm(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => To(
      "svg",
      {
        ref: p,
        ...Om[e],
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
        ...r.map(([v, x]) => To(v, x)),
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
const jm = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Im = ye("outline", "alert-circle", "AlertCircle", jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], $m = ye("outline", "calendar-event", "CalendarEvent", Tm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Bi = ye("outline", "check", "Check", Fm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Zr = ye("outline", "chevron-down", "ChevronDown", Wm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], Vm = ye("outline", "chevron-left-pipe", "ChevronLeftPipe", Lm);
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
const Hm = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], Ym = ye("outline", "chevron-right-pipe", "ChevronRightPipe", Hm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], zi = ye("outline", "chevron-right", "ChevronRight", Gm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Km = ye("outline", "circle-check", "CircleCheck", Um);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Xm = ye("outline", "cloud-up", "CloudUp", qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], Qm = ye("outline", "loader", "Loader", Zm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [["path", { d: "M5 12l14 0", key: "svg-0" }]], ep = ye("outline", "minus", "Minus", Jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Hi = ye("outline", "pencil", "Pencil", tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Yi = ye("outline", "restore", "Restore", np);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Gi = ye("outline", "search", "Search", rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], ap = ye("outline", "trash-x", "TrashX", op);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], Ui = ye("outline", "trash", "Trash", sp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], cp = ye("outline", "user", "User", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], aa = ye("outline", "x", "X", lp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], up = ye("filled", "alert-circle-filled", "AlertCircleFilled", dp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], Ki = ye("filled", "circle-check-filled", "CircleCheckFilled", fp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Os = ye("filled", "exclamation-circle-filled", "ExclamationCircleFilled", mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], js = ye("filled", "folder-filled", "FolderFilled", pp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Ar = ye("filled", "info-circle-filled", "InfoCircleFilled", hp);
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
  const t = /* @__PURE__ */ vp(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(xp);
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
function vp(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = yp(o), i = bp(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? bt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function gp(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = qi, t;
}
function xp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qi;
}
function bp(e, t) {
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
function yp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wp = [
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
], Z = wp.reduce((e, t) => {
  const n = /* @__PURE__ */ Mt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Oa(e, t) {
  e && Un.flushSync(() => e.dispatchEvent(t));
}
var Xi = Object.freeze({
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
}), Cp = "VisuallyHidden", Jr = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...Xi, ...e.style }
    }
  )
);
Jr.displayName = Cp;
var Sp = Jr;
function kp(e, t) {
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
      var y;
      const { scope: p, children: v, ...x } = m, h = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || i, g = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(h.Provider, { value: g, children: v });
    };
    d.displayName = a + "Provider";
    function f(m, p) {
      var h;
      const v = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[l]) || i, x = u.useContext(v);
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
  return o.scopeName = e, [r, Np(o, ...t)];
}
function Np(...e) {
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
  ), s = (h) => {
    const { scope: g, children: y } = h, b = S.useRef(null), w = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: y });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Mt(i), d = S.forwardRef(
    (h, g) => {
      const { scope: y, children: b } = h, w = a(i, y), E = se(g, w.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: E, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Mt(f), v = S.forwardRef(
    (h, g) => {
      const { scope: y, children: b, ...w } = h, E = S.useRef(null), C = se(g, E), k = a(f, y);
      return S.useEffect(() => (k.itemMap.set(E, { ref: E, ...w }), () => void k.itemMap.delete(E))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
    }
  );
  v.displayName = f;
  function x(h) {
    const g = a(e + "CollectionConsumer", h);
    return S.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (k, N) => w.indexOf(k.ref.current) - w.indexOf(N.ref.current)
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
var Pe = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Ep = u[" useInsertionEffect ".trim().toString()] || Pe;
function $e({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Mp({
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
        const p = Pp(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function Mp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return Ep(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Pp(e) {
  return typeof e == "function";
}
function Rp(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Oe = (e) => {
  const { present: t, children: n } = e, r = Ap(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = se(r.ref, Dp(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Oe.displayName = "Presence";
function Ap(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Rp(s, {
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
      const p = a.current, v = hr(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Pe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = hr(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = hr(r.current));
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
function Dp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _p = u[" useId ".trim().toString()] || (() => {
}), Op = 0;
function Se(e) {
  const [t, n] = u.useState(_p());
  return Pe(() => {
    n((r) => r ?? String(Op++));
  }, [e]), t ? `radix-${t}` : "";
}
var eo = "Collapsible", [jp, Zi] = Re(eo), [Ip, ja] = jp(eo), Qi = u.forwardRef(
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
      Ip,
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
Qi.displayName = eo;
var Ji = "CollapsibleTrigger", ec = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ja(Ji, n);
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
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ec.displayName = Ji;
var Ia = "CollapsibleContent", tc = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ja(Ia, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(Oe, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(Tp, { ...r, ref: t, present: a }) });
  }
);
tc.displayName = Ia;
var Tp = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = ja(Ia, n), [i, l] = u.useState(r), d = u.useRef(null), f = se(t, d), m = u.useRef(0), p = m.current, v = u.useRef(0), x = v.current, h = s.open || i, g = u.useRef(h), y = u.useRef(void 0);
  return u.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Pe(() => {
    const b = d.current;
    if (b) {
      y.current = y.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const w = b.getBoundingClientRect();
      m.current = w.height, v.current = w.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-state": Ta(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !h,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Ta(e) {
  return e ? "open" : "closed";
}
var $p = Qi, Fp = ec, Wp = tc, Lp = u.createContext(void 0);
function hn(e) {
  const t = u.useContext(Lp);
  return e || t || "ltr";
}
var tt = "Accordion", Vp = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [$a, Bp, zp] = Kn(tt), [to] = Re(tt, [
  zp,
  Zi
]), Fa = Zi(), nc = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx($a.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Up, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Gp, { ...o, ref: t }) });
  }
);
nc.displayName = tt;
var [rc, Hp] = to(tt), [oc, Yp] = to(
  tt,
  { collapsible: !1 }
), Gp = S.forwardRef(
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
      rc,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(oc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(ac, { ...s, ref: t }) })
      }
    );
  }
), Up = S.forwardRef((e, t) => {
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
    rc,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(oc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(ac, { ...a, ref: t }) })
    }
  );
}), [Kp, no] = to(tt), ac = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = se(i, t), d = Bp(n), m = hn(o) === "ltr", p = H(e.onKeyDown, (v) => {
      var P;
      if (!Vp.includes(v.key)) return;
      const x = v.target, h = d().filter(($) => {
        var B;
        return !((B = $.ref.current) != null && B.disabled);
      }), g = h.findIndex(($) => $.ref.current === x), y = h.length;
      if (g === -1) return;
      v.preventDefault();
      let b = g;
      const w = 0, E = y - 1, C = () => {
        b = g + 1, b > E && (b = w);
      }, k = () => {
        b = g - 1, b < w && (b = E);
      };
      switch (v.key) {
        case "Home":
          b = w;
          break;
        case "End":
          b = E;
          break;
        case "ArrowRight":
          a === "horizontal" && (m ? C() : k());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (m ? k() : C());
          break;
        case "ArrowUp":
          a === "vertical" && k();
          break;
      }
      const N = b % y;
      (P = h[N].ref.current) == null || P.focus();
    });
    return /* @__PURE__ */ c.jsx(
      Kp,
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
), Fr = "AccordionItem", [qp, Wa] = to(Fr), sc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = no(Fr, n), s = Hp(Fr, n), i = Fa(n), l = Se(), d = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      qp,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          $p,
          {
            "data-orientation": a.orientation,
            "data-state": fc(d),
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
sc.displayName = Fr;
var ic = "AccordionHeader", cc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(ic, n);
    return /* @__PURE__ */ c.jsx(
      Z.h3,
      {
        "data-orientation": o.orientation,
        "data-state": fc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
cc.displayName = ic;
var sa = "AccordionTrigger", lc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(sa, n), s = Yp(sa, n), i = Fa(n);
    return /* @__PURE__ */ c.jsx($a.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Fp,
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
lc.displayName = sa;
var dc = "AccordionContent", uc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(dc, n), s = Fa(n);
    return /* @__PURE__ */ c.jsx(
      Wp,
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
uc.displayName = dc;
function fc(e) {
  return e ? "open" : "closed";
}
var Ts = nc, Xp = sc, Zp = cc, Qp = lc, Jp = uc;
function Le(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function eh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var th = "DismissableLayer", ia = "dismissableLayer.update", nh = "dismissableLayer.pointerDownOutside", rh = "dismissableLayer.focusOutside", $s, mc = u.createContext({
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
    } = e, d = u.useContext(mc), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = se(t, (N) => m(N)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g), b = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, E = b >= y, C = ah((N) => {
      const P = N.target, $ = [...d.branches].some((B) => B.contains(P));
      !E || $ || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p), k = sh((N) => {
      const P = N.target;
      [...d.branches].some((B) => B.contains(P)) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p);
    return eh((N) => {
      b === d.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && ($s = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Fs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $s);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Fs());
    }, [f, d]), u.useEffect(() => {
      const N = () => v({});
      return document.addEventListener(ia, N), () => document.removeEventListener(ia, N);
    }, []), /* @__PURE__ */ c.jsx(
      Z.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: w ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Ut.displayName = th;
var oh = "DismissableLayerBranch", pc = u.forwardRef((e, t) => {
  const n = u.useContext(mc), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Z.div, { ...e, ref: o });
});
pc.displayName = oh;
function ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          hc(
            nh,
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
function sh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && hc(rh, n, { originalEvent: a }, {
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
function hc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Oa(o, a) : o.dispatchEvent(a);
}
var ih = Ut, ch = pc, $o = "focusScope.autoFocusOnMount", Fo = "focusScope.autoFocusOnUnmount", Ws = { bubbles: !1, cancelable: !0 }, lh = "FocusScope", qn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = Le(o), f = Le(a), m = u.useRef(null), p = se(t, (h) => l(h)), v = u.useRef({
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
      let h = function(w) {
        if (v.paused || !i) return;
        const E = w.target;
        i.contains(E) ? m.current = E : kt(m.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !i) return;
        const E = w.relatedTarget;
        E !== null && (i.contains(E) || kt(m.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && kt(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, v.paused]), u.useEffect(() => {
    if (i) {
      Vs.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent($o, Ws);
        i.addEventListener($o, d), i.dispatchEvent(y), y.defaultPrevented || (dh(hh(vc(i)), { select: !0 }), document.activeElement === h && kt(i));
      }
      return () => {
        i.removeEventListener($o, d), setTimeout(() => {
          const y = new CustomEvent(Fo, Ws);
          i.addEventListener(Fo, f), i.dispatchEvent(y), y.defaultPrevented || kt(h ?? document.body, { select: !0 }), i.removeEventListener(Fo, f), Vs.remove(v);
        }, 0);
      };
    }
  }, [i, d, f, v]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (g && y) {
        const b = h.currentTarget, [w, E] = uh(b);
        w && E ? !h.shiftKey && y === E ? (h.preventDefault(), n && kt(w, { select: !0 })) : h.shiftKey && y === w && (h.preventDefault(), n && kt(E, { select: !0 })) : y === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(Z.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
qn.displayName = lh;
function dh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (kt(r, { select: t }), document.activeElement !== n) return;
}
function uh(e) {
  const t = vc(e), n = Ls(t, e), r = Ls(t.reverse(), e);
  return [n, r];
}
function vc(e) {
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
    if (!fh(n, { upTo: t })) return n;
}
function fh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function mh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && mh(e) && t && e.select();
  }
}
var Vs = ph();
function ph() {
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
function hh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vh = "Portal", Kt = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Pe(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Rm.createPortal(/* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t }), s) : null;
});
Kt.displayName = vh;
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
function gc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function gh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Dr = "right-scroll-bar-position", _r = "width-before-scroll-bar", xh = "with-scroll-bars-hidden", bh = "--removed-body-scroll-bar-size";
function Lo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yh(e, t) {
  var n = _e(function() {
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
var wh = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Hs = /* @__PURE__ */ new WeakMap();
function Ch(e, t) {
  var n = yh(null, function(r) {
    return e.forEach(function(o) {
      return Lo(o, r);
    });
  });
  return wh(function() {
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
function Sh(e) {
  return e;
}
function kh(e, t) {
  t === void 0 && (t = Sh);
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
function Nh(e) {
  e === void 0 && (e = {});
  var t = kh(null);
  return t.options = st({ async: !0, ssr: !1 }, e), t;
}
var xc = function(e) {
  var t = e.sideCar, n = gc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, st({}, n));
};
xc.isSideCarExport = !0;
function Eh(e, t) {
  return e.useMedium(t), xc;
}
var bc = Nh(), Vo = function() {
}, oo = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Vo,
    onWheelCapture: Vo,
    onTouchMoveCapture: Vo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, E = gc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, k = Ch([n, t]), N = st(st({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: bc, removeScrollBar: d, shards: m, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), st(st({}, N), { ref: k })) : u.createElement(b, st({}, N, { className: l, ref: k }), i)
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
var Mh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ph() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Mh();
  return t && e.setAttribute("nonce", t), e;
}
function Rh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ah(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Dh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ph()) && (Rh(t, n), Ah(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, _h = function() {
  var e = Dh();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, yc = function() {
  var e = _h(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Oh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bo = function(e) {
  return parseInt(e || "", 10) || 0;
}, jh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bo(n), Bo(r), Bo(o)];
}, Ih = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Oh;
  var t = jh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Th = yc(), cn = "data-scroll-locked", $h = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xh, ` {
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
    `).concat(bh, ": ").concat(i, `px;
  }
`);
}, Ys = function() {
  var e = parseInt(document.body.getAttribute(cn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Fh = function() {
  u.useEffect(function() {
    return document.body.setAttribute(cn, (Ys() + 1).toString()), function() {
      var e = Ys() - 1;
      e <= 0 ? document.body.removeAttribute(cn) : document.body.setAttribute(cn, e.toString());
    };
  }, []);
}, Wh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Fh();
  var a = u.useMemo(function() {
    return Ih(o);
  }, [o]);
  return u.createElement(Th, { styles: $h(a, !t, o, n ? "" : "!important") });
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
var en = ca ? { passive: !1 } : !1, Lh = function(e) {
  return e.tagName === "TEXTAREA";
}, wc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Lh(e) && n[t] === "visible")
  );
}, Vh = function(e) {
  return wc(e, "overflowY");
}, Bh = function(e) {
  return wc(e, "overflowX");
}, Gs = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Cc(e, r);
    if (o) {
      var a = Sc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, zh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Hh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Cc = function(e, t) {
  return e === "v" ? Vh(t) : Bh(t);
}, Sc = function(e, t) {
  return e === "v" ? zh(t) : Hh(t);
}, Yh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Gh = function(e, t, n, r, o) {
  var a = Yh(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var v = Sc(e, i), x = v[0], h = v[1], g = v[2], y = h - g - a * x;
    (x || y) && Cc(e, i) && (m += y, p += x);
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
}, Uh = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Kh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qh = 0, tn = [];
function Xh(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(qh++)[0], a = u.useState(yc)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = gh([e.lockRef.current], (e.shards || []).map(Ks), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var y = gr(h), b = n.current, w = "deltaX" in h ? h.deltaX : b[0] - y[0], E = "deltaY" in h ? h.deltaY : b[1] - y[1], C, k = h.target, N = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in h && N === "h" && k.type === "range")
      return !1;
    var P = Gs(N, k);
    if (!P)
      return !0;
    if (P ? C = N : (C = N === "v" ? "h" : "v", P = Gs(N, k)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (w || E) && (r.current = C), !C)
      return !0;
    var $ = r.current || C;
    return Gh($, g, h, $ === "h" ? w : E);
  }, []), l = u.useCallback(function(h) {
    var g = h;
    if (!(!tn.length || tn[tn.length - 1] !== a)) {
      var y = "deltaY" in g ? Us(g) : gr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Uh(C.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(Ks).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), E = w.length > 0 ? i(g, w[0]) : !s.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, g, y, b) {
    var w = { name: h, delta: g, target: y, should: b, shadowParent: Zh(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = gr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, Us(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, gr(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return tn.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, en), document.addEventListener("touchmove", l, en), document.addEventListener("touchstart", f, en), function() {
      tn = tn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, en), document.removeEventListener("touchmove", l, en), document.removeEventListener("touchstart", f, en);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Kh(o) }) : null,
    v ? u.createElement(Wh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Zh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qh = Eh(bc, Xh);
var Xn = u.forwardRef(function(e, t) {
  return u.createElement(oo, st({}, e, { ref: t, sideCar: Qh }));
});
Xn.classNames = oo.classNames;
var Jh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {}, zo = 0, kc = function(e) {
  return e && (e.host || kc(e.parentNode));
}, ev = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = kc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, tv = function(e, t, n, r) {
  var o = ev(t, Array.isArray(e) ? e : [e]);
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
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (nn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          nn.set(p, h), a.set(p, g), s.push(p), h === 1 && x && xr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), zo++, function() {
    s.forEach(function(m) {
      var p = nn.get(m) - 1, v = a.get(m) - 1;
      nn.set(m, p), a.set(m, v), p || (xr.has(m) || m.removeAttribute(r), xr.delete(m)), v || m.removeAttribute(n);
    }), zo--, zo || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {});
  };
}, ao = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Jh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), tv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, so = "Dialog", [Nc] = Re(so), [nv, nt] = Nc(so), Ec = (e) => {
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
    nv,
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
Ec.displayName = so;
var Mc = "DialogTrigger", rv = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Mc, n), a = se(t, o.triggerRef);
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
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
rv.displayName = Mc;
var La = "DialogPortal", [ov, Pc] = Nc(La, {
  forceMount: void 0
}), Rc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = nt(La, t);
  return /* @__PURE__ */ c.jsx(ov, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: s }) })) });
};
Rc.displayName = La;
var Wr = "DialogOverlay", Ac = u.forwardRef(
  (e, t) => {
    const n = Pc(Wr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Wr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(sv, { ...o, ref: t }) }) : null;
  }
);
Ac.displayName = Wr;
var av = /* @__PURE__ */ Mt("DialogOverlay.RemoveScroll"), sv = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Wr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Xn, { as: av, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
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
), Bt = "DialogContent", Dc = u.forwardRef(
  (e, t) => {
    const n = Pc(Bt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Bt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(iv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(cv, { ...o, ref: t }) });
  }
);
Dc.displayName = Bt;
var iv = u.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = u.useRef(null), o = se(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ c.jsx(
      _c,
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
), cv = u.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      _c,
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
), _c = u.forwardRef(
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
        /* @__PURE__ */ c.jsx(dv, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(fv, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Va = "DialogTitle", Oc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Va, n);
    return /* @__PURE__ */ c.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Oc.displayName = Va;
var jc = "DialogDescription", lv = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(jc, n);
    return /* @__PURE__ */ c.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
lv.displayName = jc;
var Ic = "DialogClose", Tc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Ic, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Tc.displayName = Ic;
function Ba(e) {
  return e ? "open" : "closed";
}
var $c = "DialogTitleWarning", [nN, Fc] = kp($c, {
  contentName: Bt,
  titleName: Va,
  docsSlug: "dialog"
}), dv = ({ titleId: e }) => {
  const t = Fc($c), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, uv = "DialogDescriptionWarning", fv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fc(uv).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, za = Ec, Ha = Rc, Ya = Ac, Ga = Dc, Wc = Oc, mv = Tc;
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
var lo = "Checkbox", [pv] = Re(lo), [hv, Ua] = pv(lo);
function vv(e) {
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
  } = e, [p, v] = $e({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: lo
  }), [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useRef(!1), w = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: a,
    setChecked: v,
    control: x,
    setControl: h,
    name: i,
    form: s,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: Et(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ c.jsx(
    hv,
    {
      scope: t,
      ...E,
      children: gv(m) ? m(E) : r
    }
  );
}
var Lc = "CheckboxTrigger", Vc = u.forwardRef(
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
      isFormControl: v,
      bubbleInput: x
    } = Ua(Lc, e), h = se(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => m(g.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Et(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Uc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: H(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: H(n, (y) => {
          m((b) => Et(b) ? !0 : !b), x && v && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
Vc.displayName = Lc;
var Bc = u.forwardRef(
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
      vv,
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
            Vc,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            Gc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Bc.displayName = lo;
var zc = "CheckboxIndicator", Hc = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Ua(zc, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || Et(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            "data-state": Uc(a.checked),
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
Hc.displayName = zc;
var Yc = "CheckboxBubbleInput", Gc = u.forwardRef(
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
      setBubbleInput: v
    } = Ua(Yc, e), x = se(n, v), h = io(a), g = co(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, k = !o.current;
      if (h !== a && C) {
        const N = new Event("click", { bubbles: k });
        b.indeterminate = Et(a), C.call(b, Et(a) ? !1 : a), b.dispatchEvent(N);
      }
    }, [p, h, a, o]);
    const y = u.useRef(Et(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? y.current,
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
Gc.displayName = Yc;
function gv(e) {
  return typeof e == "function";
}
function Et(e) {
  return e === "indeterminate";
}
function Uc(e) {
  return Et(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const xv = ["top", "right", "bottom", "left"], Pt = Math.min, He = Math.max, Lr = Math.round, yr = Math.floor, ut = (e) => ({
  x: e,
  y: e
}), bv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yv = {
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
const wv = /* @__PURE__ */ new Set(["top", "bottom"]);
function lt(e) {
  return wv.has(wt(e)) ? "y" : "x";
}
function Xa(e) {
  return Ka(lt(e));
}
function Cv(e, t, n) {
  n === void 0 && (n = !1);
  const r = vn(e), o = Xa(e), a = qa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Vr(s)), [s, Vr(s)];
}
function Sv(e) {
  const t = Vr(e);
  return [da(e), t, da(t)];
}
function da(e) {
  return e.replace(/start|end/g, (t) => yv[t]);
}
const qs = ["left", "right"], Xs = ["right", "left"], kv = ["top", "bottom"], Nv = ["bottom", "top"];
function Ev(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xs : qs : t ? qs : Xs;
    case "left":
    case "right":
      return t ? kv : Nv;
    default:
      return [];
  }
}
function Mv(e, t, n, r) {
  const o = vn(e);
  let a = Ev(wt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(da)))), a;
}
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => bv[t]);
}
function Pv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Kc(e) {
  return typeof e != "number" ? Pv(e) : {
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
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: m
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
const Rv = async (e, t, n) => {
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
  } = Zs(d, r, l), p = r, v = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
      x: b,
      y: w,
      data: E,
      reset: C
    } = await y({
      x: f,
      y: m,
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
    f = b ?? f, m = w ?? m, v = {
      ...v,
      [g]: {
        ...v[g],
        ...E
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = Zs(d, p, l)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
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
    padding: v = 0
  } = yt(t, e), x = Kc(v), g = i[p ? m === "floating" ? "reference" : "floating" : m], y = Br(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), E = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Br(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - C.top + x.top) / E.y,
    bottom: (C.bottom - y.bottom + x.bottom) / E.y,
    left: (y.left - C.left + x.left) / E.x,
    right: (C.right - y.right + x.right) / E.x
  };
}
const Av = (e) => ({
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
    const m = Kc(f), p = {
      x: n,
      y: r
    }, v = Xa(o), x = qa(v), h = await s.getDimensions(d), g = v === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", E = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let N = k ? k[w] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(k))) && (N = i.floating[w] || a.floating[x]);
    const P = E / 2 - C / 2, $ = N / 2 - h[x] / 2 - 1, B = Pt(m[y], $), W = Pt(m[b], $), G = B, X = N - h[x] - W, I = N / 2 - h[x] / 2 + P, z = la(G, I, X), L = !l.arrow && vn(o) != null && I !== z && a.reference[x] / 2 - (I < G ? B : W) - h[x] / 2 < 0, Y = L ? I < G ? I - G : I - X : 0;
    return {
      [v]: p[v] + Y,
      data: {
        [v]: z,
        centerOffset: I - z - Y,
        ...L && {
          alignmentOffset: Y
        }
      },
      reset: L
    };
  }
}), Dv = function(e) {
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
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...g
      } = yt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = wt(o), b = lt(i), w = wt(i) === i, E = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (w || !h ? [Vr(i)] : Sv(i)), k = x !== "none";
      !p && k && C.push(...Mv(i, h, x, E));
      const N = [i, ...C], P = await Ln(t, g), $ = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && $.push(P[y]), m) {
        const I = Cv(o, s, E);
        $.push(P[I[0]], P[I[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: $
      }], !$.every((I) => I <= 0)) {
        var W, G;
        const I = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, z = N[I];
        if (z && (!(m === "alignment" ? b !== lt(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((_) => lt(_.placement) === b ? _.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: B
            },
            reset: {
              placement: z
            }
          };
        let L = (G = B.filter((Y) => Y.overflows[0] <= 0).sort((Y, _) => Y.overflows[1] - _.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!L)
          switch (v) {
            case "bestFit": {
              var X;
              const Y = (X = B.filter((_) => {
                if (k) {
                  const F = lt(_.placement);
                  return F === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((F) => F > 0).reduce((F, ne) => F + ne, 0)]).sort((_, F) => _[1] - F[1])[0]) == null ? void 0 : X[0];
              Y && (L = Y);
              break;
            }
            case "initialPlacement":
              L = i;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
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
  return xv.some((t) => e[t] >= 0);
}
const _v = function(e) {
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
}, qc = /* @__PURE__ */ new Set(["left", "top"]);
async function Ov(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = wt(n), i = vn(n), l = lt(n) === "y", d = qc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = yt(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
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
  return i && typeof x == "number" && (v = i === "end" ? x * -1 : x), l ? {
    x: v * f,
    y: p * d
  } : {
    x: p * d,
    y: v * f
  };
}
const jv = function(e) {
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
      } = t, l = await Ov(t, e);
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
}, Iv = function(e) {
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
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = yt(e, t), d = {
        x: n,
        y: r
      }, f = await Ln(t, l), m = lt(wt(o)), p = Ka(m);
      let v = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + f[g], w = v - f[y];
        v = la(b, v, w);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = x + f[g], w = x - f[y];
        x = la(b, x, w);
      }
      const h = i.fn({
        ...t,
        [p]: v,
        [m]: x
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [p]: a,
            [m]: s
          }
        }
      };
    }
  };
}, Tv = function(e) {
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
      let v = f[p], x = f[m];
      const h = yt(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const w = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[w] + g.mainAxis, C = a.reference[p] + a.reference[w] - g.mainAxis;
        v < E ? v = E : v > C && (v = C);
      }
      if (d) {
        var y, b;
        const w = p === "y" ? "width" : "height", E = qc.has(wt(o)), C = a.reference[m] - a.floating[w] + (E && ((y = s.offset) == null ? void 0 : y[m]) || 0) + (E ? 0 : g.crossAxis), k = a.reference[m] + a.reference[w] + (E ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (E ? g.crossAxis : 0);
        x < C ? x = C : x > k && (x = k);
      }
      return {
        [p]: v,
        [m]: x
      };
    }
  };
}, $v = function(e) {
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
      } = yt(e, t), f = await Ln(t, d), m = wt(o), p = vn(o), v = lt(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, y;
      m === "top" || m === "bottom" ? (g = m, y = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m, g = p === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, w = x - f.left - f.right, E = Pt(h - f[g], b), C = Pt(x - f[y], w), k = !t.middlewareData.shift;
      let N = E, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w), (r = t.middlewareData.shift) != null && r.enabled.y && (N = b), k && !p) {
        const B = He(f.left, 0), W = He(f.right, 0), G = He(f.top, 0), X = He(f.bottom, 0);
        v ? P = x - 2 * (B !== 0 || W !== 0 ? B + W : He(f.left, f.right)) : N = h - 2 * (G !== 0 || X !== 0 ? G + X : He(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: N
      });
      const $ = await s.getDimensions(i.floating);
      return x !== $.width || h !== $.height ? {
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
  return Xc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (Xc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xc(e) {
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
const Fv = /* @__PURE__ */ new Set(["inline", "contents"]);
function Zn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Fv.has(o);
}
const Wv = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Lv(e) {
  return Wv.has(gn(e));
}
const Vv = [":popover-open", ":modal"];
function fo(e) {
  return Vv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Bv = ["transform", "translate", "scale", "rotate", "perspective"], zv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Hv = ["paint", "layout", "strict", "content"];
function Za(e) {
  const t = Qa(), n = Je(e) ? et(e) : e;
  return Bv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || zv.some((r) => (n.willChange || "").includes(r)) || Hv.some((r) => (n.contain || "").includes(r));
}
function Yv(e) {
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
const Gv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function un(e) {
  return Gv.has(gn(e));
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
function Zc(e) {
  const t = Rt(e);
  return un(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Zn(t) ? t : Zc(t);
}
function Vn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Zc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ye(o);
  if (a) {
    const i = ua(s);
    return t.concat(s, s.visualViewport || [], Zn(o) ? o : [], i && n ? Vn(i) : []);
  }
  return t.concat(o, Vn(o, [], n));
}
function ua(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qc(e) {
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
  } = Qc(t);
  let s = (a ? Lr(n.width) : n.width) / r, i = (a ? Lr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Uv = /* @__PURE__ */ ut(0);
function Jc(e) {
  const t = Ye(e);
  return !Qa() || !t.visualViewport ? Uv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ja(e);
  let s = ut(1);
  t && (r ? Je(r) && (s = ln(r)) : s = ln(e));
  const i = Kv(a, n, r) ? Jc(a) : ut(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = Ye(a), v = r && Je(r) ? Ye(r) : r;
    let x = p, h = ua(x);
    for (; h && r && v !== x; ) {
      const g = ln(h), y = h.getBoundingClientRect(), b = et(h), w = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, E = y.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += w, d += E, x = Ye(h), h = ua(x);
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
function el(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - po(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function qv(e) {
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
    const v = zt(r);
    d = ln(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = s && !m && !a ? el(s, l) : ut(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function Xv(e) {
  return Array.from(e.getClientRects());
}
function Zv(e) {
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
function Qv(e, t) {
  const n = Ye(e), r = mt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Qa();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = po(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - v);
    x <= ti && (a -= x);
  } else d <= ti && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Jv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function eg(e, t) {
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
    r = Qv(e, n);
  else if (t === "document")
    r = Zv(mt(e));
  else if (Je(t))
    r = eg(t, n);
  else {
    const o = Jc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Br(r);
}
function tl(e, t) {
  const n = Rt(e);
  return n === t || !Je(n) || un(n) ? !1 : et(n).position === "fixed" || tl(n, t);
}
function tg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vn(e, [], !1).filter((i) => Je(i) && gn(i) !== "body"), o = null;
  const a = et(e).position === "fixed";
  let s = a ? Rt(e) : e;
  for (; Je(s) && !un(s); ) {
    const i = et(s), l = Za(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Jv.has(o.position) || Zn(s) && !l && tl(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Rt(s);
  }
  return t.set(e, r), r;
}
function ng(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? fo(t) ? [] : tg(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
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
function rg(e) {
  const {
    width: t,
    height: n
  } = Qc(e);
  return {
    width: t,
    height: n
  };
}
function og(e, t, n) {
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
  const f = o && !r && !a ? el(o, i) : ut(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
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
function nl(e, t) {
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
  for (; r && Lv(r) && Ho(r); )
    r = ri(r, t);
  return r && un(r) && Ho(r) && !Za(r) ? n : r || Yv(e) || n;
}
const ag = async function(e) {
  const t = this.getOffsetParent || nl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: og(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sg(e) {
  return et(e).direction === "rtl";
}
const ig = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qv,
  getDocumentElement: mt,
  getClippingRect: ng,
  getOffsetParent: nl,
  getElementRects: ag,
  getClientRects: Xv,
  getDimensions: rg,
  getScale: ln,
  isElement: Je,
  isRTL: sg
};
function rl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cg(e, t) {
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
      height: v
    } = d;
    if (i || t(), !p || !v)
      return;
    const x = yr(m), h = yr(o.clientWidth - (f + p)), g = yr(o.clientHeight - (m + v)), y = yr(f), w = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: He(0, Pt(1, l)) || 1
    };
    let E = !0;
    function C(k) {
      const N = k[0].intersectionRatio;
      if (N !== l) {
        if (!E)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !rl(d, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function lg(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Ja(e), f = o || a ? [...d ? Vn(d) : [], ...Vn(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const m = d && i ? cg(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? zt(e) : null;
  l && g();
  function g() {
    const y = zt(e);
    h && !rl(h, y) && n(), h = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const dg = jv, ug = Iv, fg = Dv, mg = $v, pg = _v, oi = Av, hg = Tv, vg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ig,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Rv(e, t, {
    ...o,
    platform: a
  });
};
var gg = typeof document < "u", xg = function() {
}, Or = gg ? Vi : xg;
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
function ol(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ai(e, t) {
  const n = ol(e);
  return Math.round(t * n) / n;
}
function Yo(e) {
  const t = u.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
function bg(e) {
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
  }), [p, v] = u.useState(r);
  zr(p, r) || v(r);
  const [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useCallback((_) => {
    _ !== k.current && (k.current = _, h(_));
  }, []), w = u.useCallback((_) => {
    _ !== N.current && (N.current = _, y(_));
  }, []), E = a || x, C = s || g, k = u.useRef(null), N = u.useRef(null), P = u.useRef(f), $ = l != null, B = Yo(l), W = Yo(o), G = Yo(d), X = u.useCallback(() => {
    if (!k.current || !N.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    W.current && (_.platform = W.current), vg(k.current, N.current, _).then((F) => {
      const ne = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      I.current && !zr(P.current, ne) && (P.current = ne, Un.flushSync(() => {
        m(ne);
      }));
    });
  }, [p, t, n, W, G]);
  Or(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [d]);
  const I = u.useRef(!1);
  Or(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Or(() => {
    if (E && (k.current = E), C && (N.current = C), E && C) {
      if (B.current)
        return B.current(E, C, X);
      X();
    }
  }, [E, C, X, B, $]);
  const z = u.useMemo(() => ({
    reference: k,
    floating: N,
    setReference: b,
    setFloating: w
  }), [b, w]), L = u.useMemo(() => ({
    reference: E,
    floating: C
  }), [E, C]), Y = u.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return _;
    const F = ai(L.floating, f.x), ne = ai(L.floating, f.y);
    return i ? {
      ..._,
      transform: "translate(" + F + "px, " + ne + "px)",
      ...ol(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: ne
    };
  }, [n, i, L.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: X,
    refs: z,
    elements: L,
    floatingStyles: Y
  }), [f, X, z, L, Y]);
}
const yg = (e) => {
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
}, wg = (e, t) => ({
  ...dg(e),
  options: [e, t]
}), Cg = (e, t) => ({
  ...ug(e),
  options: [e, t]
}), Sg = (e, t) => ({
  ...hg(e),
  options: [e, t]
}), kg = (e, t) => ({
  ...fg(e),
  options: [e, t]
}), Ng = (e, t) => ({
  ...mg(e),
  options: [e, t]
}), Eg = (e, t) => ({
  ...pg(e),
  options: [e, t]
}), Mg = (e, t) => ({
  ...yg(e),
  options: [e, t]
});
var Pg = "Arrow", al = u.forwardRef((e, t) => {
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
al.displayName = Pg;
var Rg = al, es = "Popper", [sl, Dt] = Re(es), [Ag, il] = sl(es), cl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(Ag, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
cl.displayName = es;
var ll = "PopperAnchor", dl = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = il(ll, n), s = u.useRef(null), i = se(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Z.div, { ...o, ref: i });
  }
);
dl.displayName = ll;
var ts = "PopperContent", [Dg, _g] = sl(ts), ul = u.forwardRef(
  (e, t) => {
    var D, K, Q, te, de, ue;
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
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...h
    } = e, g = il(ts, n), [y, b] = u.useState(null), w = se(t, (Me) => b(Me)), [E, C] = u.useState(null), k = co(E), N = (k == null ? void 0 : k.width) ?? 0, P = (k == null ? void 0 : k.height) ?? 0, $ = r + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, W = Array.isArray(d) ? d : [d], G = W.length > 0, X = {
      padding: B,
      boundary: W.filter(jg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: I, floatingStyles: z, placement: L, isPositioned: Y, middlewareData: _ } = bg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: (...Me) => lg(...Me, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        wg({ mainAxis: o + P, alignmentAxis: s }),
        l && Cg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Sg() : void 0,
          ...X
        }),
        l && kg({ ...X }),
        Ng({
          ...X,
          apply: ({ elements: Me, rects: Te, availableWidth: rt, availableHeight: Xe }) => {
            const { width: ot, height: Zt } = Te.reference, We = Me.floating.style;
            We.setProperty("--radix-popper-available-width", `${rt}px`), We.setProperty("--radix-popper-available-height", `${Xe}px`), We.setProperty("--radix-popper-anchor-width", `${ot}px`), We.setProperty("--radix-popper-anchor-height", `${Zt}px`);
          }
        }),
        E && Mg({ element: E, padding: i }),
        Ig({ arrowWidth: N, arrowHeight: P }),
        p && Eg({ strategy: "referenceHidden", ...X })
      ]
    }), [F, ne] = pl(L), A = Le(x);
    Pe(() => {
      Y && (A == null || A());
    }, [Y, A]);
    const M = (D = _.arrow) == null ? void 0 : D.x, R = (K = _.arrow) == null ? void 0 : K.y, j = ((Q = _.arrow) == null ? void 0 : Q.centerOffset) !== 0, [U, T] = u.useState();
    return Pe(() => {
      y && T(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: Y ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (te = _.transformOrigin) == null ? void 0 : te.x,
            (de = _.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ue = _.hide) == null ? void 0 : ue.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          Dg,
          {
            scope: n,
            placedSide: F,
            onArrowChange: C,
            arrowX: M,
            arrowY: R,
            shouldHideArrow: j,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                "data-side": F,
                "data-align": ne,
                ...h,
                ref: w,
                style: {
                  ...h.style,
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
ul.displayName = ts;
var fl = "PopperArrow", Og = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ml = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = _g(fl, r), s = Og[a.placedSide];
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
          Rg,
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
ml.displayName = fl;
function jg(e) {
  return e !== null;
}
var Ig = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = pl(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, h = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = s ? m : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = s ? m : `${v}px`), { data: { x, y: h } };
  }
});
function pl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ho = cl, Qn = dl, vo = ul, go = ml, Go = "rovingFocusGroup.onEntryFocus", Tg = { bubbles: !1, cancelable: !0 }, Jn = "RovingFocusGroup", [fa, hl, $g] = Kn(Jn), [Fg, xn] = Re(
  Jn,
  [$g]
), [Wg, Lg] = Fg(Jn), vl = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(fa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(fa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Vg, { ...e, ref: t }) }) })
);
vl.displayName = Jn;
var Vg = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), v = se(t, p), x = hn(a), [h, g] = $e({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Jn
  }), [y, b] = u.useState(!1), w = Le(d), E = hl(n), C = u.useRef(!1), [k, N] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Go, w), () => P.removeEventListener(Go, w);
  }, [w]), /* @__PURE__ */ c.jsx(
    Wg,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
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
          tabIndex: y || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: H(e.onFocus, (P) => {
            const $ = !C.current;
            if (P.target === P.currentTarget && $ && !y) {
              const B = new CustomEvent(Go, Tg);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const W = E().filter((L) => L.focusable), G = W.find((L) => L.active), X = W.find((L) => L.id === h), z = [G, X, ...W].filter(
                  Boolean
                ).map((L) => L.ref.current);
                bl(z, f);
              }
            }
            C.current = !1;
          }),
          onBlur: H(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), gl = "RovingFocusGroupItem", xl = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Se(), d = a || l, f = Lg(gl, n), m = f.currentTabStopId === d, p = hl(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
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
            onMouseDown: H(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: H(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: H(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = Hg(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = p().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const E = w.indexOf(g.currentTarget);
                  w = f.loop ? Yg(w, E + 1) : w.slice(E + 1);
                }
                setTimeout(() => bl(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
xl.displayName = gl;
var Bg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Hg(e, t, n) {
  const r = zg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Bg[r];
}
function bl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Yg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ns = vl, rs = xl, ma = ["Enter", " "], Gg = ["ArrowDown", "PageUp", "Home"], yl = ["ArrowUp", "PageDown", "End"], Ug = [...Gg, ...yl], Kg = {
  ltr: [...ma, "ArrowRight"],
  rtl: [...ma, "ArrowLeft"]
}, qg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, er = "Menu", [Bn, Xg, Zg] = Kn(er), [qt, wl] = Re(er, [
  Zg,
  Dt,
  xn
]), xo = Dt(), Cl = xn(), [Qg, Xt] = qt(er), [Jg, tr] = qt(er), Sl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = xo(t), [l, d] = u.useState(null), f = u.useRef(!1), m = Le(a), p = hn(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(ho, { ...i, children: /* @__PURE__ */ c.jsx(
    Qg,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Jg,
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
Sl.displayName = er;
var ex = "MenuAnchor", os = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(Qn, { ...o, ...r, ref: t });
  }
);
os.displayName = ex;
var as = "MenuPortal", [tx, kl] = qt(as, {
  forceMount: void 0
}), Nl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Xt(as, t);
  return /* @__PURE__ */ c.jsx(tx, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
Nl.displayName = as;
var qe = "MenuContent", [nx, ss] = qt(qe), El = u.forwardRef(
  (e, t) => {
    const n = kl(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(rx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(ox, { ...o, ref: t }) }) }) });
  }
), rx = u.forwardRef(
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
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), ox = u.forwardRef((e, t) => {
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
}), ax = /* @__PURE__ */ Mt("MenuContent.ScrollLock"), is = u.forwardRef(
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
      onDismiss: v,
      disableOutsideScroll: x,
      ...h
    } = e, g = Xt(qe, n), y = tr(qe, n), b = xo(n), w = Cl(n), E = Xg(n), [C, k] = u.useState(null), N = u.useRef(null), P = se(t, N, g.onContentChange), $ = u.useRef(0), B = u.useRef(""), W = u.useRef(0), G = u.useRef(null), X = u.useRef("right"), I = u.useRef(0), z = x ? Xn : u.Fragment, L = x ? { as: ax, allowPinchZoom: !0 } : void 0, Y = (F) => {
      var D, K;
      const ne = B.current + F, A = E().filter((Q) => !Q.disabled), M = document.activeElement, R = (D = A.find((Q) => Q.ref.current === M)) == null ? void 0 : D.textValue, j = A.map((Q) => Q.textValue), U = gx(j, ne, R), T = (K = A.find((Q) => Q.textValue === U)) == null ? void 0 : K.ref.current;
      (function Q(te) {
        B.current = te, window.clearTimeout($.current), te !== "" && ($.current = window.setTimeout(() => Q(""), 1e3));
      })(ne), T && setTimeout(() => T.focus());
    };
    u.useEffect(() => () => window.clearTimeout($.current), []), ro();
    const _ = u.useCallback((F) => {
      var A, M;
      return X.current === ((A = G.current) == null ? void 0 : A.side) && bx(F, (M = G.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      nx,
      {
        scope: n,
        searchRef: B,
        onItemEnter: u.useCallback(
          (F) => {
            _(F) && F.preventDefault();
          },
          [_]
        ),
        onItemLeave: u.useCallback(
          (F) => {
            var ne;
            _(F) || ((ne = N.current) == null || ne.focus(), k(null));
          },
          [_]
        ),
        onTriggerLeave: u.useCallback(
          (F) => {
            _(F) && F.preventDefault();
          },
          [_]
        ),
        pointerGraceTimerRef: W,
        onPointerGraceIntentChange: u.useCallback((F) => {
          G.current = F;
        }, []),
        children: /* @__PURE__ */ c.jsx(z, { ...L, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: H(a, (F) => {
              var ne;
              F.preventDefault(), (ne = N.current) == null || ne.focus({ preventScroll: !0 });
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
                onDismiss: v,
                children: /* @__PURE__ */ c.jsx(
                  ns,
                  {
                    asChild: !0,
                    ...w,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: H(l, (F) => {
                      y.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      vo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Bl(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: H(h.onKeyDown, (F) => {
                          const A = F.target.closest("[data-radix-menu-content]") === F.currentTarget, M = F.ctrlKey || F.altKey || F.metaKey, R = F.key.length === 1;
                          A && (F.key === "Tab" && F.preventDefault(), !M && R && Y(F.key));
                          const j = N.current;
                          if (F.target !== j || !Ug.includes(F.key)) return;
                          F.preventDefault();
                          const T = E().filter((D) => !D.disabled).map((D) => D.ref.current);
                          yl.includes(F.key) && T.reverse(), hx(T);
                        }),
                        onBlur: H(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout($.current), B.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          zn((F) => {
                            const ne = F.target, A = I.current !== F.clientX;
                            if (F.currentTarget.contains(ne) && A) {
                              const M = F.clientX > I.current ? "right" : "left";
                              X.current = M, I.current = F.clientX;
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
El.displayName = qe;
var sx = "MenuGroup", cs = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { role: "group", ...r, ref: t });
  }
);
cs.displayName = sx;
var ix = "MenuLabel", Ml = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Ml.displayName = ix;
var Hr = "MenuItem", si = "menu.itemSelect", bo = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = tr(Hr, e.__scopeMenu), i = ss(Hr, e.__scopeMenu), l = se(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(si, { bubbles: !0, cancelable: !0 });
        m.addEventListener(si, (v) => r == null ? void 0 : r(v), { once: !0 }), Oa(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Pl,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: H(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: H(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || ma.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
bo.displayName = Hr;
var Pl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ss(Hr, n), i = Cl(n), l = u.useRef(null), d = se(t, l), [f, m] = u.useState(!1), [p, v] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
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
            onFocus: H(e.onFocus, () => m(!0)),
            onBlur: H(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), cx = "MenuCheckboxItem", Rl = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(jl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ds(n),
        onSelect: H(
          o.onSelect,
          () => r == null ? void 0 : r(Yr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Rl.displayName = cx;
var Al = "MenuRadioGroup", [lx, dx] = qt(
  Al,
  { value: void 0, onValueChange: () => {
  } }
), Dl = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Le(r);
    return /* @__PURE__ */ c.jsx(lx, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(cs, { ...o, ref: t }) });
  }
);
Dl.displayName = Al;
var _l = "MenuRadioItem", Ol = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = dx(_l, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(jl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ds(a),
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
Ol.displayName = _l;
var ls = "MenuItemIndicator", [jl, ux] = qt(
  ls,
  { checked: !1 }
), Il = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = ux(ls, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
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
Il.displayName = ls;
var fx = "MenuSeparator", Tl = u.forwardRef(
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
Tl.displayName = fx;
var mx = "MenuArrow", $l = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
$l.displayName = mx;
var px = "MenuSub", [rN, Fl] = qt(px), In = "MenuSubTrigger", Wl = u.forwardRef(
  (e, t) => {
    const n = Xt(In, e.__scopeMenu), r = tr(In, e.__scopeMenu), o = Fl(In, e.__scopeMenu), a = ss(In, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(os, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Pl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Bl(n.open),
        ...e,
        ref: bt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          zn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          zn((m) => {
            var v, x;
            f();
            const p = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const h = (x = n.content) == null ? void 0 : x.dataset.side, g = h === "right", y = g ? -5 : 5, b = p[g ? "left" : "right"], w = p[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: m.clientX + y, y: m.clientY },
                  { x: b, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x: b, y: p.bottom }
                ],
                side: h
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
        onKeyDown: H(e.onKeyDown, (m) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Kg[r.dir].includes(m.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Wl.displayName = In;
var Ll = "MenuSubContent", Vl = u.forwardRef(
  (e, t) => {
    const n = kl(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu), i = Fl(Ll, e.__scopeMenu), l = u.useRef(null), d = se(t, l);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
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
        onFocusOutside: H(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          var v;
          const m = f.currentTarget.contains(f.target), p = qg[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (v = i.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Vl.displayName = Ll;
function Bl(e) {
  return e ? "open" : "closed";
}
function Yr(e) {
  return e === "indeterminate";
}
function ds(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function hx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function vx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function gx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = vx(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function xx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function bx(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return xx(n, t);
}
function zn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var yx = Sl, wx = os, Cx = Nl, Sx = El, kx = cs, Nx = Ml, Ex = bo, Mx = Rl, Px = Dl, Rx = Ol, Ax = Il, Dx = Tl, _x = $l, Ox = Wl, jx = Vl, yo = "DropdownMenu", [Ix] = Re(
  yo,
  [wl]
), Fe = wl(), [Tx, zl] = Ix(yo), Hl = (e) => {
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
    Tx,
    {
      scope: t,
      triggerId: Se(),
      triggerRef: d,
      contentId: Se(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(yx, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
Hl.displayName = yo;
var Yl = "DropdownMenuTrigger", Gl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = zl(Yl, n), s = Fe(n);
    return /* @__PURE__ */ c.jsx(wx, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
Gl.displayName = Yl;
var $x = "DropdownMenuPortal", Ul = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Fe(t);
  return /* @__PURE__ */ c.jsx(Cx, { ...r, ...n });
};
Ul.displayName = $x;
var Kl = "DropdownMenuContent", ql = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = zl(Kl, n), a = Fe(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Sx,
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
ql.displayName = Kl;
var Fx = "DropdownMenuGroup", Wx = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(kx, { ...o, ...r, ref: t });
  }
);
Wx.displayName = Fx;
var Lx = "DropdownMenuLabel", Xl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Nx, { ...o, ...r, ref: t });
  }
);
Xl.displayName = Lx;
var Vx = "DropdownMenuItem", Zl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Ex, { ...o, ...r, ref: t });
  }
);
Zl.displayName = Vx;
var Bx = "DropdownMenuCheckboxItem", zx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Mx, { ...o, ...r, ref: t });
});
zx.displayName = Bx;
var Hx = "DropdownMenuRadioGroup", Yx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Px, { ...o, ...r, ref: t });
});
Yx.displayName = Hx;
var Gx = "DropdownMenuRadioItem", Ux = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Rx, { ...o, ...r, ref: t });
});
Ux.displayName = Gx;
var Kx = "DropdownMenuItemIndicator", qx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Ax, { ...o, ...r, ref: t });
});
qx.displayName = Kx;
var Xx = "DropdownMenuSeparator", Ql = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Dx, { ...o, ...r, ref: t });
});
Ql.displayName = Xx;
var Zx = "DropdownMenuArrow", Qx = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(_x, { ...o, ...r, ref: t });
  }
);
Qx.displayName = Zx;
var Jx = "DropdownMenuSubTrigger", e0 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Ox, { ...o, ...r, ref: t });
});
e0.displayName = Jx;
var t0 = "DropdownMenuSubContent", n0 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(
    jx,
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
n0.displayName = t0;
var r0 = Hl, o0 = Gl, a0 = Ul, s0 = ql, i0 = Xl, ii = Zl, c0 = Ql;
function ci(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var wo = "Popover", [Jl] = Re(wo, [
  Dt
]), nr = Dt(), [l0, _t] = Jl(wo), ed = (e) => {
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
    l0,
    {
      scope: t,
      contentId: Se(),
      triggerRef: l,
      open: m,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
ed.displayName = wo;
var td = "PopoverAnchor", nd = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(td, n), a = nr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Qn, { ...a, ...r, ref: t });
  }
);
nd.displayName = td;
var rd = "PopoverTrigger", od = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(rd, n), a = nr(n), s = se(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ld(o.open),
        ...r,
        ref: s,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...a, children: i });
  }
);
od.displayName = rd;
var us = "PopoverPortal", [d0, u0] = Jl(us, {
  forceMount: void 0
}), ad = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = _t(us, t);
  return /* @__PURE__ */ c.jsx(d0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
ad.displayName = us;
var fn = "PopoverContent", sd = u.forwardRef(
  (e, t) => {
    const n = u0(fn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = _t(fn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(m0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(p0, { ...o, ref: t }) });
  }
);
sd.displayName = fn;
var f0 = /* @__PURE__ */ Mt("PopoverContent.RemoveScroll"), m0 = u.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = u.useRef(null), o = se(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return ao(s);
    }, []), /* @__PURE__ */ c.jsx(Xn, { as: f0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      id,
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
), p0 = u.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      id,
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
), id = u.forwardRef(
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
                "data-state": ld(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
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
), cd = "PopoverClose", h0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(cd, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
h0.displayName = cd;
var v0 = "PopoverArrow", g0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = nr(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
g0.displayName = v0;
function ld(e) {
  return e ? "open" : "closed";
}
var dd = ed, x0 = nd, ud = od, fd = ad, fs = sd, ms = "Progress", ps = 100, [b0] = Re(ms), [y0, w0] = b0(ms), md = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = C0,
      ...s
    } = e;
    (o || o === 0) && !li(o) && console.error(S0(`${o}`, "Progress"));
    const i = li(o) ? o : ps;
    r !== null && !di(r, i) && console.error(k0(`${r}`, "Progress"));
    const l = di(r, i) ? r : null, d = Gr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(y0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Gr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": vd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
md.displayName = ms;
var pd = "ProgressIndicator", hd = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = w0(pd, n);
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": vd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
hd.displayName = pd;
function C0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function vd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gr(e) {
  return typeof e == "number";
}
function li(e) {
  return Gr(e) && !isNaN(e) && e > 0;
}
function di(e, t) {
  return Gr(e) && !isNaN(e) && e <= t && e >= 0;
}
function S0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ps}\`.`;
}
function k0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ps} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N0 = md, E0 = hd, hs = "Radio", [M0, gd] = Re(hs), [P0, R0] = M0(hs), xd = u.forwardRef(
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
    } = e, [m, p] = u.useState(null), v = se(t, (g) => p(g)), x = u.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(P0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Cd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: v,
          onClick: H(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        wd,
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
xd.displayName = hs;
var bd = "RadioIndicator", yd = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = R0(bd, n);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": Cd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
yd.displayName = bd;
var A0 = "RadioBubbleInput", wd = u.forwardRef(
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
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== n && v) {
        const x = new Event("click", { bubbles: r });
        v.call(f, n), f.dispatchEvent(x);
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
wd.displayName = A0;
function Cd(e) {
  return e ? "checked" : "unchecked";
}
var D0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Co = "RadioGroup", [_0] = Re(Co, [
  xn,
  gd
]), Sd = xn(), kd = gd(), [O0, j0] = _0(Co), Nd = u.forwardRef(
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
    } = e, v = Sd(n), x = hn(d), [h, g] = $e({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: Co
    });
    return /* @__PURE__ */ c.jsx(
      O0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          ns,
          {
            asChild: !0,
            ...v,
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
Nd.displayName = Co;
var Ed = "RadioGroupItem", Md = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = j0(Ed, n), s = a.disabled || r, i = Sd(n), l = kd(n), d = u.useRef(null), f = se(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        D0.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      rs,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          xd,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
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
Md.displayName = Ed;
var I0 = "RadioGroupIndicator", Pd = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = kd(n);
    return /* @__PURE__ */ c.jsx(yd, { ...o, ...r, ref: t });
  }
);
Pd.displayName = I0;
var T0 = Nd, $0 = Md, F0 = Pd, W0 = [" ", "Enter", "ArrowUp", "ArrowDown"], L0 = [" ", "Enter"], Ht = "Select", [So, ko, V0] = Kn(Ht), [bn] = Re(Ht, [
  V0,
  Dt
]), No = Dt(), [B0, Ot] = bn(Ht), [z0, H0] = bn(Ht), Rd = (e) => {
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
    required: v,
    form: x
  } = e, h = No(t), [g, y] = u.useState(null), [b, w] = u.useState(null), [E, C] = u.useState(!1), k = hn(d), [N, P] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ht
  }), [$, B] = $e({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ht
  }), W = u.useRef(null), G = g ? x || !!g.closest("form") : !0, [X, I] = u.useState(/* @__PURE__ */ new Set()), z = Array.from(X).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ c.jsx(ho, { ...h, children: /* @__PURE__ */ c.jsxs(
    B0,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: C,
      contentId: Se(),
      value: $,
      onValueChange: B,
      open: N,
      onOpenChange: P,
      dir: k,
      triggerPointerDownPosRef: W,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(So.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          z0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((L) => {
              I((Y) => new Set(Y).add(L));
            }, []),
            onNativeOptionRemove: u.useCallback((L) => {
              I((Y) => {
                const _ = new Set(Y);
                return _.delete(L), _;
              });
            }, []),
            children: n
          }
        ) }),
        G ? /* @__PURE__ */ c.jsxs(
          tu,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: $,
            onChange: (L) => B(L.target.value),
            disabled: p,
            form: x,
            children: [
              $ === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Rd.displayName = Ht;
var Ad = "SelectTrigger", Dd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = No(n), s = Ot(Ad, n), i = s.disabled || r, l = se(t, s.onTriggerChange), d = ko(n), f = u.useRef("touch"), [m, p, v] = ru((h) => {
      const g = d().filter((w) => !w.disabled), y = g.find((w) => w.value === s.value), b = ou(g, h, y);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (h) => {
      i || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
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
        "data-placeholder": nu(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: H(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: H(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (h) => {
          const g = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && W0.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Dd.displayName = Ad;
var _d = "SelectValue", Od = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Ot(_d, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = se(t, l.onValueNodeChange);
    return Pe(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      Z.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: nu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Od.displayName = _d;
var Y0 = "SelectIcon", jd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
jd.displayName = Y0;
var G0 = "SelectPortal", Id = (e) => /* @__PURE__ */ c.jsx(Kt, { asChild: !0, ...e });
Id.displayName = G0;
var Yt = "SelectContent", Td = u.forwardRef(
  (e, t) => {
    const n = Ot(Yt, e.__scopeSelect), [r, o] = u.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Un.createPortal(
        /* @__PURE__ */ c.jsx($d, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(So.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Fd, { ...e, ref: t });
  }
);
Td.displayName = Yt;
var Ze = 10, [$d, jt] = bn(Yt), U0 = "SelectContentImpl", K0 = /* @__PURE__ */ Mt("SelectContent.RemoveScroll"), Fd = u.forwardRef(
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
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...y
    } = e, b = Ot(Yt, n), [w, E] = u.useState(null), [C, k] = u.useState(null), N = se(t, (D) => E(D)), [P, $] = u.useState(null), [B, W] = u.useState(
      null
    ), G = ko(n), [X, I] = u.useState(!1), z = u.useRef(!1);
    u.useEffect(() => {
      if (w) return ao(w);
    }, [w]), ro();
    const L = u.useCallback(
      (D) => {
        const [K, ...Q] = G().map((ue) => ue.ref.current), [te] = Q.slice(-1), de = document.activeElement;
        for (const ue of D)
          if (ue === de || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === K && C && (C.scrollTop = 0), ue === te && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== de)) return;
      },
      [G, C]
    ), Y = u.useCallback(
      () => L([P, w]),
      [L, P, w]
    );
    u.useEffect(() => {
      X && Y();
    }, [X, Y]);
    const { onOpenChange: _, triggerPointerDownPosRef: F } = b;
    u.useEffect(() => {
      if (w) {
        let D = { x: 0, y: 0 };
        const K = (te) => {
          var de, ue;
          D = {
            x: Math.abs(Math.round(te.pageX) - (((de = F.current) == null ? void 0 : de.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((ue = F.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, Q = (te) => {
          D.x <= 10 && D.y <= 10 ? te.preventDefault() : w.contains(te.target) || _(!1), document.removeEventListener("pointermove", K), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, _, F]), u.useEffect(() => {
      const D = () => _(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [_]);
    const [ne, A] = ru((D) => {
      const K = G().filter((de) => !de.disabled), Q = K.find((de) => de.ref.current === document.activeElement), te = ou(K, D, Q);
      te && setTimeout(() => te.ref.current.focus());
    }), M = u.useCallback(
      (D, K, Q) => {
        const te = !z.current && !Q;
        (b.value !== void 0 && b.value === K || te) && ($(D), te && (z.current = !0));
      },
      [b.value]
    ), R = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), j = u.useCallback(
      (D, K, Q) => {
        const te = !z.current && !Q;
        (b.value !== void 0 && b.value === K || te) && W(D);
      },
      [b.value]
    ), U = r === "popper" ? pa : Wd, T = U === pa ? {
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ c.jsx(
      $d,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: M,
        selectedItem: P,
        onItemLeave: R,
        itemTextRefCallback: j,
        focusSelectedItem: Y,
        selectedItemText: B,
        position: r,
        isPositioned: X,
        searchRef: ne,
        children: /* @__PURE__ */ c.jsx(Xn, { as: K0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: H(o, (D) => {
              var K;
              (K = b.trigger) == null || K.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Ut,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  U,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...y,
                    ...T,
                    onPlaced: () => I(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: H(y.onKeyDown, (D) => {
                      const K = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !K && D.key.length === 1 && A(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let te = G().filter((de) => !de.disabled).map((de) => de.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const de = D.target, ue = te.indexOf(de);
                          te = te.slice(ue + 1);
                        }
                        setTimeout(() => L(te)), D.preventDefault();
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
Fd.displayName = U0;
var q0 = "SelectItemAlignedPosition", Wd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Ot(Yt, n), s = jt(Yt, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = se(t, (N) => f(N)), p = ko(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && h && g && y) {
      const N = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), $ = a.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = B.left - P.left, ue = $.left - de, Me = N.left - ue, Te = N.width + Me, rt = Math.max(Te, P.width), Xe = window.innerWidth - Ze, ot = ci(ue, [
          Ze,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ze, Xe - rt)
        ]);
        i.style.minWidth = Te + "px", i.style.left = ot + "px";
      } else {
        const de = P.right - B.right, ue = window.innerWidth - $.right - de, Me = window.innerWidth - N.right - ue, Te = N.width + Me, rt = Math.max(Te, P.width), Xe = window.innerWidth - Ze, ot = ci(ue, [
          Ze,
          Math.max(Ze, Xe - rt)
        ]);
        i.style.minWidth = Te + "px", i.style.right = ot + "px";
      }
      const W = p(), G = window.innerHeight - Ze * 2, X = h.scrollHeight, I = window.getComputedStyle(d), z = parseInt(I.borderTopWidth, 10), L = parseInt(I.paddingTop, 10), Y = parseInt(I.borderBottomWidth, 10), _ = parseInt(I.paddingBottom, 10), F = z + L + X + _ + Y, ne = Math.min(g.offsetHeight * 5, F), A = window.getComputedStyle(h), M = parseInt(A.paddingTop, 10), R = parseInt(A.paddingBottom, 10), j = N.top + N.height / 2 - Ze, U = G - j, T = g.offsetHeight / 2, D = g.offsetTop + T, K = z + L + D, Q = F - K;
      if (K <= j) {
        const de = W.length > 0 && g === W[W.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - h.offsetTop - h.offsetHeight, Me = Math.max(
          U,
          T + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (de ? R : 0) + ue + Y
        ), Te = K + Me;
        i.style.height = Te + "px";
      } else {
        const de = W.length > 0 && g === W[0].ref.current;
        i.style.top = "0px";
        const Me = Math.max(
          j,
          z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (de ? M : 0) + T
        ) + Q;
        i.style.height = Me + "px", h.scrollTop = K - j + h.offsetTop;
      }
      i.style.margin = `${Ze}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = G + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    d,
    h,
    g,
    y,
    a.dir,
    r
  ]);
  Pe(() => w(), [w]);
  const [E, C] = u.useState();
  Pe(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const k = u.useCallback(
    (N) => {
      N && x.current === !0 && (w(), b == null || b(), x.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ c.jsx(
    Z0,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
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
Wd.displayName = q0;
var X0 = "SelectPopperPosition", pa = u.forwardRef((e, t) => {
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
pa.displayName = X0;
var [Z0, vs] = bn(Yt, {}), ha = "SelectViewport", Ld = u.forwardRef(
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
          onScroll: H(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ze * 2, h = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), y = Math.max(h, g);
                if (y < x) {
                  const b = y + v, w = Math.min(x, b), E = b - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = E > 0 ? E : 0, m.style.justifyContent = "flex-end");
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
Ld.displayName = ha;
var Vd = "SelectGroup", [Q0, J0] = bn(Vd), Bd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Se();
    return /* @__PURE__ */ c.jsx(Q0, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Bd.displayName = Vd;
var zd = "SelectLabel", Hd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = J0(zd, n);
    return /* @__PURE__ */ c.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
Hd.displayName = zd;
var Ur = "SelectItem", [eb, Yd] = bn(Ur), Gd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Ot(Ur, n), l = jt(Ur, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, v] = u.useState(!1), x = se(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, o);
      }
    ), h = Se(), g = u.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      eb,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: u.useCallback((b) => {
          m((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
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
                  g.current !== "mouse" && y();
                }),
                onPointerUp: H(s.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: H(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: H(s.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(s.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: H(s.onKeyDown, (b) => {
                  var E;
                  ((E = l.searchRef) == null ? void 0 : E.current) !== "" && b.key === " " || (L0.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Gd.displayName = Ur;
var Tn = "SelectItemText", Ud = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Ot(Tn, n), i = jt(Tn, n), l = Yd(Tn, n), d = H0(Tn, n), [f, m] = u.useState(null), p = se(
      t,
      (y) => m(y),
      l.onItemTextChange,
      (y) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, y, l.value, l.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = d;
    return Pe(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Z.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Un.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Ud.displayName = Tn;
var Kd = "SelectItemIndicator", qd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Yd(Kd, n).isSelected ? /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
qd.displayName = Kd;
var va = "SelectScrollUpButton", Xd = u.forwardRef((e, t) => {
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
    Qd,
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
Xd.displayName = va;
var ga = "SelectScrollDownButton", Zd = u.forwardRef((e, t) => {
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
    Qd,
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
Zd.displayName = ga;
var Qd = u.forwardRef((e, t) => {
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
}), tb = "SelectSeparator", Jd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Jd.displayName = tb;
var xa = "SelectArrow", eu = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = No(n), a = Ot(xa, n), s = jt(xa, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t }) : null;
  }
);
eu.displayName = xa;
var nb = "SelectBubbleInput", tu = u.forwardRef(
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
        style: { ...Xi, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
tu.displayName = nb;
function nu(e) {
  return e === "" || e === void 0;
}
function ru(e) {
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
function ou(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = rb(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function rb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ob = Rd, ab = Dd, sb = Od, ib = jd, cb = Id, lb = Td, db = Ld, ub = Bd, fb = Hd, mb = Gd, pb = Ud, hb = qd, vb = Xd, gb = Zd, xb = Jd, bb = eu, Eo = "Switch", [yb] = Re(Eo), [wb, Cb] = yb(Eo), au = u.forwardRef(
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
    } = e, [p, v] = u.useState(null), x = se(t, (w) => v(w)), h = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [y, b] = $e({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Eo
    });
    return /* @__PURE__ */ c.jsxs(wb, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": s,
          "data-state": lu(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: H(e.onClick, (w) => {
            b((E) => !E), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        cu,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: l,
          checked: y,
          required: s,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
au.displayName = Eo;
var su = "SwitchThumb", iu = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Cb(su, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": lu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
iu.displayName = su;
var Sb = "SwitchBubbleInput", cu = u.forwardRef(
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
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== n && v) {
        const x = new Event("click", { bubbles: r });
        v.call(f, n), f.dispatchEvent(x);
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
cu.displayName = Sb;
function lu(e) {
  return e ? "checked" : "unchecked";
}
var kb = au, Nb = iu, Mo = "Tabs", [Eb] = Re(Mo, [
  xn
]), du = xn(), [Mb, gs] = Eb(Mo), uu = u.forwardRef(
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
      Mb,
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
uu.displayName = Mo;
var fu = "TabsList", mu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = gs(fu, n), s = du(n);
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
mu.displayName = fu;
var pu = "TabsTrigger", hu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = gs(pu, n), i = du(n), l = gu(s.baseId, r), d = xu(s.baseId, r), f = r === s.value;
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
            onMouseDown: H(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: H(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
hu.displayName = pu;
var vu = "TabsContent", Pb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = gs(vu, n), l = gu(i.baseId, r), d = xu(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(Oe, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
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
Pb.displayName = vu;
function gu(e, t) {
  return `${e}-trigger-${t}`;
}
function xu(e, t) {
  return `${e}-content-${t}`;
}
var Rb = uu, Ab = mu, Db = hu, xs = "ToastProvider", [bs, _b, Ob] = Kn("Toast"), [bu] = Re("Toast", [Ob]), [jb, Po] = bu(xs), yu = (e) => {
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
    jb,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: i,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => f((v) => v + 1), []),
      onToastRemove: u.useCallback(() => f((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: p,
      children: s
    }
  ) });
};
yu.displayName = xs;
var wu = "ToastViewport", Ib = ["F8"], ba = "toast.viewportPause", ya = "toast.viewportResume", Cu = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Ib,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Po(wu, n), i = _b(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = se(t, m, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    u.useEffect(() => {
      const g = (y) => {
        var w;
        r.length !== 0 && r.every((E) => y[E] || y.code === E) && ((w = m.current) == null || w.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, y = m.current;
      if (x && g && y) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const k = new CustomEvent(ba);
            y.dispatchEvent(k), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const k = new CustomEvent(ya);
            y.dispatchEvent(k), s.isClosePausedRef.current = !1;
          }
        }, E = (k) => {
          !g.contains(k.relatedTarget) && w();
        }, C = () => {
          g.contains(document.activeElement) || w();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", E), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", w), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", E), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        };
      }
    }, [x, s.isClosePausedRef]);
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((w) => {
          const E = w.ref.current, C = [E, ...Kb(E)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return u.useEffect(() => {
      const g = m.current;
      if (g) {
        const y = (b) => {
          var C, k, N;
          const w = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !w) {
            const P = document.activeElement, $ = b.shiftKey;
            if (b.target === g && $) {
              (C = d.current) == null || C.focus();
              return;
            }
            const G = h({ tabbingDirection: $ ? "backwards" : "forwards" }), X = G.findIndex((I) => I === P);
            Uo(G.slice(X + 1)) ? b.preventDefault() : $ ? (k = d.current) == null || k.focus() : (N = f.current) == null || N.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [i, h]), /* @__PURE__ */ c.jsxs(
      ch,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            wa,
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
          /* @__PURE__ */ c.jsx(bs.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Z.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            wa,
            {
              ref: f,
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
Cu.displayName = wu;
var Su = "ToastFocusProxy", wa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Po(Su, n);
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
wa.displayName = Su;
var rr = "Toast", Tb = "toast.swipeStart", $b = "toast.swipeMove", Fb = "toast.swipeCancel", Wb = "toast.swipeEnd", ku = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = $e({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: rr
    });
    return /* @__PURE__ */ c.jsx(Oe, { present: n || i, children: /* @__PURE__ */ c.jsx(
      Bb,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Le(e.onPause),
        onResume: Le(e.onResume),
        onSwipeStart: H(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: H(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: H(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: H(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
ku.displayName = rr;
var [Lb, Vb] = bu(rr, {
  onClose() {
  }
}), Bb = u.forwardRef(
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
      onSwipeEnd: v,
      ...x
    } = e, h = Po(rr, n), [g, y] = u.useState(null), b = se(t, (I) => y(I)), w = u.useRef(null), E = u.useRef(null), C = o || h.duration, k = u.useRef(0), N = u.useRef(C), P = u.useRef(0), { onToastAdd: $, onToastRemove: B } = h, W = Le(() => {
      var z;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((z = h.viewport) == null || z.focus()), s();
    }), G = u.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(P.current), k.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(W, I));
      },
      [W]
    );
    u.useEffect(() => {
      const I = h.viewport;
      if (I) {
        const z = () => {
          G(N.current), d == null || d();
        }, L = () => {
          const Y = (/* @__PURE__ */ new Date()).getTime() - k.current;
          N.current = N.current - Y, window.clearTimeout(P.current), l == null || l();
        };
        return I.addEventListener(ba, L), I.addEventListener(ya, z), () => {
          I.removeEventListener(ba, L), I.removeEventListener(ya, z);
        };
      }
    }, [h.viewport, C, l, d, G]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && G(C);
    }, [a, C, h.isClosePausedRef, G]), u.useEffect(() => ($(), () => B()), [$, B]);
    const X = u.useMemo(() => g ? _u(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      X && /* @__PURE__ */ c.jsx(
        zb,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: X
        }
      ),
      /* @__PURE__ */ c.jsx(Lb, { scope: n, onClose: W, children: Un.createPortal(
        /* @__PURE__ */ c.jsx(bs.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          ih,
          {
            asChild: !0,
            onEscapeKeyDown: H(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || W(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              Z.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: H(e.onKeyDown, (I) => {
                  I.key === "Escape" && (i == null || i(I.nativeEvent), I.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, W()));
                }),
                onPointerDown: H(e.onPointerDown, (I) => {
                  I.button === 0 && (w.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: H(e.onPointerMove, (I) => {
                  if (!w.current) return;
                  const z = I.clientX - w.current.x, L = I.clientY - w.current.y, Y = !!E.current, _ = ["left", "right"].includes(h.swipeDirection), F = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, ne = _ ? F(0, z) : 0, A = _ ? 0 : F(0, L), M = I.pointerType === "touch" ? 10 : 2, R = { x: ne, y: A }, j = { originalEvent: I, delta: R };
                  Y ? (E.current = R, wr($b, m, j, {
                    discrete: !1
                  })) : ui(R, h.swipeDirection, M) ? (E.current = R, wr(Tb, f, j, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(z) > M || Math.abs(L) > M) && (w.current = null);
                }),
                onPointerUp: H(e.onPointerUp, (I) => {
                  const z = E.current, L = I.target;
                  if (L.hasPointerCapture(I.pointerId) && L.releasePointerCapture(I.pointerId), E.current = null, w.current = null, z) {
                    const Y = I.currentTarget, _ = { originalEvent: I, delta: z };
                    ui(z, h.swipeDirection, h.swipeThreshold) ? wr(Wb, v, _, {
                      discrete: !0
                    }) : wr(
                      Fb,
                      p,
                      _,
                      {
                        discrete: !0
                      }
                    ), Y.addEventListener("click", (F) => F.preventDefault(), {
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
), zb = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Po(rr, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return Gb(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Kt, { asChild: !0, children: /* @__PURE__ */ c.jsx(Jr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, Hb = "ToastTitle", Nu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Nu.displayName = Hb;
var Yb = "ToastDescription", Eu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Eu.displayName = Yb;
var Mu = "ToastAction", Pu = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Du, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Au, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Mu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Pu.displayName = Mu;
var Ru = "ToastClose", Au = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Vb(Ru, n);
    return /* @__PURE__ */ c.jsx(Du, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
Au.displayName = Ru;
var Du = u.forwardRef((e, t) => {
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
function _u(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Ub(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(..._u(r));
    }
  }), t;
}
function wr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Oa(o, a) : o.dispatchEvent(a);
}
var ui = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Gb(e = () => {
}) {
  const t = Le(e);
  Pe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Ub(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Kb(e) {
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
var qb = yu, Xb = Cu, Zb = ku, Qb = Nu, Jb = Eu, ey = Pu, [Ro] = Re("Tooltip", [
  Dt
]), Ao = Dt(), Ou = "TooltipProvider", ty = 700, Ca = "tooltip.open", [ny, ys] = Ro(Ou), ju = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ty,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    ny,
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
ju.displayName = Ou;
var Hn = "Tooltip", [ry, or] = Ro(Hn), Iu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = ys(Hn, e.__scopeTooltip), d = Ao(t), [f, m] = u.useState(null), p = Se(), v = u.useRef(0), x = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, g = u.useRef(!1), [y, b] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (N) => {
      N ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ca))) : l.onClose(), a == null || a(N);
    },
    caller: Hn
  }), w = u.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), E = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b(!1);
  }, [b]), k = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, b(!0), v.current = 0;
    }, h);
  }, [h, b]);
  return u.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ c.jsx(ho, { ...d, children: /* @__PURE__ */ c.jsx(
    ry,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? k() : E();
      }, [l.isOpenDelayedRef, k, E]),
      onTriggerLeave: u.useCallback(() => {
        x ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, x]),
      onOpen: E,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Iu.displayName = Hn;
var Sa = "TooltipTrigger", Tu = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = or(Sa, n), a = ys(Sa, n), s = Ao(n), i = u.useRef(null), l = se(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: H(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: H(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: H(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
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
Tu.displayName = Sa;
var ws = "TooltipPortal", [oy, ay] = Ro(ws, {
  forceMount: void 0
}), $u = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = or(ws, t);
  return /* @__PURE__ */ c.jsx(oy, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
$u.displayName = ws;
var mn = "TooltipContent", Fu = u.forwardRef(
  (e, t) => {
    const n = ay(mn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = or(mn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Wu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(sy, { side: o, ...a, ref: t }) });
  }
), sy = u.forwardRef((e, t) => {
  const n = or(mn, e.__scopeTooltip), r = ys(mn, e.__scopeTooltip), o = u.useRef(null), a = se(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), v = u.useCallback(
    (x, h) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, b = uy(y, g.getBoundingClientRect()), w = fy(y, b), E = my(h.getBoundingClientRect()), C = hy([...w, ...E]);
      i(C), m(!0);
    },
    [m]
  );
  return u.useEffect(() => () => p(), [p]), u.useEffect(() => {
    if (l && f) {
      const x = (g) => v(g, f), h = (g) => v(g, l);
      return l.addEventListener("pointerleave", x), f.addEventListener("pointerleave", h), () => {
        l.removeEventListener("pointerleave", x), f.removeEventListener("pointerleave", h);
      };
    }
  }, [l, f, v, p]), u.useEffect(() => {
    if (s) {
      const x = (h) => {
        const g = h.target, y = { x: h.clientX, y: h.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), w = !py(y, s);
        b ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(Wu, { ...e, ref: a });
}), [iy, cy] = Ro(Hn, { isInside: !1 }), ly = /* @__PURE__ */ gp("TooltipContent"), Wu = u.forwardRef(
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
          const v = p.target;
          v != null && v.contains(l.trigger) && f();
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
              /* @__PURE__ */ c.jsx(ly, { children: r }),
              /* @__PURE__ */ c.jsx(iy, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Sp, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Fu.displayName = mn;
var Lu = "TooltipArrow", dy = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ao(n);
    return cy(
      Lu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
dy.displayName = Lu;
function uy(e, t) {
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
function fy(e, t, n = 5) {
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
function my(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function py(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function hy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), vy(t);
}
function vy(e) {
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
var gy = ju, xy = Iu, by = Tu, yy = $u, wy = Fu;
function Vu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Bu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
const fi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mi = Bu, oe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return mi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = fi(f) || fi(m);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, f) => {
    let [m, p] = f;
    return p === void 0 || (d[m] = p), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: m, className: p, ...v } = f;
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
      m,
      p
    ] : d;
  }, []);
  return mi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Cs = "-", Cy = (e) => {
  const t = ky(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Cs);
      return i[0] === "" && i.length !== 1 && i.shift(), zu(i, t) || Sy(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, zu = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? zu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Cs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, pi = /^\[(.+)\]$/, Sy = (e) => {
  if (pi.test(e)) {
    const t = pi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ky = (e) => {
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
      const a = o === "" ? t : hi(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ny(o)) {
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
      ka(s, hi(t, a), n, r);
    });
  });
}, hi = (e, t) => {
  let n = e;
  return t.split(Cs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Ny = (e) => e.isThemeGetter, Ey = (e) => {
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
}, Na = "!", Ea = ":", My = Ea.length, Py = (e) => {
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
        if (h === Ea) {
          a.push(o.slice(l, x)), l = x + My;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? i++ : h === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = Ry(f), p = m !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
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
}, Ry = (e) => e.endsWith(Na) ? e.substring(0, e.length - 1) : e.startsWith(Na) ? e.substring(1) : e, Ay = (e) => {
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
}, Dy = (e) => ({
  cache: Ey(e.cacheSize),
  parseClassName: Py(e),
  sortModifiers: Ay(e),
  ...Cy(e)
}), _y = /\s+/, Oy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(_y);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const f = i[d], {
      isExternal: m,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = n(f);
    if (m) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!h, y = r(g ? x.substring(0, h) : x);
    if (!y) {
      if (!g) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(x), !y) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const b = a(p).join(":"), w = v ? b + Na : b, E = w + y;
    if (s.includes(E))
      continue;
    s.push(E);
    const C = o(y, g);
    for (let k = 0; k < C.length; ++k) {
      const N = C[k];
      s.push(w + N);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function jy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hu(t)) && (r && (r += " "), r += n);
  return r;
}
const Hu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Hu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function vi(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = Dy(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = Oy(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(jy.apply(null, arguments));
  };
}
const ke = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Yu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Iy = /^\d+\/\d+$/, Ty = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ly = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rn = (e) => Iy.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), Ct = (e) => !!e && Number.isInteger(Number(e)), Ko = (e) => e.endsWith("%") && le(e.slice(0, -1)), vt = (e) => Ty.test(e), Vy = () => !0, By = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $y.test(e) && !Fy.test(e)
), Uu = () => !1, zy = (e) => Wy.test(e), Hy = (e) => Ly.test(e), Yy = (e) => !J(e) && !ee(e), Gy = (e) => yn(e, Xu, Uu), J = (e) => Yu.test(e), $t = (e) => yn(e, Zu, By), qo = (e) => yn(e, Zy, le), gi = (e) => yn(e, Ku, Uu), Uy = (e) => yn(e, qu, Hy), Cr = (e) => yn(e, Qu, zy), ee = (e) => Gu.test(e), On = (e) => wn(e, Zu), Ky = (e) => wn(e, Qy), xi = (e) => wn(e, Ku), qy = (e) => wn(e, Xu), Xy = (e) => wn(e, qu), Sr = (e) => wn(e, Qu, !0), yn = (e, t, n) => {
  const r = Yu.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, wn = (e, t, n = !1) => {
  const r = Gu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ku = (e) => e === "position" || e === "percentage", qu = (e) => e === "image" || e === "url", Xu = (e) => e === "length" || e === "size" || e === "bg-size", Zu = (e) => e === "length", Zy = (e) => e === "number", Qy = (e) => e === "family-name", Qu = (e) => e === "shadow", bi = () => {
  const e = ke("color"), t = ke("font"), n = ke("text"), r = ke("font-weight"), o = ke("tracking"), a = ke("leading"), s = ke("breakpoint"), i = ke("container"), l = ke("spacing"), d = ke("radius"), f = ke("shadow"), m = ke("inset-shadow"), p = ke("text-shadow"), v = ke("drop-shadow"), x = ke("blur"), h = ke("perspective"), g = ke("aspect"), y = ke("ease"), b = ke("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], C = () => [...E(), ee, J], k = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], P = () => [ee, J, l], $ = () => [rn, "full", "auto", ...P()], B = () => [Ct, "none", "subgrid", ee, J], W = () => ["auto", {
    span: ["full", Ct, ee, J]
  }, Ct, ee, J], G = () => [Ct, "auto", ee, J], X = () => ["auto", "min", "max", "fr", ee, J], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...P()], Y = () => [rn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], _ = () => [e, ee, J], F = () => [...E(), xi, gi, {
    position: [ee, J]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", qy, Gy, {
    size: [ee, J]
  }], M = () => [Ko, On, $t], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], j = () => ["", le, On, $t], U = () => ["solid", "dashed", "dotted", "double"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [le, Ko, xi, gi], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    ee,
    J
  ], Q = () => ["none", le, ee, J], te = () => ["none", le, ee, J], de = () => [le, ee, J], ue = () => [rn, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Vy],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [Yy],
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
        aspect: ["auto", "square", rn, J, ee, g]
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
        columns: [le, J, ee, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        inset: $()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": $()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": $()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: $()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: $()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: $()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: $()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: $()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: $()
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
        z: [Ct, "auto", ee, J]
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
        flex: [le, rn, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, ee, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, ee, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ct, "first", "last", "none", ee, J]
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
        col: W()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
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
        row: W()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
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
        content: ["normal", ...I()]
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
        "place-content": I()
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
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
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
            screen: [s]
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
        font: [r, ee, qo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ko, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ky, J, t]
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
        tracking: [o, ee, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [le, "none", ee, qo]
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
        "list-image": ["none", ee, J]
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
        list: ["disc", "decimal", "none", ee, J]
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
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
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
        decoration: [le, "from-font", "auto", ee, $t]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: _()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [le, "auto", ee, J]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, J]
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
        content: ["none", ee, J]
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
          }, Ct, ee, J],
          radial: ["", ee, J],
          conic: [Ct, ee, J]
        }, Xy, Uy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
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
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: R()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": R()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": R()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": R()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": R()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": R()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": R()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": R()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": R()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": R()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": R()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": R()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": R()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": R()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": R()
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
        border: _()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
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
        "outline-offset": [le, ee, J]
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
        outline: _()
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
        shadow: _()
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
        "inset-shadow": _()
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
        ring: _()
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
        "ring-offset": _()
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
        "inset-ring": _()
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
        "text-shadow": _()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [le, ee, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
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
        mask: ["none", ee, J]
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
          ee,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, ee, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, ee, J]
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
        "drop-shadow": _()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", le, ee, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, ee, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, ee, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, ee, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, ee, J]
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
          ee,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, ee, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, ee, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, ee, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, ee, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, ee, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, ee, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, ee, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, ee, J]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, J]
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
        duration: [le, "initial", ee, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, ee, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [le, ee, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, ee, J]
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
        perspective: [h, ee, J]
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
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
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
        transform: [ee, J, "", "none", "gpu", "cpu"]
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
        accent: _()
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
        caret: _()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, J]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ..._()]
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
        stroke: ["none", ..._()]
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
}, Jy = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => ($n(e, "cacheSize", t), $n(e, "prefix", n), $n(e, "experimentalParseClassName", r), kr(e.theme, a.theme), kr(e.classGroups, a.classGroups), kr(e.conflictingClassGroups, a.conflictingClassGroups), kr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), $n(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Nr(e.theme, o.theme), Nr(e.classGroups, o.classGroups), Nr(e.conflictingClassGroups, o.conflictingClassGroups), Nr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Ju(e, o, "orderSensitiveModifiers"), e), $n = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, kr = (e, t) => {
  if (t)
    for (const n in t)
      $n(e, n, t[n]);
}, Nr = (e, t) => {
  if (t)
    for (const n in t)
      Ju(e, t, n);
}, Ju = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, ew = (e, ...t) => typeof e == "function" ? vi(bi, e, ...t) : vi(() => Jy(bi(), e), ...t), tw = ew({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), O = (...e) => tw(Bu(e)), Ie = (e, t = {}) => {
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
}, nw = oe(
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
), rw = oe(
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
), ow = S.forwardRef(
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
      className: O(rw({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (d.onSelect = t), n !== void 0 && (d.disabled = n), s ? /* @__PURE__ */ c.jsx(ii, { ...d, children: e }) : /* @__PURE__ */ c.jsxs(ii, { ...d, children: [
      Ie(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
ow.displayName = "DropdownItem";
const aw = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  c0,
  {
    ref: n,
    className: O(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
aw.displayName = "DropdownSeparator";
const sw = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  i0,
  {
    ref: r,
    className: O(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
sw.displayName = "DropdownLabel";
const ef = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(a0, { children: /* @__PURE__ */ c.jsx(
  s0,
  {
    ref: o,
    className: O(nw({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
ef.displayName = "DropdownContent";
const tf = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(r0, { ...a, children: e });
};
tf.displayName = "Dropdown";
const nf = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  o0,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
nf.displayName = "DropdownTrigger";
const oN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(tf, { children: [
  /* @__PURE__ */ c.jsx(
    nf,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(cp, { size: 16, className: "flex-[0_0_16px]" }),
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
  /* @__PURE__ */ c.jsxs(ef, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), rf = S.forwardRef(
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
rf.displayName = "Accordion";
const of = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    Xp,
    {
      ref: n,
      className: O(
        `bg-surface-primary rounded-sm mt-2 first:mt-0 overflow-hidden
        data-[disabled]:opacity-30`,
        e
      ),
      ...t
    }
  )
);
of.displayName = "AccordionItem";
const af = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(Zp, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Qp,
  {
    ref: r,
    className: O(
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
af.displayName = "AccordionTrigger";
const sf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Jp,
  {
    ref: r,
    className: O(
      "text-body-secondary px-md pt-xs pb-md overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
sf.displayName = "AccordionContent";
const aN = Object.assign(rf, {
  Item: of,
  Trigger: af,
  Content: sf
}), yi = oe(
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
), iw = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? up : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Qr,
      {
        className: O(yi({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: O(yi({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && Ie(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
iw.displayName = "Badge";
const cw = oe("gap-xxs flex items-center", {
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
), lw = oe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), dw = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = zi,
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
        className: O(cw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: O(Xo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: O(
                  Xo({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: O(Xo({ isActive: !0 })),
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
                    className: O(lw({ size: t }))
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
dw.displayName = "Breadcrumbs";
const uw = oe(
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
), cf = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    N0,
    {
      ref: s,
      className: O(uw({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        E0,
        {
          className: O(
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
cf.displayName = "ProgressIndicator.Linear";
const fw = oe("flex items-center", {
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
}), mw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Kr = {
  sm: 12,
  md: 10
}, wi = {
  sm: (50 - Kr.sm / 2).toString(),
  md: (50 - Kr.md / 2).toString()
}, lf = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: O(fw({ size: t, layout: e }), r),
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
            className: O(mw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: wi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Kr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: wi[t],
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
lf.displayName = "ProgressIndicator.Circular";
const Ss = {
  Linear: cf,
  Circular: lf
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
    const m = a ? Qr : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: O(
          Zo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Ie(r, {
              className: O(
                Er({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            Ie(o, {
              className: O(
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
        className: O(
          Zo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          Ie(r, {
            className: O(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          Ie(o, {
            className: O(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: O(
          Zo({ intent: e, size: t, textOnly: v, danger: i }),
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
function pw(e, t, n = "long") {
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
    return r in Fn ? Fn[r] : Ci(r, r.split(":"));
  } catch {
    if (e in Fn) return Fn[e];
    const n = e == null ? void 0 : e.match(hw);
    return n ? Ci(e, n.slice(1)) : NaN;
  }
}
const hw = /([+-]\d\d):?(\d\d)?/;
function Ci(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Fn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Wt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), df(this), Ma(this)) : this.setTime(Date.now());
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
const Si = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Si.test(e)) return;
  const t = e.replace(Si, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), vw(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ma(this), +this;
  }));
});
function Ma(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Wt(e.timeZone, e) * 60));
}
function vw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), df(e);
}
function df(e) {
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
  const p = Wt(e.timeZone, e), v = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, g = v !== n, y = h - l;
  if (g && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const b = Wt(e.timeZone, e), w = b > 0 ? Math.floor(b) : Math.ceil(b), E = v - w;
    E && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + E), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + E));
  }
}
class je extends dt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new je(...n, t) : new je(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${pw(this.timeZone, this)})`;
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
    return new je(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new je(+new Date(t), this.timeZone);
  }
  //#endregion
}
const uf = 6048e5, gw = 864e5, ki = Symbol.for("constructDateFrom");
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ki in e ? e[ki](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  return Ee(t || e, e);
}
function ff(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ee(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function mf(e, t, n) {
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
let xw = {};
function ar() {
  return xw;
}
function pn(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Yn(e, t) {
  return pn(e, { ...t, weekStartsOn: 1 });
}
function pf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ee(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Yn(o), s = Ee(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Yn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ni(e) {
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
function hf(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Gn(r), s = Gn(o), i = +a - Ni(a), l = +s - Ni(s);
  return Math.round((i - l) / gw);
}
function bw(e, t) {
  const n = pf(e, t), r = Ee(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Yn(r);
}
function yw(e, t, n) {
  return ff(e, t * 7, n);
}
function ww(e, t, n) {
  return mf(e, t * 12, n);
}
function Cw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function Sw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function kw(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Gn(r) == +Gn(o);
}
function vf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Nw(e) {
  return !(!vf(e) && typeof e != "number" || isNaN(+ge(e)));
}
function Ew(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Mw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Pw(e, t) {
  const [n, r] = Cn(e, t.start, t.end);
  return { start: n, end: r };
}
function Rw(e, t) {
  const { start: n, end: r } = Pw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Ee(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Aw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Dw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function gf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xf(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function _w(e, t) {
  return xf(e, { ...t, weekStartsOn: 1 });
}
const Ow = {
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
}, jw = (e, t, n) => {
  let r;
  const o = Ow[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function dn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Iw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Tw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $w = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fw = {
  date: dn({
    formats: Iw,
    defaultWidth: "full"
  }),
  time: dn({
    formats: Tw,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: $w,
    defaultWidth: "full"
  })
}, Ww = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Lw = (e, t, n, r) => Ww[e];
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
const Vw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zw = {
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
}, Hw = {
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
}, Yw = {
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
}, Gw = {
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
}, Uw = (e, t) => {
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
}, Kw = {
  ordinalNumber: Uw,
  era: it({
    values: Vw,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: Bw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: it({
    values: zw,
    defaultWidth: "wide"
  }),
  day: it({
    values: Hw,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: Yw,
    defaultWidth: "wide",
    formattingValues: Gw,
    defaultFormattingWidth: "wide"
  })
};
function ct(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? Xw(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      qw(i, (m) => m.test(s))
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
function qw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Xw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bf(e) {
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
const Zw = /^(\d+)(th|st|nd|rd)?/i, Qw = /\d+/i, Jw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, e1 = {
  any: [/^b/i, /^(a|c)/i]
}, t1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, n1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, r1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, o1 = {
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
}, a1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, s1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, i1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, c1 = {
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
}, l1 = {
  ordinalNumber: bf({
    matchPattern: Zw,
    parsePattern: Qw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ct({
    matchPatterns: Jw,
    defaultMatchWidth: "wide",
    parsePatterns: e1,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: t1,
    defaultMatchWidth: "wide",
    parsePatterns: n1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: r1,
    defaultMatchWidth: "wide",
    parsePatterns: o1,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: a1,
    defaultMatchWidth: "wide",
    parsePatterns: s1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: i1,
    defaultMatchWidth: "any",
    parsePatterns: c1,
    defaultParseWidth: "any"
  })
}, Do = {
  code: "en-US",
  formatDistance: jw,
  formatLong: Fw,
  formatRelative: Lw,
  localize: Kw,
  match: l1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function d1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return hf(n, gf(n)) + 1;
}
function yf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +Yn(n) - +bw(n);
  return Math.round(r / uf) + 1;
}
function wf(e, t) {
  var f, m, p, v;
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ar(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Ee((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = pn(s, t), l = Ee((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = pn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function u1(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = wf(e, t), a = Ee((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), pn(a, t);
}
function Cf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +pn(n, t) - +u1(n, t);
  return Math.round(r / uf) + 1;
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
}, Ei = {
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
    const o = wf(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = pf(e);
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
    const o = Cf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = yf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : St.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = d1(e);
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
        return Pi(r);
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
        return Pi(r);
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
        return "GMT" + Mi(r, ":");
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
        return "GMT" + Mi(r, ":");
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
function Mi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function Pi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : Ft(e, t);
}
function Ft(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const Ri = (e, t) => {
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
}, Sf = (e, t) => {
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
}, f1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ri(e, t);
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
  return a.replace("{{date}}", Ri(r, t)).replace("{{time}}", Sf(o, t));
}, m1 = {
  p: Sf,
  P: f1
}, p1 = /^D+$/, h1 = /^Y+$/, v1 = ["D", "DD", "YY", "YYYY"];
function g1(e) {
  return p1.test(e);
}
function x1(e) {
  return h1.test(e);
}
function b1(e, t, n) {
  const r = y1(e, t, n);
  if (console.warn(r), v1.includes(e)) throw new RangeError(r);
}
function y1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const w1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, C1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, S1 = /^'([^]*?)'?$/, k1 = /''/g, N1 = /[a-zA-Z]/;
function E1(e, t, n) {
  var f, m, p, v, x, h, g, y;
  const r = ar(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Do, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, i = ge(e, n == null ? void 0 : n.in);
  if (!Nw(i))
    throw new RangeError("Invalid time value");
  let l = t.match(C1).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const E = m1[w];
      return E(b, o.formatLong);
    }
    return b;
  }).join("").match(w1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: M1(b) };
    if (Ei[w])
      return { isToken: !0, value: b };
    if (w.match(N1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
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
    const w = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && x1(w) || !(n != null && n.useAdditionalDayOfYearTokens) && g1(w)) && b1(w, t, String(e));
    const E = Ei[w[0]];
    return E(i, w, o.localize, d);
  }).join("");
}
function M1(e) {
  const t = e.match(S1);
  return t ? t[1].replace(k1, "'") : e;
}
function P1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ee(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function R1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getMonth();
}
function A1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getFullYear();
}
function D1(e, t) {
  return +ge(e) > +ge(t);
}
function _1(e, t) {
  return +ge(e) < +ge(t);
}
function O1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function j1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function I1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Ee(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = P1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function T1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ee(e, NaN) : (r.setFullYear(t), r);
}
const Ai = 5, $1 = 4;
function F1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ai * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ai : $1;
}
function kf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function W1(e, t) {
  const n = kf(e, t), r = F1(e, t);
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
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? je.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new je(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : ff(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : mf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : yw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : ww(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : hf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Ew(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Rw(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : W1(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : _w(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Mw(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : xf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Dw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : E1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : yf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : R1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : A1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : Cf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : D1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : _1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : vf(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : kw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : O1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : j1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Cw(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Sw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : I1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : T1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : kf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Gn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Yn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Aw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : pn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : gf(r);
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
class Nf {
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
class L1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class V1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function B1(e) {
  return S.createElement("button", { ...e });
}
function z1(e) {
  return S.createElement("span", { ...e });
}
function H1(e) {
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
function Y1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function G1(e) {
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
function U1(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[re.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[re.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => S.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    S.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function K1(e) {
  return S.createElement("div", { ...e });
}
function q1(e) {
  return S.createElement("div", { ...e });
}
function X1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function Z1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function Q1(e) {
  return S.createElement("table", { ...e });
}
function J1(e) {
  return S.createElement("div", { ...e });
}
const Ef = Xr(void 0);
function sr() {
  const e = $r(Ef);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function e2(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
function t2(e) {
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
      { type: "button", className: i[re.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[re.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[re.Chevron] })
    )
  );
}
function n2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function r2(e) {
  return S.createElement("option", { ...e });
}
function o2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function a2(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function s2(e) {
  return S.createElement("select", { ...e });
}
function i2(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function c2(e) {
  return S.createElement("th", { ...e });
}
function l2(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function d2(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function u2(e) {
  return S.createElement("th", { ...e });
}
function f2(e) {
  return S.createElement("tbody", { ...e });
}
function m2(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
const p2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: B1,
  CaptionLabel: z1,
  Chevron: H1,
  Day: Y1,
  DayButton: G1,
  Dropdown: U1,
  DropdownNav: K1,
  Footer: q1,
  Month: X1,
  MonthCaption: Z1,
  MonthGrid: Q1,
  Months: J1,
  MonthsDropdown: e2,
  Nav: t2,
  NextMonthButton: n2,
  Option: r2,
  PreviousMonthButton: o2,
  Root: a2,
  Select: s2,
  Week: i2,
  WeekNumber: d2,
  WeekNumberHeader: u2,
  Weekday: c2,
  Weekdays: l2,
  Weeks: f2,
  YearsDropdown: m2
}, Symbol.toStringTag, { value: "Module" }));
function gt(e, t, n = !1, r = pt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Mf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ks(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Pf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Rf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Af(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Df(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function xt(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Df(i, n))
      return i.includes(e);
    if (ks(i))
      return gt(i, e, !1, n);
    if (Af(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Mf(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return Pf(i) ? a(e, i.after) > 0 : Rf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function h2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, y = n && v(n), b = r && h(r), w = {
    [we.focused]: [],
    [we.outside]: [],
    [we.disabled]: [],
    [we.hidden]: [],
    [we.today]: []
  }, E = {};
  for (const C of e) {
    const { date: k, displayMonth: N } = C, P = !!(N && !p(k, N)), $ = !!(y && x(k, y)), B = !!(b && g(k, b)), W = !!(a && xt(k, a, o)), G = !!(s && xt(k, s, o)) || $ || B || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, X = m(k, f ?? o.today());
    P && w.outside.push(C), W && w.disabled.push(C), G && w.hidden.push(C), X && w.today.push(C), i && Object.keys(i).forEach((I) => {
      const z = i == null ? void 0 : i[I];
      z && xt(k, z, o) && (E[I] ? E[I].push(C) : E[I] = [C]);
    });
  }
  return (C) => {
    const k = {
      [we.focused]: !1,
      [we.disabled]: !1,
      [we.hidden]: !1,
      [we.outside]: !1,
      [we.today]: !1
    }, N = {};
    for (const P in w) {
      const $ = w[P];
      k[P] = $.some((B) => B === C);
    }
    for (const P in E)
      N[P] = E[P].some(($) => $ === C);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...N
    };
  };
}
function v2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[we[a]] ? o.push(t[we[a]]) : t[Qe[a]] && o.push(t[Qe[a]]), o), [t[re.Day]]);
}
function g2(e) {
  return {
    ...p2,
    ...e
  };
}
function x2(e) {
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
function _f() {
  const e = {};
  for (const t in re)
    e[re[t]] = `rdp-${re[t]}`;
  for (const t in we)
    e[we[t]] = `rdp-${we[t]}`;
  for (const t in Qe)
    e[Qe[t]] = `rdp-${Qe[t]}`;
  for (const t in ze)
    e[ze[t]] = `rdp-${ze[t]}`;
  return e;
}
function Of(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const b2 = Of;
function y2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "d");
}
function w2(e, t = pt) {
  return t.format(e, "LLLL");
}
function C2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccccc");
}
function S2(e, t = pt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function k2() {
  return "";
}
function jf(e, t = pt) {
  return t.format(e, "yyyy");
}
const N2 = jf, E2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Of,
  formatDay: y2,
  formatMonthCaption: b2,
  formatMonthDropdown: w2,
  formatWeekNumber: S2,
  formatWeekNumberHeader: k2,
  formatWeekdayName: C2,
  formatYearCaption: N2,
  formatYearDropdown: jf
}, Symbol.toStringTag, { value: "Module" }));
function M2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...E2,
    ...e
  };
}
function P2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function R2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function A2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function D2(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, addYears: i, getYear: l, isBefore: d, isSameYear: f } = r, m = a(e), p = s(t), v = [];
  let x = m;
  for (; d(x, p) || f(x, p); )
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
function If(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const _2 = If;
function Tf(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const O2 = Tf;
function j2(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function I2(e) {
  return "Choose the Month";
}
function T2() {
  return "";
}
function $2(e) {
  return "Go to the Next Month";
}
function F2(e) {
  return "Go to the Previous Month";
}
function W2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccc");
}
function L2(e, t) {
  return `Week ${e}`;
}
function V2(e) {
  return "Week Number";
}
function B2(e) {
  return "Choose the Year";
}
const z2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: O2,
  labelDay: _2,
  labelDayButton: If,
  labelGrid: Tf,
  labelGridcell: j2,
  labelMonthDropdown: I2,
  labelNav: T2,
  labelNext: $2,
  labelPrevious: F2,
  labelWeekNumber: L2,
  labelWeekNumberHeader: V2,
  labelWeekday: W2,
  labelYearDropdown: B2
}, Symbol.toStringTag, { value: "Module" })), ir = (e) => e instanceof HTMLElement ? e : null, Jo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], H2 = (e) => ir(e.querySelector("[data-animated-month]")), ea = (e) => ir(e.querySelector("[data-animated-caption]")), ta = (e) => ir(e.querySelector("[data-animated-weeks]")), Y2 = (e) => ir(e.querySelector("[data-animated-nav]")), G2 = (e) => ir(e.querySelector("[data-animated-weekdays]"));
function U2(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Nt(null), i = Nt(r), l = Nt(!1);
  Vi(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[ze.caption_after_enter] : n[ze.caption_before_enter], v = m ? n[ze.weeks_after_enter] : n[ze.weeks_before_enter], x = s.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Jo(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const E = H2(w);
      E && w.contains(E) && w.removeChild(E);
      const C = ea(w);
      C && C.classList.remove(p);
      const k = ta(w);
      k && k.classList.remove(v);
    }), s.current = h) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? Jo(x) : [], y = Jo(e.current);
    if (y != null && y.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = Y2(e.current);
      b && (b.style.zIndex = "1"), y.forEach((w, E) => {
        const C = g[E];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const k = ea(w);
        k && k.classList.add(p);
        const N = ta(w);
        N && N.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), k && k.classList.remove(p), N && N.classList.remove(v), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const $ = G2(C);
        $ && ($.style.opacity = "0");
        const B = ea(C);
        B && (B.classList.add(m ? n[ze.caption_before_exit] : n[ze.caption_after_exit]), B.addEventListener("animationend", P));
        const W = ta(C);
        W && W.classList.add(m ? n[ze.weeks_before_exit] : n[ze.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function K2(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: y, startOfISOWeek: b, startOfWeek: w } = r, E = l ? y(o, r) : s ? b(o) : w(o), C = l ? p(a) : s ? v(x(a)) : h(x(a)), k = f(C, E), N = m(a, o) + 1, P = [];
  for (let W = 0; W <= k; W++) {
    const G = d(E, W);
    if (t && g(G, t))
      break;
    P.push(G);
  }
  const B = (l ? 35 : 42) * N;
  if (i && P.length < B) {
    const W = B - P.length;
    for (let G = 0; G < W; G++) {
      const X = d(P[P.length - 1], 1);
      P.push(X);
    }
  }
  return P;
}
function q2(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function X2(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Di(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function Z2(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: v } = r, x = e.reduce((h, g) => {
    const y = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : v(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), w = t.filter((N) => N >= y && N <= b), E = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < E) {
      const N = t.filter((P) => {
        const $ = E - w.length;
        return P > b && P <= o(b, $);
      });
      w.push(...N);
    }
    const C = w.reduce((N, P) => {
      const $ = n.ISOWeek ? d(P) : f(P), B = N.find((G) => G.weekNumber === $), W = new Nf(P, g, r);
      return B ? B.days.push(W) : N.push(new V1($, [W])), N;
    }, []), k = new L1(g, C);
    return h.push(k), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function Q2(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : v ? r = f(v, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function J2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function eC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function tC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function _o(e, t) {
  const [n, r] = _e(e);
  return [t === void 0 ? n : t, r];
}
function nC(e, t) {
  const [n, r] = Q2(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Di(e, n, r, t), [i, l] = _o(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Lt(() => {
    const k = Di(e, n, r, t);
    l(k);
  }, [e.timeZone]);
  const d = X2(i, r, e, t), f = K2(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = Z2(d, f, e, t), p = tC(m), v = q2(m), x = eC(i, n, e, t), h = J2(i, r, e, t), { disableNavigation: g, onMonthChange: y } = e, b = (k) => p.some((N) => N.days.some((P) => P.isEqualTo(k))), w = (k) => {
    if (g)
      return;
    let N = o(k);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), l(N), y == null || y(N);
  };
  return {
    months: m,
    weeks: p,
    days: v,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: h,
    goToMonth: w,
    goToDay: (k) => {
      b(k) || w(k.date);
    }
  };
}
var at;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(at || (at = {}));
function _i(e) {
  return !e[we.disabled] && !e[we.hidden] && !e[we.outside];
}
function rC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    _i(i) && (i[we.focused] && a < at.FocusedModifier ? (o = s, a = at.FocusedModifier) : r != null && r.isEqualTo(s) && a < at.LastFocused ? (o = s, a = at.LastFocused) : n(s.date) && a < at.Selected ? (o = s, a = at.Selected) : i[we.today] && a < at.Today && (o = s, a = at.Today));
  }
  return o || (o = e.find((s) => _i(t(s)))), o;
}
function oC(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: x, endOfWeek: h, max: g, min: y, startOfBroadcastWeek: b, startOfISOWeek: w, startOfWeek: E } = s;
  let k = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (N) => l ? b(N, s) : i ? w(N) : E(N),
    endOfWeek: (N) => l ? v(N) : i ? x(N) : h(N)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = g([r, k]) : t === "after" && o && (k = y([o, k])), k;
}
function $f(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = oC(e, t, n.date, r, o, a, s), d = !!(a.disabled && xt(l, a.disabled, s)), f = !!(a.hidden && xt(l, a.hidden, s)), m = l, p = new Nf(l, m, s);
  return !d && !f ? p : $f(e, t, p, r, o, a, s, i + 1);
}
function aC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = _e(), l = rC(t.days, n, r || (() => !1), s), [d, f] = _e(a ? l : void 0);
  return {
    isFocusTarget: (h) => !!(l != null && l.isEqualTo(h)),
    setFocused: f,
    focused: d,
    blur: () => {
      i(d), f(void 0);
    },
    moveFocus: (h, g) => {
      if (!d)
        return;
      const y = $f(h, g, d, t.navStart, t.navEnd, e, o);
      y && (t.goToDay(y), f(y));
    }
  };
}
function sC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _o(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (v) => (i == null ? void 0 : i.some((x) => l(x, v))) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (v, x, h) => {
      let g = [...i ?? []];
      if (d(v)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        g = i == null ? void 0 : i.filter((y) => !l(y, v));
      } else
        (i == null ? void 0 : i.length) === m ? g = [v] : g = [...g, v];
      return o || s(g), o == null || o(g, v, x, h), g;
    },
    isSelected: d
  };
}
function iC(e, t, n = 0, r = 0, o = !1, a = pt) {
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
function cC(e, t, n = pt) {
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
function Oi(e, t, n = pt) {
  return gt(e, t.from, !1, n) || gt(e, t.to, !1, n) || gt(t, e.from, !1, n) || gt(t, e.to, !1, n);
}
function lC(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? gt(e, i, !1, n) : Df(i, n) ? i.some((l) => gt(e, l, !1, n)) : ks(i) ? i.from && i.to ? Oi(e, { from: i.from, to: i.to }, n) : !1 : Af(i) ? cC(e, i.dayOfWeek, n) : Mf(i) ? n.isAfter(i.before, i.after) ? Oi(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : xt(e.from, i, n) || xt(e.to, i, n) : Pf(i) || Rf(i) ? xt(e.from, i, n) || xt(e.to, i, n) : !1))
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
function dC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = _o(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, y = p ? iC(p, d, h, g, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && lC({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), s || l(y), s == null || s(y, p, v, x), y;
    },
    isSelected: (p) => d && gt(d, p, !1, t)
  };
}
function uC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _o(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, v) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, v), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function fC(e, t) {
  const n = uC(e, t), r = sC(e, t), o = dC(e, t);
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
function mC(e) {
  var Pn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new je(t.today, t.timeZone)), t.month && (t.month = new je(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new je(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new je(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new je(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new je(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Pn = t.selected) == null ? void 0 : Pn.map((ie) => new je(ie, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new je(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new je(t.selected.to, t.timeZone) : void 0
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
      components: g2(t.components),
      formatters: M2(t.formatters),
      labels: { ...z2, ...t.labels },
      locale: ie,
      classNames: { ..._f(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: y, onNextClick: b, onPrevClick: w, showWeekNumber: E, styles: C } = t, { formatCaption: k, formatDay: N, formatMonthDropdown: P, formatWeekNumber: $, formatWeekNumberHeader: B, formatWeekdayName: W, formatYearDropdown: G } = r, X = nC(t, a), { days: I, months: z, navStart: L, navEnd: Y, previousMonth: _, nextMonth: F, goToMonth: ne } = X, A = h2(I, t, L, Y, a), { isSelected: M, select: R, selected: j } = fC(t, a) ?? {}, { blur: U, focused: T, isFocusTarget: D, moveFocus: K, setFocused: Q } = aC(t, X, A, M ?? (() => !1), a), { labelDayButton: te, labelGridcell: de, labelGrid: ue, labelMonthDropdown: Me, labelNav: Te, labelPrevious: rt, labelNext: Xe, labelWeekday: ot, labelWeekNumber: Zt, labelWeekNumberHeader: We, labelYearDropdown: It } = o, dr = Rr(() => A2(a, t.ISOWeek), [a, t.ISOWeek]), Sn = d !== void 0 || v !== void 0, Qt = ve(() => {
    _ && (ne(_), w == null || w(_));
  }, [_, ne, w]), Jt = ve(() => {
    F && (ne(F), b == null || b(F));
  }, [ne, F, b]), kn = ve((ie, be) => (ae) => {
    ae.preventDefault(), ae.stopPropagation(), Q(ie), R == null || R(ie.date, be, ae), v == null || v(ie.date, be, ae);
  }, [R, v, Q]), Nn = ve((ie, be) => (ae) => {
    Q(ie), x == null || x(ie.date, be, ae);
  }, [x, Q]), ur = ve((ie, be) => (ae) => {
    U(), p == null || p(ie.date, be, ae);
  }, [U, p]), Ue = ve((ie, be) => (ae) => {
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
      K(Ae, pe);
    }
    h == null || h(ie.date, be, ae);
  }, [K, h, t.dir]), Ke = ve((ie, be) => (ae) => {
    g == null || g(ie.date, be, ae);
  }, [g]), En = ve((ie, be) => (ae) => {
    y == null || y(ie.date, be, ae);
  }, [y]), Ps = ve((ie) => (be) => {
    const ae = Number(be.target.value), xe = a.setMonth(a.startOfMonth(ie), ae);
    ne(xe);
  }, [a, ne]), ht = ve((ie) => (be) => {
    const ae = Number(be.target.value), xe = a.setYear(a.startOfMonth(ie), ae);
    ne(xe);
  }, [a, ne]), { className: Be, style: Tt } = Rr(() => ({
    className: [i[re.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[re.Root], ...t.style }
  }), [i, t.className, t.style, C]), Io = x2(t), fr = Nt(null);
  U2(fr, !!t.animate, {
    classNames: i,
    months: z,
    focused: T,
    dateLib: a
  });
  const Mn = {
    dayPickerProps: t,
    selected: j,
    select: R,
    isSelected: M,
    months: z,
    nextMonth: F,
    previousMonth: _,
    goToMonth: ne,
    getModifiers: A,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return S.createElement(
    Ef.Provider,
    { value: Mn },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? fr : void 0, className: Be, style: Tt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Io },
      S.createElement(
        n.Months,
        { className: i[re.Months], style: C == null ? void 0 : C[re.Months] },
        !t.hideNavigation && !f && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Te(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: _, nextMonth: F }),
        z.map((ie, be) => S.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[re.Month],
            style: C == null ? void 0 : C[re.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: be,
            displayIndex: be,
            calendarMonth: ie
          },
          f === "around" && !t.hideNavigation && be === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[re.PreviousMonthButton], tabIndex: _ ? void 0 : -1, "aria-disabled": _ ? void 0 : !0, "aria-label": rt(_), onClick: Qt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: _ ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[re.MonthCaption], style: C == null ? void 0 : C[re.MonthCaption], calendarMonth: ie, displayIndex: be }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[re.Dropdowns], style: C == null ? void 0 : C[re.Dropdowns] },
            (() => {
              const ae = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[re.MonthsDropdown], "aria-label": Me(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Ps(ie.date), options: P2(ie.date, L, Y, r, a), style: C == null ? void 0 : C[re.Dropdown], value: a.getMonth(ie.date) }) : S.createElement("span", { key: "month" }, P(ie.date, a)), xe = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[re.YearsDropdown], "aria-label": It(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: ht(ie.date), options: D2(L, Y, r, a, !!t.reverseYears), style: C == null ? void 0 : C[re.Dropdown], value: a.getYear(ie.date) }) : S.createElement("span", { key: "year" }, G(ie.date, a));
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
            } }, k(ie.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            S.createElement(n.CaptionLabel, { className: i[re.CaptionLabel], role: "status", "aria-live": "polite" }, k(ie.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && be === m - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[re.NextMonthButton], tabIndex: F ? void 0 : -1, "aria-disabled": F ? void 0 : !0, "aria-label": Xe(F), onClick: Jt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: F ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          be === m - 1 && f === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Te(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: _, nextMonth: F }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(ie.date, a.options, a) || void 0, className: i[re.MonthGrid], style: C == null ? void 0 : C[re.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[re.Weekdays], style: C == null ? void 0 : C[re.Weekdays] },
              E && S.createElement(n.WeekNumberHeader, { "aria-label": We(a.options), className: i[re.WeekNumberHeader], style: C == null ? void 0 : C[re.WeekNumberHeader], scope: "col" }, B()),
              dr.map((ae) => S.createElement(n.Weekday, { "aria-label": ot(ae, a.options, a), className: i[re.Weekday], key: String(ae), style: C == null ? void 0 : C[re.Weekday], scope: "col" }, W(ae, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[re.Weeks], style: C == null ? void 0 : C[re.Weeks] }, ie.weeks.map((ae) => S.createElement(
              n.Week,
              { className: i[re.Week], key: ae.weekNumber, style: C == null ? void 0 : C[re.Week], week: ae },
              E && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: ae, style: C == null ? void 0 : C[re.WeekNumber], "aria-label": Zt(ae.weekNumber, {
                locale: s
              }), className: i[re.WeekNumber], scope: "row", role: "rowheader" }, $(ae.weekNumber, a)),
              ae.days.map((xe) => {
                const { date: Ae } = xe, pe = A(xe);
                if (pe[we.focused] = !pe.hidden && !!(T != null && T.isEqualTo(xe)), pe[Qe.selected] = (M == null ? void 0 : M(Ae)) || pe.selected, ks(j)) {
                  const { from: q, to: ce } = j;
                  pe[Qe.range_start] = !!(q && ce && a.isSameDay(Ae, q)), pe[Qe.range_end] = !!(q && ce && a.isSameDay(Ae, ce)), pe[Qe.range_middle] = gt(j, Ae, !0, a);
                }
                const Rn = R2(pe, C, t.modifiersStyles), mr = v2(pe, i, t.modifiersClassNames), V = !Sn && !pe.hidden ? de(Ae, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format(Ae, "yyyy-MM-dd")}_${a.format(xe.displayMonth, "yyyy-MM")}`, day: xe, modifiers: pe, className: mr.join(" "), style: Rn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": V, "data-day": a.format(Ae, "yyyy-MM-dd"), "data-month": xe.outside ? a.format(Ae, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": xe.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && Sn ? S.createElement(n.DayButton, { className: i[re.DayButton], style: C == null ? void 0 : C[re.DayButton], type: "button", day: xe, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: D(xe) ? 0 : -1, "aria-label": te(Ae, pe, a.options, a), onClick: kn(xe, pe), onBlur: ur(xe, pe), onFocus: Nn(xe, pe), onKeyDown: Ue(xe, pe), onMouseEnter: Ke(xe, pe), onMouseLeave: En(xe, pe) }, N(Ae, a.options, a)) : !pe.hidden && N(xe.date, a.options, a))
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
const pC = {
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
}, hC = (e, t, n) => {
  n = n || {};
  let r;
  const o = pC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, vC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, gC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, xC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, bC = {
  date: dn({
    formats: vC,
    defaultWidth: "full"
  }),
  time: dn({
    formats: gC,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: xC,
    defaultWidth: "full"
  })
}, yC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, wC = (e, t, n, r) => yC[e], CC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, SC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, kC = {
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
}, NC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
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
}, MC = {
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
}, PC = (e, t) => {
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
}, RC = {
  ordinalNumber: PC,
  era: it({
    values: CC,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: SC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: it({
    values: kC,
    defaultWidth: "wide"
  }),
  day: it({
    values: NC,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: EC,
    defaultWidth: "wide",
    formattingValues: MC,
    defaultFormattingWidth: "wide"
  })
}, AC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, DC = /\d+/i, _C = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, OC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, jC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, IC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, TC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, $C = {
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
}, FC = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, WC = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, LC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, VC = {
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
}, BC = {
  ordinalNumber: bf({
    matchPattern: AC,
    parsePattern: DC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ct({
    matchPatterns: _C,
    defaultMatchWidth: "wide",
    parsePatterns: OC,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: jC,
    defaultMatchWidth: "wide",
    parsePatterns: IC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: TC,
    defaultMatchWidth: "wide",
    parsePatterns: $C,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: FC,
    defaultMatchWidth: "wide",
    parsePatterns: WC,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: LC,
    defaultMatchWidth: "any",
    parsePatterns: VC,
    defaultParseWidth: "any"
  })
}, zC = {
  code: "ja",
  formatDistance: hC,
  formatLong: bC,
  formatRelative: wC,
  localize: RC,
  match: BC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, HC = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Mr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Ff = S.forwardRef(
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
  }, v) => {
    const [x, h] = S.useState(
      () => Mr(n || null)
    ), g = e !== void 0, y = g ? Mr(e) : x, b = S.useMemo(
      () => Mr(r || null),
      [r]
    ), w = S.useMemo(
      () => Mr(o || null),
      [o]
    ), E = S.useMemo(() => !b || !w ? !0 : b <= w, [b, w]), C = (k) => {
      const N = k || null;
      g || h(N), t == null || t(N);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: O(HC(f), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          mC,
          {
            animate: !1,
            mode: "single",
            selected: y || void 0,
            onSelect: C,
            locale: m === "ja" ? zC : Do,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (k) => `${k.getFullYear()}${m === "ja" ? "年" : ""}`
            },
            disabled: E ? [
              ...b ? [{ before: b }] : [],
              ...w ? [{ after: w }] : [],
              ...a ? [{ before: /* @__PURE__ */ new Date("3000-01-01") }] : []
            ] : [
              {
                before: /* @__PURE__ */ new Date("1900-01-01"),
                after: /* @__PURE__ */ new Date("1899-12-31")
              }
            ],
            showOutsideDays: i,
            fixedWeeks: l,
            defaultMonth: d || y || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const k = _f(), N = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
Ff.displayName = "Calendar";
const ji = oe(
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
), YC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Wf = S.forwardRef(
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
    const d = r ? Qr : "a", m = YC[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: O(ji({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: O(ji({ intent: t, size: n }), e),
        ...i,
        children: [
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Ie(o, { size: m }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Ie(a, { size: m }) })
        ]
      }
    );
  }
);
Wf.displayName = "TextLink";
const GC = oe(
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
), UC = oe("shrink-0", {
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
}), KC = oe("text-body-primary font-bold text-md"), qC = oe(
  "text-body-primary font-normal leading-6 text-md"
), XC = oe("min-w-0 flex flex-1 flex-col", {
  variants: {
    size: {
      default: "gap-xxxs",
      large: "gap-xxs"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), ZC = {
  info: Ar,
  success: Ki,
  warning: Ar,
  alert: Ar
}, QC = S.forwardRef(
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
    const f = i || ZC[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: O(GC({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: O(UC({ intent: t, size: n }), "top-0.5 relative"), children: Ie(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: O(XC({ size: n })), children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: O(KC()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                Wf,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: O(qC()), children: a || o })
          ] })
        ]
      }
    );
  }
);
QC.displayName = "Callout";
const JC = oe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), eS = oe(
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
  return /* @__PURE__ */ c.jsxs("div", { className: O(JC({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      Bc,
      {
        id: l,
        className: O(eS({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          Hc,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(ep, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(Bi, { style: { strokeWidth: 3 } })
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
const tS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: O("gap-xs flex flex-col", t), children: e });
tS.displayName = "CheckboxGroup";
const nS = oe(
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
), sN = gy, Vt = S.forwardRef(
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
  }, v) => t ? /* @__PURE__ */ c.jsxs(
    xy,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...f !== void 0 && { onOpenChange: f },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(by, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(yy, { children: /* @__PURE__ */ c.jsx(
          wy,
          {
            ref: v,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: O(nS({ intent: n }), m),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
Vt.displayName = "Tooltip";
const rS = oe("space-y-md w-full bg-inherit", {
  variants: {}
}), Lf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("div", { ref: r, className: O(rS(), e), ...n, children: t })
);
Lf.displayName = "DataSheet";
const oS = oe(
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
), Vf = S.forwardRef(
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
        className: O(
          oS({ variant: t }),
          m && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: O(r && "line-through opacity-60"), children: n }),
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
                    icon: Hi,
                    disabled: r,
                    onClick: s,
                    className: O(
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
                    icon: Ui,
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
                    icon: Yi,
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
Vf.displayName = "DataSheetHeader";
const Bf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "section",
    {
      ref: r,
      className: O("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
Bf.displayName = "DataSheetSection";
const aS = oe("py-sm", {
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
}), sS = oe(
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
), iS = oe(
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
), zf = S.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    ref: s,
    className: O(
      aS({ orientation: n, spacing: r }),
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ c.jsx("div", { className: O(sS({ orientation: n })), children: t }),
      /* @__PURE__ */ c.jsx("div", { className: O(iS({ orientation: n })), children: o })
    ]
  }
));
zf.displayName = "DataSheetKeyValue";
const cS = {
  actionsColumnParts: 10
}, Hf = S.createContext(
  cS
), lS = () => S.useContext(Hf), Yf = S.createContext({}), Gf = () => S.useContext(
  Yf
);
function dS({
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
    Hf.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: O("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const Uf = S.forwardRef(dS);
Uf.displayName = "DataSheetTable";
const Kf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: O("", e), ...n, children: t }));
Kf.displayName = "DataSheetTableHeader";
const qf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: O("", e), ...n, children: t }));
qf.displayName = "DataSheetTableBody";
function uS({
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
    Yf.Provider,
    {
      value: f,
      children: /* @__PURE__ */ c.jsx(
        "tr",
        {
          ref: l,
          className: O(
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
const Xf = S.forwardRef(uS);
Xf.displayName = "DataSheetTableRow";
const qr = S.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = Gf(), f = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, m = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && m !== "" && m !== "-";
  return /* @__PURE__ */ c.jsx(
    i,
    {
      ref: s,
      className: O(
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
function fS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = lS(), {
    item: f,
    isDeleted: m,
    ariaLabels: p,
    tooltipMessages: v
  } = Gf(), x = n ?? f;
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
      className: O("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          Vt,
          {
            content: m ? null : (v == null ? void 0 : v.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Hi,
                disabled: m,
                onClick: () => s(x),
                className: O(
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
            content: (v == null ? void 0 : v.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Ui,
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
            content: (v == null ? void 0 : v.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Yi,
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
const Zf = S.forwardRef(
  fS
);
Zf.displayName = "DataSheetTableActionsCell";
const Qf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Ne, { ref: n, className: O("w-full", e), ...t }));
Qf.displayName = "DataSheetAction";
const iN = Object.assign(Lf, {
  Header: Vf,
  Section: Bf,
  KeyValue: zf,
  Table: Uf,
  TableHeader: Kf,
  TableBody: qf,
  TableRow: Xf,
  TableCell: qr,
  TableActionsCell: Zf,
  Action: Qf
}), Jf = oe(
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
), mS = oe(
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
    const d = !!t, f = !!n, m = !!r, p = i.type === "number";
    return /* @__PURE__ */ c.jsxs("div", { className: O(Jf({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Wn({ position: "prefix", interactive: !1 }),
          children: Ie(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: mS({ hasPrefix: d, hasTrailing: f, isNumeric: p }),
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
          children: Ie(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Wn({
            position: "trailing",
            interactive: !1
          }),
          children: Ie(n, { size: o })
        }
      ) })
    ] });
  }
);
Oo.displayName = "Input";
const pS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Pr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, hS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), vS = S.forwardRef(
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
    formatDate: f = hS,
    className: m,
    contentClassName: p,
    defaultOpen: v = !1,
    open: x,
    onOpenChange: h,
    side: g = "bottom",
    locale: y = "ja"
  }, b) => {
    const [w, E] = S.useState(
      () => Pr(n || null)
    ), [C, k] = S.useState(v), N = e !== void 0, P = N ? Pr(e) : w, $ = x !== void 0 ? x : C, B = S.useMemo(
      () => Pr(r || null),
      [r]
    ), W = S.useMemo(
      () => Pr(o || null),
      [o]
    ), G = S.useMemo(() => !B || !W ? !0 : B <= W, [B, W]), X = (Y) => {
      const _ = Y || null;
      N || E(_), t == null || t(_), _ && (x === void 0 && k(!1), h == null || h(!1));
    }, I = (Y) => {
      x === void 0 && k(Y), h == null || h(Y);
    }, z = (Y) => {
      switch (Y.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          Y.preventDefault(), $ || I(!0);
          break;
        case "Escape":
          $ && (Y.preventDefault(), I(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(dd, { open: $, onOpenChange: I, children: [
      /* @__PURE__ */ c.jsx(ud, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ref: b,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: P ? f(P) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || $m,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && I(!$),
          className: O(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            $ && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: z,
          onClick: () => !a && I(!$),
          "aria-expanded": $,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(fd, { children: /* @__PURE__ */ c.jsx(
        fs,
        {
          className: O(pS, p),
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
            Ff,
            {
              value: P,
              onChange: X,
              ...B && { minDate: B },
              ...W && { maxDate: W },
              disabled: !G,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: P || /* @__PURE__ */ new Date(),
              locale: y
            }
          )
        }
      ) })
    ] });
  }
);
vS.displayName = "DatePicker";
const gS = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], cN = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (f) => f(),
  title: r,
  children: o,
  busy: a,
  actions: s = gS,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0
}) => {
  const [f, m] = S.useState(-1), v = a !== void 0 ? a : f !== -1, x = async (b) => {
    const w = s.indexOf(b);
    if (b.onAction) {
      m(w);
      const E = await b.onAction(t);
      if (m(-1), E === !1)
        return;
    } else
      m(-1);
    e && t(b.value);
  }, h = () => {
    n(t);
  }, g = (b) => {
    b.preventDefault(), i && !v && d && n(t);
  }, y = (b) => {
    if (v) {
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
          onEscapeKeyDown: y,
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
                  Wc,
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
                  onClick: h,
                  disabled: v,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((b, w) => {
                const { label: E, classNames: C, onAction: k, value: N, ...P } = b;
                return /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    loading: f === w,
                    ...P,
                    intent: b.intent || "primary",
                    className: C,
                    onClick: () => x(b),
                    children: E
                  },
                  w
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, em = Xr(void 0), Ns = () => {
  const e = $r(em);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, xS = ({
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
  const [d, f] = _e(o), m = a !== void 0 ? a : d, p = S.Children.toArray(r).filter(
    (C) => S.isValidElement(C) && C.type === tm
  ), v = p.length, x = (C) => {
    C >= 0 && C < v && (a === void 0 && f(C), l == null || l(C));
  }, h = () => x(m + 1), g = () => x(m - 1), y = (C) => {
    a === void 0 && f(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(y);
  }, w = (C) => {
    C.preventDefault(), s && n(y);
  }, E = {
    currentStep: m,
    totalSteps: v,
    goToStep: x,
    nextStep: h,
    prevStep: g,
    isFirstStep: m === 0,
    isLastStep: m === v - 1,
    cancellable: s,
    onClose: y,
    onCancel: n
  };
  return /* @__PURE__ */ c.jsx(em.Provider, { value: E, children: /* @__PURE__ */ c.jsx(za, { open: e, onOpenChange: y, children: /* @__PURE__ */ c.jsx(Ha, { children: /* @__PURE__ */ c.jsx(
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
          onEscapeKeyDown: w,
          children: p[m]
        }
      )
    }
  ) }) }) });
}, tm = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), bS = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  Wc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), yS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), wS = ({
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
}, CS = ({
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
  return r ? /* @__PURE__ */ c.jsx(mv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e });
}, lN = {
  Root: xS,
  Step: tm,
  Header: bS,
  Body: yS,
  Footer: wS,
  Action: CS,
  useMultiStepDialog: Ns
}, dN = ({
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
}, nm = dd, SS = ud, kS = x0, Es = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(fd, { children: /* @__PURE__ */ c.jsx(
  fs,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: O(
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
const NS = (e, t) => {
  const [n, r] = _e(e);
  return Lt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, ES = (e) => typeof e == "string" ? e : e.label || e.value || String(e), MS = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, rm = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = ES,
      getSuggestionKey: d = MS,
      debounceMs: f = 300,
      minQueryLength: m = 0,
      loadingText: p = "Loading...",
      disabled: v,
      onFocus: x,
      onBlur: h,
      onKeyDown: g,
      ...y
    } = e, [b, w] = _e(!1), [E, C] = _e(
      []
    ), [k, N] = _e(!1), P = Nt(null), [$, B] = _e(0), W = Nt([]), [G, X] = _e(!1), I = NS(n, f), z = Rr(() => {
      if (!o)
        return E;
      if (!n || n.length < m)
        return o;
      const R = n.toLowerCase();
      return o.filter((j) => l(j).toLowerCase().includes(R));
    }, [
      o,
      E,
      n,
      m,
      l
    ]);
    Lt(() => {
      if (a) {
        if (I.length < m) {
          C([]), w(!1), N(!1);
          return;
        }
        return P.current && P.current.abort(), P.current = new AbortController(), N(!0), a(I).then((R) => {
          C(R);
        }).catch((R) => {
          R.name !== "AbortError" && console.debug("AutoSuggest search failed:", R), C([]);
        }).finally(() => {
          N(!1);
        }), () => {
          P.current && P.current.abort();
        };
      }
    }, [I, a, m]);
    const L = ve(
      (R) => {
        const j = l(R);
        r(j), s == null || s(R), w(!1);
      },
      [r, s, l]
    ), Y = ve(
      (R) => {
        v || w(!0), x == null || x(R);
      },
      [v, x]
    ), _ = ve(
      (R) => {
        w(!1), h == null || h(R);
      },
      [h]
    ), F = ve(
      (R) => {
        const j = R.target.value;
        r(j), !b && z.length > 0 && w(!0);
      },
      [r, b, z.length]
    );
    Lt(() => {
      B(0), W.current = [];
    }, [z]), Lt(() => {
      var R;
      b && $ >= 0 && W.current[$] && ((R = W.current[$]) == null || R.scrollIntoView({
        block: "nearest"
      }));
    }, [$, b]);
    const ne = ve(
      (R) => {
        if (!G) {
          if (!b) {
            g == null || g(R);
            return;
          }
          switch (R.key) {
            case "Escape":
              R.preventDefault(), w(!1);
              break;
            case "Enter": {
              R.preventDefault();
              const j = z[$];
              j && L(j);
              break;
            }
            case "ArrowDown":
              R.preventDefault(), B(
                (j) => j < z.length - 1 ? j + 1 : j
              );
              break;
            case "ArrowUp":
              R.preventDefault(), B((j) => j > 0 ? j - 1 : j);
              break;
          }
          g == null || g(R);
        }
      },
      [
        G,
        b,
        $,
        z,
        L,
        g
      ]
    ), A = b && !v && (z.length > 0 || k), M = A && $ >= 0 ? `autosuggest-item-${$}` : void 0;
    return /* @__PURE__ */ c.jsxs(nm, { open: A, children: [
      /* @__PURE__ */ c.jsx(kS, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ref: t,
          value: n,
          onChange: F,
          onFocus: Y,
          onBlur: _,
          onKeyDown: ne,
          onCompositionStart: () => X(!0),
          onCompositionEnd: () => X(!1),
          disabled: v,
          role: "combobox",
          "aria-expanded": A,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": M,
          "aria-autocomplete": "list",
          ...y
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
          onOpenAutoFocus: (R) => {
            R.preventDefault();
          },
          children: k ? /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ c.jsx(Qm, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: p })
              ]
            }
          ) : /* @__PURE__ */ c.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: O(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: z.map((R, j) => {
                const U = l(R), T = j === $, D = `autosuggest-item-${j}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: D,
                    ref: (K) => {
                      W.current[j] = K;
                    },
                    role: "option",
                    "aria-selected": T,
                    "data-value": U,
                    onClick: () => L(R),
                    onPointerDown: (K) => {
                      K.preventDefault(), L(R);
                    },
                    onMouseEnter: () => B(j),
                    className: O(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      T && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(R) : l(R)
                  },
                  d(R, j)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
rm.displayName = "AutoSuggest";
var fe = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(fe || {}), me = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(me || {});
const PS = [
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
], RS = oe(
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
  const l = PS.find(
    (d) => d.code === e
  );
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: O(
        RS({ size: a, selected: i, interactive: !!o }),
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
            className: O(
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
}, om = S.forwardRef(
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
    invalid: v,
    disabled: x,
    className: h,
    onValidateTag: g,
    defaultValidationError: y = "Invalid tag",
    ...b
  }, w) => {
    const [E, C] = _e(""), k = s ?? E, N = i ?? C, [P, $] = _e(!1), [B, W] = _e(!1), [G, X] = _e(null), I = Nt(null);
    S.useImperativeHandle(w, () => I.current);
    const z = S.useMemo(() => {
      const T = o.map(
        (D) => D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(T.join("|"));
    }, [o]), L = ve(
      (T) => !(!T || !r && e.includes(T) || n && e.length >= n),
      [e, r, n]
    ), Y = ve(
      (T) => {
        const D = T.trim();
        if (L(D)) {
          if (g) {
            const K = g(D);
            if (!K.valid) {
              X(
                K.error ?? y
              );
              return;
            }
          }
          t([...e, D]), N(""), X(null);
        }
      },
      [
        e,
        t,
        L,
        N,
        g,
        y
      ]
    ), _ = ve(
      (T) => {
        const D = e.filter((K, Q) => Q !== T);
        t(D);
      },
      [e, t]
    ), F = ve(
      (T) => {
        const D = T.target.value, K = D[D.length - 1];
        if (K && o.includes(K)) {
          const te = D.slice(0, -1);
          te && Y(te);
          return;
        }
        const Q = D.split(z);
        if (Q.length > 1) {
          Q.filter(Boolean).forEach((te) => Y(te));
          return;
        }
        N(D);
      },
      [o, z, Y, N]
    ), ne = ve(
      (T) => {
        T.key === "Enter" && k.trim() && !B && (T.preventDefault(), Y(k)), (T.key === "Backspace" || T.key === "Delete") && !k && e.length > 0 && (T.preventDefault(), _(e.length - 1));
      },
      [k, e.length, Y, _, B]
    ), A = ve(() => {
      k.trim() && Y(k), $(!1), X(null);
    }, [k, Y]), M = x || (n ? e.length >= n : !1), R = e.length === 0 && !k, j = !!d, U = !!f;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: O(
            Jf({ invalid: v }),
            "min-h-11.5 !h-auto max-h-[200px] overflow-y-auto",
            h
          ),
          children: [
            d && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Wn({
                  position: "prefix"
                }),
                children: Ie(d, { size: p })
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: O(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  j ? "pl-0" : "pl-sm",
                  U ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((T, D) => /* @__PURE__ */ c.jsx(
                    Pa,
                    {
                      ...!x && { onRemove: () => _(D) },
                      children: T
                    },
                    D
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: I,
                      value: k,
                      onChange: F,
                      onKeyDown: ne,
                      onFocus: () => $(!0),
                      onBlur: A,
                      onCompositionStart: () => W(!0),
                      onCompositionEnd: () => W(!1),
                      placeholder: R ? a : "",
                      disabled: M,
                      className: O(
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
            f && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Wn({
                  position: "trailing"
                }),
                children: Ie(f, { size: m })
              }
            )
          ]
        }
      ),
      (l || G) && /* @__PURE__ */ c.jsx(
        "p",
        {
          className: O(
            "mt-xxs text-sm",
            G ? "text-body-alert" : "text-body-secondary",
            !G && !P && "invisible"
          ),
          children: G || l
        }
      )
    ] });
  }
);
om.displayName = "TagInput";
const uN = Object.assign(Oo, {
  AutoSuggest: rm,
  TagInput: om
});
var Ii = 1, AS = 0.9, DS = 0.8, _S = 0.17, na = 0.1, ra = 0.999, OS = 0.9999, jS = 0.99, IS = /[\\\/_+.#"@\[\(\{&]/, TS = /[\\\/_+.#"@\[\(\{&]/g, $S = /[\s-]/, am = /[\s-]/g;
function Ra(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Ii : jS;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, v, x; d >= 0; ) m = Ra(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= Ii : IS.test(e.charAt(d - 1)) ? (m *= DS, v = e.slice(o, d - 1).match(TS), v && o > 0 && (m *= Math.pow(ra, v.length))) : $S.test(e.charAt(d - 1)) ? (m *= AS, x = e.slice(o, d - 1).match(am), x && o > 0 && (m *= Math.pow(ra, x.length))) : (m *= _S, o > 0 && (m *= Math.pow(ra, d - o))), e.charAt(d) !== t.charAt(a) && (m *= OS)), (m < na && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Ra(e, t, n, r, d + 1, a + 2, s), p * na > m && (m = p * na)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function Ti(e) {
  return e.toLowerCase().replace(am, " ");
}
function FS(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ra(e, t, Ti(e), Ti(t), 0, 0, {});
}
var jn = '[cmdk-group=""]', oa = '[cmdk-group-items=""]', WS = '[cmdk-group-heading=""]', sm = '[cmdk-item=""]', $i = `${sm}:not([aria-disabled="true"])`, Aa = "cmdk-item-select", an = "data-value", LS = (e, t, n) => FS(e, t, n), im = u.createContext(void 0), cr = () => u.useContext(im), cm = u.createContext(void 0), Ms = () => u.useContext(cm), lm = u.createContext(void 0), dm = u.forwardRef((e, t) => {
  let n = sn(() => {
    var M, R;
    return { search: "", value: (R = (M = e.value) != null ? M : e.defaultValue) != null ? R : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = sn(() => /* @__PURE__ */ new Set()), o = sn(() => /* @__PURE__ */ new Map()), a = sn(() => /* @__PURE__ */ new Map()), s = sn(() => /* @__PURE__ */ new Set()), i = um(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...y } = e, b = Se(), w = Se(), E = Se(), C = u.useRef(null), k = ZS();
  Gt(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, N.emit();
    }
  }, [f]), Gt(() => {
    k(6, X);
  }, []);
  let N = u.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, R, j) => {
    var U, T, D, K;
    if (!Object.is(n.current[M], R)) {
      if (n.current[M] = R, M === "search") G(), B(), k(1, W);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(E);
          Q ? Q.focus() : (U = document.getElementById(b)) == null || U.focus();
        }
        if (k(7, () => {
          var Q;
          n.current.selectedItemId = (Q = I()) == null ? void 0 : Q.id, N.emit();
        }), j || k(5, X), ((T = i.current) == null ? void 0 : T.value) !== void 0) {
          let Q = R ?? "";
          (K = (D = i.current).onValueChange) == null || K.call(D, Q);
          return;
        }
      }
      N.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), P = u.useMemo(() => ({ value: (M, R, j) => {
    var U;
    R !== ((U = a.current.get(M)) == null ? void 0 : U.value) && (a.current.set(M, { value: R, keywords: j }), n.current.filtered.items.set(M, $(R, j)), k(2, () => {
      B(), N.emit();
    }));
  }, item: (M, R) => (r.current.add(M), R && (o.current.has(R) ? o.current.get(R).add(M) : o.current.set(R, /* @__PURE__ */ new Set([M]))), k(3, () => {
    G(), B(), n.current.value || W(), N.emit();
  }), () => {
    a.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let j = I();
    k(4, () => {
      G(), (j == null ? void 0 : j.getAttribute("id")) === M && W(), N.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    a.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: E, labelId: w, listInnerRef: C }), []);
  function $(M, R) {
    var j, U;
    let T = (U = (j = i.current) == null ? void 0 : j.filter) != null ? U : LS;
    return M ? T(M, n.current.search, R) : 0;
  }
  function B() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, R = [];
    n.current.filtered.groups.forEach((U) => {
      let T = o.current.get(U), D = 0;
      T.forEach((K) => {
        let Q = M.get(K);
        D = Math.max(Q, D);
      }), R.push([U, D]);
    });
    let j = C.current;
    z().sort((U, T) => {
      var D, K;
      let Q = U.getAttribute("id"), te = T.getAttribute("id");
      return ((D = M.get(te)) != null ? D : 0) - ((K = M.get(Q)) != null ? K : 0);
    }).forEach((U) => {
      let T = U.closest(oa);
      T ? T.appendChild(U.parentElement === T ? U : U.closest(`${oa} > *`)) : j.appendChild(U.parentElement === j ? U : U.closest(`${oa} > *`));
    }), R.sort((U, T) => T[1] - U[1]).forEach((U) => {
      var T;
      let D = (T = C.current) == null ? void 0 : T.querySelector(`${jn}[${an}="${encodeURIComponent(U[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function W() {
    let M = z().find((j) => j.getAttribute("aria-disabled") !== "true"), R = M == null ? void 0 : M.getAttribute(an);
    N.setState("value", R || void 0);
  }
  function G() {
    var M, R, j, U;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let T = 0;
    for (let D of r.current) {
      let K = (R = (M = a.current.get(D)) == null ? void 0 : M.value) != null ? R : "", Q = (U = (j = a.current.get(D)) == null ? void 0 : j.keywords) != null ? U : [], te = $(K, Q);
      n.current.filtered.items.set(D, te), te > 0 && T++;
    }
    for (let [D, K] of o.current) for (let Q of K) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = T;
  }
  function X() {
    var M, R, j;
    let U = I();
    U && (((M = U.parentElement) == null ? void 0 : M.firstChild) === U && ((j = (R = U.closest(jn)) == null ? void 0 : R.querySelector(WS)) == null || j.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var M;
    return (M = C.current) == null ? void 0 : M.querySelector(`${sm}[aria-selected="true"]`);
  }
  function z() {
    var M;
    return Array.from(((M = C.current) == null ? void 0 : M.querySelectorAll($i)) || []);
  }
  function L(M) {
    let R = z()[M];
    R && N.setState("value", R.getAttribute(an));
  }
  function Y(M) {
    var R;
    let j = I(), U = z(), T = U.findIndex((K) => K === j), D = U[T + M];
    (R = i.current) != null && R.loop && (D = T + M < 0 ? U[U.length - 1] : T + M === U.length ? U[0] : U[T + M]), D && N.setState("value", D.getAttribute(an));
  }
  function _(M) {
    let R = I(), j = R == null ? void 0 : R.closest(jn), U;
    for (; j && !U; ) j = M > 0 ? qS(j, jn) : XS(j, jn), U = j == null ? void 0 : j.querySelector($i);
    U ? N.setState("value", U.getAttribute(an)) : Y(M);
  }
  let F = () => L(z().length - 1), ne = (M) => {
    M.preventDefault(), M.metaKey ? F() : M.altKey ? _(1) : Y(1);
  }, A = (M) => {
    M.preventDefault(), M.metaKey ? L(0) : M.altKey ? _(-1) : Y(-1);
  };
  return u.createElement(Z.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (M) => {
    var R;
    (R = y.onKeyDown) == null || R.call(y, M);
    let j = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || j)) switch (M.key) {
      case "n":
      case "j": {
        g && M.ctrlKey && ne(M);
        break;
      }
      case "ArrowDown": {
        ne(M);
        break;
      }
      case "p":
      case "k": {
        g && M.ctrlKey && A(M);
        break;
      }
      case "ArrowUp": {
        A(M);
        break;
      }
      case "Home": {
        M.preventDefault(), L(0);
        break;
      }
      case "End": {
        M.preventDefault(), F();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let U = I();
        if (U) {
          let T = new Event(Aa);
          U.dispatchEvent(T);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: JS }, l), jo(e, (M) => u.createElement(cm.Provider, { value: N }, u.createElement(im.Provider, { value: P }, M))));
}), VS = u.forwardRef((e, t) => {
  var n, r;
  let o = Se(), a = u.useRef(null), s = u.useContext(lm), i = cr(), l = um(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Gt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = fm(o, a, [e.value, e.children, a], e.keywords), m = Ms(), p = At((k) => k.value && k.value === f.current), v = At((k) => d || i.filter() === !1 ? !0 : k.search ? k.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let k = a.current;
    if (!(!k || e.disabled)) return k.addEventListener(Aa, x), () => k.removeEventListener(Aa, x);
  }, [v, e.onSelect, e.disabled]);
  function x() {
    var k, N;
    h(), (N = (k = l.current).onSelect) == null || N.call(k, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: y, onSelect: b, forceMount: w, keywords: E, ...C } = e;
  return u.createElement(Z.div, { ref: bt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), BS = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Se(), i = u.useRef(null), l = u.useRef(null), d = Se(), f = cr(), m = At((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Gt(() => f.group(s), []), fm(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(Z.div, { ref: bt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), jo(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(lm.Provider, { value: p }, v))));
}), zS = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = At((s) => !s.search);
  return !n && !a ? null : u.createElement(Z.div, { ref: bt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), HS = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Ms(), s = At((d) => d.search), i = At((d) => d.selectedItemId), l = cr();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Z.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), YS = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = At((d) => d.selectedItemId), l = cr();
  return u.useEffect(() => {
    if (s.current && a.current) {
      let d = s.current, f = a.current, m, p = new ResizeObserver(() => {
        m = requestAnimationFrame(() => {
          let v = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(m), p.unobserve(d);
      };
    }
  }, []), u.createElement(Z.div, { ref: bt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, jo(e, (d) => u.createElement("div", { ref: bt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), GS = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(za, { open: n, onOpenChange: r }, u.createElement(Ha, { container: s }, u.createElement(Ya, { "cmdk-overlay": "", className: o }), u.createElement(Ga, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(dm, { ref: t, ...i }))));
}), US = u.forwardRef((e, t) => At((n) => n.filtered.count === 0) ? u.createElement(Z.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), KS = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Z.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, jo(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), Ve = Object.assign(dm, { List: YS, Item: VS, Input: HS, Group: BS, Separator: zS, Dialog: GS, Empty: US, Loading: KS });
function qS(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function XS(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function um(e) {
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
function fm(e, t, n, r = []) {
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
var ZS = () => {
  let [e, t] = u.useState(), n = sn(() => /* @__PURE__ */ new Map());
  return Gt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function QS(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function jo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(QS(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var JS = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const mm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve,
  {
    ref: n,
    className: O(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
mm.displayName = Ve.displayName;
const pm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Gi, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Ve.Input,
            {
              ref: n,
              className: O(
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
pm.displayName = Ve.Input.displayName;
const hm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.List,
  {
    ref: n,
    className: O("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
hm.displayName = Ve.List.displayName;
const vm = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Ve.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
vm.displayName = Ve.Empty.displayName;
const Ir = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Group,
  {
    ref: n,
    className: O(
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
const ek = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Separator,
  {
    ref: n,
    className: O(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
ek.displayName = Ve.Separator.displayName;
const Tr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Item,
  {
    ref: n,
    className: O(
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
const Fi = oe("ease-in-out transition-all duration-300", {
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
}), tk = ({
  options: e,
  onValueChange: t = (T) => T,
  onApplySelection: n = (T) => T,
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
  selectAllCountLabel: v = "オプション",
  clearAllLabel: x = "すべてクリア",
  closeLabel: h = "閉じる",
  moreSelectedLabel: g = "その他",
  searchPlaceholder: y = "オプションを検索...",
  maxCount: b = 10,
  modalPopover: w = !1,
  className: E,
  hideSelectAll: C = !1,
  searchable: k = !0,
  emptyIndicator: N = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: $ = !1,
  popoverClassName: B,
  disabled: W = !1,
  invalid: G = !1,
  responsive: X,
  minWidth: I,
  maxWidth: z,
  deduplicateOptions: L = !1,
  resetOnDefaultValueChange: Y = !0,
  closeOnSelect: _ = !1,
  filterByValueAndLabel: F = !1,
  renderOption: ne,
  customTrigger: A,
  selectionDisplayMode: M = "default",
  hideSelection: R = !1,
  ...j
}, U) => {
  const [T, D] = S.useState(o), [K, Q] = S.useState(!1), [te, de] = S.useState(""), [ue, Me] = S.useState(""), [Te, rt] = S.useState(""), Xe = S.useRef(T.length), ot = S.useRef(K), Zt = S.useRef(te), We = S.useCallback(
    (V, q = "polite") => {
      q === "assertive" ? (rt(V), setTimeout(() => rt(""), 100)) : (Me(V), setTimeout(() => Me(""), 100));
    },
    []
  ), It = S.useId(), dr = `${It}-listbox`, Sn = `${It}-description`, Qt = `${It}-count`, Jt = S.useRef(o), kn = S.useCallback(
    (V) => {
      const q = V[0];
      return !!(q && typeof q == "object" && "heading" in q);
    },
    []
  ), Nn = S.useCallback((V, q) => {
    if (V.length !== q.length) return !1;
    const ce = [...V].sort(), Ce = [...q].sort();
    return ce.every((De, An) => De === Ce[An]);
  }, []), ur = S.useCallback(() => {
    D(o), Q(!1), de(""), t(o);
  }, [o, t]), Ue = S.useRef(null);
  S.useImperativeHandle(
    U,
    () => ({
      reset: ur,
      getSelectedValues: () => T,
      setSelectedValues: (V) => {
        D(V), t(V);
      },
      clear: () => {
        D([]), t([]);
      },
      focus: () => {
        if (Ue.current) {
          Ue.current.focus();
          const V = Ue.current.style.outline, q = Ue.current.style.outlineOffset;
          Ue.current.style.outline = "2px solid hsl(var(--ring))", Ue.current.style.outlineOffset = "2px", setTimeout(() => {
            Ue.current && (Ue.current.style.outline = V, Ue.current.style.outlineOffset = q);
          }, 1e3);
        }
      }
    }),
    [ur, T, t]
  );
  const [Ke, En] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const V = () => {
      const q = window.innerWidth;
      q < 640 ? En("mobile") : q < 1024 ? En("tablet") : En("desktop");
    };
    return V(), window.addEventListener("resize", V), () => {
      typeof window < "u" && window.removeEventListener("resize", V);
    };
  }, []);
  const ht = (() => {
    if (!X)
      return {
        maxCount: b,
        compactMode: !1
      };
    if (X === !0) {
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
    const V = X[Ke];
    return {
      maxCount: (V == null ? void 0 : V.maxCount) ?? b,
      compactMode: (V == null ? void 0 : V.compactMode) ?? !1
    };
  })(), Be = S.useCallback(() => {
    if (e.length === 0) return [];
    let V;
    kn(e) ? V = e.flatMap((De) => De.options) : V = e;
    const q = /* @__PURE__ */ new Set(), ce = [], Ce = [];
    return V.forEach((De) => {
      q.has(De.value) ? (ce.push(De.value), L || Ce.push(De)) : (q.add(De.value), Ce.push(De));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${L ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${L ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), L ? Ce : V;
  }, [e, L, kn]), Tt = S.useCallback(
    (V) => {
      const q = Be().find((ce) => ce.value === V);
      return !q && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${V}" not found in options list`
      ), q;
    },
    [Be]
  ), Io = S.useCallback(
    (V, q) => {
      const [ce, Ce] = V.split(":");
      if (!F)
        return Ce && Ce.toLowerCase().includes(q.toLowerCase()) ? 1 : 0;
      const De = q.toLowerCase();
      return Ce && Ce.toLowerCase().includes(De) || ce && ce.toLowerCase().includes(De) ? 1 : 0;
    },
    [F]
  ), fr = (V) => {
    if (V.key === "Enter")
      Q(!0);
    else if (V.key === "Backspace" && !V.currentTarget.value) {
      const q = [...T];
      q.pop(), D(q), t(q);
    }
  }, Mn = (V) => {
    if (W) return;
    const q = Tt(V);
    if (q != null && q.disabled) return;
    const ce = T.includes(V) ? T.filter((Ce) => Ce !== V) : [...T, V];
    D(ce), t(ce), _ && Q(!1);
  }, Pn = () => {
    W || (D([]), n([]), t([]));
  }, ie = () => {
    W || Q((V) => !V);
  }, be = () => {
    if (W) return;
    const V = T.slice(
      0,
      ht.maxCount
    );
    D(V), t(V);
  }, ae = () => {
    if (W) return;
    const V = Be().filter((q) => !q.disabled);
    if (T.length === V.length)
      Pn();
    else {
      const q = V.map((ce) => ce.value);
      D(q), t(q);
    }
    _ && Q(!1);
  }, Ae = ne || ((V) => {
    const { option: q, location: ce, onRemove: Ce, disabled: De } = V;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      Pa,
      {
        className: O(
          Fi({ variant: r }),
          ht.compactMode && "text-xs px-1.5 py-0.5",
          Ke === "mobile" && "max-w-[120px] truncate",
          $ && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          De && "cursor-not-allowed"
        ),
        ...!De && { onRemove: Ce },
        children: q.label
      }
    ) : q.label;
  });
  S.useEffect(() => {
    if (!Y) return;
    const V = Jt.current;
    Nn(V, o) || (Nn(T, o) || D(o), Jt.current = [...o]);
  }, [o, T, Nn, Y]);
  const Rn = {
    minWidth: I || (Ke === "mobile" ? "0px" : "200px"),
    maxWidth: z || "100%",
    width: P ? "auto" : "100%"
  }, mr = S.useMemo(() => M === "default" || T.length === 0 ? a : T.map((V) => {
    var q;
    return (q = Tt(V)) == null ? void 0 : q.label;
  }).filter(Boolean).join(", "), [T, Tt, a, M]);
  return S.useEffect(() => {
    K || de("");
  }, [K]), S.useEffect(() => {
    const V = T.length, q = Be(), ce = q.filter((Ce) => !Ce.disabled).length;
    if (V !== Xe.current) {
      const Ce = V - Xe.current;
      if (Ce > 0) {
        const An = T.slice(-Ce).map((Em) => {
          var Rs;
          return (Rs = q.find((Mm) => Mm.value === Em)) == null ? void 0 : Rs.label;
        }).filter(Boolean);
        An.length === 1 ? We(
          `${An[0]} selected. ${V} of ${ce} options selected.`
        ) : We(
          `${An.length} options selected. ${V} of ${ce} total selected.`
        );
      } else Ce < 0 && We(
        `Option removed. ${V} of ${ce} options selected.`
      );
      Xe.current = V;
    }
    K !== ot.current && (We(
      K ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), ot.current = K), te !== Zt.current && te !== void 0 && (te && K && We(`Searching for "${te}"`), Zt.current = te);
  }, [T, K, te, We, Be]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Te })
    ] }),
    /* @__PURE__ */ c.jsxs(
      nm,
      {
        open: K,
        onOpenChange: Q,
        modal: w,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: Sn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Qt, className: "sr-only", "aria-live": "polite", children: T.length === 0 ? l : `${T.length} option${T.length === 1 ? "" : "s"} selected: ${T.map((V) => {
            var q;
            return (q = Tt(V)) == null ? void 0 : q.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: O(P && "w-auto", E), children: [
            /* @__PURE__ */ c.jsx(SS, { asChild: !0, children: A || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ue,
                ...j,
                onClick: ie,
                disabled: W,
                className: O(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  P ? "w-auto" : "w-full",
                  !G && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  G && `border-interactive-alert-default
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
                "aria-expanded": K,
                "aria-haspopup": "listbox",
                "aria-controls": K ? dr : void 0,
                "aria-describedby": `${Sn} ${Qt}`,
                "aria-label": `Multi-select: ${T.length} of ${Be().length} options selected. ${s}`,
                children: /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "span",
                        {
                          className: O(
                            "mx-sm",
                            M === "inline" && "truncate",
                            W ? "text-body-disabled" : K || M === "inline" && mr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: mr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Zr,
                        {
                          className: O(
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
            !(R || M === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              T.slice(0, ht.maxCount).map((V) => {
                const q = Tt(V);
                return q ? /* @__PURE__ */ c.jsx("div", { children: Ae({
                  option: q,
                  location: "badge",
                  onRemove: () => Mn(V),
                  disabled: W
                }) }, V) : null;
              }).filter(Boolean),
              T.length > ht.maxCount && /* @__PURE__ */ c.jsxs(
                Pa,
                {
                  className: O(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    Fi({ variant: r }),
                    ht.compactMode && "text-xs px-1.5 py-0.5",
                    $ && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    W && "cursor-not-allowed"
                  ),
                  ...!W && { onRemove: be },
                  children: [
                    "+ ",
                    T.length - ht.maxCount,
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
              className: O(
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
              children: /* @__PURE__ */ c.jsxs(mm, { filter: Io, children: [
                k && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${It}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    pm,
                    {
                      placeholder: y,
                      onKeyDown: fr,
                      value: te,
                      onValueChange: de,
                      "aria-label": f,
                      "aria-describedby": `${It}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  hm,
                  {
                    className: O(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ke === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(vm, { children: N }),
                      !C && !te && /* @__PURE__ */ c.jsx(Ir, { children: /* @__PURE__ */ c.jsxs(
                        Tr,
                        {
                          value: "select-all",
                          onSelect: ae,
                          role: "option",
                          "aria-selected": T.length === Be().filter((V) => !V.disabled).length,
                          "aria-label": `Select all ${Be().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              jr,
                              {
                                className: "mr-xs",
                                checked: T.length === Be().filter((V) => !V.disabled).length
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
                      kn(e) ? e.map((V) => /* @__PURE__ */ c.jsx(Ir, { heading: V.heading, children: V.options.map((q) => {
                        const ce = T.includes(q.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${q.value}:${q.label}`,
                            onSelect: () => Mn(q.value),
                            role: "option",
                            "aria-selected": ce,
                            "aria-disabled": q.disabled ?? !1,
                            "aria-label": `${q.label}${ce ? ", selected" : ", not selected"}${q.disabled ? ", disabled" : ""}`,
                            className: O(
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
                      }) }, V.heading)) : /* @__PURE__ */ c.jsx(Ir, { children: e.map((V) => {
                        const q = T.includes(V.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${V.value}:${V.label}`,
                            onSelect: () => Mn(V.value),
                            role: "option",
                            "aria-selected": q,
                            "aria-disabled": V.disabled ?? !1,
                            "aria-label": `${V.label}${q ? ", selected" : ", not selected"}${V.disabled ? ", disabled" : ""}`,
                            className: O(
                              "cursor-pointer",
                              V.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!V.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(jr, { className: "mr-xs", checked: q }),
                              Ae({
                                option: V,
                                location: "dropdown",
                                isSelected: q
                              })
                            ]
                          },
                          V.value
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
                          disabled: T.length === 0,
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
                            n(T), Q(!1);
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
}, nk = S.forwardRef(
  tk
);
nk.displayName = "MultiSelect";
const rk = oe(
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
), ok = oe(
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
), ak = oe(
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
  }, p = i !== void 0 ? String(i) : void 0, v = (x) => {
    const h = e.find(
      (g) => "value" in g && String(g.value) === x
    );
    return h && "value" in h ? h.value : x;
  };
  return p !== void 0 && (m.value = p), d && (m.onValueChange = (x) => {
    const h = v(x);
    d(h);
  }), /* @__PURE__ */ c.jsxs(ob, { ...m, children: [
    /* @__PURE__ */ c.jsxs(
      ab,
      {
        className: O(
          rk({ variant: a, intent: s, invalid: o }),
          "group",
          n
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            Ie(r, {
              className: O("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              sb,
              {
                placeholder: t || "Select an option",
                className: O({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            ib,
            {
              className: O("text-body-primary h-3.5 w-3.5", {
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
    /* @__PURE__ */ c.jsx(cb, { children: /* @__PURE__ */ c.jsxs(
      lb,
      {
        position: "popper",
        sideOffset: -1,
        className: O(ok({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(vb, {}),
          /* @__PURE__ */ c.jsx(db, { children: e.map((x, h) => {
            switch (x.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(ub, { children: /* @__PURE__ */ c.jsx(fb, { children: x.label }) }, h);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  xb,
                  {
                    className: "border-divider-default h-px border-b"
                  },
                  h
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  mb,
                  {
                    value: String(x.value),
                    disabled: x.disabled ?? !1,
                    className: ak({
                      variant: a,
                      isSelected: i === x.value
                    }),
                    children: [
                      Ie(x.icon, {
                        className: O("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": x.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        pb,
                        {
                          className: O("flex-1", {
                            "text-interactive-disabled": x.disabled
                          }),
                          children: x.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(hb, {})
                    ]
                  },
                  h
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(gb, {}),
          /* @__PURE__ */ c.jsx(bb, {})
        ]
      }
    ) })
  ] });
};
Da.displayName = "Select";
const sk = oe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Wi = oe(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), ik = S.forwardRef(
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
    formatPageOption: d = (h, g, y) => `${h} / ${g}（全${y}件）`,
    showNavigation: f = !0,
    size: m,
    className: p,
    ...v
  }, x) => {
    const h = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, y = (k) => {
      const N = parseInt(k, 10);
      s(N), e > 1 && r(1);
    }, b = (k) => {
      const N = parseInt(k, 10);
      r(N);
    }, w = a.map((k) => ({
      value: k.toString(),
      label: k.toString()
    })), E = Math.max(t, 1), C = Array.from(
      { length: E },
      (k, N) => N + 1
    ).map((k) => ({
      value: k.toString(),
      label: d(k, E, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: O(sk({ size: m }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: O(Wi()), children: i }),
            /* @__PURE__ */ c.jsx(
              Da,
              {
                value: o.toString(),
                onValueChange: y,
                options: w
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: O(Wi()), children: l }),
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
                icon: zi,
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
ik.displayName = "Pagination";
const ck = oe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), lk = oe(
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
), dk = oe(
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
), fN = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: O(ck({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      $0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: O(
          lk({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(F0, { className: O(dk({ invalid: a })) })
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
}, mN = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  T0,
  {
    className: O("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), uk = oe(
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
), fk = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", mk = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, pk = oe(
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
), hk = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, vk = oe(
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
), gk = "gap-xs text-sm text-body-secondary flex-row", xk = oe(
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
), bk = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, yk = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", wk = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, Ck = S.forwardRef(
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
    initialKeywords: m,
    ...p
  }, v) => {
    const x = i || t === "disabled", [h, g] = S.useState(
      m ?? []
    );
    let y;
    typeof t == "string" ? y = t : x ? y = "disabled" : h.length > 0 ? y = "filled" : y = "default";
    const b = S.useRef(y);
    Lt(() => {
      b.current === "filled" && y !== "filled" && g([]), b.current = y;
    }, [y]);
    const w = (k) => {
      x || o && o(k);
    }, E = (k) => {
      if (!x) {
        if (k.key === "Enter" && n.trim()) {
          const N = [...h, n.trim()];
          if (g(N), o) {
            const P = {
              ...k,
              target: { value: "" }
            };
            o(P);
          }
          f && a && a(N), k.preventDefault();
        }
        if ((k.key === "Backspace" || k.key === "Delete") && !n && h.length > 0) {
          const N = h.slice(0, -1);
          g(N), f && a && a(N), k.preventDefault();
        }
      }
    }, C = (k) => {
      if (x) return;
      const N = h.filter((P, $) => $ !== k);
      g(N), f && a && a(N);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: O(
          "gap-xxs group flex flex-col",
          x ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": x ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: O(
                uk({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: O(fk), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: O(yk, mk), children: [
                    /* @__PURE__ */ c.jsx("span", { className: O(pk({ size: e })), children: /* @__PURE__ */ c.jsx(Gi, { size: wk[e] }) }),
                    h.map((k, N) => /* @__PURE__ */ c.jsxs("span", { className: xk(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: k }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: O(
                            bk,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (P) => {
                            P.stopPropagation(), P.preventDefault(), C(N);
                          },
                          onMouseDown: (P) => {
                            P.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: x,
                          children: /* @__PURE__ */ c.jsx(aa, { size: 8 })
                        }
                      )
                    ] }, N)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: v,
                        className: O(hk),
                        type: "text",
                        value: n,
                        onChange: w,
                        onKeyDown: E,
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
                      children: /* @__PURE__ */ c.jsx(aa, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: O(
                      vk({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let k = h;
                      n.trim() && (k = [...h, n.trim()], g(k), o && o({
                        target: { value: "" }
                      })), a == null || a(k);
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
              className: O(
                gk,
                "hidden group-focus-within:flex",
                y === "filled" && "flex"
              ),
              children: l
            }
          )
        ]
      }
    );
  }
);
Ck.displayName = "SearchBar";
const gm = Xr(void 0), xm = Xr(!1), Sk = ({
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
  return /* @__PURE__ */ c.jsx(gm.Provider, { value: a, children: t });
}, kk = ({
  children: e
}) => /* @__PURE__ */ c.jsx(xm.Provider, { value: !0, children: e }), lr = () => {
  const e = $r(gm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = $r(xm);
  return { ...e, isInFooter: t };
}, bm = S.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = lr();
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: n,
      className: O(
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
      children: r ? /* @__PURE__ */ c.jsx(Ym, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Vm, { className: "size-5", strokeWidth: 2 })
    }
  );
});
bm.displayName = "SideNavigationCollapseButton";
const Nk = oe(
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
), Ek = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(Sk, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(ym, { ref: n, ...t }) }));
Ek.displayName = "SideNavigation";
const ym = S.forwardRef(
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
        className: O(
          Nk({ width: d }),
          "group",
          e
        ),
        "data-collapsed": l,
        ...s,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: O(
                "p-sm",
                l ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(kk, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(bm, {})
        ]
      }
    );
  }
);
ym.displayName = "SideNavigationContent";
const Mk = oe(
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
), Pk = S.forwardRef(
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
        className: O(
          Mk({
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
Pk.displayName = "SideNavigationItem";
const Rk = oe("flex flex-col", {
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
}), Ak = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = lr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: O(
        Rk({ isCollapsed: s, isLast: r }),
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
Ak.displayName = "SideNavigationSection";
const Dk = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", _k = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", pN = () => {
  const { isCollapsed: e } = lr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Dk,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: _k,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, Ok = oe(
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
), jk = oe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), hN = ({
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
      className: O(
        Ok({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: jk({ indicator: s }) }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: e }),
        !!a && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: O(
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
}, Ik = S.forwardRef(
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
      wm,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: O("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: O(
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
                    Bi,
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
              className: O(
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
            className: O(
              "h-0.25 flex-1 transition-colors",
              l.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, l.id)) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "h-8" })
    ] });
  }
), wm = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((v) => v.status === "active"), i = Math.max(
    0,
    Math.min(s, a - 1)
  ), l = t[i] || t[0], d = a > 0 ? (i + 1) / a * 100 : 0, f = 2 * Math.PI * 24, m = f, p = f - d / 100 * f;
  return /* @__PURE__ */ c.jsx("div", { ref: o, className: O("space-y-6", e), ...r, children: /* @__PURE__ */ c.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
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
wm.displayName = "RadialStepper";
Ik.displayName = "Stepper";
const Tk = u.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    kb,
    {
      ref: o,
      id: a,
      "data-slot": "switch",
      className: O(
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
        Nb,
        {
          "data-slot": "switch-thumb",
          className: O(
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
Tk.displayName = "Switch";
const _a = {
  loading: !1,
  loadingText: "ローディング中…"
}, Cm = S.createContext(
  _a
), Sm = () => S.useContext(Cm), $k = S.forwardRef(
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
    return /* @__PURE__ */ c.jsx(Cm.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
      "table",
      {
        ref: a,
        className: O(
          `border-surface-default bg-surface-primary relative w-full
            caption-bottom border`,
          e
        ),
        ...o,
        children: t
      }
    ) });
  }
);
$k.displayName = "Table";
const Fk = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Sm(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: O("text-sm bg-surface-tertiary top-0 sticky", e),
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
Fk.displayName = "TableHeader";
const km = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ c.jsx(
  "td",
  {
    className: `py-sm min-h-12 px-lg sticky
        left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] min-w-fit
        text-center align-middle`,
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: O(
          "flex w-max -translate-x-1/2 transform items-center",
          e
        ),
        children: t
      }
    )
  }
) }));
km.displayName = "TableCoverMessage";
const Wk = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Sm(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx(km, { className: "text-body-secondary", children: d }) : r });
  }
);
Wk.displayName = "TableBody";
const Lk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: O("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
Lk.displayName = "TableFooter";
const Vk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: O(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
Vk.displayName = "TableRow";
const Bk = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: O(
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
Bk.displayName = "TableHead";
const zk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: O(
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
      e
    ),
    ...t
  }
));
zk.displayName = "TableCell";
const Hk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: O("text-body-primary mt-md text-sm", e),
    ...t
  }
));
Hk.displayName = "TableCaption";
const vN = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  "button",
  {
    ref: r,
    className: O(
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
)), Yk = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: r,
    className: O(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: O(
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
Yk.displayName = "TableRowOverlay";
const Nm = S.createContext({
  size: "normal"
}), Gk = () => S.useContext(Nm), Uk = oe("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), Kk = oe(
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
), qk = S.forwardRef(({ className: e, size: t, children: n, ...r }, o) => {
  const a = t ? { size: t } : {};
  return /* @__PURE__ */ c.jsx(Nm.Provider, { value: a, children: /* @__PURE__ */ c.jsx(Rb, { ref: o, className: O("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(Ab, { className: O(Uk({ size: t })), role: "tablist", children: n }) }) });
});
qk.displayName = "TabBar";
const Xk = S.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => {
  const { size: s } = Gk(), i = t ?? s;
  return /* @__PURE__ */ c.jsx(
    Db,
    {
      ref: a,
      className: O(Kk({ size: i }), e),
      disabled: r,
      ...o,
      children: n
    }
  );
});
Xk.displayName = "Tab";
const Zk = oe(
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
), Qk = S.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const [s, i] = _e(o.value);
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
          className: O(Zk({ invalid: e }), t),
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
Qk.displayName = "TextArea";
const gN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  Zb,
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
            Ki,
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
            Qb,
            {
              className: O("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ c.jsx(
                "h5",
                {
                  className: O("text-md leading-none", {
                    "mb-xs": !!e
                  }),
                  children: t
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(Jb, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(ey, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(aa, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), xN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(qb, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    Xb,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Li = oe(
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
), Jk = S.forwardRef(
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
    dragDropText: v = "ここにドラッグ&ドロップ",
    orText: x = "または",
    selectFileText: h = "ファイルを選択",
    dropFilesText: g = "ここにファイルをドロップ",
    uploadingText: y = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: w = "アップロードに失敗しました",
    ...E
  }, C) => {
    const [k, N] = _e(!1), P = Nt(null), $ = ve(
      (M) => {
        M.preventDefault(), M.stopPropagation(), k || N(!0);
      },
      [k]
    ), B = ve((M) => {
      M.preventDefault(), M.stopPropagation(), N(!1);
    }, []), W = ve((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), G = ve(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), N(!1), s) return;
        const R = M.dataTransfer.files;
        R && R.length > 0 && (r == null || r(R));
      },
      [s, r]
    ), X = ve(() => {
      var M;
      s || (M = P.current) == null || M.click();
    }, [s]), I = ve(
      (M) => {
        const R = M.target.files;
        R && R.length > 0 && (r == null || r(R));
      },
      [r]
    ), z = k ? "dragging" : n, L = () => /* @__PURE__ */ c.jsx(
      Xm,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Y = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ne,
        {
          size: "xs",
          intent: "tertiary",
          icon: js,
          onClick: (M) => {
            M.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), _ = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      L(),
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
          onClick: (M) => {
            M.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), F = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: O(Li({ size: t, state: "default", disabled: s })),
        onDragEnter: $,
        onDragLeave: B,
        onDragOver: W,
        onDrop: G,
        onClick: X,
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
          t === "small" ? Y() : _()
        ]
      }
    ), ne = () => {
      const M = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return z === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || M }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary flex", children: [
            /* @__PURE__ */ c.jsxs("span", { children: [
              "（",
              d || "12kb",
              "）"
            ] }),
            /* @__PURE__ */ c.jsx("span", { children: y })
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
      ] }) : z === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || M }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (R) => {
                R.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(ap, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Km,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: m || b })
        ] })
      ] }) : z === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || M }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(Im, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || w })
        ] })
      ] }) : null;
    }, A = () => t === "small" ? Y() : _();
    return z === "inProgress" && i !== void 0 || z === "success" || z === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: O(e), ...E, children: [
      F(),
      ne()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: O(
          Li({ size: t, state: z, disabled: s }),
          e
        ),
        onDragEnter: $,
        onDragLeave: B,
        onDragOver: W,
        onDrop: G,
        onClick: X,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        ...E,
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
          A()
        ]
      }
    );
  }
);
Jk.displayName = "FileUploader";
export {
  aN as Accordion,
  oN as AccountMenu,
  rm as AutoSuggest,
  iw as Badge,
  dw as Breadcrumbs,
  Ne as Button,
  Ff as Calendar,
  QC as Callout,
  jr as Checkbox,
  tS as CheckboxGroup,
  iN as DataSheet,
  Qf as DataSheetAction,
  Vf as DataSheetHeader,
  zf as DataSheetKeyValue,
  Bf as DataSheetSection,
  Uf as DataSheetTable,
  Zf as DataSheetTableActionsCell,
  qf as DataSheetTableBody,
  qr as DataSheetTableCell,
  Kf as DataSheetTableHeader,
  Xf as DataSheetTableRow,
  vS as DatePicker,
  cN as Dialog,
  tf as Dropdown,
  ef as DropdownContent,
  ow as DropdownItem,
  sw as DropdownLabel,
  aw as DropdownSeparator,
  nf as DropdownTrigger,
  Jk as FileUploader,
  kk as FooterProvider,
  dN as FormField,
  pN as Logo,
  nk as MultiSelect,
  lN as MultiStepDialog,
  ik as Pagination,
  Ss as ProgressIndicator,
  fN as RadioButton,
  mN as RadioButtonGroup,
  Ck as SearchBar,
  Da as Select,
  Ek as SideNavigation,
  bm as SideNavigationCollapseButton,
  Pk as SideNavigationItem,
  Sk as SideNavigationProvider,
  Ak as SideNavigationSection,
  hN as StatusIndicator,
  Ik as Stepper,
  Tk as Switch,
  Xk as Tab,
  qk as TabBar,
  $k as Table,
  Wk as TableBody,
  Hk as TableCaption,
  zk as TableCell,
  km as TableCoverMessage,
  Lk as TableFooter,
  Bk as TableHead,
  vN as TableHeadSortButton,
  Fk as TableHeader,
  Vk as TableRow,
  Yk as TableRowOverlay,
  Pa as Tag,
  om as TagInput,
  Qk as TextArea,
  uN as TextField,
  Wf as TextLink,
  gN as ToastItem,
  xN as ToastProvider,
  Vt as Tooltip,
  sN as TooltipProvider,
  PS as colorCodeToTokenMap,
  Wn as iconVariants,
  mS as inputVariants,
  Jf as inputWrapperVariants,
  lr as useSideNavigation
};
