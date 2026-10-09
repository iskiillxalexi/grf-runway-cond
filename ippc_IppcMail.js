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
if (dwr.engine._getObject("IppcMail") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'main', arguments);
};







p.sendBriefingMail = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'sendBriefingMail', arguments);
};




p.printResources = function(callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'printResources', arguments);
};







p.testSendMail = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'testSendMail', arguments);
};







p.sendViaGmail = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'sendViaGmail', arguments);
};








p.sendViaGmail = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'sendViaGmail', arguments);
};










p.sendMail = function(p0, p1, p2, p3, p4, p5, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'sendMail', arguments);
};











p.doSendMail = function(p0, p1, p2, p3, p4, p5, p6, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'doSendMail', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'isAdmin', arguments);
};






p.pushDataSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushDataSession', arguments);
};






p.pushDataSession = function(p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushDataSession', arguments);
};




p.getWebContext = function(callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'getWebContext', arguments);
};






p.pushImageSession = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushImageSession', arguments);
};








p.pushData = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushData', arguments);
};







p.pushData = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushData', arguments);
};




p.setREQ = function(callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'setREQ', arguments);
};






p.pushScript = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushScript', arguments);
};




p.getREQ = function(callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'getREQ', arguments);
};





p.extractActionErrors = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'extractActionErrors', arguments);
};






p.pushDataAllSessions = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'IppcMail', 'pushDataAllSessions', arguments);
};

dwr.engine._setObject("IppcMail", p);
}
})();

