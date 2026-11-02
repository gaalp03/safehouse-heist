var Hh=0,ql=1,Gh=2;var gr=1,Vh=2,Es=3,Ln=0,Je=1,ke=2,Zn=0,Cs=1,Ye=2,Yl=3,$l=4,Wh=5;var Jn=100,Xh=101,qh=102,Yh=103,$h=104,Kh=200,Zh=201,Jh=202,jh=203,Kl=204,Zl=205,Qh=206,tf=207,ef=208,nf=209,sf=210,rf=211,af=212,of=213,lf=214,pa=0,ma=1,ga=2,ys=3,xa=4,ya=5,va=6,_a=7,$a=0,cf=1,hf=2,$i=0,Jl=1,jl=2,Ql=3,xr=4,tc=5,ec=6,ic=7;var nc=300,jn=301,Rs=302,Ka=303,Za=304,Sn=1e3,ci=1001,ba=1002,qe=1003,ff=1004;var yr=1005;var ai=1006,Ja=1007;var fn=1008;var hi=1009,sc=1010,rc=1011,Ps=1012,ja=1013,Li=1014,Si=1015,Ii=1016,Qa=1017,to=1018,Qn=1020,ac=35902,oc=35899,lc=1021,cc=1022,ki=1023,ln=1026,un=1027,eo=1028,io=1029,In=1030,no=1031;var so=1033,vr=33776,_r=33777,br=33778,Mr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,fo=37496,uo=37488,po=37489,Sr=37490,mo=37491,go=37808,xo=37809,yo=37810,vo=37811,_o=37812,bo=37813,Mo=37814,So=37815,wo=37816,To=37817,Ao=37818,Eo=37819,Co=37820,Ro=37821,Po=36492,Lo=36494,Io=36495,ko=36283,Do=36284,wr=36285,No=36286;var Ks=2300,Ma=2301,ua=2302,Fl=2303,zl=2400,Bl=2401,Hl=2402;var uf=3200;var Uo=0,df=1,dn="",Xe="srgb",Zs="srgb-linear",Js="linear",ce="srgb";var da=7680;var pf=519,mf=512,gf=513,xf=514,hc=515,yf=516,vf=517,fc=518,uc=519,_f=35044;var dc="300 es",Mi=2e3,vs=2001;function ju(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bf(){let n=js("canvas");return n.style.display="block",n}var hh={},_s=null;function pc(...n){let t="THREE."+n.shift();_s?_s("log",t,...n):console.log(t,...n)}function Mf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=Mf(n);let t="THREE."+n.shift();if(_s)_s("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=Mf(n);let t="THREE."+n.shift();if(_s)_s("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function $s(...n){let t=n.join(" ");t in hh||(hh[t]=!0,Nt(...n))}function Sf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var wf={[pa]:pa,[ga]:va,[xa]:xa,[ys]:ya,[ma]:ma,[va]:ga,[_a]:_a,[ya]:ys},Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ml=Math.PI/180,Sa=180/Math.PI;function Tr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function td(n,t){return(n%t+t)%t}function gl(n,t,e){return(1-e)*n+e*t}function Tf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(n,t){if(t.constructor===Float32Array)return n;let e=mc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function id(n,t){if(t.constructor===Float32Array)return n;let e=mc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var _c=class _c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;var qt=_c,Hi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==f||h!==d||c!==g){let m=l*f+h*d+c*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+f*o,h=h*p+d*o,c=c*p+g*o,u=u*p+_*o}else{l=l*p+f*o,h=h*p+d*o,c=c*p+g*o,u=u*p+_*o;let y=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=y,h*=y,c*=y,u*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+c*u+l*d-h*f,t[e+1]=l*g+c*f+h*u-o*d,t[e+2]=h*g+c*d+o*f-l*u,t[e+3]=c*g-o*u-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"YZX":this._x=f*c*u+h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u-f*d*g;break;case"XZY":this._x=f*c*u-h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u+f*d*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(c-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bc=class bc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),c=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xl.copy(this).projectOnVector(t),this.sub(xl)}reflect(t){return this.sub(xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bc.prototype.isVector3=!0;var X=bc,xl=new X,fh=new Hi,Mc=class Mc{constructor(t,e,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],b=s[4],x=s[7],S=s[2],w=s[5],v=s[8];return r[0]=a*_+o*y+l*S,r[3]=a*m+o*b+l*w,r[6]=a*p+o*x+l*v,r[1]=h*_+c*y+u*S,r[4]=h*m+c*b+u*w,r[7]=h*p+c*x+u*v,r[2]=f*_+d*y+g*S,r[5]=f*m+d*b+g*w,r[8]=f*p+d*x+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,f=o*l-c*r,d=h*r-a*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*h-c*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*l-h*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mc.prototype.isMatrix3=!0;var Ht=Mc,yl=new Ht,uh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){let n={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=on(s.r),s.g=on(s.g),s.b=on(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===dn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zs]:{primaries:t,whitePoint:i,transfer:Js,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}var Qt=nd();function on(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ns,wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ns===void 0&&(ns=js("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=on(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(on(e[i]/255)*255):e[i]=on(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sd=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var rd=0,_l=new X,oi=class n extends Bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ci,s=ci,r=ai,a=fn,o=ki,l=hi,h=n.DEFAULT_ANISOTROPY,c=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Tr(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=nc;oi.DEFAULT_ANISOTROPY=1;var Sc=class Sc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,x=(d+1)/2,S=(p+1)/2,w=(c+f)/4,v=(u+_)/4,M=(g+m)/4;return b>x&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=v/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=v/r,s=M/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-c)/y,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sc.prototype.isVector4=!0;var _e=Sc,Ta=class extends Bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new oi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Ta{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qs=class extends oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ya=class Ya{constructor(t,e,i,s,r,a,o,l,h,c,u,f,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,c,u,f,d,g,_,m)}set(t,e,i,s,r,a,o,l,h,c,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*c,d=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=d+g*h,e[5]=f-_*h,e[9]=-o*l,e[2]=_-f*h,e[6]=g+d*h,e[10]=a*l}else if(t.order==="YXZ"){let f=l*c,d=l*u,g=h*c,_=h*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*c,d=l*u,g=h*c,_=h*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*c,e[9]=_-f*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*c,d=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=g*h-d,e[8]=f*h+_,e[1]=l*u,e[5]=_*h+f,e[9]=d*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,d=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+_,e[5]=a*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,od)}lookAt(t,e,i){let s=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),xn.crossVectors(i,ui),xn.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),xn.crossVectors(i,ui)),xn.normalize(),Hr.crossVectors(ui,xn),s[0]=xn.x,s[4]=Hr.x,s[8]=ui.x,s[1]=xn.y,s[5]=Hr.y,s[9]=ui.y,s[2]=xn.z,s[6]=Hr.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],b=i[7],x=i[11],S=i[15],w=s[0],v=s[4],M=s[8],k=s[12],P=s[1],I=s[5],O=s[9],C=s[13],E=s[2],B=s[6],U=s[10],D=s[14],q=s[3],V=s[7],Z=s[11],j=s[15];return r[0]=a*w+o*P+l*E+h*q,r[4]=a*v+o*I+l*B+h*V,r[8]=a*M+o*O+l*U+h*Z,r[12]=a*k+o*C+l*D+h*j,r[1]=c*w+u*P+f*E+d*q,r[5]=c*v+u*I+f*B+d*V,r[9]=c*M+u*O+f*U+d*Z,r[13]=c*k+u*C+f*D+d*j,r[2]=g*w+_*P+m*E+p*q,r[6]=g*v+_*I+m*B+p*V,r[10]=g*M+_*O+m*U+p*Z,r[14]=g*k+_*C+m*D+p*j,r[3]=y*w+b*P+x*E+S*q,r[7]=y*v+b*I+x*B+S*V,r[11]=y*M+b*O+x*U+S*Z,r[15]=y*k+b*C+x*D+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],y=l*d-h*f,b=o*d-h*u,x=o*f-l*u,S=a*d-h*c,w=a*f-l*c,v=a*u-o*c;return e*(_*y-m*b+p*x)-i*(g*y-m*S+p*w)+s*(g*b-_*S+p*v)-r*(g*x-_*w+m*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=e*o-i*a,b=e*l-s*a,x=e*h-r*a,S=i*l-s*o,w=i*h-r*o,v=s*h-r*l,M=c*_-u*g,k=c*m-f*g,P=c*p-d*g,I=u*m-f*_,O=u*p-d*_,C=f*p-d*m,E=y*C-b*O+x*I+S*P-w*k+v*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/E;return t[0]=(o*C-l*O+h*I)*B,t[1]=(s*O-i*C-r*I)*B,t[2]=(_*v-m*w+p*S)*B,t[3]=(f*w-u*v-d*S)*B,t[4]=(l*P-a*C-h*k)*B,t[5]=(e*C-s*P+r*k)*B,t[6]=(m*x-g*v-p*b)*B,t[7]=(c*v-f*x+d*b)*B,t[8]=(a*O-o*P+h*M)*B,t[9]=(i*P-e*O-r*M)*B,t[10]=(g*w-_*x+p*y)*B,t[11]=(u*x-c*w-d*y)*B,t[12]=(o*k-a*I-l*M)*B,t[13]=(e*I-i*k+s*M)*B,t[14]=(_*b-g*S-m*y)*B,t[15]=(c*S-u*b+f*y)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,f=r*h,d=r*c,g=r*u,_=a*c,m=a*u,p=o*u,y=l*h,b=l*c,x=l*u,S=i.x,w=i.y,v=i.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(f+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+b)*v,s[9]=(m-y)*v,s[10]=(1-(f+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let h=1/a,c=1/o,u=1/l;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=c,Ai.elements[5]*=c,Ai.elements[6]*=c,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,e.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Mi,l=!1){let h=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Mi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===vs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=u,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Mi,l=!1){let h=this.elements,c=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Mi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===vs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=u,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ya.prototype.isMatrix4=!0;var fe=Ya,ss=new X,Ai=new fe,ad=new X(0,0,0),od=new X(1,1,1),xn=new X,Hr=new X,ui=new X,ph=new fe,mh=new Hi,cn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ld=0,gh=new X,rs=new Hi,en=new fe,Gr=new X,Hs=new X,cd=new X,hd=new Hi,xh=new X(1,0,0),yh=new X(0,1,0),vh=new X(0,0,1),_h={type:"added"},fd={type:"removed"},as={type:"childadded",child:null},bl={type:"childremoved",child:null},Se=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new cn,i=new Hi,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ht}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Hs,Gr,this.up):en.lookAt(Gr,Hs,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(en),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),as.child=t,this.dispatchEvent(as),as.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new X(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},ud={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=td(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ml(a,r,t+1/3),this.g=Ml(a,r,t),this.b=Ml(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Af[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Qt.workingToColorSpace(ni.copy(this),t),Math.round(ee(ni.r*255,0,255))*65536+Math.round(ee(ni.g*255,0,255))*256+Math.round(ee(ni.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ni.copy(this),e);let i=ni.r,s=ni.g,r=ni.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=Xe){Qt.workingToColorSpace(ni.copy(this),t);let e=ni.r,i=ni.g,s=ni.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(Vr);let i=gl(yn.h,Vr.h,e),s=gl(yn.s,Vr.s,e),r=gl(yn.l,Vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Ut;Ut.NAMES=Af;var er=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xn=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new X,nn=new X,Sl=new X,sn=new X,os=new X,ls=new X,bh=new X,wl=new X,Tl=new X,Al=new X,El=new _e,Cl=new _e,Rl=new _e,Mn=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ei.subVectors(s,e),nn.subVectors(i,e),Sl.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(nn),l=Ei.dot(Sl),h=nn.dot(nn),c=nn.dot(Sl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(h*l-o*c)*f,g=(a*c-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return El.setScalar(0),Cl.setScalar(0),Rl.setScalar(0),El.fromBufferAttribute(t,e),Cl.fromBufferAttribute(t,i),Rl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(Cl,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(t,e,i,s){return Ei.subVectors(i,e),nn.subVectors(t,e),Ei.cross(nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ei.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,i),ls.subVectors(r,i),wl.subVectors(t,i);let l=os.dot(wl),h=ls.dot(wl);if(l<=0&&h<=0)return e.copy(i);Tl.subVectors(t,s);let c=os.dot(Tl),u=ls.dot(Tl);if(c>=0&&u<=c)return e.copy(s);let f=l*u-c*h;if(f<=0&&l>=0&&c<=0&&l-c>0)return a=l/(l-c),e.copy(i).addScaledVector(os,a);Al.subVectors(t,r);let d=os.dot(Al),g=ls.dot(Al);if(g>=0&&d<=g)return e.copy(r);let _=d*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(ls,o);let m=c*g-d*u;if(m<=0&&u-c>=0&&d-g>=0)return bh.subVectors(r,s),o=(u-c)/(u-c+(d-g)),e.copy(s).addScaledVector(bh,o);let p=1/(m+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Xr.subVectors(this.max,Gs),cs.subVectors(t.a,Gs),hs.subVectors(t.b,Gs),fs.subVectors(t.c,Gs),vn.subVectors(hs,cs),_n.subVectors(fs,hs),Hn.subVectors(cs,fs);let e=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Hn.z,Hn.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Hn.z,0,-Hn.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Hn.y,Hn.x,0];return!Pl(e,cs,hs,fs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,cs,hs,fs,Xr))?!1:(qr.crossVectors(vn,_n),e=[qr.x,qr.y,qr.z],Pl(e,cs,hs,fs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},rn=[new X,new X,new X,new X,new X,new X,new X,new X],Ci=new X,Wr=new Gi,cs=new X,hs=new X,fs=new X,vn=new X,_n=new X,Hn=new X,Gs=new X,Xr=new X,qr=new X,Gn=new X;function Pl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gn.fromArray(n,r);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),h=e.dot(Gn),c=i.dot(Gn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Ie=new X,Yr=new qt,dd=0,re=class extends Bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_f,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=t!==void 0?mc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):id(t,this.array)}};var ir=class extends re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var nr=class extends re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends re{constructor(t,e,i){super(new Float32Array(t),e,i)}},pd=new Gi,Vs=new X,Ll=new X,Vi=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Ll)),this.expandByPoint(Vs.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},md=0,bi=new fe,Il=new Se,us=new X,di=new Gi,Ws=new Gi,We=new X,de=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?nr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,i){return bi.makeTranslation(t,e,i),this.applyMatrix4(bi),this}scale(t,e,i){return bi.makeScale(t,e,i),this.applyMatrix4(bi),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(di.min,Ws.min),di.expandByPoint(We),We.addVectors(di.max,Ws.max),di.expandByPoint(We)):(di.expandByPoint(Ws.min),di.expandByPoint(Ws.max))}di.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)We.fromBufferAttribute(o,h),l&&(us.fromBufferAttribute(t,h),We.add(us)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new re(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],h=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new X,l[k]=new X;let c=new X,u=new X,f=new X,d=new qt,g=new qt,_=new qt,m=new X,p=new X;function y(k,P,I){h[k]=h[P]=h[I]=1,c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,I),d.fromBufferAttribute(r,k),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,I),u.sub(c),f.sub(c),g.sub(d),_.sub(d);let O=1/(g.x*_.y-_.x*g.y);isFinite(O)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(O),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(O),o[k].add(m),o[P].add(m),o[I].add(m),l[k].add(p),l[P].add(p),l[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let k=0,P=b.length;k<P;++k){let I=b[k],O=I.start,C=I.count;for(let E=O,B=O+C;E<B;E+=3)y(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let x=new X,S=new X,w=new X,v=new X;function M(k){w.fromBufferAttribute(s,k),v.copy(w);let P=o[k];x.copy(P),x.sub(w.multiplyScalar(w.dot(P))).normalize(),S.crossVectors(v,P);let O=S.dot(l[k])<0?-1:1;a.setXYZW(k,x.x,x.y,x.z,O)}for(let k=0,P=i.count;k<P;++k)h[k]&&M(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,l=new X,h=new X,c=new X,u=new X;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(l.length*c),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*c;for(let p=0;p<c;p++)f[g++]=h[d++]}return new re(f,c,u)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let f=h[c],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){let d=h[u];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kl=new X,gd=new X,xd=new Ht,Ri=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=kl.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||xd.getNormalMatrix(t),s=this.coplanarPoint(kl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},yd=0,Wi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Zl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var an=new X,Dl=new X,$r=new X,Kr=new X,Ss=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Dl.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Kr.copy(this.origin).sub(Dl);let r=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=Kr.dot(this.direction),l=-Kr.dot($r),h=Kr.lengthSq(),c=Math.abs(1-a*a),u,f,d,g;if(c>0)if(u=a*l-o,f=a*o-l,g=r*c,u>=0)if(f>=-g)if(f<=g){let _=1/c;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+h}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+h;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dl).addScaledVector($r,f),d}intersectSphere(t,e){if(t.radius<0)return null;an.subVectors(t.center,this.origin);let i=an.dot(this.direction),s=an.dot(an)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(r=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,b=i.z-a.z,x=Math.abs(l),S=Math.abs(h),w=Math.abs(c),v,M,k,P,I,O,C,E,B,U,D,q;if(x>=S&&x>=w?(k=l,O=u,B=g,q=p,l>=0?(v=h,M=c,P=f,I=d,C=_,E=m,U=y,D=b):(v=c,M=h,P=d,I=f,C=m,E=_,U=b,D=y)):S>=w?(k=h,O=f,B=_,q=y,h>=0?(v=c,M=l,P=d,I=u,C=m,E=g,U=b,D=p):(v=l,M=c,P=u,I=d,C=g,E=m,U=p,D=b)):(k=c,O=d,B=m,q=b,c>=0?(v=l,M=h,P=u,I=f,C=g,E=_,U=p,D=y):(v=h,M=l,P=f,I=u,C=_,E=g,U=y,D=p)),k===0)return null;let V=v/k,Z=M/k,j=1/k,H=P-V*O,W=I-Z*O,L=C-V*B,et=E-Z*B,ot=U-V*q,ct=D-Z*q,rt=ot*et-ct*L,Ft=H*ct-W*ot,Kt=L*W-et*H;if(s){if(rt<0||Ft<0||Kt<0)return null}else if((rt<0||Ft<0||Kt<0)&&(rt>0||Ft>0||Kt>0))return null;let St=rt+Ft+Kt;if(St===0)return null;let Gt=j*(rt*O+Ft*B+Kt*q);return(St>0?Gt<0:Gt>0)?null:this.at(Gt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mh=new fe,Vn=new Ss,Zr=new Vi,Sh=new X,Jr=new X,jr=new X,Qr=new X,Nl=new X,ta=new X,wh=new X,ea=new X,bt=class extends Se{constructor(t=new de,e=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(Nl.fromBufferAttribute(u,t),a?ta.addScaledVector(Nl,c):ta.addScaledVector(Nl.sub(e),c))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Zr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Zr,Sh)===null||Vn.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(Mh),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=b;x<S;x+=3){let w=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);s=ia(this,p,t,i,h,c,u,w,v,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=ia(this,a,t,i,h,c,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=b;x<S;x+=3){let w=x,v=x+1,M=x+2;s=ia(this,p,t,i,h,c,u,w,v,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,b=m+1,x=m+2;s=ia(this,a,t,i,h,c,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vd(n,t,e,i,s,r,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ln,o),l===null)return null;ea.copy(o),ea.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(ea);return h<e.near||h>e.far?null:{distance:h,point:ea.clone(),object:n}}function ia(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,Jr),n.getVertexPosition(l,jr),n.getVertexPosition(h,Qr);let c=vd(n,t,e,i,Jr,jr,Qr,wh);if(c){let u=new X;Mn.getBarycoord(wh,Jr,jr,Qr,u),s&&(c.uv=Mn.getInterpolatedAttribute(s,o,l,h,u,new qt)),r&&(c.uv1=Mn.getInterpolatedAttribute(r,o,l,h,u,new qt)),a&&(c.normal=Mn.getInterpolatedAttribute(a,o,l,h,u,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new X,materialIndex:0};Mn.getNormal(Jr,jr,Qr,f.normal),c.face=f,c.barycoord=u}return c}var sr=class extends oi{constructor(t=null,e=1,i=1,s,r,a,o,l,h=qe,c=qe,u,f){super(null,a,o,l,h,c,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new fe,Th=new fe,na=[],Ah=new Gi,_d=new fe,Xs=new bt,qs=new Vi,qn=class extends bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_d)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),Ah.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Ah)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Th.multiplyMatrices(i,ds),Xs.matrixWorld=Th,Xs.raycast(t,na);for(let a=0,o=na.length;a<o;a++){let l=na[a];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sr(new Float32Array(s*this.count),s,this.count,eo,Si));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wn=new Vi,bd=new qt(.5,.5),sa=new X,wn=class{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],b=r[13],x=r[14],S=r[15];if(s[0].setComponents(h-a,d-c,p-g,S-y).normalize(),s[1].setComponents(h+a,d+c,p+g,S+y).normalize(),s[2].setComponents(h+o,d+u,p+_,S+b).normalize(),s[3].setComponents(h-o,d-u,p-_,S-b).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(h-l,d-f,p-m,S-x).normalize();else if(s[4].setComponents(h-l,d-f,p-m,S-x).normalize(),e===Mi)s[5].setComponents(h+l,d+f,p+m,S+x).normalize();else if(e===vs)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){Wn.center.set(0,0,0);let e=bd.distanceTo(t.center);return Wn.radius=.7071067811865476+e,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eh=new fe,Ea=class n{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Eh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new wn),i[s].setFromProjectionMatrix(Eh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new wn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var ws=class extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ca=new X,Ra=new X,Ch=new fe,Ys=new Ss,ra=new Vi,Ul=new X,Rh=new X,Pa=class extends Se{constructor(t=new de,e=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ca.fromBufferAttribute(e,s-1),Ra.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Ra);t.setAttribute("lineDistance",new ue(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;Ch.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=h){let p=c.getX(_),y=c.getX(_+1),b=aa(this,t,Ys,l,p,y,_);b&&e.push(b)}if(this.isLineLoop){let _=c.getX(g-1),m=c.getX(d),p=aa(this,t,Ys,l,_,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=h){let p=aa(this,t,Ys,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=aa(this,t,Ys,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function aa(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,r),e.distanceSqToSegment(Ca,Ra,Ul,Rh)>i)return;Ul.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Ul);if(!(h<t.near||h>t.far))return{distance:h,point:Rh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ph=new X,Lh=new X,ar=class extends Pa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ph.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ph.distanceTo(Lh);t.setAttribute("lineDistance",new ue(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pi=class extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ih=new fe,Gl=new Ss,oa=new Vi,la=new X,Xi=class extends Se{constructor(t=new de,e=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;Ih.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(Ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let m=h.getX(g);la.fromBufferAttribute(u,m),kh(la,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)la.fromBufferAttribute(u,g),kh(la,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kh(n,t,e,i,s,r,a){let o=Gl.distanceSqToPoint(n);if(o<e){let l=new X;Gl.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var or=class extends oi{constructor(t=[],e=jn,i,s,r,a,o,l,h,c){super(t,e,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tn=class extends oi{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hn=class extends oi{constructor(t,e,i=Li,s,r,a,o=qe,l=qe,h,c=ln,u=1){if(c!==ln&&c!==un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lr=class extends hn{constructor(t,e=Li,i=jn,s,r,a=qe,o=qe,l,h=ln){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,s,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},cr=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ae=class n extends de{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(u,2));function g(_,m,p,y,b,x,S,w,v,M,k){let P=x/v,I=S/M,O=x/2,C=S/2,E=w/2,B=v+1,U=M+1,D=0,q=0,V=new X;for(let Z=0;Z<U;Z++){let j=Z*I-C;for(let H=0;H<B;H++){let W=H*P-O;V[_]=W*y,V[m]=j*b,V[p]=E,h.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=w>0?1:-1,c.push(V.x,V.y,V.z),u.push(H/v),u.push(1-Z/M),D+=1}}for(let Z=0;Z<M;Z++)for(let j=0;j<v;j++){let H=f+j+B*Z,W=f+j+B*(Z+1),L=f+(j+1)+B*(Z+1),et=f+(j+1)+B*Z;l.push(H,W,et),l.push(W,L,et),q+=6}o.addGroup(d,q,k),d+=q,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var An=class n extends de{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new X,c=new qt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[f]/t+1)/2,c.y=(a[f+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},En=class n extends de{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function y(){let x=new X,S=new X,w=0,v=(e-t)/i;for(let M=0;M<=r;M++){let k=[],P=M/r,I=P*(e-t)+t;for(let O=0;O<=s;O++){let C=O/s,E=C*l+o,B=Math.sin(E),U=Math.cos(E);S.x=I*B,S.y=-P*i+m,S.z=I*U,u.push(S.x,S.y,S.z),x.set(B,v,U).normalize(),f.push(x.x,x.y,x.z),d.push(C,1-P),k.push(g++)}_.push(k)}for(let M=0;M<s;M++)for(let k=0;k<r;k++){let P=_[k][M],I=_[k+1][M],O=_[k+1][M+1],C=_[k][M+1];(t>0||k!==0)&&(c.push(P,I,C),w+=3),(e>0||k!==r-1)&&(c.push(I,O,C),w+=3)}h.addGroup(p,w,0),p+=w}function b(x){let S=g,w=new qt,v=new X,M=0,k=x===!0?t:e,P=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*P,0),f.push(0,P,0),d.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let E=O/s*l+o,B=Math.cos(E),U=Math.sin(E);v.x=k*U,v.y=m*P,v.z=k*B,u.push(v.x,v.y,v.z),f.push(0,P,0),w.x=B*.5+.5,w.y=U*.5*P+.5,d.push(w.x,w.y),g++}for(let O=0;O<s;O++){let C=S+O,E=I+O;x===!0?c.push(E,E+1,C):c.push(E+1,E,C),M+=3}h.addGroup(p,M,x===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yn=class n extends En{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},La=class n extends de{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new X,x=new X,S=new X;for(let w=0;w<e.length;w+=3)d(e[w+0],b),d(e[w+1],x),d(e[w+2],S),l(b,x,S,y)}function l(y,b,x,S){let w=S+1,v=[];for(let M=0;M<=w;M++){v[M]=[];let k=y.clone().lerp(x,M/w),P=b.clone().lerp(x,M/w),I=w-M;for(let O=0;O<=I;O++)O===0&&M===w?v[M][O]=k:v[M][O]=k.clone().lerp(P,O/I)}for(let M=0;M<w;M++)for(let k=0;k<2*(w-M)-1;k++){let P=Math.floor(k/2);k%2===0?(f(v[M][P+1]),f(v[M+1][P]),f(v[M][P])):(f(v[M][P+1]),f(v[M+1][P+1]),f(v[M+1][P]))}}function h(y){let b=new X;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(y),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function c(){let y=new X;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let x=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(x,1-S)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let b=a[y+0],x=a[y+2],S=a[y+4],w=Math.max(b,x,S),v=Math.min(b,x,S);w>.9&&v<.1&&(b<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,b){let x=y*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){let y=new X,b=new X,x=new X,S=new X,w=new qt,v=new qt,M=new qt;for(let k=0,P=0;k<r.length;k+=9,P+=6){y.set(r[k+0],r[k+1],r[k+2]),b.set(r[k+3],r[k+4],r[k+5]),x.set(r[k+6],r[k+7],r[k+8]),w.set(a[P+0],a[P+1]),v.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),S.copy(y).add(b).add(x).divideScalar(3);let I=m(S);_(w,P+0,y,I),_(v,P+2,b,I),_(M,P+4,x,I)}}function _(y,b,x,S){S<0&&y.x===1&&(a[b]=y.x-1),x.x===0&&x.z===0&&(a[b]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var hr=class n extends La{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},qi=class n extends de{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){let y=p*f-a;for(let b=0;b<h;b++){let x=b*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+h*p,x=y+h*(p+1),S=y+1+h*(p+1),w=y+1+h*p;d.push(b,x,w),d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ts=class n extends de{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],c=[],u=t,f=(e-t)/s,d=new X,g=new qt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let y=p+m,b=y,x=y+i+1,S=y+i+2,w=y+1;o.push(b,x,w),o.push(x,S,w)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var fr=class n extends de{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new X,f=new X,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],b=p/i,x=a+b*o,S=t*Math.cos(x),w=Math.sqrt(t*t-S*S),v=0;p===0&&a===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){let k=M/e,P=s+k*r;u.x=-w*Math.cos(P),u.y=S,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(k+v,1-b),y.push(h++)}c.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=c[p][y+1],x=c[p][y],S=c[p+1][y],w=c[p+1][y+1];(p!==0||a>0)&&d.push(b,x,w),(p!==i-1||l<Math.PI)&&d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Dh(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function si(n){let t={};for(let e=0;e<n.length;e++){let i=ts(n[e]);for(let s in i)t[s]=i[s]}return t}function Dh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Md(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Ef={clone:ts,merge:si},Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yi=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ia=class extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ae=class extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=$a,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ka=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ca(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Cn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,o=2*e-i;break;case Hl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:a=t,l=2*i-e;break;case Hl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let S=0;S!==o;++S)r[S]=p*a[c+S]+y*a[h+S]+b*a[l+S]+x*a[u+S];return r}},Ua=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(s-e),u=1-c;for(let f=0;f!==o;++f)r[f]=a[h+f]*u+a[l+f]*c;return r}},Oa=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fa=class extends Cn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let g=(i-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[h+m]*_+a[l+m]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let _=a[h+g],m=a[l+g],p=d*f+g*2,y=u[p],b=u[p+1],x=t*f+g*2,S=c[x],w=c[x+1],v=Ad(i,e,y,S,s);r[g]=Cf(v,_,b,w,m)}return r}};function Cf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Td(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ad(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Cf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Td(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ca(t.settings)&&(i.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break;case Fl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ca(this.settings)&&(Nh(this.settings.inTangents,t),Nh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ca(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qu(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){zt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Uh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ma;var Rn=class extends mi{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Ks;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};za.prototype.ValueTypeName="color";var Ba=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Ba.prototype.ValueTypeName="number";var Ha=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Hi.slerpFlat(r,0,a,h-o,a,h,l);return r}},ur=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends mi{constructor(t,e,i){super(t,e,i)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Ks;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Ga.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let d=h[u],g=h[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rf=new Va,Wa=class{constructor(t){this.manager=t!==void 0?t:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Se{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$n=class extends dr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ol=new fe,Oh=new X,Fh=new X,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wn,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ol,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ha=new X,fa=new Hi,zi=new X,pr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ha,fa,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ha,fa,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new X,zh=new qt,Bh=new qt,Ze=class extends pr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,zh,Bh),e.subVectors(Bh,zh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ml*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mr=class extends pr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vl=class extends Xa{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Vl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ms=-90,gs=1,As=class extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new Ze(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new Ze(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new Ze(ms,gs,t,e);l.layers=this.layers,this.add(l);let h=new Ze(ms,gs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qa=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var xc="\\[\\]\\.:\\/",Ed=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Cd="[^"+xc.replace("\\.","")+"]",Rd=/((?:WC+[\/:])*)/.source.replace("WC",yc),Pd=/(WCOD+)?/.source.replace("WCOD",Cd),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),kd=new RegExp("^"+Rd+Pd+Ld+Id+"$"),Dd=["material","materials","bones","map"],Wl=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ed,"")}static parseTrackName(t){let e=kd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Dd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Wl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var wc=class wc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};wc.prototype.isMatrix2=!0;var Xl=wc;function vc(n,t,e,i){let s=Nd(i);switch(e){case lc:return n*t;case eo:return n*t/s.components*s.byteLength;case io:return n*t/s.components*s.byteLength;case In:return n*t*2/s.components*s.byteLength;case no:return n*t*2/s.components*s.byteLength;case cc:return n*t*3/s.components*s.byteLength;case ki:return n*t*4/s.components*s.byteLength;case so:return n*t*4/s.components*s.byteLength;case vr:case _r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case br:case Mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(n,16)*Math.max(t,8)/4;case ro:case oo:return Math.max(n,8)*Math.max(t,8)/2;case co:case ho:case uo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fo:case Sr:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Po:case Lo:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Do:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wr:case No:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nd(n){switch(n){case hi:case sc:return{byteLength:1,components:1};case Ps:case rc:case Ii:return{byteLength:2,components:1};case Qa:case to:return{byteLength:2,components:4};case Li:case ja:case Si:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Od(n){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,c),o.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Fd,alphahash_pars_fragment:zd,alphamap_fragment:Bd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:e0,clipping_planes_vertex:i0,color_fragment:n0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:f0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:x0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:R0,envmap_vertex:v0,fog_vertex:_0,fog_pars_vertex:b0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:T0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:E0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:L0,lights_phong_fragment:I0,lights_phong_pars_fragment:k0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:O0,lights_fragment_end:F0,lightprobes_pars_fragment:z0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:j0,morphtarget_pars_vertex:Q0,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:ip,normal_pars_fragment:np,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:fp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:_p,shadowmap_vertex:bp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Ap,specularmap_fragment:Ep,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Ip,uv_pars_fragment:kp,uv_pars_vertex:Dp,uv_vertex:Np,worldpos_vertex:Up,background_vert:Op,background_frag:Fp,backgroundCube_vert:zp,backgroundCube_frag:Bp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distance_vert:Xp,distance_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:Kp,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:jp,meshlambert_vert:Qp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:im,meshnormal_vert:nm,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:fm,points_frag:um,shadow_vert:dm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},Mt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Zi={basic:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:si([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:si([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:si([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:si([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:si([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:si([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:si([Mt.common,Mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:si([Mt.lights,Mt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Zi.physical={uniforms:si([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Oo={r:0,b:0,g:0},xm=new fe,jf=new Ht;jf.set(-1,0,0,0,1,0,0,0,1);function ym(n,t,e,i,s,r){let a=new Ut(0),o=s===!0?0:1,l,h,c=null,u=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let x=y.backgroundBlurriness>0;b=t.get(b,x)}return b}function g(y){let b=!1,x=d(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,b){let x=d(b);x&&x.isCubeTexture?(h===void 0&&(h=new bt(new ae(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ts(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(jf),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,(c!==x||u!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,c=x,u=x.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new bt(new qi(2,2),new Yi({name:"BackgroundMaterial",uniforms:ts(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||u!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=x,u=x.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Oo,gc(n)),e.buffers.color.setClear(Oo.r,Oo.g,Oo.b,b,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function vm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(I,O,C,E,B){let U=!1,D=u(I,E,C,O);r!==D&&(r=D,h(r.object)),U=d(I,E,C,B),U&&g(I,E,C,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(I,O,C,E),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function h(I){return n.bindVertexArray(I)}function c(I){return n.deleteVertexArray(I)}function u(I,O,C,E){let B=E.wireframe===!0,U=i[O.id];U===void 0&&(U={},i[O.id]=U);let D=I.isInstancedMesh===!0?I.id:0,q=U[D];q===void 0&&(q={},U[D]=q);let V=q[C.id];V===void 0&&(V={},q[C.id]=V);let Z=V[B];return Z===void 0&&(Z=f(l()),V[B]=Z),Z}function f(I){let O=[],C=[],E=[];for(let B=0;B<e;B++)O[B]=0,C[B]=0,E[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:C,attributeDivisors:E,object:I,attributes:{},index:null}}function d(I,O,C,E){let B=r.attributes,U=O.attributes,D=0,q=C.getAttributes();for(let V in q)if(q[V].location>=0){let j=B[V],H=U[V];if(H===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),j===void 0||j.attribute!==H||H&&j.data!==H.data)return!0;D++}return r.attributesNum!==D||r.index!==E}function g(I,O,C,E){let B={},U=O.attributes,D=0,q=C.getAttributes();for(let V in q)if(q[V].location>=0){let j=U[V];j===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let H={};H.attribute=j,j&&j.data&&(H.data=j.data),B[V]=H,D++}r.attributes=B,r.attributesNum=D,r.index=E}function _(){let I=r.newAttributes;for(let O=0,C=I.length;O<C;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let C=r.newAttributes,E=r.enabledAttributes,B=r.attributeDivisors;C[I]=1,E[I]===0&&(n.enableVertexAttribArray(I),E[I]=1),B[I]!==O&&(n.vertexAttribDivisor(I,O),B[I]=O)}function y(){let I=r.newAttributes,O=r.enabledAttributes;for(let C=0,E=O.length;C<E;C++)O[C]!==I[C]&&(n.disableVertexAttribArray(C),O[C]=0)}function b(I,O,C,E,B,U,D){D===!0?n.vertexAttribIPointer(I,O,C,B,U):n.vertexAttribPointer(I,O,C,E,B,U)}function x(I,O,C,E){_();let B=E.attributes,U=C.getAttributes(),D=O.defaultAttributeValues;for(let q in U){let V=U[q];if(V.location>=0){let Z=B[q];if(Z===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let j=Z.normalized,H=Z.itemSize,W=t.get(Z);if(W===void 0)continue;let L=W.buffer,et=W.type,ot=W.bytesPerElement,ct=et===n.INT||et===n.UNSIGNED_INT||Z.gpuType===ja;if(Z.isInterleavedBufferAttribute){let rt=Z.data,Ft=rt.isInterleavedBuffer===!0?rt.stride:rt.itemSize,Kt=Z.offset;if(rt.isInstancedInterleavedBuffer||rt.isInstancedBufferAttribute){for(let St=0;St<V.locationSize;St++)p(V.location+St,rt.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<V.locationSize;St++)m(V.location+St);n.bindBuffer(n.ARRAY_BUFFER,L);for(let St=0;St<V.locationSize;St++)b(V.location+St,H/V.locationSize,et,j,Ft*ot,(Kt+H/V.locationSize*St)*ot,ct)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);n.bindBuffer(n.ARRAY_BUFFER,L);for(let rt=0;rt<V.locationSize;rt++)b(V.location+rt,H/V.locationSize,et,j,H*ot,H/V.locationSize*rt*ot,ct)}}else if(D!==void 0){let j=D[q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(V.location,j);break;case 3:n.vertexAttrib3fv(V.location,j);break;case 4:n.vertexAttrib4fv(V.location,j);break;default:n.vertexAttrib1fv(V.location,j)}}}}y()}function S(){k();for(let I in i){let O=i[I];for(let C in O){let E=O[C];for(let B in E){let U=E[B];for(let D in U)c(U[D].object),delete U[D];delete E[B]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let C in O){let E=O[C];for(let B in E){let U=E[B];for(let D in U)c(U[D].object),delete U[D];delete E[B]}}delete i[I.id]}function v(I){for(let O in i){let C=i[O];for(let E in C){let B=C[E];if(B[I.id]===void 0)continue;let U=B[I.id];for(let D in U)c(U[D].object),delete U[D];delete B[I.id]}}}function M(I){for(let O in i){let C=i[O],E=I.isInstancedMesh===!0?I.id:0,B=C[E];if(B!==void 0){for(let U in B){let D=B[U];for(let q in D)c(D[q].object),delete D[q];delete B[U]}delete C[E],Object.keys(C).length===0&&delete i[O]}}}function k(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function _m(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let f=0;for(let d=0;d<c;d++)f+=h[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==ki&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==hi&&v!==Si&&!M&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Nt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:w}}function Mm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ri,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{let y=r?0:i,b=y*4,x=p.clippingState||null;l.value=x,x=c(g,f,b,d);for(let S=0;S!==b;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Cr=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ae(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Zn});r.uniforms.tEquirect.value=e;let a=new bt(s,r),o=e.minFilter;return e.minFilter===fn&&(e.minFilter=ai),new As(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Pf=256,Sm=3,wm=20,Qf=256,tu=16,Tm=3,Am=new X,Em=new Ut,zo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new bt(new ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Am}=r,l=this._renderer;this._setSize(a);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Em));let m=new As(i,s,c);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,t.background=_,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pf,Tf(t))}_fromTexture(t,e){t.mapping===jn||t.mapping===Rs?this._setSize(t.image.length===0?Pf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Lf(t,!1,!1),i=Math.log2(t)-Sm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Lf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jn||t.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=If()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cm(),this._integrationMaterial=Rm());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/tu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Tm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Qf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pm());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Lf(n,t,e){return new Cr(n,{minFilter:fn,generateMipmaps:t,type:Ii,colorSpace:Zs,depthBuffer:e})}function Rr(n,t,e){return new Yi({name:n,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Je,blending:Zn,depthTest:!1,depthWrite:!1})}function Cm(){return Rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rm(){return Rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pm(){return Rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function If(){return Rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kf(){return Rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ka||d===Za)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Cr(g.height);return _.fromEquirectangularTexture(n,f),t.set(f,_),f.addEventListener("dispose",h),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Ka||d===Za,_=d===jn||d===Rs;if(g||_){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new zo(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new zo(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,d){return d===Ka?f.mapping=jn:d===Za&&(f.mapping=Rs),f}function l(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Im(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$s("WebGLRenderer: "+i+" extension not supported."),s}}}function km(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(t.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function c(g){let _=g.attributes;for(let m in _)t.update(_[m],n.ARRAY_BUFFER)}function u(g){let _=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?nr:ir,x=new b(Math.ceil(y/3)*6,1),S=x.array;if(_!==null){let v=_.array;p=_.version;for(let M=0,k=0;M<y;M+=3){let P=v[M+0],I=v[M+1],O=v[M+2];S[k++]=P,S[k++]=I,S[k++]=I,S[k++]=O,S[k++]=O,S[k++]=P}}else{p=m.version;for(let v=0,M=0;v<y;v+=3){let k=v+0,P=v+1,I=v+2;S[M++]=k,S[M++]=P,S[M++]=P,S[M++]=I,S[M++]=I,S[M++]=k}}x.version=p;let w=r.get(g);w&&t.remove(w),r.set(g,x)}function f(g){let _=r.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:h,update:c,getWireframeAttribute:f,dispose:d}}function Dm(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function h(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function c(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Nm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Um(n,t,e){let i=new WeakMap,s=new _e;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,f=i.get(o);if(f===void 0||f.count!==u){let k=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=o.attributes.position.count*b,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*S*4*u),v=new Qs(w,x,S,u);v.type=Si,v.needsUpdate=!0;let M=b*4;for(let P=0;P<u;P++){let I=m[P],O=p[P],C=y[P],E=x*S*4*P;for(let B=0;B<I.count;B++){let U=B*M;d===!0&&(s.fromBufferAttribute(I,B),w[E+U+0]=s.x,w[E+U+1]=s.y,w[E+U+2]=s.z,w[E+U+3]=0),g===!0&&(s.fromBufferAttribute(O,B),w[E+U+4]=s.x,w[E+U+5]=s.y,w[E+U+6]=s.z,w[E+U+7]=0),_===!0&&(s.fromBufferAttribute(C,B),w[E+U+8]=s.x,w[E+U+9]=s.y,w[E+U+10]=s.z,w[E+U+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new qt(x,S)},i.set(o,f),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Om(n,t,e,i,s){let r=new WeakMap;function a(h){let c=s.render.frame,u=h.geometry,f=t.get(h,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}var Fm={[Jl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[xr]:"ACES_FILMIC_TONE_MAPPING",[ec]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function zm(n,t,e,i,s,r){let a=new pi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new de;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let u=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new bt(c,u),d=new mr(-1,1,1,-1,0,1),g=null,_=null,m=!1,p,y=null,b=[],x=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let v=0;v<b.length;v++){let M=b[v];M.setSize&&M.setSize(S,w)}},this.setEffects=function(S){b=S,x=b.length>0&&b[0].isRenderPass===!0;let w=a.width,v=a.height;b.length>0&&o===null&&(o=new pi(w,v,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new pi(w,v,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(k=>k.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&h===null&&(h=new hn(w,v),r===!0&&(h.format=un,h.type=Qn)),a.dispose(),a.depthTexture=M?h:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let k=0;k<b.length;k++){let P=b[k];P.setSize&&P.setSize(w,v),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(S,w){if(m||S.toneMapping===$i&&b.length===0)return!1;if(y=w,w!==null){let v=w.width,M=w.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return x===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=$i,!0},this.hasRenderPass=function(){return x},this.end=function(S,w){S.toneMapping=p,m=!0;let v=a,M=o;for(let k=0;k<b.length;k++){let P=b[k];P.enabled!==!1&&(P.render(S,M,v,w),P.needsSwap!==!1&&(v=M,M=M===o?l:o))}if(g!==S.outputColorSpace||_!==S.toneMapping){g=S.outputColorSpace,_=S.toneMapping,u.defines={},Qt.getTransfer(g)===ce&&(u.defines.SRGB_TRANSFER="");let k=Fm[_];k&&(u.defines[k]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(y),S.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var eu=new oi,iu=new hn(1,1),nu=new lr(1),su=new Qs,ru=new Aa,au=new or,Df=[],Nf=[],Uf=new Float32Array(16),Of=new Float32Array(9),Ff=new Float32Array(4);function Is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function Wm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Fe(e,i)}}function Xm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Of.set(i),n.uniformMatrix3fv(this.addr,!1,Of),Fe(e,i)}}function qm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),Fe(e,i)}}function Ym(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function Km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function Zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function Jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function Go(n){return n.version===0&&(n.compareFunction=uc,n.needsUpdate=!0),n}function eg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Go(iu):r=eu,e.setTexture2D(t||r,s)}function ig(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ru,s)}function ng(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Go(nu):r=au,e.setTextureCube(t||r,s)}function sg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||su,s)}function rg(n){switch(n){case 5126:return Bm;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return jm;case 36295:return Qm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(n,t){n.uniform1fv(this.addr,t)}function og(n,t){let e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function lg(n,t){let e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function cg(n,t){let e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function hg(n,t){let e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fg(n,t){let e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ug(n,t){let e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dg(n,t){n.uniform1iv(this.addr,t)}function pg(n,t){n.uniform2iv(this.addr,t)}function mg(n,t){n.uniform3iv(this.addr,t)}function gg(n,t){n.uniform4iv(this.addr,t)}function xg(n,t){n.uniform1uiv(this.addr,t)}function yg(n,t){n.uniform2uiv(this.addr,t)}function vg(n,t){n.uniform3uiv(this.addr,t)}function _g(n,t){n.uniform4uiv(this.addr,t)}function bg(n,t,e){let i=this.cache,s=t.length,r=Ho(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Go(iu):a=eu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mg(n,t,e){let i=this.cache,s=t.length,r=Ho(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ru,r[a])}function Sg(n,t,e){let i=this.cache,s=t.length,r=Ho(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Go(nu):a=au;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function wg(n,t,e){let i=this.cache,s=t.length,r=Ho(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||su,r[a])}function Tg(n){switch(n){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return fg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}var Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function zf(n,t){n.seq.push(t),n.map[t.id]=t}function Ag(n,t,e){let i=n.name,s=i.length;for(Tc.lastIndex=0;;){let r=Tc.exec(i),a=Tc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){zf(e,h===void 0?new Ec(o,n,t):new Cc(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Rc(o),zf(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ag(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Bf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Eg=37297,Cg=0;function Rg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Hf=new Ht;function Pg(n){Qt._getMatrix(Hf,Qt.workingColorSpace,n);let t=`mat3( ${Hf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Js:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rg(n.getShaderSource(t),o)}else return r}function Lg(n,t){let e=Pg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ig={[Jl]:"Linear",[jl]:"Reinhard",[Ql]:"Cineon",[xr]:"ACESFilmic",[ec]:"AgX",[ic]:"Neutral",[tc]:"Custom"};function kg(n,t){let e=Ig[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fo=new X;function Dg(){Qt.getLuminanceCoefficients(Fo);let n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Ug(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Og(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Er(n){return n!==""}function Vf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(Fg,zg)}function zg(n,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Pc(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(n){return n.replace(Bg,Hg)}function Hg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Gg={[gr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Vg(n){return Gg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[Rs]:"ENVMAP_MODE_REFRACTION"};function Xg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qg={[$a]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function Yg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qg[n.combine]||"ENVMAP_BLENDING_NONE"}function $g(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vg(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=Xg(e),u=Yg(e),f=Ng(e),d=Ug(r),g=s.createProgram(),_,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Er).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Er).join(`
`),m.length>0&&(m+=`
`)):(_=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),m=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?$t.tonemapping_pars_fragment:"",e.toneMapping!==$i?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),a=Pc(a),a=Vf(a,e),a=Wf(a,e),o=Pc(o),o=Vf(o,e),o=Wf(o,e),a=Xf(a),o=Xf(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+_+a,b=p+m+o,x=Bf(s,s.VERTEX_SHADER,y),S=Bf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,x),s.attachShader(g,S),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(x)||"",C=s.getShaderInfoLog(S)||"",E=I.trim(),B=O.trim(),U=C.trim(),D=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,x,S);else{let V=Gf(s,x,"vertex"),Z=Gf(s,S,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+E+`
`+V+`
`+Z)}else E!==""?Nt("WebGLProgram: Program Info Log:",E):(B===""||U==="")&&(q=!1);q&&(P.diagnostics={runnable:D,programLog:E,vertexShader:{log:B,prefix:_},fragmentShader:{log:U,prefix:m}})}s.deleteShader(x),s.deleteShader(S),v=new Ls(s,g),M=Og(s,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(g,Eg)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=S,this}var Kg=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ic(t),e.set(t,i)),i}},Ic=class{constructor(t){this.id=Kg++,this.code=t,this.usedTimes=0}};function Zg(n){return n===In||n===Sr||n===wr}function Jg(n,t,e,i,s,r){let a=new tr,o=new Lc,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,M,k,P,I,O){let C=P.fog,E=I.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=t.get(v.envMap||B,U),q=f[v.type],V=i.precision;v.precision!==null&&(V=i.getMaxPrecision(v.precision),V!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));let Z=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,j=Z!==void 0?Z.length:0,H=0;E.morphAttributes.position!==void 0&&(H=1),E.morphAttributes.normal!==void 0&&(H=2),E.morphAttributes.color!==void 0&&(H=3);let W,L,et,ot;if(q){let _t=Zi[q];W=_t.vertexShader,L=_t.fragmentShader}else{W=v.vertexShader,L=v.fragmentShader;let _t=o.getVertexShaderStage(v),he=o.getFragmentShaderStage(v);o.update(v,_t,he),et=_t.id,ot=he.id}let ct=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,Kt=I.isBatchedMesh===!0,St=!!v.map,Gt=!!v.matcap,te=!!D,Zt=te&&D.isPMREMTexture===!0,Pe=!!v.aoMap,Te=!!v.lightMap,Qe=!!v.bumpMap&&v.wireframe===!1,be=!!v.normalMap,Fi=!!v.displacementMap,He=!!v.emissiveMap,xi=!!v.metalnessMap,yi=!!v.roughnessMap,vi=v.anisotropy>0,G=v.clearcoat>0,_i=v.diffuseRoughness>0,ye=v.dispersion>0,ve=v.retroreflectivity>0,vt=v.iridescence>0,Ue=v.sheen>0,Dt=v.transmission>0,Vt=vi&&!!v.anisotropyMap,R=G&&!!v.clearcoatMap,T=G&&!!v.clearcoatNormalMap,$=G&&!!v.clearcoatRoughnessMap,at=_i&&!!v.diffuseRoughnessMap,st=vt&&!!v.iridescenceMap,ft=vt&&!!v.iridescenceThicknessMap,gt=Ue&&!!v.sheenColorMap,tt=Ue&&!!v.sheenRoughnessMap,it=!!v.specularMap,dt=!!v.specularColorMap,N=!!v.specularIntensityMap,nt=Dt&&!!v.transmissionMap,Q=Dt&&!!v.thicknessMap,pt=!!v.gradientMap,ht=!!v.alphaMap,ut=v.alphaTest>0,Pt=!!v.alphaHash,Yt=!!v.extensions,lt=$i;v.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(lt=n.toneMapping);let kt=Zt?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,Xt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:L,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:Kt,batchingColor:Kt&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:St,matcap:Gt,envMap:te,envMapMode:te&&D.mapping,envMapPMREM:Zt,envMapMaxLod:Zt?kt.length-1:null,envMapSize:Zt?kt[0].width:null,aoMap:Pe,lightMap:Te,bumpMap:Qe,normalMap:be,displacementMap:Fi,emissiveMap:He,normalMapObjectSpace:be&&v.normalMapType===df,normalMapTangentSpace:be&&v.normalMapType===Uo,packedNormalMap:be&&v.normalMapType===Uo&&Zg(v.normalMap.format),metalnessMap:xi,roughnessMap:yi,anisotropy:vi,anisotropyMap:Vt,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:_i,diffuseRoughnessMap:at,dispersion:ye,retroreflection:ve,iridescence:vt,iridescenceMap:st,iridescenceThicknessMap:ft,sheen:Ue,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:dt,specularIntensityMap:N,transmission:Dt,transmissionMap:nt,thicknessMap:Q,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:ut,alphaHash:Pt,combine:v.combine,mapUv:St&&d(v.map.channel),aoMapUv:Pe&&d(v.aoMap.channel),lightMapUv:Te&&d(v.lightMap.channel),bumpMapUv:Qe&&d(v.bumpMap.channel),normalMapUv:be&&d(v.normalMap.channel),displacementMapUv:Fi&&d(v.displacementMap.channel),emissiveMapUv:He&&d(v.emissiveMap.channel),metalnessMapUv:xi&&d(v.metalnessMap.channel),roughnessMapUv:yi&&d(v.roughnessMap.channel),anisotropyMapUv:Vt&&d(v.anisotropyMap.channel),clearcoatMapUv:R&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:st&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:tt&&d(v.sheenRoughnessMap.channel),specularMapUv:it&&d(v.specularMap.channel),specularColorMapUv:dt&&d(v.specularColorMap.channel),specularIntensityMapUv:N&&d(v.specularIntensityMap.channel),transmissionMapUv:nt&&d(v.transmissionMap.channel),thicknessMapUv:Q&&d(v.thicknessMap.channel),alphaMapUv:ht&&d(v.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(be||vi),vertexNormals:!!E.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!E.attributes.uv&&(St||ht),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||E.attributes.normal===void 0&&be===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:H,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:St&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:He&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ke,flipSided:v.side===Je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function _(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)M.push(k),M.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(m(M,v),p(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function p(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){let M=f[v.type],k;if(M){let P=Zi[M];k=Ef.clone(P.uniforms)}else k=v.uniforms;return k}function b(v,M){let k=c.get(M);return k!==void 0?++k.usedTimes:(k=new $g(n,M,v,s),h.push(k),c.set(M,k)),k}function x(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:h,dispose:w}}function jg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Qg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $f(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,m,p){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},n[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=g,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=p),t++,y}function l(f,d,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);let b=o(f,d,g,_,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function h(f,d,g,_,m,p){let y=o(f,d,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function c(f,d){e.length>1&&e.sort(f||Qg),i.length>1&&i.sort(d||Yf),s.length>1&&s.sort(d||Yf)}function u(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:u,sort:c}}function tx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new $f,n.set(i,[a])):s>=r.length?(a=new $f,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ex(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new Ut};break;case"SpotLight":e={position:new X,direction:new X,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function ix(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var nx=0;function sx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rx(n){let t=new ex,e=ix(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);let s=new X,r=new fe,a=new fe;function o(h){let c=0,u=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,b=0,x=0,S=0,w=0,v=0,M=0,k=0,P=0;h.sort(sx);for(let O=0,C=h.length;O<C;O++){let E=h[O],B=E.color,U=E.intensity,D=E.distance,q=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===In?q=E.shadow.map.texture:q=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)c+=B.r*U,u+=B.g*U,f+=B.b*U;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],U);P++}else if(E.isSunLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=q;let H=Z.getViewportCount();for(let W=0;W<H;W++)i.sunShadowMatrix[_+W]=Z.getMatrix(W),i.sunShadowCascade[_+W]=Z._cascadeData[W];_+=H,g++}i.sun[d]=V,d++}else if(E.isDirectionalLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=E.shadow.matrix,S++}i.directional[m]=V,m++}else if(E.isSpotLight){let V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(B).multiplyScalar(U),V.distance=D,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[y]=V;let Z=E.shadow;if(E.map&&(i.spotLightMap[M]=E.map,M++,Z.updateMatrices(E),E.castShadow&&k++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){let j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=q,v++}y++}else if(E.isRectAreaLight){let V=t.get(E);V.color.copy(B).multiplyScalar(U),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[b]=V,b++}else if(E.isPointLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=E.shadow.matrix,w++}i.point[p]=V,p++}else if(E.isHemisphereLight){let V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(U),V.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[x]=V,x++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==b||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==v||I.numSpotMaps!==M||I.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+M-k,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=P,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=y,I.rectAreaLength=b,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=v,I.numSpotMaps=M,I.numLightProbes=P,i.version=nx++)}function l(h,c){let u=0,f=0,d=0,g=0,_=0,m=0,p=c.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){let x=h[y];if(x.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(x.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Kf(n){let t=new rx(n),e=[],i=[],s=[];function r(u){c.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function ax(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Kf(n),t.set(s,[o])):r>=a.length?(o=new Kf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cx=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],hx=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Zf=new fe,Ar=new X,Ac=new X;function fx(n,t,e){let i=new wn,s=new qt,r=new qt,a=new _e,o=new ka,l=new Da,h={},c=e.maxTextureSize,u={[Ln]:Je,[Je]:Ln,[ke]:ke},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(w,v,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let k=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let C=p!==this.type;C&&v.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(B=>B.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,B=w.length;E<B;E++){let U=w[E],D=U.shadow;if(D===void 0){Nt("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let q=D.getFrameExtents();s.multiply(q),r.copy(D.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/q.x),s.x=r.x*q.x,D.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/q.y),s.y=r.y*q.y,D.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=V,D.map===null||C===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Es){if(U.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new pi(s.x,s.y,{format:In,type:Ii,minFilter:ai,magFilter:ai,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new hn(s.x,s.y,Si),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=ln,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=qe,D.map.depthTexture.magFilter=qe}else U.isPointLight?(D.map=new Cr(s.x),D.map.depthTexture=new lr(s.x,Li)):(D.map=new pi(s.x,s.y),D.map.depthTexture=new hn(s.x,s.y,Li)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=ln,this.type===gr?(D.map.depthTexture.compareFunction=V?fc:hc,D.map.depthTexture.minFilter=ai,D.map.depthTexture.magFilter=ai):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=qe,D.map.depthTexture.magFilter=qe);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let Z=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();U.isPointLight!==!0&&D.updateMatrices(U,M);let j=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:M.layers;for(let H=0;H<Z;H++){let W=D.getCamera(H);if(U.isPointLight){let L=D.camera,et=D.matrix,ot=U.distance||L.far;ot!==L.far&&(L.far=ot,L.updateProjectionMatrix()),Ar.setFromMatrixPosition(U.matrixWorld),L.position.copy(Ar),Ac.copy(L.position),Ac.add(cx[H]),L.up.copy(hx[H]),L.lookAt(Ac),L.updateMatrixWorld(),et.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Zf.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Zf,L.coordinateSystem,L.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,H),n.clear();else{H===0&&(n.setRenderTarget(D.map),n.clear());let L=D.getViewport(H);a.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),O.viewport(a)}i=D.getFrustum(H),x(v,M,W,U,j,this.type)}D.isPointLightShadow!==!0&&this.type===Es&&y(D,M),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(k,P,I)};function y(w,v){let M=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new pi(s.x,s.y,{format:In,type:Ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,M,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,M,d,_,null)}function b(w,v,M,k){let P=null,I=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=M.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let O=P.uuid,C=v.uuid,E=h[O];E===void 0&&(E={},h[O]=E);let B=E[C];B===void 0&&(B=P.clone(),E[C]=B,v.addEventListener("dispose",S)),P=B}if(P.visible=v.visible,P.wireframe=v.wireframe,k===Es?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:u[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=M}return P}function x(w,v,M,k,P,I){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Es)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let E=t.update(w),B=w.material;if(Array.isArray(B)){let U=E.groups;for(let D=0,q=U.length;D<q;D++){let V=U[D],Z=B[V.materialIndex];if(Z&&Z.visible){let j=b(w,Z,k,I);w.onBeforeShadow(n,w,v,M,E,j,V),n.renderBufferDirect(M,null,E,j,w,V),w.onAfterShadow(n,w,v,M,E,j,V)}}}else if(B.visible){let U=b(w,B,k,I);w.onBeforeShadow(n,w,v,M,E,U,null),n.renderBufferDirect(M,null,E,U,w,null),w.onAfterShadow(n,w,v,M,E,U,null)}}let C=w.children;for(let E=0,B=C.length;E<B;E++)x(C[E],v,M,k,P,I)}function S(w){w.target.removeEventListener("dispose",S);for(let M in h){let k=h[M],P=w.target.uuid;P in k&&(k[P].dispose(),delete k[P])}}}function ux(n,t){function e(){let N=!1,nt=new _e,Q=null,pt=new _e(0,0,0,0);return{setMask:function(ht){Q!==ht&&!N&&(n.colorMask(ht,ht,ht,ht),Q=ht)},setLocked:function(ht){N=ht},setClear:function(ht,ut,Pt,Yt,lt){lt===!0&&(ht*=Yt,ut*=Yt,Pt*=Yt),nt.set(ht,ut,Pt,Yt),pt.equals(nt)===!1&&(n.clearColor(ht,ut,Pt,Yt),pt.copy(nt))},reset:function(){N=!1,Q=null,pt.set(-1,0,0,0)}}}function i(){let N=!1,nt=!1,Q=null,pt=null,ht=null;return{setReversed:function(ut){if(nt!==ut){let Pt=t.get("EXT_clip_control");ut?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),nt=ut;let Yt=ht;ht=null,this.setClear(Yt)}},getReversed:function(){return nt},setTest:function(ut){ut?rt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(ut){Q!==ut&&!N&&(n.depthMask(ut),Q=ut)},setFunc:function(ut){if(nt&&(ut=wf[ut]),pt!==ut){switch(ut){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case ya:n.depthFunc(n.GEQUAL);break;case va:n.depthFunc(n.GREATER);break;case _a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=ut}},setLocked:function(ut){N=ut},setClear:function(ut){ht!==ut&&(ht=ut,nt&&(ut=1-ut),n.clearDepth(ut))},reset:function(){N=!1,Q=null,pt=null,ht=null,nt=!1}}}function s(){let N=!1,nt=null,Q=null,pt=null,ht=null,ut=null,Pt=null,Yt=null,lt=null;return{setTest:function(kt){N||(kt?rt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(kt){nt!==kt&&!N&&(n.stencilMask(kt),nt=kt)},setFunc:function(kt,Xt,_t){(Q!==kt||pt!==Xt||ht!==_t)&&(n.stencilFunc(kt,Xt,_t),Q=kt,pt=Xt,ht=_t)},setOp:function(kt,Xt,_t){(ut!==kt||Pt!==Xt||Yt!==_t)&&(n.stencilOp(kt,Xt,_t),ut=kt,Pt=Xt,Yt=_t)},setLocked:function(kt){N=kt},setClear:function(kt){lt!==kt&&(n.clearStencil(kt),lt=kt)},reset:function(){N=!1,nt=null,Q=null,pt=null,ht=null,ut=null,Pt=null,Yt=null,lt=null}}}let r=new e,a=new i,o=new s,l={},h=new WeakMap,c={},u={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,y=null,b=null,x=null,S=null,w=null,v=null,M=new Ut(0,0,0),k=0,P=!1,I=null,O=null,C=null,E=null,B=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=q>=2);let Z=null,j={},H=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),L=new _e().fromArray(H),et=new _e().fromArray(W);function ot(N,nt,Q,pt){let ht=new Uint8Array(4),ut=n.createTexture();n.bindTexture(N,ut),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<Q;Pt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(nt+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return ut}let ct={};ct[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(ys),Qe(!1),be(ql),rt(n.CULL_FACE),Pe(Zn);function rt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Ft(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Kt(N,nt){return f[N]!==nt?(n.bindFramebuffer(N,nt),f[N]=nt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=nt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function St(N,nt){let Q=g,pt=!1;if(N){Q=d.get(nt),Q===void 0&&(Q=[],d.set(nt,Q));let ht=N.textures;if(Q.length!==ht.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Pt=ht.length;ut<Pt;ut++)Q[ut]=n.COLOR_ATTACHMENT0+ut;Q.length=ht.length,pt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,pt=!0);pt&&n.drawBuffers(Q)}function Gt(N){return _!==N?(n.useProgram(N),_=N,!0):!1}let te={[Jn]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};te[Yh]=n.MIN,te[$h]=n.MAX;let Zt={[Kh]:n.ZERO,[Zh]:n.ONE,[Jh]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[rf]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(N,nt,Q,pt,ht,ut,Pt,Yt,lt,kt){if(N===Zn){m===!0&&(Ft(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),N!==Wh){if(N!==p||kt!==P){if((y!==Jn||S!==Jn)&&(n.blendEquation(n.FUNC_ADD),y=Jn,S=Jn),kt)switch(N){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ye:n.blendFunc(n.ONE,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",N);break}else switch(N){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ye:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yl:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",N);break}b=null,x=null,w=null,v=null,M.set(0,0,0),k=0,p=N,P=kt}return}ht=ht||nt,ut=ut||Q,Pt=Pt||pt,(nt!==y||ht!==S)&&(n.blendEquationSeparate(te[nt],te[ht]),y=nt,S=ht),(Q!==b||pt!==x||ut!==w||Pt!==v)&&(n.blendFuncSeparate(Zt[Q],Zt[pt],Zt[ut],Zt[Pt]),b=Q,x=pt,w=ut,v=Pt),(Yt.equals(M)===!1||lt!==k)&&(n.blendColor(Yt.r,Yt.g,Yt.b,lt),M.copy(Yt),k=lt),p=N,P=!1}function Te(N,nt){N.side===ke?Ft(n.CULL_FACE):rt(n.CULL_FACE);let Q=N.side===Je;nt&&(Q=!Q),Qe(Q),N.blending===Cs&&N.transparent===!1?Pe(Zn):Pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(N){I!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),I=N)}function be(N){N!==Hh?(rt(n.CULL_FACE),N!==O&&(N===ql?n.cullFace(n.BACK):N===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),O=N}function Fi(N){N!==C&&(D&&n.lineWidth(N),C=N)}function He(N,nt,Q){N?(rt(n.POLYGON_OFFSET_FILL),(E!==nt||B!==Q)&&(E=nt,B=Q,a.getReversed()&&(nt=-nt,Q=-Q),n.polygonOffset(nt,Q))):Ft(n.POLYGON_OFFSET_FILL)}function xi(N){N?rt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function yi(N){N===void 0&&(N=n.TEXTURE0+U-1),Z!==N&&(n.activeTexture(N),Z=N)}function vi(N,nt,Q){Q===void 0&&(Z===null?Q=n.TEXTURE0+U-1:Q=Z);let pt=j[Q];pt===void 0&&(pt={type:void 0,texture:void 0},j[Q]=pt),(pt.type!==N||pt.texture!==nt)&&(Z!==Q&&(n.activeTexture(Q),Z=Q),n.bindTexture(N,nt||ct[N]),pt.type=N,pt.texture=nt)}function G(){let N=j[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _i(){try{n.compressedTexImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function ye(){try{n.compressedTexImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function ve(){try{n.texSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function vt(){try{n.texSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function Ue(){try{n.compressedTexSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function Dt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function Vt(){try{n.texStorage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function R(){try{n.texStorage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function T(){try{n.texImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function $(){try{n.texImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function at(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function st(N,nt){u[N]!==nt&&(n.pixelStorei(N,nt),u[N]=nt)}function ft(N){L.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),L.copy(N))}function gt(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function tt(N,nt){let Q=h.get(nt);Q===void 0&&(Q=new WeakMap,h.set(nt,Q));let pt=Q.get(N);pt===void 0&&(pt=n.getUniformBlockIndex(nt,N.name),n.uniformBlockBinding(nt,pt,pt),Q.set(N,pt))}function it(N,nt,Q){let ht=h.get(nt).get(N);l[ht]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ht,Q),l[ht]=Q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},u={},Z=null,j={},f={},l={},d=new WeakMap,g=[],_=null,m=!1,p=null,y=null,b=null,x=null,S=null,w=null,v=null,M=new Ut(0,0,0),k=0,P=!1,I=null,O=null,C=null,E=null,B=null,L.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Ft,bindFramebuffer:Kt,drawBuffers:St,useProgram:Gt,setBlending:Pe,setMaterial:Te,setFlipSided:Qe,setCullFace:be,setLineWidth:Fi,setPolygonOffset:He,setScissorTest:xi,activeTexture:yi,bindTexture:vi,unbindTexture:G,compressedTexImage2D:_i,compressedTexImage3D:ye,texImage2D:T,texImage3D:$,pixelStorei:st,getParameter:at,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Vt,texStorage3D:R,texSubImage2D:ve,texSubImage3D:vt,compressedTexSubImage2D:Ue,compressedTexSubImage3D:Dt,scissor:ft,viewport:gt,reset:dt}}function dx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,c=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,_=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return m?new OffscreenCanvas(R,T):js("canvas")}function y(R,T,$){let at=1,st=Vt(R);if((st.width>$||st.height>$)&&(at=$/Math.max(st.width,st.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ft=Math.floor(at*st.width),gt=Math.floor(at*st.height);f===void 0&&(f=p(ft,gt));let tt=T?p(ft,gt):f;return tt.width=ft,tt.height=gt,tt.getContext("2d").drawImage(R,0,0,ft,gt),Nt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ft+"x"+gt+")."),tt}else return"data"in R&&Nt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function b(R){return R.generateMipmaps}function x(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,T,$,at,st,ft=!1){if(R!==null){if(n[R]!==void 0)return n[R];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;at&&(gt=t.get("EXT_texture_norm16"),gt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=T;if(T===n.RED&&($===n.FLOAT&&(tt=n.R32F),$===n.HALF_FLOAT&&(tt=n.R16F),$===n.UNSIGNED_BYTE&&(tt=n.R8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),$===n.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.R8UI),$===n.UNSIGNED_SHORT&&(tt=n.R16UI),$===n.UNSIGNED_INT&&(tt=n.R32UI),$===n.BYTE&&(tt=n.R8I),$===n.SHORT&&(tt=n.R16I),$===n.INT&&(tt=n.R32I)),T===n.RG&&($===n.FLOAT&&(tt=n.RG32F),$===n.HALF_FLOAT&&(tt=n.RG16F),$===n.UNSIGNED_BYTE&&(tt=n.RG8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),$===n.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RG8UI),$===n.UNSIGNED_SHORT&&(tt=n.RG16UI),$===n.UNSIGNED_INT&&(tt=n.RG32UI),$===n.BYTE&&(tt=n.RG8I),$===n.SHORT&&(tt=n.RG16I),$===n.INT&&(tt=n.RG32I)),T===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),$===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),$===n.UNSIGNED_INT&&(tt=n.RGB32UI),$===n.BYTE&&(tt=n.RGB8I),$===n.SHORT&&(tt=n.RGB16I),$===n.INT&&(tt=n.RGB32I)),T===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),$===n.UNSIGNED_INT&&(tt=n.RGBA32UI),$===n.BYTE&&(tt=n.RGBA8I),$===n.SHORT&&(tt=n.RGBA16I),$===n.INT&&(tt=n.RGBA32I)),T===n.RGB&&($===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),$===n.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),T===n.RGBA){let it=ft?Js:Qt.getTransfer(st);$===n.FLOAT&&(tt=n.RGBA32F),$===n.HALF_FLOAT&&(tt=n.RGBA16F),$===n.UNSIGNED_BYTE&&(tt=it===ce?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),$===n.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(R,T){let $;return R?T===null||T===Li||T===Qn?$=n.DEPTH24_STENCIL8:T===Si?$=n.DEPTH32F_STENCIL8:T===Ps&&($=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Qn?$=n.DEPTH_COMPONENT24:T===Si?$=n.DEPTH_COMPONENT32F:T===Ps&&($=n.DEPTH_COMPONENT16),$}function M(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==ai?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function k(R){let T=new WeakRef(R);i.get(R).__ref=T,g.add(T),_.register(R,T,T)}function P(R){let T=i.get(R).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}function I(R){C(R.target)}function O(R){E(R.target)}function C(R){R.removeEventListener("dispose",I),P(R),U(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&u.delete(R)}function E(R){R.removeEventListener("dispose",O),P(R),q(R)}function B(){for(let R of g){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?E(T):C(T))}g.clear(),u.clear()}function U(R){let T=i.get(R);if(T.__webglInit===void 0)return;let $=R.source,at=d.get($);if(at){let st=at[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(R),Object.keys(at).length===0&&d.delete($)}i.remove(R)}function D(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let $=R.source,at=d.get($);delete at[T.__cacheKey],a.memory.textures--}function q(R){let T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=R.depthTexture;if($&&$.renderTarget===R&&C($),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let ft=0;ft<T.__webglFramebuffer[st].length;ft++)n.deleteFramebuffer(T.__webglFramebuffer[st][ft]);else n.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)n.deleteFramebuffer(T.__webglFramebuffer[st]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let at=R.textures;for(let st=0,ft=at.length;st<ft;st++){let gt=i.get(at[st]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(at[st])}i.remove(R)}let V=0;function Z(){V=0}function j(){return V}function H(R){V=R}function W(){let R=V;return R>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function L(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function et(R,T){let $=i.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let at=R.image;if(at===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,R,T);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function ot(R,T){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Te($,R,T);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function ct(R,T){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Te($,R,T);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function rt(R,T){let $=i.get(R);if(R.version>0&&$.__version!==R.version){Qe($,R,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}let Ft={[Sn]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[ba]:n.MIRRORED_REPEAT},Kt={[qe]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[fn]:n.LINEAR_MIPMAP_LINEAR},St={[mf]:n.NEVER,[uc]:n.ALWAYS,[gf]:n.LESS,[hc]:n.LEQUAL,[xf]:n.EQUAL,[fc]:n.GEQUAL,[yf]:n.GREATER,[vf]:n.NOTEQUAL};function Gt(R,T){if(T.type===Si&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ai||T.magFilter===Ja||T.magFilter===yr||T.magFilter===fn||T.minFilter===ai||T.minFilter===Ja||T.minFilter===yr||T.minFilter===fn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ft[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ft[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ft[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Kt[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Kt[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,St[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==yr&&T.minFilter!==fn||T.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function te(R,T){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I),k(T));let at=T.source,st=d.get(at);st===void 0&&(st={},d.set(at,st));let ft=L(T);if(ft!==R.__cacheKey){st[ft]===void 0&&(st[ft]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),st[ft].usedTimes++;let gt=st[R.__cacheKey];gt!==void 0&&(st[R.__cacheKey].usedTimes--,gt.usedTimes===0&&D(T)),R.__cacheKey=ft,R.__webglTexture=st[ft].texture}return $}function Zt(R,T,$){return Math.floor(Math.floor(R/$)/T)}function Pe(R,T,$,at){let ft=R.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,$,at,T.data);else{ft.sort((N,nt)=>N.start-nt.start);let gt=0;for(let N=1;N<ft.length;N++){let nt=ft[gt],Q=ft[N],pt=nt.start+nt.count,ht=Zt(Q.start,T.width,4),ut=Zt(nt.start,T.width,4);Q.start<=pt+1&&ht===ut&&Zt(Q.start+Q.count-1,T.width,4)===ht?nt.count=Math.max(nt.count,Q.start+Q.count-nt.start):(++gt,ft[gt]=Q)}ft.length=gt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let N=0,nt=ft.length;N<nt;N++){let Q=ft[N],pt=Math.floor(Q.start/4),ht=Math.ceil(Q.count/4),ut=pt%T.width,Pt=Math.floor(pt/T.width),Yt=ht,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(n.TEXTURE_2D,0,ut,Pt,Yt,lt,$,at,T.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Te(R,T,$){let at=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=n.TEXTURE_3D);let st=te(R,T),ft=T.source;e.bindTexture(at,R.__webglTexture,n.TEXTURE0+$);let gt=i.get(ft);if(ft.version!==gt.__version||st===!0){if(e.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let lt=Qt.getPrimaries(Qt.workingColorSpace),kt=T.colorSpace===dn?null:Qt.getPrimaries(T.colorSpace),Xt=T.colorSpace===dn||lt===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let it=y(T.image,!1,s.maxTextureSize);it=Dt(T,it);let dt=r.convert(T.format,T.colorSpace),N=r.convert(T.type),nt=w(T.internalFormat,dt,N,T.normalized,T.colorSpace,T.isVideoTexture);Gt(at,T);let Q,pt=T.mipmaps,ht=T.isVideoTexture!==!0,ut=gt.__version===void 0||st===!0,Pt=ft.dataReady,Yt=M(T,it);if(T.isDepthTexture)nt=v(T.format===un,T.type),ut&&(ht?e.texStorage2D(n.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,dt,N,null));else if(T.isDataTexture)if(pt.length>0){ht&&ut&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,pt[0].width,pt[0].height);for(let lt=0,kt=pt.length;lt<kt;lt++)Q=pt[lt],ht?Pt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,N,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,dt,N,Q.data);T.generateMipmaps=!1}else ht?(ut&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height),Pt&&Pe(T,it,dt,N)):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,dt,N,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,pt[0].width,pt[0].height,it.depth);for(let lt=0,kt=pt.length;lt<kt;lt++)if(Q=pt[lt],T.format!==ki)if(dt!==null)if(ht){if(Pt)if(T.layerUpdates.size>0){let Xt=vc(Q.width,Q.height,T.format,T.type);for(let _t of T.layerUpdates){let he=Q.data.subarray(_t*Xt/Q.data.BYTES_PER_ELEMENT,(_t+1)*Xt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,_t,Q.width,Q.height,1,dt,he)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,dt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,Q.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Pt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,dt,N,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,dt,N,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ht&&ut&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,pt[0].width,pt[0].height);for(let lt=0,kt=pt.length;lt<kt;lt++)Q=pt[lt],T.format!==ki?dt!==null?ht?Pt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,Q.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Pt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,N,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,dt,N,Q.data)}else if(T.isDataArrayTexture)if(ht){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,it.width,it.height,it.depth),Pt)if(T.layerUpdates.size>0){let lt=vc(it.width,it.height,T.format,T.type);for(let kt of T.layerUpdates){let Xt=it.data.subarray(kt*lt/it.data.BYTES_PER_ELEMENT,(kt+1)*lt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,kt,it.width,it.height,1,dt,N,Xt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,N,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,dt,N,it.data);else if(T.isData3DTexture)ht?(ut&&e.texStorage3D(n.TEXTURE_3D,Yt,nt,it.width,it.height,it.depth),Pt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,N,it.data)):e.texImage3D(n.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,dt,N,it.data);else if(T.isFramebufferTexture){if(ut)if(ht)e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height);else{let lt=it.width,kt=it.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(n.TEXTURE_2D,Xt,nt,lt,kt,0,dt,N,null),lt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),it.parentNode!==lt){lt.appendChild(it),u.add(T),lt.onpaint=kt=>{let Xt=kt.changedElements;for(let _t of u)Xt.includes(_t.image)&&(_t.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Xt=n.RGBA,_t=n.RGBA,he=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xt,_t,he,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&ut){let lt=Vt(pt[0]);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}for(let lt=0,kt=pt.length;lt<kt;lt++)Q=pt[lt],ht?Pt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,dt,N,Q):e.texImage2D(n.TEXTURE_2D,lt,nt,dt,N,Q);T.generateMipmaps=!1}else if(ht){if(ut){let lt=Vt(it);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}Pt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,it)}else e.texImage2D(n.TEXTURE_2D,0,nt,dt,N,it);b(T)&&T.mipmapsAutoUpdate===!0&&x(at),gt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Qe(R,T,$){if(T.image.length!==6)return;let at=te(R,T),st=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);let ft=i.get(st);if(st.version!==ft.__version||at===!0){e.activeTexture(n.TEXTURE0+$);let gt=Qt.getPrimaries(Qt.workingColorSpace),tt=T.colorSpace===dn?null:Qt.getPrimaries(T.colorSpace),it=T.colorSpace===dn||gt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let dt=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,nt=[];for(let _t=0;_t<6;_t++)!dt&&!N?nt[_t]=y(T.image[_t],!0,s.maxCubemapSize):nt[_t]=N?T.image[_t].image:T.image[_t],nt[_t]=Dt(T,nt[_t]);let Q=nt[0],pt=r.convert(T.format,T.colorSpace),ht=r.convert(T.type),ut=w(T.internalFormat,pt,ht,T.normalized,T.colorSpace),Pt=T.isVideoTexture!==!0,Yt=ft.__version===void 0||at===!0,lt=st.dataReady,kt=M(T,Q);Gt(n.TEXTURE_CUBE_MAP,T);let Xt;if(T.isDepthTexture){if(ut=v(T.format===un,T.type),Yt)if(Pt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ut,Q.width,Q.height);else for(let _t=0;_t<6;_t++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,Q.width,Q.height,0,pt,ht,null)}else if(dt){Pt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,ut,Q.width,Q.height);for(let _t=0;_t<6;_t++){Xt=nt[_t].mipmaps;for(let he=0;he<Xt.length;he++){let Ge=Xt[he];T.format!==ki?pt!==null?Pt?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he,0,0,Ge.width,Ge.height,pt,Ge.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he,ut,Ge.width,Ge.height,0,Ge.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he,0,0,Ge.width,Ge.height,pt,ht,Ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he,ut,Ge.width,Ge.height,0,pt,ht,Ge.data)}}}else{if(Xt=T.mipmaps,Pt&&Yt){Xt.length>0&&kt++;let _t=Vt(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,ut,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(N){Pt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,nt[_t].width,nt[_t].height,pt,ht,nt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,nt[_t].width,nt[_t].height,0,pt,ht,nt[_t].data);for(let he=0;he<Xt.length;he++){let mn=Xt[he].image[_t].image;Pt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he+1,0,0,mn.width,mn.height,pt,ht,mn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he+1,ut,mn.width,mn.height,0,pt,ht,mn.data)}}else{Pt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,pt,ht,nt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,pt,ht,nt[_t]);for(let he=0;he<Xt.length;he++){let Ge=Xt[he];Pt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he+1,0,0,pt,ht,Ge.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,he+1,ut,pt,ht,Ge.image[_t])}}}b(T)&&T.mipmapsAutoUpdate===!0&&x(n.TEXTURE_CUBE_MAP),ft.__version=st.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function be(R,T,$,at,st,ft){let gt=r.convert($.format,$.colorSpace),tt=r.convert($.type),it=w($.internalFormat,gt,tt,$.normalized,$.colorSpace),dt=i.get(T),N=i.get($);if(N.__renderTarget=T,!dt.__hasExternalTextures){let nt=Math.max(1,T.width>>ft),Q=Math.max(1,T.height>>ft);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,ft,it,nt,Q,T.depth,0,gt,tt,null):e.texImage2D(st,ft,it,nt,Q,0,gt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),vt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,N.__webglTexture,0,ve(T)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,st,N.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Fi(R,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let at=T.depthTexture,st=at&&at.isDepthTexture?at.type:null,ft=v(T.stencilBuffer,st),gt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;vt(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(T),ft,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(T),ft,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ft,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,R)}else{let at=T.textures;for(let st=0;st<at.length;st++){let ft=at[st],gt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),it=w(ft.internalFormat,gt,tt,ft.normalized,ft.colorSpace);vt(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(T),it,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(T),it,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,it,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(R,T,$){let at=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(T.depthTexture);st.__renderTarget=T;let ft=at?T.depthTexture.image[0]:T.depthTexture.image;(!st.__webglTexture||ft.width!==T.width||ft.height!==T.height)&&(ft.width=T.width,ft.height=T.height,T.depthTexture.needsUpdate=!0),at?rt(T.depthTexture,0):et(T.depthTexture,0);let gt=st.__webglTexture,tt=ve(T),it=at?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,dt=T.depthTexture.format===un?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===ln)vt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,it,gt,0);else if(T.depthTexture.format===un)vt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xi(R){let T=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let at=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){let st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",st)};at.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=at}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let at=0;at<6;at++)He(T.__webglFramebuffer[at],R,at);else R.texture.mipmaps.length>0?He(T.__webglFramebuffer[0],R,0):He(T.__webglFramebuffer,R,0);else if($){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=n.createRenderbuffer(),Fi(T.__webglDepthbuffer[at],R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ft)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Fi(T.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ft)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yi(R,T,$){let at=i.get(R);T!==void 0&&be(at.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&xi(R)}function vi(R){let T=R.texture,$=i.get(R),at=i.get(T);R.addEventListener("dispose",O),k(R);let st=R.textures,ft=R.isWebGLCubeRenderTarget===!0,gt=st.length>1;if(gt||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=T.version,a.memory.textures++),ft){$.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0){$.__webglFramebuffer[tt]=[];for(let it=0;it<T.mipmaps.length;it++)$.__webglFramebuffer[tt][it]=n.createFramebuffer()}else $.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let tt=0;tt<T.mipmaps.length;tt++)$.__webglFramebuffer[tt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(gt)for(let tt=0,it=st.length;tt<it;tt++){let dt=i.get(st[tt]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&vt(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let tt=0;tt<st.length;tt++){let it=st[tt];$.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[tt]);let dt=r.convert(it.format,it.colorSpace),N=r.convert(it.type),nt=w(it.internalFormat,dt,N,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),Q=ve(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,nt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,$.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Fi($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,T);for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)be($.__webglFramebuffer[tt][it],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else be($.__webglFramebuffer[tt],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(T)?x(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let tt=0,it=st.length;tt<it;tt++){let dt=st[tt],N=i.get(dt),nt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),Gt(nt,dt),be($.__webglFramebuffer,R,dt,n.COLOR_ATTACHMENT0+tt,nt,0),b(dt)&&x(nt)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,at.__webglTexture),Gt(tt,T),T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)be($.__webglFramebuffer[it],R,T,n.COLOR_ATTACHMENT0,tt,it);else be($.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,tt,0);b(T)?x(tt):T.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&xi(R)}function G(R){let T=R.textures;for(let $=0,at=T.length;$<at;$++){let st=T[$];if(b(st)&&st.mipmapsAutoUpdate===!0){let ft=S(R),gt=i.get(st).__webglTexture;e.bindTexture(ft,gt),x(ft),e.unbindTexture()}}}let _i=[];function ye(R){if(R.samples>0){if(vt(R)===!1){let T=R.textures,$=R.width,at=R.height,st=n.COLOR_BUFFER_BIT,ft=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(R),tt=T.length>1;if(tt)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let N=i.get(T[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,$,at,0,0,$,at,st,n.NEAREST),l===!0&&(_i.length=0,_i.push(n.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&_i.push(ft),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_i))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let N=i.get(T[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ve(R){return Math.min(s.maxSamples,R.samples)}function vt(R){let T=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ue(R){let T=a.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function Dt(R,T){let $=R.colorSpace,at=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Zs&&$!==dn&&(Qt.getTransfer($)===ce?(at!==ki||st!==hi)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",$)),T}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=H,this.setTexture2D=et,this.setTexture2DArray=ot,this.setTexture3D=ct,this.setTextureCube=rt,this.rebindTextures=yi,this.setupRenderTarget=vi,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=xi,this.setupFrameBufferTexture=be,this.useMultisampledRTT=vt,this.dispose=B}function px(n,t){function e(i,s=dn){let r,a=Qt.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===Qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===to)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ac)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sc)return n.BYTE;if(i===rc)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===ja)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===lc)return n.ALPHA;if(i===cc)return n.RGB;if(i===ki)return n.RGBA;if(i===ln)return n.DEPTH_COMPONENT;if(i===un)return n.DEPTH_STENCIL;if(i===eo)return n.RED;if(i===io)return n.RED_INTEGER;if(i===In)return n.RG;if(i===no)return n.RG_INTEGER;if(i===so)return n.RGBA_INTEGER;if(i===vr||i===_r||i===br||i===Mr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ro||i===ao||i===oo||i===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===co||i===ho||i===fo||i===uo||i===po||i===Sr||i===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===co||i===ho)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uo)return r.COMPRESSED_R11_EAC;if(i===po)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sr)return r.COMPRESSED_RG11_EAC;if(i===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===go||i===xo||i===yo||i===vo||i===_o||i===bo||i===Mo||i===So||i===wo||i===To||i===Ao||i===Eo||i===Co||i===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===To)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Lo||i===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Po)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Do||i===wr||i===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Yi({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Bi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new kc,p={},y=e.getContextAttributes(),b=null,x=null,S=[],w=[],v=new qt,M=null,k=null,P=new Ze;P.viewport=new _e;let I=new Ze;I.viewport=new _e;let O=[P,I],C=new qa,E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let et=S[L];return et===void 0&&(et=new Ms,S[L]=et),et.getTargetRaySpace()},this.getControllerGrip=function(L){let et=S[L];return et===void 0&&(et=new Ms,S[L]=et),et.getGripSpace()},this.getHand=function(L){let et=S[L];return et===void 0&&(et=new Ms,S[L]=et),et.getHandSpace()};function U(L){let et=w.indexOf(L.inputSource);if(et===-1)return;let ot=S[et];ot!==void 0&&(ot.update(L.inputSource,L.frame,h||a),ot.dispatchEvent({type:L.type,data:L.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",q);for(let L=0;L<S.length;L++){let et=w[L];et!==null&&(w[L]=null,S[L].disconnect(et))}E=null,B=null,m.reset();for(let L in p)delete p[L];if(t.setRenderTarget(b),d=null,f=null,u=null,s=null,x=null,W.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(v.width,v.height,!1),k!==null){let L=k.camera;L.fov=k.fov,L.zoom=k.zoom,L.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(L){h=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ct=null,rt=null;y.depth&&(rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?un:ln,ct=y.stencil?Qn:Li);let Ft={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new pi(f.textureWidth,f.textureHeight,{format:ki,type:hi,depthTexture:new hn(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new pi(d.framebufferWidth,d.framebufferHeight,{format:ki,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(L){for(let et=0;et<L.removed.length;et++){let ot=L.removed[et],ct=w.indexOf(ot);ct>=0&&(w[ct]=null,S[ct].disconnect(ot))}for(let et=0;et<L.added.length;et++){let ot=L.added[et],ct=w.indexOf(ot);if(ct===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=w.length){w.push(ot),ct=Ft;break}else if(w[Ft]===null){w[Ft]=ot,ct=Ft;break}if(ct===-1)break}let rt=S[ct];rt&&rt.connect(ot)}}function V(L,et){et===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(et.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let et=L.near,ot=L.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),C.near=I.near=P.near=et,C.far=I.far=P.far=ot,(E!==C.near||B!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),E=C.near,B=C.far),C.layers.mask=L.layers.mask|6,P.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let ct=L.parent,rt=C.cameras;V(C,ct);for(let Ft=0;Ft<rt.length;Ft++)V(rt[Ft],ct);C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),k===null&&L.isPerspectiveCamera&&(k={camera:L,fov:L.fov,zoom:L.zoom}),Z(L,C,ct)};function Z(L,et,ot){ot===null?L.matrix.copy(et.matrixWorld):(L.matrix.copy(ot.matrixWorld),L.matrix.invert(),L.matrix.multiply(et.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(et.projectionMatrix),L.projectionMatrixInverse.copy(et.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Sa*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(L){return p[L]};let j=null;function H(L,et){if(c=et.getViewerPose(h||a),g=et,c!==null){let ot=c.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ct=!1;ot.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let St=0;St<ot.length;St++){let Gt=ot[St],te=null;if(d!==null)te=d.getViewport(Gt);else{let Pe=u.getViewSubImage(f,Gt);te=Pe.viewport,St===0&&(t.setRenderTargetTextures(x,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(x))}let Zt=O[St];Zt===void 0&&(Zt=new Ze,Zt.layers.enable(St),Zt.viewport=new _e,O[St]=Zt),Zt.matrix.fromArray(Gt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Gt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(te.x,te.y,te.width,te.height),St===0&&(C.matrix.copy(Zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Zt)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let St=u.getDepthInformation(ot[0]);St&&St.isValid&&St.texture&&m.init(St,s.renderState)}if(rt&&rt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let St=0;St<ot.length;St++){let Gt=ot[St].camera;if(Gt){let te=p[Gt];te||(te=new cr,p[Gt]=te);let Zt=u.getCameraImage(Gt);te.sourceTexture=Zt}}}}for(let ot=0;ot<S.length;ot++){let ct=w[ot],rt=S[ot];ct!==null&&rt!==void 0&&rt.update(ct,et,h||a)}j&&j(L,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let W=new Jf;W.setAnimationLoop(H),this.setAnimationLoop=function(L){j=L},this.dispose=function(){}}},xx=new fe,ou=new Ht;ou.set(-1,0,0,0,1,0,0,0,1);function yx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ou),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vx(n,t,e,i){let s={},r={};function a(y,b){let x=b.program;i.uniformBlockBinding(y,x,s[y.id])}function o(y,b){let x=s[y.id];x===void 0&&(g(y),x=l(y),s[y.id]=x,y.addEventListener("dispose",m));let S=b.program;i.updateUBOMapping(y,S);let w=t.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function l(y){let b=n.createBuffer(),x=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,x,S),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function h(y){let b=s[y.id],x=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,v=x.length;w<v;w++){let M=x[w];if(Array.isArray(M))for(let k=0,P=M.length;k<P;k++)c(M[k],w,k,S);else c(M,w,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(y,b,x,S){if(f(y,b,x,S)===!0){let w=y.__offset,v=y.value;if(Array.isArray(v)){let M=0;for(let k=0;k<v.length;k++){let P=v[k],I=_(P,!0);u(P,y.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function u(y,b,x){typeof y=="number"||typeof y=="boolean"?b[x]=y:y.isMatrix3?(b[x]=y.elements[0],b[x+1]=y.elements[1],b[x+2]=y.elements[2],b[x+3]=0,b[x+4]=y.elements[3],b[x+5]=y.elements[4],b[x+6]=y.elements[5],b[x+7]=0,b[x+8]=y.elements[6],b[x+9]=y.elements[7],b[x+10]=y.elements[8],b[x+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-x),x):y.toArray(b,x)}function f(y,b,x,S){let w=y.value,v=b+"_"+x;if(Array.isArray(w)){S[v]===void 0&&(S[v]=[]);let M=S[v],k=!1;for(let P=0;P<w.length;P++)d(w[P],M,P)===!0&&(k=!0);return k}return d(w,S,v)}function d(y,b,x){if(b[x]===void 0)return typeof y=="number"||typeof y=="boolean"?b[x]=y:ArrayBuffer.isView(y)?b[x]=y.slice():b[x]=y.clone(),!0;{let S=b[x];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return b[x]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(y){let b=y.uniforms,x=0,S=16;for(let v=0,M=b.length;v<M;v++){let k=Array.isArray(b[v])?b[v]:[b[v]];for(let P=0,I=k.length;P<I;P++){let O=k[P],C=Array.isArray(O.value)?O.value:[O.value],E=Array.isArray(b[v])||Array.isArray(O.value),B=x;for(let D=0,q=C.length;D<q;D++){let V=C[D],Z=_(V,E),j=x%S,H=j%Z.boundary,W=j+H;x+=H,W!==0&&S-W<Z.storage&&(x+=S-W),D===0&&(B=x),x+=Z.storage}let U=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new U((x-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let w=x%S;return w>0&&(x+=S-w),y.__size=x,y.__cache={},this}function _(y,b){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=16,x.storage=48):y.isMatrix4?(x.boundary=16,x.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function m(y){let b=y.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function bx(){return Ki===null&&(Ki=new sr(_x,16,16,In,Ii),Ki.name="DFG_LUT",Ki.minFilter=ai,Ki.magFilter=ai,Ki.wrapS=ci,Ki.wrapT=ci,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Bo=class{constructor(t={}){let{canvas:e=bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=d,m=new Set([so,no,io]),p=new Set([hi,Li,Ps,Qn,Qa,to]),y=new Uint32Array(4),b=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},S=null,w=null,v=[],M=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,O=null,C=null,E=null,B=null;this._outputColorSpace=Xe;let U=0,D=0,q=null,V=-1,Z=null,j=new _e,H=new _e,W=null,L=new Ut(0),et=0,ot=e.width,ct=e.height,rt=1,Ft=null,Kt=null,St=new _e(0,0,ot,ct),Gt=new _e(0,0,ot,ct),te=!1,Zt=new wn,Pe=new Ea,Te=!1,Qe=!1,be=new fe,Fi=new X,He=new _e,xi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yi=!1;function vi(){return q===null?rt:1}let G=i;function _i(A,z){return e.getContext(A,z)}let ye,ve,vt,Ue,Dt,Vt,R,T,$,at,st,ft,gt,tt,it,dt,N,nt,Q,pt,ht,ut,Pt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),G===null){let z="webgl2";if(G=_i(z,A),G===null)throw _i(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(A){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),zt("WebGLRenderer: "+A.message),A}function Yt(){ye=new Im(G),ye.init(),ht=new px(G,ye),ve=new bm(G,ye,t,ht),vt=new ux(G,ye),ve.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),C=G.createFramebuffer(),E=G.createFramebuffer(),B=G.createFramebuffer(),Ue=new Nm(G),Dt=new jg,Vt=new dx(G,ye,vt,Dt,ve,ht,Ue),R=new Lm(P),T=new Od(G),ut=new vm(G,T),$=new km(G,T,Ue,ut),at=new Om(G,$,T,ut,Ue),nt=new Um(G,ve,Vt),it=new Mm(Dt),st=new Jg(P,R,ye,ve,ut,it),ft=new yx(P,Dt),gt=new tx,tt=new ax(ye),N=new ym(P,R,vt,at,g,l),dt=new fx(P,at,ve),Pt=new vx(G,Ue,ve,vt),Q=new _m(G,ye,Ue),pt=new Dm(G,ye,Ue),Ue.programs=st.programs,P.capabilities=ve,P.extensions=ye,P.properties=Dt,P.renderLists=gt,P.shadowMap=dt,P.state=vt,P.info=Ue}_!==hi&&(k=new zm(_,e.width,e.height,o,s,r));let lt=new Dc(P,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(A){A!==void 0&&(rt=A,this.setSize(ot,ct,!1))},this.getSize=function(A){return A.set(ot,ct)},this.setSize=function(A,z,J=!0){if(lt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,ct=z,e.width=Math.floor(A*rt),e.height=Math.floor(z*rt),J===!0&&(e.style.width=A+"px",e.style.height=z+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ot*rt,ct*rt).floor()},this.setDrawingBufferSize=function(A,z,J){ot=A,ct=z,rt=J,e.width=Math.floor(A*J),e.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===hi){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(St)},this.setViewport=function(A,z,J,Y){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,z,J,Y),vt.viewport(j.copy(St).multiplyScalar(vi()).round())},this.getScissor=function(A){return A.copy(Gt)},this.setScissor=function(A,z,J,Y){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,z,J,Y),vt.scissor(H.copy(Gt).multiplyScalar(vi()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){vt.setScissorTest(te=A)},this.setOpaqueSort=function(A){Ft=A},this.setTransparentSort=function(A){Kt=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let Y=0;if(A){let K=!1;if(q!==null){let xt=q.texture.format;K=m.has(xt)}if(K){let xt=q.texture.type,At=p.has(xt),mt=N.getClearColor(),wt=N.getClearAlpha(),Rt=mt.r,Wt=mt.g,Jt=mt.b;At?(y[0]=Rt,y[1]=Wt,y[2]=Jt,y[3]=wt,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Rt,b[1]=Wt,b[2]=Jt,b[3]=wt,G.clearBufferiv(G.COLOR,0,b))}else Y|=G.COLOR_BUFFER_BIT}z&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),N.dispose(),gt.dispose(),tt.dispose(),Vt.dispose(),Dt.dispose(),R.dispose(),at.dispose(),$.dispose(),ut.dispose(),Pt.dispose(),st.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",th),lt.removeEventListener("sessionend",eh),Fn.stop()};function kt(A){A.preventDefault(),pc("WebGLRenderer: Context Lost."),I=!0}function Xt(){pc("WebGLRenderer: Context Restored."),I=!1;let A=Ue.autoReset,z=dt.enabled,J=dt.autoUpdate,Y=dt.needsUpdate,K=dt.type;Yt(),Ue.autoReset=A,dt.enabled=z,dt.autoUpdate=J,dt.needsUpdate=Y,dt.type=K}function _t(A){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){let z=A.target;z.removeEventListener("dispose",he),Ge(z)}function Ge(A){mn(A),Dt.remove(A)}function mn(A){let z=Dt.get(A).programs;z!==void 0&&(z.forEach(function(J){st.releaseProgram(J)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,Y,K,xt){z===null&&(z=xi);let At=K.isMesh&&K.matrixWorld.determinantAffine()<0,mt=Ku(A,z,J,Y,K);vt.setMaterial(Y,At);let wt=J.index,Rt=1;if(Y.wireframe===!0){if(wt=$.getWireframeAttribute(J),wt===void 0)return;Rt=2}let Wt=J.drawRange,Jt=J.attributes.position,Et=Wt.start*Rt,jt=(Wt.start+Wt.count)*Rt;xt!==null&&(Et=Math.max(Et,xt.start*Rt),jt=Math.min(jt,(xt.start+xt.count)*Rt)),wt!==null?(Et=Math.max(Et,0),jt=Math.min(jt,wt.count)):Jt!=null&&(Et=Math.max(Et,0),jt=Math.min(jt,Jt.count));let Le=jt-Et;if(Le<0||Le===1/0)return;ut.setup(K,Y,mt,J,wt);let ge,me=Q;if(wt!==null&&(ge=T.get(wt),me=pt,me.setIndex(ge)),K.isMesh)Y.wireframe===!0?(vt.setLineWidth(Y.wireframeLinewidth*vi()),me.setMode(G.LINES)):me.setMode(G.TRIANGLES);else if(K.isLine){let ti=Y.linewidth;ti===void 0&&(ti=1),vt.setLineWidth(ti*vi()),K.isLineSegments?me.setMode(G.LINES):K.isLineLoop?me.setMode(G.LINE_LOOP):me.setMode(G.LINE_STRIP)}else K.isPoints?me.setMode(G.POINTS):K.isSprite&&me.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ti=K._multiDrawStarts,Ct=K._multiDrawCounts,ri=K._multiDrawCount,le=wt?T.get(wt).bytesPerElement:1,zn=Dt.get(Y).currentProgram.getUniforms();for(let ei=0;ei<ri;ei++)zn.setValue(G,"_gl_DrawID",ei),me.render(ti[ei]/le,Ct[ei])}else if(K.isInstancedMesh)me.renderInstances(Et,Le,K.count);else if(J.isInstancedBufferGeometry){let ti=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,ti);me.renderInstances(Et,Le,Ct)}else me.render(Et,Le)};function Qc(A,z,J,Y){O!==null&&A.isNodeMaterial&&O.setObject(Y,A),Te===!0&&it.setState(A,J,!1),A.transparent===!0&&A.side===ke&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,Bs(A,z,Y),A.side=Ln,A.needsUpdate=!0,Bs(A,z,Y),A.side=ke):Bs(A,z,Y)}this.compile=function(A,z,J=null){J===null&&(J=A),O!==null&&O.renderStart(A,z,J),w=tt.get(J),w.init(z),M.push(w),J.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),A!==J&&A.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Qe=this.localClippingEnabled,Te=it.init(this.clippingPlanes,Qe),Te===!0&&it.setGlobalState(this.clippingPlanes,z),O!==null&&dt.render(w.state.shadowsArray,J,z);let Y=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let xt=K.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){let mt=xt[At];Qc(mt,J,z,K),Y.add(mt)}else Qc(xt,J,z,K),Y.add(xt)}),w=M.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(A,z,J=null){let Y=this.compile(A,z,J);return new Promise(K=>{function xt(){if(Y.forEach(function(At){let wt=Dt.get(At).currentProgram;(wt===void 0||wt.isReady())&&Y.delete(At)}),Y.size===0){K(A);return}setTimeout(xt,10)}ye.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let dl=null;function Yu(A){dl&&dl(A)}function th(){Fn.stop()}function eh(){Fn.start()}let Fn=new Jf;Fn.setAnimationLoop(Yu),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){dl=A,lt.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},lt.addEventListener("sessionstart",th),lt.addEventListener("sessionend",eh),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(A,z);let J=lt.enabled===!0&&lt.isPresenting===!0,Y=k!==null&&(q===null||J)&&k.begin(P,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(z),z=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,z,q),w=tt.get(A,M.length),w.init(z),w.state.textureUnits=Vt.getTextureUnits(),M.push(w),be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Pe.setFromArrayCamera(z):Zt.setFromProjectionMatrix(be,Mi,z.reversedDepth),Qe=this.localClippingEnabled,Te=it.init(this.clippingPlanes,Qe),S=gt.get(A,v.length),S.init(),v.push(S),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&pl(At,z,-1/0,P.sortObjects)}pl(A,z,0,P.sortObjects),S.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(Ft,Kt),yi=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,yi&&N.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),Te===!0&&it.beginShadows();let K=w.state.shadowsArray;if(dt.render(K,A,z),Te===!0&&it.endShadows(),(Y&&k.hasRenderPass())===!1){let At=S.opaque,mt=S.transmissive;if(w.setupLights(),z.isArrayCamera){let wt=z.cameras;if(mt.length>0)for(let Rt=0,Wt=wt.length;Rt<Wt;Rt++){let Jt=wt[Rt];nh(At,mt,A,Jt)}yi&&N.render(A);for(let Rt=0,Wt=wt.length;Rt<Wt;Rt++){let Jt=wt[Rt];ih(S,A,Jt,Jt.viewport)}}else mt.length>0&&nh(At,mt,A,z),yi&&N.render(A),ih(S,A,z)}q!==null&&D===0&&(Vt.updateMultisampleRenderTarget(q),Vt.updateRenderTargetMipmap(q)),Y&&k.end(P),A.isScene===!0&&A.onAfterRender(P,A,z),ut.resetDefaultState(),V=-1,Z=null,M.pop(),M.length>0?(w=M[M.length-1],Vt.setTextureUnits(w.state.textureUnits),Te===!0&&it.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?S=v[v.length-1]:S=null,O!==null&&O.renderEnd()};function pl(A,z,J,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let At=z.isArrayCamera?Pe:Zt;if(!A.frustumCulled||A.intersectsFrustum(At)){Y&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);let mt=at.update(A),wt=A.material;wt.visible&&S.push(A,mt,wt,J,He.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let At=z.isArrayCamera?Pe:Zt;if(!A.frustumCulled||A.intersectsFrustum(At)){let mt=at.update(A),wt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),He.copy(mt.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(wt)){let Rt=mt.groups;for(let Wt=0,Jt=Rt.length;Wt<Jt;Wt++){let Et=Rt[Wt],jt=wt[Et.materialIndex];jt&&jt.visible&&S.push(A,mt,jt,J,He.z,Et,z)}}else wt.visible&&S.push(A,mt,wt,J,He.z,null,z)}}}let xt=A.children;for(let At=0,mt=xt.length;At<mt;At++)pl(xt[At],z,J,Y)}function ih(A,z,J,Y){let{opaque:K,transmissive:xt,transparent:At}=A;w.setupLightsView(J),Te===!0&&it.setGlobalState(P.clippingPlanes,J),Y&&vt.viewport(j.copy(Y)),K.length>0&&zr(K,z,J),xt.length>0&&zr(xt,z,J),At.length>0&&zr(At,z,J),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function nh(A,z,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Et=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new pi(1,1,{generateMipmaps:!0,type:Et?Ii:hi,minFilter:fn,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let xt=w.state.transmissionRenderTarget[Y.id],At=Y.viewport||j;xt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),wt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(xt),P.getClearColor(L),et=P.getClearAlpha(),et<1&&P.setClearColor(16777215,.5),P.clear(),yi&&N.render(J);let Wt=P.toneMapping;P.toneMapping=$i;let Jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Te===!0&&it.setGlobalState(P.clippingPlanes,Y),zr(A,J,Y),Vt.updateMultisampleRenderTarget(xt),Vt.updateRenderTargetMipmap(xt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let jt=0,Le=z.length;jt<Le;jt++){let ge=z[jt],{object:me,geometry:ti,material:Ct,group:ri}=ge;if(Ct.side===ke&&me.layers.test(Y.layers)){let le=Ct.side;Ct.side=Je,Ct.needsUpdate=!0,sh(me,J,Y,ti,Ct,ri),Ct.side=le,Ct.needsUpdate=!0,Et=!0}}Et===!0&&(Vt.updateMultisampleRenderTarget(xt),Vt.updateRenderTargetMipmap(xt))}P.setRenderTarget(mt,wt,Rt),P.setClearColor(L,et),Jt!==void 0&&(Y.viewport=Jt),P.toneMapping=Wt}function zr(A,z,J){let Y=z.isScene===!0?z.overrideMaterial:null;for(let K=0,xt=A.length;K<xt;K++){let At=A[K],{object:mt,geometry:wt,group:Rt}=At,Wt=At.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),mt.layers.test(J.layers)&&sh(mt,z,J,wt,Wt,Rt)}}function sh(A,z,J,Y,K,xt){O!==null&&K.isNodeMaterial&&O.setObject(A,K),A.onBeforeRender(P,z,J,Y,K,xt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,z,J,Y,A,xt),K.transparent===!0&&K.side===ke&&K.forceSinglePass===!1?(K.side=Je,K.needsUpdate=!0,P.renderBufferDirect(J,z,Y,K,A,xt),K.side=Ln,K.needsUpdate=!0,P.renderBufferDirect(J,z,Y,K,A,xt),K.side=ke):P.renderBufferDirect(J,z,Y,K,A,xt),A.onAfterRender(P,z,J,Y,K,xt)}function rh(A){let z=0;for(let J of A)J.texture!==null&&z++;return z}function Bs(A,z,J){z.isScene!==!0&&(z=xi);let Y=Dt.get(A),K=w.state.lights,xt=w.state.shadowsArray,At=K.state.version,mt=st.getParameters(A,K.state,xt,z,J,w.state.lightProbeGridArray),wt=st.getProgramCacheKey(mt),Rt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let Wt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=R.get(A.envMap||Y.environment,Wt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Rt===void 0&&(A.addEventListener("dispose",he),Rt=new Map,Y.programs=Rt,Y.programVariants=new Map);let Jt=Rt.get(wt);if(Jt!==void 0){if(Y.currentProgram===Jt&&Y.lightsStateVersion===At)return oh(A,mt),Jt}else mt.uniforms=st.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,J,mt),A.onBeforeCompile(mt,P),Jt=st.acquireProgram(mt,wt),Rt.set(wt,Jt),Y.uniforms=mt.uniforms;let Et=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=it.uniform),oh(A,mt),Y.needsLights=Ju(A),Y.lightsStateVersion=At,Y.needsLights&&(Et.ambientLightColor.value=K.state.ambient,Et.lightProbe.value=K.state.probe,Et.sunLights.value=K.state.sun,Et.sunLightShadows.value=K.state.sunShadow,Et.directionalLights.value=K.state.directional,Et.directionalLightShadows.value=K.state.directionalShadow,Et.spotLights.value=K.state.spot,Et.spotLightShadows.value=K.state.spotShadow,Et.rectAreaLights.value=K.state.rectArea,Et.ltc_1.value=K.state.rectAreaLTC1,Et.ltc_2.value=K.state.rectAreaLTC2,Et.pointLights.value=K.state.point,Et.pointLightShadows.value=K.state.pointShadow,Et.hemisphereLights.value=K.state.hemi,Et.sunShadowMatrix.value=K.state.sunShadowMatrix,Et.sunShadowCascade.value=K.state.sunShadowCascade,Et.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Et.spotLightMatrix.value=K.state.spotLightMatrix,Et.spotLightMap.value=K.state.spotLightMap,Et.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=rh(w.state.lightProbeGridArray),Y.currentProgram=Jt,Y.uniformsList=null,Jt}function $u(A,z,J,Y,K){let xt=Dt.get(A),At=xt.currentProgram.id+","+Y+","+K,mt=xt.programVariants.get(At);return mt===void 0?(mt=Bs(A,z,J),xt.programVariants.set(At,mt)):(xt.currentProgram=mt,xt.uniformsList=null,xt.outputColorSpace=Y,xt.toneMapping=K),mt}function ah(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ls.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function oh(A,z){let J=Dt.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ku(A,z,J,Y,K){z.isScene!==!0&&(z=xi),Vt.resetTextureUnits();let xt=z.fog,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,mt=q===null?P.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qt.workingColorSpace,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Rt=R.get(Y.envMap||At,wt),Wt=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,Le=!!J.morphAttributes.color,ge=$i;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ge=P.toneMapping);let me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ti=me!==void 0?me.length:0,Ct=Dt.get(Y),ri=w.state.lights;if(Te===!0&&(Qe===!0||A!==Z)){let Me=A===Z&&Y.id===V;it.setState(Y,A,Me)}let le=!1,zn=!1;Y.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==ri.state.version||K.isBatchedMesh&&Ct.batching===!1||!K.isBatchedMesh&&Ct.batching===!0||K.isBatchedMesh&&Ct.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ct.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ct.instancing===!1||!K.isInstancedMesh&&Ct.instancing===!0||K.isSkinnedMesh&&Ct.skinning===!1||!K.isSkinnedMesh&&Ct.skinning===!0||K.isInstancedMesh&&Ct.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ct.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ct.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ct.instancingMorph===!1&&K.morphTexture!==null||Ct.envMap!==Rt||Y.fog===!0&&Ct.fog!==xt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Wt||Ct.vertexTangents!==Jt||Ct.morphTargets!==Et||Ct.morphNormals!==jt||Ct.morphColors!==Le||Ct.morphTargetsCount!==ti||Ct.numLightProbeGrids!==rh(w.state.lightProbeGridArray)?le=!0:(Ct.outputColorSpace!==mt||Ct.toneMapping!==ge)&&(zn=!0):(le=!0,Ct.__version=Y.version);let ei=Ct.currentProgram;(le===!0||zn===!0)&&(ei=zn===!0?$u(Y,z,K,mt,ge):Bs(Y,z,K),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,ei,Ct));let Br=!1,gn=!1,Bn=!1,se=ei.getUniforms(),Ke=Ct.uniforms;if(vt.useProgram(ei.program)&&(Br=!0,gn=!0,Bn=!0),Y.id!==V&&(V=Y.id,gn=!0),Br||Z!==A){vt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),se.setValue(G,"projectionMatrix",A.projectionMatrix),se.setValue(G,"viewMatrix",A.matrixWorldInverse);let Ve=se.map.cameraPosition;Ve!==void 0&&Ve.setValue(G,Fi.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&se.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&se.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,gn=!0,Bn=!0)}if(Ct.needsLights&&(ri.state.sunShadowMap.length>0&&se.setValue(G,"sunShadowMap",ri.state.sunShadowMap,Vt),ri.state.directionalShadowMap.length>0&&se.setValue(G,"directionalShadowMap",ri.state.directionalShadowMap,Vt),ri.state.spotShadowMap.length>0&&se.setValue(G,"spotShadowMap",ri.state.spotShadowMap,Vt),ri.state.pointShadowMap.length>0&&se.setValue(G,"pointShadowMap",ri.state.pointShadowMap,Vt)),K.isSkinnedMesh){se.setOptional(G,K,"bindMatrix"),se.setOptional(G,K,"bindMatrixInverse");let Me=K.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),se.setValue(G,"boneTexture",Me.boneTexture,Vt))}K.isBatchedMesh&&(se.setOptional(G,K,"batchingTexture"),se.setValue(G,"batchingTexture",K._matricesTexture,Vt),se.setOptional(G,K,"batchingIdTexture"),se.setValue(G,"batchingIdTexture",K._indirectTexture,Vt),se.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&se.setValue(G,"batchingColorTexture",K._colorsTexture,Vt));let Ti=J.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&nt.update(K,J,ei),(gn||Ct.receiveShadow!==K.receiveShadow)&&(Ct.receiveShadow=K.receiveShadow,se.setValue(G,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Ke.envMapIntensity.value=z.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=bx()),gn){if(se.setValue(G,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Zu(Ke,Bn),xt&&Y.fog===!0&&ft.refreshFogUniforms(Ke,xt),ft.refreshMaterialUniforms(Ke,Y,rt,ct,w.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let Me=x,Ve=0;for(let tn of w.state.lightProbeGridArray)tn.texture!==null&&(Me.textures[Ve]=tn.texture,Me.min[Ve]=tn.boundingBox.min,Me.max[Ve]=tn.boundingBox.max,Me.resolution[Ve]=tn.resolution,Ve++);for(let tn in Me)Me[tn].length=Ve;Ke.probesSH.value=Me.textures,Ke.probesMin.value=Me.min,Ke.probesMax.value=Me.max,Ke.probesResolution.value=Me.resolution}Ls.upload(G,ah(Ct),Ke,Vt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(G,ah(Ct),Ke,Vt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&se.setValue(G,"center",K.center),se.setValue(G,"modelViewMatrix",K.modelViewMatrix),se.setValue(G,"normalMatrix",K.normalMatrix),se.setValue(G,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){let Me=Y.uniformsGroups;for(let Ve=0,tn=Me.length;Ve<tn;Ve++){let ch=Me[Ve];Pt.update(ch,ei),Pt.bind(ch,ei)}}return ei}function Zu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,z,J){let Y=Dt.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Dt.get(A.texture).__webglTexture=z,Dt.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=Dt.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){q=A,U=z,D=J;let Y=null,K=!1,xt=!1;if(A){let mt=Dt.get(A);if(mt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(G.FRAMEBUFFER,mt.__webglFramebuffer),j.copy(A.viewport),H.copy(A.scissor),W=A.scissorTest,vt.viewport(j),vt.scissor(H),vt.setScissorTest(W),V=-1;return}else if(mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(A);else if(mt.__hasExternalTextures)Vt.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Wt=A.depthTexture;if(mt.__boundDepthTexture!==Wt){if(Wt!==null&&Dt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(A)}}let wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);let Rt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Rt[z])?Y=Rt[z][J]:Y=Rt[z],K=!0):A.samples>0&&Vt.useMultisampledRTT(A)===!1?Y=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Rt)?Y=Rt[J]:Y=Rt,j.copy(A.viewport),H.copy(A.scissor),W=A.scissorTest}else j.copy(St).multiplyScalar(rt).floor(),H.copy(Gt).multiplyScalar(rt).floor(),W=te;if(J!==0&&(Y=C),vt.bindFramebuffer(G.FRAMEBUFFER,Y)&&vt.drawBuffers(A,Y),vt.viewport(j),vt.scissor(H),vt.setScissorTest(W),K){let mt=Dt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,mt.__webglTexture,J)}else if(xt){let mt=z;for(let wt=0;wt<A.textures.length;wt++){let Rt=Dt.get(A.textures[wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,J,mt)}}else if(A!==null&&J!==0){let mt=Dt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mt.__webglTexture,J)}V=-1};function lh(A){let z=Dt.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=ve.textureFormatReadable(A.format),z.__typeReadable=ve.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,J,Y,K,xt,At,mt=0){if(!(A&&A.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt){vt.bindFramebuffer(G.FRAMEBUFFER,wt);try{let Rt=A.textures[mt],Wt=Rt.format,Jt=Rt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+mt);let Et=lh(Rt);if(Et.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&J>=0&&J<=A.height-K&&G.readPixels(z,J,Y,K,ht.convert(Wt),ht.convert(Jt),xt)}finally{let Rt=q!==null?Dt.get(q).__webglFramebuffer:null;vt.bindFramebuffer(G.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,Y,K,xt,At,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt)if(z>=0&&z<=A.width-Y&&J>=0&&J<=A.height-K){vt.bindFramebuffer(G.FRAMEBUFFER,wt);let Rt=A.textures[mt],Wt=Rt.format,Jt=Rt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+mt);let Et=lh(Rt);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.bufferData(G.PIXEL_PACK_BUFFER,xt.byteLength,G.STREAM_READ),G.readPixels(z,J,Y,K,ht.convert(Wt),ht.convert(Jt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Le=q!==null?Dt.get(q).__webglFramebuffer:null;vt.bindFramebuffer(G.FRAMEBUFFER,Le);let ge=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Sf(G,ge,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,xt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(jt),G.deleteSync(ge),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let Y=Math.pow(2,-J),K=Math.floor(A.image.width*Y),xt=Math.floor(A.image.height*Y),At=z!==null?z.x:0,mt=z!==null?z.y:0;Vt.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,At,mt,K,xt),vt.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,Y=null,K=0,xt=0){let At,mt,wt,Rt,Wt,Jt,Et,jt,Le,ge=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(J!==null)At=J.max.x-J.min.x,mt=J.max.y-J.min.y,wt=J.isBox3?J.max.z-J.min.z:1,Rt=J.min.x,Wt=J.min.y,Jt=J.isBox3?J.min.z:0;else{let se=Math.pow(2,-K);At=Math.floor(ge.width*se),mt=Math.floor(ge.height*se),A.isDataArrayTexture?wt=ge.depth:A.isData3DTexture?wt=Math.floor(ge.depth*se):wt=1,Rt=0,Wt=0,Jt=0}Y!==null?(Et=Y.x,jt=Y.y,Le=Y.z):(Et=0,jt=0,Le=0);let me=ht.convert(z.format),ti=ht.convert(z.type),Ct;z.isData3DTexture?(Vt.setTexture3D(z,0),Ct=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Vt.setTexture2DArray(z,0),Ct=G.TEXTURE_2D_ARRAY):(Vt.setTexture2D(z,0),Ct=G.TEXTURE_2D),vt.activeTexture(G.TEXTURE0),vt.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),vt.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),vt.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);let ri=vt.getParameter(G.UNPACK_ROW_LENGTH),le=vt.getParameter(G.UNPACK_IMAGE_HEIGHT),zn=vt.getParameter(G.UNPACK_SKIP_PIXELS),ei=vt.getParameter(G.UNPACK_SKIP_ROWS),Br=vt.getParameter(G.UNPACK_SKIP_IMAGES);vt.pixelStorei(G.UNPACK_ROW_LENGTH,ge.width),vt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ge.height),vt.pixelStorei(G.UNPACK_SKIP_PIXELS,Rt),vt.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),vt.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);let gn=A.isDataArrayTexture||A.isData3DTexture,Bn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let se=Dt.get(A),Ke=Dt.get(z),Ti=Dt.get(se.__renderTarget),Me=Dt.get(Ke.__renderTarget);vt.bindFramebuffer(G.READ_FRAMEBUFFER,Ti.__webglFramebuffer),vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ve=0;Ve<wt;Ve++)gn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.get(A).__webglTexture,K,Jt+Ve),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.get(z).__webglTexture,xt,Le+Ve)),G.blitFramebuffer(Rt,Wt,Rt+At,Wt+mt,Et,jt,Et+At,jt+mt,G.DEPTH_BUFFER_BIT,G.NEAREST);vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Dt.has(A)){let se=Dt.get(A),Ke=Dt.get(z);vt.bindFramebuffer(G.READ_FRAMEBUFFER,E),vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,B);for(let Ti=0;Ti<wt;Ti++)gn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,se.__webglTexture,K,Jt+Ti):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,se.__webglTexture,K),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.__webglTexture,xt,Le+Ti):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ke.__webglTexture,xt),K!==0?G.blitFramebuffer(Rt,Wt,Rt+At,Wt+mt,Et,jt,Et+At,jt+mt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(Ct,xt,Et,jt,Le+Ti,Rt,Wt,At,mt):G.copyTexSubImage2D(Ct,xt,Et,jt,Rt,Wt,At,mt);vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ct,xt,Et,jt,Le,At,mt,wt,me,ti,ge.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(Ct,xt,Et,jt,Le,At,mt,wt,me,ge.data):G.texSubImage3D(Ct,xt,Et,jt,Le,At,mt,wt,me,ti,ge):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,xt,Et,jt,At,mt,me,ti,ge.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,xt,Et,jt,ge.width,ge.height,me,ge.data):G.texSubImage2D(G.TEXTURE_2D,xt,Et,jt,At,mt,me,ti,ge);vt.pixelStorei(G.UNPACK_ROW_LENGTH,ri),vt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,le),vt.pixelStorei(G.UNPACK_SKIP_PIXELS,zn),vt.pixelStorei(G.UNPACK_SKIP_ROWS,ei),vt.pixelStorei(G.UNPACK_SKIP_IMAGES,Br),xt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&G.generateMipmap(Ct),vt.unbindTexture()},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&Vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){U=0,D=0,q=null,vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var ze=(n,t,e)=>n<t?t:n>e?e:n,Mx=(n,t,e)=>n+(t-n)*e,we=(n,t,e,i)=>Mx(n,t,1-Math.exp(-e*i)),Ee=(n,t)=>n+Math.random()*(t-n),Nc=Math.PI*2;function Ce(n,t){let e=(t-n)%Nc;return e>Math.PI&&(e-=Nc),e<-Math.PI&&(e+=Nc),e}function Di(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function yt(n,t){let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return e<<16|i<<8|s}var ks=n=>{let t=Math.floor(n);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ie=n=>"$"+Math.round(n).toLocaleString("en-US");var Ds=Di(99),pe=(n,t)=>n+Ds()*(t-n),es=(n,t,e,i=1)=>`hsla(${n},${t}%,${e}%,${i})`;function je(n,t,e=!0,i=!0){let s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d");t(r,n);let a=new Tn(s);return i&&(a.colorSpace=Xe),a.wrapS=a.wrapT=e?Sn:ci,a.anisotropy=4,a}function kn(n,t,e,i,s,r,a,o,l=2){for(let h=0;h<e;h++)n.fillStyle=es(i,s,pe(r,a),o),n.fillRect(Ds()*t,Ds()*t,l*pe(.5,1.5),l*pe(.5,1.5))}var De={};function Ni(){return De.wood||(De.wood=je(256,(n,t)=>{let i=t/8;for(let s=0;s<8;s++){let r=-pe(0,120);for(;r<t;){let a=pe(90,190),o=pe(52,64),l=pe(26,33);n.fillStyle=es(l,55,o*.75),n.fillRect(r,s*i,a,i);for(let h=0;h<6;h++){n.strokeStyle=es(l,50,o*.62,.35),n.lineWidth=pe(.6,1.6),n.beginPath();let c=s*i+pe(3,i-3);n.moveTo(r,c),n.bezierCurveTo(r+a*.3,c+pe(-3,3),r+a*.7,c+pe(-3,3),r+a,c+pe(-2,2)),n.stroke()}Ds()<.3&&(n.fillStyle=es(l,50,o*.55,.5),n.beginPath(),n.ellipse(r+pe(10,a-10),s*i+i/2,pe(3,6),pe(1.5,3),0,0,7),n.fill()),n.fillStyle="rgba(60,30,10,.55)",n.fillRect(r,s*i,2,i),r+=a}n.fillStyle="rgba(60,30,10,.6)",n.fillRect(0,s*i,t,2),n.fillStyle="rgba(255,240,210,.12)",n.fillRect(0,s*i+2,t,2)}}),De.woodfine=je(128,(n,t)=>{n.fillStyle="#e9dccb",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){n.strokeStyle=`rgba(120,80,40,${pe(.06,.18)})`,n.lineWidth=pe(.5,2),n.beginPath();let i=pe(0,t);n.moveTo(0,i),n.bezierCurveTo(t*.3,i+pe(-4,4),t*.6,i+pe(-4,4),t,i),n.stroke()}}),De.carpet=je(128,(n,t)=>{n.fillStyle="#e4e4e4",n.fillRect(0,0,t,t),kn(n,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)n.fillStyle="rgba(0,0,0,.035)",n.fillRect(0,e,t,3)}),De.tile=je(128,(n,t)=>{n.fillStyle="#aab5bd",n.fillRect(0,0,t,t);let e=2,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++)n.fillStyle=es(200,10,pe(93,98)),n.fillRect(r*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(255,255,255,.6)",n.fillRect(r*i+3,s*i+3,i-8,3),n.fillStyle="rgba(0,0,0,.06)",n.fillRect(r*i+3,s*i+i-7,i-6,3)}),De.wallpaper=je(128,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)n.fillStyle="rgba(0,0,0,.045)",n.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let i=23;i<t;i+=32)n.fillStyle="rgba(0,0,0,.08)",n.beginPath(),n.moveTo(i,e),n.lineTo(i+4,e+6),n.lineTo(i,e+12),n.lineTo(i-4,e+6),n.fill();kn(n,t,500,0,0,60,100,.04,2)}),De.panel=je(128,(n,t)=>{n.fillStyle="#f0f0f0",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3,n.strokeRect(e+10,14,44,t-28),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2,n.strokeRect(e+13,17,44,t-28)}),De.brick=je(256,(n,t)=>{n.fillStyle="#d8c6b0",n.fillRect(0,0,t,t);let e=t/8,i=t/4;for(let s=0;s<8;s++)for(let r=-1;r<5;r++){let a=r*i+(s%2?i/2:0);n.fillStyle=es(pe(10,20),pe(35,50),pe(42,52)),n.fillRect(a+3,s*e+3,i-6,e-6),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(a+3,s*e+3,i-6,4)}kn(n,t,900,10,30,20,60,.15,2)}),De.plaster=je(128,(n,t)=>{n.fillStyle="#f4f2ef",n.fillRect(0,0,t,t),kn(n,t,1500,30,10,75,100,.12,2)}),De.plain=je(64,(n,t)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,t,t),kn(n,t,500,0,0,82,100,.25,2)}),De.grass=je(128,(n,t)=>{n.fillStyle="#6dbb4a",n.fillRect(0,0,t,t);for(let e=0;e<1400;e++){n.strokeStyle=es(pe(85,110),pe(45,65),pe(32,55),.7),n.lineWidth=1,n.beginPath();let i=Ds()*t,s=Ds()*t;n.moveTo(i,s),n.lineTo(i+pe(-2,2),s-pe(3,7)),n.stroke()}}),De.asphalt=je(128,(n,t)=>{n.fillStyle="#4a4f5c",n.fillRect(0,0,t,t),kn(n,t,2200,220,8,22,60,.4,1.6)}),De.concrete=je(128,(n,t)=>{n.fillStyle="#cfd2d6",n.fillRect(0,0,t,t),kn(n,t,1400,210,6,60,95,.2,2),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(0,0,t,2),n.fillRect(0,0,2,t)}),De.rug=je(256,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t),n.fillStyle="#9a9a9a",n.fillRect(10,10,t-20,t-20),n.fillStyle="#ffffff",n.fillRect(22,22,t-44,t-44),n.fillStyle="#c8c8c8",n.fillRect(30,30,t-60,t-60),n.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let i=46;i<t-46;i+=32)n.beginPath(),n.moveTo(i+16,e+2),n.lineTo(i+30,e+16),n.lineTo(i+16,e+30),n.lineTo(i+2,e+16),n.fill();n.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)n.fillRect(e,0,2,8),n.fillRect(e,t-8,2,8);kn(n,t,1500,0,0,50,100,.12,1.5)},!1),De.shadow=je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),De.glow=je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),De.beam=je(64,(n,t)=>{let e=n.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),De.patch=je(64,(n,t)=>{for(let e=0;e<12;e++){n.fillStyle=`rgba(255,255,255,${.06})`;let i=e*2.5;n.fillRect(i,i,t-2*i,t-2*i)}},!1,!1)),De}function lu(){let n=new fr(90,16,10),t=n.attributes.position,e=new Float32Array(t.count*3),i=new Ut,s=new Ut(7311320),r=new Ut(16038282),a=new Ut(16767400);for(let l=0;l<t.count;l++){let h=t.getY(l)/90;h>.15?i.copy(r).lerp(s,Math.min(1,(h-.15)/.6)):i.copy(a).lerp(r,Math.max(0,(h+.1)/.25)),e[l*3]=i.r,e[l*3+1]=i.g,e[l*3+2]=i.b}n.setAttribute("color",new re(e,3));let o=new bt(n,new Lt({vertexColors:!0,side:Je,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-10,o.frustumCulled=!1,o}function cu(){let n=new Ot,t=420,e=new Float32Array(t*3);for(let l=0;l<t;l++){let h=Math.random()*6.283,c=.08+Math.random()*.9,u=80;e.set([Math.cos(h)*Math.cos(c*1.5)*u,Math.sin(c*1.5)*u,Math.sin(h)*Math.cos(c*1.5)*u],l*3)}let i=new de;i.setAttribute("position",new re(e,3));let s=new Xi(i,new Pi({color:14673663,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,toneMapped:!1}));s.renderOrder=-9;let r=new Lt({map:Ni().glow,color:14674175,transparent:!0,depthWrite:!1,fog:!1,blending:Ye,toneMapped:!1}),a=new bt(new qi(16,16),r),o=new bt(new An(2.6,24),new Lt({color:15922431,fog:!1,toneMapped:!1,depthWrite:!1}));return a.position.set(-38,44,-52),o.position.copy(a.position),a.lookAt(0,0,0),o.lookAt(0,0,0),a.renderOrder=-8,o.renderOrder=-8,n.add(s,a,o),n.visible=!1,n}var Vo=class{constructor(t,e=220){this.n=e,this.box=7;let i=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*this.box,i[s*3+1]=Math.random()*1.9,i[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new de,this.geo.setAttribute("position",new re(i,3)),this.points=new Xi(this.geo,new Pi({map:Ni().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:Ye})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,i){this.t+=t;let s=this.geo.attributes.position.array,r=this.vel,a=this.box/2;for(let o=0;o<this.n;o++){let l=o*3;s[l]+=(r[l]+Math.sin(this.t*.5+o)*.02)*t,s[l+1]+=(r[l+1]+Math.cos(this.t*.4+o*1.3)*.015)*t,s[l+2]+=r[l+2]*t,s[l]<e-a?s[l]+=this.box:s[l]>e+a&&(s[l]-=this.box),s[l+2]<i-a?s[l+2]+=this.box:s[l+2]>i+a&&(s[l+2]-=this.box),s[l+1]<.05?s[l+1]=1.85:s[l+1]>1.88&&(s[l+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var Wo=class{constructor(t,e=900){this.n=e,this.box=13,this.L=null,this.pos=new Float32Array(e*6),this.speed=new Float32Array(e),this.geo=new de,this.geo.setAttribute("position",new re(this.pos,3)),this.lines=new ar(this.geo,new ws({color:11058406,transparent:!0,opacity:.5,depthWrite:!1,fog:!0})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,t.add(this.lines)}setLevel(t){if(this.L=t,this.lines.visible=!!t,t)for(let e=0;e<this.n;e++)this.spawn(e,0,0,!0)}outdoor(t,e){let i=this.L,s=Math.floor(t),r=Math.floor(e);return s<0||r<0||s>=i.W||r>=i.H?!0:!!i.outdoor[r*i.W+s]}spawn(t,e,i,s){let r=this.pos,a=t*6,o=this.box,l=0,h=0,c=!1;for(let f=0;f<4&&!c;f++)l=e+(Math.random()-.5)*2*o,h=i+(Math.random()-.5)*2*o,c=this.outdoor(l,h);let u=c?s?Math.random()*7:6+Math.random()*2:-50;this.speed[t]=11+Math.random()*5,r[a]=l,r[a+1]=u,r[a+2]=h,r[a+3]=l+.04,r[a+4]=u+.42,r[a+5]=h}update(t,e,i){if(!this.lines.visible)return;let s=this.pos,r=this.box;for(let a=0;a<this.n;a++){let o=a*6,l=this.speed[a]*t;s[o+1]-=l,s[o+4]-=l,s[o]-=l*.08,s[o+3]-=l*.08,(s[o+1]<0||Math.abs(s[o]-e)>r||Math.abs(s[o+2]-i)>r)&&this.spawn(a,e,i,s[o+1]<-10)}this.geo.attributes.position.needsUpdate=!0}};var Uc={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},Oc={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe",z:"teller",v:"case",m:"pedestal",a:"statue",s:"slots",j:"poker",C:"crate"},Sx=new Set(["h","f","x","a","C"]),hu={$:"cash",G:"gold",J:"jewel",A:"art"};function fu(n){let t=n.map,e=t.length,i=Math.max(...t.map(x=>x.length)),s=i*e,r=new Array(s);for(let x=0;x<e;x++)for(let S=0;S<i;S++)r[x*i+S]=t[x][S]||"g";let a=new Uint8Array(s),o=new Uint8Array(s),l=new Uint8Array(s),h=new Array(s),c=[],u=[],f={x:1,y:1},d=null,g=null,_=null,m=[],p=[];for(let x=0;x<e;x++)for(let S=0;S<i;S++){let w=x*i+S,v=r[w];if(v==="#"){o[w]=1;continue}if(v==="D"||v==="L"){o[w]=1,a[w]=0,m.push({x:S,y:x,type:v==="L"?"lock":"key"});continue}v==="K"&&p.push({x:S,y:x}),Oc[v]?(o[w]=Sx.has(v)?1:0,a[w]=0):v==="S"?(d={x:S,y:x},a[w]=0):a[w]=1,hu[v]&&c.push({type:hu[v],x:S,y:x}),v==="P"&&(f={x:S,y:x}),v==="V"&&(g={x:S,y:x}),v==="R"&&(_={x:S,y:x})}for(let x=0;x<s;x++){let S=r[x];if(S==="#")continue;if(Uc[S]){h[x]=Uc[S];continue}let w=x%i,v=x/i|0,M="wood";t:for(let k=1;k<6;k++)for(let P=-k;P<=k;P++)for(let I=-k;I<=k;I++){if(Math.max(Math.abs(I),Math.abs(P))!==k)continue;let O=w+I,C=v+P;if(O<0||C<0||O>=i||C>=e)continue;let E=Uc[r[C*i+O]];if(E){M=E;break t}}h[x]=M}for(let x=0;x<s;x++)l[x]=h[x]==="grass"||h[x]==="road"?1:0;let y={x:f.x+.5,z:f.y+.5};if(g){for(let x=g.y;x<=g.y+1;x++)for(let S=g.x-1;S<=g.x+1;S++)S>=0&&x>=0&&S<i&&x<e&&(a[x*i+S]=0);y={x:g.x+.5,z:g.y-.5}}else _&&(y={x:_.x+.5,z:_.y+.5});let b=new Uint8Array(s);for(let x=0;x<s;x++){let S=r[x];if(!Oc[S]||b[x])continue;let w=x%i,v=x/i|0,M=w,k=v,P=[x];for(b[x]=1;P.length;){let I=P.pop(),O=I%i,C=I/i|0;w=Math.min(w,O),M=Math.max(M,O),v=Math.min(v,C),k=Math.max(k,C);for(let[E,B]of[[1,0],[-1,0],[0,1],[0,-1]]){let U=O+E,D=C+B;if(U<0||D<0||U>=i||D>=e)continue;let q=D*i+U;!b[q]&&r[q]===S&&(b[q]=1,P.push(q))}}u.push({c:S,type:Oc[S],x0:w,y0:v,w:M-w+1,d:k-v+1})}return{W:i,H:e,ch:r,walk:a,opaque:o,outdoor:l,floor:h,loot:c,furn:u,start:f,safe:d,van:g,roof:_,exit:y,def:n,doors:m,keys:p}}var wx=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],$e=1,li=2,oe=4,fi=8,Tt=16,Re=32;var Tx=55,Dn=new Ut,Bt=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,i,s,r,a,o,l={}){let h=l.faces??Tx,c=s/2,u=r/2,f=a/2,d=e+u,g=l.ry||0,_=Math.cos(g),m=Math.sin(g);for(let p=0;p<6;p++){if(!(h&1<<p))continue;let y=l.fc&&l.fc[p]!=null?l.fc[p]:p===2&&l.top!=null?l.top:o;Dn.setHex(y);let[b,x]=wx[p],S=this.p.length/3,w=b[0]*_+b[2]*m,v=-b[0]*m+b[2]*_,M=l.us||this.us,k=Math.abs(w),P=Math.abs(v),I=0;for(let O of x){let C=O[0]*c,E=O[2]*f,B=t+C*_+E*m,U=d+O[1]*u,D=i-C*m+E*_;this.p.push(B,U,D),this.n.push(w,b[1],v),this.c.push(Dn.r,Dn.g,Dn.b),l.fit?(this.u.push(I===1||I===2?1:0,I>=2?1:0),I++):p===2||p===3?this.u.push(B/M,-D/M):k>P?this.u.push((w>0?-D:D)/M,U/M):this.u.push((v>0?B:-B)/M,U/M)}this.i.push(S,S+1,S+2,S,S+2,S+3)}return this}add(t,e,i=0,s=0,r=0){let a=t.index?t.toNonIndexed():t,o=a.attributes.position.array,l=a.attributes.normal.array;Dn.setHex(e);let h=this.p.length/3;for(let c=0;c<o.length;c+=3)this.p.push(o[c]+i,o[c+1]+s,o[c+2]+r),this.n.push(l[c],l[c+1],l[c+2]),this.c.push(Dn.r,Dn.g,Dn.b),this.u.push(o[c]/this.us,o[c+1]/this.us);for(let c=0;c<o.length/3;c++)this.i.push(h+c);return this}get empty(){return this.p.length===0}build(){let t=new de;t.setAttribute("position",new re(new Float32Array(this.p),3)),t.setAttribute("normal",new re(new Float32Array(this.n),3)),t.setAttribute("color",new re(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new re(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new re(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var Be=1.9,Ax=7227954,Fc=16183526,Ex=15985888,uu=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],zc=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],Ji=[5020230,6074452,4164168,7126874],du=()=>new Ae({vertexColors:!0,emissive:2760720});function pu(n,t){return mu(n,t,null,null).back}function mu(n,t,e,i){let{W:s,H:r,ch:a}=n,o=(y,b)=>y<0||b<0||y>=s||b>=r||a[b*s+y]==="#",l=i;if(!l){let y=0;l=[0,-1];let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let x of b){let S=0;if(x[1]){let w=x[1]<0?t.y0-1:t.y0+t.d;for(let v=t.x0;v<t.x0+t.w;v++)S+=o(v,w);S/=t.w}else{let w=x[0]<0?t.x0-1:t.x0+t.w;for(let v=t.y0;v<t.y0+t.d;v++)S+=o(w,v);S/=t.d}S>y+.01&&(y=S,l=x)}}let h=Math.atan2(-l[0],-l[1]),c=l[0]?t.d:t.w,u=l[0]?t.w:t.d,f=t.x0+t.w/2,d=t.y0+t.d/2,g=Math.cos(h),_=Math.sin(h),m=(y,b)=>[f+y*g+b*_,d-y*_+b*g];return{b:(y,b,x,S,w,v,M,k,P={})=>{let[I,O]=m(b,S);y.box(I,x,O,w,v,M,k,{...P,ry:(P.ry||0)+h})},W:c,D:u,rot:h,wpos:m,back:l}}function Cx(n,t,e,i,s){let r=(_,m)=>_+i()*(m-_),a=e.plain,o=e.woodfine,l=e.unlit,h;if(t.type==="couch"){let _=n.furn.find(m=>m.type==="tv");h=_&&_.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let _=n.furn.find(m=>m.type==="table");if(_){let m=_.x0+_.w/2-(t.x0+.5),p=_.y0+_.d/2-(t.y0+.5);h=Math.abs(m)>Math.abs(p)?[-Math.sign(m),0]:[0,-Math.sign(p)]}}else t.type==="desk"||t.type==="table"?h=[0,-1]:t.type==="slots"&&(h=t.y0<n.H/2?[0,-1]:[0,1]);let{b:c,W:u,D:f,wpos:d}=mu(n,t,e,h),g=(_,m,p,y,b,x)=>{let[S,w]=d(_,p);s.push({x:S,y:m,z:w,col:y,I:b,R:x})};switch(c(e.shadow,0,.012,0,u+.35,.001,f+.35,16777215,{faces:oe,fit:!0}),t.type){case"crate":{let _=[11041098,9398852,12159573,8219218];for(let m=0;m<u;m++)for(let p=0;p<f;p++){let y=-u/2+m+.5,b=-f/2+p+.5;for(let x=0;x<2;x++){let S=_[i()*_.length|0],w=x?r(.72,.86):.9,v=x?r(-.25,.25):0,M=x?r(-.06,.06):0,k=x*.86;c(o,y+M,k,b+M,w,.86,w,S,{ry:v,top:yt(S,1.12)}),c(o,y+M,k+.38,b+M,w+.02,.1,w+.02,yt(S,.72),{ry:v,faces:51});for(let P of[-1,1])for(let I of[-1,1])c(o,y+M+P*(w/2-.03),k,b+M+I*(w/2-.03),.07,.86,.07,yt(S,.6),{ry:v})}i()<.3&&c(a,y,.38,b+.46,.4,.12,.01,2237487,{faces:16})}break}case"shelf":{for(let p of[-1,1])c(o,p*(u/2-.04),0,0,.07,1.6,f-.12,8015411);c(o,0,1.6-.06,0,u-.02,.07,f-.08,8015411),c(o,0,0,-f/2+.09,u-.1,1.6,.03,yt(8015411,.7));for(let p=0;p<4;p++){let y=.06+p*.38;if(c(o,0,y,0,u-.1,.035,f-.18,8015411),p===3&&i()<.5){c(a,r(-.2,.2),y+.035,0,.12,.2,.12,4165530),c(a,0,y+.235,0,.18,.18,.18,Ji[1],{ry:.6});continue}let b=-u/2+.1;for(;b<u/2-.12;){let x=r(.04,.09),S=r(.2,.31),w=zc[i()*zc.length|0];if(i()<.08){b+=.12;continue}let v=i()<.1?.25:0;c(a,b+x/2,y+.035,.02,x,S,f-.32,w,{top:yt(w,1.25)}),S>.25&&c(a,b+x/2,y+.035+S*.7,.02,x+.004,.025,f-.31,15914122,{faces:Tt|Re}),b+=x+.006+v*.1}}break}case"fridge":{c(a,0,.04,0,u-.12,1.55,f-.14,15265522,{top:14278886}),c(a,0,0,.02,u-.16,.05,f-.2,3816006),c(a,0,1,f/2-.068,u-.12,.015,.01,11450560,{faces:Tt}),c(a,.3,.55,f/2-.04,.04,.35,.05,12108492),c(a,.3,1.1,f/2-.04,.04,.3,.05,12108492);for(let m=0;m<4;m++)c(a,r(-.3,.15),r(.6,1.45),f/2-.066,.06,.06,.01,zc[m],{faces:Tt});c(a,-.1,1.15,f/2-.066,.18,.22,.008,16777215,{faces:Tt,ry:.08});break}case"bed":{c(o,0,.08,0,u-.06,.22,f-.06,10118724);for(let[p,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,p*(u/2-.09),0,y*(f/2-.09),.1,.1,.1,yt(10118724,.7));c(o,0,0,-f/2+.06,u,1.05,.1,10118724),c(o,0,1.05,-f/2+.06,u+.06,.07,.14,yt(10118724,.85)),c(o,0,.45,-f/2+.115,u-.3,.45,.01,yt(10118724,1.15),{faces:Tt}),c(a,0,.3,.04,u-.14,.18,f-.22,16250094),c(a,0,.33,.42,u-.08,.2,f-.95,6066121,{top:yt(6066121,1.12)}),c(a,0,.36,-f/2+1.08,u-.07,.19,.22,15789284);for(let p of[-1,1])c(a,p*.45,.47,-f/2+.42,.78,.15,.4,16777215,{ry:p*.04});c(a,0,.535,f/2-.42,u-.04,.03,.42,15246141),c(a,0,.3,f/2-.205,u-.04,.26,.02,15246141,{faces:Tt});break}case"desk":{c(o,0,.7,-.45,u-.1,.06,.8,11565642,{top:yt(11565642,1.1)}),c(o,-u/2+.35,0,-.45,.5,.7,.72,yt(11565642,.9));for(let m=0;m<3;m++)c(a,-u/2+.35,.08+m*.21,-.08,.42,.16,.01,yt(11565642,.75),{faces:Tt}),c(a,-u/2+.35,.15+m*.21,-.07,.12,.025,.02,14267482);c(o,u/2-.08,0,-.45,.06,.7,.72,yt(11565642,.9)),c(a,.15,.76,-.7,.18,.04,.14,2763574),c(a,.15,.8,-.7,.05,.16,.05,2763574),c(a,.15,.92,-.7,.72,.44,.05,2237229),c(l,.15,.95,-.672,.64,.37,.01,6272255,{faces:Tt}),c(l,0,1.05,-.665,.25,.14,.008,12576511,{faces:Tt}),c(l,.32,1,-.665,.18,.08,.008,16765806,{faces:Tt}),c(a,.15,.76,-.38,.55,.025,.18,3421503),c(a,.55,.76,-.38,.07,.03,.1,3421503),c(a,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),c(a,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),c(a,.78,.76,-.5,.08,.1,.08,14185306),c(a,-.7,.76,-.7,.14,.03,.14,2763574),c(a,-.7,.79,-.7,.025,.32,.025,2763574),c(l,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),g(-.6,1,-.55,[1,.72,.42],.75,2.6),c(a,0,0,.35,.5,.05,.05,2763574),c(a,0,0,.35,.05,.05,.5,2763574),c(a,0,.05,.35,.05,.35,.05,5592671),c(a,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),c(a,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{c(a,0,0,.04,u-.02,.08,f-.2,3816006),c(a,0,.08,0,u-.02,.72,f-.12,15854818);let p=Math.max(1,Math.round(u/.5));for(let y=0;y<p;y++){let b=-u/2+(y+.5)*(u/p);c(a,b,.14,f/2-.055,u/p-.06,.6,.012,yt(15854818,.93),{faces:Tt}),c(a,b+(y%2?-1:1)*(u/p/2-.08),.62,f/2-.04,.025,.12,.025,11901530)}c(a,0,.8,.02,u,.06,f-.06,3881544,{top:4868440}),c(e.tile,0,.86,-f/2+.02,u,.48,.01,16777215,{faces:Tt,us:.5}),c(a,0,1.36,-f/2+.2,u-.02,.48,.36,15854818);for(let y=0;y<p;y++){let b=-u/2+(y+.5)*(u/p);c(a,b,1.4,-f/2+.385,u/p-.06,.4,.012,yt(15854818,.93),{faces:Tt}),c(a,b,1.43,-f/2+.4,.12,.025,.025,11901530)}u>=2?(c(a,.45,.855,.05,.6,.012,.42,9345186,{faces:oe}),c(a,.45,.86,-.22,.04,.22,.04,12831958),c(a,.45,1.05,-.12,.04,.04,.2,12831958),c(o,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),c(a,-.35,.89,.05,.12,.06,.06,14185306)):(c(a,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),c(a,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{c(a,0,0,.04,u-.02,.08,f-.2,3816006),c(a,0,.08,0,u-.04,.74,f-.12,14081250),c(a,0,.18,f/2-.055,u-.2,.42,.012,2829364,{faces:Tt}),c(l,0,.26,f/2-.05,u-.36,.22,.01,6961698,{faces:Tt}),c(a,0,.56,f/2-.04,u-.3,.03,.03,12108492);for(let m=0;m<4;m++)c(a,-.3+m*.2,.7,f/2-.05,.05,.05,.03,2829364);c(a,0,.82,.02,u-.02,.04,f-.06,2302763);for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(a,m*.2,.86,p*.17,.2,.012,.2,4868693);c(a,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),c(a,0,1.42,-f/2+.24,u-.1,.18,.44,12831958),c(a,0,1.6,-f/2+.12,.3,.3,.22,12831958),c(e.tile,0,.86,-f/2+.02,u,.56,.01,16777215,{faces:Tt,us:.5});break}case"couch":{for(let x of[-1,1])for(let S of[-1,1])c(o,x*(u/2-.2),0,S*(f/2-.15),.07,.1,.07,5913126);c(a,0,.1,0,u-.08,.26,f-.12,yt(3115662,.85)),c(a,0,.1,-f/2+.17,u-.08,.66,.22,3115662);for(let x of[-1,1])c(a,x*(u/2-.13),.1,.02,.22,.44,f-.1,3115662),c(a,x*(u/2-.13),.54,.02,.26,.06,f-.06,3842212);let y=3,b=(u-.6)/y;for(let x=0;x<y;x++){let S=-u/2+.3+(x+.5)*b;c(a,S,.36,.08,b-.04,.13,f-.4,3842212,{top:yt(3842212,1.1)}),c(a,S,.42,-f/2+.34,b-.06,.38,.14,3842212,{ry:0})}c(a,-u/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),c(a,u/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),c(a,u/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),c(a,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let m of[-1,1])c(o,m*(u/2-.15),0,0,.06,.12,.06,2763574);c(o,0,.12,-.05,u-.1,.38,f-.45,7226670,{top:yt(7226670,1.15)});for(let m=0;m<3;m++)c(o,-u/2+.05+(m+.5)*((u-.1)/3),.16,f/2-.27,(u-.1)/3-.05,.3,.012,yt(7226670,1.2),{faces:Tt});c(a,0,.62,-.2,u-.4,.92,.07,1447710),c(l,0,.67,-.163,u-.52,.8,.005,2903966,{faces:Tt}),c(l,-.3,.75,-.159,.9,.35,.004,6269160,{faces:Tt}),c(l,.5,.85,-.158,.4,.22,.004,16762967,{faces:Tt}),c(l,.25,.73,-.158,.3,.12,.004,8049530,{faces:Tt}),c(a,0,.5,-.02,u-1,.07,.1,2237227),c(a,u/2-.35,.5,-.05,.16,.22,.16,13133631);for(let m=0;m<4;m++)c(a,u/2-.35+r(-.05,.05),.68+m*.05,-.05,.22,.05,.08,Ji[m%4],{ry:m*.8});c(a,-u/2+.4,.5,-.05,.3,.06,.2,2763574),g(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{c(o,0,.66,0,u-.2,.07,f-.2,13867874,{top:yt(13867874,1.08)});for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,m*(u/2-.25),0,p*(f/2-.25),.08,.66,.08,yt(13867874,.8));c(a,0,.73,0,.5,.006,f-.25,12999242),c(a,0,.736,0,.36,.06,.36,16777215,{top:15262422}),c(a,-.06,.79,.02,.12,.12,.12,15230287),c(a,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),c(a,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[m,p]of[[-.45,-.45],[.45,.45]])c(a,m,.735,p,.28,.012,.28,16777215),c(a,m+.2,.735,p,.03,.01,.2,12831958);break}case"chair":{for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,m*.17,0,p*.17,.05,.42,.05,yt(12157268,.8));c(o,0,.42,0,.44,.05,.44,12157268),c(a,0,.47,0,.38,.03,.38,12999242),c(o,0,.47,-.19,.42,.52,.05,12157268),c(o,0,.82,-.19,.3,.1,.06,yt(12157268,1.1));break}case"tub":{c(a,0,0,0,u-.12,.58,f-.12,16054007,{top:16777215}),c(a,0,.5,0,u-.34,.06,f-.34,9425898,{faces:oe}),c(a,0,.58,-f/2+.15,.05,.2,.05,12831958),c(a,0,.74,-f/2+.22,.05,.04,.18,12831958),c(a,.3,.56,.2,.12,.1,.14,16765503),c(a,.3,.64,.24,.08,.08,.08,16765503),c(a,.3,.66,.3,.04,.03,.05,16747069),c(a,0,1.75,f/2-.08,u-.1,.025,.025,12831958),c(a,-u/2+.35,.6,f/2-.08,.6,1.15,.03,9423064);for(let _=0;_<3;_++)c(a,-u/2+.15+_*.2,.6,f/2-.06,.04,1.15,.035,16183526);break}case"slots":{let y=[16732026,5037311,16766810,8191898];for(let b=0;b<u;b++){let x=-u/2+b+.5,S=[11740730,2771635,6957747,2067034][(b+t.x0)%4],w=yt(S,.62),v=y[(b+t.y0)%4];c(a,x,0,0,.82,.12,.74,1512991),c(a,x,.02,.371,.8,.07,.008,14725194,{faces:Tt}),c(a,x,.12,-.02,.76,.58,.66,w,{top:S}),c(a,x,.3,.315,.62,.3,.012,S,{faces:Tt}),c(a,x,.34,.32,.5,.2,.008,yt(S,1.3),{faces:Tt}),c(a,x,.17,.33,.36,.09,.09,13226716),c(a,x,.21,.37,.28,.04,.03,855314,{faces:Tt|oe}),c(a,x,.7,.1,.78,.07,.48,2368302,{top:3026234});for(let M=0;M<3;M++)c(l,x-.2+M*.2,.77,.25,.13,.035,.09,[16726862,16765503,4054148][M]);c(a,x,.77,-.09,.76,.64,.52,S);for(let M of[-1,1])c(a,x+M*.385,.12,.3,.035,1.3,.05,13226716),c(a,x+M*.385,.12,-.34,.03,1.3,.04,yt(S,.5));c(a,x,.84,.172,.68,.48,.012,14725194,{faces:Tt}),c(a,x,.87,.18,.6,.42,.01,723728,{faces:Tt});for(let M=0;M<3;M++)c(e.slotReel,x-.19+M*.19,.89,.187,.17,.38,.004,[16777215,16774368,16777215][M],{faces:Tt,fit:!0});c(l,x,1.075,.19,.58,.014,.004,16724032,{faces:Tt}),c(a,x,1.41,-.06,.78,.26,.5,1512991),c(e.slotSign,x,1.43,.192,.74,.22,.004,16777215,{faces:Tt,fit:!0}),c(a,x,1.67,-.06,.46,.05,.3,13226716),c(l,x,1.72,-.06,.2,.13,.2,v),c(a,x+.43,.82,.02,.06,.14,.12,13226716),c(a,x+.45,.86,.02,.035,.42,.035,13226716),c(a,x+.45,1.28,.02,.1,.1,.1,15216702,{top:16738932})}g(0,1.5,.7,[1,.5,.8],.9,3.4);break}case"poker":{let p=[15222847,3111656,15911244,2237487,16183526];c(o,0,0,0,.6,.68,.6,5909018),c(o,0,.68,0,u-.1,.08,f-.1,5909018,{top:yt(5909018,1.2)}),c(a,0,.76,0,u-.34,.012,f-.34,2062922,{faces:oe}),c(a,0,.775,0,u-.9,.004,.02,14267482,{faces:oe});for(let y=0;y<6;y++){let b=y/6*6.28,x=Math.min(u,f)*.32;c(a,Math.cos(b)*x,.78,Math.sin(b)*x,.08,.03+y%3*.03,.08,p[y%5])}for(let y=0;y<4;y++)c(a,-.2+y*.13,.775,-.05,.1,.006,.14,16777215,{ry:(y-1.5)*.2});for(let[y,b]of[[-1,0],[1,0],[0,-1],[0,1]])c(o,y*(u/2+.3),0,b*(f/2+.3),.36,.48,.36,11745617,{top:13650522});g(0,1.4,0,[1,.85,.55],.9,2.6);break}case"pedestal":{let m=(t.x0*3+t.y0)%4,p=15250234;c(a,0,0,0,.64,.12,.64,yt(15525594,.82),{top:yt(15525594,.95)}),c(a,0,.12,0,.46,.68,.46,15525594);for(let[b,x,S,w]of[[0,.232,.06,.01],[.12,.232,.04,.01],[-.12,.232,.04,.01],[.232,0,.01,.06],[-.232,0,.01,.06],[0,-.232,.06,.01]])c(a,b,.16,x,S,.58,w,yt(15525594,.86),{faces:63&~oe&~fi});c(a,0,.8,0,.6,.08,.6,yt(15525594,.92)),c(a,0,.88,0,.36,.06,.36,10100538,{top:12068938}),c(a,0,.42,.236,.22,.08,.008,p,{faces:Tt});let y=.94;if(m===0){c(a,0,y,0,.12,.05,.12,p),c(a,0,y+.05,0,.2,.14,.2,p,{top:yt(p,1.2)}),c(a,0,y+.19,0,.1,.1,.1,p),c(a,0,y+.29,0,.16,.04,.16,yt(p,1.15));for(let b of[-1,1])c(a,b*.12,y+.14,0,.03,.14,.03,p);c(a,0,y+.1,.101,.16,.03,.005,2058874,{faces:Tt})}else if(m===1){c(a,0,y,0,.24,.08,.24,p,{faces:63&~oe});for(let[b,x]of[[-.1,-.1],[.1,-.1],[-.1,.1],[.1,.1],[0,.11],[0,-.11],[.11,0],[-.11,0]])c(a,b,y+.08,x,.04,.07,.04,p);c(l,0,y+.03,.122,.05,.04,.005,16726890,{faces:Tt}),c(l,.122,y+.03,0,.005,.04,.05,3920895,{faces:$e}),c(l,-.122,y+.03,0,.005,.04,.05,3932042,{faces:li})}else if(m===2)c(a,0,y,0,.12,.04,.12,p),c(a,0,y+.04,0,.16,.06,.16,4156120),c(a,0,y+.1,0,.2,.1,.2,4156120,{top:5932784}),c(a,0,y+.2,0,.14,.08,.14,4156120),c(a,0,y+.28,0,.07,.04,.07,p),c(a,0,y+.135,0,.21,.025,.21,p,{faces:63&~oe&~fi});else{c(a,0,y,0,.14,.04,.1,2763316),c(a,0,y+.04,0,.22,.28,.06,p,{top:yt(p,1.2)}),c(a,0,y+.32,0,.26,.06,.08,2771635);for(let b of[-1,1])c(a,b*.05,y+.2,.031,.05,.03,.005,1839920,{faces:Tt});c(a,0,y+.1,.031,.04,.06,.005,yt(p,.8),{faces:Tt})}g(0,1.6,0,[1,.85,.6],.8,2);break}case"statue":{let m=yt(14999250,.78),p=14725194;c(a,0,0,0,.84,.16,.84,m,{top:yt(14999250,.9)}),c(a,0,.16,0,.68,.3,.68,14999250,{top:yt(14999250,1.04)}),c(a,0,.24,.341,.34,.1,.008,p,{faces:Tt}),c(a,0,.46,0,.56,.06,.56,m),c(a,0,.52,0,.36,.42,.3,14999250,{top:m}),c(a,0,.9,0,.42,.42,.24,14999250),c(a,.06,.9,.125,.3,.42,.01,yt(14999250,.92),{faces:Tt,ry:.15}),c(a,-.27,.92,.04,.12,.38,.13,14999250,{ry:.25}),c(a,.27,1.18,0,.12,.42,.13,14999250),c(a,.27,1.6,0,.08,.2,.08,p),c(l,.27,1.8,0,.12,.14,.12,16753210),c(l,.27,1.9,0,.07,.08,.07,16769162),c(a,0,1.32,0,.24,.28,.24,14999250),c(a,0,1.56,-.01,.27,.08,.27,m),c(a,0,1.52,0,.29,.04,.29,6987850,{faces:63&~oe}),g(.27,1.85,0,[1,.7,.35],.5,1.8);break}case"case":{c(o,0,0,0,u-.1,.78,f-.1,2759202,{top:yt(2759202,1.3)}),c(a,0,.1,f/2-.06,u-.2,.55,.01,yt(2759202,1.4),{faces:Tt}),c(a,0,.78,0,u-.06,.04,f-.06,14267482),c(l,0,.82,0,u-.2,.012,f-.2,3811930,{faces:oe});for(let[p,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(a,p*(u/2-.06),.82,y*(f/2-.06),.04,.46,.04,14267482);c(a,0,1.28,0,u-.06,.03,f-.06,14267482),g(0,1.05,0,[.75,.85,1],.9,2.4);break}case"wardrobe":{let m=yt(9067068,1.18),p=yt(9067068,.7);c(o,0,0,-.06,.92,1.72,.74,9067068,{top:p}),c(o,0,1.72,-.06,.98,.06,.8,p),c(o,0,0,-.06,.96,.08,.78,p);for(let y of[-1,1]){c(o,y*.225,.12,.315,.42,1.54,.02,m,{faces:Tt|$e|li|oe});for(let b=0;b<9;b++)c(a,y*.225,.78+b*.09,.327,.34,.025,.01,p,{faces:Tt|oe});c(o,y*.225,.2,.327,.34,.5,.008,yt(m,1.08),{faces:Tt}),c(a,y*.04,.8,.34,.03,.12,.03,14267482)}c(a,0,.12,.33,.012,1.54,.02,p,{faces:Tt});break}case"teller":{c(o,0,0,.05,u,.78,f-.3,5913130,{top:yt(5913130,1.1)}),c(a,0,.08,f/2-.1,u-.02,.78-.16,.01,yt(5913130,1.25),{faces:Tt}),c(a,0,.78,.05,u+.02,.05,f-.2,15262422);let y=Math.max(1,Math.round(u));for(let b=0;b<=y;b++)c(a,-u/2+b*u/y,.78+.05,.05,.04,.82,.04,14267482);c(a,0,.78+.87,.05,u,.04,.06,14267482);for(let b=0;b<y;b++){let x=-u/2+(b+.5)*(u/y);c(a,x,.78+.05,.05,.3,.06,.05,2763574),b%2===0?(c(a,x+.15,.78+.05,-.2,.3,.22,.04,2237229),c(l,x+.15,.78+.09,-.177,.26,.15,.005,6272255,{faces:Tt})):c(a,x-.1,.78+.05,-.15,.22,.04,.16,5221978,{top:9429130})}break}case"plant":{if(c(a,0,0,0,.34,.3,.34,13133631,{top:4863014}),c(a,0,.26,0,.42,.08,.42,yt(13133631,1.12)),c(a,0,.1,0,.36,.04,.36,yt(13133631,.82),{faces:$e|li|Tt|Re}),(t.x0+t.y0)%2){c(o,0,.34,0,.07,.62,.07,8018486),c(o,.02,.6,0,.06,.36,.06,6965802,{ry:.3});for(let m=0;m<7;m++){let p=m*.9;c(a,Math.cos(p)*.2,1.02-m%2*.06,Math.sin(p)*.2,.42,.04,.12,Ji[m%4],{ry:-p})}c(a,0,1.04,0,.16,.1,.16,Ji[2])}else{[[0,.42,0,.42],[.08,.66,.05,.34],[-.07,.62,-.06,.32],[0,.86,0,.26]].forEach(([p,y,b,x],S)=>c(a,p,y,b,x,x,x,Ji[S%4],{ry:S*.5,top:yt(Ji[S%4],1.15)}));for(let p=0;p<6;p++){let y=p*1.05;c(a,Math.cos(y)*.22,.5+p%3*.14,Math.sin(y)*.22,.12,.12,.12,Ji[(p+1)%4],{ry:y})}}break}case"night":{c(o,0,0,0,u-.38,.5,f-.4,10118724,{top:yt(10118724,1.12)}),c(o,0,.28,f/2-.195,u-.48,.16,.01,yt(10118724,1.2),{faces:Tt}),c(a,0,.35,f/2-.18,.06,.03,.02,14267482),c(a,0,.5,-.05,.12,.03,.12,3816006),c(a,0,.53,-.05,.05,.2,.05,14267482),c(l,0,.72,-.05,.26,.18,.26,16767392),c(a,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),g(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{c(a,0,0,.04,.3,.06,.38,15001834),c(a,0,.06,.05,.32,.26,.42,16185336),c(a,0,.32,.07,.4,.05,.5,16777215),c(a,0,.365,.08,.3,.005,.36,10471894,{faces:oe}),c(a,0,.37,-f/2+.33,.38,.32,.04,16777215),c(a,0,.3,-f/2+.17,.44,.48,.2,16185336,{top:16777215}),c(a,0,.78,-f/2+.17,.48,.04,.24,16777215),c(a,.16,.66,-f/2+.28,.08,.025,.04,12831958),c(a,-.36,.5,-f/2+.08,.12,.12,.1,12831958),c(a,-.36,.44,-f/2+.12,.1,.12,.1,16777215);break}case"sink":{c(o,0,0,0,u-.18,.78,f-.44,9067066,{top:yt(9067066,1.1)});for(let m of[-1,1])c(o,m*(u-.24)/4,.08,f/2-.215,(u-.3)/2-.04,.6,.012,yt(9067066,1.18),{faces:Tt}),c(a,m*.05,.5,f/2-.205,.03,.12,.02,14267482);c(a,0,.78,0,u-.12,.05,f-.36,16052714),c(a,0,.8,.02,.44,.07,.32,16777215),c(a,0,.865,.03,.34,.006,.22,10471894,{faces:oe}),c(a,0,.83,-f/2+.26,.06,.2,.06,13226716),c(a,0,1,-f/2+.31,.04,.04,.12,13226716),c(a,-.08,.95,-f/2+.26,.05,.03,.05,16738922),c(a,.08,.95,-f/2+.26,.05,.03,.05,6990079),c(a,.3,.83,-f/2+.3,.08,.14,.08,5227432),c(a,.3,.97,-f/2+.3,.03,.04,.03,16777215),c(a,-.3,.83,-f/2+.3,.08,.12,.08,16765503),c(a,-.29,.95,-f/2+.3,.015,.1,.015,3832552),c(o,0,1.02,-f/2+.03,.66,.76,.03,6965802),c(l,0,1.06,-f/2+.05,.56,.66,.005,12179172,{faces:Tt}),c(l,-.12,1.3,-f/2+.054,.12,.3,.004,15135994,{faces:Tt}),c(l,-.2,1.2,-f/2+.054,.05,.2,.004,15135994,{faces:Tt});break}}}function Rx(n,t){let{W:e,H:i}=n,s=(f,d)=>f<0||d<0||f>=e||d>=i?-1:Math.floor(d)*e+Math.floor(f),r=(f,d)=>{let g=s(f,d);return g<0||n.opaque[g]===1},a=(f,d,g,_)=>{let m=g-f,p=_-d,y=Math.ceil(Math.hypot(m,p)/.15);for(let b=1;b<y;b++){let x=b/y;if(r(f+m*x,d+p*x))return!1}return!0},o=[-.55,.7,.45],l=Math.hypot(...o);o[0]/=l,o[1]/=l,o[2]/=l;let h=[0,0,0],c=(f,d)=>{let g=s(f,d);return g<0?0:n.ch[g]==="#"?1:!n.walk[g]&&!n.outdoor[g]?.55:0};function u(f,d,g,_,m,p,y){let b=f+_*.14,x=g+p*.14,S=s(b,x),w=S>=0&&!n.outdoor[S]&&n.ch[S]!=="#",v,M,k;if(w){let I=.85+.15*m;v=.2*I,M=.19*I,k=.27*I,n.def.night&&(v*=.6,M*=.65,k*=.85);for(let O of t){let C=O.x-f,E=O.y-d,B=O.z-g,U=Math.hypot(C,E,B);if(U>O.R||!a(O.x,O.z,b,x))continue;let D=1-U/O.R,q=O.I*D*D,V=y?.7:Math.max(0,(_*C+m*E+p*B)/(U||1))*.75+.25;v+=O.col[0]*q*V,M+=O.col[1]*q*V,k+=O.col[2]*q*V}}else{let I=Math.max(0,_*o[0]+m*o[1]+p*o[2]),O=.55+.45*m;if(v=.5*O+.95*I,M=.5*O+.8*I,k=.62*O+.62*I,n.def.night){v*=.14,M*=.18,k*=.38;for(let C of t){if(!C.street)continue;let E=C.x-f,B=C.y-d,U=C.z-g,D=Math.hypot(E,B,U);if(D>C.R)continue;let q=1-D/C.R,V=C.I*q*q,Z=Math.max(0,(_*E+m*B+p*U)/(D||1))*.7+.3;v+=C.col[0]*V*Z,M+=C.col[1]*V*Z,k+=C.col[2]*V*Z}}}let P=1;if(d<.06||w&&d>Be-.08){let I=0;for(let[O,C]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])I+=c(b+O,x+C);P=1-.17*I-(d<.06?.06:.1)}else d<.3&&w&&(P=.9+d*.3);return h[0]=v*P,h[1]=M*P,h[2]=k*P,h}return u}function Px(n,t){let e=n.p,i=n.n,s=n.c;for(let r=0;r<e.length;r+=3){let a=t(e[r],e[r+1],e[r+2],i[r],i[r+1],i[r+2],!1);s[r]*=a[0],s[r+1]*=a[1],s[r+2]*=a[2]}}var Bc=null;function Lx(){if(Bc)return Bc;let n=(i,s,r)=>{let a=document.createElement("canvas");a.width=i,a.height=s,r(a.getContext("2d"),i,s);let o=new Tn(a);return o.colorSpace=Xe,o},t=n(64,128,(i,s,r)=>{let a=i.createLinearGradient(0,0,0,r);a.addColorStop(0,"#b9b2a2"),a.addColorStop(.2,"#fffaf0"),a.addColorStop(.8,"#fffaf0"),a.addColorStop(1,"#b9b2a2"),i.fillStyle=a,i.fillRect(0,0,s,r),i.fillStyle="#2f9a3a",i.fillRect(30,-2,4,14),i.fillStyle="#e8303e",i.beginPath(),i.arc(24,14,9,0,6.3),i.arc(40,16,9,0,6.3),i.fill(),i.font="bold 54px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="#1c1330",i.strokeText("7",32,66),i.fillStyle="#e8303e",i.fillText("7",32,66),i.fillStyle="#1c1330",i.fillRect(8,104,48,22),i.fillStyle="#ffd23f",i.font="bold 15px Arial Black, Arial, sans-serif",i.fillText("BAR",32,116)}),e=n(256,72,(i,s,r)=>{let a=i.createLinearGradient(0,0,0,r);a.addColorStop(0,"#ff5fa2"),a.addColorStop(1,"#a8207a"),i.fillStyle="#1c1330",i.fillRect(0,0,s,r),i.fillStyle=a,i.fillRect(6,6,s-12,r-12);for(let l=12;l<s-6;l+=16)for(let h of[11,r-11])i.fillStyle="#fff3b0",i.beginPath(),i.arc(l,h,3.4,0,6.3),i.fill();i.font="bold 38px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=7,i.strokeStyle="#1c1330",i.strokeText("LUCKY 7",s/2,r/2+2);let o=i.createLinearGradient(0,18,0,54);o.addColorStop(0,"#fff6c0"),o.addColorStop(1,"#ffb52e"),i.fillStyle=o,i.fillText("LUCKY 7",s/2,r/2+2)});return Bc={reel:t,sign:e}}function Ix(){let n=document.createElement("canvas");n.width=1024,n.height=128;let t=n.getContext("2d"),e=Di(77),i=n.width,s=n.height,r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#0d1430"),r.addColorStop(.55,"#24325e"),r.addColorStop(1,"#3a3f66"),t.fillStyle=r,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,0.8)";for(let l=0;l<70;l++)t.fillRect(e()*i,e()*s*.45,1.5,1.5);let a=l=>{l(0),l(-i),l(i)};t.fillStyle="#1b2446",t.beginPath(),t.moveTo(0,s);for(let l=0;l<=i;l+=16)t.lineTo(l,62+Math.sin(l/i*Math.PI*6)*10+Math.sin(l/i*Math.PI*14)*5);t.lineTo(i,s),t.fill();for(let l=0;l<14;l++){let h=e()*i,c=70+e()*14;a(u=>{t.fillStyle="#ffd38a",t.fillRect(h+u,c,3,2)})}t.fillStyle="#0c1226";for(let l=0;l<90;l++){let h=e()*i,c=14+e()*22,u=8+e()*10;a(f=>{t.beginPath(),t.moveTo(h+f-u,s-18),t.lineTo(h+f,s-18-c),t.lineTo(h+f+u,s-18),t.fill()})}t.fillRect(0,s-20,i,20),t.strokeStyle="#05080f",t.lineWidth=3;for(let l=40;l<i;l+=128)t.beginPath(),t.moveTo(l,s),t.lineTo(l,26),t.stroke(),t.fillStyle="#05080f",t.fillRect(l-9,30,18,3);t.lineWidth=1,t.beginPath();for(let l=40;l<i+128;l+=128)t.moveTo(l,31),t.quadraticCurveTo(l+64,40,l+128,31);t.stroke();let o=new Tn(n);return o.colorSpace=Xe,o.wrapS=Sn,o.wrapT=ci,o}function gu(n){let t=Ni(),e={wood:new Bt(2),carpet:new Bt(1),tile:new Bt(1),wallpaper:new Bt(1),panel:new Bt(1),brick:new Bt(.9),plaster:new Bt(2),grass:new Bt(3),asphalt:new Bt(3),concrete:new Bt(1),plain:new Bt(1),woodfine:new Bt(.8),rug:new Bt(1),unlit:new Bt(1),shadow:new Bt(1),patch:new Bt(1),trainN:new Bt(8),trainS:new Bt(8),slotReel:new Bt(1),slotSign:new Bt(1)},i=!!n.def.train,{W:s,H:r,ch:a,floor:o}=n,l=Di(1337),h=(C,E)=>C+l()*(E-C),c=(C,E)=>C>=0&&E>=0&&C<s&&E<r&&a[E*s+C]==="#",u=(C,E)=>C<0||E<0||C>=s||E>=r||n.outdoor[E*s+C]===1,f=n.van?n.van.y-1:n.def.roadTop??r,d=!!n.def.night,g=n.def.lampScale||1,_=[],m=[],p=[],y=new Int16Array(s*r).fill(-1),b=(C,E)=>!c(C,E)&&(c(C-1,E)&&c(C+1,E)||c(C,E-1)&&c(C,E+1)),x=[];for(let C=0;C<s*r;C++){let E=C%s,B=C/s|0;if(y[C]>=0||a[C]==="#"||n.outdoor[C]||b(E,B))continue;let U=x.length,D=[],q=[C];for(y[C]=U;q.length;){let Z=q.pop(),j=Z%s,H=Z/s|0;D.push(Z);for(let[W,L]of[[1,0],[-1,0],[0,1],[0,-1]]){let et=j+W,ot=H+L,ct=ot*s+et;et<0||ot<0||et>=s||ot>=r||y[ct]>=0||a[ct]==="#"||n.outdoor[ct]||b(et,ot)||(y[ct]=U,q.push(ct))}}let V=n.def.palette||uu;x.push({id:U,cells:D,pal:V[U%V.length]})}for(let C=0;C<s*r;C++)if(y[C]<0&&b(C%s,C/s|0)){let E=C%s,B=C/s|0;for(let[U,D]of[[0,1],[1,0],[0,-1],[-1,0]]){let q=(B+D)*s+E+U;if(y[q]>=0){y[C]=y[q];break}}}let S=(C,E)=>{let B=C>=0&&E>=0&&C<s&&E<r?y[E*s+C]:-1;return B>=0?x[B].pal:uu[0]};for(let C of x){let E=1e9,B=-1,U=1e9,D=-1;for(let H of C.cells){let W=H%s,L=H/s|0;E=Math.min(E,W),B=Math.max(B,W),U=Math.min(U,L),D=Math.max(D,L)}let q=B-E+1,V=D-U+1,Z=Math.max(q,V),j=Math.max(1,Math.round(Z/6));for(let H=0;H<j;H++){let W=(H+.5)/j,L=q>=V?E+q*W:E+q/2,et=q>=V?U+V/2:U+V*W;_.push({x:L,y:Be-.4,z:et,col:d?[1,.7,.5]:[1,.74,.45],I:1.75*g,R:5.6,pendant:!0})}}let w=40,v=(C,E,B,U,D,q)=>C.box((E+U)/2,-.06,(B+D)/2,U-E,.05,D-B,q,{faces:oe});if(i){v(e.grass,-w,-w,s+w,.6,6978154),v(e.grass,-w,r-.6,s+w,r+w,6978154),v(e.concrete,-w,.6,s+w,r-.6,9077880);for(let C=-w;C<s+w;C+=.7)e.woodfine.box(C,-.02,r/2,.22,.05,r-2.4,5914412,{faces:oe|$e|li});for(let C of[r/2-1.6,r/2+1.6])e.plain.box(s/2,0,C,s+w*2,.08,.1,12107980,{top:15265526})}if(!i){v(e.grass,-w,-w,0,f,16777215),v(e.grass,s,-w,s+w,f,16777215),v(e.grass,0,-w,s,0,16777215),v(e.concrete,-w,f,0,f+1,16777215),v(e.concrete,s,f,s+w,f+1,16777215),v(e.asphalt,-w,f+1,0,r,16777215),v(e.asphalt,s,f+1,s+w,r,16777215),v(e.concrete,-w,r,s+w,r+1.2,16777215),v(e.grass,-w,r+1.2,s+w,r+w,16777215);for(let U=-w;U<s+w;U+=2.2)e.plain.box(U+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:oe});let C=(U,D)=>{let q=.8+l()*.6,V=l()*1.5;e.woodfine.box(U,0,D,.28*q,.9*q,.28*q,8016438,{ry:V}),e.plain.box(U,.7*q,D,1.4*q,1*q,1.4*q,Ji[l()*4|0],{ry:V}),e.plain.box(U+.2*q,1.5*q,D-.1*q,1*q,.8*q,1*q,Ji[l()*4|0],{ry:V+.5}),e.plain.box(U-.1*q,2.15*q,D+.1*q,.6*q,.5*q,.6*q,Ji[l()*4|0],{ry:V+.9})};for(let U=-w+2;U<f-.5;U+=2.6)for(let D=-w+2;D<s+w-2;D+=2.6)D>-1.5&&D<s+1&&U>-1.5||l()<.55&&C(D+(l()-.5)*1.4,U+(l()-.5)*1.4);let E=[15246478,10274761,15652762,12167636,11064480];for(let U=-w+3,D=0;U<s+w;U+=7,D++){let q=r+4.5+D%2*.8,V=E[D%5];e.plain.box(U,0,q,5,2.4,4,V),e.plain.box(U,2.4,q,5.5,.3,4.5,5914712),e.plain.box(U,2.7,q,4.2,.4,3.4,6965862);for(let Z of[-1.5,1.5])e.unlit.box(U+Z,.95,q-2.01,.8,.75,.02,16765834,{faces:Re}),e.plain.box(U+Z,.9,q-2.03,.95,.06,.06,16777215);e.woodfine.box(U,0,q-2.01,.75,1.35,.03,8014643,{faces:Re}),l()<.8&&C(U+3.3,q-1.5)}let B=(U,D,q,V)=>{let Z=Math.hypot(q-U,V-D),j=Math.round(Z/.45),H=D===V;e.plain.box((U+q)/2,.28,(D+V)/2,H?Z:.05,.07,H?.05:Z,16183526),e.plain.box((U+q)/2,.58,(D+V)/2,H?Z:.05,.07,H?.05:Z,16183526);for(let W=0;W<=j;W++){let L=W/j;e.plain.box(U+(q-U)*L,0,D+(V-D)*L,.1,.8,.1,16777215)}};B(-.05,-.05,s+.05,-.05),B(-.05,-.05,-.05,f-.05),B(s+.05,-.05,s+.05,f-.05);for(let U of[-.25,s+.25])for(let D=f;D<r;D+=.5)e.plain.box(U,0,D+.25,.3,.7,.5,(D*2|0)%2?15222847:16777215)}let M=(C,E,B,U,D,q,V,Z,j=2,H={})=>{let W=U>0?$e:U<0?li:D>0?Tt:Re,L=E+.5+U*.5+U*(H.off||0),et=B+.5+D*.5+D*(H.off||0);for(let ot=0;ot<j;ot++){let ct=(ot+.5)/j-.5;C.box(L+(D?ct:0),q,et+(U?ct:0),U?0:1/j,V,D?0:1/j,Z,{faces:W})}};for(let C=0;C<r;C++)for(let E=0;E<s;E++){let B=C*s+E,U=a[B];if(U==="#"){e.plain.box(E+.5,Be,C+.5,1,0,1,3813194,{faces:oe});for(let[W,L]of[[1,0],[-1,0],[0,1],[0,-1]]){if(c(E+W,C+L))continue;let et=u(E+W,C+L),ot=(i?E%2===0&&L!==0:(E+C)%3===0)&&(et||u(E-W,C-L)&&!c(E-W,C-L)),ct=E+.5+W*.5,rt=C+.5+L*.5,Ft=St=>[W?.03:St,L?.03:St],Kt=W>0?$e:W<0?li:L>0?Tt:Re;if(et&&i)M(e.plain,E,C,W,L,0,Be,2766162,2),e.plain.box(ct+W*.01,.62,rt+L*.01,W?.02:1,.08,L?.02:1,14267482,{faces:Kt});else if(et)M(e.brick,E,C,W,L,0,Be,16777215,2),e.plain.box(ct+W*.02,0,rt+L*.02,...[W?.04:1,.2,L?.04:1].slice(0,1),.2,L?.04:1,9075306,{faces:Kt|oe});else{let St=S(E+W,C+L);M(e.panel,E,C,W,L,0,.72,St.panel,2),M(e.wallpaper,E,C,W,L,.72,.6,St.wall,2),M(e.wallpaper,E,C,W,L,1.32,Be-1.32,St.wall,2);let[Gt,te]=Ft(1);e.woodfine.box(ct+W*.015,0,rt+L*.015,Gt,.13,te,Ax,{faces:Kt|oe}),e.plain.box(ct+W*.02,.7,rt+L*.02,W?.04:1,.05,L?.04:1,Ex,{faces:Kt|oe|fi}),e.plain.box(ct+W*.02,Be-.1,rt+L*.02,W?.04:1,.1,L?.04:1,Fc,{faces:Kt|fi})}if(ot){let St=et?16183526:16777215;i&&!et?(L>0?e.trainN:e.trainS).box(ct+W*.006,.82,rt+L*.006,.62,.62,.01,16777215,{faces:Kt}):(e.unlit.box(ct+W*.006,.82,rt+L*.006,W?.01:.62,.62,L?.01:.62,et?d?3820138:7315138:d?4872842:16769712,{faces:Kt}),e.unlit.box(ct+W*.008,1.14,rt+L*.008,W?.01:.62,.3,L?.01:.62,et?d?4872826:9418966:d?6978216:16773584,{faces:Kt})),e.plain.box(ct+W*.02,.76,rt+L*.02,W?.06:.78,.06,L?.06:.78,St,{faces:63&~fi}),e.plain.box(ct+W*.02,1.44,rt+L*.02,W?.05:.74,.05,L?.05:.74,St);for(let Gt of[-1,1])e.plain.box(ct+W*.02+(L?Gt*.345:0),.8,rt+L*.02+(W?Gt*.345:0),.05,.66,.05,St);if(e.plain.box(ct+W*.02,1.11,rt+L*.02,W?.04:.62,.035,L?.04:.62,St),e.plain.box(ct+W*.02,.8,rt+L*.02,W?.04:.035,.64,L?.04:.035,St),!et){let Gt=S(E+W,C+L);for(let Pe of[-1,1]){let Te=L?Pe*.48:0,Qe=W?Pe*.48:0;e.plain.box(ct+W*.06+Te,.55,rt+L*.06+Qe,W?.06:.2,1.2,L?.06:.2,Gt.curtain,{top:yt(Gt.curtain,.8)})}e.plain.box(ct+W*.07,1.68,rt+L*.07,W?.03:1.2,.03,L?.03:1.2,11901530);let te=ct+W*.9,Zt=rt+L*.9;e.patch.box(te+(L?.25:0),.015,Zt+(W?.25:0),W?1:.8,0,L?1:.8,d?7309016:16767392,{faces:oe,fit:!0}),_.push({x:ct+W*.6,y:1.1,z:rt+L*.6,col:d?[.45,.55,1]:[1,.8,.55],I:d?.6:.95,R:3.6}),p.push([ct+W*.03,rt+L*.03,W,L])}}else if(!et&&(E*5+C*3)%7===0){let St=[15230287,4165530,15905076,6971304,5216858][(E+C*2)%5];e.woodfine.box(ct+W*.025,.95,rt+L*.025,W?.05:.56,.46,L?.05:.56,5913126,{faces:63}),e.plain.box(ct+W*.035,1,rt+L*.035,W?.05:.46,.36,L?.05:.46,16183526,{faces:Kt}),e.plain.box(ct+W*.04,1.03,rt+L*.04,W?.05:.38,.3,L?.05:.38,St,{faces:Kt}),e.plain.box(ct+W*.045,1.06,rt+L*.045,W?.05:.16,.14,L?.05:.16,yt(St,.65),{faces:Kt}),e.plain.box(ct+W*.045+(L?.1:0),1.16,rt+L*.045+(W?.1:0),W?.05:.08,.08,L?.05:.08,16773568,{faces:Kt})}}continue}let D=o[B],q=D==="wood"?e.wood:D==="carpet"?e.carpet:D==="tile"?e.tile:D==="grass"?e.grass:C===f?e.concrete:e.asphalt,V=D==="carpet"?n.def.carpet||9346022:16777215,Z=D==="grass"||D==="road"?1:2;for(let W=0;W<Z;W++)for(let L=0;L<Z;L++)q.box(E+(L+.5)/Z,-.05,C+(W+.5)/Z,1/Z,.05,1/Z,V,{faces:oe});if(D==="road"&&C===f+1&&E%2===0&&e.plain.box(E+1,-.01,C+1,1.1,.02,.12,15911244,{faces:oe}),D!=="grass"&&D!=="road")for(let W=0;W<2;W++)for(let L=0;L<2;L++)e.plaster.box(E+.25+L*.5,Be,C+.25+W*.5,.5,0,.5,16183268,{faces:fi});let j=c(E-1,C)&&c(E+1,C),H=c(E,C-1)&&c(E,C+1);if(j||H){let W=S(E,C);e.plain.box(E+.5,1.55,C+.5,1,Be-1.55,1,W.wall,{faces:j?fi|Tt|Re:fi|$e|li}),e.plain.box(E+.5,1.55,C+.5,j?1.04:1.12,.07,j?1.12:1.04,Fc,{faces:63&~oe});for(let et of[-1,1])e.plain.box(E+.5+(j?et*.48:0),0,C+.5+(H?et*.48:0),j?.07:1.12,1.55,H?.07:1.12,Fc,{faces:63&~fi&~oe});let L=U==="D"||U==="L"?[]:j?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[et,ot]of L){let ct=j?E+et:E+ot,rt=j?C+ot:C+et;if(!c(j?E+et:E,j?C:C+et)||c(ct,rt)||u(ct,rt))continue;let Ft=rt*s+ct;if(!n.walk[Ft])continue;let Kt=11040588;if(j){let St=ot>0?C+1+.04:C-.04,Gt=et>0?E+1+.44:E-.44;e.woodfine.box(Gt,0,St,.86,1.5,.05,Kt,{faces:63}),e.plain.box(Gt+et*.32,.72,St+ot*.035,.05,.05,.03,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(Gt,te,St+ot*.028,.6,.55,.01,yt(Kt,1.12),{faces:ot>0?Tt:Re})}else{let St=ot>0?E+1+.04:E-.04,Gt=et>0?C+1+.44:C-.44;e.woodfine.box(St,0,Gt,.05,1.5,.86,Kt,{faces:63}),e.plain.box(St+ot*.035,.72,Gt+et*.32,.03,.05,.05,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(St+ot*.028,te,Gt,.01,.55,.6,yt(Kt,1.12),{faces:ot>0?$e:li})}break}}}for(let C of n.def.decor||[])if(C.type==="rug"){let[E,B,U,D]=C.rect;e.rug.box(E+U/2,0,B+D/2,U-.2,.02,D-.2,C.color,{faces:oe,fit:!0})}for(let C of n.furn)Cx(n,C,e,l,_);for(let C of _)C.pendant&&(e.plain.box(C.x,C.y+.12,C.z,.02,Be-C.y-.12,.02,2763574),e.plain.box(C.x,Be-.02,C.z,.16,.02,.16,16183526),e.plain.box(C.x,C.y+.02,C.z,.46,.12,.46,15260868,{faces:63&~fi}),e.plain.box(C.x,C.y+.14,C.z,.3,.06,.3,14207920),e.unlit.box(C.x,C.y-.04,C.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(C.x,C.y+.021,C.z,.44,.001,.44,16769192,{faces:fi}),m.push(C.x,C.y-.02,C.z));for(let C of _)!C.pendant&&C.I>.8&&C.y<1.2&&C.col[2]<.5&&m.push(C.x,C.y-.05,C.z);if(d)for(let C=-10;C<s+12;C+=6){let E=f+.15;e.plain.box(C,0,E,.12,2.6,.12,2763574),e.plain.box(C,2.55,E+.35,.1,.08,.7,2763574),e.unlit.box(C,2.45,E+.65,.3,.1,.3,16769696,{faces:63}),_.push({x:C,y:2.3,z:E+.7,col:[1,.78,.45],I:1.6,R:5.5,street:!0}),m.push(C,2.42,E+.65)}if(n.roof){let C=n.roof.x+.5,E=n.roof.y+.5;for(let B of[-1,1])e.plain.box(C+B*.22,0,E-.3,.05,Be,.05,9082020);for(let B=0;B<6;B++)e.plain.box(C,.25+B*.28,E-.3,.44,.04,.04,12108496);e.unlit.box(C,Be-.005,E-.1,.7,.01,.7,658456,{faces:fi}),e.plain.box(C,Be-.08,E-.1,.8,.08,.8,6976644,{faces:63&~oe&~fi})}let k=Rx(n,_);for(let C of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])Px(e[C],k);n.light=new Float32Array(s*r*3);for(let C=0;C<r;C++)for(let E=0;E<s;E++){let B=k(E+.5,1,C+.5,0,0,0,!0),U=(C*s+E)*3;n.light[U]=B[0],n.light[U+1]=B[1],n.light[U+2]=B[2]}let P=new Ot,I=(C,E,B=0)=>{if(C.empty)return;let U=new bt(C.build(),E);U.matrixAutoUpdate=!1,U.updateMatrix(),U.renderOrder=B,P.add(U)},O=C=>new Lt({vertexColors:!0,map:C});if(I(e.wood,O(t.wood)),I(e.carpet,O(t.carpet)),I(e.tile,O(t.tile)),I(e.wallpaper,O(t.wallpaper)),I(e.panel,O(t.panel)),I(e.brick,O(t.brick)),I(e.plaster,O(t.plaster)),I(e.grass,O(t.grass)),I(e.asphalt,O(t.asphalt)),I(e.concrete,O(t.concrete)),I(e.plain,O(t.plain)),I(e.woodfine,O(t.woodfine)),I(e.rug,new Lt({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),I(e.unlit,new Lt({vertexColors:!0,toneMapped:!1})),!e.slotReel.empty){let C=Lx();I(e.slotReel,new Lt({vertexColors:!0,map:C.reel,toneMapped:!1})),I(e.slotSign,new Lt({vertexColors:!0,map:C.sign,toneMapped:!1}))}if(i){let C=Ix(),E=[];for(let[B,U]of[[e.trainN,1],[e.trainS,-1]]){let D=C.clone();D.needsUpdate=!0,D.repeat.set(1,8/.62),D.offset.set(0,-.82/.62);let q=new Lt({map:D,toneMapped:!1});q.userData.sgn=U,E.push(q),I(B,q)}P.userData.trainMats=E}if(I(e.shadow,new Lt({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),I(e.patch,new Lt({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:Ye,polygonOffset:!0,polygonOffsetFactor:-3}),2),p.length){let C=[],E=[],B=[];for(let[q,V,Z,j]of p){let H=j?1:0,W=Z?1:0,L=C.length/3,et=[[q-H*.3,1.4,V-W*.3,.16],[q+H*.3,1.4,V+W*.3,.16],[q+Z*1.5+H*.75,.02,V+j*1.5+W*.75,0],[q+Z*1.5-H*.15,.02,V+j*1.5-W*.15,0],[q-H*.3,.82,V-W*.3,.12],[q+H*.3,.82,V+W*.3,.12],[q+Z*.55+H*.55,.02,V+j*.55+W*.55,0],[q+Z*.55-H*.05,.02,V+j*.55-W*.05,0]];for(let ot of et)C.push(ot[0],ot[1],ot[2]),d?E.push(.5,.62,1,ot[3]*.9):E.push(1,.85,.6,ot[3]);B.push(L,L+1,L+2,L,L+2,L+3,L+4,L+5,L+6,L+4,L+6,L+7),B.push(L,L+1,L+5,L,L+5,L+4)}let U=new de;U.setAttribute("position",new re(new Float32Array(C),3)),U.setAttribute("color",new re(new Float32Array(E),4)),U.setIndex(B);let D=new bt(U,new Lt({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ye,side:ke}));D.renderOrder=5,P.add(D)}if(m.length){let C=new de;C.setAttribute("position",new re(new Float32Array(m),3));let E=new Xi(C,new Pi({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:Ye,sizeAttenuation:!0}));E.renderOrder=6,P.add(E)}return P}function xu(){let n=new Ae({vertexColors:!0}),t=new Ot,e=new Bt,i=4080992,s=2501178,r=15250234;e.box(0,0,0,.94,1.04,.84,i,{top:4936563}),e.box(0,0,0,.98,.06,.88,s),e.box(0,.98,0,.98,.06,.88,s);for(let l of[-1,1])e.box(l*.47,.06,0,.04,.92,.86,s);e.box(0,.12,.38,.74,.8,.05,987158,{faces:Tt}),e.box(0,.14,.2,.66,.02,.3,2764350,{faces:oe}),e.box(0,.5,.2,.66,.02,.3,2764350,{faces:oe});for(let l=0;l<3;l++)e.box(-.18+l*.18,.16,.24,.16,.08,.1,r,{top:16769658,faces:63}),e.box(-.09+l*.18,.24,.24,.16,.08,.1,r,{top:16769658,faces:63});for(let l=0;l<4;l++)e.box(-.2+l*.13,.52,.24,.11,.07+l%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new bt(e.build(),n));let a=new Bt;a.box(.37,.1,.035,.74,.84,.07,5857674,{faces:63}),a.box(.37,.16,.075,.62,.72,.02,4936563,{faces:63}),a.box(.37,.46,.09,.24,.24,.04,r,{faces:63}),a.box(.37,.5,.115,.16,.16,.03,2237487,{faces:63});for(let l=0;l<8;l++){let h=l*Math.PI/4;a.box(.37+Math.cos(h)*.105,.574+Math.sin(h)*.105,.1,.02,.02,.03,16773568,{faces:63})}for(let l of[0,2.1,4.2])a.box(.62+Math.cos(l)*.05,.45+Math.sin(l)*.05,.12,.03,.03,.1,14212842,{faces:63});a.box(.62,.45,.1,.06,.06,.06,14212842,{faces:63});for(let l of[.2,.8])a.box(.03,l,.04,.06,.12,.09,s,{faces:63});let o=new bt(a.build(),n);return o.position.set(-.37,0,.42),t.add(o),{group:t,door:o,mat:n}}function yu(){let n=new Bt,t=5981910,e=15905076,i=2371663;n.box(0,.25,0,2.7,1.05,1.3,t,{top:7166184}),n.box(1.15,.25,0,.6,.75,1.32,t),n.box(0,.55,0,2.72,.14,1.32,e,{faces:$e|li|Tt|Re}),n.box(.95,.78,0,.4,.4,1.34,i,{faces:Tt|Re}),n.box(1.36,.78,0,.04,.4,1.1,i,{faces:$e}),n.box(-.3,.75,-.66,1.4,.42,.03,i,{faces:Re}),n.box(0,1.3,0,1.6,.06,1,2763574),n.box(1.5,.22,0,.12,.12,1.34,2763574),n.box(1.52,.35,.42,.06,.16,.24,16774064,{faces:$e}),n.box(1.52,.35,-.42,.06,.16,.24,16774064,{faces:$e}),n.box(-1.37,.4,.45,.04,.18,.2,16731486,{faces:li}),n.box(-1.37,.4,-.45,.04,.18,.2,16731486,{faces:li});for(let a of[-.85,.85])for(let o of[-.6,.6])n.box(a,0,o,.5,.5,.22,1842728,{faces:63}),n.box(a,.15,o+Math.sign(o)*.1,.22,.22,.04,12107984,{faces:o>0?Tt:Re});let s=new bt(n.build(),new Ae({vertexColors:!0})),r=new Ot;return r.add(s),{group:r,body:s}}function vu(){let n=new Bt,t=2237743,e=15905076,i=7321599,s=1316380;n.box(0,0,0,2.2,1,1.1,t,{top:2895932}),n.box(1.25,.1,0,.5,.75,.95,i),n.box(.35,.45,0,1,.36,1.12,i,{faces:Tt|Re}),n.box(0,.32,0,2.22,.1,1.12,e,{faces:$e|li|Tt|Re}),n.box(-1.9,.45,0,1.9,.26,.26,t),n.box(-2.8,.45,0,.3,.75,.08,e),n.box(0,1,0,.5,.22,.5,s);for(let u of[-.62,.62])n.box(0,-.42,u,2.2,.07,.08,s,{faces:63}),n.box(.5,-.24,u*.92,.07,.36,.07,s,{faces:63}),n.box(-.5,-.24,u*.92,.07,.36,.07,s,{faces:63});n.box(1.5,-.28,0,.1,.12,.3,16774064);let r=new Ot;r.add(new bt(n.build(),new Ae({vertexColors:!0})));let a=new Ot,o=new Lt({color:789778});for(let u=0;u<2;u++){let f=new bt(new ae(5.2,.04,.22),o);f.rotation.y=u*Math.PI/2,a.add(f)}a.position.y=1.16,r.add(a);let l=new Ot;l.add(new bt(new ae(.04,.9,.12),o),new bt(new ae(.04,.12,.9),o)),l.position.set(-2.8,.55,.1),r.add(l);let h=new bt(new En(.08,1.6,6,16,1,!0),new Lt({color:16773568,transparent:!0,opacity:.16,blending:Ye,depthWrite:!1,side:ke}));h.position.set(1.5,-3.3,0),r.add(h);let c=new bt(new ae(.1,.1,.1),new Lt({color:16722490}));return c.position.set(-2.8,.95,0),r.add(c),r.visible=!1,{group:r,rotor:a,tail:l,beam:h,blink:c}}function _u(){let n=new Bt,t=16054008,e=2237487,i=2371663;n.box(0,.22,0,2.5,.45,1.2,t,{top:16777215}),n.box(-.1,.67,0,1.3,.38,1.1,t),n.box(-.1,.72,0,1.32,.28,1.12,i,{faces:$e|li|Tt|Re}),n.box(0,.3,0,2.52,.16,1.22,e,{faces:$e|li|Tt|Re}),n.box(1.26,.32,.38,.03,.1,.22,16774064,{faces:$e}),n.box(1.26,.32,-.38,.03,.1,.22,16774064,{faces:$e});for(let l of[-.8,.8])for(let h of[-.56,.56])n.box(l,0,h,.46,.46,.2,1842728,{faces:63});let s=new bt(n.build(),new Ae({vertexColors:!0})),r=new Ot;r.add(s);let a=new bt(new ae(.3,.12,.5),new Lt({color:16722490})),o=new bt(new ae(.3,.12,.5),new Lt({color:2779903}));return a.position.set(-.1,1.11,.26),o.position.set(-.1,1.11,-.26),r.add(a,o),{group:r,red:a,blue:o}}function bu(n){let t=new Bt,e=1,i=1.55,s=.16;t.box(0,0,0,n?e:s,i,n?s:e,9082020,{faces:63,top:6976644});for(let o=0;o<6;o++)t.box(0,.08+o*.08,0,n?e+.004:s+.004,.04,n?s+.004:e+.004,o%2?2237487:15911244,{faces:51});t.box(0,.75,0,n?.3:s+.02,.3,n?s+.02:.3,3818066,{faces:63}),t.box(0,1.2,0,n?.5:s+.01,.08,n?s+.01:.5,5923956,{faces:63});let r=new Ot;r.add(new bt(t.build(),new Ae({vertexColors:!0})));let a=new bt(new ae(n?.12:s+.04,.12,n?s+.04:.12),new Lt({color:16722490}));return a.position.y=.95,r.add(a),{group:r,led:a}}function Mu(){let n=new Bt;n.box(0,0,0,.74,.46,.05,9082020,{faces:63,top:10134708}),n.box(0,.05,.026,.62,.36,.01,1053208,{faces:16});for(let i=0;i<5;i++)n.box(0,.08+i*.07,.035,.62,.03,.03,11581636,{faces:63});for(let i of[-.33,.33])for(let s of[.03,.41])n.box(i,s,.03,.03,.03,.01,4870754,{faces:16});let t=new Ot;t.add(new bt(n.build(),new Ae({vertexColors:!0})));let e=new Ot;return e.add(t),{group:e,flap:t}}function Su(){let n=new Bt;n.box(0,0,0,.42,.56,.1,6976644,{faces:63,top:8029332}),n.box(0,.06,.051,.36,.44,.01,4870754,{faces:16}),n.box(-.08,.36,.06,.12,.12,.01,15911244,{faces:16}),n.box(-.08,.38,.065,.03,.08,.01,2237487,{faces:16});for(let r=0;r<3;r++)n.box(-.1+r*.1,.12,.065,.06,.12,.03,2237487,{faces:63});let t=new Ot;t.add(new bt(n.build(),new Ae({vertexColors:!0})));let e=new Ot,i=new Bt;i.box(0,0,.04,.05,.2,.05,14168890,{faces:63}),i.box(0,.18,.04,.09,.06,.08,2237487,{faces:63}),e.add(new bt(i.build(),new Ae({vertexColors:!0}))),e.position.set(.12,.3,.06),t.add(e);let s=new bt(new ae(.05,.05,.02),new Lt({color:16722490}));return s.position.set(.12,.5,.06),t.add(s),{group:t,lever:e,led:s}}function wu(n){let t=n.map(m=>m[0]),e=n.map(m=>m[1]),i=new Set(e).size===1,s=Math.min(...t),r=Math.max(...t)+1,a=Math.min(...e),o=Math.max(...e)+1,l=i?r-s:o-a,h=(s+r)/2,c=(a+o)/2,u=new Bt,f=new Bt;for(let m of[.25,.55,.85,1.15])u.box(h,m,c,i?l:.025,.025,i?.025:l,16724032,{faces:63});for(let m of[-1,1]){let p=i?h+m*(l/2-.05):h,y=i?c:c+m*(l/2-.05);f.box(p,0,y,.1,1.3,.1,3817294,{faces:63,top:16724032});for(let b of[.25,.55,.85,1.15])f.box(p,b-.02,y,.12,.06,.12,16736368,{faces:63})}let d=new Lt({color:16724032,transparent:!0,opacity:.9,depthWrite:!1,blending:Ye,toneMapped:!1}),g=new bt(u.build(),d);g.renderOrder=6;let _=new Ot;return _.add(g,new bt(f.build(),new Ae({vertexColors:!0}))),{group:_,mat:d,alongX:i,line:i?c:h,lo:i?s:a,hi:i?r:o}}function Tu(n){let t=new Bt,e=9067068,i=yt(e,1.15),s=.98,r=.07,a=1.52,o=(h,c,u,f,d,g,_,m)=>n?t.box(h,c,u,f,d,g,_,m):t.box(u,c,h,g,d,f,_,m);o(s/2,0,0,s,a,r,e,{faces:63,top:yt(e,.8)});for(let h of[-1,1])for(let c of[.15,.85])o(s/2,c,h*.036,.62,.55,.01,i,{faces:n?h>0?16:32:h>0?1:2});for(let h of[-1,1])o(s-.14,.72,h*.05,.06,.06,.04,14267482,{faces:63}),o(s-.14,.62,h*.042,.05,.1,.02,3816006,{faces:63});let l=new Ot;return l.add(new bt(t.build(),new Ae({vertexColors:!0}))),{group:l,led:null}}function Au(){let n=new Bt;n.box(0,-.1,0,.34,.22,.03,3111656,{faces:63}),n.box(0,-.06,0,.35,.05,.035,15911244,{faces:63}),n.box(-.09,-.16,0,.1,.06,.036,16777215,{faces:63}),n.box(.12,0,0,.05,.05,.036,2237487,{faces:63});let t=new bt(n.build(),new Lt({vertexColors:!0})),e=new Ot;return e.add(t),e}function Eu(){let n=new Bt;n.box(0,0,0,.32,.42,.06,15262422,{faces:63}),n.box(0,.24,.031,.22,.1,.01,2046511,{faces:16});for(let i=0;i<3;i++)for(let s=0;s<3;s++)n.box(-.07+s*.07,.04+i*.06,.035,.05,.04,.012,10134704,{faces:63});let t=new Ot;t.add(new bt(n.build(),new Ae({vertexColors:!0})));let e=new bt(new ae(.05,.05,.02),new Lt({color:4054148}));return e.position.set(.11,.36,.035),t.add(e),{group:t,led:e}}function Cu(){let n=new Bt;for(let r=0;r<3;r++){let a=-.12+r*.075,o=(r-1)*.15;n.box(r*.015,a,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:o}),n.box(r*.015,a-.002,0,.09,.075,.245,15983520,{faces:63,ry:o})}let t=new Bt;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new Bt,i=new hr(.17,0);i.scale(1.15,1.2,1.15),e.add(i,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new Bt;return s.box(0,-.34,0,.74,.7,.08,12618298,{faces:63}),s.box(0,-.29,0,.62,.6,.09,3098712,{faces:Tt|Re}),s.box(0,-.29,0,.62,.22,.095,4165530,{faces:Tt|Re}),s.box(.14,-.02,0,.16,.16,.1,15905076,{faces:Tt|Re}),s.box(-.12,-.14,0,.3,.12,.1,15230287,{faces:Tt|Re}),{cash:n.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var Hc={},Pr=(n,t)=>{if(!Hc[n]){let e=new Bt;t(e),Hc[n]=e.build()}return Hc[n]},It=63,kx={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},clerk:{skin:14264186,shirt:16052714,pants:3422282,shoe:2760216,belt:2237487,hat:3811874,vest:3422282},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function Gc(n,t,e){for(let s of[-.11,.11])n.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),n.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),n.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),n.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:It,ry:s>0?-.15:.15});n.box(0,.03,.222+.01,.07,.09,.05,yt(t.skin,.88),{faces:It});for(let s of[-.255,.255])n.box(s,.08,0,.03,.1,.08,yt(t.skin,.92),{faces:It})}function Dx(n,t){return Pr(n+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:It}),n==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:It});for(let i of[-.11,.11])e.box(i,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(i,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:It}),e.box(0,.22,0,.56,.06,.5,yt(t.hat,.8),{faces:It&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:It})}else if(n==="guard")Gc(e,t,n),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:It}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:It}),e.box(0,.35,-.02,.5,.06,.44,yt(t.hat,1.15),{faces:It}),e.box(0,.2,.29,.5,.04,.2,yt(t.hat,.8),{faces:It}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16});else if(n==="clerk"){Gc(e,t,n),e.box(0,-.12,.225,.12,.03,.02,10115658,{faces:16}),e.box(0,.2,-.02,.53,.14,.47,t.hat,{faces:It}),e.box(-.18,.12,.2,.18,.08,.1,t.hat,{faces:It}),e.box(0,.13,.226,.4,.035,.015,2237487,{faces:16});for(let i of[-.11,.11])e.box(i,.13,.232,.13,.12,.01,2237487,{faces:16})}else Gc(e,t,n),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:It}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:It}),e.box(.14,.42,-.1,.18,.1,.18,yt(t.hat,1.1),{faces:It}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:It}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:It&-5&-9})})}function Vc(n){let t=kx[n],e=new Ae({vertexColors:!0}),i=new Ot,s=new Ot;i.add(s);let r=[],a=(b,x,S=0,w=0,v=0)=>{let M=new bt(b,e);return M.position.set(S,w,v),x.add(M),r.push(M),M},o=Pr(n+"leg",b=>{b.box(0,-.36,0,.18,.36,.21,t.pants,{faces:It}),b.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:It,top:yt(t.shoe,1.3)}),n==="owner"&&b.box(0,-.3,.06,.205,.04,.25,16777215,{faces:It}),n==="guard"&&b.box(0,-.12,0,.185,.02,.215,yt(t.pants,.8),{faces:It&-5&-9})}),l=Pr(n+"torso",b=>{if(b.box(0,.34,0,.5,.45,.3,t.shirt,{faces:It}),n==="guard"){b.box(0,.4,0,.53,.38,.33,t.vest,{faces:It}),b.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),b.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:It}),b.box(.14,.62,.168,.12,.04,.02,16777215,{faces:It}),b.box(.16,.48,.17,.08,.12,.05,2237487,{faces:It}),b.box(.18,.6,.18,.015,.08,.015,2237487,{faces:It}),b.box(0,.33,0,.55,.08,.35,1777195,{faces:It}),b.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let x of[-.2,.2])b.box(x,.3,.1,.09,.1,.1,2763574,{faces:It})}else if(n==="player")b.box(0,.33,0,.52,.08,.32,t.belt,{faces:It}),b.box(0,.42,.155,.3,.14,.02,yt(t.shirt,.8),{faces:16}),b.box(0,.72,-.12,.42,.14,.12,yt(t.shirt,.85),{faces:It});else if(n==="clerk"){b.box(0,.33,0,.52,.06,.32,t.belt,{faces:It}),b.box(0,.42,.156,.07,.34,.015,11745617,{faces:16}),b.box(0,.73,.156,.1,.05,.016,11745617,{faces:16}),b.box(-.13,.62,.157,.12,.06,.01,15911244,{faces:16});for(let x of[-1,1])b.box(x*.07,.72,.155,.1,.07,.015,16777215,{faces:16,ry:x*.3})}else{for(let x=0;x<4;x++)b.box(0,.38+x*.1,0,.51,.035,.31,16777215,{faces:It&-5&-9});for(let x=0;x<3;x++)b.box(0,.42+x*.11,.155,.04,.04,.02,16777215,{faces:16});b.box(0,.74,.14,.3,.06,.04,yt(t.shirt,.85),{faces:It})}}),h=b=>Pr(n+"arm"+b,x=>{x.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:It}),x.box(0,-.37,0,.14,.18,.16,n==="guard"?t.shirt:yt(t.shirt,.95),{faces:It}),x.box(0,-.48,0,.13,.11,.14,n==="player"?2763837:t.skin,{faces:It}),n==="guard"&&x.box(0,-.06,0,.16,.1,.18,t.vest,{faces:It}),n==="guard"&&b==="R"&&(x.box(0,-.66,.06,.07,.24,.07,2763574,{faces:It}),x.box(0,-.73,.06,.095,.08,.095,12831958,{faces:It}),x.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),c=new Ot;c.position.set(-.12,.36,0),s.add(c),a(o,c);let u=new Ot;u.position.set(.12,.36,0),s.add(u),a(o,u),a(l,s);let f=new Ot;f.position.set(-.33,.77,0),s.add(f),a(h("L"),f);let d=new Ot;d.position.set(.33,.77,0),s.add(d),a(h("R"),d);let g=new Ot;g.position.set(0,.84,0),s.add(g),a(Dx(n,t),g);let _=null,m=null;if(n==="player"&&(_=new Ot,_.position.set(0,.66,-.16),s.add(_),a(Pr("bag",b=>{b.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:It}),b.box(0,.19,-.18,.14,.1,.14,10779973,{faces:It}),b.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),_)),n==="guard"){let b=new Yn(.75,3.4,14,1,!0);b.translate(0,-1.7,0),m=new bt(b,new Lt({map:Ni().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:Ye,side:ke,fog:!1})),m.position.set(0,-.74,.06),m.renderOrder=6,d.add(m)}let p={player:.76,guard:.72,owner:.78,clerk:.74}[n],y={player:.88,guard:.8,owner:.86,clerk:.84}[n];return n!=="player"&&g.scale.set(.9/p,1,.92/y),m&&m.scale.set(1/p,1/y,1),{kind:n,root:i,body:s,legL:c,legR:u,armL:f,armR:d,head:g,bag:_,beam:m,mat:e,meshes:r,phase:0,sq:1,sqv:0,flash:0,wx:p,wz:y}}function Wc(n,t,e,i){n.phase+=t*(5+9*e);let s=Math.sin(n.phase)*.8*e;n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armOverride||(n.armL.rotation.x=-s*.9,n.armR.rotation.x=n.beam?-1.35+Math.sin(n.phase*.5)*.06*e+Math.sin(i*1.3)*.03:s*.9),n.body.position.y=Math.abs(Math.sin(n.phase))*.07*e+(1-e)*Math.sin(i*2.2)*.012,n.head.rotation.y=n.beam?Math.sin(i*.9)*.15*(1-e):0,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let r=Math.max(.5,n.sq),a=1/Math.sqrt(r);if(n.body.scale.set(a*n.wx,r,a*n.wz),n.flash>0){n.flash-=t;let o=Math.max(0,n.flash)*6;n.mat.emissive.setRGB(o,o,o)}}function Xo(n,t,e,i,s){if(!t.light)return;let r=Math.max(0,Math.min(t.W-1,Math.floor(e))),o=(Math.max(0,Math.min(t.H-1,Math.floor(i)))*t.W+r)*3,l=1-Math.exp(-6*s),h=1.55,c=n.mat.color;c.r+=(Math.max(.82,Math.min(1.5,t.light[o]*h))-c.r)*l,c.g+=(Math.max(.78,Math.min(1.5,t.light[o+1]*h))-c.g)*l,c.b+=(Math.max(.78,Math.min(1.5,t.light[o+2]*h))-c.b)*l}var Ui=(n,t)=>{n.sq=t,n.sqv=0};function Ru(){let n=new Ae({vertexColors:!0}),t=13208138,e=8014374,i=16181976,s=new Ot,r=new Ot;s.add(r);let a=(c,u,f=0,d=0,g=0)=>{let _=new Bt;c(_);let m=new bt(_.build(),n);return m.position.set(f,d,g),u.add(m),m};a(c=>{c.box(0,.3,-.02,.32,.28,.66,t,{faces:It,top:yt(t,1.1)}),c.box(0,.3,.2,.28,.22,.2,i,{faces:It&-5}),c.box(0,.5,.26,.34,.06,.1,14168890,{faces:It}),c.box(0,.44,.32,.06,.07,.03,15911244,{faces:It}),c.box(0,.4,-.1,.33,.12,.3,e,{faces:7})},r);let o=new Ot;o.position.set(0,.58,.34),r.add(o),a(c=>{c.box(0,-.12,0,.3,.26,.28,t,{faces:It}),c.box(0,-.12,.2,.17,.13,.16,i,{faces:It}),c.box(0,-.05,.285,.07,.05,.03,1842470,{faces:It}),c.box(0,-.165,.26,.1,.03,.06,15233146,{faces:It});for(let u of[-1,1])c.box(u*.08,-.01,.141,.06,.06,.02,1842470,{faces:16}),c.box(u*.09,0,.151,.02,.02,.01,16777215,{faces:16}),c.box(u*.17,-.12,-.02,.06,.22,.14,e,{faces:It})},o);let l=[];for(let[c,u]of[[-.1,.2],[.1,.2],[-.1,-.24],[.1,-.24]]){let f=new Ot;f.position.set(c,.3,u),r.add(f),l.push(f),a(d=>{d.box(0,-.3,0,.09,.3,.1,t,{faces:It}),d.box(0,-.3,.015,.1,.05,.13,i,{faces:It})},f)}let h=new Ot;return h.position.set(0,.42,-.34),r.add(h),a(c=>c.box(0,0,-.1,.06,.06,.22,t,{faces:It}),h),h.rotation.x=.7,r.scale.setScalar(1.1),{root:s,body:r,head:o,legs:l,tail:h,mat:n,phase:0,sq:1,sqv:0}}function Pu(n,t,e,i,s){n.phase+=t*(6+12*e);let r=Math.sin(n.phase)*.7*e;n.legs[0].rotation.x=r,n.legs[3].rotation.x=r,n.legs[1].rotation.x=-r,n.legs[2].rotation.x=-r,n.tail.rotation.y=Math.sin(i*(s?26:12))*(s?.4:.7),n.body.position.y=Math.abs(Math.sin(n.phase))*.03*e,n.head.rotation.x=s?-.25+Math.sin(i*18)*.15:Math.sin(i*1.5)*.05,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let a=1.1*Math.max(.6,n.sq);n.body.scale.set(1.1/Math.sqrt(n.sq),a,1.1)}var Ne=n=>n?"ok":"pending",Nx=[{id:"art",text:"Steal the painting",bonus:600,needs:n=>n.totals.art>0,check:n=>Ne(n.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,needs:n=>n.totals.jewel>0,check:n=>Ne(n.got.jewel>=n.totals.jewel)},{id:"gold",text:"Grab every gold bar",bonus:500,needs:n=>n.totals.gold>0,check:n=>Ne(n.got.gold>=n.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:n=>Ne(n.got.cashLoose>=n.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,needs:n=>n.hides.length>0,check:n=>Ne(n.hidFromAlert)},{id:"nodog",text:"Don't get barked at",bonus:600,needs:n=>n.dogs.length>0,check:(n,t)=>n.barkedAt?"fail":t?"ok":"pending"},{id:"disguise",text:"Wear a guard's uniform",bonus:500,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>Ne(n.disguises>0)},{id:"tv",text:"Lure a guard with the TV",bonus:400,needs:n=>n.tvs.length>0,check:n=>Ne(n.tvLures>0)},{id:"vent",text:"Crawl through an air vent",bonus:400,needs:n=>n.vents.length>0,check:n=>Ne(n.ventsUsed>0)},{id:"nolaser",text:"Never trip a laser",bonus:600,needs:n=>n.lasers.length>0,check:(n,t)=>n.lasersTripped>0?"fail":t?"ok":"pending"},{id:"power",text:"Cut the power",bonus:500,needs:n=>!!n.breaker,check:n=>Ne(n.powerOff)},{id:"clerk",text:"Stop a fleeing clerk",bonus:500,needs:n=>n.buttons.length>0,check:n=>Ne(n.clerkStopped)},{id:"smoke",text:"Break a guard's sight with smoke",bonus:500,check:n=>Ne(n.smokeHid)},{id:"cleanpick",text:"Pick a lock without a slip",bonus:500,needs:n=>n.doors.some(t=>t.type==="lock"),check:n=>Ne(n.cleanPick)},{id:"cases",text:"Smash every display case",bonus:900,needs:n=>n.cases.length>0,check:n=>Ne(n.casesSmashed>=n.cases.length)},{id:"radio",text:"Fake a radio check-in",bonus:500,check:n=>Ne(n.radioFaked>0)},{id:"nospot",text:"Never step into a spotlight",bonus:700,needs:n=>n.spots.length>0,check:(n,t)=>n.spotHit?"fail":t?"ok":"pending"},{id:"slot",text:"Distract guards with a slot machine",bonus:500,needs:n=>n.slots.length>0,check:n=>Ne(n.slotLures>0)},{id:"pocket2",text:"Pickpocket 2 guards",bonus:600,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>Ne(n.picks>=2)},{id:"camhit",text:"Knock out a camera with a coin",bonus:500,needs:n=>n.cams.length>0,check:n=>Ne(n.camsHit>0)},{id:"stashrun",text:"Stash heavy loot before cracking the safe",bonus:500,needs:n=>n.totals.gold+n.totals.art>0,check:n=>Ne(n.stashedEarly)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:n=>Ne(n.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:n=>Ne(n.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(n,t)=>n.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(n,t)=>n.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,needs:n=>n.guards.some(t=>t.kind==="owner"),check:(n,t)=>n.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(n,t)=>n.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(n,t)=>n.dashes>0?"fail":t?"ok":"pending"}];function Lu(n=3,t=Math.random,e=null){let i=Nx.filter(r=>!e||!r.needs||r.needs(e)),s=[];for(;s.length<n&&i.length;){let r=i.splice(t()*i.length|0,1)[0];r.tag&&s.some(a=>a.tag===r.tag)||s.push({...r,st:"pending"})}return s}var Ns={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,smoke:2,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,smoke:1,alarm:45,radio:2.6,mult:1,safeAlarm:!0},ironman:{label:"Ironman",range:1.25,speed:1.2,susp:1.6,coins:1,smoke:0,alarm:15,radio:1.2,mult:2.5,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,smoke:1,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},gi=(n,t)=>t==="normal"?n:n+"_"+t;var Xc=.3,qc=3.7,Iu=11,ku=.18,Ux=.8,qo=1.02,Ox=3.2,Os=20,Us={cone:16769357,sus:16752412,alert:16726862},Lr=new Se,Yo=new X,wi={x:0,y:0},is={x:0,y:0},$o=(n,t,e)=>n+ze(Ce(n,t),-e,e),Du=$o,Fx=new An(.36,12).rotateX(-Math.PI/2),zx=new Lt({color:0,transparent:!0,opacity:.22,depthWrite:!1});function Nu(){let n=new de,t=new Float32Array((Os+2)*3),e=new Float32Array((Os+2)*4);e.set([1,1,1,.3],0);for(let r=1;r<=Os+1;r++)e.set([1,1,1,.05],r*4);let i=[];for(let r=1;r<=Os;r++)i.push(0,r+1,r);n.setAttribute("position",new re(t,3)),n.setAttribute("color",new re(e,4)),n.setIndex(i);let s=new bt(n,new Lt({color:Us.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:ke}));return s.frustumCulled=!1,s.renderOrder=3,s}function Bx(){let n=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new de;t.setAttribute("position",new re(new Float32Array(n),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new bt(t,new Lt({color:16765503,side:ke,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function Hx(){let n=new Ot,t=new ae(.13,.13,.13),e=new Lt({color:16765503});for(let i=0;i<3;i++){let s=new bt(t,e);n.add(s)}return n.visible=!1,n}var Uu=new Set(["patrol","wait","post"]),Gx=[["Quiet night, huh?","Too quiet."],["Did you hear something?","Just the pipes again."],["Coffee machine's broken again.","This job, I swear..."],["Who has the keycard?","Not me. Ask the boss."],["My feet are killing me.","Two more hours, buddy."],["You watch the game last night?","Don't remind me."],["They say this place is unrobbable.","Yeah, yeah."],["Saw a weird van outside earlier.","Probably the pizza guy."],["Remember the drill if the alarm goes?","Run toward it, right?"],["Is it just me or is it cold in here?","It's you."]],Ko=class{constructor(t){this.app=t,this.root=new Ot,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){this.root.clear();for(let d of this.guards||[])d.badge.remove();this.def=t;let e=this.L=fu(t),i=gu(e);this.root.add(i),this.trainMats=i.userData.trainMats||null,this.clackT=0,this.sway=0,this.safe=xu(),this.prev=null,this.safe.group.position.set(e.safe.x+.5,0,e.safe.y+.5),this.safeScale=t.safeScale||1,this.safe.group.scale.setScalar(this.safeScale);let s=(d,g)=>e.ch[g*e.W+d]==="#";if(this.doors=e.doors.map(d=>{let g=s(d.x-1,d.y)&&s(d.x+1,d.y),_=d.type==="lock"?Tu(g):bu(g);return d.type==="lock"?_.group.position.set(g?d.x+.01:d.x+.5,0,g?d.y+.5:d.y+.01):_.group.position.set(d.x+.5,0,d.y+.5),d.alongX=g,this.root.add(_.group),{...d,m:_,open:!1,t:0}}),this.lasers=(t.lasers||[]).map(d=>{let g=wu(d.cells);return this.root.add(g.group),{def:d,...g,on:!0}}),this.breaker=null,t.breaker){let d=t.breaker,g=Su();g.group.position.set(d.x+.5+d.dx*.53,.75,d.y+.5+d.dy*.53),g.group.rotation.y=Math.atan2(d.dx,d.dy),this.root.add(g.group),this.breaker={...g,at:{x:d.x+.5+d.dx*1.15,z:d.y+.5+d.dy*1.15}}}if(this.keyMeshes=e.keys.map(d=>{let g=Au();return g.position.set(d.x+.5,.8,d.y+.5),this.root.add(g),{...d,m:g}}),this.root.add(this.safe.group),this.police=_u(),this.police.group.visible=!1,this.root.add(this.police.group),this.panel=null,t.panel){let d=t.panel;this.panel=Eu(),this.panel.group.position.set(d.x+.5+d.dx*.53,.85,d.y+.5+d.dy*.53),this.panel.group.rotation.y=Math.atan2(d.dx,d.dy),this.panel.at={x:d.x+.5+d.dx*1.1,z:d.y+.5+d.dy*1.1},this.root.add(this.panel.group)}this.vents=[];for(let d of t.vents||[]){let g=[d.a,d.b].map(([_,m,p,y])=>{let b=Mu();return b.group.position.set(_+.5+p*.47,.06,m+.5+y*.47),b.group.rotation.y=Math.atan2(-p,-y),this.root.add(b.group),{...b,cx:_+.5,cz:m+.5,gx:_+.5+p*.5,gz:m+.5+y*.5,out:Math.atan2(-p,-y)}});g[0].other=g[1],g[1].other=g[0],this.vents.push(...g)}this.tvs=e.furn.filter(d=>d.type==="tv").map(d=>{let g=pu(e,d),_=Math.atan2(-g[0],-g[1]),m=g[0]?d.d:d.w,p=g[0]?d.w:d.d,y=d.x0+d.w/2,b=d.y0+d.d/2,x=new bt(new qi(m-.52,.8),new Lt({color:10473727,toneMapped:!1}));x.position.set(y+g[0]*.15,1.07,b+g[1]*.15),x.rotation.y=_;let S=new bt(new qi(3.2,2.2),new Lt({map:Ni().glow,color:7317759,transparent:!0,opacity:.5,depthWrite:!1,blending:Ye,fog:!1}));return S.position.set(y-g[0]*.7,.03,b-g[1]*.7),S.rotation.x=-Math.PI/2,x.visible=S.visible=!1,this.root.add(x,S),{scr:x,glow:S,cx:y,cz:b,fx:y-g[0]*(p/2+.9),fz:b-g[1]*(p/2+.9),on:!1,used:!1,t:0,flick:0,babble:0}}),this.heli=t.heli?vu():null,this.heli&&this.root.add(this.heli.group),this.van=yu(),this.root.add(this.van.group);let r=Cu(),a=du();this.lootMeshes={};let o={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let d of e.loot)o[d.type]++;for(let d in r){let g=new qn(r[d],a,Math.max(1,o[d]));g.frustumCulled=!1,g.count=0,this.lootMeshes[d]=g,this.root.add(g)}let l=Vc("player");l.root.rotation.order="YXZ",this.root.add(l.root),this.player={c:l,shadow:this.addShadow()},this.guards=[];let h=(d,g)=>{let _=Vc(d);_.root.rotation.order="YXZ",this.root.add(_.root);let m=Nu();this.root.add(m);let p=Hx();this.root.add(p);let y=document.createElement("div");y.className="badge",y.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(y);let b={kind:d,def:g,c:_,cone:m,stars:p,badge:y,shadow:this.addShadow()};return d==="guard"&&(b.walletMesh=new bt(new ae(.13,.09,.035),new Lt({color:6962978})),b.walletMesh.position.set(.12,.34,-.17),b.keyMesh=new bt(new ae(.1,.07,.02),new Lt({color:3111656})),b.keyMesh.position.set(-.13,.36,-.17),_.body.add(b.walletMesh,b.keyMesh)),this.guards.push(b),b};for(let d of t.guards)h("guard",d);this.buttons=[];for(let d of t.clerks||[]){let g=h("clerk",d),_=d.button,m=new bt(new ae(.2,.26,.06),new Lt({color:14212582})),p=new bt(new ae(.11,.11,.05),new Lt({color:16722490}));p.position.z=.04,m.add(p),m.position.set(_.x+.5+_.dx*.53,1.05,_.y+.5+_.dy*.53),m.rotation.y=Math.atan2(-_.dx,-_.dy),this.root.add(m),g.button={x:_.x+.5+_.dx*.15,z:_.y+.5+_.dy*.15,btn:p},this.buttons.push(g.button)}if(t.owner){let d=t.owner;h("owner",{path:d.patrol,wait:1.2,speed:d.speed,loop:!0,owner:d})}{let d=e.W,g=new Uint8Array(d*e.H),_=[e.start.y*d+e.start.x];for(g[_[0]]=1,this.entrance={x:e.start.x,y:e.start.y};_.length;){let m=_.shift(),p=m%d,y=m/d|0;if(!e.outdoor[m]&&e.walk[m]){this.entrance={x:p,y};break}for(let[b,x]of[[0,-1],[1,0],[-1,0],[0,1]]){let S=(y+x)*d+p+b;p+b>=0&&y+x>=0&&p+b<d&&y+x<e.H&&!g[S]&&e.walk[S]&&(g[S]=1,_.push(S))}}this.reserve=[];for(let m=0;m<2;m++){let p=this.entrance,y=h("guard",{roam:[1,1,e.W-2,e.H-2],path:[[p.x,p.y],[p.x,p.y]],wait:1.3,speed:1.7,reinforce:!0});this.guards.pop(),this.reserve.push(y)}}this.dogs=(t.dogs||[]).map(d=>{let g=Ru();return this.root.add(g.root),{def:d,m:g,shadow:this.addShadow()}}),this.cams=(t.cameras||[]).map(d=>{let g=Nu();this.root.add(g);let _=new bt(new ae(.22,.18,.36),new Lt({color:2961744})),m=new bt(new ae(.12,.1,.06),new Lt({color:16726862}));return m.position.z=.2,_.add(m),_.position.set(d.pos[0],1.3,d.pos[1]),this.root.add(_),{def:d,cone:g,mesh:_,lens:m}}),this.exitRing=new bt(new Ts(.62,.9,28).rotateX(-Math.PI/2),new Lt({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new bt(new En(.85,.85,2.4,20,1,!0),new Lt({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:ke})),this.exitRing.position.set(e.exit.x,.03,e.exit.z),this.exitBeam.position.set(e.exit.x,1.2,e.exit.z),this.root.add(this.exitRing,this.exitBeam);let c=new ae(.11,.025,.11);this.coinMeshes=[];for(let d=0;d<4;d++){let g=new bt(c,new Lt({color:16762938}));g.visible=!1,this.root.add(g),this.coinMeshes.push(g)}this.hides=e.furn.filter(d=>d.type==="wardrobe").map(d=>{let g=d.x0+.5,_=d.y0+.5;for(let[m,p]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(d.x0+m,d.y0+p))return{cx:g,cz:_,ex:g+m*.95,ez:_+p*.95,face:Math.atan2(m,p)};return null}).filter(Boolean),this.smokeFx=[];for(let d=0;d<2;d++){let _=new de;_.setAttribute("position",new re(new Float32Array(138),3));let m=new Xi(_,new Pi({map:Ni().glow,size:1.5,color:14275810,transparent:!0,opacity:0,depthWrite:!1}));m.frustumCulled=!1,m.renderOrder=8,m.visible=!1;let p=new Float32Array(184);for(let y=0;y<46;y++){let b=Math.random()*6.28,x=Math.sqrt(Math.random());p.set([Math.cos(b)*x,Math.random(),Math.sin(b)*x,Math.random()*6.28],y*4)}this.root.add(m),this.smokeFx.push({pts:m,geo:_,off:p,N:46})}this.arrow=Bx(),this.root.add(this.arrow),this.noiseRings=[];let u=new Ts(.9,1,32).rotateX(-Math.PI/2);for(let d=0;d<4;d++){let g=new bt(u,new Lt({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));g.visible=!1,g.renderOrder=4,this.root.add(g),this.noiseRings.push({m:g,t:1,r:1})}let f=t.values;this.cases=e.furn.filter(d=>d.type==="case").map(d=>{let g=d.x0+d.w/2,_=d.y0+d.d/2,m=new bt(new ae(d.w-.12,.46,d.d-.12),new Lt({color:12576511,transparent:!0,opacity:.28,depthWrite:!1}));m.position.set(g,1.05,_),m.renderOrder=5;let p=new Ot,y=[5037311,16732026,8191898,16766810,13073919];for(let b=0;b<5;b++){let x=new bt(new ae(.09,.09,.09),new Lt({color:y[(b+d.x0)%5]}));x.position.set(g+(b%3-1)*(d.w*.25),.88,_+((b/3|0)-.5)*(d.d*.3)),x.rotation.set(.6,b,.6),p.add(x)}return this.root.add(m,p),{f:d,cx:g,cz:_,glass:m,gems:p,smashed:!1,prog:0}}),this.caseLoot=t.caseLoot||0,this.slots=e.furn.filter(d=>d.type==="slots").map(d=>{let g=d.x0+d.w/2,_=d.y0+d.d/2,m=d.y0<e.H/2?1:-1,p=new bt(new ae(d.w-.2,.08,.08),new Lt({color:16766810,toneMapped:!1}));return p.position.set(g,1.66,_+m*.22),p.visible=!1,this.root.add(p),{f:d,cx:g,cz:_,face:m,top:p,used:!1,prog:0,t:0}}),this.spots=(t.spots||[]).map(d=>{let g=new bt(new An(d.r,28).rotateX(-Math.PI/2),new Lt({map:Ni().glow,color:16773296,transparent:!0,opacity:.85,depthWrite:!1,blending:Ye,toneMapped:!1}));g.renderOrder=4;let _=new bt(new Yn(d.r*.95,Be,20,1,!0),new Lt({color:16773296,transparent:!0,opacity:.09,depthWrite:!1,blending:Ye,side:ke,toneMapped:!1}));_.rotation.x=Math.PI,_.renderOrder=5;let m=new bt(new ae(.3,.16,.3),new Lt({color:2763574})),p=new bt(new ae(.2,.02,.2),new Lt({color:16774864}));p.position.y=-.09,m.add(p),this.root.add(g,_,m);let[y,b]=d.path;return{def:d,pool:g,cone:_,fix:m,ax:y[0]+.5,az:y[1]+.5,bx:b[0]+.5,bz:b[1]+.5,len:Math.hypot(b[0]-y[0],b[1]-y[1]),susp:0,cool:0,x:0,z:0,tickT:0}}),this.policeLane=e.van?{x:e.exit.x,z:e.exit.z+2.5}:{x:e.start.x+.5,z:e.start.y+1.5},this.baseLootTotal=f.stash+f.bundle*f.bundles+e.loot.reduce((d,g)=>d+f[g.type],0)+this.cases.length*this.caseLoot*f.jewel+this.slots.length*f.cash,this.lootTotal=this.baseLootTotal,this.reset()}addShadow(){let t=new bt(Fx,zx);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasKey=!1,this.objText="",this.crackNoiseT=0;for(let r of this.buttons||[])r.btn.material.color.setHex(16722490);this.powerOff=!1,this.breakProg=0,this.lasersTripped=0,this.breaker&&(this.breaker.lever.rotation.x=0,this.breaker.led.material.color.setHex(16722490));for(let r of this.lasers||[])r.group.visible=!0;this.spotHit=!1;for(let r of this.spots||[])r.susp=0,r.cool=0,r.pool.visible=r.cone.visible=!0;for(let r of this.doors||[]){let a=r.y*this.L.W+r.x;r.open=!1,r.t=0,this.L.walk[a]=0,this.L.opaque[a]=1,r.m.group.position.y=0,r.m.group.rotation.y=0,r.m.group.visible=!0,r.m.led&&r.m.led.material.color.setHex(16722490),this.picking=null,this.cleanPick=!1,this.app.onPick&&this.app.onPick(null)}for(let r of this.keyMeshes||[])r.m.visible=!0;this.app.onKey&&this.app.onKey(!1),this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.slowT=0,this.fovPunch=0,this.kickP=0,this.kickR=0,this.daily=this.app.mode==="daily"?this.app.daily:null,this.tut=this.app.mode==="tutorial",this.D=this.daily||this.tut?Ns.normal:Ns[this.app.diff]||Ns.normal,this.lookTotal=0,this.lootTotal=this.baseLootTotal,this.gear=this.app.gearMods?this.app.gearMods(!this.tut&&!this.daily&&this.D.label!=="Ironman"):{coins:0,smoke:0,sneak:1,pickW:1,crack:1,disguise:0},this.smokesLeft=this.D.smoke+this.gear.smoke,this.clouds=[],this.smokeHid=!1;for(let r of this.smokeFx||[])r.pts.visible=!1;this.coinsLeft=this.D.coins+this.gear.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.clerkStopped=!1,this.hidesUsed=0,this.smokesUsed=0,this.coinsThrown=0,this.radioFaked=0,this.trail=[],this.trailT=0,this.marks=[],this.heavy=[],this.stashRuns=0,this.stashedEarly=!1,this.app.onWeight&&this.app.onWeight(1),this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let r of this.L.loot)this.totals[r.type]++;this.contracts=this.tut?[]:Lu(3,this.daily?Di(this.daily.seed):Math.random,this),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let r of this.coinMeshes||[])r.visible=!1;let i=this.player;Object.assign(i,{x:t.start.x+.5,z:t.start.y+.5,okX:void 0,okZ:void 0,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,crouch:!1,crouchK:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),i.c.root.visible=!0,i.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let r of this.guards||[])r.knowsHide=!1;Ui(i.c,1);for(let r of this.reserve||[]){let a=this.guards.indexOf(r);a>=0&&this.guards.splice(a,1),r.c.root.visible=!1,r.cone.visible=!1,r.shadow.visible=!1,r.stars.visible=!1,r.badge.className="badge"}this.shiftN=0,this.shiftWarn=0,this.chatT=6+Math.random()*6,this.chatQ=null,this.chatI=Math.floor(Math.random()*20),this.boltT=8+Math.random()*8,this.thunderIn=0,this.thunderT=0,this.heli&&(this.heli.group.visible=!1);for(let r of this.vents||[])r.flap.rotation.x=0;for(let r of this.tvs||[])r.on=r.used=!1,r.scr.visible=r.glow.visible=!1;this.tvLures=0,this.photoFinish=!1,this.closeCalls=0,this.koStreak=0,this.maxKoStreak=0,this.lastKo=-99;for(let r of this.guards)r.peak=0;this.disguiseT=this.def.startDisguise&&!this.tut?this.def.startDisguise:0,this.disguises=0,this.uniformProg=0;for(let r of this.guards)r.stripped=!1;this.ventsUsed=0,this.player.venting=null;for(let r of this.guards)this.resetGuard(r);this.picks=0,this.pocketProg=0,this.koHold=0,this.koTarget=null;let s=!!(this.keyMeshes&&this.keyMeshes.length);for(let r of this.guards)r.wallet=r.kind==="guard"?150+(Math.random()*6|0)*50:0,r.spareKey=!1,s&&r.kind==="guard"&&r.def.path&&!r.def.roam&&(r.spareKey=!0,s=!1),r.walletMesh&&(r.walletMesh.visible=r.wallet>0,r.keyMesh.visible=r.spareKey),this.lootTotal+=r.wallet;this.crumbs=[],this.crumbT=0,this.barkedAt=!1;for(let r of this.dogs){let a=r.def.path[0];Object.assign(r,{x:a[0]+.5,z:a[1]+.5,wp:1%r.def.path.length,state:"roam",t:0,barkT:0,sniffT:0,ci:0,lostT:0,nav:[],navGoal:-1,navT:0,face:0,moving:0,tx:0,tz:0,waitT:0,smellT:0,mul:1})}for(let r of this.cams)Object.assign(r,{susp:0,cool:0,face:r.def.face,off:0}),r.cone.visible=!0,r.mesh.rotation.x=0;this.camsHit=0,this.loot=t.loot.map((r,a)=>({type:r.type,x:r.x+.5,y:.45,z:r.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[r.type],ph:a*1.7,ms:0,s:1,rot:a})),this.safe.door.rotation.y=0,this.van.group.visible=!!t.van,t.van&&this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.casesSmashed=0,this.slotLures=0;for(let r of this.slots||[])r.used=!1,r.prog=0,r.t=0,r.top.visible=!1;for(let r of this.cases||[])r.smashed=!1,r.prog=0,r.glass.visible=!0,r.gems.visible=!0;this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let r of this.noiseRings)r.m.visible=!1,r.t=1;if(this.app.particles.clear(),this.app.floaters.clear(),this.daily&&this.daily.mutator.apply(this),this.tut)for(let r of this.guards)r.range*=.85,r.speed*=.9}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1,sawCase:!1,...t.kind==="clerk"?{range:4.6*this.D.range,fov:1.5}:{}}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let i=e.owner.bed;t.x=i[0]+i[2]/2,t.z=i[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let i=e.path[t.wp];t.face=Math.atan2(i[0]+.5-t.x,i[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let i=this.L;return t>=0&&e>=0&&t<i.W&&e<i.H&&i.walk[e*i.W+t]===1}opaqueAt(t,e){let i=this.L;return t<0||e<0||t>=i.W||e>=i.H||i.opaque[e*i.W+t]===1}rayLen(t,e,i,s){let r=Math.sin(i),a=Math.cos(i);for(let o=.1;o<s;o+=.1)if(this.opaqueAt(Math.floor(t+r*o),Math.floor(e+a*o)))return o-.05;return s}los(t,e,i,s){let r=i-t,a=s-e,o=Math.ceil(Math.hypot(r,a)/.12);for(let l=1;l<o;l++){let h=l/o;if(this.opaqueAt(Math.floor(t+r*h),Math.floor(e+a*h)))return!1}return!0}clearLine(t,e,i,s){let r=i-t,a=s-e,o=Math.hypot(r,a);if(o<.01)return!0;let l=-a/o*.28,h=r/o*.28,c=Math.ceil(o/.25);for(let u=1;u<=c;u++){let f=u/c,d=t+r*f,g=e+a*f;if(!this.walkable(Math.floor(d),Math.floor(g))||!this.walkable(Math.floor(d+l),Math.floor(g+h))||!this.walkable(Math.floor(d-l),Math.floor(g-h)))return!1}return!0}collide(t,e){let i=Math.floor(t.x),s=Math.floor(t.z);for(let r=s-1;r<=s+1;r++)for(let a=i-1;a<=i+1;a++){if(this.walkable(a,r))continue;let o=ze(t.x,a,a+1),l=ze(t.z,r,r+1),h=t.x-o,c=t.z-l,u=h*h+c*c;if(!(u>=e*e))if(u>1e-9){let f=Math.sqrt(u);t.x+=h/f*(e-f),t.z+=c/f*(e-f)}else{let f=t.x-a,d=a+1-t.x,g=t.z-r,_=r+1-t.z,m=Math.min(f,d,g,_);m===f?t.x=a-e:m===d?t.x=a+1+e:m===g?t.z=r-e:t.z=r+1+e}}}moveEnt(t,e,i,s){let r=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(i))/.15));for(let a=0;a<r;a++)t.x+=e/r,t.z+=i/r,this.collide(t,s)}path(t,e,i,s){let{W:r,H:a,walk:o}=this.L,l=r*a;this.prev||(this.prev=new Int32Array(l),this.q=new Int32Array(l));let h=this.prev,c=this.q;if(i<0||s<0||i>=r||s>=a)return[];h.fill(-1);let u=e*r+t,f=s*r+i,d=0,g=0;for(c[g++]=u,h[u]=u;d<g;){let m=c[d++];if(m===f)break;let p=m%r,y=m/r|0;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(!x&&!b)continue;let S=p+x,w=y+b;if(S<0||w<0||S>=r||w>=a)continue;let v=w*r+S;!o[v]||h[v]!==-1||x&&b&&(!o[y*r+S]||!o[w*r+p])||(h[v]=m,c[g++]=v)}}if(h[f]===-1)return[];let _=[];for(let m=f;m!==u;m=h[m])_.push(m);return _.reverse()}navTo(t,e,i,s,r){let a=this.L.W,o=Math.floor(i)*a+Math.floor(e);(o!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(i)),t.navGoal=o,t.navT=.5),t.navT-=r;let l=t.nav,h=e,c=i;if(l.length>1){let m=Math.min(l.length-1,6),p=0;for(let y=m;y>=1;y--){let b=l[y]%a+.5,x=(l[y]/a|0)+.5;if(this.clearLine(t.x,t.z,y===l.length-1?e:b,y===l.length-1?i:x)){p=y;break}}p===l.length-1?(h=e,c=i):(h=l[p]%a+.5,c=(l[p]/a|0)+.5),p>0?l.splice(0,p):Math.hypot(h-t.x,c-t.z)<.3&&l.shift()}let u=h-t.x,f=c-t.z,d=Math.hypot(u,f);if(Math.hypot(e-t.x,i-t.z)<.12)return!0;let _=Math.min(d,s*r);return d>.001&&(this.moveEnt(t,u/d*_,f/d*_,.28),t.face=$o(t.face,Math.atan2(u,f),8*r)),t.moving=1,!1}update(t,e){let i=t;this.trainMats&&this.updateTrain(t,e),this.hitstop>0?(this.hitstop-=t,i*=.08):this.slowT>0&&(this.slowT-=t,i*=this.slowK+(1-this.slowK)*ze(1-this.slowT/.15,0,1)),this.fovPunch=we(this.fovPunch||0,0,6,t),this.kickP=we(this.kickP||0,0,9,t),this.kickR=we(this.kickR||0,0,7,t),this.t+=i;let s=!e&&this.state==="play";if(s){this.time+=i,this.updatePlayer(i);let o=this.app.mode==="tutorial"||this.daily||this.D.label==="Easy"||this.def.noShift?[]:this.D.mult>=1.5?[45,90]:[60,120];if(this.shiftWarn===this.shiftN&&this.shiftN<o.length&&this.time>=o[this.shiftN]-10&&(this.shiftWarn++,this.app.audio.play("radio"),this.app.announce('\u{1F4FB} "Relief guard arriving in 10 seconds" \u2014 grab what you can!')),this.def.rain&&this.updateStorm(t),this.disguiseT>0&&(this.disguiseT-=i,this.app.onDisguise(Math.max(0,this.disguiseT)),this.disguiseT<=0&&(this.app.audio.play("lost"),this.app.floaters.spawn("Disguise worn off",this.player.x,1.6,this.player.z,"warn",1.2))),this.tvs.length&&this.updateTVs(i),this.shiftN<o.length&&this.time>=o[this.shiftN]&&this.reserve[this.shiftN]&&this.callReinforcement(this.reserve[this.shiftN++]),this.trailT-=i,this.trailT<=0){this.trailT=.35;let l=this.alarm||this.guards.some(h=>h.state==="alert"||h.state==="flee"||h.susp>.35);this.trail.push([this.player.x,this.player.z,l?1:0]),this.trail.length>900&&this.trail.splice(0,2)}}else e&&(this.player.c.root.visible=!1);let r=0;for(let o of this.guards)o.moving=0,this.updateGuard(o,i,s),(o.state==="alert"||o.state==="flee")&&r++,this.syncGuard(o,i);s&&this.updateChatter(i);for(let o of this.cams)this.updateCam(o,i,s);for(let o of this.dogs)this.updateDog(o,i,s);let a=0;for(let o of this.guards)(o.susp>.3||o.state==="investigate"||o.state==="search")&&a++;this.tension=this.alarm?3:r>0?2:a>0?1:0,this.updateAlarm(i,s),this.updateLasers(i,s),this.updateSpots(i,s),this.updateSlots(i),this.updateLoot(i,s),this.updateProps(i),e||this.syncPlayer(i),this.updateNoiseRings(i),this.updateCoins(i,s),this.updateSmoke(i),this.state==="escape"&&this.updateEscape(i),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,i=this.app,s=i.input;s.move(wi),s.consumeLook(is);let r=i.sens||.0024;if(e.lookX=is.x,e.lookY=is.y,e.yaw-=is.x*r,this.lookTotal+=Math.abs(is.x*r)+Math.abs(is.y*r),e.pitch=ze(e.pitch-is.y*r*(i.invertY?-1:1),-1.25,1.2),e.face=e.yaw+Math.PI,e.hiding){this.updateHiding(t,s);return}if(e.venting){this.updateVent(t,s);return}if(this.picking){this.updatePicking(t,s);return}let a=Math.sin(e.face),o=Math.cos(e.face),l=-o,h=a,c=l*wi.x-a*wi.y,u=h*wi.x-o*wi.y;e.strafe=wi.x;let f=this.lootGot/this.lootTotal;s.consumeCrouch()&&(e.crouch=!e.crouch,i.onCrouch(e.crouch),i.hintDone("sneak")),e.dashT>0&&e.crouch&&(e.crouch=!1,i.onCrouch(!1)),e.crouchK=we(e.crouchK||0,e.crouch?1:0,10,t);let d=qc*(1-.1*f)*(e.crouch?.5*this.gear.sneak:1)*this.weightMul();if(e.vx=we(e.vx,c*d,14,t),e.vz=we(e.vz,u*d,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let H=c,W=u;Math.abs(H)+Math.abs(W)<.01&&(H=a,W=o);let L=Math.hypot(H,W);H/=L,W/=L,e.dashT=ku,e.dashCd=Ux,e.ddx=H,e.ddz=W,this.dashes++,this.lastDash=this.time,i.audio.play("dash"),i.shake.add(.18),Ui(e.c,.7),i.particles.burst(e.x,.1,e.z,{count:8,colors:[16777215,14673646],speed:2,up:1.5,size:.16,gravity:2,life:.5}),this.makeNoise(e.x,e.z,4.2,null),i.hintDone("dash")}let g=e.vx,_=e.vz;if(e.dashT>0){e.dashT-=t;let H=Math.max(0,e.dashT/ku);g+=e.ddx*Iu*H,_+=e.ddz*Iu*H,Math.random()<.6&&i.particles.burst(e.x,.15,e.z,{count:1,colors:[16777215],speed:.5,up:.5,size:.12,gravity:0,life:.35})}this.moveEnt(e,g*t,_*t,Xc),this.crumbT-=t,this.crumbT<=0&&Math.hypot(e.vx,e.vz)>.5&&(this.crumbT=.4,this.crumbs.push({x:e.x,z:e.z,t:this.time}),this.crumbs.length>60&&this.crumbs.shift());for(let H of this.dogs){let W=e.x-H.x,L=e.z-H.z,et=Math.hypot(W,L);et<.5&&et>.001&&this.moveEnt(e,W/et*(.5-et),L/et*(.5-et),Xc)}for(let H of this.guards){if(H.state==="sleep")continue;let W=e.x-H.x,L=e.z-H.z,et=Math.hypot(W,L);et<.55&&et>.001&&this.moveEnt(e,W/et*(.55-et),L/et*(.55-et),Xc)}this.walkable(Math.floor(e.x),Math.floor(e.z))?(e.okX=e.x,e.okZ=e.z):e.okX!==void 0&&(e.x=e.okX,e.z=e.okZ,e.vx=e.vz=0);let m=Math.hypot(g,_);e.moving=Math.min(1,m/qc);let p=Math.floor(e.bob/Math.PI);if(e.bob+=Math.min(m,qc)*t*2.6,Math.floor(e.bob/Math.PI)!==p){let H=this.L,W=ze(Math.floor(e.x),0,H.W-1),L=ze(Math.floor(e.z),0,H.H-1);i.audio.stepSound(H.floor[L*H.W+W],e.dashT>0?1.6:e.crouch?.35:1)}m>.5&&i.hintDone("move");let y=this.L.safe.x+.5,b=this.L.safe.y+.5,x=!this.safeOpen&&Math.hypot(e.x-y,e.z-b)<1.45+(this.safeScale-1)*.8&&Math.abs(Ce(e.face,Math.atan2(y-e.x,b-e.z)))<1.1,S=null,w=9;for(let H of this.guards){if(!this.canKO(H))continue;let W=Math.hypot(e.x-H.x,e.z-H.z);if(!(e.dashT<=0&&Math.abs(Ce(e.face,Math.atan2(H.x-e.x,H.z-e.z)))>.9)&&(W<w&&(w=W,S=H),e.dashT>0&&W<.95)){this.knockout(H),S=null;break}}let v=s.consumeAct();e.crack=!1;for(let H of this.keyMeshes)H.m.visible&&(H.m.rotation.y=this.t*2,H.m.position.y=.8+Math.sin(this.t*3)*.06,Math.hypot(e.x-(H.x+.5),e.z-(H.y+.5))<.85&&(H.m.visible=!1,this.hasKey=!0,i.audio.play("gold"),i.onKey(!0),i.hint("door"),i.floaters.spawn("KEYCARD!",H.x+.5,1.3,H.y+.5,"big",1.2),i.particles.burst(H.x+.5,.8,H.y+.5,{count:12,colors:[3111656,16777215,15911244],speed:2,up:2,size:.04,life:.6})));let M=null;for(let H of this.doors){if(H.open)continue;let W=H.x+.5,L=H.y+.5;Math.hypot(e.x-W,e.z-L)<1.5&&Math.abs(Ce(e.face,Math.atan2(W-e.x,L-e.z)))<1&&(M=H)}let k=null;for(let H of this.slots){if(H.used)continue;let W=H.cz+H.face*.9;Math.abs(e.z-W)<.9&&Math.abs(e.x-H.cx)<H.f.w/2+.3&&(k=H)}for(let H of this.slots)H!==k&&(H.prog=Math.max(0,H.prog-t*2));k&&(i.hint("slot"),s.act&&(k.prog+=t/.5,e.crack=!0,k.prog>=1&&this.pullSlot(k)));let P=null;for(let H of this.cases){if(H.smashed)continue;Math.hypot(e.x-H.cx,e.z-H.cz)<1.3+Math.max(H.f.w,H.f.d)*.35&&Math.abs(Ce(e.face,Math.atan2(H.cx-e.x,H.cz-e.z)))<1&&(P=H)}for(let H of this.cases)H!==P&&(H.prog=Math.max(0,H.prog-t*2));P&&(i.hint("case"),s.act&&(P.prog+=t/.55,e.crack=!0,P.prog>=1&&this.smashCase(P)));let I=!1;if(this.breaker&&!this.powerOff){let H=this.breaker.at,W=this.breaker.group.position;I=Math.hypot(e.x-H.x,e.z-H.z)<1&&Math.abs(Ce(e.face,Math.atan2(W.x-e.x,W.z-e.z)))<1,I&&s.act?(this.breakProg+=t/1.2,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.15,i.audio.play("tick",this.breakProg*.5),i.particles.burst(W.x,W.y+.3,W.z,{count:2,colors:[16773544,8378623],speed:2,up:1.5,size:.03,life:.3})),this.breakProg>=1&&this.cutPower()):this.breakProg=Math.max(0,this.breakProg-t)}let O=!1,C=this.nearHide();if(this.alarm&&this.panel){let H=this.panel.at,W=this.panel.group.position;O=Math.hypot(e.x-H.x,e.z-H.z)<1&&Math.abs(Ce(e.face,Math.atan2(W.x-e.x,W.z-e.z)))<1,O&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,i.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}x?(i.hint("safe"),s.act?(this.safeProg+=t*this.gear.crack/(this.def.crackTime||1.4),this.def.crackNoise&&(this.crackNoiseT-=t,this.crackNoiseT<=0&&(this.crackNoiseT=1.1,this.makeNoise(y,b,this.def.crackNoise,null),i.hint("drill"))),this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,i.audio.play("tick",this.safeProg),i.particles.burst(y,.7,b+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t);let E=S&&(S.wallet>0||S.spareKey);if(S&&!x?(i.hint(E?"pocket":"ko"),s.act?(this.koTarget!==S&&(this.koTarget=S,this.koHold=0,this.pocketProg=0),this.koHold+=t,E&&this.koHold>.22&&(this.pocketProg+=t/.9,e.crack=!0,S.susp=Math.min(.9,S.susp+t*.12),this.pocketProg>=1&&(this.pickpocket(S),this.koHold=99))):this.koHold>0&&(this.koHold<.22&&this.koTarget===S&&this.knockout(S),this.koHold=0,this.pocketProg=0)):(this.koHold=0,this.pocketProg=0,this.koTarget=null),k&&!x&&!S){i.setPrompt("slot",k.prog),this.updateObjective();return}if(P&&!x&&!S){i.setPrompt("case",P.prog),this.updateObjective();return}let B=null;for(let H of this.guards){if(H.state!=="ko"||H.radioCall!==1){H.answerProg=0;continue}Math.hypot(e.x-H.x,e.z-H.z)<1.6&&(B=H)}if(B&&!x){s.act?(B.answerProg+=t/.7,e.crack=!0,B.answerProg>=1&&this.fakeCheckIn(B)):B.answerProg=Math.max(0,B.answerProg-t),i.setPrompt("radio",B.answerProg),this.updateObjective();return}let U=null;if(!x&&!S&&this.disguiseT<=0)for(let H of this.guards)H.kind==="guard"&&H.state==="ko"&&!H.stripped&&H.radioCall!==1&&Math.hypot(e.x-H.x,e.z-H.z)<1.5&&(U=H);if(U){s.act?(this.uniformProg+=t/1.1,e.crack=!0,this.uniformProg>=1&&(this.uniformProg=0,this.takeUniform(U))):this.uniformProg=Math.max(0,this.uniformProg-t*2),i.hint("uniform"),i.setPrompt("uniform",this.uniformProg),this.updateObjective();return}else this.uniformProg=0;if(M&&!x&&!S&&M.type==="lock"){i.hint("pick"),v?this.startPick(M):i.setPrompt("pick"),this.updateObjective();return}if(M&&!x&&!S){v&&(this.hasKey?this.openDoor(M):this.nopeT<=0&&(this.nopeT=1.5,i.audio.play("nope"),i.floaters.spawn("Need the keycard!",M.x+.5,1.3,M.y+.5,"warn",1.2),i.hint("key"))),i.setPrompt(this.hasKey?"door":"locked"),this.updateObjective();return}if(I&&!x&&!S){i.setPrompt("breaker",this.breakProg),this.updateObjective();return}let D=!O&&!x&&!S?this.nearTV():null;if(D)if(v){this.tvOn(D),this.updateObjective();return}else{i.setPrompt("tv"),this.updateObjective();return}let q=!O&&!x&&!S&&!this.heavy.length?this.nearVent():null;if(q){if(i.hint("vent"),v){this.enterVent(q);return}i.setPrompt("vent"),this.updateObjective();return}let V=C&&!O&&!x&&!S;if(V&&(i.hint("hide"),v)){this.enterHide(C);return}i.setPrompt(O?"panel":x?"safe":S?E?"pocket":"ko":V?"hide":"",O?this.disarmProg:S&&E?this.pocketProg:this.safeProg);let Z=this.L.exit,j=Math.hypot(e.x-Z.x,e.z-Z.z);j<2.4&&this.heavy.length&&this.stashHeavy(),this.nopeT-=t,j<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,i.audio.play("nope"),i.floaters.spawn("Crack the safe first!",e.x+a*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),s.consumeSmoke()&&this.dropSmoke(),this.checkContracts(!1),this.updateObjective(),this.time>3.5&&i.hint("dash");for(let H of this.guards){let W=Math.hypot(e.x-H.x,e.z-H.z);H.state==="sleep"&&W<6&&i.hint("owner");for(let L of this.dogs)Math.hypot(e.x-L.x,e.z-L.z)<7&&i.hint("dog");if(this.powerOff)H.state!=="sleep"&&W<6.5&&(i.hint("cone"),this.time>8&&i.hint("coin"),this.time>14&&i.hint("sneak"));else for(let L of this.lasers){let et=L.alongX?e.x:e.z,ot=L.alongX?e.z:e.x;et>L.lo-1&&et<L.hi+1&&Math.abs(ot-L.line)<3.5&&i.hint("laser")}}for(let H of this.loot)if(Math.hypot(e.x-H.x,e.z-H.z)<4){i.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,i=e.x-t.x,s=e.z-t.z;return Math.hypot(i,s)>1.35||Math.abs(Ce(t.face,Math.atan2(i,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}juice(t,e,i,s,r){t>0&&(!this.slowT||this.slowT<t)&&(this.slowT=t,this.slowK=e);let a=this.app.shake.scale??1;this.fovPunch=(this.fovPunch||0)+i*a,this.kickP=(this.kickP||0)+s*a,this.kickR=(this.kickR||0)+r*a}mark(t,e,i){this.marks.push({t,x:e,z:i})}knockout(t){this.mark("ko",t.x,t.z);let e=this.app,i=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.kind==="clerk"&&t.state==="flee"&&(this.clerkStopped=!0,this.app.floaters.spawn("ALARM STOPPED",t.x,2.2,t.z,"big",1.2)),t.state="ko",t.koT=9,t.susp=0,t.fallT=0,t.radioCall=0,t.answerProg=0,t.callT=0,this.koStreak=this.time-(this.lastKo??-99)<8?(this.koStreak||1)+1:1,this.lastKo=this.time,this.maxKoStreak=Math.max(this.maxKoStreak||0,this.koStreak),this.koStreak>=2&&(e.floaters.spawn(["","","DOUBLE TAKEDOWN!","TRIPLE TAKEDOWN!"][this.koStreak]||"UNSTOPPABLE!",t.x,2.3,t.z,"big",1.3),e.audio.play("combo",this.koStreak*3),e.shake.add(.2)),t.c.flash=.2,Ui(t.c,.6),this.kos++,this.hitstop=.08,this.juice(.38,.3,-9,-.05,(Math.random()<.5?-1:1)*.07),e.shake.add(.35),i.punchT=.28,Ui(i.c,1.25),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,i=1.25;for(let s of this.hides){let r=Math.hypot(t.x-s.cx,t.z-s.cz);r<i&&Math.abs(Ce(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(i=r,e=s)}return e}enterHide(t){this.hidesUsed++;let e=this.player,i=this.app,s=!1,r=0;for(let a of this.guards)(a.state==="alert"||a.state==="flee")&&r++,a.state!=="ko"&&a.state!=="sleep"&&a.state!=="getup"&&this.canSee(a)&&(s=!0,a.knowsHide=!0,a.state!=="alert"&&this.alert(a),i.floaters.spawn("I saw that!",a.x,2,a.z,"alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,r>0&&!s){this.hidFromAlert=!0;for(let a of this.guards)a.state==="alert"&&(a.lostT=99)}i.audio.play("creak"),i.onHide(!0),i.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let i=e.hiding;e.hiding=null,e.x=i.ex,e.z=i.ez,e.yaw=i.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let i=this.player,s=i.hiding,r=this.app;i.hideT+=t;let a=s.face-Math.PI;i.yaw=a+ze(Ce(a,i.yaw),-1,1),i.pitch=ze(i.pitch,-.5,.4),i.moving=0,i.crack=!1,e.consumeDash(),e.consumeThrow();let o=9;for(let l of this.guards)l.state!=="ko"&&l.state!=="sleep"&&(o=Math.min(o,Math.hypot(l.x-s.cx,l.z-s.cz)));i.beatT-=t,o<4.5&&i.beatT<=0&&(i.beatT=.45+o*.12,r.audio.play("beat"),r.shake.add(.04)),e.move(wi),r.setPrompt("leave"),i.hideT>.35&&(e.consumeAct()||Math.hypot(wi.x,wi.y)>.5)&&this.leaveHide(!1)}takeUniform(t){let e=this.app;t.stripped=!0,this.disguises++,this.disguiseT=25+this.gear.disguise,t.koT=Math.max(t.koT,6),e.audio.play("creak"),e.audio.play("pick",6),e.floaters.spawn("Uniform on!",t.x,1.4,t.z,"big",1.2),e.onDisguise(this.disguiseT),e.hintDone("uniform")}nearTV(){let t=this.player;for(let e of this.tvs)if(!(e.on||e.used)&&Math.hypot(t.x-e.cx,t.z-e.cz)<1.9&&Math.abs(Ce(t.face,Math.atan2(e.cx-t.x,e.cz-t.z)))<.7)return e;return null}tvOn(t){let e=this.app;t.on=!0,t.t=0,t.scr.visible=t.glow.visible=!0,e.audio.play("click"),e.audio.play("tvon"),this.makeNoise(t.fx,t.fz,7.5,null,"Who turned the TV on?"),e.setPrompt("")}tvOff(t,e){t.on=!1,t.used=!0,t.scr.visible=t.glow.visible=!1,this.app.audio.play("click"),e&&(this.tvLures++,this.app.floaters.spawn("Stupid TV...",e.x,2,e.z,"q",1.2))}updateTVs(t){let e=this.player;for(let i of this.tvs){if(!i.on)continue;if(i.t+=t,i.flick-=t,i.babble-=t,i.flick<=0){i.flick=.12+Math.random()*.25;let r=[10473727,16765562,9109440,16751312,16777215][Math.random()*5|0];i.scr.material.color.setHex(r),i.glow.material.color.setHex(r),i.glow.material.opacity=.35+Math.random()*.3}let s=Math.hypot(e.x-i.cx,e.z-i.cz);i.babble<=0&&(i.babble=.2+Math.random()*.12,s<14&&this.app.audio.play("tv",Math.max(0,1-s/14))),i.t>18&&this.tvOff(i,null)}}nearVent(){let t=this.player;for(let e of this.vents)if(Math.hypot(t.x-e.cx,t.z-e.cz)<.85&&Math.abs(Ce(t.face,Math.atan2(e.gx-t.x,e.gz-t.z)))<1)return e;return null}enterVent(t){let e=this.player,i=this.app;for(let s of this.guards)s.state!=="ko"&&s.state!=="sleep"&&s.state!=="getup"&&this.canSee(s)&&(s.state!=="alert"&&this.alert(s),i.floaters.spawn("Hey! The vent!",s.x,2,s.z,"alert",1.2));this.ventsUsed++,e.venting={t:0,from:t,to:t.other,dur:1.7,moved:!1},e.vx=e.vz=0,e.crouch=!0,i.onCrouch(!0),i.audio.play("vent"),i.setPrompt(""),i.hintDone("vent")}updateVent(t,e){let i=this.player,s=i.venting,r=this.app;s.t+=t,i.inv=.5,i.moving=0,i.crack=!1,i.crouchK=1,e.consumeDash(),e.consumeThrow(),e.consumeAct(),e.consumeSmoke();let a=s.t/s.dur;s.from.flap.rotation.x=Math.min(1.3,s.t*6)*(a<.5?1:Math.max(0,1-(a-.5)*6)),s.to.flap.rotation.x=a>.55?Math.min(1.3,(a-.55)*8)*Math.max(0,1-Math.max(0,a-.85)*7):0,!s.moved&&a>=.5&&(s.moved=!0,i.x=s.to.cx,i.z=s.to.cz,i.yaw=s.to.out-Math.PI,i.pitch=-.1,this.trail&&this.trail.push([i.x,i.z,0])),r.ventFx(a<.22?a/.22:a>.78?(1-a)/.22:1),a>=1&&(i.venting=null,i.inv=.4,s.from.flap.rotation.x=0,s.to.flap.rotation.x=0,r.ventFx(0),r.audio.play("clank"),r.shake.add(.12),this.makeNoise(i.x,i.z,2.4,null),r.particles.burst(i.x,.3,i.z,{count:10,colors:[12103840,9077880],speed:1.2,up:1.2,size:.07,gravity:-.5,life:.8}))}dropSmoke(){let t=this.player,e=this.app;if(this.smokesLeft<=0){e.audio.play("nope");return}if(this.clouds.length>=this.smokeFx.length)return;this.smokesLeft--,this.smokesUsed++;let i=t.x+Math.sin(t.face)*.7,s=t.z+Math.cos(t.face)*.7;this.walkable(Math.floor(i),Math.floor(s))||(i=t.x,s=t.z);let r=this.smokeFx.find(a=>!a.pts.visible);r.pts.visible=!0,this.clouds.push({x:i,z:s,t:0,dur:7.5,r:0,fx:r}),e.audio.play("smoke"),e.shake.add(.12),e.particles.burst(i,.2,s,{count:14,colors:[16777215,14275810,12104390],speed:3,up:2,size:.12,life:.7,gravity:1}),e.onSmoke(this.smokesLeft),e.hintDone("smoke")}smokeBlocks(t,e,i,s){for(let r of this.clouds){let a=r.r*.9;if(a<.3)continue;if(Math.hypot(i-r.x,s-r.z)<a||Math.hypot(t-r.x,e-r.z)<a)return!0;let o=i-t,l=s-e,h=o*o+l*l||1,c=ze(((r.x-t)*o+(r.z-e)*l)/h,0,1);if(Math.hypot(t+o*c-r.x,e+l*c-r.z)<a)return!0}return!1}lowCover(t,e,i,s){let r=this.L,a=i-t,o=s-e,l=Math.hypot(a,o),h=Math.ceil(l/.2);for(let c=1;c<h;c++){let u=c/h;if(u*l>l-.25&&u*l>0)continue;let f=Math.floor(t+a*u),d=Math.floor(e+o*u);if(Math.hypot(t+a*u-i,e+o*u-s)>1.6)continue;let g=d*r.W+f;if(g>=0&&g<r.W*r.H&&!r.walk[g]&&!r.opaque[g]&&!r.outdoor[g]&&r.ch[g]!=="D"&&r.ch[g]!=="L")return!0}return!1}inSmoke(t,e){return this.clouds.some(i=>Math.hypot(t-i.x,e-i.z)<i.r*.85)}updateSmoke(t){for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];i.t+=t;let s=Math.min(1,i.t/.6),r=ze((i.dur-i.t)/1.6,0,1);i.r=2.1*(1-Math.pow(1-s,3))*(.75+.25*r);let a=i.fx,o=a.geo.attributes.position.array;for(let l=0;l<a.N;l++){let h=l*4,c=Math.sin(i.t*.8+a.off[h+3])*.15;o[l*3]=i.x+a.off[h]*i.r+c,o[l*3+1]=.2+a.off[h+1]*1.5*s+i.t*.04,o[l*3+2]=i.z+a.off[h+2]*i.r+c}a.geo.attributes.position.needsUpdate=!0,a.pts.material.opacity=.55*r*s,a.pts.material.size=1.2+s*.6;for(let l of this.guards)l.coughT>0&&(l.coughT-=t),!(l.state==="ko"||l.state==="sleep"||Math.hypot(l.x-i.x,l.z-i.z)>i.r*.8)&&(l.coughT>0||(l.coughT=2.2,this.app.floaters.spawn("*cough*",l.x,1.9,l.z,"q",.9),l.state==="alert"&&(l.lostT=Math.max(l.lostT,1.5))));i.t>=i.dur&&(a.pts.visible=!1,this.clouds.splice(e,1))}this.app.onInSmoke(this.state==="play"&&this.inSmoke(this.player.x,this.player.z))}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let i=this.coinMeshes.find(h=>!h.visible);if(!i)return;this.coinsLeft--,this.coinsThrown++;let s=Math.sin(t.face),r=Math.cos(t.face),a=Math.cos(t.pitch),o=Math.sin(t.pitch),l=7.5;this.coins.push({mesh:i,x:t.x+s*.35,y:.95,z:t.z+r*.35,vx:s*a*l+t.vx*.5,vy:o*l+2.6,vz:r*a*l+t.vz*.5,st:"fly",t:0,bounces:0}),i.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let i=this.player,s=this.app;for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];if(a.t+=t,a.st==="fly"){a.vy-=16*t;let o=a.x,l=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let h=Math.floor(a.x),c=Math.floor(a.z);!this.walkable(h,c)&&(this.opaqueAt(h,c)||a.y<.9)&&(Math.floor(o)!==h?a.vx*=-.4:a.vx*=.6,Math.floor(l)!==c?a.vz*=-.4:a.vz*=.6,a.x=o,a.z=l,s.audio.play("clink",.4)),a.y<.03&&(a.y=.03,a.bounces===0?(this.makeNoise(a.x,a.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(a.x,.06,a.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),a.bounces++,a.vy=Math.abs(a.vy)*.35,a.vx*=.5,a.vz*=.5,(a.bounces>2||Math.abs(a.vy)<.5)&&(a.st="rest",a.vy=0)),a.mesh.rotation.set(a.t*18,a.t*7,0);for(let u of this.cams){if(u.off>0)continue;let f=u.mesh.position;Math.hypot(a.x-f.x,a.y-f.y,a.z-f.z)<.5&&(u.off=12,u.susp=0,this.camsHit++,a.vx*=-.3,a.vz*=-.3,a.vy=1,s.audio.play("zap"),s.shake.add(.1),s.particles.burst(f.x,f.y,f.z,{count:16,colors:[16773544,8378623,16777215],speed:2.5,up:2,size:.04,life:.6}),s.floaters.spawn("CAMERA DOWN",f.x,f.y+.5,f.z,"big",1.2),s.hintDone("camhit"))}}else if(a.mesh.rotation.set(0,a.t*2,0),a.mesh.position.y=.03,e&&a.t>.6&&Math.hypot(i.x-a.x,i.z-a.z)<.6){this.coinsLeft++,a.mesh.visible=!1,this.coins.splice(r,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}a.mesh.position.set(a.x,a.y,a.z)}}makeNoise(t,e,i,s,r){this.thunderT>0&&s==null&&!r&&(i*=.3);let a=this.noiseRings.find(o=>o.t>=1);a&&(a.t=0,a.r=i,a.x=t,a.z=e,a.m.visible=!0);for(let o of this.guards)if(!(o===s||o.state==="ko"||o.state==="getup"||o.state==="alert"||o.state==="waking")&&!(Math.hypot(o.x-t,o.z-e)>i)){if(o.state==="sleep"){this.wake(o,t,e);continue}o.state!=="investigate"&&o.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(typeof r=="string"?r:r?"Huh? A coin?":"?",o.x,1.9,o.z,"q",.9),r===!0&&this.lures++,r==="Jackpot!?"&&this.slotLures++),o.state="investigate",o.tx=t,o.tz=e,o.hurry=o.speed*1.4,o.susp=Math.max(o.susp,.3)}if(r)for(let o of this.dogs)(o.state==="roam"||o.state==="sniff")&&Math.hypot(o.x-t,o.z-e)<i+2&&(o.state="coin",o.tx=t,o.tz=e,o.waitT=5,o.navGoal=-1,this.app.floaters.spawn("!",o.x,1,o.z,"q",.7))}updateDog(t,e,i){let s=this.player,r=this.app;t.t+=e,t.moving=0;let a=Math.hypot(s.x-t.x,s.z-t.z),o=s.hiding;i&&t.state!=="bark"&&t.state!=="barkHide"&&(!o&&s.inv<=0&&a<3&&this.los(t.x,t.z,s.x,s.z)&&!this.smokeBlocks(t.x,t.z,s.x,s.z)?(t.state="bark",t.barkT=.25,t.lostT=0,r.floaters.spawn("!",t.x,1.1,t.z,"alert",.8)):o&&Math.hypot(o.ex-t.x,o.ez-t.z)<1.4&&(t.state="barkHide",t.barkT=.3,t.hide=o));let l=t.def.path;switch(t.state){case"roam":{if(t.waitT>0){t.waitT-=e,t.face+=Math.sin(t.t*3)*e;break}let c=l[t.wp];if(this.navTo(t,c[0]+.5,c[1]+.5,t.def.speed*t.mul,e)&&(t.wp=(t.wp+1)%l.length,t.waitT=1.2),t.smellT-=e,i&&t.smellT<=0){t.smellT=.5;for(let u=this.crumbs.length-1;u>=0;u--){let f=this.crumbs[u];if(this.time-f.t>14)break;if(Math.hypot(f.x-t.x,f.z-t.z)<2.2){t.state="sniff",t.ci=u,t.sniffT=0,r.audio.play("sniff");break}}}break}case"sniff":{t.sniffT+=e;let c=this.crumbs[t.ci];if(!c||t.sniffT>16){t.state="roam",t.navGoal=-1;break}(this.navTo(t,c.x,c.z,2.5*t.mul,e)||Math.hypot(c.x-t.x,c.z-t.z)<.45)&&(t.ci<this.crumbs.length-1?t.ci++:(t.state="roam",t.waitT=2,t.navGoal=-1)),Math.random()<e*1.5&&r.audio.play("sniff");break}case"coin":(this.navTo(t,t.tx,t.tz,3.2*t.mul,e)||Math.hypot(t.tx-t.x,t.tz-t.z)<.6)&&(t.waitT-=e,t.face+=Math.sin(t.t*6)*e*3,Math.random()<e*2&&r.audio.play("sniff"),t.waitT<=0&&(t.state="roam",t.navGoal=-1));break;case"bark":{let c=!o&&a<6&&this.los(t.x,t.z,s.x,s.z);c?t.lostT=0:t.lostT+=e,a>1.3&&!o&&this.navTo(t,s.x,s.z,3.3*t.mul,e),t.face=Du(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),(t.lostT>2.5||o)&&(t.state="sniff",t.ci=Math.max(0,this.crumbs.length-6),t.sniffT=0),i&&c&&(this.lastBark=this.time),i&&c&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0);break}case"barkHide":{let c=t.hide;if(!s.hiding){t.state="bark",t.lostT=0;break}t.face=Du(t.face,Math.atan2(c.cx-t.x,c.cz-t.z),8*e),this.dogBark(t,e,c.ex,c.ez,10),this.barkedAt||(this.barkedAt=!0);break}}let h=t.m;h.root.position.set(t.x,0,t.z),h.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.scale.set(.8,1,1.1),Pu(h,e,t.moving?1:0,this.t,t.state==="bark"||t.state==="barkHide"),Xo(h,this.L,t.x,t.z,e)}dogBark(t,e,i,s,r=7){if(t.barkT-=e,t.barkT>0)return;t.barkT=.85;let a=this.app;a.audio.play("woof"),a.floaters.spawn("WOOF!",t.x,1,t.z,"woof",.7),t.m.sq=1.3,t.m.sqv=0,this.makeNoise(i,s,r,null)}wake(t,e,i){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=i,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,i-t.z),Ui(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,i,s){let r=e-t.x,a=i-t.z,o=Math.hypot(r,a);return o>s||o>.6&&Math.abs(Ce(t.face,Math.atan2(r,a)))>t.fov/2?!1:this.los(t.x,t.z,e,i)}noticeThings(t){let e=this.app;for(let i of this.guards)if(!(i===t||i.state!=="ko"||i.koT<1.2||i.claimed)&&this.seesPoint(t,i.x,i.z,t.range)){i.claimed=!0,t.state="investigate",t.tx=i.x,t.tz=i.z,t.hurry=t.speed*1.7,t.reviveT=i,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"warn",1.3);return}if(this.casesSmashed&&t.kind==="guard"&&!t.sawCase){let i=this.cases.find(s=>s.smashed&&this.seesPoint(t,s.cx,s.cz,t.range));if(i){t.sawCase=!0,t.safeRun=!0,t.state="investigate",t.tx=i.cx,t.tz=i.cz+1.2,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The display case!?",t.x,2,t.z,"warn",1.3);return}}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let i=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,i,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=i,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"warn",1.3))}}arrive(t){let e=this.app;for(let s of this.tvs)if(s.on&&Math.hypot(s.fx-t.x,s.fz-t.z)<2.2){t.face=Math.atan2(s.cx-t.x,s.cz-t.z),this.tvOff(s,t);return}if(t.kind==="guard"&&this.hides.length&&!t.reviveT&&!t.safeRun&&Math.random()<(this.player.hiding?.55:.35)){let s=null,r=4.5;for(let a of this.hides){let o=Math.hypot(a.ex-t.x,a.ez-t.z);o<r&&(!a.checkedT||this.t-a.checkedT>15)&&(r=o,s=a)}if(s){s.checkedT=this.t,t.state="checkHide",t.chk=s,t.navGoal=-1,e.floaters.spawn("Hmm... the wardrobe?",t.x,2,t.z,"q",1.2);return}}if(t.reviveT){let s=t.reviveT;t.reviveT=null,s.claimed=!1,s.state==="ko"&&Math.hypot(s.x-t.x,s.z-t.z)<1.8&&(s.koT=.25,this.revives++,t.face=Math.atan2(s.x-t.x,s.z-t.z),e.floaters.spawn("Wake up!",s.x,1.4,s.z,"warn",1.1),e.audio.play("wake"))}let i=this.player.hiding;if(i&&this.state==="play"&&this.dogs.some(s=>s.state==="barkHide")&&Math.hypot(i.ex-t.x,i.ez-t.z)<1.8){e.floaters.spawn("Got you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t);return}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){if(t.kind==="clerk"){if(t.state==="flee"||t.state==="cower")return;t.state="flee",t.susp=1,t.navGoal=-1,this.spotted=!0,this.app.audio.play("scream"),this.app.floaters.spawn("AAAH! A ROBBER!",t.x,2,t.z,"alert",1.2),this.app.shake.add(.12),Ui(t.c,1.35),this.app.hint("clerk");return}t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,t.alertAt=this.time,this.disguiseT>0&&(this.disguiseT=0,this.app.onDisguise(0),this.app.floaters.spawn("You're not Dave!",t.x,2.3,t.z,"alert",1.3)),this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"alert",.8),this.smokesLeft>0&&this.app.hint("smoke"),this.app.shake.add(.15),Ui(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}updateTrain(t,e){for(let i of this.trainMats)i.map.offset.x+=i.userData.sgn*t*.9;this.sway=Math.sin(this.t*1.3)*.006+Math.sin(this.t*3.1)*.002,!(e||this.state!=="play")&&(this.clackT-=t,this.clackT<=0&&(this.clackT=.95+Math.random()*.15,this.app.audio.play("clack"),this.app.shake.add(.015)))}updateChatter(t){let e=this.app,i=this.player;if(this.chatQ){let r=this.chatQ;r.t-=t,r.t<=0&&(this.chatQ=null,Uu.has(r.g.state)&&(e.floaters.spawn(r.text,r.g.x,2,r.g.z,"zz",1.6),e.audio.play("mumble")));return}if(this.chatT-=t,this.chatT>0||this.alarm)return;let s=this.guards.filter(r=>r.kind==="guard"&&Uu.has(r.state)&&r.susp<.1&&Math.hypot(r.x-i.x,r.z-i.z)<11);for(let r=0;r<s.length;r++)for(let a=r+1;a<s.length;a++){let o=s[r],l=s[a];if(Math.hypot(o.x-l.x,o.z-l.z)>2.6||!this.los(o.x,o.z,l.x,l.z))continue;let h=Gx.slice();this.def.rain&&h.push(["Nasty storm out there.","Better than standing in it."]),(o.def.reinforce||l.def.reinforce)&&h.push(["You the new guy?","First night. Anything I should know?"]),this.kos>0&&h.push(["Anyone seen Dave? He's not answering.","Probably asleep on the job again."]);let[c,u]=h[this.chatI++%h.length];e.floaters.spawn(c,o.x,2,o.z,"zz",1.6),e.audio.play("mumble"),o.face=Math.atan2(l.x-o.x,l.z-o.z),this.chatQ={g:l,text:u,t:1.5},this.chatT=16+Math.random()*10;return}this.chatT=1.5}updateStorm(t){let e=this.app;this.thunderT=Math.max(0,this.thunderT-t),this.thunderIn>0&&(this.thunderIn-=t,this.thunderIn<=0&&(this.thunderT=2.6,e.audio.play("thunder"),e.shake.add(.12),e.hint("thunder"))),this.boltT-=t,this.boltT<=0&&(this.boltT=12+Math.random()*12,this.thunderIn=.35+Math.random()*.6,e.lightning())}callReinforcement(t){let e=this.app,i=this.entrance;t.def.path=[[i.x,i.y],this.roamCell(t.def.roam,i.x,i.y)],this.resetGuard(t),t.wallet=0,t.spareKey=!1,t.walletMesh.visible=!1,t.keyMesh.visible=!1,t.c.root.visible=!0,this.guards.push(t),e.audio.play("radio"),e.announce("\u{1F4FB} Shift change! A new guard is on duty"),e.floaters.spawn("Reporting for duty!",t.x,2,t.z,"warn",1.4)}roamCell(t,e,i){let s=0;for(let r=0;r<40;r++){let a=t[0]+Math.floor(Math.random()*(t[2]-t[0]+1)),o=t[1]+Math.floor(Math.random()*(t[3]-t[1]+1));if(!(!this.walkable(a,o)||this.L.outdoor[o*this.L.W+a])){if(e!==void 0&&(a!==e||o!==i)){if(s++>=8)break;if(!this.path(e,i,a,o).length)continue}return[a,o]}}return e!==void 0?[e,i]:[t[0],t[1]]}effRange(t){return t.yawnT>0?t.range*.35:t.range}canSee(t){let e=this.player,i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s);return e.hiding||e.venting||r>this.effRange(t)||r>.35&&Math.abs(Ce(t.face,Math.atan2(i,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)||e.crouch&&this.lowCover(t.x,t.z,e.x,e.z)?0:this.smokeBlocks(t.x,t.z,e.x,e.z)?((t.susp>.2||t.state==="alert")&&(this.smokeHid=!0),0):r+.001}updateGuard(t,e,i){let s=this.player,r=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!i)&&r.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.kind==="guard"&&i&&(!t.radioCall&&t.koT<5.5&&(t.radioCall=1,t.callT=0,r.hint("radio")),t.radioCall===1&&(t.callT-=e,t.callT<=0&&(t.callT=1.1,r.audio.play("radio"),r.floaters.spawn('\u{1F4FB} "Unit, report in!"',t.x,1.2,t.z,"warn",1)),t.koT<1.8&&this.missedCheckIn(t))),t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,r.floaters.spawn(t.stripped?"Hey! Where's my uniform?!":"?!",t.x,1.9,t.z,"q",t.stripped?1.4:.8));return}t.yawnT>0&&(t.yawnT-=e,t.state!=="wait"&&(t.yawnT=0)),t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let a=i&&s.inv<=0?this.canSee(t):0;if(a){let l=1-ze(a/this.effRange(t),0,1),h=(.65+2.3*l*l)*(s.dashT>0?1.6:s.crouch?.55:1)*this.D.susp;this.disguiseT>0&&t.kind!=="owner"&&a>2.3&&s.dashT<=0&&(h*=.12),t.susp=Math.min(1,t.susp+h*e),t.state!=="alert"?t.peak=Math.max(t.peak||0,t.susp):t.peak=0,t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",r.audio.play("huh")))}else if(t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3)),t.state!=="alert"&&t.peak>.72&&t.susp<.15&&i){t.peak=0,this.closeCalls++;let l=this.player,h=Math.sin(l.face),c=Math.cos(l.face);r.floaters.spawn("PHEW! Close call +$50",l.x+h*1.5,1.35,l.z+c*1.5,"combo",1.2),r.audio.play("star",1),this.lootGot+=50,this.lootTotal+=50,r.onLoot(!0)}i&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),i&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&!this.canKO(t)&&Math.abs(Ce(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let o=t.def;switch(t.state){case"patrol":{let l=o.path[t.wp];(this.navTo(t,l[0]+.5,l[1]+.5,t.speed,e)||t.stateT>14)&&(t.state="wait",t.t=o.wait??1,t.baseFace=t.face,t.kind==="guard"&&t.susp<.1&&Math.random()<.35&&(t.yawnT=2.2,t.t=Math.max(t.t,2.2),r.floaters.spawn("*yaaawn*",t.x,1.9,t.z,"zz",1.4)));break}case"wait":{t.t-=e;let l=(o.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(l*2.4)*.9,t.t<=0){let h=o.path.length;if(o.roam){let c=Math.floor(t.x),u=Math.floor(t.z);o.path=[[c,u],this.roamCell(o.roam,c,u)],t.wp=1}else o.loop?t.wp=(t.wp+1)%h:((t.wp+t.dir>=h||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir);t.state="patrol"}break}case"post":{let l=o.post[0]+.5,h=o.post[1]+.5;Math.hypot(t.x-l,t.z-h)>.15?this.navTo(t,l,h,t.speed,e):t.face=$o(t.face,o.face+Math.sin(this.t*o.sweepSpeed)*o.sweep,3*e);break}case"suspicious":{let l=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=$o(t.face,l,5*e),t.kind!=="clerk"&&Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,r.floaters.spawn("Calling it in...",t.x,2,t.z,"warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let l=a?s.x:t.lastX,h=a?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(l=s.hiding.ex,h=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(l-t.x,h-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,l,h,Ox,e),!a&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,r.audio.play("lost"),r.floaters.spawn("?",t.x,1.9,t.z,"q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"checkHide":{let l=t.chk;(this.navTo(t,l.ex,l.ez,t.speed*1.15,e)||t.stateT>8)&&(t.face=Math.atan2(l.cx-t.x,l.cz-t.z),this.player.hiding===l&&this.state==="play"?(r.floaters.spawn("Found you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t)):(r.audio.play("creak"),r.floaters.spawn("Nobody here...",t.x,2,t.z,"q",1.1),t.state="look",t.t=1.6,t.baseFace=t.face));break}case"flee":this.navTo(t,t.button.x,t.button.z,3.4,e)&&(t.state="cower",t.t=0,t.face=Math.atan2(t.button.x-t.x,t.button.z-t.z),t.button.btn.material.color.setHex(4054148),this.state==="play"&&!this.alarm&&this.triggerAlarm("The clerk hit the silent alarm!"),r.audio.play("click"));break;case"cower":t.face+=Math.sin(this.t*9)*e*2;break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let i=t.c;if(t.moving&&this.state==="play"&&(t.stepAcc=(t.stepAcc||0)+e*(t.state==="alert"||t.state==="flee"?3.4:2.2),t.stepAcc>1)){t.stepAcc=0;let o=this.player,l=Math.hypot(t.x-o.x,t.z-o.z);if(l<8){let h=Ce(o.face,Math.atan2(t.x-o.x,t.z-o.z)),c=this.los(t.x,t.z,o.x,o.z)?1:.45;this.app.audio.stepSound("boot",(1-l/8)*.9*c,ze(-Math.sin(h),-.9,.9))}}i.root.position.x=t.x,i.root.position.z=t.z,i.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(Wc(i,e*(s?1.5:1),t.moving?1:0,this.t),Xo(i,this.L,t.x,t.z,e),i.beam){let o=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";i.beam.visible=o,o&&i.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let o=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,l=t.state==="ko"?1-Math.pow(1-o,3)*Math.cos(o*7):o;if(i.root.rotation.x=-Math.PI/2*l,i.root.position.y=.16*l,t.stars.visible=t.state==="ko",t.stars.visible){let h=t.x-Math.sin(t.face)*1,c=t.z-Math.cos(t.face)*1;t.stars.children.forEach((u,f)=>{let d=this.t*5+f*Math.PI*2/3;u.position.set(h+Math.cos(d)*.35,.55+Math.sin(d*2)*.05,c+Math.sin(d)*.35),u.rotation.set(d,d,0)})}}else t.state!=="sleep"&&(i.root.rotation.x=0,i.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(i.armOverride=!0,i.armL.rotation.x=i.armR.rotation.x=-2.6);let r=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=r,r){let o=t.state==="alert"||t.state==="flee"?Us.alert:t.susp>.25?Us.sus:Us.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,this.effRange(t),o)}let a="";t.state==="alert"||t.state==="flee"?a="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.state==="checkHide"||t.susp>.04)&&(a="sus"),a!==t.prevBadge&&(t.prevBadge=a,t.badge.className="badge "+a,t.badge.lastChild.textContent=a==="alert"?"!":"?"),a&&(Yo.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",Yo.z>1),t.badge.style.transform=`translate(${(Yo.x+1)/2*this.app.w}px,${(1-Yo.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",a==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,i,s,r,a,o){let l=t.geometry.attributes.position.array;l[0]=e,l[1]=.04,l[2]=i;for(let h=0;h<=Os;h++){let c=s-r/2+r*h/Os,u=this.rayLen(e,i,c,a),f=(h+1)*3;l[f]=e+Math.sin(c)*u,l[f+1]=.04,l[f+2]=i+Math.cos(c)*u}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(o)}updateCam(t,e,i){let s=t.def,r=this.player;if(t.off>0){t.off-=e,t.cone.visible=!1,t.mesh.rotation.x=.6,t.lens.material.color.setHex(Math.random()<.04?16773544:1710626),Math.random()<e*3&&this.app.particles.burst(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,{count:2,colors:[16773544,8378623],speed:1.2,up:.5,size:.03,life:.3}),t.off<=0&&(t.cone.visible=!0,t.mesh.rotation.x=0,this.app.audio.play("click"));return}i&&Math.hypot(r.x-s.pos[0],r.z-s.pos[1])<7&&this.coinsLeft>0&&this.app.hint("camhit"),t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let a=s.pos[0],o=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let l=!1;if(i&&r.inv<=0&&t.cool<=0){let c=r.x-a,u=r.z-o,f=Math.hypot(c,u);l=this.disguiseT<=0&&f<6.5&&Math.abs(Ce(t.face,Math.atan2(c,u)))<.45&&this.los(a,o,r.x,r.z)&&!this.smokeBlocks(a,o,r.x,r.z)}if(t.susp=ze(t.susp+(l?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.audio.play("alarm"),this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",a,2,o,"alert",1.2);for(let c of this.guards)c.state==="ko"||c.state==="sleep"||c.state==="getup"||c.state==="alert"||c.state==="waking"||Math.hypot(c.x-r.x,c.z-r.z)<18&&(c.state="investigate",c.tx=r.x,c.tz=r.z,c.hurry=3.2,c.susp=Math.max(c.susp,.6))}let h=t.cool>0;t.lens.material.color.setHex(h||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,a,o,t.face,.9,6.5,h?Us.alert:t.susp>.2?Us.sus:10479871)}openSafe(){this.mark("safe",this.L.safe.x+.5,this.L.safe.y+.5);let t=this.app,e=this.L.safe.x+.5,i=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,this.juice(.6,.35,-12,.04,0),t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,i+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.burst(e,1,i+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,i,"big",1.6);for(let r=0;r<s.bundles;r++){let a=-.9+1.8*r/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:i+.4*this.safeScale+.1,vx:Math.sin(a)*Ee(2,3.2),vy:Ee(5,7),vz:Math.cos(a)*Ee(1.5,3),st:"fly",t:0,value:s.bundle,ph:r,ms:0,s:1,rot:r,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.hintDone("safe"),t.hint("stash")}weightMul(){let t=0;for(let e of this.heavy)t+=e==="art"?.1:.06;return Math.max(.65,1-t)}stashHeavy(){let t=this.app,e=this.player,i=this.heavy.length;this.heavy=[],this.stashRuns++,this.hasStash||(this.stashedEarly=!0),t.audio.play("disarm"),t.floaters.spawn(`STASHED ${i} IN THE ${this.L.van?"VAN":"HIDEOUT"}!`,e.x+Math.sin(e.face)*1.5,1.3,e.z+Math.cos(e.face)*1.5,"big",1.3),t.particles.burst(e.x,.9,e.z,{count:10,colors:[16765503,16777215],speed:1.6,up:2,size:.04,life:.6}),this.juice(0,1,-3,0,0),t.onWeight(1),t.hintDone("heavy")}collect(t){(t.type==="gold"||t.type==="art")&&!t.bundle&&(this.heavy.push(t.type),this.app.onWeight(this.weightMul()),this.app.hint("heavy")),(t.type!=="cash"||!t.bundle)&&this.mark(t.type==="cash"?"cash":"loot",t.x,t.z);let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let i=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,r=Math.sin(s.face),a=Math.cos(s.face),o=Ee(-.35,.35),l=s.x+r*1.4-a*o,h=s.z+a*1.4+r*o;e.floaters.spawn("+$"+t.value,l,1,h,i,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+r*1.4,1.45,s.z+a*1.4,"combo",.8),e.audio.play("combo",this.combo));let c={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+r*1.4,.8,s.z+a*1.4,{count:t.type==="cash"?4:10,colors:c,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+r*1,1,s.z+a*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+r*1.5,1,s.z+a*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,this.juice(0,1,t.type==="cash"?-1.2:-3,t.type==="cash"?0:-.015,0),Ui(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let i=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let r=this.loot.length-1;r>=0;r--){let a=this.loot[r];a.t+=t;let o=a.type==="art"?.9:.62;if(a.st==="fly"){a.vy-=18*t;let c=a.x,u=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,this.walkable(Math.floor(a.x),Math.floor(a.z))||(a.x=c,a.z=u,a.vx*=-.5,a.vz*=-.5),a.y<.3&&(a.y=.3,a.vy*=-.45,a.vx*=.6,a.vz*=.6),a.rot+=t*8,a.t>.8&&(a.st="idle")}else if(a.st==="idle")a.y+=(o+Math.sin(this.t*3+a.ph)*.08-a.y)*Math.min(1,t*6),a.rot+=t*1.8,e&&Math.hypot(i.x-a.x,i.z-a.z)<1.5&&(a.st="mag",a.ms=2);else{a.ms+=t*30;let c=i.x-a.x,u=.7-a.y,f=i.z-a.z,d=Math.hypot(c,u,f),g=Math.min(d,a.ms*t);if(a.x+=c/d*g,a.y+=u/d*g,a.z+=f/d*g,a.rot+=t*12,d<.45){this.collect(a),this.loot.splice(r,1);continue}}a.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(a.x+Ee(-.2,.2),a.y+Ee(0,.25),a.z+Ee(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let l=this.lootMeshes[a.type],h=a.st==="mag"?Math.max(.4,1-a.ms*.02):1+(a.type==="art"?0:Math.sin(this.t*6+a.ph)*.06);Lr.position.set(a.x,a.y,a.z),Lr.rotation.set(0,a.rot,0),Lr.scale.setScalar(h*(a.type==="jewel"?1.5:1.25)),Lr.updateMatrix(),l.setMatrixAt(s[a.type]++,Lr.matrix)}for(let r in s){let a=this.lootMeshes[r];a.count=s[r],a.instanceMatrix.needsUpdate=!0}}updateProps(t){for(let e of this.doors)if(e.open&&e.t<1){e.t=Math.min(1,e.t+t*1.6);let i=1-Math.pow(1-e.t,3);e.type==="lock"?e.m.group.rotation.y=(e.alongX?1:-1)*1.55*(i+Math.sin(e.t*Math.PI)*.12):e.m.group.position.y=i*(Be-.12)}if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,i=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*i}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,i=e.c,s=this.state==="escape"&&!e.hidden;i.root.visible=s,e.shadow.visible=s,s&&(i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),Wc(i,t,1,this.t),i.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=we(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),Xo(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let i=this.player,s=this.app;if(this.state==="escape"&&this.heli&&this.heli.group.visible){let g=this.L.exit,_=this.endT,m=this.heli.group.position;if(_<1.1){let p=Math.min(1,_/1.1),y=p*p*(3-2*p);t.position.set(g.x,qo+y*1.6,g.z+y*.6)}else{let p=Math.min(1,(_-1.1)*1.4);t.position.x+=(g.x+3-t.position.x)*p*e*2,t.position.y+=(6-t.position.y)*e*1.5,t.position.z+=(g.z+7-t.position.z)*e*1.5}t.lookAt(m.x,m.y,m.z),this.fovKick=0;return}if(this.state==="escape"&&!this.L.van){let g=this.L.exit,_=this.endT,m=Math.min(1,Math.max(0,(_-.3)/2)),p=m*m*(3-2*m);t.position.set(g.x,qo+p*9,g.z+p*3.5),t.rotation.set(-.1-p*1,Math.PI+p*.5,0),this.fovKick=0;return}if(this.state==="escape"){let g=this.van.group.position,_=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(_.x-2.5,1.6,_.z+5)),t.position.x+=(g.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(g.x+.3,.7,g.z),this.fovKick=0;return}if(i.hiding){let g=i.hiding;t.position.set(g.cx+Math.sin(g.face)*.12,qo-.06,g.cz+Math.cos(g.face)*.12),t.rotation.set(i.pitch+s.shake.y*.06,i.yaw+s.shake.x*.06,0),this.fovKick=we(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let g=this.catcher,_=Math.atan2(g.x-i.x,g.z-i.z)-Math.PI;i.yaw+=Ce(i.yaw,_)*Math.min(1,e*8),i.pitch+=(.08-i.pitch)*Math.min(1,e*8)}let r=i.moving,a=Math.abs(Math.sin(i.bob))*.05*r,o=Math.cos(i.bob)*.03*r,l=Math.cos(i.yaw+Math.PI),h=Math.sin(i.yaw+Math.PI),c=-l,u=h;i.roll=we(i.roll,-i.strafe*.03*r,8,e),this.fovKick=we(this.fovKick,i.dashT>0?12:0,i.dashT>0?25:6,e);let f=s.shake,d=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(i.x+c*o,qo-(i.crouchK||0)*.42+a*(1-(i.crouchK||0)*.5)-d,i.z+u*o),t.rotation.set(i.pitch+f.y*.06+(this.kickP||0),i.yaw+f.x*.06,i.roll+f.x*.02+(this.kickR||0)+this.sway)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let i=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(i,1,i),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1,this.whooshed=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),this.alarm&&this.alarmT<10&&(this.photoFinish=!0,this.juice(.9,.25,-10,0,0),t.shake.add(.4),t.floaters.spawn("JUST IN TIME!",e.x,1.7,e.z-1.2,"big",1.6),t.audio.play("jackpot")),t.onEscapeStart()}updateHeli(t){let e=this.heli,i=e.group,s=this.L.exit,r=this.endT;i.visible||(i.visible=!0,this.heliV=0,i.position.set(s.x,4.4,s.z-1.2),i.rotation.set(0,0,0)),e.rotor.rotation.y+=t*32,e.tail.rotation.x+=t*40,e.blink.visible=r*2.5%1<.4,e.beam.rotation.z=Math.sin(r*1.3)*.25,r<1.3?i.position.y=4.4+Math.sin(r*3)*.08:(this.heliV=Math.min(14,this.heliV+t*9),i.position.x-=this.heliV*t,i.position.y+=(1.5+this.heliV*.25)*t,i.rotation.z+=(.22-i.rotation.z)*Math.min(1,t*3),i.rotation.x+=(-.12-i.rotation.x)*Math.min(1,t*2)),r>.6&&r<1.4&&this.app.shake.add(t*.25)}updateEscape(t){let e=this.player,i=this.van.group,s=this.app;if(!this.L.van){this.endT+=t,e.hidden||(e.hidden=!0,e.c.root.visible=!1,s.audio.play("creak")),this.endT>.5&&!this.whooshed&&(this.whooshed=!0,s.audio.play(this.heli?"chopper":"dash")),this.heli&&this.updateHeli(t),this.endT>(this.heli?3.6:2.8)&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()));return}this.endT+=t;let r=this.endT;if(r<.4){let a=r/.4;e.x=e.sx+(i.position.x-e.sx)*a,e.z=e.sz+(i.position.z-.3-e.sz)*a,e.y=Math.sin(a*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,i.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));i.scale.x+=(1-i.scale.x)*Math.min(1,t*10),i.scale.y+=(1-i.scale.y)*Math.min(1,t*10),i.scale.z=i.scale.x,r>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),i.position.x+=this.van.vx*t,i.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.burst(i.position.x-1.5,.25,i.position.z,{count:2,colors:[14540253,12303291],speed:1,up:1,size:.22,gravity:-1,life:.6})),r>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;this.mark("alarm",this.player.x,this.player.z);let e=this.app,i=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(this.policeLane.x+40,0,this.policeLane.z),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let o=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?o?16722490:5900816:4054148)}let i=this.police;if(!this.alarm){i.group.visible&&this.state==="play"&&(i.group.position.x+=t*10,i.group.position.x>this.policeLane.x+45&&(i.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(i.red.material.color.setHex(s?16722490:5574682),i.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let r=this.L.exit,a=Math.max(0,this.alarmT/this.alarmTotal);i.group.position.x=this.policeLane.x+2.5+a*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){this.mark("caught",this.player.x,this.player.z);let t=this.app,e=this.player;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,this.juice(.5,.3,-14,.06,.04),t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}bust(t){this.mark("caught",this.player.x,this.player.z);let e=this.time;this.bustCause=this.player.hiding?"hide":t.kind==="owner"?"owner":e-(this.lastDash??-99)<2.5?"dash":e-(this.lastBark??-99)<6?"dog":e-(t.alertAt??e)>3?"los":"cone";let i=this.app;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),Ui(this.player.c,.55),this.hitstop=.15,this.juice(.5,.3,-14,.06,-.04),i.shake.add(.7),i.flash("red"),i.audio.play("bust"),i.audio.siren(!1),i.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),i.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,Ui(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let i of this.guards)i.state==="alert"&&(i.state="search",i.tx=i.lastX,i.tz=i.lastZ,i.hurry=2.4,i.susp=.5)}cutPower(){let t=this.app,e=this.breaker.group.position;this.powerOff=!0,this.breakProg=0,this.breaker.lever.rotation.x=-2.2,this.breaker.led.material.color.setHex(4054148);for(let i of this.lasers)i.group.visible=!1;for(let i of this.spots)i.pool.visible=i.cone.visible=!1;t.audio.play("powerdown"),t.shake.add(.2),t.particles.burst(e.x,e.y+.3,e.z,{count:24,colors:[16773544,8378623,16777215],speed:3,up:3,size:.04,life:.6}),t.floaters.spawn("LASERS OFF",e.x,1.6,e.z,"big",1.3)}updateSlots(t){for(let e of this.slots){if(e.t<=0){e.top.visible=!1;continue}e.t-=t,e.top.visible=!0,e.top.material.color.setHSL(this.t*2%1,1,.6),e.top.scale.y=1+Math.sin(this.t*30)*.5}}updateSpots(t,e){let i=this.player,s=this.app;for(let r of this.spots){let a=r.def,o=r.len||1,l=(this.t*a.speed+(a.phase||0))%(2*o),h=(l<o?l:2*o-l)/o;if(r.x=r.ax+(r.bx-r.ax)*h,r.z=r.az+(r.bz-r.az)*h,r.pool.position.set(r.x,.03,r.z),r.cone.position.set(r.x,Be/2,r.z),r.fix.position.set(r.x,Be-.08,r.z),this.powerOff)continue;r.cool-=t;let c=e&&!i.hiding&&i.inv<=0&&r.cool<=0&&Math.hypot(i.x-r.x,i.z-r.z)<a.r*.9&&!this.inSmoke(i.x,i.z);r.susp=ze(r.susp+(c?t*1.7:-t*.7),0,1),c&&(this.spotHit=!0,r.tickT-=t,r.tickT<=0&&(r.tickT=.22,s.audio.play("tick",1+r.susp)),s.hint("spot")),r.susp>=1&&(r.susp=0,r.cool=5,this.spotted=!0,s.flash("alarm"),s.shake.add(.2),this.triggerAlarm("Caught in the spotlight!"));let f=r.cool>0&&Math.sin(this.t*14)>0?16724032:r.susp>.05?r.susp>.6?16734778:16752704:16773296;r.pool.material.color.setHex(f),r.cone.material.color.setHex(f),r.pool.scale.setScalar(1+r.susp*.15)}}updateLasers(t,e){if(this.powerOff)return;let i=this.player,s=this.app;for(let r of this.lasers){let a=r.def,o=a.on+a.off,l=(this.t+(a.phase||0))%o,h=l<a.on,c=!h&&o-l<.45;if(r.on=h,r.mat.opacity=h?.75+Math.sin(this.t*40)*.15:c&&Math.sin(this.t*50)>0?.35:0,!e||!h||i.hiding)continue;let u=r.alongX?i.x:i.z,f=r.alongX?i.z:i.x;u>r.lo&&u<r.hi&&Math.abs(f-r.line)<.28&&(!this.laserHitT||this.t-this.laserHitT>1.5)&&(this.laserHitT=this.t,this.lasersTripped++,s.audio.play("zap"),s.flash("red"),s.shake.add(.3),s.particles.burst(i.x,.8,i.z,{count:14,colors:[16724032,16777215],speed:2.5,up:2,size:.04,life:.5}),this.spotted=!0,this.triggerAlarm("You tripped a laser!"))}}fakeCheckIn(t){let e=this.app;t.radioCall=2,t.answerProg=0,t.koT+=8,this.radioFaked++,e.audio.play("radioOk"),e.floaters.spawn('"All clear, over."',t.x,1.3,t.z,"big",1.3),e.hintDone("radio")}missedCheckIn(t){let e=this.app;t.radioCall=3,e.audio.play("radio"),e.floaters.spawn('\u{1F4FB} "No answer... sending backup!"',t.x,1.4,t.z,"alert",1.4);let i=null,s=1e9;for(let r of this.guards){if(r===t||r.kind!=="guard"||["ko","getup","sleep","alert","waking"].includes(r.state))continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a<s&&(s=a,i=r)}i&&(t.claimed=!0,i.state="investigate",i.tx=t.x,i.tz=t.z,i.hurry=i.speed*1.8,i.reviveT=t,i.susp=Math.max(i.susp,.7),i.navGoal=-1,e.floaters.spawn("On my way!",i.x,2,i.z,"warn",1.1)),this.app.diff==="hard"&&this.app.mode!=="daily"&&this.app.mode!=="tutorial"&&this.triggerAlarm("A guard missed his radio check-in!")}pullSlot(t){let e=this.app,i=this.def.values;t.used=!0,t.prog=0,t.t=3,e.audio.play("jackpot"),e.shake.add(.15),e.floaters.spawn("JACKPOT!",t.cx,1.9,t.cz+t.face*.6,"big",1.4);for(let s=0;s<4;s++)setTimeout(()=>e.particles.burst(t.cx,1.3,t.cz+t.face*.4,{count:10,colors:[16766810,16773544,16777215],speed:2.2,up:3.5,size:.06,life:.9}),s*250);this.makeNoise(t.cx,t.cz,8,null,"Jackpot!?"),this.loot.push({type:"cash",x:t.cx,y:1,z:t.cz+t.face*.5,vx:(Math.random()-.5)*2,vy:4,vz:t.face*2.2,st:"fly",t:0,value:i.cash,ph:0,ms:0,s:1,rot:0})}pickpocket(t){let e=this.app,i=this.player,s=Math.sin(i.face),r=Math.cos(i.face);if(this.picks++,this.pocketProg=0,t.spareKey){if(t.spareKey=!1,t.keyMesh.visible=!1,!this.hasKey){this.hasKey=!0;for(let a of this.keyMeshes)a.m.visible=!1;e.onKey(!0),e.hint("door")}e.floaters.spawn("SPARE KEYCARD!",t.x,1.6,t.z,"big",1.2),e.audio.play("gold")}if(t.wallet>0){let a=t.wallet;t.wallet=0,t.walletMesh.visible=!1,this.lootGot+=a,this.got.cash++,e.floaters.spawn("+$"+a+" WALLET",i.x+s*1.2,1.1,i.z+r*1.2,"cash",1),e.particles.burst(i.x+s*.9,1,i.z+r*.9,{count:5,colors:[7327610,10216346],speed:1.2,up:1.4,size:.09,life:1,shape:"bill",gravity:3,drag:2.5}),e.audio.play("pick",8),e.onLoot(!1)}i.grabT=1,e.floaters.spawn("?",t.x,2,t.z,"q",.7),e.hintDone("pocket")}smashCase(t){let e=this.app,i=this.def.values;t.smashed=!0,t.prog=0,this.casesSmashed++,t.glass.visible=!1,t.gems.visible=!1,e.audio.play("glass"),e.shake.add(.28),this.hitstop=.06,this.juice(0,1,-4,-.06,(Math.random()-.5)*.08),e.particles.burst(t.cx,1.05,t.cz,{count:26,colors:[14677247,12576511,16777215],speed:3.2,up:3,size:.07,life:.9,spin:2}),e.particles.burst(t.cx,.95,t.cz,{count:8,colors:[5037311,16732026,16766810],speed:1.5,up:2.5,size:.05,life:.7}),this.makeNoise(t.cx,t.cz,3.6,null);for(let s=0;s<this.caseLoot;s++){let r=Math.atan2(this.player.x-t.cx,this.player.z-t.cz)+(s-.5)*.9;this.loot.push({type:"jewel",x:t.cx,y:1,z:t.cz,vx:Math.sin(r)*Ee(1.5,2.4),vy:Ee(3.5,5),vz:Math.cos(r)*Ee(1.5,2.4),st:"fly",t:0,value:i.jewel,ph:s,ms:0,s:1,rot:s})}e.floaters.spawn("SMASH!",t.cx,1.6,t.cz,"ko",.8)}startPick(t){this.picking={d:t,pin:0,t:Math.random()*6,speed:this.tut?1.7:2.2,w:(this.tut?.36:.26)*this.gear.pickW,zone:.5,pos:.5,slips:0,cool:0},this.newPinZone(),this.app.audio.play("click"),this.app.onPick(this.picking)}newPinZone(){let t=this.picking,e;do e=.18+Math.random()*.64;while(Math.abs(e-t.pos)<.25);t.zone=e}stopPick(){this.picking=null,this.app.onPick(null)}updatePicking(t,e){let i=this.picking,s=this.player,r=this.app,a=i.d;if(e.move(wi),e.consumeDash(),e.consumeThrow(),e.consumeSmoke(),s.vx=s.vz=0,s.moving=0,s.crack=!0,Math.hypot(wi.x,wi.y)>.5){this.stopPick();return}if(i.t+=t*i.speed,i.cool-=t,i.pos=.5+.5*Math.sin(i.t),e.consumeAct()&&i.cool<=0)if(Math.abs(i.pos-i.zone)<i.w/2){if(i.pin++,r.audio.play("pin",i.pin),r.shake.add(.05),r.particles.burst(a.x+.5,.72,a.y+.5,{count:4,colors:[16773544,16777215],speed:1,up:1,size:.025,life:.3}),i.pin>=3){i.slips===0&&(this.cleanPick=!0),this.stopPick(),this.openDoor(a);return}i.w*=.78,i.speed*=1.25,this.newPinZone()}else i.slips++,i.cool=.45,r.audio.play("slip"),r.shake.add(.15),r.floaters.spawn("*rattle*",a.x+.5,1.2,a.y+.5,"warn",.8),this.makeNoise(a.x+.5,a.y+.5,3.4,null);r.onPick(i),r.setPrompt("picking")}openDoor(t){let e=this.app,i=t.y*this.L.W+t.x;t.open=!0,t.t=0,this.L.walk[i]=1,this.L.opaque[i]=0;for(let s of this.guards)s.navGoal=-1;if(t.type==="lock"){e.audio.play("creak"),e.hintDone("pick"),e.floaters.spawn("UNLOCKED!",t.x+.5,1.5,t.y+.5,"big",1.2),e.particles.burst(t.x+.5,.75,t.y+.5,{count:10,colors:[14267482,16777215],speed:1.5,up:1.5,size:.03,life:.5});return}t.m.led.material.color.setHex(4054148),e.audio.play("disarm"),e.audio.play("creak"),e.shake.add(.25),e.particles.burst(t.x+.5,1.5,t.y+.5,{count:18,colors:[14212842,16777215],speed:1.5,up:.5,size:.06,life:.8}),e.floaters.spawn("ACCESS GRANTED",t.x+.5,1.6,t.y+.5,"big",1.2)}objectiveTarget(){let t=this.L;if(this.hasStash)return{x:t.exit.x,z:t.exit.z,label:t.van?"VAN":"ROOF HATCH"};if(this.tut&&this.lootGot===0){let s=this.player,r=null,a=1e9;for(let o of this.loot){let l=Math.hypot(o.x-s.x,o.z-s.z);o.type==="cash"&&l<a&&(a=l,r=o)}if(r)return{x:r.x,z:r.z,label:"CASH"}}let e=this.doors.find(s=>!s.open&&s.type!=="lock");if(e&&!this.hasKey){let s=this.keyMeshes.find(r=>r.m.visible);if(s)return{x:s.x+.5,z:s.y+.5,label:"KEYCARD"}}if(e)return{x:e.x+.5,z:e.y+.5,label:"DOOR"};let i=this.doors.find(s=>!s.open&&s.type==="lock");return i?{x:i.x+.5,z:i.y+.5,label:"LOCKED DOOR"}:{x:t.safe.x+.5,z:t.safe.y+.5,label:(this.def.safeName||"safe").toUpperCase()}}updateObjective(){let t=this.doors.find(s=>!s.open&&s.type!=="lock"),e=this.doors.find(s=>!s.open&&s.type==="lock"),i=this.hasStash?this.L.van?"Escape to the van!":"Escape through the roof hatch!":t&&!this.hasKey?"Find the keycard!":t?"Open the vault door!":e?"Pick the lock!":`Crack the ${this.def.safeName||"safe"}!`;i!==this.objText&&(this.objText=i,this.app.setObjective(i))}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let i=e.check(this,t);i!=="pending"&&(e.st=i,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,i=this.contracts.reduce((o,l)=>o+(l.st==="ok"?l.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),r=!this.spotted,a=[!0,e>=.7,r];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:r,kos:this.kos,stars:a,timeBonus:s,ghostBonus:r?1e3:0,contracts:this.contracts,contractBonus:i,diff:this.daily?"Daily "+this.daily.label:this.D.label,mult:this.D.mult,daily:!!this.daily,score:Math.round((this.lootGot+s+(r?1e3:0)+i)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var pn=n=>440*Math.pow(2,(n-69)/12),Vx=[[[0,0],[-4,1],[3,1],[-2,1]],[[0,0],[5,0],[7,0],[0,0]],[[0,0],[-2,1],[-4,1],[-5,1]],[[0,0],[-4,1],[5,0],[7,1]]],Wx=[[1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0],[1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0],[1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0]],Zo=[{prog:0,tr:0,bass:0,k:1},{prog:1,tr:2,bass:1,k:1.02},{prog:2,tr:-3,bass:2,k:.96},{prog:3,tr:-5,bass:0,k:.94},{prog:0,tr:3,bass:2,k:1.08},{prog:2,tr:1,bass:1,k:1},{prog:1,tr:-2,bass:2,k:1.1},{prog:3,tr:4,bass:1,k:1}],Jo=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.master.connect(this.lp).connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8*(this.sfxVol??1),this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32*(this.musVol??1),this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;this.apply(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setVolumes(t,e){this.musVol=t,this.sfxVol=e,this.mus&&(this.mus.gain.value=.32*t,this.sfx.gain.value=.8*e)}setMuffle(t){!this.lp||this.muffled===t||(this.muffled=t,this.lp.frequency.setTargetAtTime(t?900:2e4,this.ctx.currentTime,t?.03:.15))}setMuted(t){this.muted=t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,i={}){let s=this.ctx,r=s.currentTime+(i.delay||0),a=s.createOscillator(),o=s.createGain();a.type=i.type||"square",a.frequency.setValueAtTime(t,r),i.slide&&a.frequency.exponentialRampToValueAtTime(i.slide,r+e);let l=i.vol??.15;o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(l,r+(i.attack||.006)),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o).connect(i.dest||this.sfx),a.start(r),a.stop(r+e+.05)}noise(t,e={}){let i=this.ctx,s=i.currentTime+(e.delay||0),r=i.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;let a=i.createBiquadFilter();a.type=e.type||"bandpass",a.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&a.frequency.exponentialRampToValueAtTime(e.slide,s+t),a.Q.value=e.q??1;let o=i.createGain(),l=e.vol??.2;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(l,s+(e.attack||.005)),o.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(o).connect(e.dest||this.sfx),r.start(s,Math.random()*.5),r.stop(s+t+.05)}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let i=(r,a,o)=>this.tone(r,a,o),s=(r,a)=>this.noise(r,a);switch(t){case"step":s(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":s(.28,{vol:.3,freq:500,slide:3e3,q:2}),i(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let r=880*Math.pow(2,Math.min(e,14)/12);i(r,.07,{vol:.1}),i(r*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((r,a)=>i(r,.18,{type:"triangle",vol:.14,delay:a*.045})),s(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((r,a)=>i(r,.25,{type:"sine",vol:.16,delay:a*.06}));break;case"art":[523,659,784,1046,1318].forEach((r,a)=>i(r,.2,{type:"triangle",vol:.13,delay:a*.05}));break;case"ko":i(170,.28,{type:"sine",slide:45,vol:.55}),s(.14,{vol:.35,freq:900}),i(560,.12,{slide:260,vol:.12}),i(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":i(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":i(880,.09,{vol:.16}),i(1320,.16,{vol:.16,delay:.1});break;case"lost":i(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":s(.03,{vol:.22,freq:4e3,type:"highpass"}),i(1500+e*600,.04,{vol:.05});break;case"safe":i(110,.45,{type:"sine",slide:40,vol:.6}),s(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((r,a)=>i(r,.16,{vol:.09,delay:.1+a*.05}));for(let r=0;r<12;r++)i(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+r*.05});break;case"win":[523,659,784,1046].forEach((r,a)=>i(r,.22,{vol:.12,delay:a*.1})),[523,659,784].forEach(r=>i(r*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":i(392,.3,{type:"sawtooth",slide:370,vol:.12}),i(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),i(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let r=0;r<4;r++)i(r%2?660:880,.22,{type:"square",vol:.05,delay:r*.22});break;case"alarm":for(let r=0;r<6;r++)i(r%2?700:950,.15,{vol:.09,delay:r*.15});break;case"wake":i(300,.25,{type:"sawtooth",slide:520,vol:.1}),i(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"thunder":s(.25,{vol:.5,freq:900,type:"lowpass",q:.5}),s(2.8,{vol:.55,freq:220,slide:60,type:"lowpass",q:.7,attack:.08}),s(1.6,{vol:.3,freq:120,type:"lowpass",delay:.5,attack:.3});break;case"tvon":i(60,.4,{type:"sawtooth",vol:.06}),s(.35,{vol:.12,freq:5e3,type:"highpass",delay:.05});break;case"tv":{let r=Math.max(.05,e);i(180+Math.random()*260,.1+Math.random()*.08,{type:"sawtooth",vol:.035*r,slide:150+Math.random()*300}),Math.random()<.3&&i(600+Math.random()*500,.08,{type:"triangle",vol:.03*r,delay:.05}),s(.12,{vol:.03*r,freq:1600,q:2});break}case"mumble":for(let r=0;r<4;r++)i(150+Math.random()*90,.07,{type:"triangle",vol:.04,delay:r*.09,slide:120+Math.random()*80});break;case"clack":s(.05,{vol:.16,freq:260,type:"lowpass"}),s(.05,{vol:.13,freq:240,type:"lowpass",delay:.13}),i(70,.06,{type:"sine",vol:.08}),i(65,.06,{type:"sine",vol:.07,delay:.13});break;case"vent":i(140,.12,{type:"square",vol:.12}),s(.12,{vol:.3,freq:2200,q:3});for(let r=0;r<9;r++)s(.11,{vol:.16,freq:600+r%3*250,q:4,delay:.25+r*.14});break;case"clank":i(180,.1,{type:"square",vol:.13}),i(95,.18,{type:"triangle",vol:.14,delay:.03}),s(.16,{vol:.3,freq:2600,q:3});break;case"chopper":for(let r=0;r<34;r++){let a=r<8?r/8:1-(r-8)/30;s(.07,{vol:.08+a*.32,freq:160+a*120,type:"lowpass",delay:r*.09})}s(3,{vol:.08,freq:2400,type:"bandpass",q:.8,attack:.6});break;case"engine":s(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),i(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":i(700,.05,{vol:.08});break;case"star":i(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),i(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"throw":s(.12,{vol:.15,freq:1800,slide:900,q:1.5}),i(900,.06,{type:"triangle",vol:.06});break;case"clink":{let r=.05+e*.12;i(2400+Math.random()*300,.12,{type:"triangle",vol:r}),i(3700+Math.random()*300,.18,{type:"sine",vol:r*.7,delay:.02}),e>.5&&i(3100,.25,{type:"sine",vol:r*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((r,a)=>i(r,.12,{type:"square",vol:.07,delay:a*.06}));break;case"contract":[784,988,1175,1568].forEach((r,a)=>i(r,.16,{type:"triangle",vol:.12,delay:a*.07})),i(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":s(.35,{vol:.12,freq:300,slide:900,q:8}),i(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":i(62,.12,{type:"sine",slide:40,vol:.45}),i(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"woof":i(330,.09,{type:"sawtooth",slide:170,vol:.22}),s(.08,{freq:800,vol:.18,q:2}),i(300,.11,{type:"sawtooth",slide:150,vol:.2,delay:.15}),s(.09,{freq:700,vol:.16,q:2,delay:.15});break;case"sniff":for(let r=0;r<3;r++)s(.04,{freq:2500,vol:.05,q:3,delay:r*.07});break;case"zap":i(1400,.25,{type:"sawtooth",slide:200,vol:.18}),s(.2,{freq:3e3,vol:.2,type:"highpass"});break;case"powerdown":i(440,.8,{type:"sawtooth",slide:40,vol:.16}),s(.15,{freq:2e3,vol:.25,q:.7}),i(60,.5,{type:"sine",vol:.4,delay:.05});break;case"scream":i(900,.45,{type:"sawtooth",slide:1400,vol:.09}),i(1100,.4,{type:"square",slide:1600,vol:.04,delay:.05});break;case"smoke":i(160,.12,{type:"sine",slide:60,vol:.4}),s(1.4,{freq:4e3,slide:900,vol:.22,q:.6}),s(.5,{freq:900,vol:.12,type:"lowpass",delay:.05});break;case"pin":i(2400+e*300,.05,{type:"square",vol:.08}),i(1600+e*200,.08,{type:"triangle",vol:.1,delay:.03}),s(.03,{freq:6e3,vol:.1,type:"highpass"});break;case"slip":s(.18,{freq:2200,vol:.22,q:3}),i(320,.15,{type:"square",slide:180,vol:.08}),s(.12,{freq:1500,vol:.15,q:4,delay:.08});break;case"glass":s(.5,{freq:5e3,vol:.35,type:"highpass"}),s(.25,{freq:2500,vol:.25,q:.8,delay:.02});for(let r=0;r<8;r++)i(2500+Math.random()*3500,.12,{type:"triangle",vol:.06,delay:.03+r*.035});i(140,.2,{type:"sine",slide:60,vol:.3});break;case"radio":s(.35,{freq:1800,vol:.12,q:1.2}),i(1200,.05,{type:"square",vol:.05,delay:.02}),i(900,.05,{type:"square",vol:.05,delay:.12}),s(.15,{freq:2400,vol:.08,q:2,delay:.25});break;case"radioOk":s(.12,{freq:1800,vol:.12,q:1.2}),i(1400,.06,{type:"square",vol:.06,delay:.05}),i(1800,.08,{type:"square",vol:.06,delay:.13});break;case"jackpot":for(let r=0;r<14;r++)i([1046,1318,1568,2093][r%4]*(r>9?1.5:1),.1,{type:"square",vol:.07,delay:r*.08});for(let r=0;r<18;r++)i(2400+Math.random()*1800,.06,{type:"triangle",vol:.05,delay:.3+r*.07});i(523,.6,{type:"triangle",vol:.1,delay:1.1});break;case"nope":i(220,.12,{vol:.08}),i(180,.15,{vol:.08,delay:.1});break;case"combo":i(1320+e*80,.12,{type:"triangle",vol:.1});break}}rumble(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rb){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=.5,s.type="lowpass",s.frequency.value=260,r.gain.value=1e-4,r.gain.setTargetAtTime(.16,e.currentTime,.6),i.connect(s).connect(r).connect(this.sfx),i.start(),this.rb={src:i,g:r}}else if(!t&&this.rb){let e=this.rb,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rb=null}}}rain(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rn){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createBiquadFilter(),a=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,s.type="lowpass",s.frequency.value=1400,r.type="highpass",r.frequency.value=220,a.gain.value=1e-4,a.gain.setTargetAtTime(.09,e.currentTime,.6),i.connect(s).connect(r).connect(a).connect(this.sfx),i.start(),this.rn={src:i,g:a}}else if(!t&&this.rn){let e=this.rn,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rn=null}}}siren(t){if(this.ctx){if(t&&!this.sir){let e=this.ctx,i=e.createOscillator(),s=e.createOscillator(),r=e.createGain(),a=e.createGain();i.type="sawtooth",i.frequency.value=780,s.type="square",s.frequency.value=1.6,r.gain.value=170,s.connect(r).connect(i.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,a.gain.value=1e-4,a.gain.setTargetAtTime(.045,e.currentTime,.2),i.connect(o).connect(a).connect(this.sfx),i.start(),s.start(),this.sir={o:i,lfo:s,g:a}}else if(!t&&this.sir){let e=this.sir,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.1),e.o.stop(i+.5),e.lfo.stop(i+.5),this.sir=null}}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=this.mode==="menu"?0:this.tension|0,s=60/(this.mode==="menu"?96:([104,110,128,140][e]||104)*(Zo[this.theme||0]||Zo[0]).k)/4;for(this.lvl=this.lvl==null?e:this.lvl+Math.sign(e-this.lvl)*0,this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.step%16===0&&(this.lvl=e),this.mode==="menu"?this.menuBeat(this.step,this.nextT-t.currentTime):this.beat(this.step,this.nextT-t.currentTime,this.lvl),this.nextT+=s,this.step=(this.step+1)%64}pad(t,e,i,s){for(let r of t)for(let a of[-5,5]){let o=this.ctx,l=o.currentTime+i,h=o.createOscillator(),c=o.createGain(),u=o.createBiquadFilter();h.type="sawtooth",h.frequency.value=pn(r),h.detune.value=a,u.type="lowpass",u.frequency.value=900,c.gain.setValueAtTime(1e-4,l),c.gain.linearRampToValueAtTime(s,l+e*.35),c.gain.linearRampToValueAtTime(1e-4,l+e),h.connect(u).connect(c).connect(this.mus),h.start(l),h.stop(l+e+.05)}}beat(t,e,i){let s=this.mus,r=(p,y,b)=>this.tone(p,y,{...b,delay:e,dest:s}),a=(p,y)=>this.noise(p,{...y,delay:e,dest:s}),o=Zo[this.theme||0]||Zo[0],l=Vx[o.prog],h=t>>4&3,[c,u]=l[h],f=45+o.tr+c,d=l.map(([p,y])=>[45+o.tr+p+12,45+o.tr+p+(y?16:15),45+o.tr+p+19]),g=f+(i>=2?12:0),_=t&15,m=Wx[o.bass];if(m[_]&&r(pn(g+(_===6?7:_===13?5:0)),.18,{type:"triangle",vol:.3}),m[_]&&i>=1&&r(pn(g+12),.08,{type:"square",vol:.035}),_%4===2&&a(.03,{vol:.07,freq:7e3,type:"highpass"}),_===0&&this.pad(d[h],16*(60/(([104,110,128,140][i]||104)*o.k)/4),e,i>=2?.012:.018),i>=1){let p=d[h],y=_%3;_%2===0&&r(pn(p[y]+12),.1,{type:"sine",vol:.06}),(_===4||_===12)&&a(.04,{vol:.12,freq:2500,q:3})}i>=2&&(_%4===0&&r(120,.15,{type:"sine",slide:40,vol:.45}),(_===4||_===12)&&(a(.12,{vol:.18,freq:1800,q:.8}),r(200,.08,{type:"triangle",slide:120,vol:.12})),_%2===1&&a(.02,{vol:.06,freq:9e3,type:"highpass"}),_===14&&r(pn(g+24),.1,{type:"square",vol:.04})),i>=3&&(_===0||_===3||_===6)&&(r(pn(g+24),.12,{type:"sawtooth",vol:.05}),r(pn(g+27),.12,{type:"sawtooth",vol:.04}))}menuBeat(t,e){let i=this.mus,s=(u,f,d)=>this.tone(u,f,{...d,delay:e,dest:i}),r=(u,f)=>this.noise(u,{...f,delay:e,dest:i}),a=[[57,60,64,67],[50,53,57,60],[52,55,59,62],[57,60,64,67]],o=[45,38,40,45],l=t>>4&3,h=t&15,c=o[l];(h===0||h===7||h===10)&&s(pn(c),.25,{type:"triangle",vol:.3}),h===0&&this.pad(a[l],2.4,e,.014),(h===4||h===12)&&r(.05,{vol:.1,freq:2600,q:2.5}),h%2===0&&r(.025,{vol:.05,freq:8e3,type:"highpass"}),(h===2||h===6||h===9||h===14)&&s(pn(a[l][(h>>1)%4]+12),.12,{type:"sine",vol:.05})}stepSound(t,e=1,i=0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.sfx;if(i){let o=this.ctx.createStereoPanner();o.pan.value=i,o.connect(this.sfx),s=o}let r=(o,l)=>this.noise(o,{...l,vol:(l.vol||.1)*e,dest:s}),a=(o,l,h)=>this.tone(o,l,{...h,vol:(h.vol||.1)*e,dest:s});switch(t){case"carpet":r(.07,{vol:.05,freq:300,type:"lowpass"});break;case"tile":r(.03,{vol:.09,freq:3200,q:1.5}),a(900+Math.random()*200,.03,{type:"triangle",vol:.03});break;case"grass":r(.09,{vol:.07,freq:1400,q:.6});break;case"road":r(.06,{vol:.08,freq:900,q:.9});break;case"boot":r(.06,{vol:.1,freq:450,type:"lowpass"}),a(110,.06,{type:"sine",vol:.08});break;default:r(.05,{vol:.07,freq:600,type:"lowpass"}),a(170+Math.random()*30,.05,{type:"sine",vol:.06})}}};var Ir={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},Xx=new Set([...Object.keys(Ir),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),Ou=2.4,jo=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",l=>{Xx.has(l.code)&&l.preventDefault(),this.setTouch(!1),!l.repeat&&(Ir[l.code]&&(this.k[Ir[l.code]]=1),(l.code==="Space"||l.code.startsWith("Shift"))&&(this.dashP=!0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!0,this.actP=!0),(l.code==="Escape"||l.code==="KeyP")&&this.emit("pause"),l.code==="KeyR"&&this.emit("restart"),l.code==="KeyM"&&this.emit("mute"),(l.code==="KeyQ"||l.code==="KeyG")&&(this.throwP=!0),(l.code==="KeyC"||l.code==="KeyX")&&(this.smokeP=!0),(l.code==="KeyZ"||l.code==="ControlRight")&&(this.crouchP=!0),this.emit("key",l.code))}),addEventListener("keyup",l=>{Ir[l.code]&&(this.k[Ir[l.code]]=0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",l=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}l.button===0&&(this.act=!0,this.actP=!0),l.button===2&&(this.dashP=!0),l.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",l=>{l.button===0&&(this.act=!1),this.dragLook=!1}),addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{if(this.active&&(this.locked||this.lockFailed&&this.dragLook)){let h=l.movementX||0,c=l.movementY||0;if(performance.now()-(this.lockT||0)<150||Math.abs(h)>260||Math.abs(c)>260)return;this.lx+=h,this.ly+=c}}),addEventListener("pointermove",l=>{l.pointerType==="mouse"&&(l.movementX||l.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let l=this.locked;this.locked=document.pointerLockElement===e,this.locked&&!l&&(this.lockT=performance.now(),this.lx=0,this.ly=0),l&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let i=t.joyzone;i.addEventListener("pointerdown",l=>{if(this.joy.id===-1){l.preventDefault(),this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=0,this.joy.y=0;try{i.setPointerCapture(l.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${l.clientX}px,${l.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),i.addEventListener("pointermove",l=>{if(l.pointerId!==this.joy.id)return;let h=56,c=l.clientX-this.joy.ox,u=l.clientY-this.joy.oy,f=Math.hypot(c,u);f>h&&(this.joy.ox+=c/f*(f-h),this.joy.oy+=u/f*(f-h),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,c=c/f*h,u=u/f*h),this.joy.x=c/h,this.joy.y=u/h,t.knob.style.transform=`translate(calc(-50% + ${c}px),calc(-50% + ${u}px))`});let s=l=>{l.pointerId===this.joy.id&&this.joyEnd()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s);let r=t.lookzone;r.addEventListener("pointerdown",l=>{if(this.look.id===-1){l.preventDefault(),this.look.id=l.pointerId,this.look.x=l.clientX,this.look.y=l.clientY;try{r.setPointerCapture(l.pointerId)}catch{}}}),r.addEventListener("pointermove",l=>{l.pointerId===this.look.id&&(this.lx+=(l.clientX-this.look.x)*Ou,this.ly+=(l.clientY-this.look.y)*Ou,this.look.x=l.clientX,this.look.y=l.clientY)});let a=l=>{l.pointerId===this.look.id&&(this.look.id=-1)};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a);let o=(l,h,c)=>{l.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),l.classList.add("down"),h()});let u=()=>{l.classList.remove("down"),c&&c()};l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u),l.addEventListener("pointerleave",u)};o(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),o(t.bDash,()=>{this.dashP=!0}),o(t.bThrow,()=>{this.throwP=!0}),o(t.bSmoke,()=>{this.smokeP=!0}),o(t.bSneak,()=>{this.crouchP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),i=(this.k.d||0)-(this.k.u||0);if(e||i){let s=Math.hypot(e,i);e/=s,i/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let r=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*r,i=this.joy.y*r}}return t.x=e,t.y=i,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeCrouch(){let t=this.crouchP;return this.crouchP=!1,t}consumeSmoke(){let t=this.smokeP;return this.smokeP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.actP=!1,this.dashP=!1,this.throwP=!1,this.smokeP=!1,this.lx=0,this.ly=0}};var kr=new Se,Fu=new Ut,Qo=new X,tl=class{constructor(t,e=360){this.max=e,this.mesh=new qn(new ae(1,1,1),new Lt,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,Fu.set(16777215)),t.add(this.mesh),this.list=[]}burst(t,e,i,s={}){let r=s.count??10,a=s.colors||[16777215];for(let o=0;o<r&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,h=Ee(.4,1)*(s.speed??3);this.list.push({x:t+Ee(-1,1)*(s.spread??.1),y:e,z:i+Ee(-1,1)*(s.spread??.1),vx:Math.cos(l)*h,vy:Ee(.5,1)*(s.up??3),vz:Math.sin(l)*h,g:s.gravity??9,life:Ee(.6,1)*(s.life??.7),t:0,s:Ee(.6,1.1)*(s.size??.12),c:a[Math.random()*a.length|0],rx:Ee(0,6),rs:Ee(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?Ee(2,5):0})}}update(t){let e=this.list,i=0;for(let s=e.length-1;s>=0;s--){let r=e[s];if(r.t+=t,r.t>=r.life){e[s]=e[e.length-1],e.pop();continue}}for(let s of e){let r=Math.exp(-s.drag*t);s.vx*=r,s.vz*=r,s.vy-=s.g*t,s.flut&&(s.vy=Math.max(s.vy,-.9),s.vx+=Math.sin(s.t*s.flut*2)*t*1.5),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.03&&(s.y=.03,s.vy*=-.4,s.vx*=.7,s.vz*=.7),s.rx+=s.rs*t;let a=1-s.t/s.life,o=s.s*Math.min(1,a*2.5);kr.position.set(s.x,s.y,s.z),kr.rotation.set(s.flut?Math.sin(s.rx)*.8:s.rx,s.rx*.7,s.flut?Math.cos(s.rx*.7)*.6:0),kr.scale.set(o*s.kx,o*s.ky,o*s.kz),kr.updateMatrix(),this.mesh.setMatrixAt(i,kr.matrix),this.mesh.setColorAt(i,Fu.setHex(s.c)),i++}this.mesh.count=i,i&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},el=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t*(this.scale??1))}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},il=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,i,s,r="",a=1){let o=this.pool.pop();o||(o=document.createElement("div"),this.layer.appendChild(o)),o.className="ft "+r,o.textContent=t,o.style.opacity="1",o.style.display="",o.style.animation="none",o.offsetWidth,o.style.animation="",this.live.push({el:o,x:e,y:i,z:s,t:0,life:a})}update(t,e,i,s){for(let r=this.live.length-1;r>=0;r--){let a=this.live[r];if(a.t+=t,a.y+=t*.9,a.t>=a.life){a.el.style.display="none",this.pool.push(a.el),this.live.splice(r,1);continue}Qo.set(a.x,a.y,a.z).project(e),a.el.style.visibility=Qo.z>1?"hidden":"",a.el.style.transform=`translate(${(Qo.x+1)/2*i}px,${(1-Qo.y)/2*s}px) translate(-50%,-50%)`,a.t>a.life*.6&&(a.el.style.opacity=String(1-(a.t-a.life*.6)/(a.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var nl="safehouse-heist-v1",Oi=null,sl=!1,Dr=!1,ne={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let n=window.CrazyGames&&window.CrazyGames.SDK;if(!n)return;await Promise.race([n.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=n.environment,(this.env==="crazygames"||this.env==="local")&&(Oi=n,this.available=!0)}catch(n){console.warn("[SDK] not available:",n&&n.message)}},_c(n){if(Oi)try{n(Oi)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(n=>n.game.loadingStart())},loadingStop(){this._c(n=>n.game.loadingStop())},gameplayStart(){sl||(sl=!0,this._c(n=>n.game.gameplayStart()))},gameplayStop(){sl&&(sl=!1,this._c(n=>n.game.gameplayStop()))},happytime(){this._c(n=>n.game.happytime())},ad(n){return new Promise(t=>{if(!Oi||!Dr){t(!1);return}let e=!1,i=s=>{e&&this.hooks.adEnd(),t(s)};try{Oi.ad.requestAd(n,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>i(!0),adError:s=>{console.warn("[SDK] ad error",s),i(!1)}})}catch{i(!1)}})},load(){try{let n=null;return Oi&&Oi.data&&(n=Oi.data.getItem(nl)),n==null&&(n=localStorage.getItem(nl)),n&&JSON.parse(n)||{}}catch{return{}}},store(n){let t=JSON.stringify(n);try{Oi&&Oi.data&&Oi.data.setItem(nl,t)}catch{}try{localStorage.setItem(nl,t)}catch{}}};var ji=[{id:"safehouse",num:1,owner:!0,dog:!0,name:"Safe House",load:()=>import("./c-FL2VXH4R.js")},{id:"bank",num:2,name:"The Bank",unlock:"safehouse",load:()=>import("./c-UA7ROTIC.js")},{id:"jewelry",num:3,name:"Jewelry Store",unlock:"bank",load:()=>import("./c-Y3VF5QVP.js")},{id:"museum",num:4,dog:!0,name:"The Museum",unlock:"jewelry",load:()=>import("./c-EHV74VXP.js")},{id:"casino",num:5,name:"The Casino",unlock:"museum",load:()=>import("./c-2SIVZS45.js")},{id:"penthouse",num:6,owner:!0,name:"The Penthouse",unlock:"casino",load:()=>import("./c-4NVW5VSH.js")},{id:"train",num:7,name:"Night Train",unlock:"penthouse",load:()=>import("./c-NPY7BHPC.js")},{id:"warehouse",num:8,dog:!0,name:"The Warehouse",unlock:"train",load:()=>import("./c-54A6G2KB.js")},{id:"mansion",num:9,name:"Mansion Gala",unlock:"warehouse",load:()=>import("./c-3WBRBSUQ.js")}],Yc={};async function zu(n){return Yc[n]||(Yc[n]=(await ji[n].load()).default),Yc[n]}var qx={sleeve:3123354,sleeve2:2526336,cuff:2060134,glove:2763837,glove2:3816786,bar:14168890,barHi:16747146,band:15905076},rl=class{constructor(){this.scene=new Xn,this.camera=new Ze(60,1,.01,10),this.hemi=new $n(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Kn(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new Ae({vertexColors:!0});this.root=new Ot,this.scene.add(this.root),this.R=new Ot,this.R.position.set(.2,-.27,0),this.R.rotation.y=.16,this.root.add(this.R),this.L=new Ot,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L),this.setOutfit(null),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}setOutfit(t){t=t||qx;let e=this.mat;for(let h of this.parts||[])h.parent.remove(h),h.geometry.dispose();let i=h=>{let c=new Bt;if(c.box(0,-.075,-.285,.14,.14,.17,t.sleeve,{faces:63}),c.box(0,-.082,-.24,.152,.152,.05,t.sleeve2,{faces:63}),c.box(0,-.08,-.36,.148,.148,.1,t.sleeve,{faces:63}),c.box(0,-.082,-.44,.155,.155,.07,t.cuff,{faces:63}),c.box(0,-.082,-.448,.158,.02,.05,t.band,{faces:63}),h){c.box(0,-.065,-.5,.12,.13,.05,t.glove,{faces:63}),c.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),c.box(0,-.07,-.57,.15,.06,.13,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.055+u*.037,-.072,-.67,.032,.05,.09,t.glove,{faces:63,top:t.glove2});c.box(.09,-.07,-.56,.045,.05,.08,t.glove,{faces:63,ry:-.5})}else{c.box(0,-.07,-.56,.13,.12,.14,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.045+u*.03,-.01,-.6,.027,.03,.05,t.glove2,{faces:63});c.box(-.07,-.04,-.55,.04,.05,.08,t.glove,{faces:63})}return c.build()},s=new bt(i(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let r=new Bt,a=12108496,o=8029334;r.box(0,-.2,0,.034,.08,.034,a,{faces:63}),r.box(0,-.235,.012,.03,.04,.02,o,{faces:63}),r.box(0,-.12,0,.042,.42,.042,t.bar,{faces:63}),r.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),r.box(0,.3,0,.038,.07,.038,a,{faces:63}),r.box(0,.36,-.035,.036,.036,.1,a,{faces:63,top:14673647}),r.box(0,.33,-.095,.034,.05,.03,a,{faces:63}),r.box(0,.305,-.1,.03,.03,.022,a,{faces:63}),r.box(.02,-.05,.022,.006,.3,.002,t.barHi,{faces:16}),this.bar=new bt(r.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.75,.95,.75),this.bar.rotation.set(-.35,0,-.25),this.R.add(this.bar);let l=new bt(i(!0),e);l.scale.set(.56,.6,1),this.L.add(l),this.parts=[s,this.bar,l]}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let i=this.R,s=this.L;this.swX=we(this.swX,ze(-e.lookX*9e-4,-.06,.06),10,t),this.swY=we(this.swY,ze(e.lookY*9e-4,-.06,.06),10,t),this.down=we(this.down,e.busted?.7:0,6,t),this.kick=we(this.kick,e.dash?1:0,14,t);let r=e.move,a=Math.cos(e.bob)*.014*r,o=-Math.abs(Math.sin(e.bob))*.02*r+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+a,this.swY+o-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let l=.14,h=0,c=0;if(e.punch>0){let f=1-e.punch;f<.3?l=f/.3*.9:f<.55?l=.9-(f-.3)/.25*1.9:l=-1+(f-.55)/.45*1.14,h=-l*.3}else e.crack&&(l=.35+Math.sin(this.t*38)*.08,h=Math.sin(this.t*23)*.1,c=-.06);i.rotation.x=we(i.rotation.x,l,e.punch>0?40:14,t),i.rotation.z=we(i.rotation.z,h,20,t),i.position.z=we(i.position.z,c,12,t);let u=e.grab>0||e.crack?1:0;this.lIn=we(this.lIn,u,u?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var Nn=[["Rookie",0],["Pickpocket",40],["Burglar",120],["Safecracker",250],["Cat Burglar",450],["Infiltrator",750],["Phantom",1150],["Heist Pro",1700],["Vault Breaker",2400],["Mastermind",3300],["Kingpin",4500],["Legend",6e3]];function al(n){let t=0;for(;t+1<Nn.length&&n>=Nn[t+1][1];)t++;let e=Nn[t][1],i=t+1<Nn.length?Nn[t+1][1]:e;return{i:t,name:Nn[t][0],lvl:t+1,frac:i>e?(n-e)/(i-e):1,next:t+1<Nn.length?Nn[t+1][0]:null,toNext:i-n}}var Bu=(n,t,e)=>n?Math.max(10,Math.round(t/100)):4+Math.round((e||0)/250);var Hu=n=>String(n).padStart(2,"0"),Un=(n=new Date)=>`${n.getFullYear()}${Hu(n.getMonth()+1)}${Hu(n.getDate())}`,Nr=()=>{let n=new Date;return n.setDate(n.getDate()-1),Un(n)},Yx=(n=new Date)=>n.toLocaleDateString("en-US",{month:"short",day:"numeric"}),$c=[{id:"paranoid",name:"Paranoid Guards",desc:"Guards see 30% further",apply:n=>n.guards.forEach(t=>{t.range*=1.3})},{id:"insomniac",needs:"owner",name:"Insomniac Owner",desc:"The owner is awake and patrolling",apply:n=>n.guards.forEach(t=>{if(t.state!=="sleep")return;let e=t.def.path[0];t.state="patrol",t.x=e[0]+.5,t.z=e[1]+.5,t.wp=1,t.c.root.rotation.x=0,t.c.root.position.y=0})},{id:"goldrush",name:"Gold Rush",desc:"Gold and jewels are worth 3x",apply:n=>{for(let t of n.loot)(t.type==="gold"||t.type==="jewel")&&(n.lootTotal+=t.value*2,t.value*=3)}},{id:"butter",name:"Butterfingers",desc:"No coins this time",apply:n=>{n.coinsLeft=0}},{id:"rush",name:"Rapid Response",desc:"Police arrive in 20s",apply:n=>{n.alarmTotal=20}},{id:"hound",needs:"dog",name:"Hungry Hound",desc:"The dog is 50% faster",apply:n=>n.dogs.forEach(t=>{t.mul=1.5})}];function Gu(n=[{idx:0,owner:!0,dog:!0}]){let t=Un(),e=Di(parseInt(t,10)*7919),i=n[e()*n.length|0]||n[0],s=$c.filter(a=>!a.needs||i[a.needs]),r=s[e()*s.length|0];return{key:t,label:Yx(),mutator:r,level:i.idx,seed:e()*1e9|0}}function ol(){let n=new Date,t=new Date(n);t.setHours(24,0,0,0);let e=Math.max(0,(t-n)/1e3),i=Math.floor(e/3600),s=Math.floor(e%3600/60);return i?`${i}h ${s}m`:`${s}m`}var Vu=[{id:"ko",n:5,text:"Knock out 5 guards",v:n=>n.kos},{id:"loot",n:8e3,text:"Steal $8,000 of loot",v:n=>Math.round(n.loot||0),money:!0},{id:"esc",n:3,text:"Escape 3 heists",v:n=>n.win?1:0},{id:"ghost",n:1,text:"Escape without being spotted",v:n=>n.win&&n.ghost?1:0},{id:"pick",n:3,text:"Pickpocket 3 guards",v:n=>n.picks||0},{id:"vent",n:2,text:"Crawl through 2 air vents",v:n=>n.vents||0},{id:"close",n:3,text:"Survive 3 close calls",v:n=>n.close||0},{id:"coin",n:6,text:"Throw 6 coins",v:n=>n.coins||0},{id:"hide",n:3,text:"Hide in a wardrobe 3 times",v:n=>n.hides||0},{id:"ctr",n:4,text:"Complete 4 contracts",v:n=>n.contractsDone||0},{id:"fast",n:1,text:"Escape in under 90 seconds",v:n=>n.win&&n.time<90?1:0},{id:"radio",n:2,text:"Fake 2 radio check-ins",v:n=>n.radio||0},{id:"sweep",n:1,text:"Escape with 70% of the loot",v:n=>n.win&&n.frac>=.7?1:0}],ll=1500,cl=2500;function Ur(n){let t=Un();if(!n.jobs||n.jobs.key!==t){let e=Di(parseInt(t,10)*31+7),i=Vu.slice(),s=[];for(;s.length<3;)s.push(i.splice(e()*i.length|0,1)[0].id);n.jobs={key:t,ids:s,prog:{},done:{},bonus:!1}}return n.jobs}var hl=n=>Vu.find(t=>t.id===n);function Kc(n,t){let e=Ur(n),i=[];for(let r of e.ids){if(e.done[r])continue;let a=hl(r);e.prog[r]=Math.min(a.n,(e.prog[r]||0)+(a.v(t)||0)),e.prog[r]>=a.n&&(e.done[r]=!0,i.push(a),n.cash=(n.cash||0)+ll)}let s=!1;return!e.bonus&&e.ids.every(r=>e.done[r])&&(e.bonus=s=!0,n.cash=(n.cash||0)+cl),{fresh:i,bonus:s}}var Or=[{id:"coins",icon:"\u{1FA99}",name:"Coin Pouch",desc:"+1 coin per run",prices:[3e3,8e3,2e4]},{id:"smoke",icon:"\u{1F4A8}",name:"Smoke Belt",desc:"+1 smoke bomb per run",prices:[6e3,18e3]},{id:"shoes",icon:"\u{1F45F}",name:"Soft Shoes",desc:"Sneak 15% faster",prices:[4e3,1e4,25e3]},{id:"pick",icon:"\u{1F513}",name:"Lockpick Kit",desc:"Wider pick zone, crack safes 12% faster",prices:[3500,9e3,22e3]},{id:"tailor",icon:"\u{1F574}",name:"Tailor",desc:"+8 s in a guard uniform",prices:[5e3,15e3]}],Fr=(n,t)=>Math.min((n.gear||{})[t]||0,Or.find(e=>e.id===t).prices.length),fl=(n,t)=>t.prices[Fr(n,t.id)]??null;function Wu(n,t){let e=i=>t?Fr(n,i):0;return{coins:e("coins"),smoke:e("smoke"),sneak:1+.15*e("shoes"),pickW:1+.15*e("pick"),crack:1+.12*e("pick"),disguise:8*e("tailor")}}var Fs=[{id:"first",icon:"\u{1F4B0}",name:"First Score",desc:"Escape with the stash",check:(n,t)=>t.win},{id:"ghost",icon:"\u{1F47B}",name:"Ghost",desc:"Escape without ever being spotted",check:(n,t)=>t.win&&t.ghost},{id:"speed",icon:"\u26A1",name:"Speed Demon",desc:"Escape in under 45 seconds",check:(n,t)=>t.win&&t.time<45},{id:"pacifist",icon:"\u{1F54A}\uFE0F",name:"Pacifist",desc:"Escape without knocking anyone out",check:(n,t)=>t.win&&t.kos===0},{id:"sweep",icon:"\u{1F9F9}",name:"Clean Sweep",desc:"Escape with 100% of the loot",check:(n,t)=>t.win&&t.frac>=.999},{id:"contracts",icon:"\u{1F4CB}",name:"Overachiever",desc:"Complete all 3 contracts in one run",check:(n,t)=>t.win&&t.contractsDone>=3},{id:"bank",icon:"\u{1F3E6}",name:"Bank Job",desc:"Escape from the Bank",check:(n,t)=>t.win&&t.level==="bank"},{id:"phantom",icon:"\u{1F3AD}",name:"Phantom of the Vault",desc:"Ghost the Bank",check:(n,t)=>t.win&&t.level==="bank"&&t.ghost},{id:"jewelry",icon:"\u{1F48E}",name:"Night Owl",desc:"Escape from the Jewelry Store",check:(n,t)=>t.win&&t.level==="jewelry"},{id:"radio3",icon:"\u{1F4FB}",name:"Smooth Talker",desc:"Fake 3 radio check-ins (total)",check:n=>(n.radio||0)>=3},{id:"museum",icon:"\u{1F3DB}\uFE0F",name:"Night at the Museum",desc:"Escape from the Museum",check:(n,t)=>t.win&&t.level==="museum"},{id:"penthouse",icon:"\u{1F303}",name:"Sky High",desc:"Escape from the Penthouse",check:(n,t)=>t.win&&t.level==="penthouse"},{id:"laser",icon:"\u{1F534}",name:"Laser Dancer",desc:"Escape the Penthouse with the power on and no lasers tripped",check:(n,t)=>t.win&&t.level==="penthouse"&&!t.power&&t.lasers===0},{id:"vent5",icon:"\u{1F573}\uFE0F",name:"Duct Rat",desc:"Crawl through 5 air vents (total)",check:n=>(n.vents||0)>=5},{id:"inside",icon:"\u{1F574}",name:"Inside Man",desc:"Escape while wearing a guard uniform",check:(n,t)=>t.win&&t.disguised},{id:"train",icon:"\u{1F682}",name:"Great Train Robbery",desc:"Escape from the Night Train",check:(n,t)=>t.win&&t.level==="train"},{id:"warehouse",icon:"\u{1F4E6}",name:"Dock Rat",desc:"Escape from the Warehouse",check:(n,t)=>t.win&&t.level==="warehouse"},{id:"close10",icon:"\u{1F605}",name:"Nerves of Steel",desc:"Survive 10 close calls (total)",check:n=>(n.close||0)>=10},{id:"triple",icon:"\u{1F4A5}",name:"Combo Breaker",desc:"Pull off a triple takedown",check:(n,t)=>(t.streak||0)>=3},{id:"kitted",icon:"\u{1F9F0}",name:"Fully Kitted",desc:"Buy 5 gear upgrades",check:(n,t,e)=>Object.values(e.gear||{}).reduce((i,s)=>i+s,0)>=5},{id:"loyal",icon:"\u{1F4C5}",name:"Loyal Crew",desc:"Log in 7 days in a row",check:(n,t,e)=>!!(e.login&&e.login.n>=7)},{id:"photo",icon:"\u{1F6A8}",name:"Photo Finish",desc:"Escape with under 10 s left on the police timer",check:(n,t)=>t.win&&t.photo},{id:"mansion",icon:"\u{1F942}",name:"Party Crasher",desc:"Escape from the Mansion Gala",check:(n,t)=>t.win&&t.level==="mansion"},{id:"casino",icon:"\u{1F3B0}",name:"High Roller",desc:"Escape from the Casino",check:(n,t)=>t.win&&t.level==="casino"},{id:"pick10",icon:"\u{1F45B}",name:"Sticky Fingers",desc:"Pickpocket 10 guards (total)",check:n=>(n.picks||0)>=10},{id:"iron",icon:"\u{1F6E1}\uFE0F",name:"Iron Will",desc:"Escape on Ironman",check:(n,t)=>t.win&&t.diff==="ironman"},{id:"hard",icon:"\u{1F480}",name:"Hardened",desc:"Escape on Hard",check:(n,t)=>t.win&&t.diff==="hard"},{id:"ko10",icon:"\u{1F94A}",name:"Lights Out",desc:"Knock out 10 guards (total)",check:n=>n.kos>=10},{id:"loot50",icon:"\u{1F4B5}",name:"Big Spender",desc:"Steal $50,000 in total",check:n=>n.loot>=5e4},{id:"loot250",icon:"\u{1F911}",name:"Fat Stacks",desc:"Steal $250,000 in total",check:n=>n.loot>=25e4},{id:"hide5",icon:"\u{1F6AA}",name:"Wardrobe Ninja",desc:"Hide in wardrobes 5 times",check:n=>n.hides>=5},{id:"smoke3",icon:"\u{1F4A8}",name:"Now You See Me",desc:"Use 3 smoke bombs",check:n=>n.smokes>=3},{id:"streak3",icon:"\u{1F525}",name:"Regular",desc:"Reach a 3 day daily streak",check:(n,t,e)=>!!(e.streak&&e.streak.n>=3)},{id:"busted10",icon:"\u{1F693}",name:"Frequent Flyer",desc:"Get busted 10 times",check:n=>n.busts>=10}],Zc=()=>({runs:0,escapes:0,busts:0,loot:0,kos:0,hides:0,smokes:0,coins:0,contracts:0,best:{}});function Jc(n,t){let e=n.stats=Object.assign(Zc(),n.stats||{});if(e.runs++,t.win){e.escapes++,e.loot+=t.loot,e.contracts+=t.contractsDone;let r=e.best[t.level];(!r||t.time<r)&&(e.best[t.level]=t.time)}else e.busts++;e.radio=(e.radio||0)+(t.radio||0),e.picks=(e.picks||0)+(t.picks||0),e.vents=(e.vents||0)+(t.vents||0),e.close=(e.close||0)+(t.close||0),e.kos+=t.kos,e.hides+=t.hides,e.smokes+=t.smokes,e.coins+=t.coins;let i=n.ach=n.ach||{},s=[];for(let r of Fs)!i[r.id]&&r.check(e,t,n)&&(i[r.id]=Date.now(),s.push(r));return s}var On=[{id:"classic",name:"Classic",sleeve:3123354,glove:2763837,bar:14168890,band:15905076},{id:"midnight",name:"Midnight",sleeve:3095138,glove:1447711,bar:9082020,band:6272255,need:1},{id:"hazard",name:"Hazard",sleeve:16747050,glove:2763837,bar:15911244,band:2237487,need:3},{id:"camo",name:"Woodland",sleeve:5929530,glove:5913126,bar:4872746,band:13213795,ach:"ghost"},{id:"bubblegum",name:"Bubblegum",sleeve:16748480,glove:16052714,bar:16732064,band:16777215,ach:"pacifist"},{id:"tux",name:"Black Tie",sleeve:2237487,glove:16052714,bar:11745617,band:16777215,ach:"bank"},{id:"neon",name:"Neon Laser",sleeve:1709104,glove:789014,bar:16722522,band:3866576,ach:"laser"},{id:"gala",name:"Gala Night",sleeve:16052714,glove:1512989,bar:14267482,band:11745617,ach:"mansion"},{id:"chain",name:"Gold Chain",sleeve:2763837,glove:15250234,bar:16766810,band:15250234,ach:"loyal"},{id:"dock",name:"Dockhand",sleeve:13194794,glove:3817290,bar:5925498,band:15911244,ach:"warehouse"},{id:"royal",name:"Royal",sleeve:6965976,glove:14267482,bar:15250234,band:14267482,need:6},{id:"golden",name:"Golden Boy",sleeve:15250234,glove:15914122,bar:16766810,band:16777215,need:10}],ul=n=>({sleeve:n.sleeve,sleeve2:yt(n.sleeve,.85),cuff:yt(n.sleeve,.66),glove:n.glove,glove2:yt(n.glove,1.35)||3816786,bar:n.bar,barHi:yt(n.bar,1.35),band:n.band});function zs(n,t){let e=t.ach||{},i=Object.keys(e).length;return n.ach?!!e[n.ach]:!n.need||i>=n.need}var Xu=(n,t)=>n.ach?`Achievement: ${(t.find(e=>e.id===n.ach)||{}).name}`:`${n.need} ${n.need===1?"trophy":"trophies"}`;var Qi=[{text:["Move with WASD","Drag the left side to move"],done:n=>Math.hypot(n.player.x-n.L.start.x-.5,n.player.z-n.L.start.y-.5)>1.6},{text:["Move the mouse to look around","Drag the right side to look around"],done:n=>n.lookTotal>1.2},{text:["Walk over cash to grab it","Walk over cash to grab it"],done:n=>n.lootGot>0},{text:["Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)","Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)"],done:n=>n.kos>0||n.doors.some(t=>t.type==="lock"&&(t.open||Math.hypot(n.player.x-t.x-.5,n.player.z-t.y-.5)<2.2))},{text:["Pick the lock: press E when the pin is in the green","Pick the lock: tap \u270B when the pin is in the green"],done:n=>n.doors.every(t=>t.type!=="lock"||t.open)},{text:["Hold E at the safe to crack it","Hold \u270B at the safe to crack it"],done:n=>n.hasStash},{text:["Run back to the van with the stash!","Run back to the van with the stash!"],done:n=>n.state==="escape"}];var F=n=>document.getElementById(n),$x={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],thunder:["\u26A1 Thunder covers your noise for a moment. Dash now!","\u26A1 Thunder covers your noise for a moment. Dash now!"],uniform:["Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar","Hold \u270B on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar"],ctr:["\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash","\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash"],vent:["Air vent! E to crawl through to another room, unseen","Air vent! Tap the hand to crawl through, unseen"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? E / Click = knock out!","Behind a guard? Tap the hand = knock out!"],safe:["Hold E / Mouse to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],dog:["A guard dog! It follows your scent and barks. Coins distract it.","A guard dog! It follows your scent and barks. Coins distract it."],clerk:["The clerk is running for the alarm button! Knock them out first!","The clerk is running for the alarm button! Knock them out first!"],camhit:["Security camera! Hit it with a thrown coin (Q) to knock it out for 12s","Security camera! Hit it with a thrown coin to knock it out for 12s"],pocket:["Behind a guard: tap E to knock out, HOLD E to pickpocket his wallet (or spare keycard)","Behind a guard: tap \u270B to knock out, HOLD \u270B to pickpocket his wallet"],slot:["Slot machine! Hold E to hit a noisy jackpot that lures guards away","Slot machine! Hold \u270B to hit a noisy jackpot that lures guards away"],spot:["Spotlight! Stay out of the moving light pools, or cut the power at the breaker","Spotlight! Stay out of the moving light pools, or cut the power at the breaker"],radio:["A knocked-out guard's radio is calling! Hold E next to him to answer, or backup comes","A knocked-out guard's radio is calling! Hold \u270B next to him to answer, or backup comes"],case:["Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm","Hold \u270B to smash a display case. Loud! Guards who see a broken case raise the alarm"],pick:["Locked! Press E when the pin is in the green zone. Slips are noisy!","Locked! Tap the hand when the pin is in the green zone. Slips are noisy!"],laser:["Laser grid! Time your run, or cut the power at the breaker in the security room","Laser grid! Time your run, or cut the power at the breaker in the security room"],key:["The vault door needs a keycard. Search the offices!","The vault door needs a keycard. Search the offices!"],door:["Got the keycard! Swipe it at the vault door","Got the keycard! Swipe it at the vault door"],drill:["Cracking the vault is LOUD. Guards will hear it!","Cracking the vault is LOUD. Guards will hear it!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],heavy:["Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them","Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them"],sneak:["Z: crouch-sneak. Slower and quieter, and crouching behind counters or tables hides you","Tap \u{1F9B6} to sneak. Slower and quieter, and crouching behind low cover hides you"],smoke:["C: drop a smoke bomb. Guards cannot see into or through the cloud!","Tap \u{1F4A8} to drop a smoke bomb. Guards cannot see through it!"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},jc=class{constructor(){this.els={canvas:F("c"),fxl:F("fxl"),joyzone:F("joyzone"),lookzone:F("lookzone"),joy:F("joy"),knob:F("knob"),bAct:F("bAct"),bDash:F("bDash"),bThrow:F("bThrow"),bSmoke:F("bSmoke"),bSneak:F("bSneak")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new X(15,30,40),this.camLook=new X(15,0,9),this._f=new X,this._d=new X,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await ne.init(),ne.loadingStart(),ne.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},ne.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=ne.load(),this.save.best=this.save.best||{},this.diff=Ns[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new Bo({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(this.dpr),e.toneMapping=xr,e.toneMappingExposure=1.15,this.scene=new Xn,this.scene.background=new Ut(16038282),this.scene.fog=new er(15778970,16,70),this.sky=lu(),this.scene.add(this.sky),this.nightSky=cu(),this.scene.add(this.nightSky),e.autoClear=!1,this.camera=new Ze(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new rl,this.hemi=new $n(16770760,8022152,1.8),this.scene.add(this.hemi);let i=this.sun=new Kn(16769208,1.4);i.position.set(-4,10,6),this.scene.add(i),this.audio=new Jo;let s={ko:35,zap:[60,40,60],alert:25,bust:[90,60,160],alarm:[120,80,120],safe:[30,40,50],dash:12,glass:40,thunder:[20,40,60],clank:25,jackpot:[20,30,20,30,40],win:[30,50,80]},r=this.audio.play.bind(this.audio);this.audio.play=(a,o)=>{r(a,o);let l=s[a];if(l&&this.input&&this.input.touch&&this.shake&&this.shake.scale>0&&navigator.vibrate)try{navigator.vibrate(l)}catch{}},this.audio.setMuted(!!this.save.muted),this.input=new jo(this.els),this.particles=new tl(this.scene),this.shake=new el,this.floaters=new il(this.els.fxl),this.dust=new Vo(this.scene),this.rain=new Wo(this.scene),this.boltK=0,this.applySettings(),this.game=new Ko(this),this.levelIdx=0,await this.useLevel(0),this.bindUI(),this.applyOutfit(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),ne.loadingStop(),F("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,i)=>F(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),i()});t("bPlay",()=>this.playSel());for(let e of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])F(e).addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.selectPin(e)});for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",i=>{if(i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),e.dataset.d==="ironman"&&!this.ironUnlocked()){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.diff=e.dataset.d,this.save.diff=this.diff,ne.store(this.save),this.showMenu()});t("bResume",()=>this.resume()),t("bSet",()=>this.showSettings()),t("bPSet",()=>this.showSettings()),t("bSetBack",()=>{this.setFrom==="pause"?(this.state="pause",this.screen("pause")):this.showMenu()});for(let e of document.querySelectorAll("#settings input"))e.addEventListener("input",()=>this.readSettings());t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>{this.mode==="daily"?this.showMenu():this.levelIdx===0&&this.bankUnlocked()?this.start("classic",1):this.levelIdx===1&&this.jewelryUnlocked()?this.start("classic",2):this.levelIdx===2&&this.museumUnlocked()?this.start("classic",3):this.levelIdx===3&&this.casinoUnlocked()?this.start("classic",4):this.levelIdx===4&&this.penthouseUnlocked()?this.start("classic",5):this.levelIdx===5&&this.trainUnlocked()?this.start("classic",6):this.levelIdx===6&&this.warehouseUnlocked()?this.start("classic",7):this.levelIdx===7&&this.mansionUnlocked()?this.start("classic",8):this.showSoon()}),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bEasy",()=>{this.diff="easy",this.bustStreak=0,this.start("classic",this.levelIdx)}),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bTrophy",()=>this.showTrophies()),t("bOutfit",()=>this.showOutfits()),t("bOfBack",()=>this.showMenu()),t("bTut",()=>this.start("tutorial",0)),F("tut").addEventListener("pointerdown",e=>{this.input.touch&&this.game.tut&&(e.stopPropagation(),this.skipTutorial())}),t("bTrBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{e==="KeyT"&&this.state==="play"&&this.game.tut&&this.skipTutorial(),(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.playSel()):e==="Enter"&&this.state==="result"?(this.audio.unlock(),F("bNext").click()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}screen(t){for(let i of document.querySelectorAll(".screen"))i.classList.toggle("hidden",i.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),F("fp").classList.toggle("hidden",!e),F("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),F("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){if(this.lastTutLevel=null,this.save.tutDone){let b=Un(),x=this.save.login||{last:"",n:0};if(x.last!==b){x.n=x.last===Nr()?x.n+1:1,x.last=b,this.save.login=x;let S=500*Math.min(x.n,7);this.save.cash=(this.save.cash||0)+S,ne.store(this.save);let w=F("bonus");w.querySelector("b").textContent="+"+ie(S);let v=(x.n-1)%7+1;w.querySelector(".days").innerHTML=[1,2,3,4,5,6,7].map(M=>`<i class="${M<v?"on":M===v?"now":""}">${M===7?"\u{1F9E4}":M}</i>`).join(""),w.querySelector("em").textContent=x.n>=7?`Day ${x.n} in a row! Max bonus`:`Day ${x.n} of 7 \xB7 day 7 unlocks the Gold Chain outfit`,w.classList.remove("hidden"),w.style.animation="none",w.offsetWidth,w.style.animation="",clearTimeout(this.bonT),this.bonT=setTimeout(()=>w.classList.add("hidden"),4200),setTimeout(()=>{this.audio.play("safe"),this.shake.add(.15)},250)}}ne.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[gi("safehouse",this.diff)],e=this.bankUnlocked(),i=this.save.best[gi("bank",this.diff)];F("lvl2").classList.toggle("lock",!e),F("lvl2art").textContent=e?"\u{1F3E6}":"\u{1F512}",F("lvl2stars").innerHTML=e?this.starsHTML(i?i.stars:0):"",F("lvl2best").textContent=e?i?"Best "+ie(i.score):"New!":"Escape Safe House to unlock";let s=this.jewelryUnlocked(),r=this.save.best[gi("jewelry",this.diff)];F("lvl3").classList.toggle("lock",!s),F("lvl3art").textContent=s?"\u{1F48E}":"\u{1F512}",F("lvl3stars").innerHTML=s?this.starsHTML(r?r.stars:0):"";let a=this.casinoUnlocked(),o=this.save.best[gi("casino",this.diff)];F("lvl5").classList.toggle("lock",!a),F("lvl5art").textContent=a?"\u{1F3B0}":"\u{1F512}",F("lvl5stars").innerHTML=a?this.starsHTML(o?o.stars:0):"",F("lvl5best").textContent=a?o?"Best "+ie(o.score):"New!":"Escape the Museum to unlock";let l=this.mansionUnlocked(),h=this.save.best[gi("mansion",this.diff)];F("lvl9").classList.toggle("lock",!l),F("lvl9art").textContent=l?"\u{1F942}":"\u{1F512}",F("lvl9stars").innerHTML=l?this.starsHTML(h?h.stars:0):"",F("lvl9best").textContent=l?h?"Best "+ie(h.score):"New!":"Escape the Warehouse to unlock";let c=this.warehouseUnlocked(),u=this.save.best[gi("warehouse",this.diff)];F("lvl8").classList.toggle("lock",!c),F("lvl8art").textContent=c?"\u{1F4E6}":"\u{1F512}",F("lvl8stars").innerHTML=c?this.starsHTML(u?u.stars:0):"",F("lvl8best").textContent=c?u?"Best "+ie(u.score):"New!":"Escape the Night Train to unlock";let f=this.trainUnlocked(),d=this.save.best[gi("train",this.diff)];F("lvl7").classList.toggle("lock",!f),F("lvl7art").textContent=f?"\u{1F682}":"\u{1F512}",F("lvl7stars").innerHTML=f?this.starsHTML(d?d.stars:0):"",F("lvl7best").textContent=f?d?"Best "+ie(d.score):"New!":"Escape the Penthouse to unlock";let g=this.penthouseUnlocked(),_=this.save.best[gi("penthouse",this.diff)];F("lvl6").classList.toggle("lock",!g),F("lvl6art").textContent=g?"\u{1F303}":"\u{1F512}",F("lvl6stars").innerHTML=g?this.starsHTML(_?_.stars:0):"",F("lvl6best").textContent=g?_?"Best "+ie(_.score):"New!":"Escape the Casino to unlock";let m=this.museumUnlocked(),p=this.save.best[gi("museum",this.diff)];F("lvl4").classList.toggle("lock",!m),F("lvl4art").textContent=m?"\u{1F3DB}\uFE0F":"\u{1F512}",F("lvl4stars").innerHTML=m?this.starsHTML(p?p.stars:0):"",F("lvl4best").textContent=m?p?"Best "+ie(p.score):"New!":"Escape the Jewelry Store to unlock",F("lvl3best").textContent=s?r?"Best "+ie(r.score):"New!":"Escape the Bank to unlock",this.renderSel(),this.diff==="ironman"&&!this.ironUnlocked()&&(this.diff="normal");for(let b of document.querySelectorAll("#diff button"))b.classList.toggle("on",b.dataset.d===this.diff),b.dataset.d==="ironman"&&(b.classList.toggle("lock",!this.ironUnlocked()),b.title=this.ironUnlocked()?"Ironman: x2.5 score, 1 coin, no smoke, 15s police":"Escape any heist on Hard to unlock");F("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),F("lvl1best").textContent=t?"Best "+ie(t.score):"New!",this.daily=this.todays();let y=(this.save.daily||{})[this.daily.key];F("dMut").textContent=this.daily.mutator.name;{let b=new Date;F("dArt").innerHTML=`<span style="font-size:20px">${b.getDate()}</span>`}F("dDesc").textContent=this.daily.mutator.desc+" \xB7 "+ji[this.daily.level].name,F("dBest").textContent=(y?"Today "+ie(y.score):this.daily.label)+(this.save.streak&&this.save.streak.n>1&&(this.save.streak.last===this.daily.key||this.save.streak.last===Nr())?` \xB7 \u{1F525}${this.save.streak.n}`:""),this.screen("menu")}runRecord(t,e){let i=this.game;return{win:t,level:this.level.id,diff:this.mode==="daily"?"daily":this.diff,ghost:t&&e.ghost,time:i.time,kos:i.kos,frac:i.lootGot/i.lootTotal,loot:i.lootGot,contractsDone:t?e.contracts.filter(s=>s.st==="ok").length:0,hides:i.hidesUsed,smokes:i.smokesUsed,coins:i.coinsThrown,radio:i.radioFaked,picks:i.picks,vents:i.ventsUsed,close:i.closeCalls,photo:i.photoFinish,streak:i.maxKoStreak||0,disguised:i.disguiseT>0&&i.disguises>0,lasers:i.lasersTripped,power:i.powerOff}}applyOutfit(){let t=On.find(e=>e.id===this.save.outfit);return(!t||!zs(t,this.save))&&(t=On[0]),this.vm.setOutfit(ul(t)),t}gearMods(t){return Wu(this.save,t)}canAffordGear(){return Or.some(t=>{let e=fl(this.save,t);return e!=null&&(this.save.cash||0)>=e})}renderGear(){let t=this.save.cash||0;F("wallet").textContent="\u{1F4B0} "+ie(t),F("gearGrid").innerHTML=Or.map(e=>{let i=Fr(this.save,e.id),s=fl(this.save,e),r=s==null;return`<button class="gr ${r?"max":t>=s?"":"cant"}" data-id="${e.id}"><span class="ic">${e.icon}</span><b>${e.name}</b><small>${e.desc}</small>
        <span class="pips">${e.prices.map((a,o)=>`<i class="${o<i?"on":""}"></i>`).join("")}</span><span class="pr">${r?"MAXED":ie(s)}</span></button>`}).join("");for(let e of document.querySelectorAll("#gearGrid .gr"))e.addEventListener("click",i=>{i.stopPropagation();let s=Or.find(o=>o.id===e.dataset.id),r=fl(this.save,s);if(r==null||(this.save.cash||0)<r){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.save.cash-=r,(this.save.gear=this.save.gear||{})[s.id]=Fr(this.save,s.id)+1,ne.store(this.save),this.audio.play("safe"),this.shake.add(.15),this.renderGear();let a=document.querySelector(`#gearGrid .gr[data-id="${s.id}"]`);a&&a.classList.add("buy")})}showOutfits(){ne.gameplayStop(),this.state="outfits",this.renderGear();let t=this.applyOutfit(),e=i=>"#"+i.toString(16).padStart(6,"0");F("ofGrid").innerHTML=On.map(i=>{let s=zs(i,this.save);return`<button class="of ${s?"":"lock"} ${i.id===t.id?"on":""}" data-id="${i.id}">
        <span class="sw"><i style="background:${e(i.sleeve)}"></i><i style="background:${e(i.glove)}"></i><i style="background:${e(i.bar)}"></i></span>
        <b>${i.name}</b><small>${s?i.id===t.id?"EQUIPPED":"Tap to wear":"\u{1F512} "+Xu(i,Fs)}</small></button>`}).join("");for(let i of document.querySelectorAll("#ofGrid .of"))i.addEventListener("click",s=>{s.stopPropagation();let r=On.find(a=>a.id===i.dataset.id);if(!zs(r,this.save)){this.audio.play("nope"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake");return}this.audio.play("pick",4),this.save.outfit=r.id,ne.store(this.save),this.showOutfits()});this.screen("outfits")}showTrophies(){ne.gameplayStop(),this.state="trophies";let t=Object.assign(Zc(),this.save.stats||{}),e=this.save.ach||{},i=r=>t.best[r]!=null?ks(t.best[r]):"\u2014",s=[["Heists",t.runs],["Escapes",t.escapes],["Busted",t.busts],["Total loot",ie(t.loot)],["Guards KO",t.kos],["Contracts",t.contracts],["Best Safe House",i("safehouse")],["Best Bank",i("bank")],["Best Jewelry",i("jewelry")],["Best Museum",i("museum")],["Best Casino",i("casino")],["Best Penthouse",i("penthouse")],["Best Train",i("train")],["Best Warehouse",i("warehouse")],["Best Mansion",i("mansion")]];F("trJobs").innerHTML=this.jobsHTML(),F("jobsIn").textContent=`(new jobs in ${ol()})`;for(let r=s.length-1;r>=0;r--)String(s[r][0]).startsWith("Best ")&&s[r][1]==="\u2014"&&s.splice(r,1);F("trStats").innerHTML=s.map(([r,a])=>`<div><small>${r}</small><b>${a}</b></div>`).join(""),F("trAch").innerHTML=Fs.map(r=>`<div class="ach ${e[r.id]?"on":""}"><i>${e[r.id]?r.icon:"\u{1F512}"}</i><b>${r.name}</b><small>${r.desc}</small></div>`).join(""),F("trCount").textContent=`${Object.keys(e).filter(r=>Fs.some(a=>a.id===r)).length} / ${Fs.length}`,this.screen("trophies")}chipify(t){let e=F(t),i=e.innerHTML.split(/<br\s*\/?>/).map(s=>s.trim()).filter(Boolean);e.innerHTML=i.map((s,r)=>`<span class="rw" style="animation-delay:${(1.3+r*.12).toFixed(2)}s">${s}</span>`).join("")}jobsHTML(){let t=Ur(this.save),e=(i,s)=>i.money?ie(s):s;return t.ids.map(i=>{let s=hl(i),r=t.prog[i]||0,a=!!t.done[i];return`<li class="${a?"ok":""}"><i></i><span>${s.text}</span><em>${a?"\u2714":e(s,r)+"/"+e(s,s.n)}</em><b>+${ie(ll)}</b></li>`}).join("")+`<li class="bonus ${t.bonus?"ok":""}"><i></i><span>All 3 done</span><em>${t.bonus?"\u2714":""}</em><b>+${ie(cl)}</b></li>`}jobsToast(t){if(!this.save.tutDone)return"";let e=t.fresh.map(i=>`\u{1F4CB} Job done: <b>${i.text}</b> +${ie(ll)}`);return t.bonus&&e.push(`\u{1F4CB} <b>All daily jobs done!</b> +${ie(cl)}`),e.length&&setTimeout(()=>{(this.state==="result"||this.state==="busted")&&(this.audio.play("contract"),this.shake.add(.12))},2e3),e.join("<br>")}showAchToast(t){F("rAch").innerHTML=t.length?"\u{1F3C6} Unlocked: "+t.map(e=>`<b>${e.icon} ${e.name}</b>`).join(" \xB7 "):"",F("rAch").classList.toggle("hidden",!t.length),t.length&&setTimeout(()=>this.audio.play("contract"),1600)}pinLocked(t){return t==="lvl2"?!this.bankUnlocked():t==="lvl3"?!this.jewelryUnlocked():t==="lvl4"?!this.museumUnlocked():t==="lvl5"?!this.casinoUnlocked():t==="lvl6"?!this.penthouseUnlocked():t==="lvl7"?!this.trainUnlocked():t==="lvl8"?!this.warehouseUnlocked():t==="lvl9"?!this.mansionUnlocked():!1}selectPin(t){if(this.sel=t,this.save.sel=t,this.pinLocked(t)){let e=F(t);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}this.renderSel()}renderSel(){let t=this.sel||this.save.sel||"lvl1";F(t)||(t="lvl1"),this.sel=t;for(let u of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])F(u).classList.toggle("on",u===t);let e=F(t),i=this.pinLocked(t);F("selName").textContent=t==="daily"?"Daily: "+F("dMut").textContent:e.querySelector(".t").textContent;let s=e.querySelector(".stars");F("selStars").innerHTML=s?s.innerHTML:"";let r=!!(this.save.daily||{})[this.daily&&this.daily.key];F("selSub").textContent=t==="daily"?F("dDesc").textContent+" \xB7 "+F("dBest").textContent+(r?` \xB7 new Daily in ${ol()}`:""):e.querySelector(".best").textContent;let a=[];if(!i&&t!=="daily"&&this.save.tutDone){let u=ji[{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t]].id,f=(this.save.best[gi(u,this.diff)]||{stars:0}).stars;f===0?a.push("Escape to earn your first \u2605"):f<3&&a.push("Next \u2605: grab 70% loot \xB7 or never get spotted")}if(this.save.tutDone&&(this.save.hot||0)>=1&&a.unshift(`\u{1F525} Hot streak ${this.save.hot}: next escape +${Math.min(50,10*this.save.hot)}% cash`),this.save.tutDone&&this.canAffordGear()&&a.unshift("\u{1F9F0} You can afford new gear in the Locker!"),this.save.tutDone){let u=Ur(this.save),f=u.ids.find(d=>!u.done[d]);if(f){let d=hl(f),g=u.prog[f]||0;a.push(`\u{1F4CB} Job: ${d.text} (${d.money?ie(g):g}/${d.money?ie(d.n):d.n})`)}}let o=this.save.streak;o&&o.n>=1&&o.last===Nr()&&a.unshift(`\u{1F525} Play today's Daily to keep your ${o.n}-day streak`);let l=Object.keys(this.save.ach||{}).length,h=On.filter(u=>u.need&&u.need>l).sort((u,f)=>u.need-f.need)[0];h&&this.save.tutDone&&a.push(`\u{1F9E4} ${h.need-l} more troph${h.need-l===1?"y":"ies"} \u2192 ${h.name} outfit`),F("selGoal").textContent=a.slice(0,2).join("  \xB7  "),F("selGoal").classList.toggle("hidden",!a.length),F("bPlay").textContent=i?"\u{1F512} LOCKED":"PLAY",F("bPlay").classList.toggle("dis",i),F("daily").classList.toggle("done",r),F("bPlay").classList.toggle("pulse",!i&&!this.save.tutDone&&!this.runs);let c=0;for(let u of["safehouse","bank","jewelry","museum","casino","penthouse","train","warehouse","mansion"])c+=Math.max(...["","_easy","_hard","_ironman"].map(f=>(this.save.best[u+f]||{stars:0}).stars));F("starTotal").textContent=`\u2605 ${c}/27`,ji.forEach((u,f)=>{let d=F("lvl"+(f+1));d&&d.classList.toggle("gold",!!(this.save.mastered||{})[u.id])});{let u=this.save.cash||0,f=u>=1e6?(u/1e6).toFixed(1)+"M":u>=1e3?(u/1e3).toFixed(u>=1e4?0:1)+"k":String(u);F("bOutfit").innerHTML=`\u{1F9F0} LOCKER${u?` <small>$${f}</small>`:""}`}{let u=Ur(this.save),f=u.ids.filter(d=>u.done[d]).length;F("bTrophy").innerHTML=this.save.tutDone?`\u{1F4CB} JOBS <small>${f}/3</small>`:"\u{1F3C6} TROPHIES"}F("bOutfit").classList.toggle("pulse",this.save.tutDone&&this.canAffordGear());{let u=al(this.save.xp||0);F("rankChip").innerHTML=`\u{1F396} ${u.name}<i style="width:${(u.frac*100).toFixed(0)}%"></i>`,F("rankChip").title=u.next?`${u.toNext} XP to ${u.next}`:"Max rank"}}playSel(){let t=this.sel||"lvl1";if(this.pinLocked(t)){this.audio.play("nope"),this.selectPin(t);return}t==="daily"?this.start("daily"):this.start("classic",{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t])}drawRecap(t,e){let i=F(t),s=this.game,r=s.L,a=this.mmBase;if(!i||!a)return;let o=this.mmS,l=Math.min(260/a.width,170/a.height);i.width=Math.round(a.width*l*2),i.height=Math.round(a.height*l*2);let h=i.getContext("2d"),c=i.width/a.width*o,u=s.trail.slice(),f=s.marks.slice();u.push([s.player.x,s.player.z,u.length?u[u.length-1][2]:0]);let d=performance.now(),g=1600,_=this.recapId=(this.recapId||0)+1,m=(x,S)=>{let w=x.x*c,v=x.z*c,M=5.5;h.globalAlpha=S,x.t==="ko"?(h.strokeStyle="#c77dff",h.lineWidth=3,h.beginPath(),h.moveTo(w-M,v-M),h.lineTo(w+M,v+M),h.moveTo(w+M,v-M),h.lineTo(w-M,v+M),h.stroke()):x.t==="alarm"||x.t==="caught"?(h.fillStyle="#ff3b4e",h.beginPath(),h.arc(w,v,M+2,0,6.3),h.fill(),h.fillStyle="#fff",h.font="bold 11px sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText(x.t==="caught"?"\u2716":"!",w,v+1)):x.t==="safe"?(h.fillStyle="#ffd23f",h.fillRect(w-M,v-M,M*2,M*2),h.strokeStyle="#1c1330",h.lineWidth=2,h.strokeRect(w-M,v-M,M*2,M*2)):(h.fillStyle=x.t==="cash"?"#4fe0a0":"#ffc94a",h.beginPath(),h.arc(w,v,x.t==="cash"?3:4.5,0,6.3),h.fill()),h.globalAlpha=1},p=()=>{if(_!==this.recapId)return;let x=Math.min(1,(performance.now()-d)/g),S=Math.max(1,Math.floor(u.length*x));h.drawImage(a,0,0,i.width,i.height),h.fillStyle="rgba(28,19,48,.35)",h.fillRect(0,0,i.width,i.height),h.lineCap="round",h.lineJoin="round",h.lineWidth=3.5;for(let M=1;M<S;M++){let k=u[M-1],P=u[M];h.strokeStyle=P[2]?"#ff5a6a":"#4fe0a0",h.beginPath(),h.moveTo(k[0]*c,k[1]*c),h.lineTo(P[0]*c,P[1]*c),h.stroke()}let w=Math.floor(f.length*x);for(let M=0;M<f.length;M++)(M<w||x>=1)&&m(f[M],1);let v=u[S-1];v&&(h.fillStyle="#fff6e8",h.strokeStyle="#1c1330",h.lineWidth=2,h.beginPath(),h.arc(v[0]*c,v[1]*c,5,0,6.3),h.fill(),h.stroke()),x<1&&requestAnimationFrame(p)};p();let y=u.length?Math.round(u.filter(x=>x[2]).length/u.length*100):0,b=F(t+"Lg");b&&(b.innerHTML=`<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${y}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">\u2715</b> KO`)}showSoon(){ne.gameplayStop(),this.state="soon",F("soonName").textContent="More heists",F("soonList").innerHTML=["Armored truck ambush","Diamond exchange","Harbor yacht party"].map(t=>`<li>${t}</li>`).join(""),this.screen("soon")}todays(){let t=Gu(ji.map((i,s)=>({idx:s,owner:!!i.owner,dog:!!i.dog})).filter(i=>this.levelUnlocked(i.idx))),e=this.save.dailyPick;if(e&&e.key===t.key){let i=$c.find(s=>s.id===e.mut);i&&(t.level=e.level,t.mutator=i)}return t}levelUnlocked(t){return[()=>!0,()=>this.bankUnlocked(),()=>this.jewelryUnlocked(),()=>this.museumUnlocked(),()=>this.casinoUnlocked(),()=>this.penthouseUnlocked(),()=>this.trainUnlocked(),()=>this.warehouseUnlocked(),()=>this.mansionUnlocked()][t]?.()||!1}mansionUnlocked(){let t=this.save.best;return!!(t.warehouse||t.warehouse_easy||t.warehouse_hard||t.warehouse_ironman||this.save.mansionOpen)}warehouseUnlocked(){let t=this.save.best;return!!(t.train||t.train_easy||t.train_hard||t.train_ironman||this.save.warehouseOpen)}trainUnlocked(){let t=this.save.best;return!!(t.penthouse||t.penthouse_easy||t.penthouse_hard||t.penthouse_ironman||this.save.trainOpen)}penthouseUnlocked(){let t=this.save.best;return!!(t.casino||t.casino_easy||t.casino_hard||t.casino_ironman||this.save.penthouseOpen)}casinoUnlocked(){let t=this.save.best;return!!(t.museum||t.museum_easy||t.museum_hard||t.museum_ironman||this.save.casinoOpen)}museumUnlocked(){let t=this.save.best;return!!(t.jewelry||t.jewelry_easy||t.jewelry_hard||t.jewelry_ironman||this.save.museumOpen)}jewelryUnlocked(){let t=this.save.best;return!!(t.bank||t.bank_easy||t.bank_hard||t.bank_ironman||this.save.jewelryOpen)}ironUnlocked(){return Object.keys(this.save.best).some(t=>t.endsWith("_hard")||t.endsWith("_ironman"))}bankUnlocked(){let t=this.save.best;return!!(t.safehouse||t.safehouse_easy||t.safehouse_hard||t.safehouse_ironman||this.save.bankOpen)}async useLevel(t){if(this.loadedIdx===t)return;this.level=await zu(t),this.game.load(this.level),this.buildMinimap(),this.loadedIdx=t,this.audio.theme=t;let e=!!this.level.night;this.scene.background.setHex(e?1317427:16038282),this.scene.fog.color.setHex(e?1712704:15778970),this.scene.fog.near=e?10:16,this.scene.fog.far=e?48:70,this.sky.material.color.setHex(e?2502746:16777215),this.nightSky.visible=e,this.rain.setLevel(this.level.rain?this.game.L:null),this.dust.points.material.color.setHex(e?12110079:16769712),this.hemi.intensity=e?1.1:1.8,this.hemi.color.setHex(e?12109055:16770760),this.sun.intensity=e?.5:1.4,this.sun.color.setHex(e?10465535:16769208),this.vm.hemi.intensity=e?1.6:2.4,this.renderer.compile(this.scene,this.camera)}starsHTML(t){let e="";for(let i=0;i<3;i++)e+=`<span class="${i<t?"on":""}">\u2605</span>`;return e}async start(t,e){t&&(this.mode=t),this.mode||(this.mode="classic"),!t&&this.mode==="tutorial"&&this.save.tutDone&&(this.mode="classic"),this.mode==="classic"&&(e==null||e===0)&&!this.save.tutDone&&(this.levelIdx||0)===0&&(this.mode="tutorial"),this.mode==="daily"?((!this.daily||this.daily.key!==Un())&&(this.daily=this.todays()),e=this.daily.level,this.save.dailyPick={key:this.daily.key,level:e,mut:this.daily.mutator.id}):this.mode==="tutorial"&&(e=0),e!=null&&(this.levelIdx=e);let i=this.loadedIdx!==this.levelIdx;if(i&&await this.useLevel(this.levelIdx),this.mode==="daily"&&(!this.daily||this.daily.key!==Un())&&(this.daily=this.todays()),this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.ghost=this.mode==="classic"&&(this.save.ghost||{})[gi(this.level.id,this.diff)]||null,F("ghostp").classList.toggle("hidden",!this.ghost),this.ghost&&(F("ghostp").lastChild.textContent=ks(this.ghost.t)),this.onSmoke(this.game.smokesLeft),this.onCrouch(!1),this.onDisguise(this.game.disguiseT),this.level.startDisguise&&setTimeout(()=>{this.state==="play"&&this.announce("\u{1F378} You're dressed as a waiter: from afar nobody looks twice")},1300),this.renderContracts(this.game.contracts),this.tutStep=this.game.tut?this.lastTutLevel===this.level.id?Math.min(this.tutStep||0,3):0:Qi.length,F("tut").dataset.k="",this.lastTutLevel=this.game.tut?this.level.id:null,clearTimeout(this.whyT),F("alarmwhy").classList.add("hidden"),this.mode==="daily"){let s=F("ctoast");s.innerHTML=`<small>DAILY CHALLENGE \xB7 ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>s.classList.add("hidden"),3200)}else i&&this.mode==="classic"&&this.save.tutDone?this.showIntel():F("ctoast").classList.add("hidden");if(!(i&&this.mode==="classic"&&this.save.tutDone)&&this.mode!=="daily"){let s=F("gostamp");s.querySelector("small").textContent=this.level.name.toUpperCase()+((this.save.hot||0)>=1&&this.mode==="classic"?`  \xB7  \u{1F525} STREAK ${this.save.hot}`:""),s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.goT),this.goT=setTimeout(()=>s.classList.add("hidden"),1200),this.audio.play("dash")}this.mode==="classic"&&this.game.contracts.length&&!this.save.seenCtr&&(this.save.seenCtr=!0,ne.store(this.save),this.hint("ctr")),this.hint("move"),ne.gameplayStart()}showIntel(){let t=this.game,e=this.level,i=t.L,s=[];i.keys.length&&s.push("\u{1F511} Keycard door"),i.doors.some(a=>a.type==="lock")&&s.push("\u{1F512} Locked door"),t.lasers.length&&s.push("\u{1F534} Lasers"),e.owner&&s.push("\u{1F634} Sleeping owner"),(e.dogs||[]).length&&s.push("\u{1F415} Guard dog"),(e.spots||[]).length&&s.push("\u{1F526} Searchlights"),t.cases.length&&s.push("\u{1F48E} Display cases"),t.slots.length&&s.push("\u{1F3B0} Slot machines"),t.vents.length&&s.push("\u{1F573}\uFE0F Air vent"),t.tvs.length&&s.push("\u{1F4FA} TV lure"),(e.cameras||[]).length&&s.push(`\u{1F4F9} ${e.cameras.length} camera${e.cameras.length>1?"s":""}`),e.train&&s.push("\u{1F682} Moving train"),e.startDisguise&&s.push("\u{1F378} Waiter disguise"),(e.clerks||[]).length&&s.push(`\u{1F64B} ${e.clerks.length} panic-button witness${e.clerks.length>1?"es":""}`),s.push(e.heli?"\u{1F681} Roof extraction":i.van?"\u{1F690} Van out front":"\u{1FA9C} Roof hatch exit");let r=F("ctoast");r.innerHTML=`<small>INTEL \xB7 ${e.name.toUpperCase()}</small>${e.brief?`<span class="brief">${e.brief}</span>`:""}<span class="intel">${s.map(a=>`<i>${a}</i>`).join("")}</span><span class="stargoal">\u2605 Escape \xB7 \u2605 Grab 70% loot \xB7 \u2605 Never get spotted</span>`,r.classList.remove("hidden"),r.style.animation="none",r.offsetWidth,r.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>r.classList.add("hidden"),5200)}async retry(){await this.maybeMidgame(),this.start()}settings(){return Object.assign({sens:1,fov:70,music:.8,sfx:1,invert:!1,shake:!0},this.save.settings||{})}applySettings(){let t=this.settings();this.sens=.0024*t.sens,this.invertY=t.invert,this.fovBase=t.fov,this.audio.setVolumes(t.music,t.sfx),this.shake.scale=t.shake?1:0}showSettings(){this.setFrom=this.state==="pause"?"pause":"menu",this.state="settings";let t=this.settings();F("sSens").value=t.sens,F("sFov").value=t.fov,F("sMus").value=t.music,F("sSfx").value=t.sfx,F("sInv").checked=t.invert,F("sShake").checked=t.shake,this.readSettings(!0),this.screen("settings")}readSettings(t){let e={sens:+F("sSens").value,fov:+F("sFov").value,music:+F("sMus").value,sfx:+F("sSfx").value,invert:F("sInv").checked,shake:F("sShake").checked};F("vSens").textContent=e.sens.toFixed(1)+"\xD7",F("vFov").textContent=e.fov+"\xB0",F("vMus").textContent=Math.round(e.music*100)+"%",F("vSfx").textContent=Math.round(e.sfx*100)+"%",!t&&(this.save.settings=e,ne.store(this.save),this.applySettings(),this.audio.play("click"))}pause(){if(this.state!=="play")return;this.audio.siren(!1),this.state="pause",ne.gameplayStop(),F("pObj").textContent="\u{1F3AF} "+(this.game.objText||"");let t=this.input.touch,e=t?[["\u25C0\u25B6","Left side: move"],["\u{1F446}","Right side: look"],["\u270B","Grab \xB7 KO from behind \xB7 crack (hold)"],["\u26A1","Dash (loud!)"],["\u{1F9B6}","Sneak (quiet, slower)"],["\u{1FA99}","Throw a coin (lure)"],["\u{1F4A8}","Smoke bomb"]]:[["WASD","Move"],["Mouse","Look"],["E","Grab \xB7 KO from behind \xB7 crack (hold)"],["Space","Dash (loud!)"],["Z","Sneak (quiet, slower)"],["Q","Throw a coin (lure)"],["C","Smoke bomb"],["R","Restart run"]];F("pKeys").innerHTML=e.map(([i,s])=>`<li><kbd>${i}</kbd>${s}</li>`).join(""),this.screen("pause")}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),ne.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),ne.store(this.save),this.updateMuteIcon()}updateMuteIcon(){F("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!Dr||!ne.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await ne.ad("midgame"))}async reviveAd(){if(!Dr||!ne.available||this.game.revived)return;this.state="ad",await ne.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),ne.gameplayStart()):(this.state="busted",F("bRevive").classList.add("hidden"))}hint(t){if(!(!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t))){if(this.game&&this.game.tut&&(this.tutStep<Qi.length||["move","loot","safe","pick","cone","stash"].includes(t))){this.hShown.delete(t);return}this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=F("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=$x[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let i=F("prompt"),s=F("ring"),r=this.input&&this.input.touch,a=(this.level&&this.level.safeName?this.level.safeName:"safe").toUpperCase(),o=t==="slot"?r?"HOLD \u270B TO PULL THE LEVER":"HOLD E: PULL THE LEVER":t==="radio"?r?"HOLD \u270B TO ANSWER THE RADIO":'HOLD E: ANSWER "ALL CLEAR"':t==="case"?r?"HOLD \u270B TO SMASH":"HOLD E TO SMASH THE CASE":t==="pick"?r?"TAP \u270B TO PICK THE LOCK":"E: PICK THE LOCK":t==="picking"?r?"TAP \u270B IN THE GREEN \xB7 MOVE TO STOP":"E IN THE GREEN \xB7 MOVE TO STOP":t==="breaker"?r?"HOLD \u270B TO CUT POWER":"HOLD E TO CUT THE POWER":t==="door"?r?"TAP \u270B TO OPEN":"E: SWIPE KEYCARD":t==="locked"?"LOCKED: FIND THE KEYCARD":t==="uniform"?r?"HOLD \u270B TO TAKE THE UNIFORM":"HOLD E: TAKE HIS UNIFORM":t==="tv"?r?"TAP \u270B TO TURN THE TV ON":"E: TURN THE TV ON (LURE)":t==="vent"?r?"TAP \u270B TO CRAWL IN":"E: CRAWL INTO THE VENT":t==="hide"?r?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?r?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?r?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?r?"HOLD \u270B TO CRACK "+a:"HOLD E / CLICK TO CRACK "+a:t==="pocket"?r?"TAP \u270B KO \xB7 HOLD \u270B PICKPOCKET":"TAP E: KO \xB7 HOLD E: PICKPOCKET":t==="ko"?r?"TAP \u270B TO KNOCK OUT":"E / CLICK: KNOCK OUT":"";i.dataset.k!==t&&(i.dataset.k=t,i.innerHTML=o.replace(/(^|[\s(])(E|✋|CLICK)(?=[\s:/]|$)/g,"$1<kbd>$2</kbd>"),i.classList.toggle("hidden",!t),F("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t),this.els.bAct.lastChild.textContent=t==="pocket"?"KO / LIFT":t==="slot"?"PULL":t==="radio"?"ANSWER":t==="case"?"SMASH":t==="pick"||t==="picking"?"PICK":t==="breaker"?"CUT":t==="door"?"OPEN":t==="uniform"?"DISGUISE":t==="tv"?"TV ON":t==="vent"?"CRAWL":t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="uniform"||t==="panel"||t==="breaker"||t==="case"||t==="radio"||t==="slot"||t==="pocket")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=F("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let i=this.game;F("lootv").textContent=ie(i.lootGot),F("lootp").textContent=Math.round(i.lootGot/i.lootTotal*100)+"%",F("lootbar").style.width=Math.min(100,i.lootGot/i.lootTotal*100)+"%";let s=i.lootGot/i.lootTotal>=.7;if(F("lootbar").classList.toggle("star",s),e){this.lootStar=s;return}if(s&&!this.lootStar&&i.state==="play"){this.lootStar=!0;let a=F("ctoast");a.innerHTML="<small>LOOT STAR EARNED</small>\u2605 70% grabbed<b>Every extra dollar still counts!</b>",a.classList.remove("hidden"),a.style.animation="none",a.offsetWidth,a.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>a.classList.add("hidden"),2e3),this.audio.play("star",1),this.shake.add(.12)}let r=F("loot");r.classList.remove("punch","bigpunch"),r.offsetWidth,r.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(F("alarm").classList.toggle("hidden",!t),F("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let i=F("alarmwhy");i.textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>i.classList.add("hidden"),2600)}}announce(t){let e=F("alarmwhy");e.textContent=t,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>e.classList.add("hidden"),3e3)}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,F("alarmt").textContent=ks(e),F("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t,e){F("ctr").innerHTML=t.map(i=>`<li class="${i.st}${i===e?" just":""}"><i></i>${i.text}<b>+${ie(i.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e,t),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let i=F("ctoast");i.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${ie(t.bonus)}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onPick(t){let e=F("lockpick");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");let i=e.querySelector(".lp-zone"),s=e.querySelector(".lp-needle");i.style.left=((t.zone-t.w/2)*100).toFixed(1)+"%",i.style.width=(t.w*100).toFixed(1)+"%",s.style.left=(t.pos*100).toFixed(1)+"%",e.querySelectorAll(".lp-pins b").forEach((r,a)=>r.classList.toggle("on",a<t.pin)),e.classList.toggle("cool",t.cool>0)}onKey(t){if(F("key").classList.toggle("hidden",!t),t){let e=F("key");e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch")}}ventFx(t){let e=F("ventfx");e.style.opacity=t.toFixed(3),e.classList.toggle("hidden",t<=0)}onHide(t){F("slats").classList.toggle("hidden",!t),F("xh").classList.toggle("hidden",t)}onDisguise(t){let e=F("disgp"),i=t>0;e.classList.toggle("hidden",!i);let s=i&&this.level&&this.level.startDisguise&&!this.game.disguises,r=i?s?"w":"g":"";if(i){let a=Math.ceil(t),o=r+a;e.dataset.s!==o&&(e.dataset.s=o,e.textContent=(s?"\u{1F378} WAITER ":"\u{1F574} DISGUISED ")+a+"s",e.classList.toggle("low",a<=5))}this.disgLook!==r&&(this.disgLook=r,this.disgOn=i,r==="w"?this.vm.setOutfit(ul({sleeve:1512989,glove:16052714,bar:9082020,band:14267482})):r==="g"?this.vm.setOutfit(ul({sleeve:2834298,glove:1711142,bar:9082020,band:15911244})):this.applyOutfit())}onCrouch(t){F("sneakp").classList.toggle("hidden",!t),this.els.bSneak.classList.toggle("on",t),document.body.classList.toggle("crouch",t)}onWeight(t){let e=F("weight"),i=Math.round((1-t)*100);e.classList.toggle("hidden",i<=0),e.textContent=`\u{1F3CB} \u2212${i}%`,e.classList.toggle("hot",i>=25)}onSmoke(t){let e=F("smokep");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bSmoke.lastChild.textContent="\xD7"+t,this.els.bSmoke.classList.toggle("empty",t===0)}onInSmoke(t){this.inSmokeOn!==t&&(this.inSmokeOn=t,F("smokeov").classList.toggle("on",t))}onCoins(t){let e=F("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}lightning(){this.boltK=1,this.flash("bolt")}flash(t){let e=F("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){F("touch").classList.add("hidden"),F("fp").classList.add("hidden"),F("hud").classList.add("hidden"),F("alarm").classList.add("hidden"),this.audio.siren(!1),this.input.exitLock()}awardXP(t,e,i,s){let r=this.save.xp||0,a=Bu(t,e,i),o=r+a;this.save.xp=o;let l=al(r),h=al(o),c=F(s);c.innerHTML=`<span class="rk">\u{1F396} <b>${l.name}</b></span><span class="xpbar"><i style="width:${(l.frac*100).toFixed(1)}%"></i></span><span class="xpg">+${a} XP</span>`;let u=c.querySelector("i"),f=c.querySelector("b");return setTimeout(()=>{h.i>l.i?(u.style.width="100%",setTimeout(()=>{f.textContent=h.name,u.style.transition="none",u.style.width="0%",u.offsetWidth,u.style.transition="",u.style.width=(h.frac*100).toFixed(1)+"%",c.classList.add("up"),c.querySelector(".xpg").textContent="RANK UP!",this.audio.play("contract"),this.shake.add(.2)},650)):u.style.width=(h.frac*100).toFixed(1)+"%"},900),c.classList.remove("up"),{gain:a,up:h.i>l.i,rank:h}}bustTip(){let t=this.game,e=this.input.touch,i=e?"the \u{1F9B6} button":"Z",s=e?"\u270B":"E";if(t.policeBusted)return"The police arrived! Knock out alerted guards before they radio in, or disarm the alarm keypad.";let r={hide:"Tip: a guard saw you climb in. Only hide when nobody is looking.",owner:"Tip: the owner wakes up to noise. Sneak past slowly and never dash near him.",dash:`Tip: dashing is loud and gets you noticed. Walk, or sneak with ${i}.`,dog:"Tip: the dog follows your scent. Throw a coin and it runs off to sniff it.",los:"Tip: once spotted, break line of sight: duck round a corner, hide in a wardrobe or drop smoke.",cone:`Tip: stay out of the yellow vision cones. Sneak with ${i} behind low furniture, and hit guards from behind with ${s}.`},a=this.level.tips||[],o=t.bustCause||"cone";return t.tut?r[o]||r.cone:(o==="cone"||o==="los")&&a.length&&Math.random()<.5?"Tip: "+a[Math.random()*a.length|0]:r[o]||r.cone}onBusted(){this.state="busted",this.audio.siren(!1),ne.gameplayStop(),F("bRevive").classList.toggle("hidden",!Dr||!ne.available||this.game.revived),F("bustTip").textContent=this.bustTip();let t=Jc(this.save,this.runRecord(!1));this.awardXP(!1,0,this.game.lootGot,"bXP"),(this.save.hot||0)>=2&&(this.lostStreak=this.save.hot),this.save.hot=0;{let i=Math.round(this.game.lootGot*.25);this.save.cash=(this.save.cash||0)+i,F("bCash").textContent=i?`\u{1F4B0} Kept ${ie(i)} of the loot you grabbed`:""}this.bustStreak=this.bustKey===this.level.id?(this.bustStreak||0)+1:1,this.bustKey=this.level.id,F("bEasy").classList.toggle("hidden",!(this.mode==="classic"&&this.bustStreak>=3&&(this.diff==="normal"||this.diff==="hard"))),ne.store(this.save);let e=this.mode==="tutorial"?"":this.jobsToast(Kc(this.save,this.runRecord(!1)));this.lostStreak&&(F("bCash").textContent+=` \xB7 \u{1F525} ${this.lostStreak}-escape streak lost`,this.lostStreak=0),F("bAch").innerHTML=t.map(i=>`\u{1F3C6} ${i.icon} ${i.name} unlocked!`).concat(e?[e]:[]).join("<br>"),this.chipify("bAch"),this.screen("busted"),this.drawRecap("bMap",!1)}onWin(t){this.state="result",this.bustStreak=0,this.audio.siren(!1),F("alarm").classList.add("hidden"),F("siren").classList.remove("on"),ne.gameplayStop(),ne.happytime();let e=t.stars.filter(Boolean).length,i,s,r;if(t.daily){let x=this.daily.key,S=this.save.daily=this.save.daily||{};i=S[x]||{score:0,stars:0},s=t.score>i.score,S[x]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},r=S[x].score;let w=this.save.streak||{last:"",n:0};w.last!==x&&(w.n=w.last===Nr()?w.n+1:1,w.last=x),this.save.streak=w;for(let v of Object.keys(S).sort().slice(0,-14))delete S[v]}else{let x=gi(this.level.id,this.diff);this.nextWasLocked=this.mode==="classic"&&this.levelIdx+1<ji.length&&!this.levelUnlocked(this.levelIdx+1),i=this.save.best[x]||{score:0,stars:0},s=t.score>i.score,this.save.best[x]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)};let S=this.save.mastered=this.save.mastered||{};this.justMastered=e>=3&&this.mode==="classic"&&!S[this.level.id],this.justMastered&&(S[this.level.id]=1,this.save.cash=(this.save.cash||0)+2e3),r=this.save.best[x].score;let w=this.ghost,v=!w||t.time<w.t;if(this.ghostMsg=w?v?`\u{1F47B} Beat your ghost by ${(w.t-t.time).toFixed(1)}s!`:`\u{1F47B} Ghost was ${(t.time-w.t).toFixed(1)}s faster`:"",this.mode==="classic"&&(s||v)){let M=this.game.trail,k=[];for(let P=0;P<M.length;P+=2)k.push(Math.round(M[P][0]*10),Math.round(M[P][1]*10));(this.save.ghost=this.save.ghost||{})[x]={t:t.time,dt:.7,pts:k}}}this.save.contracts=(this.save.contracts||0)+t.contracts.filter(x=>x.st==="ok").length,ne.store(this.save),F("rStars").innerHTML=this.starsHTML(0);let a=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];F("rGoals").innerHTML=t.stars.map((x,S)=>`<li class="${x?"ok":""}">${x?"\u2714":"\u2716"} ${a[S]}</li>`).join(""),F("rLoot").textContent=ie(t.loot),F("rTime").textContent=ks(t.time)+(t.timeBonus?`  (+${ie(t.timeBonus)})`:""),F("rGhost").textContent=t.ghost?"+"+ie(t.ghostBonus):"\u2014",F("rScore").textContent="$0",F("rCtr").innerHTML=t.contracts.map(x=>`<li class="${x.st==="ok"?"ok":"no"}">${x.st==="ok"?"\u2714":"\u2716"} ${x.text}<b>${x.st==="ok"?"+"+ie(x.bonus):"\u2014"}</b></li>`).join(""),F("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),F("rBest").textContent=(s?"NEW BEST!":"Best "+ie(r))+" \xB7 "+t.diff+(t.daily?` \xB7 \u{1F525}${this.save.streak.n} day streak \xB7 next Daily in ${ol()}`:""),F("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,F("rBest").classList.toggle("new",s),!t.daily&&this.ghostMsg&&(F("rBest").textContent+="  \xB7  "+this.ghostMsg);let o=this.game.tut&&!this.save.tutDone;this.game.tut&&(this.save.tutDone=!0);let l=Jc(this.save,this.runRecord(!0,t));this.awardXP(!0,t.score,t.loot,"rXP");let h=this.jobsToast(Kc(this.save,this.runRecord(!0,t))),c=this.mode==="tutorial"?0:this.save.hot=(this.save.hot||0)+1,u=Math.min(.5,.1*Math.max(0,c-1)),f=Math.round(t.score*u);this.save.cash=(this.save.cash||0)+t.score+f,F("rCash").textContent=`\u{1F4B0} +${ie(t.score+f)} to your stash${f?` (\u{1F525} streak ${c}: +${Math.round(u*100)}%)`:""} \xB7 ${ie(this.save.cash)}${this.canAffordGear()?" \xB7 \u{1F9F0} new gear!":""}`;let d=On.filter(x=>x.id!=="classic"&&zs(x,this.save)&&!(this.save.seenOut||[]).includes(x.id));this.save.seenOut=On.filter(x=>zs(x,this.save)).map(x=>x.id),this.showAchToast(l),o&&(F("rAch").innerHTML="\u{1F393} <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now."+(F("rAch").innerHTML?"<br>"+F("rAch").innerHTML:""),F("rAch").classList.remove("hidden"));let g=this.levelIdx+1,_=!t.daily&&g<ji.length&&this.levelUnlocked(g);F("bNext").textContent=t.daily?"MAP \u25B6":_?"NEXT: "+ji[g].name.toUpperCase()+" \u25B6":"NEXT \u25B6",!t.daily&&this.nextWasLocked&&_&&(this.sel=this.save.sel="lvl"+(g+1),F("rAch").innerHTML=`<span class="unlock">\u{1F513} New heist unlocked: <b>${ji[g].name}</b></span>`+(F("rAch").innerHTML?"<br>"+F("rAch").innerHTML:""),F("rAch").classList.remove("hidden"),setTimeout(()=>{this.state==="result"&&(this.audio.play("contract"),this.shake.add(.15))},1500)),this.nextWasLocked=!1,this.justMastered&&(F("rAch").innerHTML='<span class="unlock">\u{1F3C5} Heist mastered! +$2,000 bonus</span><br>'+F("rAch").innerHTML,F("rAch").classList.remove("hidden"),this.justMastered=!1),h&&(F("rAch").innerHTML+=(F("rAch").innerHTML?"<br>":"")+h,F("rAch").classList.remove("hidden")),d.length&&(F("rAch").innerHTML+=`<br>\u{1F9E4} New outfit: <b>${d.map(x=>x.name).join(", ")}</b>`,F("rAch").classList.remove("hidden")),ne.store(this.save),this.chipify("rAch"),this.screen("result"),this.drawRecap("rMap",!0);let m=F("rStars").children;t.stars.forEach((x,S)=>{x&&setTimeout(()=>{this.state==="result"&&(m[S].classList.add("on","pop"),this.audio.play("star",S),this.shake.add(.12))},450+S*380)});let p=performance.now(),y=1100,b=()=>{let x=Math.min(1,(performance.now()-p)/y);F("rScore").textContent=ie(t.score*(1-Math.pow(1-x,3))),x<1&&this.state==="result"&&requestAnimationFrame(b)};b()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let i=this.state;i==="play"||i==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(i==="menu"||i==="soon")&&this.game.update(e,!0),i!=="pause"&&i!=="ad"&&(this.particles.update(e),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),this.nightSky.position.copy(this.camera.position),i!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),i!=="pause"&&this.rain.update(e,this.camera.position.x,this.camera.position.z);{let s=this.game,r=s.L,a=s.player,o=i==="play"&&this.level&&this.level.rain&&r&&r.outdoor[Math.floor(a.z)*r.W+Math.floor(a.x)]===1;this.wetK=we(this.wetK||0,o?1:0,o?2.5:.8,e);let l=F("wet");l.style.opacity=this.wetK.toFixed(2),l.classList.toggle("hidden",this.wetK<.02)}this.audio.rain(!!(this.level&&this.level.rain)&&(i==="play"||i==="pause"||i==="busted")),this.audio.rumble(!!(this.level&&this.level.train)&&(i==="play"||i==="pause"||i==="busted")),this.boltK>0&&(this.boltK=Math.max(0,this.boltK-e*2.2)),this.renderer.toneMappingExposure=1.15+this.boltK*this.boltK*1.6,this.dust.points.visible=i!=="menu"&&i!=="soon",this.floaters.update(i==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),i==="play"&&this.updateHud(),this.audio.setMuffle(i==="play"&&this.game.slowT>.05),this.audio.tension=i==="play"?this.game.tension:0,this.audio.mode=i==="menu"||i==="soon"||i==="trophies"||i==="outfits"?"menu":"game",F("vignette").style.opacity=i==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),i==="outfits"&&(this.vm.mat.color.setRGB(1.05,1,.95),this.vm.update(e,{move:0,bob:0,lookX:0,lookY:0,punch:0,crack:!1,grab:0,dash:!1,busted:!1})),this.vm.visible=i==="outfits"||(i==="play"||i==="busted"||i==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}skipTutorial(){this.save.tutDone=!0,ne.store(this.save),this.tutStep=Qi.length,F("tut").classList.add("hidden"),this.audio.play("click")}updateTutorial(){let t=F("tut"),e=this.game;if(!e.tut||this.tutStep>=Qi.length){t.classList.add("hidden"),document.body.classList.remove("tutcard");return}if(this.tutStep==null&&(this.tutStep=0),Qi[this.tutStep].done(e)&&(this.tutStep++,this.audio.play("star",Math.min(2,this.tutStep%3)),t.classList.remove("done"),t.offsetWidth,t.classList.add("done"),this.tutStep>=Qi.length)){setTimeout(()=>t.classList.add("hidden"),900);return}let s=Qi[this.tutStep],r=this.tutStep+(this.input.touch?"t":"k");t.dataset.k!==r&&(t.dataset.k=r,t.querySelector("small").textContent=`TUTORIAL ${this.tutStep+1}/${Qi.length}`,t.querySelector("span").textContent=s.text[this.input.touch?1:0],t.querySelector("em").textContent=this.input.touch?"tap to skip":"T to skip",t.querySelector("i").style.width=this.tutStep/Qi.length*100+"%"),t.classList.toggle("hidden",e.alarm||e.state!=="play"),document.body.classList.toggle("tutcard",!t.classList.contains("hidden"))}updateHud(){this.updateTutorial();let t=this.game,e=t.player,i=Math.floor(t.time);i!==this.lastSec&&(this.lastSec=i,F("time").textContent=ks(i)),this.drawMinimap();let s=F("wp"),r=t.objectiveTarget(),a=r.x,o=r.z,l=r.label,h=Math.hypot(a-e.x,o-e.z);if(t.state!=="play"||h<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let u=this._d.set(a,1.1,o).project(this.camera),f=u.x,d=u.y,g=u.z>1;g&&(f=-f,d=-d);let _=.88,m=g||Math.abs(f)>_||Math.abs(d)>_;if(m){let x=_/Math.max(Math.abs(f),Math.abs(d),.001);f*=x,d*=x,g&&Math.abs(d)<_-.01&&(d=-_)}m&&f<-.4&&d>-.3&&(f=-.4),s.classList.toggle("edge",m);let p=Math.max(64,Math.min(this.w-64,(f+1)/2*this.w)),y=Math.max(40,Math.min(this.h-40,(1-d)/2*this.h));s.style.transform=`translate(${p}px,${y}px) translate(-50%,-50%)`;let b=l+" "+Math.round(h*1.5)+"m";s.dataset.t!==b&&(s.dataset.t=b,s.lastChild.textContent=b)}let c=F("ind");t.guards.forEach((u,f)=>{let d=c.children[f];d||(d=document.createElement("i"),c.appendChild(d));let g=u.state==="alert"||u.state==="flee",_=!g&&(u.susp>.04||u.state==="investigate"||u.state==="search");if(!g&&!_){d.style.display="none";return}let m=Ce(e.face,Math.atan2(u.x-e.x,u.z-e.z));d.style.display="",d.className=g?"alert":"",d.style.opacity=g?1:(.35+u.susp*.65).toFixed(2),d.style.transform=`translate(-50%,-50%) rotate(${-m*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let s=i.getContext("2d");for(let a=0;a<t.H;a++)for(let o=0;o<t.W;o++){let l=a*t.W+o,h=t.ch[l];s.fillStyle=h==="#"?"#1d2140":!t.walk[l]&&!t.outdoor[l]?"#a7a3bd":t.outdoor[l]?t.floor[l]==="road"?"#7d8596":"#5fae4c":"#efe9df",s.fillRect(o*e,a*e,e,e)}for(let a of this.game.vents||[]){let o=a.gx*e,l=a.gz*e;s.fillStyle="#6a7484",s.fillRect(o-3,l-3,6,6),s.fillStyle="#1d2140",s.fillRect(o-2,l-1.5,4,1),s.fillRect(o-2,l+.5,4,1)}this.mmBase=i,this.mmS=e;let r=F("mm");r.width=i.width,r.height=i.height,this.mmCtx=r.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,i=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let h of t.loot)e.fillStyle=h.type==="cash"?"#2fbf5a":h.type==="gold"?"#f5b301":h.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(h.x*i-1.5,h.z*i-1.5,3,3);t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*i,(t.L.safe.y+.15)*i,i*.7,i*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*i,t.L.exit.z*i,i,0,6.3),e.stroke());for(let h of t.guards){let c=h.state==="ko"||h.state==="getup"||h.state==="sleep",u=h.state==="alert"||h.state==="flee"?"#ff3b4e":h.kind==="clerk"?"#f4f1ea":h.susp>.25?"#ff9f1c":c?"#8a8fae":"#3f6fe0";if(!c){e.fillStyle=h.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(h.x*i,h.z*i);let f=-h.face+Math.PI/2;e.arc(h.x*i,h.z*i,h.range*i,f-h.fov/2,f+h.fov/2),e.closePath(),e.fill()}e.fillStyle=u,e.beginPath(),e.arc(h.x*i,h.z*i,2.6,0,6.3),e.fill()}if(!t.powerOff)for(let h of t.spots)e.fillStyle=h.cool>0?"rgba(255,48,64,.6)":"rgba(255,240,176,.55)",e.beginPath(),e.arc(h.x*i,h.z*i,h.def.r*i,0,6.3),e.fill();if(!t.powerOff)for(let h of t.lasers)e.fillStyle=h.on?"#ff3040":"rgba(255,48,64,.3)",h.alongX?e.fillRect(h.lo*i,h.line*i-1,(h.hi-h.lo)*i,2):e.fillRect(h.line*i-1,h.lo*i,2,(h.hi-h.lo)*i);for(let h of t.doors)e.fillStyle=h.open?"#3ddc84":"#ff3b4e",e.fillRect(h.x*i,h.y*i,i,i);for(let h of t.keyMeshes)h.m.visible&&(e.fillStyle="#2f7ae8",e.fillRect(h.x*i+.5,h.y*i+.5,i-1,i-1));for(let h of t.dogs)e.fillStyle=h.state==="bark"||h.state==="barkHide"?"#ff3b4e":"#c98a4a",e.fillRect(h.x*i-2,h.z*i-2,4,4);let r=this.ghost;if(r&&r.pts.length>3){let h=r.pts,c=h.length/2;e.strokeStyle="rgba(199,125,255,.45)",e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(h[0]/10*i,h[1]/10*i);for(let p=1;p<c;p++)e.lineTo(h[p*2]/10*i,h[p*2+1]/10*i);e.stroke(),e.setLineDash([]);let u=Math.min(c-1,t.time/r.dt),f=Math.floor(u),d=Math.min(c-1,f+1),g=u-f,_=(h[f*2]+(h[d*2]-h[f*2])*g)/10*i,m=(h[f*2+1]+(h[d*2+1]-h[f*2+1])*g)/10*i;e.fillStyle="rgba(199,125,255,.95)",e.beginPath(),e.arc(_,m,3.4,0,6.3),e.fill(),e.strokeStyle="#fff",e.lineWidth=1,e.stroke()}let a=-s.face+Math.PI/2,o=s.x*i,l=s.z*i;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(o+Math.cos(a)*5,l+Math.sin(a)*5),e.lineTo(o+Math.cos(a+2.5)*4,l+Math.sin(a+2.5)*4),e.lineTo(o+Math.cos(a-2.5)*4,l+Math.sin(a-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,i=e.L,s=this.camera,r=this.aspect<1?1+(1-this.aspect)*1.6:1,a;if(this.state==="menu"||this.state==="soon"){let o=this.time*.07,l=this._f.set(i.W/2,0,i.H/2-2);s.position.set(l.x+Math.sin(o)*17*r,19*r,l.z+Math.cos(o)*17*r),s.lookAt(l),a=42}else{e.applyCamera(s,t),a=(this.aspect<1?this.fovBase+14:this.fovBase)+e.fovKick+(e.fovPunch||0);let o=F("speed"),l=Math.min(1,e.fovKick/9).toFixed(2);o.dataset.o!==l&&(o.dataset.o=l,o.style.opacity=l)}Math.abs(s.fov-a)>.01&&(s.fov=a,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},qu=new jc;window.__app=qu;qu.boot().catch(n=>{console.error(n);let t=F("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
