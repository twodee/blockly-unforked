// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Lua=new Blockly.Generator("Lua");Blockly.Lua.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.Lua.ORDER_ATOMIC=0;Blockly.Lua.ORDER_MEMBER=1;Blockly.Lua.ORDER_NEW=1;Blockly.Lua.ORDER_FUNCTION_CALL=2;Blockly.Lua.ORDER_INCREMENT=3;Blockly.Lua.ORDER_DECREMENT=3;Blockly.Lua.ORDER_LOGICAL_NOT=4;Blockly.Lua.ORDER_BITWISE_NOT=4;Blockly.Lua.ORDER_UNARY_PLUS=4;Blockly.Lua.ORDER_UNARY_NEGATION=4;Blockly.Lua.ORDER_TYPEOF=4;Blockly.Lua.ORDER_VOID=4;Blockly.Lua.ORDER_DELETE=4;Blockly.Lua.ORDER_MULTIPLICATION=5;Blockly.Lua.ORDER_DIVISION=5;Blockly.Lua.ORDER_MODULUS=5;Blockly.Lua.ORDER_ADDITION=6;
Blockly.Lua.ORDER_SUBTRACTION=6;Blockly.Lua.ORDER_BITWISE_SHIFT=7;Blockly.Lua.ORDER_RELATIONAL=8;Blockly.Lua.ORDER_IN=8;Blockly.Lua.ORDER_INSTANCEOF=8;Blockly.Lua.ORDER_EQUALITY=9;Blockly.Lua.ORDER_BITWISE_AND=10;Blockly.Lua.ORDER_BITWISE_XOR=11;Blockly.Lua.ORDER_BITWISE_OR=12;Blockly.Lua.ORDER_LOGICAL_AND=13;Blockly.Lua.ORDER_LOGICAL_OR=14;Blockly.Lua.ORDER_CONDITIONAL=15;Blockly.Lua.ORDER_ASSIGNMENT=16;Blockly.Lua.ORDER_COMMA=17;Blockly.Lua.ORDER_NONE=99;
Blockly.Lua.init=function(a){Blockly.Lua.definitions_=Object.create(null);Blockly.Lua.functionNames_=Object.create(null);Blockly.Lua.variableDB_?Blockly.Lua.variableDB_.reset():Blockly.Lua.variableDB_=new Blockly.Names(Blockly.Lua.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="var "+Blockly.Lua.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";";Blockly.Lua.definitions_.variables=b.join("\n")};
Blockly.Lua.finish=function(a){var b=[],c;for(c in Blockly.Lua.definitions_)b.push(Blockly.Lua.definitions_[c]);delete Blockly.Lua.definitions_;delete Blockly.Lua.functionNames_;Blockly.Lua.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Lua.scrubNakedValue=function(a){return a+";\n"};Blockly.Lua.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Lua.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Lua.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Lua.allNestedComments(d))&&(c+=Blockly.Lua.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Lua.blockToCode(e);return c+b+e};Blockly.Lua.logic={};Blockly.Lua.controls_if=function(a){for(var b=0,c=Blockly.Lua.valueToCode(a,"IF"+b,Blockly.Lua.ORDER_NONE)||"false",d=Blockly.Lua.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.elseifCount_;b++)c=Blockly.Lua.valueToCode(a,"IF"+b,Blockly.Lua.ORDER_NONE)||"false",d=Blockly.Lua.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.Lua.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.Lua.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Lua.ORDER_EQUALITY:Blockly.Lua.ORDER_RELATIONAL,d=Blockly.Lua.valueToCode(a,"A",c)||"0";a=Blockly.Lua.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Lua.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Lua.ORDER_LOGICAL_AND:Blockly.Lua.ORDER_LOGICAL_OR,d=Blockly.Lua.valueToCode(a,"A",c);a=Blockly.Lua.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Lua.logic_negate=function(a){var b=Blockly.Lua.ORDER_LOGICAL_NOT;return["!"+(Blockly.Lua.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Lua.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.logic_null=function(a){return["null",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.logic_ternary=function(a){var b=Blockly.Lua.valueToCode(a,"IF",Blockly.Lua.ORDER_CONDITIONAL)||"false",c=Blockly.Lua.valueToCode(a,"THEN",Blockly.Lua.ORDER_CONDITIONAL)||"null";a=Blockly.Lua.valueToCode(a,"ELSE",Blockly.Lua.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.Lua.ORDER_CONDITIONAL]};Blockly.Lua.procedures={};
Blockly.Lua.procedures_defreturn=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Lua.statementToCode(a,"STACK");Blockly.Lua.STATEMENT_PREFIX&&(c=Blockly.Lua.prefixLines(Blockly.Lua.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Lua.INDENT)+c);Blockly.Lua.INFINITE_LOOP_TRAP&&(c=Blockly.Lua.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.Lua.valueToCode(a,"RETURN",Blockly.Lua.ORDER_NONE)||"";d&&(d="  return "+d+
";\n");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]=Blockly.Lua.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=Blockly.Lua.scrub_(a,c);Blockly.Lua.definitions_[b]=c;return null};Blockly.Lua.procedures_defnoreturn=Blockly.Lua.procedures_defreturn;
Blockly.Lua.procedures_callreturn=function(a){for(var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Lua.valueToCode(a,"ARG"+d,Blockly.Lua.ORDER_COMMA)||"null";return[b+"("+c.join(", ")+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.procedures_callnoreturn=function(a){for(var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Lua.valueToCode(a,"ARG"+d,Blockly.Lua.ORDER_COMMA)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.Lua.procedures_ifreturn=function(a){var b="if ("+(Blockly.Lua.valueToCode(a,"CONDITION",Blockly.Lua.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};Blockly.Lua.loops={};
Blockly.Lua.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(+a.getFieldValue("TIMES")):Blockly.Lua.valueToCode(a,"TIMES",Blockly.Lua.ORDER_ASSIGNMENT)||"0",c=Blockly.Lua.statementToCode(a,"DO"),c=Blockly.Lua.addLoopTrap(c,a.id);a="";var d=Blockly.Lua.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Lua.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+="var "+e+" = "+b+";\n");return a+("for (var "+
d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Lua.controls_repeat=Blockly.Lua.controls_repeat_ext;Blockly.Lua.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Lua.valueToCode(a,"BOOL",b?Blockly.Lua.ORDER_LOGICAL_NOT:Blockly.Lua.ORDER_NONE)||"false",d=Blockly.Lua.statementToCode(a,"DO"),d=Blockly.Lua.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Lua.controls_for=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Lua.valueToCode(a,"FROM",Blockly.Lua.ORDER_ASSIGNMENT)||"0",d=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_ASSIGNMENT)||"0",e=Blockly.Lua.valueToCode(a,"BY",Blockly.Lua.ORDER_ASSIGNMENT)||"1",f=Blockly.Lua.statementToCode(a,"DO"),f=Blockly.Lua.addLoopTrap(f,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=parseFloat(c)<=parseFloat(d);
a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.Lua.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Lua.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+="var "+c+" = "+d+";\n"),d=Blockly.Lua.variableDB_.getDistinctName(b+
"_inc",Blockly.Variables.NAME_TYPE),a+="var "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+g+" > "+c+") {\n",a+=Blockly.Lua.INDENT+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+g+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.Lua.controls_forEach=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_ASSIGNMENT)||"[]",d=Blockly.Lua.statementToCode(a,"DO"),d=Blockly.Lua.addLoopTrap(d,a.id);a="";var e=c;c.match(/^\w+$/)||(e=Blockly.Lua.variableDB_.getDistinctName(b+"_list",Blockly.Variables.NAME_TYPE),a+="var "+e+" = "+c+";\n");c=Blockly.Lua.variableDB_.getDistinctName(b+"_index",Blockly.Variables.NAME_TYPE);d=Blockly.Lua.INDENT+
b+" = "+e+"["+c+"];\n"+d;return a+("for (var "+c+" in "+e+") {\n"+d+"}\n")};Blockly.Lua.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};Blockly.Lua.variables={};Blockly.Lua.variables_get=function(a){return[Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.variables_set=function(a){var b=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_ASSIGNMENT)||"0";return Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};Blockly.Lua.colour={};Blockly.Lua.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.colour_random=function(a){return[Blockly.Lua.provideFunction_("colour_random",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.colour_rgb=function(a){var b=Blockly.Lua.valueToCode(a,"RED",Blockly.Lua.ORDER_COMMA)||0,c=Blockly.Lua.valueToCode(a,"GREEN",Blockly.Lua.ORDER_COMMA)||0;a=Blockly.Lua.valueToCode(a,"BLUE",Blockly.Lua.ORDER_COMMA)||0;return[Blockly.Lua.provideFunction_("colour_rgb",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
"  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.colour_blend=function(a){var b=Blockly.Lua.valueToCode(a,"COLOUR1",Blockly.Lua.ORDER_COMMA)||"'#000000'",c=Blockly.Lua.valueToCode(a,"COLOUR2",Blockly.Lua.ORDER_COMMA)||"'#000000'";a=Blockly.Lua.valueToCode(a,"RATIO",Blockly.Lua.ORDER_COMMA)||.5;return[Blockly.Lua.provideFunction_("colour_blend",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);",
"  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);","  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.math={};Blockly.Lua.math_number=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Lua.ORDER_ADDITION],MINUS:[" - ",Blockly.Lua.ORDER_SUBTRACTION],MULTIPLY:[" * ",Blockly.Lua.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.Lua.ORDER_DIVISION],POWER:[null,Blockly.Lua.ORDER_COMMA]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.Lua.valueToCode(a,"A",b)||"0";a=Blockly.Lua.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return a=Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_UNARY_NEGATION)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.Lua.ORDER_UNARY_NEGATION];a="SIN"==b||"COS"==b||"TAN"==b?Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_DIVISION)||"0":Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_NONE)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c=
"Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,Blockly.Lua.ORDER_FUNCTION_CALL];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";
break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Lua.ORDER_DIVISION]};
Blockly.Lua.math_constant=function(a){return{PI:["Math.PI",Blockly.Lua.ORDER_MEMBER],E:["Math.E",Blockly.Lua.ORDER_MEMBER],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.Lua.ORDER_DIVISION],SQRT2:["Math.SQRT2",Blockly.Lua.ORDER_MEMBER],SQRT1_2:["Math.SQRT1_2",Blockly.Lua.ORDER_MEMBER],INFINITY:["Infinity",Blockly.Lua.ORDER_ATOMIC]}[a.getFieldValue("CONSTANT")]};
Blockly.Lua.math_number_property=function(a){var b=Blockly.Lua.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Lua.ORDER_MODULUS)||"0",c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return d=Blockly.Lua.provideFunction_("math_isPrime",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.",
"  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,Blockly.Lua.ORDER_FUNCTION_CALL];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";
break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Lua.valueToCode(a,"DIVISOR",Blockly.Lua.ORDER_MODULUS)||"0",d=b+" % "+a+" == 0"}return[d,Blockly.Lua.ORDER_EQUALITY]};Blockly.Lua.math_change=function(a){var b=Blockly.Lua.valueToCode(a,"DELTA",Blockly.Lua.ORDER_ADDITION)||"0";a=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};Blockly.Lua.math_round=Blockly.Lua.math_single;
Blockly.Lua.math_trig=Blockly.Lua.math_single;
Blockly.Lua.math_on_list=function(a){var b=a.getFieldValue("OP");switch(b){case "SUM":a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_MEMBER)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_COMMA)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_COMMA)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=Blockly.Lua.provideFunction_("math_mean",["function "+
Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=Blockly.Lua.provideFunction_("math_median",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});",
"  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "MODE":b=Blockly.Lua.provideFunction_("math_modes",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(values) {","  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {",
"    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }","  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);",
"    }","  }","  return modes;","}"]);a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=Blockly.Lua.provideFunction_("math_standard_deviation",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);","  }","  variance = variance / n;",
"  return Math.sqrt(variance);","}"]);a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"[]";a=b+"("+a+")";break;case "RANDOM":b=Blockly.Lua.provideFunction_("math_random_list",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.math_modulo=function(a){var b=Blockly.Lua.valueToCode(a,"DIVIDEND",Blockly.Lua.ORDER_MODULUS)||"0";a=Blockly.Lua.valueToCode(a,"DIVISOR",Blockly.Lua.ORDER_MODULUS)||"0";return[b+" % "+a,Blockly.Lua.ORDER_MODULUS]};
Blockly.Lua.math_constrain=function(a){var b=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_COMMA)||"0",c=Blockly.Lua.valueToCode(a,"LOW",Blockly.Lua.ORDER_COMMA)||"0";a=Blockly.Lua.valueToCode(a,"HIGH",Blockly.Lua.ORDER_COMMA)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.math_random_int=function(a){var b=Blockly.Lua.valueToCode(a,"FROM",Blockly.Lua.ORDER_COMMA)||"0";a=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_COMMA)||"0";return[Blockly.Lua.provideFunction_("math_random_int",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.math_random_float=function(a){return["Math.random()",Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.texts={};Blockly.Lua.text=function(a){return[Blockly.Lua.quote_(a.getFieldValue("TEXT")),Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.text_join=function(a){var b;if(0==a.itemCount_)return["''",Blockly.Lua.ORDER_ATOMIC];if(1==a.itemCount_)return b=Blockly.Lua.valueToCode(a,"ADD0",Blockly.Lua.ORDER_NONE)||"''",["String("+b+")",Blockly.Lua.ORDER_FUNCTION_CALL];if(2==a.itemCount_)return b=Blockly.Lua.valueToCode(a,"ADD0",Blockly.Lua.ORDER_NONE)||"''",a=Blockly.Lua.valueToCode(a,"ADD1",Blockly.Lua.ORDER_NONE)||"''",["String("+b+") + String("+a+")",Blockly.Lua.ORDER_ADDITION];b=Array(a.itemCount_);for(var c=0;c<a.itemCount_;c++)b[c]=
Blockly.Lua.valueToCode(a,"ADD"+c,Blockly.Lua.ORDER_COMMA)||"''";b="["+b.join(",")+"].join('')";return[b,Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.text_append=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''";return b+" = String("+b+") + String("+a+");\n"};
Blockly.Lua.text_length=function(a){return[(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_FUNCTION_CALL)||"''")+".length",Blockly.Lua.ORDER_MEMBER]};Blockly.Lua.text_isEmpty=function(a){return["!"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"''")+".length",Blockly.Lua.ORDER_LOGICAL_NOT]};
Blockly.Lua.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Lua.valueToCode(a,"FIND",Blockly.Lua.ORDER_NONE)||"''";return[(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"''")+"."+b+"("+c+") + 1",Blockly.Lua.ORDER_MEMBER]};
Blockly.Lua.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Lua.valueToCode(a,"AT",Blockly.Lua.ORDER_UNARY_NEGATION)||"1";a=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[a+".charAt(0)",Blockly.Lua.ORDER_FUNCTION_CALL];case "LAST":return[a+".slice(-1)",Blockly.Lua.ORDER_FUNCTION_CALL];case "FROM_START":return c=Blockly.isNumber(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",Blockly.Lua.ORDER_FUNCTION_CALL];case "FROM_END":return[a+
".slice(-"+c+").charAt(0)",Blockly.Lua.ORDER_FUNCTION_CALL];case "RANDOM":return b=Blockly.Lua.provideFunction_("text_random_letter",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",[b,Blockly.Lua.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Lua.text_getSubstring=function(a){var b=Blockly.Lua.valueToCode(a,"STRING",Blockly.Lua.ORDER_MEMBER)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Lua.valueToCode(a,"AT1",Blockly.Lua.ORDER_NONE)||"1";a=Blockly.Lua.valueToCode(a,"AT2",Blockly.Lua.ORDER_NONE)||"1";return["FIRST"==c&&"LAST"==d?b:Blockly.Lua.provideFunction_("text_get_substring",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {",
"      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;","    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];b?(a=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_MEMBER)||"''",a+=b):(b=Blockly.Lua.provideFunction_("text_toTitleCase",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||
"''",a=b+"("+a+")");return[a,Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.text_trim=function(a){var b={LEFT:".replace(/^[\\s\\xa0]+/, '')",RIGHT:".replace(/[\\s\\xa0]+$/, '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_MEMBER)||"''")+b,Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.text_print=function(a){return"window.alert("+(Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''")+");\n"};
Blockly.Lua.text_prompt_ext=function(a){var b="window.prompt("+(a.getField("TEXT")?Blockly.Lua.quote_(a.getFieldValue("TEXT")):Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''")+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="parseFloat("+b+")");return[b,Blockly.Lua.ORDER_FUNCTION_CALL]};Blockly.Lua.text_prompt=Blockly.Lua.text_prompt_ext;Blockly.Lua.lists={};Blockly.Lua.lists_create_empty=function(a){return["[]",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Lua.valueToCode(a,"ADD"+c,Blockly.Lua.ORDER_COMMA)||"null";b="["+b.join(", ")+"]";return[b,Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.lists_repeat=function(a){var b=Blockly.Lua.provideFunction_("lists_repeat",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=Blockly.Lua.valueToCode(a,"ITEM",Blockly.Lua.ORDER_COMMA)||"null";a=Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_COMMA)||"0";return[b+"("+c+", "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.lists_length=function(a){return[(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_FUNCTION_CALL)||"[]")+".length",Blockly.Lua.ORDER_MEMBER]};Blockly.Lua.lists_isEmpty=function(a){return["!"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"[]")+".length",Blockly.Lua.ORDER_LOGICAL_NOT]};
Blockly.Lua.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Lua.valueToCode(a,"FIND",Blockly.Lua.ORDER_NONE)||"''";return[(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"[]")+"."+b+"("+c+") + 1",Blockly.Lua.ORDER_MEMBER]};
Blockly.Lua.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Lua.valueToCode(a,"AT",Blockly.Lua.ORDER_UNARY_NEGATION)||"1";a=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_MEMBER)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",Blockly.Lua.ORDER_MEMBER];if("GET_REMOVE"==b)return[a+".shift()",Blockly.Lua.ORDER_MEMBER];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",Blockly.Lua.ORDER_MEMBER];
if("GET_REMOVE"==b)return[a+".pop()",Blockly.Lua.ORDER_MEMBER];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",Blockly.Lua.ORDER_MEMBER];if("GET_REMOVE"==b)return[a+".splice("+d+", 1)[0]",Blockly.Lua.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",Blockly.Lua.ORDER_FUNCTION_CALL];if("GET_REMOVE"==b||"REMOVE"==b){c=Blockly.Lua.provideFunction_("lists_remove_from_end",
["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,Blockly.Lua.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=Blockly.Lua.provideFunction_("lists_get_random_item",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);","  if (remove) {","    return list.splice(x, 1)[0];","  } else {",
"    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,Blockly.Lua.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.Lua.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Blockly.Lua.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),b="var "+a+" = "+c+";\n";c=a;return b}var c=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_MEMBER)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.Lua.valueToCode(a,"AT",Blockly.Lua.ORDER_NONE)||"1";a=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_ASSIGNMENT)||"null";if("FIRST"==e){if("SET"==
d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==e){f=Blockly.isNumber(f)?parseFloat(f)-1:f+" - 1";if("SET"==d)return c+"["+f+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+f+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+f+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+c+".length - "+
f+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();f=Blockly.Lua.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);e+="var "+f+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+f+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+f+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.Lua.lists_getSublist=function(a){var b=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Lua.valueToCode(a,"AT1",Blockly.Lua.ORDER_NONE)||"1";a=Blockly.Lua.valueToCode(a,"AT2",Blockly.Lua.ORDER_NONE)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":Blockly.Lua.provideFunction_("lists_get_sublist",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list, where1, at1, where2, at2) {","  function getAt(where, at) {",
"    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {","      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",Blockly.Lua.ORDER_FUNCTION_CALL]};
Blockly.Lua.lists_split=function(a){var b=Blockly.Lua.valueToCode(a,"INPUT",Blockly.Lua.ORDER_MEMBER),c=Blockly.Lua.valueToCode(a,"DELIM",Blockly.Lua.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw"Unknown mode: "+a;return[b+"."+a+"("+c+")",Blockly.Lua.ORDER_FUNCTION_CALL]};