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
if (dwr.engine._getObject("PIBBean") == undefined) {
var p;

p = {};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'retClassVersion', arguments);
};




p.getTheBriefingForOmw = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getTheBriefingForOmw', arguments);
};




p.getTheBriefing = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getTheBriefing', arguments);
};





p.pushPIBBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'pushPIBBriefing', arguments);
};





p.getWapPIBBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getWapPIBBriefing', arguments);
};




p.getPureBriefing = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getPureBriefing', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'main', arguments);
};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getInstance', arguments);
};





p.doGetPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'doGetPureWapBriefing', arguments);
};





p.getBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getBriefing', arguments);
};





p.getCgiBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getCgiBriefing', arguments);
};





p.formatWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'formatWapBriefing', arguments);
};





p.getPushBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getPushBriefing', arguments);
};





p.getPushBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getPushBriefing', arguments);
};





p.getXMLBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getXMLBriefing', arguments);
};




p.retValidateStatus = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'retValidateStatus', arguments);
};





p.getPureBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getPureBriefing', arguments);
};





p.getPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getPureWapBriefing', arguments);
};








p.getRequiredTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getRequiredTextField_with_validate', arguments);
};








p.getMultipleTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getMultipleTextField_with_validate', arguments);
};






p.getTraffic = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getTraffic', arguments);
};







p.getRequiredTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getRequiredTextField', arguments);
};








p.getMultipleTextField = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getMultipleTextField', arguments);
};







p.getIntField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getIntField', arguments);
};







p.getTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getTextField', arguments);
};





p.getCheckbox = function(p1, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getCheckbox', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'setStERR', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'clearStERR', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'initProps', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'useTitle', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'shutdownInitiated', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'isShutdownInitiated', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'init', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getDsIPPC', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'initCtx', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getDsNESI', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getDsIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getConnADAPT', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'PIBBean', 'getConnIPPCFPL', arguments);
};

dwr.engine._setObject("PIBBean", p);
}
})();

