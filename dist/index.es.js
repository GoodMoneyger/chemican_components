import * as u from "react";
import N, { useState as an, useLayoutEffect as Ci, forwardRef as Cf, createElement as wo, createContext as xa, useContext as ba, useCallback as Me, useRef as Tn, useEffect as Si, useMemo as Co } from "react";
import * as Bn from "react-dom";
import Sf from "react-dom";
var lr = { exports: {} }, Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function kf() {
  if (us) return Nn;
  us = 1;
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
  return Nn.Fragment = t, Nn.jsx = n, Nn.jsxs = n, Nn;
}
var En = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Mf() {
  return fs || (fs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === z ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case h:
          return "Fragment";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case C:
          return "Suspense";
        case M:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case x:
            return "Portal";
          case w:
            return (R.displayName || "Context") + ".Provider";
          case b:
            return (R._context.displayName || "Context") + ".Consumer";
          case k:
            var G = R.render;
            return R = R.displayName, R || (R = G.displayName || G.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case S:
            return G = R.displayName || null, G !== null ? G : e(R.type) || "Memo";
          case P:
            G = R._payload, R = R._init;
            try {
              return e(R(G));
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
        var G = !1;
      } catch {
        G = !0;
      }
      if (G) {
        G = console;
        var E = G.error, _ = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return E.call(
          G,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(R);
      }
    }
    function r(R) {
      if (R === h) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === P)
        return "<...>";
      try {
        var G = e(R);
        return G ? "<" + G + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = V.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (q.call(R, "key")) {
        var G = Object.getOwnPropertyDescriptor(R, "key").get;
        if (G && G.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, G) {
      function E() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          G
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return I[R] || (I[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, G, E, _, H, B, W, D) {
      return E = B.ref, R = {
        $$typeof: v,
        type: R,
        key: G,
        props: B,
        _owner: H
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
        value: W
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, G, E, _, H, B, W, D) {
      var Y = G.children;
      if (Y !== void 0)
        if (_)
          if (X(Y)) {
            for (_ = 0; _ < Y.length; _++)
              m(Y[_]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(Y);
      if (q.call(G, "key")) {
        Y = e(R);
        var Q = Object.keys(G).filter(function(se) {
          return se !== "key";
        });
        _ = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", j[Y + _] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          Y,
          Q,
          Y
        ), j[Y + _] = !0);
      }
      if (Y = null, E !== void 0 && (n(E), Y = "" + E), s(G) && (n(G.key), Y = "" + G.key), "key" in G) {
        E = {};
        for (var re in G)
          re !== "key" && (E[re] = G[re]);
      } else E = G;
      return Y && i(
        E,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        Y,
        B,
        H,
        o(),
        E,
        W,
        D
      );
    }
    function m(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var p = N, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), V = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, X = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var U, I = {}, Z = p.react_stack_bottom_frame.bind(
      p,
      a
    )(), A = T(r(a)), j = {};
    En.Fragment = h, En.jsx = function(R, G, E, _, H) {
      var B = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        R,
        G,
        E,
        !1,
        _,
        H,
        B ? Error("react-stack-top-frame") : Z,
        B ? T(r(R)) : A
      );
    }, En.jsxs = function(R, G, E, _, H) {
      var B = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        R,
        G,
        E,
        !0,
        _,
        H,
        B ? Error("react-stack-top-frame") : Z,
        B ? T(r(R)) : A
      );
    };
  })()), En;
}
var ms;
function Nf() {
  return ms || (ms = 1, process.env.NODE_ENV === "production" ? lr.exports = kf() : lr.exports = Mf()), lr.exports;
}
var c = Nf();
function ki(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ki(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Mi() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ki(e)) && (r && (r += " "), r += t);
  return r;
}
const ps = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hs = Mi, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return hs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = ps(f) || ps(m);
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
  return hs(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function vs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function gt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = vs(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : vs(e[o], null);
        }
      };
  };
}
function ie(...e) {
  return u.useCallback(gt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = /* @__PURE__ */ Ef(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(Rf);
    if (l) {
      const d = l.props.children, f = i.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Vr = /* @__PURE__ */ kt("Slot");
// @__NO_SIDE_EFFECTS__
function Ef(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = Df(o), i = Af(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? gt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ni = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Pf(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ni, t;
}
function Rf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ni;
}
function Af(e, t) {
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
function Df(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Of = [
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
], J = Of.reduce((e, t) => {
  const n = /* @__PURE__ */ kt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ya(e, t) {
  e && Bn.flushSync(() => e.dispatchEvent(t));
}
var Ei = Object.freeze({
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
}), _f = "VisuallyHidden", Br = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    J.span,
    {
      ...e,
      ref: t,
      style: { ...Ei, ...e.style }
    }
  )
);
Br.displayName = _f;
var Tf = Br;
function jf(e, t) {
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
function De(e, t = []) {
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
  return o.scopeName = e, [r, If(o, ...t)];
}
function If(...e) {
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
function zr(e) {
  const t = e + "CollectionProvider", [n, r] = De(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: g, children: y } = h, b = N.useRef(null), w = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: y });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ kt(i), d = N.forwardRef(
    (h, g) => {
      const { scope: y, children: b } = h, w = a(i, y), k = ie(g, w.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: k, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ kt(f), v = N.forwardRef(
    (h, g) => {
      const { scope: y, children: b, ...w } = h, k = N.useRef(null), C = ie(g, k), M = a(f, y);
      return N.useEffect(() => (M.itemMap.set(k, { ref: k, ...w }), () => void M.itemMap.delete(k))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
    }
  );
  v.displayName = f;
  function x(h) {
    const g = a(e + "CollectionConsumer", h);
    return N.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, S) => w.indexOf(M.ref.current) - w.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: v },
    x,
    r
  ];
}
function $(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Re = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Lf = u[" useInsertionEffect ".trim().toString()] || Re;
function Ue({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Wf({
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
        const p = Ff(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function Wf({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return Lf(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Ff(e) {
  return typeof e == "function";
}
function $f(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Oe = (e) => {
  const { present: t, children: n } = e, r = Vf(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = ie(r.ref, Bf(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Oe.displayName = "Presence";
function Vf(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = $f(s, {
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
    const d = dr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Re(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, v = dr(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Re(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = dr(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = dr(r.current));
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
function dr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Bf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var zf = u[" useId ".trim().toString()] || (() => {
}), Hf = 0;
function Ne(e) {
  const [t, n] = u.useState(zf());
  return Re(() => {
    n((r) => r ?? String(Hf++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Yf = u.createContext(void 0);
function zn(e) {
  const t = u.useContext(Yf);
  return e || t || "ltr";
}
function Le(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Gf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Uf = "DismissableLayer", Go = "dismissableLayer.update", Kf = "dismissableLayer.pointerDownOutside", qf = "dismissableLayer.focusOutside", gs, Pi = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bt = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = u.useContext(Pi), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = ie(t, (S) => m(S)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g), b = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, k = b >= y, C = Zf((S) => {
      const P = S.target, F = [...d.branches].some((z) => z.contains(P));
      !k || F || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p), M = Qf((S) => {
      const P = S.target;
      [...d.branches].some((z) => z.contains(P)) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p);
    return Gf((S) => {
      b === d.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (gs = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), xs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = gs);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), xs());
    }, [f, d]), u.useEffect(() => {
      const S = () => v({});
      return document.addEventListener(Go, S), () => document.removeEventListener(Go, S);
    }, []), /* @__PURE__ */ c.jsx(
      J.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: w ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: $(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: $(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Bt.displayName = Uf;
var Xf = "DismissableLayerBranch", Ri = u.forwardRef((e, t) => {
  const n = u.useContext(Pi), r = u.useRef(null), o = ie(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(J.div, { ...e, ref: o });
});
Ri.displayName = Xf;
function Zf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Ai(
            Kf,
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
function Qf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Ai(qf, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function xs() {
  const e = new CustomEvent(Go);
  document.dispatchEvent(e);
}
function Ai(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ya(o, a) : o.dispatchEvent(a);
}
var Jf = Bt, em = Ri, So = "focusScope.autoFocusOnMount", ko = "focusScope.autoFocusOnUnmount", bs = { bubbles: !1, cancelable: !0 }, tm = "FocusScope", Hn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = Le(o), f = Le(a), m = u.useRef(null), p = ie(t, (h) => l(h)), v = u.useRef({
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
        const k = w.target;
        i.contains(k) ? m.current = k : Ct(m.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !i) return;
        const k = w.relatedTarget;
        k !== null && (i.contains(k) || Ct(m.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && Ct(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, v.paused]), u.useEffect(() => {
    if (i) {
      ws.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(So, bs);
        i.addEventListener(So, d), i.dispatchEvent(y), y.defaultPrevented || (nm(im(Di(i)), { select: !0 }), document.activeElement === h && Ct(i));
      }
      return () => {
        i.removeEventListener(So, d), setTimeout(() => {
          const y = new CustomEvent(ko, bs);
          i.addEventListener(ko, f), i.dispatchEvent(y), y.defaultPrevented || Ct(h ?? document.body, { select: !0 }), i.removeEventListener(ko, f), ws.remove(v);
        }, 0);
      };
    }
  }, [i, d, f, v]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (g && y) {
        const b = h.currentTarget, [w, k] = rm(b);
        w && k ? !h.shiftKey && y === k ? (h.preventDefault(), n && Ct(w, { select: !0 })) : h.shiftKey && y === w && (h.preventDefault(), n && Ct(k, { select: !0 })) : y === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(J.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
Hn.displayName = tm;
function nm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ct(r, { select: t }), document.activeElement !== n) return;
}
function rm(e) {
  const t = Di(e), n = ys(t, e), r = ys(t.reverse(), e);
  return [n, r];
}
function Di(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ys(e, t) {
  for (const n of e)
    if (!om(n, { upTo: t })) return n;
}
function om(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function am(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && am(e) && t && e.select();
  }
}
var ws = sm();
function sm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Cs(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Cs(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Cs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function im(e) {
  return e.filter((t) => t.tagName !== "A");
}
var cm = "Portal", zt = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Re(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Sf.createPortal(/* @__PURE__ */ c.jsx(J.div, { ...r, ref: t }), s) : null;
});
zt.displayName = cm;
var Mo = 0;
function Hr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ss()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ss()), Mo++, () => {
      Mo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Mo--;
    };
  }, []);
}
function Ss() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ot = function() {
  return ot = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ot.apply(this, arguments);
};
function Oi(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function lm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var kr = "right-scroll-bar-position", Mr = "width-before-scroll-bar", dm = "with-scroll-bars-hidden", um = "--removed-body-scroll-bar-size";
function No(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fm(e, t) {
  var n = an(function() {
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
var mm = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ks = /* @__PURE__ */ new WeakMap();
function pm(e, t) {
  var n = fm(null, function(r) {
    return e.forEach(function(o) {
      return No(o, r);
    });
  });
  return mm(function() {
    var r = ks.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || No(i, null);
      }), a.forEach(function(i) {
        o.has(i) || No(i, s);
      });
    }
    ks.set(n, e);
  }, [e]), n;
}
function hm(e) {
  return e;
}
function vm(e, t) {
  t === void 0 && (t = hm);
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
function gm(e) {
  e === void 0 && (e = {});
  var t = vm(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var _i = function(e) {
  var t = e.sideCar, n = Oi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ot({}, n));
};
_i.isSideCarExport = !0;
function xm(e, t) {
  return e.useMedium(t), _i;
}
var Ti = gm(), Eo = function() {
}, Yr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Eo,
    onWheelCapture: Eo,
    onTouchMoveCapture: Eo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, k = Oi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, M = pm([n, t]), S = ot(ot({}, k), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: Ti, removeScrollBar: d, shards: m, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), ot(ot({}, S), { ref: M })) : u.createElement(b, ot({}, S, { className: l, ref: M }), i)
  );
});
Yr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yr.classNames = {
  fullWidth: Mr,
  zeroRight: kr
};
var bm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ym() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = bm();
  return t && e.setAttribute("nonce", t), e;
}
function wm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cm(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Sm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ym()) && (wm(t, n), Cm(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, km = function() {
  var e = Sm();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ji = function() {
  var e = km(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Mm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Po = function(e) {
  return parseInt(e || "", 10) || 0;
}, Nm = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Po(n), Po(r), Po(o)];
}, Em = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Mm;
  var t = Nm(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Pm = ji(), nn = "data-scroll-locked", Rm = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(nn, `] {
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
  
  .`).concat(kr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Mr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(kr, " .").concat(kr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mr, " .").concat(Mr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nn, `] {
    `).concat(um, ": ").concat(i, `px;
  }
`);
}, Ms = function() {
  var e = parseInt(document.body.getAttribute(nn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Am = function() {
  u.useEffect(function() {
    return document.body.setAttribute(nn, (Ms() + 1).toString()), function() {
      var e = Ms() - 1;
      e <= 0 ? document.body.removeAttribute(nn) : document.body.setAttribute(nn, e.toString());
    };
  }, []);
}, Dm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Am();
  var a = u.useMemo(function() {
    return Em(o);
  }, [o]);
  return u.createElement(Pm, { styles: Rm(a, !t, o, n ? "" : "!important") });
}, Uo = !1;
if (typeof window < "u")
  try {
    var ur = Object.defineProperty({}, "passive", {
      get: function() {
        return Uo = !0, !0;
      }
    });
    window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    Uo = !1;
  }
var qt = Uo ? { passive: !1 } : !1, Om = function(e) {
  return e.tagName === "TEXTAREA";
}, Ii = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Om(e) && n[t] === "visible")
  );
}, _m = function(e) {
  return Ii(e, "overflowY");
}, Tm = function(e) {
  return Ii(e, "overflowX");
}, Ns = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Li(e, r);
    if (o) {
      var a = Wi(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, jm = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Im = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Li = function(e, t) {
  return e === "v" ? _m(t) : Tm(t);
}, Wi = function(e, t) {
  return e === "v" ? jm(t) : Im(t);
}, Lm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wm = function(e, t, n, r, o) {
  var a = Lm(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var v = Wi(e, i), x = v[0], h = v[1], g = v[2], y = h - g - a * x;
    (x || y) && Li(e, i) && (m += y, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, fr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Es = function(e) {
  return [e.deltaX, e.deltaY];
}, Ps = function(e) {
  return e && "current" in e ? e.current : e;
}, Fm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $m = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Vm = 0, Xt = [];
function Bm(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Vm++)[0], a = u.useState(ji)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = lm([e.lockRef.current], (e.shards || []).map(Ps), !0).filter(Boolean);
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
    var y = fr(h), b = n.current, w = "deltaX" in h ? h.deltaX : b[0] - y[0], k = "deltaY" in h ? h.deltaY : b[1] - y[1], C, M = h.target, S = Math.abs(w) > Math.abs(k) ? "h" : "v";
    if ("touches" in h && S === "h" && M.type === "range")
      return !1;
    var P = Ns(S, M);
    if (!P)
      return !0;
    if (P ? C = S : (C = S === "v" ? "h" : "v", P = Ns(S, M)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (w || k) && (r.current = C), !C)
      return !0;
    var F = r.current || C;
    return Wm(F, g, h, F === "h" ? w : k);
  }, []), l = u.useCallback(function(h) {
    var g = h;
    if (!(!Xt.length || Xt[Xt.length - 1] !== a)) {
      var y = "deltaY" in g ? Es(g) : fr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Fm(C.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(Ps).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = w.length > 0 ? i(g, w[0]) : !s.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, g, y, b) {
    var w = { name: h, delta: g, target: y, should: b, shadowParent: zm(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = fr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, Es(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, fr(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Xt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, qt), document.addEventListener("touchmove", l, qt), document.addEventListener("touchstart", f, qt), function() {
      Xt = Xt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, qt), document.removeEventListener("touchmove", l, qt), document.removeEventListener("touchstart", f, qt);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: $m(o) }) : null,
    v ? u.createElement(Dm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function zm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Hm = xm(Ti, Bm);
var Yn = u.forwardRef(function(e, t) {
  return u.createElement(Yr, ot({}, e, { ref: t, sideCar: Hm }));
});
Yn.classNames = Yr.classNames;
var Ym = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Zt = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), pr = {}, Ro = 0, Fi = function(e) {
  return e && (e.host || Fi(e.parentNode));
}, Gm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Fi(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Um = function(e, t, n, r) {
  var o = Gm(t, Array.isArray(e) ? e : [e]);
  pr[n] || (pr[n] = /* @__PURE__ */ new WeakMap());
  var a = pr[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (Zt.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Zt.set(p, h), a.set(p, g), s.push(p), h === 1 && x && mr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Ro++, function() {
    s.forEach(function(m) {
      var p = Zt.get(m) - 1, v = a.get(m) - 1;
      Zt.set(m, p), a.set(m, v), p || (mr.has(m) || m.removeAttribute(r), mr.delete(m)), v || m.removeAttribute(n);
    }), Ro--, Ro || (Zt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), pr = {});
  };
}, Gr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ym(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Um(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ur = "Dialog", [$i] = De(Ur), [Km, et] = $i(Ur), Vi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), l = u.useRef(null), [d, f] = Ue({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ur
  });
  return /* @__PURE__ */ c.jsx(
    Km,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Ne(),
      titleId: Ne(),
      descriptionId: Ne(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
Vi.displayName = Ur;
var Bi = "DialogTrigger", qm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(Bi, n), a = ie(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sa(o.open),
        ...r,
        ref: a,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
  }
);
qm.displayName = Bi;
var wa = "DialogPortal", [Xm, zi] = $i(wa, {
  forceMount: void 0
}), Hi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = et(wa, t);
  return /* @__PURE__ */ c.jsx(Xm, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(zt, { asChild: !0, container: o, children: s }) })) });
};
Hi.displayName = wa;
var Dr = "DialogOverlay", Yi = u.forwardRef(
  (e, t) => {
    const n = zi(Dr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = et(Dr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Qm, { ...o, ref: t }) }) : null;
  }
);
Yi.displayName = Dr;
var Zm = /* @__PURE__ */ kt("DialogOverlay.RemoveScroll"), Qm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(Dr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Yn, { as: Zm, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        J.div,
        {
          "data-state": Sa(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Lt = "DialogContent", Gi = u.forwardRef(
  (e, t) => {
    const n = zi(Lt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = et(Lt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Jm, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(ep, { ...o, ref: t }) });
  }
);
Gi.displayName = Lt;
var Jm = u.forwardRef(
  (e, t) => {
    const n = et(Lt, e.__scopeDialog), r = u.useRef(null), o = ie(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Gr(a);
    }, []), /* @__PURE__ */ c.jsx(
      Ui,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: $(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: $(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), ep = u.forwardRef(
  (e, t) => {
    const n = et(Lt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Ui,
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
), Ui = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = et(Lt, n), l = u.useRef(null), d = ie(t, l);
    return Hr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Hn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            Bt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Sa(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(np, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(op, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ca = "DialogTitle", Ki = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(Ca, n);
    return /* @__PURE__ */ c.jsx(J.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ki.displayName = Ca;
var qi = "DialogDescription", tp = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(qi, n);
    return /* @__PURE__ */ c.jsx(J.p, { id: o.descriptionId, ...r, ref: t });
  }
);
tp.displayName = qi;
var Xi = "DialogClose", Zi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(Xi, n);
    return /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: $(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Zi.displayName = Xi;
function Sa(e) {
  return e ? "open" : "closed";
}
var Qi = "DialogTitleWarning", [mS, Ji] = jf(Qi, {
  contentName: Lt,
  titleName: Ca,
  docsSlug: "dialog"
}), np = ({ titleId: e }) => {
  const t = Ji(Qi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, rp = "DialogDescriptionWarning", op = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ji(rp).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ka = Vi, Ma = Hi, Na = Yi, Ea = Gi, ec = Ki, Pa = Zi;
function Kr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function qr(e) {
  const [t, n] = u.useState(void 0);
  return Re(() => {
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
var Xr = "Checkbox", [ap] = De(Xr), [sp, Ra] = ap(Xr);
function ip(e) {
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
  } = e, [p, v] = Ue({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: Xr
  }), [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useRef(!1), w = x ? !!s || !!x.closest("form") : (
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
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: St(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ c.jsx(
    sp,
    {
      scope: t,
      ...k,
      children: cp(m) ? m(k) : r
    }
  );
}
var tc = "CheckboxTrigger", nc = u.forwardRef(
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
    } = Ra(tc, e), h = ie(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => m(g.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": St(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": cc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: $(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: $(n, (y) => {
          m((b) => St(b) ? !0 : !b), x && v && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
nc.displayName = tc;
var rc = u.forwardRef(
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
      ip,
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
            nc,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            ic,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
rc.displayName = Xr;
var oc = "CheckboxIndicator", ac = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Ra(oc, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || St(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          J.span,
          {
            "data-state": cc(a.checked),
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
ac.displayName = oc;
var sc = "CheckboxBubbleInput", ic = u.forwardRef(
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
    } = Ra(sc, e), x = ie(n, v), h = Kr(a), g = qr(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, M = !o.current;
      if (h !== a && C) {
        const S = new Event("click", { bubbles: M });
        b.indeterminate = St(a), C.call(b, St(a) ? !1 : a), b.dispatchEvent(S);
      }
    }, [p, h, a, o]);
    const y = u.useRef(St(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      J.input,
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
ic.displayName = sc;
function cp(e) {
  return typeof e == "function";
}
function St(e) {
  return e === "indeterminate";
}
function cc(e) {
  return St(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const lp = ["top", "right", "bottom", "left"], Mt = Math.min, Ve = Math.max, Or = Math.round, hr = Math.floor, lt = (e) => ({
  x: e,
  y: e
}), dp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, up = {
  start: "end",
  end: "start"
};
function Ko(e, t, n) {
  return Ve(e, Mt(t, n));
}
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function un(e) {
  return e.split("-")[1];
}
function Aa(e) {
  return e === "x" ? "y" : "x";
}
function Da(e) {
  return e === "y" ? "height" : "width";
}
const fp = /* @__PURE__ */ new Set(["top", "bottom"]);
function it(e) {
  return fp.has(bt(e)) ? "y" : "x";
}
function Oa(e) {
  return Aa(it(e));
}
function mp(e, t, n) {
  n === void 0 && (n = !1);
  const r = un(e), o = Oa(e), a = Da(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = _r(s)), [s, _r(s)];
}
function pp(e) {
  const t = _r(e);
  return [qo(e), t, qo(t)];
}
function qo(e) {
  return e.replace(/start|end/g, (t) => up[t]);
}
const Rs = ["left", "right"], As = ["right", "left"], hp = ["top", "bottom"], vp = ["bottom", "top"];
function gp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? As : Rs : t ? Rs : As;
    case "left":
    case "right":
      return t ? hp : vp;
    default:
      return [];
  }
}
function xp(e, t, n, r) {
  const o = un(e);
  let a = gp(bt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(qo)))), a;
}
function _r(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dp[t]);
}
function bp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lc(e) {
  return typeof e != "number" ? bp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tr(e) {
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
function Ds(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = it(t), s = Oa(t), i = Da(s), l = bt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (un(t)) {
    case "start":
      v[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const yp = async (e, t, n) => {
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
  } = Ds(d, r, l), p = r, v = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
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
        ...k
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = Ds(d, p, l)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function jn(e, t) {
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
  } = xt(t, e), x = lc(v), g = i[p ? m === "floating" ? "reference" : "floating" : m], y = Tr(await a.getClippingRect({
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
  }, C = Tr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const wp = (e) => ({
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
    } = xt(e, t) || {};
    if (d == null)
      return {};
    const m = lc(f), p = {
      x: n,
      y: r
    }, v = Oa(o), x = Da(v), h = await s.getDimensions(d), g = v === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let S = M ? M[w] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(M))) && (S = i.floating[w] || a.floating[x]);
    const P = k / 2 - C / 2, F = S / 2 - h[x] / 2 - 1, z = Mt(m[y], F), V = Mt(m[b], F), q = z, X = S - h[x] - V, T = S / 2 - h[x] / 2 + P, U = Ko(q, T, X), I = !l.arrow && un(o) != null && T !== U && a.reference[x] / 2 - (T < q ? z : V) - h[x] / 2 < 0, Z = I ? T < q ? T - q : T - X : 0;
    return {
      [v]: p[v] + Z,
      data: {
        [v]: U,
        centerOffset: T - U - Z,
        ...I && {
          alignmentOffset: Z
        }
      },
      reset: I
    };
  }
}), Cp = function(e) {
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
      } = xt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = bt(o), b = it(i), w = bt(i) === i, k = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (w || !h ? [_r(i)] : pp(i)), M = x !== "none";
      !p && M && C.push(...xp(i, h, x, k));
      const S = [i, ...C], P = await jn(t, g), F = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && F.push(P[y]), m) {
        const T = mp(o, s, k);
        F.push(P[T[0]], P[T[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: F
      }], !F.every((T) => T <= 0)) {
        var V, q;
        const T = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, U = S[T];
        if (U && (!(m === "alignment" ? b !== it(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((A) => it(A.placement) === b ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: T,
              overflows: z
            },
            reset: {
              placement: U
            }
          };
        let I = (q = z.filter((Z) => Z.overflows[0] <= 0).sort((Z, A) => Z.overflows[1] - A.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!I)
          switch (v) {
            case "bestFit": {
              var X;
              const Z = (X = z.filter((A) => {
                if (M) {
                  const j = it(A.placement);
                  return j === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, R) => j + R, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : X[0];
              Z && (I = Z);
              break;
            }
            case "initialPlacement":
              I = i;
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
function Os(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _s(e) {
  return lp.some((t) => e[t] >= 0);
}
const Sp = function(e) {
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
          const a = await jn(t, {
            ...o,
            elementContext: "reference"
          }), s = Os(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: _s(s)
            }
          };
        }
        case "escaped": {
          const a = await jn(t, {
            ...o,
            altBoundary: !0
          }), s = Os(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: _s(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, dc = /* @__PURE__ */ new Set(["left", "top"]);
async function kp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = bt(n), i = un(n), l = it(n) === "y", d = dc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = xt(t, e);
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
const Mp = function(e) {
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
      } = t, l = await kp(t, e);
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
}, Np = function(e) {
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
      } = xt(e, t), d = {
        x: n,
        y: r
      }, f = await jn(t, l), m = it(bt(o)), p = Aa(m);
      let v = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + f[g], w = v - f[y];
        v = Ko(b, v, w);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = x + f[g], w = x - f[y];
        x = Ko(b, x, w);
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
}, Ep = function(e) {
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
      } = xt(e, t), f = {
        x: n,
        y: r
      }, m = it(o), p = Aa(m);
      let v = f[p], x = f[m];
      const h = xt(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const w = p === "y" ? "height" : "width", k = a.reference[p] - a.floating[w] + g.mainAxis, C = a.reference[p] + a.reference[w] - g.mainAxis;
        v < k ? v = k : v > C && (v = C);
      }
      if (d) {
        var y, b;
        const w = p === "y" ? "width" : "height", k = dc.has(bt(o)), C = a.reference[m] - a.floating[w] + (k && ((y = s.offset) == null ? void 0 : y[m]) || 0) + (k ? 0 : g.crossAxis), M = a.reference[m] + a.reference[w] + (k ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (k ? g.crossAxis : 0);
        x < C ? x = C : x > M && (x = M);
      }
      return {
        [p]: v,
        [m]: x
      };
    }
  };
}, Pp = function(e) {
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
      } = xt(e, t), f = await jn(t, d), m = bt(o), p = un(o), v = it(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, y;
      m === "top" || m === "bottom" ? (g = m, y = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m, g = p === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, w = x - f.left - f.right, k = Mt(h - f[g], b), C = Mt(x - f[y], w), M = !t.middlewareData.shift;
      let S = k, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), M && !p) {
        const z = Ve(f.left, 0), V = Ve(f.right, 0), q = Ve(f.top, 0), X = Ve(f.bottom, 0);
        v ? P = x - 2 * (z !== 0 || V !== 0 ? z + V : Ve(f.left, f.right)) : S = h - 2 * (q !== 0 || X !== 0 ? q + X : Ve(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: S
      });
      const F = await s.getDimensions(i.floating);
      return x !== F.width || h !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zr() {
  return typeof window < "u";
}
function fn(e) {
  return uc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  var t;
  return (t = (uc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function uc(e) {
  return Zr() ? e instanceof Node || e instanceof Be(e).Node : !1;
}
function Qe(e) {
  return Zr() ? e instanceof Element || e instanceof Be(e).Element : !1;
}
function dt(e) {
  return Zr() ? e instanceof HTMLElement || e instanceof Be(e).HTMLElement : !1;
}
function Ts(e) {
  return !Zr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Be(e).ShadowRoot;
}
const Rp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Gn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Rp.has(o);
}
const Ap = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Dp(e) {
  return Ap.has(fn(e));
}
const Op = [":popover-open", ":modal"];
function Qr(e) {
  return Op.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _p = ["transform", "translate", "scale", "rotate", "perspective"], Tp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], jp = ["paint", "layout", "strict", "content"];
function _a(e) {
  const t = Ta(), n = Qe(e) ? Je(e) : e;
  return _p.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Tp.some((r) => (n.willChange || "").includes(r)) || jp.some((r) => (n.contain || "").includes(r));
}
function Ip(e) {
  let t = Nt(e);
  for (; dt(t) && !sn(t); ) {
    if (_a(t))
      return t;
    if (Qr(t))
      return null;
    t = Nt(t);
  }
  return null;
}
function Ta() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Lp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function sn(e) {
  return Lp.has(fn(e));
}
function Je(e) {
  return Be(e).getComputedStyle(e);
}
function Jr(e) {
  return Qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Nt(e) {
  if (fn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ts(e) && e.host || // Fallback.
    ut(e)
  );
  return Ts(t) ? t.host : t;
}
function fc(e) {
  const t = Nt(e);
  return sn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dt(t) && Gn(t) ? t : fc(t);
}
function In(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = fc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Be(o);
  if (a) {
    const i = Xo(s);
    return t.concat(s, s.visualViewport || [], Gn(o) ? o : [], i && n ? In(i) : []);
  }
  return t.concat(o, In(o, [], n));
}
function Xo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mc(e) {
  const t = Je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = dt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Or(n) !== a || Or(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function ja(e) {
  return Qe(e) ? e : e.contextElement;
}
function rn(e) {
  const t = ja(e);
  if (!dt(t))
    return lt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = mc(t);
  let s = (a ? Or(n.width) : n.width) / r, i = (a ? Or(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Wp = /* @__PURE__ */ lt(0);
function pc(e) {
  const t = Be(e);
  return !Ta() || !t.visualViewport ? Wp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Be(e) ? !1 : t;
}
function Wt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ja(e);
  let s = lt(1);
  t && (r ? Qe(r) && (s = rn(r)) : s = rn(e));
  const i = Fp(a, n, r) ? pc(a) : lt(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = Be(a), v = r && Qe(r) ? Be(r) : r;
    let x = p, h = Xo(x);
    for (; h && r && v !== x; ) {
      const g = rn(h), y = h.getBoundingClientRect(), b = Je(h), w = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = y.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += w, d += k, x = Be(h), h = Xo(x);
    }
  }
  return Tr({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function eo(e, t) {
  const n = Jr(e).scrollLeft;
  return t ? t.left + n : Wt(ut(e)).left + n;
}
function hc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - eo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function $p(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ut(r), i = t ? Qr(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = lt(1);
  const f = lt(0), m = dt(r);
  if ((m || !m && !a) && ((fn(r) !== "body" || Gn(s)) && (l = Jr(r)), dt(r))) {
    const v = Wt(r);
    d = rn(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = s && !m && !a ? hc(s, l) : lt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function Vp(e) {
  return Array.from(e.getClientRects());
}
function Bp(e) {
  const t = ut(e), n = Jr(e), r = e.ownerDocument.body, o = Ve(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ve(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + eo(e);
  const i = -n.scrollTop;
  return Je(r).direction === "rtl" && (s += Ve(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const js = 25;
function zp(e, t) {
  const n = Be(e), r = ut(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Ta();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = eo(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - v);
    x <= js && (a -= x);
  } else d <= js && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Hp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Yp(e, t) {
  const n = Wt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = dt(e) ? rn(e) : lt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function Is(e, t, n) {
  let r;
  if (t === "viewport")
    r = zp(e, n);
  else if (t === "document")
    r = Bp(ut(e));
  else if (Qe(t))
    r = Yp(t, n);
  else {
    const o = pc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Tr(r);
}
function vc(e, t) {
  const n = Nt(e);
  return n === t || !Qe(n) || sn(n) ? !1 : Je(n).position === "fixed" || vc(n, t);
}
function Gp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = In(e, [], !1).filter((i) => Qe(i) && fn(i) !== "body"), o = null;
  const a = Je(e).position === "fixed";
  let s = a ? Nt(e) : e;
  for (; Qe(s) && !sn(s); ) {
    const i = Je(s), l = _a(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Hp.has(o.position) || Gn(s) && !l && vc(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Nt(s);
  }
  return t.set(e, r), r;
}
function Up(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Qr(t) ? [] : Gp(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
    const m = Is(t, f, o);
    return d.top = Ve(m.top, d.top), d.right = Mt(m.right, d.right), d.bottom = Mt(m.bottom, d.bottom), d.left = Ve(m.left, d.left), d;
  }, Is(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Kp(e) {
  const {
    width: t,
    height: n
  } = mc(e);
  return {
    width: t,
    height: n
  };
}
function qp(e, t, n) {
  const r = dt(t), o = ut(t), a = n === "fixed", s = Wt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = lt(0);
  function d() {
    l.x = eo(o);
  }
  if (r || !r && !a)
    if ((fn(t) !== "body" || Gn(o)) && (i = Jr(t)), r) {
      const v = Wt(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? hc(o, i) : lt(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ao(e) {
  return Je(e).position === "static";
}
function Ls(e, t) {
  if (!dt(e) || Je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ut(e) === n && (n = n.ownerDocument.body), n;
}
function gc(e, t) {
  const n = Be(e);
  if (Qr(e))
    return n;
  if (!dt(e)) {
    let o = Nt(e);
    for (; o && !sn(o); ) {
      if (Qe(o) && !Ao(o))
        return o;
      o = Nt(o);
    }
    return n;
  }
  let r = Ls(e, t);
  for (; r && Dp(r) && Ao(r); )
    r = Ls(r, t);
  return r && sn(r) && Ao(r) && !_a(r) ? n : r || Ip(e) || n;
}
const Xp = async function(e) {
  const t = this.getOffsetParent || gc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Zp(e) {
  return Je(e).direction === "rtl";
}
const Qp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $p,
  getDocumentElement: ut,
  getClippingRect: Up,
  getOffsetParent: gc,
  getElementRects: Xp,
  getClientRects: Vp,
  getDimensions: Kp,
  getScale: rn,
  isElement: Qe,
  isRTL: Zp
};
function xc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Jp(e, t) {
  let n = null, r;
  const o = ut(e);
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
    const x = hr(m), h = hr(o.clientWidth - (f + p)), g = hr(o.clientHeight - (m + v)), y = hr(f), w = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: Ve(0, Mt(1, l)) || 1
    };
    let k = !0;
    function C(M) {
      const S = M[0].intersectionRatio;
      if (S !== l) {
        if (!k)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !xc(d, e.getBoundingClientRect()) && s(), k = !1;
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
function eh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = ja(e), f = o || a ? [...d ? In(d) : [], ...In(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const m = d && i ? Jp(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? Wt(e) : null;
  l && g();
  function g() {
    const y = Wt(e);
    h && !xc(h, y) && n(), h = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const th = Mp, nh = Np, rh = Cp, oh = Pp, ah = Sp, Ws = wp, sh = Ep, ih = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Qp,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return yp(e, t, {
    ...o,
    platform: a
  });
};
var ch = typeof document < "u", lh = function() {
}, Nr = ch ? Ci : lh;
function jr(e, t) {
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
        if (!jr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !jr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fs(e, t) {
  const n = bc(e);
  return Math.round(t * n) / n;
}
function Do(e) {
  const t = u.useRef(e);
  return Nr(() => {
    t.current = e;
  }), t;
}
function dh(e) {
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
  jr(p, r) || v(r);
  const [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useCallback((A) => {
    A !== M.current && (M.current = A, h(A));
  }, []), w = u.useCallback((A) => {
    A !== S.current && (S.current = A, y(A));
  }, []), k = a || x, C = s || g, M = u.useRef(null), S = u.useRef(null), P = u.useRef(f), F = l != null, z = Do(l), V = Do(o), q = Do(d), X = u.useCallback(() => {
    if (!M.current || !S.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    V.current && (A.platform = V.current), ih(M.current, S.current, A).then((j) => {
      const R = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      T.current && !jr(P.current, R) && (P.current = R, Bn.flushSync(() => {
        m(R);
      }));
    });
  }, [p, t, n, V, q]);
  Nr(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [d]);
  const T = u.useRef(!1);
  Nr(() => (T.current = !0, () => {
    T.current = !1;
  }), []), Nr(() => {
    if (k && (M.current = k), C && (S.current = C), k && C) {
      if (z.current)
        return z.current(k, C, X);
      X();
    }
  }, [k, C, X, z, F]);
  const U = u.useMemo(() => ({
    reference: M,
    floating: S,
    setReference: b,
    setFloating: w
  }), [b, w]), I = u.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), Z = u.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return A;
    const j = Fs(I.floating, f.x), R = Fs(I.floating, f.y);
    return i ? {
      ...A,
      transform: "translate(" + j + "px, " + R + "px)",
      ...bc(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: R
    };
  }, [n, i, I.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: X,
    refs: U,
    elements: I,
    floatingStyles: Z
  }), [f, X, U, I, Z]);
}
const uh = (e) => {
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
      return r && t(r) ? r.current != null ? Ws({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ws({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, fh = (e, t) => ({
  ...th(e),
  options: [e, t]
}), mh = (e, t) => ({
  ...nh(e),
  options: [e, t]
}), ph = (e, t) => ({
  ...sh(e),
  options: [e, t]
}), hh = (e, t) => ({
  ...rh(e),
  options: [e, t]
}), vh = (e, t) => ({
  ...oh(e),
  options: [e, t]
}), gh = (e, t) => ({
  ...ah(e),
  options: [e, t]
}), xh = (e, t) => ({
  ...uh(e),
  options: [e, t]
});
var bh = "Arrow", yc = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    J.svg,
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
yc.displayName = bh;
var yh = yc, Ia = "Popper", [wc, Pt] = De(Ia), [wh, Cc] = wc(Ia), Sc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(wh, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Sc.displayName = Ia;
var kc = "PopperAnchor", Mc = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Cc(kc, n), s = u.useRef(null), i = ie(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(J.div, { ...o, ref: i });
  }
);
Mc.displayName = kc;
var La = "PopperContent", [Ch, Sh] = wc(La), Nc = u.forwardRef(
  (e, t) => {
    var D, Y, Q, re, se, ue;
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
    } = e, g = Cc(La, n), [y, b] = u.useState(null), w = ie(t, (ke) => b(ke)), [k, C] = u.useState(null), M = qr(k), S = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, F = r + (a !== "center" ? "-" + a : ""), z = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(d) ? d : [d], q = V.length > 0, X = {
      padding: z,
      boundary: V.filter(Mh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: T, floatingStyles: U, placement: I, isPositioned: Z, middlewareData: A } = dh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...ke) => eh(...ke, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        fh({ mainAxis: o + P, alignmentAxis: s }),
        l && mh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? ph() : void 0,
          ...X
        }),
        l && hh({ ...X }),
        vh({
          ...X,
          apply: ({ elements: ke, rects: _e, availableWidth: tt, availableHeight: qe }) => {
            const { width: nt, height: Gt } = _e.reference, je = ke.floating.style;
            je.setProperty("--radix-popper-available-width", `${tt}px`), je.setProperty("--radix-popper-available-height", `${qe}px`), je.setProperty("--radix-popper-anchor-width", `${nt}px`), je.setProperty("--radix-popper-anchor-height", `${Gt}px`);
          }
        }),
        k && xh({ element: k, padding: i }),
        Nh({ arrowWidth: S, arrowHeight: P }),
        p && gh({ strategy: "referenceHidden", ...X })
      ]
    }), [j, R] = Rc(I), G = Le(x);
    Re(() => {
      Z && (G == null || G());
    }, [Z, G]);
    const E = (D = A.arrow) == null ? void 0 : D.x, _ = (Y = A.arrow) == null ? void 0 : Y.y, H = ((Q = A.arrow) == null ? void 0 : Q.centerOffset) !== 0, [B, W] = u.useState();
    return Re(() => {
      y && W(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: T.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: Z ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            (re = A.transformOrigin) == null ? void 0 : re.x,
            (se = A.transformOrigin) == null ? void 0 : se.y
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
          Ch,
          {
            scope: n,
            placedSide: j,
            onArrowChange: C,
            arrowX: E,
            arrowY: _,
            shouldHideArrow: H,
            children: /* @__PURE__ */ c.jsx(
              J.div,
              {
                "data-side": j,
                "data-align": R,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Nc.displayName = La;
var Ec = "PopperArrow", kh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Pc = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Sh(Ec, r), s = kh[a.placedSide];
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
          yh,
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
Pc.displayName = Ec;
function Mh(e) {
  return e !== null;
}
var Nh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = Rc(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, h = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = s ? m : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = s ? m : `${v}px`), { data: { x, y: h } };
  }
});
function Rc(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var to = Sc, Un = Mc, no = Nc, ro = Pc, Oo = "rovingFocusGroup.onEntryFocus", Eh = { bubbles: !1, cancelable: !0 }, Kn = "RovingFocusGroup", [Zo, Ac, Ph] = zr(Kn), [Rh, mn] = De(
  Kn,
  [Ph]
), [Ah, Dh] = Rh(Kn), Dc = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Zo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Zo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Oh, { ...e, ref: t }) }) })
);
Dc.displayName = Kn;
var Oh = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), v = ie(t, p), x = zn(a), [h, g] = Ue({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Kn
  }), [y, b] = u.useState(!1), w = Le(d), k = Ac(n), C = u.useRef(!1), [M, S] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Oo, w), () => P.removeEventListener(Oo, w);
  }, [w]), /* @__PURE__ */ c.jsx(
    Ah,
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
        () => S((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => S((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        J.div,
        {
          tabIndex: y || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: $(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: $(e.onFocus, (P) => {
            const F = !C.current;
            if (P.target === P.currentTarget && F && !y) {
              const z = new CustomEvent(Oo, Eh);
              if (P.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const V = k().filter((I) => I.focusable), q = V.find((I) => I.active), X = V.find((I) => I.id === h), U = [q, X, ...V].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Tc(U, f);
              }
            }
            C.current = !1;
          }),
          onBlur: $(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Oc = "RovingFocusGroupItem", _c = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ne(), d = a || l, f = Dh(Oc, n), m = f.currentTabStopId === d, p = Ac(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
      Zo.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          J.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: $(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: $(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: $(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = jh(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = p().filter((k) => k.focusable).map((k) => k.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const k = w.indexOf(g.currentTarget);
                  w = f.loop ? Ih(w, k + 1) : w.slice(k + 1);
                }
                setTimeout(() => Tc(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
_c.displayName = Oc;
var _h = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Th(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function jh(e, t, n) {
  const r = Th(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return _h[r];
}
function Tc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Ih(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Wa = Dc, Fa = _c, Qo = ["Enter", " "], Lh = ["ArrowDown", "PageUp", "Home"], jc = ["ArrowUp", "PageDown", "End"], Wh = [...Lh, ...jc], Fh = {
  ltr: [...Qo, "ArrowRight"],
  rtl: [...Qo, "ArrowLeft"]
}, $h = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, qn = "Menu", [Ln, Vh, Bh] = zr(qn), [Ht, Ic] = De(qn, [
  Bh,
  Pt,
  mn
]), oo = Pt(), Lc = mn(), [zh, Yt] = Ht(qn), [Hh, Xn] = Ht(qn), Wc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = oo(t), [l, d] = u.useState(null), f = u.useRef(!1), m = Le(a), p = zn(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(to, { ...i, children: /* @__PURE__ */ c.jsx(
    zh,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Hh,
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
Wc.displayName = qn;
var Yh = "MenuAnchor", $a = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = oo(n);
    return /* @__PURE__ */ c.jsx(Un, { ...o, ...r, ref: t });
  }
);
$a.displayName = Yh;
var Va = "MenuPortal", [Gh, Fc] = Ht(Va, {
  forceMount: void 0
}), $c = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Yt(Va, t);
  return /* @__PURE__ */ c.jsx(Gh, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(zt, { asChild: !0, container: o, children: r }) }) });
};
$c.displayName = Va;
var Ge = "MenuContent", [Uh, Ba] = Ht(Ge), Vc = u.forwardRef(
  (e, t) => {
    const n = Fc(Ge, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Yt(Ge, e.__scopeMenu), s = Xn(Ge, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Ln.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Ln.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(Kh, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(qh, { ...o, ref: t }) }) }) });
  }
), Kh = u.forwardRef(
  (e, t) => {
    const n = Yt(Ge, e.__scopeMenu), r = u.useRef(null), o = ie(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Gr(a);
    }, []), /* @__PURE__ */ c.jsx(
      za,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: $(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), qh = u.forwardRef((e, t) => {
  const n = Yt(Ge, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    za,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Xh = /* @__PURE__ */ kt("MenuContent.ScrollLock"), za = u.forwardRef(
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
    } = e, g = Yt(Ge, n), y = Xn(Ge, n), b = oo(n), w = Lc(n), k = Vh(n), [C, M] = u.useState(null), S = u.useRef(null), P = ie(t, S, g.onContentChange), F = u.useRef(0), z = u.useRef(""), V = u.useRef(0), q = u.useRef(null), X = u.useRef("right"), T = u.useRef(0), U = x ? Yn : u.Fragment, I = x ? { as: Xh, allowPinchZoom: !0 } : void 0, Z = (j) => {
      var D, Y;
      const R = z.current + j, G = k().filter((Q) => !Q.disabled), E = document.activeElement, _ = (D = G.find((Q) => Q.ref.current === E)) == null ? void 0 : D.textValue, H = G.map((Q) => Q.textValue), B = cv(H, R, _), W = (Y = G.find((Q) => Q.textValue === B)) == null ? void 0 : Y.ref.current;
      (function Q(re) {
        z.current = re, window.clearTimeout(F.current), re !== "" && (F.current = window.setTimeout(() => Q(""), 1e3));
      })(R), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(F.current), []), Hr();
    const A = u.useCallback((j) => {
      var G, E;
      return X.current === ((G = q.current) == null ? void 0 : G.side) && dv(j, (E = q.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Uh,
      {
        scope: n,
        searchRef: z,
        onItemEnter: u.useCallback(
          (j) => {
            A(j) && j.preventDefault();
          },
          [A]
        ),
        onItemLeave: u.useCallback(
          (j) => {
            var R;
            A(j) || ((R = S.current) == null || R.focus(), M(null));
          },
          [A]
        ),
        onTriggerLeave: u.useCallback(
          (j) => {
            A(j) && j.preventDefault();
          },
          [A]
        ),
        pointerGraceTimerRef: V,
        onPointerGraceIntentChange: u.useCallback((j) => {
          q.current = j;
        }, []),
        children: /* @__PURE__ */ c.jsx(U, { ...I, children: /* @__PURE__ */ c.jsx(
          Hn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: $(a, (j) => {
              var R;
              j.preventDefault(), (R = S.current) == null || R.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ c.jsx(
                  Wa,
                  {
                    asChild: !0,
                    ...w,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: $(l, (j) => {
                      y.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      no,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": rl(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: $(h.onKeyDown, (j) => {
                          const G = j.target.closest("[data-radix-menu-content]") === j.currentTarget, E = j.ctrlKey || j.altKey || j.metaKey, _ = j.key.length === 1;
                          G && (j.key === "Tab" && j.preventDefault(), !E && _ && Z(j.key));
                          const H = S.current;
                          if (j.target !== H || !Wh.includes(j.key)) return;
                          j.preventDefault();
                          const W = k().filter((D) => !D.disabled).map((D) => D.ref.current);
                          jc.includes(j.key) && W.reverse(), sv(W);
                        }),
                        onBlur: $(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(F.current), z.current = "");
                        }),
                        onPointerMove: $(
                          e.onPointerMove,
                          Wn((j) => {
                            const R = j.target, G = T.current !== j.clientX;
                            if (j.currentTarget.contains(R) && G) {
                              const E = j.clientX > T.current ? "right" : "left";
                              X.current = E, T.current = j.clientX;
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
Vc.displayName = Ge;
var Zh = "MenuGroup", Ha = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(J.div, { role: "group", ...r, ref: t });
  }
);
Ha.displayName = Zh;
var Qh = "MenuLabel", Bc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(J.div, { ...r, ref: t });
  }
);
Bc.displayName = Qh;
var Ir = "MenuItem", $s = "menu.itemSelect", ao = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = Xn(Ir, e.__scopeMenu), i = Ba(Ir, e.__scopeMenu), l = ie(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent($s, { bubbles: !0, cancelable: !0 });
        m.addEventListener($s, (v) => r == null ? void 0 : r(v), { once: !0 }), ya(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      zc,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: $(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: $(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: $(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || Qo.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
ao.displayName = Ir;
var zc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Ba(Ir, n), i = Lc(n), l = u.useRef(null), d = ie(t, l), [f, m] = u.useState(!1), [p, v] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Ln.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(Fa, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          J.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: $(
              e.onPointerMove,
              Wn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: $(
              e.onPointerLeave,
              Wn((x) => s.onItemLeave(x))
            ),
            onFocus: $(e.onFocus, () => m(!0)),
            onBlur: $(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), Jh = "MenuCheckboxItem", Hc = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(qc, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      ao,
      {
        role: "menuitemcheckbox",
        "aria-checked": Lr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ga(n),
        onSelect: $(
          o.onSelect,
          () => r == null ? void 0 : r(Lr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Hc.displayName = Jh;
var Yc = "MenuRadioGroup", [ev, tv] = Ht(
  Yc,
  { value: void 0, onValueChange: () => {
  } }
), Gc = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Le(r);
    return /* @__PURE__ */ c.jsx(ev, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(Ha, { ...o, ref: t }) });
  }
);
Gc.displayName = Yc;
var Uc = "MenuRadioItem", Kc = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = tv(Uc, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(qc, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      ao,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ga(a),
        onSelect: $(
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
Kc.displayName = Uc;
var Ya = "MenuItemIndicator", [qc, nv] = Ht(
  Ya,
  { checked: !1 }
), Xc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = nv(Ya, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || Lr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          J.span,
          {
            ...o,
            ref: t,
            "data-state": Ga(a.checked)
          }
        )
      }
    );
  }
);
Xc.displayName = Ya;
var rv = "MenuSeparator", Zc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      J.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Zc.displayName = rv;
var ov = "MenuArrow", Qc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = oo(n);
    return /* @__PURE__ */ c.jsx(ro, { ...o, ...r, ref: t });
  }
);
Qc.displayName = ov;
var av = "MenuSub", [pS, Jc] = Ht(av), An = "MenuSubTrigger", el = u.forwardRef(
  (e, t) => {
    const n = Yt(An, e.__scopeMenu), r = Xn(An, e.__scopeMenu), o = Jc(An, e.__scopeMenu), a = Ba(An, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx($a, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      zc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": rl(n.open),
        ...e,
        ref: gt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: $(
          e.onPointerMove,
          Wn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          Wn((m) => {
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
        onKeyDown: $(e.onKeyDown, (m) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Fh[r.dir].includes(m.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
el.displayName = An;
var tl = "MenuSubContent", nl = u.forwardRef(
  (e, t) => {
    const n = Fc(Ge, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Yt(Ge, e.__scopeMenu), s = Xn(Ge, e.__scopeMenu), i = Jc(tl, e.__scopeMenu), l = u.useRef(null), d = ie(t, l);
    return /* @__PURE__ */ c.jsx(Ln.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Ln.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      za,
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
        onFocusOutside: $(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: $(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: $(e.onKeyDown, (f) => {
          var v;
          const m = f.currentTarget.contains(f.target), p = $h[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (v = i.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
nl.displayName = tl;
function rl(e) {
  return e ? "open" : "closed";
}
function Lr(e) {
  return e === "indeterminate";
}
function Ga(e) {
  return Lr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function sv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function iv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function cv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = iv(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function lv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function dv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return lv(n, t);
}
function Wn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var uv = Wc, fv = $a, mv = $c, pv = Vc, hv = Ha, vv = Bc, gv = ao, xv = Hc, bv = Gc, yv = Kc, wv = Xc, Cv = Zc, Sv = Qc, kv = el, Mv = nl, so = "DropdownMenu", [Nv] = De(
  so,
  [Ic]
), Te = Ic(), [Ev, ol] = Nv(so), al = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Te(t), d = u.useRef(null), [f, m] = Ue({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: so
  });
  return /* @__PURE__ */ c.jsx(
    Ev,
    {
      scope: t,
      triggerId: Ne(),
      triggerRef: d,
      contentId: Ne(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(uv, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
al.displayName = so;
var sl = "DropdownMenuTrigger", il = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ol(sl, n), s = Te(n);
    return /* @__PURE__ */ c.jsx(fv, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      J.button,
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
        onPointerDown: $(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: $(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
il.displayName = sl;
var Pv = "DropdownMenuPortal", cl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Te(t);
  return /* @__PURE__ */ c.jsx(mv, { ...r, ...n });
};
cl.displayName = Pv;
var ll = "DropdownMenuContent", dl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ol(ll, n), a = Te(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      pv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: $(e.onInteractOutside, (i) => {
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
dl.displayName = ll;
var Rv = "DropdownMenuGroup", Av = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(hv, { ...o, ...r, ref: t });
  }
);
Av.displayName = Rv;
var Dv = "DropdownMenuLabel", ul = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(vv, { ...o, ...r, ref: t });
  }
);
ul.displayName = Dv;
var Ov = "DropdownMenuItem", fl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(gv, { ...o, ...r, ref: t });
  }
);
fl.displayName = Ov;
var _v = "DropdownMenuCheckboxItem", Tv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(xv, { ...o, ...r, ref: t });
});
Tv.displayName = _v;
var jv = "DropdownMenuRadioGroup", Iv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(bv, { ...o, ...r, ref: t });
});
Iv.displayName = jv;
var Lv = "DropdownMenuRadioItem", Wv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(yv, { ...o, ...r, ref: t });
});
Wv.displayName = Lv;
var Fv = "DropdownMenuItemIndicator", $v = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(wv, { ...o, ...r, ref: t });
});
$v.displayName = Fv;
var Vv = "DropdownMenuSeparator", ml = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(Cv, { ...o, ...r, ref: t });
});
ml.displayName = Vv;
var Bv = "DropdownMenuArrow", zv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(Sv, { ...o, ...r, ref: t });
  }
);
zv.displayName = Bv;
var Hv = "DropdownMenuSubTrigger", Yv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(kv, { ...o, ...r, ref: t });
});
Yv.displayName = Hv;
var Gv = "DropdownMenuSubContent", Uv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(
    Mv,
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
Uv.displayName = Gv;
var Kv = al, qv = il, Xv = cl, Zv = dl, Qv = ul, Jv = fl, eg = ml;
function Vs(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var io = "Popover", [pl] = De(io, [
  Pt
]), Zn = Pt(), [tg, Rt] = pl(io), hl = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Zn(t), l = u.useRef(null), [d, f] = u.useState(!1), [m, p] = Ue({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: io
  });
  return /* @__PURE__ */ c.jsx(to, { ...i, children: /* @__PURE__ */ c.jsx(
    tg,
    {
      scope: t,
      contentId: Ne(),
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
hl.displayName = io;
var vl = "PopoverAnchor", ng = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Rt(vl, n), a = Zn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Un, { ...a, ...r, ref: t });
  }
);
ng.displayName = vl;
var gl = "PopoverTrigger", xl = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Rt(gl, n), a = Zn(n), s = ie(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sl(o.open),
        ...r,
        ref: s,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Un, { asChild: !0, ...a, children: i });
  }
);
xl.displayName = gl;
var Ua = "PopoverPortal", [rg, og] = pl(Ua, {
  forceMount: void 0
}), bl = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Rt(Ua, t);
  return /* @__PURE__ */ c.jsx(rg, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(zt, { asChild: !0, container: o, children: r }) }) });
};
bl.displayName = Ua;
var cn = "PopoverContent", yl = u.forwardRef(
  (e, t) => {
    const n = og(cn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Rt(cn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(sg, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(ig, { ...o, ref: t }) });
  }
);
yl.displayName = cn;
var ag = /* @__PURE__ */ kt("PopoverContent.RemoveScroll"), sg = u.forwardRef(
  (e, t) => {
    const n = Rt(cn, e.__scopePopover), r = u.useRef(null), o = ie(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Gr(s);
    }, []), /* @__PURE__ */ c.jsx(Yn, { as: ag, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      wl,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: $(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: $(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), ig = u.forwardRef(
  (e, t) => {
    const n = Rt(cn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      wl,
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
), wl = u.forwardRef(
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
    } = e, p = Rt(cn, n), v = Zn(n);
    return Hr(), /* @__PURE__ */ c.jsx(
      Hn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          Bt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              no,
              {
                "data-state": Sl(p.open),
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
), Cl = "PopoverClose", cg = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Rt(Cl, n);
    return /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: $(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
cg.displayName = Cl;
var lg = "PopoverArrow", dg = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Zn(n);
    return /* @__PURE__ */ c.jsx(ro, { ...o, ...r, ref: t });
  }
);
dg.displayName = lg;
function Sl(e) {
  return e ? "open" : "closed";
}
var kl = hl, Ml = xl, Nl = bl, Ka = yl, qa = "Progress", Xa = 100, [ug] = De(qa), [fg, mg] = ug(qa), El = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = pg,
      ...s
    } = e;
    (o || o === 0) && !Bs(o) && console.error(hg(`${o}`, "Progress"));
    const i = Bs(o) ? o : Xa;
    r !== null && !zs(r, i) && console.error(vg(`${r}`, "Progress"));
    const l = zs(r, i) ? r : null, d = Wr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(fg, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      J.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Wr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Al(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
El.displayName = qa;
var Pl = "ProgressIndicator", Rl = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = mg(Pl, n);
    return /* @__PURE__ */ c.jsx(
      J.div,
      {
        "data-state": Al(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Rl.displayName = Pl;
function pg(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Al(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Wr(e) {
  return typeof e == "number";
}
function Bs(e) {
  return Wr(e) && !isNaN(e) && e > 0;
}
function zs(e, t) {
  return Wr(e) && !isNaN(e) && e <= t && e >= 0;
}
function hg(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Xa}\`.`;
}
function vg(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Xa} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var gg = El, xg = Rl, Za = "Radio", [bg, Dl] = De(Za), [yg, wg] = bg(Za), Ol = u.forwardRef(
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
    } = e, [m, p] = u.useState(null), v = ie(t, (g) => p(g)), x = u.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(yg, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        J.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Il(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: v,
          onClick: $(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        jl,
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
Ol.displayName = Za;
var _l = "RadioIndicator", Tl = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = wg(_l, n);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      J.span,
      {
        "data-state": Il(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Tl.displayName = _l;
var Cg = "RadioBubbleInput", jl = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = ie(s, a), l = Kr(n), d = qr(t);
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
      J.input,
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
jl.displayName = Cg;
function Il(e) {
  return e ? "checked" : "unchecked";
}
var Sg = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], co = "RadioGroup", [kg] = De(co, [
  mn,
  Dl
]), Ll = mn(), Wl = Dl(), [Mg, Ng] = kg(co), Fl = u.forwardRef(
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
    } = e, v = Ll(n), x = zn(d), [h, g] = Ue({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: co
    });
    return /* @__PURE__ */ c.jsx(
      Mg,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          Wa,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: x,
            loop: f,
            children: /* @__PURE__ */ c.jsx(
              J.div,
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
Fl.displayName = co;
var $l = "RadioGroupItem", Vl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Ng($l, n), s = a.disabled || r, i = Ll(n), l = Wl(n), d = u.useRef(null), f = ie(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        Sg.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Fa,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          Ol,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: $((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: $(o.onFocus, () => {
              var v;
              p.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Vl.displayName = $l;
var Eg = "RadioGroupIndicator", Bl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Wl(n);
    return /* @__PURE__ */ c.jsx(Tl, { ...o, ...r, ref: t });
  }
);
Bl.displayName = Eg;
var Pg = Fl, Rg = Vl, Ag = Bl, Dg = [" ", "Enter", "ArrowUp", "ArrowDown"], Og = [" ", "Enter"], Ft = "Select", [lo, uo, _g] = zr(Ft), [pn] = De(Ft, [
  _g,
  Pt
]), fo = Pt(), [Tg, At] = pn(Ft), [jg, Ig] = pn(Ft), zl = (e) => {
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
  } = e, h = fo(t), [g, y] = u.useState(null), [b, w] = u.useState(null), [k, C] = u.useState(!1), M = zn(d), [S, P] = Ue({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ft
  }), [F, z] = Ue({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ft
  }), V = u.useRef(null), q = g ? x || !!g.closest("form") : !0, [X, T] = u.useState(/* @__PURE__ */ new Set()), U = Array.from(X).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ c.jsx(to, { ...h, children: /* @__PURE__ */ c.jsxs(
    Tg,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: Ne(),
      value: F,
      onValueChange: z,
      open: S,
      onOpenChange: P,
      dir: M,
      triggerPointerDownPosRef: V,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(lo.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          jg,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((I) => {
              T((Z) => new Set(Z).add(I));
            }, []),
            onNativeOptionRemove: u.useCallback((I) => {
              T((Z) => {
                const A = new Set(Z);
                return A.delete(I), A;
              });
            }, []),
            children: n
          }
        ) }),
        q ? /* @__PURE__ */ c.jsxs(
          hd,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: F,
            onChange: (I) => z(I.target.value),
            disabled: p,
            form: x,
            children: [
              F === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
zl.displayName = Ft;
var Hl = "SelectTrigger", Yl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = fo(n), s = At(Hl, n), i = s.disabled || r, l = ie(t, s.onTriggerChange), d = uo(n), f = u.useRef("touch"), [m, p, v] = gd((h) => {
      const g = d().filter((w) => !w.disabled), y = g.find((w) => w.value === s.value), b = xd(g, h, y);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (h) => {
      i || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Un, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      J.button,
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
        "data-placeholder": vd(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: $(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: $(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: $(o.onKeyDown, (h) => {
          const g = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && Dg.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Yl.displayName = Hl;
var Gl = "SelectValue", Ul = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = At(Gl, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = ie(t, l.onValueNodeChange);
    return Re(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      J.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: vd(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Ul.displayName = Gl;
var Lg = "SelectIcon", Kl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(J.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Kl.displayName = Lg;
var Wg = "SelectPortal", ql = (e) => /* @__PURE__ */ c.jsx(zt, { asChild: !0, ...e });
ql.displayName = Wg;
var $t = "SelectContent", Xl = u.forwardRef(
  (e, t) => {
    const n = At($t, e.__scopeSelect), [r, o] = u.useState();
    if (Re(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Bn.createPortal(
        /* @__PURE__ */ c.jsx(Zl, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(lo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Ql, { ...e, ref: t });
  }
);
Xl.displayName = $t;
var Xe = 10, [Zl, Dt] = pn($t), Fg = "SelectContentImpl", $g = /* @__PURE__ */ kt("SelectContent.RemoveScroll"), Ql = u.forwardRef(
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
    } = e, b = At($t, n), [w, k] = u.useState(null), [C, M] = u.useState(null), S = ie(t, (D) => k(D)), [P, F] = u.useState(null), [z, V] = u.useState(
      null
    ), q = uo(n), [X, T] = u.useState(!1), U = u.useRef(!1);
    u.useEffect(() => {
      if (w) return Gr(w);
    }, [w]), Hr();
    const I = u.useCallback(
      (D) => {
        const [Y, ...Q] = q().map((ue) => ue.ref.current), [re] = Q.slice(-1), se = document.activeElement;
        for (const ue of D)
          if (ue === se || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === Y && C && (C.scrollTop = 0), ue === re && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== se)) return;
      },
      [q, C]
    ), Z = u.useCallback(
      () => I([P, w]),
      [I, P, w]
    );
    u.useEffect(() => {
      X && Z();
    }, [X, Z]);
    const { onOpenChange: A, triggerPointerDownPosRef: j } = b;
    u.useEffect(() => {
      if (w) {
        let D = { x: 0, y: 0 };
        const Y = (re) => {
          var se, ue;
          D = {
            x: Math.abs(Math.round(re.pageX) - (((se = j.current) == null ? void 0 : se.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((ue = j.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, Q = (re) => {
          D.x <= 10 && D.y <= 10 ? re.preventDefault() : w.contains(re.target) || A(!1), document.removeEventListener("pointermove", Y), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, A, j]), u.useEffect(() => {
      const D = () => A(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [A]);
    const [R, G] = gd((D) => {
      const Y = q().filter((se) => !se.disabled), Q = Y.find((se) => se.ref.current === document.activeElement), re = xd(Y, D, Q);
      re && setTimeout(() => re.ref.current.focus());
    }), E = u.useCallback(
      (D, Y, Q) => {
        const re = !U.current && !Q;
        (b.value !== void 0 && b.value === Y || re) && (F(D), re && (U.current = !0));
      },
      [b.value]
    ), _ = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), H = u.useCallback(
      (D, Y, Q) => {
        const re = !U.current && !Q;
        (b.value !== void 0 && b.value === Y || re) && V(D);
      },
      [b.value]
    ), B = r === "popper" ? Jo : Jl, W = B === Jo ? {
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
      Zl,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: M,
        itemRefCallback: E,
        selectedItem: P,
        onItemLeave: _,
        itemTextRefCallback: H,
        focusSelectedItem: Z,
        selectedItemText: z,
        position: r,
        isPositioned: X,
        searchRef: R,
        children: /* @__PURE__ */ c.jsx(Yn, { as: $g, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Hn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: $(o, (D) => {
              var Y;
              (Y = b.trigger) == null || Y.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  B,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...y,
                    ...W,
                    onPlaced: () => T(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: $(y.onKeyDown, (D) => {
                      const Y = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !Y && D.key.length === 1 && G(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let re = q().filter((se) => !se.disabled).map((se) => se.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const se = D.target, ue = re.indexOf(se);
                          re = re.slice(ue + 1);
                        }
                        setTimeout(() => I(re)), D.preventDefault();
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
Ql.displayName = Fg;
var Vg = "SelectItemAlignedPosition", Jl = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = At($t, n), s = Dt($t, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = ie(t, (S) => f(S)), p = uo(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && h && g && y) {
      const S = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), F = a.valueNode.getBoundingClientRect(), z = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const se = z.left - P.left, ue = F.left - se, ke = S.left - ue, _e = S.width + ke, tt = Math.max(_e, P.width), qe = window.innerWidth - Xe, nt = Vs(ue, [
          Xe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xe, qe - tt)
        ]);
        i.style.minWidth = _e + "px", i.style.left = nt + "px";
      } else {
        const se = P.right - z.right, ue = window.innerWidth - F.right - se, ke = window.innerWidth - S.right - ue, _e = S.width + ke, tt = Math.max(_e, P.width), qe = window.innerWidth - Xe, nt = Vs(ue, [
          Xe,
          Math.max(Xe, qe - tt)
        ]);
        i.style.minWidth = _e + "px", i.style.right = nt + "px";
      }
      const V = p(), q = window.innerHeight - Xe * 2, X = h.scrollHeight, T = window.getComputedStyle(d), U = parseInt(T.borderTopWidth, 10), I = parseInt(T.paddingTop, 10), Z = parseInt(T.borderBottomWidth, 10), A = parseInt(T.paddingBottom, 10), j = U + I + X + A + Z, R = Math.min(g.offsetHeight * 5, j), G = window.getComputedStyle(h), E = parseInt(G.paddingTop, 10), _ = parseInt(G.paddingBottom, 10), H = S.top + S.height / 2 - Xe, B = q - H, W = g.offsetHeight / 2, D = g.offsetTop + W, Y = U + I + D, Q = j - Y;
      if (Y <= H) {
        const se = V.length > 0 && g === V[V.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - h.offsetTop - h.offsetHeight, ke = Math.max(
          B,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (se ? _ : 0) + ue + Z
        ), _e = Y + ke;
        i.style.height = _e + "px";
      } else {
        const se = V.length > 0 && g === V[0].ref.current;
        i.style.top = "0px";
        const ke = Math.max(
          H,
          U + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (se ? E : 0) + W
        ) + Q;
        i.style.height = ke + "px", h.scrollTop = Y - H + h.offsetTop;
      }
      i.style.margin = `${Xe}px 0`, i.style.minHeight = R + "px", i.style.maxHeight = q + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
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
  Re(() => w(), [w]);
  const [k, C] = u.useState();
  Re(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const M = u.useCallback(
    (S) => {
      S && x.current === !0 && (w(), b == null || b(), x.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ c.jsx(
    zg,
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
            J.div,
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
Jl.displayName = Vg;
var Bg = "SelectPopperPosition", Jo = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Xe,
    ...a
  } = e, s = fo(n);
  return /* @__PURE__ */ c.jsx(
    no,
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
Jo.displayName = Bg;
var [zg, Qa] = pn($t, {}), ea = "SelectViewport", ed = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Dt(ea, n), s = Qa(ea, n), i = ie(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(lo.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        J.div,
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
          onScroll: $(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Xe * 2, h = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), y = Math.max(h, g);
                if (y < x) {
                  const b = y + v, w = Math.min(x, b), k = b - w;
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
ed.displayName = ea;
var td = "SelectGroup", [Hg, Yg] = pn(td), nd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ne();
    return /* @__PURE__ */ c.jsx(Hg, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(J.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
nd.displayName = td;
var rd = "SelectLabel", od = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Yg(rd, n);
    return /* @__PURE__ */ c.jsx(J.div, { id: o.id, ...r, ref: t });
  }
);
od.displayName = rd;
var Fr = "SelectItem", [Gg, ad] = pn(Fr), sd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = At(Fr, n), l = Dt(Fr, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, v] = u.useState(!1), x = ie(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, o);
      }
    ), h = Ne(), g = u.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Gg,
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
          lo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ c.jsx(
              J.div,
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
                onFocus: $(s.onFocus, () => v(!0)),
                onBlur: $(s.onBlur, () => v(!1)),
                onClick: $(s.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: $(s.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: $(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: $(s.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: $(s.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: $(s.onKeyDown, (b) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && b.key === " " || (Og.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
sd.displayName = Fr;
var Dn = "SelectItemText", id = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = At(Dn, n), i = Dt(Dn, n), l = ad(Dn, n), d = Ig(Dn, n), [f, m] = u.useState(null), p = ie(
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
    return Re(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(J.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Bn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
id.displayName = Dn;
var cd = "SelectItemIndicator", ld = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ad(cd, n).isSelected ? /* @__PURE__ */ c.jsx(J.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ld.displayName = cd;
var ta = "SelectScrollUpButton", dd = u.forwardRef((e, t) => {
  const n = Dt(ta, e.__scopeSelect), r = Qa(ta, e.__scopeSelect), [o, a] = u.useState(!1), s = ie(t, r.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    fd,
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
dd.displayName = ta;
var na = "SelectScrollDownButton", ud = u.forwardRef((e, t) => {
  const n = Dt(na, e.__scopeSelect), r = Qa(na, e.__scopeSelect), [o, a] = u.useState(!1), s = ie(t, r.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        a(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    fd,
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
ud.displayName = na;
var fd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Dt("SelectScrollButton", n), s = u.useRef(null), i = uo(n), l = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Re(() => {
    var f;
    const d = i().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    J.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: $(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: $(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: $(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Ug = "SelectSeparator", md = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(J.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
md.displayName = Ug;
var ra = "SelectArrow", pd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = fo(n), a = At(ra, n), s = Dt(ra, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(ro, { ...o, ...r, ref: t }) : null;
  }
);
pd.displayName = ra;
var Kg = "SelectBubbleInput", hd = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ie(r, o), s = Kr(t);
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
      J.select,
      {
        ...n,
        style: { ...Ei, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
hd.displayName = Kg;
function vd(e) {
  return e === "" || e === void 0;
}
function gd(e) {
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
function xd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = qg(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function qg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Xg = zl, Zg = Yl, Qg = Ul, Jg = Kl, e0 = ql, t0 = Xl, n0 = ed, r0 = nd, o0 = od, a0 = sd, s0 = id, i0 = ld, c0 = dd, l0 = ud, d0 = md, u0 = pd, mo = "Switch", [f0] = De(mo), [m0, p0] = f0(mo), bd = u.forwardRef(
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
    } = e, [p, v] = u.useState(null), x = ie(t, (w) => v(w)), h = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [y, b] = Ue({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: mo
    });
    return /* @__PURE__ */ c.jsxs(m0, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        J.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": s,
          "data-state": Sd(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: $(e.onClick, (w) => {
            b((k) => !k), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        Cd,
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
bd.displayName = mo;
var yd = "SwitchThumb", wd = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = p0(yd, n);
    return /* @__PURE__ */ c.jsx(
      J.span,
      {
        "data-state": Sd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wd.displayName = yd;
var h0 = "SwitchBubbleInput", Cd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = ie(s, a), l = Kr(n), d = qr(t);
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
Cd.displayName = h0;
function Sd(e) {
  return e ? "checked" : "unchecked";
}
var v0 = bd, g0 = wd, po = "Tabs", [x0] = De(po, [
  mn
]), kd = mn(), [b0, Ja] = x0(po), Md = u.forwardRef(
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
    } = e, f = zn(i), [m, p] = Ue({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: po
    });
    return /* @__PURE__ */ c.jsx(
      b0,
      {
        scope: n,
        baseId: Ne(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          J.div,
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
Md.displayName = po;
var Nd = "TabsList", Ed = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ja(Nd, n), s = kd(n);
    return /* @__PURE__ */ c.jsx(
      Wa,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          J.div,
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
Ed.displayName = Nd;
var Pd = "TabsTrigger", Rd = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Ja(Pd, n), i = kd(n), l = Dd(s.baseId, r), d = Od(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      Fa,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          J.button,
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
            onMouseDown: $(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: $(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: $(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Rd.displayName = Pd;
var Ad = "TabsContent", y0 = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Ja(Ad, n), l = Dd(i.baseId, r), d = Od(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(Oe, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      J.div,
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
y0.displayName = Ad;
function Dd(e, t) {
  return `${e}-trigger-${t}`;
}
function Od(e, t) {
  return `${e}-content-${t}`;
}
var w0 = Md, C0 = Ed, S0 = Rd, es = "ToastProvider", [ts, k0, M0] = zr("Toast"), [_d] = De("Toast", [M0]), [N0, ho] = _d(es), Td = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${es}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(ts.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    N0,
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
Td.displayName = es;
var jd = "ToastViewport", E0 = ["F8"], oa = "toast.viewportPause", aa = "toast.viewportResume", Id = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = E0,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = ho(jd, n), i = k0(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = ie(t, m, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
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
            const M = new CustomEvent(oa);
            y.dispatchEvent(M), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const M = new CustomEvent(aa);
            y.dispatchEvent(M), s.isClosePausedRef.current = !1;
          }
        }, k = (M) => {
          !g.contains(M.relatedTarget) && w();
        }, C = () => {
          g.contains(document.activeElement) || w();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", w), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        };
      }
    }, [x, s.isClosePausedRef]);
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((w) => {
          const k = w.ref.current, C = [k, ...$0(k)];
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
          var C, M, S;
          const w = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !w) {
            const P = document.activeElement, F = b.shiftKey;
            if (b.target === g && F) {
              (C = d.current) == null || C.focus();
              return;
            }
            const q = h({ tabbingDirection: F ? "backwards" : "forwards" }), X = q.findIndex((T) => T === P);
            _o(q.slice(X + 1)) ? b.preventDefault() : F ? (M = d.current) == null || M.focus() : (S = f.current) == null || S.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [i, h]), /* @__PURE__ */ c.jsxs(
      em,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            sa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                _o(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(ts.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(J.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            sa,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                _o(g);
              }
            }
          )
        ]
      }
    );
  }
);
Id.displayName = jd;
var Ld = "ToastFocusProxy", sa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ho(Ld, n);
    return /* @__PURE__ */ c.jsx(
      Br,
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
sa.displayName = Ld;
var Qn = "Toast", P0 = "toast.swipeStart", R0 = "toast.swipeMove", A0 = "toast.swipeCancel", D0 = "toast.swipeEnd", Wd = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Ue({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Qn
    });
    return /* @__PURE__ */ c.jsx(Oe, { present: n || i, children: /* @__PURE__ */ c.jsx(
      T0,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Le(e.onPause),
        onResume: Le(e.onResume),
        onSwipeStart: $(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: $(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: $(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: $(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
Wd.displayName = Qn;
var [O0, _0] = _d(Qn, {
  onClose() {
  }
}), T0 = u.forwardRef(
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
    } = e, h = ho(Qn, n), [g, y] = u.useState(null), b = ie(t, (T) => y(T)), w = u.useRef(null), k = u.useRef(null), C = o || h.duration, M = u.useRef(0), S = u.useRef(C), P = u.useRef(0), { onToastAdd: F, onToastRemove: z } = h, V = Le(() => {
      var U;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((U = h.viewport) == null || U.focus()), s();
    }), q = u.useCallback(
      (T) => {
        !T || T === 1 / 0 || (window.clearTimeout(P.current), M.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(V, T));
      },
      [V]
    );
    u.useEffect(() => {
      const T = h.viewport;
      if (T) {
        const U = () => {
          q(S.current), d == null || d();
        }, I = () => {
          const Z = (/* @__PURE__ */ new Date()).getTime() - M.current;
          S.current = S.current - Z, window.clearTimeout(P.current), l == null || l();
        };
        return T.addEventListener(oa, I), T.addEventListener(aa, U), () => {
          T.removeEventListener(oa, I), T.removeEventListener(aa, U);
        };
      }
    }, [h.viewport, C, l, d, q]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && q(C);
    }, [a, C, h.isClosePausedRef, q]), u.useEffect(() => (F(), () => z()), [F, z]);
    const X = u.useMemo(() => g ? Gd(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      X && /* @__PURE__ */ c.jsx(
        j0,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: X
        }
      ),
      /* @__PURE__ */ c.jsx(O0, { scope: n, onClose: V, children: Bn.createPortal(
        /* @__PURE__ */ c.jsx(ts.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Jf,
          {
            asChild: !0,
            onEscapeKeyDown: $(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || V(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              J.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: $(e.onKeyDown, (T) => {
                  T.key === "Escape" && (i == null || i(T.nativeEvent), T.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, V()));
                }),
                onPointerDown: $(e.onPointerDown, (T) => {
                  T.button === 0 && (w.current = { x: T.clientX, y: T.clientY });
                }),
                onPointerMove: $(e.onPointerMove, (T) => {
                  if (!w.current) return;
                  const U = T.clientX - w.current.x, I = T.clientY - w.current.y, Z = !!k.current, A = ["left", "right"].includes(h.swipeDirection), j = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, R = A ? j(0, U) : 0, G = A ? 0 : j(0, I), E = T.pointerType === "touch" ? 10 : 2, _ = { x: R, y: G }, H = { originalEvent: T, delta: _ };
                  Z ? (k.current = _, vr(R0, m, H, {
                    discrete: !1
                  })) : Hs(_, h.swipeDirection, E) ? (k.current = _, vr(P0, f, H, {
                    discrete: !1
                  }), T.target.setPointerCapture(T.pointerId)) : (Math.abs(U) > E || Math.abs(I) > E) && (w.current = null);
                }),
                onPointerUp: $(e.onPointerUp, (T) => {
                  const U = k.current, I = T.target;
                  if (I.hasPointerCapture(T.pointerId) && I.releasePointerCapture(T.pointerId), k.current = null, w.current = null, U) {
                    const Z = T.currentTarget, A = { originalEvent: T, delta: U };
                    Hs(U, h.swipeDirection, h.swipeThreshold) ? vr(D0, v, A, {
                      discrete: !0
                    }) : vr(
                      A0,
                      p,
                      A,
                      {
                        discrete: !0
                      }
                    ), Z.addEventListener("click", (j) => j.preventDefault(), {
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
), j0 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ho(Qn, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return W0(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(zt, { asChild: !0, children: /* @__PURE__ */ c.jsx(Br, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, I0 = "ToastTitle", Fd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(J.div, { ...r, ref: t });
  }
);
Fd.displayName = I0;
var L0 = "ToastDescription", $d = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(J.div, { ...r, ref: t });
  }
);
$d.displayName = L0;
var Vd = "ToastAction", Bd = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Yd, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Hd, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Vd}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Bd.displayName = Vd;
var zd = "ToastClose", Hd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = _0(zd, n);
    return /* @__PURE__ */ c.jsx(Yd, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      J.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: $(e.onClick, o.onClose)
      }
    ) });
  }
);
Hd.displayName = zd;
var Yd = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ c.jsx(
    J.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Gd(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), F0(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Gd(r));
    }
  }), t;
}
function vr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ya(o, a) : o.dispatchEvent(a);
}
var Hs = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function W0(e = () => {
}) {
  const t = Le(e);
  Re(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function F0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _o(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var V0 = Td, B0 = Id, z0 = Wd, H0 = Fd, Y0 = $d, G0 = Bd, [vo] = De("Tooltip", [
  Pt
]), go = Pt(), Ud = "TooltipProvider", U0 = 700, ia = "tooltip.open", [K0, ns] = vo(Ud), Kd = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = U0,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    K0,
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
Kd.displayName = Ud;
var Fn = "Tooltip", [q0, Jn] = vo(Fn), qd = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = ns(Fn, e.__scopeTooltip), d = go(t), [f, m] = u.useState(null), p = Ne(), v = u.useRef(0), x = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, g = u.useRef(!1), [y, b] = Ue({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ia))) : l.onClose(), a == null || a(S);
    },
    caller: Fn
  }), w = u.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), k = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b(!1);
  }, [b]), M = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, b(!0), v.current = 0;
    }, h);
  }, [h, b]);
  return u.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ c.jsx(to, { ...d, children: /* @__PURE__ */ c.jsx(
    q0,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? M() : k();
      }, [l.isOpenDelayedRef, M, k]),
      onTriggerLeave: u.useCallback(() => {
        x ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, x]),
      onOpen: k,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
qd.displayName = Fn;
var ca = "TooltipTrigger", Xd = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Jn(ca, n), a = ns(ca, n), s = go(n), i = u.useRef(null), l = ie(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(Un, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      J.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: $(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: $(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: $(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: $(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: $(e.onBlur, o.onClose),
        onClick: $(e.onClick, o.onClose)
      }
    ) });
  }
);
Xd.displayName = ca;
var rs = "TooltipPortal", [X0, Z0] = vo(rs, {
  forceMount: void 0
}), Zd = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Jn(rs, t);
  return /* @__PURE__ */ c.jsx(X0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(zt, { asChild: !0, container: o, children: r }) }) });
};
Zd.displayName = rs;
var ln = "TooltipContent", Qd = u.forwardRef(
  (e, t) => {
    const n = Z0(ln, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Jn(ln, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Jd, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(Q0, { side: o, ...a, ref: t }) });
  }
), Q0 = u.forwardRef((e, t) => {
  const n = Jn(ln, e.__scopeTooltip), r = ns(ln, e.__scopeTooltip), o = u.useRef(null), a = ie(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), v = u.useCallback(
    (x, h) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, b = rx(y, g.getBoundingClientRect()), w = ox(y, b), k = ax(h.getBoundingClientRect()), C = ix([...w, ...k]);
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
        const g = h.target, y = { x: h.clientX, y: h.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), w = !sx(y, s);
        b ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(Jd, { ...e, ref: a });
}), [J0, ex] = vo(Fn, { isInside: !1 }), tx = /* @__PURE__ */ Pf("TooltipContent"), Jd = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = Jn(ln, n), d = go(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(ia, f), () => document.removeEventListener(ia, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const m = (p) => {
          const v = p.target;
          v != null && v.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ c.jsx(
      Bt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ c.jsxs(
          no,
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
              /* @__PURE__ */ c.jsx(tx, { children: r }),
              /* @__PURE__ */ c.jsx(J0, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Tf, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Qd.displayName = ln;
var eu = "TooltipArrow", nx = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = go(n);
    return ex(
      eu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(ro, { ...o, ...r, ref: t });
  }
);
nx.displayName = eu;
function rx(e, t) {
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
function ox(e, t, n = 5) {
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
function ax(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
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
function ix(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), cx(t);
}
function cx(e) {
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
var lx = Kd, dx = qd, ux = Xd, fx = Zd, mx = Qd;
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var px = {
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
const Se = (e, t, n, r) => {
  const o = Cf(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => wo(
      "svg",
      {
        ref: p,
        ...px[e],
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
        l && wo("title", { key: "svg-title" }, l),
        ...r.map(([v, x]) => wo(v, x)),
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
const hx = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], vx = Se("outline", "alert-circle", "AlertCircle", hx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], xx = Se("outline", "calendar-event", "CalendarEvent", gx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], tu = Se("outline", "check", "Check", bx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], nu = Se("outline", "chevron-down", "ChevronDown", yx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], Cx = Se("outline", "chevron-left-pipe", "ChevronLeftPipe", wx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], kx = Se("outline", "chevron-left", "ChevronLeft", Sx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], Nx = Se("outline", "chevron-right-pipe", "ChevronRightPipe", Mx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], ru = Se("outline", "chevron-right", "ChevronRight", Ex);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Rx = Se("outline", "circle-check", "CircleCheck", Px);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Dx = Se("outline", "cloud-up", "CloudUp", Ax);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = [["path", { d: "M5 12l14 0", key: "svg-0" }]], _x = Se("outline", "minus", "Minus", Ox);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], ou = Se("outline", "search", "Search", Tx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], Ix = Se("outline", "trash-x", "TrashX", jx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], la = Se("outline", "x", "X", Lx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Fx = Se("filled", "alert-circle-filled", "AlertCircleFilled", Wx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], au = Se("filled", "circle-check-filled", "CircleCheckFilled", $x);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Ys = Se("filled", "exclamation-circle-filled", "ExclamationCircleFilled", Vx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Gs = Se("filled", "folder-filled", "FolderFilled", Bx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Er = Se("filled", "info-circle-filled", "InfoCircleFilled", zx), os = "-", Hx = (e) => {
  const t = Gx(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(os);
      return i[0] === "" && i.length !== 1 && i.shift(), su(i, t) || Yx(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, su = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? su(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(os);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Us = /^\[(.+)\]$/, Yx = (e) => {
  if (Us.test(e)) {
    const t = Us.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Gx = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    da(n[o], r, o, t);
  return r;
}, da = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Ks(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ux(o)) {
        da(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      da(s, Ks(t, a), n, r);
    });
  });
}, Ks = (e, t) => {
  let n = e;
  return t.split(os).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Ux = (e) => e.isThemeGetter, Kx = (e) => {
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
}, ua = "!", fa = ":", qx = fa.length, Xx = (e) => {
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
        if (h === fa) {
          a.push(o.slice(l, x)), l = x + qx;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? i++ : h === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = Zx(f), p = m !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + fa, a = r;
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
}, Zx = (e) => e.endsWith(ua) ? e.substring(0, e.length - 1) : e.startsWith(ua) ? e.substring(1) : e, Qx = (e) => {
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
}, Jx = (e) => ({
  cache: Kx(e.cacheSize),
  parseClassName: Xx(e),
  sortModifiers: Qx(e),
  ...Hx(e)
}), eb = /\s+/, tb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(eb);
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
    const b = a(p).join(":"), w = v ? b + ua : b, k = w + y;
    if (s.includes(k))
      continue;
    s.push(k);
    const C = o(y, g);
    for (let M = 0; M < C.length; ++M) {
      const S = C[M];
      s.push(w + S);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function nb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = iu(t)) && (r && (r += " "), r += n);
  return r;
}
const iu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = iu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function qs(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = Jx(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = tb(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(nb.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, cu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, lu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, rb = /^\d+\/\d+$/, ob = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ab = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ib = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qt = (e) => rb.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => !!e && Number.isInteger(Number(e)), To = (e) => e.endsWith("%") && de(e.slice(0, -1)), pt = (e) => ob.test(e), lb = () => !0, db = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ab.test(e) && !sb.test(e)
), du = () => !1, ub = (e) => ib.test(e), fb = (e) => cb.test(e), mb = (e) => !ee(e) && !te(e), pb = (e) => hn(e, mu, du), ee = (e) => cu.test(e), Tt = (e) => hn(e, pu, db), jo = (e) => hn(e, bb, de), Xs = (e) => hn(e, uu, du), hb = (e) => hn(e, fu, fb), gr = (e) => hn(e, hu, ub), te = (e) => lu.test(e), Pn = (e) => vn(e, pu), vb = (e) => vn(e, yb), Zs = (e) => vn(e, uu), gb = (e) => vn(e, mu), xb = (e) => vn(e, fu), xr = (e) => vn(e, hu, !0), hn = (e, t, n) => {
  const r = cu.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, vn = (e, t, n = !1) => {
  const r = lu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, uu = (e) => e === "position" || e === "percentage", fu = (e) => e === "image" || e === "url", mu = (e) => e === "length" || e === "size" || e === "bg-size", pu = (e) => e === "length", bb = (e) => e === "number", yb = (e) => e === "family-name", hu = (e) => e === "shadow", Qs = () => {
  const e = we("color"), t = we("font"), n = we("text"), r = we("font-weight"), o = we("tracking"), a = we("leading"), s = we("breakpoint"), i = we("container"), l = we("spacing"), d = we("radius"), f = we("shadow"), m = we("inset-shadow"), p = we("text-shadow"), v = we("drop-shadow"), x = we("blur"), h = we("perspective"), g = we("aspect"), y = we("ease"), b = we("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), te, ee], M = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], P = () => [te, ee, l], F = () => [Qt, "full", "auto", ...P()], z = () => [yt, "none", "subgrid", te, ee], V = () => ["auto", {
    span: ["full", yt, te, ee]
  }, yt, te, ee], q = () => [yt, "auto", te, ee], X = () => ["auto", "min", "max", "fr", te, ee], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...P()], Z = () => [Qt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], A = () => [e, te, ee], j = () => [...k(), Zs, Xs, {
    position: [te, ee]
  }], R = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], G = () => ["auto", "cover", "contain", gb, pb, {
    size: [te, ee]
  }], E = () => [To, Pn, Tt], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], H = () => ["", de, Pn, Tt], B = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [de, To, Zs, Xs], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], Q = () => ["none", de, te, ee], re = () => ["none", de, te, ee], se = () => [de, te, ee], ue = () => [Qt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pt],
      breakpoint: [pt],
      color: [lb],
      container: [pt],
      "drop-shadow": [pt],
      ease: ["in", "out", "in-out"],
      font: [mb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pt],
      shadow: [pt],
      spacing: ["px", de],
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
        aspect: ["auto", "square", Qt, ee, te, g]
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [yt, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Qt, "full", "auto", i, ...P()]
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
        flex: [de, Qt, "auto", "initial", "none", ee]
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
        order: [yt, "first", "last", "none", te, ee]
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
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
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
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        justify: [...T(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
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
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
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
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
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
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...Z()]
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
          ...Z()
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
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Pn, Tt]
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
        font: [r, te, jo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", To, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vb, ee, t]
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
        "line-clamp": [de, "none", te, jo]
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", te, Tt]
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
        bg: j()
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
        bg: G()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, yt, te, ee],
          radial: ["", te, ee],
          conic: [yt, te, ee]
        }, xb, hb]
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
        border: H()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": H()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": H()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": H()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": H()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": H()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": H()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": H()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": H()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": H()
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
        "divide-y": H()
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
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
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
        outline: [...B(), "none", "hidden"]
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
        outline: ["", de, Pn, Tt]
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
          xr,
          gr
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
        "inset-shadow": ["none", m, xr, gr]
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
        ring: H()
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
        "ring-offset": [de, Tt]
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
        "inset-ring": H()
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
        "text-shadow": ["none", p, xr, gr]
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
        opacity: [de, te, ee]
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
        "mask-linear": [de]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
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
        "mask-conic": [de]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
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
        mask: j()
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
        mask: G()
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
        blur: Y()
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
          xr,
          gr
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
        "backdrop-blur": Y()
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
        ease: ["linear", "initial", y, te, ee]
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
        skew: se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": se()
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
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, Pn, Tt, jo]
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
}, wb = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (On(e, "cacheSize", t), On(e, "prefix", n), On(e, "experimentalParseClassName", r), br(e.theme, a.theme), br(e.classGroups, a.classGroups), br(e.conflictingClassGroups, a.conflictingClassGroups), br(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), On(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), yr(e.theme, o.theme), yr(e.classGroups, o.classGroups), yr(e.conflictingClassGroups, o.conflictingClassGroups), yr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), vu(e, o, "orderSensitiveModifiers"), e), On = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, br = (e, t) => {
  if (t)
    for (const n in t)
      On(e, n, t[n]);
}, yr = (e, t) => {
  if (t)
    for (const n in t)
      vu(e, t, n);
}, vu = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Cb = (e, ...t) => typeof e == "function" ? qs(Qs, e, ...t) : qs(() => wb(Qs(), e), ...t), Sb = Cb({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), O = (...e) => Sb(Mi(e)), Ie = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return N.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return N.createElement(o, { size: n, className: r });
  }
  return e;
}, Js = ae(
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
), kb = N.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Fx : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Vr,
      {
        className: O(Js({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: O(Js({ intent: e }), n),
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
kb.displayName = "Badge";
const Mb = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Io = ae(
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
), Nb = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Eb = N.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = ru,
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
        className: O(Mb({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: O(Io({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: O(
                  Io({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: O(Io({ isActive: !0 })),
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
                    className: O(Nb({ size: t }))
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
Eb.displayName = "Breadcrumbs";
const Pb = ae(
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
), gu = N.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    gg,
    {
      ref: s,
      className: O(Pb({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        xg,
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
gu.displayName = "ProgressIndicator.Linear";
const Rb = ae("flex items-center", {
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
}), Ab = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, $r = {
  sm: 12,
  md: 10
}, ei = {
  sm: (50 - $r.sm / 2).toString(),
  md: (50 - $r.md / 2).toString()
}, xu = N.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: O(Rb({ size: t, layout: e }), r),
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
            className: O(Ab[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: ei[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: $r[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: ei[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: $r[t],
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
xu.displayName = "ProgressIndicator.Circular";
const as = {
  Linear: gu,
  Circular: xu
}, Lo = ae(
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
), wr = ae("", {
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
}), Ke = N.forwardRef(
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
    const m = a ? Vr : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: O(
          Lo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Ie(r, {
              className: O(
                wr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            Ie(o, {
              className: O(
                wr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(as.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: O(
          Lo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          Ie(r, {
            className: O(
              wr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          Ie(o, {
            className: O(
              wr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: O(
          Lo({ intent: e, size: t, textOnly: v, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
Ke.displayName = "Button";
function Db(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Wo = {}, _n = {};
function It(e, t) {
  try {
    const r = (Wo[e] || (Wo[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in _n ? _n[r] : ti(r, r.split(":"));
  } catch {
    if (e in _n) return _n[e];
    const n = e == null ? void 0 : e.match(Ob);
    return n ? ti(e, n.slice(1)) : NaN;
  }
}
const Ob = /([+-]\d\d):?(\d\d)?/;
function ti(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return _n[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class ct extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(It(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), bu(this), ma(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new ct(...n, t) : new ct(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new ct(+this, t);
  }
  getTimezoneOffset() {
    const t = -It(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), ma(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ct(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ni = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ni.test(e)) return;
  const t = e.replace(ni, "$1UTC");
  ct.prototype[t] && (e.startsWith("get") ? ct.prototype[e] = function() {
    return this.internal[t]();
  } : (ct.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), _b(this), +this;
  }, ct.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), ma(this), +this;
  }));
});
function ma(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-It(e.timeZone, e) * 60));
}
function _b(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), bu(e);
}
function bu(e) {
  const t = It(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(It(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = It(e.timeZone, e), v = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, g = v !== n, y = h - l;
  if (g && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const b = It(e.timeZone, e), w = b > 0 ? Math.floor(b) : Math.ceil(b), k = v - w;
    k && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + k), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + k));
  }
}
class Ae extends ct {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Ae(...n, t) : new Ae(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Db(this.timeZone, this)})`;
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
    return new Ae(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Ae(+new Date(t), this.timeZone);
  }
  //#endregion
}
const yu = 6048e5, Tb = 864e5, ri = Symbol.for("constructDateFrom");
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ri in e ? e[ri](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ve(e, t) {
  return Ce(t || e, e);
}
function wu(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ce(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Cu(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Ce(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Ce(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let jb = {};
function er() {
  return jb;
}
function dn(e, t) {
  var i, l, d, f;
  const n = er(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function $n(e, t) {
  return dn(e, { ...t, weekStartsOn: 1 });
}
function Su(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ce(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = $n(o), s = Ce(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = $n(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function oi(e) {
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
function gn(e, ...t) {
  const n = Ce.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Vn(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ku(e, t, n) {
  const [r, o] = gn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Vn(r), s = Vn(o), i = +a - oi(a), l = +s - oi(s);
  return Math.round((i - l) / Tb);
}
function Ib(e, t) {
  const n = Su(e, t), r = Ce(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $n(r);
}
function Lb(e, t, n) {
  return wu(e, t * 7, n);
}
function Wb(e, t, n) {
  return Cu(e, t * 12, n);
}
function Fb(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ce.bind(null, o));
    const a = ve(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ce(r, n || NaN);
}
function $b(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ce.bind(null, o));
    const a = ve(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ce(r, n || NaN);
}
function Vb(e, t, n) {
  const [r, o] = gn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Vn(r) == +Vn(o);
}
function Mu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Bb(e) {
  return !(!Mu(e) && typeof e != "number" || isNaN(+ve(e)));
}
function zb(e, t, n) {
  const [r, o] = gn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Hb(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Yb(e, t) {
  const [n, r] = gn(e, t.start, t.end);
  return { start: n, end: r };
}
function Gb(e, t) {
  const { start: n, end: r } = Yb(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Ce(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Ub(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Kb(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Nu(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Eu(e, t) {
  var i, l, d, f;
  const n = er(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function qb(e, t) {
  return Eu(e, { ...t, weekStartsOn: 1 });
}
const Xb = {
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
}, Zb = (e, t, n) => {
  let r;
  const o = Xb[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function on(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Qb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Jb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ey = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ty = {
  date: on({
    formats: Qb,
    defaultWidth: "full"
  }),
  time: on({
    formats: Jb,
    defaultWidth: "full"
  }),
  dateTime: on({
    formats: ey,
    defaultWidth: "full"
  })
}, ny = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ry = (e, t, n, r) => ny[e];
function at(e) {
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
const oy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ay = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, sy = {
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
}, iy = {
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
}, cy = {
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
}, ly = {
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
}, dy = (e, t) => {
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
}, uy = {
  ordinalNumber: dy,
  era: at({
    values: oy,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: ay,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: at({
    values: sy,
    defaultWidth: "wide"
  }),
  day: at({
    values: iy,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: cy,
    defaultWidth: "wide",
    formattingValues: ly,
    defaultFormattingWidth: "wide"
  })
};
function st(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? my(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      fy(i, (m) => m.test(s))
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
function fy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function my(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Pu(e) {
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
const py = /^(\d+)(th|st|nd|rd)?/i, hy = /\d+/i, vy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gy = {
  any: [/^b/i, /^(a|c)/i]
}, xy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, by = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, yy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wy = {
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
}, Cy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Sy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ky = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, My = {
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
}, Ny = {
  ordinalNumber: Pu({
    matchPattern: py,
    parsePattern: hy,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: st({
    matchPatterns: vy,
    defaultMatchWidth: "wide",
    parsePatterns: gy,
    defaultParseWidth: "any"
  }),
  quarter: st({
    matchPatterns: xy,
    defaultMatchWidth: "wide",
    parsePatterns: by,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: st({
    matchPatterns: yy,
    defaultMatchWidth: "wide",
    parsePatterns: wy,
    defaultParseWidth: "any"
  }),
  day: st({
    matchPatterns: Cy,
    defaultMatchWidth: "wide",
    parsePatterns: Sy,
    defaultParseWidth: "any"
  }),
  dayPeriod: st({
    matchPatterns: ky,
    defaultMatchWidth: "any",
    parsePatterns: My,
    defaultParseWidth: "any"
  })
}, ss = {
  code: "en-US",
  formatDistance: Zb,
  formatLong: ty,
  formatRelative: ry,
  localize: uy,
  match: Ny,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ey(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return ku(n, Nu(n)) + 1;
}
function Ru(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +$n(n) - +Ib(n);
  return Math.round(r / yu) + 1;
}
function Au(e, t) {
  var f, m, p, v;
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = er(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Ce((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = dn(s, t), l = Ce((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = dn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function Py(e, t) {
  var i, l, d, f;
  const n = er(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Au(e, t), a = Ce((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), dn(a, t);
}
function Du(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +dn(n, t) - +Py(n, t);
  return Math.round(r / yu) + 1;
}
function he(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const wt = {
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
}, Jt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ai = {
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
    const o = Au(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Su(e);
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
    const o = Du(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ru(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : wt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ey(e);
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
    switch (r === 12 ? o = Jt.noon : r === 0 ? o = Jt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Jt.evening : r >= 12 ? o = Jt.afternoon : r >= 4 ? o = Jt.morning : o = Jt.night, t) {
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
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
        return ii(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return jt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return jt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return ii(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return jt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return jt(r, ":");
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
        return "GMT" + si(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + jt(r, ":");
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
        return "GMT" + si(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + jt(r, ":");
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
function si(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function ii(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : jt(e, t);
}
function jt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const ci = (e, t) => {
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
}, Ou = (e, t) => {
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
}, Ry = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ci(e, t);
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
  return a.replace("{{date}}", ci(r, t)).replace("{{time}}", Ou(o, t));
}, Ay = {
  p: Ou,
  P: Ry
}, Dy = /^D+$/, Oy = /^Y+$/, _y = ["D", "DD", "YY", "YYYY"];
function Ty(e) {
  return Dy.test(e);
}
function jy(e) {
  return Oy.test(e);
}
function Iy(e, t, n) {
  const r = Ly(e, t, n);
  if (console.warn(r), _y.includes(e)) throw new RangeError(r);
}
function Ly(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Wy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $y = /^'([^]*?)'?$/, Vy = /''/g, By = /[a-zA-Z]/;
function zy(e, t, n) {
  var f, m, p, v, x, h, g, y;
  const r = er(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ss, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, i = ve(e, n == null ? void 0 : n.in);
  if (!Bb(i))
    throw new RangeError("Invalid time value");
  let l = t.match(Fy).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const k = Ay[w];
      return k(b, o.formatLong);
    }
    return b;
  }).join("").match(Wy).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: Hy(b) };
    if (ai[w])
      return { isToken: !0, value: b };
    if (w.match(By))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && jy(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Ty(w)) && Iy(w, t, String(e));
    const k = ai[w[0]];
    return k(i, w, o.localize, d);
  }).join("");
}
function Hy(e) {
  const t = e.match($y);
  return t ? t[1].replace(Vy, "'") : e;
}
function Yy(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ce(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Gy(e, t) {
  return ve(e, t == null ? void 0 : t.in).getMonth();
}
function Uy(e, t) {
  return ve(e, t == null ? void 0 : t.in).getFullYear();
}
function Ky(e, t) {
  return +ve(e) > +ve(t);
}
function qy(e, t) {
  return +ve(e) < +ve(t);
}
function Xy(e, t, n) {
  const [r, o] = gn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Zy(e, t, n) {
  const [r, o] = gn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Qy(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Ce(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = Yy(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Jy(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ce(e, NaN) : (r.setFullYear(t), r);
}
const li = 5, ew = 4;
function tw(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, li * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? li : ew;
}
function _u(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function nw(e, t) {
  const n = _u(e, t), r = tw(e, t);
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
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Ae.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Ae(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : wu(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Cu(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Lb(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Wb(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ku(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : zb(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Gb(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : nw(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : qb(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Hb(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Eu(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Kb(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : zy(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Ru(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Gy(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Uy(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : Du(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : Ky(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : qy(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Mu(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Vb(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : Xy(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : Zy(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Fb(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : $b(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : Qy(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : Jy(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : _u(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Vn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : $n(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Ub(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : dn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Nu(r);
    }, this.options = { locale: ss, ...t }, this.overrides = n;
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
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
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
class Tu {
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
class rw {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class ow {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function aw(e) {
  return N.createElement("button", { ...e });
}
function sw(e) {
  return N.createElement("span", { ...e });
}
function iw(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    N.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && N.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && N.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && N.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && N.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function cw(e) {
  const { day: t, modifiers: n, ...r } = e;
  return N.createElement("td", { ...r });
}
function lw(e) {
  const { day: t, modifiers: n, ...r } = e, o = N.useRef(null);
  return N.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), N.createElement("button", { ref: o, ...r });
}
var ne;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ne || (ne = {}));
var be;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(be || (be = {}));
var Ze;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ze || (Ze = {}));
var $e;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})($e || ($e = {}));
function dw(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[ne.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return N.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[ne.DropdownRoot] },
    N.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => N.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    N.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      N.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function uw(e) {
  return N.createElement("div", { ...e });
}
function fw(e) {
  return N.createElement("div", { ...e });
}
function mw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return N.createElement("div", { ...r }, e.children);
}
function pw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return N.createElement("div", { ...r });
}
function hw(e) {
  return N.createElement("table", { ...e });
}
function vw(e) {
  return N.createElement("div", { ...e });
}
const ju = xa(void 0);
function tr() {
  const e = ba(ju);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function gw(e) {
  const { components: t } = tr();
  return N.createElement(t.Dropdown, { ...e });
}
function xw(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = tr(), f = Me((p) => {
    o && (n == null || n(p));
  }, [o, n]), m = Me((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return N.createElement(
    "nav",
    { ...a },
    N.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      N.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[ne.Chevron], orientation: "left" })
    ),
    N.createElement(
      s.NextMonthButton,
      { type: "button", className: i[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      N.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ne.Chevron] })
    )
  );
}
function bw(e) {
  const { components: t } = tr();
  return N.createElement(t.Button, { ...e });
}
function yw(e) {
  return N.createElement("option", { ...e });
}
function ww(e) {
  const { components: t } = tr();
  return N.createElement(t.Button, { ...e });
}
function Cw(e) {
  const { rootRef: t, ...n } = e;
  return N.createElement("div", { ...n, ref: t });
}
function Sw(e) {
  return N.createElement("select", { ...e });
}
function kw(e) {
  const { week: t, ...n } = e;
  return N.createElement("tr", { ...n });
}
function Mw(e) {
  return N.createElement("th", { ...e });
}
function Nw(e) {
  return N.createElement(
    "thead",
    { "aria-hidden": !0 },
    N.createElement("tr", { ...e })
  );
}
function Ew(e) {
  const { week: t, ...n } = e;
  return N.createElement("th", { ...n });
}
function Pw(e) {
  return N.createElement("th", { ...e });
}
function Rw(e) {
  return N.createElement("tbody", { ...e });
}
function Aw(e) {
  const { components: t } = tr();
  return N.createElement(t.Dropdown, { ...e });
}
const Dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: aw,
  CaptionLabel: sw,
  Chevron: iw,
  Day: cw,
  DayButton: lw,
  Dropdown: dw,
  DropdownNav: uw,
  Footer: fw,
  Month: mw,
  MonthCaption: pw,
  MonthGrid: hw,
  Months: vw,
  MonthsDropdown: gw,
  Nav: xw,
  NextMonthButton: bw,
  Option: yw,
  PreviousMonthButton: ww,
  Root: Cw,
  Select: Sw,
  Week: kw,
  WeekNumber: Ew,
  WeekNumberHeader: Pw,
  Weekday: Mw,
  Weekdays: Nw,
  Weeks: Rw,
  YearsDropdown: Aw
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t, n = !1, r = ft) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Iu(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function is(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Lu(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Wu(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Fu(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function $u(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function vt(e, t, n = ft) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if ($u(i, n))
      return i.includes(e);
    if (is(i))
      return ht(i, e, !1, n);
    if (Fu(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Iu(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return Lu(i) ? a(e, i.after) > 0 : Wu(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Ow(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, y = n && v(n), b = r && h(r), w = {
    [be.focused]: [],
    [be.outside]: [],
    [be.disabled]: [],
    [be.hidden]: [],
    [be.today]: []
  }, k = {};
  for (const C of e) {
    const { date: M, displayMonth: S } = C, P = !!(S && !p(M, S)), F = !!(y && x(M, y)), z = !!(b && g(M, b)), V = !!(a && vt(M, a, o)), q = !!(s && vt(M, s, o)) || F || z || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, X = m(M, f ?? o.today());
    P && w.outside.push(C), V && w.disabled.push(C), q && w.hidden.push(C), X && w.today.push(C), i && Object.keys(i).forEach((T) => {
      const U = i == null ? void 0 : i[T];
      U && vt(M, U, o) && (k[T] ? k[T].push(C) : k[T] = [C]);
    });
  }
  return (C) => {
    const M = {
      [be.focused]: !1,
      [be.disabled]: !1,
      [be.hidden]: !1,
      [be.outside]: !1,
      [be.today]: !1
    }, S = {};
    for (const P in w) {
      const F = w[P];
      M[P] = F.some((z) => z === C);
    }
    for (const P in k)
      S[P] = k[P].some((F) => F === C);
    return {
      ...M,
      // custom modifiers should override all the previous ones
      ...S
    };
  };
}
function _w(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[be[a]] ? o.push(t[be[a]]) : t[Ze[a]] && o.push(t[Ze[a]]), o), [t[ne.Day]]);
}
function Tw(e) {
  return {
    ...Dw,
    ...e
  };
}
function jw(e) {
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
function Vu() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in be)
    e[be[t]] = `rdp-${be[t]}`;
  for (const t in Ze)
    e[Ze[t]] = `rdp-${Ze[t]}`;
  for (const t in $e)
    e[$e[t]] = `rdp-${$e[t]}`;
  return e;
}
function Bu(e, t, n) {
  return (n ?? new ze(t)).formatMonthYear(e);
}
const Iw = Bu;
function Lw(e, t, n) {
  return (n ?? new ze(t)).format(e, "d");
}
function Ww(e, t = ft) {
  return t.format(e, "LLLL");
}
function Fw(e, t, n) {
  return (n ?? new ze(t)).format(e, "cccccc");
}
function $w(e, t = ft) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Vw() {
  return "";
}
function zu(e, t = ft) {
  return t.format(e, "yyyy");
}
const Bw = zu, zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Bu,
  formatDay: Lw,
  formatMonthCaption: Iw,
  formatMonthDropdown: Ww,
  formatWeekNumber: $w,
  formatWeekNumberHeader: Vw,
  formatWeekdayName: Fw,
  formatYearCaption: Bw,
  formatYearDropdown: zu
}, Symbol.toStringTag, { value: "Module" }));
function Hw(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...zw,
    ...e
  };
}
function Yw(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function Gw(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Uw(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function Kw(e, t, n, r, o = !1) {
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
function Hu(e, t, n, r) {
  let o = (r ?? new ze(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const qw = Hu;
function Yu(e, t, n) {
  return (n ?? new ze(t)).formatMonthYear(e);
}
const Xw = Yu;
function Zw(e, t, n, r) {
  let o = (r ?? new ze(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Qw(e) {
  return "Choose the Month";
}
function Jw() {
  return "";
}
function e1(e) {
  return "Go to the Next Month";
}
function t1(e) {
  return "Go to the Previous Month";
}
function n1(e, t, n) {
  return (n ?? new ze(t)).format(e, "cccc");
}
function r1(e, t) {
  return `Week ${e}`;
}
function o1(e) {
  return "Week Number";
}
function a1(e) {
  return "Choose the Year";
}
const s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Xw,
  labelDay: qw,
  labelDayButton: Hu,
  labelGrid: Yu,
  labelGridcell: Zw,
  labelMonthDropdown: Qw,
  labelNav: Jw,
  labelNext: e1,
  labelPrevious: t1,
  labelWeekNumber: r1,
  labelWeekNumberHeader: o1,
  labelWeekday: n1,
  labelYearDropdown: a1
}, Symbol.toStringTag, { value: "Module" })), nr = (e) => e instanceof HTMLElement ? e : null, Fo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], i1 = (e) => nr(e.querySelector("[data-animated-month]")), $o = (e) => nr(e.querySelector("[data-animated-caption]")), Vo = (e) => nr(e.querySelector("[data-animated-weeks]")), c1 = (e) => nr(e.querySelector("[data-animated-nav]")), l1 = (e) => nr(e.querySelector("[data-animated-weekdays]"));
function d1(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Tn(null), i = Tn(r), l = Tn(!1);
  Ci(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[$e.caption_after_enter] : n[$e.caption_before_enter], v = m ? n[$e.weeks_after_enter] : n[$e.weeks_before_enter], x = s.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Fo(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const k = i1(w);
      k && w.contains(k) && w.removeChild(k);
      const C = $o(w);
      C && C.classList.remove(p);
      const M = Vo(w);
      M && M.classList.remove(v);
    }), s.current = h) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? Fo(x) : [], y = Fo(e.current);
    if (y != null && y.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = c1(e.current);
      b && (b.style.zIndex = "1"), y.forEach((w, k) => {
        const C = g[k];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const M = $o(w);
        M && M.classList.add(p);
        const S = Vo(w);
        S && S.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(p), S && S.classList.remove(v), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const F = l1(C);
        F && (F.style.opacity = "0");
        const z = $o(C);
        z && (z.classList.add(m ? n[$e.caption_before_exit] : n[$e.caption_after_exit]), z.addEventListener("animationend", P));
        const V = Vo(C);
        V && V.classList.add(m ? n[$e.weeks_before_exit] : n[$e.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function u1(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: y, startOfISOWeek: b, startOfWeek: w } = r, k = l ? y(o, r) : s ? b(o) : w(o), C = l ? p(a) : s ? v(x(a)) : h(x(a)), M = f(C, k), S = m(a, o) + 1, P = [];
  for (let V = 0; V <= M; V++) {
    const q = d(k, V);
    if (t && g(q, t))
      break;
    P.push(q);
  }
  const z = (l ? 35 : 42) * S;
  if (i && P.length < z) {
    const V = z - P.length;
    for (let q = 0; q < V; q++) {
      const X = d(P[P.length - 1], 1);
      P.push(X);
    }
  }
  return P;
}
function f1(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function m1(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function di(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function p1(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: v } = r, x = e.reduce((h, g) => {
    const y = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : v(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), w = t.filter((S) => S >= y && S <= b), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < k) {
      const S = t.filter((P) => {
        const F = k - w.length;
        return P > b && P <= o(b, F);
      });
      w.push(...S);
    }
    const C = w.reduce((S, P) => {
      const F = n.ISOWeek ? d(P) : f(P), z = S.find((q) => q.weekNumber === F), V = new Tu(P, g, r);
      return z ? z.days.push(V) : S.push(new ow(F, [V])), S;
    }, []), M = new rw(g, C);
    return h.push(M), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function h1(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : v ? r = f(v, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function v1(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function g1(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function x1(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function xo(e, t) {
  const [n, r] = an(e);
  return [t === void 0 ? n : t, r];
}
function b1(e, t) {
  const [n, r] = h1(e, t), { startOfMonth: o, endOfMonth: a } = t, s = di(e, n, r, t), [i, l] = xo(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Si(() => {
    const M = di(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const d = m1(i, r, e, t), f = u1(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = p1(d, f, e, t), p = x1(m), v = f1(m), x = g1(i, n, e, t), h = v1(i, r, e, t), { disableNavigation: g, onMonthChange: y } = e, b = (M) => p.some((S) => S.days.some((P) => P.isEqualTo(M))), w = (M) => {
    if (g)
      return;
    let S = o(M);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), l(S), y == null || y(S);
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
    goToDay: (M) => {
      b(M) || w(M.date);
    }
  };
}
var rt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(rt || (rt = {}));
function ui(e) {
  return !e[be.disabled] && !e[be.hidden] && !e[be.outside];
}
function y1(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    ui(i) && (i[be.focused] && a < rt.FocusedModifier ? (o = s, a = rt.FocusedModifier) : r != null && r.isEqualTo(s) && a < rt.LastFocused ? (o = s, a = rt.LastFocused) : n(s.date) && a < rt.Selected ? (o = s, a = rt.Selected) : i[be.today] && a < rt.Today && (o = s, a = rt.Today));
  }
  return o || (o = e.find((s) => ui(t(s)))), o;
}
function w1(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: x, endOfWeek: h, max: g, min: y, startOfBroadcastWeek: b, startOfISOWeek: w, startOfWeek: k } = s;
  let M = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (S) => l ? b(S, s) : i ? w(S) : k(S),
    endOfWeek: (S) => l ? v(S) : i ? x(S) : h(S)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? M = g([r, M]) : t === "after" && o && (M = y([o, M])), M;
}
function Gu(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = w1(e, t, n.date, r, o, a, s), d = !!(a.disabled && vt(l, a.disabled, s)), f = !!(a.hidden && vt(l, a.hidden, s)), m = l, p = new Tu(l, m, s);
  return !d && !f ? p : Gu(e, t, p, r, o, a, s, i + 1);
}
function C1(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = an(), l = y1(t.days, n, r || (() => !1), s), [d, f] = an(a ? l : void 0);
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
      const y = Gu(h, g, d, t.navStart, t.navEnd, e, o);
      y && (t.goToDay(y), f(y));
    }
  };
}
function S1(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = xo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (v) => (i == null ? void 0 : i.some((x) => l(x, v))) ?? !1, { min: f, max: m } = e;
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
function k1(e, t, n = 0, r = 0, o = !1, a = ft) {
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
function M1(e, t, n = ft) {
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
function fi(e, t, n = ft) {
  return ht(e, t.from, !1, n) || ht(e, t.to, !1, n) || ht(t, e.from, !1, n) || ht(t, e.to, !1, n);
}
function N1(e, t, n = ft) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? ht(e, i, !1, n) : $u(i, n) ? i.some((l) => ht(e, l, !1, n)) : is(i) ? i.from && i.to ? fi(e, { from: i.from, to: i.to }, n) : !1 : Fu(i) ? M1(e, i.dayOfWeek, n) : Iu(i) ? n.isAfter(i.before, i.after) ? fi(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : vt(e.from, i, n) || vt(e.to, i, n) : Lu(i) || Wu(i) ? vt(e.from, i, n) || vt(e.to, i, n) : !1))
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
function E1(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = xo(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, y = p ? k1(p, d, h, g, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && N1({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), s || l(y), s == null || s(y, p, v, x), y;
    },
    isSelected: (p) => d && ht(d, p, !1, t)
  };
}
function P1(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = xo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, v) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, v), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function R1(e, t) {
  const n = P1(e, t), r = S1(e, t), o = E1(e, t);
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
function A1(e) {
  var Sn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Ae(t.today, t.timeZone)), t.month && (t.month = new Ae(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Ae(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Ae(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Ae(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Ae(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Sn = t.selected) == null ? void 0 : Sn.map((ce) => new Ae(ce, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Ae(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Ae(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Co(() => {
    const ce = { ...ss, ...t.locale };
    return {
      dateLib: new ze({
        locale: ce,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: Tw(t.components),
      formatters: Hw(t.formatters),
      labels: { ...s1, ...t.labels },
      locale: ce,
      classNames: { ...Vu(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: y, onNextClick: b, onPrevClick: w, showWeekNumber: k, styles: C } = t, { formatCaption: M, formatDay: S, formatMonthDropdown: P, formatWeekNumber: F, formatWeekNumberHeader: z, formatWeekdayName: V, formatYearDropdown: q } = r, X = b1(t, a), { days: T, months: U, navStart: I, navEnd: Z, previousMonth: A, nextMonth: j, goToMonth: R } = X, G = Ow(T, t, I, Z, a), { isSelected: E, select: _, selected: H } = R1(t, a) ?? {}, { blur: B, focused: W, isFocusTarget: D, moveFocus: Y, setFocused: Q } = C1(t, X, G, E ?? (() => !1), a), { labelDayButton: re, labelGridcell: se, labelGrid: ue, labelMonthDropdown: ke, labelNav: _e, labelPrevious: tt, labelNext: qe, labelWeekday: nt, labelWeekNumber: Gt, labelWeekNumberHeader: je, labelYearDropdown: Ot } = o, ar = Co(() => Uw(a, t.ISOWeek), [a, t.ISOWeek]), xn = d !== void 0 || v !== void 0, Ut = Me(() => {
    A && (R(A), w == null || w(A));
  }, [A, R, w]), Kt = Me(() => {
    j && (R(j), b == null || b(j));
  }, [R, j, b]), bn = Me((ce, xe) => (oe) => {
    oe.preventDefault(), oe.stopPropagation(), Q(ce), _ == null || _(ce.date, xe, oe), v == null || v(ce.date, xe, oe);
  }, [_, v, Q]), yn = Me((ce, xe) => (oe) => {
    Q(ce), x == null || x(ce.date, xe, oe);
  }, [x, Q]), sr = Me((ce, xe) => (oe) => {
    B(), p == null || p(ce.date, xe, oe);
  }, [B, p]), He = Me((ce, xe) => (oe) => {
    const ge = {
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
    if (ge[oe.key]) {
      oe.preventDefault(), oe.stopPropagation();
      const [Ee, pe] = ge[oe.key];
      Y(Ee, pe);
    }
    h == null || h(ce.date, xe, oe);
  }, [Y, h, t.dir]), Ye = Me((ce, xe) => (oe) => {
    g == null || g(ce.date, xe, oe);
  }, [g]), wn = Me((ce, xe) => (oe) => {
    y == null || y(ce.date, xe, oe);
  }, [y]), ls = Me((ce) => (xe) => {
    const oe = Number(xe.target.value), ge = a.setMonth(a.startOfMonth(ce), oe);
    R(ge);
  }, [a, R]), mt = Me((ce) => (xe) => {
    const oe = Number(xe.target.value), ge = a.setYear(a.startOfMonth(ce), oe);
    R(ge);
  }, [a, R]), { className: Fe, style: _t } = Co(() => ({
    className: [i[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[ne.Root], ...t.style }
  }), [i, t.className, t.style, C]), yo = jw(t), ir = Tn(null);
  d1(ir, !!t.animate, {
    classNames: i,
    months: U,
    focused: W,
    dateLib: a
  });
  const Cn = {
    dayPickerProps: t,
    selected: H,
    select: _,
    isSelected: E,
    months: U,
    nextMonth: j,
    previousMonth: A,
    goToMonth: R,
    getModifiers: G,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return N.createElement(
    ju.Provider,
    { value: Cn },
    N.createElement(
      n.Root,
      { rootRef: t.animate ? ir : void 0, className: Fe, style: _t, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...yo },
      N.createElement(
        n.Months,
        { className: i[ne.Months], style: C == null ? void 0 : C[ne.Months] },
        !t.hideNavigation && !f && N.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Ut, onNextClick: Kt, previousMonth: A, nextMonth: j }),
        U.map((ce, xe) => N.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[ne.Month],
            style: C == null ? void 0 : C[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: xe,
            displayIndex: xe,
            calendarMonth: ce
          },
          f === "around" && !t.hideNavigation && xe === 0 && N.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[ne.PreviousMonthButton], tabIndex: A ? void 0 : -1, "aria-disabled": A ? void 0 : !0, "aria-label": tt(A), onClick: Ut, "data-animated-button": t.animate ? "true" : void 0 },
            N.createElement(n.Chevron, { disabled: A ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          N.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[ne.MonthCaption], style: C == null ? void 0 : C[ne.MonthCaption], calendarMonth: ce, displayIndex: xe }, l != null && l.startsWith("dropdown") ? N.createElement(
            n.DropdownNav,
            { className: i[ne.Dropdowns], style: C == null ? void 0 : C[ne.Dropdowns] },
            (() => {
              const oe = l === "dropdown" || l === "dropdown-months" ? N.createElement(n.MonthsDropdown, { key: "month", className: i[ne.MonthsDropdown], "aria-label": ke(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: ls(ce.date), options: Yw(ce.date, I, Z, r, a), style: C == null ? void 0 : C[ne.Dropdown], value: a.getMonth(ce.date) }) : N.createElement("span", { key: "month" }, P(ce.date, a)), ge = l === "dropdown" || l === "dropdown-years" ? N.createElement(n.YearsDropdown, { key: "year", className: i[ne.YearsDropdown], "aria-label": Ot(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: mt(ce.date), options: Kw(I, Z, r, a, !!t.reverseYears), style: C == null ? void 0 : C[ne.Dropdown], value: a.getYear(ce.date) }) : N.createElement("span", { key: "year" }, q(ce.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ge, oe] : [oe, ge];
            })(),
            N.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            N.createElement(n.CaptionLabel, { className: i[ne.CaptionLabel], role: "status", "aria-live": "polite" }, M(ce.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && xe === m - 1 && N.createElement(
            n.NextMonthButton,
            { type: "button", className: i[ne.NextMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": qe(j), onClick: Kt, "data-animated-button": t.animate ? "true" : void 0 },
            N.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          xe === m - 1 && f === "after" && !t.hideNavigation && N.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Ut, onNextClick: Kt, previousMonth: A, nextMonth: j }),
          N.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(ce.date, a.options, a) || void 0, className: i[ne.MonthGrid], style: C == null ? void 0 : C[ne.MonthGrid] },
            !t.hideWeekdays && N.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[ne.Weekdays], style: C == null ? void 0 : C[ne.Weekdays] },
              k && N.createElement(n.WeekNumberHeader, { "aria-label": je(a.options), className: i[ne.WeekNumberHeader], style: C == null ? void 0 : C[ne.WeekNumberHeader], scope: "col" }, z()),
              ar.map((oe) => N.createElement(n.Weekday, { "aria-label": nt(oe, a.options, a), className: i[ne.Weekday], key: String(oe), style: C == null ? void 0 : C[ne.Weekday], scope: "col" }, V(oe, a.options, a)))
            ),
            N.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[ne.Weeks], style: C == null ? void 0 : C[ne.Weeks] }, ce.weeks.map((oe) => N.createElement(
              n.Week,
              { className: i[ne.Week], key: oe.weekNumber, style: C == null ? void 0 : C[ne.Week], week: oe },
              k && // biome-ignore lint/a11y/useSemanticElements: react component
              N.createElement(n.WeekNumber, { week: oe, style: C == null ? void 0 : C[ne.WeekNumber], "aria-label": Gt(oe.weekNumber, {
                locale: s
              }), className: i[ne.WeekNumber], scope: "row", role: "rowheader" }, F(oe.weekNumber, a)),
              oe.days.map((ge) => {
                const { date: Ee } = ge, pe = G(ge);
                if (pe[be.focused] = !pe.hidden && !!(W != null && W.isEqualTo(ge)), pe[Ze.selected] = (E == null ? void 0 : E(Ee)) || pe.selected, is(H)) {
                  const { from: K, to: le } = H;
                  pe[Ze.range_start] = !!(K && le && a.isSameDay(Ee, K)), pe[Ze.range_end] = !!(K && le && a.isSameDay(Ee, le)), pe[Ze.range_middle] = ht(H, Ee, !0, a);
                }
                const kn = Gw(pe, C, t.modifiersStyles), cr = _w(pe, i, t.modifiersClassNames), L = !xn && !pe.hidden ? se(Ee, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  N.createElement(n.Day, { key: `${a.format(Ee, "yyyy-MM-dd")}_${a.format(ge.displayMonth, "yyyy-MM")}`, day: ge, modifiers: pe, className: cr.join(" "), style: kn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": L, "data-day": a.format(Ee, "yyyy-MM-dd"), "data-month": ge.outside ? a.format(Ee, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && xn ? N.createElement(n.DayButton, { className: i[ne.DayButton], style: C == null ? void 0 : C[ne.DayButton], type: "button", day: ge, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: D(ge) ? 0 : -1, "aria-label": re(Ee, pe, a.options, a), onClick: bn(ge, pe), onBlur: sr(ge, pe), onFocus: yn(ge, pe), onKeyDown: He(ge, pe), onMouseEnter: Ye(ge, pe), onMouseLeave: wn(ge, pe) }, S(Ee, a.options, a)) : !pe.hidden && S(ge.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      N.createElement(n.Footer, { className: i[ne.Footer], style: C == null ? void 0 : C[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const D1 = {
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
}, O1 = (e, t, n) => {
  n = n || {};
  let r;
  const o = D1[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, _1 = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, T1 = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, j1 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, I1 = {
  date: on({
    formats: _1,
    defaultWidth: "full"
  }),
  time: on({
    formats: T1,
    defaultWidth: "full"
  }),
  dateTime: on({
    formats: j1,
    defaultWidth: "full"
  })
}, L1 = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, W1 = (e, t, n, r) => L1[e], F1 = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, $1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, V1 = {
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
}, B1 = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, z1 = {
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
}, H1 = {
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
}, Y1 = (e, t) => {
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
}, G1 = {
  ordinalNumber: Y1,
  era: at({
    values: F1,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: $1,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: at({
    values: V1,
    defaultWidth: "wide"
  }),
  day: at({
    values: B1,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: z1,
    defaultWidth: "wide",
    formattingValues: H1,
    defaultFormattingWidth: "wide"
  })
}, U1 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, K1 = /\d+/i, q1 = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, X1 = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, Z1 = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, Q1 = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, J1 = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, e2 = {
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
}, t2 = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, n2 = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, r2 = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, o2 = {
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
}, a2 = {
  ordinalNumber: Pu({
    matchPattern: U1,
    parsePattern: K1,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: st({
    matchPatterns: q1,
    defaultMatchWidth: "wide",
    parsePatterns: X1,
    defaultParseWidth: "any"
  }),
  quarter: st({
    matchPatterns: Z1,
    defaultMatchWidth: "wide",
    parsePatterns: Q1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: st({
    matchPatterns: J1,
    defaultMatchWidth: "wide",
    parsePatterns: e2,
    defaultParseWidth: "any"
  }),
  day: st({
    matchPatterns: t2,
    defaultMatchWidth: "wide",
    parsePatterns: n2,
    defaultParseWidth: "any"
  }),
  dayPeriod: st({
    matchPatterns: r2,
    defaultMatchWidth: "any",
    parsePatterns: o2,
    defaultParseWidth: "any"
  })
}, mi = {
  code: "ja",
  formatDistance: O1,
  formatLong: I1,
  formatRelative: W1,
  localize: G1,
  match: a2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, s2 = {
  ...mi,
  localize: {
    ...mi.localize,
    day: (e) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e] || ""
  }
}, i2 = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Cr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Uu = N.forwardRef(
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
    animate: d = !0,
    defaultMonth: f,
    inline: m = !1,
    ...p
  }, v) => {
    const [x, h] = N.useState(
      () => Cr(n || null)
    ), g = e !== void 0, y = g ? Cr(e) : x, b = N.useMemo(
      () => Cr(r || null),
      [r]
    ), w = N.useMemo(
      () => Cr(o || null),
      [o]
    ), k = N.useMemo(() => !b || !w ? !0 : b <= w, [b, w]), C = (M) => {
      const S = M || null;
      g || h(S), t == null || t(S);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: O(i2(m), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          A1,
          {
            animate: d,
            mode: "single",
            selected: y || void 0,
            onSelect: C,
            locale: s2,
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
            defaultMonth: f || y || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const M = Vu(), S = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${M.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
                // Header elements
                month_caption: "text-base font-bold text-body-primary px-xxs mb-md",
                weekdays: "mb-xs",
                weekday: "text-body-secondary text-[13px] font-normal leading-5 tracking-normal text-center",
                // Navigation
                button_previous: S,
                button_next: S,
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
Uu.displayName = "Calendar";
const pi = ae(
  `font-normal inline-flex items-center justify-center border border-transparent
  decoration-solid decoration-from-font underline-offset-[3px] transition-colors
  duration-75 [:not(:hover):not(:active)]:underline`,
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
        xs: "gap-xxxs text-xs",
        inherit: ""
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), c2 = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Ku = N.forwardRef(
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
    const d = r ? Vr : "a", m = c2[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: O(pi({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: O(pi({ intent: t, size: n }), e),
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
Ku.displayName = "TextLink";
const l2 = ae(
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
), d2 = ae("shrink-0", {
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
}), u2 = ae("text-body-primary font-bold text-md"), f2 = ae(
  "text-body-primary font-normal leading-6 text-md"
), m2 = {
  info: Er,
  success: au,
  warning: Er,
  alert: Er
}, p2 = N.forwardRef(
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
    const f = i || m2[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: O(l2({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: O(d2({ intent: t, size: n }), "top-0.5 relative"), children: Ie(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 gap-xxs flex flex-1 flex-col", children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: O(u2()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                Ku,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: O(f2()), children: a || o })
          ] })
        ]
      }
    );
  }
);
p2.displayName = "Callout";
const h2 = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), v2 = ae(
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
), Pr = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: O(h2({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      rc,
      {
        id: l,
        className: O(v2({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          ac,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(_x, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(tu, { style: { strokeWidth: 3 } })
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
Pr.displayName = "Checkbox";
const g2 = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: O("gap-xs flex flex-col", t), children: e });
g2.displayName = "CheckboxGroup";
const x2 = ae(
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
), b2 = ae(
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
), Bo = ae(
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
), qu = N.forwardRef(
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
    return /* @__PURE__ */ c.jsxs("div", { className: O(x2({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Bo({ position: "prefix", interactive: !1 }),
          children: Ie(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: b2({ hasPrefix: d, hasTrailing: f }),
          ...i
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Bo({
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
          className: Bo({
            position: "trailing",
            interactive: !1
          }),
          children: Ie(n, { size: o })
        }
      ) })
    ] });
  }
);
qu.displayName = "Input";
const y2 = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Sr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, w2 = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), C2 = N.forwardRef(
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
    formatDate: f = w2,
    className: m,
    contentClassName: p,
    defaultOpen: v = !1,
    open: x,
    onOpenChange: h,
    side: g = "bottom"
  }, y) => {
    const [b, w] = N.useState(
      () => Sr(n || null)
    ), [k, C] = N.useState(v), M = e !== void 0, S = M ? Sr(e) : b, P = x !== void 0 ? x : k, F = N.useMemo(
      () => Sr(r || null),
      [r]
    ), z = N.useMemo(
      () => Sr(o || null),
      [o]
    ), V = N.useMemo(() => !F || !z ? !0 : F <= z, [F, z]), q = (I) => {
      const Z = I || null;
      M || w(Z), t == null || t(Z), Z && (x === void 0 && C(!1), h == null || h(!1));
    }, X = (I) => {
      x === void 0 && C(I), h == null || h(I);
    }, T = (I) => {
      switch (I.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          I.preventDefault(), P || X(!0);
          break;
        case "Escape":
          P && (I.preventDefault(), X(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(kl, { open: P, onOpenChange: X, children: [
      /* @__PURE__ */ c.jsx(Ml, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        qu,
        {
          ref: y,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: S ? f(S) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || xx,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && X(!P),
          className: O(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            P && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: T,
          onClick: () => !a && X(!P),
          "aria-expanded": P,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(Nl, { children: /* @__PURE__ */ c.jsx(
        Ka,
        {
          className: O(y2, p),
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
            Uu,
            {
              value: S,
              onChange: q,
              ...F && { minDate: F },
              ...z && { maxDate: z },
              disabled: !V,
              showOutsideDays: !0,
              fixedWeeks: !0,
              animate: !0,
              defaultMonth: S || /* @__PURE__ */ new Date()
            }
          )
        }
      ) })
    ] });
  }
);
C2.displayName = "DatePicker";
const S2 = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], hS = ({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  busy: o,
  actions: a = S2,
  cancellable: s = !0,
  cancelButtonLabel: i = "キャンセル"
}) => {
  const [l, d] = N.useState(-1), m = o !== void 0 ? o : l !== -1, p = async (x) => {
    const h = a.indexOf(x);
    if (x.onAction) {
      d(h);
      const g = await x.onAction(t);
      if (d(-1), g === !1)
        return;
    } else
      d(-1);
    e && t(x.value);
  }, v = () => {
    t();
  };
  return /* @__PURE__ */ c.jsx(ka, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(Ma, { children: /* @__PURE__ */ c.jsx(
    Na,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        Ea,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: (x) => {
            (!s || m) && x.preventDefault();
          },
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
                children: n && /* @__PURE__ */ c.jsx(
                  ec,
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
                className: `border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary min-h-40 flex-1 overflow-y-auto
                border-y-1`,
                children: r
              }
            ),
            /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex flex-shrink-0 justify-between", children: [
              s && /* @__PURE__ */ c.jsx(Pa, { asChild: !0, children: /* @__PURE__ */ c.jsx(
                Ke,
                {
                  intent: "tertiary",
                  onClick: v,
                  disabled: m,
                  children: i
                }
              ) }),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${s ? "" : "ml-auto"}`, children: a.map((x, h) => {
                const { label: g, classNames: y, onAction: b, value: w, ...k } = x;
                return /* @__PURE__ */ c.jsx(
                  Ke,
                  {
                    loading: l === h,
                    ...k,
                    intent: x.intent || "primary",
                    className: y,
                    onClick: () => p(x),
                    children: g
                  },
                  h
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, Xu = xa(void 0), Zu = () => {
  const e = ba(Xu);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, k2 = ({
  isOpen: e,
  onClose: t,
  children: n,
  initialStep: r = 0,
  currentStep: o,
  onStepChange: a
}) => {
  const [s, i] = an(r), l = o !== void 0 ? o : s, d = N.Children.toArray(n).filter(
    (g) => N.isValidElement(g) && g.type === Qu
  ), f = d.length, m = (g) => {
    g >= 0 && g < f && (o === void 0 && i(g), a == null || a(g));
  }, x = {
    currentStep: l,
    totalSteps: f,
    goToStep: m,
    nextStep: () => m(l + 1),
    prevStep: () => m(l - 1),
    isFirstStep: l === 0,
    isLastStep: l === f - 1
  }, h = (g) => {
    o === void 0 && i(r), t(g);
  };
  return /* @__PURE__ */ c.jsx(Xu.Provider, { value: x, children: /* @__PURE__ */ c.jsx(ka, { open: e, onOpenChange: h, children: /* @__PURE__ */ c.jsx(Ma, { children: /* @__PURE__ */ c.jsx(
    Na,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        Ea,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform overflow-auto`,
          children: d[l]
        }
      )
    }
  ) }) }) });
}, Qu = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), M2 = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  ec,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), N2 = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary min-h-40 flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), E2 = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
  /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && /* @__PURE__ */ c.jsx(Pa, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ke, { intent: "tertiary", onClick: r, children: n }) }) }),
  e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
] }), P2 = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Zu(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(Pa, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ke, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ke, { ...o, onClick: i, children: e });
}, vS = {
  Root: k2,
  Step: Qu,
  Header: M2,
  Body: N2,
  Footer: E2,
  Action: P2,
  useMultiStepDialog: Zu
}, R2 = ae(
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
), A2 = ae(
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
), D2 = N.forwardRef(
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
      className: O(A2({ intent: r }), a),
      ...s
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(Jv, { ...l, children: [
      Ie(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
D2.displayName = "DropdownItem";
const O2 = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  eg,
  {
    ref: n,
    className: O(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
O2.displayName = "DropdownSeparator";
const _2 = N.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Qv,
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
_2.displayName = "DropdownLabel";
const T2 = N.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Xv, { children: /* @__PURE__ */ c.jsx(
  Zv,
  {
    ref: o,
    className: O(R2({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
T2.displayName = "DropdownContent";
const j2 = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(Kv, { ...a, children: e });
};
j2.displayName = "Dropdown";
const I2 = N.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  qv,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
I2.displayName = "DropdownTrigger";
const gS = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: a,
  optional: s
}) => {
  const i = N.isValidElement(t) ? N.cloneElement(
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
const L2 = [
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
], W2 = ae(
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
), hi = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: a = "md",
  style: s,
  selected: i = !1
}) => {
  const l = L2.find(
    (d) => d.code === e
  );
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: O(
        W2({ size: a, selected: i, interactive: !!o }),
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
}, F2 = kl, $2 = Ml, Ju = N.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Nl, { children: /* @__PURE__ */ c.jsx(
  Ka,
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
Ju.displayName = Ka.displayName;
var vi = 1, V2 = 0.9, B2 = 0.8, z2 = 0.17, zo = 0.1, Ho = 0.999, H2 = 0.9999, Y2 = 0.99, G2 = /[\\\/_+.#"@\[\(\{&]/, U2 = /[\\\/_+.#"@\[\(\{&]/g, K2 = /[\s-]/, ef = /[\s-]/g;
function pa(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? vi : Y2;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, v, x; d >= 0; ) m = pa(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= vi : G2.test(e.charAt(d - 1)) ? (m *= B2, v = e.slice(o, d - 1).match(U2), v && o > 0 && (m *= Math.pow(Ho, v.length))) : K2.test(e.charAt(d - 1)) ? (m *= V2, x = e.slice(o, d - 1).match(ef), x && o > 0 && (m *= Math.pow(Ho, x.length))) : (m *= z2, o > 0 && (m *= Math.pow(Ho, d - o))), e.charAt(d) !== t.charAt(a) && (m *= H2)), (m < zo && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = pa(e, t, n, r, d + 1, a + 2, s), p * zo > m && (m = p * zo)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function gi(e) {
  return e.toLowerCase().replace(ef, " ");
}
function q2(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, pa(e, t, gi(e), gi(t), 0, 0, {});
}
var Rn = '[cmdk-group=""]', Yo = '[cmdk-group-items=""]', X2 = '[cmdk-group-heading=""]', tf = '[cmdk-item=""]', xi = `${tf}:not([aria-disabled="true"])`, ha = "cmdk-item-select", en = "data-value", Z2 = (e, t, n) => q2(e, t, n), nf = u.createContext(void 0), rr = () => u.useContext(nf), rf = u.createContext(void 0), cs = () => u.useContext(rf), of = u.createContext(void 0), af = u.forwardRef((e, t) => {
  let n = tn(() => {
    var E, _;
    return { search: "", value: (_ = (E = e.value) != null ? E : e.defaultValue) != null ? _ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = tn(() => /* @__PURE__ */ new Set()), o = tn(() => /* @__PURE__ */ new Map()), a = tn(() => /* @__PURE__ */ new Map()), s = tn(() => /* @__PURE__ */ new Set()), i = sf(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...y } = e, b = Ne(), w = Ne(), k = Ne(), C = u.useRef(null), M = cC();
  Vt(() => {
    if (f !== void 0) {
      let E = f.trim();
      n.current.value = E, S.emit();
    }
  }, [f]), Vt(() => {
    M(6, X);
  }, []);
  let S = u.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, _, H) => {
    var B, W, D, Y;
    if (!Object.is(n.current[E], _)) {
      if (n.current[E] = _, E === "search") q(), z(), M(1, V);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(k);
          Q ? Q.focus() : (B = document.getElementById(b)) == null || B.focus();
        }
        if (M(7, () => {
          var Q;
          n.current.selectedItemId = (Q = T()) == null ? void 0 : Q.id, S.emit();
        }), H || M(5, X), ((W = i.current) == null ? void 0 : W.value) !== void 0) {
          let Q = _ ?? "";
          (Y = (D = i.current).onValueChange) == null || Y.call(D, Q);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), P = u.useMemo(() => ({ value: (E, _, H) => {
    var B;
    _ !== ((B = a.current.get(E)) == null ? void 0 : B.value) && (a.current.set(E, { value: _, keywords: H }), n.current.filtered.items.set(E, F(_, H)), M(2, () => {
      z(), S.emit();
    }));
  }, item: (E, _) => (r.current.add(E), _ && (o.current.has(_) ? o.current.get(_).add(E) : o.current.set(_, /* @__PURE__ */ new Set([E]))), M(3, () => {
    q(), z(), n.current.value || V(), S.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let H = T();
    M(4, () => {
      q(), (H == null ? void 0 : H.getAttribute("id")) === E && V(), S.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: k, labelId: w, listInnerRef: C }), []);
  function F(E, _) {
    var H, B;
    let W = (B = (H = i.current) == null ? void 0 : H.filter) != null ? B : Z2;
    return E ? W(E, n.current.search, _) : 0;
  }
  function z() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, _ = [];
    n.current.filtered.groups.forEach((B) => {
      let W = o.current.get(B), D = 0;
      W.forEach((Y) => {
        let Q = E.get(Y);
        D = Math.max(Q, D);
      }), _.push([B, D]);
    });
    let H = C.current;
    U().sort((B, W) => {
      var D, Y;
      let Q = B.getAttribute("id"), re = W.getAttribute("id");
      return ((D = E.get(re)) != null ? D : 0) - ((Y = E.get(Q)) != null ? Y : 0);
    }).forEach((B) => {
      let W = B.closest(Yo);
      W ? W.appendChild(B.parentElement === W ? B : B.closest(`${Yo} > *`)) : H.appendChild(B.parentElement === H ? B : B.closest(`${Yo} > *`));
    }), _.sort((B, W) => W[1] - B[1]).forEach((B) => {
      var W;
      let D = (W = C.current) == null ? void 0 : W.querySelector(`${Rn}[${en}="${encodeURIComponent(B[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function V() {
    let E = U().find((H) => H.getAttribute("aria-disabled") !== "true"), _ = E == null ? void 0 : E.getAttribute(en);
    S.setState("value", _ || void 0);
  }
  function q() {
    var E, _, H, B;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let W = 0;
    for (let D of r.current) {
      let Y = (_ = (E = a.current.get(D)) == null ? void 0 : E.value) != null ? _ : "", Q = (B = (H = a.current.get(D)) == null ? void 0 : H.keywords) != null ? B : [], re = F(Y, Q);
      n.current.filtered.items.set(D, re), re > 0 && W++;
    }
    for (let [D, Y] of o.current) for (let Q of Y) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = W;
  }
  function X() {
    var E, _, H;
    let B = T();
    B && (((E = B.parentElement) == null ? void 0 : E.firstChild) === B && ((H = (_ = B.closest(Rn)) == null ? void 0 : _.querySelector(X2)) == null || H.scrollIntoView({ block: "nearest" })), B.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${tf}[aria-selected="true"]`);
  }
  function U() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(xi)) || []);
  }
  function I(E) {
    let _ = U()[E];
    _ && S.setState("value", _.getAttribute(en));
  }
  function Z(E) {
    var _;
    let H = T(), B = U(), W = B.findIndex((Y) => Y === H), D = B[W + E];
    (_ = i.current) != null && _.loop && (D = W + E < 0 ? B[B.length - 1] : W + E === B.length ? B[0] : B[W + E]), D && S.setState("value", D.getAttribute(en));
  }
  function A(E) {
    let _ = T(), H = _ == null ? void 0 : _.closest(Rn), B;
    for (; H && !B; ) H = E > 0 ? sC(H, Rn) : iC(H, Rn), B = H == null ? void 0 : H.querySelector(xi);
    B ? S.setState("value", B.getAttribute(en)) : Z(E);
  }
  let j = () => I(U().length - 1), R = (E) => {
    E.preventDefault(), E.metaKey ? j() : E.altKey ? A(1) : Z(1);
  }, G = (E) => {
    E.preventDefault(), E.metaKey ? I(0) : E.altKey ? A(-1) : Z(-1);
  };
  return u.createElement(J.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (E) => {
    var _;
    (_ = y.onKeyDown) == null || _.call(y, E);
    let H = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || H)) switch (E.key) {
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
        g && E.ctrlKey && G(E);
        break;
      }
      case "ArrowUp": {
        G(E);
        break;
      }
      case "Home": {
        E.preventDefault(), I(0);
        break;
      }
      case "End": {
        E.preventDefault(), j();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let B = T();
        if (B) {
          let W = new Event(ha);
          B.dispatchEvent(W);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: dC }, l), bo(e, (E) => u.createElement(rf.Provider, { value: S }, u.createElement(nf.Provider, { value: P }, E))));
}), Q2 = u.forwardRef((e, t) => {
  var n, r;
  let o = Ne(), a = u.useRef(null), s = u.useContext(of), i = rr(), l = sf(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Vt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = cf(o, a, [e.value, e.children, a], e.keywords), m = cs(), p = Et((M) => M.value && M.value === f.current), v = Et((M) => d || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let M = a.current;
    if (!(!M || e.disabled)) return M.addEventListener(ha, x), () => M.removeEventListener(ha, x);
  }, [v, e.onSelect, e.disabled]);
  function x() {
    var M, S;
    h(), (S = (M = l.current).onSelect) == null || S.call(M, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: y, onSelect: b, forceMount: w, keywords: k, ...C } = e;
  return u.createElement(J.div, { ref: gt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), J2 = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ne(), i = u.useRef(null), l = u.useRef(null), d = Ne(), f = rr(), m = Et((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Vt(() => f.group(s), []), cf(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(J.div, { ref: gt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), bo(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(of.Provider, { value: p }, v))));
}), eC = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Et((s) => !s.search);
  return !n && !a ? null : u.createElement(J.div, { ref: gt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), tC = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = cs(), s = Et((d) => d.search), i = Et((d) => d.selectedItemId), l = rr();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(J.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), nC = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = Et((d) => d.selectedItemId), l = rr();
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
  }, []), u.createElement(J.div, { ref: gt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, bo(e, (d) => u.createElement("div", { ref: gt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), rC = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(ka, { open: n, onOpenChange: r }, u.createElement(Ma, { container: s }, u.createElement(Na, { "cmdk-overlay": "", className: o }), u.createElement(Ea, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(af, { ref: t, ...i }))));
}), oC = u.forwardRef((e, t) => Et((n) => n.filtered.count === 0) ? u.createElement(J.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), aC = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(J.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, bo(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), We = Object.assign(af, { List: nC, Item: Q2, Input: tC, Group: J2, Separator: eC, Dialog: rC, Empty: oC, Loading: aC });
function sC(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function iC(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function sf(e) {
  let t = u.useRef(e);
  return Vt(() => {
    t.current = e;
  }), t;
}
var Vt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function tn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Et(e) {
  let t = cs(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function cf(e, t, n, r = []) {
  let o = u.useRef(), a = rr();
  return Vt(() => {
    var s;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(en, i), o.current = i;
  }), o;
}
var cC = () => {
  let [e, t] = u.useState(), n = tn(() => /* @__PURE__ */ new Map());
  return Vt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function lC(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function bo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(lC(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var dC = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const lf = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  We,
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
lf.displayName = We.displayName;
const df = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(ou, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            We.Input,
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
df.displayName = We.Input.displayName;
const uf = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  We.List,
  {
    ref: n,
    className: O("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
uf.displayName = We.List.displayName;
const ff = N.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  We.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
ff.displayName = We.Empty.displayName;
const Rr = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  We.Group,
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
Rr.displayName = We.Group.displayName;
const uC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  We.Separator,
  {
    ref: n,
    className: O(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
uC.displayName = We.Separator.displayName;
const Ar = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  We.Item,
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
Ar.displayName = We.Item.displayName;
const bi = ae("ease-in-out transition-all duration-300", {
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
}), fC = ({
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
  selectAllCountLabel: v = "オプション",
  clearAllLabel: x = "すべてクリア",
  applyLabel: h = "適用",
  moreSelectedLabel: g = "その他",
  searchPlaceholder: y = "オプションを検索...",
  maxCount: b = 10,
  modalPopover: w = !1,
  className: k,
  hideSelectAll: C = !1,
  searchable: M = !0,
  emptyIndicator: S = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: F = !1,
  popoverClassName: z,
  disabled: V = !1,
  invalid: q = !1,
  responsive: X,
  minWidth: T,
  maxWidth: U,
  deduplicateOptions: I = !1,
  resetOnDefaultValueChange: Z = !0,
  closeOnSelect: A = !1,
  filterByValueAndLabel: j = !1,
  renderOption: R,
  customTrigger: G,
  selectionDisplayMode: E = "default",
  hideSelection: _ = !1,
  ...H
}, B) => {
  const [W, D] = N.useState(o), [Y, Q] = N.useState(!1), [re, se] = N.useState(""), [ue, ke] = N.useState(""), [_e, tt] = N.useState(""), qe = N.useRef(W.length), nt = N.useRef(Y), Gt = N.useRef(re), je = N.useCallback(
    (L, K = "polite") => {
      K === "assertive" ? (tt(L), setTimeout(() => tt(""), 100)) : (ke(L), setTimeout(() => ke(""), 100));
    },
    []
  ), Ot = N.useId(), ar = `${Ot}-listbox`, xn = `${Ot}-description`, Ut = `${Ot}-count`, Kt = N.useRef(o), bn = N.useCallback(
    (L) => {
      const K = L[0];
      return !!(K && typeof K == "object" && "heading" in K);
    },
    []
  ), yn = N.useCallback((L, K) => {
    if (L.length !== K.length) return !1;
    const le = [...L].sort(), ye = [...K].sort();
    return le.every((Pe, Mn) => Pe === ye[Mn]);
  }, []), sr = N.useCallback(() => {
    D(o), Q(!1), se(""), t(o);
  }, [o, t]), He = N.useRef(null);
  N.useImperativeHandle(
    B,
    () => ({
      reset: sr,
      getSelectedValues: () => W,
      setSelectedValues: (L) => {
        D(L), t(L);
      },
      clear: () => {
        D([]), t([]);
      },
      focus: () => {
        if (He.current) {
          He.current.focus();
          const L = He.current.style.outline, K = He.current.style.outlineOffset;
          He.current.style.outline = "2px solid hsl(var(--ring))", He.current.style.outlineOffset = "2px", setTimeout(() => {
            He.current && (He.current.style.outline = L, He.current.style.outlineOffset = K);
          }, 1e3);
        }
      }
    }),
    [sr, W, t]
  );
  const [Ye, wn] = N.useState("desktop");
  N.useEffect(() => {
    if (typeof window > "u") return;
    const L = () => {
      const K = window.innerWidth;
      K < 640 ? wn("mobile") : K < 1024 ? wn("tablet") : wn("desktop");
    };
    return L(), window.addEventListener("resize", L), () => {
      typeof window < "u" && window.removeEventListener("resize", L);
    };
  }, []);
  const mt = (() => {
    if (!X)
      return {
        maxCount: b,
        compactMode: !1
      };
    if (X === !0) {
      const le = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ye];
      return {
        maxCount: (le == null ? void 0 : le.maxCount) ?? b,
        compactMode: (le == null ? void 0 : le.compactMode) ?? !1
      };
    }
    const L = X[Ye];
    return {
      maxCount: (L == null ? void 0 : L.maxCount) ?? b,
      compactMode: (L == null ? void 0 : L.compactMode) ?? !1
    };
  })(), Fe = N.useCallback(() => {
    if (e.length === 0) return [];
    let L;
    bn(e) ? L = e.flatMap((Pe) => Pe.options) : L = e;
    const K = /* @__PURE__ */ new Set(), le = [], ye = [];
    return L.forEach((Pe) => {
      K.has(Pe.value) ? (le.push(Pe.value), I || ye.push(Pe)) : (K.add(Pe.value), ye.push(Pe));
    }), process.env.NODE_ENV === "development" && le.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${I ? "automatically removed" : "detected"}: ${le.join(
        ", "
      )}. ${I ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), I ? ye : L;
  }, [e, I, bn]), _t = N.useCallback(
    (L) => {
      const K = Fe().find((le) => le.value === L);
      return !K && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${L}" not found in options list`
      ), K;
    },
    [Fe]
  ), yo = N.useCallback(
    (L, K) => {
      const [le, ye] = L.split(":");
      if (!j)
        return ye && ye.toLowerCase().includes(K.toLowerCase()) ? 1 : 0;
      const Pe = K.toLowerCase();
      return ye && ye.toLowerCase().includes(Pe) || le && le.toLowerCase().includes(Pe) ? 1 : 0;
    },
    [j]
  ), ir = (L) => {
    if (L.key === "Enter")
      Q(!0);
    else if (L.key === "Backspace" && !L.currentTarget.value) {
      const K = [...W];
      K.pop(), D(K), t(K);
    }
  }, Cn = (L) => {
    if (V) return;
    const K = _t(L);
    if (K != null && K.disabled) return;
    const le = W.includes(L) ? W.filter((ye) => ye !== L) : [...W, L];
    D(le), t(le), A && Q(!1);
  }, Sn = () => {
    V || (D([]), n([]), t([]));
  }, ce = () => {
    V || Q((L) => !L);
  }, xe = () => {
    if (V) return;
    const L = W.slice(
      0,
      mt.maxCount
    );
    D(L), t(L);
  }, oe = () => {
    if (V) return;
    const L = Fe().filter((K) => !K.disabled);
    if (W.length === L.length)
      Sn();
    else {
      const K = L.map((le) => le.value);
      D(K), t(K);
    }
    A && Q(!1);
  }, Ee = R || ((L) => {
    const { option: K, location: le, onRemove: ye, disabled: Pe } = L;
    return le === "badge" ? /* @__PURE__ */ c.jsx(
      hi,
      {
        className: O(
          bi({ variant: r }),
          mt.compactMode && "text-xs px-1.5 py-0.5",
          Ye === "mobile" && "max-w-[120px] truncate",
          F && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Pe && "cursor-not-allowed"
        ),
        ...!Pe && { onRemove: ye },
        children: K.label
      }
    ) : K.label;
  });
  N.useEffect(() => {
    if (!Z) return;
    const L = Kt.current;
    yn(L, o) || (yn(W, o) || D(o), Kt.current = [...o]);
  }, [o, W, yn, Z]);
  const kn = {
    minWidth: T || (Ye === "mobile" ? "0px" : "200px"),
    maxWidth: U || "100%",
    width: P ? "auto" : "100%"
  }, cr = N.useMemo(() => E === "default" || W.length === 0 ? a : W.map((L) => {
    var K;
    return (K = _t(L)) == null ? void 0 : K.label;
  }).filter(Boolean).join(", "), [W, _t, a, E]);
  return N.useEffect(() => {
    Y || se("");
  }, [Y]), N.useEffect(() => {
    const L = W.length, K = Fe(), le = K.filter((ye) => !ye.disabled).length;
    if (L !== qe.current) {
      const ye = L - qe.current;
      if (ye > 0) {
        const Mn = W.slice(-ye).map((yf) => {
          var ds;
          return (ds = K.find((wf) => wf.value === yf)) == null ? void 0 : ds.label;
        }).filter(Boolean);
        Mn.length === 1 ? je(
          `${Mn[0]} selected. ${L} of ${le} options selected.`
        ) : je(
          `${Mn.length} options selected. ${L} of ${le} total selected.`
        );
      } else ye < 0 && je(
        `Option removed. ${L} of ${le} options selected.`
      );
      qe.current = L;
    }
    Y !== nt.current && (je(
      Y ? `Dropdown opened. ${le} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), nt.current = Y), re !== Gt.current && re !== void 0 && (re && Y && je(`Searching for "${re}"`), Gt.current = re);
  }, [W, Y, re, je, Fe]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: _e })
    ] }),
    /* @__PURE__ */ c.jsxs(
      F2,
      {
        open: Y,
        onOpenChange: Q,
        modal: w,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: xn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Ut, className: "sr-only", "aria-live": "polite", children: W.length === 0 ? l : `${W.length} option${W.length === 1 ? "" : "s"} selected: ${W.map((L) => {
            var K;
            return (K = _t(L)) == null ? void 0 : K.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: O(P && "w-auto", k), children: [
            /* @__PURE__ */ c.jsx($2, { asChild: !0, children: G || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: He,
                ...H,
                onClick: ce,
                disabled: V,
                className: O(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  P ? "w-auto" : "w-full",
                  !q && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  q && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  mt.compactMode && "min-h-8 text-sm",
                  Ye === "mobile" && "min-h-12"
                ),
                style: {
                  ...kn,
                  maxWidth: `min(${kn.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": Y,
                "aria-haspopup": "listbox",
                "aria-controls": Y ? ar : void 0,
                "aria-describedby": `${xn} ${Ut}`,
                "aria-label": `Multi-select: ${W.length} of ${Fe().length} options selected. ${s}`,
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
                            E === "inline" && "truncate",
                            V ? "text-body-disabled" : Y || E === "inline" && cr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: cr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        nu,
                        {
                          className: O(
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
            !(_ || E === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              W.slice(0, mt.maxCount).map((L) => {
                const K = _t(L);
                return K ? /* @__PURE__ */ c.jsx("div", { children: Ee({
                  option: K,
                  location: "badge",
                  onRemove: () => Cn(L),
                  disabled: V
                }) }, L) : null;
              }).filter(Boolean),
              W.length > mt.maxCount && /* @__PURE__ */ c.jsxs(
                hi,
                {
                  className: O(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    bi({ variant: r }),
                    mt.compactMode && "text-xs px-1.5 py-0.5",
                    F && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    V && "cursor-not-allowed"
                  ),
                  ...!V && { onRemove: xe },
                  children: [
                    "+ ",
                    W.length - mt.maxCount,
                    " ",
                    g
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Ju,
            {
              id: ar,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: O(
                "p-0 w-auto",
                Ye === "mobile" && "w-[85vw] max-w-[280px]",
                Ye === "tablet" && "max-w-md w-[70vw]",
                Ye === "desktop" && "min-w-[300px]",
                z
              ),
              style: {
                maxWidth: `min(${kn.maxWidth}, 85vw)`,
                maxHeight: Ye === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(lf, { filter: yo, children: [
                M && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${Ot}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    df,
                    {
                      placeholder: y,
                      onKeyDown: ir,
                      value: re,
                      onValueChange: se,
                      "aria-label": f,
                      "aria-describedby": `${Ot}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  uf,
                  {
                    className: O(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ye === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(ff, { children: S }),
                      !C && !re && /* @__PURE__ */ c.jsx(Rr, { children: /* @__PURE__ */ c.jsxs(
                        Ar,
                        {
                          value: "select-all",
                          onSelect: oe,
                          role: "option",
                          "aria-selected": W.length === Fe().filter((L) => !L.disabled).length,
                          "aria-label": `Select all ${Fe().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              Pr,
                              {
                                className: "mr-xs",
                                checked: W.length === Fe().filter((L) => !L.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              p,
                              Fe().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                Fe().length,
                                " ",
                                v
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      bn(e) ? e.map((L) => /* @__PURE__ */ c.jsx(Rr, { heading: L.heading, children: L.options.map((K) => {
                        const le = W.includes(K.value);
                        return /* @__PURE__ */ c.jsxs(
                          Ar,
                          {
                            value: `${K.value}:${K.label}`,
                            onSelect: () => Cn(K.value),
                            role: "option",
                            "aria-selected": le,
                            "aria-disabled": K.disabled ?? !1,
                            "aria-label": `${K.label}${le ? ", selected" : ", not selected"}${K.disabled ? ", disabled" : ""}`,
                            className: O(
                              "cursor-pointer",
                              K.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!K.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Pr, { className: "mr-xs", checked: le }),
                              Ee({
                                option: K,
                                location: "dropdown",
                                isSelected: le
                              })
                            ]
                          },
                          K.value
                        );
                      }) }, L.heading)) : /* @__PURE__ */ c.jsx(Rr, { children: e.map((L) => {
                        const K = W.includes(L.value);
                        return /* @__PURE__ */ c.jsxs(
                          Ar,
                          {
                            value: `${L.value}:${L.label}`,
                            onSelect: () => Cn(L.value),
                            role: "option",
                            "aria-selected": K,
                            "aria-disabled": L.disabled ?? !1,
                            "aria-label": `${L.label}${K ? ", selected" : ", not selected"}${L.disabled ? ", disabled" : ""}`,
                            className: O(
                              "cursor-pointer",
                              L.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!L.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Pr, { className: "mr-xs", checked: K }),
                              Ee({
                                option: L,
                                location: "dropdown",
                                isSelected: K
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
                        Ke,
                        {
                          intent: "text",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: Sn,
                          disabled: W.length === 0,
                          children: x
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Ke,
                        {
                          intent: "primary",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: () => {
                            n(W), Q(!1);
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
}, mC = N.forwardRef(
  fC
);
mC.displayName = "MultiSelect";
const pC = ae(
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
), hC = ae(
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
), vC = ae(
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
), va = ({
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
  return i !== void 0 && (f.value = i), /* @__PURE__ */ c.jsxs(Xg, { ...f, children: [
    /* @__PURE__ */ c.jsxs(
      Zg,
      {
        className: O(pC({ variant: a, intent: s, invalid: o }), n),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            Ie(r, {
              className: O("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              Qg,
              {
                placeholder: t || "Select an option",
                className: O({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            Jg,
            {
              className: O("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": d.disabled
              }),
              children: /* @__PURE__ */ c.jsx(nu, { className: "top-0.5 relative h-full w-full" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(e0, { children: /* @__PURE__ */ c.jsxs(
      t0,
      {
        position: "popper",
        className: O(hC({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(c0, {}),
          /* @__PURE__ */ c.jsx(n0, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((m, p) => {
            switch (m.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(r0, { children: /* @__PURE__ */ c.jsx(o0, { children: m.label }) }, p);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  d0,
                  {
                    className: "border-divider-default m-[5px] h-px border-b"
                  },
                  p
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  a0,
                  {
                    value: m.value,
                    disabled: m.disabled ?? !1,
                    className: vC({
                      variant: a,
                      isSelected: i === m.value
                    }),
                    children: [
                      Ie(m.icon, {
                        className: O("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": m.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        s0,
                        {
                          className: O("flex-1", {
                            "text-interactive-disabled": m.disabled
                          }),
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(i0, {})
                    ]
                  },
                  p
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(l0, {}),
          /* @__PURE__ */ c.jsx(u0, {})
        ]
      }
    ) })
  ] });
};
va.displayName = "Select";
const gC = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), yi = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), xC = N.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    totalItems: n,
    onPageChange: r,
    rowsPerPage: o,
    rowsPerPageOptions: a = [10, 25, 50, 100],
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
    }, y = (M) => {
      const S = parseInt(M, 10);
      s(S), e > 1 && r(1);
    }, b = (M) => {
      const S = parseInt(M, 10);
      r(S);
    }, w = a.map((M) => ({
      value: M.toString(),
      label: M.toString()
    })), k = Math.max(t, 1), C = Array.from(
      { length: k },
      (M, S) => S + 1
    ).map((M) => ({
      value: M.toString(),
      label: d(M, k, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: O(gC({ size: m }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: O(yi()), children: i }),
            /* @__PURE__ */ c.jsx(
              va,
              {
                value: o.toString(),
                onValueChange: y,
                options: w
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: O(yi()), children: l }),
            /* @__PURE__ */ c.jsx(
              va,
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
              Ke,
              {
                intent: "text",
                size: "sm",
                icon: kx,
                onClick: h,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ke,
              {
                intent: "text",
                size: "sm",
                icon: ru,
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
xC.displayName = "Pagination";
const bC = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), yC = ae(
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
), wC = ae(
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
), xS = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: O(bC({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      Rg,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: O(
          yC({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(Ag, { className: O(wC({ invalid: a })) })
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
}, bS = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  Pg,
  {
    className: O("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), CC = ae(
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
), SC = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", kC = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, MC = ae(
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
), NC = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, EC = ae(
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
), PC = "gap-xs text-sm text-body-secondary flex-row", RC = ae(
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
), AC = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, DC = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", OC = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, _C = N.forwardRef(
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
    const v = i || t === "disabled", [x, h] = N.useState([]);
    let g;
    typeof t == "string" ? g = t : v ? g = "disabled" : x.length > 0 ? g = "filled" : g = "default";
    const y = N.useRef(g);
    Si(() => {
      y.current === "filled" && g !== "filled" && h([]), y.current = g;
    }, [g]);
    const b = (C) => {
      v || o && o(C);
    }, w = (C) => {
      if (!v) {
        if (C.key === "Enter" && n.trim()) {
          const M = [...x, n.trim()];
          if (h(M), o) {
            const S = {
              ...C,
              target: { value: "" }
            };
            o(S);
          }
          f && a && a(M), C.preventDefault();
        }
        if ((C.key === "Backspace" || C.key === "Delete") && !n && x.length > 0) {
          const M = x.slice(0, -1);
          h(M), f && a && a(M), C.preventDefault();
        }
      }
    }, k = (C) => {
      if (v) return;
      const M = x.filter((S, P) => P !== C);
      h(M), f && a && a(M);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: O(
          "gap-xxs group flex flex-col",
          v ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": v ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: O(
                CC({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: O(SC), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: O(DC, kC), children: [
                    /* @__PURE__ */ c.jsx("span", { className: O(MC({ size: e })), children: /* @__PURE__ */ c.jsx(ou, { size: OC[e] }) }),
                    x.map((C, M) => /* @__PURE__ */ c.jsxs("span", { className: RC(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: O(
                            AC,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (S) => {
                            S.stopPropagation(), S.preventDefault(), k(M);
                          },
                          onMouseDown: (S) => {
                            S.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: v,
                          children: /* @__PURE__ */ c.jsx(la, { size: 8 })
                        }
                      )
                    ] }, M)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: O(NC),
                        type: "text",
                        value: n,
                        onChange: b,
                        onKeyDown: w,
                        placeholder: g === "filled" || x.length > 0 ? "" : s,
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
                      children: /* @__PURE__ */ c.jsx(la, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: O(
                      EC({
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
              className: O(
                PC,
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
_C.displayName = "SearchBar";
const mf = xa(void 0), TC = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = N.useState(e), o = N.useCallback(() => {
    r((s) => !s);
  }, []), a = N.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ c.jsx(mf.Provider, { value: a, children: t });
}, or = () => {
  const e = ba(mf);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  return e;
}, pf = N.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = or();
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
      children: r ? /* @__PURE__ */ c.jsx(Nx, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Cx, { className: "size-5", strokeWidth: 2 })
    }
  );
});
pf.displayName = "SideNavigationCollapseButton";
const jC = ae(
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
), IC = N.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(TC, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(hf, { ref: n, ...t }) }));
IC.displayName = "SideNavigation";
const hf = N.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    ...s
  }, i) => {
    const { isCollapsed: l } = or();
    N.useEffect(() => {
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
          jC({ width: d }),
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
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: r }),
          a && /* @__PURE__ */ c.jsx(pf, {})
        ]
      }
    );
  }
);
hf.displayName = "SideNavigationContent";
const LC = ae(
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
), WC = N.forwardRef(
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
    const { isCollapsed: d } = or(), f = r ? Vr : "button", m = s ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      f,
      {
        ref: l,
        className: O(
          LC({
            variant: m,
            size: n,
            collapsed: d
          }),
          e
        ),
        disabled: s,
        ...i,
        children: a || o
      }
    );
  }
);
WC.displayName = "SideNavigationItem";
const FC = ae("flex flex-col", {
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
}), $C = N.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = or();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: O(
        FC({ isCollapsed: s, isLast: r }),
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
$C.displayName = "SideNavigationSection";
const VC = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", BC = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", yS = () => {
  const { isCollapsed: e } = or();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: VC,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: BC,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, zC = ae(
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
), HC = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), wS = ({
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
        zC({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: HC({ indicator: s }) }),
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
}, YC = N.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...a
  }, s) => {
    const i = N.useMemo(() => n !== void 0 ? t.map((l, d) => ({
      ...l,
      status: d < n ? "completed" : d === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ c.jsx(
      vf,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: O("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(N.Fragment, { children: [
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
                    tu,
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
), vf = N.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
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
vf.displayName = "RadialStepper";
YC.displayName = "Stepper";
const GC = u.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    v0,
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
        g0,
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
GC.displayName = "Switch";
const ga = {
  loading: !1,
  loadingText: "ローディング中…"
}, gf = N.createContext(
  ga
), xf = () => N.useContext(gf), UC = N.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = ga.loading,
    loadingText: r = ga.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(gf.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "border-surface-default bg-surface-primary relative border",
        children: /* @__PURE__ */ c.jsx(
          "table",
          {
            ref: a,
            className: O("w-full caption-bottom", e),
            ...o,
            children: t
          }
        )
      }
    ) });
  }
);
UC.displayName = "Table";
const KC = N.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = xf(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: O("text-sm bg-surface-tertiary top-0 sticky", e),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            as.Linear,
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
KC.displayName = "TableHeader";
const qC = N.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = xf(), l = t ?? s, d = n ?? i;
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
qC.displayName = "TableBody";
const XC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: O("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
XC.displayName = "TableFooter";
const ZC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: O(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover transition-colors
      [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
ZC.displayName = "TableRow";
const QC = N.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
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
QC.displayName = "TableHead";
const JC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
JC.displayName = "TableCell";
const eS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: O("text-body-primary mt-md text-sm", e),
    ...t
  }
));
eS.displayName = "TableCaption";
const CS = N.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), bf = N.createContext({
  size: "normal"
}), tS = () => N.useContext(bf), nS = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), rS = ae(
  `text-body-primary border-divider-default hover:border-interactive-hover
  data-[state=active]:border-interactive-selected data-[state=active]:font-bold
  disabled:text-interactive-disabled disabled:hover:border-divider-default
  relative inline-flex cursor-pointer items-center justify-center border-b pb-px
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  disabled:cursor-not-allowed disabled:hover:border-b
  data-[state=active]:border-b-2
  data-[state=active]:text-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: `p-md h-12 text-lg hover:pb-[calc(1rem-1px)]
        data-[state=active]:pb-[calc(1rem-1px)]`,
        small: `p-sm h-9.5 text-md hover:pb-[calc(0.75rem-1px)]
        data-[state=active]:pb-[calc(0.75rem-1px)]`
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
), oS = N.forwardRef(({ className: e, size: t, children: n, ...r }, o) => {
  const a = t ? { size: t } : {};
  return /* @__PURE__ */ c.jsx(bf.Provider, { value: a, children: /* @__PURE__ */ c.jsx(w0, { ref: o, className: O("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(C0, { className: O(nS({ size: t })), role: "tablist", children: n }) }) });
});
oS.displayName = "TabBar";
const aS = N.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => {
  const { size: s } = tS(), i = t ?? s;
  return /* @__PURE__ */ c.jsx(
    S0,
    {
      ref: a,
      className: O(rS({ size: i }), e),
      disabled: r,
      ...o,
      children: n
    }
  );
});
aS.displayName = "Tab";
const sS = ae(
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
), iS = N.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const [s, i] = N.useState(o.value || ""), l = (d) => {
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
          className: O(sS({ invalid: e }), t),
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
iS.displayName = "TextArea";
const SS = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  z0,
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
            au,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Ys,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Ys,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Er, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(H0, { className: "text-body-primary font-bold", children: /* @__PURE__ */ c.jsx(
            "h5",
            {
              className: O("text-md leading-none", {
                "mb-xs": !!e
              }),
              children: t
            }
          ) }),
          /* @__PURE__ */ c.jsx(Y0, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(G0, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(la, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), kS = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(V0, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    B0,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), cS = ae(
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
), MS = lx, lS = N.forwardRef(
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
  }, v) => /* @__PURE__ */ c.jsxs(
    dx,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...f !== void 0 && { onOpenChange: f },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(ux, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(fx, { children: /* @__PURE__ */ c.jsx(
          mx,
          {
            ref: v,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: O(cS({ intent: n }), m),
            ...p,
            children: t
          }
        ) })
      ]
    }
  )
);
lS.displayName = "Tooltip";
const wi = ae(
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
), dS = N.forwardRef(
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
    ...k
  }, C) => {
    const [M, S] = an(!1), P = Tn(null), F = Me(
      (E) => {
        E.preventDefault(), E.stopPropagation(), M || S(!0);
      },
      [M]
    ), z = Me((E) => {
      E.preventDefault(), E.stopPropagation(), S(!1);
    }, []), V = Me((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), q = Me(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), S(!1), s) return;
        const _ = E.dataTransfer.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [s, r]
    ), X = Me(() => {
      var E;
      s || (E = P.current) == null || E.click();
    }, [s]), T = Me(
      (E) => {
        const _ = E.target.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [r]
    ), U = M ? "dragging" : n, I = () => /* @__PURE__ */ c.jsx(
      Dx,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Z = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ke,
        {
          size: "xs",
          intent: "tertiary",
          icon: Gs,
          onClick: (E) => {
            E.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), A = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      I(),
      /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        g,
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ke,
        {
          size: "xs",
          intent: "tertiary",
          className: "self-center",
          icon: Gs,
          onClick: (E) => {
            E.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), j = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: O(wi({ size: t, state: "default", disabled: s })),
        onDragEnter: F,
        onDragLeave: z,
        onDragOver: V,
        onDrop: q,
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
              onChange: T,
              disabled: s
            }
          ),
          t === "small" ? Z() : A()
        ]
      }
    ), R = () => {
      const E = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return U === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
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
          as.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : U === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (_) => {
                _.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(Ix, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Rx,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: m || b })
        ] })
      ] }) : U === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || E }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(vx, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || w })
        ] })
      ] }) : null;
    }, G = () => t === "small" ? Z() : A();
    return U === "inProgress" && i !== void 0 || U === "success" || U === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: O(e), ...k, children: [
      j(),
      R()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: O(
          wi({ size: t, state: U, disabled: s }),
          e
        ),
        onDragEnter: F,
        onDragLeave: z,
        onDragOver: V,
        onDrop: q,
        onClick: X,
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
              onChange: T,
              disabled: s
            }
          ),
          G()
        ]
      }
    );
  }
);
dS.displayName = "FileUploader";
export {
  kb as Badge,
  Eb as Breadcrumbs,
  Ke as Button,
  Uu as Calendar,
  p2 as Callout,
  Pr as Checkbox,
  g2 as CheckboxGroup,
  C2 as DatePicker,
  hS as Dialog,
  j2 as Dropdown,
  T2 as DropdownContent,
  D2 as DropdownItem,
  _2 as DropdownLabel,
  O2 as DropdownSeparator,
  I2 as DropdownTrigger,
  dS as FileUploader,
  gS as FormField,
  yS as Logo,
  mC as MultiSelect,
  vS as MultiStepDialog,
  xC as Pagination,
  as as ProgressIndicator,
  xS as RadioButton,
  bS as RadioButtonGroup,
  _C as SearchBar,
  va as Select,
  IC as SideNavigation,
  pf as SideNavigationCollapseButton,
  WC as SideNavigationItem,
  TC as SideNavigationProvider,
  $C as SideNavigationSection,
  wS as StatusIndicator,
  YC as Stepper,
  GC as Switch,
  aS as Tab,
  oS as TabBar,
  UC as Table,
  qC as TableBody,
  eS as TableCaption,
  JC as TableCell,
  XC as TableFooter,
  QC as TableHead,
  CS as TableHeadSortButton,
  KC as TableHeader,
  ZC as TableRow,
  hi as Tag,
  iS as TextArea,
  qu as TextField,
  Ku as TextLink,
  SS as ToastItem,
  kS as ToastProvider,
  lS as Tooltip,
  MS as TooltipProvider,
  L2 as colorCodeToTokenMap,
  or as useSideNavigation
};
