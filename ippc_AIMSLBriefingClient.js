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
if (dwr.engine._getObject("AIMSLBriefingClient") == undefined) {
var p;

p = {};






















p.createRoutePIB = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createRoutePIB', arguments);
};







p.createNarrowRoutePIB_options = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createNarrowRoutePIB_options', arguments);
};






p.createAreaPIBPolygon_options = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAreaPIBPolygon_options', arguments);
};







p.createAerodromeAreaPIBPolygon_options = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAerodromeAreaPIBPolygon_options', arguments);
};








p.createAdFirPIB_options = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAdFirPIB_options', arguments);
};






p.createAerodromeWeatherPIB = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAerodromeWeatherPIB', arguments);
};







p.createAreaPIB_options = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAreaPIB_options', arguments);
};








p.createAerodromePIB_options = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAerodromePIB_options', arguments);
};







p.createRoutePIB_options = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createRoutePIB_options', arguments);
};







p.createAdSnowtamPIB_options = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AIMSLBriefingClient', 'createAdSnowtamPIB_options', arguments);
};

dwr.engine._setObject("AIMSLBriefingClient", p);
}
})();

