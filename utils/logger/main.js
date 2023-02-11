exports.log = (() => {
  function main(...message) {
    console.log('[\x1b[38;2;255;215;0mPopcorn\x1b[0m > Main]', ...message);
  }
  function warn(...message) {
    console.warn('[\x1b[38;2;255;215;0mPopcorn\x1b[0m > Main]', ...message);
  }
  function error(...message) {
    console.error('[\x1b[38;2;255;215;0mPopcorn\x1b[0m > Main]', ...message);
  }
  main.warn = warn;
  main.error = error;
  return main;
})();
