'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.request=undefined;var _axios=require('axios');var _axios2=_interopRequireDefault(_axios);var _utils=require('axios/lib/utils');var _utils2=_interopRequireDefault(_utils);var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
 *  Create an Immutable Map
 */var SETTINGS=_immutable2.default.Map();var configure=function configure(request){/*
   *  Destructure only the necessary fields
   */var protocol=request.protocol,host=request.host,port=request.port,path=request.path,version=request.version,bearerToken=request.bearerToken,session=request.session;/*
   *  Restructure the fields and create an Immutable Map
   */var settings=_immutable2.default.Map({protocol:protocol,host:host,port:port,path:path,version:version,bearerToken:bearerToken,session:session});/*
   *  Compare the Map instances
   */if(!_immutable2.default.is(SETTINGS,settings)){/*
     *  Set the defaults
     */var defaults=_axios2.default.defaults,common=_axios2.default.defaults.headers.common;common.Accept='application/json; charset=utf-8';if(bearerToken){common.Authorization='Bearer '+bearerToken;}else{delete common.Authorization;}if(_utils2.default.isStandardBrowserEnv()){delete defaults.headers.Cookie;}else{defaults.headers.Cookie='jid='+session;}defaults.withCredentials=true;defaults.baseURL=protocol+'://'+host+':'+port+'/'+path+'/'+version;/*
     *  Set this Immutable Map as the current settings
     */SETTINGS=settings;}};var request=exports.request=_axios2.default.create();exports.default=function(store){/*
   *  On initialisation
   */var _store$getState=store.getState(),request=_store$getState.zashiki.request;if(request)configure(request);return function(next){return function(action){/*
     *  Per request
     */var _store$getState2=store.getState(),request=_store$getState2.zashiki.request;if(request)configure(request);return next(action);};};};