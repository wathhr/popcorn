// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/utils.js
function noop() {
}
function assign(tar, src) {
  for (const k2 in src)
    tar[k2] = src[k2];
  return (
    /** @type {T & S} */
    tar
  );
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a3, b3) {
  return a3 != a3 ? b3 == b3 : a3 !== b3 || a3 && typeof a3 === "object" || typeof a3 === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i3 = 0; i3 < len; i3 += 1) {
        merged[i3] = $$scope.dirty[i3] | lets[i3];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i3 = 0; i3 < length; i3++) {
      dirty[i3] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k2 in props)
    if (k2[0] !== "$")
      result[k2] = props[k2];
  return result;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k2 in props)
    if (!keys.has(k2) && k2[0] !== "$")
      rest[k2] = props[k2];
  return rest;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/globals.js
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /**
   * @private
   * @readonly
   * @type {WeakMap<Element, import('./private.js').Listener>}
   */
  _listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
  /**
   * @private
   * @type {ResizeObserver}
   */
  _observer = void 0;
  /** @type {ResizeObserverOptions} */
  options;
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    this.options = options;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    return this._observer ?? (this._observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        this._listeners.get(entry.target)?.(entry);
      }
    }));
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/dom.js
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i3 = 0; i3 < iterations.length; i3 += 1) {
    if (iterations[i3])
      iterations[i3].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function stop_propagation(fn) {
  return function(event) {
    event.stopPropagation();
    return fn.call(this, event);
  };
}
function self(fn) {
  return function(event) {
    if (event.target === this)
      fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.data === data)
    return;
  text2.data = /** @type {string} */
  data;
}
function set_style(node, key, value, important) {
  if (value == null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  return new CustomEvent(type, { detail, bubbles, cancelable });
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}
function construct_svelte_component(component, props) {
  return new component(props);
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/lifecycle.js
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(
        /** @type {string} */
        type,
        detail,
        { cancelable }
      );
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/scheduler.js
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e2) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e2;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i3 = 0; i3 < render_callbacks.length; i3 += 1) {
      const callback = render_callbacks[i3];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c3) => fns.indexOf(c3) === -1 ? filtered.push(c3) : targets.push(c3));
  targets.forEach((c3) => c3());
  render_callbacks = filtered;
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/transitions.js
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/each.js
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/spread.js
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i3 = levels.length;
  while (i3--) {
    const o3 = levels[i3];
    const n3 = updates[i3];
    if (n3) {
      for (const key in o3) {
        if (!(key in n3))
          to_null_out[key] = 1;
      }
      for (const key in n3) {
        if (!accounted_for[key]) {
          update2[key] = n3[key];
          accounted_for[key] = 1;
        }
      }
      levels[i3] = n3;
    } else {
      for (const key in o3) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/shared/boolean_attributes.js
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/internal/Component.js
function bind(component, name, callback) {
  const index2 = component.$$.props[name];
  if (index2 !== void 0) {
    component.$$.bound[index2] = callback;
    callback(component.$$.ctx[index2]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i3) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i3 / 31 | 0] |= 1 << i3 % 31;
}
function init(component, options, instance19, create_fragment19, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance19 ? instance19(component, options.props || {}, (i3, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i3], $$.ctx[i3] = value)) {
      if (!$$.skip_bound && $$.bound[i3])
        $$.bound[i3](value);
      if (ready)
        make_dirty(component, i3);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment19 ? create_fragment19($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, Function[]>} Event listeners */
    $$l = {};
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot2 = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create2() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot2(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key in this.$$p_d) {
            this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
            if (this.$$p_d[key].reflect) {
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r)
        return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  const type = props_definition[prop]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
var SvelteComponent = class {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index2 = callbacks.indexOf(callback);
      if (index2 !== -1)
        callbacks.splice(index2, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/.pnpm/svelte@4.1.1/node_modules/svelte/src/runtime/store/index.js
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i3 = 0; i3 < subscriber_queue.length; i3 += 2) {
            subscriber_queue[i3][0](subscriber_queue[i3 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update2) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}

// node_modules/.pnpm/ts-debounce@4.0.0/node_modules/ts-debounce/dist/src/index.esm.js
function r(r4, e2, n3) {
  var i3, t2, o3;
  void 0 === e2 && (e2 = 50), void 0 === n3 && (n3 = {});
  var a3 = null != (i3 = n3.isImmediate) && i3, u3 = null != (t2 = n3.callback) && t2, c3 = n3.maxWait, v3 = Date.now(), l3 = [];
  function f3() {
    if (void 0 !== c3) {
      var r5 = Date.now() - v3;
      if (r5 + e2 >= c3)
        return c3 - r5;
    }
    return e2;
  }
  var d3 = function() {
    var e3 = [].slice.call(arguments), n4 = this;
    return new Promise(function(i4, t3) {
      var c4 = a3 && void 0 === o3;
      if (void 0 !== o3 && clearTimeout(o3), o3 = setTimeout(function() {
        if (o3 = void 0, v3 = Date.now(), !a3) {
          var i5 = r4.apply(n4, e3);
          u3 && u3(i5), l3.forEach(function(r5) {
            return (0, r5.resolve)(i5);
          }), l3 = [];
        }
      }, f3()), c4) {
        var d4 = r4.apply(n4, e3);
        return u3 && u3(d4), i4(d4);
      }
      l3.push({ resolve: i4, reject: t3 });
    });
  };
  return d3.cancel = function(r5) {
    void 0 !== o3 && clearTimeout(o3), l3.forEach(function(e3) {
      return (0, e3.reject)(r5);
    }), l3 = [];
  }, d3;
}

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i3) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i3) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i3 && _arr.length === i3)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n3 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n3 === "Object" && o3.constructor)
    n3 = o3.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o3);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o3, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
    arr2[i3] = arr[i3];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/es/state-local.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x3) {
    return fns.reduceRight(function(y3, f3) {
      return f3(y3);
    }, x3);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes))
    errorHandler("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  }))
    errorHandler("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector))
    errorHandler("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler)))
    errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  }))
    errorHandler("handlersType");
}
function validateInitial(initial) {
  if (!initial)
    errorHandler("initialIsRequired");
  if (!isObject(initial))
    errorHandler("initialType");
  if (isEmpty(initial))
    errorHandler("initialContent");
}
function throwError(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update2 = curry(updateState)(state);
  var validate2 = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose(didUpdate, update2, validate2, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread22(_objectSpread22({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var state_local_default = index;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
var config_default = config;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry2(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
var curry_default = curry2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject2(value) {
  return {}.toString.call(value).includes("Object");
}
var isObject_default = isObject2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/validators/index.js
function validateConfig(config3) {
  if (!config3)
    errorHandler2("configIsRequired");
  if (!isObject_default(config3))
    errorHandler2("configType");
  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }
  return config3;
}
function informAboutDeprecation() {
  console.warn(errorMessages2.deprecation);
}
function throwError2(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages2 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler2 = curry_default(throwError2)(errorMessages2);
var validators2 = {
  config: validateConfig
};
var validators_default = validators2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose2 = function compose3() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x3) {
    return fns.reduceRight(function(y3, f3) {
      return f3(y3);
    }, x3);
  };
};
var compose_default = compose2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}
var deepMerge_default = merge;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var makeCancelable_default = makeCancelable;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.40.0/node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _state$create = state_local_default.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});
var _state$create2 = _slicedToArray(_state$create, 2);
var getState = _state$create2[0];
var setState = _state$create2[1];
function config2(globalConfig) {
  var _validators$config = validators_default.config(globalConfig), monaco = _validators$config.monaco, config3 = _objectWithoutProperties(_validators$config, ["monaco"]);
  setState(function(state) {
    return {
      config: deepMerge_default(state.config, config3),
      monaco
    };
  });
}
function init2() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable_default(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config3 = _ref2.config, reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init: init2,
  __getMonacoInstance
};
var loader_default = loader;

// src/renderer/ui/components/QuickCss/MonacoEditor.svelte
var { window: window_1 } = globals;
function create_if_block(ctx) {
  let p3;
  return {
    c() {
      p3 = element("p");
      p3.textContent = "Loading monaco editor...";
      attr(p3, "class", "loading-overlay");
    },
    m(target, anchor) {
      insert(target, p3, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(p3);
      }
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let t2;
  let div0;
  let mounted;
  let dispose;
  let if_block = !/*loaded*/
  ctx[1] && create_if_block(ctx);
  return {
    c() {
      div1 = element("div");
      if (if_block)
        if_block.c();
      t2 = space();
      div0 = element("div");
      attr(div0, "class", "monaco-editor PopcornUI-1tm8p33");
      attr(div1, "class", "monaco-wrapper");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      if (if_block)
        if_block.m(div1, null);
      append(div1, t2);
      append(div1, div0);
      ctx[9](div0);
      if (!mounted) {
        dispose = listen(window_1, "resize", r(
          /*recalculateSize*/
          ctx[0],
          50
        ));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!/*loaded*/
      ctx2[1]) {
        if (if_block) {
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div1, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block)
        if_block.d();
      ctx[9](null);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let editorElement;
  let { editor = null } = $$props;
  let { content } = $$props;
  let { actions = [] } = $$props;
  let { commands = [] } = $$props;
  let { options = {} } = $$props;
  const dispatch = createEventDispatcher();
  let loaded = false;
  onMount(async () => {
    const monaco = await loader_default.init();
    monaco.editor.onDidCreateEditor(() => {
      $$invalidate(1, loaded = true);
      recalculateSize();
      dispatch("ready");
    });
    $$invalidate(3, editor = monaco.editor.create(editorElement, {
      language: "css",
      theme: "vs-dark",
      ...options,
      // Overrides the options no matter what
      value: content
    }));
    const actualCommands = commands.map((command) => {
      return {
        ...command,
        keybinding: command.keybinding(monaco.KeyCode, monaco.KeyMod)
      };
    });
    for (const command of actualCommands) {
      editor.addCommand(command.keybinding, command.handler, command.context ?? void 0);
    }
    for (const action of actions) {
      const { id, label, handler } = action;
      editor.addAction({
        id: "custom." + id,
        label,
        keybindings: [],
        run: handler
      });
    }
    editor.onDidChangeModelContent(() => {
      const newContent = editor.getValue();
      if (newContent === content)
        return;
      $$invalidate(8, ignoreNext = true);
      $$invalidate(4, content = newContent);
      dispatch("change", content);
    });
  });
  let ignoreNext = false;
  function recalculateSize() {
    if (!loaded)
      return;
    window.requestAnimationFrame(() => {
      editor.layout({ width: 0, height: 0 });
      const parentRect = editorElement.parentElement.getBoundingClientRect();
      editor.layout({
        width: parentRect.width,
        height: parentRect.height
      });
    });
  }
  onDestroy(() => {
    editor.dispose();
    $$invalidate(1, loaded = false);
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      editorElement = $$value;
      $$invalidate(2, editorElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("editor" in $$props2)
      $$invalidate(3, editor = $$props2.editor);
    if ("content" in $$props2)
      $$invalidate(4, content = $$props2.content);
    if ("actions" in $$props2)
      $$invalidate(5, actions = $$props2.actions);
    if ("commands" in $$props2)
      $$invalidate(6, commands = $$props2.commands);
    if ("options" in $$props2)
      $$invalidate(7, options = $$props2.options);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*content, loaded, ignoreNext, editor*/
    282) {
      $:
        if (typeof content === "string" && loaded) {
          if (!ignoreNext)
            editor.getModel().setValue(content);
          $$invalidate(8, ignoreNext = false);
        }
    }
  };
  return [
    recalculateSize,
    loaded,
    editorElement,
    editor,
    content,
    actions,
    commands,
    options,
    ignoreNext,
    div0_binding
  ];
}
var MonacoEditor = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      editor: 3,
      content: 4,
      actions: 5,
      commands: 6,
      options: 7,
      recalculateSize: 0
    });
  }
  get recalculateSize() {
    return this.$$.ctx[0];
  }
};
var MonacoEditor_default = MonacoEditor;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FilePlus/FilePlus.svelte
function create_else_block(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_5(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-44-68a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V156H104a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,152Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_4(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_3(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-42-66a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V158H104a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,152Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,160H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm0-72V43.31L196.69,88Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M208,88H152V32Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block2(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm104-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V164H104a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,152Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment2(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block2;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_1;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_2;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_3;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_4;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_5;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var FilePlus = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var FilePlus_default = FilePlus;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FilePlus/index.js
var FilePlus_default2 = FilePlus_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FolderPlus/FolderPlus.svelte
function create_else_block2(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_52(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4ZM156,144a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V148H104a4,4,0,0,1,0-8h20V120a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,144Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_42(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Zm-88-88a8,8,0,0,1,8,8v16h16a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120A8,8,0,0,1,128,112Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_32(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2ZM158,144a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V150H104a6,6,0,0,1,0-12h18V120a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,144Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_22(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Zm112,96H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_12(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Zm-88-88a8,8,0,0,1,8,8v16h16a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120A8,8,0,0,1,128,112Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block3(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM90.61,56l10.67,12H44V56ZM212,196H44V92H212Zm-72-76v12h12a12,12,0,0,1,0,24H140v12a12,12,0,0,1-24,0V156H104a12,12,0,0,1,0-24h12V120a12,12,0,0,1,24,0Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment3(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block3;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_12;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_22;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_32;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_42;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_52;
    return create_else_block2;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var FolderPlus = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment3, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var FolderPlus_default = FolderPlus;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FolderPlus/index.js
var FolderPlus_default2 = FolderPlus_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Trash/Trash.svelte
function create_else_block3(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_53(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_43(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_33(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_23(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_13(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block4(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment4(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block4;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_13;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_23;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_33;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_43;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_53;
    return create_else_block3;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var Trash = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment4, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var Trash_default = Trash;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Trash/index.js
var Trash_default2 = Trash_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Folder/Folder.svelte
function create_else_block4(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_54(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM36,56a4,4,0,0,1,4-4H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_44(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_34(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_24(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_14(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block5(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment5(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block5;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_14;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_24;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_34;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_44;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_54;
    return create_else_block4;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var Folder = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment5, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var Folder_default = Folder;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Folder/index.js
var Folder_default2 = Folder_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FolderOpen/FolderOpen.svelte
function create_else_block5(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_55(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H130.66a4,4,0,0,1-2.4-.8L100.53,54.4a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208h0a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8l27.73,20.8a12.07,12.07,0,0,0,7.2,2.4H200a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_45(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64l27.73,20.8a16.12,16.12,0,0,0,9.6,3.2H200v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_35(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130.67a2,2,0,0,1-1.2-.4L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208h0a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4l27.73,20.8a14.06,14.06,0,0,0,8.4,2.8H200a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_25(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64l27.73,20.8a16.12,16.12,0,0,0,9.6,3.2H200v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_15(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200A8,8,0,0,1,208,88Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64l27.73,20.8a16.12,16.12,0,0,0,9.6,3.2H200v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block6(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208h0a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l26.67,20a20.12,20.12,0,0,0,12,4H196v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment6(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block6;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_15;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_25;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_35;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_45;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_55;
    return create_else_block5;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance6($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var FolderOpen = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance6, create_fragment6, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var FolderOpen_default = FolderOpen;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FolderOpen/index.js
var FolderOpen_default2 = FolderOpen_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FileCss/FileCss.svelte
function create_else_block6(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_56(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M44,180c0,13.23,9,24,20,24a18.15,18.15,0,0,0,13.11-5.9,4,4,0,0,1,5.78,5.54A26.13,26.13,0,0,1,64,212c-15.44,0-28-14.36-28-32s12.56-32,28-32a26.13,26.13,0,0,1,18.89,8.36,4,4,0,0,1-5.78,5.54A18.15,18.15,0,0,0,64,156C53,156,44,166.77,44,180Zm82.49-4.85c-10.53-3-15.08-4.91-14.43-10.08a8.57,8.57,0,0,1,3.75-6.49c6.26-4.23,18.77-2.24,23.07-1.11a4,4,0,0,0,2-7.74,61.11,61.11,0,0,0-10.47-1.61c-8.12-.54-14.54.75-19.1,3.82a16.63,16.63,0,0,0-7.22,12.13c-1.58,12.49,10.46,16,20.14,18.77,11.25,3.25,16.47,5.49,15.63,11.94a8.93,8.93,0,0,1-3.9,6.75c-6.28,4.17-18.61,2.05-22.83.88a4,4,0,1,0-2.15,7.7A57.79,57.79,0,0,0,125.19,212c5.18,0,10.83-.86,15.22-3.77a17,17,0,0,0,7.43-12.41C149.64,181.84,136.26,178,126.49,175.15Zm64,0c-10.53-3-15.08-4.91-14.43-10.08a8.57,8.57,0,0,1,3.75-6.49c6.26-4.23,18.77-2.24,23.07-1.11a4,4,0,0,0,2-7.74,61.33,61.33,0,0,0-10.48-1.61c-8.11-.54-14.54.75-19.09,3.82a16.63,16.63,0,0,0-7.22,12.13c-1.59,12.49,10.46,16,20.14,18.77,11.25,3.25,16.46,5.49,15.63,11.94a8.93,8.93,0,0,1-3.9,6.75c-6.28,4.17-18.61,2.05-22.83.88a4,4,0,1,0-2.15,7.7A57.7,57.7,0,0,0,189.19,212c5.17,0,10.83-.86,15.22-3.77a17,17,0,0,0,7.43-12.41C213.63,181.84,200.26,178,190.49,175.15ZM204,92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88v24a4,4,0,0,1-8,0Zm-5.65-8L156,41.65V84Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_46(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_36(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M46,180c0,12.13,8.07,22,18,22a16.21,16.21,0,0,0,11.66-5.28,6,6,0,0,1,8.67,8.3A28.09,28.09,0,0,1,64,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a28.09,28.09,0,0,1,20.33,9,6,6,0,0,1-8.67,8.3A16.21,16.21,0,0,0,64,158C54.07,158,46,167.86,46,180Zm81-6.77c-10.85-3.13-13.4-4.69-13-7.91a6.56,6.56,0,0,1,2.88-5.08c5.59-3.79,17.66-1.82,21.44-.84a6,6,0,1,0,3.06-11.6c-2-.53-20.09-5-31.2,2.48a18.62,18.62,0,0,0-8.09,13.54c-1.79,14.19,12.27,18.25,21.57,20.94,12.12,3.5,14.78,5.33,14.21,9.76a6.89,6.89,0,0,1-3,5.34c-5.6,3.73-17.48,1.64-21.18.62A6,6,0,1,0,110.48,212a59.29,59.29,0,0,0,14.67,2c5.49,0,11.55-.95,16.36-4.14a18.89,18.89,0,0,0,8.31-13.81C151.83,180.39,136.92,176.08,127,173.22Zm64,0c-10.85-3.13-13.41-4.69-13-7.91a6.59,6.59,0,0,1,2.88-5.08c5.6-3.79,17.65-1.83,21.44-.84a6,6,0,0,0,3.07-11.6c-2-.54-20.1-5-31.21,2.48a18.64,18.64,0,0,0-8.08,13.54c-1.8,14.19,12.26,18.25,21.57,20.94,12.12,3.5,14.77,5.33,14.2,9.76a6.85,6.85,0,0,1-3,5.34c-5.61,3.73-17.48,1.64-21.19.62A6,6,0,0,0,174.47,212a59.41,59.41,0,0,0,14.68,2c5.49,0,11.54-.95,16.36-4.14a18.89,18.89,0,0,0,8.31-13.81C215.83,180.39,200.91,176.08,191,173.22ZM202,94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,1,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,1,1-12,0ZM193.5,82,158,46.48V82Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_26(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.2,14.2,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.35-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-8,8H48A8,8,0,0,1,40,112ZM152,88h44L152,44Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_16(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M208,88H152V32Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M48,180c0,11,7.18,20,16,20a14.2,14.2,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.35-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block7(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M48,180c0,8.67,5.5,16,12,16a10.27,10.27,0,0,0,7.33-3.43,12,12,0,1,1,17.34,16.6A34,34,0,0,1,60,220C40.15,220,24,202,24,180s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,1,1-17.34,16.6A10.27,10.27,0,0,0,60,164C53.5,164,48,171.31,48,180Zm97.51-5.71c-5.12-3.45-11.32-5.24-16.8-6.82a79.5,79.5,0,0,1-7.91-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,143,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.49,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,125.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C157,187.53,153.33,179.53,145.51,174.27Zm68,0c-5.12-3.45-11.32-5.24-16.8-6.82a79.5,79.5,0,0,1-7.91-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,211,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.49,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,193.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C225,187.53,221.33,179.53,213.51,174.27ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,1,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,1,1-24,0ZM160,80h23L160,57Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment7(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block7;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_16;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_26;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_36;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_46;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_56;
    return create_else_block6;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance7($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var FileCss = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance7, create_fragment7, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var FileCss_default = FileCss;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/FileCss/index.js
var FileCss_default2 = FileCss_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Circle/Circle.svelte
function create_else_block7(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_57(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_47(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_37(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_27(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_17(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block8(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment8(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block8;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_17;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_27;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_37;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_47;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_57;
    return create_else_block7;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance8($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var Circle = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance8, create_fragment8, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var Circle_default = Circle;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Circle/index.js
var Circle_default2 = Circle_default;

// src/renderer/ui/components/QuickCss/File.svelte
function create_else_block8(ctx) {
  let span;
  let t_value = (
    /*file*/
    ctx[1].name + ""
  );
  let t2;
  return {
    c() {
      span = element("span");
      t2 = text(t_value);
      attr(span, "class", "item-name");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*file*/
      2 && t_value !== (t_value = /*file*/
      ctx2[1].name + ""))
        set_data(t2, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_if_block_18(ctx) {
  let input_1;
  let input_1_value_value;
  let mounted;
  let dispose;
  return {
    c() {
      input_1 = element("input");
      attr(input_1, "class", "rename-input");
      attr(input_1, "autocorrect", "off");
      attr(input_1, "autocapitalize", "off");
      attr(input_1, "spellcheck", "false");
      attr(input_1, "type", "text");
      input_1.value = input_1_value_value = /*file*/
      ctx[1].name;
    },
    m(target, anchor) {
      insert(target, input_1, anchor);
      ctx[8](input_1);
      if (!mounted) {
        dispose = [
          listen(
            input_1,
            "keydown",
            /*handleKeyPress*/
            ctx[7]
          ),
          listen(input_1, "focusout", function() {
            if (is_function(
              /*rename*/
              ctx[0] && /*toggleRename*/
              ctx[6]
            ))
              /*rename*/
              (ctx[0] && /*toggleRename*/
              ctx[6]).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*file*/
      2 && input_1_value_value !== (input_1_value_value = /*file*/
      ctx[1].name) && input_1.value !== input_1_value_value) {
        input_1.value = input_1_value_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(input_1);
      }
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block9(ctx) {
  let circle;
  let current;
  circle = new Circle_default2({ props: { weight: "fill" } });
  return {
    c() {
      create_component(circle.$$.fragment);
    },
    m(target, anchor) {
      mount_component(circle, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(circle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(circle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(circle, detaching);
    }
  };
}
function create_fragment9(ctx) {
  let button;
  let cssfile;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  cssfile = new FileCss_default2({ props: { weight: "bold" } });
  function select_block_type(ctx2, dirty) {
    if (
      /*rename*/
      ctx2[0]
    )
      return create_if_block_18;
    return create_else_block8;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*$fileStatus*/
    ctx[4]?.[
      /*file*/
      ctx[1].location
    ]?.unsaved && create_if_block9(ctx)
  );
  return {
    c() {
      button = element("button");
      create_component(cssfile.$$.fragment);
      t0 = space();
      if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr(button, "class", "item file");
      set_style(
        button,
        "--depth",
        /*depth*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(cssfile, button, null);
      append(button, t0);
      if_block0.m(button, null);
      append(button, t1);
      if (if_block1)
        if_block1.m(button, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button,
            "click",
            /*handleSubmit*/
            ctx[5]
          ),
          listen(button, "submit", stop_propagation(
            /*handleSubmit*/
            ctx[5]
          )),
          listen(
            button,
            "dblclick",
            /*toggleRename*/
            ctx[6]
          ),
          listen(button, "keydown", self(stop_propagation(
            /*handleKeyPress*/
            ctx[7]
          )))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(button, t1);
        }
      }
      if (
        /*$fileStatus*/
        ctx2[4]?.[
          /*file*/
          ctx2[1].location
        ]?.unsaved
      ) {
        if (if_block1) {
          if (dirty & /*$fileStatus, file*/
          18) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block9(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(button, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*depth*/
      4) {
        set_style(
          button,
          "--depth",
          /*depth*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cssfile.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(cssfile.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      destroy_component(cssfile);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance9($$self, $$props, $$invalidate) {
  let $fileStatus;
  component_subscribe($$self, fileStatus, ($$value) => $$invalidate(4, $fileStatus = $$value));
  let { file } = $$props;
  let { rename = false } = $$props;
  let { depth = 0 } = $$props;
  function handleSubmit() {
    selectedFile.set(file);
  }
  let input;
  function toggleRename() {
    if (rename && input?.value !== file.name)
      PopcornNative.renameQuickCssNode(file.location, input.value);
    $$invalidate(0, rename = !rename);
  }
  function handleKeyPress(event) {
    switch (event.key) {
      case "F2":
        toggleRename();
        break;
      case "Enter":
        if (rename)
          toggleRename();
        break;
    }
  }
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(3, input);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("file" in $$props2)
      $$invalidate(1, file = $$props2.file);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("depth" in $$props2)
      $$invalidate(2, depth = $$props2.depth);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*input*/
    8) {
      $:
        if (input) {
          input.focus();
          input.setSelectionRange(0, input.value.length - 4);
        }
    }
  };
  return [
    rename,
    file,
    depth,
    input,
    $fileStatus,
    handleSubmit,
    toggleRename,
    handleKeyPress,
    input_1_binding
  ];
}
var File = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance9, create_fragment9, safe_not_equal, { file: 1, rename: 0, depth: 2 });
  }
};
var File_default = File;

// src/renderer/ui/components/QuickCss/Folder.svelte
function get_each_context(ctx, list, i3) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i3];
  return child_ctx;
}
function create_else_block_2(ctx) {
  let folder_1;
  let current;
  folder_1 = new Folder_default2({ props: { weight: "bold" } });
  return {
    c() {
      create_component(folder_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(folder_1, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(folder_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(folder_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(folder_1, detaching);
    }
  };
}
function create_if_block_38(ctx) {
  let folderopen;
  let current;
  folderopen = new FolderOpen_default2({ props: { weight: "bold" } });
  return {
    c() {
      create_component(folderopen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(folderopen, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(folderopen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(folderopen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(folderopen, detaching);
    }
  };
}
function create_else_block_1(ctx) {
  let span;
  let t_value = (
    /*folder*/
    ctx[2].name + ""
  );
  let t2;
  return {
    c() {
      span = element("span");
      t2 = text(t_value);
      attr(span, "class", "item-name");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*folder*/
      4 && t_value !== (t_value = /*folder*/
      ctx2[2].name + ""))
        set_data(t2, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_if_block_28(ctx) {
  let input_1;
  let input_1_value_value;
  let mounted;
  let dispose;
  return {
    c() {
      input_1 = element("input");
      attr(input_1, "class", "rename-input");
      attr(input_1, "autocorrect", "off");
      attr(input_1, "autocapitalize", "off");
      attr(input_1, "spellcheck", "false");
      attr(input_1, "type", "text");
      input_1.value = input_1_value_value = /*folder*/
      ctx[2].name;
    },
    m(target, anchor) {
      insert(target, input_1, anchor);
      ctx[8](input_1);
      if (!mounted) {
        dispose = [
          listen(
            input_1,
            "keydown",
            /*handleKeyPress*/
            ctx[7]
          ),
          listen(input_1, "focusout", function() {
            if (is_function(
              /*rename*/
              ctx[0] && /*toggleRename*/
              ctx[6]
            ))
              /*rename*/
              (ctx[0] && /*toggleRename*/
              ctx[6]).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*folder*/
      4 && input_1_value_value !== (input_1_value_value = /*folder*/
      ctx[2].name) && input_1.value !== input_1_value_value) {
        input_1.value = input_1_value_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(input_1);
      }
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block10(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ensure_array_like(
    /*folder*/
    ctx[2].files
  );
  let each_blocks = [];
  for (let i3 = 0; i3 < each_value.length; i3 += 1) {
    each_blocks[i3] = create_each_block(get_each_context(ctx, each_value, i3));
  }
  const out = (i3) => transition_out(each_blocks[i3], 1, 1, () => {
    each_blocks[i3] = null;
  });
  return {
    c() {
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        each_blocks[i3].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        if (each_blocks[i3]) {
          each_blocks[i3].m(target, anchor);
        }
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*folder, depth*/
      12) {
        each_value = ensure_array_like(
          /*folder*/
          ctx2[2].files
        );
        let i3;
        for (i3 = 0; i3 < each_value.length; i3 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i3);
          if (each_blocks[i3]) {
            each_blocks[i3].p(child_ctx, dirty);
            transition_in(each_blocks[i3], 1);
          } else {
            each_blocks[i3] = create_each_block(child_ctx);
            each_blocks[i3].c();
            transition_in(each_blocks[i3], 1);
            each_blocks[i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i3 = each_value.length; i3 < each_blocks.length; i3 += 1) {
          out(i3);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i3 = 0; i3 < each_value.length; i3 += 1) {
        transition_in(each_blocks[i3]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        transition_out(each_blocks[i3]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_else_block9(ctx) {
  let file;
  let current;
  file = new File_default({
    props: {
      file: (
        /*item*/
        ctx[9]
      ),
      depth: (
        /*depth*/
        ctx[3] + 1
      )
    }
  });
  return {
    c() {
      create_component(file.$$.fragment);
    },
    m(target, anchor) {
      mount_component(file, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const file_changes = {};
      if (dirty & /*folder*/
      4)
        file_changes.file = /*item*/
        ctx2[9];
      if (dirty & /*depth*/
      8)
        file_changes.depth = /*depth*/
        ctx2[3] + 1;
      file.$set(file_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(file.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(file.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(file, detaching);
    }
  };
}
function create_if_block_19(ctx) {
  let folder_1;
  let current;
  folder_1 = new Folder_1({
    props: {
      folder: (
        /*item*/
        ctx[9]
      ),
      depth: (
        /*depth*/
        ctx[3] + 1
      )
    }
  });
  return {
    c() {
      create_component(folder_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(folder_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const folder_1_changes = {};
      if (dirty & /*folder*/
      4)
        folder_1_changes.folder = /*item*/
        ctx2[9];
      if (dirty & /*depth*/
      8)
        folder_1_changes.depth = /*depth*/
        ctx2[3] + 1;
      folder_1.$set(folder_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(folder_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(folder_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(folder_1, detaching);
    }
  };
}
function create_each_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_19, create_else_block9];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if ("files" in /*item*/
    ctx2[9])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function create_fragment10(ctx) {
  let button;
  let current_block_type_index;
  let if_block0;
  let t0;
  let t1;
  let if_block2_anchor;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_38, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*opened*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function select_block_type_1(ctx2, dirty) {
    if (
      /*rename*/
      ctx2[0]
    )
      return create_if_block_28;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_1(ctx, -1);
  let if_block1 = current_block_type(ctx);
  let if_block2 = (
    /*opened*/
    ctx[1] && create_if_block10(ctx)
  );
  return {
    c() {
      button = element("button");
      if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      attr(button, "class", "item folder");
      set_style(
        button,
        "--depth",
        /*depth*/
        ctx[3]
      );
      attr(
        button,
        "data-opened",
        /*opened*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_blocks[current_block_type_index].m(button, null);
      append(button, t0);
      if_block1.m(button, null);
      insert(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, if_block2_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button,
            "click",
            /*handleSubmit*/
            ctx[5]
          ),
          listen(button, "submit", stop_propagation(
            /*handleSubmit*/
            ctx[5]
          )),
          listen(
            button,
            "dblclick",
            /*toggleRename*/
            ctx[6]
          ),
          listen(button, "keydown", self(stop_propagation(
            /*handleKeyPress*/
            ctx[7]
          )))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
        }
        transition_in(if_block0, 1);
        if_block0.m(button, t0);
      }
      if (current_block_type === (current_block_type = select_block_type_1(ctx2, dirty)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(button, null);
        }
      }
      if (!current || dirty & /*depth*/
      8) {
        set_style(
          button,
          "--depth",
          /*depth*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*opened*/
      2) {
        attr(
          button,
          "data-opened",
          /*opened*/
          ctx2[1]
        );
      }
      if (
        /*opened*/
        ctx2[1]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*opened*/
          2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block10(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(button);
        detach(t1);
        detach(if_block2_anchor);
      }
      if_blocks[current_block_type_index].d();
      if_block1.d();
      if (if_block2)
        if_block2.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance10($$self, $$props, $$invalidate) {
  let { folder } = $$props;
  let { rename = false } = $$props;
  let { opened = true } = $$props;
  let { depth = 0 } = $$props;
  function handleSubmit() {
    $$invalidate(1, opened = !opened);
    selectedFolder.set(folder);
  }
  let input;
  function toggleRename() {
    if (rename && input?.value !== folder.name)
      PopcornNative.renameQuickCssNode(folder.location, input.value);
    $$invalidate(0, rename = !rename);
  }
  function handleKeyPress(event) {
    switch (event.key) {
      case "F2":
        toggleRename();
        break;
      case "Enter":
        if (rename)
          toggleRename();
        break;
    }
  }
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(4, input);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("folder" in $$props2)
      $$invalidate(2, folder = $$props2.folder);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("opened" in $$props2)
      $$invalidate(1, opened = $$props2.opened);
    if ("depth" in $$props2)
      $$invalidate(3, depth = $$props2.depth);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*input*/
    16) {
      $:
        if (input) {
          input.focus();
          input.setSelectionRange(0, input.value.length);
        }
    }
  };
  return [
    rename,
    opened,
    folder,
    depth,
    input,
    handleSubmit,
    toggleRename,
    handleKeyPress,
    input_1_binding
  ];
}
var Folder_1 = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance10, create_fragment10, safe_not_equal, {
      folder: 2,
      rename: 0,
      opened: 1,
      depth: 3
    });
  }
};
var Folder_default3 = Folder_1;

// src/renderer/ui/components/QuickCss/Sidebar.svelte
function create_fragment11(ctx) {
  let div1;
  let div0;
  let button0;
  let trash;
  let t0;
  let span;
  let t1_value = (
    /*$latestSelection*/
    ctx[1].name + ""
  );
  let t1;
  let t2;
  let button1;
  let newfile;
  let t3;
  let button2;
  let newfolder;
  let t4;
  let folder;
  let current;
  let mounted;
  let dispose;
  trash = new Trash_default2({ props: { weight: "bold" } });
  newfile = new FilePlus_default2({ props: { weight: "bold" } });
  newfolder = new FolderPlus_default2({ props: { weight: "bold" } });
  folder = new Folder_default3({
    props: { folder: window.Popcorn.quickCss }
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      button0 = element("button");
      create_component(trash.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      button1 = element("button");
      create_component(newfile.$$.fragment);
      t3 = space();
      button2 = element("button");
      create_component(newfolder.$$.fragment);
      t4 = space();
      create_component(folder.$$.fragment);
      attr(button0, "class", "action PopcornUI-1je845r");
      attr(button0, "data-action", "delete");
      attr(span, "class", "selected-file");
      attr(button1, "class", "action PopcornUI-1je845r");
      attr(button1, "data-action", "new-file");
      attr(button2, "class", "action PopcornUI-1je845r");
      attr(button2, "data-action", "new-folder");
      attr(div0, "class", "action-bar PopcornUI-1je845r");
      attr(div1, "class", "sidebar PopcornUI-1je845r");
      set_style(div1, "width", "22ch");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, button0);
      mount_component(trash, button0, null);
      append(div0, t0);
      append(div0, span);
      append(span, t1);
      append(div0, t2);
      append(div0, button1);
      mount_component(newfile, button1, null);
      append(div0, t3);
      append(div0, button2);
      mount_component(newfolder, button2, null);
      append(div1, t4);
      mount_component(folder, div1, null);
      ctx[5](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*handleDelete*/
            ctx[2]
          ),
          listen(
            button0,
            "submit",
            /*handleDelete*/
            ctx[2]
          ),
          listen(
            button1,
            "click",
            /*handleNewFile*/
            ctx[3]
          ),
          listen(
            button1,
            "submit",
            /*handleNewFile*/
            ctx[3]
          ),
          listen(
            button2,
            "click",
            /*handleNewFolder*/
            ctx[4]
          ),
          listen(
            button2,
            "submit",
            /*handleNewFolder*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*$latestSelection*/
      2) && t1_value !== (t1_value = /*$latestSelection*/
      ctx2[1].name + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(trash.$$.fragment, local);
      transition_in(newfile.$$.fragment, local);
      transition_in(newfolder.$$.fragment, local);
      transition_in(folder.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(trash.$$.fragment, local);
      transition_out(newfile.$$.fragment, local);
      transition_out(newfolder.$$.fragment, local);
      transition_out(folder.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_component(trash);
      destroy_component(newfile);
      destroy_component(newfolder);
      destroy_component(folder);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
var fileStatus = writable({});
function instance11($$self, $$props, $$invalidate) {
  let $selectedFolder;
  let $latestSelection;
  component_subscribe($$self, selectedFolder, ($$value) => $$invalidate(6, $selectedFolder = $$value));
  component_subscribe($$self, latestSelection, ($$value) => $$invalidate(1, $latestSelection = $$value));
  let elementDiv;
  const dispatch = createEventDispatcher();
  onMount(() => {
    const resizeObserver = new ResizeObserver((mutation) => {
      dispatch("resize", mutation[0]);
    });
    resizeObserver.observe(elementDiv);
    return () => {
      resizeObserver.disconnect();
    };
  });
  function handleDelete() {
    PopcornNative.deleteQuickCssNode($latestSelection.location);
  }
  function handleNewFile() {
    PopcornNative.createQuickCssNode($selectedFolder.location, "file");
  }
  function handleNewFolder() {
    PopcornNative.createQuickCssNode($selectedFolder.location, "folder");
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elementDiv = $$value;
      $$invalidate(0, elementDiv);
    });
  }
  return [
    elementDiv,
    $latestSelection,
    handleDelete,
    handleNewFile,
    handleNewFolder,
    div1_binding
  ];
}
var Sidebar = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance11, create_fragment11, safe_not_equal, {});
  }
};
var Sidebar_default = Sidebar;

// src/renderer/ui/tabs/QuickCss.svelte
function create_key_block(ctx) {
  let sidebar;
  let current;
  sidebar = new Sidebar_default({});
  sidebar.$on("resize", function() {
    if (is_function(r(
      /*recalculateSize*/
      ctx[1],
      50
    )))
      r(
        /*recalculateSize*/
        ctx[1],
        50
      ).apply(this, arguments);
  });
  return {
    c() {
      create_component(sidebar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(sidebar, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidebar, detaching);
    }
  };
}
function create_else_block10(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "Select a file to edit";
      attr(span, "class", "no-file-selected");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(span);
      }
    }
  };
}
function create_if_block11(ctx) {
  let div;
  let span;
  let t0_value = (
    /*$selectedFile*/
    ctx[2].location + ""
  );
  let t0;
  let t1;
  let t2;
  let monacoeditor;
  let updating_content;
  let updating_recalculateSize;
  let current;
  let if_block = (
    /*$status*/
    ctx[4].type && create_if_block_110(ctx)
  );
  function monacoeditor_content_binding(value) {
    ctx[8](value);
  }
  function monacoeditor_recalculateSize_binding(value) {
    ctx[9](value);
  }
  let monacoeditor_props = {
    actions: (
      /*actions*/
      ctx[5]
    ),
    commands: (
      /*commands*/
      ctx[6]
    )
  };
  if (
    /*editorContent*/
    ctx[0] !== void 0
  ) {
    monacoeditor_props.content = /*editorContent*/
    ctx[0];
  }
  if (
    /*recalculateSize*/
    ctx[1] !== void 0
  ) {
    monacoeditor_props.recalculateSize = /*recalculateSize*/
    ctx[1];
  }
  monacoeditor = new MonacoEditor_default({ props: monacoeditor_props });
  binding_callbacks.push(() => bind(monacoeditor, "content", monacoeditor_content_binding));
  binding_callbacks.push(() => bind(monacoeditor, "recalculateSize", monacoeditor_recalculateSize_binding));
  monacoeditor.$on(
    "change",
    /*handleChange*/
    ctx[7]
  );
  return {
    c() {
      div = element("div");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      create_component(monacoeditor.$$.fragment);
      attr(span, "class", "selected-file");
      attr(div, "class", "status-bar PopcornUI-szncc9");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, span);
      append(span, t0);
      append(div, t1);
      if (if_block)
        if_block.m(div, null);
      insert(target, t2, anchor);
      mount_component(monacoeditor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*$selectedFile*/
      4) && t0_value !== (t0_value = /*$selectedFile*/
      ctx2[2].location + ""))
        set_data(t0, t0_value);
      if (
        /*$status*/
        ctx2[4].type
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_110(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const monacoeditor_changes = {};
      if (!updating_content && dirty & /*editorContent*/
      1) {
        updating_content = true;
        monacoeditor_changes.content = /*editorContent*/
        ctx2[0];
        add_flush_callback(() => updating_content = false);
      }
      if (!updating_recalculateSize && dirty & /*recalculateSize*/
      2) {
        updating_recalculateSize = true;
        monacoeditor_changes.recalculateSize = /*recalculateSize*/
        ctx2[1];
        add_flush_callback(() => updating_recalculateSize = false);
      }
      monacoeditor.$set(monacoeditor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(monacoeditor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(monacoeditor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
        detach(t2);
      }
      if (if_block)
        if_block.d();
      destroy_component(monacoeditor, detaching);
    }
  };
}
function create_if_block_110(ctx) {
  let div1;
  let div0;
  let t_value = (
    /*$status*/
    ctx[4].message + ""
  );
  let t2;
  let div1_data_type_value;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t2 = text(t_value);
      attr(div0, "class", "status-message");
      attr(div1, "class", "status");
      attr(div1, "data-type", div1_data_type_value = /*$status*/
      ctx[4].type);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*$status*/
      16 && t_value !== (t_value = /*$status*/
      ctx2[4].message + ""))
        set_data(t2, t_value);
      if (dirty & /*$status*/
      16 && div1_data_type_value !== (div1_data_type_value = /*$status*/
      ctx2[4].type)) {
        attr(div1, "data-type", div1_data_type_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
    }
  };
}
function create_fragment12(ctx) {
  let div;
  let previous_key = (
    /*$rerenderStore*/
    ctx[3]
  );
  let t2;
  let current_block_type_index;
  let if_block;
  let current;
  let key_block = create_key_block(ctx);
  const if_block_creators = [create_if_block11, create_else_block10];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$selectedFile*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      key_block.c();
      t2 = space();
      if_block.c();
      attr(div, "class", "quickCss-wrapper PopcornUI-szncc9");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      key_block.m(div, null);
      append(div, t2);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$rerenderStore*/
      8 && safe_not_equal(previous_key, previous_key = /*$rerenderStore*/
      ctx2[3])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(div, t2);
      } else {
        key_block.p(ctx2, dirty);
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      key_block.d(detaching);
      if_blocks[current_block_type_index].d();
    }
  };
}
var rerenderStore = writable();
function rerenderSidebar() {
  rerenderStore.update((obj) => !obj);
}
var selectedNode = writable();
var selectedFile = writable();
var selectedFolder = writable();
var latestSelection = { subscribe: selectedNode.subscribe };
var status = writable({});
function instance12($$self, $$props, $$invalidate) {
  let $selectedFile, $$unsubscribe_selectedFile = noop, $$subscribe_selectedFile = () => ($$unsubscribe_selectedFile(), $$unsubscribe_selectedFile = subscribe(selectedFile, ($$value) => $$invalidate(2, $selectedFile = $$value)), selectedFile);
  let $fileStatus;
  let $rerenderStore;
  let $status, $$unsubscribe_status = noop, $$subscribe_status = () => ($$unsubscribe_status(), $$unsubscribe_status = subscribe(status, ($$value) => $$invalidate(4, $status = $$value)), status);
  component_subscribe($$self, selectedFile, ($$value) => $$invalidate(2, $selectedFile = $$value));
  component_subscribe($$self, fileStatus, ($$value) => $$invalidate(10, $fileStatus = $$value));
  component_subscribe($$self, rerenderStore, ($$value) => $$invalidate(3, $rerenderStore = $$value));
  component_subscribe($$self, status, ($$value) => $$invalidate(4, $status = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_selectedFile());
  $$self.$$.on_destroy.push(() => $$unsubscribe_status());
  let editorContent;
  selectedFile.subscribe((file) => {
    if (file)
      $$invalidate(0, editorContent = file.content);
    selectedNode.set(file);
  });
  selectedFolder.subscribe((folder) => {
    selectedNode.set(folder);
  });
  let actions = [
    {
      id: "save",
      label: "Save the currently selected file",
      handler: save
    }
  ];
  let commands = [
    {
      keybinding: (KeyCode, KeyMod) => KeyMod.CtrlCmd | KeyCode.KeyS,
      handler: save
    }
  ];
  function handleChange() {
    set_store_value(fileStatus, $fileStatus[$selectedFile.location] ??= {}, $fileStatus);
    set_store_value(fileStatus, $fileStatus[$selectedFile.location].unsaved = true, $fileStatus);
  }
  function save() {
    set_store_value(fileStatus, $fileStatus[$selectedFile.location].unsaved = false, $fileStatus);
    PopcornNative.updateQuickCssFile($selectedFile.location, editorContent);
  }
  let recalculateSize;
  function monacoeditor_content_binding(value) {
    editorContent = value;
    $$invalidate(0, editorContent);
  }
  function monacoeditor_recalculateSize_binding(value) {
    recalculateSize = value;
    $$invalidate(1, recalculateSize);
  }
  return [
    editorContent,
    recalculateSize,
    $selectedFile,
    $rerenderStore,
    $status,
    actions,
    commands,
    handleChange,
    monacoeditor_content_binding,
    monacoeditor_recalculateSize_binding
  ];
}
var QuickCss = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance12, create_fragment12, safe_not_equal, {});
  }
};
var QuickCss_default = QuickCss;

// src/common/constants.ts
var prefixes = {
  main: "POPCORN_",
  quickCss: "QUICKCSS_"
};
var IPC = prefixValues({
  // Misc
  getConfig: "GET_CONFIG",
  getStyles: "GET_STYLES",
  statusMessage: "STATUS_MESSAGE",
  getWindowData: "GET_WINDOW_DATA",
  log: "LOG",
  // Themes
  getThemes: "GET_THEMES",
  onThemeChange: "ON_THEME_CHANGE",
  saveThemeState: "SAVE_THEME_STATE",
  // QuickCSS
  getQuickCss: "GET_QUICK_CSS",
  onQuickCssChange: "ON_QUICK_CSS_CHANGE",
  createQuickCssNode: "CREATE_QUICK_CSS_NODE",
  deleteQuickCssNode: "DELETE_QUICK_CSS_NODE",
  renameQuickCssNode: "RENAME_QUICK_CSS_NODE",
  updateQuickCssFile: "SAVE_QUICK_CSS_FILE"
}, prefixes.main);
var MESSAGES = {
  quickCss: prefixValues({
    created: "CREATED",
    deleted: "DELETED",
    renamed: "RENAMED",
    updated: "UPDATED"
  }, prefixes.quickCss)
};
var RENDERER = prefixValues({
  stop: "STOP"
}, prefixes.main);
function prefixValues(object, prefix) {
  const result = {};
  for (const key in object) {
    result[key] = prefix + object[key];
  }
  return result;
}

// src/common/logger.ts
var LoggerModule = class _LoggerModule {
  constructor(module, type = "console") {
    this.module = module;
    this.output = _LoggerModule.getOutput(type);
    if (this.output === "ansi") {
      this.logArchive = [];
      (async () => {
        const { app } = await import("electron");
        app.on("web-contents-created", (_, webContents) => {
          for (const log of this.logArchive) {
            webContents.send(IPC.log, log.type, ...log.message);
          }
        });
      })();
    }
  }
  output;
  logArchive;
  static getOutput(output) {
    switch (output) {
      case "ansi":
      case "terminal":
        return "ansi";
      default:
        return "console";
    }
  }
  static getColor(type) {
    switch (type) {
      case "debug":
        return {
          str: "MediumSpringGreen",
          arr: [0, 250, 154]
        };
      case "info":
        return {
          str: "DeepSkyBlue",
          arr: [0, 191, 255]
        };
      case "error":
        return {
          str: "crimson",
          arr: [220, 20, 60]
        };
      case "warn":
        return {
          str: "DarkOrange",
          arr: [255, 140, 0]
        };
      default:
        return {
          str: "gold",
          arr: [255, 215, 0]
        };
    }
  }
  static ansiColor(color, message) {
    return `\x1B[38;2;${color[0]};${color[1]};${color[2]}m${message}\x1B[0m`;
  }
  async #log(type, message) {
    const logColor = _LoggerModule.getColor(type);
    const banner = this.output === "ansi" ? [`[${_LoggerModule.ansiColor(logColor.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str};`, ""];
    console[type](...banner, ...message);
    if (this.output === "ansi") {
      const { BrowserWindow } = await import("electron");
      this.logArchive.push({ type, message });
      BrowserWindow.getAllWindows().forEach((win) => win.webContents.send(IPC.log, type, ...message));
    }
  }
  log = (...message) => this.#log("log", message);
  info = (...message) => this.#log("info", message);
  warn = (...message) => this.#log("warn", message);
  error = (...message) => this.#log("error", message);
  debug = (...message) => this.#log("debug", message);
};
var logger_default = LoggerModule;

// src/renderer/quickcss/index.ts
var Logger = new logger_default("QuickCSS");
var QuickCss2 = class {
  styleElements = /* @__PURE__ */ new Map();
  constructor() {
    this.populateQuickCss();
    this.watchQuickCss();
    selectedFolder.set(window.Popcorn.quickCss);
  }
  populateQuickCss() {
    const { imports, contents } = compileQuickCss(window.Popcorn.quickCss);
    const importStyle = this.styleElements.get("imports");
    if (!importStyle) {
      const importStyle2 = document.createElement("style");
      importStyle2.id = "popcorn-quickcss-imports";
      importStyle2.textContent = imports;
      importStyle2.setAttribute("data-popcorn", "quickcss");
      comments.end.after(importStyle2);
      this.styleElements.set("imports", importStyle2);
    } else if (imports !== importStyle.textContent) {
      importStyle.textContent = imports;
    }
    const contentStyle = this.styleElements.get("contents");
    if (!contentStyle) {
      const contentStyle2 = document.createElement("style");
      contentStyle2.id = "popcorn-quickcss-contents";
      contentStyle2.textContent = contents;
      contentStyle2.setAttribute("data-popcorn", "quickcss");
      comments.end.after(contentStyle2);
      this.styleElements.set("contents", contentStyle2);
    } else if (contents !== contentStyle.textContent) {
      contentStyle.textContent = contents;
    }
  }
  #removeListener;
  watchQuickCss() {
    this.#removeListener = PopcornNative.onQuickCssChange(r((updated) => {
      if (PopcornNative.config.verbose)
        Logger.debug("QuickCSS Updated");
      window.Popcorn.quickCss = updated;
      rerenderSidebar();
      this.populateQuickCss();
    }, 100));
  }
  stop() {
    this.#removeListener();
    for (const style of this.styleElements.values()) {
      style.remove();
    }
  }
};
function compileQuickCss(folder) {
  let imports = "";
  let contents = "";
  const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
  for (const node of folder.files) {
    if ("files" in node) {
      const result = compileQuickCss(node);
      imports += result.imports;
      contents += result.contents;
    } else {
      const contentNoImports = node.content.replace(importRegex, (match) => {
        imports += match.replace(/;$/, "") + `; /* ${node.location} */
`;
        return "";
      }).trim();
      if (contentNoImports)
        contents += `

/* ${node.location} */
` + contentNoImports;
    }
  }
  return { imports, contents };
}
function getQuickCssNode(location2, node = window.Popcorn.quickCss) {
  if (node.location === location2)
    return node;
  for (const child of node.files) {
    if ("content" in child) {
      if (child.location === location2)
        return child;
      else
        continue;
    }
    const result = getQuickCssNode(location2, child);
    if (result)
      return result;
  }
  return null;
}

// src/renderer/quickcss/ipc.ts
var Logger2 = new logger_default("QuickCss > IPC");
function handleQuickCssMessages(message) {
  const statusType = message.success ? "success" : "error";
  if (!message.success) {
    Logger2.warn(message.type, "failed");
    return;
  }
  switch (message.type) {
    case MESSAGES.quickCss.created:
      {
        var statusMessage = message.success ? `Created ${location} successfully.` : `Failed to create ${location}.`;
      }
      break;
    case MESSAGES.quickCss.deleted:
      {
        const { type, location: location2 } = message.data;
        if (type === "file" && get_store_value(selectedFile).location === location2)
          selectedFile.set(null);
        else if (type === "folder" && get_store_value(selectedFolder).location === location2)
          selectedFolder.set(null);
        var statusMessage = message.success ? `Deleted ${location2} successfully.` : `Failed to delete ${location2}.`;
      }
      break;
    case MESSAGES.quickCss.renamed:
      {
        const { oldLocation, newLocation } = message.data;
        const node = getQuickCssNode(newLocation);
        const type = "files" in node ? "folder" : "file";
        if (type === "file" && get_store_value(selectedFile).location === oldLocation)
          selectedFile.set(node);
        else if (type === "folder" && get_store_value(selectedFolder).location === oldLocation)
          selectedFolder.set(node);
        var statusMessage = message.success ? `Renamed ${oldLocation} to ${newLocation} successfully.` : `Failed to rename ${oldLocation} to ${newLocation}.`;
      }
      break;
    case MESSAGES.quickCss.updated:
      {
        var statusMessage = message.success ? `Updated ${message.data} successfully.` : `Failed to update ${message.data}.`;
      }
      break;
    default:
      Logger2.warn(`Unknown status message type: ${message.type}`, message);
  }
  if (statusMessage)
    status.set({
      type: statusType,
      message: statusMessage
    });
}

// src/renderer/ipc.ts
var Logger3 = new logger_default("IPC");
PopcornNative.onStatusMessage((message) => {
  if (PopcornNative.config.verbose)
    Logger3.debug(message);
  if (message.type.startsWith(prefixes.quickCss))
    handleQuickCssMessages(message);
});
var IPC2 = class {
  constructor() {
    window.addEventListener("message", this.messageHandler);
  }
  messageHandler(event) {
    if (!(event.source === window && event.data.startsWith(prefixes.main)))
      return;
    switch (event.data) {
      case RENDERER.stop:
        {
          renderer_default.stop();
        }
        break;
    }
  }
  stop() {
    window.removeEventListener("message", this.messageHandler);
  }
};
var ipc_default = IPC2;

// node_modules/.pnpm/auto-bind@5.0.1/node_modules/auto-bind/index.js
var getAllProperties = (object) => {
  const properties = /* @__PURE__ */ new Set();
  do {
    for (const key of Reflect.ownKeys(object)) {
      properties.add([object, key]);
    }
  } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
  return properties;
};
function autoBind(self2, { include, exclude } = {}) {
  const filter = (key) => {
    const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
    if (include) {
      return include.some(match);
    }
    if (exclude) {
      return !exclude.some(match);
    }
    return true;
  };
  for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) {
      continue;
    }
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self2[key] = self2[key].bind(self2);
    }
  }
  return self2;
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@4.1.1/node_modules/@walter-org/svelte-float/dist/utils/deepMerge.js
function isObject3(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject3(target) && isObject3(source)) {
    for (const k2 in source) {
      const key = k2;
      if (isObject3(source[key])) {
        if (!target[key])
          Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@4.1.1/node_modules/@walter-org/svelte-float/dist/utils/em2px.js
function em2px(em, base) {
  base ??= document.documentElement;
  const px = parseFloat(getComputedStyle(base).fontSize);
  return em * px;
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@4.1.1/node_modules/@walter-org/svelte-float/dist/utils/generateID.js
function generateID(length = 8) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
}

// node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[1];
}
function e(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i(i3, r4, a3) {
  let { reference: l3, floating: s3 } = i3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o(r4), u3 = e(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p3;
  switch (n(r4)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r4)) {
    case "start":
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r2 = async (t2, e2, n3) => {
  const { placement: o3 = "bottom", strategy: r4 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
  let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: r4 }), { x: m3, y: u3 } = i(f3, o3, c3), g3 = o3, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o3, placement: g3, strategy: r4, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
    m3 = null != y3 ? y3 : m3, u3 = null != x3 ? x3 : u3, d3 = { ...d3, [a4]: { ...d3[a4], ...w3 } }, v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: r4 }) : v3.rects), { x: m3, y: u3 } = i(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r4, middlewareData: d3 };
};
function a(t2, e2) {
  return "function" == typeof t2 ? t2(e2) : t2;
}
function l(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function s(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
async function c(t2, e2) {
  var n3;
  void 0 === e2 && (e2 = {});
  const { x: o3, y: i3, platform: r4, rects: c3, elements: f3, strategy: m3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: g3 = "viewport", elementContext: d3 = "floating", altBoundary: p3 = false, padding: h3 = 0 } = a(e2, t2), y3 = l(h3), x3 = f3[p3 ? "floating" === d3 ? "reference" : "floating" : d3], w3 = s(await r4.getClippingRect({ element: null == (n3 = await (null == r4.isElement ? void 0 : r4.isElement(x3))) || n3 ? x3 : x3.contextElement || await (null == r4.getDocumentElement ? void 0 : r4.getDocumentElement(f3.floating)), boundary: u3, rootBoundary: g3, strategy: m3 })), v3 = "floating" === d3 ? { ...c3.floating, x: o3, y: i3 } : c3.reference, b3 = await (null == r4.getOffsetParent ? void 0 : r4.getOffsetParent(f3.floating)), A3 = await (null == r4.isElement ? void 0 : r4.isElement(b3)) && await (null == r4.getScale ? void 0 : r4.getScale(b3)) || { x: 1, y: 1 }, R2 = s(r4.convertOffsetParentRelativeRectToViewportRelativeRect ? await r4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v3, offsetParent: b3, strategy: m3 }) : v3);
  return { top: (w3.top - R2.top + y3.top) / A3.y, bottom: (R2.bottom - w3.bottom + y3.bottom) / A3.y, left: (w3.left - R2.left + y3.left) / A3.x, right: (R2.right - w3.right + y3.right) / A3.x };
}
var f = Math.min;
var m = Math.max;
function u(t2, e2, n3) {
  return m(t2, f(e2, n3));
}
var g = (n3) => ({ name: "arrow", options: n3, async fn(i3) {
  const { x: r4, y: s3, placement: c3, rects: m3, platform: g3, elements: d3 } = i3, { element: p3, padding: h3 = 0 } = a(n3, i3) || {};
  if (null == p3)
    return {};
  const y3 = l(h3), x3 = { x: r4, y: s3 }, w3 = o(c3), v3 = e(w3), b3 = await g3.getDimensions(p3), A3 = "y" === w3, R2 = A3 ? "top" : "left", P2 = A3 ? "bottom" : "right", E3 = A3 ? "clientHeight" : "clientWidth", T2 = m3.reference[v3] + m3.reference[w3] - x3[w3] - m3.floating[v3], D3 = x3[w3] - m3.reference[w3], L3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(p3));
  let k2 = L3 ? L3[E3] : 0;
  k2 && await (null == g3.isElement ? void 0 : g3.isElement(L3)) || (k2 = d3.floating[E3] || m3.floating[v3]);
  const O3 = T2 / 2 - D3 / 2, B3 = k2 / 2 - b3[v3] / 2 - 1, C3 = f(y3[R2], B3), H2 = f(y3[P2], B3), S2 = C3, F2 = k2 - b3[v3] - H2, M2 = k2 / 2 - b3[v3] / 2 + O3, V2 = u(S2, M2, F2), W2 = null != t(c3) && M2 != V2 && m3.reference[v3] / 2 - (M2 < S2 ? C3 : H2) - b3[v3] / 2 < 0 ? M2 < S2 ? S2 - M2 : F2 - M2 : 0;
  return { [w3]: x3[w3] - W2, data: { [w3]: V2, centerOffset: M2 - V2 + W2 } };
} });
var d = ["top", "right", "bottom", "left"];
var p = d.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
var h = { left: "right", right: "left", bottom: "top", top: "bottom" };
function y(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => h[t3]);
}
function x(n3, i3, r4) {
  void 0 === r4 && (r4 = false);
  const a3 = t(n3), l3 = o(n3), s3 = e(l3);
  let c3 = "x" === l3 ? a3 === (r4 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i3.reference[s3] > i3.floating[s3] && (c3 = y(c3)), { main: c3, cross: y(c3) };
}
var w = { start: "end", end: "start" };
function v(t2) {
  return t2.replace(/start|end/g, (t3) => w[t3]);
}
var A = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o3) {
    var i3;
    const { placement: r4, middlewareData: l3, rects: s3, initialPlacement: f3, platform: m3, elements: u3 } = o3, { mainAxis: g3 = true, crossAxis: d3 = true, fallbackPlacements: p3, fallbackStrategy: h3 = "bestFit", fallbackAxisSideDirection: w3 = "none", flipAlignment: b3 = true, ...A3 } = a(e2, o3), R2 = n(r4), P2 = n(f3) === f3, E3 = await (null == m3.isRTL ? void 0 : m3.isRTL(u3.floating)), T2 = p3 || (P2 || !b3 ? [y(f3)] : function(t2) {
      const e3 = y(t2);
      return [v(t2), e3, v(e3)];
    }(f3));
    p3 || "none" === w3 || T2.push(...function(e3, o4, i4, r5) {
      const a3 = t(e3);
      let l4 = function(t2, e4, n3) {
        const o5 = ["left", "right"], i5 = ["right", "left"], r6 = ["top", "bottom"], a4 = ["bottom", "top"];
        switch (t2) {
          case "top":
          case "bottom":
            return n3 ? e4 ? i5 : o5 : e4 ? o5 : i5;
          case "left":
          case "right":
            return e4 ? r6 : a4;
          default:
            return [];
        }
      }(n(e3), "start" === i4, r5);
      return a3 && (l4 = l4.map((t2) => t2 + "-" + a3), o4 && (l4 = l4.concat(l4.map(v)))), l4;
    }(f3, b3, w3, E3));
    const D3 = [f3, ...T2], L3 = await c(o3, A3), k2 = [];
    let O3 = (null == (i3 = l3.flip) ? void 0 : i3.overflows) || [];
    if (g3 && k2.push(L3[R2]), d3) {
      const { main: t2, cross: e3 } = x(r4, s3, E3);
      k2.push(L3[t2], L3[e3]);
    }
    if (O3 = [...O3, { placement: r4, overflows: k2 }], !k2.every((t2) => t2 <= 0)) {
      var B3, C3;
      const t2 = ((null == (B3 = l3.flip) ? void 0 : B3.index) || 0) + 1, e3 = D3[t2];
      if (e3)
        return { data: { index: t2, overflows: O3 }, reset: { placement: e3 } };
      let n3 = null == (C3 = O3.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : C3.placement;
      if (!n3)
        switch (h3) {
          case "bestFit": {
            var H2;
            const t3 = null == (H2 = O3.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : H2[0];
            t3 && (n3 = t3);
            break;
          }
          case "initialPlacement":
            n3 = f3;
        }
      if (r4 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var L = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i3) {
    const { x: r4, y: l3 } = i3, s3 = await async function(e3, i4) {
      const { placement: r5, platform: l4, elements: s4 } = e3, c3 = await (null == l4.isRTL ? void 0 : l4.isRTL(s4.floating)), f3 = n(r5), m3 = t(r5), u3 = "x" === o(r5), g3 = ["left", "top"].includes(f3) ? -1 : 1, d3 = c3 && u3 ? -1 : 1, p3 = a(i4, e3);
      let { mainAxis: h3, crossAxis: y3, alignmentAxis: x3 } = "number" == typeof p3 ? { mainAxis: p3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p3 };
      return m3 && "number" == typeof x3 && (y3 = "end" === m3 ? -1 * x3 : x3), u3 ? { x: y3 * d3, y: h3 * g3 } : { x: h3 * g3, y: y3 * d3 };
    }(i3, e2);
    return { x: r4 + s3.x, y: l3 + s3.y, data: s3 };
  } };
};
function k(t2) {
  return "x" === t2 ? "y" : "x";
}
var O = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
    const { x: i3, y: r4, placement: l3 } = e2, { mainAxis: s3 = true, crossAxis: f3 = false, limiter: m3 = { fn: (t3) => {
      let { x: e3, y: n3 } = t3;
      return { x: e3, y: n3 };
    } }, ...g3 } = a(t2, e2), d3 = { x: i3, y: r4 }, p3 = await c(e2, g3), h3 = o(n(l3)), y3 = k(h3);
    let x3 = d3[h3], w3 = d3[y3];
    if (s3) {
      const t3 = "y" === h3 ? "bottom" : "right";
      x3 = u(x3 + p3["y" === h3 ? "top" : "left"], x3, x3 - p3[t3]);
    }
    if (f3) {
      const t3 = "y" === y3 ? "bottom" : "right";
      w3 = u(w3 + p3["y" === y3 ? "top" : "left"], w3, w3 - p3[t3]);
    }
    const v3 = m3.fn({ ...e2, [h3]: x3, [y3]: w3 });
    return { ...v3, data: { x: v3.x - i3, y: v3.y - r4 } };
  } };
};

// node_modules/.pnpm/@floating-ui+dom@1.4.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e2;
  return (null == t2 || null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
}
function o2(t2) {
  return n2(t2).getComputedStyle(t2);
}
function i2(t2) {
  return t2 instanceof n2(t2).Node;
}
function r3(t2) {
  return i2(t2) ? (t2.nodeName || "").toLowerCase() : "#document";
}
function c2(t2) {
  return t2 instanceof HTMLElement || t2 instanceof n2(t2).HTMLElement;
}
function l2(t2) {
  return "undefined" != typeof ShadowRoot && (t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot);
}
function s2(t2) {
  const { overflow: e2, overflowX: n3, overflowY: i3, display: r4 } = o2(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r4);
}
function f2(t2) {
  return ["table", "td", "th"].includes(r3(t2));
}
function u2(t2) {
  const e2 = a2(), n3 = o2(t2);
  return "none" !== n3.transform || "none" !== n3.perspective || !!n3.containerType && "normal" !== n3.containerType || !e2 && !!n3.backdropFilter && "none" !== n3.backdropFilter || !e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective", "filter"].some((t3) => (n3.willChange || "").includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => (n3.contain || "").includes(t3));
}
function a2() {
  return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function d2(t2) {
  return ["html", "body", "#document"].includes(r3(t2));
}
var h2 = Math.min;
var p2 = Math.max;
var m2 = Math.round;
var g2 = Math.floor;
var y2 = (t2) => ({ x: t2, y: t2 });
function w2(t2) {
  const e2 = o2(t2);
  let n3 = parseFloat(e2.width) || 0, i3 = parseFloat(e2.height) || 0;
  const r4 = c2(t2), l3 = r4 ? t2.offsetWidth : n3, s3 = r4 ? t2.offsetHeight : i3, f3 = m2(n3) !== l3 || m2(i3) !== s3;
  return f3 && (n3 = l3, i3 = s3), { width: n3, height: i3, $: f3 };
}
function x2(t2) {
  return t2 instanceof Element || t2 instanceof n2(t2).Element;
}
function v2(t2) {
  return x2(t2) ? t2 : t2.contextElement;
}
function b2(t2) {
  const e2 = v2(t2);
  if (!c2(e2))
    return y2(1);
  const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, $: r4 } = w2(e2);
  let l3 = (r4 ? m2(n3.width) : n3.width) / o3, s3 = (r4 ? m2(n3.height) : n3.height) / i3;
  return l3 && Number.isFinite(l3) || (l3 = 1), s3 && Number.isFinite(s3) || (s3 = 1), { x: l3, y: s3 };
}
var L2 = y2(0);
function T(t2) {
  const e2 = n2(t2);
  return a2() && e2.visualViewport ? { x: e2.visualViewport.offsetLeft, y: e2.visualViewport.offsetTop } : L2;
}
function R(e2, o3, i3, r4) {
  void 0 === o3 && (o3 = false), void 0 === i3 && (i3 = false);
  const c3 = e2.getBoundingClientRect(), l3 = v2(e2);
  let s3 = y2(1);
  o3 && (r4 ? x2(r4) && (s3 = b2(r4)) : s3 = b2(e2));
  const f3 = function(t2, e3, o4) {
    return void 0 === e3 && (e3 = false), !(!o4 || e3 && o4 !== n2(t2)) && e3;
  }(l3, i3, r4) ? T(l3) : y2(0);
  let u3 = (c3.left + f3.x) / s3.x, a3 = (c3.top + f3.y) / s3.y, d3 = c3.width / s3.x, h3 = c3.height / s3.y;
  if (l3) {
    const t2 = n2(l3), e3 = r4 && x2(r4) ? n2(r4) : r4;
    let o4 = t2.frameElement;
    for (; o4 && r4 && e3 !== t2; ) {
      const t3 = b2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4), r5 = e4.left + (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x, c4 = e4.top + (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y;
      u3 *= t3.x, a3 *= t3.y, d3 *= t3.x, h3 *= t3.y, u3 += r5, a3 += c4, o4 = n2(o4).frameElement;
    }
  }
  return s({ width: d3, height: h3, x: u3, y: a3 });
}
function E2(t2) {
  return x2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function S(t2) {
  var e2;
  return null == (e2 = (i2(t2) ? t2.ownerDocument : t2.document) || window.document) ? void 0 : e2.documentElement;
}
function C2(t2) {
  return R(S(t2)).left + E2(t2).scrollLeft;
}
function F(t2) {
  if ("html" === r3(t2))
    return t2;
  const e2 = t2.assignedSlot || t2.parentNode || l2(t2) && t2.host || S(t2);
  return l2(e2) ? e2.host : e2;
}
function O2(t2) {
  const e2 = F(t2);
  return d2(e2) ? t2.ownerDocument ? t2.ownerDocument.body : t2.body : c2(e2) && s2(e2) ? e2 : O2(e2);
}
function D2(t2, e2) {
  var o3;
  void 0 === e2 && (e2 = []);
  const i3 = O2(t2), r4 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), c3 = n2(i3);
  return r4 ? e2.concat(c3, c3.visualViewport || [], s2(i3) ? i3 : []) : e2.concat(i3, D2(i3));
}
function H(e2, i3, r4) {
  let l3;
  if ("viewport" === i3)
    l3 = function(t2, e3) {
      const o3 = n2(t2), i4 = S(t2), r5 = o3.visualViewport;
      let c3 = i4.clientWidth, l4 = i4.clientHeight, s3 = 0, f3 = 0;
      if (r5) {
        c3 = r5.width, l4 = r5.height;
        const t3 = a2();
        (!t3 || t3 && "fixed" === e3) && (s3 = r5.offsetLeft, f3 = r5.offsetTop);
      }
      return { width: c3, height: l4, x: s3, y: f3 };
    }(e2, r4);
  else if ("document" === i3)
    l3 = function(t2) {
      const e3 = S(t2), n3 = E2(t2), i4 = t2.ownerDocument.body, r5 = p2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), c3 = p2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
      let l4 = -n3.scrollLeft + C2(t2);
      const s3 = -n3.scrollTop;
      return "rtl" === o2(i4).direction && (l4 += p2(e3.clientWidth, i4.clientWidth) - r5), { width: r5, height: c3, x: l4, y: s3 };
    }(S(e2));
  else if (x2(i3))
    l3 = function(t2, e3) {
      const n3 = R(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r5 = c2(t2) ? b2(t2) : y2(1);
      return { width: t2.clientWidth * r5.x, height: t2.clientHeight * r5.y, x: i4 * r5.x, y: o3 * r5.y };
    }(i3, r4);
  else {
    const t2 = T(e2);
    l3 = { ...i3, x: i3.x - t2.x, y: i3.y - t2.y };
  }
  return s(l3);
}
function W(t2, e2) {
  const n3 = F(t2);
  return !(n3 === e2 || !x2(n3) || d2(n3)) && ("fixed" === o2(n3).position || W(n3, e2));
}
function M(t2, e2, n3) {
  const o3 = c2(e2), i3 = S(e2), l3 = "fixed" === n3, f3 = R(t2, true, l3, e2);
  let u3 = { scrollLeft: 0, scrollTop: 0 };
  const a3 = y2(0);
  if (o3 || !o3 && !l3)
    if (("body" !== r3(e2) || s2(i3)) && (u3 = E2(e2)), c2(e2)) {
      const t3 = R(e2, true, l3, e2);
      a3.x = t3.x + e2.clientLeft, a3.y = t3.y + e2.clientTop;
    } else
      i3 && (a3.x = C2(i3));
  return { x: f3.left + u3.scrollLeft - a3.x, y: f3.top + u3.scrollTop - a3.y, width: f3.width, height: f3.height };
}
function z(t2, e2) {
  return c2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
}
function P(t2, e2) {
  const i3 = n2(t2);
  if (!c2(t2))
    return i3;
  let l3 = z(t2, e2);
  for (; l3 && f2(l3) && "static" === o2(l3).position; )
    l3 = z(l3, e2);
  return l3 && ("html" === r3(l3) || "body" === r3(l3) && "static" === o2(l3).position && !u2(l3)) ? i3 : l3 || function(t3) {
    let e3 = F(t3);
    for (; c2(e3) && !d2(e3); ) {
      if (u2(e3))
        return e3;
      e3 = F(e3);
    }
    return null;
  }(t2) || i3;
}
var V = { convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
  const i3 = c2(n3), l3 = S(n3);
  if (n3 === l3)
    return e2;
  let f3 = { scrollLeft: 0, scrollTop: 0 }, u3 = y2(1);
  const a3 = y2(0);
  if ((i3 || !i3 && "fixed" !== o3) && (("body" !== r3(n3) || s2(l3)) && (f3 = E2(n3)), c2(n3))) {
    const t3 = R(n3);
    u3 = b2(n3), a3.x = t3.x + n3.clientLeft, a3.y = t3.y + n3.clientTop;
  }
  return { width: e2.width * u3.x, height: e2.height * u3.y, x: e2.x * u3.x - f3.scrollLeft * u3.x + a3.x, y: e2.y * u3.y - f3.scrollTop * u3.y + a3.y };
}, getDocumentElement: S, getClippingRect: function(t2) {
  let { element: e2, boundary: n3, rootBoundary: i3, strategy: c3 } = t2;
  const l3 = [..."clippingAncestors" === n3 ? function(t3, e3) {
    const n4 = e3.get(t3);
    if (n4)
      return n4;
    let i4 = D2(t3).filter((t4) => x2(t4) && "body" !== r3(t4)), c4 = null;
    const l4 = "fixed" === o2(t3).position;
    let f4 = l4 ? F(t3) : t3;
    for (; x2(f4) && !d2(f4); ) {
      const e4 = o2(f4), n5 = u2(f4);
      n5 || "fixed" !== e4.position || (c4 = null), (l4 ? !n5 && !c4 : !n5 && "static" === e4.position && c4 && ["absolute", "fixed"].includes(c4.position) || s2(f4) && !n5 && W(t3, f4)) ? i4 = i4.filter((t4) => t4 !== f4) : c4 = e4, f4 = F(f4);
    }
    return e3.set(t3, i4), i4;
  }(e2, this._c) : [].concat(n3), i3], f3 = l3[0], a3 = l3.reduce((t3, n4) => {
    const o3 = H(e2, n4, c3);
    return t3.top = p2(o3.top, t3.top), t3.right = h2(o3.right, t3.right), t3.bottom = h2(o3.bottom, t3.bottom), t3.left = p2(o3.left, t3.left), t3;
  }, H(e2, f3, c3));
  return { width: a3.right - a3.left, height: a3.bottom - a3.top, x: a3.left, y: a3.top };
}, getOffsetParent: P, getElementRects: async function(t2) {
  let { reference: e2, floating: n3, strategy: o3 } = t2;
  const i3 = this.getOffsetParent || P, r4 = this.getDimensions;
  return { reference: M(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r4(n3) } };
}, getClientRects: function(t2) {
  return Array.from(t2.getClientRects());
}, getDimensions: function(t2) {
  return w2(t2);
}, getScale: b2, isElement: x2, isRTL: function(t2) {
  return "rtl" === getComputedStyle(t2).direction;
} };
function A2(t2, e2, n3, o3) {
  void 0 === o3 && (o3 = {});
  const { ancestorScroll: i3 = true, ancestorResize: r4 = true, elementResize: c3 = "function" == typeof ResizeObserver, layoutShift: l3 = "function" == typeof IntersectionObserver, animationFrame: s3 = false } = o3, f3 = v2(t2), u3 = i3 || r4 ? [...f3 ? D2(f3) : [], ...D2(e2)] : [];
  u3.forEach((t3) => {
    i3 && t3.addEventListener("scroll", n3, { passive: true }), r4 && t3.addEventListener("resize", n3);
  });
  const a3 = f3 && l3 ? function(t3, e3) {
    let n4, o4 = null;
    const i4 = S(t3);
    function r5() {
      clearTimeout(n4), o4 && o4.disconnect(), o4 = null;
    }
    return function c4(l4, s4) {
      void 0 === l4 && (l4 = false), void 0 === s4 && (s4 = 1), r5();
      const { left: f4, top: u4, width: a4, height: d4 } = t3.getBoundingClientRect();
      if (l4 || e3(), !a4 || !d4)
        return;
      const m4 = { rootMargin: -g2(u4) + "px " + -g2(i4.clientWidth - (f4 + a4)) + "px " + -g2(i4.clientHeight - (u4 + d4)) + "px " + -g2(f4) + "px", threshold: p2(0, h2(1, s4)) || 1 };
      let y4 = true;
      function w4(t4) {
        const e4 = t4[0].intersectionRatio;
        if (e4 !== s4) {
          if (!y4)
            return c4();
          e4 ? c4(false, e4) : n4 = setTimeout(() => {
            c4(false, 1e-7);
          }, 100);
        }
        y4 = false;
      }
      try {
        o4 = new IntersectionObserver(w4, { ...m4, root: i4.ownerDocument });
      } catch (t4) {
        o4 = new IntersectionObserver(w4, m4);
      }
      o4.observe(t3);
    }(true), r5;
  }(f3, n3) : null;
  let d3, m3 = -1, y3 = null;
  c3 && (y3 = new ResizeObserver((t3) => {
    let [o4] = t3;
    o4 && o4.target === f3 && y3 && (y3.unobserve(e2), cancelAnimationFrame(m3), m3 = requestAnimationFrame(() => {
      y3 && y3.observe(e2);
    })), n3();
  }), f3 && !s3 && y3.observe(f3), y3.observe(e2));
  let w3 = s3 ? R(t2) : null;
  return s3 && function e3() {
    const o4 = R(t2);
    !w3 || o4.x === w3.x && o4.y === w3.y && o4.width === w3.width && o4.height === w3.height || n3();
    w3 = o4, d3 = requestAnimationFrame(e3);
  }(), n3(), () => {
    u3.forEach((t3) => {
      i3 && t3.removeEventListener("scroll", n3), r4 && t3.removeEventListener("resize", n3);
    }), a3 && a3(), y3 && y3.disconnect(), y3 = null, s3 && cancelAnimationFrame(d3);
  };
}
var B2 = (t2, n3, o3) => {
  const i3 = /* @__PURE__ */ new Map(), r4 = { platform: V, ...o3 }, c3 = { ...r4.platform, _c: i3 };
  return r2(t2, n3, { ...r4, platform: c3 });
};

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@4.1.1/node_modules/@walter-org/svelte-float/dist/tooltip/action.js
var tooltip = (node, opts = {}) => {
  const defaults = {
    allowHtml: false,
    arrow: true,
    class: "tooltip",
    content: node.title,
    target: "body",
    visible: "auto",
    computePositionCallback: (data, { wrapper, arrow }) => {
      const { x: x3, y: y3, placement, middlewareData } = data;
      wrapper.style.left = x3 + "px";
      wrapper.style.top = y3 + "px";
      const placementParts = placement.split("-");
      const opposites = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      };
      const opposite = opposites[placementParts[0]];
      let originCross = "center";
      if (placement === "top" || placement === "bottom") {
        if (placementParts[1] === "start")
          originCross = "top";
        else if (placementParts[1] === "end")
          originCross = "bottom";
      } else {
        if (placementParts[1] === "start")
          originCross = "left";
        else if (placementParts[1] === "end")
          originCross = "right";
      }
      Object.assign(wrapper.style, {
        "transform-origin": opposite + " " + originCross
      });
      if (middlewareData.arrow) {
        const { x: x4, y: y4 } = middlewareData.arrow;
        arrow?.setAttribute("data-direction", opposite);
        Object.assign(arrow.style, {
          left: x4 + "px",
          top: y4 + "px",
          [opposite]: "calc(var(--_size) / -2)"
        });
      }
    },
    fuiConfig: {
      placement: "top",
      middleware: [
        A(),
        L(em2px(0.5)),
        O()
      ]
    },
    fuiAutoUpdateConfig: {}
  };
  opts = deepMerge(defaults, opts);
  if (!opts.content)
    throw new Error("No content defined, either add the content option or add a title property to the element.");
  const keydownHandler = (event) => {
    switch (event.key) {
      case "Escape":
        {
          hide();
        }
        break;
    }
  };
  let inDom;
  const id = node.id ? node.id + "-tooltip" : generateID();
  let tooltip2 = createTooltip(node, opts, id);
  async function hide() {
    if (inDom) {
      await animate("out");
      tooltip2.wrapper.remove();
      node.removeAttribute("aria-describedby");
      inDom = false;
    }
  }
  async function show() {
    if (!inDom) {
      getElement(opts.target).appendChild(tooltip2.wrapper);
      inDom = true;
      node.setAttribute("aria-describedby", id);
      await animate("in");
    }
  }
  switch (opts.visible) {
    case true:
      {
        show();
      }
      break;
    case "auto":
      {
        node.addEventListener("mouseenter", show);
        node.addEventListener("mouseleave", hide);
        node.addEventListener("focus", show);
        node.addEventListener("blur", hide);
        window.addEventListener("keydown", keydownHandler);
      }
      break;
  }
  function animate(type) {
    return new Promise((resolve, reject) => {
      tooltip2.wrapper.setAttribute("data-animating", type);
      const style = getComputedStyle(tooltip2.wrapper);
      const animation = parseFloat(style.getPropertyValue("animation-duration"));
      const transition = parseFloat(style.getPropertyValue("transition-duration"));
      if (animation <= 0 && transition <= 0) {
        tooltip2.wrapper.removeAttribute("data-animating");
        console.error("No animation found.");
        reject();
      }
      tooltip2.wrapper.addEventListener("animationend", () => {
        tooltip2.wrapper.removeAttribute("data-animating");
        resolve();
      });
    });
  }
  function handleUpdate(key, newOpts) {
    switch (key) {
      case "content":
        {
          tooltip2.content[newOpts.allowHtml ? "innerHTML" : "textContent"] = newOpts.content;
          node.setAttribute("data-tooltip-content", newOpts.content);
        }
        break;
      case "allowHtml":
        {
          tooltip2.content[newOpts.allowHtml ? "innerHTML" : "textContent"] = newOpts.content;
          tooltip2.content.setAttribute("data-allow-html", newOpts.allowHtml ? "true" : "false");
          node.setAttribute("data-tooltip-content", newOpts.content);
        }
        break;
      case "class":
        {
          const modifiedOldClasses = getClasses(opts.class);
          const modifiedNewClasses = getClasses(newOpts.class);
          tooltip2.wrapper.classList.remove(...modifiedOldClasses.wrapper);
          tooltip2.wrapper.classList.add(...modifiedNewClasses.wrapper);
          tooltip2.content.classList.remove(...modifiedOldClasses.content);
          tooltip2.content.classList.add(...modifiedNewClasses.content);
          tooltip2.arrow?.classList.remove(...modifiedOldClasses.arrow);
          tooltip2.arrow?.classList.add(...modifiedNewClasses.arrow);
        }
        break;
      case "visible":
        {
          if (!newOpts.visible)
            hide();
          switch (newOpts.visible) {
            case true:
              show();
            case false:
              {
                node.removeEventListener("mouseenter", show);
                node.removeEventListener("mouseleave", hide);
                node.removeEventListener("focus", show);
                node.removeEventListener("blur", hide);
              }
              break;
            case "auto":
              {
                node.addEventListener("mouseenter", show);
                node.addEventListener("mouseleave", hide);
                node.addEventListener("focus", show);
                node.addEventListener("blur", hide);
              }
              break;
          }
        }
        break;
      default:
        {
          tooltip2 = createTooltip(node, opts, id);
        }
        break;
    }
  }
  return {
    update(newOpts) {
      for (const k2 in newOpts) {
        const key = k2;
        handleUpdate(key, newOpts);
      }
      opts = deepMerge(defaults, newOpts);
    },
    destroy() {
      window.removeEventListener("keydown", keydownHandler);
      for (const k2 in tooltip2) {
        const key = k2;
        tooltip2[key]?.remove();
      }
    }
  };
};
function createTooltip(node, opts, id) {
  const classes = getClasses(opts.class ?? []);
  const wrapper = document.createElement("div");
  wrapper.classList.add(...classes.wrapper);
  wrapper.role = "tooltip";
  wrapper.id = id;
  const content = document.createElement("div");
  content.classList.add(...classes.content);
  content.setAttribute("data-allow-html", opts.allowHtml ? "true" : "false");
  content[opts.allowHtml ? "innerHTML" : "textContent"] = opts.content;
  wrapper.appendChild(content);
  let arrow;
  if (opts.arrow) {
    arrow = document.createElement("div");
    arrow.classList.add(...classes.arrow);
    wrapper.appendChild(arrow);
    opts.fuiConfig.middleware ??= [];
    opts.fuiConfig.middleware.push(g({ element: arrow }));
  }
  A2(node, wrapper, () => {
    B2(node, wrapper, opts.fuiConfig).then((computePositionReturn) => {
      opts.computePositionCallback(computePositionReturn, { wrapper, content, arrow });
    });
  });
  return {
    wrapper,
    content,
    arrow
  };
}
function getElement(elem) {
  return typeof elem === "string" ? document.querySelector(elem) : elem;
}
function getClasses(classes) {
  if (typeof classes === "string")
    classes = classes.split(" ");
  if (typeof classes[0] === "string" && !classes[0])
    classes[0] = "tooltip";
  if (classes.length === 0)
    classes.push("tooltip");
  return {
    wrapper: classes.map((c3) => c3 + (c3 ? "-" : "") + "wrapper"),
    content: classes.map((c3) => c3 + (c3 ? "-" : "") + "content"),
    arrow: classes.map((c3) => c3 + (c3 ? "-" : "") + "arrow")
  };
}

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Question/Question.svelte
function create_else_block11(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_58(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_48(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_39(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_29(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_111(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block12(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment13(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block12;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_111;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_29;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_39;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_48;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_58;
    return create_else_block11;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance13($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var Question = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance13, create_fragment13, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var Question_default = Question;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/Question/index.js
var Question_default2 = Question_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/CheckCircle/CheckCircle.svelte
function create_else_block12(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_59(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_49(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_310(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_210(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_112(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block13(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment14(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block13;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_112;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_210;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_310;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_49;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_59;
    return create_else_block12;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance14($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var CheckCircle = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance14, create_fragment14, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var CheckCircle_default = CheckCircle;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/CheckCircle/index.js
var CheckCircle_default2 = CheckCircle_default;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/XCircle/XCircle.svelte
function create_else_block13(ctx) {
  let t_value = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), "");
  let t2;
  return {
    c() {
      t2 = text(t_value);
    },
    m(target, anchor) {
      insert(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_if_block_510(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_410(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_311(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_211(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_if_block_113(ctx) {
  let path0;
  let path1;
  return {
    c() {
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z");
      attr(path0, "opacity", "0.2");
      attr(path1, "d", "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
    },
    m(target, anchor) {
      insert(target, path0, anchor);
      insert(target, path1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path0);
        detach(path1);
      }
    }
  };
}
function create_if_block14(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      attr(path, "d", "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z");
    },
    m(target, anchor) {
      insert(target, path, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment15(ctx) {
  let svg;
  let rect;
  let svg_transform_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*weight*/
      ctx2[0] === "bold"
    )
      return create_if_block14;
    if (
      /*weight*/
      ctx2[0] === "duotone"
    )
      return create_if_block_113;
    if (
      /*weight*/
      ctx2[0] === "fill"
    )
      return create_if_block_211;
    if (
      /*weight*/
      ctx2[0] === "light"
    )
      return create_if_block_311;
    if (
      /*weight*/
      ctx2[0] === "regular"
    )
      return create_if_block_410;
    if (
      /*weight*/
      ctx2[0] === "thin"
    )
      return create_if_block_510;
    return create_else_block13;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { fill: (
      /*color*/
      ctx[1]
    ) },
    {
      transform: svg_transform_value = /*mirrored*/
      ctx[3] ? "scale(-1, 1)" : void 0
    },
    { viewBox: "0 0 256 256" },
    /*restCtx*/
    ctx[4],
    /*$$restProps*/
    ctx[5]
  ];
  let svg_data = {};
  for (let i3 = 0; i3 < svg_levels.length; i3 += 1) {
    svg_data = assign(svg_data, svg_levels[i3]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      rect = svg_element("rect");
      if_block.c();
      attr(rect, "width", "256");
      attr(rect, "height", "256");
      attr(rect, "fill", "none");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append(svg, rect);
      if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { fill: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*mirrored*/
        8 && svg_transform_value !== (svg_transform_value = /*mirrored*/
        ctx2[3] ? "scale(-1, 1)" : void 0)) && { transform: svg_transform_value },
        { viewBox: "0 0 256 256" },
        /*restCtx*/
        ctx2[4],
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      if (default_slot)
        default_slot.d(detaching);
      if_block.d();
    }
  };
}
function instance15($$self, $$props, $$invalidate) {
  const omit_props_names = ["weight", "color", "size", "mirrored"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("weight" in $$new_props)
      $$invalidate(0, weight = $$new_props.weight);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("mirrored" in $$new_props)
      $$invalidate(3, mirrored = $$new_props.mirrored);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [weight, color, size, mirrored, restCtx, $$restProps, $$scope, slots];
}
var XCircle = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance15, create_fragment15, safe_not_equal, {
      weight: 0,
      color: 1,
      size: 2,
      mirrored: 3
    });
  }
};
var XCircle_default = XCircle;

// node_modules/.pnpm/phosphor-svelte@1.3.0_svelte@4.1.1/node_modules/phosphor-svelte/lib/XCircle/index.js
var XCircle_default2 = XCircle_default;

// src/renderer/ui/tabs/Themes.svelte
function get_each_context2(ctx, list, i3) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i3];
  const constants_0 = window.Popcorn.themes[
    /*id*/
    child_ctx[4]
  ];
  child_ctx[5] = constants_0;
  const constants_1 = (
    /*getValidityData*/
    child_ctx[1](
      /*theme*/
      child_ctx[5].valid
    )
  );
  child_ctx[6] = constants_1.icon;
  child_ctx[7] = constants_1.text;
  return child_ctx;
}
function create_if_block15(ctx) {
  let div;
  let switch_instance;
  let div_data_value_value;
  let tooltip_action;
  let current;
  let mounted;
  let dispose;
  var switch_value = (
    /*icon*/
    ctx[6]
  );
  function switch_props(ctx2, dirty) {
    return { props: { weight: "bold" } };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      attr(div, "class", "theme-validity PopcornUI-1qhapve");
      attr(div, "data-value", div_data_value_value = /*theme*/
      ctx[5].valid);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (switch_instance)
        mount_component(switch_instance, div, null);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(tooltip_action = tooltip.call(null, div, {
          content: (
            /*theme*/
            ctx[5].valid ? (
              /*text*/
              ctx[7]
            ) : createTooltipContent(
              /*theme*/
              ctx[5].errors
            )
          ),
          target: "#PopcornUI-layers"
        }));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (switch_value !== (switch_value = /*icon*/
      ctx[6])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx, dirty));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (switch_instance)
        destroy_component(switch_instance);
      mounted = false;
      dispose();
    }
  };
}
function create_key_block2(ctx) {
  let div1;
  let h1;
  let t0_value = (
    /*id*/
    ctx[4] + ""
  );
  let t0;
  let t1;
  let t2;
  let div0;
  let t4;
  let button;
  let t6;
  let div1_id_value;
  let div1_data_enabled_value;
  let current;
  let mounted;
  let dispose;
  let if_block = shouldValidate && create_if_block15(ctx);
  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
        /*id*/
        ctx[4]
      )
    );
  }
  function submit_handler() {
    return (
      /*submit_handler*/
      ctx[3](
        /*id*/
        ctx[4]
      )
    );
  }
  return {
    c() {
      div1 = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      div0 = element("div");
      div0.textContent = `${/*theme*/
      ctx[5].description ?? ""}`;
      t4 = space();
      button = element("button");
      button.textContent = `${/*theme*/
      ctx[5].enabled ? "Disable" : "Enable"}`;
      t6 = space();
      attr(h1, "class", "theme-id PopcornUI-1qhapve");
      attr(div0, "class", "theme-description PopcornUI-1qhapve");
      attr(button, "class", "theme-toggle PopcornUI-1qhapve");
      attr(div1, "class", "theme-container PopcornUI-1qhapve");
      attr(div1, "id", div1_id_value = /*id*/
      ctx[4]);
      attr(div1, "data-enabled", div1_data_enabled_value = /*theme*/
      ctx[5].enabled);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, h1);
      append(h1, t0);
      append(h1, t1);
      if (if_block)
        if_block.m(h1, null);
      append(div1, t2);
      append(div1, div0);
      append(div1, t4);
      append(div1, button);
      append(div1, t6);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", click_handler),
          listen(button, "submit", submit_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (shouldValidate)
        if_block.p(ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block2(ctx) {
  let previous_key = (
    /*$rerenderStore*/
    ctx[0][
      /*id*/
      ctx[4]
    ]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block2(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*$rerenderStore*/
      1 && safe_not_equal(previous_key, previous_key = /*$rerenderStore*/
      ctx2[0][
        /*id*/
        ctx2[4]
      ])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block2(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(key_block_anchor);
      }
      key_block.d(detaching);
    }
  };
}
function create_fragment16(ctx) {
  let div;
  let current;
  let each_value = ensure_array_like(Object.keys(window.Popcorn.themes));
  let each_blocks = [];
  for (let i3 = 0; i3 < each_value.length; i3 += 1) {
    each_blocks[i3] = create_each_block2(get_each_context2(ctx, each_value, i3));
  }
  const out = (i3) => transition_out(each_blocks[i3], 1, 1, () => {
    each_blocks[i3] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        each_blocks[i3].c();
      }
      attr(div, "class", "themes-wrapper PopcornUI-1qhapve");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        if (each_blocks[i3]) {
          each_blocks[i3].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$rerenderStore, Object, window, getValidityData, createTooltipContent*/
      3) {
        each_value = ensure_array_like(Object.keys(window.Popcorn.themes));
        let i3;
        for (i3 = 0; i3 < each_value.length; i3 += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i3);
          if (each_blocks[i3]) {
            each_blocks[i3].p(child_ctx, dirty);
            transition_in(each_blocks[i3], 1);
          } else {
            each_blocks[i3] = create_each_block2(child_ctx);
            each_blocks[i3].c();
            transition_in(each_blocks[i3], 1);
            each_blocks[i3].m(div, null);
          }
        }
        group_outros();
        for (i3 = each_value.length; i3 < each_blocks.length; i3 += 1) {
          out(i3);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i3 = 0; i3 < each_value.length; i3 += 1) {
        transition_in(each_blocks[i3]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        transition_out(each_blocks[i3]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
var rerenderStore2 = writable({});
function rerenderTheme(id) {
  rerenderStore2.update((obj) => {
    obj[id] = !obj[id];
    return obj;
  });
}
function createTooltipContent(errors) {
  return errors.map((error) => `Line ${error.line}: ${error.message}`).join("\n ");
}
function instance16($$self, $$props, $$invalidate) {
  let $rerenderStore;
  component_subscribe($$self, rerenderStore2, ($$value) => $$invalidate(0, $rerenderStore = $$value));
  function getValidityData(validity) {
    switch (validity) {
      case true:
        return { icon: CheckCircle_default2, text: "Valid" };
      case false:
        return { icon: XCircle_default2, text: "Invalid" };
      default:
        return {
          icon: Question_default2,
          text: "Validity Unknown"
        };
    }
  }
  const click_handler = (id) => window.Popcorn.themes[id].toggle();
  const submit_handler = (id) => window.Popcorn.themes[id].toggle();
  return [$rerenderStore, getValidityData, click_handler, submit_handler];
}
var Themes = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance16, create_fragment16, safe_not_equal, {});
  }
};
var Themes_default = Themes;

// src/renderer/themes/index.ts
var Logger4 = new logger_default("Themes");
var Theme = class _Theme {
  static link = PopcornNative.isSplash ? "popcorn://splash-theme/" : "popcorn://theme/";
  description;
  id;
  json;
  #element;
  constructor(id, themeData) {
    autoBind(this);
    this.description = themeData.description;
    this.id = id;
    this.json = themeData.json;
    this.#enabled = themeData.enabled;
    if (shouldValidate)
      this.#validate();
    if (themeData.enabled)
      this.enable(false);
  }
  #enabled;
  get enabled() {
    return this.#enabled;
  }
  set enabled(value) {
    value ? this.enable() : this.disable();
    this.#enabled = value;
  }
  enable(save = true) {
    if (this.#element) {
      Logger4.log(`"${this.id}" is already enabled.`);
      return;
    }
    this.#enabled = true;
    const link = this.#element = document.createElement("link");
    link.rel = "stylesheet";
    link.id = this.id;
    link.href = _Theme.link + this.id;
    link.setAttribute("data-popcorn", "theme");
    comments.end.before(link);
    Logger4.log(`"${this.id}" enabled.`);
    rerenderTheme(this.id);
    if (save)
      PopcornNative.saveThemeState(this.id, true);
  }
  disable(save = true) {
    if (!this.#element) {
      Logger4.warn(`"${this.id}" is not enabled.`);
      return;
    }
    this.#enabled = false;
    this.#element.remove();
    this.#element = null;
    Logger4.log(`"${this.id}" disabled.`);
    rerenderTheme(this.id);
    if (save)
      PopcornNative.saveThemeState(this.id, false);
  }
  toggle(save = true) {
    if (this.enabled)
      this.disable(save);
    else
      this.enable(save);
  }
  rev = 0;
  async update() {
    this.#element.href = _Theme.link + this.id + `?${++this.rev}`;
    const promise = await fetch(_Theme.link + this.id, { cache: "no-store" });
    const text2 = await promise.text();
    if (shouldValidate)
      this.#validate(text2);
  }
  valid = "unknown";
  errors = [];
  async #validate(content) {
    content ??= await (await fetch(_Theme.link + this.id, { cache: "no-store" })).text();
    PopcornNative.validateCSS(content).then((result) => {
      if (PopcornNative.config.verbose)
        Logger4.debug(`Validated "${this.id}".`, result);
      this.valid = result.valid;
      this.errors = result.errors;
      rerenderTheme(this.id);
    }).catch((e2) => {
      Logger4.error(`Failed to validate "${this.id}".`, e2);
    });
  }
};
var Themes2 = class {
  constructor() {
    this.watchThemes();
  }
  #removeListener;
  watchThemes() {
    this.#removeListener = PopcornNative.onThemeChange(r(({ id }) => {
      window.Popcorn.themes[id].update();
    }, 100));
  }
  stop() {
    this.#removeListener();
    const elements = document.head.querySelectorAll('link[data-popcorn="theme"]');
    for (const el of elements) {
      el.remove();
    }
  }
};
function populateThemes(simpleThemes) {
  const themes = {};
  for (const id in simpleThemes) {
    themes[id] = new Theme(id, simpleThemes[id]);
  }
  return themes;
}

// src/renderer/ui/components/TabView.svelte
function get_each_context3(ctx, list, i3) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i3];
  const constants_0 = (
    /*tabs*/
    child_ctx[0].find(function func(...args) {
      return (
        /*func*/
        ctx[6](
          /*tabName*/
          child_ctx[7],
          ...args
        )
      );
    })
  );
  child_ctx[8] = constants_0;
  return child_ctx;
}
function get_each_context_1(ctx, list, i3) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i3].name;
  return child_ctx;
}
function create_each_block_1(ctx) {
  let button;
  let t0_value = (
    /*name*/
    ctx[11] + ""
  );
  let t0;
  let t1;
  let button_data_selected_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[4](
        /*name*/
        ctx[11]
      )
    );
  }
  function keypress_handler() {
    return (
      /*keypress_handler*/
      ctx[5](
        /*name*/
        ctx[11]
      )
    );
  }
  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      attr(button, "class", "tab PopcornUI-cd56hu");
      attr(button, "data-selected", button_data_selected_value = /*selectedTab*/
      ctx[1] === /*name*/
      ctx[11]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
      if (!mounted) {
        dispose = [
          listen(button, "click", click_handler),
          listen(button, "keypress", keypress_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*tabs*/
      1 && t0_value !== (t0_value = /*name*/
      ctx[11] + ""))
        set_data(t0, t0_value);
      if (dirty & /*selectedTab, tabs*/
      3 && button_data_selected_value !== (button_data_selected_value = /*selectedTab*/
      ctx[1] === /*name*/
      ctx[11])) {
        attr(button, "data-selected", button_data_selected_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block3(ctx) {
  let div;
  let switch_instance;
  let t2;
  let div_data_selected_value;
  let div_data_name_value;
  let current;
  var switch_value = (
    /*tab*/
    ctx[8].component
  );
  function switch_props(ctx2, dirty) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t2 = space();
      attr(div, "class", "tab-wrapper PopcornUI-cd56hu");
      attr(div, "data-selected", div_data_selected_value = /*tab*/
      ctx[8].name === /*selectedTab*/
      ctx[1]);
      attr(div, "data-name", div_data_name_value = /*tab*/
      ctx[8].name);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (switch_instance)
        mount_component(switch_instance, div, null);
      append(div, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*tabs*/
      1 && switch_value !== (switch_value = /*tab*/
      ctx2[8].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, t2);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
      }
      if (!current || dirty & /*tabs, selectedTab*/
      3 && div_data_selected_value !== (div_data_selected_value = /*tab*/
      ctx2[8].name === /*selectedTab*/
      ctx2[1])) {
        attr(div, "data-selected", div_data_selected_value);
      }
      if (!current || dirty & /*tabs*/
      1 && div_data_name_value !== (div_data_name_value = /*tab*/
      ctx2[8].name)) {
        attr(div, "data-name", div_data_name_value);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
}
function create_fragment17(ctx) {
  let div;
  let t2;
  let each1_anchor;
  let current;
  let each_value_1 = ensure_array_like(
    /*tabs*/
    ctx[0]
  );
  let each_blocks_1 = [];
  for (let i3 = 0; i3 < each_value_1.length; i3 += 1) {
    each_blocks_1[i3] = create_each_block_1(get_each_context_1(ctx, each_value_1, i3));
  }
  let each_value = ensure_array_like(
    /*loadedTabs*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i3 = 0; i3 < each_value.length; i3 += 1) {
    each_blocks[i3] = create_each_block3(get_each_context3(ctx, each_value, i3));
  }
  const out = (i3) => transition_out(each_blocks[i3], 1, 1, () => {
    each_blocks[i3] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i3 = 0; i3 < each_blocks_1.length; i3 += 1) {
        each_blocks_1[i3].c();
      }
      t2 = space();
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        each_blocks[i3].c();
      }
      each1_anchor = empty();
      attr(div, "class", "tab-list PopcornUI-cd56hu");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i3 = 0; i3 < each_blocks_1.length; i3 += 1) {
        if (each_blocks_1[i3]) {
          each_blocks_1[i3].m(div, null);
        }
      }
      insert(target, t2, anchor);
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        if (each_blocks[i3]) {
          each_blocks[i3].m(target, anchor);
        }
      }
      insert(target, each1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*selectedTab, tabs, switchTabs*/
      11) {
        each_value_1 = ensure_array_like(
          /*tabs*/
          ctx2[0]
        );
        let i3;
        for (i3 = 0; i3 < each_value_1.length; i3 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i3);
          if (each_blocks_1[i3]) {
            each_blocks_1[i3].p(child_ctx, dirty);
          } else {
            each_blocks_1[i3] = create_each_block_1(child_ctx);
            each_blocks_1[i3].c();
            each_blocks_1[i3].m(div, null);
          }
        }
        for (; i3 < each_blocks_1.length; i3 += 1) {
          each_blocks_1[i3].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*tabs, loadedTabs, selectedTab*/
      7) {
        each_value = ensure_array_like(
          /*loadedTabs*/
          ctx2[2]
        );
        let i3;
        for (i3 = 0; i3 < each_value.length; i3 += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i3);
          if (each_blocks[i3]) {
            each_blocks[i3].p(child_ctx, dirty);
            transition_in(each_blocks[i3], 1);
          } else {
            each_blocks[i3] = create_each_block3(child_ctx);
            each_blocks[i3].c();
            transition_in(each_blocks[i3], 1);
            each_blocks[i3].m(each1_anchor.parentNode, each1_anchor);
          }
        }
        group_outros();
        for (i3 = each_value.length; i3 < each_blocks.length; i3 += 1) {
          out(i3);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i3 = 0; i3 < each_value.length; i3 += 1) {
        transition_in(each_blocks[i3]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i3 = 0; i3 < each_blocks.length; i3 += 1) {
        transition_out(each_blocks[i3]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
        detach(t2);
        detach(each1_anchor);
      }
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance17($$self, $$props, $$invalidate) {
  let { tabs } = $$props;
  let selectedTab = tabs?.[0]?.name;
  const loadedTabs = [selectedTab];
  function switchTabs(tabName) {
    $$invalidate(1, selectedTab = tabName);
    if (!loadedTabs.includes(tabName))
      loadedTabs.push(tabName);
  }
  const click_handler = (name) => switchTabs(name);
  const keypress_handler = (name) => switchTabs(name);
  const func = (tabName, tab) => tab.name === tabName;
  $$self.$$set = ($$props2) => {
    if ("tabs" in $$props2)
      $$invalidate(0, tabs = $$props2.tabs);
  };
  return [
    tabs,
    selectedTab,
    loadedTabs,
    switchTabs,
    click_handler,
    keypress_handler,
    func
  ];
}
var TabView = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance17, create_fragment17, safe_not_equal, { tabs: 0 });
  }
};
var TabView_default = TabView;

// src/renderer/utils/hotkeys.js
var isEqual = (a3, b3) => {
  const aKeys = Object.keys(a3);
  if (aKeys.length !== Object.keys(b3).length) {
    return false;
  }
  return aKeys.every((k2) => Object.prototype.hasOwnProperty.call(b3, k2) && a3[k2] === b3[k2]);
};
var isArrayEqual = (a3, b3) => a3.length === b3.length && a3.every((v3, i3) => isEqual(v3, b3[i3]));
var matchHotkey = (buffer, hotkey) => {
  if (buffer.length < hotkey.length) {
    return false;
  }
  const indexDiff = buffer.length - hotkey.length;
  for (let i3 = hotkey.length - 1; i3 >= 0; i3 -= 1) {
    if (!isEqual(buffer[indexDiff + i3], hotkey[i3])) {
      return false;
    }
  }
  return true;
};
var arrayToObject = (arr) => arr.reduce((obj, key) => ({ ...obj, [key]: true }), {});
var allModifiers = ["ctrl", "shift", "alt", "meta"];
var indexedModifiers = arrayToObject(allModifiers);
var isHotkeyValid = (hotkey) => Object.keys(hotkey).filter((k2) => !indexedModifiers[k2]).length === 1;
var validate = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};
var validateType = (value, name, type) => {
  validate(typeof value === type, `The ${name} must be a ${type}; given ${typeof value}`);
};
var normalizeHotkey = (hotkey) => hotkey.split(/ +/g).map((part) => {
  const arr = part.split("+").filter(Boolean);
  const result = arrayToObject(arr);
  validate(Object.keys(result).length >= arr.length, `Hotkey combination has duplicates "${hotkey}"`);
  validate(isHotkeyValid(result), `Invalid hotkey combination: "${hotkey}"`);
  return result;
});
var validateListenerArgs = (hotkey, callback) => {
  validateType(hotkey, "hotkey", "string");
  validateType(callback, "callback", "function");
};
var createListenersFn = (listeners, fn) => (hotkey, callback) => {
  validateListenerArgs(hotkey, callback);
  fn(listeners, hotkey, callback);
};
var registerListener = (listeners, hotkey, callback) => {
  listeners.push({ hotkey: normalizeHotkey(hotkey), callback });
};
var unregisterListener = (listeners, hotkey, callback) => {
  const normalized = normalizeHotkey(hotkey);
  const index2 = listeners.findIndex(
    (l3) => l3.callback === callback && isArrayEqual(normalized, l3.hotkey)
  );
  if (index2 !== -1) {
    listeners.splice(index2, 1);
  }
};
var debounce = (fn, time) => {
  let timeoutId = null;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, time);
  };
};
var getKey = (key) => {
  switch (key) {
    case "+":
      return "plus";
    case " ":
      return "space";
    default:
      return key.toLowerCase();
  }
};
var createKeyDownListener = (listeners, debounceTime) => {
  let buffer = [];
  const clearBufferDebounced = debounce(() => {
    buffer = [];
  }, debounceTime);
  return (event) => {
    if (event.repeat) {
      return;
    }
    if (event.getModifierState(event.key)) {
      return;
    }
    clearBufferDebounced();
    const description = {
      [getKey(event.key)]: true
    };
    allModifiers.forEach((m3) => {
      if (event[`${m3}Key`]) {
        description[m3] = true;
      }
    });
    buffer.push(description);
    listeners.forEach((listener) => {
      if (matchHotkey(buffer, listener.hotkey)) {
        listener.callback(event);
      }
    });
  };
};
var validateContext = (options) => {
  const { debounceTime = 500, autoEnable = true } = options || {};
  validateType(debounceTime, "debounceTime", "number");
  validate(debounceTime > 0, "debounceTime must be > 0");
  validateType(autoEnable, "autoEnable", "boolean");
  return { debounceTime, autoEnable };
};
var createContext = (options) => {
  const { debounceTime, autoEnable } = validateContext(options);
  const listeners = [];
  const keyDownListener = createKeyDownListener(listeners, debounceTime);
  const enable = () => document.addEventListener("keydown", keyDownListener);
  const disable = () => document.removeEventListener("keydown", keyDownListener);
  if (autoEnable) {
    enable();
  }
  return {
    register: createListenersFn(listeners, registerListener),
    unregister: createListenersFn(listeners, unregisterListener),
    enable,
    disable
  };
};

// src/renderer/ui/index.svelte
function create_fragment18(ctx) {
  let dialog_1;
  let tabview;
  let t2;
  let div;
  let current;
  tabview = new TabView_default({ props: { tabs: (
    /*tabs*/
    ctx[1]
  ) } });
  return {
    c() {
      dialog_1 = element("dialog");
      create_component(tabview.$$.fragment);
      t2 = space();
      div = element("div");
      attr(div, "id", "PopcornUI-layers");
      attr(dialog_1, "class", "PopcornUI-dialog PopcornUI-6ipy8a");
    },
    m(target, anchor) {
      insert(target, dialog_1, anchor);
      mount_component(tabview, dialog_1, null);
      append(dialog_1, t2);
      append(dialog_1, div);
      ctx[2](dialog_1);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(tabview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tabview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(dialog_1);
      }
      destroy_component(tabview);
      ctx[2](null);
    }
  };
}
function instance18($$self, $$props, $$invalidate) {
  let dialog;
  let isOpened = false;
  function toggleUI() {
    if (isOpened)
      dialog.close();
    else
      dialog.showModal();
    isOpened = !isOpened;
    document.documentElement.dataset.popcornUiOpen = isOpened.toString();
  }
  const context = createContext({ autoEnable: true });
  const hotkeyCallback = (event) => {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    toggleUI();
  };
  const escapeCallback = (event) => {
    if (isOpened) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      toggleUI();
    }
  };
  onMount(() => {
    context.register(PopcornNative.config.hotkey, hotkeyCallback);
    context.register("escape", escapeCallback);
  });
  const tabs = [
    { name: "Themes", component: Themes_default },
    { name: "QuickCSS", component: QuickCss_default }
  ];
  onDestroy(() => {
    context.unregister(PopcornNative.config.hotkey, hotkeyCallback);
    context.unregister("escape", escapeCallback);
  });
  function dialog_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dialog = $$value;
      $$invalidate(0, dialog);
    });
  }
  return [dialog, tabs, dialog_1_binding];
}
var Ui = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance18, create_fragment18, safe_not_equal, {});
  }
};
var ui_default = Ui;

// src/renderer/index.ts
var shouldValidate = Boolean(PopcornNative.validateCSS);
var comments = {
  start: document.createComment(" section:Popcorn "),
  end: document.createComment(" endsection ")
};
var renderer = new class Renderer {
  IPC;
  QuickCss;
  Themes;
  UI;
  async init() {
    Object.assign(window, {
      PopcornInjected: true
    });
    const style = document.createElement("style");
    style.id = "popcorn-styles";
    style.textContent = await PopcornNative.getStyles();
    comments.start.after(style);
  }
  async start() {
    document.head.prepend(comments.start, comments.end);
    if (!window.PopcornInjected)
      await this.init();
    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    window.Popcorn = {
      themes: populateThemes(themes),
      quickCss
    };
    this.IPC = new ipc_default();
    this.QuickCss = new QuickCss2();
    this.Themes = new Themes2();
    this.UI = new ui_default({ target: document.body });
  }
  stop() {
    this.IPC?.stop();
    this.QuickCss?.stop();
    this.Themes?.stop();
    this.UI?.$destroy();
    comments.start.remove();
    comments.end.remove();
    delete window.Popcorn;
  }
}();
var renderer_default = renderer;
export {
  comments,
  renderer_default as default,
  shouldValidate
};
/*! Bundled license information:

@walter-org/svelte-float/dist/utils/deepMerge.js:
  (*! https://stackoverflow.com/a/34749873/14591737 *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3V0aWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9nbG9iYWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9SZXNpemVPYnNlcnZlclNpbmdsZXRvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvZG9tLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9saWZlY3ljbGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3NjaGVkdWxlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvdHJhbnNpdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2VhY2guanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3NwcmVhZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3NoYXJlZC9ib29sZWFuX2F0dHJpYnV0ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL0NvbXBvbmVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvc3RvcmUvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzLWRlYm91bmNlQDQuMC4wL25vZGVfbW9kdWxlcy90cy1kZWJvdW5jZS9zcmMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuNDAuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdGF0ZS1sb2NhbEAxLjAuNy9ub2RlX21vZHVsZXMvc3RhdGUtbG9jYWwvbGliL2VzL3N0YXRlLWxvY2FsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjQwLjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvY29uZmlnL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjQwLjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvY3VycnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuNDAuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9pc09iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vbmFjby1lZGl0b3IrbG9hZGVyQDEuMy4zX21vbmFjby1lZGl0b3JAMC40MC4wL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL3ZhbGlkYXRvcnMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuNDAuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9jb21wb3NlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjQwLjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvZGVlcE1lcmdlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjQwLjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvbWFrZUNhbmNlbGFibGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuNDAuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy9sb2FkZXIvaW5kZXguanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvTW9uYWNvRWRpdG9yLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9GaWxlUGx1cy9GaWxlUGx1cy5zdmVsdGUiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bob3NwaG9yLXN2ZWx0ZUAxLjMuMF9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXN2ZWx0ZS9saWIvRmlsZVBsdXMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bob3NwaG9yLXN2ZWx0ZUAxLjMuMF9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXN2ZWx0ZS9saWIvRm9sZGVyUGx1cy9Gb2xkZXJQbHVzLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9Gb2xkZXJQbHVzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waG9zcGhvci1zdmVsdGVAMS4zLjBfc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9waG9zcGhvci1zdmVsdGUvbGliL1RyYXNoL1RyYXNoLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9UcmFzaC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9Gb2xkZXIvRm9sZGVyLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9Gb2xkZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bob3NwaG9yLXN2ZWx0ZUAxLjMuMF9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXN2ZWx0ZS9saWIvRm9sZGVyT3Blbi9Gb2xkZXJPcGVuLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9Gb2xkZXJPcGVuL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waG9zcGhvci1zdmVsdGVAMS4zLjBfc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9waG9zcGhvci1zdmVsdGUvbGliL0ZpbGVDc3MvRmlsZUNzcy5zdmVsdGUiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bob3NwaG9yLXN2ZWx0ZUAxLjMuMF9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXN2ZWx0ZS9saWIvRmlsZUNzcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9DaXJjbGUvQ2lyY2xlLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9DaXJjbGUvaW5kZXguanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvRmlsZS5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvRm9sZGVyLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvdWkvY29tcG9uZW50cy9RdWlja0Nzcy9TaWRlYmFyLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUiLCAiLi4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCAiLi4vc3JjL3JlbmRlcmVyL3F1aWNrY3NzL2luZGV4LnRzIiwgIi4uL3NyYy9yZW5kZXJlci9xdWlja2Nzcy9pcGMudHMiLCAiLi4vc3JjL3JlbmRlcmVyL2lwYy50cyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYXV0by1iaW5kQDUuMC4xL25vZGVfbW9kdWxlcy9hdXRvLWJpbmQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWx0ZXItb3JnK3N2ZWx0ZS1mbG9hdEAwLjAuM19zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdC9kaXN0L3V0aWxzL2RlZXBNZXJnZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbHRlci1vcmcrc3ZlbHRlLWZsb2F0QDAuMC4zX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvQHdhbHRlci1vcmcvc3ZlbHRlLWZsb2F0L2Rpc3QvdXRpbHMvZW0ycHguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWx0ZXItb3JnK3N2ZWx0ZS1mbG9hdEAwLjAuM19zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdC9kaXN0L3V0aWxzL2dlbmVyYXRlSUQuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStjb3JlQDEuMy4xL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvY29yZS9kaXN0L2Zsb2F0aW5nLXVpLmNvcmUuYnJvd3Nlci5taW4ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AZmxvYXRpbmctdWkrZG9tQDEuNC41L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvZG9tL2Rpc3QvZmxvYXRpbmctdWkuZG9tLmJyb3dzZXIubWluLm1qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbHRlci1vcmcrc3ZlbHRlLWZsb2F0QDAuMC4zX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvQHdhbHRlci1vcmcvc3ZlbHRlLWZsb2F0L2Rpc3QvdG9vbHRpcC9hY3Rpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bob3NwaG9yLXN2ZWx0ZUAxLjMuMF9zdmVsdGVANC4xLjEvbm9kZV9tb2R1bGVzL3Bob3NwaG9yLXN2ZWx0ZS9saWIvUXVlc3Rpb24vUXVlc3Rpb24uc3ZlbHRlIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waG9zcGhvci1zdmVsdGVAMS4zLjBfc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9waG9zcGhvci1zdmVsdGUvbGliL1F1ZXN0aW9uL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waG9zcGhvci1zdmVsdGVAMS4zLjBfc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9waG9zcGhvci1zdmVsdGUvbGliL0NoZWNrQ2lyY2xlL0NoZWNrQ2lyY2xlLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9DaGVja0NpcmNsZS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGhvc3Bob3Itc3ZlbHRlQDEuMy4wX3N2ZWx0ZUA0LjEuMS9ub2RlX21vZHVsZXMvcGhvc3Bob3Itc3ZlbHRlL2xpYi9YQ2lyY2xlL1hDaXJjbGUuc3ZlbHRlIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waG9zcGhvci1zdmVsdGVAMS4zLjBfc3ZlbHRlQDQuMS4xL25vZGVfbW9kdWxlcy9waG9zcGhvci1zdmVsdGUvbGliL1hDaXJjbGUvaW5kZXguanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL3RhYnMvVGhlbWVzLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvdGhlbWVzL2luZGV4LnRzIiwgIi4uL3NyYy9yZW5kZXJlci91aS9jb21wb25lbnRzL1RhYlZpZXcuc3ZlbHRlIiwgIi4uL3NyYy9yZW5kZXJlci91dGlscy9ob3RrZXlzLmpzIiwgIi4uL3NyYy9yZW5kZXJlci91aS9pbmRleC5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjb25zdCBpZGVudGl0eSA9ICh4KSA9PiB4O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUgU1xuICogQHBhcmFtIHtUfSB0YXJcbiAqIEBwYXJhbSB7U30gc3JjXG4gKiBAcmV0dXJucyB7VCAmIFN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRmb3IgKGNvbnN0IGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiAvKiogQHR5cGUge1QgJiBTfSAqLyAodGFyKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBQcm9taXNlTGlrZTxhbnk+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gKFxuXHRcdCEhdmFsdWUgJiZcblx0XHQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpICYmXG5cdFx0dHlwZW9mICgvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlKS50aGVuKSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuXHRlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG5cdFx0bG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm4pIHtcblx0cmV0dXJuIGZuKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gZm5zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG5cdGZucy5mb3JFYWNoKHJ1bik7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHRoaW5nXG4gKiBAcmV0dXJucyB7dGhpbmcgaXMgRnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuXHRyZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xufVxuXG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRfc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuXHRpZiAoZWxlbWVudF9zcmMgPT09IHVybCkgcmV0dXJuIHRydWU7XG5cdGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcblx0XHRzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0fVxuXHQvLyBUaGlzIGlzIGFjdHVhbGx5IGZhc3RlciB0aGFuIGRvaW5nIFVSTCguLikuaHJlZlxuXHRzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuXHRyZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3Jjc2V0ICovXG5mdW5jdGlvbiBzcGxpdF9zcmNzZXQoc3Jjc2V0KSB7XG5cdHJldHVybiBzcmNzZXQuc3BsaXQoJywnKS5tYXAoKHNyYykgPT4gc3JjLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MU291cmNlRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnR9IGVsZW1lbnRfc3Jjc2V0XG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IHNyY3NldFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnRfc3Jjc2V0LCBzcmNzZXQpIHtcblx0Y29uc3QgZWxlbWVudF91cmxzID0gc3BsaXRfc3Jjc2V0KGVsZW1lbnRfc3Jjc2V0LnNyY3NldCk7XG5cdGNvbnN0IHVybHMgPSBzcGxpdF9zcmNzZXQoc3Jjc2V0IHx8ICcnKTtcblxuXHRyZXR1cm4gKFxuXHRcdHVybHMubGVuZ3RoID09PSBlbGVtZW50X3VybHMubGVuZ3RoICYmXG5cdFx0dXJscy5ldmVyeShcblx0XHRcdChbdXJsLCB3aWR0aF0sIGkpID0+XG5cdFx0XHRcdHdpZHRoID09PSBlbGVtZW50X3VybHNbaV1bMV0gJiZcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byB0ZXN0IGJvdGggd2F5cyBiZWNhdXNlIFZpdGUgd2lsbCBjcmVhdGUgYW4gYSBmdWxsIFVSTCB3aXRoXG5cdFx0XHRcdC8vIGBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWZgIGZvciB0aGUgY2xpZW50IHdoZW4gYGJhc2U6ICcuLydgLCBhbmQgdGhlXG5cdFx0XHRcdC8vIHJlbGF0aXZlIFVSTHMgaW5zaWRlIHNyY3NldCBhcmUgbm90IGF1dG9tYXRpY2FsbHkgcmVzb2x2ZWQgdG8gYWJzb2x1dGUgVVJMcyBieVxuXHRcdFx0XHQvLyBicm93c2VycyAoaW4gY29udHJhc3QgdG8gaW1nLnNyYykuIFRoaXMgbWVhbnMgYm90aCBTU1IgYW5kIERPTSBjb2RlIGNvdWxkXG5cdFx0XHRcdC8vIGNvbnRhaW4gcmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMcy5cblx0XHRcdFx0KHNyY191cmxfZXF1YWwoZWxlbWVudF91cmxzW2ldWzBdLCB1cmwpIHx8IHNyY191cmxfZXF1YWwodXJsLCBlbGVtZW50X3VybHNbaV1bMF0pKVxuXHRcdClcblx0KTtcbn1cblxuLyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG5cdGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG5cdGlmIChzdG9yZSA9PSBudWxsKSB7XG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcblx0XHRcdGNhbGxiYWNrKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRcdHJldHVybiBub29wO1xuXHR9XG5cdGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG5cdHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBhIHN0b3JlIGJ5IHN1YnNjcmliaW5nIGFuZCBpbW1lZGlhdGVseSB1bnN1YnNjcmliaW5nLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSNnZXRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vc3RvcmUvcHVibGljLmpzJykuUmVhZGFibGU8VD59IHN0b3JlXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuXHRsZXQgdmFsdWU7XG5cdHN1YnNjcmliZShzdG9yZSwgKF8pID0+ICh2YWx1ZSA9IF8pKSgpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG5cdGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuXHRpZiAoZGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcblx0XHRyZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG5cdHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpIDogJCRzY29wZS5jdHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuXHRpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuXHRcdGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG5cdFx0aWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGxldHM7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IG1lcmdlZCA9IFtdO1xuXHRcdFx0Y29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcblx0XHRcdFx0bWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVyZ2VkO1xuXHRcdH1cblx0XHRyZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG5cdH1cblx0cmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKFxuXHRzbG90LFxuXHRzbG90X2RlZmluaXRpb24sXG5cdGN0eCxcblx0JCRzY29wZSxcblx0c2xvdF9jaGFuZ2VzLFxuXHRnZXRfc2xvdF9jb250ZXh0X2ZuXG4pIHtcblx0aWYgKHNsb3RfY2hhbmdlcykge1xuXHRcdGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuXHRcdHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zbG90KFxuXHRzbG90LFxuXHRzbG90X2RlZmluaXRpb24sXG5cdGN0eCxcblx0JCRzY29wZSxcblx0ZGlydHksXG5cdGdldF9zbG90X2NoYW5nZXNfZm4sXG5cdGdldF9zbG90X2NvbnRleHRfZm5cbikge1xuXHRjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuXHR1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdIHwgLTF9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcblx0aWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG5cdFx0Y29uc3QgZGlydHkgPSBbXTtcblx0XHRjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRkaXJ0eVtpXSA9IC0xO1xuXHRcdH1cblx0XHRyZXR1cm4gZGlydHk7XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG4vKiogQHJldHVybnMge3t9fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgayBpbiBwcm9wcykgaWYgKGtbMF0gIT09ICckJykgcmVzdWx0W2tdID0gcHJvcHNba107XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG5cdGNvbnN0IHJlc3QgPSB7fTtcblx0a2V5cyA9IG5ldyBTZXQoa2V5cyk7XG5cdGZvciAoY29uc3QgayBpbiBwcm9wcykgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpIHJlc3Rba10gPSBwcm9wc1trXTtcblx0cmV0dXJuIHJlc3Q7XG59XG5cbi8qKiBAcmV0dXJucyB7e319ICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0Zm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcblx0XHRyZXN1bHRba2V5XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEByZXR1cm5zIHsodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG5cdGxldCByYW4gPSBmYWxzZTtcblx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0aWYgKHJhbikgcmV0dXJuO1xuXHRcdHJhbiA9IHRydWU7XG5cdFx0Zm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG5cdHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG4vKiogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7W251bWJlciwgc3RyaW5nXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0X2Nzc191bml0KHZhbHVlKSB7XG5cdGNvbnN0IHNwbGl0ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5tYXRjaCgvXlxccyooLT9bXFxkLl0rKShbXlxcc10qKVxccyokLyk7XG5cdHJldHVybiBzcGxpdCA/IFtwYXJzZUZsb2F0KHNwbGl0WzFdKSwgc3BsaXRbMl0gfHwgJ3B4J10gOiBbLyoqIEB0eXBlIHtudW1iZXJ9ICovICh2YWx1ZSksICdweCddO1xufVxuXG5leHBvcnQgY29uc3QgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMgPSBbJycsIHRydWUsIDEsICd0cnVlJywgJ2NvbnRlbnRlZGl0YWJsZSddO1xuIiwgIi8qKiBAdHlwZSB7dHlwZW9mIGdsb2JhbFRoaXN9ICovXG5leHBvcnQgY29uc3QgZ2xvYmFscyA9XG5cdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cdFx0PyB3aW5kb3dcblx0XHQ6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gZ2xvYmFsVGhpc1xuXHRcdDogLy8gQHRzLWlnbm9yZSBOb2RlIHR5cGluZ3MgaGF2ZSB0aGlzXG5cdFx0ICBnbG9iYWw7XG4iLCAiaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogUmVzaXplIG9ic2VydmVyIHNpbmdsZXRvbi5cbiAqIE9uZSBsaXN0ZW5lciBwZXIgZWxlbWVudCBvbmx5IVxuICogaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9hL2Nocm9taXVtLm9yZy9nL2JsaW5rLWRldi9jL3o2aWVuT05VYjVBL20vRjUtVmNVWnRCQUFKXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbiB7XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUge1dlYWtNYXA8RWxlbWVudCwgaW1wb3J0KCcuL3ByaXZhdGUuanMnKS5MaXN0ZW5lcj59XG5cdCAqL1xuXHRfbGlzdGVuZXJzID0gJ1dlYWtNYXAnIGluIGdsb2JhbHMgPyBuZXcgV2Vha01hcCgpIDogdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAdHlwZSB7UmVzaXplT2JzZXJ2ZXJ9XG5cdCAqL1xuXHRfb2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG5cblx0LyoqIEB0eXBlIHtSZXNpemVPYnNlcnZlck9wdGlvbnN9ICovXG5cdG9wdGlvbnM7XG5cblx0LyoqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJPcHRpb25zfSBvcHRpb25zICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuTGlzdGVuZXJ9IGxpc3RlbmVyXG5cdCAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuXHQgKi9cblx0b2JzZXJ2ZShlbGVtZW50LCBsaXN0ZW5lcikge1xuXHRcdHRoaXMuX2xpc3RlbmVycy5zZXQoZWxlbWVudCwgbGlzdGVuZXIpO1xuXHRcdHRoaXMuX2dldE9ic2VydmVyKCkub2JzZXJ2ZShlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdFx0dGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOyAvLyB0aGlzIGxpbmUgY2FuIHByb2JhYmx5IGJlIHJlbW92ZWRcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0T2JzZXJ2ZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuX29ic2VydmVyID8/XG5cdFx0XHQodGhpcy5fb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0UmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uZW50cmllcy5zZXQoZW50cnkudGFyZ2V0LCBlbnRyeSk7XG5cdFx0XHRcdFx0dGhpcy5fbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpPy4oZW50cnkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSlcblx0XHQpO1xuXHR9XG59XG5cbi8vIE5lZWRzIHRvIGJlIHdyaXR0ZW4gbGlrZSB0aGlzIHRvIHBhc3MgdGhlIHRyZWUtc2hha2UtdGVzdFxuUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uZW50cmllcyA9ICdXZWFrTWFwJyBpbiBnbG9iYWxzID8gbmV3IFdlYWtNYXAoKSA6IHVuZGVmaW5lZDtcbiIsICJpbXBvcnQgeyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uanMnO1xuaW1wb3J0IHsgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMsIGhhc19wcm9wIH0gZnJvbSAnLi91dGlscy5qcyc7XG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcblx0aXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG5cdGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb3dcbiAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoXG4gKiBAcGFyYW0geyhpbmRleDogbnVtYmVyKSA9PiBudW1iZXJ9IGtleVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcblx0Ly8gUmV0dXJuIGZpcnN0IGluZGV4IG9mIHZhbHVlIGxhcmdlciB0aGFuIGlucHV0IHZhbHVlIGluIHRoZSByYW5nZSBbbG93LCBoaWdoKVxuXHR3aGlsZSAobG93IDwgaGlnaCkge1xuXHRcdGNvbnN0IG1pZCA9IGxvdyArICgoaGlnaCAtIGxvdykgPj4gMSk7XG5cdFx0aWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG5cdFx0XHRsb3cgPSBtaWQgKyAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWdoID0gbWlkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbG93O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG5cdGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KSByZXR1cm47XG5cdHRhcmdldC5oeWRyYXRlX2luaXQgPSB0cnVlO1xuXHQvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG5cblx0bGV0IGNoaWxkcmVuID0gLyoqIEB0eXBlIHtBcnJheUxpa2U8Tm9kZUV4Mj59ICovICh0YXJnZXQuY2hpbGROb2Rlcyk7XG5cdC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG5cdGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIRUFEJykge1xuXHRcdGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG5cdFx0XHRpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG15Q2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hpbGRyZW4gPSBteUNoaWxkcmVuO1xuXHR9XG5cdC8qXG5cdCAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG5cdCAqIFdlIGNhbiByZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5IGJ5IGZpbmRpbmcgdGhlIGxvbmdlc3Qgc3Vic2VxdWVuY2Ugb2Zcblx0ICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3Rcblx0ICogc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcblx0ICogY29tcHV0aW5nIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgLmNsYWltX29yZGVyIHZhbHVlcy5cblx0ICpcblx0ICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG5cdCAqIHBvc3NpYmxlLlxuXHQgKlxuXHQgKiBQcm9vZjpcblx0ICogV2Uga25vdyB0aGF0LCBnaXZlbiBhIHNldCBvZiByZW9yZGVyaW5nIG9wZXJhdGlvbnMsIHRoZSBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlXG5cdCAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuXHQgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuXHQgKiBzZXQgb2Ygbm9kZXMgdGhhdCBkbyBub3QgbW92ZSBmb3JtIGEgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLlxuXHQgKi9cblx0Ly8gQ29tcHV0ZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Vcblx0Ly8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuXHRjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG5cdC8vIFByZWRlY2Vzc29yIGluZGljZXMgKyAxXG5cdGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuXHRtWzBdID0gLTE7XG5cdGxldCBsb25nZXN0ID0gMDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBjaGlsZHJlbltpXS5jbGFpbV9vcmRlcjtcblx0XHQvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuXHRcdC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG5cdFx0Ly8gd2l0aCBmYXN0IHBhdGggZm9yIHdoZW4gd2UgYXJlIG9uIHRoZSBjdXJyZW50IGxvbmdlc3Qgc3Vic2VxdWVuY2Vcblx0XHRjb25zdCBzZXFMZW4gPVxuXHRcdFx0KGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnRcblx0XHRcdFx0PyBsb25nZXN0ICsgMVxuXHRcdFx0XHQ6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIChpZHgpID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG5cdFx0cFtpXSA9IG1bc2VxTGVuXSArIDE7XG5cdFx0Y29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcblx0XHQvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG5cdFx0bVtuZXdMZW5dID0gaTtcblx0XHRsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcblx0fVxuXHQvLyBUaGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIG5vZGVzIChpbml0aWFsbHkgcmV2ZXJzZWQpXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlRXgyW119XG5cdCAqL1xuXHRjb25zdCBsaXMgPSBbXTtcblx0Ly8gVGhlIHJlc3Qgb2YgdGhlIG5vZGVzLCBub2RlcyB0aGF0IHdpbGwgYmUgbW92ZWRcblxuXHQvKipcblx0ICogQHR5cGUge05vZGVFeDJbXX1cblx0ICovXG5cdGNvbnN0IHRvTW92ZSA9IFtdO1xuXHRsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuXHRcdGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcblx0XHRmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuXHRcdFx0dG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuXHRcdH1cblx0XHRsYXN0LS07XG5cdH1cblx0Zm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG5cdFx0dG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuXHR9XG5cdGxpcy5yZXZlcnNlKCk7XG5cdC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuXHR0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuXHQvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuXHRmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcblx0XHR3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9Nb3ZlW2ldLmNsYWltX29yZGVyID49IGxpc1tqXS5jbGFpbV9vcmRlcikge1xuXHRcdFx0aisrO1xuXHRcdH1cblx0XHRjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZSh0b01vdmVbaV0sIGFuY2hvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVfc2hlZXRfaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcblx0Y29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuXHRpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG5cdFx0c3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG5cdFx0YXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdCB8IERvY3VtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcblx0aWYgKCFub2RlKSByZXR1cm4gZG9jdW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuXHRpZiAocm9vdCAmJiAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0KSB7XG5cdFx0cmV0dXJuIC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpO1xuXHR9XG5cdHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Q1NTU3R5bGVTaGVldH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcblx0Y29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG5cdC8vIEZvciB0cmFuc2l0aW9ucyB0byB3b3JrIHdpdGhvdXQgJ3N0eWxlLXNyYzogdW5zYWZlLWlubGluZScgQ29udGVudCBTZWN1cml0eSBQb2xpY3ksXG5cdC8vIHRoZXNlIGVtcHR5IHRhZ3MgbmVlZCB0byBiZSBhbGxvd2VkIHdpdGggYSBoYXNoIGFzIGEgd29ya2Fyb3VuZCB1bnRpbCB3ZSBtb3ZlIHRvIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuXG5cdC8vIFVzaW5nIHRoZSBoYXNoIGZvciB0aGUgZW1wdHkgc3RyaW5nIChmb3IgYW4gZW1wdHkgdGFnKSB3b3JrcyBpbiBhbGwgYnJvd3NlcnMgZXhjZXB0IFNhZmFyaS5cblx0Ly8gU28gYXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgd29ya2Fyb3VuZCwgd2hlbiB3ZSBhcHBlbmQgZW1wdHkgc3R5bGUgdGFncyB3ZSBzZXQgdGhlaXIgY29udGVudCB0byAvKiBlbXB0eSAqLy5cblx0Ly8gVGhlIGhhc2ggJ3NoYTI1Ni05T2xOTzBETkVlYVZ6SEw0Ulp3Q0xzQkhBOFdCUTh0b0JwLzRGNVhWMm5jPScgd2lsbCB0aGVuIHdvcmsgZXZlbiBpbiBTYWZhcmkuXG5cdHN0eWxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnLyogZW1wdHkgKi8nO1xuXHRhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NoYWRvd1Jvb3QgfCBEb2N1bWVudH0gbm9kZVxuICogQHBhcmFtIHtIVE1MU3R5bGVFbGVtZW50fSBzdHlsZVxuICogQHJldHVybnMge0NTU1N0eWxlU2hlZXR9XG4gKi9cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG5cdGFwcGVuZCgvKiogQHR5cGUge0RvY3VtZW50fSAqLyAobm9kZSkuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG5cdHJldHVybiBzdHlsZS5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVFeH0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGVFeH0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuXHRpZiAoaXNfaHlkcmF0aW5nKSB7XG5cdFx0aW5pdF9oeWRyYXRlKHRhcmdldCk7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0KHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldClcblx0XHQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXHRcdC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG5cdFx0d2hpbGUgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLmNsYWltX29yZGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdGlmIChub2RlICE9PSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCkge1xuXHRcdFx0Ly8gV2Ugb25seSBpbnNlcnQgaWYgdGhlIG9yZGVyaW5nIG9mIHRoaXMgbm9kZSBzaG91bGQgYmUgbW9kaWZpZWQgb3IgdGhlIHBhcmVudCBub2RlIGlzIG5vdCB0YXJnZXRcblx0XHRcdGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQgfHwgbm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gbm9kZS5uZXh0U2libGluZztcblx0XHR9XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZUV4fSBub2RlXG4gKiBAcGFyYW0ge05vZGVFeH0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuXHRpZiAoaXNfaHlkcmF0aW5nICYmICFhbmNob3IpIHtcblx0XHRhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuXHRpZiAobm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gS1xuICogQHBhcmFtIHtLfSBuYW1lXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBLXG4gKiBAcGFyYW0ge0t9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpc1xuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtLXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIHtrZXlvZiBUfSBLXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtLW119IGV4Y2x1ZGVcbiAqIEByZXR1cm5zIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcblx0Y29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fSAqLyAoe30pO1xuXHRmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG5cdFx0aWYgKFxuXHRcdFx0aGFzX3Byb3Aob2JqLCBrKSAmJlxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0ZXhjbHVkZS5pbmRleE9mKGspID09PSAtMVxuXHRcdCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0dGFyZ2V0W2tdID0gb2JqW2tdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXB9IEtcbiAqIEBwYXJhbSB7S30gbmFtZVxuICogQHJldHVybnMge1NWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZSgpIHtcblx0cmV0dXJuIHRleHQoJyAnKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpIHtcblx0cmV0dXJuIHRleHQoJycpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJucyB7Q29tbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQoY29udGVudCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuXHRyZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gdm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxmKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcykgZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRpZiAoZXZlbnQuaXNUcnVzdGVkKSBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0ZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuLyoqXG4gKiBMaXN0IG9mIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYWx3YXlzIGJlIHNldCB0aHJvdWdoIHRoZSBhdHRyIG1ldGhvZCxcbiAqIGJlY2F1c2UgdXBkYXRpbmcgdGhlbSB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgZG9lc24ndCB3b3JrIHJlbGlhYmx5LlxuICogSW4gdGhlIGV4YW1wbGUgb2YgYHdpZHRoYC9gaGVpZ2h0YCwgdGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgc2V0dGVyIG9ubHlcbiAqIGFjY2VwdHMgbnVtZXJpYyB2YWx1ZXMsIGJ1dCB0aGUgYXR0cmlidXRlIGNhbiBhbHNvIGJlIHNldCB0byBhIHN0cmluZyBsaWtlIGA1MCVgLlxuICogSWYgdGhpcyBsaXN0IGJlY29tZXMgdG9vIGJpZywgcmV0aGluayB0aGlzIGFwcHJvYWNoLlxuICovXG5jb25zdCBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZSA9IFsnd2lkdGgnLCAnaGVpZ2h0J107XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3sgW3g6IHN0cmluZ106IHN0cmluZyB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcblx0XHRcdC8qKiBAdHlwZSB7YW55fSAqLyAobm9kZSkudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0gJiZcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0uc2V0ICYmXG5cdFx0XHRhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZS5pbmRleE9mKGtleSkgPT09IC0xXG5cdFx0KSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHt7IFt4OiBzdHJpbmddOiBzdHJpbmcgfX0gYXR0cmlidXRlc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBkYXRhX21hcFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAobm9kZSwgZGF0YV9tYXApIHtcblx0T2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIGtleSwgZGF0YV9tYXBba2V5XSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG5cdGlmIChwcm9wIGluIG5vZGUpIHtcblx0XHRub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0YXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZHluYW1pY19lbGVtZW50X2RhdGEodGFnKSB7XG5cdHJldHVybiAvLS8udGVzdCh0YWcpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc3ZlbHRlX2RhdGFzZXQobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5kYXRhc2V0LnN2ZWx0ZUg7XG59XG5cbi8qKlxuICogQHJldHVybnMge3Vua25vd25bXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuXHRjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0aWYgKCFjaGVja2VkKSB7XG5cdFx0dmFsdWUuZGVsZXRlKF9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZ3JvdXBcbiAqIEByZXR1cm5zIHt7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXHRyZXR1cm4ge1xuXHRcdC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcblx0XHRcdF9pbnB1dHMgPSBpbnB1dHM7XG5cdFx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBncm91cC5wdXNoKGlucHV0KSk7XG5cdFx0fSxcblx0XHQvKiByZW1vdmUgKi8gcigpIHtcblx0XHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGdyb3VwLnNwbGljZShncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzXG4gKiBAcmV0dXJucyB7eyB1KG5ld19pbmRleGVzOiBudW1iZXJbXSk6IHZvaWQ7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByOiAoKSA9PiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMoZ3JvdXAsIGluZGV4ZXMpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXG5cdGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG5cdFx0fVxuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gcHVzaCgpIHtcblx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBfZ3JvdXAucHVzaChpbnB1dCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0X2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdC8qIHVwZGF0ZSAqLyB1KG5ld19pbmRleGVzKSB7XG5cdFx0XHRpbmRleGVzID0gbmV3X2luZGV4ZXM7XG5cdFx0XHRjb25zdCBuZXdfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cdFx0XHRpZiAobmV3X2dyb3VwICE9PSBfZ3JvdXApIHtcblx0XHRcdFx0cmVtb3ZlKCk7XG5cdFx0XHRcdF9ncm91cCA9IG5ld19ncm91cDtcblx0XHRcdFx0cHVzaCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuXHRcdFx0X2lucHV0cyA9IGlucHV0cztcblx0XHRcdHB1c2goKTtcblx0XHR9LFxuXHRcdC8qIHJlbW92ZSAqLyByOiByZW1vdmVcblx0fTtcbn1cblxuLyoqIEByZXR1cm5zIHtudW1iZXJ9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuXHRjb25zdCBhcnJheSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0NoaWxkTm9kZVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG5cdGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge0NoaWxkTm9kZUV4fSBSXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHsobm9kZTogQ2hpbGROb2RlRXgpID0+IG5vZGUgaXMgUn0gcHJlZGljYXRlXG4gKiBAcGFyYW0geyhub2RlOiBDaGlsZE5vZGVFeCkgPT4gQ2hpbGROb2RlRXggfCB1bmRlZmluZWR9IHByb2Nlc3NOb2RlXG4gKiBAcGFyYW0geygpID0+IFJ9IGNyZWF0ZU5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9udFVwZGF0ZUxhc3RJbmRleFxuICogQHJldHVybnMge1J9XG4gKi9cbmZ1bmN0aW9uIGNsYWltX25vZGUobm9kZXMsIHByZWRpY2F0ZSwgcHJvY2Vzc05vZGUsIGNyZWF0ZU5vZGUsIGRvbnRVcGRhdGVMYXN0SW5kZXggPSBmYWxzZSkge1xuXHQvLyBUcnkgdG8gZmluZCBub2RlcyBpbiBhbiBvcmRlciBzdWNoIHRoYXQgd2UgbGVuZ3RoZW4gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuXHRpbml0X2NsYWltX2luZm8obm9kZXMpO1xuXHRjb25zdCByZXN1bHROb2RlID0gKCgpID0+IHtcblx0XHQvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcblx0XHRmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4OyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmIChwcmVkaWNhdGUobm9kZSkpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIHdlIHRyeSB0byBmaW5kIG9uZSBiZWZvcmVcblx0XHQvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcblx0XHRmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmIChwcmVkaWNhdGUobm9kZSkpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuXHRcdHJldHVybiBjcmVhdGVOb2RlKCk7XG5cdH0pKCk7XG5cdHJlc3VsdE5vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG5cdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHRyZXR1cm4gcmVzdWx0Tm9kZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZykgPT4gRWxlbWVudCB8IFNWR0VsZW1lbnR9IGNyZWF0ZV9lbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIEVsZW1lbnQgfCBTVkdFbGVtZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLFxuXHRcdC8qKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlID0gW107XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcblx0XHRcdFx0XHRyZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlbW92ZS5mb3JFYWNoKCh2KSA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cdFx0KCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSlcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH19IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgU1ZHRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0cmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuXHRyZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuXHRyZXR1cm4gY2xhaW1fbm9kZShcblx0XHRub2Rlcyxcblx0XHQvKiogQHJldHVybnMge25vZGUgaXMgVGV4dH0gKi9cblx0XHQobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyxcblx0XHQvKiogQHBhcmFtIHtUZXh0fSBub2RlICovXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG5cdFx0XHRpZiAobm9kZS5kYXRhLnN0YXJ0c1dpdGgoZGF0YVN0cikpIHtcblx0XHRcdFx0aWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZS5kYXRhID0gZGF0YVN0cjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCgpID0+IHRleHQoZGF0YSksXG5cdFx0dHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcblx0KTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuXHRyZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHJldHVybnMge0NvbW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9jb21tZW50KG5vZGVzLCBkYXRhKSB7XG5cdHJldHVybiBjbGFpbV9ub2RlKFxuXHRcdG5vZGVzLFxuXHRcdC8qKiBAcmV0dXJucyB7bm9kZSBpcyBDb21tZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4LFxuXHRcdC8qKiBAcGFyYW0ge0NvbW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0bm9kZS5kYXRhID0gJycgKyBkYXRhO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9LFxuXHRcdCgpID0+IGNvbW1lbnQoZGF0YSksXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRfY29tbWVudF9pZHgobm9kZXMsIHRleHQsIHN0YXJ0KSB7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3N2Z1xuICogQHJldHVybnMge0h0bWxUYWdIeWRyYXRpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9odG1sX3RhZyhub2RlcywgaXNfc3ZnKSB7XG5cdC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuXHRjb25zdCBzdGFydF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG5cdGNvbnN0IGVuZF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGlmIChzdGFydF9pbmRleCA9PT0gLTEgfHwgZW5kX2luZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcpO1xuXHR9XG5cblx0aW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcblx0Y29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG5cdGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcblx0Zm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcblx0XHRuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuXHRcdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHR9XG5cdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcsIGNsYWltZWRfbm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcblx0ZGF0YSA9ICcnICsgZGF0YTtcblx0aWYgKHRleHQuZGF0YSA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKSB7XG5cdGRhdGEgPSAnJyArIGRhdGE7XG5cdGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cl92YWx1ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuXHRpZiAofmNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLmluZGV4T2YoYXR0cl92YWx1ZSkpIHtcblx0XHRzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0X2RhdGEodGV4dCwgZGF0YSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG5cdGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIGRvIG5vdGhpbmdcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG5cdH0gZWxzZSB7XG5cdFx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSwgbW91bnRpbmcpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmICghbW91bnRpbmcgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuXHRjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcblx0cmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcblx0cmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCAob3B0aW9uKSA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcblxuLyoqXG4gKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbmxldCBjcm9zc29yaWdpbjtcblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcblx0aWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcblx0XHRjcm9zc29yaWdpbiA9IGZhbHNlO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuXHRcdFx0XHR2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNyb3Nzb3JpZ2luID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcblx0Y29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0bm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblx0Y29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoXG5cdFx0J3N0eWxlJyxcblx0XHQnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcblx0XHRcdCdvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnXG5cdCk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0aWZyYW1lLnRhYkluZGV4ID0gLTE7XG5cdGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcblxuXHQvKipcblx0ICogQHR5cGUgeygpID0+IHZvaWR9XG5cdCAqL1xuXHRsZXQgdW5zdWJzY3JpYmU7XG5cdGlmIChjcm9zc29yaWdpbikge1xuXHRcdGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuXHRcdHVuc3Vic2NyaWJlID0gbGlzdGVuKFxuXHRcdFx0d2luZG93LFxuXHRcdFx0J21lc3NhZ2UnLFxuXHRcdFx0LyoqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldmVudCAqLyAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpIGZuKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcblx0XHRpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG5cdFx0XHQvLyBtYWtlIHN1cmUgYW4gaW5pdGlhbCByZXNpemUgZXZlbnQgaXMgZmlyZWQgX2FmdGVyXyB0aGUgaWZyYW1lIGlzIGxvYWRlZCAod2hpY2ggaXMgYXN5bmNocm9ub3VzKVxuXHRcdFx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzQyMzNcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0fVxuXHRhcHBlbmQobm9kZSwgaWZyYW1lKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoY3Jvc3NvcmlnaW4pIHtcblx0XHRcdHVuc3Vic2NyaWJlKCk7XG5cdFx0fSBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdFx0ZGV0YWNoKGlmcmFtZSk7XG5cdH07XG59XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2NvbnRlbnRfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7XG5cdGJveDogJ2NvbnRlbnQtYm94J1xufSk7XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHtcblx0Ym94OiAnYm9yZGVyLWJveCdcbn0pO1xuZXhwb3J0IGNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKFxuXHR7IGJveDogJ2RldmljZS1waXhlbC1jb250ZW50LWJveCcgfVxuKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIH07XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuXHQvLyBUaGUgYCEhYCBpcyByZXF1aXJlZCBiZWNhdXNlIGFuIGB1bmRlZmluZWRgIGZsYWcgbWVhbnMgZmxpcHBpbmcgdGhlIGN1cnJlbnQgc3RhdGUuXG5cdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCAhIXRvZ2dsZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1R9IFtkZXRhaWxdXG4gKiBAcGFyYW0ge3sgYnViYmxlcz86IGJvb2xlYW4sIGNhbmNlbGFibGU/OiBib29sZWFuIH19IFtvcHRpb25zXVxuICogQHJldHVybnMge0N1c3RvbUV2ZW50PFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcblx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbCwgYnViYmxlcywgY2FuY2VsYWJsZSB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHJldHVybnMge0NoaWxkTm9kZUFycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVJZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGxldCBzdGFydGVkID0gMDtcblx0Zm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLykge1xuXHRcdFx0Y29uc3QgY29tbWVudCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuXHRcdFx0aWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9FTkRgKSB7XG5cdFx0XHRcdHN0YXJ0ZWQgLT0gMTtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcblx0XHRcdFx0c3RhcnRlZCArPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHN0YXJ0ZWQgPiAwKSB7XG5cdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIEh0bWxUYWcge1xuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQGRlZmF1bHQgZmFsc2Vcblx0ICovXG5cdGlzX3N2ZyA9IGZhbHNlO1xuXHQvKiogcGFyZW50IGZvciBjcmVhdGluZyBub2RlICovXG5cdGUgPSB1bmRlZmluZWQ7XG5cdC8qKiBodG1sIHRhZyBub2RlcyAqL1xuXHRuID0gdW5kZWZpbmVkO1xuXHQvKiogdGFyZ2V0ICovXG5cdHQgPSB1bmRlZmluZWQ7XG5cdC8qKiBhbmNob3IgKi9cblx0YSA9IHVuZGVmaW5lZDtcblx0Y29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UpIHtcblx0XHR0aGlzLmlzX3N2ZyA9IGlzX3N2Zztcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0YyhodG1sKSB7XG5cdFx0dGhpcy5oKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSB0YXJnZXRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IGFuY2hvclxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG5cdFx0aWYgKCF0aGlzLmUpIHtcblx0XHRcdGlmICh0aGlzLmlzX3N2Zylcblx0XHRcdFx0dGhpcy5lID0gc3ZnX2VsZW1lbnQoLyoqIEB0eXBlIHtrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcH0gKi8gKHRhcmdldC5ub2RlTmFtZSkpO1xuXHRcdFx0LyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi8gZWxzZVxuXHRcdFx0XHR0aGlzLmUgPSBlbGVtZW50KFxuXHRcdFx0XHRcdC8qKiBAdHlwZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSAqLyAoXG5cdFx0XHRcdFx0XHR0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdHRoaXMudCA9XG5cdFx0XHRcdHRhcmdldC50YWdOYW1lICE9PSAnVEVNUExBVEUnXG5cdFx0XHRcdFx0PyB0YXJnZXRcblx0XHRcdFx0XHQ6IC8qKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gKi8gKHRhcmdldCkuY29udGVudDtcblx0XHRcdHRoaXMuYyhodG1sKTtcblx0XHR9XG5cdFx0dGhpcy5pKGFuY2hvcik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRoKGh0bWwpIHtcblx0XHR0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR0aGlzLm4gPSBBcnJheS5mcm9tKFxuXHRcdFx0dGhpcy5lLm5vZGVOYW1lID09PSAnVEVNUExBVEUnID8gdGhpcy5lLmNvbnRlbnQuY2hpbGROb2RlcyA6IHRoaXMuZS5jaGlsZE5vZGVzXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0aShhbmNob3IpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHAoaHRtbCkge1xuXHRcdHRoaXMuZCgpO1xuXHRcdHRoaXMuaChodG1sKTtcblx0XHR0aGlzLmkodGhpcy5hKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZCgpIHtcblx0XHR0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG5cdC8qKiBAdHlwZSB7RWxlbWVudFtdfSBoeWRyYXRpb24gY2xhaW1lZCBub2RlcyAqL1xuXHRsID0gdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKGlzX3N2ZyA9IGZhbHNlLCBjbGFpbWVkX25vZGVzKSB7XG5cdFx0c3VwZXIoaXNfc3ZnKTtcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHRcdHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjKGh0bWwpIHtcblx0XHRpZiAodGhpcy5sKSB7XG5cdFx0XHR0aGlzLm4gPSB0aGlzLmw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1cGVyLmMoaHRtbCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRpKGFuY2hvcikge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcblx0XHRyZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyhlbGVtZW50KSB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChcblx0XHQvKiogQHBhcmFtIHtFbGVtZW50fSBub2RlICovIChub2RlKSA9PiB7XG5cdFx0XHRyZXN1bHRbbm9kZS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuXHRcdH1cblx0KTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50KGNvbXBvbmVudCwgcHJvcHMpIHtcblx0cmV0dXJuIG5ldyBjb21wb25lbnQocHJvcHMpO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtOb2RlICYge1xuICogXHRjbGFpbV9vcmRlcj86IG51bWJlcjtcbiAqIFx0aHlkcmF0ZV9pbml0PzogdHJ1ZTtcbiAqIFx0YWN0dWFsX2VuZF9jaGlsZD86IE5vZGVFeDtcbiAqIFx0Y2hpbGROb2RlczogTm9kZUxpc3RPZjxOb2RlRXg+O1xuICogfX0gTm9kZUV4XG4gKi9cblxuLyoqIEB0eXBlZGVmIHtDaGlsZE5vZGUgJiBOb2RlRXh9IENoaWxkTm9kZUV4ICovXG5cbi8qKiBAdHlwZWRlZiB7Tm9kZUV4ICYgeyBjbGFpbV9vcmRlcjogbnVtYmVyIH19IE5vZGVFeDIgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7Q2hpbGROb2RlRXhbXSAmIHtcbiAqIFx0Y2xhaW1faW5mbz86IHtcbiAqIFx0XHRsYXN0X2luZGV4OiBudW1iZXI7XG4gKiBcdFx0dG90YWxfY2xhaW1lZDogbnVtYmVyO1xuICogXHR9O1xuICogfX0gQ2hpbGROb2RlQXJyYXlcbiAqL1xuIiwgImltcG9ydCB7IGN1c3RvbV9ldmVudCB9IGZyb20gJy4vZG9tLmpzJztcblxuZXhwb3J0IGxldCBjdXJyZW50X2NvbXBvbmVudDtcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcblx0Y3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG5cdGlmICghY3VycmVudF9jb21wb25lbnQpIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG5cdHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCBhZnRlciBhbnkgc3RhdGUgY2hhbmdlLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYmVmb3JlIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNiZWZvcmV1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBUaGUgYG9uTW91bnRgIGZ1bmN0aW9uIHNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NLlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlICppbnNpZGUqIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS5cbiAqXG4gKiBJZiBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIF9zeW5jaHJvbm91c2x5XyBmcm9tIGBvbk1vdW50YCwgaXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBgb25Nb3VudGAgZG9lcyBub3QgcnVuIGluc2lkZSBhIFtzZXJ2ZXItc2lkZSBjb21wb25lbnRdKC9kb2NzI3J1bi10aW1lLXNlcnZlci1zaWRlLWNvbXBvbmVudC1hcGkpLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbm1vdW50XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+IHwgUHJvbWlzZTxpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLk5vdEZ1bmN0aW9uPFQ+PiB8ICgoKSA9PiBhbnkpfSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdW50KGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBhZnRlciB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjYWZ0ZXJ1cGRhdGVcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNvbmRlc3Ryb3lcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oL2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBUaGUgZXZlbnQgZGlzcGF0Y2hlciBjYW4gYmUgdHlwZWQgdG8gbmFycm93IHRoZSBhbGxvd2VkIGV2ZW50IG5hbWVzIGFuZCB0aGUgdHlwZSBvZiB0aGUgYGRldGFpbGAgYXJndW1lbnQ6XG4gKiBgYGB0c1xuICogY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXI8e1xuICogIGxvYWRlZDogbmV2ZXI7IC8vIGRvZXMgbm90IHRha2UgYSBkZXRhaWwgYXJndW1lbnRcbiAqICBjaGFuZ2U6IHN0cmluZzsgLy8gdGFrZXMgYSBkZXRhaWwgYXJndW1lbnQgb2YgdHlwZSBzdHJpbmcsIHdoaWNoIGlzIHJlcXVpcmVkXG4gKiAgb3B0aW9uYWw6IG51bWJlciB8IG51bGw7IC8vIHRha2VzIGFuIG9wdGlvbmFsIGRldGFpbCBhcmd1bWVudCBvZiB0eXBlIG51bWJlclxuICogfT4oKTtcbiAqIGBgYFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNjcmVhdGVldmVudGRpc3BhdGNoZXJcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW0V2ZW50TWFwPWFueV1cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljLmpzJykuRXZlbnREaXNwYXRjaGVyPEV2ZW50TWFwPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcblx0Y29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG5cdHJldHVybiAodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pID0+IHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuXHRcdGlmIChjYWxsYmFja3MpIHtcblx0XHRcdC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcblx0XHRcdC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cblx0XHRcdGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuXHRcdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IHtcblx0XHRcdFx0Zm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNzZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHBhcmFtIHtUfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRjb250ZXh0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNnZXRhbGxjb250ZXh0c1xuICogQHRlbXBsYXRlIHtNYXA8YW55LCBhbnk+fSBbVD1NYXA8YW55LCBhbnk+XVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcblx0cmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUjaGFzY29udGV4dFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cblxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbi8qKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGV2ZW50XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG5cdGlmIChjYWxsYmFja3MpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0Y2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcblx0fVxufVxuIiwgImltcG9ydCB7IHJ1bl9hbGwgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICcuL2xpZmVjeWNsZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5leHBvcnQgY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuZXhwb3J0IGNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5cbmxldCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5cbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuXG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xuXG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuXHRpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcblx0XHR1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcblx0XHRyZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrKCkge1xuXHRzY2hlZHVsZV91cGRhdGUoKTtcblx0cmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG5cdHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcblx0Zmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuXG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuXG5sZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaCgpIHtcblx0Ly8gRG8gbm90IHJlZW50ZXIgZmx1c2ggd2hpbGUgZGlydHkgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgYXMgdGhpcyBjYW5cblx0Ly8gcmVzdWx0IGluIGFuIGluZmluaXRlIGxvb3AuIEluc3RlYWQsIGxldCB0aGUgaW5uZXIgZmx1c2ggaGFuZGxlIGl0LlxuXHQvLyBSZWVudHJhbmN5IGlzIG9rIGFmdGVyd2FyZHMgZm9yIGJpbmRpbmdzIGV0Yy5cblx0aWYgKGZsdXNoaWR4ICE9PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuXHRkbyB7XG5cdFx0Ly8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuXHRcdC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcblx0XHRcdFx0Zmx1c2hpZHgrKztcblx0XHRcdFx0c2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0XHRcdHVwZGF0ZShjb21wb25lbnQuJCQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIHJlc2V0IGRpcnR5IHN0YXRlIHRvIG5vdCBlbmQgdXAgaW4gYSBkZWFkbG9ja2VkIHN0YXRlIGFuZCB0aGVuIHJldGhyb3dcblx0XHRcdGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcblx0XHRcdGZsdXNoaWR4ID0gMDtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcblx0XHRkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG5cdFx0Zmx1c2hpZHggPSAwO1xuXHRcdHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG5cdFx0Ly8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG5cdFx0Ly8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuXHRcdC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuXHRcdFx0aWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG5cdFx0XHRcdC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcblx0XHRcdFx0c2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuXHR9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG5cdHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0Zmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG5cdH1cblx0dXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuXHRzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuXHRzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG5cdGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuXHRcdCQkLnVwZGF0ZSgpO1xuXHRcdHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG5cdFx0Y29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcblx0XHQkJC5kaXJ0eSA9IFstMV07XG5cdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcblx0XHQkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcblx0fVxufVxuXG4vKipcbiAqIFVzZWZ1bCBmb3IgZXhhbXBsZSB0byBleGVjdXRlIHJlbWFpbmluZyBgYWZ0ZXJVcGRhdGVgIGNhbGxiYWNrcyBiZWZvcmUgZXhlY3V0aW5nIGBkZXN0cm95YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gZm5zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoZm5zKSB7XG5cdGNvbnN0IGZpbHRlcmVkID0gW107XG5cdGNvbnN0IHRhcmdldHMgPSBbXTtcblx0cmVuZGVyX2NhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiAoZm5zLmluZGV4T2YoYykgPT09IC0xID8gZmlsdGVyZWQucHVzaChjKSA6IHRhcmdldHMucHVzaChjKSkpO1xuXHR0YXJnZXRzLmZvckVhY2goKGMpID0+IGMoKSk7XG5cdHJlbmRlcl9jYWxsYmFja3MgPSBmaWx0ZXJlZDtcbn1cbiIsICJpbXBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIsIGlzX2Z1bmN0aW9uLCBub29wLCBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBub3cgfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcbmltcG9ydCB7IGxvb3AgfSBmcm9tICcuL2xvb3AuanMnO1xuaW1wb3J0IHsgY3JlYXRlX3J1bGUsIGRlbGV0ZV9ydWxlIH0gZnJvbSAnLi9zdHlsZV9tYW5hZ2VyLmpzJztcbmltcG9ydCB7IGN1c3RvbV9ldmVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGFkZF9yZW5kZXJfY2FsbGJhY2sgfSBmcm9tICcuL3NjaGVkdWxlci5qcyc7XG5cbi8qKlxuICogQHR5cGUge1Byb21pc2U8dm9pZD4gfCBudWxsfVxuICovXG5sZXQgcHJvbWlzZTtcblxuLyoqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZnVuY3Rpb24gd2FpdCgpIHtcblx0aWYgKCFwcm9taXNlKSB7XG5cdFx0cHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRwcm9taXNlID0gbnVsbDtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7SU5UUk8gfCBPVVRSTyB8IGJvb2xlYW59IGRpcmVjdGlvblxuICogQHBhcmFtIHsnc3RhcnQnIHwgJ2VuZCd9IGtpbmRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcblx0bm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuXG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBAdHlwZSB7T3V0cm99XG4gKi9cbmxldCBvdXRyb3M7XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuXHRvdXRyb3MgPSB7XG5cdFx0cjogMCxcblx0XHRjOiBbXSxcblx0XHRwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuXHRpZiAoIW91dHJvcy5yKSB7XG5cdFx0cnVuX2FsbChvdXRyb3MuYyk7XG5cdH1cblx0b3V0cm9zID0gb3V0cm9zLnA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLkZyYWdtZW50fSBibG9ja1xuICogQHBhcmFtIHswIHwgMX0gW2xvY2FsXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuXHRpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuXHRcdG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG5cdFx0YmxvY2suaShsb2NhbCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuRnJhZ21lbnR9IGJsb2NrXG4gKiBAcGFyYW0gezAgfCAxfSBsb2NhbFxuICogQHBhcmFtIHswIHwgMX0gW2RldGFjaF1cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcblx0aWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcblx0XHRpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSkgcmV0dXJuO1xuXHRcdG91dHJvaW5nLmFkZChibG9jayk7XG5cdFx0b3V0cm9zLmMucHVzaCgoKSA9PiB7XG5cdFx0XHRvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGlmIChkZXRhY2gpIGJsb2NrLmQoMSk7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YmxvY2subyhsb2NhbCk7XG5cdH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcblx0XHRjYWxsYmFjaygpO1xuXHR9XG59XG5cbi8qKlxuICogQHR5cGUge2ltcG9ydCgnLi4vdHJhbnNpdGlvbi9wdWJsaWMuanMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25Gbn0gZm5cbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHt7IHN0YXJ0KCk6IHZvaWQ7IGludmFsaWRhdGUoKTogdm9pZDsgZW5kKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7VHJhbnNpdGlvbk9wdGlvbnN9ICovXG5cdGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2luJyB9O1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcblx0bGV0IHJ1bm5pbmcgPSBmYWxzZTtcblx0bGV0IGFuaW1hdGlvbl9uYW1lO1xuXHRsZXQgdGFzaztcblx0bGV0IHVpZCA9IDA7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBjbGVhbnVwKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBnbygpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cdFx0aWYgKGNzcykgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG5cdFx0dGljaygwLCAxKTtcblx0XHRjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcblx0XHRjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcblx0XHRpZiAodGFzaykgdGFzay5hYm9ydCgpO1xuXHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuXHRcdHRhc2sgPSBsb29wKChub3cpID0+IHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChub3cgPj0gZW5kX3RpbWUpIHtcblx0XHRcdFx0XHR0aWNrKDEsIDApO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcblx0XHRcdFx0XHRjbGVhbnVwKCk7XG5cdFx0XHRcdFx0cmV0dXJuIChydW5uaW5nID0gZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuXHRcdFx0XHRcdHRpY2sodCwgMSAtIHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcnVubmluZztcblx0XHR9KTtcblx0fVxuXHRsZXQgc3RhcnRlZCA9IGZhbHNlO1xuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKHN0YXJ0ZWQpIHJldHVybjtcblx0XHRcdHN0YXJ0ZWQgPSB0cnVlO1xuXHRcdFx0ZGVsZXRlX3J1bGUobm9kZSk7XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuXHRcdFx0XHRjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG5cdFx0XHRcdHdhaXQoKS50aGVuKGdvKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0c3RhcnRlZCA9IGZhbHNlO1xuXHRcdH0sXG5cdFx0ZW5kKCkge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7eyBlbmQocmVzZXQ6IGFueSk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuXHQvKiogQHR5cGUge1RyYW5zaXRpb25PcHRpb25zfSAqL1xuXHRjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdvdXQnIH07XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuXHRsZXQgcnVubmluZyA9IHRydWU7XG5cdGxldCBhbmltYXRpb25fbmFtZTtcblx0Y29uc3QgZ3JvdXAgPSBvdXRyb3M7XG5cdGdyb3VwLnIgKz0gMTtcblx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xuXHRsZXQgb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBnbygpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cblx0XHRpZiAoY3NzKSBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuXG5cdFx0Y29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG5cdFx0Y29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG5cdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKCdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0b3JpZ2luYWxfaW5lcnRfdmFsdWUgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAobm9kZSkuaW5lcnQ7XG5cdFx0XHRub2RlLmluZXJ0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRsb29wKChub3cpID0+IHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChub3cgPj0gZW5kX3RpbWUpIHtcblx0XHRcdFx0XHR0aWNrKDAsIDEpO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG5cdFx0XHRcdFx0aWYgKCEtLWdyb3VwLnIpIHtcblx0XHRcdFx0XHRcdC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG5cdFx0XHRcdFx0XHQvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcblx0XHRcdFx0XHRcdHJ1bl9hbGwoZ3JvdXAuYyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0XHR0aWNrKDEgLSB0LCB0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ1bm5pbmc7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuXHRcdHdhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcblx0XHRcdGdvKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Z28oKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZW5kKHJlc2V0KSB7XG5cdFx0XHRpZiAocmVzZXQgJiYgJ2luZXJ0JyBpbiBub2RlKSB7XG5cdFx0XHRcdG5vZGUuaW5lcnQgPSBvcmlnaW5hbF9pbmVydF92YWx1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuXHRcdFx0XHRjb25maWcudGljaygxLCAwKTtcblx0XHRcdH1cblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGludHJvXG4gKiBAcmV0dXJucyB7eyBydW4oYjogMCB8IDEpOiB2b2lkOyBlbmQoKTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtUcmFuc2l0aW9uT3B0aW9uc30gKi9cblx0Y29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnYm90aCcgfTtcblx0bGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG5cdGxldCB0ID0gaW50cm8gPyAwIDogMTtcblxuXHQvKipcblx0ICogQHR5cGUge1Byb2dyYW0gfCBudWxsfSAqL1xuXHRsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BlbmRpbmdQcm9ncmFtIHwgbnVsbH0gKi9cblx0bGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xuXHRsZXQgb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG5cdFx0aWYgKGFuaW1hdGlvbl9uYW1lKSBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQZW5kaW5nUHJvZ3JhbX0gcHJvZ3JhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG5cdFx0Y29uc3QgZCA9IC8qKiBAdHlwZSB7UHJvZ3JhbVsnZCddfSAqLyAocHJvZ3JhbS5iIC0gdCk7XG5cdFx0ZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IHQsXG5cdFx0XHRiOiBwcm9ncmFtLmIsXG5cdFx0XHRkLFxuXHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRzdGFydDogcHJvZ3JhbS5zdGFydCxcblx0XHRcdGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuXHRcdFx0Z3JvdXA6IHByb2dyYW0uZ3JvdXBcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SU5UUk8gfCBPVVRST30gYlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIGdvKGIpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7UGVuZGluZ1Byb2dyYW19ICovXG5cdFx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRcdHN0YXJ0OiBub3coKSArIGRlbGF5LFxuXHRcdFx0YlxuXHRcdH07XG5cblx0XHRpZiAoIWIpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG5cdFx0XHRwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuXHRcdFx0b3V0cm9zLnIgKz0gMTtcblx0XHR9XG5cblx0XHRpZiAoJ2luZXJ0JyBpbiBub2RlKSB7XG5cdFx0XHRpZiAoYikge1xuXHRcdFx0XHRpZiAob3JpZ2luYWxfaW5lcnRfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdC8vIGFib3J0ZWQvcmV2ZXJzZWQgb3V0cm8gXHUyMDE0IHJlc3RvcmUgcHJldmlvdXMgaW5lcnQgdmFsdWVcblx0XHRcdFx0XHRub2RlLmluZXJ0ID0gb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9yaWdpbmFsX2luZXJ0X3ZhbHVlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLmluZXJ0O1xuXHRcdFx0XHRub2RlLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuXHRcdFx0cGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuXHRcdFx0Ly8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0XHRpZiAoY3NzKSB7XG5cdFx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0XHRhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGIpIHRpY2soMCwgMSk7XG5cdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuXHRcdFx0bG9vcCgobm93KSA9PiB7XG5cdFx0XHRcdGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdFx0XHRwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcblx0XHRcdFx0XHRpZiAoY3NzKSB7XG5cdFx0XHRcdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUoXG5cdFx0XHRcdFx0XHRcdG5vZGUsXG5cdFx0XHRcdFx0XHRcdHQsXG5cdFx0XHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbS5iLFxuXHRcdFx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdGVhc2luZyxcblx0XHRcdFx0XHRcdFx0Y29uZmlnLmNzc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuXHRcdFx0XHRcdGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHRcdFx0dGljaygodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iKSwgMSAtIHQpO1xuXHRcdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcblx0XHRcdFx0XHRcdGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHdlJ3JlIGRvbmVcblx0XHRcdFx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaW50cm8gXHUyMDE0IHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3V0cm8gXHUyMDE0IG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKSBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG5cdFx0XHRcdFx0XHR0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcblx0XHRcdFx0XHRcdHRpY2sodCwgMSAtIHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtcblx0XHRydW4oYikge1xuXHRcdFx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHRcdFx0d2FpdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9wdHMgPSB7IGRpcmVjdGlvbjogYiA/ICdpbicgOiAnb3V0JyB9O1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRjb25maWcgPSBjb25maWcob3B0cyk7XG5cdFx0XHRcdFx0Z28oYik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z28oYik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbmQoKSB7XG5cdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdFx0fVxuXHR9O1xufVxuXG4vKiogQHR5cGVkZWYgezF9IElOVFJPICovXG4vKiogQHR5cGVkZWYgezB9IE9VVFJPICovXG4vKiogQHR5cGVkZWYge3sgZGlyZWN0aW9uOiAnaW4nIHwgJ291dCcgfCAnYm90aCcgfX0gVHJhbnNpdGlvbk9wdGlvbnMgKi9cbi8qKiBAdHlwZWRlZiB7KG5vZGU6IEVsZW1lbnQsIHBhcmFtczogYW55LCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucykgPT4gaW1wb3J0KCcuLi90cmFuc2l0aW9uL3B1YmxpYy5qcycpLlRyYW5zaXRpb25Db25maWd9IFRyYW5zaXRpb25GbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE91dHJvXG4gKiBAcHJvcGVydHkge251bWJlcn0gclxuICogQHByb3BlcnR5IHtGdW5jdGlvbltdfSBjXG4gKiBAcHJvcGVydHkge09iamVjdH0gcFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUGVuZGluZ1Byb2dyYW1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFxuICogQHByb3BlcnR5IHtJTlRST3xPVVRST30gYlxuICogQHByb3BlcnR5IHtPdXRyb30gW2dyb3VwXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFcbiAqIEBwcm9wZXJ0eSB7SU5UUk98T1VUUk99IGJcbiAqIEBwcm9wZXJ0eSB7MXwtMX0gZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmRcbiAqIEBwcm9wZXJ0eSB7T3V0cm99IFtncm91cF1cbiAqL1xuIiwgImltcG9ydCB7IHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0IH0gZnJvbSAnLi90cmFuc2l0aW9ucy5qcyc7XG5pbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIGdlbmVyYWwgZWFjaCBmdW5jdGlvbnM6XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVfYXJyYXlfbGlrZShhcnJheV9saWtlX29yX2l0ZXJhdG9yKSB7XG5cdHJldHVybiBhcnJheV9saWtlX29yX2l0ZXJhdG9yPy5sZW5ndGggIT09IHVuZGVmaW5lZFxuXHRcdD8gYXJyYXlfbGlrZV9vcl9pdGVyYXRvclxuXHRcdDogQXJyYXkuZnJvbShhcnJheV9saWtlX29yX2l0ZXJhdG9yKTtcbn1cblxuLy8ga2V5ZWQgZWFjaCBmdW5jdGlvbnM6XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHR0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuXHRcdGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcblx0fSk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuLyoqIEByZXR1cm5zIHthbnlbXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChcblx0b2xkX2Jsb2Nrcyxcblx0ZGlydHksXG5cdGdldF9rZXksXG5cdGR5bmFtaWMsXG5cdGN0eCxcblx0bGlzdCxcblx0bG9va3VwLFxuXHRub2RlLFxuXHRkZXN0cm95LFxuXHRjcmVhdGVfZWFjaF9ibG9jayxcblx0bmV4dCxcblx0Z2V0X2NvbnRleHRcbikge1xuXHRsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuXHRsZXQgbiA9IGxpc3QubGVuZ3RoO1xuXHRsZXQgaSA9IG87XG5cdGNvbnN0IG9sZF9pbmRleGVzID0ge307XG5cdHdoaWxlIChpLS0pIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG5cdGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcblx0Y29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB1cGRhdGVzID0gW107XG5cdGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0Y29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHRjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG5cdFx0bGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0Ly8gZGVmZXIgdXBkYXRlcyB1bnRpbCBhbGwgdGhlIERPTSBzaHVmZmxpbmcgaXMgZG9uZVxuXHRcdFx0dXBkYXRlcy5wdXNoKCgpID0+IGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSkpO1xuXHRcdH1cblx0XHRuZXdfbG9va3VwLnNldChrZXksIChuZXdfYmxvY2tzW2ldID0gYmxvY2spKTtcblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcblx0fVxuXHRjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuXHQvKiogQHJldHVybnMge3ZvaWR9ICovXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuXHRcdGJsb2NrLm0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHRjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHRjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHRjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHRjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fSBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH0gZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fSBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcblx0XHRcdG8tLTtcblx0XHR9IGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG5cdFx0XHRkaWRfbW92ZS5hZGQobmV3X2tleSk7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKG8tLSkge1xuXHRcdGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cdHJ1bl9hbGwodXBkYXRlcyk7XG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcblx0Y29uc3Qga2V5cyA9IG5ldyBNYXAoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcblx0XHRpZiAoa2V5cy5oYXMoa2V5KSkge1xuXHRcdFx0bGV0IHZhbHVlID0gJyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IGB3aXRoIHZhbHVlICcke1N0cmluZyhrZXkpfScgYDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gY2FuJ3Qgc3RyaW5naWZ5XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdGBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2g6IEtleXMgYXQgaW5kZXggJHtrZXlzLmdldChcblx0XHRcdFx0XHRrZXlcblx0XHRcdFx0KX0gYW5kICR7aX0gJHt2YWx1ZX1hcmUgZHVwbGljYXRlc2Bcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGtleXMuc2V0KGtleSwgaSk7XG5cdH1cbn1cbiIsICIvKiogQHJldHVybnMge3t9fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuXHRjb25zdCB1cGRhdGUgPSB7fTtcblx0Y29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcblx0Y29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuXHRsZXQgaSA9IGxldmVscy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHRjb25zdCBvID0gbGV2ZWxzW2ldO1xuXHRcdGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG5cdFx0XHRcdGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gbykge1xuXHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuXHRcdGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG5cdHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cbiIsICJjb25zdCBfYm9vbGVhbl9hdHRyaWJ1dGVzID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKFtcblx0J2FsbG93ZnVsbHNjcmVlbicsXG5cdCdhbGxvd3BheW1lbnRyZXF1ZXN0Jyxcblx0J2FzeW5jJyxcblx0J2F1dG9mb2N1cycsXG5cdCdhdXRvcGxheScsXG5cdCdjaGVja2VkJyxcblx0J2NvbnRyb2xzJyxcblx0J2RlZmF1bHQnLFxuXHQnZGVmZXInLFxuXHQnZGlzYWJsZWQnLFxuXHQnZm9ybW5vdmFsaWRhdGUnLFxuXHQnaGlkZGVuJyxcblx0J2luZXJ0Jyxcblx0J2lzbWFwJyxcblx0J2xvb3AnLFxuXHQnbXVsdGlwbGUnLFxuXHQnbXV0ZWQnLFxuXHQnbm9tb2R1bGUnLFxuXHQnbm92YWxpZGF0ZScsXG5cdCdvcGVuJyxcblx0J3BsYXlzaW5saW5lJyxcblx0J3JlYWRvbmx5Jyxcblx0J3JlcXVpcmVkJyxcblx0J3JldmVyc2VkJyxcblx0J3NlbGVjdGVkJ1xuXSk7XG5cbi8qKlxuICogTGlzdCBvZiBIVE1MIGJvb2xlYW4gYXR0cmlidXRlcyAoZS5nLiBgPGlucHV0IGRpc2FibGVkPmApLlxuICogU291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbiAqXG4gKiBAdHlwZSB7U2V0PHN0cmluZz59XG4gKi9cbmV4cG9ydCBjb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFsuLi5fYm9vbGVhbl9hdHRyaWJ1dGVzXSk7XG5cbi8qKiBAdHlwZWRlZiB7dHlwZW9mIF9ib29sZWFuX2F0dHJpYnV0ZXNbbnVtYmVyXX0gQm9vbGVhbkF0dHJpYnV0ZXMgKi9cbiIsICJpbXBvcnQge1xuXHRhZGRfcmVuZGVyX2NhbGxiYWNrLFxuXHRmbHVzaCxcblx0Zmx1c2hfcmVuZGVyX2NhbGxiYWNrcyxcblx0c2NoZWR1bGVfdXBkYXRlLFxuXHRkaXJ0eV9jb21wb25lbnRzXG59IGZyb20gJy4vc2NoZWR1bGVyLmpzJztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICcuL2xpZmVjeWNsZS5qcyc7XG5pbXBvcnQgeyBibGFua19vYmplY3QsIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgcnVuLCBydW5fYWxsLCBub29wIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRjaGlsZHJlbixcblx0ZGV0YWNoLFxuXHRzdGFydF9oeWRyYXRpbmcsXG5cdGVuZF9oeWRyYXRpbmcsXG5cdGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMsXG5cdGluc2VydCxcblx0ZWxlbWVudCxcblx0YXR0clxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uX2luIH0gZnJvbSAnLi90cmFuc2l0aW9ucy5qcyc7XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcblx0Y29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG5cdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuXHRibG9jayAmJiBibG9jay5jKCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuXHRibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuXHRjb25zdCB7IGZyYWdtZW50LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcblx0ZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG5cdC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcblx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG5cdFx0Y29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQub25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHlcblx0XHQvLyBpdCB3aWxsIHVwZGF0ZSB0aGUgYCQkLm9uX2Rlc3Ryb3lgIHJlZmVyZW5jZSB0byBgbnVsbGAuXG5cdFx0Ly8gdGhlIGRlc3RydWN0dXJlZCBvbl9kZXN0cm95IG1heSBzdGlsbCByZWZlcmVuY2UgdG8gdGhlIG9sZCBhcnJheVxuXHRcdGlmIChjb21wb25lbnQuJCQub25fZGVzdHJveSkge1xuXHRcdFx0Y29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuXHRcdFx0Ly8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuXHRcdFx0cnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG5cdFx0fVxuXHRcdGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuXHR9KTtcblx0YWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuXHRjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcblx0aWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG5cdFx0Zmx1c2hfcmVuZGVyX2NhbGxiYWNrcygkJC5hZnRlcl91cGRhdGUpO1xuXHRcdHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG5cdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuXHRcdC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cblx0XHQvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG5cdFx0JCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcblx0XHQkJC5jdHggPSBbXTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuXHRpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuXHRcdGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXHRcdHNjaGVkdWxlX3VwZGF0ZSgpO1xuXHRcdGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuXHR9XG5cdGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9IDEgPDwgaSAlIDMxO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdChcblx0Y29tcG9uZW50LFxuXHRvcHRpb25zLFxuXHRpbnN0YW5jZSxcblx0Y3JlYXRlX2ZyYWdtZW50LFxuXHRub3RfZXF1YWwsXG5cdHByb3BzLFxuXHRhcHBlbmRfc3R5bGVzLFxuXHRkaXJ0eSA9IFstMV1cbikge1xuXHRjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuVCQkfSAqL1xuXHRjb25zdCAkJCA9IChjb21wb25lbnQuJCQgPSB7XG5cdFx0ZnJhZ21lbnQ6IG51bGwsXG5cdFx0Y3R4OiBbXSxcblx0XHQvLyBzdGF0ZVxuXHRcdHByb3BzLFxuXHRcdHVwZGF0ZTogbm9vcCxcblx0XHRub3RfZXF1YWwsXG5cdFx0Ym91bmQ6IGJsYW5rX29iamVjdCgpLFxuXHRcdC8vIGxpZmVjeWNsZVxuXHRcdG9uX21vdW50OiBbXSxcblx0XHRvbl9kZXN0cm95OiBbXSxcblx0XHRvbl9kaXNjb25uZWN0OiBbXSxcblx0XHRiZWZvcmVfdXBkYXRlOiBbXSxcblx0XHRhZnRlcl91cGRhdGU6IFtdLFxuXHRcdGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcblx0XHQvLyBldmVyeXRoaW5nIGVsc2Vcblx0XHRjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuXHRcdGRpcnR5LFxuXHRcdHNraXBfYm91bmQ6IGZhbHNlLFxuXHRcdHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuXHR9KTtcblx0YXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuXHRsZXQgcmVhZHkgPSBmYWxzZTtcblx0JCQuY3R4ID0gaW5zdGFuY2Vcblx0XHQ/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcblx0XHRcdFx0aWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAoJCQuY3R4W2ldID0gdmFsdWUpKSkge1xuXHRcdFx0XHRcdGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSkgJCQuYm91bmRbaV0odmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZWFkeSkgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0ICB9KVxuXHRcdDogW107XG5cdCQkLnVwZGF0ZSgpO1xuXHRyZWFkeSA9IHRydWU7XG5cdHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG5cdC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuXHQkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcblx0XHRcdHN0YXJ0X2h5ZHJhdGluZygpO1xuXHRcdFx0Y29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuXHRcdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG5cdFx0XHRub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG5cdFx0XHQkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmludHJvKSB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG5cdFx0bW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yKTtcblx0XHRlbmRfaHlkcmF0aW5nKCk7XG5cdFx0Zmx1c2goKTtcblx0fVxuXHRzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBsZXQgU3ZlbHRlRWxlbWVudDtcblxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdFx0LyoqIFRoZSBTdmVsdGUgY29tcG9uZW50IGNvbnN0cnVjdG9yICovXG5cdFx0JCRjdG9yO1xuXHRcdC8qKiBTbG90cyAqL1xuXHRcdCQkcztcblx0XHQvKiogVGhlIFN2ZWx0ZSBjb21wb25lbnQgaW5zdGFuY2UgKi9cblx0XHQkJGM7XG5cdFx0LyoqIFdoZXRoZXIgb3Igbm90IHRoZSBjdXN0b20gZWxlbWVudCBpcyBjb25uZWN0ZWQgKi9cblx0XHQkJGNuID0gZmFsc2U7XG5cdFx0LyoqIENvbXBvbmVudCBwcm9wcyBkYXRhICovXG5cdFx0JCRkID0ge307XG5cdFx0LyoqIGB0cnVlYCBpZiBjdXJyZW50bHkgaW4gdGhlIHByb2Nlc3Mgb2YgcmVmbGVjdGluZyBjb21wb25lbnQgcHJvcHMgYmFjayB0byBhdHRyaWJ1dGVzICovXG5cdFx0JCRyID0gZmFsc2U7XG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBQcm9wcyBkZWZpbml0aW9uIChuYW1lLCByZWZsZWN0ZWQsIHR5cGUgZXRjKSAqL1xuXHRcdCQkcF9kID0ge307XG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbltdPn0gRXZlbnQgbGlzdGVuZXJzICovXG5cdFx0JCRsID0ge307XG5cdFx0LyoqIEB0eXBlIHtNYXA8RnVuY3Rpb24sIEZ1bmN0aW9uPn0gRXZlbnQgbGlzdGVuZXIgdW5zdWJzY3JpYmUgZnVuY3Rpb25zICovXG5cdFx0JCRsX3UgPSBuZXcgTWFwKCk7XG5cblx0XHRjb25zdHJ1Y3RvcigkJGNvbXBvbmVudEN0b3IsICQkc2xvdHMsIHVzZV9zaGFkb3dfZG9tKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4kJGN0b3IgPSAkJGNvbXBvbmVudEN0b3I7XG5cdFx0XHR0aGlzLiQkcyA9ICQkc2xvdHM7XG5cdFx0XHRpZiAodXNlX3NoYWRvd19kb20pIHtcblx0XHRcdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuXHRcdFx0Ly8gV2UgY2FuJ3QgZGV0ZXJtaW5lIHVwZnJvbnQgaWYgdGhlIGV2ZW50IGlzIGEgY3VzdG9tIGV2ZW50IG9yIG5vdCwgc28gd2UgaGF2ZSB0b1xuXHRcdFx0Ly8gbGlzdGVuIHRvIGJvdGguIElmIHNvbWVvbmUgdXNlcyBhIGN1c3RvbSBldmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYSByZWd1bGFyXG5cdFx0XHQvLyBicm93c2VyIGV2ZW50LCB0aGlzIGZpcmVzIHR3aWNlIC0gd2UgY2FuJ3QgYXZvaWQgdGhhdC5cblx0XHRcdHRoaXMuJCRsW3R5cGVdID0gdGhpcy4kJGxbdHlwZV0gfHwgW107XG5cdFx0XHR0aGlzLiQkbFt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0XHRcdGlmICh0aGlzLiQkYykge1xuXHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRjLiRvbih0eXBlLCBsaXN0ZW5lcik7XG5cdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHR9XG5cdFx0XHRzdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRyZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG5cdFx0XHRzdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblx0XHRcdGlmICh0aGlzLiQkYykge1xuXHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRsX3UuZ2V0KGxpc3RlbmVyKTtcblx0XHRcdFx0aWYgKHVuc3ViKSB7XG5cdFx0XHRcdFx0dW5zdWIoKTtcblx0XHRcdFx0XHR0aGlzLiQkbF91LmRlbGV0ZShsaXN0ZW5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuJCRjbiA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuJCRjKSB7XG5cdFx0XHRcdC8vIFdlIHdhaXQgb25lIHRpY2sgdG8gbGV0IHBvc3NpYmxlIGNoaWxkIHNsb3QgZWxlbWVudHMgYmUgY3JlYXRlZC9tb3VudGVkXG5cdFx0XHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiAoIXRoaXMuJCRjbikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBjcmVhdGVfc2xvdChuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRcdGxldCBub2RlO1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2JqID0ge1xuXHRcdFx0XHRcdFx0XHRjOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW1lbnQoJ3Nsb3QnKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRyKG5vZGUsICduYW1lJywgbmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHRcdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG5cdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFthbmNob3JdXG5cdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRtOiBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHRcdFx0XHRcdFx0XHRcdGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGQ6IGZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRldGFjaGluZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGV0YWNoKG5vZGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCAkJHNsb3RzID0ge307XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nX3Nsb3RzID0gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyh0aGlzKTtcblx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIHRoaXMuJCRzKSB7XG5cdFx0XHRcdFx0aWYgKG5hbWUgaW4gZXhpc3Rpbmdfc2xvdHMpIHtcblx0XHRcdFx0XHRcdCQkc2xvdHNbbmFtZV0gPSBbY3JlYXRlX3Nsb3QobmFtZSldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiB0aGlzLmF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHQvLyB0aGlzLiQkZGF0YSB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhpcy5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuJCRnX3AoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0XHRcdGlmICghKG5hbWUgaW4gdGhpcy4kJGQpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiQkZFtuYW1lXSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShuYW1lLCBhdHRyaWJ1dGUudmFsdWUsIHRoaXMuJCRwX2QsICd0b1Byb3AnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kJGMgPSBuZXcgdGhpcy4kJGN0b3Ioe1xuXHRcdFx0XHRcdHRhcmdldDogdGhpcy5zaGFkb3dSb290IHx8IHRoaXMsXG5cdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuJCRkLFxuXHRcdFx0XHRcdFx0JCRzbG90cyxcblx0XHRcdFx0XHRcdCQkc2NvcGU6IHtcblx0XHRcdFx0XHRcdFx0Y3R4OiBbXVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVmbGVjdCBjb21wb25lbnQgcHJvcHMgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRjb25zdCByZWZsZWN0X2F0dHJpYnV0ZXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kJHIgPSB0cnVlO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCRwX2QpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0gPSB0aGlzLiQkYy4kJC5jdHhbdGhpcy4kJGMuJCQucHJvcHNba2V5XV07XG5cdFx0XHRcdFx0XHRpZiAodGhpcy4kJHBfZFtrZXldLnJlZmxlY3QpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlX3ZhbHVlID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKFxuXHRcdFx0XHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCRwX2QsXG5cdFx0XHRcdFx0XHRcdFx0J3RvQXR0cmlidXRlJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRpZiAoYXR0cmlidXRlX3ZhbHVlID09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgfHwga2V5LCBhdHRyaWJ1dGVfdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJCRyID0gZmFsc2U7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuJCRjLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKHJlZmxlY3RfYXR0cmlidXRlcyk7XG5cdFx0XHRcdHJlZmxlY3RfYXR0cmlidXRlcygpOyAvLyBvbmNlIGluaXRpYWxseSBiZWNhdXNlIGFmdGVyX3VwZGF0ZSBpcyBhZGRlZCB0b28gbGF0ZSBmb3IgZmlyc3QgcmVuZGVyXG5cblx0XHRcdFx0Zm9yIChjb25zdCB0eXBlIGluIHRoaXMuJCRsKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLiQkbFt0eXBlXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkYy4kb24odHlwZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy4kJGxfdS5zZXQobGlzdGVuZXIsIHVuc3ViKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kJGwgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBXZSBkb24ndCBuZWVkIHRoaXMgd2hlbiB3b3JraW5nIHdpdGhpbiBTdmVsdGUgY29kZSwgYnV0IGZvciBjb21wYXRpYmlsaXR5IG9mIHBlb3BsZSB1c2luZyB0aGlzIG91dHNpZGUgb2YgU3ZlbHRlXG5cdFx0Ly8gYW5kIHNldHRpbmcgYXR0cmlidXRlcyB0aHJvdWdoIHNldEF0dHJpYnV0ZSBldGMsIHRoaXMgaXMgaGVscGZ1bFxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy4kJHIpIHJldHVybjtcblx0XHRcdGF0dHIgPSB0aGlzLiQkZ19wKGF0dHIpO1xuXHRcdFx0dGhpcy4kJGRbYXR0cl0gPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUoYXR0ciwgbmV3VmFsdWUsIHRoaXMuJCRwX2QsICd0b1Byb3AnKTtcblx0XHRcdHRoaXMuJCRjPy4kc2V0KHsgW2F0dHJdOiB0aGlzLiQkZFthdHRyXSB9KTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuJCRjbiA9IGZhbHNlO1xuXHRcdFx0Ly8gSW4gYSBtaWNyb3Rhc2ssIGJlY2F1c2UgdGhpcyBjb3VsZCBiZSBhIG1vdmUgd2l0aGluIHRoZSBET01cblx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuJCRjbikge1xuXHRcdFx0XHRcdHRoaXMuJCRjLiRkZXN0cm95KCk7XG5cdFx0XHRcdFx0dGhpcy4kJGMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCQkZ19wKGF0dHJpYnV0ZV9uYW1lKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLiQkcF9kKS5maW5kKFxuXHRcdFx0XHRcdChrZXkpID0+XG5cdFx0XHRcdFx0XHR0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlID09PSBhdHRyaWJ1dGVfbmFtZSB8fFxuXHRcdFx0XHRcdFx0KCF0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSBhdHRyaWJ1dGVfbmFtZSlcblx0XHRcdFx0KSB8fCBhdHRyaWJ1dGVfbmFtZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBwcm9wc19kZWZpbml0aW9uXG4gKiBAcGFyYW0geyd0b0F0dHJpYnV0ZScgfCAndG9Qcm9wJ30gW3RyYW5zZm9ybV1cbiAqL1xuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKHByb3AsIHZhbHVlLCBwcm9wc19kZWZpbml0aW9uLCB0cmFuc2Zvcm0pIHtcblx0Y29uc3QgdHlwZSA9IHByb3BzX2RlZmluaXRpb25bcHJvcF0/LnR5cGU7XG5cdHZhbHVlID0gdHlwZSA9PT0gJ0Jvb2xlYW4nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nID8gdmFsdWUgIT0gbnVsbCA6IHZhbHVlO1xuXHRpZiAoIXRyYW5zZm9ybSB8fCAhcHJvcHNfZGVmaW5pdGlvbltwcm9wXSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fSBlbHNlIGlmICh0cmFuc2Zvcm0gPT09ICd0b0F0dHJpYnV0ZScpIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdGNhc2UgJ0Jvb2xlYW4nOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG5cdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgJiYgSlNPTi5wYXJzZSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlOyAvLyBjb252ZXJzaW9uIGFscmVhZHkgaGFuZGxlZCBhYm92ZVxuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICE9IG51bGwgPyArdmFsdWUgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqXG4gKiBUdXJuIGEgU3ZlbHRlIGNvbXBvbmVudCBpbnRvIGEgY3VzdG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5Db21wb25lbnRUeXBlfSBDb21wb25lbnQgIEEgU3ZlbHRlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBwcm9wc19kZWZpbml0aW9uICBUaGUgcHJvcHMgdG8gb2JzZXJ2ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2xvdHMgIFRoZSBzbG90cyB0byBjcmVhdGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFjY2Vzc29ycyAgT3RoZXIgYWNjZXNzb3JzIGJlc2lkZXMgdGhlIG9uZXMgZm9yIHByb3BzIHRoZSBjb21wb25lbnQgaGFzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZV9zaGFkb3dfZG9tICBXaGV0aGVyIHRvIHVzZSBzaGFkb3cgRE9NXG4gKiBAcGFyYW0geyhjZTogbmV3ICgpID0+IEhUTUxFbGVtZW50KSA9PiBuZXcgKCkgPT4gSFRNTEVsZW1lbnR9IFtleHRlbmRdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfY3VzdG9tX2VsZW1lbnQoXG5cdENvbXBvbmVudCxcblx0cHJvcHNfZGVmaW5pdGlvbixcblx0c2xvdHMsXG5cdGFjY2Vzc29ycyxcblx0dXNlX3NoYWRvd19kb20sXG5cdGV4dGVuZFxuKSB7XG5cdGxldCBDbGFzcyA9IGNsYXNzIGV4dGVuZHMgU3ZlbHRlRWxlbWVudCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcihDb21wb25lbnQsIHNsb3RzLCB1c2Vfc2hhZG93X2RvbSk7XG5cdFx0XHR0aGlzLiQkcF9kID0gcHJvcHNfZGVmaW5pdGlvbjtcblx0XHR9XG5cdFx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMocHJvcHNfZGVmaW5pdGlvbikubWFwKChrZXkpID0+XG5cdFx0XHRcdChwcm9wc19kZWZpbml0aW9uW2tleV0uYXR0cmlidXRlIHx8IGtleSkudG9Mb3dlckNhc2UoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdE9iamVjdC5rZXlzKHByb3BzX2RlZmluaXRpb24pLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBwcm9wLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkYyAmJiBwcm9wIGluIHRoaXMuJCRjID8gdGhpcy4kJGNbcHJvcF0gOiB0aGlzLiQkZFtwcm9wXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUocHJvcCwgdmFsdWUsIHByb3BzX2RlZmluaXRpb24pO1xuXHRcdFx0XHR0aGlzLiQkZFtwcm9wXSA9IHZhbHVlO1xuXHRcdFx0XHR0aGlzLiQkYz8uJHNldCh7IFtwcm9wXTogdmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRhY2Nlc3NvcnMuZm9yRWFjaCgoYWNjZXNzb3IpID0+IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBhY2Nlc3Nvciwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGM/LlthY2Nlc3Nvcl07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRpZiAoZXh0ZW5kKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciAtIGFzc2lnbmluZyBoZXJlIGlzIGZpbmVcblx0XHRDbGFzcyA9IGV4dGVuZChDbGFzcyk7XG5cdH1cblx0Q29tcG9uZW50LmVsZW1lbnQgPSAvKiogQHR5cGUge2FueX0gKi8gKENsYXNzKTtcblx0cmV0dXJuIENsYXNzO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICpcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW1Byb3BzPWFueV1cbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW0V2ZW50cz1hbnldXG4gKi9cbmV4cG9ydCBjbGFzcyBTdmVsdGVDb21wb25lbnQge1xuXHQvKipcblx0ICogIyMjIFBSSVZBVEUgQVBJXG5cdCAqXG5cdCAqIERvIG5vdCB1c2UsIG1heSBjaGFuZ2UgYXQgYW55IHRpbWVcblx0ICpcblx0ICogQHR5cGUge2FueX1cblx0ICovXG5cdCQkID0gdW5kZWZpbmVkO1xuXHQvKipcblx0ICogIyMjIFBSSVZBVEUgQVBJXG5cdCAqXG5cdCAqIERvIG5vdCB1c2UsIG1heSBjaGFuZ2UgYXQgYW55IHRpbWVcblx0ICpcblx0ICogQHR5cGUge2FueX1cblx0ICovXG5cdCQkc2V0ID0gdW5kZWZpbmVkO1xuXG5cdC8qKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0JGRlc3Ryb3koKSB7XG5cdFx0ZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG5cdFx0dGhpcy4kZGVzdHJveSA9IG5vb3A7XG5cdH1cblxuXHQvKipcblx0ICogQHRlbXBsYXRlIHtFeHRyYWN0PGtleW9mIEV2ZW50cywgc3RyaW5nPn0gS1xuXHQgKiBAcGFyYW0ge0t9IHR5cGVcblx0ICogQHBhcmFtIHsoKGU6IEV2ZW50c1tLXSkgPT4gdm9pZCkgfCBudWxsIHwgdW5kZWZpbmVkfSBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cblx0ICovXG5cdCRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdFx0XHRyZXR1cm4gbm9vcDtcblx0XHR9XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gdGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pO1xuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaW5kZXggIT09IC0xKSBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UGFydGlhbDxQcm9wcz59IHByb3BzXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0JHNldChwcm9wcykge1xuXHRcdGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eShwcm9wcykpIHtcblx0XHRcdHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG5cdFx0XHR0aGlzLiQkc2V0KHByb3BzKTtcblx0XHRcdHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJ1dGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtyZWZsZWN0XVxuICogQHByb3BlcnR5IHsnU3RyaW5nJ3wnQm9vbGVhbid8J051bWJlcid8J0FycmF5J3wnT2JqZWN0J30gW3R5cGVdXG4gKi9cbiIsICJpbXBvcnQge1xuXHRydW5fYWxsLFxuXHRzdWJzY3JpYmUsXG5cdG5vb3AsXG5cdHNhZmVfbm90X2VxdWFsLFxuXHRpc19mdW5jdGlvbixcblx0Z2V0X3N0b3JlX3ZhbHVlXG59IGZyb20gJy4uL2ludGVybmFsL2luZGV4LmpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSNyZWFkYWJsZVxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5TdGFydFN0b3BOb3RpZmllcjxUPn0gW3N0YXJ0XVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5SZWFkYWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuXHRyZXR1cm4ge1xuXHRcdHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmVcblx0fTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSN3cml0YWJsZVxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5TdGFydFN0b3BOb3RpZmllcjxUPn0gW3N0YXJ0XVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5Xcml0YWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vcHVibGljLmpzJykuVW5zdWJzY3JpYmVyfSAqL1xuXHRsZXQgc3RvcDtcblx0LyoqIEB0eXBlIHtTZXQ8aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5TdWJzY3JpYmVJbnZhbGlkYXRlVHVwbGU8VD4+fSAqL1xuXHRjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcblx0LyoqIEBwYXJhbSB7VH0gbmV3X3ZhbHVlXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuXHRcdGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuXHRcdFx0dmFsdWUgPSBuZXdfdmFsdWU7XG5cdFx0XHRpZiAoc3RvcCkge1xuXHRcdFx0XHQvLyBzdG9yZSBpcyByZWFkeVxuXHRcdFx0XHRjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuXHRcdFx0XHRcdHN1YnNjcmliZXJbMV0oKTtcblx0XHRcdFx0XHRzdWJzY3JpYmVyX3F1ZXVlLnB1c2goc3Vic2NyaWJlciwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChydW5fcXVldWUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljLmpzJykuVXBkYXRlcjxUPn0gZm5cblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGUoZm4pIHtcblx0XHRzZXQoZm4odmFsdWUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5TdWJzY3JpYmVyPFQ+fSBydW5cblx0ICogQHBhcmFtIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLkludmFsaWRhdG9yPFQ+fSBbaW52YWxpZGF0ZV1cblx0ICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5VbnN1YnNjcmliZXJ9XG5cdCAqL1xuXHRmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL3ByaXZhdGUuanMnKS5TdWJzY3JpYmVJbnZhbGlkYXRlVHVwbGU8VD59ICovXG5cdFx0Y29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuXHRcdHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcblx0XHRpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMSkge1xuXHRcdFx0c3RvcCA9IHN0YXJ0KHNldCwgdXBkYXRlKSB8fCBub29wO1xuXHRcdH1cblx0XHRydW4odmFsdWUpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG5cdFx0XHRpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCAmJiBzdG9wKSB7XG5cdFx0XHRcdHN0b3AoKTtcblx0XHRcdFx0c3RvcCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5cbi8qKlxuICogRGVyaXZlZCB2YWx1ZSBzdG9yZSBieSBzeW5jaHJvbml6aW5nIG9uZSBvciBtb3JlIHJlYWRhYmxlIHN0b3JlcyBhbmRcbiAqIGFwcGx5aW5nIGFuIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIG92ZXIgaXRzIGlucHV0IHZhbHVlcy5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtc3RvcmUjZGVyaXZlZFxuICogQHRlbXBsYXRlIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlN0b3Jlc30gU1xuICogQHRlbXBsYXRlIFRcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtTfSBzdG9yZXMgLSBpbnB1dCBzdG9yZXNcbiAqIEBwYXJhbSB7KHZhbHVlczogaW1wb3J0KCcuL3ByaXZhdGUuanMnKS5TdG9yZXNWYWx1ZXM8Uz4sIHNldDogKHZhbHVlOiBUKSA9PiB2b2lkLCB1cGRhdGU6IChmbjogaW1wb3J0KCcuL3B1YmxpYy5qcycpLlVwZGF0ZXI8VD4pID0+IHZvaWQpID0+IGltcG9ydCgnLi9wdWJsaWMuanMnKS5VbnN1YnNjcmliZXIgfCB2b2lkfSBmbiAtIGZ1bmN0aW9uIGNhbGxiYWNrIHRoYXQgYWdncmVnYXRlcyB0aGUgdmFsdWVzXG4gKiBAcGFyYW0ge1R9IFtpbml0aWFsX3ZhbHVlXSAtIGluaXRpYWwgdmFsdWVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljLmpzJykuUmVhZGFibGU8VD59XG4gKi9cblxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSNkZXJpdmVkXG4gKiBAdGVtcGxhdGUge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuU3RvcmVzfSBTXG4gKiBAdGVtcGxhdGUgVFxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1N9IHN0b3JlcyAtIGlucHV0IHN0b3Jlc1xuICogQHBhcmFtIHsodmFsdWVzOiBpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlN0b3Jlc1ZhbHVlczxTPikgPT4gVH0gZm4gLSBmdW5jdGlvbiBjYWxsYmFjayB0aGF0IGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlc1xuICogQHBhcmFtIHtUfSBbaW5pdGlhbF92YWx1ZV0gLSBpbml0aWFsIHZhbHVlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLlJlYWRhYmxlPFQ+fVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlN0b3Jlc30gU1xuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7U30gc3RvcmVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtUfSBbaW5pdGlhbF92YWx1ZV1cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljLmpzJykuUmVhZGFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcblx0Y29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcblx0LyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vcHVibGljLmpzJykuUmVhZGFibGU8YW55Pj59ICovXG5cdGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZSA/IFtzdG9yZXNdIDogc3RvcmVzO1xuXHRpZiAoIXN0b3Jlc19hcnJheS5ldmVyeShCb29sZWFuKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZGVyaXZlZCgpIGV4cGVjdHMgc3RvcmVzIGFzIGlucHV0LCBnb3QgYSBmYWxzeSB2YWx1ZScpO1xuXHR9XG5cdGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuXHRyZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCwgdXBkYXRlKSA9PiB7XG5cdFx0bGV0IHN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0XHRsZXQgcGVuZGluZyA9IDA7XG5cdFx0bGV0IGNsZWFudXAgPSBub29wO1xuXHRcdGNvbnN0IHN5bmMgPSAoKSA9PiB7XG5cdFx0XHRpZiAocGVuZGluZykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjbGVhbnVwKCk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCwgdXBkYXRlKTtcblx0XHRcdGlmIChhdXRvKSB7XG5cdFx0XHRcdHNldChyZXN1bHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PlxuXHRcdFx0c3Vic2NyaWJlKFxuXHRcdFx0XHRzdG9yZSxcblx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWVzW2ldID0gdmFsdWU7XG5cdFx0XHRcdFx0cGVuZGluZyAmPSB+KDEgPDwgaSk7XG5cdFx0XHRcdFx0aWYgKHN0YXJ0ZWQpIHtcblx0XHRcdFx0XHRcdHN5bmMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRwZW5kaW5nIHw9IDEgPDwgaTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0c3RhcnRlZCA9IHRydWU7XG5cdFx0c3luYygpO1xuXHRcdHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuXHRcdFx0cnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcblx0XHRcdGNsZWFudXAoKTtcblx0XHRcdC8vIFdlIG5lZWQgdG8gc2V0IHRoaXMgdG8gZmFsc2UgYmVjYXVzZSBjYWxsYmFja3MgY2FuIHN0aWxsIGhhcHBlbiBkZXNwaXRlIGhhdmluZyB1bnN1YnNjcmliZWQ6XG5cdFx0XHQvLyBDYWxsYmFja3MgbWlnaHQgYWxyZWFkeSBiZSBwbGFjZWQgaW4gdGhlIHF1ZXVlIHdoaWNoIGRvZXNuJ3Qga25vdyBpdCBzaG91bGQgbm8gbG9uZ2VyXG5cdFx0XHQvLyBpbnZva2UgdGhpcyBkZXJpdmVkIHN0b3JlLlxuXHRcdFx0c3RhcnRlZCA9IGZhbHNlO1xuXHRcdH07XG5cdH0pO1xufVxuXG4vKipcbiAqIFRha2VzIGEgc3RvcmUgYW5kIHJldHVybnMgYSBuZXcgb25lIGRlcml2ZWQgZnJvbSB0aGUgb2xkIG9uZSB0aGF0IGlzIHJlYWRhYmxlLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1zdG9yZSNyZWFkb25seVxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLlJlYWRhYmxlPFQ+fSBzdG9yZSAgLSBzdG9yZSB0byBtYWtlIHJlYWRvbmx5XG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL3B1YmxpYy5qcycpLlJlYWRhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZG9ubHkoc3RvcmUpIHtcblx0cmV0dXJuIHtcblx0XHRzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZS5iaW5kKHN0b3JlKVxuXHR9O1xufVxuXG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH07XG4iLCAiZXhwb3J0IHR5cGUgT3B0aW9uczxSZXN1bHQ+ID0ge1xuICBpc0ltbWVkaWF0ZT86IGJvb2xlYW47XG4gIG1heFdhaXQ/OiBudW1iZXI7XG4gIGNhbGxiYWNrPzogKGRhdGE6IFJlc3VsdCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVib3VuY2VkRnVuY3Rpb248XG4gIEFyZ3MgZXh0ZW5kcyBhbnlbXSxcbiAgRiBleHRlbmRzICguLi5hcmdzOiBBcmdzKSA9PiBhbnlcbj4ge1xuICAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IEFyZ3MpOiBQcm9taXNlPFJldHVyblR5cGU8Rj4+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBEZWJvdW5jZWRQcm9taXNlPEZ1bmN0aW9uUmV0dXJuPiB7XG4gIHJlc29sdmU6IChyZXN1bHQ6IEZ1bmN0aW9uUmV0dXJuKSA9PiB2b2lkO1xuICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxBcmdzIGV4dGVuZHMgYW55W10sIEYgZXh0ZW5kcyAoLi4uYXJnczogQXJncykgPT4gYW55PihcbiAgZnVuYzogRixcbiAgd2FpdE1pbGxpc2Vjb25kcyA9IDUwLFxuICBvcHRpb25zOiBPcHRpb25zPFJldHVyblR5cGU8Rj4+ID0ge31cbik6IHtcbiAgKHRoaXM6IFRoaXNQYXJhbWV0ZXJUeXBlPEY+LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+ICYgQXJncyk6IFByb21pc2U8XG4gICAgUmV0dXJuVHlwZTxGPlxuICA+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59IHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzSW1tZWRpYXRlID0gb3B0aW9ucy5pc0ltbWVkaWF0ZSA/PyBmYWxzZTtcbiAgY29uc3QgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8/IGZhbHNlO1xuICBjb25zdCBtYXhXYWl0ID0gb3B0aW9ucy5tYXhXYWl0O1xuICBsZXQgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGxldCBwcm9taXNlczogRGVib3VuY2VkUHJvbWlzZTxSZXR1cm5UeXBlPEY+PltdID0gW107XG5cbiAgZnVuY3Rpb24gbmV4dEludm9rZVRpbWVvdXQoKSB7XG4gICAgaWYgKG1heFdhaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGltZVNpbmNlTGFzdEludm9jYXRpb24gPSBEYXRlLm5vdygpIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAgIGlmICh0aW1lU2luY2VMYXN0SW52b2NhdGlvbiArIHdhaXRNaWxsaXNlY29uZHMgPj0gbWF4V2FpdCkge1xuICAgICAgICByZXR1cm4gbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3YWl0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgY29uc3QgZGVib3VuY2VkRnVuY3Rpb24gPSBmdW5jdGlvbiAoXG4gICAgdGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sXG4gICAgLi4uYXJnczogUGFyYW1ldGVyczxGPlxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmV0dXJuVHlwZTxGPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW52b2tlRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIWlzSW1tZWRpYXRlKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVzb2x2ZSB9KSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNob3VsZENhbGxOb3cgPSBpc0ltbWVkaWF0ZSAmJiB0aW1lb3V0SWQgPT09IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfVxuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGludm9rZUZ1bmN0aW9uLCBuZXh0SW52b2tlVGltZW91dCgpKTtcblxuICAgICAgaWYgKHNob3VsZENhbGxOb3cpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGVib3VuY2VkRnVuY3Rpb24uY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbj86IGFueSkge1xuICAgIGlmICh0aW1lb3V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVqZWN0IH0pID0+IHJlamVjdChyZWFzb24pKTtcbiAgICBwcm9taXNlcyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWRGdW5jdGlvbjtcbn1cbiIsICJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBhcnJheUxpa2VUb0FycmF5LCBfYXJyYXlXaXRoSG9sZXMgYXMgYXJyYXlXaXRoSG9sZXMsIF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZpbmVQcm9wZXJ0eSwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0IGFzIGl0ZXJhYmxlVG9BcnJheUxpbWl0LCBfbm9uSXRlcmFibGVSZXN0IGFzIG5vbkl0ZXJhYmxlUmVzdCwgX29iamVjdFNwcmVhZDIgYXMgb2JqZWN0U3ByZWFkMiwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBhcyBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLCBfc2xpY2VkVG9BcnJheSBhcyBzbGljZWRUb0FycmF5LCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgfTtcbiIsICJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uICh5LCBmKSB7XG4gICAgICByZXR1cm4gZih5KTtcbiAgICB9LCB4KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLmxlbmd0aCA+PSBmbi5sZW5ndGggPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgbmV4dEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgbmV4dEFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJpZWQuYXBwbHkoX3RoaXMsIFtdLmNvbmNhdChhcmdzLCBuZXh0QXJncykpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKS5pbmNsdWRlcygnT2JqZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoYW5nZXMoaW5pdGlhbCwgY2hhbmdlcykge1xuICBpZiAoIWlzT2JqZWN0KGNoYW5nZXMpKSBlcnJvckhhbmRsZXIoJ2NoYW5nZVR5cGUnKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgcmV0dXJuICFoYXNPd25Qcm9wZXJ0eShpbml0aWFsLCBmaWVsZCk7XG4gIH0pKSBlcnJvckhhbmRsZXIoJ2NoYW5nZUZpZWxkJyk7XG4gIHJldHVybiBjaGFuZ2VzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIGVycm9ySGFuZGxlcignc2VsZWN0b3JUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSGFuZGxlcihoYW5kbGVyKSB7XG4gIGlmICghKGlzRnVuY3Rpb24oaGFuZGxlcikgfHwgaXNPYmplY3QoaGFuZGxlcikpKSBlcnJvckhhbmRsZXIoJ2hhbmRsZXJUeXBlJyk7XG4gIGlmIChpc09iamVjdChoYW5kbGVyKSAmJiBPYmplY3QudmFsdWVzKGhhbmRsZXIpLnNvbWUoZnVuY3Rpb24gKF9oYW5kbGVyKSB7XG4gICAgcmV0dXJuICFpc0Z1bmN0aW9uKF9oYW5kbGVyKTtcbiAgfSkpIGVycm9ySGFuZGxlcignaGFuZGxlcnNUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5pdGlhbChpbml0aWFsKSB7XG4gIGlmICghaW5pdGlhbCkgZXJyb3JIYW5kbGVyKCdpbml0aWFsSXNSZXF1aXJlZCcpO1xuICBpZiAoIWlzT2JqZWN0KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxUeXBlJyk7XG4gIGlmIChpc0VtcHR5KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxDb250ZW50Jyk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlcywgdHlwZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlc1t0eXBlXSB8fCBlcnJvck1lc3NhZ2VzW1wiZGVmYXVsdFwiXSk7XG59XG5cbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuICBpbml0aWFsSXNSZXF1aXJlZDogJ2luaXRpYWwgc3RhdGUgaXMgcmVxdWlyZWQnLFxuICBpbml0aWFsVHlwZTogJ2luaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGluaXRpYWxDb250ZW50OiAnaW5pdGlhbCBzdGF0ZSBzaG91bGRuXFwndCBiZSBhbiBlbXB0eSBvYmplY3QnLFxuICBoYW5kbGVyVHlwZTogJ2hhbmRsZXIgc2hvdWxkIGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uJyxcbiAgaGFuZGxlcnNUeXBlOiAnYWxsIGhhbmRsZXJzIHNob3VsZCBiZSBhIGZ1bmN0aW9ucycsXG4gIHNlbGVjdG9yVHlwZTogJ3NlbGVjdG9yIHNob3VsZCBiZSBhIGZ1bmN0aW9uJyxcbiAgY2hhbmdlVHlwZTogJ3Byb3ZpZGVkIHZhbHVlIG9mIGNoYW5nZXMgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGNoYW5nZUZpZWxkOiAnaXQgc2VhbXMgeW91IHdhbnQgdG8gY2hhbmdlIGEgZmllbGQgaW4gdGhlIHN0YXRlIHdoaWNoIGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIFwiaW5pdGlhbFwiIHN0YXRlJyxcbiAgXCJkZWZhdWx0XCI6ICdhbiB1bmtub3duIGVycm9yIGFjY3VyZWQgaW4gYHN0YXRlLWxvY2FsYCBwYWNrYWdlJ1xufTtcbnZhciBlcnJvckhhbmRsZXIgPSBjdXJyeSh0aHJvd0Vycm9yKShlcnJvck1lc3NhZ2VzKTtcbnZhciB2YWxpZGF0b3JzID0ge1xuICBjaGFuZ2VzOiB2YWxpZGF0ZUNoYW5nZXMsXG4gIHNlbGVjdG9yOiB2YWxpZGF0ZVNlbGVjdG9yLFxuICBoYW5kbGVyOiB2YWxpZGF0ZUhhbmRsZXIsXG4gIGluaXRpYWw6IHZhbGlkYXRlSW5pdGlhbFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWwpIHtcbiAgdmFyIGhhbmRsZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YWxpZGF0b3JzLmluaXRpYWwoaW5pdGlhbCk7XG4gIHZhbGlkYXRvcnMuaGFuZGxlcihoYW5kbGVyKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIGN1cnJlbnQ6IGluaXRpYWxcbiAgfTtcbiAgdmFyIGRpZFVwZGF0ZSA9IGN1cnJ5KGRpZFN0YXRlVXBkYXRlKShzdGF0ZSwgaGFuZGxlcik7XG4gIHZhciB1cGRhdGUgPSBjdXJyeSh1cGRhdGVTdGF0ZSkoc3RhdGUpO1xuICB2YXIgdmFsaWRhdGUgPSBjdXJyeSh2YWxpZGF0b3JzLmNoYW5nZXMpKGluaXRpYWwpO1xuICB2YXIgZ2V0Q2hhbmdlcyA9IGN1cnJ5KGV4dHJhY3RDaGFuZ2VzKShzdGF0ZSk7XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIHZhbGlkYXRvcnMuc2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBzZWxlY3RvcihzdGF0ZS5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKGNhdXNlZENoYW5nZXMpIHtcbiAgICBjb21wb3NlKGRpZFVwZGF0ZSwgdXBkYXRlLCB2YWxpZGF0ZSwgZ2V0Q2hhbmdlcykoY2F1c2VkQ2hhbmdlcyk7XG4gIH1cblxuICByZXR1cm4gW2dldFN0YXRlLCBzZXRTdGF0ZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDaGFuZ2VzKHN0YXRlLCBjYXVzZWRDaGFuZ2VzKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGNhdXNlZENoYW5nZXMpID8gY2F1c2VkQ2hhbmdlcyhzdGF0ZS5jdXJyZW50KSA6IGNhdXNlZENoYW5nZXM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlLCBjaGFuZ2VzKSB7XG4gIHN0YXRlLmN1cnJlbnQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3RhdGUuY3VycmVudCksIGNoYW5nZXMpO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxuZnVuY3Rpb24gZGlkU3RhdGVVcGRhdGUoc3RhdGUsIGhhbmRsZXIsIGNoYW5nZXMpIHtcbiAgaXNGdW5jdGlvbihoYW5kbGVyKSA/IGhhbmRsZXIoc3RhdGUuY3VycmVudCkgOiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBfaGFuZGxlciRmaWVsZDtcblxuICAgIHJldHVybiAoX2hhbmRsZXIkZmllbGQgPSBoYW5kbGVyW2ZpZWxkXSkgPT09IG51bGwgfHwgX2hhbmRsZXIkZmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oYW5kbGVyJGZpZWxkLmNhbGwoaGFuZGxlciwgc3RhdGUuY3VycmVudFtmaWVsZF0pO1xuICB9KTtcbiAgcmV0dXJuIGNoYW5nZXM7XG59XG5cbnZhciBpbmRleCA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwgInZhciBjb25maWcgPSB7XG4gIHBhdGhzOiB7XG4gICAgdnM6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC4zNi4xL21pbi92cydcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwgImZ1bmN0aW9uIGN1cnJ5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubGVuZ3RoID49IGZuLmxlbmd0aCA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBuZXh0QXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBuZXh0QXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmllZC5hcHBseShfdGhpcywgW10uY29uY2F0KGFyZ3MsIG5leHRBcmdzKSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3Vycnk7XG4iLCAiZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpLmluY2x1ZGVzKCdPYmplY3QnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCAiaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWxzL2N1cnJ5LmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi91dGlscy9pc09iamVjdC5qcyc7XG5cbi8qKlxuICogdmFsaWRhdGVzIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBhbmQgaW5mb3JtcyBhYm91dCBkZXByZWNhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBcbiAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnIC0gdGhlIHZhbGlkYXRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZykgZXJyb3JIYW5kbGVyKCdjb25maWdJc1JlcXVpcmVkJyk7XG4gIGlmICghaXNPYmplY3QoY29uZmlnKSkgZXJyb3JIYW5kbGVyKCdjb25maWdUeXBlJyk7XG5cbiAgaWYgKGNvbmZpZy51cmxzKSB7XG4gICAgaW5mb3JtQWJvdXREZXByZWNhdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoczoge1xuICAgICAgICB2czogY29uZmlnLnVybHMubW9uYWNvQmFzZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuLyoqXG4gKiBsb2dzIGRlcHJlY2F0aW9uIG1lc3NhZ2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZm9ybUFib3V0RGVwcmVjYXRpb24oKSB7XG4gIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2VzLmRlcHJlY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2VzLCB0eXBlKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2VzW3R5cGVdIHx8IGVycm9yTWVzc2FnZXNbXCJkZWZhdWx0XCJdKTtcbn1cblxudmFyIGVycm9yTWVzc2FnZXMgPSB7XG4gIGNvbmZpZ0lzUmVxdWlyZWQ6ICd0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgcmVxdWlyZWQnLFxuICBjb25maWdUeXBlOiAndGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHNob3VsZCBiZSBhbiBvYmplY3QnLFxuICBcImRlZmF1bHRcIjogJ2FuIHVua25vd24gZXJyb3IgYWNjdXJlZCBpbiBgQG1vbmFjby1lZGl0b3IvbG9hZGVyYCBwYWNrYWdlJyxcbiAgZGVwcmVjYXRpb246IFwiRGVwcmVjYXRpb24gd2FybmluZyFcXG4gICAgWW91IGFyZSB1c2luZyBkZXByZWNhdGVkIHdheSBvZiBjb25maWd1cmF0aW9uLlxcblxcbiAgICBJbnN0ZWFkIG9mIHVzaW5nXFxuICAgICAgbW9uYWNvLmNvbmZpZyh7IHVybHM6IHsgbW9uYWNvQmFzZTogJy4uLicgfSB9KVxcbiAgICB1c2VcXG4gICAgICBtb25hY28uY29uZmlnKHsgcGF0aHM6IHsgdnM6ICcuLi4nIH0gfSlcXG5cXG4gICAgRm9yIG1vcmUgcGxlYXNlIGNoZWNrIHRoZSBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zdXJlbi1hdG95YW4vbW9uYWNvLWxvYWRlciNjb25maWdcXG4gIFwiXG59O1xudmFyIGVycm9ySGFuZGxlciA9IGN1cnJ5KHRocm93RXJyb3IpKGVycm9yTWVzc2FnZXMpO1xudmFyIHZhbGlkYXRvcnMgPSB7XG4gIGNvbmZpZzogdmFsaWRhdGVDb25maWdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRvcnM7XG5leHBvcnQgeyBlcnJvckhhbmRsZXIsIGVycm9yTWVzc2FnZXMgfTtcbiIsICJ2YXIgY29tcG9zZSA9IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZm5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoeSwgZikge1xuICAgICAgcmV0dXJuIGYoeSk7XG4gICAgfSwgeCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlO1xuIiwgImltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcblxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc291cmNlW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIGlmICh0YXJnZXRba2V5XSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHNvdXJjZVtrZXldLCBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRhcmdldCksIHNvdXJjZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwgIi8vIFRoZSBzb3VyY2UgKGhhcyBiZWVuIGNoYW5nZWQpIGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNTQ2NSNpc3N1ZWNvbW1lbnQtMTU3ODg4MzI1XG52YXIgQ0FOQ0VMQVRJT05fTUVTU0FHRSA9IHtcbiAgdHlwZTogJ2NhbmNlbGF0aW9uJyxcbiAgbXNnOiAnb3BlcmF0aW9uIGlzIG1hbnVhbGx5IGNhbmNlbGVkJ1xufTtcblxuZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICB2YXIgaGFzQ2FuY2VsZWRfID0gZmFsc2U7XG4gIHZhciB3cmFwcGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA/IHJlamVjdChDQU5DRUxBVElPTl9NRVNTQUdFKSA6IHJlc29sdmUodmFsKTtcbiAgICB9KTtcbiAgICBwcm9taXNlW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgfSk7XG4gIHJldHVybiB3cmFwcGVkUHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA9IHRydWU7XG4gIH0sIHdyYXBwZWRQcm9taXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FuY2VsYWJsZTtcbmV4cG9ydCB7IENBTkNFTEFUSU9OX01FU1NBR0UgfTtcbiIsICJpbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5LCBvYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCBzdGF0ZSBmcm9tICdzdGF0ZS1sb2NhbCc7XG5pbXBvcnQgY29uZmlnJDEgZnJvbSAnLi4vY29uZmlnL2luZGV4LmpzJztcbmltcG9ydCB2YWxpZGF0b3JzIGZyb20gJy4uL3ZhbGlkYXRvcnMvaW5kZXguanMnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi4vdXRpbHMvY29tcG9zZS5qcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnLi4vdXRpbHMvZGVlcE1lcmdlLmpzJztcbmltcG9ydCBtYWtlQ2FuY2VsYWJsZSBmcm9tICcuLi91dGlscy9tYWtlQ2FuY2VsYWJsZS5qcyc7XG5cbi8qKiB0aGUgbG9jYWwgc3RhdGUgb2YgdGhlIG1vZHVsZSAqL1xuXG52YXIgX3N0YXRlJGNyZWF0ZSA9IHN0YXRlLmNyZWF0ZSh7XG4gIGNvbmZpZzogY29uZmlnJDEsXG4gIGlzSW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICByZXNvbHZlOiBudWxsLFxuICByZWplY3Q6IG51bGwsXG4gIG1vbmFjbzogbnVsbFxufSksXG4gICAgX3N0YXRlJGNyZWF0ZTIgPSBfc2xpY2VkVG9BcnJheShfc3RhdGUkY3JlYXRlLCAyKSxcbiAgICBnZXRTdGF0ZSA9IF9zdGF0ZSRjcmVhdGUyWzBdLFxuICAgIHNldFN0YXRlID0gX3N0YXRlJGNyZWF0ZTJbMV07XG4vKipcbiAqIHNldCB0aGUgbG9hZGVyIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSB0aGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbmZpZyhnbG9iYWxDb25maWcpIHtcbiAgdmFyIF92YWxpZGF0b3JzJGNvbmZpZyA9IHZhbGlkYXRvcnMuY29uZmlnKGdsb2JhbENvbmZpZyksXG4gICAgICBtb25hY28gPSBfdmFsaWRhdG9ycyRjb25maWcubW9uYWNvLFxuICAgICAgY29uZmlnID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF92YWxpZGF0b3JzJGNvbmZpZywgW1wibW9uYWNvXCJdKTtcblxuICBzZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBtZXJnZShzdGF0ZS5jb25maWcsIGNvbmZpZyksXG4gICAgICBtb25hY286IG1vbmFjb1xuICAgIH07XG4gIH0pO1xufVxuLyoqXG4gKiBoYW5kbGVzIHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGUgbW9uYWNvLWVkaXRvclxuICogQHJldHVybiB7UHJvbWlzZX0gLSByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmFjbyAod2l0aCBhIGNhbmNlbGFibGUgcHJvbWlzZSlcbiAqL1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1vbmFjbyA9IF9yZWYubW9uYWNvLFxuICAgICAgICBpc0luaXRpYWxpemVkID0gX3JlZi5pc0luaXRpYWxpemVkLFxuICAgICAgICByZXNvbHZlID0gX3JlZi5yZXNvbHZlO1xuICAgIHJldHVybiB7XG4gICAgICBtb25hY286IG1vbmFjbyxcbiAgICAgIGlzSW5pdGlhbGl6ZWQ6IGlzSW5pdGlhbGl6ZWQsXG4gICAgICByZXNvbHZlOiByZXNvbHZlXG4gICAgfTtcbiAgfSk7XG5cbiAgaWYgKCFzdGF0ZS5pc0luaXRpYWxpemVkKSB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaXNJbml0aWFsaXplZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlLm1vbmFjbykge1xuICAgICAgc3RhdGUucmVzb2x2ZShzdGF0ZS5tb25hY28pO1xuICAgICAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlKHdyYXBwZXJQcm9taXNlKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm1vbmFjbyAmJiB3aW5kb3cubW9uYWNvLmVkaXRvcikge1xuICAgICAgc3RvcmVNb25hY29JbnN0YW5jZSh3aW5kb3cubW9uYWNvKTtcbiAgICAgIHN0YXRlLnJlc29sdmUod2luZG93Lm1vbmFjbyk7XG4gICAgICByZXR1cm4gbWFrZUNhbmNlbGFibGUod3JhcHBlclByb21pc2UpO1xuICAgIH1cblxuICAgIGNvbXBvc2UoaW5qZWN0U2NyaXB0cywgZ2V0TW9uYWNvTG9hZGVyU2NyaXB0KShjb25maWd1cmVMb2FkZXIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlKHdyYXBwZXJQcm9taXNlKTtcbn1cbi8qKlxuICogaW5qZWN0cyBwcm92aWRlZCBzY3JpcHRzIGludG8gdGhlIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY3JpcHQgLSBhbiBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGluamVjdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGluamVjdFNjcmlwdHMoc2NyaXB0KSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG4vKipcbiAqIGNyZWF0ZXMgYW4gSFRNTCBzY3JpcHQgZWxlbWVudCB3aXRoL3dpdGhvdXQgcHJvdmlkZWQgc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY10gLSB0aGUgc291cmNlIHBhdGggb2YgdGhlIHNjcmlwdFxuICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBjcmVhdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdChzcmMpIHtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICByZXR1cm4gc3JjICYmIChzY3JpcHQuc3JjID0gc3JjKSwgc2NyaXB0O1xufVxuLyoqXG4gKiBjcmVhdGVzIGFuIEhUTUwgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgbW9uYWNvIGxvYWRlciBzcmNcbiAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgY3JlYXRlZCBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRNb25hY29Mb2FkZXJTY3JpcHQoY29uZmlndXJlTG9hZGVyKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICAgIHJlamVjdCA9IF9yZWYyLnJlamVjdDtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICByZWplY3Q6IHJlamVjdFxuICAgIH07XG4gIH0pO1xuICB2YXIgbG9hZGVyU2NyaXB0ID0gY3JlYXRlU2NyaXB0KFwiXCIuY29uY2F0KHN0YXRlLmNvbmZpZy5wYXRocy52cywgXCIvbG9hZGVyLmpzXCIpKTtcblxuICBsb2FkZXJTY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25maWd1cmVMb2FkZXIoKTtcbiAgfTtcblxuICBsb2FkZXJTY3JpcHQub25lcnJvciA9IHN0YXRlLnJlamVjdDtcbiAgcmV0dXJuIGxvYWRlclNjcmlwdDtcbn1cbi8qKlxuICogY29uZmlndXJlcyB0aGUgbW9uYWNvIGxvYWRlclxuICovXG5cblxuZnVuY3Rpb24gY29uZmlndXJlTG9hZGVyKCkge1xuICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgY29uZmlnID0gX3JlZjMuY29uZmlnLFxuICAgICAgICByZXNvbHZlID0gX3JlZjMucmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0ID0gX3JlZjMucmVqZWN0O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICByZWplY3Q6IHJlamVjdFxuICAgIH07XG4gIH0pO1xuICB2YXIgcmVxdWlyZSA9IHdpbmRvdy5yZXF1aXJlO1xuXG4gIHJlcXVpcmUuY29uZmlnKHN0YXRlLmNvbmZpZyk7XG5cbiAgcmVxdWlyZShbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLCBmdW5jdGlvbiAobW9uYWNvKSB7XG4gICAgc3RvcmVNb25hY29JbnN0YW5jZShtb25hY28pO1xuICAgIHN0YXRlLnJlc29sdmUobW9uYWNvKTtcbiAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgc3RhdGUucmVqZWN0KGVycm9yKTtcbiAgfSk7XG59XG4vKipcbiAqIHN0b3JlIG1vbmFjbyBpbnN0YW5jZSBpbiBsb2NhbCBzdGF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RvcmVNb25hY29JbnN0YW5jZShtb25hY28pIHtcbiAgaWYgKCFnZXRTdGF0ZSgpLm1vbmFjbykge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIG1vbmFjbzogbW9uYWNvXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogaW50ZXJuYWwgaGVscGVyIGZ1bmN0aW9uXG4gKiBleHRyYWN0cyBzdG9yZWQgbW9uYWNvIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH0gLSB0aGUgbW9uYWNvIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBfX2dldE1vbmFjb0luc3RhbmNlKCkge1xuICByZXR1cm4gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIG1vbmFjbyA9IF9yZWY0Lm1vbmFjbztcbiAgICByZXR1cm4gbW9uYWNvO1xuICB9KTtcbn1cblxudmFyIHdyYXBwZXJQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICByZXR1cm4gc2V0U3RhdGUoe1xuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgcmVqZWN0OiByZWplY3RcbiAgfSk7XG59KTtcbnZhciBsb2FkZXIgPSB7XG4gIGNvbmZpZzogY29uZmlnLFxuICBpbml0OiBpbml0LFxuICBfX2dldE1vbmFjb0luc3RhbmNlOiBfX2dldE1vbmFjb0luc3RhbmNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkZXI7XG4iLCAiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCIgbGFuZz1cInRzXCI+XG4gIGV4cG9ydCB0eXBlIGFjdGlvbnMgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhhbmRsZXI6ICgpID0+IHZvaWQ7XG4gIH1bXTtcblxuICBleHBvcnQgdHlwZSBjb21tYW5kcyA9IHtcbiAgICBrZXliaW5kaW5nOiAoXG4gICAgICBLZXlDb2RlOiB0eXBlb2YgbW9uYWNvLktleUNvZGUsXG4gICAgICBLZXlNb2Q6IHR5cGVvZiBtb25hY28uS2V5TW9kXG4gICAgKSA9PiBudW1iZXI7XG4gICAgaGFuZGxlcjogKCkgPT4gdm9pZDtcbiAgICBjb250ZXh0Pzogc3RyaW5nO1xuICB9W107XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICd0cy1kZWJvdW5jZSc7XG4gIGltcG9ydCBsb2FkZXIgZnJvbSAnQG1vbmFjby1lZGl0b3IvbG9hZGVyJztcbiAgaW1wb3J0IHR5cGUgbW9uYWNvIGZyb20gJ21vbmFjby10eXBlcyc7IC8vIFRPRE86IFVzZSB0aGUgc2NyaXB0IGluc3RlYWQgb2YgdXNpbmcgdGhpc1xuXG4gIGxldCBlZGl0b3JFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgZXhwb3J0IGxldCBlZGl0b3I6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yID0gbnVsbDtcbiAgZXhwb3J0IGxldCBjb250ZW50OiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgYWN0aW9uczogYWN0aW9ucyA9IFtdO1xuICBleHBvcnQgbGV0IGNvbW1hbmRzOiBjb21tYW5kcyA9IFtdO1xuICBleHBvcnQgbGV0IG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSB7fTtcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGxldCBsb2FkZWQgPSBmYWxzZTtcbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbW9uYWNvID0gYXdhaXQgbG9hZGVyLmluaXQoKTtcblxuICAgIG1vbmFjby5lZGl0b3Iub25EaWRDcmVhdGVFZGl0b3IoKCkgPT4ge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJlY2FsY3VsYXRlU2l6ZSgpO1xuICAgICAgZGlzcGF0Y2goJ3JlYWR5Jyk7XG4gICAgfSk7XG5cbiAgICBlZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZShlZGl0b3JFbGVtZW50LCB7XG4gICAgICBsYW5ndWFnZTogJ2NzcycsXG4gICAgICB0aGVtZTogJ3ZzLWRhcmsnLFxuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgLy8gT3ZlcnJpZGVzIHRoZSBvcHRpb25zIG5vIG1hdHRlciB3aGF0XG4gICAgICB2YWx1ZTogY29udGVudCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFjdHVhbENvbW1hbmRzID0gY29tbWFuZHMubWFwKChjb21tYW5kKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb21tYW5kLFxuICAgICAgICBrZXliaW5kaW5nOiBjb21tYW5kLmtleWJpbmRpbmcobW9uYWNvLktleUNvZGUsIG1vbmFjby5LZXlNb2QpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgYWN0dWFsQ29tbWFuZHMpIHtcbiAgICAgIGVkaXRvci5hZGRDb21tYW5kKFxuICAgICAgICBjb21tYW5kLmtleWJpbmRpbmcsXG4gICAgICAgIGNvbW1hbmQuaGFuZGxlcixcbiAgICAgICAgY29tbWFuZC5jb250ZXh0ID8/IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2YgYWN0aW9ucykge1xuICAgICAgY29uc3QgeyBpZCwgbGFiZWwsIGhhbmRsZXIgfSA9IGFjdGlvbjtcbiAgICAgIGVkaXRvci5hZGRBY3Rpb24oe1xuICAgICAgICBpZDogJ2N1c3RvbS4nICsgaWQsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBrZXliaW5kaW5nczogW10sXG4gICAgICAgIHJ1bjogaGFuZGxlcixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdDb250ZW50ID0gZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICBpZiAobmV3Q29udGVudCA9PT0gY29udGVudCkgcmV0dXJuO1xuXG4gICAgICBpZ25vcmVOZXh0ID0gdHJ1ZTtcbiAgICAgIGNvbnRlbnQgPSBuZXdDb250ZW50O1xuICAgICAgZGlzcGF0Y2goJ2NoYW5nZScsIGNvbnRlbnQpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBUT0RPOiBGaXggdGhpcyBtb25zdGVyXG4gIC8vIFdoZW5ldmVyIHRoZSBjb250ZW50IHZhcmlhYmxlIGNoYW5nZXMsIHVwZGF0ZSBNb25hY29cbiAgbGV0IGlnbm9yZU5leHQgPSBmYWxzZTtcbiAgJDogaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBsb2FkZWQpIHtcbiAgICBpZiAoIWlnbm9yZU5leHQpIGVkaXRvci5nZXRNb2RlbCgpLnNldFZhbHVlKGNvbnRlbnQpO1xuICAgIGlnbm9yZU5leHQgPSBmYWxzZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiByZWNhbGN1bGF0ZVNpemUoKSB7XG4gICAgaWYgKCFsb2FkZWQpIHJldHVybjtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWRpdG9yLmxheW91dCh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XG4gICAgICBjb25zdCBwYXJlbnRSZWN0ID0gZWRpdG9yRWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgZWRpdG9yLmxheW91dCh7XG4gICAgICAgIHdpZHRoOiBwYXJlbnRSZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBhcmVudFJlY3QuaGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGVkaXRvci5kaXNwb3NlKCk7XG4gICAgbG9hZGVkID0gZmFsc2U7XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6d2luZG93IG9uOnJlc2l6ZT17ZGVib3VuY2UocmVjYWxjdWxhdGVTaXplLCA1MCl9IC8+XG5cbjxkaXYgY2xhc3M9XCJtb25hY28td3JhcHBlclwiPlxuICB7I2lmICFsb2FkZWR9XG4gICAgPHAgY2xhc3M9XCJsb2FkaW5nLW92ZXJsYXlcIj5Mb2FkaW5nIG1vbmFjbyBlZGl0b3IuLi48L3A+XG4gIHsvaWZ9XG4gIDxkaXYgYmluZDp0aGlzPXtlZGl0b3JFbGVtZW50fSBjbGFzcz1cIm1vbmFjby1lZGl0b3JcIiAvPlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLm1vbmFjby1lZGl0b3Ige1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbjwvc3R5bGU+XG4iLCAiPCEtLSBHRU5FUkFURUQgRklMRSAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgY29uc3Qge1xuICAgIHdlaWdodDogY3R4V2VpZ2h0LFxuICAgIGNvbG9yOiBjdHhDb2xvcixcbiAgICBzaXplOiBjdHhTaXplLFxuICAgIG1pcnJvcmVkOiBjdHhNaXJyb3JlZCxcbiAgICAuLi5yZXN0Q3R4XG4gIH0gPSBnZXRDb250ZXh0KFwiaWNvbkN0eFwiKSB8fCB7fTtcblxuICBleHBvcnQgbGV0IHdlaWdodCA9IGN0eFdlaWdodCA/PyBcInJlZ3VsYXJcIjtcbiAgZXhwb3J0IGxldCBjb2xvciA9IGN0eENvbG9yID8/IFwiY3VycmVudENvbG9yXCI7XG4gIGV4cG9ydCBsZXQgc2l6ZSA9IGN0eFNpemUgPz8gXCIxZW1cIjtcbiAgZXhwb3J0IGxldCBtaXJyb3JlZCA9IGN0eE1pcnJvcmVkIHx8IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdmcgXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgd2lkdGg9e3NpemV9XG4gIGhlaWdodD17c2l6ZX1cbiAgZmlsbD17Y29sb3J9XG4gIHRyYW5zZm9ybT17bWlycm9yZWQgPyBcInNjYWxlKC0xLCAxKVwiIDogdW5kZWZpbmVkfSBcbiAgdmlld0JveD1cIjAgMCAyNTYgMjU2XCJcbiAgey4uLnJlc3RDdHh9XG4gIHsuLi4kJHJlc3RQcm9wc30+XG4gIDxzbG90Lz5cbiAgPHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiBmaWxsPVwibm9uZVwiIC8+XG4gIHsjaWYgd2VpZ2h0ID09PSBcImJvbGRcIn1cbiAgICA8cGF0aCBkPVwiTTIxNi40OSw3OS41MWwtNTYtNTZBMTIsMTIsMCwwLDAsMTUyLDIwSDU2QTIwLDIwLDAsMCwwLDM2LDQwVjIxNmEyMCwyMCwwLDAsMCwyMCwyMEgyMDBhMjAsMjAsMCwwLDAsMjAtMjBWODhBMTIsMTIsMCwwLDAsMjE2LjQ5LDc5LjUxWk0xNjAsNTdsMjMsMjNIMTYwWk02MCwyMTJWNDRoNzZWOTJhMTIsMTIsMCwwLDAsMTIsMTJoNDhWMjEyWm0xMDQtNjBhMTIsMTIsMCwwLDEtMTIsMTJIMTQwdjEyYTEyLDEyLDAsMCwxLTI0LDBWMTY0SDEwNGExMiwxMiwwLDAsMSwwLTI0aDEyVjEyOGExMiwxMiwwLDAsMSwyNCwwdjEyaDEyQTEyLDEyLDAsMCwxLDE2NCwxNTJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImR1b3RvbmVcIn1cbiAgICA8cGF0aCBkPVwiTTIwOCw4OEgxNTJWMzJaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWk0yMDAsMjE2SDU2VjQwaDg4Vjg4YTgsOCwwLDAsMCw4LDhoNDhWMjE2Wm0tNDAtNjRhOCw4LDAsMCwxLTgsOEgxMzZ2MTZhOCw4LDAsMCwxLTE2LDBWMTYwSDEwNGE4LDgsMCwwLDEsMC0xNmgxNlYxMjhhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDE2MCwxNTJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImZpbGxcIn1cbiAgICA8cGF0aCBkPVwiTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE1MiwxNjBIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE2MEgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTI4YTgsOCwwLDAsMSwxNiwwdjE2aDE2YTgsOCwwLDAsMSwwLDE2Wm0wLTcyVjQzLjMxTDE5Ni42OSw4OFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTIxMi4yNCw4My43NmwtNTYtNTZBNiw2LDAsMCwwLDE1MiwyNkg1NkExNCwxNCwwLDAsMCw0Miw0MFYyMTZhMTQsMTQsMCwwLDAsMTQsMTRIMjAwYTE0LDE0LDAsMCwwLDE0LTE0Vjg4QTYsNiwwLDAsMCwyMTIuMjQsODMuNzZaTTE1OCw0Ni40OCwxOTMuNTIsODJIMTU4Wk0yMDAsMjE4SDU2YTIsMiwwLDAsMS0yLTJWNDBhMiwyLDAsMCwxLDItMmg5MFY4OGE2LDYsMCwwLDAsNiw2aDUwVjIxNkEyLDIsMCwwLDEsMjAwLDIxOFptLTQyLTY2YTYsNiwwLDAsMS02LDZIMTM0djE4YTYsNiwwLDAsMS0xMiwwVjE1OEgxMDRhNiw2LDAsMCwxLDAtMTJoMThWMTI4YTYsNiwwLDAsMSwxMiwwdjE4aDE4QTYsNiwwLDAsMSwxNTgsMTUyWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJyZWd1bGFyXCJ9XG4gICAgPHBhdGggZD1cIk0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFpNMjAwLDIxNkg1NlY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNlptLTQwLTY0YTgsOCwwLDAsMS04LDhIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE2MEgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTI4YTgsOCwwLDAsMSwxNiwwdjE2aDE2QTgsOCwwLDAsMSwxNjAsMTUyWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0xNTYsNDEuNjUsMTk4LjM0LDg0SDE1NlpNMjAwLDIyMEg1NmE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRoOTJWODhhNCw0LDAsMCwwLDQsNGg1MlYyMTZBNCw0LDAsMCwxLDIwMCwyMjBabS00NC02OGE0LDQsMCwwLDEtNCw0SDEzMnYyMGE0LDQsMCwwLDEtOCwwVjE1NkgxMDRhNCw0LDAsMCwxLDAtOGgyMFYxMjhhNCw0LDAsMCwxLDgsMHYyMGgyMEE0LDQsMCwwLDEsMTU2LDE1MlpcIi8+XG4gIHs6ZWxzZX1cbiAgICB7KGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGljb24gd2VpZ2h0LiBDaG9vc2UgZnJvbSBcInRoaW5cIiwgXCJsaWdodFwiLCBcInJlZ3VsYXJcIiwgXCJib2xkXCIsIFwiZmlsbFwiLCBvciBcImR1b3RvbmVcIi4nKSwgXCJcIil9XG4gIHsvaWZ9XG48L3N2Zz4iLCAiaW1wb3J0IEZpbGVQbHVzIGZyb20gXCIuL0ZpbGVQbHVzLnN2ZWx0ZVwiXG5leHBvcnQgZGVmYXVsdCBGaWxlUGx1czsiLCAiPCEtLSBHRU5FUkFURUQgRklMRSAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgY29uc3Qge1xuICAgIHdlaWdodDogY3R4V2VpZ2h0LFxuICAgIGNvbG9yOiBjdHhDb2xvcixcbiAgICBzaXplOiBjdHhTaXplLFxuICAgIG1pcnJvcmVkOiBjdHhNaXJyb3JlZCxcbiAgICAuLi5yZXN0Q3R4XG4gIH0gPSBnZXRDb250ZXh0KFwiaWNvbkN0eFwiKSB8fCB7fTtcblxuICBleHBvcnQgbGV0IHdlaWdodCA9IGN0eFdlaWdodCA/PyBcInJlZ3VsYXJcIjtcbiAgZXhwb3J0IGxldCBjb2xvciA9IGN0eENvbG9yID8/IFwiY3VycmVudENvbG9yXCI7XG4gIGV4cG9ydCBsZXQgc2l6ZSA9IGN0eFNpemUgPz8gXCIxZW1cIjtcbiAgZXhwb3J0IGxldCBtaXJyb3JlZCA9IGN0eE1pcnJvcmVkIHx8IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdmcgXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgd2lkdGg9e3NpemV9XG4gIGhlaWdodD17c2l6ZX1cbiAgZmlsbD17Y29sb3J9XG4gIHRyYW5zZm9ybT17bWlycm9yZWQgPyBcInNjYWxlKC0xLCAxKVwiIDogdW5kZWZpbmVkfSBcbiAgdmlld0JveD1cIjAgMCAyNTYgMjU2XCJcbiAgey4uLnJlc3RDdHh9XG4gIHsuLi4kJHJlc3RQcm9wc30+XG4gIDxzbG90Lz5cbiAgPHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiBmaWxsPVwibm9uZVwiIC8+XG4gIHsjaWYgd2VpZ2h0ID09PSBcImJvbGRcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw2OEgxMzMuMzlsLTI2LTI5LjI5YTIwLDIwLDAsMCwwLTE1LTYuNzFINDBBMjAsMjAsMCwwLDAsMjAsNTJWMjAwLjYyQTE5LjQxLDE5LjQxLDAsMCwwLDM5LjM4LDIyMEgyMTYuODlBMTkuMTMsMTkuMTMsMCwwLDAsMjM2LDIwMC44OVY4OEEyMCwyMCwwLDAsMCwyMTYsNjhaTTkwLjYxLDU2bDEwLjY3LDEySDQ0VjU2Wk0yMTIsMTk2SDQ0VjkySDIxMlptLTcyLTc2djEyaDEyYTEyLDEyLDAsMCwxLDAsMjRIMTQwdjEyYTEyLDEyLDAsMCwxLTI0LDBWMTU2SDEwNGExMiwxMiwwLDAsMSwwLTI0aDEyVjEyMGExMiwxMiwwLDAsMSwyNCwwWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJkdW90b25lXCJ9XG4gICAgPHBhdGggZD1cIk0xMjgsODBIMzJWNTZhOCw4LDAsMCwxLDgtOEg5Mi42OWE4LDgsMCwwLDEsNS42NSwyLjM0WlwiIG9wYWNpdHk9XCIwLjJcIi8+PHBhdGggZD1cIk0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNkgyMTYuODlBMTUuMTMsMTUuMTMsMCwwLDAsMjMyLDIwMC44OVY4OEExNiwxNiwwLDAsMCwyMTYsNzJaTTkyLjY5LDU2bDE2LDE2SDQwVjU2Wk0yMTYsMjAwSDQwVjg4SDIxNlptLTg4LTg4YTgsOCwwLDAsMSw4LDh2MTZoMTZhOCw4LDAsMCwxLDAsMTZIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE1MkgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTIwQTgsOCwwLDAsMSwxMjgsMTEyWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJmaWxsXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44OCwxNS44OCwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNDEsMTUuNDEsMCwwLDAsMzkuMzksMjE2aDE3Ny41QTE1LjEzLDE1LjEzLDAsMCwwLDIzMiwyMDAuODlWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk00MCw1Nkg5Mi42OWwxNiwxNkg0MFptMTEyLDk2SDEzNnYxNmE4LDgsMCwwLDEtMTYsMFYxNTJIMTA0YTgsOCwwLDAsMSwwLTE2aDE2VjEyMGE4LDgsMCwwLDEsMTYsMHYxNmgxNmE4LDgsMCwwLDEsMCwxNlpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw3NEgxMzAuNDlsLTI3LjktMjcuOWExMy45NCwxMy45NCwwLDAsMC05LjktNC4xSDQwQTE0LDE0LDAsMCwwLDI2LDU2VjIwMC42MkExMy4zOSwxMy4zOSwwLDAsMCwzOS4zOCwyMTRIMjE2Ljg5QTEzLjEyLDEzLjEyLDAsMCwwLDIzMCwyMDAuODlWODhBMTQsMTQsMCwwLDAsMjE2LDc0Wk00MCw1NEg5Mi42OWEyLDIsMCwwLDEsMS40MS41OUwxMTMuNTEsNzRIMzhWNTZBMiwyLDAsMCwxLDQwLDU0Wk0yMTgsMjAwLjg5YTEuMTEsMS4xMSwwLDAsMS0xLjExLDEuMTFIMzkuMzhBMS40LDEuNCwwLDAsMSwzOCwyMDAuNjJWODZIMjE2YTIsMiwwLDAsMSwyLDJaTTE1OCwxNDRhNiw2LDAsMCwxLTYsNkgxMzR2MThhNiw2LDAsMCwxLTEyLDBWMTUwSDEwNGE2LDYsMCwwLDEsMC0xMmgxOFYxMjBhNiw2LDAsMCwxLDEyLDB2MThoMThBNiw2LDAsMCwxLDE1OCwxNDRaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw3MkgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MkExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2SDIxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5Vjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNOTIuNjksNTZsMTYsMTZINDBWNTZaTTIxNiwyMDBINDBWODhIMjE2Wm0tODgtODhhOCw4LDAsMCwxLDgsOHYxNmgxNmE4LDgsMCwwLDEsMCwxNkgxMzZ2MTZhOCw4LDAsMCwxLTE2LDBWMTUySDEwNGE4LDgsMCwwLDEsMC0xNmgxNlYxMjBBOCw4LDAsMCwxLDEyOCwxMTJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInRoaW5cIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw3NkgxMjkuNjZMMTAxLjE3LDQ3LjUyQTExLjksMTEuOSwwLDAsMCw5Mi42OSw0NEg0MEExMiwxMiwwLDAsMCwyOCw1NlYyMDAuNjJBMTEuNCwxMS40LDAsMCwwLDM5LjM4LDIxMkgyMTYuODlBMTEuMTIsMTEuMTIsMCwwLDAsMjI4LDIwMC44OVY4OEExMiwxMiwwLDAsMCwyMTYsNzZaTTQwLDUySDkyLjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdMMTE4LjM0LDc2SDM2VjU2QTQsNCwwLDAsMSw0MCw1MlpNMjIwLDIwMC44OWEzLjEyLDMuMTIsMCwwLDEtMy4xMSwzLjExSDM5LjM4QTMuMzksMy4zOSwwLDAsMSwzNiwyMDAuNjJWODRIMjE2YTQsNCwwLDAsMSw0LDRaTTE1NiwxNDRhNCw0LDAsMCwxLTQsNEgxMzJ2MjBhNCw0LDAsMCwxLTgsMFYxNDhIMTA0YTQsNCwwLDAsMSwwLThoMjBWMTIwYTQsNCwwLDAsMSw4LDB2MjBoMjBBNCw0LDAsMCwxLDE1NiwxNDRaXCIvPlxuICB7OmVsc2V9XG4gICAgeyhjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBpY29uIHdlaWdodC4gQ2hvb3NlIGZyb20gXCJ0aGluXCIsIFwibGlnaHRcIiwgXCJyZWd1bGFyXCIsIFwiYm9sZFwiLCBcImZpbGxcIiwgb3IgXCJkdW90b25lXCIuJyksIFwiXCIpfVxuICB7L2lmfVxuPC9zdmc+IiwgImltcG9ydCBGb2xkZXJQbHVzIGZyb20gXCIuL0ZvbGRlclBsdXMuc3ZlbHRlXCJcbmV4cG9ydCBkZWZhdWx0IEZvbGRlclBsdXM7IiwgIjwhLS0gR0VORVJBVEVEIEZJTEUgLS0+XG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHtcbiAgICB3ZWlnaHQ6IGN0eFdlaWdodCxcbiAgICBjb2xvcjogY3R4Q29sb3IsXG4gICAgc2l6ZTogY3R4U2l6ZSxcbiAgICBtaXJyb3JlZDogY3R4TWlycm9yZWQsXG4gICAgLi4ucmVzdEN0eFxuICB9ID0gZ2V0Q29udGV4dChcImljb25DdHhcIikgfHwge307XG5cbiAgZXhwb3J0IGxldCB3ZWlnaHQgPSBjdHhXZWlnaHQgPz8gXCJyZWd1bGFyXCI7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBjdHhDb2xvciA/PyBcImN1cnJlbnRDb2xvclwiO1xuICBleHBvcnQgbGV0IHNpemUgPSBjdHhTaXplID8/IFwiMWVtXCI7XG4gIGV4cG9ydCBsZXQgbWlycm9yZWQgPSBjdHhNaXJyb3JlZCB8fCBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3ZnIFxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gIHdpZHRoPXtzaXplfVxuICBoZWlnaHQ9e3NpemV9XG4gIGZpbGw9e2NvbG9yfVxuICB0cmFuc2Zvcm09e21pcnJvcmVkID8gXCJzY2FsZSgtMSwgMSlcIiA6IHVuZGVmaW5lZH0gXG4gIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiXG4gIHsuLi5yZXN0Q3R4fVxuICB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdC8+XG4gIDxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgZmlsbD1cIm5vbmVcIiAvPlxuICB7I2lmIHdlaWdodCA9PT0gXCJib2xkXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNDhIMTgwVjM2QTI4LDI4LDAsMCwwLDE1Miw4SDEwNEEyOCwyOCwwLDAsMCw3NiwzNlY0OEg0MGExMiwxMiwwLDAsMCwwLDI0aDRWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE5MmEyMCwyMCwwLDAsMCwyMC0yMFY3Mmg0YTEyLDEyLDAsMCwwLDAtMjRaTTEwMCwzNmE0LDQsMCwwLDEsNC00aDQ4YTQsNCwwLDAsMSw0LDRWNDhIMTAwWm04OCwxNjhINjhWNzJIMTg4Wk0xMTYsMTA0djY0YTEyLDEyLDAsMCwxLTI0LDBWMTA0YTEyLDEyLDAsMCwxLDI0LDBabTQ4LDB2NjRhMTIsMTIsMCwwLDEtMjQsMFYxMDRhMTIsMTIsMCwwLDEsMjQsMFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwiZHVvdG9uZVwifVxuICAgIDxwYXRoIGQ9XCJNMjAwLDU2VjIwOGE4LDgsMCwwLDEtOCw4SDY0YTgsOCwwLDAsMS04LThWNTZaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTIxNiw0OEgxNzZWNDBhMjQsMjQsMCwwLDAtMjQtMjRIMTA0QTI0LDI0LDAsMCwwLDgwLDQwdjhINDBhOCw4LDAsMCwwLDAsMTZoOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjY0aDhhOCw4LDAsMCwwLDAtMTZaTTk2LDQwYTgsOCwwLDAsMSw4LThoNDhhOCw4LDAsMCwxLDgsOHY4SDk2Wm05NiwxNjhINjRWNjRIMTkyWk0xMTIsMTA0djY0YTgsOCwwLDAsMS0xNiwwVjEwNGE4LDgsMCwwLDEsMTYsMFptNDgsMHY2NGE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDE2LDBaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImZpbGxcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw0OEgxNzZWNDBhMjQsMjQsMCwwLDAtMjQtMjRIMTA0QTI0LDI0LDAsMCwwLDgwLDQwdjhINDBhOCw4LDAsMCwwLDAsMTZoOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjY0aDhhOCw4LDAsMCwwLDAtMTZaTTExMiwxNjhhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxNiwwWm00OCwwYTgsOCwwLDAsMS0xNiwwVjEwNGE4LDgsMCwwLDEsMTYsMFptMC0xMjBIOTZWNDBhOCw4LDAsMCwxLDgtOGg0OGE4LDgsMCwwLDEsOCw4WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJsaWdodFwifVxuICAgIDxwYXRoIGQ9XCJNMjE2LDUwSDE3NFY0MGEyMiwyMiwwLDAsMC0yMi0yMkgxMDRBMjIsMjIsMCwwLDAsODIsNDBWNTBINDBhNiw2LDAsMCwwLDAsMTJINTBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE5MmExNCwxNCwwLDAsMCwxNC0xNFY2MmgxMGE2LDYsMCwwLDAsMC0xMlpNOTQsNDBhMTAsMTAsMCwwLDEsMTAtMTBoNDhhMTAsMTAsMCwwLDEsMTAsMTBWNTBIOTRaTTE5NCwyMDhhMiwyLDAsMCwxLTIsMkg2NGEyLDIsMCwwLDEtMi0yVjYySDE5NFpNMTEwLDEwNHY2NGE2LDYsMCwwLDEtMTIsMFYxMDRhNiw2LDAsMCwxLDEyLDBabTQ4LDB2NjRhNiw2LDAsMCwxLTEyLDBWMTA0YTYsNiwwLDAsMSwxMiwwWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJyZWd1bGFyXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNDhIMTc2VjQwYTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0MHY4SDQwYTgsOCwwLDAsMCwwLDE2aDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlY2NGg4YTgsOCwwLDAsMCwwLTE2Wk05Niw0MGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlptOTYsMTY4SDY0VjY0SDE5MlpNMTEyLDEwNHY2NGE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDE2LDBabTQ4LDB2NjRhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxNiwwWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNTJIMTcyVjQwYTIwLDIwLDAsMCwwLTIwLTIwSDEwNEEyMCwyMCwwLDAsMCw4NCw0MFY1Mkg0MGE0LDQsMCwwLDAsMCw4SDUyVjIwOGExMiwxMiwwLDAsMCwxMiwxMkgxOTJhMTIsMTIsMCwwLDAsMTItMTJWNjBoMTJhNCw0LDAsMCwwLDAtOFpNOTIsNDBhMTIsMTIsMCwwLDEsMTItMTJoNDhhMTIsMTIsMCwwLDEsMTIsMTJWNTJIOTJaTTE5NiwyMDhhNCw0LDAsMCwxLTQsNEg2NGE0LDQsMCwwLDEtNC00VjYwSDE5NlpNMTA4LDEwNHY2NGE0LDQsMCwwLDEtOCwwVjEwNGE0LDQsMCwwLDEsOCwwWm00OCwwdjY0YTQsNCwwLDAsMS04LDBWMTA0YTQsNCwwLDAsMSw4LDBaXCIvPlxuICB7OmVsc2V9XG4gICAgeyhjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBpY29uIHdlaWdodC4gQ2hvb3NlIGZyb20gXCJ0aGluXCIsIFwibGlnaHRcIiwgXCJyZWd1bGFyXCIsIFwiYm9sZFwiLCBcImZpbGxcIiwgb3IgXCJkdW90b25lXCIuJyksIFwiXCIpfVxuICB7L2lmfVxuPC9zdmc+IiwgImltcG9ydCBUcmFzaCBmcm9tIFwiLi9UcmFzaC5zdmVsdGVcIlxuZXhwb3J0IGRlZmF1bHQgVHJhc2g7IiwgIjwhLS0gR0VORVJBVEVEIEZJTEUgLS0+XG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHtcbiAgICB3ZWlnaHQ6IGN0eFdlaWdodCxcbiAgICBjb2xvcjogY3R4Q29sb3IsXG4gICAgc2l6ZTogY3R4U2l6ZSxcbiAgICBtaXJyb3JlZDogY3R4TWlycm9yZWQsXG4gICAgLi4ucmVzdEN0eFxuICB9ID0gZ2V0Q29udGV4dChcImljb25DdHhcIikgfHwge307XG5cbiAgZXhwb3J0IGxldCB3ZWlnaHQgPSBjdHhXZWlnaHQgPz8gXCJyZWd1bGFyXCI7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBjdHhDb2xvciA/PyBcImN1cnJlbnRDb2xvclwiO1xuICBleHBvcnQgbGV0IHNpemUgPSBjdHhTaXplID8/IFwiMWVtXCI7XG4gIGV4cG9ydCBsZXQgbWlycm9yZWQgPSBjdHhNaXJyb3JlZCB8fCBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3ZnIFxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gIHdpZHRoPXtzaXplfVxuICBoZWlnaHQ9e3NpemV9XG4gIGZpbGw9e2NvbG9yfVxuICB0cmFuc2Zvcm09e21pcnJvcmVkID8gXCJzY2FsZSgtMSwgMSlcIiA6IHVuZGVmaW5lZH0gXG4gIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiXG4gIHsuLi5yZXN0Q3R4fVxuICB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdC8+XG4gIDxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgZmlsbD1cIm5vbmVcIiAvPlxuICB7I2lmIHdlaWdodCA9PT0gXCJib2xkXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNjhIMTMzLjM5bC0yNi0yOS4yOWEyMCwyMCwwLDAsMC0xNS02LjcxSDQwQTIwLDIwLDAsMCwwLDIwLDUyVjIwMC42MkExOS40MSwxOS40MSwwLDAsMCwzOS4zOCwyMjBIMjE2Ljg5QTE5LjEzLDE5LjEzLDAsMCwwLDIzNiwyMDAuODlWODhBMjAsMjAsMCwwLDAsMjE2LDY4Wk00NCw1Nkg5MC42MWwxMC42NywxMkg0NFpNMjEyLDE5Nkg0NFY5MkgyMTJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImR1b3RvbmVcIn1cbiAgICA8cGF0aCBkPVwiTTEyOCw4MEgzMlY1NmE4LDgsMCwwLDEsOC04SDkyLjY5YTgsOCwwLDAsMSw1LjY1LDIuMzRaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTIxNiw3MkgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MkExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2SDIxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5Vjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNOTIuNjksNTZsMTYsMTZINDBWNTZaTTIxNiwyMDBINDBWODhIMjE2WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJmaWxsXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44OCwxNS44OCwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNDEsMTUuNDEsMCwwLDAsMzkuMzksMjE2aDE3Ny41QTE1LjEzLDE1LjEzLDAsMCwwLDIzMiwyMDAuODlWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk00MCw1Nkg5Mi42OWwxNiwxNkg0MFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw3NEgxMzAuNDlsLTI3LjktMjcuOWExMy45NCwxMy45NCwwLDAsMC05LjktNC4xSDQwQTE0LDE0LDAsMCwwLDI2LDU2VjIwMC42MkExMy4zOSwxMy4zOSwwLDAsMCwzOS4zOCwyMTRIMjE2Ljg5QTEzLjEyLDEzLjEyLDAsMCwwLDIzMCwyMDAuODlWODhBMTQsMTQsMCwwLDAsMjE2LDc0Wk00MCw1NEg5Mi42OWEyLDIsMCwwLDEsMS40MS41OUwxMTMuNTEsNzRIMzhWNTZBMiwyLDAsMCwxLDQwLDU0Wk0yMTgsMjAwLjg5YTEuMTEsMS4xMSwwLDAsMS0xLjExLDEuMTFIMzkuMzhBMS40LDEuNCwwLDAsMSwzOCwyMDAuNjJWODZIMjE2YTIsMiwwLDAsMSwyLDJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTIxNiw3MkgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MkExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2SDIxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5Vjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNNDAsNTZIOTIuNjlsMTYsMTZINDBaTTIxNiwyMDBINDBWODhIMjE2WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk0yMTYsNzZIMTI5LjY2TDEwMS4xNyw0Ny41MkExMS45LDExLjksMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYyQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJIMjE2Ljg5QTExLjEyLDExLjEyLDAsMCwwLDIyOCwyMDAuODlWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk0zNiw1NmE0LDQsMCwwLDEsNC00SDkyLjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdMMTE4LjM0LDc2SDM2Wk0yMjAsMjAwLjg5YTMuMTIsMy4xMiwwLDAsMS0zLjExLDMuMTFIMzkuMzhBMy4zOSwzLjM5LDAsMCwxLDM2LDIwMC42MlY4NEgyMTZhNCw0LDAsMCwxLDQsNFpcIi8+XG4gIHs6ZWxzZX1cbiAgICB7KGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGljb24gd2VpZ2h0LiBDaG9vc2UgZnJvbSBcInRoaW5cIiwgXCJsaWdodFwiLCBcInJlZ3VsYXJcIiwgXCJib2xkXCIsIFwiZmlsbFwiLCBvciBcImR1b3RvbmVcIi4nKSwgXCJcIil9XG4gIHsvaWZ9XG48L3N2Zz4iLCAiaW1wb3J0IEZvbGRlciBmcm9tIFwiLi9Gb2xkZXIuc3ZlbHRlXCJcbmV4cG9ydCBkZWZhdWx0IEZvbGRlcjsiLCAiPCEtLSBHRU5FUkFURUQgRklMRSAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgY29uc3Qge1xuICAgIHdlaWdodDogY3R4V2VpZ2h0LFxuICAgIGNvbG9yOiBjdHhDb2xvcixcbiAgICBzaXplOiBjdHhTaXplLFxuICAgIG1pcnJvcmVkOiBjdHhNaXJyb3JlZCxcbiAgICAuLi5yZXN0Q3R4XG4gIH0gPSBnZXRDb250ZXh0KFwiaWNvbkN0eFwiKSB8fCB7fTtcblxuICBleHBvcnQgbGV0IHdlaWdodCA9IGN0eFdlaWdodCA/PyBcInJlZ3VsYXJcIjtcbiAgZXhwb3J0IGxldCBjb2xvciA9IGN0eENvbG9yID8/IFwiY3VycmVudENvbG9yXCI7XG4gIGV4cG9ydCBsZXQgc2l6ZSA9IGN0eFNpemUgPz8gXCIxZW1cIjtcbiAgZXhwb3J0IGxldCBtaXJyb3JlZCA9IGN0eE1pcnJvcmVkIHx8IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdmcgXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgd2lkdGg9e3NpemV9XG4gIGhlaWdodD17c2l6ZX1cbiAgZmlsbD17Y29sb3J9XG4gIHRyYW5zZm9ybT17bWlycm9yZWQgPyBcInNjYWxlKC0xLCAxKVwiIDogdW5kZWZpbmVkfSBcbiAgdmlld0JveD1cIjAgMCAyNTYgMjU2XCJcbiAgey4uLnJlc3RDdHh9XG4gIHsuLi4kJHJlc3RQcm9wc30+XG4gIDxzbG90Lz5cbiAgPHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiBmaWxsPVwibm9uZVwiIC8+XG4gIHsjaWYgd2VpZ2h0ID09PSBcImJvbGRcIn1cbiAgICA8cGF0aCBkPVwiTTI0OC4yMywxMTIuMzFBMjAsMjAsMCwwLDAsMjMyLDEwNEgyMjBWODhhMjAsMjAsMCwwLDAtMjAtMjBIMTMyTDEwNS4zNCw0OGEyMC4xMiwyMC4xMiwwLDAsMC0xMi00SDQwQTIwLDIwLDAsMCwwLDIwLDY0VjIwOGgwYTEyLDEyLDAsMCwwLDEyLDEySDIxMS4xYTEyLDEyLDAsMCwwLDExLjMzLThsMjguNDktODEuNDcuMDYtLjE3QTIwLDIwLDAsMCwwLDI0OC4yMywxMTIuMzFaTTkyLDY4bDI2LjY3LDIwYTIwLjEyLDIwLjEyLDAsMCwwLDEyLDRIMTk2djEySDY5Ljc3YTIwLDIwLDAsMCwwLTE4Ljk0LDEzLjU4TDQ0LDEzNy4xNVY2OFpNMjAyLjU5LDE5Nkg0OC44OWwyMy43Mi02OEgyMjYuMzdaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImR1b3RvbmVcIn1cbiAgICA8cGF0aCBkPVwiTTIwOCw4OHYyNEg2OS43N2E4LDgsMCwwLDAtNy41OSw1LjQ3TDMyLDIwOFY2NGE4LDgsMCwwLDEsOC04SDkzLjMzYTgsOCwwLDAsMSw0LjgsMS42bDI3Ljc0LDIwLjhhOCw4LDAsMCwwLDQuOCwxLjZIMjAwQTgsOCwwLDAsMSwyMDgsODhaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTI0NSwxMTAuNjRBMTYsMTYsMCwwLDAsMjMyLDEwNEgyMTZWODhhMTYsMTYsMCwwLDAtMTYtMTZIMTMwLjY3TDEwMi45NCw1MS4yYTE2LjE0LDE2LjE0LDAsMCwwLTkuNi0zLjJINDBBMTYsMTYsMCwwLDAsMjQsNjRWMjA4aDBhOCw4LDAsMCwwLDgsOEgyMTEuMWE4LDgsMCwwLDAsNy41OS01LjQ3bDI4LjQ5LTg1LjQ3QTE2LjA1LDE2LjA1LDAsMCwwLDI0NSwxMTAuNjRaTTkzLjM0LDY0bDI3LjczLDIwLjhhMTYuMTIsMTYuMTIsMCwwLDAsOS42LDMuMkgyMDB2MTZINjkuNzdhMTYsMTYsMCwwLDAtMTUuMTgsMTAuOTRMNDAsMTU4LjdWNjRabTExMiwxMzZINDMuMWwyNi42Ny04MEgyMzJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImZpbGxcIn1cbiAgICA8cGF0aCBkPVwiTTI0NSwxMTAuNjRBMTYsMTYsMCwwLDAsMjMyLDEwNEgyMTZWODhhMTYsMTYsMCwwLDAtMTYtMTZIMTMwLjY3TDEwMi45NCw1MS4yYTE2LjE0LDE2LjE0LDAsMCwwLTkuNi0zLjJINDBBMTYsMTYsMCwwLDAsMjQsNjRWMjA4aDBhOCw4LDAsMCwwLDgsOEgyMTEuMWE4LDgsMCwwLDAsNy41OS01LjQ3bDI4LjQ5LTg1LjQ3QTE2LjA1LDE2LjA1LDAsMCwwLDI0NSwxMTAuNjRaTTkzLjM0LDY0bDI3LjczLDIwLjhhMTYuMTIsMTYuMTIsMCwwLDAsOS42LDMuMkgyMDB2MTZINjkuNzdhMTYsMTYsMCwwLDAtMTUuMTgsMTAuOTRMNDAsMTU4LjdWNjRaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImxpZ2h0XCJ9XG4gICAgPHBhdGggZD1cIk0yNDMuMzYsMTExLjgxQTE0LDE0LDAsMCwwLDIzMiwxMDZIMjE0Vjg4YTE0LDE0LDAsMCwwLTE0LTE0SDEzMC42N2EyLDIsMCwwLDEtMS4yLS40TDEwMS43NCw1Mi44YTE0LjA2LDE0LjA2LDAsMCwwLTguNC0yLjhINDBBMTQsMTQsMCwwLDAsMjYsNjRWMjA4aDBhNiw2LDAsMCwwLDYsNkgyMTEuMWE2LDYsMCwwLDAsNS42OS00LjFsMjguNDktODUuNDdBMTQsMTQsMCwwLDAsMjQzLjM2LDExMS44MVpNNDAsNjJIOTMuMzRhMiwyLDAsMCwxLDEuMi40bDI3LjczLDIwLjhhMTQuMDYsMTQuMDYsMCwwLDAsOC40LDIuOEgyMDBhMiwyLDAsMCwxLDIsMnYxOEg2OS43N2ExNCwxNCwwLDAsMC0xMy4yOCw5LjU3TDM4LDE3MVY2NEEyLDIsMCwwLDEsNDAsNjJabTE5My45LDU4LjYzTDIwNi43OCwyMDJINDAuMzNsMjcuNTQtODIuNjNhMiwyLDAsMCwxLDEuOS0xLjM3SDIzMmEyLDIsMCwwLDEsMS45LDIuNjNaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTI0NSwxMTAuNjRBMTYsMTYsMCwwLDAsMjMyLDEwNEgyMTZWODhhMTYsMTYsMCwwLDAtMTYtMTZIMTMwLjY3TDEwMi45NCw1MS4yYTE2LjE0LDE2LjE0LDAsMCwwLTkuNi0zLjJINDBBMTYsMTYsMCwwLDAsMjQsNjRWMjA4aDBhOCw4LDAsMCwwLDgsOEgyMTEuMWE4LDgsMCwwLDAsNy41OS01LjQ3bDI4LjQ5LTg1LjQ3QTE2LjA1LDE2LjA1LDAsMCwwLDI0NSwxMTAuNjRaTTkzLjM0LDY0bDI3LjczLDIwLjhhMTYuMTIsMTYuMTIsMCwwLDAsOS42LDMuMkgyMDB2MTZINjkuNzdhMTYsMTYsMCwwLDAtMTUuMTgsMTAuOTRMNDAsMTU4LjdWNjRabTExMiwxMzZINDMuMWwyNi42Ny04MEgyMzJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInRoaW5cIn1cbiAgICA8cGF0aCBkPVwiTTI0MS43MiwxMTNhMTEuODgsMTEuODgsMCwwLDAtOS43My01SDIxMlY4OGExMiwxMiwwLDAsMC0xMi0xMkgxMzAuNjZhNCw0LDAsMCwxLTIuNC0uOEwxMDAuNTMsNTQuNGExMi4wNSwxMi4wNSwwLDAsMC03LjItMi40SDQwQTEyLDEyLDAsMCwwLDI4LDY0VjIwOGgwYTQsNCwwLDAsMCw0LDRIMjExLjA5YTQsNCwwLDAsMCwzLjc5LTIuNzRsMjguNDktODUuNDdBMTEuODYsMTEuODYsMCwwLDAsMjQxLjcyLDExM1pNNDAsNjBIOTMuMzNhNCw0LDAsMCwxLDIuNC44bDI3LjczLDIwLjhhMTIuMDcsMTIuMDcsMCwwLDAsNy4yLDIuNEgyMDBhNCw0LDAsMCwxLDQsNHYyMEg2OS43NmExMiwxMiwwLDAsMC0xMS4zOCw4LjIxTDM2LDE4My4zNVY2NEE0LDQsMCwwLDEsNDAsNjBabTE5NS43OCw2MS4yNkwyMDguMiwyMDRIMzcuNTVMNjYsMTE4Ljc0QTQsNCwwLDAsMSw2OS43NiwxMTZIMjMyYTQsNCwwLDAsMSwzLjc5LDUuMjZaXCIvPlxuICB7OmVsc2V9XG4gICAgeyhjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBpY29uIHdlaWdodC4gQ2hvb3NlIGZyb20gXCJ0aGluXCIsIFwibGlnaHRcIiwgXCJyZWd1bGFyXCIsIFwiYm9sZFwiLCBcImZpbGxcIiwgb3IgXCJkdW90b25lXCIuJyksIFwiXCIpfVxuICB7L2lmfVxuPC9zdmc+IiwgImltcG9ydCBGb2xkZXJPcGVuIGZyb20gXCIuL0ZvbGRlck9wZW4uc3ZlbHRlXCJcbmV4cG9ydCBkZWZhdWx0IEZvbGRlck9wZW47IiwgIjwhLS0gR0VORVJBVEVEIEZJTEUgLS0+XG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHtcbiAgICB3ZWlnaHQ6IGN0eFdlaWdodCxcbiAgICBjb2xvcjogY3R4Q29sb3IsXG4gICAgc2l6ZTogY3R4U2l6ZSxcbiAgICBtaXJyb3JlZDogY3R4TWlycm9yZWQsXG4gICAgLi4ucmVzdEN0eFxuICB9ID0gZ2V0Q29udGV4dChcImljb25DdHhcIikgfHwge307XG5cbiAgZXhwb3J0IGxldCB3ZWlnaHQgPSBjdHhXZWlnaHQgPz8gXCJyZWd1bGFyXCI7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBjdHhDb2xvciA/PyBcImN1cnJlbnRDb2xvclwiO1xuICBleHBvcnQgbGV0IHNpemUgPSBjdHhTaXplID8/IFwiMWVtXCI7XG4gIGV4cG9ydCBsZXQgbWlycm9yZWQgPSBjdHhNaXJyb3JlZCB8fCBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3ZnIFxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gIHdpZHRoPXtzaXplfVxuICBoZWlnaHQ9e3NpemV9XG4gIGZpbGw9e2NvbG9yfVxuICB0cmFuc2Zvcm09e21pcnJvcmVkID8gXCJzY2FsZSgtMSwgMSlcIiA6IHVuZGVmaW5lZH0gXG4gIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiXG4gIHsuLi5yZXN0Q3R4fVxuICB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdC8+XG4gIDxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgZmlsbD1cIm5vbmVcIiAvPlxuICB7I2lmIHdlaWdodCA9PT0gXCJib2xkXCJ9XG4gICAgPHBhdGggZD1cIk00OCwxODBjMCw4LjY3LDUuNSwxNiwxMiwxNmExMC4yNywxMC4yNywwLDAsMCw3LjMzLTMuNDMsMTIsMTIsMCwxLDEsMTcuMzQsMTYuNkEzNCwzNCwwLDAsMSw2MCwyMjBDNDAuMTUsMjIwLDI0LDIwMiwyNCwxODBzMTYuMTUtNDAsMzYtNDBhMzQsMzQsMCwwLDEsMjQuNjcsMTAuODMsMTIsMTIsMCwxLDEtMTcuMzQsMTYuNkExMC4yNywxMC4yNywwLDAsMCw2MCwxNjRDNTMuNSwxNjQsNDgsMTcxLjMxLDQ4LDE4MFptOTcuNTEtNS43MWMtNS4xMi0zLjQ1LTExLjMyLTUuMjQtMTYuOC02LjgyYTc5LjUsNzkuNSwwLDAsMS03LjkxLTIuNTljMi40NS0xLjE4LDkuNzEtMS4zLDE2LjA3LjMzQTEyLDEyLDAsMCwwLDE0MywxNDJhNjksNjksMCwwLDAtMTItMS44NmMtOS45My0uNjYtMTgsMS4wOC0yNC4xLDUuMTdhMjQuNDUsMjQuNDUsMCwwLDAtMTAuNjksMTcuNzZjLTEuMSw4Ljc0LDIuNDksMTYuMjcsMTAuMTEsMjEuMTksNC43OCwzLjA5LDEwLjM2LDQuNywxNS43NSw2LjI2LDMsLjg5LDcuOTQsMi4zLDkuODgsMy41M2EyLjQ4LDIuNDgsMCwwLDEtLjIxLjcxYy0xLjM3LDEuNTUtOS41OCwxLjc5LTE2LjM5LS4wNmExMiwxMiwwLDEsMC02LjQ2LDIzLjExQTYzLjc1LDYzLjc1LDAsMCwwLDEyNS4xLDIyMGM2LjQ2LDAsMTMuNzMtMS4xNywxOS43My01LjE1YTI0LjczLDI0LjczLDAsMCwwLDEwLjk1LTE4QzE1NywxODcuNTMsMTUzLjMzLDE3OS41MywxNDUuNTEsMTc0LjI3Wm02OCwwYy01LjEyLTMuNDUtMTEuMzItNS4yNC0xNi44LTYuODJhNzkuNSw3OS41LDAsMCwxLTcuOTEtMi41OWMyLjQ1LTEuMTgsOS43MS0xLjMsMTYuMDcuMzNBMTIsMTIsMCwwLDAsMjExLDE0MmE2OSw2OSwwLDAsMC0xMi0xLjg2Yy05LjkzLS42Ni0xOCwxLjA4LTI0LjEsNS4xN2EyNC40NSwyNC40NSwwLDAsMC0xMC42OSwxNy43NmMtMS4xLDguNzQsMi40OSwxNi4yNywxMC4xMSwyMS4xOSw0Ljc4LDMuMDksMTAuMzYsNC43LDE1Ljc1LDYuMjYsMywuODksNy45NCwyLjMsOS44OCwzLjUzYTIuNDgsMi40OCwwLDAsMS0uMjEuNzFjLTEuMzcsMS41NS05LjU4LDEuNzktMTYuMzktLjA2YTEyLDEyLDAsMSwwLTYuNDYsMjMuMTFBNjMuNzUsNjMuNzUsMCwwLDAsMTkzLjEsMjIwYzYuNDYsMCwxMy43My0xLjE3LDE5LjczLTUuMTVhMjQuNzMsMjQuNzMsMCwwLDAsMTAuOTUtMThDMjI1LDE4Ny41MywyMjEuMzMsMTc5LjUzLDIxMy41MSwxNzQuMjdaTTM2LDEwOFY0MEEyMCwyMCwwLDAsMSw1NiwyMGg5NmExMiwxMiwwLDAsMSw4LjQ5LDMuNTFsNTYsNTZBMTIsMTIsMCwwLDEsMjIwLDg4djIwYTEyLDEyLDAsMSwxLTI0LDB2LTRIMTQ4YTEyLDEyLDAsMCwxLTEyLTEyVjQ0SDYwdjY0YTEyLDEyLDAsMSwxLTI0LDBaTTE2MCw4MGgyM0wxNjAsNTdaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImR1b3RvbmVcIn1cbiAgICA8cGF0aCBkPVwiTTIwOCw4OEgxNTJWMzJaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTQ4LDE4MGMwLDExLDcuMTgsMjAsMTYsMjBhMTQuMiwxNC4yLDAsMCwwLDEwLjIyLTQuNjZBOCw4LDAsMSwxLDg1Ljc3LDIwNi40LDMwLDMwLDAsMCwxLDY0LDIxNmMtMTcuNjUsMC0zMi0xNi4xNS0zMi0zNnMxNC4zNS0zNiwzMi0zNmEzMCwzMCwwLDAsMSwyMS43Nyw5LjYsOCw4LDAsMSwxLTExLjU1LDExLjA2QTE0LjI0LDE0LjI0LDAsMCwwLDY0LDE2MEM1NS4xOCwxNjAsNDgsMTY5LDQ4LDE4MFptNzkuNi04LjY5Yy00LTEuMTYtOC4xNC0yLjM1LTEwLjQ1LTMuODQtMS4yNi0uODEtMS4yMy0xLTEuMTItMS45YTQuNTQsNC41NCwwLDAsMSwyLTMuNjdjNC42LTMuMTIsMTUuMzUtMS43MywxOS44My0uNTZhOCw4LDAsMCwwLDQuMDctMTUuNDhjLTIuMTItLjU1LTIxLTUuMjItMzIuODMsMi43NmEyMC41NSwyMC41NSwwLDAsMC05LDE0Ljk1Yy0yLDE1Ljg4LDEzLjY0LDIwLjQxLDIzLDIzLjExLDEyLjA3LDMuNDksMTMuMTMsNC45MiwxMi43OCw3LjU5LS4zMSwyLjQxLTEuMjYsMy4zNC0yLjE0LDMuOTMtNC42LDMuMDYtMTUuMTcsMS41Ni0xOS41NS4zNmE4LDgsMCwwLDAtNC4zLDE1LjQxLDYxLjIzLDYxLjIzLDAsMCwwLDE1LjE4LDJjNS44MywwLDEyLjMtMSwxNy40OS00LjQ2YTIwLjgyLDIwLjgyLDAsMCwwLDkuMTktMTUuMjNDMTU0LDE3OSwxMzcuNDgsMTc0LjE3LDEyNy42LDE3MS4zMVptNjQsMGMtNC0xLjE2LTguMTQtMi4zNS0xMC40NS0zLjg0LTEuMjUtLjgxLTEuMjMtMS0xLjEyLTEuOWE0LjU0LDQuNTQsMCwwLDEsMi0zLjY3YzQuNi0zLjEyLDE1LjM0LTEuNzMsMTkuODItLjU2YTgsOCwwLDAsMCw0LjA3LTE1LjQ4Yy0yLjExLS41NS0yMS01LjIyLTMyLjgzLDIuNzZhMjAuNTgsMjAuNTgsMCwwLDAtOC45NSwxNC45NWMtMiwxNS44OCwxMy42NSwyMC40MSwyMywyMy4xMSwxMi4wNiwzLjQ5LDEzLjEyLDQuOTIsMTIuNzgsNy41OS0uMzEsMi40MS0xLjI2LDMuMzQtMi4xNSwzLjkzLTQuNiwzLjA2LTE1LjE2LDEuNTYtMTkuNTQuMzZBOCw4LDAsMCwwLDE3My45MywyMTRhNjEuMzQsNjEuMzQsMCwwLDAsMTUuMTksMmM1LjgyLDAsMTIuMy0xLDE3LjQ5LTQuNDZhMjAuODEsMjAuODEsMCwwLDAsOS4xOC0xNS4yM0MyMTgsMTc5LDIwMS40OCwxNzQuMTcsMTkxLjU5LDE3MS4zMVpNNDAsMTEyVjQwQTE2LDE2LDAsMCwxLDU2LDI0aDk2YTgsOCwwLDAsMSw1LjY2LDIuMzRsNTYsNTZBOCw4LDAsMCwxLDIxNiw4OHYyNGE4LDgsMCwxLDEtMTYsMFY5NkgxNTJhOCw4LDAsMCwxLTgtOFY0MEg1NnY3MmE4LDgsMCwwLDEtMTYsMFpNMTYwLDgwaDI4LjY4TDE2MCw1MS4zMVpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwiZmlsbFwifVxuICAgIDxwYXRoIGQ9XCJNNDgsMTgwYzAsMTEsNy4xOCwyMCwxNiwyMGExNC4yNCwxNC4yNCwwLDAsMCwxMC4yMi00LjY2QTgsOCwwLDEsMSw4NS43NywyMDYuNCwzMCwzMCwwLDAsMSw2NCwyMTZjLTE3LjY1LDAtMzItMTYuMTUtMzItMzZzMTQuMzUtMzYsMzItMzZhMzAsMzAsMCwwLDEsMjEuNzcsOS42LDgsOCwwLDEsMS0xMS41NSwxMS4wNkExNC4yLDE0LjIsMCwwLDAsNjQsMTYwQzU1LjE4LDE2MCw0OCwxNjksNDgsMTgwWm03OS42LTguNjljLTQtMS4xNi04LjE0LTIuMzUtMTAuNDUtMy44NC0xLjI2LS44MS0xLjIzLTEtMS4xMi0xLjlhNC41NCw0LjU0LDAsMCwxLDItMy42N2M0LjYtMy4xMiwxNS4zNS0xLjczLDE5LjgzLS41NmE4LDgsMCwwLDAsNC4wNy0xNS40OGMtMi4xMi0uNTUtMjEtNS4yMi0zMi44MywyLjc2YTIwLjU1LDIwLjU1LDAsMCwwLTksMTQuOTVjLTIsMTUuODgsMTMuNjQsMjAuNDEsMjMsMjMuMTEsMTIuMDcsMy40OSwxMy4xMyw0LjkyLDEyLjc4LDcuNTktLjMxLDIuNDEtMS4yNiwzLjM0LTIuMTQsMy45My00LjYsMy4wNi0xNS4xNywxLjU2LTE5LjU1LjM2YTgsOCwwLDAsMC00LjMsMTUuNDEsNjEuMjMsNjEuMjMsMCwwLDAsMTUuMTgsMmM1LjgzLDAsMTIuMy0xLDE3LjQ5LTQuNDZhMjAuODIsMjAuODIsMCwwLDAsOS4xOS0xNS4yM0MxNTQsMTc5LDEzNy40OCwxNzQuMTcsMTI3LjYsMTcxLjMxWm02NCwwYy00LTEuMTYtOC4xNC0yLjM1LTEwLjQ1LTMuODQtMS4yNS0uODEtMS4yMy0xLTEuMTItMS45YTQuNTQsNC41NCwwLDAsMSwyLTMuNjdjNC42LTMuMTIsMTUuMzQtMS43MywxOS44Mi0uNTZhOCw4LDAsMCwwLDQuMDctMTUuNDhjLTIuMTEtLjU1LTIxLTUuMjItMzIuODMsMi43NmEyMC41OCwyMC41OCwwLDAsMC04Ljk1LDE0Ljk1Yy0yLDE1Ljg4LDEzLjY1LDIwLjQxLDIzLDIzLjExLDEyLjA2LDMuNDksMTMuMTIsNC45MiwxMi43OCw3LjU5LS4zMSwyLjQxLTEuMjYsMy4zNC0yLjE1LDMuOTMtNC42LDMuMDYtMTUuMTYsMS41Ni0xOS41NC4zNkE4LDgsMCwwLDAsMTczLjkzLDIxNGE2MS4zNCw2MS4zNCwwLDAsMCwxNS4xOSwyYzUuODIsMCwxMi4zLTEsMTcuNDktNC40NmEyMC44MSwyMC44MSwwLDAsMCw5LjE4LTE1LjIzQzIxOCwxNzksMjAxLjQ4LDE3NC4xNywxOTEuNTksMTcxLjMxWk00MCwxMTJWNDBBMTYsMTYsMCwwLDEsNTYsMjRoOTZhOCw4LDAsMCwxLDUuNjYsMi4zNGw1Niw1NkE4LDgsMCwwLDEsMjE2LDg4djI0YTgsOCwwLDAsMS04LDhINDhBOCw4LDAsMCwxLDQwLDExMlpNMTUyLDg4aDQ0TDE1Miw0NFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTQ2LDE4MGMwLDEyLjEzLDguMDcsMjIsMTgsMjJhMTYuMjEsMTYuMjEsMCwwLDAsMTEuNjYtNS4yOCw2LDYsMCwwLDEsOC42Nyw4LjNBMjguMDksMjguMDksMCwwLDEsNjQsMjE0Yy0xNi41NCwwLTMwLTE1LjI1LTMwLTM0czEzLjQ2LTM0LDMwLTM0YTI4LjA5LDI4LjA5LDAsMCwxLDIwLjMzLDksNiw2LDAsMCwxLTguNjcsOC4zQTE2LjIxLDE2LjIxLDAsMCwwLDY0LDE1OEM1NC4wNywxNTgsNDYsMTY3Ljg2LDQ2LDE4MFptODEtNi43N2MtMTAuODUtMy4xMy0xMy40LTQuNjktMTMtNy45MWE2LjU2LDYuNTYsMCwwLDEsMi44OC01LjA4YzUuNTktMy43OSwxNy42Ni0xLjgyLDIxLjQ0LS44NGE2LDYsMCwxLDAsMy4wNi0xMS42Yy0yLS41My0yMC4wOS01LTMxLjIsMi40OGExOC42MiwxOC42MiwwLDAsMC04LjA5LDEzLjU0Yy0xLjc5LDE0LjE5LDEyLjI3LDE4LjI1LDIxLjU3LDIwLjk0LDEyLjEyLDMuNSwxNC43OCw1LjMzLDE0LjIxLDkuNzZhNi44OSw2Ljg5LDAsMCwxLTMsNS4zNGMtNS42LDMuNzMtMTcuNDgsMS42NC0yMS4xOC42MkE2LDYsMCwxLDAsMTEwLjQ4LDIxMmE1OS4yOSw1OS4yOSwwLDAsMCwxNC42NywyYzUuNDksMCwxMS41NS0uOTUsMTYuMzYtNC4xNGExOC44OSwxOC44OSwwLDAsMCw4LjMxLTEzLjgxQzE1MS44MywxODAuMzksMTM2LjkyLDE3Ni4wOCwxMjcsMTczLjIyWm02NCwwYy0xMC44NS0zLjEzLTEzLjQxLTQuNjktMTMtNy45MWE2LjU5LDYuNTksMCwwLDEsMi44OC01LjA4YzUuNi0zLjc5LDE3LjY1LTEuODMsMjEuNDQtLjg0YTYsNiwwLDAsMCwzLjA3LTExLjZjLTItLjU0LTIwLjEtNS0zMS4yMSwyLjQ4YTE4LjY0LDE4LjY0LDAsMCwwLTguMDgsMTMuNTRjLTEuOCwxNC4xOSwxMi4yNiwxOC4yNSwyMS41NywyMC45NCwxMi4xMiwzLjUsMTQuNzcsNS4zMywxNC4yLDkuNzZhNi44NSw2Ljg1LDAsMCwxLTMsNS4zNGMtNS42MSwzLjczLTE3LjQ4LDEuNjQtMjEuMTkuNjJBNiw2LDAsMCwwLDE3NC40NywyMTJhNTkuNDEsNTkuNDEsMCwwLDAsMTQuNjgsMmM1LjQ5LDAsMTEuNTQtLjk1LDE2LjM2LTQuMTRhMTguODksMTguODksMCwwLDAsOC4zMS0xMy44MUMyMTUuODMsMTgwLjM5LDIwMC45MSwxNzYuMDgsMTkxLDE3My4yMlpNMjAyLDk0SDE1MmE2LDYsMCwwLDEtNi02VjM4SDU2YTIsMiwwLDAsMC0yLDJ2NzJhNiw2LDAsMSwxLTEyLDBWNDBBMTQsMTQsMCwwLDEsNTYsMjZoOTZhNiw2LDAsMCwxLDQuMjQsMS43Nmw1Niw1NkE2LDYsMCwwLDEsMjE0LDg4djI0YTYsNiwwLDEsMS0xMiwwWk0xOTMuNSw4MiwxNTgsNDYuNDhWODJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTQ4LDE4MGMwLDExLDcuMTgsMjAsMTYsMjBhMTQuMjQsMTQuMjQsMCwwLDAsMTAuMjItNC42NkE4LDgsMCwxLDEsODUuNzcsMjA2LjQsMzAsMzAsMCwwLDEsNjQsMjE2Yy0xNy42NSwwLTMyLTE2LjE1LTMyLTM2czE0LjM1LTM2LDMyLTM2YTMwLDMwLDAsMCwxLDIxLjc3LDkuNiw4LDgsMCwxLDEtMTEuNTUsMTEuMDZBMTQuMjQsMTQuMjQsMCwwLDAsNjQsMTYwQzU1LjE4LDE2MCw0OCwxNjksNDgsMTgwWm03OS42LTguNjljLTQtMS4xNi04LjE0LTIuMzUtMTAuNDUtMy44NC0xLjI2LS44MS0xLjIzLTEtMS4xMi0xLjlhNC41NCw0LjU0LDAsMCwxLDItMy42N2M0LjYtMy4xMiwxNS4zNC0xLjczLDE5LjgzLS41NmE4LDgsMCwwLDAsNC4wNy0xNS40OGMtMi4xMi0uNTUtMjEtNS4yMi0zMi44MywyLjc2YTIwLjU1LDIwLjU1LDAsMCwwLTksMTQuOTVjLTIsMTUuODgsMTMuNjQsMjAuNDEsMjMsMjMuMTEsMTIuMDcsMy40OSwxMy4xMyw0LjkyLDEyLjc4LDcuNTktLjMxLDIuNDEtMS4yNiwzLjM0LTIuMTQsMy45My00LjYsMy4wNi0xNS4xNywxLjU2LTE5LjU1LjM2YTgsOCwwLDAsMC00LjMsMTUuNDEsNjEuMjMsNjEuMjMsMCwwLDAsMTUuMTgsMmM1LjgzLDAsMTIuMy0xLDE3LjQ5LTQuNDZhMjAuODIsMjAuODIsMCwwLDAsOS4xOS0xNS4yM0MxNTQsMTc5LDEzNy40OCwxNzQuMTcsMTI3LjYsMTcxLjMxWm02NCwwYy00LTEuMTYtOC4xNC0yLjM1LTEwLjQ1LTMuODQtMS4yNS0uODEtMS4yMy0xLTEuMTItMS45YTQuNTQsNC41NCwwLDAsMSwyLTMuNjdjNC42LTMuMTIsMTUuMzQtMS43MywxOS44Mi0uNTZhOCw4LDAsMCwwLDQuMDctMTUuNDhjLTIuMTEtLjU1LTIxLTUuMjItMzIuODMsMi43NmEyMC41OCwyMC41OCwwLDAsMC04Ljk1LDE0Ljk1Yy0yLDE1Ljg4LDEzLjY1LDIwLjQxLDIzLDIzLjExLDEyLjA2LDMuNDksMTMuMTIsNC45MiwxMi43OCw3LjU5LS4zMSwyLjQxLTEuMjYsMy4zNC0yLjE1LDMuOTMtNC42LDMuMDYtMTUuMTYsMS41Ni0xOS41NC4zNkE4LDgsMCwwLDAsMTczLjkzLDIxNGE2MS4zNCw2MS4zNCwwLDAsMCwxNS4xOSwyYzUuODIsMCwxMi4zLTEsMTcuNDktNC40NmEyMC44MSwyMC44MSwwLDAsMCw5LjE4LTE1LjIzQzIxOCwxNzksMjAxLjQ4LDE3NC4xNywxOTEuNTksMTcxLjMxWk00MCwxMTJWNDBBMTYsMTYsMCwwLDEsNTYsMjRoOTZhOCw4LDAsMCwxLDUuNjYsMi4zNGw1Niw1NkE4LDgsMCwwLDEsMjE2LDg4djI0YTgsOCwwLDEsMS0xNiwwVjk2SDE1MmE4LDgsMCwwLDEtOC04VjQwSDU2djcyYTgsOCwwLDAsMS0xNiwwWk0xNjAsODBoMjguNjhMMTYwLDUxLjMxWlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk00NCwxODBjMCwxMy4yMyw5LDI0LDIwLDI0YTE4LjE1LDE4LjE1LDAsMCwwLDEzLjExLTUuOSw0LDQsMCwwLDEsNS43OCw1LjU0QTI2LjEzLDI2LjEzLDAsMCwxLDY0LDIxMmMtMTUuNDQsMC0yOC0xNC4zNi0yOC0zMnMxMi41Ni0zMiwyOC0zMmEyNi4xMywyNi4xMywwLDAsMSwxOC44OSw4LjM2LDQsNCwwLDAsMS01Ljc4LDUuNTRBMTguMTUsMTguMTUsMCwwLDAsNjQsMTU2QzUzLDE1Niw0NCwxNjYuNzcsNDQsMTgwWm04Mi40OS00Ljg1Yy0xMC41My0zLTE1LjA4LTQuOTEtMTQuNDMtMTAuMDhhOC41Nyw4LjU3LDAsMCwxLDMuNzUtNi40OWM2LjI2LTQuMjMsMTguNzctMi4yNCwyMy4wNy0xLjExYTQsNCwwLDAsMCwyLTcuNzQsNjEuMTEsNjEuMTEsMCwwLDAtMTAuNDctMS42MWMtOC4xMi0uNTQtMTQuNTQuNzUtMTkuMSwzLjgyYTE2LjYzLDE2LjYzLDAsMCwwLTcuMjIsMTIuMTNjLTEuNTgsMTIuNDksMTAuNDYsMTYsMjAuMTQsMTguNzcsMTEuMjUsMy4yNSwxNi40Nyw1LjQ5LDE1LjYzLDExLjk0YTguOTMsOC45MywwLDAsMS0zLjksNi43NWMtNi4yOCw0LjE3LTE4LjYxLDIuMDUtMjIuODMuODhhNCw0LDAsMSwwLTIuMTUsNy43QTU3Ljc5LDU3Ljc5LDAsMCwwLDEyNS4xOSwyMTJjNS4xOCwwLDEwLjgzLS44NiwxNS4yMi0zLjc3YTE3LDE3LDAsMCwwLDcuNDMtMTIuNDFDMTQ5LjY0LDE4MS44NCwxMzYuMjYsMTc4LDEyNi40OSwxNzUuMTVabTY0LDBjLTEwLjUzLTMtMTUuMDgtNC45MS0xNC40My0xMC4wOGE4LjU3LDguNTcsMCwwLDEsMy43NS02LjQ5YzYuMjYtNC4yMywxOC43Ny0yLjI0LDIzLjA3LTEuMTFhNCw0LDAsMCwwLDItNy43NCw2MS4zMyw2MS4zMywwLDAsMC0xMC40OC0xLjYxYy04LjExLS41NC0xNC41NC43NS0xOS4wOSwzLjgyYTE2LjYzLDE2LjYzLDAsMCwwLTcuMjIsMTIuMTNjLTEuNTksMTIuNDksMTAuNDYsMTYsMjAuMTQsMTguNzcsMTEuMjUsMy4yNSwxNi40Niw1LjQ5LDE1LjYzLDExLjk0YTguOTMsOC45MywwLDAsMS0zLjksNi43NWMtNi4yOCw0LjE3LTE4LjYxLDIuMDUtMjIuODMuODhhNCw0LDAsMSwwLTIuMTUsNy43QTU3LjcsNTcuNywwLDAsMCwxODkuMTksMjEyYzUuMTcsMCwxMC44My0uODYsMTUuMjItMy43N2ExNywxNywwLDAsMCw3LjQzLTEyLjQxQzIxMy42MywxODEuODQsMjAwLjI2LDE3OCwxOTAuNDksMTc1LjE1Wk0yMDQsOTJIMTUyYTQsNCwwLDAsMS00LTRWMzZINTZhNCw0LDAsMCwwLTQsNHY3MmE0LDQsMCwwLDEtOCwwVjQwQTEyLDEyLDAsMCwxLDU2LDI4aDk2YTQsNCwwLDAsMSwyLjgzLDEuMTdsNTYsNTZBNCw0LDAsMCwxLDIxMiw4OHYyNGE0LDQsMCwwLDEtOCwwWm0tNS42NS04TDE1Niw0MS42NVY4NFpcIi8+XG4gIHs6ZWxzZX1cbiAgICB7KGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGljb24gd2VpZ2h0LiBDaG9vc2UgZnJvbSBcInRoaW5cIiwgXCJsaWdodFwiLCBcInJlZ3VsYXJcIiwgXCJib2xkXCIsIFwiZmlsbFwiLCBvciBcImR1b3RvbmVcIi4nKSwgXCJcIil9XG4gIHsvaWZ9XG48L3N2Zz4iLCAiaW1wb3J0IEZpbGVDc3MgZnJvbSBcIi4vRmlsZUNzcy5zdmVsdGVcIlxuZXhwb3J0IGRlZmF1bHQgRmlsZUNzczsiLCAiPCEtLSBHRU5FUkFURUQgRklMRSAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgY29uc3Qge1xuICAgIHdlaWdodDogY3R4V2VpZ2h0LFxuICAgIGNvbG9yOiBjdHhDb2xvcixcbiAgICBzaXplOiBjdHhTaXplLFxuICAgIG1pcnJvcmVkOiBjdHhNaXJyb3JlZCxcbiAgICAuLi5yZXN0Q3R4XG4gIH0gPSBnZXRDb250ZXh0KFwiaWNvbkN0eFwiKSB8fCB7fTtcblxuICBleHBvcnQgbGV0IHdlaWdodCA9IGN0eFdlaWdodCA/PyBcInJlZ3VsYXJcIjtcbiAgZXhwb3J0IGxldCBjb2xvciA9IGN0eENvbG9yID8/IFwiY3VycmVudENvbG9yXCI7XG4gIGV4cG9ydCBsZXQgc2l6ZSA9IGN0eFNpemUgPz8gXCIxZW1cIjtcbiAgZXhwb3J0IGxldCBtaXJyb3JlZCA9IGN0eE1pcnJvcmVkIHx8IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdmcgXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgd2lkdGg9e3NpemV9XG4gIGhlaWdodD17c2l6ZX1cbiAgZmlsbD17Y29sb3J9XG4gIHRyYW5zZm9ybT17bWlycm9yZWQgPyBcInNjYWxlKC0xLCAxKVwiIDogdW5kZWZpbmVkfSBcbiAgdmlld0JveD1cIjAgMCAyNTYgMjU2XCJcbiAgey4uLnJlc3RDdHh9XG4gIHsuLi4kJHJlc3RQcm9wc30+XG4gIDxzbG90Lz5cbiAgPHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiBmaWxsPVwibm9uZVwiIC8+XG4gIHsjaWYgd2VpZ2h0ID09PSBcImJvbGRcIn1cbiAgICA8cGF0aCBkPVwiTTEyOCwyMEExMDgsMTA4LDAsMSwwLDIzNiwxMjgsMTA4LjEyLDEwOC4xMiwwLDAsMCwxMjgsMjBabTAsMTkyYTg0LDg0LDAsMSwxLDg0LTg0QTg0LjA5LDg0LjA5LDAsMCwxLDEyOCwyMTJaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImR1b3RvbmVcIn1cbiAgICA8cGF0aCBkPVwiTTIyNCwxMjhhOTYsOTYsMCwxLDEtOTYtOTZBOTYsOTYsMCwwLDEsMjI0LDEyOFpcIiBvcGFjaXR5PVwiMC4yXCIvPjxwYXRoIGQ9XCJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImZpbGxcIn1cbiAgICA8cGF0aCBkPVwiTTIzMiwxMjhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjEzLDEwNC4xMywwLDAsMSwyMzIsMTI4WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJsaWdodFwifVxuICAgIDxwYXRoIGQ9XCJNMTI4LDI2QTEwMiwxMDIsMCwxLDAsMjMwLDEyOCwxMDIuMTIsMTAyLjEyLDAsMCwwLDEyOCwyNlptMCwxOTJhOTAsOTAsMCwxLDEsOTAtOTBBOTAuMSw5MC4xLDAsMCwxLDEyOCwyMThaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTAsMTkyYTg4LDg4LDAsMSwxLDg4LTg4QTg4LjEsODguMSwwLDAsMSwxMjgsMjE2WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFpcIi8+XG4gIHs6ZWxzZX1cbiAgICB7KGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGljb24gd2VpZ2h0LiBDaG9vc2UgZnJvbSBcInRoaW5cIiwgXCJsaWdodFwiLCBcInJlZ3VsYXJcIiwgXCJib2xkXCIsIFwiZmlsbFwiLCBvciBcImR1b3RvbmVcIi4nKSwgXCJcIil9XG4gIHsvaWZ9XG48L3N2Zz4iLCAiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGUuc3ZlbHRlXCJcbmV4cG9ydCBkZWZhdWx0IENpcmNsZTsiLCAiPCEtLSBUT0RPOiBXaGVuIHlvdSBjbGljayB0aGUgZmlsZSwgdGhlIHBhcmVudCBpcyBzZWxlY3RlZCAtLT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgZmlsZVN0YXR1cyB9IGZyb20gJ0Bjb21wb25lbnRzL1F1aWNrQ3NzL1NpZGViYXIuc3ZlbHRlJztcbiAgaW1wb3J0IHsgc2VsZWN0ZWRGaWxlIH0gZnJvbSAnQHVpL3RhYnMvUXVpY2tDc3Muc3ZlbHRlJztcbiAgaW1wb3J0IENzc0ZpbGUgZnJvbSAncGhvc3Bob3Itc3ZlbHRlL2xpYi9GaWxlQ3NzJztcbiAgaW1wb3J0IENpcmNsZSBmcm9tICdwaG9zcGhvci1zdmVsdGUvbGliL0NpcmNsZSc7XG5cbiAgZXhwb3J0IGxldCBmaWxlOiBRdWlja0Nzc0ZpbGU7XG4gIGV4cG9ydCBsZXQgcmVuYW1lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGVwdGggPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBzZWxlY3RlZEZpbGUuc2V0KGZpbGUpO1xuICB9XG5cbiAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAkOiBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCAtIDQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUmVuYW1lKCkge1xuICAgIGlmIChyZW5hbWUgJiYgaW5wdXQ/LnZhbHVlICE9PSBmaWxlLm5hbWUpXG4gICAgICBQb3Bjb3JuTmF0aXZlLnJlbmFtZVF1aWNrQ3NzTm9kZShmaWxlLmxvY2F0aW9uLCBpbnB1dC52YWx1ZSk7XG5cbiAgICByZW5hbWUgPSAhcmVuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0YyJzpcbiAgICAgICAgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChyZW5hbWUpIHRvZ2dsZVJlbmFtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaXRlbSBmaWxlXCJcbiAgc3R5bGU9XCItLWRlcHRoOiB7ZGVwdGh9XCJcbiAgb246Y2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgb246c3VibWl0fHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlU3VibWl0fVxuICBvbjpkYmxjbGljaz17dG9nZ2xlUmVuYW1lfVxuICBvbjprZXlkb3dufHNlbGZ8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVLZXlQcmVzc31cbj5cbiAgPENzc0ZpbGUgd2VpZ2h0PVwiYm9sZFwiIC8+XG4gIHsjaWYgcmVuYW1lfVxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJyZW5hbWUtaW5wdXRcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHZhbHVlPXtmaWxlLm5hbWV9XG4gICAgICBiaW5kOnRoaXM9e2lucHV0fVxuICAgICAgb246a2V5ZG93bj17aGFuZGxlS2V5UHJlc3N9XG4gICAgICBvbjpmb2N1c291dD17cmVuYW1lICYmIHRvZ2dsZVJlbmFtZX1cbiAgICAvPlxuICB7OmVsc2V9XG4gICAgPHNwYW4gY2xhc3M9XCJpdGVtLW5hbWVcIj57ZmlsZS5uYW1lfTwvc3Bhbj5cbiAgey9pZn1cbiAgeyNpZiAkZmlsZVN0YXR1cz8uW2ZpbGUubG9jYXRpb25dPy51bnNhdmVkfVxuICAgIDxDaXJjbGUgd2VpZ2h0PVwiZmlsbFwiIC8+XG4gIHsvaWZ9XG48L2J1dHRvbj5cbiIsICI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBGb2xkZXIgZnJvbSAncGhvc3Bob3Itc3ZlbHRlL2xpYi9Gb2xkZXInO1xuICBpbXBvcnQgRm9sZGVyT3BlbiBmcm9tICdwaG9zcGhvci1zdmVsdGUvbGliL0ZvbGRlck9wZW4nO1xuICBpbXBvcnQgRmlsZSBmcm9tICcuL0ZpbGUuc3ZlbHRlJztcblxuICBleHBvcnQgbGV0IGZvbGRlcjogUXVpY2tDc3NGb2xkZXI7XG4gIGV4cG9ydCBsZXQgcmVuYW1lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgb3BlbmVkID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBkZXB0aCA9IDA7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgIG9wZW5lZCA9ICFvcGVuZWQ7XG4gICAgc2VsZWN0ZWRGb2xkZXIuc2V0KGZvbGRlcik7XG4gIH1cblxuICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICQ6IGlmIChpbnB1dCkge1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVJlbmFtZSgpIHtcbiAgICBpZiAocmVuYW1lICYmIGlucHV0Py52YWx1ZSAhPT0gZm9sZGVyLm5hbWUpXG4gICAgICBQb3Bjb3JuTmF0aXZlLnJlbmFtZVF1aWNrQ3NzTm9kZShmb2xkZXIubG9jYXRpb24sIGlucHV0LnZhbHVlKTtcblxuICAgIHJlbmFtZSA9ICFyZW5hbWU7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRjInOlxuICAgICAgICB0b2dnbGVSZW5hbWUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKHJlbmFtZSkgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxidXR0b25cbiAgY2xhc3M9XCJpdGVtIGZvbGRlclwiXG4gIHN0eWxlPVwiLS1kZXB0aDoge2RlcHRofVwiXG4gIGRhdGEtb3BlbmVkPXtvcGVuZWR9XG4gIG9uOmNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gIG9uOnN1Ym1pdHxzdG9wUHJvcGFnYXRpb249e2hhbmRsZVN1Ym1pdH1cbiAgb246ZGJsY2xpY2s9e3RvZ2dsZVJlbmFtZX1cbiAgb246a2V5ZG93bnxzZWxmfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlS2V5UHJlc3N9XG4+XG4gIHsjaWYgb3BlbmVkfVxuICAgIDxGb2xkZXJPcGVuIHdlaWdodD1cImJvbGRcIiAvPlxuICB7OmVsc2V9XG4gICAgPEZvbGRlciB3ZWlnaHQ9XCJib2xkXCIgLz5cbiAgey9pZn1cbiAgeyNpZiByZW5hbWV9XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInJlbmFtZS1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgdmFsdWU9e2ZvbGRlci5uYW1lfVxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIG9uOmtleWRvd249e2hhbmRsZUtleVByZXNzfVxuICAgICAgb246Zm9jdXNvdXQ9e3JlbmFtZSAmJiB0b2dnbGVSZW5hbWV9XG4gICAgLz5cbiAgezplbHNlfVxuICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+e2ZvbGRlci5uYW1lfTwvc3Bhbj5cbiAgey9pZn1cbjwvYnV0dG9uPlxueyNpZiBvcGVuZWR9XG4gIHsjZWFjaCBmb2xkZXIuZmlsZXMgYXMgaXRlbX1cbiAgICB7I2lmICdmaWxlcycgaW4gaXRlbX1cbiAgICAgIDxzdmVsdGU6c2VsZiBmb2xkZXI9e2l0ZW19IGRlcHRoPXtkZXB0aCArIDF9IC8+XG4gICAgezplbHNlfVxuICAgICAgPEZpbGUgZmlsZT17aXRlbX0gZGVwdGg9e2RlcHRoICsgMX0gLz5cbiAgICB7L2lmfVxuICB7L2VhY2h9XG57L2lmfVxuXG48c3R5bGU+XG4gIDpnbG9iYWwoLml0ZW0pIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgIGdhcDogMC4yNWVtO1xuICAgIGJsb2NrLXNpemU6IDFlbTtcbiAgICBpbmxpbmUtc2l6ZTogY2FsYygxMDAlIC0gMXJlbSAqIHZhcigtLWRlcHRoLCAwKSk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGMoMXJlbSAqIHZhcigtLWRlcHRoLCAwKSk7XG4gICAgcGFkZGluZy1ibG9jazogMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICA6Z2xvYmFsKC5pdGVtID4gc3ZnKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICA6Z2xvYmFsKC5pdGVtID4gLnJlbmFtZS1pbnB1dCkge1xuICAgIGFsbDogdW5zZXQ7XG4gICAgaW5saW5lLXNpemU6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuPC9zdHlsZT5cbiIsICI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIiBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuICBleHBvcnQgY29uc3QgZmlsZVN0YXR1cyA9IHdyaXRhYmxlPHsgW2xvY2F0aW9uOiBzdHJpbmddOiBRdWlja0Nzc1VJRmlsZVN0YXR1cyB9Pih7fSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCBOZXdGaWxlIGZyb20gJ3Bob3NwaG9yLXN2ZWx0ZS9saWIvRmlsZVBsdXMnO1xuICBpbXBvcnQgTmV3Rm9sZGVyIGZyb20gJ3Bob3NwaG9yLXN2ZWx0ZS9saWIvRm9sZGVyUGx1cyc7XG4gIGltcG9ydCBUcmFzaCBmcm9tICdwaG9zcGhvci1zdmVsdGUvbGliL1RyYXNoJztcbiAgaW1wb3J0IHsgbGF0ZXN0U2VsZWN0aW9uLCBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBGb2xkZXIgZnJvbSAnLi9Gb2xkZXIuc3ZlbHRlJztcblxuICBsZXQgZWxlbWVudERpdjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigobXV0YXRpb24pID0+IHtcbiAgICAgIGRpc3BhdGNoKCdyZXNpemUnLCBtdXRhdGlvblswXSk7XG4gICAgfSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50RGl2KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xuICAgIFBvcGNvcm5OYXRpdmUuZGVsZXRlUXVpY2tDc3NOb2RlKCRsYXRlc3RTZWxlY3Rpb24ubG9jYXRpb24pO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld0ZpbGUoKSB7XG4gICAgUG9wY29ybk5hdGl2ZS5jcmVhdGVRdWlja0Nzc05vZGUoJHNlbGVjdGVkRm9sZGVyLmxvY2F0aW9uLCAnZmlsZScpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld0ZvbGRlcigpIHtcbiAgICBQb3Bjb3JuTmF0aXZlLmNyZWF0ZVF1aWNrQ3NzTm9kZSgkc2VsZWN0ZWRGb2xkZXIubG9jYXRpb24sICdmb2xkZXInKTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJzaWRlYmFyXCIgc3R5bGU9XCJ3aWR0aDogMjJjaDtcIiBiaW5kOnRoaXM9e2VsZW1lbnREaXZ9PlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYWN0aW9uXCJcbiAgICAgIGRhdGEtYWN0aW9uPVwiZGVsZXRlXCJcbiAgICAgIG9uOmNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICBvbjpzdWJtaXQ9e2hhbmRsZURlbGV0ZX1cbiAgICA+XG4gICAgICA8VHJhc2ggd2VpZ2h0PVwiYm9sZFwiIC8+XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC1maWxlXCI+eyRsYXRlc3RTZWxlY3Rpb24ubmFtZX08L3NwYW4+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImFjdGlvblwiXG4gICAgICBkYXRhLWFjdGlvbj1cIm5ldy1maWxlXCJcbiAgICAgIG9uOmNsaWNrPXtoYW5kbGVOZXdGaWxlfVxuICAgICAgb246c3VibWl0PXtoYW5kbGVOZXdGaWxlfVxuICAgID5cbiAgICAgIDxOZXdGaWxlIHdlaWdodD1cImJvbGRcIiAvPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYWN0aW9uXCJcbiAgICAgIGRhdGEtYWN0aW9uPVwibmV3LWZvbGRlclwiXG4gICAgICBvbjpjbGljaz17aGFuZGxlTmV3Rm9sZGVyfVxuICAgICAgb246c3VibWl0PXtoYW5kbGVOZXdGb2xkZXJ9XG4gICAgPlxuICAgICAgPE5ld0ZvbGRlciB3ZWlnaHQ9XCJib2xkXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxGb2xkZXIgZm9sZGVyPXt3aW5kb3cuUG9wY29ybi5xdWlja0Nzc30gLz5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5zaWRlYmFyIHtcbiAgICBtaW4taW5saW5lLXNpemU6IDIwY2g7XG4gICAgbWF4LWlubGluZS1zaXplOiA3NWNoO1xuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLWJnLW5vcm1hbCk7XG4gIH1cblxuICAuYWN0aW9uLWJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZTogLTAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtYmctbm9ybWFsKTtcbiAgfVxuICAuYWN0aW9uLWJhciBidXR0b24ge1xuICAgIGFsbDogdW5zZXQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYWN0aW9uLWJhciBidXR0b24gPiA6Z2xvYmFsKHN2Zykge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbjwvc3R5bGU+XG4iLCAiPCEtLSBUT0RPOiBJbXByb3ZlIGV2ZXJ5dGhpbmcgaGVyZSAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyB3cml0YWJsZSwgUmVhZGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuICBjb25zdCByZXJlbmRlclN0b3JlID0gd3JpdGFibGU8Ym9vbGVhbj4oKTtcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZXJlbmRlclN0b3JlLnVwZGF0ZSgob2JqKSA9PiAhb2JqKTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkTm9kZSA9IHdyaXRhYmxlPFF1aWNrQ3NzRmlsZSB8IFF1aWNrQ3NzRm9sZGVyPigpO1xuICBleHBvcnQgY29uc3Qgc2VsZWN0ZWRGaWxlID0gd3JpdGFibGU8UXVpY2tDc3NGaWxlPigpO1xuICBleHBvcnQgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSB3cml0YWJsZTxRdWlja0Nzc0ZvbGRlcj4oKTtcbiAgZXhwb3J0IGNvbnN0IGxhdGVzdFNlbGVjdGlvbjogUmVhZGFibGU8UXVpY2tDc3NGaWxlIHwgUXVpY2tDc3NGb2xkZXI+ID0ge1xuICAgIHN1YnNjcmliZTogc2VsZWN0ZWROb2RlLnN1YnNjcmliZSxcbiAgfTtcblxuICBleHBvcnQgY29uc3Qgc3RhdHVzID0gd3JpdGFibGU8UXVpY2tDc3NVSVN0YXR1cz4oe30pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndHMtZGVib3VuY2UnO1xuICBpbXBvcnQgTW9uYWNvRWRpdG9yLCB7IHR5cGUgYWN0aW9ucywgdHlwZSBjb21tYW5kcyB9IGZyb20gJ0Bjb21wb25lbnRzL1F1aWNrQ3NzL01vbmFjb0VkaXRvci5zdmVsdGUnO1xuICBpbXBvcnQgU2lkZWJhciwgeyBmaWxlU3RhdHVzIH0gZnJvbSAnQGNvbXBvbmVudHMvUXVpY2tDc3MvU2lkZWJhci5zdmVsdGUnO1xuXG4gIGxldCBlZGl0b3JDb250ZW50OiBzdHJpbmc7XG5cbiAgc2VsZWN0ZWRGaWxlLnN1YnNjcmliZSgoZmlsZSkgPT4ge1xuICAgIGlmIChmaWxlKSBlZGl0b3JDb250ZW50ID0gZmlsZS5jb250ZW50O1xuICAgIHNlbGVjdGVkTm9kZS5zZXQoZmlsZSk7XG4gIH0pO1xuICBzZWxlY3RlZEZvbGRlci5zdWJzY3JpYmUoKGZvbGRlcikgPT4ge1xuICAgIHNlbGVjdGVkTm9kZS5zZXQoZm9sZGVyKTtcbiAgfSk7XG5cbiAgbGV0IGFjdGlvbnM6IGFjdGlvbnMgPSBbXG4gICAge1xuICAgICAgaWQ6ICdzYXZlJyxcbiAgICAgIGxhYmVsOiAnU2F2ZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGZpbGUnLFxuICAgICAgaGFuZGxlcjogc2F2ZSxcbiAgICB9LFxuICBdO1xuICBsZXQgY29tbWFuZHM6IGNvbW1hbmRzID0gW1xuICAgIHtcbiAgICAgIGtleWJpbmRpbmc6IChLZXlDb2RlLCBLZXlNb2QpID0+IEtleU1vZC5DdHJsQ21kIHwgS2V5Q29kZS5LZXlTLFxuICAgICAgaGFuZGxlcjogc2F2ZSxcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAkZmlsZVN0YXR1c1skc2VsZWN0ZWRGaWxlLmxvY2F0aW9uXSA/Pz0ge307XG4gICAgJGZpbGVTdGF0dXNbJHNlbGVjdGVkRmlsZS5sb2NhdGlvbl0udW5zYXZlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlKCkge1xuICAgICRmaWxlU3RhdHVzWyRzZWxlY3RlZEZpbGUubG9jYXRpb25dLnVuc2F2ZWQgPSBmYWxzZTtcbiAgICBQb3Bjb3JuTmF0aXZlLnVwZGF0ZVF1aWNrQ3NzRmlsZSgkc2VsZWN0ZWRGaWxlLmxvY2F0aW9uLCBlZGl0b3JDb250ZW50KTtcbiAgfVxuXG4gIGxldCByZWNhbGN1bGF0ZVNpemU6IE1vbmFjb0VkaXRvclsncmVjYWxjdWxhdGVTaXplJ107XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInF1aWNrQ3NzLXdyYXBwZXJcIj5cbiAgeyNrZXkgJHJlcmVuZGVyU3RvcmV9XG4gICAgPFNpZGViYXIgb246cmVzaXplPXtkZWJvdW5jZShyZWNhbGN1bGF0ZVNpemUsIDUwKX0gLz5cbiAgey9rZXl9XG4gIHsjaWYgJHNlbGVjdGVkRmlsZX1cbiAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLWJhclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC1maWxlXCI+eyRzZWxlY3RlZEZpbGUubG9jYXRpb259PC9zcGFuPlxuICAgICAgeyNpZiAkc3RhdHVzLnR5cGV9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIiBkYXRhLXR5cGU9eyRzdGF0dXMudHlwZX0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1tZXNzYWdlXCI+eyRzdGF0dXMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICAgIDxNb25hY29FZGl0b3JcbiAgICAgIG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgYmluZDpjb250ZW50PXtlZGl0b3JDb250ZW50fVxuICAgICAgYmluZDpyZWNhbGN1bGF0ZVNpemVcbiAgICAgIHthY3Rpb25zfVxuICAgICAge2NvbW1hbmRzfVxuICAgIC8+XG4gIHs6ZWxzZX1cbiAgICA8c3BhbiBjbGFzcz1cIm5vLWZpbGUtc2VsZWN0ZWRcIj5TZWxlY3QgYSBmaWxlIHRvIGVkaXQ8L3NwYW4+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAucXVpY2tDc3Mtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgJ3NpZGViYXIgc3RhdHVzJ1xuICAgICAgJ3NpZGViYXIgZWRpdG9yJztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJsb2NrLXNpemU6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5xdWlja0Nzcy13cmFwcGVyID4gOmdsb2JhbCguc2lkZWJhcikge1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgfVxuXG4gIC5xdWlja0Nzcy13cmFwcGVyID4gOmdsb2JhbCgubW9uYWNvLXdyYXBwZXIpIHtcbiAgICBncmlkLWFyZWE6IGVkaXRvcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnF1aWNrQ3NzLXdyYXBwZXIgPiAuc3RhdHVzLWJhciB7XG4gICAgZ3JpZC1hcmVhOiBzdGF0dXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWJsb2NrLXNpemU6IDEuNWVtO1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtYmctbm9ybWFsKTtcbiAgfVxuPC9zdHlsZT5cbiIsICJleHBvcnQgY29uc3QgcHJlZml4ZXMgPSB7XG4gIG1haW46ICdQT1BDT1JOXycsXG4gIHF1aWNrQ3NzOiAnUVVJQ0tDU1NfJ1xufTtcblxuZXhwb3J0IGNvbnN0IElQQyA9IHByZWZpeFZhbHVlcyh7XG4gIC8vIE1pc2NcbiAgZ2V0Q29uZmlnOiAnR0VUX0NPTkZJRycsXG4gIGdldFN0eWxlczogJ0dFVF9TVFlMRVMnLFxuICBzdGF0dXNNZXNzYWdlOiAnU1RBVFVTX01FU1NBR0UnLFxuICBnZXRXaW5kb3dEYXRhOiAnR0VUX1dJTkRPV19EQVRBJyxcbiAgbG9nOiAnTE9HJyxcblxuICAvLyBUaGVtZXNcbiAgZ2V0VGhlbWVzOiAnR0VUX1RIRU1FUycsXG4gIG9uVGhlbWVDaGFuZ2U6ICdPTl9USEVNRV9DSEFOR0UnLFxuICBzYXZlVGhlbWVTdGF0ZTogJ1NBVkVfVEhFTUVfU1RBVEUnLFxuXG4gIC8vIFF1aWNrQ1NTXG4gIGdldFF1aWNrQ3NzOiAnR0VUX1FVSUNLX0NTUycsXG4gIG9uUXVpY2tDc3NDaGFuZ2U6ICdPTl9RVUlDS19DU1NfQ0hBTkdFJyxcbiAgY3JlYXRlUXVpY2tDc3NOb2RlOiAnQ1JFQVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgZGVsZXRlUXVpY2tDc3NOb2RlOiAnREVMRVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgcmVuYW1lUXVpY2tDc3NOb2RlOiAnUkVOQU1FX1FVSUNLX0NTU19OT0RFJyxcbiAgdXBkYXRlUXVpY2tDc3NGaWxlOiAnU0FWRV9RVUlDS19DU1NfRklMRScsXG59LCBwcmVmaXhlcy5tYWluKTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTID0ge1xuICBxdWlja0NzczogcHJlZml4VmFsdWVzKHtcbiAgICBjcmVhdGVkOiAnQ1JFQVRFRCcsXG4gICAgZGVsZXRlZDogJ0RFTEVURUQnLFxuICAgIHJlbmFtZWQ6ICdSRU5BTUVEJyxcbiAgICB1cGRhdGVkOiAnVVBEQVRFRCcsXG4gIH0sIHByZWZpeGVzLnF1aWNrQ3NzKSxcbn07XG5cbmV4cG9ydCBjb25zdCBSRU5ERVJFUiA9IHByZWZpeFZhbHVlcyh7XG4gIHN0b3A6ICdTVE9QJyxcbn0sIHByZWZpeGVzLm1haW4pO1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9iamVjdDogVCwgcHJlZml4OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIHN0cmluZz47XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdFtrZXldID0gcHJlZml4ICsgb2JqZWN0W2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuICBwcml2YXRlIGxvZ0FyY2hpdmU6IHsgdHlwZTogc3RyaW5nOyBtZXNzYWdlOiBhbnlbXTsgfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHR5cGU6ICdhbnNpJyB8ICdjb25zb2xlJyA9ICdjb25zb2xlJykge1xuICAgIHRoaXMub3V0cHV0ID0gTG9nZ2VyTW9kdWxlLmdldE91dHB1dCh0eXBlKTtcblxuICAgIC8vIFRPRE86IENyZWF0ZSBhIGxvZ2dlciBzcGVjaWZpY2FsbHkgZm9yIG1haW4gYW5kIG1vdmUgdGhpcyB0aGVyZVxuICAgIC8vIFNlbmQgYWxsIGxvZ3MgZnJvbSB0aGUgbWFpbiBwcm9jZXNzIHRvIHRoZSByZW5kZXJlciBwcm9jZXNzIHdoZW4gaW5pdGlhbGl6ZWRcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgdGhpcy5sb2dBcmNoaXZlID0gW107XG5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXBwIH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgICAgYXBwLm9uKCd3ZWItY29udGVudHMtY3JlYXRlZCcsIChfLCB3ZWJDb250ZW50cykgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIHRoaXMubG9nQXJjaGl2ZSkge1xuICAgICAgICAgICAgd2ViQ29udGVudHMuc2VuZChJUEMubG9nLCBsb2cudHlwZSwgLi4ubG9nLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldE91dHB1dChvdXRwdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAob3V0cHV0KSB7XG4gICAgICBjYXNlICdhbnNpJzpcbiAgICAgIGNhc2UgJ3Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuICdhbnNpJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnY29uc29sZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q29sb3IodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAgICAgICAgIGFycjogWzAsIDI1MCwgMTU0XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgICBhcnI6IFswLCAxOTEsIDI1NV0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnY3JpbXNvbicsXG4gICAgICAgICAgYXJyOiBbMjIwLCAyMCwgNjBdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGFya09yYW5nZScsXG4gICAgICAgICAgYXJyOiBbMjU1LCAxNDAsIDBdLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdnb2xkJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDIxNSwgMF0sXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYW5zaUNvbG9yKGNvbG9yOiBudW1iZXJbXSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICBjb25zdCBsb2dDb2xvciA9IExvZ2dlck1vZHVsZS5nZXRDb2xvcih0eXBlKTtcblxuICAgIGNvbnN0IGJhbm5lciA9XG4gICAgICB0aGlzLm91dHB1dCA9PT0gJ2Fuc2knXG4gICAgICAgID8gW2BbJHtMb2dnZXJNb2R1bGUuYW5zaUNvbG9yKGxvZ0NvbG9yLmFyciwgJ1BvcGNvcm4nKX0gPiAke3RoaXMubW9kdWxlfV1gXVxuICAgICAgICA6IFtgWyVjUG9wY29ybiVjID4gJHt0aGlzLm1vZHVsZX1dYCwgYGNvbG9yOiAke2xvZ0NvbG9yLnN0cn07YCwgJyddO1xuXG4gICAgY29uc29sZVt0eXBlXSguLi5iYW5uZXIsIC4uLm1lc3NhZ2UpO1xuXG4gICAgLy8gVE9ETzogQ3JlYXRlIGEgbG9nZ2VyIHNwZWNpZmljYWxseSBmb3IgbWFpbiBhbmQgbW92ZSB0aGlzIHRoZXJlXG4gICAgaWYgKHRoaXMub3V0cHV0ID09PSAnYW5zaScpIHtcbiAgICAgIGNvbnN0IHsgQnJvd3NlcldpbmRvdyB9ID0gYXdhaXQgaW1wb3J0KCdlbGVjdHJvbicpO1xuICAgICAgdGhpcy5sb2dBcmNoaXZlLnB1c2goeyB0eXBlLCBtZXNzYWdlIH0pO1xuXG4gICAgICBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKCh3aW4pID0+IHdpbi53ZWJDb250ZW50cy5zZW5kKElQQy5sb2csIHR5cGUsIC4uLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBsb2cgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnbG9nJywgbWVzc2FnZSk7XG4gIGluZm8gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnaW5mbycsIG1lc3NhZ2UpO1xuICB3YXJuID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ3dhcm4nLCBtZXNzYWdlKTtcbiAgZXJyb3IgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZXJyb3InLCBtZXNzYWdlKTtcbiAgZGVidWcgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZGVidWcnLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTW9kdWxlO1xuIiwgImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndHMtZGVib3VuY2UnO1xuaW1wb3J0IHsgY29tbWVudHMgfSBmcm9tICcuLic7XG5pbXBvcnQgeyByZXJlbmRlclNpZGViYXIsIHNlbGVjdGVkRm9sZGVyIH0gZnJvbSAnQHVpL3RhYnMvUXVpY2tDc3Muc3ZlbHRlJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnUXVpY2tDU1MnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tDc3Mge1xuICBwcml2YXRlIHN0eWxlRWxlbWVudHMgPSBuZXcgTWFwPCdpbXBvcnRzJyB8ICdjb250ZW50cycsIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZVF1aWNrQ3NzKCk7XG4gICAgdGhpcy53YXRjaFF1aWNrQ3NzKCk7XG4gICAgc2VsZWN0ZWRGb2xkZXIuc2V0KHdpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzKTtcbiAgfVxuXG4gIHBvcHVsYXRlUXVpY2tDc3MoKSB7XG4gICAgY29uc3QgeyBpbXBvcnRzLCBjb250ZW50cyB9ID0gY29tcGlsZVF1aWNrQ3NzKHdpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzKTtcblxuICAgIGNvbnN0IGltcG9ydFN0eWxlID0gdGhpcy5zdHlsZUVsZW1lbnRzLmdldCgnaW1wb3J0cycpO1xuICAgIGlmICghaW1wb3J0U3R5bGUpIHtcbiAgICAgIGNvbnN0IGltcG9ydFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGltcG9ydFN0eWxlLmlkID0gJ3BvcGNvcm4tcXVpY2tjc3MtaW1wb3J0cyc7XG4gICAgICBpbXBvcnRTdHlsZS50ZXh0Q29udGVudCA9IGltcG9ydHM7XG4gICAgICBpbXBvcnRTdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wY29ybicsICdxdWlja2NzcycpO1xuICAgICAgY29tbWVudHMuZW5kLmFmdGVyKGltcG9ydFN0eWxlKTtcblxuICAgICAgdGhpcy5zdHlsZUVsZW1lbnRzLnNldCgnaW1wb3J0cycsIGltcG9ydFN0eWxlKTtcbiAgICB9IGVsc2UgaWYgKGltcG9ydHMgIT09IGltcG9ydFN0eWxlLnRleHRDb250ZW50KSB7XG4gICAgICBpbXBvcnRTdHlsZS50ZXh0Q29udGVudCA9IGltcG9ydHM7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudFN0eWxlID0gdGhpcy5zdHlsZUVsZW1lbnRzLmdldCgnY29udGVudHMnKTtcbiAgICBpZiAoIWNvbnRlbnRTdHlsZSkge1xuICAgICAgY29uc3QgY29udGVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGNvbnRlbnRTdHlsZS5pZCA9ICdwb3Bjb3JuLXF1aWNrY3NzLWNvbnRlbnRzJztcbiAgICAgIGNvbnRlbnRTdHlsZS50ZXh0Q29udGVudCA9IGNvbnRlbnRzO1xuICAgICAgY29udGVudFN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3Bjb3JuJywgJ3F1aWNrY3NzJyk7XG4gICAgICBjb21tZW50cy5lbmQuYWZ0ZXIoY29udGVudFN0eWxlKTtcblxuICAgICAgdGhpcy5zdHlsZUVsZW1lbnRzLnNldCgnY29udGVudHMnLCBjb250ZW50U3R5bGUpO1xuICAgIH0gZWxzZSBpZiAoY29udGVudHMgIT09IGNvbnRlbnRTdHlsZS50ZXh0Q29udGVudCkge1xuICAgICAgY29udGVudFN0eWxlLnRleHRDb250ZW50ID0gY29udGVudHM7XG4gICAgfVxuICB9XG5cbiAgI3JlbW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICB3YXRjaFF1aWNrQ3NzKCkge1xuICAgIHRoaXMuI3JlbW92ZUxpc3RlbmVyID0gUG9wY29ybk5hdGl2ZS5vblF1aWNrQ3NzQ2hhbmdlKGRlYm91bmNlKCh1cGRhdGVkKSA9PiB7XG4gICAgICBpZiAoUG9wY29ybk5hdGl2ZS5jb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdRdWlja0NTUyBVcGRhdGVkJyk7XG5cbiAgICAgIHdpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzID0gdXBkYXRlZDtcblxuICAgICAgcmVyZW5kZXJTaWRlYmFyKCk7XG4gICAgICB0aGlzLnBvcHVsYXRlUXVpY2tDc3MoKTtcbiAgICB9LCAxMDApKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy4jcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHRoaXMuc3R5bGVFbGVtZW50cy52YWx1ZXMoKSkge1xuICAgICAgc3R5bGUucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVRdWlja0Nzcyhmb2xkZXI6IFF1aWNrQ3NzRm9sZGVyKSB7XG4gIGxldCBpbXBvcnRzID0gJyc7XG4gIGxldCBjb250ZW50cyA9ICcnO1xuXG4gIGNvbnN0IGltcG9ydFJlZ2V4ID0gL15AaW1wb3J0XFxzKyg/OnVybFxcKFsnXCJdPy4qP1snXCJdP1xcKXxbJ1wiXS4qP1snXCJdKShcXHMrW147XSs/KT87JC9nbWk7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBmb2xkZXIuZmlsZXMpIHtcbiAgICBpZiAoJ2ZpbGVzJyBpbiBub2RlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjb21waWxlUXVpY2tDc3Mobm9kZSk7XG4gICAgICBpbXBvcnRzICs9IHJlc3VsdC5pbXBvcnRzO1xuICAgICAgY29udGVudHMgKz0gcmVzdWx0LmNvbnRlbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZW50Tm9JbXBvcnRzID0gbm9kZS5jb250ZW50LnJlcGxhY2UoaW1wb3J0UmVnZXgsIChtYXRjaCkgPT4ge1xuICAgICAgICBpbXBvcnRzICs9IG1hdGNoLnJlcGxhY2UoLzskLywgJycpICsgYDsgLyogJHtub2RlLmxvY2F0aW9ufSAqL1xcbmA7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pLnRyaW0oKTtcblxuICAgICAgaWYgKGNvbnRlbnROb0ltcG9ydHMpIGNvbnRlbnRzICs9IGBcXG5cXG4vKiAke25vZGUubG9jYXRpb259ICovXFxuYCArIGNvbnRlbnROb0ltcG9ydHM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW1wb3J0cywgY29udGVudHMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1aWNrQ3NzTm9kZShsb2NhdGlvbjogc3RyaW5nLCBub2RlOiBRdWlja0Nzc0ZvbGRlciA9IHdpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzKTogUXVpY2tDc3NGaWxlIHwgUXVpY2tDc3NGb2xkZXIgfCBudWxsIHtcbiAgaWYgKG5vZGUubG9jYXRpb24gPT09IGxvY2F0aW9uKSByZXR1cm4gbm9kZTtcblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuZmlsZXMpIHtcbiAgICBpZiAoJ2NvbnRlbnQnIGluIGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQubG9jYXRpb24gPT09IGxvY2F0aW9uKSByZXR1cm4gY2hpbGQ7XG4gICAgICBlbHNlIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGdldFF1aWNrQ3NzTm9kZShsb2NhdGlvbiwgY2hpbGQpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsICJpbXBvcnQgeyBnZXQgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0UXVpY2tDc3NOb2RlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBzdGF0dXMsIHNlbGVjdGVkRmlsZSwgc2VsZWN0ZWRGb2xkZXIgfSBmcm9tICdAdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUnO1xuaW1wb3J0IHsgTUVTU0FHRVMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ1F1aWNrQ3NzID4gSVBDJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVRdWlja0Nzc01lc3NhZ2VzKG1lc3NhZ2U6IFN0YXR1c01lc3NhZ2UpIHtcbiAgY29uc3Qgc3RhdHVzVHlwZSA9IG1lc3NhZ2Uuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XG4gIGlmICghbWVzc2FnZS5zdWNjZXNzKSB7XG4gICAgTG9nZ2VyLndhcm4obWVzc2FnZS50eXBlLCAnZmFpbGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICBjYXNlIE1FU1NBR0VTLnF1aWNrQ3NzLmNyZWF0ZWQ6IHtcbiAgICAgIC8vIFRPRE86IFRoaXMgaXMgYSByYWNlIGNvbmRpdGlvbiB0aGF0IGFsbW9zdCBhbHdheXMgZmFpbHMsIHJ1biB0aGlzIGFmdGVyIFF1aWNrQ3NzIGdldHMgdXBkYXRlZFxuICAgICAgLy8gY29uc3QgeyB0eXBlLCBsb2NhdGlvbiB9OiB7IHR5cGU6ICdmaWxlJyB8ICdmb2xkZXInOyBsb2NhdGlvbjogc3RyaW5nIH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgICAvLyBjb25zdCBub2RlID0gZ2V0UXVpY2tDc3NOb2RlKGxvY2F0aW9uKTtcbiAgICAgIC8vIGlmICh0eXBlID09PSAnZmlsZScpIHNlbGVjdGVkRmlsZS5zZXQobm9kZSBhcyBRdWlja0Nzc0ZpbGUpO1xuICAgICAgLy8gZWxzZSBzZWxlY3RlZEZvbGRlci5zZXQobm9kZSBhcyBRdWlja0Nzc0ZvbGRlcik7XG5cbiAgICAgIHZhciBzdGF0dXNNZXNzYWdlID0gbWVzc2FnZS5zdWNjZXNzXG4gICAgICAgID8gYENyZWF0ZWQgJHtsb2NhdGlvbn0gc3VjY2Vzc2Z1bGx5LmBcbiAgICAgICAgOiBgRmFpbGVkIHRvIGNyZWF0ZSAke2xvY2F0aW9ufS5gO1xuICAgIH0gYnJlYWs7XG5cbiAgICBjYXNlIE1FU1NBR0VTLnF1aWNrQ3NzLmRlbGV0ZWQ6IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgbG9jYXRpb24gfTogeyB0eXBlOiAnZmlsZScgfCAnZm9sZGVyJzsgbG9jYXRpb246IHN0cmluZyB9ID0gbWVzc2FnZS5kYXRhO1xuICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJyAmJiBnZXQoc2VsZWN0ZWRGaWxlKS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHNlbGVjdGVkRmlsZS5zZXQobnVsbCk7XG4gICAgICBlbHNlIGlmICh0eXBlID09PSAnZm9sZGVyJyAmJiBnZXQoc2VsZWN0ZWRGb2xkZXIpLmxvY2F0aW9uID09PSBsb2NhdGlvbikgc2VsZWN0ZWRGb2xkZXIuc2V0KG51bGwpO1xuXG4gICAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IG1lc3NhZ2Uuc3VjY2Vzc1xuICAgICAgICA/IGBEZWxldGVkICR7bG9jYXRpb259IHN1Y2Nlc3NmdWxseS5gXG4gICAgICAgIDogYEZhaWxlZCB0byBkZWxldGUgJHtsb2NhdGlvbn0uYDtcbiAgICB9IGJyZWFrO1xuXG4gICAgY2FzZSBNRVNTQUdFUy5xdWlja0Nzcy5yZW5hbWVkOiB7XG4gICAgICBjb25zdCB7IG9sZExvY2F0aW9uLCBuZXdMb2NhdGlvbiB9OiB7IG9sZExvY2F0aW9uOiBzdHJpbmc7IG5ld0xvY2F0aW9uOiBzdHJpbmcgfSA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgIGNvbnN0IG5vZGUgPSBnZXRRdWlja0Nzc05vZGUobmV3TG9jYXRpb24pO1xuICAgICAgY29uc3QgdHlwZSA9ICgnZmlsZXMnIGluIG5vZGUpID8gJ2ZvbGRlcicgOiAnZmlsZSc7XG5cbiAgICAgIGlmICh0eXBlID09PSAnZmlsZScgJiYgZ2V0KHNlbGVjdGVkRmlsZSkubG9jYXRpb24gPT09IG9sZExvY2F0aW9uKSBzZWxlY3RlZEZpbGUuc2V0KG5vZGUgYXMgUXVpY2tDc3NGaWxlKTtcbiAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdmb2xkZXInICYmIGdldChzZWxlY3RlZEZvbGRlcikubG9jYXRpb24gPT09IG9sZExvY2F0aW9uKSBzZWxlY3RlZEZvbGRlci5zZXQobm9kZSBhcyBRdWlja0Nzc0ZvbGRlcik7XG5cblxuICAgICAgdmFyIHN0YXR1c01lc3NhZ2UgPSBtZXNzYWdlLnN1Y2Nlc3NcbiAgICAgICAgPyBgUmVuYW1lZCAke29sZExvY2F0aW9ufSB0byAke25ld0xvY2F0aW9ufSBzdWNjZXNzZnVsbHkuYFxuICAgICAgICA6IGBGYWlsZWQgdG8gcmVuYW1lICR7b2xkTG9jYXRpb259IHRvICR7bmV3TG9jYXRpb259LmA7XG4gICAgfSBicmVhaztcblxuICAgIGNhc2UgTUVTU0FHRVMucXVpY2tDc3MudXBkYXRlZDoge1xuICAgICAgdmFyIHN0YXR1c01lc3NhZ2UgPSBtZXNzYWdlLnN1Y2Nlc3NcbiAgICAgICAgPyBgVXBkYXRlZCAke21lc3NhZ2UuZGF0YX0gc3VjY2Vzc2Z1bGx5LmBcbiAgICAgICAgOiBgRmFpbGVkIHRvIHVwZGF0ZSAke21lc3NhZ2UuZGF0YX0uYDtcbiAgICB9IGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIExvZ2dlci53YXJuKGBVbmtub3duIHN0YXR1cyBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWAsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHN0YXR1c01lc3NhZ2UpIHN0YXR1cy5zZXQoe1xuICAgIHR5cGU6IHN0YXR1c1R5cGUsXG4gICAgbWVzc2FnZTogc3RhdHVzTWVzc2FnZSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4nO1xuaW1wb3J0IHsgaGFuZGxlUXVpY2tDc3NNZXNzYWdlcyB9IGZyb20gJy4vcXVpY2tjc3MvaXBjJztcbmltcG9ydCB7IHByZWZpeGVzLCBSRU5ERVJFUiB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnSVBDJyk7XG5cblBvcGNvcm5OYXRpdmUub25TdGF0dXNNZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gIGlmIChQb3Bjb3JuTmF0aXZlLmNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcobWVzc2FnZSk7XG5cbiAgaWYgKG1lc3NhZ2UudHlwZS5zdGFydHNXaXRoKHByZWZpeGVzLnF1aWNrQ3NzKSkgaGFuZGxlUXVpY2tDc3NNZXNzYWdlcyhtZXNzYWdlKTtcbn0pO1xuXG5jbGFzcyBJUEMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubWVzc2FnZUhhbmRsZXIpO1xuICB9XG5cbiAgbWVzc2FnZUhhbmRsZXIoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgIGlmICghKGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmIGV2ZW50LmRhdGEuc3RhcnRzV2l0aChwcmVmaXhlcy5tYWluKSkpIHJldHVybjtcblxuICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xuICAgICAgY2FzZSBSRU5ERVJFUi5zdG9wOiB7XG4gICAgICAgIHJlbmRlcmVyLnN0b3AoKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubWVzc2FnZUhhbmRsZXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElQQztcbiIsICIvLyBHZXRzIGFsbCBub24tYnVpbHRpbiBwcm9wZXJ0aWVzIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5jb25zdCBnZXRBbGxQcm9wZXJ0aWVzID0gb2JqZWN0ID0+IHtcblx0Y29uc3QgcHJvcGVydGllcyA9IG5ldyBTZXQoKTtcblxuXHRkbyB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkpIHtcblx0XHRcdHByb3BlcnRpZXMuYWRkKFtvYmplY3QsIGtleV0pO1xuXHRcdH1cblx0fSB3aGlsZSAoKG9iamVjdCA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSkgJiYgb2JqZWN0ICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuXHRyZXR1cm4gcHJvcGVydGllcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9CaW5kKHNlbGYsIHtpbmNsdWRlLCBleGNsdWRlfSA9IHt9KSB7XG5cdGNvbnN0IGZpbHRlciA9IGtleSA9PiB7XG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+IHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyA/IGtleSA9PT0gcGF0dGVybiA6IHBhdHRlcm4udGVzdChrZXkpO1xuXG5cdFx0aWYgKGluY2x1ZGUpIHtcblx0XHRcdHJldHVybiBpbmNsdWRlLnNvbWUobWF0Y2gpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHVuaWNvcm4vbm8tYXJyYXktY2FsbGJhY2stcmVmZXJlbmNlXG5cdFx0fVxuXG5cdFx0aWYgKGV4Y2x1ZGUpIHtcblx0XHRcdHJldHVybiAhZXhjbHVkZS5zb21lKG1hdGNoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgW29iamVjdCwga2V5XSBvZiBnZXRBbGxQcm9wZXJ0aWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuXHRcdGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgfHwgIWZpbHRlcihrZXkpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuXHRcdGlmIChkZXNjcmlwdG9yICYmIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRzZWxmW2tleV0gPSBzZWxmW2tleV0uYmluZChzZWxmKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2VsZjtcbn1cbiIsICIvLyEgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0NzQ5ODczLzE0NTkxNzM3XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG4vLyBUT0RPOiBIYXZlIGFuIGFjY3VyYXRlIHJldHVybiB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIGlmICghc291cmNlcy5sZW5ndGgpXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaztcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKVxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBlbTJweChlbSwgYmFzZSkge1xuICAgIGJhc2UgPz89IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBweCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShiYXNlKS5mb250U2l6ZSk7XG4gICAgcmV0dXJuIGVtICogcHg7XG59XG5leHBvcnQgeyBlbTJweCBhcyByZW0ycHggfTtcbiIsICJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJRChsZW5ndGggPSA4KSB7XG4gICAgcmV0dXJuIFsuLi5BcnJheShsZW5ndGgpXS5tYXAoKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNilbMl0pLmpvaW4oJycpO1xufVxuIiwgImZ1bmN0aW9uIHQodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzFdfWZ1bmN0aW9uIGUodCl7cmV0dXJuXCJ5XCI9PT10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwifWZ1bmN0aW9uIG4odCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzBdfWZ1bmN0aW9uIG8odCl7cmV0dXJuW1widG9wXCIsXCJib3R0b21cIl0uaW5jbHVkZXMobih0KSk/XCJ4XCI6XCJ5XCJ9ZnVuY3Rpb24gaShpLHIsYSl7bGV0e3JlZmVyZW5jZTpsLGZsb2F0aW5nOnN9PWk7Y29uc3QgYz1sLngrbC53aWR0aC8yLXMud2lkdGgvMixmPWwueStsLmhlaWdodC8yLXMuaGVpZ2h0LzIsbT1vKHIpLHU9ZShtKSxnPWxbdV0vMi1zW3VdLzIsZD1cInhcIj09PW07bGV0IHA7c3dpdGNoKG4ocikpe2Nhc2VcInRvcFwiOnA9e3g6Yyx5OmwueS1zLmhlaWdodH07YnJlYWs7Y2FzZVwiYm90dG9tXCI6cD17eDpjLHk6bC55K2wuaGVpZ2h0fTticmVhaztjYXNlXCJyaWdodFwiOnA9e3g6bC54K2wud2lkdGgseTpmfTticmVhaztjYXNlXCJsZWZ0XCI6cD17eDpsLngtcy53aWR0aCx5OmZ9O2JyZWFrO2RlZmF1bHQ6cD17eDpsLngseTpsLnl9fXN3aXRjaCh0KHIpKXtjYXNlXCJzdGFydFwiOnBbbV0tPWcqKGEmJmQ/LTE6MSk7YnJlYWs7Y2FzZVwiZW5kXCI6cFttXSs9ZyooYSYmZD8tMToxKX1yZXR1cm4gcH1jb25zdCByPWFzeW5jKHQsZSxuKT0+e2NvbnN0e3BsYWNlbWVudDpvPVwiYm90dG9tXCIsc3RyYXRlZ3k6cj1cImFic29sdXRlXCIsbWlkZGxld2FyZTphPVtdLHBsYXRmb3JtOmx9PW4scz1hLmZpbHRlcihCb29sZWFuKSxjPWF3YWl0KG51bGw9PWwuaXNSVEw/dm9pZCAwOmwuaXNSVEwoZSkpO2xldCBmPWF3YWl0IGwuZ2V0RWxlbWVudFJlY3RzKHtyZWZlcmVuY2U6dCxmbG9hdGluZzplLHN0cmF0ZWd5OnJ9KSx7eDptLHk6dX09aShmLG8sYyksZz1vLGQ9e30scD0wO2ZvcihsZXQgbj0wO248cy5sZW5ndGg7bisrKXtjb25zdHtuYW1lOmEsZm46aH09c1tuXSx7eDp5LHk6eCxkYXRhOncscmVzZXQ6dn09YXdhaXQgaCh7eDptLHk6dSxpbml0aWFsUGxhY2VtZW50Om8scGxhY2VtZW50Omcsc3RyYXRlZ3k6cixtaWRkbGV3YXJlRGF0YTpkLHJlY3RzOmYscGxhdGZvcm06bCxlbGVtZW50czp7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZX19KTttPW51bGwhPXk/eTptLHU9bnVsbCE9eD94OnUsZD17Li4uZCxbYV06ey4uLmRbYV0sLi4ud319LHYmJnA8PTUwJiYocCsrLFwib2JqZWN0XCI9PXR5cGVvZiB2JiYodi5wbGFjZW1lbnQmJihnPXYucGxhY2VtZW50KSx2LnJlY3RzJiYoZj0hMD09PXYucmVjdHM/YXdhaXQgbC5nZXRFbGVtZW50UmVjdHMoe3JlZmVyZW5jZTp0LGZsb2F0aW5nOmUsc3RyYXRlZ3k6cn0pOnYucmVjdHMpLCh7eDptLHk6dX09aShmLGcsYykpKSxuPS0xKX1yZXR1cm57eDptLHk6dSxwbGFjZW1lbnQ6ZyxzdHJhdGVneTpyLG1pZGRsZXdhcmVEYXRhOmR9fTtmdW5jdGlvbiBhKHQsZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KGUpOnR9ZnVuY3Rpb24gbCh0KXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgdD9mdW5jdGlvbih0KXtyZXR1cm57dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjAsLi4udH19KHQpOnt0b3A6dCxyaWdodDp0LGJvdHRvbTp0LGxlZnQ6dH19ZnVuY3Rpb24gcyh0KXtyZXR1cm57Li4udCx0b3A6dC55LGxlZnQ6dC54LHJpZ2h0OnQueCt0LndpZHRoLGJvdHRvbTp0LnkrdC5oZWlnaHR9fWFzeW5jIGZ1bmN0aW9uIGModCxlKXt2YXIgbjt2b2lkIDA9PT1lJiYoZT17fSk7Y29uc3R7eDpvLHk6aSxwbGF0Zm9ybTpyLHJlY3RzOmMsZWxlbWVudHM6ZixzdHJhdGVneTptfT10LHtib3VuZGFyeTp1PVwiY2xpcHBpbmdBbmNlc3RvcnNcIixyb290Qm91bmRhcnk6Zz1cInZpZXdwb3J0XCIsZWxlbWVudENvbnRleHQ6ZD1cImZsb2F0aW5nXCIsYWx0Qm91bmRhcnk6cD0hMSxwYWRkaW5nOmg9MH09YShlLHQpLHk9bChoKSx4PWZbcD9cImZsb2F0aW5nXCI9PT1kP1wicmVmZXJlbmNlXCI6XCJmbG9hdGluZ1wiOmRdLHc9cyhhd2FpdCByLmdldENsaXBwaW5nUmVjdCh7ZWxlbWVudDpudWxsPT0obj1hd2FpdChudWxsPT1yLmlzRWxlbWVudD92b2lkIDA6ci5pc0VsZW1lbnQoeCkpKXx8bj94OnguY29udGV4dEVsZW1lbnR8fGF3YWl0KG51bGw9PXIuZ2V0RG9jdW1lbnRFbGVtZW50P3ZvaWQgMDpyLmdldERvY3VtZW50RWxlbWVudChmLmZsb2F0aW5nKSksYm91bmRhcnk6dSxyb290Qm91bmRhcnk6ZyxzdHJhdGVneTptfSkpLHY9XCJmbG9hdGluZ1wiPT09ZD97Li4uYy5mbG9hdGluZyx4Om8seTppfTpjLnJlZmVyZW5jZSxiPWF3YWl0KG51bGw9PXIuZ2V0T2Zmc2V0UGFyZW50P3ZvaWQgMDpyLmdldE9mZnNldFBhcmVudChmLmZsb2F0aW5nKSksQT1hd2FpdChudWxsPT1yLmlzRWxlbWVudD92b2lkIDA6ci5pc0VsZW1lbnQoYikpJiZhd2FpdChudWxsPT1yLmdldFNjYWxlP3ZvaWQgMDpyLmdldFNjYWxlKGIpKXx8e3g6MSx5OjF9LFI9cyhyLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0P2F3YWl0IHIuY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Qoe3JlY3Q6dixvZmZzZXRQYXJlbnQ6YixzdHJhdGVneTptfSk6dik7cmV0dXJue3RvcDoody50b3AtUi50b3AreS50b3ApL0EueSxib3R0b206KFIuYm90dG9tLXcuYm90dG9tK3kuYm90dG9tKS9BLnksbGVmdDoody5sZWZ0LVIubGVmdCt5LmxlZnQpL0EueCxyaWdodDooUi5yaWdodC13LnJpZ2h0K3kucmlnaHQpL0EueH19Y29uc3QgZj1NYXRoLm1pbixtPU1hdGgubWF4O2Z1bmN0aW9uIHUodCxlLG4pe3JldHVybiBtKHQsZihlLG4pKX1jb25zdCBnPW49Pih7bmFtZTpcImFycm93XCIsb3B0aW9uczpuLGFzeW5jIGZuKGkpe2NvbnN0e3g6cix5OnMscGxhY2VtZW50OmMscmVjdHM6bSxwbGF0Zm9ybTpnLGVsZW1lbnRzOmR9PWkse2VsZW1lbnQ6cCxwYWRkaW5nOmg9MH09YShuLGkpfHx7fTtpZihudWxsPT1wKXJldHVybnt9O2NvbnN0IHk9bChoKSx4PXt4OnIseTpzfSx3PW8oYyksdj1lKHcpLGI9YXdhaXQgZy5nZXREaW1lbnNpb25zKHApLEE9XCJ5XCI9PT13LFI9QT9cInRvcFwiOlwibGVmdFwiLFA9QT9cImJvdHRvbVwiOlwicmlnaHRcIixFPUE/XCJjbGllbnRIZWlnaHRcIjpcImNsaWVudFdpZHRoXCIsVD1tLnJlZmVyZW5jZVt2XSttLnJlZmVyZW5jZVt3XS14W3ddLW0uZmxvYXRpbmdbdl0sRD14W3ddLW0ucmVmZXJlbmNlW3ddLEw9YXdhaXQobnVsbD09Zy5nZXRPZmZzZXRQYXJlbnQ/dm9pZCAwOmcuZ2V0T2Zmc2V0UGFyZW50KHApKTtsZXQgaz1MP0xbRV06MDtrJiZhd2FpdChudWxsPT1nLmlzRWxlbWVudD92b2lkIDA6Zy5pc0VsZW1lbnQoTCkpfHwoaz1kLmZsb2F0aW5nW0VdfHxtLmZsb2F0aW5nW3ZdKTtjb25zdCBPPVQvMi1ELzIsQj1rLzItYlt2XS8yLTEsQz1mKHlbUl0sQiksSD1mKHlbUF0sQiksUz1DLEY9ay1iW3ZdLUgsTT1rLzItYlt2XS8yK08sVj11KFMsTSxGKSxXPW51bGwhPXQoYykmJk0hPVYmJm0ucmVmZXJlbmNlW3ZdLzItKE08Uz9DOkgpLWJbdl0vMjwwP008Uz9TLU06Ri1NOjA7cmV0dXJue1t3XTp4W3ddLVcsZGF0YTp7W3ddOlYsY2VudGVyT2Zmc2V0Ok0tVitXfX19fSksZD1bXCJ0b3BcIixcInJpZ2h0XCIsXCJib3R0b21cIixcImxlZnRcIl0scD1kLnJlZHVjZSgoKHQsZSk9PnQuY29uY2F0KGUsZStcIi1zdGFydFwiLGUrXCItZW5kXCIpKSxbXSksaD17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsYm90dG9tOlwidG9wXCIsdG9wOlwiYm90dG9tXCJ9O2Z1bmN0aW9uIHkodCl7cmV0dXJuIHQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csKHQ9PmhbdF0pKX1mdW5jdGlvbiB4KG4saSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7Y29uc3QgYT10KG4pLGw9byhuKSxzPWUobCk7bGV0IGM9XCJ4XCI9PT1sP2E9PT0ocj9cImVuZFwiOlwic3RhcnRcIik/XCJyaWdodFwiOlwibGVmdFwiOlwic3RhcnRcIj09PWE/XCJib3R0b21cIjpcInRvcFwiO3JldHVybiBpLnJlZmVyZW5jZVtzXT5pLmZsb2F0aW5nW3NdJiYoYz15KGMpKSx7bWFpbjpjLGNyb3NzOnkoYyl9fWNvbnN0IHc9e3N0YXJ0OlwiZW5kXCIsZW5kOlwic3RhcnRcIn07ZnVuY3Rpb24gdih0KXtyZXR1cm4gdC5yZXBsYWNlKC9zdGFydHxlbmQvZywodD0+d1t0XSkpfWNvbnN0IGI9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXt9KSx7bmFtZTpcImF1dG9QbGFjZW1lbnRcIixvcHRpb25zOmUsYXN5bmMgZm4obyl7dmFyIGkscixsO2NvbnN0e3JlY3RzOnMsbWlkZGxld2FyZURhdGE6ZixwbGFjZW1lbnQ6bSxwbGF0Zm9ybTp1LGVsZW1lbnRzOmd9PW8se2Nyb3NzQXhpczpkPSExLGFsaWdubWVudDpoLGFsbG93ZWRQbGFjZW1lbnRzOnk9cCxhdXRvQWxpZ25tZW50Onc9ITAsLi4uYn09YShlLG8pLEE9dm9pZCAwIT09aHx8eT09PXA/ZnVuY3Rpb24oZSxvLGkpe3JldHVybihlP1suLi5pLmZpbHRlcigobj0+dChuKT09PWUpKSwuLi5pLmZpbHRlcigobj0+dChuKSE9PWUpKV06aS5maWx0ZXIoKHQ9Pm4odCk9PT10KSkpLmZpbHRlcigobj0+IWV8fHQobik9PT1lfHwhIW8mJnYobikhPT1uKSl9KGh8fG51bGwsdyx5KTp5LFI9YXdhaXQgYyhvLGIpLFA9KG51bGw9PShpPWYuYXV0b1BsYWNlbWVudCk/dm9pZCAwOmkuaW5kZXgpfHwwLEU9QVtQXTtpZihudWxsPT1FKXJldHVybnt9O2NvbnN0e21haW46VCxjcm9zczpEfT14KEUscyxhd2FpdChudWxsPT11LmlzUlRMP3ZvaWQgMDp1LmlzUlRMKGcuZmxvYXRpbmcpKSk7aWYobSE9PUUpcmV0dXJue3Jlc2V0OntwbGFjZW1lbnQ6QVswXX19O2NvbnN0IEw9W1JbbihFKV0sUltUXSxSW0RdXSxrPVsuLi4obnVsbD09KHI9Zi5hdXRvUGxhY2VtZW50KT92b2lkIDA6ci5vdmVyZmxvd3MpfHxbXSx7cGxhY2VtZW50OkUsb3ZlcmZsb3dzOkx9XSxPPUFbUCsxXTtpZihPKXJldHVybntkYXRhOntpbmRleDpQKzEsb3ZlcmZsb3dzOmt9LHJlc2V0OntwbGFjZW1lbnQ6T319O2NvbnN0IEI9ay5tYXAoKGU9Pntjb25zdCBuPXQoZS5wbGFjZW1lbnQpO3JldHVybltlLnBsYWNlbWVudCxuJiZkP2Uub3ZlcmZsb3dzLnNsaWNlKDAsMikucmVkdWNlKCgodCxlKT0+dCtlKSwwKTplLm92ZXJmbG93c1swXSxlLm92ZXJmbG93c119KSkuc29ydCgoKHQsZSk9PnRbMV0tZVsxXSkpLEM9KG51bGw9PShsPUIuZmlsdGVyKChlPT5lWzJdLnNsaWNlKDAsdChlWzBdKT8yOjMpLmV2ZXJ5KCh0PT50PD0wKSkpKVswXSk/dm9pZCAwOmxbMF0pfHxCWzBdWzBdO3JldHVybiBDIT09bT97ZGF0YTp7aW5kZXg6UCsxLG92ZXJmbG93czprfSxyZXNldDp7cGxhY2VtZW50OkN9fTp7fX19fTtjb25zdCBBPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT17fSkse25hbWU6XCJmbGlwXCIsb3B0aW9uczplLGFzeW5jIGZuKG8pe3ZhciBpO2NvbnN0e3BsYWNlbWVudDpyLG1pZGRsZXdhcmVEYXRhOmwscmVjdHM6cyxpbml0aWFsUGxhY2VtZW50OmYscGxhdGZvcm06bSxlbGVtZW50czp1fT1vLHttYWluQXhpczpnPSEwLGNyb3NzQXhpczpkPSEwLGZhbGxiYWNrUGxhY2VtZW50czpwLGZhbGxiYWNrU3RyYXRlZ3k6aD1cImJlc3RGaXRcIixmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uOnc9XCJub25lXCIsZmxpcEFsaWdubWVudDpiPSEwLC4uLkF9PWEoZSxvKSxSPW4ociksUD1uKGYpPT09ZixFPWF3YWl0KG51bGw9PW0uaXNSVEw/dm9pZCAwOm0uaXNSVEwodS5mbG9hdGluZykpLFQ9cHx8KFB8fCFiP1t5KGYpXTpmdW5jdGlvbih0KXtjb25zdCBlPXkodCk7cmV0dXJuW3YodCksZSx2KGUpXX0oZikpO3B8fFwibm9uZVwiPT09d3x8VC5wdXNoKC4uLmZ1bmN0aW9uKGUsbyxpLHIpe2NvbnN0IGE9dChlKTtsZXQgbD1mdW5jdGlvbih0LGUsbil7Y29uc3Qgbz1bXCJsZWZ0XCIsXCJyaWdodFwiXSxpPVtcInJpZ2h0XCIsXCJsZWZ0XCJdLHI9W1widG9wXCIsXCJib3R0b21cIl0sYT1bXCJib3R0b21cIixcInRvcFwiXTtzd2l0Y2godCl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6cmV0dXJuIG4/ZT9pOm86ZT9vOmk7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6cmV0dXJuIGU/cjphO2RlZmF1bHQ6cmV0dXJuW119fShuKGUpLFwic3RhcnRcIj09PWkscik7cmV0dXJuIGEmJihsPWwubWFwKCh0PT50K1wiLVwiK2EpKSxvJiYobD1sLmNvbmNhdChsLm1hcCh2KSkpKSxsfShmLGIsdyxFKSk7Y29uc3QgRD1bZiwuLi5UXSxMPWF3YWl0IGMobyxBKSxrPVtdO2xldCBPPShudWxsPT0oaT1sLmZsaXApP3ZvaWQgMDppLm92ZXJmbG93cyl8fFtdO2lmKGcmJmsucHVzaChMW1JdKSxkKXtjb25zdHttYWluOnQsY3Jvc3M6ZX09eChyLHMsRSk7ay5wdXNoKExbdF0sTFtlXSl9aWYoTz1bLi4uTyx7cGxhY2VtZW50OnIsb3ZlcmZsb3dzOmt9XSwhay5ldmVyeSgodD0+dDw9MCkpKXt2YXIgQixDO2NvbnN0IHQ9KChudWxsPT0oQj1sLmZsaXApP3ZvaWQgMDpCLmluZGV4KXx8MCkrMSxlPURbdF07aWYoZSlyZXR1cm57ZGF0YTp7aW5kZXg6dCxvdmVyZmxvd3M6T30scmVzZXQ6e3BsYWNlbWVudDplfX07bGV0IG49bnVsbD09KEM9Ty5maWx0ZXIoKHQ9PnQub3ZlcmZsb3dzWzBdPD0wKSkuc29ydCgoKHQsZSk9PnQub3ZlcmZsb3dzWzFdLWUub3ZlcmZsb3dzWzFdKSlbMF0pP3ZvaWQgMDpDLnBsYWNlbWVudDtpZighbilzd2l0Y2goaCl7Y2FzZVwiYmVzdEZpdFwiOnt2YXIgSDtjb25zdCB0PW51bGw9PShIPU8ubWFwKCh0PT5bdC5wbGFjZW1lbnQsdC5vdmVyZmxvd3MuZmlsdGVyKCh0PT50PjApKS5yZWR1Y2UoKCh0LGUpPT50K2UpLDApXSkpLnNvcnQoKCh0LGUpPT50WzFdLWVbMV0pKVswXSk/dm9pZCAwOkhbMF07dCYmKG49dCk7YnJlYWt9Y2FzZVwiaW5pdGlhbFBsYWNlbWVudFwiOm49Zn1pZihyIT09bilyZXR1cm57cmVzZXQ6e3BsYWNlbWVudDpufX19cmV0dXJue319fX07ZnVuY3Rpb24gUih0LGUpe3JldHVybnt0b3A6dC50b3AtZS5oZWlnaHQscmlnaHQ6dC5yaWdodC1lLndpZHRoLGJvdHRvbTp0LmJvdHRvbS1lLmhlaWdodCxsZWZ0OnQubGVmdC1lLndpZHRofX1mdW5jdGlvbiBQKHQpe3JldHVybiBkLnNvbWUoKGU9PnRbZV0+PTApKX1jb25zdCBFPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD17fSkse25hbWU6XCJoaWRlXCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe2NvbnN0e3JlY3RzOm59PWUse3N0cmF0ZWd5Om89XCJyZWZlcmVuY2VIaWRkZW5cIiwuLi5pfT1hKHQsZSk7c3dpdGNoKG8pe2Nhc2VcInJlZmVyZW5jZUhpZGRlblwiOntjb25zdCB0PVIoYXdhaXQgYyhlLHsuLi5pLGVsZW1lbnRDb250ZXh0OlwicmVmZXJlbmNlXCJ9KSxuLnJlZmVyZW5jZSk7cmV0dXJue2RhdGE6e3JlZmVyZW5jZUhpZGRlbk9mZnNldHM6dCxyZWZlcmVuY2VIaWRkZW46UCh0KX19fWNhc2VcImVzY2FwZWRcIjp7Y29uc3QgdD1SKGF3YWl0IGMoZSx7Li4uaSxhbHRCb3VuZGFyeTohMH0pLG4uZmxvYXRpbmcpO3JldHVybntkYXRhOntlc2NhcGVkT2Zmc2V0czp0LGVzY2FwZWQ6UCh0KX19fWRlZmF1bHQ6cmV0dXJue319fX19O2Z1bmN0aW9uIFQodCl7Y29uc3QgZT1mKC4uLnQubWFwKCh0PT50LmxlZnQpKSksbj1mKC4uLnQubWFwKCh0PT50LnRvcCkpKTtyZXR1cm57eDplLHk6bix3aWR0aDptKC4uLnQubWFwKCh0PT50LnJpZ2h0KSkpLWUsaGVpZ2h0Om0oLi4udC5tYXAoKHQ9PnQuYm90dG9tKSkpLW59fWNvbnN0IEQ9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSx7bmFtZTpcImlubGluZVwiLG9wdGlvbnM6dCxhc3luYyBmbihlKXtjb25zdHtwbGFjZW1lbnQ6aSxlbGVtZW50czpyLHJlY3RzOmMscGxhdGZvcm06dSxzdHJhdGVneTpnfT1lLHtwYWRkaW5nOmQ9Mix4OnAseTpofT1hKHQsZSkseT1BcnJheS5mcm9tKGF3YWl0KG51bGw9PXUuZ2V0Q2xpZW50UmVjdHM/dm9pZCAwOnUuZ2V0Q2xpZW50UmVjdHMoci5yZWZlcmVuY2UpKXx8W10pLHg9ZnVuY3Rpb24odCl7Y29uc3QgZT10LnNsaWNlKCkuc29ydCgoKHQsZSk9PnQueS1lLnkpKSxuPVtdO2xldCBvPW51bGw7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDt0Kyspe2NvbnN0IGk9ZVt0XTshb3x8aS55LW8ueT5vLmhlaWdodC8yP24ucHVzaChbaV0pOm5bbi5sZW5ndGgtMV0ucHVzaChpKSxvPWl9cmV0dXJuIG4ubWFwKCh0PT5zKFQodCkpKSl9KHkpLHc9cyhUKHkpKSx2PWwoZCk7Y29uc3QgYj1hd2FpdCB1LmdldEVsZW1lbnRSZWN0cyh7cmVmZXJlbmNlOntnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ZnVuY3Rpb24oKXtpZigyPT09eC5sZW5ndGgmJnhbMF0ubGVmdD54WzFdLnJpZ2h0JiZudWxsIT1wJiZudWxsIT1oKXJldHVybiB4LmZpbmQoKHQ9PnA+dC5sZWZ0LXYubGVmdCYmcDx0LnJpZ2h0K3YucmlnaHQmJmg+dC50b3Atdi50b3AmJmg8dC5ib3R0b20rdi5ib3R0b20pKXx8dztpZih4Lmxlbmd0aD49Mil7aWYoXCJ4XCI9PT1vKGkpKXtjb25zdCB0PXhbMF0sZT14W3gubGVuZ3RoLTFdLG89XCJ0b3BcIj09PW4oaSkscj10LnRvcCxhPWUuYm90dG9tLGw9bz90LmxlZnQ6ZS5sZWZ0LHM9bz90LnJpZ2h0OmUucmlnaHQ7cmV0dXJue3RvcDpyLGJvdHRvbTphLGxlZnQ6bCxyaWdodDpzLHdpZHRoOnMtbCxoZWlnaHQ6YS1yLHg6bCx5OnJ9fWNvbnN0IHQ9XCJsZWZ0XCI9PT1uKGkpLGU9bSguLi54Lm1hcCgodD0+dC5yaWdodCkpKSxyPWYoLi4ueC5tYXAoKHQ9PnQubGVmdCkpKSxhPXguZmlsdGVyKChuPT50P24ubGVmdD09PXI6bi5yaWdodD09PWUpKSxsPWFbMF0udG9wLHM9YVthLmxlbmd0aC0xXS5ib3R0b207cmV0dXJue3RvcDpsLGJvdHRvbTpzLGxlZnQ6cixyaWdodDplLHdpZHRoOmUtcixoZWlnaHQ6cy1sLHg6cix5Omx9fXJldHVybiB3fX0sZmxvYXRpbmc6ci5mbG9hdGluZyxzdHJhdGVneTpnfSk7cmV0dXJuIGMucmVmZXJlbmNlLnghPT1iLnJlZmVyZW5jZS54fHxjLnJlZmVyZW5jZS55IT09Yi5yZWZlcmVuY2UueXx8Yy5yZWZlcmVuY2Uud2lkdGghPT1iLnJlZmVyZW5jZS53aWR0aHx8Yy5yZWZlcmVuY2UuaGVpZ2h0IT09Yi5yZWZlcmVuY2UuaGVpZ2h0P3tyZXNldDp7cmVjdHM6Yn19Ont9fX19O2NvbnN0IEw9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHtuYW1lOlwib2Zmc2V0XCIsb3B0aW9uczplLGFzeW5jIGZuKGkpe2NvbnN0e3g6cix5Omx9PWkscz1hd2FpdCBhc3luYyBmdW5jdGlvbihlLGkpe2NvbnN0e3BsYWNlbWVudDpyLHBsYXRmb3JtOmwsZWxlbWVudHM6c309ZSxjPWF3YWl0KG51bGw9PWwuaXNSVEw/dm9pZCAwOmwuaXNSVEwocy5mbG9hdGluZykpLGY9bihyKSxtPXQociksdT1cInhcIj09PW8ociksZz1bXCJsZWZ0XCIsXCJ0b3BcIl0uaW5jbHVkZXMoZik/LTE6MSxkPWMmJnU/LTE6MSxwPWEoaSxlKTtsZXR7bWFpbkF4aXM6aCxjcm9zc0F4aXM6eSxhbGlnbm1lbnRBeGlzOnh9PVwibnVtYmVyXCI9PXR5cGVvZiBwP3ttYWluQXhpczpwLGNyb3NzQXhpczowLGFsaWdubWVudEF4aXM6bnVsbH06e21haW5BeGlzOjAsY3Jvc3NBeGlzOjAsYWxpZ25tZW50QXhpczpudWxsLC4uLnB9O3JldHVybiBtJiZcIm51bWJlclwiPT10eXBlb2YgeCYmKHk9XCJlbmRcIj09PW0/LTEqeDp4KSx1P3t4OnkqZCx5OmgqZ306e3g6aCpnLHk6eSpkfX0oaSxlKTtyZXR1cm57eDpyK3MueCx5Omwrcy55LGRhdGE6c319fX07ZnVuY3Rpb24gayh0KXtyZXR1cm5cInhcIj09PXQ/XCJ5XCI6XCJ4XCJ9Y29uc3QgTz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9e30pLHtuYW1lOlwic2hpZnRcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7Y29uc3R7eDppLHk6cixwbGFjZW1lbnQ6bH09ZSx7bWFpbkF4aXM6cz0hMCxjcm9zc0F4aXM6Zj0hMSxsaW1pdGVyOm09e2ZuOnQ9PntsZXR7eDplLHk6bn09dDtyZXR1cm57eDplLHk6bn19fSwuLi5nfT1hKHQsZSksZD17eDppLHk6cn0scD1hd2FpdCBjKGUsZyksaD1vKG4obCkpLHk9ayhoKTtsZXQgeD1kW2hdLHc9ZFt5XTtpZihzKXtjb25zdCB0PVwieVwiPT09aD9cImJvdHRvbVwiOlwicmlnaHRcIjt4PXUoeCtwW1wieVwiPT09aD9cInRvcFwiOlwibGVmdFwiXSx4LHgtcFt0XSl9aWYoZil7Y29uc3QgdD1cInlcIj09PXk/XCJib3R0b21cIjpcInJpZ2h0XCI7dz11KHcrcFtcInlcIj09PXk/XCJ0b3BcIjpcImxlZnRcIl0sdyx3LXBbdF0pfWNvbnN0IHY9bS5mbih7Li4uZSxbaF06eCxbeV06d30pO3JldHVybnsuLi52LGRhdGE6e3g6di54LWkseTp2Lnktcn19fX19LEI9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSx7b3B0aW9uczp0LGZuKGUpe2NvbnN0e3g6aSx5OnIscGxhY2VtZW50OmwscmVjdHM6cyxtaWRkbGV3YXJlRGF0YTpjfT1lLHtvZmZzZXQ6Zj0wLG1haW5BeGlzOm09ITAsY3Jvc3NBeGlzOnU9ITB9PWEodCxlKSxnPXt4OmkseTpyfSxkPW8obCkscD1rKGQpO2xldCBoPWdbZF0seT1nW3BdO2NvbnN0IHg9YShmLGUpLHc9XCJudW1iZXJcIj09dHlwZW9mIHg/e21haW5BeGlzOngsY3Jvc3NBeGlzOjB9OnttYWluQXhpczowLGNyb3NzQXhpczowLC4uLnh9O2lmKG0pe2NvbnN0IHQ9XCJ5XCI9PT1kP1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLGU9cy5yZWZlcmVuY2VbZF0tcy5mbG9hdGluZ1t0XSt3Lm1haW5BeGlzLG49cy5yZWZlcmVuY2VbZF0rcy5yZWZlcmVuY2VbdF0tdy5tYWluQXhpcztoPGU/aD1lOmg+biYmKGg9bil9aWYodSl7dmFyIHYsYjtjb25zdCB0PVwieVwiPT09ZD9cIndpZHRoXCI6XCJoZWlnaHRcIixlPVtcInRvcFwiLFwibGVmdFwiXS5pbmNsdWRlcyhuKGwpKSxvPXMucmVmZXJlbmNlW3BdLXMuZmxvYXRpbmdbdF0rKGUmJihudWxsPT0odj1jLm9mZnNldCk/dm9pZCAwOnZbcF0pfHwwKSsoZT8wOncuY3Jvc3NBeGlzKSxpPXMucmVmZXJlbmNlW3BdK3MucmVmZXJlbmNlW3RdKyhlPzA6KG51bGw9PShiPWMub2Zmc2V0KT92b2lkIDA6YltwXSl8fDApLShlP3cuY3Jvc3NBeGlzOjApO3k8bz95PW86eT5pJiYoeT1pKX1yZXR1cm57W2RdOmgsW3BdOnl9fX19LEM9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXt9KSx7bmFtZTpcInNpemVcIixvcHRpb25zOmUsYXN5bmMgZm4oaSl7Y29uc3R7cGxhY2VtZW50OnIscmVjdHM6bCxwbGF0Zm9ybTpzLGVsZW1lbnRzOnV9PWkse2FwcGx5Omc9KCgpPT57fSksLi4uZH09YShlLGkpLHA9YXdhaXQgYyhpLGQpLGg9bihyKSx5PXQocikseD1cInhcIj09PW8ocikse3dpZHRoOncsaGVpZ2h0OnZ9PWwuZmxvYXRpbmc7bGV0IGIsQTtcInRvcFwiPT09aHx8XCJib3R0b21cIj09PWg/KGI9aCxBPXk9PT0oYXdhaXQobnVsbD09cy5pc1JUTD92b2lkIDA6cy5pc1JUTCh1LmZsb2F0aW5nKSk/XCJzdGFydFwiOlwiZW5kXCIpP1wibGVmdFwiOlwicmlnaHRcIik6KEE9aCxiPVwiZW5kXCI9PT15P1widG9wXCI6XCJib3R0b21cIik7Y29uc3QgUj12LXBbYl0sUD13LXBbQV0sRT0haS5taWRkbGV3YXJlRGF0YS5zaGlmdDtsZXQgVD1SLEQ9UDtpZih4KXtjb25zdCB0PXctcC5sZWZ0LXAucmlnaHQ7RD15fHxFP2YoUCx0KTp0fWVsc2V7Y29uc3QgdD12LXAudG9wLXAuYm90dG9tO1Q9eXx8RT9mKFIsdCk6dH1pZihFJiYheSl7Y29uc3QgdD1tKHAubGVmdCwwKSxlPW0ocC5yaWdodCwwKSxuPW0ocC50b3AsMCksbz1tKHAuYm90dG9tLDApO3g/RD13LTIqKDAhPT10fHwwIT09ZT90K2U6bShwLmxlZnQscC5yaWdodCkpOlQ9di0yKigwIT09bnx8MCE9PW8/bitvOm0ocC50b3AscC5ib3R0b20pKX1hd2FpdCBnKHsuLi5pLGF2YWlsYWJsZVdpZHRoOkQsYXZhaWxhYmxlSGVpZ2h0OlR9KTtjb25zdCBMPWF3YWl0IHMuZ2V0RGltZW5zaW9ucyh1LmZsb2F0aW5nKTtyZXR1cm4gdyE9PUwud2lkdGh8fHYhPT1MLmhlaWdodD97cmVzZXQ6e3JlY3RzOiEwfX06e319fX07ZXhwb3J0e2cgYXMgYXJyb3csYiBhcyBhdXRvUGxhY2VtZW50LHIgYXMgY29tcHV0ZVBvc2l0aW9uLGMgYXMgZGV0ZWN0T3ZlcmZsb3csQSBhcyBmbGlwLEUgYXMgaGlkZSxEIGFzIGlubGluZSxCIGFzIGxpbWl0U2hpZnQsTCBhcyBvZmZzZXQscyBhcyByZWN0VG9DbGllbnRSZWN0LE8gYXMgc2hpZnQsQyBhcyBzaXplfTtcbiIsICJpbXBvcnR7cmVjdFRvQ2xpZW50UmVjdCBhcyB0LGNvbXB1dGVQb3NpdGlvbiBhcyBlfWZyb21cIkBmbG9hdGluZy11aS9jb3JlXCI7ZXhwb3J0e2Fycm93LGF1dG9QbGFjZW1lbnQsZGV0ZWN0T3ZlcmZsb3csZmxpcCxoaWRlLGlubGluZSxsaW1pdFNoaWZ0LG9mZnNldCxzaGlmdCxzaXplfWZyb21cIkBmbG9hdGluZy11aS9jb3JlXCI7ZnVuY3Rpb24gbih0KXt2YXIgZTtyZXR1cm4obnVsbD09dHx8bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5kZWZhdWx0Vmlldyl8fHdpbmRvd31mdW5jdGlvbiBvKHQpe3JldHVybiBuKHQpLmdldENvbXB1dGVkU3R5bGUodCl9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG4odCkuTm9kZX1mdW5jdGlvbiByKHQpe3JldHVybiBpKHQpPyh0Lm5vZGVOYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpOlwiI2RvY3VtZW50XCJ9ZnVuY3Rpb24gYyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50fHx0IGluc3RhbmNlb2Ygbih0KS5IVE1MRWxlbWVudH1mdW5jdGlvbiBsKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTaGFkb3dSb290JiYodCBpbnN0YW5jZW9mIG4odCkuU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpfWZ1bmN0aW9uIHModCl7Y29uc3R7b3ZlcmZsb3c6ZSxvdmVyZmxvd1g6bixvdmVyZmxvd1k6aSxkaXNwbGF5OnJ9PW8odCk7cmV0dXJuL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3QoZStpK24pJiYhW1wiaW5saW5lXCIsXCJjb250ZW50c1wiXS5pbmNsdWRlcyhyKX1mdW5jdGlvbiBmKHQpe3JldHVybltcInRhYmxlXCIsXCJ0ZFwiLFwidGhcIl0uaW5jbHVkZXMocih0KSl9ZnVuY3Rpb24gdSh0KXtjb25zdCBlPWEoKSxuPW8odCk7cmV0dXJuXCJub25lXCIhPT1uLnRyYW5zZm9ybXx8XCJub25lXCIhPT1uLnBlcnNwZWN0aXZlfHwhIW4uY29udGFpbmVyVHlwZSYmXCJub3JtYWxcIiE9PW4uY29udGFpbmVyVHlwZXx8IWUmJiEhbi5iYWNrZHJvcEZpbHRlciYmXCJub25lXCIhPT1uLmJhY2tkcm9wRmlsdGVyfHwhZSYmISFuLmZpbHRlciYmXCJub25lXCIhPT1uLmZpbHRlcnx8W1widHJhbnNmb3JtXCIsXCJwZXJzcGVjdGl2ZVwiLFwiZmlsdGVyXCJdLnNvbWUoKHQ9PihuLndpbGxDaGFuZ2V8fFwiXCIpLmluY2x1ZGVzKHQpKSl8fFtcInBhaW50XCIsXCJsYXlvdXRcIixcInN0cmljdFwiLFwiY29udGVudFwiXS5zb21lKCh0PT4obi5jb250YWlufHxcIlwiKS5pbmNsdWRlcyh0KSkpfWZ1bmN0aW9uIGEoKXtyZXR1cm4hKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBDU1N8fCFDU1Muc3VwcG9ydHMpJiZDU1Muc3VwcG9ydHMoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiLFwibm9uZVwiKX1mdW5jdGlvbiBkKHQpe3JldHVybltcImh0bWxcIixcImJvZHlcIixcIiNkb2N1bWVudFwiXS5pbmNsdWRlcyhyKHQpKX1jb25zdCBoPU1hdGgubWluLHA9TWF0aC5tYXgsbT1NYXRoLnJvdW5kLGc9TWF0aC5mbG9vcix5PXQ9Pih7eDp0LHk6dH0pO2Z1bmN0aW9uIHcodCl7Y29uc3QgZT1vKHQpO2xldCBuPXBhcnNlRmxvYXQoZS53aWR0aCl8fDAsaT1wYXJzZUZsb2F0KGUuaGVpZ2h0KXx8MDtjb25zdCByPWModCksbD1yP3Qub2Zmc2V0V2lkdGg6bixzPXI/dC5vZmZzZXRIZWlnaHQ6aSxmPW0obikhPT1sfHxtKGkpIT09cztyZXR1cm4gZiYmKG49bCxpPXMpLHt3aWR0aDpuLGhlaWdodDppLCQ6Zn19ZnVuY3Rpb24geCh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBuKHQpLkVsZW1lbnR9ZnVuY3Rpb24gdih0KXtyZXR1cm4geCh0KT90OnQuY29udGV4dEVsZW1lbnR9ZnVuY3Rpb24gYih0KXtjb25zdCBlPXYodCk7aWYoIWMoZSkpcmV0dXJuIHkoMSk7Y29uc3Qgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHt3aWR0aDpvLGhlaWdodDppLCQ6cn09dyhlKTtsZXQgbD0ocj9tKG4ud2lkdGgpOm4ud2lkdGgpL28scz0ocj9tKG4uaGVpZ2h0KTpuLmhlaWdodCkvaTtyZXR1cm4gbCYmTnVtYmVyLmlzRmluaXRlKGwpfHwobD0xKSxzJiZOdW1iZXIuaXNGaW5pdGUocyl8fChzPTEpLHt4OmwseTpzfX1jb25zdCBMPXkoMCk7ZnVuY3Rpb24gVCh0KXtjb25zdCBlPW4odCk7cmV0dXJuIGEoKSYmZS52aXN1YWxWaWV3cG9ydD97eDplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQseTplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcH06TH1mdW5jdGlvbiBSKGUsbyxpLHIpe3ZvaWQgMD09PW8mJihvPSExKSx2b2lkIDA9PT1pJiYoaT0hMSk7Y29uc3QgYz1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGw9dihlKTtsZXQgcz15KDEpO28mJihyP3gocikmJihzPWIocikpOnM9YihlKSk7Y29uc3QgZj1mdW5jdGlvbih0LGUsbyl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSwhKCFvfHxlJiZvIT09bih0KSkmJmV9KGwsaSxyKT9UKGwpOnkoMCk7bGV0IHU9KGMubGVmdCtmLngpL3MueCxhPShjLnRvcCtmLnkpL3MueSxkPWMud2lkdGgvcy54LGg9Yy5oZWlnaHQvcy55O2lmKGwpe2NvbnN0IHQ9bihsKSxlPXImJngocik/bihyKTpyO2xldCBvPXQuZnJhbWVFbGVtZW50O2Zvcig7byYmciYmZSE9PXQ7KXtjb25zdCB0PWIobyksZT1vLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9Z2V0Q29tcHV0ZWRTdHlsZShvKSxyPWUubGVmdCsoby5jbGllbnRMZWZ0K3BhcnNlRmxvYXQoaS5wYWRkaW5nTGVmdCkpKnQueCxjPWUudG9wKyhvLmNsaWVudFRvcCtwYXJzZUZsb2F0KGkucGFkZGluZ1RvcCkpKnQueTt1Kj10LngsYSo9dC55LGQqPXQueCxoKj10LnksdSs9cixhKz1jLG89bihvKS5mcmFtZUVsZW1lbnR9fXJldHVybiB0KHt3aWR0aDpkLGhlaWdodDpoLHg6dSx5OmF9KX1mdW5jdGlvbiBFKHQpe3JldHVybiB4KHQpP3tzY3JvbGxMZWZ0OnQuc2Nyb2xsTGVmdCxzY3JvbGxUb3A6dC5zY3JvbGxUb3B9OntzY3JvbGxMZWZ0OnQucGFnZVhPZmZzZXQsc2Nyb2xsVG9wOnQucGFnZVlPZmZzZXR9fWZ1bmN0aW9uIFModCl7dmFyIGU7cmV0dXJuIG51bGw9PShlPShpKHQpP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50KXx8d2luZG93LmRvY3VtZW50KT92b2lkIDA6ZS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gQyh0KXtyZXR1cm4gUihTKHQpKS5sZWZ0K0UodCkuc2Nyb2xsTGVmdH1mdW5jdGlvbiBGKHQpe2lmKFwiaHRtbFwiPT09cih0KSlyZXR1cm4gdDtjb25zdCBlPXQuYXNzaWduZWRTbG90fHx0LnBhcmVudE5vZGV8fGwodCkmJnQuaG9zdHx8Uyh0KTtyZXR1cm4gbChlKT9lLmhvc3Q6ZX1mdW5jdGlvbiBPKHQpe2NvbnN0IGU9Rih0KTtyZXR1cm4gZChlKT90Lm93bmVyRG9jdW1lbnQ/dC5vd25lckRvY3VtZW50LmJvZHk6dC5ib2R5OmMoZSkmJnMoZSk/ZTpPKGUpfWZ1bmN0aW9uIEQodCxlKXt2YXIgbzt2b2lkIDA9PT1lJiYoZT1bXSk7Y29uc3QgaT1PKHQpLHI9aT09PShudWxsPT0obz10Lm93bmVyRG9jdW1lbnQpP3ZvaWQgMDpvLmJvZHkpLGM9bihpKTtyZXR1cm4gcj9lLmNvbmNhdChjLGMudmlzdWFsVmlld3BvcnR8fFtdLHMoaSk/aTpbXSk6ZS5jb25jYXQoaSxEKGkpKX1mdW5jdGlvbiBIKGUsaSxyKXtsZXQgbDtpZihcInZpZXdwb3J0XCI9PT1pKWw9ZnVuY3Rpb24odCxlKXtjb25zdCBvPW4odCksaT1TKHQpLHI9by52aXN1YWxWaWV3cG9ydDtsZXQgYz1pLmNsaWVudFdpZHRoLGw9aS5jbGllbnRIZWlnaHQscz0wLGY9MDtpZihyKXtjPXIud2lkdGgsbD1yLmhlaWdodDtjb25zdCB0PWEoKTsoIXR8fHQmJlwiZml4ZWRcIj09PWUpJiYocz1yLm9mZnNldExlZnQsZj1yLm9mZnNldFRvcCl9cmV0dXJue3dpZHRoOmMsaGVpZ2h0OmwseDpzLHk6Zn19KGUscik7ZWxzZSBpZihcImRvY3VtZW50XCI9PT1pKWw9ZnVuY3Rpb24odCl7Y29uc3QgZT1TKHQpLG49RSh0KSxpPXQub3duZXJEb2N1bWVudC5ib2R5LHI9cChlLnNjcm9sbFdpZHRoLGUuY2xpZW50V2lkdGgsaS5zY3JvbGxXaWR0aCxpLmNsaWVudFdpZHRoKSxjPXAoZS5zY3JvbGxIZWlnaHQsZS5jbGllbnRIZWlnaHQsaS5zY3JvbGxIZWlnaHQsaS5jbGllbnRIZWlnaHQpO2xldCBsPS1uLnNjcm9sbExlZnQrQyh0KTtjb25zdCBzPS1uLnNjcm9sbFRvcDtyZXR1cm5cInJ0bFwiPT09byhpKS5kaXJlY3Rpb24mJihsKz1wKGUuY2xpZW50V2lkdGgsaS5jbGllbnRXaWR0aCktcikse3dpZHRoOnIsaGVpZ2h0OmMseDpsLHk6c319KFMoZSkpO2Vsc2UgaWYoeChpKSlsPWZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1SKHQsITAsXCJmaXhlZFwiPT09ZSksbz1uLnRvcCt0LmNsaWVudFRvcCxpPW4ubGVmdCt0LmNsaWVudExlZnQscj1jKHQpP2IodCk6eSgxKTtyZXR1cm57d2lkdGg6dC5jbGllbnRXaWR0aCpyLngsaGVpZ2h0OnQuY2xpZW50SGVpZ2h0KnIueSx4Omkqci54LHk6bypyLnl9fShpLHIpO2Vsc2V7Y29uc3QgdD1UKGUpO2w9ey4uLmkseDppLngtdC54LHk6aS55LXQueX19cmV0dXJuIHQobCl9ZnVuY3Rpb24gVyh0LGUpe2NvbnN0IG49Rih0KTtyZXR1cm4hKG49PT1lfHwheChuKXx8ZChuKSkmJihcImZpeGVkXCI9PT1vKG4pLnBvc2l0aW9ufHxXKG4sZSkpfWZ1bmN0aW9uIE0odCxlLG4pe2NvbnN0IG89YyhlKSxpPVMoZSksbD1cImZpeGVkXCI9PT1uLGY9Uih0LCEwLGwsZSk7bGV0IHU9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH07Y29uc3QgYT15KDApO2lmKG98fCFvJiYhbClpZigoXCJib2R5XCIhPT1yKGUpfHxzKGkpKSYmKHU9RShlKSksYyhlKSl7Y29uc3QgdD1SKGUsITAsbCxlKTthLng9dC54K2UuY2xpZW50TGVmdCxhLnk9dC55K2UuY2xpZW50VG9wfWVsc2UgaSYmKGEueD1DKGkpKTtyZXR1cm57eDpmLmxlZnQrdS5zY3JvbGxMZWZ0LWEueCx5OmYudG9wK3Uuc2Nyb2xsVG9wLWEueSx3aWR0aDpmLndpZHRoLGhlaWdodDpmLmhlaWdodH19ZnVuY3Rpb24geih0LGUpe3JldHVybiBjKHQpJiZcImZpeGVkXCIhPT1vKHQpLnBvc2l0aW9uP2U/ZSh0KTp0Lm9mZnNldFBhcmVudDpudWxsfWZ1bmN0aW9uIFAodCxlKXtjb25zdCBpPW4odCk7aWYoIWModCkpcmV0dXJuIGk7bGV0IGw9eih0LGUpO2Zvcig7bCYmZihsKSYmXCJzdGF0aWNcIj09PW8obCkucG9zaXRpb247KWw9eihsLGUpO3JldHVybiBsJiYoXCJodG1sXCI9PT1yKGwpfHxcImJvZHlcIj09PXIobCkmJlwic3RhdGljXCI9PT1vKGwpLnBvc2l0aW9uJiYhdShsKSk/aTpsfHxmdW5jdGlvbih0KXtsZXQgZT1GKHQpO2Zvcig7YyhlKSYmIWQoZSk7KXtpZih1KGUpKXJldHVybiBlO2U9RihlKX1yZXR1cm4gbnVsbH0odCl8fGl9Y29uc3QgVj17Y29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Q6ZnVuY3Rpb24odCl7bGV0e3JlY3Q6ZSxvZmZzZXRQYXJlbnQ6bixzdHJhdGVneTpvfT10O2NvbnN0IGk9YyhuKSxsPVMobik7aWYobj09PWwpcmV0dXJuIGU7bGV0IGY9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH0sdT15KDEpO2NvbnN0IGE9eSgwKTtpZigoaXx8IWkmJlwiZml4ZWRcIiE9PW8pJiYoKFwiYm9keVwiIT09cihuKXx8cyhsKSkmJihmPUUobikpLGMobikpKXtjb25zdCB0PVIobik7dT1iKG4pLGEueD10Lngrbi5jbGllbnRMZWZ0LGEueT10Lnkrbi5jbGllbnRUb3B9cmV0dXJue3dpZHRoOmUud2lkdGgqdS54LGhlaWdodDplLmhlaWdodCp1LnkseDplLngqdS54LWYuc2Nyb2xsTGVmdCp1LngrYS54LHk6ZS55KnUueS1mLnNjcm9sbFRvcCp1LnkrYS55fX0sZ2V0RG9jdW1lbnRFbGVtZW50OlMsZ2V0Q2xpcHBpbmdSZWN0OmZ1bmN0aW9uKHQpe2xldHtlbGVtZW50OmUsYm91bmRhcnk6bixyb290Qm91bmRhcnk6aSxzdHJhdGVneTpjfT10O2NvbnN0IGw9Wy4uLlwiY2xpcHBpbmdBbmNlc3RvcnNcIj09PW4/ZnVuY3Rpb24odCxlKXtjb25zdCBuPWUuZ2V0KHQpO2lmKG4pcmV0dXJuIG47bGV0IGk9RCh0KS5maWx0ZXIoKHQ9PngodCkmJlwiYm9keVwiIT09cih0KSkpLGM9bnVsbDtjb25zdCBsPVwiZml4ZWRcIj09PW8odCkucG9zaXRpb247bGV0IGY9bD9GKHQpOnQ7Zm9yKDt4KGYpJiYhZChmKTspe2NvbnN0IGU9byhmKSxuPXUoZik7bnx8XCJmaXhlZFwiIT09ZS5wb3NpdGlvbnx8KGM9bnVsbCksKGw/IW4mJiFjOiFuJiZcInN0YXRpY1wiPT09ZS5wb3NpdGlvbiYmYyYmW1wiYWJzb2x1dGVcIixcImZpeGVkXCJdLmluY2x1ZGVzKGMucG9zaXRpb24pfHxzKGYpJiYhbiYmVyh0LGYpKT9pPWkuZmlsdGVyKCh0PT50IT09ZikpOmM9ZSxmPUYoZil9cmV0dXJuIGUuc2V0KHQsaSksaX0oZSx0aGlzLl9jKTpbXS5jb25jYXQobiksaV0sZj1sWzBdLGE9bC5yZWR1Y2UoKCh0LG4pPT57Y29uc3Qgbz1IKGUsbixjKTtyZXR1cm4gdC50b3A9cChvLnRvcCx0LnRvcCksdC5yaWdodD1oKG8ucmlnaHQsdC5yaWdodCksdC5ib3R0b209aChvLmJvdHRvbSx0LmJvdHRvbSksdC5sZWZ0PXAoby5sZWZ0LHQubGVmdCksdH0pLEgoZSxmLGMpKTtyZXR1cm57d2lkdGg6YS5yaWdodC1hLmxlZnQsaGVpZ2h0OmEuYm90dG9tLWEudG9wLHg6YS5sZWZ0LHk6YS50b3B9fSxnZXRPZmZzZXRQYXJlbnQ6UCxnZXRFbGVtZW50UmVjdHM6YXN5bmMgZnVuY3Rpb24odCl7bGV0e3JlZmVyZW5jZTplLGZsb2F0aW5nOm4sc3RyYXRlZ3k6b309dDtjb25zdCBpPXRoaXMuZ2V0T2Zmc2V0UGFyZW50fHxQLHI9dGhpcy5nZXREaW1lbnNpb25zO3JldHVybntyZWZlcmVuY2U6TShlLGF3YWl0IGkobiksbyksZmxvYXRpbmc6e3g6MCx5OjAsLi4uYXdhaXQgcihuKX19fSxnZXRDbGllbnRSZWN0czpmdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuZnJvbSh0LmdldENsaWVudFJlY3RzKCkpfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKHQpe3JldHVybiB3KHQpfSxnZXRTY2FsZTpiLGlzRWxlbWVudDp4LGlzUlRMOmZ1bmN0aW9uKHQpe3JldHVyblwicnRsXCI9PT1nZXRDb21wdXRlZFN0eWxlKHQpLmRpcmVjdGlvbn19O2Z1bmN0aW9uIEEodCxlLG4sbyl7dm9pZCAwPT09byYmKG89e30pO2NvbnN0e2FuY2VzdG9yU2Nyb2xsOmk9ITAsYW5jZXN0b3JSZXNpemU6cj0hMCxlbGVtZW50UmVzaXplOmM9XCJmdW5jdGlvblwiPT10eXBlb2YgUmVzaXplT2JzZXJ2ZXIsbGF5b3V0U2hpZnQ6bD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlcixhbmltYXRpb25GcmFtZTpzPSExfT1vLGY9dih0KSx1PWl8fHI/Wy4uLmY/RChmKTpbXSwuLi5EKGUpXTpbXTt1LmZvckVhY2goKHQ9PntpJiZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixuLHtwYXNzaXZlOiEwfSksciYmdC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsbil9KSk7Y29uc3QgYT1mJiZsP2Z1bmN0aW9uKHQsZSl7bGV0IG4sbz1udWxsO2NvbnN0IGk9Uyh0KTtmdW5jdGlvbiByKCl7Y2xlYXJUaW1lb3V0KG4pLG8mJm8uZGlzY29ubmVjdCgpLG89bnVsbH1yZXR1cm4gZnVuY3Rpb24gYyhsLHMpe3ZvaWQgMD09PWwmJihsPSExKSx2b2lkIDA9PT1zJiYocz0xKSxyKCk7Y29uc3R7bGVmdDpmLHRvcDp1LHdpZHRoOmEsaGVpZ2h0OmR9PXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYobHx8ZSgpLCFhfHwhZClyZXR1cm47Y29uc3QgbT17cm9vdE1hcmdpbjotZyh1KStcInB4IFwiKy1nKGkuY2xpZW50V2lkdGgtKGYrYSkpK1wicHggXCIrLWcoaS5jbGllbnRIZWlnaHQtKHUrZCkpK1wicHggXCIrLWcoZikrXCJweFwiLHRocmVzaG9sZDpwKDAsaCgxLHMpKXx8MX07bGV0IHk9ITA7ZnVuY3Rpb24gdyh0KXtjb25zdCBlPXRbMF0uaW50ZXJzZWN0aW9uUmF0aW87aWYoZSE9PXMpe2lmKCF5KXJldHVybiBjKCk7ZT9jKCExLGUpOm49c2V0VGltZW91dCgoKCk9PntjKCExLDFlLTcpfSksMTAwKX15PSExfXRyeXtvPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih3LHsuLi5tLHJvb3Q6aS5vd25lckRvY3VtZW50fSl9Y2F0Y2godCl7bz1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodyxtKX1vLm9ic2VydmUodCl9KCEwKSxyfShmLG4pOm51bGw7bGV0IGQsbT0tMSx5PW51bGw7YyYmKHk9bmV3IFJlc2l6ZU9ic2VydmVyKCh0PT57bGV0W29dPXQ7byYmby50YXJnZXQ9PT1mJiZ5JiYoeS51bm9ic2VydmUoZSksY2FuY2VsQW5pbWF0aW9uRnJhbWUobSksbT1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCgpPT57eSYmeS5vYnNlcnZlKGUpfSkpKSxuKCl9KSksZiYmIXMmJnkub2JzZXJ2ZShmKSx5Lm9ic2VydmUoZSkpO2xldCB3PXM/Uih0KTpudWxsO3JldHVybiBzJiZmdW5jdGlvbiBlKCl7Y29uc3Qgbz1SKHQpOyF3fHxvLng9PT13LngmJm8ueT09PXcueSYmby53aWR0aD09PXcud2lkdGgmJm8uaGVpZ2h0PT09dy5oZWlnaHR8fG4oKTt3PW8sZD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9KCksbigpLCgpPT57dS5mb3JFYWNoKCh0PT57aSYmdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbiksciYmdC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsbil9KSksYSYmYSgpLHkmJnkuZGlzY29ubmVjdCgpLHk9bnVsbCxzJiZjYW5jZWxBbmltYXRpb25GcmFtZShkKX19Y29uc3QgQj0odCxuLG8pPT57Y29uc3QgaT1uZXcgTWFwLHI9e3BsYXRmb3JtOlYsLi4ub30sYz17Li4uci5wbGF0Zm9ybSxfYzppfTtyZXR1cm4gZSh0LG4sey4uLnIscGxhdGZvcm06Y30pfTtleHBvcnR7QSBhcyBhdXRvVXBkYXRlLEIgYXMgY29tcHV0ZVBvc2l0aW9uLEQgYXMgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsViBhcyBwbGF0Zm9ybX07XG4iLCAiLy8gVE9ETzogTWFrZSBpdCBzbyB5b3UgY2FuIGFkZCBjdXN0b20gZWxlbWVudHNcbmltcG9ydCB7IGRlZXBNZXJnZSwgZW0ycHgsIGdlbmVyYXRlSUQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBcbi8vIG1haW5cbmF1dG9VcGRhdGUsIGNvbXB1dGVQb3NpdGlvbiwgXG4vLyBtaWRkbGV3YXJlXG5hcnJvdyBhcyBmdWlBcnJvdywgZmxpcCBhcyBmdWlGbGlwLCBvZmZzZXQgYXMgZnVpT2Zmc2V0LCBzaGlmdCBhcyBmdWlTaGlmdCwgfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmV4cG9ydCBjb25zdCB0b29sdGlwID0gKG5vZGUsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBhbGxvd0h0bWw6IGZhbHNlLFxuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgY2xhc3M6ICd0b29sdGlwJyxcbiAgICAgICAgY29udGVudDogbm9kZS50aXRsZSxcbiAgICAgICAgdGFyZ2V0OiAnYm9keScsXG4gICAgICAgIHZpc2libGU6ICdhdXRvJyxcbiAgICAgICAgY29tcHV0ZVBvc2l0aW9uQ2FsbGJhY2s6IChkYXRhLCB7IHdyYXBwZXIsIGFycm93IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgcGxhY2VtZW50LCBtaWRkbGV3YXJlRGF0YSB9ID0gZGF0YTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudFBhcnRzID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCBvcHBvc2l0ZXMgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICd0b3AnLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvcHBvc2l0ZSA9IG9wcG9zaXRlc1twbGFjZW1lbnRQYXJ0c1swXV07XG4gICAgICAgICAgICBsZXQgb3JpZ2luQ3Jvc3MgPSAnY2VudGVyJztcbiAgICAgICAgICAgIGlmIChwbGFjZW1lbnQgPT09ICd0b3AnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VtZW50UGFydHNbMV0gPT09ICdzdGFydCcpXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkNyb3NzID0gJ3RvcCc7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxhY2VtZW50UGFydHNbMV0gPT09ICdlbmQnKVxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5Dcm9zcyA9ICdib3R0b20nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlbWVudFBhcnRzWzFdID09PSAnc3RhcnQnKVxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5Dcm9zcyA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGFjZW1lbnRQYXJ0c1sxXSA9PT0gJ2VuZCcpXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkNyb3NzID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24od3JhcHBlci5zdHlsZSwge1xuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogb3Bwb3NpdGUgKyAnICcgKyBvcmlnaW5Dcm9zcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1pZGRsZXdhcmVEYXRhLmFycm93KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBtaWRkbGV3YXJlRGF0YS5hcnJvdztcbiAgICAgICAgICAgICAgICBhcnJvdz8uc2V0QXR0cmlidXRlKCdkYXRhLWRpcmVjdGlvbicsIG9wcG9zaXRlKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGFycm93LnN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBbb3Bwb3NpdGVdOiAnY2FsYyh2YXIoLS1fc2l6ZSkgLyAtMiknLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmdWlDb25maWc6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBtaWRkbGV3YXJlOiBbXG4gICAgICAgICAgICAgICAgZnVpRmxpcCgpLFxuICAgICAgICAgICAgICAgIGZ1aU9mZnNldChlbTJweCgwLjUpKSxcbiAgICAgICAgICAgICAgICBmdWlTaGlmdCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZnVpQXV0b1VwZGF0ZUNvbmZpZzoge31cbiAgICB9O1xuICAgIG9wdHMgPSBkZWVwTWVyZ2UoZGVmYXVsdHMsIG9wdHMpO1xuICAgIGlmICghb3B0cy5jb250ZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbnRlbnQgZGVmaW5lZCwgZWl0aGVyIGFkZCB0aGUgY29udGVudCBvcHRpb24gb3IgYWRkIGEgdGl0bGUgcHJvcGVydHkgdG8gdGhlIGVsZW1lbnQuJyk7XG4gICAgY29uc3Qga2V5ZG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgaW5Eb207XG4gICAgY29uc3QgaWQgPSBub2RlLmlkID8gbm9kZS5pZCArICctdG9vbHRpcCcgOiBnZW5lcmF0ZUlEKCk7XG4gICAgbGV0IHRvb2x0aXAgPSBjcmVhdGVUb29sdGlwKG5vZGUsIG9wdHMsIGlkKTtcbiAgICBhc3luYyBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBpZiAoaW5Eb20pIHtcbiAgICAgICAgICAgIGF3YWl0IGFuaW1hdGUoJ291dCcpO1xuICAgICAgICAgICAgdG9vbHRpcC53cmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgICAgIGluRG9tID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgaWYgKCFpbkRvbSkge1xuICAgICAgICAgICAgZ2V0RWxlbWVudChvcHRzLnRhcmdldCkuYXBwZW5kQ2hpbGQodG9vbHRpcC53cmFwcGVyKTtcbiAgICAgICAgICAgIGluRG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgaWQpO1xuICAgICAgICAgICAgYXdhaXQgYW5pbWF0ZSgnaW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKG9wdHMudmlzaWJsZSkge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3cpO1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzaG93KTtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoaWRlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbmltYXRlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRvb2x0aXAud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW5nJywgdHlwZSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodG9vbHRpcC53cmFwcGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLWR1cmF0aW9uJykpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb24gPD0gMCAmJiB0cmFuc2l0aW9uIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGluZycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGFuaW1hdGlvbiBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2x0aXAud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcC53cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpbmcnKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShrZXksIG5ld09wdHMpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jb250ZW50W25ld09wdHMuYWxsb3dIdG1sID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnXSA9IG5ld09wdHMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcC1jb250ZW50JywgbmV3T3B0cy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGxvd0h0bWwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jb250ZW50W25ld09wdHMuYWxsb3dIdG1sID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnXSA9IG5ld09wdHMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hbGxvdy1odG1sJywgbmV3T3B0cy5hbGxvd0h0bWwgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcC1jb250ZW50JywgbmV3T3B0cy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZE9sZENsYXNzZXMgPSBnZXRDbGFzc2VzKG9wdHMuY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZE5ld0NsYXNzZXMgPSBnZXRDbGFzc2VzKG5ld09wdHMuY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSguLi5tb2RpZmllZE9sZENsYXNzZXMud3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAud3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLm1vZGlmaWVkTmV3Q2xhc3Nlcy53cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ubW9kaWZpZWRPbGRDbGFzc2VzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCguLi5tb2RpZmllZE5ld0NsYXNzZXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuYXJyb3c/LmNsYXNzTGlzdC5yZW1vdmUoLi4ubW9kaWZpZWRPbGRDbGFzc2VzLmFycm93KTtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5hcnJvdz8uY2xhc3NMaXN0LmFkZCguLi5tb2RpZmllZE5ld0NsYXNzZXMuYXJyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdPcHRzLnZpc2libGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlKCk7IC8vIHRoaXMgaXMgcHV0IGhlcmUgYmVjYXVzZSB0aGVyZSdzIGEgYnJlYWt0aHJvdWdoIGluIHRoZSBzd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChuZXdPcHRzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTogc2hvdygpOyAvLyBicmVhayBvbWl0dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2hvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGhpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2hvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwID0gY3JlYXRlVG9vbHRpcChub2RlLCBvcHRzLCBpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZShuZXdPcHRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gbmV3T3B0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGs7XG4gICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlKGtleSwgbmV3T3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRzID0gZGVlcE1lcmdlKGRlZmF1bHRzLCBuZXdPcHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBrO1xuICAgICAgICAgICAgICAgIHRvb2x0aXBba2V5XT8ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB0b29sdGlwO1xuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcChub2RlLCBvcHRzLCBpZCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBnZXRDbGFzc2VzKG9wdHMuY2xhc3MgPz8gW10pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcy53cmFwcGVyKTtcbiAgICB3cmFwcGVyLnJvbGUgPSAndG9vbHRpcCc7XG4gICAgd3JhcHBlci5pZCA9IGlkO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcy5jb250ZW50KTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hbGxvdy1odG1sJywgb3B0cy5hbGxvd0h0bWwgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICBjb250ZW50W29wdHMuYWxsb3dIdG1sID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnXSA9IG9wdHMuY29udGVudDtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGxldCBhcnJvdztcbiAgICBpZiAob3B0cy5hcnJvdykge1xuICAgICAgICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMuYXJyb3cpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgb3B0cy5mdWlDb25maWcubWlkZGxld2FyZSA/Pz0gW107XG4gICAgICAgIG9wdHMuZnVpQ29uZmlnLm1pZGRsZXdhcmUucHVzaChmdWlBcnJvdyh7IGVsZW1lbnQ6IGFycm93IH0pKTtcbiAgICB9XG4gICAgYXV0b1VwZGF0ZShub2RlLCB3cmFwcGVyLCAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVQb3NpdGlvbihub2RlLCB3cmFwcGVyLCBvcHRzLmZ1aUNvbmZpZykudGhlbigoY29tcHV0ZVBvc2l0aW9uUmV0dXJuKSA9PiB7XG4gICAgICAgICAgICBvcHRzLmNvbXB1dGVQb3NpdGlvbkNhbGxiYWNrKGNvbXB1dGVQb3NpdGlvblJldHVybiwgeyB3cmFwcGVyLCBjb250ZW50LCBhcnJvdyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgYXJyb3csXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiB0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pXG4gICAgICAgIDogZWxlbTtcbn1cbmZ1bmN0aW9uIGdldENsYXNzZXMoY2xhc3Nlcykge1xuICAgIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gJ3N0cmluZycpXG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzWzBdID09PSAnc3RyaW5nJyAmJiAhY2xhc3Nlc1swXSlcbiAgICAgICAgY2xhc3Nlc1swXSA9ICd0b29sdGlwJztcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPT09IDApXG4gICAgICAgIGNsYXNzZXMucHVzaCgndG9vbHRpcCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdyYXBwZXI6IGNsYXNzZXMubWFwKGMgPT4gYyArIChjID8gJy0nIDogJycpICsgJ3dyYXBwZXInKSxcbiAgICAgICAgY29udGVudDogY2xhc3Nlcy5tYXAoYyA9PiBjICsgKGMgPyAnLScgOiAnJykgKyAnY29udGVudCcpLFxuICAgICAgICBhcnJvdzogY2xhc3Nlcy5tYXAoYyA9PiBjICsgKGMgPyAnLScgOiAnJykgKyAnYXJyb3cnKSxcbiAgICB9O1xufVxuIiwgIjwhLS0gR0VORVJBVEVEIEZJTEUgLS0+XG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHtcbiAgICB3ZWlnaHQ6IGN0eFdlaWdodCxcbiAgICBjb2xvcjogY3R4Q29sb3IsXG4gICAgc2l6ZTogY3R4U2l6ZSxcbiAgICBtaXJyb3JlZDogY3R4TWlycm9yZWQsXG4gICAgLi4ucmVzdEN0eFxuICB9ID0gZ2V0Q29udGV4dChcImljb25DdHhcIikgfHwge307XG5cbiAgZXhwb3J0IGxldCB3ZWlnaHQgPSBjdHhXZWlnaHQgPz8gXCJyZWd1bGFyXCI7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBjdHhDb2xvciA/PyBcImN1cnJlbnRDb2xvclwiO1xuICBleHBvcnQgbGV0IHNpemUgPSBjdHhTaXplID8/IFwiMWVtXCI7XG4gIGV4cG9ydCBsZXQgbWlycm9yZWQgPSBjdHhNaXJyb3JlZCB8fCBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3ZnIFxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gIHdpZHRoPXtzaXplfVxuICBoZWlnaHQ9e3NpemV9XG4gIGZpbGw9e2NvbG9yfVxuICB0cmFuc2Zvcm09e21pcnJvcmVkID8gXCJzY2FsZSgtMSwgMSlcIiA6IHVuZGVmaW5lZH0gXG4gIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiXG4gIHsuLi5yZXN0Q3R4fVxuICB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdC8+XG4gIDxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgZmlsbD1cIm5vbmVcIiAvPlxuICB7I2lmIHdlaWdodCA9PT0gXCJib2xkXCJ9XG4gICAgPHBhdGggZD1cIk0xNDQsMTgwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxODBabTkyLTUyQTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTI0LDBhODQsODQsMCwxLDAtODQsODRBODQuMDksODQuMDksMCwwLDAsMjEyLDEyOFpNMTI4LDY0Yy0yNC4yNiwwLTQ0LDE3Ljk0LTQ0LDQwdjRhMTIsMTIsMCwwLDAsMjQsMHYtNGMwLTguODIsOS0xNiwyMC0xNnMyMCw3LjE4LDIwLDE2LTksMTYtMjAsMTZhMTIsMTIsMCwwLDAtMTIsMTJ2OGExMiwxMiwwLDAsMCwyMy43MywyLjU2QzE1OC4zMSwxMzcuODgsMTcyLDEyMi4zNywxNzIsMTA0LDE3Miw4MS45NCwxNTIuMjYsNjQsMTI4LDY0WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJkdW90b25lXCJ9XG4gICAgPHBhdGggZD1cIk0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTE0MCwxODBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDE4MFpNMTI4LDcyYy0yMi4wNiwwLTQwLDE2LjE1LTQwLDM2djRhOCw4LDAsMCwwLDE2LDB2LTRjMC0xMSwxMC43Ny0yMCwyNC0yMHMyNCw5LDI0LDIwLTEwLjc3LDIwLTI0LDIwYTgsOCwwLDAsMC04LDh2OGE4LDgsMCwwLDAsMTYsMHYtLjcyYzE4LjI0LTMuMzUsMzItMTcuOSwzMi0zNS4yOEMxNjgsODguMTUsMTUwLjA2LDcyLDEyOCw3MlptMTA0LDU2QTEwNCwxMDQsMCwxLDEsMTI4LDI0LDEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDEyOFptLTE2LDBhODgsODgsMCwxLDAtODgsODhBODguMSw4OC4xLDAsMCwwLDIxNiwxMjhaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImZpbGxcIn1cbiAgICA8cGF0aCBkPVwiTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTAsMTY4YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxOTJabTgtNDguNzJWMTQ0YTgsOCwwLDAsMS0xNiwwdi04YTgsOCwwLDAsMSw4LThjMTMuMjMsMCwyNC05LDI0LTIwcy0xMC43Ny0yMC0yNC0yMC0yNCw5LTI0LDIwdjRhOCw4LDAsMCwxLTE2LDB2LTRjMC0xOS44NSwxNy45NC0zNiw0MC0zNnM0MCwxNi4xNSw0MCwzNkMxNjgsMTI1LjM4LDE1NC4yNCwxMzkuOTMsMTM2LDE0My4yOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTEzOCwxODBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTM4LDE4MFpNMTI4LDc0Yy0yMSwwLTM4LDE1LjI1LTM4LDM0djRhNiw2LDAsMCwwLDEyLDB2LTRjMC0xMi4xMywxMS42Ni0yMiwyNi0yMnMyNiw5Ljg3LDI2LDIyLTExLjY2LDIyLTI2LDIyYTYsNiwwLDAsMC02LDZ2OGE2LDYsMCwwLDAsMTIsMHYtMi40MmMxOC4xMS0yLjU4LDMyLTE2LjY2LDMyLTMzLjU4QzE2Niw4OS4yNSwxNDksNzQsMTI4LDc0Wm0xMDIsNTRBMTAyLDEwMiwwLDEsMSwxMjgsMjYsMTAyLjEyLDEwMi4xMiwwLDAsMSwyMzAsMTI4Wm0tMTIsMGE5MCw5MCwwLDEsMC05MCw5MEE5MC4xLDkwLjEsMCwwLDAsMjE4LDEyOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwicmVndWxhclwifVxuICAgIDxwYXRoIGQ9XCJNMTQwLDE4MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTgwWk0xMjgsNzJjLTIyLjA2LDAtNDAsMTYuMTUtNDAsMzZ2NGE4LDgsMCwwLDAsMTYsMHYtNGMwLTExLDEwLjc3LTIwLDI0LTIwczI0LDksMjQsMjAtMTAuNzcsMjAtMjQsMjBhOCw4LDAsMCwwLTgsOHY4YTgsOCwwLDAsMCwxNiwwdi0uNzJjMTguMjQtMy4zNSwzMi0xNy45LDMyLTM1LjI4QzE2OCw4OC4xNSwxNTAuMDYsNzIsMTI4LDcyWm0xMDQsNTZBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwidGhpblwifVxuICAgIDxwYXRoIGQ9XCJNMTM2LDE4MGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMzYsMTgwWk0xMjgsNzZjLTE5Ljg1LDAtMzYsMTQuMzYtMzYsMzJ2NGE0LDQsMCwwLDAsOCwwdi00YzAtMTMuMjMsMTIuNTYtMjQsMjgtMjRzMjgsMTAuNzcsMjgsMjQtMTIuNTYsMjQtMjgsMjRhNCw0LDAsMCwwLTQsNHY4YTQsNCwwLDAsMCw4LDB2LTQuMmMxOC0xLjc3LDMyLTE1LjM2LDMyLTMxLjhDMTY0LDkwLjM2LDE0Ny44NSw3NiwxMjgsNzZabTEwMCw1MkExMDAsMTAwLDAsMSwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjhabS04LDBhOTIsOTIsMCwxLDAtOTIsOTJBOTIuMSw5Mi4xLDAsMCwwLDIyMCwxMjhaXCIvPlxuICB7OmVsc2V9XG4gICAgeyhjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBpY29uIHdlaWdodC4gQ2hvb3NlIGZyb20gXCJ0aGluXCIsIFwibGlnaHRcIiwgXCJyZWd1bGFyXCIsIFwiYm9sZFwiLCBcImZpbGxcIiwgb3IgXCJkdW90b25lXCIuJyksIFwiXCIpfVxuICB7L2lmfVxuPC9zdmc+IiwgImltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi9RdWVzdGlvbi5zdmVsdGVcIlxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247IiwgIjwhLS0gR0VORVJBVEVEIEZJTEUgLS0+XG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHtcbiAgICB3ZWlnaHQ6IGN0eFdlaWdodCxcbiAgICBjb2xvcjogY3R4Q29sb3IsXG4gICAgc2l6ZTogY3R4U2l6ZSxcbiAgICBtaXJyb3JlZDogY3R4TWlycm9yZWQsXG4gICAgLi4ucmVzdEN0eFxuICB9ID0gZ2V0Q29udGV4dChcImljb25DdHhcIikgfHwge307XG5cbiAgZXhwb3J0IGxldCB3ZWlnaHQgPSBjdHhXZWlnaHQgPz8gXCJyZWd1bGFyXCI7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBjdHhDb2xvciA/PyBcImN1cnJlbnRDb2xvclwiO1xuICBleHBvcnQgbGV0IHNpemUgPSBjdHhTaXplID8/IFwiMWVtXCI7XG4gIGV4cG9ydCBsZXQgbWlycm9yZWQgPSBjdHhNaXJyb3JlZCB8fCBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3ZnIFxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gIHdpZHRoPXtzaXplfVxuICBoZWlnaHQ9e3NpemV9XG4gIGZpbGw9e2NvbG9yfVxuICB0cmFuc2Zvcm09e21pcnJvcmVkID8gXCJzY2FsZSgtMSwgMSlcIiA6IHVuZGVmaW5lZH0gXG4gIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiXG4gIHsuLi5yZXN0Q3R4fVxuICB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdC8+XG4gIDxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgZmlsbD1cIm5vbmVcIiAvPlxuICB7I2lmIHdlaWdodCA9PT0gXCJib2xkXCJ9XG4gICAgPHBhdGggZD1cIk0xNzYuNDksOTUuNTFhMTIsMTIsMCwwLDEsMCwxN2wtNTYsNTZhMTIsMTIsMCwwLDEtMTcsMGwtMjQtMjRhMTIsMTIsMCwxLDEsMTctMTdMMTEyLDE0M2w0Ny41MS00Ny41MkExMiwxMiwwLDAsMSwxNzYuNDksOTUuNTFaTTIzNiwxMjhBMTA4LDEwOCwwLDEsMSwxMjgsMjAsMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMTI4Wm0tMjQsMGE4NCw4NCwwLDEsMC04NCw4NEE4NC4wOSw4NC4wOSwwLDAsMCwyMTIsMTI4WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJkdW90b25lXCJ9XG4gICAgPHBhdGggZD1cIk0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaXCIgb3BhY2l0eT1cIjAuMlwiLz48cGF0aCBkPVwiTTE3My42Niw5OC4zNGE4LDgsMCwwLDEsMCwxMS4zMmwtNTYsNTZhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMTIsMTQ4LjY5bDUwLjM0LTUwLjM1QTgsOCwwLDAsMSwxNzMuNjYsOTguMzRaTTIzMiwxMjhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwiZmlsbFwifVxuICAgIDxwYXRoIGQ9XCJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptNDUuNjYsODUuNjYtNTYsNTZhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMTIsMTQ4LjY5bDUwLjM0LTUwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwibGlnaHRcIn1cbiAgICA8cGF0aCBkPVwiTTE3Mi4yNCw5OS43NmE2LDYsMCwwLDEsMCw4LjQ4bC01Niw1NmE2LDYsMCwwLDEtOC40OCwwbC0yNC0yNGE2LDYsMCwwLDEsOC40OC04LjQ4TDExMiwxNTEuNTFsNTEuNzYtNTEuNzVBNiw2LDAsMCwxLDE3Mi4yNCw5OS43NlpNMjMwLDEyOEExMDIsMTAyLDAsMSwxLDEyOCwyNiwxMDIuMTIsMTAyLjEyLDAsMCwxLDIzMCwxMjhabS0xMiwwYTkwLDkwLDAsMSwwLTkwLDkwQTkwLjEsOTAuMSwwLDAsMCwyMTgsMTI4WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJyZWd1bGFyXCJ9XG4gICAgPHBhdGggZD1cIk0xNzMuNjYsOTguMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTU2LDU2YTgsOCwwLDAsMS0xMS4zMiwwbC0yNC0yNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTEyLDE0OC42OWw1MC4zNC01MC4zNUE4LDgsMCwwLDEsMTczLjY2LDk4LjM0Wk0yMzIsMTI4QTEwNCwxMDQsMCwxLDEsMTI4LDI0LDEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDEyOFptLTE2LDBhODgsODgsMCwxLDAtODgsODhBODguMSw4OC4xLDAsMCwwLDIxNiwxMjhaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInRoaW5cIn1cbiAgICA8cGF0aCBkPVwiTTE3MC44MywxMDEuMTdhNCw0LDAsMCwxLDAsNS42NmwtNTYsNTZhNCw0LDAsMCwxLTUuNjYsMGwtMjQtMjRhNCw0LDAsMCwxLDUuNjYtNS42NkwxMTIsMTU0LjM0bDUzLjE3LTUzLjE3QTQsNCwwLDAsMSwxNzAuODMsMTAxLjE3Wk0yMjgsMTI4QTEwMCwxMDAsMCwxLDEsMTI4LDI4LDEwMC4xMSwxMDAuMTEsMCwwLDEsMjI4LDEyOFptLTgsMGE5Miw5MiwwLDEsMC05Miw5MkE5Mi4xLDkyLjEsMCwwLDAsMjIwLDEyOFpcIi8+XG4gIHs6ZWxzZX1cbiAgICB7KGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGljb24gd2VpZ2h0LiBDaG9vc2UgZnJvbSBcInRoaW5cIiwgXCJsaWdodFwiLCBcInJlZ3VsYXJcIiwgXCJib2xkXCIsIFwiZmlsbFwiLCBvciBcImR1b3RvbmVcIi4nKSwgXCJcIil9XG4gIHsvaWZ9XG48L3N2Zz4iLCAiaW1wb3J0IENoZWNrQ2lyY2xlIGZyb20gXCIuL0NoZWNrQ2lyY2xlLnN2ZWx0ZVwiXG5leHBvcnQgZGVmYXVsdCBDaGVja0NpcmNsZTsiLCAiPCEtLSBHRU5FUkFURUQgRklMRSAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgY29uc3Qge1xuICAgIHdlaWdodDogY3R4V2VpZ2h0LFxuICAgIGNvbG9yOiBjdHhDb2xvcixcbiAgICBzaXplOiBjdHhTaXplLFxuICAgIG1pcnJvcmVkOiBjdHhNaXJyb3JlZCxcbiAgICAuLi5yZXN0Q3R4XG4gIH0gPSBnZXRDb250ZXh0KFwiaWNvbkN0eFwiKSB8fCB7fTtcblxuICBleHBvcnQgbGV0IHdlaWdodCA9IGN0eFdlaWdodCA/PyBcInJlZ3VsYXJcIjtcbiAgZXhwb3J0IGxldCBjb2xvciA9IGN0eENvbG9yID8/IFwiY3VycmVudENvbG9yXCI7XG4gIGV4cG9ydCBsZXQgc2l6ZSA9IGN0eFNpemUgPz8gXCIxZW1cIjtcbiAgZXhwb3J0IGxldCBtaXJyb3JlZCA9IGN0eE1pcnJvcmVkIHx8IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdmcgXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgd2lkdGg9e3NpemV9XG4gIGhlaWdodD17c2l6ZX1cbiAgZmlsbD17Y29sb3J9XG4gIHRyYW5zZm9ybT17bWlycm9yZWQgPyBcInNjYWxlKC0xLCAxKVwiIDogdW5kZWZpbmVkfSBcbiAgdmlld0JveD1cIjAgMCAyNTYgMjU2XCJcbiAgey4uLnJlc3RDdHh9XG4gIHsuLi4kJHJlc3RQcm9wc30+XG4gIDxzbG90Lz5cbiAgPHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiBmaWxsPVwibm9uZVwiIC8+XG4gIHsjaWYgd2VpZ2h0ID09PSBcImJvbGRcIn1cbiAgICA8cGF0aCBkPVwiTTE2OC40OSwxMDQuNDksMTQ1LDEyOGwyMy41MiwyMy41MWExMiwxMiwwLDAsMS0xNywxN0wxMjgsMTQ1bC0yMy41MSwyMy41MmExMiwxMiwwLDAsMS0xNy0xN0wxMTEsMTI4LDg3LjUxLDEwNC40OWExMiwxMiwwLDAsMSwxNy0xN0wxMjgsMTExbDIzLjUxLTIzLjUyYTEyLDEyLDAsMCwxLDE3LDE3Wk0yMzYsMTI4QTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTI0LDBhODQsODQsMCwxLDAtODQsODRBODQuMDksODQuMDksMCwwLDAsMjEyLDEyOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwiZHVvdG9uZVwifVxuICAgIDxwYXRoIGQ9XCJNMjI0LDEyOGE5Niw5NiwwLDEsMS05Ni05NkE5Niw5NiwwLDAsMSwyMjQsMTI4WlwiIG9wYWNpdHk9XCIwLjJcIi8+PHBhdGggZD1cIk0xNjUuNjYsMTAxLjY2LDEzOS4zMSwxMjhsMjYuMzUsMjYuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCwxMzkuMzFsLTI2LjM0LDI2LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMTYuNjksMTI4LDkwLjM0LDEwMS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTI4LDExNi42OWwyNi4zNC0yNi4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaTTIzMiwxMjhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFpcIi8+XG4gIHs6ZWxzZSBpZiB3ZWlnaHQgPT09IFwiZmlsbFwifVxuICAgIDxwYXRoIGQ9XCJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMzcuNjYsMTMwLjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxbC0yNi4zNCwyNi4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw5MC4zNCwxMDEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyOCwxMTYuNjlsMjYuMzQtMjYuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyTDEzOS4zMSwxMjhaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcImxpZ2h0XCJ9XG4gICAgPHBhdGggZD1cIk0xNjQuMjQsMTAwLjI0LDEzNi40OCwxMjhsMjcuNzYsMjcuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwxMjgsMTM2LjQ4bC0yNy43NiwyNy43NmE2LDYsMCwwLDEtOC40OC04LjQ4TDExOS41MiwxMjgsOTEuNzYsMTAwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTI4LDExOS41MmwyNy43Ni0yNy43NmE2LDYsMCwwLDEsOC40OCw4LjQ4Wk0yMzAsMTI4QTEwMiwxMDIsMCwxLDEsMTI4LDI2LDEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDEyOFptLTEyLDBhOTAsOTAsMCwxLDAtOTAsOTBBOTAuMSw5MC4xLDAsMCwwLDIxOCwxMjhaXCIvPlxuICB7OmVsc2UgaWYgd2VpZ2h0ID09PSBcInJlZ3VsYXJcIn1cbiAgICA8cGF0aCBkPVwiTTE2NS42NiwxMDEuNjYsMTM5LjMxLDEyOGwyNi4zNSwyNi4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDEzOS4zMWwtMjYuMzQsMjYuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDExNi42OSwxMjgsOTAuMzQsMTAxLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjgsMTE2LjY5bDI2LjM0LTI2LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlpNMjMyLDEyOEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS0xNiwwYTg4LDg4LDAsMSwwLTg4LDg4QTg4LjEsODguMSwwLDAsMCwyMTYsMTI4WlwiLz5cbiAgezplbHNlIGlmIHdlaWdodCA9PT0gXCJ0aGluXCJ9XG4gICAgPHBhdGggZD1cIk0xNjIuODMsOTguODMsMTMzLjY2LDEyOGwyOS4xNywyOS4xN2E0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCwxMzMuNjYsOTguODMsMTYyLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZMMTIyLjM0LDEyOCw5My4xNyw5OC44M2E0LDQsMCwwLDEsNS42Ni01LjY2TDEyOCwxMjIuMzRsMjkuMTctMjkuMTdhNCw0LDAsMSwxLDUuNjYsNS42NlpNMjI4LDEyOEExMDAsMTAwLDAsMSwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjhabS04LDBhOTIsOTIsMCwxLDAtOTIsOTJBOTIuMSw5Mi4xLDAsMCwwLDIyMCwxMjhaXCIvPlxuICB7OmVsc2V9XG4gICAgeyhjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBpY29uIHdlaWdodC4gQ2hvb3NlIGZyb20gXCJ0aGluXCIsIFwibGlnaHRcIiwgXCJyZWd1bGFyXCIsIFwiYm9sZFwiLCBcImZpbGxcIiwgb3IgXCJkdW90b25lXCIuJyksIFwiXCIpfVxuICB7L2lmfVxuPC9zdmc+IiwgImltcG9ydCBYQ2lyY2xlIGZyb20gXCIuL1hDaXJjbGUuc3ZlbHRlXCJcbmV4cG9ydCBkZWZhdWx0IFhDaXJjbGU7IiwgIjxzY3JpcHQgbGFuZz1cInRzXCIgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGNvbnN0IHJlcmVuZGVyU3RvcmUgPSB3cml0YWJsZTx7IFtpZDogc3RyaW5nXTogYm9vbGVhbiB9Pih7fSk7XG4gIGV4cG9ydCBmdW5jdGlvbiByZXJlbmRlclRoZW1lKGlkOiBzdHJpbmcpIHtcbiAgICByZXJlbmRlclN0b3JlLnVwZGF0ZSgob2JqKSA9PiB7XG4gICAgICBvYmpbaWRdID0gIW9ialtpZF07XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgdG9vbHRpcCB9IGZyb20gJ0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdCc7XG4gIGltcG9ydCBRdWVzdGlvbk1hcmsgZnJvbSAncGhvc3Bob3Itc3ZlbHRlL2xpYi9RdWVzdGlvbic7XG4gIGltcG9ydCBDaGVjayBmcm9tICdwaG9zcGhvci1zdmVsdGUvbGliL0NoZWNrQ2lyY2xlJztcbiAgaW1wb3J0IENsb3NlIGZyb20gJ3Bob3NwaG9yLXN2ZWx0ZS9saWIvWENpcmNsZSc7XG4gIGltcG9ydCB7IHNob3VsZFZhbGlkYXRlIH0gZnJvbSAnc3JjL3JlbmRlcmVyJztcblxuICBmdW5jdGlvbiBjcmVhdGVUb29sdGlwQ29udGVudChlcnJvcnM6IGNzc1ZhbGlkYXRvckVycm9ycykge1xuICAgIHJldHVybiBlcnJvcnMubWFwKChlcnJvcikgPT4gYExpbmUgJHtlcnJvci5saW5lfTogJHtlcnJvci5tZXNzYWdlfWApLmpvaW4oJ1xcbiAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbGlkaXR5RGF0YSh2YWxpZGl0eTogVGhlbWVbJ3ZhbGlkJ10pOiB7XG4gICAgaWNvbjogdHlwZW9mIENoZWNrO1xuICAgIHRleHQ6IHN0cmluZztcbiAgfSB7XG4gICAgc3dpdGNoICh2YWxpZGl0eSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IENoZWNrLFxuICAgICAgICAgIHRleHQ6ICdWYWxpZCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IENsb3NlLFxuICAgICAgICAgIHRleHQ6ICdJbnZhbGlkJyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogUXVlc3Rpb25NYXJrLFxuICAgICAgICAgIHRleHQ6ICdWYWxpZGl0eSBVbmtub3duJyxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwidGhlbWVzLXdyYXBwZXJcIj5cbiAgeyNlYWNoIE9iamVjdC5rZXlzKHdpbmRvdy5Qb3Bjb3JuLnRoZW1lcykgYXMgaWR9XG4gICAge0Bjb25zdCB0aGVtZSA9IHdpbmRvdy5Qb3Bjb3JuLnRoZW1lc1tpZF19XG4gICAge0Bjb25zdCB7IGljb24sIHRleHQgfSA9IGdldFZhbGlkaXR5RGF0YSh0aGVtZS52YWxpZCl9XG4gICAgeyNrZXkgJHJlcmVuZGVyU3RvcmVbaWRdfVxuICAgICAgPGRpdiBjbGFzcz1cInRoZW1lLWNvbnRhaW5lclwiIHtpZH0gZGF0YS1lbmFibGVkPXt0aGVtZS5lbmFibGVkfT5cbiAgICAgICAgPGgxIGNsYXNzPVwidGhlbWUtaWRcIj5cbiAgICAgICAgICB7aWR9XG4gICAgICAgICAgeyNpZiBzaG91bGRWYWxpZGF0ZX1cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aGVtZS12YWxpZGl0eVwiXG4gICAgICAgICAgICAgIGRhdGEtdmFsdWU9e3RoZW1lLnZhbGlkfVxuICAgICAgICAgICAgICB1c2U6dG9vbHRpcD17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoZW1lLnZhbGlkID8gdGV4dCA6IGNyZWF0ZVRvb2x0aXBDb250ZW50KHRoZW1lLmVycm9ycyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI1BvcGNvcm5VSS1sYXllcnMnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtpY29ufSB3ZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aGVtZS1kZXNjcmlwdGlvblwiPnt0aGVtZS5kZXNjcmlwdGlvbiA/PyAnJ308L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwidGhlbWUtdG9nZ2xlXCJcbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4gd2luZG93LlBvcGNvcm4udGhlbWVzW2lkXS50b2dnbGUoKX1cbiAgICAgICAgICBvbjpzdWJtaXQ9eygpID0+IHdpbmRvdy5Qb3Bjb3JuLnRoZW1lc1tpZF0udG9nZ2xlKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlbWUuZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIHsva2V5fVxuICB7L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAudGhlbWVzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxOHJlbSwgMC41ZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG4gICAgZ2FwOiAxZW07XG4gIH1cblxuICAudGhlbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICByb3ctZ2FwOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtYmctbm9ybWFsKTtcbiAgfVxuXG4gIC50aGVtZS1pZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMC4yNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLXZhbHVlPSd0cnVlJ10ge1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtZ3JlZW4pO1xuICB9XG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLXZhbHVlPSdmYWxzZSddIHtcbiAgICBjb2xvcjogdmFyKC0tcG9wLXJlZCk7XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5W2RhdGEtdmFsdWU9J3Vua25vd24nXSB7XG4gICAgY29sb3I6IHZhcigtLXBvcC1ncmF5KTtcbiAgfVxuXG4gIC50aGVtZS1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBpbmxpbmUtYXhpcztcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjVlbTtcbiAgICBib3JkZXItYmxvY2stc3RhcnQ6IDAuMTI1cmVtIHNvbGlkIHZhcigtLXBvcC1mZy1ub3JtYWwpO1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRoZW1lLXZhbGlkaXR5ID4gOmdsb2JhbChzdmcpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC4xMjVlbTtcbiAgfVxuXG4gIC50aGVtZS10b2dnbGUge1xuICAgIGFsbDogdW5zZXQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRoZW1lLWNvbnRhaW5lcltkYXRhLWVuYWJsZWQ9J3RydWUnXSA+IC50aGVtZS10b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1yZWQpO1xuICB9XG4gIC50aGVtZS1jb250YWluZXJbZGF0YS1lbmFibGVkPSdmYWxzZSddID4gLnRoZW1lLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLWdyZWVuKTtcbiAgfVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndHMtZGVib3VuY2UnO1xuaW1wb3J0IHsgcmVyZW5kZXJUaGVtZSB9IGZyb20gJ0B1aS90YWJzL1RoZW1lcy5zdmVsdGUnO1xuaW1wb3J0IHsgY29tbWVudHMsIHNob3VsZFZhbGlkYXRlIH0gZnJvbSAnLi4nO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdUaGVtZXMnKTtcblxuZXhwb3J0IGNsYXNzIFRoZW1lIGltcGxlbWVudHMgVGhlbWUge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBsaW5rID0gUG9wY29ybk5hdGl2ZS5pc1NwbGFzaCA/ICdwb3Bjb3JuOi8vc3BsYXNoLXRoZW1lLycgOiAncG9wY29ybjovL3RoZW1lLyc7XG5cbiAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMganNvbjogc3RyaW5nO1xuICAjZWxlbWVudDogSFRNTExpbmtFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRoZW1lRGF0YTogU2ltcGxlVGhlbWUpIHtcbiAgICBhdXRvQmluZCh0aGlzKTtcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGVtZURhdGEuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuanNvbiA9IHRoZW1lRGF0YS5qc29uO1xuICAgIHRoaXMuI2VuYWJsZWQgPSB0aGVtZURhdGEuZW5hYmxlZDtcblxuICAgIGlmIChzaG91bGRWYWxpZGF0ZSkgdGhpcy4jdmFsaWRhdGUoKTtcbiAgICBpZiAodGhlbWVEYXRhLmVuYWJsZWQpIHRoaXMuZW5hYmxlKGZhbHNlKTtcbiAgfVxuXG4gICNlbmFibGVkOiBib29sZWFuO1xuICBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jZW5hYmxlZDtcbiAgfVxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xuICAgIHZhbHVlID8gdGhpcy5lbmFibGUoKSA6IHRoaXMuZGlzYWJsZSgpO1xuICAgIHRoaXMuI2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGVuYWJsZShzYXZlID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLiNlbGVtZW50KSB7XG4gICAgICBMb2dnZXIubG9nKGBcIiR7dGhpcy5pZH1cIiBpcyBhbHJlYWR5IGVuYWJsZWQuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4jZW5hYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy4jZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmlkID0gdGhpcy5pZDtcbiAgICBsaW5rLmhyZWYgPSBUaGVtZS5saW5rICsgdGhpcy5pZDtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3Bjb3JuJywgJ3RoZW1lJyk7XG4gICAgY29tbWVudHMuZW5kLmJlZm9yZShsaW5rKTtcblxuICAgIExvZ2dlci5sb2coYFwiJHt0aGlzLmlkfVwiIGVuYWJsZWQuYCk7XG4gICAgcmVyZW5kZXJUaGVtZSh0aGlzLmlkKTtcbiAgICBpZiAoc2F2ZSkgUG9wY29ybk5hdGl2ZS5zYXZlVGhlbWVTdGF0ZSh0aGlzLmlkLCB0cnVlKTtcbiAgfVxuICBkaXNhYmxlKHNhdmUgPSB0cnVlKSB7XG4gICAgaWYgKCF0aGlzLiNlbGVtZW50KSB7XG4gICAgICBMb2dnZXIud2FybihgXCIke3RoaXMuaWR9XCIgaXMgbm90IGVuYWJsZWQuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4jZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy4jZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLiNlbGVtZW50ID0gbnVsbDtcblxuICAgIExvZ2dlci5sb2coYFwiJHt0aGlzLmlkfVwiIGRpc2FibGVkLmApO1xuICAgIHJlcmVuZGVyVGhlbWUodGhpcy5pZCk7XG4gICAgaWYgKHNhdmUpIFBvcGNvcm5OYXRpdmUuc2F2ZVRoZW1lU3RhdGUodGhpcy5pZCwgZmFsc2UpO1xuICB9XG4gIHRvZ2dsZShzYXZlID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHRoaXMuZGlzYWJsZShzYXZlKTtcbiAgICBlbHNlIHRoaXMuZW5hYmxlKHNhdmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXYgPSAwO1xuICBhc3luYyB1cGRhdGUoKSB7XG4gICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgZG9pbmcgZmV0Y2goKSBkb2Vzbid0IHdvcmtcbiAgICB0aGlzLiNlbGVtZW50LmhyZWYgPSBUaGVtZS5saW5rICsgdGhpcy5pZCArIGA/JHsrK3RoaXMucmV2fWA7XG5cbiAgICBjb25zdCBwcm9taXNlID0gYXdhaXQgZmV0Y2goVGhlbWUubGluayArIHRoaXMuaWQsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHByb21pc2UudGV4dCgpO1xuICAgIGlmIChzaG91bGRWYWxpZGF0ZSkgdGhpcy4jdmFsaWRhdGUodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWQ6IGJvb2xlYW4gfCAndW5rbm93bicgPSAndW5rbm93bic7XG4gIHB1YmxpYyBlcnJvcnM6IGNzc1ZhbGlkYXRvckVycm9ycyA9IFtdO1xuICBhc3luYyAjdmFsaWRhdGUoY29udGVudD86IHN0cmluZykge1xuICAgIGNvbnRlbnQgPz89IGF3YWl0IChhd2FpdCBmZXRjaChUaGVtZS5saW5rICsgdGhpcy5pZCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KSkudGV4dCgpO1xuXG4gICAgUG9wY29ybk5hdGl2ZS52YWxpZGF0ZUNTUyhjb250ZW50KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoUG9wY29ybk5hdGl2ZS5jb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKGBWYWxpZGF0ZWQgXCIke3RoaXMuaWR9XCIuYCwgcmVzdWx0KTtcblxuICAgICAgICB0aGlzLnZhbGlkID0gcmVzdWx0LnZhbGlkO1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICAgIHJlcmVuZGVyVGhlbWUodGhpcy5pZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHZhbGlkYXRlIFwiJHt0aGlzLmlkfVwiLmAsIGUpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53YXRjaFRoZW1lcygpO1xuICB9XG5cbiAgI3JlbW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICB3YXRjaFRoZW1lcygpIHtcbiAgICB0aGlzLiNyZW1vdmVMaXN0ZW5lciA9IFBvcGNvcm5OYXRpdmUub25UaGVtZUNoYW5nZShkZWJvdW5jZSgoeyBpZCB9KSA9PiB7XG4gICAgICB3aW5kb3cuUG9wY29ybi50aGVtZXNbaWRdLnVwZGF0ZSgpO1xuICAgIH0sIDEwMCkpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLiNyZW1vdmVMaXN0ZW5lcigpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMaW5rRWxlbWVudD4oJ2xpbmtbZGF0YS1wb3Bjb3JuPVwidGhlbWVcIl0nKTtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICBlbC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVGhlbWVzKHNpbXBsZVRoZW1lczogeyBbaWQ6IHN0cmluZ106IFNpbXBsZVRoZW1lIH0pIHtcbiAgY29uc3QgdGhlbWVzOiB7IFtpZDogc3RyaW5nXTogVGhlbWUgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGlkIGluIHNpbXBsZVRoZW1lcykge1xuICAgIHRoZW1lc1tpZF0gPSBuZXcgVGhlbWUoaWQsIHNpbXBsZVRoZW1lc1tpZF0pO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lcztcbn1cbiIsICI8IS0tIFRPRE86IEFkZCBVVUlEcyB0byBlYWNoIHRhYiAtLT5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGV4cG9ydCBsZXQgdGFiczogeyBuYW1lOiBzdHJpbmc7IGNvbXBvbmVudDogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gU3ZlbHRlQ29tcG9uZW50IH1bXTtcblxuICBsZXQgc2VsZWN0ZWRUYWIgPSB0YWJzPy5bMF0/Lm5hbWU7XG4gIGNvbnN0IGxvYWRlZFRhYnM6IHN0cmluZ1tdID0gW3NlbGVjdGVkVGFiXTtcblxuICBmdW5jdGlvbiBzd2l0Y2hUYWJzKHRhYk5hbWU6IHN0cmluZykge1xuICAgIHNlbGVjdGVkVGFiID0gdGFiTmFtZTtcbiAgICBpZiAoIWxvYWRlZFRhYnMuaW5jbHVkZXModGFiTmFtZSkpIGxvYWRlZFRhYnMucHVzaCh0YWJOYW1lKTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJ0YWItbGlzdFwiPlxuICB7I2VhY2ggdGFicyBhcyB7IG5hbWUgfX1cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cInRhYlwiXG4gICAgICBkYXRhLXNlbGVjdGVkPXtzZWxlY3RlZFRhYiA9PT0gbmFtZX1cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiBzd2l0Y2hUYWJzKG5hbWUpfVxuICAgICAgb246a2V5cHJlc3M9eygpID0+IHN3aXRjaFRhYnMobmFtZSl9XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9idXR0b24+XG4gIHsvZWFjaH1cbjwvZGl2PlxueyNlYWNoIGxvYWRlZFRhYnMgYXMgdGFiTmFtZX1cbiAge0Bjb25zdCB0YWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLm5hbWUgPT09IHRhYk5hbWUpfVxuICA8ZGl2XG4gICAgY2xhc3M9XCJ0YWItd3JhcHBlclwiXG4gICAgZGF0YS1zZWxlY3RlZD17dGFiLm5hbWUgPT09IHNlbGVjdGVkVGFifVxuICAgIGRhdGEtbmFtZT17dGFiLm5hbWV9XG4gID5cbiAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXt0YWIuY29tcG9uZW50fSAvPlxuICA8L2Rpdj5cbnsvZWFjaH1cblxuPHN0eWxlPlxuICAvKiBUT0RPOiBNYWtlIHRoaXMgc2Nyb2xsYWJsZSAqL1xuICAudGFiLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFyZW07XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMC4yNXJlbSBzb2xpZCB2YXIoLS1wb3AtZ3JheSk7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgLnRhYiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC0wLjI1cmVtO1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXBvcC1pbmFjdGl2ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50YWI6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogaHNsKHZhcigtLXBvcC1ibHVlLWhzbCksIDAuNSk7XG4gICAgY29sb3I6IHZhcigtLXBvcC1ob3Zlcik7XG4gIH1cbiAgLnRhYltkYXRhLXNlbGVjdGVkPSd0cnVlJ10ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcG9wLWJsdWUpO1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtYWN0aXZlKTtcbiAgfVxuXG4gIC50YWItd3JhcHBlcltkYXRhLXNlbGVjdGVkPSdmYWxzZSddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG48L3N0eWxlPlxuIiwgIi8vIGh0dHBzOi8vYmV0dGVycHJvZ3JhbW1pbmcucHViL2Z1bGwtZmVhdHVyZWQtaG90a2V5cy1saWJyYXJ5LWluLTIwMC1saW5lcy1vZi1qYXZhc2NyaXB0LWNvZGUtODFhNzRlMzEzOGNjXG5cbmNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4ge1xuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhS2V5cy5ldmVyeSgoaykgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGspICYmIGFba10gPT09IGJba10pO1xufTtcblxuY29uc3QgaXNBcnJheUVxdWFsID0gKGEsIGIpID0+IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh2LCBpKSA9PiBpc0VxdWFsKHYsIGJbaV0pKTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoSG90a2V5ID0gKGJ1ZmZlciwgaG90a2V5KSA9PiB7XG4gIGlmIChidWZmZXIubGVuZ3RoIDwgaG90a2V5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4RGlmZiA9IGJ1ZmZlci5sZW5ndGggLSBob3RrZXkubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gaG90a2V5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgaWYgKCFpc0VxdWFsKGJ1ZmZlcltpbmRleERpZmYgKyBpXSwgaG90a2V5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnIpID0+IGFyci5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoeyAuLi5vYmosIFtrZXldOiB0cnVlIH0pLCB7fSk7XG5cbmNvbnN0IGFsbE1vZGlmaWVycyA9IFsnY3RybCcsICdzaGlmdCcsICdhbHQnLCAnbWV0YSddO1xuY29uc3QgaW5kZXhlZE1vZGlmaWVycyA9IGFycmF5VG9PYmplY3QoYWxsTW9kaWZpZXJzKTtcblxuY29uc3QgaXNIb3RrZXlWYWxpZCA9IChob3RrZXkpID0+IE9iamVjdC5rZXlzKGhvdGtleSkuZmlsdGVyKChrKSA9PiAhaW5kZXhlZE1vZGlmaWVyc1trXSkubGVuZ3RoID09PSAxO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZVR5cGUgPSAodmFsdWUsIG5hbWUsIHR5cGUpID0+IHtcbiAgdmFsaWRhdGUodHlwZW9mIHZhbHVlID09PSB0eXBlLCBgVGhlICR7bmFtZX0gbXVzdCBiZSBhICR7dHlwZX07IGdpdmVuICR7dHlwZW9mIHZhbHVlfWApO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhvdGtleSA9IChob3RrZXkpID0+XG4gIGhvdGtleS5zcGxpdCgvICsvZykubWFwKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgYXJyID0gcGFydC5zcGxpdCgnKycpLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCByZXN1bHQgPSBhcnJheVRvT2JqZWN0KGFycik7XG5cbiAgICB2YWxpZGF0ZShPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+PSBhcnIubGVuZ3RoLCBgSG90a2V5IGNvbWJpbmF0aW9uIGhhcyBkdXBsaWNhdGVzIFwiJHtob3RrZXl9XCJgKTtcblxuICAgIHZhbGlkYXRlKGlzSG90a2V5VmFsaWQocmVzdWx0KSwgYEludmFsaWQgaG90a2V5IGNvbWJpbmF0aW9uOiBcIiR7aG90a2V5fVwiYCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuY29uc3QgdmFsaWRhdGVMaXN0ZW5lckFyZ3MgPSAoaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICB2YWxpZGF0ZVR5cGUoaG90a2V5LCAnaG90a2V5JywgJ3N0cmluZycpO1xuICB2YWxpZGF0ZVR5cGUoY2FsbGJhY2ssICdjYWxsYmFjaycsICdmdW5jdGlvbicpO1xufTtcblxuY29uc3QgY3JlYXRlTGlzdGVuZXJzRm4gPSAobGlzdGVuZXJzLCBmbikgPT4gKGhvdGtleSwgY2FsbGJhY2spID0+IHtcbiAgdmFsaWRhdGVMaXN0ZW5lckFyZ3MoaG90a2V5LCBjYWxsYmFjayk7XG4gIGZuKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjayk7XG59O1xuXG5jb25zdCByZWdpc3Rlckxpc3RlbmVyID0gKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICBsaXN0ZW5lcnMucHVzaCh7IGhvdGtleTogbm9ybWFsaXplSG90a2V5KGhvdGtleSksIGNhbGxiYWNrIH0pO1xufTtcblxuY29uc3QgdW5yZWdpc3Rlckxpc3RlbmVyID0gKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSG90a2V5KGhvdGtleSk7XG5cbiAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuZmluZEluZGV4KFxuICAgIChsKSA9PiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBpc0FycmF5RXF1YWwobm9ybWFsaXplZCwgbC5ob3RrZXkpXG4gICk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5jb25zdCBkZWJvdW5jZSA9IChmbiwgdGltZSkgPT4ge1xuICBsZXQgdGltZW91dElkID0gbnVsbDtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZm4sIHRpbWUpO1xuICB9O1xufTtcblxuY29uc3QgZ2V0S2V5ID0gKGtleSkgPT4ge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJysnOlxuICAgICAgcmV0dXJuICdwbHVzJztcbiAgICBjYXNlICcgJzpcbiAgICAgIHJldHVybiAnc3BhY2UnO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBtYXkgYmUgYW4gdXBwZXJjYXNlZCBsZXR0ZXIsIGluIGNhc2UgdGhlIHNoaWZ0IGlzIGFjdGl2ZVxuICAgICAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVLZXlEb3duTGlzdGVuZXIgPSAobGlzdGVuZXJzLCBkZWJvdW5jZVRpbWUpID0+IHtcbiAgbGV0IGJ1ZmZlciA9IFtdO1xuXG4gIGNvbnN0IGNsZWFyQnVmZmVyRGVib3VuY2VkID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGJ1ZmZlciA9IFtdO1xuICB9LCBkZWJvdW5jZVRpbWUpO1xuXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVwZWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFyQnVmZmVyRGVib3VuY2VkKCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgIFtnZXRLZXkoZXZlbnQua2V5KV06IHRydWUsXG4gICAgfTtcblxuICAgIGFsbE1vZGlmaWVycy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAoZXZlbnRbYCR7bX1LZXlgXSkge1xuICAgICAgICBkZXNjcmlwdGlvblttXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidWZmZXIucHVzaChkZXNjcmlwdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGlmIChtYXRjaEhvdGtleShidWZmZXIsIGxpc3RlbmVyLmhvdGtleSkpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuY29uc3QgdmFsaWRhdGVDb250ZXh0ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBkZWJvdW5jZVRpbWUgPSA1MDAsIGF1dG9FbmFibGUgPSB0cnVlIH0gPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhbGlkYXRlVHlwZShkZWJvdW5jZVRpbWUsICdkZWJvdW5jZVRpbWUnLCAnbnVtYmVyJyk7XG4gIHZhbGlkYXRlKGRlYm91bmNlVGltZSA+IDAsICdkZWJvdW5jZVRpbWUgbXVzdCBiZSA+IDAnKTtcbiAgdmFsaWRhdGVUeXBlKGF1dG9FbmFibGUsICdhdXRvRW5hYmxlJywgJ2Jvb2xlYW4nKTtcblxuICByZXR1cm4geyBkZWJvdW5jZVRpbWUsIGF1dG9FbmFibGUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZXh0ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBkZWJvdW5jZVRpbWUsIGF1dG9FbmFibGUgfSA9IHZhbGlkYXRlQ29udGV4dChvcHRpb25zKTtcblxuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29uc3Qga2V5RG93bkxpc3RlbmVyID0gY3JlYXRlS2V5RG93bkxpc3RlbmVyKGxpc3RlbmVycywgZGVib3VuY2VUaW1lKTtcblxuICBjb25zdCBlbmFibGUgPSAoKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkxpc3RlbmVyKTtcbiAgY29uc3QgZGlzYWJsZSA9ICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duTGlzdGVuZXIpO1xuXG4gIGlmIChhdXRvRW5hYmxlKSB7XG4gICAgZW5hYmxlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBjcmVhdGVMaXN0ZW5lcnNGbihsaXN0ZW5lcnMsIHJlZ2lzdGVyTGlzdGVuZXIpLFxuICAgIHVucmVnaXN0ZXI6IGNyZWF0ZUxpc3RlbmVyc0ZuKGxpc3RlbmVycywgdW5yZWdpc3Rlckxpc3RlbmVyKSxcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgfTtcbn07XG4iLCAiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgb25EZXN0cm95LCBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IFRhYlZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1RhYlZpZXcuc3ZlbHRlJztcbiAgaW1wb3J0IFRoZW1lc1RhYiBmcm9tICcuL3RhYnMvVGhlbWVzLnN2ZWx0ZSc7XG4gIGltcG9ydCBRdWlja0Nzc1RhYiBmcm9tICcuL3RhYnMvUXVpY2tDc3Muc3ZlbHRlJztcbiAgaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0B1dGlscy9ob3RrZXlzJztcblxuICBpbXBvcnQgJ0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdC9zdHlsZXMnO1xuXG4gIGxldCBkaWFsb2c6IEhUTUxEaWFsb2dFbGVtZW50O1xuXG4gIGxldCBpc09wZW5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiB0b2dnbGVVSSgpIHtcbiAgICBpZiAoaXNPcGVuZWQpIGRpYWxvZy5jbG9zZSgpO1xuICAgIGVsc2UgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgaXNPcGVuZWQgPSAhaXNPcGVuZWQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQucG9wY29yblVpT3BlbiA9IGlzT3BlbmVkLnRvU3RyaW5nKCk7XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IGF1dG9FbmFibGU6IHRydWUgfSk7XG4gIGNvbnN0IGhvdGtleUNhbGxiYWNrID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVVSSgpO1xuICB9O1xuICBjb25zdCBlc2NhcGVDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChpc09wZW5lZCkge1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVVSSgpO1xuICAgIH1cbiAgfTtcbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgY29udGV4dC5yZWdpc3RlcihQb3Bjb3JuTmF0aXZlLmNvbmZpZy5ob3RrZXksIGhvdGtleUNhbGxiYWNrKTtcbiAgICBjb250ZXh0LnJlZ2lzdGVyKCdlc2NhcGUnLCBlc2NhcGVDYWxsYmFjayk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1RoZW1lcycsXG4gICAgICBjb21wb25lbnQ6IFRoZW1lc1RhYixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdRdWlja0NTUycsXG4gICAgICBjb21wb25lbnQ6IFF1aWNrQ3NzVGFiLFxuICAgIH0sXG4gIF07XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBjb250ZXh0LnVucmVnaXN0ZXIoUG9wY29ybk5hdGl2ZS5jb25maWcuaG90a2V5LCBob3RrZXlDYWxsYmFjayk7XG4gICAgY29udGV4dC51bnJlZ2lzdGVyKCdlc2NhcGUnLCBlc2NhcGVDYWxsYmFjayk7XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxkaWFsb2cgYmluZDp0aGlzPXtkaWFsb2d9IGNsYXNzPVwiUG9wY29yblVJLWRpYWxvZ1wiPlxuICA8VGFiVmlldyB7dGFic30gLz5cbiAgPGRpdiBpZD1cIlBvcGNvcm5VSS1sYXllcnNcIiAvPlxuPC9kaWFsb2c+XG5cbjxzdHlsZT5cbiAgOmdsb2JhbCg6d2hlcmUoLlBvcGNvcm5VSS1kaWFsb2cgOm5vdChzdmcsIHN2ZyAqKSkpIHtcbiAgICBhbGw6IHJldmVydDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIDpnbG9iYWwoOndoZXJlKC5Qb3Bjb3JuVUktZGlhbG9nIDpmb2N1cy12aXNpYmxlKSkge1xuICAgIG91dGxpbmU6IGF1dG8gMC4yNXJlbSAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLW9mZnNldDogMC4yNWVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuUG9wY29yblVJLWRpYWxvZyB7XG4gICAgLS1wb3AtaW5hY3RpdmU6IGhzbCgwLCAwJSwgNjUlKTtcbiAgICAtLXBvcC1ob3ZlcjogaHNsKDAsIDAlLCA5MCUpO1xuICAgIC0tcG9wLWFjdGl2ZTogaHNsKDAsIDAlLCAxMDAlKTtcblxuICAgIC0tcG9wLWdyYXk6IHZhcigtLXBvcC1pbmFjdGl2ZSk7XG4gICAgLS1wb3AtcmVkLWhzbDogMCwgNzUlLCA1NSU7XG4gICAgLS1wb3AtcmVkOiBoc2wodmFyKC0tcG9wLXJlZC1oc2wpKTtcbiAgICAtLXBvcC1ncmVlbi1oc2w6IDEyOCwgMTAwJSwgMzUlO1xuICAgIC0tcG9wLWdyZWVuOiBoc2wodmFyKC0tcG9wLWdyZWVuLWhzbCkpO1xuICAgIC0tcG9wLWJsdWUtaHNsOiAyMTUsIDk1JSwgNjAlO1xuICAgIC0tcG9wLWJsdWU6IGhzbCh2YXIoLS1wb3AtYmx1ZS1oc2wpKTtcblxuICAgIC0tcG9wLWZnLW5vcm1hbDogaHNsKDAsIDAlLCA4MCUpO1xuICAgIC0tcG9wLWJnLW5vcm1hbDogaHNsYSgwLCAwJSwgMCUsIDAuMTUpO1xuICAgIC0tcG9wLWJnLWhvdmVyOiBoc2xhKDAsIDAlLCA4MCUsIDAuMik7XG4gICAgLS1wb3AtYmctYWN0aXZlOiBoc2xhKDAsIDAlLCA4MCUsIDAuNCk7XG5cbiAgICAtLXBvcC10b29sdGlwLWZnOiB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICAtLXBvcC10b29sdGlwLWJnOiBoc2woMCwgMCUsIDUlKTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW5saW5lLXNpemU6IGNsYW1wKDEycmVtICsgMTB2dywgNDB2dywgNjB2dyk7XG4gICAgYmxvY2stc2l6ZTogY2xhbXAoMTJyZW0gKyAxMHZoLCA0MHZoLCA2MHZoKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICB9XG4gIC5Qb3Bjb3JuVUktZGlhbG9nW29wZW5dIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIH1cbiAgLlBvcGNvcm5VSS1kaWFsb2cgKyA6Z2xvYmFsKC5iYWNrZHJvcCksXG4gIC5Qb3Bjb3JuVUktZGlhbG9nIHtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICB9XG4gIC5Qb3Bjb3JuVUktZGlhbG9nICsgOmdsb2JhbCguYmFja2Ryb3ApLFxuICAuUG9wY29yblVJLWRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIH1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IElQQyBmcm9tICcuL2lwYyc7XG5pbXBvcnQgUXVpY2tDc3MgZnJvbSAnLi9xdWlja2Nzcyc7XG5pbXBvcnQgVGhlbWVzLCB7IHBvcHVsYXRlVGhlbWVzIH0gZnJvbSAnLi90aGVtZXMnO1xuaW1wb3J0IFVJIGZyb20gJ0B1aS9pbmRleC5zdmVsdGUnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGNvbnN0IFBvcGNvcm5OYXRpdmU6IFBvcGNvcm5OYXRpdmU7XG5cbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgUG9wY29ybjogUG9wY29ybjtcbiAgICBQb3Bjb3JuTmF0aXZlOiBQb3Bjb3JuTmF0aXZlO1xuICAgIHJlYWRvbmx5IFBvcGNvcm5JbmplY3RlZDogYm9vbGVhbjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSBCb29sZWFuKFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MpO1xuZXhwb3J0IGNvbnN0IGNvbW1lbnRzID0ge1xuICBzdGFydDogZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnIHNlY3Rpb246UG9wY29ybiAnKSxcbiAgZW5kOiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcgZW5kc2VjdGlvbiAnKSxcbn07XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IGNsYXNzIFJlbmRlcmVyIGltcGxlbWVudHMgUmVuZGVyZXIge1xuICBwcml2YXRlIElQQzogSVBDO1xuICBwcml2YXRlIFF1aWNrQ3NzOiBRdWlja0NzcztcbiAgcHJpdmF0ZSBUaGVtZXM6IFRoZW1lcztcbiAgcHJpdmF0ZSBVSTogVUk7XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBPYmplY3QuYXNzaWduKHdpbmRvdywge1xuICAgICAgUG9wY29ybkluamVjdGVkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ3BvcGNvcm4tc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGF3YWl0IFBvcGNvcm5OYXRpdmUuZ2V0U3R5bGVzKCk7XG4gICAgY29tbWVudHMuc3RhcnQuYWZ0ZXIoc3R5bGUpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5wcmVwZW5kKGNvbW1lbnRzLnN0YXJ0LCBjb21tZW50cy5lbmQpO1xuICAgIGlmICghd2luZG93LlBvcGNvcm5JbmplY3RlZCkgYXdhaXQgdGhpcy5pbml0KCk7XG5cbiAgICBjb25zdCB0aGVtZXMgPSBhd2FpdCBQb3Bjb3JuTmF0aXZlLmdldFRoZW1lcygpO1xuICAgIGNvbnN0IHF1aWNrQ3NzID0gYXdhaXQgUG9wY29ybk5hdGl2ZS5nZXRRdWlja0NzcygpO1xuICAgIHdpbmRvdy5Qb3Bjb3JuID0ge1xuICAgICAgdGhlbWVzOiBwb3B1bGF0ZVRoZW1lcyh0aGVtZXMpLFxuICAgICAgcXVpY2tDc3MsXG4gICAgfTtcblxuICAgIHRoaXMuSVBDID0gbmV3IElQQygpO1xuICAgIHRoaXMuUXVpY2tDc3MgPSBuZXcgUXVpY2tDc3MoKTtcbiAgICB0aGlzLlRoZW1lcyA9IG5ldyBUaGVtZXMoKTtcbiAgICB0aGlzLlVJID0gbmV3IFVJKHsgdGFyZ2V0OiBkb2N1bWVudC5ib2R5IH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLklQQz8uc3RvcCgpO1xuICAgIHRoaXMuUXVpY2tDc3M/LnN0b3AoKTtcbiAgICB0aGlzLlRoZW1lcz8uc3RvcCgpO1xuICAgIHRoaXMuVUk/LiRkZXN0cm95KCk7XG5cbiAgICBjb21tZW50cy5zdGFydC5yZW1vdmUoKTtcbiAgICBjb21tZW50cy5lbmQucmVtb3ZlKCk7XG5cbiAgICBkZWxldGUgd2luZG93LlBvcGNvcm47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcmVyO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNPLFNBQVMsT0FBTztBQUFDO0FBV2pCLFNBQVMsT0FBTyxLQUFLLEtBQUs7QUFFaEMsYUFBV0EsTUFB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RSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUU7QUFBQyxTQUFNLFFBQU1BLEtBQUUsV0FBUztBQUFPO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsU0FBT0EsR0FBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUU7QUFBQyxTQUFNLENBQUMsT0FBTSxRQUFRLEVBQUUsU0FBUyxFQUFFQSxFQUFDLENBQUMsSUFBRSxNQUFJO0FBQUc7QUFBQyxTQUFTLEVBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxNQUFHLEVBQUMsV0FBVUMsSUFBRSxVQUFTQyxHQUFDLElBQUVKO0FBQUUsUUFBTUssS0FBRUYsR0FBRSxJQUFFQSxHQUFFLFFBQU0sSUFBRUMsR0FBRSxRQUFNLEdBQUVFLEtBQUVILEdBQUUsSUFBRUEsR0FBRSxTQUFPLElBQUVDLEdBQUUsU0FBTyxHQUFFRyxLQUFFLEVBQUVOLEVBQUMsR0FBRU8sS0FBRSxFQUFFRCxFQUFDLEdBQUVFLEtBQUVOLEdBQUVLLEVBQUMsSUFBRSxJQUFFSixHQUFFSSxFQUFDLElBQUUsR0FBRUUsS0FBRSxRQUFNSDtBQUFFLE1BQUlJO0FBQUUsVUFBTyxFQUFFVixFQUFDLEdBQUU7QUFBQSxJQUFDLEtBQUk7QUFBTSxNQUFBVSxLQUFFLEVBQUMsR0FBRU4sSUFBRSxHQUFFRixHQUFFLElBQUVDLEdBQUUsT0FBTTtBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQVMsTUFBQU8sS0FBRSxFQUFDLEdBQUVOLElBQUUsR0FBRUYsR0FBRSxJQUFFQSxHQUFFLE9BQU07QUFBRTtBQUFBLElBQU0sS0FBSTtBQUFRLE1BQUFRLEtBQUUsRUFBQyxHQUFFUixHQUFFLElBQUVBLEdBQUUsT0FBTSxHQUFFRyxHQUFDO0FBQUU7QUFBQSxJQUFNLEtBQUk7QUFBTyxNQUFBSyxLQUFFLEVBQUMsR0FBRVIsR0FBRSxJQUFFQyxHQUFFLE9BQU0sR0FBRUUsR0FBQztBQUFFO0FBQUEsSUFBTTtBQUFRLE1BQUFLLEtBQUUsRUFB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QUFPLG1CQUFROyIsCiAgIm5hbWVzIjogWyJrIiwgImEiLCAiYiIsICJpIiwgImkiLCAiayIsICJlbGVtZW50IiwgImkiLCAiZWxlbWVudCIsICJ0ZXh0IiwgImVsZW1lbnQiLCAiZSIsICJpIiwgImMiLCAiZGV0YWNoIiwgInVwZGF0ZSIsICJpIiwgIm8iLCAibiIsICJpbmRleCIsICJpIiwgImluc3RhbmNlIiwgImNyZWF0ZV9mcmFnbWVudCIsICJjcmVhdGVfc2xvdCIsICJjcmVhdGUiLCAiYXR0ciIsICJpbmRleCIsICJpIiwgInVwZGF0ZSIsICJzdWJzY3JpYmUiLCAicnVuIiwgImRlYm91bmNlIiwgImZ1bmMiLCAid2FpdE1pbGxpc2Vjb25kcyIsICJvcHRpb25zIiwgInRpbWVvdXRJZCIsICJpc0ltbWVkaWF0ZSIsICJjYWxsYmFjayIsICJtYXhXYWl0IiwgImxhc3RJbnZva2VUaW1lIiwgIkRhdGUiLCAibm93IiwgInByb21pc2VzIiwgIm5leHRJbnZva2VUaW1lb3V0IiwgInRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uIiwgImRlYm91bmNlZEZ1bmN0aW9uIiwgImFyZ3MiLCAiY29udGV4dCIsICJ0aGlzIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAic2hvdWxkQ2FsbE5vdyIsICJjbGVhclRpbWVvdXQiLCAic2V0VGltZW91dCIsICJyZXN1bHQiLCAiYXBwbHkiLCAiZm9yRWFjaCIsICJyIiwgInB1c2giLCAiY2FuY2VsIiwgInJlYXNvbiIsICJlIiwgImkiLCAibyIsICJuIiwgIl9kZWZpbmVQcm9wZXJ0eSIsICJvd25LZXlzIiwgIl9vYmplY3RTcHJlYWQyIiwgImkiLCAieCIsICJ5IiwgImYiLCAiZXJyb3JNZXNzYWdlcyIsICJ1cGRhdGUiLCAidmFsaWRhdGUiLCAiZ2V0U3RhdGUiLCAic3RhdGUiLCAic2V0U3RhdGUiLCAiY3VycnkiLCAiaXNPYmplY3QiLCAiY29uZmlnIiwgImVycm9ySGFuZGxlciIsICJlcnJvck1lc3NhZ2VzIiwgInRocm93RXJyb3IiLCAidmFsaWRhdG9ycyIsICJjb21wb3NlIiwgIngiLCAieSIsICJmIiwgImNvbmZpZyIsICJpbml0IiwgImNvbmZpZ3VyZUxvYWRlciIsICJyZXF1aXJlIiwgInAiLCAiY3R4IiwgImN0eCIsICJjcmVhdGVfaWZfYmxvY2siLCAiRmlsZVBsdXNfZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIkZvbGRlclBsdXNfZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIlRyYXNoX2RlZmF1bHQiLCAiY3R4IiwgImNyZWF0ZV9pZl9ibG9jayIsICJjcmVhdGVfaWZfYmxvY2tfMSIsICJjcmVhdGVfaWZfYmxvY2tfMiIsICJjcmVhdGVfaWZfYmxvY2tfMyIsICJjcmVhdGVfaWZfYmxvY2tfNCIsICJjcmVhdGVfaWZfYmxvY2tfNSIsICJGb2xkZXJfZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIkZvbGRlck9wZW5fZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIkZpbGVDc3NfZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIkNpcmNsZV9kZWZhdWx0IiwgImN0eCIsICJ0IiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9jayIsICJjdHgiLCAidCIsICJpIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9jayIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrXzEiLCAiY3R4IiwgInQiLCAiUXVpY2tDc3MiLCAiaW1wb3J0U3R5bGUiLCAiY29udGVudFN0eWxlIiwgImxvY2F0aW9uIiwgIkxvZ2dlciIsICJsb2NhdGlvbiIsICJMb2dnZXIiLCAiSVBDIiwgInNlbGYiLCAiaXNPYmplY3QiLCAiayIsICJ0IiwgImkiLCAiciIsICJhIiwgImwiLCAicyIsICJjIiwgImYiLCAibSIsICJ1IiwgImciLCAiZCIsICJwIiwgImUiLCAibiIsICJvIiwgImgiLCAieSIsICJ4IiwgInciLCAidiIsICJiIiwgIkEiLCAiUiIsICJQIiwgIkUiLCAiVCIsICJEIiwgIkwiLCAiayIsICJPIiwgIkIiLCAiQyIsICJIIiwgIlMiLCAiRiIsICJNIiwgIlYiLCAiVyIsICJlIiwgIm8iLCAiaSIsICJyIiwgImwiLCAicyIsICJmIiwgIm0iLCAidSIsICJnIiwgImQiLCAicCIsICJoIiwgInciLCAiYiIsICJBIiwgIlIiLCAiUCIsICJFIiwgIlQiLCAidCIsICJhIiwgIm4iLCAiRCIsICJMIiwgImsiLCAiTyIsICJCIiwgIkMiLCAiSCIsICJlIiwgImkiLCAiciIsICJsIiwgInMiLCAiYyIsICJmIiwgIm0iLCAidSIsICJnIiwgImQiLCAicCIsICJoIiwgInkiLCAieCIsICJ0IiwgIm4iLCAidyIsICJ2IiwgIm4iLCAidCIsICJlIiwgIm8iLCAiaSIsICJyIiwgImMiLCAibCIsICJzIiwgImYiLCAidSIsICJhIiwgImQiLCAiaCIsICJwIiwgIm0iLCAiZyIsICJ5IiwgInciLCAieCIsICJ2IiwgImIiLCAiTCIsICJFIiwgIkMiLCAiTyIsICJEIiwgIkEiLCAiQiIsICJ4IiwgInkiLCAidG9vbHRpcCIsICJrIiwgIkEiLCAiQiIsICJjIiwgImN0eCIsICJjcmVhdGVfaWZfYmxvY2siLCAiY3JlYXRlX2lmX2Jsb2NrXzEiLCAiY3JlYXRlX2lmX2Jsb2NrXzIiLCAiY3JlYXRlX2lmX2Jsb2NrXzMiLCAiY3JlYXRlX2lmX2Jsb2NrXzQiLCAiY3JlYXRlX2lmX2Jsb2NrXzUiLCAiUXVlc3Rpb25fZGVmYXVsdCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImNyZWF0ZV9pZl9ibG9ja18xIiwgImNyZWF0ZV9pZl9ibG9ja18yIiwgImNyZWF0ZV9pZl9ibG9ja18zIiwgImNyZWF0ZV9pZl9ibG9ja180IiwgImNyZWF0ZV9pZl9ibG9ja181IiwgIkNoZWNrQ2lyY2xlX2RlZmF1bHQiLCAiY3R4IiwgImNyZWF0ZV9pZl9ibG9jayIsICJjcmVhdGVfaWZfYmxvY2tfMSIsICJjcmVhdGVfaWZfYmxvY2tfMiIsICJjcmVhdGVfaWZfYmxvY2tfMyIsICJjcmVhdGVfaWZfYmxvY2tfNCIsICJjcmVhdGVfaWZfYmxvY2tfNSIsICJYQ2lyY2xlX2RlZmF1bHQiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImN0eCIsICJpIiwgInJlcmVuZGVyU3RvcmUiLCAiQ2hlY2tDaXJjbGVfZGVmYXVsdCIsICJYQ2lyY2xlX2RlZmF1bHQiLCAiUXVlc3Rpb25fZGVmYXVsdCIsICJMb2dnZXIiLCAidGV4dCIsICJlIiwgIlRoZW1lcyIsICJjdHgiLCAiaSIsICJhIiwgImIiLCAiayIsICJ2IiwgImkiLCAiaW5kZXgiLCAibCIsICJtIiwgIlF1aWNrQ3NzIiwgIlRoZW1lcyJdCn0K
