!function(t,n,e){function i(t){return"[object Object]"===g.call(t)}function r(t,n){t&&Object.keys(t).forEach(function(e){n(e,t[e])})}function o(t){try{t="true"===t?!0:"false"===t?!1:"null"===t?null:+t+""===t?+t:/(?:\{[\s\S]*\}|\[[\s\S]*\])$/.test(t)?JSON.parse(t):t}catch(n){t=e}return t}function s(t){for(var n,i,r={},s=t&&t.attributes,u=s&&s.length;u--;)i=s[u],n=i.name,"data-"===n.substring(0,5)&&(n=n.substring(5),i=o(i.value),i===e||(r[n]=i));return r}function u(r){var o=r.substring(0,1).toLowerCase()+r.substring(1),s=n.fn[o];n.fn[o]=function(o){var s,u,a=h.call(arguments,1),l="string"==typeof o&&o;return n.each(this,function(c,f){if(u=d(f,r)||new t[r](f,i(o)?o:e),"this"===l)return s=u,!1;if(l){if(!n.isFunction(u[l]))throw new Error("组件没有此方法："+l);if(s=u[l].apply(u,a),s!==e&&s!==u)return!1;s=e}}),s!==e?s:this},n.fn[o].noConflict=function(){return n.fn[o]=s,this}}function a(t,e){var i=this;t.superClass&&a.call(i,t.superClass,e),r(d(t,"options"),function(t,r){r.forEach(function(r){var o=r[0],s=r[1];("*"===o||n.isFunction(o)&&o.call(i,e[t])||o===e[t])&&s.call(i)})})}function l(t,i){var o=this;t.superClass&&l.call(o,t.superClass,i),r(d(t,"plugins"),function(t,s){i[t]!==!1&&(r(s,function(t,i){var r;o[t]=n.isFunction(i)&&(r=o[t])?function(){var t,n=o.origin;return o.origin=r,t=i.apply(o,arguments),n===e?delete o.origin:o.origin=n,t}:i}),s._init.call(o))})}function c(){for(var t,e=h.call(arguments),r=e.length;r--;)t=t||e[r],i(e[r])||e.splice(r,1);return e.length?n.extend.apply(null,[!0,{}].concat(e)):t}function f(t,r,o,u,f){var p,h=this;return i(u)&&(f=u,u=e),f&&f.el&&(u=n(f.el)),u&&(h.$el=n(u),u=h.$el[0]),p=h._options=c(r.options,s(u),f),h.template=c(r.template,p.template),h.tpl2html=c(r.tpl2html,p.tpl2html),h.widgetName=t.toLowerCase(),h.eventNs="."+h.widgetName+o,h._init(p),h._options.setup=h.$el&&h.$el.parent()[0]?!0:!1,a.call(h,r,p),l.call(h,r,p),h._create(),h.trigger("ready"),u&&d(u,t,h)&&h.on("destroy",function(){d(u,t,null)}),h}function p(i,o,s){function u(t,n){if("Base"===i)throw new Error("Base类不能直接实例化");return this instanceof u?f.call(this,i,u,a++,t,n):new u(t,n)}"function"!=typeof s&&(s=t.Base);var a=1,l=1;return n.extend(u,{register:function(t,n){var e=d(u,"plugins")||d(u,"plugins",{});return n._init=n._init||v,e[t]=n,u},option:function(t,n,e){var i=d(u,"options")||d(u,"options",{});return i[t]||(i[t]=[]),i[t].push([n,e]),u},inherits:function(t){return p(i+"Sub"+l++,t,u)},extend:function(t){var n=u.prototype,i=s.prototype;y.forEach(function(n){t[n]=c(s[n],t[n]),t[n]&&(u[n]=t[n]),delete t[n]}),r(t,function(t,r){n[t]="function"==typeof r&&i[t]?function(){var n,o=this.$super;return this.$super=function(){var n=h.call(arguments,1);return i[t].apply(this,n)},n=r.apply(this,arguments),o===e?delete this.$super:this.$super=o,n}:r})}}),u.superClass=s,u.prototype=Object.create(s.prototype),u.extend(o),u}var h=[].slice,g=Object.prototype.toString,v=function(){},y=["options","template","tpl2html"],d=function(){var t={},n=0,i="_gid";return function(r,o,s){var u=r[i]||(r[i]=++n),a=t[u]||(t[u]={});return s!==e&&(a[o]=s),null===s&&delete a[o],a[o]}}(),m=t.event;t.define=function(n,e,i){t[n]=p(n,e,i),u(n)},t.isWidget=function(n,e){return e="string"==typeof e?t[e]||v:e,e=e||t.Base,n instanceof e},t.Base=p("Base",{_init:v,_create:v,getEl:function(){return this.$el},on:m.on,one:m.one,off:m.off,trigger:function(e){var i="string"==typeof e?new t.Event(e):e,r=[i].concat(h.call(arguments,1)),o=this._options[i.type],s=this.getEl();return o&&n.isFunction(o)&&!1===o.apply(this,r)&&(i.stopPropagation(),i.preventDefault()),m.trigger.apply(this,r),s&&s.triggerHandler(i,(r.shift(),r)),this},tpl2html:function(t,e){var i=this.template;return i="string"==typeof t?i[t]:(e=t,i),e||~i.indexOf("<%")?n.parseTpl(i,e):i},destroy:function(){this.$el&&this.$el.off(this.eventNs),this.trigger("destroy"),this.off(),this.destroyed=!0}},Object),n.ui=t}(gmu,gmu.$);