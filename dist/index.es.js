import * as u from "react";
import S, { forwardRef as bm, createElement as Do, useState as sn, useLayoutEffect as Ti, createContext as Gr, useContext as _r, useCallback as Me, useRef as Tn, useEffect as Li, useMemo as Oo } from "react";
import * as Hn from "react-dom";
import ym from "react-dom";
var ur = { exports: {} }, Pn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function wm() {
  if (Ns) return Pn;
  Ns = 1;
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
  return Pn.Fragment = t, Pn.jsx = n, Pn.jsxs = n, Pn;
}
var Rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function Cm() {
  return Ms || (Ms = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === V ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case N:
          return "SuspenseList";
        case z:
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
          case w:
            return (R._context.displayName || "Context") + ".Consumer";
          case C:
            var M = R.render;
            return R = R.displayName, R || (R = M.displayName || M.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case P:
            return M = R.displayName || null, M !== null ? M : e(R.type) || "Memo";
          case T:
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
        var _ = M.error, $ = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return _.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === T)
        return "<...>";
      try {
        var M = e(R);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = U.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (Z.call(R, "key")) {
        var M = Object.getOwnPropertyDescriptor(R, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, M) {
      function _() {
        B || (B = !0, console.error(
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
      return K[R] || (K[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, M, _, $, Y, W) {
      var O = _.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: M,
        props: _,
        _owner: $
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
        value: Y
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, M, _, $, Y, W) {
      var O = M.children;
      if (O !== void 0)
        if ($)
          if (j(O)) {
            for ($ = 0; $ < O.length; $++)
              m(O[$]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(O);
      if (Z.call(M, "key")) {
        O = e(R);
        var X = Object.keys(M).filter(function(ne) {
          return ne !== "key";
        });
        $ = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", re[O + $] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          O,
          X,
          O
        ), re[O + $] = !0);
      }
      if (O = null, _ !== void 0 && (n(_), O = "" + _), s(M) && (n(M.key), O = "" + M.key), "key" in M) {
        _ = {};
        for (var Q in M)
          Q !== "key" && (_[Q] = M[Q]);
      } else _ = M;
      return O && i(
        _,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        O,
        _,
        o(),
        Y,
        W
      );
    }
    function m(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === T && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = S, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), U = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, j = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var B, K = {}, A = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), I = H(r(a)), re = {};
    Rn.Fragment = g, Rn.jsx = function(R, M, _) {
      var $ = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        M,
        _,
        !1,
        $ ? Error("react-stack-top-frame") : A,
        $ ? H(r(R)) : I
      );
    }, Rn.jsxs = function(R, M, _) {
      var $ = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        M,
        _,
        !0,
        $ ? Error("react-stack-top-frame") : A,
        $ ? H(r(R)) : I
      );
    };
  })()), Rn;
}
var Es;
function Sm() {
  return Es || (Es = 1, process.env.NODE_ENV === "production" ? ur.exports = wm() : ur.exports = Cm()), ur.exports;
}
var c = Sm();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var km = {
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
  const o = bm(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => Do(
      "svg",
      {
        ref: p,
        ...km[e],
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
        l && Do("title", { key: "svg-title" }, l),
        ...r.map(([h, x]) => Do(h, x)),
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
const Nm = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Mm = ye("outline", "alert-circle", "AlertCircle", Nm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], Pm = ye("outline", "calendar-event", "CalendarEvent", Em);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], $i = ye("outline", "check", "Check", Rm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Ur = ye("outline", "chevron-down", "ChevronDown", Am);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], Om = ye("outline", "chevron-left-pipe", "ChevronLeftPipe", Dm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], jm = ye("outline", "chevron-left", "ChevronLeft", _m);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], Tm = ye("outline", "chevron-right-pipe", "ChevronRightPipe", Im);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Wi = ye("outline", "chevron-right", "ChevronRight", Lm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Wm = ye("outline", "circle-check", "CircleCheck", $m);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Vm = ye("outline", "cloud-up", "CloudUp", Fm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = [["path", { d: "M5 12l14 0", key: "svg-0" }]], zm = ye("outline", "minus", "Minus", Bm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Fi = ye("outline", "pencil", "Pencil", Hm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Vi = ye("outline", "search", "Search", Ym);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], Um = ye("outline", "trash-x", "TrashX", Gm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], Bi = ye("outline", "trash", "Trash", Km);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], Xm = ye("outline", "user", "User", qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], na = ye("outline", "x", "X", Zm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Jm = ye("filled", "alert-circle-filled", "AlertCircleFilled", Qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], zi = ye("filled", "circle-check-filled", "CircleCheckFilled", ep);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Ps = ye("filled", "exclamation-circle-filled", "ExclamationCircleFilled", tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Rs = ye("filled", "folder-filled", "FolderFilled", np);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Mr = ye("filled", "info-circle-filled", "InfoCircleFilled", rp);
function As(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = As(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : As(e[o], null);
        }
      };
  };
}
function se(...e) {
  return u.useCallback(xt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  const t = /* @__PURE__ */ op(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(sp);
    if (l) {
      const d = l.props.children, f = i.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Kr = /* @__PURE__ */ Nt("Slot");
// @__NO_SIDE_EFFECTS__
function op(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = cp(o), i = ip(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? xt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Hi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ap(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Hi, t;
}
function sp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Hi;
}
function ip(e, t) {
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
function cp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lp = [
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
], q = lp.reduce((e, t) => {
  const n = /* @__PURE__ */ Nt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ra(e, t) {
  e && Hn.flushSync(() => e.dispatchEvent(t));
}
var Yi = Object.freeze({
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
}), dp = "VisuallyHidden", qr = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    q.span,
    {
      ...e,
      ref: t,
      style: { ...Yi, ...e.style }
    }
  )
);
qr.displayName = dp;
var up = qr;
function fp(e, t) {
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
function Pe(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = u.createContext(s), l = n.length;
    n = [...n, s];
    const d = (m) => {
      var y;
      const { scope: p, children: h, ...x } = m, v = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || i, g = u.useMemo(() => x, Object.values(x));
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
  return o.scopeName = e, [r, mp(o, ...t)];
}
function mp(...e) {
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
function Yn(e) {
  const t = e + "CollectionProvider", [n, r] = Pe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: y } = v, b = S.useRef(null), w = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: y });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Nt(i), d = S.forwardRef(
    (v, g) => {
      const { scope: y, children: b } = v, w = a(i, y), k = se(g, w.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: k, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Nt(f), h = S.forwardRef(
    (v, g) => {
      const { scope: y, children: b, ...w } = v, k = S.useRef(null), C = se(g, k), E = a(f, y);
      return S.useEffect(() => (E.itemMap.set(k, { ref: k, ...w }), () => void E.itemMap.delete(k))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
    }
  );
  h.displayName = f;
  function x(v) {
    const g = a(e + "CollectionConsumer", v);
    return S.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (E, N) => w.indexOf(E.ref.current) - w.indexOf(N.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: h },
    x,
    r
  ];
}
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Ee = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, pp = u[" useInsertionEffect ".trim().toString()] || Ee;
function Ie({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = hp({
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
        const p = vp(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function hp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return pp(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function vp(e) {
  return typeof e == "function";
}
function gp(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Oe = (e) => {
  const { present: t, children: n } = e, r = xp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = se(r.ref, bp(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Oe.displayName = "Presence";
function xp(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = gp(s, {
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
    const d = fr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Ee(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, h = fr(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ee(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (h) => {
        const v = fr(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = fr(r.current));
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
function fr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yp = u[" useId ".trim().toString()] || (() => {
}), wp = 0;
function Ce(e) {
  const [t, n] = u.useState(yp());
  return Ee(() => {
    n((r) => r ?? String(wp++));
  }, [e]), t ? `radix-${t}` : "";
}
var Xr = "Collapsible", [Cp, Gi] = Pe(Xr), [Sp, Aa] = Cp(Xr), Ui = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [l, d] = Ie({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: Xr
    });
    return /* @__PURE__ */ c.jsx(
      Sp,
      {
        scope: n,
        disabled: a,
        contentId: Ce(),
        open: l,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ c.jsx(
          q.div,
          {
            "data-state": Oa(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Ui.displayName = Xr;
var Ki = "CollapsibleTrigger", qi = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Aa(Ki, n);
    return /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Oa(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
qi.displayName = Ki;
var Da = "CollapsibleContent", Xi = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Aa(Da, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(Oe, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(kp, { ...r, ref: t, present: a }) });
  }
);
Xi.displayName = Da;
var kp = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Aa(Da, n), [i, l] = u.useState(r), d = u.useRef(null), f = se(t, d), m = u.useRef(0), p = m.current, h = u.useRef(0), x = h.current, v = s.open || i, g = u.useRef(v), y = u.useRef(void 0);
  return u.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Ee(() => {
    const b = d.current;
    if (b) {
      y.current = y.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const w = b.getBoundingClientRect();
      m.current = w.height, h.current = w.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    q.div,
    {
      "data-state": Oa(s.open),
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
function Oa(e) {
  return e ? "open" : "closed";
}
var Np = Ui, Mp = qi, Ep = Xi, Pp = u.createContext(void 0);
function fn(e) {
  const t = u.useContext(Pp);
  return e || t || "ltr";
}
var et = "Accordion", Rp = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [_a, Ap, Dp] = Yn(et), [Zr] = Pe(et, [
  Dp,
  Gi
]), ja = Gi(), Zi = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(_a.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Ip, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(jp, { ...o, ref: t }) });
  }
);
Zi.displayName = et;
var [Qi, Op] = Zr(et), [Ji, _p] = Zr(
  et,
  { collapsible: !1 }
), jp = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, l] = Ie({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: et
    });
    return /* @__PURE__ */ c.jsx(
      Qi,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(Ji, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(ec, { ...s, ref: t }) })
      }
    );
  }
), Ip = S.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Ie({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: et
  }), l = S.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = S.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    Qi,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(Ji, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(ec, { ...a, ref: t }) })
    }
  );
}), [Tp, Qr] = Zr(et), ec = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = se(i, t), d = Ap(n), m = fn(o) === "ltr", p = F(e.onKeyDown, (h) => {
      var P;
      if (!Rp.includes(h.key)) return;
      const x = h.target, v = d().filter((T) => {
        var z;
        return !((z = T.ref.current) != null && z.disabled);
      }), g = v.findIndex((T) => T.ref.current === x), y = v.length;
      if (g === -1) return;
      h.preventDefault();
      let b = g;
      const w = 0, k = y - 1, C = () => {
        b = g + 1, b > k && (b = w);
      }, E = () => {
        b = g - 1, b < w && (b = k);
      };
      switch (h.key) {
        case "Home":
          b = w;
          break;
        case "End":
          b = k;
          break;
        case "ArrowRight":
          a === "horizontal" && (m ? C() : E());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (m ? E() : C());
          break;
        case "ArrowUp":
          a === "vertical" && E();
          break;
      }
      const N = b % y;
      (P = v[N].ref.current) == null || P.focus();
    });
    return /* @__PURE__ */ c.jsx(
      Tp,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(_a.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          q.div,
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
), jr = "AccordionItem", [Lp, Ia] = Zr(jr), tc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Qr(jr, n), s = Op(jr, n), i = ja(n), l = Ce(), d = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      Lp,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          Np,
          {
            "data-orientation": a.orientation,
            "data-state": ic(d),
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
tc.displayName = jr;
var nc = "AccordionHeader", rc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qr(et, n), a = Ia(nc, n);
    return /* @__PURE__ */ c.jsx(
      q.h3,
      {
        "data-orientation": o.orientation,
        "data-state": ic(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
rc.displayName = nc;
var ra = "AccordionTrigger", oc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qr(et, n), a = Ia(ra, n), s = _p(ra, n), i = ja(n);
    return /* @__PURE__ */ c.jsx(_a.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Mp,
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
oc.displayName = ra;
var ac = "AccordionContent", sc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qr(et, n), a = Ia(ac, n), s = ja(n);
    return /* @__PURE__ */ c.jsx(
      Ep,
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
sc.displayName = ac;
function ic(e) {
  return e ? "open" : "closed";
}
var Ds = Zi, $p = tc, Wp = rc, Fp = oc, Vp = sc;
function We(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Bp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zp = "DismissableLayer", oa = "dismissableLayer.update", Hp = "dismissableLayer.pointerDownOutside", Yp = "dismissableLayer.focusOutside", Os, cc = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zt = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = u.useContext(cc), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), x = se(t, (N) => m(N)), v = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(g), b = f ? v.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, k = b >= y, C = Up((N) => {
      const P = N.target, T = [...d.branches].some((z) => z.contains(P));
      !k || T || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p), E = Kp((N) => {
      const P = N.target;
      [...d.branches].some((z) => z.contains(P)) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p);
    return Bp((N) => {
      b === d.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Os = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), _s(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Os);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), _s());
    }, [f, d]), u.useEffect(() => {
      const N = () => h({});
      return document.addEventListener(oa, N), () => document.removeEventListener(oa, N);
    }, []), /* @__PURE__ */ c.jsx(
      q.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: w ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
zt.displayName = zp;
var Gp = "DismissableLayerBranch", lc = u.forwardRef((e, t) => {
  const n = u.useContext(cc), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(q.div, { ...e, ref: o });
});
lc.displayName = Gp;
function Up(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          dc(
            Hp,
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
function Kp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && dc(Yp, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function _s() {
  const e = new CustomEvent(oa);
  document.dispatchEvent(e);
}
function dc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ra(o, a) : o.dispatchEvent(a);
}
var qp = zt, Xp = lc, _o = "focusScope.autoFocusOnMount", jo = "focusScope.autoFocusOnUnmount", js = { bubbles: !1, cancelable: !0 }, Zp = "FocusScope", Gn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = We(o), f = We(a), m = u.useRef(null), p = se(t, (v) => l(v)), h = u.useRef({
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
      let v = function(w) {
        if (h.paused || !i) return;
        const k = w.target;
        i.contains(k) ? m.current = k : St(m.current, { select: !0 });
      }, g = function(w) {
        if (h.paused || !i) return;
        const k = w.relatedTarget;
        k !== null && (i.contains(k) || St(m.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && St(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, h.paused]), u.useEffect(() => {
    if (i) {
      Ts.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const y = new CustomEvent(_o, js);
        i.addEventListener(_o, d), i.dispatchEvent(y), y.defaultPrevented || (Qp(rh(uc(i)), { select: !0 }), document.activeElement === v && St(i));
      }
      return () => {
        i.removeEventListener(_o, d), setTimeout(() => {
          const y = new CustomEvent(jo, js);
          i.addEventListener(jo, f), i.dispatchEvent(y), y.defaultPrevented || St(v ?? document.body, { select: !0 }), i.removeEventListener(jo, f), Ts.remove(h);
        }, 0);
      };
    }
  }, [i, d, f, h]);
  const x = u.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (g && y) {
        const b = v.currentTarget, [w, k] = Jp(b);
        w && k ? !v.shiftKey && y === k ? (v.preventDefault(), n && St(w, { select: !0 })) : v.shiftKey && y === w && (v.preventDefault(), n && St(k, { select: !0 })) : y === b && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(q.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
Gn.displayName = Zp;
function Qp(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (St(r, { select: t }), document.activeElement !== n) return;
}
function Jp(e) {
  const t = uc(e), n = Is(t, e), r = Is(t.reverse(), e);
  return [n, r];
}
function uc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Is(e, t) {
  for (const n of e)
    if (!eh(n, { upTo: t })) return n;
}
function eh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function th(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function St(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && th(e) && t && e.select();
  }
}
var Ts = nh();
function nh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ls(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ls(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ls(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function rh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var oh = "Portal", Ht = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Ee(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? ym.createPortal(/* @__PURE__ */ c.jsx(q.div, { ...r, ref: t }), s) : null;
});
Ht.displayName = oh;
var Io = 0;
function Jr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $s()), document.body.insertAdjacentElement("beforeend", e[1] ?? $s()), Io++, () => {
      Io === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Io--;
    };
  }, []);
}
function $s() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var at = function() {
  return at = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, at.apply(this, arguments);
};
function fc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ah(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Er = "right-scroll-bar-position", Pr = "width-before-scroll-bar", sh = "with-scroll-bars-hidden", ih = "--removed-body-scroll-bar-size";
function To(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ch(e, t) {
  var n = sn(function() {
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
var lh = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ws = /* @__PURE__ */ new WeakMap();
function dh(e, t) {
  var n = ch(null, function(r) {
    return e.forEach(function(o) {
      return To(o, r);
    });
  });
  return lh(function() {
    var r = Ws.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || To(i, null);
      }), a.forEach(function(i) {
        o.has(i) || To(i, s);
      });
    }
    Ws.set(n, e);
  }, [e]), n;
}
function uh(e) {
  return e;
}
function fh(e, t) {
  t === void 0 && (t = uh);
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
function mh(e) {
  e === void 0 && (e = {});
  var t = fh(null);
  return t.options = at({ async: !0, ssr: !1 }, e), t;
}
var mc = function(e) {
  var t = e.sideCar, n = fc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, at({}, n));
};
mc.isSideCarExport = !0;
function ph(e, t) {
  return e.useMedium(t), mc;
}
var pc = mh(), Lo = function() {
}, eo = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Lo,
    onWheelCapture: Lo,
    onTouchMoveCapture: Lo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, k = fc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, E = dh([n, t]), N = at(at({}, k), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: pc, removeScrollBar: d, shards: m, noRelative: h, noIsolation: x, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), at(at({}, N), { ref: E })) : u.createElement(b, at({}, N, { className: l, ref: E }), i)
  );
});
eo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
eo.classNames = {
  fullWidth: Pr,
  zeroRight: Er
};
var hh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function vh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hh();
  return t && e.setAttribute("nonce", t), e;
}
function gh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = vh()) && (gh(t, n), xh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, yh = function() {
  var e = bh();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, hc = function() {
  var e = yh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, wh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $o = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ch = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$o(n), $o(r), $o(o)];
}, Sh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return wh;
  var t = Ch(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, kh = hc(), rn = "data-scroll-locked", Nh = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(rn, `] {
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
  
  .`).concat(Er, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Pr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Er, " .").concat(Er, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pr, " .").concat(Pr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(rn, `] {
    `).concat(ih, ": ").concat(i, `px;
  }
`);
}, Fs = function() {
  var e = parseInt(document.body.getAttribute(rn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mh = function() {
  u.useEffect(function() {
    return document.body.setAttribute(rn, (Fs() + 1).toString()), function() {
      var e = Fs() - 1;
      e <= 0 ? document.body.removeAttribute(rn) : document.body.setAttribute(rn, e.toString());
    };
  }, []);
}, Eh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mh();
  var a = u.useMemo(function() {
    return Sh(o);
  }, [o]);
  return u.createElement(kh, { styles: Nh(a, !t, o, n ? "" : "!important") });
}, aa = !1;
if (typeof window < "u")
  try {
    var mr = Object.defineProperty({}, "passive", {
      get: function() {
        return aa = !0, !0;
      }
    });
    window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
  } catch {
    aa = !1;
  }
var Xt = aa ? { passive: !1 } : !1, Ph = function(e) {
  return e.tagName === "TEXTAREA";
}, vc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ph(e) && n[t] === "visible")
  );
}, Rh = function(e) {
  return vc(e, "overflowY");
}, Ah = function(e) {
  return vc(e, "overflowX");
}, Vs = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = gc(e, r);
    if (o) {
      var a = xc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Dh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Oh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, gc = function(e, t) {
  return e === "v" ? Rh(t) : Ah(t);
}, xc = function(e, t) {
  return e === "v" ? Dh(t) : Oh(t);
}, _h = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, jh = function(e, t, n, r, o) {
  var a = _h(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var h = xc(e, i), x = h[0], v = h[1], g = h[2], y = v - g - a * x;
    (x || y) && gc(e, i) && (m += y, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, pr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bs = function(e) {
  return [e.deltaX, e.deltaY];
}, zs = function(e) {
  return e && "current" in e ? e.current : e;
}, Ih = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Th = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Lh = 0, Zt = [];
function $h(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Lh++)[0], a = u.useState(hc)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = ah([e.lockRef.current], (e.shards || []).map(zs), !0).filter(Boolean);
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
    var y = pr(v), b = n.current, w = "deltaX" in v ? v.deltaX : b[0] - y[0], k = "deltaY" in v ? v.deltaY : b[1] - y[1], C, E = v.target, N = Math.abs(w) > Math.abs(k) ? "h" : "v";
    if ("touches" in v && N === "h" && E.type === "range")
      return !1;
    var P = Vs(N, E);
    if (!P)
      return !0;
    if (P ? C = N : (C = N === "v" ? "h" : "v", P = Vs(N, E)), !P)
      return !1;
    if (!r.current && "changedTouches" in v && (w || k) && (r.current = C), !C)
      return !0;
    var T = r.current || C;
    return jh(T, g, v, T === "h" ? w : k);
  }, []), l = u.useCallback(function(v) {
    var g = v;
    if (!(!Zt.length || Zt[Zt.length - 1] !== a)) {
      var y = "deltaY" in g ? Bs(g) : pr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Ih(C.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(zs).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = w.length > 0 ? i(g, w[0]) : !s.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(v, g, y, b) {
    var w = { name: v, delta: g, target: y, should: b, shadowParent: Wh(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = pr(v), r.current = void 0;
  }, []), m = u.useCallback(function(v) {
    d(v.type, Bs(v), v.target, i(v, e.lockRef.current));
  }, []), p = u.useCallback(function(v) {
    d(v.type, pr(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Zt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Xt), document.addEventListener("touchmove", l, Xt), document.addEventListener("touchstart", f, Xt), function() {
      Zt = Zt.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, Xt), document.removeEventListener("touchmove", l, Xt), document.removeEventListener("touchstart", f, Xt);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Th(o) }) : null,
    h ? u.createElement(Eh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Wh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Fh = ph(pc, $h);
var Un = u.forwardRef(function(e, t) {
  return u.createElement(eo, at({}, e, { ref: t, sideCar: Fh }));
});
Un.classNames = eo.classNames;
var Vh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), vr = {}, Wo = 0, bc = function(e) {
  return e && (e.host || bc(e.parentNode));
}, Bh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = bc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zh = function(e, t, n, r) {
  var o = Bh(t, Array.isArray(e) ? e : [e]);
  vr[n] || (vr[n] = /* @__PURE__ */ new WeakMap());
  var a = vr[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var h = p.getAttribute(r), x = h !== null && h !== "false", v = (Qt.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Qt.set(p, v), a.set(p, g), s.push(p), v === 1 && x && hr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Wo++, function() {
    s.forEach(function(m) {
      var p = Qt.get(m) - 1, h = a.get(m) - 1;
      Qt.set(m, p), a.set(m, h), p || (hr.has(m) || m.removeAttribute(r), hr.delete(m)), h || m.removeAttribute(n);
    }), Wo--, Wo || (Qt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), vr = {});
  };
}, to = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Vh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), zh(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, no = "Dialog", [yc] = Pe(no), [Hh, tt] = yc(no), wc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), l = u.useRef(null), [d, f] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: no
  });
  return /* @__PURE__ */ c.jsx(
    Hh,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Ce(),
      titleId: Ce(),
      descriptionId: Ce(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
wc.displayName = no;
var Cc = "DialogTrigger", Yh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Cc, n), a = se(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": $a(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Yh.displayName = Cc;
var Ta = "DialogPortal", [Gh, Sc] = yc(Ta, {
  forceMount: void 0
}), kc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tt(Ta, t);
  return /* @__PURE__ */ c.jsx(Gh, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: s }) })) });
};
kc.displayName = Ta;
var Ir = "DialogOverlay", Nc = u.forwardRef(
  (e, t) => {
    const n = Sc(Ir, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(Ir, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Kh, { ...o, ref: t }) }) : null;
  }
);
Nc.displayName = Ir;
var Uh = /* @__PURE__ */ Nt("DialogOverlay.RemoveScroll"), Kh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Ir, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Un, { as: Uh, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        q.div,
        {
          "data-state": $a(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), $t = "DialogContent", Mc = u.forwardRef(
  (e, t) => {
    const n = Sc($t, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt($t, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(qh, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Xh, { ...o, ref: t }) });
  }
);
Mc.displayName = $t;
var qh = u.forwardRef(
  (e, t) => {
    const n = tt($t, e.__scopeDialog), r = u.useRef(null), o = se(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return to(a);
    }, []), /* @__PURE__ */ c.jsx(
      Ec,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Xh = u.forwardRef(
  (e, t) => {
    const n = tt($t, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Ec,
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
), Ec = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = tt($t, n), l = u.useRef(null), d = se(t, l);
    return Jr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Gn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            zt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": $a(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Qh, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(ev, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), La = "DialogTitle", Pc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(La, n);
    return /* @__PURE__ */ c.jsx(q.h2, { id: o.titleId, ...r, ref: t });
  }
);
Pc.displayName = La;
var Rc = "DialogDescription", Zh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Rc, n);
    return /* @__PURE__ */ c.jsx(q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Zh.displayName = Rc;
var Ac = "DialogClose", Dc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Ac, n);
    return /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Dc.displayName = Ac;
function $a(e) {
  return e ? "open" : "closed";
}
var Oc = "DialogTitleWarning", [Vk, _c] = fp(Oc, {
  contentName: $t,
  titleName: La,
  docsSlug: "dialog"
}), Qh = ({ titleId: e }) => {
  const t = _c(Oc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Jh = "DialogDescriptionWarning", ev = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_c(Jh).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Wa = wc, Fa = kc, Va = Nc, Ba = Mc, jc = Pc, tv = Dc;
function ro(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function oo(e) {
  const [t, n] = u.useState(void 0);
  return Ee(() => {
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
var ao = "Checkbox", [nv] = Pe(ao), [rv, za] = nv(ao);
function ov(e) {
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
  } = e, [p, h] = Ie({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: ao
  }), [x, v] = u.useState(null), [g, y] = u.useState(null), b = u.useRef(!1), w = x ? !!s || !!x.closest("form") : (
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
    defaultChecked: kt(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ c.jsx(
    rv,
    {
      scope: t,
      ...k,
      children: av(m) ? m(k) : r
    }
  );
}
var Ic = "CheckboxTrigger", Tc = u.forwardRef(
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
    } = za(Ic, e), v = se(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => m(g.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": kt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Bc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: F(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: F(n, (y) => {
          m((b) => kt(b) ? !0 : !b), x && h && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
Tc.displayName = Ic;
var Lc = u.forwardRef(
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
      ov,
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
            Tc,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            Vc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Lc.displayName = ao;
var $c = "CheckboxIndicator", Wc = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = za($c, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || kt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          q.span,
          {
            "data-state": Bc(a.checked),
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
Wc.displayName = $c;
var Fc = "CheckboxBubbleInput", Vc = u.forwardRef(
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
    } = za(Fc, e), x = se(n, h), v = ro(a), g = oo(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, E = !o.current;
      if (v !== a && C) {
        const N = new Event("click", { bubbles: E });
        b.indeterminate = kt(a), C.call(b, kt(a) ? !1 : a), b.dispatchEvent(N);
      }
    }, [p, v, a, o]);
    const y = u.useRef(kt(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      q.input,
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
Vc.displayName = Fc;
function av(e) {
  return typeof e == "function";
}
function kt(e) {
  return e === "indeterminate";
}
function Bc(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const sv = ["top", "right", "bottom", "left"], Mt = Math.min, ze = Math.max, Tr = Math.round, gr = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), iv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cv = {
  start: "end",
  end: "start"
};
function sa(e, t, n) {
  return ze(e, Mt(t, n));
}
function bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yt(e) {
  return e.split("-")[0];
}
function mn(e) {
  return e.split("-")[1];
}
function Ha(e) {
  return e === "x" ? "y" : "x";
}
function Ya(e) {
  return e === "y" ? "height" : "width";
}
const lv = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e) {
  return lv.has(yt(e)) ? "y" : "x";
}
function Ga(e) {
  return Ha(ct(e));
}
function dv(e, t, n) {
  n === void 0 && (n = !1);
  const r = mn(e), o = Ga(e), a = Ya(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Lr(s)), [s, Lr(s)];
}
function uv(e) {
  const t = Lr(e);
  return [ia(e), t, ia(t)];
}
function ia(e) {
  return e.replace(/start|end/g, (t) => cv[t]);
}
const Hs = ["left", "right"], Ys = ["right", "left"], fv = ["top", "bottom"], mv = ["bottom", "top"];
function pv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ys : Hs : t ? Hs : Ys;
    case "left":
    case "right":
      return t ? fv : mv;
    default:
      return [];
  }
}
function hv(e, t, n, r) {
  const o = mn(e);
  let a = pv(yt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ia)))), a;
}
function Lr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => iv[t]);
}
function vv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zc(e) {
  return typeof e != "number" ? vv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $r(e) {
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
function Gs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ct(t), s = Ga(t), i = Ya(s), l = yt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (mn(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const gv = async (e, t, n) => {
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
  } = Gs(d, r, l), p = r, h = {}, x = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: y
    } = i[v], {
      x: b,
      y: w,
      data: k,
      reset: C
    } = await y({
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
    f = b ?? f, m = w ?? m, h = {
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
    } = Gs(d, p, l)), v = -1);
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
  } = bt(t, e), x = zc(h), g = i[p ? m === "floating" ? "reference" : "floating" : m], y = $r(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), k = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = $r(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - C.top + x.top) / k.y,
    bottom: (C.bottom - y.bottom + x.bottom) / k.y,
    left: (y.left - C.left + x.left) / k.x,
    right: (C.right - y.right + x.right) / k.x
  };
}
const xv = (e) => ({
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
    } = bt(e, t) || {};
    if (d == null)
      return {};
    const m = zc(f), p = {
      x: n,
      y: r
    }, h = Ga(o), x = Ya(h), v = await s.getDimensions(d), g = h === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[h] - p[h] - a.floating[x], C = p[h] - a.reference[h], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let N = E ? E[w] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(E))) && (N = i.floating[w] || a.floating[x]);
    const P = k / 2 - C / 2, T = N / 2 - v[x] / 2 - 1, z = Mt(m[y], T), V = Mt(m[b], T), U = z, Z = N - v[x] - V, j = N / 2 - v[x] / 2 + P, H = sa(U, j, Z), B = !l.arrow && mn(o) != null && j !== H && a.reference[x] / 2 - (j < U ? z : V) - v[x] / 2 < 0, K = B ? j < U ? j - U : j - Z : 0;
    return {
      [h]: p[h] + K,
      data: {
        [h]: H,
        centerOffset: j - H - K,
        ...B && {
          alignmentOffset: K
        }
      },
      reset: B
    };
  }
}), bv = function(e) {
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
      } = bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = yt(o), b = ct(i), w = yt(i) === i, k = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (w || !v ? [Lr(i)] : uv(i)), E = x !== "none";
      !p && E && C.push(...hv(i, v, x, k));
      const N = [i, ...C], P = await Ln(t, g), T = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && T.push(P[y]), m) {
        const j = dv(o, s, k);
        T.push(P[j[0]], P[j[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: T
      }], !T.every((j) => j <= 0)) {
        var V, U;
        const j = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, H = N[j];
        if (H && (!(m === "alignment" ? b !== ct(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((A) => ct(A.placement) === b ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let B = (U = z.filter((K) => K.overflows[0] <= 0).sort((K, A) => K.overflows[1] - A.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!B)
          switch (h) {
            case "bestFit": {
              var Z;
              const K = (Z = z.filter((A) => {
                if (E) {
                  const I = ct(A.placement);
                  return I === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((I) => I > 0).reduce((I, re) => I + re, 0)]).sort((A, I) => A[1] - I[1])[0]) == null ? void 0 : Z[0];
              K && (B = K);
              break;
            }
            case "initialPlacement":
              B = i;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Us(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ks(e) {
  return sv.some((t) => e[t] >= 0);
}
const yv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = bt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ln(t, {
            ...o,
            elementContext: "reference"
          }), s = Us(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ks(s)
            }
          };
        }
        case "escaped": {
          const a = await Ln(t, {
            ...o,
            altBoundary: !0
          }), s = Us(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ks(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Hc = /* @__PURE__ */ new Set(["left", "top"]);
async function wv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = yt(n), i = mn(n), l = ct(n) === "y", d = Hc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = bt(t, e);
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
const Cv = function(e) {
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
      } = t, l = await wv(t, e);
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
}, Sv = function(e) {
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
      } = bt(e, t), d = {
        x: n,
        y: r
      }, f = await Ln(t, l), m = ct(yt(o)), p = Ha(m);
      let h = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = h + f[g], w = h - f[y];
        h = sa(b, h, w);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = x + f[g], w = x - f[y];
        x = sa(b, x, w);
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
}, kv = function(e) {
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
      } = bt(e, t), f = {
        x: n,
        y: r
      }, m = ct(o), p = Ha(m);
      let h = f[p], x = f[m];
      const v = bt(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const w = p === "y" ? "height" : "width", k = a.reference[p] - a.floating[w] + g.mainAxis, C = a.reference[p] + a.reference[w] - g.mainAxis;
        h < k ? h = k : h > C && (h = C);
      }
      if (d) {
        var y, b;
        const w = p === "y" ? "width" : "height", k = Hc.has(yt(o)), C = a.reference[m] - a.floating[w] + (k && ((y = s.offset) == null ? void 0 : y[m]) || 0) + (k ? 0 : g.crossAxis), E = a.reference[m] + a.reference[w] + (k ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (k ? g.crossAxis : 0);
        x < C ? x = C : x > E && (x = E);
      }
      return {
        [p]: h,
        [m]: x
      };
    }
  };
}, Nv = function(e) {
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
      } = bt(e, t), f = await Ln(t, d), m = yt(o), p = mn(o), h = ct(o) === "y", {
        width: x,
        height: v
      } = a.floating;
      let g, y;
      m === "top" || m === "bottom" ? (g = m, y = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m, g = p === "end" ? "top" : "bottom");
      const b = v - f.top - f.bottom, w = x - f.left - f.right, k = Mt(v - f[g], b), C = Mt(x - f[y], w), E = !t.middlewareData.shift;
      let N = k, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w), (r = t.middlewareData.shift) != null && r.enabled.y && (N = b), E && !p) {
        const z = ze(f.left, 0), V = ze(f.right, 0), U = ze(f.top, 0), Z = ze(f.bottom, 0);
        h ? P = x - 2 * (z !== 0 || V !== 0 ? z + V : ze(f.left, f.right)) : N = v - 2 * (U !== 0 || Z !== 0 ? U + Z : ze(f.top, f.bottom));
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
function so() {
  return typeof window < "u";
}
function pn(e) {
  return Yc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function He(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  var t;
  return (t = (Yc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Yc(e) {
  return so() ? e instanceof Node || e instanceof He(e).Node : !1;
}
function Qe(e) {
  return so() ? e instanceof Element || e instanceof He(e).Element : !1;
}
function ut(e) {
  return so() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1;
}
function qs(e) {
  return !so() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
}
const Mv = /* @__PURE__ */ new Set(["inline", "contents"]);
function Kn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Mv.has(o);
}
const Ev = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Pv(e) {
  return Ev.has(pn(e));
}
const Rv = [":popover-open", ":modal"];
function io(e) {
  return Rv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Av = ["transform", "translate", "scale", "rotate", "perspective"], Dv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ov = ["paint", "layout", "strict", "content"];
function Ua(e) {
  const t = Ka(), n = Qe(e) ? Je(e) : e;
  return Av.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Dv.some((r) => (n.willChange || "").includes(r)) || Ov.some((r) => (n.contain || "").includes(r));
}
function _v(e) {
  let t = Et(e);
  for (; ut(t) && !cn(t); ) {
    if (Ua(t))
      return t;
    if (io(t))
      return null;
    t = Et(t);
  }
  return null;
}
function Ka() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function cn(e) {
  return jv.has(pn(e));
}
function Je(e) {
  return He(e).getComputedStyle(e);
}
function co(e) {
  return Qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Et(e) {
  if (pn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qs(e) && e.host || // Fallback.
    ft(e)
  );
  return qs(t) ? t.host : t;
}
function Gc(e) {
  const t = Et(e);
  return cn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ut(t) && Kn(t) ? t : Gc(t);
}
function $n(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Gc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = He(o);
  if (a) {
    const i = ca(s);
    return t.concat(s, s.visualViewport || [], Kn(o) ? o : [], i && n ? $n(i) : []);
  }
  return t.concat(o, $n(o, [], n));
}
function ca(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Uc(e) {
  const t = Je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ut(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Tr(n) !== a || Tr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function qa(e) {
  return Qe(e) ? e : e.contextElement;
}
function on(e) {
  const t = qa(e);
  if (!ut(t))
    return dt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Uc(t);
  let s = (a ? Tr(n.width) : n.width) / r, i = (a ? Tr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Iv = /* @__PURE__ */ dt(0);
function Kc(e) {
  const t = He(e);
  return !Ka() || !t.visualViewport ? Iv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== He(e) ? !1 : t;
}
function Wt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qa(e);
  let s = dt(1);
  t && (r ? Qe(r) && (s = on(r)) : s = on(e));
  const i = Tv(a, n, r) ? Kc(a) : dt(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = He(a), h = r && Qe(r) ? He(r) : r;
    let x = p, v = ca(x);
    for (; v && r && h !== x; ) {
      const g = on(v), y = v.getBoundingClientRect(), b = Je(v), w = y.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = y.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += w, d += k, x = He(v), v = ca(x);
    }
  }
  return $r({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function lo(e, t) {
  const n = co(e).scrollLeft;
  return t ? t.left + n : Wt(ft(e)).left + n;
}
function qc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - lo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Lv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ft(r), i = t ? io(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = dt(1);
  const f = dt(0), m = ut(r);
  if ((m || !m && !a) && ((pn(r) !== "body" || Kn(s)) && (l = co(r)), ut(r))) {
    const h = Wt(r);
    d = on(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const p = s && !m && !a ? qc(s, l) : dt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function $v(e) {
  return Array.from(e.getClientRects());
}
function Wv(e) {
  const t = ft(e), n = co(e), r = e.ownerDocument.body, o = ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + lo(e);
  const i = -n.scrollTop;
  return Je(r).direction === "rtl" && (s += ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Xs = 25;
function Fv(e, t) {
  const n = He(e), r = ft(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Ka();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = lo(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), h = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - h);
    x <= Xs && (a -= x);
  } else d <= Xs && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Vv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bv(e, t) {
  const n = Wt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ut(e) ? on(e) : dt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function Zs(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fv(e, n);
  else if (t === "document")
    r = Wv(ft(e));
  else if (Qe(t))
    r = Bv(t, n);
  else {
    const o = Kc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $r(r);
}
function Xc(e, t) {
  const n = Et(e);
  return n === t || !Qe(n) || cn(n) ? !1 : Je(n).position === "fixed" || Xc(n, t);
}
function zv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $n(e, [], !1).filter((i) => Qe(i) && pn(i) !== "body"), o = null;
  const a = Je(e).position === "fixed";
  let s = a ? Et(e) : e;
  for (; Qe(s) && !cn(s); ) {
    const i = Je(s), l = Ua(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Vv.has(o.position) || Kn(s) && !l && Xc(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Et(s);
  }
  return t.set(e, r), r;
}
function Hv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? io(t) ? [] : zv(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
    const m = Zs(t, f, o);
    return d.top = ze(m.top, d.top), d.right = Mt(m.right, d.right), d.bottom = Mt(m.bottom, d.bottom), d.left = ze(m.left, d.left), d;
  }, Zs(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Yv(e) {
  const {
    width: t,
    height: n
  } = Uc(e);
  return {
    width: t,
    height: n
  };
}
function Gv(e, t, n) {
  const r = ut(t), o = ft(t), a = n === "fixed", s = Wt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dt(0);
  function d() {
    l.x = lo(o);
  }
  if (r || !r && !a)
    if ((pn(t) !== "body" || Kn(o)) && (i = co(t)), r) {
      const h = Wt(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? qc(o, i) : dt(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Fo(e) {
  return Je(e).position === "static";
}
function Qs(e, t) {
  if (!ut(e) || Je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ft(e) === n && (n = n.ownerDocument.body), n;
}
function Zc(e, t) {
  const n = He(e);
  if (io(e))
    return n;
  if (!ut(e)) {
    let o = Et(e);
    for (; o && !cn(o); ) {
      if (Qe(o) && !Fo(o))
        return o;
      o = Et(o);
    }
    return n;
  }
  let r = Qs(e, t);
  for (; r && Pv(r) && Fo(r); )
    r = Qs(r, t);
  return r && cn(r) && Fo(r) && !Ua(r) ? n : r || _v(e) || n;
}
const Uv = async function(e) {
  const t = this.getOffsetParent || Zc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Gv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Kv(e) {
  return Je(e).direction === "rtl";
}
const qv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lv,
  getDocumentElement: ft,
  getClippingRect: Hv,
  getOffsetParent: Zc,
  getElementRects: Uv,
  getClientRects: $v,
  getDimensions: Yv,
  getScale: on,
  isElement: Qe,
  isRTL: Kv
};
function Qc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Xv(e, t) {
  let n = null, r;
  const o = ft(e);
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
    const x = gr(m), v = gr(o.clientWidth - (f + p)), g = gr(o.clientHeight - (m + h)), y = gr(f), w = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: ze(0, Mt(1, l)) || 1
    };
    let k = !0;
    function C(E) {
      const N = E[0].intersectionRatio;
      if (N !== l) {
        if (!k)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !Qc(d, e.getBoundingClientRect()) && s(), k = !1;
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
function Zv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = qa(e), f = o || a ? [...d ? $n(d) : [], ...$n(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const m = d && i ? Xv(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let x, v = l ? Wt(e) : null;
  l && g();
  function g() {
    const y = Wt(e);
    v && !Qc(v, y) && n(), v = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const Qv = Cv, Jv = Sv, eg = bv, tg = Nv, ng = yv, Js = xv, rg = kv, og = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: qv,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return gv(e, t, {
    ...o,
    platform: a
  });
};
var ag = typeof document < "u", sg = function() {
}, Rr = ag ? Ti : sg;
function Wr(e, t) {
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
        if (!Wr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Wr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ei(e, t) {
  const n = Jc(e);
  return Math.round(t * n) / n;
}
function Vo(e) {
  const t = u.useRef(e);
  return Rr(() => {
    t.current = e;
  }), t;
}
function ig(e) {
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
  Wr(p, r) || h(r);
  const [x, v] = u.useState(null), [g, y] = u.useState(null), b = u.useCallback((A) => {
    A !== E.current && (E.current = A, v(A));
  }, []), w = u.useCallback((A) => {
    A !== N.current && (N.current = A, y(A));
  }, []), k = a || x, C = s || g, E = u.useRef(null), N = u.useRef(null), P = u.useRef(f), T = l != null, z = Vo(l), V = Vo(o), U = Vo(d), Z = u.useCallback(() => {
    if (!E.current || !N.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    V.current && (A.platform = V.current), og(E.current, N.current, A).then((I) => {
      const re = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      j.current && !Wr(P.current, re) && (P.current = re, Hn.flushSync(() => {
        m(re);
      }));
    });
  }, [p, t, n, V, U]);
  Rr(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [d]);
  const j = u.useRef(!1);
  Rr(() => (j.current = !0, () => {
    j.current = !1;
  }), []), Rr(() => {
    if (k && (E.current = k), C && (N.current = C), k && C) {
      if (z.current)
        return z.current(k, C, Z);
      Z();
    }
  }, [k, C, Z, z, T]);
  const H = u.useMemo(() => ({
    reference: E,
    floating: N,
    setReference: b,
    setFloating: w
  }), [b, w]), B = u.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), K = u.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return A;
    const I = ei(B.floating, f.x), re = ei(B.floating, f.y);
    return i ? {
      ...A,
      transform: "translate(" + I + "px, " + re + "px)",
      ...Jc(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: re
    };
  }, [n, i, B.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: Z,
    refs: H,
    elements: B,
    floatingStyles: K
  }), [f, Z, H, B, K]);
}
const cg = (e) => {
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
      return r && t(r) ? r.current != null ? Js({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Js({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, lg = (e, t) => ({
  ...Qv(e),
  options: [e, t]
}), dg = (e, t) => ({
  ...Jv(e),
  options: [e, t]
}), ug = (e, t) => ({
  ...rg(e),
  options: [e, t]
}), fg = (e, t) => ({
  ...eg(e),
  options: [e, t]
}), mg = (e, t) => ({
  ...tg(e),
  options: [e, t]
}), pg = (e, t) => ({
  ...ng(e),
  options: [e, t]
}), hg = (e, t) => ({
  ...cg(e),
  options: [e, t]
});
var vg = "Arrow", el = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    q.svg,
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
el.displayName = vg;
var gg = el, Xa = "Popper", [tl, Rt] = Pe(Xa), [xg, nl] = tl(Xa), rl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(xg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
rl.displayName = Xa;
var ol = "PopperAnchor", al = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = nl(ol, n), s = u.useRef(null), i = se(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(q.div, { ...o, ref: i });
  }
);
al.displayName = ol;
var Za = "PopperContent", [bg, yg] = tl(Za), sl = u.forwardRef(
  (e, t) => {
    var O, X, Q, ne, de, ue;
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
    } = e, g = nl(Za, n), [y, b] = u.useState(null), w = se(t, (Ne) => b(Ne)), [k, C] = u.useState(null), E = oo(k), N = (E == null ? void 0 : E.width) ?? 0, P = (E == null ? void 0 : E.height) ?? 0, T = r + (a !== "center" ? "-" + a : ""), z = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(d) ? d : [d], U = V.length > 0, Z = {
      padding: z,
      boundary: V.filter(Cg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: j, floatingStyles: H, placement: B, isPositioned: K, middlewareData: A } = ig({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Ne) => Zv(...Ne, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        lg({ mainAxis: o + P, alignmentAxis: s }),
        l && dg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? ug() : void 0,
          ...Z
        }),
        l && fg({ ...Z }),
        mg({
          ...Z,
          apply: ({ elements: Ne, rects: je, availableWidth: nt, availableHeight: qe }) => {
            const { width: rt, height: Ut } = je.reference, Le = Ne.floating.style;
            Le.setProperty("--radix-popper-available-width", `${nt}px`), Le.setProperty("--radix-popper-available-height", `${qe}px`), Le.setProperty("--radix-popper-anchor-width", `${rt}px`), Le.setProperty("--radix-popper-anchor-height", `${Ut}px`);
          }
        }),
        k && hg({ element: k, padding: i }),
        Sg({ arrowWidth: N, arrowHeight: P }),
        p && pg({ strategy: "referenceHidden", ...Z })
      ]
    }), [I, re] = ll(B), R = We(x);
    Ee(() => {
      K && (R == null || R());
    }, [K, R]);
    const M = (O = A.arrow) == null ? void 0 : O.x, _ = (X = A.arrow) == null ? void 0 : X.y, $ = ((Q = A.arrow) == null ? void 0 : Q.centerOffset) !== 0, [Y, W] = u.useState();
    return Ee(() => {
      y && W(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Y,
          "--radix-popper-transform-origin": [
            (ne = A.transformOrigin) == null ? void 0 : ne.x,
            (de = A.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ue = A.hide) == null ? void 0 : ue.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          bg,
          {
            scope: n,
            placedSide: I,
            onArrowChange: C,
            arrowX: M,
            arrowY: _,
            shouldHideArrow: $,
            children: /* @__PURE__ */ c.jsx(
              q.div,
              {
                "data-side": I,
                "data-align": re,
                ...v,
                ref: w,
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
sl.displayName = Za;
var il = "PopperArrow", wg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, cl = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = yg(il, r), s = wg[a.placedSide];
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
          gg,
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
cl.displayName = il;
function Cg(e) {
  return e !== null;
}
var Sg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = ll(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", v = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, v = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, v = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, v = s ? m : `${h}px`) : d === "left" && (x = `${r.floating.width + l}px`, v = s ? m : `${h}px`), { data: { x, y: v } };
  }
});
function ll(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var uo = rl, qn = al, fo = sl, mo = cl, Bo = "rovingFocusGroup.onEntryFocus", kg = { bubbles: !1, cancelable: !0 }, Xn = "RovingFocusGroup", [la, dl, Ng] = Yn(Xn), [Mg, hn] = Pe(
  Xn,
  [Ng]
), [Eg, Pg] = Mg(Xn), ul = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(la.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(la.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Rg, { ...e, ref: t }) }) })
);
ul.displayName = Xn;
var Rg = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), h = se(t, p), x = fn(a), [v, g] = Ie({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Xn
  }), [y, b] = u.useState(!1), w = We(d), k = dl(n), C = u.useRef(!1), [E, N] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Bo, w), () => P.removeEventListener(Bo, w);
  }, [w]), /* @__PURE__ */ c.jsx(
    Eg,
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
        q.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: F(e.onFocus, (P) => {
            const T = !C.current;
            if (P.target === P.currentTarget && T && !y) {
              const z = new CustomEvent(Bo, kg);
              if (P.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const V = k().filter((B) => B.focusable), U = V.find((B) => B.active), Z = V.find((B) => B.id === v), H = [U, Z, ...V].filter(
                  Boolean
                ).map((B) => B.ref.current);
                pl(H, f);
              }
            }
            C.current = !1;
          }),
          onBlur: F(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), fl = "RovingFocusGroupItem", ml = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ce(), d = a || l, f = Pg(fl, n), m = f.currentTabStopId === d, p = dl(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = f;
    return u.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ c.jsx(
      la.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          q.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: F(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: F(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: F(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = Og(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = p().filter((k) => k.focusable).map((k) => k.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const k = w.indexOf(g.currentTarget);
                  w = f.loop ? _g(w, k + 1) : w.slice(k + 1);
                }
                setTimeout(() => pl(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
ml.displayName = fl;
var Ag = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Dg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Og(e, t, n) {
  const r = Dg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Ag[r];
}
function pl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function _g(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Qa = ul, Ja = ml, da = ["Enter", " "], jg = ["ArrowDown", "PageUp", "Home"], hl = ["ArrowUp", "PageDown", "End"], Ig = [...jg, ...hl], Tg = {
  ltr: [...da, "ArrowRight"],
  rtl: [...da, "ArrowLeft"]
}, Lg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Zn = "Menu", [Wn, $g, Wg] = Yn(Zn), [Yt, vl] = Pe(Zn, [
  Wg,
  Rt,
  hn
]), po = Rt(), gl = hn(), [Fg, Gt] = Yt(Zn), [Vg, Qn] = Yt(Zn), xl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = po(t), [l, d] = u.useState(null), f = u.useRef(!1), m = We(a), p = fn(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(uo, { ...i, children: /* @__PURE__ */ c.jsx(
    Fg,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Vg,
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
xl.displayName = Zn;
var Bg = "MenuAnchor", es = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = po(n);
    return /* @__PURE__ */ c.jsx(qn, { ...o, ...r, ref: t });
  }
);
es.displayName = Bg;
var ts = "MenuPortal", [zg, bl] = Yt(ts, {
  forceMount: void 0
}), yl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Gt(ts, t);
  return /* @__PURE__ */ c.jsx(zg, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
yl.displayName = ts;
var Ke = "MenuContent", [Hg, ns] = Yt(Ke), wl = u.forwardRef(
  (e, t) => {
    const n = bl(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ke, e.__scopeMenu), s = Qn(Ke, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Wn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Wn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(Yg, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Gg, { ...o, ref: t }) }) }) });
  }
), Yg = u.forwardRef(
  (e, t) => {
    const n = Gt(Ke, e.__scopeMenu), r = u.useRef(null), o = se(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return to(a);
    }, []), /* @__PURE__ */ c.jsx(
      rs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Gg = u.forwardRef((e, t) => {
  const n = Gt(Ke, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    rs,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Ug = /* @__PURE__ */ Nt("MenuContent.ScrollLock"), rs = u.forwardRef(
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
    } = e, g = Gt(Ke, n), y = Qn(Ke, n), b = po(n), w = gl(n), k = $g(n), [C, E] = u.useState(null), N = u.useRef(null), P = se(t, N, g.onContentChange), T = u.useRef(0), z = u.useRef(""), V = u.useRef(0), U = u.useRef(null), Z = u.useRef("right"), j = u.useRef(0), H = x ? Un : u.Fragment, B = x ? { as: Ug, allowPinchZoom: !0 } : void 0, K = (I) => {
      var O, X;
      const re = z.current + I, R = k().filter((Q) => !Q.disabled), M = document.activeElement, _ = (O = R.find((Q) => Q.ref.current === M)) == null ? void 0 : O.textValue, $ = R.map((Q) => Q.textValue), Y = ax($, re, _), W = (X = R.find((Q) => Q.textValue === Y)) == null ? void 0 : X.ref.current;
      (function Q(ne) {
        z.current = ne, window.clearTimeout(T.current), ne !== "" && (T.current = window.setTimeout(() => Q(""), 1e3));
      })(re), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), Jr();
    const A = u.useCallback((I) => {
      var R, M;
      return Z.current === ((R = U.current) == null ? void 0 : R.side) && ix(I, (M = U.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Hg,
      {
        scope: n,
        searchRef: z,
        onItemEnter: u.useCallback(
          (I) => {
            A(I) && I.preventDefault();
          },
          [A]
        ),
        onItemLeave: u.useCallback(
          (I) => {
            var re;
            A(I) || ((re = N.current) == null || re.focus(), E(null));
          },
          [A]
        ),
        onTriggerLeave: u.useCallback(
          (I) => {
            A(I) && I.preventDefault();
          },
          [A]
        ),
        pointerGraceTimerRef: V,
        onPointerGraceIntentChange: u.useCallback((I) => {
          U.current = I;
        }, []),
        children: /* @__PURE__ */ c.jsx(H, { ...B, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: F(a, (I) => {
              var re;
              I.preventDefault(), (re = N.current) == null || re.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  Qa,
                  {
                    asChild: !0,
                    ...w,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: F(l, (I) => {
                      y.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      fo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ll(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...v,
                        ref: P,
                        style: { outline: "none", ...v.style },
                        onKeyDown: F(v.onKeyDown, (I) => {
                          const R = I.target.closest("[data-radix-menu-content]") === I.currentTarget, M = I.ctrlKey || I.altKey || I.metaKey, _ = I.key.length === 1;
                          R && (I.key === "Tab" && I.preventDefault(), !M && _ && K(I.key));
                          const $ = N.current;
                          if (I.target !== $ || !Ig.includes(I.key)) return;
                          I.preventDefault();
                          const W = k().filter((O) => !O.disabled).map((O) => O.ref.current);
                          hl.includes(I.key) && W.reverse(), rx(W);
                        }),
                        onBlur: F(e.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(T.current), z.current = "");
                        }),
                        onPointerMove: F(
                          e.onPointerMove,
                          Fn((I) => {
                            const re = I.target, R = j.current !== I.clientX;
                            if (I.currentTarget.contains(re) && R) {
                              const M = I.clientX > j.current ? "right" : "left";
                              Z.current = M, j.current = I.clientX;
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
wl.displayName = Ke;
var Kg = "MenuGroup", os = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(q.div, { role: "group", ...r, ref: t });
  }
);
os.displayName = Kg;
var qg = "MenuLabel", Cl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(q.div, { ...r, ref: t });
  }
);
Cl.displayName = qg;
var Fr = "MenuItem", ti = "menu.itemSelect", ho = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = Qn(Fr, e.__scopeMenu), i = ns(Fr, e.__scopeMenu), l = se(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(ti, { bubbles: !0, cancelable: !0 });
        m.addEventListener(ti, (h) => r == null ? void 0 : r(h), { once: !0 }), Ra(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Sl,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: F(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: F(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: F(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || da.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
ho.displayName = Fr;
var Sl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ns(Fr, n), i = gl(n), l = u.useRef(null), d = se(t, l), [f, m] = u.useState(!1), [p, h] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Wn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(Ja, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: F(
              e.onPointerMove,
              Fn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              Fn((x) => s.onItemLeave(x))
            ),
            onFocus: F(e.onFocus, () => m(!0)),
            onBlur: F(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), Xg = "MenuCheckboxItem", kl = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Rl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      ho,
      {
        role: "menuitemcheckbox",
        "aria-checked": Vr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ss(n),
        onSelect: F(
          o.onSelect,
          () => r == null ? void 0 : r(Vr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
kl.displayName = Xg;
var Nl = "MenuRadioGroup", [Zg, Qg] = Yt(
  Nl,
  { value: void 0, onValueChange: () => {
  } }
), Ml = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = We(r);
    return /* @__PURE__ */ c.jsx(Zg, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(os, { ...o, ref: t }) });
  }
);
Ml.displayName = Nl;
var El = "MenuRadioItem", Pl = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Qg(El, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Rl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      ho,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ss(a),
        onSelect: F(
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
Pl.displayName = El;
var as = "MenuItemIndicator", [Rl, Jg] = Yt(
  as,
  { checked: !1 }
), Al = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Jg(as, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || Vr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          q.span,
          {
            ...o,
            ref: t,
            "data-state": ss(a.checked)
          }
        )
      }
    );
  }
);
Al.displayName = as;
var ex = "MenuSeparator", Dl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Dl.displayName = ex;
var tx = "MenuArrow", Ol = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = po(n);
    return /* @__PURE__ */ c.jsx(mo, { ...o, ...r, ref: t });
  }
);
Ol.displayName = tx;
var nx = "MenuSub", [Bk, _l] = Yt(nx), On = "MenuSubTrigger", jl = u.forwardRef(
  (e, t) => {
    const n = Gt(On, e.__scopeMenu), r = Qn(On, e.__scopeMenu), o = _l(On, e.__scopeMenu), a = ns(On, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(es, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Sl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ll(n.open),
        ...e,
        ref: xt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: F(
          e.onPointerMove,
          Fn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: F(
          e.onPointerLeave,
          Fn((m) => {
            var h, x;
            f();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (x = n.content) == null ? void 0 : x.dataset.side, g = v === "right", y = g ? -5 : 5, b = p[g ? "left" : "right"], w = p[g ? "right" : "left"];
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
        onKeyDown: F(e.onKeyDown, (m) => {
          var h;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Tg[r.dir].includes(m.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
jl.displayName = On;
var Il = "MenuSubContent", Tl = u.forwardRef(
  (e, t) => {
    const n = bl(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ke, e.__scopeMenu), s = Qn(Ke, e.__scopeMenu), i = _l(Il, e.__scopeMenu), l = u.useRef(null), d = se(t, l);
    return /* @__PURE__ */ c.jsx(Wn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Wn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      rs,
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
        onFocusOutside: F(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: F(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: F(e.onKeyDown, (f) => {
          var h;
          const m = f.currentTarget.contains(f.target), p = Lg[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (h = i.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Tl.displayName = Il;
function Ll(e) {
  return e ? "open" : "closed";
}
function Vr(e) {
  return e === "indeterminate";
}
function ss(e) {
  return Vr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function rx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ox(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function ax(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = ox(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function sx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function ix(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return sx(n, t);
}
function Fn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var cx = xl, lx = es, dx = yl, ux = wl, fx = os, mx = Cl, px = ho, hx = kl, vx = Ml, gx = Pl, xx = Al, bx = Dl, yx = Ol, wx = jl, Cx = Tl, vo = "DropdownMenu", [Sx] = Pe(
  vo,
  [vl]
), Te = vl(), [kx, $l] = Sx(vo), Wl = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Te(t), d = u.useRef(null), [f, m] = Ie({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: vo
  });
  return /* @__PURE__ */ c.jsx(
    kx,
    {
      scope: t,
      triggerId: Ce(),
      triggerRef: d,
      contentId: Ce(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(cx, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
Wl.displayName = vo;
var Fl = "DropdownMenuTrigger", Vl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = $l(Fl, n), s = Te(n);
    return /* @__PURE__ */ c.jsx(lx, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      q.button,
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
        ref: xt(t, a.triggerRef),
        onPointerDown: F(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: F(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Vl.displayName = Fl;
var Nx = "DropdownMenuPortal", Bl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Te(t);
  return /* @__PURE__ */ c.jsx(dx, { ...r, ...n });
};
Bl.displayName = Nx;
var zl = "DropdownMenuContent", Hl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $l(zl, n), a = Te(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ux,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: F(e.onInteractOutside, (i) => {
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
Hl.displayName = zl;
var Mx = "DropdownMenuGroup", Ex = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(fx, { ...o, ...r, ref: t });
  }
);
Ex.displayName = Mx;
var Px = "DropdownMenuLabel", Yl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(mx, { ...o, ...r, ref: t });
  }
);
Yl.displayName = Px;
var Rx = "DropdownMenuItem", Gl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(px, { ...o, ...r, ref: t });
  }
);
Gl.displayName = Rx;
var Ax = "DropdownMenuCheckboxItem", Dx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(hx, { ...o, ...r, ref: t });
});
Dx.displayName = Ax;
var Ox = "DropdownMenuRadioGroup", _x = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(vx, { ...o, ...r, ref: t });
});
_x.displayName = Ox;
var jx = "DropdownMenuRadioItem", Ix = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(gx, { ...o, ...r, ref: t });
});
Ix.displayName = jx;
var Tx = "DropdownMenuItemIndicator", Lx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(xx, { ...o, ...r, ref: t });
});
Lx.displayName = Tx;
var $x = "DropdownMenuSeparator", Ul = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(bx, { ...o, ...r, ref: t });
});
Ul.displayName = $x;
var Wx = "DropdownMenuArrow", Fx = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(yx, { ...o, ...r, ref: t });
  }
);
Fx.displayName = Wx;
var Vx = "DropdownMenuSubTrigger", Bx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(wx, { ...o, ...r, ref: t });
});
Bx.displayName = Vx;
var zx = "DropdownMenuSubContent", Hx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(
    Cx,
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
Hx.displayName = zx;
var Yx = Wl, Gx = Vl, Ux = Bl, Kx = Hl, qx = Yl, Xx = Gl, Zx = Ul;
function ni(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var go = "Popover", [Kl] = Pe(go, [
  Rt
]), Jn = Rt(), [Qx, At] = Kl(go), ql = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Jn(t), l = u.useRef(null), [d, f] = u.useState(!1), [m, p] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: go
  });
  return /* @__PURE__ */ c.jsx(uo, { ...i, children: /* @__PURE__ */ c.jsx(
    Qx,
    {
      scope: t,
      contentId: Ce(),
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
ql.displayName = go;
var Xl = "PopoverAnchor", Jx = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(Xl, n), a = Jn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(qn, { ...a, ...r, ref: t });
  }
);
Jx.displayName = Xl;
var Zl = "PopoverTrigger", Ql = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(Zl, n), a = Jn(n), s = se(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": rd(o.open),
        ...r,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...a, children: i });
  }
);
Ql.displayName = Zl;
var is = "PopoverPortal", [e0, t0] = Kl(is, {
  forceMount: void 0
}), Jl = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = At(is, t);
  return /* @__PURE__ */ c.jsx(e0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Jl.displayName = is;
var ln = "PopoverContent", ed = u.forwardRef(
  (e, t) => {
    const n = t0(ln, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = At(ln, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(r0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(o0, { ...o, ref: t }) });
  }
);
ed.displayName = ln;
var n0 = /* @__PURE__ */ Nt("PopoverContent.RemoveScroll"), r0 = u.forwardRef(
  (e, t) => {
    const n = At(ln, e.__scopePopover), r = u.useRef(null), o = se(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return to(s);
    }, []), /* @__PURE__ */ c.jsx(Un, { as: n0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      td,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: F(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: F(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), o0 = u.forwardRef(
  (e, t) => {
    const n = At(ln, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      td,
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
), td = u.forwardRef(
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
    } = e, p = At(ln, n), h = Jn(n);
    return Jr(), /* @__PURE__ */ c.jsx(
      Gn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          zt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              fo,
              {
                "data-state": rd(p.open),
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
), nd = "PopoverClose", a0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(nd, n);
    return /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
a0.displayName = nd;
var s0 = "PopoverArrow", i0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Jn(n);
    return /* @__PURE__ */ c.jsx(mo, { ...o, ...r, ref: t });
  }
);
i0.displayName = s0;
function rd(e) {
  return e ? "open" : "closed";
}
var od = ql, ad = Ql, sd = Jl, cs = ed, ls = "Progress", ds = 100, [c0] = Pe(ls), [l0, d0] = c0(ls), id = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = u0,
      ...s
    } = e;
    (o || o === 0) && !ri(o) && console.error(f0(`${o}`, "Progress"));
    const i = ri(o) ? o : ds;
    r !== null && !oi(r, i) && console.error(m0(`${r}`, "Progress"));
    const l = oi(r, i) ? r : null, d = Br(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(l0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Br(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": dd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
id.displayName = ls;
var cd = "ProgressIndicator", ld = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = d0(cd, n);
    return /* @__PURE__ */ c.jsx(
      q.div,
      {
        "data-state": dd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
ld.displayName = cd;
function u0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function dd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Br(e) {
  return typeof e == "number";
}
function ri(e) {
  return Br(e) && !isNaN(e) && e > 0;
}
function oi(e, t) {
  return Br(e) && !isNaN(e) && e <= t && e >= 0;
}
function f0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ds}\`.`;
}
function m0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ds} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var p0 = id, h0 = ld, us = "Radio", [v0, ud] = Pe(us), [g0, x0] = v0(us), fd = u.forwardRef(
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
    return /* @__PURE__ */ c.jsxs(g0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": vd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: h,
          onClick: F(e.onClick, (g) => {
            o || l == null || l(), v && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ c.jsx(
        hd,
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
fd.displayName = us;
var md = "RadioIndicator", pd = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = x0(md, n);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      q.span,
      {
        "data-state": vd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
pd.displayName = md;
var b0 = "RadioBubbleInput", hd = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = ro(n), d = oo(t);
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
      q.input,
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
hd.displayName = b0;
function vd(e) {
  return e ? "checked" : "unchecked";
}
var y0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xo = "RadioGroup", [w0] = Pe(xo, [
  hn,
  ud
]), gd = hn(), xd = ud(), [C0, S0] = w0(xo), bd = u.forwardRef(
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
    } = e, h = gd(n), x = fn(d), [v, g] = Ie({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: xo
    });
    return /* @__PURE__ */ c.jsx(
      C0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          Qa,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: x,
            loop: f,
            children: /* @__PURE__ */ c.jsx(
              q.div,
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
bd.displayName = xo;
var yd = "RadioGroupItem", wd = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = S0(yd, n), s = a.disabled || r, i = gd(n), l = xd(n), d = u.useRef(null), f = se(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const h = (v) => {
        y0.includes(v.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Ja,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          fd,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: F((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: F(o.onFocus, () => {
              var h;
              p.current && ((h = d.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
wd.displayName = yd;
var k0 = "RadioGroupIndicator", Cd = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = xd(n);
    return /* @__PURE__ */ c.jsx(pd, { ...o, ...r, ref: t });
  }
);
Cd.displayName = k0;
var N0 = bd, M0 = wd, E0 = Cd, P0 = [" ", "Enter", "ArrowUp", "ArrowDown"], R0 = [" ", "Enter"], Ft = "Select", [bo, yo, A0] = Yn(Ft), [vn] = Pe(Ft, [
  A0,
  Rt
]), wo = Rt(), [D0, Dt] = vn(Ft), [O0, _0] = vn(Ft), Sd = (e) => {
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
  } = e, v = wo(t), [g, y] = u.useState(null), [b, w] = u.useState(null), [k, C] = u.useState(!1), E = fn(d), [N, P] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ft
  }), [T, z] = Ie({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ft
  }), V = u.useRef(null), U = g ? x || !!g.closest("form") : !0, [Z, j] = u.useState(/* @__PURE__ */ new Set()), H = Array.from(Z).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ c.jsx(uo, { ...v, children: /* @__PURE__ */ c.jsxs(
    D0,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: Ce(),
      value: T,
      onValueChange: z,
      open: N,
      onOpenChange: P,
      dir: E,
      triggerPointerDownPosRef: V,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(bo.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          O0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((B) => {
              j((K) => new Set(K).add(B));
            }, []),
            onNativeOptionRemove: u.useCallback((B) => {
              j((K) => {
                const A = new Set(K);
                return A.delete(B), A;
              });
            }, []),
            children: n
          }
        ) }),
        U ? /* @__PURE__ */ c.jsxs(
          qd,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: T,
            onChange: (B) => z(B.target.value),
            disabled: p,
            form: x,
            children: [
              T === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Z)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Sd.displayName = Ft;
var kd = "SelectTrigger", Nd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = wo(n), s = Dt(kd, n), i = s.disabled || r, l = se(t, s.onTriggerChange), d = yo(n), f = u.useRef("touch"), [m, p, h] = Zd((v) => {
      const g = d().filter((w) => !w.disabled), y = g.find((w) => w.value === s.value), b = Qd(g, v, y);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      q.button,
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
        "data-placeholder": Xd(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: F(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && x(v);
        }),
        onPointerDown: F(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: F(o.onKeyDown, (v) => {
          const g = m.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(g && v.key === " ") && P0.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
Nd.displayName = kd;
var Md = "SelectValue", Ed = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Dt(Md, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = se(t, l.onValueNodeChange);
    return Ee(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      q.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Xd(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Ed.displayName = Md;
var j0 = "SelectIcon", Pd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Pd.displayName = j0;
var I0 = "SelectPortal", Rd = (e) => /* @__PURE__ */ c.jsx(Ht, { asChild: !0, ...e });
Rd.displayName = I0;
var Vt = "SelectContent", Ad = u.forwardRef(
  (e, t) => {
    const n = Dt(Vt, e.__scopeSelect), [r, o] = u.useState();
    if (Ee(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Hn.createPortal(
        /* @__PURE__ */ c.jsx(Dd, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(bo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Od, { ...e, ref: t });
  }
);
Ad.displayName = Vt;
var Xe = 10, [Dd, Ot] = vn(Vt), T0 = "SelectContentImpl", L0 = /* @__PURE__ */ Nt("SelectContent.RemoveScroll"), Od = u.forwardRef(
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
      ...y
    } = e, b = Dt(Vt, n), [w, k] = u.useState(null), [C, E] = u.useState(null), N = se(t, (O) => k(O)), [P, T] = u.useState(null), [z, V] = u.useState(
      null
    ), U = yo(n), [Z, j] = u.useState(!1), H = u.useRef(!1);
    u.useEffect(() => {
      if (w) return to(w);
    }, [w]), Jr();
    const B = u.useCallback(
      (O) => {
        const [X, ...Q] = U().map((ue) => ue.ref.current), [ne] = Q.slice(-1), de = document.activeElement;
        for (const ue of O)
          if (ue === de || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === X && C && (C.scrollTop = 0), ue === ne && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== de)) return;
      },
      [U, C]
    ), K = u.useCallback(
      () => B([P, w]),
      [B, P, w]
    );
    u.useEffect(() => {
      Z && K();
    }, [Z, K]);
    const { onOpenChange: A, triggerPointerDownPosRef: I } = b;
    u.useEffect(() => {
      if (w) {
        let O = { x: 0, y: 0 };
        const X = (ne) => {
          var de, ue;
          O = {
            x: Math.abs(Math.round(ne.pageX) - (((de = I.current) == null ? void 0 : de.x) ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - (((ue = I.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, Q = (ne) => {
          O.x <= 10 && O.y <= 10 ? ne.preventDefault() : w.contains(ne.target) || A(!1), document.removeEventListener("pointermove", X), I.current = null;
        };
        return I.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, A, I]), u.useEffect(() => {
      const O = () => A(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [A]);
    const [re, R] = Zd((O) => {
      const X = U().filter((de) => !de.disabled), Q = X.find((de) => de.ref.current === document.activeElement), ne = Qd(X, O, Q);
      ne && setTimeout(() => ne.ref.current.focus());
    }), M = u.useCallback(
      (O, X, Q) => {
        const ne = !H.current && !Q;
        (b.value !== void 0 && b.value === X || ne) && (T(O), ne && (H.current = !0));
      },
      [b.value]
    ), _ = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), $ = u.useCallback(
      (O, X, Q) => {
        const ne = !H.current && !Q;
        (b.value !== void 0 && b.value === X || ne) && V(O);
      },
      [b.value]
    ), Y = r === "popper" ? ua : _d, W = Y === ua ? {
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
      Dd,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: E,
        itemRefCallback: M,
        selectedItem: P,
        onItemLeave: _,
        itemTextRefCallback: $,
        focusSelectedItem: K,
        selectedItemText: z,
        position: r,
        isPositioned: Z,
        searchRef: re,
        children: /* @__PURE__ */ c.jsx(Un, { as: L0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: F(o, (O) => {
              var X;
              (X = b.trigger) == null || X.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  Y,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...y,
                    ...W,
                    onPlaced: () => j(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: F(y.onKeyDown, (O) => {
                      const X = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !X && O.key.length === 1 && R(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let ne = U().filter((de) => !de.disabled).map((de) => de.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const de = O.target, ue = ne.indexOf(de);
                          ne = ne.slice(ue + 1);
                        }
                        setTimeout(() => B(ne)), O.preventDefault();
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
Od.displayName = T0;
var $0 = "SelectItemAlignedPosition", _d = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Dt(Vt, n), s = Ot(Vt, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = se(t, (N) => f(N)), p = yo(n), h = u.useRef(!1), x = u.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && v && g && y) {
      const N = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), z = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = z.left - P.left, ue = T.left - de, Ne = N.left - ue, je = N.width + Ne, nt = Math.max(je, P.width), qe = window.innerWidth - Xe, rt = ni(ue, [
          Xe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xe, qe - nt)
        ]);
        i.style.minWidth = je + "px", i.style.left = rt + "px";
      } else {
        const de = P.right - z.right, ue = window.innerWidth - T.right - de, Ne = window.innerWidth - N.right - ue, je = N.width + Ne, nt = Math.max(je, P.width), qe = window.innerWidth - Xe, rt = ni(ue, [
          Xe,
          Math.max(Xe, qe - nt)
        ]);
        i.style.minWidth = je + "px", i.style.right = rt + "px";
      }
      const V = p(), U = window.innerHeight - Xe * 2, Z = v.scrollHeight, j = window.getComputedStyle(d), H = parseInt(j.borderTopWidth, 10), B = parseInt(j.paddingTop, 10), K = parseInt(j.borderBottomWidth, 10), A = parseInt(j.paddingBottom, 10), I = H + B + Z + A + K, re = Math.min(g.offsetHeight * 5, I), R = window.getComputedStyle(v), M = parseInt(R.paddingTop, 10), _ = parseInt(R.paddingBottom, 10), $ = N.top + N.height / 2 - Xe, Y = U - $, W = g.offsetHeight / 2, O = g.offsetTop + W, X = H + B + O, Q = I - X;
      if (X <= $) {
        const de = V.length > 0 && g === V[V.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - v.offsetTop - v.offsetHeight, Ne = Math.max(
          Y,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (de ? _ : 0) + ue + K
        ), je = X + Ne;
        i.style.height = je + "px";
      } else {
        const de = V.length > 0 && g === V[0].ref.current;
        i.style.top = "0px";
        const Ne = Math.max(
          $,
          H + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (de ? M : 0) + W
        ) + Q;
        i.style.height = Ne + "px", v.scrollTop = X - $ + v.offsetTop;
      }
      i.style.margin = `${Xe}px 0`, i.style.minHeight = re + "px", i.style.maxHeight = U + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    d,
    v,
    g,
    y,
    a.dir,
    r
  ]);
  Ee(() => w(), [w]);
  const [k, C] = u.useState();
  Ee(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const E = u.useCallback(
    (N) => {
      N && x.current === !0 && (w(), b == null || b(), x.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ c.jsx(
    F0,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: E,
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
            q.div,
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
_d.displayName = $0;
var W0 = "SelectPopperPosition", ua = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Xe,
    ...a
  } = e, s = wo(n);
  return /* @__PURE__ */ c.jsx(
    fo,
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
ua.displayName = W0;
var [F0, fs] = vn(Vt, {}), fa = "SelectViewport", jd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Ot(fa, n), s = fs(fa, n), i = se(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(bo.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        q.div,
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
          onScroll: F(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - Xe * 2, v = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), y = Math.max(v, g);
                if (y < x) {
                  const b = y + h, w = Math.min(x, b), k = b - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = k > 0 ? k : 0, m.style.justifyContent = "flex-end");
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
jd.displayName = fa;
var Id = "SelectGroup", [V0, B0] = vn(Id), Td = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ce();
    return /* @__PURE__ */ c.jsx(V0, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Td.displayName = Id;
var Ld = "SelectLabel", $d = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = B0(Ld, n);
    return /* @__PURE__ */ c.jsx(q.div, { id: o.id, ...r, ref: t });
  }
);
$d.displayName = Ld;
var zr = "SelectItem", [z0, Wd] = vn(zr), Fd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Dt(zr, n), l = Ot(zr, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, h] = u.useState(!1), x = se(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, o);
      }
    ), v = Ce(), g = u.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      z0,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: d,
        onItemTextChange: u.useCallback((b) => {
          m((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          bo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ c.jsx(
              q.div,
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
                onFocus: F(s.onFocus, () => h(!0)),
                onBlur: F(s.onBlur, () => h(!1)),
                onClick: F(s.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: F(s.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: F(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: F(s.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: F(s.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: F(s.onKeyDown, (b) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && b.key === " " || (R0.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Fd.displayName = zr;
var _n = "SelectItemText", Vd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Dt(_n, n), i = Ot(_n, n), l = Wd(_n, n), d = _0(_n, n), [f, m] = u.useState(null), p = se(
      t,
      (y) => m(y),
      l.onItemTextChange,
      (y) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, y, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = d;
    return Ee(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(q.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Hn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Vd.displayName = _n;
var Bd = "SelectItemIndicator", zd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Wd(Bd, n).isSelected ? /* @__PURE__ */ c.jsx(q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
zd.displayName = Bd;
var ma = "SelectScrollUpButton", Hd = u.forwardRef((e, t) => {
  const n = Ot(ma, e.__scopeSelect), r = fs(ma, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
  return Ee(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Gd,
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
Hd.displayName = ma;
var pa = "SelectScrollDownButton", Yd = u.forwardRef((e, t) => {
  const n = Ot(pa, e.__scopeSelect), r = fs(pa, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
  return Ee(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        a(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Gd,
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
Yd.displayName = pa;
var Gd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Ot("SelectScrollButton", n), s = u.useRef(null), i = yo(n), l = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Ee(() => {
    var f;
    const d = i().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: F(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: F(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: F(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), H0 = "SelectSeparator", Ud = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ud.displayName = H0;
var ha = "SelectArrow", Kd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wo(n), a = Dt(ha, n), s = Ot(ha, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(mo, { ...o, ...r, ref: t }) : null;
  }
);
Kd.displayName = ha;
var Y0 = "SelectBubbleInput", qd = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = se(r, o), s = ro(t);
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
      q.select,
      {
        ...n,
        style: { ...Yi, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
qd.displayName = Y0;
function Xd(e) {
  return e === "" || e === void 0;
}
function Zd(e) {
  const t = We(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
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
function Qd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = G0(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function G0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var U0 = Sd, K0 = Nd, q0 = Ed, X0 = Pd, Z0 = Rd, Q0 = Ad, J0 = jd, eb = Td, tb = $d, nb = Fd, rb = Vd, ob = zd, ab = Hd, sb = Yd, ib = Ud, cb = Kd, Co = "Switch", [lb] = Pe(Co), [db, ub] = lb(Co), Jd = u.forwardRef(
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
    } = e, [p, h] = u.useState(null), x = se(t, (w) => h(w)), v = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [y, b] = Ie({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Co
    });
    return /* @__PURE__ */ c.jsxs(db, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": s,
          "data-state": ru(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: F(e.onClick, (w) => {
            b((k) => !k), g && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        nu,
        {
          control: p,
          bubbles: !v.current,
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
Jd.displayName = Co;
var eu = "SwitchThumb", tu = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = ub(eu, n);
    return /* @__PURE__ */ c.jsx(
      q.span,
      {
        "data-state": ru(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
tu.displayName = eu;
var fb = "SwitchBubbleInput", nu = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = ro(n), d = oo(t);
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
nu.displayName = fb;
function ru(e) {
  return e ? "checked" : "unchecked";
}
var mb = Jd, pb = tu, So = "Tabs", [hb] = Pe(So, [
  hn
]), ou = hn(), [vb, ms] = hb(So), au = u.forwardRef(
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
    } = e, f = fn(i), [m, p] = Ie({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: So
    });
    return /* @__PURE__ */ c.jsx(
      vb,
      {
        scope: n,
        baseId: Ce(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          q.div,
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
au.displayName = So;
var su = "TabsList", iu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = ms(su, n), s = ou(n);
    return /* @__PURE__ */ c.jsx(
      Qa,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          q.div,
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
iu.displayName = su;
var cu = "TabsTrigger", lu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = ms(cu, n), i = ou(n), l = uu(s.baseId, r), d = fu(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      Ja,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          q.button,
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
            onMouseDown: F(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: F(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: F(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
lu.displayName = cu;
var du = "TabsContent", gb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = ms(du, n), l = uu(i.baseId, r), d = fu(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(Oe, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      q.div,
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
gb.displayName = du;
function uu(e, t) {
  return `${e}-trigger-${t}`;
}
function fu(e, t) {
  return `${e}-content-${t}`;
}
var xb = au, bb = iu, yb = lu, ps = "ToastProvider", [hs, wb, Cb] = Yn("Toast"), [mu] = Pe("Toast", [Cb]), [Sb, ko] = mu(ps), pu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${ps}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(hs.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    Sb,
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
pu.displayName = ps;
var hu = "ToastViewport", kb = ["F8"], va = "toast.viewportPause", ga = "toast.viewportResume", vu = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = kb,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = ko(hu, n), i = wb(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = se(t, m, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    u.useEffect(() => {
      const g = (y) => {
        var w;
        r.length !== 0 && r.every((k) => y[k] || y.code === k) && ((w = m.current) == null || w.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, y = m.current;
      if (x && g && y) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const E = new CustomEvent(va);
            y.dispatchEvent(E), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const E = new CustomEvent(ga);
            y.dispatchEvent(E), s.isClosePausedRef.current = !1;
          }
        }, k = (E) => {
          !g.contains(E.relatedTarget) && w();
        }, C = () => {
          g.contains(document.activeElement) || w();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", w), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        };
      }
    }, [x, s.isClosePausedRef]);
    const v = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((w) => {
          const k = w.ref.current, C = [k, ...Lb(k)];
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
          var C, E, N;
          const w = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !w) {
            const P = document.activeElement, T = b.shiftKey;
            if (b.target === g && T) {
              (C = d.current) == null || C.focus();
              return;
            }
            const U = v({ tabbingDirection: T ? "backwards" : "forwards" }), Z = U.findIndex((j) => j === P);
            zo(U.slice(Z + 1)) ? b.preventDefault() : T ? (E = d.current) == null || E.focus() : (N = f.current) == null || N.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [i, v]), /* @__PURE__ */ c.jsxs(
      Xp,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            xa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                zo(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(hs.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(q.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            xa,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                zo(g);
              }
            }
          )
        ]
      }
    );
  }
);
vu.displayName = hu;
var gu = "ToastFocusProxy", xa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ko(gu, n);
    return /* @__PURE__ */ c.jsx(
      qr,
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
xa.displayName = gu;
var er = "Toast", Nb = "toast.swipeStart", Mb = "toast.swipeMove", Eb = "toast.swipeCancel", Pb = "toast.swipeEnd", xu = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Ie({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: er
    });
    return /* @__PURE__ */ c.jsx(Oe, { present: n || i, children: /* @__PURE__ */ c.jsx(
      Db,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: We(e.onPause),
        onResume: We(e.onResume),
        onSwipeStart: F(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: F(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: F(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: F(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
xu.displayName = er;
var [Rb, Ab] = mu(er, {
  onClose() {
  }
}), Db = u.forwardRef(
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
    } = e, v = ko(er, n), [g, y] = u.useState(null), b = se(t, (j) => y(j)), w = u.useRef(null), k = u.useRef(null), C = o || v.duration, E = u.useRef(0), N = u.useRef(C), P = u.useRef(0), { onToastAdd: T, onToastRemove: z } = v, V = We(() => {
      var H;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()), s();
    }), U = u.useCallback(
      (j) => {
        !j || j === 1 / 0 || (window.clearTimeout(P.current), E.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(V, j));
      },
      [V]
    );
    u.useEffect(() => {
      const j = v.viewport;
      if (j) {
        const H = () => {
          U(N.current), d == null || d();
        }, B = () => {
          const K = (/* @__PURE__ */ new Date()).getTime() - E.current;
          N.current = N.current - K, window.clearTimeout(P.current), l == null || l();
        };
        return j.addEventListener(va, B), j.addEventListener(ga, H), () => {
          j.removeEventListener(va, B), j.removeEventListener(ga, H);
        };
      }
    }, [v.viewport, C, l, d, U]), u.useEffect(() => {
      a && !v.isClosePausedRef.current && U(C);
    }, [a, C, v.isClosePausedRef, U]), u.useEffect(() => (T(), () => z()), [T, z]);
    const Z = u.useMemo(() => g ? Mu(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      Z && /* @__PURE__ */ c.jsx(
        Ob,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Z
        }
      ),
      /* @__PURE__ */ c.jsx(Rb, { scope: n, onClose: V, children: Hn.createPortal(
        /* @__PURE__ */ c.jsx(hs.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          qp,
          {
            asChild: !0,
            onEscapeKeyDown: F(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || V(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              q.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: F(e.onKeyDown, (j) => {
                  j.key === "Escape" && (i == null || i(j.nativeEvent), j.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, V()));
                }),
                onPointerDown: F(e.onPointerDown, (j) => {
                  j.button === 0 && (w.current = { x: j.clientX, y: j.clientY });
                }),
                onPointerMove: F(e.onPointerMove, (j) => {
                  if (!w.current) return;
                  const H = j.clientX - w.current.x, B = j.clientY - w.current.y, K = !!k.current, A = ["left", "right"].includes(v.swipeDirection), I = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, re = A ? I(0, H) : 0, R = A ? 0 : I(0, B), M = j.pointerType === "touch" ? 10 : 2, _ = { x: re, y: R }, $ = { originalEvent: j, delta: _ };
                  K ? (k.current = _, xr(Mb, m, $, {
                    discrete: !1
                  })) : ai(_, v.swipeDirection, M) ? (k.current = _, xr(Nb, f, $, {
                    discrete: !1
                  }), j.target.setPointerCapture(j.pointerId)) : (Math.abs(H) > M || Math.abs(B) > M) && (w.current = null);
                }),
                onPointerUp: F(e.onPointerUp, (j) => {
                  const H = k.current, B = j.target;
                  if (B.hasPointerCapture(j.pointerId) && B.releasePointerCapture(j.pointerId), k.current = null, w.current = null, H) {
                    const K = j.currentTarget, A = { originalEvent: j, delta: H };
                    ai(H, v.swipeDirection, v.swipeThreshold) ? xr(Pb, h, A, {
                      discrete: !0
                    }) : xr(
                      Eb,
                      p,
                      A,
                      {
                        discrete: !0
                      }
                    ), K.addEventListener("click", (I) => I.preventDefault(), {
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
), Ob = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ko(er, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return Ib(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Ht, { asChild: !0, children: /* @__PURE__ */ c.jsx(qr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, _b = "ToastTitle", bu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(q.div, { ...r, ref: t });
  }
);
bu.displayName = _b;
var jb = "ToastDescription", yu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(q.div, { ...r, ref: t });
  }
);
yu.displayName = jb;
var wu = "ToastAction", Cu = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Nu, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(ku, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${wu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Cu.displayName = wu;
var Su = "ToastClose", ku = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Ab(Su, n);
    return /* @__PURE__ */ c.jsx(Nu, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onClose)
      }
    ) });
  }
);
ku.displayName = Su;
var Nu = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ c.jsx(
    q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Mu(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Tb(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Mu(r));
    }
  }), t;
}
function xr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ra(o, a) : o.dispatchEvent(a);
}
var ai = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Ib(e = () => {
}) {
  const t = We(e);
  Ee(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Tb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Lb(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var $b = pu, Wb = vu, Fb = xu, Vb = bu, Bb = yu, zb = Cu, [No] = Pe("Tooltip", [
  Rt
]), Mo = Rt(), Eu = "TooltipProvider", Hb = 700, ba = "tooltip.open", [Yb, vs] = No(Eu), Pu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Hb,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    Yb,
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
Pu.displayName = Eu;
var Vn = "Tooltip", [Gb, tr] = No(Vn), Ru = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = vs(Vn, e.__scopeTooltip), d = Mo(t), [f, m] = u.useState(null), p = Ce(), h = u.useRef(0), x = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, g = u.useRef(!1), [y, b] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (N) => {
      N ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ba))) : l.onClose(), a == null || a(N);
    },
    caller: Vn
  }), w = u.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), k = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b(!1);
  }, [b]), E = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, b(!0), h.current = 0;
    }, v);
  }, [v, b]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ c.jsx(uo, { ...d, children: /* @__PURE__ */ c.jsx(
    Gb,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? E() : k();
      }, [l.isOpenDelayedRef, E, k]),
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
Ru.displayName = Vn;
var ya = "TooltipTrigger", Au = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = tr(ya, n), a = vs(ya, n), s = Mo(n), i = u.useRef(null), l = se(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: F(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: F(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: F(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: F(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: F(e.onBlur, o.onClose),
        onClick: F(e.onClick, o.onClose)
      }
    ) });
  }
);
Au.displayName = ya;
var gs = "TooltipPortal", [Ub, Kb] = No(gs, {
  forceMount: void 0
}), Du = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = tr(gs, t);
  return /* @__PURE__ */ c.jsx(Ub, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Du.displayName = gs;
var dn = "TooltipContent", Ou = u.forwardRef(
  (e, t) => {
    const n = Kb(dn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = tr(dn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(_u, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(qb, { side: o, ...a, ref: t }) });
  }
), qb = u.forwardRef((e, t) => {
  const n = tr(dn, e.__scopeTooltip), r = vs(dn, e.__scopeTooltip), o = u.useRef(null), a = se(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), h = u.useCallback(
    (x, v) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, b = ey(y, g.getBoundingClientRect()), w = ty(y, b), k = ny(v.getBoundingClientRect()), C = oy([...w, ...k]);
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
        const g = v.target, y = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), w = !ry(y, s);
        b ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(_u, { ...e, ref: a });
}), [Xb, Zb] = No(Vn, { isInside: !1 }), Qb = /* @__PURE__ */ ap("TooltipContent"), _u = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = tr(dn, n), d = Mo(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(ba, f), () => document.removeEventListener(ba, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const m = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ c.jsx(
      zt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ c.jsxs(
          fo,
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
              /* @__PURE__ */ c.jsx(Qb, { children: r }),
              /* @__PURE__ */ c.jsx(Xb, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(up, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Ou.displayName = dn;
var ju = "TooltipArrow", Jb = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Mo(n);
    return Zb(
      ju,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(mo, { ...o, ...r, ref: t });
  }
);
Jb.displayName = ju;
function ey(e, t) {
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
function ty(e, t, n = 5) {
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
function ny(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function ry(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function oy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), ay(t);
}
function ay(e) {
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
var sy = Pu, iy = Ru, cy = Au, ly = Du, dy = Ou;
function Iu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Iu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Tu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Iu(e)) && (r && (r += " "), r += t);
  return r;
}
const si = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ii = Tu, oe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return ii(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = si(f) || si(m);
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
  return ii(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, xs = "-", uy = (e) => {
  const t = my(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(xs);
      return i[0] === "" && i.length !== 1 && i.shift(), Lu(i, t) || fy(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, Lu = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Lu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(xs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, ci = /^\[(.+)\]$/, fy = (e) => {
  if (ci.test(e)) {
    const t = ci.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, my = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    wa(n[o], r, o, t);
  return r;
}, wa = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : li(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (py(o)) {
        wa(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      wa(s, li(t, a), n, r);
    });
  });
}, li = (e, t) => {
  let n = e;
  return t.split(xs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, py = (e) => e.isThemeGetter, hy = (e) => {
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
}, Ca = "!", Sa = ":", vy = Sa.length, gy = (e) => {
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
        if (v === Sa) {
          a.push(o.slice(l, x)), l = x + vy;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = xy(f), p = m !== f, h = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Sa, a = r;
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
}, xy = (e) => e.endsWith(Ca) ? e.substring(0, e.length - 1) : e.startsWith(Ca) ? e.substring(1) : e, by = (e) => {
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
}, yy = (e) => ({
  cache: hy(e.cacheSize),
  parseClassName: gy(e),
  sortModifiers: by(e),
  ...uy(e)
}), wy = /\s+/, Cy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(wy);
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
    let g = !!v, y = r(g ? x.substring(0, v) : x);
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
    const b = a(p).join(":"), w = h ? b + Ca : b, k = w + y;
    if (s.includes(k))
      continue;
    s.push(k);
    const C = o(y, g);
    for (let E = 0; E < C.length; ++E) {
      const N = C[E];
      s.push(w + N);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Sy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $u(t)) && (r && (r += " "), r += n);
  return r;
}
const $u = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = $u(e[r])) && (n && (n += " "), n += t);
  return n;
};
function di(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = yy(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = Cy(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(Sy.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Wu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Fu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ky = /^\d+\/\d+$/, Ny = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, My = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ey = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Py = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ry = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Jt = (e) => ky.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), wt = (e) => !!e && Number.isInteger(Number(e)), Ho = (e) => e.endsWith("%") && le(e.slice(0, -1)), ht = (e) => Ny.test(e), Ay = () => !0, Dy = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  My.test(e) && !Ey.test(e)
), Vu = () => !1, Oy = (e) => Py.test(e), _y = (e) => Ry.test(e), jy = (e) => !J(e) && !ee(e), Iy = (e) => gn(e, Hu, Vu), J = (e) => Wu.test(e), It = (e) => gn(e, Yu, Dy), Yo = (e) => gn(e, Fy, le), ui = (e) => gn(e, Bu, Vu), Ty = (e) => gn(e, zu, _y), br = (e) => gn(e, Gu, Oy), ee = (e) => Fu.test(e), An = (e) => xn(e, Yu), Ly = (e) => xn(e, Vy), fi = (e) => xn(e, Bu), $y = (e) => xn(e, Hu), Wy = (e) => xn(e, zu), yr = (e) => xn(e, Gu, !0), gn = (e, t, n) => {
  const r = Wu.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, xn = (e, t, n = !1) => {
  const r = Fu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Bu = (e) => e === "position" || e === "percentage", zu = (e) => e === "image" || e === "url", Hu = (e) => e === "length" || e === "size" || e === "bg-size", Yu = (e) => e === "length", Fy = (e) => e === "number", Vy = (e) => e === "family-name", Gu = (e) => e === "shadow", mi = () => {
  const e = Se("color"), t = Se("font"), n = Se("text"), r = Se("font-weight"), o = Se("tracking"), a = Se("leading"), s = Se("breakpoint"), i = Se("container"), l = Se("spacing"), d = Se("radius"), f = Se("shadow"), m = Se("inset-shadow"), p = Se("text-shadow"), h = Se("drop-shadow"), x = Se("blur"), v = Se("perspective"), g = Se("aspect"), y = Se("ease"), b = Se("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), ee, J], E = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], P = () => [ee, J, l], T = () => [Jt, "full", "auto", ...P()], z = () => [wt, "none", "subgrid", ee, J], V = () => ["auto", {
    span: ["full", wt, ee, J]
  }, wt, ee, J], U = () => [wt, "auto", ee, J], Z = () => ["auto", "min", "max", "fr", ee, J], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...P()], K = () => [Jt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], A = () => [e, ee, J], I = () => [...k(), fi, ui, {
    position: [ee, J]
  }], re = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", $y, Iy, {
    size: [ee, J]
  }], M = () => [Ho, An, It], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], $ = () => ["", le, An, It], Y = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [le, Ho, fi, ui], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    ee,
    J
  ], Q = () => ["none", le, ee, J], ne = () => ["none", le, ee, J], de = () => [le, ee, J], ue = () => [Jt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ht],
      breakpoint: [ht],
      color: [Ay],
      container: [ht],
      "drop-shadow": [ht],
      ease: ["in", "out", "in-out"],
      font: [jy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ht],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ht],
      shadow: [ht],
      spacing: ["px", le],
      text: [ht],
      "text-shadow": [ht],
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
        aspect: ["auto", "square", Jt, J, ee, g]
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
        z: [wt, "auto", ee, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Jt, "full", "auto", i, ...P()]
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
        flex: [le, Jt, "auto", "initial", "none", J]
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
        order: [wt, "first", "last", "none", ee, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": Z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Z()
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
        justify: [...j(), "normal"]
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
        content: ["normal", ...j()]
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
        "place-content": j()
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
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
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
            screen: [s]
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
        text: ["base", n, An, It]
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
        font: [r, ee, Yo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ho, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ly, J, t]
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
        "line-clamp": [le, "none", ee, Yo]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [le, "from-font", "auto", ee, It]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
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
        bg: I()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: re()
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
          }, wt, ee, J],
          radial: ["", ee, J],
          conic: [wt, ee, J]
        }, Wy, Ty]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
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
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
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
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
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
        "divide-y": $()
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
        border: A()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
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
        "outline-offset": [le, ee, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, An, It]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          yr,
          br
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, yr, br]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [le, It]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, yr, br]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
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
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: I()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: re()
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
        blur: X()
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
          h,
          yr,
          br
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
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
        "backdrop-blur": X()
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
        perspective: [v, ee, J]
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
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        accent: A()
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
        caret: A()
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
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, An, It, Yo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, By = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (jn(e, "cacheSize", t), jn(e, "prefix", n), jn(e, "experimentalParseClassName", r), wr(e.theme, a.theme), wr(e.classGroups, a.classGroups), wr(e.conflictingClassGroups, a.conflictingClassGroups), wr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), jn(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Cr(e.theme, o.theme), Cr(e.classGroups, o.classGroups), Cr(e.conflictingClassGroups, o.conflictingClassGroups), Cr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Uu(e, o, "orderSensitiveModifiers"), e), jn = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, wr = (e, t) => {
  if (t)
    for (const n in t)
      jn(e, n, t[n]);
}, Cr = (e, t) => {
  if (t)
    for (const n in t)
      Uu(e, t, n);
}, Uu = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, zy = (e, ...t) => typeof e == "function" ? di(mi, e, ...t) : di(() => By(mi(), e), ...t), Hy = zy({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), D = (...e) => Hy(Tu(e)), $e = (e, t = {}) => {
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
}, Yy = oe(
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
), Gy = oe(
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
), Uy = S.forwardRef(
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
      className: D(Gy({ intent: r }), a),
      ...s
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(Xx, { ...l, children: [
      $e(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Uy.displayName = "DropdownItem";
const Ky = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Zx,
  {
    ref: n,
    className: D(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
Ky.displayName = "DropdownSeparator";
const qy = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  qx,
  {
    ref: r,
    className: D(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
qy.displayName = "DropdownLabel";
const Ku = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Ux, { children: /* @__PURE__ */ c.jsx(
  Kx,
  {
    ref: o,
    className: D(Yy({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Ku.displayName = "DropdownContent";
const qu = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(Yx, { ...a, children: e });
};
qu.displayName = "Dropdown";
const Xu = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  Gx,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Xu.displayName = "DropdownTrigger";
const zk = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(qu, { children: [
  /* @__PURE__ */ c.jsx(
    Xu,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(Xm, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ c.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ c.jsx(
          Ur,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ c.jsxs(Ku, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), Zu = S.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Ds,
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
    Ds,
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
Zu.displayName = "Accordion";
const Qu = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    $p,
    {
      ref: n,
      className: D(
        `bg-surface-primary rounded-sm mt-2 first:mt-0 overflow-hidden
        data-[disabled]:opacity-30`,
        e
      ),
      ...t
    }
  )
);
Qu.displayName = "AccordionItem";
const Ju = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(Wp, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Fp,
  {
    ref: r,
    className: D(
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
        Ur,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
Ju.displayName = "AccordionTrigger";
const ef = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Vp,
  {
    ref: r,
    className: D(
      "text-body-secondary px-md pt-xs pb-md overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
ef.displayName = "AccordionContent";
const Hk = Object.assign(Zu, {
  Item: Qu,
  Trigger: Ju,
  Content: ef
}), pi = oe(
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
), Xy = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Jm : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Kr,
      {
        className: D(pi({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: D(pi({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && $e(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
Xy.displayName = "Badge";
const Zy = oe("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Go = oe(
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
), Qy = oe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Jy = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Wi,
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
        className: D(Zy({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: D(Go({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: D(
                  Go({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: D(Go({ isActive: !0 })),
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
                    className: D(Qy({ size: t }))
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
Jy.displayName = "Breadcrumbs";
const ew = oe(
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
), tf = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    p0,
    {
      ref: s,
      className: D(ew({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        h0,
        {
          className: D(
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
tf.displayName = "ProgressIndicator.Linear";
const tw = oe("flex items-center", {
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
}), nw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Hr = {
  sm: 12,
  md: 10
}, hi = {
  sm: (50 - Hr.sm / 2).toString(),
  md: (50 - Hr.md / 2).toString()
}, nf = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: D(tw({ size: t, layout: e }), r),
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
            className: D(nw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: hi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Hr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: hi[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: Hr[t],
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
nf.displayName = "ProgressIndicator.Circular";
const bs = {
  Linear: tf,
  Circular: nf
}, Uo = oe(
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
), Sr = oe("", {
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
}), De = S.forwardRef(
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
    const m = a ? Kr : "button", p = !!((r || o) && !l && !(r && o)), h = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: D(
          Uo({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            $e(r, {
              className: D(
                Sr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            $e(o, {
              className: D(
                Sr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(bs.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: D(
          Uo({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          $e(r, {
            className: D(
              Sr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          $e(o, {
            className: D(
              Sr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: D(
          Uo({ intent: e, size: t, textOnly: h, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
De.displayName = "Button";
function rw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Ko = {}, In = {};
function Lt(e, t) {
  try {
    const r = (Ko[e] || (Ko[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in In ? In[r] : vi(r, r.split(":"));
  } catch {
    if (e in In) return In[e];
    const n = e == null ? void 0 : e.match(ow);
    return n ? vi(e, n.slice(1)) : NaN;
  }
}
const ow = /([+-]\d\d):?(\d\d)?/;
function vi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return In[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class lt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Lt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), rf(this), ka(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new lt(...n, t) : new lt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new lt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Lt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), ka(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new lt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const gi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!gi.test(e)) return;
  const t = e.replace(gi, "$1UTC");
  lt.prototype[t] && (e.startsWith("get") ? lt.prototype[e] = function() {
    return this.internal[t]();
  } : (lt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), aw(this), +this;
  }, lt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), ka(this), +this;
  }));
});
function ka(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Lt(e.timeZone, e) * 60));
}
function aw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), rf(e);
}
function rf(e) {
  const t = Lt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(Lt(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = Lt(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, g = h !== n, y = v - l;
  if (g && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const b = Lt(e.timeZone, e), w = b > 0 ? Math.floor(b) : Math.ceil(b), k = h - w;
    k && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + k), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + k));
  }
}
class _e extends lt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new _e(...n, t) : new _e(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${rw(this.timeZone, this)})`;
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
    return new _e(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new _e(+new Date(t), this.timeZone);
  }
  //#endregion
}
const of = 6048e5, sw = 864e5, xi = Symbol.for("constructDateFrom");
function ke(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && xi in e ? e[xi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ve(e, t) {
  return ke(t || e, e);
}
function af(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(t) ? ke(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function sf(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return ke(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = ke(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let iw = {};
function nr() {
  return iw;
}
function un(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Bn(e, t) {
  return un(e, { ...t, weekStartsOn: 1 });
}
function cf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ke(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Bn(o), s = ke(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Bn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function bi(e) {
  const t = ve(e), n = new Date(
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
function bn(e, ...t) {
  const n = ke.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function zn(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function lf(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = zn(r), s = zn(o), i = +a - bi(a), l = +s - bi(s);
  return Math.round((i - l) / sw);
}
function cw(e, t) {
  const n = cf(e, t), r = ke(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Bn(r);
}
function lw(e, t, n) {
  return af(e, t * 7, n);
}
function dw(e, t, n) {
  return sf(e, t * 12, n);
}
function uw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ke.bind(null, o));
    const a = ve(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), ke(r, n || NaN);
}
function fw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ke.bind(null, o));
    const a = ve(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), ke(r, n || NaN);
}
function mw(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +zn(r) == +zn(o);
}
function df(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function pw(e) {
  return !(!df(e) && typeof e != "number" || isNaN(+ve(e)));
}
function hw(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function vw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function gw(e, t) {
  const [n, r] = bn(e, t.start, t.end);
  return { start: n, end: r };
}
function xw(e, t) {
  const { start: n, end: r } = gw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(ke(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function bw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function yw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function uf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ff(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function ww(e, t) {
  return ff(e, { ...t, weekStartsOn: 1 });
}
const Cw = {
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
}, Sw = (e, t, n) => {
  let r;
  const o = Cw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const kw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Nw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Mw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ew = {
  date: an({
    formats: kw,
    defaultWidth: "full"
  }),
  time: an({
    formats: Nw,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Mw,
    defaultWidth: "full"
  })
}, Pw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Rw = (e, t, n, r) => Pw[e];
function st(e) {
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
const Aw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ow = {
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
}, _w = {
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
}, jw = {
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
}, Iw = {
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
}, Tw = (e, t) => {
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
}, Lw = {
  ordinalNumber: Tw,
  era: st({
    values: Aw,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: Dw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: Ow,
    defaultWidth: "wide"
  }),
  day: st({
    values: _w,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: jw,
    defaultWidth: "wide",
    formattingValues: Iw,
    defaultFormattingWidth: "wide"
  })
};
function it(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? Ww(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      $w(i, (m) => m.test(s))
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
function $w(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ww(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function mf(e) {
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
const Fw = /^(\d+)(th|st|nd|rd)?/i, Vw = /\d+/i, Bw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, zw = {
  any: [/^b/i, /^(a|c)/i]
}, Hw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Uw = {
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
}, Kw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Xw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Zw = {
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
}, Qw = {
  ordinalNumber: mf({
    matchPattern: Fw,
    parsePattern: Vw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: it({
    matchPatterns: Bw,
    defaultMatchWidth: "wide",
    parsePatterns: zw,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: Hw,
    defaultMatchWidth: "wide",
    parsePatterns: Yw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: Gw,
    defaultMatchWidth: "wide",
    parsePatterns: Uw,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: Kw,
    defaultMatchWidth: "wide",
    parsePatterns: qw,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: Xw,
    defaultMatchWidth: "any",
    parsePatterns: Zw,
    defaultParseWidth: "any"
  })
}, Eo = {
  code: "en-US",
  formatDistance: Sw,
  formatLong: Ew,
  formatRelative: Rw,
  localize: Lw,
  match: Qw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Jw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return lf(n, uf(n)) + 1;
}
function pf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +Bn(n) - +cw(n);
  return Math.round(r / of) + 1;
}
function hf(e, t) {
  var f, m, p, h;
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = nr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = ke((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = un(s, t), l = ke((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = un(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function e1(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = hf(e, t), a = ke((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), un(a, t);
}
function vf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +un(n, t) - +e1(n, t);
  return Math.round(r / of) + 1;
}
function he(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ct = {
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
}, en = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yi = {
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
    return Ct.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = hf(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = cf(e);
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
        return Ct.M(e, t);
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
    const o = vf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = pf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Jw(e);
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
    switch (r === 12 ? o = en.noon : r === 0 ? o = en.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = en.evening : r >= 12 ? o = en.afternoon : r >= 4 ? o = en.morning : o = en.night, t) {
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
    return Ct.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ct.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ct.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ct.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ct.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ci(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Tt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Tt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ci(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Tt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Tt(r, ":");
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
        return "GMT" + wi(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Tt(r, ":");
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
        return "GMT" + wi(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Tt(r, ":");
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
function wi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function Ci(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : Tt(e, t);
}
function Tt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const Si = (e, t) => {
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
}, gf = (e, t) => {
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
}, t1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Si(e, t);
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
  return a.replace("{{date}}", Si(r, t)).replace("{{time}}", gf(o, t));
}, n1 = {
  p: gf,
  P: t1
}, r1 = /^D+$/, o1 = /^Y+$/, a1 = ["D", "DD", "YY", "YYYY"];
function s1(e) {
  return r1.test(e);
}
function i1(e) {
  return o1.test(e);
}
function c1(e, t, n) {
  const r = l1(e, t, n);
  if (console.warn(r), a1.includes(e)) throw new RangeError(r);
}
function l1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const d1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, u1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, f1 = /^'([^]*?)'?$/, m1 = /''/g, p1 = /[a-zA-Z]/;
function h1(e, t, n) {
  var f, m, p, h, x, v, g, y;
  const r = nr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Eo, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, i = ve(e, n == null ? void 0 : n.in);
  if (!pw(i))
    throw new RangeError("Invalid time value");
  let l = t.match(u1).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const k = n1[w];
      return k(b, o.formatLong);
    }
    return b;
  }).join("").match(d1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: v1(b) };
    if (yi[w])
      return { isToken: !0, value: b };
    if (w.match(p1))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && i1(w) || !(n != null && n.useAdditionalDayOfYearTokens) && s1(w)) && c1(w, t, String(e));
    const k = yi[w[0]];
    return k(i, w, o.localize, d);
  }).join("");
}
function v1(e) {
  const t = e.match(f1);
  return t ? t[1].replace(m1, "'") : e;
}
function g1(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = ke(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function x1(e, t) {
  return ve(e, t == null ? void 0 : t.in).getMonth();
}
function b1(e, t) {
  return ve(e, t == null ? void 0 : t.in).getFullYear();
}
function y1(e, t) {
  return +ve(e) > +ve(t);
}
function w1(e, t) {
  return +ve(e) < +ve(t);
}
function C1(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function S1(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function k1(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = ke(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = g1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function N1(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? ke(e, NaN) : (r.setFullYear(t), r);
}
const ki = 5, M1 = 4;
function E1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, ki * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? ki : M1;
}
function xf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function P1(e, t) {
  const n = xf(e, t), r = E1(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Ye {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? _e.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new _e(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : af(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : sf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : lw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : dw(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : lf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : hw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : xw(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : P1(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : ww(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : vw(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : ff(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : yw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : h1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : pf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : x1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : b1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : vf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : y1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : w1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : df(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : mw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : C1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : S1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : uw(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : fw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : k1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : N1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : xf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : zn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Bn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : bw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : un(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : uf(r);
    }, this.options = { locale: Eo, ...t }, this.overrides = n;
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
    return t && Ye.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Ye.yearFirstLocales.has(a))
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
Ye.yearFirstLocales = /* @__PURE__ */ new Set([
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
const mt = new Ye();
class bf {
  constructor(t, n, r = mt) {
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
class R1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class A1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function D1(e) {
  return S.createElement("button", { ...e });
}
function O1(e) {
  return S.createElement("span", { ...e });
}
function _1(e) {
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
function j1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function I1(e) {
  const { day: t, modifiers: n, ...r } = e, o = S.useRef(null);
  return S.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), S.createElement("button", { ref: o, ...r });
}
var te;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(te || (te = {}));
var be;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(be || (be = {}));
var Ze;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ze || (Ze = {}));
var Be;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Be || (Be = {}));
function T1(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[te.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[te.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => S.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    S.createElement(
      "span",
      { className: o[te.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[te.Chevron] })
    )
  );
}
function L1(e) {
  return S.createElement("div", { ...e });
}
function $1(e) {
  return S.createElement("div", { ...e });
}
function W1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function F1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function V1(e) {
  return S.createElement("table", { ...e });
}
function B1(e) {
  return S.createElement("div", { ...e });
}
const yf = Gr(void 0);
function rr() {
  const e = _r(yf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function z1(e) {
  const { components: t } = rr();
  return S.createElement(t.Dropdown, { ...e });
}
function H1(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = rr(), f = Me((p) => {
    o && (n == null || n(p));
  }, [o, n]), m = Me((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return S.createElement(
    "nav",
    { ...a },
    S.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[te.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[te.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[te.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[te.Chevron] })
    )
  );
}
function Y1(e) {
  const { components: t } = rr();
  return S.createElement(t.Button, { ...e });
}
function G1(e) {
  return S.createElement("option", { ...e });
}
function U1(e) {
  const { components: t } = rr();
  return S.createElement(t.Button, { ...e });
}
function K1(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function q1(e) {
  return S.createElement("select", { ...e });
}
function X1(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function Z1(e) {
  return S.createElement("th", { ...e });
}
function Q1(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function J1(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function e2(e) {
  return S.createElement("th", { ...e });
}
function t2(e) {
  return S.createElement("tbody", { ...e });
}
function n2(e) {
  const { components: t } = rr();
  return S.createElement(t.Dropdown, { ...e });
}
const r2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: D1,
  CaptionLabel: O1,
  Chevron: _1,
  Day: j1,
  DayButton: I1,
  Dropdown: T1,
  DropdownNav: L1,
  Footer: $1,
  Month: W1,
  MonthCaption: F1,
  MonthGrid: V1,
  Months: B1,
  MonthsDropdown: z1,
  Nav: H1,
  NextMonthButton: Y1,
  Option: G1,
  PreviousMonthButton: U1,
  Root: K1,
  Select: q1,
  Week: X1,
  WeekNumber: J1,
  WeekNumberHeader: e2,
  Weekday: Z1,
  Weekdays: Q1,
  Weeks: t2,
  YearsDropdown: n2
}, Symbol.toStringTag, { value: "Module" }));
function vt(e, t, n = !1, r = mt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function wf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ys(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Cf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Sf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function kf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Nf(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function gt(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Nf(i, n))
      return i.includes(e);
    if (ys(i))
      return vt(i, e, !1, n);
    if (kf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (wf(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return Cf(i) ? a(e, i.after) > 0 : Sf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function o2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: h, isBefore: x, endOfMonth: v, isAfter: g } = o, y = n && h(n), b = r && v(r), w = {
    [be.focused]: [],
    [be.outside]: [],
    [be.disabled]: [],
    [be.hidden]: [],
    [be.today]: []
  }, k = {};
  for (const C of e) {
    const { date: E, displayMonth: N } = C, P = !!(N && !p(E, N)), T = !!(y && x(E, y)), z = !!(b && g(E, b)), V = !!(a && gt(E, a, o)), U = !!(s && gt(E, s, o)) || T || z || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, Z = m(E, f ?? o.today());
    P && w.outside.push(C), V && w.disabled.push(C), U && w.hidden.push(C), Z && w.today.push(C), i && Object.keys(i).forEach((j) => {
      const H = i == null ? void 0 : i[j];
      H && gt(E, H, o) && (k[j] ? k[j].push(C) : k[j] = [C]);
    });
  }
  return (C) => {
    const E = {
      [be.focused]: !1,
      [be.disabled]: !1,
      [be.hidden]: !1,
      [be.outside]: !1,
      [be.today]: !1
    }, N = {};
    for (const P in w) {
      const T = w[P];
      E[P] = T.some((z) => z === C);
    }
    for (const P in k)
      N[P] = k[P].some((T) => T === C);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ...N
    };
  };
}
function a2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[be[a]] ? o.push(t[be[a]]) : t[Ze[a]] && o.push(t[Ze[a]]), o), [t[te.Day]]);
}
function s2(e) {
  return {
    ...r2,
    ...e
  };
}
function i2(e) {
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
function Mf() {
  const e = {};
  for (const t in te)
    e[te[t]] = `rdp-${te[t]}`;
  for (const t in be)
    e[be[t]] = `rdp-${be[t]}`;
  for (const t in Ze)
    e[Ze[t]] = `rdp-${Ze[t]}`;
  for (const t in Be)
    e[Be[t]] = `rdp-${Be[t]}`;
  return e;
}
function Ef(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const c2 = Ef;
function l2(e, t, n) {
  return (n ?? new Ye(t)).format(e, "d");
}
function d2(e, t = mt) {
  return t.format(e, "LLLL");
}
function u2(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccccc");
}
function f2(e, t = mt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function m2() {
  return "";
}
function Pf(e, t = mt) {
  return t.format(e, "yyyy");
}
const p2 = Pf, h2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ef,
  formatDay: l2,
  formatMonthCaption: c2,
  formatMonthDropdown: d2,
  formatWeekNumber: f2,
  formatWeekNumberHeader: m2,
  formatWeekdayName: u2,
  formatYearCaption: p2,
  formatYearDropdown: Pf
}, Symbol.toStringTag, { value: "Module" }));
function v2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...h2,
    ...e
  };
}
function g2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), x = d(p), v = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: h, disabled: v };
  });
}
function x2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[te.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function b2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function y2(e, t, n, r, o = !1) {
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
function Rf(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const w2 = Rf;
function Af(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const C2 = Af;
function S2(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function k2(e) {
  return "Choose the Month";
}
function N2() {
  return "";
}
function M2(e) {
  return "Go to the Next Month";
}
function E2(e) {
  return "Go to the Previous Month";
}
function P2(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccc");
}
function R2(e, t) {
  return `Week ${e}`;
}
function A2(e) {
  return "Week Number";
}
function D2(e) {
  return "Choose the Year";
}
const O2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: C2,
  labelDay: w2,
  labelDayButton: Rf,
  labelGrid: Af,
  labelGridcell: S2,
  labelMonthDropdown: k2,
  labelNav: N2,
  labelNext: M2,
  labelPrevious: E2,
  labelWeekNumber: R2,
  labelWeekNumberHeader: A2,
  labelWeekday: P2,
  labelYearDropdown: D2
}, Symbol.toStringTag, { value: "Module" })), or = (e) => e instanceof HTMLElement ? e : null, qo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], _2 = (e) => or(e.querySelector("[data-animated-month]")), Xo = (e) => or(e.querySelector("[data-animated-caption]")), Zo = (e) => or(e.querySelector("[data-animated-weeks]")), j2 = (e) => or(e.querySelector("[data-animated-nav]")), I2 = (e) => or(e.querySelector("[data-animated-weekdays]"));
function T2(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Tn(null), i = Tn(r), l = Tn(!1);
  Ti(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[Be.caption_after_enter] : n[Be.caption_before_enter], h = m ? n[Be.weeks_after_enter] : n[Be.weeks_before_enter], x = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (qo(v).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const k = _2(w);
      k && w.contains(k) && w.removeChild(k);
      const C = Xo(w);
      C && C.classList.remove(p);
      const E = Zo(w);
      E && E.classList.remove(h);
    }), s.current = v) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? qo(x) : [], y = qo(e.current);
    if (y != null && y.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = j2(e.current);
      b && (b.style.zIndex = "1"), y.forEach((w, k) => {
        const C = g[k];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const E = Xo(w);
        E && E.classList.add(p);
        const N = Zo(w);
        N && N.classList.add(h);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), E && E.classList.remove(p), N && N.classList.remove(h), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const T = I2(C);
        T && (T.style.opacity = "0");
        const z = Xo(C);
        z && (z.classList.add(m ? n[Be.caption_before_exit] : n[Be.caption_after_exit]), z.addEventListener("animationend", P));
        const V = Zo(C);
        V && V.classList.add(m ? n[Be.weeks_before_exit] : n[Be.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function L2(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: x, endOfWeek: v, isAfter: g, startOfBroadcastWeek: y, startOfISOWeek: b, startOfWeek: w } = r, k = l ? y(o, r) : s ? b(o) : w(o), C = l ? p(a) : s ? h(x(a)) : v(x(a)), E = f(C, k), N = m(a, o) + 1, P = [];
  for (let V = 0; V <= E; V++) {
    const U = d(k, V);
    if (t && g(U, t))
      break;
    P.push(U);
  }
  const z = (l ? 35 : 42) * N;
  if (i && P.length < z) {
    const V = z - P.length;
    for (let U = 0; U < V; U++) {
      const Z = d(P[P.length - 1], 1);
      P.push(Z);
    }
  }
  return P;
}
function $2(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function W2(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Ni(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function F2(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: h } = r, x = e.reduce((v, g) => {
    const y = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : h(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), w = t.filter((N) => N >= y && N <= b), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < k) {
      const N = t.filter((P) => {
        const T = k - w.length;
        return P > b && P <= o(b, T);
      });
      w.push(...N);
    }
    const C = w.reduce((N, P) => {
      const T = n.ISOWeek ? d(P) : f(P), z = N.find((U) => U.weekNumber === T), V = new bf(P, g, r);
      return z ? z.days.push(V) : N.push(new A1(T, [V])), N;
    }, []), E = new R1(g, C);
    return v.push(E), v;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function V2(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: h, fromMonth: x, toMonth: v } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = f(h, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : h ? r = f(h, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function B2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function z2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function H2(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Po(e, t) {
  const [n, r] = sn(e);
  return [t === void 0 ? n : t, r];
}
function Y2(e, t) {
  const [n, r] = V2(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Ni(e, n, r, t), [i, l] = Po(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Li(() => {
    const E = Ni(e, n, r, t);
    l(E);
  }, [e.timeZone]);
  const d = W2(i, r, e, t), f = L2(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = F2(d, f, e, t), p = H2(m), h = $2(m), x = z2(i, n, e, t), v = B2(i, r, e, t), { disableNavigation: g, onMonthChange: y } = e, b = (E) => p.some((N) => N.days.some((P) => P.isEqualTo(E))), w = (E) => {
    if (g)
      return;
    let N = o(E);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), l(N), y == null || y(N);
  };
  return {
    months: m,
    weeks: p,
    days: h,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: v,
    goToMonth: w,
    goToDay: (E) => {
      b(E) || w(E.date);
    }
  };
}
var ot;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ot || (ot = {}));
function Mi(e) {
  return !e[be.disabled] && !e[be.hidden] && !e[be.outside];
}
function G2(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Mi(i) && (i[be.focused] && a < ot.FocusedModifier ? (o = s, a = ot.FocusedModifier) : r != null && r.isEqualTo(s) && a < ot.LastFocused ? (o = s, a = ot.LastFocused) : n(s.date) && a < ot.Selected ? (o = s, a = ot.Selected) : i[be.today] && a < ot.Today && (o = s, a = ot.Today));
  }
  return o || (o = e.find((s) => Mi(t(s)))), o;
}
function U2(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: h, endOfISOWeek: x, endOfWeek: v, max: g, min: y, startOfBroadcastWeek: b, startOfISOWeek: w, startOfWeek: k } = s;
  let E = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (N) => l ? b(N, s) : i ? w(N) : k(N),
    endOfWeek: (N) => l ? h(N) : i ? x(N) : v(N)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = g([r, E]) : t === "after" && o && (E = y([o, E])), E;
}
function Df(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = U2(e, t, n.date, r, o, a, s), d = !!(a.disabled && gt(l, a.disabled, s)), f = !!(a.hidden && gt(l, a.hidden, s)), m = l, p = new bf(l, m, s);
  return !d && !f ? p : Df(e, t, p, r, o, a, s, i + 1);
}
function K2(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = sn(), l = G2(t.days, n, r || (() => !1), s), [d, f] = sn(a ? l : void 0);
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
      const y = Df(v, g, d, t.navStart, t.navEnd, e, o);
      y && (t.goToDay(y), f(y));
    }
  };
}
function q2(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Po(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (h) => (i == null ? void 0 : i.some((x) => l(x, h))) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (h, x, v) => {
      let g = [...i ?? []];
      if (d(h)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        g = i == null ? void 0 : i.filter((y) => !l(y, h));
      } else
        (i == null ? void 0 : i.length) === m ? g = [h] : g = [...g, h];
      return o || s(g), o == null || o(g, h, x, v), g;
    },
    isSelected: d
  };
}
function X2(e, t, n = 0, r = 0, o = !1, a = mt) {
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
function Z2(e, t, n = mt) {
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
function Ei(e, t, n = mt) {
  return vt(e, t.from, !1, n) || vt(e, t.to, !1, n) || vt(t, e.from, !1, n) || vt(t, e.to, !1, n);
}
function Q2(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? vt(e, i, !1, n) : Nf(i, n) ? i.some((l) => vt(e, l, !1, n)) : ys(i) ? i.from && i.to ? Ei(e, { from: i.from, to: i.to }, n) : !1 : kf(i) ? Z2(e, i.dayOfWeek, n) : wf(i) ? n.isAfter(i.before, i.after) ? Ei(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : gt(e.from, i, n) || gt(e.to, i, n) : Cf(i) || Sf(i) ? gt(e.from, i, n) || gt(e.to, i, n) : !1))
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
function J2(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = Po(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, h, x) => {
      const { min: v, max: g } = e, y = p ? X2(p, d, v, g, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && Q2({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), s || l(y), s == null || s(y, p, h, x), y;
    },
    isSelected: (p) => d && vt(d, p, !1, t)
  };
}
function eC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Po(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, h) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, h), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function tC(e, t) {
  const n = eC(e, t), r = q2(e, t), o = J2(e, t);
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
function nC(e) {
  var Nn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new _e(t.today, t.timeZone)), t.month && (t.month = new _e(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new _e(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new _e(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new _e(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new _e(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Nn = t.selected) == null ? void 0 : Nn.map((ie) => new _e(ie, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new _e(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new _e(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Oo(() => {
    const ie = { ...Eo, ...t.locale };
    return {
      dateLib: new Ye({
        locale: ie,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: s2(t.components),
      formatters: v2(t.formatters),
      labels: { ...O2, ...t.labels },
      locale: ie,
      classNames: { ...Mf(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: h, onDayFocus: x, onDayKeyDown: v, onDayMouseEnter: g, onDayMouseLeave: y, onNextClick: b, onPrevClick: w, showWeekNumber: k, styles: C } = t, { formatCaption: E, formatDay: N, formatMonthDropdown: P, formatWeekNumber: T, formatWeekNumberHeader: z, formatWeekdayName: V, formatYearDropdown: U } = r, Z = Y2(t, a), { days: j, months: H, navStart: B, navEnd: K, previousMonth: A, nextMonth: I, goToMonth: re } = Z, R = o2(j, t, B, K, a), { isSelected: M, select: _, selected: $ } = tC(t, a) ?? {}, { blur: Y, focused: W, isFocusTarget: O, moveFocus: X, setFocused: Q } = K2(t, Z, R, M ?? (() => !1), a), { labelDayButton: ne, labelGridcell: de, labelGrid: ue, labelMonthDropdown: Ne, labelNav: je, labelPrevious: nt, labelNext: qe, labelWeekday: rt, labelWeekNumber: Ut, labelWeekNumberHeader: Le, labelYearDropdown: _t } = o, ir = Oo(() => b2(a, t.ISOWeek), [a, t.ISOWeek]), yn = d !== void 0 || h !== void 0, Kt = Me(() => {
    A && (re(A), w == null || w(A));
  }, [A, re, w]), qt = Me(() => {
    I && (re(I), b == null || b(I));
  }, [re, I, b]), wn = Me((ie, xe) => (ae) => {
    ae.preventDefault(), ae.stopPropagation(), Q(ie), _ == null || _(ie.date, xe, ae), h == null || h(ie.date, xe, ae);
  }, [_, h, Q]), Cn = Me((ie, xe) => (ae) => {
    Q(ie), x == null || x(ie.date, xe, ae);
  }, [x, Q]), cr = Me((ie, xe) => (ae) => {
    Y(), p == null || p(ie.date, xe, ae);
  }, [Y, p]), Ge = Me((ie, xe) => (ae) => {
    const ge = {
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
    if (ge[ae.key]) {
      ae.preventDefault(), ae.stopPropagation();
      const [Re, pe] = ge[ae.key];
      X(Re, pe);
    }
    v == null || v(ie.date, xe, ae);
  }, [X, v, t.dir]), Ue = Me((ie, xe) => (ae) => {
    g == null || g(ie.date, xe, ae);
  }, [g]), Sn = Me((ie, xe) => (ae) => {
    y == null || y(ie.date, xe, ae);
  }, [y]), Ss = Me((ie) => (xe) => {
    const ae = Number(xe.target.value), ge = a.setMonth(a.startOfMonth(ie), ae);
    re(ge);
  }, [a, re]), pt = Me((ie) => (xe) => {
    const ae = Number(xe.target.value), ge = a.setYear(a.startOfMonth(ie), ae);
    re(ge);
  }, [a, re]), { className: Ve, style: jt } = Oo(() => ({
    className: [i[te.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[te.Root], ...t.style }
  }), [i, t.className, t.style, C]), Ao = i2(t), lr = Tn(null);
  T2(lr, !!t.animate, {
    classNames: i,
    months: H,
    focused: W,
    dateLib: a
  });
  const kn = {
    dayPickerProps: t,
    selected: $,
    select: _,
    isSelected: M,
    months: H,
    nextMonth: I,
    previousMonth: A,
    goToMonth: re,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return S.createElement(
    yf.Provider,
    { value: kn },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? lr : void 0, className: Ve, style: jt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ao },
      S.createElement(
        n.Months,
        { className: i[te.Months], style: C == null ? void 0 : C[te.Months] },
        !t.hideNavigation && !f && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[te.Nav], style: C == null ? void 0 : C[te.Nav], "aria-label": je(), onPreviousClick: Kt, onNextClick: qt, previousMonth: A, nextMonth: I }),
        H.map((ie, xe) => S.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[te.Month],
            style: C == null ? void 0 : C[te.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: xe,
            displayIndex: xe,
            calendarMonth: ie
          },
          f === "around" && !t.hideNavigation && xe === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[te.PreviousMonthButton], tabIndex: A ? void 0 : -1, "aria-disabled": A ? void 0 : !0, "aria-label": nt(A), onClick: Kt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: A ? void 0 : !0, className: i[te.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[te.MonthCaption], style: C == null ? void 0 : C[te.MonthCaption], calendarMonth: ie, displayIndex: xe }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[te.Dropdowns], style: C == null ? void 0 : C[te.Dropdowns] },
            (() => {
              const ae = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[te.MonthsDropdown], "aria-label": Ne(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Ss(ie.date), options: g2(ie.date, B, K, r, a), style: C == null ? void 0 : C[te.Dropdown], value: a.getMonth(ie.date) }) : S.createElement("span", { key: "month" }, P(ie.date, a)), ge = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[te.YearsDropdown], "aria-label": _t(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: pt(ie.date), options: y2(B, K, r, a, !!t.reverseYears), style: C == null ? void 0 : C[te.Dropdown], value: a.getYear(ie.date) }) : S.createElement("span", { key: "year" }, U(ie.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ge, ae] : [ae, ge];
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
            } }, E(ie.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            S.createElement(n.CaptionLabel, { className: i[te.CaptionLabel], role: "status", "aria-live": "polite" }, E(ie.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && xe === m - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[te.NextMonthButton], tabIndex: I ? void 0 : -1, "aria-disabled": I ? void 0 : !0, "aria-label": qe(I), onClick: qt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: I ? void 0 : !0, className: i[te.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          xe === m - 1 && f === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[te.Nav], style: C == null ? void 0 : C[te.Nav], "aria-label": je(), onPreviousClick: Kt, onNextClick: qt, previousMonth: A, nextMonth: I }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(ie.date, a.options, a) || void 0, className: i[te.MonthGrid], style: C == null ? void 0 : C[te.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[te.Weekdays], style: C == null ? void 0 : C[te.Weekdays] },
              k && S.createElement(n.WeekNumberHeader, { "aria-label": Le(a.options), className: i[te.WeekNumberHeader], style: C == null ? void 0 : C[te.WeekNumberHeader], scope: "col" }, z()),
              ir.map((ae) => S.createElement(n.Weekday, { "aria-label": rt(ae, a.options, a), className: i[te.Weekday], key: String(ae), style: C == null ? void 0 : C[te.Weekday], scope: "col" }, V(ae, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[te.Weeks], style: C == null ? void 0 : C[te.Weeks] }, ie.weeks.map((ae) => S.createElement(
              n.Week,
              { className: i[te.Week], key: ae.weekNumber, style: C == null ? void 0 : C[te.Week], week: ae },
              k && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: ae, style: C == null ? void 0 : C[te.WeekNumber], "aria-label": Ut(ae.weekNumber, {
                locale: s
              }), className: i[te.WeekNumber], scope: "row", role: "rowheader" }, T(ae.weekNumber, a)),
              ae.days.map((ge) => {
                const { date: Re } = ge, pe = R(ge);
                if (pe[be.focused] = !pe.hidden && !!(W != null && W.isEqualTo(ge)), pe[Ze.selected] = (M == null ? void 0 : M(Re)) || pe.selected, ys($)) {
                  const { from: G, to: ce } = $;
                  pe[Ze.range_start] = !!(G && ce && a.isSameDay(Re, G)), pe[Ze.range_end] = !!(G && ce && a.isSameDay(Re, ce)), pe[Ze.range_middle] = vt($, Re, !0, a);
                }
                const Mn = x2(pe, C, t.modifiersStyles), dr = a2(pe, i, t.modifiersClassNames), L = !yn && !pe.hidden ? de(Re, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format(Re, "yyyy-MM-dd")}_${a.format(ge.displayMonth, "yyyy-MM")}`, day: ge, modifiers: pe, className: dr.join(" "), style: Mn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": L, "data-day": a.format(Re, "yyyy-MM-dd"), "data-month": ge.outside ? a.format(Re, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && yn ? S.createElement(n.DayButton, { className: i[te.DayButton], style: C == null ? void 0 : C[te.DayButton], type: "button", day: ge, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: O(ge) ? 0 : -1, "aria-label": ne(Re, pe, a.options, a), onClick: wn(ge, pe), onBlur: cr(ge, pe), onFocus: Cn(ge, pe), onKeyDown: Ge(ge, pe), onMouseEnter: Ue(ge, pe), onMouseLeave: Sn(ge, pe) }, N(Re, a.options, a)) : !pe.hidden && N(ge.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      S.createElement(n.Footer, { className: i[te.Footer], style: C == null ? void 0 : C[te.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const rC = {
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
}, oC = (e, t, n) => {
  n = n || {};
  let r;
  const o = rC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, aC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, sC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, iC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, cC = {
  date: an({
    formats: aC,
    defaultWidth: "full"
  }),
  time: an({
    formats: sC,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: iC,
    defaultWidth: "full"
  })
}, lC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, dC = (e, t, n, r) => lC[e], uC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, fC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, mC = {
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
}, pC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, hC = {
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
}, vC = {
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
}, gC = (e, t) => {
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
}, xC = {
  ordinalNumber: gC,
  era: st({
    values: uC,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: fC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: st({
    values: mC,
    defaultWidth: "wide"
  }),
  day: st({
    values: pC,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: hC,
    defaultWidth: "wide",
    formattingValues: vC,
    defaultFormattingWidth: "wide"
  })
}, bC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, yC = /\d+/i, wC = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, CC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, SC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, kC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, NC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, MC = {
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
}, EC = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, PC = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, RC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, AC = {
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
}, DC = {
  ordinalNumber: mf({
    matchPattern: bC,
    parsePattern: yC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: it({
    matchPatterns: wC,
    defaultMatchWidth: "wide",
    parsePatterns: CC,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: SC,
    defaultMatchWidth: "wide",
    parsePatterns: kC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: NC,
    defaultMatchWidth: "wide",
    parsePatterns: MC,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: EC,
    defaultMatchWidth: "wide",
    parsePatterns: PC,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: RC,
    defaultMatchWidth: "any",
    parsePatterns: AC,
    defaultParseWidth: "any"
  })
}, OC = {
  code: "ja",
  formatDistance: oC,
  formatLong: cC,
  formatRelative: dC,
  localize: xC,
  match: DC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, _C = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, kr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Of = S.forwardRef(
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
      () => kr(n || null)
    ), g = e !== void 0, y = g ? kr(e) : x, b = S.useMemo(
      () => kr(r || null),
      [r]
    ), w = S.useMemo(
      () => kr(o || null),
      [o]
    ), k = S.useMemo(() => !b || !w ? !0 : b <= w, [b, w]), C = (E) => {
      const N = E || null;
      g || v(N), t == null || t(N);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: h,
        className: D(_C(f), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          nC,
          {
            animate: !1,
            mode: "single",
            selected: y || void 0,
            onSelect: C,
            locale: m === "ja" ? OC : Eo,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (E) => `${E.getFullYear()}${m === "ja" ? "年" : ""}`
            },
            disabled: k ? [
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
              const E = Mf(), N = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
Of.displayName = "Calendar";
const Pi = oe(
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
), jC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, _f = S.forwardRef(
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
    const d = r ? Kr : "a", m = jC[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: D(Pi({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: D(Pi({ intent: t, size: n }), e),
        ...i,
        children: [
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: $e(o, { size: m }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: $e(a, { size: m }) })
        ]
      }
    );
  }
);
_f.displayName = "TextLink";
const IC = oe(
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
), TC = oe("shrink-0", {
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
}), LC = oe("text-body-primary font-bold text-md"), $C = oe(
  "text-body-primary font-normal leading-6 text-md"
), WC = oe("min-w-0 flex flex-1 flex-col", {
  variants: {
    size: {
      default: "gap-xxxs",
      large: "gap-xxs"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), FC = {
  info: Mr,
  success: zi,
  warning: Mr,
  alert: Mr
}, VC = S.forwardRef(
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
    const f = i || FC[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: D(IC({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: D(TC({ intent: t, size: n }), "top-0.5 relative"), children: $e(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: D(WC({ size: n })), children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: D(LC()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                _f,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: D($C()), children: a || o })
          ] })
        ]
      }
    );
  }
);
VC.displayName = "Callout";
const BC = oe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), zC = oe(
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
), Ar = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: D(BC({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      Lc,
      {
        id: l,
        className: D(zC({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          Wc,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(zm, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx($i, { style: { strokeWidth: 3 } })
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
Ar.displayName = "Checkbox";
const HC = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: D("gap-xs flex flex-col", t), children: e });
HC.displayName = "CheckboxGroup";
const YC = oe("bg-surface-primary space-y-md w-full", {
  variants: {}
}), jf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("div", { ref: r, className: D(YC(), e), ...n, children: t })
);
jf.displayName = "DataSheet";
const GC = oe(
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
), If = S.forwardRef(
  ({ className: e, variant: t, children: n, onEdit: r, onRemove: o, ...a }, s) => {
    const i = r || o;
    return /* @__PURE__ */ c.jsxs(
      "header",
      {
        ref: s,
        className: D(
          GC({ variant: t }),
          i && "flex items-center justify-between",
          e
        ),
        ...a,
        children: [
          /* @__PURE__ */ c.jsx("div", { children: n }),
          i && /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
            r && /* @__PURE__ */ c.jsx(
              De,
              {
                size: "icon",
                intent: "text",
                icon: Fi,
                onClick: r,
                className: "text-shape-primary [&_svg]:!size-5"
              }
            ),
            o && /* @__PURE__ */ c.jsx(
              De,
              {
                size: "icon",
                intent: "text",
                icon: Bi,
                onClick: o,
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          ] })
        ]
      }
    );
  }
);
If.displayName = "DataSheetHeader";
const Tf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "section",
    {
      ref: r,
      className: D("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
Tf.displayName = "DataSheetSection";
const UC = oe("py-sm", {
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
}), KC = oe(
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
), qC = oe(
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
), Lf = S.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    ref: s,
    className: D(
      UC({ orientation: n, spacing: r }),
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ c.jsx("div", { className: D(KC({ orientation: n })), children: t }),
      /* @__PURE__ */ c.jsx("div", { className: D(qC({ orientation: n })), children: o })
    ]
  }
));
Lf.displayName = "DataSheetKeyValue";
const XC = {
  actionsColumnParts: 10
}, $f = S.createContext(
  XC
), ZC = () => S.useContext($f), Wf = S.createContext({}), Ff = () => S.useContext(Wf), Vf = S.forwardRef(
  ({
    className: e,
    children: t,
    onEditRow: n,
    onRemoveRow: r,
    actionsColumnParts: o = 10,
    ...a
  }, s) => {
    const i = {
      actionsColumnParts: o,
      ...n && { onEditRow: n },
      ...r && { onRemoveRow: r }
    };
    return /* @__PURE__ */ c.jsx($f.Provider, { value: i, children: /* @__PURE__ */ c.jsx("div", { ref: s, className: D("overflow-x-auto", e), ...a, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) }) });
  }
);
Vf.displayName = "DataSheetTable";
const Bf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: D("", e), ...n, children: t }));
Bf.displayName = "DataSheetTableHeader";
const zf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: D("", e), ...n, children: t }));
zf.displayName = "DataSheetTableBody";
const Hf = S.forwardRef(({ className: e, header: t, itemId: n, children: r, ...o }, a) => {
  const s = S.useMemo(() => {
    let l = 0;
    return S.Children.forEach(r, (d) => {
      S.isValidElement(d) && typeof d.props.parts == "number" && (l += d.props.parts);
    }), l > 0 ? l : void 0;
  }, [r]), i = {
    ...n !== void 0 && { itemId: n },
    ...s !== void 0 && { totalParts: s }
  };
  return /* @__PURE__ */ c.jsx(Wf.Provider, { value: i, children: /* @__PURE__ */ c.jsx(
    "tr",
    {
      ref: a,
      className: D(
        t ? "h-[18px]" : "border-surface-default border-t",
        e
      ),
      ...o,
      children: r
    }
  ) });
});
Hf.displayName = "DataSheetTableRow";
const Yr = S.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l } = Ff(), d = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o;
  return /* @__PURE__ */ c.jsx(
    i,
    {
      ref: s,
      className: D(
        "py-xs text-left align-top",
        "first:pl-0 last:pr-0 px-xs",
        t ? "text-body-secondary text-sm font-normal leading-[1.5]" : "text-body-primary font-normal leading-[1.5]",
        e
      ),
      style: d,
      ...a,
      children: r
    }
  );
});
Yr.displayName = "DataSheetTableCell";
const Yf = S.forwardRef(({ className: e, header: t, itemId: n, children: r, ...o }, a) => {
  const { onEditRow: s, onRemoveRow: i, actionsColumnParts: l } = ZC(), { itemId: d } = Ff(), f = n ?? d;
  return t ? /* @__PURE__ */ c.jsx(
    Yr,
    {
      ref: a,
      header: !0,
      parts: l,
      className: e,
      ...o,
      children: r
    }
  ) : s || i ? /* @__PURE__ */ c.jsx(
    Yr,
    {
      ref: a,
      parts: l,
      className: D("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
        s && f && /* @__PURE__ */ c.jsx(
          De,
          {
            size: "icon",
            intent: "text",
            icon: Fi,
            onClick: () => s(f),
            className: "text-shape-primary [&_svg]:!size-5"
          }
        ),
        i && f && /* @__PURE__ */ c.jsx(
          De,
          {
            size: "icon",
            intent: "text",
            icon: Bi,
            onClick: () => i(f),
            danger: !0,
            className: "[&_svg]:!size-5"
          }
        )
      ] })
    }
  ) : null;
});
Yf.displayName = "DataSheetTableActionsCell";
const Gf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(De, { ref: n, className: D("w-full", e), ...t }));
Gf.displayName = "DataSheetAction";
const Yk = Object.assign(jf, {
  Header: If,
  Section: Tf,
  KeyValue: Lf,
  Table: Vf,
  TableHeader: Bf,
  TableBody: zf,
  TableRow: Hf,
  TableCell: Yr,
  TableActionsCell: Yf,
  Action: Gf
}), QC = oe(
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
), JC = oe(
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
), Qo = oe(
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
    }
  }
), Uf = S.forwardRef(
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
    return /* @__PURE__ */ c.jsxs("div", { className: D(QC({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Qo({ position: "prefix", interactive: !1 }),
          children: $e(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: JC({ hasPrefix: d, hasTrailing: f }),
          ...i
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Qo({
            position: "trailing",
            interactive: !0
          }),
          disabled: i.disabled,
          onClick: r,
          children: $e(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Qo({
            position: "trailing",
            interactive: !1
          }),
          children: $e(n, { size: o })
        }
      ) })
    ] });
  }
);
Uf.displayName = "Input";
const eS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Nr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, tS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), nS = S.forwardRef(
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
    formatDate: f = tS,
    className: m,
    contentClassName: p,
    defaultOpen: h = !1,
    open: x,
    onOpenChange: v,
    side: g = "bottom",
    locale: y = "ja"
  }, b) => {
    const [w, k] = S.useState(
      () => Nr(n || null)
    ), [C, E] = S.useState(h), N = e !== void 0, P = N ? Nr(e) : w, T = x !== void 0 ? x : C, z = S.useMemo(
      () => Nr(r || null),
      [r]
    ), V = S.useMemo(
      () => Nr(o || null),
      [o]
    ), U = S.useMemo(() => !z || !V ? !0 : z <= V, [z, V]), Z = (K) => {
      const A = K || null;
      N || k(A), t == null || t(A), A && (x === void 0 && E(!1), v == null || v(!1));
    }, j = (K) => {
      x === void 0 && E(K), v == null || v(K);
    }, H = (K) => {
      switch (K.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          K.preventDefault(), T || j(!0);
          break;
        case "Escape":
          T && (K.preventDefault(), j(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(od, { open: T, onOpenChange: j, children: [
      /* @__PURE__ */ c.jsx(ad, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Uf,
        {
          ref: b,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: P ? f(P) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || Pm,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && j(!T),
          className: D(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            T && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: H,
          onClick: () => !a && j(!T),
          "aria-expanded": T,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(sd, { children: /* @__PURE__ */ c.jsx(
        cs,
        {
          className: D(eS, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: g,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => j(!1),
          onPointerDownOutside: () => j(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            Of,
            {
              value: P,
              onChange: Z,
              ...z && { minDate: z },
              ...V && { maxDate: V },
              disabled: !U,
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
nS.displayName = "DatePicker";
const rS = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], Gk = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (f) => f(),
  title: r,
  children: o,
  busy: a,
  actions: s = rS,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0
}) => {
  const [f, m] = S.useState(-1), h = a !== void 0 ? a : f !== -1, x = async (b) => {
    const w = s.indexOf(b);
    if (b.onAction) {
      m(w);
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
  }, y = (b) => {
    if (h) {
      b.preventDefault();
      return;
    }
    b.preventDefault(), n(t);
  };
  return /* @__PURE__ */ c.jsx(Wa, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(Fa, { children: /* @__PURE__ */ c.jsx(
    Va,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        Ba,
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
                  jc,
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
                De,
                {
                  intent: "tertiary",
                  onClick: v,
                  disabled: h,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((b, w) => {
                const { label: k, classNames: C, onAction: E, value: N, ...P } = b;
                return /* @__PURE__ */ c.jsx(
                  De,
                  {
                    loading: f === w,
                    ...P,
                    intent: b.intent || "primary",
                    className: C,
                    onClick: () => x(b),
                    children: k
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
}, Kf = Gr(void 0), ws = () => {
  const e = _r(Kf);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, oS = ({
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
  const [d, f] = sn(o), m = a !== void 0 ? a : d, p = S.Children.toArray(r).filter(
    (C) => S.isValidElement(C) && C.type === qf
  ), h = p.length, x = (C) => {
    C >= 0 && C < h && (a === void 0 && f(C), l == null || l(C));
  }, v = () => x(m + 1), g = () => x(m - 1), y = (C) => {
    a === void 0 && f(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(y);
  }, w = (C) => {
    C.preventDefault(), s && n(y);
  }, k = {
    currentStep: m,
    totalSteps: h,
    goToStep: x,
    nextStep: v,
    prevStep: g,
    isFirstStep: m === 0,
    isLastStep: m === h - 1,
    cancellable: s,
    onClose: y,
    onCancel: n
  };
  return /* @__PURE__ */ c.jsx(Kf.Provider, { value: k, children: /* @__PURE__ */ c.jsx(Wa, { open: e, onOpenChange: y, children: /* @__PURE__ */ c.jsx(Fa, { children: /* @__PURE__ */ c.jsx(
    Va,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        Ba,
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
}, qf = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), aS = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  jc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), sS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), iS = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = ws(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(De, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, cS = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = ws(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(tv, { asChild: !0, children: /* @__PURE__ */ c.jsx(De, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(De, { ...o, onClick: i, children: e });
}, Uk = {
  Root: oS,
  Step: qf,
  Header: aS,
  Body: sS,
  Footer: iS,
  Action: cS,
  useMultiStepDialog: ws
}, Kk = ({
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
};
var fe = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(fe || {}), me = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(me || {});
const lS = [
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
], dS = oe(
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
), Ri = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: a = "md",
  style: s,
  selected: i = !1
}) => {
  const l = lS.find(
    (d) => d.code === e
  );
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: D(
        dS({ size: a, selected: i, interactive: !!o }),
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
            className: D(
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
}, uS = od, fS = ad, Xf = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(sd, { children: /* @__PURE__ */ c.jsx(
  cs,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: D(
      // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
      // but we can add them later as needed.
      `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-50 border outline-none`,
      e
    ),
    ...r
  }
) }));
Xf.displayName = cs.displayName;
var Ai = 1, mS = 0.9, pS = 0.8, hS = 0.17, Jo = 0.1, ea = 0.999, vS = 0.9999, gS = 0.99, xS = /[\\\/_+.#"@\[\(\{&]/, bS = /[\\\/_+.#"@\[\(\{&]/g, yS = /[\s-]/, Zf = /[\s-]/g;
function Na(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Ai : gS;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, h, x; d >= 0; ) m = Na(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= Ai : xS.test(e.charAt(d - 1)) ? (m *= pS, h = e.slice(o, d - 1).match(bS), h && o > 0 && (m *= Math.pow(ea, h.length))) : yS.test(e.charAt(d - 1)) ? (m *= mS, x = e.slice(o, d - 1).match(Zf), x && o > 0 && (m *= Math.pow(ea, x.length))) : (m *= hS, o > 0 && (m *= Math.pow(ea, d - o))), e.charAt(d) !== t.charAt(a) && (m *= vS)), (m < Jo && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Na(e, t, n, r, d + 1, a + 2, s), p * Jo > m && (m = p * Jo)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function Di(e) {
  return e.toLowerCase().replace(Zf, " ");
}
function wS(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Na(e, t, Di(e), Di(t), 0, 0, {});
}
var Dn = '[cmdk-group=""]', ta = '[cmdk-group-items=""]', CS = '[cmdk-group-heading=""]', Qf = '[cmdk-item=""]', Oi = `${Qf}:not([aria-disabled="true"])`, Ma = "cmdk-item-select", tn = "data-value", SS = (e, t, n) => wS(e, t, n), Jf = u.createContext(void 0), ar = () => u.useContext(Jf), em = u.createContext(void 0), Cs = () => u.useContext(em), tm = u.createContext(void 0), nm = u.forwardRef((e, t) => {
  let n = nn(() => {
    var M, _;
    return { search: "", value: (_ = (M = e.value) != null ? M : e.defaultValue) != null ? _ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = nn(() => /* @__PURE__ */ new Set()), o = nn(() => /* @__PURE__ */ new Map()), a = nn(() => /* @__PURE__ */ new Map()), s = nn(() => /* @__PURE__ */ new Set()), i = rm(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: g = !0, ...y } = e, b = Ce(), w = Ce(), k = Ce(), C = u.useRef(null), E = jS();
  Bt(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, N.emit();
    }
  }, [f]), Bt(() => {
    E(6, Z);
  }, []);
  let N = u.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, _, $) => {
    var Y, W, O, X;
    if (!Object.is(n.current[M], _)) {
      if (n.current[M] = _, M === "search") U(), z(), E(1, V);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(k);
          Q ? Q.focus() : (Y = document.getElementById(b)) == null || Y.focus();
        }
        if (E(7, () => {
          var Q;
          n.current.selectedItemId = (Q = j()) == null ? void 0 : Q.id, N.emit();
        }), $ || E(5, Z), ((W = i.current) == null ? void 0 : W.value) !== void 0) {
          let Q = _ ?? "";
          (X = (O = i.current).onValueChange) == null || X.call(O, Q);
          return;
        }
      }
      N.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), P = u.useMemo(() => ({ value: (M, _, $) => {
    var Y;
    _ !== ((Y = a.current.get(M)) == null ? void 0 : Y.value) && (a.current.set(M, { value: _, keywords: $ }), n.current.filtered.items.set(M, T(_, $)), E(2, () => {
      z(), N.emit();
    }));
  }, item: (M, _) => (r.current.add(M), _ && (o.current.has(_) ? o.current.get(_).add(M) : o.current.set(_, /* @__PURE__ */ new Set([M]))), E(3, () => {
    U(), z(), n.current.value || V(), N.emit();
  }), () => {
    a.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let $ = j();
    E(4, () => {
      U(), ($ == null ? void 0 : $.getAttribute("id")) === M && V(), N.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    a.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: k, labelId: w, listInnerRef: C }), []);
  function T(M, _) {
    var $, Y;
    let W = (Y = ($ = i.current) == null ? void 0 : $.filter) != null ? Y : SS;
    return M ? W(M, n.current.search, _) : 0;
  }
  function z() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, _ = [];
    n.current.filtered.groups.forEach((Y) => {
      let W = o.current.get(Y), O = 0;
      W.forEach((X) => {
        let Q = M.get(X);
        O = Math.max(Q, O);
      }), _.push([Y, O]);
    });
    let $ = C.current;
    H().sort((Y, W) => {
      var O, X;
      let Q = Y.getAttribute("id"), ne = W.getAttribute("id");
      return ((O = M.get(ne)) != null ? O : 0) - ((X = M.get(Q)) != null ? X : 0);
    }).forEach((Y) => {
      let W = Y.closest(ta);
      W ? W.appendChild(Y.parentElement === W ? Y : Y.closest(`${ta} > *`)) : $.appendChild(Y.parentElement === $ ? Y : Y.closest(`${ta} > *`));
    }), _.sort((Y, W) => W[1] - Y[1]).forEach((Y) => {
      var W;
      let O = (W = C.current) == null ? void 0 : W.querySelector(`${Dn}[${tn}="${encodeURIComponent(Y[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function V() {
    let M = H().find(($) => $.getAttribute("aria-disabled") !== "true"), _ = M == null ? void 0 : M.getAttribute(tn);
    N.setState("value", _ || void 0);
  }
  function U() {
    var M, _, $, Y;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let W = 0;
    for (let O of r.current) {
      let X = (_ = (M = a.current.get(O)) == null ? void 0 : M.value) != null ? _ : "", Q = (Y = ($ = a.current.get(O)) == null ? void 0 : $.keywords) != null ? Y : [], ne = T(X, Q);
      n.current.filtered.items.set(O, ne), ne > 0 && W++;
    }
    for (let [O, X] of o.current) for (let Q of X) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = W;
  }
  function Z() {
    var M, _, $;
    let Y = j();
    Y && (((M = Y.parentElement) == null ? void 0 : M.firstChild) === Y && (($ = (_ = Y.closest(Dn)) == null ? void 0 : _.querySelector(CS)) == null || $.scrollIntoView({ block: "nearest" })), Y.scrollIntoView({ block: "nearest" }));
  }
  function j() {
    var M;
    return (M = C.current) == null ? void 0 : M.querySelector(`${Qf}[aria-selected="true"]`);
  }
  function H() {
    var M;
    return Array.from(((M = C.current) == null ? void 0 : M.querySelectorAll(Oi)) || []);
  }
  function B(M) {
    let _ = H()[M];
    _ && N.setState("value", _.getAttribute(tn));
  }
  function K(M) {
    var _;
    let $ = j(), Y = H(), W = Y.findIndex((X) => X === $), O = Y[W + M];
    (_ = i.current) != null && _.loop && (O = W + M < 0 ? Y[Y.length - 1] : W + M === Y.length ? Y[0] : Y[W + M]), O && N.setState("value", O.getAttribute(tn));
  }
  function A(M) {
    let _ = j(), $ = _ == null ? void 0 : _.closest(Dn), Y;
    for (; $ && !Y; ) $ = M > 0 ? OS($, Dn) : _S($, Dn), Y = $ == null ? void 0 : $.querySelector(Oi);
    Y ? N.setState("value", Y.getAttribute(tn)) : K(M);
  }
  let I = () => B(H().length - 1), re = (M) => {
    M.preventDefault(), M.metaKey ? I() : M.altKey ? A(1) : K(1);
  }, R = (M) => {
    M.preventDefault(), M.metaKey ? B(0) : M.altKey ? A(-1) : K(-1);
  };
  return u.createElement(q.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (M) => {
    var _;
    (_ = y.onKeyDown) == null || _.call(y, M);
    let $ = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || $)) switch (M.key) {
      case "n":
      case "j": {
        g && M.ctrlKey && re(M);
        break;
      }
      case "ArrowDown": {
        re(M);
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
        M.preventDefault(), B(0);
        break;
      }
      case "End": {
        M.preventDefault(), I();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let Y = j();
        if (Y) {
          let W = new Event(Ma);
          Y.dispatchEvent(W);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: TS }, l), Ro(e, (M) => u.createElement(em.Provider, { value: N }, u.createElement(Jf.Provider, { value: P }, M))));
}), kS = u.forwardRef((e, t) => {
  var n, r;
  let o = Ce(), a = u.useRef(null), s = u.useContext(tm), i = ar(), l = rm(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Bt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = om(o, a, [e.value, e.children, a], e.keywords), m = Cs(), p = Pt((E) => E.value && E.value === f.current), h = Pt((E) => d || i.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let E = a.current;
    if (!(!E || e.disabled)) return E.addEventListener(Ma, x), () => E.removeEventListener(Ma, x);
  }, [h, e.onSelect, e.disabled]);
  function x() {
    var E, N;
    v(), (N = (E = l.current).onSelect) == null || N.call(E, f.current);
  }
  function v() {
    m.setState("value", f.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: y, onSelect: b, forceMount: w, keywords: k, ...C } = e;
  return u.createElement(q.div, { ref: xt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : x }, e.children);
}), NS = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ce(), i = u.useRef(null), l = u.useRef(null), d = Ce(), f = ar(), m = Pt((h) => o || f.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Bt(() => f.group(s), []), om(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(q.div, { ref: xt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Ro(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(tm.Provider, { value: p }, h))));
}), MS = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Pt((s) => !s.search);
  return !n && !a ? null : u.createElement(q.div, { ref: xt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), ES = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Cs(), s = Pt((d) => d.search), i = Pt((d) => d.selectedItemId), l = ar();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), PS = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = Pt((d) => d.selectedItemId), l = ar();
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
  }, []), u.createElement(q.div, { ref: xt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, Ro(e, (d) => u.createElement("div", { ref: xt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), RS = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(Wa, { open: n, onOpenChange: r }, u.createElement(Fa, { container: s }, u.createElement(Va, { "cmdk-overlay": "", className: o }), u.createElement(Ba, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(nm, { ref: t, ...i }))));
}), AS = u.forwardRef((e, t) => Pt((n) => n.filtered.count === 0) ? u.createElement(q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), DS = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ro(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), Fe = Object.assign(nm, { List: PS, Item: kS, Input: ES, Group: NS, Separator: MS, Dialog: RS, Empty: AS, Loading: DS });
function OS(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function _S(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function rm(e) {
  let t = u.useRef(e);
  return Bt(() => {
    t.current = e;
  }), t;
}
var Bt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function nn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Pt(e) {
  let t = Cs(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function om(e, t, n, r = []) {
  let o = u.useRef(), a = ar();
  return Bt(() => {
    var s;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(tn, i), o.current = i;
  }), o;
}
var jS = () => {
  let [e, t] = u.useState(), n = nn(() => /* @__PURE__ */ new Map());
  return Bt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function IS(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ro({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(IS(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var TS = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const am = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe,
  {
    ref: n,
    className: D(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
am.displayName = Fe.displayName;
const sm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: "border-divider-default py-md px-md flex items-center border-b",
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
          /* @__PURE__ */ c.jsx(Vi, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Fe.Input,
            {
              ref: n,
              className: D(
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
sm.displayName = Fe.Input.displayName;
const im = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.List,
  {
    ref: n,
    className: D("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
im.displayName = Fe.List.displayName;
const cm = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
cm.displayName = Fe.Empty.displayName;
const Dr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Group,
  {
    ref: n,
    className: D(
      `text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,
      e
    ),
    ...t
  }
));
Dr.displayName = Fe.Group.displayName;
const LS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Separator,
  {
    ref: n,
    className: D(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
LS.displayName = Fe.Separator.displayName;
const Or = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Item,
  {
    ref: n,
    className: D(
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
Or.displayName = Fe.Item.displayName;
const _i = oe("ease-in-out transition-all duration-300", {
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
}), $S = ({
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
  searchPlaceholder: y = "オプションを検索...",
  maxCount: b = 10,
  modalPopover: w = !1,
  className: k,
  hideSelectAll: C = !1,
  searchable: E = !0,
  emptyIndicator: N = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: T = !1,
  popoverClassName: z,
  disabled: V = !1,
  invalid: U = !1,
  responsive: Z,
  minWidth: j,
  maxWidth: H,
  deduplicateOptions: B = !1,
  resetOnDefaultValueChange: K = !0,
  closeOnSelect: A = !1,
  filterByValueAndLabel: I = !1,
  renderOption: re,
  customTrigger: R,
  selectionDisplayMode: M = "default",
  hideSelection: _ = !1,
  ...$
}, Y) => {
  const [W, O] = S.useState(o), [X, Q] = S.useState(!1), [ne, de] = S.useState(""), [ue, Ne] = S.useState(""), [je, nt] = S.useState(""), qe = S.useRef(W.length), rt = S.useRef(X), Ut = S.useRef(ne), Le = S.useCallback(
    (L, G = "polite") => {
      G === "assertive" ? (nt(L), setTimeout(() => nt(""), 100)) : (Ne(L), setTimeout(() => Ne(""), 100));
    },
    []
  ), _t = S.useId(), ir = `${_t}-listbox`, yn = `${_t}-description`, Kt = `${_t}-count`, qt = S.useRef(o), wn = S.useCallback(
    (L) => {
      const G = L[0];
      return !!(G && typeof G == "object" && "heading" in G);
    },
    []
  ), Cn = S.useCallback((L, G) => {
    if (L.length !== G.length) return !1;
    const ce = [...L].sort(), we = [...G].sort();
    return ce.every((Ae, En) => Ae === we[En]);
  }, []), cr = S.useCallback(() => {
    O(o), Q(!1), de(""), t(o);
  }, [o, t]), Ge = S.useRef(null);
  S.useImperativeHandle(
    Y,
    () => ({
      reset: cr,
      getSelectedValues: () => W,
      setSelectedValues: (L) => {
        O(L), t(L);
      },
      clear: () => {
        O([]), t([]);
      },
      focus: () => {
        if (Ge.current) {
          Ge.current.focus();
          const L = Ge.current.style.outline, G = Ge.current.style.outlineOffset;
          Ge.current.style.outline = "2px solid hsl(var(--ring))", Ge.current.style.outlineOffset = "2px", setTimeout(() => {
            Ge.current && (Ge.current.style.outline = L, Ge.current.style.outlineOffset = G);
          }, 1e3);
        }
      }
    }),
    [cr, W, t]
  );
  const [Ue, Sn] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const L = () => {
      const G = window.innerWidth;
      G < 640 ? Sn("mobile") : G < 1024 ? Sn("tablet") : Sn("desktop");
    };
    return L(), window.addEventListener("resize", L), () => {
      typeof window < "u" && window.removeEventListener("resize", L);
    };
  }, []);
  const pt = (() => {
    if (!Z)
      return {
        maxCount: b,
        compactMode: !1
      };
    if (Z === !0) {
      const ce = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ue];
      return {
        maxCount: (ce == null ? void 0 : ce.maxCount) ?? b,
        compactMode: (ce == null ? void 0 : ce.compactMode) ?? !1
      };
    }
    const L = Z[Ue];
    return {
      maxCount: (L == null ? void 0 : L.maxCount) ?? b,
      compactMode: (L == null ? void 0 : L.compactMode) ?? !1
    };
  })(), Ve = S.useCallback(() => {
    if (e.length === 0) return [];
    let L;
    wn(e) ? L = e.flatMap((Ae) => Ae.options) : L = e;
    const G = /* @__PURE__ */ new Set(), ce = [], we = [];
    return L.forEach((Ae) => {
      G.has(Ae.value) ? (ce.push(Ae.value), B || we.push(Ae)) : (G.add(Ae.value), we.push(Ae));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${B ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${B ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), B ? we : L;
  }, [e, B, wn]), jt = S.useCallback(
    (L) => {
      const G = Ve().find((ce) => ce.value === L);
      return !G && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${L}" not found in options list`
      ), G;
    },
    [Ve]
  ), Ao = S.useCallback(
    (L, G) => {
      const [ce, we] = L.split(":");
      if (!I)
        return we && we.toLowerCase().includes(G.toLowerCase()) ? 1 : 0;
      const Ae = G.toLowerCase();
      return we && we.toLowerCase().includes(Ae) || ce && ce.toLowerCase().includes(Ae) ? 1 : 0;
    },
    [I]
  ), lr = (L) => {
    if (L.key === "Enter")
      Q(!0);
    else if (L.key === "Backspace" && !L.currentTarget.value) {
      const G = [...W];
      G.pop(), O(G), t(G);
    }
  }, kn = (L) => {
    if (V) return;
    const G = jt(L);
    if (G != null && G.disabled) return;
    const ce = W.includes(L) ? W.filter((we) => we !== L) : [...W, L];
    O(ce), t(ce), A && Q(!1);
  }, Nn = () => {
    V || (O([]), n([]), t([]));
  }, ie = () => {
    V || Q((L) => !L);
  }, xe = () => {
    if (V) return;
    const L = W.slice(
      0,
      pt.maxCount
    );
    O(L), t(L);
  }, ae = () => {
    if (V) return;
    const L = Ve().filter((G) => !G.disabled);
    if (W.length === L.length)
      Nn();
    else {
      const G = L.map((ce) => ce.value);
      O(G), t(G);
    }
    A && Q(!1);
  }, Re = re || ((L) => {
    const { option: G, location: ce, onRemove: we, disabled: Ae } = L;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      Ri,
      {
        className: D(
          _i({ variant: r }),
          pt.compactMode && "text-xs px-1.5 py-0.5",
          Ue === "mobile" && "max-w-[120px] truncate",
          T && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Ae && "cursor-not-allowed"
        ),
        ...!Ae && { onRemove: we },
        children: G.label
      }
    ) : G.label;
  });
  S.useEffect(() => {
    if (!K) return;
    const L = qt.current;
    Cn(L, o) || (Cn(W, o) || O(o), qt.current = [...o]);
  }, [o, W, Cn, K]);
  const Mn = {
    minWidth: j || (Ue === "mobile" ? "0px" : "200px"),
    maxWidth: H || "100%",
    width: P ? "auto" : "100%"
  }, dr = S.useMemo(() => M === "default" || W.length === 0 ? a : W.map((L) => {
    var G;
    return (G = jt(L)) == null ? void 0 : G.label;
  }).filter(Boolean).join(", "), [W, jt, a, M]);
  return S.useEffect(() => {
    X || de("");
  }, [X]), S.useEffect(() => {
    const L = W.length, G = Ve(), ce = G.filter((we) => !we.disabled).length;
    if (L !== qe.current) {
      const we = L - qe.current;
      if (we > 0) {
        const En = W.slice(-we).map((gm) => {
          var ks;
          return (ks = G.find((xm) => xm.value === gm)) == null ? void 0 : ks.label;
        }).filter(Boolean);
        En.length === 1 ? Le(
          `${En[0]} selected. ${L} of ${ce} options selected.`
        ) : Le(
          `${En.length} options selected. ${L} of ${ce} total selected.`
        );
      } else we < 0 && Le(
        `Option removed. ${L} of ${ce} options selected.`
      );
      qe.current = L;
    }
    X !== rt.current && (Le(
      X ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), rt.current = X), ne !== Ut.current && ne !== void 0 && (ne && X && Le(`Searching for "${ne}"`), Ut.current = ne);
  }, [W, X, ne, Le, Ve]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: je })
    ] }),
    /* @__PURE__ */ c.jsxs(
      uS,
      {
        open: X,
        onOpenChange: Q,
        modal: w,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: yn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Kt, className: "sr-only", "aria-live": "polite", children: W.length === 0 ? l : `${W.length} option${W.length === 1 ? "" : "s"} selected: ${W.map((L) => {
            var G;
            return (G = jt(L)) == null ? void 0 : G.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: D(P && "w-auto", k), children: [
            /* @__PURE__ */ c.jsx(fS, { asChild: !0, children: R || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ge,
                ...$,
                onClick: ie,
                disabled: V,
                className: D(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  P ? "w-auto" : "w-full",
                  !U && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  U && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  pt.compactMode && "min-h-8 text-sm",
                  Ue === "mobile" && "min-h-12"
                ),
                style: {
                  ...Mn,
                  maxWidth: `min(${Mn.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": X,
                "aria-haspopup": "listbox",
                "aria-controls": X ? ir : void 0,
                "aria-describedby": `${yn} ${Kt}`,
                "aria-label": `Multi-select: ${W.length} of ${Ve().length} options selected. ${s}`,
                children: /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "span",
                        {
                          className: D(
                            "mx-sm",
                            M === "inline" && "truncate",
                            V ? "text-body-disabled" : X || M === "inline" && dr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: dr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Ur,
                        {
                          className: D(
                            "h-4 mx-xs cursor-pointer",
                            V ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(_ || M === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              W.slice(0, pt.maxCount).map((L) => {
                const G = jt(L);
                return G ? /* @__PURE__ */ c.jsx("div", { children: Re({
                  option: G,
                  location: "badge",
                  onRemove: () => kn(L),
                  disabled: V
                }) }, L) : null;
              }).filter(Boolean),
              W.length > pt.maxCount && /* @__PURE__ */ c.jsxs(
                Ri,
                {
                  className: D(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    _i({ variant: r }),
                    pt.compactMode && "text-xs px-1.5 py-0.5",
                    T && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    V && "cursor-not-allowed"
                  ),
                  ...!V && { onRemove: xe },
                  children: [
                    "+ ",
                    W.length - pt.maxCount,
                    " ",
                    g
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Xf,
            {
              id: ir,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: D(
                "p-0 w-auto",
                Ue === "mobile" && "w-[85vw] max-w-[280px]",
                Ue === "tablet" && "max-w-md w-[70vw]",
                Ue === "desktop" && "min-w-[300px]",
                z
              ),
              style: {
                maxWidth: `min(${Mn.maxWidth}, 85vw)`,
                maxHeight: Ue === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(am, { filter: Ao, children: [
                E && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${_t}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    sm,
                    {
                      placeholder: y,
                      onKeyDown: lr,
                      value: ne,
                      onValueChange: de,
                      "aria-label": f,
                      "aria-describedby": `${_t}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  im,
                  {
                    className: D(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ue === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(cm, { children: N }),
                      !C && !ne && /* @__PURE__ */ c.jsx(Dr, { children: /* @__PURE__ */ c.jsxs(
                        Or,
                        {
                          value: "select-all",
                          onSelect: ae,
                          role: "option",
                          "aria-selected": W.length === Ve().filter((L) => !L.disabled).length,
                          "aria-label": `Select all ${Ve().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              Ar,
                              {
                                className: "mr-xs",
                                checked: W.length === Ve().filter((L) => !L.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              p,
                              Ve().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                Ve().length,
                                " ",
                                h
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      wn(e) ? e.map((L) => /* @__PURE__ */ c.jsx(Dr, { heading: L.heading, children: L.options.map((G) => {
                        const ce = W.includes(G.value);
                        return /* @__PURE__ */ c.jsxs(
                          Or,
                          {
                            value: `${G.value}:${G.label}`,
                            onSelect: () => kn(G.value),
                            role: "option",
                            "aria-selected": ce,
                            "aria-disabled": G.disabled ?? !1,
                            "aria-label": `${G.label}${ce ? ", selected" : ", not selected"}${G.disabled ? ", disabled" : ""}`,
                            className: D(
                              "cursor-pointer",
                              G.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!G.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Ar, { className: "mr-xs", checked: ce }),
                              Re({
                                option: G,
                                location: "dropdown",
                                isSelected: ce
                              })
                            ]
                          },
                          G.value
                        );
                      }) }, L.heading)) : /* @__PURE__ */ c.jsx(Dr, { children: e.map((L) => {
                        const G = W.includes(L.value);
                        return /* @__PURE__ */ c.jsxs(
                          Or,
                          {
                            value: `${L.value}:${L.label}`,
                            onSelect: () => kn(L.value),
                            role: "option",
                            "aria-selected": G,
                            "aria-disabled": L.disabled ?? !1,
                            "aria-label": `${L.label}${G ? ", selected" : ", not selected"}${L.disabled ? ", disabled" : ""}`,
                            className: D(
                              "cursor-pointer",
                              L.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!L.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Ar, { className: "mr-xs", checked: G }),
                              Re({
                                option: L,
                                location: "dropdown",
                                isSelected: G
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
                        De,
                        {
                          intent: "text",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: Nn,
                          disabled: W.length === 0,
                          children: x
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        De,
                        {
                          intent: "primary",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: () => {
                            n(W), Q(!1);
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
}, WS = S.forwardRef(
  $S
);
WS.displayName = "MultiSelect";
const FS = oe(
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
), VS = oe(
  `bg-surface-primary z-dropdown relative -mt-px -mb-px w-full min-w-[8rem]
  overflow-hidden border`,
  {
    variants: {
      variant: {
        default: "border-interactive-default py-xxs max-h-96 rounded",
        compact: `border-divider-default rounded-sm
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), BS = oe(
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
), Ea = ({
  options: e,
  placeholder: t,
  className: n,
  icon: r,
  invalid: o = !1,
  variant: a = "default",
  intent: s = "primary",
  value: i,
  hideChevron: l = !1,
  ...d
}) => {
  const f = {
    ...d
  };
  return i !== void 0 && (f.value = i), /* @__PURE__ */ c.jsxs(U0, { ...f, children: [
    /* @__PURE__ */ c.jsxs(
      K0,
      {
        className: D(
          FS({ variant: a, intent: s, invalid: o }),
          "group",
          n
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            $e(r, {
              className: D("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              q0,
              {
                placeholder: t || "Select an option",
                className: D({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            X0,
            {
              className: D("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": d.disabled
              }),
              children: /* @__PURE__ */ c.jsx(
                Ur,
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
    /* @__PURE__ */ c.jsx(Z0, { children: /* @__PURE__ */ c.jsxs(
      Q0,
      {
        position: "popper",
        className: D(VS({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(ab, {}),
          /* @__PURE__ */ c.jsx(J0, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((m, p) => {
            switch (m.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(eb, { children: /* @__PURE__ */ c.jsx(tb, { children: m.label }) }, p);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  ib,
                  {
                    className: "border-divider-default m-[5px] h-px border-b"
                  },
                  p
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  nb,
                  {
                    value: m.value,
                    disabled: m.disabled ?? !1,
                    className: BS({
                      variant: a,
                      isSelected: i === m.value
                    }),
                    children: [
                      $e(m.icon, {
                        className: D("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": m.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        rb,
                        {
                          className: D("flex-1", {
                            "text-interactive-disabled": m.disabled
                          }),
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(ob, {})
                    ]
                  },
                  p
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(sb, {}),
          /* @__PURE__ */ c.jsx(cb, {})
        ]
      }
    ) })
  ] });
};
Ea.displayName = "Select";
const zS = oe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), ji = oe(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), HS = S.forwardRef(
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
    formatPageOption: d = (v, g, y) => `${v} / ${g}（全${y}件）`,
    showNavigation: f = !0,
    size: m,
    className: p,
    ...h
  }, x) => {
    const v = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, y = (E) => {
      const N = parseInt(E, 10);
      s(N), e > 1 && r(1);
    }, b = (E) => {
      const N = parseInt(E, 10);
      r(N);
    }, w = a.map((E) => ({
      value: E.toString(),
      label: E.toString()
    })), k = Math.max(t, 1), C = Array.from(
      { length: k },
      (E, N) => N + 1
    ).map((E) => ({
      value: E.toString(),
      label: d(E, k, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: D(zS({ size: m }), p),
        ...h,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: D(ji()), children: i }),
            /* @__PURE__ */ c.jsx(
              Ea,
              {
                value: o.toString(),
                onValueChange: y,
                options: w
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: D(ji()), children: l }),
            /* @__PURE__ */ c.jsx(
              Ea,
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
              De,
              {
                intent: "text",
                size: "sm",
                icon: jm,
                onClick: v,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              De,
              {
                intent: "text",
                size: "sm",
                icon: Wi,
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
HS.displayName = "Pagination";
const YS = oe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), GS = oe(
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
), US = oe(
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
), qk = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: D(YS({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      M0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: D(
          GS({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(E0, { className: D(US({ invalid: a })) })
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
}, Xk = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  N0,
  {
    className: D("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), KS = oe(
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
), qS = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", XS = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, ZS = oe(
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
), QS = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, JS = oe(
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
), ek = "gap-xs text-sm text-body-secondary flex-row", tk = oe(
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
), nk = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, rk = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", ok = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, ak = S.forwardRef(
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
    const y = S.useRef(g);
    Li(() => {
      y.current === "filled" && g !== "filled" && v([]), y.current = g;
    }, [g]);
    const b = (C) => {
      h || o && o(C);
    }, w = (C) => {
      if (!h) {
        if (C.key === "Enter" && n.trim()) {
          const E = [...x, n.trim()];
          if (v(E), o) {
            const N = {
              ...C,
              target: { value: "" }
            };
            o(N);
          }
          f && a && a(E), C.preventDefault();
        }
        if ((C.key === "Backspace" || C.key === "Delete") && !n && x.length > 0) {
          const E = x.slice(0, -1);
          v(E), f && a && a(E), C.preventDefault();
        }
      }
    }, k = (C) => {
      if (h) return;
      const E = x.filter((N, P) => P !== C);
      v(E), f && a && a(E);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: D(
          "gap-xxs group flex flex-col",
          h ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": h ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: D(
                KS({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: D(qS), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: D(rk, XS), children: [
                    /* @__PURE__ */ c.jsx("span", { className: D(ZS({ size: e })), children: /* @__PURE__ */ c.jsx(Vi, { size: ok[e] }) }),
                    x.map((C, E) => /* @__PURE__ */ c.jsxs("span", { className: tk(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: D(
                            nk,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (N) => {
                            N.stopPropagation(), N.preventDefault(), k(E);
                          },
                          onMouseDown: (N) => {
                            N.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: h,
                          children: /* @__PURE__ */ c.jsx(na, { size: 8 })
                        }
                      )
                    ] }, E)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: D(QS),
                        type: "text",
                        value: n,
                        onChange: b,
                        onKeyDown: w,
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
                      children: /* @__PURE__ */ c.jsx(na, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: D(
                      JS({
                        size: e
                      })
                    ),
                    onClick: () => a == null ? void 0 : a(x),
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
              className: D(
                ek,
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
ak.displayName = "SearchBar";
const lm = Gr(void 0), dm = Gr(!1), sk = ({
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
  return /* @__PURE__ */ c.jsx(lm.Provider, { value: a, children: t });
}, ik = ({
  children: e
}) => /* @__PURE__ */ c.jsx(dm.Provider, { value: !0, children: e }), sr = () => {
  const e = _r(lm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = _r(dm);
  return { ...e, isInFooter: t };
}, um = S.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = sr();
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: n,
      className: D(
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
      children: r ? /* @__PURE__ */ c.jsx(Tm, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Om, { className: "size-5", strokeWidth: 2 })
    }
  );
});
um.displayName = "SideNavigationCollapseButton";
const ck = oe(
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
), lk = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(sk, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(fm, { ref: n, ...t }) }));
lk.displayName = "SideNavigation";
const fm = S.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    ...s
  }, i) => {
    const { isCollapsed: l } = sr();
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
        className: D(
          ck({ width: d }),
          "group",
          e
        ),
        "data-collapsed": l,
        ...s,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: D(
                "p-sm",
                l ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(ik, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(um, {})
        ]
      }
    );
  }
);
fm.displayName = "SideNavigationContent";
const dk = oe(
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
), uk = S.forwardRef(
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
    const { isCollapsed: d, isInFooter: f } = sr(), m = r ? Kr : "button", p = s ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      m,
      {
        ref: l,
        className: D(
          dk({
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
uk.displayName = "SideNavigationItem";
const fk = oe("flex flex-col", {
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
}), mk = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = sr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: D(
        fk({ isCollapsed: s, isLast: r }),
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
mk.displayName = "SideNavigationSection";
const pk = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", hk = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Zk = () => {
  const { isCollapsed: e } = sr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: pk,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: hk,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, vk = oe(
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
), gk = oe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), Qk = ({
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
      className: D(
        vk({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: gk({ indicator: s }) }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: e }),
        !!a && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: D(
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
}, xk = S.forwardRef(
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
      mm,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: D("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: D(
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
                    $i,
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
              className: D(
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
            className: D(
              "h-0.25 flex-1 transition-colors",
              l.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, l.id)) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "h-8" })
    ] });
  }
), mm = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((h) => h.status === "active"), i = Math.max(
    0,
    Math.min(s, a - 1)
  ), l = t[i] || t[0], d = a > 0 ? (i + 1) / a * 100 : 0, f = 2 * Math.PI * 24, m = f, p = f - d / 100 * f;
  return /* @__PURE__ */ c.jsx("div", { ref: o, className: D("space-y-6", e), ...r, children: /* @__PURE__ */ c.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
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
mm.displayName = "RadialStepper";
xk.displayName = "Stepper";
const bk = u.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    mb,
    {
      ref: o,
      id: a,
      "data-slot": "switch",
      className: D(
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
        pb,
        {
          "data-slot": "switch-thumb",
          className: D(
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
bk.displayName = "Switch";
const Pa = {
  loading: !1,
  loadingText: "ローディング中…"
}, pm = S.createContext(
  Pa
), hm = () => S.useContext(pm), yk = S.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Pa.loading,
    loadingText: r = Pa.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(pm.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "border-surface-default bg-surface-primary relative border",
        children: /* @__PURE__ */ c.jsx(
          "table",
          {
            ref: a,
            className: D("w-full caption-bottom", e),
            ...o,
            children: t
          }
        )
      }
    ) });
  }
);
yk.displayName = "Table";
const wk = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = hm(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: D("text-sm bg-surface-tertiary top-0 sticky", e),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            bs.Linear,
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
wk.displayName = "TableHeader";
const Ck = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = hm(), l = t ?? s, d = n ?? i;
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
Ck.displayName = "TableBody";
const Sk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: D("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
Sk.displayName = "TableFooter";
const kk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: D(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
kk.displayName = "TableRow";
const Nk = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: D(
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
Nk.displayName = "TableHead";
const Mk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: D(
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
      e
    ),
    ...t
  }
));
Mk.displayName = "TableCell";
const Ek = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: D("text-body-primary mt-md text-sm", e),
    ...t
  }
));
Ek.displayName = "TableCaption";
const Jk = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  "button",
  {
    ref: r,
    className: D(
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
)), Pk = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: r,
    className: D(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: D(
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
Pk.displayName = "TableRowOverlay";
const vm = S.createContext({
  size: "normal"
}), Rk = () => S.useContext(vm), Ak = oe("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), Dk = oe(
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
), Ok = S.forwardRef(({ className: e, size: t, children: n, ...r }, o) => {
  const a = t ? { size: t } : {};
  return /* @__PURE__ */ c.jsx(vm.Provider, { value: a, children: /* @__PURE__ */ c.jsx(xb, { ref: o, className: D("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(bb, { className: D(Ak({ size: t })), role: "tablist", children: n }) }) });
});
Ok.displayName = "TabBar";
const _k = S.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => {
  const { size: s } = Rk(), i = t ?? s;
  return /* @__PURE__ */ c.jsx(
    yb,
    {
      ref: a,
      className: D(Dk({ size: i }), e),
      disabled: r,
      ...o,
      children: n
    }
  );
});
_k.displayName = "Tab";
const jk = oe(
  `border-interactive-default bg-surface-primary px-md py-sm
  focus:border-interactive-selected disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  hover:border-interactive-hover h-12 min-h-30 rounded w-full border
  focus:ring-4 focus:outline-0`,
  {
    variants: {
      invalid: {
        false: "text-body-primary focus:ring-interactive-focused",
        true: `border-shape-interactive-alert-default!
        focus:ring-interactive-alert-focused`
      }
    }
  }
), Ik = S.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const [s, i] = S.useState(o.value || ""), l = (d) => {
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
          className: D(jk({ invalid: e }), t),
          ...o,
          value: s,
          onChange: l
        }
      ),
      !!(n && r) && /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        s.toString().length,
        "/",
        n
      ] })
    ] });
  }
);
Ik.displayName = "TextArea";
const eN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  Fb,
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
            zi,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Ps,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Ps,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Mr, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            Vb,
            {
              className: D("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ c.jsx(
                "h5",
                {
                  className: D("text-md leading-none", {
                    "mb-xs": !!e
                  }),
                  children: t
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(Bb, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(zb, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(na, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), tN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs($b, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    Wb,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Tk = oe(
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
), nN = sy, Lk = S.forwardRef(
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
  }, h) => /* @__PURE__ */ c.jsxs(
    iy,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...f !== void 0 && { onOpenChange: f },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(cy, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(ly, { children: /* @__PURE__ */ c.jsx(
          dy,
          {
            ref: h,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: D(Tk({ intent: n }), m),
            ...p,
            children: t
          }
        ) })
      ]
    }
  )
);
Lk.displayName = "Tooltip";
const Ii = oe(
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
), $k = S.forwardRef(
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
    uploadingText: y = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: w = "アップロードに失敗しました",
    ...k
  }, C) => {
    const [E, N] = sn(!1), P = Tn(null), T = Me(
      (M) => {
        M.preventDefault(), M.stopPropagation(), E || N(!0);
      },
      [E]
    ), z = Me((M) => {
      M.preventDefault(), M.stopPropagation(), N(!1);
    }, []), V = Me((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), U = Me(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), N(!1), s) return;
        const _ = M.dataTransfer.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [s, r]
    ), Z = Me(() => {
      var M;
      s || (M = P.current) == null || M.click();
    }, [s]), j = Me(
      (M) => {
        const _ = M.target.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [r]
    ), H = E ? "dragging" : n, B = () => /* @__PURE__ */ c.jsx(
      Vm,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), K = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: h }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        De,
        {
          size: "xs",
          intent: "tertiary",
          icon: Rs,
          onClick: (M) => {
            M.stopPropagation(), Z();
          },
          children: v
        }
      )
    ] }), A = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      B(),
      /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        g,
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        De,
        {
          size: "xs",
          intent: "tertiary",
          className: "self-center",
          icon: Rs,
          onClick: (M) => {
            M.stopPropagation(), Z();
          },
          children: v
        }
      )
    ] }), I = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: D(Ii({ size: t, state: "default", disabled: s })),
        onDragEnter: T,
        onDragLeave: z,
        onDragOver: V,
        onDrop: U,
        onClick: Z,
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
              onChange: j,
              disabled: s
            }
          ),
          t === "small" ? K() : A()
        ]
      }
    ), re = () => {
      const M = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return H === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
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
          bs.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : H === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || M }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (_) => {
                _.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(Um, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Wm,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: m || b })
        ] })
      ] }) : H === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || M }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(Mm, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || w })
        ] })
      ] }) : null;
    }, R = () => t === "small" ? K() : A();
    return H === "inProgress" && i !== void 0 || H === "success" || H === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: D(e), ...k, children: [
      I(),
      re()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: D(
          Ii({ size: t, state: H, disabled: s }),
          e
        ),
        onDragEnter: T,
        onDragLeave: z,
        onDragOver: V,
        onDrop: U,
        onClick: Z,
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
              onChange: j,
              disabled: s
            }
          ),
          R()
        ]
      }
    );
  }
);
$k.displayName = "FileUploader";
export {
  Hk as Accordion,
  zk as AccountMenu,
  Xy as Badge,
  Jy as Breadcrumbs,
  De as Button,
  Of as Calendar,
  VC as Callout,
  Ar as Checkbox,
  HC as CheckboxGroup,
  Yk as DataSheet,
  Gf as DataSheetAction,
  If as DataSheetHeader,
  Lf as DataSheetKeyValue,
  Tf as DataSheetSection,
  Vf as DataSheetTable,
  Yf as DataSheetTableActionsCell,
  zf as DataSheetTableBody,
  Yr as DataSheetTableCell,
  Bf as DataSheetTableHeader,
  Hf as DataSheetTableRow,
  nS as DatePicker,
  Gk as Dialog,
  qu as Dropdown,
  Ku as DropdownContent,
  Uy as DropdownItem,
  qy as DropdownLabel,
  Ky as DropdownSeparator,
  Xu as DropdownTrigger,
  $k as FileUploader,
  ik as FooterProvider,
  Kk as FormField,
  Zk as Logo,
  WS as MultiSelect,
  Uk as MultiStepDialog,
  HS as Pagination,
  bs as ProgressIndicator,
  qk as RadioButton,
  Xk as RadioButtonGroup,
  ak as SearchBar,
  Ea as Select,
  lk as SideNavigation,
  um as SideNavigationCollapseButton,
  uk as SideNavigationItem,
  sk as SideNavigationProvider,
  mk as SideNavigationSection,
  Qk as StatusIndicator,
  xk as Stepper,
  bk as Switch,
  _k as Tab,
  Ok as TabBar,
  yk as Table,
  Ck as TableBody,
  Ek as TableCaption,
  Mk as TableCell,
  Sk as TableFooter,
  Nk as TableHead,
  Jk as TableHeadSortButton,
  wk as TableHeader,
  kk as TableRow,
  Pk as TableRowOverlay,
  Ri as Tag,
  Ik as TextArea,
  Uf as TextField,
  _f as TextLink,
  eN as ToastItem,
  tN as ToastProvider,
  Lk as Tooltip,
  nN as TooltipProvider,
  lS as colorCodeToTokenMap,
  sr as useSideNavigation
};
