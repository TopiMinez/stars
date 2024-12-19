gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDInfoObjects1= [];
gdjs.ShopCode.GDInfoObjects2= [];
gdjs.ShopCode.GDInfoObjects3= [];
gdjs.ShopCode.GDInfoObjects4= [];
gdjs.ShopCode.GDCandie100Objects1= [];
gdjs.ShopCode.GDCandie100Objects2= [];
gdjs.ShopCode.GDCandie100Objects3= [];
gdjs.ShopCode.GDCandie100Objects4= [];
gdjs.ShopCode.GDCake50Objects1= [];
gdjs.ShopCode.GDCake50Objects2= [];
gdjs.ShopCode.GDCake50Objects3= [];
gdjs.ShopCode.GDCake50Objects4= [];
gdjs.ShopCode.GDHeart15Objects1= [];
gdjs.ShopCode.GDHeart15Objects2= [];
gdjs.ShopCode.GDHeart15Objects3= [];
gdjs.ShopCode.GDHeart15Objects4= [];
gdjs.ShopCode.GDBrownButtonWithShadowObjects1= [];
gdjs.ShopCode.GDBrownButtonWithShadowObjects2= [];
gdjs.ShopCode.GDBrownButtonWithShadowObjects3= [];
gdjs.ShopCode.GDBrownButtonWithShadowObjects4= [];
gdjs.ShopCode.GDBGObjects1= [];
gdjs.ShopCode.GDBGObjects2= [];
gdjs.ShopCode.GDBGObjects3= [];
gdjs.ShopCode.GDBGObjects4= [];
gdjs.ShopCode.GDStarObjects1= [];
gdjs.ShopCode.GDStarObjects2= [];
gdjs.ShopCode.GDStarObjects3= [];
gdjs.ShopCode.GDStarObjects4= [];
gdjs.ShopCode.GDBalanceObjects1= [];
gdjs.ShopCode.GDBalanceObjects2= [];
gdjs.ShopCode.GDBalanceObjects3= [];
gdjs.ShopCode.GDBalanceObjects4= [];
gdjs.ShopCode.GDBackButtonObjects1= [];
gdjs.ShopCode.GDBackButtonObjects2= [];
gdjs.ShopCode.GDBackButtonObjects3= [];
gdjs.ShopCode.GDBackButtonObjects4= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects3[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects3[i].getVariables().getFromIndex(0)) == 50 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects3[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBrownButtonWithShadowObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBrownButtonWithShadowObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBrownButtonWithShadowObjects3[i].SetLabelText("100 Токенов", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBrownButtonWithShadowObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].SetLabelText("45 Токенов", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 45;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0)) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(45);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "1", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "4", runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1)) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "6", runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(2).setNumber(gdjs.randomInRange(1, 9999));
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "8", runtimeScene.getGame().getVariables().getFromIndex(4).getChild(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBrownButtonWithShadowObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].SetLabelText("ID 1" + runtimeScene.getGame().getVariables().getFromIndex(4).getChild(2).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) == 50 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects2[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0)) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(100);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "1", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "5", runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1)) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "7", runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).setNumber(gdjs.randomInRange(1, 9999));
}{gdjs.evtTools.storage.writeNumberInJSONFile("a", "9", runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.ShopCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBrownButtonWithShadowObjects1[i].getVariableNumber(gdjs.ShopCode.GDBrownButtonWithShadowObjects1[i].getVariables().getFromIndex(0)) == 50 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBrownButtonWithShadowObjects1[k] = gdjs.ShopCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(1)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBrownButtonWithShadowObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDBrownButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBrownButtonWithShadowObjects1[i].SetLabelText("ID 1" + runtimeScene.getGame().getVariables().getFromIndex(5).getChild(2).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


gdjs.ShopCode.eventsList0(runtimeScene);
}


{


gdjs.ShopCode.eventsList1(runtimeScene);
}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDCandie100Objects1Objects = Hashtable.newFrom({"Candie100": gdjs.ShopCode.GDCandie100Objects1});
gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.ShopCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBackButtonObjects1[k] = gdjs.ShopCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.ShopCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.ShopCode.GDBalanceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Candie100"), gdjs.ShopCode.GDCandie100Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDCandie100Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDInfoObjects1.length = 0;
gdjs.ShopCode.GDInfoObjects2.length = 0;
gdjs.ShopCode.GDInfoObjects3.length = 0;
gdjs.ShopCode.GDInfoObjects4.length = 0;
gdjs.ShopCode.GDCandie100Objects1.length = 0;
gdjs.ShopCode.GDCandie100Objects2.length = 0;
gdjs.ShopCode.GDCandie100Objects3.length = 0;
gdjs.ShopCode.GDCandie100Objects4.length = 0;
gdjs.ShopCode.GDCake50Objects1.length = 0;
gdjs.ShopCode.GDCake50Objects2.length = 0;
gdjs.ShopCode.GDCake50Objects3.length = 0;
gdjs.ShopCode.GDCake50Objects4.length = 0;
gdjs.ShopCode.GDHeart15Objects1.length = 0;
gdjs.ShopCode.GDHeart15Objects2.length = 0;
gdjs.ShopCode.GDHeart15Objects3.length = 0;
gdjs.ShopCode.GDHeart15Objects4.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects3.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects4.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;
gdjs.ShopCode.GDBGObjects3.length = 0;
gdjs.ShopCode.GDBGObjects4.length = 0;
gdjs.ShopCode.GDStarObjects1.length = 0;
gdjs.ShopCode.GDStarObjects2.length = 0;
gdjs.ShopCode.GDStarObjects3.length = 0;
gdjs.ShopCode.GDStarObjects4.length = 0;
gdjs.ShopCode.GDBalanceObjects1.length = 0;
gdjs.ShopCode.GDBalanceObjects2.length = 0;
gdjs.ShopCode.GDBalanceObjects3.length = 0;
gdjs.ShopCode.GDBalanceObjects4.length = 0;
gdjs.ShopCode.GDBackButtonObjects1.length = 0;
gdjs.ShopCode.GDBackButtonObjects2.length = 0;
gdjs.ShopCode.GDBackButtonObjects3.length = 0;
gdjs.ShopCode.GDBackButtonObjects4.length = 0;

gdjs.ShopCode.eventsList3(runtimeScene);
gdjs.ShopCode.GDInfoObjects1.length = 0;
gdjs.ShopCode.GDInfoObjects2.length = 0;
gdjs.ShopCode.GDInfoObjects3.length = 0;
gdjs.ShopCode.GDInfoObjects4.length = 0;
gdjs.ShopCode.GDCandie100Objects1.length = 0;
gdjs.ShopCode.GDCandie100Objects2.length = 0;
gdjs.ShopCode.GDCandie100Objects3.length = 0;
gdjs.ShopCode.GDCandie100Objects4.length = 0;
gdjs.ShopCode.GDCake50Objects1.length = 0;
gdjs.ShopCode.GDCake50Objects2.length = 0;
gdjs.ShopCode.GDCake50Objects3.length = 0;
gdjs.ShopCode.GDCake50Objects4.length = 0;
gdjs.ShopCode.GDHeart15Objects1.length = 0;
gdjs.ShopCode.GDHeart15Objects2.length = 0;
gdjs.ShopCode.GDHeart15Objects3.length = 0;
gdjs.ShopCode.GDHeart15Objects4.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects3.length = 0;
gdjs.ShopCode.GDBrownButtonWithShadowObjects4.length = 0;
gdjs.ShopCode.GDBGObjects1.length = 0;
gdjs.ShopCode.GDBGObjects2.length = 0;
gdjs.ShopCode.GDBGObjects3.length = 0;
gdjs.ShopCode.GDBGObjects4.length = 0;
gdjs.ShopCode.GDStarObjects1.length = 0;
gdjs.ShopCode.GDStarObjects2.length = 0;
gdjs.ShopCode.GDStarObjects3.length = 0;
gdjs.ShopCode.GDStarObjects4.length = 0;
gdjs.ShopCode.GDBalanceObjects1.length = 0;
gdjs.ShopCode.GDBalanceObjects2.length = 0;
gdjs.ShopCode.GDBalanceObjects3.length = 0;
gdjs.ShopCode.GDBalanceObjects4.length = 0;
gdjs.ShopCode.GDBackButtonObjects1.length = 0;
gdjs.ShopCode.GDBackButtonObjects2.length = 0;
gdjs.ShopCode.GDBackButtonObjects3.length = 0;
gdjs.ShopCode.GDBackButtonObjects4.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
