import * as c from "react";
import ne, { forwardRef as Ri, createElement as Jt, useState as Ti, useLayoutEffect as Pi } from "react";
import * as dt from "react-dom";
import ki from "react-dom";
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Ni() {
  if (nn) return st;
  nn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var a in o)
        a !== "key" && (s[a] = o[a]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return st.Fragment = t, st.jsx = r, st.jsxs = r, st;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Ii() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === H ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case k:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case y:
            return "Portal";
          case w:
            return (S.displayName || "Context") + ".Provider";
          case b:
            return (S._context.displayName || "Context") + ".Consumer";
          case C:
            var M = S.render;
            return S = S.displayName, S || (S = M.displayName || M.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case P:
            return M = S.displayName || null, M !== null ? M : e(S.type) || "Memo";
          case E:
            M = S._payload, S = S._init;
            try {
              return e(S(M));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function r(S) {
      try {
        t(S);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var K = M.error, z = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return K.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(S);
      }
    }
    function n(S) {
      if (S === p) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === E)
        return "<...>";
      try {
        var M = e(S);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = V.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (W.call(S, "key")) {
        var M = Object.getOwnPropertyDescriptor(S, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function a(S, M) {
      function K() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: K,
        configurable: !0
      });
    }
    function l() {
      var S = e(this.type);
      return I[S] || (I[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function u(S, M, K, z, q, re, ae, N) {
      return K = re.ref, S = {
        $$typeof: v,
        type: S,
        key: M,
        props: re,
        _owner: q
      }, (K !== void 0 ? K : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function f(S, M, K, z, q, re, ae, N) {
      var $ = M.children;
      if ($ !== void 0)
        if (z)
          if (U($)) {
            for (z = 0; z < $.length; z++)
              m($[z]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m($);
      if (W.call(M, "key")) {
        $ = e(S);
        var ee = Object.keys(M).filter(function(Z) {
          return Z !== "key";
        });
        z = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", Y[$ + z] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          $,
          ee,
          $
        ), Y[$ + z] = !0);
      }
      if ($ = null, K !== void 0 && (r(K), $ = "" + K), i(M) && (r(M.key), $ = "" + M.key), "key" in M) {
        K = {};
        for (var X in M)
          X !== "key" && (K[X] = M[X]);
      } else K = M;
      return $ && a(
        K,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), u(
        S,
        $,
        re,
        q,
        o(),
        K,
        ae,
        N
      );
    }
    function m(S) {
      typeof S == "object" && S !== null && S.$$typeof === v && S._store && (S._store.validated = 1);
    }
    var g = ne, v = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), V = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, U = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(S) {
        return S();
      }
    };
    var D, I = {}, L = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), T = A(n(s)), Y = {};
    it.Fragment = p, it.jsx = function(S, M, K, z, q) {
      var re = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        S,
        M,
        K,
        !1,
        z,
        q,
        re ? Error("react-stack-top-frame") : L,
        re ? A(n(S)) : T
      );
    }, it.jsxs = function(S, M, K, z, q) {
      var re = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        S,
        M,
        K,
        !0,
        z,
        q,
        re ? Error("react-stack-top-frame") : L,
        re ? A(n(S)) : T
      );
    };
  }()), it;
}
var sn;
function Oi() {
  return sn || (sn = 1, process.env.NODE_ENV === "production" ? vt.exports = Ni() : vt.exports = Ii()), vt.exports;
}
var d = Oi();
function zn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = zn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function _i() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = zn(e)) && (n && (n += " "), n += t);
  return n;
}
const an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, cn = _i, we = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return cn(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const f = r == null ? void 0 : r[u], m = s == null ? void 0 : s[u];
    if (f === null) return null;
    const g = an(f) || an(m);
    return o[u][g];
  }), a = r && Object.entries(r).reduce((u, f) => {
    let [m, g] = f;
    return g === void 0 || (u[m] = g), u;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
    let { class: m, className: g, ...v } = f;
    return Object.entries(v).every((y) => {
      let [p, h] = y;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === h;
    }) ? [
      ...u,
      m,
      g
    ] : u;
  }, []);
  return cn(e, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var Qt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ln;
function Mi() {
  return ln || (ln = 1, function(e) {
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
  }(Qt)), Qt.exports;
}
var ji = Mi();
const te = /* @__PURE__ */ Ai(ji);
function un(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Hn(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = un(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : un(e[o], null);
        }
      };
  };
}
function Q(...e) {
  return c.useCallback(Hn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ Li(e), r = c.forwardRef((n, o) => {
    const { children: s, ...i } = n, a = c.Children.toArray(s), l = a.find($i);
    if (l) {
      const u = l.props.children, f = a.map((m) => m === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Di = /* @__PURE__ */ Ye("Slot");
// @__NO_SIDE_EFFECTS__
function Li(e) {
  const t = c.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (c.isValidElement(o)) {
      const i = Vi(o), a = Bi(s, o.props);
      return o.type !== c.Fragment && (a.ref = n ? Hn(n, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fi = Symbol("radix.slottable");
function $i(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fi;
}
function Bi(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Vi(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Or = "-", Wi = (e) => {
  const t = Hi(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Or);
      return a[0] === "" && a.length !== 1 && a.shift(), Un(a, t) || zi(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = r[i] || [];
      return a && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, Un = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Un(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Or);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, dn = /^\[(.+)\]$/, zi = (e) => {
  if (dn.test(e)) {
    const t = dn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Hi = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    mr(r[o], n, o, t);
  return n;
}, mr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : fn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ui(o)) {
        mr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      mr(i, fn(t, s), r, n);
    });
  });
}, fn = (e, t) => {
  let r = e;
  return t.split(Or).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ui = (e) => e.isThemeGetter, Gi = (e) => {
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
}, hr = "!", vr = ":", Ki = vr.length, Yi = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, u;
    for (let y = 0; y < o.length; y++) {
      let p = o[y];
      if (i === 0 && a === 0) {
        if (p === vr) {
          s.push(o.slice(l, y)), l = y + Ki;
          continue;
        }
        if (p === "/") {
          u = y;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? a++ : p === ")" && a--;
    }
    const f = s.length === 0 ? o : o.substring(l), m = Xi(f), g = m !== f, v = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + vr, s = n;
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
}, Xi = (e) => e.endsWith(hr) ? e.substring(0, e.length - 1) : e.startsWith(hr) ? e.substring(1) : e, qi = (e) => {
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
}, Zi = (e) => ({
  cache: Gi(e.cacheSize),
  parseClassName: Yi(e),
  sortModifiers: qi(e),
  ...Wi(e)
}), Ji = /\s+/, Qi = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Ji);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const f = a[u], {
      isExternal: m,
      modifiers: g,
      hasImportantModifier: v,
      baseClassName: y,
      maybePostfixModifierPosition: p
    } = r(f);
    if (m) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let h = !!p, x = n(h ? y.substring(0, p) : y);
    if (!x) {
      if (!h) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = n(y), !x) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const b = s(g).join(":"), w = v ? b + hr : b, C = w + x;
    if (i.includes(C))
      continue;
    i.push(C);
    const R = o(x, h);
    for (let k = 0; k < R.length; ++k) {
      const P = R[k];
      i.push(w + P);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ea() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Gn(t)) && (n && (n += " "), n += r);
  return n;
}
const Gn = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Gn(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ta(e, ...t) {
  let r, n, o, s = i;
  function i(l) {
    const u = t.reduce((f, m) => m(f), e());
    return r = Zi(u), n = r.cache.get, o = r.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = n(l);
    if (u)
      return u;
    const f = Qi(l, r);
    return o(l, f), f;
  }
  return function() {
    return s(ea.apply(null, arguments));
  };
}
const oe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Kn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ra = /^\d+\/\d+$/, na = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sa = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ia = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, aa = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, We = (e) => ra.test(e), G = (e) => !!e && !Number.isNaN(Number(e)), Pe = (e) => !!e && Number.isInteger(Number(e)), er = (e) => e.endsWith("%") && G(e.slice(0, -1)), Ee = (e) => na.test(e), ca = () => !0, la = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  oa.test(e) && !sa.test(e)
), Xn = () => !1, ua = (e) => ia.test(e), da = (e) => aa.test(e), fa = (e) => !O(e) && !_(e), pa = (e) => qe(e, Jn, Xn), O = (e) => Kn.test(e), je = (e) => qe(e, Qn, la), tr = (e) => qe(e, ba, G), pn = (e) => qe(e, qn, Xn), ma = (e) => qe(e, Zn, da), gt = (e) => qe(e, eo, ua), _ = (e) => Yn.test(e), at = (e) => Ze(e, Qn), ha = (e) => Ze(e, xa), mn = (e) => Ze(e, qn), va = (e) => Ze(e, Jn), ga = (e) => Ze(e, Zn), bt = (e) => Ze(e, eo, !0), qe = (e, t, r) => {
  const n = Kn.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ze = (e, t, r = !1) => {
  const n = Yn.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, qn = (e) => e === "position" || e === "percentage", Zn = (e) => e === "image" || e === "url", Jn = (e) => e === "length" || e === "size" || e === "bg-size", Qn = (e) => e === "length", ba = (e) => e === "number", xa = (e) => e === "family-name", eo = (e) => e === "shadow", ya = () => {
  const e = oe("color"), t = oe("font"), r = oe("text"), n = oe("font-weight"), o = oe("tracking"), s = oe("leading"), i = oe("breakpoint"), a = oe("container"), l = oe("spacing"), u = oe("radius"), f = oe("shadow"), m = oe("inset-shadow"), g = oe("text-shadow"), v = oe("drop-shadow"), y = oe("blur"), p = oe("perspective"), h = oe("aspect"), x = oe("ease"), b = oe("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], R = () => [...C(), _, O], k = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], E = () => [_, O, l], j = () => [We, "full", "auto", ...E()], H = () => [Pe, "none", "subgrid", _, O], V = () => ["auto", {
    span: ["full", Pe, _, O]
  }, Pe, _, O], W = () => [Pe, "auto", _, O], U = () => ["auto", "min", "max", "fr", _, O], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...E()], L = () => [We, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], T = () => [e, _, O], Y = () => [...C(), mn, pn, {
    position: [_, O]
  }], S = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], M = () => ["auto", "cover", "contain", va, pa, {
    size: [_, O]
  }], K = () => [er, at, je], z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    _,
    O
  ], q = () => ["", G, at, je], re = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => [G, er, mn, pn], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    _,
    O
  ], ee = () => ["none", G, _, O], X = () => ["none", G, _, O], Z = () => [G, _, O], J = () => [We, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ee],
      breakpoint: [Ee],
      color: [ca],
      container: [Ee],
      "drop-shadow": [Ee],
      ease: ["in", "out", "in-out"],
      font: [fa],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ee],
      shadow: [Ee],
      spacing: ["px", G],
      text: [Ee],
      "text-shadow": [Ee],
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
        aspect: ["auto", "square", We, O, _, h]
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
        columns: [G, O, _, a]
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
        object: R()
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
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [Pe, "auto", _, O]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [We, "full", "auto", a, ...E()]
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
        flex: [G, We, "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", G, _, O]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", G, _, O]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Pe, "first", "last", "none", _, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
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
        "grid-rows": H()
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
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
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
        justify: [...A(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
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
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
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
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
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
        m: I()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
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
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...L()]
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
          ...L()
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
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, at, je]
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
        font: [n, _, tr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", er, O]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ha, O, t]
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
        tracking: [o, _, O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [G, "none", _, tr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _, O]
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
        list: ["disc", "decimal", "none", _, O]
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
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [G, "from-font", "auto", _, je]
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
        "underline-offset": [G, "auto", _, O]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _, O]
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
        content: ["none", _, O]
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
        bg: Y()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: S()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: M()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Pe, _, O],
          radial: ["", _, O],
          conic: [Pe, _, O]
        }, ga, ma]
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
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
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
        rounded: z()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": z()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": z()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": z()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": z()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": z()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": z()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": z()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": z()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": z()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": z()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": z()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": z()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": z()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": z()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: q()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": q()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": q()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": q()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": q()
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
        "divide-y": q()
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
        border: [...re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...re(), "hidden", "none"]
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
        outline: [...re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, _, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", G, at, je]
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
          f,
          bt,
          gt
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
        "inset-shadow": ["none", m, bt, gt]
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
        ring: q()
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
        "ring-offset": [G, je]
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
        "inset-ring": q()
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
        "text-shadow": ["none", g, bt, gt]
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
        opacity: [G, _, O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": N()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": N()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": N()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": N()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": N()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": N()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": N()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [_, O]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": N()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [G]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": N()
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
        mask: Y()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: S()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: M()
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
        mask: ["none", _, O]
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
          _,
          O
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [G, _, O]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [G, _, O]
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
          bt,
          gt
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
        grayscale: ["", G, _, O]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [G, _, O]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", G, _, O]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [G, _, O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", G, _, O]
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
          _,
          O
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [G, _, O]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [G, _, O]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", G, _, O]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [G, _, O]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", G, _, O]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [G, _, O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G, _, O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", G, _, O]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _, O]
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
        duration: [G, "initial", _, O]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, _, O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [G, _, O]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, _, O]
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
        perspective: [p, _, O]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
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
        scale: X()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": X()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": X()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": X()
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
        transform: [_, O, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
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
        translate: J()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": J()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": J()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": J()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _, O]
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
        "will-change": ["auto", "scroll", "contents", "transform", _, O]
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
        stroke: [G, at, je, tr]
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
}, se = /* @__PURE__ */ ta(ya), hn = we(
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
), wa = we("", {
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
}), gr = ne.forwardRef(
  ({ intent: e, size: t, className: r, icon: n, asChild: o = !1, children: s, ...i }, a) => {
    const l = o ? Di : "button", u = !!(n && !s), f = !!(s && !n);
    if (n) {
      const m = n;
      return /* @__PURE__ */ d.jsxs(
        l,
        {
          ref: a,
          className: se(
            te(
              hn({ intent: e, size: t, iconOnly: u, textOnly: f }),
              r
            )
          ),
          ...i,
          children: [
            /* @__PURE__ */ d.jsx(
              m,
              {
                className: se(
                  wa({ size: t, iconOnly: u, ghost: e === "ghost" })
                )
              }
            ),
            s
          ]
        }
      );
    }
    return /* @__PURE__ */ d.jsx(
      l,
      {
        ref: a,
        className: se(
          te(hn({ intent: e, size: t, textOnly: f }), r)
        ),
        children: s,
        ...i
      }
    );
  }
);
gr.displayName = "Button";
function Ca(e, t) {
  const r = c.createContext(t), n = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ d.jsx(r.Provider, { value: l, children: i });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const i = c.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function he(e, t = []) {
  let r = [];
  function n(s, i) {
    const a = c.createContext(i), l = r.length;
    r = [...r, i];
    const u = (m) => {
      var x;
      const { scope: g, children: v, ...y } = m, p = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[l]) || a, h = c.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d.jsx(p.Provider, { value: h, children: v });
    };
    u.displayName = s + "Provider";
    function f(m, g) {
      var p;
      const v = ((p = g == null ? void 0 : g[e]) == null ? void 0 : p[l]) || a, y = c.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const o = () => {
    const s = r.map((i) => c.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [n, Sa(o, ...t)];
}
function Sa(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = n.reduce((a, { useScope: l, scopeName: u }) => {
        const m = l(s)[`__scope${u}`];
        return { ...a, ...m };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function F(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var ie = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, Ea = c[" useInsertionEffect ".trim().toString()] || ie;
function Ne({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, i] = Ra({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, l = a ? e : o;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const m = f.current;
      m !== a && console.warn(
        `${n} is changing from ${m ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = a;
    }, [a, n]);
  }
  const u = c.useCallback(
    (f) => {
      var m;
      if (a) {
        const g = Ta(f) ? f(e) : f;
        g !== e && ((m = i.current) == null || m.call(i, g));
      } else
        s(f);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function Ra({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = c.useState(e), o = c.useRef(r), s = c.useRef(t);
  return Ea(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    var i;
    o.current !== r && ((i = s.current) == null || i.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function Ta(e) {
  return typeof e == "function";
}
function Lt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Ft(e) {
  const [t, r] = c.useState(void 0);
  return ie(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
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
function Pa(e, t) {
  return c.useReducer((r, n) => t[r][n] ?? r, e);
}
var Je = (e) => {
  const { present: t, children: r } = e, n = ka(t), o = typeof r == "function" ? r({ present: n.isPresent }) : c.Children.only(r), s = Q(n.ref, Aa(o));
  return typeof r == "function" || n.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
Je.displayName = "Presence";
function ka(e) {
  const [t, r] = c.useState(), n = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = Pa(i, {
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
  return c.useEffect(() => {
    const u = xt(n.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), ie(() => {
    const u = n.current, f = o.current;
    if (f !== e) {
      const g = s.current, v = xt(u);
      e ? l("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ie(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const p = xt(n.current).includes(v.animationName);
        if (v.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, g = (v) => {
        v.target === t && (s.current = xt(n.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function xt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Aa(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Na = [
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
], B = Na.reduce((e, t) => {
  const r = /* @__PURE__ */ Ye(`Primitive.${t}`), n = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...a, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function to(e, t) {
  e && dt.flushSync(() => e.dispatchEvent(t));
}
var $t = "Checkbox", [Ia, Wf] = he($t), [Oa, _r] = Ia($t);
function _a(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: s,
    form: i,
    name: a,
    onCheckedChange: l,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [g, v] = Ne({
    prop: r,
    defaultProp: o ?? !1,
    onChange: l,
    caller: $t
  }), [y, p] = c.useState(null), [h, x] = c.useState(null), b = c.useRef(!1), w = y ? !!i || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: g,
    disabled: s,
    setChecked: v,
    control: y,
    setControl: p,
    name: a,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: u,
    defaultChecked: Ae(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: h,
    setBubbleInput: x
  };
  return /* @__PURE__ */ d.jsx(
    Oa,
    {
      scope: t,
      ...C,
      children: Ma(m) ? m(C) : n
    }
  );
}
var ro = "CheckboxTrigger", no = c.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: s,
      value: i,
      disabled: a,
      checked: l,
      required: u,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: v,
      bubbleInput: y
    } = _r(ro, e), p = Q(o, f), h = c.useRef(l);
    return c.useEffect(() => {
      const x = s == null ? void 0 : s.form;
      if (x) {
        const b = () => m(h.current);
        return x.addEventListener("reset", b), () => x.removeEventListener("reset", b);
      }
    }, [s, m]), /* @__PURE__ */ d.jsx(
      B.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ae(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": lo(l),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...n,
        ref: p,
        onKeyDown: F(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: F(r, (x) => {
          m((b) => Ae(b) ? !0 : !b), y && v && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
        })
      }
    );
  }
);
no.displayName = ro;
var oo = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l,
      onCheckedChange: u,
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ d.jsx(
      _a,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: s,
        disabled: a,
        required: i,
        onCheckedChange: u,
        name: n,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            no,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          g && /* @__PURE__ */ d.jsx(
            co,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
oo.displayName = $t;
var so = "CheckboxIndicator", io = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, s = _r(so, r);
    return /* @__PURE__ */ d.jsx(
      Je,
      {
        present: n || Ae(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          B.span,
          {
            "data-state": lo(s.checked),
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
io.displayName = so;
var ao = "CheckboxBubbleInput", co = c.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: l,
      name: u,
      value: f,
      form: m,
      bubbleInput: g,
      setBubbleInput: v
    } = _r(ao, e), y = Q(r, v), p = Lt(s), h = Ft(n);
    c.useEffect(() => {
      const b = g;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, k = !o.current;
      if (p !== s && R) {
        const P = new Event("click", { bubbles: k });
        b.indeterminate = Ae(s), R.call(b, Ae(s) ? !1 : s), b.dispatchEvent(P);
      }
    }, [g, p, s, o]);
    const x = c.useRef(Ae(s) ? !1 : s);
    return /* @__PURE__ */ d.jsx(
      B.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? x.current,
        required: a,
        disabled: l,
        name: u,
        value: f,
        form: m,
        ...t,
        tabIndex: -1,
        ref: y,
        style: {
          ...t.style,
          ...h,
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
co.displayName = ao;
function Ma(e) {
  return typeof e == "function";
}
function Ae(e) {
  return e === "indeterminate";
}
function lo(e) {
  return Ae(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ja = {
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
const Ve = (e, t, r, n) => {
  const o = Ri(
    ({ color: s = "currentColor", size: i = 24, stroke: a = 2, title: l, className: u, children: f, ...m }, g) => Jt(
      "svg",
      {
        ref: g,
        ...ja[e],
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
        l && Jt("title", { key: "svg-title" }, l),
        ...n.map(([v, y]) => Jt(v, y)),
        ...Array.isArray(f) ? f : [f]
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
var Da = Ve("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var La = Ve("outline", "chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uo = Ve("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fa = Ve("filled", "circle-check-filled", "IconCircleCheckFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $a = Ve("filled", "circle-x-filled", "IconCircleXFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ba = Ve("filled", "exclamation-circle-filled", "IconExclamationCircleFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Va = Ve("filled", "info-circle-filled", "IconInfoCircleFilled", [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]]);
const Wa = we("flex w-fit cursor-pointer items-center gap-xs", {
  variants: {
    disabled: {
      true: "cursor-not-allowed text-body-disabled",
      false: "cursor-pointer text-body-primary"
    }
  }
}), za = we(
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
), zf = ({
  disabled: e,
  invalid: t,
  label: r,
  id: n,
  children: o,
  ...s
}) => {
  const i = n || `checkbox-${r}`;
  return /* @__PURE__ */ d.jsxs("div", { className: te(se(Wa({ disabled: e }))), children: [
    /* @__PURE__ */ d.jsx(
      oo,
      {
        id: i,
        className: se(za({ disabled: e, invalid: t })),
        disabled: e,
        ...s,
        children: /* @__PURE__ */ d.jsx(
          io,
          {
            className: `relative flex size-full cursor-[inherit] items-center
            justify-center bg-inherit text-interactive-inverse`,
            children: /* @__PURE__ */ d.jsx(Da, { style: { strokeWidth: 3 } })
          }
        )
      }
    ),
    (r || o) && /* @__PURE__ */ d.jsxs(
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
}, Hf = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx("div", { className: se(te(t)), children: e }), Uf = ({
  children: e,
  className: t,
  accentColor: r
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: se(
      te(
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
var Ha = c[" useId ".trim().toString()] || (() => {
}), Ua = 0;
function De(e) {
  const [t, r] = c.useState(Ha());
  return ie(() => {
    r((n) => n ?? String(Ua++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function de(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Ga(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = de(e);
  c.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Ka = "DismissableLayer", br = "dismissableLayer.update", Ya = "dismissableLayer.pointerDownOutside", Xa = "dismissableLayer.focusOutside", vn, fo = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(fo), [f, m] = c.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = c.useState({}), y = Q(t, (P) => m(P)), p = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(h), b = f ? p.indexOf(f) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= x, R = Za((P) => {
      const E = P.target, j = [...u.branches].some((H) => H.contains(E));
      !C || j || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, g), k = Ja((P) => {
      const E = P.target;
      [...u.branches].some((H) => H.contains(E)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, g);
    return Ga((P) => {
      b === u.layers.size - 1 && (n == null || n(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, g), c.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), gn(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = vn);
        };
    }, [f, g, r, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), gn());
    }, [f, u]), c.useEffect(() => {
      const P = () => v({});
      return document.addEventListener(br, P), () => document.removeEventListener(br, P);
    }, []), /* @__PURE__ */ d.jsx(
      B.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Bt.displayName = Ka;
var qa = "DismissableLayerBranch", po = c.forwardRef((e, t) => {
  const r = c.useContext(fo), n = c.useRef(null), o = Q(t, n);
  return c.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(B.div, { ...e, ref: o });
});
po.displayName = qa;
function Za(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = de(e), n = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          mo(
            Ya,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
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
function Ja(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = de(e), n = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && mo(Xa, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function gn() {
  const e = new CustomEvent(br);
  document.dispatchEvent(e);
}
function mo(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? to(o, s) : o.dispatchEvent(s);
}
var Qa = Bt, ec = po, rr = "focusScope.autoFocusOnMount", nr = "focusScope.autoFocusOnUnmount", bn = { bubbles: !1, cancelable: !0 }, tc = "FocusScope", Mr = c.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = de(o), f = de(s), m = c.useRef(null), g = Q(t, (p) => l(p)), v = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (n) {
      let p = function(w) {
        if (v.paused || !a) return;
        const C = w.target;
        a.contains(C) ? m.current = C : ke(m.current, { select: !0 });
      }, h = function(w) {
        if (v.paused || !a) return;
        const C = w.relatedTarget;
        C !== null && (a.contains(C) || ke(m.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const R of w)
            R.removedNodes.length > 0 && ke(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const b = new MutationObserver(x);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), b.disconnect();
      };
    }
  }, [n, a, v.paused]), c.useEffect(() => {
    if (a) {
      yn.add(v);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const x = new CustomEvent(rr, bn);
        a.addEventListener(rr, u), a.dispatchEvent(x), x.defaultPrevented || (rc(ac(ho(a)), { select: !0 }), document.activeElement === p && ke(a));
      }
      return () => {
        a.removeEventListener(rr, u), setTimeout(() => {
          const x = new CustomEvent(nr, bn);
          a.addEventListener(nr, f), a.dispatchEvent(x), x.defaultPrevented || ke(p ?? document.body, { select: !0 }), a.removeEventListener(nr, f), yn.remove(v);
        }, 0);
      };
    }
  }, [a, u, f, v]);
  const y = c.useCallback(
    (p) => {
      if (!r && !n || v.paused) return;
      const h = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (h && x) {
        const b = p.currentTarget, [w, C] = nc(b);
        w && C ? !p.shiftKey && x === C ? (p.preventDefault(), r && ke(w, { select: !0 })) : p.shiftKey && x === w && (p.preventDefault(), r && ke(C, { select: !0 })) : x === b && p.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ d.jsx(B.div, { tabIndex: -1, ...i, ref: g, onKeyDown: y });
});
Mr.displayName = tc;
function rc(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (ke(n, { select: t }), document.activeElement !== r) return;
}
function nc(e) {
  const t = ho(e), r = xn(t, e), n = xn(t.reverse(), e);
  return [r, n];
}
function ho(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function xn(e, t) {
  for (const r of e)
    if (!oc(r, { upTo: t })) return r;
}
function oc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function sc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ke(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && sc(e) && t && e.select();
  }
}
var yn = ic();
function ic() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = wn(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = wn(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function wn(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function ac(e) {
  return e.filter((t) => t.tagName !== "A");
}
var cc = "Portal", jr = c.forwardRef((e, t) => {
  var a;
  const { container: r, ...n } = e, [o, s] = c.useState(!1);
  ie(() => s(!0), []);
  const i = r || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? ki.createPortal(/* @__PURE__ */ d.jsx(B.div, { ...n, ref: t }), i) : null;
});
jr.displayName = cc;
var or = 0;
function vo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cn()), or++, () => {
      or === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), or--;
    };
  }, []);
}
function Cn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ge = function() {
  return ge = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ge.apply(this, arguments);
};
function go(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function lc(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Tt = "right-scroll-bar-position", Pt = "width-before-scroll-bar", uc = "with-scroll-bars-hidden", dc = "--removed-body-scroll-bar-size";
function sr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fc(e, t) {
  var r = Ti(function() {
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
var pc = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Sn = /* @__PURE__ */ new WeakMap();
function mc(e, t) {
  var r = fc(null, function(n) {
    return e.forEach(function(o) {
      return sr(o, n);
    });
  });
  return pc(function() {
    var n = Sn.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), i = r.current;
      o.forEach(function(a) {
        s.has(a) || sr(a, null);
      }), s.forEach(function(a) {
        o.has(a) || sr(a, i);
      });
    }
    Sn.set(r, e);
  }, [e]), r;
}
function hc(e) {
  return e;
}
function vc(e, t) {
  t === void 0 && (t = hc);
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
      var l = function() {
        var f = i;
        i = [], f.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return o;
}
function gc(e) {
  e === void 0 && (e = {});
  var t = vc(null);
  return t.options = ge({ async: !0, ssr: !1 }, e), t;
}
var bo = function(e) {
  var t = e.sideCar, r = go(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return c.createElement(n, ge({}, r));
};
bo.isSideCarExport = !0;
function bc(e, t) {
  return e.useMedium(t), bo;
}
var xo = gc(), ir = function() {
}, Vt = c.forwardRef(function(e, t) {
  var r = c.useRef(null), n = c.useState({
    onScrollCapture: ir,
    onWheelCapture: ir,
    onTouchMoveCapture: ir
  }), o = n[0], s = n[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, m = e.shards, g = e.sideCar, v = e.noRelative, y = e.noIsolation, p = e.inert, h = e.allowPinchZoom, x = e.as, b = x === void 0 ? "div" : x, w = e.gapMode, C = go(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, k = mc([r, t]), P = ge(ge({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(R, { sideCar: xo, removeScrollBar: u, shards: m, noRelative: v, noIsolation: y, inert: p, setCallbacks: s, allowPinchZoom: !!h, lockRef: r, gapMode: w }),
    i ? c.cloneElement(c.Children.only(a), ge(ge({}, P), { ref: k })) : c.createElement(b, ge({}, P, { className: l, ref: k }), a)
  );
});
Vt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vt.classNames = {
  fullWidth: Pt,
  zeroRight: Tt
};
var xc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xc();
  return t && e.setAttribute("nonce", t), e;
}
function wc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Sc = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = yc()) && (wc(t, r), Cc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ec = function() {
  var e = Sc();
  return function(t, r) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, yo = function() {
  var e = Ec(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Rc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ar = function(e) {
  return parseInt(e || "", 10) || 0;
}, Tc = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ar(r), ar(n), ar(o)];
}, Pc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Rc;
  var t = Tc(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, kc = yo(), Ge = "data-scroll-locked", Ac = function(e, t, r, n) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(uc, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(Ge, `] {
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
  
  .`).concat(Tt, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Pt, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Tt, " .").concat(Tt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Pt, " .").concat(Pt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ge, `] {
    `).concat(dc, ": ").concat(a, `px;
  }
`);
}, En = function() {
  var e = parseInt(document.body.getAttribute(Ge) || "0", 10);
  return isFinite(e) ? e : 0;
}, Nc = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Ge, (En() + 1).toString()), function() {
      var e = En() - 1;
      e <= 0 ? document.body.removeAttribute(Ge) : document.body.setAttribute(Ge, e.toString());
    };
  }, []);
}, Ic = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Nc();
  var s = c.useMemo(function() {
    return Pc(o);
  }, [o]);
  return c.createElement(kc, { styles: Ac(s, !t, o, r ? "" : "!important") });
}, xr = !1;
if (typeof window < "u")
  try {
    var yt = Object.defineProperty({}, "passive", {
      get: function() {
        return xr = !0, !0;
      }
    });
    window.addEventListener("test", yt, yt), window.removeEventListener("test", yt, yt);
  } catch {
    xr = !1;
  }
var ze = xr ? { passive: !1 } : !1, Oc = function(e) {
  return e.tagName === "TEXTAREA";
}, wo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Oc(e) && r[t] === "visible")
  );
}, _c = function(e) {
  return wo(e, "overflowY");
}, Mc = function(e) {
  return wo(e, "overflowX");
}, Rn = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Co(e, n);
    if (o) {
      var s = So(e, n), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, jc = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Dc = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Co = function(e, t) {
  return e === "v" ? _c(t) : Mc(t);
}, So = function(e, t) {
  return e === "v" ? jc(t) : Dc(t);
}, Lc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Fc = function(e, t, r, n, o) {
  var s = Lc(e, window.getComputedStyle(t).direction), i = s * n, a = r.target, l = t.contains(a), u = !1, f = i > 0, m = 0, g = 0;
  do {
    if (!a)
      break;
    var v = So(e, a), y = v[0], p = v[1], h = v[2], x = p - h - s * y;
    (y || x) && Co(e, a) && (m += x, g += y);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(g) < 1) && (u = !0), u;
}, wt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Tn = function(e) {
  return [e.deltaX, e.deltaY];
}, Pn = function(e) {
  return e && "current" in e ? e.current : e;
}, $c = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Vc = 0, He = [];
function Wc(e) {
  var t = c.useRef([]), r = c.useRef([0, 0]), n = c.useRef(), o = c.useState(Vc++)[0], s = c.useState(yo)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = lc([e.lockRef.current], (e.shards || []).map(Pn), !0).filter(Boolean);
      return p.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(p, h) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = wt(p), b = r.current, w = "deltaX" in p ? p.deltaX : b[0] - x[0], C = "deltaY" in p ? p.deltaY : b[1] - x[1], R, k = p.target, P = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && P === "h" && k.type === "range")
      return !1;
    var E = Rn(P, k);
    if (!E)
      return !0;
    if (E ? R = P : (R = P === "v" ? "h" : "v", E = Rn(P, k)), !E)
      return !1;
    if (!n.current && "changedTouches" in p && (w || C) && (n.current = R), !R)
      return !0;
    var j = n.current || R;
    return Fc(j, h, p, j === "h" ? w : C);
  }, []), l = c.useCallback(function(p) {
    var h = p;
    if (!(!He.length || He[He.length - 1] !== s)) {
      var x = "deltaY" in h ? Tn(h) : wt(h), b = t.current.filter(function(R) {
        return R.name === h.type && (R.target === h.target || h.target === R.shadowParent) && $c(R.delta, x);
      })[0];
      if (b && b.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!b) {
        var w = (i.current.shards || []).map(Pn).filter(Boolean).filter(function(R) {
          return R.contains(h.target);
        }), C = w.length > 0 ? a(h, w[0]) : !i.current.noIsolation;
        C && h.cancelable && h.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(p, h, x, b) {
    var w = { name: p, delta: h, target: x, should: b, shadowParent: zc(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), f = c.useCallback(function(p) {
    r.current = wt(p), n.current = void 0;
  }, []), m = c.useCallback(function(p) {
    u(p.type, Tn(p), p.target, a(p, e.lockRef.current));
  }, []), g = c.useCallback(function(p) {
    u(p.type, wt(p), p.target, a(p, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return He.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, ze), document.addEventListener("touchmove", l, ze), document.addEventListener("touchstart", f, ze), function() {
      He = He.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, ze), document.removeEventListener("touchmove", l, ze), document.removeEventListener("touchstart", f, ze);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    y ? c.createElement(s, { styles: Bc(o) }) : null,
    v ? c.createElement(Ic, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function zc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Hc = bc(xo, Wc);
var Dr = c.forwardRef(function(e, t) {
  return c.createElement(Vt, ge({}, e, { ref: t, sideCar: Hc }));
});
Dr.classNames = Vt.classNames;
var Uc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ue = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), St = {}, cr = 0, Eo = function(e) {
  return e && (e.host || Eo(e.parentNode));
}, Gc = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Eo(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Kc = function(e, t, r, n) {
  var o = Gc(t, Array.isArray(e) ? e : [e]);
  St[r] || (St[r] = /* @__PURE__ */ new WeakMap());
  var s = St[r], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(m) {
    !m || a.has(m) || (a.add(m), u(m.parentNode));
  };
  o.forEach(u);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (a.has(g))
        f(g);
      else
        try {
          var v = g.getAttribute(n), y = v !== null && v !== "false", p = (Ue.get(g) || 0) + 1, h = (s.get(g) || 0) + 1;
          Ue.set(g, p), s.set(g, h), i.push(g), p === 1 && y && Ct.set(g, !0), h === 1 && g.setAttribute(r, "true"), y || g.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", g, x);
        }
    });
  };
  return f(t), a.clear(), cr++, function() {
    i.forEach(function(m) {
      var g = Ue.get(m) - 1, v = s.get(m) - 1;
      Ue.set(m, g), s.set(m, v), g || (Ct.has(m) || m.removeAttribute(n), Ct.delete(m)), v || m.removeAttribute(r);
    }), cr--, cr || (Ue = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), St = {});
  };
}, Ro = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Uc(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), Kc(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Wt = "Dialog", [To, Gf] = he(Wt), [Yc, Ce] = To(Wt), Po = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, f] = Ne({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Wt
  });
  return /* @__PURE__ */ d.jsx(
    Yc,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: De(),
      titleId: De(),
      descriptionId: De(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: r
    }
  );
};
Po.displayName = Wt;
var ko = "DialogTrigger", Xc = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ce(ko, r), s = Q(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      B.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Fr(o.open),
        ...n,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Xc.displayName = ko;
var qc = "DialogPortal", [Kf, Ao] = To(qc, {
  forceMount: void 0
}), At = "DialogOverlay", No = c.forwardRef(
  (e, t) => {
    const r = Ao(At, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = Ce(At, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d.jsx(Je, { present: n || s.open, children: /* @__PURE__ */ d.jsx(Jc, { ...o, ref: t }) }) : null;
  }
);
No.displayName = At;
var Zc = /* @__PURE__ */ Ye("DialogOverlay.RemoveScroll"), Jc = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ce(At, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Dr, { as: Zc, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        B.div,
        {
          "data-state": Fr(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Le = "DialogContent", Io = c.forwardRef(
  (e, t) => {
    const r = Ao(Le, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = Ce(Le, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(Je, { present: n || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(Qc, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(el, { ...o, ref: t }) });
  }
);
Io.displayName = Le;
var Qc = c.forwardRef(
  (e, t) => {
    const r = Ce(Le, e.__scopeDialog), n = c.useRef(null), o = Q(t, r.contentRef, n);
    return c.useEffect(() => {
      const s = n.current;
      if (s) return Ro(s);
    }, []), /* @__PURE__ */ d.jsx(
      Oo,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), el = c.forwardRef(
  (e, t) => {
    const r = Ce(Le, e.__scopeDialog), n = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Oo,
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
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((u = r.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Oo = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Ce(Le, r), l = c.useRef(null), u = Q(t, l);
    return vo(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Mr,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d.jsx(
            Bt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Fr(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(nl, { titleId: a.titleId }),
        /* @__PURE__ */ d.jsx(sl, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Lr = "DialogTitle", tl = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ce(Lr, r);
    return /* @__PURE__ */ d.jsx(B.h2, { id: o.titleId, ...n, ref: t });
  }
);
tl.displayName = Lr;
var _o = "DialogDescription", rl = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ce(_o, r);
    return /* @__PURE__ */ d.jsx(B.p, { id: o.descriptionId, ...n, ref: t });
  }
);
rl.displayName = _o;
var Mo = "DialogClose", jo = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ce(Mo, r);
    return /* @__PURE__ */ d.jsx(
      B.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
jo.displayName = Mo;
function Fr(e) {
  return e ? "open" : "closed";
}
var Do = "DialogTitleWarning", [Yf, Lo] = Ca(Do, {
  contentName: Le,
  titleName: Lr,
  docsSlug: "dialog"
}), nl = ({ titleId: e }) => {
  const t = Lo(Do), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, ol = "DialogDescriptionWarning", sl = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Lo(ol).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, il = Po, al = No, cl = Io, lr = jo;
const Xf = ({
  isOpen: e,
  onClose: t,
  title: r,
  children: n,
  confirmButtonLabel: o,
  cancelButtonLabel: s = "キャンセル"
}) => /* @__PURE__ */ d.jsxs(il, { open: e, onOpenChange: t, children: [
  /* @__PURE__ */ d.jsx(
    al,
    {
      className: `fixed top-0 left-0 h-full w-full bg-surface-scrimmed
          opacity-85`
    }
  ),
  /* @__PURE__ */ d.jsx(
    cl,
    {
      className: `fixed top-1/2 left-1/2 w-2/3 max-w-[40rem] min-w-[25rem]
          -translate-x-1/2 -translate-y-1/2 transform rounded-lg
          bg-surface-primary`,
      children: /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex flex-grow justify-between px-xl py-lg", children: [
          /* @__PURE__ */ d.jsx("div", { children: r && /* @__PURE__ */ d.jsx("h2", { className: "text-xxl text-body-primary", children: r }) }),
          /* @__PURE__ */ d.jsx(lr, { asChild: !0, children: /* @__PURE__ */ d.jsx("button", { className: "cursor-pointer", children: /* @__PURE__ */ d.jsx(uo, { className: "h-xl w-xl text-body-primary" }) }) })
        ] }),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `flex min-h-40 flex-grow-0 border-y-1
              border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary`,
            children: n
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "flex flex-grow gap-xs px-md py-lg", children: [
          /* @__PURE__ */ d.jsx(lr, { asChild: !0, children: /* @__PURE__ */ d.jsx(gr, { intent: "secondary", children: s }) }),
          /* @__PURE__ */ d.jsx(lr, { asChild: !0, children: /* @__PURE__ */ d.jsx(gr, { intent: "primary", children: o }) })
        ] })
      ] })
    }
  )
] }), ll = we(
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
), qf = ne.forwardRef(
  ({ invalid: e, className: t, ...r }, n) => /* @__PURE__ */ d.jsx(
    "input",
    {
      ref: n,
      className: se(te(ll({ invalid: e }), t)),
      ...r
    }
  )
);
var $r = "Progress", Br = 100, [ul, Zf] = he($r), [dl, fl] = ul($r), Fo = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: o,
      getValueLabel: s = pl,
      ...i
    } = e;
    (o || o === 0) && !kn(o) && console.error(ml(`${o}`, "Progress"));
    const a = kn(o) ? o : Br;
    n !== null && !An(n, a) && console.error(hl(`${n}`, "Progress"));
    const l = An(n, a) ? n : null, u = Nt(l) ? s(l, a) : void 0;
    return /* @__PURE__ */ d.jsx(dl, { scope: r, value: l, max: a, children: /* @__PURE__ */ d.jsx(
      B.div,
      {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Nt(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": Vo(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...i,
        ref: t
      }
    ) });
  }
);
Fo.displayName = $r;
var $o = "ProgressIndicator", Bo = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, o = fl($o, r);
    return /* @__PURE__ */ d.jsx(
      B.div,
      {
        "data-state": Vo(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: t
      }
    );
  }
);
Bo.displayName = $o;
function pl(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Vo(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Nt(e) {
  return typeof e == "number";
}
function kn(e) {
  return Nt(e) && !isNaN(e) && e > 0;
}
function An(e, t) {
  return Nt(e) && !isNaN(e) && e <= t && e >= 0;
}
function ml(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Br}\`.`;
}
function hl(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Br} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var vl = Fo, gl = Bo;
const bl = ({
  value: e,
  max: t = 100,
  indeterminate: r = !1,
  className: n,
  ...o
}) => /* @__PURE__ */ d.jsx(
  vl,
  {
    className: te(
      "relative h-1 w-full overflow-hidden rounded bg-surface-disabled",
      n
    ),
    value: e,
    max: t,
    ...o,
    children: /* @__PURE__ */ d.jsx(
      gl,
      {
        className: te(
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
bl.displayName = "Progress";
function Vr(e) {
  const t = e + "CollectionProvider", [r, n] = he(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: h, children: x } = p, b = ne.useRef(null), w = ne.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: h, itemMap: w, collectionRef: b, children: x });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ye(a), u = ne.forwardRef(
    (p, h) => {
      const { scope: x, children: b } = p, w = s(a, x), C = Q(h, w.collectionRef);
      return /* @__PURE__ */ d.jsx(l, { ref: C, children: b });
    }
  );
  u.displayName = a;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", g = /* @__PURE__ */ Ye(f), v = ne.forwardRef(
    (p, h) => {
      const { scope: x, children: b, ...w } = p, C = ne.useRef(null), R = Q(h, C), k = s(f, x);
      return ne.useEffect(() => (k.itemMap.set(C, { ref: C, ...w }), () => void k.itemMap.delete(C))), /* @__PURE__ */ d.jsx(g, { [m]: "", ref: R, children: b });
    }
  );
  v.displayName = f;
  function y(p) {
    const h = s(e + "CollectionConsumer", p);
    return ne.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(h.itemMap.values()).sort(
        (k, P) => w.indexOf(k.ref.current) - w.indexOf(P.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: v },
    y,
    n
  ];
}
var xl = c.createContext(void 0);
function Wr(e) {
  const t = c.useContext(xl);
  return e || t || "ltr";
}
var ur = "rovingFocusGroup.onEntryFocus", yl = { bubbles: !1, cancelable: !0 }, ft = "RovingFocusGroup", [yr, Wo, wl] = Vr(ft), [Cl, zo] = he(
  ft,
  [wl]
), [Sl, El] = Cl(ft), Ho = c.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(yr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(yr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Rl, { ...e, ref: t }) }) })
);
Ho.displayName = ft;
var Rl = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, g = c.useRef(null), v = Q(t, g), y = Wr(s), [p, h] = Ne({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: ft
  }), [x, b] = c.useState(!1), w = de(u), C = Wo(r), R = c.useRef(!1), [k, P] = c.useState(0);
  return c.useEffect(() => {
    const E = g.current;
    if (E)
      return E.addEventListener(ur, w), () => E.removeEventListener(ur, w);
  }, [w]), /* @__PURE__ */ d.jsx(
    Sl,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: o,
      currentTabStopId: p,
      onItemFocus: c.useCallback(
        (E) => h(E),
        [h]
      ),
      onItemShiftTab: c.useCallback(() => b(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => P((E) => E + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => P((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        B.div,
        {
          tabIndex: x || k === 0 ? -1 : 0,
          "data-orientation": n,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: F(e.onFocus, (E) => {
            const j = !R.current;
            if (E.target === E.currentTarget && j && !x) {
              const H = new CustomEvent(ur, yl);
              if (E.currentTarget.dispatchEvent(H), !H.defaultPrevented) {
                const V = C().filter((I) => I.focusable), W = V.find((I) => I.active), U = V.find((I) => I.id === p), D = [W, U, ...V].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Ko(D, f);
              }
            }
            R.current = !1;
          }),
          onBlur: F(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Uo = "RovingFocusGroupItem", Go = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = De(), u = s || l, f = El(Uo, r), m = f.currentTabStopId === u, g = Wo(r), { onFocusableItemAdd: v, onFocusableItemRemove: y, currentTabStopId: p } = f;
    return c.useEffect(() => {
      if (n)
        return v(), () => y();
    }, [n, v, y]), /* @__PURE__ */ d.jsx(
      yr.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          B.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...a,
            ref: t,
            onMouseDown: F(e.onMouseDown, (h) => {
              n ? f.onItemFocus(u) : h.preventDefault();
            }),
            onFocus: F(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: F(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const x = kl(h, f.orientation, f.dir);
              if (x !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let w = g().filter((C) => C.focusable).map((C) => C.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const C = w.indexOf(h.currentTarget);
                  w = f.loop ? Al(w, C + 1) : w.slice(C + 1);
                }
                setTimeout(() => Ko(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: m, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
Go.displayName = Uo;
var Tl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Pl(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function kl(e, t, r) {
  const n = Pl(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Tl[n];
}
function Ko(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Al(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Nl = Ho, Il = Go, zr = "Radio", [Ol, Yo] = he(zr), [_l, Ml] = Ol(zr), Xo = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: s,
      disabled: i,
      value: a = "on",
      onCheck: l,
      form: u,
      ...f
    } = e, [m, g] = c.useState(null), v = Q(t, (h) => g(h)), y = c.useRef(!1), p = m ? u || !!m.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(_l, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        B.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Qo(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
          ...f,
          ref: v,
          onClick: F(e.onClick, (h) => {
            o || l == null || l(), p && (y.current = h.isPropagationStopped(), y.current || h.stopPropagation());
          })
        }
      ),
      p && /* @__PURE__ */ d.jsx(
        Jo,
        {
          control: m,
          bubbles: !y.current,
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
Xo.displayName = zr;
var qo = "RadioIndicator", Zo = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, s = Ml(qo, r);
    return /* @__PURE__ */ d.jsx(Je, { present: n || s.checked, children: /* @__PURE__ */ d.jsx(
      B.span,
      {
        "data-state": Qo(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Zo.displayName = qo;
var jl = "RadioBubbleInput", Jo = c.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = Q(i, s), l = Lt(r), u = Ft(t);
    return c.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== r && v) {
        const y = new Event("click", { bubbles: n });
        v.call(f, r), f.dispatchEvent(y);
      }
    }, [l, r, n]), /* @__PURE__ */ d.jsx(
      B.input,
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
Jo.displayName = jl;
function Qo(e) {
  return e ? "checked" : "unchecked";
}
var Dl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], zt = "RadioGroup", [Ll, Jf] = he(zt, [
  zo,
  Yo
]), es = zo(), ts = Yo(), [Fl, $l] = Ll(zt), rs = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: s,
      required: i = !1,
      disabled: a = !1,
      orientation: l,
      dir: u,
      loop: f = !0,
      onValueChange: m,
      ...g
    } = e, v = es(r), y = Wr(u), [p, h] = Ne({
      prop: s,
      defaultProp: o ?? null,
      onChange: m,
      caller: zt
    });
    return /* @__PURE__ */ d.jsx(
      Fl,
      {
        scope: r,
        name: n,
        required: i,
        disabled: a,
        value: p,
        onValueChange: h,
        children: /* @__PURE__ */ d.jsx(
          Nl,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: y,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              B.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
                dir: y,
                ...g,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
rs.displayName = zt;
var ns = "RadioGroupItem", os = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, s = $l(ns, r), i = s.disabled || n, a = es(r), l = ts(r), u = c.useRef(null), f = Q(t, u), m = s.value === o.value, g = c.useRef(!1);
    return c.useEffect(() => {
      const v = (p) => {
        Dl.includes(p.key) && (g.current = !0);
      }, y = () => g.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ d.jsx(
      Il,
      {
        asChild: !0,
        ...a,
        focusable: !i,
        active: m,
        children: /* @__PURE__ */ d.jsx(
          Xo,
          {
            disabled: i,
            required: s.required,
            checked: m,
            ...l,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: F((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: F(o.onFocus, () => {
              var v;
              g.current && ((v = u.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
os.displayName = ns;
var Bl = "RadioGroupIndicator", ss = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = ts(r);
    return /* @__PURE__ */ d.jsx(Zo, { ...o, ...n, ref: t });
  }
);
ss.displayName = Bl;
var Vl = rs, Wl = os, zl = ss;
const Hl = we("flex w-fit cursor-pointer items-center gap-xs", {
  variants: {
    disabled: {
      true: "cursor-not-allowed text-body-disabled",
      false: "cursor-pointer text-body-primary"
    }
  }
}), Ul = we(
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
), Qf = ({
  value: e,
  label: t,
  id: r,
  children: n,
  ...o
}) => {
  const s = r || `radio-${e}`;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: te(
        se(Hl({ disabled: o.disabled }))
      ),
      children: [
        /* @__PURE__ */ d.jsx(
          Wl,
          {
            id: s,
            value: e,
            className: se(
              Ul({
                disabled: o.disabled,
                invalid: o.invalid
              })
            ),
            ...o,
            children: /* @__PURE__ */ d.jsx(
              zl,
              {
                className: `relative flex size-full items-center justify-center
            after:block after:size-xs after:rounded-full
            after:bg-input-selected`
              }
            )
          }
        ),
        /* @__PURE__ */ d.jsxs(
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
}, ep = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx(Vl, { className: se(te(t)), children: e });
function Nn(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
const Gl = ["top", "right", "bottom", "left"], Ie = Math.min, le = Math.max, It = Math.round, Et = Math.floor, xe = (e) => ({
  x: e,
  y: e
}), Kl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yl = {
  start: "end",
  end: "start"
};
function wr(e, t, r) {
  return le(e, Ie(t, r));
}
function Re(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Te(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function Hr(e) {
  return e === "x" ? "y" : "x";
}
function Ur(e) {
  return e === "y" ? "height" : "width";
}
const Xl = /* @__PURE__ */ new Set(["top", "bottom"]);
function be(e) {
  return Xl.has(Te(e)) ? "y" : "x";
}
function Gr(e) {
  return Hr(be(e));
}
function ql(e, t, r) {
  r === void 0 && (r = !1);
  const n = Qe(e), o = Gr(e), s = Ur(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ot(i)), [i, Ot(i)];
}
function Zl(e) {
  const t = Ot(e);
  return [Cr(e), t, Cr(t)];
}
function Cr(e) {
  return e.replace(/start|end/g, (t) => Yl[t]);
}
const In = ["left", "right"], On = ["right", "left"], Jl = ["top", "bottom"], Ql = ["bottom", "top"];
function eu(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? On : In : t ? In : On;
    case "left":
    case "right":
      return t ? Jl : Ql;
    default:
      return [];
  }
}
function tu(e, t, r, n) {
  const o = Qe(e);
  let s = eu(Te(e), r === "start", n);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Cr)))), s;
}
function Ot(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kl[t]);
}
function ru(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function is(e) {
  return typeof e != "number" ? ru(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _t(e) {
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
function _n(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = be(t), i = Gr(t), a = Ur(i), l = Te(t), u = s === "y", f = n.x + n.width / 2 - o.width / 2, m = n.y + n.height / 2 - o.height / 2, g = n[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: m
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Qe(t)) {
    case "start":
      v[i] -= g * (r && u ? -1 : 1);
      break;
    case "end":
      v[i] += g * (r && u ? -1 : 1);
      break;
  }
  return v;
}
const nu = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = r, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = _n(u, n, l), g = n, v = {}, y = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: h,
      fn: x
    } = a[p], {
      x: b,
      y: w,
      data: C,
      reset: R
    } = await x({
      x: f,
      y: m,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, m = w ?? m, v = {
      ...v,
      [h]: {
        ...v[h],
        ...C
      }
    }, R && y <= 50 && (y++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (u = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: f,
      y: m
    } = _n(u, g, l)), p = -1);
  }
  return {
    x: f,
    y: m,
    placement: g,
    strategy: o,
    middlewareData: v
  };
};
async function lt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = Re(t, e), y = is(v), h = a[g ? m === "floating" ? "reference" : "floating" : m], x = _t(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(h))) == null || r ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = _t(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (x.top - R.top + y.top) / C.y,
    bottom: (R.bottom - x.bottom + y.bottom) / C.y,
    left: (x.left - R.left + y.left) / C.x,
    right: (R.right - x.right + y.right) / C.x
  };
}
const ou = (e) => ({
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
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = Re(e, t) || {};
    if (u == null)
      return {};
    const m = is(f), g = {
      x: r,
      y: n
    }, v = Gr(o), y = Ur(v), p = await i.getDimensions(u), h = v === "y", x = h ? "top" : "left", b = h ? "bottom" : "right", w = h ? "clientHeight" : "clientWidth", C = s.reference[y] + s.reference[v] - g[v] - s.floating[y], R = g[v] - s.reference[v], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = k ? k[w] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(k))) && (P = a.floating[w] || s.floating[y]);
    const E = C / 2 - R / 2, j = P / 2 - p[y] / 2 - 1, H = Ie(m[x], j), V = Ie(m[b], j), W = H, U = P - p[y] - V, A = P / 2 - p[y] / 2 + E, D = wr(W, A, U), I = !l.arrow && Qe(o) != null && A !== D && s.reference[y] / 2 - (A < W ? H : V) - p[y] / 2 < 0, L = I ? A < W ? A - W : A - U : 0;
    return {
      [v]: g[v] + L,
      data: {
        [v]: D,
        centerOffset: A - D - L,
        ...I && {
          alignmentOffset: L
        }
      },
      reset: I
    };
  }
}), su = function(e) {
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
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: p = !0,
        ...h
      } = Re(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const x = Te(o), b = be(a), w = Te(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), R = g || (w || !p ? [Ot(a)] : Zl(a)), k = y !== "none";
      !g && k && R.push(...tu(a, p, y, C));
      const P = [a, ...R], E = await lt(t, h), j = [];
      let H = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (f && j.push(E[x]), m) {
        const A = ql(o, i, C);
        j.push(E[A[0]], E[A[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: j
      }], !j.every((A) => A <= 0)) {
        var V, W;
        const A = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, D = P[A];
        if (D && (!(m === "alignment" ? b !== be(D) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((T) => T.overflows[0] > 0 && be(T.placement) === b)))
          return {
            data: {
              index: A,
              overflows: H
            },
            reset: {
              placement: D
            }
          };
        let I = (W = H.filter((L) => L.overflows[0] <= 0).sort((L, T) => L.overflows[1] - T.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!I)
          switch (v) {
            case "bestFit": {
              var U;
              const L = (U = H.filter((T) => {
                if (k) {
                  const Y = be(T.placement);
                  return Y === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((Y) => Y > 0).reduce((Y, S) => Y + S, 0)]).sort((T, Y) => T[1] - Y[1])[0]) == null ? void 0 : U[0];
              L && (I = L);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Mn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jn(e) {
  return Gl.some((t) => e[t] >= 0);
}
const iu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Re(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await lt(t, {
            ...o,
            elementContext: "reference"
          }), i = Mn(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: jn(i)
            }
          };
        }
        case "escaped": {
          const s = await lt(t, {
            ...o,
            altBoundary: !0
          }), i = Mn(s, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: jn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, as = /* @__PURE__ */ new Set(["left", "top"]);
async function au(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Te(r), a = Qe(r), l = be(r) === "y", u = as.has(i) ? -1 : 1, f = s && l ? -1 : 1, m = Re(t, e);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: y
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof y == "number" && (v = a === "end" ? y * -1 : y), l ? {
    x: v * f,
    y: g * u
  } : {
    x: g * u,
    y: v * f
  };
}
const cu = function(e) {
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
      } = t, l = await au(t, e);
      return i === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, lu = function(e) {
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
          fn: (h) => {
            let {
              x,
              y: b
            } = h;
            return {
              x,
              y: b
            };
          }
        },
        ...l
      } = Re(e, t), u = {
        x: r,
        y: n
      }, f = await lt(t, l), m = be(Te(o)), g = Hr(m);
      let v = u[g], y = u[m];
      if (s) {
        const h = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", b = v + f[h], w = v - f[x];
        v = wr(b, v, w);
      }
      if (i) {
        const h = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", b = y + f[h], w = y - f[x];
        y = wr(b, y, w);
      }
      const p = a.fn({
        ...t,
        [g]: v,
        [m]: y
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [g]: s,
            [m]: i
          }
        }
      };
    }
  };
}, uu = function(e) {
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
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Re(e, t), f = {
        x: r,
        y: n
      }, m = be(o), g = Hr(m);
      let v = f[g], y = f[m];
      const p = Re(a, t), h = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const w = g === "y" ? "height" : "width", C = s.reference[g] - s.floating[w] + h.mainAxis, R = s.reference[g] + s.reference[w] - h.mainAxis;
        v < C ? v = C : v > R && (v = R);
      }
      if (u) {
        var x, b;
        const w = g === "y" ? "width" : "height", C = as.has(Te(o)), R = s.reference[m] - s.floating[w] + (C && ((x = i.offset) == null ? void 0 : x[m]) || 0) + (C ? 0 : h.crossAxis), k = s.reference[m] + s.reference[w] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[m]) || 0) - (C ? h.crossAxis : 0);
        y < R ? y = R : y > k && (y = k);
      }
      return {
        [g]: v,
        [m]: y
      };
    }
  };
}, du = function(e) {
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
        apply: l = () => {
        },
        ...u
      } = Re(e, t), f = await lt(t, u), m = Te(o), g = Qe(o), v = be(o) === "y", {
        width: y,
        height: p
      } = s.floating;
      let h, x;
      m === "top" || m === "bottom" ? (h = m, x = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = m, h = g === "end" ? "top" : "bottom");
      const b = p - f.top - f.bottom, w = y - f.left - f.right, C = Ie(p - f[h], b), R = Ie(y - f[x], w), k = !t.middlewareData.shift;
      let P = C, E = R;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (E = w), (n = t.middlewareData.shift) != null && n.enabled.y && (P = b), k && !g) {
        const H = le(f.left, 0), V = le(f.right, 0), W = le(f.top, 0), U = le(f.bottom, 0);
        v ? E = y - 2 * (H !== 0 || V !== 0 ? H + V : le(f.left, f.right)) : P = p - 2 * (W !== 0 || U !== 0 ? W + U : le(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: P
      });
      const j = await i.getDimensions(a.floating);
      return y !== j.width || p !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ht() {
  return typeof window < "u";
}
function et(e) {
  return cs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Se(e) {
  var t;
  return (t = (cs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cs(e) {
  return Ht() ? e instanceof Node || e instanceof ue(e).Node : !1;
}
function pe(e) {
  return Ht() ? e instanceof Element || e instanceof ue(e).Element : !1;
}
function ye(e) {
  return Ht() ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement : !1;
}
function Dn(e) {
  return !Ht() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
const fu = /* @__PURE__ */ new Set(["inline", "contents"]);
function pt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !fu.has(o);
}
const pu = /* @__PURE__ */ new Set(["table", "td", "th"]);
function mu(e) {
  return pu.has(et(e));
}
const hu = [":popover-open", ":modal"];
function Ut(e) {
  return hu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const vu = ["transform", "translate", "scale", "rotate", "perspective"], gu = ["transform", "translate", "scale", "rotate", "perspective", "filter"], bu = ["paint", "layout", "strict", "content"];
function Kr(e) {
  const t = Yr(), r = pe(e) ? me(e) : e;
  return vu.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || gu.some((n) => (r.willChange || "").includes(n)) || bu.some((n) => (r.contain || "").includes(n));
}
function xu(e) {
  let t = Oe(e);
  for (; ye(t) && !Xe(t); ) {
    if (Kr(t))
      return t;
    if (Ut(t))
      return null;
    t = Oe(t);
  }
  return null;
}
function Yr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const yu = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xe(e) {
  return yu.has(et(e));
}
function me(e) {
  return ue(e).getComputedStyle(e);
}
function Gt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Oe(e) {
  if (et(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Dn(e) && e.host || // Fallback.
    Se(e)
  );
  return Dn(t) ? t.host : t;
}
function ls(e) {
  const t = Oe(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ye(t) && pt(t) ? t : ls(t);
}
function ut(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = ls(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ue(o);
  if (s) {
    const a = Sr(i);
    return t.concat(i, i.visualViewport || [], pt(o) ? o : [], a && r ? ut(a) : []);
  }
  return t.concat(o, ut(o, [], r));
}
function Sr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function us(e) {
  const t = me(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ye(e), s = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, a = It(r) !== s || It(n) !== i;
  return a && (r = s, n = i), {
    width: r,
    height: n,
    $: a
  };
}
function Xr(e) {
  return pe(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = Xr(e);
  if (!ye(t))
    return xe(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = us(t);
  let i = (s ? It(r.width) : r.width) / n, a = (s ? It(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const wu = /* @__PURE__ */ xe(0);
function ds(e) {
  const t = ue(e);
  return !Yr() || !t.visualViewport ? wu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cu(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== ue(e) ? !1 : t;
}
function Fe(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = Xr(e);
  let i = xe(1);
  t && (n ? pe(n) && (i = Ke(n)) : i = Ke(e));
  const a = Cu(s, r, n) ? ds(s) : xe(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, f = o.width / i.x, m = o.height / i.y;
  if (s) {
    const g = ue(s), v = n && pe(n) ? ue(n) : n;
    let y = g, p = Sr(y);
    for (; p && n && v !== y; ) {
      const h = Ke(p), x = p.getBoundingClientRect(), b = me(p), w = x.left + (p.clientLeft + parseFloat(b.paddingLeft)) * h.x, C = x.top + (p.clientTop + parseFloat(b.paddingTop)) * h.y;
      l *= h.x, u *= h.y, f *= h.x, m *= h.y, l += w, u += C, y = ue(p), p = Sr(y);
    }
  }
  return _t({
    width: f,
    height: m,
    x: l,
    y: u
  });
}
function qr(e, t) {
  const r = Gt(e).scrollLeft;
  return t ? t.left + r : Fe(Se(e)).left + r;
}
function fs(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    qr(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Su(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", i = Se(n), a = t ? Ut(t.floating) : !1;
  if (n === i || a && s)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = xe(1);
  const f = xe(0), m = ye(n);
  if ((m || !m && !s) && ((et(n) !== "body" || pt(i)) && (l = Gt(n)), ye(n))) {
    const v = Fe(n);
    u = Ke(n), f.x = v.x + n.clientLeft, f.y = v.y + n.clientTop;
  }
  const g = i && !m && !s ? fs(i, l, !0) : xe(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + f.x + g.x,
    y: r.y * u.y - l.scrollTop * u.y + f.y + g.y
  };
}
function Eu(e) {
  return Array.from(e.getClientRects());
}
function Ru(e) {
  const t = Se(e), r = Gt(e), n = e.ownerDocument.body, o = le(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = le(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + qr(e);
  const a = -r.scrollTop;
  return me(n).direction === "rtl" && (i += le(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Tu(e, t) {
  const r = ue(e), n = Se(e), o = r.visualViewport;
  let s = n.clientWidth, i = n.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Yr();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Pu = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ku(e, t) {
  const r = Fe(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = ye(e) ? Ke(e) : xe(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = n * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Ln(e, t, r) {
  let n;
  if (t === "viewport")
    n = Tu(e, r);
  else if (t === "document")
    n = Ru(Se(e));
  else if (pe(t))
    n = ku(t, r);
  else {
    const o = ds(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _t(n);
}
function ps(e, t) {
  const r = Oe(e);
  return r === t || !pe(r) || Xe(r) ? !1 : me(r).position === "fixed" || ps(r, t);
}
function Au(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ut(e, [], !1).filter((a) => pe(a) && et(a) !== "body"), o = null;
  const s = me(e).position === "fixed";
  let i = s ? Oe(e) : e;
  for (; pe(i) && !Xe(i); ) {
    const a = me(i), l = Kr(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Pu.has(o.position) || pt(i) && !l && ps(e, i)) ? n = n.filter((f) => f !== i) : o = a, i = Oe(i);
  }
  return t.set(e, n), n;
}
function Nu(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Ut(t) ? [] : Au(t, this._c) : [].concat(r), n], a = i[0], l = i.reduce((u, f) => {
    const m = Ln(t, f, o);
    return u.top = le(m.top, u.top), u.right = Ie(m.right, u.right), u.bottom = Ie(m.bottom, u.bottom), u.left = le(m.left, u.left), u;
  }, Ln(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Iu(e) {
  const {
    width: t,
    height: r
  } = us(e);
  return {
    width: t,
    height: r
  };
}
function Ou(e, t, r) {
  const n = ye(t), o = Se(t), s = r === "fixed", i = Fe(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = xe(0);
  function u() {
    l.x = qr(o);
  }
  if (n || !n && !s)
    if ((et(t) !== "body" || pt(o)) && (a = Gt(t)), n) {
      const v = Fe(t, !0, s, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && u();
  s && !n && o && u();
  const f = o && !n && !s ? fs(o, a) : xe(0), m = i.left + a.scrollLeft - l.x - f.x, g = i.top + a.scrollTop - l.y - f.y;
  return {
    x: m,
    y: g,
    width: i.width,
    height: i.height
  };
}
function dr(e) {
  return me(e).position === "static";
}
function Fn(e, t) {
  if (!ye(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Se(e) === r && (r = r.ownerDocument.body), r;
}
function ms(e, t) {
  const r = ue(e);
  if (Ut(e))
    return r;
  if (!ye(e)) {
    let o = Oe(e);
    for (; o && !Xe(o); ) {
      if (pe(o) && !dr(o))
        return o;
      o = Oe(o);
    }
    return r;
  }
  let n = Fn(e, t);
  for (; n && mu(n) && dr(n); )
    n = Fn(n, t);
  return n && Xe(n) && dr(n) && !Kr(n) ? r : n || xu(e) || r;
}
const _u = async function(e) {
  const t = this.getOffsetParent || ms, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Ou(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Mu(e) {
  return me(e).direction === "rtl";
}
const ju = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Su,
  getDocumentElement: Se,
  getClippingRect: Nu,
  getOffsetParent: ms,
  getElementRects: _u,
  getClientRects: Eu,
  getDimensions: Iu,
  getScale: Ke,
  isElement: pe,
  isRTL: Mu
};
function hs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Du(e, t) {
  let r = null, n;
  const o = Se(e);
  function s() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: g,
      height: v
    } = u;
    if (a || t(), !g || !v)
      return;
    const y = Et(m), p = Et(o.clientWidth - (f + g)), h = Et(o.clientHeight - (m + v)), x = Et(f), w = {
      rootMargin: -y + "px " + -p + "px " + -h + "px " + -x + "px",
      threshold: le(0, Ie(1, l)) || 1
    };
    let C = !0;
    function R(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!C)
          return i();
        P ? i(!1, P) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !hs(u, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, w);
    }
    r.observe(e);
  }
  return i(!0), s;
}
function Lu(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, u = Xr(e), f = o || s ? [...u ? ut(u) : [], ...ut(t)] : [];
  f.forEach((x) => {
    o && x.addEventListener("scroll", r, {
      passive: !0
    }), s && x.addEventListener("resize", r);
  });
  const m = u && a ? Du(u, r) : null;
  let g = -1, v = null;
  i && (v = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === u && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), r();
  }), u && !l && v.observe(u), v.observe(t));
  let y, p = l ? Fe(e) : null;
  l && h();
  function h() {
    const x = Fe(e);
    p && !hs(p, x) && r(), p = x, y = requestAnimationFrame(h);
  }
  return r(), () => {
    var x;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", r), s && b.removeEventListener("resize", r);
    }), m == null || m(), (x = v) == null || x.disconnect(), v = null, l && cancelAnimationFrame(y);
  };
}
const Fu = cu, $u = lu, Bu = su, Vu = du, Wu = iu, $n = ou, zu = uu, Hu = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: ju,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return nu(e, t, {
    ...o,
    platform: s
  });
};
var Uu = typeof document < "u", Gu = function() {
}, kt = Uu ? Pi : Gu;
function Mt(e, t) {
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
        if (!Mt(e[n], t[n]))
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
      if (!(s === "_owner" && e.$$typeof) && !Mt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(e, t) {
  const r = vs(e);
  return Math.round(t * r) / r;
}
function fr(e) {
  const t = c.useRef(e);
  return kt(() => {
    t.current = e;
  }), t;
}
function Ku(e) {
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
    whileElementsMounted: l,
    open: u
  } = e, [f, m] = c.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, v] = c.useState(n);
  Mt(g, n) || v(n);
  const [y, p] = c.useState(null), [h, x] = c.useState(null), b = c.useCallback((T) => {
    T !== k.current && (k.current = T, p(T));
  }, []), w = c.useCallback((T) => {
    T !== P.current && (P.current = T, x(T));
  }, []), C = s || y, R = i || h, k = c.useRef(null), P = c.useRef(null), E = c.useRef(f), j = l != null, H = fr(l), V = fr(o), W = fr(u), U = c.useCallback(() => {
    if (!k.current || !P.current)
      return;
    const T = {
      placement: t,
      strategy: r,
      middleware: g
    };
    V.current && (T.platform = V.current), Hu(k.current, P.current, T).then((Y) => {
      const S = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      A.current && !Mt(E.current, S) && (E.current = S, dt.flushSync(() => {
        m(S);
      }));
    });
  }, [g, t, r, V, W]);
  kt(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, m((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const A = c.useRef(!1);
  kt(() => (A.current = !0, () => {
    A.current = !1;
  }), []), kt(() => {
    if (C && (k.current = C), R && (P.current = R), C && R) {
      if (H.current)
        return H.current(C, R, U);
      U();
    }
  }, [C, R, U, H, j]);
  const D = c.useMemo(() => ({
    reference: k,
    floating: P,
    setReference: b,
    setFloating: w
  }), [b, w]), I = c.useMemo(() => ({
    reference: C,
    floating: R
  }), [C, R]), L = c.useMemo(() => {
    const T = {
      position: r,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return T;
    const Y = Bn(I.floating, f.x), S = Bn(I.floating, f.y);
    return a ? {
      ...T,
      transform: "translate(" + Y + "px, " + S + "px)",
      ...vs(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: Y,
      top: S
    };
  }, [r, a, I.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: U,
    refs: D,
    elements: I,
    floatingStyles: L
  }), [f, U, D, I, L]);
}
const Yu = (e) => {
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
      return n && t(n) ? n.current != null ? $n({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? $n({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Xu = (e, t) => ({
  ...Fu(e),
  options: [e, t]
}), qu = (e, t) => ({
  ...$u(e),
  options: [e, t]
}), Zu = (e, t) => ({
  ...zu(e),
  options: [e, t]
}), Ju = (e, t) => ({
  ...Bu(e),
  options: [e, t]
}), Qu = (e, t) => ({
  ...Vu(e),
  options: [e, t]
}), ed = (e, t) => ({
  ...Wu(e),
  options: [e, t]
}), td = (e, t) => ({
  ...Yu(e),
  options: [e, t]
});
var rd = "Arrow", gs = c.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    B.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gs.displayName = rd;
var nd = gs, Zr = "Popper", [bs, xs] = he(Zr), [od, ys] = bs(Zr), ws = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = c.useState(null);
  return /* @__PURE__ */ d.jsx(od, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ws.displayName = Zr;
var Cs = "PopperAnchor", Ss = c.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = ys(Cs, r), i = c.useRef(null), a = Q(t, i);
    return c.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ d.jsx(B.div, { ...o, ref: a });
  }
);
Ss.displayName = Cs;
var Jr = "PopperContent", [sd, id] = bs(Jr), Es = c.forwardRef(
  (e, t) => {
    var N, $, ee, X, Z, J;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: y,
      ...p
    } = e, h = ys(Jr, r), [x, b] = c.useState(null), w = Q(t, (ce) => b(ce)), [C, R] = c.useState(null), k = Ft(C), P = (k == null ? void 0 : k.width) ?? 0, E = (k == null ? void 0 : k.height) ?? 0, j = n + (s !== "center" ? "-" + s : ""), H = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(u) ? u : [u], W = V.length > 0, U = {
      padding: H,
      boundary: V.filter(cd),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: A, floatingStyles: D, placement: I, isPositioned: L, middlewareData: T } = Ku({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...ce) => Lu(...ce, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        Xu({ mainAxis: o + E, alignmentAxis: i }),
        l && qu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Zu() : void 0,
          ...U
        }),
        l && Ju({ ...U }),
        Qu({
          ...U,
          apply: ({ elements: ce, rects: ve, availableWidth: rt, availableHeight: nt }) => {
            const { width: ot, height: Ei } = ve.reference, ht = ce.floating.style;
            ht.setProperty("--radix-popper-available-width", `${rt}px`), ht.setProperty("--radix-popper-available-height", `${nt}px`), ht.setProperty("--radix-popper-anchor-width", `${ot}px`), ht.setProperty("--radix-popper-anchor-height", `${Ei}px`);
          }
        }),
        C && td({ element: C, padding: a }),
        ld({ arrowWidth: P, arrowHeight: E }),
        g && ed({ strategy: "referenceHidden", ...U })
      ]
    }), [Y, S] = Ps(I), M = de(y);
    ie(() => {
      L && (M == null || M());
    }, [L, M]);
    const K = (N = T.arrow) == null ? void 0 : N.x, z = ($ = T.arrow) == null ? void 0 : $.y, q = ((ee = T.arrow) == null ? void 0 : ee.centerOffset) !== 0, [re, ae] = c.useState();
    return ie(() => {
      x && ae(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...D,
          transform: L ? D.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            (X = T.transformOrigin) == null ? void 0 : X.x,
            (Z = T.transformOrigin) == null ? void 0 : Z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = T.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          sd,
          {
            scope: r,
            placedSide: Y,
            onArrowChange: R,
            arrowX: K,
            arrowY: z,
            shouldHideArrow: q,
            children: /* @__PURE__ */ d.jsx(
              B.div,
              {
                "data-side": Y,
                "data-align": S,
                ...p,
                ref: w,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Es.displayName = Jr;
var Rs = "PopperArrow", ad = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ts = c.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = id(Rs, n), i = ad[s.placedSide];
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
        children: /* @__PURE__ */ d.jsx(
          nd,
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
Ts.displayName = Rs;
function cd(e) {
  return e !== null;
}
var ld = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var h, x, b;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((h = o.arrow) == null ? void 0 : h.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = Ps(r), m = { start: "0%", center: "50%", end: "100%" }[f], g = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let y = "", p = "";
    return u === "bottom" ? (y = i ? m : `${g}px`, p = `${-l}px`) : u === "top" ? (y = i ? m : `${g}px`, p = `${n.floating.height + l}px`) : u === "right" ? (y = `${-l}px`, p = i ? m : `${v}px`) : u === "left" && (y = `${n.floating.width + l}px`, p = i ? m : `${v}px`), { data: { x: y, y: p } };
  }
});
function Ps(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ud = ws, dd = Ss, fd = Es, pd = Ts, ks = Object.freeze({
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
}), md = "VisuallyHidden", Qr = c.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    B.span,
    {
      ...e,
      ref: t,
      style: { ...ks, ...e.style }
    }
  )
);
Qr.displayName = md;
var hd = [" ", "Enter", "ArrowUp", "ArrowDown"], vd = [" ", "Enter"], $e = "Select", [Kt, Yt, gd] = Vr($e), [tt, tp] = he($e, [
  gd,
  xs
]), Xt = xs(), [bd, _e] = tt($e), [xd, yd] = tt($e), As = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: m,
    disabled: g,
    required: v,
    form: y
  } = e, p = Xt(t), [h, x] = c.useState(null), [b, w] = c.useState(null), [C, R] = c.useState(!1), k = Wr(u), [P, E] = Ne({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: $e
  }), [j, H] = Ne({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: $e
  }), V = c.useRef(null), W = h ? y || !!h.closest("form") : !0, [U, A] = c.useState(/* @__PURE__ */ new Set()), D = Array.from(U).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ d.jsx(ud, { ...p, children: /* @__PURE__ */ d.jsxs(
    bd,
    {
      required: v,
      scope: t,
      trigger: h,
      onTriggerChange: x,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: R,
      contentId: De(),
      value: j,
      onValueChange: H,
      open: P,
      onOpenChange: E,
      dir: k,
      triggerPointerDownPosRef: V,
      disabled: g,
      children: [
        /* @__PURE__ */ d.jsx(Kt.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          xd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((I) => {
              A((L) => new Set(L).add(I));
            }, []),
            onNativeOptionRemove: c.useCallback((I) => {
              A((L) => {
                const T = new Set(L);
                return T.delete(I), T;
              });
            }, []),
            children: r
          }
        ) }),
        W ? /* @__PURE__ */ d.jsxs(
          ti,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: j,
            onChange: (I) => H(I.target.value),
            disabled: g,
            form: y,
            children: [
              j === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          D
        ) : null
      ]
    }
  ) });
};
As.displayName = $e;
var Ns = "SelectTrigger", Is = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, s = Xt(r), i = _e(Ns, r), a = i.disabled || n, l = Q(t, i.onTriggerChange), u = Yt(r), f = c.useRef("touch"), [m, g, v] = ni((p) => {
      const h = u().filter((w) => !w.disabled), x = h.find((w) => w.value === i.value), b = oi(h, p, x);
      b !== void 0 && i.onValueChange(b.value);
    }), y = (p) => {
      a || (i.onOpenChange(!0), v()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(dd, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
      B.button,
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
        "data-placeholder": ri(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: F(o.onClick, (p) => {
          p.currentTarget.focus(), f.current !== "mouse" && y(p);
        }),
        onPointerDown: F(o.onPointerDown, (p) => {
          f.current = p.pointerType;
          const h = p.target;
          h.hasPointerCapture(p.pointerId) && h.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (y(p), p.preventDefault());
        }),
        onKeyDown: F(o.onKeyDown, (p) => {
          const h = m.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && g(p.key), !(h && p.key === " ") && hd.includes(p.key) && (y(), p.preventDefault());
        })
      }
    ) });
  }
);
Is.displayName = Ns;
var Os = "SelectValue", _s = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: i = "", ...a } = e, l = _e(Os, r), { onValueNodeHasChildrenChange: u } = l, f = s !== void 0, m = Q(t, l.onValueNodeChange);
    return ie(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ d.jsx(
      B.span,
      {
        ...a,
        ref: m,
        style: { pointerEvents: "none" },
        children: ri(l.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : s
      }
    );
  }
);
_s.displayName = Os;
var wd = "SelectIcon", Ms = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ d.jsx(B.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Ms.displayName = wd;
var Cd = "SelectPortal", js = (e) => /* @__PURE__ */ d.jsx(jr, { asChild: !0, ...e });
js.displayName = Cd;
var Be = "SelectContent", Ds = c.forwardRef(
  (e, t) => {
    const r = _e(Be, e.__scopeSelect), [n, o] = c.useState();
    if (ie(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? dt.createPortal(
        /* @__PURE__ */ d.jsx(Ls, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(Kt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Fs, { ...e, ref: t });
  }
);
Ds.displayName = Be;
var fe = 10, [Ls, Me] = tt(Be), Sd = "SelectContentImpl", Ed = /* @__PURE__ */ Ye("SelectContent.RemoveScroll"), Fs = c.forwardRef(
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
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: p,
      avoidCollisions: h,
      //
      ...x
    } = e, b = _e(Be, r), [w, C] = c.useState(null), [R, k] = c.useState(null), P = Q(t, (N) => C(N)), [E, j] = c.useState(null), [H, V] = c.useState(
      null
    ), W = Yt(r), [U, A] = c.useState(!1), D = c.useRef(!1);
    c.useEffect(() => {
      if (w) return Ro(w);
    }, [w]), vo();
    const I = c.useCallback(
      (N) => {
        const [$, ...ee] = W().map((J) => J.ref.current), [X] = ee.slice(-1), Z = document.activeElement;
        for (const J of N)
          if (J === Z || (J == null || J.scrollIntoView({ block: "nearest" }), J === $ && R && (R.scrollTop = 0), J === X && R && (R.scrollTop = R.scrollHeight), J == null || J.focus(), document.activeElement !== Z)) return;
      },
      [W, R]
    ), L = c.useCallback(
      () => I([E, w]),
      [I, E, w]
    );
    c.useEffect(() => {
      U && L();
    }, [U, L]);
    const { onOpenChange: T, triggerPointerDownPosRef: Y } = b;
    c.useEffect(() => {
      if (w) {
        let N = { x: 0, y: 0 };
        const $ = (X) => {
          var Z, J;
          N = {
            x: Math.abs(Math.round(X.pageX) - (((Z = Y.current) == null ? void 0 : Z.x) ?? 0)),
            y: Math.abs(Math.round(X.pageY) - (((J = Y.current) == null ? void 0 : J.y) ?? 0))
          };
        }, ee = (X) => {
          N.x <= 10 && N.y <= 10 ? X.preventDefault() : w.contains(X.target) || T(!1), document.removeEventListener("pointermove", $), Y.current = null;
        };
        return Y.current !== null && (document.addEventListener("pointermove", $), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [w, T, Y]), c.useEffect(() => {
      const N = () => T(!1);
      return window.addEventListener("blur", N), window.addEventListener("resize", N), () => {
        window.removeEventListener("blur", N), window.removeEventListener("resize", N);
      };
    }, [T]);
    const [S, M] = ni((N) => {
      const $ = W().filter((Z) => !Z.disabled), ee = $.find((Z) => Z.ref.current === document.activeElement), X = oi($, N, ee);
      X && setTimeout(() => X.ref.current.focus());
    }), K = c.useCallback(
      (N, $, ee) => {
        const X = !D.current && !ee;
        (b.value !== void 0 && b.value === $ || X) && (j(N), X && (D.current = !0));
      },
      [b.value]
    ), z = c.useCallback(() => w == null ? void 0 : w.focus(), [w]), q = c.useCallback(
      (N, $, ee) => {
        const X = !D.current && !ee;
        (b.value !== void 0 && b.value === $ || X) && V(N);
      },
      [b.value]
    ), re = n === "popper" ? Er : $s, ae = re === Er ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: p,
      avoidCollisions: h
    } : {};
    return /* @__PURE__ */ d.jsx(
      Ls,
      {
        scope: r,
        content: w,
        viewport: R,
        onViewportChange: k,
        itemRefCallback: K,
        selectedItem: E,
        onItemLeave: z,
        itemTextRefCallback: q,
        focusSelectedItem: L,
        selectedItemText: H,
        position: n,
        isPositioned: U,
        searchRef: S,
        children: /* @__PURE__ */ d.jsx(Dr, { as: Ed, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Mr,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (N) => {
              N.preventDefault();
            },
            onUnmountAutoFocus: F(o, (N) => {
              var $;
              ($ = b.trigger) == null || $.focus({ preventScroll: !0 }), N.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (N) => N.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  re,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (N) => N.preventDefault(),
                    ...x,
                    ...ae,
                    onPlaced: () => A(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: F(x.onKeyDown, (N) => {
                      const $ = N.ctrlKey || N.altKey || N.metaKey;
                      if (N.key === "Tab" && N.preventDefault(), !$ && N.key.length === 1 && M(N.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(N.key)) {
                        let X = W().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                        if (["ArrowUp", "End"].includes(N.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(N.key)) {
                          const Z = N.target, J = X.indexOf(Z);
                          X = X.slice(J + 1);
                        }
                        setTimeout(() => I(X)), N.preventDefault();
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
Fs.displayName = Sd;
var Rd = "SelectItemAlignedPosition", $s = c.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, s = _e(Be, r), i = Me(Be, r), [a, l] = c.useState(null), [u, f] = c.useState(null), m = Q(t, (P) => f(P)), g = Yt(r), v = c.useRef(!1), y = c.useRef(!0), { viewport: p, selectedItem: h, selectedItemText: x, focusSelectedItem: b } = i, w = c.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && p && h && x) {
      const P = s.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), j = s.valueNode.getBoundingClientRect(), H = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Z = H.left - E.left, J = j.left - Z, ce = P.left - J, ve = P.width + ce, rt = Math.max(ve, E.width), nt = window.innerWidth - fe, ot = Nn(J, [
          fe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(fe, nt - rt)
        ]);
        a.style.minWidth = ve + "px", a.style.left = ot + "px";
      } else {
        const Z = E.right - H.right, J = window.innerWidth - j.right - Z, ce = window.innerWidth - P.right - J, ve = P.width + ce, rt = Math.max(ve, E.width), nt = window.innerWidth - fe, ot = Nn(J, [
          fe,
          Math.max(fe, nt - rt)
        ]);
        a.style.minWidth = ve + "px", a.style.right = ot + "px";
      }
      const V = g(), W = window.innerHeight - fe * 2, U = p.scrollHeight, A = window.getComputedStyle(u), D = parseInt(A.borderTopWidth, 10), I = parseInt(A.paddingTop, 10), L = parseInt(A.borderBottomWidth, 10), T = parseInt(A.paddingBottom, 10), Y = D + I + U + T + L, S = Math.min(h.offsetHeight * 5, Y), M = window.getComputedStyle(p), K = parseInt(M.paddingTop, 10), z = parseInt(M.paddingBottom, 10), q = P.top + P.height / 2 - fe, re = W - q, ae = h.offsetHeight / 2, N = h.offsetTop + ae, $ = D + I + N, ee = Y - $;
      if ($ <= q) {
        const Z = V.length > 0 && h === V[V.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = u.clientHeight - p.offsetTop - p.offsetHeight, ce = Math.max(
          re,
          ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Z ? z : 0) + J + L
        ), ve = $ + ce;
        a.style.height = ve + "px";
      } else {
        const Z = V.length > 0 && h === V[0].ref.current;
        a.style.top = "0px";
        const ce = Math.max(
          q,
          D + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Z ? K : 0) + ae
        ) + ee;
        a.style.height = ce + "px", p.scrollTop = $ - q + p.offsetTop;
      }
      a.style.margin = `${fe}px 0`, a.style.minHeight = S + "px", a.style.maxHeight = W + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    a,
    u,
    p,
    h,
    x,
    s.dir,
    n
  ]);
  ie(() => w(), [w]);
  const [C, R] = c.useState();
  ie(() => {
    u && R(window.getComputedStyle(u).zIndex);
  }, [u]);
  const k = c.useCallback(
    (P) => {
      P && y.current === !0 && (w(), b == null || b(), y.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ d.jsx(
    Pd,
    {
      scope: r,
      contentWrapper: a,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ d.jsx(
            B.div,
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
$s.displayName = Rd;
var Td = "SelectPopperPosition", Er = c.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = fe,
    ...s
  } = e, i = Xt(r);
  return /* @__PURE__ */ d.jsx(
    fd,
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
Er.displayName = Td;
var [Pd, en] = tt(Be, {}), Rr = "SelectViewport", Bs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, s = Me(Rr, r), i = en(Rr, r), a = Q(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ d.jsx(Kt.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
        B.div,
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
          onScroll: F(o.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = i;
            if (g != null && g.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const y = window.innerHeight - fe * 2, p = parseFloat(m.style.minHeight), h = parseFloat(m.style.height), x = Math.max(p, h);
                if (x < y) {
                  const b = x + v, w = Math.min(y, b), C = b - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, m.style.justifyContent = "flex-end");
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
Bs.displayName = Rr;
var Vs = "SelectGroup", [kd, Ad] = tt(Vs), Ws = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = De();
    return /* @__PURE__ */ d.jsx(kd, { scope: r, id: o, children: /* @__PURE__ */ d.jsx(B.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Ws.displayName = Vs;
var zs = "SelectLabel", Hs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ad(zs, r);
    return /* @__PURE__ */ d.jsx(B.div, { id: o.id, ...n, ref: t });
  }
);
Hs.displayName = zs;
var jt = "SelectItem", [Nd, Us] = tt(jt), Gs = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = _e(jt, r), l = Me(jt, r), u = a.value === n, [f, m] = c.useState(s ?? ""), [g, v] = c.useState(!1), y = Q(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, n, o);
      }
    ), p = De(), h = c.useRef("touch"), x = () => {
      o || (a.onValueChange(n), a.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      Nd,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: c.useCallback((b) => {
          m((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          Kt.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              B.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": u && g,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: y,
                onFocus: F(i.onFocus, () => v(!0)),
                onBlur: F(i.onBlur, () => v(!1)),
                onClick: F(i.onClick, () => {
                  h.current !== "mouse" && x();
                }),
                onPointerUp: F(i.onPointerUp, () => {
                  h.current === "mouse" && x();
                }),
                onPointerDown: F(i.onPointerDown, (b) => {
                  h.current = b.pointerType;
                }),
                onPointerMove: F(i.onPointerMove, (b) => {
                  var w;
                  h.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : h.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: F(i.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: F(i.onKeyDown, (b) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (vd.includes(b.key) && x(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Gs.displayName = jt;
var ct = "SelectItemText", Ks = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e, i = _e(ct, r), a = Me(ct, r), l = Us(ct, r), u = yd(ct, r), [f, m] = c.useState(null), g = Q(
      t,
      (x) => m(x),
      l.onItemTextChange,
      (x) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, x, l.value, l.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, y = c.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: h } = u;
    return ie(() => (p(y), () => h(y)), [p, h, y]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(B.span, { id: l.textId, ...s, ref: g }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? dt.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Ks.displayName = ct;
var Ys = "SelectItemIndicator", Xs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Us(Ys, r).isSelected ? /* @__PURE__ */ d.jsx(B.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Xs.displayName = Ys;
var Tr = "SelectScrollUpButton", qs = c.forwardRef((e, t) => {
  const r = Me(Tr, e.__scopeSelect), n = en(Tr, e.__scopeSelect), [o, s] = c.useState(!1), i = Q(t, n.onScrollButtonChange);
  return ie(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = r.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Js,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = r;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
qs.displayName = Tr;
var Pr = "SelectScrollDownButton", Zs = c.forwardRef((e, t) => {
  const r = Me(Pr, e.__scopeSelect), n = en(Pr, e.__scopeSelect), [o, s] = c.useState(!1), i = Q(t, n.onScrollButtonChange);
  return ie(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        s(f);
      };
      const l = r.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Js,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = r;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Zs.displayName = Pr;
var Js = c.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, s = Me("SelectScrollButton", r), i = c.useRef(null), a = Yt(r), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), ie(() => {
    var f;
    const u = a().find((m) => m.ref.current === document.activeElement);
    (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ d.jsx(
    B.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: F(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: F(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: F(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Id = "SelectSeparator", Qs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(B.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Qs.displayName = Id;
var kr = "SelectArrow", ei = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Xt(r), s = _e(kr, r), i = Me(kr, r);
    return s.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(pd, { ...o, ...n, ref: t }) : null;
  }
);
ei.displayName = kr;
var Od = "SelectBubbleInput", ti = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = c.useRef(null), s = Q(n, o), i = Lt(t);
    return c.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(a, t), a.dispatchEvent(m);
      }
    }, [i, t]), /* @__PURE__ */ d.jsx(
      B.select,
      {
        ...r,
        style: { ...ks, ...r.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
ti.displayName = Od;
function ri(e) {
  return e === "" || e === void 0;
}
function ni(e) {
  const t = de(e), r = c.useRef(""), n = c.useRef(0), o = c.useCallback(
    (i) => {
      const a = r.current + i;
      t(a), function l(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = c.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function oi(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = r ? e.indexOf(r) : -1;
  let i = _d(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function _d(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Md = As, jd = Is, Dd = _s, Ld = Ms, Fd = js, $d = Ds, Bd = Bs, Vd = Ws, Wd = Hs, zd = Gs, Hd = Ks, Ud = Xs, Gd = qs, Kd = Zs, Yd = Qs, Xd = ei;
const qd = we(
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
), Zd = te(
  `flex h-[2.75rem] cursor-pointer items-center gap-xs border-0 px-md
  text-body-primary ring-0 hover:bg-interactive-neutral-hover
  focus:bg-interactive-neutral-hover focus:outline-0
  active:bg-interactive-neutral-active disabled:bg-surface-disabled
  disabled:text-interactive-disabled`
), rp = ({
  options: e,
  placeholder: t,
  className: r,
  invalid: n = !1,
  ...o
}) => /* @__PURE__ */ d.jsxs(Md, { ...o, children: [
  /* @__PURE__ */ d.jsxs(
    jd,
    {
      className: te(se(qd({ invalid: n })), r),
      children: [
        /* @__PURE__ */ d.jsx(
          Dd,
          {
            placeholder: t || "Select an option",
            className: "text-body-primary"
          }
        ),
        /* @__PURE__ */ d.jsx(
          Ld,
          {
            className: se(
              te("h-md w-md text-body-primary", {
                "text-body-disabled": o.disabled
              })
            ),
            children: /* @__PURE__ */ d.jsx(La, { className: "w-full" })
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ d.jsx(Fd, { children: /* @__PURE__ */ d.jsxs(
    $d,
    {
      position: "popper",
      className: te(
        `relative z-50 max-h-96 w-full min-w-[8rem] overflow-hidden rounded
            border border-input-default bg-surface-primary py-xxs`,
        r
      ),
      children: [
        /* @__PURE__ */ d.jsx(Gd, {}),
        /* @__PURE__ */ d.jsx(Bd, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((s, i) => {
          switch (s.type) {
            case "Group":
              return /* @__PURE__ */ d.jsx(Vd, { children: /* @__PURE__ */ d.jsx(Wd, { children: s.label }) }, i);
            case "Separator":
              return /* @__PURE__ */ d.jsx(
                Yd,
                {
                  className: "m-[5px] h-px border-b border-divider-default"
                },
                i
              );
            default:
              return /* @__PURE__ */ d.jsxs(
                zd,
                {
                  value: s.value,
                  className: Zd,
                  children: [
                    s.icon && /* @__PURE__ */ d.jsx(s.icon, { className: "-ml-xxs h-lg w-lg" }),
                    /* @__PURE__ */ d.jsx(Hd, { children: s.label }),
                    /* @__PURE__ */ d.jsx(Ud, {})
                  ]
                },
                i
              );
          }
        }) }),
        /* @__PURE__ */ d.jsx(Kd, {}),
        /* @__PURE__ */ d.jsx(Xd, {})
      ]
    }
  ) })
] }), Jd = we("flex items-center", {
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
}), Qd = {
  sm: "h-[1.25rem] w-[1.25rem]",
  md: "h-9 w-9"
}, Dt = {
  sm: 16,
  md: 10
}, Vn = {
  sm: (50 - Dt.sm / 2).toString(),
  md: (50 - Dt.md / 2).toString()
}, ef = ({
  layout: e,
  size: t,
  children: r,
  className: n,
  ...o
}) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    role: "status",
    className: se(
      te(Jd({ size: t, layout: e }), n)
    ),
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
          className: te(
            Qd[t],
            "animate-spin text-transparent"
          ),
          children: [
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: Vn[t],
                stroke: "var(--token-color-shape-accent-gray-pale)",
                "stroke-width": Dt[t]
              }
            ),
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: Vn[t],
                stroke: "var(--token-color-shape-accent-green-strong)",
                "stroke-width": Dt[t],
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
ef.displayName = "Spinner";
var qt = "Switch", [tf, np] = he(qt), [rf, nf] = tf(qt), si = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...m
    } = e, [g, v] = c.useState(null), y = Q(t, (w) => v(w)), p = c.useRef(!1), h = g ? f || !!g.closest("form") : !0, [x, b] = Ne({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: qt
    });
    return /* @__PURE__ */ d.jsxs(rf, { scope: r, checked: x, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        B.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": i,
          "data-state": li(x),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...m,
          ref: y,
          onClick: F(e.onClick, (w) => {
            b((C) => !C), h && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ d.jsx(
        ci,
        {
          control: g,
          bubbles: !p.current,
          name: n,
          value: l,
          checked: x,
          required: i,
          disabled: a,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
si.displayName = qt;
var ii = "SwitchThumb", ai = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = nf(ii, r);
    return /* @__PURE__ */ d.jsx(
      B.span,
      {
        "data-state": li(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
ai.displayName = ii;
var of = "SwitchBubbleInput", ci = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = Q(i, s), l = Lt(r), u = Ft(t);
    return c.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== r && v) {
        const y = new Event("click", { bubbles: n });
        v.call(f, r), f.dispatchEvent(y);
      }
    }, [l, r, n]), /* @__PURE__ */ d.jsx(
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
ci.displayName = of;
function li(e) {
  return e ? "checked" : "unchecked";
}
var sf = si, af = ai;
function op({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    sf,
    {
      "data-slot": "switch",
      className: te(
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
      children: /* @__PURE__ */ d.jsx(
        af,
        {
          "data-slot": "switch-thumb",
          className: te(
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
const cf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-auto border border-surface-default", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: r,
    className: te("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
cf.displayName = "Table";
const lf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "thead",
  {
    ref: r,
    className: te(
      "h-10 bg-surface-secondary [&_tr]:border-b",
      e
    ),
    ...t
  }
));
lf.displayName = "TableHeader";
const uf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: r,
    className: te("[&_tr:last-child]:border-0", e),
    ...t
  }
));
uf.displayName = "TableBody";
const df = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: r,
    className: te(
      "border-t bg-surface-secondary font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
df.displayName = "TableFooter";
const ff = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: r,
    className: te(
      `border-b border-surface-default transition-colors
      hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected`,
      e
    ),
    ...t
  }
));
ff.displayName = "TableRow";
const pf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: r,
    className: te(
      `px-4 text-left align-middle font-medium text-body-primary
      [&:has([role=checkbox])]:w-4 [&:has([role=checkbox])]:pr-0`,
      e
    ),
    ...t
  }
));
pf.displayName = "TableHead";
const mf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: r,
    className: te(
      "h-12 w-fit px-4 py-4 align-middle [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
mf.displayName = "TableCell";
const hf = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: r,
    className: te("mt-4 text-sm text-body-primary", e),
    ...t
  }
));
hf.displayName = "TableCaption";
const sp = ({
  accentColor: e,
  children: t,
  className: r,
  onRemove: n
}) => (console.log("TagProps:", e), /* @__PURE__ */ d.jsxs(
  "div",
  {
    className: se(
      te(
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
      !!n && /* @__PURE__ */ d.jsx(
        "button",
        {
          className: se(
            `bg-interactive-secondary-default flex h-3 w-3 items-center
            justify-center rounded-full`
          ),
          onClick: n,
          children: /* @__PURE__ */ d.jsxs(
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
                /* @__PURE__ */ d.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ d.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ]
            }
          )
        }
      )
    ]
  }
)), vf = we(
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
), ip = ne.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: r = 0,
    showCharacterLimit: n = !0,
    ...o
  }, s) => {
    const [i, a] = ne.useState(o.value || ""), l = (u) => {
      if (r && u.target.value.length > r) {
        u.preventDefault();
        return;
      }
      a(u.target.value), o.onChange && o.onChange(u);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ d.jsx(
        "textarea",
        {
          ref: s,
          className: te(
            se(vf({ invalid: e }), t)
          ),
          ...o,
          value: i,
          onChange: l
        }
      ),
      !!(r && n) && /* @__PURE__ */ d.jsxs("div", { className: "text-right text-sm text-body-secondary", children: [
        i.toString().length,
        "/",
        r
      ] })
    ] });
  }
);
var tn = "ToastProvider", [rn, gf, bf] = Vr("Toast"), [ui, ap] = he("Toast", [bf]), [xf, Zt] = ui(tn), di = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: i
  } = e, [a, l] = c.useState(null), [u, f] = c.useState(0), m = c.useRef(!1), g = c.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${tn}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(rn.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
    xf,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: u,
      viewport: a,
      onViewportChange: l,
      onToastAdd: c.useCallback(() => f((v) => v + 1), []),
      onToastRemove: c.useCallback(() => f((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: g,
      children: i
    }
  ) });
};
di.displayName = tn;
var fi = "ToastViewport", yf = ["F8"], Ar = "toast.viewportPause", Nr = "toast.viewportResume", pi = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = yf,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, i = Zt(fi, r), a = gf(r), l = c.useRef(null), u = c.useRef(null), f = c.useRef(null), m = c.useRef(null), g = Q(t, m, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    c.useEffect(() => {
      const h = (x) => {
        var w;
        n.length !== 0 && n.every((C) => x[C] || x.code === C) && ((w = m.current) == null || w.focus());
      };
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, [n]), c.useEffect(() => {
      const h = l.current, x = m.current;
      if (y && h && x) {
        const b = () => {
          if (!i.isClosePausedRef.current) {
            const k = new CustomEvent(Ar);
            x.dispatchEvent(k), i.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (i.isClosePausedRef.current) {
            const k = new CustomEvent(Nr);
            x.dispatchEvent(k), i.isClosePausedRef.current = !1;
          }
        }, C = (k) => {
          !h.contains(k.relatedTarget) && w();
        }, R = () => {
          h.contains(document.activeElement) || w();
        };
        return h.addEventListener("focusin", b), h.addEventListener("focusout", C), h.addEventListener("pointermove", b), h.addEventListener("pointerleave", R), window.addEventListener("blur", b), window.addEventListener("focus", w), () => {
          h.removeEventListener("focusin", b), h.removeEventListener("focusout", C), h.removeEventListener("pointermove", b), h.removeEventListener("pointerleave", R), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        };
      }
    }, [y, i.isClosePausedRef]);
    const p = c.useCallback(
      ({ tabbingDirection: h }) => {
        const b = a().map((w) => {
          const C = w.ref.current, R = [C, ..._f(C)];
          return h === "forwards" ? R : R.reverse();
        });
        return (h === "forwards" ? b.reverse() : b).flat();
      },
      [a]
    );
    return c.useEffect(() => {
      const h = m.current;
      if (h) {
        const x = (b) => {
          var R, k, P;
          const w = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !w) {
            const E = document.activeElement, j = b.shiftKey;
            if (b.target === h && j) {
              (R = u.current) == null || R.focus();
              return;
            }
            const W = p({ tabbingDirection: j ? "backwards" : "forwards" }), U = W.findIndex((A) => A === E);
            pr(W.slice(U + 1)) ? b.preventDefault() : j ? (k = u.current) == null || k.focus() : (P = f.current) == null || P.focus();
          }
        };
        return h.addEventListener("keydown", x), () => h.removeEventListener("keydown", x);
      }
    }, [a, p]), /* @__PURE__ */ d.jsxs(
      ec,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ d.jsx(
            Ir,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const h = p({
                  tabbingDirection: "forwards"
                });
                pr(h);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(rn.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(B.ol, { tabIndex: -1, ...s, ref: g }) }),
          y && /* @__PURE__ */ d.jsx(
            Ir,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const h = p({
                  tabbingDirection: "backwards"
                });
                pr(h);
              }
            }
          )
        ]
      }
    );
  }
);
pi.displayName = fi;
var mi = "ToastFocusProxy", Ir = c.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, s = Zt(mi, r);
    return /* @__PURE__ */ d.jsx(
      Qr,
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
Ir.displayName = mi;
var mt = "Toast", wf = "toast.swipeStart", Cf = "toast.swipeMove", Sf = "toast.swipeCancel", Ef = "toast.swipeEnd", hi = c.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: s, ...i } = e, [a, l] = Ne({
      prop: n,
      defaultProp: o ?? !0,
      onChange: s,
      caller: mt
    });
    return /* @__PURE__ */ d.jsx(Je, { present: r || a, children: /* @__PURE__ */ d.jsx(
      Pf,
      {
        open: a,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: de(e.onPause),
        onResume: de(e.onResume),
        onSwipeStart: F(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: F(e.onSwipeMove, (u) => {
          const { x: f, y: m } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: F(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: F(e.onSwipeEnd, (u) => {
          const { x: f, y: m } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
hi.displayName = mt;
var [Rf, Tf] = ui(mt, {
  onClose() {
  }
}), Pf = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: s,
      onClose: i,
      onEscapeKeyDown: a,
      onPause: l,
      onResume: u,
      onSwipeStart: f,
      onSwipeMove: m,
      onSwipeCancel: g,
      onSwipeEnd: v,
      ...y
    } = e, p = Zt(mt, r), [h, x] = c.useState(null), b = Q(t, (A) => x(A)), w = c.useRef(null), C = c.useRef(null), R = o || p.duration, k = c.useRef(0), P = c.useRef(R), E = c.useRef(0), { onToastAdd: j, onToastRemove: H } = p, V = de(() => {
      var D;
      (h == null ? void 0 : h.contains(document.activeElement)) && ((D = p.viewport) == null || D.focus()), i();
    }), W = c.useCallback(
      (A) => {
        !A || A === 1 / 0 || (window.clearTimeout(E.current), k.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(V, A));
      },
      [V]
    );
    c.useEffect(() => {
      const A = p.viewport;
      if (A) {
        const D = () => {
          W(P.current), u == null || u();
        }, I = () => {
          const L = (/* @__PURE__ */ new Date()).getTime() - k.current;
          P.current = P.current - L, window.clearTimeout(E.current), l == null || l();
        };
        return A.addEventListener(Ar, I), A.addEventListener(Nr, D), () => {
          A.removeEventListener(Ar, I), A.removeEventListener(Nr, D);
        };
      }
    }, [p.viewport, R, l, u, W]), c.useEffect(() => {
      s && !p.isClosePausedRef.current && W(R);
    }, [s, R, p.isClosePausedRef, W]), c.useEffect(() => (j(), () => H()), [j, H]);
    const U = c.useMemo(() => h ? Si(h) : null, [h]);
    return p.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      U && /* @__PURE__ */ d.jsx(
        kf,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: U
        }
      ),
      /* @__PURE__ */ d.jsx(Rf, { scope: r, onClose: V, children: dt.createPortal(
        /* @__PURE__ */ d.jsx(rn.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
          Qa,
          {
            asChild: !0,
            onEscapeKeyDown: F(a, () => {
              p.isFocusedToastEscapeKeyDownRef.current || V(), p.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d.jsx(
              B.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": p.swipeDirection,
                ...y,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: F(e.onKeyDown, (A) => {
                  A.key === "Escape" && (a == null || a(A.nativeEvent), A.nativeEvent.defaultPrevented || (p.isFocusedToastEscapeKeyDownRef.current = !0, V()));
                }),
                onPointerDown: F(e.onPointerDown, (A) => {
                  A.button === 0 && (w.current = { x: A.clientX, y: A.clientY });
                }),
                onPointerMove: F(e.onPointerMove, (A) => {
                  if (!w.current) return;
                  const D = A.clientX - w.current.x, I = A.clientY - w.current.y, L = !!C.current, T = ["left", "right"].includes(p.swipeDirection), Y = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max, S = T ? Y(0, D) : 0, M = T ? 0 : Y(0, I), K = A.pointerType === "touch" ? 10 : 2, z = { x: S, y: M }, q = { originalEvent: A, delta: z };
                  L ? (C.current = z, Rt(Cf, m, q, {
                    discrete: !1
                  })) : Wn(z, p.swipeDirection, K) ? (C.current = z, Rt(wf, f, q, {
                    discrete: !1
                  }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(D) > K || Math.abs(I) > K) && (w.current = null);
                }),
                onPointerUp: F(e.onPointerUp, (A) => {
                  const D = C.current, I = A.target;
                  if (I.hasPointerCapture(A.pointerId) && I.releasePointerCapture(A.pointerId), C.current = null, w.current = null, D) {
                    const L = A.currentTarget, T = { originalEvent: A, delta: D };
                    Wn(D, p.swipeDirection, p.swipeThreshold) ? Rt(Ef, v, T, {
                      discrete: !0
                    }) : Rt(
                      Sf,
                      g,
                      T,
                      {
                        discrete: !0
                      }
                    ), L.addEventListener("click", (Y) => Y.preventDefault(), {
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
), kf = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Zt(mt, t), [s, i] = c.useState(!1), [a, l] = c.useState(!1);
  return If(() => i(!0)), c.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), a ? null : /* @__PURE__ */ d.jsx(jr, { asChild: !0, children: /* @__PURE__ */ d.jsx(Qr, { ...n, children: s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, Af = "ToastTitle", vi = c.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(B.div, { ...n, ref: t });
  }
);
vi.displayName = Af;
var Nf = "ToastDescription", gi = c.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(B.div, { ...n, ref: t });
  }
);
gi.displayName = Nf;
var bi = "ToastAction", xi = c.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ d.jsx(Ci, { altText: r, asChild: !0, children: /* @__PURE__ */ d.jsx(wi, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${bi}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
xi.displayName = bi;
var yi = "ToastClose", wi = c.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = Tf(yi, r);
    return /* @__PURE__ */ d.jsx(Ci, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      B.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: F(e.onClick, o.onClose)
      }
    ) });
  }
);
wi.displayName = yi;
var Ci = c.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    B.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function Si(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Of(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...Si(n));
    }
  }), t;
}
function Rt(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? to(o, s) : o.dispatchEvent(s);
}
var Wn = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > r : !s && o > r;
};
function If(e = () => {
}) {
  const t = de(e);
  ie(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function Of(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function _f(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function pr(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var Mf = di, jf = pi, Df = hi, Lf = vi, Ff = gi, $f = xi;
const cp = ({
  message: e,
  title: t,
  isOpen: r,
  onClose: n,
  level: o
}) => /* @__PURE__ */ d.jsxs(Mf, { children: [
  /* @__PURE__ */ d.jsx(
    Df,
    {
      open: r,
      onOpenChange: n,
      className: `w-96 rounded border-1 border-surface-default
          bg-surface-primary p-md text-body-primary shadow-high`,
      children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-start justify-between gap-xs", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-start gap-xs", children: [
          /* @__PURE__ */ d.jsxs("div", { children: [
            o === "success" && /* @__PURE__ */ d.jsx(
              Fa,
              {
                className: "h-md w-md text-shape-status-success"
              }
            ),
            o === "error" && /* @__PURE__ */ d.jsx($a, { className: "h-md w-md text-shape-status-alert" }),
            o === "warning" && /* @__PURE__ */ d.jsx(
              Ba,
              {
                className: "h-md w-md text-shape-status-warning"
              }
            ),
            o === "info" && /* @__PURE__ */ d.jsx(
              Va,
              {
                className: "h-md w-md text-shape-status-info"
              }
            )
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            /* @__PURE__ */ d.jsx(Lf, { className: "font-bold text-body-primary", children: /* @__PURE__ */ d.jsx("h5", { className: "mb-xxs text-md leading-none", children: t }) }),
            /* @__PURE__ */ d.jsx(Ff, { children: /* @__PURE__ */ d.jsx("p", { className: "text-md", children: e }) })
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx($f, { asChild: !0, altText: "Close", className: "pt-xxxs", children: /* @__PURE__ */ d.jsx("button", { onClick: n, className: "cursor-pointer", children: /* @__PURE__ */ d.jsx(uo, { className: "h-md w-md text-body-primary" }) }) }) })
      ] })
    }
  ),
  /* @__PURE__ */ d.jsx(jf, {})
] });
export {
  gr as Button,
  zf as Checkbox,
  Hf as CheckboxGroup,
  Uf as Chip,
  Xf as Dialog,
  qf as Input,
  bl as Progress,
  Qf as RadioButton,
  ep as RadioButtonGroup,
  rp as Select,
  ef as Spinner,
  op as Switch,
  cf as Table,
  uf as TableBody,
  hf as TableCaption,
  mf as TableCell,
  df as TableFooter,
  pf as TableHead,
  lf as TableHeader,
  ff as TableRow,
  sp as Tag,
  ip as Textarea,
  cp as Toast
};
