document.title="About";var g_licensehost="lastpass.com";function on_load(e){var e,e,t,n,n,t,e,t;e?(document.body.appendChild(document.createTextNode("LastPass Extension")),getBG().LPISLOC&&document.body.appendChild(document.createTextNode("(Local)")),document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createTextNode("Version: "+lpversion)),document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createTextNode("Built: "+build_date)),document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createTextNode("Binary Component: ")),getBG().have_nplastpass()?document.body.appendChild(document.createTextNode("true (NPAPI "+"Version".toLowerCase()+" "+getBG().get_nplastpass_version()+", built "+getBG().get_nplastpass_build_date_time()+")")):getBG().have_native_messaging()||getBG().have_binary()?(e="true (",getBG().have_native_messaging()&&(e+="Native Messaging"),e+=" "+"Version".toLowerCase()+" "+getBG().g_native_messaging_version+", built "+getBG().g_native_messaging_build_date+" "+getBG().g_native_messaging_build_time+")",document.body.appendChild(document.createTextNode(e))):getBG().have_pplastpass()?document.body.appendChild(document.createTextNode("false (Native Client only)")):getBG().have_ws()?document.body.appendChild(document.createTextNode("true (Helper App)")):document.body.appendChild(document.createTextNode("false")),document.body.appendChild(document.createTextNode(" ")),(e=document.createElement("span")).id="enable_binary_span",e.className="displaynone",(t=document.createElement("button")).id="enable_binary_button",e.appendChild(t),document.body.appendChild(e),document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createElement("br")),t=(n=(n="Copyright 2008 LastPass. All Rights Reserved.").replace(" 2008 "," 2008-"+(new Date).getFullYear()+" ")).split("\n"),document.body.appendChild(document.createTextNode(t[0])),document.body.appendChild(document.createElement("br")),getBG().g_hideaboutmanuallink||(document.body.appendChild(document.createElement("br")),document.body.appendChild(document.createElement("br")),(e=document.createElement("a")).id="openhelp",e.setAttribute("href","#"),set_innertext(e,"Click here to view the LastPass User Manual"),document.body.appendChild(e),document.getElementById("openhelp").onclick=function(){return getBG().openhelp(),!1}),t=function(e){e?getBG().have_binary()||(set_innertext(document.getElementById("enable_binary_button"),"Install Binary Component"),document.getElementById("enable_binary_button").onclick=LPPlatform.installBinary,document.getElementById("enable_binary_span").style.display="inline"):(set_innertext(document.getElementById("enable_binary_button"),"Enable Native Messaging"),document.getElementById("enable_binary_button").onclick=function(){LPPlatform.requestNativeMessaging()},document.getElementById("enable_binary_span").style.display="inline")},(getBG().g_is_win||getBG().g_is_mac||getBG().g_is_linux)&&!g_isedge&&(supports_native_messaging()&&getBG().g_do_native_messaging?getBG().test_native_messaging(t):t(!0))):get_data("about",function(){on_load(!0)})}document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){on_load()})});