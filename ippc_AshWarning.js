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
if (dwr.engine._getObject("AshWarning") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'main', arguments);
};




p.addAshWarningTimer = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'addAshWarningTimer', arguments);
};




p.preDisplayWarning = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'preDisplayWarning', arguments);
};






p.notifyAllClient = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'notifyAllClient', arguments);
};







p.notifyAllClient = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'notifyAllClient', arguments);
};






p.pushDataSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushDataSession', arguments);
};






p.pushDataSession = function(p1, p2, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushDataSession', arguments);
};






p.pushImageSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushImageSession', arguments);
};




p.getWebContext = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'getWebContext', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'isAdmin', arguments);
};






p.pushScript = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushScript', arguments);
};




p.setREQ = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'setREQ', arguments);
};








p.pushData = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushData', arguments);
};







p.pushData = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushData', arguments);
};




p.getREQ = function(callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'getREQ', arguments);
};





p.extractActionErrors = function(p0, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'extractActionErrors', arguments);
};






p.pushDataAllSessions = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AshWarning', 'pushDataAllSessions', arguments);
};

dwr.engine._setObject("AshWarning", p);
}
})();

