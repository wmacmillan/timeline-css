var TL = (function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  return (
    (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 5))
  );
})([
  function (t, e, i) {
    /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
    t.exports = (function () {
      "use strict";
      var t = Object.hasOwnProperty,
        e = Object.setPrototypeOf,
        i = Object.isFrozen,
        n = Object.getPrototypeOf,
        r = Object.getOwnPropertyDescriptor,
        a = Object.freeze,
        o = Object.seal,
        s = Object.create,
        l = "undefined" != typeof Reflect && Reflect,
        h = l.apply,
        c = l.construct;
      h ||
        (h = function (t, e, i) {
          return t.apply(e, i);
        }),
        a ||
          (a = function (t) {
            return t;
          }),
        o ||
          (o = function (t) {
            return t;
          }),
        c ||
          (c = function (t, e) {
            return new (Function.prototype.bind.apply(
              t,
              [null].concat(
                (function (t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, i = Array(t.length); e < t.length; e++)
                      i[e] = t[e];
                    return i;
                  }
                  return Array.from(t);
                })(e)
              )
            ))();
          });
      var u,
        d = x(Array.prototype.forEach),
        f = x(Array.prototype.pop),
        p = x(Array.prototype.push),
        _ = x(String.prototype.toLowerCase),
        m = x(String.prototype.match),
        g = x(String.prototype.replace),
        v = x(String.prototype.indexOf),
        y = x(String.prototype.trim),
        w = x(RegExp.prototype.test),
        b =
          ((u = TypeError),
          function () {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return c(u, e);
          });
      function x(t) {
        return function (e) {
          for (
            var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1;
            r < i;
            r++
          )
            n[r - 1] = arguments[r];
          return h(t, e, n);
        };
      }
      function k(t, n) {
        e && e(t, null);
        for (var r = n.length; r--; ) {
          var a = n[r];
          if ("string" == typeof a) {
            var o = _(a);
            o !== a && (i(n) || (n[r] = o), (a = o));
          }
          t[a] = !0;
        }
        return t;
      }
      function T(e) {
        var i = s(null),
          n = void 0;
        for (n in e) h(t, e, [n]) && (i[n] = e[n]);
        return i;
      }
      function M(t, e) {
        for (; null !== t; ) {
          var i = r(t, e);
          if (i) {
            if (i.get) return x(i.get);
            if ("function" == typeof i.value) return x(i.value);
          }
          t = n(t);
        }
        return function (t) {
          return console.warn("fallback value for", t), null;
        };
      }
      var E = a([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        L = a([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        S = a([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        D = a([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "fedropshadow",
          "feimage",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        A = a([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
        ]),
        j = a([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        C = a(["#text"]),
        N = a([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
        ]),
        I = a([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        O = a([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        z = a([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        R = o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        P = o(/<%[\s\S]*|[\s\S]*%>/gm),
        q = o(/^data-[\-\w.\u00B7-\uFFFF]/),
        F = o(/^aria-[\-\w]+$/),
        H = o(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        $ = o(/^(?:\w+script|data):/i),
        B = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        W =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              };
      function U(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      var Z = function () {
          return "undefined" == typeof window ? null : window;
        },
        G = function (t, e) {
          if (
            "object" !== (void 0 === t ? "undefined" : W(t)) ||
            "function" != typeof t.createPolicy
          )
            return null;
          var i = null;
          e.currentScript &&
            e.currentScript.hasAttribute("data-tt-policy-suffix") &&
            (i = e.currentScript.getAttribute("data-tt-policy-suffix"));
          var n = "dompurify" + (i ? "#" + i : "");
          try {
            return t.createPolicy(n, {
              createHTML: function (t) {
                return t;
              },
            });
          } catch (t) {
            return (
              console.warn(
                "TrustedTypes policy " + n + " could not be created."
              ),
              null
            );
          }
        };
      return (function t() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Z(),
          i = function (e) {
            return t(e);
          };
        if (
          ((i.version = "2.2.7"),
          (i.removed = []),
          !e || !e.document || 9 !== e.document.nodeType)
        )
          return (i.isSupported = !1), i;
        var n = e.document,
          r = e.document,
          o = e.DocumentFragment,
          s = e.HTMLTemplateElement,
          l = e.Node,
          h = e.Element,
          c = e.NodeFilter,
          u = e.NamedNodeMap,
          x = void 0 === u ? e.NamedNodeMap || e.MozNamedAttrMap : u,
          Y = e.Text,
          V = e.Comment,
          J = e.DOMParser,
          X = e.trustedTypes,
          K = h.prototype,
          Q = M(K, "cloneNode"),
          tt = M(K, "nextSibling"),
          et = M(K, "childNodes"),
          it = M(K, "parentNode");
        if ("function" == typeof s) {
          var nt = r.createElement("template");
          nt.content &&
            nt.content.ownerDocument &&
            (r = nt.content.ownerDocument);
        }
        var rt = G(X, n),
          at = rt && Rt ? rt.createHTML("") : "",
          ot = r,
          st = ot.implementation,
          lt = ot.createNodeIterator,
          ht = ot.getElementsByTagName,
          ct = ot.createDocumentFragment,
          ut = n.importNode,
          dt = {};
        try {
          dt = T(r).documentMode ? r.documentMode : {};
        } catch (t) {}
        var ft = {};
        i.isSupported =
          "function" == typeof it &&
          st &&
          void 0 !== st.createHTMLDocument &&
          9 !== dt;
        var pt = R,
          _t = P,
          mt = q,
          gt = F,
          vt = $,
          yt = B,
          wt = H,
          bt = null,
          xt = k({}, [].concat(U(E), U(L), U(S), U(A), U(C))),
          kt = null,
          Tt = k({}, [].concat(U(N), U(I), U(O), U(z))),
          Mt = null,
          Et = null,
          Lt = !0,
          St = !0,
          Dt = !1,
          At = !1,
          jt = !1,
          Ct = !1,
          Nt = !1,
          It = !1,
          Ot = !1,
          zt = !0,
          Rt = !1,
          Pt = !0,
          qt = !0,
          Ft = !1,
          Ht = {},
          $t = k({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          Bt = null,
          Wt = k({}, ["audio", "video", "img", "source", "image", "track"]),
          Ut = null,
          Zt = k({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          Gt = null,
          Yt = r.createElement("form"),
          Vt = function (t) {
            (Gt && Gt === t) ||
              ((t && "object" === (void 0 === t ? "undefined" : W(t))) ||
                (t = {}),
              (t = T(t)),
              (bt = "ALLOWED_TAGS" in t ? k({}, t.ALLOWED_TAGS) : xt),
              (kt = "ALLOWED_ATTR" in t ? k({}, t.ALLOWED_ATTR) : Tt),
              (Ut =
                "ADD_URI_SAFE_ATTR" in t ? k(T(Zt), t.ADD_URI_SAFE_ATTR) : Zt),
              (Bt =
                "ADD_DATA_URI_TAGS" in t ? k(T(Wt), t.ADD_DATA_URI_TAGS) : Wt),
              (Mt = "FORBID_TAGS" in t ? k({}, t.FORBID_TAGS) : {}),
              (Et = "FORBID_ATTR" in t ? k({}, t.FORBID_ATTR) : {}),
              (Ht = "USE_PROFILES" in t && t.USE_PROFILES),
              (Lt = !1 !== t.ALLOW_ARIA_ATTR),
              (St = !1 !== t.ALLOW_DATA_ATTR),
              (Dt = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (At = t.SAFE_FOR_TEMPLATES || !1),
              (jt = t.WHOLE_DOCUMENT || !1),
              (It = t.RETURN_DOM || !1),
              (Ot = t.RETURN_DOM_FRAGMENT || !1),
              (zt = !1 !== t.RETURN_DOM_IMPORT),
              (Rt = t.RETURN_TRUSTED_TYPE || !1),
              (Nt = t.FORCE_BODY || !1),
              (Pt = !1 !== t.SANITIZE_DOM),
              (qt = !1 !== t.KEEP_CONTENT),
              (Ft = t.IN_PLACE || !1),
              (wt = t.ALLOWED_URI_REGEXP || wt),
              At && (St = !1),
              Ot && (It = !0),
              Ht &&
                ((bt = k({}, [].concat(U(C)))),
                (kt = []),
                !0 === Ht.html && (k(bt, E), k(kt, N)),
                !0 === Ht.svg && (k(bt, L), k(kt, I), k(kt, z)),
                !0 === Ht.svgFilters && (k(bt, S), k(kt, I), k(kt, z)),
                !0 === Ht.mathMl && (k(bt, A), k(kt, O), k(kt, z))),
              t.ADD_TAGS && (bt === xt && (bt = T(bt)), k(bt, t.ADD_TAGS)),
              t.ADD_ATTR && (kt === Tt && (kt = T(kt)), k(kt, t.ADD_ATTR)),
              t.ADD_URI_SAFE_ATTR && k(Ut, t.ADD_URI_SAFE_ATTR),
              qt && (bt["#text"] = !0),
              jt && k(bt, ["html", "head", "body"]),
              bt.table && (k(bt, ["tbody"]), delete Mt.tbody),
              a && a(t),
              (Gt = t));
          },
          Jt = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
          Xt = k({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          Kt = k({}, L);
        k(Kt, S), k(Kt, D);
        var Qt = k({}, A);
        k(Qt, j);
        var te = "http://www.w3.org/1998/Math/MathML",
          ee = "http://www.w3.org/2000/svg",
          ie = "http://www.w3.org/1999/xhtml",
          ne = function (t) {
            var e = it(t);
            (e && e.tagName) || (e = { namespaceURI: ie, tagName: "template" });
            var i = _(t.tagName),
              n = _(e.tagName);
            if (t.namespaceURI === ee)
              return e.namespaceURI === ie
                ? "svg" === i
                : e.namespaceURI === te
                ? "svg" === i && ("annotation-xml" === n || Jt[n])
                : Boolean(Kt[i]);
            if (t.namespaceURI === te)
              return e.namespaceURI === ie
                ? "math" === i
                : e.namespaceURI === ee
                ? "math" === i && Xt[n]
                : Boolean(Qt[i]);
            if (t.namespaceURI === ie) {
              if (e.namespaceURI === ee && !Xt[n]) return !1;
              if (e.namespaceURI === te && !Jt[n]) return !1;
              var r = k({}, ["title", "style", "font", "a", "script"]);
              return !Qt[i] && (r[i] || !Kt[i]);
            }
            return !1;
          },
          re = function (t) {
            p(i.removed, { element: t });
            try {
              t.parentNode.removeChild(t);
            } catch (e) {
              try {
                t.outerHTML = at;
              } catch (e) {
                t.remove();
              }
            }
          },
          ae = function (t, e) {
            try {
              p(i.removed, { attribute: e.getAttributeNode(t), from: e });
            } catch (t) {
              p(i.removed, { attribute: null, from: e });
            }
            if ((e.removeAttribute(t), "is" === t && !kt[t]))
              if (It || Ot)
                try {
                  re(e);
                } catch (t) {}
              else
                try {
                  e.setAttribute(t, "");
                } catch (t) {}
          },
          oe = function (t) {
            var e = void 0,
              i = void 0;
            if (Nt) t = "<remove></remove>" + t;
            else {
              var n = m(t, /^[\r\n\t ]+/);
              i = n && n[0];
            }
            var a = rt ? rt.createHTML(t) : t;
            try {
              e = new J().parseFromString(a, "text/html");
            } catch (t) {}
            if (!e || !e.documentElement) {
              var o = (e = st.createHTMLDocument("")).body;
              o.parentNode.removeChild(o.parentNode.firstElementChild),
                (o.outerHTML = a);
            }
            return (
              t &&
                i &&
                e.body.insertBefore(
                  r.createTextNode(i),
                  e.body.childNodes[0] || null
                ),
              ht.call(e, jt ? "html" : "body")[0]
            );
          },
          se = function (t) {
            return lt.call(
              t.ownerDocument || t,
              t,
              c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT,
              function () {
                return c.FILTER_ACCEPT;
              },
              !1
            );
          },
          le = function (t) {
            return !(
              t instanceof Y ||
              t instanceof V ||
              ("string" == typeof t.nodeName &&
                "string" == typeof t.textContent &&
                "function" == typeof t.removeChild &&
                t.attributes instanceof x &&
                "function" == typeof t.removeAttribute &&
                "function" == typeof t.setAttribute &&
                "string" == typeof t.namespaceURI &&
                "function" == typeof t.insertBefore)
            );
          },
          he = function (t) {
            return "object" === (void 0 === l ? "undefined" : W(l))
              ? t instanceof l
              : t &&
                  "object" === (void 0 === t ? "undefined" : W(t)) &&
                  "number" == typeof t.nodeType &&
                  "string" == typeof t.nodeName;
          },
          ce = function (t, e, n) {
            ft[t] &&
              d(ft[t], function (t) {
                t.call(i, e, n, Gt);
              });
          },
          ue = function (t) {
            var e = void 0;
            if ((ce("beforeSanitizeElements", t, null), le(t)))
              return re(t), !0;
            if (m(t.nodeName, /[\u0080-\uFFFF]/)) return re(t), !0;
            var n = _(t.nodeName);
            if (
              (ce("uponSanitizeElement", t, { tagName: n, allowedTags: bt }),
              !he(t.firstElementChild) &&
                (!he(t.content) || !he(t.content.firstElementChild)) &&
                w(/<[/\w]/g, t.innerHTML) &&
                w(/<[/\w]/g, t.textContent))
            )
              return re(t), !0;
            if (!bt[n] || Mt[n]) {
              if (qt && !$t[n]) {
                var r = it(t),
                  a = et(t);
                if (a && r)
                  for (var o = a.length - 1; o >= 0; --o)
                    r.insertBefore(Q(a[o], !0), tt(t));
              }
              return re(t), !0;
            }
            return t instanceof h && !ne(t)
              ? (re(t), !0)
              : ("noscript" !== n && "noembed" !== n) ||
                !w(/<\/no(script|embed)/i, t.innerHTML)
              ? (At &&
                  3 === t.nodeType &&
                  ((e = t.textContent),
                  (e = g(e, pt, " ")),
                  (e = g(e, _t, " ")),
                  t.textContent !== e &&
                    (p(i.removed, { element: t.cloneNode() }),
                    (t.textContent = e))),
                ce("afterSanitizeElements", t, null),
                !1)
              : (re(t), !0);
          },
          de = function (t, e, i) {
            if (Pt && ("id" === e || "name" === e) && (i in r || i in Yt))
              return !1;
            if (St && w(mt, e));
            else if (Lt && w(gt, e));
            else {
              if (!kt[e] || Et[e]) return !1;
              if (Ut[e]);
              else if (w(wt, g(i, yt, "")));
              else if (
                ("src" !== e && "xlink:href" !== e && "href" !== e) ||
                "script" === t ||
                0 !== v(i, "data:") ||
                !Bt[t]
              )
                if (Dt && !w(vt, g(i, yt, "")));
                else if (i) return !1;
            }
            return !0;
          },
          fe = function (t) {
            var e = void 0,
              n = void 0,
              r = void 0,
              a = void 0;
            ce("beforeSanitizeAttributes", t, null);
            var o = t.attributes;
            if (o) {
              var s = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: kt,
              };
              for (a = o.length; a--; ) {
                var l = (e = o[a]),
                  h = l.name,
                  c = l.namespaceURI;
                if (
                  ((n = y(e.value)),
                  (r = _(h)),
                  (s.attrName = r),
                  (s.attrValue = n),
                  (s.keepAttr = !0),
                  (s.forceKeepAttr = void 0),
                  ce("uponSanitizeAttribute", t, s),
                  (n = s.attrValue),
                  !s.forceKeepAttr && (ae(h, t), s.keepAttr))
                )
                  if (w(/\/>/i, n)) ae(h, t);
                  else {
                    At && ((n = g(n, pt, " ")), (n = g(n, _t, " ")));
                    var u = t.nodeName.toLowerCase();
                    if (de(u, r, n))
                      try {
                        c ? t.setAttributeNS(c, h, n) : t.setAttribute(h, n),
                          f(i.removed);
                      } catch (t) {}
                  }
              }
              ce("afterSanitizeAttributes", t, null);
            }
          },
          pe = function t(e) {
            var i = void 0,
              n = se(e);
            for (ce("beforeSanitizeShadowDOM", e, null); (i = n.nextNode()); )
              ce("uponSanitizeShadowNode", i, null),
                ue(i) || (i.content instanceof o && t(i.content), fe(i));
            ce("afterSanitizeShadowDOM", e, null);
          };
        return (
          (i.sanitize = function (t, r) {
            var a = void 0,
              s = void 0,
              h = void 0,
              c = void 0,
              u = void 0;
            if ((t || (t = "\x3c!--\x3e"), "string" != typeof t && !he(t))) {
              if ("function" != typeof t.toString)
                throw b("toString is not a function");
              if ("string" != typeof (t = t.toString()))
                throw b("dirty is not a string, aborting");
            }
            if (!i.isSupported) {
              if (
                "object" === W(e.toStaticHTML) ||
                "function" == typeof e.toStaticHTML
              ) {
                if ("string" == typeof t) return e.toStaticHTML(t);
                if (he(t)) return e.toStaticHTML(t.outerHTML);
              }
              return t;
            }
            if (
              (Ct || Vt(r),
              (i.removed = []),
              "string" == typeof t && (Ft = !1),
              Ft)
            );
            else if (t instanceof l)
              (1 ===
                (s = (a = oe("\x3c!----\x3e")).ownerDocument.importNode(t, !0))
                  .nodeType &&
                "BODY" === s.nodeName) ||
              "HTML" === s.nodeName
                ? (a = s)
                : a.appendChild(s);
            else {
              if (!It && !At && !jt && -1 === t.indexOf("<"))
                return rt && Rt ? rt.createHTML(t) : t;
              if (!(a = oe(t))) return It ? null : at;
            }
            a && Nt && re(a.firstChild);
            for (var d = se(Ft ? t : a); (h = d.nextNode()); )
              (3 === h.nodeType && h === c) ||
                ue(h) ||
                (h.content instanceof o && pe(h.content), fe(h), (c = h));
            if (((c = null), Ft)) return t;
            if (It) {
              if (Ot)
                for (u = ct.call(a.ownerDocument); a.firstChild; )
                  u.appendChild(a.firstChild);
              else u = a;
              return zt && (u = ut.call(n, u, !0)), u;
            }
            var f = jt ? a.outerHTML : a.innerHTML;
            return (
              At && ((f = g(f, pt, " ")), (f = g(f, _t, " "))),
              rt && Rt ? rt.createHTML(f) : f
            );
          }),
          (i.setConfig = function (t) {
            Vt(t), (Ct = !0);
          }),
          (i.clearConfig = function () {
            (Gt = null), (Ct = !1);
          }),
          (i.isValidAttribute = function (t, e, i) {
            Gt || Vt({});
            var n = _(t),
              r = _(e);
            return de(n, r, i);
          }),
          (i.addHook = function (t, e) {
            "function" == typeof e && ((ft[t] = ft[t] || []), p(ft[t], e));
          }),
          (i.removeHook = function (t) {
            ft[t] && f(ft[t]);
          }),
          (i.removeHooks = function (t) {
            ft[t] && (ft[t] = []);
          }),
          (i.removeAllHooks = function () {
            ft = {};
          }),
          i
        );
      })();
    })();
  },
  function (t, e, i) {},
  function (t, e, i) {
    (function (t, n) {
      var r;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function () {
        var a = "Expected a function",
          o = "__lodash_placeholder__",
          s = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256],
          ],
          l = "[object Arguments]",
          h = "[object Array]",
          c = "[object Boolean]",
          u = "[object Date]",
          d = "[object Error]",
          f = "[object Function]",
          p = "[object GeneratorFunction]",
          _ = "[object Map]",
          m = "[object Number]",
          g = "[object Object]",
          v = "[object RegExp]",
          y = "[object Set]",
          w = "[object String]",
          b = "[object Symbol]",
          x = "[object WeakMap]",
          k = "[object ArrayBuffer]",
          T = "[object DataView]",
          M = "[object Float32Array]",
          E = "[object Float64Array]",
          L = "[object Int8Array]",
          S = "[object Int16Array]",
          D = "[object Int32Array]",
          A = "[object Uint8Array]",
          j = "[object Uint16Array]",
          C = "[object Uint32Array]",
          N = /\b__p \+= '';/g,
          I = /\b(__p \+=) '' \+/g,
          O = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          z = /&(?:amp|lt|gt|quot|#39);/g,
          R = /[&<>"']/g,
          P = RegExp(z.source),
          q = RegExp(R.source),
          F = /<%-([\s\S]+?)%>/g,
          H = /<%([\s\S]+?)%>/g,
          $ = /<%=([\s\S]+?)%>/g,
          B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          W = /^\w*$/,
          U =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Z = /[\\^$.*+?()[\]{}|]/g,
          G = RegExp(Z.source),
          Y = /^\s+/,
          V = /\s/,
          J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          X = /\{\n\/\* \[wrapped with (.+)\] \*/,
          K = /,? & /,
          Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          tt = /[()=,{}\[\]\/\s]/,
          et = /\\(\\)?/g,
          it = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          nt = /\w*$/,
          rt = /^[-+]0x[0-9a-f]+$/i,
          at = /^0b[01]+$/i,
          ot = /^\[object .+?Constructor\]$/,
          st = /^0o[0-7]+$/i,
          lt = /^(?:0|[1-9]\d*)$/,
          ht = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          ct = /($^)/,
          ut = /['\n\r\u2028\u2029\\]/g,
          dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          ft =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          pt = "[\\ud800-\\udfff]",
          _t = "[" + ft + "]",
          mt = "[" + dt + "]",
          gt = "\\d+",
          vt = "[\\u2700-\\u27bf]",
          yt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          wt =
            "[^\\ud800-\\udfff" +
            ft +
            gt +
            "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          bt = "\\ud83c[\\udffb-\\udfff]",
          xt = "[^\\ud800-\\udfff]",
          kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Tt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Mt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          Et = "(?:" + yt + "|" + wt + ")",
          Lt = "(?:" + Mt + "|" + wt + ")",
          St = "(?:" + mt + "|" + bt + ")" + "?",
          Dt =
            "[\\ufe0e\\ufe0f]?" +
            St +
            ("(?:\\u200d(?:" +
              [xt, kt, Tt].join("|") +
              ")[\\ufe0e\\ufe0f]?" +
              St +
              ")*"),
          At = "(?:" + [vt, kt, Tt].join("|") + ")" + Dt,
          jt = "(?:" + [xt + mt + "?", mt, kt, Tt, pt].join("|") + ")",
          Ct = RegExp("['’]", "g"),
          Nt = RegExp(mt, "g"),
          It = RegExp(bt + "(?=" + bt + ")|" + jt + Dt, "g"),
          Ot = RegExp(
            [
              Mt +
                "?" +
                yt +
                "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                [_t, Mt, "$"].join("|") +
                ")",
              Lt +
                "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [_t, Mt + Et, "$"].join("|") +
                ")",
              Mt + "?" + Et + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              Mt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              gt,
              At,
            ].join("|"),
            "g"
          ),
          zt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
          Rt =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Pt = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          qt = -1,
          Ft = {};
        (Ft[M] =
          Ft[E] =
          Ft[L] =
          Ft[S] =
          Ft[D] =
          Ft[A] =
          Ft["[object Uint8ClampedArray]"] =
          Ft[j] =
          Ft[C] =
            !0),
          (Ft[l] =
            Ft[h] =
            Ft[k] =
            Ft[c] =
            Ft[T] =
            Ft[u] =
            Ft[d] =
            Ft[f] =
            Ft[_] =
            Ft[m] =
            Ft[g] =
            Ft[v] =
            Ft[y] =
            Ft[w] =
            Ft[x] =
              !1);
        var Ht = {};
        (Ht[l] =
          Ht[h] =
          Ht[k] =
          Ht[T] =
          Ht[c] =
          Ht[u] =
          Ht[M] =
          Ht[E] =
          Ht[L] =
          Ht[S] =
          Ht[D] =
          Ht[_] =
          Ht[m] =
          Ht[g] =
          Ht[v] =
          Ht[y] =
          Ht[w] =
          Ht[b] =
          Ht[A] =
          Ht["[object Uint8ClampedArray]"] =
          Ht[j] =
          Ht[C] =
            !0),
          (Ht[d] = Ht[f] = Ht[x] = !1);
        var $t = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Bt = parseFloat,
          Wt = parseInt,
          Ut = "object" == typeof t && t && t.Object === Object && t,
          Zt =
            "object" == typeof self && self && self.Object === Object && self,
          Gt = Ut || Zt || Function("return this")(),
          Yt = e && !e.nodeType && e,
          Vt = Yt && "object" == typeof n && n && !n.nodeType && n,
          Jt = Vt && Vt.exports === Yt,
          Xt = Jt && Ut.process,
          Kt = (function () {
            try {
              var t = Vt && Vt.require && Vt.require("util").types;
              return t || (Xt && Xt.binding && Xt.binding("util"));
            } catch (t) {}
          })(),
          Qt = Kt && Kt.isArrayBuffer,
          te = Kt && Kt.isDate,
          ee = Kt && Kt.isMap,
          ie = Kt && Kt.isRegExp,
          ne = Kt && Kt.isSet,
          re = Kt && Kt.isTypedArray;
        function ae(t, e, i) {
          switch (i.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, i[0]);
            case 2:
              return t.call(e, i[0], i[1]);
            case 3:
              return t.call(e, i[0], i[1], i[2]);
          }
          return t.apply(e, i);
        }
        function oe(t, e, i, n) {
          for (var r = -1, a = null == t ? 0 : t.length; ++r < a; ) {
            var o = t[r];
            e(n, o, i(o), t);
          }
          return n;
        }
        function se(t, e) {
          for (
            var i = -1, n = null == t ? 0 : t.length;
            ++i < n && !1 !== e(t[i], i, t);

          );
          return t;
        }
        function le(t, e) {
          for (var i = null == t ? 0 : t.length; i-- && !1 !== e(t[i], i, t); );
          return t;
        }
        function he(t, e) {
          for (var i = -1, n = null == t ? 0 : t.length; ++i < n; )
            if (!e(t[i], i, t)) return !1;
          return !0;
        }
        function ce(t, e) {
          for (
            var i = -1, n = null == t ? 0 : t.length, r = 0, a = [];
            ++i < n;

          ) {
            var o = t[i];
            e(o, i, t) && (a[r++] = o);
          }
          return a;
        }
        function ue(t, e) {
          return !!(null == t ? 0 : t.length) && be(t, e, 0) > -1;
        }
        function de(t, e, i) {
          for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (i(e, t[n])) return !0;
          return !1;
        }
        function fe(t, e) {
          for (
            var i = -1, n = null == t ? 0 : t.length, r = Array(n);
            ++i < n;

          )
            r[i] = e(t[i], i, t);
          return r;
        }
        function pe(t, e) {
          for (var i = -1, n = e.length, r = t.length; ++i < n; )
            t[r + i] = e[i];
          return t;
        }
        function _e(t, e, i, n) {
          var r = -1,
            a = null == t ? 0 : t.length;
          for (n && a && (i = t[++r]); ++r < a; ) i = e(i, t[r], r, t);
          return i;
        }
        function me(t, e, i, n) {
          var r = null == t ? 0 : t.length;
          for (n && r && (i = t[--r]); r--; ) i = e(i, t[r], r, t);
          return i;
        }
        function ge(t, e) {
          for (var i = -1, n = null == t ? 0 : t.length; ++i < n; )
            if (e(t[i], i, t)) return !0;
          return !1;
        }
        var ve = Me("length");
        function ye(t, e, i) {
          var n;
          return (
            i(t, function (t, i, r) {
              if (e(t, i, r)) return (n = i), !1;
            }),
            n
          );
        }
        function we(t, e, i, n) {
          for (var r = t.length, a = i + (n ? 1 : -1); n ? a-- : ++a < r; )
            if (e(t[a], a, t)) return a;
          return -1;
        }
        function be(t, e, i) {
          return e == e
            ? (function (t, e, i) {
                var n = i - 1,
                  r = t.length;
                for (; ++n < r; ) if (t[n] === e) return n;
                return -1;
              })(t, e, i)
            : we(t, ke, i);
        }
        function xe(t, e, i, n) {
          for (var r = i - 1, a = t.length; ++r < a; ) if (n(t[r], e)) return r;
          return -1;
        }
        function ke(t) {
          return t != t;
        }
        function Te(t, e) {
          var i = null == t ? 0 : t.length;
          return i ? Se(t, e) / i : NaN;
        }
        function Me(t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        }
        function Ee(t) {
          return function (e) {
            return null == t ? void 0 : t[e];
          };
        }
        function Le(t, e, i, n, r) {
          return (
            r(t, function (t, r, a) {
              i = n ? ((n = !1), t) : e(i, t, r, a);
            }),
            i
          );
        }
        function Se(t, e) {
          for (var i, n = -1, r = t.length; ++n < r; ) {
            var a = e(t[n]);
            void 0 !== a && (i = void 0 === i ? a : i + a);
          }
          return i;
        }
        function De(t, e) {
          for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
          return n;
        }
        function Ae(t) {
          return t ? t.slice(0, Ye(t) + 1).replace(Y, "") : t;
        }
        function je(t) {
          return function (e) {
            return t(e);
          };
        }
        function Ce(t, e) {
          return fe(e, function (e) {
            return t[e];
          });
        }
        function Ne(t, e) {
          return t.has(e);
        }
        function Ie(t, e) {
          for (var i = -1, n = t.length; ++i < n && be(e, t[i], 0) > -1; );
          return i;
        }
        function Oe(t, e) {
          for (var i = t.length; i-- && be(e, t[i], 0) > -1; );
          return i;
        }
        function ze(t, e) {
          for (var i = t.length, n = 0; i--; ) t[i] === e && ++n;
          return n;
        }
        var Re = Ee({
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          }),
          Pe = Ee({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          });
        function qe(t) {
          return "\\" + $t[t];
        }
        function Fe(t) {
          return zt.test(t);
        }
        function He(t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t, n) {
              i[++e] = [n, t];
            }),
            i
          );
        }
        function $e(t, e) {
          return function (i) {
            return t(e(i));
          };
        }
        function Be(t, e) {
          for (var i = -1, n = t.length, r = 0, a = []; ++i < n; ) {
            var s = t[i];
            (s !== e && s !== o) || ((t[i] = o), (a[r++] = i));
          }
          return a;
        }
        function We(t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t) {
              i[++e] = t;
            }),
            i
          );
        }
        function Ue(t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t) {
              i[++e] = [t, t];
            }),
            i
          );
        }
        function Ze(t) {
          return Fe(t)
            ? (function (t) {
                var e = (It.lastIndex = 0);
                for (; It.test(t); ) ++e;
                return e;
              })(t)
            : ve(t);
        }
        function Ge(t) {
          return Fe(t)
            ? (function (t) {
                return t.match(It) || [];
              })(t)
            : (function (t) {
                return t.split("");
              })(t);
        }
        function Ye(t) {
          for (var e = t.length; e-- && V.test(t.charAt(e)); );
          return e;
        }
        var Ve = Ee({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        });
        var Je = (function t(e) {
          var i,
            n = (e =
              null == e ? Gt : Je.defaults(Gt.Object(), e, Je.pick(Gt, Pt)))
              .Array,
            r = e.Date,
            V = e.Error,
            dt = e.Function,
            ft = e.Math,
            pt = e.Object,
            _t = e.RegExp,
            mt = e.String,
            gt = e.TypeError,
            vt = n.prototype,
            yt = dt.prototype,
            wt = pt.prototype,
            bt = e["__core-js_shared__"],
            xt = yt.toString,
            kt = wt.hasOwnProperty,
            Tt = 0,
            Mt = (i = /[^.]+$/.exec((bt && bt.keys && bt.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + i
              : "",
            Et = wt.toString,
            Lt = xt.call(pt),
            St = Gt._,
            Dt = _t(
              "^" +
                xt
                  .call(kt)
                  .replace(Z, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            At = Jt ? e.Buffer : void 0,
            jt = e.Symbol,
            It = e.Uint8Array,
            zt = At ? At.allocUnsafe : void 0,
            $t = $e(pt.getPrototypeOf, pt),
            Ut = pt.create,
            Zt = wt.propertyIsEnumerable,
            Yt = vt.splice,
            Vt = jt ? jt.isConcatSpreadable : void 0,
            Xt = jt ? jt.iterator : void 0,
            Kt = jt ? jt.toStringTag : void 0,
            ve = (function () {
              try {
                var t = ta(pt, "defineProperty");
                return t({}, "", {}), t;
              } catch (t) {}
            })(),
            Ee = e.clearTimeout !== Gt.clearTimeout && e.clearTimeout,
            Xe = r && r.now !== Gt.Date.now && r.now,
            Ke = e.setTimeout !== Gt.setTimeout && e.setTimeout,
            Qe = ft.ceil,
            ti = ft.floor,
            ei = pt.getOwnPropertySymbols,
            ii = At ? At.isBuffer : void 0,
            ni = e.isFinite,
            ri = vt.join,
            ai = $e(pt.keys, pt),
            oi = ft.max,
            si = ft.min,
            li = r.now,
            hi = e.parseInt,
            ci = ft.random,
            ui = vt.reverse,
            di = ta(e, "DataView"),
            fi = ta(e, "Map"),
            pi = ta(e, "Promise"),
            _i = ta(e, "Set"),
            mi = ta(e, "WeakMap"),
            gi = ta(pt, "create"),
            vi = mi && new mi(),
            yi = {},
            wi = La(di),
            bi = La(fi),
            xi = La(pi),
            ki = La(_i),
            Ti = La(mi),
            Mi = jt ? jt.prototype : void 0,
            Ei = Mi ? Mi.valueOf : void 0,
            Li = Mi ? Mi.toString : void 0;
          function Si(t) {
            if (Uo(t) && !Io(t) && !(t instanceof Ci)) {
              if (t instanceof ji) return t;
              if (kt.call(t, "__wrapped__")) return Sa(t);
            }
            return new ji(t);
          }
          var Di = (function () {
            function t() {}
            return function (e) {
              if (!Wo(e)) return {};
              if (Ut) return Ut(e);
              t.prototype = e;
              var i = new t();
              return (t.prototype = void 0), i;
            };
          })();
          function Ai() {}
          function ji(t, e) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!e),
              (this.__index__ = 0),
              (this.__values__ = void 0);
          }
          function Ci(t) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = 4294967295),
              (this.__views__ = []);
          }
          function Ni(t) {
            var e = -1,
              i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function Ii(t) {
            var e = -1,
              i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function Oi(t) {
            var e = -1,
              i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function zi(t) {
            var e = -1,
              i = null == t ? 0 : t.length;
            for (this.__data__ = new Oi(); ++e < i; ) this.add(t[e]);
          }
          function Ri(t) {
            var e = (this.__data__ = new Ii(t));
            this.size = e.size;
          }
          function Pi(t, e) {
            var i = Io(t),
              n = !i && No(t),
              r = !i && !n && Po(t),
              a = !i && !n && !r && Qo(t),
              o = i || n || r || a,
              s = o ? De(t.length, mt) : [],
              l = s.length;
            for (var h in t)
              (!e && !kt.call(t, h)) ||
                (o &&
                  ("length" == h ||
                    (r && ("offset" == h || "parent" == h)) ||
                    (a &&
                      ("buffer" == h ||
                        "byteLength" == h ||
                        "byteOffset" == h)) ||
                    sa(h, l))) ||
                s.push(h);
            return s;
          }
          function qi(t) {
            var e = t.length;
            return e ? t[Rn(0, e - 1)] : void 0;
          }
          function Fi(t, e) {
            return Ta(vr(t), Vi(e, 0, t.length));
          }
          function Hi(t) {
            return Ta(vr(t));
          }
          function $i(t, e, i) {
            ((void 0 === i || Ao(t[e], i)) && (void 0 !== i || e in t)) ||
              Gi(t, e, i);
          }
          function Bi(t, e, i) {
            var n = t[e];
            (kt.call(t, e) && Ao(n, i) && (void 0 !== i || e in t)) ||
              Gi(t, e, i);
          }
          function Wi(t, e) {
            for (var i = t.length; i--; ) if (Ao(t[i][0], e)) return i;
            return -1;
          }
          function Ui(t, e, i, n) {
            return (
              tn(t, function (t, r, a) {
                e(n, t, i(t), a);
              }),
              n
            );
          }
          function Zi(t, e) {
            return t && yr(e, bs(e), t);
          }
          function Gi(t, e, i) {
            "__proto__" == e && ve
              ? ve(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: i,
                  writable: !0,
                })
              : (t[e] = i);
          }
          function Yi(t, e) {
            for (var i = -1, r = e.length, a = n(r), o = null == t; ++i < r; )
              a[i] = o ? void 0 : ms(t, e[i]);
            return a;
          }
          function Vi(t, e, i) {
            return (
              t == t &&
                (void 0 !== i && (t = t <= i ? t : i),
                void 0 !== e && (t = t >= e ? t : e)),
              t
            );
          }
          function Ji(t, e, i, n, r, a) {
            var o,
              s = 1 & e,
              h = 2 & e,
              d = 4 & e;
            if ((i && (o = r ? i(t, n, r, a) : i(t)), void 0 !== o)) return o;
            if (!Wo(t)) return t;
            var x = Io(t);
            if (x) {
              if (
                ((o = (function (t) {
                  var e = t.length,
                    i = new t.constructor(e);
                  e &&
                    "string" == typeof t[0] &&
                    kt.call(t, "index") &&
                    ((i.index = t.index), (i.input = t.input));
                  return i;
                })(t)),
                !s)
              )
                return vr(t, o);
            } else {
              var N = na(t),
                I = N == f || N == p;
              if (Po(t)) return dr(t, s);
              if (N == g || N == l || (I && !r)) {
                if (((o = h || I ? {} : aa(t)), !s))
                  return h
                    ? (function (t, e) {
                        return yr(t, ia(t), e);
                      })(
                        t,
                        (function (t, e) {
                          return t && yr(e, xs(e), t);
                        })(o, t)
                      )
                    : (function (t, e) {
                        return yr(t, ea(t), e);
                      })(t, Zi(o, t));
              } else {
                if (!Ht[N]) return r ? t : {};
                o = (function (t, e, i) {
                  var n = t.constructor;
                  switch (e) {
                    case k:
                      return fr(t);
                    case c:
                    case u:
                      return new n(+t);
                    case T:
                      return (function (t, e) {
                        var i = e ? fr(t.buffer) : t.buffer;
                        return new t.constructor(i, t.byteOffset, t.byteLength);
                      })(t, i);
                    case M:
                    case E:
                    case L:
                    case S:
                    case D:
                    case A:
                    case "[object Uint8ClampedArray]":
                    case j:
                    case C:
                      return pr(t, i);
                    case _:
                      return new n();
                    case m:
                    case w:
                      return new n(t);
                    case v:
                      return (function (t) {
                        var e = new t.constructor(t.source, nt.exec(t));
                        return (e.lastIndex = t.lastIndex), e;
                      })(t);
                    case y:
                      return new n();
                    case b:
                      return (r = t), Ei ? pt(Ei.call(r)) : {};
                  }
                  var r;
                })(t, N, s);
              }
            }
            a || (a = new Ri());
            var O = a.get(t);
            if (O) return O;
            a.set(t, o),
              Jo(t)
                ? t.forEach(function (n) {
                    o.add(Ji(n, e, i, n, t, a));
                  })
                : Zo(t) &&
                  t.forEach(function (n, r) {
                    o.set(r, Ji(n, e, i, r, t, a));
                  });
            var z = x ? void 0 : (d ? (h ? Gr : Zr) : h ? xs : bs)(t);
            return (
              se(z || t, function (n, r) {
                z && (n = t[(r = n)]), Bi(o, r, Ji(n, e, i, r, t, a));
              }),
              o
            );
          }
          function Xi(t, e, i) {
            var n = i.length;
            if (null == t) return !n;
            for (t = pt(t); n--; ) {
              var r = i[n],
                a = e[r],
                o = t[r];
              if ((void 0 === o && !(r in t)) || !a(o)) return !1;
            }
            return !0;
          }
          function Ki(t, e, i) {
            if ("function" != typeof t) throw new gt(a);
            return wa(function () {
              t.apply(void 0, i);
            }, e);
          }
          function Qi(t, e, i, n) {
            var r = -1,
              a = ue,
              o = !0,
              s = t.length,
              l = [],
              h = e.length;
            if (!s) return l;
            i && (e = fe(e, je(i))),
              n
                ? ((a = de), (o = !1))
                : e.length >= 200 && ((a = Ne), (o = !1), (e = new zi(e)));
            t: for (; ++r < s; ) {
              var c = t[r],
                u = null == i ? c : i(c);
              if (((c = n || 0 !== c ? c : 0), o && u == u)) {
                for (var d = h; d--; ) if (e[d] === u) continue t;
                l.push(c);
              } else a(e, u, n) || l.push(c);
            }
            return l;
          }
          (Si.templateSettings = {
            escape: F,
            evaluate: H,
            interpolate: $,
            variable: "",
            imports: { _: Si },
          }),
            (Si.prototype = Ai.prototype),
            (Si.prototype.constructor = Si),
            (ji.prototype = Di(Ai.prototype)),
            (ji.prototype.constructor = ji),
            (Ci.prototype = Di(Ai.prototype)),
            (Ci.prototype.constructor = Ci),
            (Ni.prototype.clear = function () {
              (this.__data__ = gi ? gi(null) : {}), (this.size = 0);
            }),
            (Ni.prototype.delete = function (t) {
              var e = this.has(t) && delete this.__data__[t];
              return (this.size -= e ? 1 : 0), e;
            }),
            (Ni.prototype.get = function (t) {
              var e = this.__data__;
              if (gi) {
                var i = e[t];
                return "__lodash_hash_undefined__" === i ? void 0 : i;
              }
              return kt.call(e, t) ? e[t] : void 0;
            }),
            (Ni.prototype.has = function (t) {
              var e = this.__data__;
              return gi ? void 0 !== e[t] : kt.call(e, t);
            }),
            (Ni.prototype.set = function (t, e) {
              var i = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (i[t] = gi && void 0 === e ? "__lodash_hash_undefined__" : e),
                this
              );
            }),
            (Ii.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Ii.prototype.delete = function (t) {
              var e = this.__data__,
                i = Wi(e, t);
              return (
                !(i < 0) &&
                (i == e.length - 1 ? e.pop() : Yt.call(e, i, 1),
                --this.size,
                !0)
              );
            }),
            (Ii.prototype.get = function (t) {
              var e = this.__data__,
                i = Wi(e, t);
              return i < 0 ? void 0 : e[i][1];
            }),
            (Ii.prototype.has = function (t) {
              return Wi(this.__data__, t) > -1;
            }),
            (Ii.prototype.set = function (t, e) {
              var i = this.__data__,
                n = Wi(i, t);
              return (
                n < 0 ? (++this.size, i.push([t, e])) : (i[n][1] = e), this
              );
            }),
            (Oi.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Ni(),
                  map: new (fi || Ii)(),
                  string: new Ni(),
                });
            }),
            (Oi.prototype.delete = function (t) {
              var e = Kr(this, t).delete(t);
              return (this.size -= e ? 1 : 0), e;
            }),
            (Oi.prototype.get = function (t) {
              return Kr(this, t).get(t);
            }),
            (Oi.prototype.has = function (t) {
              return Kr(this, t).has(t);
            }),
            (Oi.prototype.set = function (t, e) {
              var i = Kr(this, t),
                n = i.size;
              return i.set(t, e), (this.size += i.size == n ? 0 : 1), this;
            }),
            (zi.prototype.add = zi.prototype.push =
              function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
            (zi.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Ri.prototype.clear = function () {
              (this.__data__ = new Ii()), (this.size = 0);
            }),
            (Ri.prototype.delete = function (t) {
              var e = this.__data__,
                i = e.delete(t);
              return (this.size = e.size), i;
            }),
            (Ri.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (Ri.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Ri.prototype.set = function (t, e) {
              var i = this.__data__;
              if (i instanceof Ii) {
                var n = i.__data__;
                if (!fi || n.length < 199)
                  return n.push([t, e]), (this.size = ++i.size), this;
                i = this.__data__ = new Oi(n);
              }
              return i.set(t, e), (this.size = i.size), this;
            });
          var tn = xr(hn),
            en = xr(cn, !0);
          function nn(t, e) {
            var i = !0;
            return (
              tn(t, function (t, n, r) {
                return (i = !!e(t, n, r));
              }),
              i
            );
          }
          function rn(t, e, i) {
            for (var n = -1, r = t.length; ++n < r; ) {
              var a = t[n],
                o = e(a);
              if (null != o && (void 0 === s ? o == o && !Ko(o) : i(o, s)))
                var s = o,
                  l = a;
            }
            return l;
          }
          function an(t, e) {
            var i = [];
            return (
              tn(t, function (t, n, r) {
                e(t, n, r) && i.push(t);
              }),
              i
            );
          }
          function on(t, e, i, n, r) {
            var a = -1,
              o = t.length;
            for (i || (i = oa), r || (r = []); ++a < o; ) {
              var s = t[a];
              e > 0 && i(s)
                ? e > 1
                  ? on(s, e - 1, i, n, r)
                  : pe(r, s)
                : n || (r[r.length] = s);
            }
            return r;
          }
          var sn = kr(),
            ln = kr(!0);
          function hn(t, e) {
            return t && sn(t, e, bs);
          }
          function cn(t, e) {
            return t && ln(t, e, bs);
          }
          function un(t, e) {
            return ce(e, function (e) {
              return Ho(t[e]);
            });
          }
          function dn(t, e) {
            for (var i = 0, n = (e = lr(e, t)).length; null != t && i < n; )
              t = t[Ea(e[i++])];
            return i && i == n ? t : void 0;
          }
          function fn(t, e, i) {
            var n = e(t);
            return Io(t) ? n : pe(n, i(t));
          }
          function pn(t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : Kt && Kt in pt(t)
              ? (function (t) {
                  var e = kt.call(t, Kt),
                    i = t[Kt];
                  try {
                    t[Kt] = void 0;
                    var n = !0;
                  } catch (t) {}
                  var r = Et.call(t);
                  n && (e ? (t[Kt] = i) : delete t[Kt]);
                  return r;
                })(t)
              : (function (t) {
                  return Et.call(t);
                })(t);
          }
          function _n(t, e) {
            return t > e;
          }
          function mn(t, e) {
            return null != t && kt.call(t, e);
          }
          function gn(t, e) {
            return null != t && e in pt(t);
          }
          function vn(t, e, i) {
            for (
              var r = i ? de : ue,
                a = t[0].length,
                o = t.length,
                s = o,
                l = n(o),
                h = 1 / 0,
                c = [];
              s--;

            ) {
              var u = t[s];
              s && e && (u = fe(u, je(e))),
                (h = si(u.length, h)),
                (l[s] =
                  !i && (e || (a >= 120 && u.length >= 120))
                    ? new zi(s && u)
                    : void 0);
            }
            u = t[0];
            var d = -1,
              f = l[0];
            t: for (; ++d < a && c.length < h; ) {
              var p = u[d],
                _ = e ? e(p) : p;
              if (((p = i || 0 !== p ? p : 0), !(f ? Ne(f, _) : r(c, _, i)))) {
                for (s = o; --s; ) {
                  var m = l[s];
                  if (!(m ? Ne(m, _) : r(t[s], _, i))) continue t;
                }
                f && f.push(_), c.push(p);
              }
            }
            return c;
          }
          function yn(t, e, i) {
            var n = null == (t = ma(t, (e = lr(e, t)))) ? t : t[Ea(qa(e))];
            return null == n ? void 0 : ae(n, t, i);
          }
          function wn(t) {
            return Uo(t) && pn(t) == l;
          }
          function bn(t, e, i, n, r) {
            return (
              t === e ||
              (null == t || null == e || (!Uo(t) && !Uo(e))
                ? t != t && e != e
                : (function (t, e, i, n, r, a) {
                    var o = Io(t),
                      s = Io(e),
                      f = o ? h : na(t),
                      p = s ? h : na(e),
                      x = (f = f == l ? g : f) == g,
                      M = (p = p == l ? g : p) == g,
                      E = f == p;
                    if (E && Po(t)) {
                      if (!Po(e)) return !1;
                      (o = !0), (x = !1);
                    }
                    if (E && !x)
                      return (
                        a || (a = new Ri()),
                        o || Qo(t)
                          ? Wr(t, e, i, n, r, a)
                          : (function (t, e, i, n, r, a, o) {
                              switch (i) {
                                case T:
                                  if (
                                    t.byteLength != e.byteLength ||
                                    t.byteOffset != e.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (e = e.buffer);
                                case k:
                                  return !(
                                    t.byteLength != e.byteLength ||
                                    !a(new It(t), new It(e))
                                  );
                                case c:
                                case u:
                                case m:
                                  return Ao(+t, +e);
                                case d:
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case v:
                                case w:
                                  return t == e + "";
                                case _:
                                  var s = He;
                                case y:
                                  var l = 1 & n;
                                  if ((s || (s = We), t.size != e.size && !l))
                                    return !1;
                                  var h = o.get(t);
                                  if (h) return h == e;
                                  (n |= 2), o.set(t, e);
                                  var f = Wr(s(t), s(e), n, r, a, o);
                                  return o.delete(t), f;
                                case b:
                                  if (Ei) return Ei.call(t) == Ei.call(e);
                              }
                              return !1;
                            })(t, e, f, i, n, r, a)
                      );
                    if (!(1 & i)) {
                      var L = x && kt.call(t, "__wrapped__"),
                        S = M && kt.call(e, "__wrapped__");
                      if (L || S) {
                        var D = L ? t.value() : t,
                          A = S ? e.value() : e;
                        return a || (a = new Ri()), r(D, A, i, n, a);
                      }
                    }
                    if (!E) return !1;
                    return (
                      a || (a = new Ri()),
                      (function (t, e, i, n, r, a) {
                        var o = 1 & i,
                          s = Zr(t),
                          l = s.length,
                          h = Zr(e).length;
                        if (l != h && !o) return !1;
                        var c = l;
                        for (; c--; ) {
                          var u = s[c];
                          if (!(o ? u in e : kt.call(e, u))) return !1;
                        }
                        var d = a.get(t),
                          f = a.get(e);
                        if (d && f) return d == e && f == t;
                        var p = !0;
                        a.set(t, e), a.set(e, t);
                        var _ = o;
                        for (; ++c < l; ) {
                          u = s[c];
                          var m = t[u],
                            g = e[u];
                          if (n)
                            var v = o
                              ? n(g, m, u, e, t, a)
                              : n(m, g, u, t, e, a);
                          if (
                            !(void 0 === v ? m === g || r(m, g, i, n, a) : v)
                          ) {
                            p = !1;
                            break;
                          }
                          _ || (_ = "constructor" == u);
                        }
                        if (p && !_) {
                          var y = t.constructor,
                            w = e.constructor;
                          y != w &&
                            "constructor" in t &&
                            "constructor" in e &&
                            !(
                              "function" == typeof y &&
                              y instanceof y &&
                              "function" == typeof w &&
                              w instanceof w
                            ) &&
                            (p = !1);
                        }
                        return a.delete(t), a.delete(e), p;
                      })(t, e, i, n, r, a)
                    );
                  })(t, e, i, n, bn, r))
            );
          }
          function xn(t, e, i, n) {
            var r = i.length,
              a = r,
              o = !n;
            if (null == t) return !a;
            for (t = pt(t); r--; ) {
              var s = i[r];
              if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
            }
            for (; ++r < a; ) {
              var l = (s = i[r])[0],
                h = t[l],
                c = s[1];
              if (o && s[2]) {
                if (void 0 === h && !(l in t)) return !1;
              } else {
                var u = new Ri();
                if (n) var d = n(h, c, l, t, e, u);
                if (!(void 0 === d ? bn(c, h, 3, n, u) : d)) return !1;
              }
            }
            return !0;
          }
          function kn(t) {
            return (
              !(!Wo(t) || ((e = t), Mt && Mt in e)) &&
              (Ho(t) ? Dt : ot).test(La(t))
            );
            var e;
          }
          function Tn(t) {
            return "function" == typeof t
              ? t
              : null == t
              ? Gs
              : "object" == typeof t
              ? Io(t)
                ? An(t[0], t[1])
                : Dn(t)
              : il(t);
          }
          function Mn(t) {
            if (!da(t)) return ai(t);
            var e = [];
            for (var i in pt(t))
              kt.call(t, i) && "constructor" != i && e.push(i);
            return e;
          }
          function En(t) {
            if (!Wo(t))
              return (function (t) {
                var e = [];
                if (null != t) for (var i in pt(t)) e.push(i);
                return e;
              })(t);
            var e = da(t),
              i = [];
            for (var n in t)
              ("constructor" != n || (!e && kt.call(t, n))) && i.push(n);
            return i;
          }
          function Ln(t, e) {
            return t < e;
          }
          function Sn(t, e) {
            var i = -1,
              r = zo(t) ? n(t.length) : [];
            return (
              tn(t, function (t, n, a) {
                r[++i] = e(t, n, a);
              }),
              r
            );
          }
          function Dn(t) {
            var e = Qr(t);
            return 1 == e.length && e[0][2]
              ? pa(e[0][0], e[0][1])
              : function (i) {
                  return i === t || xn(i, t, e);
                };
          }
          function An(t, e) {
            return ha(t) && fa(e)
              ? pa(Ea(t), e)
              : function (i) {
                  var n = ms(i, t);
                  return void 0 === n && n === e ? gs(i, t) : bn(e, n, 3);
                };
          }
          function jn(t, e, i, n, r) {
            t !== e &&
              sn(
                e,
                function (a, o) {
                  if ((r || (r = new Ri()), Wo(a)))
                    !(function (t, e, i, n, r, a, o) {
                      var s = va(t, i),
                        l = va(e, i),
                        h = o.get(l);
                      if (h) return void $i(t, i, h);
                      var c = a ? a(s, l, i + "", t, e, o) : void 0,
                        u = void 0 === c;
                      if (u) {
                        var d = Io(l),
                          f = !d && Po(l),
                          p = !d && !f && Qo(l);
                        (c = l),
                          d || f || p
                            ? Io(s)
                              ? (c = s)
                              : Ro(s)
                              ? (c = vr(s))
                              : f
                              ? ((u = !1), (c = dr(l, !0)))
                              : p
                              ? ((u = !1), (c = pr(l, !0)))
                              : (c = [])
                            : Yo(l) || No(l)
                            ? ((c = s),
                              No(s)
                                ? (c = ss(s))
                                : (Wo(s) && !Ho(s)) || (c = aa(l)))
                            : (u = !1);
                      }
                      u && (o.set(l, c), r(c, l, n, a, o), o.delete(l));
                      $i(t, i, c);
                    })(t, e, o, i, jn, n, r);
                  else {
                    var s = n ? n(va(t, o), a, o + "", t, e, r) : void 0;
                    void 0 === s && (s = a), $i(t, o, s);
                  }
                },
                xs
              );
          }
          function Cn(t, e) {
            var i = t.length;
            if (i) return sa((e += e < 0 ? i : 0), i) ? t[e] : void 0;
          }
          function Nn(t, e, i) {
            e = e.length
              ? fe(e, function (t) {
                  return Io(t)
                    ? function (e) {
                        return dn(e, 1 === t.length ? t[0] : t);
                      }
                    : t;
                })
              : [Gs];
            var n = -1;
            return (
              (e = fe(e, je(Xr()))),
              (function (t, e) {
                var i = t.length;
                for (t.sort(e); i--; ) t[i] = t[i].value;
                return t;
              })(
                Sn(t, function (t, i, r) {
                  return {
                    criteria: fe(e, function (e) {
                      return e(t);
                    }),
                    index: ++n,
                    value: t,
                  };
                }),
                function (t, e) {
                  return (function (t, e, i) {
                    var n = -1,
                      r = t.criteria,
                      a = e.criteria,
                      o = r.length,
                      s = i.length;
                    for (; ++n < o; ) {
                      var l = _r(r[n], a[n]);
                      if (l) {
                        if (n >= s) return l;
                        var h = i[n];
                        return l * ("desc" == h ? -1 : 1);
                      }
                    }
                    return t.index - e.index;
                  })(t, e, i);
                }
              )
            );
          }
          function In(t, e, i) {
            for (var n = -1, r = e.length, a = {}; ++n < r; ) {
              var o = e[n],
                s = dn(t, o);
              i(s, o) && $n(a, lr(o, t), s);
            }
            return a;
          }
          function On(t, e, i, n) {
            var r = n ? xe : be,
              a = -1,
              o = e.length,
              s = t;
            for (t === e && (e = vr(e)), i && (s = fe(t, je(i))); ++a < o; )
              for (
                var l = 0, h = e[a], c = i ? i(h) : h;
                (l = r(s, c, l, n)) > -1;

              )
                s !== t && Yt.call(s, l, 1), Yt.call(t, l, 1);
            return t;
          }
          function zn(t, e) {
            for (var i = t ? e.length : 0, n = i - 1; i--; ) {
              var r = e[i];
              if (i == n || r !== a) {
                var a = r;
                sa(r) ? Yt.call(t, r, 1) : tr(t, r);
              }
            }
            return t;
          }
          function Rn(t, e) {
            return t + ti(ci() * (e - t + 1));
          }
          function Pn(t, e) {
            var i = "";
            if (!t || e < 1 || e > 9007199254740991) return i;
            do {
              e % 2 && (i += t), (e = ti(e / 2)) && (t += t);
            } while (e);
            return i;
          }
          function qn(t, e) {
            return ba(_a(t, e, Gs), t + "");
          }
          function Fn(t) {
            return qi(As(t));
          }
          function Hn(t, e) {
            var i = As(t);
            return Ta(i, Vi(e, 0, i.length));
          }
          function $n(t, e, i, n) {
            if (!Wo(t)) return t;
            for (
              var r = -1, a = (e = lr(e, t)).length, o = a - 1, s = t;
              null != s && ++r < a;

            ) {
              var l = Ea(e[r]),
                h = i;
              if ("__proto__" === l || "constructor" === l || "prototype" === l)
                return t;
              if (r != o) {
                var c = s[l];
                void 0 === (h = n ? n(c, l, s) : void 0) &&
                  (h = Wo(c) ? c : sa(e[r + 1]) ? [] : {});
              }
              Bi(s, l, h), (s = s[l]);
            }
            return t;
          }
          var Bn = vi
              ? function (t, e) {
                  return vi.set(t, e), t;
                }
              : Gs,
            Wn = ve
              ? function (t, e) {
                  return ve(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Ws(e),
                    writable: !0,
                  });
                }
              : Gs;
          function Un(t) {
            return Ta(As(t));
          }
          function Zn(t, e, i) {
            var r = -1,
              a = t.length;
            e < 0 && (e = -e > a ? 0 : a + e),
              (i = i > a ? a : i) < 0 && (i += a),
              (a = e > i ? 0 : (i - e) >>> 0),
              (e >>>= 0);
            for (var o = n(a); ++r < a; ) o[r] = t[r + e];
            return o;
          }
          function Gn(t, e) {
            var i;
            return (
              tn(t, function (t, n, r) {
                return !(i = e(t, n, r));
              }),
              !!i
            );
          }
          function Yn(t, e, i) {
            var n = 0,
              r = null == t ? n : t.length;
            if ("number" == typeof e && e == e && r <= 2147483647) {
              for (; n < r; ) {
                var a = (n + r) >>> 1,
                  o = t[a];
                null !== o && !Ko(o) && (i ? o <= e : o < e)
                  ? (n = a + 1)
                  : (r = a);
              }
              return r;
            }
            return Vn(t, e, Gs, i);
          }
          function Vn(t, e, i, n) {
            var r = 0,
              a = null == t ? 0 : t.length;
            if (0 === a) return 0;
            for (
              var o = (e = i(e)) != e,
                s = null === e,
                l = Ko(e),
                h = void 0 === e;
              r < a;

            ) {
              var c = ti((r + a) / 2),
                u = i(t[c]),
                d = void 0 !== u,
                f = null === u,
                p = u == u,
                _ = Ko(u);
              if (o) var m = n || p;
              else
                m = h
                  ? p && (n || d)
                  : s
                  ? p && d && (n || !f)
                  : l
                  ? p && d && !f && (n || !_)
                  : !f && !_ && (n ? u <= e : u < e);
              m ? (r = c + 1) : (a = c);
            }
            return si(a, 4294967294);
          }
          function Jn(t, e) {
            for (var i = -1, n = t.length, r = 0, a = []; ++i < n; ) {
              var o = t[i],
                s = e ? e(o) : o;
              if (!i || !Ao(s, l)) {
                var l = s;
                a[r++] = 0 === o ? 0 : o;
              }
            }
            return a;
          }
          function Xn(t) {
            return "number" == typeof t ? t : Ko(t) ? NaN : +t;
          }
          function Kn(t) {
            if ("string" == typeof t) return t;
            if (Io(t)) return fe(t, Kn) + "";
            if (Ko(t)) return Li ? Li.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function Qn(t, e, i) {
            var n = -1,
              r = ue,
              a = t.length,
              o = !0,
              s = [],
              l = s;
            if (i) (o = !1), (r = de);
            else if (a >= 200) {
              var h = e ? null : Pr(t);
              if (h) return We(h);
              (o = !1), (r = Ne), (l = new zi());
            } else l = e ? [] : s;
            t: for (; ++n < a; ) {
              var c = t[n],
                u = e ? e(c) : c;
              if (((c = i || 0 !== c ? c : 0), o && u == u)) {
                for (var d = l.length; d--; ) if (l[d] === u) continue t;
                e && l.push(u), s.push(c);
              } else r(l, u, i) || (l !== s && l.push(u), s.push(c));
            }
            return s;
          }
          function tr(t, e) {
            return null == (t = ma(t, (e = lr(e, t)))) || delete t[Ea(qa(e))];
          }
          function er(t, e, i, n) {
            return $n(t, e, i(dn(t, e)), n);
          }
          function ir(t, e, i, n) {
            for (
              var r = t.length, a = n ? r : -1;
              (n ? a-- : ++a < r) && e(t[a], a, t);

            );
            return i
              ? Zn(t, n ? 0 : a, n ? a + 1 : r)
              : Zn(t, n ? a + 1 : 0, n ? r : a);
          }
          function nr(t, e) {
            var i = t;
            return (
              i instanceof Ci && (i = i.value()),
              _e(
                e,
                function (t, e) {
                  return e.func.apply(e.thisArg, pe([t], e.args));
                },
                i
              )
            );
          }
          function rr(t, e, i) {
            var r = t.length;
            if (r < 2) return r ? Qn(t[0]) : [];
            for (var a = -1, o = n(r); ++a < r; )
              for (var s = t[a], l = -1; ++l < r; )
                l != a && (o[a] = Qi(o[a] || s, t[l], e, i));
            return Qn(on(o, 1), e, i);
          }
          function ar(t, e, i) {
            for (var n = -1, r = t.length, a = e.length, o = {}; ++n < r; ) {
              var s = n < a ? e[n] : void 0;
              i(o, t[n], s);
            }
            return o;
          }
          function or(t) {
            return Ro(t) ? t : [];
          }
          function sr(t) {
            return "function" == typeof t ? t : Gs;
          }
          function lr(t, e) {
            return Io(t) ? t : ha(t, e) ? [t] : Ma(ls(t));
          }
          var hr = qn;
          function cr(t, e, i) {
            var n = t.length;
            return (i = void 0 === i ? n : i), !e && i >= n ? t : Zn(t, e, i);
          }
          var ur =
            Ee ||
            function (t) {
              return Gt.clearTimeout(t);
            };
          function dr(t, e) {
            if (e) return t.slice();
            var i = t.length,
              n = zt ? zt(i) : new t.constructor(i);
            return t.copy(n), n;
          }
          function fr(t) {
            var e = new t.constructor(t.byteLength);
            return new It(e).set(new It(t)), e;
          }
          function pr(t, e) {
            var i = e ? fr(t.buffer) : t.buffer;
            return new t.constructor(i, t.byteOffset, t.length);
          }
          function _r(t, e) {
            if (t !== e) {
              var i = void 0 !== t,
                n = null === t,
                r = t == t,
                a = Ko(t),
                o = void 0 !== e,
                s = null === e,
                l = e == e,
                h = Ko(e);
              if (
                (!s && !h && !a && t > e) ||
                (a && o && l && !s && !h) ||
                (n && o && l) ||
                (!i && l) ||
                !r
              )
                return 1;
              if (
                (!n && !a && !h && t < e) ||
                (h && i && r && !n && !a) ||
                (s && i && r) ||
                (!o && r) ||
                !l
              )
                return -1;
            }
            return 0;
          }
          function mr(t, e, i, r) {
            for (
              var a = -1,
                o = t.length,
                s = i.length,
                l = -1,
                h = e.length,
                c = oi(o - s, 0),
                u = n(h + c),
                d = !r;
              ++l < h;

            )
              u[l] = e[l];
            for (; ++a < s; ) (d || a < o) && (u[i[a]] = t[a]);
            for (; c--; ) u[l++] = t[a++];
            return u;
          }
          function gr(t, e, i, r) {
            for (
              var a = -1,
                o = t.length,
                s = -1,
                l = i.length,
                h = -1,
                c = e.length,
                u = oi(o - l, 0),
                d = n(u + c),
                f = !r;
              ++a < u;

            )
              d[a] = t[a];
            for (var p = a; ++h < c; ) d[p + h] = e[h];
            for (; ++s < l; ) (f || a < o) && (d[p + i[s]] = t[a++]);
            return d;
          }
          function vr(t, e) {
            var i = -1,
              r = t.length;
            for (e || (e = n(r)); ++i < r; ) e[i] = t[i];
            return e;
          }
          function yr(t, e, i, n) {
            var r = !i;
            i || (i = {});
            for (var a = -1, o = e.length; ++a < o; ) {
              var s = e[a],
                l = n ? n(i[s], t[s], s, i, t) : void 0;
              void 0 === l && (l = t[s]), r ? Gi(i, s, l) : Bi(i, s, l);
            }
            return i;
          }
          function wr(t, e) {
            return function (i, n) {
              var r = Io(i) ? oe : Ui,
                a = e ? e() : {};
              return r(i, t, Xr(n, 2), a);
            };
          }
          function br(t) {
            return qn(function (e, i) {
              var n = -1,
                r = i.length,
                a = r > 1 ? i[r - 1] : void 0,
                o = r > 2 ? i[2] : void 0;
              for (
                a = t.length > 3 && "function" == typeof a ? (r--, a) : void 0,
                  o && la(i[0], i[1], o) && ((a = r < 3 ? void 0 : a), (r = 1)),
                  e = pt(e);
                ++n < r;

              ) {
                var s = i[n];
                s && t(e, s, n, a);
              }
              return e;
            });
          }
          function xr(t, e) {
            return function (i, n) {
              if (null == i) return i;
              if (!zo(i)) return t(i, n);
              for (
                var r = i.length, a = e ? r : -1, o = pt(i);
                (e ? a-- : ++a < r) && !1 !== n(o[a], a, o);

              );
              return i;
            };
          }
          function kr(t) {
            return function (e, i, n) {
              for (var r = -1, a = pt(e), o = n(e), s = o.length; s--; ) {
                var l = o[t ? s : ++r];
                if (!1 === i(a[l], l, a)) break;
              }
              return e;
            };
          }
          function Tr(t) {
            return function (e) {
              var i = Fe((e = ls(e))) ? Ge(e) : void 0,
                n = i ? i[0] : e.charAt(0),
                r = i ? cr(i, 1).join("") : e.slice(1);
              return n[t]() + r;
            };
          }
          function Mr(t) {
            return function (e) {
              return _e(Hs(Ns(e).replace(Ct, "")), t, "");
            };
          }
          function Er(t) {
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
                case 5:
                  return new t(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
              }
              var i = Di(t.prototype),
                n = t.apply(i, e);
              return Wo(n) ? n : i;
            };
          }
          function Lr(t) {
            return function (e, i, n) {
              var r = pt(e);
              if (!zo(e)) {
                var a = Xr(i, 3);
                (e = bs(e)),
                  (i = function (t) {
                    return a(r[t], t, r);
                  });
              }
              var o = t(e, i, n);
              return o > -1 ? r[a ? e[o] : o] : void 0;
            };
          }
          function Sr(t) {
            return Ur(function (e) {
              var i = e.length,
                n = i,
                r = ji.prototype.thru;
              for (t && e.reverse(); n--; ) {
                var o = e[n];
                if ("function" != typeof o) throw new gt(a);
                if (r && !s && "wrapper" == Vr(o)) var s = new ji([], !0);
              }
              for (n = s ? n : i; ++n < i; ) {
                var l = Vr((o = e[n])),
                  h = "wrapper" == l ? Yr(o) : void 0;
                s =
                  h && ca(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                    ? s[Vr(h[0])].apply(s, h[3])
                    : 1 == o.length && ca(o)
                    ? s[l]()
                    : s.thru(o);
              }
              return function () {
                var t = arguments,
                  n = t[0];
                if (s && 1 == t.length && Io(n)) return s.plant(n).value();
                for (var r = 0, a = i ? e[r].apply(this, t) : n; ++r < i; )
                  a = e[r].call(this, a);
                return a;
              };
            });
          }
          function Dr(t, e, i, r, a, o, s, l, h, c) {
            var u = 128 & e,
              d = 1 & e,
              f = 2 & e,
              p = 24 & e,
              _ = 512 & e,
              m = f ? void 0 : Er(t);
            return function g() {
              for (var v = arguments.length, y = n(v), w = v; w--; )
                y[w] = arguments[w];
              if (p)
                var b = Jr(g),
                  x = ze(y, b);
              if (
                (r && (y = mr(y, r, a, p)),
                o && (y = gr(y, o, s, p)),
                (v -= x),
                p && v < c)
              ) {
                var k = Be(y, b);
                return zr(t, e, Dr, g.placeholder, i, y, k, l, h, c - v);
              }
              var T = d ? i : this,
                M = f ? T[t] : t;
              return (
                (v = y.length),
                l ? (y = ga(y, l)) : _ && v > 1 && y.reverse(),
                u && h < v && (y.length = h),
                this && this !== Gt && this instanceof g && (M = m || Er(M)),
                M.apply(T, y)
              );
            };
          }
          function Ar(t, e) {
            return function (i, n) {
              return (function (t, e, i, n) {
                return (
                  hn(t, function (t, r, a) {
                    e(n, i(t), r, a);
                  }),
                  n
                );
              })(i, t, e(n), {});
            };
          }
          function jr(t, e) {
            return function (i, n) {
              var r;
              if (void 0 === i && void 0 === n) return e;
              if ((void 0 !== i && (r = i), void 0 !== n)) {
                if (void 0 === r) return n;
                "string" == typeof i || "string" == typeof n
                  ? ((i = Kn(i)), (n = Kn(n)))
                  : ((i = Xn(i)), (n = Xn(n))),
                  (r = t(i, n));
              }
              return r;
            };
          }
          function Cr(t) {
            return Ur(function (e) {
              return (
                (e = fe(e, je(Xr()))),
                qn(function (i) {
                  var n = this;
                  return t(e, function (t) {
                    return ae(t, n, i);
                  });
                })
              );
            });
          }
          function Nr(t, e) {
            var i = (e = void 0 === e ? " " : Kn(e)).length;
            if (i < 2) return i ? Pn(e, t) : e;
            var n = Pn(e, Qe(t / Ze(e)));
            return Fe(e) ? cr(Ge(n), 0, t).join("") : n.slice(0, t);
          }
          function Ir(t) {
            return function (e, i, r) {
              return (
                r && "number" != typeof r && la(e, i, r) && (i = r = void 0),
                (e = ns(e)),
                void 0 === i ? ((i = e), (e = 0)) : (i = ns(i)),
                (function (t, e, i, r) {
                  for (
                    var a = -1, o = oi(Qe((e - t) / (i || 1)), 0), s = n(o);
                    o--;

                  )
                    (s[r ? o : ++a] = t), (t += i);
                  return s;
                })(e, i, (r = void 0 === r ? (e < i ? 1 : -1) : ns(r)), t)
              );
            };
          }
          function Or(t) {
            return function (e, i) {
              return (
                ("string" == typeof e && "string" == typeof i) ||
                  ((e = os(e)), (i = os(i))),
                t(e, i)
              );
            };
          }
          function zr(t, e, i, n, r, a, o, s, l, h) {
            var c = 8 & e;
            (e |= c ? 32 : 64), 4 & (e &= ~(c ? 64 : 32)) || (e &= -4);
            var u = [
                t,
                e,
                r,
                c ? a : void 0,
                c ? o : void 0,
                c ? void 0 : a,
                c ? void 0 : o,
                s,
                l,
                h,
              ],
              d = i.apply(void 0, u);
            return ca(t) && ya(d, u), (d.placeholder = n), xa(d, t, e);
          }
          function Rr(t) {
            var e = ft[t];
            return function (t, i) {
              if (
                ((t = os(t)), (i = null == i ? 0 : si(rs(i), 292)) && ni(t))
              ) {
                var n = (ls(t) + "e").split("e");
                return +(
                  (n = (ls(e(n[0] + "e" + (+n[1] + i))) + "e").split("e"))[0] +
                  "e" +
                  (+n[1] - i)
                );
              }
              return e(t);
            };
          }
          var Pr =
            _i && 1 / We(new _i([, -0]))[1] == 1 / 0
              ? function (t) {
                  return new _i(t);
                }
              : Ks;
          function qr(t) {
            return function (e) {
              var i = na(e);
              return i == _
                ? He(e)
                : i == y
                ? Ue(e)
                : (function (t, e) {
                    return fe(e, function (e) {
                      return [e, t[e]];
                    });
                  })(e, t(e));
            };
          }
          function Fr(t, e, i, r, s, l, h, c) {
            var u = 2 & e;
            if (!u && "function" != typeof t) throw new gt(a);
            var d = r ? r.length : 0;
            if (
              (d || ((e &= -97), (r = s = void 0)),
              (h = void 0 === h ? h : oi(rs(h), 0)),
              (c = void 0 === c ? c : rs(c)),
              (d -= s ? s.length : 0),
              64 & e)
            ) {
              var f = r,
                p = s;
              r = s = void 0;
            }
            var _ = u ? void 0 : Yr(t),
              m = [t, e, i, r, s, f, p, l, h, c];
            if (
              (_ &&
                (function (t, e) {
                  var i = t[1],
                    n = e[1],
                    r = i | n,
                    a = r < 131,
                    s =
                      (128 == n && 8 == i) ||
                      (128 == n && 256 == i && t[7].length <= e[8]) ||
                      (384 == n && e[7].length <= e[8] && 8 == i);
                  if (!a && !s) return t;
                  1 & n && ((t[2] = e[2]), (r |= 1 & i ? 0 : 4));
                  var l = e[3];
                  if (l) {
                    var h = t[3];
                    (t[3] = h ? mr(h, l, e[4]) : l),
                      (t[4] = h ? Be(t[3], o) : e[4]);
                  }
                  (l = e[5]) &&
                    ((h = t[5]),
                    (t[5] = h ? gr(h, l, e[6]) : l),
                    (t[6] = h ? Be(t[5], o) : e[6]));
                  (l = e[7]) && (t[7] = l);
                  128 & n && (t[8] = null == t[8] ? e[8] : si(t[8], e[8]));
                  null == t[9] && (t[9] = e[9]);
                  (t[0] = e[0]), (t[1] = r);
                })(m, _),
              (t = m[0]),
              (e = m[1]),
              (i = m[2]),
              (r = m[3]),
              (s = m[4]),
              !(c = m[9] =
                void 0 === m[9] ? (u ? 0 : t.length) : oi(m[9] - d, 0)) &&
                24 & e &&
                (e &= -25),
              e && 1 != e)
            )
              g =
                8 == e || 16 == e
                  ? (function (t, e, i) {
                      var r = Er(t);
                      return function a() {
                        for (
                          var o = arguments.length, s = n(o), l = o, h = Jr(a);
                          l--;

                        )
                          s[l] = arguments[l];
                        var c =
                          o < 3 && s[0] !== h && s[o - 1] !== h ? [] : Be(s, h);
                        if ((o -= c.length) < i)
                          return zr(
                            t,
                            e,
                            Dr,
                            a.placeholder,
                            void 0,
                            s,
                            c,
                            void 0,
                            void 0,
                            i - o
                          );
                        var u =
                          this && this !== Gt && this instanceof a ? r : t;
                        return ae(u, this, s);
                      };
                    })(t, e, c)
                  : (32 != e && 33 != e) || s.length
                  ? Dr.apply(void 0, m)
                  : (function (t, e, i, r) {
                      var a = 1 & e,
                        o = Er(t);
                      return function e() {
                        for (
                          var s = -1,
                            l = arguments.length,
                            h = -1,
                            c = r.length,
                            u = n(c + l),
                            d =
                              this && this !== Gt && this instanceof e ? o : t;
                          ++h < c;

                        )
                          u[h] = r[h];
                        for (; l--; ) u[h++] = arguments[++s];
                        return ae(d, a ? i : this, u);
                      };
                    })(t, e, i, r);
            else
              var g = (function (t, e, i) {
                var n = 1 & e,
                  r = Er(t);
                return function e() {
                  var a = this && this !== Gt && this instanceof e ? r : t;
                  return a.apply(n ? i : this, arguments);
                };
              })(t, e, i);
            return xa((_ ? Bn : ya)(g, m), t, e);
          }
          function Hr(t, e, i, n) {
            return void 0 === t || (Ao(t, wt[i]) && !kt.call(n, i)) ? e : t;
          }
          function $r(t, e, i, n, r, a) {
            return (
              Wo(t) &&
                Wo(e) &&
                (a.set(e, t), jn(t, e, void 0, $r, a), a.delete(e)),
              t
            );
          }
          function Br(t) {
            return Yo(t) ? void 0 : t;
          }
          function Wr(t, e, i, n, r, a) {
            var o = 1 & i,
              s = t.length,
              l = e.length;
            if (s != l && !(o && l > s)) return !1;
            var h = a.get(t),
              c = a.get(e);
            if (h && c) return h == e && c == t;
            var u = -1,
              d = !0,
              f = 2 & i ? new zi() : void 0;
            for (a.set(t, e), a.set(e, t); ++u < s; ) {
              var p = t[u],
                _ = e[u];
              if (n) var m = o ? n(_, p, u, e, t, a) : n(p, _, u, t, e, a);
              if (void 0 !== m) {
                if (m) continue;
                d = !1;
                break;
              }
              if (f) {
                if (
                  !ge(e, function (t, e) {
                    if (!Ne(f, e) && (p === t || r(p, t, i, n, a)))
                      return f.push(e);
                  })
                ) {
                  d = !1;
                  break;
                }
              } else if (p !== _ && !r(p, _, i, n, a)) {
                d = !1;
                break;
              }
            }
            return a.delete(t), a.delete(e), d;
          }
          function Ur(t) {
            return ba(_a(t, void 0, Ia), t + "");
          }
          function Zr(t) {
            return fn(t, bs, ea);
          }
          function Gr(t) {
            return fn(t, xs, ia);
          }
          var Yr = vi
            ? function (t) {
                return vi.get(t);
              }
            : Ks;
          function Vr(t) {
            for (
              var e = t.name + "", i = yi[e], n = kt.call(yi, e) ? i.length : 0;
              n--;

            ) {
              var r = i[n],
                a = r.func;
              if (null == a || a == t) return r.name;
            }
            return e;
          }
          function Jr(t) {
            return (kt.call(Si, "placeholder") ? Si : t).placeholder;
          }
          function Xr() {
            var t = Si.iteratee || Ys;
            return (
              (t = t === Ys ? Tn : t),
              arguments.length ? t(arguments[0], arguments[1]) : t
            );
          }
          function Kr(t, e) {
            var i,
              n,
              r = t.__data__;
            return (
              "string" == (n = typeof (i = e)) ||
              "number" == n ||
              "symbol" == n ||
              "boolean" == n
                ? "__proto__" !== i
                : null === i
            )
              ? r["string" == typeof e ? "string" : "hash"]
              : r.map;
          }
          function Qr(t) {
            for (var e = bs(t), i = e.length; i--; ) {
              var n = e[i],
                r = t[n];
              e[i] = [n, r, fa(r)];
            }
            return e;
          }
          function ta(t, e) {
            var i = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return kn(i) ? i : void 0;
          }
          var ea = ei
              ? function (t) {
                  return null == t
                    ? []
                    : ((t = pt(t)),
                      ce(ei(t), function (e) {
                        return Zt.call(t, e);
                      }));
                }
              : al,
            ia = ei
              ? function (t) {
                  for (var e = []; t; ) pe(e, ea(t)), (t = $t(t));
                  return e;
                }
              : al,
            na = pn;
          function ra(t, e, i) {
            for (var n = -1, r = (e = lr(e, t)).length, a = !1; ++n < r; ) {
              var o = Ea(e[n]);
              if (!(a = null != t && i(t, o))) break;
              t = t[o];
            }
            return a || ++n != r
              ? a
              : !!(r = null == t ? 0 : t.length) &&
                  Bo(r) &&
                  sa(o, r) &&
                  (Io(t) || No(t));
          }
          function aa(t) {
            return "function" != typeof t.constructor || da(t) ? {} : Di($t(t));
          }
          function oa(t) {
            return Io(t) || No(t) || !!(Vt && t && t[Vt]);
          }
          function sa(t, e) {
            var i = typeof t;
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == i || ("symbol" != i && lt.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function la(t, e, i) {
            if (!Wo(i)) return !1;
            var n = typeof e;
            return (
              !!("number" == n
                ? zo(i) && sa(e, i.length)
                : "string" == n && e in i) && Ao(i[e], t)
            );
          }
          function ha(t, e) {
            if (Io(t)) return !1;
            var i = typeof t;
            return (
              !(
                "number" != i &&
                "symbol" != i &&
                "boolean" != i &&
                null != t &&
                !Ko(t)
              ) ||
              W.test(t) ||
              !B.test(t) ||
              (null != e && t in pt(e))
            );
          }
          function ca(t) {
            var e = Vr(t),
              i = Si[e];
            if ("function" != typeof i || !(e in Ci.prototype)) return !1;
            if (t === i) return !0;
            var n = Yr(i);
            return !!n && t === n[0];
          }
          ((di && na(new di(new ArrayBuffer(1))) != T) ||
            (fi && na(new fi()) != _) ||
            (pi && "[object Promise]" != na(pi.resolve())) ||
            (_i && na(new _i()) != y) ||
            (mi && na(new mi()) != x)) &&
            (na = function (t) {
              var e = pn(t),
                i = e == g ? t.constructor : void 0,
                n = i ? La(i) : "";
              if (n)
                switch (n) {
                  case wi:
                    return T;
                  case bi:
                    return _;
                  case xi:
                    return "[object Promise]";
                  case ki:
                    return y;
                  case Ti:
                    return x;
                }
              return e;
            });
          var ua = bt ? Ho : ol;
          function da(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || wt);
          }
          function fa(t) {
            return t == t && !Wo(t);
          }
          function pa(t, e) {
            return function (i) {
              return null != i && i[t] === e && (void 0 !== e || t in pt(i));
            };
          }
          function _a(t, e, i) {
            return (
              (e = oi(void 0 === e ? t.length - 1 : e, 0)),
              function () {
                for (
                  var r = arguments, a = -1, o = oi(r.length - e, 0), s = n(o);
                  ++a < o;

                )
                  s[a] = r[e + a];
                a = -1;
                for (var l = n(e + 1); ++a < e; ) l[a] = r[a];
                return (l[e] = i(s)), ae(t, this, l);
              }
            );
          }
          function ma(t, e) {
            return e.length < 2 ? t : dn(t, Zn(e, 0, -1));
          }
          function ga(t, e) {
            for (var i = t.length, n = si(e.length, i), r = vr(t); n--; ) {
              var a = e[n];
              t[n] = sa(a, i) ? r[a] : void 0;
            }
            return t;
          }
          function va(t, e) {
            if (
              ("constructor" !== e || "function" != typeof t[e]) &&
              "__proto__" != e
            )
              return t[e];
          }
          var ya = ka(Bn),
            wa =
              Ke ||
              function (t, e) {
                return Gt.setTimeout(t, e);
              },
            ba = ka(Wn);
          function xa(t, e, i) {
            var n = e + "";
            return ba(
              t,
              (function (t, e) {
                var i = e.length;
                if (!i) return t;
                var n = i - 1;
                return (
                  (e[n] = (i > 1 ? "& " : "") + e[n]),
                  (e = e.join(i > 2 ? ", " : " ")),
                  t.replace(J, "{\n/* [wrapped with " + e + "] */\n")
                );
              })(
                n,
                (function (t, e) {
                  return (
                    se(s, function (i) {
                      var n = "_." + i[0];
                      e & i[1] && !ue(t, n) && t.push(n);
                    }),
                    t.sort()
                  );
                })(
                  (function (t) {
                    var e = t.match(X);
                    return e ? e[1].split(K) : [];
                  })(n),
                  i
                )
              )
            );
          }
          function ka(t) {
            var e = 0,
              i = 0;
            return function () {
              var n = li(),
                r = 16 - (n - i);
              if (((i = n), r > 0)) {
                if (++e >= 800) return arguments[0];
              } else e = 0;
              return t.apply(void 0, arguments);
            };
          }
          function Ta(t, e) {
            var i = -1,
              n = t.length,
              r = n - 1;
            for (e = void 0 === e ? n : e; ++i < e; ) {
              var a = Rn(i, r),
                o = t[a];
              (t[a] = t[i]), (t[i] = o);
            }
            return (t.length = e), t;
          }
          var Ma = (function (t) {
            var e = To(t, function (t) {
                return 500 === i.size && i.clear(), t;
              }),
              i = e.cache;
            return e;
          })(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(U, function (t, i, n, r) {
                e.push(n ? r.replace(et, "$1") : i || t);
              }),
              e
            );
          });
          function Ea(t) {
            if ("string" == typeof t || Ko(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function La(t) {
            if (null != t) {
              try {
                return xt.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function Sa(t) {
            if (t instanceof Ci) return t.clone();
            var e = new ji(t.__wrapped__, t.__chain__);
            return (
              (e.__actions__ = vr(t.__actions__)),
              (e.__index__ = t.__index__),
              (e.__values__ = t.__values__),
              e
            );
          }
          var Da = qn(function (t, e) {
              return Ro(t) ? Qi(t, on(e, 1, Ro, !0)) : [];
            }),
            Aa = qn(function (t, e) {
              var i = qa(e);
              return (
                Ro(i) && (i = void 0),
                Ro(t) ? Qi(t, on(e, 1, Ro, !0), Xr(i, 2)) : []
              );
            }),
            ja = qn(function (t, e) {
              var i = qa(e);
              return (
                Ro(i) && (i = void 0),
                Ro(t) ? Qi(t, on(e, 1, Ro, !0), void 0, i) : []
              );
            });
          function Ca(t, e, i) {
            var n = null == t ? 0 : t.length;
            if (!n) return -1;
            var r = null == i ? 0 : rs(i);
            return r < 0 && (r = oi(n + r, 0)), we(t, Xr(e, 3), r);
          }
          function Na(t, e, i) {
            var n = null == t ? 0 : t.length;
            if (!n) return -1;
            var r = n - 1;
            return (
              void 0 !== i &&
                ((r = rs(i)), (r = i < 0 ? oi(n + r, 0) : si(r, n - 1))),
              we(t, Xr(e, 3), r, !0)
            );
          }
          function Ia(t) {
            return (null == t ? 0 : t.length) ? on(t, 1) : [];
          }
          function Oa(t) {
            return t && t.length ? t[0] : void 0;
          }
          var za = qn(function (t) {
              var e = fe(t, or);
              return e.length && e[0] === t[0] ? vn(e) : [];
            }),
            Ra = qn(function (t) {
              var e = qa(t),
                i = fe(t, or);
              return (
                e === qa(i) ? (e = void 0) : i.pop(),
                i.length && i[0] === t[0] ? vn(i, Xr(e, 2)) : []
              );
            }),
            Pa = qn(function (t) {
              var e = qa(t),
                i = fe(t, or);
              return (
                (e = "function" == typeof e ? e : void 0) && i.pop(),
                i.length && i[0] === t[0] ? vn(i, void 0, e) : []
              );
            });
          function qa(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0;
          }
          var Fa = qn(Ha);
          function Ha(t, e) {
            return t && t.length && e && e.length ? On(t, e) : t;
          }
          var $a = Ur(function (t, e) {
            var i = null == t ? 0 : t.length,
              n = Yi(t, e);
            return (
              zn(
                t,
                fe(e, function (t) {
                  return sa(t, i) ? +t : t;
                }).sort(_r)
              ),
              n
            );
          });
          function Ba(t) {
            return null == t ? t : ui.call(t);
          }
          var Wa = qn(function (t) {
              return Qn(on(t, 1, Ro, !0));
            }),
            Ua = qn(function (t) {
              var e = qa(t);
              return Ro(e) && (e = void 0), Qn(on(t, 1, Ro, !0), Xr(e, 2));
            }),
            Za = qn(function (t) {
              var e = qa(t);
              return (
                (e = "function" == typeof e ? e : void 0),
                Qn(on(t, 1, Ro, !0), void 0, e)
              );
            });
          function Ga(t) {
            if (!t || !t.length) return [];
            var e = 0;
            return (
              (t = ce(t, function (t) {
                if (Ro(t)) return (e = oi(t.length, e)), !0;
              })),
              De(e, function (e) {
                return fe(t, Me(e));
              })
            );
          }
          function Ya(t, e) {
            if (!t || !t.length) return [];
            var i = Ga(t);
            return null == e
              ? i
              : fe(i, function (t) {
                  return ae(e, void 0, t);
                });
          }
          var Va = qn(function (t, e) {
              return Ro(t) ? Qi(t, e) : [];
            }),
            Ja = qn(function (t) {
              return rr(ce(t, Ro));
            }),
            Xa = qn(function (t) {
              var e = qa(t);
              return Ro(e) && (e = void 0), rr(ce(t, Ro), Xr(e, 2));
            }),
            Ka = qn(function (t) {
              var e = qa(t);
              return (
                (e = "function" == typeof e ? e : void 0),
                rr(ce(t, Ro), void 0, e)
              );
            }),
            Qa = qn(Ga);
          var to = qn(function (t) {
            var e = t.length,
              i = e > 1 ? t[e - 1] : void 0;
            return (
              (i = "function" == typeof i ? (t.pop(), i) : void 0), Ya(t, i)
            );
          });
          function eo(t) {
            var e = Si(t);
            return (e.__chain__ = !0), e;
          }
          function io(t, e) {
            return e(t);
          }
          var no = Ur(function (t) {
            var e = t.length,
              i = e ? t[0] : 0,
              n = this.__wrapped__,
              r = function (e) {
                return Yi(e, t);
              };
            return !(e > 1 || this.__actions__.length) &&
              n instanceof Ci &&
              sa(i)
              ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
                  func: io,
                  args: [r],
                  thisArg: void 0,
                }),
                new ji(n, this.__chain__).thru(function (t) {
                  return e && !t.length && t.push(void 0), t;
                }))
              : this.thru(r);
          });
          var ro = wr(function (t, e, i) {
            kt.call(t, i) ? ++t[i] : Gi(t, i, 1);
          });
          var ao = Lr(Ca),
            oo = Lr(Na);
          function so(t, e) {
            return (Io(t) ? se : tn)(t, Xr(e, 3));
          }
          function lo(t, e) {
            return (Io(t) ? le : en)(t, Xr(e, 3));
          }
          var ho = wr(function (t, e, i) {
            kt.call(t, i) ? t[i].push(e) : Gi(t, i, [e]);
          });
          var co = qn(function (t, e, i) {
              var r = -1,
                a = "function" == typeof e,
                o = zo(t) ? n(t.length) : [];
              return (
                tn(t, function (t) {
                  o[++r] = a ? ae(e, t, i) : yn(t, e, i);
                }),
                o
              );
            }),
            uo = wr(function (t, e, i) {
              Gi(t, i, e);
            });
          function fo(t, e) {
            return (Io(t) ? fe : Sn)(t, Xr(e, 3));
          }
          var po = wr(
            function (t, e, i) {
              t[i ? 0 : 1].push(e);
            },
            function () {
              return [[], []];
            }
          );
          var _o = qn(function (t, e) {
              if (null == t) return [];
              var i = e.length;
              return (
                i > 1 && la(t, e[0], e[1])
                  ? (e = [])
                  : i > 2 && la(e[0], e[1], e[2]) && (e = [e[0]]),
                Nn(t, on(e, 1), [])
              );
            }),
            mo =
              Xe ||
              function () {
                return Gt.Date.now();
              };
          function go(t, e, i) {
            return (
              (e = i ? void 0 : e),
              Fr(
                t,
                128,
                void 0,
                void 0,
                void 0,
                void 0,
                (e = t && null == e ? t.length : e)
              )
            );
          }
          function vo(t, e) {
            var i;
            if ("function" != typeof e) throw new gt(a);
            return (
              (t = rs(t)),
              function () {
                return (
                  --t > 0 && (i = e.apply(this, arguments)),
                  t <= 1 && (e = void 0),
                  i
                );
              }
            );
          }
          var yo = qn(function (t, e, i) {
              var n = 1;
              if (i.length) {
                var r = Be(i, Jr(yo));
                n |= 32;
              }
              return Fr(t, n, e, i, r);
            }),
            wo = qn(function (t, e, i) {
              var n = 3;
              if (i.length) {
                var r = Be(i, Jr(wo));
                n |= 32;
              }
              return Fr(e, n, t, i, r);
            });
          function bo(t, e, i) {
            var n,
              r,
              o,
              s,
              l,
              h,
              c = 0,
              u = !1,
              d = !1,
              f = !0;
            if ("function" != typeof t) throw new gt(a);
            function p(e) {
              var i = n,
                a = r;
              return (n = r = void 0), (c = e), (s = t.apply(a, i));
            }
            function _(t) {
              return (c = t), (l = wa(g, e)), u ? p(t) : s;
            }
            function m(t) {
              var i = t - h;
              return void 0 === h || i >= e || i < 0 || (d && t - c >= o);
            }
            function g() {
              var t = mo();
              if (m(t)) return v(t);
              l = wa(
                g,
                (function (t) {
                  var i = e - (t - h);
                  return d ? si(i, o - (t - c)) : i;
                })(t)
              );
            }
            function v(t) {
              return (l = void 0), f && n ? p(t) : ((n = r = void 0), s);
            }
            function y() {
              var t = mo(),
                i = m(t);
              if (((n = arguments), (r = this), (h = t), i)) {
                if (void 0 === l) return _(h);
                if (d) return ur(l), (l = wa(g, e)), p(h);
              }
              return void 0 === l && (l = wa(g, e)), s;
            }
            return (
              (e = os(e) || 0),
              Wo(i) &&
                ((u = !!i.leading),
                (o = (d = "maxWait" in i) ? oi(os(i.maxWait) || 0, e) : o),
                (f = "trailing" in i ? !!i.trailing : f)),
              (y.cancel = function () {
                void 0 !== l && ur(l), (c = 0), (n = h = r = l = void 0);
              }),
              (y.flush = function () {
                return void 0 === l ? s : v(mo());
              }),
              y
            );
          }
          var xo = qn(function (t, e) {
              return Ki(t, 1, e);
            }),
            ko = qn(function (t, e, i) {
              return Ki(t, os(e) || 0, i);
            });
          function To(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e))
              throw new gt(a);
            var i = function () {
              var n = arguments,
                r = e ? e.apply(this, n) : n[0],
                a = i.cache;
              if (a.has(r)) return a.get(r);
              var o = t.apply(this, n);
              return (i.cache = a.set(r, o) || a), o;
            };
            return (i.cache = new (To.Cache || Oi)()), i;
          }
          function Mo(t) {
            if ("function" != typeof t) throw new gt(a);
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, e[0]);
                case 2:
                  return !t.call(this, e[0], e[1]);
                case 3:
                  return !t.call(this, e[0], e[1], e[2]);
              }
              return !t.apply(this, e);
            };
          }
          To.Cache = Oi;
          var Eo = hr(function (t, e) {
              var i = (e =
                1 == e.length && Io(e[0])
                  ? fe(e[0], je(Xr()))
                  : fe(on(e, 1), je(Xr()))).length;
              return qn(function (n) {
                for (var r = -1, a = si(n.length, i); ++r < a; )
                  n[r] = e[r].call(this, n[r]);
                return ae(t, this, n);
              });
            }),
            Lo = qn(function (t, e) {
              return Fr(t, 32, void 0, e, Be(e, Jr(Lo)));
            }),
            So = qn(function (t, e) {
              return Fr(t, 64, void 0, e, Be(e, Jr(So)));
            }),
            Do = Ur(function (t, e) {
              return Fr(t, 256, void 0, void 0, void 0, e);
            });
          function Ao(t, e) {
            return t === e || (t != t && e != e);
          }
          var jo = Or(_n),
            Co = Or(function (t, e) {
              return t >= e;
            }),
            No = wn(
              (function () {
                return arguments;
              })()
            )
              ? wn
              : function (t) {
                  return Uo(t) && kt.call(t, "callee") && !Zt.call(t, "callee");
                },
            Io = n.isArray,
            Oo = Qt
              ? je(Qt)
              : function (t) {
                  return Uo(t) && pn(t) == k;
                };
          function zo(t) {
            return null != t && Bo(t.length) && !Ho(t);
          }
          function Ro(t) {
            return Uo(t) && zo(t);
          }
          var Po = ii || ol,
            qo = te
              ? je(te)
              : function (t) {
                  return Uo(t) && pn(t) == u;
                };
          function Fo(t) {
            if (!Uo(t)) return !1;
            var e = pn(t);
            return (
              e == d ||
              "[object DOMException]" == e ||
              ("string" == typeof t.message &&
                "string" == typeof t.name &&
                !Yo(t))
            );
          }
          function Ho(t) {
            if (!Wo(t)) return !1;
            var e = pn(t);
            return (
              e == f ||
              e == p ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          }
          function $o(t) {
            return "number" == typeof t && t == rs(t);
          }
          function Bo(t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          }
          function Wo(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          }
          function Uo(t) {
            return null != t && "object" == typeof t;
          }
          var Zo = ee
            ? je(ee)
            : function (t) {
                return Uo(t) && na(t) == _;
              };
          function Go(t) {
            return "number" == typeof t || (Uo(t) && pn(t) == m);
          }
          function Yo(t) {
            if (!Uo(t) || pn(t) != g) return !1;
            var e = $t(t);
            if (null === e) return !0;
            var i = kt.call(e, "constructor") && e.constructor;
            return "function" == typeof i && i instanceof i && xt.call(i) == Lt;
          }
          var Vo = ie
            ? je(ie)
            : function (t) {
                return Uo(t) && pn(t) == v;
              };
          var Jo = ne
            ? je(ne)
            : function (t) {
                return Uo(t) && na(t) == y;
              };
          function Xo(t) {
            return "string" == typeof t || (!Io(t) && Uo(t) && pn(t) == w);
          }
          function Ko(t) {
            return "symbol" == typeof t || (Uo(t) && pn(t) == b);
          }
          var Qo = re
            ? je(re)
            : function (t) {
                return Uo(t) && Bo(t.length) && !!Ft[pn(t)];
              };
          var ts = Or(Ln),
            es = Or(function (t, e) {
              return t <= e;
            });
          function is(t) {
            if (!t) return [];
            if (zo(t)) return Xo(t) ? Ge(t) : vr(t);
            if (Xt && t[Xt])
              return (function (t) {
                for (var e, i = []; !(e = t.next()).done; ) i.push(e.value);
                return i;
              })(t[Xt]());
            var e = na(t);
            return (e == _ ? He : e == y ? We : As)(t);
          }
          function ns(t) {
            return t
              ? (t = os(t)) === 1 / 0 || t === -1 / 0
                ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          }
          function rs(t) {
            var e = ns(t),
              i = e % 1;
            return e == e ? (i ? e - i : e) : 0;
          }
          function as(t) {
            return t ? Vi(rs(t), 0, 4294967295) : 0;
          }
          function os(t) {
            if ("number" == typeof t) return t;
            if (Ko(t)) return NaN;
            if (Wo(t)) {
              var e = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = Wo(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = Ae(t);
            var i = at.test(t);
            return i || st.test(t)
              ? Wt(t.slice(2), i ? 2 : 8)
              : rt.test(t)
              ? NaN
              : +t;
          }
          function ss(t) {
            return yr(t, xs(t));
          }
          function ls(t) {
            return null == t ? "" : Kn(t);
          }
          var hs = br(function (t, e) {
              if (da(e) || zo(e)) yr(e, bs(e), t);
              else for (var i in e) kt.call(e, i) && Bi(t, i, e[i]);
            }),
            cs = br(function (t, e) {
              yr(e, xs(e), t);
            }),
            us = br(function (t, e, i, n) {
              yr(e, xs(e), t, n);
            }),
            ds = br(function (t, e, i, n) {
              yr(e, bs(e), t, n);
            }),
            fs = Ur(Yi);
          var ps = qn(function (t, e) {
              t = pt(t);
              var i = -1,
                n = e.length,
                r = n > 2 ? e[2] : void 0;
              for (r && la(e[0], e[1], r) && (n = 1); ++i < n; )
                for (var a = e[i], o = xs(a), s = -1, l = o.length; ++s < l; ) {
                  var h = o[s],
                    c = t[h];
                  (void 0 === c || (Ao(c, wt[h]) && !kt.call(t, h))) &&
                    (t[h] = a[h]);
                }
              return t;
            }),
            _s = qn(function (t) {
              return t.push(void 0, $r), ae(Ts, void 0, t);
            });
          function ms(t, e, i) {
            var n = null == t ? void 0 : dn(t, e);
            return void 0 === n ? i : n;
          }
          function gs(t, e) {
            return null != t && ra(t, e, gn);
          }
          var vs = Ar(function (t, e, i) {
              null != e && "function" != typeof e.toString && (e = Et.call(e)),
                (t[e] = i);
            }, Ws(Gs)),
            ys = Ar(function (t, e, i) {
              null != e && "function" != typeof e.toString && (e = Et.call(e)),
                kt.call(t, e) ? t[e].push(i) : (t[e] = [i]);
            }, Xr),
            ws = qn(yn);
          function bs(t) {
            return zo(t) ? Pi(t) : Mn(t);
          }
          function xs(t) {
            return zo(t) ? Pi(t, !0) : En(t);
          }
          var ks = br(function (t, e, i) {
              jn(t, e, i);
            }),
            Ts = br(function (t, e, i, n) {
              jn(t, e, i, n);
            }),
            Ms = Ur(function (t, e) {
              var i = {};
              if (null == t) return i;
              var n = !1;
              (e = fe(e, function (e) {
                return (e = lr(e, t)), n || (n = e.length > 1), e;
              })),
                yr(t, Gr(t), i),
                n && (i = Ji(i, 7, Br));
              for (var r = e.length; r--; ) tr(i, e[r]);
              return i;
            });
          var Es = Ur(function (t, e) {
            return null == t
              ? {}
              : (function (t, e) {
                  return In(t, e, function (e, i) {
                    return gs(t, i);
                  });
                })(t, e);
          });
          function Ls(t, e) {
            if (null == t) return {};
            var i = fe(Gr(t), function (t) {
              return [t];
            });
            return (
              (e = Xr(e)),
              In(t, i, function (t, i) {
                return e(t, i[0]);
              })
            );
          }
          var Ss = qr(bs),
            Ds = qr(xs);
          function As(t) {
            return null == t ? [] : Ce(t, bs(t));
          }
          var js = Mr(function (t, e, i) {
            return (e = e.toLowerCase()), t + (i ? Cs(e) : e);
          });
          function Cs(t) {
            return Fs(ls(t).toLowerCase());
          }
          function Ns(t) {
            return (t = ls(t)) && t.replace(ht, Re).replace(Nt, "");
          }
          var Is = Mr(function (t, e, i) {
              return t + (i ? "-" : "") + e.toLowerCase();
            }),
            Os = Mr(function (t, e, i) {
              return t + (i ? " " : "") + e.toLowerCase();
            }),
            zs = Tr("toLowerCase");
          var Rs = Mr(function (t, e, i) {
            return t + (i ? "_" : "") + e.toLowerCase();
          });
          var Ps = Mr(function (t, e, i) {
            return t + (i ? " " : "") + Fs(e);
          });
          var qs = Mr(function (t, e, i) {
              return t + (i ? " " : "") + e.toUpperCase();
            }),
            Fs = Tr("toUpperCase");
          function Hs(t, e, i) {
            return (
              (t = ls(t)),
              void 0 === (e = i ? void 0 : e)
                ? (function (t) {
                    return Rt.test(t);
                  })(t)
                  ? (function (t) {
                      return t.match(Ot) || [];
                    })(t)
                  : (function (t) {
                      return t.match(Q) || [];
                    })(t)
                : t.match(e) || []
            );
          }
          var $s = qn(function (t, e) {
              try {
                return ae(t, void 0, e);
              } catch (t) {
                return Fo(t) ? t : new V(t);
              }
            }),
            Bs = Ur(function (t, e) {
              return (
                se(e, function (e) {
                  (e = Ea(e)), Gi(t, e, yo(t[e], t));
                }),
                t
              );
            });
          function Ws(t) {
            return function () {
              return t;
            };
          }
          var Us = Sr(),
            Zs = Sr(!0);
          function Gs(t) {
            return t;
          }
          function Ys(t) {
            return Tn("function" == typeof t ? t : Ji(t, 1));
          }
          var Vs = qn(function (t, e) {
              return function (i) {
                return yn(i, t, e);
              };
            }),
            Js = qn(function (t, e) {
              return function (i) {
                return yn(t, i, e);
              };
            });
          function Xs(t, e, i) {
            var n = bs(e),
              r = un(e, n);
            null != i ||
              (Wo(e) && (r.length || !n.length)) ||
              ((i = e), (e = t), (t = this), (r = un(e, bs(e))));
            var a = !(Wo(i) && "chain" in i && !i.chain),
              o = Ho(t);
            return (
              se(r, function (i) {
                var n = e[i];
                (t[i] = n),
                  o &&
                    (t.prototype[i] = function () {
                      var e = this.__chain__;
                      if (a || e) {
                        var i = t(this.__wrapped__),
                          r = (i.__actions__ = vr(this.__actions__));
                        return (
                          r.push({ func: n, args: arguments, thisArg: t }),
                          (i.__chain__ = e),
                          i
                        );
                      }
                      return n.apply(t, pe([this.value()], arguments));
                    });
              }),
              t
            );
          }
          function Ks() {}
          var Qs = Cr(fe),
            tl = Cr(he),
            el = Cr(ge);
          function il(t) {
            return ha(t)
              ? Me(Ea(t))
              : (function (t) {
                  return function (e) {
                    return dn(e, t);
                  };
                })(t);
          }
          var nl = Ir(),
            rl = Ir(!0);
          function al() {
            return [];
          }
          function ol() {
            return !1;
          }
          var sl = jr(function (t, e) {
              return t + e;
            }, 0),
            ll = Rr("ceil"),
            hl = jr(function (t, e) {
              return t / e;
            }, 1),
            cl = Rr("floor");
          var ul,
            dl = jr(function (t, e) {
              return t * e;
            }, 1),
            fl = Rr("round"),
            pl = jr(function (t, e) {
              return t - e;
            }, 0);
          return (
            (Si.after = function (t, e) {
              if ("function" != typeof e) throw new gt(a);
              return (
                (t = rs(t)),
                function () {
                  if (--t < 1) return e.apply(this, arguments);
                }
              );
            }),
            (Si.ary = go),
            (Si.assign = hs),
            (Si.assignIn = cs),
            (Si.assignInWith = us),
            (Si.assignWith = ds),
            (Si.at = fs),
            (Si.before = vo),
            (Si.bind = yo),
            (Si.bindAll = Bs),
            (Si.bindKey = wo),
            (Si.castArray = function () {
              if (!arguments.length) return [];
              var t = arguments[0];
              return Io(t) ? t : [t];
            }),
            (Si.chain = eo),
            (Si.chunk = function (t, e, i) {
              e = (i ? la(t, e, i) : void 0 === e) ? 1 : oi(rs(e), 0);
              var r = null == t ? 0 : t.length;
              if (!r || e < 1) return [];
              for (var a = 0, o = 0, s = n(Qe(r / e)); a < r; )
                s[o++] = Zn(t, a, (a += e));
              return s;
            }),
            (Si.compact = function (t) {
              for (
                var e = -1, i = null == t ? 0 : t.length, n = 0, r = [];
                ++e < i;

              ) {
                var a = t[e];
                a && (r[n++] = a);
              }
              return r;
            }),
            (Si.concat = function () {
              var t = arguments.length;
              if (!t) return [];
              for (var e = n(t - 1), i = arguments[0], r = t; r--; )
                e[r - 1] = arguments[r];
              return pe(Io(i) ? vr(i) : [i], on(e, 1));
            }),
            (Si.cond = function (t) {
              var e = null == t ? 0 : t.length,
                i = Xr();
              return (
                (t = e
                  ? fe(t, function (t) {
                      if ("function" != typeof t[1]) throw new gt(a);
                      return [i(t[0]), t[1]];
                    })
                  : []),
                qn(function (i) {
                  for (var n = -1; ++n < e; ) {
                    var r = t[n];
                    if (ae(r[0], this, i)) return ae(r[1], this, i);
                  }
                })
              );
            }),
            (Si.conforms = function (t) {
              return (function (t) {
                var e = bs(t);
                return function (i) {
                  return Xi(i, t, e);
                };
              })(Ji(t, 1));
            }),
            (Si.constant = Ws),
            (Si.countBy = ro),
            (Si.create = function (t, e) {
              var i = Di(t);
              return null == e ? i : Zi(i, e);
            }),
            (Si.curry = function t(e, i, n) {
              var r = Fr(
                e,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (i = n ? void 0 : i)
              );
              return (r.placeholder = t.placeholder), r;
            }),
            (Si.curryRight = function t(e, i, n) {
              var r = Fr(
                e,
                16,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (i = n ? void 0 : i)
              );
              return (r.placeholder = t.placeholder), r;
            }),
            (Si.debounce = bo),
            (Si.defaults = ps),
            (Si.defaultsDeep = _s),
            (Si.defer = xo),
            (Si.delay = ko),
            (Si.difference = Da),
            (Si.differenceBy = Aa),
            (Si.differenceWith = ja),
            (Si.drop = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              return n
                ? Zn(t, (e = i || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e, n)
                : [];
            }),
            (Si.dropRight = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              return n
                ? Zn(
                    t,
                    0,
                    (e = n - (e = i || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e
                  )
                : [];
            }),
            (Si.dropRightWhile = function (t, e) {
              return t && t.length ? ir(t, Xr(e, 3), !0, !0) : [];
            }),
            (Si.dropWhile = function (t, e) {
              return t && t.length ? ir(t, Xr(e, 3), !0) : [];
            }),
            (Si.fill = function (t, e, i, n) {
              var r = null == t ? 0 : t.length;
              return r
                ? (i &&
                    "number" != typeof i &&
                    la(t, e, i) &&
                    ((i = 0), (n = r)),
                  (function (t, e, i, n) {
                    var r = t.length;
                    for (
                      (i = rs(i)) < 0 && (i = -i > r ? 0 : r + i),
                        (n = void 0 === n || n > r ? r : rs(n)) < 0 && (n += r),
                        n = i > n ? 0 : as(n);
                      i < n;

                    )
                      t[i++] = e;
                    return t;
                  })(t, e, i, n))
                : [];
            }),
            (Si.filter = function (t, e) {
              return (Io(t) ? ce : an)(t, Xr(e, 3));
            }),
            (Si.flatMap = function (t, e) {
              return on(fo(t, e), 1);
            }),
            (Si.flatMapDeep = function (t, e) {
              return on(fo(t, e), 1 / 0);
            }),
            (Si.flatMapDepth = function (t, e, i) {
              return (i = void 0 === i ? 1 : rs(i)), on(fo(t, e), i);
            }),
            (Si.flatten = Ia),
            (Si.flattenDeep = function (t) {
              return (null == t ? 0 : t.length) ? on(t, 1 / 0) : [];
            }),
            (Si.flattenDepth = function (t, e) {
              return (null == t ? 0 : t.length)
                ? on(t, (e = void 0 === e ? 1 : rs(e)))
                : [];
            }),
            (Si.flip = function (t) {
              return Fr(t, 512);
            }),
            (Si.flow = Us),
            (Si.flowRight = Zs),
            (Si.fromPairs = function (t) {
              for (
                var e = -1, i = null == t ? 0 : t.length, n = {};
                ++e < i;

              ) {
                var r = t[e];
                n[r[0]] = r[1];
              }
              return n;
            }),
            (Si.functions = function (t) {
              return null == t ? [] : un(t, bs(t));
            }),
            (Si.functionsIn = function (t) {
              return null == t ? [] : un(t, xs(t));
            }),
            (Si.groupBy = ho),
            (Si.initial = function (t) {
              return (null == t ? 0 : t.length) ? Zn(t, 0, -1) : [];
            }),
            (Si.intersection = za),
            (Si.intersectionBy = Ra),
            (Si.intersectionWith = Pa),
            (Si.invert = vs),
            (Si.invertBy = ys),
            (Si.invokeMap = co),
            (Si.iteratee = Ys),
            (Si.keyBy = uo),
            (Si.keys = bs),
            (Si.keysIn = xs),
            (Si.map = fo),
            (Si.mapKeys = function (t, e) {
              var i = {};
              return (
                (e = Xr(e, 3)),
                hn(t, function (t, n, r) {
                  Gi(i, e(t, n, r), t);
                }),
                i
              );
            }),
            (Si.mapValues = function (t, e) {
              var i = {};
              return (
                (e = Xr(e, 3)),
                hn(t, function (t, n, r) {
                  Gi(i, n, e(t, n, r));
                }),
                i
              );
            }),
            (Si.matches = function (t) {
              return Dn(Ji(t, 1));
            }),
            (Si.matchesProperty = function (t, e) {
              return An(t, Ji(e, 1));
            }),
            (Si.memoize = To),
            (Si.merge = ks),
            (Si.mergeWith = Ts),
            (Si.method = Vs),
            (Si.methodOf = Js),
            (Si.mixin = Xs),
            (Si.negate = Mo),
            (Si.nthArg = function (t) {
              return (
                (t = rs(t)),
                qn(function (e) {
                  return Cn(e, t);
                })
              );
            }),
            (Si.omit = Ms),
            (Si.omitBy = function (t, e) {
              return Ls(t, Mo(Xr(e)));
            }),
            (Si.once = function (t) {
              return vo(2, t);
            }),
            (Si.orderBy = function (t, e, i, n) {
              return null == t
                ? []
                : (Io(e) || (e = null == e ? [] : [e]),
                  Io((i = n ? void 0 : i)) || (i = null == i ? [] : [i]),
                  Nn(t, e, i));
            }),
            (Si.over = Qs),
            (Si.overArgs = Eo),
            (Si.overEvery = tl),
            (Si.overSome = el),
            (Si.partial = Lo),
            (Si.partialRight = So),
            (Si.partition = po),
            (Si.pick = Es),
            (Si.pickBy = Ls),
            (Si.property = il),
            (Si.propertyOf = function (t) {
              return function (e) {
                return null == t ? void 0 : dn(t, e);
              };
            }),
            (Si.pull = Fa),
            (Si.pullAll = Ha),
            (Si.pullAllBy = function (t, e, i) {
              return t && t.length && e && e.length ? On(t, e, Xr(i, 2)) : t;
            }),
            (Si.pullAllWith = function (t, e, i) {
              return t && t.length && e && e.length ? On(t, e, void 0, i) : t;
            }),
            (Si.pullAt = $a),
            (Si.range = nl),
            (Si.rangeRight = rl),
            (Si.rearg = Do),
            (Si.reject = function (t, e) {
              return (Io(t) ? ce : an)(t, Mo(Xr(e, 3)));
            }),
            (Si.remove = function (t, e) {
              var i = [];
              if (!t || !t.length) return i;
              var n = -1,
                r = [],
                a = t.length;
              for (e = Xr(e, 3); ++n < a; ) {
                var o = t[n];
                e(o, n, t) && (i.push(o), r.push(n));
              }
              return zn(t, r), i;
            }),
            (Si.rest = function (t, e) {
              if ("function" != typeof t) throw new gt(a);
              return qn(t, (e = void 0 === e ? e : rs(e)));
            }),
            (Si.reverse = Ba),
            (Si.sampleSize = function (t, e, i) {
              return (
                (e = (i ? la(t, e, i) : void 0 === e) ? 1 : rs(e)),
                (Io(t) ? Fi : Hn)(t, e)
              );
            }),
            (Si.set = function (t, e, i) {
              return null == t ? t : $n(t, e, i);
            }),
            (Si.setWith = function (t, e, i, n) {
              return (
                (n = "function" == typeof n ? n : void 0),
                null == t ? t : $n(t, e, i, n)
              );
            }),
            (Si.shuffle = function (t) {
              return (Io(t) ? Hi : Un)(t);
            }),
            (Si.slice = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              return n
                ? (i && "number" != typeof i && la(t, e, i)
                    ? ((e = 0), (i = n))
                    : ((e = null == e ? 0 : rs(e)),
                      (i = void 0 === i ? n : rs(i))),
                  Zn(t, e, i))
                : [];
            }),
            (Si.sortBy = _o),
            (Si.sortedUniq = function (t) {
              return t && t.length ? Jn(t) : [];
            }),
            (Si.sortedUniqBy = function (t, e) {
              return t && t.length ? Jn(t, Xr(e, 2)) : [];
            }),
            (Si.split = function (t, e, i) {
              return (
                i && "number" != typeof i && la(t, e, i) && (e = i = void 0),
                (i = void 0 === i ? 4294967295 : i >>> 0)
                  ? (t = ls(t)) &&
                    ("string" == typeof e || (null != e && !Vo(e))) &&
                    !(e = Kn(e)) &&
                    Fe(t)
                    ? cr(Ge(t), 0, i)
                    : t.split(e, i)
                  : []
              );
            }),
            (Si.spread = function (t, e) {
              if ("function" != typeof t) throw new gt(a);
              return (
                (e = null == e ? 0 : oi(rs(e), 0)),
                qn(function (i) {
                  var n = i[e],
                    r = cr(i, 0, e);
                  return n && pe(r, n), ae(t, this, r);
                })
              );
            }),
            (Si.tail = function (t) {
              var e = null == t ? 0 : t.length;
              return e ? Zn(t, 1, e) : [];
            }),
            (Si.take = function (t, e, i) {
              return t && t.length
                ? Zn(t, 0, (e = i || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e)
                : [];
            }),
            (Si.takeRight = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              return n
                ? Zn(
                    t,
                    (e = n - (e = i || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e,
                    n
                  )
                : [];
            }),
            (Si.takeRightWhile = function (t, e) {
              return t && t.length ? ir(t, Xr(e, 3), !1, !0) : [];
            }),
            (Si.takeWhile = function (t, e) {
              return t && t.length ? ir(t, Xr(e, 3)) : [];
            }),
            (Si.tap = function (t, e) {
              return e(t), t;
            }),
            (Si.throttle = function (t, e, i) {
              var n = !0,
                r = !0;
              if ("function" != typeof t) throw new gt(a);
              return (
                Wo(i) &&
                  ((n = "leading" in i ? !!i.leading : n),
                  (r = "trailing" in i ? !!i.trailing : r)),
                bo(t, e, { leading: n, maxWait: e, trailing: r })
              );
            }),
            (Si.thru = io),
            (Si.toArray = is),
            (Si.toPairs = Ss),
            (Si.toPairsIn = Ds),
            (Si.toPath = function (t) {
              return Io(t) ? fe(t, Ea) : Ko(t) ? [t] : vr(Ma(ls(t)));
            }),
            (Si.toPlainObject = ss),
            (Si.transform = function (t, e, i) {
              var n = Io(t),
                r = n || Po(t) || Qo(t);
              if (((e = Xr(e, 4)), null == i)) {
                var a = t && t.constructor;
                i = r ? (n ? new a() : []) : Wo(t) && Ho(a) ? Di($t(t)) : {};
              }
              return (
                (r ? se : hn)(t, function (t, n, r) {
                  return e(i, t, n, r);
                }),
                i
              );
            }),
            (Si.unary = function (t) {
              return go(t, 1);
            }),
            (Si.union = Wa),
            (Si.unionBy = Ua),
            (Si.unionWith = Za),
            (Si.uniq = function (t) {
              return t && t.length ? Qn(t) : [];
            }),
            (Si.uniqBy = function (t, e) {
              return t && t.length ? Qn(t, Xr(e, 2)) : [];
            }),
            (Si.uniqWith = function (t, e) {
              return (
                (e = "function" == typeof e ? e : void 0),
                t && t.length ? Qn(t, void 0, e) : []
              );
            }),
            (Si.unset = function (t, e) {
              return null == t || tr(t, e);
            }),
            (Si.unzip = Ga),
            (Si.unzipWith = Ya),
            (Si.update = function (t, e, i) {
              return null == t ? t : er(t, e, sr(i));
            }),
            (Si.updateWith = function (t, e, i, n) {
              return (
                (n = "function" == typeof n ? n : void 0),
                null == t ? t : er(t, e, sr(i), n)
              );
            }),
            (Si.values = As),
            (Si.valuesIn = function (t) {
              return null == t ? [] : Ce(t, xs(t));
            }),
            (Si.without = Va),
            (Si.words = Hs),
            (Si.wrap = function (t, e) {
              return Lo(sr(e), t);
            }),
            (Si.xor = Ja),
            (Si.xorBy = Xa),
            (Si.xorWith = Ka),
            (Si.zip = Qa),
            (Si.zipObject = function (t, e) {
              return ar(t || [], e || [], Bi);
            }),
            (Si.zipObjectDeep = function (t, e) {
              return ar(t || [], e || [], $n);
            }),
            (Si.zipWith = to),
            (Si.entries = Ss),
            (Si.entriesIn = Ds),
            (Si.extend = cs),
            (Si.extendWith = us),
            Xs(Si, Si),
            (Si.add = sl),
            (Si.attempt = $s),
            (Si.camelCase = js),
            (Si.capitalize = Cs),
            (Si.ceil = ll),
            (Si.clamp = function (t, e, i) {
              return (
                void 0 === i && ((i = e), (e = void 0)),
                void 0 !== i && (i = (i = os(i)) == i ? i : 0),
                void 0 !== e && (e = (e = os(e)) == e ? e : 0),
                Vi(os(t), e, i)
              );
            }),
            (Si.clone = function (t) {
              return Ji(t, 4);
            }),
            (Si.cloneDeep = function (t) {
              return Ji(t, 5);
            }),
            (Si.cloneDeepWith = function (t, e) {
              return Ji(t, 5, (e = "function" == typeof e ? e : void 0));
            }),
            (Si.cloneWith = function (t, e) {
              return Ji(t, 4, (e = "function" == typeof e ? e : void 0));
            }),
            (Si.conformsTo = function (t, e) {
              return null == e || Xi(t, e, bs(e));
            }),
            (Si.deburr = Ns),
            (Si.defaultTo = function (t, e) {
              return null == t || t != t ? e : t;
            }),
            (Si.divide = hl),
            (Si.endsWith = function (t, e, i) {
              (t = ls(t)), (e = Kn(e));
              var n = t.length,
                r = (i = void 0 === i ? n : Vi(rs(i), 0, n));
              return (i -= e.length) >= 0 && t.slice(i, r) == e;
            }),
            (Si.eq = Ao),
            (Si.escape = function (t) {
              return (t = ls(t)) && q.test(t) ? t.replace(R, Pe) : t;
            }),
            (Si.escapeRegExp = function (t) {
              return (t = ls(t)) && G.test(t) ? t.replace(Z, "\\$&") : t;
            }),
            (Si.every = function (t, e, i) {
              var n = Io(t) ? he : nn;
              return i && la(t, e, i) && (e = void 0), n(t, Xr(e, 3));
            }),
            (Si.find = ao),
            (Si.findIndex = Ca),
            (Si.findKey = function (t, e) {
              return ye(t, Xr(e, 3), hn);
            }),
            (Si.findLast = oo),
            (Si.findLastIndex = Na),
            (Si.findLastKey = function (t, e) {
              return ye(t, Xr(e, 3), cn);
            }),
            (Si.floor = cl),
            (Si.forEach = so),
            (Si.forEachRight = lo),
            (Si.forIn = function (t, e) {
              return null == t ? t : sn(t, Xr(e, 3), xs);
            }),
            (Si.forInRight = function (t, e) {
              return null == t ? t : ln(t, Xr(e, 3), xs);
            }),
            (Si.forOwn = function (t, e) {
              return t && hn(t, Xr(e, 3));
            }),
            (Si.forOwnRight = function (t, e) {
              return t && cn(t, Xr(e, 3));
            }),
            (Si.get = ms),
            (Si.gt = jo),
            (Si.gte = Co),
            (Si.has = function (t, e) {
              return null != t && ra(t, e, mn);
            }),
            (Si.hasIn = gs),
            (Si.head = Oa),
            (Si.identity = Gs),
            (Si.includes = function (t, e, i, n) {
              (t = zo(t) ? t : As(t)), (i = i && !n ? rs(i) : 0);
              var r = t.length;
              return (
                i < 0 && (i = oi(r + i, 0)),
                Xo(t) ? i <= r && t.indexOf(e, i) > -1 : !!r && be(t, e, i) > -1
              );
            }),
            (Si.indexOf = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              if (!n) return -1;
              var r = null == i ? 0 : rs(i);
              return r < 0 && (r = oi(n + r, 0)), be(t, e, r);
            }),
            (Si.inRange = function (t, e, i) {
              return (
                (e = ns(e)),
                void 0 === i ? ((i = e), (e = 0)) : (i = ns(i)),
                (function (t, e, i) {
                  return t >= si(e, i) && t < oi(e, i);
                })((t = os(t)), e, i)
              );
            }),
            (Si.invoke = ws),
            (Si.isArguments = No),
            (Si.isArray = Io),
            (Si.isArrayBuffer = Oo),
            (Si.isArrayLike = zo),
            (Si.isArrayLikeObject = Ro),
            (Si.isBoolean = function (t) {
              return !0 === t || !1 === t || (Uo(t) && pn(t) == c);
            }),
            (Si.isBuffer = Po),
            (Si.isDate = qo),
            (Si.isElement = function (t) {
              return Uo(t) && 1 === t.nodeType && !Yo(t);
            }),
            (Si.isEmpty = function (t) {
              if (null == t) return !0;
              if (
                zo(t) &&
                (Io(t) ||
                  "string" == typeof t ||
                  "function" == typeof t.splice ||
                  Po(t) ||
                  Qo(t) ||
                  No(t))
              )
                return !t.length;
              var e = na(t);
              if (e == _ || e == y) return !t.size;
              if (da(t)) return !Mn(t).length;
              for (var i in t) if (kt.call(t, i)) return !1;
              return !0;
            }),
            (Si.isEqual = function (t, e) {
              return bn(t, e);
            }),
            (Si.isEqualWith = function (t, e, i) {
              var n = (i = "function" == typeof i ? i : void 0)
                ? i(t, e)
                : void 0;
              return void 0 === n ? bn(t, e, void 0, i) : !!n;
            }),
            (Si.isError = Fo),
            (Si.isFinite = function (t) {
              return "number" == typeof t && ni(t);
            }),
            (Si.isFunction = Ho),
            (Si.isInteger = $o),
            (Si.isLength = Bo),
            (Si.isMap = Zo),
            (Si.isMatch = function (t, e) {
              return t === e || xn(t, e, Qr(e));
            }),
            (Si.isMatchWith = function (t, e, i) {
              return (
                (i = "function" == typeof i ? i : void 0), xn(t, e, Qr(e), i)
              );
            }),
            (Si.isNaN = function (t) {
              return Go(t) && t != +t;
            }),
            (Si.isNative = function (t) {
              if (ua(t))
                throw new V(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return kn(t);
            }),
            (Si.isNil = function (t) {
              return null == t;
            }),
            (Si.isNull = function (t) {
              return null === t;
            }),
            (Si.isNumber = Go),
            (Si.isObject = Wo),
            (Si.isObjectLike = Uo),
            (Si.isPlainObject = Yo),
            (Si.isRegExp = Vo),
            (Si.isSafeInteger = function (t) {
              return $o(t) && t >= -9007199254740991 && t <= 9007199254740991;
            }),
            (Si.isSet = Jo),
            (Si.isString = Xo),
            (Si.isSymbol = Ko),
            (Si.isTypedArray = Qo),
            (Si.isUndefined = function (t) {
              return void 0 === t;
            }),
            (Si.isWeakMap = function (t) {
              return Uo(t) && na(t) == x;
            }),
            (Si.isWeakSet = function (t) {
              return Uo(t) && "[object WeakSet]" == pn(t);
            }),
            (Si.join = function (t, e) {
              return null == t ? "" : ri.call(t, e);
            }),
            (Si.kebabCase = Is),
            (Si.last = qa),
            (Si.lastIndexOf = function (t, e, i) {
              var n = null == t ? 0 : t.length;
              if (!n) return -1;
              var r = n;
              return (
                void 0 !== i &&
                  (r = (r = rs(i)) < 0 ? oi(n + r, 0) : si(r, n - 1)),
                e == e
                  ? (function (t, e, i) {
                      for (var n = i + 1; n--; ) if (t[n] === e) return n;
                      return n;
                    })(t, e, r)
                  : we(t, ke, r, !0)
              );
            }),
            (Si.lowerCase = Os),
            (Si.lowerFirst = zs),
            (Si.lt = ts),
            (Si.lte = es),
            (Si.max = function (t) {
              return t && t.length ? rn(t, Gs, _n) : void 0;
            }),
            (Si.maxBy = function (t, e) {
              return t && t.length ? rn(t, Xr(e, 2), _n) : void 0;
            }),
            (Si.mean = function (t) {
              return Te(t, Gs);
            }),
            (Si.meanBy = function (t, e) {
              return Te(t, Xr(e, 2));
            }),
            (Si.min = function (t) {
              return t && t.length ? rn(t, Gs, Ln) : void 0;
            }),
            (Si.minBy = function (t, e) {
              return t && t.length ? rn(t, Xr(e, 2), Ln) : void 0;
            }),
            (Si.stubArray = al),
            (Si.stubFalse = ol),
            (Si.stubObject = function () {
              return {};
            }),
            (Si.stubString = function () {
              return "";
            }),
            (Si.stubTrue = function () {
              return !0;
            }),
            (Si.multiply = dl),
            (Si.nth = function (t, e) {
              return t && t.length ? Cn(t, rs(e)) : void 0;
            }),
            (Si.noConflict = function () {
              return Gt._ === this && (Gt._ = St), this;
            }),
            (Si.noop = Ks),
            (Si.now = mo),
            (Si.pad = function (t, e, i) {
              t = ls(t);
              var n = (e = rs(e)) ? Ze(t) : 0;
              if (!e || n >= e) return t;
              var r = (e - n) / 2;
              return Nr(ti(r), i) + t + Nr(Qe(r), i);
            }),
            (Si.padEnd = function (t, e, i) {
              t = ls(t);
              var n = (e = rs(e)) ? Ze(t) : 0;
              return e && n < e ? t + Nr(e - n, i) : t;
            }),
            (Si.padStart = function (t, e, i) {
              t = ls(t);
              var n = (e = rs(e)) ? Ze(t) : 0;
              return e && n < e ? Nr(e - n, i) + t : t;
            }),
            (Si.parseInt = function (t, e, i) {
              return (
                i || null == e ? (e = 0) : e && (e = +e),
                hi(ls(t).replace(Y, ""), e || 0)
              );
            }),
            (Si.random = function (t, e, i) {
              if (
                (i && "boolean" != typeof i && la(t, e, i) && (e = i = void 0),
                void 0 === i &&
                  ("boolean" == typeof e
                    ? ((i = e), (e = void 0))
                    : "boolean" == typeof t && ((i = t), (t = void 0))),
                void 0 === t && void 0 === e
                  ? ((t = 0), (e = 1))
                  : ((t = ns(t)),
                    void 0 === e ? ((e = t), (t = 0)) : (e = ns(e))),
                t > e)
              ) {
                var n = t;
                (t = e), (e = n);
              }
              if (i || t % 1 || e % 1) {
                var r = ci();
                return si(
                  t + r * (e - t + Bt("1e-" + ((r + "").length - 1))),
                  e
                );
              }
              return Rn(t, e);
            }),
            (Si.reduce = function (t, e, i) {
              var n = Io(t) ? _e : Le,
                r = arguments.length < 3;
              return n(t, Xr(e, 4), i, r, tn);
            }),
            (Si.reduceRight = function (t, e, i) {
              var n = Io(t) ? me : Le,
                r = arguments.length < 3;
              return n(t, Xr(e, 4), i, r, en);
            }),
            (Si.repeat = function (t, e, i) {
              return (
                (e = (i ? la(t, e, i) : void 0 === e) ? 1 : rs(e)), Pn(ls(t), e)
              );
            }),
            (Si.replace = function () {
              var t = arguments,
                e = ls(t[0]);
              return t.length < 3 ? e : e.replace(t[1], t[2]);
            }),
            (Si.result = function (t, e, i) {
              var n = -1,
                r = (e = lr(e, t)).length;
              for (r || ((r = 1), (t = void 0)); ++n < r; ) {
                var a = null == t ? void 0 : t[Ea(e[n])];
                void 0 === a && ((n = r), (a = i)), (t = Ho(a) ? a.call(t) : a);
              }
              return t;
            }),
            (Si.round = fl),
            (Si.runInContext = t),
            (Si.sample = function (t) {
              return (Io(t) ? qi : Fn)(t);
            }),
            (Si.size = function (t) {
              if (null == t) return 0;
              if (zo(t)) return Xo(t) ? Ze(t) : t.length;
              var e = na(t);
              return e == _ || e == y ? t.size : Mn(t).length;
            }),
            (Si.snakeCase = Rs),
            (Si.some = function (t, e, i) {
              var n = Io(t) ? ge : Gn;
              return i && la(t, e, i) && (e = void 0), n(t, Xr(e, 3));
            }),
            (Si.sortedIndex = function (t, e) {
              return Yn(t, e);
            }),
            (Si.sortedIndexBy = function (t, e, i) {
              return Vn(t, e, Xr(i, 2));
            }),
            (Si.sortedIndexOf = function (t, e) {
              var i = null == t ? 0 : t.length;
              if (i) {
                var n = Yn(t, e);
                if (n < i && Ao(t[n], e)) return n;
              }
              return -1;
            }),
            (Si.sortedLastIndex = function (t, e) {
              return Yn(t, e, !0);
            }),
            (Si.sortedLastIndexBy = function (t, e, i) {
              return Vn(t, e, Xr(i, 2), !0);
            }),
            (Si.sortedLastIndexOf = function (t, e) {
              if (null == t ? 0 : t.length) {
                var i = Yn(t, e, !0) - 1;
                if (Ao(t[i], e)) return i;
              }
              return -1;
            }),
            (Si.startCase = Ps),
            (Si.startsWith = function (t, e, i) {
              return (
                (t = ls(t)),
                (i = null == i ? 0 : Vi(rs(i), 0, t.length)),
                (e = Kn(e)),
                t.slice(i, i + e.length) == e
              );
            }),
            (Si.subtract = pl),
            (Si.sum = function (t) {
              return t && t.length ? Se(t, Gs) : 0;
            }),
            (Si.sumBy = function (t, e) {
              return t && t.length ? Se(t, Xr(e, 2)) : 0;
            }),
            (Si.template = function (t, e, i) {
              var n = Si.templateSettings;
              i && la(t, e, i) && (e = void 0),
                (t = ls(t)),
                (e = us({}, e, n, Hr));
              var r,
                a,
                o = us({}, e.imports, n.imports, Hr),
                s = bs(o),
                l = Ce(o, s),
                h = 0,
                c = e.interpolate || ct,
                u = "__p += '",
                d = _t(
                  (e.escape || ct).source +
                    "|" +
                    c.source +
                    "|" +
                    (c === $ ? it : ct).source +
                    "|" +
                    (e.evaluate || ct).source +
                    "|$",
                  "g"
                ),
                f =
                  "//# sourceURL=" +
                  (kt.call(e, "sourceURL")
                    ? (e.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++qt + "]") +
                  "\n";
              t.replace(d, function (e, i, n, o, s, l) {
                return (
                  n || (n = o),
                  (u += t.slice(h, l).replace(ut, qe)),
                  i && ((r = !0), (u += "' +\n__e(" + i + ") +\n'")),
                  s && ((a = !0), (u += "';\n" + s + ";\n__p += '")),
                  n &&
                    (u += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                  (h = l + e.length),
                  e
                );
              }),
                (u += "';\n");
              var p = kt.call(e, "variable") && e.variable;
              if (p) {
                if (tt.test(p))
                  throw new V(
                    "Invalid `variable` option passed into `_.template`"
                  );
              } else u = "with (obj) {\n" + u + "\n}\n";
              (u = (a ? u.replace(N, "") : u)
                .replace(I, "$1")
                .replace(O, "$1;")),
                (u =
                  "function(" +
                  (p || "obj") +
                  ") {\n" +
                  (p ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (r ? ", __e = _.escape" : "") +
                  (a
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  u +
                  "return __p\n}");
              var _ = $s(function () {
                return dt(s, f + "return " + u).apply(void 0, l);
              });
              if (((_.source = u), Fo(_))) throw _;
              return _;
            }),
            (Si.times = function (t, e) {
              if ((t = rs(t)) < 1 || t > 9007199254740991) return [];
              var i = 4294967295,
                n = si(t, 4294967295);
              t -= 4294967295;
              for (var r = De(n, (e = Xr(e))); ++i < t; ) e(i);
              return r;
            }),
            (Si.toFinite = ns),
            (Si.toInteger = rs),
            (Si.toLength = as),
            (Si.toLower = function (t) {
              return ls(t).toLowerCase();
            }),
            (Si.toNumber = os),
            (Si.toSafeInteger = function (t) {
              return t
                ? Vi(rs(t), -9007199254740991, 9007199254740991)
                : 0 === t
                ? t
                : 0;
            }),
            (Si.toString = ls),
            (Si.toUpper = function (t) {
              return ls(t).toUpperCase();
            }),
            (Si.trim = function (t, e, i) {
              if ((t = ls(t)) && (i || void 0 === e)) return Ae(t);
              if (!t || !(e = Kn(e))) return t;
              var n = Ge(t),
                r = Ge(e);
              return cr(n, Ie(n, r), Oe(n, r) + 1).join("");
            }),
            (Si.trimEnd = function (t, e, i) {
              if ((t = ls(t)) && (i || void 0 === e))
                return t.slice(0, Ye(t) + 1);
              if (!t || !(e = Kn(e))) return t;
              var n = Ge(t);
              return cr(n, 0, Oe(n, Ge(e)) + 1).join("");
            }),
            (Si.trimStart = function (t, e, i) {
              if ((t = ls(t)) && (i || void 0 === e)) return t.replace(Y, "");
              if (!t || !(e = Kn(e))) return t;
              var n = Ge(t);
              return cr(n, Ie(n, Ge(e))).join("");
            }),
            (Si.truncate = function (t, e) {
              var i = 30,
                n = "...";
              if (Wo(e)) {
                var r = "separator" in e ? e.separator : r;
                (i = "length" in e ? rs(e.length) : i),
                  (n = "omission" in e ? Kn(e.omission) : n);
              }
              var a = (t = ls(t)).length;
              if (Fe(t)) {
                var o = Ge(t);
                a = o.length;
              }
              if (i >= a) return t;
              var s = i - Ze(n);
              if (s < 1) return n;
              var l = o ? cr(o, 0, s).join("") : t.slice(0, s);
              if (void 0 === r) return l + n;
              if ((o && (s += l.length - s), Vo(r))) {
                if (t.slice(s).search(r)) {
                  var h,
                    c = l;
                  for (
                    r.global || (r = _t(r.source, ls(nt.exec(r)) + "g")),
                      r.lastIndex = 0;
                    (h = r.exec(c));

                  )
                    var u = h.index;
                  l = l.slice(0, void 0 === u ? s : u);
                }
              } else if (t.indexOf(Kn(r), s) != s) {
                var d = l.lastIndexOf(r);
                d > -1 && (l = l.slice(0, d));
              }
              return l + n;
            }),
            (Si.unescape = function (t) {
              return (t = ls(t)) && P.test(t) ? t.replace(z, Ve) : t;
            }),
            (Si.uniqueId = function (t) {
              var e = ++Tt;
              return ls(t) + e;
            }),
            (Si.upperCase = qs),
            (Si.upperFirst = Fs),
            (Si.each = so),
            (Si.eachRight = lo),
            (Si.first = Oa),
            Xs(
              Si,
              ((ul = {}),
              hn(Si, function (t, e) {
                kt.call(Si.prototype, e) || (ul[e] = t);
              }),
              ul),
              { chain: !1 }
            ),
            (Si.VERSION = "4.17.21"),
            se(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (t) {
                Si[t].placeholder = Si;
              }
            ),
            se(["drop", "take"], function (t, e) {
              (Ci.prototype[t] = function (i) {
                i = void 0 === i ? 1 : oi(rs(i), 0);
                var n = this.__filtered__ && !e ? new Ci(this) : this.clone();
                return (
                  n.__filtered__
                    ? (n.__takeCount__ = si(i, n.__takeCount__))
                    : n.__views__.push({
                        size: si(i, 4294967295),
                        type: t + (n.__dir__ < 0 ? "Right" : ""),
                      }),
                  n
                );
              }),
                (Ci.prototype[t + "Right"] = function (e) {
                  return this.reverse()[t](e).reverse();
                });
            }),
            se(["filter", "map", "takeWhile"], function (t, e) {
              var i = e + 1,
                n = 1 == i || 3 == i;
              Ci.prototype[t] = function (t) {
                var e = this.clone();
                return (
                  e.__iteratees__.push({ iteratee: Xr(t, 3), type: i }),
                  (e.__filtered__ = e.__filtered__ || n),
                  e
                );
              };
            }),
            se(["head", "last"], function (t, e) {
              var i = "take" + (e ? "Right" : "");
              Ci.prototype[t] = function () {
                return this[i](1).value()[0];
              };
            }),
            se(["initial", "tail"], function (t, e) {
              var i = "drop" + (e ? "" : "Right");
              Ci.prototype[t] = function () {
                return this.__filtered__ ? new Ci(this) : this[i](1);
              };
            }),
            (Ci.prototype.compact = function () {
              return this.filter(Gs);
            }),
            (Ci.prototype.find = function (t) {
              return this.filter(t).head();
            }),
            (Ci.prototype.findLast = function (t) {
              return this.reverse().find(t);
            }),
            (Ci.prototype.invokeMap = qn(function (t, e) {
              return "function" == typeof t
                ? new Ci(this)
                : this.map(function (i) {
                    return yn(i, t, e);
                  });
            })),
            (Ci.prototype.reject = function (t) {
              return this.filter(Mo(Xr(t)));
            }),
            (Ci.prototype.slice = function (t, e) {
              t = rs(t);
              var i = this;
              return i.__filtered__ && (t > 0 || e < 0)
                ? new Ci(i)
                : (t < 0 ? (i = i.takeRight(-t)) : t && (i = i.drop(t)),
                  void 0 !== e &&
                    (i = (e = rs(e)) < 0 ? i.dropRight(-e) : i.take(e - t)),
                  i);
            }),
            (Ci.prototype.takeRightWhile = function (t) {
              return this.reverse().takeWhile(t).reverse();
            }),
            (Ci.prototype.toArray = function () {
              return this.take(4294967295);
            }),
            hn(Ci.prototype, function (t, e) {
              var i = /^(?:filter|find|map|reject)|While$/.test(e),
                n = /^(?:head|last)$/.test(e),
                r = Si[n ? "take" + ("last" == e ? "Right" : "") : e],
                a = n || /^find/.test(e);
              r &&
                (Si.prototype[e] = function () {
                  var e = this.__wrapped__,
                    o = n ? [1] : arguments,
                    s = e instanceof Ci,
                    l = o[0],
                    h = s || Io(e),
                    c = function (t) {
                      var e = r.apply(Si, pe([t], o));
                      return n && u ? e[0] : e;
                    };
                  h &&
                    i &&
                    "function" == typeof l &&
                    1 != l.length &&
                    (s = h = !1);
                  var u = this.__chain__,
                    d = !!this.__actions__.length,
                    f = a && !u,
                    p = s && !d;
                  if (!a && h) {
                    e = p ? e : new Ci(this);
                    var _ = t.apply(e, o);
                    return (
                      _.__actions__.push({
                        func: io,
                        args: [c],
                        thisArg: void 0,
                      }),
                      new ji(_, u)
                    );
                  }
                  return f && p
                    ? t.apply(this, o)
                    : ((_ = this.thru(c)),
                      f ? (n ? _.value()[0] : _.value()) : _);
                });
            }),
            se(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (t) {
                var e = vt[t],
                  i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  n = /^(?:pop|shift)$/.test(t);
                Si.prototype[t] = function () {
                  var t = arguments;
                  if (n && !this.__chain__) {
                    var r = this.value();
                    return e.apply(Io(r) ? r : [], t);
                  }
                  return this[i](function (i) {
                    return e.apply(Io(i) ? i : [], t);
                  });
                };
              }
            ),
            hn(Ci.prototype, function (t, e) {
              var i = Si[e];
              if (i) {
                var n = i.name + "";
                kt.call(yi, n) || (yi[n] = []),
                  yi[n].push({ name: e, func: i });
              }
            }),
            (yi[Dr(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
            (Ci.prototype.clone = function () {
              var t = new Ci(this.__wrapped__);
              return (
                (t.__actions__ = vr(this.__actions__)),
                (t.__dir__ = this.__dir__),
                (t.__filtered__ = this.__filtered__),
                (t.__iteratees__ = vr(this.__iteratees__)),
                (t.__takeCount__ = this.__takeCount__),
                (t.__views__ = vr(this.__views__)),
                t
              );
            }),
            (Ci.prototype.reverse = function () {
              if (this.__filtered__) {
                var t = new Ci(this);
                (t.__dir__ = -1), (t.__filtered__ = !0);
              } else (t = this.clone()).__dir__ *= -1;
              return t;
            }),
            (Ci.prototype.value = function () {
              var t = this.__wrapped__.value(),
                e = this.__dir__,
                i = Io(t),
                n = e < 0,
                r = i ? t.length : 0,
                a = (function (t, e, i) {
                  var n = -1,
                    r = i.length;
                  for (; ++n < r; ) {
                    var a = i[n],
                      o = a.size;
                    switch (a.type) {
                      case "drop":
                        t += o;
                        break;
                      case "dropRight":
                        e -= o;
                        break;
                      case "take":
                        e = si(e, t + o);
                        break;
                      case "takeRight":
                        t = oi(t, e - o);
                    }
                  }
                  return { start: t, end: e };
                })(0, r, this.__views__),
                o = a.start,
                s = a.end,
                l = s - o,
                h = n ? s : o - 1,
                c = this.__iteratees__,
                u = c.length,
                d = 0,
                f = si(l, this.__takeCount__);
              if (!i || (!n && r == l && f == l))
                return nr(t, this.__actions__);
              var p = [];
              t: for (; l-- && d < f; ) {
                for (var _ = -1, m = t[(h += e)]; ++_ < u; ) {
                  var g = c[_],
                    v = g.iteratee,
                    y = g.type,
                    w = v(m);
                  if (2 == y) m = w;
                  else if (!w) {
                    if (1 == y) continue t;
                    break t;
                  }
                }
                p[d++] = m;
              }
              return p;
            }),
            (Si.prototype.at = no),
            (Si.prototype.chain = function () {
              return eo(this);
            }),
            (Si.prototype.commit = function () {
              return new ji(this.value(), this.__chain__);
            }),
            (Si.prototype.next = function () {
              void 0 === this.__values__ &&
                (this.__values__ = is(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? void 0 : this.__values__[this.__index__++],
              };
            }),
            (Si.prototype.plant = function (t) {
              for (var e, i = this; i instanceof Ai; ) {
                var n = Sa(i);
                (n.__index__ = 0),
                  (n.__values__ = void 0),
                  e ? (r.__wrapped__ = n) : (e = n);
                var r = n;
                i = i.__wrapped__;
              }
              return (r.__wrapped__ = t), e;
            }),
            (Si.prototype.reverse = function () {
              var t = this.__wrapped__;
              if (t instanceof Ci) {
                var e = t;
                return (
                  this.__actions__.length && (e = new Ci(this)),
                  (e = e.reverse()).__actions__.push({
                    func: io,
                    args: [Ba],
                    thisArg: void 0,
                  }),
                  new ji(e, this.__chain__)
                );
              }
              return this.thru(Ba);
            }),
            (Si.prototype.toJSON =
              Si.prototype.valueOf =
              Si.prototype.value =
                function () {
                  return nr(this.__wrapped__, this.__actions__);
                }),
            (Si.prototype.first = Si.prototype.head),
            Xt &&
              (Si.prototype[Xt] = function () {
                return this;
              }),
            Si
          );
        })();
        (Gt._ = Je),
          void 0 ===
            (r = function () {
              return Je;
            }.call(e, i, e, n)) || (n.exports = r);
      }.call(this));
    }.call(this, i(3), i(4)(t)));
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, i) {
    "use strict";
    i.r(e),
      i.d(e, "Timeline", function () {
        return Xe;
      }),
      i.d(e, "parseGoogleSpreadsheetURL", function () {
        return te;
      }),
      i.d(e, "lookupMediaType", function () {
        return $e;
      });
    const r = navigator
        ? navigator.userAgent.toLowerCase()
        : "no-user-agent-specified",
      a = document ? document.documentElement : null,
      o = !!r && -1 !== r.indexOf("phantom"),
      s = window && "ActiveXObject" in window,
      l =
        (Boolean(s && r.match(/MSIE 9/i)),
        s && document && document.addEventListener,
        -1 !== r.indexOf("webkit")),
      h = (r.indexOf("android"), -1 !== r.search("android [23]")),
      c = !!window && void 0 !== window.orientation,
      u =
        !(!navigator || !window) &&
        navigator.msPointerEnabled &&
        navigator.msMaxTouchPoints &&
        !window.PointerEvent,
      d =
        navigator && window
          ? window.PointerEvent &&
            navigator.pointerEnabled &&
            navigator.maxTouchPoints
          : u,
      f = !!window && window.opera,
      p = (r.indexOf("gecko"), -1 !== r.indexOf("gecko") && !l && !f && !s),
      _ = (r.indexOf("chrome"), -1 !== r.indexOf("edge/")),
      m = !!a && s && "transition" in a.style,
      g =
        !!window &&
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !h,
      v = !!a && "MozPerspective" in a.style,
      y = !!a && "OTransition" in a.style;
    window && window.L_DISABLE_3D, c && window.opera;
    let w =
      !!window && "devicePixelRatio" in window && window.devicePixelRatio > 1;
    if (!w && window && "matchMedia" in window) {
      let t = window.matchMedia("(min-resolution:144dpi)");
      w = t && t.matches;
    }
    const b =
      window &&
      !window.L_NO_TOUCH &&
      !o &&
      (d ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch));
    function x(t) {
      return "string" == typeof t ? document.getElementById(t) : t;
    }
    function T(t, e, i) {
      var n = document.createElement(t);
      return (n.className = e), i && i.appendChild(n), n;
    }
    function M(t) {
      for (
        var e = { x: 0, y: 0 };
        t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

      )
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = t.offsetParent);
      return e;
    }
    function E(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e) return t[i];
      return !1;
    }
    E([
      "transition",
      "webkitTransition",
      "OTransition",
      "MozTransition",
      "msTransition",
    ]),
      E([
        "transformProperty",
        "WebkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]);
    function L(t, e) {
      (function (t, e) {
        return (
          t.className.length > 0 &&
          new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        );
      })(t, e) || (t.className += (t.className ? " " : "") + e);
    }
    function S(t, e) {
      t.className = t.className
        .replace(/(\S+)\s*/g, function (t, i) {
          return i === e ? "" : t;
        })
        .replace(/^\s+/, "");
    }
    class D extends Error {
      constructor(t, e) {
        super(),
          (this.name = "TLError"),
          (this.message = t || "error"),
          (this.message_key = this.message),
          (this.detail = e || "");
      }
    }
    const A = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    };
    function j(t) {
      A[t.toLowerCase()] && (t = A[t.toLowerCase()]);
      t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
        return e + e + i + i + n + n;
      });
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return e
        ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16),
          }
        : null;
    }
    function C(t, e) {
      var i;
      for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }
    function N(t) {
      for (
        var e = Array.prototype.slice.call(arguments, 1), i = 0, n = e.length;
        i < n;
        i++
      )
        C(t, e[i] || {});
      return t;
    }
    const I = [];
    function O(t) {
      I.forEach((e) => {
        try {
          e(t);
        } catch (t) {
          console && console.log && console.log("Error handling trace", t);
        }
      });
    }
    function z(t, e) {
      for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
      return t;
    }
    const R =
      ((P = 0),
      (q = "_tl_id"),
      function (t) {
        return (t[q] = t[q] || ++P), t[q];
      });
    var P, q;
    function F(t) {
      return t && "function" == typeof t.replace
        ? t.replace(/^\s+|\s+$/g, "")
        : "";
    }
    function H(t, ...e) {
      for (let n of e)
        for (var i of Object.getOwnPropertyNames(n.prototype))
          t.prototype[i] = n.prototype[i];
    }
    function $(t) {
      t = (t = F(t)).toLowerCase();
      for (
        var e = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;", i = 0, n = e.length;
        i < n;
        i++
      )
        t = t.replace(
          new RegExp(e.charAt(i), "g"),
          "aaaaaeeeeeiiiiooooouuuunc------".charAt(i)
        );
      return (t = (t = t
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")).replace(/^([0-9])/, "_$1"));
    }
    function B(t, e) {
      var i = function () {
          var t;
          return "abcdefghijklmnopqurstuvwxyz".substr(
            ((t = 32), Math.floor(Math.random() * t)),
            1
          );
        },
        n = function (t) {
          for (var e = "", n = 0; n < t; n++) e += i();
          return e;
        };
      return e ? e + "-" + n(t) : "tl-" + n(t);
    }
    function W(t) {
      return t == parseFloat(t) ? !(t % 2) : void 0;
    }
    function U(t, e, i, n) {
      for (var r = n || 0, a = 0; a < e.length; a++)
        e[a].data[i] == t && (r = a);
      return r;
    }
    function Z(t) {
      return t
        ? (t = (t = t.replace(/<a\b[^>]*>/i, "")).replace(/<\/a>/i, ""))
        : t;
    }
    function G(t) {
      return (t = t.replace(/(<[^>]*>)+/g, "")).replace('"', "'");
    }
    function Y(t, e, i) {
      var n = function (t, e, i) {
        i || (i = "");
        return (
          e && e.length > 30 && (e = e.substring(0, 30) + "…"),
          i +
            "<a class='tl-makelink' href='" +
            t +
            "' onclick='void(0)'>" +
            e +
            "</a>"
        );
      };
      return t
        .replace(
          /\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim,
          function (t, e, i, r) {
            if (i > 0) {
              var a = r[i - 1];
              if ('"' == a || "'" == a || "=" == a) return t;
            }
            return n(t, e);
          }
        )
        .replace(/(^|[^\/>])(www\.[\S]+(\b|$))/gim, function (t, e, i, r, a) {
          return n("http://" + i, i, e);
        })
        .replace(
          /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim,
          function (t, e, i, r) {
            return n("mailto:" + e, e);
          }
        );
    }
    function V(t) {
      return t.replace(
        /(.*)www.dropbox.com\/(.*)/,
        "$1dl.dropboxusercontent.com/$2"
      );
    }
    const J = (t) => {
        var e = { w: 0, h: 0 };
        return (
          t.w > t.h && t.h > 0
            ? ((e.h = t.h), (e.w = t.h))
            : ((e.w = t.w), (e.h = t.w)),
          e
        );
      },
      X = (t) =>
        null !== t.w && "" !== t.w
          ? Math.round((t.w / 16) * 9)
          : null !== t.h && "" !== t.h
          ? Math.round((t.h / 9) * 16)
          : 0;
    let K =
      ((tt = (Q = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")
        .length),
      {
        encode: function (t) {
          if ("number" != typeof t || t !== parseInt(t))
            throw '"encode" only accepts integers.';
          for (var e = ""; t; ) {
            var i = t % tt;
            (t = Math.floor(t / tt)), (e = Q[i].toString() + e);
          }
          return e;
        },
        decode: function (t) {
          if ("string" != typeof t) throw '"decode" only accepts strings.';
          for (var e = 0; t; ) {
            var i = Q.indexOf(t[0]);
            if (i < 0)
              throw (
                '"decode" can\'t find "' +
                t[0] +
                '" in the alphabet: "' +
                Q +
                '"'
              );
            var n = t.length - 1;
            (e += i * Math.pow(tt, n)), (t = t.substring(1));
          }
          return e;
        },
      });
    var Q, tt;
    function et(t) {
      if ("string" == typeof t) {
        let n = t.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i);
        if (n) {
          var e = parseInt(n[1]) || 0,
            i = parseInt(n[2]) || 0;
          return (parseInt(n[3]) || 0) + 60 * i + 60 * e * 60;
        }
      } else if ("number" == typeof t) return t;
      return 0;
    }
    function it(t) {
      return (
        new DOMParser().parseFromString(t, "text/html").body.textContent || ""
      );
    }
    const nt = [0.42, 0, 1, 1];
    function rt(t) {}
    function at(t) {
      return new rt(nt).get(t);
    }
    function ot(t) {
      return 1 == t ? 1 : 1 - Math.pow(2, -10 * t);
    }
    function st(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
    let lt = function () {};
    lt.extend = function (t) {
      var e = function () {
          this.initialize && this.initialize.apply(this, arguments);
        },
        i = function () {};
      i.prototype = this.prototype;
      var n = new i();
      for (var r in ((n.constructor = e),
      (e.prototype = n),
      (e.superclass = this.prototype),
      this))
        this.hasOwnProperty(r) &&
          "prototype" !== r &&
          "superclass" !== r &&
          (e[r] = this[r]);
      return (
        t.statics && (N(e, t.statics), delete t.statics),
        t.includes &&
          (N.apply(null, [n].concat(t.includes)), delete t.includes),
        t.options && n.options && (t.options = N({}, n.options, t.options)),
        N(n, t),
        (e.extend = lt.extend),
        (e.include = function (t) {
          N(this.prototype, t);
        }),
        e
      );
    };
    class ht {
      on(t, e, i) {
        if (!e) throw new D("No callback function provided");
        var n = (this._tl_events = this._tl_events || {});
        return (
          (n[t] = n[t] || []),
          n[t].push({ action: e, context: i || this }),
          this
        );
      }
      addEventListener(t, e, i) {
        return this.on(t, e, i);
      }
      hasEventListeners(t) {
        var e = "_tl_events";
        return e in this && t in this[e] && this[e][t].length > 0;
      }
      removeEventListener(t, e, i) {
        if (!this.hasEventListeners(t)) return this;
        for (var n = 0, r = this._tl_events, a = r[t].length; n < a; n++)
          if (r[t][n].action === e && (!i || r[t][n].context === i))
            return r[t].splice(n, 1), this;
        return this;
      }
      off(t, e, i) {
        return this.removeEventListener(t, e, i);
      }
      fire(t, e) {
        if (!this.hasEventListeners(t)) return this;
        for (
          var i = C({ type: t, target: this }, e),
            n = this._tl_events[t].slice(),
            r = 0,
            a = n.length;
          r < a;
          r++
        )
          n[r].action
            ? n[r].action.call(n[r].context || this, i)
            : O(`no action defined for ${t} listener`);
        return this;
      }
    }
    function ct(t, e) {
      return ut(t, e);
    }
    const ut = (function () {
      var t = document,
        e = window,
        i = e.performance,
        n = i && (i.now || i.webkitNow || i.msNow || i.mozNow),
        r = n
          ? function () {
              return n.call(i);
            }
          : function () {
              return +new Date();
            },
        a = t.documentElement,
        o = !1,
        s = /^rgb\(|#/,
        l = /^([+\-])=([\d\.]+)/,
        h = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
        c = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
        u = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
        d = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
        f =
          /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
        p = { lineHeight: 1, zoom: 1, zIndex: 1, opacity: 1, transform: 1 },
        _ = (function () {
          var e,
            i = t.createElement("a").style,
            n = [
              "webkitTransform",
              "MozTransform",
              "OTransform",
              "msTransform",
              "Transform",
            ];
          for (e = 0; e < n.length; e++) if (n[e] in i) return n[e];
        })(),
        m = void 0 !== t.createElement("a").style.opacity,
        g =
          t.defaultView && t.defaultView.getComputedStyle
            ? function (e, i) {
                i = M((i = "transform" == i ? _ : i));
                var n = null,
                  r = t.defaultView.getComputedStyle(e, "");
                return r && (n = r[i]), e.style[i] || n;
              }
            : a.currentStyle
            ? function (t, e) {
                if ("opacity" == (e = M(e))) {
                  var i = 100;
                  try {
                    i = t.filters["DXImageTransform.Microsoft.Alpha"].opacity;
                  } catch (e) {
                    try {
                      i = t.filters("alpha").opacity;
                    } catch (t) {}
                  }
                  return i / 100;
                }
                var n = t.currentStyle ? t.currentStyle[e] : null;
                return t.style[e] || n;
              }
            : function (t, e) {
                return t.style[M(e)];
              },
        v =
          e.requestAnimationFrame ||
          e.webkitRequestAnimationFrame ||
          e.mozRequestAnimationFrame ||
          e.msRequestAnimationFrame ||
          e.oRequestAnimationFrame ||
          function (t) {
            e.setTimeout(function () {
              t(+new Date());
            }, 17);
          },
        y = [];
      function w(t) {
        var e,
          i = y.length;
        for (n && t > 1e12 && (t = r()), o && (t = r()), e = i; e--; ) y[e](t);
        y.length && v(w);
      }
      function b(t) {
        var e,
          i = (function (t, e, i) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (i = 0; i < t.length; ++i) if (t[i] === e) return i;
          })(y, t);
        i >= 0 && ((e = y.slice(i + 1)), (y.length = i), (y = y.concat(e)));
      }
      function x(t, e) {
        var i,
          n = {};
        return (
          (i = t.match(c)) && (n.rotate = j(i[1], e ? e.rotate : null)),
          (i = t.match(u)) && (n.scale = j(i[1], e ? e.scale : null)),
          (i = t.match(d)) &&
            ((n.skewx = j(i[1], e ? e.skewx : null)),
            (n.skewy = j(i[3], e ? e.skewy : null))),
          (i = t.match(f)) &&
            ((n.translatex = j(i[1], e ? e.translatex : null)),
            (n.translatey = j(i[3], e ? e.translatey : null))),
          n
        );
      }
      function k(t) {
        var e = "";
        return (
          "rotate" in t && (e += "rotate(" + t.rotate + "deg) "),
          "scale" in t && (e += "scale(" + t.scale + ") "),
          "translatex" in t &&
            (e += "translate(" + t.translatex + "px," + t.translatey + "px) "),
          "skewx" in t && (e += "skew(" + t.skewx + "deg," + t.skewy + "deg)"),
          e
        );
      }
      function T(t) {
        var e,
          i,
          n,
          r = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        return (
          r
            ? ((e = r[1]),
              (i = r[2]),
              (n = r[3]),
              "#" +
                ((1 << 24) | (e << 16) | (i << 8) | n).toString(16).slice(1))
            : t
        ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
      }
      function M(t) {
        return t.replace(/-(.)/g, function (t, e) {
          return e.toUpperCase();
        });
      }
      function E(t) {
        return "function" == typeof t;
      }
      function L(t) {
        return Math.sin((t * Math.PI) / 2);
      }
      function S(t, e, i, n, a, o) {
        n = E(n) ? n : C.easings[n] || L;
        var s,
          l = t || 1e3,
          h = this,
          c = o - a,
          u = r(),
          d = 0,
          f = 0;
        return (
          (s = function t(r) {
            var s = r - u;
            if (s > l || d)
              return (
                (o = isFinite(o) ? o : 1),
                d ? f && e(o) : e(o),
                b(t),
                i && i.apply(h)
              );
            isFinite(o) ? e(c * n(s / l) + a) : e(n(s / l));
          }),
          1 === y.push(s) && v(w),
          {
            stop: function (t) {
              (d = 1), (f = t), t || (i = null);
            },
          }
        );
      }
      function D(t, e) {
        var i,
          n,
          r = t.length,
          a = [];
        for (i = 0; i < r; ++i) a[i] = [t[i][0], t[i][1]];
        for (n = 1; n < r; ++n)
          for (i = 0; i < r - n; ++i)
            (a[i][0] = (1 - e) * a[i][0] + e * a[parseInt(i + 1, 10)][0]),
              (a[i][1] = (1 - e) * a[i][1] + e * a[parseInt(i + 1, 10)][1]);
        return [a[0][0], a[0][1]];
      }
      function A(t, e, i, n, r, a, o) {
        if ("transform" == r) {
          for (var s in ((o = {}), i[a][r]))
            o[s] =
              s in n[a][r]
                ? Math.round(
                    1e3 * ((n[a][r][s] - i[a][r][s]) * t + i[a][r][s])
                  ) / 1e3
                : i[a][r][s];
          return o;
        }
        return "string" == typeof i[a][r]
          ? (function (t, e, i) {
              var n,
                r,
                a,
                o,
                s = [];
              for (n = 0; n < 6; n++)
                (a = Math.min(15, parseInt(e.charAt(n), 16))),
                  (o = Math.min(15, parseInt(i.charAt(n), 16))),
                  (r =
                    (r = Math.floor((o - a) * t + a)) > 15
                      ? 15
                      : r < 0
                      ? 0
                      : r),
                  (s[n] = r.toString(16));
              return "#" + s.join("");
            })(t, i[a][r], n[a][r])
          : ((o = Math.round(1e3 * ((n[a][r] - i[a][r]) * t + i[a][r])) / 1e3),
            r in p || (o += e[a][r] || "px"),
            o);
      }
      function j(t, e, i, n, r) {
        return (i = l.exec(t))
          ? (r = parseFloat(i[2])) && e + ("+" == i[1] ? 1 : -1) * r
          : parseFloat(t);
      }
      function C(t, e) {
        var i,
          n,
          r,
          a = t ? (a = isFinite(t.length) ? t : [t]) : [],
          o = e.complete,
          l = e.duration,
          c = e.easing,
          u = e.bezier,
          d = [],
          f = [],
          p = [],
          v = [];
        for (
          u &&
            ((n = e.left),
            (r = e.top),
            delete e.right,
            delete e.bottom,
            delete e.left,
            delete e.top),
            i = a.length;
          i--;

        ) {
          if (((d[i] = {}), (f[i] = {}), (p[i] = {}), u)) {
            var y = g(a[i], "left"),
              w = g(a[i], "top"),
              b = [
                j(E(n) ? n(a[i]) : n || 0, parseFloat(y)),
                j(E(r) ? r(a[i]) : r || 0, parseFloat(w)),
              ];
            (v[i] = E(u) ? u(a[i], b) : u),
              v[i].push(b),
              v[i].unshift([parseInt(y, 10), parseInt(w, 10)]);
          }
          for (var L in e) {
            switch (L) {
              case "complete":
              case "duration":
              case "easing":
              case "bezier":
                continue;
            }
            var C,
              N = g(a[i], L),
              I = E(e[L]) ? e[L](a[i]) : e[L];
            "string" != typeof I || !s.test(I) || s.test(N)
              ? ((d[i][L] =
                  "transform" == L
                    ? x(N)
                    : "string" == typeof I && s.test(I)
                    ? T(N).slice(1)
                    : parseFloat(N)),
                (f[i][L] =
                  "transform" == L
                    ? x(I, d[i][L])
                    : "string" == typeof I && "#" == I.charAt(0)
                    ? T(I).slice(1)
                    : j(I, parseFloat(N))),
                "string" == typeof I && (C = I.match(h)) && (p[i][L] = C[1]))
              : delete e[L];
          }
        }
        return S.apply(a, [
          l,
          function (t, n, r) {
            for (i = a.length; i--; )
              for (var o in (u &&
                ((r = D(v[i], t)),
                (a[i].style.left = r[0] + "px"),
                (a[i].style.top = r[1] + "px")),
              e))
                (n = A(t, p, d, f, o, i)),
                  "transform" == o
                    ? (a[i].style[_] = k(n))
                    : "opacity" != o || m
                    ? (a[i].style[M(o)] = n)
                    : (a[i].style.filter = "alpha(opacity=" + 100 * n + ")");
          },
          o,
          c,
        ]);
      }
      return (
        v(function (t) {
          o = t > 1e12 != r() > 1e12;
        }),
        (C.tween = S),
        (C.getStyle = g),
        (C.bezier = D),
        (C.transform = _),
        (C.parseTransform = x),
        (C.formatTransform = k),
        (C.easings = {}),
        C
      );
    })();
    class dt {
      show(t) {
        t || (this._el.container.style.display = "block");
      }
      hide(t) {
        this._el.container.style.display = "none";
      }
      addTo(t) {
        t.appendChild(this._el.container), this.onAdd();
      }
      removeFrom(t) {
        t.removeChild(this._el.container), this.onRemove();
      }
      animatePosition(t, e) {
        var i = { duration: this.options.duration, easing: this.options.ease };
        for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n] + "px");
        this.animator && this.animator.stop(), (this.animator = ct(e, i));
      }
      onLoaded() {
        this.fire("loaded", this.data);
      }
      onAdd() {
        this.fire("added", this.data);
      }
      onRemove() {
        this.fire("removed", this.data);
      }
      setPosition(t, e) {
        for (var i in t)
          t.hasOwnProperty(i) &&
            (e
              ? (e.style[i] = t[i] + "px")
              : (this._el.container.style[i] = t[i] + "px"));
      }
      getPosition() {
        return M(this._el.container);
      }
    }
    class ft {
      constructor(t, e, i) {
        (this._el = { drag: t, move: t }),
          (this.mousedrag = {
            down: "mousedown",
            up: "mouseup",
            leave: "mouseleave",
            move: "mousemove",
          }),
          (this.touchdrag = {
            down: "touchstart",
            up: "touchend",
            leave: "mouseleave",
            move: "touchmove",
          }),
          i && (this._el.move = i),
          (this.options = {
            enable: { x: !0, y: !0 },
            constraint: { top: !1, bottom: !1, left: !1, right: !1 },
            momentum_multiplier: 2e3,
            duration: 1e3,
            ease: st,
          }),
          (this.animator = null),
          (this.dragevent = this.mousedrag),
          b && (this.dragevent = this.touchdrag),
          (this.data = {
            sliding: !1,
            direction: "none",
            pagex: { start: 0, end: 0 },
            pagey: { start: 0, end: 0 },
            pos: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
            new_pos: { x: 0, y: 0 },
            new_pos_parent: { x: 0, y: 0 },
            time: { start: 0, end: 0 },
            touch: !1,
          }),
          C(this.options, e);
      }
      enable(t) {
        (this.data.pos.start = 0),
          (this._el.move.style.left = this.data.pos.start.x + "px"),
          (this._el.move.style.top = this.data.pos.start.y + "px"),
          (this._el.move.style.position = "absolute");
      }
      disable() {
        _t.removeListener(
          this._el.drag,
          this.dragevent.down,
          this._onDragStart,
          this
        ),
          _t.removeListener(
            this._el.drag,
            this.dragevent.up,
            this._onDragEnd,
            this
          );
      }
      stopMomentum() {
        this.animator && this.animator.stop();
      }
      updateConstraint(t) {
        this.options.constraint = t;
      }
      _onDragStart(t) {
        b
          ? t.originalEvent
            ? ((this.data.pagex.start = t.originalEvent.touches[0].screenX),
              (this.data.pagey.start = t.originalEvent.touches[0].screenY))
            : ((this.data.pagex.start = t.targetTouches[0].screenX),
              (this.data.pagey.start = t.targetTouches[0].screenY))
          : ((this.data.pagex.start = t.pageX),
            (this.data.pagey.start = t.pageY)),
          this.options.enable.x &&
            (this._el.move.style.left =
              this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"),
          this.options.enable.y &&
            (this._el.move.style.top =
              this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"),
          (this.data.pos.start = M(this._el.drag)),
          (this.data.time.start = new Date().getTime()),
          this.fire("dragstart", this.data),
          _t.addListener(
            this._el.drag,
            this.dragevent.move,
            this._onDragMove,
            this
          ),
          _t.addListener(
            this._el.drag,
            this.dragevent.leave,
            this._onDragEnd,
            this
          );
      }
      _onDragEnd(t) {
        (this.data.sliding = !1),
          _t.removeListener(
            this._el.drag,
            this.dragevent.move,
            this._onDragMove,
            this
          ),
          _t.removeListener(
            this._el.drag,
            this.dragevent.leave,
            this._onDragEnd,
            this
          ),
          this.fire("dragend", this.data),
          this._momentum();
      }
      _onDragMove(t) {
        t.preventDefault(),
          (this.data.sliding = !0),
          b
            ? t.originalEvent
              ? ((this.data.pagex.end = t.originalEvent.touches[0].screenX),
                (this.data.pagey.end = t.originalEvent.touches[0].screenY))
              : ((this.data.pagex.end = t.targetTouches[0].screenX),
                (this.data.pagey.end = t.targetTouches[0].screenY))
            : ((this.data.pagex.end = t.pageX),
              (this.data.pagey.end = t.pageY)),
          (this.data.pos.end = M(this._el.drag)),
          (this.data.new_pos.x = -(
            this.data.pagex.start -
            this.data.pagex.end -
            this.data.pos.start.x
          )),
          (this.data.new_pos.y = -(
            this.data.pagey.start -
            this.data.pagey.end -
            this.data.pos.start.y
          )),
          this.options.enable.x &&
            (this._el.move.style.left = this.data.new_pos.x + "px"),
          this.options.enable.y &&
            (this._el.move.style.top = this.data.new_pos.y + "px"),
          this.fire("dragmove", this.data);
      }
      _momentum() {
        var t = { x: 0, y: 0, time: 0 },
          e = { x: 0, y: 0, time: 0 },
          i = !1;
        (t.time = 10 * (new Date().getTime() - this.data.time.start)),
          (e.time = 10 * (new Date().getTime() - this.data.time.start)),
          (e.x =
            this.options.momentum_multiplier *
            (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start))),
          (e.y =
            this.options.momentum_multiplier *
            (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start))),
          (t.x = Math.round(e.x / e.time)),
          (t.y = Math.round(e.y / e.time)),
          (this.data.new_pos.x = Math.min(this.data.pos.end.x + t.x)),
          (this.data.new_pos.y = Math.min(this.data.pos.end.y + t.y)),
          this.options.enable.x
            ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0)
            : (this.data.new_pos.x = this.data.pos.start.x),
          this.options.enable.y
            ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0)
            : (this.data.new_pos.y = this.data.pos.start.y),
          e.time < 3e3 && (i = !0),
          Math.abs(e.x) > 1e4 &&
            ((this.data.direction = "left"),
            e.x > 0 && (this.data.direction = "right")),
          Math.abs(e.y) > 1e4 &&
            ((this.data.direction = "up"),
            e.y > 0 && (this.data.direction = "down")),
          this._animateMomentum(),
          i && this.fire("swipe_" + this.data.direction, this.data);
      }
      _animateMomentum() {
        var t = { x: this.data.new_pos.x, y: this.data.new_pos.y },
          e = { duration: this.options.duration, easing: ot };
        this.options.enable.y &&
          ((this.options.constraint.top || this.options.constraint.bottom) &&
            (t.y > this.options.constraint.bottom
              ? (t.y = this.options.constraint.bottom)
              : t.y < this.options.constraint.top &&
                (t.y = this.options.constraint.top)),
          (e.top = Math.floor(t.y) + "px")),
          this.options.enable.x &&
            ((this.options.constraint.left || this.options.constraint.right) &&
              (t.x > this.options.constraint.left
                ? (t.x = this.options.constraint.left)
                : t.x < this.options.constraint.right &&
                  (t.x = this.options.constraint.right)),
            (e.left = Math.floor(t.x) + "px")),
          (this.animator = ct(this._el.move, e)),
          this.fire("momentum", this.data);
      }
    }
    H(ht);
    var pt,
      _t = {
        addListener: function (t, e, i, n) {
          var r = R(i),
            a = "_tl_" + e + r;
          if (!t[a]) {
            var o = function (e) {
              return i.call(n || t, e || _t._getEvent());
            };
            if (b && "dblclick" === e && this.addDoubleTapListener)
              this.addDoubleTapListener(t, o, r);
            else if ("addEventListener" in t)
              if ("mousewheel" === e)
                t.addEventListener("DOMMouseScroll", o, !1),
                  t.addEventListener(e, o, !1);
              else if ("mouseenter" === e || "mouseleave" === e) {
                var s = o,
                  l = "mouseenter" === e ? "mouseover" : "mouseout";
                (o = function (e) {
                  if (_t._checkMouse(t, e)) return s(e);
                }),
                  t.addEventListener(l, o, !1);
              } else t.addEventListener(e, o, !1);
            else "attachEvent" in t && t.attachEvent("on" + e, o);
            t[a] = o;
          }
        },
        removeListener: function (t, e, i) {
          var n = R(i),
            r = "_tl_" + e + n,
            a = t[r];
          a &&
            (b && "dblclick" === e && this.removeDoubleTapListener
              ? this.removeDoubleTapListener(t, n)
              : "removeEventListener" in t
              ? "mousewheel" === e
                ? (t.removeEventListener("DOMMouseScroll", a, !1),
                  t.removeEventListener(e, a, !1))
                : "mouseenter" === e || "mouseleave" === e
                ? t.removeEventListener(
                    "mouseenter" === e ? "mouseover" : "mouseout",
                    a,
                    !1
                  )
                : t.removeEventListener(e, a, !1)
              : "detachEvent" in t && t.detachEvent("on" + e, a),
            (t[r] = null));
        },
        _checkMouse: function (t, e) {
          var i = e.relatedTarget;
          if (!i) return !0;
          try {
            for (; i && i !== t; ) i = i.parentNode;
          } catch (t) {
            return !1;
          }
          return i !== t;
        },
        _getEvent: function () {
          var t = window.event;
          if (!t)
            for (
              var e = arguments.callee.caller;
              e && (!(t = e.arguments[0]) || window.Event !== t.constructor);

            )
              e = e.caller;
          return t;
        },
        stopPropagation: function (t) {
          t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
        },
        disableClickPropagation: function (t) {
          _t.addListener(t, ft.START, _t.stopPropagation),
            _t.addListener(t, "click", _t.stopPropagation),
            _t.addListener(t, "dblclick", _t.stopPropagation);
        },
        preventDefault: function (t) {
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        },
        stop: function (t) {
          _t.preventDefault(t), _t.stopPropagation(t);
        },
        getWheelDelta: function (t) {
          var e = 0;
          return (
            t.wheelDelta && (e = t.wheelDelta / 120),
            t.detail && (e = -t.detail / 3),
            e
          );
        },
      },
      mt = (function () {
        var t,
          e,
          i,
          n,
          r,
          a = [],
          o = a.slice,
          s = a.filter,
          l = window.document,
          h = {},
          c = {},
          u = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1,
          },
          d = /^\s*<(\w+|!)[^>]*>/,
          f = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          p =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          _ = /^(?:body|html)$/i,
          m = /([A-Z])/g,
          g = [
            "val",
            "css",
            "html",
            "text",
            "data",
            "width",
            "height",
            "offset",
          ],
          v = l.createElement("table"),
          y = l.createElement("tr"),
          w = {
            tr: l.createElement("tbody"),
            tbody: v,
            thead: v,
            tfoot: v,
            td: y,
            th: y,
            "*": l.createElement("div"),
          },
          b = /complete|loaded|interactive/,
          x = /^[\w-]*$/,
          k = {},
          T = k.toString,
          M = {},
          E = l.createElement("div"),
          L = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
          },
          S =
            Array.isArray ||
            function (t) {
              return t instanceof Array;
            };
        function D(t) {
          return null == t ? String(t) : k[T.call(t)] || "object";
        }
        function A(t) {
          return "function" == D(t);
        }
        function j(t) {
          return null != t && t == t.window;
        }
        function C(t) {
          return null != t && t.nodeType == t.DOCUMENT_NODE;
        }
        function N(t) {
          return "object" == D(t);
        }
        function I(t) {
          return N(t) && !j(t) && Object.getPrototypeOf(t) == Object.prototype;
        }
        function O(t) {
          return "number" == typeof t.length;
        }
        function z(t) {
          return t
            .replace(/::/g, "/")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .replace(/_/g, "-")
            .toLowerCase();
        }
        function R(t) {
          return t in c ? c[t] : (c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)"));
        }
        function P(t, e) {
          return "number" != typeof e || u[z(t)] ? e : e + "px";
        }
        function q(t) {
          return "children" in t
            ? o.call(t.children)
            : e.map(t.childNodes, function (t) {
                if (1 == t.nodeType) return t;
              });
        }
        function F(e, i, n) {
          for (t in i)
            n && (I(i[t]) || S(i[t]))
              ? (I(i[t]) && !I(e[t]) && (e[t] = {}),
                S(i[t]) && !S(e[t]) && (e[t] = []),
                F(e[t], i[t], n))
              : void 0 !== i[t] && (e[t] = i[t]);
        }
        function H(t, i) {
          return null == i ? e(t) : e(t).filter(i);
        }
        function $(t, e, i, n) {
          return A(e) ? e.call(t, i, n) : e;
        }
        function B(t, e, i) {
          null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
        }
        function W(t, e) {
          var i = t.className,
            n = i && void 0 !== i.baseVal;
          if (void 0 === e) return n ? i.baseVal : i;
          n ? (i.baseVal = e) : (t.className = e);
        }
        function U(t) {
          var i;
          try {
            return t
              ? "true" == t ||
                  ("false" != t &&
                    ("null" == t
                      ? null
                      : /^0/.test(t) || isNaN((i = Number(t)))
                      ? /^[\[\{]/.test(t)
                        ? e.parseJSON(t)
                        : t
                      : i))
              : t;
          } catch (e) {
            return t;
          }
        }
        function Z(t, e) {
          for (var i in (e(t), t.childNodes)) Z(t.childNodes[i], e);
        }
        return (
          (M.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var i =
              t.webkitMatchesSelector ||
              t.mozMatchesSelector ||
              t.oMatchesSelector ||
              t.matchesSelector;
            if (i) return i.call(t, e);
            var n,
              r = t.parentNode,
              a = !r;
            return (
              a && (r = E).appendChild(t),
              (n = ~M.qsa(r, e).indexOf(t)),
              a && E.removeChild(t),
              n
            );
          }),
          (n = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
              return e ? e.toUpperCase() : "";
            });
          }),
          (r = function (t) {
            return s.call(t, function (e, i) {
              return t.indexOf(e) == i;
            });
          }),
          (M.fragment = function (t, i, n) {
            var r, a, s;
            return (
              f.test(t) && (r = e(l.createElement(RegExp.$1))),
              r ||
                (t.replace && (t = t.replace(p, "<$1></$2>")),
                void 0 === i && (i = d.test(t) && RegExp.$1),
                i in w || (i = "*"),
                ((s = w[i]).innerHTML = "" + t),
                (r = e.each(o.call(s.childNodes), function () {
                  s.removeChild(this);
                }))),
              I(n) &&
                ((a = e(r)),
                e.each(n, function (t, e) {
                  g.indexOf(t) > -1 ? a[t](e) : a.attr(t, e);
                })),
              r
            );
          }),
          (M.Z = function (t, i) {
            return ((t = t || []).__proto__ = e.fn), (t.selector = i || ""), t;
          }),
          (M.isZ = function (t) {
            return t instanceof M.Z;
          }),
          (M.init = function (t, i) {
            var n, r;
            if (!t) return M.Z();
            if ("string" == typeof t)
              if ("<" == (t = t.trim())[0] && d.test(t))
                (n = M.fragment(t, RegExp.$1, i)), (t = null);
              else {
                if (void 0 !== i) return e(i).find(t);
                n = M.qsa(l, t);
              }
            else {
              if (A(t)) return e(l).ready(t);
              if (M.isZ(t)) return t;
              if (S(t))
                (r = t),
                  (n = s.call(r, function (t) {
                    return null != t;
                  }));
              else if (N(t)) (n = [t]), (t = null);
              else if (d.test(t))
                (n = M.fragment(t.trim(), RegExp.$1, i)), (t = null);
              else {
                if (void 0 !== i) return e(i).find(t);
                n = M.qsa(l, t);
              }
            }
            return M.Z(n, t);
          }),
          ((e = function (t, e) {
            return M.init(t, e);
          }).extend = function (t) {
            var e,
              i = o.call(arguments, 1);
            return (
              "boolean" == typeof t && ((e = t), (t = i.shift())),
              i.forEach(function (i) {
                F(t, i, e);
              }),
              t
            );
          }),
          (M.qsa = function (t, e) {
            var i,
              n = "#" == e[0],
              r = !n && "." == e[0],
              a = n || r ? e.slice(1) : e,
              s = x.test(a);
            return C(t) && s && n
              ? (i = t.getElementById(a))
                ? [i]
                : []
              : 1 !== t.nodeType && 9 !== t.nodeType
              ? []
              : o.call(
                  s && !n
                    ? r
                      ? t.getElementsByClassName(a)
                      : t.getElementsByTagName(e)
                    : t.querySelectorAll(e)
                );
          }),
          (e.contains = function (t, e) {
            return t !== e && t.contains(e);
          }),
          (e.type = D),
          (e.isFunction = A),
          (e.isWindow = j),
          (e.isArray = S),
          (e.isPlainObject = I),
          (e.isEmptyObject = function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          }),
          (e.inArray = function (t, e, i) {
            return a.indexOf.call(e, t, i);
          }),
          (e.camelCase = n),
          (e.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t);
          }),
          (e.uuid = 0),
          (e.support = {}),
          (e.expr = {}),
          (e.map = function (t, i) {
            var n,
              r,
              a,
              o,
              s = [];
            if (O(t))
              for (r = 0; r < t.length; r++)
                null != (n = i(t[r], r)) && s.push(n);
            else for (a in t) null != (n = i(t[a], a)) && s.push(n);
            return (o = s).length > 0 ? e.fn.concat.apply([], o) : o;
          }),
          (e.each = function (t, e) {
            var i, n;
            if (O(t)) {
              for (i = 0; i < t.length; i++)
                if (!1 === e.call(t[i], i, t[i])) return t;
            } else for (n in t) if (!1 === e.call(t[n], n, t[n])) return t;
            return t;
          }),
          (e.grep = function (t, e) {
            return s.call(t, e);
          }),
          window.JSON && (e.parseJSON = JSON.parse),
          e.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
            function (t, e) {
              k["[object " + e + "]"] = e.toLowerCase();
            }
          ),
          (e.fn = {
            forEach: a.forEach,
            reduce: a.reduce,
            push: a.push,
            sort: a.sort,
            indexOf: a.indexOf,
            concat: a.concat,
            map: function (t) {
              return e(
                e.map(this, function (e, i) {
                  return t.call(e, i, e);
                })
              );
            },
            slice: function () {
              return e(o.apply(this, arguments));
            },
            ready: function (t) {
              return (
                b.test(l.readyState) && l.body
                  ? t(e)
                  : l.addEventListener(
                      "DOMContentLoaded",
                      function () {
                        t(e);
                      },
                      !1
                    ),
                this
              );
            },
            get: function (t) {
              return void 0 === t
                ? o.call(this)
                : this[t >= 0 ? t : t + this.length];
            },
            toArray: function () {
              return this.get();
            },
            size: function () {
              return this.length;
            },
            remove: function () {
              return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this);
              });
            },
            each: function (t) {
              return (
                a.every.call(this, function (e, i) {
                  return !1 !== t.call(e, i, e);
                }),
                this
              );
            },
            filter: function (t) {
              return A(t)
                ? this.not(this.not(t))
                : e(
                    s.call(this, function (e) {
                      return M.matches(e, t);
                    })
                  );
            },
            add: function (t, i) {
              return e(r(this.concat(e(t, i))));
            },
            is: function (t) {
              return this.length > 0 && M.matches(this[0], t);
            },
            not: function (t) {
              var i = [];
              if (A(t) && void 0 !== t.call)
                this.each(function (e) {
                  t.call(this, e) || i.push(this);
                });
              else {
                var n =
                  "string" == typeof t
                    ? this.filter(t)
                    : O(t) && A(t.item)
                    ? o.call(t)
                    : e(t);
                this.forEach(function (t) {
                  n.indexOf(t) < 0 && i.push(t);
                });
              }
              return e(i);
            },
            has: function (t) {
              return this.filter(function () {
                return N(t) ? e.contains(this, t) : e(this).find(t).size();
              });
            },
            eq: function (t) {
              return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function () {
              var t = this[0];
              return t && !N(t) ? t : e(t);
            },
            last: function () {
              var t = this[this.length - 1];
              return t && !N(t) ? t : e(t);
            },
            find: function (t) {
              var i = this;
              return "object" == typeof t
                ? e(t).filter(function () {
                    var t = this;
                    return a.some.call(i, function (i) {
                      return e.contains(i, t);
                    });
                  })
                : 1 == this.length
                ? e(M.qsa(this[0], t))
                : this.map(function () {
                    return M.qsa(this, t);
                  });
            },
            closest: function (t, i) {
              var n = this[0],
                r = !1;
              for (
                "object" == typeof t && (r = e(t));
                n && !(r ? r.indexOf(n) >= 0 : M.matches(n, t));

              )
                n = n !== i && !C(n) && n.parentNode;
              return e(n);
            },
            parents: function (t) {
              for (var i = [], n = this; n.length > 0; )
                n = e.map(n, function (t) {
                  if ((t = t.parentNode) && !C(t) && i.indexOf(t) < 0)
                    return i.push(t), t;
                });
              return H(i, t);
            },
            parent: function (t) {
              return H(r(this.pluck("parentNode")), t);
            },
            children: function (t) {
              return H(
                this.map(function () {
                  return q(this);
                }),
                t
              );
            },
            contents: function () {
              return this.map(function () {
                return o.call(this.childNodes);
              });
            },
            siblings: function (t) {
              return H(
                this.map(function (t, e) {
                  return s.call(q(e.parentNode), function (t) {
                    return t !== e;
                  });
                }),
                t
              );
            },
            empty: function () {
              return this.each(function () {
                this.innerHTML = "";
              });
            },
            pluck: function (t) {
              return e.map(this, function (e) {
                return e[t];
              });
            },
            show: function () {
              return this.each(function () {
                var t, e, i;
                "none" == this.style.display && (this.style.display = ""),
                  "none" ==
                    getComputedStyle(this, "").getPropertyValue("display") &&
                    (this.style.display =
                      ((t = this.nodeName),
                      h[t] ||
                        ((e = l.createElement(t)),
                        l.body.appendChild(e),
                        (i = getComputedStyle(e, "").getPropertyValue(
                          "display"
                        )),
                        e.parentNode.removeChild(e),
                        "none" == i && (i = "block"),
                        (h[t] = i)),
                      h[t]));
              });
            },
            replaceWith: function (t) {
              return this.before(t).remove();
            },
            wrap: function (t) {
              var i = A(t);
              if (this[0] && !i)
                var n = e(t).get(0),
                  r = n.parentNode || this.length > 1;
              return this.each(function (a) {
                e(this).wrapAll(i ? t.call(this, a) : r ? n.cloneNode(!0) : n);
              });
            },
            wrapAll: function (t) {
              if (this[0]) {
                var i;
                for (e(this[0]).before((t = e(t))); (i = t.children()).length; )
                  t = i.first();
                e(t).append(this);
              }
              return this;
            },
            wrapInner: function (t) {
              var i = A(t);
              return this.each(function (n) {
                var r = e(this),
                  a = r.contents(),
                  o = i ? t.call(this, n) : t;
                a.length ? a.wrapAll(o) : r.append(o);
              });
            },
            unwrap: function () {
              return (
                this.parent().each(function () {
                  e(this).replaceWith(e(this).children());
                }),
                this
              );
            },
            clone: function () {
              return this.map(function () {
                return this.cloneNode(!0);
              });
            },
            hide: function () {
              return this.css("display", "none");
            },
            toggle: function (t) {
              return this.each(function () {
                var i = e(this);
                (void 0 === t ? "none" == i.css("display") : t)
                  ? i.show()
                  : i.hide();
              });
            },
            prev: function (t) {
              return e(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function (t) {
              return e(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function (t) {
              return 0 === arguments.length
                ? this.length > 0
                  ? this[0].innerHTML
                  : null
                : this.each(function (i) {
                    var n = this.innerHTML;
                    e(this).empty().append($(this, t, i, n));
                  });
            },
            text: function (t) {
              return 0 === arguments.length
                ? this.length > 0
                  ? this[0].textContent
                  : null
                : this.each(function () {
                    this.textContent = void 0 === t ? "" : "" + t;
                  });
            },
            attr: function (e, i) {
              var n;
              return "string" == typeof e && void 0 === i
                ? 0 == this.length || 1 !== this[0].nodeType
                  ? void 0
                  : "value" == e && "INPUT" == this[0].nodeName
                  ? this.val()
                  : !(n = this[0].getAttribute(e)) && e in this[0]
                  ? this[0][e]
                  : n
                : this.each(function (n) {
                    if (1 === this.nodeType)
                      if (N(e)) for (t in e) B(this, t, e[t]);
                      else B(this, e, $(this, i, n, this.getAttribute(e)));
                  });
            },
            removeAttr: function (t) {
              return this.each(function () {
                1 === this.nodeType && B(this, t);
              });
            },
            prop: function (t, e) {
              return (
                (t = L[t] || t),
                void 0 === e
                  ? this[0] && this[0][t]
                  : this.each(function (i) {
                      this[t] = $(this, e, i, this[t]);
                    })
              );
            },
            data: function (t, e) {
              var i = this.attr("data-" + t.replace(m, "-$1").toLowerCase(), e);
              return null !== i ? U(i) : void 0;
            },
            val: function (t) {
              return 0 === arguments.length
                ? this[0] &&
                    (this[0].multiple
                      ? e(this[0])
                          .find("option")
                          .filter(function () {
                            return this.selected;
                          })
                          .pluck("value")
                      : this[0].value)
                : this.each(function (e) {
                    this.value = $(this, t, e, this.value);
                  });
            },
            offset: function (t) {
              if (t)
                return this.each(function (i) {
                  var n = e(this),
                    r = $(this, t, i, n.offset()),
                    a = n.offsetParent().offset(),
                    o = { top: r.top - a.top, left: r.left - a.left };
                  "static" == n.css("position") && (o.position = "relative"),
                    n.css(o);
                });
              if (0 == this.length) return null;
              var i = this[0].getBoundingClientRect();
              return {
                left: i.left + window.pageXOffset,
                top: i.top + window.pageYOffset,
                width: Math.round(i.width),
                height: Math.round(i.height),
              };
            },
            css: function (i, r) {
              if (arguments.length < 2) {
                var a = this[0],
                  o = getComputedStyle(a, "");
                if (!a) return;
                if ("string" == typeof i)
                  return a.style[n(i)] || o.getPropertyValue(i);
                if (S(i)) {
                  var s = {};
                  return (
                    e.each(S(i) ? i : [i], function (t, e) {
                      s[e] = a.style[n(e)] || o.getPropertyValue(e);
                    }),
                    s
                  );
                }
              }
              var l = "";
              if ("string" == D(i))
                r || 0 === r
                  ? (l = z(i) + ":" + P(i, r))
                  : this.each(function () {
                      this.style.removeProperty(z(i));
                    });
              else
                for (t in i)
                  i[t] || 0 === i[t]
                    ? (l += z(t) + ":" + P(t, i[t]) + ";")
                    : this.each(function () {
                        this.style.removeProperty(z(t));
                      });
              return this.each(function () {
                this.style.cssText += ";" + l;
              });
            },
            index: function (t) {
              return t
                ? this.indexOf(e(t)[0])
                : this.parent().children().indexOf(this[0]);
            },
            hasClass: function (t) {
              return (
                !!t &&
                a.some.call(
                  this,
                  function (t) {
                    return this.test(W(t));
                  },
                  R(t)
                )
              );
            },
            addClass: function (t) {
              return t
                ? this.each(function (n) {
                    i = [];
                    var r = W(this);
                    $(this, t, n, r)
                      .split(/\s+/g)
                      .forEach(function (t) {
                        e(this).hasClass(t) || i.push(t);
                      }, this),
                      i.length && W(this, r + (r ? " " : "") + i.join(" "));
                  })
                : this;
            },
            removeClass: function (t) {
              return this.each(function (e) {
                if (void 0 === t) return W(this, "");
                (i = W(this)),
                  $(this, t, e, i)
                    .split(/\s+/g)
                    .forEach(function (t) {
                      i = i.replace(R(t), " ");
                    }),
                  W(this, i.trim());
              });
            },
            toggleClass: function (t, i) {
              return t
                ? this.each(function (n) {
                    var r = e(this);
                    $(this, t, n, W(this))
                      .split(/\s+/g)
                      .forEach(function (t) {
                        (void 0 === i ? !r.hasClass(t) : i)
                          ? r.addClass(t)
                          : r.removeClass(t);
                      });
                  })
                : this;
            },
            scrollTop: function (t) {
              if (this.length) {
                var e = "scrollTop" in this[0];
                return void 0 === t
                  ? e
                    ? this[0].scrollTop
                    : this[0].pageYOffset
                  : this.each(
                      e
                        ? function () {
                            this.scrollTop = t;
                          }
                        : function () {
                            this.scrollTo(this.scrollX, t);
                          }
                    );
              }
            },
            scrollLeft: function (t) {
              if (this.length) {
                var e = "scrollLeft" in this[0];
                return void 0 === t
                  ? e
                    ? this[0].scrollLeft
                    : this[0].pageXOffset
                  : this.each(
                      e
                        ? function () {
                            this.scrollLeft = t;
                          }
                        : function () {
                            this.scrollTo(t, this.scrollY);
                          }
                    );
              }
            },
            position: function () {
              if (this.length) {
                var t = this[0],
                  i = this.offsetParent(),
                  n = this.offset(),
                  r = _.test(i[0].nodeName) ? { top: 0, left: 0 } : i.offset();
                return (
                  (n.top -= parseFloat(e(t).css("margin-top")) || 0),
                  (n.left -= parseFloat(e(t).css("margin-left")) || 0),
                  (r.top += parseFloat(e(i[0]).css("border-top-width")) || 0),
                  (r.left += parseFloat(e(i[0]).css("border-left-width")) || 0),
                  { top: n.top - r.top, left: n.left - r.left }
                );
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var t = this.offsetParent || l.body;
                  t && !_.test(t.nodeName) && "static" == e(t).css("position");

                )
                  t = t.offsetParent;
                return t;
              });
            },
          }),
          (e.fn.detach = e.fn.remove),
          ["width", "height"].forEach(function (t) {
            var i = t.replace(/./, function (t) {
              return t[0].toUpperCase();
            });
            e.fn[t] = function (n) {
              var r,
                a = this[0];
              return void 0 === n
                ? j(a)
                  ? a["inner" + i]
                  : C(a)
                  ? a.documentElement["scroll" + i]
                  : (r = this.offset()) && r[t]
                : this.each(function (i) {
                    (a = e(this)).css(t, $(this, n, i, a[t]()));
                  });
            };
          }),
          ["after", "prepend", "before", "append"].forEach(function (t, i) {
            var n = i % 2;
            (e.fn[t] = function () {
              var t,
                r,
                a = e.map(arguments, function (e) {
                  return "object" == (t = D(e)) || "array" == t || null == e
                    ? e
                    : M.fragment(e);
                }),
                o = this.length > 1;
              return a.length < 1
                ? this
                : this.each(function (t, s) {
                    (r = n ? s : s.parentNode),
                      (s =
                        0 == i
                          ? s.nextSibling
                          : 1 == i
                          ? s.firstChild
                          : 2 == i
                          ? s
                          : null),
                      a.forEach(function (t) {
                        if (o) t = t.cloneNode(!0);
                        else if (!r) return e(t).remove();
                        Z(r.insertBefore(t, s), function (t) {
                          null == t.nodeName ||
                            "SCRIPT" !== t.nodeName.toUpperCase() ||
                            (t.type && "text/javascript" !== t.type) ||
                            t.src ||
                            window.eval.call(window, t.innerHTML);
                        });
                      });
                  });
            }),
              (e.fn[n ? t + "To" : "insert" + (i ? "Before" : "After")] =
                function (i) {
                  return e(i)[t](this), this;
                });
          }),
          (M.Z.prototype = e.fn),
          (M.uniq = r),
          (M.deserializeValue = U),
          (e.zepto = M),
          e
        );
      })();
    (window.Zepto = mt),
      void 0 === window.$ && (window.$ = mt),
      (function (t) {
        t.zepto.qsa;
        var e = 1,
          i = Array.prototype.slice,
          n = t.isFunction,
          r = function (t) {
            return "string" == typeof t;
          },
          a = {},
          o = {},
          s = "onfocusin" in window,
          l = { focus: "focusin", blur: "focusout" },
          h = { mouseenter: "mouseover", mouseleave: "mouseout" };
        function c(t) {
          return t._zid || (t._zid = e++);
        }
        function u(t, e, i, n) {
          if ((e = d(e)).ns)
            var r =
              ((o = e.ns),
              new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
          var o;
          return (a[c(t)] || []).filter(function (t) {
            return (
              t &&
              (!e.e || t.e == e.e) &&
              (!e.ns || r.test(t.ns)) &&
              (!i || c(t.fn) === c(i)) &&
              (!n || t.sel == n)
            );
          });
        }
        function d(t) {
          var e = ("" + t).split(".");
          return { e: e[0], ns: e.slice(1).sort().join(" ") };
        }
        function f(t, e) {
          return (t.del && !s && t.e in l) || !!e;
        }
        function p(t) {
          return h[t] || (s && l[t]) || t;
        }
        function _(e, i, n, r, o, s, l) {
          var u = c(e),
            _ = a[u] || (a[u] = []);
          i.split(/\s/).forEach(function (i) {
            if ("ready" == i) return t(document).ready(n);
            var a = d(i);
            (a.fn = n),
              (a.sel = o),
              a.e in h &&
                (n = function (e) {
                  var i = e.relatedTarget;
                  if (!i || (i !== this && !t.contains(this, i)))
                    return a.fn.apply(this, arguments);
                }),
              (a.del = s);
            var c = s || n;
            (a.proxy = function (t) {
              if (!(t = b(t)).isImmediatePropagationStopped()) {
                t.data = r;
                var i = c.apply(e, null == t._args ? [t] : [t].concat(t._args));
                return !1 === i && (t.preventDefault(), t.stopPropagation()), i;
              }
            }),
              (a.i = _.length),
              _.push(a),
              "addEventListener" in e &&
                e.addEventListener(p(a.e), a.proxy, f(a, l));
          });
        }
        function m(t, e, i, n, r) {
          var o = c(t);
          (e || "").split(/\s/).forEach(function (e) {
            u(t, e, i, n).forEach(function (e) {
              delete a[o][e.i],
                "removeEventListener" in t &&
                  t.removeEventListener(p(e.e), e.proxy, f(e, r));
            });
          });
        }
        (o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents"),
          (t.event = { add: _, remove: m }),
          (t.proxy = function (e, i) {
            if (n(e)) {
              var a = function () {
                return e.apply(i, arguments);
              };
              return (a._zid = c(e)), a;
            }
            if (r(i)) return t.proxy(e[i], e);
            throw new TypeError("expected function");
          }),
          (t.fn.bind = function (t, e, i) {
            return this.on(t, e, i);
          }),
          (t.fn.unbind = function (t, e) {
            return this.off(t, e);
          }),
          (t.fn.one = function (t, e, i, n) {
            return this.on(t, e, i, n, 1);
          });
        var g = function () {
            return !0;
          },
          v = function () {
            return !1;
          },
          y = /^([A-Z]|returnValue$|layer[XY]$)/,
          w = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped",
          };
        function b(e, i) {
          return (
            (!i && e.isDefaultPrevented) ||
              (i || (i = e),
              t.each(w, function (t, n) {
                var r = i[t];
                (e[t] = function () {
                  return (this[n] = g), r && r.apply(i, arguments);
                }),
                  (e[n] = v);
              }),
              (void 0 !== i.defaultPrevented
                ? i.defaultPrevented
                : "returnValue" in i
                ? !1 === i.returnValue
                : i.getPreventDefault && i.getPreventDefault()) &&
                (e.isDefaultPrevented = g)),
            e
          );
        }
        function x(t) {
          var e,
            i = { originalEvent: t };
          for (e in t) y.test(e) || void 0 === t[e] || (i[e] = t[e]);
          return b(i, t);
        }
        (t.fn.delegate = function (t, e, i) {
          return this.on(e, t, i);
        }),
          (t.fn.undelegate = function (t, e, i) {
            return this.off(e, t, i);
          }),
          (t.fn.live = function (e, i) {
            return t(document.body).delegate(this.selector, e, i), this;
          }),
          (t.fn.die = function (e, i) {
            return t(document.body).undelegate(this.selector, e, i), this;
          }),
          (t.fn.on = function (e, a, o, s, l) {
            var h,
              c,
              u = this;
            return e && !r(e)
              ? (t.each(e, function (t, e) {
                  u.on(t, a, o, e, l);
                }),
                u)
              : (r(a) || n(s) || !1 === s || ((s = o), (o = a), (a = void 0)),
                (n(o) || !1 === o) && ((s = o), (o = void 0)),
                !1 === s && (s = v),
                u.each(function (n, r) {
                  l &&
                    (h = function (t) {
                      return m(r, t.type, s), s.apply(this, arguments);
                    }),
                    a &&
                      (c = function (e) {
                        var n,
                          o = t(e.target).closest(a, r).get(0);
                        if (o && o !== r)
                          return (
                            (n = t.extend(x(e), {
                              currentTarget: o,
                              liveFired: r,
                            })),
                            (h || s).apply(o, [n].concat(i.call(arguments, 1)))
                          );
                      }),
                    _(r, e, s, o, a, c || h);
                }));
          }),
          (t.fn.off = function (e, i, a) {
            var o = this;
            return e && !r(e)
              ? (t.each(e, function (t, e) {
                  o.off(t, i, e);
                }),
                o)
              : (r(i) || n(a) || !1 === a || ((a = i), (i = void 0)),
                !1 === a && (a = v),
                o.each(function () {
                  m(this, e, a, i);
                }));
          }),
          (t.fn.trigger = function (e, i) {
            return (
              ((e = r(e) || t.isPlainObject(e) ? t.Event(e) : b(e))._args = i),
              this.each(function () {
                "dispatchEvent" in this
                  ? this.dispatchEvent(e)
                  : t(this).triggerHandler(e, i);
              })
            );
          }),
          (t.fn.triggerHandler = function (e, i) {
            var n, a;
            return (
              this.each(function (o, s) {
                ((n = x(r(e) ? t.Event(e) : e))._args = i),
                  (n.target = s),
                  t.each(u(s, e.type || e), function (t, e) {
                    if (((a = e.proxy(n)), n.isImmediatePropagationStopped()))
                      return !1;
                  });
              }),
              a
            );
          }),
          "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
            .split(" ")
            .forEach(function (e) {
              t.fn[e] = function (t) {
                return t ? this.bind(e, t) : this.trigger(e);
              };
            }),
          ["focus", "blur"].forEach(function (e) {
            t.fn[e] = function (t) {
              return (
                t
                  ? this.bind(e, t)
                  : this.each(function () {
                      try {
                        this[e]();
                      } catch (t) {}
                    }),
                this
              );
            };
          }),
          (t.Event = function (t, e) {
            r(t) || (t = (e = t).type);
            var i = document.createEvent(o[t] || "Events"),
              n = !0;
            if (e)
              for (var a in e) "bubbles" == a ? (n = !!e[a]) : (i[a] = e[a]);
            return i.initEvent(t, n, !0), b(i);
          });
      })(mt),
      (function (t) {
        var e,
          i,
          n = 0,
          r = window.document,
          a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          o = /^(?:text|application)\/javascript/i,
          s = /^(?:text|application)\/xml/i,
          l = /^\s*$/;
        function h(e, i, n, a) {
          if (e.global)
            return (function (e, i, n) {
              var r = t.Event(i);
              return t(e).trigger(r, n), !r.isDefaultPrevented();
            })(i || r, n, a);
        }
        function c(t, e) {
          var i = e.context;
          if (
            !1 === e.beforeSend.call(i, t, e) ||
            !1 === h(e, i, "ajaxBeforeSend", [t, e])
          )
            return !1;
          h(e, i, "ajaxSend", [t, e]);
        }
        function u(t, e, i, n) {
          var r = i.context;
          i.success.call(r, t, "success", e),
            n && n.resolveWith(r, [t, "success", e]),
            h(i, r, "ajaxSuccess", [e, i, t]),
            f("success", e, i);
        }
        function d(t, e, i, n, r) {
          var a = n.context;
          n.error.call(a, i, e, t),
            r && r.rejectWith(a, [i, e, t]),
            h(n, a, "ajaxError", [i, n, t || e]),
            f(e, i, n);
        }
        function f(e, i, n) {
          var r = n.context;
          n.complete.call(r, i, e),
            h(n, r, "ajaxComplete", [i, n]),
            (function (e) {
              e.global && !--t.active && h(e, null, "ajaxStop");
            })(n);
        }
        function p() {}
        function _(t, e) {
          return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function m(e, i, n, r) {
          var a = !t.isFunction(i);
          return {
            url: e,
            data: a ? i : void 0,
            success: a ? (t.isFunction(n) ? n : void 0) : i,
            dataType: (a && r) || n,
          };
        }
        (t.active = 0),
          (t.ajaxJSONP = function (e, i) {
            if (!("type" in e)) return t.ajax(e);
            var a,
              o,
              s = e.jsonpCallback,
              l = (t.isFunction(s) ? s() : s) || "jsonp" + ++n,
              h = r.createElement("script"),
              f = window[l],
              p = function (e) {
                t(h).triggerHandler("error", e || "abort");
              },
              _ = { abort: p };
            return (
              i && i.promise(_),
              t(h).on("load error", function (n, r) {
                clearTimeout(o),
                  t(h).off().remove(),
                  "error" != n.type && a
                    ? u(a[0], _, e, i)
                    : d(null, r || "error", _, e, i),
                  (window[l] = f),
                  a && t.isFunction(f) && f(a[0]),
                  (f = a = void 0);
              }),
              !1 === c(_, e)
                ? (p("abort"), _)
                : ((window[l] = function () {
                    a = arguments;
                  }),
                  (h.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l)),
                  r.head.appendChild(h),
                  e.timeout > 0 &&
                    (o = setTimeout(function () {
                      p("timeout");
                    }, e.timeout)),
                  _)
            );
          }),
          (t.ajaxSettings = {
            type: "GET",
            beforeSend: p,
            success: p,
            error: p,
            complete: p,
            context: null,
            global: !0,
            xhr: function () {
              return new window.XMLHttpRequest();
            },
            accepts: {
              script:
                "text/javascript, application/javascript, application/x-javascript",
              json: "application/json",
              xml: "application/xml, text/xml",
              html: "text/html",
              text: "text/plain",
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
          }),
          (t.ajax = function (n) {
            var r = t.extend({}, n || {}),
              a = t.Deferred && t.Deferred();
            for (e in t.ajaxSettings)
              void 0 === r[e] && (r[e] = t.ajaxSettings[e]);
            !(function (e) {
              e.global && 0 == t.active++ && h(e, null, "ajaxStart");
            })(r),
              r.crossDomain ||
                (r.crossDomain =
                  /^([\w-]+:)?\/\/([^\/]+)/.test(r.url) &&
                  RegExp.$2 != window.location.host),
              r.url || (r.url = window.location.toString()),
              (function (e) {
                e.processData &&
                  e.data &&
                  "string" != t.type(e.data) &&
                  (e.data = t.param(e.data, e.traditional)),
                  !e.data ||
                    (e.type && "GET" != e.type.toUpperCase()) ||
                    ((e.url = _(e.url, e.data)), (e.data = void 0));
              })(r),
              !1 === r.cache && (r.url = _(r.url, "_=" + Date.now()));
            var f = r.dataType,
              m = /\?.+=\?/.test(r.url);
            if ("jsonp" == f || m)
              return (
                m ||
                  (r.url = _(
                    r.url,
                    r.jsonp
                      ? r.jsonp + "=?"
                      : !1 === r.jsonp
                      ? ""
                      : "callback=?"
                  )),
                t.ajaxJSONP(r, a)
              );
            var g,
              v = r.accepts[f],
              y = {},
              w = function (t, e) {
                y[t.toLowerCase()] = [t, e];
              },
              b = /^([\w-]+:)\/\//.test(r.url)
                ? RegExp.$1
                : window.location.protocol,
              x = r.xhr(),
              k = x.setRequestHeader;
            if (
              (a && a.promise(x),
              r.crossDomain || w("X-Requested-With", "XMLHttpRequest"),
              w("Accept", v || "*/*"),
              (v = r.mimeType || v) &&
                (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]),
                x.overrideMimeType && x.overrideMimeType(v)),
              (r.contentType ||
                (!1 !== r.contentType &&
                  r.data &&
                  "GET" != r.type.toUpperCase())) &&
                w(
                  "Content-Type",
                  r.contentType || "application/x-www-form-urlencoded"
                ),
              r.headers)
            )
              for (i in r.headers) w(i, r.headers[i]);
            if (
              ((x.setRequestHeader = w),
              (x.onreadystatechange = function () {
                if (4 == x.readyState) {
                  (x.onreadystatechange = p), clearTimeout(g);
                  var e,
                    i = !1;
                  if (
                    (x.status >= 200 && x.status < 300) ||
                    304 == x.status ||
                    (0 == x.status && "file:" == b)
                  ) {
                    (f =
                      f ||
                      (function (t) {
                        return (
                          t && (t = t.split(";", 2)[0]),
                          (t &&
                            ("text/html" == t
                              ? "html"
                              : "application/json" == t
                              ? "json"
                              : o.test(t)
                              ? "script"
                              : s.test(t) && "xml")) ||
                            "text"
                        );
                      })(r.mimeType || x.getResponseHeader("content-type"))),
                      (e = x.responseText);
                    try {
                      "script" == f
                        ? (0, eval)(e)
                        : "xml" == f
                        ? (e = x.responseXML)
                        : "json" == f &&
                          (e = l.test(e) ? null : t.parseJSON(e));
                    } catch (t) {
                      i = t;
                    }
                    i ? d(i, "parsererror", x, r, a) : u(e, x, r, a);
                  } else
                    d(
                      x.statusText || null,
                      x.status ? "error" : "abort",
                      x,
                      r,
                      a
                    );
                }
              }),
              !1 === c(x, r))
            )
              return x.abort(), d(null, "abort", x, r, a), x;
            if (r.xhrFields) for (i in r.xhrFields) x[i] = r.xhrFields[i];
            var T = !("async" in r) || r.async;
            for (i in (x.open(r.type, r.url, T, r.username, r.password), y))
              k.apply(x, y[i]);
            return (
              r.timeout > 0 &&
                (g = setTimeout(function () {
                  (x.onreadystatechange = p),
                    x.abort(),
                    d(null, "timeout", x, r, a);
                }, r.timeout)),
              x.send(r.data ? r.data : null),
              x
            );
          }),
          (t.get = function (e, i, n, r) {
            return t.ajax(m.apply(null, arguments));
          }),
          (t.post = function (e, i, n, r) {
            var a = m.apply(null, arguments);
            return (a.type = "POST"), t.ajax(a);
          }),
          (t.getJSON = function (e, i, n) {
            var r = m.apply(null, arguments);
            return (r.dataType = "json"), t.ajax(r);
          }),
          (t.fetchJSON = function (t) {
            var e = new XMLHttpRequest();
            return new Promise(function (i, n) {
              (e.onreadystatechange = function () {
                try {
                  if (4 !== e.readyState) return;
                  if (e.status >= 200 && e.status < 300) {
                    var r = JSON.parse(e.responseText);
                    i(r);
                  } else n({ status: e.status, statusText: e.statusText });
                } catch (e) {
                  n({
                    status: 400,
                    statusText: `Error fetching JSON from ${t}: ${e}`,
                  });
                }
              }),
                e.open("GET", t, !0),
                e.send();
            });
          }),
          (t.fn.load = function (e, i, n) {
            if (!this.length) return this;
            var r,
              o = this,
              s = e.split(/\s/),
              l = m(e, i, n),
              h = l.success;
            return (
              s.length > 1 && ((l.url = s[0]), (r = s[1])),
              (l.success = function (e) {
                o.html(r ? t("<div>").html(e.replace(a, "")).find(r) : e),
                  h && h.apply(o, arguments);
              }),
              t.ajax(l),
              this
            );
          });
        var g = encodeURIComponent;
        t.param = function (e, i) {
          var n = [];
          return (
            (n.add = function (t, e) {
              this.push(g(t) + "=" + g(e));
            }),
            (function e(i, n, r, a) {
              var o,
                s = t.isArray(n),
                l = t.isPlainObject(n);
              t.each(n, function (n, h) {
                (o = t.type(h)),
                  a &&
                    (n = r
                      ? a
                      : a +
                        "[" +
                        (l || "object" == o || "array" == o ? n : "") +
                        "]"),
                  !a && s
                    ? i.add(h.name, h.value)
                    : "array" == o || (!r && "object" == o)
                    ? e(i, h, r, n)
                    : i.add(n, h);
              });
            })(n, e, i),
            n.join("&").replace(/%20/g, "+")
          );
        };
      })(mt),
      ((pt = mt).fn.serializeArray = function () {
        var t,
          e = [];
        return (
          pt([].slice.call(this.get(0).elements)).each(function () {
            var i = (t = pt(this)).attr("type");
            "fieldset" != this.nodeName.toLowerCase() &&
              !this.disabled &&
              "submit" != i &&
              "reset" != i &&
              "button" != i &&
              (("radio" != i && "checkbox" != i) || this.checked) &&
              e.push({ name: t.attr("name"), value: t.val() });
          }),
          e
        );
      }),
      (pt.fn.serialize = function () {
        var t = [];
        return (
          this.serializeArray().forEach(function (e) {
            t.push(
              encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)
            );
          }),
          t.join("&")
        );
      }),
      (pt.fn.submit = function (t) {
        if (t) this.bind("submit", t);
        else if (this.length) {
          var e = pt.Event("submit");
          this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
      }),
      (function (t) {
        "__proto__" in {} ||
          t.extend(t.zepto, {
            Z: function (e, i) {
              return (
                (e = e || []),
                t.extend(e, t.fn),
                (e.selector = i || ""),
                (e.__Z = !0),
                e
              );
            },
            isZ: function (e) {
              return "array" === t.type(e) && "__Z" in e;
            },
          });
        try {
          getComputedStyle(void 0);
        } catch (t) {
          var e = getComputedStyle;
          window.getComputedStyle = function (t, i) {
            try {
              return e(t, i);
            } catch (t) {
              return null;
            }
          };
        }
      })(mt);
    const gt = mt.getJSON,
      vt = mt.ajax,
      yt = mt.fetchJSON,
      wt = [
        ["millisecond", 1, function (t) {}],
        [
          "second",
          1e3,
          function (t) {
            t.setMilliseconds(0);
          },
        ],
        [
          "minute",
          6e4,
          function (t) {
            t.setSeconds(0);
          },
        ],
        [
          "hour",
          36e5,
          function (t) {
            t.setMinutes(0);
          },
        ],
        [
          "day",
          864e5,
          function (t) {
            t.setHours(0);
          },
        ],
        [
          "month",
          2592e6,
          function (t) {
            t.setDate(1);
          },
        ],
        [
          "year",
          31536e6,
          function (t) {
            t.setMonth(0);
          },
        ],
        [
          "decade",
          31536e7,
          function (t) {
            var e = t.getFullYear();
            t.setFullYear(e - (e % 10));
          },
        ],
        [
          "century",
          31536e8,
          function (t) {
            var e = t.getFullYear();
            t.setFullYear(e - (e % 100));
          },
        ],
        [
          "millennium",
          31536e9,
          function (t) {
            var e = t.getFullYear();
            t.setFullYear(e - (e % 1e3));
          },
        ],
      ],
      bt = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
      xt = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
      kt =
        /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    const Tt = {
        base: {
          millisecond: "time_short",
          second: "time",
          minute: "time_no_seconds_small_date",
          hour: "time_no_seconds_small_date",
          day: "full",
          month: "month",
          year: "year",
          decade: "year",
          century: "year",
          millennium: "year",
          age: "fallback",
          epoch: "fallback",
          era: "fallback",
          eon: "fallback",
          eon2: "fallback",
        },
        short: {
          millisecond: "time_short",
          second: "time_short",
          minute: "time_no_seconds_short",
          hour: "time_no_minutes_short",
          day: "full_short",
          month: "month_short",
          year: "year",
          decade: "year",
          century: "year",
          millennium: "year",
          age: "fallback",
          epoch: "fallback",
          era: "fallback",
          eon: "fallback",
          eon2: "fallback",
        },
      },
      Mt = lt.extend({
        initialize: function (t, e, i) {
          "number" == typeof t
            ? (this.data = { format: "yyyy mmmm", date_obj: new Date(t) })
            : Date == t.constructor
            ? (this.data = { format: "yyyy mmmm", date_obj: t })
            : ((this.data = JSON.parse(JSON.stringify(t))),
              this._createDateObj()),
            this._setFormat(e, i);
        },
        setDateFormat: function (t) {
          this.data.format = t;
        },
        getDisplayDate: function (t, e) {
          if (this.data.display_date) return this.data.display_date;
          t || (t = jt.fallback),
            t.constructor != jt &&
              (O("First argument to getDisplayDate must be type Language"),
              (t = jt.fallback));
          var i = e || this.data.format;
          return t.formatDate(this.data.date_obj, i);
        },
        getMillisecond: function () {
          return this.getTime();
        },
        getTime: function () {
          return this.data.date_obj.getTime();
        },
        isBefore: function (t) {
          if (!this.data.date_obj.constructor == t.data.date_obj.constructor)
            throw new D("date_compare_err");
          return "isBefore" in this.data.date_obj
            ? this.data.date_obj.isBefore(t.data.date_obj)
            : this.data.date_obj < t.data.date_obj;
        },
        isAfter: function (t) {
          if (!this.data.date_obj.constructor == t.data.date_obj.constructor)
            throw new D("date_compare_err");
          return "isAfter" in this.data.date_obj
            ? this.data.date_obj.isAfter(t.data.date_obj)
            : this.data.date_obj > t.data.date_obj;
        },
        floor: function (t) {
          for (
            var e = new Date(this.data.date_obj.getTime()), i = 0;
            i < wt.length;
            i++
          )
            if ((wt[i][2](e), wt[i][0] == t)) return new Mt(e);
          throw new D("invalid_scale_err", t);
        },
        _getDateData: function () {
          var t = {
            year: 0,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          };
          for (var e in (C(t, this.data), bt)) {
            if (!F(t[bt[e]]).match(/^-?\d*$/))
              throw new D("invalid_date_err", bt[e] + " = '" + t[bt[e]] + "'");
            var i = parseInt(t[bt[e]]);
            isNaN(i) && (i = 4 == e || 5 == e ? 1 : 0), (t[bt[e]] = i);
          }
          return t.month > 0 && t.month <= 12 && (t.month = t.month - 1), t;
        },
        _createDateObj: function () {
          var t = this._getDateData();
          (this.data.date_obj = new Date(
            t.year,
            t.month,
            t.day,
            t.hour,
            t.minute,
            t.second,
            t.millisecond
          )),
            this.data.date_obj.getFullYear() != t.year &&
              this.data.date_obj.setFullYear(t.year);
        },
        findBestFormat: function (t) {
          for (var e = bt, i = 0; i < e.length; i++)
            if (this.data[e[i]])
              return t ? t in Tt || (t = "short") : (t = "base"), Tt[t][e[i]];
          return "";
        },
        _setFormat: function (t, e) {
          t
            ? (this.data.format = t)
            : this.data.format || (this.data.format = this.findBestFormat()),
            e
              ? (this.data.format_short = e)
              : this.data.format_short ||
                (this.data.format_short = this.findBestFormat(!0));
        },
      });
    function Et(t) {
      if (t.match(xt)) {
        var e = t.match(xt).slice(1),
          i = { year: e[0].replace("+", "") };
        return (
          e[1] && (i.month = e[1].replace("-", "")),
          e[2] && (i.day = e[2].replace("-", "")),
          i
        );
      }
      if (t.match(kt)) return cls.parseISODate(t);
      if (t.match(/^\-?\d+$/)) return { year: t };
      var n = {};
      if (t.match(/\d+\/\d+\/\d+/)) {
        var r = t.match(/\d+\/\d+\/\d+/)[0];
        t = F(t.replace(r, ""));
        var a = r.split("/");
        (n.month = a[0]), (n.day = a[1]), (n.year = a[2]);
      }
      if (t.match(/\d+\/\d+/)) {
        r = t.match(/\d+\/\d+/)[0];
        t = F(t.replace(r, ""));
        a = r.split("/");
        (n.month = a[0]), (n.year = a[1]);
      }
      if (t.match(":")) {
        var o = t.split(":");
        if (((n.hour = o[0]), (n.minute = o[1]), o[2])) {
          let t = o[2].split(".");
          (n.second = t[0]), (n.millisecond = t[1]);
        }
      }
      return n;
    }
    const Lt = lt.extend({
      initialize: function (t) {
        if (((this.year = parseInt(t)), isNaN(this.year)))
          throw new D("invalid_year_err", t);
      },
      isBefore: function (t) {
        return this.year < t.year;
      },
      isAfter: function (t) {
        return this.year > t.year;
      },
      getTime: function () {
        return this.year;
      },
    });
    function St(t) {
      return function (e) {
        var i = e.getTime();
        return new Lt(Math.floor(i / t) * t);
      };
    }
    const Dt = [
        ["year", 1, new St(1)],
        ["decade", 10, new St(10)],
        ["century", 100, new St(100)],
        ["millennium", 1e3, new St(1e3)],
        ["age", 1e6, new St(1e6)],
        ["epoch", 1e7, new St(1e7)],
        ["era", 1e8, new St(1e8)],
        ["eon", 1e9, new St(1e9)],
      ],
      At = Mt.extend({
        initialize: function (t, e, i) {
          Lt == t.constructor
            ? (this.data = { date_obj: t })
            : ((this.data = JSON.parse(JSON.stringify(t))),
              this._createDateObj()),
            this._setFormat(e, i);
        },
        _createDateObj: function () {
          var t = this._getDateData();
          this.data.date_obj = new Lt(t.year);
        },
        floor: function (t) {
          for (var e = 0; e < Dt.length; e++)
            if (Dt[e][0] == t) {
              var i = Dt[e][2](this.data.date_obj);
              return new At(i);
            }
          throw new D("invalid_scale_err", t);
        },
      });
    class jt {
      constructor(t, e) {
        for (let t in It.en) this[t] = It.en[t];
        if (t && "string" == typeof t && "en" != t) {
          var i = t;
          if (!(i in It)) {
            console.log(
              `Expected language ${i} to be cached. Did you call the constructor directly?`
            );
            var n = Ct(i, e);
            yt(n)
              .then((t) => {
                It[i] = t;
              })
              .catch((t) => {
                console.log(
                  `Error loading language [${n}] ${t.statusText} [${t.status}]`
                );
              });
          }
          C(this, It[i]);
        }
      }
      mergeData(t) {
        for (k in It.en)
          t[k] &&
            ("object" == typeof this[k] ? C(t[k], this[k]) : (this[k] = t[k]));
      }
      formatBigYear(t, e) {
        var i = t.year,
          n = this.bigdateformats[e] || this.bigdateformats.fallback;
        if (n) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r];
            if (Math.abs(i / a[0]) > 1) return Nt(Math.abs(i / a[0]), a[1]);
          }
          return i.toString();
        }
        return (
          O("Language file dateformats missing cosmological. Falling back."),
          Nt(i, e)
        );
      }
      _(t) {
        return this.messages[t] || jt.fallback.messages[t] || t;
      }
      formatDate(t, e) {
        return t.constructor == Date
          ? this.formatJSDate(t, e)
          : t.constructor == Lt
          ? this.formatBigYear(t, e)
          : t.data && t.data.date_obj
          ? this.formatDate(t.data.date_obj, e)
          : (O("Unfamiliar date presented for formatting"), t.toString());
      }
      formatJSDate(t, e) {
        var i = this,
          n = function (t, e) {
            var n = i.period_labels[t];
            if (n) t = e < 12 ? n[0] : n[1];
            return "<span class='tl-timeaxis-timesuffix'>" + t + "</span>";
          };
        e || (e = "full");
        var r = this.dateformats[e] || jt.fallback.dateformats[e];
        r || (r = e);
        var a = t.getDate(),
          o = t.getDay(),
          s = t.getMonth(),
          l = t.getFullYear(),
          h = t.getHours(),
          c = t.getMinutes(),
          u = t.getSeconds(),
          d = t.getMilliseconds(),
          f = t.getTimezoneOffset(),
          p = {
            d: a,
            dd: z(a),
            ddd: this.date.day_abbr[o],
            dddd: this.date.day[o],
            m: s + 1,
            mm: z(s + 1),
            mmm: this.date.month_abbr[s],
            mmmm: this.date.month[s],
            yy: String(l).slice(2),
            yyyy: l < 0 && this.has_negative_year_modifier() ? Math.abs(l) : l,
            h: h % 12 || 12,
            hh: z(h % 12 || 12),
            H: h,
            HH: z(h),
            M: c,
            MM: z(c),
            s: u,
            ss: z(u),
            l: z(d, 3),
            L: z(d > 99 ? Math.round(d / 10) : d),
            t: n("t", h),
            tt: n("tt", h),
            T: n("T", h),
            TT: n("TT", h),
            Z: (
              String(t).match(
                /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
              ) || [""]
            )
              .pop()
              .replace(/[^-+\dA-Z]/g, ""),
            o:
              (f > 0 ? "-" : "+") +
              z(100 * Math.floor(Math.abs(f) / 60) + (Math.abs(f) % 60), 4),
            S: ["th", "st", "nd", "rd"][
              a % 10 > 3 ? 0 : (((a % 100) - (a % 10) != 10) * a) % 10
            ],
          },
          _ = r.replace(jt.DATE_FORMAT_TOKENS, function (t) {
            return t in p ? p[t] : t.slice(1, t.length - 1);
          });
        return this._applyEra(_, l);
      }
      has_negative_year_modifier() {
        return Boolean(
          this.era_labels.negative_year.prefix ||
            this.era_labels.negative_year.suffix
        );
      }
      _applyEra(t, e) {
        var i =
            e < 0
              ? this.era_labels.negative_year
              : this.era_labels.positive_year,
          n = "";
        return (
          i.prefix && (n += "<span>" + i.prefix + "</span> "),
          (n += t),
          i.suffix && (n += " <span>" + i.suffix + "</span>"),
          n
        );
      }
    }
    function Ct(t, e) {
      if (/\.json$/.test(t)) var i = t;
      else {
        var n = "/locale/" + t + ".json";
        /\/$/.test(e) && (n = n.substr(1));
        i = e + n;
      }
      return i;
    }
    function Nt(t, e) {
      if (e.match(/%(\.(\d+))?f/)) {
        var i = e.match(/%(\.(\d+))?f/),
          n = i[0];
        return i[2] && (t = t.toFixed(i[2])), e.replace(n, t);
      }
      return e;
    }
    (jt.fallback = { messages: {} }),
      (jt.DATE_FORMAT_TOKENS =
        /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g);
    var It = {
      en: {
        name: "English (built-in)",
        lang: "en",
        api: { wikipedia: "en" },
        messages: {
          loading: "Loading",
          wikipedia: "From Wikipedia, the free encyclopedia",
          error: "Error",
          contract_timeline: "Contract Timeline",
          return_to_title: "Return to Title",
          loading_content: "Loading Content",
          expand_timeline: "Expand Timeline",
          loading_timeline: "Loading Timeline... ",
          swipe_to_navigate:
            "Swipe to Navigate<br><span class='tl-button'>OK</span>",
          unknown_read_err:
            "An unexpected error occurred trying to read your spreadsheet data",
          invalid_url_err:
            "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
          invalid_url_share_required:
            "Because of unexpected changes to Google's data access API, the creator of this timeline must enable 'anyone with the url can read' access for this spreadsheet. See timeline.knightlab.com for more information.",
          network_err:
            "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
          empty_feed_err: "No data entries found",
          missing_start_date_err: "Missing start_date",
          invalid_data_format_err: "Header row has been modified.",
          invalid_start_time_without_date:
            "Invalid configuration: time cannot be used without date.",
          invalid_end_time_without_date:
            "Invalid configuration: end time cannot be used without end date.",
          date_compare_err:
            "Can't compare timeline date objects on different scales",
          invalid_scale_err: "Invalid scale",
          invalid_date_err:
            "Invalid date: month, day and year must be numbers.",
          invalid_separator_error:
            "Invalid time: misuse of : or . as separator.",
          invalid_hour_err: "Invalid time (hour)",
          invalid_minute_err: "Invalid time (minute)",
          invalid_second_err: "Invalid time (second)",
          invalid_fractional_err: "Invalid time (fractional seconds)",
          invalid_second_fractional_err:
            "Invalid time (seconds and fractional seconds)",
          invalid_year_err: "Invalid year",
          flickr_notfound_err: "Photo not found or private",
          flickr_invalidurl_err: "Invalid Flickr URL",
          imgur_invalidurl_err: "Invalid Imgur URL",
          twitter_invalidurl_err: "Invalid Twitter URL",
          twitter_load_err: "Unable to load Tweet",
          twitterembed_invalidurl_err: "Invalid Twitter Embed url",
          wikipedia_load_err: "Unable to load Wikipedia entry",
          youtube_invalidurl_err: "Invalid YouTube URL",
          spotify_invalid_url: "Invalid Spotify URL",
          template_value_err: "No value provided for variable",
          invalid_rgb_err: "Invalid RGB argument",
          time_scale_scale_err:
            "Don't know how to get date from time for scale",
          axis_helper_no_options_err:
            "Axis helper must be configured with options",
          axis_helper_scale_err: "No AxisHelper available for scale",
          invalid_integer_option:
            "Invalid option value—must be a whole number.",
          instagram_bad_request: "Invalid or private Instagram URL",
        },
        date: {
          month: [
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
            "December",
          ],
          month_abbr: [
            "Jan.",
            "Feb.",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug.",
            "Sept.",
            "Oct.",
            "Nov.",
            "Dec.",
          ],
          day: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."],
        },
        era_labels: {
          positive_year: { prefix: "", suffix: "" },
          negative_year: { prefix: "", suffix: "BCE" },
        },
        period_labels: {
          t: ["a", "p"],
          tt: ["am", "pm"],
          T: ["A", "P"],
          TT: ["AM", "PM"],
        },
        dateformats: {
          year: "yyyy",
          month_short: "mmm",
          month: "mmmm yyyy",
          full_short: "mmm d",
          full: "mmmm d',' yyyy",
          time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
          time_short: "h:MM:ss TT",
          time_no_seconds_short: "h:MM TT",
          time_no_minutes_short: "h TT",
          time_no_seconds_small_date:
            "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
          time_milliseconds: "l",
          full_long: "mmm d',' yyyy 'at' h:MM TT",
          full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'",
        },
        bigdateformats: {
          fallback: [
            [1e9, "%.2f billion years ago"],
            [1e6, "%.1f million years ago"],
            [1e3, "%.1f thousand years ago"],
            [1, "%f years ago"],
          ],
          compact: [
            [1e9, "%.2f bya"],
            [1e6, "%.1f mya"],
            [1e3, "%.1f kya"],
            [1, "%f years ago"],
          ],
          verbose: [
            [1e9, "%.2f billion years ago"],
            [1e6, "%.1f million years ago"],
            [1e3, "%.1f thousand years ago"],
            [1, "%f years ago"],
          ],
        },
      },
    };
    let Ot = new jt();
    jt.fallback = Ot;
    class zt {
      setLanguage(t) {
        this.language = t;
      }
      getLanguage() {
        if (this.language) {
          if ("object" == typeof this.language) return this.language;
          O(
            `I18NMixins.getLanguage: this.language should be object, but is ${typeof this
              .language}`
          );
        }
        return Ot;
      }
      _(t) {
        return this.getLanguage()._(t);
      }
    }
    class Rt {
      constructor(t, e, i) {
        i && this.setLanguage(i),
          (this._el = {
            parent: {},
            container: {},
            message_container: {},
            loading_icon: {},
            message: {},
          }),
          (this.options = {
            width: 600,
            height: 600,
            message_class: "tl-message",
            message_icon_class: "tl-loading-icon",
          }),
          (this.container = t),
          C(this.options, e),
          (this._el.container = T("div", this.options.message_class)),
          t && (t.appendChild(this._el.container), (this._el.parent = t)),
          (this.animator = {}),
          this._initLayout(),
          this._initEvents();
      }
      updateMessage(t) {
        (this._el.message.innerHTML = t || this._("loading")),
          !this._el.parent.atributes &&
            this.container.attributes &&
            (this.container.appendChild(this._el.container),
            (this._el.parent = this.container));
      }
      updateDisplay(t, e) {}
      _onMouseClick() {
        this.fire("clicked", this.options);
      }
      _onRemove() {
        this._el.parent = {};
      }
      _initLayout() {
        (this._el.message_container = T(
          "div",
          "tl-message-container",
          this._el.container
        )),
          (this._el.loading_icon = T(
            "div",
            this.options.message_icon_class,
            this._el.message_container
          )),
          (this._el.message = T(
            "div",
            "tl-message-content",
            this._el.message_container
          )),
          this.updateMessage();
      }
      _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this),
          _t.addListener(this, "removed", this._onRemove, this);
      }
    }
    function Pt(t, e) {
      e = e || "start_date";
      t.sort(function (t, i) {
        return t[e].isBefore(i[e]) ? -1 : t[e].isAfter(i[e]) ? 1 : 0;
      });
    }
    function qt(t) {
      var e = { hour: null, minute: null, second: null, millisecond: null },
        i = null,
        n = t.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
      n && ((i = F(n[0])), (t = F(t.substring(0, t.lastIndexOf(i)))));
      var r = [],
        a = t.match(/^\s*(\d{1,2})(\d{2})\s*$/);
      if (
        (a
          ? (r = a.slice(1))
          : 1 == (r = t.split(":")).length && (r = t.split(".")),
        r.length > 4)
      )
        throw new D("invalid_separator_error");
      let o = r[0];
      if (
        ((e.hour = parseInt(o)),
        i && "p" == i.toLowerCase()[0] && 12 != e.hour
          ? (e.hour += 12)
          : i && "a" == i.toLowerCase()[0] && 12 == e.hour && (e.hour = 0),
        isNaN(e.hour) || e.hour < 0 || e.hour > 23)
      )
        throw new D("invalid_hour_err", o);
      if (r.length > 1) {
        let t = r[1];
        if (((e.minute = parseInt(t)), isNaN(e.minute)))
          throw new D("invalid_minute_err", t);
      }
      if (r.length > 2) {
        var s = r[2].split(/[\.,]/);
        if ((r = s.concat(r.slice(3))).length > 2)
          throw new D("invalid_second_fractional_err");
        if (((e.second = parseInt(r[0])), isNaN(e.second)))
          throw new D("invalid_second_err", r[0]);
        if (2 == r.length) {
          var l = parseInt(r[1]);
          if (isNaN(l)) throw new D("invalid_fractional_err", r[1]);
          e.millisecond = 100 * l;
        }
      }
      return e;
    }
    H(Rt, zt, ht, dt);
    const Ft = new RegExp("(^-?\\d+$|^$)");
    function Ht(t) {
      try {
        return (
          Object.keys(t).forEach((e) => {
            let i = t[e];
            if (i && i.match && !i.match(Ft))
              throw `invalid value ${i} for ${e}`;
          }),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    const $t = { human: Mt, cosmological: At };
    var Bt = i(0),
      Wt = i.n(Bt);
    const Ut = { text: ["headline", "text"], media: ["caption", "credit"] },
      Zt = {
        start_date: ["display_date"],
        end_date: ["display_date"],
        slide: ["display_date", "group"],
        date: ["display_date"],
      };
    function Gt(t, e, i) {
      Object.keys(i).forEach((n) => {
        var r = "slide" == n ? t : t[n];
        r &&
          i[n].forEach((t) => {
            void 0 !== r[t] && (r[t] = e(r[t]));
          });
      });
    }
    function Yt(t) {
      return Wt.a.sanitize(t, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["frameborder", "target"],
      });
    }
    Wt.a.addHook("afterSanitizeAttributes", function (t) {
      if ("A" == t.nodeName && "href" in t) {
        "target" in t.attributes || t.setAttribute("target", "_blank");
        let e = t.attributes.rel;
        e
          ? -1 == e.value.indexOf("noopener") &&
            t.setAttribute("rel", `noopener ${e.value}`)
          : t.setAttribute("rel", "noopener");
      }
    });
    class Vt {
      constructor(t) {
        if (
          ((this.title = ""),
          (this.scale = ""),
          (this.events = []),
          (this.eras = []),
          (this.event_dict = {}),
          (this.messages = { errors: [], warnings: [] }),
          "object" == typeof t && t.events)
        ) {
          if (
            ((this.scale = t.scale),
            (this.events = []),
            this._ensureValidScale(t.events),
            t.title)
          ) {
            var e = this._assignID(t.title);
            this._tidyFields(t.title),
              (this.title = t.title),
              (this.event_dict[e] = this.title);
          }
          for (var i = 0; i < t.events.length; i++)
            try {
              this.addEvent(t.events[i], !0);
            } catch (t) {
              this.logError(t);
            }
          t.eras &&
            t.eras.forEach((t, e) => {
              try {
                this.addEra(t);
              } catch (t) {
                this.logError("Era " + e + ": " + t);
              }
            }),
            Pt(this.events),
            Pt(this.eras);
        }
      }
      logError(t) {
        O(`logError: ${t}`), this.messages.errors.push(t);
      }
      getErrors(t) {
        return t ? this.messages.errors.join(t) : this.messages.errors;
      }
      validate() {
        (void 0 !== this.events &&
          void 0 !== this.events.length &&
          0 != this.events.length) ||
          this.logError("Timeline configuration has no events.");
        for (var t = 0; t < this.eras.length; t++) {
          var e;
          if (
            void 0 === this.eras[t].start_date ||
            void 0 === this.eras[t].end_date
          )
            (e = this.eras[t].headline
              ? this.eras[t].headline
              : "era " + (t + 1)),
              this.logError(
                "All eras must have start and end dates. [" + e + "]"
              );
        }
      }
      isValid() {
        return 0 == this.messages.errors.length;
      }
      addEvent(t, e) {
        var i = this._assignID(t);
        return void 0 === t.start_date
          ? (O("Missing start date, skipping event"), console.log(t), null)
          : (this._processDates(t),
            this._tidyFields(t),
            this.events.push(t),
            (this.event_dict[i] = t),
            e || Pt(this.events),
            i);
      }
      addEra(t) {
        var e = this._assignID(t);
        if (void 0 === t.start_date) throw new D("missing_start_date_err", e);
        this._processDates(t),
          this._tidyFields(t),
          this.eras.push({
            start_date: t.start_date,
            end_date: t.end_date,
            headline: t.text.headline,
          });
      }
      _assignID(t) {
        var e = t.unique_id;
        return (
          F(e) || (e = t.text ? $(t.text.headline) : null),
          (t.unique_id = (function (t, e) {
            if ((e || (e = B(6)), !(e in t))) return e;
            var i = e.match(/^(.+)(-\d+)?$/)[1],
              n = [];
            for (let e in t) e.match(/^(.+?)(-\d+)?$/)[1] == i && n.push(e);
            e = i + "-" + (n.length + 1);
            for (var r = n.length; -1 != n.indexOf(e); r++) e = i + "-" + r;
            return e;
          })(this.event_dict, e)),
          t.unique_id
        );
      }
      _makeUniqueIdentifiers(t, e) {
        for (var i = [t], n = 0; n < e.length; n++)
          F(e[n].unique_id) &&
            ((e[n].unique_id = $(e[n].unique_id)),
            -1 == i.indexOf(e[n].unique_id)
              ? i.push(e[n].unique_id)
              : (e[n].unique_id = ""));
        if (i.length != e.length + 1)
          for (n = 0; n < e.length; n++)
            if (!e[n].unique_id) {
              var r = e[n].text ? $(e[n].text.headline) : null;
              r || (r = B(6)),
                -1 != i.indexOf(r) && (r = r + "-" + n),
                i.push(r),
                (e[n].unique_id = r);
            }
      }
      _ensureValidScale(t) {
        if (!this.scale) {
          this.scale = "human";
          for (var e = 0; e < t.length; e++) {
            if ("cosmological" == t[e].scale) {
              this.scale = "cosmological";
              break;
            }
            if (t[e].start_date && void 0 !== t[e].start_date.year) {
              var i = new At(t[e].start_date).data.date_obj.year;
              if (i < -271820 || i > 275759) {
                this.scale = "cosmological";
                break;
              }
            }
          }
          O(`Determining scale dynamically: ${this.scale}`);
        }
        $t[this.scale] ||
          this.logError(
            "Don't know how to process dates on scale " + this.scale
          );
      }
      _processDates(t) {
        var e = $t[this.scale];
        if (!(t.start_date instanceof e)) {
          var i = t.start_date;
          if (
            ((t.start_date = new e(i)),
            void 0 !== t.end_date && !(t.end_date instanceof e))
          ) {
            var n = t.end_date,
              r = !0;
            for (let t in i) r = r && i[t] == n[t];
            r
              ? (O(
                  "End date same as start date is redundant; dropping end date"
                ),
                delete t.end_date)
              : (t.end_date = new e(n));
          }
        }
      }
      getEarliestDate() {
        var t = this.events[0].start_date;
        return this.eras &&
          this.eras.length > 0 &&
          this.eras[0].start_date.isBefore(t)
          ? this.eras[0].start_date
          : t;
      }
      getLatestDate() {
        for (var t = [], e = 0; e < this.events.length; e++)
          this.events[e].end_date
            ? t.push({ date: this.events[e].end_date })
            : t.push({ date: this.events[e].start_date });
        for (e = 0; e < this.eras.length; e++)
          this.eras[e].end_date
            ? t.push({ date: this.eras[e].end_date })
            : t.push({ date: this.eras[e].start_date });
        return Pt(t, "date"), t.slice(-1)[0].date;
      }
      _tidyFields(t) {
        function e(t, e, i) {
          i || (i = ""), t.hasOwnProperty(e) || (t[e] = i);
        }
        t.group && (t.group = F(t.group)),
          t.text || (t.text = {}),
          e(t.text, "text"),
          e(t.text, "headline"),
          Gt(t, Yt, Ut),
          Gt(t, it, Zt);
      }
    }
    async function Jt(t) {
      return new Promise((e, i) => {
        if (t.data) {
          var n = Xt(Kt(t.data, t), t);
          (n.useMemoryStore = !0), e(n);
        } else
          t.url &&
            window
              .fetch(t.url, { mode: "cors" })
              .then(function (t) {
                if (200 == t.status) return t.text ? t.text() : t;
                "application/json" == t.headers.get("content-type")
                  ? t.text().then((t) => {
                      i(JSON.parse(t));
                    })
                  : i({
                      status_code: t.status,
                      message: `Error fetching CSV: [${t.status} ${t.statusText}]`,
                    });
              })
              .then(function (i) {
                if (i) {
                  var n = (function (t, e) {
                    let i = Xt(Kt(t, e)),
                      n = [];
                    return (
                      i.records.forEach((t) => {
                        let e = {};
                        i.fields.forEach((i, n) => (e[i] = t[n])), n.push(e);
                      }),
                      n
                    );
                  })(i, t);
                  (n.useMemoryStore = !0), e(n);
                }
              })
              .catch((t) => {
                i({ status_code: 500, message: `Error fetching CSV: ${t}` });
              });
      });
    }
    function Xt(t, e) {
      return !0 !== (e = e || {}).noHeaderRow && t.length > 0
        ? {
            fields: t[0].map((t, e) =>
              t && t.trim ? t.trim() : `untitled${e}`
            ),
            records: t.slice(1),
          }
        : { records: t };
    }
    function Kt(t, e) {
      (!e || (e && !e.lineterminator)) &&
        (t = (function (t, e) {
          if (e && !e.lineterminator) return t.replace(/(\r\n|\n|\r)/gm, "\n");
          return t;
        })(t, e));
      var i = (function (t) {
        var e = {
          delimiter: ",",
          doublequote: !0,
          lineterminator: "\n",
          quotechar: '"',
          skipinitialspace: !0,
          skipinitialrows: 0,
        };
        for (var i in t)
          "trim" === i
            ? (e.skipinitialspace = t.trim)
            : (e[i.toLowerCase()] = t[i]);
        return e;
      })(e);
      t = (function (t, e) {
        return null == t
          ? ""
          : ((e = e || "\n"),
            t.charAt(t.length - e.length) !== e
              ? t
              : t.substring(0, t.length - e.length));
      })(t, i.lineterminator);
      var n,
        r,
        a = "",
        o = !1,
        s = !1,
        l = "",
        h = [],
        c = [];
      for (
        r = function (t) {
          return (
            !0 !== s &&
              ("" === t
                ? (t = null)
                : !0 === i.skipinitialspace && (t = t.trim())),
            t
          );
        },
          n = 0;
        n < t.length;
        n += 1
      )
        (a = t.charAt(n)),
          !1 !== o || (a !== i.delimiter && a !== i.lineterminator)
            ? a !== i.quotechar
              ? (l += a)
              : o
              ? t.charAt(n + 1) === i.quotechar
                ? ((l += i.quotechar), (n += 1))
                : (o = !1)
              : ((o = !0), (s = !0))
            : ((l = r(l)),
              h.push(l),
              a === i.lineterminator && (c.push(h), (h = [])),
              (l = ""),
              (s = !1));
      return (
        (l = r(l)),
        h.push(l),
        c.push(h),
        i.skipinitialrows && (c = c.slice(i.skipinitialrows)),
        c
      );
    }
    function Qt(t) {
      if (t) return t.replace(/[\s,]+/g, "");
    }
    function te(t) {
      let e = { key: null, worksheet: 0 };
      var i = /\bkey=([-_A-Za-z0-9]+)&?/i,
        n = /docs.google.com\/spreadsheets(.*?)\/d\//;
      if (t.match(i)) e.key = t.match(i)[1];
      else if (t.match(n)) {
        var r = t.search(n) + t.match(n)[0].length,
          a = t.substr(r);
        (e.key = a.split("/")[0]),
          t.match(/\?gid=(\d+)/) && (e.worksheet = t.match(/\?gid=(\d+)/)[1]);
      } else t.match(/^\b[-_A-Za-z0-9]+$/) && (e.key = t);
      return e.key ? e : null;
    }
    async function ee(t, e) {
      let i = [];
      t = (function (t) {
        if ((t = t.trim()).match(/^[a-zA-Z0-9-_]+$/))
          return `https://docs.google.com/spreadsheets/d/${t}/pub?output=csv`;
        if (t.startsWith("https://docs.google.com/spreadsheets/")) {
          if (t.match(/\/pub\?output=csv$/)) return t;
          let e = new URL(t),
            i = new URLSearchParams(e.search);
          i.set("output", "csv"),
            i.get("gid") && i.set("single", "true"),
            (e.search = `?${i.toString()}`);
          let n = e.pathname.substr(0, e.pathname.lastIndexOf("/"));
          return (e.pathname = `${n}/pub`), e.toString();
        }
        throw new D("invalid_url_err", t);
      })(t);
      await Jt({ url: `${e}${t}` })
        .then((t) => {
          i = t;
        })
        .catch((t) => {
          if ("response_not_csv" == t.proxy_err_code)
            throw new D(
              "Timeline could not read the data for your timeline. Make sure you have published it to the web."
            );
          throw new D(t.message);
        });
      let n = { events: [], errors: [], warnings: [], eras: [] };
      return (
        i.forEach((t, e) => {
          try {
            if (
              !(function (t) {
                var e = [];
                if (Object.keys) e = Object.keys(t);
                else
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (null != t[r] && "string" != typeof t[r]) return !1;
                  if (0 != F(t[r]).length) return !1;
                }
                return !0;
              })(t)
            ) {
              !(function (t, e) {
                var i = "event";
                void 0 !== t.type && ((i = t.type), delete t.type);
                "title" == i
                  ? e.title
                    ? (e.warnings.push("Multiple title slides detected."),
                      e.events.push(t))
                    : (e.title = t)
                  : "era" == i
                  ? e.eras.push(t)
                  : e.events.push(t);
              })(
                (function (t) {
                  let e = {};
                  Object.keys(t).forEach((i) => {
                    e[i] = F(t[i]);
                  });
                  var i,
                    n = {
                      media: {
                        caption: e["Media Caption"] || "",
                        credit: e["Media Credit"] || "",
                        url: e.Media || "",
                        thumbnail: e["Media Thumbnail"] || "",
                      },
                      text: { headline: e.Headline || "", text: e.Text || "" },
                      display_date: e["Display Date"] || "",
                      group: e.Group || e.Tag || "",
                      background:
                        ((i = e.Background),
                        "string" != typeof i
                          ? ""
                          : i.match(/^(https?:)?\/\/?/)
                          ? { url: i }
                          : { color: i }),
                      type: e.Type || "",
                    };
                  if (
                    Object.keys(e).includes("Start Date") ||
                    Object.keys(e).includes("End Date")
                  )
                    e["Start Date"] && (n.start_date = Et(e["Start Date"])),
                      e["End Date"] && (n.end_date = Et(e["End Date"]));
                  else {
                    if (
                      (e.Year &&
                        (n.start_date = {
                          year: Qt(e.Year),
                          month: Qt(e.Month) || "",
                          day: Qt(e.Day) || "",
                        }),
                      e["End Year"] &&
                        (n.end_date = {
                          year: Qt(e["End Year"]) || "",
                          month: Qt(e["End Month"]) || "",
                          day: Qt(e["End Day"]) || "",
                        }),
                      e.Time)
                    ) {
                      if (!n.start_date)
                        throw new D("invalid_start_time_without_date");
                      C(n.start_date, qt(e.Time));
                    }
                    if (e["End Time"]) {
                      if (!n.end_date)
                        throw new D("invalid_end_time_without_date");
                      C(n.end_date, qt(e["End Time"]));
                    }
                    if (n.start_date && !Ht(n.start_date))
                      throw new D("invalid_date_err");
                    if (n.end_date && !Ht(n.end_date))
                      throw new D("invalid_date_err");
                  }
                  return n;
                })(t),
                n
              );
            }
          } catch (i) {
            if (i.constructor == D) n.errors.push(i);
            else {
              i.message && (i = i.message);
              let r = t.Headline || e;
              n.errors.push(i + `[${r}]`);
            }
          }
        }),
        n
      );
    }
    async function ie(t, e) {
      let i = null,
        n = {};
      if (
        ("function" == typeof e
          ? (i = e)
          : "object" == typeof e &&
            ((n = e),
            (i = e.callback),
            "function" == typeof n.callback && (i = n.callback)),
        !i)
      )
        throw new D(
          "Second argument to makeConfig must be either a function or an object which includes a 'callback' property with a 'function' type value"
        );
      var r, a;
      if (te(t)) {
        try {
          a = await (async function (t, e) {
            if (!e.sheets_proxy)
              throw new D("Proxy option must be set to read data from Google");
            var i = await ee(t, e.sheets_proxy);
            if (i) return i;
          })(t, n);
        } catch (t) {
          return (
            (r = new Vt()),
            "NetworkError" == t.name
              ? r.logError(new D("network_err"))
              : "TLError" == t.name
              ? r.logError(t)
              : r.logError(new D("unknown_read_err", t.name)),
            void i(r)
          );
        }
        if (((r = new Vt(a)), a.errors))
          for (var o = 0; o < a.errors.length; o++) r.logError(a.errors[o]);
        i(r);
      } else
        vt({
          url: t,
          dataType: "json",
          success: function (t) {
            try {
              r = new Vt(t);
            } catch (t) {
              (r = new Vt()).logError(t);
            }
            i(r);
          },
          error: function (t, e, n) {
            if (((r = new Vt()), "parsererror" == e))
              n = new D("invalid_url_err");
            else n = new D("unknown_read_err", e);
            r.logError(n), i(r);
          },
        });
    }
    class ne {
      constructor(t) {
        if (!t) throw new D("axis_helper_no_options_err");
        (this.scale = t.scale), (this.minor = t.minor), (this.major = t.major);
      }
      getPixelsPerTick(t) {
        return t * this.minor.factor;
      }
      getMajorTicks(t) {
        return this._getTicks(t, this.major);
      }
      getMinorTicks(t) {
        return this._getTicks(t, this.minor);
      }
      _getTicks(t, e) {
        for (
          var i = t._scaled_padding * e.factor,
            n = t._earliest - i,
            r = t._latest + i,
            a = [],
            o = n;
          o < r;
          o += e.factor
        )
          a.push(t.getDateFromTime(o).floor(e.name));
        return { name: e.name, ticks: a };
      }
    }
    var re = {},
      ae = function (t, e) {
        re[t] = [];
        for (var i = 0; i < e.length - 1; i++) {
          var n = e[i],
            r = e[i + 1];
          re[t].push(
            new ne({
              scale: n[3],
              minor: { name: n[0], factor: n[1] },
              major: { name: r[0], factor: r[1] },
            })
          );
        }
      };
    ae("human", wt), ae("cosmological", Dt);
    const oe = {
      millisecond: "time_milliseconds",
      second: "time_short",
      minute: "time_no_seconds_short",
      hour: "time_no_minutes_short",
      day: "full_short",
      month: "month_short",
      year: "year",
      decade: "year",
      century: "year",
      millennium: "year",
      age: "compact",
      epoch: "compact",
      era: "compact",
      eon: "compact",
      eon2: "compact",
    };
    class se {
      constructor(t, e) {
        var i = t.events;
        (this._scale = t.scale),
          (e = C(
            { display_width: 500, screen_multiplier: 3, max_rows: null },
            e
          )),
          (this._display_width = e.display_width),
          (this._screen_multiplier = e.screen_multiplier),
          (this._pixel_width = this._screen_multiplier * this._display_width),
          (this._group_labels = void 0),
          (this._positions = []),
          (this._pixels_per_milli = 0),
          (this._earliest = t.getEarliestDate().getTime()),
          (this._latest = t.getLatestDate().getTime()),
          (this._span_in_millis = this._latest - this._earliest),
          this._span_in_millis <= 0 &&
            (this._span_in_millis = this._computeDefaultSpan(t)),
          (this._average = this._span_in_millis / i.length),
          (this._pixels_per_milli =
            this.getPixelWidth() / this._span_in_millis),
          (this._axis_helper = (function (t, e) {
            "number" != typeof e && (e = 100);
            var i = t.getScale(),
              n = re[i];
            if (!n) throw new D("axis_helper_scale_err", i);
            for (var r = null, a = 0; a < n.length; a++) {
              var o = n[a],
                s = o.getPixelsPerTick(t._pixels_per_milli);
              if (s > e)
                return null == r || Math.abs(e - s) < Math.abs(e - s) ? o : r;
              r = o;
            }
            return n[n.length - 1];
          })(this)),
          (this._scaled_padding =
            (1 / this.getPixelsPerTick()) * (this._display_width / 2)),
          this._computePositionInfo(i, e.max_rows);
      }
      _computeDefaultSpan(t) {
        if ("human" == t.scale) {
          for (var e = {}, i = 0; i < t.events.length; i++) {
            var n = t.events[i].start_date.findBestFormat();
            e[n] = e[n] ? e[n] + 1 : 1;
          }
          for (i = wt.length - 1; i >= 0; i--)
            if (e.hasOwnProperty(wt[i][0])) {
              var r = wt[wt.length - 1];
              return wt[i + 1] && (r = wt[i + 1]), r[1];
            }
          return 31536e6;
        }
        return 2e5;
      }
      getGroupLabels() {
        return this._group_labels || [];
      }
      getScale() {
        return this._scale;
      }
      getNumberOfRows() {
        return this._number_of_rows;
      }
      getPixelWidth() {
        return this._pixel_width;
      }
      getPosition(t) {
        return (t - this._earliest) * this._pixels_per_milli;
      }
      getPositionInfo(t) {
        return this._positions[t];
      }
      getPixelsPerTick() {
        return this._axis_helper.getPixelsPerTick(this._pixels_per_milli);
      }
      getTicks() {
        return {
          major: this._axis_helper.getMajorTicks(this),
          minor: this._axis_helper.getMinorTicks(this),
        };
      }
      getDateFromTime(t) {
        if ("human" == this._scale) return new Mt(t);
        if ("cosmological" == this._scale) return new At(new Lt(t));
        throw new D("time_scale_scale_err", this._scale);
      }
      getMajorScale() {
        return this._axis_helper.major.name;
      }
      getMinorScale() {
        return this._axis_helper.minor.name;
      }
      _assessGroups(t) {
        for (var e = [], i = !1, n = 0; n < t.length; n++)
          t[n].group &&
            (e.indexOf(t[n].group) < 0 ? e.push(t[n].group) : (i = !0));
        return e.length && i && e.push(""), e;
      }
      _computeRowInfo(t, e) {
        for (var i = [], n = 0, r = 0; r < t.length; r++) {
          var a = t[r],
            o = [];
          delete a.row;
          for (var s = 0; s < i.length; s++)
            if ((o.push(i[s].end - a.start), o[s] <= 0)) {
              (a.row = s), (i[s] = a);
              break;
            }
          if (void 0 === a.row)
            if (null === e) (a.row = i.length), i.push(a);
            else if (e > 0) (a.row = i.length), i.push(a), e--;
            else {
              var l = Math.min.apply(null, o),
                h = o.indexOf(l);
              (a.row = h), a.end > i[h].end && (i[h] = a), n++;
            }
        }
        return { n_rows: i.length, n_overlaps: n };
      }
      _computePositionInfo(t, e, i) {
        i = i || 100;
        for (var n = [], r = !1, a = 0; a < t.length; a++) {
          var o = { start: this.getPosition(t[a].start_date.getTime()) };
          if ((this._positions.push(o), void 0 !== t[a].end_date)) {
            var s = this.getPosition(t[a].end_date.getTime());
            (o.width = s - o.start),
              o.width > i ? (o.end = o.start + o.width) : (o.end = o.start + i);
          } else (o.width = i), (o.end = o.start + i);
          t[a].group
            ? n.indexOf(t[a].group) < 0 && n.push(t[a].group)
            : (r = !0);
        }
        if (n.length) {
          r && n.push("");
          var l = [];
          for (a = 0; a < n.length; a++)
            l[a] = {
              label: n[a],
              idx: a,
              positions: [],
              n_rows: 1,
              n_overlaps: 0,
            };
          for (a = 0; a < this._positions.length; a++) {
            ((o = this._positions[a]).group = n.indexOf(t[a].group || "")),
              (o.row = 0);
            for (var h = (d = l[o.group]).positions.length - 1; h >= 0; h--)
              d.positions[h].end > o.start && d.n_overlaps++;
            d.positions.push(o);
          }
          for (var c = n.length; ; ) {
            var u = Math.max(0, e - c);
            if (!u) break;
            if (
              (l.sort(function (t, e) {
                return t.n_overlaps > e.n_overlaps
                  ? -1
                  : t.n_overlaps < e.n_overlaps
                  ? 1
                  : t.idx - e.idx;
              }),
              !l[0].n_overlaps)
            )
              break;
            for (c = 0, a = 0; a < l.length; a++) {
              var d;
              if ((d = l[a]).n_overlaps && u) {
                var f = this._computeRowInfo(d.positions, d.n_rows + 1);
                (d.n_rows = f.n_rows), (d.n_overlaps = f.n_overlaps), u--;
              }
              c += d.n_rows;
            }
          }
          (this._number_of_rows = c),
            (this._group_labels = []),
            l.sort(function (t, e) {
              return t.idx - e.idx;
            });
          a = 0;
          for (var p = 0; a < l.length; a++) {
            this._group_labels.push({ label: l[a].label, rows: l[a].n_rows });
            for (h = 0; h < l[a].positions.length; h++) {
              (o = l[a].positions[h]).row += p;
            }
            p += l[a].n_rows;
          }
        } else {
          var _ = this._computeRowInfo(this._positions, e);
          this._number_of_rows = _.n_rows;
        }
      }
      getAxisTickDateFormat(t) {
        return "cosmological" == this._scale ? "compact" : oe[t];
      }
    }
    class le {
      constructor(t) {
        (this._el = { parent: {}, container: {}, message: {} }),
          (this.options = { width: 600, height: 600 }),
          (this.data = { label: "", rows: 1 }),
          (this._el.container = T("div", "tl-timegroup")),
          C(this.data, t),
          (this.animator = {}),
          this._initLayout(),
          this._initEvents();
      }
      updateDisplay(t, e) {}
      setRowPosition(t, e) {
        (this.options.height = e * this.data.rows),
          this.setPosition({ top: t }),
          (this._el.container.style.height = this.options.height + "px");
      }
      setAlternateRowColor(t, e) {
        var i = "tl-timegroup";
        t && (i += " tl-timegroup-alternate"),
          e && (i += " tl-timegroup-hidden"),
          (this._el.container.className = i);
      }
      _onMouseClick() {
        this.fire("clicked", this.options);
      }
      _initLayout() {
        (this._el.message = T(
          "div",
          "tl-timegroup-message",
          this._el.container
        )),
          (this._el.message.innerHTML = this.data.label);
      }
      _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this);
      }
      _updateDisplay(t, e, i) {}
    }
    H(le, ht, dt);
    i(2);
    class he {
      constructor(t, e, i, n) {
        (this.start_date = t),
          (this.end_date = e),
          (this.headline = i),
          (this._el = {
            container: {},
            background: {},
            content_container: {},
            content: {},
            text: {},
          }),
          (this._text = {}),
          (this._state = { loaded: !1 }),
          (this.options = {
            duration: 1e3,
            ease: at,
            width: 600,
            height: 600,
            marker_width_min: 100,
          }),
          (this.active = !1),
          (this.animator = {}),
          (this.has_end_date = !1),
          C(this.options, n),
          this._initLayout(),
          this._initEvents();
      }
      show() {}
      hide() {}
      setActive(t) {}
      addTo(t) {
        t.appendChild(this._el.container);
      }
      removeFrom(t) {
        t.removeChild(this._el.container);
      }
      updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
      getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
      getTime() {
        return this.start_date.getTime();
      }
      getEndTime() {
        return !!this.end_date && this.end_date.getTime();
      }
      setHeight(t) {
        var e = 1;
        (this._el.content_container.style.height = t + "px"),
          (this._el.content.className = "tl-timeera-content"),
          l
            ? ((e = Math.floor(t / 14)) < 1 && (e = 1),
              (this._text.className = "tl-headline"),
              (this._text.style.webkitLineClamp = e))
            : ((e = t / 12),
              (this._text.className =
                e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline"),
              (this._text.style.height = 12 * e + "px"));
      }
      setWidth(t) {
        this.end_date &&
          ((this._el.container.style.width = t + "px"),
          t > this.options.marker_width_min
            ? ((this._el.content_container.style.width = t + "px"),
              (this._el.content_container.className =
                "tl-timeera-content-container tl-timeera-content-container-long"))
            : ((this._el.content_container.style.width =
                this.options.marker_width_min + "px"),
              (this._el.content_container.className =
                "tl-timeera-content-container")));
      }
      setClass(t) {
        this._el.container.className = t;
      }
      setRowPosition(t, e) {
        this.setPosition({ top: t }),
          e < 56 &&
            S(this._el.content_container, "tl-timeera-content-container-small");
      }
      setColor(t) {
        this._el.container.className = "tl-timeera tl-timeera-color" + t;
      }
      _initLayout() {
        (this._el.container = T("div", "tl-timeera")),
          this.end_date &&
            ((this.has_end_date = !0),
            (this._el.container.className = "tl-timeera tl-timeera-with-end")),
          (this._el.content_container = T(
            "div",
            "tl-timeera-content-container",
            this._el.container
          )),
          (this._el.background = T(
            "div",
            "tl-timeera-background",
            this._el.content_container
          )),
          (this._el.content = T(
            "div",
            "tl-timeera-content",
            this._el.content_container
          )),
          (this._el.text = T("div", "tl-timeera-text", this._el.content)),
          (this._text = T("h2", "tl-headline", this._el.text)),
          this.headline &&
            "" != this.headline &&
            (this._text.innerHTML = Z(this.headline)),
          this.onLoaded();
      }
      _initEvents() {}
      _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }
    H(he, ht, dt);
    class ce {
      constructor(t, e, i) {
        i && this.setLanguage(i),
          (this._el = {
            container: {},
            content_container: {},
            major: {},
            minor: {},
          }),
          (this._text = {}),
          (this._state = { loaded: !1 }),
          (this.data = {}),
          (this.options = { duration: 1e3, ease: at, width: 600, height: 600 }),
          (this.active = !1),
          (this.animator = {}),
          (this.axis_helper = {}),
          (this.minor_ticks = []),
          (this.major_ticks = []),
          (this._el.container = "object" == typeof t ? t : x(t)),
          C(this.options, e),
          this._initLayout(),
          this._initEvents();
      }
      show() {}
      hide() {}
      addTo(t) {
        t.appendChild(this._el.container);
      }
      removeFrom(t) {
        t.removeChild(this._el.container);
      }
      updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
      getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
      drawTicks(t, e) {
        var i = t.getTicks();
        (this._el.major.className = "tl-timeaxis-major"),
          (this._el.minor.className = "tl-timeaxis-minor"),
          (this._el.major.style.opacity = 0),
          (this._el.minor.style.opacity = 0),
          (this.major_ticks = this._createTickElements(
            i.major.ticks,
            this._el.major,
            t.getAxisTickDateFormat(i.major.name)
          )),
          (this.minor_ticks = this._createTickElements(
            i.minor.ticks,
            this._el.minor,
            t.getAxisTickDateFormat(i.minor.name),
            i.major.ticks
          )),
          this.positionTicks(t, e, !0),
          (this._el.major.className =
            "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity"),
          (this._el.minor.className =
            "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity"),
          (this._el.major.style.opacity = 1),
          (this._el.minor.style.opacity = 1);
      }
      _createTickElements(t, e, i, n) {
        e.innerHTML = "";
        var r = {};
        if (((r[new Date(-1, 13, -30).getTime()] = !0), n))
          for (var a = 0; a < n.length; a++) r[n[a].getTime()] = !0;
        var o = [];
        for (a = 0; a < t.length; a++) {
          var s = t[a];
          if (!(s.getTime() in r)) {
            var l = T("div", "tl-timeaxis-tick", e),
              h = T("span", "tl-timeaxis-tick-text tl-animate-opacity", l);
            let t = s.getDisplayDate(this.getLanguage(), i);
            (h.innerHTML = t),
              o.push({ tick: l, tick_text: h, display_date: t, date: s });
          }
        }
        return o;
      }
      positionTicks(t, e, i) {
        i
          ? ((this._el.major.className = "tl-timeaxis-major"),
            (this._el.minor.className = "tl-timeaxis-minor"))
          : ((this._el.major.className =
              "tl-timeaxis-major tl-timeaxis-animate"),
            (this._el.minor.className =
              "tl-timeaxis-minor tl-timeaxis-animate")),
          this._positionTickArray(this.major_ticks, t, e),
          this._positionTickArray(this.minor_ticks, t, e);
      }
      _positionTickArray(t, e, i) {
        if (t[1] && t[0]) {
          var n = 1;
          e.getPosition(t[1].date.getMillisecond()) -
            e.getPosition(t[0].date.getMillisecond()) <
            i && (n = Math.round(i / e.getPixelsPerTick()));
          for (var r = 1, a = 0; a < t.length; a++) {
            var o = t[a];
            (o.tick.style.left = e.getPosition(o.date.getMillisecond()) + "px"),
              (o.tick_text.innerHTML = o.display_date),
              n > 1
                ? r >= n
                  ? ((r = 1),
                    (o.tick_text.style.opacity = 1),
                    (o.tick.className = "tl-timeaxis-tick"))
                  : (r++,
                    (o.tick_text.style.opacity = 0),
                    (o.tick.className =
                      "tl-timeaxis-tick tl-timeaxis-tick-hidden"))
                : ((o.tick_text.style.opacity = 1),
                  (o.tick.className = "tl-timeaxis-tick"));
          }
        }
      }
      _initLayout() {
        (this._el.content_container = T(
          "div",
          "tl-timeaxis-content-container",
          this._el.container
        )),
          (this._el.major = T(
            "div",
            "tl-timeaxis-major",
            this._el.content_container
          )),
          (this._el.minor = T(
            "div",
            "tl-timeaxis-minor",
            this._el.content_container
          )),
          this.onLoaded();
      }
      _initEvents() {}
      _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }
    H(ce, ht, dt, zt);
    class ue {
      constructor(t, e, i) {
        (this._el = {
          container: {},
          content_container: {},
          content: {},
          headline: {},
          date: {},
        }),
          (this.options = { title: !1 }),
          (this.data = { unique_id: "", headline: "headline", text: "text" }),
          (function (t, e) {
            (t.data = N({}, t.data, e)),
              "" === t.data.unique_id && (t.data.unique_id = B(6));
          })(this, t),
          C(this.options, e),
          (this._el.container = T("div", "tl-text")),
          (this._el.container.id = this.data.unique_id),
          this._initLayout(),
          i && i.appendChild(this._el.container);
      }
      show() {}
      hide() {}
      addTo(t) {
        t.appendChild(this._el.container);
      }
      removeFrom(t) {
        t.removeChild(this._el.container);
      }
      headlineHeight() {
        return this._el.headline.offsetHeight + 40;
      }
      addDateText(t) {
        this._el.date.innerHTML = t;
      }
      onLoaded() {
        this.fire("loaded", this.data);
      }
      onAdd() {
        this.fire("added", this.data);
      }
      onRemove() {
        this.fire("removed", this.data);
      }
      _initLayout() {
        if (
          ((this._el.content_container = T(
            "div",
            "tl-text-content-container",
            this._el.container
          )),
          (this._el.date = T(
            "h3",
            "tl-headline-date",
            this._el.content_container
          )),
          "" != this.data.headline)
        ) {
          var t = "tl-headline";
          this.options.title && (t = "tl-headline tl-headline-title"),
            (this._el.headline = T("h2", t, this._el.content_container)),
            (this._el.headline.innerHTML = this.data.headline);
        }
        if ("" != this.data.text) {
          var e = "";
          (e += (i =
            1 == this.options.autolink
              ? Y(this.data.text)
              : this.data.text).match(/<p>[\s\S]*?<\/p>/)
            ? i
            : "<p>" + i + "</p>"),
            (this._el.content = T(
              "div",
              "tl-text-content",
              this._el.content_container
            )),
            (this._el.content.innerHTML = e);
        }
        var i;
        this.onLoaded();
      }
    }
    H(ue, ht);
    class de {
      constructor(t, e, i) {
        i && this.setLanguage(i),
          (this._el = {
            container: {},
            content_container: {},
            content: {},
            content_item: {},
            content_link: {},
            caption: null,
            credit: null,
            parent: {},
            link: null,
          }),
          (this.player = null),
          (this.timer = null),
          (this.load_timer = null),
          (this.message = null),
          (this.media_id = null),
          (this._state = { loaded: !1, show_meta: !1, media_loaded: !1 }),
          (this.data = {
            unique_id: null,
            url: null,
            credit: null,
            caption: null,
            credit_alternate: null,
            caption_alternate: null,
            link: null,
            link_target: null,
          }),
          (this.options = {
            api_key_flickr: "bd3a7c45ddd52f3101825d41563a6125",
            api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
            api_key_embedly: "",
            credit_height: 0,
            caption_height: 0,
            background: 0,
          }),
          (this.animator = {}),
          C(this.options, e),
          C(this.data, t),
          this.options.background ||
            ((this._el.container = T("div", "tl-media")),
            this.data.unique_id &&
              (this._el.container.id = this.data.unique_id),
            this._initLayout());
      }
      loadMedia() {
        var t = this;
        if (!this._state.loaded)
          try {
            this.load_timer = setTimeout(function () {
              t.loadingMessage(), t._loadMedia(), t._updateDisplay();
            }, 1200);
          } catch (t) {
            trace("Error loading media for ", this._media), trace(t);
          }
      }
      _updateMessage(t) {
        this.message && this.message.updateMessage(t);
      }
      loadingMessage() {
        this._updateMessage(this._("loading") + " " + this.options.media_name);
      }
      errorMessage(t) {
        (t = t ? this._("error") + ": " + t : this._("error")),
          this._updateMessage(t);
      }
      updateMediaDisplay(t) {
        this._state.loaded &&
          !this.options.background &&
          ((this._el.content_item.style.maxHeight = c
            ? this.options.height / 2 + "px"
            : this.options.height -
              this.options.credit_height -
              this.options.caption_height -
              30 +
              "px"),
          (this._el.container.style.maxWidth = this.options.width + "px"),
          p &&
            (this._el.content_item.offsetWidth,
            this._el.content_item.offsetHeight),
          this._updateMediaDisplay(t),
          this._state.media_loaded &&
            (this._el.credit &&
              (this._el.credit.style.width =
                this._el.content_item.offsetWidth + "px"),
            this._el.caption &&
              (this._el.caption.style.width =
                this._el.content_item.offsetWidth + "px")));
      }
      _loadMedia() {
        this.onLoaded();
      }
      _updateMediaDisplay(t) {
        p &&
          ((this._el.content_item.style.maxWidth = this.options.width + "px"),
          (this._el.content_item.style.width = "auto"));
      }
      _getMeta() {}
      _getImageURL(t, e) {
        return "";
      }
      show() {}
      hide() {}
      addTo(t) {
        t.appendChild(this._el.container), this.onAdd();
      }
      removeFrom(t) {
        t.removeChild(this._el.container), this.onRemove();
      }
      getImageURL(t, e) {
        return this._getImageURL(t, e);
      }
      updateDisplay(t, e, i) {
        this._updateDisplay(t, e, i);
      }
      stopMedia() {
        this._stopMedia();
      }
      loadErrorDisplay(t) {
        try {
          this._el.content.removeChild(this._el.content_item);
        } catch (t) {}
        (this._el.content_item = T(
          "div",
          "tl-media-item tl-media-loaderror",
          this._el.content
        )),
          (this._el.content_item.innerHTML =
            "<div class='tl-icon-" +
            this.options.media_type +
            "'></div><p>" +
            t +
            "</p>"),
          this.onLoaded(!0);
      }
      onLoaded(t) {
        (this._state.loaded = !0),
          this.fire("loaded", this.data),
          this.message && this.message.hide(),
          t || this.options.background || this.showMeta(),
          this.updateDisplay();
      }
      onMediaLoaded(t) {
        (this._state.media_loaded = !0),
          this.fire("media_loaded", this.data),
          this._el.credit &&
            (this._el.credit.style.width =
              this._el.content_item.offsetWidth + "px"),
          this._el.caption &&
            (this._el.caption.style.width =
              this._el.content_item.offsetWidth + "px");
      }
      showMeta(t, e) {
        (this._state.show_meta = !0),
          this.data.credit &&
            "" != this.data.credit &&
            ((this._el.credit = T(
              "div",
              "tl-credit",
              this._el.content_container
            )),
            (this._el.credit.innerHTML =
              1 == this.options.autolink
                ? Y(this.data.credit)
                : this.data.credit),
            (this.options.credit_height = this._el.credit.offsetHeight)),
          this.data.caption &&
            "" != this.data.caption &&
            ((this._el.caption = T(
              "div",
              "tl-caption",
              this._el.content_container
            )),
            (this._el.caption.innerHTML =
              1 == this.options.autolink
                ? Y(this.data.caption)
                : this.data.caption),
            (this.options.caption_height = this._el.caption.offsetHeight)),
          (this.data.caption && this.data.credit) || this.getMeta();
      }
      getMeta() {
        this._getMeta();
      }
      updateMeta() {
        !this.data.credit &&
          this.data.credit_alternate &&
          ((this._el.credit = T(
            "div",
            "tl-credit",
            this._el.content_container
          )),
          (this._el.credit.innerHTML = this.data.credit_alternate),
          (this.options.credit_height = this._el.credit.offsetHeight)),
          !this.data.caption &&
            this.data.caption_alternate &&
            ((this._el.caption = T(
              "div",
              "tl-caption",
              this._el.content_container
            )),
            (this._el.caption.innerHTML = this.data.caption_alternate),
            (this.options.caption_height = this._el.caption.offsetHeight)),
          this.updateDisplay();
      }
      onAdd() {
        this.fire("added", this.data);
      }
      onRemove() {
        this.fire("removed", this.data);
      }
      _initLayout() {
        (this.message = new Rt(
          this._el.container,
          this.options,
          this.getLanguage()
        )),
          (this._el.content_container = T(
            "div",
            "tl-media-content-container",
            this._el.container
          )),
          this.data.link && "" != this.data.link
            ? ((this._el.link = T(
                "a",
                "tl-media-link",
                this._el.content_container
              )),
              (this._el.link.href = this.data.link),
              this.data.link_target && "" != this.data.link_target
                ? (this._el.link.target = this.data.link_target)
                : (this._el.link.target = "_blank"),
              "_blank" == this._el.link.target &&
                this._el.link.setAttribute("rel", "noopener"),
              (this._el.content = T("div", "tl-media-content", this._el.link)))
            : (this._el.content = T(
                "div",
                "tl-media-content",
                this._el.content_container
              ));
      }
      _updateDisplay(t, e, i) {
        t && (this.options.width = t),
          e && (this.options.height = e),
          i && (this.options.layout = i),
          this._el.credit &&
            (this.options.credit_height = this._el.credit.offsetHeight),
          this._el.caption &&
            (this.options.caption_height = this._el.caption.offsetHeight + 5),
          this.updateMediaDisplay(this.options.layout);
      }
      domCreate(...t) {
        return T(...t);
      }
      _stopMedia() {}
    }
    H(de, ht, zt);
    class fe extends de {
      _loadMedia() {
        this.loadingMessage(),
          this.options.background || this.createMedia(),
          this.onLoaded();
      }
      createMedia() {
        var t = this,
          e = "tl-media-item tl-media-image tl-media-shadow";
        (this.data.url.match(/.png(\?.*)?$/) ||
          this.data.url.match(/.svg(\?.*)?$/)) &&
          (e = "tl-media-item tl-media-image"),
          this.data.link
            ? ((this._el.content_link = this.domCreate(
                "a",
                "",
                this._el.content
              )),
              (this._el.content_link.href = this.data.link),
              (this._el.content_link.target = "_blank"),
              this._el.content_link.setAttribute("rel", "noopener"),
              (this._el.content_item = this.domCreate(
                "img",
                e,
                this._el.content_link
              )))
            : (this._el.content_item = this.domCreate(
                "img",
                e,
                this._el.content
              )),
          this.data.alt
            ? (this._el.content_item.alt = this.data.alt)
            : this.data.caption &&
              (this._el.content_item.alt = G(this.data.caption)),
          this.data.title
            ? (this._el.content_item.title = this.data.title)
            : this.data.caption &&
              (this._el.content_item.title = G(this.data.caption)),
          this._el.content_item.addEventListener("load", function (e) {
            t.onMediaLoaded();
          }),
          (this._el.content_item.src = this.getImageURL());
      }
      getImageURL(t, e) {
        return V(this.data.url);
      }
      _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
    }
    function pe(t, e, i, n) {
      me.js(t, e, i, n);
    }
    function _e(t, e, i, n) {
      me.css(t, e, i, n);
    }
    let me = new (class {
      constructor(t) {
        (this.doc = t),
          (this.pending = {}),
          (this.queue = { css: [], js: [] }),
          (this.styleSheets = t.styleSheets),
          (this.env = this.getEnv()),
          (this.head =
            this.doc.head || this.doc.getElementsByTagName("head")[0]),
          (this.pollCount = 0);
      }
      createNode(t, e) {
        var i,
          n = this.doc.createElement(t);
        for (i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
        return n;
      }
      finish(t) {
        var e,
          i,
          n = this.pending[t];
        n &&
          ((e = n.callback),
          (i = n.urls).shift(),
          (this.pollCount = 0),
          i.length ||
            (e && e.call(n.context, n.obj),
            (this.pending[t] = null),
            this.queue[t].length && this.load(t)));
      }
      getEnv() {
        var t = navigator.userAgent,
          e = { async: !0 === this.doc.createElement("script").async };
        return (
          (e.webkit = /AppleWebKit\//.test(t)) ||
            (e.ie = /MSIE/.test(t)) ||
            (e.opera = /Opera/.test(t)) ||
            (e.gecko = /Gecko\//.test(t)) ||
            (e.unknown = !0),
          e
        );
      }
      load(t, e, i, n, r) {
        var a,
          o,
          s,
          l,
          h,
          c,
          u = function () {
            this.finish(t);
          }.bind(this),
          d = "css" === t,
          f = [];
        if (e)
          if (
            ((e = "string" == typeof e ? [e] : e.concat()),
            d || this.env.async || this.env.gecko || this.env.opera)
          )
            this.queue[t].push({ urls: e, callback: i, obj: n, context: r });
          else
            for (a = 0, o = e.length; a < o; ++a)
              this.queue[t].push({
                urls: [e[a]],
                callback: a === o - 1 ? i : null,
                obj: n,
                context: r,
              });
        if (!this.pending[t] && (l = this.pending[t] = this.queue[t].shift())) {
          for (a = 0, o = (h = l.urls).length; a < o; ++a)
            (c = h[a]),
              d
                ? (s = this.env.gecko
                    ? this.createNode("style")
                    : this.createNode("link", { href: c, rel: "stylesheet" }))
                : ((s = this.createNode("script", { src: c })).async = !1),
              (s.className = "lazyload"),
              s.setAttribute("charset", "utf-8"),
              this.env.ie && !d
                ? (s.onreadystatechange = function () {
                    /loaded|complete/.test(s.readyState) &&
                      ((s.onreadystatechange = null), u());
                  })
                : d && (this.env.gecko || this.env.webkit)
                ? this.env.webkit
                  ? ((l.urls[a] = s.href), this.pollWebKit())
                  : ((s.innerHTML = '@import "' + c + '";'), this.pollGecko(s))
                : (s.onload = s.onerror = u),
              f.push(s);
          for (a = 0, o = f.length; a < o; ++a) this.head.appendChild(f[a]);
        }
      }
      pollGecko(t) {
        var e;
        try {
          e = !!t.sheet.cssRules;
        } catch (n) {
          if (((this.pollCount += 1), this.pollCount < 200)) {
            var i = this;
            setTimeout(function () {
              i.pollGecko(t);
            }, 50);
          } else e && this.finish("css");
          return;
        }
        this.finish("css");
      }
      pollWebKit() {
        var t,
          e = this.pending.css;
        if (e) {
          for (t = this.styleSheets.length; --t >= 0; )
            if (this.styleSheets[t].href === e.urls[0]) {
              this.finish("css");
              break;
            }
          (this.pollCount += 1),
            e &&
              (this.pollCount < 200
                ? setTimeout(this.pollWebKit.bind(this), 50)
                : this.finish("css"));
        }
      }
      css(t, e, i, n) {
        this.load("css", t, e, i, n);
      }
      js(t, e, i, n) {
        this.load("js", t, e, i, n);
      }
    })(document);
    class ge extends de {
      _loadMedia() {
        var t,
          e = this;
        (this.youtube_loaded = !1),
          (this._el.content_item = this.domCreate(
            "div",
            "tl-media-item tl-media-youtube tl-media-shadow",
            this._el.content
          )),
          (this._el.content_item.id = B(7)),
          (t = (function (t) {
            var e,
              i,
              n,
              r = [];
            (e = t.toString()).match("&#038;")
              ? (e = e.replace("&#038;", "&"))
              : e.match("&#38;")
              ? (e = e.replace("&#38;", "&"))
              : e.match("&amp;") && (e = e.replace("&amp;", "&")),
              (n = e.slice(e.indexOf("?") + 1).split("&"));
            for (var a = 0; a < n.length; a++)
              (i = n[a].split("=")), r.push(i[0]), (r[i[0]] = i[1]);
            return r;
          })(this.data.url)),
          (this.media_id = {}),
          this.data.url.match("v=")
            ? (this.media_id.id = t.v)
            : this.data.url.match("/embed/")
            ? (this.media_id.id = this.data.url
                .split("embed/")[1]
                .split(/[?&]/)[0])
            : this.data.url.match(/v\/|v=|youtu\.be\//)
            ? (this.media_id.id = this.data.url
                .split(/v\/|v=|youtu\.be\//)[1]
                .split(/[?&]/)[0])
            : O("YOUTUBE IN URL BUT NOT A VALID VIDEO"),
          this.data.url.match("start=")
            ? (this.media_id.start = et(this.data.url.split("start=")[1]))
            : this.data.url.match("t=") &&
              (this.media_id.start = et(this.data.url.split("t=")[1])),
          this.data.url.match("end=") &&
            (this.media_id.end = et(this.data.url.split("end=")[1])),
          (this.media_id.hd = Boolean(void 0 !== t.hd)),
          pe("https://www.youtube.com/iframe_api", function () {
            e.createMedia();
          });
      }
      _updateMediaDisplay() {
        (this._el.content_item.style.height =
          X({ w: this.options.width }) + "px"),
          (this._el.content_item.style.width = this.options.width + "px");
      }
      _stopMedia() {
        if (this.youtube_loaded)
          try {
            this.player.getPlayerState() == YT.PlayerState.PLAYING &&
              this.player.pauseVideo();
          } catch (t) {
            O(t);
          }
      }
      createMedia() {
        var t = this;
        clearTimeout(this.timer),
          "undefined" != typeof YT && void 0 !== YT.Player
            ? (this.player = new YT.Player(this._el.content_item.id, {
                playerVars: {
                  enablejsapi: 1,
                  color: "white",
                  controls: 1,
                  start: this.media_id.start,
                  end: this.media_id.end,
                  fs: 1,
                },
                videoId: this.media_id.id,
                events: {
                  onReady: function () {
                    t.onPlayerReady(), t.onLoaded();
                  },
                  onStateChange: t.onStateChange,
                },
              }))
            : (this.timer = setTimeout(function () {
                t.createMedia();
              }, 1e3));
      }
      onPlayerReady(t) {
        (this.youtube_loaded = !0),
          (this._el.content_item = document.getElementById(
            this._el.content_item.id
          )),
          this.onMediaLoaded();
      }
      onStateChange(t) {
        t.data == YT.PlayerState.ENDED &&
          (t.target.seekTo(0), t.target.pauseVideo());
      }
    }
    class ve extends de {
      _loadMedia() {
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-map tl-media-shadow",
          this._el.content
        )),
          (this.media_id = this.data.url),
          (this.mapframe = this.domCreate("iframe", "", this._el.content_item)),
          (this.mapframe.width = "100%"),
          (this.mapframe.height = "100%"),
          (this.mapframe.frameBorder = "0"),
          (this.mapframe.src = this.makeGoogleMapsEmbedURL(
            this.media_id,
            this.options.api_key_googlemaps
          )),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        if (this._state.loaded) {
          var t = J({ w: this._el.content_item.offsetWidth });
          this._el.content_item.style.height = t.h + "px";
        }
      }
      makeGoogleMapsEmbedURL(t, e) {
        var i = !1;
        var n = {
            view: ["center"],
            place: ["q", "center"],
            directions: ["origin", "destination", "center"],
            search: ["q", "center"],
            streetview: ["fov", "heading", "pitch"],
          },
          r = /(https:\/\/.+google.+?\/maps)/,
          a = /@([-\d.]+),([-\d.]+)/,
          o = /([\w\W]+)/,
          s = /,((?:[-\d.]+[zmayht],?)*)/,
          l = {
            view: new RegExp(r.source + "/" + a.source + s.source),
            place: new RegExp(
              r.source + "/place/" + o.source + "/" + a.source + s.source
            ),
            directions: new RegExp(
              r.source +
                "/dir/" +
                o.source +
                "/" +
                o.source +
                "/" +
                a.source +
                s.source
            ),
            search: new RegExp(
              r.source + "/search/" + o.source + "/" + a.source + s.source
            ),
          };
        return (function (t) {
          function r(e, r) {
            if ("z" == e.slice(-1)) r.zoom = e;
            else if ("m" == e.slice(-1))
              (r.zoom = 14), (r.maptype = "satellite");
            else if ("t" == e.slice(-1)) {
              if (((i = !0), "place" == a))
                var o = t.match(l.place)[3] + "," + t.match(l.place)[4];
              else {
                o = r.center;
                delete r.center;
              }
              ((r = {}).location = o), (streetview_params = e.split(","));
              for (let t in n.streetview) {
                var s = parseInt(t) + 1;
                "pitch" == n.streetview[t] && "90t" == streetview_params[s]
                  ? (r[n.streetview[t]] = 0)
                  : (r[n.streetview[t]] = streetview_params[s].slice(0, -1));
              }
            }
            return r;
          }
          let a = "view";
          return (
            t.match(l.place)
              ? (a = "place")
              : t.match(l.directions)
              ? (a = "directions")
              : t.match(l.search) && (a = "search"),
            (function (t, a) {
              var o = {},
                s = a[1],
                l = a[a.length - 1];
              for (let e in n[t]) {
                var h = parseInt(e) + 2;
                "center" == n[t][e]
                  ? (o[n[t][e]] = a[h] + "," + a[++h])
                  : (o[n[t][e]] = a[h]);
              }
              return (
                ((o = r(l, o)).key = e),
                1 == i && (t = "streetview"),
                s +
                  "/embed/v1/" +
                  t +
                  (function (t) {
                    var e = [];
                    for (var i in t)
                      t.hasOwnProperty(i) && e.push(i + "=" + t[i]);
                    return "?" + e.join("&");
                  })(o)
              );
            })(a, t.match(l[a]))
          );
        })(t);
      }
    }
    class ye extends de {
      constructor(t, e, i) {
        super(t, e, i), (this.blockquote = Wt.a.sanitize(this.data.url));
      }
      _loadMedia() {
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-blockquote",
          this._el.content
        )),
          (this._el.content_container.className =
            "tl-media-content-container tl-media-content-container-text"),
          (this._el.content_item.innerHTML = this.blockquote),
          this.onLoaded();
      }
      updateMediaDisplay() {}
    }
    class we extends de {
      _loadMedia() {
        var t,
          e = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-wikipedia",
          this._el.content
        )),
          (this._el.content_container.className =
            "tl-media-content-container tl-media-content-container-text"),
          (this.media_id = this.data.url
            .split("wiki/")[1]
            .split("#")[0]
            .replace("_", " ")),
          (this.media_id = this.media_id.replace(" ", "%20")),
          (t =
            "https://" +
            this.data.url.split("//")[1].split(".wikipedia")[0] +
            ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" +
            this.media_id +
            "&exintro=1&format=json&callback=?"),
          vt({
            type: "GET",
            url: t,
            dataType: "json",
            success: function (t) {
              e.createMedia(t);
            },
            error: function (t, i) {
              var n = "";
              (n +=
                e._("wikipedia_load_err") + "<br/>" + e.media_id + "<br/>" + i),
                e.loadErrorDisplay(n);
            },
          });
      }
      createMedia(t) {
        var e = "";
        if (t.query) {
          var i = "";
          ((e = {
            entry: {},
            title: "",
            text: "",
            extract: "",
            paragraphs: 1,
            page_image: "",
            text_array: [],
          }).entry = (function (t, e) {
            if (void 0 !== t) {
              var i = 0;
              for (var n in t) {
                if (e === i) return t[n];
                i++;
              }
              return "";
            }
            return "";
          })(t.query.pages, 0)),
            (e.extract = e.entry.extract),
            (e.title = e.entry.title),
            (e.page_image = e.entry.thumbnail),
            e.extract.match("<p>")
              ? (e.text_array = e.extract.split("<p>"))
              : e.text_array.push(e.extract);
          for (var n = 0; n < e.text_array.length; n++)
            n + 1 <= e.paragraphs &&
              n + 1 < e.text_array.length &&
              (e.text += "<p>" + e.text_array[n + 1]);
          (i += "<span class='tl-icon-wikipedia'></span>"),
            (i +=
              "<div class='tl-wikipedia-title'><h4><a href='" +
              this.data.url +
              "' target='_blank' rel='noopener'>" +
              e.title +
              "</a></h4>"),
            (i +=
              "<span class='tl-wikipedia-source'>" +
              this._("wikipedia") +
              "</span></div>"),
            e.page_image,
            (i += e.text),
            e.extract.match("REDIRECT") ||
              ((this._el.content_item.innerHTML = i), this.onLoaded());
        }
      }
      updateMediaDisplay() {}
    }
    class be extends de {
      _loadMedia() {
        var t,
          e = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow",
          this._el.content
        )),
          (this.media_id = this.data.url),
          (t =
            "https://soundcloud.com/oembed?url=" +
            this.media_id +
            "&format=js&callback=?"),
          gt(t, function (t) {
            pe("https://w.soundcloud.com/player/api.js", function () {
              e.createMedia(t);
            });
          });
      }
      createMedia(t) {
        (this._el.content_item.innerHTML = t.html),
          (self.widget = SC.Widget(
            this._el.content_item.querySelector("iframe")
          )),
          (this.soundCloudCreated = !0),
          this.onLoaded();
      }
      _stopMedia() {
        this.soundCloudCreated && self.widget.pause();
      }
    }
    class xe extends de {
      _loadMedia() {
        var t,
          e = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow",
          this._el.content
        )),
          (this.media_id = this.data.url
            .split(/video\/|\/\/vimeo\.com\//)[1]
            .split(/[?&]/)[0]);
        var i = null;
        this.data.url.match(/#t=([^&]+).*/) &&
          (i = this.data.url.match(/#t=([^&]+).*/)[1]),
          (t =
            "https://player.vimeo.com/video/" +
            this.media_id +
            "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff"),
          i && (t = t += "&amp;#t=" + i),
          (this.player = this.domCreate("iframe", "", this._el.content_item)),
          this.player.addEventListener("load", function (t) {
            e.onMediaLoaded();
          }),
          (this.player.width = "100%"),
          (this.player.height = "100%"),
          (this.player.frameBorder = "0"),
          (this.player.src = t),
          this.player.setAttribute("allowfullscreen", ""),
          this.player.setAttribute("webkitallowfullscreen", ""),
          this.player.setAttribute("mozallowfullscreen", ""),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height =
          X({ w: this._el.content_item.offsetWidth }) + "px";
      }
      _stopMedia() {
        try {
          this.player.contentWindow.postMessage(
            JSON.stringify({ method: "pause" }),
            "https://player.vimeo.com"
          );
        } catch (t) {
          O(t);
        }
      }
    }
    class ke extends de {
      _loadMedia() {
        var t;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-dailymotion",
          this._el.content
        )),
          this.data.url.match("video")
            ? (this.media_id = this.data.url
                .split("video/")[1]
                .split(/[?&]/)[0])
            : (this.media_id = this.data.url
                .split("embed/")[1]
                .split(/[?&]/)[0]),
          (t =
            "https://www.dailymotion.com/embed/video/" +
            this.media_id +
            "?api=postMessage"),
          (this._el.content_item.innerHTML =
            "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" +
            t +
            "'></iframe>"),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._state.loaded &&
          (this._el.content_item.style.height =
            X({ w: this._el.content_item.offsetWidth }) + "px");
      }
      _stopMedia() {
        this._state.loaded &&
          this._el.content_item
            .querySelector("iframe")
            .contentWindow.postMessage(
              '{"command":"pause","parameters":[]}',
              "*"
            );
      }
    }
    class Te extends de {
      _loadMedia() {
        var t;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow",
          this._el.content
        )),
          (this.media_id = this.data.url.split("vine.co/v/")[1]),
          (t = "https://vine.co/v/" + this.media_id + "/embed/simple"),
          (this._el.content_item.innerHTML =
            "<iframe frameborder='0' width='100%' height='100%' src='" +
            t +
            "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'></script>"),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        var t = J({
          w: this._el.content_item.offsetWidth,
          h: this.options.height,
        });
        this._el.content_item.style.height = t.h + "px";
      }
      _stopMedia() {
        this._el.content_item
          .querySelector("iframe")
          .contentWindow.postMessage("pause", "*");
      }
    }
    class Me extends de {
      _loadMedia() {
        var t,
          e = this;
        if (
          ((this._el.content_item = this.domCreate(
            "div",
            "tl-media-twitter",
            this._el.content
          )),
          (this._el.content_container.className =
            "tl-media-content-container tl-media-content-container-text"),
          this.data.url.match("^(https?:)?/*(www.)?twitter.com"))
        )
          this.data.url.match("status/")
            ? (this.media_id = this.data.url.split("status/")[1])
            : this.data.url.match("statuses/")
            ? (this.media_id = this.data.url.split("statuses/")[1])
            : (this.media_id = "");
        else if (
          this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")
        ) {
          var i = this.data.url.match(/(status|statuses)\/(\d+)/);
          if (!(i && i.length > 2))
            return void e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
          this.media_id = i[2];
        }
        (t =
          "https://api.twitter.com/1/statuses/oembed.json?id=" +
          this.media_id +
          "&omit_script=true&include_entities=true&callback=?"),
          vt({
            type: "GET",
            url: t,
            dataType: "json",
            success: function (t) {
              e.createMedia(t);
            },
            error: function (t, i) {
              var n = "";
              (n +=
                e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i),
                e.loadErrorDisplay(n);
            },
          });
      }
      createMedia(t) {
        var e,
          i,
          n,
          r = "",
          a = "",
          o = "",
          s = this;
        (a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>"),
          (e = t.author_url.split("twitter.com/")[1]),
          (i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split(
            '">'
          )[0]),
          (n = o.split('">')[1].split("</a>")[0]),
          (a = a.replace(
            /<a href/gi,
            '<a target="_blank" rel="noopener" href'
          )).includes("pic.twitter.com")
            ? (pe("https://platform.twitter.com/widgets.js", function () {
                twttr.widgets.createTweet(s.media_id, s._el.content_item, {
                  conversation: "none",
                  linkColor: "#cc0000",
                  theme: "light",
                });
              }),
              this.onLoaded())
            : ((r += a),
              (r += "<div class='vcard'>"),
              (r +=
                "<a href='" +
                i +
                "' class='twitter-date' rel='noopener' target='_blank'>" +
                n +
                "</a>"),
              (r += "<img src='' class='tl-media-item tl-media-image'></a>"),
              (r += "<div class='author'>"),
              (r +=
                "<a class='screen-name url' href='" +
                t.author_url +
                "' rel='noopener' target='_blank'>"),
              (r += "<span class='avatar'></span>"),
              (r +=
                "<span class='fn'>" +
                t.author_name +
                " <span class='tl-icon-twitter'></span></span>"),
              (r +=
                "<span class='nickname'>@" +
                e +
                "<span class='thumbnail-inline'></span></span>"),
              (r += "</a>"),
              (r += "</div>"),
              (r += "</div>"),
              (this._el.content_item.innerHTML = r),
              this.onLoaded());
      }
      updateMediaDisplay() {}
      _updateMediaDisplay() {}
    }
    class Ee extends de {
      _loadMedia() {
        var t,
          e = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-twitter",
          this._el.content
        )),
          (this._el.content_container.className =
            "tl-media-content-container tl-media-content-container-text");
        var i,
          n,
          r,
          a,
          o,
          s,
          l = this.data.url.match(/(status|statuses)\/(\d+)/);
        l && l.length > 2
          ? ((this.media_id = l[2]),
            (t =
              "https://api.twitter.com/1/statuses/oembed.json?id=" +
              this.media_id +
              "&omit_script=true&include_entities=true&callback=?"),
            (window.twttr =
              ((i = document),
              (n = "script"),
              (r = "twitter-wjs"),
              (o = i.getElementsByTagName(n)[0]),
              (s = window.twttr || {}),
              i.getElementById(r) ||
                (((a = i.createElement(n)).id = r),
                (a.src = "https://platform.twitter.com/widgets.js"),
                o.parentNode.insertBefore(a, o),
                (s._e = []),
                (s.ready = function (t) {
                  s._e.push(t);
                })),
              s)),
            vt({
              type: "GET",
              url: t,
              dataType: "json",
              success(t) {
                e.createMedia(t);
              },
              error: function (t, i) {
                var n = "";
                (n +=
                  e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i),
                  e.loadErrorDisplay(n);
              },
            }))
          : e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
      }
      createMedia(t) {
        var e,
          i,
          n,
          r = "",
          a = "",
          o = "";
        (a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>"),
          (e = t.author_url.split("twitter.com/")[1]),
          (i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split(
            '">'
          )[0]),
          (n = o.split('">')[1].split("</a>")[0]),
          (a = a.replace(
            /<a href/gi,
            '<a target="_blank" rel="noopener" href'
          ));
        let s = this.media_id;
        a.includes("pic.twitter.com")
          ? (twttr.ready(function (t) {
              r = document.getElementsByClassName("tl-media-twitter")[0];
              var e = String(s);
              twttr.widgets
                .createTweet(e, r, {
                  conversation: "none",
                  linkColor: "#cc0000",
                  theme: "light",
                })
                .then(function (t) {
                  this.onLoaded();
                });
            }),
            (this._el.content_item.innerHTML = r),
            this.onLoaded())
          : ((r += a),
            (r += "<div class='vcard'>"),
            (r +=
              "<a href='" +
              i +
              "' class='twitter-date' rel='noopener' target='_blank'>" +
              n +
              "</a>"),
            (r += "<div class='author'>"),
            (r +=
              "<a class='screen-name url' href='" +
              t.author_url +
              "' rel='noopener' target='_blank'>"),
            (r += "<span class='avatar'></span>"),
            (r +=
              "<span class='fn'>" +
              t.author_name +
              " <span class='tl-icon-twitter'></span></span>"),
            (r +=
              "<span class='nickname'>@" +
              e +
              "<span class='thumbnail-inline'></span></span>"),
            (r += "</a>"),
            (r += "</div>"),
            (r += "</div>"),
            (this._el.content_item.innerHTML = r),
            this.onLoaded());
      }
      updateMediaDisplay() {}
      _updateMediaDisplay() {}
    }
    class Le extends de {
      _loadMedia() {
        var t,
          e = this;
        try {
          this.establishMediaID(),
            (t =
              "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" +
              this.options.api_key_flickr +
              "&photo_id=" +
              this.media_id +
              "&format=json&jsoncallback=?"),
            gt(t, function (t) {
              "ok" == t.stat
                ? ((e.sizes = t.sizes.size),
                  e.options.background || e.createMedia(),
                  e.onLoaded())
                : e.loadErrorDisplay(e._("flickr_notfound_err"));
            });
        } catch (t) {
          e.loadErrorDisplay(e._(t.message_key));
        }
      }
      establishMediaID() {
        if (this.data.url.match(/flic.kr\/.+/i)) {
          var t = this.data.url.split("/").slice(-1)[0];
          this.media_id = K.decode(t);
        } else {
          var e = this.data.url.indexOf("flickr.com/photos/");
          if (-1 == e) throw new D("flickr_invalidurl_err");
          var i = e + "flickr.com/photos/".length;
          this.media_id = this.data.url.substr(i).split("/")[1];
        }
      }
      createMedia() {
        var t = this;
        (this._el.content_link = this.domCreate("a", "", this._el.content)),
          (this._el.content_link.href = this.data.url),
          (this._el.content_link.target = "_blank"),
          this._el.content_link.setAttribute("rel", "noopener"),
          (this._el.content_item = this.domCreate(
            "img",
            "tl-media-item tl-media-image tl-media-flickr tl-media-shadow",
            this._el.content_link
          )),
          this.data.alt
            ? (this._el.content_item.alt = this.data.alt)
            : this.data.caption &&
              (this._el.content_item.alt = G(this.data.caption)),
          this.data.title
            ? (this._el.content_item.title = this.data.title)
            : this.data.caption &&
              (this._el.content_item.title = G(this.data.caption)),
          this._el.content_item.addEventListener("load", function (e) {
            t.onMediaLoaded();
          }),
          (this._el.content_item.src = this.getImageURL(
            this.options.width,
            this.options.height
          ));
      }
      getImageURL(t, e) {
        for (
          var i = this.size_label(e),
            n = this.sizes[this.sizes.length - 2].source,
            r = 0;
          r < this.sizes.length;
          r++
        )
          this.sizes[r].label == i && (n = this.sizes[r].source);
        return n;
      }
      _getMeta() {
        var t,
          e = this;
        (t =
          "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
          this.options.api_key_flickr +
          "&photo_id=" +
          this.media_id +
          "&format=json&jsoncallback=?"),
          gt(t, function (t) {
            (e.data.credit_alternate =
              "<a href='" +
              e.data.url +
              "' target='_blank' rel='noopener'>" +
              t.photo.owner.realname +
              "</a>"),
              (e.data.caption_alternate =
                t.photo.title._content + " " + t.photo.description._content),
              e.updateMeta();
          });
      }
      size_label(t) {
        return t <= 75
          ? t <= 0
            ? "Large"
            : "Thumbnail"
          : t <= 180
          ? "Small"
          : t <= 240
          ? "Small 320"
          : t <= 375
          ? "Medium"
          : t <= 480
          ? "Medium 640"
          : "Large";
      }
    }
    class Se extends de {
      _loadMedia() {
        var t = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-documentcloud tl-media-shadow",
          this._el.content
        )),
          (this._el.content_item.id = B(7)),
          this.data.url.match(/\.html$/)
            ? (this.data.url = this._transformURL(this.data.url))
            : this.data.url.match(/.(json|js)$/) ||
              O("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"),
          pe(
            [
              "https://assets.documentcloud.org/viewer/loader.js",
              "https://assets.documentcloud.org/viewer/viewer.js",
            ],
            function () {
              t.createMedia();
            }
          );
      }
      _transformURL(t) {
        return t.replace(/(.*)\.html$/, "$1.js");
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
      createMedia() {
        DV.load(this.data.url, {
          container: "#" + this._el.content_item.id,
          showSidebar: !1,
        }),
          this.onLoaded();
      }
    }
    const De =
      "https://graph.facebook.com/v8.0/instagram_oembed?access_token=704270473831239|830b21071290df4f81a35c56abbea096&fields=html,thumbnail_url,author_name&url=";
    function Ae(t) {
      (this.oembed_response = t),
        (this._el.content_link = this.domCreate("a", "", this._el.content)),
        (this._el.content_link.href = this.data.url),
        (this._el.content_link.target = "_blank"),
        this._el.content_link.setAttribute("rel", "noopener"),
        (this._el.content_item = this.domCreate(
          "img",
          "tl-media-item tl-media-image tl-media-instagram tl-media-shadow",
          this._el.content_link
        )),
        this.data.alt
          ? (this._el.content_item.alt = this.data.alt)
          : this.data.caption &&
            (this._el.content_item.alt = G(this.data.caption)),
        this.data.title
          ? (this._el.content_item.title = this.data.title)
          : this.data.caption &&
            (this._el.content_item.title = G(this.data.caption)),
        this._el.content_item.addEventListener(
          "load",
          function (t) {
            this.onMediaLoaded();
          }.bind(this)
        ),
        (this._el.content_item.src = t.thumbnail_url),
        this.onLoaded();
    }
    function je(t) {
      let e = `${t.statusText} [${t.status}]`;
      400 == t.status && (e = this._("instagram_bad_request")),
        this.loadErrorDisplay(e);
    }
    class Ce extends de {
      _loadMedia() {
        (this.media_id = this.data.url.split("/p/")[1].split("/")[0]),
          this.options.background || this.createMedia();
      }
      createMedia() {
        this.oembed_response = null;
        let t = `${De}${this.data.url}`;
        try {
          vt({
            url: t,
            dataType: "json",
            success: Ae,
            error: je,
            context: this,
          });
        } catch (e) {
          console.log(`Instagram: error fetching ${t}`), console.log(e);
        }
      }
      getImageURL() {
        if (this.oembed_response && this.oembed_response.thumbnail_url)
          return this.oembed_response.thumbnail_url;
        yt(`${De}${this.data.url}`)
          .then((t) => t.thumbnail_url)
          .catch((t) => {
            O(`Instagram getImageURL Error: ${t.status} ${t.statusText}`);
          });
      }
      _getMeta() {
        this.oembed_response &&
          this.oembed_response.author_name &&
          (this.data.credit_alternate = `Instagram: <a href="https://instagram.com/${this.oembed_response.author_name}" target="_blank">@${this.oembed_response.author_name}</a>`),
          this.updateMeta();
      }
      sizes(t) {
        return t <= 150 ? "t" : t <= 306 ? "m" : "l";
      }
    }
    class Ne extends de {
      _loadMedia() {
        (this._el.content_item = this.domCreate(
          "img",
          "tl-media-item tl-media-image tl-media-profile tl-media-shadow",
          this._el.content
        )),
          (this._el.content_item.src = this.data.url),
          this.onLoaded();
      }
      _updateMediaDisplay(t) {
        p &&
          (this._el.content_item.style.maxWidth =
            this.options.width / 2 - 40 + "px");
      }
    }
    class Ie extends de {
      _loadMedia() {
        var t;
        if (
          ((this._el.content_item = this.domCreate(
            "div",
            "tl-media-item tl-media-iframe",
            this._el.content
          )),
          this.data.url.match(/open\?id=([^&]+)/))
        )
          t =
            "https://drive.google.com/file/d/" +
            this.data.url.match(/open\?id=([^&]+)/)[1] +
            "/preview";
        else if (this.data.url.match(/file\/d\/([^/]*)\/?/)) {
          t =
            "https://drive.google.com/file/d/" +
            this.data.url.match(/file\/d\/([^/]*)\/?/)[1] +
            "/preview";
        } else t = this.data.url;
        (this._el.content_item.innerHTML =
          "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" +
          t +
          "'></iframe>"),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }
    class Oe extends de {
      _loadMedia() {
        var t, e;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-spotify",
          this._el.content
        )),
          (this.media_id = (e = this.data.url).match(/^spotify:/)
            ? e
            : `spotify${(e = new URL(e)).pathname
                .replace(/\/$/, "")
                .replace(/\//g, ":")}`),
          this.media_id
            ? ((t =
                "https://embed.spotify.com/?uri=" +
                this.media_id +
                "&theme=white&view=coverart"),
              (this.player = this.domCreate(
                "iframe",
                "tl-media-shadow",
                this._el.content_item
              )),
              (this.player.width = "100%"),
              (this.player.height = "100%"),
              (this.player.frameBorder = "0"),
              (this.player.src = t),
              this.onLoaded())
            : this.loadErrorDisplay(this._("spotify_invalid_url"));
      }
      _updateMediaDisplay(t) {
        var e = this.options.height,
          i = 0,
          n = 0;
        (e = c
          ? this.options.height / 2
          : this.options.height -
            this.options.credit_height -
            this.options.caption_height -
            30),
          (this._el.content_item.style.maxHeight = "none"),
          O(e),
          O(this.options.width),
          e > this.options.width
            ? (O("height is greater"),
              (i = this.options.width + 80 + "px"),
              (n = this.options.width + "px"))
            : (O("width is greater"),
              O(this.options.width),
              (i = e + "px"),
              (n = e - 80 + "px")),
          (this.player.style.width = n),
          (this.player.style.height = i),
          this._el.credit && (this._el.credit.style.width = n),
          this._el.caption && (this._el.caption.style.width = n);
      }
      _stopMedia() {}
    }
    class ze extends de {
      constructor(t, e, i) {
        super(t, e, i),
          (this.iframe = Wt.a.sanitize(this.data.url, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["frameborder"],
          }));
        console.log(this.data.url);
        console.log(this.iframe)
      }
      _loadMedia() {
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe",
          this._el.content
        )),
          (this._el.content_item.innerHTML = this.iframe),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }
    class Re extends de {
      _loadMedia() {
        try {
          var t = this;
          if (
            this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")
          ) {
            var e = this.data.url.match(/(imgur\.com)\/(\w+)/);
            (this.media_id = e[2]),
              (this.data.url = "http://imgur.com/gallery/" + this.media_id);
          } else
            this.data.url &&
              (this.media_id = this.data.url.split("/").slice(-1)[0]);
          pe(["https://s.imgur.com/min/embed.js"], function () {
            t.createMedia();
          });
        } catch (t) {
          this.loadErrorDisplay(this._("imgur_invalidurl_err"));
        }
      }
      createMedia() {
        var t = this,
          e = "https://api.imgur.com/oembed.json?url=" + this.data.url;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-image tl-media-imgur",
          this._el.content
        )),
          vt({
            type: "GET",
            url: e,
            dataType: "json",
            success: function (e) {
              try {
                (t._el.content_item.innerHTML = e.html),
                  setInterval(function () {
                    null == document.querySelector("blockquote.imgur-embed-pub")
                      ? clearInterval()
                      : (imgurEmbed.createIframe(),
                        document
                          .getElementById("imageElement")
                          .removeAttribute("style"),
                        document
                          .getElementById("image")
                          .removeAttribute("style"));
                  }, 2e3);
              } catch (t) {
                O("Error processing imgur ajax response");
              }
            },
            error: function (e, i, n) {
              "parsererror" == i
                ? t.loadErrorDisplay(t._("imgur_invalidurl_err"))
                : t.loadErrorDisplay(t._("unknown_read_err", i));
            },
          }),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        (this._el.content_item.style.width = this.options.width + "px"),
          (this._el.content_item.style.height =
            X({ w: this.options.width }) + "px");
      }
    }
    class Pe extends de {
      _loadMedia() {
        var t = V(this.data.url);
        this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe",
          this._el.content
        );
        var e = "";
        (e =
          s || _ || t.match(/dl.dropboxusercontent.com/)
            ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" +
              t +
              "&amp;embedded=true'></iframe>"
            : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" +
              t +
              "'></iframe>"),
          (this._el.content_item.innerHTML = e),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }
    class qe extends de {
      _loadMedia() {
        this.loadingMessage(),
          this.options.background || this.createMedia(),
          this.onLoaded();
      }
      createMedia() {
        var t = this,
          e = "tl-media-item tl-media-audio tl-media-shadow";
        this.data.link
          ? ((this._el.content_link = this.domCreate(
              "a",
              "",
              this._el.content
            )),
            (this._el.content_link.href = this.data.link),
            (this._el.content_link.target = "_blank"),
            this._el.content_link.setAttribute("rel", "noopener"),
            (this._el.content_item = this.domCreate(
              "audio",
              e,
              this._el.content_link
            )))
          : (this._el.content_item = this.domCreate(
              "audio",
              e,
              this._el.content
            )),
          (this._el.content_item.controls = !0),
          (this._el.source_item = this.domCreate(
            "source",
            "",
            this._el.content_item
          )),
          this._el.content_item.addEventListener("load", function (e) {
            t.onMediaLoaded();
          }),
          (this._el.source_item.src = this.data.url),
          (this._el.source_item.type = this._getType(
            this.data.url,
            this.data.mediatype.match_str
          )),
          (this._el.content_item.innerHTML +=
            "Your browser doesn't support HTML5 audio with " +
            this._el.source_item.type),
          (this.player_element = this._el.content_item);
      }
      _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
      _stopMedia() {
        this.player_element && this.player_element.pause();
      }
      _getType(t, e) {
        var i = "audio/";
        switch (t.match(e)[1]) {
          case "mp3":
            i += "mpeg";
            break;
          case "wav":
            i += "wav";
            break;
          case "m4a":
            i += "mp4";
            break;
          default:
            i = "audio";
        }
        return i;
      }
    }
    class Fe extends de {
      _loadMedia() {
        this.loadingMessage(),
          this.options.background || this.createMedia(),
          this.onLoaded();
      }
      createMedia() {
        var t = this,
          e = "tl-media-item tl-media-video tl-media-shadow";
        this.data.link
          ? ((this._el.content_link = this.domCreate(
              "a",
              "",
              this._el.content
            )),
            (this._el.content_link.href = this.data.link),
            (this._el.content_link.target = "_blank"),
            this._el.content_link.setAttribute("rel", "noopener"),
            (this._el.content_item = this.domCreate(
              "video",
              e,
              this._el.content_link
            )))
          : (this._el.content_item = this.domCreate(
              "video",
              e,
              this._el.content
            )),
          (this._el.content_item.controls = !0),
          (this._el.source_item = this.domCreate(
            "source",
            "",
            this._el.content_item
          )),
          this._el.content_item.addEventListener("load", function (e) {
            t.onMediaLoaded();
          }),
          (this._el.source_item.src = this.data.url),
          (this._el.source_item.type = this._getType(
            this.data.url,
            this.data.mediatype.match_str
          )),
          (this._el.content_item.innerHTML +=
            "Your browser doesn't support HTML5 video with " +
            this._el.source_item.type),
          (this.player_element = this._el.content_item);
      }
      _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
      _stopMedia() {
        this.player_element && this.player_element.pause();
      }
      _getType(t, e) {
        var i = "video/";
        switch (t.match(e)[1]) {
          case "mp4":
            i += "mp4";
            break;
          case "webm":
            i += "webm";
            break;
          default:
            i = "video";
        }
        return i;
      }
    }
    class He extends de {
      _loadMedia() {
        var t,
          e = this;
        (this._el.content_item = this.domCreate(
          "div",
          "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow",
          this._el.content
        )),
          (this.media_id = this.data.url.split(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/
          )[3]),
          O(`Wistia: media_id: ${this.media_id}`),
          (t =
            "https://fast.wistia.com/embed/iframe/" +
            this.media_id +
            "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8"),
          (this.player = this.domCreate("iframe", "", this._el.content_item)),
          this.player.addEventListener("load", function (t) {
            e.onMediaLoaded();
          }),
          (this.player.width = "100%"),
          (this.player.height = "100%"),
          (this.player.frameBorder = "0"),
          (this.player.src = t),
          this.player.setAttribute("allowfullscreen", ""),
          this.player.setAttribute("webkitallowfullscreen", ""),
          this.player.setAttribute("mozallowfullscreen", ""),
          this.onLoaded();
      }
      _updateMediaDisplay() {
        this._el.content_item.style.height =
          X({ w: this._el.content_item.offsetWidth }) + "px";
      }
      _stopMedia() {
        try {
          this.player.contentWindow.postMessage(
            JSON.stringify({ method: "pause" }),
            "https://player.vimeo.com"
          );
        } catch (t) {
          O(t);
        }
      }
    }
    function $e(t, e) {
      var i = [
        {
          type: "youtube",
          name: "YouTube",
          match_str: "^(https?:)?/*(www.)?youtube|youtu.be",
          cls: ge,
        },
        {
          type: "vimeo",
          name: "Vimeo",
          match_str: "^(https?:)?/*(player.)?vimeo.com",
          cls: xe,
        },
        {
          type: "dailymotion",
          name: "DailyMotion",
          match_str: "^(https?:)?/*(www.)?dailymotion.com",
          cls: ke,
        },
        {
          type: "vine",
          name: "Vine",
          match_str: "^(https?:)?/*(www.)?vine.co",
          cls: Te,
        },
        {
          type: "soundcloud",
          name: "SoundCloud",
          match_str: "^(https?:)?/*(player.)?soundcloud.com",
          cls: be,
        },
        {
          type: "twitter",
          name: "Twitter",
          match_str: "^(https?:)?/*(www.)?twitter.com",
          cls: Me,
        },
        {
          type: "twitterembed",
          name: "TwitterEmbed",
          match_str: "<blockquote class=['\"]twitter-tweet['\"]",
          cls: Ee,
        },
        {
          type: "googlemaps",
          name: "Google Map",
          match_str:
            /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
          cls: ve,
        },
        {
          type: "flickr",
          name: "Flickr",
          match_str: "^(https?:)?/*(www.)?flickr.com/photos",
          cls: Le,
        },
        {
          type: "flickr",
          name: "Flickr",
          match_str: "^(https?://)?flic.kr/.*",
          cls: Le,
        },
        {
          type: "instagram",
          name: "Instagram",
          match_str:
            /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
          cls: Ce,
        },
        {
          type: "profile",
          name: "Profile",
          match_str:
            /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
          cls: Ne,
        },
        {
          type: "documentcloud",
          name: "Document Cloud",
          match_str: /documentcloud.org\//,
          cls: Se,
        },
        {
          type: "image",
          name: "Image",
          match_str: /(jpg|jpeg|png|gif|svg|webp)(\?.*)?$/i,
          cls: fe,
        },
        {
          type: "imgur",
          name: "Imgur",
          match_str:
            /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
          cls: Re,
        },
        {
          type: "googledocs",
          name: "Google Doc",
          match_str:
            "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=sharing|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?//*drive.google.com/open\\?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
          cls: Ie,
        },
        {
          type: "pdf",
          name: "PDF",
          match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
          cls: Pe,
        },
        {
          type: "wikipedia",
          name: "Wikipedia",
          match_str:
            "^(https?:)?/*(www.)?wikipedia.org|^(https?:)?/*([a-z][a-z].)?wikipedia.org",
          cls: we,
        },
        { type: "spotify", name: "spotify", match_str: "spotify", cls: Oe },
        { type: "iframe", name: "iFrame", match_str: "iframe", cls: ze },
        { type: "blockquote", name: "Quote", match_str: "blockquote", cls: ye },
        {
          type: "video",
          name: "Video",
          match_str: /(mp4|webm)(\?.*)?$/i,
          cls: Fe,
        },
        {
          type: "wistia",
          name: "Wistia",
          match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
          cls: He,
        },
        {
          type: "audio",
          name: "Audio",
          match_str: /(mp3|wav|m4a)(\?.*)?$/i,
          cls: qe,
        },
        { type: "imageblank", name: "Imageblank", match_str: "", cls: fe },
      ];
      if (e) {
        if (t instanceof Array) return !1;
        for (var n = 0; n < i.length; n++)
          switch (i[n].type) {
            case "flickr":
            case "image":
            case "instagram":
              if (t.url.match(i[n].match_str)) return i[n];
          }
      } else
        for (n = 0; n < i.length; n++)
          if (t.url.match(i[n].match_str)) return i[n];
      return !1;
    }
    class Be {
      constructor(t, e) {
        (this._el = {
          container: {},
          content_container: {},
          media_container: {},
          timespan: {},
          line_left: {},
          line_right: {},
          content: {},
          text: {},
          media: {},
        }),
          (this._text = {}),
          (this._state = { loaded: !1 }),
          (this.data = {
            unique_id: "",
            background: null,
            date: {
              year: 0,
              month: 0,
              day: 0,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
              thumbnail: "",
              format: "",
            },
            text: { headline: "", text: "" },
            media: null,
          }),
          (this.options = {
            duration: 1e3,
            ease: at,
            width: 600,
            height: 600,
            marker_width_min: 100,
          }),
          (this.active = !1),
          (this.animator = {}),
          (this.has_end_date = !1),
          C(this.options, e),
          C(this.data, t),
          this._initLayout(),
          this._initEvents();
      }
      show() {}
      hide() {}
      setActive(t) {
        (this.active = t),
          this.active && this.has_end_date
            ? (this._el.container.className =
                "tl-timemarker tl-timemarker-with-end tl-timemarker-active")
            : this.active
            ? (this._el.container.className =
                "tl-timemarker tl-timemarker-active")
            : this.has_end_date
            ? (this._el.container.className =
                "tl-timemarker tl-timemarker-with-end")
            : (this._el.container.className = "tl-timemarker");
      }
      addTo(t) {
        t.appendChild(this._el.container);
      }
      removeFrom(t) {
        t.removeChild(this._el.container);
      }
      updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
      loadMedia() {
        this._media &&
          !this._state.loaded &&
          (this._media.loadMedia(), (this._state.loaded = !0));
      }
      stopMedia() {
        this._media && this._state.loaded && this._media.stopMedia();
      }
      getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
      getTime() {
        return this.data.start_date.getTime();
      }
      getEndTime() {
        return !!this.data.end_date && this.data.end_date.getTime();
      }
      setHeight(t) {
        var e = 1;
        (this._el.content_container.style.height = t + "px"),
          (this._el.timespan_content.style.height = t + "px"),
          (this._el.content.className =
            t <= 30
              ? "tl-timemarker-content tl-timemarker-content-small"
              : "tl-timemarker-content"),
          t <= 56
            ? L(
                this._el.content_container,
                "tl-timemarker-content-container-small"
              )
            : S(
                this._el.content_container,
                "tl-timemarker-content-container-small"
              ),
          l
            ? ((e = Math.floor(t / 14)) < 1 && (e = 1),
              (this._text.className = "tl-headline"),
              (this._text.style.webkitLineClamp = e))
            : ((e = t / 12),
              (this._text.className =
                e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline"),
              (this._text.style.height = 12 * e + "px"));
      }
      setWidth(t) {
        this.data.end_date &&
          ((this._el.container.style.width = t + "px"),
          t > this.options.marker_width_min
            ? ((this._el.content_container.style.width = t + "px"),
              (this._el.content_container.className =
                "tl-timemarker-content-container tl-timemarker-content-container-long"))
            : ((this._el.content_container.style.width =
                this.options.marker_width_min + "px"),
              (this._el.content_container.className =
                "tl-timemarker-content-container")));
      }
      setClass(t) {
        this._el.container.className = t;
      }
      setRowPosition(t, e) {
        this.setPosition({ top: t }),
          (this._el.timespan.style.height = e + "px");
      }
      _onMarkerClick(t) {
        this.fire("markerclick", { unique_id: this.data.unique_id });
      }
      _initLayout() {
        if (
          ((this._el.container = T("div", "tl-timemarker")),
          this.data.unique_id &&
            (this._el.container.id = this.data.unique_id + "-marker"),
          this.data.end_date &&
            ((this.has_end_date = !0),
            (this._el.container.className =
              "tl-timemarker tl-timemarker-with-end")),
          (this._el.timespan = T(
            "div",
            "tl-timemarker-timespan",
            this._el.container
          )),
          (this._el.timespan_content = T(
            "div",
            "tl-timemarker-timespan-content",
            this._el.timespan
          )),
          (this._el.content_container = T(
            "div",
            "tl-timemarker-content-container",
            this._el.container
          )),
          (this._el.content = T(
            "div",
            "tl-timemarker-content",
            this._el.content_container
          )),
          (this._el.line_left = T(
            "div",
            "tl-timemarker-line-left",
            this._el.timespan
          )),
          (this._el.line_right = T(
            "div",
            "tl-timemarker-line-right",
            this._el.timespan
          )),
          this.data.media)
        ) {
          this._el.media_container = T(
            "div",
            "tl-timemarker-media-container",
            this._el.content
          );
          var t = { url: this.data.media.thumbnail },
            e = this.data.media.thumbnail ? $e(t, !0) : null;
          if (e) {
            var i = new e.cls(t);
            i.on(
              "loaded",
              function () {
                (this._el.media = T(
                  "img",
                  "tl-timemarker-media",
                  this._el.media_container
                )),
                  (this._el.media.src = i.getImageURL());
              }.bind(this)
            ),
              i.loadMedia();
          } else {
            var n = $e(this.data.media).type;
            this._el.media = T(
              "span",
              "tl-icon-" + n,
              this._el.media_container
            );
          }
        }
        (this._el.text = T("div", "tl-timemarker-text", this._el.content)),
          (this._text = T("h2", "tl-headline", this._el.text)),
          this.data.text.headline && "" != this.data.text.headline
            ? (this._text.innerHTML = Z(this.data.text.headline))
            : this.data.text.text && "" != this.data.text.text
            ? (this._text.innerHTML = Z(this.data.text.text))
            : this.data.media &&
              this.data.media.caption &&
              "" != this.data.media.caption &&
              (this._text.innerHTML = Z(this.data.media.caption)),
          this.onLoaded();
      }
      _initEvents() {
        _t.addListener(this._el.container, "click", this._onMarkerClick, this);
      }
      _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }
    H(Be, ht, dt);
    class We {
      constructor(t, e, i) {
        (this._el = { drag: t, move: t }),
          (this.mousedrag = {
            down: "mousedown",
            up: "mouseup",
            leave: "mouseleave",
            move: "mousemove",
          }),
          (this.touchdrag = {
            down: "touchstart",
            up: "touchend",
            leave: "mouseleave",
            move: "touchmove",
          }),
          e && (this._el.move = e),
          (this.options = {
            snap: !1,
            enable: { x: !0, y: !0 },
            constraint: { top: !1, bottom: !1, left: 0, right: !1 },
            momentum_multiplier: 2e3,
            duration: 1e3,
            ease: st,
          }),
          (this.animator = null),
          (this.dragevent = this.mousedrag),
          b && (this.dragevent = this.touchdrag),
          (this.data = {
            sliding: !1,
            direction: "none",
            pagex: { start: 0, end: 0 },
            pagey: { start: 0, end: 0 },
            pos: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
            new_pos: { x: 0, y: 0 },
            new_pos_parent: { x: 0, y: 0 },
            time: { start: 0, end: 0 },
            touch: !1,
          }),
          C(this.options, i);
      }
      enable(t) {
        _t.addListener(
          this._el.drag,
          this.dragevent.down,
          this._onDragStart,
          this
        ),
          _t.addListener(
            this._el.drag,
            this.dragevent.up,
            this._onDragEnd,
            this
          ),
          (this.data.pos.start = 0),
          (this._el.move.style.left = this.data.pos.start.x + "px"),
          (this._el.move.style.top = this.data.pos.start.y + "px"),
          (this._el.move.style.position = "absolute");
      }
      disable() {
        _t.removeListener(
          this._el.drag,
          this.dragevent.down,
          this._onDragStart,
          this
        ),
          _t.removeListener(
            this._el.drag,
            this.dragevent.up,
            this._onDragEnd,
            this
          );
      }
      stopMomentum() {
        this.animator && this.animator.stop();
      }
      updateConstraint(t) {
        this.options.constraint = t;
      }
      _onDragStart(t) {
        this.animator && this.animator.stop(),
          b
            ? t.originalEvent
              ? ((this.data.pagex.start = t.originalEvent.touches[0].screenX),
                (this.data.pagey.start = t.originalEvent.touches[0].screenY))
              : ((this.data.pagex.start = t.targetTouches[0].screenX),
                (this.data.pagey.start = t.targetTouches[0].screenY))
            : ((this.data.pagex.start = t.pageX),
              (this.data.pagey.start = t.pageY)),
          this.options.enable.x,
          this.options.enable.y,
          (this.data.pos.start = {
            x: this._el.move.offsetLeft,
            y: this._el.move.offsetTop,
          }),
          (this.data.time.start = new Date().getTime()),
          this.fire("dragstart", this.data),
          _t.addListener(
            this._el.drag,
            this.dragevent.move,
            this._onDragMove,
            this
          ),
          _t.addListener(
            this._el.drag,
            this.dragevent.leave,
            this._onDragEnd,
            this
          );
      }
      _onDragEnd(t) {
        (this.data.sliding = !1),
          _t.removeListener(
            this._el.drag,
            this.dragevent.move,
            this._onDragMove,
            this
          ),
          _t.removeListener(
            this._el.drag,
            this.dragevent.leave,
            this._onDragEnd,
            this
          ),
          this.fire("dragend", this.data),
          this._momentum();
      }
      _onDragMove(t) {
        var e = { x: 0, y: 0 };
        (this.data.sliding = !0),
          b
            ? t.originalEvent
              ? ((this.data.pagex.end = t.originalEvent.touches[0].screenX),
                (this.data.pagey.end = t.originalEvent.touches[0].screenY))
              : ((this.data.pagex.end = t.targetTouches[0].screenX),
                (this.data.pagey.end = t.targetTouches[0].screenY))
            : ((this.data.pagex.end = t.pageX),
              (this.data.pagey.end = t.pageY)),
          (e.x = this.data.pagex.start - this.data.pagex.end),
          (e.y = this.data.pagey.start - this.data.pagey.end),
          (this.data.pos.end = {
            x: this._el.drag.offsetLeft,
            y: this._el.drag.offsetTop,
          }),
          (this.data.new_pos.x = -(e.x - this.data.pos.start.x)),
          (this.data.new_pos.y = -(e.y - this.data.pos.start.y)),
          this.options.enable.x &&
            Math.abs(e.x) > Math.abs(e.y) &&
            (t.preventDefault(),
            (this._el.move.style.left = this.data.new_pos.x + "px")),
          this.options.enable.y &&
            Math.abs(e.y) > Math.abs(e.y) &&
            (t.preventDefault(),
            (this._el.move.style.top = this.data.new_pos.y + "px")),
          this.fire("dragmove", this.data);
      }
      _momentum() {
        var t = { x: 0, y: 0, time: 0 },
          e = { x: 0, y: 0, time: 0 },
          i = { x: !1, y: !1 },
          n = !1;
        (this.data.direction = null),
          (t.time = 10 * (new Date().getTime() - this.data.time.start)),
          (e.time = 10 * (new Date().getTime() - this.data.time.start)),
          (e.x =
            this.options.momentum_multiplier *
            (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start))),
          (e.y =
            this.options.momentum_multiplier *
            (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start))),
          (t.x = Math.round(e.x / e.time)),
          (t.y = Math.round(e.y / e.time)),
          (this.data.new_pos.x = Math.min(this.data.new_pos.x + t.x)),
          (this.data.new_pos.y = Math.min(this.data.new_pos.y + t.y)),
          this.options.enable.x
            ? this.options.constraint.left &&
              this.data.new_pos.x > this.options.constraint.left &&
              (this.data.new_pos.x = this.options.constraint.left)
            : (this.data.new_pos.x = this.data.pos.start.x),
          this.options.enable.y
            ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0)
            : (this.data.new_pos.y = this.data.pos.start.y),
          e.time < 2e3 && (n = !0),
          this.options.enable.x && this.options.enable.y
            ? Math.abs(e.x) > Math.abs(e.y)
              ? (i.x = !0)
              : (i.y = !0)
            : this.options.enable.x
            ? Math.abs(e.x) > Math.abs(e.y) && (i.x = !0)
            : Math.abs(e.y) > Math.abs(e.x) && (i.y = !0),
          i.x &&
            (Math.abs(e.x) > this._el.drag.offsetWidth / 2 && (n = !0),
            Math.abs(e.x) > 1e4 &&
              ((this.data.direction = "left"),
              e.x > 0 && (this.data.direction = "right"))),
          i.y &&
            (Math.abs(e.y) > this._el.drag.offsetHeight / 2 && (n = !0),
            Math.abs(e.y) > 1e4 &&
              ((this.data.direction = "up"),
              e.y > 0 && (this.data.direction = "down"))),
          e.time < 1e3 || this._animateMomentum(),
          n && this.data.direction
            ? this.fire("swipe_" + this.data.direction, this.data)
            : this.data.direction
            ? this.fire("swipe_nodirection", this.data)
            : this.options.snap &&
              (this.animator.stop(),
              (this.animator = ct(this._el.move, {
                top: this.data.pos.start.y,
                left: this.data.pos.start.x,
                duration: this.options.duration,
                easing: ot,
              })));
      }
      _animateMomentum() {
        var t = { x: this.data.new_pos.x, y: this.data.new_pos.y },
          e = { duration: this.options.duration, easing: ot };
        this.options.enable.y &&
          ((this.options.constraint.top || this.options.constraint.bottom) &&
            (t.y > this.options.constraint.bottom
              ? (t.y = this.options.constraint.bottom)
              : t.y < this.options.constraint.top &&
                (t.y = this.options.constraint.top)),
          (e.top = Math.floor(t.y) + "px")),
          this.options.enable.x &&
            (this.options.constraint.left &&
              t.x >= this.options.constraint.left &&
              (t.x = this.options.constraint.left),
            this.options.constraint.right &&
              t.x < this.options.constraint.right &&
              (t.x = this.options.constraint.right),
            (e.left = Math.floor(t.x) + "px")),
          (this.animator = ct(this._el.move, e)),
          this.fire("momentum", this.data);
      }
    }
    H(We, ht);
    class Ue {
      constructor(t, e, i, n) {
        (this.language = n),
          (this._el = {
            parent: {},
            container: {},
            slider: {},
            slider_background: {},
            line: {},
            marker_container_mask: {},
            marker_container: {},
            marker_item_container: {},
            timeaxis: {},
            timeaxis_background: {},
            attribution: {},
          }),
          (this.collapsed = !1),
          (this._el.container = "object" == typeof t ? t : x(t)),
          (this.config = e),
          (this.options = {
            width: 600,
            height: 600,
            duration: 1e3,
            ease: st,
            has_groups: !1,
            optimal_tick_width: 50,
            scale_factor: 2,
            marker_padding: 5,
            timenav_height_min: 150,
            marker_height_min: 30,
            marker_width_min: 100,
            zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
          }),
          (this.animator = null),
          (this.ready = !1),
          (this._markers = []),
          (this._eras = []),
          (this.has_eras = !1),
          (this._groups = []),
          (this._calculated_row_height = 100),
          (this.current_id = ""),
          (this.timescale = {}),
          (this.timeaxis = {}),
          (this.max_rows = 6),
          (this.animate_css = !1),
          this._swipable,
          C(this.options, i);
      }
      init() {
        this._initLayout(),
          this._initEvents(),
          this._initData(),
          this.updateDisplay(),
          this._onLoaded();
      }
      positionMarkers(t) {
        for (var e = 0; e < this._markers.length; e++) {
          var i = this.timescale.getPositionInfo(e);
          t
            ? this._markers[e].setClass("tl-timemarker tl-timemarker-fast")
            : this._markers[e].setClass("tl-timemarker"),
            this._markers[e].setPosition({ left: i.start }),
            this._markers[e].setWidth(i.width);
        }
      }
      updateDisplay(t, e, i) {
        let n = !1;
        t &&
          (0 == this.options.width && t > 0 && (n = !0),
          (this.options.width = t)),
          e &&
            e != this.options.height &&
            ((this.options.height = e),
            (this.timescale = this._getTimeScale())),
          this._assignRowsToMarkers(),
          (this._el.slider_background.style.width =
            this.timescale.getPixelWidth() + this.options.width + "px"),
          (this._el.slider_background.style.left =
            -this.options.width / 2 + "px"),
          (this._el.slider.style.width =
            this.timescale.getPixelWidth() + this.options.width + "px"),
          this._swipable.updateConstraint({
            top: !1,
            bottom: !1,
            left: this.options.width / 2,
            right: -(this.timescale.getPixelWidth() - this.options.width / 2),
          }),
          n && this._drawTimeline(),
          this.goToId(this.current_id, !0);
      }
      _getTimeScale() {
        var t = 0;
        try {
          t = parseInt(this.options.marker_height_min);
        } catch (e) {
          O("Invalid value for marker_height_min option."), (t = 30);
        }
        return (
          0 == t && (O("marker_height_min option must not be zero."), (t = 30)),
          (this.max_rows = Math.round(
            (this.options.height -
              this._el.timeaxis_background.offsetHeight -
              this.options.marker_padding) /
              t
          )),
          this.max_rows < 1 && (this.max_rows = 1),
          new se(this.config, {
            display_width: this._el.container.offsetWidth,
            screen_multiplier: this.options.scale_factor,
            max_rows: this.max_rows,
          })
        );
      }
      _updateTimeScale(t) {
        (this.options.scale_factor = t), this._updateDrawTimeline();
      }
      zoomIn() {
        var t = (function (t, e, i) {
          for (var n = 0; n < t.length; n++) if (e < t[n]) return t[n];
          return i || e;
        })(this.options.zoom_sequence, this.options.scale_factor);
        this.setZoomFactor(t);
      }
      zoomOut() {
        var t = (function (t, e, i) {
          for (var n = t.length - 1; n >= 0; n--) if (e > t[n]) return t[n];
          return i || e;
        })(this.options.zoom_sequence, this.options.scale_factor);
        this.setZoomFactor(t);
      }
      setZoom(t) {
        var e = this.options.zoom_sequence[t];
        "number" == typeof e
          ? this.setZoomFactor(e)
          : console.warn(
              "Invalid zoom level. Please use an index number between 0 and " +
                (this.options.zoom_sequence.length - 1)
            );
      }
      setZoomFactor(t) {
        t <= this.options.zoom_sequence[0]
          ? this.fire("zoomtoggle", { zoom: "out", show: !1 })
          : this.fire("zoomtoggle", { zoom: "out", show: !0 }),
          t >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1]
            ? this.fire("zoomtoggle", { zoom: "in", show: !1 })
            : this.fire("zoomtoggle", { zoom: "in", show: !0 }),
          0 == t &&
            (console.warn("Zoom factor must be greater than zero. Using 0.1"),
            (t = 0.1)),
          (this.options.scale_factor = t),
          this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0);
      }
      _createGroups() {
        this._groups = [];
        var t = this.timescale.getGroupLabels();
        if (t) {
          this.options.has_groups = !0;
          for (var e = 0; e < t.length; e++) this._createGroup(t[e]);
        }
      }
      _createGroup(t) {
        var e = new le(t);
        this._addGroup(e), this._groups.push(e);
      }
      _addGroup(t) {
        t.addTo(this._el.container);
      }
      _positionGroups() {
        if (this.options.has_groups)
          for (
            var t =
                this.options.height - this._el.timeaxis_background.offsetHeight,
              e = Math.floor(
                t / this.timescale.getNumberOfRows() -
                  this.options.marker_padding
              ),
              i = (this.timescale.getGroupLabels(), 0),
              n = 0;
            i < this._groups.length;
            i++
          ) {
            var r = Math.floor(n * (e + this.options.marker_padding)),
              a = !1;
            r > t - this.options.marker_padding && (a = !0),
              this._groups[i].setRowPosition(
                r,
                this._calculated_row_height + this.options.marker_padding / 2
              ),
              this._groups[i].setAlternateRowColor(W(i), a),
              (n += this._groups[i].data.rows);
          }
      }
      _addMarker(t) {
        t.addTo(this._el.marker_item_container),
          t.on("markerclick", this._onMarkerClick, this),
          t.on("added", this._onMarkerAdded, this);
      }
      _createMarker(t, e) {
        var i = new Be(t, this.options);
        this._addMarker(i),
          e < 0 ? this._markers.push(i) : this._markers.splice(e, 0, i);
      }
      _createMarkers(t) {
        for (var e = 0; e < t.length; e++) this._createMarker(t[e], -1);
      }
      _removeMarker(t) {
        t.removeFrom(this._el.marker_item_container);
      }
      _destroyMarker(t) {
        this._removeMarker(this._markers[t]), this._markers.splice(t, 1);
      }
      _calculateMarkerHeight(t) {
        return (
          t / this.timescale.getNumberOfRows() - this.options.marker_padding
        );
      }
      _calculateRowHeight(t) {
        return t / this.timescale.getNumberOfRows();
      }
      _calculateAvailableHeight() {
        return (
          this.options.height -
          this._el.timeaxis_background.offsetHeight -
          this.options.marker_padding
        );
      }
      _calculateMinimumTimeNavHeight() {
        return (
          this.timescale.getNumberOfRows() * this.options.marker_height_min +
          this._el.timeaxis_background.offsetHeight +
          this.options.marker_padding
        );
      }
      getMinimumHeight() {
        return this._calculateMinimumTimeNavHeight();
      }
      _assignRowsToMarkers() {
        var t = this._calculateAvailableHeight(),
          e = this._calculateMarkerHeight(t);
        this._positionGroups(),
          (this._calculated_row_height = this._calculateRowHeight(t));
        for (var i = 0; i < this._markers.length; i++) {
          this._markers[i].setHeight(e);
          var n = this.timescale.getPositionInfo(i).row,
            r =
              Math.floor(n * (e + this.options.marker_padding)) +
              this.options.marker_padding,
            a = t - r + this.options.marker_padding;
          this._markers[i].setRowPosition(r, a);
        }
      }
      _resetMarkersActive() {
        for (var t = 0; t < this._markers.length; t++)
          this._markers[t].setActive(!1);
      }
      _findMarkerIndex(t) {
        var e = -1;
        return (
          ("string" == typeof t || t instanceof String) &&
            (e = U(t, this._markers, "unique_id", e)),
          e
        );
      }
      _createEras(t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e],
            n = new he(i.start_date, i.end_date, i.headline, this.options);
          this._eras.push(n),
            n.addTo(this._el.marker_item_container),
            n.on("added", this._onEraAdded, this);
        }
      }
      _positionEras(t) {
        for (var e = 0, i = 0; i < this._eras.length; i++) {
          var n = { start: 0, end: 0, width: 0 };
          (n.start = this.timescale.getPosition(
            this._eras[i].start_date.getTime()
          )),
            (n.end = this.timescale.getPosition(
              this._eras[i].end_date.getTime()
            )),
            (n.width = n.end - n.start),
            t
              ? this._eras[i].setClass("tl-timeera tl-timeera-fast")
              : this._eras[i].setClass("tl-timeera"),
            this._eras[i].setPosition({ left: n.start }),
            this._eras[i].setWidth(n.width),
            ++e > 5 && (e = 0),
            this._eras[i].setColor(e);
        }
      }
      createMarker(t, e) {
        this._createMarker(t, e);
      }
      createMarkers(t) {
        this._createMarkers(t);
      }
      destroyMarker(t) {
        this._destroyMarker(t);
      }
      destroyMarkerId(t) {
        this.destroyMarker(this._findMarkerIndex(t));
      }
      goTo(t, e, i) {
        var n = this.options.ease,
          r = this.options.duration,
          a = t < 0 ? 0 : t;
        this._resetMarkersActive(),
          t >= 0 && t < this._markers.length && this._markers[t].setActive(!0),
          this.animator && this.animator.stop(),
          e
            ? ((this._el.slider.className = "tl-timenav-slider"),
              (this._el.slider.style.left =
                -this._markers[a].getLeft() + this.options.width / 2 + "px"))
            : i
            ? ((this._el.slider.className =
                "tl-timenav-slider tl-timenav-slider-animate"),
              (this.animate_css = !0),
              (this._el.slider.style.left =
                -this._markers[a].getLeft() + this.options.width / 2 + "px"))
            : ((this._el.slider.className = "tl-timenav-slider"),
              (this.animator = ct(this._el.slider, {
                left:
                  -this._markers[a].getLeft() + this.options.width / 2 + "px",
                duration: r,
                easing: n,
              }))),
          t >= 0 && t < this._markers.length
            ? (this.current_id = this._markers[t].data.unique_id)
            : (this.current_id = "");
      }
      goToId(t, e, i) {
        this.goTo(this._findMarkerIndex(t), e, i);
      }
      _onLoaded() {
        (this.ready = !0), this.fire("loaded", this.config);
      }
      _onMarkerAdded(t) {
        this.fire("dateAdded", this.config);
      }
      _onEraAdded(t) {
        this.fire("eraAdded", this.config);
      }
      _onMarkerRemoved(t) {
        this.fire("dateRemoved", this.config);
      }
      _onMarkerClick(t) {
        this.goToId(t.unique_id),
          this.fire("change", { unique_id: t.unique_id });
      }
      _onMouseScroll(t) {
        var e = 0,
          i = 0,
          n = {
            right: -(this.timescale.getPixelWidth() - this.options.width / 2),
            left: this.options.width / 2,
          };
        t || (t = window.event),
          t.originalEvent && (t = t.originalEvent),
          void 0 !== t.wheelDeltaX &&
            ((e = t.wheelDeltaY / 6),
            (e =
              Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY)
                ? t.wheelDeltaX / 6
                : 0)),
          e && (t.preventDefault && t.preventDefault(), (t.returnValue = !1)),
          (i = parseInt(this._el.slider.style.left.replace("px", "")) + e) >
          n.left
            ? (i = n.left)
            : i < n.right && (i = n.right),
          this.animate_css &&
            ((this._el.slider.className = "tl-timenav-slider"),
            (this.animate_css = !1)),
          (this._el.slider.style.left = i + "px");
      }
      _onDragMove(t) {
        this.animate_css &&
          ((this._el.slider.className = "tl-timenav-slider"),
          (this.animate_css = !1));
      }
      _drawTimeline(t) {
        (this.timescale = this._getTimeScale()),
          this.timeaxis.drawTicks(
            this.timescale,
            this.options.optimal_tick_width
          ),
          this.positionMarkers(t),
          this._assignRowsToMarkers(),
          this._createGroups(),
          this._positionGroups(),
          this.has_eras && this._positionEras(t);
      }
      _updateDrawTimeline(t) {
        var e = !1;
        if (t) {
          var i = new se(this.config, {
            display_width: this._el.container.offsetWidth,
            screen_multiplier: this.options.scale_factor,
            max_rows: this.max_rows,
          });
          this.timescale.getMajorScale() == i.getMajorScale() &&
            this.timescale.getMinorScale() == i.getMinorScale() &&
            (e = !0);
        } else e = !0;
        return (
          e
            ? ((this.timescale = this._getTimeScale()),
              this.timeaxis.positionTicks(
                this.timescale,
                this.options.optimal_tick_width
              ),
              this.positionMarkers(),
              this._assignRowsToMarkers(),
              this._positionGroups(),
              this.has_eras && this._positionEras(),
              this.updateDisplay())
            : this._drawTimeline(!0),
          e
        );
      }
      _initLayout() {
        (this._el.attribution = T("div", "tl-attribution", this._el.container)),
          (this._el.line = T("div", "tl-timenav-line", this._el.container)),
          (this._el.slider = T("div", "tl-timenav-slider", this._el.container)),
          (this._el.slider_background = T(
            "div",
            "tl-timenav-slider-background",
            this._el.slider
          )),
          (this._el.marker_container_mask = T(
            "div",
            "tl-timenav-container-mask",
            this._el.slider
          )),
          (this._el.marker_container = T(
            "div",
            "tl-timenav-container",
            this._el.marker_container_mask
          )),
          (this._el.marker_item_container = T(
            "div",
            "tl-timenav-item-container",
            this._el.marker_container
          )),
          (this._el.timeaxis = T("div", "tl-timeaxis", this._el.slider)),
          (this._el.timeaxis_background = T(
            "div",
            "tl-timeaxis-background",
            this._el.container
          )),
          (this._el.attribution.innerHTML =
            "<a href='http://timeline.knightlab.com' target='_blank' rel='noopener'><span class='tl-knightlab-logo'></span>TimelineJS</a>"),
          (this.timeaxis = new ce(
            this._el.timeaxis,
            this.options,
            this.language
          )),
          (this._swipable = new We(
            this._el.slider_background,
            this._el.slider,
            {
              enable: { x: !0, y: !1 },
              constraint: {
                top: !1,
                bottom: !1,
                left: this.options.width / 2,
                right: !1,
              },
              snap: !1,
            }
          )),
          this._swipable.enable();
      }
      _initEvents() {
        this._swipable.on("dragmove", this._onDragMove, this),
          _t.addListener(
            this._el.container,
            "mousewheel",
            this._onMouseScroll,
            this
          ),
          _t.addListener(
            this._el.container,
            "DOMMouseScroll",
            this._onMouseScroll,
            this
          );
      }
      _initData() {
        this._createMarkers(this.config.events),
          this.config.eras &&
            this.config.eras.length > 0 &&
            ((this.has_eras = !0), this._createEras(this.config.eras)),
          this._drawTimeline();
      }
    }
    H(Ue, ht, dt);
    class Ze {
      constructor(t, e, i, n) {
        n && this.setLanguage(n),
          (this._el = {
            container: {},
            scroll_container: {},
            background: {},
            content_container: {},
            content: {},
          }),
          (this._media = null),
          (this._mediaclass = {}),
          (this._text = {}),
          (this._background_media = null),
          (this._state = { loaded: !1 }),
          (this.has = {
            headline: !1,
            text: !1,
            media: !1,
            title: !1,
            background: { image: !1, color: !1, color_value: "" },
          }),
          (this.has.title = i),
          (this.data = {
            unique_id: null,
            background: null,
            start_date: null,
            end_date: null,
            location: null,
            text: null,
            media: null,
            autolink: !0,
          }),
          (this.options = {
            duration: 1e3,
            slide_padding_lr: 40,
            ease: at,
            width: 600,
            height: 600,
            skinny_size: 650,
            media_name: "",
          }),
          (this.active = !1),
          (this.animator = {}),
          C(this.options, e),
          C(this.data, t),
          this._initLayout(),
          this._initEvents();
      }
      show() {
        this.animator = ct(this._el.slider_container, {
          left: -this._el.container.offsetWidth * n + "px",
          duration: this.options.duration,
          easing: this.options.ease,
        });
      }
      hide() {}
      setActive(t) {
        (this.active = t),
          this.active
            ? (this.data.background &&
                this.fire("background_change", this.has.background),
              this.loadMedia())
            : this.stopMedia();
      }
      addTo(t) {
        t.appendChild(this._el.container);
      }
      removeFrom(t) {
        t.removeChild(this._el.container);
      }
      updateDisplay(t, e, i) {
        var n,
          r = this.options.slide_padding_lr,
          a = this.options.slide_padding_lr;
        (this.options.width = t || this._el.container.offsetWidth),
          (n = this.options.width - 2 * this.options.slide_padding_lr),
          c && this.options.width <= this.options.skinny_size
            ? ((r = 0), (a = 0), (n = this.options.width))
            : "landscape" == i ||
              (this.options.width <= this.options.skinny_size &&
                ((r = 50), (a = 50), (n = this.options.width - r - a))),
          (this._el.content.style.paddingLeft = r + "px"),
          (this._el.content.style.paddingRight = a + "px"),
          (this._el.content.style.width = n + "px"),
          (this.options.height = e || this._el.container.offsetHeight),
          this._media &&
            (!this.has.text && this.has.headline
              ? this._media.updateDisplay(
                  n,
                  this.options.height - this._text.headlineHeight(),
                  i
                )
              : this.has.text || this.has.headline
              ? this.options.width <= this.options.skinny_size
                ? this._media.updateDisplay(n, this.options.height, i)
                : this._media.updateDisplay(n / 2, this.options.height, i)
              : this._media.updateDisplay(n, this.options.height, i)),
          this._updateBackgroundDisplay();
      }
      loadMedia() {
        var t = this;
        this._media &&
          !this._state.loaded &&
          (this._media.loadMedia(), (this._state.loaded = !0)),
          this._background_media &&
            !this._background_media._state.loaded &&
            (this._background_media.on("loaded", function () {
              t._updateBackgroundDisplay();
            }),
            this._background_media.loadMedia());
      }
      stopMedia() {
        this._media && this._state.loaded && this._media.stopMedia();
      }
      getBackground() {
        return this.has.background;
      }
      scrollToTop() {
        this._el.container.scrollTop = 0;
      }
      getFormattedDate() {
        if (F(this.data.display_date).length > 0) return this.data.display_date;
        var t = "";
        return (
          this.has.title ||
            (this.data.end_date &&
              (t =
                " &mdash; " +
                this.data.end_date.getDisplayDate(this.getLanguage())),
            this.data.start_date &&
              (t =
                this.data.start_date.getDisplayDate(this.getLanguage()) + t)),
          t
        );
      }
      _initLayout() {
        if (
          ((this._el.container = T("div", "tl-slide")),
          this.has.title &&
            (this._el.container.className = "tl-slide tl-slide-titleslide"),
          this.data.unique_id && (this._el.container.id = this.data.unique_id),
          (this._el.scroll_container = T(
            "div",
            "tl-slide-scrollable-container",
            this._el.container
          )),
          (this._el.content_container = T(
            "div",
            "tl-slide-content-container",
            this._el.scroll_container
          )),
          (this._el.content = T(
            "div",
            "tl-slide-content",
            this._el.content_container
          )),
          (this._el.background = T(
            "div",
            "tl-slide-background",
            this._el.container
          )),
          this.data.background)
        ) {
          if (this.data.background.url) {
            var t = $e(this.data.background, !0);
            t &&
              ((this._background_media = new t.cls(this.data.background, {
                background: 1,
              })),
              (this.has.background.image = !0),
              (this._el.container.className += " tl-full-image-background"),
              (this.has.background.color_value = "#000"),
              (this._el.background.style.display = "block"));
          }
          this.data.background.color &&
            ((this.has.background.color = !0),
            (this._el.container.className += " tl-full-color-background"),
            (this.has.background.color_value = this.data.background.color)),
            this.data.background.text_background &&
              (this._el.container.className += " tl-text-background");
        }
        this.data.media &&
          this.data.media.url &&
          "" != this.data.media.url &&
          (this.has.media = !0),
          this.data.text && this.data.text.text && (this.has.text = !0),
          this.data.text && this.data.text.headline && (this.has.headline = !0),
          this.has.media &&
            ((this.data.media.mediatype = $e(this.data.media)),
            (this.options.media_name = this.data.media.mediatype.name),
            (this.options.media_type = this.data.media.mediatype.type),
            (this.options.autolink = this.data.autolink),
            (this._media = new this.data.media.mediatype.cls(
              this.data.media,
              this.options,
              this.getLanguage()
            ))),
          (this.has.text || this.has.headline) &&
            ((this._text = new ue(this.data.text, {
              title: this.has.title,
              language: this.options.language,
              autolink: this.data.autolink,
            })),
            this._text.addDateText(this.getFormattedDate())),
          this.has.text || this.has.headline || !this.has.media
            ? this.has.headline && this.has.media && !this.has.text
              ? (L(this._el.container, "tl-slide-media-only"),
                this._text.addTo(this._el.content),
                this._media.addTo(this._el.content))
              : this.has.text && this.has.media
              ? (this._media.addTo(this._el.content),
                this._text.addTo(this._el.content))
              : (this.has.text || this.has.headline) &&
                (L(this._el.container, "tl-slide-text-only"),
                this._text.addTo(this._el.content))
            : (L(this._el.container, "tl-slide-media-only"),
              this._media.addTo(this._el.content)),
          this.onLoaded();
      }
      _initEvents() {}
      _updateBackgroundDisplay() {
        this._background_media &&
          this._background_media._state.loaded &&
          (this._el.background.style.backgroundImage =
            "url('" +
            this._background_media.getImageURL(
              this.options.width,
              this.options.height
            ) +
            "')");
      }
    }
    H(Ze, zt, ht, dt);
    class Ge {
      constructor(t, e, i) {
        (this._el = {
          container: {},
          content_container: {},
          icon: {},
          title: {},
          description: {},
        }),
          (this.mediatype = {}),
          (this.data = {
            title: "Navigation",
            description: "Description",
            date: "Date",
          }),
          (this.options = { direction: "previous" }),
          (this.animator = null),
          C(this.options, e),
          C(this.data, t),
          (this._el.container = T(
            "div",
            "tl-slidenav-" + this.options.direction
          )),
          c && this._el.container.setAttribute("ontouchstart", " "),
          this._initLayout(),
          this._initEvents(),
          i && i.appendChild(this._el.container);
      }
      update(t) {
        var e = { title: "", description: "", date: t.getFormattedDate() };
        t.data.text && t.data.text.headline && (e.title = t.data.text.headline),
          this._update(e);
      }
      setColor(t) {
        this._el.content_container.className = t
          ? "tl-slidenav-content-container tl-slidenav-inverted"
          : "tl-slidenav-content-container";
      }
      _onMouseClick() {
        this.fire("clicked", this.options);
      }
      _update(t) {
        (this.data = C(this.data, t)),
          (this._el.title.innerHTML = Z(this.data.title)),
          (this._el.description.innerHTML = Z(this.data.date));
      }
      _initLayout() {
        (this._el.content_container = T(
          "div",
          "tl-slidenav-content-container",
          this._el.container
        )),
          (this._el.icon = T(
            "div",
            "tl-slidenav-icon",
            this._el.content_container
          )),
          (this._el.title = T(
            "div",
            "tl-slidenav-title",
            this._el.content_container
          )),
          (this._el.description = T(
            "div",
            "tl-slidenav-description",
            this._el.content_container
          )),
          (this._el.icon.innerHTML = "&nbsp;"),
          this._update();
      }
      _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this);
      }
    }
    H(Ge, dt, ht);
    class Ye {
      constructor(t, e, i, n) {
        n && this.setLanguage(n),
          (this._el = {
            container: {},
            background: {},
            slider_container_mask: {},
            slider_container: {},
            slider_item_container: {},
          }),
          (this._nav = {}),
          (this._nav.previous = {}),
          (this._nav.next = {}),
          (this.slide_spacing = 0),
          (this._slides = []),
          this._swipable,
          this.preloadTimer,
          this._message,
          (this.current_id = ""),
          (this.data = {}),
          (this.options = {
            id: "",
            layout: "portrait",
            width: 600,
            height: 600,
            default_bg_color: { r: 255, g: 255, b: 255 },
            slide_padding_lr: 40,
            start_at_slide: 1,
            slide_default_fade: "0%",
            duration: 1e3,
            ease: st,
            dragging: !0,
            trackResize: !0,
          }),
          "object" == typeof t
            ? ((this._el.container = t), (this.options.id = B(6, "tl")))
            : ((this.options.id = t), (this._el.container = x(t))),
          this._el.container.id || (this._el.container.id = this.options.id),
          (this.animator = null),
          C(this.options, i),
          C(this.data, e);
      }
      init() {
        this._initLayout(),
          this._initEvents(),
          this._initData(),
          this.updateDisplay(),
          this.goTo(this.options.start_at_slide),
          this._onLoaded();
      }
      _addSlide(t) {
        t.addTo(this._el.slider_item_container),
          t.on("added", this._onSlideAdded, this),
          t.on("background_change", this._onBackgroundChange, this);
      }
      _createSlide(t, e, i) {
        var n = new Ze(t, this.options, e, this.getLanguage());
        this._addSlide(n),
          i < 0 ? this._slides.push(n) : this._slides.splice(i, 0, n);
      }
      _createSlides(t) {
        for (var e = 0; e < t.length; e++)
          "" == t[e].unique_id && (t[e].unique_id = B(6, "tl-slide")),
            this._createSlide(t[e], !1, -1);
      }
      _removeSlide(t) {
        t.removeFrom(this._el.slider_item_container),
          t.off("added", this._onSlideRemoved, this),
          t.off("background_change", this._onBackgroundChange);
      }
      _destroySlide(t) {
        this._removeSlide(this._slides[t]), this._slides.splice(t, 1);
      }
      _findSlideIndex(t) {
        var e = t;
        return (
          ("string" == typeof t || t instanceof String) &&
            (e = U(t, this._slides, "unique_id")),
          e
        );
      }
      updateDisplay(t, e, i, n) {
        var r, a;
        (a = void 0 === n ? this.options.layout : n),
          (this.options.layout = a),
          (this.options.width = t || this._el.container.offsetWidth),
          (this.options.height = e || this._el.container.offsetHeight),
          (this.slide_spacing = 2 * this.options.width),
          (r = this.options.height / 2),
          this._nav.next.setPosition({ top: r }),
          this._nav.previous.setPosition({ top: r });
        for (var o = 0; o < this._slides.length; o++)
          this._slides[o].updateDisplay(
            this.options.width,
            this.options.height,
            a
          ),
            this._slides[o].setPosition({
              left: this.slide_spacing * o,
              top: 0,
            });
        this.goToId(this.current_id, !0, !0);
      }
      createSlide(t, e) {
        this._createSlide(t, !1, e);
      }
      createSlides(t) {
        this._createSlides(t);
      }
      destroySlide(t) {
        this._destroySlide(t);
      }
      destroySlideId(t) {
        this.destroySlide(this._findSlideIndex(t));
      }
      goTo(t, e, i) {
        (t = parseInt(t)), isNaN(t) && (t = 0);
        var n = this;
        this.changeBackground({ color_value: "", image: !1 }),
          this.preloadTimer && clearTimeout(this.preloadTimer);
        for (var r = 0; r < this._slides.length; r++)
          this._slides[r].setActive(!1);
        t < this._slides.length &&
          t >= 0 &&
          ((this.current_id = this._slides[t].data.unique_id),
          this.animator && this.animator.stop(),
          this._swipable && this._swipable.stopMomentum(),
          e
            ? ((this._el.slider_container.style.left =
                -this.slide_spacing * t + "px"),
              this._onSlideChange(i))
            : (this.animator = ct(this._el.slider_container, {
                left: -this.slide_spacing * t + "px",
                duration: this.options.duration,
                easing: this.options.ease,
                complete: this._onSlideChange(i),
              })),
          this._slides[t].setActive(!0),
          this._slides[t + 1]
            ? (this.showNav(this._nav.next, !0),
              this._nav.next.update(this._slides[t + 1]))
            : this.showNav(this._nav.next, !1),
          this._slides[t - 1]
            ? (this.showNav(this._nav.previous, !0),
              this._nav.previous.update(this._slides[t - 1]))
            : this.showNav(this._nav.previous, !1),
          (this.preloadTimer = setTimeout(function () {
            n.preloadSlides(t);
          }, this.options.duration)));
      }
      goToId(t, e, i) {
        this.goTo(this._findSlideIndex(t), e, i);
      }
      preloadSlides(t) {
        this._slides[t + 1] &&
          (this._slides[t + 1].loadMedia(), this._slides[t + 1].scrollToTop()),
          this._slides[t + 2] &&
            (this._slides[t + 2].loadMedia(),
            this._slides[t + 2].scrollToTop()),
          this._slides[t - 1] &&
            (this._slides[t - 1].loadMedia(),
            this._slides[t - 1].scrollToTop()),
          this._slides[t - 2] &&
            (this._slides[t - 2].loadMedia(),
            this._slides[t - 2].scrollToTop());
      }
      next() {
        var t = this._findSlideIndex(this.current_id);
        t + 1 < this._slides.length ? this.goTo(t + 1) : this.goTo(t);
      }
      previous() {
        var t = this._findSlideIndex(this.current_id);
        t - 1 >= 0 ? this.goTo(t - 1) : this.goTo(t);
      }
      showNav(t, e) {
        (this.options.width <= 500 && c) || (e ? t.show() : t.hide());
      }
      changeBackground(t) {
        var e = { r: 256, g: 256, b: 256 };
        t.color_value && "" != t.color_value
          ? (e = j(t.color_value)) ||
            (O("Invalid color value " + t.color_value),
            (e = this.options.default_bg_color))
          : ((e = this.options.default_bg_color),
            (t.color_value = "rgb(" + e.r + " , " + e.g + ", " + e.b + ")")),
          e.r,
          e.g,
          e.b,
          (this._el.background.style.backgroundImage = "none"),
          t.color_value
            ? (this._el.background.style.backgroundColor = t.color_value)
            : (this._el.background.style.backgroundColor = "transparent"),
          e.r < 255 || e.g < 255 || e.b < 255 || t.image
            ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0))
            : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1));
      }
      _updateDrawSlides() {
        for (var t = this.options.layout, e = 0; e < this._slides.length; e++)
          this._slides[e].updateDisplay(
            this.options.width,
            this.options.height,
            t
          ),
            this._slides[e].setPosition({
              left: this.slide_spacing * e,
              top: 0,
            });
        this.goToId(this.current_id, !0, !1);
      }
      _initLayout() {
        L(this._el.container, "tl-storyslider"),
          (this._el.slider_container_mask = T(
            "div",
            "tl-slider-container-mask",
            this._el.container
          )),
          (this._el.background = T(
            "div",
            "tl-slider-background tl-animate",
            this._el.container
          )),
          (this._el.slider_container = T(
            "div",
            "tl-slider-container tlanimate",
            this._el.slider_container_mask
          )),
          (this._el.slider_item_container = T(
            "div",
            "tl-slider-item-container",
            this._el.slider_container
          )),
          (this.options.width = this._el.container.offsetWidth),
          (this.options.height = this._el.container.offsetHeight),
          (this._nav.previous = new Ge(
            { title: "Previous", description: "description" },
            { direction: "previous" }
          )),
          (this._nav.next = new Ge(
            { title: "Next", description: "description" },
            { direction: "next" }
          )),
          this._nav.next.addTo(this._el.container),
          this._nav.previous.addTo(this._el.container),
          (this._el.slider_container.style.left = "0px"),
          b &&
            ((this._swipable = new We(
              this._el.slider_container_mask,
              this._el.slider_container,
              { enable: { x: !0, y: !1 }, snap: !0 }
            )),
            this._swipable.enable(),
            (this._message = new Rt(
              this._el.container,
              {
                message_class: "tl-message-full",
                message_icon_class: "tl-icon-swipe-left",
              },
              this.getLanguage()
            )),
            this._message.updateMessage(this._("swipe_to_navigate")),
            this._message.addTo(this._el.container));
      }
      _initEvents() {
        this._nav.next.on("clicked", this._onNavigation, this),
          this._nav.previous.on("clicked", this._onNavigation, this),
          this._message &&
            this._message.on("clicked", this._onMessageClick, this),
          this._swipable &&
            (this._swipable.on("swipe_left", this._onNavigation, this),
            this._swipable.on("swipe_right", this._onNavigation, this),
            this._swipable.on(
              "swipe_nodirection",
              this._onSwipeNoDirection,
              this
            ));
      }
      _initData() {
        this.data.title && this._createSlide(this.data.title, !0, -1),
          this._createSlides(this.data.events);
      }
      _onBackgroundChange(t) {
        var e = this._findSlideIndex(this.current_id),
          i = this._slides[e].getBackground();
        this.changeBackground(t), this.fire("colorchange", i);
      }
      _onMessageClick(t) {
        this._message.hide();
      }
      _onSwipeNoDirection(t) {
        this.goToId(this.current_id);
      }
      _onNavigation(t) {
        "next" == t.direction || "left" == t.direction
          ? this.next()
          : ("previous" != t.direction && "right" != t.direction) ||
            this.previous(),
          this.fire("nav_" + t.direction, this.data);
      }
      _onSlideAdded(t) {
        O("slideadded"), this.fire("slideAdded", this.data);
      }
      _onSlideRemoved(t) {
        this.fire("slideRemoved", this.data);
      }
      _onSlideChange(t) {
        t || this.fire("change", { unique_id: this.current_id });
      }
      _onMouseClick(t) {}
      _fireMouseEvent(t) {
        if (this._loaded) {
          var e = t.type;
          (e =
            "mouseenter" === e
              ? "mouseover"
              : "mouseleave" === e
              ? "mouseout"
              : e),
            this.hasEventListeners(e) &&
              ("contextmenu" === e && _t.preventDefault(t),
              this.fire(e, {
                latlng: "something",
                layerPoint: "something else",
              }));
        }
      }
      _onLoaded() {
        this.fire("loaded", this.data);
      }
    }
    H(Ye, zt, ht);
    class Ve {
      constructor(t, e, i) {
        (this._el = {
          parent: {},
          container: {},
          button_backtostart: {},
          button_zoomin: {},
          button_zoomout: {},
          arrow: {},
          line: {},
          coverbar: {},
          grip: {},
        }),
          (this.collapsed = !1),
          (this._el.container = "object" == typeof t ? t : x(t)),
          e && (this._el.parent = e),
          (this.options = {
            width: 600,
            height: 600,
            duration: 1e3,
            ease: st,
            menubar_default_y: 0,
          }),
          (this.animator = {}),
          C(this.options, i),
          this._initLayout(),
          this._initEvents();
      }
      show(t) {
        this.options.duration;
      }
      hide(t) {}
      toogleZoomIn(t) {
        t
          ? S(this._el.button_zoomin, "tl-menubar-button-inactive")
          : L(this._el.button_zoomin, "tl-menubar-button-inactive");
      }
      toogleZoomOut(t) {
        t
          ? S(this._el.button_zoomout, "tl-menubar-button-inactive")
          : L(this._el.button_zoomout, "tl-menubar-button-inactive");
      }
      setSticky(t) {
        this.options.menubar_default_y = t;
      }
      setColor(t) {
        this._el.container.className = t
          ? "tl-menubar tl-menubar-inverted"
          : "tl-menubar";
      }
      updateDisplay(t, e, i, n) {
        this._updateDisplay(t, e, i, n);
      }
      _onButtonZoomIn(t) {
        this.fire("zoom_in", t);
      }
      _onButtonZoomOut(t) {
        this.fire("zoom_out", t);
      }
      _onButtonBackToStart(t) {
        this.fire("back_to_start", t);
      }
      _initLayout() {
        (this._el.button_zoomin = T(
          "span",
          "tl-menubar-button",
          this._el.container
        )),
          (this._el.button_zoomout = T(
            "span",
            "tl-menubar-button",
            this._el.container
          )),
          (this._el.button_backtostart = T(
            "span",
            "tl-menubar-button",
            this._el.container
          )),
          c && this._el.container.setAttribute("ontouchstart", " "),
          (this._el.button_backtostart.innerHTML =
            "<span class='tl-icon-goback'></span>"),
          (this._el.button_zoomin.innerHTML =
            "<span class='tl-icon-zoom-in'></span>"),
          (this._el.button_zoomout.innerHTML =
            "<span class='tl-icon-zoom-out'></span>");
      }
      _initEvents() {
        _t.addListener(
          this._el.button_backtostart,
          "click",
          this._onButtonBackToStart,
          this
        ),
          _t.addListener(
            this._el.button_zoomin,
            "click",
            this._onButtonZoomIn,
            this
          ),
          _t.addListener(
            this._el.button_zoomout,
            "click",
            this._onButtonZoomOut,
            this
          );
      }
      _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }
    H(Ve, dt, ht);
    let Je = null;
    if (document) {
      let t = document.getElementsByTagName("script");
      t && t.length > 0 && (Je = t[t.length - 1].src);
    }
    class Xe {
      constructor(t, e, i) {
        if (
          (i || (i = {}),
          (this.ready = !1),
          (this._el = {
            container: x(t),
            storyslider: {},
            timenav: {},
            menubar: {},
          }),
          i.lang && !i.language && (i.language = i.lang),
          (this.language = Ot),
          (this._storyslider = {}),
          (this._timenav = {}),
          (this._menubar = {}),
          (this._loaded = { storyslider: !1, timenav: !1 }),
          (this.config = null),
          (this.options = {
            script_path: "https://cdn.knightlab.com/libs/timeline3/latest/js/",
            height: this._el.container.offsetHeight,
            width: this._el.container.offsetWidth,
            debug: !1,
            font: "default",
            is_embed: !1,
            is_full_embed: !1,
            hash_bookmark: !1,
            default_bg_color: { r: 255, g: 255, b: 255 },
            scale_factor: 2,
            layout: "landscape",
            timenav_position: "bottom",
            optimal_tick_width: 60,
            base_class: "tl-timeline",
            timenav_height: null,
            timenav_height_percentage: 25,
            timenav_mobile_height_percentage: 40,
            timenav_height_min: 175,
            marker_height_min: 30,
            marker_width_min: 100,
            marker_padding: 5,
            start_at_slide: 0,
            start_at_end: !1,
            menubar_height: 0,
            skinny_size: 650,
            medium_size: 800,
            use_bc: !1,
            duration: 1e3,
            ease: st,
            dragging: !0,
            trackResize: !0,
            map_type: "stamen:toner-lite",
            slide_padding_lr: 100,
            slide_default_fade: "0%",
            zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            language: "en",
            ga_property_id: null,
            track_events: [
              "back_to_start",
              "nav_next",
              "nav_previous",
              "zoom_in",
              "zoom_out",
            ],
            theme: null,
            sheets_proxy: "https://sheets-proxy.knightlab.com/proxy/",
            soundcite: !1,
          }),
          (this.animator_timenav = null),
          (this.animator_storyslider = null),
          (this.animator_menubar = null),
          (this.message = new Rt(this._el.container, {
            message_class: "tl-message-full",
          })),
          "string" == typeof i.default_bg_color)
        ) {
          var n = j(i.default_bg_color);
          n
            ? (i.default_bg_color = n)
            : (delete i.default_bg_color,
              O("Invalid default background color. Ignoring."));
        }
        var r, a;
        C(this.options, i),
          this.options.script_path ||
            (this.options.script_path = this.determineScriptPath()),
          i.soundcite &&
            this.on("ready", () => {
              O("Loading Soundcite resources "),
                _e(
                  "https://cdn.knightlab.com/libs/soundcite/latest/css/player.css"
                ),
                pe(
                  "https://cdn.knightlab.com/libs/soundcite/latest/js/soundcite.min.js"
                );
            }),
          this._loadStyles(),
          document.addEventListener(
            "keydown",
            ((r = this),
            function (t) {
              if (r.config) {
                var e = t.key,
                  i = r._getSlideIndex(self.current_id),
                  n = r.config.events.length - 1,
                  a = r.config.title ? n + 1 : n;
                "ArrowLeft" == e
                  ? 0 != i && r.goToPrev()
                  : "ArrowRight" == e && i != a && r.goToNext();
              }
            })
          ),
          window.addEventListener(
            "resize",
            function (t) {
              this.updateDisplay();
            }.bind(this)
          ),
          this.options.debug && ((a = console.log), I.push(a)),
          L(this._el.container, "tl-timeline"),
          this.options.is_embed && L(this._el.container, "tl-timeline-embed"),
          this.options.is_full_embed &&
            L(this._el.container, "tl-timeline-full-embed"),
          this._loadLanguage(e);
      }
      _loadStyles() {
        let t = null,
          e = null;
        if (
          this.options.font &&
          (0 == this.options.font.indexOf("http") ||
            this.options.font.match(/\.css$/))
        )
          t = this.options.font;
        else if (this.options.font) {
          let e =
            "../css/fonts/font." + this.options.font.toLowerCase() + ".css";
          t = new URL(e, this.options.script_path).toString();
        }
        if (
          (t && _e(t),
          this.options.theme &&
            (0 == this.options.theme.indexOf("http") ||
              this.options.theme.match(/\.css$/)))
        )
          e = this.options.theme;
        else if (this.options.theme) {
          let t =
            "../css/themes/timeline.theme." +
            this.options.theme.toLowerCase() +
            ".css";
          e = new URL(t, this.options.script_path).toString();
        }
        e && _e(e);
      }
      _loadLanguage(t) {
        try {
          var e = this.options.language,
            i = this.options.script_path;
          (async function (t, e) {
            var i = Ct(t, e);
            try {
              if (!It[t]) {
                let e = await yt(i);
                It[t] = e;
              }
              return new jt(t, e);
            } catch (t) {
              return (
                console.log(`Error loading language [${i}] ${t.statusText}`),
                null
              );
            }
          })(e, i).then((i) => {
            i
              ? ((this.language = i),
                this.message.setLanguage(this.language),
                (this.options.language = this.language),
                this.showMessage(this._("loading_timeline")))
              : this.showMessage(`Error loading ${e}`),
              this._initData(t);
          });
        } catch (t) {
          this.showMessage(this._translateError(t));
        }
      }
      _initData(t) {
        "string" == typeof t
          ? ie(t, {
              callback: function (t) {
                this.setConfig(t);
              }.bind(this),
              sheets_proxy: this.options.sheets_proxy,
            })
          : Vt == t.constructor
          ? this.setConfig(t)
          : this.setConfig(new Vt(t));
      }
      _translateError(t) {
        return (
          t.hasOwnProperty("stack") && O(t.stack),
          t.message_key
            ? this._(t.message_key) + (t.detail ? " [" + t.detail + "]" : "")
            : t
        );
      }
      showMessage(t) {
        this.message
          ? this.message.updateMessage(t)
          : (O("No message display available."), O(t));
      }
      determineScriptPath() {
        let t = null;
        if (Je) t = Je;
        else {
          let e = document.getElementById("timeline-script-tag");
          e && (t = e.src);
        }
        if (!t) {
          let e = document.getElementsByTagName("script");
          for (let i = e.length - 1; i >= 0; i--)
            if (e[i].src) {
              t = e[i].src;
              break;
            }
        }
        return t ? t.substr(0, t.lastIndexOf("/") + 1) : "";
      }
      setConfig(t) {
        if (
          ((this.config = t),
          this.config.isValid() &&
            (this.config.validate(), this._validateOptions()),
          this.config.isValid())
        )
          try {
            "loading" === document.readyState
              ? document.addEventListener(
                  "DOMContentLoaded",
                  this._onDataLoaded.bind(this)
                )
              : this._onDataLoaded();
          } catch (t) {
            this.showMessage(
              "<strong>" +
                this._("error") +
                ":</strong> " +
                this._translateError(t)
            );
          }
        else {
          for (
            var e = [], i = 0, n = this.config.getErrors();
            i < n.length;
            i++
          )
            e.push(this._translateError(n[i]));
          this.showMessage(
            "<strong>" + this._("error") + ":</strong> " + e.join("<br>")
          );
        }
      }
      _onDataLoaded() {
        this.fire("dataloaded"),
          this._initLayout(),
          this._initEvents(),
          this._initAnalytics(),
          this.message && this.message.hide();
        new IntersectionObserver(
          ((t, e) => {
            t.reduce((t, e) => t || e.isIntersecting, !1) &&
              this.updateDisplay();
          }).bind(this)
        ).observe(this._el.container),
          (this.ready = !0),
          this.fire("ready");
      }
      _initLayout() {
        this.message.removeFrom(this._el.container),
          (this._el.container.innerHTML = ""),
          "top" == this.options.timenav_position
            ? ((this._el.timenav = T("div", "tl-timenav", this._el.container)),
              (this._el.storyslider = T(
                "div",
                "tl-storyslider",
                this._el.container
              )))
            : ((this._el.storyslider = T(
                "div",
                "tl-storyslider",
                this._el.container
              )),
              (this._el.timenav = T("div", "tl-timenav", this._el.container))),
          (this._el.menubar = T("div", "tl-menubar", this._el.container)),
          (this.options.width = this._el.container.offsetWidth),
          (this.options.height = this._el.container.offsetHeight),
          (this.options.timenav_height = this._calculateTimeNavHeight(
            this.options.timenav_height
          )),
          (this._timenav = new Ue(
            this._el.timenav,
            this.config,
            this.options,
            this.language
          )),
          this._timenav.on("loaded", this._onTimeNavLoaded, this),
          (this._timenav.options.height = this.options.timenav_height),
          this._timenav.init(),
          this.options.initial_zoom && this.setZoom(this.options.initial_zoom),
          (this._storyslider = new Ye(
            this._el.storyslider,
            this.config,
            this.options,
            this.language
          )),
          this._storyslider.on("loaded", this._onStorySliderLoaded, this),
          this._storyslider.init(),
          (this._menubar = new Ve(
            this._el.menubar,
            this._el.container,
            this.options
          )),
          "portrait" == this.options.layout
            ? (this.options.storyslider_height =
                this.options.height - this.options.timenav_height - 1)
            : (this.options.storyslider_height = this.options.height - 1),
          this._updateDisplay(this._timenav.options.height, !0, 2e3);
      }
      _initEvents() {
        this._timenav.on("change", this._onTimeNavChange, this),
          this._timenav.on("zoomtoggle", this._onZoomToggle, this),
          this._storyslider.on("change", this._onSlideChange, this),
          this._storyslider.on("colorchange", this._onColorChange, this),
          this._storyslider.on("nav_next", this._onStorySliderNext, this),
          this._storyslider.on(
            "nav_previous",
            this._onStorySliderPrevious,
            this
          ),
          this._menubar.on("zoom_in", this._onZoomIn, this),
          this._menubar.on("zoom_out", this._onZoomOut, this),
          this._menubar.on("back_to_start", this._onBackToStart, this);
      }
      _onColorChange(t) {
        this.fire("color_change", { unique_id: this.current_id }, this);
      }
      _onSlideChange(t) {
        this.current_id != t.unique_id &&
          ((this.current_id = t.unique_id),
          this._timenav.goToId(this.current_id),
          this._onChange(t));
      }
      _onTimeNavChange(t) {
        this.current_id != t.unique_id &&
          ((this.current_id = t.unique_id),
          this._storyslider.goToId(this.current_id),
          this._onChange(t));
      }
      _onZoomToggle(t) {
        "in" == t.zoom
          ? this._menubar.toogleZoomIn(t.show)
          : "out" == t.zoom && this._menubar.toogleZoomOut(t.show);
      }
      _onChange(t) {
        this.fire("change", { unique_id: this.current_id }, this),
          this.options.hash_bookmark &&
            this.current_id &&
            this._updateHashBookmark(this.current_id);
      }
      _onBackToStart(t) {
        this._storyslider.goTo(0),
          this.fire("back_to_start", { unique_id: this.current_id }, this);
      }
      _onZoomIn(t) {
        this._timenav.zoomIn(),
          this.fire(
            "zoom_in",
            { zoom_level: this._timenav.options.scale_factor },
            this
          );
      }
      _onZoomOut(t) {
        this._timenav.zoomOut(),
          this.fire(
            "zoom_out",
            { zoom_level: this._timenav.options.scale_factor },
            this
          );
      }
      _onTimeNavLoaded() {
        (this._loaded.timenav = !0), this._onLoaded();
      }
      _onStorySliderLoaded() {
        (this._loaded.storyslider = !0), this._onLoaded();
      }
      _onStorySliderNext(t) {
        this.fire("nav_next", t);
      }
      _onStorySliderPrevious(t) {
        this.fire("nav_previous", t);
      }
      _updateDisplay(t, e, i) {
        var n,
          r = this.options.duration,
          a = this.options.base_class,
          o = 0;
        i && (r = i),
          (this.options.width = this._el.container.offsetWidth),
          (this.options.height = this._el.container.offsetHeight),
          this.options.width <= this.options.skinny_size
            ? ((a += " tl-skinny"), (this.options.layout = "portrait"))
            : this.options.width <= this.options.medium_size
            ? ((a += " tl-medium"), (this.options.layout = "landscape"))
            : (this.options.layout = "landscape"),
          b &&
            (this.options.layout =
              ((n = "portrait"),
              window.innerWidth > window.innerHeight && (n = "landscape"),
              Math.abs(window.orientation),
              n)),
          c
            ? ((a += " tl-mobile"),
              (this.options.timenav_height = this._calculateTimeNavHeight(
                t,
                this.options.timenav_mobile_height_percentage
              )))
            : (this.options.timenav_height = this._calculateTimeNavHeight(t)),
          "portrait" == this.options.layout
            ? (a += " tl-layout-portrait")
            : (a += " tl-layout-landscape"),
          (this.options.storyslider_height =
            this.options.height - this.options.timenav_height),
          (o =
            "top" == this.options.timenav_position
              ? Math.ceil(this.options.timenav_height) / 2 -
                this._el.menubar.offsetHeight / 2 -
                19.5
              : Math.round(
                  this.options.storyslider_height +
                    1 +
                    Math.ceil(this.options.timenav_height) / 2 -
                    this._el.menubar.offsetHeight / 2 -
                    17.5
                )),
          e
            ? ((this._el.timenav.style.height =
                Math.ceil(this.options.timenav_height) + "px"),
              this.animator_storyslider && this.animator_storyslider.stop(),
              (this.animator_storyslider = ct(this._el.storyslider, {
                height: this.options.storyslider_height + "px",
                duration: r / 2,
                easing: ot,
              })),
              this.animator_menubar && this.animator_menubar.stop(),
              (this.animator_menubar = ct(this._el.menubar, {
                top: o + "px",
                duration: r / 2,
                easing: ot,
              })))
            : ((this._el.timenav.style.height =
                Math.ceil(this.options.timenav_height) + "px"),
              (this._el.storyslider.style.height =
                this.options.storyslider_height + "px"),
              (this._el.menubar.style.top = o + "px")),
          this.message &&
            this.message.updateDisplay(this.options.width, this.options.height),
          this._timenav.updateDisplay(
            this.options.width,
            this.options.timenav_height,
            e
          ),
          this._storyslider.updateDisplay(
            this.options.width,
            this.options.storyslider_height,
            e,
            this.options.layout
          ),
          "rtl" == this.options.language.direction && (a += " tl-rtl"),
          (this._el.container.className = a);
      }
      _calculateTimeNavHeight(t, e) {
        var i = 0;
        return (
          t
            ? (i = t)
            : (this.options.timenav_height_percentage || e) &&
              (i = e
                ? Math.round((this.options.height / 100) * e)
                : Math.round(
                    (this.options.height / 100) *
                      this.options.timenav_height_percentage
                  )),
          this._timenav.ready &&
            this.options.timenav_height_min <
              this._timenav.getMinimumHeight() &&
            (this.options.timenav_height_min =
              this._timenav.getMinimumHeight()),
          i < this.options.timenav_height_min &&
            (i = this.options.timenav_height_min),
          (i -= 2 * this.options.marker_padding)
        );
      }
      _validateOptions() {
        for (
          var t = [
              "timenav_height",
              "timenav_height_min",
              "marker_height_min",
              "marker_width_min",
              "marker_padding",
              "start_at_slide",
              "slide_padding_lr",
            ],
            e = 0;
          e < t.length;
          e++
        ) {
          var i = t[e],
            n = this.options[i];
          let r = !0;
          "number" == typeof n
            ? (r = n == parseInt(n))
            : "string" == typeof n && (r = n.match(/^\s*(\-?\d+)?\s*$/)),
            r ||
              this.config.logError({
                message_key: "invalid_integer_option",
                detail: i,
              });
        }
      }
      _getSlideIndex(t) {
        if (this.config) {
          if (this.config.title && this.config.title.unique_id == t) return 0;
          for (var e = 0; e < this.config.events.length; e++)
            if (t == this.config.events[e].unique_id)
              return this.config.title ? e + 1 : e;
        }
        return -1;
      }
      _getEventIndex(t) {
        for (var e = 0; e < this.config.events.length; e++)
          if (t == this.config.events[e].unique_id) return e;
        return -1;
      }
      _onLoaded() {
        if (this._loaded.storyslider && this._loaded.timenav)
          if ((this.fire("loaded", this.config), this.options.hash_bookmark)) {
            "" != window.location.hash
              ? this.goToId(window.location.hash.replace("#event-", ""))
              : this._updateHashBookmark(this.current_id);
            let t = this;
            window.addEventListener(
              "hashchange",
              function () {
                0 == window.location.hash.indexOf("#event-") &&
                  t.goToId(window.location.hash.replace("#event-", ""));
              },
              !1
            );
          } else
            (null != (t = this.options.start_at_end) &&
              (1 == t ||
                "true" == String(t).toLowerCase() ||
                1 == Number(t))) ||
            this.options.start_at_slide > this.config.events.length
              ? this.goToEnd()
              : this.goTo(this.options.start_at_slide);
        var t;
      }
      _updateHashBookmark(t) {
        if (t) {
          var e = "#event-" + t.toString();
          window.history.replaceState(null, "Browsing TimelineJS", e),
            this.fire(
              "hash_updated",
              {
                unique_id: this.current_id,
                hashbookmark: "#event-" + t.toString(),
              },
              this
            );
        }
      }
      zoomIn() {
        this._timenav.zoomIn();
      }
      zoomOut() {
        this._timenav.zoomOut();
      }
      setZoom(t) {
        this._timenav.setZoom(t);
      }
      goToId(t) {
        this.current_id != t &&
          ((this.current_id = t),
          this._timenav.goToId(this.current_id),
          this._storyslider.goToId(this.current_id, !1, !0),
          this.fire("change", { unique_id: this.current_id }, this));
      }
      goTo(t) {
        this.config.title
          ? 0 == t
            ? this.goToId(this.config.title.unique_id)
            : this.goToId(this.config.events[t - 1].unique_id)
          : this.goToId(this.config.events[t].unique_id);
      }
      goToStart() {
        this.goTo(0);
      }
      goToEnd() {
        var t = this.config.events.length - 1;
        this.goTo(this.config.title ? t + 1 : t);
      }
      goToPrev() {
        this.goTo(this._getSlideIndex(this.current_id) - 1);
      }
      goToNext() {
        this.goTo(this._getSlideIndex(this.current_id) + 1);
      }
      add(t) {
        var e = this.config.addEvent(t),
          i = this._getEventIndex(e),
          n = this.config.events[i];
        this._storyslider.createSlide(n, this.config.title ? i + 1 : i),
          this._storyslider._updateDrawSlides(),
          this._timenav.createMarker(n, i),
          this._timenav._updateDrawTimeline(!1),
          this.fire("added", { unique_id: e });
      }
      remove(t) {
        if (t >= 0 && t < this.config.events.length) {
          this.config.events[t].unique_id == this.current_id &&
            (t < this.config.events.length - 1
              ? this.goTo(t + 1)
              : this.goTo(t - 1));
          var e = this.config.events.splice(t, 1);
          delete this.config.event_dict[e[0].unique_id],
            this._storyslider.destroySlide(this.config.title ? t + 1 : t),
            this._storyslider._updateDrawSlides(),
            this._timenav.destroyMarker(t),
            this._timenav._updateDrawTimeline(!1),
            this.fire("removed", { unique_id: e[0].unique_id });
        }
      }
      removeId(t) {
        this.remove(this._getEventIndex(t));
      }
      getData(t) {
        if (this.config.title) {
          if (0 == t) return this.config.title;
          if (t > 0 && t <= this.config.events.length)
            return this.config.events[t - 1];
        } else if (t >= 0 && t < this.config.events.length)
          return this.config.events[t];
        return null;
      }
      getDataById(t) {
        return this.getData(this._getSlideIndex(t));
      }
      getSlide(t) {
        return t >= 0 && t < this._storyslider._slides.length
          ? this._storyslider._slides[t]
          : null;
      }
      getSlideById(t) {
        return this.getSlide(this._getSlideIndex(t));
      }
      getCurrentSlide() {
        return this.getSlideById(this.current_id);
      }
      updateDisplay() {
        this.ready
          ? this._updateDisplay()
          : O("updateDisplay called but timeline is not in ready state");
      }
      _initGoogleAnalytics() {
        var t, e, i, n, r, a;
        (t = window),
          (e = document),
          (i = "script"),
          (n = "ga"),
          (t.GoogleAnalyticsObject = n),
          (t.ga =
            t.ga ||
            function () {
              (t.ga.q = t.ga.q || []).push(arguments);
            }),
          (t.ga.l = 1 * new Date()),
          (r = e.createElement(i)),
          (a = e.getElementsByTagName(i)[0]),
          (r.async = 1),
          (r.src = "//www.google-analytics.com/analytics.js"),
          a.parentNode.insertBefore(r, a),
          ga("create", this.options.ga_property_id, "auto"),
          ga("set", "anonymizeIp", !0);
      }
      _initAnalytics() {
        if (null !== this.options.ga_property_id) {
          this._initGoogleAnalytics(), ga("send", "pageview");
          var t = this.options.track_events;
          for (let i = 0; i < t.length; i++) {
            var e = t[i];
            this.addEventListener(e, function (t) {
              ga("send", "event", t.type, "clicked");
            });
          }
        }
      }
    }
    H(Xe, zt, ht), i(1);
  },
]);
//# sourceMappingURL=timeline.js.map
