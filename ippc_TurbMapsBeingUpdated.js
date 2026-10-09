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
if (dwr.engine._getObject("TurbMapsBeingUpdated") == undefined) {
var p;

p = {};




p.doShowStatus = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'doShowStatus', arguments);
};




p.addTimer = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'addTimer', arguments);
};





p.setTurbInfoNeedsUpdated = function(p0, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'setTurbInfoNeedsUpdated', arguments);
};





p.setTurbTableBeingUpdated = function(p0, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'setTurbTableBeingUpdated', arguments);
};





p.setTURB_UPDATE_STATUS_TXT = function(p0, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'setTURB_UPDATE_STATUS_TXT', arguments);
};




p.isTurbInfoNeedsUpdated = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'isTurbInfoNeedsUpdated', arguments);
};




p.getTURB_UPDATE_STATUS_TXT = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getTURB_UPDATE_STATUS_TXT', arguments);
};




p.isTurbTableBeingUpdated = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'isTurbTableBeingUpdated', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'isShutdownInitiated', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'retClassVersion', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'shutdownInitiated', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'setStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'useTitle', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'initProps', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'clearStERR', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'TurbMapsBeingUpdated', 'initCtx', arguments);
};

dwr.engine._setObject("TurbMapsBeingUpdated", p);
}
})();

