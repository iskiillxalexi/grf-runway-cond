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
if (dwr.engine._getObject("NTPClock") == undefined) {
var p;

p = {};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'NTPClock', 'getInstance', arguments);
};




p.getServerDate = function(callback) {
return dwr.engine._execute(p._path, 'NTPClock', 'getServerDate', arguments);
};




p.getNTPDate = function(callback) {
return dwr.engine._execute(p._path, 'NTPClock', 'getNTPDate', arguments);
};

dwr.engine._setObject("NTPClock", p);
}
})();

