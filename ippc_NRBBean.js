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
if (dwr.engine._getObject("NRBBean") == undefined) {
var p;

p = {};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'retClassVersion', arguments);
};




p.getTheBriefing = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getTheBriefing', arguments);
};




p.getPureBriefing = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getPureBriefing', arguments);
};



















p.getWapBriefing = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getWapBriefing', arguments);
};



















p.pushTheBriefing = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'pushTheBriefing', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'main', arguments);
};




p.getInstance = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getInstance', arguments);
};





p.doGetPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'doGetPureWapBriefing', arguments);
};





p.getBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getBriefing', arguments);
};





p.getCgiBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getCgiBriefing', arguments);
};





p.formatWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'formatWapBriefing', arguments);
};





p.getPushBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getPushBriefing', arguments);
};





p.getPushBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getPushBriefing', arguments);
};





p.getXMLBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getXMLBriefing', arguments);
};




p.retValidateStatus = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'retValidateStatus', arguments);
};





p.getPureBriefing = function(p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getPureBriefing', arguments);
};





p.getPureWapBriefing = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getPureWapBriefing', arguments);
};








p.getRequiredTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getRequiredTextField_with_validate', arguments);
};








p.getMultipleTextField_with_validate = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getMultipleTextField_with_validate', arguments);
};






p.getTraffic = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getTraffic', arguments);
};







p.getRequiredTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getRequiredTextField', arguments);
};








p.getMultipleTextField = function(p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getMultipleTextField', arguments);
};







p.getIntField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getIntField', arguments);
};







p.getTextField = function(p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getTextField', arguments);
};





p.getCheckbox = function(p1, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getCheckbox', arguments);
};




p.isAdmin = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'isAdmin', arguments);
};





p.setStERR = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'setStERR', arguments);
};




p.clearStERR = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'clearStERR', arguments);
};




p.getStERR = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getStERR', arguments);
};





p.initProps = function(p1, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'initProps', arguments);
};





p.useTitle = function(p0, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'useTitle', arguments);
};




p.shutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'shutdownInitiated', arguments);
};




p.isShutdownInitiated = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'isShutdownInitiated', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'init', arguments);
};




p.getDsADAPT = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getDsADAPT', arguments);
};




p.getDsIPPC = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getDsIPPC', arguments);
};




p.initCtx = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'initCtx', arguments);
};




p.getDsNESI = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getDsNESI', arguments);
};




p.getDsIPPCFPL = function(callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getDsIPPCFPL', arguments);
};







p.getConnADAPT = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getConnADAPT', arguments);
};







p.getConnIPPCFPL = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'NRBBean', 'getConnIPPCFPL', arguments);
};

dwr.engine._setObject("NRBBean", p);
}
})();

