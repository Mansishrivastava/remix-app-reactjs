import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form
} from "/build/_shared/chunk-VCSRTDUO.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZA2ALUB5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contacts.$contactId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contacts.$contactId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contacts.$contactId.tsx"
  );
  import.meta.hot.lastModified = "1697300970795.2715";
}
function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "contact", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: `${contact.first} ${contact.last} avatar`, src: contact.avatar }, contact.avatar, false, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        contact.first || contact.last ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          contact.first,
          " ",
          contact.last
        ] }, void 0, true, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 38,
          columnNumber: 44
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 40,
          columnNumber: 19
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite, { contact }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      contact.twitter ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://twitter.com/${contact.twitter}`, children: contact.twitter }, void 0, false, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 44,
        columnNumber: 28
      }, this) : null,
      contact.notes ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: contact.notes }, void 0, false, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 50,
        columnNumber: 26
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Edit" }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "destroy", method: "post", onSubmit: (event) => {
          const response = confirm("Please confirm you want to delete this record.");
          if (!response) {
            event.preventDefault();
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Delete" }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/contacts.$contactId.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contacts.$contactId.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Contact;
var Favorite = ({
  contact
}) => {
  const favorite = contact.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": favorite ? "Remove from favorites" : "Add to favorites", name: "favorite", value: favorite ? "false" : "true", children: favorite ? "\u2605" : "\u2606" }, void 0, false, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contacts.$contactId.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_c2 = Favorite;
var _c;
var _c2;
$RefreshReg$(_c, "Contact");
$RefreshReg$(_c2, "Favorite");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactId-MYTDKNQZ.js.map
