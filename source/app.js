(function () {
  'use strict'

  if (!window.addEventListener) return; // Check for IE9+

  var options = INSTALL_OPTIONS;

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    if (!options) return;

    var accountId = options.accountId;
    if (!accountId) return;


    !function(W,I,S,D,O,M){"use strict"; if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=
    function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};f.ts=new Date,f.q=[]; var g=
    D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",
    g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;var h=D.getElementsByTagName("script")
    [0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);

    wisdom('init', accountId);
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement);
  } else {
    updateElement();
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions;
      updateElement();
    }
  }
}())
