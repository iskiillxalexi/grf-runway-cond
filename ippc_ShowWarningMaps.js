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
if (dwr.engine._getObject("ShowWarningMaps") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'main', arguments);
};




p.isTurbTableUpdated = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'isTurbTableUpdated', arguments);
};




p.initDataSource = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'initDataSource', arguments);
};









p.pushWarningInfo = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'pushWarningInfo', arguments);
};




p.showWarningMap = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'showWarningMap', arguments);
};






p.displayWarningMap = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'displayWarningMap', arguments);
};





p.setTURB_UPDATE_STATUS_TXT = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'setTURB_UPDATE_STATUS_TXT', arguments);
};




p.getTURB_UPDATE_STATUS_TXT = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getTURB_UPDATE_STATUS_TXT', arguments);
};




p.initTurbulenceStatus = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'initTurbulenceStatus', arguments);
};







p.getAnimatedTurbMapFromDb = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getAnimatedTurbMapFromDb', arguments);
};








p.getAnimatedWarningMap = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getAnimatedWarningMap', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'isShutdownInitiated', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'retClassVersion', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'shutdownInitiated', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'setStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'useTitle', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'initProps', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'clearStERR', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'ShowWarningMaps', 'initCtx', arguments);
};

dwr.engine._setObject("ShowWarningMaps", p);
}
})();

