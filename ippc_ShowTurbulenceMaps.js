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
if (dwr.engine._getObject("ShowTurbulenceMaps") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'main', arguments);
};








p.getOneTurbMap = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getOneTurbMap', arguments);
};





p.setTURB_UPDATE_STATUS_TXT = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'setTURB_UPDATE_STATUS_TXT', arguments);
};




p.getTURB_UPDATE_STATUS_TXT = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getTURB_UPDATE_STATUS_TXT', arguments);
};








p.updateTurbulenceInfo = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'updateTurbulenceInfo', arguments);
};




p.initTurbulenceStatus = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'initTurbulenceStatus', arguments);
};







p.getAnimatedTurbMapFromDb = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getAnimatedTurbMapFromDb', arguments);
};




p.displayTurbulenceMap = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'displayTurbulenceMap', arguments);
};




p.showTurbMap = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'showTurbMap', arguments);
};




p.isTurbTableUpdated = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'isTurbTableUpdated', arguments);
};







p.getAnimatedTurbMap = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getAnimatedTurbMap', arguments);
};




p.initDataSource = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'initDataSource', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'setStERR', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'clearStERR', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'initProps', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'useTitle', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'shutdownInitiated', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'retClassVersion', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'isShutdownInitiated', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'init', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getDsIPPC', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'initCtx', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getDsNESI', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getDsIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getConnADAPT', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ShowTurbulenceMaps', 'getConnIPPCFPL', arguments);
};

dwr.engine._setObject("ShowTurbulenceMaps", p);
}
})();

