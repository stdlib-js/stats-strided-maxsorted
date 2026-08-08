"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var x=v(function(C,q){
var c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(e,r,t,n){var a,i,u,s;return a=r.data,i=r.accessors[0],e<=0?NaN:e===1||t===0?i(a,0):(u=i(a,n),s=i(a,n+(e-1)*t),c(u)||c(s)?NaN:u===s?f(u)||f(s)?0:u:u>s?u:s)}q.exports=Z
});var o=v(function(D,p){
var d=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),j=x();function k(e,r,t,n){var a,i,u;return e<=0?NaN:(u=g(r),u.accessorProtocol?j(e,u,t,n):e===1||t===0?r[0]:(a=r[n],i=r[n+(e-1)*t],d(a)||d(i)?NaN:a===i?m(a)||m(i)?0:a:a>i?a:i))}p.exports=k
});var l=v(function(E,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),R=o();function h(e,r,t){return R(e,r,t,O(e,t))}y.exports=h
});var N=v(function(F,b){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=l(),z=o();w(P,"ndarray",z);b.exports=P
});var A=N();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
