var vault41Tour=function(t,e,n,o,a,i){"use strict";var r=function(){return t.getModelCount()},s={name:"vault41Tour",showDate:new Date,isLater:!1,isTaken:!1,isNever:!1,isAvailable:function(){return!e.allowOmarIA()&&!t.getPreference("seenVault4.0")},canStartAutomatically:function(){return!1},tour:{welcomeStep:{class:"tour-welcome-step",title:o.translateString("Welcome to your vault!"),contentText1:o.translateString("Your vault is a safe place to store passwords, notes, profiles for online shopping, and even documents."),contentText2:o.translateString("And no matter where you work, your vault keeps everything in sync, so you can stay organized and save time."),shouldDisableCycleHandler:!0,buttons:[{style:"btn-blue",sizeStyle:"button--cta",text:o.translateString("Show me around"),action:"start"},{style:"btn-link",sizeStyle:"button--secondary",text:o.translateString("Later"),action:"later"},{style:"btn-link",sizeStyle:"button--secondary",text:o.translateString("Never"),action:"never"}],position:{targetId:"#header",align:"left",orientation:"top",fillWidth:"#main"},openAction:function(){n.maximizeLeftMenu(),i("#vault").addClass("tour-overrides")},closeAction:function(){i("#vault").removeClass("tour-overrides")},exitAction:"never"},laterStep:{class:"tour-welcome-step",title:o.translateString("Welcome back!"),contentText1:o.translateString("Ready to get started? We'll help you set up your vault. It's easy-to-use, searchable, and organized just the way you like."),buttons:[{style:"btn-blue",sizeStyle:"button--cta",text:o.translateString("Show me around"),action:"start"},{style:"btn-link",sizeStyle:"button--secondary",text:o.translateString("No thanks"),action:"never"}],position:{targetId:"#header",align:"left",orientation:"top",fillWidth:"#main"},openAction:function(){n.maximizeLeftMenu(),i("#vault").addClass("tour-overrides")},closeAction:function(){i("#vault").removeClass("tour-overrides")},exitAction:"never"},steps:[{title:o.translateString("All your passwords, in one safe place."),contentText1:function(){return 1<=r()?o.translateString("LastPass remembers the login information for all of your favorite websites - and helps you create stronger passwords, too. Click any site in your vault to launch it and log in instantly."):o.translateString("Save usernames and passwords for all the websites and apps you visit, so LastPass can remember and fill them for you. You can save as you browse, too!")},buttons:[{style:"btn-blue",sizeStyle:"col-6 col-push-6",text:o.translateString("Next"),action:"next"}],position:{targetId:"#vaultMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){n.maximizeLeftMenu(),i(this.position.targetId).click()},exitAction:"exit"},{title:o.translateString("Who needs sticky notes?"),contentText1:o.translateString("Keep track of all the odds and ends of your digital life with secure notes. Store memberships, Wi-Fi passwords, credit card numbers, and more. They're always there, when and where you need them."),buttons:[{style:"btn-link",text:o.translateString("Back"),action:"previous"},{style:"btn-blue",text:o.translateString("Next"),action:"next"}],position:{targetId:"#notesMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i(this.position.targetId).click()},exitAction:"exit"},{title:o.translateString("Don't reach for your wallet."),contentText1:o.translateString("We've got you covered with form fill profiles. Add your payment cards and contact info, so you can checkout in a few clicks, no typing required."),buttons:[{style:"btn-link",text:o.translateString("Back"),action:"previous"},{style:"btn-blue",text:o.translateString("Next"),action:"next"}],position:{targetId:"#formFillMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i(this.position.targetId).click()},exitAction:"exit"},{title:o.translateString("Psst! Need to share a secret?"),contentText1:o.translateString("When you need to give friends or family access to one of your accounts, don't send a text or email. Just share through LastPass, so you both can login when and where you need to."),buttons:[{style:"btn-link",text:o.translateString("Back"),action:"previous"},{style:"btn-blue",text:o.translateString("Next"),action:"next"}],position:{targetId:".sharingMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){n.openSharingCenter()},exitAction:"exit"},{title:o.translateString("You're ready to get started!"),contentText1:o.translateString("There's a lot more to discover, but we hope this tour was a helpful start. You can revisit any time by selecting More options - Help - Vault Tour."),buttons:[{style:"btn-link",text:o.translateString("Back"),action:"previous"},{style:"btn-blue",text:o.translateString("Ok"),action:"close"}],exitAction:"close",position:{targetId:"#advancedMenuItem",align:"left",orientation:"bottom",offset:{left:30,top:0},pingOffset:{left:90,top:0},arrowPosition:180}}],exitStep:{title:o.translateString("Not a good time?"),contentText1:o.translateString("If you change your mind, you can revisit this tour by selecting More options - Help - Vault Tour."),buttons:[{style:"btn-blue",sizeStyle:"col-6 col-push-6",text:o.translateString("Ok"),action:"close"}],exitAction:"close",position:{targetId:"#advancedMenuItem",align:"left",orientation:"bottom",offset:{left:30,top:0},pingOffset:{left:90,top:0},arrowPosition:180},autoClose:5e3}}};return{getTourData:function(){return s}}}(LPProxy,LPFeatures,LPVault,Strings,Topics,jQuery);