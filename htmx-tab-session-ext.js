htmx.defineExtension("tab-session", {
  onEvent: function (name, evt) {
    if (name === "htmx:configRequest") {
      var tabSessionId = this.getTabSessionId();
      evt.detail.headers["X-Tab-Session-ID"] = tabSessionId;
    }
    return true;
  },

  getTabSessionId: function () {
    var sessionId = sessionStorage.getItem("tabSessionId");
    if (!sessionId) {
      sessionId = this.generateSecureId();
      sessionStorage.setItem("tabSessionId", sessionId);
    }
    return sessionId;
  },

  generateSecureId: function () {
    var array = new Uint32Array(4);
    window.crypto.getRandomValues(array);

    return Array.from(array, function (num) {
      return num.toString(16).padStart(8, "0");
    }).join("") + Date.now().toString(36);
  },
});
