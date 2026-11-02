var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// ../../../../../node_modules/@google/genai/dist/web/index.mjs
var web_exports = {};
__export(web_exports, {
  ActivityHandling: () => ActivityHandling,
  AdapterSize: () => AdapterSize,
  ApiError: () => ApiError,
  ApiSpec: () => ApiSpec,
  AuthType: () => AuthType,
  Batches: () => Batches,
  Behavior: () => Behavior,
  BlockedReason: () => BlockedReason,
  Caches: () => Caches,
  Chat: () => Chat,
  Chats: () => Chats,
  ComputeTokensResponse: () => ComputeTokensResponse,
  ControlReferenceImage: () => ControlReferenceImage,
  ControlReferenceType: () => ControlReferenceType,
  CountTokensResponse: () => CountTokensResponse,
  CreateFileResponse: () => CreateFileResponse,
  DeleteCachedContentResponse: () => DeleteCachedContentResponse,
  DeleteFileResponse: () => DeleteFileResponse,
  DeleteModelResponse: () => DeleteModelResponse,
  DynamicRetrievalConfigMode: () => DynamicRetrievalConfigMode,
  EditImageResponse: () => EditImageResponse,
  EditMode: () => EditMode,
  EmbedContentResponse: () => EmbedContentResponse,
  EndSensitivity: () => EndSensitivity,
  Environment: () => Environment,
  FeatureSelectionPreference: () => FeatureSelectionPreference,
  FileSource: () => FileSource,
  FileState: () => FileState,
  Files: () => Files,
  FinishReason: () => FinishReason,
  FunctionCallingConfigMode: () => FunctionCallingConfigMode,
  FunctionResponse: () => FunctionResponse,
  FunctionResponseScheduling: () => FunctionResponseScheduling,
  GenerateContentResponse: () => GenerateContentResponse,
  GenerateContentResponsePromptFeedback: () => GenerateContentResponsePromptFeedback,
  GenerateContentResponseUsageMetadata: () => GenerateContentResponseUsageMetadata,
  GenerateImagesResponse: () => GenerateImagesResponse,
  GenerateVideosOperation: () => GenerateVideosOperation,
  GenerateVideosResponse: () => GenerateVideosResponse,
  GoogleGenAI: () => GoogleGenAI,
  HarmBlockMethod: () => HarmBlockMethod,
  HarmBlockThreshold: () => HarmBlockThreshold,
  HarmCategory: () => HarmCategory,
  HarmProbability: () => HarmProbability,
  HarmSeverity: () => HarmSeverity,
  HttpResponse: () => HttpResponse,
  ImagePromptLanguage: () => ImagePromptLanguage,
  InlinedResponse: () => InlinedResponse,
  JobState: () => JobState,
  Language: () => Language,
  ListBatchJobsResponse: () => ListBatchJobsResponse,
  ListCachedContentsResponse: () => ListCachedContentsResponse,
  ListFilesResponse: () => ListFilesResponse,
  ListModelsResponse: () => ListModelsResponse,
  ListTuningJobsResponse: () => ListTuningJobsResponse,
  Live: () => Live,
  LiveClientToolResponse: () => LiveClientToolResponse,
  LiveMusicPlaybackControl: () => LiveMusicPlaybackControl,
  LiveMusicServerMessage: () => LiveMusicServerMessage,
  LiveSendToolResponseParameters: () => LiveSendToolResponseParameters,
  LiveServerMessage: () => LiveServerMessage,
  MaskReferenceImage: () => MaskReferenceImage,
  MaskReferenceMode: () => MaskReferenceMode,
  MediaModality: () => MediaModality,
  MediaResolution: () => MediaResolution,
  Modality: () => Modality,
  Mode: () => Mode,
  Models: () => Models,
  MusicGenerationMode: () => MusicGenerationMode,
  Operations: () => Operations,
  Outcome: () => Outcome,
  PagedItem: () => PagedItem,
  Pager: () => Pager,
  PersonGeneration: () => PersonGeneration,
  RawReferenceImage: () => RawReferenceImage,
  RecontextImageResponse: () => RecontextImageResponse,
  ReplayResponse: () => ReplayResponse,
  SafetyFilterLevel: () => SafetyFilterLevel,
  Scale: () => Scale,
  Session: () => Session,
  StartSensitivity: () => StartSensitivity,
  StyleReferenceImage: () => StyleReferenceImage,
  SubjectReferenceImage: () => SubjectReferenceImage,
  SubjectReferenceType: () => SubjectReferenceType,
  Tokens: () => Tokens,
  TrafficType: () => TrafficType,
  TurnCoverage: () => TurnCoverage,
  Type: () => Type,
  UpscaleImageResponse: () => UpscaleImageResponse,
  UrlRetrievalStatus: () => UrlRetrievalStatus,
  VideoCompressionQuality: () => VideoCompressionQuality,
  createModelContent: () => createModelContent,
  createPartFromBase64: () => createPartFromBase64,
  createPartFromCodeExecutionResult: () => createPartFromCodeExecutionResult,
  createPartFromExecutableCode: () => createPartFromExecutableCode,
  createPartFromFunctionCall: () => createPartFromFunctionCall,
  createPartFromFunctionResponse: () => createPartFromFunctionResponse,
  createPartFromText: () => createPartFromText,
  createPartFromUri: () => createPartFromUri,
  createUserContent: () => createUserContent,
  mcpToTool: () => mcpToTool,
  setDefaultBaseUrls: () => setDefaultBaseUrls
});
function setDefaultBaseUrls(baseUrlParams) {
  _defaultBaseGeminiUrl = baseUrlParams.geminiUrl;
  _defaultBaseVertexUrl = baseUrlParams.vertexUrl;
}
function getDefaultBaseUrls() {
  return {
    geminiUrl: _defaultBaseGeminiUrl,
    vertexUrl: _defaultBaseVertexUrl
  };
}
function getBaseUrl(httpOptions, vertexai, vertexBaseUrlFromEnv, geminiBaseUrlFromEnv) {
  var _a, _b;
  if (!(httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.baseUrl)) {
    const defaultBaseUrls = getDefaultBaseUrls();
    if (vertexai) {
      return (_a = defaultBaseUrls.vertexUrl) !== null && _a !== void 0 ? _a : vertexBaseUrlFromEnv;
    } else {
      return (_b = defaultBaseUrls.geminiUrl) !== null && _b !== void 0 ? _b : geminiBaseUrlFromEnv;
    }
  }
  return httpOptions.baseUrl;
}
function formatMap(templateString, valueMap) {
  const regex = /\{([^}]+)\}/g;
  return templateString.replace(regex, (match2, key) => {
    if (Object.prototype.hasOwnProperty.call(valueMap, key)) {
      const value = valueMap[key];
      return value !== void 0 && value !== null ? String(value) : "";
    } else {
      throw new Error(`Key '${key}' not found in valueMap.`);
    }
  });
}
function setValueByPath(data, keys, value) {
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (key.endsWith("[]")) {
      const keyName = key.slice(0, -2);
      if (!(keyName in data)) {
        if (Array.isArray(value)) {
          data[keyName] = Array.from({ length: value.length }, () => ({}));
        } else {
          throw new Error(`Value must be a list given an array path ${key}`);
        }
      }
      if (Array.isArray(data[keyName])) {
        const arrayData = data[keyName];
        if (Array.isArray(value)) {
          for (let j = 0; j < arrayData.length; j++) {
            const entry = arrayData[j];
            setValueByPath(entry, keys.slice(i + 1), value[j]);
          }
        } else {
          for (const d of arrayData) {
            setValueByPath(d, keys.slice(i + 1), value);
          }
        }
      }
      return;
    } else if (key.endsWith("[0]")) {
      const keyName = key.slice(0, -3);
      if (!(keyName in data)) {
        data[keyName] = [{}];
      }
      const arrayData = data[keyName];
      setValueByPath(arrayData[0], keys.slice(i + 1), value);
      return;
    }
    if (!data[key] || typeof data[key] !== "object") {
      data[key] = {};
    }
    data = data[key];
  }
  const keyToSet = keys[keys.length - 1];
  const existingData = data[keyToSet];
  if (existingData !== void 0) {
    if (!value || typeof value === "object" && Object.keys(value).length === 0) {
      return;
    }
    if (value === existingData) {
      return;
    }
    if (typeof existingData === "object" && typeof value === "object" && existingData !== null && value !== null) {
      Object.assign(existingData, value);
    } else {
      throw new Error(`Cannot set value for an existing key. Key: ${keyToSet}`);
    }
  } else {
    data[keyToSet] = value;
  }
}
function getValueByPath(data, keys) {
  try {
    if (keys.length === 1 && keys[0] === "_self") {
      return data;
    }
    for (let i = 0; i < keys.length; i++) {
      if (typeof data !== "object" || data === null) {
        return void 0;
      }
      const key = keys[i];
      if (key.endsWith("[]")) {
        const keyName = key.slice(0, -2);
        if (keyName in data) {
          const arrayData = data[keyName];
          if (!Array.isArray(arrayData)) {
            return void 0;
          }
          return arrayData.map((d) => getValueByPath(d, keys.slice(i + 1)));
        } else {
          return void 0;
        }
      } else {
        data = data[key];
      }
    }
    return data;
  } catch (error3) {
    if (error3 instanceof TypeError) {
      return void 0;
    }
    throw error3;
  }
}
function tBytes$1(fromBytes) {
  if (typeof fromBytes !== "string") {
    throw new Error("fromImageBytes must be a string");
  }
  return fromBytes;
}
function createPartFromUri(uri, mimeType) {
  return {
    fileData: {
      fileUri: uri,
      mimeType
    }
  };
}
function createPartFromText(text) {
  return {
    text
  };
}
function createPartFromFunctionCall(name, args) {
  return {
    functionCall: {
      name,
      args
    }
  };
}
function createPartFromFunctionResponse(id, name, response) {
  return {
    functionResponse: {
      id,
      name,
      response
    }
  };
}
function createPartFromBase64(data, mimeType) {
  return {
    inlineData: {
      data,
      mimeType
    }
  };
}
function createPartFromCodeExecutionResult(outcome, output) {
  return {
    codeExecutionResult: {
      outcome,
      output
    }
  };
}
function createPartFromExecutableCode(code, language) {
  return {
    executableCode: {
      code,
      language
    }
  };
}
function _isPart(obj) {
  if (typeof obj === "object" && obj !== null) {
    return "fileData" in obj || "text" in obj || "functionCall" in obj || "functionResponse" in obj || "inlineData" in obj || "videoMetadata" in obj || "codeExecutionResult" in obj || "executableCode" in obj;
  }
  return false;
}
function _toParts(partOrString) {
  const parts = [];
  if (typeof partOrString === "string") {
    parts.push(createPartFromText(partOrString));
  } else if (_isPart(partOrString)) {
    parts.push(partOrString);
  } else if (Array.isArray(partOrString)) {
    if (partOrString.length === 0) {
      throw new Error("partOrString cannot be an empty array");
    }
    for (const part of partOrString) {
      if (typeof part === "string") {
        parts.push(createPartFromText(part));
      } else if (_isPart(part)) {
        parts.push(part);
      } else {
        throw new Error("element in PartUnion must be a Part object or string");
      }
    }
  } else {
    throw new Error("partOrString must be a Part object, string, or array");
  }
  return parts;
}
function createUserContent(partOrString) {
  return {
    role: "user",
    parts: _toParts(partOrString)
  };
}
function createModelContent(partOrString) {
  return {
    role: "model",
    parts: _toParts(partOrString)
  };
}
function tModel(apiClient, model) {
  if (!model || typeof model !== "string") {
    throw new Error("model is required and must be a string");
  }
  if (apiClient.isVertexAI()) {
    if (model.startsWith("publishers/") || model.startsWith("projects/") || model.startsWith("models/")) {
      return model;
    } else if (model.indexOf("/") >= 0) {
      const parts = model.split("/", 2);
      return `publishers/${parts[0]}/models/${parts[1]}`;
    } else {
      return `publishers/google/models/${model}`;
    }
  } else {
    if (model.startsWith("models/") || model.startsWith("tunedModels/")) {
      return model;
    } else {
      return `models/${model}`;
    }
  }
}
function tCachesModel(apiClient, model) {
  const transformedModel = tModel(apiClient, model);
  if (!transformedModel) {
    return "";
  }
  if (transformedModel.startsWith("publishers/") && apiClient.isVertexAI()) {
    return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/${transformedModel}`;
  } else if (transformedModel.startsWith("models/") && apiClient.isVertexAI()) {
    return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/publishers/google/${transformedModel}`;
  } else {
    return transformedModel;
  }
}
function tBlobs(blobs) {
  if (Array.isArray(blobs)) {
    return blobs.map((blob) => tBlob(blob));
  } else {
    return [tBlob(blobs)];
  }
}
function tBlob(blob) {
  if (typeof blob === "object" && blob !== null) {
    return blob;
  }
  throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof blob}`);
}
function tImageBlob(blob) {
  const transformedBlob = tBlob(blob);
  if (transformedBlob.mimeType && transformedBlob.mimeType.startsWith("image/")) {
    return transformedBlob;
  }
  throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tAudioBlob(blob) {
  const transformedBlob = tBlob(blob);
  if (transformedBlob.mimeType && transformedBlob.mimeType.startsWith("audio/")) {
    return transformedBlob;
  }
  throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tPart(origin) {
  if (origin === null || origin === void 0) {
    throw new Error("PartUnion is required");
  }
  if (typeof origin === "object") {
    return origin;
  }
  if (typeof origin === "string") {
    return { text: origin };
  }
  throw new Error(`Unsupported part type: ${typeof origin}`);
}
function tParts(origin) {
  if (origin === null || origin === void 0 || Array.isArray(origin) && origin.length === 0) {
    throw new Error("PartListUnion is required");
  }
  if (Array.isArray(origin)) {
    return origin.map((item) => tPart(item));
  }
  return [tPart(origin)];
}
function _isContent(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "parts" in origin && Array.isArray(origin.parts);
}
function _isFunctionCallPart(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "functionCall" in origin;
}
function _isFunctionResponsePart(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "functionResponse" in origin;
}
function tContent(origin) {
  if (origin === null || origin === void 0) {
    throw new Error("ContentUnion is required");
  }
  if (_isContent(origin)) {
    return origin;
  }
  return {
    role: "user",
    parts: tParts(origin)
  };
}
function tContentsForEmbed(apiClient, origin) {
  if (!origin) {
    return [];
  }
  if (apiClient.isVertexAI() && Array.isArray(origin)) {
    return origin.flatMap((item) => {
      const content = tContent(item);
      if (content.parts && content.parts.length > 0 && content.parts[0].text !== void 0) {
        return [content.parts[0].text];
      }
      return [];
    });
  } else if (apiClient.isVertexAI()) {
    const content = tContent(origin);
    if (content.parts && content.parts.length > 0 && content.parts[0].text !== void 0) {
      return [content.parts[0].text];
    }
    return [];
  }
  if (Array.isArray(origin)) {
    return origin.map((item) => tContent(item));
  }
  return [tContent(origin)];
}
function tContents(origin) {
  if (origin === null || origin === void 0 || Array.isArray(origin) && origin.length === 0) {
    throw new Error("contents are required");
  }
  if (!Array.isArray(origin)) {
    if (_isFunctionCallPart(origin) || _isFunctionResponsePart(origin)) {
      throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
    }
    return [tContent(origin)];
  }
  const result = [];
  const accumulatedParts = [];
  const isContentArray = _isContent(origin[0]);
  for (const item of origin) {
    const isContent = _isContent(item);
    if (isContent != isContentArray) {
      throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
    }
    if (isContent) {
      result.push(item);
    } else if (_isFunctionCallPart(item) || _isFunctionResponsePart(item)) {
      throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
    } else {
      accumulatedParts.push(item);
    }
  }
  if (!isContentArray) {
    result.push({ role: "user", parts: tParts(accumulatedParts) });
  }
  return result;
}
function flattenTypeArrayToAnyOf(typeList, resultingSchema) {
  if (typeList.includes("null")) {
    resultingSchema["nullable"] = true;
  }
  const listWithoutNull = typeList.filter((type) => type !== "null");
  if (listWithoutNull.length === 1) {
    resultingSchema["type"] = Object.values(Type).includes(listWithoutNull[0].toUpperCase()) ? listWithoutNull[0].toUpperCase() : Type.TYPE_UNSPECIFIED;
  } else {
    resultingSchema["anyOf"] = [];
    for (const i of listWithoutNull) {
      resultingSchema["anyOf"].push({
        "type": Object.values(Type).includes(i.toUpperCase()) ? i.toUpperCase() : Type.TYPE_UNSPECIFIED
      });
    }
  }
}
function processJsonSchema(_jsonSchema) {
  const genAISchema = {};
  const schemaFieldNames = ["items"];
  const listSchemaFieldNames = ["anyOf"];
  const dictSchemaFieldNames = ["properties"];
  if (_jsonSchema["type"] && _jsonSchema["anyOf"]) {
    throw new Error("type and anyOf cannot be both populated.");
  }
  const incomingAnyOf = _jsonSchema["anyOf"];
  if (incomingAnyOf != null && incomingAnyOf.length == 2) {
    if (incomingAnyOf[0]["type"] === "null") {
      genAISchema["nullable"] = true;
      _jsonSchema = incomingAnyOf[1];
    } else if (incomingAnyOf[1]["type"] === "null") {
      genAISchema["nullable"] = true;
      _jsonSchema = incomingAnyOf[0];
    }
  }
  if (_jsonSchema["type"] instanceof Array) {
    flattenTypeArrayToAnyOf(_jsonSchema["type"], genAISchema);
  }
  for (const [fieldName, fieldValue] of Object.entries(_jsonSchema)) {
    if (fieldValue == null) {
      continue;
    }
    if (fieldName == "type") {
      if (fieldValue === "null") {
        throw new Error("type: null can not be the only possible type for the field.");
      }
      if (fieldValue instanceof Array) {
        continue;
      }
      genAISchema["type"] = Object.values(Type).includes(fieldValue.toUpperCase()) ? fieldValue.toUpperCase() : Type.TYPE_UNSPECIFIED;
    } else if (schemaFieldNames.includes(fieldName)) {
      genAISchema[fieldName] = processJsonSchema(fieldValue);
    } else if (listSchemaFieldNames.includes(fieldName)) {
      const listSchemaFieldValue = [];
      for (const item of fieldValue) {
        if (item["type"] == "null") {
          genAISchema["nullable"] = true;
          continue;
        }
        listSchemaFieldValue.push(processJsonSchema(item));
      }
      genAISchema[fieldName] = listSchemaFieldValue;
    } else if (dictSchemaFieldNames.includes(fieldName)) {
      const dictSchemaFieldValue = {};
      for (const [key, value] of Object.entries(fieldValue)) {
        dictSchemaFieldValue[key] = processJsonSchema(value);
      }
      genAISchema[fieldName] = dictSchemaFieldValue;
    } else {
      if (fieldName === "additionalProperties") {
        continue;
      }
      genAISchema[fieldName] = fieldValue;
    }
  }
  return genAISchema;
}
function tSchema(schema) {
  return processJsonSchema(schema);
}
function tSpeechConfig(speechConfig) {
  if (typeof speechConfig === "object") {
    return speechConfig;
  } else if (typeof speechConfig === "string") {
    return {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: speechConfig
        }
      }
    };
  } else {
    throw new Error(`Unsupported speechConfig type: ${typeof speechConfig}`);
  }
}
function tLiveSpeechConfig(speechConfig) {
  if ("multiSpeakerVoiceConfig" in speechConfig) {
    throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
  }
  return speechConfig;
}
function tTool(tool) {
  if (tool.functionDeclarations) {
    for (const functionDeclaration of tool.functionDeclarations) {
      if (functionDeclaration.parameters) {
        if (!Object.keys(functionDeclaration.parameters).includes("$schema")) {
          functionDeclaration.parameters = processJsonSchema(functionDeclaration.parameters);
        } else {
          if (!functionDeclaration.parametersJsonSchema) {
            functionDeclaration.parametersJsonSchema = functionDeclaration.parameters;
            delete functionDeclaration.parameters;
          }
        }
      }
      if (functionDeclaration.response) {
        if (!Object.keys(functionDeclaration.response).includes("$schema")) {
          functionDeclaration.response = processJsonSchema(functionDeclaration.response);
        } else {
          if (!functionDeclaration.responseJsonSchema) {
            functionDeclaration.responseJsonSchema = functionDeclaration.response;
            delete functionDeclaration.response;
          }
        }
      }
    }
  }
  return tool;
}
function tTools(tools) {
  if (tools === void 0 || tools === null) {
    throw new Error("tools is required");
  }
  if (!Array.isArray(tools)) {
    throw new Error("tools is required and must be an array of Tools");
  }
  const result = [];
  for (const tool of tools) {
    result.push(tool);
  }
  return result;
}
function resourceName(client, resourceName2, resourcePrefix, splitsAfterPrefix = 1) {
  const shouldAppendPrefix = !resourceName2.startsWith(`${resourcePrefix}/`) && resourceName2.split("/").length === splitsAfterPrefix;
  if (client.isVertexAI()) {
    if (resourceName2.startsWith("projects/")) {
      return resourceName2;
    } else if (resourceName2.startsWith("locations/")) {
      return `projects/${client.getProject()}/${resourceName2}`;
    } else if (resourceName2.startsWith(`${resourcePrefix}/`)) {
      return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourceName2}`;
    } else if (shouldAppendPrefix) {
      return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourcePrefix}/${resourceName2}`;
    } else {
      return resourceName2;
    }
  }
  if (shouldAppendPrefix) {
    return `${resourcePrefix}/${resourceName2}`;
  }
  return resourceName2;
}
function tCachedContentName(apiClient, name) {
  if (typeof name !== "string") {
    throw new Error("name must be a string");
  }
  return resourceName(apiClient, name, "cachedContents");
}
function tTuningJobStatus(status) {
  switch (status) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return status;
  }
}
function tBytes(fromImageBytes) {
  return tBytes$1(fromImageBytes);
}
function _isFile(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "name" in origin;
}
function isGeneratedVideo(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "video" in origin;
}
function isVideo(origin) {
  return origin !== null && origin !== void 0 && typeof origin === "object" && "uri" in origin;
}
function tFileName(fromName) {
  var _a;
  let name;
  if (_isFile(fromName)) {
    name = fromName.name;
  }
  if (isVideo(fromName)) {
    name = fromName.uri;
    if (name === void 0) {
      return void 0;
    }
  }
  if (isGeneratedVideo(fromName)) {
    name = (_a = fromName.video) === null || _a === void 0 ? void 0 : _a.uri;
    if (name === void 0) {
      return void 0;
    }
  }
  if (typeof fromName === "string") {
    name = fromName;
  }
  if (name === void 0) {
    throw new Error("Could not extract file name from the provided input.");
  }
  if (name.startsWith("https://")) {
    const suffix = name.split("files/")[1];
    const match2 = suffix.match(/[a-z0-9]+/);
    if (match2 === null) {
      throw new Error(`Could not extract file name from URI ${name}`);
    }
    name = match2[0];
  } else if (name.startsWith("files/")) {
    name = name.split("files/")[1];
  }
  return name;
}
function tModelsUrl(apiClient, baseModels) {
  let res;
  if (apiClient.isVertexAI()) {
    res = baseModels ? "publishers/google/models" : "models";
  } else {
    res = baseModels ? "models" : "tunedModels";
  }
  return res;
}
function tExtractModels(response) {
  for (const key of ["models", "tunedModels", "publisherModels"]) {
    if (hasField(response, key)) {
      return response[key];
    }
  }
  return [];
}
function hasField(data, fieldName) {
  return data !== null && typeof data === "object" && fieldName in data;
}
function mcpToGeminiTool(mcpTool, config2 = {}) {
  const mcpToolSchema = mcpTool;
  const functionDeclaration = {
    name: mcpToolSchema["name"],
    description: mcpToolSchema["description"],
    parametersJsonSchema: mcpToolSchema["inputSchema"]
  };
  if (config2.behavior) {
    functionDeclaration["behavior"] = config2.behavior;
  }
  const geminiTool = {
    functionDeclarations: [
      functionDeclaration
    ]
  };
  return geminiTool;
}
function mcpToolsToGeminiTool(mcpTools, config2 = {}) {
  const functionDeclarations = [];
  const toolNames = /* @__PURE__ */ new Set();
  for (const mcpTool of mcpTools) {
    const mcpToolName = mcpTool.name;
    if (toolNames.has(mcpToolName)) {
      throw new Error(`Duplicate function name ${mcpToolName} found in MCP tools. Please ensure function names are unique.`);
    }
    toolNames.add(mcpToolName);
    const geminiTool = mcpToGeminiTool(mcpTool, config2);
    if (geminiTool.functionDeclarations) {
      functionDeclarations.push(...geminiTool.functionDeclarations);
    }
  }
  return { functionDeclarations };
}
function tBatchJobSource(apiClient, src) {
  if (typeof src !== "string" && !Array.isArray(src)) {
    if (apiClient && apiClient.isVertexAI()) {
      if (src.gcsUri && src.bigqueryUri) {
        throw new Error("Only one of `gcsUri` or `bigqueryUri` can be set.");
      } else if (!src.gcsUri && !src.bigqueryUri) {
        throw new Error("One of `gcsUri` or `bigqueryUri` must be set.");
      }
    } else {
      if (src.inlinedRequests && src.fileName) {
        throw new Error("Only one of `inlinedRequests` or `fileName` can be set.");
      } else if (!src.inlinedRequests && !src.fileName) {
        throw new Error("One of `inlinedRequests` or `fileName` must be set.");
      }
    }
    return src;
  } else if (Array.isArray(src)) {
    return { inlinedRequests: src };
  } else if (typeof src === "string") {
    if (src.startsWith("gs://")) {
      return {
        format: "jsonl",
        gcsUri: [src]
        // GCS URI is expected as an array
      };
    } else if (src.startsWith("bq://")) {
      return {
        format: "bigquery",
        bigqueryUri: src
      };
    } else if (src.startsWith("files/")) {
      return {
        fileName: src
      };
    }
  }
  throw new Error(`Unsupported source: ${src}`);
}
function tBatchJobDestination(dest) {
  if (typeof dest !== "string") {
    return dest;
  }
  const destString = dest;
  if (destString.startsWith("gs://")) {
    return {
      format: "jsonl",
      gcsUri: destString
    };
  } else if (destString.startsWith("bq://")) {
    return {
      format: "bigquery",
      bigqueryUri: destString
    };
  } else {
    throw new Error(`Unsupported destination: ${destString}`);
  }
}
function tBatchJobName(apiClient, name) {
  const nameString = name;
  if (!apiClient.isVertexAI()) {
    const mldevPattern = /batches\/[^/]+$/;
    if (mldevPattern.test(nameString)) {
      return nameString.split("/").pop();
    } else {
      throw new Error(`Invalid batch job name: ${nameString}.`);
    }
  }
  const vertexPattern = /^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/;
  if (vertexPattern.test(nameString)) {
    return nameString.split("/").pop();
  } else if (/^\d+$/.test(nameString)) {
    return nameString;
  } else {
    throw new Error(`Invalid batch job name: ${nameString}.`);
  }
}
function tJobState(state) {
  const stateString = state;
  if (stateString === "BATCH_STATE_UNSPECIFIED") {
    return "JOB_STATE_UNSPECIFIED";
  } else if (stateString === "BATCH_STATE_PENDING") {
    return "JOB_STATE_PENDING";
  } else if (stateString === "BATCH_STATE_SUCCEEDED") {
    return "JOB_STATE_SUCCEEDED";
  } else if (stateString === "BATCH_STATE_FAILED") {
    return "JOB_STATE_FAILED";
  } else if (stateString === "BATCH_STATE_CANCELLED") {
    return "JOB_STATE_CANCELLED";
  } else {
    return stateString;
  }
}
function videoMetadataToMldev$4(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToMldev$4(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToMldev$4(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToMldev$4(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToMldev$4(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToMldev$4(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToMldev$4(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToMldev$4(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToMldev$4(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function schemaToMldev$1(fromObject) {
  const toObject = {};
  const fromAnyOf = getValueByPath(fromObject, ["anyOf"]);
  if (fromAnyOf != null) {
    setValueByPath(toObject, ["anyOf"], fromAnyOf);
  }
  const fromDefault = getValueByPath(fromObject, ["default"]);
  if (fromDefault != null) {
    setValueByPath(toObject, ["default"], fromDefault);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromEnum = getValueByPath(fromObject, ["enum"]);
  if (fromEnum != null) {
    setValueByPath(toObject, ["enum"], fromEnum);
  }
  const fromExample = getValueByPath(fromObject, ["example"]);
  if (fromExample != null) {
    setValueByPath(toObject, ["example"], fromExample);
  }
  const fromFormat = getValueByPath(fromObject, ["format"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["format"], fromFormat);
  }
  const fromItems = getValueByPath(fromObject, ["items"]);
  if (fromItems != null) {
    setValueByPath(toObject, ["items"], fromItems);
  }
  const fromMaxItems = getValueByPath(fromObject, ["maxItems"]);
  if (fromMaxItems != null) {
    setValueByPath(toObject, ["maxItems"], fromMaxItems);
  }
  const fromMaxLength = getValueByPath(fromObject, ["maxLength"]);
  if (fromMaxLength != null) {
    setValueByPath(toObject, ["maxLength"], fromMaxLength);
  }
  const fromMaxProperties = getValueByPath(fromObject, [
    "maxProperties"
  ]);
  if (fromMaxProperties != null) {
    setValueByPath(toObject, ["maxProperties"], fromMaxProperties);
  }
  const fromMaximum = getValueByPath(fromObject, ["maximum"]);
  if (fromMaximum != null) {
    setValueByPath(toObject, ["maximum"], fromMaximum);
  }
  const fromMinItems = getValueByPath(fromObject, ["minItems"]);
  if (fromMinItems != null) {
    setValueByPath(toObject, ["minItems"], fromMinItems);
  }
  const fromMinLength = getValueByPath(fromObject, ["minLength"]);
  if (fromMinLength != null) {
    setValueByPath(toObject, ["minLength"], fromMinLength);
  }
  const fromMinProperties = getValueByPath(fromObject, [
    "minProperties"
  ]);
  if (fromMinProperties != null) {
    setValueByPath(toObject, ["minProperties"], fromMinProperties);
  }
  const fromMinimum = getValueByPath(fromObject, ["minimum"]);
  if (fromMinimum != null) {
    setValueByPath(toObject, ["minimum"], fromMinimum);
  }
  const fromNullable = getValueByPath(fromObject, ["nullable"]);
  if (fromNullable != null) {
    setValueByPath(toObject, ["nullable"], fromNullable);
  }
  const fromPattern = getValueByPath(fromObject, ["pattern"]);
  if (fromPattern != null) {
    setValueByPath(toObject, ["pattern"], fromPattern);
  }
  const fromProperties = getValueByPath(fromObject, ["properties"]);
  if (fromProperties != null) {
    setValueByPath(toObject, ["properties"], fromProperties);
  }
  const fromPropertyOrdering = getValueByPath(fromObject, [
    "propertyOrdering"
  ]);
  if (fromPropertyOrdering != null) {
    setValueByPath(toObject, ["propertyOrdering"], fromPropertyOrdering);
  }
  const fromRequired = getValueByPath(fromObject, ["required"]);
  if (fromRequired != null) {
    setValueByPath(toObject, ["required"], fromRequired);
  }
  const fromTitle = getValueByPath(fromObject, ["title"]);
  if (fromTitle != null) {
    setValueByPath(toObject, ["title"], fromTitle);
  }
  const fromType = getValueByPath(fromObject, ["type"]);
  if (fromType != null) {
    setValueByPath(toObject, ["type"], fromType);
  }
  return toObject;
}
function safetySettingToMldev$1(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["method"]) !== void 0) {
    throw new Error("method parameter is not supported in Gemini API.");
  }
  const fromCategory = getValueByPath(fromObject, ["category"]);
  if (fromCategory != null) {
    setValueByPath(toObject, ["category"], fromCategory);
  }
  const fromThreshold = getValueByPath(fromObject, ["threshold"]);
  if (fromThreshold != null) {
    setValueByPath(toObject, ["threshold"], fromThreshold);
  }
  return toObject;
}
function functionDeclarationToMldev$4(fromObject) {
  const toObject = {};
  const fromBehavior = getValueByPath(fromObject, ["behavior"]);
  if (fromBehavior != null) {
    setValueByPath(toObject, ["behavior"], fromBehavior);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToMldev$4(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToMldev$4(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToMldev$4(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToMldev$4(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToMldev$4(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$4(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function urlContextToMldev$4() {
  const toObject = {};
  return toObject;
}
function toolToMldev$4(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToMldev$4(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  if (getValueByPath(fromObject, ["retrieval"]) !== void 0) {
    throw new Error("retrieval parameter is not supported in Gemini API.");
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToMldev$4(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$4(fromGoogleSearchRetrieval));
  }
  if (getValueByPath(fromObject, ["enterpriseWebSearch"]) !== void 0) {
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["googleMaps"]) !== void 0) {
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToMldev$4());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function functionCallingConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromAllowedFunctionNames = getValueByPath(fromObject, [
    "allowedFunctionNames"
  ]);
  if (fromAllowedFunctionNames != null) {
    setValueByPath(toObject, ["allowedFunctionNames"], fromAllowedFunctionNames);
  }
  return toObject;
}
function latLngToMldev$2(fromObject) {
  const toObject = {};
  const fromLatitude = getValueByPath(fromObject, ["latitude"]);
  if (fromLatitude != null) {
    setValueByPath(toObject, ["latitude"], fromLatitude);
  }
  const fromLongitude = getValueByPath(fromObject, ["longitude"]);
  if (fromLongitude != null) {
    setValueByPath(toObject, ["longitude"], fromLongitude);
  }
  return toObject;
}
function retrievalConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromLatLng = getValueByPath(fromObject, ["latLng"]);
  if (fromLatLng != null) {
    setValueByPath(toObject, ["latLng"], latLngToMldev$2(fromLatLng));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function toolConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromFunctionCallingConfig = getValueByPath(fromObject, [
    "functionCallingConfig"
  ]);
  if (fromFunctionCallingConfig != null) {
    setValueByPath(toObject, ["functionCallingConfig"], functionCallingConfigToMldev$2(fromFunctionCallingConfig));
  }
  const fromRetrievalConfig = getValueByPath(fromObject, [
    "retrievalConfig"
  ]);
  if (fromRetrievalConfig != null) {
    setValueByPath(toObject, ["retrievalConfig"], retrievalConfigToMldev$2(fromRetrievalConfig));
  }
  return toObject;
}
function prebuiltVoiceConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$3(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speakerVoiceConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromSpeaker = getValueByPath(fromObject, ["speaker"]);
  if (fromSpeaker != null) {
    setValueByPath(toObject, ["speaker"], fromSpeaker);
  }
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$3(fromVoiceConfig));
  }
  return toObject;
}
function multiSpeakerVoiceConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
    "speakerVoiceConfigs"
  ]);
  if (fromSpeakerVoiceConfigs != null) {
    let transformedList = fromSpeakerVoiceConfigs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return speakerVoiceConfigToMldev$3(item);
      });
    }
    setValueByPath(toObject, ["speakerVoiceConfigs"], transformedList);
  }
  return toObject;
}
function speechConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$3(fromVoiceConfig));
  }
  const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
    "multiSpeakerVoiceConfig"
  ]);
  if (fromMultiSpeakerVoiceConfig != null) {
    setValueByPath(toObject, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$3(fromMultiSpeakerVoiceConfig));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function thinkingConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromIncludeThoughts = getValueByPath(fromObject, [
    "includeThoughts"
  ]);
  if (fromIncludeThoughts != null) {
    setValueByPath(toObject, ["includeThoughts"], fromIncludeThoughts);
  }
  const fromThinkingBudget = getValueByPath(fromObject, [
    "thinkingBudget"
  ]);
  if (fromThinkingBudget != null) {
    setValueByPath(toObject, ["thinkingBudget"], fromThinkingBudget);
  }
  return toObject;
}
function generateContentConfigToMldev$1(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToMldev$4(tContent(fromSystemInstruction)));
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (fromTemperature != null) {
    setValueByPath(toObject, ["temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (fromTopP != null) {
    setValueByPath(toObject, ["topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (fromTopK != null) {
    setValueByPath(toObject, ["topK"], fromTopK);
  }
  const fromCandidateCount = getValueByPath(fromObject, [
    "candidateCount"
  ]);
  if (fromCandidateCount != null) {
    setValueByPath(toObject, ["candidateCount"], fromCandidateCount);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (fromMaxOutputTokens != null) {
    setValueByPath(toObject, ["maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromStopSequences = getValueByPath(fromObject, [
    "stopSequences"
  ]);
  if (fromStopSequences != null) {
    setValueByPath(toObject, ["stopSequences"], fromStopSequences);
  }
  const fromResponseLogprobs = getValueByPath(fromObject, [
    "responseLogprobs"
  ]);
  if (fromResponseLogprobs != null) {
    setValueByPath(toObject, ["responseLogprobs"], fromResponseLogprobs);
  }
  const fromLogprobs = getValueByPath(fromObject, ["logprobs"]);
  if (fromLogprobs != null) {
    setValueByPath(toObject, ["logprobs"], fromLogprobs);
  }
  const fromPresencePenalty = getValueByPath(fromObject, [
    "presencePenalty"
  ]);
  if (fromPresencePenalty != null) {
    setValueByPath(toObject, ["presencePenalty"], fromPresencePenalty);
  }
  const fromFrequencyPenalty = getValueByPath(fromObject, [
    "frequencyPenalty"
  ]);
  if (fromFrequencyPenalty != null) {
    setValueByPath(toObject, ["frequencyPenalty"], fromFrequencyPenalty);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (fromSeed != null) {
    setValueByPath(toObject, ["seed"], fromSeed);
  }
  const fromResponseMimeType = getValueByPath(fromObject, [
    "responseMimeType"
  ]);
  if (fromResponseMimeType != null) {
    setValueByPath(toObject, ["responseMimeType"], fromResponseMimeType);
  }
  const fromResponseSchema = getValueByPath(fromObject, [
    "responseSchema"
  ]);
  if (fromResponseSchema != null) {
    setValueByPath(toObject, ["responseSchema"], schemaToMldev$1(tSchema(fromResponseSchema)));
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  if (getValueByPath(fromObject, ["routingConfig"]) !== void 0) {
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["modelSelectionConfig"]) !== void 0) {
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  }
  const fromSafetySettings = getValueByPath(fromObject, [
    "safetySettings"
  ]);
  if (parentObject !== void 0 && fromSafetySettings != null) {
    let transformedList = fromSafetySettings;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return safetySettingToMldev$1(item);
      });
    }
    setValueByPath(parentObject, ["safetySettings"], transformedList);
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToMldev$4(tTool(item));
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromToolConfig = getValueByPath(fromObject, ["toolConfig"]);
  if (parentObject !== void 0 && fromToolConfig != null) {
    setValueByPath(parentObject, ["toolConfig"], toolConfigToMldev$2(fromToolConfig));
  }
  if (getValueByPath(fromObject, ["labels"]) !== void 0) {
    throw new Error("labels parameter is not supported in Gemini API.");
  }
  const fromCachedContent = getValueByPath(fromObject, [
    "cachedContent"
  ]);
  if (parentObject !== void 0 && fromCachedContent != null) {
    setValueByPath(parentObject, ["cachedContent"], tCachedContentName(apiClient, fromCachedContent));
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (fromResponseModalities != null) {
    setValueByPath(toObject, ["responseModalities"], fromResponseModalities);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (fromMediaResolution != null) {
    setValueByPath(toObject, ["mediaResolution"], fromMediaResolution);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (fromSpeechConfig != null) {
    setValueByPath(toObject, ["speechConfig"], speechConfigToMldev$3(tSpeechConfig(fromSpeechConfig)));
  }
  if (getValueByPath(fromObject, ["audioTimestamp"]) !== void 0) {
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  }
  const fromThinkingConfig = getValueByPath(fromObject, [
    "thinkingConfig"
  ]);
  if (fromThinkingConfig != null) {
    setValueByPath(toObject, ["thinkingConfig"], thinkingConfigToMldev$1(fromThinkingConfig));
  }
  return toObject;
}
function inlinedRequestToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["request", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToMldev$4(item);
      });
    }
    setValueByPath(toObject, ["request", "contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["request", "generationConfig"], generateContentConfigToMldev$1(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function batchJobSourceToMldev(apiClient, fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["format"]) !== void 0) {
    throw new Error("format parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["gcsUri"]) !== void 0) {
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["bigqueryUri"]) !== void 0) {
    throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  }
  const fromFileName = getValueByPath(fromObject, ["fileName"]);
  if (fromFileName != null) {
    setValueByPath(toObject, ["fileName"], fromFileName);
  }
  const fromInlinedRequests = getValueByPath(fromObject, [
    "inlinedRequests"
  ]);
  if (fromInlinedRequests != null) {
    let transformedList = fromInlinedRequests;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return inlinedRequestToMldev(apiClient, item);
      });
    }
    setValueByPath(toObject, ["requests", "requests"], transformedList);
  }
  return toObject;
}
function createBatchJobConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["batch", "displayName"], fromDisplayName);
  }
  if (getValueByPath(fromObject, ["dest"]) !== void 0) {
    throw new Error("dest parameter is not supported in Gemini API.");
  }
  return toObject;
}
function createBatchJobParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromSrc = getValueByPath(fromObject, ["src"]);
  if (fromSrc != null) {
    setValueByPath(toObject, ["batch", "inputConfig"], batchJobSourceToMldev(apiClient, tBatchJobSource(apiClient, fromSrc)));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createBatchJobConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function getBatchJobParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function cancelBatchJobParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listBatchJobsConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  if (getValueByPath(fromObject, ["filter"]) !== void 0) {
    throw new Error("filter parameter is not supported in Gemini API.");
  }
  return toObject;
}
function listBatchJobsParametersToMldev(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listBatchJobsConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function deleteBatchJobParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function batchJobSourceToVertex(fromObject) {
  const toObject = {};
  const fromFormat = getValueByPath(fromObject, ["format"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["instancesFormat"], fromFormat);
  }
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsSource", "uris"], fromGcsUri);
  }
  const fromBigqueryUri = getValueByPath(fromObject, ["bigqueryUri"]);
  if (fromBigqueryUri != null) {
    setValueByPath(toObject, ["bigquerySource", "inputUri"], fromBigqueryUri);
  }
  if (getValueByPath(fromObject, ["fileName"]) !== void 0) {
    throw new Error("fileName parameter is not supported in Vertex AI.");
  }
  if (getValueByPath(fromObject, ["inlinedRequests"]) !== void 0) {
    throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  }
  return toObject;
}
function batchJobDestinationToVertex(fromObject) {
  const toObject = {};
  const fromFormat = getValueByPath(fromObject, ["format"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["predictionsFormat"], fromFormat);
  }
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsDestination", "outputUriPrefix"], fromGcsUri);
  }
  const fromBigqueryUri = getValueByPath(fromObject, ["bigqueryUri"]);
  if (fromBigqueryUri != null) {
    setValueByPath(toObject, ["bigqueryDestination", "outputUri"], fromBigqueryUri);
  }
  if (getValueByPath(fromObject, ["fileName"]) !== void 0) {
    throw new Error("fileName parameter is not supported in Vertex AI.");
  }
  if (getValueByPath(fromObject, ["inlinedResponses"]) !== void 0) {
    throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
  }
  return toObject;
}
function createBatchJobConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromDisplayName);
  }
  const fromDest = getValueByPath(fromObject, ["dest"]);
  if (parentObject !== void 0 && fromDest != null) {
    setValueByPath(parentObject, ["outputConfig"], batchJobDestinationToVertex(tBatchJobDestination(fromDest)));
  }
  return toObject;
}
function createBatchJobParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], tModel(apiClient, fromModel));
  }
  const fromSrc = getValueByPath(fromObject, ["src"]);
  if (fromSrc != null) {
    setValueByPath(toObject, ["inputConfig"], batchJobSourceToVertex(tBatchJobSource(apiClient, fromSrc)));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createBatchJobConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function getBatchJobParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function cancelBatchJobParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listBatchJobsConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  const fromFilter = getValueByPath(fromObject, ["filter"]);
  if (parentObject !== void 0 && fromFilter != null) {
    setValueByPath(parentObject, ["_query", "filter"], fromFilter);
  }
  return toObject;
}
function listBatchJobsParametersToVertex(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listBatchJobsConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function deleteBatchJobParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tBatchJobName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function videoMetadataFromMldev$2(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobFromMldev$2(fromObject) {
  const toObject = {};
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataFromMldev$2(fromObject) {
  const toObject = {};
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partFromMldev$2(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataFromMldev$2(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobFromMldev$2(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataFromMldev$2(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentFromMldev$2(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partFromMldev$2(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function citationMetadataFromMldev$1(fromObject) {
  const toObject = {};
  const fromCitations = getValueByPath(fromObject, ["citationSources"]);
  if (fromCitations != null) {
    setValueByPath(toObject, ["citations"], fromCitations);
  }
  return toObject;
}
function urlMetadataFromMldev$2(fromObject) {
  const toObject = {};
  const fromRetrievedUrl = getValueByPath(fromObject, ["retrievedUrl"]);
  if (fromRetrievedUrl != null) {
    setValueByPath(toObject, ["retrievedUrl"], fromRetrievedUrl);
  }
  const fromUrlRetrievalStatus = getValueByPath(fromObject, [
    "urlRetrievalStatus"
  ]);
  if (fromUrlRetrievalStatus != null) {
    setValueByPath(toObject, ["urlRetrievalStatus"], fromUrlRetrievalStatus);
  }
  return toObject;
}
function urlContextMetadataFromMldev$2(fromObject) {
  const toObject = {};
  const fromUrlMetadata = getValueByPath(fromObject, ["urlMetadata"]);
  if (fromUrlMetadata != null) {
    let transformedList = fromUrlMetadata;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return urlMetadataFromMldev$2(item);
      });
    }
    setValueByPath(toObject, ["urlMetadata"], transformedList);
  }
  return toObject;
}
function candidateFromMldev$1(fromObject) {
  const toObject = {};
  const fromContent = getValueByPath(fromObject, ["content"]);
  if (fromContent != null) {
    setValueByPath(toObject, ["content"], contentFromMldev$2(fromContent));
  }
  const fromCitationMetadata = getValueByPath(fromObject, [
    "citationMetadata"
  ]);
  if (fromCitationMetadata != null) {
    setValueByPath(toObject, ["citationMetadata"], citationMetadataFromMldev$1(fromCitationMetadata));
  }
  const fromTokenCount = getValueByPath(fromObject, ["tokenCount"]);
  if (fromTokenCount != null) {
    setValueByPath(toObject, ["tokenCount"], fromTokenCount);
  }
  const fromFinishReason = getValueByPath(fromObject, ["finishReason"]);
  if (fromFinishReason != null) {
    setValueByPath(toObject, ["finishReason"], fromFinishReason);
  }
  const fromUrlContextMetadata = getValueByPath(fromObject, [
    "urlContextMetadata"
  ]);
  if (fromUrlContextMetadata != null) {
    setValueByPath(toObject, ["urlContextMetadata"], urlContextMetadataFromMldev$2(fromUrlContextMetadata));
  }
  const fromAvgLogprobs = getValueByPath(fromObject, ["avgLogprobs"]);
  if (fromAvgLogprobs != null) {
    setValueByPath(toObject, ["avgLogprobs"], fromAvgLogprobs);
  }
  const fromGroundingMetadata = getValueByPath(fromObject, [
    "groundingMetadata"
  ]);
  if (fromGroundingMetadata != null) {
    setValueByPath(toObject, ["groundingMetadata"], fromGroundingMetadata);
  }
  const fromIndex = getValueByPath(fromObject, ["index"]);
  if (fromIndex != null) {
    setValueByPath(toObject, ["index"], fromIndex);
  }
  const fromLogprobsResult = getValueByPath(fromObject, [
    "logprobsResult"
  ]);
  if (fromLogprobsResult != null) {
    setValueByPath(toObject, ["logprobsResult"], fromLogprobsResult);
  }
  const fromSafetyRatings = getValueByPath(fromObject, [
    "safetyRatings"
  ]);
  if (fromSafetyRatings != null) {
    setValueByPath(toObject, ["safetyRatings"], fromSafetyRatings);
  }
  return toObject;
}
function generateContentResponseFromMldev$1(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromCandidates = getValueByPath(fromObject, ["candidates"]);
  if (fromCandidates != null) {
    let transformedList = fromCandidates;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return candidateFromMldev$1(item);
      });
    }
    setValueByPath(toObject, ["candidates"], transformedList);
  }
  const fromModelVersion = getValueByPath(fromObject, ["modelVersion"]);
  if (fromModelVersion != null) {
    setValueByPath(toObject, ["modelVersion"], fromModelVersion);
  }
  const fromPromptFeedback = getValueByPath(fromObject, [
    "promptFeedback"
  ]);
  if (fromPromptFeedback != null) {
    setValueByPath(toObject, ["promptFeedback"], fromPromptFeedback);
  }
  const fromResponseId = getValueByPath(fromObject, ["responseId"]);
  if (fromResponseId != null) {
    setValueByPath(toObject, ["responseId"], fromResponseId);
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], fromUsageMetadata);
  }
  return toObject;
}
function jobErrorFromMldev(fromObject) {
  const toObject = {};
  const fromDetails = getValueByPath(fromObject, ["details"]);
  if (fromDetails != null) {
    setValueByPath(toObject, ["details"], fromDetails);
  }
  const fromCode = getValueByPath(fromObject, ["code"]);
  if (fromCode != null) {
    setValueByPath(toObject, ["code"], fromCode);
  }
  const fromMessage = getValueByPath(fromObject, ["message"]);
  if (fromMessage != null) {
    setValueByPath(toObject, ["message"], fromMessage);
  }
  return toObject;
}
function inlinedResponseFromMldev(fromObject) {
  const toObject = {};
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], generateContentResponseFromMldev$1(fromResponse));
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], jobErrorFromMldev(fromError));
  }
  return toObject;
}
function batchJobDestinationFromMldev(fromObject) {
  const toObject = {};
  const fromFileName = getValueByPath(fromObject, ["responsesFile"]);
  if (fromFileName != null) {
    setValueByPath(toObject, ["fileName"], fromFileName);
  }
  const fromInlinedResponses = getValueByPath(fromObject, [
    "inlinedResponses",
    "inlinedResponses"
  ]);
  if (fromInlinedResponses != null) {
    let transformedList = fromInlinedResponses;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return inlinedResponseFromMldev(item);
      });
    }
    setValueByPath(toObject, ["inlinedResponses"], transformedList);
  }
  return toObject;
}
function batchJobFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, [
    "metadata",
    "displayName"
  ]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromState = getValueByPath(fromObject, ["metadata", "state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], tJobState(fromState));
  }
  const fromCreateTime = getValueByPath(fromObject, [
    "metadata",
    "createTime"
  ]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromEndTime = getValueByPath(fromObject, [
    "metadata",
    "endTime"
  ]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, [
    "metadata",
    "updateTime"
  ]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromModel = getValueByPath(fromObject, ["metadata", "model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromDest = getValueByPath(fromObject, ["metadata", "output"]);
  if (fromDest != null) {
    setValueByPath(toObject, ["dest"], batchJobDestinationFromMldev(fromDest));
  }
  return toObject;
}
function listBatchJobsResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromBatchJobs = getValueByPath(fromObject, ["operations"]);
  if (fromBatchJobs != null) {
    let transformedList = fromBatchJobs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return batchJobFromMldev(item);
      });
    }
    setValueByPath(toObject, ["batchJobs"], transformedList);
  }
  return toObject;
}
function deleteResourceJobFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDone = getValueByPath(fromObject, ["done"]);
  if (fromDone != null) {
    setValueByPath(toObject, ["done"], fromDone);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], jobErrorFromMldev(fromError));
  }
  return toObject;
}
function jobErrorFromVertex(fromObject) {
  const toObject = {};
  const fromDetails = getValueByPath(fromObject, ["details"]);
  if (fromDetails != null) {
    setValueByPath(toObject, ["details"], fromDetails);
  }
  const fromCode = getValueByPath(fromObject, ["code"]);
  if (fromCode != null) {
    setValueByPath(toObject, ["code"], fromCode);
  }
  const fromMessage = getValueByPath(fromObject, ["message"]);
  if (fromMessage != null) {
    setValueByPath(toObject, ["message"], fromMessage);
  }
  return toObject;
}
function batchJobSourceFromVertex(fromObject) {
  const toObject = {};
  const fromFormat = getValueByPath(fromObject, ["instancesFormat"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["format"], fromFormat);
  }
  const fromGcsUri = getValueByPath(fromObject, ["gcsSource", "uris"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsUri"], fromGcsUri);
  }
  const fromBigqueryUri = getValueByPath(fromObject, [
    "bigquerySource",
    "inputUri"
  ]);
  if (fromBigqueryUri != null) {
    setValueByPath(toObject, ["bigqueryUri"], fromBigqueryUri);
  }
  return toObject;
}
function batchJobDestinationFromVertex(fromObject) {
  const toObject = {};
  const fromFormat = getValueByPath(fromObject, ["predictionsFormat"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["format"], fromFormat);
  }
  const fromGcsUri = getValueByPath(fromObject, [
    "gcsDestination",
    "outputUriPrefix"
  ]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsUri"], fromGcsUri);
  }
  const fromBigqueryUri = getValueByPath(fromObject, [
    "bigqueryDestination",
    "outputUri"
  ]);
  if (fromBigqueryUri != null) {
    setValueByPath(toObject, ["bigqueryUri"], fromBigqueryUri);
  }
  return toObject;
}
function batchJobFromVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromState = getValueByPath(fromObject, ["state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], tJobState(fromState));
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], jobErrorFromVertex(fromError));
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromSrc = getValueByPath(fromObject, ["inputConfig"]);
  if (fromSrc != null) {
    setValueByPath(toObject, ["src"], batchJobSourceFromVertex(fromSrc));
  }
  const fromDest = getValueByPath(fromObject, ["outputConfig"]);
  if (fromDest != null) {
    setValueByPath(toObject, ["dest"], batchJobDestinationFromVertex(fromDest));
  }
  return toObject;
}
function listBatchJobsResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromBatchJobs = getValueByPath(fromObject, [
    "batchPredictionJobs"
  ]);
  if (fromBatchJobs != null) {
    let transformedList = fromBatchJobs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return batchJobFromVertex(item);
      });
    }
    setValueByPath(toObject, ["batchJobs"], transformedList);
  }
  return toObject;
}
function deleteResourceJobFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDone = getValueByPath(fromObject, ["done"]);
  if (fromDone != null) {
    setValueByPath(toObject, ["done"], fromDone);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], jobErrorFromVertex(fromError));
  }
  return toObject;
}
function videoMetadataToMldev$3(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToMldev$3(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToMldev$3(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToMldev$3(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToMldev$3(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToMldev$3(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToMldev$3(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToMldev$3(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToMldev$3(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function functionDeclarationToMldev$3(fromObject) {
  const toObject = {};
  const fromBehavior = getValueByPath(fromObject, ["behavior"]);
  if (fromBehavior != null) {
    setValueByPath(toObject, ["behavior"], fromBehavior);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToMldev$3(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToMldev$3(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToMldev$3(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToMldev$3(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToMldev$3(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$3(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function urlContextToMldev$3() {
  const toObject = {};
  return toObject;
}
function toolToMldev$3(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToMldev$3(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  if (getValueByPath(fromObject, ["retrieval"]) !== void 0) {
    throw new Error("retrieval parameter is not supported in Gemini API.");
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToMldev$3(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$3(fromGoogleSearchRetrieval));
  }
  if (getValueByPath(fromObject, ["enterpriseWebSearch"]) !== void 0) {
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["googleMaps"]) !== void 0) {
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToMldev$3());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function functionCallingConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromAllowedFunctionNames = getValueByPath(fromObject, [
    "allowedFunctionNames"
  ]);
  if (fromAllowedFunctionNames != null) {
    setValueByPath(toObject, ["allowedFunctionNames"], fromAllowedFunctionNames);
  }
  return toObject;
}
function latLngToMldev$1(fromObject) {
  const toObject = {};
  const fromLatitude = getValueByPath(fromObject, ["latitude"]);
  if (fromLatitude != null) {
    setValueByPath(toObject, ["latitude"], fromLatitude);
  }
  const fromLongitude = getValueByPath(fromObject, ["longitude"]);
  if (fromLongitude != null) {
    setValueByPath(toObject, ["longitude"], fromLongitude);
  }
  return toObject;
}
function retrievalConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromLatLng = getValueByPath(fromObject, ["latLng"]);
  if (fromLatLng != null) {
    setValueByPath(toObject, ["latLng"], latLngToMldev$1(fromLatLng));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function toolConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromFunctionCallingConfig = getValueByPath(fromObject, [
    "functionCallingConfig"
  ]);
  if (fromFunctionCallingConfig != null) {
    setValueByPath(toObject, ["functionCallingConfig"], functionCallingConfigToMldev$1(fromFunctionCallingConfig));
  }
  const fromRetrievalConfig = getValueByPath(fromObject, [
    "retrievalConfig"
  ]);
  if (fromRetrievalConfig != null) {
    setValueByPath(toObject, ["retrievalConfig"], retrievalConfigToMldev$1(fromRetrievalConfig));
  }
  return toObject;
}
function createCachedContentConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromTtl = getValueByPath(fromObject, ["ttl"]);
  if (parentObject !== void 0 && fromTtl != null) {
    setValueByPath(parentObject, ["ttl"], fromTtl);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (parentObject !== void 0 && fromExpireTime != null) {
    setValueByPath(parentObject, ["expireTime"], fromExpireTime);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromDisplayName);
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (parentObject !== void 0 && fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToMldev$3(item);
      });
    }
    setValueByPath(parentObject, ["contents"], transformedList);
  }
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToMldev$3(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = fromTools;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToMldev$3(item);
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromToolConfig = getValueByPath(fromObject, ["toolConfig"]);
  if (parentObject !== void 0 && fromToolConfig != null) {
    setValueByPath(parentObject, ["toolConfig"], toolConfigToMldev$1(fromToolConfig));
  }
  if (getValueByPath(fromObject, ["kmsKeyName"]) !== void 0) {
    throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  }
  return toObject;
}
function createCachedContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], tCachesModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createCachedContentConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function getCachedContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function deleteCachedContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function updateCachedContentConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromTtl = getValueByPath(fromObject, ["ttl"]);
  if (parentObject !== void 0 && fromTtl != null) {
    setValueByPath(parentObject, ["ttl"], fromTtl);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (parentObject !== void 0 && fromExpireTime != null) {
    setValueByPath(parentObject, ["expireTime"], fromExpireTime);
  }
  return toObject;
}
function updateCachedContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], updateCachedContentConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function listCachedContentsConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  return toObject;
}
function listCachedContentsParametersToMldev(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listCachedContentsConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function videoMetadataToVertex$2(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToVertex$2(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToVertex$2(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToVertex$2(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToVertex$2(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToVertex$2(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToVertex$2(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToVertex$2(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToVertex$2(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function functionDeclarationToVertex$2(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["behavior"]) !== void 0) {
    throw new Error("behavior parameter is not supported in Vertex AI.");
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToVertex$2(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToVertex$2(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToVertex$2(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToVertex$2(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToVertex$2(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex$2(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function enterpriseWebSearchToVertex$2() {
  const toObject = {};
  return toObject;
}
function apiKeyConfigToVertex$2(fromObject) {
  const toObject = {};
  const fromApiKeyString = getValueByPath(fromObject, ["apiKeyString"]);
  if (fromApiKeyString != null) {
    setValueByPath(toObject, ["apiKeyString"], fromApiKeyString);
  }
  return toObject;
}
function authConfigToVertex$2(fromObject) {
  const toObject = {};
  const fromApiKeyConfig = getValueByPath(fromObject, ["apiKeyConfig"]);
  if (fromApiKeyConfig != null) {
    setValueByPath(toObject, ["apiKeyConfig"], apiKeyConfigToVertex$2(fromApiKeyConfig));
  }
  const fromAuthType = getValueByPath(fromObject, ["authType"]);
  if (fromAuthType != null) {
    setValueByPath(toObject, ["authType"], fromAuthType);
  }
  const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
    "googleServiceAccountConfig"
  ]);
  if (fromGoogleServiceAccountConfig != null) {
    setValueByPath(toObject, ["googleServiceAccountConfig"], fromGoogleServiceAccountConfig);
  }
  const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
    "httpBasicAuthConfig"
  ]);
  if (fromHttpBasicAuthConfig != null) {
    setValueByPath(toObject, ["httpBasicAuthConfig"], fromHttpBasicAuthConfig);
  }
  const fromOauthConfig = getValueByPath(fromObject, ["oauthConfig"]);
  if (fromOauthConfig != null) {
    setValueByPath(toObject, ["oauthConfig"], fromOauthConfig);
  }
  const fromOidcConfig = getValueByPath(fromObject, ["oidcConfig"]);
  if (fromOidcConfig != null) {
    setValueByPath(toObject, ["oidcConfig"], fromOidcConfig);
  }
  return toObject;
}
function googleMapsToVertex$2(fromObject) {
  const toObject = {};
  const fromAuthConfig = getValueByPath(fromObject, ["authConfig"]);
  if (fromAuthConfig != null) {
    setValueByPath(toObject, ["authConfig"], authConfigToVertex$2(fromAuthConfig));
  }
  return toObject;
}
function urlContextToVertex$2() {
  const toObject = {};
  return toObject;
}
function toolToVertex$2(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToVertex$2(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  const fromRetrieval = getValueByPath(fromObject, ["retrieval"]);
  if (fromRetrieval != null) {
    setValueByPath(toObject, ["retrieval"], fromRetrieval);
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToVertex$2(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToVertex$2(fromGoogleSearchRetrieval));
  }
  const fromEnterpriseWebSearch = getValueByPath(fromObject, [
    "enterpriseWebSearch"
  ]);
  if (fromEnterpriseWebSearch != null) {
    setValueByPath(toObject, ["enterpriseWebSearch"], enterpriseWebSearchToVertex$2());
  }
  const fromGoogleMaps = getValueByPath(fromObject, ["googleMaps"]);
  if (fromGoogleMaps != null) {
    setValueByPath(toObject, ["googleMaps"], googleMapsToVertex$2(fromGoogleMaps));
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToVertex$2());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function functionCallingConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromAllowedFunctionNames = getValueByPath(fromObject, [
    "allowedFunctionNames"
  ]);
  if (fromAllowedFunctionNames != null) {
    setValueByPath(toObject, ["allowedFunctionNames"], fromAllowedFunctionNames);
  }
  return toObject;
}
function latLngToVertex$1(fromObject) {
  const toObject = {};
  const fromLatitude = getValueByPath(fromObject, ["latitude"]);
  if (fromLatitude != null) {
    setValueByPath(toObject, ["latitude"], fromLatitude);
  }
  const fromLongitude = getValueByPath(fromObject, ["longitude"]);
  if (fromLongitude != null) {
    setValueByPath(toObject, ["longitude"], fromLongitude);
  }
  return toObject;
}
function retrievalConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromLatLng = getValueByPath(fromObject, ["latLng"]);
  if (fromLatLng != null) {
    setValueByPath(toObject, ["latLng"], latLngToVertex$1(fromLatLng));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function toolConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromFunctionCallingConfig = getValueByPath(fromObject, [
    "functionCallingConfig"
  ]);
  if (fromFunctionCallingConfig != null) {
    setValueByPath(toObject, ["functionCallingConfig"], functionCallingConfigToVertex$1(fromFunctionCallingConfig));
  }
  const fromRetrievalConfig = getValueByPath(fromObject, [
    "retrievalConfig"
  ]);
  if (fromRetrievalConfig != null) {
    setValueByPath(toObject, ["retrievalConfig"], retrievalConfigToVertex$1(fromRetrievalConfig));
  }
  return toObject;
}
function createCachedContentConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromTtl = getValueByPath(fromObject, ["ttl"]);
  if (parentObject !== void 0 && fromTtl != null) {
    setValueByPath(parentObject, ["ttl"], fromTtl);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (parentObject !== void 0 && fromExpireTime != null) {
    setValueByPath(parentObject, ["expireTime"], fromExpireTime);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromDisplayName);
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (parentObject !== void 0 && fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToVertex$2(item);
      });
    }
    setValueByPath(parentObject, ["contents"], transformedList);
  }
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToVertex$2(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = fromTools;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToVertex$2(item);
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromToolConfig = getValueByPath(fromObject, ["toolConfig"]);
  if (parentObject !== void 0 && fromToolConfig != null) {
    setValueByPath(parentObject, ["toolConfig"], toolConfigToVertex$1(fromToolConfig));
  }
  const fromKmsKeyName = getValueByPath(fromObject, ["kmsKeyName"]);
  if (parentObject !== void 0 && fromKmsKeyName != null) {
    setValueByPath(parentObject, ["encryption_spec", "kmsKeyName"], fromKmsKeyName);
  }
  return toObject;
}
function createCachedContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], tCachesModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createCachedContentConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function getCachedContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function deleteCachedContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function updateCachedContentConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromTtl = getValueByPath(fromObject, ["ttl"]);
  if (parentObject !== void 0 && fromTtl != null) {
    setValueByPath(parentObject, ["ttl"], fromTtl);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (parentObject !== void 0 && fromExpireTime != null) {
    setValueByPath(parentObject, ["expireTime"], fromExpireTime);
  }
  return toObject;
}
function updateCachedContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], tCachedContentName(apiClient, fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], updateCachedContentConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function listCachedContentsConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  return toObject;
}
function listCachedContentsParametersToVertex(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listCachedContentsConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function cachedContentFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (fromExpireTime != null) {
    setValueByPath(toObject, ["expireTime"], fromExpireTime);
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], fromUsageMetadata);
  }
  return toObject;
}
function deleteCachedContentResponseFromMldev() {
  const toObject = {};
  return toObject;
}
function listCachedContentsResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromCachedContents = getValueByPath(fromObject, [
    "cachedContents"
  ]);
  if (fromCachedContents != null) {
    let transformedList = fromCachedContents;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return cachedContentFromMldev(item);
      });
    }
    setValueByPath(toObject, ["cachedContents"], transformedList);
  }
  return toObject;
}
function cachedContentFromVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (fromExpireTime != null) {
    setValueByPath(toObject, ["expireTime"], fromExpireTime);
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], fromUsageMetadata);
  }
  return toObject;
}
function deleteCachedContentResponseFromVertex() {
  const toObject = {};
  return toObject;
}
function listCachedContentsResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromCachedContents = getValueByPath(fromObject, [
    "cachedContents"
  ]);
  if (fromCachedContents != null) {
    let transformedList = fromCachedContents;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return cachedContentFromVertex(item);
      });
    }
    setValueByPath(toObject, ["cachedContents"], transformedList);
  }
  return toObject;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: /* @__PURE__ */ __name(function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  __name(awaitReturn, "awaitReturn");
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
function isValidResponse(response) {
  var _a;
  if (response.candidates == void 0 || response.candidates.length === 0) {
    return false;
  }
  const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
  if (content === void 0) {
    return false;
  }
  return isValidContent(content);
}
function isValidContent(content) {
  if (content.parts === void 0 || content.parts.length === 0) {
    return false;
  }
  for (const part of content.parts) {
    if (part === void 0 || Object.keys(part).length === 0) {
      return false;
    }
    if (!part.thought && part.text !== void 0 && part.text === "") {
      return false;
    }
  }
  return true;
}
function validateHistory(history) {
  if (history.length === 0) {
    return;
  }
  for (const content of history) {
    if (content.role !== "user" && content.role !== "model") {
      throw new Error(`Role must be user or model, but got ${content.role}.`);
    }
  }
}
function extractCuratedHistory(comprehensiveHistory) {
  if (comprehensiveHistory === void 0 || comprehensiveHistory.length === 0) {
    return [];
  }
  const curatedHistory = [];
  const length = comprehensiveHistory.length;
  let i = 0;
  while (i < length) {
    if (comprehensiveHistory[i].role === "user") {
      curatedHistory.push(comprehensiveHistory[i]);
      i++;
    } else {
      const modelOutput = [];
      let isValid = true;
      while (i < length && comprehensiveHistory[i].role === "model") {
        modelOutput.push(comprehensiveHistory[i]);
        if (isValid && !isValidContent(comprehensiveHistory[i])) {
          isValid = false;
        }
        i++;
      }
      if (isValid) {
        curatedHistory.push(...modelOutput);
      } else {
        curatedHistory.pop();
      }
    }
  }
  return curatedHistory;
}
function listFilesConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  return toObject;
}
function listFilesParametersToMldev(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listFilesConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function fileStatusToMldev(fromObject) {
  const toObject = {};
  const fromDetails = getValueByPath(fromObject, ["details"]);
  if (fromDetails != null) {
    setValueByPath(toObject, ["details"], fromDetails);
  }
  const fromMessage = getValueByPath(fromObject, ["message"]);
  if (fromMessage != null) {
    setValueByPath(toObject, ["message"], fromMessage);
  }
  const fromCode = getValueByPath(fromObject, ["code"]);
  if (fromCode != null) {
    setValueByPath(toObject, ["code"], fromCode);
  }
  return toObject;
}
function fileToMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  const fromSizeBytes = getValueByPath(fromObject, ["sizeBytes"]);
  if (fromSizeBytes != null) {
    setValueByPath(toObject, ["sizeBytes"], fromSizeBytes);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromExpirationTime = getValueByPath(fromObject, [
    "expirationTime"
  ]);
  if (fromExpirationTime != null) {
    setValueByPath(toObject, ["expirationTime"], fromExpirationTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromSha256Hash = getValueByPath(fromObject, ["sha256Hash"]);
  if (fromSha256Hash != null) {
    setValueByPath(toObject, ["sha256Hash"], fromSha256Hash);
  }
  const fromUri = getValueByPath(fromObject, ["uri"]);
  if (fromUri != null) {
    setValueByPath(toObject, ["uri"], fromUri);
  }
  const fromDownloadUri = getValueByPath(fromObject, ["downloadUri"]);
  if (fromDownloadUri != null) {
    setValueByPath(toObject, ["downloadUri"], fromDownloadUri);
  }
  const fromState = getValueByPath(fromObject, ["state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], fromState);
  }
  const fromSource = getValueByPath(fromObject, ["source"]);
  if (fromSource != null) {
    setValueByPath(toObject, ["source"], fromSource);
  }
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], fromVideoMetadata);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fileStatusToMldev(fromError));
  }
  return toObject;
}
function createFileParametersToMldev(fromObject) {
  const toObject = {};
  const fromFile = getValueByPath(fromObject, ["file"]);
  if (fromFile != null) {
    setValueByPath(toObject, ["file"], fileToMldev(fromFile));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function getFileParametersToMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "file"], tFileName(fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function deleteFileParametersToMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "file"], tFileName(fromName));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function fileStatusFromMldev(fromObject) {
  const toObject = {};
  const fromDetails = getValueByPath(fromObject, ["details"]);
  if (fromDetails != null) {
    setValueByPath(toObject, ["details"], fromDetails);
  }
  const fromMessage = getValueByPath(fromObject, ["message"]);
  if (fromMessage != null) {
    setValueByPath(toObject, ["message"], fromMessage);
  }
  const fromCode = getValueByPath(fromObject, ["code"]);
  if (fromCode != null) {
    setValueByPath(toObject, ["code"], fromCode);
  }
  return toObject;
}
function fileFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  const fromSizeBytes = getValueByPath(fromObject, ["sizeBytes"]);
  if (fromSizeBytes != null) {
    setValueByPath(toObject, ["sizeBytes"], fromSizeBytes);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromExpirationTime = getValueByPath(fromObject, [
    "expirationTime"
  ]);
  if (fromExpirationTime != null) {
    setValueByPath(toObject, ["expirationTime"], fromExpirationTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromSha256Hash = getValueByPath(fromObject, ["sha256Hash"]);
  if (fromSha256Hash != null) {
    setValueByPath(toObject, ["sha256Hash"], fromSha256Hash);
  }
  const fromUri = getValueByPath(fromObject, ["uri"]);
  if (fromUri != null) {
    setValueByPath(toObject, ["uri"], fromUri);
  }
  const fromDownloadUri = getValueByPath(fromObject, ["downloadUri"]);
  if (fromDownloadUri != null) {
    setValueByPath(toObject, ["downloadUri"], fromDownloadUri);
  }
  const fromState = getValueByPath(fromObject, ["state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], fromState);
  }
  const fromSource = getValueByPath(fromObject, ["source"]);
  if (fromSource != null) {
    setValueByPath(toObject, ["source"], fromSource);
  }
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], fromVideoMetadata);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fileStatusFromMldev(fromError));
  }
  return toObject;
}
function listFilesResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromFiles = getValueByPath(fromObject, ["files"]);
  if (fromFiles != null) {
    let transformedList = fromFiles;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return fileFromMldev(item);
      });
    }
    setValueByPath(toObject, ["files"], transformedList);
  }
  return toObject;
}
function createFileResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  return toObject;
}
function deleteFileResponseFromMldev() {
  const toObject = {};
  return toObject;
}
function prebuiltVoiceConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$2(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speakerVoiceConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromSpeaker = getValueByPath(fromObject, ["speaker"]);
  if (fromSpeaker != null) {
    setValueByPath(toObject, ["speaker"], fromSpeaker);
  }
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$2(fromVoiceConfig));
  }
  return toObject;
}
function multiSpeakerVoiceConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
    "speakerVoiceConfigs"
  ]);
  if (fromSpeakerVoiceConfigs != null) {
    let transformedList = fromSpeakerVoiceConfigs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return speakerVoiceConfigToMldev$2(item);
      });
    }
    setValueByPath(toObject, ["speakerVoiceConfigs"], transformedList);
  }
  return toObject;
}
function speechConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$2(fromVoiceConfig));
  }
  const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
    "multiSpeakerVoiceConfig"
  ]);
  if (fromMultiSpeakerVoiceConfig != null) {
    setValueByPath(toObject, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$2(fromMultiSpeakerVoiceConfig));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function videoMetadataToMldev$2(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToMldev$2(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToMldev$2(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToMldev$2(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToMldev$2(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToMldev$2(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToMldev$2(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToMldev$2(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToMldev$2(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function functionDeclarationToMldev$2(fromObject) {
  const toObject = {};
  const fromBehavior = getValueByPath(fromObject, ["behavior"]);
  if (fromBehavior != null) {
    setValueByPath(toObject, ["behavior"], fromBehavior);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToMldev$2(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToMldev$2(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToMldev$2(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToMldev$2(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToMldev$2(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$2(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function urlContextToMldev$2() {
  const toObject = {};
  return toObject;
}
function toolToMldev$2(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToMldev$2(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  if (getValueByPath(fromObject, ["retrieval"]) !== void 0) {
    throw new Error("retrieval parameter is not supported in Gemini API.");
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToMldev$2(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$2(fromGoogleSearchRetrieval));
  }
  if (getValueByPath(fromObject, ["enterpriseWebSearch"]) !== void 0) {
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["googleMaps"]) !== void 0) {
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToMldev$2());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function sessionResumptionConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromHandle = getValueByPath(fromObject, ["handle"]);
  if (fromHandle != null) {
    setValueByPath(toObject, ["handle"], fromHandle);
  }
  if (getValueByPath(fromObject, ["transparent"]) !== void 0) {
    throw new Error("transparent parameter is not supported in Gemini API.");
  }
  return toObject;
}
function audioTranscriptionConfigToMldev$1() {
  const toObject = {};
  return toObject;
}
function automaticActivityDetectionToMldev$1(fromObject) {
  const toObject = {};
  const fromDisabled = getValueByPath(fromObject, ["disabled"]);
  if (fromDisabled != null) {
    setValueByPath(toObject, ["disabled"], fromDisabled);
  }
  const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
    "startOfSpeechSensitivity"
  ]);
  if (fromStartOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["startOfSpeechSensitivity"], fromStartOfSpeechSensitivity);
  }
  const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
    "endOfSpeechSensitivity"
  ]);
  if (fromEndOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["endOfSpeechSensitivity"], fromEndOfSpeechSensitivity);
  }
  const fromPrefixPaddingMs = getValueByPath(fromObject, [
    "prefixPaddingMs"
  ]);
  if (fromPrefixPaddingMs != null) {
    setValueByPath(toObject, ["prefixPaddingMs"], fromPrefixPaddingMs);
  }
  const fromSilenceDurationMs = getValueByPath(fromObject, [
    "silenceDurationMs"
  ]);
  if (fromSilenceDurationMs != null) {
    setValueByPath(toObject, ["silenceDurationMs"], fromSilenceDurationMs);
  }
  return toObject;
}
function realtimeInputConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromAutomaticActivityDetection = getValueByPath(fromObject, [
    "automaticActivityDetection"
  ]);
  if (fromAutomaticActivityDetection != null) {
    setValueByPath(toObject, ["automaticActivityDetection"], automaticActivityDetectionToMldev$1(fromAutomaticActivityDetection));
  }
  const fromActivityHandling = getValueByPath(fromObject, [
    "activityHandling"
  ]);
  if (fromActivityHandling != null) {
    setValueByPath(toObject, ["activityHandling"], fromActivityHandling);
  }
  const fromTurnCoverage = getValueByPath(fromObject, ["turnCoverage"]);
  if (fromTurnCoverage != null) {
    setValueByPath(toObject, ["turnCoverage"], fromTurnCoverage);
  }
  return toObject;
}
function slidingWindowToMldev$1(fromObject) {
  const toObject = {};
  const fromTargetTokens = getValueByPath(fromObject, ["targetTokens"]);
  if (fromTargetTokens != null) {
    setValueByPath(toObject, ["targetTokens"], fromTargetTokens);
  }
  return toObject;
}
function contextWindowCompressionConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromTriggerTokens = getValueByPath(fromObject, [
    "triggerTokens"
  ]);
  if (fromTriggerTokens != null) {
    setValueByPath(toObject, ["triggerTokens"], fromTriggerTokens);
  }
  const fromSlidingWindow = getValueByPath(fromObject, [
    "slidingWindow"
  ]);
  if (fromSlidingWindow != null) {
    setValueByPath(toObject, ["slidingWindow"], slidingWindowToMldev$1(fromSlidingWindow));
  }
  return toObject;
}
function proactivityConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromProactiveAudio = getValueByPath(fromObject, [
    "proactiveAudio"
  ]);
  if (fromProactiveAudio != null) {
    setValueByPath(toObject, ["proactiveAudio"], fromProactiveAudio);
  }
  return toObject;
}
function liveConnectConfigToMldev$1(fromObject, parentObject) {
  const toObject = {};
  const fromGenerationConfig = getValueByPath(fromObject, [
    "generationConfig"
  ]);
  if (parentObject !== void 0 && fromGenerationConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig"], fromGenerationConfig);
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (parentObject !== void 0 && fromResponseModalities != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "responseModalities"], fromResponseModalities);
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (parentObject !== void 0 && fromTemperature != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (parentObject !== void 0 && fromTopP != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (parentObject !== void 0 && fromTopK != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topK"], fromTopK);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (parentObject !== void 0 && fromMaxOutputTokens != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (parentObject !== void 0 && fromMediaResolution != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "mediaResolution"], fromMediaResolution);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "seed"], fromSeed);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (parentObject !== void 0 && fromSpeechConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "speechConfig"], speechConfigToMldev$2(tLiveSpeechConfig(fromSpeechConfig)));
  }
  const fromEnableAffectiveDialog = getValueByPath(fromObject, [
    "enableAffectiveDialog"
  ]);
  if (parentObject !== void 0 && fromEnableAffectiveDialog != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "enableAffectiveDialog"], fromEnableAffectiveDialog);
  }
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["setup", "systemInstruction"], contentToMldev$2(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToMldev$2(tTool(item));
      });
    }
    setValueByPath(parentObject, ["setup", "tools"], transformedList);
  }
  const fromSessionResumption = getValueByPath(fromObject, [
    "sessionResumption"
  ]);
  if (parentObject !== void 0 && fromSessionResumption != null) {
    setValueByPath(parentObject, ["setup", "sessionResumption"], sessionResumptionConfigToMldev$1(fromSessionResumption));
  }
  const fromInputAudioTranscription = getValueByPath(fromObject, [
    "inputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromInputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToMldev$1());
  }
  const fromOutputAudioTranscription = getValueByPath(fromObject, [
    "outputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromOutputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToMldev$1());
  }
  const fromRealtimeInputConfig = getValueByPath(fromObject, [
    "realtimeInputConfig"
  ]);
  if (parentObject !== void 0 && fromRealtimeInputConfig != null) {
    setValueByPath(parentObject, ["setup", "realtimeInputConfig"], realtimeInputConfigToMldev$1(fromRealtimeInputConfig));
  }
  const fromContextWindowCompression = getValueByPath(fromObject, [
    "contextWindowCompression"
  ]);
  if (parentObject !== void 0 && fromContextWindowCompression != null) {
    setValueByPath(parentObject, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToMldev$1(fromContextWindowCompression));
  }
  const fromProactivity = getValueByPath(fromObject, ["proactivity"]);
  if (parentObject !== void 0 && fromProactivity != null) {
    setValueByPath(parentObject, ["setup", "proactivity"], proactivityConfigToMldev$1(fromProactivity));
  }
  return toObject;
}
function liveConnectParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["setup", "model"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], liveConnectConfigToMldev$1(fromConfig, toObject));
  }
  return toObject;
}
function activityStartToMldev() {
  const toObject = {};
  return toObject;
}
function activityEndToMldev() {
  const toObject = {};
  return toObject;
}
function liveSendRealtimeInputParametersToMldev(fromObject) {
  const toObject = {};
  const fromMedia = getValueByPath(fromObject, ["media"]);
  if (fromMedia != null) {
    setValueByPath(toObject, ["mediaChunks"], tBlobs(fromMedia));
  }
  const fromAudio = getValueByPath(fromObject, ["audio"]);
  if (fromAudio != null) {
    setValueByPath(toObject, ["audio"], tAudioBlob(fromAudio));
  }
  const fromAudioStreamEnd = getValueByPath(fromObject, [
    "audioStreamEnd"
  ]);
  if (fromAudioStreamEnd != null) {
    setValueByPath(toObject, ["audioStreamEnd"], fromAudioStreamEnd);
  }
  const fromVideo = getValueByPath(fromObject, ["video"]);
  if (fromVideo != null) {
    setValueByPath(toObject, ["video"], tImageBlob(fromVideo));
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromActivityStart = getValueByPath(fromObject, [
    "activityStart"
  ]);
  if (fromActivityStart != null) {
    setValueByPath(toObject, ["activityStart"], activityStartToMldev());
  }
  const fromActivityEnd = getValueByPath(fromObject, ["activityEnd"]);
  if (fromActivityEnd != null) {
    setValueByPath(toObject, ["activityEnd"], activityEndToMldev());
  }
  return toObject;
}
function weightedPromptToMldev(fromObject) {
  const toObject = {};
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromWeight = getValueByPath(fromObject, ["weight"]);
  if (fromWeight != null) {
    setValueByPath(toObject, ["weight"], fromWeight);
  }
  return toObject;
}
function liveMusicSetWeightedPromptsParametersToMldev(fromObject) {
  const toObject = {};
  const fromWeightedPrompts = getValueByPath(fromObject, [
    "weightedPrompts"
  ]);
  if (fromWeightedPrompts != null) {
    let transformedList = fromWeightedPrompts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return weightedPromptToMldev(item);
      });
    }
    setValueByPath(toObject, ["weightedPrompts"], transformedList);
  }
  return toObject;
}
function liveMusicGenerationConfigToMldev(fromObject) {
  const toObject = {};
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (fromTemperature != null) {
    setValueByPath(toObject, ["temperature"], fromTemperature);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (fromTopK != null) {
    setValueByPath(toObject, ["topK"], fromTopK);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (fromSeed != null) {
    setValueByPath(toObject, ["seed"], fromSeed);
  }
  const fromGuidance = getValueByPath(fromObject, ["guidance"]);
  if (fromGuidance != null) {
    setValueByPath(toObject, ["guidance"], fromGuidance);
  }
  const fromBpm = getValueByPath(fromObject, ["bpm"]);
  if (fromBpm != null) {
    setValueByPath(toObject, ["bpm"], fromBpm);
  }
  const fromDensity = getValueByPath(fromObject, ["density"]);
  if (fromDensity != null) {
    setValueByPath(toObject, ["density"], fromDensity);
  }
  const fromBrightness = getValueByPath(fromObject, ["brightness"]);
  if (fromBrightness != null) {
    setValueByPath(toObject, ["brightness"], fromBrightness);
  }
  const fromScale = getValueByPath(fromObject, ["scale"]);
  if (fromScale != null) {
    setValueByPath(toObject, ["scale"], fromScale);
  }
  const fromMuteBass = getValueByPath(fromObject, ["muteBass"]);
  if (fromMuteBass != null) {
    setValueByPath(toObject, ["muteBass"], fromMuteBass);
  }
  const fromMuteDrums = getValueByPath(fromObject, ["muteDrums"]);
  if (fromMuteDrums != null) {
    setValueByPath(toObject, ["muteDrums"], fromMuteDrums);
  }
  const fromOnlyBassAndDrums = getValueByPath(fromObject, [
    "onlyBassAndDrums"
  ]);
  if (fromOnlyBassAndDrums != null) {
    setValueByPath(toObject, ["onlyBassAndDrums"], fromOnlyBassAndDrums);
  }
  const fromMusicGenerationMode = getValueByPath(fromObject, [
    "musicGenerationMode"
  ]);
  if (fromMusicGenerationMode != null) {
    setValueByPath(toObject, ["musicGenerationMode"], fromMusicGenerationMode);
  }
  return toObject;
}
function liveMusicSetConfigParametersToMldev(fromObject) {
  const toObject = {};
  const fromMusicGenerationConfig = getValueByPath(fromObject, [
    "musicGenerationConfig"
  ]);
  if (fromMusicGenerationConfig != null) {
    setValueByPath(toObject, ["musicGenerationConfig"], liveMusicGenerationConfigToMldev(fromMusicGenerationConfig));
  }
  return toObject;
}
function liveMusicClientSetupToMldev(fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  return toObject;
}
function liveMusicClientContentToMldev(fromObject) {
  const toObject = {};
  const fromWeightedPrompts = getValueByPath(fromObject, [
    "weightedPrompts"
  ]);
  if (fromWeightedPrompts != null) {
    let transformedList = fromWeightedPrompts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return weightedPromptToMldev(item);
      });
    }
    setValueByPath(toObject, ["weightedPrompts"], transformedList);
  }
  return toObject;
}
function liveMusicClientMessageToMldev(fromObject) {
  const toObject = {};
  const fromSetup = getValueByPath(fromObject, ["setup"]);
  if (fromSetup != null) {
    setValueByPath(toObject, ["setup"], liveMusicClientSetupToMldev(fromSetup));
  }
  const fromClientContent = getValueByPath(fromObject, [
    "clientContent"
  ]);
  if (fromClientContent != null) {
    setValueByPath(toObject, ["clientContent"], liveMusicClientContentToMldev(fromClientContent));
  }
  const fromMusicGenerationConfig = getValueByPath(fromObject, [
    "musicGenerationConfig"
  ]);
  if (fromMusicGenerationConfig != null) {
    setValueByPath(toObject, ["musicGenerationConfig"], liveMusicGenerationConfigToMldev(fromMusicGenerationConfig));
  }
  const fromPlaybackControl = getValueByPath(fromObject, [
    "playbackControl"
  ]);
  if (fromPlaybackControl != null) {
    setValueByPath(toObject, ["playbackControl"], fromPlaybackControl);
  }
  return toObject;
}
function prebuiltVoiceConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToVertex$1(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speechConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToVertex$1(fromVoiceConfig));
  }
  if (getValueByPath(fromObject, ["multiSpeakerVoiceConfig"]) !== void 0) {
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function videoMetadataToVertex$1(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToVertex$1(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToVertex$1(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToVertex$1(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToVertex$1(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToVertex$1(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToVertex$1(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToVertex$1(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToVertex$1(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function functionDeclarationToVertex$1(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["behavior"]) !== void 0) {
    throw new Error("behavior parameter is not supported in Vertex AI.");
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToVertex$1(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToVertex$1(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToVertex$1(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToVertex$1(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex$1(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function enterpriseWebSearchToVertex$1() {
  const toObject = {};
  return toObject;
}
function apiKeyConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromApiKeyString = getValueByPath(fromObject, ["apiKeyString"]);
  if (fromApiKeyString != null) {
    setValueByPath(toObject, ["apiKeyString"], fromApiKeyString);
  }
  return toObject;
}
function authConfigToVertex$1(fromObject) {
  const toObject = {};
  const fromApiKeyConfig = getValueByPath(fromObject, ["apiKeyConfig"]);
  if (fromApiKeyConfig != null) {
    setValueByPath(toObject, ["apiKeyConfig"], apiKeyConfigToVertex$1(fromApiKeyConfig));
  }
  const fromAuthType = getValueByPath(fromObject, ["authType"]);
  if (fromAuthType != null) {
    setValueByPath(toObject, ["authType"], fromAuthType);
  }
  const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
    "googleServiceAccountConfig"
  ]);
  if (fromGoogleServiceAccountConfig != null) {
    setValueByPath(toObject, ["googleServiceAccountConfig"], fromGoogleServiceAccountConfig);
  }
  const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
    "httpBasicAuthConfig"
  ]);
  if (fromHttpBasicAuthConfig != null) {
    setValueByPath(toObject, ["httpBasicAuthConfig"], fromHttpBasicAuthConfig);
  }
  const fromOauthConfig = getValueByPath(fromObject, ["oauthConfig"]);
  if (fromOauthConfig != null) {
    setValueByPath(toObject, ["oauthConfig"], fromOauthConfig);
  }
  const fromOidcConfig = getValueByPath(fromObject, ["oidcConfig"]);
  if (fromOidcConfig != null) {
    setValueByPath(toObject, ["oidcConfig"], fromOidcConfig);
  }
  return toObject;
}
function googleMapsToVertex$1(fromObject) {
  const toObject = {};
  const fromAuthConfig = getValueByPath(fromObject, ["authConfig"]);
  if (fromAuthConfig != null) {
    setValueByPath(toObject, ["authConfig"], authConfigToVertex$1(fromAuthConfig));
  }
  return toObject;
}
function urlContextToVertex$1() {
  const toObject = {};
  return toObject;
}
function toolToVertex$1(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToVertex$1(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  const fromRetrieval = getValueByPath(fromObject, ["retrieval"]);
  if (fromRetrieval != null) {
    setValueByPath(toObject, ["retrieval"], fromRetrieval);
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToVertex$1(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToVertex$1(fromGoogleSearchRetrieval));
  }
  const fromEnterpriseWebSearch = getValueByPath(fromObject, [
    "enterpriseWebSearch"
  ]);
  if (fromEnterpriseWebSearch != null) {
    setValueByPath(toObject, ["enterpriseWebSearch"], enterpriseWebSearchToVertex$1());
  }
  const fromGoogleMaps = getValueByPath(fromObject, ["googleMaps"]);
  if (fromGoogleMaps != null) {
    setValueByPath(toObject, ["googleMaps"], googleMapsToVertex$1(fromGoogleMaps));
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToVertex$1());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function sessionResumptionConfigToVertex(fromObject) {
  const toObject = {};
  const fromHandle = getValueByPath(fromObject, ["handle"]);
  if (fromHandle != null) {
    setValueByPath(toObject, ["handle"], fromHandle);
  }
  const fromTransparent = getValueByPath(fromObject, ["transparent"]);
  if (fromTransparent != null) {
    setValueByPath(toObject, ["transparent"], fromTransparent);
  }
  return toObject;
}
function audioTranscriptionConfigToVertex() {
  const toObject = {};
  return toObject;
}
function automaticActivityDetectionToVertex(fromObject) {
  const toObject = {};
  const fromDisabled = getValueByPath(fromObject, ["disabled"]);
  if (fromDisabled != null) {
    setValueByPath(toObject, ["disabled"], fromDisabled);
  }
  const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
    "startOfSpeechSensitivity"
  ]);
  if (fromStartOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["startOfSpeechSensitivity"], fromStartOfSpeechSensitivity);
  }
  const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
    "endOfSpeechSensitivity"
  ]);
  if (fromEndOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["endOfSpeechSensitivity"], fromEndOfSpeechSensitivity);
  }
  const fromPrefixPaddingMs = getValueByPath(fromObject, [
    "prefixPaddingMs"
  ]);
  if (fromPrefixPaddingMs != null) {
    setValueByPath(toObject, ["prefixPaddingMs"], fromPrefixPaddingMs);
  }
  const fromSilenceDurationMs = getValueByPath(fromObject, [
    "silenceDurationMs"
  ]);
  if (fromSilenceDurationMs != null) {
    setValueByPath(toObject, ["silenceDurationMs"], fromSilenceDurationMs);
  }
  return toObject;
}
function realtimeInputConfigToVertex(fromObject) {
  const toObject = {};
  const fromAutomaticActivityDetection = getValueByPath(fromObject, [
    "automaticActivityDetection"
  ]);
  if (fromAutomaticActivityDetection != null) {
    setValueByPath(toObject, ["automaticActivityDetection"], automaticActivityDetectionToVertex(fromAutomaticActivityDetection));
  }
  const fromActivityHandling = getValueByPath(fromObject, [
    "activityHandling"
  ]);
  if (fromActivityHandling != null) {
    setValueByPath(toObject, ["activityHandling"], fromActivityHandling);
  }
  const fromTurnCoverage = getValueByPath(fromObject, ["turnCoverage"]);
  if (fromTurnCoverage != null) {
    setValueByPath(toObject, ["turnCoverage"], fromTurnCoverage);
  }
  return toObject;
}
function slidingWindowToVertex(fromObject) {
  const toObject = {};
  const fromTargetTokens = getValueByPath(fromObject, ["targetTokens"]);
  if (fromTargetTokens != null) {
    setValueByPath(toObject, ["targetTokens"], fromTargetTokens);
  }
  return toObject;
}
function contextWindowCompressionConfigToVertex(fromObject) {
  const toObject = {};
  const fromTriggerTokens = getValueByPath(fromObject, [
    "triggerTokens"
  ]);
  if (fromTriggerTokens != null) {
    setValueByPath(toObject, ["triggerTokens"], fromTriggerTokens);
  }
  const fromSlidingWindow = getValueByPath(fromObject, [
    "slidingWindow"
  ]);
  if (fromSlidingWindow != null) {
    setValueByPath(toObject, ["slidingWindow"], slidingWindowToVertex(fromSlidingWindow));
  }
  return toObject;
}
function proactivityConfigToVertex(fromObject) {
  const toObject = {};
  const fromProactiveAudio = getValueByPath(fromObject, [
    "proactiveAudio"
  ]);
  if (fromProactiveAudio != null) {
    setValueByPath(toObject, ["proactiveAudio"], fromProactiveAudio);
  }
  return toObject;
}
function liveConnectConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromGenerationConfig = getValueByPath(fromObject, [
    "generationConfig"
  ]);
  if (parentObject !== void 0 && fromGenerationConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig"], fromGenerationConfig);
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (parentObject !== void 0 && fromResponseModalities != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "responseModalities"], fromResponseModalities);
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (parentObject !== void 0 && fromTemperature != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (parentObject !== void 0 && fromTopP != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (parentObject !== void 0 && fromTopK != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topK"], fromTopK);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (parentObject !== void 0 && fromMaxOutputTokens != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (parentObject !== void 0 && fromMediaResolution != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "mediaResolution"], fromMediaResolution);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "seed"], fromSeed);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (parentObject !== void 0 && fromSpeechConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "speechConfig"], speechConfigToVertex$1(tLiveSpeechConfig(fromSpeechConfig)));
  }
  const fromEnableAffectiveDialog = getValueByPath(fromObject, [
    "enableAffectiveDialog"
  ]);
  if (parentObject !== void 0 && fromEnableAffectiveDialog != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "enableAffectiveDialog"], fromEnableAffectiveDialog);
  }
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["setup", "systemInstruction"], contentToVertex$1(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToVertex$1(tTool(item));
      });
    }
    setValueByPath(parentObject, ["setup", "tools"], transformedList);
  }
  const fromSessionResumption = getValueByPath(fromObject, [
    "sessionResumption"
  ]);
  if (parentObject !== void 0 && fromSessionResumption != null) {
    setValueByPath(parentObject, ["setup", "sessionResumption"], sessionResumptionConfigToVertex(fromSessionResumption));
  }
  const fromInputAudioTranscription = getValueByPath(fromObject, [
    "inputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromInputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToVertex());
  }
  const fromOutputAudioTranscription = getValueByPath(fromObject, [
    "outputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromOutputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToVertex());
  }
  const fromRealtimeInputConfig = getValueByPath(fromObject, [
    "realtimeInputConfig"
  ]);
  if (parentObject !== void 0 && fromRealtimeInputConfig != null) {
    setValueByPath(parentObject, ["setup", "realtimeInputConfig"], realtimeInputConfigToVertex(fromRealtimeInputConfig));
  }
  const fromContextWindowCompression = getValueByPath(fromObject, [
    "contextWindowCompression"
  ]);
  if (parentObject !== void 0 && fromContextWindowCompression != null) {
    setValueByPath(parentObject, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToVertex(fromContextWindowCompression));
  }
  const fromProactivity = getValueByPath(fromObject, ["proactivity"]);
  if (parentObject !== void 0 && fromProactivity != null) {
    setValueByPath(parentObject, ["setup", "proactivity"], proactivityConfigToVertex(fromProactivity));
  }
  return toObject;
}
function liveConnectParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["setup", "model"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], liveConnectConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function activityStartToVertex() {
  const toObject = {};
  return toObject;
}
function activityEndToVertex() {
  const toObject = {};
  return toObject;
}
function liveSendRealtimeInputParametersToVertex(fromObject) {
  const toObject = {};
  const fromMedia = getValueByPath(fromObject, ["media"]);
  if (fromMedia != null) {
    setValueByPath(toObject, ["mediaChunks"], tBlobs(fromMedia));
  }
  const fromAudio = getValueByPath(fromObject, ["audio"]);
  if (fromAudio != null) {
    setValueByPath(toObject, ["audio"], tAudioBlob(fromAudio));
  }
  const fromAudioStreamEnd = getValueByPath(fromObject, [
    "audioStreamEnd"
  ]);
  if (fromAudioStreamEnd != null) {
    setValueByPath(toObject, ["audioStreamEnd"], fromAudioStreamEnd);
  }
  const fromVideo = getValueByPath(fromObject, ["video"]);
  if (fromVideo != null) {
    setValueByPath(toObject, ["video"], tImageBlob(fromVideo));
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromActivityStart = getValueByPath(fromObject, [
    "activityStart"
  ]);
  if (fromActivityStart != null) {
    setValueByPath(toObject, ["activityStart"], activityStartToVertex());
  }
  const fromActivityEnd = getValueByPath(fromObject, ["activityEnd"]);
  if (fromActivityEnd != null) {
    setValueByPath(toObject, ["activityEnd"], activityEndToVertex());
  }
  return toObject;
}
function liveServerSetupCompleteFromMldev() {
  const toObject = {};
  return toObject;
}
function videoMetadataFromMldev$1(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobFromMldev$1(fromObject) {
  const toObject = {};
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataFromMldev$1(fromObject) {
  const toObject = {};
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partFromMldev$1(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataFromMldev$1(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobFromMldev$1(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataFromMldev$1(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentFromMldev$1(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partFromMldev$1(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function transcriptionFromMldev(fromObject) {
  const toObject = {};
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromFinished = getValueByPath(fromObject, ["finished"]);
  if (fromFinished != null) {
    setValueByPath(toObject, ["finished"], fromFinished);
  }
  return toObject;
}
function urlMetadataFromMldev$1(fromObject) {
  const toObject = {};
  const fromRetrievedUrl = getValueByPath(fromObject, ["retrievedUrl"]);
  if (fromRetrievedUrl != null) {
    setValueByPath(toObject, ["retrievedUrl"], fromRetrievedUrl);
  }
  const fromUrlRetrievalStatus = getValueByPath(fromObject, [
    "urlRetrievalStatus"
  ]);
  if (fromUrlRetrievalStatus != null) {
    setValueByPath(toObject, ["urlRetrievalStatus"], fromUrlRetrievalStatus);
  }
  return toObject;
}
function urlContextMetadataFromMldev$1(fromObject) {
  const toObject = {};
  const fromUrlMetadata = getValueByPath(fromObject, ["urlMetadata"]);
  if (fromUrlMetadata != null) {
    let transformedList = fromUrlMetadata;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return urlMetadataFromMldev$1(item);
      });
    }
    setValueByPath(toObject, ["urlMetadata"], transformedList);
  }
  return toObject;
}
function liveServerContentFromMldev(fromObject) {
  const toObject = {};
  const fromModelTurn = getValueByPath(fromObject, ["modelTurn"]);
  if (fromModelTurn != null) {
    setValueByPath(toObject, ["modelTurn"], contentFromMldev$1(fromModelTurn));
  }
  const fromTurnComplete = getValueByPath(fromObject, ["turnComplete"]);
  if (fromTurnComplete != null) {
    setValueByPath(toObject, ["turnComplete"], fromTurnComplete);
  }
  const fromInterrupted = getValueByPath(fromObject, ["interrupted"]);
  if (fromInterrupted != null) {
    setValueByPath(toObject, ["interrupted"], fromInterrupted);
  }
  const fromGroundingMetadata = getValueByPath(fromObject, [
    "groundingMetadata"
  ]);
  if (fromGroundingMetadata != null) {
    setValueByPath(toObject, ["groundingMetadata"], fromGroundingMetadata);
  }
  const fromGenerationComplete = getValueByPath(fromObject, [
    "generationComplete"
  ]);
  if (fromGenerationComplete != null) {
    setValueByPath(toObject, ["generationComplete"], fromGenerationComplete);
  }
  const fromInputTranscription = getValueByPath(fromObject, [
    "inputTranscription"
  ]);
  if (fromInputTranscription != null) {
    setValueByPath(toObject, ["inputTranscription"], transcriptionFromMldev(fromInputTranscription));
  }
  const fromOutputTranscription = getValueByPath(fromObject, [
    "outputTranscription"
  ]);
  if (fromOutputTranscription != null) {
    setValueByPath(toObject, ["outputTranscription"], transcriptionFromMldev(fromOutputTranscription));
  }
  const fromUrlContextMetadata = getValueByPath(fromObject, [
    "urlContextMetadata"
  ]);
  if (fromUrlContextMetadata != null) {
    setValueByPath(toObject, ["urlContextMetadata"], urlContextMetadataFromMldev$1(fromUrlContextMetadata));
  }
  return toObject;
}
function functionCallFromMldev(fromObject) {
  const toObject = {};
  const fromId = getValueByPath(fromObject, ["id"]);
  if (fromId != null) {
    setValueByPath(toObject, ["id"], fromId);
  }
  const fromArgs = getValueByPath(fromObject, ["args"]);
  if (fromArgs != null) {
    setValueByPath(toObject, ["args"], fromArgs);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  return toObject;
}
function liveServerToolCallFromMldev(fromObject) {
  const toObject = {};
  const fromFunctionCalls = getValueByPath(fromObject, [
    "functionCalls"
  ]);
  if (fromFunctionCalls != null) {
    let transformedList = fromFunctionCalls;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionCallFromMldev(item);
      });
    }
    setValueByPath(toObject, ["functionCalls"], transformedList);
  }
  return toObject;
}
function liveServerToolCallCancellationFromMldev(fromObject) {
  const toObject = {};
  const fromIds = getValueByPath(fromObject, ["ids"]);
  if (fromIds != null) {
    setValueByPath(toObject, ["ids"], fromIds);
  }
  return toObject;
}
function modalityTokenCountFromMldev(fromObject) {
  const toObject = {};
  const fromModality = getValueByPath(fromObject, ["modality"]);
  if (fromModality != null) {
    setValueByPath(toObject, ["modality"], fromModality);
  }
  const fromTokenCount = getValueByPath(fromObject, ["tokenCount"]);
  if (fromTokenCount != null) {
    setValueByPath(toObject, ["tokenCount"], fromTokenCount);
  }
  return toObject;
}
function usageMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromPromptTokenCount = getValueByPath(fromObject, [
    "promptTokenCount"
  ]);
  if (fromPromptTokenCount != null) {
    setValueByPath(toObject, ["promptTokenCount"], fromPromptTokenCount);
  }
  const fromCachedContentTokenCount = getValueByPath(fromObject, [
    "cachedContentTokenCount"
  ]);
  if (fromCachedContentTokenCount != null) {
    setValueByPath(toObject, ["cachedContentTokenCount"], fromCachedContentTokenCount);
  }
  const fromResponseTokenCount = getValueByPath(fromObject, [
    "responseTokenCount"
  ]);
  if (fromResponseTokenCount != null) {
    setValueByPath(toObject, ["responseTokenCount"], fromResponseTokenCount);
  }
  const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
    "toolUsePromptTokenCount"
  ]);
  if (fromToolUsePromptTokenCount != null) {
    setValueByPath(toObject, ["toolUsePromptTokenCount"], fromToolUsePromptTokenCount);
  }
  const fromThoughtsTokenCount = getValueByPath(fromObject, [
    "thoughtsTokenCount"
  ]);
  if (fromThoughtsTokenCount != null) {
    setValueByPath(toObject, ["thoughtsTokenCount"], fromThoughtsTokenCount);
  }
  const fromTotalTokenCount = getValueByPath(fromObject, [
    "totalTokenCount"
  ]);
  if (fromTotalTokenCount != null) {
    setValueByPath(toObject, ["totalTokenCount"], fromTotalTokenCount);
  }
  const fromPromptTokensDetails = getValueByPath(fromObject, [
    "promptTokensDetails"
  ]);
  if (fromPromptTokensDetails != null) {
    let transformedList = fromPromptTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromMldev(item);
      });
    }
    setValueByPath(toObject, ["promptTokensDetails"], transformedList);
  }
  const fromCacheTokensDetails = getValueByPath(fromObject, [
    "cacheTokensDetails"
  ]);
  if (fromCacheTokensDetails != null) {
    let transformedList = fromCacheTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromMldev(item);
      });
    }
    setValueByPath(toObject, ["cacheTokensDetails"], transformedList);
  }
  const fromResponseTokensDetails = getValueByPath(fromObject, [
    "responseTokensDetails"
  ]);
  if (fromResponseTokensDetails != null) {
    let transformedList = fromResponseTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromMldev(item);
      });
    }
    setValueByPath(toObject, ["responseTokensDetails"], transformedList);
  }
  const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
    "toolUsePromptTokensDetails"
  ]);
  if (fromToolUsePromptTokensDetails != null) {
    let transformedList = fromToolUsePromptTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromMldev(item);
      });
    }
    setValueByPath(toObject, ["toolUsePromptTokensDetails"], transformedList);
  }
  return toObject;
}
function liveServerGoAwayFromMldev(fromObject) {
  const toObject = {};
  const fromTimeLeft = getValueByPath(fromObject, ["timeLeft"]);
  if (fromTimeLeft != null) {
    setValueByPath(toObject, ["timeLeft"], fromTimeLeft);
  }
  return toObject;
}
function liveServerSessionResumptionUpdateFromMldev(fromObject) {
  const toObject = {};
  const fromNewHandle = getValueByPath(fromObject, ["newHandle"]);
  if (fromNewHandle != null) {
    setValueByPath(toObject, ["newHandle"], fromNewHandle);
  }
  const fromResumable = getValueByPath(fromObject, ["resumable"]);
  if (fromResumable != null) {
    setValueByPath(toObject, ["resumable"], fromResumable);
  }
  const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
    "lastConsumedClientMessageIndex"
  ]);
  if (fromLastConsumedClientMessageIndex != null) {
    setValueByPath(toObject, ["lastConsumedClientMessageIndex"], fromLastConsumedClientMessageIndex);
  }
  return toObject;
}
function liveServerMessageFromMldev(fromObject) {
  const toObject = {};
  const fromSetupComplete = getValueByPath(fromObject, [
    "setupComplete"
  ]);
  if (fromSetupComplete != null) {
    setValueByPath(toObject, ["setupComplete"], liveServerSetupCompleteFromMldev());
  }
  const fromServerContent = getValueByPath(fromObject, [
    "serverContent"
  ]);
  if (fromServerContent != null) {
    setValueByPath(toObject, ["serverContent"], liveServerContentFromMldev(fromServerContent));
  }
  const fromToolCall = getValueByPath(fromObject, ["toolCall"]);
  if (fromToolCall != null) {
    setValueByPath(toObject, ["toolCall"], liveServerToolCallFromMldev(fromToolCall));
  }
  const fromToolCallCancellation = getValueByPath(fromObject, [
    "toolCallCancellation"
  ]);
  if (fromToolCallCancellation != null) {
    setValueByPath(toObject, ["toolCallCancellation"], liveServerToolCallCancellationFromMldev(fromToolCallCancellation));
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], usageMetadataFromMldev(fromUsageMetadata));
  }
  const fromGoAway = getValueByPath(fromObject, ["goAway"]);
  if (fromGoAway != null) {
    setValueByPath(toObject, ["goAway"], liveServerGoAwayFromMldev(fromGoAway));
  }
  const fromSessionResumptionUpdate = getValueByPath(fromObject, [
    "sessionResumptionUpdate"
  ]);
  if (fromSessionResumptionUpdate != null) {
    setValueByPath(toObject, ["sessionResumptionUpdate"], liveServerSessionResumptionUpdateFromMldev(fromSessionResumptionUpdate));
  }
  return toObject;
}
function liveMusicServerSetupCompleteFromMldev() {
  const toObject = {};
  return toObject;
}
function weightedPromptFromMldev(fromObject) {
  const toObject = {};
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromWeight = getValueByPath(fromObject, ["weight"]);
  if (fromWeight != null) {
    setValueByPath(toObject, ["weight"], fromWeight);
  }
  return toObject;
}
function liveMusicClientContentFromMldev(fromObject) {
  const toObject = {};
  const fromWeightedPrompts = getValueByPath(fromObject, [
    "weightedPrompts"
  ]);
  if (fromWeightedPrompts != null) {
    let transformedList = fromWeightedPrompts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return weightedPromptFromMldev(item);
      });
    }
    setValueByPath(toObject, ["weightedPrompts"], transformedList);
  }
  return toObject;
}
function liveMusicGenerationConfigFromMldev(fromObject) {
  const toObject = {};
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (fromTemperature != null) {
    setValueByPath(toObject, ["temperature"], fromTemperature);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (fromTopK != null) {
    setValueByPath(toObject, ["topK"], fromTopK);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (fromSeed != null) {
    setValueByPath(toObject, ["seed"], fromSeed);
  }
  const fromGuidance = getValueByPath(fromObject, ["guidance"]);
  if (fromGuidance != null) {
    setValueByPath(toObject, ["guidance"], fromGuidance);
  }
  const fromBpm = getValueByPath(fromObject, ["bpm"]);
  if (fromBpm != null) {
    setValueByPath(toObject, ["bpm"], fromBpm);
  }
  const fromDensity = getValueByPath(fromObject, ["density"]);
  if (fromDensity != null) {
    setValueByPath(toObject, ["density"], fromDensity);
  }
  const fromBrightness = getValueByPath(fromObject, ["brightness"]);
  if (fromBrightness != null) {
    setValueByPath(toObject, ["brightness"], fromBrightness);
  }
  const fromScale = getValueByPath(fromObject, ["scale"]);
  if (fromScale != null) {
    setValueByPath(toObject, ["scale"], fromScale);
  }
  const fromMuteBass = getValueByPath(fromObject, ["muteBass"]);
  if (fromMuteBass != null) {
    setValueByPath(toObject, ["muteBass"], fromMuteBass);
  }
  const fromMuteDrums = getValueByPath(fromObject, ["muteDrums"]);
  if (fromMuteDrums != null) {
    setValueByPath(toObject, ["muteDrums"], fromMuteDrums);
  }
  const fromOnlyBassAndDrums = getValueByPath(fromObject, [
    "onlyBassAndDrums"
  ]);
  if (fromOnlyBassAndDrums != null) {
    setValueByPath(toObject, ["onlyBassAndDrums"], fromOnlyBassAndDrums);
  }
  const fromMusicGenerationMode = getValueByPath(fromObject, [
    "musicGenerationMode"
  ]);
  if (fromMusicGenerationMode != null) {
    setValueByPath(toObject, ["musicGenerationMode"], fromMusicGenerationMode);
  }
  return toObject;
}
function liveMusicSourceMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromClientContent = getValueByPath(fromObject, [
    "clientContent"
  ]);
  if (fromClientContent != null) {
    setValueByPath(toObject, ["clientContent"], liveMusicClientContentFromMldev(fromClientContent));
  }
  const fromMusicGenerationConfig = getValueByPath(fromObject, [
    "musicGenerationConfig"
  ]);
  if (fromMusicGenerationConfig != null) {
    setValueByPath(toObject, ["musicGenerationConfig"], liveMusicGenerationConfigFromMldev(fromMusicGenerationConfig));
  }
  return toObject;
}
function audioChunkFromMldev(fromObject) {
  const toObject = {};
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  const fromSourceMetadata = getValueByPath(fromObject, [
    "sourceMetadata"
  ]);
  if (fromSourceMetadata != null) {
    setValueByPath(toObject, ["sourceMetadata"], liveMusicSourceMetadataFromMldev(fromSourceMetadata));
  }
  return toObject;
}
function liveMusicServerContentFromMldev(fromObject) {
  const toObject = {};
  const fromAudioChunks = getValueByPath(fromObject, ["audioChunks"]);
  if (fromAudioChunks != null) {
    let transformedList = fromAudioChunks;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return audioChunkFromMldev(item);
      });
    }
    setValueByPath(toObject, ["audioChunks"], transformedList);
  }
  return toObject;
}
function liveMusicFilteredPromptFromMldev(fromObject) {
  const toObject = {};
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromFilteredReason = getValueByPath(fromObject, [
    "filteredReason"
  ]);
  if (fromFilteredReason != null) {
    setValueByPath(toObject, ["filteredReason"], fromFilteredReason);
  }
  return toObject;
}
function liveMusicServerMessageFromMldev(fromObject) {
  const toObject = {};
  const fromSetupComplete = getValueByPath(fromObject, [
    "setupComplete"
  ]);
  if (fromSetupComplete != null) {
    setValueByPath(toObject, ["setupComplete"], liveMusicServerSetupCompleteFromMldev());
  }
  const fromServerContent = getValueByPath(fromObject, [
    "serverContent"
  ]);
  if (fromServerContent != null) {
    setValueByPath(toObject, ["serverContent"], liveMusicServerContentFromMldev(fromServerContent));
  }
  const fromFilteredPrompt = getValueByPath(fromObject, [
    "filteredPrompt"
  ]);
  if (fromFilteredPrompt != null) {
    setValueByPath(toObject, ["filteredPrompt"], liveMusicFilteredPromptFromMldev(fromFilteredPrompt));
  }
  return toObject;
}
function liveServerSetupCompleteFromVertex(fromObject) {
  const toObject = {};
  const fromSessionId = getValueByPath(fromObject, ["sessionId"]);
  if (fromSessionId != null) {
    setValueByPath(toObject, ["sessionId"], fromSessionId);
  }
  return toObject;
}
function videoMetadataFromVertex$1(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobFromVertex$1(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataFromVertex$1(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partFromVertex$1(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataFromVertex$1(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobFromVertex$1(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataFromVertex$1(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentFromVertex$1(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partFromVertex$1(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function transcriptionFromVertex(fromObject) {
  const toObject = {};
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  const fromFinished = getValueByPath(fromObject, ["finished"]);
  if (fromFinished != null) {
    setValueByPath(toObject, ["finished"], fromFinished);
  }
  return toObject;
}
function liveServerContentFromVertex(fromObject) {
  const toObject = {};
  const fromModelTurn = getValueByPath(fromObject, ["modelTurn"]);
  if (fromModelTurn != null) {
    setValueByPath(toObject, ["modelTurn"], contentFromVertex$1(fromModelTurn));
  }
  const fromTurnComplete = getValueByPath(fromObject, ["turnComplete"]);
  if (fromTurnComplete != null) {
    setValueByPath(toObject, ["turnComplete"], fromTurnComplete);
  }
  const fromInterrupted = getValueByPath(fromObject, ["interrupted"]);
  if (fromInterrupted != null) {
    setValueByPath(toObject, ["interrupted"], fromInterrupted);
  }
  const fromGroundingMetadata = getValueByPath(fromObject, [
    "groundingMetadata"
  ]);
  if (fromGroundingMetadata != null) {
    setValueByPath(toObject, ["groundingMetadata"], fromGroundingMetadata);
  }
  const fromGenerationComplete = getValueByPath(fromObject, [
    "generationComplete"
  ]);
  if (fromGenerationComplete != null) {
    setValueByPath(toObject, ["generationComplete"], fromGenerationComplete);
  }
  const fromInputTranscription = getValueByPath(fromObject, [
    "inputTranscription"
  ]);
  if (fromInputTranscription != null) {
    setValueByPath(toObject, ["inputTranscription"], transcriptionFromVertex(fromInputTranscription));
  }
  const fromOutputTranscription = getValueByPath(fromObject, [
    "outputTranscription"
  ]);
  if (fromOutputTranscription != null) {
    setValueByPath(toObject, ["outputTranscription"], transcriptionFromVertex(fromOutputTranscription));
  }
  return toObject;
}
function functionCallFromVertex(fromObject) {
  const toObject = {};
  const fromArgs = getValueByPath(fromObject, ["args"]);
  if (fromArgs != null) {
    setValueByPath(toObject, ["args"], fromArgs);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  return toObject;
}
function liveServerToolCallFromVertex(fromObject) {
  const toObject = {};
  const fromFunctionCalls = getValueByPath(fromObject, [
    "functionCalls"
  ]);
  if (fromFunctionCalls != null) {
    let transformedList = fromFunctionCalls;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionCallFromVertex(item);
      });
    }
    setValueByPath(toObject, ["functionCalls"], transformedList);
  }
  return toObject;
}
function liveServerToolCallCancellationFromVertex(fromObject) {
  const toObject = {};
  const fromIds = getValueByPath(fromObject, ["ids"]);
  if (fromIds != null) {
    setValueByPath(toObject, ["ids"], fromIds);
  }
  return toObject;
}
function modalityTokenCountFromVertex(fromObject) {
  const toObject = {};
  const fromModality = getValueByPath(fromObject, ["modality"]);
  if (fromModality != null) {
    setValueByPath(toObject, ["modality"], fromModality);
  }
  const fromTokenCount = getValueByPath(fromObject, ["tokenCount"]);
  if (fromTokenCount != null) {
    setValueByPath(toObject, ["tokenCount"], fromTokenCount);
  }
  return toObject;
}
function usageMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromPromptTokenCount = getValueByPath(fromObject, [
    "promptTokenCount"
  ]);
  if (fromPromptTokenCount != null) {
    setValueByPath(toObject, ["promptTokenCount"], fromPromptTokenCount);
  }
  const fromCachedContentTokenCount = getValueByPath(fromObject, [
    "cachedContentTokenCount"
  ]);
  if (fromCachedContentTokenCount != null) {
    setValueByPath(toObject, ["cachedContentTokenCount"], fromCachedContentTokenCount);
  }
  const fromResponseTokenCount = getValueByPath(fromObject, [
    "candidatesTokenCount"
  ]);
  if (fromResponseTokenCount != null) {
    setValueByPath(toObject, ["responseTokenCount"], fromResponseTokenCount);
  }
  const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
    "toolUsePromptTokenCount"
  ]);
  if (fromToolUsePromptTokenCount != null) {
    setValueByPath(toObject, ["toolUsePromptTokenCount"], fromToolUsePromptTokenCount);
  }
  const fromThoughtsTokenCount = getValueByPath(fromObject, [
    "thoughtsTokenCount"
  ]);
  if (fromThoughtsTokenCount != null) {
    setValueByPath(toObject, ["thoughtsTokenCount"], fromThoughtsTokenCount);
  }
  const fromTotalTokenCount = getValueByPath(fromObject, [
    "totalTokenCount"
  ]);
  if (fromTotalTokenCount != null) {
    setValueByPath(toObject, ["totalTokenCount"], fromTotalTokenCount);
  }
  const fromPromptTokensDetails = getValueByPath(fromObject, [
    "promptTokensDetails"
  ]);
  if (fromPromptTokensDetails != null) {
    let transformedList = fromPromptTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromVertex(item);
      });
    }
    setValueByPath(toObject, ["promptTokensDetails"], transformedList);
  }
  const fromCacheTokensDetails = getValueByPath(fromObject, [
    "cacheTokensDetails"
  ]);
  if (fromCacheTokensDetails != null) {
    let transformedList = fromCacheTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromVertex(item);
      });
    }
    setValueByPath(toObject, ["cacheTokensDetails"], transformedList);
  }
  const fromResponseTokensDetails = getValueByPath(fromObject, [
    "candidatesTokensDetails"
  ]);
  if (fromResponseTokensDetails != null) {
    let transformedList = fromResponseTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromVertex(item);
      });
    }
    setValueByPath(toObject, ["responseTokensDetails"], transformedList);
  }
  const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
    "toolUsePromptTokensDetails"
  ]);
  if (fromToolUsePromptTokensDetails != null) {
    let transformedList = fromToolUsePromptTokensDetails;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modalityTokenCountFromVertex(item);
      });
    }
    setValueByPath(toObject, ["toolUsePromptTokensDetails"], transformedList);
  }
  const fromTrafficType = getValueByPath(fromObject, ["trafficType"]);
  if (fromTrafficType != null) {
    setValueByPath(toObject, ["trafficType"], fromTrafficType);
  }
  return toObject;
}
function liveServerGoAwayFromVertex(fromObject) {
  const toObject = {};
  const fromTimeLeft = getValueByPath(fromObject, ["timeLeft"]);
  if (fromTimeLeft != null) {
    setValueByPath(toObject, ["timeLeft"], fromTimeLeft);
  }
  return toObject;
}
function liveServerSessionResumptionUpdateFromVertex(fromObject) {
  const toObject = {};
  const fromNewHandle = getValueByPath(fromObject, ["newHandle"]);
  if (fromNewHandle != null) {
    setValueByPath(toObject, ["newHandle"], fromNewHandle);
  }
  const fromResumable = getValueByPath(fromObject, ["resumable"]);
  if (fromResumable != null) {
    setValueByPath(toObject, ["resumable"], fromResumable);
  }
  const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
    "lastConsumedClientMessageIndex"
  ]);
  if (fromLastConsumedClientMessageIndex != null) {
    setValueByPath(toObject, ["lastConsumedClientMessageIndex"], fromLastConsumedClientMessageIndex);
  }
  return toObject;
}
function liveServerMessageFromVertex(fromObject) {
  const toObject = {};
  const fromSetupComplete = getValueByPath(fromObject, [
    "setupComplete"
  ]);
  if (fromSetupComplete != null) {
    setValueByPath(toObject, ["setupComplete"], liveServerSetupCompleteFromVertex(fromSetupComplete));
  }
  const fromServerContent = getValueByPath(fromObject, [
    "serverContent"
  ]);
  if (fromServerContent != null) {
    setValueByPath(toObject, ["serverContent"], liveServerContentFromVertex(fromServerContent));
  }
  const fromToolCall = getValueByPath(fromObject, ["toolCall"]);
  if (fromToolCall != null) {
    setValueByPath(toObject, ["toolCall"], liveServerToolCallFromVertex(fromToolCall));
  }
  const fromToolCallCancellation = getValueByPath(fromObject, [
    "toolCallCancellation"
  ]);
  if (fromToolCallCancellation != null) {
    setValueByPath(toObject, ["toolCallCancellation"], liveServerToolCallCancellationFromVertex(fromToolCallCancellation));
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], usageMetadataFromVertex(fromUsageMetadata));
  }
  const fromGoAway = getValueByPath(fromObject, ["goAway"]);
  if (fromGoAway != null) {
    setValueByPath(toObject, ["goAway"], liveServerGoAwayFromVertex(fromGoAway));
  }
  const fromSessionResumptionUpdate = getValueByPath(fromObject, [
    "sessionResumptionUpdate"
  ]);
  if (fromSessionResumptionUpdate != null) {
    setValueByPath(toObject, ["sessionResumptionUpdate"], liveServerSessionResumptionUpdateFromVertex(fromSessionResumptionUpdate));
  }
  return toObject;
}
function videoMetadataToMldev$1(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToMldev$1(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToMldev$1(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToMldev$1(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToMldev$1(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToMldev$1(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToMldev$1(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToMldev$1(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToMldev$1(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function schemaToMldev(fromObject) {
  const toObject = {};
  const fromAnyOf = getValueByPath(fromObject, ["anyOf"]);
  if (fromAnyOf != null) {
    setValueByPath(toObject, ["anyOf"], fromAnyOf);
  }
  const fromDefault = getValueByPath(fromObject, ["default"]);
  if (fromDefault != null) {
    setValueByPath(toObject, ["default"], fromDefault);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromEnum = getValueByPath(fromObject, ["enum"]);
  if (fromEnum != null) {
    setValueByPath(toObject, ["enum"], fromEnum);
  }
  const fromExample = getValueByPath(fromObject, ["example"]);
  if (fromExample != null) {
    setValueByPath(toObject, ["example"], fromExample);
  }
  const fromFormat = getValueByPath(fromObject, ["format"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["format"], fromFormat);
  }
  const fromItems = getValueByPath(fromObject, ["items"]);
  if (fromItems != null) {
    setValueByPath(toObject, ["items"], fromItems);
  }
  const fromMaxItems = getValueByPath(fromObject, ["maxItems"]);
  if (fromMaxItems != null) {
    setValueByPath(toObject, ["maxItems"], fromMaxItems);
  }
  const fromMaxLength = getValueByPath(fromObject, ["maxLength"]);
  if (fromMaxLength != null) {
    setValueByPath(toObject, ["maxLength"], fromMaxLength);
  }
  const fromMaxProperties = getValueByPath(fromObject, [
    "maxProperties"
  ]);
  if (fromMaxProperties != null) {
    setValueByPath(toObject, ["maxProperties"], fromMaxProperties);
  }
  const fromMaximum = getValueByPath(fromObject, ["maximum"]);
  if (fromMaximum != null) {
    setValueByPath(toObject, ["maximum"], fromMaximum);
  }
  const fromMinItems = getValueByPath(fromObject, ["minItems"]);
  if (fromMinItems != null) {
    setValueByPath(toObject, ["minItems"], fromMinItems);
  }
  const fromMinLength = getValueByPath(fromObject, ["minLength"]);
  if (fromMinLength != null) {
    setValueByPath(toObject, ["minLength"], fromMinLength);
  }
  const fromMinProperties = getValueByPath(fromObject, [
    "minProperties"
  ]);
  if (fromMinProperties != null) {
    setValueByPath(toObject, ["minProperties"], fromMinProperties);
  }
  const fromMinimum = getValueByPath(fromObject, ["minimum"]);
  if (fromMinimum != null) {
    setValueByPath(toObject, ["minimum"], fromMinimum);
  }
  const fromNullable = getValueByPath(fromObject, ["nullable"]);
  if (fromNullable != null) {
    setValueByPath(toObject, ["nullable"], fromNullable);
  }
  const fromPattern = getValueByPath(fromObject, ["pattern"]);
  if (fromPattern != null) {
    setValueByPath(toObject, ["pattern"], fromPattern);
  }
  const fromProperties = getValueByPath(fromObject, ["properties"]);
  if (fromProperties != null) {
    setValueByPath(toObject, ["properties"], fromProperties);
  }
  const fromPropertyOrdering = getValueByPath(fromObject, [
    "propertyOrdering"
  ]);
  if (fromPropertyOrdering != null) {
    setValueByPath(toObject, ["propertyOrdering"], fromPropertyOrdering);
  }
  const fromRequired = getValueByPath(fromObject, ["required"]);
  if (fromRequired != null) {
    setValueByPath(toObject, ["required"], fromRequired);
  }
  const fromTitle = getValueByPath(fromObject, ["title"]);
  if (fromTitle != null) {
    setValueByPath(toObject, ["title"], fromTitle);
  }
  const fromType = getValueByPath(fromObject, ["type"]);
  if (fromType != null) {
    setValueByPath(toObject, ["type"], fromType);
  }
  return toObject;
}
function safetySettingToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["method"]) !== void 0) {
    throw new Error("method parameter is not supported in Gemini API.");
  }
  const fromCategory = getValueByPath(fromObject, ["category"]);
  if (fromCategory != null) {
    setValueByPath(toObject, ["category"], fromCategory);
  }
  const fromThreshold = getValueByPath(fromObject, ["threshold"]);
  if (fromThreshold != null) {
    setValueByPath(toObject, ["threshold"], fromThreshold);
  }
  return toObject;
}
function functionDeclarationToMldev$1(fromObject) {
  const toObject = {};
  const fromBehavior = getValueByPath(fromObject, ["behavior"]);
  if (fromBehavior != null) {
    setValueByPath(toObject, ["behavior"], fromBehavior);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToMldev$1(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToMldev$1(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToMldev$1(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToMldev$1(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$1(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function urlContextToMldev$1() {
  const toObject = {};
  return toObject;
}
function toolToMldev$1(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToMldev$1(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  if (getValueByPath(fromObject, ["retrieval"]) !== void 0) {
    throw new Error("retrieval parameter is not supported in Gemini API.");
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToMldev$1(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$1(fromGoogleSearchRetrieval));
  }
  if (getValueByPath(fromObject, ["enterpriseWebSearch"]) !== void 0) {
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["googleMaps"]) !== void 0) {
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToMldev$1());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function functionCallingConfigToMldev(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromAllowedFunctionNames = getValueByPath(fromObject, [
    "allowedFunctionNames"
  ]);
  if (fromAllowedFunctionNames != null) {
    setValueByPath(toObject, ["allowedFunctionNames"], fromAllowedFunctionNames);
  }
  return toObject;
}
function latLngToMldev(fromObject) {
  const toObject = {};
  const fromLatitude = getValueByPath(fromObject, ["latitude"]);
  if (fromLatitude != null) {
    setValueByPath(toObject, ["latitude"], fromLatitude);
  }
  const fromLongitude = getValueByPath(fromObject, ["longitude"]);
  if (fromLongitude != null) {
    setValueByPath(toObject, ["longitude"], fromLongitude);
  }
  return toObject;
}
function retrievalConfigToMldev(fromObject) {
  const toObject = {};
  const fromLatLng = getValueByPath(fromObject, ["latLng"]);
  if (fromLatLng != null) {
    setValueByPath(toObject, ["latLng"], latLngToMldev(fromLatLng));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function toolConfigToMldev(fromObject) {
  const toObject = {};
  const fromFunctionCallingConfig = getValueByPath(fromObject, [
    "functionCallingConfig"
  ]);
  if (fromFunctionCallingConfig != null) {
    setValueByPath(toObject, ["functionCallingConfig"], functionCallingConfigToMldev(fromFunctionCallingConfig));
  }
  const fromRetrievalConfig = getValueByPath(fromObject, [
    "retrievalConfig"
  ]);
  if (fromRetrievalConfig != null) {
    setValueByPath(toObject, ["retrievalConfig"], retrievalConfigToMldev(fromRetrievalConfig));
  }
  return toObject;
}
function prebuiltVoiceConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$1(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speakerVoiceConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromSpeaker = getValueByPath(fromObject, ["speaker"]);
  if (fromSpeaker != null) {
    setValueByPath(toObject, ["speaker"], fromSpeaker);
  }
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$1(fromVoiceConfig));
  }
  return toObject;
}
function multiSpeakerVoiceConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
    "speakerVoiceConfigs"
  ]);
  if (fromSpeakerVoiceConfigs != null) {
    let transformedList = fromSpeakerVoiceConfigs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return speakerVoiceConfigToMldev$1(item);
      });
    }
    setValueByPath(toObject, ["speakerVoiceConfigs"], transformedList);
  }
  return toObject;
}
function speechConfigToMldev$1(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev$1(fromVoiceConfig));
  }
  const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
    "multiSpeakerVoiceConfig"
  ]);
  if (fromMultiSpeakerVoiceConfig != null) {
    setValueByPath(toObject, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$1(fromMultiSpeakerVoiceConfig));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function thinkingConfigToMldev(fromObject) {
  const toObject = {};
  const fromIncludeThoughts = getValueByPath(fromObject, [
    "includeThoughts"
  ]);
  if (fromIncludeThoughts != null) {
    setValueByPath(toObject, ["includeThoughts"], fromIncludeThoughts);
  }
  const fromThinkingBudget = getValueByPath(fromObject, [
    "thinkingBudget"
  ]);
  if (fromThinkingBudget != null) {
    setValueByPath(toObject, ["thinkingBudget"], fromThinkingBudget);
  }
  return toObject;
}
function generateContentConfigToMldev(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToMldev$1(tContent(fromSystemInstruction)));
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (fromTemperature != null) {
    setValueByPath(toObject, ["temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (fromTopP != null) {
    setValueByPath(toObject, ["topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (fromTopK != null) {
    setValueByPath(toObject, ["topK"], fromTopK);
  }
  const fromCandidateCount = getValueByPath(fromObject, [
    "candidateCount"
  ]);
  if (fromCandidateCount != null) {
    setValueByPath(toObject, ["candidateCount"], fromCandidateCount);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (fromMaxOutputTokens != null) {
    setValueByPath(toObject, ["maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromStopSequences = getValueByPath(fromObject, [
    "stopSequences"
  ]);
  if (fromStopSequences != null) {
    setValueByPath(toObject, ["stopSequences"], fromStopSequences);
  }
  const fromResponseLogprobs = getValueByPath(fromObject, [
    "responseLogprobs"
  ]);
  if (fromResponseLogprobs != null) {
    setValueByPath(toObject, ["responseLogprobs"], fromResponseLogprobs);
  }
  const fromLogprobs = getValueByPath(fromObject, ["logprobs"]);
  if (fromLogprobs != null) {
    setValueByPath(toObject, ["logprobs"], fromLogprobs);
  }
  const fromPresencePenalty = getValueByPath(fromObject, [
    "presencePenalty"
  ]);
  if (fromPresencePenalty != null) {
    setValueByPath(toObject, ["presencePenalty"], fromPresencePenalty);
  }
  const fromFrequencyPenalty = getValueByPath(fromObject, [
    "frequencyPenalty"
  ]);
  if (fromFrequencyPenalty != null) {
    setValueByPath(toObject, ["frequencyPenalty"], fromFrequencyPenalty);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (fromSeed != null) {
    setValueByPath(toObject, ["seed"], fromSeed);
  }
  const fromResponseMimeType = getValueByPath(fromObject, [
    "responseMimeType"
  ]);
  if (fromResponseMimeType != null) {
    setValueByPath(toObject, ["responseMimeType"], fromResponseMimeType);
  }
  const fromResponseSchema = getValueByPath(fromObject, [
    "responseSchema"
  ]);
  if (fromResponseSchema != null) {
    setValueByPath(toObject, ["responseSchema"], schemaToMldev(tSchema(fromResponseSchema)));
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  if (getValueByPath(fromObject, ["routingConfig"]) !== void 0) {
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["modelSelectionConfig"]) !== void 0) {
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  }
  const fromSafetySettings = getValueByPath(fromObject, [
    "safetySettings"
  ]);
  if (parentObject !== void 0 && fromSafetySettings != null) {
    let transformedList = fromSafetySettings;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return safetySettingToMldev(item);
      });
    }
    setValueByPath(parentObject, ["safetySettings"], transformedList);
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToMldev$1(tTool(item));
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromToolConfig = getValueByPath(fromObject, ["toolConfig"]);
  if (parentObject !== void 0 && fromToolConfig != null) {
    setValueByPath(parentObject, ["toolConfig"], toolConfigToMldev(fromToolConfig));
  }
  if (getValueByPath(fromObject, ["labels"]) !== void 0) {
    throw new Error("labels parameter is not supported in Gemini API.");
  }
  const fromCachedContent = getValueByPath(fromObject, [
    "cachedContent"
  ]);
  if (parentObject !== void 0 && fromCachedContent != null) {
    setValueByPath(parentObject, ["cachedContent"], tCachedContentName(apiClient, fromCachedContent));
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (fromResponseModalities != null) {
    setValueByPath(toObject, ["responseModalities"], fromResponseModalities);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (fromMediaResolution != null) {
    setValueByPath(toObject, ["mediaResolution"], fromMediaResolution);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (fromSpeechConfig != null) {
    setValueByPath(toObject, ["speechConfig"], speechConfigToMldev$1(tSpeechConfig(fromSpeechConfig)));
  }
  if (getValueByPath(fromObject, ["audioTimestamp"]) !== void 0) {
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  }
  const fromThinkingConfig = getValueByPath(fromObject, [
    "thinkingConfig"
  ]);
  if (fromThinkingConfig != null) {
    setValueByPath(toObject, ["thinkingConfig"], thinkingConfigToMldev(fromThinkingConfig));
  }
  return toObject;
}
function generateContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToMldev$1(item);
      });
    }
    setValueByPath(toObject, ["contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["generationConfig"], generateContentConfigToMldev(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function embedContentConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromTaskType = getValueByPath(fromObject, ["taskType"]);
  if (parentObject !== void 0 && fromTaskType != null) {
    setValueByPath(parentObject, ["requests[]", "taskType"], fromTaskType);
  }
  const fromTitle = getValueByPath(fromObject, ["title"]);
  if (parentObject !== void 0 && fromTitle != null) {
    setValueByPath(parentObject, ["requests[]", "title"], fromTitle);
  }
  const fromOutputDimensionality = getValueByPath(fromObject, [
    "outputDimensionality"
  ]);
  if (parentObject !== void 0 && fromOutputDimensionality != null) {
    setValueByPath(parentObject, ["requests[]", "outputDimensionality"], fromOutputDimensionality);
  }
  if (getValueByPath(fromObject, ["mimeType"]) !== void 0) {
    throw new Error("mimeType parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["autoTruncate"]) !== void 0) {
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  }
  return toObject;
}
function embedContentParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    setValueByPath(toObject, ["requests[]", "content"], tContentsForEmbed(apiClient, fromContents));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], embedContentConfigToMldev(fromConfig, toObject));
  }
  const fromModelForEmbedContent = getValueByPath(fromObject, ["model"]);
  if (fromModelForEmbedContent !== void 0) {
    setValueByPath(toObject, ["requests[]", "model"], tModel(apiClient, fromModelForEmbedContent));
  }
  return toObject;
}
function generateImagesConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["outputGcsUri"]) !== void 0) {
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["negativePrompt"]) !== void 0) {
    throw new Error("negativePrompt parameter is not supported in Gemini API.");
  }
  const fromNumberOfImages = getValueByPath(fromObject, [
    "numberOfImages"
  ]);
  if (parentObject !== void 0 && fromNumberOfImages != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfImages);
  }
  const fromAspectRatio = getValueByPath(fromObject, ["aspectRatio"]);
  if (parentObject !== void 0 && fromAspectRatio != null) {
    setValueByPath(parentObject, ["parameters", "aspectRatio"], fromAspectRatio);
  }
  const fromGuidanceScale = getValueByPath(fromObject, [
    "guidanceScale"
  ]);
  if (parentObject !== void 0 && fromGuidanceScale != null) {
    setValueByPath(parentObject, ["parameters", "guidanceScale"], fromGuidanceScale);
  }
  if (getValueByPath(fromObject, ["seed"]) !== void 0) {
    throw new Error("seed parameter is not supported in Gemini API.");
  }
  const fromSafetyFilterLevel = getValueByPath(fromObject, [
    "safetyFilterLevel"
  ]);
  if (parentObject !== void 0 && fromSafetyFilterLevel != null) {
    setValueByPath(parentObject, ["parameters", "safetySetting"], fromSafetyFilterLevel);
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
    "includeSafetyAttributes"
  ]);
  if (parentObject !== void 0 && fromIncludeSafetyAttributes != null) {
    setValueByPath(parentObject, ["parameters", "includeSafetyAttributes"], fromIncludeSafetyAttributes);
  }
  const fromIncludeRaiReason = getValueByPath(fromObject, [
    "includeRaiReason"
  ]);
  if (parentObject !== void 0 && fromIncludeRaiReason != null) {
    setValueByPath(parentObject, ["parameters", "includeRaiReason"], fromIncludeRaiReason);
  }
  const fromLanguage = getValueByPath(fromObject, ["language"]);
  if (parentObject !== void 0 && fromLanguage != null) {
    setValueByPath(parentObject, ["parameters", "language"], fromLanguage);
  }
  const fromOutputMimeType = getValueByPath(fromObject, [
    "outputMimeType"
  ]);
  if (parentObject !== void 0 && fromOutputMimeType != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "mimeType"], fromOutputMimeType);
  }
  const fromOutputCompressionQuality = getValueByPath(fromObject, [
    "outputCompressionQuality"
  ]);
  if (parentObject !== void 0 && fromOutputCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "compressionQuality"], fromOutputCompressionQuality);
  }
  if (getValueByPath(fromObject, ["addWatermark"]) !== void 0) {
    throw new Error("addWatermark parameter is not supported in Gemini API.");
  }
  const fromImageSize = getValueByPath(fromObject, ["imageSize"]);
  if (parentObject !== void 0 && fromImageSize != null) {
    setValueByPath(parentObject, ["parameters", "sampleImageSize"], fromImageSize);
  }
  if (getValueByPath(fromObject, ["enhancePrompt"]) !== void 0) {
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  }
  return toObject;
}
function generateImagesParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromPrompt != null) {
    setValueByPath(toObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], generateImagesConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function getModelParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "name"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listModelsConfigToMldev(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  const fromFilter = getValueByPath(fromObject, ["filter"]);
  if (parentObject !== void 0 && fromFilter != null) {
    setValueByPath(parentObject, ["_query", "filter"], fromFilter);
  }
  const fromQueryBase = getValueByPath(fromObject, ["queryBase"]);
  if (parentObject !== void 0 && fromQueryBase != null) {
    setValueByPath(parentObject, ["_url", "models_url"], tModelsUrl(apiClient, fromQueryBase));
  }
  return toObject;
}
function listModelsParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listModelsConfigToMldev(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function updateModelConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromDisplayName);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (parentObject !== void 0 && fromDescription != null) {
    setValueByPath(parentObject, ["description"], fromDescription);
  }
  const fromDefaultCheckpointId = getValueByPath(fromObject, [
    "defaultCheckpointId"
  ]);
  if (parentObject !== void 0 && fromDefaultCheckpointId != null) {
    setValueByPath(parentObject, ["defaultCheckpointId"], fromDefaultCheckpointId);
  }
  return toObject;
}
function updateModelParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "name"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], updateModelConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function deleteModelParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "name"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function countTokensConfigToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["systemInstruction"]) !== void 0) {
    throw new Error("systemInstruction parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["tools"]) !== void 0) {
    throw new Error("tools parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["generationConfig"]) !== void 0) {
    throw new Error("generationConfig parameter is not supported in Gemini API.");
  }
  return toObject;
}
function countTokensParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToMldev$1(item);
      });
    }
    setValueByPath(toObject, ["contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], countTokensConfigToMldev(fromConfig));
  }
  return toObject;
}
function imageToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["gcsUri"]) !== void 0) {
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  }
  const fromImageBytes = getValueByPath(fromObject, ["imageBytes"]);
  if (fromImageBytes != null) {
    setValueByPath(toObject, ["bytesBase64Encoded"], tBytes(fromImageBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function generateVideosConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromNumberOfVideos = getValueByPath(fromObject, [
    "numberOfVideos"
  ]);
  if (parentObject !== void 0 && fromNumberOfVideos != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfVideos);
  }
  if (getValueByPath(fromObject, ["outputGcsUri"]) !== void 0) {
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["fps"]) !== void 0) {
    throw new Error("fps parameter is not supported in Gemini API.");
  }
  const fromDurationSeconds = getValueByPath(fromObject, [
    "durationSeconds"
  ]);
  if (parentObject !== void 0 && fromDurationSeconds != null) {
    setValueByPath(parentObject, ["parameters", "durationSeconds"], fromDurationSeconds);
  }
  if (getValueByPath(fromObject, ["seed"]) !== void 0) {
    throw new Error("seed parameter is not supported in Gemini API.");
  }
  const fromAspectRatio = getValueByPath(fromObject, ["aspectRatio"]);
  if (parentObject !== void 0 && fromAspectRatio != null) {
    setValueByPath(parentObject, ["parameters", "aspectRatio"], fromAspectRatio);
  }
  if (getValueByPath(fromObject, ["resolution"]) !== void 0) {
    throw new Error("resolution parameter is not supported in Gemini API.");
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  if (getValueByPath(fromObject, ["pubsubTopic"]) !== void 0) {
    throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  }
  const fromNegativePrompt = getValueByPath(fromObject, [
    "negativePrompt"
  ]);
  if (parentObject !== void 0 && fromNegativePrompt != null) {
    setValueByPath(parentObject, ["parameters", "negativePrompt"], fromNegativePrompt);
  }
  const fromEnhancePrompt = getValueByPath(fromObject, [
    "enhancePrompt"
  ]);
  if (parentObject !== void 0 && fromEnhancePrompt != null) {
    setValueByPath(parentObject, ["parameters", "enhancePrompt"], fromEnhancePrompt);
  }
  if (getValueByPath(fromObject, ["generateAudio"]) !== void 0) {
    throw new Error("generateAudio parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["lastFrame"]) !== void 0) {
    throw new Error("lastFrame parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["compressionQuality"]) !== void 0) {
    throw new Error("compressionQuality parameter is not supported in Gemini API.");
  }
  return toObject;
}
function generateVideosParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromPrompt != null) {
    setValueByPath(toObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromImage = getValueByPath(fromObject, ["image"]);
  if (fromImage != null) {
    setValueByPath(toObject, ["instances[0]", "image"], imageToMldev(fromImage));
  }
  if (getValueByPath(fromObject, ["video"]) !== void 0) {
    throw new Error("video parameter is not supported in Gemini API.");
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], generateVideosConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function videoMetadataToVertex(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToVertex(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToVertex(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToVertex(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToVertex(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToVertex(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToVertex(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToVertex(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToVertex(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function schemaToVertex(fromObject) {
  const toObject = {};
  const fromAnyOf = getValueByPath(fromObject, ["anyOf"]);
  if (fromAnyOf != null) {
    setValueByPath(toObject, ["anyOf"], fromAnyOf);
  }
  const fromDefault = getValueByPath(fromObject, ["default"]);
  if (fromDefault != null) {
    setValueByPath(toObject, ["default"], fromDefault);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromEnum = getValueByPath(fromObject, ["enum"]);
  if (fromEnum != null) {
    setValueByPath(toObject, ["enum"], fromEnum);
  }
  const fromExample = getValueByPath(fromObject, ["example"]);
  if (fromExample != null) {
    setValueByPath(toObject, ["example"], fromExample);
  }
  const fromFormat = getValueByPath(fromObject, ["format"]);
  if (fromFormat != null) {
    setValueByPath(toObject, ["format"], fromFormat);
  }
  const fromItems = getValueByPath(fromObject, ["items"]);
  if (fromItems != null) {
    setValueByPath(toObject, ["items"], fromItems);
  }
  const fromMaxItems = getValueByPath(fromObject, ["maxItems"]);
  if (fromMaxItems != null) {
    setValueByPath(toObject, ["maxItems"], fromMaxItems);
  }
  const fromMaxLength = getValueByPath(fromObject, ["maxLength"]);
  if (fromMaxLength != null) {
    setValueByPath(toObject, ["maxLength"], fromMaxLength);
  }
  const fromMaxProperties = getValueByPath(fromObject, [
    "maxProperties"
  ]);
  if (fromMaxProperties != null) {
    setValueByPath(toObject, ["maxProperties"], fromMaxProperties);
  }
  const fromMaximum = getValueByPath(fromObject, ["maximum"]);
  if (fromMaximum != null) {
    setValueByPath(toObject, ["maximum"], fromMaximum);
  }
  const fromMinItems = getValueByPath(fromObject, ["minItems"]);
  if (fromMinItems != null) {
    setValueByPath(toObject, ["minItems"], fromMinItems);
  }
  const fromMinLength = getValueByPath(fromObject, ["minLength"]);
  if (fromMinLength != null) {
    setValueByPath(toObject, ["minLength"], fromMinLength);
  }
  const fromMinProperties = getValueByPath(fromObject, [
    "minProperties"
  ]);
  if (fromMinProperties != null) {
    setValueByPath(toObject, ["minProperties"], fromMinProperties);
  }
  const fromMinimum = getValueByPath(fromObject, ["minimum"]);
  if (fromMinimum != null) {
    setValueByPath(toObject, ["minimum"], fromMinimum);
  }
  const fromNullable = getValueByPath(fromObject, ["nullable"]);
  if (fromNullable != null) {
    setValueByPath(toObject, ["nullable"], fromNullable);
  }
  const fromPattern = getValueByPath(fromObject, ["pattern"]);
  if (fromPattern != null) {
    setValueByPath(toObject, ["pattern"], fromPattern);
  }
  const fromProperties = getValueByPath(fromObject, ["properties"]);
  if (fromProperties != null) {
    setValueByPath(toObject, ["properties"], fromProperties);
  }
  const fromPropertyOrdering = getValueByPath(fromObject, [
    "propertyOrdering"
  ]);
  if (fromPropertyOrdering != null) {
    setValueByPath(toObject, ["propertyOrdering"], fromPropertyOrdering);
  }
  const fromRequired = getValueByPath(fromObject, ["required"]);
  if (fromRequired != null) {
    setValueByPath(toObject, ["required"], fromRequired);
  }
  const fromTitle = getValueByPath(fromObject, ["title"]);
  if (fromTitle != null) {
    setValueByPath(toObject, ["title"], fromTitle);
  }
  const fromType = getValueByPath(fromObject, ["type"]);
  if (fromType != null) {
    setValueByPath(toObject, ["type"], fromType);
  }
  return toObject;
}
function modelSelectionConfigToVertex(fromObject) {
  const toObject = {};
  const fromFeatureSelectionPreference = getValueByPath(fromObject, [
    "featureSelectionPreference"
  ]);
  if (fromFeatureSelectionPreference != null) {
    setValueByPath(toObject, ["featureSelectionPreference"], fromFeatureSelectionPreference);
  }
  return toObject;
}
function safetySettingToVertex(fromObject) {
  const toObject = {};
  const fromMethod = getValueByPath(fromObject, ["method"]);
  if (fromMethod != null) {
    setValueByPath(toObject, ["method"], fromMethod);
  }
  const fromCategory = getValueByPath(fromObject, ["category"]);
  if (fromCategory != null) {
    setValueByPath(toObject, ["category"], fromCategory);
  }
  const fromThreshold = getValueByPath(fromObject, ["threshold"]);
  if (fromThreshold != null) {
    setValueByPath(toObject, ["threshold"], fromThreshold);
  }
  return toObject;
}
function functionDeclarationToVertex(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["behavior"]) !== void 0) {
    throw new Error("behavior parameter is not supported in Vertex AI.");
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToVertex(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToVertex(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToVertex(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToVertex(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToVertex(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function enterpriseWebSearchToVertex() {
  const toObject = {};
  return toObject;
}
function apiKeyConfigToVertex(fromObject) {
  const toObject = {};
  const fromApiKeyString = getValueByPath(fromObject, ["apiKeyString"]);
  if (fromApiKeyString != null) {
    setValueByPath(toObject, ["apiKeyString"], fromApiKeyString);
  }
  return toObject;
}
function authConfigToVertex(fromObject) {
  const toObject = {};
  const fromApiKeyConfig = getValueByPath(fromObject, ["apiKeyConfig"]);
  if (fromApiKeyConfig != null) {
    setValueByPath(toObject, ["apiKeyConfig"], apiKeyConfigToVertex(fromApiKeyConfig));
  }
  const fromAuthType = getValueByPath(fromObject, ["authType"]);
  if (fromAuthType != null) {
    setValueByPath(toObject, ["authType"], fromAuthType);
  }
  const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
    "googleServiceAccountConfig"
  ]);
  if (fromGoogleServiceAccountConfig != null) {
    setValueByPath(toObject, ["googleServiceAccountConfig"], fromGoogleServiceAccountConfig);
  }
  const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
    "httpBasicAuthConfig"
  ]);
  if (fromHttpBasicAuthConfig != null) {
    setValueByPath(toObject, ["httpBasicAuthConfig"], fromHttpBasicAuthConfig);
  }
  const fromOauthConfig = getValueByPath(fromObject, ["oauthConfig"]);
  if (fromOauthConfig != null) {
    setValueByPath(toObject, ["oauthConfig"], fromOauthConfig);
  }
  const fromOidcConfig = getValueByPath(fromObject, ["oidcConfig"]);
  if (fromOidcConfig != null) {
    setValueByPath(toObject, ["oidcConfig"], fromOidcConfig);
  }
  return toObject;
}
function googleMapsToVertex(fromObject) {
  const toObject = {};
  const fromAuthConfig = getValueByPath(fromObject, ["authConfig"]);
  if (fromAuthConfig != null) {
    setValueByPath(toObject, ["authConfig"], authConfigToVertex(fromAuthConfig));
  }
  return toObject;
}
function urlContextToVertex() {
  const toObject = {};
  return toObject;
}
function toolToVertex(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToVertex(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  const fromRetrieval = getValueByPath(fromObject, ["retrieval"]);
  if (fromRetrieval != null) {
    setValueByPath(toObject, ["retrieval"], fromRetrieval);
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToVertex(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToVertex(fromGoogleSearchRetrieval));
  }
  const fromEnterpriseWebSearch = getValueByPath(fromObject, [
    "enterpriseWebSearch"
  ]);
  if (fromEnterpriseWebSearch != null) {
    setValueByPath(toObject, ["enterpriseWebSearch"], enterpriseWebSearchToVertex());
  }
  const fromGoogleMaps = getValueByPath(fromObject, ["googleMaps"]);
  if (fromGoogleMaps != null) {
    setValueByPath(toObject, ["googleMaps"], googleMapsToVertex(fromGoogleMaps));
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToVertex());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function functionCallingConfigToVertex(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromAllowedFunctionNames = getValueByPath(fromObject, [
    "allowedFunctionNames"
  ]);
  if (fromAllowedFunctionNames != null) {
    setValueByPath(toObject, ["allowedFunctionNames"], fromAllowedFunctionNames);
  }
  return toObject;
}
function latLngToVertex(fromObject) {
  const toObject = {};
  const fromLatitude = getValueByPath(fromObject, ["latitude"]);
  if (fromLatitude != null) {
    setValueByPath(toObject, ["latitude"], fromLatitude);
  }
  const fromLongitude = getValueByPath(fromObject, ["longitude"]);
  if (fromLongitude != null) {
    setValueByPath(toObject, ["longitude"], fromLongitude);
  }
  return toObject;
}
function retrievalConfigToVertex(fromObject) {
  const toObject = {};
  const fromLatLng = getValueByPath(fromObject, ["latLng"]);
  if (fromLatLng != null) {
    setValueByPath(toObject, ["latLng"], latLngToVertex(fromLatLng));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function toolConfigToVertex(fromObject) {
  const toObject = {};
  const fromFunctionCallingConfig = getValueByPath(fromObject, [
    "functionCallingConfig"
  ]);
  if (fromFunctionCallingConfig != null) {
    setValueByPath(toObject, ["functionCallingConfig"], functionCallingConfigToVertex(fromFunctionCallingConfig));
  }
  const fromRetrievalConfig = getValueByPath(fromObject, [
    "retrievalConfig"
  ]);
  if (fromRetrievalConfig != null) {
    setValueByPath(toObject, ["retrievalConfig"], retrievalConfigToVertex(fromRetrievalConfig));
  }
  return toObject;
}
function prebuiltVoiceConfigToVertex(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToVertex(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToVertex(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speechConfigToVertex(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToVertex(fromVoiceConfig));
  }
  if (getValueByPath(fromObject, ["multiSpeakerVoiceConfig"]) !== void 0) {
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function thinkingConfigToVertex(fromObject) {
  const toObject = {};
  const fromIncludeThoughts = getValueByPath(fromObject, [
    "includeThoughts"
  ]);
  if (fromIncludeThoughts != null) {
    setValueByPath(toObject, ["includeThoughts"], fromIncludeThoughts);
  }
  const fromThinkingBudget = getValueByPath(fromObject, [
    "thinkingBudget"
  ]);
  if (fromThinkingBudget != null) {
    setValueByPath(toObject, ["thinkingBudget"], fromThinkingBudget);
  }
  return toObject;
}
function generateContentConfigToVertex(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToVertex(tContent(fromSystemInstruction)));
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (fromTemperature != null) {
    setValueByPath(toObject, ["temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (fromTopP != null) {
    setValueByPath(toObject, ["topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (fromTopK != null) {
    setValueByPath(toObject, ["topK"], fromTopK);
  }
  const fromCandidateCount = getValueByPath(fromObject, [
    "candidateCount"
  ]);
  if (fromCandidateCount != null) {
    setValueByPath(toObject, ["candidateCount"], fromCandidateCount);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (fromMaxOutputTokens != null) {
    setValueByPath(toObject, ["maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromStopSequences = getValueByPath(fromObject, [
    "stopSequences"
  ]);
  if (fromStopSequences != null) {
    setValueByPath(toObject, ["stopSequences"], fromStopSequences);
  }
  const fromResponseLogprobs = getValueByPath(fromObject, [
    "responseLogprobs"
  ]);
  if (fromResponseLogprobs != null) {
    setValueByPath(toObject, ["responseLogprobs"], fromResponseLogprobs);
  }
  const fromLogprobs = getValueByPath(fromObject, ["logprobs"]);
  if (fromLogprobs != null) {
    setValueByPath(toObject, ["logprobs"], fromLogprobs);
  }
  const fromPresencePenalty = getValueByPath(fromObject, [
    "presencePenalty"
  ]);
  if (fromPresencePenalty != null) {
    setValueByPath(toObject, ["presencePenalty"], fromPresencePenalty);
  }
  const fromFrequencyPenalty = getValueByPath(fromObject, [
    "frequencyPenalty"
  ]);
  if (fromFrequencyPenalty != null) {
    setValueByPath(toObject, ["frequencyPenalty"], fromFrequencyPenalty);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (fromSeed != null) {
    setValueByPath(toObject, ["seed"], fromSeed);
  }
  const fromResponseMimeType = getValueByPath(fromObject, [
    "responseMimeType"
  ]);
  if (fromResponseMimeType != null) {
    setValueByPath(toObject, ["responseMimeType"], fromResponseMimeType);
  }
  const fromResponseSchema = getValueByPath(fromObject, [
    "responseSchema"
  ]);
  if (fromResponseSchema != null) {
    setValueByPath(toObject, ["responseSchema"], schemaToVertex(tSchema(fromResponseSchema)));
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  const fromRoutingConfig = getValueByPath(fromObject, [
    "routingConfig"
  ]);
  if (fromRoutingConfig != null) {
    setValueByPath(toObject, ["routingConfig"], fromRoutingConfig);
  }
  const fromModelSelectionConfig = getValueByPath(fromObject, [
    "modelSelectionConfig"
  ]);
  if (fromModelSelectionConfig != null) {
    setValueByPath(toObject, ["modelConfig"], modelSelectionConfigToVertex(fromModelSelectionConfig));
  }
  const fromSafetySettings = getValueByPath(fromObject, [
    "safetySettings"
  ]);
  if (parentObject !== void 0 && fromSafetySettings != null) {
    let transformedList = fromSafetySettings;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return safetySettingToVertex(item);
      });
    }
    setValueByPath(parentObject, ["safetySettings"], transformedList);
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToVertex(tTool(item));
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromToolConfig = getValueByPath(fromObject, ["toolConfig"]);
  if (parentObject !== void 0 && fromToolConfig != null) {
    setValueByPath(parentObject, ["toolConfig"], toolConfigToVertex(fromToolConfig));
  }
  const fromLabels = getValueByPath(fromObject, ["labels"]);
  if (parentObject !== void 0 && fromLabels != null) {
    setValueByPath(parentObject, ["labels"], fromLabels);
  }
  const fromCachedContent = getValueByPath(fromObject, [
    "cachedContent"
  ]);
  if (parentObject !== void 0 && fromCachedContent != null) {
    setValueByPath(parentObject, ["cachedContent"], tCachedContentName(apiClient, fromCachedContent));
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (fromResponseModalities != null) {
    setValueByPath(toObject, ["responseModalities"], fromResponseModalities);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (fromMediaResolution != null) {
    setValueByPath(toObject, ["mediaResolution"], fromMediaResolution);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (fromSpeechConfig != null) {
    setValueByPath(toObject, ["speechConfig"], speechConfigToVertex(tSpeechConfig(fromSpeechConfig)));
  }
  const fromAudioTimestamp = getValueByPath(fromObject, [
    "audioTimestamp"
  ]);
  if (fromAudioTimestamp != null) {
    setValueByPath(toObject, ["audioTimestamp"], fromAudioTimestamp);
  }
  const fromThinkingConfig = getValueByPath(fromObject, [
    "thinkingConfig"
  ]);
  if (fromThinkingConfig != null) {
    setValueByPath(toObject, ["thinkingConfig"], thinkingConfigToVertex(fromThinkingConfig));
  }
  return toObject;
}
function generateContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToVertex(item);
      });
    }
    setValueByPath(toObject, ["contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["generationConfig"], generateContentConfigToVertex(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function embedContentConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromTaskType = getValueByPath(fromObject, ["taskType"]);
  if (parentObject !== void 0 && fromTaskType != null) {
    setValueByPath(parentObject, ["instances[]", "task_type"], fromTaskType);
  }
  const fromTitle = getValueByPath(fromObject, ["title"]);
  if (parentObject !== void 0 && fromTitle != null) {
    setValueByPath(parentObject, ["instances[]", "title"], fromTitle);
  }
  const fromOutputDimensionality = getValueByPath(fromObject, [
    "outputDimensionality"
  ]);
  if (parentObject !== void 0 && fromOutputDimensionality != null) {
    setValueByPath(parentObject, ["parameters", "outputDimensionality"], fromOutputDimensionality);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (parentObject !== void 0 && fromMimeType != null) {
    setValueByPath(parentObject, ["instances[]", "mimeType"], fromMimeType);
  }
  const fromAutoTruncate = getValueByPath(fromObject, ["autoTruncate"]);
  if (parentObject !== void 0 && fromAutoTruncate != null) {
    setValueByPath(parentObject, ["parameters", "autoTruncate"], fromAutoTruncate);
  }
  return toObject;
}
function embedContentParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    setValueByPath(toObject, ["instances[]", "content"], tContentsForEmbed(apiClient, fromContents));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], embedContentConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function generateImagesConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromOutputGcsUri = getValueByPath(fromObject, ["outputGcsUri"]);
  if (parentObject !== void 0 && fromOutputGcsUri != null) {
    setValueByPath(parentObject, ["parameters", "storageUri"], fromOutputGcsUri);
  }
  const fromNegativePrompt = getValueByPath(fromObject, [
    "negativePrompt"
  ]);
  if (parentObject !== void 0 && fromNegativePrompt != null) {
    setValueByPath(parentObject, ["parameters", "negativePrompt"], fromNegativePrompt);
  }
  const fromNumberOfImages = getValueByPath(fromObject, [
    "numberOfImages"
  ]);
  if (parentObject !== void 0 && fromNumberOfImages != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfImages);
  }
  const fromAspectRatio = getValueByPath(fromObject, ["aspectRatio"]);
  if (parentObject !== void 0 && fromAspectRatio != null) {
    setValueByPath(parentObject, ["parameters", "aspectRatio"], fromAspectRatio);
  }
  const fromGuidanceScale = getValueByPath(fromObject, [
    "guidanceScale"
  ]);
  if (parentObject !== void 0 && fromGuidanceScale != null) {
    setValueByPath(parentObject, ["parameters", "guidanceScale"], fromGuidanceScale);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["parameters", "seed"], fromSeed);
  }
  const fromSafetyFilterLevel = getValueByPath(fromObject, [
    "safetyFilterLevel"
  ]);
  if (parentObject !== void 0 && fromSafetyFilterLevel != null) {
    setValueByPath(parentObject, ["parameters", "safetySetting"], fromSafetyFilterLevel);
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
    "includeSafetyAttributes"
  ]);
  if (parentObject !== void 0 && fromIncludeSafetyAttributes != null) {
    setValueByPath(parentObject, ["parameters", "includeSafetyAttributes"], fromIncludeSafetyAttributes);
  }
  const fromIncludeRaiReason = getValueByPath(fromObject, [
    "includeRaiReason"
  ]);
  if (parentObject !== void 0 && fromIncludeRaiReason != null) {
    setValueByPath(parentObject, ["parameters", "includeRaiReason"], fromIncludeRaiReason);
  }
  const fromLanguage = getValueByPath(fromObject, ["language"]);
  if (parentObject !== void 0 && fromLanguage != null) {
    setValueByPath(parentObject, ["parameters", "language"], fromLanguage);
  }
  const fromOutputMimeType = getValueByPath(fromObject, [
    "outputMimeType"
  ]);
  if (parentObject !== void 0 && fromOutputMimeType != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "mimeType"], fromOutputMimeType);
  }
  const fromOutputCompressionQuality = getValueByPath(fromObject, [
    "outputCompressionQuality"
  ]);
  if (parentObject !== void 0 && fromOutputCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "compressionQuality"], fromOutputCompressionQuality);
  }
  const fromAddWatermark = getValueByPath(fromObject, ["addWatermark"]);
  if (parentObject !== void 0 && fromAddWatermark != null) {
    setValueByPath(parentObject, ["parameters", "addWatermark"], fromAddWatermark);
  }
  const fromImageSize = getValueByPath(fromObject, ["imageSize"]);
  if (parentObject !== void 0 && fromImageSize != null) {
    setValueByPath(parentObject, ["parameters", "sampleImageSize"], fromImageSize);
  }
  const fromEnhancePrompt = getValueByPath(fromObject, [
    "enhancePrompt"
  ]);
  if (parentObject !== void 0 && fromEnhancePrompt != null) {
    setValueByPath(parentObject, ["parameters", "enhancePrompt"], fromEnhancePrompt);
  }
  return toObject;
}
function generateImagesParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromPrompt != null) {
    setValueByPath(toObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], generateImagesConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function imageToVertex(fromObject) {
  const toObject = {};
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsUri"], fromGcsUri);
  }
  const fromImageBytes = getValueByPath(fromObject, ["imageBytes"]);
  if (fromImageBytes != null) {
    setValueByPath(toObject, ["bytesBase64Encoded"], tBytes(fromImageBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function maskReferenceConfigToVertex(fromObject) {
  const toObject = {};
  const fromMaskMode = getValueByPath(fromObject, ["maskMode"]);
  if (fromMaskMode != null) {
    setValueByPath(toObject, ["maskMode"], fromMaskMode);
  }
  const fromSegmentationClasses = getValueByPath(fromObject, [
    "segmentationClasses"
  ]);
  if (fromSegmentationClasses != null) {
    setValueByPath(toObject, ["maskClasses"], fromSegmentationClasses);
  }
  const fromMaskDilation = getValueByPath(fromObject, ["maskDilation"]);
  if (fromMaskDilation != null) {
    setValueByPath(toObject, ["dilation"], fromMaskDilation);
  }
  return toObject;
}
function controlReferenceConfigToVertex(fromObject) {
  const toObject = {};
  const fromControlType = getValueByPath(fromObject, ["controlType"]);
  if (fromControlType != null) {
    setValueByPath(toObject, ["controlType"], fromControlType);
  }
  const fromEnableControlImageComputation = getValueByPath(fromObject, [
    "enableControlImageComputation"
  ]);
  if (fromEnableControlImageComputation != null) {
    setValueByPath(toObject, ["computeControl"], fromEnableControlImageComputation);
  }
  return toObject;
}
function styleReferenceConfigToVertex(fromObject) {
  const toObject = {};
  const fromStyleDescription = getValueByPath(fromObject, [
    "styleDescription"
  ]);
  if (fromStyleDescription != null) {
    setValueByPath(toObject, ["styleDescription"], fromStyleDescription);
  }
  return toObject;
}
function subjectReferenceConfigToVertex(fromObject) {
  const toObject = {};
  const fromSubjectType = getValueByPath(fromObject, ["subjectType"]);
  if (fromSubjectType != null) {
    setValueByPath(toObject, ["subjectType"], fromSubjectType);
  }
  const fromSubjectDescription = getValueByPath(fromObject, [
    "subjectDescription"
  ]);
  if (fromSubjectDescription != null) {
    setValueByPath(toObject, ["subjectDescription"], fromSubjectDescription);
  }
  return toObject;
}
function referenceImageAPIInternalToVertex(fromObject) {
  const toObject = {};
  const fromReferenceImage = getValueByPath(fromObject, [
    "referenceImage"
  ]);
  if (fromReferenceImage != null) {
    setValueByPath(toObject, ["referenceImage"], imageToVertex(fromReferenceImage));
  }
  const fromReferenceId = getValueByPath(fromObject, ["referenceId"]);
  if (fromReferenceId != null) {
    setValueByPath(toObject, ["referenceId"], fromReferenceId);
  }
  const fromReferenceType = getValueByPath(fromObject, [
    "referenceType"
  ]);
  if (fromReferenceType != null) {
    setValueByPath(toObject, ["referenceType"], fromReferenceType);
  }
  const fromMaskImageConfig = getValueByPath(fromObject, [
    "maskImageConfig"
  ]);
  if (fromMaskImageConfig != null) {
    setValueByPath(toObject, ["maskImageConfig"], maskReferenceConfigToVertex(fromMaskImageConfig));
  }
  const fromControlImageConfig = getValueByPath(fromObject, [
    "controlImageConfig"
  ]);
  if (fromControlImageConfig != null) {
    setValueByPath(toObject, ["controlImageConfig"], controlReferenceConfigToVertex(fromControlImageConfig));
  }
  const fromStyleImageConfig = getValueByPath(fromObject, [
    "styleImageConfig"
  ]);
  if (fromStyleImageConfig != null) {
    setValueByPath(toObject, ["styleImageConfig"], styleReferenceConfigToVertex(fromStyleImageConfig));
  }
  const fromSubjectImageConfig = getValueByPath(fromObject, [
    "subjectImageConfig"
  ]);
  if (fromSubjectImageConfig != null) {
    setValueByPath(toObject, ["subjectImageConfig"], subjectReferenceConfigToVertex(fromSubjectImageConfig));
  }
  return toObject;
}
function editImageConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromOutputGcsUri = getValueByPath(fromObject, ["outputGcsUri"]);
  if (parentObject !== void 0 && fromOutputGcsUri != null) {
    setValueByPath(parentObject, ["parameters", "storageUri"], fromOutputGcsUri);
  }
  const fromNegativePrompt = getValueByPath(fromObject, [
    "negativePrompt"
  ]);
  if (parentObject !== void 0 && fromNegativePrompt != null) {
    setValueByPath(parentObject, ["parameters", "negativePrompt"], fromNegativePrompt);
  }
  const fromNumberOfImages = getValueByPath(fromObject, [
    "numberOfImages"
  ]);
  if (parentObject !== void 0 && fromNumberOfImages != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfImages);
  }
  const fromAspectRatio = getValueByPath(fromObject, ["aspectRatio"]);
  if (parentObject !== void 0 && fromAspectRatio != null) {
    setValueByPath(parentObject, ["parameters", "aspectRatio"], fromAspectRatio);
  }
  const fromGuidanceScale = getValueByPath(fromObject, [
    "guidanceScale"
  ]);
  if (parentObject !== void 0 && fromGuidanceScale != null) {
    setValueByPath(parentObject, ["parameters", "guidanceScale"], fromGuidanceScale);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["parameters", "seed"], fromSeed);
  }
  const fromSafetyFilterLevel = getValueByPath(fromObject, [
    "safetyFilterLevel"
  ]);
  if (parentObject !== void 0 && fromSafetyFilterLevel != null) {
    setValueByPath(parentObject, ["parameters", "safetySetting"], fromSafetyFilterLevel);
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
    "includeSafetyAttributes"
  ]);
  if (parentObject !== void 0 && fromIncludeSafetyAttributes != null) {
    setValueByPath(parentObject, ["parameters", "includeSafetyAttributes"], fromIncludeSafetyAttributes);
  }
  const fromIncludeRaiReason = getValueByPath(fromObject, [
    "includeRaiReason"
  ]);
  if (parentObject !== void 0 && fromIncludeRaiReason != null) {
    setValueByPath(parentObject, ["parameters", "includeRaiReason"], fromIncludeRaiReason);
  }
  const fromLanguage = getValueByPath(fromObject, ["language"]);
  if (parentObject !== void 0 && fromLanguage != null) {
    setValueByPath(parentObject, ["parameters", "language"], fromLanguage);
  }
  const fromOutputMimeType = getValueByPath(fromObject, [
    "outputMimeType"
  ]);
  if (parentObject !== void 0 && fromOutputMimeType != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "mimeType"], fromOutputMimeType);
  }
  const fromOutputCompressionQuality = getValueByPath(fromObject, [
    "outputCompressionQuality"
  ]);
  if (parentObject !== void 0 && fromOutputCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "compressionQuality"], fromOutputCompressionQuality);
  }
  const fromAddWatermark = getValueByPath(fromObject, ["addWatermark"]);
  if (parentObject !== void 0 && fromAddWatermark != null) {
    setValueByPath(parentObject, ["parameters", "addWatermark"], fromAddWatermark);
  }
  const fromEditMode = getValueByPath(fromObject, ["editMode"]);
  if (parentObject !== void 0 && fromEditMode != null) {
    setValueByPath(parentObject, ["parameters", "editMode"], fromEditMode);
  }
  const fromBaseSteps = getValueByPath(fromObject, ["baseSteps"]);
  if (parentObject !== void 0 && fromBaseSteps != null) {
    setValueByPath(parentObject, ["parameters", "editConfig", "baseSteps"], fromBaseSteps);
  }
  return toObject;
}
function editImageParametersInternalToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromPrompt != null) {
    setValueByPath(toObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromReferenceImages = getValueByPath(fromObject, [
    "referenceImages"
  ]);
  if (fromReferenceImages != null) {
    let transformedList = fromReferenceImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return referenceImageAPIInternalToVertex(item);
      });
    }
    setValueByPath(toObject, ["instances[0]", "referenceImages"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], editImageConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function upscaleImageAPIConfigInternalToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromIncludeRaiReason = getValueByPath(fromObject, [
    "includeRaiReason"
  ]);
  if (parentObject !== void 0 && fromIncludeRaiReason != null) {
    setValueByPath(parentObject, ["parameters", "includeRaiReason"], fromIncludeRaiReason);
  }
  const fromOutputMimeType = getValueByPath(fromObject, [
    "outputMimeType"
  ]);
  if (parentObject !== void 0 && fromOutputMimeType != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "mimeType"], fromOutputMimeType);
  }
  const fromOutputCompressionQuality = getValueByPath(fromObject, [
    "outputCompressionQuality"
  ]);
  if (parentObject !== void 0 && fromOutputCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "compressionQuality"], fromOutputCompressionQuality);
  }
  const fromEnhanceInputImage = getValueByPath(fromObject, [
    "enhanceInputImage"
  ]);
  if (parentObject !== void 0 && fromEnhanceInputImage != null) {
    setValueByPath(parentObject, ["parameters", "upscaleConfig", "enhanceInputImage"], fromEnhanceInputImage);
  }
  const fromImagePreservationFactor = getValueByPath(fromObject, [
    "imagePreservationFactor"
  ]);
  if (parentObject !== void 0 && fromImagePreservationFactor != null) {
    setValueByPath(parentObject, ["parameters", "upscaleConfig", "imagePreservationFactor"], fromImagePreservationFactor);
  }
  const fromNumberOfImages = getValueByPath(fromObject, [
    "numberOfImages"
  ]);
  if (parentObject !== void 0 && fromNumberOfImages != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfImages);
  }
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (parentObject !== void 0 && fromMode != null) {
    setValueByPath(parentObject, ["parameters", "mode"], fromMode);
  }
  return toObject;
}
function upscaleImageAPIParametersInternalToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromImage = getValueByPath(fromObject, ["image"]);
  if (fromImage != null) {
    setValueByPath(toObject, ["instances[0]", "image"], imageToVertex(fromImage));
  }
  const fromUpscaleFactor = getValueByPath(fromObject, [
    "upscaleFactor"
  ]);
  if (fromUpscaleFactor != null) {
    setValueByPath(toObject, ["parameters", "upscaleConfig", "upscaleFactor"], fromUpscaleFactor);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], upscaleImageAPIConfigInternalToVertex(fromConfig, toObject));
  }
  return toObject;
}
function productImageToVertex(fromObject) {
  const toObject = {};
  const fromProductImage = getValueByPath(fromObject, ["productImage"]);
  if (fromProductImage != null) {
    setValueByPath(toObject, ["image"], imageToVertex(fromProductImage));
  }
  return toObject;
}
function recontextImageSourceToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (parentObject !== void 0 && fromPrompt != null) {
    setValueByPath(parentObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromPersonImage = getValueByPath(fromObject, ["personImage"]);
  if (parentObject !== void 0 && fromPersonImage != null) {
    setValueByPath(parentObject, ["instances[0]", "personImage", "image"], imageToVertex(fromPersonImage));
  }
  const fromProductImages = getValueByPath(fromObject, [
    "productImages"
  ]);
  if (parentObject !== void 0 && fromProductImages != null) {
    let transformedList = fromProductImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return productImageToVertex(item);
      });
    }
    setValueByPath(parentObject, ["instances[0]", "productImages"], transformedList);
  }
  return toObject;
}
function recontextImageConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromNumberOfImages = getValueByPath(fromObject, [
    "numberOfImages"
  ]);
  if (parentObject !== void 0 && fromNumberOfImages != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfImages);
  }
  const fromBaseSteps = getValueByPath(fromObject, ["baseSteps"]);
  if (parentObject !== void 0 && fromBaseSteps != null) {
    setValueByPath(parentObject, ["parameters", "editConfig", "baseSteps"], fromBaseSteps);
  }
  const fromOutputGcsUri = getValueByPath(fromObject, ["outputGcsUri"]);
  if (parentObject !== void 0 && fromOutputGcsUri != null) {
    setValueByPath(parentObject, ["parameters", "storageUri"], fromOutputGcsUri);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["parameters", "seed"], fromSeed);
  }
  const fromSafetyFilterLevel = getValueByPath(fromObject, [
    "safetyFilterLevel"
  ]);
  if (parentObject !== void 0 && fromSafetyFilterLevel != null) {
    setValueByPath(parentObject, ["parameters", "safetySetting"], fromSafetyFilterLevel);
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  const fromOutputMimeType = getValueByPath(fromObject, [
    "outputMimeType"
  ]);
  if (parentObject !== void 0 && fromOutputMimeType != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "mimeType"], fromOutputMimeType);
  }
  const fromOutputCompressionQuality = getValueByPath(fromObject, [
    "outputCompressionQuality"
  ]);
  if (parentObject !== void 0 && fromOutputCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "outputOptions", "compressionQuality"], fromOutputCompressionQuality);
  }
  const fromEnhancePrompt = getValueByPath(fromObject, [
    "enhancePrompt"
  ]);
  if (parentObject !== void 0 && fromEnhancePrompt != null) {
    setValueByPath(parentObject, ["parameters", "enhancePrompt"], fromEnhancePrompt);
  }
  return toObject;
}
function recontextImageParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromSource = getValueByPath(fromObject, ["source"]);
  if (fromSource != null) {
    setValueByPath(toObject, ["config"], recontextImageSourceToVertex(fromSource, toObject));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], recontextImageConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function getModelParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "name"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listModelsConfigToVertex(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  const fromFilter = getValueByPath(fromObject, ["filter"]);
  if (parentObject !== void 0 && fromFilter != null) {
    setValueByPath(parentObject, ["_query", "filter"], fromFilter);
  }
  const fromQueryBase = getValueByPath(fromObject, ["queryBase"]);
  if (parentObject !== void 0 && fromQueryBase != null) {
    setValueByPath(parentObject, ["_url", "models_url"], tModelsUrl(apiClient, fromQueryBase));
  }
  return toObject;
}
function listModelsParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listModelsConfigToVertex(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function updateModelConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (parentObject !== void 0 && fromDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromDisplayName);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (parentObject !== void 0 && fromDescription != null) {
    setValueByPath(parentObject, ["description"], fromDescription);
  }
  const fromDefaultCheckpointId = getValueByPath(fromObject, [
    "defaultCheckpointId"
  ]);
  if (parentObject !== void 0 && fromDefaultCheckpointId != null) {
    setValueByPath(parentObject, ["defaultCheckpointId"], fromDefaultCheckpointId);
  }
  return toObject;
}
function updateModelParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], updateModelConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function deleteModelParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "name"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function countTokensConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["systemInstruction"], contentToVertex(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = fromTools;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToVertex(item);
      });
    }
    setValueByPath(parentObject, ["tools"], transformedList);
  }
  const fromGenerationConfig = getValueByPath(fromObject, [
    "generationConfig"
  ]);
  if (parentObject !== void 0 && fromGenerationConfig != null) {
    setValueByPath(parentObject, ["generationConfig"], fromGenerationConfig);
  }
  return toObject;
}
function countTokensParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToVertex(item);
      });
    }
    setValueByPath(toObject, ["contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], countTokensConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function computeTokensParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromContents = getValueByPath(fromObject, ["contents"]);
  if (fromContents != null) {
    let transformedList = tContents(fromContents);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentToVertex(item);
      });
    }
    setValueByPath(toObject, ["contents"], transformedList);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function videoToVertex(fromObject) {
  const toObject = {};
  const fromUri = getValueByPath(fromObject, ["uri"]);
  if (fromUri != null) {
    setValueByPath(toObject, ["gcsUri"], fromUri);
  }
  const fromVideoBytes = getValueByPath(fromObject, ["videoBytes"]);
  if (fromVideoBytes != null) {
    setValueByPath(toObject, ["bytesBase64Encoded"], tBytes(fromVideoBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function generateVideosConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromNumberOfVideos = getValueByPath(fromObject, [
    "numberOfVideos"
  ]);
  if (parentObject !== void 0 && fromNumberOfVideos != null) {
    setValueByPath(parentObject, ["parameters", "sampleCount"], fromNumberOfVideos);
  }
  const fromOutputGcsUri = getValueByPath(fromObject, ["outputGcsUri"]);
  if (parentObject !== void 0 && fromOutputGcsUri != null) {
    setValueByPath(parentObject, ["parameters", "storageUri"], fromOutputGcsUri);
  }
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (parentObject !== void 0 && fromFps != null) {
    setValueByPath(parentObject, ["parameters", "fps"], fromFps);
  }
  const fromDurationSeconds = getValueByPath(fromObject, [
    "durationSeconds"
  ]);
  if (parentObject !== void 0 && fromDurationSeconds != null) {
    setValueByPath(parentObject, ["parameters", "durationSeconds"], fromDurationSeconds);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["parameters", "seed"], fromSeed);
  }
  const fromAspectRatio = getValueByPath(fromObject, ["aspectRatio"]);
  if (parentObject !== void 0 && fromAspectRatio != null) {
    setValueByPath(parentObject, ["parameters", "aspectRatio"], fromAspectRatio);
  }
  const fromResolution = getValueByPath(fromObject, ["resolution"]);
  if (parentObject !== void 0 && fromResolution != null) {
    setValueByPath(parentObject, ["parameters", "resolution"], fromResolution);
  }
  const fromPersonGeneration = getValueByPath(fromObject, [
    "personGeneration"
  ]);
  if (parentObject !== void 0 && fromPersonGeneration != null) {
    setValueByPath(parentObject, ["parameters", "personGeneration"], fromPersonGeneration);
  }
  const fromPubsubTopic = getValueByPath(fromObject, ["pubsubTopic"]);
  if (parentObject !== void 0 && fromPubsubTopic != null) {
    setValueByPath(parentObject, ["parameters", "pubsubTopic"], fromPubsubTopic);
  }
  const fromNegativePrompt = getValueByPath(fromObject, [
    "negativePrompt"
  ]);
  if (parentObject !== void 0 && fromNegativePrompt != null) {
    setValueByPath(parentObject, ["parameters", "negativePrompt"], fromNegativePrompt);
  }
  const fromEnhancePrompt = getValueByPath(fromObject, [
    "enhancePrompt"
  ]);
  if (parentObject !== void 0 && fromEnhancePrompt != null) {
    setValueByPath(parentObject, ["parameters", "enhancePrompt"], fromEnhancePrompt);
  }
  const fromGenerateAudio = getValueByPath(fromObject, [
    "generateAudio"
  ]);
  if (parentObject !== void 0 && fromGenerateAudio != null) {
    setValueByPath(parentObject, ["parameters", "generateAudio"], fromGenerateAudio);
  }
  const fromLastFrame = getValueByPath(fromObject, ["lastFrame"]);
  if (parentObject !== void 0 && fromLastFrame != null) {
    setValueByPath(parentObject, ["instances[0]", "lastFrame"], imageToVertex(fromLastFrame));
  }
  const fromCompressionQuality = getValueByPath(fromObject, [
    "compressionQuality"
  ]);
  if (parentObject !== void 0 && fromCompressionQuality != null) {
    setValueByPath(parentObject, ["parameters", "compressionQuality"], fromCompressionQuality);
  }
  return toObject;
}
function generateVideosParametersToVertex(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["_url", "model"], tModel(apiClient, fromModel));
  }
  const fromPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromPrompt != null) {
    setValueByPath(toObject, ["instances[0]", "prompt"], fromPrompt);
  }
  const fromImage = getValueByPath(fromObject, ["image"]);
  if (fromImage != null) {
    setValueByPath(toObject, ["instances[0]", "image"], imageToVertex(fromImage));
  }
  const fromVideo = getValueByPath(fromObject, ["video"]);
  if (fromVideo != null) {
    setValueByPath(toObject, ["instances[0]", "video"], videoToVertex(fromVideo));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], generateVideosConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function videoMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobFromMldev(fromObject) {
  const toObject = {};
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataFromMldev(fromObject) {
  const toObject = {};
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partFromMldev(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataFromMldev(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobFromMldev(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataFromMldev(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentFromMldev(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partFromMldev(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function citationMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromCitations = getValueByPath(fromObject, ["citationSources"]);
  if (fromCitations != null) {
    setValueByPath(toObject, ["citations"], fromCitations);
  }
  return toObject;
}
function urlMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromRetrievedUrl = getValueByPath(fromObject, ["retrievedUrl"]);
  if (fromRetrievedUrl != null) {
    setValueByPath(toObject, ["retrievedUrl"], fromRetrievedUrl);
  }
  const fromUrlRetrievalStatus = getValueByPath(fromObject, [
    "urlRetrievalStatus"
  ]);
  if (fromUrlRetrievalStatus != null) {
    setValueByPath(toObject, ["urlRetrievalStatus"], fromUrlRetrievalStatus);
  }
  return toObject;
}
function urlContextMetadataFromMldev(fromObject) {
  const toObject = {};
  const fromUrlMetadata = getValueByPath(fromObject, ["urlMetadata"]);
  if (fromUrlMetadata != null) {
    let transformedList = fromUrlMetadata;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return urlMetadataFromMldev(item);
      });
    }
    setValueByPath(toObject, ["urlMetadata"], transformedList);
  }
  return toObject;
}
function candidateFromMldev(fromObject) {
  const toObject = {};
  const fromContent = getValueByPath(fromObject, ["content"]);
  if (fromContent != null) {
    setValueByPath(toObject, ["content"], contentFromMldev(fromContent));
  }
  const fromCitationMetadata = getValueByPath(fromObject, [
    "citationMetadata"
  ]);
  if (fromCitationMetadata != null) {
    setValueByPath(toObject, ["citationMetadata"], citationMetadataFromMldev(fromCitationMetadata));
  }
  const fromTokenCount = getValueByPath(fromObject, ["tokenCount"]);
  if (fromTokenCount != null) {
    setValueByPath(toObject, ["tokenCount"], fromTokenCount);
  }
  const fromFinishReason = getValueByPath(fromObject, ["finishReason"]);
  if (fromFinishReason != null) {
    setValueByPath(toObject, ["finishReason"], fromFinishReason);
  }
  const fromUrlContextMetadata = getValueByPath(fromObject, [
    "urlContextMetadata"
  ]);
  if (fromUrlContextMetadata != null) {
    setValueByPath(toObject, ["urlContextMetadata"], urlContextMetadataFromMldev(fromUrlContextMetadata));
  }
  const fromAvgLogprobs = getValueByPath(fromObject, ["avgLogprobs"]);
  if (fromAvgLogprobs != null) {
    setValueByPath(toObject, ["avgLogprobs"], fromAvgLogprobs);
  }
  const fromGroundingMetadata = getValueByPath(fromObject, [
    "groundingMetadata"
  ]);
  if (fromGroundingMetadata != null) {
    setValueByPath(toObject, ["groundingMetadata"], fromGroundingMetadata);
  }
  const fromIndex = getValueByPath(fromObject, ["index"]);
  if (fromIndex != null) {
    setValueByPath(toObject, ["index"], fromIndex);
  }
  const fromLogprobsResult = getValueByPath(fromObject, [
    "logprobsResult"
  ]);
  if (fromLogprobsResult != null) {
    setValueByPath(toObject, ["logprobsResult"], fromLogprobsResult);
  }
  const fromSafetyRatings = getValueByPath(fromObject, [
    "safetyRatings"
  ]);
  if (fromSafetyRatings != null) {
    setValueByPath(toObject, ["safetyRatings"], fromSafetyRatings);
  }
  return toObject;
}
function generateContentResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromCandidates = getValueByPath(fromObject, ["candidates"]);
  if (fromCandidates != null) {
    let transformedList = fromCandidates;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return candidateFromMldev(item);
      });
    }
    setValueByPath(toObject, ["candidates"], transformedList);
  }
  const fromModelVersion = getValueByPath(fromObject, ["modelVersion"]);
  if (fromModelVersion != null) {
    setValueByPath(toObject, ["modelVersion"], fromModelVersion);
  }
  const fromPromptFeedback = getValueByPath(fromObject, [
    "promptFeedback"
  ]);
  if (fromPromptFeedback != null) {
    setValueByPath(toObject, ["promptFeedback"], fromPromptFeedback);
  }
  const fromResponseId = getValueByPath(fromObject, ["responseId"]);
  if (fromResponseId != null) {
    setValueByPath(toObject, ["responseId"], fromResponseId);
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], fromUsageMetadata);
  }
  return toObject;
}
function contentEmbeddingFromMldev(fromObject) {
  const toObject = {};
  const fromValues = getValueByPath(fromObject, ["values"]);
  if (fromValues != null) {
    setValueByPath(toObject, ["values"], fromValues);
  }
  return toObject;
}
function embedContentMetadataFromMldev() {
  const toObject = {};
  return toObject;
}
function embedContentResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromEmbeddings = getValueByPath(fromObject, ["embeddings"]);
  if (fromEmbeddings != null) {
    let transformedList = fromEmbeddings;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentEmbeddingFromMldev(item);
      });
    }
    setValueByPath(toObject, ["embeddings"], transformedList);
  }
  const fromMetadata = getValueByPath(fromObject, ["metadata"]);
  if (fromMetadata != null) {
    setValueByPath(toObject, ["metadata"], embedContentMetadataFromMldev());
  }
  return toObject;
}
function imageFromMldev(fromObject) {
  const toObject = {};
  const fromImageBytes = getValueByPath(fromObject, [
    "bytesBase64Encoded"
  ]);
  if (fromImageBytes != null) {
    setValueByPath(toObject, ["imageBytes"], tBytes(fromImageBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function safetyAttributesFromMldev(fromObject) {
  const toObject = {};
  const fromCategories = getValueByPath(fromObject, [
    "safetyAttributes",
    "categories"
  ]);
  if (fromCategories != null) {
    setValueByPath(toObject, ["categories"], fromCategories);
  }
  const fromScores = getValueByPath(fromObject, [
    "safetyAttributes",
    "scores"
  ]);
  if (fromScores != null) {
    setValueByPath(toObject, ["scores"], fromScores);
  }
  const fromContentType = getValueByPath(fromObject, ["contentType"]);
  if (fromContentType != null) {
    setValueByPath(toObject, ["contentType"], fromContentType);
  }
  return toObject;
}
function generatedImageFromMldev(fromObject) {
  const toObject = {};
  const fromImage = getValueByPath(fromObject, ["_self"]);
  if (fromImage != null) {
    setValueByPath(toObject, ["image"], imageFromMldev(fromImage));
  }
  const fromRaiFilteredReason = getValueByPath(fromObject, [
    "raiFilteredReason"
  ]);
  if (fromRaiFilteredReason != null) {
    setValueByPath(toObject, ["raiFilteredReason"], fromRaiFilteredReason);
  }
  const fromSafetyAttributes = getValueByPath(fromObject, ["_self"]);
  if (fromSafetyAttributes != null) {
    setValueByPath(toObject, ["safetyAttributes"], safetyAttributesFromMldev(fromSafetyAttributes));
  }
  return toObject;
}
function generateImagesResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromGeneratedImages = getValueByPath(fromObject, [
    "predictions"
  ]);
  if (fromGeneratedImages != null) {
    let transformedList = fromGeneratedImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedImageFromMldev(item);
      });
    }
    setValueByPath(toObject, ["generatedImages"], transformedList);
  }
  const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
    "positivePromptSafetyAttributes"
  ]);
  if (fromPositivePromptSafetyAttributes != null) {
    setValueByPath(toObject, ["positivePromptSafetyAttributes"], safetyAttributesFromMldev(fromPositivePromptSafetyAttributes));
  }
  return toObject;
}
function tunedModelInfoFromMldev(fromObject) {
  const toObject = {};
  const fromBaseModel = getValueByPath(fromObject, ["baseModel"]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  return toObject;
}
function modelFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromVersion = getValueByPath(fromObject, ["version"]);
  if (fromVersion != null) {
    setValueByPath(toObject, ["version"], fromVersion);
  }
  const fromTunedModelInfo = getValueByPath(fromObject, ["_self"]);
  if (fromTunedModelInfo != null) {
    setValueByPath(toObject, ["tunedModelInfo"], tunedModelInfoFromMldev(fromTunedModelInfo));
  }
  const fromInputTokenLimit = getValueByPath(fromObject, [
    "inputTokenLimit"
  ]);
  if (fromInputTokenLimit != null) {
    setValueByPath(toObject, ["inputTokenLimit"], fromInputTokenLimit);
  }
  const fromOutputTokenLimit = getValueByPath(fromObject, [
    "outputTokenLimit"
  ]);
  if (fromOutputTokenLimit != null) {
    setValueByPath(toObject, ["outputTokenLimit"], fromOutputTokenLimit);
  }
  const fromSupportedActions = getValueByPath(fromObject, [
    "supportedGenerationMethods"
  ]);
  if (fromSupportedActions != null) {
    setValueByPath(toObject, ["supportedActions"], fromSupportedActions);
  }
  return toObject;
}
function listModelsResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromModels = getValueByPath(fromObject, ["_self"]);
  if (fromModels != null) {
    let transformedList = tExtractModels(fromModels);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modelFromMldev(item);
      });
    }
    setValueByPath(toObject, ["models"], transformedList);
  }
  return toObject;
}
function deleteModelResponseFromMldev() {
  const toObject = {};
  return toObject;
}
function countTokensResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromTotalTokens = getValueByPath(fromObject, ["totalTokens"]);
  if (fromTotalTokens != null) {
    setValueByPath(toObject, ["totalTokens"], fromTotalTokens);
  }
  const fromCachedContentTokenCount = getValueByPath(fromObject, [
    "cachedContentTokenCount"
  ]);
  if (fromCachedContentTokenCount != null) {
    setValueByPath(toObject, ["cachedContentTokenCount"], fromCachedContentTokenCount);
  }
  return toObject;
}
function videoFromMldev(fromObject) {
  const toObject = {};
  const fromUri = getValueByPath(fromObject, ["video", "uri"]);
  if (fromUri != null) {
    setValueByPath(toObject, ["uri"], fromUri);
  }
  const fromVideoBytes = getValueByPath(fromObject, [
    "video",
    "encodedVideo"
  ]);
  if (fromVideoBytes != null) {
    setValueByPath(toObject, ["videoBytes"], tBytes(fromVideoBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["encoding"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function generatedVideoFromMldev(fromObject) {
  const toObject = {};
  const fromVideo = getValueByPath(fromObject, ["_self"]);
  if (fromVideo != null) {
    setValueByPath(toObject, ["video"], videoFromMldev(fromVideo));
  }
  return toObject;
}
function generateVideosResponseFromMldev(fromObject) {
  const toObject = {};
  const fromGeneratedVideos = getValueByPath(fromObject, [
    "generatedSamples"
  ]);
  if (fromGeneratedVideos != null) {
    let transformedList = fromGeneratedVideos;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedVideoFromMldev(item);
      });
    }
    setValueByPath(toObject, ["generatedVideos"], transformedList);
  }
  const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
    "raiMediaFilteredCount"
  ]);
  if (fromRaiMediaFilteredCount != null) {
    setValueByPath(toObject, ["raiMediaFilteredCount"], fromRaiMediaFilteredCount);
  }
  const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
    "raiMediaFilteredReasons"
  ]);
  if (fromRaiMediaFilteredReasons != null) {
    setValueByPath(toObject, ["raiMediaFilteredReasons"], fromRaiMediaFilteredReasons);
  }
  return toObject;
}
function generateVideosOperationFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromMetadata = getValueByPath(fromObject, ["metadata"]);
  if (fromMetadata != null) {
    setValueByPath(toObject, ["metadata"], fromMetadata);
  }
  const fromDone = getValueByPath(fromObject, ["done"]);
  if (fromDone != null) {
    setValueByPath(toObject, ["done"], fromDone);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fromError);
  }
  const fromResponse = getValueByPath(fromObject, [
    "response",
    "generateVideoResponse"
  ]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], generateVideosResponseFromMldev(fromResponse));
  }
  return toObject;
}
function videoMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobFromVertex(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataFromVertex(fromObject) {
  const toObject = {};
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partFromVertex(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataFromVertex(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobFromVertex(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataFromVertex(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentFromVertex(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partFromVertex(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function citationMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromCitations = getValueByPath(fromObject, ["citations"]);
  if (fromCitations != null) {
    setValueByPath(toObject, ["citations"], fromCitations);
  }
  return toObject;
}
function urlMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromRetrievedUrl = getValueByPath(fromObject, ["retrievedUrl"]);
  if (fromRetrievedUrl != null) {
    setValueByPath(toObject, ["retrievedUrl"], fromRetrievedUrl);
  }
  const fromUrlRetrievalStatus = getValueByPath(fromObject, [
    "urlRetrievalStatus"
  ]);
  if (fromUrlRetrievalStatus != null) {
    setValueByPath(toObject, ["urlRetrievalStatus"], fromUrlRetrievalStatus);
  }
  return toObject;
}
function urlContextMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromUrlMetadata = getValueByPath(fromObject, ["urlMetadata"]);
  if (fromUrlMetadata != null) {
    let transformedList = fromUrlMetadata;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return urlMetadataFromVertex(item);
      });
    }
    setValueByPath(toObject, ["urlMetadata"], transformedList);
  }
  return toObject;
}
function candidateFromVertex(fromObject) {
  const toObject = {};
  const fromContent = getValueByPath(fromObject, ["content"]);
  if (fromContent != null) {
    setValueByPath(toObject, ["content"], contentFromVertex(fromContent));
  }
  const fromCitationMetadata = getValueByPath(fromObject, [
    "citationMetadata"
  ]);
  if (fromCitationMetadata != null) {
    setValueByPath(toObject, ["citationMetadata"], citationMetadataFromVertex(fromCitationMetadata));
  }
  const fromFinishMessage = getValueByPath(fromObject, [
    "finishMessage"
  ]);
  if (fromFinishMessage != null) {
    setValueByPath(toObject, ["finishMessage"], fromFinishMessage);
  }
  const fromFinishReason = getValueByPath(fromObject, ["finishReason"]);
  if (fromFinishReason != null) {
    setValueByPath(toObject, ["finishReason"], fromFinishReason);
  }
  const fromUrlContextMetadata = getValueByPath(fromObject, [
    "urlContextMetadata"
  ]);
  if (fromUrlContextMetadata != null) {
    setValueByPath(toObject, ["urlContextMetadata"], urlContextMetadataFromVertex(fromUrlContextMetadata));
  }
  const fromAvgLogprobs = getValueByPath(fromObject, ["avgLogprobs"]);
  if (fromAvgLogprobs != null) {
    setValueByPath(toObject, ["avgLogprobs"], fromAvgLogprobs);
  }
  const fromGroundingMetadata = getValueByPath(fromObject, [
    "groundingMetadata"
  ]);
  if (fromGroundingMetadata != null) {
    setValueByPath(toObject, ["groundingMetadata"], fromGroundingMetadata);
  }
  const fromIndex = getValueByPath(fromObject, ["index"]);
  if (fromIndex != null) {
    setValueByPath(toObject, ["index"], fromIndex);
  }
  const fromLogprobsResult = getValueByPath(fromObject, [
    "logprobsResult"
  ]);
  if (fromLogprobsResult != null) {
    setValueByPath(toObject, ["logprobsResult"], fromLogprobsResult);
  }
  const fromSafetyRatings = getValueByPath(fromObject, [
    "safetyRatings"
  ]);
  if (fromSafetyRatings != null) {
    setValueByPath(toObject, ["safetyRatings"], fromSafetyRatings);
  }
  return toObject;
}
function generateContentResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromCandidates = getValueByPath(fromObject, ["candidates"]);
  if (fromCandidates != null) {
    let transformedList = fromCandidates;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return candidateFromVertex(item);
      });
    }
    setValueByPath(toObject, ["candidates"], transformedList);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromModelVersion = getValueByPath(fromObject, ["modelVersion"]);
  if (fromModelVersion != null) {
    setValueByPath(toObject, ["modelVersion"], fromModelVersion);
  }
  const fromPromptFeedback = getValueByPath(fromObject, [
    "promptFeedback"
  ]);
  if (fromPromptFeedback != null) {
    setValueByPath(toObject, ["promptFeedback"], fromPromptFeedback);
  }
  const fromResponseId = getValueByPath(fromObject, ["responseId"]);
  if (fromResponseId != null) {
    setValueByPath(toObject, ["responseId"], fromResponseId);
  }
  const fromUsageMetadata = getValueByPath(fromObject, [
    "usageMetadata"
  ]);
  if (fromUsageMetadata != null) {
    setValueByPath(toObject, ["usageMetadata"], fromUsageMetadata);
  }
  return toObject;
}
function contentEmbeddingStatisticsFromVertex(fromObject) {
  const toObject = {};
  const fromTruncated = getValueByPath(fromObject, ["truncated"]);
  if (fromTruncated != null) {
    setValueByPath(toObject, ["truncated"], fromTruncated);
  }
  const fromTokenCount = getValueByPath(fromObject, ["token_count"]);
  if (fromTokenCount != null) {
    setValueByPath(toObject, ["tokenCount"], fromTokenCount);
  }
  return toObject;
}
function contentEmbeddingFromVertex(fromObject) {
  const toObject = {};
  const fromValues = getValueByPath(fromObject, ["values"]);
  if (fromValues != null) {
    setValueByPath(toObject, ["values"], fromValues);
  }
  const fromStatistics = getValueByPath(fromObject, ["statistics"]);
  if (fromStatistics != null) {
    setValueByPath(toObject, ["statistics"], contentEmbeddingStatisticsFromVertex(fromStatistics));
  }
  return toObject;
}
function embedContentMetadataFromVertex(fromObject) {
  const toObject = {};
  const fromBillableCharacterCount = getValueByPath(fromObject, [
    "billableCharacterCount"
  ]);
  if (fromBillableCharacterCount != null) {
    setValueByPath(toObject, ["billableCharacterCount"], fromBillableCharacterCount);
  }
  return toObject;
}
function embedContentResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromEmbeddings = getValueByPath(fromObject, [
    "predictions[]",
    "embeddings"
  ]);
  if (fromEmbeddings != null) {
    let transformedList = fromEmbeddings;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return contentEmbeddingFromVertex(item);
      });
    }
    setValueByPath(toObject, ["embeddings"], transformedList);
  }
  const fromMetadata = getValueByPath(fromObject, ["metadata"]);
  if (fromMetadata != null) {
    setValueByPath(toObject, ["metadata"], embedContentMetadataFromVertex(fromMetadata));
  }
  return toObject;
}
function imageFromVertex(fromObject) {
  const toObject = {};
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["gcsUri"], fromGcsUri);
  }
  const fromImageBytes = getValueByPath(fromObject, [
    "bytesBase64Encoded"
  ]);
  if (fromImageBytes != null) {
    setValueByPath(toObject, ["imageBytes"], tBytes(fromImageBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function safetyAttributesFromVertex(fromObject) {
  const toObject = {};
  const fromCategories = getValueByPath(fromObject, [
    "safetyAttributes",
    "categories"
  ]);
  if (fromCategories != null) {
    setValueByPath(toObject, ["categories"], fromCategories);
  }
  const fromScores = getValueByPath(fromObject, [
    "safetyAttributes",
    "scores"
  ]);
  if (fromScores != null) {
    setValueByPath(toObject, ["scores"], fromScores);
  }
  const fromContentType = getValueByPath(fromObject, ["contentType"]);
  if (fromContentType != null) {
    setValueByPath(toObject, ["contentType"], fromContentType);
  }
  return toObject;
}
function generatedImageFromVertex(fromObject) {
  const toObject = {};
  const fromImage = getValueByPath(fromObject, ["_self"]);
  if (fromImage != null) {
    setValueByPath(toObject, ["image"], imageFromVertex(fromImage));
  }
  const fromRaiFilteredReason = getValueByPath(fromObject, [
    "raiFilteredReason"
  ]);
  if (fromRaiFilteredReason != null) {
    setValueByPath(toObject, ["raiFilteredReason"], fromRaiFilteredReason);
  }
  const fromSafetyAttributes = getValueByPath(fromObject, ["_self"]);
  if (fromSafetyAttributes != null) {
    setValueByPath(toObject, ["safetyAttributes"], safetyAttributesFromVertex(fromSafetyAttributes));
  }
  const fromEnhancedPrompt = getValueByPath(fromObject, ["prompt"]);
  if (fromEnhancedPrompt != null) {
    setValueByPath(toObject, ["enhancedPrompt"], fromEnhancedPrompt);
  }
  return toObject;
}
function generateImagesResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromGeneratedImages = getValueByPath(fromObject, [
    "predictions"
  ]);
  if (fromGeneratedImages != null) {
    let transformedList = fromGeneratedImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedImageFromVertex(item);
      });
    }
    setValueByPath(toObject, ["generatedImages"], transformedList);
  }
  const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
    "positivePromptSafetyAttributes"
  ]);
  if (fromPositivePromptSafetyAttributes != null) {
    setValueByPath(toObject, ["positivePromptSafetyAttributes"], safetyAttributesFromVertex(fromPositivePromptSafetyAttributes));
  }
  return toObject;
}
function editImageResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromGeneratedImages = getValueByPath(fromObject, [
    "predictions"
  ]);
  if (fromGeneratedImages != null) {
    let transformedList = fromGeneratedImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedImageFromVertex(item);
      });
    }
    setValueByPath(toObject, ["generatedImages"], transformedList);
  }
  return toObject;
}
function upscaleImageResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromGeneratedImages = getValueByPath(fromObject, [
    "predictions"
  ]);
  if (fromGeneratedImages != null) {
    let transformedList = fromGeneratedImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedImageFromVertex(item);
      });
    }
    setValueByPath(toObject, ["generatedImages"], transformedList);
  }
  return toObject;
}
function recontextImageResponseFromVertex(fromObject) {
  const toObject = {};
  const fromGeneratedImages = getValueByPath(fromObject, [
    "predictions"
  ]);
  if (fromGeneratedImages != null) {
    let transformedList = fromGeneratedImages;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedImageFromVertex(item);
      });
    }
    setValueByPath(toObject, ["generatedImages"], transformedList);
  }
  return toObject;
}
function endpointFromVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["endpoint"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDeployedModelId = getValueByPath(fromObject, [
    "deployedModelId"
  ]);
  if (fromDeployedModelId != null) {
    setValueByPath(toObject, ["deployedModelId"], fromDeployedModelId);
  }
  return toObject;
}
function tunedModelInfoFromVertex(fromObject) {
  const toObject = {};
  const fromBaseModel = getValueByPath(fromObject, [
    "labels",
    "google-vertex-llm-tuning-base-model-id"
  ]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  return toObject;
}
function checkpointFromVertex(fromObject) {
  const toObject = {};
  const fromCheckpointId = getValueByPath(fromObject, ["checkpointId"]);
  if (fromCheckpointId != null) {
    setValueByPath(toObject, ["checkpointId"], fromCheckpointId);
  }
  const fromEpoch = getValueByPath(fromObject, ["epoch"]);
  if (fromEpoch != null) {
    setValueByPath(toObject, ["epoch"], fromEpoch);
  }
  const fromStep = getValueByPath(fromObject, ["step"]);
  if (fromStep != null) {
    setValueByPath(toObject, ["step"], fromStep);
  }
  return toObject;
}
function modelFromVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromDisplayName = getValueByPath(fromObject, ["displayName"]);
  if (fromDisplayName != null) {
    setValueByPath(toObject, ["displayName"], fromDisplayName);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromVersion = getValueByPath(fromObject, ["versionId"]);
  if (fromVersion != null) {
    setValueByPath(toObject, ["version"], fromVersion);
  }
  const fromEndpoints = getValueByPath(fromObject, ["deployedModels"]);
  if (fromEndpoints != null) {
    let transformedList = fromEndpoints;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return endpointFromVertex(item);
      });
    }
    setValueByPath(toObject, ["endpoints"], transformedList);
  }
  const fromLabels = getValueByPath(fromObject, ["labels"]);
  if (fromLabels != null) {
    setValueByPath(toObject, ["labels"], fromLabels);
  }
  const fromTunedModelInfo = getValueByPath(fromObject, ["_self"]);
  if (fromTunedModelInfo != null) {
    setValueByPath(toObject, ["tunedModelInfo"], tunedModelInfoFromVertex(fromTunedModelInfo));
  }
  const fromDefaultCheckpointId = getValueByPath(fromObject, [
    "defaultCheckpointId"
  ]);
  if (fromDefaultCheckpointId != null) {
    setValueByPath(toObject, ["defaultCheckpointId"], fromDefaultCheckpointId);
  }
  const fromCheckpoints = getValueByPath(fromObject, ["checkpoints"]);
  if (fromCheckpoints != null) {
    let transformedList = fromCheckpoints;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return checkpointFromVertex(item);
      });
    }
    setValueByPath(toObject, ["checkpoints"], transformedList);
  }
  return toObject;
}
function listModelsResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromModels = getValueByPath(fromObject, ["_self"]);
  if (fromModels != null) {
    let transformedList = tExtractModels(fromModels);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return modelFromVertex(item);
      });
    }
    setValueByPath(toObject, ["models"], transformedList);
  }
  return toObject;
}
function deleteModelResponseFromVertex() {
  const toObject = {};
  return toObject;
}
function countTokensResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromTotalTokens = getValueByPath(fromObject, ["totalTokens"]);
  if (fromTotalTokens != null) {
    setValueByPath(toObject, ["totalTokens"], fromTotalTokens);
  }
  return toObject;
}
function computeTokensResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromTokensInfo = getValueByPath(fromObject, ["tokensInfo"]);
  if (fromTokensInfo != null) {
    setValueByPath(toObject, ["tokensInfo"], fromTokensInfo);
  }
  return toObject;
}
function videoFromVertex(fromObject) {
  const toObject = {};
  const fromUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromUri != null) {
    setValueByPath(toObject, ["uri"], fromUri);
  }
  const fromVideoBytes = getValueByPath(fromObject, [
    "bytesBase64Encoded"
  ]);
  if (fromVideoBytes != null) {
    setValueByPath(toObject, ["videoBytes"], tBytes(fromVideoBytes));
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function generatedVideoFromVertex(fromObject) {
  const toObject = {};
  const fromVideo = getValueByPath(fromObject, ["_self"]);
  if (fromVideo != null) {
    setValueByPath(toObject, ["video"], videoFromVertex(fromVideo));
  }
  return toObject;
}
function generateVideosResponseFromVertex(fromObject) {
  const toObject = {};
  const fromGeneratedVideos = getValueByPath(fromObject, ["videos"]);
  if (fromGeneratedVideos != null) {
    let transformedList = fromGeneratedVideos;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedVideoFromVertex(item);
      });
    }
    setValueByPath(toObject, ["generatedVideos"], transformedList);
  }
  const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
    "raiMediaFilteredCount"
  ]);
  if (fromRaiMediaFilteredCount != null) {
    setValueByPath(toObject, ["raiMediaFilteredCount"], fromRaiMediaFilteredCount);
  }
  const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
    "raiMediaFilteredReasons"
  ]);
  if (fromRaiMediaFilteredReasons != null) {
    setValueByPath(toObject, ["raiMediaFilteredReasons"], fromRaiMediaFilteredReasons);
  }
  return toObject;
}
function generateVideosOperationFromVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromMetadata = getValueByPath(fromObject, ["metadata"]);
  if (fromMetadata != null) {
    setValueByPath(toObject, ["metadata"], fromMetadata);
  }
  const fromDone = getValueByPath(fromObject, ["done"]);
  if (fromDone != null) {
    setValueByPath(toObject, ["done"], fromDone);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fromError);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], generateVideosResponseFromVertex(fromResponse));
  }
  return toObject;
}
async function throwErrorIfNotOK(response) {
  var _a;
  if (response === void 0) {
    throw new Error("response is undefined");
  }
  if (!response.ok) {
    const status = response.status;
    let errorBody;
    if ((_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json")) {
      errorBody = await response.json();
    } else {
      errorBody = {
        error: {
          message: await response.text(),
          code: response.status,
          status: response.statusText
        }
      };
    }
    const errorMessage = JSON.stringify(errorBody);
    if (status >= 400 && status < 600) {
      const apiError = new ApiError({
        message: errorMessage,
        status
      });
      throw apiError;
    }
    throw new Error(errorMessage);
  }
}
function includeExtraBodyToRequestInit(requestInit, extraBody) {
  if (!extraBody || Object.keys(extraBody).length === 0) {
    return;
  }
  if (requestInit.body instanceof Blob) {
    console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
    return;
  }
  let currentBodyObject = {};
  if (typeof requestInit.body === "string" && requestInit.body.length > 0) {
    try {
      const parsedBody = JSON.parse(requestInit.body);
      if (typeof parsedBody === "object" && parsedBody !== null && !Array.isArray(parsedBody)) {
        currentBodyObject = parsedBody;
      } else {
        console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
        return;
      }
    } catch (e) {
      console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
      return;
    }
  }
  function deepMerge(target, source) {
    const output = Object.assign({}, target);
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const targetValue = output[key];
        if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue) && targetValue && typeof targetValue === "object" && !Array.isArray(targetValue)) {
          output[key] = deepMerge(targetValue, sourceValue);
        } else {
          if (targetValue && sourceValue && typeof targetValue !== typeof sourceValue) {
            console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${key}". Original type: ${typeof targetValue}, New type: ${typeof sourceValue}. Overwriting.`);
          }
          output[key] = sourceValue;
        }
      }
    }
    return output;
  }
  __name(deepMerge, "deepMerge");
  const mergedBody = deepMerge(currentBodyObject, extraBody);
  requestInit.body = JSON.stringify(mergedBody);
}
function hasMcpToolUsage(tools) {
  for (const tool of tools) {
    if (isMcpCallableTool(tool)) {
      return true;
    }
    if (typeof tool === "object" && "inputSchema" in tool) {
      return true;
    }
  }
  return hasMcpToolUsageFromMcpToTool;
}
function setMcpUsageHeader(headers) {
  var _a;
  const existingHeader = (_a = headers[GOOGLE_API_CLIENT_HEADER]) !== null && _a !== void 0 ? _a : "";
  headers[GOOGLE_API_CLIENT_HEADER] = (existingHeader + ` ${MCP_LABEL}`).trimStart();
}
function isMcpCallableTool(object) {
  return object !== null && typeof object === "object" && object instanceof McpCallableTool;
}
function listAllTools(mcpClient, maxTools = 100) {
  return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function* listAllTools_1() {
    let cursor = void 0;
    let numTools = 0;
    while (numTools < maxTools) {
      const t = yield __await(mcpClient.listTools({ cursor }));
      for (const tool of t.tools) {
        yield yield __await(tool);
        numTools++;
      }
      if (!t.nextCursor) {
        break;
      }
      cursor = t.nextCursor;
    }
  }, "listAllTools_1"));
}
function isMcpClient(client) {
  return client !== null && typeof client === "object" && "listTools" in client && typeof client.listTools === "function";
}
function mcpToTool(...args) {
  hasMcpToolUsageFromMcpToTool = true;
  if (args.length === 0) {
    throw new Error("No MCP clients provided");
  }
  const maybeConfig = args[args.length - 1];
  if (isMcpClient(maybeConfig)) {
    return McpCallableTool.create(args, {});
  }
  return McpCallableTool.create(args.slice(0, args.length - 1), maybeConfig);
}
async function handleWebSocketMessage$1(apiClient, onmessage, event) {
  const serverMessage = new LiveMusicServerMessage();
  let data;
  if (event.data instanceof Blob) {
    data = JSON.parse(await event.data.text());
  } else {
    data = JSON.parse(event.data);
  }
  const response = liveMusicServerMessageFromMldev(data);
  Object.assign(serverMessage, response);
  onmessage(serverMessage);
}
function headersToMap$1(headers) {
  const headerMap = {};
  headers.forEach((value, key) => {
    headerMap[key] = value;
  });
  return headerMap;
}
function mapToHeaders$1(map) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(map)) {
    headers.append(key, value);
  }
  return headers;
}
async function handleWebSocketMessage(apiClient, onmessage, event) {
  const serverMessage = new LiveServerMessage();
  let jsonData;
  if (event.data instanceof Blob) {
    jsonData = await event.data.text();
  } else if (event.data instanceof ArrayBuffer) {
    jsonData = new TextDecoder().decode(event.data);
  } else {
    jsonData = event.data;
  }
  const data = JSON.parse(jsonData);
  if (apiClient.isVertexAI()) {
    const resp = liveServerMessageFromVertex(data);
    Object.assign(serverMessage, resp);
  } else {
    const resp = liveServerMessageFromMldev(data);
    Object.assign(serverMessage, resp);
  }
  onmessage(serverMessage);
}
function headersToMap(headers) {
  const headerMap = {};
  headers.forEach((value, key) => {
    headerMap[key] = value;
  });
  return headerMap;
}
function mapToHeaders(map) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(map)) {
    headers.append(key, value);
  }
  return headers;
}
function shouldDisableAfc(config2) {
  var _a, _b, _c;
  if ((_a = config2 === null || config2 === void 0 ? void 0 : config2.automaticFunctionCalling) === null || _a === void 0 ? void 0 : _a.disable) {
    return true;
  }
  let callableToolsPresent = false;
  for (const tool of (_b = config2 === null || config2 === void 0 ? void 0 : config2.tools) !== null && _b !== void 0 ? _b : []) {
    if (isCallableTool(tool)) {
      callableToolsPresent = true;
      break;
    }
  }
  if (!callableToolsPresent) {
    return true;
  }
  const maxCalls = (_c = config2 === null || config2 === void 0 ? void 0 : config2.automaticFunctionCalling) === null || _c === void 0 ? void 0 : _c.maximumRemoteCalls;
  if (maxCalls && (maxCalls < 0 || !Number.isInteger(maxCalls)) || maxCalls == 0) {
    console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", maxCalls);
    return true;
  }
  return false;
}
function isCallableTool(tool) {
  return "callTool" in tool && typeof tool.callTool === "function";
}
function hasCallableTools(params) {
  var _a, _b, _c;
  return (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) === null || _b === void 0 ? void 0 : _b.some((tool) => isCallableTool(tool))) !== null && _c !== void 0 ? _c : false;
}
function hasNonCallableTools(params) {
  var _a, _b, _c;
  return (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) === null || _b === void 0 ? void 0 : _b.some((tool) => !isCallableTool(tool))) !== null && _c !== void 0 ? _c : false;
}
function shouldAppendAfcHistory(config2) {
  var _a;
  return !((_a = config2 === null || config2 === void 0 ? void 0 : config2.automaticFunctionCalling) === null || _a === void 0 ? void 0 : _a.ignoreCallHistory);
}
function getOperationParametersToMldev(fromObject) {
  const toObject = {};
  const fromOperationName = getValueByPath(fromObject, [
    "operationName"
  ]);
  if (fromOperationName != null) {
    setValueByPath(toObject, ["_url", "operationName"], fromOperationName);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function getOperationParametersToVertex(fromObject) {
  const toObject = {};
  const fromOperationName = getValueByPath(fromObject, [
    "operationName"
  ]);
  if (fromOperationName != null) {
    setValueByPath(toObject, ["_url", "operationName"], fromOperationName);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function fetchPredictOperationParametersToVertex(fromObject) {
  const toObject = {};
  const fromOperationName = getValueByPath(fromObject, [
    "operationName"
  ]);
  if (fromOperationName != null) {
    setValueByPath(toObject, ["operationName"], fromOperationName);
  }
  const fromResourceName = getValueByPath(fromObject, ["resourceName"]);
  if (fromResourceName != null) {
    setValueByPath(toObject, ["_url", "resourceName"], fromResourceName);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function prebuiltVoiceConfigToMldev(fromObject) {
  const toObject = {};
  const fromVoiceName = getValueByPath(fromObject, ["voiceName"]);
  if (fromVoiceName != null) {
    setValueByPath(toObject, ["voiceName"], fromVoiceName);
  }
  return toObject;
}
function voiceConfigToMldev(fromObject) {
  const toObject = {};
  const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
    "prebuiltVoiceConfig"
  ]);
  if (fromPrebuiltVoiceConfig != null) {
    setValueByPath(toObject, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev(fromPrebuiltVoiceConfig));
  }
  return toObject;
}
function speakerVoiceConfigToMldev(fromObject) {
  const toObject = {};
  const fromSpeaker = getValueByPath(fromObject, ["speaker"]);
  if (fromSpeaker != null) {
    setValueByPath(toObject, ["speaker"], fromSpeaker);
  }
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev(fromVoiceConfig));
  }
  return toObject;
}
function multiSpeakerVoiceConfigToMldev(fromObject) {
  const toObject = {};
  const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
    "speakerVoiceConfigs"
  ]);
  if (fromSpeakerVoiceConfigs != null) {
    let transformedList = fromSpeakerVoiceConfigs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return speakerVoiceConfigToMldev(item);
      });
    }
    setValueByPath(toObject, ["speakerVoiceConfigs"], transformedList);
  }
  return toObject;
}
function speechConfigToMldev(fromObject) {
  const toObject = {};
  const fromVoiceConfig = getValueByPath(fromObject, ["voiceConfig"]);
  if (fromVoiceConfig != null) {
    setValueByPath(toObject, ["voiceConfig"], voiceConfigToMldev(fromVoiceConfig));
  }
  const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
    "multiSpeakerVoiceConfig"
  ]);
  if (fromMultiSpeakerVoiceConfig != null) {
    setValueByPath(toObject, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev(fromMultiSpeakerVoiceConfig));
  }
  const fromLanguageCode = getValueByPath(fromObject, ["languageCode"]);
  if (fromLanguageCode != null) {
    setValueByPath(toObject, ["languageCode"], fromLanguageCode);
  }
  return toObject;
}
function videoMetadataToMldev(fromObject) {
  const toObject = {};
  const fromFps = getValueByPath(fromObject, ["fps"]);
  if (fromFps != null) {
    setValueByPath(toObject, ["fps"], fromFps);
  }
  const fromEndOffset = getValueByPath(fromObject, ["endOffset"]);
  if (fromEndOffset != null) {
    setValueByPath(toObject, ["endOffset"], fromEndOffset);
  }
  const fromStartOffset = getValueByPath(fromObject, ["startOffset"]);
  if (fromStartOffset != null) {
    setValueByPath(toObject, ["startOffset"], fromStartOffset);
  }
  return toObject;
}
function blobToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromData = getValueByPath(fromObject, ["data"]);
  if (fromData != null) {
    setValueByPath(toObject, ["data"], fromData);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function fileDataToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["displayName"]) !== void 0) {
    throw new Error("displayName parameter is not supported in Gemini API.");
  }
  const fromFileUri = getValueByPath(fromObject, ["fileUri"]);
  if (fromFileUri != null) {
    setValueByPath(toObject, ["fileUri"], fromFileUri);
  }
  const fromMimeType = getValueByPath(fromObject, ["mimeType"]);
  if (fromMimeType != null) {
    setValueByPath(toObject, ["mimeType"], fromMimeType);
  }
  return toObject;
}
function partToMldev(fromObject) {
  const toObject = {};
  const fromVideoMetadata = getValueByPath(fromObject, [
    "videoMetadata"
  ]);
  if (fromVideoMetadata != null) {
    setValueByPath(toObject, ["videoMetadata"], videoMetadataToMldev(fromVideoMetadata));
  }
  const fromThought = getValueByPath(fromObject, ["thought"]);
  if (fromThought != null) {
    setValueByPath(toObject, ["thought"], fromThought);
  }
  const fromInlineData = getValueByPath(fromObject, ["inlineData"]);
  if (fromInlineData != null) {
    setValueByPath(toObject, ["inlineData"], blobToMldev(fromInlineData));
  }
  const fromFileData = getValueByPath(fromObject, ["fileData"]);
  if (fromFileData != null) {
    setValueByPath(toObject, ["fileData"], fileDataToMldev(fromFileData));
  }
  const fromThoughtSignature = getValueByPath(fromObject, [
    "thoughtSignature"
  ]);
  if (fromThoughtSignature != null) {
    setValueByPath(toObject, ["thoughtSignature"], fromThoughtSignature);
  }
  const fromCodeExecutionResult = getValueByPath(fromObject, [
    "codeExecutionResult"
  ]);
  if (fromCodeExecutionResult != null) {
    setValueByPath(toObject, ["codeExecutionResult"], fromCodeExecutionResult);
  }
  const fromExecutableCode = getValueByPath(fromObject, [
    "executableCode"
  ]);
  if (fromExecutableCode != null) {
    setValueByPath(toObject, ["executableCode"], fromExecutableCode);
  }
  const fromFunctionCall = getValueByPath(fromObject, ["functionCall"]);
  if (fromFunctionCall != null) {
    setValueByPath(toObject, ["functionCall"], fromFunctionCall);
  }
  const fromFunctionResponse = getValueByPath(fromObject, [
    "functionResponse"
  ]);
  if (fromFunctionResponse != null) {
    setValueByPath(toObject, ["functionResponse"], fromFunctionResponse);
  }
  const fromText = getValueByPath(fromObject, ["text"]);
  if (fromText != null) {
    setValueByPath(toObject, ["text"], fromText);
  }
  return toObject;
}
function contentToMldev(fromObject) {
  const toObject = {};
  const fromParts = getValueByPath(fromObject, ["parts"]);
  if (fromParts != null) {
    let transformedList = fromParts;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return partToMldev(item);
      });
    }
    setValueByPath(toObject, ["parts"], transformedList);
  }
  const fromRole = getValueByPath(fromObject, ["role"]);
  if (fromRole != null) {
    setValueByPath(toObject, ["role"], fromRole);
  }
  return toObject;
}
function functionDeclarationToMldev(fromObject) {
  const toObject = {};
  const fromBehavior = getValueByPath(fromObject, ["behavior"]);
  if (fromBehavior != null) {
    setValueByPath(toObject, ["behavior"], fromBehavior);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromParameters = getValueByPath(fromObject, ["parameters"]);
  if (fromParameters != null) {
    setValueByPath(toObject, ["parameters"], fromParameters);
  }
  const fromParametersJsonSchema = getValueByPath(fromObject, [
    "parametersJsonSchema"
  ]);
  if (fromParametersJsonSchema != null) {
    setValueByPath(toObject, ["parametersJsonSchema"], fromParametersJsonSchema);
  }
  const fromResponse = getValueByPath(fromObject, ["response"]);
  if (fromResponse != null) {
    setValueByPath(toObject, ["response"], fromResponse);
  }
  const fromResponseJsonSchema = getValueByPath(fromObject, [
    "responseJsonSchema"
  ]);
  if (fromResponseJsonSchema != null) {
    setValueByPath(toObject, ["responseJsonSchema"], fromResponseJsonSchema);
  }
  return toObject;
}
function intervalToMldev(fromObject) {
  const toObject = {};
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  return toObject;
}
function googleSearchToMldev(fromObject) {
  const toObject = {};
  const fromTimeRangeFilter = getValueByPath(fromObject, [
    "timeRangeFilter"
  ]);
  if (fromTimeRangeFilter != null) {
    setValueByPath(toObject, ["timeRangeFilter"], intervalToMldev(fromTimeRangeFilter));
  }
  return toObject;
}
function dynamicRetrievalConfigToMldev(fromObject) {
  const toObject = {};
  const fromMode = getValueByPath(fromObject, ["mode"]);
  if (fromMode != null) {
    setValueByPath(toObject, ["mode"], fromMode);
  }
  const fromDynamicThreshold = getValueByPath(fromObject, [
    "dynamicThreshold"
  ]);
  if (fromDynamicThreshold != null) {
    setValueByPath(toObject, ["dynamicThreshold"], fromDynamicThreshold);
  }
  return toObject;
}
function googleSearchRetrievalToMldev(fromObject) {
  const toObject = {};
  const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
    "dynamicRetrievalConfig"
  ]);
  if (fromDynamicRetrievalConfig != null) {
    setValueByPath(toObject, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev(fromDynamicRetrievalConfig));
  }
  return toObject;
}
function urlContextToMldev() {
  const toObject = {};
  return toObject;
}
function toolToMldev(fromObject) {
  const toObject = {};
  const fromFunctionDeclarations = getValueByPath(fromObject, [
    "functionDeclarations"
  ]);
  if (fromFunctionDeclarations != null) {
    let transformedList = fromFunctionDeclarations;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return functionDeclarationToMldev(item);
      });
    }
    setValueByPath(toObject, ["functionDeclarations"], transformedList);
  }
  if (getValueByPath(fromObject, ["retrieval"]) !== void 0) {
    throw new Error("retrieval parameter is not supported in Gemini API.");
  }
  const fromGoogleSearch = getValueByPath(fromObject, ["googleSearch"]);
  if (fromGoogleSearch != null) {
    setValueByPath(toObject, ["googleSearch"], googleSearchToMldev(fromGoogleSearch));
  }
  const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
    "googleSearchRetrieval"
  ]);
  if (fromGoogleSearchRetrieval != null) {
    setValueByPath(toObject, ["googleSearchRetrieval"], googleSearchRetrievalToMldev(fromGoogleSearchRetrieval));
  }
  if (getValueByPath(fromObject, ["enterpriseWebSearch"]) !== void 0) {
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["googleMaps"]) !== void 0) {
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  }
  const fromUrlContext = getValueByPath(fromObject, ["urlContext"]);
  if (fromUrlContext != null) {
    setValueByPath(toObject, ["urlContext"], urlContextToMldev());
  }
  const fromCodeExecution = getValueByPath(fromObject, [
    "codeExecution"
  ]);
  if (fromCodeExecution != null) {
    setValueByPath(toObject, ["codeExecution"], fromCodeExecution);
  }
  const fromComputerUse = getValueByPath(fromObject, ["computerUse"]);
  if (fromComputerUse != null) {
    setValueByPath(toObject, ["computerUse"], fromComputerUse);
  }
  return toObject;
}
function sessionResumptionConfigToMldev(fromObject) {
  const toObject = {};
  const fromHandle = getValueByPath(fromObject, ["handle"]);
  if (fromHandle != null) {
    setValueByPath(toObject, ["handle"], fromHandle);
  }
  if (getValueByPath(fromObject, ["transparent"]) !== void 0) {
    throw new Error("transparent parameter is not supported in Gemini API.");
  }
  return toObject;
}
function audioTranscriptionConfigToMldev() {
  const toObject = {};
  return toObject;
}
function automaticActivityDetectionToMldev(fromObject) {
  const toObject = {};
  const fromDisabled = getValueByPath(fromObject, ["disabled"]);
  if (fromDisabled != null) {
    setValueByPath(toObject, ["disabled"], fromDisabled);
  }
  const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
    "startOfSpeechSensitivity"
  ]);
  if (fromStartOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["startOfSpeechSensitivity"], fromStartOfSpeechSensitivity);
  }
  const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
    "endOfSpeechSensitivity"
  ]);
  if (fromEndOfSpeechSensitivity != null) {
    setValueByPath(toObject, ["endOfSpeechSensitivity"], fromEndOfSpeechSensitivity);
  }
  const fromPrefixPaddingMs = getValueByPath(fromObject, [
    "prefixPaddingMs"
  ]);
  if (fromPrefixPaddingMs != null) {
    setValueByPath(toObject, ["prefixPaddingMs"], fromPrefixPaddingMs);
  }
  const fromSilenceDurationMs = getValueByPath(fromObject, [
    "silenceDurationMs"
  ]);
  if (fromSilenceDurationMs != null) {
    setValueByPath(toObject, ["silenceDurationMs"], fromSilenceDurationMs);
  }
  return toObject;
}
function realtimeInputConfigToMldev(fromObject) {
  const toObject = {};
  const fromAutomaticActivityDetection = getValueByPath(fromObject, [
    "automaticActivityDetection"
  ]);
  if (fromAutomaticActivityDetection != null) {
    setValueByPath(toObject, ["automaticActivityDetection"], automaticActivityDetectionToMldev(fromAutomaticActivityDetection));
  }
  const fromActivityHandling = getValueByPath(fromObject, [
    "activityHandling"
  ]);
  if (fromActivityHandling != null) {
    setValueByPath(toObject, ["activityHandling"], fromActivityHandling);
  }
  const fromTurnCoverage = getValueByPath(fromObject, ["turnCoverage"]);
  if (fromTurnCoverage != null) {
    setValueByPath(toObject, ["turnCoverage"], fromTurnCoverage);
  }
  return toObject;
}
function slidingWindowToMldev(fromObject) {
  const toObject = {};
  const fromTargetTokens = getValueByPath(fromObject, ["targetTokens"]);
  if (fromTargetTokens != null) {
    setValueByPath(toObject, ["targetTokens"], fromTargetTokens);
  }
  return toObject;
}
function contextWindowCompressionConfigToMldev(fromObject) {
  const toObject = {};
  const fromTriggerTokens = getValueByPath(fromObject, [
    "triggerTokens"
  ]);
  if (fromTriggerTokens != null) {
    setValueByPath(toObject, ["triggerTokens"], fromTriggerTokens);
  }
  const fromSlidingWindow = getValueByPath(fromObject, [
    "slidingWindow"
  ]);
  if (fromSlidingWindow != null) {
    setValueByPath(toObject, ["slidingWindow"], slidingWindowToMldev(fromSlidingWindow));
  }
  return toObject;
}
function proactivityConfigToMldev(fromObject) {
  const toObject = {};
  const fromProactiveAudio = getValueByPath(fromObject, [
    "proactiveAudio"
  ]);
  if (fromProactiveAudio != null) {
    setValueByPath(toObject, ["proactiveAudio"], fromProactiveAudio);
  }
  return toObject;
}
function liveConnectConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromGenerationConfig = getValueByPath(fromObject, [
    "generationConfig"
  ]);
  if (parentObject !== void 0 && fromGenerationConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig"], fromGenerationConfig);
  }
  const fromResponseModalities = getValueByPath(fromObject, [
    "responseModalities"
  ]);
  if (parentObject !== void 0 && fromResponseModalities != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "responseModalities"], fromResponseModalities);
  }
  const fromTemperature = getValueByPath(fromObject, ["temperature"]);
  if (parentObject !== void 0 && fromTemperature != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "temperature"], fromTemperature);
  }
  const fromTopP = getValueByPath(fromObject, ["topP"]);
  if (parentObject !== void 0 && fromTopP != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topP"], fromTopP);
  }
  const fromTopK = getValueByPath(fromObject, ["topK"]);
  if (parentObject !== void 0 && fromTopK != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "topK"], fromTopK);
  }
  const fromMaxOutputTokens = getValueByPath(fromObject, [
    "maxOutputTokens"
  ]);
  if (parentObject !== void 0 && fromMaxOutputTokens != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "maxOutputTokens"], fromMaxOutputTokens);
  }
  const fromMediaResolution = getValueByPath(fromObject, [
    "mediaResolution"
  ]);
  if (parentObject !== void 0 && fromMediaResolution != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "mediaResolution"], fromMediaResolution);
  }
  const fromSeed = getValueByPath(fromObject, ["seed"]);
  if (parentObject !== void 0 && fromSeed != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "seed"], fromSeed);
  }
  const fromSpeechConfig = getValueByPath(fromObject, ["speechConfig"]);
  if (parentObject !== void 0 && fromSpeechConfig != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "speechConfig"], speechConfigToMldev(tLiveSpeechConfig(fromSpeechConfig)));
  }
  const fromEnableAffectiveDialog = getValueByPath(fromObject, [
    "enableAffectiveDialog"
  ]);
  if (parentObject !== void 0 && fromEnableAffectiveDialog != null) {
    setValueByPath(parentObject, ["setup", "generationConfig", "enableAffectiveDialog"], fromEnableAffectiveDialog);
  }
  const fromSystemInstruction = getValueByPath(fromObject, [
    "systemInstruction"
  ]);
  if (parentObject !== void 0 && fromSystemInstruction != null) {
    setValueByPath(parentObject, ["setup", "systemInstruction"], contentToMldev(tContent(fromSystemInstruction)));
  }
  const fromTools = getValueByPath(fromObject, ["tools"]);
  if (parentObject !== void 0 && fromTools != null) {
    let transformedList = tTools(fromTools);
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return toolToMldev(tTool(item));
      });
    }
    setValueByPath(parentObject, ["setup", "tools"], transformedList);
  }
  const fromSessionResumption = getValueByPath(fromObject, [
    "sessionResumption"
  ]);
  if (parentObject !== void 0 && fromSessionResumption != null) {
    setValueByPath(parentObject, ["setup", "sessionResumption"], sessionResumptionConfigToMldev(fromSessionResumption));
  }
  const fromInputAudioTranscription = getValueByPath(fromObject, [
    "inputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromInputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToMldev());
  }
  const fromOutputAudioTranscription = getValueByPath(fromObject, [
    "outputAudioTranscription"
  ]);
  if (parentObject !== void 0 && fromOutputAudioTranscription != null) {
    setValueByPath(parentObject, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToMldev());
  }
  const fromRealtimeInputConfig = getValueByPath(fromObject, [
    "realtimeInputConfig"
  ]);
  if (parentObject !== void 0 && fromRealtimeInputConfig != null) {
    setValueByPath(parentObject, ["setup", "realtimeInputConfig"], realtimeInputConfigToMldev(fromRealtimeInputConfig));
  }
  const fromContextWindowCompression = getValueByPath(fromObject, [
    "contextWindowCompression"
  ]);
  if (parentObject !== void 0 && fromContextWindowCompression != null) {
    setValueByPath(parentObject, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToMldev(fromContextWindowCompression));
  }
  const fromProactivity = getValueByPath(fromObject, ["proactivity"]);
  if (parentObject !== void 0 && fromProactivity != null) {
    setValueByPath(parentObject, ["setup", "proactivity"], proactivityConfigToMldev(fromProactivity));
  }
  return toObject;
}
function liveConnectConstraintsToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["setup", "model"], tModel(apiClient, fromModel));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], liveConnectConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function createAuthTokenConfigToMldev(apiClient, fromObject, parentObject) {
  const toObject = {};
  const fromExpireTime = getValueByPath(fromObject, ["expireTime"]);
  if (parentObject !== void 0 && fromExpireTime != null) {
    setValueByPath(parentObject, ["expireTime"], fromExpireTime);
  }
  const fromNewSessionExpireTime = getValueByPath(fromObject, [
    "newSessionExpireTime"
  ]);
  if (parentObject !== void 0 && fromNewSessionExpireTime != null) {
    setValueByPath(parentObject, ["newSessionExpireTime"], fromNewSessionExpireTime);
  }
  const fromUses = getValueByPath(fromObject, ["uses"]);
  if (parentObject !== void 0 && fromUses != null) {
    setValueByPath(parentObject, ["uses"], fromUses);
  }
  const fromLiveConnectConstraints = getValueByPath(fromObject, [
    "liveConnectConstraints"
  ]);
  if (parentObject !== void 0 && fromLiveConnectConstraints != null) {
    setValueByPath(parentObject, ["bidiGenerateContentSetup"], liveConnectConstraintsToMldev(apiClient, fromLiveConnectConstraints));
  }
  const fromLockAdditionalFields = getValueByPath(fromObject, [
    "lockAdditionalFields"
  ]);
  if (parentObject !== void 0 && fromLockAdditionalFields != null) {
    setValueByPath(parentObject, ["fieldMask"], fromLockAdditionalFields);
  }
  return toObject;
}
function createAuthTokenParametersToMldev(apiClient, fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createAuthTokenConfigToMldev(apiClient, fromConfig, toObject));
  }
  return toObject;
}
function authTokenFromMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  return toObject;
}
function getFieldMasks(setup) {
  const fields = [];
  for (const key in setup) {
    if (Object.prototype.hasOwnProperty.call(setup, key)) {
      const value = setup[key];
      if (typeof value === "object" && value != null && Object.keys(value).length > 0) {
        const field = Object.keys(value).map((kk) => `${key}.${kk}`);
        fields.push(...field);
      } else {
        fields.push(key);
      }
    }
  }
  return fields.join(",");
}
function convertBidiSetupToTokenSetup(requestDict, config2) {
  let setupForMaskGeneration = null;
  const bidiGenerateContentSetupValue = requestDict["bidiGenerateContentSetup"];
  if (typeof bidiGenerateContentSetupValue === "object" && bidiGenerateContentSetupValue !== null && "setup" in bidiGenerateContentSetupValue) {
    const innerSetup = bidiGenerateContentSetupValue.setup;
    if (typeof innerSetup === "object" && innerSetup !== null) {
      requestDict["bidiGenerateContentSetup"] = innerSetup;
      setupForMaskGeneration = innerSetup;
    } else {
      delete requestDict["bidiGenerateContentSetup"];
    }
  } else if (bidiGenerateContentSetupValue !== void 0) {
    delete requestDict["bidiGenerateContentSetup"];
  }
  const preExistingFieldMask = requestDict["fieldMask"];
  if (setupForMaskGeneration) {
    const generatedMaskFromBidi = getFieldMasks(setupForMaskGeneration);
    if (Array.isArray(config2 === null || config2 === void 0 ? void 0 : config2.lockAdditionalFields) && (config2 === null || config2 === void 0 ? void 0 : config2.lockAdditionalFields.length) === 0) {
      if (generatedMaskFromBidi) {
        requestDict["fieldMask"] = generatedMaskFromBidi;
      } else {
        delete requestDict["fieldMask"];
      }
    } else if ((config2 === null || config2 === void 0 ? void 0 : config2.lockAdditionalFields) && config2.lockAdditionalFields.length > 0 && preExistingFieldMask !== null && Array.isArray(preExistingFieldMask) && preExistingFieldMask.length > 0) {
      const generationConfigFields = [
        "temperature",
        "topK",
        "topP",
        "maxOutputTokens",
        "responseModalities",
        "seed",
        "speechConfig"
      ];
      let mappedFieldsFromPreExisting = [];
      if (preExistingFieldMask.length > 0) {
        mappedFieldsFromPreExisting = preExistingFieldMask.map((field) => {
          if (generationConfigFields.includes(field)) {
            return `generationConfig.${field}`;
          }
          return field;
        });
      }
      const finalMaskParts = [];
      if (generatedMaskFromBidi) {
        finalMaskParts.push(generatedMaskFromBidi);
      }
      if (mappedFieldsFromPreExisting.length > 0) {
        finalMaskParts.push(...mappedFieldsFromPreExisting);
      }
      if (finalMaskParts.length > 0) {
        requestDict["fieldMask"] = finalMaskParts.join(",");
      } else {
        delete requestDict["fieldMask"];
      }
    } else {
      delete requestDict["fieldMask"];
    }
  } else {
    if (preExistingFieldMask !== null && Array.isArray(preExistingFieldMask) && preExistingFieldMask.length > 0) {
      requestDict["fieldMask"] = preExistingFieldMask.join(",");
    } else {
      delete requestDict["fieldMask"];
    }
  }
  return requestDict;
}
function getTuningJobParametersToMldev(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], fromName);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listTuningJobsConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  const fromFilter = getValueByPath(fromObject, ["filter"]);
  if (parentObject !== void 0 && fromFilter != null) {
    setValueByPath(parentObject, ["_query", "filter"], fromFilter);
  }
  return toObject;
}
function listTuningJobsParametersToMldev(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listTuningJobsConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function tuningExampleToMldev(fromObject) {
  const toObject = {};
  const fromTextInput = getValueByPath(fromObject, ["textInput"]);
  if (fromTextInput != null) {
    setValueByPath(toObject, ["textInput"], fromTextInput);
  }
  const fromOutput = getValueByPath(fromObject, ["output"]);
  if (fromOutput != null) {
    setValueByPath(toObject, ["output"], fromOutput);
  }
  return toObject;
}
function tuningDatasetToMldev(fromObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["gcsUri"]) !== void 0) {
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["vertexDatasetResource"]) !== void 0) {
    throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
  }
  const fromExamples = getValueByPath(fromObject, ["examples"]);
  if (fromExamples != null) {
    let transformedList = fromExamples;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return tuningExampleToMldev(item);
      });
    }
    setValueByPath(toObject, ["examples", "examples"], transformedList);
  }
  return toObject;
}
function createTuningJobConfigToMldev(fromObject, parentObject) {
  const toObject = {};
  if (getValueByPath(fromObject, ["validationDataset"]) !== void 0) {
    throw new Error("validationDataset parameter is not supported in Gemini API.");
  }
  const fromTunedModelDisplayName = getValueByPath(fromObject, [
    "tunedModelDisplayName"
  ]);
  if (parentObject !== void 0 && fromTunedModelDisplayName != null) {
    setValueByPath(parentObject, ["displayName"], fromTunedModelDisplayName);
  }
  if (getValueByPath(fromObject, ["description"]) !== void 0) {
    throw new Error("description parameter is not supported in Gemini API.");
  }
  const fromEpochCount = getValueByPath(fromObject, ["epochCount"]);
  if (parentObject !== void 0 && fromEpochCount != null) {
    setValueByPath(parentObject, ["tuningTask", "hyperparameters", "epochCount"], fromEpochCount);
  }
  const fromLearningRateMultiplier = getValueByPath(fromObject, [
    "learningRateMultiplier"
  ]);
  if (fromLearningRateMultiplier != null) {
    setValueByPath(toObject, ["tuningTask", "hyperparameters", "learningRateMultiplier"], fromLearningRateMultiplier);
  }
  if (getValueByPath(fromObject, ["exportLastCheckpointOnly"]) !== void 0) {
    throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
  }
  if (getValueByPath(fromObject, ["adapterSize"]) !== void 0) {
    throw new Error("adapterSize parameter is not supported in Gemini API.");
  }
  const fromBatchSize = getValueByPath(fromObject, ["batchSize"]);
  if (parentObject !== void 0 && fromBatchSize != null) {
    setValueByPath(parentObject, ["tuningTask", "hyperparameters", "batchSize"], fromBatchSize);
  }
  const fromLearningRate = getValueByPath(fromObject, ["learningRate"]);
  if (parentObject !== void 0 && fromLearningRate != null) {
    setValueByPath(parentObject, ["tuningTask", "hyperparameters", "learningRate"], fromLearningRate);
  }
  return toObject;
}
function createTuningJobParametersToMldev(fromObject) {
  const toObject = {};
  const fromBaseModel = getValueByPath(fromObject, ["baseModel"]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromTrainingDataset = getValueByPath(fromObject, [
    "trainingDataset"
  ]);
  if (fromTrainingDataset != null) {
    setValueByPath(toObject, ["tuningTask", "trainingData"], tuningDatasetToMldev(fromTrainingDataset));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createTuningJobConfigToMldev(fromConfig, toObject));
  }
  return toObject;
}
function getTuningJobParametersToVertex(fromObject) {
  const toObject = {};
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["_url", "name"], fromName);
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], fromConfig);
  }
  return toObject;
}
function listTuningJobsConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromPageSize = getValueByPath(fromObject, ["pageSize"]);
  if (parentObject !== void 0 && fromPageSize != null) {
    setValueByPath(parentObject, ["_query", "pageSize"], fromPageSize);
  }
  const fromPageToken = getValueByPath(fromObject, ["pageToken"]);
  if (parentObject !== void 0 && fromPageToken != null) {
    setValueByPath(parentObject, ["_query", "pageToken"], fromPageToken);
  }
  const fromFilter = getValueByPath(fromObject, ["filter"]);
  if (parentObject !== void 0 && fromFilter != null) {
    setValueByPath(parentObject, ["_query", "filter"], fromFilter);
  }
  return toObject;
}
function listTuningJobsParametersToVertex(fromObject) {
  const toObject = {};
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], listTuningJobsConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function tuningDatasetToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (parentObject !== void 0 && fromGcsUri != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "trainingDatasetUri"], fromGcsUri);
  }
  const fromVertexDatasetResource = getValueByPath(fromObject, [
    "vertexDatasetResource"
  ]);
  if (parentObject !== void 0 && fromVertexDatasetResource != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "trainingDatasetUri"], fromVertexDatasetResource);
  }
  if (getValueByPath(fromObject, ["examples"]) !== void 0) {
    throw new Error("examples parameter is not supported in Vertex AI.");
  }
  return toObject;
}
function tuningValidationDatasetToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromGcsUri = getValueByPath(fromObject, ["gcsUri"]);
  if (fromGcsUri != null) {
    setValueByPath(toObject, ["validationDatasetUri"], fromGcsUri);
  }
  const fromVertexDatasetResource = getValueByPath(fromObject, [
    "vertexDatasetResource"
  ]);
  if (parentObject !== void 0 && fromVertexDatasetResource != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "trainingDatasetUri"], fromVertexDatasetResource);
  }
  return toObject;
}
function createTuningJobConfigToVertex(fromObject, parentObject) {
  const toObject = {};
  const fromValidationDataset = getValueByPath(fromObject, [
    "validationDataset"
  ]);
  if (parentObject !== void 0 && fromValidationDataset != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec"], tuningValidationDatasetToVertex(fromValidationDataset, toObject));
  }
  const fromTunedModelDisplayName = getValueByPath(fromObject, [
    "tunedModelDisplayName"
  ]);
  if (parentObject !== void 0 && fromTunedModelDisplayName != null) {
    setValueByPath(parentObject, ["tunedModelDisplayName"], fromTunedModelDisplayName);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (parentObject !== void 0 && fromDescription != null) {
    setValueByPath(parentObject, ["description"], fromDescription);
  }
  const fromEpochCount = getValueByPath(fromObject, ["epochCount"]);
  if (parentObject !== void 0 && fromEpochCount != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "hyperParameters", "epochCount"], fromEpochCount);
  }
  const fromLearningRateMultiplier = getValueByPath(fromObject, [
    "learningRateMultiplier"
  ]);
  if (parentObject !== void 0 && fromLearningRateMultiplier != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], fromLearningRateMultiplier);
  }
  const fromExportLastCheckpointOnly = getValueByPath(fromObject, [
    "exportLastCheckpointOnly"
  ]);
  if (parentObject !== void 0 && fromExportLastCheckpointOnly != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "exportLastCheckpointOnly"], fromExportLastCheckpointOnly);
  }
  const fromAdapterSize = getValueByPath(fromObject, ["adapterSize"]);
  if (parentObject !== void 0 && fromAdapterSize != null) {
    setValueByPath(parentObject, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], fromAdapterSize);
  }
  if (getValueByPath(fromObject, ["batchSize"]) !== void 0) {
    throw new Error("batchSize parameter is not supported in Vertex AI.");
  }
  if (getValueByPath(fromObject, ["learningRate"]) !== void 0) {
    throw new Error("learningRate parameter is not supported in Vertex AI.");
  }
  return toObject;
}
function createTuningJobParametersToVertex(fromObject) {
  const toObject = {};
  const fromBaseModel = getValueByPath(fromObject, ["baseModel"]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromTrainingDataset = getValueByPath(fromObject, [
    "trainingDataset"
  ]);
  if (fromTrainingDataset != null) {
    setValueByPath(toObject, ["supervisedTuningSpec", "trainingDatasetUri"], tuningDatasetToVertex(fromTrainingDataset, toObject));
  }
  const fromConfig = getValueByPath(fromObject, ["config"]);
  if (fromConfig != null) {
    setValueByPath(toObject, ["config"], createTuningJobConfigToVertex(fromConfig, toObject));
  }
  return toObject;
}
function tunedModelFromMldev(fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["name"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromEndpoint = getValueByPath(fromObject, ["name"]);
  if (fromEndpoint != null) {
    setValueByPath(toObject, ["endpoint"], fromEndpoint);
  }
  return toObject;
}
function tuningJobFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromState = getValueByPath(fromObject, ["state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], tTuningJobStatus(fromState));
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromStartTime = getValueByPath(fromObject, [
    "tuningTask",
    "startTime"
  ]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, [
    "tuningTask",
    "completeTime"
  ]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromBaseModel = getValueByPath(fromObject, ["baseModel"]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromTunedModel = getValueByPath(fromObject, ["_self"]);
  if (fromTunedModel != null) {
    setValueByPath(toObject, ["tunedModel"], tunedModelFromMldev(fromTunedModel));
  }
  const fromDistillationSpec = getValueByPath(fromObject, [
    "distillationSpec"
  ]);
  if (fromDistillationSpec != null) {
    setValueByPath(toObject, ["distillationSpec"], fromDistillationSpec);
  }
  const fromExperiment = getValueByPath(fromObject, ["experiment"]);
  if (fromExperiment != null) {
    setValueByPath(toObject, ["experiment"], fromExperiment);
  }
  const fromLabels = getValueByPath(fromObject, ["labels"]);
  if (fromLabels != null) {
    setValueByPath(toObject, ["labels"], fromLabels);
  }
  const fromPipelineJob = getValueByPath(fromObject, ["pipelineJob"]);
  if (fromPipelineJob != null) {
    setValueByPath(toObject, ["pipelineJob"], fromPipelineJob);
  }
  const fromSatisfiesPzi = getValueByPath(fromObject, ["satisfiesPzi"]);
  if (fromSatisfiesPzi != null) {
    setValueByPath(toObject, ["satisfiesPzi"], fromSatisfiesPzi);
  }
  const fromSatisfiesPzs = getValueByPath(fromObject, ["satisfiesPzs"]);
  if (fromSatisfiesPzs != null) {
    setValueByPath(toObject, ["satisfiesPzs"], fromSatisfiesPzs);
  }
  const fromServiceAccount = getValueByPath(fromObject, [
    "serviceAccount"
  ]);
  if (fromServiceAccount != null) {
    setValueByPath(toObject, ["serviceAccount"], fromServiceAccount);
  }
  const fromTunedModelDisplayName = getValueByPath(fromObject, [
    "tunedModelDisplayName"
  ]);
  if (fromTunedModelDisplayName != null) {
    setValueByPath(toObject, ["tunedModelDisplayName"], fromTunedModelDisplayName);
  }
  return toObject;
}
function listTuningJobsResponseFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromTuningJobs = getValueByPath(fromObject, ["tunedModels"]);
  if (fromTuningJobs != null) {
    let transformedList = fromTuningJobs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return tuningJobFromMldev(item);
      });
    }
    setValueByPath(toObject, ["tuningJobs"], transformedList);
  }
  return toObject;
}
function tuningOperationFromMldev(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromMetadata = getValueByPath(fromObject, ["metadata"]);
  if (fromMetadata != null) {
    setValueByPath(toObject, ["metadata"], fromMetadata);
  }
  const fromDone = getValueByPath(fromObject, ["done"]);
  if (fromDone != null) {
    setValueByPath(toObject, ["done"], fromDone);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fromError);
  }
  return toObject;
}
function tunedModelCheckpointFromVertex(fromObject) {
  const toObject = {};
  const fromCheckpointId = getValueByPath(fromObject, ["checkpointId"]);
  if (fromCheckpointId != null) {
    setValueByPath(toObject, ["checkpointId"], fromCheckpointId);
  }
  const fromEpoch = getValueByPath(fromObject, ["epoch"]);
  if (fromEpoch != null) {
    setValueByPath(toObject, ["epoch"], fromEpoch);
  }
  const fromStep = getValueByPath(fromObject, ["step"]);
  if (fromStep != null) {
    setValueByPath(toObject, ["step"], fromStep);
  }
  const fromEndpoint = getValueByPath(fromObject, ["endpoint"]);
  if (fromEndpoint != null) {
    setValueByPath(toObject, ["endpoint"], fromEndpoint);
  }
  return toObject;
}
function tunedModelFromVertex(fromObject) {
  const toObject = {};
  const fromModel = getValueByPath(fromObject, ["model"]);
  if (fromModel != null) {
    setValueByPath(toObject, ["model"], fromModel);
  }
  const fromEndpoint = getValueByPath(fromObject, ["endpoint"]);
  if (fromEndpoint != null) {
    setValueByPath(toObject, ["endpoint"], fromEndpoint);
  }
  const fromCheckpoints = getValueByPath(fromObject, ["checkpoints"]);
  if (fromCheckpoints != null) {
    let transformedList = fromCheckpoints;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return tunedModelCheckpointFromVertex(item);
      });
    }
    setValueByPath(toObject, ["checkpoints"], transformedList);
  }
  return toObject;
}
function tuningJobFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromName = getValueByPath(fromObject, ["name"]);
  if (fromName != null) {
    setValueByPath(toObject, ["name"], fromName);
  }
  const fromState = getValueByPath(fromObject, ["state"]);
  if (fromState != null) {
    setValueByPath(toObject, ["state"], tTuningJobStatus(fromState));
  }
  const fromCreateTime = getValueByPath(fromObject, ["createTime"]);
  if (fromCreateTime != null) {
    setValueByPath(toObject, ["createTime"], fromCreateTime);
  }
  const fromStartTime = getValueByPath(fromObject, ["startTime"]);
  if (fromStartTime != null) {
    setValueByPath(toObject, ["startTime"], fromStartTime);
  }
  const fromEndTime = getValueByPath(fromObject, ["endTime"]);
  if (fromEndTime != null) {
    setValueByPath(toObject, ["endTime"], fromEndTime);
  }
  const fromUpdateTime = getValueByPath(fromObject, ["updateTime"]);
  if (fromUpdateTime != null) {
    setValueByPath(toObject, ["updateTime"], fromUpdateTime);
  }
  const fromError = getValueByPath(fromObject, ["error"]);
  if (fromError != null) {
    setValueByPath(toObject, ["error"], fromError);
  }
  const fromDescription = getValueByPath(fromObject, ["description"]);
  if (fromDescription != null) {
    setValueByPath(toObject, ["description"], fromDescription);
  }
  const fromBaseModel = getValueByPath(fromObject, ["baseModel"]);
  if (fromBaseModel != null) {
    setValueByPath(toObject, ["baseModel"], fromBaseModel);
  }
  const fromTunedModel = getValueByPath(fromObject, ["tunedModel"]);
  if (fromTunedModel != null) {
    setValueByPath(toObject, ["tunedModel"], tunedModelFromVertex(fromTunedModel));
  }
  const fromSupervisedTuningSpec = getValueByPath(fromObject, [
    "supervisedTuningSpec"
  ]);
  if (fromSupervisedTuningSpec != null) {
    setValueByPath(toObject, ["supervisedTuningSpec"], fromSupervisedTuningSpec);
  }
  const fromTuningDataStats = getValueByPath(fromObject, [
    "tuningDataStats"
  ]);
  if (fromTuningDataStats != null) {
    setValueByPath(toObject, ["tuningDataStats"], fromTuningDataStats);
  }
  const fromEncryptionSpec = getValueByPath(fromObject, [
    "encryptionSpec"
  ]);
  if (fromEncryptionSpec != null) {
    setValueByPath(toObject, ["encryptionSpec"], fromEncryptionSpec);
  }
  const fromPartnerModelTuningSpec = getValueByPath(fromObject, [
    "partnerModelTuningSpec"
  ]);
  if (fromPartnerModelTuningSpec != null) {
    setValueByPath(toObject, ["partnerModelTuningSpec"], fromPartnerModelTuningSpec);
  }
  const fromDistillationSpec = getValueByPath(fromObject, [
    "distillationSpec"
  ]);
  if (fromDistillationSpec != null) {
    setValueByPath(toObject, ["distillationSpec"], fromDistillationSpec);
  }
  const fromExperiment = getValueByPath(fromObject, ["experiment"]);
  if (fromExperiment != null) {
    setValueByPath(toObject, ["experiment"], fromExperiment);
  }
  const fromLabels = getValueByPath(fromObject, ["labels"]);
  if (fromLabels != null) {
    setValueByPath(toObject, ["labels"], fromLabels);
  }
  const fromPipelineJob = getValueByPath(fromObject, ["pipelineJob"]);
  if (fromPipelineJob != null) {
    setValueByPath(toObject, ["pipelineJob"], fromPipelineJob);
  }
  const fromSatisfiesPzi = getValueByPath(fromObject, ["satisfiesPzi"]);
  if (fromSatisfiesPzi != null) {
    setValueByPath(toObject, ["satisfiesPzi"], fromSatisfiesPzi);
  }
  const fromSatisfiesPzs = getValueByPath(fromObject, ["satisfiesPzs"]);
  if (fromSatisfiesPzs != null) {
    setValueByPath(toObject, ["satisfiesPzs"], fromSatisfiesPzs);
  }
  const fromServiceAccount = getValueByPath(fromObject, [
    "serviceAccount"
  ]);
  if (fromServiceAccount != null) {
    setValueByPath(toObject, ["serviceAccount"], fromServiceAccount);
  }
  const fromTunedModelDisplayName = getValueByPath(fromObject, [
    "tunedModelDisplayName"
  ]);
  if (fromTunedModelDisplayName != null) {
    setValueByPath(toObject, ["tunedModelDisplayName"], fromTunedModelDisplayName);
  }
  return toObject;
}
function listTuningJobsResponseFromVertex(fromObject) {
  const toObject = {};
  const fromSdkHttpResponse = getValueByPath(fromObject, [
    "sdkHttpResponse"
  ]);
  if (fromSdkHttpResponse != null) {
    setValueByPath(toObject, ["sdkHttpResponse"], fromSdkHttpResponse);
  }
  const fromNextPageToken = getValueByPath(fromObject, [
    "nextPageToken"
  ]);
  if (fromNextPageToken != null) {
    setValueByPath(toObject, ["nextPageToken"], fromNextPageToken);
  }
  const fromTuningJobs = getValueByPath(fromObject, ["tuningJobs"]);
  if (fromTuningJobs != null) {
    let transformedList = fromTuningJobs;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return tuningJobFromVertex(item);
      });
    }
    setValueByPath(toObject, ["tuningJobs"], transformedList);
  }
  return toObject;
}
async function uploadBlob(file, uploadUrl, apiClient) {
  var _a, _b, _c;
  let fileSize = 0;
  let offset = 0;
  let response = new HttpResponse(new Response());
  let uploadCommand = "upload";
  fileSize = file.size;
  while (offset < fileSize) {
    const chunkSize = Math.min(MAX_CHUNK_SIZE, fileSize - offset);
    const chunk = file.slice(offset, offset + chunkSize);
    if (offset + chunkSize >= fileSize) {
      uploadCommand += ", finalize";
    }
    let retryCount = 0;
    let currentDelayMs = INITIAL_RETRY_DELAY_MS;
    while (retryCount < MAX_RETRY_COUNT) {
      response = await apiClient.request({
        path: "",
        body: chunk,
        httpMethod: "POST",
        httpOptions: {
          apiVersion: "",
          baseUrl: uploadUrl,
          headers: {
            "X-Goog-Upload-Command": uploadCommand,
            "X-Goog-Upload-Offset": String(offset),
            "Content-Length": String(chunkSize)
          }
        }
      });
      if ((_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) {
        break;
      }
      retryCount++;
      await sleep(currentDelayMs);
      currentDelayMs = currentDelayMs * DELAY_MULTIPLIER;
    }
    offset += chunkSize;
    if (((_b = response === null || response === void 0 ? void 0 : response.headers) === null || _b === void 0 ? void 0 : _b[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== "active") {
      break;
    }
    if (fileSize <= offset) {
      throw new Error("All content has been uploaded, but the upload status is not finalized.");
    }
  }
  const responseJson = await (response === null || response === void 0 ? void 0 : response.json());
  if (((_c = response === null || response === void 0 ? void 0 : response.headers) === null || _c === void 0 ? void 0 : _c[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== "final") {
    throw new Error("Failed to upload file: Upload status is not finalized.");
  }
  return responseJson["file"];
}
async function getBlobStat(file) {
  const fileStat = { size: file.size, type: file.type };
  return fileStat;
}
function sleep(ms) {
  return new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}
var _defaultBaseGeminiUrl, _defaultBaseVertexUrl, BaseModule, Outcome, Language, Type, HarmCategory, HarmBlockMethod, HarmBlockThreshold, Mode, AuthType, ApiSpec, Environment, UrlRetrievalStatus, FinishReason, HarmProbability, HarmSeverity, BlockedReason, TrafficType, Modality, MediaResolution, JobState, AdapterSize, FeatureSelectionPreference, Behavior, DynamicRetrievalConfigMode, FunctionCallingConfigMode, SafetyFilterLevel, PersonGeneration, ImagePromptLanguage, MaskReferenceMode, ControlReferenceType, SubjectReferenceType, EditMode, VideoCompressionQuality, FileState, FileSource, MediaModality, StartSensitivity, EndSensitivity, ActivityHandling, TurnCoverage, FunctionResponseScheduling, Scale, MusicGenerationMode, LiveMusicPlaybackControl, FunctionResponse, HttpResponse, GenerateContentResponsePromptFeedback, GenerateContentResponseUsageMetadata, GenerateContentResponse, EmbedContentResponse, GenerateImagesResponse, EditImageResponse, UpscaleImageResponse, RecontextImageResponse, ListModelsResponse, DeleteModelResponse, CountTokensResponse, ComputeTokensResponse, GenerateVideosResponse, ListTuningJobsResponse, DeleteCachedContentResponse, ListCachedContentsResponse, ListFilesResponse, CreateFileResponse, DeleteFileResponse, InlinedResponse, ListBatchJobsResponse, ReplayResponse, RawReferenceImage, MaskReferenceImage, ControlReferenceImage, StyleReferenceImage, SubjectReferenceImage, LiveServerMessage, GenerateVideosOperation, LiveClientToolResponse, LiveSendToolResponseParameters, LiveMusicServerMessage, PagedItem, Pager, Batches, Caches, Chats, Chat, ApiError, Files, CONTENT_TYPE_HEADER, SERVER_TIMEOUT_HEADER, USER_AGENT_HEADER, GOOGLE_API_CLIENT_HEADER, SDK_VERSION, LIBRARY_LABEL, VERTEX_AI_API_DEFAULT_VERSION, GOOGLE_AI_API_DEFAULT_VERSION, responseLineRE, ApiClient, MCP_LABEL, hasMcpToolUsageFromMcpToTool, McpCallableTool, LiveMusic, LiveMusicSession, FUNCTION_RESPONSE_REQUIRES_ID, Live, defaultLiveSendClientContentParamerters, Session, DEFAULT_MAX_REMOTE_CALLS, Models, Operations, Tokens, Tunings, BrowserDownloader, MAX_CHUNK_SIZE, MAX_RETRY_COUNT, INITIAL_RETRY_DELAY_MS, DELAY_MULTIPLIER, X_GOOG_UPLOAD_STATUS_HEADER_FIELD, BrowserUploader, BrowserWebSocketFactory, BrowserWebSocket, GOOGLE_API_KEY_HEADER, WebAuth, LANGUAGE_LABEL_PREFIX, GoogleGenAI;
var init_web = __esm({
  "../../../../../node_modules/@google/genai/dist/web/index.mjs"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    _defaultBaseGeminiUrl = void 0;
    _defaultBaseVertexUrl = void 0;
    __name(setDefaultBaseUrls, "setDefaultBaseUrls");
    __name(getDefaultBaseUrls, "getDefaultBaseUrls");
    __name(getBaseUrl, "getBaseUrl");
    BaseModule = class {
      static {
        __name(this, "BaseModule");
      }
    };
    __name(formatMap, "formatMap");
    __name(setValueByPath, "setValueByPath");
    __name(getValueByPath, "getValueByPath");
    __name(tBytes$1, "tBytes$1");
    (function(Outcome2) {
      Outcome2["OUTCOME_UNSPECIFIED"] = "OUTCOME_UNSPECIFIED";
      Outcome2["OUTCOME_OK"] = "OUTCOME_OK";
      Outcome2["OUTCOME_FAILED"] = "OUTCOME_FAILED";
      Outcome2["OUTCOME_DEADLINE_EXCEEDED"] = "OUTCOME_DEADLINE_EXCEEDED";
    })(Outcome || (Outcome = {}));
    (function(Language2) {
      Language2["LANGUAGE_UNSPECIFIED"] = "LANGUAGE_UNSPECIFIED";
      Language2["PYTHON"] = "PYTHON";
    })(Language || (Language = {}));
    (function(Type2) {
      Type2["TYPE_UNSPECIFIED"] = "TYPE_UNSPECIFIED";
      Type2["STRING"] = "STRING";
      Type2["NUMBER"] = "NUMBER";
      Type2["INTEGER"] = "INTEGER";
      Type2["BOOLEAN"] = "BOOLEAN";
      Type2["ARRAY"] = "ARRAY";
      Type2["OBJECT"] = "OBJECT";
      Type2["NULL"] = "NULL";
    })(Type || (Type = {}));
    (function(HarmCategory2) {
      HarmCategory2["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
      HarmCategory2["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
      HarmCategory2["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
      HarmCategory2["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
      HarmCategory2["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
      HarmCategory2["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
      HarmCategory2["HARM_CATEGORY_IMAGE_HATE"] = "HARM_CATEGORY_IMAGE_HATE";
      HarmCategory2["HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"] = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT";
      HarmCategory2["HARM_CATEGORY_IMAGE_HARASSMENT"] = "HARM_CATEGORY_IMAGE_HARASSMENT";
      HarmCategory2["HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT";
    })(HarmCategory || (HarmCategory = {}));
    (function(HarmBlockMethod2) {
      HarmBlockMethod2["HARM_BLOCK_METHOD_UNSPECIFIED"] = "HARM_BLOCK_METHOD_UNSPECIFIED";
      HarmBlockMethod2["SEVERITY"] = "SEVERITY";
      HarmBlockMethod2["PROBABILITY"] = "PROBABILITY";
    })(HarmBlockMethod || (HarmBlockMethod = {}));
    (function(HarmBlockThreshold2) {
      HarmBlockThreshold2["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
      HarmBlockThreshold2["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
      HarmBlockThreshold2["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
      HarmBlockThreshold2["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
      HarmBlockThreshold2["BLOCK_NONE"] = "BLOCK_NONE";
      HarmBlockThreshold2["OFF"] = "OFF";
    })(HarmBlockThreshold || (HarmBlockThreshold = {}));
    (function(Mode2) {
      Mode2["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
      Mode2["MODE_DYNAMIC"] = "MODE_DYNAMIC";
    })(Mode || (Mode = {}));
    (function(AuthType2) {
      AuthType2["AUTH_TYPE_UNSPECIFIED"] = "AUTH_TYPE_UNSPECIFIED";
      AuthType2["NO_AUTH"] = "NO_AUTH";
      AuthType2["API_KEY_AUTH"] = "API_KEY_AUTH";
      AuthType2["HTTP_BASIC_AUTH"] = "HTTP_BASIC_AUTH";
      AuthType2["GOOGLE_SERVICE_ACCOUNT_AUTH"] = "GOOGLE_SERVICE_ACCOUNT_AUTH";
      AuthType2["OAUTH"] = "OAUTH";
      AuthType2["OIDC_AUTH"] = "OIDC_AUTH";
    })(AuthType || (AuthType = {}));
    (function(ApiSpec2) {
      ApiSpec2["API_SPEC_UNSPECIFIED"] = "API_SPEC_UNSPECIFIED";
      ApiSpec2["SIMPLE_SEARCH"] = "SIMPLE_SEARCH";
      ApiSpec2["ELASTIC_SEARCH"] = "ELASTIC_SEARCH";
    })(ApiSpec || (ApiSpec = {}));
    (function(Environment2) {
      Environment2["ENVIRONMENT_UNSPECIFIED"] = "ENVIRONMENT_UNSPECIFIED";
      Environment2["ENVIRONMENT_BROWSER"] = "ENVIRONMENT_BROWSER";
    })(Environment || (Environment = {}));
    (function(UrlRetrievalStatus2) {
      UrlRetrievalStatus2["URL_RETRIEVAL_STATUS_UNSPECIFIED"] = "URL_RETRIEVAL_STATUS_UNSPECIFIED";
      UrlRetrievalStatus2["URL_RETRIEVAL_STATUS_SUCCESS"] = "URL_RETRIEVAL_STATUS_SUCCESS";
      UrlRetrievalStatus2["URL_RETRIEVAL_STATUS_ERROR"] = "URL_RETRIEVAL_STATUS_ERROR";
      UrlRetrievalStatus2["URL_RETRIEVAL_STATUS_PAYWALL"] = "URL_RETRIEVAL_STATUS_PAYWALL";
      UrlRetrievalStatus2["URL_RETRIEVAL_STATUS_UNSAFE"] = "URL_RETRIEVAL_STATUS_UNSAFE";
    })(UrlRetrievalStatus || (UrlRetrievalStatus = {}));
    (function(FinishReason2) {
      FinishReason2["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
      FinishReason2["STOP"] = "STOP";
      FinishReason2["MAX_TOKENS"] = "MAX_TOKENS";
      FinishReason2["SAFETY"] = "SAFETY";
      FinishReason2["RECITATION"] = "RECITATION";
      FinishReason2["LANGUAGE"] = "LANGUAGE";
      FinishReason2["OTHER"] = "OTHER";
      FinishReason2["BLOCKLIST"] = "BLOCKLIST";
      FinishReason2["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
      FinishReason2["SPII"] = "SPII";
      FinishReason2["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
      FinishReason2["IMAGE_SAFETY"] = "IMAGE_SAFETY";
      FinishReason2["UNEXPECTED_TOOL_CALL"] = "UNEXPECTED_TOOL_CALL";
    })(FinishReason || (FinishReason = {}));
    (function(HarmProbability2) {
      HarmProbability2["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
      HarmProbability2["NEGLIGIBLE"] = "NEGLIGIBLE";
      HarmProbability2["LOW"] = "LOW";
      HarmProbability2["MEDIUM"] = "MEDIUM";
      HarmProbability2["HIGH"] = "HIGH";
    })(HarmProbability || (HarmProbability = {}));
    (function(HarmSeverity2) {
      HarmSeverity2["HARM_SEVERITY_UNSPECIFIED"] = "HARM_SEVERITY_UNSPECIFIED";
      HarmSeverity2["HARM_SEVERITY_NEGLIGIBLE"] = "HARM_SEVERITY_NEGLIGIBLE";
      HarmSeverity2["HARM_SEVERITY_LOW"] = "HARM_SEVERITY_LOW";
      HarmSeverity2["HARM_SEVERITY_MEDIUM"] = "HARM_SEVERITY_MEDIUM";
      HarmSeverity2["HARM_SEVERITY_HIGH"] = "HARM_SEVERITY_HIGH";
    })(HarmSeverity || (HarmSeverity = {}));
    (function(BlockedReason2) {
      BlockedReason2["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
      BlockedReason2["SAFETY"] = "SAFETY";
      BlockedReason2["OTHER"] = "OTHER";
      BlockedReason2["BLOCKLIST"] = "BLOCKLIST";
      BlockedReason2["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
      BlockedReason2["IMAGE_SAFETY"] = "IMAGE_SAFETY";
    })(BlockedReason || (BlockedReason = {}));
    (function(TrafficType2) {
      TrafficType2["TRAFFIC_TYPE_UNSPECIFIED"] = "TRAFFIC_TYPE_UNSPECIFIED";
      TrafficType2["ON_DEMAND"] = "ON_DEMAND";
      TrafficType2["PROVISIONED_THROUGHPUT"] = "PROVISIONED_THROUGHPUT";
    })(TrafficType || (TrafficType = {}));
    (function(Modality2) {
      Modality2["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
      Modality2["TEXT"] = "TEXT";
      Modality2["IMAGE"] = "IMAGE";
      Modality2["AUDIO"] = "AUDIO";
    })(Modality || (Modality = {}));
    (function(MediaResolution2) {
      MediaResolution2["MEDIA_RESOLUTION_UNSPECIFIED"] = "MEDIA_RESOLUTION_UNSPECIFIED";
      MediaResolution2["MEDIA_RESOLUTION_LOW"] = "MEDIA_RESOLUTION_LOW";
      MediaResolution2["MEDIA_RESOLUTION_MEDIUM"] = "MEDIA_RESOLUTION_MEDIUM";
      MediaResolution2["MEDIA_RESOLUTION_HIGH"] = "MEDIA_RESOLUTION_HIGH";
    })(MediaResolution || (MediaResolution = {}));
    (function(JobState2) {
      JobState2["JOB_STATE_UNSPECIFIED"] = "JOB_STATE_UNSPECIFIED";
      JobState2["JOB_STATE_QUEUED"] = "JOB_STATE_QUEUED";
      JobState2["JOB_STATE_PENDING"] = "JOB_STATE_PENDING";
      JobState2["JOB_STATE_RUNNING"] = "JOB_STATE_RUNNING";
      JobState2["JOB_STATE_SUCCEEDED"] = "JOB_STATE_SUCCEEDED";
      JobState2["JOB_STATE_FAILED"] = "JOB_STATE_FAILED";
      JobState2["JOB_STATE_CANCELLING"] = "JOB_STATE_CANCELLING";
      JobState2["JOB_STATE_CANCELLED"] = "JOB_STATE_CANCELLED";
      JobState2["JOB_STATE_PAUSED"] = "JOB_STATE_PAUSED";
      JobState2["JOB_STATE_EXPIRED"] = "JOB_STATE_EXPIRED";
      JobState2["JOB_STATE_UPDATING"] = "JOB_STATE_UPDATING";
      JobState2["JOB_STATE_PARTIALLY_SUCCEEDED"] = "JOB_STATE_PARTIALLY_SUCCEEDED";
    })(JobState || (JobState = {}));
    (function(AdapterSize2) {
      AdapterSize2["ADAPTER_SIZE_UNSPECIFIED"] = "ADAPTER_SIZE_UNSPECIFIED";
      AdapterSize2["ADAPTER_SIZE_ONE"] = "ADAPTER_SIZE_ONE";
      AdapterSize2["ADAPTER_SIZE_TWO"] = "ADAPTER_SIZE_TWO";
      AdapterSize2["ADAPTER_SIZE_FOUR"] = "ADAPTER_SIZE_FOUR";
      AdapterSize2["ADAPTER_SIZE_EIGHT"] = "ADAPTER_SIZE_EIGHT";
      AdapterSize2["ADAPTER_SIZE_SIXTEEN"] = "ADAPTER_SIZE_SIXTEEN";
      AdapterSize2["ADAPTER_SIZE_THIRTY_TWO"] = "ADAPTER_SIZE_THIRTY_TWO";
    })(AdapterSize || (AdapterSize = {}));
    (function(FeatureSelectionPreference2) {
      FeatureSelectionPreference2["FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"] = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED";
      FeatureSelectionPreference2["PRIORITIZE_QUALITY"] = "PRIORITIZE_QUALITY";
      FeatureSelectionPreference2["BALANCED"] = "BALANCED";
      FeatureSelectionPreference2["PRIORITIZE_COST"] = "PRIORITIZE_COST";
    })(FeatureSelectionPreference || (FeatureSelectionPreference = {}));
    (function(Behavior2) {
      Behavior2["UNSPECIFIED"] = "UNSPECIFIED";
      Behavior2["BLOCKING"] = "BLOCKING";
      Behavior2["NON_BLOCKING"] = "NON_BLOCKING";
    })(Behavior || (Behavior = {}));
    (function(DynamicRetrievalConfigMode2) {
      DynamicRetrievalConfigMode2["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
      DynamicRetrievalConfigMode2["MODE_DYNAMIC"] = "MODE_DYNAMIC";
    })(DynamicRetrievalConfigMode || (DynamicRetrievalConfigMode = {}));
    (function(FunctionCallingConfigMode2) {
      FunctionCallingConfigMode2["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
      FunctionCallingConfigMode2["AUTO"] = "AUTO";
      FunctionCallingConfigMode2["ANY"] = "ANY";
      FunctionCallingConfigMode2["NONE"] = "NONE";
    })(FunctionCallingConfigMode || (FunctionCallingConfigMode = {}));
    (function(SafetyFilterLevel2) {
      SafetyFilterLevel2["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
      SafetyFilterLevel2["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
      SafetyFilterLevel2["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
      SafetyFilterLevel2["BLOCK_NONE"] = "BLOCK_NONE";
    })(SafetyFilterLevel || (SafetyFilterLevel = {}));
    (function(PersonGeneration2) {
      PersonGeneration2["DONT_ALLOW"] = "DONT_ALLOW";
      PersonGeneration2["ALLOW_ADULT"] = "ALLOW_ADULT";
      PersonGeneration2["ALLOW_ALL"] = "ALLOW_ALL";
    })(PersonGeneration || (PersonGeneration = {}));
    (function(ImagePromptLanguage2) {
      ImagePromptLanguage2["auto"] = "auto";
      ImagePromptLanguage2["en"] = "en";
      ImagePromptLanguage2["ja"] = "ja";
      ImagePromptLanguage2["ko"] = "ko";
      ImagePromptLanguage2["hi"] = "hi";
      ImagePromptLanguage2["zh"] = "zh";
      ImagePromptLanguage2["pt"] = "pt";
      ImagePromptLanguage2["es"] = "es";
    })(ImagePromptLanguage || (ImagePromptLanguage = {}));
    (function(MaskReferenceMode2) {
      MaskReferenceMode2["MASK_MODE_DEFAULT"] = "MASK_MODE_DEFAULT";
      MaskReferenceMode2["MASK_MODE_USER_PROVIDED"] = "MASK_MODE_USER_PROVIDED";
      MaskReferenceMode2["MASK_MODE_BACKGROUND"] = "MASK_MODE_BACKGROUND";
      MaskReferenceMode2["MASK_MODE_FOREGROUND"] = "MASK_MODE_FOREGROUND";
      MaskReferenceMode2["MASK_MODE_SEMANTIC"] = "MASK_MODE_SEMANTIC";
    })(MaskReferenceMode || (MaskReferenceMode = {}));
    (function(ControlReferenceType2) {
      ControlReferenceType2["CONTROL_TYPE_DEFAULT"] = "CONTROL_TYPE_DEFAULT";
      ControlReferenceType2["CONTROL_TYPE_CANNY"] = "CONTROL_TYPE_CANNY";
      ControlReferenceType2["CONTROL_TYPE_SCRIBBLE"] = "CONTROL_TYPE_SCRIBBLE";
      ControlReferenceType2["CONTROL_TYPE_FACE_MESH"] = "CONTROL_TYPE_FACE_MESH";
    })(ControlReferenceType || (ControlReferenceType = {}));
    (function(SubjectReferenceType2) {
      SubjectReferenceType2["SUBJECT_TYPE_DEFAULT"] = "SUBJECT_TYPE_DEFAULT";
      SubjectReferenceType2["SUBJECT_TYPE_PERSON"] = "SUBJECT_TYPE_PERSON";
      SubjectReferenceType2["SUBJECT_TYPE_ANIMAL"] = "SUBJECT_TYPE_ANIMAL";
      SubjectReferenceType2["SUBJECT_TYPE_PRODUCT"] = "SUBJECT_TYPE_PRODUCT";
    })(SubjectReferenceType || (SubjectReferenceType = {}));
    (function(EditMode2) {
      EditMode2["EDIT_MODE_DEFAULT"] = "EDIT_MODE_DEFAULT";
      EditMode2["EDIT_MODE_INPAINT_REMOVAL"] = "EDIT_MODE_INPAINT_REMOVAL";
      EditMode2["EDIT_MODE_INPAINT_INSERTION"] = "EDIT_MODE_INPAINT_INSERTION";
      EditMode2["EDIT_MODE_OUTPAINT"] = "EDIT_MODE_OUTPAINT";
      EditMode2["EDIT_MODE_CONTROLLED_EDITING"] = "EDIT_MODE_CONTROLLED_EDITING";
      EditMode2["EDIT_MODE_STYLE"] = "EDIT_MODE_STYLE";
      EditMode2["EDIT_MODE_BGSWAP"] = "EDIT_MODE_BGSWAP";
      EditMode2["EDIT_MODE_PRODUCT_IMAGE"] = "EDIT_MODE_PRODUCT_IMAGE";
    })(EditMode || (EditMode = {}));
    (function(VideoCompressionQuality2) {
      VideoCompressionQuality2["OPTIMIZED"] = "OPTIMIZED";
      VideoCompressionQuality2["LOSSLESS"] = "LOSSLESS";
    })(VideoCompressionQuality || (VideoCompressionQuality = {}));
    (function(FileState2) {
      FileState2["STATE_UNSPECIFIED"] = "STATE_UNSPECIFIED";
      FileState2["PROCESSING"] = "PROCESSING";
      FileState2["ACTIVE"] = "ACTIVE";
      FileState2["FAILED"] = "FAILED";
    })(FileState || (FileState = {}));
    (function(FileSource2) {
      FileSource2["SOURCE_UNSPECIFIED"] = "SOURCE_UNSPECIFIED";
      FileSource2["UPLOADED"] = "UPLOADED";
      FileSource2["GENERATED"] = "GENERATED";
    })(FileSource || (FileSource = {}));
    (function(MediaModality2) {
      MediaModality2["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
      MediaModality2["TEXT"] = "TEXT";
      MediaModality2["IMAGE"] = "IMAGE";
      MediaModality2["VIDEO"] = "VIDEO";
      MediaModality2["AUDIO"] = "AUDIO";
      MediaModality2["DOCUMENT"] = "DOCUMENT";
    })(MediaModality || (MediaModality = {}));
    (function(StartSensitivity2) {
      StartSensitivity2["START_SENSITIVITY_UNSPECIFIED"] = "START_SENSITIVITY_UNSPECIFIED";
      StartSensitivity2["START_SENSITIVITY_HIGH"] = "START_SENSITIVITY_HIGH";
      StartSensitivity2["START_SENSITIVITY_LOW"] = "START_SENSITIVITY_LOW";
    })(StartSensitivity || (StartSensitivity = {}));
    (function(EndSensitivity2) {
      EndSensitivity2["END_SENSITIVITY_UNSPECIFIED"] = "END_SENSITIVITY_UNSPECIFIED";
      EndSensitivity2["END_SENSITIVITY_HIGH"] = "END_SENSITIVITY_HIGH";
      EndSensitivity2["END_SENSITIVITY_LOW"] = "END_SENSITIVITY_LOW";
    })(EndSensitivity || (EndSensitivity = {}));
    (function(ActivityHandling2) {
      ActivityHandling2["ACTIVITY_HANDLING_UNSPECIFIED"] = "ACTIVITY_HANDLING_UNSPECIFIED";
      ActivityHandling2["START_OF_ACTIVITY_INTERRUPTS"] = "START_OF_ACTIVITY_INTERRUPTS";
      ActivityHandling2["NO_INTERRUPTION"] = "NO_INTERRUPTION";
    })(ActivityHandling || (ActivityHandling = {}));
    (function(TurnCoverage2) {
      TurnCoverage2["TURN_COVERAGE_UNSPECIFIED"] = "TURN_COVERAGE_UNSPECIFIED";
      TurnCoverage2["TURN_INCLUDES_ONLY_ACTIVITY"] = "TURN_INCLUDES_ONLY_ACTIVITY";
      TurnCoverage2["TURN_INCLUDES_ALL_INPUT"] = "TURN_INCLUDES_ALL_INPUT";
    })(TurnCoverage || (TurnCoverage = {}));
    (function(FunctionResponseScheduling2) {
      FunctionResponseScheduling2["SCHEDULING_UNSPECIFIED"] = "SCHEDULING_UNSPECIFIED";
      FunctionResponseScheduling2["SILENT"] = "SILENT";
      FunctionResponseScheduling2["WHEN_IDLE"] = "WHEN_IDLE";
      FunctionResponseScheduling2["INTERRUPT"] = "INTERRUPT";
    })(FunctionResponseScheduling || (FunctionResponseScheduling = {}));
    (function(Scale2) {
      Scale2["SCALE_UNSPECIFIED"] = "SCALE_UNSPECIFIED";
      Scale2["C_MAJOR_A_MINOR"] = "C_MAJOR_A_MINOR";
      Scale2["D_FLAT_MAJOR_B_FLAT_MINOR"] = "D_FLAT_MAJOR_B_FLAT_MINOR";
      Scale2["D_MAJOR_B_MINOR"] = "D_MAJOR_B_MINOR";
      Scale2["E_FLAT_MAJOR_C_MINOR"] = "E_FLAT_MAJOR_C_MINOR";
      Scale2["E_MAJOR_D_FLAT_MINOR"] = "E_MAJOR_D_FLAT_MINOR";
      Scale2["F_MAJOR_D_MINOR"] = "F_MAJOR_D_MINOR";
      Scale2["G_FLAT_MAJOR_E_FLAT_MINOR"] = "G_FLAT_MAJOR_E_FLAT_MINOR";
      Scale2["G_MAJOR_E_MINOR"] = "G_MAJOR_E_MINOR";
      Scale2["A_FLAT_MAJOR_F_MINOR"] = "A_FLAT_MAJOR_F_MINOR";
      Scale2["A_MAJOR_G_FLAT_MINOR"] = "A_MAJOR_G_FLAT_MINOR";
      Scale2["B_FLAT_MAJOR_G_MINOR"] = "B_FLAT_MAJOR_G_MINOR";
      Scale2["B_MAJOR_A_FLAT_MINOR"] = "B_MAJOR_A_FLAT_MINOR";
    })(Scale || (Scale = {}));
    (function(MusicGenerationMode2) {
      MusicGenerationMode2["MUSIC_GENERATION_MODE_UNSPECIFIED"] = "MUSIC_GENERATION_MODE_UNSPECIFIED";
      MusicGenerationMode2["QUALITY"] = "QUALITY";
      MusicGenerationMode2["DIVERSITY"] = "DIVERSITY";
      MusicGenerationMode2["VOCALIZATION"] = "VOCALIZATION";
    })(MusicGenerationMode || (MusicGenerationMode = {}));
    (function(LiveMusicPlaybackControl2) {
      LiveMusicPlaybackControl2["PLAYBACK_CONTROL_UNSPECIFIED"] = "PLAYBACK_CONTROL_UNSPECIFIED";
      LiveMusicPlaybackControl2["PLAY"] = "PLAY";
      LiveMusicPlaybackControl2["PAUSE"] = "PAUSE";
      LiveMusicPlaybackControl2["STOP"] = "STOP";
      LiveMusicPlaybackControl2["RESET_CONTEXT"] = "RESET_CONTEXT";
    })(LiveMusicPlaybackControl || (LiveMusicPlaybackControl = {}));
    FunctionResponse = class {
      static {
        __name(this, "FunctionResponse");
      }
    };
    __name(createPartFromUri, "createPartFromUri");
    __name(createPartFromText, "createPartFromText");
    __name(createPartFromFunctionCall, "createPartFromFunctionCall");
    __name(createPartFromFunctionResponse, "createPartFromFunctionResponse");
    __name(createPartFromBase64, "createPartFromBase64");
    __name(createPartFromCodeExecutionResult, "createPartFromCodeExecutionResult");
    __name(createPartFromExecutableCode, "createPartFromExecutableCode");
    __name(_isPart, "_isPart");
    __name(_toParts, "_toParts");
    __name(createUserContent, "createUserContent");
    __name(createModelContent, "createModelContent");
    HttpResponse = class {
      static {
        __name(this, "HttpResponse");
      }
      constructor(response) {
        const headers = {};
        for (const pair of response.headers.entries()) {
          headers[pair[0]] = pair[1];
        }
        this.headers = headers;
        this.responseInternal = response;
      }
      json() {
        return this.responseInternal.json();
      }
    };
    GenerateContentResponsePromptFeedback = class {
      static {
        __name(this, "GenerateContentResponsePromptFeedback");
      }
    };
    GenerateContentResponseUsageMetadata = class {
      static {
        __name(this, "GenerateContentResponseUsageMetadata");
      }
    };
    GenerateContentResponse = class {
      static {
        __name(this, "GenerateContentResponse");
      }
      /**
       * Returns the concatenation of all text parts from the first candidate in the response.
       *
       * @remarks
       * If there are multiple candidates in the response, the text from the first
       * one will be returned.
       * If there are non-text parts in the response, the concatenation of all text
       * parts will be returned, and a warning will be logged.
       * If there are thought parts in the response, the concatenation of all text
       * parts excluding the thought parts will be returned.
       *
       * @example
       * ```ts
       * const response = await ai.models.generateContent({
       *   model: 'gemini-2.0-flash',
       *   contents:
       *     'Why is the sky blue?',
       * });
       *
       * console.debug(response.text);
       * ```
       */
      get text() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
          return void 0;
        }
        if (this.candidates && this.candidates.length > 1) {
          console.warn("there are multiple candidates in the response, returning text from the first one.");
        }
        let text = "";
        let anyTextPartText = false;
        const nonTextParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []) {
          for (const [fieldName, fieldValue] of Object.entries(part)) {
            if (fieldName !== "text" && fieldName !== "thought" && (fieldValue !== null || fieldValue !== void 0)) {
              nonTextParts.push(fieldName);
            }
          }
          if (typeof part.text === "string") {
            if (typeof part.thought === "boolean" && part.thought) {
              continue;
            }
            anyTextPartText = true;
            text += part.text;
          }
        }
        if (nonTextParts.length > 0) {
          console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        }
        return anyTextPartText ? text : void 0;
      }
      /**
       * Returns the concatenation of all inline data parts from the first candidate
       * in the response.
       *
       * @remarks
       * If there are multiple candidates in the response, the inline data from the
       * first one will be returned. If there are non-inline data parts in the
       * response, the concatenation of all inline data parts will be returned, and
       * a warning will be logged.
       */
      get data() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
          return void 0;
        }
        if (this.candidates && this.candidates.length > 1) {
          console.warn("there are multiple candidates in the response, returning data from the first one.");
        }
        let data = "";
        const nonDataParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []) {
          for (const [fieldName, fieldValue] of Object.entries(part)) {
            if (fieldName !== "inlineData" && (fieldValue !== null || fieldValue !== void 0)) {
              nonDataParts.push(fieldName);
            }
          }
          if (part.inlineData && typeof part.inlineData.data === "string") {
            data += atob(part.inlineData.data);
          }
        }
        if (nonDataParts.length > 0) {
          console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        }
        return data.length > 0 ? btoa(data) : void 0;
      }
      /**
       * Returns the function calls from the first candidate in the response.
       *
       * @remarks
       * If there are multiple candidates in the response, the function calls from
       * the first one will be returned.
       * If there are no function calls in the response, undefined will be returned.
       *
       * @example
       * ```ts
       * const controlLightFunctionDeclaration: FunctionDeclaration = {
       *   name: 'controlLight',
       *   parameters: {
       *   type: Type.OBJECT,
       *   description: 'Set the brightness and color temperature of a room light.',
       *   properties: {
       *     brightness: {
       *       type: Type.NUMBER,
       *       description:
       *         'Light level from 0 to 100. Zero is off and 100 is full brightness.',
       *     },
       *     colorTemperature: {
       *       type: Type.STRING,
       *       description:
       *         'Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.',
       *     },
       *   },
       *   required: ['brightness', 'colorTemperature'],
       *  };
       *  const response = await ai.models.generateContent({
       *     model: 'gemini-2.0-flash',
       *     contents: 'Dim the lights so the room feels cozy and warm.',
       *     config: {
       *       tools: [{functionDeclarations: [controlLightFunctionDeclaration]}],
       *       toolConfig: {
       *         functionCallingConfig: {
       *           mode: FunctionCallingConfigMode.ANY,
       *           allowedFunctionNames: ['controlLight'],
       *         },
       *       },
       *     },
       *   });
       *  console.debug(JSON.stringify(response.functionCalls));
       * ```
       */
      get functionCalls() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
          return void 0;
        }
        if (this.candidates && this.candidates.length > 1) {
          console.warn("there are multiple candidates in the response, returning function calls from the first one.");
        }
        const functionCalls = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.functionCall).map((part) => part.functionCall).filter((functionCall) => functionCall !== void 0);
        if ((functionCalls === null || functionCalls === void 0 ? void 0 : functionCalls.length) === 0) {
          return void 0;
        }
        return functionCalls;
      }
      /**
       * Returns the first executable code from the first candidate in the response.
       *
       * @remarks
       * If there are multiple candidates in the response, the executable code from
       * the first one will be returned.
       * If there are no executable code in the response, undefined will be
       * returned.
       *
       * @example
       * ```ts
       * const response = await ai.models.generateContent({
       *   model: 'gemini-2.0-flash',
       *   contents:
       *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
       *   config: {
       *     tools: [{codeExecution: {}}],
       *   },
       * });
       *
       * console.debug(response.executableCode);
       * ```
       */
      get executableCode() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
          return void 0;
        }
        if (this.candidates && this.candidates.length > 1) {
          console.warn("there are multiple candidates in the response, returning executable code from the first one.");
        }
        const executableCode = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.executableCode).map((part) => part.executableCode).filter((executableCode2) => executableCode2 !== void 0);
        if ((executableCode === null || executableCode === void 0 ? void 0 : executableCode.length) === 0) {
          return void 0;
        }
        return (_j = executableCode === null || executableCode === void 0 ? void 0 : executableCode[0]) === null || _j === void 0 ? void 0 : _j.code;
      }
      /**
       * Returns the first code execution result from the first candidate in the response.
       *
       * @remarks
       * If there are multiple candidates in the response, the code execution result from
       * the first one will be returned.
       * If there are no code execution result in the response, undefined will be returned.
       *
       * @example
       * ```ts
       * const response = await ai.models.generateContent({
       *   model: 'gemini-2.0-flash',
       *   contents:
       *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
       *   config: {
       *     tools: [{codeExecution: {}}],
       *   },
       * });
       *
       * console.debug(response.codeExecutionResult);
       * ```
       */
      get codeExecutionResult() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
          return void 0;
        }
        if (this.candidates && this.candidates.length > 1) {
          console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
        }
        const codeExecutionResult = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.codeExecutionResult).map((part) => part.codeExecutionResult).filter((codeExecutionResult2) => codeExecutionResult2 !== void 0);
        if ((codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult.length) === 0) {
          return void 0;
        }
        return (_j = codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult[0]) === null || _j === void 0 ? void 0 : _j.output;
      }
    };
    EmbedContentResponse = class {
      static {
        __name(this, "EmbedContentResponse");
      }
    };
    GenerateImagesResponse = class {
      static {
        __name(this, "GenerateImagesResponse");
      }
    };
    EditImageResponse = class {
      static {
        __name(this, "EditImageResponse");
      }
    };
    UpscaleImageResponse = class {
      static {
        __name(this, "UpscaleImageResponse");
      }
    };
    RecontextImageResponse = class {
      static {
        __name(this, "RecontextImageResponse");
      }
    };
    ListModelsResponse = class {
      static {
        __name(this, "ListModelsResponse");
      }
    };
    DeleteModelResponse = class {
      static {
        __name(this, "DeleteModelResponse");
      }
    };
    CountTokensResponse = class {
      static {
        __name(this, "CountTokensResponse");
      }
    };
    ComputeTokensResponse = class {
      static {
        __name(this, "ComputeTokensResponse");
      }
    };
    GenerateVideosResponse = class {
      static {
        __name(this, "GenerateVideosResponse");
      }
    };
    ListTuningJobsResponse = class {
      static {
        __name(this, "ListTuningJobsResponse");
      }
    };
    DeleteCachedContentResponse = class {
      static {
        __name(this, "DeleteCachedContentResponse");
      }
    };
    ListCachedContentsResponse = class {
      static {
        __name(this, "ListCachedContentsResponse");
      }
    };
    ListFilesResponse = class {
      static {
        __name(this, "ListFilesResponse");
      }
    };
    CreateFileResponse = class {
      static {
        __name(this, "CreateFileResponse");
      }
    };
    DeleteFileResponse = class {
      static {
        __name(this, "DeleteFileResponse");
      }
    };
    InlinedResponse = class {
      static {
        __name(this, "InlinedResponse");
      }
    };
    ListBatchJobsResponse = class {
      static {
        __name(this, "ListBatchJobsResponse");
      }
    };
    ReplayResponse = class {
      static {
        __name(this, "ReplayResponse");
      }
    };
    RawReferenceImage = class {
      static {
        __name(this, "RawReferenceImage");
      }
      /** Internal method to convert to ReferenceImageAPIInternal. */
      toReferenceImageAPI() {
        const referenceImageAPI = {
          referenceType: "REFERENCE_TYPE_RAW",
          referenceImage: this.referenceImage,
          referenceId: this.referenceId
        };
        return referenceImageAPI;
      }
    };
    MaskReferenceImage = class {
      static {
        __name(this, "MaskReferenceImage");
      }
      /** Internal method to convert to ReferenceImageAPIInternal. */
      toReferenceImageAPI() {
        const referenceImageAPI = {
          referenceType: "REFERENCE_TYPE_MASK",
          referenceImage: this.referenceImage,
          referenceId: this.referenceId,
          maskImageConfig: this.config
        };
        return referenceImageAPI;
      }
    };
    ControlReferenceImage = class {
      static {
        __name(this, "ControlReferenceImage");
      }
      /** Internal method to convert to ReferenceImageAPIInternal. */
      toReferenceImageAPI() {
        const referenceImageAPI = {
          referenceType: "REFERENCE_TYPE_CONTROL",
          referenceImage: this.referenceImage,
          referenceId: this.referenceId,
          controlImageConfig: this.config
        };
        return referenceImageAPI;
      }
    };
    StyleReferenceImage = class {
      static {
        __name(this, "StyleReferenceImage");
      }
      /** Internal method to convert to ReferenceImageAPIInternal. */
      toReferenceImageAPI() {
        const referenceImageAPI = {
          referenceType: "REFERENCE_TYPE_STYLE",
          referenceImage: this.referenceImage,
          referenceId: this.referenceId,
          styleImageConfig: this.config
        };
        return referenceImageAPI;
      }
    };
    SubjectReferenceImage = class {
      static {
        __name(this, "SubjectReferenceImage");
      }
      /* Internal method to convert to ReferenceImageAPIInternal. */
      toReferenceImageAPI() {
        const referenceImageAPI = {
          referenceType: "REFERENCE_TYPE_SUBJECT",
          referenceImage: this.referenceImage,
          referenceId: this.referenceId,
          subjectImageConfig: this.config
        };
        return referenceImageAPI;
      }
    };
    LiveServerMessage = class {
      static {
        __name(this, "LiveServerMessage");
      }
      /**
       * Returns the concatenation of all text parts from the server content if present.
       *
       * @remarks
       * If there are non-text parts in the response, the concatenation of all text
       * parts will be returned, and a warning will be logged.
       */
      get text() {
        var _a, _b, _c;
        let text = "";
        let anyTextPartFound = false;
        const nonTextParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []) {
          for (const [fieldName, fieldValue] of Object.entries(part)) {
            if (fieldName !== "text" && fieldName !== "thought" && fieldValue !== null) {
              nonTextParts.push(fieldName);
            }
          }
          if (typeof part.text === "string") {
            if (typeof part.thought === "boolean" && part.thought) {
              continue;
            }
            anyTextPartFound = true;
            text += part.text;
          }
        }
        if (nonTextParts.length > 0) {
          console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        }
        return anyTextPartFound ? text : void 0;
      }
      /**
       * Returns the concatenation of all inline data parts from the server content if present.
       *
       * @remarks
       * If there are non-inline data parts in the
       * response, the concatenation of all inline data parts will be returned, and
       * a warning will be logged.
       */
      get data() {
        var _a, _b, _c;
        let data = "";
        const nonDataParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []) {
          for (const [fieldName, fieldValue] of Object.entries(part)) {
            if (fieldName !== "inlineData" && fieldValue !== null) {
              nonDataParts.push(fieldName);
            }
          }
          if (part.inlineData && typeof part.inlineData.data === "string") {
            data += atob(part.inlineData.data);
          }
        }
        if (nonDataParts.length > 0) {
          console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        }
        return data.length > 0 ? btoa(data) : void 0;
      }
    };
    GenerateVideosOperation = class _GenerateVideosOperation {
      static {
        __name(this, "GenerateVideosOperation");
      }
      /**
       * Instantiates an Operation of the same type as the one being called with the fields set from the API response.
       * @internal
       */
      _fromAPIResponse({ apiResponse, isVertexAI }) {
        const operation = new _GenerateVideosOperation();
        operation.name = apiResponse["name"];
        operation.metadata = apiResponse["metadata"];
        operation.done = apiResponse["done"];
        operation.error = apiResponse["error"];
        if (isVertexAI) {
          const response = apiResponse["response"];
          if (response) {
            const operationResponse = new GenerateVideosResponse();
            const responseVideos = response["videos"];
            operationResponse.generatedVideos = responseVideos === null || responseVideos === void 0 ? void 0 : responseVideos.map((generatedVideo) => {
              return {
                video: {
                  uri: generatedVideo["gcsUri"],
                  videoBytes: generatedVideo["bytesBase64Encoded"] ? tBytes$1(generatedVideo["bytesBase64Encoded"]) : void 0,
                  mimeType: generatedVideo["mimeType"]
                }
              };
            });
            operationResponse.raiMediaFilteredCount = response["raiMediaFilteredCount"];
            operationResponse.raiMediaFilteredReasons = response["raiMediaFilteredReasons"];
            operation.response = operationResponse;
          }
        } else {
          const response = apiResponse["response"];
          if (response) {
            const operationResponse = new GenerateVideosResponse();
            const generatedVideoResponse = response["generateVideoResponse"];
            const responseVideos = generatedVideoResponse === null || generatedVideoResponse === void 0 ? void 0 : generatedVideoResponse["generatedSamples"];
            operationResponse.generatedVideos = responseVideos === null || responseVideos === void 0 ? void 0 : responseVideos.map((generatedVideo) => {
              const video = generatedVideo["video"];
              return {
                video: {
                  uri: video === null || video === void 0 ? void 0 : video["uri"],
                  videoBytes: (video === null || video === void 0 ? void 0 : video["encodedVideo"]) ? tBytes$1(video === null || video === void 0 ? void 0 : video["encodedVideo"]) : void 0,
                  mimeType: generatedVideo["encoding"]
                }
              };
            });
            operationResponse.raiMediaFilteredCount = generatedVideoResponse === null || generatedVideoResponse === void 0 ? void 0 : generatedVideoResponse["raiMediaFilteredCount"];
            operationResponse.raiMediaFilteredReasons = generatedVideoResponse === null || generatedVideoResponse === void 0 ? void 0 : generatedVideoResponse["raiMediaFilteredReasons"];
            operation.response = operationResponse;
          }
        }
        return operation;
      }
    };
    LiveClientToolResponse = class {
      static {
        __name(this, "LiveClientToolResponse");
      }
    };
    LiveSendToolResponseParameters = class {
      static {
        __name(this, "LiveSendToolResponseParameters");
      }
      constructor() {
        this.functionResponses = [];
      }
    };
    LiveMusicServerMessage = class {
      static {
        __name(this, "LiveMusicServerMessage");
      }
      /**
       * Returns the first audio chunk from the server content, if present.
       *
       * @remarks
       * If there are no audio chunks in the response, undefined will be returned.
       */
      get audioChunk() {
        if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) {
          return this.serverContent.audioChunks[0];
        }
        return void 0;
      }
    };
    __name(tModel, "tModel");
    __name(tCachesModel, "tCachesModel");
    __name(tBlobs, "tBlobs");
    __name(tBlob, "tBlob");
    __name(tImageBlob, "tImageBlob");
    __name(tAudioBlob, "tAudioBlob");
    __name(tPart, "tPart");
    __name(tParts, "tParts");
    __name(_isContent, "_isContent");
    __name(_isFunctionCallPart, "_isFunctionCallPart");
    __name(_isFunctionResponsePart, "_isFunctionResponsePart");
    __name(tContent, "tContent");
    __name(tContentsForEmbed, "tContentsForEmbed");
    __name(tContents, "tContents");
    __name(flattenTypeArrayToAnyOf, "flattenTypeArrayToAnyOf");
    __name(processJsonSchema, "processJsonSchema");
    __name(tSchema, "tSchema");
    __name(tSpeechConfig, "tSpeechConfig");
    __name(tLiveSpeechConfig, "tLiveSpeechConfig");
    __name(tTool, "tTool");
    __name(tTools, "tTools");
    __name(resourceName, "resourceName");
    __name(tCachedContentName, "tCachedContentName");
    __name(tTuningJobStatus, "tTuningJobStatus");
    __name(tBytes, "tBytes");
    __name(_isFile, "_isFile");
    __name(isGeneratedVideo, "isGeneratedVideo");
    __name(isVideo, "isVideo");
    __name(tFileName, "tFileName");
    __name(tModelsUrl, "tModelsUrl");
    __name(tExtractModels, "tExtractModels");
    __name(hasField, "hasField");
    __name(mcpToGeminiTool, "mcpToGeminiTool");
    __name(mcpToolsToGeminiTool, "mcpToolsToGeminiTool");
    __name(tBatchJobSource, "tBatchJobSource");
    __name(tBatchJobDestination, "tBatchJobDestination");
    __name(tBatchJobName, "tBatchJobName");
    __name(tJobState, "tJobState");
    __name(videoMetadataToMldev$4, "videoMetadataToMldev$4");
    __name(blobToMldev$4, "blobToMldev$4");
    __name(fileDataToMldev$4, "fileDataToMldev$4");
    __name(partToMldev$4, "partToMldev$4");
    __name(contentToMldev$4, "contentToMldev$4");
    __name(schemaToMldev$1, "schemaToMldev$1");
    __name(safetySettingToMldev$1, "safetySettingToMldev$1");
    __name(functionDeclarationToMldev$4, "functionDeclarationToMldev$4");
    __name(intervalToMldev$4, "intervalToMldev$4");
    __name(googleSearchToMldev$4, "googleSearchToMldev$4");
    __name(dynamicRetrievalConfigToMldev$4, "dynamicRetrievalConfigToMldev$4");
    __name(googleSearchRetrievalToMldev$4, "googleSearchRetrievalToMldev$4");
    __name(urlContextToMldev$4, "urlContextToMldev$4");
    __name(toolToMldev$4, "toolToMldev$4");
    __name(functionCallingConfigToMldev$2, "functionCallingConfigToMldev$2");
    __name(latLngToMldev$2, "latLngToMldev$2");
    __name(retrievalConfigToMldev$2, "retrievalConfigToMldev$2");
    __name(toolConfigToMldev$2, "toolConfigToMldev$2");
    __name(prebuiltVoiceConfigToMldev$3, "prebuiltVoiceConfigToMldev$3");
    __name(voiceConfigToMldev$3, "voiceConfigToMldev$3");
    __name(speakerVoiceConfigToMldev$3, "speakerVoiceConfigToMldev$3");
    __name(multiSpeakerVoiceConfigToMldev$3, "multiSpeakerVoiceConfigToMldev$3");
    __name(speechConfigToMldev$3, "speechConfigToMldev$3");
    __name(thinkingConfigToMldev$1, "thinkingConfigToMldev$1");
    __name(generateContentConfigToMldev$1, "generateContentConfigToMldev$1");
    __name(inlinedRequestToMldev, "inlinedRequestToMldev");
    __name(batchJobSourceToMldev, "batchJobSourceToMldev");
    __name(createBatchJobConfigToMldev, "createBatchJobConfigToMldev");
    __name(createBatchJobParametersToMldev, "createBatchJobParametersToMldev");
    __name(getBatchJobParametersToMldev, "getBatchJobParametersToMldev");
    __name(cancelBatchJobParametersToMldev, "cancelBatchJobParametersToMldev");
    __name(listBatchJobsConfigToMldev, "listBatchJobsConfigToMldev");
    __name(listBatchJobsParametersToMldev, "listBatchJobsParametersToMldev");
    __name(deleteBatchJobParametersToMldev, "deleteBatchJobParametersToMldev");
    __name(batchJobSourceToVertex, "batchJobSourceToVertex");
    __name(batchJobDestinationToVertex, "batchJobDestinationToVertex");
    __name(createBatchJobConfigToVertex, "createBatchJobConfigToVertex");
    __name(createBatchJobParametersToVertex, "createBatchJobParametersToVertex");
    __name(getBatchJobParametersToVertex, "getBatchJobParametersToVertex");
    __name(cancelBatchJobParametersToVertex, "cancelBatchJobParametersToVertex");
    __name(listBatchJobsConfigToVertex, "listBatchJobsConfigToVertex");
    __name(listBatchJobsParametersToVertex, "listBatchJobsParametersToVertex");
    __name(deleteBatchJobParametersToVertex, "deleteBatchJobParametersToVertex");
    __name(videoMetadataFromMldev$2, "videoMetadataFromMldev$2");
    __name(blobFromMldev$2, "blobFromMldev$2");
    __name(fileDataFromMldev$2, "fileDataFromMldev$2");
    __name(partFromMldev$2, "partFromMldev$2");
    __name(contentFromMldev$2, "contentFromMldev$2");
    __name(citationMetadataFromMldev$1, "citationMetadataFromMldev$1");
    __name(urlMetadataFromMldev$2, "urlMetadataFromMldev$2");
    __name(urlContextMetadataFromMldev$2, "urlContextMetadataFromMldev$2");
    __name(candidateFromMldev$1, "candidateFromMldev$1");
    __name(generateContentResponseFromMldev$1, "generateContentResponseFromMldev$1");
    __name(jobErrorFromMldev, "jobErrorFromMldev");
    __name(inlinedResponseFromMldev, "inlinedResponseFromMldev");
    __name(batchJobDestinationFromMldev, "batchJobDestinationFromMldev");
    __name(batchJobFromMldev, "batchJobFromMldev");
    __name(listBatchJobsResponseFromMldev, "listBatchJobsResponseFromMldev");
    __name(deleteResourceJobFromMldev, "deleteResourceJobFromMldev");
    __name(jobErrorFromVertex, "jobErrorFromVertex");
    __name(batchJobSourceFromVertex, "batchJobSourceFromVertex");
    __name(batchJobDestinationFromVertex, "batchJobDestinationFromVertex");
    __name(batchJobFromVertex, "batchJobFromVertex");
    __name(listBatchJobsResponseFromVertex, "listBatchJobsResponseFromVertex");
    __name(deleteResourceJobFromVertex, "deleteResourceJobFromVertex");
    (function(PagedItem2) {
      PagedItem2["PAGED_ITEM_BATCH_JOBS"] = "batchJobs";
      PagedItem2["PAGED_ITEM_MODELS"] = "models";
      PagedItem2["PAGED_ITEM_TUNING_JOBS"] = "tuningJobs";
      PagedItem2["PAGED_ITEM_FILES"] = "files";
      PagedItem2["PAGED_ITEM_CACHED_CONTENTS"] = "cachedContents";
    })(PagedItem || (PagedItem = {}));
    Pager = class {
      static {
        __name(this, "Pager");
      }
      constructor(name, request, response, params) {
        this.pageInternal = [];
        this.paramsInternal = {};
        this.requestInternal = request;
        this.init(name, response, params);
      }
      init(name, response, params) {
        var _a, _b;
        this.nameInternal = name;
        this.pageInternal = response[this.nameInternal] || [];
        this.sdkHttpResponseInternal = response === null || response === void 0 ? void 0 : response.sdkHttpResponse;
        this.idxInternal = 0;
        let requestParams = { config: {} };
        if (!params || Object.keys(params).length === 0) {
          requestParams = { config: {} };
        } else if (typeof params === "object") {
          requestParams = Object.assign({}, params);
        } else {
          requestParams = params;
        }
        if (requestParams["config"]) {
          requestParams["config"]["pageToken"] = response["nextPageToken"];
        }
        this.paramsInternal = requestParams;
        this.pageInternalSize = (_b = (_a = requestParams["config"]) === null || _a === void 0 ? void 0 : _a["pageSize"]) !== null && _b !== void 0 ? _b : this.pageInternal.length;
      }
      initNextPage(response) {
        this.init(this.nameInternal, response, this.paramsInternal);
      }
      /**
       * Returns the current page, which is a list of items.
       *
       * @remarks
       * The first page is retrieved when the pager is created. The returned list of
       * items could be a subset of the entire list.
       */
      get page() {
        return this.pageInternal;
      }
      /**
       * Returns the type of paged item (for example, ``batch_jobs``).
       */
      get name() {
        return this.nameInternal;
      }
      /**
       * Returns the length of the page fetched each time by this pager.
       *
       * @remarks
       * The number of items in the page is less than or equal to the page length.
       */
      get pageSize() {
        return this.pageInternalSize;
      }
      /**
       * Returns the headers of the API response.
       */
      get sdkHttpResponse() {
        return this.sdkHttpResponseInternal;
      }
      /**
       * Returns the parameters when making the API request for the next page.
       *
       * @remarks
       * Parameters contain a set of optional configs that can be
       * used to customize the API request. For example, the `pageToken` parameter
       * contains the token to request the next page.
       */
      get params() {
        return this.paramsInternal;
      }
      /**
       * Returns the total number of items in the current page.
       */
      get pageLength() {
        return this.pageInternal.length;
      }
      /**
       * Returns the item at the given index.
       */
      getItem(index) {
        return this.pageInternal[index];
      }
      /**
       * Returns an async iterator that support iterating through all items
       * retrieved from the API.
       *
       * @remarks
       * The iterator will automatically fetch the next page if there are more items
       * to fetch from the API.
       *
       * @example
       *
       * ```ts
       * const pager = await ai.files.list({config: {pageSize: 10}});
       * for await (const file of pager) {
       *   console.log(file.name);
       * }
       * ```
       */
      [Symbol.asyncIterator]() {
        return {
          next: /* @__PURE__ */ __name(async () => {
            if (this.idxInternal >= this.pageLength) {
              if (this.hasNextPage()) {
                await this.nextPage();
              } else {
                return { value: void 0, done: true };
              }
            }
            const item = this.getItem(this.idxInternal);
            this.idxInternal += 1;
            return { value: item, done: false };
          }, "next"),
          return: /* @__PURE__ */ __name(async () => {
            return { value: void 0, done: true };
          }, "return")
        };
      }
      /**
       * Fetches the next page of items. This makes a new API request.
       *
       * @throws {Error} If there are no more pages to fetch.
       *
       * @example
       *
       * ```ts
       * const pager = await ai.files.list({config: {pageSize: 10}});
       * let page = pager.page;
       * while (true) {
       *   for (const file of page) {
       *     console.log(file.name);
       *   }
       *   if (!pager.hasNextPage()) {
       *     break;
       *   }
       *   page = await pager.nextPage();
       * }
       * ```
       */
      async nextPage() {
        if (!this.hasNextPage()) {
          throw new Error("No more pages to fetch.");
        }
        const response = await this.requestInternal(this.params);
        this.initNextPage(response);
        return this.page;
      }
      /**
       * Returns true if there are more pages to fetch from the API.
       */
      hasNextPage() {
        var _a;
        if (((_a = this.params["config"]) === null || _a === void 0 ? void 0 : _a["pageToken"]) !== void 0) {
          return true;
        }
        return false;
      }
    };
    Batches = class extends BaseModule {
      static {
        __name(this, "Batches");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        this.create = async (params) => {
          if (this.apiClient.isVertexAI()) {
            const timestamp = Date.now();
            const timestampStr = timestamp.toString();
            if (Array.isArray(params.src)) {
              throw new Error("InlinedRequest[] is not supported in Vertex AI. Please use Google Cloud Storage URI or BigQuery URI instead.");
            }
            params.config = params.config || {};
            if (params.config.displayName === void 0) {
              params.config.displayName = "genaiBatchJob_${timestampStr}";
            }
            if (params.config.dest === void 0 && typeof params.src === "string") {
              if (params.src.startsWith("gs://") && params.src.endsWith(".jsonl")) {
                params.config.dest = `${params.src.slice(0, -6)}/dest`;
              } else if (params.src.startsWith("bq://")) {
                params.config.dest = `${params.src}_dest_${timestampStr}`;
              } else {
                throw new Error("Unsupported source:" + params.src);
              }
            }
          }
          return await this.createInternal(params);
        };
        this.list = async (params = {}) => {
          return new Pager(PagedItem.PAGED_ITEM_BATCH_JOBS, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
      }
      /**
       * Internal method to create batch job.
       *
       * @param params - The parameters for create batch job request.
       * @return The created batch job.
       *
       */
      async createInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = createBatchJobParametersToVertex(this.apiClient, params);
          path = formatMap("batchPredictionJobs", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = batchJobFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = createBatchJobParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:batchGenerateContent", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = batchJobFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Gets batch job configurations.
       *
       * @param params - The parameters for the get request.
       * @return The batch job.
       *
       * @example
       * ```ts
       * await ai.batches.get({name: '...'}); // The server-generated resource name.
       * ```
       */
      async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = getBatchJobParametersToVertex(this.apiClient, params);
          path = formatMap("batchPredictionJobs/{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = batchJobFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = getBatchJobParametersToMldev(this.apiClient, params);
          path = formatMap("batches/{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = batchJobFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Cancels a batch job.
       *
       * @param params - The parameters for the cancel request.
       * @return The empty response returned by the API.
       *
       * @example
       * ```ts
       * await ai.batches.cancel({name: '...'}); // The server-generated resource name.
       * ```
       */
      async cancel(params) {
        var _a, _b, _c, _d;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = cancelBatchJobParametersToVertex(this.apiClient, params);
          path = formatMap("batchPredictionJobs/{name}:cancel", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          await this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          });
        } else {
          const body = cancelBatchJobParametersToMldev(this.apiClient, params);
          path = formatMap("batches/{name}:cancel", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          await this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          });
        }
      }
      async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = listBatchJobsParametersToVertex(params);
          path = formatMap("batchPredictionJobs", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listBatchJobsResponseFromVertex(apiResponse);
            const typedResp = new ListBatchJobsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = listBatchJobsParametersToMldev(params);
          path = formatMap("batches", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listBatchJobsResponseFromMldev(apiResponse);
            const typedResp = new ListBatchJobsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Deletes a batch job.
       *
       * @param params - The parameters for the delete request.
       * @return The empty response returned by the API.
       *
       * @example
       * ```ts
       * await ai.batches.delete({name: '...'}); // The server-generated resource name.
       * ```
       */
      async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = deleteBatchJobParametersToVertex(this.apiClient, params);
          path = formatMap("batchPredictionJobs/{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = deleteResourceJobFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = deleteBatchJobParametersToMldev(this.apiClient, params);
          path = formatMap("batches/{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = deleteResourceJobFromMldev(apiResponse);
            return resp;
          });
        }
      }
    };
    __name(videoMetadataToMldev$3, "videoMetadataToMldev$3");
    __name(blobToMldev$3, "blobToMldev$3");
    __name(fileDataToMldev$3, "fileDataToMldev$3");
    __name(partToMldev$3, "partToMldev$3");
    __name(contentToMldev$3, "contentToMldev$3");
    __name(functionDeclarationToMldev$3, "functionDeclarationToMldev$3");
    __name(intervalToMldev$3, "intervalToMldev$3");
    __name(googleSearchToMldev$3, "googleSearchToMldev$3");
    __name(dynamicRetrievalConfigToMldev$3, "dynamicRetrievalConfigToMldev$3");
    __name(googleSearchRetrievalToMldev$3, "googleSearchRetrievalToMldev$3");
    __name(urlContextToMldev$3, "urlContextToMldev$3");
    __name(toolToMldev$3, "toolToMldev$3");
    __name(functionCallingConfigToMldev$1, "functionCallingConfigToMldev$1");
    __name(latLngToMldev$1, "latLngToMldev$1");
    __name(retrievalConfigToMldev$1, "retrievalConfigToMldev$1");
    __name(toolConfigToMldev$1, "toolConfigToMldev$1");
    __name(createCachedContentConfigToMldev, "createCachedContentConfigToMldev");
    __name(createCachedContentParametersToMldev, "createCachedContentParametersToMldev");
    __name(getCachedContentParametersToMldev, "getCachedContentParametersToMldev");
    __name(deleteCachedContentParametersToMldev, "deleteCachedContentParametersToMldev");
    __name(updateCachedContentConfigToMldev, "updateCachedContentConfigToMldev");
    __name(updateCachedContentParametersToMldev, "updateCachedContentParametersToMldev");
    __name(listCachedContentsConfigToMldev, "listCachedContentsConfigToMldev");
    __name(listCachedContentsParametersToMldev, "listCachedContentsParametersToMldev");
    __name(videoMetadataToVertex$2, "videoMetadataToVertex$2");
    __name(blobToVertex$2, "blobToVertex$2");
    __name(fileDataToVertex$2, "fileDataToVertex$2");
    __name(partToVertex$2, "partToVertex$2");
    __name(contentToVertex$2, "contentToVertex$2");
    __name(functionDeclarationToVertex$2, "functionDeclarationToVertex$2");
    __name(intervalToVertex$2, "intervalToVertex$2");
    __name(googleSearchToVertex$2, "googleSearchToVertex$2");
    __name(dynamicRetrievalConfigToVertex$2, "dynamicRetrievalConfigToVertex$2");
    __name(googleSearchRetrievalToVertex$2, "googleSearchRetrievalToVertex$2");
    __name(enterpriseWebSearchToVertex$2, "enterpriseWebSearchToVertex$2");
    __name(apiKeyConfigToVertex$2, "apiKeyConfigToVertex$2");
    __name(authConfigToVertex$2, "authConfigToVertex$2");
    __name(googleMapsToVertex$2, "googleMapsToVertex$2");
    __name(urlContextToVertex$2, "urlContextToVertex$2");
    __name(toolToVertex$2, "toolToVertex$2");
    __name(functionCallingConfigToVertex$1, "functionCallingConfigToVertex$1");
    __name(latLngToVertex$1, "latLngToVertex$1");
    __name(retrievalConfigToVertex$1, "retrievalConfigToVertex$1");
    __name(toolConfigToVertex$1, "toolConfigToVertex$1");
    __name(createCachedContentConfigToVertex, "createCachedContentConfigToVertex");
    __name(createCachedContentParametersToVertex, "createCachedContentParametersToVertex");
    __name(getCachedContentParametersToVertex, "getCachedContentParametersToVertex");
    __name(deleteCachedContentParametersToVertex, "deleteCachedContentParametersToVertex");
    __name(updateCachedContentConfigToVertex, "updateCachedContentConfigToVertex");
    __name(updateCachedContentParametersToVertex, "updateCachedContentParametersToVertex");
    __name(listCachedContentsConfigToVertex, "listCachedContentsConfigToVertex");
    __name(listCachedContentsParametersToVertex, "listCachedContentsParametersToVertex");
    __name(cachedContentFromMldev, "cachedContentFromMldev");
    __name(deleteCachedContentResponseFromMldev, "deleteCachedContentResponseFromMldev");
    __name(listCachedContentsResponseFromMldev, "listCachedContentsResponseFromMldev");
    __name(cachedContentFromVertex, "cachedContentFromVertex");
    __name(deleteCachedContentResponseFromVertex, "deleteCachedContentResponseFromVertex");
    __name(listCachedContentsResponseFromVertex, "listCachedContentsResponseFromVertex");
    Caches = class extends BaseModule {
      static {
        __name(this, "Caches");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        this.list = async (params = {}) => {
          return new Pager(PagedItem.PAGED_ITEM_CACHED_CONTENTS, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
      }
      /**
       * Creates a cached contents resource.
       *
       * @remarks
       * Context caching is only supported for specific models. See [Gemini
       * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
       * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
       * for more information.
       *
       * @param params - The parameters for the create request.
       * @return The created cached content.
       *
       * @example
       * ```ts
       * const contents = ...; // Initialize the content to cache.
       * const response = await ai.caches.create({
       *   model: 'gemini-2.0-flash-001',
       *   config: {
       *    'contents': contents,
       *    'displayName': 'test cache',
       *    'systemInstruction': 'What is the sum of the two pdfs?',
       *    'ttl': '86400s',
       *  }
       * });
       * ```
       */
      async create(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = createCachedContentParametersToVertex(this.apiClient, params);
          path = formatMap("cachedContents", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = createCachedContentParametersToMldev(this.apiClient, params);
          path = formatMap("cachedContents", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Gets cached content configurations.
       *
       * @param params - The parameters for the get request.
       * @return The cached content.
       *
       * @example
       * ```ts
       * await ai.caches.get({name: '...'}); // The server-generated resource name.
       * ```
       */
      async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = getCachedContentParametersToVertex(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = getCachedContentParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Deletes cached content.
       *
       * @param params - The parameters for the delete request.
       * @return The empty response returned by the API.
       *
       * @example
       * ```ts
       * await ai.caches.delete({name: '...'}); // The server-generated resource name.
       * ```
       */
      async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = deleteCachedContentParametersToVertex(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then(() => {
            const resp = deleteCachedContentResponseFromVertex();
            const typedResp = new DeleteCachedContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = deleteCachedContentParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then(() => {
            const resp = deleteCachedContentResponseFromMldev();
            const typedResp = new DeleteCachedContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Updates cached content configurations.
       *
       * @param params - The parameters for the update request.
       * @return The updated cached content.
       *
       * @example
       * ```ts
       * const response = await ai.caches.update({
       *   name: '...',  // The server-generated resource name.
       *   config: {'ttl': '7600s'}
       * });
       * ```
       */
      async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = updateCachedContentParametersToVertex(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "PATCH",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = updateCachedContentParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "PATCH",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = cachedContentFromMldev(apiResponse);
            return resp;
          });
        }
      }
      async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = listCachedContentsParametersToVertex(params);
          path = formatMap("cachedContents", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listCachedContentsResponseFromVertex(apiResponse);
            const typedResp = new ListCachedContentsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = listCachedContentsParametersToMldev(params);
          path = formatMap("cachedContents", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listCachedContentsResponseFromMldev(apiResponse);
            const typedResp = new ListCachedContentsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
    };
    __name(__values, "__values");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncValues, "__asyncValues");
    __name(isValidResponse, "isValidResponse");
    __name(isValidContent, "isValidContent");
    __name(validateHistory, "validateHistory");
    __name(extractCuratedHistory, "extractCuratedHistory");
    Chats = class {
      static {
        __name(this, "Chats");
      }
      constructor(modelsModule, apiClient) {
        this.modelsModule = modelsModule;
        this.apiClient = apiClient;
      }
      /**
       * Creates a new chat session.
       *
       * @remarks
       * The config in the params will be used for all requests within the chat
       * session unless overridden by a per-request `config` in
       * @see {@link types.SendMessageParameters#config}.
       *
       * @param params - Parameters for creating a chat session.
       * @returns A new chat session.
       *
       * @example
       * ```ts
       * const chat = ai.chats.create({
       *   model: 'gemini-2.0-flash'
       *   config: {
       *     temperature: 0.5,
       *     maxOutputTokens: 1024,
       *   }
       * });
       * ```
       */
      create(params) {
        return new Chat(
          this.apiClient,
          this.modelsModule,
          params.model,
          params.config,
          // Deep copy the history to avoid mutating the history outside of the
          // chat session.
          structuredClone(params.history)
        );
      }
    };
    Chat = class {
      static {
        __name(this, "Chat");
      }
      constructor(apiClient, modelsModule, model, config2 = {}, history = []) {
        this.apiClient = apiClient;
        this.modelsModule = modelsModule;
        this.model = model;
        this.config = config2;
        this.history = history;
        this.sendPromise = Promise.resolve();
        validateHistory(history);
      }
      /**
       * Sends a message to the model and returns the response.
       *
       * @remarks
       * This method will wait for the previous message to be processed before
       * sending the next message.
       *
       * @see {@link Chat#sendMessageStream} for streaming method.
       * @param params - parameters for sending messages within a chat session.
       * @returns The model's response.
       *
       * @example
       * ```ts
       * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
       * const response = await chat.sendMessage({
       *   message: 'Why is the sky blue?'
       * });
       * console.log(response.text);
       * ```
       */
      async sendMessage(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(params.message);
        const responsePromise = this.modelsModule.generateContent({
          model: this.model,
          contents: this.getHistory(true).concat(inputContent),
          config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config
        });
        this.sendPromise = (async () => {
          var _a2, _b, _c;
          const response = await responsePromise;
          const outputContent = (_b = (_a2 = response.candidates) === null || _a2 === void 0 ? void 0 : _a2[0]) === null || _b === void 0 ? void 0 : _b.content;
          const fullAutomaticFunctionCallingHistory = response.automaticFunctionCallingHistory;
          const index = this.getHistory(true).length;
          let automaticFunctionCallingHistory = [];
          if (fullAutomaticFunctionCallingHistory != null) {
            automaticFunctionCallingHistory = (_c = fullAutomaticFunctionCallingHistory.slice(index)) !== null && _c !== void 0 ? _c : [];
          }
          const modelOutput = outputContent ? [outputContent] : [];
          this.recordHistory(inputContent, modelOutput, automaticFunctionCallingHistory);
          return;
        })();
        await this.sendPromise.catch(() => {
          this.sendPromise = Promise.resolve();
        });
        return responsePromise;
      }
      /**
       * Sends a message to the model and returns the response in chunks.
       *
       * @remarks
       * This method will wait for the previous message to be processed before
       * sending the next message.
       *
       * @see {@link Chat#sendMessage} for non-streaming method.
       * @param params - parameters for sending the message.
       * @return The model's response.
       *
       * @example
       * ```ts
       * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
       * const response = await chat.sendMessageStream({
       *   message: 'Why is the sky blue?'
       * });
       * for await (const chunk of response) {
       *   console.log(chunk.text);
       * }
       * ```
       */
      async sendMessageStream(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(params.message);
        const streamResponse = this.modelsModule.generateContentStream({
          model: this.model,
          contents: this.getHistory(true).concat(inputContent),
          config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config
        });
        this.sendPromise = streamResponse.then(() => void 0).catch(() => void 0);
        const response = await streamResponse;
        const result = this.processStreamResponse(response, inputContent);
        return result;
      }
      /**
       * Returns the chat history.
       *
       * @remarks
       * The history is a list of contents alternating between user and model.
       *
       * There are two types of history:
       * - The `curated history` contains only the valid turns between user and
       * model, which will be included in the subsequent requests sent to the model.
       * - The `comprehensive history` contains all turns, including invalid or
       *   empty model outputs, providing a complete record of the history.
       *
       * The history is updated after receiving the response from the model,
       * for streaming response, it means receiving the last chunk of the response.
       *
       * The `comprehensive history` is returned by default. To get the `curated
       * history`, set the `curated` parameter to `true`.
       *
       * @param curated - whether to return the curated history or the comprehensive
       *     history.
       * @return History contents alternating between user and model for the entire
       *     chat session.
       */
      getHistory(curated = false) {
        const history = curated ? extractCuratedHistory(this.history) : this.history;
        return structuredClone(history);
      }
      processStreamResponse(streamResponse, inputContent) {
        var _a, _b;
        return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function* processStreamResponse_1() {
          var _c, e_1, _d, _e;
          const outputContent = [];
          try {
            for (var _f = true, streamResponse_1 = __asyncValues(streamResponse), streamResponse_1_1; streamResponse_1_1 = yield __await(streamResponse_1.next()), _c = streamResponse_1_1.done, !_c; _f = true) {
              _e = streamResponse_1_1.value;
              _f = false;
              const chunk = _e;
              if (isValidResponse(chunk)) {
                const content = (_b = (_a = chunk.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
                if (content !== void 0) {
                  outputContent.push(content);
                }
              }
              yield yield __await(chunk);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (!_f && !_c && (_d = streamResponse_1.return)) yield __await(_d.call(streamResponse_1));
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          this.recordHistory(inputContent, outputContent);
        }, "processStreamResponse_1"));
      }
      recordHistory(userInput, modelOutput, automaticFunctionCallingHistory) {
        let outputContents = [];
        if (modelOutput.length > 0 && modelOutput.every((content) => content.role !== void 0)) {
          outputContents = modelOutput;
        } else {
          outputContents.push({
            role: "model",
            parts: []
          });
        }
        if (automaticFunctionCallingHistory && automaticFunctionCallingHistory.length > 0) {
          this.history.push(...extractCuratedHistory(automaticFunctionCallingHistory));
        } else {
          this.history.push(userInput);
        }
        this.history.push(...outputContents);
      }
    };
    ApiError = class _ApiError extends Error {
      static {
        __name(this, "ApiError");
      }
      constructor(options) {
        super(options.message);
        this.name = "ApiError";
        this.status = options.status;
        Object.setPrototypeOf(this, _ApiError.prototype);
      }
    };
    __name(listFilesConfigToMldev, "listFilesConfigToMldev");
    __name(listFilesParametersToMldev, "listFilesParametersToMldev");
    __name(fileStatusToMldev, "fileStatusToMldev");
    __name(fileToMldev, "fileToMldev");
    __name(createFileParametersToMldev, "createFileParametersToMldev");
    __name(getFileParametersToMldev, "getFileParametersToMldev");
    __name(deleteFileParametersToMldev, "deleteFileParametersToMldev");
    __name(fileStatusFromMldev, "fileStatusFromMldev");
    __name(fileFromMldev, "fileFromMldev");
    __name(listFilesResponseFromMldev, "listFilesResponseFromMldev");
    __name(createFileResponseFromMldev, "createFileResponseFromMldev");
    __name(deleteFileResponseFromMldev, "deleteFileResponseFromMldev");
    Files = class extends BaseModule {
      static {
        __name(this, "Files");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        this.list = async (params = {}) => {
          return new Pager(PagedItem.PAGED_ITEM_FILES, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
      }
      /**
       * Uploads a file asynchronously to the Gemini API.
       * This method is not available in Vertex AI.
       * Supported upload sources:
       * - Node.js: File path (string) or Blob object.
       * - Browser: Blob object (e.g., File).
       *
       * @remarks
       * The `mimeType` can be specified in the `config` parameter. If omitted:
       *  - For file path (string) inputs, the `mimeType` will be inferred from the
       *     file extension.
       *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
       *     property.
       * Somex eamples for file extension to mimeType mapping:
       * .txt -> text/plain
       * .json -> application/json
       * .jpg  -> image/jpeg
       * .png -> image/png
       * .mp3 -> audio/mpeg
       * .mp4 -> video/mp4
       *
       * This section can contain multiple paragraphs and code examples.
       *
       * @param params - Optional parameters specified in the
       *        `types.UploadFileParameters` interface.
       *         @see {@link types.UploadFileParameters#config} for the optional
       *         config in the parameters.
       * @return A promise that resolves to a `types.File` object.
       * @throws An error if called on a Vertex AI client.
       * @throws An error if the `mimeType` is not provided and can not be inferred,
       * the `mimeType` can be provided in the `params.config` parameter.
       * @throws An error occurs if a suitable upload location cannot be established.
       *
       * @example
       * The following code uploads a file to Gemini API.
       *
       * ```ts
       * const file = await ai.files.upload({file: 'file.txt', config: {
       *   mimeType: 'text/plain',
       * }});
       * console.log(file.name);
       * ```
       */
      async upload(params) {
        if (this.apiClient.isVertexAI()) {
          throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
        }
        return this.apiClient.uploadFile(params.file, params.config).then((response) => {
          const file = fileFromMldev(response);
          return file;
        });
      }
      /**
       * Downloads a remotely stored file asynchronously to a location specified in
       * the `params` object. This method only works on Node environment, to
       * download files in the browser, use a browser compliant method like an <a>
       * tag.
       *
       * @param params - The parameters for the download request.
       *
       * @example
       * The following code downloads an example file named "files/mehozpxf877d" as
       * "file.txt".
       *
       * ```ts
       * await ai.files.download({file: file.name, downloadPath: 'file.txt'});
       * ```
       */
      async download(params) {
        await this.apiClient.downloadFile(params);
      }
      async listInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("This method is only supported by the Gemini Developer API.");
        } else {
          const body = listFilesParametersToMldev(params);
          path = formatMap("files", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listFilesResponseFromMldev(apiResponse);
            const typedResp = new ListFilesResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      async createInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("This method is only supported by the Gemini Developer API.");
        } else {
          const body = createFileParametersToMldev(params);
          path = formatMap("upload/v1beta/files", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = createFileResponseFromMldev(apiResponse);
            const typedResp = new CreateFileResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Retrieves the file information from the service.
       *
       * @param params - The parameters for the get request
       * @return The Promise that resolves to the types.File object requested.
       *
       * @example
       * ```ts
       * const config: GetFileParameters = {
       *   name: fileName,
       * };
       * file = await ai.files.get(config);
       * console.log(file.name);
       * ```
       */
      async get(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("This method is only supported by the Gemini Developer API.");
        } else {
          const body = getFileParametersToMldev(params);
          path = formatMap("files/{file}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = fileFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Deletes a remotely stored file.
       *
       * @param params - The parameters for the delete request.
       * @return The DeleteFileResponse, the response for the delete method.
       *
       * @example
       * The following code deletes an example file named "files/mehozpxf877d".
       *
       * ```ts
       * await ai.files.delete({name: file.name});
       * ```
       */
      async delete(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("This method is only supported by the Gemini Developer API.");
        } else {
          const body = deleteFileParametersToMldev(params);
          path = formatMap("files/{file}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then(() => {
            const resp = deleteFileResponseFromMldev();
            const typedResp = new DeleteFileResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
    };
    __name(prebuiltVoiceConfigToMldev$2, "prebuiltVoiceConfigToMldev$2");
    __name(voiceConfigToMldev$2, "voiceConfigToMldev$2");
    __name(speakerVoiceConfigToMldev$2, "speakerVoiceConfigToMldev$2");
    __name(multiSpeakerVoiceConfigToMldev$2, "multiSpeakerVoiceConfigToMldev$2");
    __name(speechConfigToMldev$2, "speechConfigToMldev$2");
    __name(videoMetadataToMldev$2, "videoMetadataToMldev$2");
    __name(blobToMldev$2, "blobToMldev$2");
    __name(fileDataToMldev$2, "fileDataToMldev$2");
    __name(partToMldev$2, "partToMldev$2");
    __name(contentToMldev$2, "contentToMldev$2");
    __name(functionDeclarationToMldev$2, "functionDeclarationToMldev$2");
    __name(intervalToMldev$2, "intervalToMldev$2");
    __name(googleSearchToMldev$2, "googleSearchToMldev$2");
    __name(dynamicRetrievalConfigToMldev$2, "dynamicRetrievalConfigToMldev$2");
    __name(googleSearchRetrievalToMldev$2, "googleSearchRetrievalToMldev$2");
    __name(urlContextToMldev$2, "urlContextToMldev$2");
    __name(toolToMldev$2, "toolToMldev$2");
    __name(sessionResumptionConfigToMldev$1, "sessionResumptionConfigToMldev$1");
    __name(audioTranscriptionConfigToMldev$1, "audioTranscriptionConfigToMldev$1");
    __name(automaticActivityDetectionToMldev$1, "automaticActivityDetectionToMldev$1");
    __name(realtimeInputConfigToMldev$1, "realtimeInputConfigToMldev$1");
    __name(slidingWindowToMldev$1, "slidingWindowToMldev$1");
    __name(contextWindowCompressionConfigToMldev$1, "contextWindowCompressionConfigToMldev$1");
    __name(proactivityConfigToMldev$1, "proactivityConfigToMldev$1");
    __name(liveConnectConfigToMldev$1, "liveConnectConfigToMldev$1");
    __name(liveConnectParametersToMldev, "liveConnectParametersToMldev");
    __name(activityStartToMldev, "activityStartToMldev");
    __name(activityEndToMldev, "activityEndToMldev");
    __name(liveSendRealtimeInputParametersToMldev, "liveSendRealtimeInputParametersToMldev");
    __name(weightedPromptToMldev, "weightedPromptToMldev");
    __name(liveMusicSetWeightedPromptsParametersToMldev, "liveMusicSetWeightedPromptsParametersToMldev");
    __name(liveMusicGenerationConfigToMldev, "liveMusicGenerationConfigToMldev");
    __name(liveMusicSetConfigParametersToMldev, "liveMusicSetConfigParametersToMldev");
    __name(liveMusicClientSetupToMldev, "liveMusicClientSetupToMldev");
    __name(liveMusicClientContentToMldev, "liveMusicClientContentToMldev");
    __name(liveMusicClientMessageToMldev, "liveMusicClientMessageToMldev");
    __name(prebuiltVoiceConfigToVertex$1, "prebuiltVoiceConfigToVertex$1");
    __name(voiceConfigToVertex$1, "voiceConfigToVertex$1");
    __name(speechConfigToVertex$1, "speechConfigToVertex$1");
    __name(videoMetadataToVertex$1, "videoMetadataToVertex$1");
    __name(blobToVertex$1, "blobToVertex$1");
    __name(fileDataToVertex$1, "fileDataToVertex$1");
    __name(partToVertex$1, "partToVertex$1");
    __name(contentToVertex$1, "contentToVertex$1");
    __name(functionDeclarationToVertex$1, "functionDeclarationToVertex$1");
    __name(intervalToVertex$1, "intervalToVertex$1");
    __name(googleSearchToVertex$1, "googleSearchToVertex$1");
    __name(dynamicRetrievalConfigToVertex$1, "dynamicRetrievalConfigToVertex$1");
    __name(googleSearchRetrievalToVertex$1, "googleSearchRetrievalToVertex$1");
    __name(enterpriseWebSearchToVertex$1, "enterpriseWebSearchToVertex$1");
    __name(apiKeyConfigToVertex$1, "apiKeyConfigToVertex$1");
    __name(authConfigToVertex$1, "authConfigToVertex$1");
    __name(googleMapsToVertex$1, "googleMapsToVertex$1");
    __name(urlContextToVertex$1, "urlContextToVertex$1");
    __name(toolToVertex$1, "toolToVertex$1");
    __name(sessionResumptionConfigToVertex, "sessionResumptionConfigToVertex");
    __name(audioTranscriptionConfigToVertex, "audioTranscriptionConfigToVertex");
    __name(automaticActivityDetectionToVertex, "automaticActivityDetectionToVertex");
    __name(realtimeInputConfigToVertex, "realtimeInputConfigToVertex");
    __name(slidingWindowToVertex, "slidingWindowToVertex");
    __name(contextWindowCompressionConfigToVertex, "contextWindowCompressionConfigToVertex");
    __name(proactivityConfigToVertex, "proactivityConfigToVertex");
    __name(liveConnectConfigToVertex, "liveConnectConfigToVertex");
    __name(liveConnectParametersToVertex, "liveConnectParametersToVertex");
    __name(activityStartToVertex, "activityStartToVertex");
    __name(activityEndToVertex, "activityEndToVertex");
    __name(liveSendRealtimeInputParametersToVertex, "liveSendRealtimeInputParametersToVertex");
    __name(liveServerSetupCompleteFromMldev, "liveServerSetupCompleteFromMldev");
    __name(videoMetadataFromMldev$1, "videoMetadataFromMldev$1");
    __name(blobFromMldev$1, "blobFromMldev$1");
    __name(fileDataFromMldev$1, "fileDataFromMldev$1");
    __name(partFromMldev$1, "partFromMldev$1");
    __name(contentFromMldev$1, "contentFromMldev$1");
    __name(transcriptionFromMldev, "transcriptionFromMldev");
    __name(urlMetadataFromMldev$1, "urlMetadataFromMldev$1");
    __name(urlContextMetadataFromMldev$1, "urlContextMetadataFromMldev$1");
    __name(liveServerContentFromMldev, "liveServerContentFromMldev");
    __name(functionCallFromMldev, "functionCallFromMldev");
    __name(liveServerToolCallFromMldev, "liveServerToolCallFromMldev");
    __name(liveServerToolCallCancellationFromMldev, "liveServerToolCallCancellationFromMldev");
    __name(modalityTokenCountFromMldev, "modalityTokenCountFromMldev");
    __name(usageMetadataFromMldev, "usageMetadataFromMldev");
    __name(liveServerGoAwayFromMldev, "liveServerGoAwayFromMldev");
    __name(liveServerSessionResumptionUpdateFromMldev, "liveServerSessionResumptionUpdateFromMldev");
    __name(liveServerMessageFromMldev, "liveServerMessageFromMldev");
    __name(liveMusicServerSetupCompleteFromMldev, "liveMusicServerSetupCompleteFromMldev");
    __name(weightedPromptFromMldev, "weightedPromptFromMldev");
    __name(liveMusicClientContentFromMldev, "liveMusicClientContentFromMldev");
    __name(liveMusicGenerationConfigFromMldev, "liveMusicGenerationConfigFromMldev");
    __name(liveMusicSourceMetadataFromMldev, "liveMusicSourceMetadataFromMldev");
    __name(audioChunkFromMldev, "audioChunkFromMldev");
    __name(liveMusicServerContentFromMldev, "liveMusicServerContentFromMldev");
    __name(liveMusicFilteredPromptFromMldev, "liveMusicFilteredPromptFromMldev");
    __name(liveMusicServerMessageFromMldev, "liveMusicServerMessageFromMldev");
    __name(liveServerSetupCompleteFromVertex, "liveServerSetupCompleteFromVertex");
    __name(videoMetadataFromVertex$1, "videoMetadataFromVertex$1");
    __name(blobFromVertex$1, "blobFromVertex$1");
    __name(fileDataFromVertex$1, "fileDataFromVertex$1");
    __name(partFromVertex$1, "partFromVertex$1");
    __name(contentFromVertex$1, "contentFromVertex$1");
    __name(transcriptionFromVertex, "transcriptionFromVertex");
    __name(liveServerContentFromVertex, "liveServerContentFromVertex");
    __name(functionCallFromVertex, "functionCallFromVertex");
    __name(liveServerToolCallFromVertex, "liveServerToolCallFromVertex");
    __name(liveServerToolCallCancellationFromVertex, "liveServerToolCallCancellationFromVertex");
    __name(modalityTokenCountFromVertex, "modalityTokenCountFromVertex");
    __name(usageMetadataFromVertex, "usageMetadataFromVertex");
    __name(liveServerGoAwayFromVertex, "liveServerGoAwayFromVertex");
    __name(liveServerSessionResumptionUpdateFromVertex, "liveServerSessionResumptionUpdateFromVertex");
    __name(liveServerMessageFromVertex, "liveServerMessageFromVertex");
    __name(videoMetadataToMldev$1, "videoMetadataToMldev$1");
    __name(blobToMldev$1, "blobToMldev$1");
    __name(fileDataToMldev$1, "fileDataToMldev$1");
    __name(partToMldev$1, "partToMldev$1");
    __name(contentToMldev$1, "contentToMldev$1");
    __name(schemaToMldev, "schemaToMldev");
    __name(safetySettingToMldev, "safetySettingToMldev");
    __name(functionDeclarationToMldev$1, "functionDeclarationToMldev$1");
    __name(intervalToMldev$1, "intervalToMldev$1");
    __name(googleSearchToMldev$1, "googleSearchToMldev$1");
    __name(dynamicRetrievalConfigToMldev$1, "dynamicRetrievalConfigToMldev$1");
    __name(googleSearchRetrievalToMldev$1, "googleSearchRetrievalToMldev$1");
    __name(urlContextToMldev$1, "urlContextToMldev$1");
    __name(toolToMldev$1, "toolToMldev$1");
    __name(functionCallingConfigToMldev, "functionCallingConfigToMldev");
    __name(latLngToMldev, "latLngToMldev");
    __name(retrievalConfigToMldev, "retrievalConfigToMldev");
    __name(toolConfigToMldev, "toolConfigToMldev");
    __name(prebuiltVoiceConfigToMldev$1, "prebuiltVoiceConfigToMldev$1");
    __name(voiceConfigToMldev$1, "voiceConfigToMldev$1");
    __name(speakerVoiceConfigToMldev$1, "speakerVoiceConfigToMldev$1");
    __name(multiSpeakerVoiceConfigToMldev$1, "multiSpeakerVoiceConfigToMldev$1");
    __name(speechConfigToMldev$1, "speechConfigToMldev$1");
    __name(thinkingConfigToMldev, "thinkingConfigToMldev");
    __name(generateContentConfigToMldev, "generateContentConfigToMldev");
    __name(generateContentParametersToMldev, "generateContentParametersToMldev");
    __name(embedContentConfigToMldev, "embedContentConfigToMldev");
    __name(embedContentParametersToMldev, "embedContentParametersToMldev");
    __name(generateImagesConfigToMldev, "generateImagesConfigToMldev");
    __name(generateImagesParametersToMldev, "generateImagesParametersToMldev");
    __name(getModelParametersToMldev, "getModelParametersToMldev");
    __name(listModelsConfigToMldev, "listModelsConfigToMldev");
    __name(listModelsParametersToMldev, "listModelsParametersToMldev");
    __name(updateModelConfigToMldev, "updateModelConfigToMldev");
    __name(updateModelParametersToMldev, "updateModelParametersToMldev");
    __name(deleteModelParametersToMldev, "deleteModelParametersToMldev");
    __name(countTokensConfigToMldev, "countTokensConfigToMldev");
    __name(countTokensParametersToMldev, "countTokensParametersToMldev");
    __name(imageToMldev, "imageToMldev");
    __name(generateVideosConfigToMldev, "generateVideosConfigToMldev");
    __name(generateVideosParametersToMldev, "generateVideosParametersToMldev");
    __name(videoMetadataToVertex, "videoMetadataToVertex");
    __name(blobToVertex, "blobToVertex");
    __name(fileDataToVertex, "fileDataToVertex");
    __name(partToVertex, "partToVertex");
    __name(contentToVertex, "contentToVertex");
    __name(schemaToVertex, "schemaToVertex");
    __name(modelSelectionConfigToVertex, "modelSelectionConfigToVertex");
    __name(safetySettingToVertex, "safetySettingToVertex");
    __name(functionDeclarationToVertex, "functionDeclarationToVertex");
    __name(intervalToVertex, "intervalToVertex");
    __name(googleSearchToVertex, "googleSearchToVertex");
    __name(dynamicRetrievalConfigToVertex, "dynamicRetrievalConfigToVertex");
    __name(googleSearchRetrievalToVertex, "googleSearchRetrievalToVertex");
    __name(enterpriseWebSearchToVertex, "enterpriseWebSearchToVertex");
    __name(apiKeyConfigToVertex, "apiKeyConfigToVertex");
    __name(authConfigToVertex, "authConfigToVertex");
    __name(googleMapsToVertex, "googleMapsToVertex");
    __name(urlContextToVertex, "urlContextToVertex");
    __name(toolToVertex, "toolToVertex");
    __name(functionCallingConfigToVertex, "functionCallingConfigToVertex");
    __name(latLngToVertex, "latLngToVertex");
    __name(retrievalConfigToVertex, "retrievalConfigToVertex");
    __name(toolConfigToVertex, "toolConfigToVertex");
    __name(prebuiltVoiceConfigToVertex, "prebuiltVoiceConfigToVertex");
    __name(voiceConfigToVertex, "voiceConfigToVertex");
    __name(speechConfigToVertex, "speechConfigToVertex");
    __name(thinkingConfigToVertex, "thinkingConfigToVertex");
    __name(generateContentConfigToVertex, "generateContentConfigToVertex");
    __name(generateContentParametersToVertex, "generateContentParametersToVertex");
    __name(embedContentConfigToVertex, "embedContentConfigToVertex");
    __name(embedContentParametersToVertex, "embedContentParametersToVertex");
    __name(generateImagesConfigToVertex, "generateImagesConfigToVertex");
    __name(generateImagesParametersToVertex, "generateImagesParametersToVertex");
    __name(imageToVertex, "imageToVertex");
    __name(maskReferenceConfigToVertex, "maskReferenceConfigToVertex");
    __name(controlReferenceConfigToVertex, "controlReferenceConfigToVertex");
    __name(styleReferenceConfigToVertex, "styleReferenceConfigToVertex");
    __name(subjectReferenceConfigToVertex, "subjectReferenceConfigToVertex");
    __name(referenceImageAPIInternalToVertex, "referenceImageAPIInternalToVertex");
    __name(editImageConfigToVertex, "editImageConfigToVertex");
    __name(editImageParametersInternalToVertex, "editImageParametersInternalToVertex");
    __name(upscaleImageAPIConfigInternalToVertex, "upscaleImageAPIConfigInternalToVertex");
    __name(upscaleImageAPIParametersInternalToVertex, "upscaleImageAPIParametersInternalToVertex");
    __name(productImageToVertex, "productImageToVertex");
    __name(recontextImageSourceToVertex, "recontextImageSourceToVertex");
    __name(recontextImageConfigToVertex, "recontextImageConfigToVertex");
    __name(recontextImageParametersToVertex, "recontextImageParametersToVertex");
    __name(getModelParametersToVertex, "getModelParametersToVertex");
    __name(listModelsConfigToVertex, "listModelsConfigToVertex");
    __name(listModelsParametersToVertex, "listModelsParametersToVertex");
    __name(updateModelConfigToVertex, "updateModelConfigToVertex");
    __name(updateModelParametersToVertex, "updateModelParametersToVertex");
    __name(deleteModelParametersToVertex, "deleteModelParametersToVertex");
    __name(countTokensConfigToVertex, "countTokensConfigToVertex");
    __name(countTokensParametersToVertex, "countTokensParametersToVertex");
    __name(computeTokensParametersToVertex, "computeTokensParametersToVertex");
    __name(videoToVertex, "videoToVertex");
    __name(generateVideosConfigToVertex, "generateVideosConfigToVertex");
    __name(generateVideosParametersToVertex, "generateVideosParametersToVertex");
    __name(videoMetadataFromMldev, "videoMetadataFromMldev");
    __name(blobFromMldev, "blobFromMldev");
    __name(fileDataFromMldev, "fileDataFromMldev");
    __name(partFromMldev, "partFromMldev");
    __name(contentFromMldev, "contentFromMldev");
    __name(citationMetadataFromMldev, "citationMetadataFromMldev");
    __name(urlMetadataFromMldev, "urlMetadataFromMldev");
    __name(urlContextMetadataFromMldev, "urlContextMetadataFromMldev");
    __name(candidateFromMldev, "candidateFromMldev");
    __name(generateContentResponseFromMldev, "generateContentResponseFromMldev");
    __name(contentEmbeddingFromMldev, "contentEmbeddingFromMldev");
    __name(embedContentMetadataFromMldev, "embedContentMetadataFromMldev");
    __name(embedContentResponseFromMldev, "embedContentResponseFromMldev");
    __name(imageFromMldev, "imageFromMldev");
    __name(safetyAttributesFromMldev, "safetyAttributesFromMldev");
    __name(generatedImageFromMldev, "generatedImageFromMldev");
    __name(generateImagesResponseFromMldev, "generateImagesResponseFromMldev");
    __name(tunedModelInfoFromMldev, "tunedModelInfoFromMldev");
    __name(modelFromMldev, "modelFromMldev");
    __name(listModelsResponseFromMldev, "listModelsResponseFromMldev");
    __name(deleteModelResponseFromMldev, "deleteModelResponseFromMldev");
    __name(countTokensResponseFromMldev, "countTokensResponseFromMldev");
    __name(videoFromMldev, "videoFromMldev");
    __name(generatedVideoFromMldev, "generatedVideoFromMldev");
    __name(generateVideosResponseFromMldev, "generateVideosResponseFromMldev");
    __name(generateVideosOperationFromMldev, "generateVideosOperationFromMldev");
    __name(videoMetadataFromVertex, "videoMetadataFromVertex");
    __name(blobFromVertex, "blobFromVertex");
    __name(fileDataFromVertex, "fileDataFromVertex");
    __name(partFromVertex, "partFromVertex");
    __name(contentFromVertex, "contentFromVertex");
    __name(citationMetadataFromVertex, "citationMetadataFromVertex");
    __name(urlMetadataFromVertex, "urlMetadataFromVertex");
    __name(urlContextMetadataFromVertex, "urlContextMetadataFromVertex");
    __name(candidateFromVertex, "candidateFromVertex");
    __name(generateContentResponseFromVertex, "generateContentResponseFromVertex");
    __name(contentEmbeddingStatisticsFromVertex, "contentEmbeddingStatisticsFromVertex");
    __name(contentEmbeddingFromVertex, "contentEmbeddingFromVertex");
    __name(embedContentMetadataFromVertex, "embedContentMetadataFromVertex");
    __name(embedContentResponseFromVertex, "embedContentResponseFromVertex");
    __name(imageFromVertex, "imageFromVertex");
    __name(safetyAttributesFromVertex, "safetyAttributesFromVertex");
    __name(generatedImageFromVertex, "generatedImageFromVertex");
    __name(generateImagesResponseFromVertex, "generateImagesResponseFromVertex");
    __name(editImageResponseFromVertex, "editImageResponseFromVertex");
    __name(upscaleImageResponseFromVertex, "upscaleImageResponseFromVertex");
    __name(recontextImageResponseFromVertex, "recontextImageResponseFromVertex");
    __name(endpointFromVertex, "endpointFromVertex");
    __name(tunedModelInfoFromVertex, "tunedModelInfoFromVertex");
    __name(checkpointFromVertex, "checkpointFromVertex");
    __name(modelFromVertex, "modelFromVertex");
    __name(listModelsResponseFromVertex, "listModelsResponseFromVertex");
    __name(deleteModelResponseFromVertex, "deleteModelResponseFromVertex");
    __name(countTokensResponseFromVertex, "countTokensResponseFromVertex");
    __name(computeTokensResponseFromVertex, "computeTokensResponseFromVertex");
    __name(videoFromVertex, "videoFromVertex");
    __name(generatedVideoFromVertex, "generatedVideoFromVertex");
    __name(generateVideosResponseFromVertex, "generateVideosResponseFromVertex");
    __name(generateVideosOperationFromVertex, "generateVideosOperationFromVertex");
    CONTENT_TYPE_HEADER = "Content-Type";
    SERVER_TIMEOUT_HEADER = "X-Server-Timeout";
    USER_AGENT_HEADER = "User-Agent";
    GOOGLE_API_CLIENT_HEADER = "x-goog-api-client";
    SDK_VERSION = "1.13.0";
    LIBRARY_LABEL = `google-genai-sdk/${SDK_VERSION}`;
    VERTEX_AI_API_DEFAULT_VERSION = "v1beta1";
    GOOGLE_AI_API_DEFAULT_VERSION = "v1beta";
    responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
    ApiClient = class {
      static {
        __name(this, "ApiClient");
      }
      constructor(opts) {
        var _a, _b;
        this.clientOptions = Object.assign(Object.assign({}, opts), { project: opts.project, location: opts.location, apiKey: opts.apiKey, vertexai: opts.vertexai });
        const initHttpOptions = {};
        if (this.clientOptions.vertexai) {
          initHttpOptions.apiVersion = (_a = this.clientOptions.apiVersion) !== null && _a !== void 0 ? _a : VERTEX_AI_API_DEFAULT_VERSION;
          initHttpOptions.baseUrl = this.baseUrlFromProjectLocation();
          this.normalizeAuthParameters();
        } else {
          initHttpOptions.apiVersion = (_b = this.clientOptions.apiVersion) !== null && _b !== void 0 ? _b : GOOGLE_AI_API_DEFAULT_VERSION;
          initHttpOptions.baseUrl = `https://generativelanguage.googleapis.com/`;
        }
        initHttpOptions.headers = this.getDefaultHeaders();
        this.clientOptions.httpOptions = initHttpOptions;
        if (opts.httpOptions) {
          this.clientOptions.httpOptions = this.patchHttpOptions(initHttpOptions, opts.httpOptions);
        }
      }
      /**
       * Determines the base URL for Vertex AI based on project and location.
       * Uses the global endpoint if location is 'global' or if project/location
       * are not specified (implying API key usage).
       * @private
       */
      baseUrlFromProjectLocation() {
        if (this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global") {
          return `https://${this.clientOptions.location}-aiplatform.googleapis.com/`;
        }
        return `https://aiplatform.googleapis.com/`;
      }
      /**
       * Normalizes authentication parameters for Vertex AI.
       * If project and location are provided, API key is cleared.
       * If project and location are not provided (implying API key usage),
       * project and location are cleared.
       * @private
       */
      normalizeAuthParameters() {
        if (this.clientOptions.project && this.clientOptions.location) {
          this.clientOptions.apiKey = void 0;
          return;
        }
        this.clientOptions.project = void 0;
        this.clientOptions.location = void 0;
      }
      isVertexAI() {
        var _a;
        return (_a = this.clientOptions.vertexai) !== null && _a !== void 0 ? _a : false;
      }
      getProject() {
        return this.clientOptions.project;
      }
      getLocation() {
        return this.clientOptions.location;
      }
      getApiVersion() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0) {
          return this.clientOptions.httpOptions.apiVersion;
        }
        throw new Error("API version is not set.");
      }
      getBaseUrl() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0) {
          return this.clientOptions.httpOptions.baseUrl;
        }
        throw new Error("Base URL is not set.");
      }
      getRequestUrl() {
        return this.getRequestUrlInternal(this.clientOptions.httpOptions);
      }
      getHeaders() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0) {
          return this.clientOptions.httpOptions.headers;
        } else {
          throw new Error("Headers are not set.");
        }
      }
      getRequestUrlInternal(httpOptions) {
        if (!httpOptions || httpOptions.baseUrl === void 0 || httpOptions.apiVersion === void 0) {
          throw new Error("HTTP options are not correctly set.");
        }
        const baseUrl = httpOptions.baseUrl.endsWith("/") ? httpOptions.baseUrl.slice(0, -1) : httpOptions.baseUrl;
        const urlElement = [baseUrl];
        if (httpOptions.apiVersion && httpOptions.apiVersion !== "") {
          urlElement.push(httpOptions.apiVersion);
        }
        return urlElement.join("/");
      }
      getBaseResourcePath() {
        return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
      }
      getApiKey() {
        return this.clientOptions.apiKey;
      }
      getWebsocketBaseUrl() {
        const baseUrl = this.getBaseUrl();
        const urlParts = new URL(baseUrl);
        urlParts.protocol = urlParts.protocol == "http:" ? "ws" : "wss";
        return urlParts.toString();
      }
      setBaseUrl(url) {
        if (this.clientOptions.httpOptions) {
          this.clientOptions.httpOptions.baseUrl = url;
        } else {
          throw new Error("HTTP options are not correctly set.");
        }
      }
      constructUrl(path, httpOptions, prependProjectLocation) {
        const urlElement = [this.getRequestUrlInternal(httpOptions)];
        if (prependProjectLocation) {
          urlElement.push(this.getBaseResourcePath());
        }
        if (path !== "") {
          urlElement.push(path);
        }
        const url = new URL(`${urlElement.join("/")}`);
        return url;
      }
      shouldPrependVertexProjectPath(request) {
        if (this.clientOptions.apiKey) {
          return false;
        }
        if (!this.clientOptions.vertexai) {
          return false;
        }
        if (request.path.startsWith("projects/")) {
          return false;
        }
        if (request.httpMethod === "GET" && request.path.startsWith("publishers/google/models")) {
          return false;
        }
        return true;
      }
      async request(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) {
          patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        }
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (request.queryParams) {
          for (const [key, value] of Object.entries(request.queryParams)) {
            url.searchParams.append(key, String(value));
          }
        }
        let requestInit = {};
        if (request.httpMethod === "GET") {
          if (request.body && request.body !== "{}") {
            throw new Error("Request body should be empty for GET request, but got non empty request body");
          }
        } else {
          requestInit.body = request.body;
        }
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.unaryApiCall(url, requestInit, request.httpMethod);
      }
      patchHttpOptions(baseHttpOptions, requestHttpOptions) {
        const patchedHttpOptions = JSON.parse(JSON.stringify(baseHttpOptions));
        for (const [key, value] of Object.entries(requestHttpOptions)) {
          if (typeof value === "object") {
            patchedHttpOptions[key] = Object.assign(Object.assign({}, patchedHttpOptions[key]), value);
          } else if (value !== void 0) {
            patchedHttpOptions[key] = value;
          }
        }
        return patchedHttpOptions;
      }
      async requestStream(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) {
          patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        }
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (!url.searchParams.has("alt") || url.searchParams.get("alt") !== "sse") {
          url.searchParams.set("alt", "sse");
        }
        let requestInit = {};
        requestInit.body = request.body;
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.streamApiCall(url, requestInit, request.httpMethod);
      }
      async includeExtraHttpOptionsToRequestInit(requestInit, httpOptions, abortSignal) {
        if (httpOptions && httpOptions.timeout || abortSignal) {
          const abortController = new AbortController();
          const signal = abortController.signal;
          if (httpOptions.timeout && (httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.timeout) > 0) {
            const timeoutHandle = setTimeout(() => abortController.abort(), httpOptions.timeout);
            if (timeoutHandle && typeof timeoutHandle.unref === "function") {
              timeoutHandle.unref();
            }
          }
          if (abortSignal) {
            abortSignal.addEventListener("abort", () => {
              abortController.abort();
            });
          }
          requestInit.signal = signal;
        }
        if (httpOptions && httpOptions.extraBody !== null) {
          includeExtraBodyToRequestInit(requestInit, httpOptions.extraBody);
        }
        requestInit.headers = await this.getHeadersInternal(httpOptions);
        return requestInit;
      }
      async unaryApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), { method: httpMethod })).then(async (response) => {
          await throwErrorIfNotOK(response);
          return new HttpResponse(response);
        }).catch((e) => {
          if (e instanceof Error) {
            throw e;
          } else {
            throw new Error(JSON.stringify(e));
          }
        });
      }
      async streamApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), { method: httpMethod })).then(async (response) => {
          await throwErrorIfNotOK(response);
          return this.processStreamResponse(response);
        }).catch((e) => {
          if (e instanceof Error) {
            throw e;
          } else {
            throw new Error(JSON.stringify(e));
          }
        });
      }
      processStreamResponse(response) {
        var _a;
        return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function* processStreamResponse_1() {
          const reader = (_a = response === null || response === void 0 ? void 0 : response.body) === null || _a === void 0 ? void 0 : _a.getReader();
          const decoder = new TextDecoder("utf-8");
          if (!reader) {
            throw new Error("Response body is empty");
          }
          try {
            let buffer = "";
            while (true) {
              const { done, value } = yield __await(reader.read());
              if (done) {
                if (buffer.trim().length > 0) {
                  throw new Error("Incomplete JSON segment at the end");
                }
                break;
              }
              const chunkString = decoder.decode(value, { stream: true });
              try {
                const chunkJson = JSON.parse(chunkString);
                if ("error" in chunkJson) {
                  const errorJson = JSON.parse(JSON.stringify(chunkJson["error"]));
                  const status = errorJson["status"];
                  const code = errorJson["code"];
                  const errorMessage = `got status: ${status}. ${JSON.stringify(chunkJson)}`;
                  if (code >= 400 && code < 600) {
                    const apiError = new ApiError({
                      message: errorMessage,
                      status: code
                    });
                    throw apiError;
                  }
                }
              } catch (e) {
                const error3 = e;
                if (error3.name === "ApiError") {
                  throw e;
                }
              }
              buffer += chunkString;
              let match2 = buffer.match(responseLineRE);
              while (match2) {
                const processedChunkString = match2[1];
                try {
                  const partialResponse = new Response(processedChunkString, {
                    headers: response === null || response === void 0 ? void 0 : response.headers,
                    status: response === null || response === void 0 ? void 0 : response.status,
                    statusText: response === null || response === void 0 ? void 0 : response.statusText
                  });
                  yield yield __await(new HttpResponse(partialResponse));
                  buffer = buffer.slice(match2[0].length);
                  match2 = buffer.match(responseLineRE);
                } catch (e) {
                  throw new Error(`exception parsing stream chunk ${processedChunkString}. ${e}`);
                }
              }
            }
          } finally {
            reader.releaseLock();
          }
        }, "processStreamResponse_1"));
      }
      async apiCall(url, requestInit) {
        return fetch(url, requestInit).catch((e) => {
          throw new Error(`exception ${e} sending request`);
        });
      }
      getDefaultHeaders() {
        const headers = {};
        const versionHeaderValue = LIBRARY_LABEL + " " + this.clientOptions.userAgentExtra;
        headers[USER_AGENT_HEADER] = versionHeaderValue;
        headers[GOOGLE_API_CLIENT_HEADER] = versionHeaderValue;
        headers[CONTENT_TYPE_HEADER] = "application/json";
        return headers;
      }
      async getHeadersInternal(httpOptions) {
        const headers = new Headers();
        if (httpOptions && httpOptions.headers) {
          for (const [key, value] of Object.entries(httpOptions.headers)) {
            headers.append(key, value);
          }
          if (httpOptions.timeout && httpOptions.timeout > 0) {
            headers.append(SERVER_TIMEOUT_HEADER, String(Math.ceil(httpOptions.timeout / 1e3)));
          }
        }
        await this.clientOptions.auth.addAuthHeaders(headers);
        return headers;
      }
      /**
       * Uploads a file asynchronously using Gemini API only, this is not supported
       * in Vertex AI.
       *
       * @param file The string path to the file to be uploaded or a Blob object.
       * @param config Optional parameters specified in the `UploadFileConfig`
       *     interface. @see {@link UploadFileConfig}
       * @return A promise that resolves to a `File` object.
       * @throws An error if called on a Vertex AI client.
       * @throws An error if the `mimeType` is not provided and can not be inferred,
       */
      async uploadFile(file, config2) {
        var _a;
        const fileToUpload = {};
        if (config2 != null) {
          fileToUpload.mimeType = config2.mimeType;
          fileToUpload.name = config2.name;
          fileToUpload.displayName = config2.displayName;
        }
        if (fileToUpload.name && !fileToUpload.name.startsWith("files/")) {
          fileToUpload.name = `files/${fileToUpload.name}`;
        }
        const uploader = this.clientOptions.uploader;
        const fileStat = await uploader.stat(file);
        fileToUpload.sizeBytes = String(fileStat.size);
        const mimeType = (_a = config2 === null || config2 === void 0 ? void 0 : config2.mimeType) !== null && _a !== void 0 ? _a : fileStat.type;
        if (mimeType === void 0 || mimeType === "") {
          throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
        }
        fileToUpload.mimeType = mimeType;
        const uploadUrl = await this.fetchUploadUrl(fileToUpload, config2);
        return uploader.upload(file, uploadUrl, this);
      }
      /**
       * Downloads a file asynchronously to the specified path.
       *
       * @params params - The parameters for the download request, see {@link
       * DownloadFileParameters}
       */
      async downloadFile(params) {
        const downloader = this.clientOptions.downloader;
        await downloader.download(params, this);
      }
      async fetchUploadUrl(file, config2) {
        var _a;
        let httpOptions = {};
        if (config2 === null || config2 === void 0 ? void 0 : config2.httpOptions) {
          httpOptions = config2.httpOptions;
        } else {
          httpOptions = {
            apiVersion: "",
            headers: {
              "Content-Type": "application/json",
              "X-Goog-Upload-Protocol": "resumable",
              "X-Goog-Upload-Command": "start",
              "X-Goog-Upload-Header-Content-Length": `${file.sizeBytes}`,
              "X-Goog-Upload-Header-Content-Type": `${file.mimeType}`
            }
          };
        }
        const body = {
          "file": file
        };
        const httpResponse = await this.request({
          path: formatMap("upload/v1beta/files", body["_url"]),
          body: JSON.stringify(body),
          httpMethod: "POST",
          httpOptions
        });
        if (!httpResponse || !(httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers)) {
          throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
        }
        const uploadUrl = (_a = httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers) === null || _a === void 0 ? void 0 : _a["x-goog-upload-url"];
        if (uploadUrl === void 0) {
          throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
        }
        return uploadUrl;
      }
    };
    __name(throwErrorIfNotOK, "throwErrorIfNotOK");
    __name(includeExtraBodyToRequestInit, "includeExtraBodyToRequestInit");
    MCP_LABEL = "mcp_used/unknown";
    hasMcpToolUsageFromMcpToTool = false;
    __name(hasMcpToolUsage, "hasMcpToolUsage");
    __name(setMcpUsageHeader, "setMcpUsageHeader");
    __name(isMcpCallableTool, "isMcpCallableTool");
    __name(listAllTools, "listAllTools");
    McpCallableTool = class _McpCallableTool {
      static {
        __name(this, "McpCallableTool");
      }
      constructor(mcpClients = [], config2) {
        this.mcpTools = [];
        this.functionNameToMcpClient = {};
        this.mcpClients = mcpClients;
        this.config = config2;
      }
      /**
       * Creates a McpCallableTool.
       */
      static create(mcpClients, config2) {
        return new _McpCallableTool(mcpClients, config2);
      }
      /**
       * Validates the function names are not duplicate and initialize the function
       * name to MCP client mapping.
       *
       * @throws {Error} if the MCP tools from the MCP clients have duplicate tool
       *     names.
       */
      async initialize() {
        var _a, e_1, _b, _c;
        if (this.mcpTools.length > 0) {
          return;
        }
        const functionMap = {};
        const mcpTools = [];
        for (const mcpClient of this.mcpClients) {
          try {
            for (var _d = true, _e = (e_1 = void 0, __asyncValues(listAllTools(mcpClient))), _f; _f = await _e.next(), _a = _f.done, !_a; _d = true) {
              _c = _f.value;
              _d = false;
              const mcpTool = _c;
              mcpTools.push(mcpTool);
              const mcpToolName = mcpTool.name;
              if (functionMap[mcpToolName]) {
                throw new Error(`Duplicate function name ${mcpToolName} found in MCP tools. Please ensure function names are unique.`);
              }
              functionMap[mcpToolName] = mcpClient;
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (!_d && !_a && (_b = _e.return)) await _b.call(_e);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        this.mcpTools = mcpTools;
        this.functionNameToMcpClient = functionMap;
      }
      async tool() {
        await this.initialize();
        return mcpToolsToGeminiTool(this.mcpTools, this.config);
      }
      async callTool(functionCalls) {
        await this.initialize();
        const functionCallResponseParts = [];
        for (const functionCall of functionCalls) {
          if (functionCall.name in this.functionNameToMcpClient) {
            const mcpClient = this.functionNameToMcpClient[functionCall.name];
            let requestOptions = void 0;
            if (this.config.timeout) {
              requestOptions = {
                timeout: this.config.timeout
              };
            }
            const callToolResponse = await mcpClient.callTool(
              {
                name: functionCall.name,
                arguments: functionCall.args
              },
              // Set the result schema to undefined to allow MCP to rely on the
              // default schema.
              void 0,
              requestOptions
            );
            functionCallResponseParts.push({
              functionResponse: {
                name: functionCall.name,
                response: callToolResponse.isError ? { error: callToolResponse } : callToolResponse
              }
            });
          }
        }
        return functionCallResponseParts;
      }
    };
    __name(isMcpClient, "isMcpClient");
    __name(mcpToTool, "mcpToTool");
    __name(handleWebSocketMessage$1, "handleWebSocketMessage$1");
    LiveMusic = class {
      static {
        __name(this, "LiveMusic");
      }
      constructor(apiClient, auth, webSocketFactory) {
        this.apiClient = apiClient;
        this.auth = auth;
        this.webSocketFactory = webSocketFactory;
      }
      /**
           Establishes a connection to the specified model and returns a
           LiveMusicSession object representing that connection.
      
           @experimental
      
           @remarks
      
           @param params - The parameters for establishing a connection to the model.
           @return A live session.
      
           @example
           ```ts
           let model = 'models/lyria-realtime-exp';
           const session = await ai.live.music.connect({
             model: model,
             callbacks: {
               onmessage: (e: MessageEvent) => {
                 console.log('Received message from the server: %s\n', debug(e.data));
               },
               onerror: (e: ErrorEvent) => {
                 console.log('Error occurred: %s\n', debug(e.error));
               },
               onclose: (e: CloseEvent) => {
                 console.log('Connection closed.');
               },
             },
           });
           ```
          */
      async connect(params) {
        var _a, _b;
        if (this.apiClient.isVertexAI()) {
          throw new Error("Live music is not supported for Vertex AI.");
        }
        console.warn("Live music generation is experimental and may change in future versions.");
        const websocketBaseUrl = this.apiClient.getWebsocketBaseUrl();
        const apiVersion = this.apiClient.getApiVersion();
        const headers = mapToHeaders$1(this.apiClient.getDefaultHeaders());
        const apiKey = this.apiClient.getApiKey();
        const url = `${websocketBaseUrl}/ws/google.ai.generativelanguage.${apiVersion}.GenerativeService.BidiGenerateMusic?key=${apiKey}`;
        let onopenResolve = /* @__PURE__ */ __name(() => {
        }, "onopenResolve");
        const onopenPromise = new Promise((resolve) => {
          onopenResolve = resolve;
        });
        const callbacks = params.callbacks;
        const onopenAwaitedCallback = /* @__PURE__ */ __name(function() {
          onopenResolve({});
        }, "onopenAwaitedCallback");
        const apiClient = this.apiClient;
        const websocketCallbacks = {
          onopen: onopenAwaitedCallback,
          onmessage: /* @__PURE__ */ __name((event) => {
            void handleWebSocketMessage$1(apiClient, callbacks.onmessage, event);
          }, "onmessage"),
          onerror: (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onerror) !== null && _a !== void 0 ? _a : function(e) {
          },
          onclose: (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onclose) !== null && _b !== void 0 ? _b : function(e) {
          }
        };
        const conn = this.webSocketFactory.create(url, headersToMap$1(headers), websocketCallbacks);
        conn.connect();
        await onopenPromise;
        const model = tModel(this.apiClient, params.model);
        const setup = liveMusicClientSetupToMldev({
          model
        });
        const clientMessage = liveMusicClientMessageToMldev({ setup });
        conn.send(JSON.stringify(clientMessage));
        return new LiveMusicSession(conn, this.apiClient);
      }
    };
    LiveMusicSession = class {
      static {
        __name(this, "LiveMusicSession");
      }
      constructor(conn, apiClient) {
        this.conn = conn;
        this.apiClient = apiClient;
      }
      /**
          Sets inputs to steer music generation. Updates the session's current
          weighted prompts.
      
          @param params - Contains one property, `weightedPrompts`.
      
            - `weightedPrompts` to send to the model; weights are normalized to
              sum to 1.0.
      
          @experimental
         */
      async setWeightedPrompts(params) {
        if (!params.weightedPrompts || Object.keys(params.weightedPrompts).length === 0) {
          throw new Error("Weighted prompts must be set and contain at least one entry.");
        }
        const setWeightedPromptsParameters = liveMusicSetWeightedPromptsParametersToMldev(params);
        const clientContent = liveMusicClientContentToMldev(setWeightedPromptsParameters);
        this.conn.send(JSON.stringify({ clientContent }));
      }
      /**
          Sets a configuration to the model. Updates the session's current
          music generation config.
      
          @param params - Contains one property, `musicGenerationConfig`.
      
            - `musicGenerationConfig` to set in the model. Passing an empty or
          undefined config to the model will reset the config to defaults.
      
          @experimental
         */
      async setMusicGenerationConfig(params) {
        if (!params.musicGenerationConfig) {
          params.musicGenerationConfig = {};
        }
        const setConfigParameters = liveMusicSetConfigParametersToMldev(params);
        const clientMessage = liveMusicClientMessageToMldev(setConfigParameters);
        this.conn.send(JSON.stringify(clientMessage));
      }
      sendPlaybackControl(playbackControl) {
        const clientMessage = liveMusicClientMessageToMldev({
          playbackControl
        });
        this.conn.send(JSON.stringify(clientMessage));
      }
      /**
       * Start the music stream.
       *
       * @experimental
       */
      play() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.PLAY);
      }
      /**
       * Temporarily halt the music stream. Use `play` to resume from the current
       * position.
       *
       * @experimental
       */
      pause() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.PAUSE);
      }
      /**
       * Stop the music stream and reset the state. Retains the current prompts
       * and config.
       *
       * @experimental
       */
      stop() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.STOP);
      }
      /**
       * Resets the context of the music generation without stopping it.
       * Retains the current prompts and config.
       *
       * @experimental
       */
      resetContext() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.RESET_CONTEXT);
      }
      /**
           Terminates the WebSocket connection.
      
           @experimental
         */
      close() {
        this.conn.close();
      }
    };
    __name(headersToMap$1, "headersToMap$1");
    __name(mapToHeaders$1, "mapToHeaders$1");
    FUNCTION_RESPONSE_REQUIRES_ID = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
    __name(handleWebSocketMessage, "handleWebSocketMessage");
    Live = class {
      static {
        __name(this, "Live");
      }
      constructor(apiClient, auth, webSocketFactory) {
        this.apiClient = apiClient;
        this.auth = auth;
        this.webSocketFactory = webSocketFactory;
        this.music = new LiveMusic(this.apiClient, this.auth, this.webSocketFactory);
      }
      /**
           Establishes a connection to the specified model with the given
           configuration and returns a Session object representing that connection.
      
           @experimental Built-in MCP support is an experimental feature, may change in
           future versions.
      
           @remarks
      
           @param params - The parameters for establishing a connection to the model.
           @return A live session.
      
           @example
           ```ts
           let model: string;
           if (GOOGLE_GENAI_USE_VERTEXAI) {
             model = 'gemini-2.0-flash-live-preview-04-09';
           } else {
             model = 'gemini-live-2.5-flash-preview';
           }
           const session = await ai.live.connect({
             model: model,
             config: {
               responseModalities: [Modality.AUDIO],
             },
             callbacks: {
               onopen: () => {
                 console.log('Connected to the socket.');
               },
               onmessage: (e: MessageEvent) => {
                 console.log('Received message from the server: %s\n', debug(e.data));
               },
               onerror: (e: ErrorEvent) => {
                 console.log('Error occurred: %s\n', debug(e.error));
               },
               onclose: (e: CloseEvent) => {
                 console.log('Connection closed.');
               },
             },
           });
           ```
          */
      async connect(params) {
        var _a, _b, _c, _d, _e, _f;
        if (params.config && params.config.httpOptions) {
          throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
        }
        const websocketBaseUrl = this.apiClient.getWebsocketBaseUrl();
        const apiVersion = this.apiClient.getApiVersion();
        let url;
        const clientHeaders = this.apiClient.getHeaders();
        if (params.config && params.config.tools && hasMcpToolUsage(params.config.tools)) {
          setMcpUsageHeader(clientHeaders);
        }
        const headers = mapToHeaders(clientHeaders);
        if (this.apiClient.isVertexAI()) {
          url = `${websocketBaseUrl}/ws/google.cloud.aiplatform.${apiVersion}.LlmBidiService/BidiGenerateContent`;
          await this.auth.addAuthHeaders(headers);
        } else {
          const apiKey = this.apiClient.getApiKey();
          let method = "BidiGenerateContent";
          let keyName = "key";
          if (apiKey === null || apiKey === void 0 ? void 0 : apiKey.startsWith("auth_tokens/")) {
            console.warn("Warning: Ephemeral token support is experimental and may change in future versions.");
            if (apiVersion !== "v1alpha") {
              console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection.");
            }
            method = "BidiGenerateContentConstrained";
            keyName = "access_token";
          }
          url = `${websocketBaseUrl}/ws/google.ai.generativelanguage.${apiVersion}.GenerativeService.${method}?${keyName}=${apiKey}`;
        }
        let onopenResolve = /* @__PURE__ */ __name(() => {
        }, "onopenResolve");
        const onopenPromise = new Promise((resolve) => {
          onopenResolve = resolve;
        });
        const callbacks = params.callbacks;
        const onopenAwaitedCallback = /* @__PURE__ */ __name(function() {
          var _a2;
          (_a2 = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onopen) === null || _a2 === void 0 ? void 0 : _a2.call(callbacks);
          onopenResolve({});
        }, "onopenAwaitedCallback");
        const apiClient = this.apiClient;
        const websocketCallbacks = {
          onopen: onopenAwaitedCallback,
          onmessage: /* @__PURE__ */ __name((event) => {
            void handleWebSocketMessage(apiClient, callbacks.onmessage, event);
          }, "onmessage"),
          onerror: (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onerror) !== null && _a !== void 0 ? _a : function(e) {
          },
          onclose: (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onclose) !== null && _b !== void 0 ? _b : function(e) {
          }
        };
        const conn = this.webSocketFactory.create(url, headersToMap(headers), websocketCallbacks);
        conn.connect();
        await onopenPromise;
        let transformedModel = tModel(this.apiClient, params.model);
        if (this.apiClient.isVertexAI() && transformedModel.startsWith("publishers/")) {
          const project = this.apiClient.getProject();
          const location = this.apiClient.getLocation();
          transformedModel = `projects/${project}/locations/${location}/` + transformedModel;
        }
        let clientMessage = {};
        if (this.apiClient.isVertexAI() && ((_c = params.config) === null || _c === void 0 ? void 0 : _c.responseModalities) === void 0) {
          if (params.config === void 0) {
            params.config = { responseModalities: [Modality.AUDIO] };
          } else {
            params.config.responseModalities = [Modality.AUDIO];
          }
        }
        if ((_d = params.config) === null || _d === void 0 ? void 0 : _d.generationConfig) {
          console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
        }
        const inputTools = (_f = (_e = params.config) === null || _e === void 0 ? void 0 : _e.tools) !== null && _f !== void 0 ? _f : [];
        const convertedTools = [];
        for (const tool of inputTools) {
          if (this.isCallableTool(tool)) {
            const callableTool = tool;
            convertedTools.push(await callableTool.tool());
          } else {
            convertedTools.push(tool);
          }
        }
        if (convertedTools.length > 0) {
          params.config.tools = convertedTools;
        }
        const liveConnectParameters = {
          model: transformedModel,
          config: params.config,
          callbacks: params.callbacks
        };
        if (this.apiClient.isVertexAI()) {
          clientMessage = liveConnectParametersToVertex(this.apiClient, liveConnectParameters);
        } else {
          clientMessage = liveConnectParametersToMldev(this.apiClient, liveConnectParameters);
        }
        delete clientMessage["config"];
        conn.send(JSON.stringify(clientMessage));
        return new Session(conn, this.apiClient);
      }
      // TODO: b/416041229 - Abstract this method to a common place.
      isCallableTool(tool) {
        return "callTool" in tool && typeof tool.callTool === "function";
      }
    };
    defaultLiveSendClientContentParamerters = {
      turnComplete: true
    };
    Session = class {
      static {
        __name(this, "Session");
      }
      constructor(conn, apiClient) {
        this.conn = conn;
        this.apiClient = apiClient;
      }
      tLiveClientContent(apiClient, params) {
        if (params.turns !== null && params.turns !== void 0) {
          let contents = [];
          try {
            contents = tContents(params.turns);
            if (apiClient.isVertexAI()) {
              contents = contents.map((item) => contentToVertex(item));
            } else {
              contents = contents.map((item) => contentToMldev$1(item));
            }
          } catch (_a) {
            throw new Error(`Failed to parse client content "turns", type: '${typeof params.turns}'`);
          }
          return {
            clientContent: { turns: contents, turnComplete: params.turnComplete }
          };
        }
        return {
          clientContent: { turnComplete: params.turnComplete }
        };
      }
      tLiveClienttToolResponse(apiClient, params) {
        let functionResponses = [];
        if (params.functionResponses == null) {
          throw new Error("functionResponses is required.");
        }
        if (!Array.isArray(params.functionResponses)) {
          functionResponses = [params.functionResponses];
        } else {
          functionResponses = params.functionResponses;
        }
        if (functionResponses.length === 0) {
          throw new Error("functionResponses is required.");
        }
        for (const functionResponse of functionResponses) {
          if (typeof functionResponse !== "object" || functionResponse === null || !("name" in functionResponse) || !("response" in functionResponse)) {
            throw new Error(`Could not parse function response, type '${typeof functionResponse}'.`);
          }
          if (!apiClient.isVertexAI() && !("id" in functionResponse)) {
            throw new Error(FUNCTION_RESPONSE_REQUIRES_ID);
          }
        }
        const clientMessage = {
          toolResponse: { functionResponses }
        };
        return clientMessage;
      }
      /**
          Send a message over the established connection.
      
          @param params - Contains two **optional** properties, `turns` and
              `turnComplete`.
      
            - `turns` will be converted to a `Content[]`
            - `turnComplete: true` [default] indicates that you are done sending
              content and expect a response. If `turnComplete: false`, the server
              will wait for additional messages before starting generation.
      
          @experimental
      
          @remarks
          There are two ways to send messages to the live API:
          `sendClientContent` and `sendRealtimeInput`.
      
          `sendClientContent` messages are added to the model context **in order**.
          Having a conversation using `sendClientContent` messages is roughly
          equivalent to using the `Chat.sendMessageStream`, except that the state of
          the `chat` history is stored on the API server instead of locally.
      
          Because of `sendClientContent`'s order guarantee, the model cannot respons
          as quickly to `sendClientContent` messages as to `sendRealtimeInput`
          messages. This makes the biggest difference when sending objects that have
          significant preprocessing time (typically images).
      
          The `sendClientContent` message sends a `Content[]`
          which has more options than the `Blob` sent by `sendRealtimeInput`.
      
          So the main use-cases for `sendClientContent` over `sendRealtimeInput` are:
      
          - Sending anything that can't be represented as a `Blob` (text,
          `sendClientContent({turns="Hello?"}`)).
          - Managing turns when not using audio input and voice activity detection.
            (`sendClientContent({turnComplete:true})` or the short form
          `sendClientContent()`)
          - Prefilling a conversation context
            ```
            sendClientContent({
                turns: [
                  Content({role:user, parts:...}),
                  Content({role:user, parts:...}),
                  ...
                ]
            })
            ```
          @experimental
         */
      sendClientContent(params) {
        params = Object.assign(Object.assign({}, defaultLiveSendClientContentParamerters), params);
        const clientMessage = this.tLiveClientContent(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
      }
      /**
          Send a realtime message over the established connection.
      
          @param params - Contains one property, `media`.
      
            - `media` will be converted to a `Blob`
      
          @experimental
      
          @remarks
          Use `sendRealtimeInput` for realtime audio chunks and video frames (images).
      
          With `sendRealtimeInput` the api will respond to audio automatically
          based on voice activity detection (VAD).
      
          `sendRealtimeInput` is optimized for responsivness at the expense of
          deterministic ordering guarantees. Audio and video tokens are to the
          context when they become available.
      
          Note: The Call signature expects a `Blob` object, but only a subset
          of audio and image mimetypes are allowed.
         */
      sendRealtimeInput(params) {
        let clientMessage = {};
        if (this.apiClient.isVertexAI()) {
          clientMessage = {
            "realtimeInput": liveSendRealtimeInputParametersToVertex(params)
          };
        } else {
          clientMessage = {
            "realtimeInput": liveSendRealtimeInputParametersToMldev(params)
          };
        }
        this.conn.send(JSON.stringify(clientMessage));
      }
      /**
          Send a function response message over the established connection.
      
          @param params - Contains property `functionResponses`.
      
            - `functionResponses` will be converted to a `functionResponses[]`
      
          @remarks
          Use `sendFunctionResponse` to reply to `LiveServerToolCall` from the server.
      
          Use {@link types.LiveConnectConfig#tools} to configure the callable functions.
      
          @experimental
         */
      sendToolResponse(params) {
        if (params.functionResponses == null) {
          throw new Error("Tool response parameters are required.");
        }
        const clientMessage = this.tLiveClienttToolResponse(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
      }
      /**
           Terminates the WebSocket connection.
      
           @experimental
      
           @example
           ```ts
           let model: string;
           if (GOOGLE_GENAI_USE_VERTEXAI) {
             model = 'gemini-2.0-flash-live-preview-04-09';
           } else {
             model = 'gemini-live-2.5-flash-preview';
           }
           const session = await ai.live.connect({
             model: model,
             config: {
               responseModalities: [Modality.AUDIO],
             }
           });
      
           session.close();
           ```
         */
      close() {
        this.conn.close();
      }
    };
    __name(headersToMap, "headersToMap");
    __name(mapToHeaders, "mapToHeaders");
    DEFAULT_MAX_REMOTE_CALLS = 10;
    __name(shouldDisableAfc, "shouldDisableAfc");
    __name(isCallableTool, "isCallableTool");
    __name(hasCallableTools, "hasCallableTools");
    __name(hasNonCallableTools, "hasNonCallableTools");
    __name(shouldAppendAfcHistory, "shouldAppendAfcHistory");
    Models = class extends BaseModule {
      static {
        __name(this, "Models");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        this.generateContent = async (params) => {
          var _a, _b, _c, _d, _e;
          const transformedParams = await this.processParamsMaybeAddMcpUsage(params);
          this.maybeMoveToResponseJsonSchem(params);
          if (!hasCallableTools(params) || shouldDisableAfc(params.config)) {
            return await this.generateContentInternal(transformedParams);
          }
          if (hasNonCallableTools(params)) {
            throw new Error("Automatic function calling with CallableTools and Tools is not yet supported.");
          }
          let response;
          let functionResponseContent;
          const automaticFunctionCallingHistory = tContents(transformedParams.contents);
          const maxRemoteCalls = (_c = (_b = (_a = transformedParams.config) === null || _a === void 0 ? void 0 : _a.automaticFunctionCalling) === null || _b === void 0 ? void 0 : _b.maximumRemoteCalls) !== null && _c !== void 0 ? _c : DEFAULT_MAX_REMOTE_CALLS;
          let remoteCalls = 0;
          while (remoteCalls < maxRemoteCalls) {
            response = await this.generateContentInternal(transformedParams);
            if (!response.functionCalls || response.functionCalls.length === 0) {
              break;
            }
            const responseContent = response.candidates[0].content;
            const functionResponseParts = [];
            for (const tool of (_e = (_d = params.config) === null || _d === void 0 ? void 0 : _d.tools) !== null && _e !== void 0 ? _e : []) {
              if (isCallableTool(tool)) {
                const callableTool = tool;
                const parts = await callableTool.callTool(response.functionCalls);
                functionResponseParts.push(...parts);
              }
            }
            remoteCalls++;
            functionResponseContent = {
              role: "user",
              parts: functionResponseParts
            };
            transformedParams.contents = tContents(transformedParams.contents);
            transformedParams.contents.push(responseContent);
            transformedParams.contents.push(functionResponseContent);
            if (shouldAppendAfcHistory(transformedParams.config)) {
              automaticFunctionCallingHistory.push(responseContent);
              automaticFunctionCallingHistory.push(functionResponseContent);
            }
          }
          if (shouldAppendAfcHistory(transformedParams.config)) {
            response.automaticFunctionCallingHistory = automaticFunctionCallingHistory;
          }
          return response;
        };
        this.generateContentStream = async (params) => {
          this.maybeMoveToResponseJsonSchem(params);
          if (shouldDisableAfc(params.config)) {
            const transformedParams = await this.processParamsMaybeAddMcpUsage(params);
            return await this.generateContentStreamInternal(transformedParams);
          } else {
            return await this.processAfcStream(params);
          }
        };
        this.generateImages = async (params) => {
          return await this.generateImagesInternal(params).then((apiResponse) => {
            var _a;
            let positivePromptSafetyAttributes;
            const generatedImages = [];
            if (apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.generatedImages) {
              for (const generatedImage of apiResponse.generatedImages) {
                if (generatedImage && (generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) && ((_a = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) === null || _a === void 0 ? void 0 : _a.contentType) === "Positive Prompt") {
                  positivePromptSafetyAttributes = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes;
                } else {
                  generatedImages.push(generatedImage);
                }
              }
            }
            let response;
            if (positivePromptSafetyAttributes) {
              response = {
                generatedImages,
                positivePromptSafetyAttributes,
                sdkHttpResponse: apiResponse.sdkHttpResponse
              };
            } else {
              response = {
                generatedImages,
                sdkHttpResponse: apiResponse.sdkHttpResponse
              };
            }
            return response;
          });
        };
        this.list = async (params) => {
          var _a;
          const defaultConfig = {
            queryBase: true
          };
          const actualConfig = Object.assign(Object.assign({}, defaultConfig), params === null || params === void 0 ? void 0 : params.config);
          const actualParams = {
            config: actualConfig
          };
          if (this.apiClient.isVertexAI()) {
            if (!actualParams.config.queryBase) {
              if ((_a = actualParams.config) === null || _a === void 0 ? void 0 : _a.filter) {
                throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
              } else {
                actualParams.config.filter = "labels.tune-type:*";
              }
            }
          }
          return new Pager(PagedItem.PAGED_ITEM_MODELS, (x) => this.listInternal(x), await this.listInternal(actualParams), actualParams);
        };
        this.editImage = async (params) => {
          const paramsInternal = {
            model: params.model,
            prompt: params.prompt,
            referenceImages: [],
            config: params.config
          };
          if (params.referenceImages) {
            if (params.referenceImages) {
              paramsInternal.referenceImages = params.referenceImages.map((img) => img.toReferenceImageAPI());
            }
          }
          return await this.editImageInternal(paramsInternal);
        };
        this.upscaleImage = async (params) => {
          let apiConfig = {
            numberOfImages: 1,
            mode: "upscale"
          };
          if (params.config) {
            apiConfig = Object.assign(Object.assign({}, apiConfig), params.config);
          }
          const apiParams = {
            model: params.model,
            image: params.image,
            upscaleFactor: params.upscaleFactor,
            config: apiConfig
          };
          return await this.upscaleImageInternal(apiParams);
        };
        this.generateVideos = async (params) => {
          return await this.generateVideosInternal(params);
        };
      }
      /**
       * This logic is needed for GenerateContentConfig only.
       * Previously we made GenerateContentConfig.responseSchema field to accept
       * unknown. Since v1.9.0, we switch to use backend JSON schema support.
       * To maintain backward compatibility, we move the data that was treated as
       * JSON schema from the responseSchema field to the responseJsonSchema field.
       */
      maybeMoveToResponseJsonSchem(params) {
        if (params.config && params.config.responseSchema) {
          if (!params.config.responseJsonSchema) {
            if (Object.keys(params.config.responseSchema).includes("$schema")) {
              params.config.responseJsonSchema = params.config.responseSchema;
              delete params.config.responseSchema;
            }
          }
        }
        return;
      }
      /**
       * Transforms the CallableTools in the parameters to be simply Tools, it
       * copies the params into a new object and replaces the tools, it does not
       * modify the original params. Also sets the MCP usage header if there are
       * MCP tools in the parameters.
       */
      async processParamsMaybeAddMcpUsage(params) {
        var _a, _b, _c;
        const tools = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools;
        if (!tools) {
          return params;
        }
        const transformedTools = await Promise.all(tools.map(async (tool) => {
          if (isCallableTool(tool)) {
            const callableTool = tool;
            return await callableTool.tool();
          }
          return tool;
        }));
        const newParams = {
          model: params.model,
          contents: params.contents,
          config: Object.assign(Object.assign({}, params.config), { tools: transformedTools })
        };
        newParams.config.tools = transformedTools;
        if (params.config && params.config.tools && hasMcpToolUsage(params.config.tools)) {
          const headers = (_c = (_b = params.config.httpOptions) === null || _b === void 0 ? void 0 : _b.headers) !== null && _c !== void 0 ? _c : {};
          let newHeaders = Object.assign({}, headers);
          if (Object.keys(newHeaders).length === 0) {
            newHeaders = this.apiClient.getDefaultHeaders();
          }
          setMcpUsageHeader(newHeaders);
          newParams.config.httpOptions = Object.assign(Object.assign({}, params.config.httpOptions), { headers: newHeaders });
        }
        return newParams;
      }
      async initAfcToolsMap(params) {
        var _a, _b, _c;
        const afcTools = /* @__PURE__ */ new Map();
        for (const tool of (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) !== null && _b !== void 0 ? _b : []) {
          if (isCallableTool(tool)) {
            const callableTool = tool;
            const toolDeclaration = await callableTool.tool();
            for (const declaration of (_c = toolDeclaration.functionDeclarations) !== null && _c !== void 0 ? _c : []) {
              if (!declaration.name) {
                throw new Error("Function declaration name is required.");
              }
              if (afcTools.has(declaration.name)) {
                throw new Error(`Duplicate tool declaration name: ${declaration.name}`);
              }
              afcTools.set(declaration.name, callableTool);
            }
          }
        }
        return afcTools;
      }
      async processAfcStream(params) {
        var _a, _b, _c;
        const maxRemoteCalls = (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.automaticFunctionCalling) === null || _b === void 0 ? void 0 : _b.maximumRemoteCalls) !== null && _c !== void 0 ? _c : DEFAULT_MAX_REMOTE_CALLS;
        let wereFunctionsCalled = false;
        let remoteCallCount = 0;
        const afcToolsMap = await this.initAfcToolsMap(params);
        return (function(models, afcTools, params2) {
          var _a2, _b2;
          return __asyncGenerator(this, arguments, function* () {
            var _c2, e_1, _d, _e;
            while (remoteCallCount < maxRemoteCalls) {
              if (wereFunctionsCalled) {
                remoteCallCount++;
                wereFunctionsCalled = false;
              }
              const transformedParams = yield __await(models.processParamsMaybeAddMcpUsage(params2));
              const response = yield __await(models.generateContentStreamInternal(transformedParams));
              const functionResponses = [];
              const responseContents = [];
              try {
                for (var _f = true, response_1 = (e_1 = void 0, __asyncValues(response)), response_1_1; response_1_1 = yield __await(response_1.next()), _c2 = response_1_1.done, !_c2; _f = true) {
                  _e = response_1_1.value;
                  _f = false;
                  const chunk = _e;
                  yield yield __await(chunk);
                  if (chunk.candidates && ((_a2 = chunk.candidates[0]) === null || _a2 === void 0 ? void 0 : _a2.content)) {
                    responseContents.push(chunk.candidates[0].content);
                    for (const part of (_b2 = chunk.candidates[0].content.parts) !== null && _b2 !== void 0 ? _b2 : []) {
                      if (remoteCallCount < maxRemoteCalls && part.functionCall) {
                        if (!part.functionCall.name) {
                          throw new Error("Function call name was not returned by the model.");
                        }
                        if (!afcTools.has(part.functionCall.name)) {
                          throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${afcTools.keys()}, mising tool: ${part.functionCall.name}`);
                        } else {
                          const responseParts = yield __await(afcTools.get(part.functionCall.name).callTool([part.functionCall]));
                          functionResponses.push(...responseParts);
                        }
                      }
                    }
                  }
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (!_f && !_c2 && (_d = response_1.return)) yield __await(_d.call(response_1));
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
              if (functionResponses.length > 0) {
                wereFunctionsCalled = true;
                const typedResponseChunk = new GenerateContentResponse();
                typedResponseChunk.candidates = [
                  {
                    content: {
                      role: "user",
                      parts: functionResponses
                    }
                  }
                ];
                yield yield __await(typedResponseChunk);
                const newContents = [];
                newContents.push(...responseContents);
                newContents.push({
                  role: "user",
                  parts: functionResponses
                });
                const updatedContents = tContents(params2.contents).concat(newContents);
                params2.contents = updatedContents;
              } else {
                break;
              }
            }
          });
        })(this, afcToolsMap, params);
      }
      async generateContentInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = generateContentParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:generateContent", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = generateContentResponseFromVertex(apiResponse);
            const typedResp = new GenerateContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = generateContentParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:generateContent", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = generateContentResponseFromMldev(apiResponse);
            const typedResp = new GenerateContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      async generateContentStreamInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = generateContentParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:streamGenerateContent?alt=sse", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          const apiClient = this.apiClient;
          response = apiClient.requestStream({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          });
          return response.then(function(apiResponse) {
            return __asyncGenerator(this, arguments, function* () {
              var _a2, e_2, _b2, _c2;
              try {
                for (var _d2 = true, apiResponse_1 = __asyncValues(apiResponse), apiResponse_1_1; apiResponse_1_1 = yield __await(apiResponse_1.next()), _a2 = apiResponse_1_1.done, !_a2; _d2 = true) {
                  _c2 = apiResponse_1_1.value;
                  _d2 = false;
                  const chunk = _c2;
                  const resp = generateContentResponseFromVertex(yield __await(chunk.json()));
                  resp["sdkHttpResponse"] = {
                    headers: chunk.headers
                  };
                  const typedResp = new GenerateContentResponse();
                  Object.assign(typedResp, resp);
                  yield yield __await(typedResp);
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (!_d2 && !_a2 && (_b2 = apiResponse_1.return)) yield __await(_b2.call(apiResponse_1));
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            });
          });
        } else {
          const body = generateContentParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:streamGenerateContent?alt=sse", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          const apiClient = this.apiClient;
          response = apiClient.requestStream({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          });
          return response.then(function(apiResponse) {
            return __asyncGenerator(this, arguments, function* () {
              var _a2, e_3, _b2, _c2;
              try {
                for (var _d2 = true, apiResponse_2 = __asyncValues(apiResponse), apiResponse_2_1; apiResponse_2_1 = yield __await(apiResponse_2.next()), _a2 = apiResponse_2_1.done, !_a2; _d2 = true) {
                  _c2 = apiResponse_2_1.value;
                  _d2 = false;
                  const chunk = _c2;
                  const resp = generateContentResponseFromMldev(yield __await(chunk.json()));
                  resp["sdkHttpResponse"] = {
                    headers: chunk.headers
                  };
                  const typedResp = new GenerateContentResponse();
                  Object.assign(typedResp, resp);
                  yield yield __await(typedResp);
                }
              } catch (e_3_1) {
                e_3 = { error: e_3_1 };
              } finally {
                try {
                  if (!_d2 && !_a2 && (_b2 = apiResponse_2.return)) yield __await(_b2.call(apiResponse_2));
                } finally {
                  if (e_3) throw e_3.error;
                }
              }
            });
          });
        }
      }
      /**
       * Calculates embeddings for the given contents. Only text is supported.
       *
       * @param params - The parameters for embedding contents.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.embedContent({
       *  model: 'text-embedding-004',
       *  contents: [
       *    'What is your name?',
       *    'What is your favorite color?',
       *  ],
       *  config: {
       *    outputDimensionality: 64,
       *  },
       * });
       * console.log(response);
       * ```
       */
      async embedContent(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = embedContentParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = embedContentResponseFromVertex(apiResponse);
            const typedResp = new EmbedContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = embedContentParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:batchEmbedContents", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = embedContentResponseFromMldev(apiResponse);
            const typedResp = new EmbedContentResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Generates an image based on a text description and configuration.
       *
       * @param params - The parameters for generating images.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.generateImages({
       *  model: 'imagen-3.0-generate-002',
       *  prompt: 'Robot holding a red skateboard',
       *  config: {
       *    numberOfImages: 1,
       *    includeRaiReason: true,
       *  },
       * });
       * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
       * ```
       */
      async generateImagesInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = generateImagesParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = generateImagesResponseFromVertex(apiResponse);
            const typedResp = new GenerateImagesResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = generateImagesParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = generateImagesResponseFromMldev(apiResponse);
            const typedResp = new GenerateImagesResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      async editImageInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = editImageParametersInternalToVertex(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = editImageResponseFromVertex(apiResponse);
            const typedResp = new EditImageResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
      async upscaleImageInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = upscaleImageAPIParametersInternalToVertex(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = upscaleImageResponseFromVertex(apiResponse);
            const typedResp = new UpscaleImageResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
      /**
       * Recontextualizes an image.
       *
       * There are two types of recontextualization currently supported:
       * 1) Imagen Product Recontext - Generate images of products in new scenes
       *    and contexts.
       * 2) Virtual Try-On: Generate images of persons modeling fashion products.
       *
       * @param params - The parameters for recontextualizing an image.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response1 = await ai.models.recontextImage({
       *  model: 'imagen-product-recontext-preview-06-30',
       *  source: {
       *    prompt: 'In a modern kitchen setting.',
       *    productImages: [productImage],
       *  },
       *  config: {
       *    numberOfImages: 1,
       *  },
       * });
       * console.log(response1?.generatedImages?.[0]?.image?.imageBytes);
       *
       * const response2 = await ai.models.recontextImage({
       *  model: 'virtual-try-on-preview-08-04',
       *  source: {
       *    personImage: personImage,
       *    productImages: [productImage],
       *  },
       *  config: {
       *    numberOfImages: 1,
       *  },
       * });
       * console.log(response2?.generatedImages?.[0]?.image?.imageBytes);
       * ```
       */
      async recontextImage(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = recontextImageParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:predict", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = recontextImageResponseFromVertex(apiResponse);
            const typedResp = new RecontextImageResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
      /**
       * Fetches information about a model by name.
       *
       * @example
       * ```ts
       * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
       * ```
       */
      async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = getModelParametersToVertex(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = modelFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = getModelParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = modelFromMldev(apiResponse);
            return resp;
          });
        }
      }
      async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = listModelsParametersToVertex(this.apiClient, params);
          path = formatMap("{models_url}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listModelsResponseFromVertex(apiResponse);
            const typedResp = new ListModelsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = listModelsParametersToMldev(this.apiClient, params);
          path = formatMap("{models_url}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listModelsResponseFromMldev(apiResponse);
            const typedResp = new ListModelsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Updates a tuned model by its name.
       *
       * @param params - The parameters for updating the model.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.update({
       *   model: 'tuned-model-name',
       *   config: {
       *     displayName: 'New display name',
       *     description: 'New description',
       *   },
       * });
       * ```
       */
      async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = updateModelParametersToVertex(this.apiClient, params);
          path = formatMap("{model}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "PATCH",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = modelFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = updateModelParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "PATCH",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = modelFromMldev(apiResponse);
            return resp;
          });
        }
      }
      /**
       * Deletes a tuned model by its name.
       *
       * @param params - The parameters for deleting the model.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.delete({model: 'tuned-model-name'});
       * ```
       */
      async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = deleteModelParametersToVertex(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then(() => {
            const resp = deleteModelResponseFromVertex();
            const typedResp = new DeleteModelResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = deleteModelParametersToMldev(this.apiClient, params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "DELETE",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then(() => {
            const resp = deleteModelResponseFromMldev();
            const typedResp = new DeleteModelResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Counts the number of tokens in the given contents. Multimodal input is
       * supported for Gemini models.
       *
       * @param params - The parameters for counting tokens.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.countTokens({
       *  model: 'gemini-2.0-flash',
       *  contents: 'The quick brown fox jumps over the lazy dog.'
       * });
       * console.log(response);
       * ```
       */
      async countTokens(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = countTokensParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:countTokens", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = countTokensResponseFromVertex(apiResponse);
            const typedResp = new CountTokensResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = countTokensParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:countTokens", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = countTokensResponseFromMldev(apiResponse);
            const typedResp = new CountTokensResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      /**
       * Given a list of contents, returns a corresponding TokensInfo containing
       * the list of tokens and list of token ids.
       *
       * This method is not supported by the Gemini Developer API.
       *
       * @param params - The parameters for computing tokens.
       * @return The response from the API.
       *
       * @example
       * ```ts
       * const response = await ai.models.computeTokens({
       *  model: 'gemini-2.0-flash',
       *  contents: 'What is your name?'
       * });
       * console.log(response);
       * ```
       */
      async computeTokens(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = computeTokensParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:computeTokens", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = computeTokensResponseFromVertex(apiResponse);
            const typedResp = new ComputeTokensResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
      /**
       *  Generates videos based on a text description and configuration.
       *
       * @param params - The parameters for generating videos.
       * @return A Promise<GenerateVideosOperation> which allows you to track the progress and eventually retrieve the generated videos using the operations.get method.
       *
       * @example
       * ```ts
       * const operation = await ai.models.generateVideos({
       *  model: 'veo-2.0-generate-001',
       *  prompt: 'A neon hologram of a cat driving at top speed',
       *  config: {
       *    numberOfVideos: 1
       * });
       *
       * while (!operation.done) {
       *   await new Promise(resolve => setTimeout(resolve, 10000));
       *   operation = await ai.operations.getVideosOperation({operation: operation});
       * }
       *
       * console.log(operation.response?.generatedVideos?.[0]?.video?.uri);
       * ```
       */
      async generateVideosInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = generateVideosParametersToVertex(this.apiClient, params);
          path = formatMap("{model}:predictLongRunning", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = generateVideosOperationFromVertex(apiResponse);
            const typedResp = new GenerateVideosOperation();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = generateVideosParametersToMldev(this.apiClient, params);
          path = formatMap("{model}:predictLongRunning", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = generateVideosOperationFromMldev(apiResponse);
            const typedResp = new GenerateVideosOperation();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
    };
    __name(getOperationParametersToMldev, "getOperationParametersToMldev");
    __name(getOperationParametersToVertex, "getOperationParametersToVertex");
    __name(fetchPredictOperationParametersToVertex, "fetchPredictOperationParametersToVertex");
    Operations = class extends BaseModule {
      static {
        __name(this, "Operations");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
      }
      /**
       * Gets the status of a long-running operation.
       *
       * @param parameters The parameters for the get operation request.
       * @return The updated Operation object, with the latest status or result.
       */
      async getVideosOperation(parameters) {
        const operation = parameters.operation;
        const config2 = parameters.config;
        if (operation.name === void 0 || operation.name === "") {
          throw new Error("Operation name is required.");
        }
        if (this.apiClient.isVertexAI()) {
          const resourceName2 = operation.name.split("/operations/")[0];
          let httpOptions = void 0;
          if (config2 && "httpOptions" in config2) {
            httpOptions = config2.httpOptions;
          }
          const rawOperation = await this.fetchPredictVideosOperationInternal({
            operationName: operation.name,
            resourceName: resourceName2,
            config: { httpOptions }
          });
          return operation._fromAPIResponse({
            apiResponse: rawOperation,
            isVertexAI: true
          });
        } else {
          const rawOperation = await this.getVideosOperationInternal({
            operationName: operation.name,
            config: config2
          });
          return operation._fromAPIResponse({
            apiResponse: rawOperation,
            isVertexAI: false
          });
        }
      }
      /**
       * Gets the status of a long-running operation.
       *
       * @param parameters The parameters for the get operation request.
       * @return The updated Operation object, with the latest status or result.
       */
      async get(parameters) {
        const operation = parameters.operation;
        const config2 = parameters.config;
        if (operation.name === void 0 || operation.name === "") {
          throw new Error("Operation name is required.");
        }
        if (this.apiClient.isVertexAI()) {
          const resourceName2 = operation.name.split("/operations/")[0];
          let httpOptions = void 0;
          if (config2 && "httpOptions" in config2) {
            httpOptions = config2.httpOptions;
          }
          const rawOperation = await this.fetchPredictVideosOperationInternal({
            operationName: operation.name,
            resourceName: resourceName2,
            config: { httpOptions }
          });
          return operation._fromAPIResponse({
            apiResponse: rawOperation,
            isVertexAI: true
          });
        } else {
          const rawOperation = await this.getVideosOperationInternal({
            operationName: operation.name,
            config: config2
          });
          return operation._fromAPIResponse({
            apiResponse: rawOperation,
            isVertexAI: false
          });
        }
      }
      async getVideosOperationInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = getOperationParametersToVertex(params);
          path = formatMap("{operationName}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response;
        } else {
          const body = getOperationParametersToMldev(params);
          path = formatMap("{operationName}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response;
        }
      }
      async fetchPredictVideosOperationInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = fetchPredictOperationParametersToVertex(params);
          path = formatMap("{resourceName}:fetchPredictOperation", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response;
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
    };
    __name(prebuiltVoiceConfigToMldev, "prebuiltVoiceConfigToMldev");
    __name(voiceConfigToMldev, "voiceConfigToMldev");
    __name(speakerVoiceConfigToMldev, "speakerVoiceConfigToMldev");
    __name(multiSpeakerVoiceConfigToMldev, "multiSpeakerVoiceConfigToMldev");
    __name(speechConfigToMldev, "speechConfigToMldev");
    __name(videoMetadataToMldev, "videoMetadataToMldev");
    __name(blobToMldev, "blobToMldev");
    __name(fileDataToMldev, "fileDataToMldev");
    __name(partToMldev, "partToMldev");
    __name(contentToMldev, "contentToMldev");
    __name(functionDeclarationToMldev, "functionDeclarationToMldev");
    __name(intervalToMldev, "intervalToMldev");
    __name(googleSearchToMldev, "googleSearchToMldev");
    __name(dynamicRetrievalConfigToMldev, "dynamicRetrievalConfigToMldev");
    __name(googleSearchRetrievalToMldev, "googleSearchRetrievalToMldev");
    __name(urlContextToMldev, "urlContextToMldev");
    __name(toolToMldev, "toolToMldev");
    __name(sessionResumptionConfigToMldev, "sessionResumptionConfigToMldev");
    __name(audioTranscriptionConfigToMldev, "audioTranscriptionConfigToMldev");
    __name(automaticActivityDetectionToMldev, "automaticActivityDetectionToMldev");
    __name(realtimeInputConfigToMldev, "realtimeInputConfigToMldev");
    __name(slidingWindowToMldev, "slidingWindowToMldev");
    __name(contextWindowCompressionConfigToMldev, "contextWindowCompressionConfigToMldev");
    __name(proactivityConfigToMldev, "proactivityConfigToMldev");
    __name(liveConnectConfigToMldev, "liveConnectConfigToMldev");
    __name(liveConnectConstraintsToMldev, "liveConnectConstraintsToMldev");
    __name(createAuthTokenConfigToMldev, "createAuthTokenConfigToMldev");
    __name(createAuthTokenParametersToMldev, "createAuthTokenParametersToMldev");
    __name(authTokenFromMldev, "authTokenFromMldev");
    __name(getFieldMasks, "getFieldMasks");
    __name(convertBidiSetupToTokenSetup, "convertBidiSetupToTokenSetup");
    Tokens = class extends BaseModule {
      static {
        __name(this, "Tokens");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
      }
      /**
       * Creates an ephemeral auth token resource.
       *
       * @experimental
       *
       * @remarks
       * Ephemeral auth tokens is only supported in the Gemini Developer API.
       * It can be used for the session connection to the Live constrained API.
       * Support in v1alpha only.
       *
       * @param params - The parameters for the create request.
       * @return The created auth token.
       *
       * @example
       * ```ts
       * const ai = new GoogleGenAI({
       *     apiKey: token.name,
       *     httpOptions: { apiVersion: 'v1alpha' }  // Support in v1alpha only.
       * });
       *
       * // Case 1: If LiveEphemeralParameters is unset, unlock LiveConnectConfig
       * // when using the token in Live API sessions. Each session connection can
       * // use a different configuration.
       * const config: CreateAuthTokenConfig = {
       *     uses: 3,
       *     expireTime: '2025-05-01T00:00:00Z',
       * }
       * const token = await ai.tokens.create(config);
       *
       * // Case 2: If LiveEphemeralParameters is set, lock all fields in
       * // LiveConnectConfig when using the token in Live API sessions. For
       * // example, changing `outputAudioTranscription` in the Live API
       * // connection will be ignored by the API.
       * const config: CreateAuthTokenConfig =
       *     uses: 3,
       *     expireTime: '2025-05-01T00:00:00Z',
       *     LiveEphemeralParameters: {
       *        model: 'gemini-2.0-flash-001',
       *        config: {
       *           'responseModalities': ['AUDIO'],
       *           'systemInstruction': 'Always answer in English.',
       *        }
       *     }
       * }
       * const token = await ai.tokens.create(config);
       *
       * // Case 3: If LiveEphemeralParameters is set and lockAdditionalFields is
       * // set, lock LiveConnectConfig with set and additional fields (e.g.
       * // responseModalities, systemInstruction, temperature in this example) when
       * // using the token in Live API sessions.
       * const config: CreateAuthTokenConfig =
       *     uses: 3,
       *     expireTime: '2025-05-01T00:00:00Z',
       *     LiveEphemeralParameters: {
       *        model: 'gemini-2.0-flash-001',
       *        config: {
       *           'responseModalities': ['AUDIO'],
       *           'systemInstruction': 'Always answer in English.',
       *        }
       *     },
       *     lockAdditionalFields: ['temperature'],
       * }
       * const token = await ai.tokens.create(config);
       *
       * // Case 4: If LiveEphemeralParameters is set and lockAdditionalFields is
       * // empty array, lock LiveConnectConfig with set fields (e.g.
       * // responseModalities, systemInstruction in this example) when using the
       * // token in Live API sessions.
       * const config: CreateAuthTokenConfig =
       *     uses: 3,
       *     expireTime: '2025-05-01T00:00:00Z',
       *     LiveEphemeralParameters: {
       *        model: 'gemini-2.0-flash-001',
       *        config: {
       *           'responseModalities': ['AUDIO'],
       *           'systemInstruction': 'Always answer in English.',
       *        }
       *     },
       *     lockAdditionalFields: [],
       * }
       * const token = await ai.tokens.create(config);
       * ```
       */
      async create(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
        } else {
          const body = createAuthTokenParametersToMldev(this.apiClient, params);
          path = formatMap("auth_tokens", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          const transformedBody = convertBidiSetupToTokenSetup(body, params.config);
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(transformedBody),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json();
          });
          return response.then((apiResponse) => {
            const resp = authTokenFromMldev(apiResponse);
            return resp;
          });
        }
      }
    };
    __name(getTuningJobParametersToMldev, "getTuningJobParametersToMldev");
    __name(listTuningJobsConfigToMldev, "listTuningJobsConfigToMldev");
    __name(listTuningJobsParametersToMldev, "listTuningJobsParametersToMldev");
    __name(tuningExampleToMldev, "tuningExampleToMldev");
    __name(tuningDatasetToMldev, "tuningDatasetToMldev");
    __name(createTuningJobConfigToMldev, "createTuningJobConfigToMldev");
    __name(createTuningJobParametersToMldev, "createTuningJobParametersToMldev");
    __name(getTuningJobParametersToVertex, "getTuningJobParametersToVertex");
    __name(listTuningJobsConfigToVertex, "listTuningJobsConfigToVertex");
    __name(listTuningJobsParametersToVertex, "listTuningJobsParametersToVertex");
    __name(tuningDatasetToVertex, "tuningDatasetToVertex");
    __name(tuningValidationDatasetToVertex, "tuningValidationDatasetToVertex");
    __name(createTuningJobConfigToVertex, "createTuningJobConfigToVertex");
    __name(createTuningJobParametersToVertex, "createTuningJobParametersToVertex");
    __name(tunedModelFromMldev, "tunedModelFromMldev");
    __name(tuningJobFromMldev, "tuningJobFromMldev");
    __name(listTuningJobsResponseFromMldev, "listTuningJobsResponseFromMldev");
    __name(tuningOperationFromMldev, "tuningOperationFromMldev");
    __name(tunedModelCheckpointFromVertex, "tunedModelCheckpointFromVertex");
    __name(tunedModelFromVertex, "tunedModelFromVertex");
    __name(tuningJobFromVertex, "tuningJobFromVertex");
    __name(listTuningJobsResponseFromVertex, "listTuningJobsResponseFromVertex");
    Tunings = class extends BaseModule {
      static {
        __name(this, "Tunings");
      }
      constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        this.get = async (params) => {
          return await this.getInternal(params);
        };
        this.list = async (params = {}) => {
          return new Pager(PagedItem.PAGED_ITEM_TUNING_JOBS, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
        this.tune = async (params) => {
          if (this.apiClient.isVertexAI()) {
            return await this.tuneInternal(params);
          } else {
            const operation = await this.tuneMldevInternal(params);
            let tunedModelName = "";
            if (operation["metadata"] !== void 0 && operation["metadata"]["tunedModel"] !== void 0) {
              tunedModelName = operation["metadata"]["tunedModel"];
            } else if (operation["name"] !== void 0 && operation["name"].includes("/operations/")) {
              tunedModelName = operation["name"].split("/operations/")[0];
            }
            const tuningJob = {
              name: tunedModelName,
              state: JobState.JOB_STATE_QUEUED
            };
            return tuningJob;
          }
        };
      }
      async getInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = getTuningJobParametersToVertex(params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = tuningJobFromVertex(apiResponse);
            return resp;
          });
        } else {
          const body = getTuningJobParametersToMldev(params);
          path = formatMap("{name}", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = tuningJobFromMldev(apiResponse);
            return resp;
          });
        }
      }
      async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = listTuningJobsParametersToVertex(params);
          path = formatMap("tuningJobs", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listTuningJobsResponseFromVertex(apiResponse);
            const typedResp = new ListTuningJobsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        } else {
          const body = listTuningJobsParametersToMldev(params);
          path = formatMap("tunedModels", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "GET",
            httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
            abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = listTuningJobsResponseFromMldev(apiResponse);
            const typedResp = new ListTuningJobsResponse();
            Object.assign(typedResp, resp);
            return typedResp;
          });
        }
      }
      async tuneInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          const body = createTuningJobParametersToVertex(params);
          path = formatMap("tuningJobs", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = tuningJobFromVertex(apiResponse);
            return resp;
          });
        } else {
          throw new Error("This method is only supported by the Vertex AI.");
        }
      }
      async tuneMldevInternal(params) {
        var _a, _b;
        let response;
        let path = "";
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
          throw new Error("This method is only supported by the Gemini Developer API.");
        } else {
          const body = createTuningJobParametersToMldev(params);
          path = formatMap("tunedModels", body["_url"]);
          queryParams = body["_query"];
          delete body["config"];
          delete body["_url"];
          delete body["_query"];
          response = this.apiClient.request({
            path,
            queryParams,
            body: JSON.stringify(body),
            httpMethod: "POST",
            httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
            abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
          }).then((httpResponse) => {
            return httpResponse.json().then((jsonResponse) => {
              const response2 = jsonResponse;
              response2.sdkHttpResponse = {
                headers: httpResponse.headers
              };
              return response2;
            });
          });
          return response.then((apiResponse) => {
            const resp = tuningOperationFromMldev(apiResponse);
            return resp;
          });
        }
      }
    };
    BrowserDownloader = class {
      static {
        __name(this, "BrowserDownloader");
      }
      async download(_params, _apiClient) {
        throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.");
      }
    };
    MAX_CHUNK_SIZE = 1024 * 1024 * 8;
    MAX_RETRY_COUNT = 3;
    INITIAL_RETRY_DELAY_MS = 1e3;
    DELAY_MULTIPLIER = 2;
    X_GOOG_UPLOAD_STATUS_HEADER_FIELD = "x-goog-upload-status";
    __name(uploadBlob, "uploadBlob");
    __name(getBlobStat, "getBlobStat");
    __name(sleep, "sleep");
    BrowserUploader = class {
      static {
        __name(this, "BrowserUploader");
      }
      async upload(file, uploadUrl, apiClient) {
        if (typeof file === "string") {
          throw new Error("File path is not supported in browser uploader.");
        }
        return await uploadBlob(file, uploadUrl, apiClient);
      }
      async stat(file) {
        if (typeof file === "string") {
          throw new Error("File path is not supported in browser uploader.");
        } else {
          return await getBlobStat(file);
        }
      }
    };
    BrowserWebSocketFactory = class {
      static {
        __name(this, "BrowserWebSocketFactory");
      }
      create(url, headers, callbacks) {
        return new BrowserWebSocket(url, headers, callbacks);
      }
    };
    BrowserWebSocket = class {
      static {
        __name(this, "BrowserWebSocket");
      }
      constructor(url, headers, callbacks) {
        this.url = url;
        this.headers = headers;
        this.callbacks = callbacks;
      }
      connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = this.callbacks.onopen;
        this.ws.onerror = this.callbacks.onerror;
        this.ws.onclose = this.callbacks.onclose;
        this.ws.onmessage = this.callbacks.onmessage;
      }
      send(message) {
        if (this.ws === void 0) {
          throw new Error("WebSocket is not connected");
        }
        this.ws.send(message);
      }
      close() {
        if (this.ws === void 0) {
          throw new Error("WebSocket is not connected");
        }
        this.ws.close();
      }
    };
    GOOGLE_API_KEY_HEADER = "x-goog-api-key";
    WebAuth = class {
      static {
        __name(this, "WebAuth");
      }
      constructor(apiKey) {
        this.apiKey = apiKey;
      }
      async addAuthHeaders(headers) {
        if (headers.get(GOOGLE_API_KEY_HEADER) !== null) {
          return;
        }
        if (this.apiKey.startsWith("auth_tokens/")) {
          throw new Error("Ephemeral tokens are only supported by the live API.");
        }
        if (!this.apiKey) {
          throw new Error("API key is missing. Please provide a valid API key.");
        }
        headers.append(GOOGLE_API_KEY_HEADER, this.apiKey);
      }
    };
    LANGUAGE_LABEL_PREFIX = "gl-node/";
    GoogleGenAI = class {
      static {
        __name(this, "GoogleGenAI");
      }
      constructor(options) {
        var _a;
        if (options.apiKey == null) {
          throw new Error("An API Key must be set when running in a browser");
        }
        if (options.project || options.location) {
          throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
        }
        this.vertexai = (_a = options.vertexai) !== null && _a !== void 0 ? _a : false;
        this.apiKey = options.apiKey;
        const baseUrl = getBaseUrl(
          options.httpOptions,
          options.vertexai,
          /*vertexBaseUrlFromEnv*/
          void 0,
          /*geminiBaseUrlFromEnv*/
          void 0
        );
        if (baseUrl) {
          if (options.httpOptions) {
            options.httpOptions.baseUrl = baseUrl;
          } else {
            options.httpOptions = { baseUrl };
          }
        }
        this.apiVersion = options.apiVersion;
        const auth = new WebAuth(this.apiKey);
        this.apiClient = new ApiClient({
          auth,
          apiVersion: this.apiVersion,
          apiKey: this.apiKey,
          vertexai: this.vertexai,
          httpOptions: options.httpOptions,
          userAgentExtra: LANGUAGE_LABEL_PREFIX + "web",
          uploader: new BrowserUploader(),
          downloader: new BrowserDownloader()
        });
        this.models = new Models(this.apiClient);
        this.live = new Live(this.apiClient, auth, new BrowserWebSocketFactory());
        this.batches = new Batches(this.apiClient);
        this.chats = new Chats(this.models, this.apiClient);
        this.caches = new Caches(this.apiClient);
        this.files = new Files(this.apiClient);
        this.operations = new Operations(this.apiClient);
        this.authTokens = new Tokens(this.apiClient);
        this.tunings = new Tunings(this.apiClient);
      }
    };
  }
});

// api/gemini.js
async function onRequest(context2) {
  const { request, env: env2 } = context2;
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const body = await request.json();
    const { action, ...params } = body;
    const apiKey = env2.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { GoogleGenAI: GoogleGenAI2 } = await Promise.resolve().then(() => (init_web(), web_exports));
    const ai = new GoogleGenAI2({ apiKey });
    if (action === "formatText") {
      const { text, platform: platform2, tone, withe, length } = params;
      const prompt = `Format this text for ${platform2} in a ${tone} tone ${withe} emojis in a ${length} length and you may include new lines if needed:

${text}
I want only the rough text as output not anything else`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });
      return new Response(JSON.stringify({ text: response.text || "" }), {
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "generateText") {
      const { text } = params;
      const prompt = `${text}
I want only the generated text as output not anything else`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });
      return new Response(JSON.stringify({ text: response.text || "" }), {
        headers: { "Content-Type": "application/json" }
      });
    } else if (action === "generateBlog") {
      const { topic, length, style } = params;
      const prompt = `Write a ${length} blog post about "${topic}" in a ${style} style. Make it engaging and well-structured with an introduction, body paragraphs, and conclusion. I want only the blog content as output not anything else`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });
      const blogContent = response.text || "";
      const prompt2 = `I am preparing for a blog article using this content: ${blogContent}

Now cut this into meaningful chunks and also I need to add some images in between, so add prompts for images too. Image prompts should be as detailed as possible. For every image, also provide a concise, meaningful caption on exactly one line, no longer than 200 characters.

Also I need headings/bullets/heading2,3,4/paragraph etc...

Please prepare a JSON type output like:
{
  "1": {"type": "heading", "content": "text", "level": 1-4},
  "2": {"type": "image", "prompt": "detailed image description", "caption": "concise one-line caption under 200 characters"},
  "3": {"type": "paragraph", "content": "text"},
  "4": {"type": "bullet", "content": "text"},
}

Please return only the raw JSON as the output`;
      const response2 = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt2
      });
      try {
        const result = response2.text.replace(/^```json\s*/, "").replace(/\s*```$/, "");
        const jsonResponse = JSON.parse(result || "{}");
        let formattedText = "";
        const imagePrompts = [];
        for (const key in jsonResponse) {
          const item = jsonResponse[key];
          if (item.type === "heading") {
            const level = item.level || 2;
            const heading = "#".repeat(level) + " " + item.content;
            formattedText += heading + "\n\n";
          } else if (item.type === "paragraph") {
            formattedText += item.content + "\n\n";
          } else if (item.type === "image") {
            const promptImg = item.prompt || item.content || "";
            const caption = item.caption || promptImg;
            imagePrompts.push({ prompt: promptImg, caption });
            formattedText += `[Image: ${imagePrompts.length}]

`;
          } else if (item.type === "bullet" || item.type === "list") {
            formattedText += "\u2022 " + (item.content || item.text) + "\n";
          }
        }
        return new Response(JSON.stringify({ content: formattedText.trim(), images: imagePrompts }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (error3) {
        return new Response(JSON.stringify({ content: response2.text || "Failed to generate blog content", images: [] }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error3) {
    return new Response(JSON.stringify({ error: error3.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
var init_gemini = __esm({
  "api/gemini.js"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(onRequest, "onRequest");
  }
});

// api/image.js
async function onRequest2(context2) {
  const { request, env: env2 } = context2;
  try {
    const url = new URL(request.url);
    const prompt = url.searchParams.get("prompt");
    const model = url.searchParams.get("model") || "zimage";
    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const apiKey = env2.POLLINATIONS_API_KEY;
    const width = url.searchParams.get("width") || "1024";
    const height = url.searchParams.get("height") || "1024";
    const params = new URLSearchParams({
      model,
      width,
      height,
      seed: url.searchParams.get("seed") || "0",
      enhance: url.searchParams.get("enhance") || "false",
      negative_prompt: url.searchParams.get("negative_prompt") || "worst quality, blurry",
      private: url.searchParams.get("private") || "true",
      nologo: url.searchParams.get("nologo") || "false",
      nofeed: url.searchParams.get("nofeed") || "false",
      safe: url.searchParams.get("safe") || "false",
      quality: url.searchParams.get("quality") || "medium",
      image: url.searchParams.get("image") || "",
      transparent: url.searchParams.get("transparent") || "false",
      guidance_scale: url.searchParams.get("guidance_scale") || "1"
    });
    const imageUrl = `https://gen.pollinations.ai/image/${encodeURIComponent(prompt)}?${params.toString()}${apiKey ? "&key=" + encodeURIComponent(apiKey) : ""}`;
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Response(blob, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/png",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error3) {
    return new Response(JSON.stringify({ error: error3.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
var init_image = __esm({
  "api/image.js"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(onRequest2, "onRequest");
  }
});

// api/pexels.js
async function onRequest3(context2) {
  const { request, env: env2 } = context2;
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    if (!query) {
      return new Response(JSON.stringify({ error: "Query required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const apiKey = env2.PEXELS_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Pexels API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const perPage = url.searchParams.get("per_page") || "1";
    const orientation = url.searchParams.get("orientation") || "landscape";
    const response = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=${orientation}`,
      { headers: { Authorization: apiKey } }
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error3) {
    return new Response(JSON.stringify({ error: error3.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
var init_pexels = __esm({
  "api/pexels.js"() {
    init_functionsRoutes_0_4029992393674773();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(onRequest3, "onRequest");
  }
});

// ../.wrangler/tmp/pages-3O4bTQ/functionsRoutes-0.4029992393674773.mjs
var routes;
var init_functionsRoutes_0_4029992393674773 = __esm({
  "../.wrangler/tmp/pages-3O4bTQ/functionsRoutes-0.4029992393674773.mjs"() {
    init_gemini();
    init_image();
    init_pexels();
    routes = [
      {
        routePath: "/api/gemini",
        mountPath: "/api",
        method: "",
        middlewares: [],
        modules: [onRequest]
      },
      {
        routePath: "/api/image",
        mountPath: "/api",
        method: "",
        middlewares: [],
        modules: [onRequest2]
      },
      {
        routePath: "/api/pexels",
        mountPath: "/api",
        method: "",
        middlewares: [],
        modules: [onRequest3]
      }
    ];
  }
});

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/pages-template-worker.ts
init_functionsRoutes_0_4029992393674773();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
init_functionsRoutes_0_4029992393674773();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count3 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count3--;
          if (count3 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count3++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count3)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function getOriginalPathPrefix(requestPath, normalizedPrefix) {
  let end = 0;
  for (let index = 0; index < normalizedPrefix.length; index++) {
    end++;
    if (normalizedPrefix[index] === "/") {
      while (requestPath[end] === "/") {
        end++;
      }
    }
  }
  return requestPath.slice(0, end);
}
__name(getOriginalPathPrefix, "getOriginalPathPrefix");
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  const normalizedRequestPath = requestPath.replace(/\/+/g, "/");
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath) || routeMatcher(normalizedRequestPath);
    const originalMountMatch = mountMatcher(requestPath);
    const mountMatchResult = originalMountMatch || mountMatcher(normalizedRequestPath);
    if (matchResult && mountMatchResult) {
      const path = originalMountMatch ? originalMountMatch.path : getOriginalPathPrefix(requestPath, mountMatchResult.path);
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env2, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context2 = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env: env2,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context2);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error3) {
      if (isFailOpen) {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error3;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
/*! Bundled license information:

@google/genai/dist/web/index.mjs:
  (**
   * @license
   * Copyright 2025 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
