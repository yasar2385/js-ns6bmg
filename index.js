// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let [idx, IsPrvs, IsNext] = [1, false, false];
let IS_LOCAL_HOST = true;
console.log([IsPrvs, IsNext]);
var [isDebug, debug] = [true, null];
if (isDebug) debug = console.log.bind(window.console);
else debug = function () {};
var Debugger = function (gState, klass) {
  let this_debug = {};
  if (gState && klass.isDebug) {
    for (var m in console)
      if (typeof console[m] == 'function')
        this_debug[m] = console[m].bind(
          window.console,
          klass.toString() + ': '
        );
  } else {
    for (var m in console)
      if (typeof console[m] == 'function') this_debug[m] = function () {};
  }
  //console.log(this_debug)
  return this_debug;
};
isDebug = true; //global debug state
debug = Debugger(isDebug, this);
console.log(debug);
debug.log('Hello log!');
debug.trace('Hello trace!');
debug.log('This is happening.');
console.log(isDebug);

