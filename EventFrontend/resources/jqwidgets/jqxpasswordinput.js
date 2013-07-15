/*
jQWidgets v2.9.2 (2013-July-04)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxPasswordInput","",{});a.extend(a.jqx._jqxPasswordInput.prototype,{defineInstance:function(){this.width="auto";this.height="auto";this.disabled=false;this.rtl=false;this.placeHolder=null;this.showStrength=false;this.showStrengthPosition="right";this.maxLength=null;this.minLength=null;this.showPasswordIcon=true;this.strengthTypeRenderer=null;this.passwordStrength=null;this.localization={passwordStrengthString:"Password strength",tooShort:"Too short",weak:"Weak",fair:"Fair",good:"Good",strong:"Strong"};this.strengthColors={tooShort:"rgb(170, 0, 51)",weak:"rgb(170, 0, 51)",fair:"rgb(255, 204, 51)",good:"rgb(45, 152, 243)",strong:"rgb(118, 194, 97)"}},createInstance:function(b){this.render()},render:function(){var c=a.jqx.browser.browser;var b=a.jqx.browser.version;this._browserCheck=c!="msie"||(b!="7.0"&&b!="8.0");this.widgetID=this.element.id;var f=this.host;var e="Invalid input type. Please set the type attribute of the input element to password.";try{if(f.attr("type")!="password"){throw e}}catch(d){alert(d)}f.attr("type","password");this._hidden=true;this._setAttributes();this._setTheme();this._showPassword();this._showStrength()},refresh:function(b){if(b==true){return}this.removeHandler(this.host,"focus.passwordinput"+this.widgetID);this.removeHandler(this.host,"blur.passwordinput"+this.widgetID);this.removeHandler(this.host,"click.passwordinput"+this.widgetID);this.removeHandler(a(window),"resize.passwordinput"+this.widgetID);this.removeHandler(this.host,"keyup.passwordinput"+this.widgetID);this.removeHandler(icon,"mousedown.passwordinput"+this.iconID);this.removeHandler(icon,"mouseup.passwordinput"+this.iconID);this.removeHandler(a(document),"mousedown.passwordinput"+this.iconID);this._setAttributes();this._setTheme();this._showPassword();this._showStrength()},val:function(b){if(a.isEmptyObject(b)&&b!=""){return this.element.value}else{this.element.value=b}},propertyChangedHandler:function(b,c,f,e){var d=this.host;if(c=="placeHolder"){if(this.browserCheck){if("placeholder" in this.element){d.attr("placeholder",this.placeHolder)}else{if(d.val()==""){d.attr("type","text");d.val(this.placeHolder)}else{if(d.val()==f){d.val(this.placeHolder)}}}}}else{this.refresh()}},_setAttributes:function(){var b=this;var c=this.host;c.width(this.width);c.height(this.height);if(this.maxLength){c.attr("maxlength",this.maxLength)}if(this.minLength){c.attr("minLength",this.minLength)}if(this.placeHolder&&this._browserCheck){if("placeholder" in this.element){c.attr("placeholder",this.placeHolder)}else{if(c.val()==""){c.attr("type","text");c.val(this.placeHolder)}}}if(this.disabled==true){c.attr("disabled","disabled")}else{c.removeAttr("disabled")}this.addHandler(c,"click.passwordinput"+this.widgetID,function(){if(b.showPasswordIcon&&b.icon){b.icon.show();b._positionIcon()}});this.addHandler(c,"focus.passwordinput"+this.widgetID,function(){b._focused=true;b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.placeHolder&&b.browserCheck&&!("placeholder" in b.element)&&c.val()==b.placeHolder){c.val("");if(b._hidden==true){c.attr("type","password")}}if(b.showPasswordIcon==true&&b.browserCheck){if(b.rtl==false){b.host.addClass(b.toThemeProperty("jqx-passwordinput-password-icon-ltr"))}else{b.host.addClass(b.toThemeProperty("jqx-passwordinput-password-icon-rtl"))}}if(b.val().length>0){if(b.showStrength==true){var d=c.jqxTooltip("content");if(d){c.jqxTooltip("open")}}}if(b.showPasswordIcon&&b.icon){b.icon.show();b._positionIcon()}});this.addHandler(c,"blur.passwordinput"+this.widgetID,function(){b._focused=false;b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.placeHolder&&b.browserCheck&&!("placeholder" in b.element)&&c.val()==""){c.val(b.placeHolder);c.attr("type","text")}if(b.showPasswordIcon==true&&b.browserCheck){if(b.rtl==false){b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-ltr"))}else{b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-rtl"))}}if(b.showStrength==true){c.jqxTooltip("close")}if(b.showPasswordIcon&&b.icon){b.icon.hide()}})},_setTheme:function(){var b=this.host;b.addClass(this.toThemeProperty("jqx-widget"));b.addClass(this.toThemeProperty("jqx-input"));if(this.rtl==true){b.addClass(this.toThemeProperty("jqx-rtl"));b.css("direction","rtl")}else{b.removeClass(this.toThemeProperty("jqx-rtl"));b.css("direction","ltr")}},_showPassword:function(){if(this.showPasswordIcon==true&&this._browserCheck){var e=this;this.iconID=this.widgetID+"-password-icon";a("<span tabindex='-1' hasfocus='false' style='position: absolute; display: none;' id='"+this.iconID+"'></span>").insertAfter(this.host);var d=a("#"+this.iconID);this.icon=d;d.addClass(this.toThemeProperty("jqx-passwordinput-password-icon"));d.attr("title","Show password");e._positionIcon();var c=function(){e.host.attr("type","password");e._hidden=true;d.attr("title",e.localization.showPasswordString)};var b=function(){if(e._hidden==false){c()}else{if(e._hidden==true){e.host.attr("type","text");e._hidden=false;d.attr("title",e.localization.hidePasswordString)}}};this.addHandler(d,"mousedown.passwordinput"+this.iconID,function(f){b();return false});this.addHandler(d,"mouseup.passwordinput"+this.iconID,function(f){c();return false});this.addHandler(a(document),"mousedown.passwordinput"+this.iconID,function(f){if(e._focused){c()}})}},_positionIcon:function(){var c=this.host.offset();var b=this.host.outerWidth();var d=this.host.outerHeight();if(this.rtl==true){this.icon.offset({top:c.top+d/2-9/2,left:c.left+2})}else{this.icon.offset({top:c.top+d/2-9/2,left:c.left+b-18})}},_showStrength:function(){if(this.showStrength==true){if(this.host.jqxTooltip!=undefined){var e=this.widgetID+"Strength";var h=e+"Value";var c=e+"Indicator";var f;if(!this.strengthTypeRenderer){f="<div style='width: 220px;' id='"+e+"'><div><span style='font-weight: bold;'>"+this.localization.passwordStrengthString+": </span><span id='"+h+"'></span></div><div id='"+c+"'></div></div>"}else{var d=this.host.val();if(!("placeholder" in this.element)&&this._browserCheck&&d==this.placeHolder){d=""}this._countCharacters();var b=this.localization.tooShort;var g=this.strengthTypeRenderer(d,{letters:this.letters,numbers:this.numbers,specialKeys:this.specials},b);f=g}this.host.jqxTooltip({theme:this.theme,position:this.showStrengthPosition,content:f,trigger:"none",autoHide:false,rtl:this.rtl});if(!this.strengthTypeRenderer){a("#"+h).html(this.localization.tooShort);a("#"+c).addClass("jqx-passwordinput-password-strength-inicator").css("background-color",this.strengthColors.tooShort);if(this.rtl==false){a("#"+c).css("float","left")}else{a("#"+c).css("float","right")}}this._checkStrength()}else{throw new Error("jqxPasswordInput: Missing reference to jqxtooltip.js")}}},_checkStrength:function(){var b=this;var c=this.host;this.addHandler(a(window),"resize.passwordinput"+this.widgetID,function(){if(b.icon){b.icon.hide()}});this.addHandler(this.host,"keyup.passwordinput"+this.widgetID,function(){var f=b.host.val();var g=f.length;b._countCharacters();if(g>0){if(b.showStrength==true){var j=!c.jqxTooltip("opened");if(j){c.jqxTooltip("open")}}}var e=b.letters+b.numbers+2*b.specials+b.letters*b.numbers/2+g;var d;if(g<8){d=b.localization.tooShort}else{if(e<20){d=b.localization.weak}else{if(e<30){d=b.localization.fair}else{if(e<40){d=b.localization.good}else{d=b.localization.strong}}}}if(b.strengthTypeRenderer){var i=b.strengthTypeRenderer(f,{letters:b.letters,numbers:b.numbers,specialKeys:b.specials},d);b.host.jqxTooltip({content:i})}else{if(b.passwordStrength){var i=b.passwordStrength(f,{letters:b.letters,numbers:b.numbers,specialKeys:b.specials},d);a.each(b.localization,function(){var k=this;if(i==k){d=i;return false}})}a("#"+b.widgetID+"StrengthValue").html(d);var h=a("#"+b.widgetID+"StrengthIndicator");switch(d){case b.localization.tooShort:h.css({width:"20%","background-color":b.strengthColors.tooShort});break;case b.localization.weak:h.css({width:"40%","background-color":b.strengthColors.weak});break;case b.localization.fair:h.css({width:"60%","background-color":b.strengthColors.fair});break;case b.localization.good:h.css({width:"80%","background-color":b.strengthColors.good});break;case b.localization.strong:h.css({width:"100%","background-color":b.strengthColors.strong});break}}})},_countCharacters:function(){this.letters=0;this.numbers=0;this.specials=0;var d="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";var b=this.host.val();var f=b.length;for(var c=0;c<f;c++){var g=b.charAt(c);var e=b.charCodeAt(c);if((e>64&&e<91)||(e>96&&e<123)||(e>127&&e<155)||(e>159&&e<166)){this.letters+=1;continue}if(isNaN(g)==false){this.numbers+=1;continue}if(d.indexOf(g)!=-1){this.specials+=1;continue}}}})})(jQuery);