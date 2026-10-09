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
if (dwr.engine._getObject("WarningMaps") == undefined) {
var p;

p = {};





p.getMapTimeLastUpdated = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getMapTimeLastUpdated', arguments);
};





p.getAllLightningMaps = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllLightningMaps', arguments);
};





p.getLastUpdated = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getLastUpdated', arguments);
};






p.getAllWarningMaps = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllWarningMaps', arguments);
};





p.pushWarningMap = function(p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pushWarningMap', arguments);
};





p.checkTableUpdating = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'checkTableUpdating', arguments);
};





p.isTableUpdating = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'isTableUpdating', arguments);
};




p.initTimer = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'initTimer', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'main', arguments);
};








p.doProcessFlightPlanTemplate_mgmt = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'doProcessFlightPlanTemplate_mgmt', arguments);
};




p.invalidateFplSession = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'invalidateFplSession', arguments);
};






p.generatePureFplMessage = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'generatePureFplMessage', arguments);
};







p.getFlightplan_admin = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getFlightplan_admin', arguments);
};






p.verifyChangeRequests = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'verifyChangeRequests', arguments);
};












p.changeRequest_CHG_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_CHG_mgmt', arguments);
};





p.generateFplTextCopy = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'generateFplTextCopy', arguments);
};




p.updateFplTimestamp2 = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'updateFplTimestamp2', arguments);
};




p.retLastFplUpdateTime = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'retLastFplUpdateTime', arguments);
};














p.changeRequest_ARR_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_ARR_mgmt', arguments);
};










p.retrieveFplBasedOnCallsign = function(p0, p1, p2, p3, p4, p5, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'retrieveFplBasedOnCallsign', arguments);
};






p.saveAftnFplToErrorDb = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'saveAftnFplToErrorDb', arguments);
};





p.admin_getFlightplan = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'admin_getFlightplan', arguments);
};






p.changeRequest_CNL_nm = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_CNL_nm', arguments);
};




p.logStopPollFplStatus = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'logStopPollFplStatus', arguments);
};






p.doProcessTheFlightplan = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'doProcessTheFlightplan', arguments);
};





p.pollFilingStatusMessages = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pollFilingStatusMessages', arguments);
};





p.pollFilingStatusMessages = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pollFilingStatusMessages', arguments);
};












p.changeRequest_DLA_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_DLA_mgmt', arguments);
};












p.changeRequest_CNL_mgmt = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_CNL_mgmt', arguments);
};






p.changeRequest_DLA_nm = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_DLA_nm', arguments);
};




p.getNewSessionTimeout = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getNewSessionTimeout', arguments);
};





p.logStartPollFplStatus = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'logStartPollFplStatus', arguments);
};








p.saveAftnFpl = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'saveAftnFpl', arguments);
};







p.saveAftnFpl = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'saveAftnFpl', arguments);
};






p.fplPrinterfriendly = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'fplPrinterfriendly', arguments);
};







p.fplPrinterfriendly = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'fplPrinterfriendly', arguments);
};







p.proposeRoute = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'proposeRoute', arguments);
};





p.convert2JSON = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'convert2JSON', arguments);
};





p.pollFilingStatus = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pollFilingStatus', arguments);
};







p.getFlightplan_user = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getFlightplan_user', arguments);
};




p.getTodaysEOBD = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getTodaysEOBD', arguments);
};





p.extractList = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'extractList', arguments);
};





p.convert2JSON_st = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'convert2JSON_st', arguments);
};




p.getAllFpls_Mgmt = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllFpls_Mgmt', arguments);
};




p.htmlFplHead = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'htmlFplHead', arguments);
};






p.changeRequest_DLA = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_DLA', arguments);
};





p.retTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'retTemplate', arguments);
};




p.isNrOfFplOk = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'isNrOfFplOk', arguments);
};







p.getFlightplan = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getFlightplan', arguments);
};




p.getAllFplTemplates = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllFplTemplates', arguments);
};




p.retHtmlFlightPlan = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'retHtmlFlightPlan', arguments);
};






p.changeRequest_CHG = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_CHG', arguments);
};






p.getOneFpl_union = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getOneFpl_union', arguments);
};





p.getAllFlightPlans = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllFlightPlans', arguments);
};





p.pollFplStatusNM = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pollFplStatusNM', arguments);
};





p.processFplTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'processFplTemplate', arguments);
};






p.changeRequest_CNL = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_CNL', arguments);
};





p.validateFpl_IFR_WS = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'validateFpl_IFR_WS', arguments);
};




p.startCFMUTest = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'startCFMUTest', arguments);
};





p.deleteFplTemplate = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'deleteFplTemplate', arguments);
};








p.changeRequest_ARR = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'changeRequest_ARR', arguments);
};





p.convertAftnToFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'convertAftnToFpl', arguments);
};





p.isOverlapping = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'isOverlapping', arguments);
};





p.pollFplStatusAis = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'pollFplStatusAis', arguments);
};





p.validateFpl_IFR = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'validateFpl_IFR', arguments);
};





p.validateFpl_IFR = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'validateFpl_IFR', arguments);
};




p.getCurrFpl = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getCurrFpl', arguments);
};






p.sendEmail = function(p0, p2, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'sendEmail', arguments);
};





p.sendEmail = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'sendEmail', arguments);
};






p.getOneFpl = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getOneFpl', arguments);
};




p.htmlFplEnd = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'htmlFplEnd', arguments);
};





p.getAllFpls = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'getAllFpls', arguments);
};





p.findFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'findFpl', arguments);
};




p.testEmail = function(callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'testEmail', arguments);
};






p.retFpl = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'retFpl', arguments);
};





p.archiveFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'archiveFpl', arguments);
};





p.deleteFpl = function(p0, callback) {
return dwr.engine._execute(p._path, 'WarningMaps', 'deleteFpl', arguments);
};

dwr.engine._setObject("WarningMaps", p);
}
})();

