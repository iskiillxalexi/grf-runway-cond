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
if (dwr.engine._getObject("IppcWebInterface") == undefined) {
var p;

p = {};






p.getReleaseHistory = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'getReleaseHistory', arguments);
};




p.initCheckBannerMsg = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'initCheckBannerMsg', arguments);
};




p.initBannerController = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'initBannerController', arguments);
};






p.notifyAllClient = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'notifyAllClient', arguments);
};







p.notifyAllClient = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'notifyAllClient', arguments);
};






p.pushDataSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushDataSession', arguments);
};






p.pushDataSession = function(p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushDataSession', arguments);
};






p.pushImageSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushImageSession', arguments);
};




p.getWebContext = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'getWebContext', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'isAdmin', arguments);
};






p.pushScript = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushScript', arguments);
};




p.setREQ = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'setREQ', arguments);
};








p.pushData = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushData', arguments);
};







p.pushData = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushData', arguments);
};




p.getREQ = function(callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'getREQ', arguments);
};





p.extractActionErrors = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'extractActionErrors', arguments);
};






p.pushDataAllSessions = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcWebInterface', 'pushDataAllSessions', arguments);
};

dwr.engine._setObject("IppcWebInterface", p);
}
})();

