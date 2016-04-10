//source of getUrlVars: http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        });
    return vars;
}
var tid = getUrlVars()["tid"];
if (!tid) {
    window.location = "/Tournament%20Dashboard";
}
