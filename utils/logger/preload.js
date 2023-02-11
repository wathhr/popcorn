exports.log = (() => {
  function main(...message) {
    console.log('[%cPopcorn%c > Preload]', 'color: gold', 'color: inherit', ...message);
  }
  function warn(...message) {
    console.warn('[%cPopcorn%c > Preload]', 'color: gold', 'color: inherit', ...message);
  }
  function error(...message) {
    console.error('[%cPopcorn%c > Preload]', 'color: gold', 'color: inherit', ...message);
  }
  main.warn = warn;
  main.error = error;
  return main;
})();
