import * as u from "react";
import S, { useState as sn, useLayoutEffect as Ti, forwardRef as tm, createElement as Mo, createContext as ka, useContext as Na, useCallback as Me, useRef as Tn, useEffect as Li, useMemo as Eo } from "react";
import * as Hn from "react-dom";
import nm from "react-dom";
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
var ks;
function rm() {
  if (ks) return Pn;
  ks = 1;
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
var Ns;
function om() {
  return Ns || (Ns = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === B ? null : R.displayName || R.name || null;
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
        case W:
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
          case N:
            var G = R.render;
            return R = R.displayName, R || (R = G.displayName || G.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case k:
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
      return T[R] || (T[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, G, E, _, H, z, $, O) {
      return E = z.ref, R = {
        $$typeof: v,
        type: R,
        key: G,
        props: z,
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
        value: $
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, G, E, _, H, z, $, O) {
      var Y = G.children;
      if (Y !== void 0)
        if (_)
          if (Z(Y)) {
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
        var J = Object.keys(G).filter(function(ie) {
          return ie !== "key";
        });
        _ = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", j[Y + _] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          Y,
          J,
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
        z,
        H,
        o(),
        E,
        $,
        O
      );
    }
    function m(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var p = S, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), V = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, Z = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var U, T = {}, Q = p.react_stack_bottom_frame.bind(
      p,
      a
    )(), A = I(r(a)), j = {};
    Rn.Fragment = h, Rn.jsx = function(R, G, E, _, H) {
      var z = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        R,
        G,
        E,
        !1,
        _,
        H,
        z ? Error("react-stack-top-frame") : Q,
        z ? I(r(R)) : A
      );
    }, Rn.jsxs = function(R, G, E, _, H) {
      var z = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        R,
        G,
        E,
        !0,
        _,
        H,
        z ? Error("react-stack-top-frame") : Q,
        z ? I(r(R)) : A
      );
    };
  })()), Rn;
}
var Ms;
function am() {
  return Ms || (Ms = 1, process.env.NODE_ENV === "production" ? ur.exports = rm() : ur.exports = om()), ur.exports;
}
var c = am();
function Es(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Es(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Es(e[o], null);
        }
      };
  };
}
function se(...e) {
  return u.useCallback(xt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  const t = /* @__PURE__ */ sm(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(cm);
    if (l) {
      const d = l.props.children, f = i.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Hr = /* @__PURE__ */ Nt("Slot");
// @__NO_SIDE_EFFECTS__
function sm(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = dm(o), i = lm(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? xt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function im(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Wi, t;
}
function cm(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wi;
}
function lm(e, t) {
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
function dm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var um = [
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
], X = um.reduce((e, t) => {
  const n = /* @__PURE__ */ Nt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ma(e, t) {
  e && Hn.flushSync(() => e.dispatchEvent(t));
}
var $i = Object.freeze({
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
}), fm = "VisuallyHidden", Yr = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    X.span,
    {
      ...e,
      ref: t,
      style: { ...$i, ...e.style }
    }
  )
);
Yr.displayName = fm;
var mm = Yr;
function pm(e, t) {
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
  return o.scopeName = e, [r, hm(o, ...t)];
}
function hm(...e) {
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
  ), s = (h) => {
    const { scope: g, children: y } = h, b = S.useRef(null), w = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: y });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Nt(i), d = S.forwardRef(
    (h, g) => {
      const { scope: y, children: b } = h, w = a(i, y), N = se(g, w.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: N, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Nt(f), v = S.forwardRef(
    (h, g) => {
      const { scope: y, children: b, ...w } = h, N = S.useRef(null), C = se(g, N), M = a(f, y);
      return S.useEffect(() => (M.itemMap.set(N, { ref: N, ...w }), () => void M.itemMap.delete(N))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
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
        (M, k) => w.indexOf(M.ref.current) - w.indexOf(k.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: v },
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
}, vm = u[" useInsertionEffect ".trim().toString()] || Ee;
function Ie({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = gm({
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
        const p = xm(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function gm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return vm(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function xm(e) {
  return typeof e == "function";
}
function bm(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var De = (e) => {
  const { present: t, children: n } = e, r = ym(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = se(r.ref, wm(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
De.displayName = "Presence";
function ym(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = bm(s, {
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
      const p = a.current, v = fr(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ee(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = fr(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = fr(r.current));
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
function wm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cm = u[" useId ".trim().toString()] || (() => {
}), Sm = 0;
function we(e) {
  const [t, n] = u.useState(Cm());
  return Ee(() => {
    n((r) => r ?? String(Sm++));
  }, [e]), t ? `radix-${t}` : "";
}
var Gr = "Collapsible", [km, Fi] = Pe(Gr), [Nm, Ea] = km(Gr), Vi = u.forwardRef(
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
      caller: Gr
    });
    return /* @__PURE__ */ c.jsx(
      Nm,
      {
        scope: n,
        disabled: a,
        contentId: we(),
        open: l,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            "data-state": Ra(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Vi.displayName = Gr;
var Bi = "CollapsibleTrigger", zi = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ea(Bi, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ra(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
zi.displayName = Bi;
var Pa = "CollapsibleContent", Hi = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ea(Pa, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(De, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(Mm, { ...r, ref: t, present: a }) });
  }
);
Hi.displayName = Pa;
var Mm = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Ea(Pa, n), [i, l] = u.useState(r), d = u.useRef(null), f = se(t, d), m = u.useRef(0), p = m.current, v = u.useRef(0), x = v.current, h = s.open || i, g = u.useRef(h), y = u.useRef(void 0);
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
      m.current = w.height, v.current = w.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    X.div,
    {
      "data-state": Ra(s.open),
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
function Ra(e) {
  return e ? "open" : "closed";
}
var Em = Vi, Pm = zi, Rm = Hi, Am = u.createContext(void 0);
function fn(e) {
  const t = u.useContext(Am);
  return e || t || "ltr";
}
var et = "Accordion", Dm = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Aa, Om, _m] = Yn(et), [Ur] = Pe(et, [
  _m,
  Fi
]), Da = Fi(), Yi = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(Aa.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Lm, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Tm, { ...o, ref: t }) });
  }
);
Yi.displayName = et;
var [Gi, Im] = Ur(et), [Ui, jm] = Ur(
  et,
  { collapsible: !1 }
), Tm = S.forwardRef(
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
      Gi,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(Ui, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(Ki, { ...s, ref: t }) })
      }
    );
  }
), Lm = S.forwardRef((e, t) => {
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
    Gi,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(Ui, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(Ki, { ...a, ref: t }) })
    }
  );
}), [Wm, Kr] = Ur(et), Ki = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = se(i, t), d = Om(n), m = fn(o) === "ltr", p = F(e.onKeyDown, (v) => {
      var P;
      if (!Dm.includes(v.key)) return;
      const x = v.target, h = d().filter((W) => {
        var B;
        return !((B = W.ref.current) != null && B.disabled);
      }), g = h.findIndex((W) => W.ref.current === x), y = h.length;
      if (g === -1) return;
      v.preventDefault();
      let b = g;
      const w = 0, N = y - 1, C = () => {
        b = g + 1, b > N && (b = w);
      }, M = () => {
        b = g - 1, b < w && (b = N);
      };
      switch (v.key) {
        case "Home":
          b = w;
          break;
        case "End":
          b = N;
          break;
        case "ArrowRight":
          a === "horizontal" && (m ? C() : M());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (m ? M() : C());
          break;
        case "ArrowUp":
          a === "vertical" && M();
          break;
      }
      const k = b % y;
      (P = h[k].ref.current) == null || P.focus();
    });
    return /* @__PURE__ */ c.jsx(
      Wm,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(Aa.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
), _r = "AccordionItem", [$m, Oa] = Ur(_r), qi = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Kr(_r, n), s = Im(_r, n), i = Da(n), l = we(), d = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      $m,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          Em,
          {
            "data-orientation": a.orientation,
            "data-state": tc(d),
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
qi.displayName = _r;
var Xi = "AccordionHeader", Zi = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kr(et, n), a = Oa(Xi, n);
    return /* @__PURE__ */ c.jsx(
      X.h3,
      {
        "data-orientation": o.orientation,
        "data-state": tc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Zi.displayName = Xi;
var Zo = "AccordionTrigger", Qi = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kr(et, n), a = Oa(Zo, n), s = jm(Zo, n), i = Da(n);
    return /* @__PURE__ */ c.jsx(Aa.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Pm,
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
Qi.displayName = Zo;
var Ji = "AccordionContent", ec = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Kr(et, n), a = Oa(Ji, n), s = Da(n);
    return /* @__PURE__ */ c.jsx(
      Rm,
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
ec.displayName = Ji;
function tc(e) {
  return e ? "open" : "closed";
}
var Ps = Yi, Fm = qi, Vm = Zi, Bm = Qi, zm = ec;
function We(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Hm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ym = "DismissableLayer", Qo = "dismissableLayer.update", Gm = "dismissableLayer.pointerDownOutside", Um = "dismissableLayer.focusOutside", Rs, nc = u.createContext({
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
    } = e, d = u.useContext(nc), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = se(t, (k) => m(k)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g), b = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, N = b >= y, C = qm((k) => {
      const P = k.target, W = [...d.branches].some((B) => B.contains(P));
      !N || W || (o == null || o(k), s == null || s(k), k.defaultPrevented || i == null || i());
    }, p), M = Xm((k) => {
      const P = k.target;
      [...d.branches].some((B) => B.contains(P)) || (a == null || a(k), s == null || s(k), k.defaultPrevented || i == null || i());
    }, p);
    return Hm((k) => {
      b === d.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && i && (k.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Rs = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), As(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Rs);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), As());
    }, [f, d]), u.useEffect(() => {
      const k = () => v({});
      return document.addEventListener(Qo, k), () => document.removeEventListener(Qo, k);
    }, []), /* @__PURE__ */ c.jsx(
      X.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: w ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
zt.displayName = Ym;
var Km = "DismissableLayerBranch", rc = u.forwardRef((e, t) => {
  const n = u.useContext(nc), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(X.div, { ...e, ref: o });
});
rc.displayName = Km;
function qm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          oc(
            Gm,
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
function Xm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && oc(Um, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function As() {
  const e = new CustomEvent(Qo);
  document.dispatchEvent(e);
}
function oc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ma(o, a) : o.dispatchEvent(a);
}
var Zm = zt, Qm = rc, Po = "focusScope.autoFocusOnMount", Ro = "focusScope.autoFocusOnUnmount", Ds = { bubbles: !1, cancelable: !0 }, Jm = "FocusScope", Gn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = We(o), f = We(a), m = u.useRef(null), p = se(t, (h) => l(h)), v = u.useRef({
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
        const N = w.target;
        i.contains(N) ? m.current = N : St(m.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !i) return;
        const N = w.relatedTarget;
        N !== null && (i.contains(N) || St(m.current, { select: !0 }));
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
      _s.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Po, Ds);
        i.addEventListener(Po, d), i.dispatchEvent(y), y.defaultPrevented || (ep(ap(ac(i)), { select: !0 }), document.activeElement === h && St(i));
      }
      return () => {
        i.removeEventListener(Po, d), setTimeout(() => {
          const y = new CustomEvent(Ro, Ds);
          i.addEventListener(Ro, f), i.dispatchEvent(y), y.defaultPrevented || St(h ?? document.body, { select: !0 }), i.removeEventListener(Ro, f), _s.remove(v);
        }, 0);
      };
    }
  }, [i, d, f, v]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (g && y) {
        const b = h.currentTarget, [w, N] = tp(b);
        w && N ? !h.shiftKey && y === N ? (h.preventDefault(), n && St(w, { select: !0 })) : h.shiftKey && y === w && (h.preventDefault(), n && St(N, { select: !0 })) : y === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(X.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
Gn.displayName = Jm;
function ep(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (St(r, { select: t }), document.activeElement !== n) return;
}
function tp(e) {
  const t = ac(e), n = Os(t, e), r = Os(t.reverse(), e);
  return [n, r];
}
function ac(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Os(e, t) {
  for (const n of e)
    if (!np(n, { upTo: t })) return n;
}
function np(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function St(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rp(e) && t && e.select();
  }
}
var _s = op();
function op() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Is(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Is(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Is(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ap(e) {
  return e.filter((t) => t.tagName !== "A");
}
var sp = "Portal", Ht = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Ee(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? nm.createPortal(/* @__PURE__ */ c.jsx(X.div, { ...r, ref: t }), s) : null;
});
Ht.displayName = sp;
var Ao = 0;
function qr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? js()), document.body.insertAdjacentElement("beforeend", e[1] ?? js()), Ao++, () => {
      Ao === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ao--;
    };
  }, []);
}
function js() {
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
function sc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ip(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Mr = "right-scroll-bar-position", Er = "width-before-scroll-bar", cp = "with-scroll-bars-hidden", lp = "--removed-body-scroll-bar-size";
function Do(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function dp(e, t) {
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
var up = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ts = /* @__PURE__ */ new WeakMap();
function fp(e, t) {
  var n = dp(null, function(r) {
    return e.forEach(function(o) {
      return Do(o, r);
    });
  });
  return up(function() {
    var r = Ts.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Do(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Do(i, s);
      });
    }
    Ts.set(n, e);
  }, [e]), n;
}
function mp(e) {
  return e;
}
function pp(e, t) {
  t === void 0 && (t = mp);
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
function hp(e) {
  e === void 0 && (e = {});
  var t = pp(null);
  return t.options = at({ async: !0, ssr: !1 }, e), t;
}
var ic = function(e) {
  var t = e.sideCar, n = sc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, at({}, n));
};
ic.isSideCarExport = !0;
function vp(e, t) {
  return e.useMedium(t), ic;
}
var cc = hp(), Oo = function() {
}, Xr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Oo,
    onWheelCapture: Oo,
    onTouchMoveCapture: Oo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, N = sc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, M = fp([n, t]), k = at(at({}, N), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: cc, removeScrollBar: d, shards: m, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), at(at({}, k), { ref: M })) : u.createElement(b, at({}, k, { className: l, ref: M }), i)
  );
});
Xr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xr.classNames = {
  fullWidth: Er,
  zeroRight: Mr
};
var gp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gp();
  return t && e.setAttribute("nonce", t), e;
}
function bp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function yp(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wp = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xp()) && (bp(t, n), yp(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Cp = function() {
  var e = wp();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, lc = function() {
  var e = Cp(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Sp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _o = function(e) {
  return parseInt(e || "", 10) || 0;
}, kp = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_o(n), _o(r), _o(o)];
}, Np = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Sp;
  var t = kp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Mp = lc(), rn = "data-scroll-locked", Ep = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(cp, ` {
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
  
  .`).concat(Mr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Er, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Mr, " .").concat(Mr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Er, " .").concat(Er, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(rn, `] {
    `).concat(lp, ": ").concat(i, `px;
  }
`);
}, Ls = function() {
  var e = parseInt(document.body.getAttribute(rn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Pp = function() {
  u.useEffect(function() {
    return document.body.setAttribute(rn, (Ls() + 1).toString()), function() {
      var e = Ls() - 1;
      e <= 0 ? document.body.removeAttribute(rn) : document.body.setAttribute(rn, e.toString());
    };
  }, []);
}, Rp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Pp();
  var a = u.useMemo(function() {
    return Np(o);
  }, [o]);
  return u.createElement(Mp, { styles: Ep(a, !t, o, n ? "" : "!important") });
}, Jo = !1;
if (typeof window < "u")
  try {
    var mr = Object.defineProperty({}, "passive", {
      get: function() {
        return Jo = !0, !0;
      }
    });
    window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
  } catch {
    Jo = !1;
  }
var Xt = Jo ? { passive: !1 } : !1, Ap = function(e) {
  return e.tagName === "TEXTAREA";
}, dc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ap(e) && n[t] === "visible")
  );
}, Dp = function(e) {
  return dc(e, "overflowY");
}, Op = function(e) {
  return dc(e, "overflowX");
}, Ws = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = uc(e, r);
    if (o) {
      var a = fc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, _p = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ip = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uc = function(e, t) {
  return e === "v" ? Dp(t) : Op(t);
}, fc = function(e, t) {
  return e === "v" ? _p(t) : Ip(t);
}, jp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Tp = function(e, t, n, r, o) {
  var a = jp(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var v = fc(e, i), x = v[0], h = v[1], g = v[2], y = h - g - a * x;
    (x || y) && uc(e, i) && (m += y, p += x);
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
}, $s = function(e) {
  return [e.deltaX, e.deltaY];
}, Fs = function(e) {
  return e && "current" in e ? e.current : e;
}, Lp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, $p = 0, Zt = [];
function Fp(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState($p++)[0], a = u.useState(lc)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = ip([e.lockRef.current], (e.shards || []).map(Fs), !0).filter(Boolean);
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
    var y = pr(h), b = n.current, w = "deltaX" in h ? h.deltaX : b[0] - y[0], N = "deltaY" in h ? h.deltaY : b[1] - y[1], C, M = h.target, k = Math.abs(w) > Math.abs(N) ? "h" : "v";
    if ("touches" in h && k === "h" && M.type === "range")
      return !1;
    var P = Ws(k, M);
    if (!P)
      return !0;
    if (P ? C = k : (C = k === "v" ? "h" : "v", P = Ws(k, M)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (w || N) && (r.current = C), !C)
      return !0;
    var W = r.current || C;
    return Tp(W, g, h, W === "h" ? w : N);
  }, []), l = u.useCallback(function(h) {
    var g = h;
    if (!(!Zt.length || Zt[Zt.length - 1] !== a)) {
      var y = "deltaY" in g ? $s(g) : pr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Lp(C.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(Fs).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), N = w.length > 0 ? i(g, w[0]) : !s.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, g, y, b) {
    var w = { name: h, delta: g, target: y, should: b, shadowParent: Vp(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = pr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, $s(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, pr(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Zt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Xt), document.addEventListener("touchmove", l, Xt), document.addEventListener("touchstart", f, Xt), function() {
      Zt = Zt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Xt), document.removeEventListener("touchmove", l, Xt), document.removeEventListener("touchstart", f, Xt);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Wp(o) }) : null,
    v ? u.createElement(Rp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Vp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Bp = vp(cc, Fp);
var Un = u.forwardRef(function(e, t) {
  return u.createElement(Xr, at({}, e, { ref: t, sideCar: Bp }));
});
Un.classNames = Xr.classNames;
var zp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), vr = {}, Io = 0, mc = function(e) {
  return e && (e.host || mc(e.parentNode));
}, Hp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = mc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Yp = function(e, t, n, r) {
  var o = Hp(t, Array.isArray(e) ? e : [e]);
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
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (Qt.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Qt.set(p, h), a.set(p, g), s.push(p), h === 1 && x && hr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Io++, function() {
    s.forEach(function(m) {
      var p = Qt.get(m) - 1, v = a.get(m) - 1;
      Qt.set(m, p), a.set(m, v), p || (hr.has(m) || m.removeAttribute(r), hr.delete(m)), v || m.removeAttribute(n);
    }), Io--, Io || (Qt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), vr = {});
  };
}, Zr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = zp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Yp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Qr = "Dialog", [pc] = Pe(Qr), [Gp, tt] = pc(Qr), hc = (e) => {
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
    caller: Qr
  });
  return /* @__PURE__ */ c.jsx(
    Gp,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: we(),
      titleId: we(),
      descriptionId: we(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
hc.displayName = Qr;
var vc = "DialogTrigger", Up = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(vc, n), a = se(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ja(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Up.displayName = vc;
var _a = "DialogPortal", [Kp, gc] = pc(_a, {
  forceMount: void 0
}), xc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tt(_a, t);
  return /* @__PURE__ */ c.jsx(Kp, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(De, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: s }) })) });
};
xc.displayName = _a;
var Ir = "DialogOverlay", bc = u.forwardRef(
  (e, t) => {
    const n = gc(Ir, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(Ir, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(De, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Xp, { ...o, ref: t }) }) : null;
  }
);
bc.displayName = Ir;
var qp = /* @__PURE__ */ Nt("DialogOverlay.RemoveScroll"), Xp = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Ir, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Un, { as: qp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        X.div,
        {
          "data-state": ja(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Wt = "DialogContent", yc = u.forwardRef(
  (e, t) => {
    const n = gc(Wt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tt(Wt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(De, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Zp, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Qp, { ...o, ref: t }) });
  }
);
yc.displayName = Wt;
var Zp = u.forwardRef(
  (e, t) => {
    const n = tt(Wt, e.__scopeDialog), r = u.useRef(null), o = se(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Zr(a);
    }, []), /* @__PURE__ */ c.jsx(
      wc,
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
), Qp = u.forwardRef(
  (e, t) => {
    const n = tt(Wt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      wc,
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
), wc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = tt(Wt, n), l = u.useRef(null), d = se(t, l);
    return qr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
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
              "data-state": ja(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(eh, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(nh, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ia = "DialogTitle", Cc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Ia, n);
    return /* @__PURE__ */ c.jsx(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
Cc.displayName = Ia;
var Sc = "DialogDescription", Jp = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(Sc, n);
    return /* @__PURE__ */ c.jsx(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Jp.displayName = Sc;
var kc = "DialogClose", Nc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tt(kc, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Nc.displayName = kc;
function ja(e) {
  return e ? "open" : "closed";
}
var Mc = "DialogTitleWarning", [fk, Ec] = pm(Mc, {
  contentName: Wt,
  titleName: Ia,
  docsSlug: "dialog"
}), eh = ({ titleId: e }) => {
  const t = Ec(Mc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, th = "DialogDescriptionWarning", nh = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ec(th).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ta = hc, La = xc, Wa = bc, $a = yc, Pc = Cc, Fa = Nc;
function Jr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function eo(e) {
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
var to = "Checkbox", [rh] = Pe(to), [oh, Va] = rh(to);
function ah(e) {
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
  } = e, [p, v] = Ie({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: to
  }), [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useRef(!1), w = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
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
    oh,
    {
      scope: t,
      ...N,
      children: sh(m) ? m(N) : r
    }
  );
}
var Rc = "CheckboxTrigger", Ac = u.forwardRef(
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
    } = Va(Rc, e), h = se(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => m(g.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": kt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Tc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: F(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: F(n, (y) => {
          m((b) => kt(b) ? !0 : !b), x && v && (p.current = y.isPropagationStopped(), p.current || y.stopPropagation());
        })
      }
    );
  }
);
Ac.displayName = Rc;
var Dc = u.forwardRef(
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
      ah,
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
            Ac,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            jc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Dc.displayName = to;
var Oc = "CheckboxIndicator", _c = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Va(Oc, n);
    return /* @__PURE__ */ c.jsx(
      De,
      {
        present: r || kt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            "data-state": Tc(a.checked),
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
_c.displayName = Oc;
var Ic = "CheckboxBubbleInput", jc = u.forwardRef(
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
    } = Va(Ic, e), x = se(n, v), h = Jr(a), g = eo(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, M = !o.current;
      if (h !== a && C) {
        const k = new Event("click", { bubbles: M });
        b.indeterminate = kt(a), C.call(b, kt(a) ? !1 : a), b.dispatchEvent(k);
      }
    }, [p, h, a, o]);
    const y = u.useRef(kt(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      X.input,
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
jc.displayName = Ic;
function sh(e) {
  return typeof e == "function";
}
function kt(e) {
  return e === "indeterminate";
}
function Tc(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ih = ["top", "right", "bottom", "left"], Mt = Math.min, Be = Math.max, jr = Math.round, gr = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), ch = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, lh = {
  start: "end",
  end: "start"
};
function ea(e, t, n) {
  return Be(e, Mt(t, n));
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
function Ba(e) {
  return e === "x" ? "y" : "x";
}
function za(e) {
  return e === "y" ? "height" : "width";
}
const dh = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e) {
  return dh.has(yt(e)) ? "y" : "x";
}
function Ha(e) {
  return Ba(ct(e));
}
function uh(e, t, n) {
  n === void 0 && (n = !1);
  const r = mn(e), o = Ha(e), a = za(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Tr(s)), [s, Tr(s)];
}
function fh(e) {
  const t = Tr(e);
  return [ta(e), t, ta(t)];
}
function ta(e) {
  return e.replace(/start|end/g, (t) => lh[t]);
}
const Vs = ["left", "right"], Bs = ["right", "left"], mh = ["top", "bottom"], ph = ["bottom", "top"];
function hh(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Bs : Vs : t ? Vs : Bs;
    case "left":
    case "right":
      return t ? mh : ph;
    default:
      return [];
  }
}
function vh(e, t, n, r) {
  const o = mn(e);
  let a = hh(yt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ta)))), a;
}
function Tr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ch[t]);
}
function gh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lc(e) {
  return typeof e != "number" ? gh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Lr(e) {
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
function zs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ct(t), s = Ha(t), i = za(s), l = yt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
const xh = async (e, t, n) => {
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
  } = zs(d, r, l), p = r, v = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
      x: b,
      y: w,
      data: N,
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
        ...N
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = zs(d, p, l)), h = -1);
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
  } = bt(t, e), x = Lc(v), g = i[p ? m === "floating" ? "reference" : "floating" : m], y = Lr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), N = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Lr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - C.top + x.top) / N.y,
    bottom: (C.bottom - y.bottom + x.bottom) / N.y,
    left: (y.left - C.left + x.left) / N.x,
    right: (C.right - y.right + x.right) / N.x
  };
}
const bh = (e) => ({
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
    const m = Lc(f), p = {
      x: n,
      y: r
    }, v = Ha(o), x = za(v), h = await s.getDimensions(d), g = v === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", N = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let k = M ? M[w] : 0;
    (!k || !await (s.isElement == null ? void 0 : s.isElement(M))) && (k = i.floating[w] || a.floating[x]);
    const P = N / 2 - C / 2, W = k / 2 - h[x] / 2 - 1, B = Mt(m[y], W), V = Mt(m[b], W), q = B, Z = k - h[x] - V, I = k / 2 - h[x] / 2 + P, U = ea(q, I, Z), T = !l.arrow && mn(o) != null && I !== U && a.reference[x] / 2 - (I < q ? B : V) - h[x] / 2 < 0, Q = T ? I < q ? I - q : I - Z : 0;
    return {
      [v]: p[v] + Q,
      data: {
        [v]: U,
        centerOffset: I - U - Q,
        ...T && {
          alignmentOffset: Q
        }
      },
      reset: T
    };
  }
}), yh = function(e) {
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
      const y = yt(o), b = ct(i), w = yt(i) === i, N = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (w || !h ? [Tr(i)] : fh(i)), M = x !== "none";
      !p && M && C.push(...vh(i, h, x, N));
      const k = [i, ...C], P = await Ln(t, g), W = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && W.push(P[y]), m) {
        const I = uh(o, s, N);
        W.push(P[I[0]], P[I[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: W
      }], !W.every((I) => I <= 0)) {
        var V, q;
        const I = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, U = k[I];
        if (U && (!(m === "alignment" ? b !== ct(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((A) => ct(A.placement) === b ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: B
            },
            reset: {
              placement: U
            }
          };
        let T = (q = B.filter((Q) => Q.overflows[0] <= 0).sort((Q, A) => Q.overflows[1] - A.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!T)
          switch (v) {
            case "bestFit": {
              var Z;
              const Q = (Z = B.filter((A) => {
                if (M) {
                  const j = ct(A.placement);
                  return j === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, R) => j + R, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : Z[0];
              Q && (T = Q);
              break;
            }
            case "initialPlacement":
              T = i;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Hs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ys(e) {
  return ih.some((t) => e[t] >= 0);
}
const wh = function(e) {
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
          }), s = Hs(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ys(s)
            }
          };
        }
        case "escaped": {
          const a = await Ln(t, {
            ...o,
            altBoundary: !0
          }), s = Hs(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ys(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wc = /* @__PURE__ */ new Set(["left", "top"]);
async function Ch(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = yt(n), i = mn(n), l = ct(n) === "y", d = Wc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = bt(t, e);
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
const Sh = function(e) {
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
      } = t, l = await Ch(t, e);
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
}, kh = function(e) {
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
      }, f = await Ln(t, l), m = ct(yt(o)), p = Ba(m);
      let v = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + f[g], w = v - f[y];
        v = ea(b, v, w);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = x + f[g], w = x - f[y];
        x = ea(b, x, w);
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
}, Nh = function(e) {
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
      }, m = ct(o), p = Ba(m);
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
        const w = p === "y" ? "height" : "width", N = a.reference[p] - a.floating[w] + g.mainAxis, C = a.reference[p] + a.reference[w] - g.mainAxis;
        v < N ? v = N : v > C && (v = C);
      }
      if (d) {
        var y, b;
        const w = p === "y" ? "width" : "height", N = Wc.has(yt(o)), C = a.reference[m] - a.floating[w] + (N && ((y = s.offset) == null ? void 0 : y[m]) || 0) + (N ? 0 : g.crossAxis), M = a.reference[m] + a.reference[w] + (N ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (N ? g.crossAxis : 0);
        x < C ? x = C : x > M && (x = M);
      }
      return {
        [p]: v,
        [m]: x
      };
    }
  };
}, Mh = function(e) {
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
      } = bt(e, t), f = await Ln(t, d), m = yt(o), p = mn(o), v = ct(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, y;
      m === "top" || m === "bottom" ? (g = m, y = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m, g = p === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, w = x - f.left - f.right, N = Mt(h - f[g], b), C = Mt(x - f[y], w), M = !t.middlewareData.shift;
      let k = N, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = w), (r = t.middlewareData.shift) != null && r.enabled.y && (k = b), M && !p) {
        const B = Be(f.left, 0), V = Be(f.right, 0), q = Be(f.top, 0), Z = Be(f.bottom, 0);
        v ? P = x - 2 * (B !== 0 || V !== 0 ? B + V : Be(f.left, f.right)) : k = h - 2 * (q !== 0 || Z !== 0 ? q + Z : Be(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: k
      });
      const W = await s.getDimensions(i.floating);
      return x !== W.width || h !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function no() {
  return typeof window < "u";
}
function pn(e) {
  return $c(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  var t;
  return (t = ($c(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $c(e) {
  return no() ? e instanceof Node || e instanceof ze(e).Node : !1;
}
function Qe(e) {
  return no() ? e instanceof Element || e instanceof ze(e).Element : !1;
}
function ut(e) {
  return no() ? e instanceof HTMLElement || e instanceof ze(e).HTMLElement : !1;
}
function Gs(e) {
  return !no() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
const Eh = /* @__PURE__ */ new Set(["inline", "contents"]);
function Kn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Eh.has(o);
}
const Ph = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Rh(e) {
  return Ph.has(pn(e));
}
const Ah = [":popover-open", ":modal"];
function ro(e) {
  return Ah.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Dh = ["transform", "translate", "scale", "rotate", "perspective"], Oh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], _h = ["paint", "layout", "strict", "content"];
function Ya(e) {
  const t = Ga(), n = Qe(e) ? Je(e) : e;
  return Dh.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Oh.some((r) => (n.willChange || "").includes(r)) || _h.some((r) => (n.contain || "").includes(r));
}
function Ih(e) {
  let t = Et(e);
  for (; ut(t) && !cn(t); ) {
    if (Ya(t))
      return t;
    if (ro(t))
      return null;
    t = Et(t);
  }
  return null;
}
function Ga() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function cn(e) {
  return jh.has(pn(e));
}
function Je(e) {
  return ze(e).getComputedStyle(e);
}
function oo(e) {
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
    Gs(e) && e.host || // Fallback.
    ft(e)
  );
  return Gs(t) ? t.host : t;
}
function Fc(e) {
  const t = Et(e);
  return cn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ut(t) && Kn(t) ? t : Fc(t);
}
function Wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Fc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ze(o);
  if (a) {
    const i = na(s);
    return t.concat(s, s.visualViewport || [], Kn(o) ? o : [], i && n ? Wn(i) : []);
  }
  return t.concat(o, Wn(o, [], n));
}
function na(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vc(e) {
  const t = Je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ut(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = jr(n) !== a || jr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Ua(e) {
  return Qe(e) ? e : e.contextElement;
}
function on(e) {
  const t = Ua(e);
  if (!ut(t))
    return dt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Vc(t);
  let s = (a ? jr(n.width) : n.width) / r, i = (a ? jr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Th = /* @__PURE__ */ dt(0);
function Bc(e) {
  const t = ze(e);
  return !Ga() || !t.visualViewport ? Th : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Lh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ze(e) ? !1 : t;
}
function $t(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ua(e);
  let s = dt(1);
  t && (r ? Qe(r) && (s = on(r)) : s = on(e));
  const i = Lh(a, n, r) ? Bc(a) : dt(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = ze(a), v = r && Qe(r) ? ze(r) : r;
    let x = p, h = na(x);
    for (; h && r && v !== x; ) {
      const g = on(h), y = h.getBoundingClientRect(), b = Je(h), w = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, N = y.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += w, d += N, x = ze(h), h = na(x);
    }
  }
  return Lr({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function ao(e, t) {
  const n = oo(e).scrollLeft;
  return t ? t.left + n : $t(ft(e)).left + n;
}
function zc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ao(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Wh(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ft(r), i = t ? ro(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = dt(1);
  const f = dt(0), m = ut(r);
  if ((m || !m && !a) && ((pn(r) !== "body" || Kn(s)) && (l = oo(r)), ut(r))) {
    const v = $t(r);
    d = on(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = s && !m && !a ? zc(s, l) : dt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function $h(e) {
  return Array.from(e.getClientRects());
}
function Fh(e) {
  const t = ft(e), n = oo(e), r = e.ownerDocument.body, o = Be(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Be(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ao(e);
  const i = -n.scrollTop;
  return Je(r).direction === "rtl" && (s += Be(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Us = 25;
function Vh(e, t) {
  const n = ze(e), r = ft(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Ga();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = ao(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - v);
    x <= Us && (a -= x);
  } else d <= Us && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Bh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function zh(e, t) {
  const n = $t(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ut(e) ? on(e) : dt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function Ks(e, t, n) {
  let r;
  if (t === "viewport")
    r = Vh(e, n);
  else if (t === "document")
    r = Fh(ft(e));
  else if (Qe(t))
    r = zh(t, n);
  else {
    const o = Bc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Lr(r);
}
function Hc(e, t) {
  const n = Et(e);
  return n === t || !Qe(n) || cn(n) ? !1 : Je(n).position === "fixed" || Hc(n, t);
}
function Hh(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wn(e, [], !1).filter((i) => Qe(i) && pn(i) !== "body"), o = null;
  const a = Je(e).position === "fixed";
  let s = a ? Et(e) : e;
  for (; Qe(s) && !cn(s); ) {
    const i = Je(s), l = Ya(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Bh.has(o.position) || Kn(s) && !l && Hc(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Et(s);
  }
  return t.set(e, r), r;
}
function Yh(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ro(t) ? [] : Hh(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
    const m = Ks(t, f, o);
    return d.top = Be(m.top, d.top), d.right = Mt(m.right, d.right), d.bottom = Mt(m.bottom, d.bottom), d.left = Be(m.left, d.left), d;
  }, Ks(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gh(e) {
  const {
    width: t,
    height: n
  } = Vc(e);
  return {
    width: t,
    height: n
  };
}
function Uh(e, t, n) {
  const r = ut(t), o = ft(t), a = n === "fixed", s = $t(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dt(0);
  function d() {
    l.x = ao(o);
  }
  if (r || !r && !a)
    if ((pn(t) !== "body" || Kn(o)) && (i = oo(t)), r) {
      const v = $t(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? zc(o, i) : dt(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function jo(e) {
  return Je(e).position === "static";
}
function qs(e, t) {
  if (!ut(e) || Je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ft(e) === n && (n = n.ownerDocument.body), n;
}
function Yc(e, t) {
  const n = ze(e);
  if (ro(e))
    return n;
  if (!ut(e)) {
    let o = Et(e);
    for (; o && !cn(o); ) {
      if (Qe(o) && !jo(o))
        return o;
      o = Et(o);
    }
    return n;
  }
  let r = qs(e, t);
  for (; r && Rh(r) && jo(r); )
    r = qs(r, t);
  return r && cn(r) && jo(r) && !Ya(r) ? n : r || Ih(e) || n;
}
const Kh = async function(e) {
  const t = this.getOffsetParent || Yc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Uh(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qh(e) {
  return Je(e).direction === "rtl";
}
const Xh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wh,
  getDocumentElement: ft,
  getClippingRect: Yh,
  getOffsetParent: Yc,
  getElementRects: Kh,
  getClientRects: $h,
  getDimensions: Gh,
  getScale: on,
  isElement: Qe,
  isRTL: qh
};
function Gc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zh(e, t) {
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
    const x = gr(m), h = gr(o.clientWidth - (f + p)), g = gr(o.clientHeight - (m + v)), y = gr(f), w = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: Be(0, Mt(1, l)) || 1
    };
    let N = !0;
    function C(M) {
      const k = M[0].intersectionRatio;
      if (k !== l) {
        if (!N)
          return s();
        k ? s(!1, k) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Gc(d, e.getBoundingClientRect()) && s(), N = !1;
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
function Qh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Ua(e), f = o || a ? [...d ? Wn(d) : [], ...Wn(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const m = d && i ? Zh(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? $t(e) : null;
  l && g();
  function g() {
    const y = $t(e);
    h && !Gc(h, y) && n(), h = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const Jh = Sh, ev = kh, tv = yh, nv = Mh, rv = wh, Xs = bh, ov = Nh, av = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Xh,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return xh(e, t, {
    ...o,
    platform: a
  });
};
var sv = typeof document < "u", iv = function() {
}, Pr = sv ? Ti : iv;
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
function Uc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zs(e, t) {
  const n = Uc(e);
  return Math.round(t * n) / n;
}
function To(e) {
  const t = u.useRef(e);
  return Pr(() => {
    t.current = e;
  }), t;
}
function cv(e) {
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
  Wr(p, r) || v(r);
  const [x, h] = u.useState(null), [g, y] = u.useState(null), b = u.useCallback((A) => {
    A !== M.current && (M.current = A, h(A));
  }, []), w = u.useCallback((A) => {
    A !== k.current && (k.current = A, y(A));
  }, []), N = a || x, C = s || g, M = u.useRef(null), k = u.useRef(null), P = u.useRef(f), W = l != null, B = To(l), V = To(o), q = To(d), Z = u.useCallback(() => {
    if (!M.current || !k.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    V.current && (A.platform = V.current), av(M.current, k.current, A).then((j) => {
      const R = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      I.current && !Wr(P.current, R) && (P.current = R, Hn.flushSync(() => {
        m(R);
      }));
    });
  }, [p, t, n, V, q]);
  Pr(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [d]);
  const I = u.useRef(!1);
  Pr(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Pr(() => {
    if (N && (M.current = N), C && (k.current = C), N && C) {
      if (B.current)
        return B.current(N, C, Z);
      Z();
    }
  }, [N, C, Z, B, W]);
  const U = u.useMemo(() => ({
    reference: M,
    floating: k,
    setReference: b,
    setFloating: w
  }), [b, w]), T = u.useMemo(() => ({
    reference: N,
    floating: C
  }), [N, C]), Q = u.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return A;
    const j = Zs(T.floating, f.x), R = Zs(T.floating, f.y);
    return i ? {
      ...A,
      transform: "translate(" + j + "px, " + R + "px)",
      ...Uc(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: R
    };
  }, [n, i, T.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: Z,
    refs: U,
    elements: T,
    floatingStyles: Q
  }), [f, Z, U, T, Q]);
}
const lv = (e) => {
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
      return r && t(r) ? r.current != null ? Xs({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Xs({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, dv = (e, t) => ({
  ...Jh(e),
  options: [e, t]
}), uv = (e, t) => ({
  ...ev(e),
  options: [e, t]
}), fv = (e, t) => ({
  ...ov(e),
  options: [e, t]
}), mv = (e, t) => ({
  ...tv(e),
  options: [e, t]
}), pv = (e, t) => ({
  ...nv(e),
  options: [e, t]
}), hv = (e, t) => ({
  ...rv(e),
  options: [e, t]
}), vv = (e, t) => ({
  ...lv(e),
  options: [e, t]
});
var gv = "Arrow", Kc = u.forwardRef((e, t) => {
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
Kc.displayName = gv;
var xv = Kc, Ka = "Popper", [qc, Rt] = Pe(Ka), [bv, Xc] = qc(Ka), Zc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(bv, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Zc.displayName = Ka;
var Qc = "PopperAnchor", Jc = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Xc(Qc, n), s = u.useRef(null), i = se(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(X.div, { ...o, ref: i });
  }
);
Jc.displayName = Qc;
var qa = "PopperContent", [yv, wv] = qc(qa), el = u.forwardRef(
  (e, t) => {
    var O, Y, J, re, ie, ue;
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
    } = e, g = Xc(qa, n), [y, b] = u.useState(null), w = se(t, (Ne) => b(Ne)), [N, C] = u.useState(null), M = eo(N), k = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, W = r + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(d) ? d : [d], q = V.length > 0, Z = {
      padding: B,
      boundary: V.filter(Sv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: I, floatingStyles: U, placement: T, isPositioned: Q, middlewareData: A } = cv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: W,
      whileElementsMounted: (...Ne) => Qh(...Ne, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        dv({ mainAxis: o + P, alignmentAxis: s }),
        l && uv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? fv() : void 0,
          ...Z
        }),
        l && mv({ ...Z }),
        pv({
          ...Z,
          apply: ({ elements: Ne, rects: _e, availableWidth: nt, availableHeight: qe }) => {
            const { width: rt, height: Ut } = _e.reference, Te = Ne.floating.style;
            Te.setProperty("--radix-popper-available-width", `${nt}px`), Te.setProperty("--radix-popper-available-height", `${qe}px`), Te.setProperty("--radix-popper-anchor-width", `${rt}px`), Te.setProperty("--radix-popper-anchor-height", `${Ut}px`);
          }
        }),
        N && vv({ element: N, padding: i }),
        kv({ arrowWidth: k, arrowHeight: P }),
        p && hv({ strategy: "referenceHidden", ...Z })
      ]
    }), [j, R] = rl(T), G = We(x);
    Ee(() => {
      Q && (G == null || G());
    }, [Q, G]);
    const E = (O = A.arrow) == null ? void 0 : O.x, _ = (Y = A.arrow) == null ? void 0 : Y.y, H = ((J = A.arrow) == null ? void 0 : J.centerOffset) !== 0, [z, $] = u.useState();
    return Ee(() => {
      y && $(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: Q ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: z,
          "--radix-popper-transform-origin": [
            (re = A.transformOrigin) == null ? void 0 : re.x,
            (ie = A.transformOrigin) == null ? void 0 : ie.y
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
          yv,
          {
            scope: n,
            placedSide: j,
            onArrowChange: C,
            arrowX: E,
            arrowY: _,
            shouldHideArrow: H,
            children: /* @__PURE__ */ c.jsx(
              X.div,
              {
                "data-side": j,
                "data-align": R,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
el.displayName = qa;
var tl = "PopperArrow", Cv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nl = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = wv(tl, r), s = Cv[a.placedSide];
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
          xv,
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
nl.displayName = tl;
function Sv(e) {
  return e !== null;
}
var kv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = rl(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, h = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = s ? m : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = s ? m : `${v}px`), { data: { x, y: h } };
  }
});
function rl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var so = Zc, qn = Jc, io = el, co = nl, Lo = "rovingFocusGroup.onEntryFocus", Nv = { bubbles: !1, cancelable: !0 }, Xn = "RovingFocusGroup", [ra, ol, Mv] = Yn(Xn), [Ev, hn] = Pe(
  Xn,
  [Mv]
), [Pv, Rv] = Ev(Xn), al = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(ra.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(ra.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Av, { ...e, ref: t }) }) })
);
al.displayName = Xn;
var Av = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), v = se(t, p), x = fn(a), [h, g] = Ie({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Xn
  }), [y, b] = u.useState(!1), w = We(d), N = ol(n), C = u.useRef(!1), [M, k] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Lo, w), () => P.removeEventListener(Lo, w);
  }, [w]), /* @__PURE__ */ c.jsx(
    Pv,
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
        X.div,
        {
          tabIndex: y || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: F(e.onFocus, (P) => {
            const W = !C.current;
            if (P.target === P.currentTarget && W && !y) {
              const B = new CustomEvent(Lo, Nv);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const V = N().filter((T) => T.focusable), q = V.find((T) => T.active), Z = V.find((T) => T.id === h), U = [q, Z, ...V].filter(
                  Boolean
                ).map((T) => T.ref.current);
                cl(U, f);
              }
            }
            C.current = !1;
          }),
          onBlur: F(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), sl = "RovingFocusGroupItem", il = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = we(), d = a || l, f = Rv(sl, n), m = f.currentTabStopId === d, p = ol(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
      ra.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          X.span,
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
              const y = _v(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = p().filter((N) => N.focusable).map((N) => N.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const N = w.indexOf(g.currentTarget);
                  w = f.loop ? Iv(w, N + 1) : w.slice(N + 1);
                }
                setTimeout(() => cl(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
il.displayName = sl;
var Dv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ov(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function _v(e, t, n) {
  const r = Ov(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Dv[r];
}
function cl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Iv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Xa = al, Za = il, oa = ["Enter", " "], jv = ["ArrowDown", "PageUp", "Home"], ll = ["ArrowUp", "PageDown", "End"], Tv = [...jv, ...ll], Lv = {
  ltr: [...oa, "ArrowRight"],
  rtl: [...oa, "ArrowLeft"]
}, Wv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Zn = "Menu", [$n, $v, Fv] = Yn(Zn), [Yt, dl] = Pe(Zn, [
  Fv,
  Rt,
  hn
]), lo = Rt(), ul = hn(), [Vv, Gt] = Yt(Zn), [Bv, Qn] = Yt(Zn), fl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = lo(t), [l, d] = u.useState(null), f = u.useRef(!1), m = We(a), p = fn(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(so, { ...i, children: /* @__PURE__ */ c.jsx(
    Vv,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Bv,
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
fl.displayName = Zn;
var zv = "MenuAnchor", Qa = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lo(n);
    return /* @__PURE__ */ c.jsx(qn, { ...o, ...r, ref: t });
  }
);
Qa.displayName = zv;
var Ja = "MenuPortal", [Hv, ml] = Yt(Ja, {
  forceMount: void 0
}), pl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Gt(Ja, t);
  return /* @__PURE__ */ c.jsx(Hv, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(De, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
pl.displayName = Ja;
var Ue = "MenuContent", [Yv, es] = Yt(Ue), hl = u.forwardRef(
  (e, t) => {
    const n = ml(Ue, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ue, e.__scopeMenu), s = Qn(Ue, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx($n.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(De, { present: r || a.open, children: /* @__PURE__ */ c.jsx($n.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(Gv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Uv, { ...o, ref: t }) }) }) });
  }
), Gv = u.forwardRef(
  (e, t) => {
    const n = Gt(Ue, e.__scopeMenu), r = u.useRef(null), o = se(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Zr(a);
    }, []), /* @__PURE__ */ c.jsx(
      ts,
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
), Uv = u.forwardRef((e, t) => {
  const n = Gt(Ue, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    ts,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Kv = /* @__PURE__ */ Nt("MenuContent.ScrollLock"), ts = u.forwardRef(
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
    } = e, g = Gt(Ue, n), y = Qn(Ue, n), b = lo(n), w = ul(n), N = $v(n), [C, M] = u.useState(null), k = u.useRef(null), P = se(t, k, g.onContentChange), W = u.useRef(0), B = u.useRef(""), V = u.useRef(0), q = u.useRef(null), Z = u.useRef("right"), I = u.useRef(0), U = x ? Un : u.Fragment, T = x ? { as: Kv, allowPinchZoom: !0 } : void 0, Q = (j) => {
      var O, Y;
      const R = B.current + j, G = N().filter((J) => !J.disabled), E = document.activeElement, _ = (O = G.find((J) => J.ref.current === E)) == null ? void 0 : O.textValue, H = G.map((J) => J.textValue), z = sg(H, R, _), $ = (Y = G.find((J) => J.textValue === z)) == null ? void 0 : Y.ref.current;
      (function J(re) {
        B.current = re, window.clearTimeout(W.current), re !== "" && (W.current = window.setTimeout(() => J(""), 1e3));
      })(R), $ && setTimeout(() => $.focus());
    };
    u.useEffect(() => () => window.clearTimeout(W.current), []), qr();
    const A = u.useCallback((j) => {
      var G, E;
      return Z.current === ((G = q.current) == null ? void 0 : G.side) && cg(j, (E = q.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Yv,
      {
        scope: n,
        searchRef: B,
        onItemEnter: u.useCallback(
          (j) => {
            A(j) && j.preventDefault();
          },
          [A]
        ),
        onItemLeave: u.useCallback(
          (j) => {
            var R;
            A(j) || ((R = k.current) == null || R.focus(), M(null));
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
        children: /* @__PURE__ */ c.jsx(U, { ...T, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: F(a, (j) => {
              var R;
              j.preventDefault(), (R = k.current) == null || R.focus({ preventScroll: !0 });
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
                  Xa,
                  {
                    asChild: !0,
                    ...w,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: F(l, (j) => {
                      y.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      io,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Dl(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: F(h.onKeyDown, (j) => {
                          const G = j.target.closest("[data-radix-menu-content]") === j.currentTarget, E = j.ctrlKey || j.altKey || j.metaKey, _ = j.key.length === 1;
                          G && (j.key === "Tab" && j.preventDefault(), !E && _ && Q(j.key));
                          const H = k.current;
                          if (j.target !== H || !Tv.includes(j.key)) return;
                          j.preventDefault();
                          const $ = N().filter((O) => !O.disabled).map((O) => O.ref.current);
                          ll.includes(j.key) && $.reverse(), og($);
                        }),
                        onBlur: F(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(W.current), B.current = "");
                        }),
                        onPointerMove: F(
                          e.onPointerMove,
                          Fn((j) => {
                            const R = j.target, G = I.current !== j.clientX;
                            if (j.currentTarget.contains(R) && G) {
                              const E = j.clientX > I.current ? "right" : "left";
                              Z.current = E, I.current = j.clientX;
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
hl.displayName = Ue;
var qv = "MenuGroup", ns = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { role: "group", ...r, ref: t });
  }
);
ns.displayName = qv;
var Xv = "MenuLabel", vl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
vl.displayName = Xv;
var $r = "MenuItem", Qs = "menu.itemSelect", uo = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = Qn($r, e.__scopeMenu), i = es($r, e.__scopeMenu), l = se(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(Qs, { bubbles: !0, cancelable: !0 });
        m.addEventListener(Qs, (v) => r == null ? void 0 : r(v), { once: !0 }), Ma(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      gl,
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
          n || p && m.key === " " || oa.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
uo.displayName = $r;
var gl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = es($r, n), i = ul(n), l = u.useRef(null), d = se(t, l), [f, m] = u.useState(!1), [p, v] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      $n.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(Za, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          X.div,
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
), Zv = "MenuCheckboxItem", xl = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Sl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      uo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Fr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": os(n),
        onSelect: F(
          o.onSelect,
          () => r == null ? void 0 : r(Fr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xl.displayName = Zv;
var bl = "MenuRadioGroup", [Qv, Jv] = Yt(
  bl,
  { value: void 0, onValueChange: () => {
  } }
), yl = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = We(r);
    return /* @__PURE__ */ c.jsx(Qv, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(ns, { ...o, ref: t }) });
  }
);
yl.displayName = bl;
var wl = "MenuRadioItem", Cl = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Jv(wl, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Sl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      uo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": os(a),
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
Cl.displayName = wl;
var rs = "MenuItemIndicator", [Sl, eg] = Yt(
  rs,
  { checked: !1 }
), kl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = eg(rs, n);
    return /* @__PURE__ */ c.jsx(
      De,
      {
        present: r || Fr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            ...o,
            ref: t,
            "data-state": os(a.checked)
          }
        )
      }
    );
  }
);
kl.displayName = rs;
var tg = "MenuSeparator", Nl = u.forwardRef(
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
Nl.displayName = tg;
var ng = "MenuArrow", Ml = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lo(n);
    return /* @__PURE__ */ c.jsx(co, { ...o, ...r, ref: t });
  }
);
Ml.displayName = ng;
var rg = "MenuSub", [mk, El] = Yt(rg), On = "MenuSubTrigger", Pl = u.forwardRef(
  (e, t) => {
    const n = Gt(On, e.__scopeMenu), r = Qn(On, e.__scopeMenu), o = El(On, e.__scopeMenu), a = es(On, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(Qa, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      gl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Dl(n.open),
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
        onKeyDown: F(e.onKeyDown, (m) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Lv[r.dir].includes(m.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Pl.displayName = On;
var Rl = "MenuSubContent", Al = u.forwardRef(
  (e, t) => {
    const n = ml(Ue, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Ue, e.__scopeMenu), s = Qn(Ue, e.__scopeMenu), i = El(Rl, e.__scopeMenu), l = u.useRef(null), d = se(t, l);
    return /* @__PURE__ */ c.jsx($n.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(De, { present: r || a.open, children: /* @__PURE__ */ c.jsx($n.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      ts,
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
          var v;
          const m = f.currentTarget.contains(f.target), p = Wv[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (v = i.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Al.displayName = Rl;
function Dl(e) {
  return e ? "open" : "closed";
}
function Fr(e) {
  return e === "indeterminate";
}
function os(e) {
  return Fr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function og(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ag(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function sg(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = ag(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function ig(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function cg(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ig(n, t);
}
function Fn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var lg = fl, dg = Qa, ug = pl, fg = hl, mg = ns, pg = vl, hg = uo, vg = xl, gg = yl, xg = Cl, bg = kl, yg = Nl, wg = Ml, Cg = Pl, Sg = Al, fo = "DropdownMenu", [kg] = Pe(
  fo,
  [dl]
), je = dl(), [Ng, Ol] = kg(fo), _l = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = je(t), d = u.useRef(null), [f, m] = Ie({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: fo
  });
  return /* @__PURE__ */ c.jsx(
    Ng,
    {
      scope: t,
      triggerId: we(),
      triggerRef: d,
      contentId: we(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(lg, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
_l.displayName = fo;
var Il = "DropdownMenuTrigger", jl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Ol(Il, n), s = je(n);
    return /* @__PURE__ */ c.jsx(dg, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
jl.displayName = Il;
var Mg = "DropdownMenuPortal", Tl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = je(t);
  return /* @__PURE__ */ c.jsx(ug, { ...r, ...n });
};
Tl.displayName = Mg;
var Ll = "DropdownMenuContent", Wl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ol(Ll, n), a = je(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      fg,
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
Wl.displayName = Ll;
var Eg = "DropdownMenuGroup", Pg = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ c.jsx(mg, { ...o, ...r, ref: t });
  }
);
Pg.displayName = Eg;
var Rg = "DropdownMenuLabel", $l = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ c.jsx(pg, { ...o, ...r, ref: t });
  }
);
$l.displayName = Rg;
var Ag = "DropdownMenuItem", Fl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ c.jsx(hg, { ...o, ...r, ref: t });
  }
);
Fl.displayName = Ag;
var Dg = "DropdownMenuCheckboxItem", Og = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(vg, { ...o, ...r, ref: t });
});
Og.displayName = Dg;
var _g = "DropdownMenuRadioGroup", Ig = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(gg, { ...o, ...r, ref: t });
});
Ig.displayName = _g;
var jg = "DropdownMenuRadioItem", Tg = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(xg, { ...o, ...r, ref: t });
});
Tg.displayName = jg;
var Lg = "DropdownMenuItemIndicator", Wg = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(bg, { ...o, ...r, ref: t });
});
Wg.displayName = Lg;
var $g = "DropdownMenuSeparator", Vl = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(yg, { ...o, ...r, ref: t });
});
Vl.displayName = $g;
var Fg = "DropdownMenuArrow", Vg = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ c.jsx(wg, { ...o, ...r, ref: t });
  }
);
Vg.displayName = Fg;
var Bg = "DropdownMenuSubTrigger", zg = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(Cg, { ...o, ...r, ref: t });
});
zg.displayName = Bg;
var Hg = "DropdownMenuSubContent", Yg = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ c.jsx(
    Sg,
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
Yg.displayName = Hg;
var Gg = _l, Ug = jl, Kg = Tl, qg = Wl, Xg = $l, Zg = Fl, Qg = Vl;
function Js(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var mo = "Popover", [Bl] = Pe(mo, [
  Rt
]), Jn = Rt(), [Jg, At] = Bl(mo), zl = (e) => {
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
    caller: mo
  });
  return /* @__PURE__ */ c.jsx(so, { ...i, children: /* @__PURE__ */ c.jsx(
    Jg,
    {
      scope: t,
      contentId: we(),
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
zl.displayName = mo;
var Hl = "PopoverAnchor", e0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(Hl, n), a = Jn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(qn, { ...a, ...r, ref: t });
  }
);
e0.displayName = Hl;
var Yl = "PopoverTrigger", Gl = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(Yl, n), a = Jn(n), s = se(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Zl(o.open),
        ...r,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...a, children: i });
  }
);
Gl.displayName = Yl;
var as = "PopoverPortal", [t0, n0] = Bl(as, {
  forceMount: void 0
}), Ul = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = At(as, t);
  return /* @__PURE__ */ c.jsx(t0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(De, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Ul.displayName = as;
var ln = "PopoverContent", Kl = u.forwardRef(
  (e, t) => {
    const n = n0(ln, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = At(ln, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(De, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(o0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(a0, { ...o, ref: t }) });
  }
);
Kl.displayName = ln;
var r0 = /* @__PURE__ */ Nt("PopoverContent.RemoveScroll"), o0 = u.forwardRef(
  (e, t) => {
    const n = At(ln, e.__scopePopover), r = u.useRef(null), o = se(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Zr(s);
    }, []), /* @__PURE__ */ c.jsx(Un, { as: r0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      ql,
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
), a0 = u.forwardRef(
  (e, t) => {
    const n = At(ln, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ql,
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
), ql = u.forwardRef(
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
    } = e, p = At(ln, n), v = Jn(n);
    return qr(), /* @__PURE__ */ c.jsx(
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
              io,
              {
                "data-state": Zl(p.open),
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
), Xl = "PopoverClose", s0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = At(Xl, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
s0.displayName = Xl;
var i0 = "PopoverArrow", c0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Jn(n);
    return /* @__PURE__ */ c.jsx(co, { ...o, ...r, ref: t });
  }
);
c0.displayName = i0;
function Zl(e) {
  return e ? "open" : "closed";
}
var Ql = zl, Jl = Gl, ed = Ul, ss = Kl, is = "Progress", cs = 100, [l0] = Pe(is), [d0, u0] = l0(is), td = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = f0,
      ...s
    } = e;
    (o || o === 0) && !ei(o) && console.error(m0(`${o}`, "Progress"));
    const i = ei(o) ? o : cs;
    r !== null && !ti(r, i) && console.error(p0(`${r}`, "Progress"));
    const l = ti(r, i) ? r : null, d = Vr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(d0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      X.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Vr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": od(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
td.displayName = is;
var nd = "ProgressIndicator", rd = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = u0(nd, n);
    return /* @__PURE__ */ c.jsx(
      X.div,
      {
        "data-state": od(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
rd.displayName = nd;
function f0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function od(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Vr(e) {
  return typeof e == "number";
}
function ei(e) {
  return Vr(e) && !isNaN(e) && e > 0;
}
function ti(e, t) {
  return Vr(e) && !isNaN(e) && e <= t && e >= 0;
}
function m0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${cs}\`.`;
}
function p0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${cs} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var h0 = td, v0 = rd, ls = "Radio", [g0, ad] = Pe(ls), [x0, b0] = g0(ls), sd = u.forwardRef(
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
    return /* @__PURE__ */ c.jsxs(x0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": dd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: v,
          onClick: F(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        ld,
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
sd.displayName = ls;
var id = "RadioIndicator", cd = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = b0(id, n);
    return /* @__PURE__ */ c.jsx(De, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": dd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
cd.displayName = id;
var y0 = "RadioBubbleInput", ld = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = Jr(n), d = eo(t);
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
ld.displayName = y0;
function dd(e) {
  return e ? "checked" : "unchecked";
}
var w0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], po = "RadioGroup", [C0] = Pe(po, [
  hn,
  ad
]), ud = hn(), fd = ad(), [S0, k0] = C0(po), md = u.forwardRef(
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
    } = e, v = ud(n), x = fn(d), [h, g] = Ie({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: po
    });
    return /* @__PURE__ */ c.jsx(
      S0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          Xa,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: x,
            loop: f,
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
md.displayName = po;
var pd = "RadioGroupItem", hd = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = k0(pd, n), s = a.disabled || r, i = ud(n), l = fd(n), d = u.useRef(null), f = se(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        w0.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Za,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          sd,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: F((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: F(o.onFocus, () => {
              var v;
              p.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
hd.displayName = pd;
var N0 = "RadioGroupIndicator", vd = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = fd(n);
    return /* @__PURE__ */ c.jsx(cd, { ...o, ...r, ref: t });
  }
);
vd.displayName = N0;
var M0 = md, E0 = hd, P0 = vd, R0 = [" ", "Enter", "ArrowUp", "ArrowDown"], A0 = [" ", "Enter"], Ft = "Select", [ho, vo, D0] = Yn(Ft), [vn] = Pe(Ft, [
  D0,
  Rt
]), go = Rt(), [O0, Dt] = vn(Ft), [_0, I0] = vn(Ft), gd = (e) => {
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
  } = e, h = go(t), [g, y] = u.useState(null), [b, w] = u.useState(null), [N, C] = u.useState(!1), M = fn(d), [k, P] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ft
  }), [W, B] = Ie({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ft
  }), V = u.useRef(null), q = g ? x || !!g.closest("form") : !0, [Z, I] = u.useState(/* @__PURE__ */ new Set()), U = Array.from(Z).map((T) => T.props.value).join(";");
  return /* @__PURE__ */ c.jsx(so, { ...h, children: /* @__PURE__ */ c.jsxs(
    O0,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: C,
      contentId: we(),
      value: W,
      onValueChange: B,
      open: k,
      onOpenChange: P,
      dir: M,
      triggerPointerDownPosRef: V,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(ho.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          _0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((T) => {
              I((Q) => new Set(Q).add(T));
            }, []),
            onNativeOptionRemove: u.useCallback((T) => {
              I((Q) => {
                const A = new Set(Q);
                return A.delete(T), A;
              });
            }, []),
            children: n
          }
        ) }),
        q ? /* @__PURE__ */ c.jsxs(
          zd,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: W,
            onChange: (T) => B(T.target.value),
            disabled: p,
            form: x,
            children: [
              W === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Z)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
gd.displayName = Ft;
var xd = "SelectTrigger", bd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = go(n), s = Dt(xd, n), i = s.disabled || r, l = se(t, s.onTriggerChange), d = vo(n), f = u.useRef("touch"), [m, p, v] = Yd((h) => {
      const g = d().filter((w) => !w.disabled), y = g.find((w) => w.value === s.value), b = Gd(g, h, y);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (h) => {
      i || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": Hd(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: F(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: F(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: F(o.onKeyDown, (h) => {
          const g = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && R0.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
bd.displayName = xd;
var yd = "SelectValue", wd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Dt(yd, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = se(t, l.onValueNodeChange);
    return Ee(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      X.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Hd(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
wd.displayName = yd;
var j0 = "SelectIcon", Cd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Cd.displayName = j0;
var T0 = "SelectPortal", Sd = (e) => /* @__PURE__ */ c.jsx(Ht, { asChild: !0, ...e });
Sd.displayName = T0;
var Vt = "SelectContent", kd = u.forwardRef(
  (e, t) => {
    const n = Dt(Vt, e.__scopeSelect), [r, o] = u.useState();
    if (Ee(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Hn.createPortal(
        /* @__PURE__ */ c.jsx(Nd, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(ho.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Md, { ...e, ref: t });
  }
);
kd.displayName = Vt;
var Xe = 10, [Nd, Ot] = vn(Vt), L0 = "SelectContentImpl", W0 = /* @__PURE__ */ Nt("SelectContent.RemoveScroll"), Md = u.forwardRef(
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
    } = e, b = Dt(Vt, n), [w, N] = u.useState(null), [C, M] = u.useState(null), k = se(t, (O) => N(O)), [P, W] = u.useState(null), [B, V] = u.useState(
      null
    ), q = vo(n), [Z, I] = u.useState(!1), U = u.useRef(!1);
    u.useEffect(() => {
      if (w) return Zr(w);
    }, [w]), qr();
    const T = u.useCallback(
      (O) => {
        const [Y, ...J] = q().map((ue) => ue.ref.current), [re] = J.slice(-1), ie = document.activeElement;
        for (const ue of O)
          if (ue === ie || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === Y && C && (C.scrollTop = 0), ue === re && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== ie)) return;
      },
      [q, C]
    ), Q = u.useCallback(
      () => T([P, w]),
      [T, P, w]
    );
    u.useEffect(() => {
      Z && Q();
    }, [Z, Q]);
    const { onOpenChange: A, triggerPointerDownPosRef: j } = b;
    u.useEffect(() => {
      if (w) {
        let O = { x: 0, y: 0 };
        const Y = (re) => {
          var ie, ue;
          O = {
            x: Math.abs(Math.round(re.pageX) - (((ie = j.current) == null ? void 0 : ie.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((ue = j.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, J = (re) => {
          O.x <= 10 && O.y <= 10 ? re.preventDefault() : w.contains(re.target) || A(!1), document.removeEventListener("pointermove", Y), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [w, A, j]), u.useEffect(() => {
      const O = () => A(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [A]);
    const [R, G] = Yd((O) => {
      const Y = q().filter((ie) => !ie.disabled), J = Y.find((ie) => ie.ref.current === document.activeElement), re = Gd(Y, O, J);
      re && setTimeout(() => re.ref.current.focus());
    }), E = u.useCallback(
      (O, Y, J) => {
        const re = !U.current && !J;
        (b.value !== void 0 && b.value === Y || re) && (W(O), re && (U.current = !0));
      },
      [b.value]
    ), _ = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), H = u.useCallback(
      (O, Y, J) => {
        const re = !U.current && !J;
        (b.value !== void 0 && b.value === Y || re) && V(O);
      },
      [b.value]
    ), z = r === "popper" ? aa : Ed, $ = z === aa ? {
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
      Nd,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: M,
        itemRefCallback: E,
        selectedItem: P,
        onItemLeave: _,
        itemTextRefCallback: H,
        focusSelectedItem: Q,
        selectedItemText: B,
        position: r,
        isPositioned: Z,
        searchRef: R,
        children: /* @__PURE__ */ c.jsx(Un, { as: W0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: F(o, (O) => {
              var Y;
              (Y = b.trigger) == null || Y.focus({ preventScroll: !0 }), O.preventDefault();
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
                  z,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...y,
                    ...$,
                    onPlaced: () => I(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: F(y.onKeyDown, (O) => {
                      const Y = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !Y && O.key.length === 1 && G(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let re = q().filter((ie) => !ie.disabled).map((ie) => ie.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ie = O.target, ue = re.indexOf(ie);
                          re = re.slice(ue + 1);
                        }
                        setTimeout(() => T(re)), O.preventDefault();
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
Md.displayName = L0;
var $0 = "SelectItemAlignedPosition", Ed = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Dt(Vt, n), s = Ot(Vt, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = se(t, (k) => f(k)), p = vo(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && h && g && y) {
      const k = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), W = a.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ie = B.left - P.left, ue = W.left - ie, Ne = k.left - ue, _e = k.width + Ne, nt = Math.max(_e, P.width), qe = window.innerWidth - Xe, rt = Js(ue, [
          Xe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xe, qe - nt)
        ]);
        i.style.minWidth = _e + "px", i.style.left = rt + "px";
      } else {
        const ie = P.right - B.right, ue = window.innerWidth - W.right - ie, Ne = window.innerWidth - k.right - ue, _e = k.width + Ne, nt = Math.max(_e, P.width), qe = window.innerWidth - Xe, rt = Js(ue, [
          Xe,
          Math.max(Xe, qe - nt)
        ]);
        i.style.minWidth = _e + "px", i.style.right = rt + "px";
      }
      const V = p(), q = window.innerHeight - Xe * 2, Z = h.scrollHeight, I = window.getComputedStyle(d), U = parseInt(I.borderTopWidth, 10), T = parseInt(I.paddingTop, 10), Q = parseInt(I.borderBottomWidth, 10), A = parseInt(I.paddingBottom, 10), j = U + T + Z + A + Q, R = Math.min(g.offsetHeight * 5, j), G = window.getComputedStyle(h), E = parseInt(G.paddingTop, 10), _ = parseInt(G.paddingBottom, 10), H = k.top + k.height / 2 - Xe, z = q - H, $ = g.offsetHeight / 2, O = g.offsetTop + $, Y = U + T + O, J = j - Y;
      if (Y <= H) {
        const ie = V.length > 0 && g === V[V.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - h.offsetTop - h.offsetHeight, Ne = Math.max(
          z,
          $ + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ie ? _ : 0) + ue + Q
        ), _e = Y + Ne;
        i.style.height = _e + "px";
      } else {
        const ie = V.length > 0 && g === V[0].ref.current;
        i.style.top = "0px";
        const Ne = Math.max(
          H,
          U + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ie ? E : 0) + $
        ) + J;
        i.style.height = Ne + "px", h.scrollTop = Y - H + h.offsetTop;
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
  Ee(() => w(), [w]);
  const [N, C] = u.useState();
  Ee(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const M = u.useCallback(
    (k) => {
      k && x.current === !0 && (w(), b == null || b(), x.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ c.jsx(
    V0,
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
            zIndex: N
          },
          children: /* @__PURE__ */ c.jsx(
            X.div,
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
Ed.displayName = $0;
var F0 = "SelectPopperPosition", aa = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Xe,
    ...a
  } = e, s = go(n);
  return /* @__PURE__ */ c.jsx(
    io,
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
aa.displayName = F0;
var [V0, ds] = vn(Vt, {}), sa = "SelectViewport", Pd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Ot(sa, n), s = ds(sa, n), i = se(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(ho.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
          onScroll: F(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Xe * 2, h = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), y = Math.max(h, g);
                if (y < x) {
                  const b = y + v, w = Math.min(x, b), N = b - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = N > 0 ? N : 0, m.style.justifyContent = "flex-end");
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
Pd.displayName = sa;
var Rd = "SelectGroup", [B0, z0] = vn(Rd), Ad = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = we();
    return /* @__PURE__ */ c.jsx(B0, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ad.displayName = Rd;
var Dd = "SelectLabel", Od = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = z0(Dd, n);
    return /* @__PURE__ */ c.jsx(X.div, { id: o.id, ...r, ref: t });
  }
);
Od.displayName = Dd;
var Br = "SelectItem", [H0, _d] = vn(Br), Id = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Dt(Br, n), l = Ot(Br, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, v] = u.useState(!1), x = se(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, o);
      }
    ), h = we(), g = u.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      H0,
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
          ho.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ c.jsx(
              X.div,
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
                onFocus: F(s.onFocus, () => v(!0)),
                onBlur: F(s.onBlur, () => v(!1)),
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
                  var N;
                  ((N = l.searchRef) == null ? void 0 : N.current) !== "" && b.key === " " || (A0.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Id.displayName = Br;
var _n = "SelectItemText", jd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Dt(_n, n), i = Ot(_n, n), l = _d(_n, n), d = I0(_n, n), [f, m] = u.useState(null), p = se(
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
    return Ee(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(X.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Hn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
jd.displayName = _n;
var Td = "SelectItemIndicator", Ld = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return _d(Td, n).isSelected ? /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Ld.displayName = Td;
var ia = "SelectScrollUpButton", Wd = u.forwardRef((e, t) => {
  const n = Ot(ia, e.__scopeSelect), r = ds(ia, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
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
    Fd,
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
Wd.displayName = ia;
var ca = "SelectScrollDownButton", $d = u.forwardRef((e, t) => {
  const n = Ot(ca, e.__scopeSelect), r = ds(ca, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
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
    Fd,
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
$d.displayName = ca;
var Fd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Ot("SelectScrollButton", n), s = u.useRef(null), i = vo(n), l = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Ee(() => {
    var f;
    const d = i().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    X.div,
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
}), Y0 = "SelectSeparator", Vd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Vd.displayName = Y0;
var la = "SelectArrow", Bd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = go(n), a = Dt(la, n), s = Ot(la, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(co, { ...o, ...r, ref: t }) : null;
  }
);
Bd.displayName = la;
var G0 = "SelectBubbleInput", zd = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = se(r, o), s = Jr(t);
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
      X.select,
      {
        ...n,
        style: { ...$i, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
zd.displayName = G0;
function Hd(e) {
  return e === "" || e === void 0;
}
function Yd(e) {
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
function Gd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = U0(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function U0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var K0 = gd, q0 = bd, X0 = wd, Z0 = Cd, Q0 = Sd, J0 = kd, ex = Pd, tx = Ad, nx = Od, rx = Id, ox = jd, ax = Ld, sx = Wd, ix = $d, cx = Vd, lx = Bd, xo = "Switch", [dx] = Pe(xo), [ux, fx] = dx(xo), Ud = u.forwardRef(
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
    } = e, [p, v] = u.useState(null), x = se(t, (w) => v(w)), h = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [y, b] = Ie({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: xo
    });
    return /* @__PURE__ */ c.jsxs(ux, { scope: n, checked: y, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": s,
          "data-state": Zd(y),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: F(e.onClick, (w) => {
            b((N) => !N), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        Xd,
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
Ud.displayName = xo;
var Kd = "SwitchThumb", qd = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = fx(Kd, n);
    return /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": Zd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
qd.displayName = Kd;
var mx = "SwitchBubbleInput", Xd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = Jr(n), d = eo(t);
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
Xd.displayName = mx;
function Zd(e) {
  return e ? "checked" : "unchecked";
}
var px = Ud, hx = qd, bo = "Tabs", [vx] = Pe(bo, [
  hn
]), Qd = hn(), [gx, us] = vx(bo), Jd = u.forwardRef(
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
      caller: bo
    });
    return /* @__PURE__ */ c.jsx(
      gx,
      {
        scope: n,
        baseId: we(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          X.div,
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
Jd.displayName = bo;
var eu = "TabsList", tu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = us(eu, n), s = Qd(n);
    return /* @__PURE__ */ c.jsx(
      Xa,
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
tu.displayName = eu;
var nu = "TabsTrigger", ru = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = us(nu, n), i = Qd(n), l = au(s.baseId, r), d = su(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      Za,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          X.button,
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
ru.displayName = nu;
var ou = "TabsContent", xx = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = us(ou, n), l = au(i.baseId, r), d = su(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(De, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      X.div,
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
xx.displayName = ou;
function au(e, t) {
  return `${e}-trigger-${t}`;
}
function su(e, t) {
  return `${e}-content-${t}`;
}
var bx = Jd, yx = tu, wx = ru, fs = "ToastProvider", [ms, Cx, Sx] = Yn("Toast"), [iu] = Pe("Toast", [Sx]), [kx, yo] = iu(fs), cu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${fs}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(ms.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    kx,
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
cu.displayName = fs;
var lu = "ToastViewport", Nx = ["F8"], da = "toast.viewportPause", ua = "toast.viewportResume", du = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Nx,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = yo(lu, n), i = Cx(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = se(t, m, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    u.useEffect(() => {
      const g = (y) => {
        var w;
        r.length !== 0 && r.every((N) => y[N] || y.code === N) && ((w = m.current) == null || w.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, y = m.current;
      if (x && g && y) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const M = new CustomEvent(da);
            y.dispatchEvent(M), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const M = new CustomEvent(ua);
            y.dispatchEvent(M), s.isClosePausedRef.current = !1;
          }
        }, N = (M) => {
          !g.contains(M.relatedTarget) && w();
        }, C = () => {
          g.contains(document.activeElement) || w();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", N), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", w), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", N), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        };
      }
    }, [x, s.isClosePausedRef]);
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((w) => {
          const N = w.ref.current, C = [N, ...Wx(N)];
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
          var C, M, k;
          const w = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !w) {
            const P = document.activeElement, W = b.shiftKey;
            if (b.target === g && W) {
              (C = d.current) == null || C.focus();
              return;
            }
            const q = h({ tabbingDirection: W ? "backwards" : "forwards" }), Z = q.findIndex((I) => I === P);
            Wo(q.slice(Z + 1)) ? b.preventDefault() : W ? (M = d.current) == null || M.focus() : (k = f.current) == null || k.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [i, h]), /* @__PURE__ */ c.jsxs(
      Qm,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            fa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                Wo(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(ms.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(X.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            fa,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                Wo(g);
              }
            }
          )
        ]
      }
    );
  }
);
du.displayName = lu;
var uu = "ToastFocusProxy", fa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = yo(uu, n);
    return /* @__PURE__ */ c.jsx(
      Yr,
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
fa.displayName = uu;
var er = "Toast", Mx = "toast.swipeStart", Ex = "toast.swipeMove", Px = "toast.swipeCancel", Rx = "toast.swipeEnd", fu = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Ie({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: er
    });
    return /* @__PURE__ */ c.jsx(De, { present: n || i, children: /* @__PURE__ */ c.jsx(
      Ox,
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
fu.displayName = er;
var [Ax, Dx] = iu(er, {
  onClose() {
  }
}), Ox = u.forwardRef(
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
    } = e, h = yo(er, n), [g, y] = u.useState(null), b = se(t, (I) => y(I)), w = u.useRef(null), N = u.useRef(null), C = o || h.duration, M = u.useRef(0), k = u.useRef(C), P = u.useRef(0), { onToastAdd: W, onToastRemove: B } = h, V = We(() => {
      var U;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((U = h.viewport) == null || U.focus()), s();
    }), q = u.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(P.current), M.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(V, I));
      },
      [V]
    );
    u.useEffect(() => {
      const I = h.viewport;
      if (I) {
        const U = () => {
          q(k.current), d == null || d();
        }, T = () => {
          const Q = (/* @__PURE__ */ new Date()).getTime() - M.current;
          k.current = k.current - Q, window.clearTimeout(P.current), l == null || l();
        };
        return I.addEventListener(da, T), I.addEventListener(ua, U), () => {
          I.removeEventListener(da, T), I.removeEventListener(ua, U);
        };
      }
    }, [h.viewport, C, l, d, q]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && q(C);
    }, [a, C, h.isClosePausedRef, q]), u.useEffect(() => (W(), () => B()), [W, B]);
    const Z = u.useMemo(() => g ? yu(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      Z && /* @__PURE__ */ c.jsx(
        _x,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Z
        }
      ),
      /* @__PURE__ */ c.jsx(Ax, { scope: n, onClose: V, children: Hn.createPortal(
        /* @__PURE__ */ c.jsx(ms.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Zm,
          {
            asChild: !0,
            onEscapeKeyDown: F(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || V(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              X.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: F(e.onKeyDown, (I) => {
                  I.key === "Escape" && (i == null || i(I.nativeEvent), I.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, V()));
                }),
                onPointerDown: F(e.onPointerDown, (I) => {
                  I.button === 0 && (w.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: F(e.onPointerMove, (I) => {
                  if (!w.current) return;
                  const U = I.clientX - w.current.x, T = I.clientY - w.current.y, Q = !!N.current, A = ["left", "right"].includes(h.swipeDirection), j = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, R = A ? j(0, U) : 0, G = A ? 0 : j(0, T), E = I.pointerType === "touch" ? 10 : 2, _ = { x: R, y: G }, H = { originalEvent: I, delta: _ };
                  Q ? (N.current = _, xr(Ex, m, H, {
                    discrete: !1
                  })) : ni(_, h.swipeDirection, E) ? (N.current = _, xr(Mx, f, H, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(U) > E || Math.abs(T) > E) && (w.current = null);
                }),
                onPointerUp: F(e.onPointerUp, (I) => {
                  const U = N.current, T = I.target;
                  if (T.hasPointerCapture(I.pointerId) && T.releasePointerCapture(I.pointerId), N.current = null, w.current = null, U) {
                    const Q = I.currentTarget, A = { originalEvent: I, delta: U };
                    ni(U, h.swipeDirection, h.swipeThreshold) ? xr(Rx, v, A, {
                      discrete: !0
                    }) : xr(
                      Px,
                      p,
                      A,
                      {
                        discrete: !0
                      }
                    ), Q.addEventListener("click", (j) => j.preventDefault(), {
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
), _x = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = yo(er, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return Tx(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Ht, { asChild: !0, children: /* @__PURE__ */ c.jsx(Yr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, Ix = "ToastTitle", mu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
mu.displayName = Ix;
var jx = "ToastDescription", pu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
pu.displayName = jx;
var hu = "ToastAction", vu = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(bu, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(xu, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${hu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
vu.displayName = hu;
var gu = "ToastClose", xu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Dx(gu, n);
    return /* @__PURE__ */ c.jsx(bu, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onClose)
      }
    ) });
  }
);
xu.displayName = gu;
var bu = u.forwardRef((e, t) => {
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
function yu(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Lx(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...yu(r));
    }
  }), t;
}
function xr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ma(o, a) : o.dispatchEvent(a);
}
var ni = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Tx(e = () => {
}) {
  const t = We(e);
  Ee(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Lx(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Wx(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var $x = cu, Fx = du, Vx = fu, Bx = mu, zx = pu, Hx = vu, [wo] = Pe("Tooltip", [
  Rt
]), Co = Rt(), wu = "TooltipProvider", Yx = 700, ma = "tooltip.open", [Gx, ps] = wo(wu), Cu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Yx,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    Gx,
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
Cu.displayName = wu;
var Vn = "Tooltip", [Ux, tr] = wo(Vn), Su = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = ps(Vn, e.__scopeTooltip), d = Co(t), [f, m] = u.useState(null), p = we(), v = u.useRef(0), x = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, g = u.useRef(!1), [y, b] = Ie({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (k) => {
      k ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ma))) : l.onClose(), a == null || a(k);
    },
    caller: Vn
  }), w = u.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), N = u.useCallback(() => {
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
  }, []), /* @__PURE__ */ c.jsx(so, { ...d, children: /* @__PURE__ */ c.jsx(
    Ux,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? M() : N();
      }, [l.isOpenDelayedRef, M, N]),
      onTriggerLeave: u.useCallback(() => {
        x ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, x]),
      onOpen: N,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Su.displayName = Vn;
var pa = "TooltipTrigger", ku = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = tr(pa, n), a = ps(pa, n), s = Co(n), i = u.useRef(null), l = se(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      X.button,
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
ku.displayName = pa;
var hs = "TooltipPortal", [Kx, qx] = wo(hs, {
  forceMount: void 0
}), Nu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = tr(hs, t);
  return /* @__PURE__ */ c.jsx(Kx, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(De, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Nu.displayName = hs;
var dn = "TooltipContent", Mu = u.forwardRef(
  (e, t) => {
    const n = qx(dn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = tr(dn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(De, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Eu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(Xx, { side: o, ...a, ref: t }) });
  }
), Xx = u.forwardRef((e, t) => {
  const n = tr(dn, e.__scopeTooltip), r = ps(dn, e.__scopeTooltip), o = u.useRef(null), a = se(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), v = u.useCallback(
    (x, h) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, b = tb(y, g.getBoundingClientRect()), w = nb(y, b), N = rb(h.getBoundingClientRect()), C = ab([...w, ...N]);
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
        const g = h.target, y = { x: h.clientX, y: h.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), w = !ob(y, s);
        b ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(Eu, { ...e, ref: a });
}), [Zx, Qx] = wo(Vn, { isInside: !1 }), Jx = /* @__PURE__ */ im("TooltipContent"), Eu = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = tr(dn, n), d = Co(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(ma, f), () => document.removeEventListener(ma, f)), [f]), u.useEffect(() => {
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
          io,
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
              /* @__PURE__ */ c.jsx(Jx, { children: r }),
              /* @__PURE__ */ c.jsx(Zx, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(mm, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Mu.displayName = dn;
var Pu = "TooltipArrow", eb = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Co(n);
    return Qx(
      Pu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(co, { ...o, ...r, ref: t });
  }
);
eb.displayName = Pu;
function tb(e, t) {
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
function nb(e, t, n = 5) {
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
function rb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function ob(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function ab(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), sb(t);
}
function sb(e) {
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
var ib = Cu, cb = Su, lb = ku, db = Nu, ub = Mu;
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fb = {
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
const ke = (e, t, n, r) => {
  const o = tm(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => Mo(
      "svg",
      {
        ref: p,
        ...fb[e],
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
        l && Mo("title", { key: "svg-title" }, l),
        ...r.map(([v, x]) => Mo(v, x)),
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
const mb = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], pb = ke("outline", "alert-circle", "AlertCircle", mb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], vb = ke("outline", "calendar-event", "CalendarEvent", hb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Ru = ke("outline", "check", "Check", gb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], vs = ke("outline", "chevron-down", "ChevronDown", xb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], yb = ke("outline", "chevron-left-pipe", "ChevronLeftPipe", bb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Cb = ke("outline", "chevron-left", "ChevronLeft", wb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], kb = ke("outline", "chevron-right-pipe", "ChevronRightPipe", Sb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Au = ke("outline", "chevron-right", "ChevronRight", Nb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Eb = ke("outline", "circle-check", "CircleCheck", Mb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Rb = ke("outline", "cloud-up", "CloudUp", Pb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ab = [["path", { d: "M5 12l14 0", key: "svg-0" }]], Db = ke("outline", "minus", "Minus", Ab);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Du = ke("outline", "search", "Search", Ob);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], Ib = ke("outline", "trash-x", "TrashX", _b);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], ha = ke("outline", "x", "X", jb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Lb = ke("filled", "alert-circle-filled", "AlertCircleFilled", Tb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], Ou = ke("filled", "circle-check-filled", "CircleCheckFilled", Wb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], ri = ke("filled", "exclamation-circle-filled", "ExclamationCircleFilled", $b);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], oi = ke("filled", "folder-filled", "FolderFilled", Fb);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Rr = ke("filled", "info-circle-filled", "InfoCircleFilled", Vb), gs = "-", Bb = (e) => {
  const t = Hb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(gs);
      return i[0] === "" && i.length !== 1 && i.shift(), _u(i, t) || zb(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, _u = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? _u(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(gs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, ai = /^\[(.+)\]$/, zb = (e) => {
  if (ai.test(e)) {
    const t = ai.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Hb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    va(n[o], r, o, t);
  return r;
}, va = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : si(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Yb(o)) {
        va(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      va(s, si(t, a), n, r);
    });
  });
}, si = (e, t) => {
  let n = e;
  return t.split(gs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Yb = (e) => e.isThemeGetter, Gb = (e) => {
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
}, ga = "!", xa = ":", Ub = xa.length, Kb = (e) => {
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
        if (h === xa) {
          a.push(o.slice(l, x)), l = x + Ub;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? i++ : h === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = qb(f), p = m !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + xa, a = r;
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
}, qb = (e) => e.endsWith(ga) ? e.substring(0, e.length - 1) : e.startsWith(ga) ? e.substring(1) : e, Xb = (e) => {
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
}, Zb = (e) => ({
  cache: Gb(e.cacheSize),
  parseClassName: Kb(e),
  sortModifiers: Xb(e),
  ...Bb(e)
}), Qb = /\s+/, Jb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Qb);
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
    const b = a(p).join(":"), w = v ? b + ga : b, N = w + y;
    if (s.includes(N))
      continue;
    s.push(N);
    const C = o(y, g);
    for (let M = 0; M < C.length; ++M) {
      const k = C[M];
      s.push(w + k);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ey() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Iu(t)) && (r && (r += " "), r += n);
  return r;
}
const Iu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Iu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ii(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = Zb(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = Jb(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(ey.apply(null, arguments));
  };
}
const Ce = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ju = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Tu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ty = /^\d+\/\d+$/, ny = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ry = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ay = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Jt = (e) => ty.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), wt = (e) => !!e && Number.isInteger(Number(e)), $o = (e) => e.endsWith("%") && de(e.slice(0, -1)), ht = (e) => ny.test(e), iy = () => !0, cy = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ry.test(e) && !oy.test(e)
), Lu = () => !1, ly = (e) => ay.test(e), dy = (e) => sy.test(e), uy = (e) => !ee(e) && !te(e), fy = (e) => gn(e, Fu, Lu), ee = (e) => ju.test(e), jt = (e) => gn(e, Vu, cy), Fo = (e) => gn(e, gy, de), ci = (e) => gn(e, Wu, Lu), my = (e) => gn(e, $u, dy), br = (e) => gn(e, Bu, ly), te = (e) => Tu.test(e), An = (e) => xn(e, Vu), py = (e) => xn(e, xy), li = (e) => xn(e, Wu), hy = (e) => xn(e, Fu), vy = (e) => xn(e, $u), yr = (e) => xn(e, Bu, !0), gn = (e, t, n) => {
  const r = ju.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, xn = (e, t, n = !1) => {
  const r = Tu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Wu = (e) => e === "position" || e === "percentage", $u = (e) => e === "image" || e === "url", Fu = (e) => e === "length" || e === "size" || e === "bg-size", Vu = (e) => e === "length", gy = (e) => e === "number", xy = (e) => e === "family-name", Bu = (e) => e === "shadow", di = () => {
  const e = Ce("color"), t = Ce("font"), n = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), a = Ce("leading"), s = Ce("breakpoint"), i = Ce("container"), l = Ce("spacing"), d = Ce("radius"), f = Ce("shadow"), m = Ce("inset-shadow"), p = Ce("text-shadow"), v = Ce("drop-shadow"), x = Ce("blur"), h = Ce("perspective"), g = Ce("aspect"), y = Ce("ease"), b = Ce("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], C = () => [...N(), te, ee], M = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], P = () => [te, ee, l], W = () => [Jt, "full", "auto", ...P()], B = () => [wt, "none", "subgrid", te, ee], V = () => ["auto", {
    span: ["full", wt, te, ee]
  }, wt, te, ee], q = () => [wt, "auto", te, ee], Z = () => ["auto", "min", "max", "fr", te, ee], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...P()], Q = () => [Jt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], A = () => [e, te, ee], j = () => [...N(), li, ci, {
    position: [te, ee]
  }], R = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], G = () => ["auto", "cover", "contain", hy, fy, {
    size: [te, ee]
  }], E = () => [$o, An, jt], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], H = () => ["", de, An, jt], z = () => ["solid", "dashed", "dotted", "double"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [de, $o, li, ci], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", de, te, ee], re = () => ["none", de, te, ee], ie = () => [de, te, ee], ue = () => [Jt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ht],
      breakpoint: [ht],
      color: [iy],
      container: [ht],
      "drop-shadow": [ht],
      ease: ["in", "out", "in-out"],
      font: [uy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ht],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ht],
      shadow: [ht],
      spacing: ["px", de],
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
        aspect: ["auto", "square", Jt, ee, te, g]
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
        inset: W()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": W()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": W()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: W()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: W()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: W()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: W()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: W()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: W()
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
        z: [wt, "auto", te, ee]
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
        flex: [de, Jt, "auto", "initial", "none", ee]
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
        order: [wt, "first", "last", "none", te, ee]
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
        "grid-rows": B()
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
        justify: [...I(), "normal"]
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
        content: ["normal", ...I()]
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
        "place-content": I()
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
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
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
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...Q()]
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
          ...Q()
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
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, An, jt]
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
        font: [r, te, Fo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", $o, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [py, ee, t]
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
        "line-clamp": [de, "none", te, Fo]
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", te, jt]
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
          }, wt, te, ee],
          radial: ["", te, ee],
          conic: [wt, te, ee]
        }, vy, my]
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
        border: [...z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...z(), "hidden", "none"]
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
        outline: [...z(), "none", "hidden"]
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
        outline: ["", de, An, jt]
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
        "ring-offset": [de, jt]
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
        opacity: [de, te, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
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
        "mask-radial": [te, ee]
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
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [de]
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
        stroke: [de, An, jt, Fo]
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
}, by = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (In(e, "cacheSize", t), In(e, "prefix", n), In(e, "experimentalParseClassName", r), wr(e.theme, a.theme), wr(e.classGroups, a.classGroups), wr(e.conflictingClassGroups, a.conflictingClassGroups), wr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), In(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Cr(e.theme, o.theme), Cr(e.classGroups, o.classGroups), Cr(e.conflictingClassGroups, o.conflictingClassGroups), Cr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), zu(e, o, "orderSensitiveModifiers"), e), In = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, wr = (e, t) => {
  if (t)
    for (const n in t)
      In(e, n, t[n]);
}, Cr = (e, t) => {
  if (t)
    for (const n in t)
      zu(e, t, n);
}, zu = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, yy = (e, ...t) => typeof e == "function" ? ii(di, e, ...t) : ii(() => by(di(), e), ...t);
function Hu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Yu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hu(e)) && (r && (r += " "), r += t);
  return r;
}
const wy = yy({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), D = (...e) => wy(Yu(e)), Le = (e, t = {}) => {
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
}, Gu = S.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Ps,
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
    Ps,
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
Gu.displayName = "Accordion";
const Uu = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    Fm,
    {
      ref: n,
      className: D(
        `bg-surface-primary data-[disabled]:bg-surface-tertiary rounded-sm mt-2
        first:mt-0 overflow-hidden`,
        e
      ),
      ...t
    }
  )
);
Uu.displayName = "AccordionItem";
const Ku = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(Vm, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Bm,
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
        vs,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
Ku.displayName = "AccordionTrigger";
const qu = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  zm,
  {
    ref: r,
    className: D(
      "text-body-secondary px-md pt-md pb-xl overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
qu.displayName = "AccordionContent";
const pk = Object.assign(Gu, {
  Item: Uu,
  Trigger: Ku,
  Content: qu
}), ui = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, fi = Yu, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return fi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = ui(f) || ui(m);
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
  return fi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, mi = ae(
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
), Cy = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Lb : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Hr,
      {
        className: D(mi({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: D(mi({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && Le(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
Cy.displayName = "Badge";
const Sy = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Vo = ae(
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
), ky = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Ny = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Au,
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
        className: D(Sy({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: D(Vo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: D(
                  Vo({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: D(Vo({ isActive: !0 })),
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
                    className: D(ky({ size: t }))
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
Ny.displayName = "Breadcrumbs";
const My = ae(
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
), Xu = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    h0,
    {
      ref: s,
      className: D(My({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        v0,
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
Xu.displayName = "ProgressIndicator.Linear";
const Ey = ae("flex items-center", {
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
}), Py = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, zr = {
  sm: 12,
  md: 10
}, pi = {
  sm: (50 - zr.sm / 2).toString(),
  md: (50 - zr.md / 2).toString()
}, Zu = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: D(Ey({ size: t, layout: e }), r),
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
            className: D(Py[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: pi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: zr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: pi[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: zr[t],
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
Zu.displayName = "ProgressIndicator.Circular";
const xs = {
  Linear: Xu,
  Circular: Zu
}, Bo = ae(
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
), Sr = ae("", {
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
}), Ke = S.forwardRef(
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
    const m = a ? Hr : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: D(
          Bo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Le(r, {
              className: D(
                Sr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            Le(o, {
              className: D(
                Sr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(xs.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: D(
          Bo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          Le(r, {
            className: D(
              Sr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          Le(o, {
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
          Bo({ intent: e, size: t, textOnly: v, danger: i }),
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
function Ry(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const zo = {}, jn = {};
function Lt(e, t) {
  try {
    const r = (zo[e] || (zo[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in jn ? jn[r] : hi(r, r.split(":"));
  } catch {
    if (e in jn) return jn[e];
    const n = e == null ? void 0 : e.match(Ay);
    return n ? hi(e, n.slice(1)) : NaN;
  }
}
const Ay = /([+-]\d\d):?(\d\d)?/;
function hi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return jn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class lt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Lt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Qu(this), ba(this)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), ba(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new lt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const vi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!vi.test(e)) return;
  const t = e.replace(vi, "$1UTC");
  lt.prototype[t] && (e.startsWith("get") ? lt.prototype[e] = function() {
    return this.internal[t]();
  } : (lt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Dy(this), +this;
  }, lt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), ba(this), +this;
  }));
});
function ba(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Lt(e.timeZone, e) * 60));
}
function Dy(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Qu(e);
}
function Qu(e) {
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
  const p = Lt(e.timeZone, e), v = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, g = v !== n, y = h - l;
  if (g && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const b = Lt(e.timeZone, e), w = b > 0 ? Math.floor(b) : Math.ceil(b), N = v - w;
    N && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + N), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + N));
  }
}
class Oe extends lt {
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
    return `${t} GMT${n}${r}${o} (${Ry(this.timeZone, this)})`;
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
const Ju = 6048e5, Oy = 864e5, gi = Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && gi in e ? e[gi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ve(e, t) {
  return Se(t || e, e);
}
function ef(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Se(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function tf(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
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
let _y = {};
function nr() {
  return _y;
}
function un(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Bn(e, t) {
  return un(e, { ...t, weekStartsOn: 1 });
}
function nf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Se(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Bn(o), s = Se(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Bn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function xi(e) {
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
  const n = Se.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function zn(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function rf(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = zn(r), s = zn(o), i = +a - xi(a), l = +s - xi(s);
  return Math.round((i - l) / Oy);
}
function Iy(e, t) {
  const n = nf(e, t), r = Se(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Bn(r);
}
function jy(e, t, n) {
  return ef(e, t * 7, n);
}
function Ty(e, t, n) {
  return tf(e, t * 12, n);
}
function Ly(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const a = ve(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Se(r, n || NaN);
}
function Wy(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const a = ve(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Se(r, n || NaN);
}
function $y(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +zn(r) == +zn(o);
}
function of(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Fy(e) {
  return !(!of(e) && typeof e != "number" || isNaN(+ve(e)));
}
function Vy(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function By(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function zy(e, t) {
  const [n, r] = bn(e, t.start, t.end);
  return { start: n, end: r };
}
function Hy(e, t) {
  const { start: n, end: r } = zy(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Se(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Yy(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Gy(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function af(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function sf(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Uy(e, t) {
  return sf(e, { ...t, weekStartsOn: 1 });
}
const Ky = {
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
}, qy = (e, t, n) => {
  let r;
  const o = Ky[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Xy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Jy = {
  date: an({
    formats: Xy,
    defaultWidth: "full"
  }),
  time: an({
    formats: Zy,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Qy,
    defaultWidth: "full"
  })
}, ew = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, tw = (e, t, n, r) => ew[e];
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
const nw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, rw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ow = {
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
}, aw = {
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
}, sw = {
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
}, iw = {
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
}, cw = (e, t) => {
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
}, lw = {
  ordinalNumber: cw,
  era: st({
    values: nw,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: rw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: ow,
    defaultWidth: "wide"
  }),
  day: st({
    values: aw,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: sw,
    defaultWidth: "wide",
    formattingValues: iw,
    defaultFormattingWidth: "wide"
  })
};
function it(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? uw(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      dw(i, (m) => m.test(s))
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
function dw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function uw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function cf(e) {
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
const fw = /^(\d+)(th|st|nd|rd)?/i, mw = /\d+/i, pw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hw = {
  any: [/^b/i, /^(a|c)/i]
}, vw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, xw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bw = {
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
}, yw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ww = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Cw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Sw = {
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
}, kw = {
  ordinalNumber: cf({
    matchPattern: fw,
    parsePattern: mw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: it({
    matchPatterns: pw,
    defaultMatchWidth: "wide",
    parsePatterns: hw,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: vw,
    defaultMatchWidth: "wide",
    parsePatterns: gw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: xw,
    defaultMatchWidth: "wide",
    parsePatterns: bw,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: yw,
    defaultMatchWidth: "wide",
    parsePatterns: ww,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: Cw,
    defaultMatchWidth: "any",
    parsePatterns: Sw,
    defaultParseWidth: "any"
  })
}, bs = {
  code: "en-US",
  formatDistance: qy,
  formatLong: Jy,
  formatRelative: tw,
  localize: lw,
  match: kw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Nw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in);
  return rf(n, af(n)) + 1;
}
function lf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +Bn(n) - +Iy(n);
  return Math.round(r / Ju) + 1;
}
function df(e, t) {
  var f, m, p, v;
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = nr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Se((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = un(s, t), l = Se((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = un(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function Mw(e, t) {
  var i, l, d, f;
  const n = nr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = df(e, t), a = Se((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), un(a, t);
}
function uf(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = +un(n, t) - +Mw(n, t);
  return Math.round(r / Ju) + 1;
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
}, bi = {
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
    const o = df(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = nf(e);
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
    const o = uf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = lf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Nw(e);
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
        return wi(r);
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
        return wi(r);
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
        return "GMT" + yi(r, ":");
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
        return "GMT" + yi(r, ":");
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
function yi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function wi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : Tt(e, t);
}
function Tt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const Ci = (e, t) => {
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
}, ff = (e, t) => {
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
}, Ew = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ci(e, t);
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
  return a.replace("{{date}}", Ci(r, t)).replace("{{time}}", ff(o, t));
}, Pw = {
  p: ff,
  P: Ew
}, Rw = /^D+$/, Aw = /^Y+$/, Dw = ["D", "DD", "YY", "YYYY"];
function Ow(e) {
  return Rw.test(e);
}
function _w(e) {
  return Aw.test(e);
}
function Iw(e, t, n) {
  const r = jw(e, t, n);
  if (console.warn(r), Dw.includes(e)) throw new RangeError(r);
}
function jw(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Tw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ww = /^'([^]*?)'?$/, $w = /''/g, Fw = /[a-zA-Z]/;
function Vw(e, t, n) {
  var f, m, p, v, x, h, g, y;
  const r = nr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? bs, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, i = ve(e, n == null ? void 0 : n.in);
  if (!Fy(i))
    throw new RangeError("Invalid time value");
  let l = t.match(Lw).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const N = Pw[w];
      return N(b, o.formatLong);
    }
    return b;
  }).join("").match(Tw).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: Bw(b) };
    if (bi[w])
      return { isToken: !0, value: b };
    if (w.match(Fw))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && _w(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Ow(w)) && Iw(w, t, String(e));
    const N = bi[w[0]];
    return N(i, w, o.localize, d);
  }).join("");
}
function Bw(e) {
  const t = e.match(Ww);
  return t ? t[1].replace($w, "'") : e;
}
function zw(e, t) {
  const n = ve(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Se(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Hw(e, t) {
  return ve(e, t == null ? void 0 : t.in).getMonth();
}
function Yw(e, t) {
  return ve(e, t == null ? void 0 : t.in).getFullYear();
}
function Gw(e, t) {
  return +ve(e) > +ve(t);
}
function Uw(e, t) {
  return +ve(e) < +ve(t);
}
function Kw(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function qw(e, t, n) {
  const [r, o] = bn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Xw(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Se(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = zw(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Zw(e, t, n) {
  const r = ve(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Se(e, NaN) : (r.setFullYear(t), r);
}
const Si = 5, Qw = 4;
function Jw(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Si * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Si : Qw;
}
function mf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function e1(e, t) {
  const n = mf(e, t), r = Jw(e, t);
  return t.addDays(n, r * 7 - 1);
}
class He {
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
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : ef(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : tf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : jy(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Ty(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : rf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Vy(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Hy(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : e1(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Uy(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : By(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : sf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Gy(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Vw(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : lf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Hw(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Yw(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : uf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : Gw(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : Uw(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : of(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : $y(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : Kw(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : qw(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Ly(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Wy(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : Xw(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : Zw(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : mf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : zn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Bn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Yy(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : un(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : af(r);
    }, this.options = { locale: bs, ...t }, this.overrides = n;
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
    return t && He.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && He.yearFirstLocales.has(a))
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
He.yearFirstLocales = /* @__PURE__ */ new Set([
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
const mt = new He();
class pf {
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
class t1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class n1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function r1(e) {
  return S.createElement("button", { ...e });
}
function o1(e) {
  return S.createElement("span", { ...e });
}
function a1(e) {
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
function s1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function i1(e) {
  const { day: t, modifiers: n, ...r } = e, o = S.useRef(null);
  return S.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), S.createElement("button", { ref: o, ...r });
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
var Ve;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ve || (Ve = {}));
function c1(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[ne.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[ne.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => S.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    S.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function l1(e) {
  return S.createElement("div", { ...e });
}
function d1(e) {
  return S.createElement("div", { ...e });
}
function u1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function f1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function m1(e) {
  return S.createElement("table", { ...e });
}
function p1(e) {
  return S.createElement("div", { ...e });
}
const hf = ka(void 0);
function rr() {
  const e = Na(hf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function h1(e) {
  const { components: t } = rr();
  return S.createElement(t.Dropdown, { ...e });
}
function v1(e) {
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
      { type: "button", className: i[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[ne.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ne.Chevron] })
    )
  );
}
function g1(e) {
  const { components: t } = rr();
  return S.createElement(t.Button, { ...e });
}
function x1(e) {
  return S.createElement("option", { ...e });
}
function b1(e) {
  const { components: t } = rr();
  return S.createElement(t.Button, { ...e });
}
function y1(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function w1(e) {
  return S.createElement("select", { ...e });
}
function C1(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function S1(e) {
  return S.createElement("th", { ...e });
}
function k1(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function N1(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function M1(e) {
  return S.createElement("th", { ...e });
}
function E1(e) {
  return S.createElement("tbody", { ...e });
}
function P1(e) {
  const { components: t } = rr();
  return S.createElement(t.Dropdown, { ...e });
}
const R1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: r1,
  CaptionLabel: o1,
  Chevron: a1,
  Day: s1,
  DayButton: i1,
  Dropdown: c1,
  DropdownNav: l1,
  Footer: d1,
  Month: u1,
  MonthCaption: f1,
  MonthGrid: m1,
  Months: p1,
  MonthsDropdown: h1,
  Nav: v1,
  NextMonthButton: g1,
  Option: x1,
  PreviousMonthButton: b1,
  Root: y1,
  Select: w1,
  Week: C1,
  WeekNumber: N1,
  WeekNumberHeader: M1,
  Weekday: S1,
  Weekdays: k1,
  Weeks: E1,
  YearsDropdown: P1
}, Symbol.toStringTag, { value: "Module" }));
function vt(e, t, n = !1, r = mt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function vf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ys(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function gf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function xf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function bf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function yf(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function gt(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (yf(i, n))
      return i.includes(e);
    if (ys(i))
      return vt(i, e, !1, n);
    if (bf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (vf(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return gf(i) ? a(e, i.after) > 0 : xf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function A1(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, y = n && v(n), b = r && h(r), w = {
    [be.focused]: [],
    [be.outside]: [],
    [be.disabled]: [],
    [be.hidden]: [],
    [be.today]: []
  }, N = {};
  for (const C of e) {
    const { date: M, displayMonth: k } = C, P = !!(k && !p(M, k)), W = !!(y && x(M, y)), B = !!(b && g(M, b)), V = !!(a && gt(M, a, o)), q = !!(s && gt(M, s, o)) || W || B || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, Z = m(M, f ?? o.today());
    P && w.outside.push(C), V && w.disabled.push(C), q && w.hidden.push(C), Z && w.today.push(C), i && Object.keys(i).forEach((I) => {
      const U = i == null ? void 0 : i[I];
      U && gt(M, U, o) && (N[I] ? N[I].push(C) : N[I] = [C]);
    });
  }
  return (C) => {
    const M = {
      [be.focused]: !1,
      [be.disabled]: !1,
      [be.hidden]: !1,
      [be.outside]: !1,
      [be.today]: !1
    }, k = {};
    for (const P in w) {
      const W = w[P];
      M[P] = W.some((B) => B === C);
    }
    for (const P in N)
      k[P] = N[P].some((W) => W === C);
    return {
      ...M,
      // custom modifiers should override all the previous ones
      ...k
    };
  };
}
function D1(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[be[a]] ? o.push(t[be[a]]) : t[Ze[a]] && o.push(t[Ze[a]]), o), [t[ne.Day]]);
}
function O1(e) {
  return {
    ...R1,
    ...e
  };
}
function _1(e) {
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
function wf() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in be)
    e[be[t]] = `rdp-${be[t]}`;
  for (const t in Ze)
    e[Ze[t]] = `rdp-${Ze[t]}`;
  for (const t in Ve)
    e[Ve[t]] = `rdp-${Ve[t]}`;
  return e;
}
function Cf(e, t, n) {
  return (n ?? new He(t)).formatMonthYear(e);
}
const I1 = Cf;
function j1(e, t, n) {
  return (n ?? new He(t)).format(e, "d");
}
function T1(e, t = mt) {
  return t.format(e, "LLLL");
}
function L1(e, t, n) {
  return (n ?? new He(t)).format(e, "cccccc");
}
function W1(e, t = mt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function $1() {
  return "";
}
function Sf(e, t = mt) {
  return t.format(e, "yyyy");
}
const F1 = Sf, V1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Cf,
  formatDay: j1,
  formatMonthCaption: I1,
  formatMonthDropdown: T1,
  formatWeekNumber: W1,
  formatWeekNumberHeader: $1,
  formatWeekdayName: L1,
  formatYearCaption: F1,
  formatYearDropdown: Sf
}, Symbol.toStringTag, { value: "Module" }));
function B1(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...V1,
    ...e
  };
}
function z1(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function H1(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Y1(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function G1(e, t, n, r, o = !1) {
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
function kf(e, t, n, r) {
  let o = (r ?? new He(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const U1 = kf;
function Nf(e, t, n) {
  return (n ?? new He(t)).formatMonthYear(e);
}
const K1 = Nf;
function q1(e, t, n, r) {
  let o = (r ?? new He(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function X1(e) {
  return "Choose the Month";
}
function Z1() {
  return "";
}
function Q1(e) {
  return "Go to the Next Month";
}
function J1(e) {
  return "Go to the Previous Month";
}
function e2(e, t, n) {
  return (n ?? new He(t)).format(e, "cccc");
}
function t2(e, t) {
  return `Week ${e}`;
}
function n2(e) {
  return "Week Number";
}
function r2(e) {
  return "Choose the Year";
}
const o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: K1,
  labelDay: U1,
  labelDayButton: kf,
  labelGrid: Nf,
  labelGridcell: q1,
  labelMonthDropdown: X1,
  labelNav: Z1,
  labelNext: Q1,
  labelPrevious: J1,
  labelWeekNumber: t2,
  labelWeekNumberHeader: n2,
  labelWeekday: e2,
  labelYearDropdown: r2
}, Symbol.toStringTag, { value: "Module" })), or = (e) => e instanceof HTMLElement ? e : null, Ho = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], a2 = (e) => or(e.querySelector("[data-animated-month]")), Yo = (e) => or(e.querySelector("[data-animated-caption]")), Go = (e) => or(e.querySelector("[data-animated-weeks]")), s2 = (e) => or(e.querySelector("[data-animated-nav]")), i2 = (e) => or(e.querySelector("[data-animated-weekdays]"));
function c2(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Tn(null), i = Tn(r), l = Tn(!1);
  Ti(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[Ve.caption_after_enter] : n[Ve.caption_before_enter], v = m ? n[Ve.weeks_after_enter] : n[Ve.weeks_before_enter], x = s.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Ho(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const N = a2(w);
      N && w.contains(N) && w.removeChild(N);
      const C = Yo(w);
      C && C.classList.remove(p);
      const M = Go(w);
      M && M.classList.remove(v);
    }), s.current = h) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? Ho(x) : [], y = Ho(e.current);
    if (y != null && y.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = s2(e.current);
      b && (b.style.zIndex = "1"), y.forEach((w, N) => {
        const C = g[N];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const M = Yo(w);
        M && M.classList.add(p);
        const k = Go(w);
        k && k.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(p), k && k.classList.remove(v), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const W = i2(C);
        W && (W.style.opacity = "0");
        const B = Yo(C);
        B && (B.classList.add(m ? n[Ve.caption_before_exit] : n[Ve.caption_after_exit]), B.addEventListener("animationend", P));
        const V = Go(C);
        V && V.classList.add(m ? n[Ve.weeks_before_exit] : n[Ve.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function l2(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: y, startOfISOWeek: b, startOfWeek: w } = r, N = l ? y(o, r) : s ? b(o) : w(o), C = l ? p(a) : s ? v(x(a)) : h(x(a)), M = f(C, N), k = m(a, o) + 1, P = [];
  for (let V = 0; V <= M; V++) {
    const q = d(N, V);
    if (t && g(q, t))
      break;
    P.push(q);
  }
  const B = (l ? 35 : 42) * k;
  if (i && P.length < B) {
    const V = B - P.length;
    for (let q = 0; q < V; q++) {
      const Z = d(P[P.length - 1], 1);
      P.push(Z);
    }
  }
  return P;
}
function d2(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function u2(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function ki(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function f2(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: v } = r, x = e.reduce((h, g) => {
    const y = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : v(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), w = t.filter((k) => k >= y && k <= b), N = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < N) {
      const k = t.filter((P) => {
        const W = N - w.length;
        return P > b && P <= o(b, W);
      });
      w.push(...k);
    }
    const C = w.reduce((k, P) => {
      const W = n.ISOWeek ? d(P) : f(P), B = k.find((q) => q.weekNumber === W), V = new pf(P, g, r);
      return B ? B.days.push(V) : k.push(new n1(W, [V])), k;
    }, []), M = new t1(g, C);
    return h.push(M), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function m2(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : v ? r = f(v, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function p2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function h2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function v2(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function So(e, t) {
  const [n, r] = sn(e);
  return [t === void 0 ? n : t, r];
}
function g2(e, t) {
  const [n, r] = m2(e, t), { startOfMonth: o, endOfMonth: a } = t, s = ki(e, n, r, t), [i, l] = So(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Li(() => {
    const M = ki(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const d = u2(i, r, e, t), f = l2(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = f2(d, f, e, t), p = v2(m), v = d2(m), x = h2(i, n, e, t), h = p2(i, r, e, t), { disableNavigation: g, onMonthChange: y } = e, b = (M) => p.some((k) => k.days.some((P) => P.isEqualTo(M))), w = (M) => {
    if (g)
      return;
    let k = o(M);
    n && k < o(n) && (k = o(n)), r && k > o(r) && (k = o(r)), l(k), y == null || y(k);
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
function Ni(e) {
  return !e[be.disabled] && !e[be.hidden] && !e[be.outside];
}
function x2(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Ni(i) && (i[be.focused] && a < ot.FocusedModifier ? (o = s, a = ot.FocusedModifier) : r != null && r.isEqualTo(s) && a < ot.LastFocused ? (o = s, a = ot.LastFocused) : n(s.date) && a < ot.Selected ? (o = s, a = ot.Selected) : i[be.today] && a < ot.Today && (o = s, a = ot.Today));
  }
  return o || (o = e.find((s) => Ni(t(s)))), o;
}
function b2(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: x, endOfWeek: h, max: g, min: y, startOfBroadcastWeek: b, startOfISOWeek: w, startOfWeek: N } = s;
  let M = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (k) => l ? b(k, s) : i ? w(k) : N(k),
    endOfWeek: (k) => l ? v(k) : i ? x(k) : h(k)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? M = g([r, M]) : t === "after" && o && (M = y([o, M])), M;
}
function Mf(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = b2(e, t, n.date, r, o, a, s), d = !!(a.disabled && gt(l, a.disabled, s)), f = !!(a.hidden && gt(l, a.hidden, s)), m = l, p = new pf(l, m, s);
  return !d && !f ? p : Mf(e, t, p, r, o, a, s, i + 1);
}
function y2(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = sn(), l = x2(t.days, n, r || (() => !1), s), [d, f] = sn(a ? l : void 0);
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
      const y = Mf(h, g, d, t.navStart, t.navEnd, e, o);
      y && (t.goToDay(y), f(y));
    }
  };
}
function w2(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = So(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (v) => (i == null ? void 0 : i.some((x) => l(x, v))) ?? !1, { min: f, max: m } = e;
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
function C2(e, t, n = 0, r = 0, o = !1, a = mt) {
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
function S2(e, t, n = mt) {
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
function Mi(e, t, n = mt) {
  return vt(e, t.from, !1, n) || vt(e, t.to, !1, n) || vt(t, e.from, !1, n) || vt(t, e.to, !1, n);
}
function k2(e, t, n = mt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? vt(e, i, !1, n) : yf(i, n) ? i.some((l) => vt(e, l, !1, n)) : ys(i) ? i.from && i.to ? Mi(e, { from: i.from, to: i.to }, n) : !1 : bf(i) ? S2(e, i.dayOfWeek, n) : vf(i) ? n.isAfter(i.before, i.after) ? Mi(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : gt(e.from, i, n) || gt(e.to, i, n) : gf(i) || xf(i) ? gt(e.from, i, n) || gt(e.to, i, n) : !1))
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
function N2(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = So(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, y = p ? C2(p, d, h, g, a, t) : void 0;
      return r && n && (y != null && y.from) && y.to && k2({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), s || l(y), s == null || s(y, p, v, x), y;
    },
    isSelected: (p) => d && vt(d, p, !1, t)
  };
}
function M2(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = So(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, v) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, v), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function E2(e, t) {
  const n = M2(e, t), r = w2(e, t), o = N2(e, t);
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
function P2(e) {
  var Nn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Oe(t.today, t.timeZone)), t.month && (t.month = new Oe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Oe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Oe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Oe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Oe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Nn = t.selected) == null ? void 0 : Nn.map((ce) => new Oe(ce, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Oe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Oe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Eo(() => {
    const ce = { ...bs, ...t.locale };
    return {
      dateLib: new He({
        locale: ce,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: O1(t.components),
      formatters: B1(t.formatters),
      labels: { ...o2, ...t.labels },
      locale: ce,
      classNames: { ...wf(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: y, onNextClick: b, onPrevClick: w, showWeekNumber: N, styles: C } = t, { formatCaption: M, formatDay: k, formatMonthDropdown: P, formatWeekNumber: W, formatWeekNumberHeader: B, formatWeekdayName: V, formatYearDropdown: q } = r, Z = g2(t, a), { days: I, months: U, navStart: T, navEnd: Q, previousMonth: A, nextMonth: j, goToMonth: R } = Z, G = A1(I, t, T, Q, a), { isSelected: E, select: _, selected: H } = E2(t, a) ?? {}, { blur: z, focused: $, isFocusTarget: O, moveFocus: Y, setFocused: J } = y2(t, Z, G, E ?? (() => !1), a), { labelDayButton: re, labelGridcell: ie, labelGrid: ue, labelMonthDropdown: Ne, labelNav: _e, labelPrevious: nt, labelNext: qe, labelWeekday: rt, labelWeekNumber: Ut, labelWeekNumberHeader: Te, labelYearDropdown: _t } = o, ir = Eo(() => Y1(a, t.ISOWeek), [a, t.ISOWeek]), yn = d !== void 0 || v !== void 0, Kt = Me(() => {
    A && (R(A), w == null || w(A));
  }, [A, R, w]), qt = Me(() => {
    j && (R(j), b == null || b(j));
  }, [R, j, b]), wn = Me((ce, xe) => (oe) => {
    oe.preventDefault(), oe.stopPropagation(), J(ce), _ == null || _(ce.date, xe, oe), v == null || v(ce.date, xe, oe);
  }, [_, v, J]), Cn = Me((ce, xe) => (oe) => {
    J(ce), x == null || x(ce.date, xe, oe);
  }, [x, J]), cr = Me((ce, xe) => (oe) => {
    z(), p == null || p(ce.date, xe, oe);
  }, [z, p]), Ye = Me((ce, xe) => (oe) => {
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
      const [Re, pe] = ge[oe.key];
      Y(Re, pe);
    }
    h == null || h(ce.date, xe, oe);
  }, [Y, h, t.dir]), Ge = Me((ce, xe) => (oe) => {
    g == null || g(ce.date, xe, oe);
  }, [g]), Sn = Me((ce, xe) => (oe) => {
    y == null || y(ce.date, xe, oe);
  }, [y]), Cs = Me((ce) => (xe) => {
    const oe = Number(xe.target.value), ge = a.setMonth(a.startOfMonth(ce), oe);
    R(ge);
  }, [a, R]), pt = Me((ce) => (xe) => {
    const oe = Number(xe.target.value), ge = a.setYear(a.startOfMonth(ce), oe);
    R(ge);
  }, [a, R]), { className: Fe, style: It } = Eo(() => ({
    className: [i[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[ne.Root], ...t.style }
  }), [i, t.className, t.style, C]), No = _1(t), lr = Tn(null);
  c2(lr, !!t.animate, {
    classNames: i,
    months: U,
    focused: $,
    dateLib: a
  });
  const kn = {
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
  return S.createElement(
    hf.Provider,
    { value: kn },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? lr : void 0, className: Fe, style: It, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...No },
      S.createElement(
        n.Months,
        { className: i[ne.Months], style: C == null ? void 0 : C[ne.Months] },
        !t.hideNavigation && !f && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Kt, onNextClick: qt, previousMonth: A, nextMonth: j }),
        U.map((ce, xe) => S.createElement(
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
          f === "around" && !t.hideNavigation && xe === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[ne.PreviousMonthButton], tabIndex: A ? void 0 : -1, "aria-disabled": A ? void 0 : !0, "aria-label": nt(A), onClick: Kt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: A ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[ne.MonthCaption], style: C == null ? void 0 : C[ne.MonthCaption], calendarMonth: ce, displayIndex: xe }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[ne.Dropdowns], style: C == null ? void 0 : C[ne.Dropdowns] },
            (() => {
              const oe = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[ne.MonthsDropdown], "aria-label": Ne(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Cs(ce.date), options: z1(ce.date, T, Q, r, a), style: C == null ? void 0 : C[ne.Dropdown], value: a.getMonth(ce.date) }) : S.createElement("span", { key: "month" }, P(ce.date, a)), ge = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[ne.YearsDropdown], "aria-label": _t(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: pt(ce.date), options: G1(T, Q, r, a, !!t.reverseYears), style: C == null ? void 0 : C[ne.Dropdown], value: a.getYear(ce.date) }) : S.createElement("span", { key: "year" }, q(ce.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ge, oe] : [oe, ge];
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
            S.createElement(n.CaptionLabel, { className: i[ne.CaptionLabel], role: "status", "aria-live": "polite" }, M(ce.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && xe === m - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[ne.NextMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": qe(j), onClick: qt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          xe === m - 1 && f === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": _e(), onPreviousClick: Kt, onNextClick: qt, previousMonth: A, nextMonth: j }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(ce.date, a.options, a) || void 0, className: i[ne.MonthGrid], style: C == null ? void 0 : C[ne.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[ne.Weekdays], style: C == null ? void 0 : C[ne.Weekdays] },
              N && S.createElement(n.WeekNumberHeader, { "aria-label": Te(a.options), className: i[ne.WeekNumberHeader], style: C == null ? void 0 : C[ne.WeekNumberHeader], scope: "col" }, B()),
              ir.map((oe) => S.createElement(n.Weekday, { "aria-label": rt(oe, a.options, a), className: i[ne.Weekday], key: String(oe), style: C == null ? void 0 : C[ne.Weekday], scope: "col" }, V(oe, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[ne.Weeks], style: C == null ? void 0 : C[ne.Weeks] }, ce.weeks.map((oe) => S.createElement(
              n.Week,
              { className: i[ne.Week], key: oe.weekNumber, style: C == null ? void 0 : C[ne.Week], week: oe },
              N && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: oe, style: C == null ? void 0 : C[ne.WeekNumber], "aria-label": Ut(oe.weekNumber, {
                locale: s
              }), className: i[ne.WeekNumber], scope: "row", role: "rowheader" }, W(oe.weekNumber, a)),
              oe.days.map((ge) => {
                const { date: Re } = ge, pe = G(ge);
                if (pe[be.focused] = !pe.hidden && !!($ != null && $.isEqualTo(ge)), pe[Ze.selected] = (E == null ? void 0 : E(Re)) || pe.selected, ys(H)) {
                  const { from: K, to: le } = H;
                  pe[Ze.range_start] = !!(K && le && a.isSameDay(Re, K)), pe[Ze.range_end] = !!(K && le && a.isSameDay(Re, le)), pe[Ze.range_middle] = vt(H, Re, !0, a);
                }
                const Mn = H1(pe, C, t.modifiersStyles), dr = D1(pe, i, t.modifiersClassNames), L = !yn && !pe.hidden ? ie(Re, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format(Re, "yyyy-MM-dd")}_${a.format(ge.displayMonth, "yyyy-MM")}`, day: ge, modifiers: pe, className: dr.join(" "), style: Mn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": L, "data-day": a.format(Re, "yyyy-MM-dd"), "data-month": ge.outside ? a.format(Re, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && yn ? S.createElement(n.DayButton, { className: i[ne.DayButton], style: C == null ? void 0 : C[ne.DayButton], type: "button", day: ge, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: O(ge) ? 0 : -1, "aria-label": re(Re, pe, a.options, a), onClick: wn(ge, pe), onBlur: cr(ge, pe), onFocus: Cn(ge, pe), onKeyDown: Ye(ge, pe), onMouseEnter: Ge(ge, pe), onMouseLeave: Sn(ge, pe) }, k(Re, a.options, a)) : !pe.hidden && k(ge.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      S.createElement(n.Footer, { className: i[ne.Footer], style: C == null ? void 0 : C[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const R2 = {
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
}, A2 = (e, t, n) => {
  n = n || {};
  let r;
  const o = R2[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, D2 = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, O2 = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, _2 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, I2 = {
  date: an({
    formats: D2,
    defaultWidth: "full"
  }),
  time: an({
    formats: O2,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: _2,
    defaultWidth: "full"
  })
}, j2 = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, T2 = (e, t, n, r) => j2[e], L2 = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, W2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, $2 = {
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
}, F2 = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, V2 = {
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
}, B2 = {
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
}, z2 = (e, t) => {
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
}, H2 = {
  ordinalNumber: z2,
  era: st({
    values: L2,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: W2,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: st({
    values: $2,
    defaultWidth: "wide"
  }),
  day: st({
    values: F2,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: V2,
    defaultWidth: "wide",
    formattingValues: B2,
    defaultFormattingWidth: "wide"
  })
}, Y2 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, G2 = /\d+/i, U2 = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, K2 = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, q2 = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, X2 = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, Z2 = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, Q2 = {
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
}, J2 = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, eC = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, tC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, nC = {
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
}, rC = {
  ordinalNumber: cf({
    matchPattern: Y2,
    parsePattern: G2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: it({
    matchPatterns: U2,
    defaultMatchWidth: "wide",
    parsePatterns: K2,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: q2,
    defaultMatchWidth: "wide",
    parsePatterns: X2,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: Z2,
    defaultMatchWidth: "wide",
    parsePatterns: Q2,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: J2,
    defaultMatchWidth: "wide",
    parsePatterns: eC,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: tC,
    defaultMatchWidth: "any",
    parsePatterns: nC,
    defaultParseWidth: "any"
  })
}, Ei = {
  code: "ja",
  formatDistance: A2,
  formatLong: I2,
  formatRelative: T2,
  localize: H2,
  match: rC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, oC = {
  ...Ei,
  localize: {
    ...Ei.localize,
    day: (e) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e] || ""
  }
}, aC = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, kr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Ef = S.forwardRef(
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
    const [x, h] = S.useState(
      () => kr(n || null)
    ), g = e !== void 0, y = g ? kr(e) : x, b = S.useMemo(
      () => kr(r || null),
      [r]
    ), w = S.useMemo(
      () => kr(o || null),
      [o]
    ), N = S.useMemo(() => !b || !w ? !0 : b <= w, [b, w]), C = (M) => {
      const k = M || null;
      g || h(k), t == null || t(k);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: D(aC(m), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          P2,
          {
            animate: d,
            mode: "single",
            selected: y || void 0,
            onSelect: C,
            locale: oC,
            disabled: N ? [
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
              const M = wf(), k = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${M.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
Ef.displayName = "Calendar";
const Pi = ae(
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
), sC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Pf = S.forwardRef(
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
    const d = r ? Hr : "a", m = sC[n === "inherit" ? "md" : n];
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
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Le(o, { size: m }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Le(a, { size: m }) })
        ]
      }
    );
  }
);
Pf.displayName = "TextLink";
const iC = ae(
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
), cC = ae("shrink-0", {
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
}), lC = ae("text-body-primary font-bold text-md"), dC = ae(
  "text-body-primary font-normal leading-6 text-md"
), uC = {
  info: Rr,
  success: Ou,
  warning: Rr,
  alert: Rr
}, fC = S.forwardRef(
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
    const f = i || uC[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: D(iC({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: D(cC({ intent: t, size: n }), "top-0.5 relative"), children: Le(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "min-w-0 gap-xxs flex flex-1 flex-col", children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: D(lC()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                Pf,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: D(dC()), children: a || o })
          ] })
        ]
      }
    );
  }
);
fC.displayName = "Callout";
const mC = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), pC = ae(
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
  return /* @__PURE__ */ c.jsxs("div", { className: D(mC({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      Dc,
      {
        id: l,
        className: D(pC({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          _c,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(Db, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(Ru, { style: { strokeWidth: 3 } })
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
const hC = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: D("gap-xs flex flex-col", t), children: e });
hC.displayName = "CheckboxGroup";
const vC = ae(
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
), gC = ae(
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
), Uo = ae(
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
), Rf = S.forwardRef(
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
    return /* @__PURE__ */ c.jsxs("div", { className: D(vC({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Uo({ position: "prefix", interactive: !1 }),
          children: Le(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: gC({ hasPrefix: d, hasTrailing: f }),
          ...i
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Uo({
            position: "trailing",
            interactive: !0
          }),
          disabled: i.disabled,
          onClick: r,
          children: Le(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Uo({
            position: "trailing",
            interactive: !1
          }),
          children: Le(n, { size: o })
        }
      ) })
    ] });
  }
);
Rf.displayName = "Input";
const xC = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Nr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, bC = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), yC = S.forwardRef(
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
    formatDate: f = bC,
    className: m,
    contentClassName: p,
    defaultOpen: v = !1,
    open: x,
    onOpenChange: h,
    side: g = "bottom"
  }, y) => {
    const [b, w] = S.useState(
      () => Nr(n || null)
    ), [N, C] = S.useState(v), M = e !== void 0, k = M ? Nr(e) : b, P = x !== void 0 ? x : N, W = S.useMemo(
      () => Nr(r || null),
      [r]
    ), B = S.useMemo(
      () => Nr(o || null),
      [o]
    ), V = S.useMemo(() => !W || !B ? !0 : W <= B, [W, B]), q = (T) => {
      const Q = T || null;
      M || w(Q), t == null || t(Q), Q && (x === void 0 && C(!1), h == null || h(!1));
    }, Z = (T) => {
      x === void 0 && C(T), h == null || h(T);
    }, I = (T) => {
      switch (T.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          T.preventDefault(), P || Z(!0);
          break;
        case "Escape":
          P && (T.preventDefault(), Z(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(Ql, { open: P, onOpenChange: Z, children: [
      /* @__PURE__ */ c.jsx(Jl, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Rf,
        {
          ref: y,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: k ? f(k) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || vb,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && Z(!P),
          className: D(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            P && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: I,
          onClick: () => !a && Z(!P),
          "aria-expanded": P,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(ed, { children: /* @__PURE__ */ c.jsx(
        ss,
        {
          className: D(xC, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: g,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => Z(!1),
          onPointerDownOutside: () => Z(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            Ef,
            {
              value: k,
              onChange: q,
              ...W && { minDate: W },
              ...B && { maxDate: B },
              disabled: !V,
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
yC.displayName = "DatePicker";
const wC = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], hk = ({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  busy: o,
  actions: a = wC,
  cancellable: s = !0,
  cancelButtonLabel: i = "キャンセル"
}) => {
  const [l, d] = S.useState(-1), m = o !== void 0 ? o : l !== -1, p = async (x) => {
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
  return /* @__PURE__ */ c.jsx(Ta, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(La, { children: /* @__PURE__ */ c.jsx(
    Wa,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        $a,
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
                  Pc,
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
              s && /* @__PURE__ */ c.jsx(Fa, { asChild: !0, children: /* @__PURE__ */ c.jsx(
                Ke,
                {
                  intent: "tertiary",
                  onClick: v,
                  disabled: m,
                  children: i
                }
              ) }),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${s ? "" : "ml-auto"}`, children: a.map((x, h) => {
                const { label: g, classNames: y, onAction: b, value: w, ...N } = x;
                return /* @__PURE__ */ c.jsx(
                  Ke,
                  {
                    loading: l === h,
                    ...N,
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
}, Af = ka(void 0), Df = () => {
  const e = Na(Af);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, CC = ({
  isOpen: e,
  onClose: t,
  children: n,
  initialStep: r = 0,
  currentStep: o,
  onStepChange: a
}) => {
  const [s, i] = sn(r), l = o !== void 0 ? o : s, d = S.Children.toArray(n).filter(
    (g) => S.isValidElement(g) && g.type === Of
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
  return /* @__PURE__ */ c.jsx(Af.Provider, { value: x, children: /* @__PURE__ */ c.jsx(Ta, { open: e, onOpenChange: h, children: /* @__PURE__ */ c.jsx(La, { children: /* @__PURE__ */ c.jsx(
    Wa,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        $a,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform overflow-auto`,
          children: d[l]
        }
      )
    }
  ) }) }) });
}, Of = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), SC = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  Pc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), kC = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary min-h-40 flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), NC = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
  /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && /* @__PURE__ */ c.jsx(Fa, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ke, { intent: "tertiary", onClick: r, children: n }) }) }),
  e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
] }), MC = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Df(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(Fa, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ke, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ke, { ...o, onClick: i, children: e });
}, vk = {
  Root: CC,
  Step: Of,
  Header: SC,
  Body: kC,
  Footer: NC,
  Action: MC,
  useMultiStepDialog: Df
}, EC = ae(
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
), PC = ae(
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
), RC = S.forwardRef(
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
      className: D(PC({ intent: r }), a),
      ...s
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(Zg, { ...l, children: [
      Le(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
RC.displayName = "DropdownItem";
const AC = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Qg,
  {
    ref: n,
    className: D(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
AC.displayName = "DropdownSeparator";
const DC = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Xg,
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
DC.displayName = "DropdownLabel";
const OC = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Kg, { children: /* @__PURE__ */ c.jsx(
  qg,
  {
    ref: o,
    className: D(EC({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
OC.displayName = "DropdownContent";
const _C = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(Gg, { ...a, children: e });
};
_C.displayName = "Dropdown";
const IC = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  Ug,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
IC.displayName = "DropdownTrigger";
const gk = ({
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
const jC = [
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
], TC = ae(
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
  const l = jC.find(
    (d) => d.code === e
  );
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: D(
        TC({ size: a, selected: i, interactive: !!o }),
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
}, LC = Ql, WC = Jl, _f = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(ed, { children: /* @__PURE__ */ c.jsx(
  ss,
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
_f.displayName = ss.displayName;
var Ai = 1, $C = 0.9, FC = 0.8, VC = 0.17, Ko = 0.1, qo = 0.999, BC = 0.9999, zC = 0.99, HC = /[\\\/_+.#"@\[\(\{&]/, YC = /[\\\/_+.#"@\[\(\{&]/g, GC = /[\s-]/, If = /[\s-]/g;
function ya(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Ai : zC;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, v, x; d >= 0; ) m = ya(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= Ai : HC.test(e.charAt(d - 1)) ? (m *= FC, v = e.slice(o, d - 1).match(YC), v && o > 0 && (m *= Math.pow(qo, v.length))) : GC.test(e.charAt(d - 1)) ? (m *= $C, x = e.slice(o, d - 1).match(If), x && o > 0 && (m *= Math.pow(qo, x.length))) : (m *= VC, o > 0 && (m *= Math.pow(qo, d - o))), e.charAt(d) !== t.charAt(a) && (m *= BC)), (m < Ko && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = ya(e, t, n, r, d + 1, a + 2, s), p * Ko > m && (m = p * Ko)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function Di(e) {
  return e.toLowerCase().replace(If, " ");
}
function UC(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ya(e, t, Di(e), Di(t), 0, 0, {});
}
var Dn = '[cmdk-group=""]', Xo = '[cmdk-group-items=""]', KC = '[cmdk-group-heading=""]', jf = '[cmdk-item=""]', Oi = `${jf}:not([aria-disabled="true"])`, wa = "cmdk-item-select", tn = "data-value", qC = (e, t, n) => UC(e, t, n), Tf = u.createContext(void 0), ar = () => u.useContext(Tf), Lf = u.createContext(void 0), ws = () => u.useContext(Lf), Wf = u.createContext(void 0), $f = u.forwardRef((e, t) => {
  let n = nn(() => {
    var E, _;
    return { search: "", value: (_ = (E = e.value) != null ? E : e.defaultValue) != null ? _ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = nn(() => /* @__PURE__ */ new Set()), o = nn(() => /* @__PURE__ */ new Map()), a = nn(() => /* @__PURE__ */ new Map()), s = nn(() => /* @__PURE__ */ new Set()), i = Ff(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...y } = e, b = we(), w = we(), N = we(), C = u.useRef(null), M = sS();
  Bt(() => {
    if (f !== void 0) {
      let E = f.trim();
      n.current.value = E, k.emit();
    }
  }, [f]), Bt(() => {
    M(6, Z);
  }, []);
  let k = u.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, _, H) => {
    var z, $, O, Y;
    if (!Object.is(n.current[E], _)) {
      if (n.current[E] = _, E === "search") q(), B(), M(1, V);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(N);
          J ? J.focus() : (z = document.getElementById(b)) == null || z.focus();
        }
        if (M(7, () => {
          var J;
          n.current.selectedItemId = (J = I()) == null ? void 0 : J.id, k.emit();
        }), H || M(5, Z), (($ = i.current) == null ? void 0 : $.value) !== void 0) {
          let J = _ ?? "";
          (Y = (O = i.current).onValueChange) == null || Y.call(O, J);
          return;
        }
      }
      k.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), P = u.useMemo(() => ({ value: (E, _, H) => {
    var z;
    _ !== ((z = a.current.get(E)) == null ? void 0 : z.value) && (a.current.set(E, { value: _, keywords: H }), n.current.filtered.items.set(E, W(_, H)), M(2, () => {
      B(), k.emit();
    }));
  }, item: (E, _) => (r.current.add(E), _ && (o.current.has(_) ? o.current.get(_).add(E) : o.current.set(_, /* @__PURE__ */ new Set([E]))), M(3, () => {
    q(), B(), n.current.value || V(), k.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let H = I();
    M(4, () => {
      q(), (H == null ? void 0 : H.getAttribute("id")) === E && V(), k.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: N, labelId: w, listInnerRef: C }), []);
  function W(E, _) {
    var H, z;
    let $ = (z = (H = i.current) == null ? void 0 : H.filter) != null ? z : qC;
    return E ? $(E, n.current.search, _) : 0;
  }
  function B() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, _ = [];
    n.current.filtered.groups.forEach((z) => {
      let $ = o.current.get(z), O = 0;
      $.forEach((Y) => {
        let J = E.get(Y);
        O = Math.max(J, O);
      }), _.push([z, O]);
    });
    let H = C.current;
    U().sort((z, $) => {
      var O, Y;
      let J = z.getAttribute("id"), re = $.getAttribute("id");
      return ((O = E.get(re)) != null ? O : 0) - ((Y = E.get(J)) != null ? Y : 0);
    }).forEach((z) => {
      let $ = z.closest(Xo);
      $ ? $.appendChild(z.parentElement === $ ? z : z.closest(`${Xo} > *`)) : H.appendChild(z.parentElement === H ? z : z.closest(`${Xo} > *`));
    }), _.sort((z, $) => $[1] - z[1]).forEach((z) => {
      var $;
      let O = ($ = C.current) == null ? void 0 : $.querySelector(`${Dn}[${tn}="${encodeURIComponent(z[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function V() {
    let E = U().find((H) => H.getAttribute("aria-disabled") !== "true"), _ = E == null ? void 0 : E.getAttribute(tn);
    k.setState("value", _ || void 0);
  }
  function q() {
    var E, _, H, z;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let $ = 0;
    for (let O of r.current) {
      let Y = (_ = (E = a.current.get(O)) == null ? void 0 : E.value) != null ? _ : "", J = (z = (H = a.current.get(O)) == null ? void 0 : H.keywords) != null ? z : [], re = W(Y, J);
      n.current.filtered.items.set(O, re), re > 0 && $++;
    }
    for (let [O, Y] of o.current) for (let J of Y) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = $;
  }
  function Z() {
    var E, _, H;
    let z = I();
    z && (((E = z.parentElement) == null ? void 0 : E.firstChild) === z && ((H = (_ = z.closest(Dn)) == null ? void 0 : _.querySelector(KC)) == null || H.scrollIntoView({ block: "nearest" })), z.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${jf}[aria-selected="true"]`);
  }
  function U() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(Oi)) || []);
  }
  function T(E) {
    let _ = U()[E];
    _ && k.setState("value", _.getAttribute(tn));
  }
  function Q(E) {
    var _;
    let H = I(), z = U(), $ = z.findIndex((Y) => Y === H), O = z[$ + E];
    (_ = i.current) != null && _.loop && (O = $ + E < 0 ? z[z.length - 1] : $ + E === z.length ? z[0] : z[$ + E]), O && k.setState("value", O.getAttribute(tn));
  }
  function A(E) {
    let _ = I(), H = _ == null ? void 0 : _.closest(Dn), z;
    for (; H && !z; ) H = E > 0 ? oS(H, Dn) : aS(H, Dn), z = H == null ? void 0 : H.querySelector(Oi);
    z ? k.setState("value", z.getAttribute(tn)) : Q(E);
  }
  let j = () => T(U().length - 1), R = (E) => {
    E.preventDefault(), E.metaKey ? j() : E.altKey ? A(1) : Q(1);
  }, G = (E) => {
    E.preventDefault(), E.metaKey ? T(0) : E.altKey ? A(-1) : Q(-1);
  };
  return u.createElement(X.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (E) => {
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
        E.preventDefault(), T(0);
        break;
      }
      case "End": {
        E.preventDefault(), j();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let z = I();
        if (z) {
          let $ = new Event(wa);
          z.dispatchEvent($);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: cS }, l), ko(e, (E) => u.createElement(Lf.Provider, { value: k }, u.createElement(Tf.Provider, { value: P }, E))));
}), XC = u.forwardRef((e, t) => {
  var n, r;
  let o = we(), a = u.useRef(null), s = u.useContext(Wf), i = ar(), l = Ff(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Bt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = Vf(o, a, [e.value, e.children, a], e.keywords), m = ws(), p = Pt((M) => M.value && M.value === f.current), v = Pt((M) => d || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let M = a.current;
    if (!(!M || e.disabled)) return M.addEventListener(wa, x), () => M.removeEventListener(wa, x);
  }, [v, e.onSelect, e.disabled]);
  function x() {
    var M, k;
    h(), (k = (M = l.current).onSelect) == null || k.call(M, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: y, onSelect: b, forceMount: w, keywords: N, ...C } = e;
  return u.createElement(X.div, { ref: xt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), ZC = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = we(), i = u.useRef(null), l = u.useRef(null), d = we(), f = ar(), m = Pt((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Bt(() => f.group(s), []), Vf(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(X.div, { ref: xt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), ko(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(Wf.Provider, { value: p }, v))));
}), QC = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Pt((s) => !s.search);
  return !n && !a ? null : u.createElement(X.div, { ref: xt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), JC = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = ws(), s = Pt((d) => d.search), i = Pt((d) => d.selectedItemId), l = ar();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(X.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), eS = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = Pt((d) => d.selectedItemId), l = ar();
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
  }, []), u.createElement(X.div, { ref: xt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, ko(e, (d) => u.createElement("div", { ref: xt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), tS = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(Ta, { open: n, onOpenChange: r }, u.createElement(La, { container: s }, u.createElement(Wa, { "cmdk-overlay": "", className: o }), u.createElement($a, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement($f, { ref: t, ...i }))));
}), nS = u.forwardRef((e, t) => Pt((n) => n.filtered.count === 0) ? u.createElement(X.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), rS = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(X.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ko(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), $e = Object.assign($f, { List: eS, Item: XC, Input: JC, Group: ZC, Separator: QC, Dialog: tS, Empty: nS, Loading: rS });
function oS(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function aS(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Ff(e) {
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
  let t = ws(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function Vf(e, t, n, r = []) {
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
var sS = () => {
  let [e, t] = u.useState(), n = nn(() => /* @__PURE__ */ new Map());
  return Bt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function iS(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ko({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(iS(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var cS = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Bf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e,
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
Bf.displayName = $e.displayName;
const zf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Du, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            $e.Input,
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
zf.displayName = $e.Input.displayName;
const Hf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.List,
  {
    ref: n,
    className: D("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
Hf.displayName = $e.List.displayName;
const Yf = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  $e.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Yf.displayName = $e.Empty.displayName;
const Dr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Group,
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
Dr.displayName = $e.Group.displayName;
const lS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Separator,
  {
    ref: n,
    className: D(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
lS.displayName = $e.Separator.displayName;
const Or = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  $e.Item,
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
Or.displayName = $e.Item.displayName;
const _i = ae("ease-in-out transition-all duration-300", {
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
}), dS = ({
  options: e,
  onValueChange: t = ($) => $,
  onApplySelection: n = ($) => $,
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
  className: N,
  hideSelectAll: C = !1,
  searchable: M = !0,
  emptyIndicator: k = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: W = !1,
  popoverClassName: B,
  disabled: V = !1,
  invalid: q = !1,
  responsive: Z,
  minWidth: I,
  maxWidth: U,
  deduplicateOptions: T = !1,
  resetOnDefaultValueChange: Q = !0,
  closeOnSelect: A = !1,
  filterByValueAndLabel: j = !1,
  renderOption: R,
  customTrigger: G,
  selectionDisplayMode: E = "default",
  hideSelection: _ = !1,
  ...H
}, z) => {
  const [$, O] = S.useState(o), [Y, J] = S.useState(!1), [re, ie] = S.useState(""), [ue, Ne] = S.useState(""), [_e, nt] = S.useState(""), qe = S.useRef($.length), rt = S.useRef(Y), Ut = S.useRef(re), Te = S.useCallback(
    (L, K = "polite") => {
      K === "assertive" ? (nt(L), setTimeout(() => nt(""), 100)) : (Ne(L), setTimeout(() => Ne(""), 100));
    },
    []
  ), _t = S.useId(), ir = `${_t}-listbox`, yn = `${_t}-description`, Kt = `${_t}-count`, qt = S.useRef(o), wn = S.useCallback(
    (L) => {
      const K = L[0];
      return !!(K && typeof K == "object" && "heading" in K);
    },
    []
  ), Cn = S.useCallback((L, K) => {
    if (L.length !== K.length) return !1;
    const le = [...L].sort(), ye = [...K].sort();
    return le.every((Ae, En) => Ae === ye[En]);
  }, []), cr = S.useCallback(() => {
    O(o), J(!1), ie(""), t(o);
  }, [o, t]), Ye = S.useRef(null);
  S.useImperativeHandle(
    z,
    () => ({
      reset: cr,
      getSelectedValues: () => $,
      setSelectedValues: (L) => {
        O(L), t(L);
      },
      clear: () => {
        O([]), t([]);
      },
      focus: () => {
        if (Ye.current) {
          Ye.current.focus();
          const L = Ye.current.style.outline, K = Ye.current.style.outlineOffset;
          Ye.current.style.outline = "2px solid hsl(var(--ring))", Ye.current.style.outlineOffset = "2px", setTimeout(() => {
            Ye.current && (Ye.current.style.outline = L, Ye.current.style.outlineOffset = K);
          }, 1e3);
        }
      }
    }),
    [cr, $, t]
  );
  const [Ge, Sn] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const L = () => {
      const K = window.innerWidth;
      K < 640 ? Sn("mobile") : K < 1024 ? Sn("tablet") : Sn("desktop");
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
      const le = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ge];
      return {
        maxCount: (le == null ? void 0 : le.maxCount) ?? b,
        compactMode: (le == null ? void 0 : le.compactMode) ?? !1
      };
    }
    const L = Z[Ge];
    return {
      maxCount: (L == null ? void 0 : L.maxCount) ?? b,
      compactMode: (L == null ? void 0 : L.compactMode) ?? !1
    };
  })(), Fe = S.useCallback(() => {
    if (e.length === 0) return [];
    let L;
    wn(e) ? L = e.flatMap((Ae) => Ae.options) : L = e;
    const K = /* @__PURE__ */ new Set(), le = [], ye = [];
    return L.forEach((Ae) => {
      K.has(Ae.value) ? (le.push(Ae.value), T || ye.push(Ae)) : (K.add(Ae.value), ye.push(Ae));
    }), process.env.NODE_ENV === "development" && le.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${T ? "automatically removed" : "detected"}: ${le.join(
        ", "
      )}. ${T ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), T ? ye : L;
  }, [e, T, wn]), It = S.useCallback(
    (L) => {
      const K = Fe().find((le) => le.value === L);
      return !K && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${L}" not found in options list`
      ), K;
    },
    [Fe]
  ), No = S.useCallback(
    (L, K) => {
      const [le, ye] = L.split(":");
      if (!j)
        return ye && ye.toLowerCase().includes(K.toLowerCase()) ? 1 : 0;
      const Ae = K.toLowerCase();
      return ye && ye.toLowerCase().includes(Ae) || le && le.toLowerCase().includes(Ae) ? 1 : 0;
    },
    [j]
  ), lr = (L) => {
    if (L.key === "Enter")
      J(!0);
    else if (L.key === "Backspace" && !L.currentTarget.value) {
      const K = [...$];
      K.pop(), O(K), t(K);
    }
  }, kn = (L) => {
    if (V) return;
    const K = It(L);
    if (K != null && K.disabled) return;
    const le = $.includes(L) ? $.filter((ye) => ye !== L) : [...$, L];
    O(le), t(le), A && J(!1);
  }, Nn = () => {
    V || (O([]), n([]), t([]));
  }, ce = () => {
    V || J((L) => !L);
  }, xe = () => {
    if (V) return;
    const L = $.slice(
      0,
      pt.maxCount
    );
    O(L), t(L);
  }, oe = () => {
    if (V) return;
    const L = Fe().filter((K) => !K.disabled);
    if ($.length === L.length)
      Nn();
    else {
      const K = L.map((le) => le.value);
      O(K), t(K);
    }
    A && J(!1);
  }, Re = R || ((L) => {
    const { option: K, location: le, onRemove: ye, disabled: Ae } = L;
    return le === "badge" ? /* @__PURE__ */ c.jsx(
      Ri,
      {
        className: D(
          _i({ variant: r }),
          pt.compactMode && "text-xs px-1.5 py-0.5",
          Ge === "mobile" && "max-w-[120px] truncate",
          W && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Ae && "cursor-not-allowed"
        ),
        ...!Ae && { onRemove: ye },
        children: K.label
      }
    ) : K.label;
  });
  S.useEffect(() => {
    if (!Q) return;
    const L = qt.current;
    Cn(L, o) || (Cn($, o) || O(o), qt.current = [...o]);
  }, [o, $, Cn, Q]);
  const Mn = {
    minWidth: I || (Ge === "mobile" ? "0px" : "200px"),
    maxWidth: U || "100%",
    width: P ? "auto" : "100%"
  }, dr = S.useMemo(() => E === "default" || $.length === 0 ? a : $.map((L) => {
    var K;
    return (K = It(L)) == null ? void 0 : K.label;
  }).filter(Boolean).join(", "), [$, It, a, E]);
  return S.useEffect(() => {
    Y || ie("");
  }, [Y]), S.useEffect(() => {
    const L = $.length, K = Fe(), le = K.filter((ye) => !ye.disabled).length;
    if (L !== qe.current) {
      const ye = L - qe.current;
      if (ye > 0) {
        const En = $.slice(-ye).map((Jf) => {
          var Ss;
          return (Ss = K.find((em) => em.value === Jf)) == null ? void 0 : Ss.label;
        }).filter(Boolean);
        En.length === 1 ? Te(
          `${En[0]} selected. ${L} of ${le} options selected.`
        ) : Te(
          `${En.length} options selected. ${L} of ${le} total selected.`
        );
      } else ye < 0 && Te(
        `Option removed. ${L} of ${le} options selected.`
      );
      qe.current = L;
    }
    Y !== rt.current && (Te(
      Y ? `Dropdown opened. ${le} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), rt.current = Y), re !== Ut.current && re !== void 0 && (re && Y && Te(`Searching for "${re}"`), Ut.current = re);
  }, [$, Y, re, Te, Fe]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: _e })
    ] }),
    /* @__PURE__ */ c.jsxs(
      LC,
      {
        open: Y,
        onOpenChange: J,
        modal: w,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: yn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Kt, className: "sr-only", "aria-live": "polite", children: $.length === 0 ? l : `${$.length} option${$.length === 1 ? "" : "s"} selected: ${$.map((L) => {
            var K;
            return (K = It(L)) == null ? void 0 : K.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: D(P && "w-auto", N), children: [
            /* @__PURE__ */ c.jsx(WC, { asChild: !0, children: G || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ye,
                ...H,
                onClick: ce,
                disabled: V,
                className: D(
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
                  pt.compactMode && "min-h-8 text-sm",
                  Ge === "mobile" && "min-h-12"
                ),
                style: {
                  ...Mn,
                  maxWidth: `min(${Mn.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": Y,
                "aria-haspopup": "listbox",
                "aria-controls": Y ? ir : void 0,
                "aria-describedby": `${yn} ${Kt}`,
                "aria-label": `Multi-select: ${$.length} of ${Fe().length} options selected. ${s}`,
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
                            E === "inline" && "truncate",
                            V ? "text-body-disabled" : Y || E === "inline" && dr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: dr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        vs,
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
            !(_ || E === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              $.slice(0, pt.maxCount).map((L) => {
                const K = It(L);
                return K ? /* @__PURE__ */ c.jsx("div", { children: Re({
                  option: K,
                  location: "badge",
                  onRemove: () => kn(L),
                  disabled: V
                }) }, L) : null;
              }).filter(Boolean),
              $.length > pt.maxCount && /* @__PURE__ */ c.jsxs(
                Ri,
                {
                  className: D(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    _i({ variant: r }),
                    pt.compactMode && "text-xs px-1.5 py-0.5",
                    W && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    V && "cursor-not-allowed"
                  ),
                  ...!V && { onRemove: xe },
                  children: [
                    "+ ",
                    $.length - pt.maxCount,
                    " ",
                    g
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            _f,
            {
              id: ir,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: D(
                "p-0 w-auto",
                Ge === "mobile" && "w-[85vw] max-w-[280px]",
                Ge === "tablet" && "max-w-md w-[70vw]",
                Ge === "desktop" && "min-w-[300px]",
                B
              ),
              style: {
                maxWidth: `min(${Mn.maxWidth}, 85vw)`,
                maxHeight: Ge === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(Bf, { filter: No, children: [
                M && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${_t}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    zf,
                    {
                      placeholder: y,
                      onKeyDown: lr,
                      value: re,
                      onValueChange: ie,
                      "aria-label": f,
                      "aria-describedby": `${_t}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  Hf,
                  {
                    className: D(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ge === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(Yf, { children: k }),
                      !C && !re && /* @__PURE__ */ c.jsx(Dr, { children: /* @__PURE__ */ c.jsxs(
                        Or,
                        {
                          value: "select-all",
                          onSelect: oe,
                          role: "option",
                          "aria-selected": $.length === Fe().filter((L) => !L.disabled).length,
                          "aria-label": `Select all ${Fe().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              Ar,
                              {
                                className: "mr-xs",
                                checked: $.length === Fe().filter((L) => !L.disabled).length
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
                      wn(e) ? e.map((L) => /* @__PURE__ */ c.jsx(Dr, { heading: L.heading, children: L.options.map((K) => {
                        const le = $.includes(K.value);
                        return /* @__PURE__ */ c.jsxs(
                          Or,
                          {
                            value: `${K.value}:${K.label}`,
                            onSelect: () => kn(K.value),
                            role: "option",
                            "aria-selected": le,
                            "aria-disabled": K.disabled ?? !1,
                            "aria-label": `${K.label}${le ? ", selected" : ", not selected"}${K.disabled ? ", disabled" : ""}`,
                            className: D(
                              "cursor-pointer",
                              K.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!K.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Ar, { className: "mr-xs", checked: le }),
                              Re({
                                option: K,
                                location: "dropdown",
                                isSelected: le
                              })
                            ]
                          },
                          K.value
                        );
                      }) }, L.heading)) : /* @__PURE__ */ c.jsx(Dr, { children: e.map((L) => {
                        const K = $.includes(L.value);
                        return /* @__PURE__ */ c.jsxs(
                          Or,
                          {
                            value: `${L.value}:${L.label}`,
                            onSelect: () => kn(L.value),
                            role: "option",
                            "aria-selected": K,
                            "aria-disabled": L.disabled ?? !1,
                            "aria-label": `${L.label}${K ? ", selected" : ", not selected"}${L.disabled ? ", disabled" : ""}`,
                            className: D(
                              "cursor-pointer",
                              L.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!L.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Ar, { className: "mr-xs", checked: K }),
                              Re({
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
                          onClick: Nn,
                          disabled: $.length === 0,
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
                            n($), J(!1);
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
}, uS = S.forwardRef(
  dS
);
uS.displayName = "MultiSelect";
const fS = ae(
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
), mS = ae(
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
), pS = ae(
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
), Ca = ({
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
  return i !== void 0 && (f.value = i), /* @__PURE__ */ c.jsxs(K0, { ...f, children: [
    /* @__PURE__ */ c.jsxs(
      q0,
      {
        className: D(fS({ variant: a, intent: s, invalid: o }), n),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            Le(r, {
              className: D("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              X0,
              {
                placeholder: t || "Select an option",
                className: D({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            Z0,
            {
              className: D("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": d.disabled
              }),
              children: /* @__PURE__ */ c.jsx(vs, { className: "top-0.5 relative h-full w-full" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(Q0, { children: /* @__PURE__ */ c.jsxs(
      J0,
      {
        position: "popper",
        className: D(mS({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(sx, {}),
          /* @__PURE__ */ c.jsx(ex, { className: "min-w-[var(--radix-select-trigger-width)]", children: e.map((m, p) => {
            switch (m.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(tx, { children: /* @__PURE__ */ c.jsx(nx, { children: m.label }) }, p);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  cx,
                  {
                    className: "border-divider-default m-[5px] h-px border-b"
                  },
                  p
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  rx,
                  {
                    value: m.value,
                    disabled: m.disabled ?? !1,
                    className: pS({
                      variant: a,
                      isSelected: i === m.value
                    }),
                    children: [
                      Le(m.icon, {
                        className: D("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": m.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        ox,
                        {
                          className: D("flex-1", {
                            "text-interactive-disabled": m.disabled
                          }),
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(ax, {})
                    ]
                  },
                  p
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(ix, {}),
          /* @__PURE__ */ c.jsx(lx, {})
        ]
      }
    ) })
  ] });
};
Ca.displayName = "Select";
const hS = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Ii = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), vS = S.forwardRef(
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
      const k = parseInt(M, 10);
      s(k), e > 1 && r(1);
    }, b = (M) => {
      const k = parseInt(M, 10);
      r(k);
    }, w = a.map((M) => ({
      value: M.toString(),
      label: M.toString()
    })), N = Math.max(t, 1), C = Array.from(
      { length: N },
      (M, k) => k + 1
    ).map((M) => ({
      value: M.toString(),
      label: d(M, N, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: D(hS({ size: m }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: D(Ii()), children: i }),
            /* @__PURE__ */ c.jsx(
              Ca,
              {
                value: o.toString(),
                onValueChange: y,
                options: w
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: D(Ii()), children: l }),
            /* @__PURE__ */ c.jsx(
              Ca,
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
                icon: Cb,
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
                icon: Au,
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
vS.displayName = "Pagination";
const gS = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), xS = ae(
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
), bS = ae(
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
), xk = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: D(gS({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      E0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: D(
          xS({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(P0, { className: D(bS({ invalid: a })) })
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
}, bk = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  M0,
  {
    className: D("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), yS = ae(
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
), wS = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", CS = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, SS = ae(
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
), kS = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, NS = ae(
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
), MS = "gap-xs text-sm text-body-secondary flex-row", ES = ae(
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
), PS = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, RS = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", AS = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, DS = S.forwardRef(
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
    const v = i || t === "disabled", [x, h] = S.useState([]);
    let g;
    typeof t == "string" ? g = t : v ? g = "disabled" : x.length > 0 ? g = "filled" : g = "default";
    const y = S.useRef(g);
    Li(() => {
      y.current === "filled" && g !== "filled" && h([]), y.current = g;
    }, [g]);
    const b = (C) => {
      v || o && o(C);
    }, w = (C) => {
      if (!v) {
        if (C.key === "Enter" && n.trim()) {
          const M = [...x, n.trim()];
          if (h(M), o) {
            const k = {
              ...C,
              target: { value: "" }
            };
            o(k);
          }
          f && a && a(M), C.preventDefault();
        }
        if ((C.key === "Backspace" || C.key === "Delete") && !n && x.length > 0) {
          const M = x.slice(0, -1);
          h(M), f && a && a(M), C.preventDefault();
        }
      }
    }, N = (C) => {
      if (v) return;
      const M = x.filter((k, P) => P !== C);
      h(M), f && a && a(M);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: D(
          "gap-xxs group flex flex-col",
          v ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": v ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: D(
                yS({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: D(wS), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: D(RS, CS), children: [
                    /* @__PURE__ */ c.jsx("span", { className: D(SS({ size: e })), children: /* @__PURE__ */ c.jsx(Du, { size: AS[e] }) }),
                    x.map((C, M) => /* @__PURE__ */ c.jsxs("span", { className: ES(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: D(
                            PS,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (k) => {
                            k.stopPropagation(), k.preventDefault(), N(M);
                          },
                          onMouseDown: (k) => {
                            k.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: v,
                          children: /* @__PURE__ */ c.jsx(ha, { size: 8 })
                        }
                      )
                    ] }, M)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: D(kS),
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
                      children: /* @__PURE__ */ c.jsx(ha, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: D(
                      NS({
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
              className: D(
                MS,
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
DS.displayName = "SearchBar";
const Gf = ka(void 0), OS = ({
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
  return /* @__PURE__ */ c.jsx(Gf.Provider, { value: a, children: t });
}, sr = () => {
  const e = Na(Gf);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  return e;
}, Uf = S.forwardRef(({ className: e, ...t }, n) => {
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
      children: r ? /* @__PURE__ */ c.jsx(kb, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(yb, { className: "size-5", strokeWidth: 2 })
    }
  );
});
Uf.displayName = "SideNavigationCollapseButton";
const _S = ae(
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
), IS = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(OS, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(Kf, { ref: n, ...t }) }));
IS.displayName = "SideNavigation";
const Kf = S.forwardRef(
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
          _S({ width: d }),
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
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: r }),
          a && /* @__PURE__ */ c.jsx(Uf, {})
        ]
      }
    );
  }
);
Kf.displayName = "SideNavigationContent";
const jS = ae(
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
), TS = S.forwardRef(
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
    const { isCollapsed: d } = sr(), f = r ? Hr : "button", m = s ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      f,
      {
        ref: l,
        className: D(
          jS({
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
TS.displayName = "SideNavigationItem";
const LS = ae("flex flex-col", {
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
}), WS = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = sr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: D(
        LS({ isCollapsed: s, isLast: r }),
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
WS.displayName = "SideNavigationSection";
const $S = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", FS = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", yk = () => {
  const { isCollapsed: e } = sr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: $S,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: FS,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, VS = ae(
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
), BS = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), wk = ({
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
        VS({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: BS({ indicator: s }) }),
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
}, zS = S.forwardRef(
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
      qf,
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
                    Ru,
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
), qf = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((v) => v.status === "active"), i = Math.max(
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
qf.displayName = "RadialStepper";
zS.displayName = "Stepper";
const HS = u.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    px,
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
        hx,
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
HS.displayName = "Switch";
const Sa = {
  loading: !1,
  loadingText: "ローディング中…"
}, Xf = S.createContext(
  Sa
), Zf = () => S.useContext(Xf), YS = S.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Sa.loading,
    loadingText: r = Sa.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(Xf.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
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
YS.displayName = "Table";
const GS = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Zf(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: D("text-sm bg-surface-tertiary top-0 sticky", e),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            xs.Linear,
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
GS.displayName = "TableHeader";
const US = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Zf(), l = t ?? s, d = n ?? i;
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
US.displayName = "TableBody";
const KS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: D("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
KS.displayName = "TableFooter";
const qS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
qS.displayName = "TableRow";
const XS = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
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
XS.displayName = "TableHead";
const ZS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
ZS.displayName = "TableCell";
const QS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: D("text-body-primary mt-md text-sm", e),
    ...t
  }
));
QS.displayName = "TableCaption";
const Ck = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), JS = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
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
JS.displayName = "TableRowOverlay";
const Qf = S.createContext({
  size: "normal"
}), ek = () => S.useContext(Qf), tk = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), nk = ae(
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
), rk = S.forwardRef(({ className: e, size: t, children: n, ...r }, o) => {
  const a = t ? { size: t } : {};
  return /* @__PURE__ */ c.jsx(Qf.Provider, { value: a, children: /* @__PURE__ */ c.jsx(bx, { ref: o, className: D("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(yx, { className: D(tk({ size: t })), role: "tablist", children: n }) }) });
});
rk.displayName = "TabBar";
const ok = S.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => {
  const { size: s } = ek(), i = t ?? s;
  return /* @__PURE__ */ c.jsx(
    wx,
    {
      ref: a,
      className: D(nk({ size: i }), e),
      disabled: r,
      ...o,
      children: n
    }
  );
});
ok.displayName = "Tab";
const ak = ae(
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
), sk = S.forwardRef(
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
          className: D(ak({ invalid: e }), t),
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
sk.displayName = "TextArea";
const Sk = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  Vx,
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
            Ou,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            ri,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            ri,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Rr, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(Bx, { className: "text-body-primary font-bold", children: /* @__PURE__ */ c.jsx(
            "h5",
            {
              className: D("text-md leading-none", {
                "mb-xs": !!e
              }),
              children: t
            }
          ) }),
          /* @__PURE__ */ c.jsx(zx, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(Hx, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(ha, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), kk = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs($x, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    Fx,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), ik = ae(
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
), Nk = ib, ck = S.forwardRef(
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
    cb,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...f !== void 0 && { onOpenChange: f },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(lb, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(db, { children: /* @__PURE__ */ c.jsx(
          ub,
          {
            ref: v,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: D(ik({ intent: n }), m),
            ...p,
            children: t
          }
        ) })
      ]
    }
  )
);
ck.displayName = "Tooltip";
const ji = ae(
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
), lk = S.forwardRef(
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
    ...N
  }, C) => {
    const [M, k] = sn(!1), P = Tn(null), W = Me(
      (E) => {
        E.preventDefault(), E.stopPropagation(), M || k(!0);
      },
      [M]
    ), B = Me((E) => {
      E.preventDefault(), E.stopPropagation(), k(!1);
    }, []), V = Me((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), q = Me(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), k(!1), s) return;
        const _ = E.dataTransfer.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [s, r]
    ), Z = Me(() => {
      var E;
      s || (E = P.current) == null || E.click();
    }, [s]), I = Me(
      (E) => {
        const _ = E.target.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [r]
    ), U = M ? "dragging" : n, T = () => /* @__PURE__ */ c.jsx(
      Rb,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Q = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ke,
        {
          size: "xs",
          intent: "tertiary",
          icon: oi,
          onClick: (E) => {
            E.stopPropagation(), Z();
          },
          children: h
        }
      )
    ] }), A = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      T(),
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
          icon: oi,
          onClick: (E) => {
            E.stopPropagation(), Z();
          },
          children: h
        }
      )
    ] }), j = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: D(ji({ size: t, state: "default", disabled: s })),
        onDragEnter: W,
        onDragLeave: B,
        onDragOver: V,
        onDrop: q,
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
              onChange: I,
              disabled: s
            }
          ),
          t === "small" ? Q() : A()
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
          xs.Linear,
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
              children: /* @__PURE__ */ c.jsx(Ib, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Eb,
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
          /* @__PURE__ */ c.jsx(pb, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || w })
        ] })
      ] }) : null;
    }, G = () => t === "small" ? Q() : A();
    return U === "inProgress" && i !== void 0 || U === "success" || U === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: D(e), ...N, children: [
      j(),
      R()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: D(
          ji({ size: t, state: U, disabled: s }),
          e
        ),
        onDragEnter: W,
        onDragLeave: B,
        onDragOver: V,
        onDrop: q,
        onClick: Z,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
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
              disabled: s
            }
          ),
          G()
        ]
      }
    );
  }
);
lk.displayName = "FileUploader";
export {
  pk as Accordion,
  Cy as Badge,
  Ny as Breadcrumbs,
  Ke as Button,
  Ef as Calendar,
  fC as Callout,
  Ar as Checkbox,
  hC as CheckboxGroup,
  yC as DatePicker,
  hk as Dialog,
  _C as Dropdown,
  OC as DropdownContent,
  RC as DropdownItem,
  DC as DropdownLabel,
  AC as DropdownSeparator,
  IC as DropdownTrigger,
  lk as FileUploader,
  gk as FormField,
  yk as Logo,
  uS as MultiSelect,
  vk as MultiStepDialog,
  vS as Pagination,
  xs as ProgressIndicator,
  xk as RadioButton,
  bk as RadioButtonGroup,
  DS as SearchBar,
  Ca as Select,
  IS as SideNavigation,
  Uf as SideNavigationCollapseButton,
  TS as SideNavigationItem,
  OS as SideNavigationProvider,
  WS as SideNavigationSection,
  wk as StatusIndicator,
  zS as Stepper,
  HS as Switch,
  ok as Tab,
  rk as TabBar,
  YS as Table,
  US as TableBody,
  QS as TableCaption,
  ZS as TableCell,
  KS as TableFooter,
  XS as TableHead,
  Ck as TableHeadSortButton,
  GS as TableHeader,
  qS as TableRow,
  JS as TableRowOverlay,
  Ri as Tag,
  sk as TextArea,
  Rf as TextField,
  Pf as TextLink,
  Sk as ToastItem,
  kk as ToastProvider,
  ck as Tooltip,
  Nk as TooltipProvider,
  jC as colorCodeToTokenMap,
  sr as useSideNavigation
};
