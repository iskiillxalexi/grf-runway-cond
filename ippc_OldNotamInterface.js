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
if (dwr.engine._getObject("OldNotamInterface") == undefined) {
var p;

p = {};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'main', arguments);
};




p.isLoading = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'isLoading', arguments);
};





p.createJSONFeatureCollection = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'createJSONFeatureCollection', arguments);
};





p.createJSONFeatureCollection = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'createJSONFeatureCollection', arguments);
};






p.createJSONArray = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'createJSONArray', arguments);
};





p.setNotams_json = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'setNotams_json', arguments);
};




p.getNotams_json = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getNotams_json', arguments);
};






p.marshalAdSection = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'marshalAdSection', arguments);
};





p.loadNotamsFromFile = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'loadNotamsFromFile', arguments);
};





p.loadNotamsFromDb = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'loadNotamsFromDb', arguments);
};






p.marshalNotamListResponse = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'marshalNotamListResponse', arguments);
};




p.isDispNotamsStarted = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'isDispNotamsStarted', arguments);
};





p.extractPolygonFromItemE = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'extractPolygonFromItemE', arguments);
};





p.setDispNotamsStarted = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'setDispNotamsStarted', arguments);
};




p.givenTwoDatesBeforeJava8_whenDifferentiating_thenWeGetSix = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'givenTwoDatesBeforeJava8_whenDifferentiating_thenWeGetSix', arguments);
};





p.createJSON = function(p0, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'createJSON', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'OldNotamInterface', 'initCtx', arguments);
};

dwr.engine._setObject("OldNotamInterface", p);
}
})();

