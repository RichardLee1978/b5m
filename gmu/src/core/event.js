!function(t,n){function e(t,n,e){(t||"").split(f).forEach(function(t){e(t,n)})}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function s(t,n,e,s){var o,u;return u=r(n),u.ns&&(o=i(u.ns)),t.filter(function(t){return!(!t||u.e&&t.e!==u.e||u.ns&&!o.test(t.ns)||e&&t.cb!==e&&t.cb._cb!==e||s&&t.ctx!==s)})}function o(t,e){return this instanceof o?(e&&n.extend(this,e),this.type=t,this):new o(t,e)}var u=[].slice,f=/\s+/,c=function(){return!1},a=function(){return!0};o.prototype={isDefaultPrevented:c,isPropagationStopped:c,preventDefault:function(){this.isDefaultPrevented=a},stopPropagation:function(){this.isPropagationStopped=a}},t.event={on:function(t,n,i){var s,o=this;return n?(s=this._events||(this._events=[]),e(t,n,function(t,n){var e=r(t);e.cb=n,e.ctx=i,e.ctx2=i||o,e.id=s.length,s.push(e)}),this):this},one:function(t,n,i){var r=this;return n?(e(t,n,function(t,n){var e=function(){return r.off(t,e),n.apply(i||r,arguments)};e._cb=n,r.on(t,e,i)}),this):this},off:function(t,n,i){var r=this._events;return r?t||n||i?(e(t,n,function(t,n){s(r,t,n,i).forEach(function(t){delete r[t.id]})}),this):(this._events=[],this):this},trigger:function(t){var n,e,i,r,f,c=-1;if(!this._events||!t)return this;if("string"==typeof t&&(t=new o(t)),n=u.call(arguments,1),t.args=n,n.unshift(t),e=s(this._events,t.type))for(r=e.length;++c<r;)if((i=t.isPropagationStopped())||!1===(f=e[c]).cb.apply(f.ctx2,n)){i||(t.stopPropagation(),t.preventDefault());break}return this}},t.Event=o}(gmu,gmu.$);