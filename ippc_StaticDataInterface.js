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
if (dwr.engine._getObject("StaticDataInterface") == undefined) {
var p;

p = {};





p.getAdjacentFirs = function(p0, callback) {
return dwr.engine._execute(p._path, 'StaticDataInterface', 'getAdjacentFirs', arguments);
};





p.isAerodrome = function(p0, callback) {
return dwr.engine._execute(p._path, 'StaticDataInterface', 'isAerodrome', arguments);
};





p.isAircraftType = function(p0, callback) {
return dwr.engine._execute(p._path, 'StaticDataInterface', 'isAircraftType', arguments);
};





p.getFirs = function(p0, callback) {
return dwr.engine._execute(p._path, 'StaticDataInterface', 'getFirs', arguments);
};

dwr.engine._setObject("StaticDataInterface", p);
}
})();

