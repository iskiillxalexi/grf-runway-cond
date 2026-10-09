if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["FplUserInfo"]) {
c = function() {
this.LOGGING_ON = false;
this.OK_LOGGED_ON = false;
this.fplUserRecord = null;
}
c.$dwrClassName = 'FplUserInfo';
c.$dwrClassMembers = {};
c.$dwrClassMembers.LOGGING_ON = {};
c.$dwrClassMembers.OK_LOGGED_ON = {};
c.$dwrClassMembers.fplUserRecord = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("FplUserInfo", c);
dwr.engine._mappedClasses["FplUserInfo"] = c;
addedNow["FplUserInfo"] = true;
}
})();

(function() {
if (dwr.engine._getObject("AppInit") == undefined) {
var p;

p = {};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'init', arguments);
};




p.destroy = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'destroy', arguments);
};




p.property = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'property', arguments);
};




p.initIppc = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'initIppc', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'retClassVersion', arguments);
};




p.getWebPrefix = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getWebPrefix', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'init', arguments);
};




p.doGet = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'doGet', arguments);
};




p.getContainer = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getContainer', arguments);
};




p.doPost = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'doPost', arguments);
};






p.service = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AppInit', 'service', arguments);
};






p.log = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AppInit', 'log', arguments);
};





p.log = function(p0, callback) {
return dwr.engine._execute(p._path, 'AppInit', 'log', arguments);
};




p.getServletContext = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getServletContext', arguments);
};




p.getInitParameterNames = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getInitParameterNames', arguments);
};





p.getInitParameter = function(p0, callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getInitParameter', arguments);
};




p.getServletName = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getServletName', arguments);
};




p.getServletConfig = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getServletConfig', arguments);
};




p.getServletInfo = function(callback) {
return dwr.engine._execute(p._path, 'AppInit', 'getServletInfo', arguments);
};

dwr.engine._setObject("AppInit", p);
}
})();

