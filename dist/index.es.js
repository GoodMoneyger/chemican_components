import * as u from "react";
import N, { useState as cn, useLayoutEffect as ki, forwardRef as yf, createElement as Co, createContext as xa, useContext as ba, useCallback as Me, useRef as _n, useEffect as Mi, useMemo as So } from "react";
import * as Vn from "react-dom";
import wf from "react-dom";
var cr = { exports: {} }, Mn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function Cf() {
  if (ms) return Mn;
  ms = 1;
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
  return Mn.Fragment = t, Mn.jsx = n, Mn.jsxs = n, Mn;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Sf() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && (function() {
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
            var H = R.render;
            return R = R.displayName, R || (R = H.displayName || H.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case S:
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
        var E = H.error, _ = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return E.call(
          H,
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
    function s(R) {
      if (B.call(R, "key")) {
        var H = Object.getOwnPropertyDescriptor(R, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, H) {
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
      return $[R] || ($[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, H, E, _, I, L, Z, O) {
      return E = L.ref, R = {
        $$typeof: v,
        type: R,
        key: H,
        props: L,
        _owner: I
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
    function f(R, H, E, _, I, L, Z, O) {
      var q = H.children;
      if (q !== void 0)
        if (_)
          if (X(q)) {
            for (_ = 0; _ < q.length; _++)
              m(q[_]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(q);
      if (B.call(H, "key")) {
        q = e(R);
        var te = Object.keys(H).filter(function(ie) {
          return ie !== "key";
        });
        _ = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", W[q + _] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          q,
          te,
          q
        ), W[q + _] = !0);
      }
      if (q = null, E !== void 0 && (n(E), q = "" + E), s(H) && (n(H.key), q = "" + H.key), "key" in H) {
        E = {};
        for (var re in H)
          re !== "key" && (E[re] = H[re]);
      } else E = H;
      return q && i(
        E,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        q,
        L,
        I,
        o(),
        E,
        Z,
        O
      );
    }
    function m(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var p = N, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), U = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, X = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var Y, $ = {}, K = p.react_stack_bottom_frame.bind(
      p,
      a
    )(), D = j(r(a)), W = {};
    Nn.Fragment = h, Nn.jsx = function(R, H, E, _, I) {
      var L = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        H,
        E,
        !1,
        _,
        I,
        L ? Error("react-stack-top-frame") : K,
        L ? j(r(R)) : D
      );
    }, Nn.jsxs = function(R, H, E, _, I) {
      var L = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        R,
        H,
        E,
        !0,
        _,
        I,
        L ? Error("react-stack-top-frame") : K,
        L ? j(r(R)) : D
      );
    };
  })()), Nn;
}
var hs;
function kf() {
  return hs || (hs = 1, process.env.NODE_ENV === "production" ? cr.exports = Cf() : cr.exports = Sf()), cr.exports;
}
var c = kf();
function Ni(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ni(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ei() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ni(e)) && (r && (r += " "), r += t);
  return r;
}
const vs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, gs = Ei, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return gs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = vs(f) || vs(m);
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
  return gs(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function xs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = xs(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : xs(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return u.useCallback(xt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ Mf(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(Ef);
    if (l) {
      const d = l.props.children, f = i.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var $r = /* @__PURE__ */ Mt("Slot");
// @__NO_SIDE_EFFECTS__
function Mf(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = Rf(o), i = Pf(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? xt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Pi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Nf(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Pi, t;
}
function Ef(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Pi;
}
function Pf(e, t) {
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
function Rf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Df = [
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
], Q = Df.reduce((e, t) => {
  const n = /* @__PURE__ */ Mt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ya(e, t) {
  e && Vn.flushSync(() => e.dispatchEvent(t));
}
var Ri = Object.freeze({
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
}), Af = "VisuallyHidden", Vr = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...Ri, ...e.style }
    }
  )
);
Vr.displayName = Af;
var Of = Vr;
function _f(e, t) {
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
function Ae(e, t = []) {
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
function Br(e) {
  const t = e + "CollectionProvider", [n, r] = Ae(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: g, children: y } = h, b = N.useRef(null), w = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: y });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Mt(i), d = N.forwardRef(
    (h, g) => {
      const { scope: y, children: b } = h, w = a(i, y), k = ce(g, w.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: k, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Mt(f), v = N.forwardRef(
    (h, g) => {
      const { scope: y, children: b, ...w } = h, k = N.useRef(null), C = ce(g, k), M = a(f, y);
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
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Re = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, jf = u[" useInsertionEffect ".trim().toString()] || Re;
function qe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Tf({
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
        const p = Wf(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function Tf({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return jf(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Wf(e) {
  return typeof e == "function";
}
function Lf(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Oe = (e) => {
  const { present: t, children: n } = e, r = Ff(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = ce(r.ref, $f(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Oe.displayName = "Presence";
function Ff(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Lf(s, {
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
    const d = lr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Re(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, v = lr(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Re(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = lr(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = lr(r.current));
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
function lr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $f(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vf = u[" useId ".trim().toString()] || (() => {
}), Bf = 0;
function Ne(e) {
  const [t, n] = u.useState(Vf());
  return Re(() => {
    n((r) => r ?? String(Bf++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var zf = u.createContext(void 0);
function Bn(e) {
  const t = u.useContext(zf);
  return e || t || "ltr";
}
function Fe(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Hf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Yf = "DismissableLayer", Uo = "dismissableLayer.update", Gf = "dismissableLayer.pointerDownOutside", Uf = "dismissableLayer.focusOutside", bs, Di = u.createContext({
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
    } = e, d = u.useContext(Di), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = ce(t, (S) => m(S)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g), b = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, k = b >= y, C = qf((S) => {
      const P = S.target, F = [...d.branches].some((z) => z.contains(P));
      !k || F || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p), M = Xf((S) => {
      const P = S.target;
      [...d.branches].some((z) => z.contains(P)) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p);
    return Hf((S) => {
      b === d.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (bs = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), ys(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = bs);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), ys());
    }, [f, d]), u.useEffect(() => {
      const S = () => v({});
      return document.addEventListener(Uo, S), () => document.removeEventListener(Uo, S);
    }, []), /* @__PURE__ */ c.jsx(
      Q.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: w ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: V(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: V(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: V(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
zt.displayName = Yf;
var Kf = "DismissableLayerBranch", Ai = u.forwardRef((e, t) => {
  const n = u.useContext(Di), r = u.useRef(null), o = ce(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Q.div, { ...e, ref: o });
});
Ai.displayName = Kf;
function qf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Oi(
            Gf,
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
function Xf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Oi(Uf, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ys() {
  const e = new CustomEvent(Uo);
  document.dispatchEvent(e);
}
function Oi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ya(o, a) : o.dispatchEvent(a);
}
var Zf = zt, Qf = Ai, ko = "focusScope.autoFocusOnMount", Mo = "focusScope.autoFocusOnUnmount", ws = { bubbles: !1, cancelable: !0 }, Jf = "FocusScope", zn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = Fe(o), f = Fe(a), m = u.useRef(null), p = ce(t, (h) => l(h)), v = u.useRef({
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
        i.contains(k) ? m.current = k : St(m.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !i) return;
        const k = w.relatedTarget;
        k !== null && (i.contains(k) || St(m.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && St(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, v.paused]), u.useEffect(() => {
    if (i) {
      Ss.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(ko, ws);
        i.addEventListener(ko, d), i.dispatchEvent(y), y.defaultPrevented || (em(am(_i(i)), { select: !0 }), document.activeElement === h && St(i));
      }
      return () => {
        i.removeEventListener(ko, d), setTimeout(() => {
          const y = new CustomEvent(Mo, ws);
          i.addEventListener(Mo, f), i.dispatchEvent(y), y.defaultPrevented || St(h ?? document.body, { select: !0 }), i.removeEventListener(Mo, f), Ss.remove(v);
        }, 0);
      };
    }
  }, [i, d, f, v]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (g && y) {
        const b = h.currentTarget, [w, k] = tm(b);
        w && k ? !h.shiftKey && y === k ? (h.preventDefault(), n && St(w, { select: !0 })) : h.shiftKey && y === w && (h.preventDefault(), n && St(k, { select: !0 })) : y === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(Q.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
zn.displayName = Jf;
function em(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (St(r, { select: t }), document.activeElement !== n) return;
}
function tm(e) {
  const t = _i(e), n = Cs(t, e), r = Cs(t.reverse(), e);
  return [n, r];
}
function _i(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cs(e, t) {
  for (const n of e)
    if (!nm(n, { upTo: t })) return n;
}
function nm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function St(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rm(e) && t && e.select();
  }
}
var Ss = om();
function om() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ks(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ks(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ks(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function am(e) {
  return e.filter((t) => t.tagName !== "A");
}
var sm = "Portal", Ht = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Re(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? wf.createPortal(/* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t }), s) : null;
});
Ht.displayName = sm;
var No = 0;
function zr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ms()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ms()), No++, () => {
      No === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), No--;
    };
  }, []);
}
function Ms() {
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
function Ii(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function im(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Sr = "right-scroll-bar-position", kr = "width-before-scroll-bar", cm = "with-scroll-bars-hidden", lm = "--removed-body-scroll-bar-size";
function Eo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function dm(e, t) {
  var n = cn(function() {
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
var um = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ns = /* @__PURE__ */ new WeakMap();
function fm(e, t) {
  var n = dm(null, function(r) {
    return e.forEach(function(o) {
      return Eo(o, r);
    });
  });
  return um(function() {
    var r = Ns.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Eo(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Eo(i, s);
      });
    }
    Ns.set(n, e);
  }, [e]), n;
}
function mm(e) {
  return e;
}
function pm(e, t) {
  t === void 0 && (t = mm);
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
function hm(e) {
  e === void 0 && (e = {});
  var t = pm(null);
  return t.options = at({ async: !0, ssr: !1 }, e), t;
}
var ji = function(e) {
  var t = e.sideCar, n = Ii(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, at({}, n));
};
ji.isSideCarExport = !0;
function vm(e, t) {
  return e.useMedium(t), ji;
}
var Ti = hm(), Po = function() {
}, Hr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Po,
    onWheelCapture: Po,
    onTouchMoveCapture: Po
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, k = Ii(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, M = fm([n, t]), S = at(at({}, k), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: Ti, removeScrollBar: d, shards: m, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), at(at({}, S), { ref: M })) : u.createElement(b, at({}, S, { className: l, ref: M }), i)
  );
});
Hr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hr.classNames = {
  fullWidth: kr,
  zeroRight: Sr
};
var gm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gm();
  return t && e.setAttribute("nonce", t), e;
}
function bm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ym(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xm()) && (bm(t, n), ym(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Cm = function() {
  var e = wm();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Wi = function() {
  var e = Cm(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Sm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ro = function(e) {
  return parseInt(e || "", 10) || 0;
}, km = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ro(n), Ro(r), Ro(o)];
}, Mm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Sm;
  var t = km(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Nm = Wi(), on = "data-scroll-locked", Em = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(cm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(on, `] {
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
  
  .`).concat(Sr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(kr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Sr, " .").concat(Sr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kr, " .").concat(kr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(on, `] {
    `).concat(lm, ": ").concat(i, `px;
  }
`);
}, Es = function() {
  var e = parseInt(document.body.getAttribute(on) || "0", 10);
  return isFinite(e) ? e : 0;
}, Pm = function() {
  u.useEffect(function() {
    return document.body.setAttribute(on, (Es() + 1).toString()), function() {
      var e = Es() - 1;
      e <= 0 ? document.body.removeAttribute(on) : document.body.setAttribute(on, e.toString());
    };
  }, []);
}, Rm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Pm();
  var a = u.useMemo(function() {
    return Mm(o);
  }, [o]);
  return u.createElement(Nm, { styles: Em(a, !t, o, n ? "" : "!important") });
}, Ko = !1;
if (typeof window < "u")
  try {
    var dr = Object.defineProperty({}, "passive", {
      get: function() {
        return Ko = !0, !0;
      }
    });
    window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    Ko = !1;
  }
var Zt = Ko ? { passive: !1 } : !1, Dm = function(e) {
  return e.tagName === "TEXTAREA";
}, Li = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Dm(e) && n[t] === "visible")
  );
}, Am = function(e) {
  return Li(e, "overflowY");
}, Om = function(e) {
  return Li(e, "overflowX");
}, Ps = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Fi(e, r);
    if (o) {
      var a = $i(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, _m = function(e) {
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
}, Fi = function(e, t) {
  return e === "v" ? Am(t) : Om(t);
}, $i = function(e, t) {
  return e === "v" ? _m(t) : Im(t);
}, jm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Tm = function(e, t, n, r, o) {
  var a = jm(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var v = $i(e, i), x = v[0], h = v[1], g = v[2], y = h - g - a * x;
    (x || y) && Fi(e, i) && (m += y, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, ur = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rs = function(e) {
  return [e.deltaX, e.deltaY];
}, Ds = function(e) {
  return e && "current" in e ? e.current : e;
}, Wm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Lm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fm = 0, Qt = [];
function $m(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Fm++)[0], a = u.useState(Wi)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = im([e.lockRef.current], (e.shards || []).map(Ds), !0).filter(Boolean);
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
    var y = ur(h), b = n.current, w = "deltaX" in h ? h.deltaX : b[0] - y[0], k = "deltaY" in h ? h.deltaY : b[1] - y[1], C, M = h.target, S = Math.abs(w) > Math.abs(k) ? "h" : "v";
    if ("touches" in h && S === "h" && M.type === "range")
      return !1;
    var P = Ps(S, M);
    if (!P)
      return !0;
    if (P ? C = S : (C = S === "v" ? "h" : "v", P = Ps(S, M)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (w || k) && (r.current = C), !C)
      return !0;
    var F = r.current || C;
    return Tm(F, g, h, F === "h" ? w : k);
  }, []), l = u.useCallback(function(h) {
    var g = h;
    if (!(!Qt.length || Qt[Qt.length - 1] !== a)) {
      var y = "deltaY" in g ? Rs(g) : ur(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Wm(C.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(Ds).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = w.length > 0 ? i(g, w[0]) : !s.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, g, y, b) {
    var w = { name: h, delta: g, target: y, should: b, shadowParent: Vm(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = ur(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, Rs(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, ur(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Qt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Zt), document.addEventListener("touchmove", l, Zt), document.addEventListener("touchstart", f, Zt), function() {
      Qt = Qt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Zt), document.removeEventListener("touchmove", l, Zt), document.removeEventListener("touchstart", f, Zt);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Lm(o) }) : null,
    v ? u.createElement(Rm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Vm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Bm = vm(Ti, $m);
var Hn = u.forwardRef(function(e, t) {
  return u.createElement(Hr, at({}, e, { ref: t, sideCar: Bm }));
});
Hn.classNames = Hr.classNames;
var zm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jt = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), mr = {}, Do = 0, Vi = function(e) {
  return e && (e.host || Vi(e.parentNode));
}, Hm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Vi(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ym = function(e, t, n, r) {
  var o = Hm(t, Array.isArray(e) ? e : [e]);
  mr[n] || (mr[n] = /* @__PURE__ */ new WeakMap());
  var a = mr[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (Jt.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Jt.set(p, h), a.set(p, g), s.push(p), h === 1 && x && fr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Do++, function() {
    s.forEach(function(m) {
      var p = Jt.get(m) - 1, v = a.get(m) - 1;
      Jt.set(m, p), a.set(m, v), p || (fr.has(m) || m.removeAttribute(r), fr.delete(m)), v || m.removeAttribute(n);
    }), Do--, Do || (Jt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), mr = {});
  };
}, Yr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = zm(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ym(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Gr = "Dialog", [Bi] = Ae(Gr), [Gm, tt] = Bi(Gr), zi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), l = u.useRef(null), [d, f] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Gr
  });
  return /* @__PURE__ */ c.jsx(
    Gm,
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
zi.displayName = Gr;
var Hi = "DialogTrigger", Um = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Hi, n), a = ce(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sa(o.open),
        ...r,
        ref: a,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Um.displayName = Hi;
var wa = "DialogPortal", [Km, Yi] = Bi(wa, {
  forceMount: void 0
}), Gi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tt(wa, t);
  return /* @__PURE__ */ c.jsx(Km, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: s }) })) });
};
Gi.displayName = wa;
var Dr = "DialogOverlay", Ui = u.forwardRef(
  (e, t) => {
    const n = Yi(Dr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(Dr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Xm, { ...o, ref: t }) }) : null;
  }
);
Ui.displayName = Dr;
var qm = /* @__PURE__ */ Mt("DialogOverlay.RemoveScroll"), Xm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Dr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Hn, { as: qm, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          "data-state": Sa(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Lt = "DialogContent", Ki = u.forwardRef(
  (e, t) => {
    const n = Yi(Lt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(Lt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Zm, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Qm, { ...o, ref: t }) });
  }
);
Ki.displayName = Lt;
var Zm = u.forwardRef(
  (e, t) => {
    const n = tt(Lt, e.__scopeDialog), r = u.useRef(null), o = ce(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Yr(a);
    }, []), /* @__PURE__ */ c.jsx(
      qi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: V(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Qm = u.forwardRef(
  (e, t) => {
    const n = tt(Lt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      qi,
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
), qi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = tt(Lt, n), l = u.useRef(null), d = ce(t, l);
    return zr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        zn,
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
              "data-state": Sa(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(ep, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(np, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ca = "DialogTitle", Xi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Ca, n);
    return /* @__PURE__ */ c.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
Xi.displayName = Ca;
var Zi = "DialogDescription", Jm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Zi, n);
    return /* @__PURE__ */ c.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Jm.displayName = Zi;
var Qi = "DialogClose", Ji = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Qi, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ji.displayName = Qi;
function Sa(e) {
  return e ? "open" : "closed";
}
var ec = "DialogTitleWarning", [dS, tc] = _f(ec, {
  contentName: Lt,
  titleName: Ca,
  docsSlug: "dialog"
}), ep = ({ titleId: e }) => {
  const t = tc(ec), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, tp = "DialogDescriptionWarning", np = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${tc(tp).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ka = zi, rp = Gi, Ma = Ui, Na = Ki, nc = Xi, Ea = Ji;
function Ur(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Kr(e) {
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
var qr = "Checkbox", [op] = Ae(qr), [ap, Pa] = op(qr);
function sp(e) {
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
  } = e, [p, v] = qe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: qr
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
    defaultChecked: kt(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ c.jsx(
    ap,
    {
      scope: t,
      ...k,
      children: ip(m) ? m(k) : r
    }
  );
}
var rc = "CheckboxTrigger", oc = u.forwardRef(
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
    } = Pa(rc, e), h = ce(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => m(g.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": kt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": dc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: V(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: V(n, (y) => {
          m((b) => kt(b) ? !0 : !b), x && v && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
oc.displayName = rc;
var ac = u.forwardRef(
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
      sp,
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
            oc,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            lc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ac.displayName = qr;
var sc = "CheckboxIndicator", ic = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Pa(sc, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || kt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            "data-state": dc(a.checked),
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
ic.displayName = sc;
var cc = "CheckboxBubbleInput", lc = u.forwardRef(
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
    } = Pa(cc, e), x = ce(n, v), h = Ur(a), g = Kr(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, M = !o.current;
      if (h !== a && C) {
        const S = new Event("click", { bubbles: M });
        b.indeterminate = kt(a), C.call(b, kt(a) ? !1 : a), b.dispatchEvent(S);
      }
    }, [p, h, a, o]);
    const y = u.useRef(kt(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Q.input,
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
lc.displayName = cc;
function ip(e) {
  return typeof e == "function";
}
function kt(e) {
  return e === "indeterminate";
}
function dc(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const cp = ["top", "right", "bottom", "left"], Nt = Math.min, ze = Math.max, Ar = Math.round, pr = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), lp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dp = {
  start: "end",
  end: "start"
};
function qo(e, t, n) {
  return ze(e, Nt(t, n));
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
function Ra(e) {
  return e === "x" ? "y" : "x";
}
function Da(e) {
  return e === "y" ? "height" : "width";
}
const up = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e) {
  return up.has(yt(e)) ? "y" : "x";
}
function Aa(e) {
  return Ra(ct(e));
}
function fp(e, t, n) {
  n === void 0 && (n = !1);
  const r = mn(e), o = Aa(e), a = Da(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Or(s)), [s, Or(s)];
}
function mp(e) {
  const t = Or(e);
  return [Xo(e), t, Xo(t)];
}
function Xo(e) {
  return e.replace(/start|end/g, (t) => dp[t]);
}
const As = ["left", "right"], Os = ["right", "left"], pp = ["top", "bottom"], hp = ["bottom", "top"];
function vp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Os : As : t ? As : Os;
    case "left":
    case "right":
      return t ? pp : hp;
    default:
      return [];
  }
}
function gp(e, t, n, r) {
  const o = mn(e);
  let a = vp(yt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Xo)))), a;
}
function Or(e) {
  return e.replace(/left|right|bottom|top/g, (t) => lp[t]);
}
function xp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function uc(e) {
  return typeof e != "number" ? xp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _r(e) {
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
function _s(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ct(t), s = Aa(t), i = Da(s), l = yt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (mn(t)) {
    case "start":
      v[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const bp = async (e, t, n) => {
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
  } = _s(d, r, l), p = r, v = {}, x = 0;
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
    } = _s(d, p, l)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function In(e, t) {
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
  } = bt(t, e), x = uc(v), g = i[p ? m === "floating" ? "reference" : "floating" : m], y = _r(await a.getClippingRect({
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
  }, C = _r(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const yp = (e) => ({
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
    const m = uc(f), p = {
      x: n,
      y: r
    }, v = Aa(o), x = Da(v), h = await s.getDimensions(d), g = v === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let S = M ? M[w] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(M))) && (S = i.floating[w] || a.floating[x]);
    const P = k / 2 - C / 2, F = S / 2 - h[x] / 2 - 1, z = Nt(m[y], F), U = Nt(m[b], F), B = z, X = S - h[x] - U, j = S / 2 - h[x] / 2 + P, Y = qo(B, j, X), $ = !l.arrow && mn(o) != null && j !== Y && a.reference[x] / 2 - (j < B ? z : U) - h[x] / 2 < 0, K = $ ? j < B ? j - B : j - X : 0;
    return {
      [v]: p[v] + K,
      data: {
        [v]: Y,
        centerOffset: j - Y - K,
        ...$ && {
          alignmentOffset: K
        }
      },
      reset: $
    };
  }
}), wp = function(e) {
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
      } = bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = yt(o), b = ct(i), w = yt(i) === i, k = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (w || !h ? [Or(i)] : mp(i)), M = x !== "none";
      !p && M && C.push(...gp(i, h, x, k));
      const S = [i, ...C], P = await In(t, g), F = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && F.push(P[y]), m) {
        const j = fp(o, s, k);
        F.push(P[j[0]], P[j[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: F
      }], !F.every((j) => j <= 0)) {
        var U, B;
        const j = (((U = a.flip) == null ? void 0 : U.index) || 0) + 1, Y = S[j];
        if (Y && (!(m === "alignment" ? b !== ct(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((D) => ct(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: z
            },
            reset: {
              placement: Y
            }
          };
        let $ = (B = z.filter((K) => K.overflows[0] <= 0).sort((K, D) => K.overflows[1] - D.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var X;
              const K = (X = z.filter((D) => {
                if (M) {
                  const W = ct(D.placement);
                  return W === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((W) => W > 0).reduce((W, R) => W + R, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : X[0];
              K && ($ = K);
              break;
            }
            case "initialPlacement":
              $ = i;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function Is(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function js(e) {
  return cp.some((t) => e[t] >= 0);
}
const Cp = function(e) {
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
          const a = await In(t, {
            ...o,
            elementContext: "reference"
          }), s = Is(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: js(s)
            }
          };
        }
        case "escaped": {
          const a = await In(t, {
            ...o,
            altBoundary: !0
          }), s = Is(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: js(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, fc = /* @__PURE__ */ new Set(["left", "top"]);
async function Sp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = yt(n), i = mn(n), l = ct(n) === "y", d = fc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = bt(t, e);
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
const kp = function(e) {
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
      } = t, l = await Sp(t, e);
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
}, Mp = function(e) {
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
      }, f = await In(t, l), m = ct(yt(o)), p = Ra(m);
      let v = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + f[g], w = v - f[y];
        v = qo(b, v, w);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = x + f[g], w = x - f[y];
        x = qo(b, x, w);
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
}, Np = function(e) {
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
      }, m = ct(o), p = Ra(m);
      let v = f[p], x = f[m];
      const h = bt(i, t), g = typeof h == "number" ? {
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
        const w = p === "y" ? "width" : "height", k = fc.has(yt(o)), C = a.reference[m] - a.floating[w] + (k && ((y = s.offset) == null ? void 0 : y[m]) || 0) + (k ? 0 : g.crossAxis), M = a.reference[m] + a.reference[w] + (k ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (k ? g.crossAxis : 0);
        x < C ? x = C : x > M && (x = M);
      }
      return {
        [p]: v,
        [m]: x
      };
    }
  };
}, Ep = function(e) {
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
      } = bt(e, t), f = await In(t, d), m = yt(o), p = mn(o), v = ct(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, y;
      m === "top" || m === "bottom" ? (g = m, y = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m, g = p === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, w = x - f.left - f.right, k = Nt(h - f[g], b), C = Nt(x - f[y], w), M = !t.middlewareData.shift;
      let S = k, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), M && !p) {
        const z = ze(f.left, 0), U = ze(f.right, 0), B = ze(f.top, 0), X = ze(f.bottom, 0);
        v ? P = x - 2 * (z !== 0 || U !== 0 ? z + U : ze(f.left, f.right)) : S = h - 2 * (B !== 0 || X !== 0 ? B + X : ze(f.top, f.bottom));
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
function Xr() {
  return typeof window < "u";
}
function pn(e) {
  return mc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function He(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  var t;
  return (t = (mc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mc(e) {
  return Xr() ? e instanceof Node || e instanceof He(e).Node : !1;
}
function Je(e) {
  return Xr() ? e instanceof Element || e instanceof He(e).Element : !1;
}
function ut(e) {
  return Xr() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1;
}
function Ts(e) {
  return !Xr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
}
const Pp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Yn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Pp.has(o);
}
const Rp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Dp(e) {
  return Rp.has(pn(e));
}
const Ap = [":popover-open", ":modal"];
function Zr(e) {
  return Ap.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Op = ["transform", "translate", "scale", "rotate", "perspective"], _p = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ip = ["paint", "layout", "strict", "content"];
function Oa(e) {
  const t = _a(), n = Je(e) ? et(e) : e;
  return Op.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || _p.some((r) => (n.willChange || "").includes(r)) || Ip.some((r) => (n.contain || "").includes(r));
}
function jp(e) {
  let t = Et(e);
  for (; ut(t) && !ln(t); ) {
    if (Oa(t))
      return t;
    if (Zr(t))
      return null;
    t = Et(t);
  }
  return null;
}
function _a() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Tp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ln(e) {
  return Tp.has(pn(e));
}
function et(e) {
  return He(e).getComputedStyle(e);
}
function Qr(e) {
  return Je(e) ? {
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
    Ts(e) && e.host || // Fallback.
    ft(e)
  );
  return Ts(t) ? t.host : t;
}
function pc(e) {
  const t = Et(e);
  return ln(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ut(t) && Yn(t) ? t : pc(t);
}
function jn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = pc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = He(o);
  if (a) {
    const i = Zo(s);
    return t.concat(s, s.visualViewport || [], Yn(o) ? o : [], i && n ? jn(i) : []);
  }
  return t.concat(o, jn(o, [], n));
}
function Zo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hc(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ut(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ar(n) !== a || Ar(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Ia(e) {
  return Je(e) ? e : e.contextElement;
}
function an(e) {
  const t = Ia(e);
  if (!ut(t))
    return dt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = hc(t);
  let s = (a ? Ar(n.width) : n.width) / r, i = (a ? Ar(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Wp = /* @__PURE__ */ dt(0);
function vc(e) {
  const t = He(e);
  return !_a() || !t.visualViewport ? Wp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Lp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== He(e) ? !1 : t;
}
function Ft(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ia(e);
  let s = dt(1);
  t && (r ? Je(r) && (s = an(r)) : s = an(e));
  const i = Lp(a, n, r) ? vc(a) : dt(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = He(a), v = r && Je(r) ? He(r) : r;
    let x = p, h = Zo(x);
    for (; h && r && v !== x; ) {
      const g = an(h), y = h.getBoundingClientRect(), b = et(h), w = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = y.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += w, d += k, x = He(h), h = Zo(x);
    }
  }
  return _r({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function Jr(e, t) {
  const n = Qr(e).scrollLeft;
  return t ? t.left + n : Ft(ft(e)).left + n;
}
function gc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Jr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Fp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ft(r), i = t ? Zr(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = dt(1);
  const f = dt(0), m = ut(r);
  if ((m || !m && !a) && ((pn(r) !== "body" || Yn(s)) && (l = Qr(r)), ut(r))) {
    const v = Ft(r);
    d = an(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = s && !m && !a ? gc(s, l) : dt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function $p(e) {
  return Array.from(e.getClientRects());
}
function Vp(e) {
  const t = ft(e), n = Qr(e), r = e.ownerDocument.body, o = ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Jr(e);
  const i = -n.scrollTop;
  return et(r).direction === "rtl" && (s += ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Ws = 25;
function Bp(e, t) {
  const n = He(e), r = ft(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = _a();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = Jr(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - v);
    x <= Ws && (a -= x);
  } else d <= Ws && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const zp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Hp(e, t) {
  const n = Ft(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ut(e) ? an(e) : dt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function Ls(e, t, n) {
  let r;
  if (t === "viewport")
    r = Bp(e, n);
  else if (t === "document")
    r = Vp(ft(e));
  else if (Je(t))
    r = Hp(t, n);
  else {
    const o = vc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _r(r);
}
function xc(e, t) {
  const n = Et(e);
  return n === t || !Je(n) || ln(n) ? !1 : et(n).position === "fixed" || xc(n, t);
}
function Yp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jn(e, [], !1).filter((i) => Je(i) && pn(i) !== "body"), o = null;
  const a = et(e).position === "fixed";
  let s = a ? Et(e) : e;
  for (; Je(s) && !ln(s); ) {
    const i = et(s), l = Oa(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && zp.has(o.position) || Yn(s) && !l && xc(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Et(s);
  }
  return t.set(e, r), r;
}
function Gp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Zr(t) ? [] : Yp(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
    const m = Ls(t, f, o);
    return d.top = ze(m.top, d.top), d.right = Nt(m.right, d.right), d.bottom = Nt(m.bottom, d.bottom), d.left = ze(m.left, d.left), d;
  }, Ls(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Up(e) {
  const {
    width: t,
    height: n
  } = hc(e);
  return {
    width: t,
    height: n
  };
}
function Kp(e, t, n) {
  const r = ut(t), o = ft(t), a = n === "fixed", s = Ft(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dt(0);
  function d() {
    l.x = Jr(o);
  }
  if (r || !r && !a)
    if ((pn(t) !== "body" || Yn(o)) && (i = Qr(t)), r) {
      const v = Ft(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? gc(o, i) : dt(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ao(e) {
  return et(e).position === "static";
}
function Fs(e, t) {
  if (!ut(e) || et(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ft(e) === n && (n = n.ownerDocument.body), n;
}
function bc(e, t) {
  const n = He(e);
  if (Zr(e))
    return n;
  if (!ut(e)) {
    let o = Et(e);
    for (; o && !ln(o); ) {
      if (Je(o) && !Ao(o))
        return o;
      o = Et(o);
    }
    return n;
  }
  let r = Fs(e, t);
  for (; r && Dp(r) && Ao(r); )
    r = Fs(r, t);
  return r && ln(r) && Ao(r) && !Oa(r) ? n : r || jp(e) || n;
}
const qp = async function(e) {
  const t = this.getOffsetParent || bc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Kp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Xp(e) {
  return et(e).direction === "rtl";
}
const Zp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fp,
  getDocumentElement: ft,
  getClippingRect: Gp,
  getOffsetParent: bc,
  getElementRects: qp,
  getClientRects: $p,
  getDimensions: Up,
  getScale: an,
  isElement: Je,
  isRTL: Xp
};
function yc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Qp(e, t) {
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
      height: v
    } = d;
    if (i || t(), !p || !v)
      return;
    const x = pr(m), h = pr(o.clientWidth - (f + p)), g = pr(o.clientHeight - (m + v)), y = pr(f), w = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: ze(0, Nt(1, l)) || 1
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
      S === 1 && !yc(d, e.getBoundingClientRect()) && s(), k = !1;
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
function Jp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Ia(e), f = o || a ? [...d ? jn(d) : [], ...jn(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const m = d && i ? Qp(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? Ft(e) : null;
  l && g();
  function g() {
    const y = Ft(e);
    h && !yc(h, y) && n(), h = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const eh = kp, th = Mp, nh = wp, rh = Ep, oh = Cp, $s = yp, ah = Np, sh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zp,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return bp(e, t, {
    ...o,
    platform: a
  });
};
var ih = typeof document < "u", ch = function() {
}, Mr = ih ? ki : ch;
function Ir(e, t) {
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
        if (!Ir(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ir(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vs(e, t) {
  const n = wc(e);
  return Math.round(t * n) / n;
}
function Oo(e) {
  const t = u.useRef(e);
  return Mr(() => {
    t.current = e;
  }), t;
}
function lh(e) {
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
  Ir(p, r) || v(r);
  const [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useCallback((D) => {
    D !== M.current && (M.current = D, h(D));
  }, []), w = u.useCallback((D) => {
    D !== S.current && (S.current = D, y(D));
  }, []), k = a || x, C = s || g, M = u.useRef(null), S = u.useRef(null), P = u.useRef(f), F = l != null, z = Oo(l), U = Oo(o), B = Oo(d), X = u.useCallback(() => {
    if (!M.current || !S.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    U.current && (D.platform = U.current), sh(M.current, S.current, D).then((W) => {
      const R = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      j.current && !Ir(P.current, R) && (P.current = R, Vn.flushSync(() => {
        m(R);
      }));
    });
  }, [p, t, n, U, B]);
  Mr(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const j = u.useRef(!1);
  Mr(() => (j.current = !0, () => {
    j.current = !1;
  }), []), Mr(() => {
    if (k && (M.current = k), C && (S.current = C), k && C) {
      if (z.current)
        return z.current(k, C, X);
      X();
    }
  }, [k, C, X, z, F]);
  const Y = u.useMemo(() => ({
    reference: M,
    floating: S,
    setReference: b,
    setFloating: w
  }), [b, w]), $ = u.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), K = u.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return D;
    const W = Vs($.floating, f.x), R = Vs($.floating, f.y);
    return i ? {
      ...D,
      transform: "translate(" + W + "px, " + R + "px)",
      ...wc($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: R
    };
  }, [n, i, $.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: X,
    refs: Y,
    elements: $,
    floatingStyles: K
  }), [f, X, Y, $, K]);
}
const dh = (e) => {
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
      return r && t(r) ? r.current != null ? $s({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? $s({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, uh = (e, t) => ({
  ...eh(e),
  options: [e, t]
}), fh = (e, t) => ({
  ...th(e),
  options: [e, t]
}), mh = (e, t) => ({
  ...ah(e),
  options: [e, t]
}), ph = (e, t) => ({
  ...nh(e),
  options: [e, t]
}), hh = (e, t) => ({
  ...rh(e),
  options: [e, t]
}), vh = (e, t) => ({
  ...oh(e),
  options: [e, t]
}), gh = (e, t) => ({
  ...dh(e),
  options: [e, t]
});
var xh = "Arrow", Cc = u.forwardRef((e, t) => {
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
Cc.displayName = xh;
var bh = Cc, ja = "Popper", [Sc, Rt] = Ae(ja), [yh, kc] = Sc(ja), Mc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(yh, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Mc.displayName = ja;
var Nc = "PopperAnchor", Ec = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = kc(Nc, n), s = u.useRef(null), i = ce(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Q.div, { ...o, ref: i });
  }
);
Ec.displayName = Nc;
var Ta = "PopperContent", [wh, Ch] = Sc(Ta), Pc = u.forwardRef(
  (e, t) => {
    var O, q, te, re, ie, ue;
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
    } = e, g = kc(Ta, n), [y, b] = u.useState(null), w = ce(t, (ke) => b(ke)), [k, C] = u.useState(null), M = Kr(k), S = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, F = r + (a !== "center" ? "-" + a : ""), z = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, U = Array.isArray(d) ? d : [d], B = U.length > 0, X = {
      padding: z,
      boundary: U.filter(kh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: j, floatingStyles: Y, placement: $, isPositioned: K, middlewareData: D } = lh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...ke) => Jp(...ke, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        uh({ mainAxis: o + P, alignmentAxis: s }),
        l && fh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? mh() : void 0,
          ...X
        }),
        l && ph({ ...X }),
        hh({
          ...X,
          apply: ({ elements: ke, rects: _e, availableWidth: nt, availableHeight: Xe }) => {
            const { width: rt, height: Ut } = _e.reference, We = ke.floating.style;
            We.setProperty("--radix-popper-available-width", `${nt}px`), We.setProperty("--radix-popper-available-height", `${Xe}px`), We.setProperty("--radix-popper-anchor-width", `${rt}px`), We.setProperty("--radix-popper-anchor-height", `${Ut}px`);
          }
        }),
        k && gh({ element: k, padding: i }),
        Mh({ arrowWidth: S, arrowHeight: P }),
        p && vh({ strategy: "referenceHidden", ...X })
      ]
    }), [W, R] = Ac($), H = Fe(x);
    Re(() => {
      K && (H == null || H());
    }, [K, H]);
    const E = (O = D.arrow) == null ? void 0 : O.x, _ = (q = D.arrow) == null ? void 0 : q.y, I = ((te = D.arrow) == null ? void 0 : te.centerOffset) !== 0, [L, Z] = u.useState();
    return Re(() => {
      y && Z(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: K ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: L,
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
          wh,
          {
            scope: n,
            placedSide: W,
            onArrowChange: C,
            arrowX: E,
            arrowY: _,
            shouldHideArrow: I,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
              {
                "data-side": W,
                "data-align": R,
                ...h,
                ref: w,
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
Pc.displayName = Ta;
var Rc = "PopperArrow", Sh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Dc = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Ch(Rc, r), s = Sh[a.placedSide];
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
          bh,
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
Dc.displayName = Rc;
function kh(e) {
  return e !== null;
}
var Mh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = Ac(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, h = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = s ? m : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = s ? m : `${v}px`), { data: { x, y: h } };
  }
});
function Ac(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var eo = Mc, Gn = Ec, to = Pc, no = Dc, _o = "rovingFocusGroup.onEntryFocus", Nh = { bubbles: !1, cancelable: !0 }, Un = "RovingFocusGroup", [Qo, Oc, Eh] = Br(Un), [Ph, hn] = Ae(
  Un,
  [Eh]
), [Rh, Dh] = Ph(Un), _c = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Qo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Qo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Ah, { ...e, ref: t }) }) })
);
_c.displayName = Un;
var Ah = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), v = ce(t, p), x = Bn(a), [h, g] = qe({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Un
  }), [y, b] = u.useState(!1), w = Fe(d), k = Oc(n), C = u.useRef(!1), [M, S] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(_o, w), () => P.removeEventListener(_o, w);
  }, [w]), /* @__PURE__ */ c.jsx(
    Rh,
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
        Q.div,
        {
          tabIndex: y || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: V(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: V(e.onFocus, (P) => {
            const F = !C.current;
            if (P.target === P.currentTarget && F && !y) {
              const z = new CustomEvent(_o, Nh);
              if (P.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const U = k().filter(($) => $.focusable), B = U.find(($) => $.active), X = U.find(($) => $.id === h), Y = [B, X, ...U].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Tc(Y, f);
              }
            }
            C.current = !1;
          }),
          onBlur: V(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Ic = "RovingFocusGroupItem", jc = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ne(), d = a || l, f = Dh(Ic, n), m = f.currentTabStopId === d, p = Oc(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
      Qo.ItemSlot,
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
            ...i,
            ref: t,
            onMouseDown: V(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: V(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: V(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = Ih(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = p().filter((k) => k.focusable).map((k) => k.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const k = w.indexOf(g.currentTarget);
                  w = f.loop ? jh(w, k + 1) : w.slice(k + 1);
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
jc.displayName = Ic;
var Oh = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _h(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ih(e, t, n) {
  const r = _h(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Oh[r];
}
function Tc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function jh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Wa = _c, La = jc, Jo = ["Enter", " "], Th = ["ArrowDown", "PageUp", "Home"], Wc = ["ArrowUp", "PageDown", "End"], Wh = [...Th, ...Wc], Lh = {
  ltr: [...Jo, "ArrowRight"],
  rtl: [...Jo, "ArrowLeft"]
}, Fh = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Kn = "Menu", [Tn, $h, Vh] = Br(Kn), [Yt, Lc] = Ae(Kn, [
  Vh,
  Rt,
  hn
]), ro = Rt(), Fc = hn(), [Bh, Gt] = Yt(Kn), [zh, qn] = Yt(Kn), $c = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = ro(t), [l, d] = u.useState(null), f = u.useRef(!1), m = Fe(a), p = Bn(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(eo, { ...i, children: /* @__PURE__ */ c.jsx(
    Bh,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        zh,
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
$c.displayName = Kn;
var Hh = "MenuAnchor", Fa = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ro(n);
    return /* @__PURE__ */ c.jsx(Gn, { ...o, ...r, ref: t });
  }
);
Fa.displayName = Hh;
var $a = "MenuPortal", [Yh, Vc] = Yt($a, {
  forceMount: void 0
}), Bc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Gt($a, t);
  return /* @__PURE__ */ c.jsx(Yh, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Bc.displayName = $a;
var Ke = "MenuContent", [Gh, Va] = Yt(Ke), zc = u.forwardRef(
  (e, t) => {
    const n = Vc(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ke, e.__scopeMenu), s = qn(Ke, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Tn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Tn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(Uh, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Kh, { ...o, ref: t }) }) }) });
  }
), Uh = u.forwardRef(
  (e, t) => {
    const n = Gt(Ke, e.__scopeMenu), r = u.useRef(null), o = ce(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Yr(a);
    }, []), /* @__PURE__ */ c.jsx(
      Ba,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: V(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Kh = u.forwardRef((e, t) => {
  const n = Gt(Ke, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    Ba,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), qh = /* @__PURE__ */ Mt("MenuContent.ScrollLock"), Ba = u.forwardRef(
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
    } = e, g = Gt(Ke, n), y = qn(Ke, n), b = ro(n), w = Fc(n), k = $h(n), [C, M] = u.useState(null), S = u.useRef(null), P = ce(t, S, g.onContentChange), F = u.useRef(0), z = u.useRef(""), U = u.useRef(0), B = u.useRef(null), X = u.useRef("right"), j = u.useRef(0), Y = x ? Hn : u.Fragment, $ = x ? { as: qh, allowPinchZoom: !0 } : void 0, K = (W) => {
      var O, q;
      const R = z.current + W, H = k().filter((te) => !te.disabled), E = document.activeElement, _ = (O = H.find((te) => te.ref.current === E)) == null ? void 0 : O.textValue, I = H.map((te) => te.textValue), L = iv(I, R, _), Z = (q = H.find((te) => te.textValue === L)) == null ? void 0 : q.ref.current;
      (function te(re) {
        z.current = re, window.clearTimeout(F.current), re !== "" && (F.current = window.setTimeout(() => te(""), 1e3));
      })(R), Z && setTimeout(() => Z.focus());
    };
    u.useEffect(() => () => window.clearTimeout(F.current), []), zr();
    const D = u.useCallback((W) => {
      var H, E;
      return X.current === ((H = B.current) == null ? void 0 : H.side) && lv(W, (E = B.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Gh,
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
            D(W) || ((R = S.current) == null || R.focus(), M(null));
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
          B.current = W;
        }, []),
        children: /* @__PURE__ */ c.jsx(Y, { ...$, children: /* @__PURE__ */ c.jsx(
          zn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: V(a, (W) => {
              var R;
              W.preventDefault(), (R = S.current) == null || R.focus({ preventScroll: !0 });
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
                    onEntryFocus: V(l, (W) => {
                      y.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      to,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": al(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: V(h.onKeyDown, (W) => {
                          const H = W.target.closest("[data-radix-menu-content]") === W.currentTarget, E = W.ctrlKey || W.altKey || W.metaKey, _ = W.key.length === 1;
                          H && (W.key === "Tab" && W.preventDefault(), !E && _ && K(W.key));
                          const I = S.current;
                          if (W.target !== I || !Wh.includes(W.key)) return;
                          W.preventDefault();
                          const Z = k().filter((O) => !O.disabled).map((O) => O.ref.current);
                          Wc.includes(W.key) && Z.reverse(), av(Z);
                        }),
                        onBlur: V(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(F.current), z.current = "");
                        }),
                        onPointerMove: V(
                          e.onPointerMove,
                          Wn((W) => {
                            const R = W.target, H = j.current !== W.clientX;
                            if (W.currentTarget.contains(R) && H) {
                              const E = W.clientX > j.current ? "right" : "left";
                              X.current = E, j.current = W.clientX;
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
zc.displayName = Ke;
var Xh = "MenuGroup", za = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { role: "group", ...r, ref: t });
  }
);
za.displayName = Xh;
var Zh = "MenuLabel", Hc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Hc.displayName = Zh;
var jr = "MenuItem", Bs = "menu.itemSelect", oo = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = qn(jr, e.__scopeMenu), i = Va(jr, e.__scopeMenu), l = ce(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(Bs, { bubbles: !0, cancelable: !0 });
        m.addEventListener(Bs, (v) => r == null ? void 0 : r(v), { once: !0 }), ya(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Yc,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: V(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: V(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: V(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || Jo.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
oo.displayName = jr;
var Yc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Va(jr, n), i = Fc(n), l = u.useRef(null), d = ce(t, l), [f, m] = u.useState(!1), [p, v] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Tn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(La, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: V(
              e.onPointerMove,
              Wn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: V(
              e.onPointerLeave,
              Wn((x) => s.onItemLeave(x))
            ),
            onFocus: V(e.onFocus, () => m(!0)),
            onBlur: V(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), Qh = "MenuCheckboxItem", Gc = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Zc, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      oo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Tr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ya(n),
        onSelect: V(
          o.onSelect,
          () => r == null ? void 0 : r(Tr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gc.displayName = Qh;
var Uc = "MenuRadioGroup", [Jh, ev] = Yt(
  Uc,
  { value: void 0, onValueChange: () => {
  } }
), Kc = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Fe(r);
    return /* @__PURE__ */ c.jsx(Jh, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(za, { ...o, ref: t }) });
  }
);
Kc.displayName = Uc;
var qc = "MenuRadioItem", Xc = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = ev(qc, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Zc, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      oo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ya(a),
        onSelect: V(
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
Xc.displayName = qc;
var Ha = "MenuItemIndicator", [Zc, tv] = Yt(
  Ha,
  { checked: !1 }
), Qc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = tv(Ha, n);
    return /* @__PURE__ */ c.jsx(
      Oe,
      {
        present: r || Tr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": Ya(a.checked)
          }
        )
      }
    );
  }
);
Qc.displayName = Ha;
var nv = "MenuSeparator", Jc = u.forwardRef(
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
Jc.displayName = nv;
var rv = "MenuArrow", el = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ro(n);
    return /* @__PURE__ */ c.jsx(no, { ...o, ...r, ref: t });
  }
);
el.displayName = rv;
var ov = "MenuSub", [uS, tl] = Yt(ov), Rn = "MenuSubTrigger", nl = u.forwardRef(
  (e, t) => {
    const n = Gt(Rn, e.__scopeMenu), r = qn(Rn, e.__scopeMenu), o = tl(Rn, e.__scopeMenu), a = Va(Rn, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(Fa, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Yc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": al(n.open),
        ...e,
        ref: xt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: V(
          e.onPointerMove,
          Wn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: V(
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
        onKeyDown: V(e.onKeyDown, (m) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Lh[r.dir].includes(m.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
nl.displayName = Rn;
var rl = "MenuSubContent", ol = u.forwardRef(
  (e, t) => {
    const n = Vc(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ke, e.__scopeMenu), s = qn(Ke, e.__scopeMenu), i = tl(rl, e.__scopeMenu), l = u.useRef(null), d = ce(t, l);
    return /* @__PURE__ */ c.jsx(Tn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Tn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      Ba,
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
        onFocusOutside: V(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: V(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: V(e.onKeyDown, (f) => {
          var v;
          const m = f.currentTarget.contains(f.target), p = Fh[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (v = i.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
ol.displayName = rl;
function al(e) {
  return e ? "open" : "closed";
}
function Tr(e) {
  return e === "indeterminate";
}
function Ya(e) {
  return Tr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function av(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function sv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function iv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = sv(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function cv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function lv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return cv(n, t);
}
function Wn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var dv = $c, uv = Fa, fv = Bc, mv = zc, pv = za, hv = Hc, vv = oo, gv = Gc, xv = Kc, bv = Xc, yv = Qc, wv = Jc, Cv = el, Sv = nl, kv = ol, ao = "DropdownMenu", [Mv] = Ae(
  ao,
  [Lc]
), Te = Lc(), [Nv, sl] = Mv(ao), il = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Te(t), d = u.useRef(null), [f, m] = qe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: ao
  });
  return /* @__PURE__ */ c.jsx(
    Nv,
    {
      scope: t,
      triggerId: Ne(),
      triggerRef: d,
      contentId: Ne(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(dv, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
il.displayName = ao;
var cl = "DropdownMenuTrigger", ll = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = sl(cl, n), s = Te(n);
    return /* @__PURE__ */ c.jsx(uv, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
        ref: xt(t, a.triggerRef),
        onPointerDown: V(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: V(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
ll.displayName = cl;
var Ev = "DropdownMenuPortal", dl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Te(t);
  return /* @__PURE__ */ c.jsx(fv, { ...r, ...n });
};
dl.displayName = Ev;
var ul = "DropdownMenuContent", fl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = sl(ul, n), a = Te(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      mv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: V(e.onInteractOutside, (i) => {
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
fl.displayName = ul;
var Pv = "DropdownMenuGroup", Rv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(pv, { ...o, ...r, ref: t });
  }
);
Rv.displayName = Pv;
var Dv = "DropdownMenuLabel", ml = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(hv, { ...o, ...r, ref: t });
  }
);
ml.displayName = Dv;
var Av = "DropdownMenuItem", pl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(vv, { ...o, ...r, ref: t });
  }
);
pl.displayName = Av;
var Ov = "DropdownMenuCheckboxItem", _v = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(gv, { ...o, ...r, ref: t });
});
_v.displayName = Ov;
var Iv = "DropdownMenuRadioGroup", jv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(xv, { ...o, ...r, ref: t });
});
jv.displayName = Iv;
var Tv = "DropdownMenuRadioItem", Wv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(bv, { ...o, ...r, ref: t });
});
Wv.displayName = Tv;
var Lv = "DropdownMenuItemIndicator", Fv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(yv, { ...o, ...r, ref: t });
});
Fv.displayName = Lv;
var $v = "DropdownMenuSeparator", hl = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(wv, { ...o, ...r, ref: t });
});
hl.displayName = $v;
var Vv = "DropdownMenuArrow", Bv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ c.jsx(Cv, { ...o, ...r, ref: t });
  }
);
Bv.displayName = Vv;
var zv = "DropdownMenuSubTrigger", Hv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(Sv, { ...o, ...r, ref: t });
});
Hv.displayName = zv;
var Yv = "DropdownMenuSubContent", Gv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ c.jsx(
    kv,
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
Gv.displayName = Yv;
var Uv = il, Kv = ll, qv = dl, Xv = fl, Zv = ml, Qv = pl, Jv = hl;
function zs(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var so = "Popover", [vl] = Ae(so, [
  Rt
]), Xn = Rt(), [eg, Dt] = vl(so), gl = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Xn(t), l = u.useRef(null), [d, f] = u.useState(!1), [m, p] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: so
  });
  return /* @__PURE__ */ c.jsx(eo, { ...i, children: /* @__PURE__ */ c.jsx(
    eg,
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
gl.displayName = so;
var xl = "PopoverAnchor", tg = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Dt(xl, n), a = Xn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Gn, { ...a, ...r, ref: t });
  }
);
tg.displayName = xl;
var bl = "PopoverTrigger", yl = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Dt(bl, n), a = Xn(n), s = ce(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ml(o.open),
        ...r,
        ref: s,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Gn, { asChild: !0, ...a, children: i });
  }
);
yl.displayName = bl;
var Ga = "PopoverPortal", [ng, rg] = vl(Ga, {
  forceMount: void 0
}), wl = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Dt(Ga, t);
  return /* @__PURE__ */ c.jsx(ng, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
wl.displayName = Ga;
var dn = "PopoverContent", Cl = u.forwardRef(
  (e, t) => {
    const n = rg(dn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Dt(dn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(ag, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(sg, { ...o, ref: t }) });
  }
);
Cl.displayName = dn;
var og = /* @__PURE__ */ Mt("PopoverContent.RemoveScroll"), ag = u.forwardRef(
  (e, t) => {
    const n = Dt(dn, e.__scopePopover), r = u.useRef(null), o = ce(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Yr(s);
    }, []), /* @__PURE__ */ c.jsx(Hn, { as: og, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      Sl,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: V(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: V(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), sg = u.forwardRef(
  (e, t) => {
    const n = Dt(dn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Sl,
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
), Sl = u.forwardRef(
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
    } = e, p = Dt(dn, n), v = Xn(n);
    return zr(), /* @__PURE__ */ c.jsx(
      zn,
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
              to,
              {
                "data-state": Ml(p.open),
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
), kl = "PopoverClose", ig = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Dt(kl, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ig.displayName = kl;
var cg = "PopoverArrow", lg = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Xn(n);
    return /* @__PURE__ */ c.jsx(no, { ...o, ...r, ref: t });
  }
);
lg.displayName = cg;
function Ml(e) {
  return e ? "open" : "closed";
}
var Nl = gl, El = yl, Pl = wl, Ua = Cl, Ka = "Progress", qa = 100, [dg] = Ae(Ka), [ug, fg] = dg(Ka), Rl = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = mg,
      ...s
    } = e;
    (o || o === 0) && !Hs(o) && console.error(pg(`${o}`, "Progress"));
    const i = Hs(o) ? o : qa;
    r !== null && !Ys(r, i) && console.error(hg(`${r}`, "Progress"));
    const l = Ys(r, i) ? r : null, d = Wr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(ug, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Wr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Ol(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
Rl.displayName = Ka;
var Dl = "ProgressIndicator", Al = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = fg(Dl, n);
    return /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "data-state": Ol(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Al.displayName = Dl;
function mg(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ol(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Wr(e) {
  return typeof e == "number";
}
function Hs(e) {
  return Wr(e) && !isNaN(e) && e > 0;
}
function Ys(e, t) {
  return Wr(e) && !isNaN(e) && e <= t && e >= 0;
}
function pg(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${qa}\`.`;
}
function hg(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${qa} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var vg = Rl, gg = Al, Xa = "Radio", [xg, _l] = Ae(Xa), [bg, yg] = xg(Xa), Il = u.forwardRef(
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
    } = e, [m, p] = u.useState(null), v = ce(t, (g) => p(g)), x = u.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(bg, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Ll(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: v,
          onClick: V(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        Wl,
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
Il.displayName = Xa;
var jl = "RadioIndicator", Tl = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = yg(jl, n);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": Ll(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Tl.displayName = jl;
var wg = "RadioBubbleInput", Wl = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = ce(s, a), l = Ur(n), d = Kr(t);
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
Wl.displayName = wg;
function Ll(e) {
  return e ? "checked" : "unchecked";
}
var Cg = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], io = "RadioGroup", [Sg] = Ae(io, [
  hn,
  _l
]), Fl = hn(), $l = _l(), [kg, Mg] = Sg(io), Vl = u.forwardRef(
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
    } = e, v = Fl(n), x = Bn(d), [h, g] = qe({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: io
    });
    return /* @__PURE__ */ c.jsx(
      kg,
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
Vl.displayName = io;
var Bl = "RadioGroupItem", zl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Mg(Bl, n), s = a.disabled || r, i = Fl(n), l = $l(n), d = u.useRef(null), f = ce(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        Cg.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      La,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          Il,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: V((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: V(o.onFocus, () => {
              var v;
              p.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
zl.displayName = Bl;
var Ng = "RadioGroupIndicator", Hl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = $l(n);
    return /* @__PURE__ */ c.jsx(Tl, { ...o, ...r, ref: t });
  }
);
Hl.displayName = Ng;
var Eg = Vl, Pg = zl, Rg = Hl, Dg = [" ", "Enter", "ArrowUp", "ArrowDown"], Ag = [" ", "Enter"], $t = "Select", [co, lo, Og] = Br($t), [vn] = Ae($t, [
  Og,
  Rt
]), uo = Rt(), [_g, At] = vn($t), [Ig, jg] = vn($t), Yl = (e) => {
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
  } = e, h = uo(t), [g, y] = u.useState(null), [b, w] = u.useState(null), [k, C] = u.useState(!1), M = Bn(d), [S, P] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: $t
  }), [F, z] = qe({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: $t
  }), U = u.useRef(null), B = g ? x || !!g.closest("form") : !0, [X, j] = u.useState(/* @__PURE__ */ new Set()), Y = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ c.jsx(eo, { ...h, children: /* @__PURE__ */ c.jsxs(
    _g,
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
      triggerPointerDownPosRef: U,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(co.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          Ig,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback(($) => {
              j((K) => new Set(K).add($));
            }, []),
            onNativeOptionRemove: u.useCallback(($) => {
              j((K) => {
                const D = new Set(K);
                return D.delete($), D;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ c.jsxs(
          gd,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: F,
            onChange: ($) => z($.target.value),
            disabled: p,
            form: x,
            children: [
              F === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
Yl.displayName = $t;
var Gl = "SelectTrigger", Ul = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = uo(n), s = At(Gl, n), i = s.disabled || r, l = ce(t, s.onTriggerChange), d = lo(n), f = u.useRef("touch"), [m, p, v] = bd((h) => {
      const g = d().filter((w) => !w.disabled), y = g.find((w) => w.value === s.value), b = yd(g, h, y);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (h) => {
      i || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Gn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": xd(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: V(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: V(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: V(o.onKeyDown, (h) => {
          const g = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && Dg.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Ul.displayName = Gl;
var Kl = "SelectValue", ql = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = At(Kl, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = ce(t, l.onValueNodeChange);
    return Re(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      Q.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: xd(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
ql.displayName = Kl;
var Tg = "SelectIcon", Xl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Xl.displayName = Tg;
var Wg = "SelectPortal", Zl = (e) => /* @__PURE__ */ c.jsx(Ht, { asChild: !0, ...e });
Zl.displayName = Wg;
var Vt = "SelectContent", Ql = u.forwardRef(
  (e, t) => {
    const n = At(Vt, e.__scopeSelect), [r, o] = u.useState();
    if (Re(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Vn.createPortal(
        /* @__PURE__ */ c.jsx(Jl, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(co.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(ed, { ...e, ref: t });
  }
);
Ql.displayName = Vt;
var Ze = 10, [Jl, Ot] = vn(Vt), Lg = "SelectContentImpl", Fg = /* @__PURE__ */ Mt("SelectContent.RemoveScroll"), ed = u.forwardRef(
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
    } = e, b = At(Vt, n), [w, k] = u.useState(null), [C, M] = u.useState(null), S = ce(t, (O) => k(O)), [P, F] = u.useState(null), [z, U] = u.useState(
      null
    ), B = lo(n), [X, j] = u.useState(!1), Y = u.useRef(!1);
    u.useEffect(() => {
      if (w) return Yr(w);
    }, [w]), zr();
    const $ = u.useCallback(
      (O) => {
        const [q, ...te] = B().map((ue) => ue.ref.current), [re] = te.slice(-1), ie = document.activeElement;
        for (const ue of O)
          if (ue === ie || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === q && C && (C.scrollTop = 0), ue === re && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== ie)) return;
      },
      [B, C]
    ), K = u.useCallback(
      () => $([P, w]),
      [$, P, w]
    );
    u.useEffect(() => {
      X && K();
    }, [X, K]);
    const { onOpenChange: D, triggerPointerDownPosRef: W } = b;
    u.useEffect(() => {
      if (w) {
        let O = { x: 0, y: 0 };
        const q = (re) => {
          var ie, ue;
          O = {
            x: Math.abs(Math.round(re.pageX) - (((ie = W.current) == null ? void 0 : ie.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((ue = W.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, te = (re) => {
          O.x <= 10 && O.y <= 10 ? re.preventDefault() : w.contains(re.target) || D(!1), document.removeEventListener("pointermove", q), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [w, D, W]), u.useEffect(() => {
      const O = () => D(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [D]);
    const [R, H] = bd((O) => {
      const q = B().filter((ie) => !ie.disabled), te = q.find((ie) => ie.ref.current === document.activeElement), re = yd(q, O, te);
      re && setTimeout(() => re.ref.current.focus());
    }), E = u.useCallback(
      (O, q, te) => {
        const re = !Y.current && !te;
        (b.value !== void 0 && b.value === q || re) && (F(O), re && (Y.current = !0));
      },
      [b.value]
    ), _ = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), I = u.useCallback(
      (O, q, te) => {
        const re = !Y.current && !te;
        (b.value !== void 0 && b.value === q || re) && U(O);
      },
      [b.value]
    ), L = r === "popper" ? ea : td, Z = L === ea ? {
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
      Jl,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: M,
        itemRefCallback: E,
        selectedItem: P,
        onItemLeave: _,
        itemTextRefCallback: I,
        focusSelectedItem: K,
        selectedItemText: z,
        position: r,
        isPositioned: X,
        searchRef: R,
        children: /* @__PURE__ */ c.jsx(Hn, { as: Fg, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          zn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: V(o, (O) => {
              var q;
              (q = b.trigger) == null || q.focus({ preventScroll: !0 }), O.preventDefault();
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
                  L,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...y,
                    ...Z,
                    onPlaced: () => j(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: V(y.onKeyDown, (O) => {
                      const q = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !q && O.key.length === 1 && H(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let re = B().filter((ie) => !ie.disabled).map((ie) => ie.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ie = O.target, ue = re.indexOf(ie);
                          re = re.slice(ue + 1);
                        }
                        setTimeout(() => $(re)), O.preventDefault();
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
ed.displayName = Lg;
var $g = "SelectItemAlignedPosition", td = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = At(Vt, n), s = Ot(Vt, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = ce(t, (S) => f(S)), p = lo(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && h && g && y) {
      const S = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), F = a.valueNode.getBoundingClientRect(), z = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ie = z.left - P.left, ue = F.left - ie, ke = S.left - ue, _e = S.width + ke, nt = Math.max(_e, P.width), Xe = window.innerWidth - Ze, rt = zs(ue, [
          Ze,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ze, Xe - nt)
        ]);
        i.style.minWidth = _e + "px", i.style.left = rt + "px";
      } else {
        const ie = P.right - z.right, ue = window.innerWidth - F.right - ie, ke = window.innerWidth - S.right - ue, _e = S.width + ke, nt = Math.max(_e, P.width), Xe = window.innerWidth - Ze, rt = zs(ue, [
          Ze,
          Math.max(Ze, Xe - nt)
        ]);
        i.style.minWidth = _e + "px", i.style.right = rt + "px";
      }
      const U = p(), B = window.innerHeight - Ze * 2, X = h.scrollHeight, j = window.getComputedStyle(d), Y = parseInt(j.borderTopWidth, 10), $ = parseInt(j.paddingTop, 10), K = parseInt(j.borderBottomWidth, 10), D = parseInt(j.paddingBottom, 10), W = Y + $ + X + D + K, R = Math.min(g.offsetHeight * 5, W), H = window.getComputedStyle(h), E = parseInt(H.paddingTop, 10), _ = parseInt(H.paddingBottom, 10), I = S.top + S.height / 2 - Ze, L = B - I, Z = g.offsetHeight / 2, O = g.offsetTop + Z, q = Y + $ + O, te = W - q;
      if (q <= I) {
        const ie = U.length > 0 && g === U[U.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - h.offsetTop - h.offsetHeight, ke = Math.max(
          L,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ie ? _ : 0) + ue + K
        ), _e = q + ke;
        i.style.height = _e + "px";
      } else {
        const ie = U.length > 0 && g === U[0].ref.current;
        i.style.top = "0px";
        const ke = Math.max(
          I,
          Y + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ie ? E : 0) + Z
        ) + te;
        i.style.height = ke + "px", h.scrollTop = q - I + h.offsetTop;
      }
      i.style.margin = `${Ze}px 0`, i.style.minHeight = R + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
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
    Bg,
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
td.displayName = $g;
var Vg = "SelectPopperPosition", ea = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ze,
    ...a
  } = e, s = uo(n);
  return /* @__PURE__ */ c.jsx(
    to,
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
ea.displayName = Vg;
var [Bg, Za] = vn(Vt, {}), ta = "SelectViewport", nd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Ot(ta, n), s = Za(ta, n), i = ce(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(co.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
          onScroll: V(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ze * 2, h = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), y = Math.max(h, g);
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
nd.displayName = ta;
var rd = "SelectGroup", [zg, Hg] = vn(rd), od = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ne();
    return /* @__PURE__ */ c.jsx(zg, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
od.displayName = rd;
var ad = "SelectLabel", sd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Hg(ad, n);
    return /* @__PURE__ */ c.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
sd.displayName = ad;
var Lr = "SelectItem", [Yg, id] = vn(Lr), cd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = At(Lr, n), l = Ot(Lr, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, v] = u.useState(!1), x = ce(
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
      Yg,
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
          co.ItemSlot,
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
                ...s,
                ref: x,
                onFocus: V(s.onFocus, () => v(!0)),
                onBlur: V(s.onBlur, () => v(!1)),
                onClick: V(s.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: V(s.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: V(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: V(s.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: V(s.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: V(s.onKeyDown, (b) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && b.key === " " || (Ag.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cd.displayName = Lr;
var Dn = "SelectItemText", ld = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = At(Dn, n), i = Ot(Dn, n), l = id(Dn, n), d = jg(Dn, n), [f, m] = u.useState(null), p = ce(
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
      /* @__PURE__ */ c.jsx(Q.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Vn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
ld.displayName = Dn;
var dd = "SelectItemIndicator", ud = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return id(dd, n).isSelected ? /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ud.displayName = dd;
var na = "SelectScrollUpButton", fd = u.forwardRef((e, t) => {
  const n = Ot(na, e.__scopeSelect), r = Za(na, e.__scopeSelect), [o, a] = u.useState(!1), s = ce(t, r.onScrollButtonChange);
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
    pd,
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
fd.displayName = na;
var ra = "SelectScrollDownButton", md = u.forwardRef((e, t) => {
  const n = Ot(ra, e.__scopeSelect), r = Za(ra, e.__scopeSelect), [o, a] = u.useState(!1), s = ce(t, r.onScrollButtonChange);
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
    pd,
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
md.displayName = ra;
var pd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Ot("SelectScrollButton", n), s = u.useRef(null), i = lo(n), l = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Re(() => {
    var f;
    const d = i().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: V(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: V(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: V(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Gg = "SelectSeparator", hd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
hd.displayName = Gg;
var oa = "SelectArrow", vd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = uo(n), a = At(oa, n), s = Ot(oa, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(no, { ...o, ...r, ref: t }) : null;
  }
);
vd.displayName = oa;
var Ug = "SelectBubbleInput", gd = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ce(r, o), s = Ur(t);
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
      Q.select,
      {
        ...n,
        style: { ...Ri, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
gd.displayName = Ug;
function xd(e) {
  return e === "" || e === void 0;
}
function bd(e) {
  const t = Fe(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
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
function yd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Kg(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Kg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var qg = Yl, Xg = Ul, Zg = ql, Qg = Xl, Jg = Zl, e0 = Ql, t0 = nd, n0 = od, r0 = sd, o0 = cd, a0 = ld, s0 = ud, i0 = fd, c0 = md, l0 = hd, d0 = vd, fo = "Switch", [u0] = Ae(fo), [f0, m0] = u0(fo), wd = u.forwardRef(
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
    } = e, [p, v] = u.useState(null), x = ce(t, (w) => v(w)), h = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [y, b] = qe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: fo
    });
    return /* @__PURE__ */ c.jsxs(f0, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": s,
          "data-state": Md(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: V(e.onClick, (w) => {
            b((k) => !k), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        kd,
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
wd.displayName = fo;
var Cd = "SwitchThumb", Sd = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = m0(Cd, n);
    return /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": Md(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Sd.displayName = Cd;
var p0 = "SwitchBubbleInput", kd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = ce(s, a), l = Ur(n), d = Kr(t);
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
kd.displayName = p0;
function Md(e) {
  return e ? "checked" : "unchecked";
}
var h0 = wd, v0 = Sd, mo = "Tabs", [g0] = Ae(mo, [
  hn
]), Nd = hn(), [x0, Qa] = g0(mo), Ed = u.forwardRef(
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
    } = e, f = Bn(i), [m, p] = qe({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: mo
    });
    return /* @__PURE__ */ c.jsx(
      x0,
      {
        scope: n,
        baseId: Ne(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Q.div,
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
Ed.displayName = mo;
var Pd = "TabsList", Rd = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Qa(Pd, n), s = Nd(n);
    return /* @__PURE__ */ c.jsx(
      Wa,
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
Rd.displayName = Pd;
var Dd = "TabsTrigger", Ad = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Qa(Dd, n), i = Nd(n), l = _d(s.baseId, r), d = Id(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      La,
      {
        asChild: !0,
        ...i,
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
            onMouseDown: V(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: V(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: V(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Ad.displayName = Dd;
var Od = "TabsContent", b0 = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Qa(Od, n), l = _d(i.baseId, r), d = Id(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(Oe, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      Q.div,
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
b0.displayName = Od;
function _d(e, t) {
  return `${e}-trigger-${t}`;
}
function Id(e, t) {
  return `${e}-content-${t}`;
}
var y0 = Ed, w0 = Rd, C0 = Ad, Ja = "ToastProvider", [es, S0, k0] = Br("Toast"), [jd] = Ae("Toast", [k0]), [M0, po] = jd(Ja), Td = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Ja}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(es.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    M0,
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
Td.displayName = Ja;
var Wd = "ToastViewport", N0 = ["F8"], aa = "toast.viewportPause", sa = "toast.viewportResume", Ld = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = N0,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = po(Wd, n), i = S0(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = ce(t, m, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
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
            const M = new CustomEvent(aa);
            y.dispatchEvent(M), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const M = new CustomEvent(sa);
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
          const k = w.ref.current, C = [k, ...F0(k)];
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
            const B = h({ tabbingDirection: F ? "backwards" : "forwards" }), X = B.findIndex((j) => j === P);
            Io(B.slice(X + 1)) ? b.preventDefault() : F ? (M = d.current) == null || M.focus() : (S = f.current) == null || S.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [i, h]), /* @__PURE__ */ c.jsxs(
      Qf,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            ia,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                Io(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(es.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Q.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            ia,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                Io(g);
              }
            }
          )
        ]
      }
    );
  }
);
Ld.displayName = Wd;
var Fd = "ToastFocusProxy", ia = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = po(Fd, n);
    return /* @__PURE__ */ c.jsx(
      Vr,
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
ia.displayName = Fd;
var Zn = "Toast", E0 = "toast.swipeStart", P0 = "toast.swipeMove", R0 = "toast.swipeCancel", D0 = "toast.swipeEnd", $d = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = qe({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Zn
    });
    return /* @__PURE__ */ c.jsx(Oe, { present: n || i, children: /* @__PURE__ */ c.jsx(
      _0,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Fe(e.onPause),
        onResume: Fe(e.onResume),
        onSwipeStart: V(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: V(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: V(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: V(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
$d.displayName = Zn;
var [A0, O0] = jd(Zn, {
  onClose() {
  }
}), _0 = u.forwardRef(
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
    } = e, h = po(Zn, n), [g, y] = u.useState(null), b = ce(t, (j) => y(j)), w = u.useRef(null), k = u.useRef(null), C = o || h.duration, M = u.useRef(0), S = u.useRef(C), P = u.useRef(0), { onToastAdd: F, onToastRemove: z } = h, U = Fe(() => {
      var Y;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((Y = h.viewport) == null || Y.focus()), s();
    }), B = u.useCallback(
      (j) => {
        !j || j === 1 / 0 || (window.clearTimeout(P.current), M.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(U, j));
      },
      [U]
    );
    u.useEffect(() => {
      const j = h.viewport;
      if (j) {
        const Y = () => {
          B(S.current), d == null || d();
        }, $ = () => {
          const K = (/* @__PURE__ */ new Date()).getTime() - M.current;
          S.current = S.current - K, window.clearTimeout(P.current), l == null || l();
        };
        return j.addEventListener(aa, $), j.addEventListener(sa, Y), () => {
          j.removeEventListener(aa, $), j.removeEventListener(sa, Y);
        };
      }
    }, [h.viewport, C, l, d, B]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && B(C);
    }, [a, C, h.isClosePausedRef, B]), u.useEffect(() => (F(), () => z()), [F, z]);
    const X = u.useMemo(() => g ? Kd(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      X && /* @__PURE__ */ c.jsx(
        I0,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: X
        }
      ),
      /* @__PURE__ */ c.jsx(A0, { scope: n, onClose: U, children: Vn.createPortal(
        /* @__PURE__ */ c.jsx(es.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Zf,
          {
            asChild: !0,
            onEscapeKeyDown: V(i, () => {
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
                onKeyDown: V(e.onKeyDown, (j) => {
                  j.key === "Escape" && (i == null || i(j.nativeEvent), j.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, U()));
                }),
                onPointerDown: V(e.onPointerDown, (j) => {
                  j.button === 0 && (w.current = { x: j.clientX, y: j.clientY });
                }),
                onPointerMove: V(e.onPointerMove, (j) => {
                  if (!w.current) return;
                  const Y = j.clientX - w.current.x, $ = j.clientY - w.current.y, K = !!k.current, D = ["left", "right"].includes(h.swipeDirection), W = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, R = D ? W(0, Y) : 0, H = D ? 0 : W(0, $), E = j.pointerType === "touch" ? 10 : 2, _ = { x: R, y: H }, I = { originalEvent: j, delta: _ };
                  K ? (k.current = _, hr(P0, m, I, {
                    discrete: !1
                  })) : Gs(_, h.swipeDirection, E) ? (k.current = _, hr(E0, f, I, {
                    discrete: !1
                  }), j.target.setPointerCapture(j.pointerId)) : (Math.abs(Y) > E || Math.abs($) > E) && (w.current = null);
                }),
                onPointerUp: V(e.onPointerUp, (j) => {
                  const Y = k.current, $ = j.target;
                  if ($.hasPointerCapture(j.pointerId) && $.releasePointerCapture(j.pointerId), k.current = null, w.current = null, Y) {
                    const K = j.currentTarget, D = { originalEvent: j, delta: Y };
                    Gs(Y, h.swipeDirection, h.swipeThreshold) ? hr(D0, v, D, {
                      discrete: !0
                    }) : hr(
                      R0,
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
), I0 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = po(Zn, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return W0(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Ht, { asChild: !0, children: /* @__PURE__ */ c.jsx(Vr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, j0 = "ToastTitle", Vd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Vd.displayName = j0;
var T0 = "ToastDescription", Bd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Bd.displayName = T0;
var zd = "ToastAction", Hd = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Ud, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Gd, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${zd}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Hd.displayName = zd;
var Yd = "ToastClose", Gd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = O0(Yd, n);
    return /* @__PURE__ */ c.jsx(Ud, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
Gd.displayName = Yd;
var Ud = u.forwardRef((e, t) => {
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
function Kd(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), L0(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Kd(r));
    }
  }), t;
}
function hr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ya(o, a) : o.dispatchEvent(a);
}
var Gs = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function W0(e = () => {
}) {
  const t = Fe(e);
  Re(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function L0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function F0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Io(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var $0 = Td, V0 = Ld, B0 = $d, z0 = Vd, H0 = Bd, Y0 = Hd, [ho] = Ae("Tooltip", [
  Rt
]), vo = Rt(), qd = "TooltipProvider", G0 = 700, ca = "tooltip.open", [U0, ts] = ho(qd), Xd = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = G0,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    U0,
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
Xd.displayName = qd;
var Ln = "Tooltip", [K0, Qn] = ho(Ln), Zd = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = ts(Ln, e.__scopeTooltip), d = vo(t), [f, m] = u.useState(null), p = Ne(), v = u.useRef(0), x = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, g = u.useRef(!1), [y, b] = qe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ca))) : l.onClose(), a == null || a(S);
    },
    caller: Ln
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
  }, []), /* @__PURE__ */ c.jsx(eo, { ...d, children: /* @__PURE__ */ c.jsx(
    K0,
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
Zd.displayName = Ln;
var la = "TooltipTrigger", Qd = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Qn(la, n), a = ts(la, n), s = vo(n), i = u.useRef(null), l = ce(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(Gn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: V(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: V(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: V(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: V(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: V(e.onBlur, o.onClose),
        onClick: V(e.onClick, o.onClose)
      }
    ) });
  }
);
Qd.displayName = la;
var ns = "TooltipPortal", [q0, X0] = ho(ns, {
  forceMount: void 0
}), Jd = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Qn(ns, t);
  return /* @__PURE__ */ c.jsx(q0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Oe, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Jd.displayName = ns;
var un = "TooltipContent", eu = u.forwardRef(
  (e, t) => {
    const n = X0(un, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Qn(un, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Oe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(tu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(Z0, { side: o, ...a, ref: t }) });
  }
), Z0 = u.forwardRef((e, t) => {
  const n = Qn(un, e.__scopeTooltip), r = ts(un, e.__scopeTooltip), o = u.useRef(null), a = ce(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), v = u.useCallback(
    (x, h) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, b = nx(y, g.getBoundingClientRect()), w = rx(y, b), k = ox(h.getBoundingClientRect()), C = sx([...w, ...k]);
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
        const g = h.target, y = { x: h.clientX, y: h.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), w = !ax(y, s);
        b ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(tu, { ...e, ref: a });
}), [Q0, J0] = ho(Ln, { isInside: !1 }), ex = /* @__PURE__ */ Nf("TooltipContent"), tu = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = Qn(un, n), d = vo(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(ca, f), () => document.removeEventListener(ca, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const m = (p) => {
          const v = p.target;
          v != null && v.contains(l.trigger) && f();
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
          to,
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
              /* @__PURE__ */ c.jsx(ex, { children: r }),
              /* @__PURE__ */ c.jsx(Q0, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Of, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
eu.displayName = un;
var nu = "TooltipArrow", tx = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = vo(n);
    return J0(
      nu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(no, { ...o, ...r, ref: t });
  }
);
tx.displayName = nu;
function nx(e, t) {
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
function rx(e, t, n = 5) {
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
function ox(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function ax(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function sx(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), ix(t);
}
function ix(e) {
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
var cx = Xd, lx = Zd, dx = Qd, ux = Jd, fx = eu;
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mx = {
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
const we = (e, t, n, r) => {
  const o = yf(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => Co(
      "svg",
      {
        ref: p,
        ...mx[e],
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
        l && Co("title", { key: "svg-title" }, l),
        ...r.map(([v, x]) => Co(v, x)),
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
const px = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], hx = we("outline", "alert-circle", "AlertCircle", px);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], gx = we("outline", "calendar-event", "CalendarEvent", vx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], ru = we("outline", "check", "Check", xx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ou = we("outline", "chevron-down", "ChevronDown", bx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], wx = we("outline", "chevron-left-pipe", "ChevronLeftPipe", yx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Sx = we("outline", "chevron-left", "ChevronLeft", Cx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], Mx = we("outline", "chevron-right-pipe", "ChevronRightPipe", kx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], au = we("outline", "chevron-right", "ChevronRight", Nx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Px = we("outline", "circle-check", "CircleCheck", Ex);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Dx = we("outline", "cloud-up", "CloudUp", Rx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = [["path", { d: "M5 12l14 0", key: "svg-0" }]], Ox = we("outline", "minus", "Minus", Ax);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], su = we("outline", "search", "Search", _x);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z", key: "svg-0" }]], jx = we("outline", "sparkles", "Sparkles", Ix);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], da = we("outline", "x", "X", Tx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Lx = we("filled", "alert-circle-filled", "AlertCircleFilled", Wx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], iu = we("filled", "circle-check-filled", "CircleCheckFilled", Fx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Us = we("filled", "exclamation-circle-filled", "ExclamationCircleFilled", $x);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Ks = we("filled", "folder-filled", "FolderFilled", Vx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Nr = we("filled", "info-circle-filled", "InfoCircleFilled", Bx);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = [["path", { d: "M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z", key: "svg-0" }], ["path", { d: "M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z", key: "svg-1" }]], Hx = we("filled", "trash-x-filled", "TrashXFilled", zx), rs = "-", Yx = (e) => {
  const t = Ux(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(rs);
      return i[0] === "" && i.length !== 1 && i.shift(), cu(i, t) || Gx(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, cu = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? cu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(rs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, qs = /^\[(.+)\]$/, Gx = (e) => {
  if (qs.test(e)) {
    const t = qs.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ux = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    ua(n[o], r, o, t);
  return r;
}, ua = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Xs(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Kx(o)) {
        ua(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      ua(s, Xs(t, a), n, r);
    });
  });
}, Xs = (e, t) => {
  let n = e;
  return t.split(rs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Kx = (e) => e.isThemeGetter, qx = (e) => {
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
}, fa = "!", ma = ":", Xx = ma.length, Zx = (e) => {
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
        if (h === ma) {
          a.push(o.slice(l, x)), l = x + Xx;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? i++ : h === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = Qx(f), p = m !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + ma, a = r;
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
}, Qx = (e) => e.endsWith(fa) ? e.substring(0, e.length - 1) : e.startsWith(fa) ? e.substring(1) : e, Jx = (e) => {
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
}, eb = (e) => ({
  cache: qx(e.cacheSize),
  parseClassName: Zx(e),
  sortModifiers: Jx(e),
  ...Yx(e)
}), tb = /\s+/, nb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(tb);
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
    const b = a(p).join(":"), w = v ? b + fa : b, k = w + y;
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
function rb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = lu(t)) && (r && (r += " "), r += n);
  return r;
}
const lu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = lu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Zs(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = eb(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = nb(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(rb.apply(null, arguments));
  };
}
const Ce = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, du = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, uu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ob = /^\d+\/\d+$/, ab = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ib = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, cb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, en = (e) => ob.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), wt = (e) => !!e && Number.isInteger(Number(e)), jo = (e) => e.endsWith("%") && le(e.slice(0, -1)), ht = (e) => ab.test(e), db = () => !0, ub = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  sb.test(e) && !ib.test(e)
), fu = () => !1, fb = (e) => cb.test(e), mb = (e) => lb.test(e), pb = (e) => !J(e) && !ee(e), hb = (e) => gn(e, hu, fu), J = (e) => du.test(e), jt = (e) => gn(e, vu, ub), To = (e) => gn(e, yb, le), Qs = (e) => gn(e, mu, fu), vb = (e) => gn(e, pu, mb), vr = (e) => gn(e, gu, fb), ee = (e) => uu.test(e), En = (e) => xn(e, vu), gb = (e) => xn(e, wb), Js = (e) => xn(e, mu), xb = (e) => xn(e, hu), bb = (e) => xn(e, pu), gr = (e) => xn(e, gu, !0), gn = (e, t, n) => {
  const r = du.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, xn = (e, t, n = !1) => {
  const r = uu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, mu = (e) => e === "position" || e === "percentage", pu = (e) => e === "image" || e === "url", hu = (e) => e === "length" || e === "size" || e === "bg-size", vu = (e) => e === "length", yb = (e) => e === "number", wb = (e) => e === "family-name", gu = (e) => e === "shadow", ei = () => {
  const e = Ce("color"), t = Ce("font"), n = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), a = Ce("leading"), s = Ce("breakpoint"), i = Ce("container"), l = Ce("spacing"), d = Ce("radius"), f = Ce("shadow"), m = Ce("inset-shadow"), p = Ce("text-shadow"), v = Ce("drop-shadow"), x = Ce("blur"), h = Ce("perspective"), g = Ce("aspect"), y = Ce("ease"), b = Ce("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), ee, J], M = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], P = () => [ee, J, l], F = () => [en, "full", "auto", ...P()], z = () => [wt, "none", "subgrid", ee, J], U = () => ["auto", {
    span: ["full", wt, ee, J]
  }, wt, ee, J], B = () => [wt, "auto", ee, J], X = () => ["auto", "min", "max", "fr", ee, J], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...P()], K = () => [en, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], D = () => [e, ee, J], W = () => [...k(), Js, Qs, {
    position: [ee, J]
  }], R = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", xb, hb, {
    size: [ee, J]
  }], E = () => [jo, En, jt], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], I = () => ["", le, En, jt], L = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [le, jo, Js, Qs], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    ee,
    J
  ], te = () => ["none", le, ee, J], re = () => ["none", le, ee, J], ie = () => [le, ee, J], ue = () => [en, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ht],
      breakpoint: [ht],
      color: [db],
      container: [ht],
      "drop-shadow": [ht],
      ease: ["in", "out", "in-out"],
      font: [pb],
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
        aspect: ["auto", "square", en, J, ee, g]
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
        basis: [en, "full", "auto", i, ...P()]
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
        flex: [le, en, "auto", "initial", "none", J]
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
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
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
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        justify: [...j(), "normal"]
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
        content: ["normal", ...j()]
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
        "place-content": j()
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
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
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
        text: ["base", n, En, jt]
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
        font: [r, ee, To]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", jo, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gb, J, t]
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
        "line-clamp": [le, "none", ee, To]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", ee, jt]
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
          }, wt, ee, J],
          radial: ["", ee, J],
          conic: [wt, ee, J]
        }, bb, vb]
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
        border: I()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": I()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": I()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": I()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": I()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": I()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": I()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": I()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": I()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": I()
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
        "divide-y": I()
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
        border: [...L(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...L(), "hidden", "none"]
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
        outline: [...L(), "none", "hidden"]
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
        outline: ["", le, En, jt]
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
          gr,
          vr
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
        "inset-shadow": ["none", m, gr, vr]
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
        ring: I()
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
        "ring-offset": [le, jt]
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
        "inset-ring": I()
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
        "text-shadow": ["none", p, gr, vr]
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
        opacity: [le, ee, J]
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
          gr,
          vr
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
        "backdrop-blur": q()
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
        stroke: [le, En, jt, To]
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
}, Cb = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (An(e, "cacheSize", t), An(e, "prefix", n), An(e, "experimentalParseClassName", r), xr(e.theme, a.theme), xr(e.classGroups, a.classGroups), xr(e.conflictingClassGroups, a.conflictingClassGroups), xr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), An(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), br(e.theme, o.theme), br(e.classGroups, o.classGroups), br(e.conflictingClassGroups, o.conflictingClassGroups), br(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), xu(e, o, "orderSensitiveModifiers"), e), An = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, xr = (e, t) => {
  if (t)
    for (const n in t)
      An(e, n, t[n]);
}, br = (e, t) => {
  if (t)
    for (const n in t)
      xu(e, t, n);
}, xu = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Sb = (e, ...t) => typeof e == "function" ? Zs(ei, e, ...t) : Zs(() => Cb(ei(), e), ...t), kb = Sb({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), A = (...e) => kb(Ei(e)), je = (e, t = {}) => {
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
}, ti = ae(
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
), Mb = N.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Lx : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      $r,
      {
        className: A(ti({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: A(ti({ intent: e }), n),
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
Mb.displayName = "Badge";
const Nb = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Wo = ae(
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
), Eb = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Pb = N.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = au,
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
        className: A(Nb({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Wo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: A(
                  Wo({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Wo({ isActive: !0 })),
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
                    className: A(Eb({ size: t }))
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
Pb.displayName = "Breadcrumbs";
const Rb = ae(
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
), bu = N.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    vg,
    {
      ref: s,
      className: A(Rb({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        gg,
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
bu.displayName = "ProgressIndicator.Linear";
const Db = ae("flex items-center", {
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
}, Fr = {
  sm: 12,
  md: 10
}, ni = {
  sm: (50 - Fr.sm / 2).toString(),
  md: (50 - Fr.md / 2).toString()
}, yu = N.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: A(Db({ size: t, layout: e }), r),
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
            className: A(Ab[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: ni[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Fr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: ni[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: Fr[t],
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
yu.displayName = "ProgressIndicator.Circular";
const os = {
  Linear: bu,
  Circular: yu
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
), yr = ae("", {
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
}), Le = N.forwardRef(
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
    const m = a ? $r : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: A(
          Lo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            je(r, {
              className: A(
                yr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            je(o, {
              className: A(
                yr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(os.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: A(
          Lo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          je(r, {
            className: A(
              yr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          je(o, {
            className: A(
              yr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: A(
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
Le.displayName = "Button";
function Ob(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Fo = {}, On = {};
function Wt(e, t) {
  try {
    const r = (Fo[e] || (Fo[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in On ? On[r] : ri(r, r.split(":"));
  } catch {
    if (e in On) return On[e];
    const n = e == null ? void 0 : e.match(_b);
    return n ? ri(e, n.slice(1)) : NaN;
  }
}
const _b = /([+-]\d\d):?(\d\d)?/;
function ri(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return On[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class lt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Wt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), wu(this), pa(this)) : this.setTime(Date.now());
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
    const t = -Wt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), pa(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new lt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const oi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!oi.test(e)) return;
  const t = e.replace(oi, "$1UTC");
  lt.prototype[t] && (e.startsWith("get") ? lt.prototype[e] = function() {
    return this.internal[t]();
  } : (lt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ib(this), +this;
  }, lt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), pa(this), +this;
  }));
});
function pa(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Wt(e.timeZone, e) * 60));
}
function Ib(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), wu(e);
}
function wu(e) {
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
    const b = Wt(e.timeZone, e), w = b > 0 ? Math.floor(b) : Math.ceil(b), k = v - w;
    k && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + k), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + k));
  }
}
class De extends lt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new De(...n, t) : new De(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Ob(this.timeZone, this)})`;
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
    return new De(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new De(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Cu = 6048e5, jb = 864e5, ai = Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ai in e ? e[ai](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function he(e, t) {
  return Se(t || e, e);
}
function Su(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Se(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function ku(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Se(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Se(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Tb = {};
function Jn() {
  return Tb;
}
function fn(e, t) {
  var i, l, d, f;
  const n = Jn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = he(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Fn(e, t) {
  return fn(e, { ...t, weekStartsOn: 1 });
}
function Mu(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Se(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Fn(o), s = Se(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Fn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function si(e) {
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
function bn(e, ...t) {
  const n = Se.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function $n(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Nu(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = $n(r), s = $n(o), i = +a - si(a), l = +s - si(s);
  return Math.round((i - l) / jb);
}
function Wb(e, t) {
  const n = Mu(e, t), r = Se(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Fn(r);
}
function Lb(e, t, n) {
  return Su(e, t * 7, n);
}
function Fb(e, t, n) {
  return ku(e, t * 12, n);
}
function $b(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const a = he(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Se(r, n || NaN);
}
function Vb(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const a = he(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Se(r, n || NaN);
}
function Bb(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +$n(r) == +$n(o);
}
function Eu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function zb(e) {
  return !(!Eu(e) && typeof e != "number" || isNaN(+he(e)));
}
function Hb(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Yb(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Gb(e, t) {
  const [n, r] = bn(e, t.start, t.end);
  return { start: n, end: r };
}
function Ub(e, t) {
  const { start: n, end: r } = Gb(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Se(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Kb(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function qb(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Pu(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ru(e, t) {
  var i, l, d, f;
  const n = Jn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = he(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Xb(e, t) {
  return Ru(e, { ...t, weekStartsOn: 1 });
}
const Zb = {
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
}, Qb = (e, t, n) => {
  let r;
  const o = Zb[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function sn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Jb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ey = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ty = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ny = {
  date: sn({
    formats: Jb,
    defaultWidth: "full"
  }),
  time: sn({
    formats: ey,
    defaultWidth: "full"
  }),
  dateTime: sn({
    formats: ty,
    defaultWidth: "full"
  })
}, ry = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, oy = (e, t, n, r) => ry[e];
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
const ay = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iy = {
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
}, cy = {
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
}, ly = {
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
}, dy = {
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
}, uy = (e, t) => {
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
}, fy = {
  ordinalNumber: uy,
  era: st({
    values: ay,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: sy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: iy,
    defaultWidth: "wide"
  }),
  day: st({
    values: cy,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: ly,
    defaultWidth: "wide",
    formattingValues: dy,
    defaultFormattingWidth: "wide"
  })
};
function it(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? py(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      my(i, (m) => m.test(s))
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
function my(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function py(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Du(e) {
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
const hy = /^(\d+)(th|st|nd|rd)?/i, vy = /\d+/i, gy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xy = {
  any: [/^b/i, /^(a|c)/i]
}, by = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Cy = {
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
}, Sy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ky = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, My = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ny = {
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
}, Ey = {
  ordinalNumber: Du({
    matchPattern: hy,
    parsePattern: vy,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: it({
    matchPatterns: gy,
    defaultMatchWidth: "wide",
    parsePatterns: xy,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: by,
    defaultMatchWidth: "wide",
    parsePatterns: yy,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: wy,
    defaultMatchWidth: "wide",
    parsePatterns: Cy,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: Sy,
    defaultMatchWidth: "wide",
    parsePatterns: ky,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: My,
    defaultMatchWidth: "any",
    parsePatterns: Ny,
    defaultParseWidth: "any"
  })
}, as = {
  code: "en-US",
  formatDistance: Qb,
  formatLong: ny,
  formatRelative: oy,
  localize: fy,
  match: Ey,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Py(e, t) {
  const n = he(e, t == null ? void 0 : t.in);
  return Nu(n, Pu(n)) + 1;
}
function Au(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = +Fn(n) - +Wb(n);
  return Math.round(r / Cu) + 1;
}
function Ou(e, t) {
  var f, m, p, v;
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Jn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Se((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = fn(s, t), l = Se((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = fn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function Ry(e, t) {
  var i, l, d, f;
  const n = Jn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Ou(e, t), a = Se((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), fn(a, t);
}
function _u(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = +fn(n, t) - +Ry(n, t);
  return Math.round(r / Cu) + 1;
}
function me(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ct = {
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
}, tn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ii = {
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
    const o = Ou(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return me(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : me(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Mu(e);
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
    const o = _u(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : me(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Au(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : me(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Py(e);
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
    switch (r === 12 ? o = tn.noon : r === 0 ? o = tn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = tn.evening : r >= 12 ? o = tn.afternoon : r >= 4 ? o = tn.morning : o = tn.night, t) {
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
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
        return li(r);
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
        return li(r);
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
        return "GMT" + ci(r, ":");
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
        return "GMT" + ci(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Tt(r, ":");
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
function ci(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + me(a, 2);
}
function li(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + me(Math.abs(e) / 60, 2) : Tt(e, t);
}
function Tt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = me(Math.trunc(r / 60), 2), a = me(r % 60, 2);
  return n + o + t + a;
}
const di = (e, t) => {
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
}, Iu = (e, t) => {
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
}, Dy = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return di(e, t);
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
  return a.replace("{{date}}", di(r, t)).replace("{{time}}", Iu(o, t));
}, Ay = {
  p: Iu,
  P: Dy
}, Oy = /^D+$/, _y = /^Y+$/, Iy = ["D", "DD", "YY", "YYYY"];
function jy(e) {
  return Oy.test(e);
}
function Ty(e) {
  return _y.test(e);
}
function Wy(e, t, n) {
  const r = Ly(e, t, n);
  if (console.warn(r), Iy.includes(e)) throw new RangeError(r);
}
function Ly(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Fy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $y = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Vy = /^'([^]*?)'?$/, By = /''/g, zy = /[a-zA-Z]/;
function Hy(e, t, n) {
  var f, m, p, v, x, h, g, y;
  const r = Jn(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? as, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, i = he(e, n == null ? void 0 : n.in);
  if (!zb(i))
    throw new RangeError("Invalid time value");
  let l = t.match($y).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const k = Ay[w];
      return k(b, o.formatLong);
    }
    return b;
  }).join("").match(Fy).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: Yy(b) };
    if (ii[w])
      return { isToken: !0, value: b };
    if (w.match(zy))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && Ty(w) || !(n != null && n.useAdditionalDayOfYearTokens) && jy(w)) && Wy(w, t, String(e));
    const k = ii[w[0]];
    return k(i, w, o.localize, d);
  }).join("");
}
function Yy(e) {
  const t = e.match(Vy);
  return t ? t[1].replace(By, "'") : e;
}
function Gy(e, t) {
  const n = he(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Se(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Uy(e, t) {
  return he(e, t == null ? void 0 : t.in).getMonth();
}
function Ky(e, t) {
  return he(e, t == null ? void 0 : t.in).getFullYear();
}
function qy(e, t) {
  return +he(e) > +he(t);
}
function Xy(e, t) {
  return +he(e) < +he(t);
}
function Zy(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Qy(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Jy(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Se(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = Gy(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function ew(e, t, n) {
  const r = he(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Se(e, NaN) : (r.setFullYear(t), r);
}
const ui = 5, tw = 4;
function nw(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, ui * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? ui : tw;
}
function ju(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function rw(e, t) {
  const n = ju(e, t), r = nw(e, t);
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
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? De.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new De(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : Su(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : ku(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Lb(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Fb(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Nu(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Hb(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Ub(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : rw(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Xb(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Yb(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Ru(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : qb(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Hy(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Au(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Uy(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Ky(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : _u(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : qy(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : Xy(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Eu(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Bb(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : Zy(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : Qy(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : $b(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Vb(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : Jy(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : ew(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : ju(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : $n(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Fn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Kb(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : fn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Pu(r);
    }, this.options = { locale: as, ...t }, this.overrides = n;
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
class Tu {
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
class ow {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class aw {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function sw(e) {
  return N.createElement("button", { ...e });
}
function iw(e) {
  return N.createElement("span", { ...e });
}
function cw(e) {
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
function lw(e) {
  const { day: t, modifiers: n, ...r } = e;
  return N.createElement("td", { ...r });
}
function dw(e) {
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
var ge;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ge || (ge = {}));
var Qe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Qe || (Qe = {}));
var Be;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Be || (Be = {}));
function uw(e) {
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
function fw(e) {
  return N.createElement("div", { ...e });
}
function mw(e) {
  return N.createElement("div", { ...e });
}
function pw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return N.createElement("div", { ...r }, e.children);
}
function hw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return N.createElement("div", { ...r });
}
function vw(e) {
  return N.createElement("table", { ...e });
}
function gw(e) {
  return N.createElement("div", { ...e });
}
const Wu = xa(void 0);
function er() {
  const e = ba(Wu);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function xw(e) {
  const { components: t } = er();
  return N.createElement(t.Dropdown, { ...e });
}
function bw(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = er(), f = Me((p) => {
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
function yw(e) {
  const { components: t } = er();
  return N.createElement(t.Button, { ...e });
}
function ww(e) {
  return N.createElement("option", { ...e });
}
function Cw(e) {
  const { components: t } = er();
  return N.createElement(t.Button, { ...e });
}
function Sw(e) {
  const { rootRef: t, ...n } = e;
  return N.createElement("div", { ...n, ref: t });
}
function kw(e) {
  return N.createElement("select", { ...e });
}
function Mw(e) {
  const { week: t, ...n } = e;
  return N.createElement("tr", { ...n });
}
function Nw(e) {
  return N.createElement("th", { ...e });
}
function Ew(e) {
  return N.createElement(
    "thead",
    { "aria-hidden": !0 },
    N.createElement("tr", { ...e })
  );
}
function Pw(e) {
  const { week: t, ...n } = e;
  return N.createElement("th", { ...n });
}
function Rw(e) {
  return N.createElement("th", { ...e });
}
function Dw(e) {
  return N.createElement("tbody", { ...e });
}
function Aw(e) {
  const { components: t } = er();
  return N.createElement(t.Dropdown, { ...e });
}
const Ow = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: sw,
  CaptionLabel: iw,
  Chevron: cw,
  Day: lw,
  DayButton: dw,
  Dropdown: uw,
  DropdownNav: fw,
  Footer: mw,
  Month: pw,
  MonthCaption: hw,
  MonthGrid: vw,
  Months: gw,
  MonthsDropdown: xw,
  Nav: bw,
  NextMonthButton: yw,
  Option: ww,
  PreviousMonthButton: Cw,
  Root: Sw,
  Select: kw,
  Week: Mw,
  WeekNumber: Pw,
  WeekNumberHeader: Rw,
  Weekday: Nw,
  Weekdays: Ew,
  Weeks: Dw,
  YearsDropdown: Aw
}, Symbol.toStringTag, { value: "Module" }));
function vt(e, t, n = !1, r = mt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Lu(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ss(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Fu(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function $u(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Vu(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Bu(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function gt(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Bu(i, n))
      return i.includes(e);
    if (ss(i))
      return vt(i, e, !1, n);
    if (Vu(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Lu(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return Fu(i) ? a(e, i.after) > 0 : $u(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function _w(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, y = n && v(n), b = r && h(r), w = {
    [ge.focused]: [],
    [ge.outside]: [],
    [ge.disabled]: [],
    [ge.hidden]: [],
    [ge.today]: []
  }, k = {};
  for (const C of e) {
    const { date: M, displayMonth: S } = C, P = !!(S && !p(M, S)), F = !!(y && x(M, y)), z = !!(b && g(M, b)), U = !!(a && gt(M, a, o)), B = !!(s && gt(M, s, o)) || F || z || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, X = m(M, f ?? o.today());
    P && w.outside.push(C), U && w.disabled.push(C), B && w.hidden.push(C), X && w.today.push(C), i && Object.keys(i).forEach((j) => {
      const Y = i == null ? void 0 : i[j];
      Y && gt(M, Y, o) && (k[j] ? k[j].push(C) : k[j] = [C]);
    });
  }
  return (C) => {
    const M = {
      [ge.focused]: !1,
      [ge.disabled]: !1,
      [ge.hidden]: !1,
      [ge.outside]: !1,
      [ge.today]: !1
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
function Iw(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ge[a]] ? o.push(t[ge[a]]) : t[Qe[a]] && o.push(t[Qe[a]]), o), [t[ne.Day]]);
}
function jw(e) {
  return {
    ...Ow,
    ...e
  };
}
function Tw(e) {
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
function zu() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in ge)
    e[ge[t]] = `rdp-${ge[t]}`;
  for (const t in Qe)
    e[Qe[t]] = `rdp-${Qe[t]}`;
  for (const t in Be)
    e[Be[t]] = `rdp-${Be[t]}`;
  return e;
}
function Hu(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const Ww = Hu;
function Lw(e, t, n) {
  return (n ?? new Ye(t)).format(e, "d");
}
function Fw(e, t = mt) {
  return t.format(e, "LLLL");
}
function $w(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccccc");
}
function Vw(e, t = mt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Bw() {
  return "";
}
function Yu(e, t = mt) {
  return t.format(e, "yyyy");
}
const zw = Yu, Hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Hu,
  formatDay: Lw,
  formatMonthCaption: Ww,
  formatMonthDropdown: Fw,
  formatWeekNumber: Vw,
  formatWeekNumberHeader: Bw,
  formatWeekdayName: $w,
  formatYearCaption: zw,
  formatYearDropdown: Yu
}, Symbol.toStringTag, { value: "Module" }));
function Yw(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Hw,
    ...e
  };
}
function Gw(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function Uw(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Kw(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function qw(e, t, n, r, o = !1) {
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
function Gu(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Xw = Gu;
function Uu(e, t, n) {
  return (n ?? new Ye(t)).formatMonthYear(e);
}
const Zw = Uu;
function Qw(e, t, n, r) {
  let o = (r ?? new Ye(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Jw(e) {
  return "Choose the Month";
}
function e1() {
  return "";
}
function t1(e) {
  return "Go to the Next Month";
}
function n1(e) {
  return "Go to the Previous Month";
}
function r1(e, t, n) {
  return (n ?? new Ye(t)).format(e, "cccc");
}
function o1(e, t) {
  return `Week ${e}`;
}
function a1(e) {
  return "Week Number";
}
function s1(e) {
  return "Choose the Year";
}
const i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Zw,
  labelDay: Xw,
  labelDayButton: Gu,
  labelGrid: Uu,
  labelGridcell: Qw,
  labelMonthDropdown: Jw,
  labelNav: e1,
  labelNext: t1,
  labelPrevious: n1,
  labelWeekNumber: o1,
  labelWeekNumberHeader: a1,
  labelWeekday: r1,
  labelYearDropdown: s1
}, Symbol.toStringTag, { value: "Module" })), tr = (e) => e instanceof HTMLElement ? e : null, $o = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], c1 = (e) => tr(e.querySelector("[data-animated-month]")), Vo = (e) => tr(e.querySelector("[data-animated-caption]")), Bo = (e) => tr(e.querySelector("[data-animated-weeks]")), l1 = (e) => tr(e.querySelector("[data-animated-nav]")), d1 = (e) => tr(e.querySelector("[data-animated-weekdays]"));
function u1(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = _n(null), i = _n(r), l = _n(!1);
  ki(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[Be.caption_after_enter] : n[Be.caption_before_enter], v = m ? n[Be.weeks_after_enter] : n[Be.weeks_before_enter], x = s.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? ($o(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const k = c1(w);
      k && w.contains(k) && w.removeChild(k);
      const C = Vo(w);
      C && C.classList.remove(p);
      const M = Bo(w);
      M && M.classList.remove(v);
    }), s.current = h) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? $o(x) : [], y = $o(e.current);
    if (y != null && y.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = l1(e.current);
      b && (b.style.zIndex = "1"), y.forEach((w, k) => {
        const C = g[k];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const M = Vo(w);
        M && M.classList.add(p);
        const S = Bo(w);
        S && S.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(p), S && S.classList.remove(v), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const F = d1(C);
        F && (F.style.opacity = "0");
        const z = Vo(C);
        z && (z.classList.add(m ? n[Be.caption_before_exit] : n[Be.caption_after_exit]), z.addEventListener("animationend", P));
        const U = Bo(C);
        U && U.classList.add(m ? n[Be.weeks_before_exit] : n[Be.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function f1(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: y, startOfISOWeek: b, startOfWeek: w } = r, k = l ? y(o, r) : s ? b(o) : w(o), C = l ? p(a) : s ? v(x(a)) : h(x(a)), M = f(C, k), S = m(a, o) + 1, P = [];
  for (let U = 0; U <= M; U++) {
    const B = d(k, U);
    if (t && g(B, t))
      break;
    P.push(B);
  }
  const z = (l ? 35 : 42) * S;
  if (i && P.length < z) {
    const U = z - P.length;
    for (let B = 0; B < U; B++) {
      const X = d(P[P.length - 1], 1);
      P.push(X);
    }
  }
  return P;
}
function m1(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function p1(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function fi(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function h1(e, t, n, r) {
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
      const F = n.ISOWeek ? d(P) : f(P), z = S.find((B) => B.weekNumber === F), U = new Tu(P, g, r);
      return z ? z.days.push(U) : S.push(new aw(F, [U])), S;
    }, []), M = new ow(g, C);
    return h.push(M), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function v1(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : v ? r = f(v, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function g1(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function x1(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function b1(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function go(e, t) {
  const [n, r] = cn(e);
  return [t === void 0 ? n : t, r];
}
function y1(e, t) {
  const [n, r] = v1(e, t), { startOfMonth: o, endOfMonth: a } = t, s = fi(e, n, r, t), [i, l] = go(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Mi(() => {
    const M = fi(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const d = p1(i, r, e, t), f = f1(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = h1(d, f, e, t), p = b1(m), v = m1(m), x = x1(i, n, e, t), h = g1(i, r, e, t), { disableNavigation: g, onMonthChange: y } = e, b = (M) => p.some((S) => S.days.some((P) => P.isEqualTo(M))), w = (M) => {
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
var ot;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ot || (ot = {}));
function mi(e) {
  return !e[ge.disabled] && !e[ge.hidden] && !e[ge.outside];
}
function w1(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    mi(i) && (i[ge.focused] && a < ot.FocusedModifier ? (o = s, a = ot.FocusedModifier) : r != null && r.isEqualTo(s) && a < ot.LastFocused ? (o = s, a = ot.LastFocused) : n(s.date) && a < ot.Selected ? (o = s, a = ot.Selected) : i[ge.today] && a < ot.Today && (o = s, a = ot.Today));
  }
  return o || (o = e.find((s) => mi(t(s)))), o;
}
function C1(e, t, n, r, o, a, s) {
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
function Ku(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = C1(e, t, n.date, r, o, a, s), d = !!(a.disabled && gt(l, a.disabled, s)), f = !!(a.hidden && gt(l, a.hidden, s)), m = l, p = new Tu(l, m, s);
  return !d && !f ? p : Ku(e, t, p, r, o, a, s, i + 1);
}
function S1(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = cn(), l = w1(t.days, n, r || (() => !1), s), [d, f] = cn(a ? l : void 0);
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
      const y = Ku(h, g, d, t.navStart, t.navEnd, e, o);
      y && (t.goToDay(y), f(y));
    }
  };
}
function k1(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = go(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (v) => (i == null ? void 0 : i.some((x) => l(x, v))) ?? !1, { min: f, max: m } = e;
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
function M1(e, t, n = 0, r = 0, o = !1, a = mt) {
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
function N1(e, t, n = mt) {
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
function pi(e, t, n = mt) {
  return vt(e, t.from, !1, n) || vt(e, t.to, !1, n) || vt(t, e.from, !1, n) || vt(t, e.to, !1, n);
}
function E1(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? vt(e, i, !1, n) : Bu(i, n) ? i.some((l) => vt(e, l, !1, n)) : ss(i) ? i.from && i.to ? pi(e, { from: i.from, to: i.to }, n) : !1 : Vu(i) ? N1(e, i.dayOfWeek, n) : Lu(i) ? n.isAfter(i.before, i.after) ? pi(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : gt(e.from, i, n) || gt(e.to, i, n) : Fu(i) || $u(i) ? gt(e.from, i, n) || gt(e.to, i, n) : !1))
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
function P1(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = go(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, y = p ? M1(p, d, h, g, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && E1({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), s || l(y), s == null || s(y, p, v, x), y;
    },
    isSelected: (p) => d && vt(d, p, !1, t)
  };
}
function R1(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = go(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, v) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, v), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function D1(e, t) {
  const n = R1(e, t), r = k1(e, t), o = P1(e, t);
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
  var ir;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new De(t.today, t.timeZone)), t.month && (t.month = new De(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new De(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new De(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new De(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new De(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (ir = t.selected) == null ? void 0 : ir.map((se) => new De(se, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new De(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new De(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = So(() => {
    const se = { ...as, ...t.locale };
    return {
      dateLib: new Ye({
        locale: se,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: jw(t.components),
      formatters: Yw(t.formatters),
      labels: { ...i1, ...t.labels },
      locale: se,
      classNames: { ...zu(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: y, onNextClick: b, onPrevClick: w, showWeekNumber: k, styles: C } = t, { formatCaption: M, formatDay: S, formatMonthDropdown: P, formatWeekNumber: F, formatWeekNumberHeader: z, formatWeekdayName: U, formatYearDropdown: B } = r, X = y1(t, a), { days: j, months: Y, navStart: $, navEnd: K, previousMonth: D, nextMonth: W, goToMonth: R } = X, H = _w(j, t, $, K, a), { isSelected: E, select: _, selected: I } = D1(t, a) ?? {}, { blur: L, focused: Z, isFocusTarget: O, moveFocus: q, setFocused: te } = S1(t, X, H, E ?? (() => !1), a), { labelDayButton: re, labelGridcell: ie, labelGrid: ue, labelMonthDropdown: ke, labelNav: _e, labelPrevious: nt, labelNext: Xe, labelWeekday: rt, labelWeekNumber: Ut, labelWeekNumberHeader: We, labelYearDropdown: _t } = o, or = So(() => Kw(a, t.ISOWeek), [a, t.ISOWeek]), yn = d !== void 0 || v !== void 0, Kt = Me(() => {
    D && (R(D), w == null || w(D));
  }, [D, R, w]), qt = Me(() => {
    W && (R(W), b == null || b(W));
  }, [R, W, b]), wn = Me((se, ve) => (oe) => {
    oe.preventDefault(), oe.stopPropagation(), te(se), _ == null || _(se.date, ve, oe), v == null || v(se.date, ve, oe);
  }, [_, v, te]), Cn = Me((se, ve) => (oe) => {
    te(se), x == null || x(se.date, ve, oe);
  }, [x, te]), ar = Me((se, ve) => (oe) => {
    L(), p == null || p(se.date, ve, oe);
  }, [L, p]), Ge = Me((se, ve) => (oe) => {
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
      const [Ie, fe] = pe[oe.key];
      q(Ie, fe);
    }
    h == null || h(se.date, ve, oe);
  }, [q, h, t.dir]), Ue = Me((se, ve) => (oe) => {
    g == null || g(se.date, ve, oe);
  }, [g]), Sn = Me((se, ve) => (oe) => {
    y == null || y(se.date, ve, oe);
  }, [y]), ls = Me((se) => (ve) => {
    const oe = Number(ve.target.value), pe = a.setMonth(a.startOfMonth(se), oe);
    R(pe);
  }, [a, R]), pt = Me((se) => (ve) => {
    const oe = Number(ve.target.value), pe = a.setYear(a.startOfMonth(se), oe);
    R(pe);
  }, [a, R]), { className: sr, style: bo } = So(() => ({
    className: [i[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[ne.Root], ...t.style }
  }), [i, t.className, t.style, C]), Ve = Tw(t), Xt = _n(null);
  u1(Xt, !!t.animate, {
    classNames: i,
    months: Y,
    focused: Z,
    dateLib: a
  });
  const yo = {
    dayPickerProps: t,
    selected: I,
    select: _,
    isSelected: E,
    months: Y,
    nextMonth: W,
    previousMonth: D,
    goToMonth: R,
    getModifiers: H,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return N.createElement(
    Wu.Provider,
    { value: yo },
    N.createElement(
      n.Root,
      { rootRef: t.animate ? Xt : void 0, className: sr, style: bo, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ve },
      N.createElement(
        n.Months,
        { className: i[ne.Months], style: C == null ? void 0 : C[ne.Months] },
        !t.hideNavigation && !f && N.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Kt, onNextClick: qt, previousMonth: D, nextMonth: W }),
        Y.map((se, ve) => N.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[ne.Month],
            style: C == null ? void 0 : C[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ve,
            displayIndex: ve,
            calendarMonth: se
          },
          f === "around" && !t.hideNavigation && ve === 0 && N.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[ne.PreviousMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": nt(D), onClick: Kt, "data-animated-button": t.animate ? "true" : void 0 },
            N.createElement(n.Chevron, { disabled: D ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          N.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[ne.MonthCaption], style: C == null ? void 0 : C[ne.MonthCaption], calendarMonth: se, displayIndex: ve }, l != null && l.startsWith("dropdown") ? N.createElement(
            n.DropdownNav,
            { className: i[ne.Dropdowns], style: C == null ? void 0 : C[ne.Dropdowns] },
            (() => {
              const oe = l === "dropdown" || l === "dropdown-months" ? N.createElement(n.MonthsDropdown, { key: "month", className: i[ne.MonthsDropdown], "aria-label": ke(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: ls(se.date), options: Gw(se.date, $, K, r, a), style: C == null ? void 0 : C[ne.Dropdown], value: a.getMonth(se.date) }) : N.createElement("span", { key: "month" }, P(se.date, a)), pe = l === "dropdown" || l === "dropdown-years" ? N.createElement(n.YearsDropdown, { key: "year", className: i[ne.YearsDropdown], "aria-label": _t(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: pt(se.date), options: qw($, K, r, a, !!t.reverseYears), style: C == null ? void 0 : C[ne.Dropdown], value: a.getYear(se.date) }) : N.createElement("span", { key: "year" }, B(se.date, a));
              return a.getMonthYearOrder() === "year-first" ? [pe, oe] : [oe, pe];
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
            } }, M(se.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            N.createElement(n.CaptionLabel, { className: i[ne.CaptionLabel], role: "status", "aria-live": "polite" }, M(se.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && ve === m - 1 && N.createElement(
            n.NextMonthButton,
            { type: "button", className: i[ne.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": Xe(W), onClick: qt, "data-animated-button": t.animate ? "true" : void 0 },
            N.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ve === m - 1 && f === "after" && !t.hideNavigation && N.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Kt, onNextClick: qt, previousMonth: D, nextMonth: W }),
          N.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(se.date, a.options, a) || void 0, className: i[ne.MonthGrid], style: C == null ? void 0 : C[ne.MonthGrid] },
            !t.hideWeekdays && N.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[ne.Weekdays], style: C == null ? void 0 : C[ne.Weekdays] },
              k && N.createElement(n.WeekNumberHeader, { "aria-label": We(a.options), className: i[ne.WeekNumberHeader], style: C == null ? void 0 : C[ne.WeekNumberHeader], scope: "col" }, z()),
              or.map((oe) => N.createElement(n.Weekday, { "aria-label": rt(oe, a.options, a), className: i[ne.Weekday], key: String(oe), style: C == null ? void 0 : C[ne.Weekday], scope: "col" }, U(oe, a.options, a)))
            ),
            N.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[ne.Weeks], style: C == null ? void 0 : C[ne.Weeks] }, se.weeks.map((oe) => N.createElement(
              n.Week,
              { className: i[ne.Week], key: oe.weekNumber, style: C == null ? void 0 : C[ne.Week], week: oe },
              k && // biome-ignore lint/a11y/useSemanticElements: react component
              N.createElement(n.WeekNumber, { week: oe, style: C == null ? void 0 : C[ne.WeekNumber], "aria-label": Ut(oe.weekNumber, {
                locale: s
              }), className: i[ne.WeekNumber], scope: "row", role: "rowheader" }, F(oe.weekNumber, a)),
              oe.days.map((pe) => {
                const { date: Ie } = pe, fe = H(pe);
                if (fe[ge.focused] = !fe.hidden && !!(Z != null && Z.isEqualTo(pe)), fe[Qe.selected] = (E == null ? void 0 : E(Ie)) || fe.selected, ss(I)) {
                  const { from: It, to: T } = I;
                  fe[Qe.range_start] = !!(It && T && a.isSameDay(Ie, It)), fe[Qe.range_end] = !!(It && T && a.isSameDay(Ie, T)), fe[Qe.range_middle] = vt(I, Ie, !0, a);
                }
                const ds = Uw(fe, C, t.modifiersStyles), kn = Iw(fe, i, t.modifiersClassNames), us = !yn && !fe.hidden ? ie(Ie, fe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  N.createElement(n.Day, { key: `${a.format(Ie, "yyyy-MM-dd")}_${a.format(pe.displayMonth, "yyyy-MM")}`, day: pe, modifiers: fe, className: kn.join(" "), style: ds, role: "gridcell", "aria-selected": fe.selected || void 0, "aria-label": us, "data-day": a.format(Ie, "yyyy-MM-dd"), "data-month": pe.outside ? a.format(Ie, "yyyy-MM") : void 0, "data-selected": fe.selected || void 0, "data-disabled": fe.disabled || void 0, "data-hidden": fe.hidden || void 0, "data-outside": pe.outside || void 0, "data-focused": fe.focused || void 0, "data-today": fe.today || void 0 }, !fe.hidden && yn ? N.createElement(n.DayButton, { className: i[ne.DayButton], style: C == null ? void 0 : C[ne.DayButton], type: "button", day: pe, modifiers: fe, disabled: fe.disabled || void 0, tabIndex: O(pe) ? 0 : -1, "aria-label": re(Ie, fe, a.options, a), onClick: wn(pe, fe), onBlur: ar(pe, fe), onFocus: Cn(pe, fe), onKeyDown: Ge(pe, fe), onMouseEnter: Ue(pe, fe), onMouseLeave: Sn(pe, fe) }, S(Ie, a.options, a)) : !fe.hidden && S(pe.date, a.options, a))
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
const O1 = {
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
}, _1 = (e, t, n) => {
  n = n || {};
  let r;
  const o = O1[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, I1 = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, j1 = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, T1 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, W1 = {
  date: sn({
    formats: I1,
    defaultWidth: "full"
  }),
  time: sn({
    formats: j1,
    defaultWidth: "full"
  }),
  dateTime: sn({
    formats: T1,
    defaultWidth: "full"
  })
}, L1 = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, F1 = (e, t, n, r) => L1[e], $1 = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, V1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, B1 = {
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
}, z1 = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
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
}, Y1 = {
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
}, G1 = (e, t) => {
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
}, U1 = {
  ordinalNumber: G1,
  era: st({
    values: $1,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: V1,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: st({
    values: B1,
    defaultWidth: "wide"
  }),
  day: st({
    values: z1,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: H1,
    defaultWidth: "wide",
    formattingValues: Y1,
    defaultFormattingWidth: "wide"
  })
}, K1 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, q1 = /\d+/i, X1 = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, Z1 = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, Q1 = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, J1 = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, e2 = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, t2 = {
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
}, n2 = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, r2 = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, o2 = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, a2 = {
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
}, s2 = {
  ordinalNumber: Du({
    matchPattern: K1,
    parsePattern: q1,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: it({
    matchPatterns: X1,
    defaultMatchWidth: "wide",
    parsePatterns: Z1,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: Q1,
    defaultMatchWidth: "wide",
    parsePatterns: J1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: e2,
    defaultMatchWidth: "wide",
    parsePatterns: t2,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: n2,
    defaultMatchWidth: "wide",
    parsePatterns: r2,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: o2,
    defaultMatchWidth: "any",
    parsePatterns: a2,
    defaultParseWidth: "any"
  })
}, hi = {
  code: "ja",
  formatDistance: _1,
  formatLong: W1,
  formatRelative: F1,
  localize: U1,
  match: s2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, i2 = {
  ...hi,
  localize: {
    ...hi.localize,
    day: (e) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e] || ""
  }
}, c2 = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, wr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, qu = N.forwardRef(
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
      () => wr(n || null)
    ), g = e !== void 0, y = g ? wr(e) : x, b = N.useMemo(
      () => wr(r || null),
      [r]
    ), w = N.useMemo(
      () => wr(o || null),
      [o]
    ), k = N.useMemo(() => !b || !w ? !0 : b <= w, [b, w]), C = (M) => {
      const S = M || null;
      g || h(S), t == null || t(S);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: A(c2(m), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          A1,
          {
            animate: d,
            mode: "single",
            selected: y || void 0,
            onSelect: C,
            locale: i2,
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
              const M = zu(), S = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
qu.displayName = "Calendar";
const vi = ae(
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
), l2 = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Xu = N.forwardRef(
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
    const d = r ? $r : "a", m = l2[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: A(vi({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: A(vi({ intent: t, size: n }), e),
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
Xu.displayName = "TextLink";
const d2 = ae(
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
), u2 = ae("shrink-0", {
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
}), f2 = ae("text-body-primary font-bold text-md"), m2 = ae(
  "text-body-primary font-normal leading-6 text-md"
), p2 = {
  info: Nr,
  success: iu,
  warning: Nr,
  alert: Nr
}, h2 = N.forwardRef(
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
    const f = i || p2[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: A(d2({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: A(u2({ intent: t, size: n }), "top-0.5 relative"), children: je(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 gap-xxs flex flex-1 flex-col", children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: A(f2()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                Xu,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: A(m2()), children: a || o })
          ] })
        ]
      }
    );
  }
);
h2.displayName = "Callout";
const v2 = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), g2 = ae(
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
), Er = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: A(v2({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      ac,
      {
        id: l,
        className: A(g2({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          ic,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(Ox, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(ru, { style: { strokeWidth: 3 } })
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
Er.displayName = "Checkbox";
const x2 = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
x2.displayName = "CheckboxGroup";
const b2 = ae(
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
), y2 = ae(
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
), zo = ae(
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
), Zu = N.forwardRef(
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
    return /* @__PURE__ */ c.jsxs("div", { className: A(b2({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: zo({ position: "prefix", interactive: !1 }),
          children: je(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: y2({ hasPrefix: d, hasTrailing: f }),
          ...i
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: zo({
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
          className: zo({
            position: "trailing",
            interactive: !1
          }),
          children: je(n, { size: o })
        }
      ) })
    ] });
  }
);
Zu.displayName = "Input";
const w2 = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Cr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, C2 = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), S2 = N.forwardRef(
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
    formatDate: f = C2,
    className: m,
    contentClassName: p,
    defaultOpen: v = !1,
    open: x,
    onOpenChange: h,
    side: g = "bottom"
  }, y) => {
    const [b, w] = N.useState(
      () => Cr(n || null)
    ), [k, C] = N.useState(v), M = e !== void 0, S = M ? Cr(e) : b, P = x !== void 0 ? x : k, F = N.useMemo(
      () => Cr(r || null),
      [r]
    ), z = N.useMemo(
      () => Cr(o || null),
      [o]
    ), U = N.useMemo(() => !F || !z ? !0 : F <= z, [F, z]), B = ($) => {
      const K = $ || null;
      M || w(K), t == null || t(K), K && (x === void 0 && C(!1), h == null || h(!1));
    }, X = ($) => {
      x === void 0 && C($), h == null || h($);
    }, j = ($) => {
      switch ($.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          $.preventDefault(), P || X(!0);
          break;
        case "Escape":
          P && ($.preventDefault(), X(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(Nl, { open: P, onOpenChange: X, children: [
      /* @__PURE__ */ c.jsx(El, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Zu,
        {
          ref: y,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: S ? f(S) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || gx,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && X(!P),
          className: A(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            P && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: j,
          onClick: () => !a && X(!P),
          "aria-expanded": P,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(Pl, { children: /* @__PURE__ */ c.jsx(
        Ua,
        {
          className: A(w2, p),
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
            qu,
            {
              value: S,
              onChange: B,
              ...F && { minDate: F },
              ...z && { maxDate: z },
              disabled: !U,
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
S2.displayName = "DatePicker";
const k2 = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], fS = ({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  busy: o,
  actions: a = k2,
  cancellable: s = !0,
  cancelButtonLabel: i = "キャンセル"
}) => {
  const [l, d] = N.useState(-1), m = o !== void 0 ? o : l !== -1, p = async (x) => {
    const h = a.indexOf(x);
    x.onAction && (d(h), await x.onAction(t)), e && t(x.value), d(-1);
  }, v = () => {
    t();
  };
  return /* @__PURE__ */ c.jsxs(ka, { open: e, onOpenChange: t, children: [
    /* @__PURE__ */ c.jsx(
      Ma,
      {
        className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
          w-full`
      }
    ),
    /* @__PURE__ */ c.jsxs(
      Na,
      {
        onPointerDownOutside: (x) => {
          (!s || m) && x.preventDefault();
        },
        className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
          min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
          -translate-x-1/2 -translate-y-1/2 transform flex-col`,
        children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `px-xl py-lg flex flex-shrink-0 items-center
            justify-between`,
              children: n && /* @__PURE__ */ c.jsx(
                nc,
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
            pb-xxl text-body-primary min-h-40 flex-1 overflow-y-auto border-y-1`,
              children: r
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex flex-shrink-0 justify-between", children: [
            s && /* @__PURE__ */ c.jsx(Ea, { asChild: !0, children: /* @__PURE__ */ c.jsx(
              Le,
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
                Le,
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
  ] });
}, Qu = xa(void 0), is = () => {
  const e = ba(Qu);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, M2 = ({
  isOpen: e,
  onClose: t,
  children: n,
  initialStep: r = 0,
  onStepChange: o
}) => {
  const [a, s] = cn(r), i = N.Children.toArray(n).filter(
    (x) => N.isValidElement(x) && x.type === Ju
  ), l = i.length, d = (x) => {
    x >= 0 && x < l && (s(x), o == null || o(x));
  }, p = {
    currentStep: a,
    totalSteps: l,
    goToStep: d,
    nextStep: () => d(a + 1),
    prevStep: () => d(a - 1),
    isFirstStep: a === 0,
    isLastStep: a === l - 1
  }, v = (x) => {
    s(r), t(x);
  };
  return /* @__PURE__ */ c.jsx(Qu.Provider, { value: p, children: /* @__PURE__ */ c.jsxs(ka, { open: e, onOpenChange: v, children: [
    /* @__PURE__ */ c.jsx(
      Ma,
      {
        className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`
      }
    ),
    /* @__PURE__ */ c.jsx(
      Na,
      {
        className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
            min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
            -translate-y-1/2 transform`,
        children: i[a]
      }
    )
  ] }) });
}, Ju = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), N2 = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  nc,
  {
    className: "text-xxl text-body-primary font-bold h-4.5 flex items-center",
    children: e
  }
) }), E2 = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl py-lg
        text-body-primary min-h-40 flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), P2 = ({
  children: e,
  showNavigation: t = !0,
  showCancel: n = !0,
  showBack: r,
  cancelLabel: o = "キャンセル",
  backLabel: a = "戻る",
  nextLabel: s = "次へ",
  backButtonProps: i,
  onCancel: l,
  onNext: d,
  onBack: f
}) => {
  const { isFirstStep: m, isLastStep: p, nextStep: v, prevStep: x } = is(), h = async () => {
    d && await d() === !1 || p || v();
  }, g = async () => {
    f && await f() === !1 || m || x();
  }, y = r !== void 0 ? r : t && !m;
  return /* @__PURE__ */ c.jsxs("div", { className: "px-md py-lg flex justify-between", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex", children: [
      n && /* @__PURE__ */ c.jsx(Ea, { asChild: !0, children: /* @__PURE__ */ c.jsx(Le, { intent: "tertiary", onClick: l, children: o }) }),
      y && /* @__PURE__ */ c.jsx(Le, { intent: "secondary", onClick: g, ...i, children: a })
    ] }),
    e ? /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e }) : t && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: /* @__PURE__ */ c.jsx(Le, { intent: "primary", onClick: h, children: p ? "完了" : s }) })
  ] });
}, R2 = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = is(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(Ea, { asChild: !0, children: /* @__PURE__ */ c.jsx(Le, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Le, { ...o, onClick: i, children: e });
}, mS = {
  Root: M2,
  Step: Ju,
  Header: N2,
  Body: E2,
  Footer: P2,
  Action: R2,
  useMultiStepDialog: is
}, D2 = ae(
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
), O2 = N.forwardRef(
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
      className: A(A2({ intent: r }), a),
      ...s
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(Qv, { ...l, children: [
      je(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
O2.displayName = "DropdownItem";
const _2 = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Jv,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
_2.displayName = "DropdownSeparator";
const I2 = N.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Zv,
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
I2.displayName = "DropdownLabel";
const j2 = N.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(qv, { children: /* @__PURE__ */ c.jsx(
  Xv,
  {
    ref: o,
    className: A(D2({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
j2.displayName = "DropdownContent";
const T2 = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(Uv, { ...a, children: e });
};
T2.displayName = "Dropdown";
const W2 = N.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  Kv,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
W2.displayName = "DropdownTrigger";
const pS = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col", children: [
    e && /* @__PURE__ */ c.jsxs(
      "label",
      {
        htmlFor: r,
        className: A(
          `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
          n
        ),
        children: [
          /* @__PURE__ */ c.jsx("span", { children: e }),
          s && /* @__PURE__ */ c.jsx("span", { className: "text-body-secondary", children: "(任意)" })
        ]
      }
    ),
    i,
    o && /* @__PURE__ */ c.jsx("div", { className: "pt-xxs", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert text-sm font-normal leading-[1.5]", children: o }) }),
    a && /* @__PURE__ */ c.jsx("div", { className: "pt-xxs", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm font-normal leading-[1.5]", children: a }) })
  ] });
};
var be = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(be || {}), ye = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(ye || {});
const L2 = {
  0: [ye.AccentGrayPale, be.AccentGrayStrong],
  1: [ye.AccentSunPale, be.AccentSunStrong],
  2: [ye.AccentMagentaPale, be.AccentMagentaStrong],
  3: [ye.AccentPurplePale, be.AccentPurpleStrong],
  4: [ye.AccentVioletPale, be.AccentVioletStrong],
  5: [ye.AccentSeaPale, be.AccentSeaStrong],
  6: [ye.AccentSkyPale, be.AccentSkyStrong],
  7: [ye.AccentCyanPale, be.AccentCyanStrong],
  8: [ye.AccentPeacockPale, be.AccentPeacockStrong],
  9: [ye.AccentGreenPale, be.AccentGreenStrong],
  10: [ye.AccentBambooPale, be.AccentBambooStrong],
  11: [ye.AccentLimePale, be.AccentLimeStrong],
  12: [ye.AccentGrassPale, be.AccentGrassStrong],
  13: [ye.AccentLemonPale, be.AccentLemonStrong],
  14: [ye.AccentYellowPale, be.AccentYellowStrong],
  15: [ye.AccentOrangePale, be.AccentOrangeStrong],
  16: [ye.AccentWoodPale, be.AccentWoodStrong],
  17: [
    ye.AccentCharcoalPale,
    be.AccentCharchoalStrong
  ],
  18: [ye.AccentGrayPale, be.AccentGrayStrong]
}, F2 = ae(
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
), gi = ({
  colorCode: e,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: a = "md",
  style: s,
  selected: i = !1
}) => {
  const [l, d] = typeof e == "number" ? L2[e] : [void 0, void 0];
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: A(
        F2({ size: a, selected: i, interactive: !!o }),
        n
      ),
      style: {
        backgroundColor: `var(${l})`,
        color: d ? `var(${d})` : void 0,
        ...s
      },
      onClick: o,
      role: o ? "button" : void 0,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: t }),
        !!r && /* @__PURE__ */ c.jsx(
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
}, $2 = Nl, V2 = El, ef = N.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Pl, { children: /* @__PURE__ */ c.jsx(
  Ua,
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
ef.displayName = Ua.displayName;
var xi = 1, B2 = 0.9, z2 = 0.8, H2 = 0.17, Ho = 0.1, Yo = 0.999, Y2 = 0.9999, G2 = 0.99, U2 = /[\\\/_+.#"@\[\(\{&]/, K2 = /[\\\/_+.#"@\[\(\{&]/g, q2 = /[\s-]/, tf = /[\s-]/g;
function ha(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? xi : G2;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, v, x; d >= 0; ) m = ha(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= xi : U2.test(e.charAt(d - 1)) ? (m *= z2, v = e.slice(o, d - 1).match(K2), v && o > 0 && (m *= Math.pow(Yo, v.length))) : q2.test(e.charAt(d - 1)) ? (m *= B2, x = e.slice(o, d - 1).match(tf), x && o > 0 && (m *= Math.pow(Yo, x.length))) : (m *= H2, o > 0 && (m *= Math.pow(Yo, d - o))), e.charAt(d) !== t.charAt(a) && (m *= Y2)), (m < Ho && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = ha(e, t, n, r, d + 1, a + 2, s), p * Ho > m && (m = p * Ho)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function bi(e) {
  return e.toLowerCase().replace(tf, " ");
}
function X2(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ha(e, t, bi(e), bi(t), 0, 0, {});
}
var Pn = '[cmdk-group=""]', Go = '[cmdk-group-items=""]', Z2 = '[cmdk-group-heading=""]', nf = '[cmdk-item=""]', yi = `${nf}:not([aria-disabled="true"])`, va = "cmdk-item-select", nn = "data-value", Q2 = (e, t, n) => X2(e, t, n), rf = u.createContext(void 0), nr = () => u.useContext(rf), of = u.createContext(void 0), cs = () => u.useContext(of), af = u.createContext(void 0), sf = u.forwardRef((e, t) => {
  let n = rn(() => {
    var E, _;
    return { search: "", value: (_ = (E = e.value) != null ? E : e.defaultValue) != null ? _ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = rn(() => /* @__PURE__ */ new Set()), o = rn(() => /* @__PURE__ */ new Map()), a = rn(() => /* @__PURE__ */ new Map()), s = rn(() => /* @__PURE__ */ new Set()), i = cf(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...y } = e, b = Ne(), w = Ne(), k = Ne(), C = u.useRef(null), M = lC();
  Bt(() => {
    if (f !== void 0) {
      let E = f.trim();
      n.current.value = E, S.emit();
    }
  }, [f]), Bt(() => {
    M(6, X);
  }, []);
  let S = u.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, _, I) => {
    var L, Z, O, q;
    if (!Object.is(n.current[E], _)) {
      if (n.current[E] = _, E === "search") B(), z(), M(1, U);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let te = document.getElementById(k);
          te ? te.focus() : (L = document.getElementById(b)) == null || L.focus();
        }
        if (M(7, () => {
          var te;
          n.current.selectedItemId = (te = j()) == null ? void 0 : te.id, S.emit();
        }), I || M(5, X), ((Z = i.current) == null ? void 0 : Z.value) !== void 0) {
          let te = _ ?? "";
          (q = (O = i.current).onValueChange) == null || q.call(O, te);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), P = u.useMemo(() => ({ value: (E, _, I) => {
    var L;
    _ !== ((L = a.current.get(E)) == null ? void 0 : L.value) && (a.current.set(E, { value: _, keywords: I }), n.current.filtered.items.set(E, F(_, I)), M(2, () => {
      z(), S.emit();
    }));
  }, item: (E, _) => (r.current.add(E), _ && (o.current.has(_) ? o.current.get(_).add(E) : o.current.set(_, /* @__PURE__ */ new Set([E]))), M(3, () => {
    B(), z(), n.current.value || U(), S.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let I = j();
    M(4, () => {
      B(), (I == null ? void 0 : I.getAttribute("id")) === E && U(), S.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: k, labelId: w, listInnerRef: C }), []);
  function F(E, _) {
    var I, L;
    let Z = (L = (I = i.current) == null ? void 0 : I.filter) != null ? L : Q2;
    return E ? Z(E, n.current.search, _) : 0;
  }
  function z() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, _ = [];
    n.current.filtered.groups.forEach((L) => {
      let Z = o.current.get(L), O = 0;
      Z.forEach((q) => {
        let te = E.get(q);
        O = Math.max(te, O);
      }), _.push([L, O]);
    });
    let I = C.current;
    Y().sort((L, Z) => {
      var O, q;
      let te = L.getAttribute("id"), re = Z.getAttribute("id");
      return ((O = E.get(re)) != null ? O : 0) - ((q = E.get(te)) != null ? q : 0);
    }).forEach((L) => {
      let Z = L.closest(Go);
      Z ? Z.appendChild(L.parentElement === Z ? L : L.closest(`${Go} > *`)) : I.appendChild(L.parentElement === I ? L : L.closest(`${Go} > *`));
    }), _.sort((L, Z) => Z[1] - L[1]).forEach((L) => {
      var Z;
      let O = (Z = C.current) == null ? void 0 : Z.querySelector(`${Pn}[${nn}="${encodeURIComponent(L[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function U() {
    let E = Y().find((I) => I.getAttribute("aria-disabled") !== "true"), _ = E == null ? void 0 : E.getAttribute(nn);
    S.setState("value", _ || void 0);
  }
  function B() {
    var E, _, I, L;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let O of r.current) {
      let q = (_ = (E = a.current.get(O)) == null ? void 0 : E.value) != null ? _ : "", te = (L = (I = a.current.get(O)) == null ? void 0 : I.keywords) != null ? L : [], re = F(q, te);
      n.current.filtered.items.set(O, re), re > 0 && Z++;
    }
    for (let [O, q] of o.current) for (let te of q) if (n.current.filtered.items.get(te) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = Z;
  }
  function X() {
    var E, _, I;
    let L = j();
    L && (((E = L.parentElement) == null ? void 0 : E.firstChild) === L && ((I = (_ = L.closest(Pn)) == null ? void 0 : _.querySelector(Z2)) == null || I.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function j() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${nf}[aria-selected="true"]`);
  }
  function Y() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(yi)) || []);
  }
  function $(E) {
    let _ = Y()[E];
    _ && S.setState("value", _.getAttribute(nn));
  }
  function K(E) {
    var _;
    let I = j(), L = Y(), Z = L.findIndex((q) => q === I), O = L[Z + E];
    (_ = i.current) != null && _.loop && (O = Z + E < 0 ? L[L.length - 1] : Z + E === L.length ? L[0] : L[Z + E]), O && S.setState("value", O.getAttribute(nn));
  }
  function D(E) {
    let _ = j(), I = _ == null ? void 0 : _.closest(Pn), L;
    for (; I && !L; ) I = E > 0 ? iC(I, Pn) : cC(I, Pn), L = I == null ? void 0 : I.querySelector(yi);
    L ? S.setState("value", L.getAttribute(nn)) : K(E);
  }
  let W = () => $(Y().length - 1), R = (E) => {
    E.preventDefault(), E.metaKey ? W() : E.altKey ? D(1) : K(1);
  }, H = (E) => {
    E.preventDefault(), E.metaKey ? $(0) : E.altKey ? D(-1) : K(-1);
  };
  return u.createElement(Q.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (E) => {
    var _;
    (_ = y.onKeyDown) == null || _.call(y, E);
    let I = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || I)) switch (E.key) {
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
        E.preventDefault(), $(0);
        break;
      }
      case "End": {
        E.preventDefault(), W();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let L = j();
        if (L) {
          let Z = new Event(va);
          L.dispatchEvent(Z);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: uC }, l), xo(e, (E) => u.createElement(of.Provider, { value: S }, u.createElement(rf.Provider, { value: P }, E))));
}), J2 = u.forwardRef((e, t) => {
  var n, r;
  let o = Ne(), a = u.useRef(null), s = u.useContext(af), i = nr(), l = cf(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Bt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = lf(o, a, [e.value, e.children, a], e.keywords), m = cs(), p = Pt((M) => M.value && M.value === f.current), v = Pt((M) => d || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let M = a.current;
    if (!(!M || e.disabled)) return M.addEventListener(va, x), () => M.removeEventListener(va, x);
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
  return u.createElement(Q.div, { ref: xt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), eC = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ne(), i = u.useRef(null), l = u.useRef(null), d = Ne(), f = nr(), m = Pt((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Bt(() => f.group(s), []), lf(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(Q.div, { ref: xt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), xo(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(af.Provider, { value: p }, v))));
}), tC = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Pt((s) => !s.search);
  return !n && !a ? null : u.createElement(Q.div, { ref: xt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), nC = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = cs(), s = Pt((d) => d.search), i = Pt((d) => d.selectedItemId), l = nr();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), rC = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = Pt((d) => d.selectedItemId), l = nr();
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
  }, []), u.createElement(Q.div, { ref: xt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, xo(e, (d) => u.createElement("div", { ref: xt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), oC = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(ka, { open: n, onOpenChange: r }, u.createElement(rp, { container: s }, u.createElement(Ma, { "cmdk-overlay": "", className: o }), u.createElement(Na, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(sf, { ref: t, ...i }))));
}), aC = u.forwardRef((e, t) => Pt((n) => n.filtered.count === 0) ? u.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), sC = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, xo(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), $e = Object.assign(sf, { List: rC, Item: J2, Input: nC, Group: eC, Separator: tC, Dialog: oC, Empty: aC, Loading: sC });
function iC(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function cC(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function cf(e) {
  let t = u.useRef(e);
  return Bt(() => {
    t.current = e;
  }), t;
}
var Bt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function rn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Pt(e) {
  let t = cs(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function lf(e, t, n, r = []) {
  let o = u.useRef(), a = nr();
  return Bt(() => {
    var s;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(nn, i), o.current = i;
  }), o;
}
var lC = () => {
  let [e, t] = u.useState(), n = rn(() => /* @__PURE__ */ new Map());
  return Bt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function dC(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function xo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(dC(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var uC = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const df = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e,
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
df.displayName = $e.displayName;
const uf = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(su, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            $e.Input,
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
uf.displayName = $e.Input.displayName;
const ff = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
ff.displayName = $e.List.displayName;
const mf = N.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  $e.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
mf.displayName = $e.Empty.displayName;
const Pr = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Group,
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
Pr.displayName = $e.Group.displayName;
const pf = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
pf.displayName = $e.Separator.displayName;
const Rr = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Item,
  {
    ref: n,
    className: A(
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
Rr.displayName = $e.Item.displayName;
const wi = ae("ease-in-out transition-all duration-300", {
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
}), fC = N.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: r = [],
    placeholder: o = "選択してください",
    placeholderAriaLabel: a = "選択してください",
    triggerDescription: s = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
    noSelectionLabel: i = "オプションが選択されていません",
    searchHelpText: l = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
    searchAriaLabel: d = "利用可能なオプションを検索",
    optionsListAriaLabel: f = "利用可能なオプション",
    selectAllLabel: m = "すべて選択",
    selectAllCountLabel: p = "オプション",
    clearAllLabel: v = "すべてクリア",
    applyLabel: x = "適用",
    moreSelectedLabel: h = "その他",
    searchPlaceholder: g = "オプションを検索...",
    animation: y = 0,
    animationConfig: b,
    maxCount: w = 10,
    modalPopover: k = !1,
    className: C,
    hideSelectAll: M = !1,
    searchable: S = !0,
    emptyIndicator: P = "結果が見つかりません。",
    autoSize: F = !1,
    singleLine: z = !1,
    popoverClassName: U,
    disabled: B = !1,
    invalid: X = !1,
    responsive: j,
    minWidth: Y,
    maxWidth: $,
    deduplicateOptions: K = !1,
    resetOnDefaultValueChange: D = !0,
    closeOnSelect: W = !1,
    filterByValueAndLabel: R = !1,
    renderOption: H,
    ...E
  }, _) => {
    const [I, L] = N.useState(r), [Z, O] = N.useState(!1), [q, te] = N.useState(!1), [re, ie] = N.useState(""), [ue, ke] = N.useState(""), [_e, nt] = N.useState(""), Xe = N.useRef(I.length), rt = N.useRef(Z), Ut = N.useRef(re), We = N.useCallback(
      (T, G = "polite") => {
        G === "assertive" ? (nt(T), setTimeout(() => nt(""), 100)) : (ke(T), setTimeout(() => ke(""), 100));
      },
      []
    ), _t = N.useId(), or = `${_t}-listbox`, yn = `${_t}-description`, Kt = `${_t}-count`, qt = N.useRef(r), wn = N.useCallback(
      (T) => {
        const G = T[0];
        return !!(G && typeof G == "object" && "heading" in G);
      },
      []
    ), Cn = N.useCallback(
      (T, G) => {
        if (T.length !== G.length) return !1;
        const de = [...T].sort(), xe = [...G].sort();
        return de.every((Ee, Pe) => Ee === xe[Pe]);
      },
      []
    ), ar = N.useCallback(() => {
      L(r), O(!1), ie(""), t(r);
    }, [r, t]), Ge = N.useRef(null);
    N.useImperativeHandle(
      _,
      () => ({
        reset: ar,
        getSelectedValues: () => I,
        setSelectedValues: (T) => {
          L(T), t(T);
        },
        clear: () => {
          L([]), t([]);
        },
        focus: () => {
          if (Ge.current) {
            Ge.current.focus();
            const T = Ge.current.style.outline, G = Ge.current.style.outlineOffset;
            Ge.current.style.outline = "2px solid hsl(var(--ring))", Ge.current.style.outlineOffset = "2px", setTimeout(() => {
              Ge.current && (Ge.current.style.outline = T, Ge.current.style.outlineOffset = G);
            }, 1e3);
          }
        }
      }),
      [ar, I, t]
    );
    const [Ue, Sn] = N.useState("desktop");
    N.useEffect(() => {
      if (typeof window > "u") return;
      const T = () => {
        const G = window.innerWidth;
        G < 640 ? Sn("mobile") : G < 1024 ? Sn("tablet") : Sn("desktop");
      };
      return T(), window.addEventListener("resize", T), () => {
        typeof window < "u" && window.removeEventListener("resize", T);
      };
    }, []);
    const pt = (() => {
      if (!j)
        return {
          maxCount: w,
          hideIcons: !1,
          compactMode: !1
        };
      if (j === !0) {
        const de = {
          mobile: { maxCount: 2, hideIcons: !1, compactMode: !0 },
          tablet: { maxCount: 4, hideIcons: !1, compactMode: !1 },
          desktop: { maxCount: 6, hideIcons: !1, compactMode: !1 }
        }[Ue];
        return {
          maxCount: (de == null ? void 0 : de.maxCount) ?? w,
          hideIcons: (de == null ? void 0 : de.hideIcons) ?? !1,
          compactMode: (de == null ? void 0 : de.compactMode) ?? !1
        };
      }
      const T = j[Ue];
      return {
        maxCount: (T == null ? void 0 : T.maxCount) ?? w,
        hideIcons: (T == null ? void 0 : T.hideIcons) ?? !1,
        compactMode: (T == null ? void 0 : T.compactMode) ?? !1
      };
    })(), sr = () => {
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
    }, bo = () => {
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
    }, Ve = N.useCallback(() => {
      if (e.length === 0) return [];
      let T;
      wn(e) ? T = e.flatMap((Ee) => Ee.options) : T = e;
      const G = /* @__PURE__ */ new Set(), de = [], xe = [];
      return T.forEach((Ee) => {
        G.has(Ee.value) ? (de.push(Ee.value), K || xe.push(Ee)) : (G.add(Ee.value), xe.push(Ee));
      }), process.env.NODE_ENV === "development" && de.length > 0 && console.warn(
        `MultiSelect: Duplicate option values ${K ? "automatically removed" : "detected"}: ${de.join(
          ", "
        )}. ${K ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
      ), K ? xe : T;
    }, [e, K, wn]), Xt = N.useCallback(
      (T) => {
        const G = Ve().find((de) => de.value === T);
        return !G && process.env.NODE_ENV === "development" && console.warn(
          `MultiSelect: Option with value "${T}" not found in options list`
        ), G;
      },
      [Ve]
    ), yo = N.useCallback(
      (T, G) => {
        const [de, xe] = T.split(":");
        if (!R)
          return xe && xe.toLowerCase().includes(G.toLowerCase()) ? 1 : 0;
        const Ee = G.toLowerCase();
        return xe && xe.toLowerCase().includes(Ee) || de && de.toLowerCase().includes(Ee) ? 1 : 0;
      },
      [R]
    ), ir = (T) => {
      if (T.key === "Enter")
        O(!0);
      else if (T.key === "Backspace" && !T.currentTarget.value) {
        const G = [...I];
        G.pop(), L(G), t(G);
      }
    }, se = (T) => {
      if (B) return;
      const G = Xt(T);
      if (G != null && G.disabled) return;
      const de = I.includes(T) ? I.filter((xe) => xe !== T) : [...I, T];
      L(de), t(de), W && O(!1);
    }, ve = () => {
      B || (L([]), t([]));
    }, oe = () => {
      B || O((T) => !T);
    }, pe = () => {
      if (B) return;
      const T = I.slice(
        0,
        pt.maxCount
      );
      L(T), t(T);
    }, Ie = () => {
      if (B) return;
      const T = Ve().filter((G) => !G.disabled);
      if (I.length === T.length)
        ve();
      else {
        const G = T.map((de) => de.value);
        L(G), t(G);
      }
      W && O(!1);
    }, fe = (T) => {
      if (!T.icon)
        return null;
      const G = T.style;
      return /* @__PURE__ */ c.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: "mr-xs text-body-secondary flex items-center",
          style: G != null && G.iconColor ? { color: G.iconColor } : void 0,
          children: je(T.icon, {
            className: "h-4 w-4"
          })
        }
      );
    }, kn = H || ((T) => {
      const { option: G, location: de, onRemove: xe, disabled: Ee } = T;
      if (de === "badge") {
        const Pe = G.style, wo = {
          animationDuration: `${y}s`,
          ...(Pe == null ? void 0 : Pe.badgeColor) && {
            backgroundColor: Pe.badgeColor
          },
          ...(Pe == null ? void 0 : Pe.gradient) && {
            background: Pe.gradient,
            color: "white"
          }
        };
        return /* @__PURE__ */ c.jsx(
          gi,
          {
            className: A(
              sr(),
              wi({ variant: n }),
              (Pe == null ? void 0 : Pe.gradient) && "border-transparent",
              pt.compactMode && "text-xs px-1.5 py-0.5",
              Ue === "mobile" && "max-w-[120px] truncate",
              z && "flex-shrink-0 whitespace-nowrap",
              "[&>svg]:pointer-events-auto",
              Ee && "cursor-not-allowed"
            ),
            style: wo,
            ...!Ee && { onRemove: xe },
            children: G.label
          }
        );
      }
      return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        fe(G),
        /* @__PURE__ */ c.jsx("span", { children: G.label })
      ] });
    });
    N.useEffect(() => {
      if (!D) return;
      const T = qt.current;
      Cn(T, r) || (Cn(I, r) || L(r), qt.current = [...r]);
    }, [r, I, Cn, D]);
    const It = {
      minWidth: Y || (Ue === "mobile" ? "0px" : "200px"),
      maxWidth: $ || "100%",
      width: F ? "auto" : "100%"
    };
    return N.useEffect(() => {
      Z || ie("");
    }, [Z]), N.useEffect(() => {
      const T = I.length, G = Ve(), de = G.filter((xe) => !xe.disabled).length;
      if (T !== Xe.current) {
        const xe = T - Xe.current;
        if (xe > 0) {
          const Pe = I.slice(-xe).map(
            (wo) => {
              var fs;
              return (fs = G.find((bf) => bf.value === wo)) == null ? void 0 : fs.label;
            }
          ).filter(Boolean);
          Pe.length === 1 ? We(
            `${Pe[0]} selected. ${T} of ${de} options selected.`
          ) : We(
            `${Pe.length} options selected. ${T} of ${de} total selected.`
          );
        } else xe < 0 && We(
          `Option removed. ${T} of ${de} options selected.`
        );
        Xe.current = T;
      }
      Z !== rt.current && (We(
        Z ? `Dropdown opened. ${de} options available. Use arrow keys to navigate.` : "Dropdown closed."
      ), rt.current = Z), re !== Ut.current && re !== void 0 && (re && Z && We(`Searching for "${re}"`), Ut.current = re);
    }, [I, Z, re, We, Ve]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
        /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
        /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: _e })
      ] }),
      /* @__PURE__ */ c.jsxs(
        $2,
        {
          open: Z,
          onOpenChange: O,
          modal: k,
          children: [
            /* @__PURE__ */ c.jsx("div", { id: yn, className: "sr-only", children: s }),
            /* @__PURE__ */ c.jsx("div", { id: Kt, className: "sr-only", "aria-live": "polite", children: I.length === 0 ? i : `${I.length} option${I.length === 1 ? "" : "s"} selected: ${I.map((T) => {
              var G;
              return (G = Xt(T)) == null ? void 0 : G.label;
            }).filter(Boolean).join(", ")}` }),
            /* @__PURE__ */ c.jsxs("div", { className: A(F && "w-auto", C), children: [
              /* @__PURE__ */ c.jsx(V2, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
                "button",
                {
                  ref: Ge,
                  ...E,
                  onClick: oe,
                  disabled: B,
                  className: A(
                    `border-interactive-default bg-surface-primary px-0
                  disabled:bg-surface-disabled h-12 rounded relative flex w-full
                  items-center border focus-visible:ring-4
                  focus-visible:outline-none active:ring-4
                  disabled:cursor-not-allowed`,
                    F ? "w-auto" : "w-full",
                    !X && `hover:border-interactive-hover
                    active:ring-interactive-focused
                    focus:ring-interactive-focused`,
                    X && `border-interactive-alert-default
                    hover:border-interactive-alert-default
                    focus:ring-interactive-alert-focused
                    active:ring-interactive-alert-focused`,
                    pt.compactMode && "min-h-8 text-sm",
                    Ue === "mobile" && "min-h-12"
                  ),
                  style: {
                    ...It,
                    maxWidth: `min(${It.maxWidth}, 100%)`
                  },
                  role: "combobox",
                  "aria-expanded": Z,
                  "aria-haspopup": "listbox",
                  "aria-controls": Z ? or : void 0,
                  "aria-describedby": `${yn} ${Kt}`,
                  "aria-label": `Multi-select: ${I.length} of ${Ve().length} options selected. ${a}`,
                  children: [
                    I.length > 0 && /* @__PURE__ */ c.jsx(c.Fragment, {}),
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "mx-auto flex w-full items-center justify-between",
                        children: [
                          /* @__PURE__ */ c.jsx(
                            "span",
                            {
                              className: A(
                                "mx-sm",
                                B ? "text-body-disabled" : Z ? "text-body-primary" : "text-body-placeholder"
                              ),
                              children: o
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
                            ou,
                            {
                              className: A(
                                "h-4 mx-xs cursor-pointer",
                                B ? "text-body-disabled" : "text-body-primary"
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
                I.slice(0, pt.maxCount).map((T) => {
                  const G = Xt(T);
                  return G ? /* @__PURE__ */ c.jsx("div", { children: kn({
                    option: G,
                    location: "badge",
                    onRemove: () => se(T),
                    disabled: B
                  }) }, T) : null;
                }).filter(Boolean),
                I.length > pt.maxCount && /* @__PURE__ */ c.jsxs(
                  gi,
                  {
                    className: A(
                      `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                      sr(),
                      wi({ variant: n }),
                      pt.compactMode && "text-xs px-1.5 py-0.5",
                      z && "flex-shrink-0 whitespace-nowrap",
                      "[&>svg]:pointer-events-auto",
                      B && "cursor-not-allowed"
                    ),
                    ...!B && { onRemove: pe },
                    children: [
                      "+ ",
                      I.length - pt.maxCount,
                      " ",
                      h
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(
              ef,
              {
                id: or,
                role: "listbox",
                "aria-multiselectable": "true",
                "aria-label": f,
                className: A(
                  "p-0 w-auto",
                  bo(),
                  Ue === "mobile" && "w-[85vw] max-w-[280px]",
                  Ue === "tablet" && "max-w-md w-[70vw]",
                  Ue === "desktop" && "min-w-[300px]",
                  U
                ),
                style: {
                  animationDuration: `${(b == null ? void 0 : b.duration) || y}s`,
                  animationDelay: `${(b == null ? void 0 : b.delay) || 0}s`,
                  maxWidth: `min(${It.maxWidth}, 85vw)`,
                  maxHeight: Ue === "mobile" ? "70vh" : "60vh",
                  touchAction: "manipulation"
                },
                align: "start",
                children: /* @__PURE__ */ c.jsxs(df, { filter: yo, children: [
                  S && /* @__PURE__ */ c.jsx(
                    uf,
                    {
                      placeholder: g,
                      onKeyDown: ir,
                      value: re,
                      onValueChange: ie,
                      "aria-label": d,
                      "aria-describedby": `${_t}-search-help`
                    }
                  ),
                  S && /* @__PURE__ */ c.jsx("div", { id: `${_t}-search-help`, className: "sr-only", children: l }),
                  /* @__PURE__ */ c.jsxs(
                    ff,
                    {
                      className: A(
                        "max-h-[40vh] overflow-y-auto",
                        Ue === "mobile" && "max-h-[50vh]"
                      ),
                      style: { overscrollBehaviorY: "contain" },
                      children: [
                        /* @__PURE__ */ c.jsx(mf, { children: P }),
                        !M && !re && /* @__PURE__ */ c.jsx(Pr, { children: /* @__PURE__ */ c.jsxs(
                          Rr,
                          {
                            value: "select-all",
                            onSelect: Ie,
                            role: "option",
                            "aria-selected": I.length === Ve().filter((T) => !T.disabled).length,
                            "aria-label": `Select all ${Ve().length} options`,
                            className: "cursor-pointer",
                            children: [
                              /* @__PURE__ */ c.jsx(
                                Er,
                                {
                                  className: "mr-xs",
                                  checked: I.length === Ve().filter((T) => !T.disabled).length
                                }
                              ),
                              /* @__PURE__ */ c.jsxs("span", { children: [
                                "(",
                                m,
                                Ve().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                  " - ",
                                  Ve().length,
                                  " ",
                                  p
                                ] }) : null,
                                ")"
                              ] })
                            ]
                          },
                          "all"
                        ) }),
                        wn(e) ? e.map((T) => /* @__PURE__ */ c.jsx(Pr, { heading: T.heading, children: T.options.map((G) => {
                          const de = I.includes(
                            G.value
                          );
                          return /* @__PURE__ */ c.jsxs(
                            Rr,
                            {
                              value: `${G.value}:${G.label}`,
                              onSelect: () => se(G.value),
                              role: "option",
                              "aria-selected": de,
                              "aria-disabled": G.disabled ?? !1,
                              "aria-label": `${G.label}${de ? ", selected" : ", not selected"}${G.disabled ? ", disabled" : ""}`,
                              className: A(
                                "cursor-pointer",
                                G.disabled && `text-interactive-disabled cursor-not-allowed
                                  opacity-100 data-[disabled=true]:opacity-100`
                              ),
                              disabled: !!G.disabled,
                              children: [
                                /* @__PURE__ */ c.jsx(Er, { className: "mr-xs", checked: de }),
                                kn({
                                  option: G,
                                  location: "dropdown",
                                  isSelected: de
                                })
                              ]
                            },
                            G.value
                          );
                        }) }, T.heading)) : /* @__PURE__ */ c.jsx(Pr, { children: e.map((T) => {
                          const G = I.includes(T.value);
                          return /* @__PURE__ */ c.jsxs(
                            Rr,
                            {
                              value: `${T.value}:${T.label}`,
                              onSelect: () => se(T.value),
                              role: "option",
                              "aria-selected": G,
                              "aria-disabled": T.disabled ?? !1,
                              "aria-label": `${T.label}${G ? ", selected" : ", not selected"}${T.disabled ? ", disabled" : ""}`,
                              className: A(
                                "cursor-pointer",
                                T.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                              ),
                              disabled: !!T.disabled,
                              children: [
                                /* @__PURE__ */ c.jsx(Er, { className: "mr-xs", checked: G }),
                                kn({
                                  option: T,
                                  location: "dropdown",
                                  isSelected: G
                                })
                              ]
                            },
                            T.value
                          );
                        }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c.jsx(pf, {}),
                  /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      className: `px-md py-sm bg-surface-primary bottom-0 sticky flex
                  items-center justify-between`,
                      children: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                        /* @__PURE__ */ c.jsx(
                          Le,
                          {
                            intent: "text",
                            size: "xs",
                            className: "min-w-auto",
                            onClick: ve,
                            disabled: I.length === 0,
                            children: v
                          }
                        ),
                        /* @__PURE__ */ c.jsx(
                          Le,
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
            y > 0 && I.length > 0 && /* @__PURE__ */ c.jsx(
              jx,
              {
                className: A(
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
fC.displayName = "MultiSelect";
const mC = ae(
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
), pC = ae(
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
), hC = ae(
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
), ga = ({
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
  return i !== void 0 && (f.value = i), /* @__PURE__ */ c.jsxs(qg, { ...f, children: [
    /* @__PURE__ */ c.jsxs(
      Xg,
      {
        className: A(mC({ variant: a, intent: s, invalid: o }), n),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            je(r, {
              className: A("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              Zg,
              {
                placeholder: t || "Select an option",
                className: A({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            Qg,
            {
              className: A("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": d.disabled
              }),
              children: /* @__PURE__ */ c.jsx(ou, { className: "top-0.5 relative h-full w-full" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(Jg, { children: /* @__PURE__ */ c.jsxs(
      e0,
      {
        position: "popper",
        className: A(pC({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(i0, {}),
          /* @__PURE__ */ c.jsx(t0, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((m, p) => {
            switch (m.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(n0, { children: /* @__PURE__ */ c.jsx(r0, { children: m.label }) }, p);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  l0,
                  {
                    className: "border-divider-default m-[5px] h-px border-b"
                  },
                  p
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  o0,
                  {
                    value: m.value,
                    disabled: m.disabled ?? !1,
                    className: hC({
                      variant: a,
                      isSelected: i === m.value
                    }),
                    children: [
                      je(m.icon, {
                        className: A("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": m.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        a0,
                        {
                          className: A("flex-1", {
                            "text-interactive-disabled": m.disabled
                          }),
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(s0, {})
                    ]
                  },
                  p
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(c0, {}),
          /* @__PURE__ */ c.jsx(d0, {})
        ]
      }
    ) })
  ] });
};
ga.displayName = "Select";
const vC = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Ci = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), gC = N.forwardRef(
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
        className: A(vC({ size: m }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Ci()), children: i }),
            /* @__PURE__ */ c.jsx(
              ga,
              {
                value: o.toString(),
                onValueChange: y,
                options: w
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Ci()), children: l }),
            /* @__PURE__ */ c.jsx(
              ga,
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
              Le,
              {
                intent: "text",
                size: "sm",
                icon: Sx,
                onClick: h,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Le,
              {
                intent: "text",
                size: "sm",
                icon: au,
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
gC.displayName = "Pagination";
const xC = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), bC = ae(
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
), yC = ae(
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
), hS = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(xC({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      Pg,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: A(
          bC({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(Rg, { className: A(yC({ invalid: a })) })
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
}, vS = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  Eg,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), wC = ae(
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
), CC = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", SC = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, kC = ae(
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
), MC = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, NC = ae(
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
), EC = "gap-xs text-sm text-body-secondary flex-row", PC = ae(
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
), RC = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, DC = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", AC = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, OC = N.forwardRef(
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
    Mi(() => {
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
        className: A(
          "gap-xxs group flex flex-col",
          v ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": v ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: A(
                wC({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: A(CC), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: A(DC, SC), children: [
                    /* @__PURE__ */ c.jsx("span", { className: A(kC({ size: e })), children: /* @__PURE__ */ c.jsx(su, { size: AC[e] }) }),
                    x.map((C, M) => /* @__PURE__ */ c.jsxs("span", { className: PC(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            RC,
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
                          children: /* @__PURE__ */ c.jsx(da, { size: 8 })
                        }
                      )
                    ] }, M)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: A(MC),
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
                      children: /* @__PURE__ */ c.jsx(da, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      NC({
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
              className: A(
                EC,
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
OC.displayName = "SearchBar";
const hf = xa(void 0), _C = ({
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
  return /* @__PURE__ */ c.jsx(hf.Provider, { value: a, children: t });
}, rr = () => {
  const e = ba(hf);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  return e;
}, vf = N.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = rr();
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: n,
      className: A(
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
      children: r ? /* @__PURE__ */ c.jsx(Mx, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(wx, { className: "size-5", strokeWidth: 2 })
    }
  );
});
vf.displayName = "SideNavigationCollapseButton";
const IC = ae(
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
), jC = N.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(_C, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(gf, { ref: n, ...t }) }));
jC.displayName = "SideNavigation";
const gf = N.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    ...s
  }, i) => {
    const { isCollapsed: l } = rr();
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
        className: A(
          IC({ width: d }),
          "group",
          e
        ),
        "data-collapsed": l,
        ...s,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: A(
                "p-sm",
                l ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: r }),
          a && /* @__PURE__ */ c.jsx(vf, {})
        ]
      }
    );
  }
);
gf.displayName = "SideNavigationContent";
const TC = ae(
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
    const { isCollapsed: d } = rr(), f = r ? $r : "button", m = s ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      f,
      {
        ref: l,
        className: A(
          TC({
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
const LC = ae("flex flex-col", {
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
}), FC = N.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = rr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: A(
        LC({ isCollapsed: s, isLast: r }),
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
FC.displayName = "SideNavigationSection";
const $C = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", VC = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", gS = () => {
  const { isCollapsed: e } = rr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: $C,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: VC,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, BC = ae(
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
), zC = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), xS = ({
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
        BC({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: zC({ indicator: s }) }),
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
}, HC = N.forwardRef(
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
      xf,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: A("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(N.Fragment, { children: [
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
                    ru,
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
), xf = N.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((v) => v.status === "active"), i = Math.max(
    0,
    Math.min(s, a - 1)
  ), l = t[i] || t[0], d = a > 0 ? (i + 1) / a * 100 : 0, f = 2 * Math.PI * 24, m = f, p = f - d / 100 * f;
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
xf.displayName = "RadialStepper";
HC.displayName = "Stepper";
function bS({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    h0,
    {
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
      ...t,
      children: /* @__PURE__ */ c.jsx(
        v0,
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
}
const YC = N.forwardRef(
  ({ className: e, children: t, loading: n, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `border-surface-default bg-surface-primary relative w-max
        border`,
      children: /* @__PURE__ */ c.jsx(
        "table",
        {
          ref: o,
          className: A("w-full caption-bottom", e),
          ...r,
          children: t
        }
      )
    }
  )
);
YC.displayName = "Table";
const GC = N.forwardRef(
  ({ className: e, loading: t = !1, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "thead",
    {
      ref: o,
      className: A("text-sm bg-surface-tertiary top-0 sticky", e),
      ...r,
      children: [
        n,
        t && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
          os.Linear,
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
GC.displayName = "TableHeader";
const UC = N.forwardRef(
  ({
    className: e,
    loading: t = !1,
    loadingText: n = "ローディング中…",
    colSpan: r = 1,
    children: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx("tbody", { ref: s, className: e, ...a, children: t ? /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx(
    "td",
    {
      colSpan: r,
      className: "py-sm min-h-12 px-[1.44rem] text-center align-middle",
      children: n
    }
  ) }) : o })
);
UC.displayName = "TableBody";
const KC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
KC.displayName = "TableFooter";
const qC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: A(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover transition-colors
      [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
qC.displayName = "TableRow";
const XC = N.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: A(
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
XC.displayName = "TableHead";
const ZC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
ZC.displayName = "TableCell";
const QC = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
QC.displayName = "TableCaption";
const yS = N.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), JC = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), eS = ae(
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
), tS = N.forwardRef(({ className: e, size: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(y0, { ref: o, className: A("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(w0, { className: A(JC({ size: t })), role: "tablist", children: n }) }));
tS.displayName = "TabBar";
const nS = N.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => /* @__PURE__ */ c.jsx(
  C0,
  {
    ref: a,
    className: A(eS({ size: t }), e),
    disabled: r,
    ...o,
    children: n
  }
));
nS.displayName = "Tab";
const rS = ae(
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
), oS = N.forwardRef(
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
          className: A(rS({ invalid: e }), t),
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
oS.displayName = "TextArea";
const wS = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  B0,
  {
    open: n,
    onOpenChange: r,
    className: `border-surface-default bg-surface-primary p-md
        text-body-primary shadow-high w-96 rounded
        data-[state=open]:animate-slide-in data-[state=closed]:animate-hide
        data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:translate-x-0
        border-1 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]`,
    children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-start justify-between", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-start", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          o === "success" && /* @__PURE__ */ c.jsx(
            iu,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Us,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Us,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Nr, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx(z0, { className: "text-body-primary font-bold", children: /* @__PURE__ */ c.jsx("h5", { className: "mb-xxs text-md leading-none", children: t }) }),
          /* @__PURE__ */ c.jsx(H0, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(Y0, { asChild: !0, altText: "Close", className: "pt-xxxs", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "cursor-pointer", children: /* @__PURE__ */ c.jsx(da, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), CS = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs($0, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    V0,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), aS = ae(
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
), SS = cx, sS = N.forwardRef(
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
    className: d,
    ...f
  }, m) => /* @__PURE__ */ c.jsxs(
    lx,
    {
      delayDuration: i,
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(dx, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(ux, { children: /* @__PURE__ */ c.jsx(
          fx,
          {
            ref: m,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: A(aS({ intent: n }), d),
            ...f,
            children: t
          }
        ) })
      ]
    }
  )
);
sS.displayName = "Tooltip";
const Si = ae(
  `focus-visible:ring-interactive-focused relative cursor-pointer border-1
  border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      size: {
        small: "pt-md pb-lg min-h-20 rounded-sm",
        large: "pt-xxl pb-xxxl px-xl rounded-lg"
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
), iS = N.forwardRef(
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
    const [M, S] = cn(!1), P = _n(null), F = Me(
      (E) => {
        E.preventDefault(), E.stopPropagation(), M || S(!0);
      },
      [M]
    ), z = Me((E) => {
      E.preventDefault(), E.stopPropagation(), S(!1);
    }, []), U = Me((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), B = Me(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), S(!1), s) return;
        const _ = E.dataTransfer.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [s, r]
    ), X = Me(() => {
      var E;
      s || (E = P.current) == null || E.click();
    }, [s]), j = Me(
      (E) => {
        const _ = E.target.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [r]
    ), Y = M ? "dragging" : n, $ = () => /* @__PURE__ */ c.jsx(
      Dx,
      {
        className: "text-shape-interactive-primary-default",
        size: t === "large" ? 60 : 32
      }
    ), K = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Le,
        {
          size: "xs",
          intent: "tertiary",
          icon: Ks,
          onClick: (E) => {
            E.stopPropagation(), X();
          },
          children: h
        }
      )
    ] }), D = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-sm flex flex-col items-center", children: [
      $(),
      /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex flex-col text-center", children: [
        /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-medium", children: [
          g,
          /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
        ] }),
        /* @__PURE__ */ c.jsx(
          Le,
          {
            size: "xs",
            intent: "tertiary",
            className: "self-center",
            icon: Ks,
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
        className: A(Si({ size: t, state: "default", disabled: s })),
        onDragEnter: F,
        onDragLeave: z,
        onDragOver: U,
        onDrop: B,
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
              onChange: j,
              disabled: s
            }
          ),
          t === "small" ? K() : D()
        ]
      }
    ), R = () => {
      const E = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return Y === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
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
          os.Linear,
          {
            indeterminate: !i,
            value: i,
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
              onClick: (_) => {
                _.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(Hx, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Px,
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
          /* @__PURE__ */ c.jsx(hx, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || w })
        ] })
      ] }) : null;
    }, H = () => t === "small" ? K() : D();
    return Y === "inProgress" && i !== void 0 || Y === "success" || Y === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: A(e), ...k, children: [
      W(),
      R()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: A(
          Si({ size: t, state: Y, disabled: s }),
          e
        ),
        onDragEnter: F,
        onDragLeave: z,
        onDragOver: U,
        onDrop: B,
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
              onChange: j,
              disabled: s
            }
          ),
          H()
        ]
      }
    );
  }
);
iS.displayName = "FileUploader";
export {
  Mb as Badge,
  Pb as Breadcrumbs,
  Le as Button,
  qu as Calendar,
  h2 as Callout,
  Er as Checkbox,
  x2 as CheckboxGroup,
  S2 as DatePicker,
  fS as Dialog,
  T2 as Dropdown,
  j2 as DropdownContent,
  O2 as DropdownItem,
  I2 as DropdownLabel,
  _2 as DropdownSeparator,
  W2 as DropdownTrigger,
  iS as FileUploader,
  pS as FormField,
  gS as Logo,
  fC as MultiSelect,
  mS as MultiStepDialog,
  gC as Pagination,
  os as ProgressIndicator,
  hS as RadioButton,
  vS as RadioButtonGroup,
  OC as SearchBar,
  ga as Select,
  jC as SideNavigation,
  vf as SideNavigationCollapseButton,
  WC as SideNavigationItem,
  _C as SideNavigationProvider,
  FC as SideNavigationSection,
  xS as StatusIndicator,
  HC as Stepper,
  bS as Switch,
  nS as Tab,
  tS as TabBar,
  YC as Table,
  UC as TableBody,
  QC as TableCaption,
  ZC as TableCell,
  KC as TableFooter,
  XC as TableHead,
  yS as TableHeadSortButton,
  GC as TableHeader,
  qC as TableRow,
  gi as Tag,
  oS as TextArea,
  Zu as TextField,
  Xu as TextLink,
  wS as ToastItem,
  CS as ToastProvider,
  sS as Tooltip,
  SS as TooltipProvider,
  rr as useSideNavigation
};
