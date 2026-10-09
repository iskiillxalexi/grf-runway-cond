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
if (dwr.engine._getObject("ASDInterface") == undefined) {
var p;

p = {};




p.retGraph_fname_lbd = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraph_fname_lbd', arguments);
};





p.retNoOfRwys = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retNoOfRwys', arguments);
};




p.retGraph_rwytmp_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraph_rwytmp_string', arguments);
};




p.retGraph_ldb_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraph_ldb_string', arguments);
};




p.retGraph_accum_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraph_accum_string', arguments);
};




p.run = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'run', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'init', arguments);
};




p.localInitAd = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'localInitAd', arguments);
};





p.setUpdaterwytmp = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdaterwytmp', arguments);
};




p.retWeatherInfo = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retWeatherInfo', arguments);
};





p.retWeatherResult = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retWeatherResult', arguments);
};





p.setUpdategraph = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdategraph', arguments);
};





p.setUpdatesnowtam = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdatesnowtam', arguments);
};





p.setUpdatewind = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdatewind', arguments);
};




p.retWindInfo = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retWindInfo', arguments);
};





p.setUpdatelbd = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdatelbd', arguments);
};





p.setUpdateacc = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdateacc', arguments);
};




p.retRunwayModel_breakingaction = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retRunwayModel_breakingaction', arguments);
};





p.retGraphImage_rwytmp_string = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_rwytmp_string', arguments);
};




p.retGraphImage_rwytmp_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_rwytmp_string', arguments);
};




p.generateGraphImages = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'generateGraphImages', arguments);
};







p.generateGraphImages_lbd = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'generateGraphImages_lbd', arguments);
};





p.retGraphImage_rwytmp_fname = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_rwytmp_fname', arguments);
};





p.retGraphImage_rwytmp_byte = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_rwytmp_byte', arguments);
};







p.generateGraphImages_accum = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'generateGraphImages_accum', arguments);
};




p.retRunwayDirections = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retRunwayDirections', arguments);
};




p.retGraphImage_accum_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_accum_string', arguments);
};





p.retGraphImage_accum_string = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_accum_string', arguments);
};





p.retWeatherResultForIppc = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retWeatherResultForIppc', arguments);
};




p.retGraphImage_ldb_string = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_ldb_string', arguments);
};





p.retGraphImage_ldb_string = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_ldb_string', arguments);
};







p.generateGraphImages_rwytmp = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'generateGraphImages_rwytmp', arguments);
};





p.retGraphImage_accum_fname = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_accum_fname', arguments);
};





p.retGraphImage_ldb_byte = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_ldb_byte', arguments);
};





p.retGraphImage_ldb_fname = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_ldb_fname', arguments);
};





p.setUpdatepilotreport = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdatepilotreport', arguments);
};





p.setUpdateweatherchart = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdateweatherchart', arguments);
};





p.retGraphImage_accum_byte = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retGraphImage_accum_byte', arguments);
};





p.setUpdateweathermodel = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdateweathermodel', arguments);
};




p.retRunwayModel_development = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retRunwayModel_development', arguments);
};





p.setUpdaterunwaymodel = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setUpdaterunwaymodel', arguments);
};





p.retWeatherRwyInfo_table = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retWeatherRwyInfo_table', arguments);
};




p.retRunwayModel_condition = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retRunwayModel_condition', arguments);
};




p.now = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'now', arguments);
};




p.getSession = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getSession', arguments);
};




p.insertDateParm = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'insertDateParm', arguments);
};





p.insertAltTag = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'insertAltTag', arguments);
};




p.toggleIncludeMark = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'toggleIncludeMark', arguments);
};





p.insertTitleTag = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'insertTitleTag', arguments);
};




p.setSession = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setSession', arguments);
};




p.setREQ = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setREQ', arguments);
};




p.getREQ = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getREQ', arguments);
};






p.refresh = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'refresh', arguments);
};





p.main = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'main', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'init', arguments);
};







p.openConnection = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'openConnection', arguments);
};




p.retClassVersion = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'retClassVersion', arguments);
};




p.getCurrentTime = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getCurrentTime', arguments);
};




p.closeConnection = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'closeConnection', arguments);
};






p.getLastSnowtam = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getLastSnowtam', arguments);
};





p.setOVERRIDE_ENABLE_IRISCALC = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setOVERRIDE_ENABLE_IRISCALC', arguments);
};






p.getRunwayReportTimestampStr = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRunwayReportTimestampStr', arguments);
};




p.isENABLE_IRISCALC = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'isENABLE_IRISCALC', arguments);
};





p.setInitIrisCalc = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setInitIrisCalc', arguments);
};




p.isWebserverAlive = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'isWebserverAlive', arguments);
};




p.setServletconfig = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setServletconfig', arguments);
};




p.isInitIrisCalc = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'isInitIrisCalc', arguments);
};





p.setENABLE_IRISCALC = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setENABLE_IRISCALC', arguments);
};




p.getServletconfig = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getServletconfig', arguments);
};







p.getRwyConditionDWR = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRwyConditionDWR', arguments);
};







p.getRwyCondition = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRwyCondition', arguments);
};





p.getRwyCondBg = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRwyCondBg', arguments);
};






p.getWeatherConditionDWR = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWeatherConditionDWR', arguments);
};






p.getWeatherConditionStatus = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWeatherConditionStatus', arguments);
};







p.getRwyConditionWithoutTd = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRwyConditionWithoutTd', arguments);
};






p.getWeatherCellColorDWR = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWeatherCellColorDWR', arguments);
};





p.setWEB_PAGE_REFRESH_RATE = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setWEB_PAGE_REFRESH_RATE', arguments);
};





p.setERROR_PAGE_REFRESH_RATE = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setERROR_PAGE_REFRESH_RATE', arguments);
};







p.getRwyConditionDWR_new = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRwyConditionDWR_new', arguments);
};




p.getRUNWAY_COND_COLOR_TXT = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getRUNWAY_COND_COLOR_TXT', arguments);
};






p.getWeatherCellColor = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWeatherCellColor', arguments);
};






p.getWeatherCondition = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWeatherCondition', arguments);
};




p.getWEB_PAGE_REFRESH_RATE = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getWEB_PAGE_REFRESH_RATE', arguments);
};




p.getERROR_PAGE_REFRESH_RATE = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getERROR_PAGE_REFRESH_RATE', arguments);
};




p.isOVERRIDE_ENABLE_IRISCALC = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'isOVERRIDE_ENABLE_IRISCALC', arguments);
};




p.setSess = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'setSess', arguments);
};




p.getSess = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getSess', arguments);
};





p.queryData = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'queryData', arguments);
};




p.closeResources = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'closeResources', arguments);
};




p.getDs_ASD_COMMON = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getDs_ASD_COMMON', arguments);
};




p.getDs_ASD_VAISALA = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getDs_ASD_VAISALA', arguments);
};




p.getDs_ASD_SENSOR = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getDs_ASD_SENSOR', arguments);
};




p.getDs_ASD = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getDs_ASD', arguments);
};




p.init = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'init', arguments);
};






p.service = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'service', arguments);
};






p.log = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'log', arguments);
};





p.log = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'log', arguments);
};




p.destroy = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'destroy', arguments);
};




p.getServletContext = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getServletContext', arguments);
};




p.getInitParameterNames = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getInitParameterNames', arguments);
};





p.getInitParameter = function(p0, callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getInitParameter', arguments);
};




p.getServletName = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getServletName', arguments);
};




p.getServletConfig = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getServletConfig', arguments);
};




p.getServletInfo = function(callback) {
return dwr.engine._execute(p._path, 'ASDInterface', 'getServletInfo', arguments);
};

dwr.engine._setObject("ASDInterface", p);
}
})();

