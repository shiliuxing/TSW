/*!
 * Tencent is pleased to support the open source community by making Tencent Server Web available.
 * Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
"use strict";

const TEReport	= require('util/auto-report/TEReport.js');
const gzipHttp	= require('util/gzipHttp.js');
const tmpl		= require('./tmpl.js');
const navMenus 	= require('./navMenus.js');

module.exports = function(request,response){

	var gzipResponse = gzipHttp.getGzipResponse({
		request: request,
		response: response,
		code: 200,
		contentType: 'text/html; charset=UTF-8'
	});

	TEReport.getAllGroup().done(function(allGroup){

		var data = {};

		data.head	= { title: 'TSW'};
		data.header = tmpl.new_header(navMenus());
		data.body	= tmpl.body();

		gzipResponse.end(tmpl.html(data));
	});

}