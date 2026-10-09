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
if (dwr.engine._getObject("ChartList") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'main', arguments);
};




p.simulateGetChart_2 = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'simulateGetChart_2', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'retClassVersion', arguments);
};




p.doGetList = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'doGetList', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'isShutdownInitiated', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'shutdownInitiated', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'setStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'useTitle', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'initProps', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'clearStERR', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'ChartList', 'initCtx', arguments);
};

dwr.engine._setObject("ChartList", p);
}
})();

