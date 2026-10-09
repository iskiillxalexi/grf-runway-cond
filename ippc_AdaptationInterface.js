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
if (dwr.engine._getObject("AdaptationInterface") == undefined) {
var p;

p = {};







p.retAirspaceVertex_txtlocaltype = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retAirspaceVertex_txtlocaltype', arguments);
};





p.retMultipleAdHpData = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retMultipleAdHpData', arguments);
};





p.retDPN = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retDPN', arguments);
};





p.retNDB = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retNDB', arguments);
};





p.retVOR = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retVOR', arguments);
};





p.retDME = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retDME', arguments);
};





p.getVCS = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'getVCS', arguments);
};





p.retAdhpRwyInfo = function(p0, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retAdhpRwyInfo', arguments);
};






p.retAirspaceVertex = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retAirspaceVertex', arguments);
};







p.retAirspaceRASs = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'AdaptationInterface', 'retAirspaceRASs', arguments);
};

dwr.engine._setObject("AdaptationInterface", p);
}
})();

