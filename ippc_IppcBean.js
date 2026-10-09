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
if (dwr.engine._getObject("IppcBean") == undefined) {
var p;

p = {};




p.isIrisOpen = function(callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'isIrisOpen', arguments);
};





p.retTextFromDb = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'retTextFromDb', arguments);
};





p.getOneAdInfo = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'getOneAdInfo', arguments);
};





p.isTurbulenceAd = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'isTurbulenceAd', arguments);
};





p.isProcessActive = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'isProcessActive', arguments);
};





p.getPIBBriefing_string = function(p0, callback) {
return dwr.engine._execute(p._path, 'IppcBean', 'getPIBBriefing_string', arguments);
};

dwr.engine._setObject("IppcBean", p);
}
})();

