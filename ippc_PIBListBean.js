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
if (dwr.engine._getObject("PIBListBean") == undefined) {
var p;

p = {};






p.handleDoCmd = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'handleDoCmd', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'retClassVersion', arguments);
};




p.doGetList = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'doGetList', arguments);
};






p.pushDataSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushDataSession', arguments);
};






p.pushDataSession = function(p1, p2, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushDataSession', arguments);
};






p.pushImageSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushImageSession', arguments);
};




p.getWebContext = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'getWebContext', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'isAdmin', arguments);
};






p.pushScript = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushScript', arguments);
};




p.setREQ = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'setREQ', arguments);
};








p.pushData = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushData', arguments);
};







p.pushData = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushData', arguments);
};




p.getREQ = function(callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'getREQ', arguments);
};





p.extractActionErrors = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'extractActionErrors', arguments);
};






p.pushDataAllSessions = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBListBean', 'pushDataAllSessions', arguments);
};

dwr.engine._setObject("PIBListBean", p);
}
})();

