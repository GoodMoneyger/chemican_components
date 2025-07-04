import * as l from "react";
import le, { forwardRef as Ta, createElement as yr, useState as Pa, useLayoutEffect as ka } from "react";
import * as kt from "react-dom";
import Aa from "react-dom";
function Na(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ot = { exports: {} }, Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Ia() {
  if (Ln) return Ct;
  Ln = 1;
  var e = le, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var d, m = {}, b = null, g = null;
    u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (m[d] = c[d]);
    if (a && a.defaultProps) for (d in c = a.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: a, key: b, ref: g, props: m, _owner: o.current };
  }
  return Ct.Fragment = r, Ct.jsx = i, Ct.jsxs = i, Ct;
}
var Et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function _a() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = le, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w = Symbol.iterator, p = "@@iterator";
    function v(h) {
      if (h === null || typeof h != "object")
        return null;
      var P = w && h[w] || h[p];
      return typeof P == "function" ? P : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(h) {
      {
        for (var P = arguments.length, I = new Array(P > 1 ? P - 1 : 0), B = 1; B < P; B++)
          I[B - 1] = arguments[B];
        C("error", h, I);
      }
    }
    function C(h, P, I) {
      {
        var B = y.ReactDebugCurrentFrame, te = B.getStackAddendum();
        te !== "" && (P += "%s", I = I.concat([te]));
        var se = I.map(function(J) {
          return String(J);
        });
        se.unshift("Warning: " + P), Function.prototype.apply.call(console[h], console, se);
      }
    }
    var E = !1, S = !1, N = !1, k = !1, R = !1, D;
    D = Symbol.for("react.module.reference");
    function U(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === s || R || h === o || h === u || h === d || k || h === g || E || S || N || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === m || h.$$typeof === i || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === D || h.getModuleId !== void 0));
    }
    function H(h, P, I) {
      var B = h.displayName;
      if (B)
        return B;
      var te = P.displayName || P.name || "";
      return te !== "" ? I + "(" + te + ")" : I;
    }
    function z(h) {
      return h.displayName || "Context";
    }
    function L(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var P = h;
            return z(P) + ".Consumer";
          case i:
            var I = h;
            return z(I._context) + ".Provider";
          case c:
            return H(h, h.render, "ForwardRef");
          case m:
            var B = h.displayName || null;
            return B !== null ? B : L(h.type) || "Memo";
          case b: {
            var te = h, se = te._payload, J = te._init;
            try {
              return L(J(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, F = 0, O, $, T, K, ae, fe, he;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function oe() {
      {
        if (F === 0) {
          O = console.log, $ = console.info, T = console.warn, K = console.error, ae = console.group, fe = console.groupCollapsed, he = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        F++;
      }
    }
    function ye() {
      {
        if (F--, F === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, h, {
              value: O
            }),
            info: A({}, h, {
              value: $
            }),
            warn: A({}, h, {
              value: T
            }),
            error: A({}, h, {
              value: K
            }),
            group: A({}, h, {
              value: ae
            }),
            groupCollapsed: A({}, h, {
              value: fe
            }),
            groupEnd: A({}, h, {
              value: he
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = y.ReactCurrentDispatcher, _;
    function Q(h, P, I) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (te) {
            var B = te.stack.trim().match(/\n( *(at )?)/);
            _ = B && B[1] || "";
          }
        return `
` + _ + h;
      }
    }
    var ie = !1, Y;
    {
      var Z = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Z();
    }
    function X(h, P) {
      if (!h || ie)
        return "";
      {
        var I = Y.get(h);
        if (I !== void 0)
          return I;
      }
      var B;
      ie = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = be.current, be.current = null, oe();
      try {
        if (P) {
          var J = function() {
            throw Error();
          };
          if (Object.defineProperty(J.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J, []);
            } catch (xe) {
              B = xe;
            }
            Reflect.construct(h, [], J);
          } else {
            try {
              J.call();
            } catch (xe) {
              B = xe;
            }
            h.call(J.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            B = xe;
          }
          h();
        }
      } catch (xe) {
        if (xe && B && typeof xe.stack == "string") {
          for (var q = xe.stack.split(`
`), ge = B.stack.split(`
`), ce = q.length - 1, ue = ge.length - 1; ce >= 1 && ue >= 0 && q[ce] !== ge[ue]; )
            ue--;
          for (; ce >= 1 && ue >= 0; ce--, ue--)
            if (q[ce] !== ge[ue]) {
              if (ce !== 1 || ue !== 1)
                do
                  if (ce--, ue--, ue < 0 || q[ce] !== ge[ue]) {
                    var Se = `
` + q[ce].replace(" at new ", " at ");
                    return h.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", h.displayName)), typeof h == "function" && Y.set(h, Se), Se;
                  }
                while (ce >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        ie = !1, be.current = se, ye(), Error.prepareStackTrace = te;
      }
      var at = h ? h.displayName || h.name : "", Je = at ? Q(at) : "";
      return typeof h == "function" && Y.set(h, Je), Je;
    }
    function ve(h, P, I) {
      return X(h, !1);
    }
    function Ee(h) {
      var P = h.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ie(h, P, I) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return X(h, Ee(h));
      if (typeof h == "string")
        return Q(h);
      switch (h) {
        case u:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return ve(h.render);
          case m:
            return Ie(h.type, P, I);
          case b: {
            var B = h, te = B._payload, se = B._init;
            try {
              return Ie(se(te), P, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, ze = {}, _t = y.ReactDebugCurrentFrame;
    function $e(h) {
      if (h) {
        var P = h._owner, I = Ie(h.type, h._source, P ? P.type : null);
        _t.setExtraStackFrame(I);
      } else
        _t.setExtraStackFrame(null);
    }
    function oa(h, P, I, B, te) {
      {
        var se = Function.call.bind(Te);
        for (var J in h)
          if (se(h, J)) {
            var q = void 0;
            try {
              if (typeof h[J] != "function") {
                var ge = Error((B || "React class") + ": " + I + " type `" + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[J] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              q = h[J](P, J, B, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              q = ce;
            }
            q && !(q instanceof Error) && ($e(te), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", I, J, typeof q), $e(null)), q instanceof Error && !(q.message in ze) && (ze[q.message] = !0, $e(te), x("Failed %s type: %s", I, q.message), $e(null));
          }
      }
    }
    var sa = Array.isArray;
    function hr(h) {
      return sa(h);
    }
    function ia(h) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, I = P && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return I;
      }
    }
    function aa(h) {
      try {
        return Tn(h), !1;
      } catch {
        return !0;
      }
    }
    function Tn(h) {
      return "" + h;
    }
    function Pn(h) {
      if (aa(h))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ia(h)), Tn(h);
    }
    var kn = y.ReactCurrentOwner, ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, Nn;
    function la(h) {
      if (Te.call(h, "ref")) {
        var P = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function ua(h) {
      if (Te.call(h, "key")) {
        var P = Object.getOwnPropertyDescriptor(h, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function da(h, P) {
      typeof h.ref == "string" && kn.current;
    }
    function fa(h, P) {
      {
        var I = function() {
          An || (An = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function pa(h, P) {
      {
        var I = function() {
          Nn || (Nn = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var ma = function(h, P, I, B, te, se, J) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: P,
        ref: I,
        props: J,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function ha(h, P, I, B, te) {
      {
        var se, J = {}, q = null, ge = null;
        I !== void 0 && (Pn(I), q = "" + I), ua(P) && (Pn(P.key), q = "" + P.key), la(P) && (ge = P.ref, da(P, te));
        for (se in P)
          Te.call(P, se) && !ca.hasOwnProperty(se) && (J[se] = P[se]);
        if (h && h.defaultProps) {
          var ce = h.defaultProps;
          for (se in ce)
            J[se] === void 0 && (J[se] = ce[se]);
        }
        if (q || ge) {
          var ue = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          q && fa(J, ue), ge && pa(J, ue);
        }
        return ma(h, q, ge, te, B, kn.current, J);
      }
    }
    var vr = y.ReactCurrentOwner, In = y.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var P = h._owner, I = Ie(h.type, h._source, P ? P.type : null);
        In.setExtraStackFrame(I);
      } else
        In.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function br(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function _n() {
      {
        if (vr.current) {
          var h = L(vr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function va(h) {
      return "";
    }
    var On = {};
    function ga(h) {
      {
        var P = _n();
        if (!P) {
          var I = typeof h == "string" ? h : h.displayName || h.name;
          I && (P = `

Check the top-level render call using <` + I + ">.");
        }
        return P;
      }
    }
    function jn(h, P) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var I = ga(P);
        if (On[I])
          return;
        On[I] = !0;
        var B = "";
        h && h._owner && h._owner !== vr.current && (B = " It was passed a child from " + L(h._owner.type) + "."), it(h), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, B), it(null);
      }
    }
    function Mn(h, P) {
      {
        if (typeof h != "object")
          return;
        if (hr(h))
          for (var I = 0; I < h.length; I++) {
            var B = h[I];
            br(B) && jn(B, P);
          }
        else if (br(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var te = v(h);
          if (typeof te == "function" && te !== h.entries)
            for (var se = te.call(h), J; !(J = se.next()).done; )
              br(J.value) && jn(J.value, P);
        }
      }
    }
    function ba(h) {
      {
        var P = h.type;
        if (P == null || typeof P == "string")
          return;
        var I;
        if (typeof P == "function")
          I = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === m))
          I = P.propTypes;
        else
          return;
        if (I) {
          var B = L(P);
          oa(I, h.props, "prop", B, h);
        } else if (P.PropTypes !== void 0 && !gr) {
          gr = !0;
          var te = L(P);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xa(h) {
      {
        for (var P = Object.keys(h.props), I = 0; I < P.length; I++) {
          var B = P[I];
          if (B !== "children" && B !== "key") {
            it(h), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), it(null);
            break;
          }
        }
        h.ref !== null && (it(h), x("Invalid attribute `ref` supplied to `React.Fragment`."), it(null));
      }
    }
    var Dn = {};
    function Fn(h, P, I, B, te, se) {
      {
        var J = U(h);
        if (!J) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = va();
          ge ? q += ge : q += _n();
          var ce;
          h === null ? ce = "null" : hr(h) ? ce = "array" : h !== void 0 && h.$$typeof === t ? (ce = "<" + (L(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof h, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, q);
        }
        var ue = ha(h, P, I, te, se);
        if (ue == null)
          return ue;
        if (J) {
          var Se = P.children;
          if (Se !== void 0)
            if (B)
              if (hr(Se)) {
                for (var at = 0; at < Se.length; at++)
                  Mn(Se[at], h);
                Object.freeze && Object.freeze(Se);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mn(Se, h);
        }
        if (Te.call(P, "key")) {
          var Je = L(h), xe = Object.keys(P).filter(function(Ra) {
            return Ra !== "key";
          }), xr = xe.length > 0 ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dn[Je + xr]) {
            var Sa = xe.length > 0 ? "{" + xe.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xr, Je, Sa, Je), Dn[Je + xr] = !0;
          }
        }
        return h === n ? xa(ue) : ba(ue), ue;
      }
    }
    function ya(h, P, I) {
      return Fn(h, P, I, !0);
    }
    function wa(h, P, I) {
      return Fn(h, P, I, !1);
    }
    var Ca = wa, Ea = ya;
    Et.Fragment = n, Et.jsx = Ca, Et.jsxs = Ea;
  }()), Et;
}
var Vn;
function Oa() {
  return Vn || (Vn = 1, process.env.NODE_ENV === "production" ? Ot.exports = Ia() : Ot.exports = _a()), Ot.exports;
}
var f = Oa();
function So(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = So(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ja() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = So(e)) && (n && (n += " "), n += t);
  return n;
}
const Bn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wn = ja, De = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Wn(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const d = r == null ? void 0 : r[u], m = s == null ? void 0 : s[u];
    if (d === null) return null;
    const b = Bn(d) || Bn(m);
    return o[u][b];
  }), a = r && Object.entries(r).reduce((u, d) => {
    let [m, b] = d;
    return b === void 0 || (u[m] = b), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: m, className: b, ...g } = d;
    return Object.entries(g).every((w) => {
      let [p, v] = w;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === v;
    }) ? [
      ...u,
      m,
      b
    ] : u;
  }, []);
  return Wn(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var wr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var zn;
function Ma() {
  return zn || (zn = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          a && (s = o(s, n(a)));
        }
        return s;
      }
      function n(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var i = "";
        for (var a in s)
          t.call(s, a) && s[a] && (i = o(i, a));
        return i;
      }
      function o(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(wr)), wr.exports;
}
var Da = Ma();
const ne = /* @__PURE__ */ Na(Da);
function Un(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ro(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Un(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : Un(e[o], null);
        }
      };
  };
}
function ee(...e) {
  return l.useCallback(Ro(...e), e);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  const t = /* @__PURE__ */ La(e), r = l.forwardRef((n, o) => {
    const { children: s, ...i } = n, a = l.Children.toArray(s), c = a.find(Va);
    if (c) {
      const u = c.props.children, d = a.map((m) => m === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ f.jsx(t, { ...i, ref: o, children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ f.jsx(t, { ...i, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Fa = /* @__PURE__ */ mt("Slot");
// @__NO_SIDE_EFFECTS__
function La(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const i = Wa(o), a = Ba(s, o.props);
      return o.type !== l.Fragment && (a.ref = n ? Ro(n, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var $a = Symbol("radix.slottable");
function Va(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $a;
}
function Ba(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Wa(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const en = "-", za = (e) => {
  const t = Ha(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(en);
      return a[0] === "" && a.length !== 1 && a.shift(), To(a, t) || Ua(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = r[i] || [];
      return a && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, To = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? To(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(en);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Hn = /^\[(.+)\]$/, Ua = (e) => {
  if (Hn.test(e)) {
    const t = Hn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ha = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Dr(r[o], n, o, t);
  return n;
}, Dr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Gn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ga(o)) {
        Dr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Dr(i, Gn(t, s), r, n);
    });
  });
}, Gn = (e, t) => {
  let r = e;
  return t.split(en).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ga = (e) => e.isThemeGetter, Ka = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = n.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : o(s, i);
    }
  };
}, Fr = "!", Lr = ":", Ya = Lr.length, Xa = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let i = 0, a = 0, c = 0, u;
    for (let w = 0; w < o.length; w++) {
      let p = o[w];
      if (i === 0 && a === 0) {
        if (p === Lr) {
          s.push(o.slice(c, w)), c = w + Ya;
          continue;
        }
        if (p === "/") {
          u = w;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? a++ : p === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(c), m = qa(d), b = m !== d, g = u && u > c ? u - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Lr, s = n;
    n = (i) => i.startsWith(o) ? s(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, qa = (e) => e.endsWith(Fr) ? e.substring(0, e.length - 1) : e.startsWith(Fr) ? e.substring(1) : e, Za = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...s.sort(), i), s = []) : s.push(i);
    }), o.push(...s.sort()), o;
  };
}, Ja = (e) => ({
  cache: Ka(e.cacheSize),
  parseClassName: Xa(e),
  sortModifiers: Za(e),
  ...za(e)
}), Qa = /\s+/, ec = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Qa);
  let c = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: m,
      modifiers: b,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: p
    } = r(d);
    if (m) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let v = !!p, y = n(v ? w.substring(0, p) : w);
    if (!y) {
      if (!v) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = n(w), !y) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      v = !1;
    }
    const x = s(b).join(":"), C = g ? x + Fr : x, E = C + y;
    if (i.includes(E))
      continue;
    i.push(E);
    const S = o(y, v);
    for (let N = 0; N < S.length; ++N) {
      const k = S[N];
      i.push(C + k);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function tc() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Po(t)) && (n && (n += " "), n += r);
  return n;
}
const Po = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Po(e[n])) && (r && (r += " "), r += t);
  return r;
};
function rc(e, ...t) {
  let r, n, o, s = i;
  function i(c) {
    const u = t.reduce((d, m) => m(d), e());
    return r = Ja(u), n = r.cache.get, o = r.cache.set, s = a, a(c);
  }
  function a(c) {
    const u = n(c);
    if (u)
      return u;
    const d = ec(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(tc.apply(null, arguments));
  };
}
const de = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ko = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ao = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nc = /^\d+\/\d+$/, oc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ic = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ac = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ct = (e) => nc.test(e), G = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), Cr = (e) => e.endsWith("%") && G(e.slice(0, -1)), Ve = (e) => oc.test(e), lc = () => !0, uc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  sc.test(e) && !ic.test(e)
), No = () => !1, dc = (e) => ac.test(e), fc = (e) => cc.test(e), pc = (e) => !j(e) && !M(e), mc = (e) => vt(e, Oo, No), j = (e) => ko.test(e), Qe = (e) => vt(e, jo, uc), Er = (e) => vt(e, xc, G), Kn = (e) => vt(e, Io, No), hc = (e) => vt(e, _o, fc), jt = (e) => vt(e, Mo, dc), M = (e) => Ao.test(e), St = (e) => gt(e, jo), vc = (e) => gt(e, yc), Yn = (e) => gt(e, Io), gc = (e) => gt(e, Oo), bc = (e) => gt(e, _o), Mt = (e) => gt(e, Mo, !0), vt = (e, t, r) => {
  const n = ko.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, gt = (e, t, r = !1) => {
  const n = Ao.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Io = (e) => e === "position" || e === "percentage", _o = (e) => e === "image" || e === "url", Oo = (e) => e === "length" || e === "size" || e === "bg-size", jo = (e) => e === "length", xc = (e) => e === "number", yc = (e) => e === "family-name", Mo = (e) => e === "shadow", wc = () => {
  const e = de("color"), t = de("font"), r = de("text"), n = de("font-weight"), o = de("tracking"), s = de("leading"), i = de("breakpoint"), a = de("container"), c = de("spacing"), u = de("radius"), d = de("shadow"), m = de("inset-shadow"), b = de("text-shadow"), g = de("drop-shadow"), w = de("blur"), p = de("perspective"), v = de("aspect"), y = de("ease"), x = de("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], S = () => [...E(), M, j], N = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], R = () => [M, j, c], D = () => [ct, "full", "auto", ...R()], U = () => [Ue, "none", "subgrid", M, j], H = () => ["auto", {
    span: ["full", Ue, M, j]
  }, Ue, M, j], z = () => [Ue, "auto", M, j], L = () => ["auto", "min", "max", "fr", M, j], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...R()], $ = () => [ct, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], T = () => [e, M, j], K = () => [...E(), Yn, Kn, {
    position: [M, j]
  }], ae = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], fe = () => ["auto", "cover", "contain", gc, mc, {
    size: [M, j]
  }], he = () => [Cr, St, Qe], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    M,
    j
  ], oe = () => ["", G, St, Qe], ye = () => ["solid", "dashed", "dotted", "double"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => [G, Cr, Yn, Kn], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    M,
    j
  ], ie = () => ["none", G, M, j], Y = () => ["none", G, M, j], Z = () => [G, M, j], X = () => [ct, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ve],
      breakpoint: [Ve],
      color: [lc],
      container: [Ve],
      "drop-shadow": [Ve],
      ease: ["in", "out", "in-out"],
      font: [pc],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ve],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ve],
      shadow: [Ve],
      spacing: ["px", G],
      text: [Ve],
      "text-shadow": [Ve],
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
        aspect: ["auto", "square", ct, j, M, v]
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
        columns: [G, j, M, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
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
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        z: [Ue, "auto", M, j]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ct, "full", "auto", a, ...R()]
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
        flex: [G, ct, "auto", "initial", "none", j]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", G, M, j]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", G, M, j]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", M, j]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": U()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: H()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: H()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...A(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...F(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...F()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...A()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...F(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...F(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": A()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...F(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...F()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
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
        "space-y": R()
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
        size: $()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...$()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...$()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, St, Qe]
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
        font: [n, M, Er]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Cr, j]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vc, j, t]
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
        tracking: [o, M, j]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [G, "none", M, Er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M, j]
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
        list: ["disc", "decimal", "none", M, j]
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
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
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
        decoration: [...ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [G, "from-font", "auto", M, Qe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [G, "auto", M, j]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M, j]
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
        content: ["none", M, j]
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
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ae()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: fe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, M, j],
          radial: ["", M, j],
          conic: [Ue, M, j]
        }, bc, hc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: he()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: he()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: he()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: re()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": re()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": re()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": re()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": re()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": re()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": re()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": re()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": re()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": re()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": re()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": re()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": re()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": re()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": re()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: oe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": oe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": oe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": oe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": oe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": oe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": oe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": oe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": oe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": oe()
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
        "divide-y": oe()
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
        border: [...ye(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ye(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ye(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, M, j]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", G, St, Qe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
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
          d,
          Mt,
          jt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, Mt, jt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: oe()
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
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [G, Qe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": oe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Mt, jt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [G, M, j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...be(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
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
        "mask-linear": [G]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [M, j]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
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
        "mask-conic": [G]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
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
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ae()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: fe()
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
        mask: ["none", M, j]
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
          M,
          j
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
        brightness: [G, M, j]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [G, M, j]
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
          g,
          Mt,
          jt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", G, M, j]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [G, M, j]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", G, M, j]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [G, M, j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", G, M, j]
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
          M,
          j
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
        "backdrop-brightness": [G, M, j]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [G, M, j]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", G, M, j]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [G, M, j]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", G, M, j]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [G, M, j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G, M, j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", G, M, j]
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
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", M, j]
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
        duration: [G, "initial", M, j]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, M, j]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [G, M, j]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, M, j]
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
        perspective: [p, M, j]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ie()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ie()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ie()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ie()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Y()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Y()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Y()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Y()
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
        skew: Z()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Z()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Z()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [M, j, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
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
        translate: X()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": X()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": X()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": X()
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
        accent: T()
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
        caret: T()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M, j]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", M, j]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [G, St, Qe, Er]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
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
}, pe = /* @__PURE__ */ rc(wc), Xn = De(
  `inline-flex cursor-pointer items-center justify-center gap-xxs rounded-sm
  border border-transparent font-medium decoration-1 focus-visible:ring-2
  focus-visible:ring-interactive-light focus-visible:ring-offset-2
  focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline`,
  {
    variants: {
      intent: {
        primary: `bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,
        secondary: `border bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active enabled:border-interactive-light
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,
        tertiary: `border border-interactive-muted
        bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-light disabled:bg-interactive-disabled`,
        ghost: `text-interactive-primary-default underline
        hover:text-interactive-primary-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled`
      },
      size: {
        xs: "h-8 min-w-15 px-xs text-sm",
        sm: "h-10 min-w-20 px-lg",
        md: "h-[2.875rem] min-w-1.5",
        lg: "h-14 min-w-36 text-lg"
      },
      iconOnly: {
        true: "aspect-square h-auto min-w-auto"
      },
      textOnly: {
        true: ""
      }
    },
    compoundVariants: [
      {
        iconOnly: !0,
        intent: "ghost",
        class: "text-shape-interactive-primary-default"
      },
      { textOnly: !0, size: "md", class: "px-xl" },
      { textOnly: !0, size: "lg", class: "px-md" },
      { iconOnly: !1, size: "md", class: "px-xl" },
      { iconOnly: !1, size: "lg", class: "px-md" },
      { iconOnly: !0, size: "xs", class: "px-xxs" },
      { iconOnly: !0, size: "sm", class: "px-xs" },
      { iconOnly: !0, size: "md", class: "px-sm" },
      { iconOnly: !0, size: "lg", class: "px-md" }
    ],
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), Cc = De("", {
  variants: {
    ghost: {
      true: ""
    },
    iconOnly: {
      true: ""
    },
    size: {
      xs: "size-[0.875rem]",
      sm: "size-[0.875rem]",
      md: "size-[0.875rem]",
      lg: "size-4"
    }
  },
  compoundVariants: [
    { iconOnly: !0, size: "xs", ghost: !0, class: "size-4" },
    { iconOnly: !0, size: "sm", ghost: !0, class: "size-4" },
    { iconOnly: !0, size: "md", ghost: !0, class: "size-4" },
    { iconOnly: !0, size: "lg", ghost: !0, class: "size-6" }
  ],
  defaultVariants: {
    size: "md"
  }
}), $r = le.forwardRef(
  ({ intent: e, size: t, className: r, icon: n, asChild: o = !1, children: s, ...i }, a) => {
    const c = o ? Fa : "button", u = !!(n && !s), d = !!(s && !n);
    if (n) {
      const m = n;
      return /* @__PURE__ */ f.jsxs(
        c,
        {
          ref: a,
          className: pe(
            ne(
              Xn({ intent: e, size: t, iconOnly: u, textOnly: d }),
              r
            )
          ),
          ...i,
          children: [
            /* @__PURE__ */ f.jsx(
              m,
              {
                className: pe(
                  Cc({ size: t, iconOnly: u, ghost: e === "ghost" })
                )
              }
            ),
            s
          ]
        }
      );
    }
    return /* @__PURE__ */ f.jsx(
      c,
      {
        ref: a,
        className: pe(
          ne(Xn({ intent: e, size: t, textOnly: d }), r)
        ),
        children: s,
        ...i
      }
    );
  }
);
$r.displayName = "Button";
function Ec(e, t) {
  const r = l.createContext(t), n = (s) => {
    const { children: i, ...a } = s, c = l.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f.jsx(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const i = l.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Ne(e, t = []) {
  let r = [];
  function n(s, i) {
    const a = l.createContext(i), c = r.length;
    r = [...r, i];
    const u = (m) => {
      var y;
      const { scope: b, children: g, ...w } = m, p = ((y = b == null ? void 0 : b[e]) == null ? void 0 : y[c]) || a, v = l.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ f.jsx(p.Provider, { value: v, children: g });
    };
    u.displayName = s + "Provider";
    function d(m, b) {
      var p;
      const g = ((p = b == null ? void 0 : b[e]) == null ? void 0 : p[c]) || a, w = l.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = r.map((i) => l.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [n, Sc(o, ...t)];
}
function Sc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = n.reduce((a, { useScope: c, scopeName: u }) => {
        const m = c(s)[`__scope${u}`];
        return { ...a, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function V(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var me = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, Rc = l[" useInsertionEffect ".trim().toString()] || me;
function Ke({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, i] = Tc({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, c = a ? e : o;
  {
    const d = l.useRef(e !== void 0);
    l.useEffect(() => {
      const m = d.current;
      m !== a && console.warn(
        `${n} is changing from ${m ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, n]);
  }
  const u = l.useCallback(
    (d) => {
      var m;
      if (a) {
        const b = Pc(d) ? d(e) : d;
        b !== e && ((m = i.current) == null || m.call(i, b));
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [c, u];
}
function Tc({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = l.useState(e), o = l.useRef(r), s = l.useRef(t);
  return Rc(() => {
    s.current = t;
  }, [t]), l.useEffect(() => {
    var i;
    o.current !== r && ((i = s.current) == null || i.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function Pc(e) {
  return typeof e == "function";
}
function er(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function tr(e) {
  const [t, r] = l.useState(void 0);
  return me(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        r({ width: i, height: a });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function kc(e, t) {
  return l.useReducer((r, n) => t[r][n] ?? r, e);
}
var bt = (e) => {
  const { present: t, children: r } = e, n = Ac(t), o = typeof r == "function" ? r({ present: n.isPresent }) : l.Children.only(r), s = ee(n.ref, Nc(o));
  return typeof r == "function" || n.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
bt.displayName = "Presence";
function Ac(e) {
  const [t, r] = l.useState(), n = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = kc(i, {
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
  return l.useEffect(() => {
    const u = Dt(n.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), me(() => {
    const u = n.current, d = o.current;
    if (d !== e) {
      const b = s.current, g = Dt(u);
      e ? c("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && b !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), me(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, m = (g) => {
        const p = Dt(n.current).includes(g.animationName);
        if (g.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, b = (g) => {
        g.target === t && (s.current = Dt(n.current));
      };
      return t.addEventListener("animationstart", b), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", b), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: l.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function Dt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Nc(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Ic = [
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
], W = Ic.reduce((e, t) => {
  const r = /* @__PURE__ */ mt(`Primitive.${t}`), n = l.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(c, { ...a, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Do(e, t) {
  e && kt.flushSync(() => e.dispatchEvent(t));
}
var rr = "Checkbox", [_c, zp] = Ne(rr), [Oc, tn] = _c(rr);
function jc(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: s,
    form: i,
    name: a,
    onCheckedChange: c,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [b, g] = Ke({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: rr
  }), [w, p] = l.useState(null), [v, y] = l.useState(null), x = l.useRef(!1), C = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: b,
    disabled: s,
    setChecked: g,
    control: w,
    setControl: p,
    name: a,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: x,
    required: u,
    defaultChecked: Ge(o) ? !1 : o,
    isFormControl: C,
    bubbleInput: v,
    setBubbleInput: y
  };
  return /* @__PURE__ */ f.jsx(
    Oc,
    {
      scope: t,
      ...E,
      children: Mc(m) ? m(E) : n
    }
  );
}
var Fo = "CheckboxTrigger", Lo = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: s,
      value: i,
      disabled: a,
      checked: c,
      required: u,
      setControl: d,
      setChecked: m,
      hasConsumerStoppedPropagationRef: b,
      isFormControl: g,
      bubbleInput: w
    } = tn(Fo, e), p = ee(o, d), v = l.useRef(c);
    return l.useEffect(() => {
      const y = s == null ? void 0 : s.form;
      if (y) {
        const x = () => m(v.current);
        return y.addEventListener("reset", x), () => y.removeEventListener("reset", x);
      }
    }, [s, m]), /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ge(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": Uo(c),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...n,
        ref: p,
        onKeyDown: V(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: V(r, (y) => {
          m((x) => Ge(x) ? !0 : !x), w && g && (b.current = y.isPropagationStopped(), b.current || y.stopPropagation());
        })
      }
    );
  }
);
Lo.displayName = Fo;
var $o = l.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: c,
      onCheckedChange: u,
      form: d,
      ...m
    } = e;
    return /* @__PURE__ */ f.jsx(
      jc,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: s,
        disabled: a,
        required: i,
        onCheckedChange: u,
        name: n,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: b }) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx(
            Lo,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          b && /* @__PURE__ */ f.jsx(
            zo,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
$o.displayName = rr;
var Vo = "CheckboxIndicator", Bo = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, s = tn(Vo, r);
    return /* @__PURE__ */ f.jsx(
      bt,
      {
        present: n || Ge(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          W.span,
          {
            "data-state": Uo(s.checked),
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
Bo.displayName = Vo;
var Wo = "CheckboxBubbleInput", zo = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: c,
      name: u,
      value: d,
      form: m,
      bubbleInput: b,
      setBubbleInput: g
    } = tn(Wo, e), w = ee(r, g), p = er(s), v = tr(n);
    l.useEffect(() => {
      const x = b;
      if (!x) return;
      const C = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, N = !o.current;
      if (p !== s && S) {
        const k = new Event("click", { bubbles: N });
        x.indeterminate = Ge(s), S.call(x, Ge(s) ? !1 : s), x.dispatchEvent(k);
      }
    }, [b, p, s, o]);
    const y = l.useRef(Ge(s) ? !1 : s);
    return /* @__PURE__ */ f.jsx(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: a,
        disabled: c,
        name: u,
        value: d,
        form: m,
        ...t,
        tabIndex: -1,
        ref: w,
        style: {
          ...t.style,
          ...v,
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
zo.displayName = Wo;
function Mc(e) {
  return typeof e == "function";
}
function Ge(e) {
  return e === "indeterminate";
}
function Uo(e) {
  return Ge(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dc = {
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
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t, r, n) => {
  const o = Ta(
    ({ color: s = "currentColor", size: i = 24, stroke: a = 2, title: c, className: u, children: d, ...m }, b) => yr(
      "svg",
      {
        ref: b,
        ...Dc[e],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${t}`, u].join(" "),
        ...e === "filled" ? {
          fill: s
        } : {
          strokeWidth: a,
          stroke: s
        },
        ...m
      },
      [
        c && yr("title", { key: "svg-title" }, c),
        ...n.map(([g, w]) => yr(g, w)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return o.displayName = `${r}`, o;
};
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fc = st("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lc = st("outline", "chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ho = st("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $c = st("filled", "circle-check-filled", "IconCircleCheckFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vc = st("filled", "circle-x-filled", "IconCircleXFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bc = st("filled", "exclamation-circle-filled", "IconExclamationCircleFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wc = st("filled", "info-circle-filled", "IconInfoCircleFilled", [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]]);
const zc = De("flex w-fit cursor-pointer items-center gap-xs", {
  variants: {
    disabled: {
      true: "cursor-not-allowed text-body-disabled",
      false: "cursor-pointer text-body-primary"
    }
  }
}), Uc = De(
  `size-[1rem] cursor-[inherit] rounded-xs border-[1.5px] border-input-default
  text-body-primary outline-none focus-visible:border-input-focused
  focus-visible:ring-2 focus-visible:ring-input-focused
  data-[state=checked]:border-input-selected
  data-[state=checked]:bg-input-selected`,
  {
    variants: {
      disabled: {
        true: "border-transparent bg-input-disabled",
        false: ""
        // Correct hover state currently missing in Figma.
      },
      invalid: {
        true: `border-input-alert text-body-alert
        data-[state=checked]:border-interactive-danger
        data-[state=checked]:bg-status-alert`
      }
    },
    defaultVariants: {
      disabled: !1,
      invalid: !1
    }
  }
), Up = ({
  disabled: e,
  invalid: t,
  label: r,
  id: n,
  children: o,
  ...s
}) => {
  const i = n || `checkbox-${r}`;
  return /* @__PURE__ */ f.jsxs("div", { className: ne(pe(zc({ disabled: e }))), children: [
    /* @__PURE__ */ f.jsx(
      $o,
      {
        id: i,
        className: pe(Uc({ disabled: e, invalid: t })),
        disabled: e,
        ...s,
        children: /* @__PURE__ */ f.jsx(
          Bo,
          {
            className: `relative flex size-full cursor-[inherit] items-center
            justify-center bg-inherit text-interactive-inverse`,
            children: /* @__PURE__ */ f.jsx(Fc, { style: { strokeWidth: 3 } })
          }
        )
      }
    ),
    (r || o) && /* @__PURE__ */ f.jsxs(
      "label",
      {
        htmlFor: i,
        className: `flex cursor-[inherit] items-center gap-xs text-inherit
          select-none`,
        children: [
          r,
          o
        ]
      }
    )
  ] });
}, Hp = ({
  children: e,
  className: t
}) => /* @__PURE__ */ f.jsx("div", { className: pe(ne(t)), children: e }), Gp = ({
  children: e,
  className: t,
  accentColor: r
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: pe(
      ne(
        `inline-flex items-center rounded-full bg-status-neutral px-xs py-xxs
          font-medium text-accent-gray-soft`,
        t
      )
    ),
    style: {
      backgroundColor: `var(${r})`
    },
    children: e
  }
);
var Hc = l[" useId ".trim().toString()] || (() => {
}), Gc = 0;
function et(e) {
  const [t, r] = l.useState(Hc());
  return me(() => {
    r((n) => n ?? String(Gc++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function Re(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Kc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Re(e);
  l.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Yc = "DismissableLayer", Vr = "dismissableLayer.update", Xc = "dismissableLayer.pointerDownOutside", qc = "dismissableLayer.focusOutside", qn, Go = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), nr = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = l.useContext(Go), [d, m] = l.useState(null), b = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = l.useState({}), w = ee(t, (k) => m(k)), p = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = p.indexOf(v), x = d ? p.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = x >= y, S = Jc((k) => {
      const R = k.target, D = [...u.branches].some((U) => U.contains(R));
      !E || D || (o == null || o(k), i == null || i(k), k.defaultPrevented || a == null || a());
    }, b), N = Qc((k) => {
      const R = k.target;
      [...u.branches].some((U) => U.contains(R)) || (s == null || s(k), i == null || i(k), k.defaultPrevented || a == null || a());
    }, b);
    return Kc((k) => {
      x === u.layers.size - 1 && (n == null || n(k), !k.defaultPrevented && a && (k.preventDefault(), a()));
    }, b), l.useEffect(() => {
      if (d)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (qn = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Zn(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = qn);
        };
    }, [d, b, r, u]), l.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Zn());
    }, [d, u]), l.useEffect(() => {
      const k = () => g({});
      return document.addEventListener(Vr, k), () => document.removeEventListener(Vr, k);
    }, []), /* @__PURE__ */ f.jsx(
      W.div,
      {
        ...c,
        ref: w,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: V(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: V(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: V(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
nr.displayName = Yc;
var Zc = "DismissableLayerBranch", Ko = l.forwardRef((e, t) => {
  const r = l.useContext(Go), n = l.useRef(null), o = ee(t, n);
  return l.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ f.jsx(W.div, { ...e, ref: o });
});
Ko.displayName = Zc;
function Jc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Re(e), n = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (a) => {
      if (a.target && !n.current) {
        let c = function() {
          Yo(
            Xc,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Qc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Re(e), n = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && Yo(qc, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Zn() {
  const e = new CustomEvent(Vr);
  document.dispatchEvent(e);
}
function Yo(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Do(o, s) : o.dispatchEvent(s);
}
var el = nr, tl = Ko, Sr = "focusScope.autoFocusOnMount", Rr = "focusScope.autoFocusOnUnmount", Jn = { bubbles: !1, cancelable: !0 }, rl = "FocusScope", rn = l.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, c] = l.useState(null), u = Re(o), d = Re(s), m = l.useRef(null), b = ee(t, (p) => c(p)), g = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (n) {
      let p = function(C) {
        if (g.paused || !a) return;
        const E = C.target;
        a.contains(E) ? m.current = E : He(m.current, { select: !0 });
      }, v = function(C) {
        if (g.paused || !a) return;
        const E = C.relatedTarget;
        E !== null && (a.contains(E) || He(m.current, { select: !0 }));
      }, y = function(C) {
        if (document.activeElement === document.body)
          for (const S of C)
            S.removedNodes.length > 0 && He(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const x = new MutationObserver(y);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [n, a, g.paused]), l.useEffect(() => {
    if (a) {
      eo.add(g);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const y = new CustomEvent(Sr, Jn);
        a.addEventListener(Sr, u), a.dispatchEvent(y), y.defaultPrevented || (nl(cl(Xo(a)), { select: !0 }), document.activeElement === p && He(a));
      }
      return () => {
        a.removeEventListener(Sr, u), setTimeout(() => {
          const y = new CustomEvent(Rr, Jn);
          a.addEventListener(Rr, d), a.dispatchEvent(y), y.defaultPrevented || He(p ?? document.body, { select: !0 }), a.removeEventListener(Rr, d), eo.remove(g);
        }, 0);
      };
    }
  }, [a, u, d, g]);
  const w = l.useCallback(
    (p) => {
      if (!r && !n || g.paused) return;
      const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, y = document.activeElement;
      if (v && y) {
        const x = p.currentTarget, [C, E] = ol(x);
        C && E ? !p.shiftKey && y === E ? (p.preventDefault(), r && He(C, { select: !0 })) : p.shiftKey && y === C && (p.preventDefault(), r && He(E, { select: !0 })) : y === x && p.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ f.jsx(W.div, { tabIndex: -1, ...i, ref: b, onKeyDown: w });
});
rn.displayName = rl;
function nl(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (He(n, { select: t }), document.activeElement !== r) return;
}
function ol(e) {
  const t = Xo(e), r = Qn(t, e), n = Qn(t.reverse(), e);
  return [r, n];
}
function Xo(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Qn(e, t) {
  for (const r of e)
    if (!sl(r, { upTo: t })) return r;
}
function sl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function il(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && il(e) && t && e.select();
  }
}
var eo = al();
function al() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = to(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = to(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function to(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function cl(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ll = "Portal", nn = l.forwardRef((e, t) => {
  var a;
  const { container: r, ...n } = e, [o, s] = l.useState(!1);
  me(() => s(!0), []);
  const i = r || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Aa.createPortal(/* @__PURE__ */ f.jsx(W.div, { ...n, ref: t }), i) : null;
});
nn.displayName = ll;
var Tr = 0;
function qo() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ro()), document.body.insertAdjacentElement("beforeend", e[1] ?? ro()), Tr++, () => {
      Tr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Tr--;
    };
  }, []);
}
function ro() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _e = function() {
  return _e = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function Zo(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function ul(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var zt = "right-scroll-bar-position", Ut = "width-before-scroll-bar", dl = "with-scroll-bars-hidden", fl = "--removed-body-scroll-bar-size";
function Pr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pl(e, t) {
  var r = Pa(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var ml = typeof window < "u" ? l.useLayoutEffect : l.useEffect, no = /* @__PURE__ */ new WeakMap();
function hl(e, t) {
  var r = pl(null, function(n) {
    return e.forEach(function(o) {
      return Pr(o, n);
    });
  });
  return ml(function() {
    var n = no.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), i = r.current;
      o.forEach(function(a) {
        s.has(a) || Pr(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Pr(a, i);
      });
    }
    no.set(r, e);
  }, [e]), r;
}
function vl(e) {
  return e;
}
function gl(e, t) {
  t === void 0 && (t = vl);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, n);
      return r.push(i), function() {
        r = r.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(s);
      }
      r = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var i = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(s), i = r;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), r = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), r;
        }
      };
    }
  };
  return o;
}
function bl(e) {
  e === void 0 && (e = {});
  var t = gl(null);
  return t.options = _e({ async: !0, ssr: !1 }, e), t;
}
var Jo = function(e) {
  var t = e.sideCar, r = Zo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return l.createElement(n, _e({}, r));
};
Jo.isSideCarExport = !0;
function xl(e, t) {
  return e.useMedium(t), Jo;
}
var Qo = bl(), kr = function() {
}, or = l.forwardRef(function(e, t) {
  var r = l.useRef(null), n = l.useState({
    onScrollCapture: kr,
    onWheelCapture: kr,
    onTouchMoveCapture: kr
  }), o = n[0], s = n[1], i = e.forwardProps, a = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, m = e.shards, b = e.sideCar, g = e.noRelative, w = e.noIsolation, p = e.inert, v = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, C = e.gapMode, E = Zo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = b, N = hl([r, t]), k = _e(_e({}, E), o);
  return l.createElement(
    l.Fragment,
    null,
    d && l.createElement(S, { sideCar: Qo, removeScrollBar: u, shards: m, noRelative: g, noIsolation: w, inert: p, setCallbacks: s, allowPinchZoom: !!v, lockRef: r, gapMode: C }),
    i ? l.cloneElement(l.Children.only(a), _e(_e({}, k), { ref: N })) : l.createElement(x, _e({}, k, { className: c, ref: N }), a)
  );
});
or.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
or.classNames = {
  fullWidth: Ut,
  zeroRight: zt
};
var yl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yl();
  return t && e.setAttribute("nonce", t), e;
}
function Cl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function El(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Sl = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = wl()) && (Cl(t, r), El(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Rl = function() {
  var e = Sl();
  return function(t, r) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, es = function() {
  var e = Rl(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Tl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ar = function(e) {
  return parseInt(e || "", 10) || 0;
}, Pl = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ar(r), Ar(n), Ar(o)];
}, kl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Tl;
  var t = Pl(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Al = es(), ft = "data-scroll-locked", Nl = function(e, t, r, n) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(dl, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(ft, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(zt, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Ut, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(zt, " .").concat(zt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ut, " .").concat(Ut, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(ft, `] {
    `).concat(fl, ": ").concat(a, `px;
  }
`);
}, oo = function() {
  var e = parseInt(document.body.getAttribute(ft) || "0", 10);
  return isFinite(e) ? e : 0;
}, Il = function() {
  l.useEffect(function() {
    return document.body.setAttribute(ft, (oo() + 1).toString()), function() {
      var e = oo() - 1;
      e <= 0 ? document.body.removeAttribute(ft) : document.body.setAttribute(ft, e.toString());
    };
  }, []);
}, _l = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Il();
  var s = l.useMemo(function() {
    return kl(o);
  }, [o]);
  return l.createElement(Al, { styles: Nl(s, !t, o, r ? "" : "!important") });
}, Br = !1;
if (typeof window < "u")
  try {
    var Ft = Object.defineProperty({}, "passive", {
      get: function() {
        return Br = !0, !0;
      }
    });
    window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Br = !1;
  }
var lt = Br ? { passive: !1 } : !1, Ol = function(e) {
  return e.tagName === "TEXTAREA";
}, ts = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Ol(e) && r[t] === "visible")
  );
}, jl = function(e) {
  return ts(e, "overflowY");
}, Ml = function(e) {
  return ts(e, "overflowX");
}, so = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = rs(e, n);
    if (o) {
      var s = ns(e, n), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Dl = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Fl = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, rs = function(e, t) {
  return e === "v" ? jl(t) : Ml(t);
}, ns = function(e, t) {
  return e === "v" ? Dl(t) : Fl(t);
}, Ll = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $l = function(e, t, r, n, o) {
  var s = Ll(e, window.getComputedStyle(t).direction), i = s * n, a = r.target, c = t.contains(a), u = !1, d = i > 0, m = 0, b = 0;
  do {
    if (!a)
      break;
    var g = ns(e, a), w = g[0], p = g[1], v = g[2], y = p - v - s * w;
    (w || y) && rs(e, a) && (m += y, b += w);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && Math.abs(m) < 1 || !d && Math.abs(b) < 1) && (u = !0), u;
}, Lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, io = function(e) {
  return [e.deltaX, e.deltaY];
}, ao = function(e) {
  return e && "current" in e ? e.current : e;
}, Vl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Wl = 0, ut = [];
function zl(e) {
  var t = l.useRef([]), r = l.useRef([0, 0]), n = l.useRef(), o = l.useState(Wl++)[0], s = l.useState(es)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = ul([e.lockRef.current], (e.shards || []).map(ao), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = l.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = Lt(p), x = r.current, C = "deltaX" in p ? p.deltaX : x[0] - y[0], E = "deltaY" in p ? p.deltaY : x[1] - y[1], S, N = p.target, k = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in p && k === "h" && N.type === "range")
      return !1;
    var R = so(k, N);
    if (!R)
      return !0;
    if (R ? S = k : (S = k === "v" ? "h" : "v", R = so(k, N)), !R)
      return !1;
    if (!n.current && "changedTouches" in p && (C || E) && (n.current = S), !S)
      return !0;
    var D = n.current || S;
    return $l(D, v, p, D === "h" ? C : E);
  }, []), c = l.useCallback(function(p) {
    var v = p;
    if (!(!ut.length || ut[ut.length - 1] !== s)) {
      var y = "deltaY" in v ? io(v) : Lt(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && Vl(S.delta, y);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var C = (i.current.shards || []).map(ao).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), E = C.length > 0 ? a(v, C[0]) : !i.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(p, v, y, x) {
    var C = { name: p, delta: v, target: y, should: x, shadowParent: Ul(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = l.useCallback(function(p) {
    r.current = Lt(p), n.current = void 0;
  }, []), m = l.useCallback(function(p) {
    u(p.type, io(p), p.target, a(p, e.lockRef.current));
  }, []), b = l.useCallback(function(p) {
    u(p.type, Lt(p), p.target, a(p, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return ut.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", c, lt), document.addEventListener("touchmove", c, lt), document.addEventListener("touchstart", d, lt), function() {
      ut = ut.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", c, lt), document.removeEventListener("touchmove", c, lt), document.removeEventListener("touchstart", d, lt);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    w ? l.createElement(s, { styles: Bl(o) }) : null,
    g ? l.createElement(_l, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ul(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Hl = xl(Qo, zl);
var on = l.forwardRef(function(e, t) {
  return l.createElement(or, _e({}, e, { ref: t, sideCar: Hl }));
});
on.classNames = or.classNames;
var Gl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Vt = {}, Nr = 0, os = function(e) {
  return e && (e.host || os(e.parentNode));
}, Kl = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = os(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Yl = function(e, t, r, n) {
  var o = Kl(t, Array.isArray(e) ? e : [e]);
  Vt[r] || (Vt[r] = /* @__PURE__ */ new WeakMap());
  var s = Vt[r], i = [], a = /* @__PURE__ */ new Set(), c = new Set(o), u = function(m) {
    !m || a.has(m) || (a.add(m), u(m.parentNode));
  };
  o.forEach(u);
  var d = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(b) {
      if (a.has(b))
        d(b);
      else
        try {
          var g = b.getAttribute(n), w = g !== null && g !== "false", p = (dt.get(b) || 0) + 1, v = (s.get(b) || 0) + 1;
          dt.set(b, p), s.set(b, v), i.push(b), p === 1 && w && $t.set(b, !0), v === 1 && b.setAttribute(r, "true"), w || b.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", b, y);
        }
    });
  };
  return d(t), a.clear(), Nr++, function() {
    i.forEach(function(m) {
      var b = dt.get(m) - 1, g = s.get(m) - 1;
      dt.set(m, b), s.set(m, g), b || ($t.has(m) || m.removeAttribute(n), $t.delete(m)), g || m.removeAttribute(r);
    }), Nr--, Nr || (dt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Vt = {});
  };
}, ss = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Gl(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), Yl(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, sr = "Dialog", [is, Kp] = Ne(sr), [Xl, Fe] = is(sr), as = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = l.useRef(null), c = l.useRef(null), [u, d] = Ke({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: sr
  });
  return /* @__PURE__ */ f.jsx(
    Xl,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: et(),
      titleId: et(),
      descriptionId: et(),
      open: u,
      onOpenChange: d,
      onOpenToggle: l.useCallback(() => d((m) => !m), [d]),
      modal: i,
      children: r
    }
  );
};
as.displayName = sr;
var cs = "DialogTrigger", ql = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Fe(cs, r), s = ee(t, o.triggerRef);
    return /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": an(o.open),
        ...n,
        ref: s,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ql.displayName = cs;
var Zl = "DialogPortal", [Yp, ls] = is(Zl, {
  forceMount: void 0
}), Gt = "DialogOverlay", us = l.forwardRef(
  (e, t) => {
    const r = ls(Gt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = Fe(Gt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f.jsx(bt, { present: n || s.open, children: /* @__PURE__ */ f.jsx(Ql, { ...o, ref: t }) }) : null;
  }
);
us.displayName = Gt;
var Jl = /* @__PURE__ */ mt("DialogOverlay.RemoveScroll"), Ql = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Fe(Gt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f.jsx(on, { as: Jl, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f.jsx(
        W.div,
        {
          "data-state": an(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), tt = "DialogContent", ds = l.forwardRef(
  (e, t) => {
    const r = ls(tt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = Fe(tt, e.__scopeDialog);
    return /* @__PURE__ */ f.jsx(bt, { present: n || s.open, children: s.modal ? /* @__PURE__ */ f.jsx(eu, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(tu, { ...o, ref: t }) });
  }
);
ds.displayName = tt;
var eu = l.forwardRef(
  (e, t) => {
    const r = Fe(tt, e.__scopeDialog), n = l.useRef(null), o = ee(t, r.contentRef, n);
    return l.useEffect(() => {
      const s = n.current;
      if (s) return ss(s);
    }, []), /* @__PURE__ */ f.jsx(
      fs,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: V(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), tu = l.forwardRef(
  (e, t) => {
    const r = Fe(tt, e.__scopeDialog), n = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      fs,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (n.current || (a = r.triggerRef.current) == null || a.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, u;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((u = r.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), fs = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Fe(tt, r), c = l.useRef(null), u = ee(t, c);
    return qo(), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        rn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ f.jsx(
            nr,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": an(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx(ou, { titleId: a.titleId }),
        /* @__PURE__ */ f.jsx(iu, { contentRef: c, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), sn = "DialogTitle", ru = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Fe(sn, r);
    return /* @__PURE__ */ f.jsx(W.h2, { id: o.titleId, ...n, ref: t });
  }
);
ru.displayName = sn;
var ps = "DialogDescription", nu = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Fe(ps, r);
    return /* @__PURE__ */ f.jsx(W.p, { id: o.descriptionId, ...n, ref: t });
  }
);
nu.displayName = ps;
var ms = "DialogClose", hs = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Fe(ms, r);
    return /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
hs.displayName = ms;
function an(e) {
  return e ? "open" : "closed";
}
var vs = "DialogTitleWarning", [Xp, gs] = Ec(vs, {
  contentName: tt,
  titleName: sn,
  docsSlug: "dialog"
}), ou = ({ titleId: e }) => {
  const t = gs(vs), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, su = "DialogDescriptionWarning", iu = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gs(su).contentName}}.`;
  return l.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, au = as, cu = us, lu = ds, Ir = hs;
const qp = ({
  isOpen: e,
  onClose: t,
  title: r,
  children: n,
  confirmButtonLabel: o,
  cancelButtonLabel: s = "キャンセル"
}) => /* @__PURE__ */ f.jsxs(au, { open: e, onOpenChange: t, children: [
  /* @__PURE__ */ f.jsx(
    cu,
    {
      className: `fixed top-0 left-0 h-full w-full bg-surface-scrimmed
          opacity-85`
    }
  ),
  /* @__PURE__ */ f.jsx(
    lu,
    {
      className: `fixed top-1/2 left-1/2 w-2/3 max-w-[40rem] min-w-[25rem]
          -translate-x-1/2 -translate-y-1/2 transform rounded-lg
          bg-surface-primary`,
      children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-grow justify-between px-xl py-lg", children: [
          /* @__PURE__ */ f.jsx("div", { children: r && /* @__PURE__ */ f.jsx("h2", { className: "text-xxl text-body-primary", children: r }) }),
          /* @__PURE__ */ f.jsx(Ir, { asChild: !0, children: /* @__PURE__ */ f.jsx("button", { className: "cursor-pointer", children: /* @__PURE__ */ f.jsx(Ho, { className: "h-xl w-xl text-body-primary" }) }) })
        ] }),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `flex min-h-40 flex-grow-0 border-y-1
              border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary`,
            children: n
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-grow gap-xs px-md py-lg", children: [
          /* @__PURE__ */ f.jsx(Ir, { asChild: !0, children: /* @__PURE__ */ f.jsx($r, { intent: "secondary", children: s }) }),
          /* @__PURE__ */ f.jsx(Ir, { asChild: !0, children: /* @__PURE__ */ f.jsx($r, { intent: "primary", children: o }) })
        ] })
      ] })
    }
  )
] }), uu = De(
  `h-12 w-full rounded border border-input-default bg-surface-primary px-md
  py-sm hover:bg-surface-secondary focus:border-input-focused focus:outline-0
  disabled:border-input-disabled disabled:bg-surface-disabled
  disabled:text-body-disabled`,
  {
    variants: {
      invalid: {
        false: "text-body-primary focus:border-input-focused",
        true: "border-input-alert focus:border-input-alert"
      }
    }
  }
), Zp = le.forwardRef(
  ({ invalid: e, className: t, ...r }, n) => /* @__PURE__ */ f.jsx(
    "input",
    {
      ref: n,
      className: pe(ne(uu({ invalid: e }), t)),
      ...r
    }
  )
);
var cn = "Progress", ln = 100, [du, Jp] = Ne(cn), [fu, pu] = du(cn), bs = l.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: o,
      getValueLabel: s = mu,
      ...i
    } = e;
    (o || o === 0) && !co(o) && console.error(hu(`${o}`, "Progress"));
    const a = co(o) ? o : ln;
    n !== null && !lo(n, a) && console.error(vu(`${n}`, "Progress"));
    const c = lo(n, a) ? n : null, u = Kt(c) ? s(c, a) : void 0;
    return /* @__PURE__ */ f.jsx(fu, { scope: r, value: c, max: a, children: /* @__PURE__ */ f.jsx(
      W.div,
      {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Kt(c) ? c : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": ws(c, a),
        "data-value": c ?? void 0,
        "data-max": a,
        ...i,
        ref: t
      }
    ) });
  }
);
bs.displayName = cn;
var xs = "ProgressIndicator", ys = l.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, o = pu(xs, r);
    return /* @__PURE__ */ f.jsx(
      W.div,
      {
        "data-state": ws(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: t
      }
    );
  }
);
ys.displayName = xs;
function mu(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function ws(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Kt(e) {
  return typeof e == "number";
}
function co(e) {
  return Kt(e) && !isNaN(e) && e > 0;
}
function lo(e, t) {
  return Kt(e) && !isNaN(e) && e <= t && e >= 0;
}
function hu(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ln}\`.`;
}
function vu(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ln} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var gu = bs, bu = ys;
const xu = ({
  value: e,
  max: t = 100,
  indeterminate: r = !1,
  className: n,
  ...o
}) => /* @__PURE__ */ f.jsx(
  gu,
  {
    className: ne(
      "relative h-1 w-full overflow-hidden rounded bg-surface-disabled",
      n
    ),
    value: e,
    max: t,
    ...o,
    children: /* @__PURE__ */ f.jsx(
      bu,
      {
        className: ne(
          "h-full bg-interactive-primary-default transition-transform",
          {
            "animate-indeterminate": r
          }
        ),
        style: r ? void 0 : { transform: `translateX(-${100 - e / t * 100}%)` }
      }
    )
  }
);
xu.displayName = "Progress";
function un(e) {
  const t = e + "CollectionProvider", [r, n] = Ne(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: v, children: y } = p, x = le.useRef(null), C = le.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(o, { scope: v, itemMap: C, collectionRef: x, children: y });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ mt(a), u = le.forwardRef(
    (p, v) => {
      const { scope: y, children: x } = p, C = s(a, y), E = ee(v, C.collectionRef);
      return /* @__PURE__ */ f.jsx(c, { ref: E, children: x });
    }
  );
  u.displayName = a;
  const d = e + "CollectionItemSlot", m = "data-radix-collection-item", b = /* @__PURE__ */ mt(d), g = le.forwardRef(
    (p, v) => {
      const { scope: y, children: x, ...C } = p, E = le.useRef(null), S = ee(v, E), N = s(d, y);
      return le.useEffect(() => (N.itemMap.set(E, { ref: E, ...C }), () => void N.itemMap.delete(E))), /* @__PURE__ */ f.jsx(b, { [m]: "", ref: S, children: x });
    }
  );
  g.displayName = d;
  function w(p) {
    const v = s(e + "CollectionConsumer", p);
    return le.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const C = Array.from(x.querySelectorAll(`[${m}]`));
      return Array.from(v.itemMap.values()).sort(
        (N, k) => C.indexOf(N.ref.current) - C.indexOf(k.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: g },
    w,
    n
  ];
}
var yu = l.createContext(void 0);
function dn(e) {
  const t = l.useContext(yu);
  return e || t || "ltr";
}
var _r = "rovingFocusGroup.onEntryFocus", wu = { bubbles: !1, cancelable: !0 }, At = "RovingFocusGroup", [Wr, Cs, Cu] = un(At), [Eu, Es] = Ne(
  At,
  [Cu]
), [Su, Ru] = Eu(At), Ss = l.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(Wr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(Wr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(Tu, { ...e, ref: t }) }) })
);
Ss.displayName = At;
var Tu = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...m
  } = e, b = l.useRef(null), g = ee(t, b), w = dn(s), [p, v] = Ke({
    prop: i,
    defaultProp: a ?? null,
    onChange: c,
    caller: At
  }), [y, x] = l.useState(!1), C = Re(u), E = Cs(r), S = l.useRef(!1), [N, k] = l.useState(0);
  return l.useEffect(() => {
    const R = b.current;
    if (R)
      return R.addEventListener(_r, C), () => R.removeEventListener(_r, C);
  }, [C]), /* @__PURE__ */ f.jsx(
    Su,
    {
      scope: r,
      orientation: n,
      dir: w,
      loop: o,
      currentTabStopId: p,
      onItemFocus: l.useCallback(
        (R) => v(R),
        [v]
      ),
      onItemShiftTab: l.useCallback(() => x(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => k((R) => R + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => k((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ f.jsx(
        W.div,
        {
          tabIndex: y || N === 0 ? -1 : 0,
          "data-orientation": n,
          ...m,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: V(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: V(e.onFocus, (R) => {
            const D = !S.current;
            if (R.target === R.currentTarget && D && !y) {
              const U = new CustomEvent(_r, wu);
              if (R.currentTarget.dispatchEvent(U), !U.defaultPrevented) {
                const H = E().filter((O) => O.focusable), z = H.find((O) => O.active), L = H.find((O) => O.id === p), F = [z, L, ...H].filter(
                  Boolean
                ).map((O) => O.ref.current);
                Ps(F, d);
              }
            }
            S.current = !1;
          }),
          onBlur: V(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Rs = "RovingFocusGroupItem", Ts = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, c = et(), u = s || c, d = Ru(Rs, r), m = d.currentTabStopId === u, b = Cs(r), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: p } = d;
    return l.useEffect(() => {
      if (n)
        return g(), () => w();
    }, [n, g, w]), /* @__PURE__ */ f.jsx(
      Wr.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ f.jsx(
          W.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: V(e.onMouseDown, (v) => {
              n ? d.onItemFocus(u) : v.preventDefault();
            }),
            onFocus: V(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: V(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const y = Au(v, d.orientation, d.dir);
              if (y !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = b().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") C.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && C.reverse();
                  const E = C.indexOf(v.currentTarget);
                  C = d.loop ? Nu(C, E + 1) : C.slice(E + 1);
                }
                setTimeout(() => Ps(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: m, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
Ts.displayName = Rs;
var Pu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ku(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Au(e, t, r) {
  const n = ku(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Pu[n];
}
function Ps(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Nu(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Iu = Ss, _u = Ts, fn = "Radio", [Ou, ks] = Ne(fn), [ju, Mu] = Ou(fn), As = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: s,
      disabled: i,
      value: a = "on",
      onCheck: c,
      form: u,
      ...d
    } = e, [m, b] = l.useState(null), g = ee(t, (v) => b(v)), w = l.useRef(!1), p = m ? u || !!m.closest("form") : !0;
    return /* @__PURE__ */ f.jsxs(ju, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ f.jsx(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Os(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
          ...d,
          ref: g,
          onClick: V(e.onClick, (v) => {
            o || c == null || c(), p && (w.current = v.isPropagationStopped(), w.current || v.stopPropagation());
          })
        }
      ),
      p && /* @__PURE__ */ f.jsx(
        _s,
        {
          control: m,
          bubbles: !w.current,
          name: n,
          value: a,
          checked: o,
          required: s,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
As.displayName = fn;
var Ns = "RadioIndicator", Is = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, s = Mu(Ns, r);
    return /* @__PURE__ */ f.jsx(bt, { present: n || s.checked, children: /* @__PURE__ */ f.jsx(
      W.span,
      {
        "data-state": Os(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Is.displayName = Ns;
var Du = "RadioBubbleInput", _s = l.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = l.useRef(null), a = ee(i, s), c = er(r), u = tr(t);
    return l.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const m = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== r && g) {
        const w = new Event("click", { bubbles: n });
        g.call(d, r), d.dispatchEvent(w);
      }
    }, [c, r, n]), /* @__PURE__ */ f.jsx(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
_s.displayName = Du;
function Os(e) {
  return e ? "checked" : "unchecked";
}
var Fu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ir = "RadioGroup", [Lu, Qp] = Ne(ir, [
  Es,
  ks
]), js = Es(), Ms = ks(), [$u, Vu] = Lu(ir), Ds = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: s,
      required: i = !1,
      disabled: a = !1,
      orientation: c,
      dir: u,
      loop: d = !0,
      onValueChange: m,
      ...b
    } = e, g = js(r), w = dn(u), [p, v] = Ke({
      prop: s,
      defaultProp: o ?? null,
      onChange: m,
      caller: ir
    });
    return /* @__PURE__ */ f.jsx(
      $u,
      {
        scope: r,
        name: n,
        required: i,
        disabled: a,
        value: p,
        onValueChange: v,
        children: /* @__PURE__ */ f.jsx(
          Iu,
          {
            asChild: !0,
            ...g,
            orientation: c,
            dir: w,
            loop: d,
            children: /* @__PURE__ */ f.jsx(
              W.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": c,
                "data-disabled": a ? "" : void 0,
                dir: w,
                ...b,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Ds.displayName = ir;
var Fs = "RadioGroupItem", Ls = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, s = Vu(Fs, r), i = s.disabled || n, a = js(r), c = Ms(r), u = l.useRef(null), d = ee(t, u), m = s.value === o.value, b = l.useRef(!1);
    return l.useEffect(() => {
      const g = (p) => {
        Fu.includes(p.key) && (b.current = !0);
      }, w = () => b.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", w), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", w);
      };
    }, []), /* @__PURE__ */ f.jsx(
      _u,
      {
        asChild: !0,
        ...a,
        focusable: !i,
        active: m,
        children: /* @__PURE__ */ f.jsx(
          As,
          {
            disabled: i,
            required: s.required,
            checked: m,
            ...c,
            ...o,
            name: s.name,
            ref: d,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: V((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: V(o.onFocus, () => {
              var g;
              b.current && ((g = u.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
Ls.displayName = Fs;
var Bu = "RadioGroupIndicator", $s = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = Ms(r);
    return /* @__PURE__ */ f.jsx(Is, { ...o, ...n, ref: t });
  }
);
$s.displayName = Bu;
var Wu = Ds, zu = Ls, Uu = $s;
const Hu = De("flex w-fit cursor-pointer items-center gap-xs", {
  variants: {
    disabled: {
      true: "cursor-not-allowed text-body-disabled",
      false: "cursor-pointer text-body-primary"
    }
  }
}), Gu = De(
  `size-[1rem] cursor-pointer rounded-full border-1 border-input-default
  text-body-primary outline-none focus-visible:ring-2
  focus-visible:ring-input-focused disabled:cursor-not-allowed
  disabled:text-body-disabled data-[state=checked]:text-body-secondary`,
  {
    variants: {
      disabled: {
        true: `cursor-not-allowed border-transparent bg-input-disabled
        text-body-disabled`,
        false: ""
        // Correct hover state currently missing in Figma.
      },
      invalid: {
        true: "border-input-alert text-body-alert"
      }
    },
    defaultVariants: {
      disabled: !1,
      invalid: !1
    }
  }
), em = ({
  value: e,
  label: t,
  id: r,
  children: n,
  ...o
}) => {
  const s = r || `radio-${e}`;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: ne(
        pe(Hu({ disabled: o.disabled }))
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          zu,
          {
            id: s,
            value: e,
            className: pe(
              Gu({
                disabled: o.disabled,
                invalid: o.invalid
              })
            ),
            ...o,
            children: /* @__PURE__ */ f.jsx(
              Uu,
              {
                className: `relative flex size-full items-center justify-center
            after:block after:size-xs after:rounded-full
            after:bg-input-selected`
              }
            )
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "label",
          {
            htmlFor: s,
            className: `flex cursor-pointer items-center gap-xs text-inherit
          select-none`,
            children: [
              t,
              n
            ]
          }
        )
      ]
    }
  );
}, tm = ({
  children: e,
  className: t
}) => /* @__PURE__ */ f.jsx(Wu, { className: pe(ne(t)), children: e });
function uo(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
const Ku = ["top", "right", "bottom", "left"], Ye = Math.min, we = Math.max, Yt = Math.round, Bt = Math.floor, je = (e) => ({
  x: e,
  y: e
}), Yu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xu = {
  start: "end",
  end: "start"
};
function zr(e, t, r) {
  return we(e, Ye(t, r));
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function We(e) {
  return e.split("-")[0];
}
function xt(e) {
  return e.split("-")[1];
}
function pn(e) {
  return e === "x" ? "y" : "x";
}
function mn(e) {
  return e === "y" ? "height" : "width";
}
const qu = /* @__PURE__ */ new Set(["top", "bottom"]);
function Oe(e) {
  return qu.has(We(e)) ? "y" : "x";
}
function hn(e) {
  return pn(Oe(e));
}
function Zu(e, t, r) {
  r === void 0 && (r = !1);
  const n = xt(e), o = hn(e), s = mn(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Xt(i)), [i, Xt(i)];
}
function Ju(e) {
  const t = Xt(e);
  return [Ur(e), t, Ur(t)];
}
function Ur(e) {
  return e.replace(/start|end/g, (t) => Xu[t]);
}
const fo = ["left", "right"], po = ["right", "left"], Qu = ["top", "bottom"], ed = ["bottom", "top"];
function td(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? po : fo : t ? fo : po;
    case "left":
    case "right":
      return t ? Qu : ed;
    default:
      return [];
  }
}
function rd(e, t, r, n) {
  const o = xt(e);
  let s = td(We(e), r === "start", n);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Ur)))), s;
}
function Xt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yu[t]);
}
function nd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vs(e) {
  return typeof e != "number" ? nd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qt(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function mo(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = Oe(t), i = hn(t), a = mn(i), c = We(t), u = s === "y", d = n.x + n.width / 2 - o.width / 2, m = n.y + n.height / 2 - o.height / 2, b = n[a] / 2 - o[a] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: m
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (xt(t)) {
    case "start":
      g[i] -= b * (r && u ? -1 : 1);
      break;
    case "end":
      g[i] += b * (r && u ? -1 : 1);
      break;
  }
  return g;
}
const od = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = r, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: m
  } = mo(u, n, c), b = n, g = {}, w = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: v,
      fn: y
    } = a[p], {
      x,
      y: C,
      data: E,
      reset: S
    } = await y({
      x: d,
      y: m,
      initialPlacement: n,
      placement: b,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, m = C ?? m, g = {
      ...g,
      [v]: {
        ...g[v],
        ...E
      }
    }, S && w <= 50 && (w++, typeof S == "object" && (S.placement && (b = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: m
    } = mo(u, b, c)), p = -1);
  }
  return {
    x: d,
    y: m,
    placement: b,
    strategy: o,
    middlewareData: g
  };
};
async function Tt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: b = !1,
    padding: g = 0
  } = Be(t, e), w = Vs(g), v = a[b ? m === "floating" ? "reference" : "floating" : m], y = qt(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(v))) == null || r ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), x = m === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), E = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = qt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: C,
    strategy: c
  }) : x);
  return {
    top: (y.top - S.top + w.top) / E.y,
    bottom: (S.bottom - y.bottom + w.bottom) / E.y,
    left: (y.left - S.left + w.left) / E.x,
    right: (S.right - y.right + w.right) / E.x
  };
}
const sd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = Be(e, t) || {};
    if (u == null)
      return {};
    const m = Vs(d), b = {
      x: r,
      y: n
    }, g = hn(o), w = mn(g), p = await i.getDimensions(u), v = g === "y", y = v ? "top" : "left", x = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", E = s.reference[w] + s.reference[g] - b[g] - s.floating[w], S = b[g] - s.reference[g], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let k = N ? N[C] : 0;
    (!k || !await (i.isElement == null ? void 0 : i.isElement(N))) && (k = a.floating[C] || s.floating[w]);
    const R = E / 2 - S / 2, D = k / 2 - p[w] / 2 - 1, U = Ye(m[y], D), H = Ye(m[x], D), z = U, L = k - p[w] - H, A = k / 2 - p[w] / 2 + R, F = zr(z, A, L), O = !c.arrow && xt(o) != null && A !== F && s.reference[w] / 2 - (A < z ? U : H) - p[w] / 2 < 0, $ = O ? A < z ? A - z : A - L : 0;
    return {
      [g]: b[g] + $,
      data: {
        [g]: F,
        centerOffset: A - F - $,
        ...O && {
          alignmentOffset: $
        }
      },
      reset: O
    };
  }
}), id = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: b,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: p = !0,
        ...v
      } = Be(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const y = We(o), x = Oe(a), C = We(a) === a, E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = b || (C || !p ? [Xt(a)] : Ju(a)), N = w !== "none";
      !b && N && S.push(...rd(a, p, w, E));
      const k = [a, ...S], R = await Tt(t, v), D = [];
      let U = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && D.push(R[y]), m) {
        const A = Zu(o, i, E);
        D.push(R[A[0]], R[A[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: D
      }], !D.every((A) => A <= 0)) {
        var H, z;
        const A = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, F = k[A];
        if (F && (!(m === "alignment" ? x !== Oe(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((T) => T.overflows[0] > 0 && Oe(T.placement) === x)))
          return {
            data: {
              index: A,
              overflows: U
            },
            reset: {
              placement: F
            }
          };
        let O = (z = U.filter(($) => $.overflows[0] <= 0).sort(($, T) => $.overflows[1] - T.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var L;
              const $ = (L = U.filter((T) => {
                if (N) {
                  const K = Oe(T.placement);
                  return K === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((K) => K > 0).reduce((K, ae) => K + ae, 0)]).sort((T, K) => T[1] - K[1])[0]) == null ? void 0 : L[0];
              $ && (O = $);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function ho(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vo(e) {
  return Ku.some((t) => e[t] >= 0);
}
const ad = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Be(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Tt(t, {
            ...o,
            elementContext: "reference"
          }), i = ho(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: vo(i)
            }
          };
        }
        case "escaped": {
          const s = await Tt(t, {
            ...o,
            altBoundary: !0
          }), i = ho(s, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: vo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Bs = /* @__PURE__ */ new Set(["left", "top"]);
async function cd(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = We(r), a = xt(r), c = Oe(r) === "y", u = Bs.has(i) ? -1 : 1, d = s && c ? -1 : 1, m = Be(t, e);
  let {
    mainAxis: b,
    crossAxis: g,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof w == "number" && (g = a === "end" ? w * -1 : w), c ? {
    x: g * d,
    y: b * u
  } : {
    x: b * u,
    y: g * d
  };
}
const ld = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, c = await cd(t, e);
      return i === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, ud = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: y,
              y: x
            } = v;
            return {
              x: y,
              y: x
            };
          }
        },
        ...c
      } = Be(e, t), u = {
        x: r,
        y: n
      }, d = await Tt(t, c), m = Oe(We(o)), b = pn(m);
      let g = u[b], w = u[m];
      if (s) {
        const v = b === "y" ? "top" : "left", y = b === "y" ? "bottom" : "right", x = g + d[v], C = g - d[y];
        g = zr(x, g, C);
      }
      if (i) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", x = w + d[v], C = w - d[y];
        w = zr(x, w, C);
      }
      const p = a.fn({
        ...t,
        [b]: g,
        [m]: w
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [b]: s,
            [m]: i
          }
        }
      };
    }
  };
}, dd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Be(e, t), d = {
        x: r,
        y: n
      }, m = Oe(o), b = pn(m);
      let g = d[b], w = d[m];
      const p = Be(a, t), v = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const C = b === "y" ? "height" : "width", E = s.reference[b] - s.floating[C] + v.mainAxis, S = s.reference[b] + s.reference[C] - v.mainAxis;
        g < E ? g = E : g > S && (g = S);
      }
      if (u) {
        var y, x;
        const C = b === "y" ? "width" : "height", E = Bs.has(We(o)), S = s.reference[m] - s.floating[C] + (E && ((y = i.offset) == null ? void 0 : y[m]) || 0) + (E ? 0 : v.crossAxis), N = s.reference[m] + s.reference[C] + (E ? 0 : ((x = i.offset) == null ? void 0 : x[m]) || 0) - (E ? v.crossAxis : 0);
        w < S ? w = S : w > N && (w = N);
      }
      return {
        [b]: g,
        [m]: w
      };
    }
  };
}, fd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Be(e, t), d = await Tt(t, u), m = We(o), b = xt(o), g = Oe(o) === "y", {
        width: w,
        height: p
      } = s.floating;
      let v, y;
      m === "top" || m === "bottom" ? (v = m, y = b === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = m, v = b === "end" ? "top" : "bottom");
      const x = p - d.top - d.bottom, C = w - d.left - d.right, E = Ye(p - d[v], x), S = Ye(w - d[y], C), N = !t.middlewareData.shift;
      let k = E, R = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = C), (n = t.middlewareData.shift) != null && n.enabled.y && (k = x), N && !b) {
        const U = we(d.left, 0), H = we(d.right, 0), z = we(d.top, 0), L = we(d.bottom, 0);
        g ? R = w - 2 * (U !== 0 || H !== 0 ? U + H : we(d.left, d.right)) : k = p - 2 * (z !== 0 || L !== 0 ? z + L : we(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: R,
        availableHeight: k
      });
      const D = await i.getDimensions(a.floating);
      return w !== D.width || p !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ar() {
  return typeof window < "u";
}
function yt(e) {
  return Ws(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Le(e) {
  var t;
  return (t = (Ws(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ws(e) {
  return ar() ? e instanceof Node || e instanceof Ce(e).Node : !1;
}
function ke(e) {
  return ar() ? e instanceof Element || e instanceof Ce(e).Element : !1;
}
function Me(e) {
  return ar() ? e instanceof HTMLElement || e instanceof Ce(e).HTMLElement : !1;
}
function go(e) {
  return !ar() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ce(e).ShadowRoot;
}
const pd = /* @__PURE__ */ new Set(["inline", "contents"]);
function Nt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !pd.has(o);
}
const md = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hd(e) {
  return md.has(yt(e));
}
const vd = [":popover-open", ":modal"];
function cr(e) {
  return vd.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gd = ["transform", "translate", "scale", "rotate", "perspective"], bd = ["transform", "translate", "scale", "rotate", "perspective", "filter"], xd = ["paint", "layout", "strict", "content"];
function vn(e) {
  const t = gn(), r = ke(e) ? Ae(e) : e;
  return gd.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || bd.some((n) => (r.willChange || "").includes(n)) || xd.some((n) => (r.contain || "").includes(n));
}
function yd(e) {
  let t = Xe(e);
  for (; Me(t) && !ht(t); ) {
    if (vn(t))
      return t;
    if (cr(t))
      return null;
    t = Xe(t);
  }
  return null;
}
function gn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const wd = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ht(e) {
  return wd.has(yt(e));
}
function Ae(e) {
  return Ce(e).getComputedStyle(e);
}
function lr(e) {
  return ke(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Xe(e) {
  if (yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    go(e) && e.host || // Fallback.
    Le(e)
  );
  return go(t) ? t.host : t;
}
function zs(e) {
  const t = Xe(e);
  return ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Me(t) && Nt(t) ? t : zs(t);
}
function Pt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = zs(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ce(o);
  if (s) {
    const a = Hr(i);
    return t.concat(i, i.visualViewport || [], Nt(o) ? o : [], a && r ? Pt(a) : []);
  }
  return t.concat(o, Pt(o, [], r));
}
function Hr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Us(e) {
  const t = Ae(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Me(e), s = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, a = Yt(r) !== s || Yt(n) !== i;
  return a && (r = s, n = i), {
    width: r,
    height: n,
    $: a
  };
}
function bn(e) {
  return ke(e) ? e : e.contextElement;
}
function pt(e) {
  const t = bn(e);
  if (!Me(t))
    return je(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = Us(t);
  let i = (s ? Yt(r.width) : r.width) / n, a = (s ? Yt(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Cd = /* @__PURE__ */ je(0);
function Hs(e) {
  const t = Ce(e);
  return !gn() || !t.visualViewport ? Cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ed(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ce(e) ? !1 : t;
}
function rt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = bn(e);
  let i = je(1);
  t && (n ? ke(n) && (i = pt(n)) : i = pt(e));
  const a = Ed(s, r, n) ? Hs(s) : je(0);
  let c = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, m = o.height / i.y;
  if (s) {
    const b = Ce(s), g = n && ke(n) ? Ce(n) : n;
    let w = b, p = Hr(w);
    for (; p && n && g !== w; ) {
      const v = pt(p), y = p.getBoundingClientRect(), x = Ae(p), C = y.left + (p.clientLeft + parseFloat(x.paddingLeft)) * v.x, E = y.top + (p.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, u *= v.y, d *= v.x, m *= v.y, c += C, u += E, w = Ce(p), p = Hr(w);
    }
  }
  return qt({
    width: d,
    height: m,
    x: c,
    y: u
  });
}
function xn(e, t) {
  const r = lr(e).scrollLeft;
  return t ? t.left + r : rt(Le(e)).left + r;
}
function Gs(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    xn(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Sd(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", i = Le(n), a = t ? cr(t.floating) : !1;
  if (n === i || a && s)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = je(1);
  const d = je(0), m = Me(n);
  if ((m || !m && !s) && ((yt(n) !== "body" || Nt(i)) && (c = lr(n)), Me(n))) {
    const g = rt(n);
    u = pt(n), d.x = g.x + n.clientLeft, d.y = g.y + n.clientTop;
  }
  const b = i && !m && !s ? Gs(i, c, !0) : je(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + d.x + b.x,
    y: r.y * u.y - c.scrollTop * u.y + d.y + b.y
  };
}
function Rd(e) {
  return Array.from(e.getClientRects());
}
function Td(e) {
  const t = Le(e), r = lr(e), n = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = we(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + xn(e);
  const a = -r.scrollTop;
  return Ae(n).direction === "rtl" && (i += we(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Pd(e, t) {
  const r = Ce(e), n = Le(e), o = r.visualViewport;
  let s = n.clientWidth, i = n.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = gn();
    (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
const kd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ad(e, t) {
  const r = rt(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = Me(e) ? pt(e) : je(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, u = n * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: u
  };
}
function bo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Pd(e, r);
  else if (t === "document")
    n = Td(Le(e));
  else if (ke(t))
    n = Ad(t, r);
  else {
    const o = Hs(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return qt(n);
}
function Ks(e, t) {
  const r = Xe(e);
  return r === t || !ke(r) || ht(r) ? !1 : Ae(r).position === "fixed" || Ks(r, t);
}
function Nd(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Pt(e, [], !1).filter((a) => ke(a) && yt(a) !== "body"), o = null;
  const s = Ae(e).position === "fixed";
  let i = s ? Xe(e) : e;
  for (; ke(i) && !ht(i); ) {
    const a = Ae(i), c = vn(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && kd.has(o.position) || Nt(i) && !c && Ks(e, i)) ? n = n.filter((d) => d !== i) : o = a, i = Xe(i);
  }
  return t.set(e, n), n;
}
function Id(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? cr(t) ? [] : Nd(t, this._c) : [].concat(r), n], a = i[0], c = i.reduce((u, d) => {
    const m = bo(t, d, o);
    return u.top = we(m.top, u.top), u.right = Ye(m.right, u.right), u.bottom = Ye(m.bottom, u.bottom), u.left = we(m.left, u.left), u;
  }, bo(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function _d(e) {
  const {
    width: t,
    height: r
  } = Us(e);
  return {
    width: t,
    height: r
  };
}
function Od(e, t, r) {
  const n = Me(t), o = Le(t), s = r === "fixed", i = rt(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = je(0);
  function u() {
    c.x = xn(o);
  }
  if (n || !n && !s)
    if ((yt(t) !== "body" || Nt(o)) && (a = lr(t)), n) {
      const g = rt(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && u();
  s && !n && o && u();
  const d = o && !n && !s ? Gs(o, a) : je(0), m = i.left + a.scrollLeft - c.x - d.x, b = i.top + a.scrollTop - c.y - d.y;
  return {
    x: m,
    y: b,
    width: i.width,
    height: i.height
  };
}
function Or(e) {
  return Ae(e).position === "static";
}
function xo(e, t) {
  if (!Me(e) || Ae(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Le(e) === r && (r = r.ownerDocument.body), r;
}
function Ys(e, t) {
  const r = Ce(e);
  if (cr(e))
    return r;
  if (!Me(e)) {
    let o = Xe(e);
    for (; o && !ht(o); ) {
      if (ke(o) && !Or(o))
        return o;
      o = Xe(o);
    }
    return r;
  }
  let n = xo(e, t);
  for (; n && hd(n) && Or(n); )
    n = xo(n, t);
  return n && ht(n) && Or(n) && !vn(n) ? r : n || yd(e) || r;
}
const jd = async function(e) {
  const t = this.getOffsetParent || Ys, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Od(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Md(e) {
  return Ae(e).direction === "rtl";
}
const Dd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sd,
  getDocumentElement: Le,
  getClippingRect: Id,
  getOffsetParent: Ys,
  getElementRects: jd,
  getClientRects: Rd,
  getDimensions: _d,
  getScale: pt,
  isElement: ke,
  isRTL: Md
};
function Xs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fd(e, t) {
  let r = null, n;
  const o = Le(e);
  function s() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: m,
      width: b,
      height: g
    } = u;
    if (a || t(), !b || !g)
      return;
    const w = Bt(m), p = Bt(o.clientWidth - (d + b)), v = Bt(o.clientHeight - (m + g)), y = Bt(d), C = {
      rootMargin: -w + "px " + -p + "px " + -v + "px " + -y + "px",
      threshold: we(0, Ye(1, c)) || 1
    };
    let E = !0;
    function S(N) {
      const k = N[0].intersectionRatio;
      if (k !== c) {
        if (!E)
          return i();
        k ? i(!1, k) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Xs(u, e.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, C);
    }
    r.observe(e);
  }
  return i(!0), s;
}
function Ld(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, u = bn(e), d = o || s ? [...u ? Pt(u) : [], ...Pt(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), s && y.addEventListener("resize", r);
  });
  const m = u && a ? Fd(u, r) : null;
  let b = -1, g = null;
  i && (g = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === u && g && (g.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), r();
  }), u && !c && g.observe(u), g.observe(t));
  let w, p = c ? rt(e) : null;
  c && v();
  function v() {
    const y = rt(e);
    p && !Xs(p, y) && r(), p = y, w = requestAnimationFrame(v);
  }
  return r(), () => {
    var y;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), s && x.removeEventListener("resize", r);
    }), m == null || m(), (y = g) == null || y.disconnect(), g = null, c && cancelAnimationFrame(w);
  };
}
const $d = ld, Vd = ud, Bd = id, Wd = fd, zd = ad, yo = sd, Ud = dd, Hd = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Dd,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return od(e, t, {
    ...o,
    platform: s
  });
};
var Gd = typeof document < "u", Kd = function() {
}, Ht = Gd ? ka : Kd;
function Zt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Zt(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !Zt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wo(e, t) {
  const r = qs(e);
  return Math.round(t * r) / r;
}
function jr(e) {
  const t = l.useRef(e);
  return Ht(() => {
    t.current = e;
  }), t;
}
function Yd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, m] = l.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [b, g] = l.useState(n);
  Zt(b, n) || g(n);
  const [w, p] = l.useState(null), [v, y] = l.useState(null), x = l.useCallback((T) => {
    T !== N.current && (N.current = T, p(T));
  }, []), C = l.useCallback((T) => {
    T !== k.current && (k.current = T, y(T));
  }, []), E = s || w, S = i || v, N = l.useRef(null), k = l.useRef(null), R = l.useRef(d), D = c != null, U = jr(c), H = jr(o), z = jr(u), L = l.useCallback(() => {
    if (!N.current || !k.current)
      return;
    const T = {
      placement: t,
      strategy: r,
      middleware: b
    };
    H.current && (T.platform = H.current), Hd(N.current, k.current, T).then((K) => {
      const ae = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      A.current && !Zt(R.current, ae) && (R.current = ae, kt.flushSync(() => {
        m(ae);
      }));
    });
  }, [b, t, r, H, z]);
  Ht(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, m((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const A = l.useRef(!1);
  Ht(() => (A.current = !0, () => {
    A.current = !1;
  }), []), Ht(() => {
    if (E && (N.current = E), S && (k.current = S), E && S) {
      if (U.current)
        return U.current(E, S, L);
      L();
    }
  }, [E, S, L, U, D]);
  const F = l.useMemo(() => ({
    reference: N,
    floating: k,
    setReference: x,
    setFloating: C
  }), [x, C]), O = l.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), $ = l.useMemo(() => {
    const T = {
      position: r,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return T;
    const K = wo(O.floating, d.x), ae = wo(O.floating, d.y);
    return a ? {
      ...T,
      transform: "translate(" + K + "px, " + ae + "px)",
      ...qs(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: K,
      top: ae
    };
  }, [r, a, O.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: L,
    refs: F,
    elements: O,
    floatingStyles: $
  }), [d, L, F, O, $]);
}
const Xd = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? yo({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? yo({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, qd = (e, t) => ({
  ...$d(e),
  options: [e, t]
}), Zd = (e, t) => ({
  ...Vd(e),
  options: [e, t]
}), Jd = (e, t) => ({
  ...Ud(e),
  options: [e, t]
}), Qd = (e, t) => ({
  ...Bd(e),
  options: [e, t]
}), ef = (e, t) => ({
  ...Wd(e),
  options: [e, t]
}), tf = (e, t) => ({
  ...zd(e),
  options: [e, t]
}), rf = (e, t) => ({
  ...Xd(e),
  options: [e, t]
});
var nf = "Arrow", Zs = l.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f.jsx(
    W.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zs.displayName = nf;
var of = Zs, yn = "Popper", [Js, Qs] = Ne(yn), [sf, ei] = Js(yn), ti = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = l.useState(null);
  return /* @__PURE__ */ f.jsx(sf, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ti.displayName = yn;
var ri = "PopperAnchor", ni = l.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = ei(ri, r), i = l.useRef(null), a = ee(t, i);
    return l.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ f.jsx(W.div, { ...o, ref: a });
  }
);
ni.displayName = ri;
var wn = "PopperContent", [af, cf] = Js(wn), oi = l.forwardRef(
  (e, t) => {
    var _, Q, ie, Y, Z, X;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: m = "partial",
      hideWhenDetached: b = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...p
    } = e, v = ei(wn, r), [y, x] = l.useState(null), C = ee(t, (ve) => x(ve)), [E, S] = l.useState(null), N = tr(E), k = (N == null ? void 0 : N.width) ?? 0, R = (N == null ? void 0 : N.height) ?? 0, D = n + (s !== "center" ? "-" + s : ""), U = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, H = Array.isArray(u) ? u : [u], z = H.length > 0, L = {
      padding: U,
      boundary: H.filter(uf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: z
    }, { refs: A, floatingStyles: F, placement: O, isPositioned: $, middlewareData: T } = Yd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...ve) => Ld(...ve, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        qd({ mainAxis: o + R, alignmentAxis: i }),
        c && Zd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Jd() : void 0,
          ...L
        }),
        c && Qd({ ...L }),
        ef({
          ...L,
          apply: ({ elements: ve, rects: Ee, availableWidth: Ie, availableHeight: Te }) => {
            const { width: ze, height: _t } = Ee.reference, $e = ve.floating.style;
            $e.setProperty("--radix-popper-available-width", `${Ie}px`), $e.setProperty("--radix-popper-available-height", `${Te}px`), $e.setProperty("--radix-popper-anchor-width", `${ze}px`), $e.setProperty("--radix-popper-anchor-height", `${_t}px`);
          }
        }),
        E && rf({ element: E, padding: a }),
        df({ arrowWidth: k, arrowHeight: R }),
        b && tf({ strategy: "referenceHidden", ...L })
      ]
    }), [K, ae] = ai(O), fe = Re(w);
    me(() => {
      $ && (fe == null || fe());
    }, [$, fe]);
    const he = (_ = T.arrow) == null ? void 0 : _.x, re = (Q = T.arrow) == null ? void 0 : Q.y, oe = ((ie = T.arrow) == null ? void 0 : ie.centerOffset) !== 0, [ye, be] = l.useState();
    return me(() => {
      y && be(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: $ ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (Y = T.transformOrigin) == null ? void 0 : Y.x,
            (Z = T.transformOrigin) == null ? void 0 : Z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = T.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f.jsx(
          af,
          {
            scope: r,
            placedSide: K,
            onArrowChange: S,
            arrowX: he,
            arrowY: re,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ f.jsx(
              W.div,
              {
                "data-side": K,
                "data-align": ae,
                ...p,
                ref: C,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: $ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
oi.displayName = wn;
var si = "PopperArrow", lf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ii = l.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = cf(si, n), i = lf[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
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
        children: /* @__PURE__ */ f.jsx(
          of,
          {
            ...o,
            ref: r,
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
ii.displayName = si;
function uf(e) {
  return e !== null;
}
var df = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, y, x;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = ai(r), m = { start: "0%", center: "50%", end: "100%" }[d], b = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + a / 2, g = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let w = "", p = "";
    return u === "bottom" ? (w = i ? m : `${b}px`, p = `${-c}px`) : u === "top" ? (w = i ? m : `${b}px`, p = `${n.floating.height + c}px`) : u === "right" ? (w = `${-c}px`, p = i ? m : `${g}px`) : u === "left" && (w = `${n.floating.width + c}px`, p = i ? m : `${g}px`), { data: { x: w, y: p } };
  }
});
function ai(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ff = ti, pf = ni, mf = oi, hf = ii, ci = Object.freeze({
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
}), vf = "VisuallyHidden", Cn = l.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(
    W.span,
    {
      ...e,
      ref: t,
      style: { ...ci, ...e.style }
    }
  )
);
Cn.displayName = vf;
var gf = [" ", "Enter", "ArrowUp", "ArrowDown"], bf = [" ", "Enter"], nt = "Select", [ur, dr, xf] = un(nt), [wt, rm] = Ne(nt, [
  xf,
  Qs
]), fr = Qs(), [yf, qe] = wt(nt), [wf, Cf] = wt(nt), li = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: m,
    disabled: b,
    required: g,
    form: w
  } = e, p = fr(t), [v, y] = l.useState(null), [x, C] = l.useState(null), [E, S] = l.useState(!1), N = dn(u), [k, R] = Ke({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: nt
  }), [D, U] = Ke({
    prop: i,
    defaultProp: a,
    onChange: c,
    caller: nt
  }), H = l.useRef(null), z = v ? w || !!v.closest("form") : !0, [L, A] = l.useState(/* @__PURE__ */ new Set()), F = Array.from(L).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ f.jsx(ff, { ...p, children: /* @__PURE__ */ f.jsxs(
    yf,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: C,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: S,
      contentId: et(),
      value: D,
      onValueChange: U,
      open: k,
      onOpenChange: R,
      dir: N,
      triggerPointerDownPosRef: H,
      disabled: b,
      children: [
        /* @__PURE__ */ f.jsx(ur.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
          wf,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((O) => {
              A(($) => new Set($).add(O));
            }, []),
            onNativeOptionRemove: l.useCallback((O) => {
              A(($) => {
                const T = new Set($);
                return T.delete(O), T;
              });
            }, []),
            children: r
          }
        ) }),
        z ? /* @__PURE__ */ f.jsxs(
          Mi,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: m,
            value: D,
            onChange: (O) => U(O.target.value),
            disabled: b,
            form: w,
            children: [
              D === void 0 ? /* @__PURE__ */ f.jsx("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
li.displayName = nt;
var ui = "SelectTrigger", di = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, s = fr(r), i = qe(ui, r), a = i.disabled || n, c = ee(t, i.onTriggerChange), u = dr(r), d = l.useRef("touch"), [m, b, g] = Fi((p) => {
      const v = u().filter((C) => !C.disabled), y = v.find((C) => C.value === i.value), x = Li(v, p, y);
      x !== void 0 && i.onValueChange(x.value);
    }), w = (p) => {
      a || (i.onOpenChange(!0), g()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ f.jsx(pf, { asChild: !0, ...s, children: /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Di(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: V(o.onClick, (p) => {
          p.currentTarget.focus(), d.current !== "mouse" && w(p);
        }),
        onPointerDown: V(o.onPointerDown, (p) => {
          d.current = p.pointerType;
          const v = p.target;
          v.hasPointerCapture(p.pointerId) && v.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (w(p), p.preventDefault());
        }),
        onKeyDown: V(o.onKeyDown, (p) => {
          const v = m.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && b(p.key), !(v && p.key === " ") && gf.includes(p.key) && (w(), p.preventDefault());
        })
      }
    ) });
  }
);
di.displayName = ui;
var fi = "SelectValue", pi = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: i = "", ...a } = e, c = qe(fi, r), { onValueNodeHasChildrenChange: u } = c, d = s !== void 0, m = ee(t, c.onValueNodeChange);
    return me(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ f.jsx(
      W.span,
      {
        ...a,
        ref: m,
        style: { pointerEvents: "none" },
        children: Di(c.value) ? /* @__PURE__ */ f.jsx(f.Fragment, { children: i }) : s
      }
    );
  }
);
pi.displayName = fi;
var Ef = "SelectIcon", mi = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
mi.displayName = Ef;
var Sf = "SelectPortal", hi = (e) => /* @__PURE__ */ f.jsx(nn, { asChild: !0, ...e });
hi.displayName = Sf;
var ot = "SelectContent", vi = l.forwardRef(
  (e, t) => {
    const r = qe(ot, e.__scopeSelect), [n, o] = l.useState();
    if (me(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? kt.createPortal(
        /* @__PURE__ */ f.jsx(gi, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx(ur.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ f.jsx(bi, { ...e, ref: t });
  }
);
vi.displayName = ot;
var Pe = 10, [gi, Ze] = wt(ot), Rf = "SelectContentImpl", Tf = /* @__PURE__ */ mt("SelectContent.RemoveScroll"), bi = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: m,
      collisionBoundary: b,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: v,
      //
      ...y
    } = e, x = qe(ot, r), [C, E] = l.useState(null), [S, N] = l.useState(null), k = ee(t, (_) => E(_)), [R, D] = l.useState(null), [U, H] = l.useState(
      null
    ), z = dr(r), [L, A] = l.useState(!1), F = l.useRef(!1);
    l.useEffect(() => {
      if (C) return ss(C);
    }, [C]), qo();
    const O = l.useCallback(
      (_) => {
        const [Q, ...ie] = z().map((X) => X.ref.current), [Y] = ie.slice(-1), Z = document.activeElement;
        for (const X of _)
          if (X === Z || (X == null || X.scrollIntoView({ block: "nearest" }), X === Q && S && (S.scrollTop = 0), X === Y && S && (S.scrollTop = S.scrollHeight), X == null || X.focus(), document.activeElement !== Z)) return;
      },
      [z, S]
    ), $ = l.useCallback(
      () => O([R, C]),
      [O, R, C]
    );
    l.useEffect(() => {
      L && $();
    }, [L, $]);
    const { onOpenChange: T, triggerPointerDownPosRef: K } = x;
    l.useEffect(() => {
      if (C) {
        let _ = { x: 0, y: 0 };
        const Q = (Y) => {
          var Z, X;
          _ = {
            x: Math.abs(Math.round(Y.pageX) - (((Z = K.current) == null ? void 0 : Z.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((X = K.current) == null ? void 0 : X.y) ?? 0))
          };
        }, ie = (Y) => {
          _.x <= 10 && _.y <= 10 ? Y.preventDefault() : C.contains(Y.target) || T(!1), document.removeEventListener("pointermove", Q), K.current = null;
        };
        return K.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", ie, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", ie, { capture: !0 });
        };
      }
    }, [C, T, K]), l.useEffect(() => {
      const _ = () => T(!1);
      return window.addEventListener("blur", _), window.addEventListener("resize", _), () => {
        window.removeEventListener("blur", _), window.removeEventListener("resize", _);
      };
    }, [T]);
    const [ae, fe] = Fi((_) => {
      const Q = z().filter((Z) => !Z.disabled), ie = Q.find((Z) => Z.ref.current === document.activeElement), Y = Li(Q, _, ie);
      Y && setTimeout(() => Y.ref.current.focus());
    }), he = l.useCallback(
      (_, Q, ie) => {
        const Y = !F.current && !ie;
        (x.value !== void 0 && x.value === Q || Y) && (D(_), Y && (F.current = !0));
      },
      [x.value]
    ), re = l.useCallback(() => C == null ? void 0 : C.focus(), [C]), oe = l.useCallback(
      (_, Q, ie) => {
        const Y = !F.current && !ie;
        (x.value !== void 0 && x.value === Q || Y) && H(_);
      },
      [x.value]
    ), ye = n === "popper" ? Gr : xi, be = ye === Gr ? {
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: m,
      collisionBoundary: b,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ f.jsx(
      gi,
      {
        scope: r,
        content: C,
        viewport: S,
        onViewportChange: N,
        itemRefCallback: he,
        selectedItem: R,
        onItemLeave: re,
        itemTextRefCallback: oe,
        focusSelectedItem: $,
        selectedItemText: U,
        position: n,
        isPositioned: L,
        searchRef: ae,
        children: /* @__PURE__ */ f.jsx(on, { as: Tf, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
          rn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (_) => {
              _.preventDefault();
            },
            onUnmountAutoFocus: V(o, (_) => {
              var Q;
              (Q = x.trigger) == null || Q.focus({ preventScroll: !0 }), _.preventDefault();
            }),
            children: /* @__PURE__ */ f.jsx(
              nr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (_) => _.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ f.jsx(
                  ye,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (_) => _.preventDefault(),
                    ...y,
                    ...be,
                    onPlaced: () => A(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: V(y.onKeyDown, (_) => {
                      const Q = _.ctrlKey || _.altKey || _.metaKey;
                      if (_.key === "Tab" && _.preventDefault(), !Q && _.key.length === 1 && fe(_.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                        let Y = z().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                        if (["ArrowUp", "End"].includes(_.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(_.key)) {
                          const Z = _.target, X = Y.indexOf(Z);
                          Y = Y.slice(X + 1);
                        }
                        setTimeout(() => O(Y)), _.preventDefault();
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
bi.displayName = Rf;
var Pf = "SelectItemAlignedPosition", xi = l.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, s = qe(ot, r), i = Ze(ot, r), [a, c] = l.useState(null), [u, d] = l.useState(null), m = ee(t, (k) => d(k)), b = dr(r), g = l.useRef(!1), w = l.useRef(!0), { viewport: p, selectedItem: v, selectedItemText: y, focusSelectedItem: x } = i, C = l.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && p && v && y) {
      const k = s.trigger.getBoundingClientRect(), R = u.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), U = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Z = U.left - R.left, X = D.left - Z, ve = k.left - X, Ee = k.width + ve, Ie = Math.max(Ee, R.width), Te = window.innerWidth - Pe, ze = uo(X, [
          Pe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Pe, Te - Ie)
        ]);
        a.style.minWidth = Ee + "px", a.style.left = ze + "px";
      } else {
        const Z = R.right - U.right, X = window.innerWidth - D.right - Z, ve = window.innerWidth - k.right - X, Ee = k.width + ve, Ie = Math.max(Ee, R.width), Te = window.innerWidth - Pe, ze = uo(X, [
          Pe,
          Math.max(Pe, Te - Ie)
        ]);
        a.style.minWidth = Ee + "px", a.style.right = ze + "px";
      }
      const H = b(), z = window.innerHeight - Pe * 2, L = p.scrollHeight, A = window.getComputedStyle(u), F = parseInt(A.borderTopWidth, 10), O = parseInt(A.paddingTop, 10), $ = parseInt(A.borderBottomWidth, 10), T = parseInt(A.paddingBottom, 10), K = F + O + L + T + $, ae = Math.min(v.offsetHeight * 5, K), fe = window.getComputedStyle(p), he = parseInt(fe.paddingTop, 10), re = parseInt(fe.paddingBottom, 10), oe = k.top + k.height / 2 - Pe, ye = z - oe, be = v.offsetHeight / 2, _ = v.offsetTop + be, Q = F + O + _, ie = K - Q;
      if (Q <= oe) {
        const Z = H.length > 0 && v === H[H.length - 1].ref.current;
        a.style.bottom = "0px";
        const X = u.clientHeight - p.offsetTop - p.offsetHeight, ve = Math.max(
          ye,
          be + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Z ? re : 0) + X + $
        ), Ee = Q + ve;
        a.style.height = Ee + "px";
      } else {
        const Z = H.length > 0 && v === H[0].ref.current;
        a.style.top = "0px";
        const ve = Math.max(
          oe,
          F + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Z ? he : 0) + be
        ) + ie;
        a.style.height = ve + "px", p.scrollTop = Q - oe + p.offsetTop;
      }
      a.style.margin = `${Pe}px 0`, a.style.minHeight = ae + "px", a.style.maxHeight = z + "px", n == null || n(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    b,
    s.trigger,
    s.valueNode,
    a,
    u,
    p,
    v,
    y,
    s.dir,
    n
  ]);
  me(() => C(), [C]);
  const [E, S] = l.useState();
  me(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const N = l.useCallback(
    (k) => {
      k && w.current === !0 && (C(), x == null || x(), w.current = !1);
    },
    [C, x]
  );
  return /* @__PURE__ */ f.jsx(
    Af,
    {
      scope: r,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ f.jsx(
            W.div,
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
xi.displayName = Pf;
var kf = "SelectPopperPosition", Gr = l.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Pe,
    ...s
  } = e, i = fr(r);
  return /* @__PURE__ */ f.jsx(
    mf,
    {
      ...i,
      ...s,
      ref: t,
      align: n,
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
Gr.displayName = kf;
var [Af, En] = wt(ot, {}), Kr = "SelectViewport", yi = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, s = Ze(Kr, r), i = En(Kr, r), a = ee(t, s.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ f.jsx(ur.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
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
          onScroll: V(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: b } = i;
            if (b != null && b.current && m) {
              const g = Math.abs(c.current - d.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - Pe * 2, p = parseFloat(m.style.minHeight), v = parseFloat(m.style.height), y = Math.max(p, v);
                if (y < w) {
                  const x = y + g, C = Math.min(w, x), E = x - C;
                  m.style.height = C + "px", m.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
yi.displayName = Kr;
var wi = "SelectGroup", [Nf, If] = wt(wi), Ci = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = et();
    return /* @__PURE__ */ f.jsx(Nf, { scope: r, id: o, children: /* @__PURE__ */ f.jsx(W.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Ci.displayName = wi;
var Ei = "SelectLabel", Si = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = If(Ei, r);
    return /* @__PURE__ */ f.jsx(W.div, { id: o.id, ...n, ref: t });
  }
);
Si.displayName = Ei;
var Jt = "SelectItem", [_f, Ri] = wt(Jt), Ti = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = qe(Jt, r), c = Ze(Jt, r), u = a.value === n, [d, m] = l.useState(s ?? ""), [b, g] = l.useState(!1), w = ee(
      t,
      (x) => {
        var C;
        return (C = c.itemRefCallback) == null ? void 0 : C.call(c, x, n, o);
      }
    ), p = et(), v = l.useRef("touch"), y = () => {
      o || (a.onValueChange(n), a.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f.jsx(
      _f,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: l.useCallback((x) => {
          m((C) => C || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f.jsx(
          ur.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ f.jsx(
              W.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": b ? "" : void 0,
                "aria-selected": u && b,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: V(i.onFocus, () => g(!0)),
                onBlur: V(i.onBlur, () => g(!1)),
                onClick: V(i.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: V(i.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: V(i.onPointerDown, (x) => {
                  v.current = x.pointerType;
                }),
                onPointerMove: V(i.onPointerMove, (x) => {
                  var C;
                  v.current = x.pointerType, o ? (C = c.onItemLeave) == null || C.call(c) : v.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: V(i.onPointerLeave, (x) => {
                  var C;
                  x.currentTarget === document.activeElement && ((C = c.onItemLeave) == null || C.call(c));
                }),
                onKeyDown: V(i.onKeyDown, (x) => {
                  var E;
                  ((E = c.searchRef) == null ? void 0 : E.current) !== "" && x.key === " " || (bf.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ti.displayName = Jt;
var Rt = "SelectItemText", Pi = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e, i = qe(Rt, r), a = Ze(Rt, r), c = Ri(Rt, r), u = Cf(Rt, r), [d, m] = l.useState(null), b = ee(
      t,
      (y) => m(y),
      c.onItemTextChange,
      (y) => {
        var x;
        return (x = a.itemTextRefCallback) == null ? void 0 : x.call(a, y, c.value, c.disabled);
      }
    ), g = d == null ? void 0 : d.textContent, w = l.useMemo(
      () => /* @__PURE__ */ f.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: v } = u;
    return me(() => (p(w), () => v(w)), [p, v, w]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(W.span, { id: c.textId, ...s, ref: b }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? kt.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Pi.displayName = Rt;
var ki = "SelectItemIndicator", Ai = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Ri(ki, r).isSelected ? /* @__PURE__ */ f.jsx(W.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Ai.displayName = ki;
var Yr = "SelectScrollUpButton", Ni = l.forwardRef((e, t) => {
  const r = Ze(Yr, e.__scopeSelect), n = En(Yr, e.__scopeSelect), [o, s] = l.useState(!1), i = ee(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = c.scrollTop > 0;
        s(u);
      };
      const c = r.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    _i,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = r;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Ni.displayName = Yr;
var Xr = "SelectScrollDownButton", Ii = l.forwardRef((e, t) => {
  const r = Ze(Xr, e.__scopeSelect), n = En(Xr, e.__scopeSelect), [o, s] = l.useState(!1), i = ee(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        s(d);
      };
      const c = r.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    _i,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = r;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Ii.displayName = Xr;
var _i = l.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, s = Ze("SelectScrollButton", r), i = l.useRef(null), a = dr(r), c = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), me(() => {
    var d;
    const u = a().find((m) => m.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ f.jsx(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: V(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: V(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: V(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Of = "SelectSeparator", Oi = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Oi.displayName = Of;
var qr = "SelectArrow", ji = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = fr(r), s = qe(qr, r), i = Ze(qr, r);
    return s.open && i.position === "popper" ? /* @__PURE__ */ f.jsx(hf, { ...o, ...n, ref: t }) : null;
  }
);
ji.displayName = qr;
var jf = "SelectBubbleInput", Mi = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = l.useRef(null), s = ee(n, o), i = er(t);
    return l.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && d) {
        const m = new Event("change", { bubbles: !0 });
        d.call(a, t), a.dispatchEvent(m);
      }
    }, [i, t]), /* @__PURE__ */ f.jsx(
      W.select,
      {
        ...r,
        style: { ...ci, ...r.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Mi.displayName = jf;
function Di(e) {
  return e === "" || e === void 0;
}
function Fi(e) {
  const t = Re(e), r = l.useRef(""), n = l.useRef(0), o = l.useCallback(
    (i) => {
      const a = r.current + i;
      t(a), function c(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), s = l.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function Li(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = r ? e.indexOf(r) : -1;
  let i = Mf(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Mf(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Df = li, Ff = di, Lf = pi, $f = mi, Vf = hi, Bf = vi, Wf = yi, zf = Ci, Uf = Si, Hf = Ti, Gf = Pi, Kf = Ai, Yf = Ni, Xf = Ii, qf = Oi, Zf = ji;
const Jf = De(
  `inline-flex h-[3rem] w-full cursor-pointer justify-between rounded border
  border-input-default bg-surface-primary py-sm pr-sm pl-md text-body-primary
  hover:bg-surface-secondary focus:border-input-focused focus:outline-0
  disabled:border-input-disabled disabled:bg-surface-disabled
  disabled:text-body-disabled`,
  {
    variants: {
      invalid: {
        false: "text-body-primary focus:ring-input-focused",
        true: "border-input-alert focus:ring-input-alert"
      }
    }
  }
), Qf = ne(
  `flex h-[2.75rem] cursor-pointer items-center gap-xs border-0 px-md
  text-body-primary ring-0 hover:bg-interactive-neutral-hover
  focus:bg-interactive-neutral-hover focus:outline-0
  active:bg-interactive-neutral-active disabled:bg-surface-disabled
  disabled:text-interactive-disabled`
), nm = ({
  options: e,
  placeholder: t,
  className: r,
  invalid: n = !1,
  ...o
}) => /* @__PURE__ */ f.jsxs(Df, { ...o, children: [
  /* @__PURE__ */ f.jsxs(
    Ff,
    {
      className: ne(pe(Jf({ invalid: n })), r),
      children: [
        /* @__PURE__ */ f.jsx(
          Lf,
          {
            placeholder: t || "Select an option",
            className: "text-body-primary"
          }
        ),
        /* @__PURE__ */ f.jsx(
          $f,
          {
            className: pe(
              ne("h-md w-md text-body-primary", {
                "text-body-disabled": o.disabled
              })
            ),
            children: /* @__PURE__ */ f.jsx(Lc, { className: "w-full" })
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ f.jsx(Vf, { children: /* @__PURE__ */ f.jsxs(
    Bf,
    {
      position: "popper",
      className: ne(
        `relative z-50 max-h-96 w-full min-w-[8rem] overflow-hidden rounded
            border border-input-default bg-surface-primary py-xxs`,
        r
      ),
      children: [
        /* @__PURE__ */ f.jsx(Yf, {}),
        /* @__PURE__ */ f.jsx(Wf, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((s, i) => {
          switch (s.type) {
            case "Group":
              return /* @__PURE__ */ f.jsx(zf, { children: /* @__PURE__ */ f.jsx(Uf, { children: s.label }) }, i);
            case "Separator":
              return /* @__PURE__ */ f.jsx(
                qf,
                {
                  className: "m-[5px] h-px border-b border-divider-default"
                },
                i
              );
            default:
              return /* @__PURE__ */ f.jsxs(
                Hf,
                {
                  value: s.value,
                  className: Qf,
                  children: [
                    s.icon && /* @__PURE__ */ f.jsx(s.icon, { className: "-ml-xxs h-lg w-lg" }),
                    /* @__PURE__ */ f.jsx(Gf, { children: s.label }),
                    /* @__PURE__ */ f.jsx(Kf, {})
                  ]
                },
                i
              );
          }
        }) }),
        /* @__PURE__ */ f.jsx(Xf, {}),
        /* @__PURE__ */ f.jsx(Zf, {})
      ]
    }
  ) })
] }), ep = De("flex items-center", {
  variants: {
    size: {
      sm: "gap-x-xs",
      md: "gap-x-md gap-y-lg"
    },
    layout: {
      row: "flex-row",
      column: "flex-col"
    }
  }
}), tp = {
  sm: "h-[1.25rem] w-[1.25rem]",
  md: "h-9 w-9"
}, Qt = {
  sm: 16,
  md: 10
}, Co = {
  sm: (50 - Qt.sm / 2).toString(),
  md: (50 - Qt.md / 2).toString()
}, rp = ({
  layout: e,
  size: t,
  children: r,
  className: n,
  ...o
}) => /* @__PURE__ */ f.jsxs(
  "div",
  {
    role: "status",
    className: pe(
      ne(ep({ size: t, layout: e }), n)
    ),
    ...o,
    children: [
      /* @__PURE__ */ f.jsxs(
        "svg",
        {
          width: "100",
          height: "100",
          viewBox: "0 0 100 100",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          className: ne(
            tp[t],
            "animate-spin text-transparent"
          ),
          children: [
            /* @__PURE__ */ f.jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: Co[t],
                stroke: "var(--token-color-shape-accent-gray-pale)",
                "stroke-width": Qt[t]
              }
            ),
            /* @__PURE__ */ f.jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: Co[t],
                stroke: "var(--token-color-shape-accent-green-strong)",
                "stroke-width": Qt[t],
                strokeLinecap: "round",
                strokeDasharray: "141.37 282.74",
                strokeDashoffset: "0"
              }
            )
          ]
        }
      ),
      r
    ]
  }
);
rp.displayName = "Spinner";
var pr = "Switch", [np, om] = Ne(pr), [op, sp] = np(pr), $i = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: c = "on",
      onCheckedChange: u,
      form: d,
      ...m
    } = e, [b, g] = l.useState(null), w = ee(t, (C) => g(C)), p = l.useRef(!1), v = b ? d || !!b.closest("form") : !0, [y, x] = Ke({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: pr
    });
    return /* @__PURE__ */ f.jsxs(op, { scope: r, checked: y, disabled: a, children: [
      /* @__PURE__ */ f.jsx(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": zi(y),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: c,
          ...m,
          ref: w,
          onClick: V(e.onClick, (C) => {
            x((E) => !E), v && (p.current = C.isPropagationStopped(), p.current || C.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ f.jsx(
        Wi,
        {
          control: b,
          bubbles: !p.current,
          name: n,
          value: c,
          checked: y,
          required: i,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
$i.displayName = pr;
var Vi = "SwitchThumb", Bi = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = sp(Vi, r);
    return /* @__PURE__ */ f.jsx(
      W.span,
      {
        "data-state": zi(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Bi.displayName = Vi;
var ip = "SwitchBubbleInput", Wi = l.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = l.useRef(null), a = ee(i, s), c = er(r), u = tr(t);
    return l.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const m = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== r && g) {
        const w = new Event("click", { bubbles: n });
        g.call(d, r), d.dispatchEvent(w);
      }
    }, [c, r, n]), /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Wi.displayName = ip;
function zi(e) {
  return e ? "checked" : "unchecked";
}
var ap = $i, cp = Bi;
function sm({ className: e, ...t }) {
  return /* @__PURE__ */ f.jsx(
    ap,
    {
      "data-slot": "switch",
      className: ne(
        `peer inline-flex h-6 w-10 shrink-0 items-center rounded-full
        transition-all outline-none focus-visible:border-interactive-light
        focus-visible:ring-[3px]
        focus-visible:ring-shape-interactive-primary-default/50
        disabled:cursor-not-allowed disabled:opacity-50
        data-[state=checked]:bg-status-success
        data-[state=unchecked]:bg-shape-accent-gray-soft`,
        e
      ),
      ...t,
      children: /* @__PURE__ */ f.jsx(
        cp,
        {
          "data-slot": "switch-thumb",
          className: ne(
            `pointer-events-none block size-4 rounded-full
          bg-shape-interactive-inverse ring-0 transition-transform
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1`
          )
        }
      )
    }
  );
}
const lp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { className: "relative w-full overflow-auto border border-surface-default", children: /* @__PURE__ */ f.jsx(
  "table",
  {
    ref: r,
    className: ne("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
lp.displayName = "Table";
const up = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "thead",
  {
    ref: r,
    className: ne(
      "h-10 bg-surface-secondary [&_tr]:border-b",
      e
    ),
    ...t
  }
));
up.displayName = "TableHeader";
const dp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "tbody",
  {
    ref: r,
    className: ne("[&_tr:last-child]:border-0", e),
    ...t
  }
));
dp.displayName = "TableBody";
const fp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "tfoot",
  {
    ref: r,
    className: ne(
      "border-t bg-surface-secondary font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
fp.displayName = "TableFooter";
const pp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "tr",
  {
    ref: r,
    className: ne(
      `border-b border-surface-default transition-colors
      hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected`,
      e
    ),
    ...t
  }
));
pp.displayName = "TableRow";
const mp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "th",
  {
    ref: r,
    className: ne(
      `px-4 text-left align-middle font-medium text-body-primary
      [&:has([role=checkbox])]:w-4 [&:has([role=checkbox])]:pr-0`,
      e
    ),
    ...t
  }
));
mp.displayName = "TableHead";
const hp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "td",
  {
    ref: r,
    className: ne(
      "h-12 w-fit px-4 py-4 align-middle [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
hp.displayName = "TableCell";
const vp = le.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "caption",
  {
    ref: r,
    className: ne("mt-4 text-sm text-body-primary", e),
    ...t
  }
));
vp.displayName = "TableCaption";
const im = ({
  accentColor: e,
  children: t,
  className: r,
  onRemove: n
}) => (console.log("TagProps:", e), /* @__PURE__ */ f.jsxs(
  "div",
  {
    className: pe(
      ne(
        `my-1 inline-flex items-center gap-xxs rounded-full p-xs text-sm
          text-accent-gray-strong`,
        r
      )
    ),
    style: {
      backgroundColor: `var(${e})`
    },
    children: [
      t,
      !!n && /* @__PURE__ */ f.jsx(
        "button",
        {
          className: pe(
            `bg-interactive-secondary-default flex h-3 w-3 items-center
            justify-center rounded-full`
          ),
          onClick: n,
          children: /* @__PURE__ */ f.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-2 w-2 text-shape-primary",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ f.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ f.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ]
            }
          )
        }
      )
    ]
  }
)), gp = De(
  `h-12 min-h-30 w-full rounded border border-input-default bg-surface-primary
  px-md py-sm hover:bg-surface-secondary focus:border-input-focused
  focus:outline-0 disabled:border-input-disabled disabled:bg-surface-disabled
  disabled:text-body-disabled`,
  {
    variants: {
      invalid: {
        false: "text-body-primary focus:ring-input-focused",
        true: "border-input-alert focus:ring-input-alert"
      }
    }
  }
), am = le.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: r = 0,
    showCharacterLimit: n = !0,
    ...o
  }, s) => {
    const [i, a] = le.useState(o.value || ""), c = (u) => {
      if (r && u.target.value.length > r) {
        u.preventDefault();
        return;
      }
      a(u.target.value), o.onChange && o.onChange(u);
    };
    return /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx(
        "textarea",
        {
          ref: s,
          className: ne(
            pe(gp({ invalid: e }), t)
          ),
          ...o,
          value: i,
          onChange: c
        }
      ),
      !!(r && n) && /* @__PURE__ */ f.jsxs("div", { className: "text-right text-sm text-body-secondary", children: [
        i.toString().length,
        "/",
        r
      ] })
    ] });
  }
);
var Sn = "ToastProvider", [Rn, bp, xp] = un("Toast"), [Ui, cm] = Ne("Toast", [xp]), [yp, mr] = Ui(Sn), Hi = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: i
  } = e, [a, c] = l.useState(null), [u, d] = l.useState(0), m = l.useRef(!1), b = l.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Sn}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ f.jsx(Rn.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
    yp,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: u,
      viewport: a,
      onViewportChange: c,
      onToastAdd: l.useCallback(() => d((g) => g + 1), []),
      onToastRemove: l.useCallback(() => d((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: b,
      children: i
    }
  ) });
};
Hi.displayName = Sn;
var Gi = "ToastViewport", wp = ["F8"], Zr = "toast.viewportPause", Jr = "toast.viewportResume", Ki = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = wp,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, i = mr(Gi, r), a = bp(r), c = l.useRef(null), u = l.useRef(null), d = l.useRef(null), m = l.useRef(null), b = ee(t, m, i.onViewportChange), g = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = i.toastCount > 0;
    l.useEffect(() => {
      const v = (y) => {
        var C;
        n.length !== 0 && n.every((E) => y[E] || y.code === E) && ((C = m.current) == null || C.focus());
      };
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
    }, [n]), l.useEffect(() => {
      const v = c.current, y = m.current;
      if (w && v && y) {
        const x = () => {
          if (!i.isClosePausedRef.current) {
            const N = new CustomEvent(Zr);
            y.dispatchEvent(N), i.isClosePausedRef.current = !0;
          }
        }, C = () => {
          if (i.isClosePausedRef.current) {
            const N = new CustomEvent(Jr);
            y.dispatchEvent(N), i.isClosePausedRef.current = !1;
          }
        }, E = (N) => {
          !v.contains(N.relatedTarget) && C();
        }, S = () => {
          v.contains(document.activeElement) || C();
        };
        return v.addEventListener("focusin", x), v.addEventListener("focusout", E), v.addEventListener("pointermove", x), v.addEventListener("pointerleave", S), window.addEventListener("blur", x), window.addEventListener("focus", C), () => {
          v.removeEventListener("focusin", x), v.removeEventListener("focusout", E), v.removeEventListener("pointermove", x), v.removeEventListener("pointerleave", S), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        };
      }
    }, [w, i.isClosePausedRef]);
    const p = l.useCallback(
      ({ tabbingDirection: v }) => {
        const x = a().map((C) => {
          const E = C.ref.current, S = [E, ...jp(E)];
          return v === "forwards" ? S : S.reverse();
        });
        return (v === "forwards" ? x.reverse() : x).flat();
      },
      [a]
    );
    return l.useEffect(() => {
      const v = m.current;
      if (v) {
        const y = (x) => {
          var S, N, k;
          const C = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !C) {
            const R = document.activeElement, D = x.shiftKey;
            if (x.target === v && D) {
              (S = u.current) == null || S.focus();
              return;
            }
            const z = p({ tabbingDirection: D ? "backwards" : "forwards" }), L = z.findIndex((A) => A === R);
            Mr(z.slice(L + 1)) ? x.preventDefault() : D ? (N = u.current) == null || N.focus() : (k = d.current) == null || k.focus();
          }
        };
        return v.addEventListener("keydown", y), () => v.removeEventListener("keydown", y);
      }
    }, [a, p]), /* @__PURE__ */ f.jsxs(
      tl,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w && /* @__PURE__ */ f.jsx(
            Qr,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const v = p({
                  tabbingDirection: "forwards"
                });
                Mr(v);
              }
            }
          ),
          /* @__PURE__ */ f.jsx(Rn.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(W.ol, { tabIndex: -1, ...s, ref: b }) }),
          w && /* @__PURE__ */ f.jsx(
            Qr,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = p({
                  tabbingDirection: "backwards"
                });
                Mr(v);
              }
            }
          )
        ]
      }
    );
  }
);
Ki.displayName = Gi;
var Yi = "ToastFocusProxy", Qr = l.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, s = mr(Yi, r);
    return /* @__PURE__ */ f.jsx(
      Cn,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var u;
          const a = i.relatedTarget;
          !((u = s.viewport) != null && u.contains(a)) && n();
        }
      }
    );
  }
);
Qr.displayName = Yi;
var It = "Toast", Cp = "toast.swipeStart", Ep = "toast.swipeMove", Sp = "toast.swipeCancel", Rp = "toast.swipeEnd", Xi = l.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: s, ...i } = e, [a, c] = Ke({
      prop: n,
      defaultProp: o ?? !0,
      onChange: s,
      caller: It
    });
    return /* @__PURE__ */ f.jsx(bt, { present: r || a, children: /* @__PURE__ */ f.jsx(
      kp,
      {
        open: a,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Re(e.onPause),
        onResume: Re(e.onResume),
        onSwipeStart: V(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: V(e.onSwipeMove, (u) => {
          const { x: d, y: m } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: V(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: V(e.onSwipeEnd, (u) => {
          const { x: d, y: m } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), c(!1);
        })
      }
    ) });
  }
);
Xi.displayName = It;
var [Tp, Pp] = Ui(It, {
  onClose() {
  }
}), kp = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: s,
      onClose: i,
      onEscapeKeyDown: a,
      onPause: c,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: m,
      onSwipeCancel: b,
      onSwipeEnd: g,
      ...w
    } = e, p = mr(It, r), [v, y] = l.useState(null), x = ee(t, (A) => y(A)), C = l.useRef(null), E = l.useRef(null), S = o || p.duration, N = l.useRef(0), k = l.useRef(S), R = l.useRef(0), { onToastAdd: D, onToastRemove: U } = p, H = Re(() => {
      var F;
      (v == null ? void 0 : v.contains(document.activeElement)) && ((F = p.viewport) == null || F.focus()), i();
    }), z = l.useCallback(
      (A) => {
        !A || A === 1 / 0 || (window.clearTimeout(R.current), N.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(H, A));
      },
      [H]
    );
    l.useEffect(() => {
      const A = p.viewport;
      if (A) {
        const F = () => {
          z(k.current), u == null || u();
        }, O = () => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - N.current;
          k.current = k.current - $, window.clearTimeout(R.current), c == null || c();
        };
        return A.addEventListener(Zr, O), A.addEventListener(Jr, F), () => {
          A.removeEventListener(Zr, O), A.removeEventListener(Jr, F);
        };
      }
    }, [p.viewport, S, c, u, z]), l.useEffect(() => {
      s && !p.isClosePausedRef.current && z(S);
    }, [s, S, p.isClosePausedRef, z]), l.useEffect(() => (D(), () => U()), [D, U]);
    const L = l.useMemo(() => v ? na(v) : null, [v]);
    return p.viewport ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      L && /* @__PURE__ */ f.jsx(
        Ap,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: L
        }
      ),
      /* @__PURE__ */ f.jsx(Tp, { scope: r, onClose: H, children: kt.createPortal(
        /* @__PURE__ */ f.jsx(Rn.ItemSlot, { scope: r, children: /* @__PURE__ */ f.jsx(
          el,
          {
            asChild: !0,
            onEscapeKeyDown: V(a, () => {
              p.isFocusedToastEscapeKeyDownRef.current || H(), p.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ f.jsx(
              W.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": p.swipeDirection,
                ...w,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: V(e.onKeyDown, (A) => {
                  A.key === "Escape" && (a == null || a(A.nativeEvent), A.nativeEvent.defaultPrevented || (p.isFocusedToastEscapeKeyDownRef.current = !0, H()));
                }),
                onPointerDown: V(e.onPointerDown, (A) => {
                  A.button === 0 && (C.current = { x: A.clientX, y: A.clientY });
                }),
                onPointerMove: V(e.onPointerMove, (A) => {
                  if (!C.current) return;
                  const F = A.clientX - C.current.x, O = A.clientY - C.current.y, $ = !!E.current, T = ["left", "right"].includes(p.swipeDirection), K = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max, ae = T ? K(0, F) : 0, fe = T ? 0 : K(0, O), he = A.pointerType === "touch" ? 10 : 2, re = { x: ae, y: fe }, oe = { originalEvent: A, delta: re };
                  $ ? (E.current = re, Wt(Ep, m, oe, {
                    discrete: !1
                  })) : Eo(re, p.swipeDirection, he) ? (E.current = re, Wt(Cp, d, oe, {
                    discrete: !1
                  }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(F) > he || Math.abs(O) > he) && (C.current = null);
                }),
                onPointerUp: V(e.onPointerUp, (A) => {
                  const F = E.current, O = A.target;
                  if (O.hasPointerCapture(A.pointerId) && O.releasePointerCapture(A.pointerId), E.current = null, C.current = null, F) {
                    const $ = A.currentTarget, T = { originalEvent: A, delta: F };
                    Eo(F, p.swipeDirection, p.swipeThreshold) ? Wt(Rp, g, T, {
                      discrete: !0
                    }) : Wt(
                      Sp,
                      b,
                      T,
                      {
                        discrete: !0
                      }
                    ), $.addEventListener("click", (K) => K.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        p.viewport
      ) })
    ] }) : null;
  }
), Ap = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = mr(It, t), [s, i] = l.useState(!1), [a, c] = l.useState(!1);
  return _p(() => i(!0)), l.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), a ? null : /* @__PURE__ */ f.jsx(nn, { asChild: !0, children: /* @__PURE__ */ f.jsx(Cn, { ...n, children: s && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, Np = "ToastTitle", qi = l.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { ...n, ref: t });
  }
);
qi.displayName = Np;
var Ip = "ToastDescription", Zi = l.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { ...n, ref: t });
  }
);
Zi.displayName = Ip;
var Ji = "ToastAction", Qi = l.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ f.jsx(ra, { altText: r, asChild: !0, children: /* @__PURE__ */ f.jsx(ta, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Ji}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Qi.displayName = Ji;
var ea = "ToastClose", ta = l.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = Pp(ea, r);
    return /* @__PURE__ */ f.jsx(ra, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
ta.displayName = ea;
var ra = l.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ f.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function na(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Op(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...na(n));
    }
  }), t;
}
function Wt(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Do(o, s) : o.dispatchEvent(s);
}
var Eo = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > r : !s && o > r;
};
function _p(e = () => {
}) {
  const t = Re(e);
  me(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function Op(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function jp(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Mr(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var Mp = Hi, Dp = Ki, Fp = Xi, Lp = qi, $p = Zi, Vp = Qi;
const lm = ({
  message: e,
  title: t,
  isOpen: r,
  onClose: n,
  level: o
}) => /* @__PURE__ */ f.jsxs(Mp, { children: [
  /* @__PURE__ */ f.jsx(
    Fp,
    {
      open: r,
      onOpenChange: n,
      className: `w-96 rounded border-1 border-surface-default
          bg-surface-primary p-md text-body-primary shadow-high`,
      children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-xs", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex items-start gap-xs", children: [
          /* @__PURE__ */ f.jsxs("div", { children: [
            o === "success" && /* @__PURE__ */ f.jsx(
              $c,
              {
                className: "h-md w-md text-shape-status-success"
              }
            ),
            o === "error" && /* @__PURE__ */ f.jsx(Vc, { className: "h-md w-md text-shape-status-alert" }),
            o === "warning" && /* @__PURE__ */ f.jsx(
              Bc,
              {
                className: "h-md w-md text-shape-status-warning"
              }
            ),
            o === "info" && /* @__PURE__ */ f.jsx(
              Wc,
              {
                className: "h-md w-md text-shape-status-info"
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(Lp, { className: "font-bold text-body-primary", children: /* @__PURE__ */ f.jsx("h5", { className: "mb-xxs text-md leading-none", children: t }) }),
            /* @__PURE__ */ f.jsx($p, { children: /* @__PURE__ */ f.jsx("p", { className: "text-md", children: e }) })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Vp, { asChild: !0, altText: "Close", className: "pt-xxxs", children: /* @__PURE__ */ f.jsx("button", { onClick: n, className: "cursor-pointer", children: /* @__PURE__ */ f.jsx(Ho, { className: "h-md w-md text-body-primary" }) }) }) })
      ] })
    }
  ),
  /* @__PURE__ */ f.jsx(Dp, {})
] });
export {
  $r as Button,
  Up as Checkbox,
  Hp as CheckboxGroup,
  Gp as Chip,
  qp as Dialog,
  Zp as Input,
  xu as Progress,
  em as RadioButton,
  tm as RadioButtonGroup,
  nm as Select,
  rp as Spinner,
  sm as Switch,
  lp as Table,
  dp as TableBody,
  vp as TableCaption,
  hp as TableCell,
  fp as TableFooter,
  mp as TableHead,
  up as TableHeader,
  pp as TableRow,
  im as Tag,
  am as Textarea,
  lm as Toast
};
