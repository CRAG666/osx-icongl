webpackJsonp([1],{DrOD:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("mtWM"),n=e.n(i),l={props:["nombre"],data:function(){return{loading:"no",resultado:""}},methods:{IAD:function(t){var a=this;this.loading="si",n.a.post("http://localhost:8087/"+t+"/es").then(function(t){a.loading="r",a.resultado=t.data}).catch(function(t){a.loading="r",a.resultado="Fallo total :C"})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("nav",[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[t._v("Instalador de "+t._s(t.nombre))])])])]),t._v(" "),"no"==t.loading?e("div",[e("center",[e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("instalar")}}},[t._v("Instalar")]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("update")}}},[t._v("Actualizar")]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("desinstalar")}}},[t._v("Desinstalar")])])],1):"si"==t.loading?e("div",[t._m(0),t._v(" "),e("center",[e("p",[t._v("Esper un momento...")]),t._v(" "),e("div",{staticClass:"preloader-wrapper active"},[e("div",{staticClass:"spinner-layer spinner-red-only"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])])])])],1):"r"==t.loading?e("div",[e("center",[e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("div",{staticClass:"card-panel teal lighten-2 container"},[e("h5",[t._v(t._s(t.resultado))])]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("p",{on:{click:function(a){t.IAD("cerrar")}}},[e("a",{staticClass:"waves-effect waves-light btn btn-large"},[t._v("Cerrar")])])])],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"progress"},[a("div",{staticClass:"indeterminate"})])}]},r={props:["nombre"],data:function(){return{loading:"no",resultado:""}},methods:{IAD:function(t){var a=this;this.loading="si",n.a.post("http://localhost:8087/"+t+"/us").then(function(t){a.loading="r",a.resultado=t.data}).catch(function(t){a.loading="r",a.resultado="Total failure :C"})}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("nav",[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[t._v(t._s(t.nombre)+" Installer")])])])]),t._v(" "),"no"==t.loading?e("div",[e("center",[e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("instalar")}}},[t._v("Install")]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("update")}}},[t._v("Update")]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.IAD("desinstalar")}}},[t._v("Uninstall")])])],1):"si"==t.loading?e("div",[t._m(0),t._v(" "),e("center",[e("p",[t._v("Wait a moment...")]),t._v(" "),e("div",{staticClass:"preloader-wrapper active"},[e("div",{staticClass:"spinner-layer spinner-red-only"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])])])])],1):"r"==t.loading?e("div",[e("center",[e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("div",{staticClass:"card-panel teal lighten-2 container"},[e("h5",[t._v(t._s(t.resultado))])]),t._v(" "),e("div",{staticStyle:{margin:"10px 0"}}),t._v(" "),e("p",{on:{click:function(a){t.IAD("cerrar")}}},[e("a",{staticClass:"waves-effect waves-light btn btn-large"},[t._v("Close")])])])],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"progress"},[a("div",{staticClass:"indeterminate"})])}]},o={components:{Es:e("VU/8")(l,c,!1,null,null,null).exports,Us:e("VU/8")(r,v,!1,null,null,null).exports},props:["nombre"],data:function(){return{select:""}},methods:{click:function(t){this.select=t}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[""==t.select?e("div",[e("div",[e("nav",[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[t._v(t._s(t.nombre))])])])]),t._v(" "),e("center",[e("div",{staticStyle:{margin:"13px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.click("es")}}},[t._v("Español")]),t._v(" "),e("div",{staticStyle:{margin:"13px 0"}}),t._v(" "),e("button",{staticClass:"waves-effect waves-light btn btn-large",on:{click:function(a){t.click("us")}}},[t._v("English")])])],1):"es"==t.select?e("Es",{attrs:{nombre:t.nombre}}):"us"==t.select?e("Us",{attrs:{nombre:t.nombre}}):t._e()],1)},staticRenderFns:[]};var p={name:"App",components:{Sl:e("VU/8")(o,d,!1,function(t){e("DrOD")},"data-v-60fa715d",null).exports},data:function(){return{name:"",live:!1}},created:function(){var t=this;n.a.get("http://localhost:8087/live").then(function(a){t.name=a.data,t.live=!0}).catch(function(t){alert("Error se esperava la respuesta del cliente :"+t)})}},u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this.live?a("Sl",{attrs:{nombre:this.name}}):a("div",[a("center",[a("p",[this._v("Wait a moment...")]),this._v(" "),a("div",{staticClass:"preloader-wrapper active"},[a("div",{staticClass:"spinner-layer spinner-red-only"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])])],1)],1)},staticRenderFns:[]};var f=e("VU/8")(p,u,!1,function(t){e("tdLS")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:f},template:"<App/>"})},tdLS:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.83821afbcb20189eb893.js.map