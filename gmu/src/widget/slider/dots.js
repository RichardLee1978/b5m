!function(t,i){i.extend(!0,t.Slider,{template:{dots:'<p class="ui-slider-dots"><%= new Array( len + 1 ).join("<b></b>") %></p>'},options:{dots:!0,selector:{dots:".ui-slider-dots"}}}),t.Slider.option("dots",!0,function(){var s=function(i,s){var e=this._dots;"undefined"==typeof s||t.staticCall(e[s%this.length],"removeClass","ui-state-active"),t.staticCall(e[i%this.length],"addClass","ui-state-active")};this.on("done.dom",function(t,s,e){var n=s.find(e.selector.dots);n.length||(n=this.tpl2html("dots",{len:this.length}),n=i(n).appendTo(s)),this._dots=n.children().toArray()}),this.on("slide",function(t,i,e){s.call(this,i,e)}),this.on("ready",function(){s.call(this,this.index)})})}(gmu,gmu.$);