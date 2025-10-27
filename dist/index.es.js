import * as u from "react";
import M, { useState as On, useLayoutEffect as ii, forwardRef as Ku, createElement as fo, createContext as ci, useContext as li, useCallback as Se, useRef as Dn, useEffect as di, useMemo as mo } from "react";
import * as Fn from "react-dom";
import qu from "react-dom";
var rr = { exports: {} }, Cn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Xu() {
  if (Xa) return Cn;
  Xa = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      a = {};
      for (var s in o)
        s !== "key" && (a[s] = o[s]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Cn.Fragment = t, Cn.jsx = n, Cn.jsxs = n, Cn;
}
var kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function Zu() {
  return Za || (Za = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === z ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case h:
          return "Fragment";
        case w:
          return "Profiler";
        case g:
          return "StrictMode";
        case C:
          return "Suspense";
        case S:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case x:
            return "Portal";
          case y:
            return (R.displayName || "Context") + ".Provider";
          case b:
            return (R._context.displayName || "Context") + ".Consumer";
          case N:
            var H = R.render;
            return R = R.displayName, R || (R = H.displayName || H.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case k:
            return H = R.displayName || null, H !== null ? H : e(R.type) || "Memo";
          case P:
            H = R._payload, R = R._init;
            try {
              return e(R(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var E = H.error, A = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return E.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(R);
      }
    }
    function r(R) {
      if (R === h) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === P)
        return "<...>";
      try {
        var H = e(R);
        return H ? "<" + H + ">" : "<...>";
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
    function i(R) {
      if (V.call(R, "key")) {
        var H = Object.getOwnPropertyDescriptor(R, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function s(R, H) {
      function E() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return L[R] || (L[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, H, E, A, _, F, Z, O) {
      return E = F.ref, R = {
        $$typeof: v,
        type: R,
        key: H,
        props: F,
        _owner: _
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: Z
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, H, E, A, _, F, Z, O) {
      var q = H.children;
      if (q !== void 0)
        if (A)
          if (X(q)) {
            for (A = 0; A < q.length; A++)
              m(q[A]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(q);
      if (V.call(H, "key")) {
        q = e(R);
        var te = Object.keys(H).filter(function(ie) {
          return ie !== "key";
        });
        A = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", W[q + A] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          q,
          te,
          q
        ), W[q + A] = !0);
      }
      if (q = null, E !== void 0 && (n(E), q = "" + E), i(H) && (n(H.key), q = "" + H.key), "key" in H) {
        E = {};
        for (var re in H)
          re !== "key" && (E[re] = H[re]);
      } else E = H;
      return q && s(
        E,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        q,
        F,
        _,
        o(),
        E,
        Z,
        O
      );
    }
    function m(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var p = M, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), y = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), U = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, X = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var Y, L = {}, K = p.react_stack_bottom_frame.bind(
      p,
      a
    )(), D = I(r(a)), W = {};
    kn.Fragment = h, kn.jsx = function(R, H, E, A, _) {
      var F = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        H,
        E,
        !1,
        A,
        _,
        F ? Error("react-stack-top-frame") : K,
        F ? I(r(R)) : D
      );
    }, kn.jsxs = function(R, H, E, A, _) {
      var F = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        H,
        E,
        !0,
        A,
        _,
        F ? Error("react-stack-top-frame") : K,
        F ? I(r(R)) : D
      );
    };
  })()), kn;
}
var Qa;
function Qu() {
  return Qa || (Qa = 1, process.env.NODE_ENV === "production" ? rr.exports = Xu() : rr.exports = Zu()), rr.exports;
}
var c = Qu();
function ui(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ui(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fi() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ui(e)) && (r && (r += " "), r += t);
  return r;
}
const Ja = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, es = fi, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return es(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = Ja(f) || Ja(m);
    return o[d][p];
  }), s = n && Object.entries(n).reduce((d, f) => {
    let [m, p] = f;
    return p === void 0 || (d[m] = p), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: m, className: p, ...v } = f;
    return Object.entries(v).every((x) => {
      let [h, g] = x;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...s
      }[h]) : {
        ...a,
        ...s
      }[h] === g;
    }) ? [
      ...d,
      m,
      p
    ] : d;
  }, []);
  return es(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function ts(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function gt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = ts(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : ts(e[o], null);
        }
      };
  };
}
function de(...e) {
  return u.useCallback(gt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = /* @__PURE__ */ Ju(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(tf);
    if (l) {
      const d = l.props.children, f = s.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ir = /* @__PURE__ */ St("Slot");
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = rf(o), s = nf(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? gt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ef = Symbol("radix.slottable");
function tf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ef;
}
function nf(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function rf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var of = [
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
], Q = of.reduce((e, t) => {
  const n = /* @__PURE__ */ St(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function sa(e, t) {
  e && Fn.flushSync(() => e.dispatchEvent(t));
}
var mi = Object.freeze({
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
}), af = "VisuallyHidden", ia = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...mi, ...e.style }
    }
  )
);
ia.displayName = af;
function sf(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ c.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Te(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i), l = n.length;
    n = [...n, i];
    const d = (m) => {
      var w;
      const { scope: p, children: v, ...x } = m, h = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || s, g = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(h.Provider, { value: g, children: v });
    };
    d.displayName = a + "Provider";
    function f(m, p) {
      var h;
      const v = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[l]) || s, x = u.useContext(v);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, cf(o, ...t)];
}
function cf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: d }) => {
        const m = l(a)[`__scope${d}`];
        return { ...s, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function jr(e) {
  const t = e + "CollectionProvider", [n, r] = Te(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: g, children: w } = h, b = M.useRef(null), y = M.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ St(s), d = M.forwardRef(
    (h, g) => {
      const { scope: w, children: b } = h, y = a(s, w), N = de(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: N, children: b });
    }
  );
  d.displayName = s;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ St(f), v = M.forwardRef(
    (h, g) => {
      const { scope: w, children: b, ...y } = h, N = M.useRef(null), C = de(g, N), S = a(f, w);
      return M.useEffect(() => (S.itemMap.set(N, { ref: N, ...y }), () => void S.itemMap.delete(N))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
    }
  );
  v.displayName = f;
  function x(h) {
    const g = a(e + "CollectionConsumer", h);
    return M.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (S, k) => y.indexOf(S.ref.current) - y.indexOf(k.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: v },
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
var Pe = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, lf = u[" useInsertionEffect ".trim().toString()] || Pe;
function Xe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = df({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = f.current;
      m !== s && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const d = u.useCallback(
    (f) => {
      var m;
      if (s) {
        const p = uf(f) ? f(e) : f;
        p !== e && ((m = i.current) == null || m.call(i, p));
      } else
        a(f);
    },
    [s, e, a, i]
  );
  return [l, d];
}
function df({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return lf(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var i;
    o.current !== n && ((i = a.current) == null || i.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function uf(e) {
  return typeof e == "function";
}
function ff(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var We = (e) => {
  const { present: t, children: n } = e, r = mf(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = de(r.ref, pf(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
We.displayName = "Presence";
function mf(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = ff(i, {
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
    const d = or(r.current);
    a.current = s === "mounted" ? d : "none";
  }, [s]), Pe(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, v = or(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Pe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = or(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = or(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function or(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var hf = u[" useId ".trim().toString()] || (() => {
}), vf = 0;
function Ee(e) {
  const [t, n] = u.useState(hf());
  return Pe(() => {
    n((r) => r ?? String(vf++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var gf = u.createContext(void 0);
function $n(e) {
  const t = u.useContext(gf);
  return e || t || "ltr";
}
function je(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function xf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bf = "DismissableLayer", Wo = "dismissableLayer.update", yf = "dismissableLayer.pointerDownOutside", wf = "dismissableLayer.focusOutside", ns, pi = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, d = u.useContext(pi), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = de(t, (k) => m(k)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), b = f ? h.indexOf(f) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, N = b >= w, C = kf((k) => {
      const P = k.target, $ = [...d.branches].some((z) => z.contains(P));
      !N || $ || (o == null || o(k), i == null || i(k), k.defaultPrevented || s == null || s());
    }, p), S = Sf((k) => {
      const P = k.target;
      [...d.branches].some((z) => z.contains(P)) || (a == null || a(k), i == null || i(k), k.defaultPrevented || s == null || s());
    }, p);
    return xf((k) => {
      b === d.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && s && (k.preventDefault(), s()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (ns = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), rs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = ns);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), rs());
    }, [f, d]), u.useEffect(() => {
      const k = () => v({});
      return document.addEventListener(Wo, k), () => document.removeEventListener(Wo, k);
    }, []), /* @__PURE__ */ c.jsx(
      Q.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: B(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: B(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: B(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
sn.displayName = bf;
var Cf = "DismissableLayerBranch", hi = u.forwardRef((e, t) => {
  const n = u.useContext(pi), r = u.useRef(null), o = de(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Q.div, { ...e, ref: o });
});
hi.displayName = Cf;
function kf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          vi(
            yf,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Sf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && vi(wf, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function rs() {
  const e = new CustomEvent(Wo);
  document.dispatchEvent(e);
}
function vi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sa(o, a) : o.dispatchEvent(a);
}
var Nf = sn, Mf = hi, po = "focusScope.autoFocusOnMount", ho = "focusScope.autoFocusOnUnmount", os = { bubbles: !1, cancelable: !0 }, Ef = "FocusScope", Ln = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = u.useState(null), d = je(o), f = je(a), m = u.useRef(null), p = de(t, (h) => l(h)), v = u.useRef({
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
      let h = function(y) {
        if (v.paused || !s) return;
        const N = y.target;
        s.contains(N) ? m.current = N : Ct(m.current, { select: !0 });
      }, g = function(y) {
        if (v.paused || !s) return;
        const N = y.relatedTarget;
        N !== null && (s.contains(N) || Ct(m.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && Ct(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, s, v.paused]), u.useEffect(() => {
    if (s) {
      ss.add(v);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(po, os);
        s.addEventListener(po, d), s.dispatchEvent(w), w.defaultPrevented || (Pf(Tf(gi(s)), { select: !0 }), document.activeElement === h && Ct(s));
      }
      return () => {
        s.removeEventListener(po, d), setTimeout(() => {
          const w = new CustomEvent(ho, os);
          s.addEventListener(ho, f), s.dispatchEvent(w), w.defaultPrevented || Ct(h ?? document.body, { select: !0 }), s.removeEventListener(ho, f), ss.remove(v);
        }, 0);
      };
    }
  }, [s, d, f, v]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const b = h.currentTarget, [y, N] = Rf(b);
        y && N ? !h.shiftKey && w === N ? (h.preventDefault(), n && Ct(y, { select: !0 })) : h.shiftKey && w === y && (h.preventDefault(), n && Ct(N, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(Q.div, { tabIndex: -1, ...i, ref: p, onKeyDown: x });
});
Ln.displayName = Ef;
function Pf(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ct(r, { select: t }), document.activeElement !== n) return;
}
function Rf(e) {
  const t = gi(e), n = as(t, e), r = as(t.reverse(), e);
  return [n, r];
}
function gi(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function as(e, t) {
  for (const n of e)
    if (!Df(n, { upTo: t })) return n;
}
function Df(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Of(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Of(e) && t && e.select();
  }
}
var ss = Af();
function Af() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = is(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = is(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function is(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Tf(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _f = "Portal", cn = u.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Pe(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? qu.createPortal(/* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t }), i) : null;
});
cn.displayName = _f;
var vo = 0;
function Wr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? cs()), document.body.insertAdjacentElement("beforeend", e[1] ?? cs()), vo++, () => {
      vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), vo--;
    };
  }, []);
}
function cs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var rt = function() {
  return rt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, rt.apply(this, arguments);
};
function xi(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function If(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var xr = "right-scroll-bar-position", br = "width-before-scroll-bar", jf = "with-scroll-bars-hidden", Wf = "--removed-body-scroll-bar-size";
function go(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ff(e, t) {
  var n = On(function() {
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
var $f = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ls = /* @__PURE__ */ new WeakMap();
function Lf(e, t) {
  var n = Ff(null, function(r) {
    return e.forEach(function(o) {
      return go(o, r);
    });
  });
  return $f(function() {
    var r = ls.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || go(s, null);
      }), a.forEach(function(s) {
        o.has(s) || go(s, i);
      });
    }
    ls.set(n, e);
  }, [e]), n;
}
function Vf(e) {
  return e;
}
function Bf(e, t) {
  t === void 0 && (t = Vf);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          i.push(f), d();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return o;
}
function zf(e) {
  e === void 0 && (e = {});
  var t = Bf(null);
  return t.options = rt({ async: !0, ssr: !1 }, e), t;
}
var bi = function(e) {
  var t = e.sideCar, n = xi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, rt({}, n));
};
bi.isSideCarExport = !0;
function Hf(e, t) {
  return e.useMedium(t), bi;
}
var yi = zf(), xo = function() {
}, Fr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: xo,
    onWheelCapture: xo,
    onTouchMoveCapture: xo
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, N = xi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, S = Lf([n, t]), k = rt(rt({}, N), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: yi, removeScrollBar: d, shards: m, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    i ? u.cloneElement(u.Children.only(s), rt(rt({}, k), { ref: S })) : u.createElement(b, rt({}, k, { className: l, ref: S }), s)
  );
});
Fr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fr.classNames = {
  fullWidth: br,
  zeroRight: xr
};
var Yf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Gf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yf();
  return t && e.setAttribute("nonce", t), e;
}
function Uf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Kf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qf = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Gf()) && (Uf(t, n), Kf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Xf = function() {
  var e = qf();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, wi = function() {
  var e = Xf(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Zf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Qf = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bo(n), bo(r), bo(o)];
}, Jf = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zf;
  var t = Qf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, em = wi(), en = "data-scroll-locked", tm = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(jf, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(en, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xr, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(br, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(xr, " .").concat(xr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(br, " .").concat(br, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(en, `] {
    `).concat(Wf, ": ").concat(s, `px;
  }
`);
}, ds = function() {
  var e = parseInt(document.body.getAttribute(en) || "0", 10);
  return isFinite(e) ? e : 0;
}, nm = function() {
  u.useEffect(function() {
    return document.body.setAttribute(en, (ds() + 1).toString()), function() {
      var e = ds() - 1;
      e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString());
    };
  }, []);
}, rm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  nm();
  var a = u.useMemo(function() {
    return Jf(o);
  }, [o]);
  return u.createElement(em, { styles: tm(a, !t, o, n ? "" : "!important") });
}, Fo = !1;
if (typeof window < "u")
  try {
    var ar = Object.defineProperty({}, "passive", {
      get: function() {
        return Fo = !0, !0;
      }
    });
    window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    Fo = !1;
  }
var Ut = Fo ? { passive: !1 } : !1, om = function(e) {
  return e.tagName === "TEXTAREA";
}, Ci = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !om(e) && n[t] === "visible")
  );
}, am = function(e) {
  return Ci(e, "overflowY");
}, sm = function(e) {
  return Ci(e, "overflowX");
}, us = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ki(e, r);
    if (o) {
      var a = Si(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, im = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, cm = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ki = function(e, t) {
  return e === "v" ? am(t) : sm(t);
}, Si = function(e, t) {
  return e === "v" ? im(t) : cm(t);
}, lm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, dm = function(e, t, n, r, o) {
  var a = lm(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), d = !1, f = i > 0, m = 0, p = 0;
  do {
    if (!s)
      break;
    var v = Si(e, s), x = v[0], h = v[1], g = v[2], w = h - g - a * x;
    (x || w) && ki(e, s) && (m += w, p += x);
    var b = s.parentNode;
    s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, sr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fs = function(e) {
  return [e.deltaX, e.deltaY];
}, ms = function(e) {
  return e && "current" in e ? e.current : e;
}, um = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, fm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, mm = 0, Kt = [];
function pm(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(mm++)[0], a = u.useState(wi)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = If([e.lockRef.current], (e.shards || []).map(ms), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = sr(h), b = n.current, y = "deltaX" in h ? h.deltaX : b[0] - w[0], N = "deltaY" in h ? h.deltaY : b[1] - w[1], C, S = h.target, k = Math.abs(y) > Math.abs(N) ? "h" : "v";
    if ("touches" in h && k === "h" && S.type === "range")
      return !1;
    var P = us(k, S);
    if (!P)
      return !0;
    if (P ? C = k : (C = k === "v" ? "h" : "v", P = us(k, S)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (y || N) && (r.current = C), !C)
      return !0;
    var $ = r.current || C;
    return dm($, g, h, $ === "h" ? y : N);
  }, []), l = u.useCallback(function(h) {
    var g = h;
    if (!(!Kt.length || Kt[Kt.length - 1] !== a)) {
      var w = "deltaY" in g ? fs(g) : sr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && um(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (i.current.shards || []).map(ms).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), N = y.length > 0 ? s(g, y[0]) : !i.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, g, w, b) {
    var y = { name: h, delta: g, target: w, should: b, shadowParent: hm(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== y;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = sr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, fs(h), h.target, s(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, sr(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Kt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Ut), document.addEventListener("touchmove", l, Ut), document.addEventListener("touchstart", f, Ut), function() {
      Kt = Kt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Ut), document.removeEventListener("touchmove", l, Ut), document.removeEventListener("touchstart", f, Ut);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: fm(o) }) : null,
    v ? u.createElement(rm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function hm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const vm = Hf(yi, pm);
var Vn = u.forwardRef(function(e, t) {
  return u.createElement(Fr, rt({}, e, { ref: t, sideCar: vm }));
});
Vn.classNames = Fr.classNames;
var gm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qt = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), cr = {}, yo = 0, Ni = function(e) {
  return e && (e.host || Ni(e.parentNode));
}, xm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ni(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, bm = function(e, t, n, r) {
  var o = xm(t, Array.isArray(e) ? e : [e]);
  cr[n] || (cr[n] = /* @__PURE__ */ new WeakMap());
  var a = cr[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), d = function(m) {
    !m || s.has(m) || (s.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (s.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (qt.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          qt.set(p, h), a.set(p, g), i.push(p), h === 1 && x && ir.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return f(t), s.clear(), yo++, function() {
    i.forEach(function(m) {
      var p = qt.get(m) - 1, v = a.get(m) - 1;
      qt.set(m, p), a.set(m, v), p || (ir.has(m) || m.removeAttribute(r), ir.delete(m)), v || m.removeAttribute(n);
    }), yo--, yo || (qt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), cr = {});
  };
}, $r = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = gm(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), bm(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Lr = "Dialog", [Mi] = Te(Lr), [ym, Je] = Mi(Lr), Ei = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [d, f] = Xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Lr
  });
  return /* @__PURE__ */ c.jsx(
    ym,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Ee(),
      titleId: Ee(),
      descriptionId: Ee(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: n
    }
  );
};
Ei.displayName = Lr;
var Pi = "DialogTrigger", wm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Pi, n), a = de(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": da(o.open),
        ...r,
        ref: a,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wm.displayName = Pi;
var ca = "DialogPortal", [Cm, Ri] = Mi(ca, {
  forceMount: void 0
}), Di = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Je(ca, t);
  return /* @__PURE__ */ c.jsx(Cm, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ c.jsx(We, { present: n || a.open, children: /* @__PURE__ */ c.jsx(cn, { asChild: !0, container: o, children: i }) })) });
};
Di.displayName = ca;
var Nr = "DialogOverlay", Oi = u.forwardRef(
  (e, t) => {
    const n = Ri(Nr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Je(Nr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(We, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Sm, { ...o, ref: t }) }) : null;
  }
);
Oi.displayName = Nr;
var km = /* @__PURE__ */ St("DialogOverlay.RemoveScroll"), Sm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Nr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Vn, { as: km, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          "data-state": da(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), jt = "DialogContent", Ai = u.forwardRef(
  (e, t) => {
    const n = Ri(jt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Je(jt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Nm, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Mm, { ...o, ref: t }) });
  }
);
Ai.displayName = jt;
var Nm = u.forwardRef(
  (e, t) => {
    const n = Je(jt, e.__scopeDialog), r = u.useRef(null), o = de(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return $r(a);
    }, []), /* @__PURE__ */ c.jsx(
      Ti,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: B(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: B(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Mm = u.forwardRef(
  (e, t) => {
    const n = Je(jt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Ti,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Ti = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Je(jt, n), l = u.useRef(null), d = de(t, l);
    return Wr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Ln,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            sn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": da(s.open),
              ...i,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Pm, { titleId: s.titleId }),
        /* @__PURE__ */ c.jsx(Dm, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), la = "DialogTitle", _i = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(la, n);
    return /* @__PURE__ */ c.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
_i.displayName = la;
var Ii = "DialogDescription", Em = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Ii, n);
    return /* @__PURE__ */ c.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Em.displayName = Ii;
var ji = "DialogClose", Wi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(ji, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Wi.displayName = ji;
function da(e) {
  return e ? "open" : "closed";
}
var Fi = "DialogTitleWarning", [bC, $i] = sf(Fi, {
  contentName: jt,
  titleName: la,
  docsSlug: "dialog"
}), Pm = ({ titleId: e }) => {
  const t = $i(Fi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Rm = "DialogDescriptionWarning", Dm = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${$i(Rm).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Li = Ei, Om = Di, Vi = Oi, Bi = Ai, Am = _i, ps = Wi;
function Vr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Br(e) {
  const [t, n] = u.useState(void 0);
  return Pe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          i = d.inlineSize, s = d.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var zr = "Checkbox", [Tm] = Te(zr), [_m, ua] = Tm(zr);
function Im(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: l,
    required: d,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [p, v] = Xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: zr
  }), [x, h] = u.useState(null), [g, w] = u.useState(null), b = u.useRef(!1), y = x ? !!i || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: p,
    disabled: a,
    setChecked: v,
    control: x,
    setControl: h,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: kt(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    _m,
    {
      scope: t,
      ...N,
      children: jm(m) ? m(N) : r
    }
  );
}
var zi = "CheckboxTrigger", Hi = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: l,
      required: d,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: v,
      bubbleInput: x
    } = ua(zi, e), h = de(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const b = () => m(g.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": kt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Xi(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: h,
        onKeyDown: B(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: B(n, (w) => {
          m((b) => kt(b) ? !0 : !b), x && v && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
Hi.displayName = zi;
var Yi = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l,
      onCheckedChange: d,
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ c.jsx(
      Im,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: d,
        name: r,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            Hi,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            qi,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Yi.displayName = zr;
var Gi = "CheckboxIndicator", Ui = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ua(Gi, n);
    return /* @__PURE__ */ c.jsx(
      We,
      {
        present: r || kt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            "data-state": Xi(a.checked),
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
Ui.displayName = Gi;
var Ki = "CheckboxBubbleInput", qi = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: l,
      name: d,
      value: f,
      form: m,
      bubbleInput: p,
      setBubbleInput: v
    } = ua(Ki, e), x = de(n, v), h = Vr(a), g = Br(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, S = !o.current;
      if (h !== a && C) {
        const k = new Event("click", { bubbles: S });
        b.indeterminate = kt(a), C.call(b, kt(a) ? !1 : a), b.dispatchEvent(k);
      }
    }, [p, h, a, o]);
    const w = u.useRef(kt(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Q.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? w.current,
        required: s,
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
qi.displayName = Ki;
function jm(e) {
  return typeof e == "function";
}
function kt(e) {
  return e === "indeterminate";
}
function Xi(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Wm = ["top", "right", "bottom", "left"], Nt = Math.min, Ve = Math.max, Mr = Math.round, lr = Math.floor, ct = (e) => ({
  x: e,
  y: e
}), Fm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $m = {
  start: "end",
  end: "start"
};
function $o(e, t, n) {
  return Ve(e, Nt(t, n));
}
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function ln(e) {
  return e.split("-")[1];
}
function fa(e) {
  return e === "x" ? "y" : "x";
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
const Lm = /* @__PURE__ */ new Set(["top", "bottom"]);
function st(e) {
  return Lm.has(bt(e)) ? "y" : "x";
}
function pa(e) {
  return fa(st(e));
}
function Vm(e, t, n) {
  n === void 0 && (n = !1);
  const r = ln(e), o = pa(e), a = ma(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Er(i)), [i, Er(i)];
}
function Bm(e) {
  const t = Er(e);
  return [Lo(e), t, Lo(t)];
}
function Lo(e) {
  return e.replace(/start|end/g, (t) => $m[t]);
}
const hs = ["left", "right"], vs = ["right", "left"], zm = ["top", "bottom"], Hm = ["bottom", "top"];
function Ym(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? vs : hs : t ? hs : vs;
    case "left":
    case "right":
      return t ? zm : Hm;
    default:
      return [];
  }
}
function Gm(e, t, n, r) {
  const o = ln(e);
  let a = Ym(bt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Lo)))), a;
}
function Er(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fm[t]);
}
function Um(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zi(e) {
  return typeof e != "number" ? Um(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pr(e) {
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
function gs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = st(t), i = pa(t), s = ma(i), l = bt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
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
  switch (ln(t)) {
    case "start":
      v[i] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      v[i] += p * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Km = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = gs(d, r, l), p = r, v = {}, x = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: g,
      fn: w
    } = s[h], {
      x: b,
      y,
      data: N,
      reset: C
    } = await w({
      x: f,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, m = y ?? m, v = {
      ...v,
      [g]: {
        ...v[g],
        ...N
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = gs(d, p, l)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function An(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = xt(t, e), x = Zi(v), g = s[p ? m === "floating" ? "reference" : "floating" : m], w = Pr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), N = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Pr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
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
const qm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = xt(e, t) || {};
    if (d == null)
      return {};
    const m = Zi(f), p = {
      x: n,
      y: r
    }, v = pa(o), x = ma(v), h = await i.getDimensions(d), g = v === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", N = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let k = S ? S[y] : 0;
    (!k || !await (i.isElement == null ? void 0 : i.isElement(S))) && (k = s.floating[y] || a.floating[x]);
    const P = N / 2 - C / 2, $ = k / 2 - h[x] / 2 - 1, z = Nt(m[w], $), U = Nt(m[b], $), V = z, X = k - h[x] - U, I = k / 2 - h[x] / 2 + P, Y = $o(V, I, X), L = !l.arrow && ln(o) != null && I !== Y && a.reference[x] / 2 - (I < V ? z : U) - h[x] / 2 < 0, K = L ? I < V ? I - V : I - X : 0;
    return {
      [v]: p[v] + K,
      data: {
        [v]: Y,
        centerOffset: I - Y - K,
        ...L && {
          alignmentOffset: K
        }
      },
      reset: L
    };
  }
}), Xm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
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
      } = xt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = bt(o), b = st(s), y = bt(s) === s, N = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !h ? [Er(s)] : Bm(s)), S = x !== "none";
      !p && S && C.push(...Gm(s, h, x, N));
      const k = [s, ...C], P = await An(t, g), $ = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && $.push(P[w]), m) {
        const I = Vm(o, i, N);
        $.push(P[I[0]], P[I[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: $
      }], !$.every((I) => I <= 0)) {
        var U, V;
        const I = (((U = a.flip) == null ? void 0 : U.index) || 0) + 1, Y = k[I];
        if (Y && (!(m === "alignment" ? b !== st(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((D) => st(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: z
            },
            reset: {
              placement: Y
            }
          };
        let L = (V = z.filter((K) => K.overflows[0] <= 0).sort((K, D) => K.overflows[1] - D.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!L)
          switch (v) {
            case "bestFit": {
              var X;
              const K = (X = z.filter((D) => {
                if (S) {
                  const W = st(D.placement);
                  return W === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((W) => W > 0).reduce((W, R) => W + R, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : X[0];
              K && (L = K);
              break;
            }
            case "initialPlacement":
              L = s;
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
function xs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function bs(e) {
  return Wm.some((t) => e[t] >= 0);
}
const Zm = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = xt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await An(t, {
            ...o,
            elementContext: "reference"
          }), i = xs(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: bs(i)
            }
          };
        }
        case "escaped": {
          const a = await An(t, {
            ...o,
            altBoundary: !0
          }), i = xs(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: bs(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Qi = /* @__PURE__ */ new Set(["left", "top"]);
async function Qm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = bt(n), s = ln(n), l = st(n) === "y", d = Qi.has(i) ? -1 : 1, f = a && l ? -1 : 1, m = xt(t, e);
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
  return s && typeof x == "number" && (v = s === "end" ? x * -1 : x), l ? {
    x: v * f,
    y: p * d
  } : {
    x: p * d,
    y: v * f
  };
}
const Jm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await Qm(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, ep = function(e) {
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
        crossAxis: i = !1,
        limiter: s = {
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
      } = xt(e, t), d = {
        x: n,
        y: r
      }, f = await An(t, l), m = st(bt(o)), p = fa(m);
      let v = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = v + f[g], y = v - f[w];
        v = $o(b, v, y);
      }
      if (i) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = x + f[g], y = x - f[w];
        x = $o(b, x, y);
      }
      const h = s.fn({
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
            [m]: i
          }
        }
      };
    }
  };
}, tp = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = xt(e, t), f = {
        x: n,
        y: r
      }, m = st(o), p = fa(m);
      let v = f[p], x = f[m];
      const h = xt(s, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const y = p === "y" ? "height" : "width", N = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        v < N ? v = N : v > C && (v = C);
      }
      if (d) {
        var w, b;
        const y = p === "y" ? "width" : "height", N = Qi.has(bt(o)), C = a.reference[m] - a.floating[y] + (N && ((w = i.offset) == null ? void 0 : w[m]) || 0) + (N ? 0 : g.crossAxis), S = a.reference[m] + a.reference[y] + (N ? 0 : ((b = i.offset) == null ? void 0 : b[m]) || 0) - (N ? g.crossAxis : 0);
        x < C ? x = C : x > S && (x = S);
      }
      return {
        [p]: v,
        [m]: x
      };
    }
  };
}, np = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...d
      } = xt(e, t), f = await An(t, d), m = bt(o), p = ln(o), v = st(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, w;
      m === "top" || m === "bottom" ? (g = m, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = m, g = p === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, y = x - f.left - f.right, N = Nt(h - f[g], b), C = Nt(x - f[w], y), S = !t.middlewareData.shift;
      let k = N, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y), (r = t.middlewareData.shift) != null && r.enabled.y && (k = b), S && !p) {
        const z = Ve(f.left, 0), U = Ve(f.right, 0), V = Ve(f.top, 0), X = Ve(f.bottom, 0);
        v ? P = x - 2 * (z !== 0 || U !== 0 ? z + U : Ve(f.left, f.right)) : k = h - 2 * (V !== 0 || X !== 0 ? V + X : Ve(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: k
      });
      const $ = await i.getDimensions(s.floating);
      return x !== $.width || h !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Hr() {
  return typeof window < "u";
}
function dn(e) {
  return Ji(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  var t;
  return (t = (Ji(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ji(e) {
  return Hr() ? e instanceof Node || e instanceof Be(e).Node : !1;
}
function Ze(e) {
  return Hr() ? e instanceof Element || e instanceof Be(e).Element : !1;
}
function lt(e) {
  return Hr() ? e instanceof HTMLElement || e instanceof Be(e).HTMLElement : !1;
}
function ys(e) {
  return !Hr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Be(e).ShadowRoot;
}
const rp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Qe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !rp.has(o);
}
const op = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ap(e) {
  return op.has(dn(e));
}
const sp = [":popover-open", ":modal"];
function Yr(e) {
  return sp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const ip = ["transform", "translate", "scale", "rotate", "perspective"], cp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], lp = ["paint", "layout", "strict", "content"];
function ha(e) {
  const t = va(), n = Ze(e) ? Qe(e) : e;
  return ip.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || cp.some((r) => (n.willChange || "").includes(r)) || lp.some((r) => (n.contain || "").includes(r));
}
function dp(e) {
  let t = Mt(e);
  for (; lt(t) && !rn(t); ) {
    if (ha(t))
      return t;
    if (Yr(t))
      return null;
    t = Mt(t);
  }
  return null;
}
function va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const up = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function rn(e) {
  return up.has(dn(e));
}
function Qe(e) {
  return Be(e).getComputedStyle(e);
}
function Gr(e) {
  return Ze(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mt(e) {
  if (dn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ys(e) && e.host || // Fallback.
    ut(e)
  );
  return ys(t) ? t.host : t;
}
function ec(e) {
  const t = Mt(e);
  return rn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : lt(t) && Bn(t) ? t : ec(t);
}
function Tn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ec(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Be(o);
  if (a) {
    const s = Vo(i);
    return t.concat(i, i.visualViewport || [], Bn(o) ? o : [], s && n ? Tn(s) : []);
  }
  return t.concat(o, Tn(o, [], n));
}
function Vo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tc(e) {
  const t = Qe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = lt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Mr(n) !== a || Mr(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function ga(e) {
  return Ze(e) ? e : e.contextElement;
}
function tn(e) {
  const t = ga(e);
  if (!lt(t))
    return ct(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = tc(t);
  let i = (a ? Mr(n.width) : n.width) / r, s = (a ? Mr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const fp = /* @__PURE__ */ ct(0);
function nc(e) {
  const t = Be(e);
  return !va() || !t.visualViewport ? fp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Be(e) ? !1 : t;
}
function Wt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ga(e);
  let i = ct(1);
  t && (r ? Ze(r) && (i = tn(r)) : i = tn(e));
  const s = mp(a, n, r) ? nc(a) : ct(0);
  let l = (o.left + s.x) / i.x, d = (o.top + s.y) / i.y, f = o.width / i.x, m = o.height / i.y;
  if (a) {
    const p = Be(a), v = r && Ze(r) ? Be(r) : r;
    let x = p, h = Vo(x);
    for (; h && r && v !== x; ) {
      const g = tn(h), w = h.getBoundingClientRect(), b = Qe(h), y = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, N = w.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += y, d += N, x = Be(h), h = Vo(x);
    }
  }
  return Pr({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function Ur(e, t) {
  const n = Gr(e).scrollLeft;
  return t ? t.left + n : Wt(ut(e)).left + n;
}
function rc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Ur(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function pp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = ut(r), s = t ? Yr(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ct(1);
  const f = ct(0), m = lt(r);
  if ((m || !m && !a) && ((dn(r) !== "body" || Bn(i)) && (l = Gr(r)), lt(r))) {
    const v = Wt(r);
    d = tn(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = i && !m && !a ? rc(i, l) : ct(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function hp(e) {
  return Array.from(e.getClientRects());
}
function vp(e) {
  const t = ut(e), n = Gr(e), r = e.ownerDocument.body, o = Ve(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ve(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ur(e);
  const s = -n.scrollTop;
  return Qe(r).direction === "rtl" && (i += Ve(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const ws = 25;
function gp(e, t) {
  const n = Be(e), r = ut(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const f = va();
    (!f || f && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const d = Ur(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - v);
    x <= ws && (a -= x);
  } else d <= ws && (a += d);
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const xp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function bp(e, t) {
  const n = Wt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = lt(e) ? tn(e) : ct(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: d
  };
}
function Cs(e, t, n) {
  let r;
  if (t === "viewport")
    r = gp(e, n);
  else if (t === "document")
    r = vp(ut(e));
  else if (Ze(t))
    r = bp(t, n);
  else {
    const o = nc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pr(r);
}
function oc(e, t) {
  const n = Mt(e);
  return n === t || !Ze(n) || rn(n) ? !1 : Qe(n).position === "fixed" || oc(n, t);
}
function yp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Tn(e, [], !1).filter((s) => Ze(s) && dn(s) !== "body"), o = null;
  const a = Qe(e).position === "fixed";
  let i = a ? Mt(e) : e;
  for (; Ze(i) && !rn(i); ) {
    const s = Qe(i), l = ha(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && xp.has(o.position) || Bn(i) && !l && oc(e, i)) ? r = r.filter((f) => f !== i) : o = s, i = Mt(i);
  }
  return t.set(e, r), r;
}
function wp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Yr(t) ? [] : yp(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((d, f) => {
    const m = Cs(t, f, o);
    return d.top = Ve(m.top, d.top), d.right = Nt(m.right, d.right), d.bottom = Nt(m.bottom, d.bottom), d.left = Ve(m.left, d.left), d;
  }, Cs(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Cp(e) {
  const {
    width: t,
    height: n
  } = tc(e);
  return {
    width: t,
    height: n
  };
}
function kp(e, t, n) {
  const r = lt(t), o = ut(t), a = n === "fixed", i = Wt(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ct(0);
  function d() {
    l.x = Ur(o);
  }
  if (r || !r && !a)
    if ((dn(t) !== "body" || Bn(o)) && (s = Gr(t)), r) {
      const v = Wt(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? rc(o, s) : ct(0), m = i.left + s.scrollLeft - l.x - f.x, p = i.top + s.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: i.width,
    height: i.height
  };
}
function wo(e) {
  return Qe(e).position === "static";
}
function ks(e, t) {
  if (!lt(e) || Qe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ut(e) === n && (n = n.ownerDocument.body), n;
}
function ac(e, t) {
  const n = Be(e);
  if (Yr(e))
    return n;
  if (!lt(e)) {
    let o = Mt(e);
    for (; o && !rn(o); ) {
      if (Ze(o) && !wo(o))
        return o;
      o = Mt(o);
    }
    return n;
  }
  let r = ks(e, t);
  for (; r && ap(r) && wo(r); )
    r = ks(r, t);
  return r && rn(r) && wo(r) && !ha(r) ? n : r || dp(e) || n;
}
const Sp = async function(e) {
  const t = this.getOffsetParent || ac, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: kp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Np(e) {
  return Qe(e).direction === "rtl";
}
const Mp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pp,
  getDocumentElement: ut,
  getClippingRect: wp,
  getOffsetParent: ac,
  getElementRects: Sp,
  getClientRects: hp,
  getDimensions: Cp,
  getScale: tn,
  isElement: Ze,
  isRTL: Np
};
function sc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ep(e, t) {
  let n = null, r;
  const o = ut(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: p,
      height: v
    } = d;
    if (s || t(), !p || !v)
      return;
    const x = lr(m), h = lr(o.clientWidth - (f + p)), g = lr(o.clientHeight - (m + v)), w = lr(f), y = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: Ve(0, Nt(1, l)) || 1
    };
    let N = !0;
    function C(S) {
      const k = S[0].intersectionRatio;
      if (k !== l) {
        if (!N)
          return i();
        k ? i(!1, k) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !sc(d, e.getBoundingClientRect()) && i(), N = !1;
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
  return i(!0), a;
}
function Pp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = ga(e), f = o || a ? [...d ? Tn(d) : [], ...Tn(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const m = d && s ? Ep(d, n) : null;
  let p = -1, v = null;
  i && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = v) == null || y.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? Wt(e) : null;
  l && g();
  function g() {
    const w = Wt(e);
    h && !sc(h, w) && n(), h = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (w = v) == null || w.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const Rp = Jm, Dp = ep, Op = Xm, Ap = np, Tp = Zm, Ss = qm, _p = tp, Ip = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Mp,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Km(e, t, {
    ...o,
    platform: a
  });
};
var jp = typeof document < "u", Wp = function() {
}, yr = jp ? ii : Wp;
function Rr(e, t) {
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
        if (!Rr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Rr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ic(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ns(e, t) {
  const n = ic(e);
  return Math.round(t * n) / n;
}
function Co(e) {
  const t = u.useRef(e);
  return yr(() => {
    t.current = e;
  }), t;
}
function Fp(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
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
  Rr(p, r) || v(r);
  const [x, h] = u.useState(null), [g, w] = u.useState(null), b = u.useCallback((D) => {
    D !== S.current && (S.current = D, h(D));
  }, []), y = u.useCallback((D) => {
    D !== k.current && (k.current = D, w(D));
  }, []), N = a || x, C = i || g, S = u.useRef(null), k = u.useRef(null), P = u.useRef(f), $ = l != null, z = Co(l), U = Co(o), V = Co(d), X = u.useCallback(() => {
    if (!S.current || !k.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    U.current && (D.platform = U.current), Ip(S.current, k.current, D).then((W) => {
      const R = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      I.current && !Rr(P.current, R) && (P.current = R, Fn.flushSync(() => {
        m(R);
      }));
    });
  }, [p, t, n, U, V]);
  yr(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const I = u.useRef(!1);
  yr(() => (I.current = !0, () => {
    I.current = !1;
  }), []), yr(() => {
    if (N && (S.current = N), C && (k.current = C), N && C) {
      if (z.current)
        return z.current(N, C, X);
      X();
    }
  }, [N, C, X, z, $]);
  const Y = u.useMemo(() => ({
    reference: S,
    floating: k,
    setReference: b,
    setFloating: y
  }), [b, y]), L = u.useMemo(() => ({
    reference: N,
    floating: C
  }), [N, C]), K = u.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return D;
    const W = Ns(L.floating, f.x), R = Ns(L.floating, f.y);
    return s ? {
      ...D,
      transform: "translate(" + W + "px, " + R + "px)",
      ...ic(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: R
    };
  }, [n, s, L.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: X,
    refs: Y,
    elements: L,
    floatingStyles: K
  }), [f, X, Y, L, K]);
}
const $p = (e) => {
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
      return r && t(r) ? r.current != null ? Ss({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ss({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Lp = (e, t) => ({
  ...Rp(e),
  options: [e, t]
}), Vp = (e, t) => ({
  ...Dp(e),
  options: [e, t]
}), Bp = (e, t) => ({
  ..._p(e),
  options: [e, t]
}), zp = (e, t) => ({
  ...Op(e),
  options: [e, t]
}), Hp = (e, t) => ({
  ...Ap(e),
  options: [e, t]
}), Yp = (e, t) => ({
  ...Tp(e),
  options: [e, t]
}), Gp = (e, t) => ({
  ...$p(e),
  options: [e, t]
});
var Up = "Arrow", cc = u.forwardRef((e, t) => {
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
cc.displayName = Up;
var Kp = cc, xa = "Popper", [lc, un] = Te(xa), [qp, dc] = lc(xa), uc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(qp, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
uc.displayName = xa;
var fc = "PopperAnchor", mc = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = dc(fc, n), i = u.useRef(null), s = de(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Q.div, { ...o, ref: s });
  }
);
mc.displayName = fc;
var ba = "PopperContent", [Xp, Zp] = lc(ba), pc = u.forwardRef(
  (e, t) => {
    var O, q, te, re, ie, ue;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...h
    } = e, g = dc(ba, n), [w, b] = u.useState(null), y = de(t, (ke) => b(ke)), [N, C] = u.useState(null), S = Br(N), k = (S == null ? void 0 : S.width) ?? 0, P = (S == null ? void 0 : S.height) ?? 0, $ = r + (a !== "center" ? "-" + a : ""), z = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, U = Array.isArray(d) ? d : [d], V = U.length > 0, X = {
      padding: z,
      boundary: U.filter(Jp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: I, floatingStyles: Y, placement: L, isPositioned: K, middlewareData: D } = Fp({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: (...ke) => Pp(...ke, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Lp({ mainAxis: o + P, alignmentAxis: i }),
        l && Vp({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Bp() : void 0,
          ...X
        }),
        l && zp({ ...X }),
        Hp({
          ...X,
          apply: ({ elements: ke, rects: De, availableWidth: et, availableHeight: Ue }) => {
            const { width: tt, height: zt } = De.reference, Ie = ke.floating.style;
            Ie.setProperty("--radix-popper-available-width", `${et}px`), Ie.setProperty("--radix-popper-available-height", `${Ue}px`), Ie.setProperty("--radix-popper-anchor-width", `${tt}px`), Ie.setProperty("--radix-popper-anchor-height", `${zt}px`);
          }
        }),
        N && Gp({ element: N, padding: s }),
        eh({ arrowWidth: k, arrowHeight: P }),
        p && Yp({ strategy: "referenceHidden", ...X })
      ]
    }), [W, R] = gc(L), H = je(x);
    Pe(() => {
      K && (H == null || H());
    }, [K, H]);
    const E = (O = D.arrow) == null ? void 0 : O.x, A = (q = D.arrow) == null ? void 0 : q.y, _ = ((te = D.arrow) == null ? void 0 : te.centerOffset) !== 0, [F, Z] = u.useState();
    return Pe(() => {
      w && Z(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: K ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: F,
          "--radix-popper-transform-origin": [
            (re = D.transformOrigin) == null ? void 0 : re.x,
            (ie = D.transformOrigin) == null ? void 0 : ie.y
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
          Xp,
          {
            scope: n,
            placedSide: W,
            onArrowChange: C,
            arrowX: E,
            arrowY: A,
            shouldHideArrow: _,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
              {
                "data-side": W,
                "data-align": R,
                ...h,
                ref: y,
                style: {
                  ...h.style,
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
pc.displayName = ba;
var hc = "PopperArrow", Qp = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vc = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Zp(hc, r), i = Qp[a.placedSide];
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
          [i]: 0,
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
          Kp,
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
vc.displayName = hc;
function Jp(e) {
  return e !== null;
}
var eh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [d, f] = gc(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = i ? m : `${p}px`, h = `${-l}px`) : d === "top" ? (x = i ? m : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = i ? m : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = i ? m : `${v}px`), { data: { x, y: h } };
  }
});
function gc(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ya = uc, Kr = mc, wa = pc, Ca = vc, ko = "rovingFocusGroup.onEntryFocus", th = { bubbles: !1, cancelable: !0 }, zn = "RovingFocusGroup", [Bo, xc, nh] = jr(zn), [rh, fn] = Te(
  zn,
  [nh]
), [oh, ah] = rh(zn), bc = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Bo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Bo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(sh, { ...e, ref: t }) }) })
);
bc.displayName = zn;
var sh = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, p = u.useRef(null), v = de(t, p), x = $n(a), [h, g] = Xe({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: zn
  }), [w, b] = u.useState(!1), y = je(d), N = xc(n), C = u.useRef(!1), [S, k] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(ko, y), () => P.removeEventListener(ko, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    oh,
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
        () => k((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => k((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: B(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: B(e.onFocus, (P) => {
            const $ = !C.current;
            if (P.target === P.currentTarget && $ && !w) {
              const z = new CustomEvent(ko, th);
              if (P.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const U = N().filter((L) => L.focusable), V = U.find((L) => L.active), X = U.find((L) => L.id === h), Y = [V, X, ...U].filter(
                  Boolean
                ).map((L) => L.ref.current);
                Cc(Y, f);
              }
            }
            C.current = !1;
          }),
          onBlur: B(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), yc = "RovingFocusGroupItem", wc = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = Ee(), d = a || l, f = ah(yc, n), m = f.currentTabStopId === d, p = xc(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
      Bo.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: B(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: B(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: B(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = lh(g, f.orientation, f.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((N) => N.focusable).map((N) => N.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const N = y.indexOf(g.currentTarget);
                  y = f.loop ? dh(y, N + 1) : y.slice(N + 1);
                }
                setTimeout(() => Cc(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: m, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
wc.displayName = yc;
var ih = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ch(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lh(e, t, n) {
  const r = ch(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ih[r];
}
function Cc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function dh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ka = bc, Sa = wc, zo = ["Enter", " "], uh = ["ArrowDown", "PageUp", "Home"], kc = ["ArrowUp", "PageDown", "End"], fh = [...uh, ...kc], mh = {
  ltr: [...zo, "ArrowRight"],
  rtl: [...zo, "ArrowLeft"]
}, ph = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Hn = "Menu", [_n, hh, vh] = jr(Hn), [Vt, Sc] = Te(Hn, [
  vh,
  un,
  fn
]), qr = un(), Nc = fn(), [gh, Bt] = Vt(Hn), [xh, Yn] = Vt(Hn), Mc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = qr(t), [l, d] = u.useState(null), f = u.useRef(!1), m = je(a), p = $n(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(ya, { ...s, children: /* @__PURE__ */ c.jsx(
    gh,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        xh,
        {
          scope: t,
          onClose: u.useCallback(() => m(!1), [m]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Mc.displayName = Hn;
var bh = "MenuAnchor", Na = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = qr(n);
    return /* @__PURE__ */ c.jsx(Kr, { ...o, ...r, ref: t });
  }
);
Na.displayName = bh;
var Ma = "MenuPortal", [yh, Ec] = Vt(Ma, {
  forceMount: void 0
}), Pc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Bt(Ma, t);
  return /* @__PURE__ */ c.jsx(yh, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(We, { present: n || a.open, children: /* @__PURE__ */ c.jsx(cn, { asChild: !0, container: o, children: r }) }) });
};
Pc.displayName = Ma;
var Ge = "MenuContent", [wh, Ea] = Vt(Ge), Rc = u.forwardRef(
  (e, t) => {
    const n = Ec(Ge, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Bt(Ge, e.__scopeMenu), i = Yn(Ge, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(_n.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(We, { present: r || a.open, children: /* @__PURE__ */ c.jsx(_n.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c.jsx(Ch, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(kh, { ...o, ref: t }) }) }) });
  }
), Ch = u.forwardRef(
  (e, t) => {
    const n = Bt(Ge, e.__scopeMenu), r = u.useRef(null), o = de(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return $r(a);
    }, []), /* @__PURE__ */ c.jsx(
      Pa,
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
), kh = u.forwardRef((e, t) => {
  const n = Bt(Ge, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    Pa,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Sh = /* @__PURE__ */ St("MenuContent.ScrollLock"), Pa = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: m,
      onInteractOutside: p,
      onDismiss: v,
      disableOutsideScroll: x,
      ...h
    } = e, g = Bt(Ge, n), w = Yn(Ge, n), b = qr(n), y = Nc(n), N = hh(n), [C, S] = u.useState(null), k = u.useRef(null), P = de(t, k, g.onContentChange), $ = u.useRef(0), z = u.useRef(""), U = u.useRef(0), V = u.useRef(null), X = u.useRef("right"), I = u.useRef(0), Y = x ? Vn : u.Fragment, L = x ? { as: Sh, allowPinchZoom: !0 } : void 0, K = (W) => {
      var O, q;
      const R = z.current + W, H = N().filter((te) => !te.disabled), E = document.activeElement, A = (O = H.find((te) => te.ref.current === E)) == null ? void 0 : O.textValue, _ = H.map((te) => te.textValue), F = jh(_, R, A), Z = (q = H.find((te) => te.textValue === F)) == null ? void 0 : q.ref.current;
      (function te(re) {
        z.current = re, window.clearTimeout($.current), re !== "" && ($.current = window.setTimeout(() => te(""), 1e3));
      })(R), Z && setTimeout(() => Z.focus());
    };
    u.useEffect(() => () => window.clearTimeout($.current), []), Wr();
    const D = u.useCallback((W) => {
      var H, E;
      return X.current === ((H = V.current) == null ? void 0 : H.side) && Fh(W, (E = V.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      wh,
      {
        scope: n,
        searchRef: z,
        onItemEnter: u.useCallback(
          (W) => {
            D(W) && W.preventDefault();
          },
          [D]
        ),
        onItemLeave: u.useCallback(
          (W) => {
            var R;
            D(W) || ((R = k.current) == null || R.focus(), S(null));
          },
          [D]
        ),
        onTriggerLeave: u.useCallback(
          (W) => {
            D(W) && W.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: U,
        onPointerGraceIntentChange: u.useCallback((W) => {
          V.current = W;
        }, []),
        children: /* @__PURE__ */ c.jsx(Y, { ...L, children: /* @__PURE__ */ c.jsx(
          Ln,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: B(a, (W) => {
              var R;
              W.preventDefault(), (R = k.current) == null || R.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c.jsx(
              sn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ c.jsx(
                  ka,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: B(l, (W) => {
                      w.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      wa,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Yc(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: B(h.onKeyDown, (W) => {
                          const H = W.target.closest("[data-radix-menu-content]") === W.currentTarget, E = W.ctrlKey || W.altKey || W.metaKey, A = W.key.length === 1;
                          H && (W.key === "Tab" && W.preventDefault(), !E && A && K(W.key));
                          const _ = k.current;
                          if (W.target !== _ || !fh.includes(W.key)) return;
                          W.preventDefault();
                          const Z = N().filter((O) => !O.disabled).map((O) => O.ref.current);
                          kc.includes(W.key) && Z.reverse(), _h(Z);
                        }),
                        onBlur: B(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout($.current), z.current = "");
                        }),
                        onPointerMove: B(
                          e.onPointerMove,
                          In((W) => {
                            const R = W.target, H = I.current !== W.clientX;
                            if (W.currentTarget.contains(R) && H) {
                              const E = W.clientX > I.current ? "right" : "left";
                              X.current = E, I.current = W.clientX;
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
Rc.displayName = Ge;
var Nh = "MenuGroup", Ra = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { role: "group", ...r, ref: t });
  }
);
Ra.displayName = Nh;
var Mh = "MenuLabel", Dc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Dc.displayName = Mh;
var Dr = "MenuItem", Ms = "menu.itemSelect", Xr = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = Yn(Dr, e.__scopeMenu), s = Ea(Dr, e.__scopeMenu), l = de(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(Ms, { bubbles: !0, cancelable: !0 });
        m.addEventListener(Ms, (v) => r == null ? void 0 : r(v), { once: !0 }), sa(m, p), p.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Oc,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: B(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: B(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: B(e.onKeyDown, (m) => {
          const p = s.searchRef.current !== "";
          n || p && m.key === " " || zo.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
Xr.displayName = Dr;
var Oc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Ea(Dr, n), s = Nc(n), l = u.useRef(null), d = de(t, l), [f, m] = u.useState(!1), [p, v] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      _n.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(Sa, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: B(
              e.onPointerMove,
              In((x) => {
                r ? i.onItemLeave(x) : (i.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: B(
              e.onPointerLeave,
              In((x) => i.onItemLeave(x))
            ),
            onFocus: B(e.onFocus, () => m(!0)),
            onBlur: B(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), Eh = "MenuCheckboxItem", Ac = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Wc, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      Xr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Or(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Oa(n),
        onSelect: B(
          o.onSelect,
          () => r == null ? void 0 : r(Or(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ac.displayName = Eh;
var Tc = "MenuRadioGroup", [Ph, Rh] = Vt(
  Tc,
  { value: void 0, onValueChange: () => {
  } }
), _c = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = je(r);
    return /* @__PURE__ */ c.jsx(Ph, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(Ra, { ...o, ref: t }) });
  }
);
_c.displayName = Tc;
var Ic = "MenuRadioItem", jc = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Rh(Ic, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Wc, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      Xr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Oa(a),
        onSelect: B(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jc.displayName = Ic;
var Da = "MenuItemIndicator", [Wc, Dh] = Vt(
  Da,
  { checked: !1 }
), Fc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Dh(Da, n);
    return /* @__PURE__ */ c.jsx(
      We,
      {
        present: r || Or(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": Oa(a.checked)
          }
        )
      }
    );
  }
);
Fc.displayName = Da;
var Oh = "MenuSeparator", $c = u.forwardRef(
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
$c.displayName = Oh;
var Ah = "MenuArrow", Lc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = qr(n);
    return /* @__PURE__ */ c.jsx(Ca, { ...o, ...r, ref: t });
  }
);
Lc.displayName = Ah;
var Th = "MenuSub", [yC, Vc] = Vt(Th), Mn = "MenuSubTrigger", Bc = u.forwardRef(
  (e, t) => {
    const n = Bt(Mn, e.__scopeMenu), r = Yn(Mn, e.__scopeMenu), o = Vc(Mn, e.__scopeMenu), a = Ea(Mn, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = s.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [s, l]), /* @__PURE__ */ c.jsx(Na, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Oc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Yc(n.open),
        ...e,
        ref: gt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: B(
          e.onPointerMove,
          In((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: B(
          e.onPointerLeave,
          In((m) => {
            var v, x;
            f();
            const p = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const h = (x = n.content) == null ? void 0 : x.dataset.side, g = h === "right", w = g ? -5 : 5, b = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
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
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(m), m.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: B(e.onKeyDown, (m) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || mh[r.dir].includes(m.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Bc.displayName = Mn;
var zc = "MenuSubContent", Hc = u.forwardRef(
  (e, t) => {
    const n = Ec(Ge, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Bt(Ge, e.__scopeMenu), i = Yn(Ge, e.__scopeMenu), s = Vc(zc, e.__scopeMenu), l = u.useRef(null), d = de(t, l);
    return /* @__PURE__ */ c.jsx(_n.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(We, { present: r || a.open, children: /* @__PURE__ */ c.jsx(_n.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      Pa,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var m;
          i.isUsingKeyboardRef.current && ((m = l.current) == null || m.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: B(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: B(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: B(e.onKeyDown, (f) => {
          var v;
          const m = f.currentTarget.contains(f.target), p = ph[i.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Hc.displayName = zc;
function Yc(e) {
  return e ? "open" : "closed";
}
function Or(e) {
  return e === "indeterminate";
}
function Oa(e) {
  return Or(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function _h(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ih(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function jh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = Ih(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== n));
  const l = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Wh(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], d = s.x, f = s.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function Fh(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Wh(n, t);
}
function In(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $h = Mc, Lh = Na, Vh = Pc, Bh = Rc, zh = Ra, Hh = Dc, Yh = Xr, Gh = Ac, Uh = _c, Kh = jc, qh = Fc, Xh = $c, Zh = Lc, Qh = Bc, Jh = Hc, Zr = "DropdownMenu", [ev] = Te(
  Zr,
  [Sc]
), _e = Sc(), [tv, Gc] = ev(Zr), Uc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = _e(t), d = u.useRef(null), [f, m] = Xe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Zr
  });
  return /* @__PURE__ */ c.jsx(
    tv,
    {
      scope: t,
      triggerId: Ee(),
      triggerRef: d,
      contentId: Ee(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: s,
      children: /* @__PURE__ */ c.jsx($h, { ...l, open: f, onOpenChange: m, dir: r, modal: s, children: n })
    }
  );
};
Uc.displayName = Zr;
var Kc = "DropdownMenuTrigger", qc = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Gc(Kc, n), i = _e(n);
    return /* @__PURE__ */ c.jsx(Lh, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
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
        ref: gt(t, a.triggerRef),
        onPointerDown: B(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: B(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
qc.displayName = Kc;
var nv = "DropdownMenuPortal", Xc = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _e(t);
  return /* @__PURE__ */ c.jsx(Vh, { ...r, ...n });
};
Xc.displayName = nv;
var Zc = "DropdownMenuContent", Qc = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Gc(Zc, n), a = _e(n), i = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Bh,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: B(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
          (!o.modal || f) && (i.current = !0);
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
Qc.displayName = Zc;
var rv = "DropdownMenuGroup", ov = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
    return /* @__PURE__ */ c.jsx(zh, { ...o, ...r, ref: t });
  }
);
ov.displayName = rv;
var av = "DropdownMenuLabel", Jc = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
    return /* @__PURE__ */ c.jsx(Hh, { ...o, ...r, ref: t });
  }
);
Jc.displayName = av;
var sv = "DropdownMenuItem", el = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
    return /* @__PURE__ */ c.jsx(Yh, { ...o, ...r, ref: t });
  }
);
el.displayName = sv;
var iv = "DropdownMenuCheckboxItem", cv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(Gh, { ...o, ...r, ref: t });
});
cv.displayName = iv;
var lv = "DropdownMenuRadioGroup", dv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(Uh, { ...o, ...r, ref: t });
});
dv.displayName = lv;
var uv = "DropdownMenuRadioItem", fv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(Kh, { ...o, ...r, ref: t });
});
fv.displayName = uv;
var mv = "DropdownMenuItemIndicator", pv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(qh, { ...o, ...r, ref: t });
});
pv.displayName = mv;
var hv = "DropdownMenuSeparator", tl = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(Xh, { ...o, ...r, ref: t });
});
tl.displayName = hv;
var vv = "DropdownMenuArrow", gv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
    return /* @__PURE__ */ c.jsx(Zh, { ...o, ...r, ref: t });
  }
);
gv.displayName = vv;
var xv = "DropdownMenuSubTrigger", bv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(Qh, { ...o, ...r, ref: t });
});
bv.displayName = xv;
var yv = "DropdownMenuSubContent", wv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _e(n);
  return /* @__PURE__ */ c.jsx(
    Jh,
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
wv.displayName = yv;
var Cv = Uc, kv = qc, Sv = Xc, Nv = Qc, Mv = Jc, Ev = el, Pv = tl;
function Es(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Qr = "Popover", [nl] = Te(Qr, [
  un
]), Gn = un(), [Rv, Pt] = nl(Qr), rl = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Gn(t), l = u.useRef(null), [d, f] = u.useState(!1), [m, p] = Xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Qr
  });
  return /* @__PURE__ */ c.jsx(ya, { ...s, children: /* @__PURE__ */ c.jsx(
    Rv,
    {
      scope: t,
      contentId: Ee(),
      triggerRef: l,
      open: m,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: i,
      children: n
    }
  ) });
};
rl.displayName = Qr;
var ol = "PopoverAnchor", Dv = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Pt(ol, n), a = Gn(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ c.jsx(Kr, { ...a, ...r, ref: t });
  }
);
Dv.displayName = ol;
var al = "PopoverTrigger", sl = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Pt(al, n), a = Gn(n), i = de(t, o.triggerRef), s = /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ul(o.open),
        ...r,
        ref: i,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ c.jsx(Kr, { asChild: !0, ...a, children: s });
  }
);
sl.displayName = al;
var Aa = "PopoverPortal", [Ov, Av] = nl(Aa, {
  forceMount: void 0
}), il = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Pt(Aa, t);
  return /* @__PURE__ */ c.jsx(Ov, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(We, { present: n || a.open, children: /* @__PURE__ */ c.jsx(cn, { asChild: !0, container: o, children: r }) }) });
};
il.displayName = Aa;
var on = "PopoverContent", cl = u.forwardRef(
  (e, t) => {
    const n = Av(on, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Pt(on, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(_v, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Iv, { ...o, ref: t }) });
  }
);
cl.displayName = on;
var Tv = /* @__PURE__ */ St("PopoverContent.RemoveScroll"), _v = u.forwardRef(
  (e, t) => {
    const n = Pt(on, e.__scopePopover), r = u.useRef(null), o = de(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return $r(i);
    }, []), /* @__PURE__ */ c.jsx(Vn, { as: Tv, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      ll,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: B(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, d = s.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: B(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Iv = u.forwardRef(
  (e, t) => {
    const n = Pt(on, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ll,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), ll = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: f,
      ...m
    } = e, p = Pt(on, n), v = Gn(n);
    return Wr(), /* @__PURE__ */ c.jsx(
      Ln,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          sn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              wa,
              {
                "data-state": ul(p.open),
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
), dl = "PopoverClose", jv = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Pt(dl, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
jv.displayName = dl;
var Wv = "PopoverArrow", Fv = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Gn(n);
    return /* @__PURE__ */ c.jsx(Ca, { ...o, ...r, ref: t });
  }
);
Fv.displayName = Wv;
function ul(e) {
  return e ? "open" : "closed";
}
var fl = rl, ml = sl, pl = il, Ta = cl, _a = "Progress", Ia = 100, [$v] = Te(_a), [Lv, Vv] = $v(_a), hl = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = Bv,
      ...i
    } = e;
    (o || o === 0) && !Ps(o) && console.error(zv(`${o}`, "Progress"));
    const s = Ps(o) ? o : Ia;
    r !== null && !Rs(r, s) && console.error(Hv(`${r}`, "Progress"));
    const l = Rs(r, s) ? r : null, d = Ar(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ c.jsx(Lv, { scope: n, value: l, max: s, children: /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Ar(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": xl(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
hl.displayName = _a;
var vl = "ProgressIndicator", gl = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = Vv(vl, n);
    return /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "data-state": xl(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
gl.displayName = vl;
function Bv(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function xl(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ar(e) {
  return typeof e == "number";
}
function Ps(e) {
  return Ar(e) && !isNaN(e) && e > 0;
}
function Rs(e, t) {
  return Ar(e) && !isNaN(e) && e <= t && e >= 0;
}
function zv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ia}\`.`;
}
function Hv(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ia} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Yv = hl, Gv = gl, ja = "Radio", [Uv, bl] = Te(ja), [Kv, qv] = Uv(ja), yl = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      form: d,
      ...f
    } = e, [m, p] = u.useState(null), v = de(t, (g) => p(g)), x = u.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(Kv, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Sl(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: v,
          onClick: B(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        kl,
        {
          control: m,
          bubbles: !x.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
yl.displayName = ja;
var wl = "RadioIndicator", Cl = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = qv(wl, n);
    return /* @__PURE__ */ c.jsx(We, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": Sl(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Cl.displayName = wl;
var Xv = "RadioBubbleInput", kl = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = de(i, a), l = Vr(n), d = Br(t);
    return u.useEffect(() => {
      const f = i.current;
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
      Q.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
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
kl.displayName = Xv;
function Sl(e) {
  return e ? "checked" : "unchecked";
}
var Zv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Jr = "RadioGroup", [Qv] = Te(Jr, [
  fn,
  bl
]), Nl = fn(), Ml = bl(), [Jv, eg] = Qv(Jr), El = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: d,
      loop: f = !0,
      onValueChange: m,
      ...p
    } = e, v = Nl(n), x = $n(d), [h, g] = Xe({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: Jr
    });
    return /* @__PURE__ */ c.jsx(
      Jv,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          ka,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: x,
            loop: f,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
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
El.displayName = Jr;
var Pl = "RadioGroupItem", Rl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = eg(Pl, n), i = a.disabled || r, s = Nl(n), l = Ml(n), d = u.useRef(null), f = de(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        Zv.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Sa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          yl,
          {
            disabled: i,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: B((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: B(o.onFocus, () => {
              var v;
              p.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Rl.displayName = Pl;
var tg = "RadioGroupIndicator", Dl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ml(n);
    return /* @__PURE__ */ c.jsx(Cl, { ...o, ...r, ref: t });
  }
);
Dl.displayName = tg;
var ng = El, rg = Rl, og = Dl, ag = [" ", "Enter", "ArrowUp", "ArrowDown"], sg = [" ", "Enter"], Ft = "Select", [eo, to, ig] = jr(Ft), [mn] = Te(Ft, [
  ig,
  un
]), no = un(), [cg, Rt] = mn(Ft), [lg, dg] = mn(Ft), Ol = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: d,
    name: f,
    autoComplete: m,
    disabled: p,
    required: v,
    form: x
  } = e, h = no(t), [g, w] = u.useState(null), [b, y] = u.useState(null), [N, C] = u.useState(!1), S = $n(d), [k, P] = Xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ft
  }), [$, z] = Xe({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: Ft
  }), U = u.useRef(null), V = g ? x || !!g.closest("form") : !0, [X, I] = u.useState(/* @__PURE__ */ new Set()), Y = Array.from(X).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ c.jsx(ya, { ...h, children: /* @__PURE__ */ c.jsxs(
    cg,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: C,
      contentId: Ee(),
      value: $,
      onValueChange: z,
      open: k,
      onOpenChange: P,
      dir: S,
      triggerPointerDownPosRef: U,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(eo.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          lg,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((L) => {
              I((K) => new Set(K).add(L));
            }, []),
            onNativeOptionRemove: u.useCallback((L) => {
              I((K) => {
                const D = new Set(K);
                return D.delete(L), D;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ c.jsxs(
          rd,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: $,
            onChange: (L) => z(L.target.value),
            disabled: p,
            form: x,
            children: [
              $ === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
Ol.displayName = Ft;
var Al = "SelectTrigger", Tl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = no(n), i = Rt(Al, n), s = i.disabled || r, l = de(t, i.onTriggerChange), d = to(n), f = u.useRef("touch"), [m, p, v] = ad((h) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === i.value), b = sd(g, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), x = (h) => {
      s || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Kr, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": od(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: B(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: B(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: B(o.onKeyDown, (h) => {
          const g = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && ag.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Tl.displayName = Al;
var _l = "SelectValue", Il = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = Rt(_l, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = de(t, l.onValueNodeChange);
    return Pe(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      Q.span,
      {
        ...s,
        ref: m,
        style: { pointerEvents: "none" },
        children: od(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: i }) : a
      }
    );
  }
);
Il.displayName = _l;
var ug = "SelectIcon", jl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
jl.displayName = ug;
var fg = "SelectPortal", Wl = (e) => /* @__PURE__ */ c.jsx(cn, { asChild: !0, ...e });
Wl.displayName = fg;
var $t = "SelectContent", Fl = u.forwardRef(
  (e, t) => {
    const n = Rt($t, e.__scopeSelect), [r, o] = u.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Fn.createPortal(
        /* @__PURE__ */ c.jsx($l, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(eo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Ll, { ...e, ref: t });
  }
);
Fl.displayName = $t;
var Ke = 10, [$l, Dt] = mn($t), mg = "SelectContentImpl", pg = /* @__PURE__ */ St("SelectContent.RemoveScroll"), Ll = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
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
      ...w
    } = e, b = Rt($t, n), [y, N] = u.useState(null), [C, S] = u.useState(null), k = de(t, (O) => N(O)), [P, $] = u.useState(null), [z, U] = u.useState(
      null
    ), V = to(n), [X, I] = u.useState(!1), Y = u.useRef(!1);
    u.useEffect(() => {
      if (y) return $r(y);
    }, [y]), Wr();
    const L = u.useCallback(
      (O) => {
        const [q, ...te] = V().map((ue) => ue.ref.current), [re] = te.slice(-1), ie = document.activeElement;
        for (const ue of O)
          if (ue === ie || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === q && C && (C.scrollTop = 0), ue === re && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== ie)) return;
      },
      [V, C]
    ), K = u.useCallback(
      () => L([P, y]),
      [L, P, y]
    );
    u.useEffect(() => {
      X && K();
    }, [X, K]);
    const { onOpenChange: D, triggerPointerDownPosRef: W } = b;
    u.useEffect(() => {
      if (y) {
        let O = { x: 0, y: 0 };
        const q = (re) => {
          var ie, ue;
          O = {
            x: Math.abs(Math.round(re.pageX) - (((ie = W.current) == null ? void 0 : ie.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((ue = W.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, te = (re) => {
          O.x <= 10 && O.y <= 10 ? re.preventDefault() : y.contains(re.target) || D(!1), document.removeEventListener("pointermove", q), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [y, D, W]), u.useEffect(() => {
      const O = () => D(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [D]);
    const [R, H] = ad((O) => {
      const q = V().filter((ie) => !ie.disabled), te = q.find((ie) => ie.ref.current === document.activeElement), re = sd(q, O, te);
      re && setTimeout(() => re.ref.current.focus());
    }), E = u.useCallback(
      (O, q, te) => {
        const re = !Y.current && !te;
        (b.value !== void 0 && b.value === q || re) && ($(O), re && (Y.current = !0));
      },
      [b.value]
    ), A = u.useCallback(() => y == null ? void 0 : y.focus(), [y]), _ = u.useCallback(
      (O, q, te) => {
        const re = !Y.current && !te;
        (b.value !== void 0 && b.value === q || re) && U(O);
      },
      [b.value]
    ), F = r === "popper" ? Ho : Vl, Z = F === Ho ? {
      side: s,
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
      $l,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: S,
        itemRefCallback: E,
        selectedItem: P,
        onItemLeave: A,
        itemTextRefCallback: _,
        focusSelectedItem: K,
        selectedItemText: z,
        position: r,
        isPositioned: X,
        searchRef: R,
        children: /* @__PURE__ */ c.jsx(Vn, { as: pg, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Ln,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: B(o, (O) => {
              var q;
              (q = b.trigger) == null || q.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              sn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  F,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...Z,
                    onPlaced: () => I(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: B(w.onKeyDown, (O) => {
                      const q = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !q && O.key.length === 1 && H(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let re = V().filter((ie) => !ie.disabled).map((ie) => ie.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ie = O.target, ue = re.indexOf(ie);
                          re = re.slice(ue + 1);
                        }
                        setTimeout(() => L(re)), O.preventDefault();
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
Ll.displayName = mg;
var hg = "SelectItemAlignedPosition", Vl = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Rt($t, n), i = Dt($t, n), [s, l] = u.useState(null), [d, f] = u.useState(null), m = de(t, (k) => f(k)), p = to(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = i, y = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && d && h && g && w) {
      const k = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), $ = a.valueNode.getBoundingClientRect(), z = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ie = z.left - P.left, ue = $.left - ie, ke = k.left - ue, De = k.width + ke, et = Math.max(De, P.width), Ue = window.innerWidth - Ke, tt = Es(ue, [
          Ke,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ke, Ue - et)
        ]);
        s.style.minWidth = De + "px", s.style.left = tt + "px";
      } else {
        const ie = P.right - z.right, ue = window.innerWidth - $.right - ie, ke = window.innerWidth - k.right - ue, De = k.width + ke, et = Math.max(De, P.width), Ue = window.innerWidth - Ke, tt = Es(ue, [
          Ke,
          Math.max(Ke, Ue - et)
        ]);
        s.style.minWidth = De + "px", s.style.right = tt + "px";
      }
      const U = p(), V = window.innerHeight - Ke * 2, X = h.scrollHeight, I = window.getComputedStyle(d), Y = parseInt(I.borderTopWidth, 10), L = parseInt(I.paddingTop, 10), K = parseInt(I.borderBottomWidth, 10), D = parseInt(I.paddingBottom, 10), W = Y + L + X + D + K, R = Math.min(g.offsetHeight * 5, W), H = window.getComputedStyle(h), E = parseInt(H.paddingTop, 10), A = parseInt(H.paddingBottom, 10), _ = k.top + k.height / 2 - Ke, F = V - _, Z = g.offsetHeight / 2, O = g.offsetTop + Z, q = Y + L + O, te = W - q;
      if (q <= _) {
        const ie = U.length > 0 && g === U[U.length - 1].ref.current;
        s.style.bottom = "0px";
        const ue = d.clientHeight - h.offsetTop - h.offsetHeight, ke = Math.max(
          F,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ie ? A : 0) + ue + K
        ), De = q + ke;
        s.style.height = De + "px";
      } else {
        const ie = U.length > 0 && g === U[0].ref.current;
        s.style.top = "0px";
        const ke = Math.max(
          _,
          Y + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ie ? E : 0) + Z
        ) + te;
        s.style.height = ke + "px", h.scrollTop = q - _ + h.offsetTop;
      }
      s.style.margin = `${Ke}px 0`, s.style.minHeight = R + "px", s.style.maxHeight = V + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    s,
    d,
    h,
    g,
    w,
    a.dir,
    r
  ]);
  Pe(() => y(), [y]);
  const [N, C] = u.useState();
  Pe(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const S = u.useCallback(
    (k) => {
      k && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    gg,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
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
            Q.div,
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
Vl.displayName = hg;
var vg = "SelectPopperPosition", Ho = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ke,
    ...a
  } = e, i = no(n);
  return /* @__PURE__ */ c.jsx(
    wa,
    {
      ...i,
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
Ho.displayName = vg;
var [gg, Wa] = mn($t, {}), Yo = "SelectViewport", Bl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Dt(Yo, n), i = Wa(Yo, n), s = de(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(eo.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
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
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ke * 2, h = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), w = Math.max(h, g);
                if (w < x) {
                  const b = w + v, y = Math.min(x, b), N = b - y;
                  m.style.height = y + "px", m.style.bottom === "0px" && (f.scrollTop = N > 0 ? N : 0, m.style.justifyContent = "flex-end");
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
Bl.displayName = Yo;
var zl = "SelectGroup", [xg, bg] = mn(zl), Hl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ee();
    return /* @__PURE__ */ c.jsx(xg, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Hl.displayName = zl;
var Yl = "SelectLabel", Gl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bg(Yl, n);
    return /* @__PURE__ */ c.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
Gl.displayName = Yl;
var Tr = "SelectItem", [yg, Ul] = mn(Tr), Kl = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Rt(Tr, n), l = Dt(Tr, n), d = s.value === r, [f, m] = u.useState(a ?? ""), [p, v] = u.useState(!1), x = de(
      t,
      (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, r, o);
      }
    ), h = Ee(), g = u.useRef("touch"), w = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      yg,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: u.useCallback((b) => {
          m((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          eo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
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
                ...i,
                ref: x,
                onFocus: B(i.onFocus, () => v(!0)),
                onBlur: B(i.onBlur, () => v(!1)),
                onClick: B(i.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: B(i.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: B(i.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: B(i.onPointerMove, (b) => {
                  var y;
                  g.current = b.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: B(i.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: B(i.onKeyDown, (b) => {
                  var N;
                  ((N = l.searchRef) == null ? void 0 : N.current) !== "" && b.key === " " || (sg.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Kl.displayName = Tr;
var En = "SelectItemText", ql = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = Rt(En, n), s = Dt(En, n), l = Ul(En, n), d = dg(En, n), [f, m] = u.useState(null), p = de(
      t,
      (w) => m(w),
      l.onItemTextChange,
      (w) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, w, l.value, l.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = d;
    return Pe(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Q.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Fn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
ql.displayName = En;
var Xl = "SelectItemIndicator", Zl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ul(Xl, n).isSelected ? /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Zl.displayName = Xl;
var Go = "SelectScrollUpButton", Ql = u.forwardRef((e, t) => {
  const n = Dt(Go, e.__scopeSelect), r = Wa(Go, e.__scopeSelect), [o, a] = u.useState(!1), i = de(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    ed,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ql.displayName = Go;
var Uo = "SelectScrollDownButton", Jl = u.forwardRef((e, t) => {
  const n = Dt(Uo, e.__scopeSelect), r = Wa(Uo, e.__scopeSelect), [o, a] = u.useState(!1), i = de(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        a(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    ed,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Jl.displayName = Uo;
var ed = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Dt("SelectScrollButton", n), i = u.useRef(null), s = to(n), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Pe(() => {
    var f;
    const d = s().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ c.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: B(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: B(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: B(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), wg = "SelectSeparator", td = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
td.displayName = wg;
var Ko = "SelectArrow", nd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = no(n), a = Rt(Ko, n), i = Dt(Ko, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ c.jsx(Ca, { ...o, ...r, ref: t }) : null;
  }
);
nd.displayName = Ko;
var Cg = "SelectBubbleInput", rd = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = de(r, o), i = Vr(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(m);
      }
    }, [i, t]), /* @__PURE__ */ c.jsx(
      Q.select,
      {
        ...n,
        style: { ...mi, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
rd.displayName = Cg;
function od(e) {
  return e === "" || e === void 0;
}
function ad(e) {
  const t = je(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), (function l(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function sd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = kg(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== n));
  const l = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function kg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Sg = Ol, Ng = Tl, Mg = Il, Eg = jl, Pg = Wl, Rg = Fl, Dg = Bl, Og = Hl, Ag = Gl, Tg = Kl, _g = ql, Ig = Zl, jg = Ql, Wg = Jl, Fg = td, $g = nd, ro = "Switch", [Lg] = Te(ro), [Vg, Bg] = Lg(ro), id = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: d,
      form: f,
      ...m
    } = e, [p, v] = u.useState(null), x = de(t, (y) => v(y)), h = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [w, b] = Xe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: ro
    });
    return /* @__PURE__ */ c.jsxs(Vg, { scope: n, checked: w, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": ud(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...m,
          ref: x,
          onClick: B(e.onClick, (y) => {
            b((N) => !N), g && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        dd,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: l,
          checked: w,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
id.displayName = ro;
var cd = "SwitchThumb", ld = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Bg(cd, n);
    return /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": ud(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ld.displayName = cd;
var zg = "SwitchBubbleInput", dd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = de(i, a), l = Vr(n), d = Br(t);
    return u.useEffect(() => {
      const f = i.current;
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
        ref: s,
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
dd.displayName = zg;
function ud(e) {
  return e ? "checked" : "unchecked";
}
var Hg = id, Yg = ld, oo = "Tabs", [Gg] = Te(oo, [
  fn
]), fd = fn(), [Ug, Fa] = Gg(oo), md = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...d
    } = e, f = $n(s), [m, p] = Xe({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: oo
    });
    return /* @__PURE__ */ c.jsx(
      Ug,
      {
        scope: n,
        baseId: Ee(),
        value: m,
        onValueChange: p,
        orientation: i,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Q.div,
          {
            dir: f,
            "data-orientation": i,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
md.displayName = oo;
var pd = "TabsList", hd = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Fa(pd, n), i = fd(n);
    return /* @__PURE__ */ c.jsx(
      ka,
      {
        asChild: !0,
        ...i,
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
hd.displayName = pd;
var vd = "TabsTrigger", gd = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = Fa(vd, n), s = fd(n), l = bd(i.baseId, r), d = yd(i.baseId, r), f = r === i.value;
    return /* @__PURE__ */ c.jsx(
      Sa,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          Q.button,
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
            onMouseDown: B(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? i.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: B(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && i.onValueChange(r);
            }),
            onFocus: B(e.onFocus, () => {
              const m = i.activationMode !== "manual";
              !f && !o && m && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
gd.displayName = vd;
var xd = "TabsContent", Kg = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = Fa(xd, n), l = bd(s.baseId, r), d = yd(s.baseId, r), f = r === s.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(We, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: d,
        tabIndex: 0,
        ...i,
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
Kg.displayName = xd;
function bd(e, t) {
  return `${e}-trigger-${t}`;
}
function yd(e, t) {
  return `${e}-content-${t}`;
}
var qg = md, Xg = hd, Zg = gd, $a = "ToastProvider", [La, Qg, Jg] = jr("Toast"), [wd] = Te("Toast", [Jg]), [e0, ao] = wd($a), Cd = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${$a}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(La.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    e0,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: s,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => f((v) => v + 1), []),
      onToastRemove: u.useCallback(() => f((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: p,
      children: i
    }
  ) });
};
Cd.displayName = $a;
var kd = "ToastViewport", t0 = ["F8"], qo = "toast.viewportPause", Xo = "toast.viewportResume", Sd = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = t0,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = ao(kd, n), s = Qg(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = de(t, m, i.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = i.toastCount > 0;
    u.useEffect(() => {
      const g = (w) => {
        var y;
        r.length !== 0 && r.every((N) => w[N] || w.code === N) && ((y = m.current) == null || y.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, w = m.current;
      if (x && g && w) {
        const b = () => {
          if (!i.isClosePausedRef.current) {
            const S = new CustomEvent(qo);
            w.dispatchEvent(S), i.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (i.isClosePausedRef.current) {
            const S = new CustomEvent(Xo);
            w.dispatchEvent(S), i.isClosePausedRef.current = !1;
          }
        }, N = (S) => {
          !g.contains(S.relatedTarget) && y();
        }, C = () => {
          g.contains(document.activeElement) || y();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", N), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", N), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [x, i.isClosePausedRef]);
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = s().map((y) => {
          const N = y.ref.current, C = [N, ...p0(N)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [s]
    );
    return u.useEffect(() => {
      const g = m.current;
      if (g) {
        const w = (b) => {
          var C, S, k;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const P = document.activeElement, $ = b.shiftKey;
            if (b.target === g && $) {
              (C = d.current) == null || C.focus();
              return;
            }
            const V = h({ tabbingDirection: $ ? "backwards" : "forwards" }), X = V.findIndex((I) => I === P);
            So(V.slice(X + 1)) ? b.preventDefault() : $ ? (S = d.current) == null || S.focus() : (k = f.current) == null || k.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [s, h]), /* @__PURE__ */ c.jsxs(
      Mf,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            Zo,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                So(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(La.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Q.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            Zo,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                So(g);
              }
            }
          )
        ]
      }
    );
  }
);
Sd.displayName = kd;
var Nd = "ToastFocusProxy", Zo = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ao(Nd, n);
    return /* @__PURE__ */ c.jsx(
      ia,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var d;
          const s = i.relatedTarget;
          !((d = a.viewport) != null && d.contains(s)) && r();
        }
      }
    );
  }
);
Zo.displayName = Nd;
var Un = "Toast", n0 = "toast.swipeStart", r0 = "toast.swipeMove", o0 = "toast.swipeCancel", a0 = "toast.swipeEnd", Md = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s, l] = Xe({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Un
    });
    return /* @__PURE__ */ c.jsx(We, { present: n || s, children: /* @__PURE__ */ c.jsx(
      c0,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: je(e.onPause),
        onResume: je(e.onResume),
        onSwipeStart: B(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: B(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: B(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: B(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
Md.displayName = Un;
var [s0, i0] = wd(Un, {
  onClose() {
  }
}), c0 = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: l,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: m,
      onSwipeCancel: p,
      onSwipeEnd: v,
      ...x
    } = e, h = ao(Un, n), [g, w] = u.useState(null), b = de(t, (I) => w(I)), y = u.useRef(null), N = u.useRef(null), C = o || h.duration, S = u.useRef(0), k = u.useRef(C), P = u.useRef(0), { onToastAdd: $, onToastRemove: z } = h, U = je(() => {
      var Y;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((Y = h.viewport) == null || Y.focus()), i();
    }), V = u.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(P.current), S.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(U, I));
      },
      [U]
    );
    u.useEffect(() => {
      const I = h.viewport;
      if (I) {
        const Y = () => {
          V(k.current), d == null || d();
        }, L = () => {
          const K = (/* @__PURE__ */ new Date()).getTime() - S.current;
          k.current = k.current - K, window.clearTimeout(P.current), l == null || l();
        };
        return I.addEventListener(qo, L), I.addEventListener(Xo, Y), () => {
          I.removeEventListener(qo, L), I.removeEventListener(Xo, Y);
        };
      }
    }, [h.viewport, C, l, d, V]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && V(C);
    }, [a, C, h.isClosePausedRef, V]), u.useEffect(() => ($(), () => z()), [$, z]);
    const X = u.useMemo(() => g ? _d(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      X && /* @__PURE__ */ c.jsx(
        l0,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: X
        }
      ),
      /* @__PURE__ */ c.jsx(s0, { scope: n, onClose: U, children: Fn.createPortal(
        /* @__PURE__ */ c.jsx(La.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Nf,
          {
            asChild: !0,
            onEscapeKeyDown: B(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || U(), h.isFocusedToastEscapeKeyDownRef.current = !1;
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
                onKeyDown: B(e.onKeyDown, (I) => {
                  I.key === "Escape" && (s == null || s(I.nativeEvent), I.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, U()));
                }),
                onPointerDown: B(e.onPointerDown, (I) => {
                  I.button === 0 && (y.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: B(e.onPointerMove, (I) => {
                  if (!y.current) return;
                  const Y = I.clientX - y.current.x, L = I.clientY - y.current.y, K = !!N.current, D = ["left", "right"].includes(h.swipeDirection), W = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, R = D ? W(0, Y) : 0, H = D ? 0 : W(0, L), E = I.pointerType === "touch" ? 10 : 2, A = { x: R, y: H }, _ = { originalEvent: I, delta: A };
                  K ? (N.current = A, dr(r0, m, _, {
                    discrete: !1
                  })) : Ds(A, h.swipeDirection, E) ? (N.current = A, dr(n0, f, _, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(Y) > E || Math.abs(L) > E) && (y.current = null);
                }),
                onPointerUp: B(e.onPointerUp, (I) => {
                  const Y = N.current, L = I.target;
                  if (L.hasPointerCapture(I.pointerId) && L.releasePointerCapture(I.pointerId), N.current = null, y.current = null, Y) {
                    const K = I.currentTarget, D = { originalEvent: I, delta: Y };
                    Ds(Y, h.swipeDirection, h.swipeThreshold) ? dr(a0, v, D, {
                      discrete: !0
                    }) : dr(
                      o0,
                      p,
                      D,
                      {
                        discrete: !0
                      }
                    ), K.addEventListener("click", (W) => W.preventDefault(), {
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
), l0 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ao(Un, t), [a, i] = u.useState(!1), [s, l] = u.useState(!1);
  return f0(() => i(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), s ? null : /* @__PURE__ */ c.jsx(cn, { asChild: !0, children: /* @__PURE__ */ c.jsx(ia, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, d0 = "ToastTitle", Ed = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Ed.displayName = d0;
var u0 = "ToastDescription", Pd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Pd.displayName = u0;
var Rd = "ToastAction", Dd = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Td, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Ad, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Rd}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Dd.displayName = Rd;
var Od = "ToastClose", Ad = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = i0(Od, n);
    return /* @__PURE__ */ c.jsx(Td, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, o.onClose)
      }
    ) });
  }
);
Ad.displayName = Od;
var Td = u.forwardRef((e, t) => {
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
function _d(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), m0(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(..._d(r));
    }
  }), t;
}
function dr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sa(o, a) : o.dispatchEvent(a);
}
var Ds = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function f0(e = () => {
}) {
  const t = je(e);
  Pe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function m0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function p0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function So(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var h0 = Cd, v0 = Sd, g0 = Md, x0 = Ed, b0 = Pd, y0 = Dd;
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w0 = {
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
const xe = (e, t, n, r) => {
  const o = Ku(
    ({ color: a = "currentColor", size: i = 24, stroke: s = 2, title: l, className: d, children: f, ...m }, p) => fo(
      "svg",
      {
        ref: p,
        ...w0[e],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${t}`, d].join(" "),
        ...e === "filled" ? {
          fill: a
        } : {
          strokeWidth: s,
          stroke: a
        },
        ...m
      },
      [
        l && fo("title", { key: "svg-title" }, l),
        ...r.map(([v, x]) => fo(v, x)),
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
const C0 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], k0 = xe("outline", "alert-circle", "AlertCircle", C0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M16 15l-4 4", key: "svg-1" }], ["path", { d: "M8 15l4 4", key: "svg-2" }]], N0 = xe("outline", "arrow-narrow-down", "ArrowNarrowDown", S0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M0 = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M16 9l-4 -4", key: "svg-1" }], ["path", { d: "M8 9l4 -4", key: "svg-2" }]], E0 = xe("outline", "arrow-narrow-up", "ArrowNarrowUp", M0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = [["path", { d: "M3 9l4 -4l4 4m-4 -4v14", key: "svg-0" }], ["path", { d: "M21 15l-4 4l-4 -4m4 4v-14", key: "svg-1" }]], R0 = xe("outline", "arrows-sort", "ArrowsSort", P0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], O0 = xe("outline", "calendar-event", "CalendarEvent", D0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Id = xe("outline", "check", "Check", A0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T0 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], jd = xe("outline", "chevron-down", "ChevronDown", T0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], I0 = xe("outline", "chevron-left-pipe", "ChevronLeftPipe", _0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], W0 = xe("outline", "chevron-left", "ChevronLeft", j0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], $0 = xe("outline", "chevron-right-pipe", "ChevronRightPipe", F0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Wd = xe("outline", "chevron-right", "ChevronRight", L0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], B0 = xe("outline", "circle-check", "CircleCheck", V0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], H0 = xe("outline", "cloud-up", "CloudUp", z0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = [["path", { d: "M5 12l14 0", key: "svg-0" }]], G0 = xe("outline", "minus", "Minus", Y0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Fd = xe("outline", "search", "Search", U0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z", key: "svg-0" }]], q0 = xe("outline", "sparkles", "Sparkles", K0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Qo = xe("outline", "x", "X", X0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Q0 = xe("filled", "alert-circle-filled", "AlertCircleFilled", Z0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], $d = xe("filled", "circle-check-filled", "CircleCheckFilled", J0);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Os = xe("filled", "exclamation-circle-filled", "ExclamationCircleFilled", ex);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], As = xe("filled", "folder-filled", "FolderFilled", tx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], wr = xe("filled", "info-circle-filled", "InfoCircleFilled", nx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = [["path", { d: "M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z", key: "svg-0" }], ["path", { d: "M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z", key: "svg-1" }]], ox = xe("filled", "trash-x-filled", "TrashXFilled", rx), Va = "-", ax = (e) => {
  const t = ix(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Va);
      return s[0] === "" && s.length !== 1 && s.shift(), Ld(s, t) || sx(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Ld = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ld(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Va);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Ts = /^\[(.+)\]$/, sx = (e) => {
  if (Ts.test(e)) {
    const t = Ts.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ix = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Jo(n[o], r, o, t);
  return r;
}, Jo = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : _s(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (cx(o)) {
        Jo(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Jo(i, _s(t, a), n, r);
    });
  });
}, _s = (e, t) => {
  let n = e;
  return t.split(Va).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, cx = (e) => e.isThemeGetter, lx = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, ea = "!", ta = ":", dx = ta.length, ux = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, l = 0, d;
    for (let x = 0; x < o.length; x++) {
      let h = o[x];
      if (i === 0 && s === 0) {
        if (h === ta) {
          a.push(o.slice(l, x)), l = x + dx;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = fx(f), p = m !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + ta, a = r;
    r = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
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
}, fx = (e) => e.endsWith(ea) ? e.substring(0, e.length - 1) : e.startsWith(ea) ? e.substring(1) : e, mx = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, px = (e) => ({
  cache: lx(e.cacheSize),
  parseClassName: ux(e),
  sortModifiers: mx(e),
  ...ax(e)
}), hx = /\s+/, vx = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(hx);
  let l = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const f = s[d], {
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
    let g = !!h, w = r(g ? x.substring(0, h) : x);
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
    const b = a(p).join(":"), y = v ? b + ea : b, N = y + w;
    if (i.includes(N))
      continue;
    i.push(N);
    const C = o(w, g);
    for (let S = 0; S < C.length; ++S) {
      const k = C[S];
      i.push(y + k);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function gx() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Vd(t)) && (r && (r += " "), r += n);
  return r;
}
const Vd = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Vd(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Is(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = px(d), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const d = r(l);
    if (d)
      return d;
    const f = vx(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(gx.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Bd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, xx = /^\d+\/\d+$/, bx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Cx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xt = (e) => xx.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => !!e && Number.isInteger(Number(e)), No = (e) => e.endsWith("%") && ce(e.slice(0, -1)), pt = (e) => bx.test(e), Sx = () => !0, Nx = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yx.test(e) && !wx.test(e)
), Hd = () => !1, Mx = (e) => Cx.test(e), Ex = (e) => kx.test(e), Px = (e) => !J(e) && !ee(e), Rx = (e) => pn(e, Ud, Hd), J = (e) => Bd.test(e), Tt = (e) => pn(e, Kd, Nx), Mo = (e) => pn(e, _x, ce), js = (e) => pn(e, Yd, Hd), Dx = (e) => pn(e, Gd, Ex), ur = (e) => pn(e, qd, Mx), ee = (e) => zd.test(e), Sn = (e) => hn(e, Kd), Ox = (e) => hn(e, Ix), Ws = (e) => hn(e, Yd), Ax = (e) => hn(e, Ud), Tx = (e) => hn(e, Gd), fr = (e) => hn(e, qd, !0), pn = (e, t, n) => {
  const r = Bd.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, hn = (e, t, n = !1) => {
  const r = zd.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Yd = (e) => e === "position" || e === "percentage", Gd = (e) => e === "image" || e === "url", Ud = (e) => e === "length" || e === "size" || e === "bg-size", Kd = (e) => e === "length", _x = (e) => e === "number", Ix = (e) => e === "family-name", qd = (e) => e === "shadow", Fs = () => {
  const e = we("color"), t = we("font"), n = we("text"), r = we("font-weight"), o = we("tracking"), a = we("leading"), i = we("breakpoint"), s = we("container"), l = we("spacing"), d = we("radius"), f = we("shadow"), m = we("inset-shadow"), p = we("text-shadow"), v = we("drop-shadow"), x = we("blur"), h = we("perspective"), g = we("aspect"), w = we("ease"), b = we("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], C = () => [...N(), ee, J], S = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], P = () => [ee, J, l], $ = () => [Xt, "full", "auto", ...P()], z = () => [yt, "none", "subgrid", ee, J], U = () => ["auto", {
    span: ["full", yt, ee, J]
  }, yt, ee, J], V = () => [yt, "auto", ee, J], X = () => ["auto", "min", "max", "fr", ee, J], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...P()], K = () => [Xt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], D = () => [e, ee, J], W = () => [...N(), Ws, js, {
    position: [ee, J]
  }], R = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", Ax, Rx, {
    size: [ee, J]
  }], E = () => [No, Sn, Tt], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], _ = () => ["", ce, Sn, Tt], F = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [ce, No, Ws, js], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    ee,
    J
  ], te = () => ["none", ce, ee, J], re = () => ["none", ce, ee, J], ie = () => [ce, ee, J], ue = () => [Xt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pt],
      breakpoint: [pt],
      color: [Sx],
      container: [pt],
      "drop-shadow": [pt],
      ease: ["in", "out", "in-out"],
      font: [Px],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pt],
      shadow: [pt],
      spacing: ["px", ce],
      text: [pt],
      "text-shadow": [pt],
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
        aspect: ["auto", "square", Xt, J, ee, g]
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
        columns: [ce, J, ee, s]
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
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        z: [yt, "auto", ee, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Xt, "full", "auto", s, ...P()]
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
        flex: [ce, Xt, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, ee, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, ee, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [yt, "first", "last", "none", ee, J]
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
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
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
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "justify-items": [...Y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Y()]
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
        items: [...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Y(), {
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
        "place-items": [...Y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Y()]
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
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...K()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
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
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
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
        text: ["base", n, Sn, Tt]
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
        font: [r, ee, Mo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", No, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ox, J, t]
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
        "line-clamp": [ce, "none", ee, Mo]
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
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", ee, Tt]
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
        "underline-offset": [ce, "auto", ee, J]
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
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: R()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: H()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, yt, ee, J],
          radial: ["", ee, J],
          conic: [yt, ee, J]
        }, Tx, Dx]
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
        border: _()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": _()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": _()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": _()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": _()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": _()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": _()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": _()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": _()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": _()
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
        "divide-y": _()
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
        border: [...F(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...F(), "hidden", "none"]
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
        outline: [...F(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, ee, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Sn, Tt]
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
          fr,
          ur
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
        "inset-shadow": ["none", m, fr, ur]
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
        ring: _()
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
        "ring-offset": [ce, Tt]
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
        "inset-ring": _()
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
        "text-shadow": ["none", p, fr, ur]
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
        opacity: [ce, ee, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        "mask-linear": [ce]
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
        "mask-radial": [ee, J]
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
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ce]
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
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: R()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: H()
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
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, ee, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, ee, J]
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
          fr,
          ur
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
        grayscale: ["", ce, ee, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, ee, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, ee, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, ee, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, ee, J]
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
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, ee, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, ee, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, ee, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, ee, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, ee, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, ee, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, ee, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, ee, J]
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
        duration: [ce, "initial", ee, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, ee, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, ee, J]
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
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
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
        skew: ie()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ie()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ie()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Sn, Tt, Mo]
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
}, jx = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (Pn(e, "cacheSize", t), Pn(e, "prefix", n), Pn(e, "experimentalParseClassName", r), mr(e.theme, a.theme), mr(e.classGroups, a.classGroups), mr(e.conflictingClassGroups, a.conflictingClassGroups), mr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Pn(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), pr(e.theme, o.theme), pr(e.classGroups, o.classGroups), pr(e.conflictingClassGroups, o.conflictingClassGroups), pr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Xd(e, o, "orderSensitiveModifiers"), e), Pn = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, mr = (e, t) => {
  if (t)
    for (const n in t)
      Pn(e, n, t[n]);
}, pr = (e, t) => {
  if (t)
    for (const n in t)
      Xd(e, t, n);
}, Xd = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Wx = (e, ...t) => typeof e == "function" ? Is(Fs, e, ...t) : Is(() => jx(Fs(), e), ...t), Fx = Wx({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), T = (...e) => Fx(fi(e)), Ae = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return M.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return M.createElement(o, { size: n, className: r });
  }
  return e;
}, $s = ae(
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
), $x = M.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, i) => {
    const l = t || (e === "danger" ? Q0 : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Ir,
      {
        className: T($s({ intent: e }), n),
        ref: i,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: T($s({ intent: e }), n),
        ref: i,
        ...a,
        children: [
          e === "danger" && l && Ae(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
$x.displayName = "Badge";
const Lx = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Eo = ae(
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
), Vx = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Bx = M.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Wd,
    maxItems: r,
    className: o,
    "aria-label": a = "breadcrumb",
    ...i
  }, s) => {
    let l = e;
    if (r && e.length > r) {
      const d = e[0], f = e.slice(-(r - 1));
      l = [d, { label: "…" }, ...f];
    }
    return /* @__PURE__ */ c.jsx(
      "nav",
      {
        ref: s,
        "aria-label": a,
        className: T(Lx({ size: t }), o),
        ...i,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(M.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: T(Eo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: T(
                  Eo({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: T(Eo({ isActive: !0 })),
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
                    className: T(Vx({ size: t }))
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
Bx.displayName = "Breadcrumbs";
const zx = ae(
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
), Zd = M.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, i) => /* @__PURE__ */ c.jsx(
    Yv,
    {
      ref: i,
      className: T(zx({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        Gv,
        {
          className: T(
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
Zd.displayName = "ProgressIndicator.Linear";
const Hx = ae("flex items-center", {
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
}), Yx = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, _r = {
  sm: 12,
  md: 10
}, Ls = {
  sm: (50 - _r.sm / 2).toString(),
  md: (50 - _r.md / 2).toString()
}, Qd = M.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: T(Hx({ size: t, layout: e }), r),
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
            className: T(Yx[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Ls[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: _r[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Ls[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: _r[t],
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
Qd.displayName = "ProgressIndicator.Circular";
const Ba = {
  Linear: Zd,
  Circular: Qd
}, Po = ae(
  `gap-xxs rounded font-normal box-border inline-flex cursor-pointer
  items-center justify-center border border-transparent decoration-1
  focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed
  disabled:no-underline`,
  {
    variants: {
      intent: {
        primary: `bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-interactive-disabled`,
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
        disabled:text-interactive-disabled disabled:bg-transparent`
      },
      danger: {
        true: "focus-visible:ring-interactive-alert-focused",
        false: "focus-visible:ring-interactive-focused"
      },
      size: {
        icon: "",
        // To be used with icon-only buttons only
        xs: "px-sm h-8 min-w-15 text-sm",
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
      { iconOnly: !1, size: "md", class: "px-lg" },
      { iconOnly: !1, size: "lg", class: "px-xl" },
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
), hr = ae("", {
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
}), dt = M.forwardRef(
  ({
    intent: e,
    size: t,
    className: n,
    icon: r,
    trailingIcon: o,
    asChild: a = !1,
    loading: i = !1,
    danger: s = !1,
    children: l,
    ...d
  }, f) => {
    const m = a ? Ir : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = i || d.disabled;
    return i ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: T(
          Po({ intent: e, size: t, iconOnly: p, textOnly: v, danger: s }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Ae(r, {
              className: T(
                hr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            Ae(o, {
              className: T(
                hr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Ba.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: T(
          Po({ intent: e, size: t, iconOnly: p, textOnly: v, danger: s }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          Ae(r, {
            className: T(
              hr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          Ae(o, {
            className: T(
              hr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: T(
          Po({ intent: e, size: t, textOnly: v, danger: s }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
dt.displayName = "Button";
function Gx(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Ro = {}, Rn = {};
function It(e, t) {
  try {
    const r = (Ro[e] || (Ro[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Rn ? Rn[r] : Vs(r, r.split(":"));
  } catch {
    if (e in Rn) return Rn[e];
    const n = e == null ? void 0 : e.match(Ux);
    return n ? Vs(e, n.slice(1)) : NaN;
  }
}
const Ux = /([+-]\d\d):?(\d\d)?/;
function Vs(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Rn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class it extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(It(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Jd(this), na(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new it(...n, t) : new it(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new it(+this, t);
  }
  getTimezoneOffset() {
    const t = -It(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), na(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new it(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Bs = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Bs.test(e)) return;
  const t = e.replace(Bs, "$1UTC");
  it.prototype[t] && (e.startsWith("get") ? it.prototype[e] = function() {
    return this.internal[t]();
  } : (it.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Kx(this), +this;
  }, it.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), na(this), +this;
  }));
});
function na(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-It(e.timeZone, e) * 60));
}
function Kx(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Jd(e);
}
function Jd(e) {
  const t = It(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - a, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(It(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = It(e.timeZone, e), v = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, g = v !== n, w = h - l;
  if (g && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = It(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), N = v - y;
    N && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + N), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + N));
  }
}
class Re extends it {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Re(...n, t) : new Re(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Gx(this.timeZone, this)})`;
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
    return new Re(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Re(+new Date(t), this.timeZone);
  }
  //#endregion
}
const eu = 6048e5, qx = 864e5, zs = Symbol.for("constructDateFrom");
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && zs in e ? e[zs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function he(e, t) {
  return Ce(t || e, e);
}
function tu(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ce(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function nu(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Ce(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Ce(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Xx = {};
function Kn() {
  return Xx;
}
function an(e, t) {
  var s, l, d, f;
  const n = Kn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = he(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function jn(e, t) {
  return an(e, { ...t, weekStartsOn: 1 });
}
function ru(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ce(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = jn(o), i = Ce(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = jn(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Hs(e) {
  const t = he(e), n = new Date(
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
function vn(e, ...t) {
  const n = Ce.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Wn(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ou(e, t, n) {
  const [r, o] = vn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Wn(r), i = Wn(o), s = +a - Hs(a), l = +i - Hs(i);
  return Math.round((s - l) / qx);
}
function Zx(e, t) {
  const n = ru(e, t), r = Ce(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), jn(r);
}
function Qx(e, t, n) {
  return tu(e, t * 7, n);
}
function Jx(e, t, n) {
  return nu(e, t * 12, n);
}
function eb(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ce.bind(null, o));
    const a = he(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ce(r, n || NaN);
}
function tb(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ce.bind(null, o));
    const a = he(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ce(r, n || NaN);
}
function nb(e, t, n) {
  const [r, o] = vn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Wn(r) == +Wn(o);
}
function au(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rb(e) {
  return !(!au(e) && typeof e != "number" || isNaN(+he(e)));
}
function ob(e, t, n) {
  const [r, o] = vn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return a * 12 + i;
}
function ab(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function sb(e, t) {
  const [n, r] = vn(e, t.start, t.end);
  return { start: n, end: r };
}
function ib(e, t) {
  const { start: n, end: r } = sb(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const l = [];
  for (; +i <= a; )
    l.push(Ce(n, i)), i.setMonth(i.getMonth() + s);
  return o ? l.reverse() : l;
}
function cb(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function lb(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function su(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function iu(e, t) {
  var s, l, d, f;
  const n = Kn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = he(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function db(e, t) {
  return iu(e, { ...t, weekStartsOn: 1 });
}
const ub = {
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
}, fb = (e, t, n) => {
  let r;
  const o = ub[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function nn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const mb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, hb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vb = {
  date: nn({
    formats: mb,
    defaultWidth: "full"
  }),
  time: nn({
    formats: pb,
    defaultWidth: "full"
  }),
  dateTime: nn({
    formats: hb,
    defaultWidth: "full"
  })
}, gb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, xb = (e, t, n, r) => gb[e];
function ot(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const bb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, yb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, wb = {
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
}, Cb = {
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
}, kb = {
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
}, Sb = {
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
}, Nb = (e, t) => {
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
}, Mb = {
  ordinalNumber: Nb,
  era: ot({
    values: bb,
    defaultWidth: "wide"
  }),
  quarter: ot({
    values: yb,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ot({
    values: wb,
    defaultWidth: "wide"
  }),
  day: ot({
    values: Cb,
    defaultWidth: "wide"
  }),
  dayPeriod: ot({
    values: kb,
    defaultWidth: "wide",
    formattingValues: Sb,
    defaultFormattingWidth: "wide"
  })
};
function at(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Pb(s, (m) => m.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Eb(s, (m) => m.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(i.length);
    return { value: d, rest: f };
  };
}
function Eb(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Pb(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function cu(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Rb = /^(\d+)(th|st|nd|rd)?/i, Db = /\d+/i, Ob = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ab = {
  any: [/^b/i, /^(a|c)/i]
}, Tb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _b = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ib = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, jb = {
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
}, Wb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $b = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Lb = {
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
}, Vb = {
  ordinalNumber: cu({
    matchPattern: Rb,
    parsePattern: Db,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: at({
    matchPatterns: Ob,
    defaultMatchWidth: "wide",
    parsePatterns: Ab,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: Tb,
    defaultMatchWidth: "wide",
    parsePatterns: _b,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: Ib,
    defaultMatchWidth: "wide",
    parsePatterns: jb,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: Wb,
    defaultMatchWidth: "wide",
    parsePatterns: Fb,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: $b,
    defaultMatchWidth: "any",
    parsePatterns: Lb,
    defaultParseWidth: "any"
  })
}, za = {
  code: "en-US",
  formatDistance: fb,
  formatLong: vb,
  formatRelative: xb,
  localize: Mb,
  match: Vb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Bb(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return ou(n, su(n)) + 1;
}
function lu(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = +jn(n) - +Zx(n);
  return Math.round(r / eu) + 1;
}
function du(e, t) {
  var f, m, p, v;
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Kn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Ce((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = an(i, t), l = Ce((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = an(l, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function zb(e, t) {
  var s, l, d, f;
  const n = Kn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = du(e, t), a = Ce((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), an(a, t);
}
function uu(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = +an(n, t) - +zb(n, t);
  return Math.round(r / eu) + 1;
}
function me(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const wt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return me(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : me(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return me(e.getDate(), t.length);
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
    return me(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return me(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return me(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return me(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return me(o, t.length);
  }
}, Zt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ys = {
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
    return wt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = du(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return me(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : me(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ru(e);
    return me(n, t.length);
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
    return me(n, t.length);
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
        return me(r, 2);
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
        return me(r, 2);
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
        return wt.M(e, t);
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
        return me(r + 1, 2);
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
    const o = uu(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : me(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = lu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : me(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : wt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Bb(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : me(r, t.length);
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
        return me(a, 2);
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
        return me(a, t.length);
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
        return me(o, t.length);
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
    switch (r === 12 ? o = Zt.noon : r === 0 ? o = Zt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Zt.evening : r >= 12 ? o = Zt.afternoon : r >= 4 ? o = Zt.morning : o = Zt.night, t) {
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
    return wt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : wt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : wt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : wt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return wt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Us(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return _t(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return _t(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Us(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return _t(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return _t(r, ":");
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
        return "GMT" + Gs(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + _t(r, ":");
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
        return "GMT" + Gs(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + _t(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return me(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return me(+e, t.length);
  }
};
function Gs(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + me(a, 2);
}
function Us(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + me(Math.abs(e) / 60, 2) : _t(e, t);
}
function _t(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = me(Math.trunc(r / 60), 2), a = me(r % 60, 2);
  return n + o + t + a;
}
const Ks = (e, t) => {
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
}, fu = (e, t) => {
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
}, Hb = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ks(e, t);
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
  return a.replace("{{date}}", Ks(r, t)).replace("{{time}}", fu(o, t));
}, Yb = {
  p: fu,
  P: Hb
}, Gb = /^D+$/, Ub = /^Y+$/, Kb = ["D", "DD", "YY", "YYYY"];
function qb(e) {
  return Gb.test(e);
}
function Xb(e) {
  return Ub.test(e);
}
function Zb(e, t, n) {
  const r = Qb(e, t, n);
  if (console.warn(r), Kb.includes(e)) throw new RangeError(r);
}
function Qb(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Jb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ey = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ty = /^'([^]*?)'?$/, ny = /''/g, ry = /[a-zA-Z]/;
function oy(e, t, n) {
  var f, m, p, v, x, h, g, w;
  const r = Kn(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? za, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = he(e, n == null ? void 0 : n.in);
  if (!rb(s))
    throw new RangeError("Invalid time value");
  let l = t.match(ey).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const N = Yb[y];
      return N(b, o.formatLong);
    }
    return b;
  }).join("").match(Jb).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: ay(b) };
    if (Ys[y])
      return { isToken: !0, value: b };
    if (y.match(ry))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((b) => {
    if (!b.isToken) return b.value;
    const y = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Xb(y) || !(n != null && n.useAdditionalDayOfYearTokens) && qb(y)) && Zb(y, t, String(e));
    const N = Ys[y[0]];
    return N(s, y, o.localize, d);
  }).join("");
}
function ay(e) {
  const t = e.match(ty);
  return t ? t[1].replace(ny, "'") : e;
}
function sy(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ce(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function iy(e, t) {
  return he(e, t == null ? void 0 : t.in).getMonth();
}
function cy(e, t) {
  return he(e, t == null ? void 0 : t.in).getFullYear();
}
function ly(e, t) {
  return +he(e) > +he(t);
}
function dy(e, t) {
  return +he(e) < +he(t);
}
function uy(e, t, n) {
  const [r, o] = vn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function fy(e, t, n) {
  const [r, o] = vn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function my(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), i = Ce(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = sy(i);
  return r.setMonth(t, Math.min(a, s)), r;
}
function py(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ce(e, NaN) : (r.setFullYear(t), r);
}
const qs = 5, hy = 4;
function vy(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, qs * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? qs : hy;
}
function mu(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function gy(e, t) {
  const n = mu(e, t), r = vy(e, t);
  return t.addDays(n, r * 7 - 1);
}
class ze {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Re.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Re(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : tu(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : nu(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Qx(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Jx(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ou(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ob(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : ib(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : gy(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : db(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : ab(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : iu(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : lb(r);
    }, this.format = (r, o, a) => {
      var s;
      const i = (s = this.overrides) != null && s.format ? this.overrides.format(r, o, this.options) : oy(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : lu(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : iy(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : cy(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : uu(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : ly(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : dy(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : au(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : nb(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : uy(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : fy(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : eb(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : tb(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : my(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : py(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : mu(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Wn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : jn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : cb(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : an(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : su(r);
    }, this.options = { locale: za, ...t }, this.overrides = n;
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
    return t && ze.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && ze.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
ze.yearFirstLocales = /* @__PURE__ */ new Set([
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
const ft = new ze();
class pu {
  constructor(t, n, r = ft) {
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
class xy {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class by {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function yy(e) {
  return M.createElement("button", { ...e });
}
function wy(e) {
  return M.createElement("span", { ...e });
}
function Cy(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    M.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && M.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && M.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && M.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && M.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function ky(e) {
  const { day: t, modifiers: n, ...r } = e;
  return M.createElement("td", { ...r });
}
function Sy(e) {
  const { day: t, modifiers: n, ...r } = e, o = M.useRef(null);
  return M.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), M.createElement("button", { ref: o, ...r });
}
var ne;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ne || (ne = {}));
var ge;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ge || (ge = {}));
var qe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(qe || (qe = {}));
var Le;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Le || (Le = {}));
function Ny(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, i = [o[ne.Dropdown], n].join(" "), s = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return M.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[ne.DropdownRoot] },
    M.createElement(r.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => M.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    M.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      M.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function My(e) {
  return M.createElement("div", { ...e });
}
function Ey(e) {
  return M.createElement("div", { ...e });
}
function Py(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return M.createElement("div", { ...r }, e.children);
}
function Ry(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return M.createElement("div", { ...r });
}
function Dy(e) {
  return M.createElement("table", { ...e });
}
function Oy(e) {
  return M.createElement("div", { ...e });
}
const hu = ci(void 0);
function qn() {
  const e = li(hu);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Ay(e) {
  const { components: t } = qn();
  return M.createElement(t.Dropdown, { ...e });
}
function Ty(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: l, labelNext: d } } = qn(), f = Se((p) => {
    o && (n == null || n(p));
  }, [o, n]), m = Se((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return M.createElement(
    "nav",
    { ...a },
    M.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      M.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[ne.Chevron], orientation: "left" })
    ),
    M.createElement(
      i.NextMonthButton,
      { type: "button", className: s[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      M.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[ne.Chevron] })
    )
  );
}
function _y(e) {
  const { components: t } = qn();
  return M.createElement(t.Button, { ...e });
}
function Iy(e) {
  return M.createElement("option", { ...e });
}
function jy(e) {
  const { components: t } = qn();
  return M.createElement(t.Button, { ...e });
}
function Wy(e) {
  const { rootRef: t, ...n } = e;
  return M.createElement("div", { ...n, ref: t });
}
function Fy(e) {
  return M.createElement("select", { ...e });
}
function $y(e) {
  const { week: t, ...n } = e;
  return M.createElement("tr", { ...n });
}
function Ly(e) {
  return M.createElement("th", { ...e });
}
function Vy(e) {
  return M.createElement(
    "thead",
    { "aria-hidden": !0 },
    M.createElement("tr", { ...e })
  );
}
function By(e) {
  const { week: t, ...n } = e;
  return M.createElement("th", { ...n });
}
function zy(e) {
  return M.createElement("th", { ...e });
}
function Hy(e) {
  return M.createElement("tbody", { ...e });
}
function Yy(e) {
  const { components: t } = qn();
  return M.createElement(t.Dropdown, { ...e });
}
const Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yy,
  CaptionLabel: wy,
  Chevron: Cy,
  Day: ky,
  DayButton: Sy,
  Dropdown: Ny,
  DropdownNav: My,
  Footer: Ey,
  Month: Py,
  MonthCaption: Ry,
  MonthGrid: Dy,
  Months: Oy,
  MonthsDropdown: Ay,
  Nav: Ty,
  NextMonthButton: _y,
  Option: Iy,
  PreviousMonthButton: jy,
  Root: Wy,
  Select: Fy,
  Week: $y,
  WeekNumber: By,
  WeekNumberHeader: zy,
  Weekday: Ly,
  Weekdays: Vy,
  Weeks: Hy,
  YearsDropdown: Yy
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t, n = !1, r = ft) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (n ? 1 : 0) && i(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && o ? s(o, t) : !1;
}
function vu(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Ha(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function gu(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function xu(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function bu(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function yu(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function vt(e, t, n = ft) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return o(e, s);
    if (yu(s, n))
      return s.includes(e);
    if (Ha(s))
      return ht(s, e, !1, n);
    if (bu(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (vu(s)) {
      const l = a(s.before, e), d = a(s.after, e), f = l > 0, m = d < 0;
      return i(s.before, s.after) ? m && f : f || m;
    }
    return gu(s) ? a(e, s.after) > 0 : xu(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function Uy(e, t, n, r, o) {
  const { disabled: a, hidden: i, modifiers: s, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, w = n && v(n), b = r && h(r), y = {
    [ge.focused]: [],
    [ge.outside]: [],
    [ge.disabled]: [],
    [ge.hidden]: [],
    [ge.today]: []
  }, N = {};
  for (const C of e) {
    const { date: S, displayMonth: k } = C, P = !!(k && !p(S, k)), $ = !!(w && x(S, w)), z = !!(b && g(S, b)), U = !!(a && vt(S, a, o)), V = !!(i && vt(S, i, o)) || $ || z || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, X = m(S, f ?? o.today());
    P && y.outside.push(C), U && y.disabled.push(C), V && y.hidden.push(C), X && y.today.push(C), s && Object.keys(s).forEach((I) => {
      const Y = s == null ? void 0 : s[I];
      Y && vt(S, Y, o) && (N[I] ? N[I].push(C) : N[I] = [C]);
    });
  }
  return (C) => {
    const S = {
      [ge.focused]: !1,
      [ge.disabled]: !1,
      [ge.hidden]: !1,
      [ge.outside]: !1,
      [ge.today]: !1
    }, k = {};
    for (const P in y) {
      const $ = y[P];
      S[P] = $.some((z) => z === C);
    }
    for (const P in N)
      k[P] = N[P].some(($) => $ === C);
    return {
      ...S,
      // custom modifiers should override all the previous ones
      ...k
    };
  };
}
function Ky(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ge[a]] ? o.push(t[ge[a]]) : t[qe[a]] && o.push(t[qe[a]]), o), [t[ne.Day]]);
}
function qy(e) {
  return {
    ...Gy,
    ...e
  };
}
function Xy(e) {
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
function wu() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in ge)
    e[ge[t]] = `rdp-${ge[t]}`;
  for (const t in qe)
    e[qe[t]] = `rdp-${qe[t]}`;
  for (const t in Le)
    e[Le[t]] = `rdp-${Le[t]}`;
  return e;
}
function Cu(e, t, n) {
  return (n ?? new ze(t)).formatMonthYear(e);
}
const Zy = Cu;
function Qy(e, t, n) {
  return (n ?? new ze(t)).format(e, "d");
}
function Jy(e, t = ft) {
  return t.format(e, "LLLL");
}
function ew(e, t, n) {
  return (n ?? new ze(t)).format(e, "cccccc");
}
function tw(e, t = ft) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function nw() {
  return "";
}
function ku(e, t = ft) {
  return t.format(e, "yyyy");
}
const rw = ku, ow = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Cu,
  formatDay: Qy,
  formatMonthCaption: Zy,
  formatMonthDropdown: Jy,
  formatWeekNumber: tw,
  formatWeekNumberHeader: nw,
  formatWeekdayName: ew,
  formatYearCaption: rw,
  formatYearDropdown: ku
}, Symbol.toStringTag, { value: "Module" }));
function aw(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...ow,
    ...e
  };
}
function sw(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: i(e),
    end: s(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function iw(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function cw(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let i = 0; i < 7; i++) {
    const s = e.addDays(o, i);
    a.push(s);
  }
  return a;
}
function lw(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: i, addYears: s, getYear: l, isBefore: d, isSameYear: f } = r, m = a(e), p = i(t), v = [];
  let x = m;
  for (; d(x, p) || f(x, p); )
    v.push(x), x = s(x, 1);
  return o && v.reverse(), v.map((h) => {
    const g = n.formatYearDropdown(h, r);
    return {
      value: l(h),
      label: g,
      disabled: !1
    };
  });
}
function Su(e, t, n, r) {
  let o = (r ?? new ze(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const dw = Su;
function Nu(e, t, n) {
  return (n ?? new ze(t)).formatMonthYear(e);
}
const uw = Nu;
function fw(e, t, n, r) {
  let o = (r ?? new ze(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function mw(e) {
  return "Choose the Month";
}
function pw() {
  return "";
}
function hw(e) {
  return "Go to the Next Month";
}
function vw(e) {
  return "Go to the Previous Month";
}
function gw(e, t, n) {
  return (n ?? new ze(t)).format(e, "cccc");
}
function xw(e, t) {
  return `Week ${e}`;
}
function bw(e) {
  return "Week Number";
}
function yw(e) {
  return "Choose the Year";
}
const ww = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: uw,
  labelDay: dw,
  labelDayButton: Su,
  labelGrid: Nu,
  labelGridcell: fw,
  labelMonthDropdown: mw,
  labelNav: pw,
  labelNext: hw,
  labelPrevious: vw,
  labelWeekNumber: xw,
  labelWeekNumberHeader: bw,
  labelWeekday: gw,
  labelYearDropdown: yw
}, Symbol.toStringTag, { value: "Module" })), Xn = (e) => e instanceof HTMLElement ? e : null, Do = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Cw = (e) => Xn(e.querySelector("[data-animated-month]")), Oo = (e) => Xn(e.querySelector("[data-animated-caption]")), Ao = (e) => Xn(e.querySelector("[data-animated-weeks]")), kw = (e) => Xn(e.querySelector("[data-animated-nav]")), Sw = (e) => Xn(e.querySelector("[data-animated-weekdays]"));
function Nw(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const i = Dn(null), s = Dn(r), l = Dn(!1);
  ii(() => {
    const d = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[Le.caption_after_enter] : n[Le.caption_before_enter], v = m ? n[Le.weeks_after_enter] : n[Le.weeks_before_enter], x = i.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Do(h).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const N = Cw(y);
      N && y.contains(N) && y.removeChild(N);
      const C = Oo(y);
      C && C.classList.remove(p);
      const S = Ao(y);
      S && S.classList.remove(v);
    }), i.current = h) : i.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? Do(x) : [], w = Do(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = kw(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, N) => {
        const C = g[N];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const S = Oo(y);
        S && S.classList.add(p);
        const k = Ao(y);
        k && k.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), S && S.classList.remove(p), k && k.classList.remove(v), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const $ = Sw(C);
        $ && ($.style.opacity = "0");
        const z = Oo(C);
        z && (z.classList.add(m ? n[Le.caption_before_exit] : n[Le.caption_after_exit]), z.addEventListener("animationend", P));
        const U = Ao(C);
        U && U.classList.add(m ? n[Le.weeks_before_exit] : n[Le.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function Mw(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, N = l ? w(o, r) : i ? b(o) : y(o), C = l ? p(a) : i ? v(x(a)) : h(x(a)), S = f(C, N), k = m(a, o) + 1, P = [];
  for (let U = 0; U <= S; U++) {
    const V = d(N, U);
    if (t && g(V, t))
      break;
    P.push(V);
  }
  const z = (l ? 35 : 42) * k;
  if (s && P.length < z) {
    const U = z - P.length;
    for (let V = 0; V < U; V++) {
      const X = d(P[P.length - 1], 1);
      P.push(X);
    }
  }
  return P;
}
function Ew(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, i) => a.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Pw(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let i = 0; i < o; i++) {
    const s = r.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function Xs(e, t, n, r) {
  const { month: o, defaultMonth: a, today: i = r.today(), numberOfMonths: s = 1 } = e;
  let l = o || a || i;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < s - 1) {
    const p = -1 * (s - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function Rw(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: v } = r, x = e.reduce((h, g) => {
    const w = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : v(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? i(s(g)) : l(s(g)), y = t.filter((k) => k >= w && k <= b), N = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < N) {
      const k = t.filter((P) => {
        const $ = N - y.length;
        return P > b && P <= o(b, $);
      });
      y.push(...k);
    }
    const C = y.reduce((k, P) => {
      const $ = n.ISOWeek ? d(P) : f(P), z = k.find((V) => V.weekNumber === $), U = new pu(P, g, r);
      return z ? z.days.push(U) : k.push(new by($, [U])), k;
    }, []), S = new xy(g, C);
    return h.push(S), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function Dw(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = s(r) : v ? r = f(v, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function Ow(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = i(e);
  if (!t)
    return s(f, d);
  if (!(l(t, e) < a))
    return s(f, d);
}
function Aw(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = i(e);
  if (!t)
    return s(f, -d);
  if (!(l(f, t) <= 0))
    return s(f, -d);
}
function Tw(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function so(e, t) {
  const [n, r] = On(e);
  return [t === void 0 ? n : t, r];
}
function _w(e, t) {
  const [n, r] = Dw(e, t), { startOfMonth: o, endOfMonth: a } = t, i = Xs(e, n, r, t), [s, l] = so(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  di(() => {
    const S = Xs(e, n, r, t);
    l(S);
  }, [e.timeZone]);
  const d = Pw(s, r, e, t), f = Mw(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = Rw(d, f, e, t), p = Tw(m), v = Ew(m), x = Aw(s, n, e, t), h = Ow(s, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (S) => p.some((k) => k.days.some((P) => P.isEqualTo(S))), y = (S) => {
    if (g)
      return;
    let k = o(S);
    n && k < o(n) && (k = o(n)), r && k > o(r) && (k = o(r)), l(k), w == null || w(k);
  };
  return {
    months: m,
    weeks: p,
    days: v,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: h,
    goToMonth: y,
    goToDay: (S) => {
      b(S) || y(S.date);
    }
  };
}
var nt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(nt || (nt = {}));
function Zs(e) {
  return !e[ge.disabled] && !e[ge.hidden] && !e[ge.outside];
}
function Iw(e, t, n, r) {
  let o, a = -1;
  for (const i of e) {
    const s = t(i);
    Zs(s) && (s[ge.focused] && a < nt.FocusedModifier ? (o = i, a = nt.FocusedModifier) : r != null && r.isEqualTo(i) && a < nt.LastFocused ? (o = i, a = nt.LastFocused) : n(i.date) && a < nt.Selected ? (o = i, a = nt.Selected) : s[ge.today] && a < nt.Today && (o = i, a = nt.Today));
  }
  return o || (o = e.find((i) => Zs(t(i)))), o;
}
function jw(e, t, n, r, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: x, endOfWeek: h, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: N } = i;
  let S = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (k) => l ? b(k, i) : s ? y(k) : N(k),
    endOfWeek: (k) => l ? v(k) : s ? x(k) : h(k)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? S = g([r, S]) : t === "after" && o && (S = w([o, S])), S;
}
function Mu(e, t, n, r, o, a, i, s = 0) {
  if (s > 365)
    return;
  const l = jw(e, t, n.date, r, o, a, i), d = !!(a.disabled && vt(l, a.disabled, i)), f = !!(a.hidden && vt(l, a.hidden, i)), m = l, p = new pu(l, m, i);
  return !d && !f ? p : Mu(e, t, p, r, o, a, i, s + 1);
}
function Ww(e, t, n, r, o) {
  const { autoFocus: a } = e, [i, s] = On(), l = Iw(t.days, n, r || (() => !1), i), [d, f] = On(a ? l : void 0);
  return {
    isFocusTarget: (h) => !!(l != null && l.isEqualTo(h)),
    setFocused: f,
    focused: d,
    blur: () => {
      s(d), f(void 0);
    },
    moveFocus: (h, g) => {
      if (!d)
        return;
      const w = Mu(h, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), f(w));
    }
  };
}
function Fw(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = so(n, o ? n : void 0), s = o ? n : a, { isSameDay: l } = t, d = (v) => (s == null ? void 0 : s.some((x) => l(x, v))) ?? !1, { min: f, max: m } = e;
  return {
    selected: s,
    select: (v, x, h) => {
      let g = [...s ?? []];
      if (d(v)) {
        if ((s == null ? void 0 : s.length) === f || r && (s == null ? void 0 : s.length) === 1)
          return;
        g = s == null ? void 0 : s.filter((w) => !l(w, v));
      } else
        (s == null ? void 0 : s.length) === m ? g = [v] : g = [...g, v];
      return o || i(g), o == null || o(g, v, x, h), g;
    },
    isSelected: d
  };
}
function $w(e, t, n = 0, r = 0, o = !1, a = ft) {
  const { from: i, to: s } = t || {}, { isSameDay: l, isAfter: d, isBefore: f } = a;
  let m;
  if (!i && !s)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !s)
    l(i, e) ? n === 0 ? m = { from: i, to: e } : o ? m = { from: i, to: void 0 } : m = void 0 : f(e, i) ? m = { from: e, to: i } : m = { from: i, to: e };
  else if (i && s)
    if (l(i, e) && l(s, e))
      o ? m = { from: i, to: s } : m = void 0;
    else if (l(i, e))
      m = { from: i, to: n > 0 ? void 0 : e };
    else if (l(s, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, i))
      m = { from: e, to: s };
    else if (d(e, i))
      m = { from: i, to: e };
    else if (d(e, s))
      m = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (m != null && m.from && (m != null && m.to)) {
    const p = a.differenceInCalendarDays(m.to, m.from);
    r > 0 && p > r ? m = { from: e, to: void 0 } : n > 1 && p < n && (m = { from: e, to: void 0 });
  }
  return m;
}
function Lw(e, t, n = ft) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Qs(e, t, n = ft) {
  return ht(e, t.from, !1, n) || ht(e, t.to, !1, n) || ht(t, e.from, !1, n) || ht(t, e.to, !1, n);
}
function Vw(e, t, n = ft) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? ht(e, s, !1, n) : yu(s, n) ? s.some((l) => ht(e, l, !1, n)) : Ha(s) ? s.from && s.to ? Qs(e, { from: s.from, to: s.to }, n) : !1 : bu(s) ? Lw(e, s.dayOfWeek, n) : vu(s) ? n.isAfter(s.before, s.after) ? Qs(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : vt(e.from, s, n) || vt(e.to, s, n) : gu(s) || xu(s) ? vt(e.from, s, n) || vt(e.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= l; d++) {
      if (i.some((f) => f(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function Bw(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: i } = e, [s, l] = so(o, i ? o : void 0), d = i ? o : s;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, w = p ? $w(p, d, h, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && Vw({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), i || l(w), i == null || i(w, p, v, x), w;
    },
    isSelected: (p) => d && ht(d, p, !1, t)
  };
}
function zw(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = so(n, o ? n : void 0), s = o ? n : a, { isSameDay: l } = t;
  return {
    selected: s,
    select: (m, p, v) => {
      let x = m;
      return !r && s && s && l(m, s) && (x = void 0), o || i(x), o == null || o(x, m, p, v), x;
    },
    isSelected: (m) => s ? l(s, m) : !1
  };
}
function Hw(e, t) {
  const n = zw(e, t), r = Fw(e, t), o = Bw(e, t);
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
function Yw(e) {
  var nr;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Re(t.today, t.timeZone)), t.month && (t.month = new Re(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Re(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Re(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Re(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Re(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (nr = t.selected) == null ? void 0 : nr.map((se) => new Re(se, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Re(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Re(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: i, classNames: s } = mo(() => {
    const se = { ...za, ...t.locale };
    return {
      dateLib: new ze({
        locale: se,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: qy(t.components),
      formatters: aw(t.formatters),
      labels: { ...ww, ...t.labels },
      locale: se,
      classNames: { ...wu(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: N, styles: C } = t, { formatCaption: S, formatDay: k, formatMonthDropdown: P, formatWeekNumber: $, formatWeekNumberHeader: z, formatWeekdayName: U, formatYearDropdown: V } = r, X = _w(t, a), { days: I, months: Y, navStart: L, navEnd: K, previousMonth: D, nextMonth: W, goToMonth: R } = X, H = Uy(I, t, L, K, a), { isSelected: E, select: A, selected: _ } = Hw(t, a) ?? {}, { blur: F, focused: Z, isFocusTarget: O, moveFocus: q, setFocused: te } = Ww(t, X, H, E ?? (() => !1), a), { labelDayButton: re, labelGridcell: ie, labelGrid: ue, labelMonthDropdown: ke, labelNav: De, labelPrevious: et, labelNext: Ue, labelWeekday: tt, labelWeekNumber: zt, labelWeekNumberHeader: Ie, labelYearDropdown: Ot } = o, Jn = mo(() => cw(a, t.ISOWeek), [a, t.ISOWeek]), gn = d !== void 0 || v !== void 0, Ht = Se(() => {
    D && (R(D), y == null || y(D));
  }, [D, R, y]), Yt = Se(() => {
    W && (R(W), b == null || b(W));
  }, [R, W, b]), xn = Se((se, ve) => (oe) => {
    oe.preventDefault(), oe.stopPropagation(), te(se), A == null || A(se.date, ve, oe), v == null || v(se.date, ve, oe);
  }, [A, v, te]), bn = Se((se, ve) => (oe) => {
    te(se), x == null || x(se.date, ve, oe);
  }, [x, te]), er = Se((se, ve) => (oe) => {
    F(), p == null || p(se.date, ve, oe);
  }, [F, p]), He = Se((se, ve) => (oe) => {
    const pe = {
      ArrowLeft: [
        oe.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        oe.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [oe.shiftKey ? "year" : "week", "after"],
      ArrowUp: [oe.shiftKey ? "year" : "week", "before"],
      PageUp: [oe.shiftKey ? "year" : "month", "before"],
      PageDown: [oe.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (pe[oe.key]) {
      oe.preventDefault(), oe.stopPropagation();
      const [Oe, fe] = pe[oe.key];
      q(Oe, fe);
    }
    h == null || h(se.date, ve, oe);
  }, [q, h, t.dir]), Ye = Se((se, ve) => (oe) => {
    g == null || g(se.date, ve, oe);
  }, [g]), yn = Se((se, ve) => (oe) => {
    w == null || w(se.date, ve, oe);
  }, [w]), Ga = Se((se) => (ve) => {
    const oe = Number(ve.target.value), pe = a.setMonth(a.startOfMonth(se), oe);
    R(pe);
  }, [a, R]), mt = Se((se) => (ve) => {
    const oe = Number(ve.target.value), pe = a.setYear(a.startOfMonth(se), oe);
    R(pe);
  }, [a, R]), { className: tr, style: co } = mo(() => ({
    className: [s[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[ne.Root], ...t.style }
  }), [s, t.className, t.style, C]), $e = Xy(t), Gt = Dn(null);
  Nw(Gt, !!t.animate, {
    classNames: s,
    months: Y,
    focused: Z,
    dateLib: a
  });
  const lo = {
    dayPickerProps: t,
    selected: _,
    select: A,
    isSelected: E,
    months: Y,
    nextMonth: W,
    previousMonth: D,
    goToMonth: R,
    getModifiers: H,
    components: n,
    classNames: s,
    styles: C,
    labels: o,
    formatters: r
  };
  return M.createElement(
    hu.Provider,
    { value: lo },
    M.createElement(
      n.Root,
      { rootRef: t.animate ? Gt : void 0, className: tr, style: co, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...$e },
      M.createElement(
        n.Months,
        { className: s[ne.Months], style: C == null ? void 0 : C[ne.Months] },
        !t.hideNavigation && !f && M.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": De(), onPreviousClick: Ht, onNextClick: Yt, previousMonth: D, nextMonth: W }),
        Y.map((se, ve) => M.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: s[ne.Month],
            style: C == null ? void 0 : C[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ve,
            displayIndex: ve,
            calendarMonth: se
          },
          f === "around" && !t.hideNavigation && ve === 0 && M.createElement(
            n.PreviousMonthButton,
            { type: "button", className: s[ne.PreviousMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": et(D), onClick: Ht, "data-animated-button": t.animate ? "true" : void 0 },
            M.createElement(n.Chevron, { disabled: D ? void 0 : !0, className: s[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          M.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: s[ne.MonthCaption], style: C == null ? void 0 : C[ne.MonthCaption], calendarMonth: se, displayIndex: ve }, l != null && l.startsWith("dropdown") ? M.createElement(
            n.DropdownNav,
            { className: s[ne.Dropdowns], style: C == null ? void 0 : C[ne.Dropdowns] },
            (() => {
              const oe = l === "dropdown" || l === "dropdown-months" ? M.createElement(n.MonthsDropdown, { key: "month", className: s[ne.MonthsDropdown], "aria-label": ke(), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: Ga(se.date), options: sw(se.date, L, K, r, a), style: C == null ? void 0 : C[ne.Dropdown], value: a.getMonth(se.date) }) : M.createElement("span", { key: "month" }, P(se.date, a)), pe = l === "dropdown" || l === "dropdown-years" ? M.createElement(n.YearsDropdown, { key: "year", className: s[ne.YearsDropdown], "aria-label": Ot(a.options), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: mt(se.date), options: lw(L, K, r, a, !!t.reverseYears), style: C == null ? void 0 : C[ne.Dropdown], value: a.getYear(se.date) }) : M.createElement("span", { key: "year" }, V(se.date, a));
              return a.getMonthYearOrder() === "year-first" ? [pe, oe] : [oe, pe];
            })(),
            M.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, S(se.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            M.createElement(n.CaptionLabel, { className: s[ne.CaptionLabel], role: "status", "aria-live": "polite" }, S(se.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && ve === m - 1 && M.createElement(
            n.NextMonthButton,
            { type: "button", className: s[ne.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": Ue(W), onClick: Yt, "data-animated-button": t.animate ? "true" : void 0 },
            M.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: s[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ve === m - 1 && f === "after" && !t.hideNavigation && M.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": De(), onPreviousClick: Ht, onNextClick: Yt, previousMonth: D, nextMonth: W }),
          M.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(se.date, a.options, a) || void 0, className: s[ne.MonthGrid], style: C == null ? void 0 : C[ne.MonthGrid] },
            !t.hideWeekdays && M.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: s[ne.Weekdays], style: C == null ? void 0 : C[ne.Weekdays] },
              N && M.createElement(n.WeekNumberHeader, { "aria-label": Ie(a.options), className: s[ne.WeekNumberHeader], style: C == null ? void 0 : C[ne.WeekNumberHeader], scope: "col" }, z()),
              Jn.map((oe) => M.createElement(n.Weekday, { "aria-label": tt(oe, a.options, a), className: s[ne.Weekday], key: String(oe), style: C == null ? void 0 : C[ne.Weekday], scope: "col" }, U(oe, a.options, a)))
            ),
            M.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: s[ne.Weeks], style: C == null ? void 0 : C[ne.Weeks] }, se.weeks.map((oe) => M.createElement(
              n.Week,
              { className: s[ne.Week], key: oe.weekNumber, style: C == null ? void 0 : C[ne.Week], week: oe },
              N && // biome-ignore lint/a11y/useSemanticElements: react component
              M.createElement(n.WeekNumber, { week: oe, style: C == null ? void 0 : C[ne.WeekNumber], "aria-label": zt(oe.weekNumber, {
                locale: i
              }), className: s[ne.WeekNumber], scope: "row", role: "rowheader" }, $(oe.weekNumber, a)),
              oe.days.map((pe) => {
                const { date: Oe } = pe, fe = H(pe);
                if (fe[ge.focused] = !fe.hidden && !!(Z != null && Z.isEqualTo(pe)), fe[qe.selected] = (E == null ? void 0 : E(Oe)) || fe.selected, Ha(_)) {
                  const { from: At, to: j } = _;
                  fe[qe.range_start] = !!(At && j && a.isSameDay(Oe, At)), fe[qe.range_end] = !!(At && j && a.isSameDay(Oe, j)), fe[qe.range_middle] = ht(_, Oe, !0, a);
                }
                const Ua = iw(fe, C, t.modifiersStyles), wn = Ky(fe, s, t.modifiersClassNames), Ka = !gn && !fe.hidden ? ie(Oe, fe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  M.createElement(n.Day, { key: `${a.format(Oe, "yyyy-MM-dd")}_${a.format(pe.displayMonth, "yyyy-MM")}`, day: pe, modifiers: fe, className: wn.join(" "), style: Ua, role: "gridcell", "aria-selected": fe.selected || void 0, "aria-label": Ka, "data-day": a.format(Oe, "yyyy-MM-dd"), "data-month": pe.outside ? a.format(Oe, "yyyy-MM") : void 0, "data-selected": fe.selected || void 0, "data-disabled": fe.disabled || void 0, "data-hidden": fe.hidden || void 0, "data-outside": pe.outside || void 0, "data-focused": fe.focused || void 0, "data-today": fe.today || void 0 }, !fe.hidden && gn ? M.createElement(n.DayButton, { className: s[ne.DayButton], style: C == null ? void 0 : C[ne.DayButton], type: "button", day: pe, modifiers: fe, disabled: fe.disabled || void 0, tabIndex: O(pe) ? 0 : -1, "aria-label": re(Oe, fe, a.options, a), onClick: xn(pe, fe), onBlur: er(pe, fe), onFocus: bn(pe, fe), onKeyDown: He(pe, fe), onMouseEnter: Ye(pe, fe), onMouseLeave: yn(pe, fe) }, k(Oe, a.options, a)) : !fe.hidden && k(pe.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      M.createElement(n.Footer, { className: s[ne.Footer], style: C == null ? void 0 : C[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const Gw = {
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
}, Uw = (e, t, n) => {
  n = n || {};
  let r;
  const o = Gw[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, Kw = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, qw = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, Xw = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Zw = {
  date: nn({
    formats: Kw,
    defaultWidth: "full"
  }),
  time: nn({
    formats: qw,
    defaultWidth: "full"
  }),
  dateTime: nn({
    formats: Xw,
    defaultWidth: "full"
  })
}, Qw = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, Jw = (e, t, n, r) => Qw[e], e1 = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, t1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, n1 = {
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
}, r1 = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, o1 = {
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
}, a1 = {
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
}, s1 = (e, t) => {
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
}, i1 = {
  ordinalNumber: s1,
  era: ot({
    values: e1,
    defaultWidth: "wide"
  }),
  quarter: ot({
    values: t1,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: ot({
    values: n1,
    defaultWidth: "wide"
  }),
  day: ot({
    values: r1,
    defaultWidth: "wide"
  }),
  dayPeriod: ot({
    values: o1,
    defaultWidth: "wide",
    formattingValues: a1,
    defaultFormattingWidth: "wide"
  })
}, c1 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, l1 = /\d+/i, d1 = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, u1 = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, f1 = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, m1 = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, p1 = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, h1 = {
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
}, v1 = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, g1 = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, x1 = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, b1 = {
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
}, y1 = {
  ordinalNumber: cu({
    matchPattern: c1,
    parsePattern: l1,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: at({
    matchPatterns: d1,
    defaultMatchWidth: "wide",
    parsePatterns: u1,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: f1,
    defaultMatchWidth: "wide",
    parsePatterns: m1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: p1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: x1,
    defaultMatchWidth: "any",
    parsePatterns: b1,
    defaultParseWidth: "any"
  })
}, Js = {
  code: "ja",
  formatDistance: Uw,
  formatLong: Zw,
  formatRelative: Jw,
  localize: i1,
  match: y1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, w1 = {
  ...Js,
  localize: {
    ...Js.localize,
    day: (e) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e] || ""
  }
}, C1 = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, vr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Eu = M.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: a = !1,
    className: i,
    showOutsideDays: s = !0,
    fixedWeeks: l = !0,
    animate: d = !0,
    defaultMonth: f,
    inline: m = !1,
    ...p
  }, v) => {
    const [x, h] = M.useState(
      () => vr(n || null)
    ), g = e !== void 0, w = g ? vr(e) : x, b = M.useMemo(
      () => vr(r || null),
      [r]
    ), y = M.useMemo(
      () => vr(o || null),
      [o]
    ), N = M.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = (S) => {
      const k = S || null;
      g || h(k), t == null || t(k);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: T(C1(m), i),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          Yw,
          {
            animate: d,
            mode: "single",
            selected: w || void 0,
            onSelect: C,
            locale: w1,
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
            showOutsideDays: s,
            fixedWeeks: l,
            defaultMonth: f || w || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const S = wu(), k = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${S.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
                // Header elements
                month_caption: "text-base font-bold text-body-primary px-xxs mb-md",
                weekdays: "mb-xs",
                weekday: "text-body-secondary text-[13px] font-normal leading-5 tracking-normal text-center",
                // Navigation
                button_previous: k,
                button_next: k,
                chevron: "fill-current text-interactive-primary-default w-5 h-5",
                // Day states
                day: "rounded-md transition-colors text-body-primary text-md !w-9.5 !h-9.5",
                day_button: "!w-9 !h-9 border border-transparent rounded-sm active:text-interactive-primary-active hover:bg-interactive-neutral-hover  cursor-pointer",
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
Eu.displayName = "Calendar";
const k1 = ae(
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
), S1 = ae("shrink-0", {
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
}), N1 = ae("text-body-primary font-bold text-md"), M1 = ae(
  "text-body-primary font-normal leading-6 text-md"
), E1 = {
  info: wr,
  success: $d,
  warning: wr,
  alert: wr
}, P1 = M.forwardRef(
  ({
    className: e,
    intent: t = "info",
    size: n = "default",
    title: r,
    description: o,
    children: a,
    action: i,
    icon: s,
    ...l
  }, d) => {
    const f = s || E1[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: T(k1({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: T(S1({ intent: t, size: n }), "top-0.5 relative"), children: Ae(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 gap-xxs flex flex-1 flex-col", children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: T(N1()), children: r }),
              i && /* @__PURE__ */ c.jsx(
                dt,
                {
                  onClick: i.onClick,
                  intent: "text",
                  size: "xs",
                  className: `py-0 text-md font-normal
                    text-interactive-primary-default h-auto underline`,
                  children: i.label
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: T(M1()), children: a || o })
          ] })
        ]
      }
    );
  }
);
P1.displayName = "Callout";
const R1 = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), D1 = ae(
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
), Cr = ({
  disabled: e,
  invalid: t,
  indeterminate: n,
  label: r,
  id: o,
  children: a,
  className: i,
  ...s
}) => {
  const l = o || `checkbox-${r}`;
  return /* @__PURE__ */ c.jsxs("div", { className: T(R1({ disabled: e }), i), children: [
    /* @__PURE__ */ c.jsx(
      Yi,
      {
        id: l,
        className: T(D1({ disabled: e, invalid: t })),
        disabled: e,
        ...s,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          Ui,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(G0, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(Id, { style: { strokeWidth: 3 } })
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
Cr.displayName = "Checkbox";
const O1 = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: T("gap-xs flex flex-col", t), children: e });
O1.displayName = "CheckboxGroup";
const A1 = ae(
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
), T1 = ae(
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
), To = ae(
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
), Pu = M.forwardRef(
  ({
    invalid: e,
    prefixIcon: t,
    trailingIcon: n,
    onTrailingIconClick: r,
    trailingIconSize: o = 14,
    prefixIconSize: a = 14,
    className: i,
    ...s
  }, l) => {
    const d = !!t, f = !!n, m = !!r;
    return /* @__PURE__ */ c.jsxs("div", { className: T(A1({ invalid: e }), i), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: To({ position: "prefix", interactive: !1 }),
          children: Ae(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: T1({ hasPrefix: d, hasTrailing: f }),
          ...s
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: To({
            position: "trailing",
            interactive: !0
          }),
          disabled: s.disabled,
          onClick: r,
          children: Ae(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: To({
            position: "trailing",
            interactive: !1
          }),
          children: Ae(n, { size: o })
        }
      ) })
    ] });
  }
);
Pu.displayName = "Input";
const _1 = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", gr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, I1 = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), j1 = M.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: a = !1,
    error: i = !1,
    icon: s,
    iconSize: l = 14,
    placeholder: d,
    formatDate: f = I1,
    className: m,
    contentClassName: p,
    defaultOpen: v = !1,
    open: x,
    onOpenChange: h,
    side: g = "bottom"
  }, w) => {
    const [b, y] = M.useState(
      () => gr(n || null)
    ), [N, C] = M.useState(v), S = e !== void 0, k = S ? gr(e) : b, P = x !== void 0 ? x : N, $ = M.useMemo(
      () => gr(r || null),
      [r]
    ), z = M.useMemo(
      () => gr(o || null),
      [o]
    ), U = M.useMemo(() => !$ || !z ? !0 : $ <= z, [$, z]), V = (L) => {
      const K = L || null;
      S || y(K), t == null || t(K), K && (x === void 0 && C(!1), h == null || h(!1));
    }, X = (L) => {
      x === void 0 && C(L), h == null || h(L);
    }, I = (L) => {
      switch (L.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          L.preventDefault(), P || X(!0);
          break;
        case "Escape":
          P && (L.preventDefault(), X(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(fl, { open: P, onOpenChange: X, children: [
      /* @__PURE__ */ c.jsx(ml, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Pu,
        {
          ref: w,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: k ? f(k) : void 0,
          disabled: a,
          invalid: i,
          trailingIcon: s || O0,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && X(!P),
          className: T(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            P && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: I,
          onClick: () => !a && X(!P),
          "aria-expanded": P,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(pl, { children: /* @__PURE__ */ c.jsx(
        Ta,
        {
          className: T(_1, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: g,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => X(!1),
          onPointerDownOutside: () => X(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            Eu,
            {
              value: k,
              onChange: V,
              ...$ && { minDate: $ },
              ...z && { maxDate: z },
              disabled: !U,
              showOutsideDays: !0,
              fixedWeeks: !0,
              animate: !0,
              defaultMonth: k || /* @__PURE__ */ new Date()
            }
          )
        }
      ) })
    ] });
  }
);
j1.displayName = "DatePicker";
const W1 = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], wC = ({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  actions: o = W1,
  cancellable: a = !0,
  cancelButtonLabel: i = "キャンセル"
}) => {
  const s = (d) => {
    d.onAction && d.onAction(), t(d.value);
  }, l = () => {
    t();
  };
  return /* @__PURE__ */ c.jsxs(Li, { open: e, onOpenChange: t, children: [
    /* @__PURE__ */ c.jsx(
      Vi,
      {
        className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
          w-full`
      }
    ),
    /* @__PURE__ */ c.jsx(
      Bi,
      {
        className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
          min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
          -translate-y-1/2 transform`,
        children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "px-xl py-lg flex flex-grow items-center justify-between",
              children: n && /* @__PURE__ */ c.jsx(
                Am,
                {
                  className: `text-xxl text-body-primary font-bold h-4.5 flex
                  items-center`,
                  children: n
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary min-h-40 flex flex-grow-0 border-y-1`,
              children: r
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "px-md py-lg flex justify-between", children: [
            a && /* @__PURE__ */ c.jsx(ps, { asChild: !0, children: /* @__PURE__ */ c.jsx(dt, { intent: "tertiary", onClick: l, children: i }) }),
            /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${a ? "" : "ml-auto"}`, children: o.map((d, f) => {
              const { label: m, classNames: p, onAction: v, value: x, ...h } = d;
              return /* @__PURE__ */ c.jsx(
                ps,
                {
                  asChild: !0,
                  disabled: d.disabled,
                  children: /* @__PURE__ */ c.jsx(
                    dt,
                    {
                      ...h,
                      intent: d.intent || "primary",
                      className: p,
                      onClick: () => s(d),
                      children: m
                    }
                  )
                },
                f
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
}, F1 = ae(
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
), $1 = ae(
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
), L1 = M.forwardRef(
  ({
    children: e,
    onSelect: t,
    disabled: n,
    intent: r = "default",
    icon: o,
    className: a,
    ...i
  }, s) => {
    const l = {
      ref: s,
      className: T($1({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(Ev, { ...l, children: [
      Ae(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
L1.displayName = "DropdownItem";
const V1 = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Pv,
  {
    ref: n,
    className: T(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
V1.displayName = "DropdownSeparator";
const B1 = M.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Mv,
  {
    ref: r,
    className: T(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
B1.displayName = "DropdownLabel";
const z1 = M.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Sv, { children: /* @__PURE__ */ c.jsx(
  Nv,
  {
    ref: o,
    className: T(F1({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
z1.displayName = "DropdownContent";
const H1 = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(Cv, { ...a, children: e });
};
H1.displayName = "Dropdown";
const Y1 = M.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  kv,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Y1.displayName = "DropdownTrigger";
const CC = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: a,
  optional: i
}) => /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col", children: [
  e && /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: r,
      className: T(
        `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
        n
      ),
      children: [
        /* @__PURE__ */ c.jsx("span", { children: e }),
        i && /* @__PURE__ */ c.jsx("span", { className: "text-body-secondary", children: "(任意)" })
      ]
    }
  ),
  t,
  o && /* @__PURE__ */ c.jsx("div", { className: "pt-xxs", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert text-sm font-normal leading-[1.5]", children: o }) }),
  a && /* @__PURE__ */ c.jsx("div", { className: "pt-xxs", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm font-normal leading-[1.5]", children: a }) })
] });
var be = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(be || {});
const G1 = {
  0: be.AccentGraySoft,
  1: be.AccentSunSoft,
  2: be.AccentSunPale,
  3: be.AccentPurpleSoft,
  4: be.AccentPurpleSoft,
  5: be.AccentSeaSoft,
  6: be.AccentSeaSoft,
  7: be.AccentCyanSoft,
  8: be.AccentCyanSoft,
  9: be.AccentGreenSoft,
  10: be.AccentGreenSoft,
  11: be.AccentLimeSoft,
  12: be.AccentLimeSoft,
  13: be.AccentYellowSoft,
  14: be.AccentYellowSoft,
  15: be.AccentOrangeSoft,
  16: be.AccentOrangeSoft,
  17: be.AccentGraySoft,
  18: be.AccentGraySoft
}, U1 = ae(
  `gap-xxs text-accent-gray-strong py-xxs px-xs h-5.5 inline-flex items-center
  rounded-full border border-transparent leading-none`,
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
), ei = ({
  accentColor: e = be.AccentGrayPale,
  colorCode: t,
  children: n,
  className: r,
  onRemove: o,
  onClick: a,
  size: i = "md",
  style: s,
  selected: l = !1
}) => {
  M.useEffect(() => {
    t && e !== be.AccentGrayPale && console.warn(
      "Tag component: Both colorCode and accentColor props are provided. colorCode takes precedence over accentColor."
    );
  }, [t, e]);
  const d = typeof t == "number" ? G1[t] : e;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: T(
        U1({ size: i, selected: l, interactive: !!a }),
        r
      ),
      style: {
        backgroundColor: `var(${d})`,
        ...s
      },
      onClick: a,
      role: a ? "button" : void 0,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: n }),
        !!o && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: T(
              `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
            items-center justify-center rounded-full leading-none`
            ),
            onClick: o,
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
}, K1 = fl, q1 = ml, Ru = M.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(pl, { children: /* @__PURE__ */ c.jsx(
  Ta,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
      // but we can add them later as needed.
      `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-50 border outline-none`,
      e
    ),
    ...r
  }
) }));
Ru.displayName = Ta.displayName;
var ti = 1, X1 = 0.9, Z1 = 0.8, Q1 = 0.17, _o = 0.1, Io = 0.999, J1 = 0.9999, e2 = 0.99, t2 = /[\\\/_+.#"@\[\(\{&]/, n2 = /[\\\/_+.#"@\[\(\{&]/g, r2 = /[\s-]/, Du = /[\s-]/g;
function ra(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? ti : e2;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, v, x; d >= 0; ) m = ra(e, t, n, r, d + 1, a + 1, i), m > f && (d === o ? m *= ti : t2.test(e.charAt(d - 1)) ? (m *= Z1, v = e.slice(o, d - 1).match(n2), v && o > 0 && (m *= Math.pow(Io, v.length))) : r2.test(e.charAt(d - 1)) ? (m *= X1, x = e.slice(o, d - 1).match(Du), x && o > 0 && (m *= Math.pow(Io, x.length))) : (m *= Q1, o > 0 && (m *= Math.pow(Io, d - o))), e.charAt(d) !== t.charAt(a) && (m *= J1)), (m < _o && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = ra(e, t, n, r, d + 1, a + 2, i), p * _o > m && (m = p * _o)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return i[s] = f, f;
}
function ni(e) {
  return e.toLowerCase().replace(Du, " ");
}
function o2(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ra(e, t, ni(e), ni(t), 0, 0, {});
}
var Nn = '[cmdk-group=""]', jo = '[cmdk-group-items=""]', a2 = '[cmdk-group-heading=""]', Ou = '[cmdk-item=""]', ri = `${Ou}:not([aria-disabled="true"])`, oa = "cmdk-item-select", Qt = "data-value", s2 = (e, t, n) => o2(e, t, n), Au = u.createContext(void 0), Zn = () => u.useContext(Au), Tu = u.createContext(void 0), Ya = () => u.useContext(Tu), _u = u.createContext(void 0), Iu = u.forwardRef((e, t) => {
  let n = Jt(() => {
    var E, A;
    return { search: "", value: (A = (E = e.value) != null ? E : e.defaultValue) != null ? A : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Jt(() => /* @__PURE__ */ new Set()), o = Jt(() => /* @__PURE__ */ new Map()), a = Jt(() => /* @__PURE__ */ new Map()), i = Jt(() => /* @__PURE__ */ new Set()), s = ju(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...w } = e, b = Ee(), y = Ee(), N = Ee(), C = u.useRef(null), S = g2();
  Lt(() => {
    if (f !== void 0) {
      let E = f.trim();
      n.current.value = E, k.emit();
    }
  }, [f]), Lt(() => {
    S(6, X);
  }, []);
  let k = u.useMemo(() => ({ subscribe: (E) => (i.current.add(E), () => i.current.delete(E)), snapshot: () => n.current, setState: (E, A, _) => {
    var F, Z, O, q;
    if (!Object.is(n.current[E], A)) {
      if (n.current[E] = A, E === "search") V(), z(), S(1, U);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let te = document.getElementById(N);
          te ? te.focus() : (F = document.getElementById(b)) == null || F.focus();
        }
        if (S(7, () => {
          var te;
          n.current.selectedItemId = (te = I()) == null ? void 0 : te.id, k.emit();
        }), _ || S(5, X), ((Z = s.current) == null ? void 0 : Z.value) !== void 0) {
          let te = A ?? "";
          (q = (O = s.current).onValueChange) == null || q.call(O, te);
          return;
        }
      }
      k.emit();
    }
  }, emit: () => {
    i.current.forEach((E) => E());
  } }), []), P = u.useMemo(() => ({ value: (E, A, _) => {
    var F;
    A !== ((F = a.current.get(E)) == null ? void 0 : F.value) && (a.current.set(E, { value: A, keywords: _ }), n.current.filtered.items.set(E, $(A, _)), S(2, () => {
      z(), k.emit();
    }));
  }, item: (E, A) => (r.current.add(E), A && (o.current.has(A) ? o.current.get(A).add(E) : o.current.set(A, /* @__PURE__ */ new Set([E]))), S(3, () => {
    V(), z(), n.current.value || U(), k.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let _ = I();
    S(4, () => {
      V(), (_ == null ? void 0 : _.getAttribute("id")) === E && U(), k.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: b, inputId: N, labelId: y, listInnerRef: C }), []);
  function $(E, A) {
    var _, F;
    let Z = (F = (_ = s.current) == null ? void 0 : _.filter) != null ? F : s2;
    return E ? Z(E, n.current.search, A) : 0;
  }
  function z() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, A = [];
    n.current.filtered.groups.forEach((F) => {
      let Z = o.current.get(F), O = 0;
      Z.forEach((q) => {
        let te = E.get(q);
        O = Math.max(te, O);
      }), A.push([F, O]);
    });
    let _ = C.current;
    Y().sort((F, Z) => {
      var O, q;
      let te = F.getAttribute("id"), re = Z.getAttribute("id");
      return ((O = E.get(re)) != null ? O : 0) - ((q = E.get(te)) != null ? q : 0);
    }).forEach((F) => {
      let Z = F.closest(jo);
      Z ? Z.appendChild(F.parentElement === Z ? F : F.closest(`${jo} > *`)) : _.appendChild(F.parentElement === _ ? F : F.closest(`${jo} > *`));
    }), A.sort((F, Z) => Z[1] - F[1]).forEach((F) => {
      var Z;
      let O = (Z = C.current) == null ? void 0 : Z.querySelector(`${Nn}[${Qt}="${encodeURIComponent(F[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function U() {
    let E = Y().find((_) => _.getAttribute("aria-disabled") !== "true"), A = E == null ? void 0 : E.getAttribute(Qt);
    k.setState("value", A || void 0);
  }
  function V() {
    var E, A, _, F;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let O of r.current) {
      let q = (A = (E = a.current.get(O)) == null ? void 0 : E.value) != null ? A : "", te = (F = (_ = a.current.get(O)) == null ? void 0 : _.keywords) != null ? F : [], re = $(q, te);
      n.current.filtered.items.set(O, re), re > 0 && Z++;
    }
    for (let [O, q] of o.current) for (let te of q) if (n.current.filtered.items.get(te) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = Z;
  }
  function X() {
    var E, A, _;
    let F = I();
    F && (((E = F.parentElement) == null ? void 0 : E.firstChild) === F && ((_ = (A = F.closest(Nn)) == null ? void 0 : A.querySelector(a2)) == null || _.scrollIntoView({ block: "nearest" })), F.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${Ou}[aria-selected="true"]`);
  }
  function Y() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(ri)) || []);
  }
  function L(E) {
    let A = Y()[E];
    A && k.setState("value", A.getAttribute(Qt));
  }
  function K(E) {
    var A;
    let _ = I(), F = Y(), Z = F.findIndex((q) => q === _), O = F[Z + E];
    (A = s.current) != null && A.loop && (O = Z + E < 0 ? F[F.length - 1] : Z + E === F.length ? F[0] : F[Z + E]), O && k.setState("value", O.getAttribute(Qt));
  }
  function D(E) {
    let A = I(), _ = A == null ? void 0 : A.closest(Nn), F;
    for (; _ && !F; ) _ = E > 0 ? h2(_, Nn) : v2(_, Nn), F = _ == null ? void 0 : _.querySelector(ri);
    F ? k.setState("value", F.getAttribute(Qt)) : K(E);
  }
  let W = () => L(Y().length - 1), R = (E) => {
    E.preventDefault(), E.metaKey ? W() : E.altKey ? D(1) : K(1);
  }, H = (E) => {
    E.preventDefault(), E.metaKey ? L(0) : E.altKey ? D(-1) : K(-1);
  };
  return u.createElement(Q.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (E) => {
    var A;
    (A = w.onKeyDown) == null || A.call(w, E);
    let _ = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || _)) switch (E.key) {
      case "n":
      case "j": {
        g && E.ctrlKey && R(E);
        break;
      }
      case "ArrowDown": {
        R(E);
        break;
      }
      case "p":
      case "k": {
        g && E.ctrlKey && H(E);
        break;
      }
      case "ArrowUp": {
        H(E);
        break;
      }
      case "Home": {
        E.preventDefault(), L(0);
        break;
      }
      case "End": {
        E.preventDefault(), W();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let F = I();
        if (F) {
          let Z = new Event(oa);
          F.dispatchEvent(Z);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: b2 }, l), io(e, (E) => u.createElement(Tu.Provider, { value: k }, u.createElement(Au.Provider, { value: P }, E))));
}), i2 = u.forwardRef((e, t) => {
  var n, r;
  let o = Ee(), a = u.useRef(null), i = u.useContext(_u), s = Zn(), l = ju(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  Lt(() => {
    if (!d) return s.item(o, i == null ? void 0 : i.id);
  }, [d]);
  let f = Wu(o, a, [e.value, e.children, a], e.keywords), m = Ya(), p = Et((S) => S.value && S.value === f.current), v = Et((S) => d || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled)) return S.addEventListener(oa, x), () => S.removeEventListener(oa, x);
  }, [v, e.onSelect, e.disabled]);
  function x() {
    var S, k;
    h(), (k = (S = l.current).onSelect) == null || k.call(S, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: y, keywords: N, ...C } = e;
  return u.createElement(Q.div, { ref: gt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), c2 = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = Ee(), s = u.useRef(null), l = u.useRef(null), d = Ee(), f = Zn(), m = Et((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  Lt(() => f.group(i), []), Wu(i, s, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(Q.div, { ref: gt(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), io(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(_u.Provider, { value: p }, v))));
}), l2 = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Et((i) => !i.search);
  return !n && !a ? null : u.createElement(Q.div, { ref: gt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), d2 = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Ya(), i = Et((d) => d.search), s = Et((d) => d.selectedItemId), l = Zn();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), u2 = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = Et((d) => d.selectedItemId), l = Zn();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let d = i.current, f = a.current, m, p = new ResizeObserver(() => {
        m = requestAnimationFrame(() => {
          let v = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(m), p.unobserve(d);
      };
    }
  }, []), u.createElement(Q.div, { ref: gt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, io(e, (d) => u.createElement("div", { ref: gt(i, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), f2 = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(Li, { open: n, onOpenChange: r }, u.createElement(Om, { container: i }, u.createElement(Vi, { "cmdk-overlay": "", className: o }), u.createElement(Bi, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(Iu, { ref: t, ...s }))));
}), m2 = u.forwardRef((e, t) => Et((n) => n.filtered.count === 0) ? u.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), p2 = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, io(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), Fe = Object.assign(Iu, { List: u2, Item: i2, Input: d2, Group: c2, Separator: l2, Dialog: f2, Empty: m2, Loading: p2 });
function h2(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function v2(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function ju(e) {
  let t = u.useRef(e);
  return Lt(() => {
    t.current = e;
  }), t;
}
var Lt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function Jt(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Et(e) {
  let t = Ya(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function Wu(e, t, n, r = []) {
  let o = u.useRef(), a = Zn();
  return Lt(() => {
    var i;
    let s = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(Qt, s), o.current = s;
  }), o;
}
var g2 = () => {
  let [e, t] = u.useState(), n = Jt(() => /* @__PURE__ */ new Map());
  return Lt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function x2(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function io({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(x2(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var b2 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Fu = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe,
  {
    ref: n,
    className: T(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
Fu.displayName = Fe.displayName;
const $u = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Fd, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Fe.Input,
            {
              ref: n,
              className: T(
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
$u.displayName = Fe.Input.displayName;
const Lu = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.List,
  {
    ref: n,
    className: T("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
Lu.displayName = Fe.List.displayName;
const Vu = M.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Vu.displayName = Fe.Empty.displayName;
const kr = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Group,
  {
    ref: n,
    className: T(
      `text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,
      e
    ),
    ...t
  }
));
kr.displayName = Fe.Group.displayName;
const Bu = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Separator,
  {
    ref: n,
    className: T(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
Bu.displayName = Fe.Separator.displayName;
const Sr = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fe.Item,
  {
    ref: n,
    className: T(
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
Sr.displayName = Fe.Item.displayName;
const oi = ae("ease-in-out transition-all duration-300", {
  variants: {
    variant: {
      default: `border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,
      secondary: `border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,
      destructive: `bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`
    },
    badgeAnimation: {
      bounce: "hover:-translate-y-1 hover:scale-110",
      pulse: "hover:animate-pulse",
      fade: "hover:opacity-80",
      slide: "hover:translate-x-1",
      none: ""
    }
  },
  defaultVariants: {
    variant: "default",
    badgeAnimation: "none"
  }
}), y2 = M.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: r = [],
    placeholder: o = "選択してください",
    placeholderAriaLabel: a = "選択してください",
    triggerDescription: i = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
    noSelectionLabel: s = "オプションが選択されていません",
    searchHelpText: l = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
    searchAriaLabel: d = "利用可能なオプションを検索",
    optionsListAriaLabel: f = "利用可能なオプション",
    selectAllLabel: m = "すべて選択",
    selectAllCountLabel: p = "オプション",
    clearAllLabel: v = "すべてクリア",
    applyLabel: x = "適用",
    moreSelectedLabel: h = "その他",
    searchPlaceholder: g = "オプションを検索...",
    animation: w = 0,
    animationConfig: b,
    maxCount: y = 10,
    modalPopover: N = !1,
    className: C,
    hideSelectAll: S = !1,
    searchable: k = !0,
    emptyIndicator: P = "結果が見つかりません。",
    autoSize: $ = !1,
    singleLine: z = !1,
    popoverClassName: U,
    disabled: V = !1,
    invalid: X = !1,
    responsive: I,
    minWidth: Y,
    maxWidth: L,
    deduplicateOptions: K = !1,
    resetOnDefaultValueChange: D = !0,
    closeOnSelect: W = !1,
    filterByValueAndLabel: R = !1,
    renderOption: H,
    ...E
  }, A) => {
    const [_, F] = M.useState(r), [Z, O] = M.useState(!1), [q, te] = M.useState(!1), [re, ie] = M.useState(""), [ue, ke] = M.useState(""), [De, et] = M.useState(""), Ue = M.useRef(_.length), tt = M.useRef(Z), zt = M.useRef(re), Ie = M.useCallback(
      (j, G = "polite") => {
        G === "assertive" ? (et(j), setTimeout(() => et(""), 100)) : (ke(j), setTimeout(() => ke(""), 100));
      },
      []
    ), Ot = M.useId(), Jn = `${Ot}-listbox`, gn = `${Ot}-description`, Ht = `${Ot}-count`, Yt = M.useRef(r), xn = M.useCallback(
      (j) => {
        const G = j[0];
        return !!(G && typeof G == "object" && "heading" in G);
      },
      []
    ), bn = M.useCallback(
      (j, G) => {
        if (j.length !== G.length) return !1;
        const le = [...j].sort(), ye = [...G].sort();
        return le.every((Ne, Me) => Ne === ye[Me]);
      },
      []
    ), er = M.useCallback(() => {
      F(r), O(!1), ie(""), t(r);
    }, [r, t]), He = M.useRef(null);
    M.useImperativeHandle(
      A,
      () => ({
        reset: er,
        getSelectedValues: () => _,
        setSelectedValues: (j) => {
          F(j), t(j);
        },
        clear: () => {
          F([]), t([]);
        },
        focus: () => {
          if (He.current) {
            He.current.focus();
            const j = He.current.style.outline, G = He.current.style.outlineOffset;
            He.current.style.outline = "2px solid hsl(var(--ring))", He.current.style.outlineOffset = "2px", setTimeout(() => {
              He.current && (He.current.style.outline = j, He.current.style.outlineOffset = G);
            }, 1e3);
          }
        }
      }),
      [er, _, t]
    );
    const [Ye, yn] = M.useState("desktop");
    M.useEffect(() => {
      if (typeof window > "u") return;
      const j = () => {
        const G = window.innerWidth;
        G < 640 ? yn("mobile") : G < 1024 ? yn("tablet") : yn("desktop");
      };
      return j(), window.addEventListener("resize", j), () => {
        typeof window < "u" && window.removeEventListener("resize", j);
      };
    }, []);
    const mt = (() => {
      if (!I)
        return {
          maxCount: y,
          hideIcons: !1,
          compactMode: !1
        };
      if (I === !0) {
        const le = {
          mobile: { maxCount: 2, hideIcons: !1, compactMode: !0 },
          tablet: { maxCount: 4, hideIcons: !1, compactMode: !1 },
          desktop: { maxCount: 6, hideIcons: !1, compactMode: !1 }
        }[Ye];
        return {
          maxCount: (le == null ? void 0 : le.maxCount) ?? y,
          hideIcons: (le == null ? void 0 : le.hideIcons) ?? !1,
          compactMode: (le == null ? void 0 : le.compactMode) ?? !1
        };
      }
      const j = I[Ye];
      return {
        maxCount: (j == null ? void 0 : j.maxCount) ?? y,
        hideIcons: (j == null ? void 0 : j.hideIcons) ?? !1,
        compactMode: (j == null ? void 0 : j.compactMode) ?? !1
      };
    })(), tr = () => {
      if (b != null && b.badgeAnimation)
        switch (b.badgeAnimation) {
          case "bounce":
            return q ? "animate-bounce" : "hover:-translate-y-1 hover:scale-110";
          case "pulse":
            return "hover:animate-pulse";
          case "fade":
            return "hover:opacity-80";
          case "slide":
            return "hover:translate-x-1";
          case "none":
            return "";
          default:
            return "";
        }
      return q ? "animate-bounce" : "";
    }, co = () => {
      if (b != null && b.popoverAnimation)
        switch (b.popoverAnimation) {
          case "scale":
            return "animate-scaleIn";
          case "slide":
            return "animate-slideInDown";
          case "fade":
            return "animate-fadeIn";
          case "flip":
            return "animate-flipIn";
          case "none":
            return "";
          default:
            return "";
        }
      return "";
    }, $e = M.useCallback(() => {
      if (e.length === 0) return [];
      let j;
      xn(e) ? j = e.flatMap((Ne) => Ne.options) : j = e;
      const G = /* @__PURE__ */ new Set(), le = [], ye = [];
      return j.forEach((Ne) => {
        G.has(Ne.value) ? (le.push(Ne.value), K || ye.push(Ne)) : (G.add(Ne.value), ye.push(Ne));
      }), process.env.NODE_ENV === "development" && le.length > 0 && console.warn(
        `MultiSelect: Duplicate option values ${K ? "automatically removed" : "detected"}: ${le.join(
          ", "
        )}. ${K ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
      ), K ? ye : j;
    }, [e, K, xn]), Gt = M.useCallback(
      (j) => {
        const G = $e().find((le) => le.value === j);
        return !G && process.env.NODE_ENV === "development" && console.warn(
          `MultiSelect: Option with value "${j}" not found in options list`
        ), G;
      },
      [$e]
    ), lo = M.useCallback(
      (j, G) => {
        const [le, ye] = j.split(":");
        if (!R)
          return ye && ye.toLowerCase().includes(G.toLowerCase()) ? 1 : 0;
        const Ne = G.toLowerCase();
        return ye && ye.toLowerCase().includes(Ne) || le && le.toLowerCase().includes(Ne) ? 1 : 0;
      },
      [R]
    ), nr = (j) => {
      if (j.key === "Enter")
        O(!0);
      else if (j.key === "Backspace" && !j.currentTarget.value) {
        const G = [..._];
        G.pop(), F(G), t(G);
      }
    }, se = (j) => {
      if (V) return;
      const G = Gt(j);
      if (G != null && G.disabled) return;
      const le = _.includes(j) ? _.filter((ye) => ye !== j) : [..._, j];
      F(le), t(le), W && O(!1);
    }, ve = () => {
      V || (F([]), t([]));
    }, oe = () => {
      V || O((j) => !j);
    }, pe = () => {
      if (V) return;
      const j = _.slice(
        0,
        mt.maxCount
      );
      F(j), t(j);
    }, Oe = () => {
      if (V) return;
      const j = $e().filter((G) => !G.disabled);
      if (_.length === j.length)
        ve();
      else {
        const G = j.map((le) => le.value);
        F(G), t(G);
      }
      W && O(!1);
    }, fe = (j) => {
      if (!j.icon)
        return null;
      const G = j.style;
      return /* @__PURE__ */ c.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: "mr-xs text-body-secondary flex items-center",
          style: G != null && G.iconColor ? { color: G.iconColor } : void 0,
          children: Ae(j.icon, {
            className: "h-4 w-4"
          })
        }
      );
    }, wn = H || ((j) => {
      const { option: G, location: le, onRemove: ye, disabled: Ne } = j;
      if (le === "badge") {
        const Me = G.style, uo = {
          animationDuration: `${w}s`,
          ...(Me == null ? void 0 : Me.badgeColor) && {
            backgroundColor: Me.badgeColor
          },
          ...(Me == null ? void 0 : Me.gradient) && {
            background: Me.gradient,
            color: "white"
          }
        };
        return /* @__PURE__ */ c.jsx(
          ei,
          {
            className: T(
              tr(),
              oi({ variant: n }),
              (Me == null ? void 0 : Me.gradient) && "border-transparent",
              mt.compactMode && "text-xs px-1.5 py-0.5",
              Ye === "mobile" && "max-w-[120px] truncate",
              z && "flex-shrink-0 whitespace-nowrap",
              "[&>svg]:pointer-events-auto",
              Ne && "cursor-not-allowed"
            ),
            style: uo,
            ...!Ne && { onRemove: ye },
            children: G.label
          }
        );
      }
      return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        fe(G),
        /* @__PURE__ */ c.jsx("span", { children: G.label })
      ] });
    });
    M.useEffect(() => {
      if (!D) return;
      const j = Yt.current;
      bn(j, r) || (bn(_, r) || F(r), Yt.current = [...r]);
    }, [r, _, bn, D]);
    const At = {
      minWidth: Y || (Ye === "mobile" ? "0px" : "200px"),
      maxWidth: L || "100%",
      width: $ ? "auto" : "100%"
    };
    return M.useEffect(() => {
      Z || ie("");
    }, [Z]), M.useEffect(() => {
      const j = _.length, G = $e(), le = G.filter((ye) => !ye.disabled).length;
      if (j !== Ue.current) {
        const ye = j - Ue.current;
        if (ye > 0) {
          const Me = _.slice(-ye).map(
            (uo) => {
              var qa;
              return (qa = G.find((Uu) => Uu.value === uo)) == null ? void 0 : qa.label;
            }
          ).filter(Boolean);
          Me.length === 1 ? Ie(
            `${Me[0]} selected. ${j} of ${le} options selected.`
          ) : Ie(
            `${Me.length} options selected. ${j} of ${le} total selected.`
          );
        } else ye < 0 && Ie(
          `Option removed. ${j} of ${le} options selected.`
        );
        Ue.current = j;
      }
      Z !== tt.current && (Ie(
        Z ? `Dropdown opened. ${le} options available. Use arrow keys to navigate.` : "Dropdown closed."
      ), tt.current = Z), re !== zt.current && re !== void 0 && (re && Z && Ie(`Searching for "${re}"`), zt.current = re);
    }, [_, Z, re, Ie, $e]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
        /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
        /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: De })
      ] }),
      /* @__PURE__ */ c.jsxs(
        K1,
        {
          open: Z,
          onOpenChange: O,
          modal: N,
          children: [
            /* @__PURE__ */ c.jsx("div", { id: gn, className: "sr-only", children: i }),
            /* @__PURE__ */ c.jsx("div", { id: Ht, className: "sr-only", "aria-live": "polite", children: _.length === 0 ? s : `${_.length} option${_.length === 1 ? "" : "s"} selected: ${_.map((j) => {
              var G;
              return (G = Gt(j)) == null ? void 0 : G.label;
            }).filter(Boolean).join(", ")}` }),
            /* @__PURE__ */ c.jsxs("div", { className: T($ && "w-auto", C), children: [
              /* @__PURE__ */ c.jsx(q1, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
                "button",
                {
                  ref: He,
                  ...E,
                  onClick: oe,
                  disabled: V,
                  className: T(
                    `focus:ring-interactive-focused border-interactive-default
                  bg-surface-primary hover:border-interactive-hover px-0
                  disabled:bg-surface-disabled
                  has-[:focus]:ring-interactive-focused h-11.5 rounded relative
                  flex w-full items-center border focus:ring-4
                  focus-visible:outline-none disabled:cursor-not-allowed
                  has-[:focus-visible]:border-[var(--chemican-green-800)]
                  has-[:focus-visible]:ring-4 has-[:focus-visible]:outline-0`,
                    $ ? "w-auto" : "w-full",
                    Z && !X && "ring-interactive-focused ring-4",
                    Z && X && "ring-interactive-alert-focused ring-4",
                    mt.compactMode && "min-h-8 text-sm",
                    Ye === "mobile" && "min-h-12"
                  ),
                  style: {
                    ...At,
                    maxWidth: `min(${At.maxWidth}, 100%)`
                  },
                  role: "combobox",
                  "aria-expanded": Z,
                  "aria-haspopup": "listbox",
                  "aria-controls": Z ? Jn : void 0,
                  "aria-describedby": `${gn} ${Ht}`,
                  "aria-label": `Multi-select: ${_.length} of ${$e().length} options selected. ${a}`,
                  children: [
                    _.length > 0 && /* @__PURE__ */ c.jsx(c.Fragment, {}),
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "mx-auto flex w-full items-center justify-between",
                        children: [
                          /* @__PURE__ */ c.jsx(
                            "span",
                            {
                              className: T(
                                "mx-sm",
                                V ? "text-body-disabled" : Z ? "text-body-primary" : "text-body-placeholder"
                              ),
                              children: o
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
                            jd,
                            {
                              className: T(
                                "h-4 mx-xs cursor-pointer",
                                V ? "text-body-disabled" : "text-body-primary"
                              )
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
                _.slice(0, mt.maxCount).map((j) => {
                  const G = Gt(j);
                  return G ? /* @__PURE__ */ c.jsx("div", { children: wn({
                    option: G,
                    location: "badge",
                    onRemove: () => se(j),
                    disabled: V
                  }) }, j) : null;
                }).filter(Boolean),
                _.length > mt.maxCount && /* @__PURE__ */ c.jsxs(
                  ei,
                  {
                    className: T(
                      `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                      tr(),
                      oi({ variant: n }),
                      mt.compactMode && "text-xs px-1.5 py-0.5",
                      z && "flex-shrink-0 whitespace-nowrap",
                      "[&>svg]:pointer-events-auto",
                      V && "cursor-not-allowed"
                    ),
                    ...!V && { onRemove: pe },
                    children: [
                      "+ ",
                      _.length - mt.maxCount,
                      " ",
                      h
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(
              Ru,
              {
                id: Jn,
                role: "listbox",
                "aria-multiselectable": "true",
                "aria-label": f,
                className: T(
                  "p-0 w-auto",
                  co(),
                  Ye === "mobile" && "w-[85vw] max-w-[280px]",
                  Ye === "tablet" && "max-w-md w-[70vw]",
                  Ye === "desktop" && "min-w-[300px]",
                  U
                ),
                style: {
                  animationDuration: `${(b == null ? void 0 : b.duration) || w}s`,
                  animationDelay: `${(b == null ? void 0 : b.delay) || 0}s`,
                  maxWidth: `min(${At.maxWidth}, 85vw)`,
                  maxHeight: Ye === "mobile" ? "70vh" : "60vh",
                  touchAction: "manipulation"
                },
                align: "start",
                children: /* @__PURE__ */ c.jsxs(Fu, { filter: lo, children: [
                  k && /* @__PURE__ */ c.jsx(
                    $u,
                    {
                      placeholder: g,
                      onKeyDown: nr,
                      value: re,
                      onValueChange: ie,
                      "aria-label": d,
                      "aria-describedby": `${Ot}-search-help`
                    }
                  ),
                  k && /* @__PURE__ */ c.jsx("div", { id: `${Ot}-search-help`, className: "sr-only", children: l }),
                  /* @__PURE__ */ c.jsxs(
                    Lu,
                    {
                      className: T(
                        "max-h-[40vh] overflow-y-auto",
                        Ye === "mobile" && "max-h-[50vh]"
                      ),
                      style: { overscrollBehaviorY: "contain" },
                      children: [
                        /* @__PURE__ */ c.jsx(Vu, { children: P }),
                        !S && !re && /* @__PURE__ */ c.jsx(kr, { children: /* @__PURE__ */ c.jsxs(
                          Sr,
                          {
                            value: "select-all",
                            onSelect: Oe,
                            role: "option",
                            "aria-selected": _.length === $e().filter((j) => !j.disabled).length,
                            "aria-label": `Select all ${$e().length} options`,
                            className: "cursor-pointer",
                            children: [
                              /* @__PURE__ */ c.jsx(
                                Cr,
                                {
                                  className: "mr-xs",
                                  checked: _.length === $e().filter((j) => !j.disabled).length
                                }
                              ),
                              /* @__PURE__ */ c.jsxs("span", { children: [
                                "(",
                                m,
                                $e().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                  " - ",
                                  $e().length,
                                  " ",
                                  p
                                ] }) : null,
                                ")"
                              ] })
                            ]
                          },
                          "all"
                        ) }),
                        xn(e) ? e.map((j) => /* @__PURE__ */ c.jsx(kr, { heading: j.heading, children: j.options.map((G) => {
                          const le = _.includes(
                            G.value
                          );
                          return /* @__PURE__ */ c.jsxs(
                            Sr,
                            {
                              value: `${G.value}:${G.label}`,
                              onSelect: () => se(G.value),
                              role: "option",
                              "aria-selected": le,
                              "aria-disabled": G.disabled ?? !1,
                              "aria-label": `${G.label}${le ? ", selected" : ", not selected"}${G.disabled ? ", disabled" : ""}`,
                              className: T(
                                "cursor-pointer",
                                G.disabled && `text-interactive-disabled cursor-not-allowed
                                  opacity-100 data-[disabled=true]:opacity-100`
                              ),
                              disabled: !!G.disabled,
                              children: [
                                /* @__PURE__ */ c.jsx(Cr, { className: "mr-xs", checked: le }),
                                wn({
                                  option: G,
                                  location: "dropdown",
                                  isSelected: le
                                })
                              ]
                            },
                            G.value
                          );
                        }) }, j.heading)) : /* @__PURE__ */ c.jsx(kr, { children: e.map((j) => {
                          const G = _.includes(j.value);
                          return /* @__PURE__ */ c.jsxs(
                            Sr,
                            {
                              value: `${j.value}:${j.label}`,
                              onSelect: () => se(j.value),
                              role: "option",
                              "aria-selected": G,
                              "aria-disabled": j.disabled ?? !1,
                              "aria-label": `${j.label}${G ? ", selected" : ", not selected"}${j.disabled ? ", disabled" : ""}`,
                              className: T(
                                "cursor-pointer",
                                j.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                              ),
                              disabled: !!j.disabled,
                              children: [
                                /* @__PURE__ */ c.jsx(Cr, { className: "mr-xs", checked: G }),
                                wn({
                                  option: j,
                                  location: "dropdown",
                                  isSelected: G
                                })
                              ]
                            },
                            j.value
                          );
                        }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c.jsx(Bu, {}),
                  /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      className: `px-md py-sm bg-surface-primary bottom-0 sticky flex
                  items-center justify-between`,
                      children: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                        /* @__PURE__ */ c.jsx(
                          dt,
                          {
                            intent: "text",
                            size: "xs",
                            className: "min-w-auto",
                            onClick: ve,
                            disabled: _.length === 0,
                            children: v
                          }
                        ),
                        /* @__PURE__ */ c.jsx(
                          dt,
                          {
                            intent: "primary",
                            size: "xs",
                            className: "min-w-auto",
                            onClick: () => O(!1),
                            children: x
                          }
                        )
                      ] })
                    }
                  )
                ] })
              }
            ),
            w > 0 && _.length > 0 && /* @__PURE__ */ c.jsx(
              q0,
              {
                className: T(
                  `my-xs text-body-primary bg-surface-primary w-3 h-3
                cursor-pointer`,
                  q ? "" : "text-body-secondary"
                ),
                onClick: () => te(!q)
              }
            )
          ]
        }
      )
    ] });
  }
);
y2.displayName = "MultiSelect";
const w2 = ae(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  [&[data-placeholder]]:text-body-placeholder
  disabled:[&[data-placeholder]]:text-body-disabled inline-flex items-center
  justify-between border focus:ring-4 focus:outline-0 enabled:cursor-pointer`,
  {
    variants: {
      variant: {
        default: `border-interactive-default p-md hover:border-interactive-hover
        rounded gap-xs h-11.5 w-full`,
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover h-[26px] w-fit border-transparent`
      },
      intent: {
        primary: "",
        secondary: ""
      },
      invalid: {
        false: "focus:ring-interactive-focused",
        true: `border-interactive-alert-default
        focus:ring-interactive-alert-focused`
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
), C2 = ae(
  `bg-surface-primary z-dropdown relative w-full min-w-[8rem] overflow-hidden
  border`,
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
), k2 = ae(
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
), aa = ({
  options: e,
  placeholder: t,
  className: n,
  icon: r,
  invalid: o = !1,
  variant: a = "default",
  intent: i = "primary",
  value: s,
  ...l
}) => {
  const d = {
    ...l
  };
  return s !== void 0 && (d.value = s), /* @__PURE__ */ c.jsxs(Sg, { ...d, children: [
    /* @__PURE__ */ c.jsxs(
      Ng,
      {
        className: T(w2({ variant: a, intent: i, invalid: o }), n),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            Ae(r, {
              className: T("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              Mg,
              {
                placeholder: t || "Select an option",
                className: T({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(
            Eg,
            {
              className: T("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": l.disabled
              }),
              children: /* @__PURE__ */ c.jsx(jd, { className: "top-0.5 relative h-full w-full" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(Pg, { children: /* @__PURE__ */ c.jsxs(
      Rg,
      {
        position: "popper",
        className: T(C2({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(jg, {}),
          /* @__PURE__ */ c.jsx(Dg, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((f, m) => {
            switch (f.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(Og, { children: /* @__PURE__ */ c.jsx(Ag, { children: f.label }) }, m);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  Fg,
                  {
                    className: "border-divider-default m-[5px] h-px border-b"
                  },
                  m
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  Tg,
                  {
                    value: f.value,
                    disabled: f.disabled ?? !1,
                    className: k2({
                      variant: a,
                      isSelected: s === f.value
                    }),
                    children: [
                      Ae(f.icon, {
                        className: T("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": f.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        _g,
                        {
                          className: T("flex-1", {
                            "text-interactive-disabled": f.disabled
                          }),
                          children: f.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(Ig, {})
                    ]
                  },
                  m
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(Wg, {}),
          /* @__PURE__ */ c.jsx($g, {})
        ]
      }
    ) })
  ] });
};
aa.displayName = "Select";
const S2 = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), ai = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), N2 = M.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    totalItems: n,
    onPageChange: r,
    rowsPerPage: o,
    rowsPerPageOptions: a = [10, 25, 50, 100],
    onRowsPerPageChange: i,
    rowsPerPageLabel: s = "表示行数",
    pageSelectLabel: l = "ページ選択",
    formatPageOption: d = (h, g, w) => `${h} / ${g}（全${w}件）`,
    showNavigation: f = !0,
    size: m,
    className: p,
    ...v
  }, x) => {
    const h = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, w = (S) => {
      const k = parseInt(S, 10);
      i(k), e > 1 && r(1);
    }, b = (S) => {
      const k = parseInt(S, 10);
      r(k);
    }, y = a.map((S) => ({
      value: S.toString(),
      label: S.toString()
    })), N = Math.max(t, 1), C = Array.from(
      { length: N },
      (S, k) => k + 1
    ).map((S) => ({
      value: S.toString(),
      label: d(S, N, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: T(S2({ size: m }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: T(ai()), children: s }),
            /* @__PURE__ */ c.jsx(
              aa,
              {
                value: o.toString(),
                onValueChange: w,
                options: y
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: T(ai()), children: l }),
            /* @__PURE__ */ c.jsx(
              aa,
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
              dt,
              {
                intent: "text",
                size: "sm",
                icon: W0,
                onClick: h,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              dt,
              {
                intent: "text",
                size: "sm",
                icon: Wd,
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
N2.displayName = "Pagination";
const M2 = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), E2 = ae(
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
), P2 = ae(
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
), kC = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...i
}) => {
  const s = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: T(M2({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      rg,
      {
        id: s,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: T(
          E2({
            disabled: o,
            invalid: a
          })
        ),
        ...i,
        children: /* @__PURE__ */ c.jsx(og, { className: T(P2({ invalid: a })) })
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "label",
      {
        htmlFor: s,
        className: `gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,
        children: [
          t,
          r
        ]
      }
    )
  ] });
}, SC = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx(ng, { className: T("gap-xs flex flex-col", t), children: e }), R2 = ae(
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
), D2 = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", O2 = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, A2 = ae(
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
), T2 = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, _2 = ae(
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
), I2 = "gap-xs text-sm text-body-secondary flex-row", j2 = ae(
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
), W2 = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, F2 = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", $2 = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, L2 = M.forwardRef(
  ({
    size: e = "md",
    state: t,
    value: n = "",
    className: r,
    onChange: o,
    onSearch: a,
    placeholder: i,
    disabled: s,
    supportText: l,
    searchButtonText: d = "検索",
    searchOnKeywordAdd: f = !1,
    ...m
  }, p) => {
    const v = s || t === "disabled", [x, h] = M.useState([]);
    let g;
    typeof t == "string" ? g = t : v ? g = "disabled" : x.length > 0 ? g = "filled" : g = "default";
    const w = M.useRef(g);
    di(() => {
      w.current === "filled" && g !== "filled" && h([]), w.current = g;
    }, [g]);
    const b = (C) => {
      v || o && o(C);
    }, y = (C) => {
      if (!v) {
        if (C.key === "Enter" && n.trim()) {
          const S = [...x, n.trim()];
          if (h(S), o) {
            const k = {
              ...C,
              target: { value: "" }
            };
            o(k);
          }
          f && a && a(S), C.preventDefault();
        }
        if ((C.key === "Backspace" || C.key === "Delete") && !n && x.length > 0) {
          const S = x.slice(0, -1);
          h(S), f && a && a(S), C.preventDefault();
        }
      }
    }, N = (C) => {
      if (v) return;
      const S = x.filter((k, P) => P !== C);
      h(S), f && a && a(S);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: T(
          "gap-xxs group flex flex-col",
          v ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": v ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: T(
                R2({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: T(D2), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: T(F2, O2), children: [
                    /* @__PURE__ */ c.jsx("span", { className: T(A2({ size: e })), children: /* @__PURE__ */ c.jsx(Fd, { size: $2[e] }) }),
                    x.map((C, S) => /* @__PURE__ */ c.jsxs("span", { className: j2(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: T(
                            W2,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (k) => {
                            k.stopPropagation(), k.preventDefault(), N(S);
                          },
                          onMouseDown: (k) => {
                            k.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: v,
                          children: /* @__PURE__ */ c.jsx(Qo, { size: 8 })
                        }
                      )
                    ] }, S)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: T(T2),
                        type: "text",
                        value: n,
                        onChange: b,
                        onKeyDown: y,
                        placeholder: g === "filled" || x.length > 0 ? "" : i,
                        disabled: v,
                        ...m
                      }
                    )
                  ] }),
                  (n || x.length > 0) && !v && /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), a == null || a([]), h([]);
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ c.jsx(Qo, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: T(
                      _2({
                        size: e
                      })
                    ),
                    onClick: () => a == null ? void 0 : a(x),
                    disabled: v,
                    children: d
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: T(
                I2,
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
L2.displayName = "SearchBar";
const zu = ci(void 0), V2 = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = M.useState(e), o = M.useCallback(() => {
    r((i) => !i);
  }, []), a = M.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ c.jsx(zu.Provider, { value: a, children: t });
}, Qn = () => {
  const e = li(zu);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  return e;
}, Hu = M.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = Qn();
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: n,
      className: T(
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
      children: r ? /* @__PURE__ */ c.jsx($0, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(I0, { className: "size-5", strokeWidth: 2 })
    }
  );
});
Hu.displayName = "SideNavigationCollapseButton";
const B2 = ae(
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
), z2 = M.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(V2, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(Yu, { ref: n, ...t }) }));
z2.displayName = "SideNavigation";
const Yu = M.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    ...i
  }, s) => {
    const { isCollapsed: l } = Qn();
    M.useEffect(() => {
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
        ref: s,
        className: T(
          B2({ width: d }),
          "group",
          e
        ),
        "data-collapsed": l,
        ...i,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: T(
                "p-sm",
                l ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: r }),
          a && /* @__PURE__ */ c.jsx(Hu, {})
        ]
      }
    );
  }
);
Yu.displayName = "SideNavigationContent";
const H2 = ae(
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
), Y2 = M.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    label: o,
    children: a,
    disabled: i,
    ...s
  }, l) => {
    const { isCollapsed: d } = Qn(), f = r ? Ir : "button", m = i ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      f,
      {
        ref: l,
        className: T(
          H2({
            variant: m,
            size: n,
            collapsed: d
          }),
          e
        ),
        disabled: i,
        ...s,
        children: a || o
      }
    );
  }
);
Y2.displayName = "SideNavigationItem";
const G2 = ae("flex flex-col", {
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
}), U2 = M.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: i } = Qn();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: T(
        G2({ isCollapsed: i, isLast: r }),
        e
      ),
      ...o,
      children: [
        t && !i && /* @__PURE__ */ c.jsx(
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
U2.displayName = "SideNavigationSection";
const K2 = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", q2 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", NC = () => {
  const { isCollapsed: e } = Qn();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: K2,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: q2,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, X2 = ae(
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
), Z2 = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), MC = ({
  children: e,
  className: t,
  level: n,
  customColor: r,
  size: o = "md",
  onRemove: a,
  indicator: i
}) => {
  const s = !!i;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: T(
        X2({
          size: o,
          hasRemove: !!a,
          hasIndicator: s,
          level: i ? void 0 : n,
          indicator: i
        }),
        t
      ),
      style: !i && r ? {
        backgroundColor: `var(${r})`
      } : void 0,
      children: [
        s && i && /* @__PURE__ */ c.jsx("div", { className: Z2({ indicator: i }) }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: e }),
        !!a && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: T(
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
}, Q2 = M.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...a
  }, i) => {
    const s = M.useMemo(() => n !== void 0 ? t.map((l, d) => ({
      ...l,
      status: d < n ? "completed" : d === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ c.jsx(
      Gu,
      {
        ref: i,
        className: e,
        steps: s,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: i, className: T("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: s.map((l, d) => /* @__PURE__ */ c.jsxs(M.Fragment, { children: [
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "size-8 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: T(
                    `relative box-content flex items-center justify-center
                      rounded-full transition-colors`,
                    l.status === "completed" ? `bg-shape-interactive-primary-default
                          text-interactive-inverse size-4.5` : void 0,
                    l.status === "active" ? `bg-interactive-primary-default
                          text-interactive-inverse
                          ring-shape-interactive-primary-active/20 size-2.5
                          ring-4` : void 0,
                    l.status === "upcoming" ? "bg-status-neutral text-body-primary size-2.5" : void 0
                  ),
                  children: l.status === "completed" && /* @__PURE__ */ c.jsx(
                    Id,
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
              className: T(
                `mt-xs max-w-20 absolute top-full min-w-max text-center
                      break-words transition-colors`,
                l.status === "completed" || l.status === "active" ? "text-body-primary font-medium" : void 0,
                l.status === "upcoming" ? "text-body-secondary" : void 0
              ),
              children: l.label
            }
          )
        ] }),
        d < s.length - 1 && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: T(
              "h-0.25 flex-1 transition-colors",
              l.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, l.id)) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "h-8" })
    ] });
  }
), Gu = M.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, i = n !== void 0 ? n : t.findIndex((v) => v.status === "active"), s = Math.max(
    0,
    Math.min(i, a - 1)
  ), l = t[s] || t[0], d = a > 0 ? (s + 1) / a * 100 : 0, f = 2 * Math.PI * 24, m = f, p = f - d / 100 * f;
  return /* @__PURE__ */ c.jsx("div", { ref: o, className: T("space-y-6", e), ...r, children: /* @__PURE__ */ c.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
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
                children: s + 1
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
Gu.displayName = "RadialStepper";
Q2.displayName = "Stepper";
function EC({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    Hg,
    {
      "data-slot": "switch",
      className: T(
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
      ...t,
      children: /* @__PURE__ */ c.jsx(
        Yg,
        {
          "data-slot": "switch-thumb",
          className: T(
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
}
const J2 = M.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("div", { className: "border-surface-default bg-surface-primary relative border", children: /* @__PURE__ */ c.jsx(
    "table",
    {
      ref: r,
      className: T("w-full caption-bottom", e),
      ...n,
      children: t
    }
  ) })
);
J2.displayName = "Table";
const eC = M.forwardRef(
  ({ className: e, loading: t = !1, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "thead",
    {
      ref: o,
      className: T(
        "text-sm bg-surface-tertiary h-10 top-0 leading-tight sticky",
        e
      ),
      ...r,
      children: [
        n,
        t && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
          Ba.Linear,
          {
            indeterminate: !0,
            className: `bg-surface-primary border-b-divider-default box-content
                border-b`
          }
        ) }) })
      ]
    }
  )
);
eC.displayName = "TableHeader";
const tC = M.forwardRef(
  ({
    className: e,
    loading: t = !1,
    loadingText: n = "ローディング中…",
    colSpan: r = 1,
    children: o,
    ...a
  }, i) => /* @__PURE__ */ c.jsx("tbody", { ref: i, className: e, ...a, children: t ? /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx(
    "td",
    {
      colSpan: r,
      className: "py-sm min-h-12 px-[1.44rem] text-center align-middle",
      children: n
    }
  ) }) : o })
);
tC.displayName = "TableBody";
const nC = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: T("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
nC.displayName = "TableFooter";
const rC = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: T(
      `border-surface-default hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected h-12 border-b
      transition-colors`,
      e
    ),
    ...t
  }
));
rC.displayName = "TableRow";
const oC = M.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: T(
      `text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-sm [&:has([role=checkbox])]:pr-0 max-w-[400px]
      px-[1.44rem] text-left [&:has([role=checkbox])]:max-w-none`,
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
oC.displayName = "TableHead";
const aC = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: T(
      `py-sm [&:has([role=checkbox])]:pr-0 px-md text-md align-middle
      leading-none`,
      e
    ),
    ...t
  }
));
aC.displayName = "TableCell";
const sC = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: T("text-body-primary mt-md text-sm", e),
    ...t
  }
));
sC.displayName = "TableCaption";
const PC = M.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  "button",
  {
    ref: r,
    className: T(
      `text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Sort" }),
      e === "asc" ? /* @__PURE__ */ c.jsx(E0, { className: "h-4 w-4" }) : e === "desc" ? /* @__PURE__ */ c.jsx(N0, { className: "h-4 w-4" }) : /* @__PURE__ */ c.jsx(R0, { className: "h-4 w-4" })
    ]
  }
)), iC = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), cC = ae(
  `text-body-primary border-divider-default hover:border-interactive-hover
  data-[state=active]:border-interactive-selected data-[state=active]:font-bold
  disabled:text-interactive-disabled disabled:hover:border-divider-default
  relative inline-flex cursor-pointer items-center justify-center border-b pb-px
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  hover:pb-[calc(1rem-1px)] disabled:cursor-not-allowed disabled:hover:border-b
  data-[state=active]:border-b-2 data-[state=active]:pb-[calc(1rem-1px)]
  data-[state=active]:text-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: "p-md min-h-12 text-lg",
        small: "p-sm min-h-10 text-md"
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
), lC = M.forwardRef(({ className: e, size: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(qg, { ref: o, className: T("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(Xg, { className: T(iC({ size: t })), role: "tablist", children: n }) }));
lC.displayName = "TabBar";
const dC = M.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => /* @__PURE__ */ c.jsx(
  Zg,
  {
    ref: a,
    className: T(cC({ size: t }), e),
    disabled: r,
    ...o,
    children: n
  }
));
dC.displayName = "Tab";
const uC = ae(
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
), fC = M.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const [i, s] = M.useState(o.value || ""), l = (d) => {
      if (n && d.target.value.length > n) {
        d.preventDefault();
        return;
      }
      s(d.target.value), o.onChange && o.onChange(d);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          ref: a,
          className: T(uC({ invalid: e }), t),
          ...o,
          value: i,
          onChange: l
        }
      ),
      !!(n && r) && /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        i.toString().length,
        "/",
        n
      ] })
    ] });
  }
);
fC.displayName = "TextArea";
const mC = ae(
  `font-normal inline-flex items-center justify-center border border-transparent
  decoration-solid decoration-from-font underline-offset-[3px] transition-colors
  [:not(:hover):not(:active)]:underline`,
  {
    variants: {
      intent: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,
        secondary: `text-body-primary hover:text-interactive-primary-hover
        active:text-interactive-primary-active`
      },
      size: {
        lg: "gap-xxs text-lg",
        md: "gap-xxxs text-md",
        sm: "gap-xxxs text-sm",
        xs: "gap-xxxs text-xs"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), pC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, hC = M.forwardRef(
  ({
    className: e,
    intent: t = "primary",
    size: n = "md",
    asChild: r = !1,
    leadingIcon: o,
    trailingIcon: a,
    children: i,
    onClick: s,
    ...l
  }, d) => {
    const f = r ? Ir : "a", m = pC[n], p = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Ae(o, { size: m }) }),
      /* @__PURE__ */ c.jsx("span", { className: "flex-1", children: i }),
      a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Ae(a, { size: m }) })
    ] });
    return /* @__PURE__ */ c.jsx(
      f,
      {
        ref: d,
        className: T(mC({ intent: t, size: n }), e),
        onClick: s,
        ...l,
        children: p
      }
    );
  }
);
hC.displayName = "TextLink";
const RC = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsxs(h0, { children: [
  /* @__PURE__ */ c.jsx(
    g0,
    {
      open: n,
      onOpenChange: r,
      className: `border-surface-default bg-surface-primary p-md
          text-body-primary shadow-high w-96 rounded border-1`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-start justify-between", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-start", children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            o === "success" && /* @__PURE__ */ c.jsx(
              $d,
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
            o === "info" && /* @__PURE__ */ c.jsx(
              wr,
              {
                className: "h-md text-shape-status-info w-md"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx(x0, { className: "text-body-primary font-bold", children: /* @__PURE__ */ c.jsx("h5", { className: "mb-xxs text-md leading-none", children: t }) }),
            /* @__PURE__ */ c.jsx(b0, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md", children: e }) })
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(y0, { asChild: !0, altText: "Close", className: "pt-xxxs", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "cursor-pointer", children: /* @__PURE__ */ c.jsx(Qo, { className: "h-md text-body-primary w-md" }) }) }) })
      ] })
    }
  ),
  /* @__PURE__ */ c.jsx(v0, {})
] }), si = ae(
  `focus-visible:ring-interactive-focused rounded-lg relative cursor-pointer
  border-1 border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      size: {
        small: "p-md min-h-20",
        large: "pt-xxl pb-xxxl px-xl"
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
), vC = M.forwardRef(
  ({
    className: e,
    size: t,
    state: n,
    onFileSelect: r,
    accept: o,
    multiple: a = !1,
    disabled: i = !1,
    progress: s,
    fileName: l,
    fileSize: d,
    errorMessage: f,
    successMessage: m,
    onFileRemove: p,
    dragDropText: v = "ここにドラッグ&ドロップ",
    orText: x = "または",
    selectFileText: h = "ファイルを選択",
    dropFilesText: g = "ここにファイルをドロップ",
    uploadingText: w = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: y = "アップロードに失敗しました",
    ...N
  }, C) => {
    const [S, k] = On(!1), P = Dn(null), $ = Se(
      (E) => {
        E.preventDefault(), E.stopPropagation(), S || k(!0);
      },
      [S]
    ), z = Se((E) => {
      E.preventDefault(), E.stopPropagation(), k(!1);
    }, []), U = Se((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), V = Se(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), k(!1), i) return;
        const A = E.dataTransfer.files;
        A && A.length > 0 && (r == null || r(A));
      },
      [i, r]
    ), X = Se(() => {
      var E;
      i || (E = P.current) == null || E.click();
    }, [i]), I = Se(
      (E) => {
        const A = E.target.files;
        A && A.length > 0 && (r == null || r(A));
      },
      [r]
    ), Y = S ? "dragging" : n, L = () => /* @__PURE__ */ c.jsx(
      H0,
      {
        className: "text-shape-interactive-primary-default",
        size: t === "large" ? 60 : 32
      }
    ), K = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        dt,
        {
          size: "xs",
          intent: "tertiary",
          icon: As,
          onClick: (E) => {
            E.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), D = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-sm flex flex-col items-center", children: [
      L(),
      /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex flex-col text-center", children: [
        /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-medium", children: [
          g,
          /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
        ] }),
        /* @__PURE__ */ c.jsx(
          dt,
          {
            size: "xs",
            intent: "tertiary",
            className: "self-center",
            icon: As,
            onClick: (E) => {
              E.stopPropagation(), X();
            },
            children: h
          }
        )
      ] })
    ] }), W = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: T(si({ size: t, state: "default", disabled: i })),
        onDragEnter: $,
        onDragLeave: z,
        onDragOver: U,
        onDrop: V,
        onClick: X,
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-disabled": i,
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
              disabled: i
            }
          ),
          t === "small" ? K() : D()
        ]
      }
    ), R = () => {
      const E = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return Y === "inProgress" && s !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
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
          Ba.Linear,
          {
            indeterminate: !s,
            value: s,
            className: "h-1"
          }
        ) })
      ] }) : Y === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (A) => {
                A.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(ox, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            B0,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: m || b })
        ] })
      ] }) : Y === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || E }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(k0, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || y })
        ] })
      ] }) : null;
    }, H = () => t === "small" ? K() : D();
    return Y === "inProgress" && s !== void 0 || Y === "success" || Y === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: T(e), ...N, children: [
      W(),
      R()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: T(
          si({ size: t, state: Y, disabled: i }),
          e
        ),
        onDragEnter: $,
        onDragLeave: z,
        onDragOver: U,
        onDrop: V,
        onClick: X,
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-disabled": i,
        ...N,
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
              disabled: i
            }
          ),
          H()
        ]
      }
    );
  }
);
vC.displayName = "FileUploader";
export {
  $x as Badge,
  Bx as Breadcrumbs,
  dt as Button,
  Eu as Calendar,
  P1 as Callout,
  Cr as Checkbox,
  O1 as CheckboxGroup,
  j1 as DatePicker,
  wC as Dialog,
  H1 as Dropdown,
  z1 as DropdownContent,
  L1 as DropdownItem,
  B1 as DropdownLabel,
  V1 as DropdownSeparator,
  Y1 as DropdownTrigger,
  vC as FileUploader,
  CC as FormField,
  NC as Logo,
  y2 as MultiSelect,
  N2 as Pagination,
  Ba as ProgressIndicator,
  kC as RadioButton,
  SC as RadioButtonGroup,
  L2 as SearchBar,
  aa as Select,
  z2 as SideNavigation,
  Hu as SideNavigationCollapseButton,
  Y2 as SideNavigationItem,
  V2 as SideNavigationProvider,
  U2 as SideNavigationSection,
  MC as StatusIndicator,
  Q2 as Stepper,
  EC as Switch,
  dC as Tab,
  lC as TabBar,
  J2 as Table,
  tC as TableBody,
  sC as TableCaption,
  aC as TableCell,
  nC as TableFooter,
  oC as TableHead,
  PC as TableHeadSortButton,
  eC as TableHeader,
  rC as TableRow,
  ei as Tag,
  fC as TextArea,
  Pu as TextField,
  hC as TextLink,
  RC as Toast,
  Qn as useSideNavigation
};
