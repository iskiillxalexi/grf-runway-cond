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
if (dwr.engine._getObject("NotamByIdBean") == undefined) {
var p;

p = {};




p.getServletInfo = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getServletInfo', arguments);
};




p.getPureBriefing = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getPureBriefing', arguments);
};




p.getNotamById = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getNotamById', arguments);
};




p.getBulletinId = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getBulletinId', arguments);
};





p.pushNotamById = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'pushNotamById', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'retClassVersion', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'main', arguments);
};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getInstance', arguments);
};





p.getPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getPureWapBriefing', arguments);
};





p.getXMLBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getXMLBriefing', arguments);
};





p.getPushBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getPushBriefing', arguments);
};





p.getPushBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getPushBriefing', arguments);
};





p.getPureBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getPureBriefing', arguments);
};





p.getBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getBriefing', arguments);
};





p.getCgiBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getCgiBriefing', arguments);
};




p.retValidateStatus = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'retValidateStatus', arguments);
};





p.formatWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'formatWapBriefing', arguments);
};





p.doGetPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'doGetPureWapBriefing', arguments);
};








p.getMultipleTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getMultipleTextField_with_validate', arguments);
};








p.getRequiredTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getRequiredTextField_with_validate', arguments);
};







p.getIntField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getIntField', arguments);
};





p.getCheckbox = function(p1, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getCheckbox', arguments);
};







p.getTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getTextField', arguments);
};






p.getTraffic = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getTraffic', arguments);
};







p.getRequiredTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getRequiredTextField', arguments);
};








p.getMultipleTextField = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getMultipleTextField', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'isShutdownInitiated', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'shutdownInitiated', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'setStERR', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'useTitle', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'initProps', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'clearStERR', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'init', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getDsIPPCFPL', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getConnIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getConnADAPT', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getDsIPPC', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'getDsNESI', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'NotamByIdBean', 'initCtx', arguments);
};

dwr.engine._setObject("NotamByIdBean", p);
}
})();

