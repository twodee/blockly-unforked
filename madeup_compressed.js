// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Madeup=new Blockly.Generator("Madeup");Blockly.Madeup.INDENT="  ";Blockly.Madeup.ORDER_ATOMIC=0;Blockly.Madeup.ORDER_ARRAY_OF=2;Blockly.Madeup.ORDER_ARRAY_BY=3;Blockly.Madeup.ORDER_EXPONENTIATION=4;Blockly.Madeup.ORDER_MULTIPLICATIVE=6;Blockly.Madeup.ORDER_ADDITIVE=7;Blockly.Madeup.ORDER_RELATIONAL=11;Blockly.Madeup.ORDER_EQUALITY=12;Blockly.Madeup.ORDER_LOGICAL_NOT=13;Blockly.Madeup.ORDER_LOGICAL_AND=14;Blockly.Madeup.ORDER_LOGICAL_OR=15;Blockly.Madeup.ORDER_CONDITIONAL=16;
Blockly.Madeup.ORDER_FUNCTION_CALL_FIRST_PARAMETER=30;Blockly.Madeup.ORDER_FUNCTION_CALL_ONLY_PARAMETER=30;Blockly.Madeup.ORDER_FIRST_PARAMETER_SUBTRACTION=31;Blockly.Madeup.ORDER_UNARY_NEGATION=31;Blockly.Madeup.ORDER_FUNCTION_CALL_NOT_FIRST_PARAMETER=32;Blockly.Madeup.ORDER_NONE=99;Blockly.Madeup.ORDER_FUNCTION_CALL=33;Blockly.Madeup.PROCEDURES_DEFRETURN_COMMENT=null;Blockly.Madeup.PROCEDURES_DEFNORETURN_COMMENT=null;Blockly.Madeup.addReservedWords("");
Blockly.Madeup.init=function(a){Blockly.Madeup.variableDB_?Blockly.Madeup.variableDB_.reset():Blockly.Madeup.variableDB_=new Blockly.Names(Blockly.Madeup.RESERVED_WORDS_)};Blockly.Madeup.finish=function(a){return a};Blockly.Madeup.scrubNakedValue=function(a){return a+"\n"};
Blockly.Madeup.scrub_=function(a,b){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(d+=Blockly.Madeup.prefixLines(e,"-- ")+"\n");for(var c=0;c<a.inputList.length;c++)a.inputList[c].type==Blockly.INPUT_VALUE&&(e=a.inputList[c].connection.targetBlock())&&(e=Blockly.Madeup.allNestedComments(e))&&(d+=Blockly.Madeup.prefixLines(e,"-- "))}c=a.nextConnection&&a.nextConnection.targetBlock();c=Blockly.Madeup.blockToCode(c);return d+b+c};
function generateInMode(a,b,d){return a.outputConnection?[b,d]:b+"\n"}Blockly.Madeup.variables_get=function(a){var b=Blockly.Madeup.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return generateInMode(a,b,Blockly.Madeup.ORDER_ATOMIC)};Blockly.Madeup.variables_set=function(a){var b=Blockly.Madeup.valueToCode(a,"VALUE",Blockly.Madeup.ORDER_NONE)||"0",d=Blockly.Madeup.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return generateInMode(a,d+" = "+b,Blockly.Madeup.ORDER_ATOMIC)};
Blockly.Madeup.procedures_defnoreturn=function(a){for(var b=Blockly.Madeup.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),d=Blockly.Madeup.statementToCode(a,"STACK"),e=[],c=0;c<a.arguments_.length;c++)e[c]=Blockly.Madeup.variableDB_.getName(a.arguments_[c],Blockly.Variables.NAME_TYPE);b="to "+b+" "+e.join(", ")+"\n"+d+"end";return generateInMode(a,b,Blockly.Madeup.ORDER_ATOMIC)};
Blockly.Madeup.procedures_callnoreturn=function(a){for(var b=Blockly.Madeup.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),d=[],e,c=0;c<a.arguments_.length;c++)e=1==a.arguments_.length?Blockly.Madeup.ORDER_FUNCTION_CALL_ONLY_PARAMETER:0==c?Blockly.Madeup.ORDER_FUNCTION_CALL_FIRST_PARAMETER:Blockly.Madeup.ORDER_FUNCTION_CALL_NOT_FIRST_PARAMETER,d[c]=Blockly.Madeup.valueToCode(a,"ARG"+c,e)||"";d.length&&(b+=" "+d.join(", "));return generateInMode(a,b,Blockly.Madeup.ORDER_FUNCTION_CALL)};
Blockly.Madeup.madeup_array_literal=function(a){for(var b=[],d=0;d<a.itemCount_;d++)b[d]=Blockly.Madeup.valueToCode(a,"ELEMENT"+d,Blockly.Madeup.ORDER_ATOMIC)||"";b="{"+b.join(", ")+"}";return generateInMode(a,b,Blockly.Madeup.ORDER_ATOMIC)};for(var block_type in block_definitions)block_definitions.hasOwnProperty(block_type)&&(Blockly.Madeup[block_type]=block_definitions[block_type].generator);