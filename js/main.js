var uh=0,bl=1,fh=2;var cr=1,dh=2,_s=3,Mn=0,qe=1,Ie=2,zn=0,vs=1,ri=2,Ml=3,Sl=4,ph=5;var Bn=100,mh=101,gh=102,xh=103,yh=104,_h=200,vh=201,bh=202,Mh=203,wl=204,Tl=205,Sh=206,wh=207,Th=208,Ah=209,Eh=210,Ch=211,Rh=212,Ph=213,Ih=214,ia=0,na=1,sa=2,cs=3,ra=4,aa=5,oa=6,la=7,Da=0,Lh=1,Dh=2,Gi=0,Al=1,El=2,Cl=3,hr=4,Rl=5,Pl=6,Il=7;var Ll=300,Gn=301,bs=302,Na=303,Ua=304,hs=1e3,_i=1001,ca=1002,ze=1003,Nh=1004;var ur=1005;var ni=1006,ka=1007;var sn=1008;var ai=1009,Dl=1010,Nl=1011,Ms=1012,Oa=1013,Ri=1014,bi=1015,Pi=1016,Fa=1017,za=1018,Hn=1020,Ul=35902,kl=35899,Ol=1021,Fl=1022,Ii=1023,Ji=1026,rn=1027,Ba=1028,Ga=1029,Sn=1030,Ha=1031;var Va=1033,fr=33776,dr=33777,pr=33778,mr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ka=37496,Ja=37488,ja=37489,gr=37490,Qa=37491,to=37808,eo=37809,io=37810,no=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,yo=36283,_o=36284,xr=36285,vo=36286;var Bs=2300,ha=2301,ta=2302,dl=2303,pl=2400,ml=2401,gl=2402;var Uh=3200;var bo=0,kh=1,an="",ii="srgb",Gs="srgb-linear",Hs="linear",se="srgb";var ea=7680;var Oh=519,Fh=512,zh=513,Bh=514,zl=515,Gh=516,Hh=517,Bl=518,Gl=519,Vh=35044;var Hl="300 es",vi=2e3,us=2001;function mf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wh(){let n=Vs("canvas");return n.style.display="block",n}var Fc={},fs=null;function Vl(...n){let t="THREE."+n.shift();fs?fs("log",t,...n):console.log(t,...n)}function Xh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=Xh(n);let t="THREE."+n.shift();if(fs)fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=Xh(n);let t="THREE."+n.shift();if(fs)fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function zs(...n){let t=n.join(" ");t in Fc||(Fc[t]=!0,Ft(...n))}function qh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Yh={[ia]:ia,[sa]:oa,[ra]:ra,[cs]:aa,[na]:na,[oa]:sa,[la]:la,[aa]:cs},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xo=Math.PI/180,ua=180/Math.PI;function yr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function xf(n,t){return(n%t+t)%t}function qo(n,t,e){return(1-e)*n+e*t}function Zh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yf(n,t){if(t.constructor===Float32Array)return n;let e=Wl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _f(n,t){if(t.constructor===Float32Array)return n;let e=Wl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var $l=class $l{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var Zt=$l,Oi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],f=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||h!==p||c!==g){let d=l*u+h*p+c*g+f*_;d<0&&(u=-u,p=-p,g=-g,_=-_,d=-d);let m=1-o;if(d<.9995){let v=Math.acos(d),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+u*o,h=h*m+p*o,c=c*m+g*o,f=f*m+_*o}else{l=l*m+u*o,h=h*m+p*o,c=c*m+g*o,f=f*m+_*o;let v=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=v,h*=v,c*=v,f*=v}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+c*f+l*p-h*u,t[e+1]=l*g+c*u+h*f-o*p,t[e+2]=h*g+c*p+o*u-l*f,t[e+3]=c*g-o*f-l*u-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),f=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*f+h*p*g,this._y=h*p*f-u*c*g,this._z=h*c*g+u*p*f,this._w=h*c*f-u*p*g;break;case"YXZ":this._x=u*c*f+h*p*g,this._y=h*p*f-u*c*g,this._z=h*c*g-u*p*f,this._w=h*c*f+u*p*g;break;case"ZXY":this._x=u*c*f-h*p*g,this._y=h*p*f+u*c*g,this._z=h*c*g+u*p*f,this._w=h*c*f-u*p*g;break;case"ZYX":this._x=u*c*f-h*p*g,this._y=h*p*f+u*c*g,this._z=h*c*g-u*p*f,this._w=h*c*f+u*p*g;break;case"YZX":this._x=u*c*f+h*p*g,this._y=h*p*f+u*c*g,this._z=h*c*g-u*p*f,this._w=h*c*f-u*p*g;break;case"XZY":this._x=u*c*f-h*p*g,this._y=h*p*f-u*c*g,this._z=h*c*g+u*p*f,this._w=h*c*f+u*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],f=e[10],u=i+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kl=class Kl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),c=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*h+a*f-o*c,this.y=i+l*c+o*h-r*f,this.z=s+l*f+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;var H=Kl,Yo=new H,zc=new Oi,Jl=class Jl{constructor(t,e,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],f=i[7],u=i[2],p=i[5],g=i[8],_=s[0],d=s[3],m=s[6],v=s[1],b=s[4],y=s[7],w=s[2],A=s[5],x=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*d+o*b+l*A,r[6]=a*m+o*y+l*x,r[1]=h*_+c*v+f*w,r[4]=h*d+c*b+f*A,r[7]=h*m+c*y+f*x,r[2]=u*_+p*v+g*w,r[5]=u*d+p*b+g*A,r[8]=u*m+p*y+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=c*a-o*h,u=o*l-c*r,p=h*r-a*l,g=e*f+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*h-c*i)*_,t[2]=(o*i-s*a)*_,t[3]=u*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-h*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jl.prototype.isMatrix3=!0;var Gt=Jl,Zo=new Gt,Bc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){let n={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===an?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gs]:{primaries:t,whitePoint:i,transfer:Hs,toXYZ:Bc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:se,toXYZ:Bc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),n}var te=vf();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zn,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zn===void 0&&(Zn=Vs("canvas")),Zn.width=t.width,Zn.height=t.height;let s=Zn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bf=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($o(s[a].image)):r.push($o(s[a]))}else r=$o(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function $o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Mf=0,Ko=new H,si=class n extends ki{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=_i,s=_i,r=ni,a=sn,o=Ii,l=ai,h=n.DEFAULT_ANISOTROPY,c=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=yr(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Ll;si.DEFAULT_ANISOTROPY=1;var jl=class jl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],f=l[8],u=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(p+1)/2,w=(m+1)/2,A=(c+u)/4,x=(f+_)/4,M=(g+d)/4;return b>y&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=x/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=x/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(f-_)/v,this.z=(u-c)/v,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;var be=jl,da=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new si({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends da{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ws=class extends si{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends si{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var La=class La{constructor(t,e,i,s,r,a,o,l,h,c,f,u,p,g,_,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,c,f,u,p,g,_,d)}set(t,e,i,s,r,a,o,l,h,c,f,u,p,g,_,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=f,m[14]=u,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),a=1/$n.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*c,p=a*f,g=o*c,_=o*f;e[0]=l*c,e[4]=-l*f,e[8]=h,e[1]=p+g*h,e[5]=u-_*h,e[9]=-o*l,e[2]=_-u*h,e[6]=g+p*h,e[10]=a*l}else if(t.order==="YXZ"){let u=l*c,p=l*f,g=h*c,_=h*f;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*c,p=l*f,g=h*c,_=h*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*c,p=a*f,g=o*c,_=o*f;e[0]=l*c,e[4]=g*h-p,e[8]=u*h+_,e[1]=l*f,e[5]=_*h+u,e[9]=p*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-u*f,e[8]=g*f+p,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=p*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=a*l,p=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-f,e[8]=h*c,e[1]=u*f+_,e[5]=a*c,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*c,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,wf)}lookAt(t,e,i){let s=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),fn.crossVectors(i,ci),fn.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),fn.crossVectors(i,ci)),fn.normalize(),Ir.crossVectors(ci,fn),s[0]=fn.x,s[4]=Ir.x,s[8]=ci.x,s[1]=fn.y,s[5]=Ir.y,s[9]=ci.y,s[2]=fn.z,s[6]=Ir.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],f=i[5],u=i[9],p=i[13],g=i[2],_=i[6],d=i[10],m=i[14],v=i[3],b=i[7],y=i[11],w=i[15],A=s[0],x=s[4],M=s[8],D=s[12],P=s[1],O=s[5],F=s[9],G=s[13],L=s[2],E=s[6],R=s[10],N=s[14],I=s[3],k=s[7],V=s[11],J=s[15];return r[0]=a*A+o*P+l*L+h*I,r[4]=a*x+o*O+l*E+h*k,r[8]=a*M+o*F+l*R+h*V,r[12]=a*D+o*G+l*N+h*J,r[1]=c*A+f*P+u*L+p*I,r[5]=c*x+f*O+u*E+p*k,r[9]=c*M+f*F+u*R+p*V,r[13]=c*D+f*G+u*N+p*J,r[2]=g*A+_*P+d*L+m*I,r[6]=g*x+_*O+d*E+m*k,r[10]=g*M+_*F+d*R+m*V,r[14]=g*D+_*G+d*N+m*J,r[3]=v*A+b*P+y*L+w*I,r[7]=v*x+b*O+y*E+w*k,r[11]=v*M+b*F+y*R+w*V,r[15]=v*D+b*G+y*N+w*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],f=t[6],u=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15],v=l*p-h*u,b=o*p-h*f,y=o*u-l*f,w=a*p-h*c,A=a*u-l*c,x=a*f-o*c;return e*(_*v-d*b+m*y)-i*(g*v-d*w+m*A)+s*(g*b-_*w+m*x)-r*(g*y-_*A+d*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=t[9],u=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],v=e*o-i*a,b=e*l-s*a,y=e*h-r*a,w=i*l-s*o,A=i*h-r*o,x=s*h-r*l,M=c*_-f*g,D=c*d-u*g,P=c*m-p*g,O=f*d-u*_,F=f*m-p*_,G=u*m-p*d,L=v*G-b*F+y*O+w*P-A*D+x*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/L;return t[0]=(o*G-l*F+h*O)*E,t[1]=(s*F-i*G-r*O)*E,t[2]=(_*x-d*A+m*w)*E,t[3]=(u*A-f*x-p*w)*E,t[4]=(l*P-a*G-h*D)*E,t[5]=(e*G-s*P+r*D)*E,t[6]=(d*y-g*x-m*b)*E,t[7]=(c*x-u*y+p*b)*E,t[8]=(a*F-o*P+h*M)*E,t[9]=(i*P-e*F-r*M)*E,t[10]=(g*A-_*y+m*v)*E,t[11]=(f*y-c*A-p*v)*E,t[12]=(o*D-a*O-l*M)*E,t[13]=(e*O-i*D+s*M)*E,t[14]=(_*b-g*w-d*v)*E,t[15]=(c*w-f*b+u*v)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,f=o+o,u=r*h,p=r*c,g=r*f,_=a*c,d=a*f,m=o*f,v=l*h,b=l*c,y=l*f,w=i.x,A=i.y,x=i.z;return s[0]=(1-(_+m))*w,s[1]=(p+y)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(u+m))*A,s[6]=(d+v)*A,s[7]=0,s[8]=(g+b)*x,s[9]=(d-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=$n.set(s[0],s[1],s[2]).length(),o=$n.set(s[4],s[5],s[6]).length(),l=$n.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ti.copy(this);let h=1/a,c=1/o,f=1/l;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=c,Ti.elements[5]*=c,Ti.elements[6]*=c,Ti.elements[8]*=f,Ti.elements[9]*=f,Ti.elements[10]*=f,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=vi,l=!1){let h=this.elements,c=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=f,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vi,l=!1){let h=this.elements,c=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===vi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=f,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};La.prototype.isMatrix4=!0;var ce=La,$n=new H,Ti=new ce,Sf=new H(0,0,0),wf=new H(1,1,1),fn=new H,Ir=new H,ci=new H,Hc=new ce,Vc=new Oi,ji=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tf=0,Wc=new H,Kn=new Oi,Xi=new ce,Lr=new H,Ds=new H,Af=new H,Ef=new Oi,Xc=new H(1,0,0),qc=new H(0,1,0),Yc=new H(0,0,1),Zc={type:"added"},Cf={type:"removed"},Jn={type:"childadded",child:null},Jo={type:"childremoved",child:null},we=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new H,e=new ji,i=new Oi,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lr.copy(t):Lr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ds,Lr,this.up):Xi.lookAt(Lr,Ds,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(Xi),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new H(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rf={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,i),m=this._getHandJoint(h,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),p=.02,g=.005;h.inputState.pinching&&u>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function jo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=xf(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=jo(a,r,t+1/3),this.g=jo(a,r,t),this.b=jo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=ii){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let i=$h[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return te.workingToColorSpace(je.copy(this),t),Math.round(ee(je.r*255,0,255))*65536+Math.round(ee(je.g*255,0,255))*256+Math.round(ee(je.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=ii){te.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(Dr);let i=qo(dn.h,Dr.h,e),s=qo(dn.s,Dr.s,e),r=qo(dn.l,Dr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Ot;Ot.NAMES=$h;var qs=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new H,qi=new H,Qo=new H,Yi=new H,jn=new H,Qn=new H,$c=new H,tl=new H,el=new H,il=new H,nl=new be,sl=new be,rl=new be,xn=class n{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ai.subVectors(t,e),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ai.subVectors(s,e),qi.subVectors(i,e),Qo.subVectors(t,e);let a=Ai.dot(Ai),o=Ai.dot(qi),l=Ai.dot(Qo),h=qi.dot(qi),c=qi.dot(Qo),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return nl.setScalar(0),sl.setScalar(0),rl.setScalar(0),nl.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,i),rl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(sl,r.y),a.addScaledVector(rl,r.z),a}static isFrontFacing(t,e,i,s){return Ai.subVectors(i,e),qi.subVectors(t,e),Ai.cross(qi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ai.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;jn.subVectors(s,i),Qn.subVectors(r,i),tl.subVectors(t,i);let l=jn.dot(tl),h=Qn.dot(tl);if(l<=0&&h<=0)return e.copy(i);el.subVectors(t,s);let c=jn.dot(el),f=Qn.dot(el);if(c>=0&&f<=c)return e.copy(s);let u=l*f-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return a=l/(l-c),e.copy(i).addScaledVector(jn,a);il.subVectors(t,r);let p=jn.dot(il),g=Qn.dot(il);if(g>=0&&p<=g)return e.copy(r);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(Qn,o);let d=c*g-p*f;if(d<=0&&f-c>=0&&p-g>=0)return $c.subVectors(r,s),o=(f-c)/(f-c+(p-g)),e.copy(s).addScaledVector($c,o);let m=1/(d+_+u);return a=_*m,o=u*m,e.copy(i).addScaledVector(jn,a).addScaledVector(Qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fi=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Ur.subVectors(this.max,Ns),ts.subVectors(t.a,Ns),es.subVectors(t.b,Ns),is.subVectors(t.c,Ns),pn.subVectors(es,ts),mn.subVectors(is,es),Pn.subVectors(ts,is);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Pn.z,Pn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Pn.z,0,-Pn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Pn.y,Pn.x,0];return!al(e,ts,es,is,Ur)||(e=[1,0,0,0,1,0,0,0,1],!al(e,ts,es,is,Ur))?!1:(kr.crossVectors(pn,mn),e=[kr.x,kr.y,kr.z],al(e,ts,es,is,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zi=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,Nr=new Fi,ts=new H,es=new H,is=new H,pn=new H,mn=new H,Pn=new H,Ns=new H,Ur=new H,kr=new H,In=new H;function al(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){In.fromArray(n,r);let o=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=t.dot(In),h=e.dot(In),c=i.dot(In);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Ee=new H,Or=new Zt,Pf=0,oe=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vh,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=t!==void 0?Wl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):yf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_f(t,this.array)}};var Ys=class extends oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Zs=class extends oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},If=new Fi,Us=new H,ol=new H,Qi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):If.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(ol)),this.expandByPoint(Us.copy(t.center).sub(ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lf=0,yi=new ce,ll=new we,ns=new H,hi=new Fi,ks=new Fi,Fe=new H,xe=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?Zs:Ys)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,i){return yi.makeTranslation(t,e,i),this.applyMatrix4(yi),this}scale(t,e,i){return yi.makeScale(t,e,i),this.applyMatrix4(yi),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(hi.min,ks.min),hi.expandByPoint(Fe),Fe.addVectors(hi.max,ks.max),hi.expandByPoint(Fe)):(hi.expandByPoint(ks.min),hi.expandByPoint(ks.max))}hi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Fe.fromBufferAttribute(o,h),l&&(ns.fromBufferAttribute(t,h),Fe.add(ns)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new oe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],h=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new H,l[D]=new H;let c=new H,f=new H,u=new H,p=new Zt,g=new Zt,_=new Zt,d=new H,m=new H;function v(D,P,O){h[D]=h[P]=h[O]=1,c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,O),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,O),f.sub(c),u.sub(c),g.sub(p),_.sub(p);let F=1/(g.x*_.y-_.x*g.y);isFinite(F)&&(d.copy(f).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(F),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(F),o[D].add(d),o[P].add(d),o[O].add(d),l[D].add(m),l[P].add(m),l[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,P=b.length;D<P;++D){let O=b[D],F=O.start,G=O.count;for(let L=F,E=F+G;L<E;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new H,w=new H,A=new H,x=new H;function M(D){A.fromBufferAttribute(s,D),x.copy(A);let P=o[D];y.copy(P),y.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(x,P);let F=w.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,P=i.count;D<P;++D)h[D]&&M(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,h=new H,c=new H,f=new H;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,d),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,f=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let m=0;m<c;m++)u[g++]=h[p++]}return new oe(u,c,f)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,f=h.length;c<f;c++){let u=h[c],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let f=0,u=h.length;f<u;f++){let p=h[f];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],f=r[h];for(let u=0,p=f.length;u<p;u++)c.push(f[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cl=new H,Df=new H,Nf=new Gt,Ci=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cl.subVectors(i,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(cl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Nf.getNormalMatrix(t),s=this.coplanarPoint(cl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Uf=0,tn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=vs,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Tl,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $i=new H,hl=new H,Fr=new H,zr=new H,$s=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hl.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),zr.copy(this.origin).sub(hl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=zr.dot(this.direction),l=-zr.dot(Fr),h=zr.lengthSq(),c=Math.abs(1-a*a),f,u,p,g;if(c>0)if(f=a*l-o,u=a*o-l,g=r*c,f>=0)if(u>=-g)if(u<=g){let _=1/c;f*=_,u*=_,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+h}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+h):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+h):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+h);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hl).addScaledVector(Fr,u),p}intersectSphere(t,e){if(t.radius<0)return null;$i.subVectors(t.center,this.origin);let i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,f=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,_=e.y-a.y,d=e.z-a.z,m=i.x-a.x,v=i.y-a.y,b=i.z-a.z,y=Math.abs(l),w=Math.abs(h),A=Math.abs(c),x,M,D,P,O,F,G,L,E,R,N,I;if(y>=w&&y>=A?(D=l,F=f,E=g,I=m,l>=0?(x=h,M=c,P=u,O=p,G=_,L=d,R=v,N=b):(x=c,M=h,P=p,O=u,G=d,L=_,R=b,N=v)):w>=A?(D=h,F=u,E=_,I=v,h>=0?(x=c,M=l,P=p,O=f,G=d,L=g,R=b,N=m):(x=l,M=c,P=f,O=p,G=g,L=d,R=m,N=b)):(D=c,F=p,E=d,I=b,c>=0?(x=l,M=h,P=f,O=u,G=g,L=_,R=m,N=v):(x=h,M=l,P=u,O=f,G=_,L=g,R=v,N=m)),D===0)return null;let k=x/D,V=M/D,J=1/D,lt=P-k*F,_t=O-V*F,$=G-k*E,X=L-V*E,Y=R-k*I,dt=N-V*I,st=Y*X-dt*$,xt=lt*dt-_t*Y,Bt=$*_t-X*lt;if(s){if(st<0||xt<0||Bt<0)return null}else if((st<0||xt<0||Bt<0)&&(st>0||xt>0||Bt>0))return null;let Lt=st+xt+Bt;if(Lt===0)return null;let Ht=J*(st*F+xt*E+Bt*I);return(Lt>0?Ht<0:Ht>0)?null:this.at(Ht/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kc=new ce,Ln=new $s,Br=new Qi,Jc=new H,Gr=new H,Hr=new H,Vr=new H,ul=new H,Wr=new H,jc=new H,Xr=new H,Et=class extends we{constructor(t=new xe,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],f=r[l];c!==0&&(ul.fromBufferAttribute(f,t),a?Wr.addScaledVector(ul,c):Wr.addScaledVector(ul.sub(e),c))}e.add(Wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(Br.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Br,Jc)===null||Ln.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let d=u[g],m=a[d.materialIndex],v=Math.max(d.start,p.start),b=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let y=v,w=b;y<w;y+=3){let A=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);s=qr(this,m,t,i,h,c,f,A,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){let v=o.getX(d),b=o.getX(d+1),y=o.getX(d+2);s=qr(this,a,t,i,h,c,f,v,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let d=u[g],m=a[d.materialIndex],v=Math.max(d.start,p.start),b=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let y=v,w=b;y<w;y+=3){let A=y,x=y+1,M=y+2;s=qr(this,m,t,i,h,c,f,A,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){let v=d,b=d+1,y=d+2;s=qr(this,a,t,i,h,c,f,v,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function kf(n,t,e,i,s,r,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Mn,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Xr);return h<e.near||h>e.far?null:{distance:h,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,Gr),n.getVertexPosition(l,Hr),n.getVertexPosition(h,Vr);let c=kf(n,t,e,i,Gr,Hr,Vr,jc);if(c){let f=new H;xn.getBarycoord(jc,Gr,Hr,Vr,f),s&&(c.uv=xn.getInterpolatedAttribute(s,o,l,h,f,new Zt)),r&&(c.uv1=xn.getInterpolatedAttribute(r,o,l,h,f,new Zt)),a&&(c.normal=xn.getInterpolatedAttribute(a,o,l,h,f,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new H,materialIndex:0};xn.getNormal(Gr,Hr,Vr,u.normal),c.face=u,c.barycoord=f}return c}var Ks=class extends si{constructor(t=null,e=1,i=1,s,r,a,o,l,h=ze,c=ze,f,u){super(null,a,o,l,h,c,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends oe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new ce,Qc=new ce,Yr=[],th=new Fi,Of=new ce,Os=new Et,Fs=new Qi,Un=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Of)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),th.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),Fs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Qc.multiplyMatrices(i,ss),Os.matrixWorld=Qc,Os.raycast(t,Yr);for(let a=0,o=Yr.length;a<o;a++){let l=Yr[a];l.instanceId=r,l.object=this,e.push(l)}Yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(s*this.count),s,this.count,Ba,bi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dn=new Qi,Ff=new Zt(.5,.5),Zr=new H,yn=class{constructor(t=new Ci,e=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],f=r[5],u=r[6],p=r[7],g=r[8],_=r[9],d=r[10],m=r[11],v=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(h-a,p-c,m-g,w-v).normalize(),s[1].setComponents(h+a,p+c,m+g,w+v).normalize(),s[2].setComponents(h+o,p+f,m+_,w+b).normalize(),s[3].setComponents(h-o,p-f,m-_,w-b).normalize(),i)s[4].setComponents(l,u,d,y).normalize(),s[5].setComponents(h-l,p-u,m-d,w-y).normalize();else if(s[4].setComponents(h-l,p-u,m-d,w-y).normalize(),e===vi)s[5].setComponents(h+l,p+u,m+d,w+y).normalize();else if(e===us)s[5].setComponents(l,u,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){Dn.center.set(0,0,0);let e=Ff.distanceTo(t.center);return Dn.radius=.7071067811865476+e,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eh=new ce,ma=class n{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];eh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new yn),i[s].setFromProjectionMatrix(eh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new yn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var zi=class extends tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ih=new ce,xl=new $s,$r=new Qi,Kr=new H,en=class extends we{constructor(t=new xe,e=new zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;ih.copy(s).invert(),xl.copy(t.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=u,_=p;g<_;g++){let d=h.getX(g);Kr.fromBufferAttribute(f,d),nh(Kr,d,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,_=p;g<_;g++)Kr.fromBufferAttribute(f,g),nh(Kr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nh(n,t,e,i,s,r,a){let o=xl.distanceSqToPoint(n);if(o<e){let l=new H;xl.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var js=class extends si{constructor(t=[],e=Gn,i,s,r,a,o,l,h,c){super(t,e,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qs=class extends si{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nn=class extends si{constructor(t,e,i=Ri,s,r,a,o=ze,l=ze,h,c=Ji,f=1){if(c!==Ji&&c!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tr=class extends nn{constructor(t,e=Ri,i=Gn,s,r,a=ze,o=ze,l,h=Ji){let c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,i,s,r,a,o,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},er=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class n extends xe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],f=[],u=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(f,2));function g(_,d,m,v,b,y,w,A,x,M,D){let P=y/x,O=w/M,F=y/2,G=w/2,L=A/2,E=x+1,R=M+1,N=0,I=0,k=new H;for(let V=0;V<R;V++){let J=V*O-G;for(let lt=0;lt<E;lt++){let _t=lt*P-F;k[_]=_t*v,k[d]=J*b,k[m]=L,h.push(k.x,k.y,k.z),k[_]=0,k[d]=0,k[m]=A>0?1:-1,c.push(k.x,k.y,k.z),f.push(lt/x),f.push(1-V/M),N+=1}}for(let V=0;V<M;V++)for(let J=0;J<x;J++){let lt=u+J+E*V,_t=u+J+E*(V+1),$=u+(J+1)+E*(V+1),X=u+(J+1)+E*V;l.push(lt,_t,X),l.push(_t,$,X),I+=6}o.addGroup(p,I,D),p+=I,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ms=class n extends xe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new H,c=new Zt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let p=i+f/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gs=class n extends xe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],f=[],u=[],p=[],g=0,_=[],d=i/2,m=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function v(){let y=new H,w=new H,A=0,x=(e-t)/i;for(let M=0;M<=r;M++){let D=[],P=M/r,O=P*(e-t)+t;for(let F=0;F<=s;F++){let G=F/s,L=G*l+o,E=Math.sin(L),R=Math.cos(L);w.x=O*E,w.y=-P*i+d,w.z=O*R,f.push(w.x,w.y,w.z),y.set(E,x,R).normalize(),u.push(y.x,y.y,y.z),p.push(G,1-P),D.push(g++)}_.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let P=_[D][M],O=_[D+1][M],F=_[D+1][M+1],G=_[D][M+1];(t>0||D!==0)&&(c.push(P,O,G),A+=3),(e>0||D!==r-1)&&(c.push(O,F,G),A+=3)}h.addGroup(m,A,0),m+=A}function b(y){let w=g,A=new Zt,x=new H,M=0,D=y===!0?t:e,P=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,d*P,0),u.push(0,P,0),p.push(.5,.5),g++;let O=g;for(let F=0;F<=s;F++){let L=F/s*l+o,E=Math.cos(L),R=Math.sin(L);x.x=D*R,x.y=d*P,x.z=D*E,f.push(x.x,x.y,x.z),u.push(0,P,0),A.x=E*.5+.5,A.y=R*.5*P+.5,p.push(A.x,A.y),g++}for(let F=0;F<s;F++){let G=w+F,L=O+F;y===!0?c.push(L,L+1,G):c.push(L+1,L,G),M+=3}h.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kn=class n extends gs{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class n extends xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new H,y=new H,w=new H;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],y),p(e[A+2],w),l(b,y,w,v)}function l(v,b,y,w){let A=w+1,x=[];for(let M=0;M<=A;M++){x[M]=[];let D=v.clone().lerp(y,M/A),P=b.clone().lerp(y,M/A),O=A-M;for(let F=0;F<=O;F++)F===0&&M===A?x[M][F]=D:x[M][F]=D.clone().lerp(P,F/O)}for(let M=0;M<A;M++)for(let D=0;D<2*(A-M)-1;D++){let P=Math.floor(D/2);D%2===0?(u(x[M][P+1]),u(x[M+1][P]),u(x[M][P])):(u(x[M][P+1]),u(x[M+1][P+1]),u(x[M+1][P]))}}function h(v){let b=new H;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function c(){let v=new H;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=d(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(y,1-w)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let b=a[v+0],y=a[v+2],w=a[v+4],A=Math.max(b,y,w),x=Math.min(b,y,w);A>.9&&x<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let v=new H,b=new H,y=new H,w=new H,A=new Zt,x=new Zt,M=new Zt;for(let D=0,P=0;D<r.length;D+=9,P+=6){v.set(r[D+0],r[D+1],r[D+2]),b.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),A.set(a[P+0],a[P+1]),x.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),w.copy(v).add(b).add(y).divideScalar(3);let O=d(w);_(A,P+0,v,O),_(x,P+2,b,O),_(M,P+4,y,O)}}function _(v,b,y,w){w<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ir=class n extends ga{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},nr=class n extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,f=t/o,u=e/l,p=[],g=[],_=[],d=[];for(let m=0;m<c;m++){let v=m*u-a;for(let b=0;b<h;b++){let y=b*f-r;g.push(y,-v,0),_.push(0,0,1),d.push(b/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let b=v+h*m,y=v+h*(m+1),w=v+1+h*(m+1),A=v+1+h*m;p.push(b,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},xs=class n extends xe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],c=[],f=t,u=(e-t)/s,p=new H,g=new Zt;for(let _=0;_<=s;_++){for(let d=0;d<=i;d++){let m=r+d/i*a;p.x=f*Math.cos(m),p.y=f*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,c.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){let d=_*(i+1);for(let m=0;m<i;m++){let v=m+d,b=v,y=v+i+1,w=v+i+2,A=v+1;o.push(b,y,A),o.push(y,w,A)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var sr=class n extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],f=new H,u=new H,p=[],g=[],_=[],d=[];for(let m=0;m<=i;m++){let v=[],b=m/i,y=a+b*o,w=t*Math.cos(y),A=Math.sqrt(t*t-w*w),x=0;m===0&&a===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let D=M/e,P=s+D*r;f.x=-A*Math.cos(P),f.y=w,f.z=A*Math.sin(P),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),d.push(D+x,1-b),v.push(h++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let b=c[m][v+1],y=c[m][v],w=c[m+1][v],A=c[m+1][v+1];(m!==0||a>0)&&p.push(b,y,A),(m!==i-1||l<Math.PI)&&p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Vn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(sh(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Qe(n){let t={};for(let e=0;e<n.length;e++){let i=Vn(n[e]);for(let s in i)t[s]=i[s]}return t}function sh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Kh={clone:Vn,merge:Qe},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vn(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xa=class extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Pe=class extends tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ya=class extends tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Jr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _n=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends _n{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ml:r=t,o=2*e-i;break;case gl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:a=t,l=2*i-e;break;case gl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,d=_*g,m=-u*d+2*u*_-u*g,v=(1+u)*d+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-p)*d+(1.5+p)*_+.5*g,y=p*d-p*_;for(let w=0;w!==o;++w)r[w]=m*a[c+w]+v*a[h+w]+b*a[l+w]+y*a[f+w];return r}},ba=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(s-e),f=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*f+a[l+u]*c;return r}},Ma=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends _n{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let g=(i-e)/(s-e),_=1-g;for(let d=0;d!==o;++d)r[d]=a[h+d]*_+a[l+d]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let _=a[h+g],d=a[l+g],m=p*u+g*2,v=f[m],b=f[m+1],y=t*u+g*2,w=c[y],A=c[y+1],x=Vf(i,e,v,w,s);r[g]=Jh(x,_,b,A,d)}return r}};function Jh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Hf(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Vf(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Jh(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Hf(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Jr(t.settings)&&(i.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break;case dl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Jr(this.settings)&&(rh(this.settings.inTangents,t),rh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Jr(this.settings)&&(ah(this.settings.inTangents,t),ah(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&gf(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){zt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,p=f+i;for(let g=0;g!==i;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let p=0;p!==i;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Jr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function ah(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=ha;var vn=class extends fi{constructor(t,e,i){super(t,e,i)}};vn.prototype.ValueTypeName="bool";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=Bs;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}};wa.prototype.ValueTypeName="color";var Ta=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}};Ta.prototype.ValueTypeName="number";var Aa=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Oi.slerpFlat(r,0,a,h-o,a,h,l);return r}},rr=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends fi{constructor(t,e,i){super(t,e,i)}};bn.prototype.ValueTypeName="string";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=Bs;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}};Ea.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return h.push(c,f),this},this.removeHandler=function(c){let f=h.indexOf(c);return f!==-1&&h.splice(f,2),this},this.getHandler=function(c){for(let f=0,u=h.length;f<u;f+=2){let p=h[f],g=h[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jh=new Ca,Ra=class{constructor(t){this.manager=t!==void 0?t:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},On=class extends ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fl=new ce,oh=new H,lh=new H,Pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yn,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jr=new H,Qr=new Oi,Ui=new H,or=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jr,Qr,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(jr,Qr,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gn=new H,ch=new Zt,hh=new Zt,Xe=class extends or{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lr=class extends or{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yl=class extends Pa{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fn=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new yl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,ys=class extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Xe(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Xe(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Xe(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Xe(as,os,t,e);l.layers=this.layers,this.add(l);let h=new Xe(as,os,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(f,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ql="\\[\\]\\.:\\/",Wf=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Xf="[^"+ql.replace("\\.","")+"]",qf=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Yf=/(WCOD+)?/.source.replace("WCOD",Xf),Zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Kf=new RegExp("^"+qf+Yf+Zf+$f+"$"),Jf=["material","materials","bones","map"],_l=class{constructor(t,e,i){let s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wf,"")}static parseTrackName(t){let e=Kf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_l;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);var Ql=class Ql{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ql.prototype.isMatrix2=!0;var vl=Ql;function Zl(n,t,e,i){let s=jf(i);switch(e){case Ol:return n*t;case Ba:return n*t/s.components*s.byteLength;case Ga:return n*t/s.components*s.byteLength;case Sn:return n*t*2/s.components*s.byteLength;case Ha:return n*t*2/s.components*s.byteLength;case Fl:return n*t*3/s.components*s.byteLength;case Ii:return n*t*4/s.components*s.byteLength;case Va:return n*t*4/s.components*s.byteLength;case fr:case dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(n,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(t,8)/2;case Za:case $a:case Ja:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ka:case gr:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case xo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case yo:case _o:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xr:case vo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(n){switch(n){case ai:case Dl:return{byteLength:1,components:1};case Ms:case Nl:case Pi:return{byteLength:2,components:1};case Fa:case za:return{byteLength:2,components:4};case Ri:case Oa:case bi:return{byteLength:4,components:1};case Ul:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function td(n){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,f=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,h){let c=l.array,f=l.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,c);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){let g=f[u],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wd=`#define PI 3.141592653589793
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
} // validated`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,jd=`uniform sampler2D dfgLUT;
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
}`,Qd=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
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
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform float backgroundBlurriness;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,E0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:ed,alphahash_pars_fragment:id,alphamap_fragment:nd,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:fd,bsdfs:dd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:_d,color_fragment:vd,color_pars_fragment:bd,color_pars_vertex:Md,color_vertex:Sd,common:wd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Ed,emissivemap_fragment:Cd,emissivemap_pars_fragment:Rd,colorspace_fragment:Pd,colorspace_pars_fragment:Id,envmap_fragment:Ld,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Nd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:qd,envmap_vertex:kd,fog_vertex:Od,fog_pars_vertex:Fd,fog_fragment:zd,fog_pars_fragment:Bd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Zd,lights_phong_fragment:$d,lights_phong_pars_fragment:Kd,lights_physical_fragment:Jd,lights_physical_pars_fragment:jd,lights_fragment_begin:Qd,lights_fragment_maps:tp,lights_fragment_end:ep,lightprobes_pars_fragment:ip,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:fp,morphinstance_vertex:dp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:bp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Ep,opaque_fragment:Cp,packing:Rp,premultiplied_alpha_fragment:Pp,project_vertex:Ip,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Op,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Bp,skinning_pars_vertex:Gp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:Zp,transmission_pars_fragment:$p,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:jp,worldpos_vertex:Qp,background_vert:t0,background_frag:e0,backgroundCube_vert:i0,backgroundCube_frag:n0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distance_vert:l0,distance_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:f0,linedashed_frag:d0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:x0,meshmatcap_vert:y0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:b0,meshphong_vert:M0,meshphong_frag:S0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:E0,points_vert:C0,points_frag:R0,shadow_vert:P0,shadow_frag:I0,sprite_vert:L0,sprite_frag:D0},bt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Vi={basic:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Qe([bt.common,bt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Qe([bt.lights,bt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Vi.physical={uniforms:Qe([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Mo={r:0,b:0,g:0},N0=new ce,bu=new Gt;bu.set(-1,0,0,0,1,0,0,0,1);function U0(n,t,e,i,s,r){let a=new Ot(0),o=s===!0?0:1,l,h,c=null,f=0,u=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(v){let b=!1,y=p(v);y===null?d(a,o):y&&y.isColor&&(d(y,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,b){let y=p(b);y&&y.isCubeTexture?(h===void 0&&(h=new Et(new de(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Vn(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(bu),h.material.toneMapped=te.getTransfer(y.colorSpace)!==se,(c!==y||f!==y.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=y,f=y.version,u=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Et(new nr(2,2),new Bi({name:"BackgroundMaterial",uniforms:Vn(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,b){v.getRGB(Mo,Xl(n)),e.buffers.color.setClear(Mo.r,Mo.g,Mo.b,b,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:g,addToRenderList:_,dispose:m}}function k0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(O,F,G,L,E){let R=!1,N=f(O,L,G,F);r!==N&&(r=N,h(r.object)),R=p(O,L,G,E),R&&g(O,L,G,E),E!==null&&t.update(E,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,y(O,F,G,L),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function l(){return n.createVertexArray()}function h(O){return n.bindVertexArray(O)}function c(O){return n.deleteVertexArray(O)}function f(O,F,G,L){let E=L.wireframe===!0,R=i[F.id];R===void 0&&(R={},i[F.id]=R);let N=O.isInstancedMesh===!0?O.id:0,I=R[N];I===void 0&&(I={},R[N]=I);let k=I[G.id];k===void 0&&(k={},I[G.id]=k);let V=k[E];return V===void 0&&(V=u(l()),k[E]=V),V}function u(O){let F=[],G=[],L=[];for(let E=0;E<e;E++)F[E]=0,G[E]=0,L[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:O,attributes:{},index:null}}function p(O,F,G,L){let E=r.attributes,R=F.attributes,N=0,I=G.getAttributes();for(let k in I)if(I[k].location>=0){let J=E[k],lt=R[k];if(lt===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor)),J===void 0||J.attribute!==lt||lt&&J.data!==lt.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function g(O,F,G,L){let E={},R=F.attributes,N=0,I=G.getAttributes();for(let k in I)if(I[k].location>=0){let J=R[k];J===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let lt={};lt.attribute=J,J&&J.data&&(lt.data=J.data),E[k]=lt,N++}r.attributes=E,r.attributesNum=N,r.index=L}function _(){let O=r.newAttributes;for(let F=0,G=O.length;F<G;F++)O[F]=0}function d(O){m(O,0)}function m(O,F){let G=r.newAttributes,L=r.enabledAttributes,E=r.attributeDivisors;G[O]=1,L[O]===0&&(n.enableVertexAttribArray(O),L[O]=1),E[O]!==F&&(n.vertexAttribDivisor(O,F),E[O]=F)}function v(){let O=r.newAttributes,F=r.enabledAttributes;for(let G=0,L=F.length;G<L;G++)F[G]!==O[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function b(O,F,G,L,E,R,N){N===!0?n.vertexAttribIPointer(O,F,G,E,R):n.vertexAttribPointer(O,F,G,L,E,R)}function y(O,F,G,L){_();let E=L.attributes,R=G.getAttributes(),N=F.defaultAttributeValues;for(let I in R){let k=R[I];if(k.location>=0){let V=E[I];if(V===void 0&&(I==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),I==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let J=V.normalized,lt=V.itemSize,_t=t.get(V);if(_t===void 0)continue;let $=_t.buffer,X=_t.type,Y=_t.bytesPerElement,dt=X===n.INT||X===n.UNSIGNED_INT||V.gpuType===Oa;if(V.isInterleavedBufferAttribute){let st=V.data,xt=st.isInterleavedBuffer===!0?st.stride:st.itemSize,Bt=V.offset;if(st.isInstancedInterleavedBuffer||st.isInstancedBufferAttribute){for(let Lt=0;Lt<k.locationSize;Lt++)m(k.location+Lt,st.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<k.locationSize;Lt++)d(k.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Lt=0;Lt<k.locationSize;Lt++)b(k.location+Lt,lt/k.locationSize,X,J,xt*Y,(Bt+lt/k.locationSize*Lt)*Y,dt)}else{if(V.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)m(k.location+st,V.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let st=0;st<k.locationSize;st++)d(k.location+st);n.bindBuffer(n.ARRAY_BUFFER,$);for(let st=0;st<k.locationSize;st++)b(k.location+st,lt/k.locationSize,X,J,lt*Y,lt/k.locationSize*st*Y,dt)}}else if(N!==void 0){let J=N[I];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(k.location,J);break;case 3:n.vertexAttrib3fv(k.location,J);break;case 4:n.vertexAttrib4fv(k.location,J);break;default:n.vertexAttrib1fv(k.location,J)}}}}v()}function w(){D();for(let O in i){let F=i[O];for(let G in F){let L=F[G];for(let E in L){let R=L[E];for(let N in R)c(R[N].object),delete R[N];delete L[E]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;let F=i[O.id];for(let G in F){let L=F[G];for(let E in L){let R=L[E];for(let N in R)c(R[N].object),delete R[N];delete L[E]}}delete i[O.id]}function x(O){for(let F in i){let G=i[F];for(let L in G){let E=G[L];if(E[O.id]===void 0)continue;let R=E[O.id];for(let N in R)c(R[N].object),delete R[N];delete E[O.id]}}}function M(O){for(let F in i){let G=i[F],L=O.isInstancedMesh===!0?O.id:0,E=G[L];if(E!==void 0){for(let R in E){let N=E[R];for(let I in N)c(N[I].object),delete N[I];delete E[R]}delete G[L],Object.keys(G).length===0&&delete i[F]}}}function D(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:d,disableUnusedAttributes:v}}function O0(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=h[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function F0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Ii&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==ai&&x!==bi&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Ft("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:A}}function z0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ci,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=c(f,u,0)},this.setState=function(f,u,p){let g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!d)r?c(null):h();else{let v=r?0:i,b=v*4,y=m.clippingState||null;l.value=y,y=c(g,u,b,p);for(let w=0;w!==b;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,u,p,g){let _=f!==null?f.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let m=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(let b=0,y=p;b!==_;++b,y+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}var br=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new js(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:Vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:zn});r.uniforms.tEquirect.value=e;let a=new Et(s,r),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=ni),new ys(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Qh=256,B0=3,G0=20,Mu=256,Su=16,H0=3,V0=new H,W0=new Ot,wo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ys(1,10,null),this._boxMesh=new Et(new de(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=V0}=r,l=this._renderer;this._setSize(a);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(W0));let d=new ys(i,s,c);return d.position.copy(o),d.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=g,t.background=_,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Qh,Zh(t))}_fromTexture(t,e){t.mapping===Gn||t.mapping===bs?this._setSize(t.image.length===0?Qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=tu(t,!1,!1),i=Math.log2(t)-B0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Gn||t.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=eu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=X0(),this._integrationMaterial=q0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Su);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-H0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Mu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Y0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function tu(n,t,e){return new br(n,{minFilter:sn,generateMipmaps:t,type:Pi,colorSpace:Gs,depthBuffer:e})}function Mr(n,t,e){return new Bi({name:n,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:qe,blending:zn,depthTest:!1,depthWrite:!1})}function X0(){return Mr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mu}u

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
	`)}function q0(){return Mr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Su}},`

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
	`)}function Y0(){return Mr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${G0}
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
	`)}function eu(){return Mr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function iu(){return Mr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Z0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Na||p===Ua)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new br(g.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,g=p===Na||p===Ua,_=p===Gn||p===bs;if(g||_){let d=e.get(u),m=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new wo(n)),d=g?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),d.texture;if(d!==void 0)return d.texture;{let v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new wo(n)),d=g?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),u.addEventListener("dispose",c),d.texture):null}}}return u}function o(u,p){return p===Na?u.mapping=Gn:p===Ua&&(u.mapping=bs),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function $0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zs("WebGLRenderer: "+i+" extension not supported."),s}}}function K0(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(t.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function c(g){let _=g.attributes;for(let d in _)t.update(_[d],n.ARRAY_BUFFER)}function f(g){let _=g.index,d=g.attributes.position,m=0;if(d===void 0)return;let v=_!==null?_.array.length:d.array.length/3-1,b=d.count>=65535?Zs:Ys,y=new b(Math.ceil(v/3)*6,1),w=y.array;if(_!==null){let x=_.array;m=_.version;for(let M=0,D=0;M<v;M+=3){let P=x[M+0],O=x[M+1],F=x[M+2];w[D++]=P,w[D++]=O,w[D++]=O,w[D++]=F,w[D++]=F,w[D++]=P}}else{m=d.version;for(let x=0,M=0;x<v;x+=3){let D=x+0,P=x+1,O=x+2;w[M++]=D,w[M++]=P,w[M++]=P,w[M++]=O,w[M++]=O,w[M++]=D}}y.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,y)}function u(g){let _=r.get(g);if(_){let d=g.index;d!==null&&_.version<d.version&&f(g)}else f(g);return r.get(g)}function p(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:h,update:c,getWireframeAttribute:u,dispose:p}}function J0(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function h(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*a,p),e.update(u,i,p))}function c(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let _=0;for(let d=0;d<p;d++)_+=u[d];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function j0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Q0(n,t,e){let i=new WeakMap,s=new be;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0,u=i.get(o);if(u===void 0||u.count!==f){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*w*4*f),x=new Ws(A,y,w,f);x.type=bi,x.needsUpdate=!0;let M=b*4;for(let P=0;P<f;P++){let O=d[P],F=m[P],G=v[P],L=y*w*4*P;for(let E=0;E<O.count;E++){let R=E*M;p===!0&&(s.fromBufferAttribute(O,E),A[L+R+0]=s.x,A[L+R+1]=s.y,A[L+R+2]=s.z,A[L+R+3]=0),g===!0&&(s.fromBufferAttribute(F,E),A[L+R+4]=s.x,A[L+R+5]=s.y,A[L+R+6]=s.z,A[L+R+7]=0),_===!0&&(s.fromBufferAttribute(G,E),A[L+R+8]=s.x,A[L+R+9]=s.y,A[L+R+10]=s.z,A[L+R+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Zt(y,w)},i.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function tm(n,t,e,i,s){let r=new WeakMap;function a(h){let c=s.render.frame,f=h.geometry,u=t.get(h,f);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function o(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}var em={[Al]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Cl]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Rl]:"CUSTOM_TONE_MAPPING"};function im(n,t,e,i,s,r){let a=new ui(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new xe;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let f=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Et(c,f),p=new lr(-1,1,1,-1,0,1),g=null,_=null,d=!1,m,v=null,b=[],y=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(w,A)}},this.setEffects=function(w){b=w,y=b.length>0&&b[0].isRenderPass===!0;let A=a.width,x=a.height;b.length>0&&o===null&&(o=new ui(A,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(A,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&h===null&&(h=new nn(A,x),r===!0&&(h.format=rn,h.type=Hn)),a.dispose(),a.depthTexture=M?h:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<b.length;D++){let P=b[D];P.setSize&&P.setSize(A,x),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(w,A){if(d||w.toneMapping===Gi&&b.length===0)return!1;if(v=A,A!==null){let x=A.width,M=A.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(w,A){w.toneMapping=m,d=!0;let x=a,M=o;for(let D=0;D<b.length;D++){let P=b[D];P.enabled!==!1&&(P.render(w,M,x,A),P.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,f.defines={},te.getTransfer(g)===se&&(f.defines.SRGB_TRANSFER="");let D=em[_];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(u,p),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var wu=new si,Tu=new nn(1,1),Au=new tr(1),Eu=new Ws,Cu=new pa,Ru=new js,nu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function ws(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ao(n,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function om(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;ou.set(i),n.uniformMatrix2fv(this.addr,!1,ou),De(e,i)}}function lm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),De(e,i)}}function cm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),De(e,i)}}function hm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function pm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Eo(n){return n.version===0&&(n.compareFunction=Gl,n.needsUpdate=!0),n}function ym(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Eo(Tu):r=wu,e.setTexture2D(t||r,s)}function _m(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cu,s)}function vm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Eo(Au):r=Ru,e.setTextureCube(t||r,s)}function bm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Eu,s)}function Mm(n){switch(n){case 5126:return nm;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return bm}}function Sm(n,t){n.uniform1fv(this.addr,t)}function wm(n,t){let e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function Tm(n,t){let e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function Am(n,t){let e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function Em(n,t){let e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cm(n,t){let e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rm(n,t){let e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pm(n,t){n.uniform1iv(this.addr,t)}function Im(n,t){n.uniform2iv(this.addr,t)}function Lm(n,t){n.uniform3iv(this.addr,t)}function Dm(n,t){n.uniform4iv(this.addr,t)}function Nm(n,t){n.uniform1uiv(this.addr,t)}function Um(n,t){n.uniform2uiv(this.addr,t)}function km(n,t){n.uniform3uiv(this.addr,t)}function Om(n,t){n.uniform4uiv(this.addr,t)}function Fm(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Eo(Tu):a=wu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zm(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cu,r[a])}function Bm(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Eo(Au):a=Ru;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Gm(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function Hm(n){switch(n){case 5126:return Sm;case 35664:return wm;case 35665:return Tm;case 35666:return Am;case 35674:return Em;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Pm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return km;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Gm}}var ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},nc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},tc=/(\w+)(\])?(\[|\.)?/g;function lu(n,t){n.seq.push(t),n.map[t.id]=t}function Vm(n,t,e){let i=n.name,s=i.length;for(tc.lastIndex=0;;){let r=tc.exec(i),a=tc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){lu(e,h===void 0?new ic(o,n,t):new nc(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new sc(o),lu(e,f)),e=f}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Vm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function cu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Wm=37297,Xm=0;function qm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var hu=new Gt;function Ym(n){te._getMatrix(hu,te.workingColorSpace,n);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Hs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function uu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qm(n.getShaderSource(t),o)}else return r}function Zm(n,t){let e=Ym(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $m={[Al]:"Linear",[El]:"Reinhard",[Cl]:"Cineon",[hr]:"ACESFilmic",[Pl]:"AgX",[Il]:"Neutral",[Rl]:"Custom"};function Km(n,t){let e=$m[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var So=new H;function Jm(){te.getLuminanceCoefficients(So);let n=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Qm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function vr(n){return n!==""}function fu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function du(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(n){return n.replace(eg,ig)}function ig(n,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return rc(e)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(ng,sg)}function sg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var rg={[cr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function ag(n){return rg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[bs]:"ENVMAP_MODE_REFRACTION"};function lg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":og[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cg={[Da]:"ENVMAP_BLENDING_MULTIPLY",[Lh]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};function hg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cg[n.combine]||"ENVMAP_BLENDING_NONE"}function ug(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ag(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=lg(e),f=hg(e),u=jm(e),p=Qm(r),g=s.createProgram(),_,d,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vr).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vr).join(`
`),d.length>0&&(d+=`
`)):(_=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),d=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=rc(a),a=fu(a,e),a=du(a,e),o=rc(o),o=fu(o,e),o=du(o,e),a=pu(a),o=pu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=m+_+a,b=m+d+o,y=cu(s,s.VERTEX_SHADER,v),w=cu(s,s.FRAGMENT_SHADER,b);s.attachShader(g,y),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(y)||"",G=s.getShaderInfoLog(w)||"",L=O.trim(),E=F.trim(),R=G.trim(),N=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,w);else{let k=uu(s,y,"vertex"),V=uu(s,w,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+k+`
`+V)}else L!==""?Ft("WebGLProgram: Program Info Log:",L):(E===""||R==="")&&(I=!1);I&&(P.diagnostics={runnable:N,programLog:L,vertexShader:{log:E,prefix:_},fragmentShader:{log:R,prefix:d}})}s.deleteShader(y),s.deleteShader(w),x=new Ss(s,g),M=tg(s,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Wm)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}var fg=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new oc(t),e.set(t,i)),i}},oc=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function dg(n){return n===Sn||n===gr||n===xr}function pg(n,t,e,i,s,r){let a=new Xs,o=new ac,l=new Set,h=[],c=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,D,P,O,F){let G=P.fog,L=O.geometry,E=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,R=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||E,R),I=u[x.type],k=i.precision;x.precision!==null&&(k=i.getMaxPrecision(x.precision),k!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=V!==void 0?V.length:0,lt=0;L.morphAttributes.position!==void 0&&(lt=1),L.morphAttributes.normal!==void 0&&(lt=2),L.morphAttributes.color!==void 0&&(lt=3);let _t,$,X,Y;if(I){let vt=Vi[I];_t=vt.vertexShader,$=vt.fragmentShader}else{_t=x.vertexShader,$=x.fragmentShader;let vt=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,vt,ae),X=vt.id,Y=ae.id}let dt=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),xt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,Lt=!!x.map,Ht=!!x.matcap,Nt=!!N,Dt=Nt&&N.isPMREMTexture===!0,pe=!!x.aoMap,Se=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,di=!!x.displacementMap,Ue=!!x.emissiveMap,pi=!!x.metalnessMap,mi=!!x.roughnessMap,gi=x.anisotropy>0,B=x.clearcoat>0,xi=x.diffuseRoughness>0,_e=x.dispersion>0,ve=x.retroreflectivity>0,yt=x.iridescence>0,Re=x.sheen>0,Ut=x.transmission>0,Vt=gi&&!!x.anisotropyMap,C=B&&!!x.clearcoatMap,S=B&&!!x.clearcoatNormalMap,q=B&&!!x.clearcoatRoughnessMap,rt=xi&&!!x.diffuseRoughnessMap,nt=yt&&!!x.iridescenceMap,ct=yt&&!!x.iridescenceThicknessMap,mt=Re&&!!x.sheenColorMap,tt=Re&&!!x.sheenRoughnessMap,et=!!x.specularMap,ut=!!x.specularColorMap,U=!!x.specularIntensityMap,it=Ut&&!!x.transmissionMap,j=Ut&&!!x.thicknessMap,ft=!!x.gradientMap,ot=!!x.alphaMap,ht=x.alphaTest>0,Rt=!!x.alphaHash,Kt=!!x.extensions,at=Gi;x.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(at=n.toneMapping);let It=Dt?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,qt={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:$,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:xt,instancingColor:xt&&O.instanceColor!==null,instancingMorph:xt&&O.morphTexture!==null,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:Ht,envMap:Nt,envMapMode:Nt&&N.mapping,envMapPMREM:Dt,envMapMaxLod:Dt?It.length-1:null,envMapSize:Dt?It[0].width:null,aoMap:pe,lightMap:Se,bumpMap:Ve,normalMap:me,displacementMap:di,emissiveMap:Ue,normalMapObjectSpace:me&&x.normalMapType===kh,normalMapTangentSpace:me&&x.normalMapType===bo,packedNormalMap:me&&x.normalMapType===bo&&dg(x.normalMap.format),metalnessMap:pi,roughnessMap:mi,anisotropy:gi,anisotropyMap:Vt,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:xi,diffuseRoughnessMap:rt,dispersion:_e,retroreflection:ve,iridescence:yt,iridescenceMap:nt,iridescenceThicknessMap:ct,sheen:Re,sheenColorMap:mt,sheenRoughnessMap:tt,specularMap:et,specularColorMap:ut,specularIntensityMap:U,transmission:Ut,transmissionMap:it,thicknessMap:j,gradientMap:ft,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Rt,combine:x.combine,mapUv:Lt&&p(x.map.channel),aoMapUv:pe&&p(x.aoMap.channel),lightMapUv:Se&&p(x.lightMap.channel),bumpMapUv:Ve&&p(x.bumpMap.channel),normalMapUv:me&&p(x.normalMap.channel),displacementMapUv:di&&p(x.displacementMap.channel),emissiveMapUv:Ue&&p(x.emissiveMap.channel),metalnessMapUv:pi&&p(x.metalnessMap.channel),roughnessMapUv:mi&&p(x.roughnessMap.channel),anisotropyMapUv:Vt&&p(x.anisotropyMap.channel),clearcoatMapUv:C&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(x.sheenRoughnessMap.channel),specularMapUv:et&&p(x.specularMap.channel),specularColorMapUv:ut&&p(x.specularColorMap.channel),specularIntensityMapUv:U&&p(x.specularIntensityMap.channel),transmissionMapUv:it&&p(x.transmissionMap.channel),thicknessMapUv:j&&p(x.thicknessMap.channel),alphaMapUv:ot&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||gi),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Lt||ot),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:st,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:lt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===se,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ie,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(d(M,x),m(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function d(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=u[x.type],D;if(M){let P=Vi[M];D=Kh.clone(P.uniforms)}else D=x.uniforms;return D}function b(x,M){let D=c.get(M);return D!==void 0?++D.usedTimes:(D=new ug(n,M,x,s),h.push(D),c.set(M,D)),D}function y(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:w,programs:h,dispose:A}}function mg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function gg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function gu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,d,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:d,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=g,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=d,v.group=m),t++,v}function l(u,p,g,_,d,m,v){v.reversedDepth===!0&&(d=-d);let b=o(u,p,g,_,d,m);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function h(u,p,g,_,d,m){let v=o(u,p,g,_,d,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function c(u,p){e.length>1&&e.sort(u||gg),i.length>1&&i.sort(p||gu),s.length>1&&s.sort(p||gu)}function f(){for(let u=t,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:f,sort:c}}function xg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new xu,n.set(i,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function yg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Ot};break;case"SpotLight":e={position:new H,direction:new H,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function _g(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var vg=0;function bg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mg(n){let t=new yg,e=_g(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);let s=new H,r=new ce,a=new ce;function o(h){let c=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,v=0,b=0,y=0,w=0,A=0,x=0,M=0,D=0,P=0;h.sort(bg);for(let F=0,G=h.length;F<G;F++){let L=h[F],E=L.color,R=L.intensity,N=L.distance,I=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Sn?I=L.shadow.map.texture:I=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=E.r*R,f+=E.g*R,u+=E.b*R;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],R);P++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,J=e.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[g]=J,i.sunShadowMap[g]=I;let lt=V.getViewportCount();for(let _t=0;_t<lt;_t++)i.sunShadowMatrix[_+_t]=V.getMatrix(_t),i.sunShadowCascade[_+_t]=V._cascadeData[_t];_+=lt,g++}i.sun[p]=k,p++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,J=e.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=L.shadow.matrix,w++}i.directional[d]=k,d++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(E).multiplyScalar(R),k.distance=N,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[v]=k;let V=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,V.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[v]=V.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=I,x++}v++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(E).multiplyScalar(R),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=k,b++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let V=L.shadow,J=e.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=I,i.pointShadowMatrix[m]=L.shadow.matrix,A++}i.point[m]=k,m++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(R),k.groundColor.copy(L.groundColor).multiplyScalar(R),i.hemi[y]=k,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;let O=i.hash;(O.sunLength!==p||O.directionalLength!==d||O.pointLength!==m||O.spotLength!==v||O.rectAreaLength!==b||O.hemiLength!==y||O.numSunShadows!==g||O.numDirectionalShadows!==w||O.numPointShadows!==A||O.numSpotShadows!==x||O.numSpotMaps!==M||O.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=d,i.spot.length=v,i.rectArea.length=b,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,O.sunLength=p,O.directionalLength=d,O.pointLength=m,O.spotLength=v,O.rectAreaLength=b,O.hemiLength=y,O.numSunShadows=g,O.numDirectionalShadows=w,O.numPointShadows=A,O.numSpotShadows=x,O.numSpotMaps=M,O.numLightProbes=P,i.version=vg++)}function l(h,c){let f=0,u=0,p=0,g=0,_=0,d=0,m=c.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){let y=h[v];if(y.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let w=i.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}}}return{setup:o,setupView:l,state:i}}function yu(n){let t=new Mg(n),e=[],i=[],s=[];function r(f){c.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function h(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function Sg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yu(n),t.set(s,[o])):r>=a.length?(o=new yu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`,Ag=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Eg=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_u=new ce,_r=new H,ec=new H;function Cg(n,t,e){let i=new yn,s=new Zt,r=new Zt,a=new be,o=new ya,l=new _a,h={},c=e.maxTextureSize,f={[Mn]:qe,[qe]:Mn,[Ie]:Ie},u=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let m=this.type;this.render=function(A,x,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;this.type===dh&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);let D=n.getRenderTarget(),P=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),F=n.state;F.setBlending(zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=m!==this.type;G&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(E=>E.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,E=A.length;L<E;L++){let R=A[L],N=R.shadow;if(N===void 0){Ft("WebGLShadowMap:",R,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let I=N.getFrameExtents();s.multiply(I),r.copy(N.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/I.x),s.x=r.x*I.x,N.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/I.y),s.y=r.y*I.y,N.mapSize.y=r.y));let k=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=k,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===_s){if(R.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ui(s.x,s.y,{format:Sn,type:Pi,minFilter:ni,magFilter:ni,generateMipmaps:!1}),N.map.texture.name=R.name+".shadowMap",N.map.depthTexture=new nn(s.x,s.y,bi),N.map.depthTexture.name=R.name+".shadowMapDepth",N.map.depthTexture.format=Ji,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ze,N.map.depthTexture.magFilter=ze}else R.isPointLight?(N.map=new br(s.x),N.map.depthTexture=new tr(s.x,Ri)):(N.map=new ui(s.x,s.y),N.map.depthTexture=new nn(s.x,s.y,Ri)),N.map.depthTexture.name=R.name+".shadowMap",N.map.depthTexture.format=Ji,this.type===cr?(N.map.depthTexture.compareFunction=k?Bl:zl,N.map.depthTexture.minFilter=ni,N.map.depthTexture.magFilter=ni):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ze,N.map.depthTexture.magFilter=ze);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let V=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();R.isPointLight!==!0&&N.updateMatrices(R,M);let J=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:M.layers;for(let lt=0;lt<V;lt++){let _t=N.getCamera(lt);if(R.isPointLight){let $=N.camera,X=N.matrix,Y=R.distance||$.far;Y!==$.far&&($.far=Y,$.updateProjectionMatrix()),_r.setFromMatrixPosition(R.matrixWorld),$.position.copy(_r),ec.copy($.position),ec.add(Ag[lt]),$.up.copy(Eg[lt]),$.lookAt(ec),$.updateMatrixWorld(),X.makeTranslation(-_r.x,-_r.y,-_r.z),_u.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N._frustum.setFromProjectionMatrix(_u,$.coordinateSystem,$.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(N.map),n.clear());let $=N.getViewport(lt);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}i=N.getFrustum(lt),y(x,M,_t,R,J,this.type)}N.isPointLightShadow!==!0&&this.type===_s&&v(N,M),N.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(D,P,O)};function v(A,x){let M=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new ui(s.x,s.y,{format:Sn,type:Pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(x,null,M,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(x,null,M,p,_,null)}function b(A,x,M,D){let P=null,O=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)P=O;else if(P=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=P.uuid,G=x.uuid,L=h[F];L===void 0&&(L={},h[F]=L);let E=L[G];E===void 0&&(E=P.clone(),L[G]=E,x.addEventListener("dispose",w)),P=E}if(P.visible=x.visible,P.wireframe=x.wireframe,D===_s?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:f[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=n.properties.get(P);F.light=M}return P}function y(A,x,M,D,P,O){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===_s)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let L=t.update(A),E=A.material;if(Array.isArray(E)){let R=L.groups;for(let N=0,I=R.length;N<I;N++){let k=R[N],V=E[k.materialIndex];if(V&&V.visible){let J=b(A,V,D,O);A.onBeforeShadow(n,A,x,M,L,J,k),n.renderBufferDirect(M,null,L,J,A,k),A.onAfterShadow(n,A,x,M,L,J,k)}}}else if(E.visible){let R=b(A,E,D,O);A.onBeforeShadow(n,A,x,M,L,R,null),n.renderBufferDirect(M,null,L,R,A,null),A.onAfterShadow(n,A,x,M,L,R,null)}}let G=A.children;for(let L=0,E=G.length;L<E;L++)y(G[L],x,M,D,P,O)}function w(A){A.target.removeEventListener("dispose",w);for(let M in h){let D=h[M],P=A.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function Rg(n,t){function e(){let U=!1,it=new be,j=null,ft=new be(0,0,0,0);return{setMask:function(ot){j!==ot&&!U&&(n.colorMask(ot,ot,ot,ot),j=ot)},setLocked:function(ot){U=ot},setClear:function(ot,ht,Rt,Kt,at){at===!0&&(ot*=Kt,ht*=Kt,Rt*=Kt),it.set(ot,ht,Rt,Kt),ft.equals(it)===!1&&(n.clearColor(ot,ht,Rt,Kt),ft.copy(it))},reset:function(){U=!1,j=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,it=!1,j=null,ft=null,ot=null;return{setReversed:function(ht){if(it!==ht){let Rt=t.get("EXT_clip_control");ht?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),it=ht;let Kt=ot;ot=null,this.setClear(Kt)}},getReversed:function(){return it},setTest:function(ht){ht?st(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(ht){j!==ht&&!U&&(n.depthMask(ht),j=ht)},setFunc:function(ht){if(it&&(ht=Yh[ht]),ft!==ht){switch(ht){case ia:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case ra:n.depthFunc(n.EQUAL);break;case aa:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=ht}},setLocked:function(ht){U=ht},setClear:function(ht){ot!==ht&&(ot=ht,it&&(ht=1-ht),n.clearDepth(ht))},reset:function(){U=!1,j=null,ft=null,ot=null,it=!1}}}function s(){let U=!1,it=null,j=null,ft=null,ot=null,ht=null,Rt=null,Kt=null,at=null;return{setTest:function(It){U||(It?st(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(It){it!==It&&!U&&(n.stencilMask(It),it=It)},setFunc:function(It,qt,vt){(j!==It||ft!==qt||ot!==vt)&&(n.stencilFunc(It,qt,vt),j=It,ft=qt,ot=vt)},setOp:function(It,qt,vt){(ht!==It||Rt!==qt||Kt!==vt)&&(n.stencilOp(It,qt,vt),ht=It,Rt=qt,Kt=vt)},setLocked:function(It){U=It},setClear:function(It){at!==It&&(n.clearStencil(It),at=It)},reset:function(){U=!1,it=null,j=null,ft=null,ot=null,ht=null,Rt=null,Kt=null,at=null}}}let r=new e,a=new i,o=new s,l={},h=new WeakMap,c={},f={},u={},p=new WeakMap,g=[],_=null,d=!1,m=null,v=null,b=null,y=null,w=null,A=null,x=null,M=new Ot(0,0,0),D=0,P=!1,O=null,F=null,G=null,L=null,E=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,I=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=I>=1):k.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=I>=2);let V=null,J={},lt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),$=new be().fromArray(lt),X=new be().fromArray(_t);function Y(U,it,j,ft){let ot=new Uint8Array(4),ht=n.createTexture();n.bindTexture(U,ht),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<j;Rt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(it+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return ht}let dt={};dt[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(cs),Ve(!1),me(bl),st(n.CULL_FACE),pe(zn);function st(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function xt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Bt(U,it){return u[U]!==it?(n.bindFramebuffer(U,it),u[U]=it,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=it),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Lt(U,it){let j=g,ft=!1;if(U){j=p.get(it),j===void 0&&(j=[],p.set(it,j));let ot=U.textures;if(j.length!==ot.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Rt=ot.length;ht<Rt;ht++)j[ht]=n.COLOR_ATTACHMENT0+ht;j.length=ot.length,ft=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ft=!0);ft&&n.drawBuffers(j)}function Ht(U){return _!==U?(n.useProgram(U),_=U,!0):!1}let Nt={[Bn]:n.FUNC_ADD,[mh]:n.FUNC_SUBTRACT,[gh]:n.FUNC_REVERSE_SUBTRACT};Nt[xh]=n.MIN,Nt[yh]=n.MAX;let Dt={[_h]:n.ZERO,[vh]:n.ONE,[bh]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[Eh]:n.SRC_ALPHA_SATURATE,[Th]:n.DST_COLOR,[Sh]:n.DST_ALPHA,[Mh]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[wh]:n.ONE_MINUS_DST_ALPHA,[Ch]:n.CONSTANT_COLOR,[Rh]:n.ONE_MINUS_CONSTANT_COLOR,[Ph]:n.CONSTANT_ALPHA,[Ih]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(U,it,j,ft,ot,ht,Rt,Kt,at,It){if(U===zn){d===!0&&(xt(n.BLEND),d=!1);return}if(d===!1&&(st(n.BLEND),d=!0),U!==ph){if(U!==m||It!==P){if((v!==Bn||w!==Bn)&&(n.blendEquation(n.FUNC_ADD),v=Bn,w=Bn),It)switch(U){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",U);break}else switch(U){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ml:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",U);break}b=null,y=null,A=null,x=null,M.set(0,0,0),D=0,m=U,P=It}return}ot=ot||it,ht=ht||j,Rt=Rt||ft,(it!==v||ot!==w)&&(n.blendEquationSeparate(Nt[it],Nt[ot]),v=it,w=ot),(j!==b||ft!==y||ht!==A||Rt!==x)&&(n.blendFuncSeparate(Dt[j],Dt[ft],Dt[ht],Dt[Rt]),b=j,y=ft,A=ht,x=Rt),(Kt.equals(M)===!1||at!==D)&&(n.blendColor(Kt.r,Kt.g,Kt.b,at),M.copy(Kt),D=at),m=U,P=!1}function Se(U,it){U.side===Ie?xt(n.CULL_FACE):st(n.CULL_FACE);let j=U.side===qe;it&&(j=!j),Ve(j),U.blending===vs&&U.transparent===!1?pe(zn):pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){O!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),O=U)}function me(U){U!==uh?(st(n.CULL_FACE),U!==F&&(U===bl?n.cullFace(n.BACK):U===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),F=U}function di(U){U!==G&&(N&&n.lineWidth(U),G=U)}function Ue(U,it,j){U?(st(n.POLYGON_OFFSET_FILL),(L!==it||E!==j)&&(L=it,E=j,a.getReversed()&&(it=-it,j=-j),n.polygonOffset(it,j))):xt(n.POLYGON_OFFSET_FILL)}function pi(U){U?st(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function mi(U){U===void 0&&(U=n.TEXTURE0+R-1),V!==U&&(n.activeTexture(U),V=U)}function gi(U,it,j){j===void 0&&(V===null?j=n.TEXTURE0+R-1:j=V);let ft=J[j];ft===void 0&&(ft={type:void 0,texture:void 0},J[j]=ft),(ft.type!==U||ft.texture!==it)&&(V!==j&&(n.activeTexture(j),V=j),n.bindTexture(U,it||dt[U]),ft.type=U,ft.texture=it)}function B(){let U=J[V];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xi(){try{n.compressedTexImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function _e(){try{n.compressedTexImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function ve(){try{n.texSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function yt(){try{n.texSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function Re(){try{n.compressedTexSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function Vt(){try{n.texStorage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function C(){try{n.texStorage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function S(){try{n.texImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function q(){try{n.texImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function rt(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function nt(U,it){f[U]!==it&&(n.pixelStorei(U,it),f[U]=it)}function ct(U){$.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function mt(U){X.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function tt(U,it){let j=h.get(it);j===void 0&&(j=new WeakMap,h.set(it,j));let ft=j.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(it,U.name),n.uniformBlockBinding(it,ft,ft),j.set(U,ft))}function et(U,it,j){let ot=h.get(it).get(U);l[ot]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ot,j),l[ot]=j)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},f={},V=null,J={},u={},l={},p=new WeakMap,g=[],_=null,d=!1,m=null,v=null,b=null,y=null,w=null,A=null,x=null,M=new Ot(0,0,0),D=0,P=!1,O=null,F=null,G=null,L=null,E=null,$.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:xt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:Ht,setBlending:pe,setMaterial:Se,setFlipSided:Ve,setCullFace:me,setLineWidth:di,setPolygonOffset:Ue,setScissorTest:pi,activeTexture:mi,bindTexture:gi,unbindTexture:B,compressedTexImage2D:xi,compressedTexImage3D:_e,texImage2D:S,texImage3D:q,pixelStorei:nt,getParameter:rt,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:Vt,texStorage3D:C,texSubImage2D:ve,texSubImage3D:yt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ut,scissor:ct,viewport:mt,reset:ut}}function Pg(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Zt,c=new WeakMap,f=new Set,u,p=new WeakMap,g=new Set,_=new FinalizationRegistry(C=>g.delete(C)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return d?new OffscreenCanvas(C,S):Vs("canvas")}function v(C,S,q){let rt=1,nt=Vt(C);if((nt.width>q||nt.height>q)&&(rt=q/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(rt*nt.width),mt=Math.floor(rt*nt.height);u===void 0&&(u=m(ct,mt));let tt=S?m(ct,mt):u;return tt.width=ct,tt.height=mt,tt.getContext("2d").drawImage(C,0,0,ct,mt),Ft("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ct+"x"+mt+")."),tt}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function b(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(C,S,q,rt,nt,ct=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;rt&&(mt=t.get("EXT_texture_norm16"),mt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===n.RED&&(q===n.FLOAT&&(tt=n.R32F),q===n.HALF_FLOAT&&(tt=n.R16F),q===n.UNSIGNED_BYTE&&(tt=n.R8),q===n.UNSIGNED_SHORT&&mt&&(tt=mt.R16_EXT),q===n.SHORT&&mt&&(tt=mt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(tt=n.R8UI),q===n.UNSIGNED_SHORT&&(tt=n.R16UI),q===n.UNSIGNED_INT&&(tt=n.R32UI),q===n.BYTE&&(tt=n.R8I),q===n.SHORT&&(tt=n.R16I),q===n.INT&&(tt=n.R32I)),S===n.RG&&(q===n.FLOAT&&(tt=n.RG32F),q===n.HALF_FLOAT&&(tt=n.RG16F),q===n.UNSIGNED_BYTE&&(tt=n.RG8),q===n.UNSIGNED_SHORT&&mt&&(tt=mt.RG16_EXT),q===n.SHORT&&mt&&(tt=mt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(tt=n.RG8UI),q===n.UNSIGNED_SHORT&&(tt=n.RG16UI),q===n.UNSIGNED_INT&&(tt=n.RG32UI),q===n.BYTE&&(tt=n.RG8I),q===n.SHORT&&(tt=n.RG16I),q===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),q===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),q===n.UNSIGNED_INT&&(tt=n.RGB32UI),q===n.BYTE&&(tt=n.RGB8I),q===n.SHORT&&(tt=n.RGB16I),q===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),q===n.UNSIGNED_INT&&(tt=n.RGBA32UI),q===n.BYTE&&(tt=n.RGBA8I),q===n.SHORT&&(tt=n.RGBA16I),q===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&(q===n.UNSIGNED_SHORT&&mt&&(tt=mt.RGB16_EXT),q===n.SHORT&&mt&&(tt=mt.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),S===n.RGBA){let et=ct?Hs:te.getTransfer(nt);q===n.FLOAT&&(tt=n.RGBA32F),q===n.HALF_FLOAT&&(tt=n.RGBA16F),q===n.UNSIGNED_BYTE&&(tt=et===se?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&mt&&(tt=mt.RGBA16_EXT),q===n.SHORT&&mt&&(tt=mt.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(C,S){let q;return C?S===null||S===Ri||S===Hn?q=n.DEPTH24_STENCIL8:S===bi?q=n.DEPTH32F_STENCIL8:S===Ms&&(q=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===Hn?q=n.DEPTH_COMPONENT24:S===bi?q=n.DEPTH_COMPONENT32F:S===Ms&&(q=n.DEPTH_COMPONENT16),q}function M(C,S){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==ni?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){let S=new WeakRef(C);i.get(C).__ref=S,g.add(S),_.register(C,S,S)}function P(C){let S=i.get(C).__ref;S!==void 0&&(g.delete(S),_.unregister(S))}function O(C){G(C.target)}function F(C){L(C.target)}function G(C){C.removeEventListener("dispose",O),P(C),R(C),C.isVideoTexture&&c.delete(C),C.isHTMLTexture&&f.delete(C)}function L(C){C.removeEventListener("dispose",F),P(C),I(C)}function E(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):G(S))}g.clear(),f.clear()}function R(C){let S=i.get(C);if(S.__webglInit===void 0)return;let q=C.source,rt=p.get(q);if(rt){let nt=rt[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&N(C),Object.keys(rt).length===0&&p.delete(q)}i.remove(C)}function N(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let q=C.source,rt=p.get(q);delete rt[S.__cacheKey],a.memory.textures--}function I(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let q=C.depthTexture;if(q&&q.renderTarget===C&&G(q),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(S.__webglFramebuffer[nt]))for(let ct=0;ct<S.__webglFramebuffer[nt].length;ct++)n.deleteFramebuffer(S.__webglFramebuffer[nt][ct]);else n.deleteFramebuffer(S.__webglFramebuffer[nt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[nt])}else{if(Array.isArray(S.__webglFramebuffer))for(let nt=0;nt<S.__webglFramebuffer.length;nt++)n.deleteFramebuffer(S.__webglFramebuffer[nt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let nt=0;nt<S.__webglColorRenderbuffer.length;nt++)S.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[nt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let rt=C.textures;for(let nt=0,ct=rt.length;nt<ct;nt++){let mt=i.get(rt[nt]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(rt[nt])}i.remove(C)}let k=0;function V(){k=0}function J(){return k}function lt(C){k=C}function _t(){let C=k;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function $(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){let q=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let rt=C.image;if(rt===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(q,C,S);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function Y(C,S){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Se(q,C,S);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function dt(C,S){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Se(q,C,S);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function st(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){Ve(q,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let xt={[hs]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},Bt={[ze]:n.NEAREST,[Nh]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[sn]:n.LINEAR_MIPMAP_LINEAR},Lt={[Fh]:n.NEVER,[Gl]:n.ALWAYS,[zh]:n.LESS,[zl]:n.LEQUAL,[Bh]:n.EQUAL,[Bl]:n.GEQUAL,[Gh]:n.GREATER,[Hh]:n.NOTEQUAL};function Ht(C,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ni||S.magFilter===ka||S.magFilter===ur||S.magFilter===sn||S.minFilter===ni||S.minFilter===ka||S.minFilter===ur||S.minFilter===sn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,xt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,xt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,xt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Bt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Bt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==ur&&S.minFilter!==sn||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",O),D(S));let rt=S.source,nt=p.get(rt);nt===void 0&&(nt={},p.set(rt,nt));let ct=$(S);if(ct!==C.__cacheKey){nt[ct]===void 0&&(nt[ct]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),nt[ct].usedTimes++;let mt=nt[C.__cacheKey];mt!==void 0&&(nt[C.__cacheKey].usedTimes--,mt.usedTimes===0&&N(S)),C.__cacheKey=ct,C.__webglTexture=nt[ct].texture}return q}function Dt(C,S,q){return Math.floor(Math.floor(C/q)/S)}function pe(C,S,q,rt){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,q,rt,S.data);else{ct.sort((U,it)=>U.start-it.start);let mt=0;for(let U=1;U<ct.length;U++){let it=ct[mt],j=ct[U],ft=it.start+it.count,ot=Dt(j.start,S.width,4),ht=Dt(it.start,S.width,4);j.start<=ft+1&&ot===ht&&Dt(j.start+j.count-1,S.width,4)===ot?it.count=Math.max(it.count,j.start+j.count-it.start):(++mt,ct[mt]=j)}ct.length=mt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let U=0,it=ct.length;U<it;U++){let j=ct[U],ft=Math.floor(j.start/4),ot=Math.ceil(j.count/4),ht=ft%S.width,Rt=Math.floor(ft/S.width),Kt=ot,at=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Rt,Kt,at,q,rt,S.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function Se(C,S,q){let rt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=n.TEXTURE_3D);let nt=Nt(C,S),ct=S.source;e.bindTexture(rt,C.__webglTexture,n.TEXTURE0+q);let mt=i.get(ct);if(ct.version!==mt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let at=te.getPrimaries(te.workingColorSpace),It=S.colorSpace===an?null:te.getPrimaries(S.colorSpace),qt=S.colorSpace===an||at===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let et=v(S.image,!1,s.maxTextureSize);et=Ut(S,et);let ut=r.convert(S.format,S.colorSpace),U=r.convert(S.type),it=A(S.internalFormat,ut,U,S.normalized,S.colorSpace,S.isVideoTexture);Ht(rt,S);let j,ft=S.mipmaps,ot=S.isVideoTexture!==!0,ht=mt.__version===void 0||nt===!0,Rt=ct.dataReady,Kt=M(S,et);if(S.isDepthTexture)it=x(S.format===rn,S.type),ht&&(ot?e.texStorage2D(n.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,it,et.width,et.height,0,ut,U,null));else if(S.isDataTexture)if(ft.length>0){ot&&ht&&e.texStorage2D(n.TEXTURE_2D,Kt,it,ft[0].width,ft[0].height);for(let at=0,It=ft.length;at<It;at++)j=ft[at],ot?Rt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,j.width,j.height,ut,U,j.data):e.texImage2D(n.TEXTURE_2D,at,it,j.width,j.height,0,ut,U,j.data);S.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(n.TEXTURE_2D,Kt,it,et.width,et.height),Rt&&pe(S,et,ut,U)):e.texImage2D(n.TEXTURE_2D,0,it,et.width,et.height,0,ut,U,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,it,ft[0].width,ft[0].height,et.depth);for(let at=0,It=ft.length;at<It;at++)if(j=ft[at],S.format!==Ii)if(ut!==null)if(ot){if(Rt)if(S.layerUpdates.size>0){let qt=Zl(j.width,j.height,S.format,S.type);for(let vt of S.layerUpdates){let ae=j.data.subarray(vt*qt/j.data.BYTES_PER_ELEMENT,(vt+1)*qt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,vt,j.width,j.height,1,ut,ae)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,j.width,j.height,et.depth,ut,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,it,j.width,j.height,et.depth,0,j.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,j.width,j.height,et.depth,ut,U,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,it,j.width,j.height,et.depth,0,ut,U,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(n.TEXTURE_2D,Kt,it,ft[0].width,ft[0].height);for(let at=0,It=ft.length;at<It;at++)j=ft[at],S.format!==Ii?ut!==null?ot?Rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,j.width,j.height,ut,j.data):e.compressedTexImage2D(n.TEXTURE_2D,at,it,j.width,j.height,0,j.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Rt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,j.width,j.height,ut,U,j.data):e.texImage2D(n.TEXTURE_2D,at,it,j.width,j.height,0,ut,U,j.data)}else if(S.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,it,et.width,et.height,et.depth),Rt)if(S.layerUpdates.size>0){let at=Zl(et.width,et.height,S.format,S.type);for(let It of S.layerUpdates){let qt=et.data.subarray(It*at/et.data.BYTES_PER_ELEMENT,(It+1)*at/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,et.width,et.height,1,ut,U,qt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,U,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,ut,U,et.data);else if(S.isData3DTexture)ot?(ht&&e.texStorage3D(n.TEXTURE_3D,Kt,it,et.width,et.height,et.depth),Rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,U,et.data)):e.texImage3D(n.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,ut,U,et.data);else if(S.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(n.TEXTURE_2D,Kt,it,et.width,et.height);else{let at=et.width,It=et.height;for(let qt=0;qt<Kt;qt++)e.texImage2D(n.TEXTURE_2D,qt,it,at,It,0,ut,U,null),at>>=1,It>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let at=n.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),et.parentNode!==at){at.appendChild(et),f.add(S),at.onpaint=It=>{let qt=It.changedElements;for(let vt of f)qt.includes(vt.image)&&(vt.needsUpdate=!0)},at.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let qt=n.RGBA,vt=n.RGBA,ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qt,vt,ae,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ot&&ht){let at=Vt(ft[0]);e.texStorage2D(n.TEXTURE_2D,Kt,it,at.width,at.height)}for(let at=0,It=ft.length;at<It;at++)j=ft[at],ot?Rt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,ut,U,j):e.texImage2D(n.TEXTURE_2D,at,it,ut,U,j);S.generateMipmaps=!1}else if(ot){if(ht){let at=Vt(et);e.texStorage2D(n.TEXTURE_2D,Kt,it,at.width,at.height)}Rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,U,et)}else e.texImage2D(n.TEXTURE_2D,0,it,ut,U,et);b(S)&&S.mipmapsAutoUpdate===!0&&y(rt),mt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ve(C,S,q){if(S.image.length!==6)return;let rt=Nt(C,S),nt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let ct=i.get(nt);if(nt.version!==ct.__version||rt===!0){e.activeTexture(n.TEXTURE0+q);let mt=te.getPrimaries(te.workingColorSpace),tt=S.colorSpace===an?null:te.getPrimaries(S.colorSpace),et=S.colorSpace===an||mt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,it=[];for(let vt=0;vt<6;vt++)!ut&&!U?it[vt]=v(S.image[vt],!0,s.maxCubemapSize):it[vt]=U?S.image[vt].image:S.image[vt],it[vt]=Ut(S,it[vt]);let j=it[0],ft=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),ht=A(S.internalFormat,ft,ot,S.normalized,S.colorSpace),Rt=S.isVideoTexture!==!0,Kt=ct.__version===void 0||rt===!0,at=nt.dataReady,It=M(S,j);Ht(n.TEXTURE_CUBE_MAP,S);let qt;if(S.isDepthTexture){if(ht=x(S.format===rn,S.type),Kt)if(Rt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,j.width,j.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,j.width,j.height,0,ft,ot,null)}else if(ut){Rt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ht,j.width,j.height);for(let vt=0;vt<6;vt++){qt=it[vt].mipmaps;for(let ae=0;ae<qt.length;ae++){let ke=qt[ae];S.format!==Ii?ft!==null?Rt?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,ke.width,ke.height,ft,ke.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,ke.width,ke.height,0,ke.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,ke.width,ke.height,ft,ot,ke.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,ke.width,ke.height,0,ft,ot,ke.data)}}}else{if(qt=S.mipmaps,Rt&&Kt){qt.length>0&&It++;let vt=Vt(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ht,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(U){Rt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,it[vt].width,it[vt].height,ft,ot,it[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,it[vt].width,it[vt].height,0,ft,ot,it[vt].data);for(let ae=0;ae<qt.length;ae++){let hn=qt[ae].image[vt].image;Rt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,hn.width,hn.height,ft,ot,hn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,hn.width,hn.height,0,ft,ot,hn.data)}}else{Rt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ft,ot,it[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,ft,ot,it[vt]);for(let ae=0;ae<qt.length;ae++){let ke=qt[ae];Rt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,ft,ot,ke.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,ft,ot,ke.image[vt])}}}b(S)&&S.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ct.__version=nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function me(C,S,q,rt,nt,ct){let mt=r.convert(q.format,q.colorSpace),tt=r.convert(q.type),et=A(q.internalFormat,mt,tt,q.normalized,q.colorSpace),ut=i.get(S),U=i.get(q);if(U.__renderTarget=S,!ut.__hasExternalTextures){let it=Math.max(1,S.width>>ct),j=Math.max(1,S.height>>ct);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,ct,et,it,j,S.depth,0,mt,tt,null):e.texImage2D(nt,ct,et,it,j,0,mt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,nt,U.__webglTexture,0,ve(S)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,nt,U.__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function di(C,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let rt=S.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,ct=x(S.stencilBuffer,nt),mt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(S),ct,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(S),ct,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ct,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,C)}else{let rt=S.textures;for(let nt=0;nt<rt.length;nt++){let ct=rt[nt],mt=r.convert(ct.format,ct.colorSpace),tt=r.convert(ct.type),et=A(ct.internalFormat,mt,tt,ct.normalized,ct.colorSpace);yt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(S),et,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(S),et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(C,S,q){let rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(S.depthTexture);nt.__renderTarget=S;let ct=rt?S.depthTexture.image[0]:S.depthTexture.image;(!nt.__webglTexture||ct.width!==S.width||ct.height!==S.height)&&(ct.width=S.width,ct.height=S.height,S.depthTexture.needsUpdate=!0),rt?st(S.depthTexture,0):X(S.depthTexture,0);let mt=nt.__webglTexture,tt=ve(S),et=rt?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ut=S.depthTexture.format===rn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ji)yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,et,mt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,ut,et,mt,0);else if(S.depthTexture.format===rn)yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,et,mt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,ut,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pi(C){let S=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let rt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=rt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let rt=0;rt<6;rt++)Ue(S.__webglFramebuffer[rt],C,rt);else C.texture.mipmaps.length>0?Ue(S.__webglFramebuffer[0],C,0):Ue(S.__webglFramebuffer,C,0);else if(q){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=n.createRenderbuffer(),di(S.__webglDepthbuffer[rt],C,!1);else{let nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ct)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),di(S.__webglDepthbuffer,C,!1);else{let nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function mi(C,S,q){let rt=i.get(C);S!==void 0&&me(rt.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&pi(C)}function gi(C){let S=C.texture,q=i.get(C),rt=i.get(S);C.addEventListener("dispose",F),D(C);let nt=C.textures,ct=C.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=S.version,a.memory.textures++),ct){q.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0){q.__webglFramebuffer[tt]=[];for(let et=0;et<S.mipmaps.length;et++)q.__webglFramebuffer[tt][et]=n.createFramebuffer()}else q.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)q.__webglFramebuffer[tt]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(mt)for(let tt=0,et=nt.length;tt<et;tt++){let ut=i.get(nt[tt]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&yt(C)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let tt=0;tt<nt.length;tt++){let et=nt[tt];q.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[tt]);let ut=r.convert(et.format,et.colorSpace),U=r.convert(et.type),it=A(et.internalFormat,ut,U,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),j=ve(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,it,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,q.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),di(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)me(q.__webglFramebuffer[tt][et],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else me(q.__webglFramebuffer[tt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(S)?y(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let tt=0,et=nt.length;tt<et;tt++){let ut=nt[tt],U=i.get(ut),it=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,U.__webglTexture),Ht(it,ut),me(q.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+tt,it,0),b(ut)&&y(it)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,rt.__webglTexture),Ht(tt,S),S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)me(q.__webglFramebuffer[et],C,S,n.COLOR_ATTACHMENT0,tt,et);else me(q.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,tt,0);b(S)?y(tt):S.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&pi(C)}function B(C){let S=C.textures;for(let q=0,rt=S.length;q<rt;q++){let nt=S[q];if(b(nt)&&nt.mipmapsAutoUpdate===!0){let ct=w(C),mt=i.get(nt).__webglTexture;e.bindTexture(ct,mt),y(ct),e.unbindTexture()}}}let xi=[];function _e(C){if(C.samples>0){if(yt(C)===!1){let S=C.textures,q=C.width,rt=C.height,nt=n.COLOR_BUFFER_BIT,ct=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(C),tt=S.length>1;if(tt)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let U=i.get(S[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,q,rt,0,0,q,rt,nt,n.NEAREST),l===!0&&(xi.length=0,xi.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&xi.push(ct),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xi))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let U=i.get(S[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,U,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ve(C){return Math.min(s.maxSamples,C.samples)}function yt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(C){let S=a.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function Ut(C,S){let q=C.colorSpace,rt=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Gs&&q!==an&&(te.getTransfer(q)===se?(rt!==Ii||nt!==ai)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",q)),S}function Vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=_t,this.resetTextureUnits=V,this.getTextureUnits=J,this.setTextureUnits=lt,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=dt,this.setTextureCube=st,this.rebindTextures=mi,this.setupRenderTarget=gi,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=pi,this.setupFrameBufferTexture=me,this.useMultisampledRTT=yt,this.dispose=E}function Ig(n,t){function e(i,s=an){let r,a=te.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dl)return n.BYTE;if(i===Nl)return n.SHORT;if(i===Ms)return n.UNSIGNED_SHORT;if(i===Oa)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Ol)return n.ALPHA;if(i===Fl)return n.RGB;if(i===Ii)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===rn)return n.DEPTH_STENCIL;if(i===Ba)return n.RED;if(i===Ga)return n.RED_INTEGER;if(i===Sn)return n.RG;if(i===Ha)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===fr||i===dr||i===pr||i===mr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===$a||i===Ka||i===Ja||i===ja||i===gr||i===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===$a)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(i===gr)return r.COMPRESSED_RG11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===to||i===eo||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===to)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mo)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yo||i===_o||i===xr||i===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bi({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends ki{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,f=null,u=null,p=null,g=null,_=typeof XRWebGLBinding<"u",d=new lc,m={},v=e.getContextAttributes(),b=null,y=null,w=[],A=[],x=new Zt,M=null,D=null,P=new Xe;P.viewport=new be;let O=new Xe;O.viewport=new be;let F=[P,O],G=new Ia,L=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=w[$];return X===void 0&&(X=new ps,w[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=w[$];return X===void 0&&(X=new ps,w[$]=X),X.getGripSpace()},this.getHand=function($){let X=w[$];return X===void 0&&(X=new ps,w[$]=X),X.getHandSpace()};function R($){let X=A.indexOf($.inputSource);if(X===-1)return;let Y=w[X];Y!==void 0&&(Y.update($.inputSource,$.frame,h||a),Y.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let $=0;$<w.length;$++){let X=A[$];X!==null&&(A[$]=null,w[$].disconnect(X))}L=null,E=null,d.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(b),p=null,u=null,f=null,s=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),D!==null){let $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,dt=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=v.stencil?rn:Ji,dt=v.stencil?Hn:Ri);let xt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ui(u.textureWidth,u.textureHeight,{format:Ii,type:ai,depthTexture:new nn(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ui(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function I($){for(let X=0;X<$.removed.length;X++){let Y=$.removed[X],dt=A.indexOf(Y);dt>=0&&(A[dt]=null,w[dt].disconnect(Y))}for(let X=0;X<$.added.length;X++){let Y=$.added[X],dt=A.indexOf(Y);if(dt===-1){for(let xt=0;xt<w.length;xt++)if(xt>=A.length){A.push(Y),dt=xt;break}else if(A[xt]===null){A[xt]=Y,dt=xt;break}if(dt===-1)break}let st=w[dt];st&&st.connect(Y)}}function k($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let X=$.near,Y=$.far;d.texture!==null&&(d.depthNear>0&&(X=d.depthNear),d.depthFar>0&&(Y=d.depthFar)),G.near=O.near=P.near=X,G.far=O.far=P.far=Y,(L!==G.near||E!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,E=G.far),G.layers.mask=$.layers.mask|6,P.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let dt=$.parent,st=G.cameras;k(G,dt);for(let xt=0;xt<st.length;xt++)k(st[xt],dt);G.projectionMatrix.copy(P.projectionMatrix),G.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),V($,G,dt)};function V($,X,Y){Y===null?$.matrix.copy(X.matrixWorld):($.matrix.copy(Y.matrixWorld),$.matrix.invert(),$.matrix.multiply(X.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ua*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(G)},this.getCameraTexture=function($){return m[$]};let J=null;function lt($,X){if(c=X.getViewerPose(h||a),g=X,c!==null){let Y=c.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let dt=!1;Y.length!==G.cameras.length&&(G.cameras.length=0,dt=!0);for(let Lt=0;Lt<Y.length;Lt++){let Ht=Y[Lt],Nt=null;if(p!==null)Nt=p.getViewport(Ht);else{let pe=f.getViewSubImage(u,Ht);Nt=pe.viewport,Lt===0&&(t.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(y))}let Dt=F[Lt];Dt===void 0&&(Dt=new Xe,Dt.layers.enable(Lt),Dt.viewport=new be,F[Lt]=Dt),Dt.matrix.fromArray(Ht.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ht.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Lt===0&&(G.matrix.copy(Dt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),dt===!0&&G.cameras.push(Dt)}let st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let Lt=f.getDepthInformation(Y[0]);Lt&&Lt.isValid&&Lt.texture&&d.init(Lt,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let Lt=0;Lt<Y.length;Lt++){let Ht=Y[Lt].camera;if(Ht){let Nt=m[Ht];Nt||(Nt=new er,m[Ht]=Nt);let Dt=f.getCameraImage(Ht);Nt.sourceTexture=Dt}}}}for(let Y=0;Y<w.length;Y++){let dt=A[Y],st=w[Y];dt!==null&&st!==void 0&&st.update(dt,X,h||a)}J&&J($,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let _t=new vu;_t.setAnimationLoop(lt),this.setAnimationLoop=function($){J=$},this.dispose=function(){}}},Ng=new ce,Pu=new Gt;Pu.set(-1,0,0,0,1,0,0,0,1);function Ug(n,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Xl(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,v,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,y)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),_(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,v,b):m.isSpriteMaterial?h(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===qe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===qe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v=t.get(m),b=v.envMap,y=v.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Pu),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,v,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=b*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,v){d.ior.value=m.ior,m.diffuseRoughness>0&&(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){let v=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kg(n,t,e,i){let s={},r={};function a(v,b){let y=b.program;i.uniformBlockBinding(v,y,s[v.id])}function o(v,b){let y=s[v.id];y===void 0&&(g(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",d));let w=b.program;i.updateUBOMapping(v,w);let A=t.render.frame;r[v.id]!==A&&(h(v),r[v.id]=A)}function l(v){let b=n.createBuffer(),y=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function h(v){let b=s[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,x=y.length;A<x;A++){let M=y[A];if(Array.isArray(M))for(let D=0,P=M.length;D<P;D++)c(M[D],A,D,w);else c(M,A,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(v,b,y,w){if(u(v,b,y,w)===!0){let A=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let D=0;D<x.length;D++){let P=x[D],O=_(P,!0);f(P,v.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,v.__data)}}function f(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function u(v,b,y,w){let A=v.value,x=b+"_"+y;if(Array.isArray(A)){w[x]===void 0&&(w[x]=[]);let M=w[x],D=!1;for(let P=0;P<A.length;P++)p(A[P],M,P)===!0&&(D=!0);return D}return p(A,w,x)}function p(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let w=b[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){let b=v.uniforms,y=0,w=16;for(let x=0,M=b.length;x<M;x++){let D=Array.isArray(b[x])?b[x]:[b[x]];for(let P=0,O=D.length;P<O;P++){let F=D[P],G=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(b[x])||Array.isArray(F.value),E=y;for(let N=0,I=G.length;N<I;N++){let k=G[N],V=_(k,L),J=y%w,lt=J%V.boundary,_t=J+lt;y+=lt,_t!==0&&w-_t<V.storage&&(y+=w-_t),N===0&&(E=y),y+=V.storage}let R=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new R((y-E)/Float32Array.BYTES_PER_ELEMENT),F.__offset=E}}let A=y%w;return A>0&&(y+=w-A),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function d(v){let b=v.target;b.removeEventListener("dispose",d),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function Fg(){return Hi===null&&(Hi=new Ks(Og,16,16,Sn,Pi),Hi.name="DFG_LUT",Hi.minFilter=ni,Hi.magFilter=ni,Hi.wrapS=_i,Hi.wrapT=_i,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var To=class{constructor(t={}){let{canvas:e=Wh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ai}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,d=new Set([Va,Ha,Ga]),m=new Set([ai,Ri,Ms,Hn,Fa,za]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,A=null,x=[],M=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,F=null,G=null,L=null,E=null;this._outputColorSpace=ii;let R=0,N=0,I=null,k=-1,V=null,J=new be,lt=new be,_t=null,$=new Ot(0),X=0,Y=e.width,dt=e.height,st=1,xt=null,Bt=null,Lt=new be(0,0,Y,dt),Ht=new be(0,0,Y,dt),Nt=!1,Dt=new yn,pe=new ma,Se=!1,Ve=!1,me=new ce,di=new H,Ue=new be,pi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mi=!1;function gi(){return I===null?st:1}let B=i;function xi(T,z){return e.getContext(T,z)}let _e,ve,yt,Re,Ut,Vt,C,S,q,rt,nt,ct,mt,tt,et,ut,U,it,j,ft,ot,ht,Rt;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),B===null){let z="webgl2";if(B=xi(z,T),B===null)throw xi(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(T){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),zt("WebGLRenderer: "+T.message),T}function Kt(){_e=new $0(B),_e.init(),ot=new Ig(B,_e),ve=new F0(B,_e,t,ot),yt=new Rg(B,_e),ve.reversedDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),G=B.createFramebuffer(),L=B.createFramebuffer(),E=B.createFramebuffer(),Re=new j0(B),Ut=new mg,Vt=new Pg(B,_e,yt,Ut,ve,ot,Re),C=new Z0(P),S=new td(B),ht=new k0(B,S),q=new K0(B,S,Re,ht),rt=new tm(B,q,S,ht,Re),it=new Q0(B,ve,Vt),et=new z0(Ut),nt=new pg(P,C,_e,ve,ht,et),ct=new Ug(P,Ut),mt=new xg,tt=new Sg(_e),U=new U0(P,C,yt,rt,g,l),ut=new Cg(P,rt,ve),Rt=new kg(B,Re,ve,yt),j=new O0(B,_e,Re),ft=new J0(B,_e,Re),Re.programs=nt.programs,P.capabilities=ve,P.extensions=_e,P.properties=Ut,P.renderLists=mt,P.shadowMap=ut,P.state=yt,P.info=Re}_!==ai&&(D=new im(_,e.width,e.height,o,s,r));let at=new cc(P,B);this.xr=at,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=_e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=_e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(T){T!==void 0&&(st=T,this.setSize(Y,dt,!1))},this.getSize=function(T){return T.set(Y,dt)},this.setSize=function(T,z,K=!0){if(at.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,dt=z,e.width=Math.floor(T*st),e.height=Math.floor(z*st),K===!0&&(e.style.width=T+"px",e.style.height=z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*st,dt*st).floor()},this.setDrawingBufferSize=function(T,z,K){Y=T,dt=z,st=K,e.width=Math.floor(T*K),e.height=Math.floor(z*K),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(_===ai){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Lt)},this.setViewport=function(T,z,K,W){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,z,K,W),yt.viewport(J.copy(Lt).multiplyScalar(gi()).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,z,K,W){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,z,K,W),yt.scissor(lt.copy(Ht).multiplyScalar(gi()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){yt.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){xt=T},this.setTransparentSort=function(T){Bt=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,K=!0){let W=0;if(T){let Z=!1;if(I!==null){let gt=I.texture.format;Z=d.has(gt)}if(Z){let gt=I.texture.type,St=m.has(gt),pt=U.getClearColor(),Mt=U.getClearAlpha(),Ct=pt.r,Wt=pt.g,jt=pt.b;St?(v[0]=Ct,v[1]=Wt,v[2]=jt,v[3]=Mt,B.clearBufferuiv(B.COLOR,0,v)):(b[0]=Ct,b[1]=Wt,b[2]=jt,b[3]=Mt,B.clearBufferiv(B.COLOR,0,b))}else W|=B.COLOR_BUFFER_BIT}z&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),U.dispose(),mt.dispose(),tt.dispose(),Vt.dispose(),Ut.dispose(),C.dispose(),rt.dispose(),q.dispose(),ht.dispose(),Rt.dispose(),nt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Cc),at.removeEventListener("sessionend",Rc),En.stop()};function It(T){T.preventDefault(),Vl("WebGLRenderer: Context Lost."),O=!0}function qt(){Vl("WebGLRenderer: Context Restored."),O=!1;let T=Re.autoReset,z=ut.enabled,K=ut.autoUpdate,W=ut.needsUpdate,Z=ut.type;Kt(),Re.autoReset=T,ut.enabled=z,ut.autoUpdate=K,ut.needsUpdate=W,ut.type=Z}function vt(T){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){let z=T.target;z.removeEventListener("dispose",ae),ke(z)}function ke(T){hn(T),Ut.remove(T)}function hn(T){let z=Ut.get(T).programs;z!==void 0&&(z.forEach(function(K){nt.releaseProgram(K)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,K,W,Z,gt){z===null&&(z=pi);let St=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,pt=ff(T,z,K,W,Z);yt.setMaterial(W,St);let Mt=K.index,Ct=1;if(W.wireframe===!0){if(Mt=q.getWireframeAttribute(K),Mt===void 0)return;Ct=2}let Wt=K.drawRange,jt=K.attributes.position,Tt=Wt.start*Ct,Qt=(Wt.start+Wt.count)*Ct;gt!==null&&(Tt=Math.max(Tt,gt.start*Ct),Qt=Math.min(Qt,(gt.start+gt.count)*Ct)),Mt!==null?(Tt=Math.max(Tt,0),Qt=Math.min(Qt,Mt.count)):jt!=null&&(Tt=Math.max(Tt,0),Qt=Math.min(Qt,jt.count));let Ae=Qt-Tt;if(Ae<0||Ae===1/0)return;ht.setup(Z,W,pt,K,Mt);let fe,he=j;if(Mt!==null&&(fe=S.get(Mt),he=ft,he.setIndex(fe)),Z.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*gi()),he.setMode(B.LINES)):he.setMode(B.TRIANGLES);else if(Z.isLine){let $e=W.linewidth;$e===void 0&&($e=1),yt.setLineWidth($e*gi()),Z.isLineSegments?he.setMode(B.LINES):Z.isLineLoop?he.setMode(B.LINE_LOOP):he.setMode(B.LINE_STRIP)}else Z.isPoints?he.setMode(B.POINTS):Z.isSprite&&he.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))he.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let $e=Z._multiDrawStarts,At=Z._multiDrawCounts,ei=Z._multiDrawCount,ne=Mt?S.get(Mt).bytesPerElement:1,Cn=Ut.get(W).currentProgram.getUniforms();for(let Ke=0;Ke<ei;Ke++)Cn.setValue(B,"_gl_DrawID",Ke),he.render($e[Ke]/ne,At[Ke])}else if(Z.isInstancedMesh)he.renderInstances(Tt,Ae,Z.count);else if(K.isInstancedBufferGeometry){let $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,At=Math.min(K.instanceCount,$e);he.renderInstances(Tt,Ae,At)}else he.render(Tt,Ae)};function Ec(T,z,K,W){F!==null&&T.isNodeMaterial&&F.setObject(W,T),Se===!0&&et.setState(T,K,!1),T.transparent===!0&&T.side===Ie&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,Ls(T,z,W),T.side=Mn,T.needsUpdate=!0,Ls(T,z,W),T.side=Ie):Ls(T,z,W)}this.compile=function(T,z,K=null){K===null&&(K=T),F!==null&&F.renderStart(T,z,K),A=tt.get(K),A.init(z),M.push(A),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),T!==K&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Ve=this.localClippingEnabled,Se=et.init(this.clippingPlanes,Ve),Se===!0&&et.setGlobalState(this.clippingPlanes,z),F!==null&&ut.render(A.state.shadowsArray,K,z);let W=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let gt=Z.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let pt=gt[St];Ec(pt,K,z,Z),W.add(pt)}else Ec(gt,K,z,Z),W.add(gt)}),A=M.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(T,z,K=null){let W=this.compile(T,z,K);return new Promise(Z=>{function gt(){if(W.forEach(function(St){let Mt=Ut.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&W.delete(St)}),W.size===0){Z(T);return}setTimeout(gt,10)}_e.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Vo=null;function hf(T){Vo&&Vo(T)}function Cc(){En.stop()}function Rc(){En.start()}let En=new vu;En.setAnimationLoop(hf),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(T){Vo=T,at.setAnimationLoop(T),T===null?En.stop():En.start()},at.addEventListener("sessionstart",Cc),at.addEventListener("sessionend",Rc),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F!==null&&F.renderStart(T,z);let K=at.enabled===!0&&at.isPresenting===!0,W=D!==null&&(I===null||K)&&D.begin(P,I);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,z,I),A=tt.get(T,M.length),A.init(z),A.state.textureUnits=Vt.getTextureUnits(),M.push(A),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?pe.setFromArrayCamera(z):Dt.setFromProjectionMatrix(me,vi,z.reversedDepth),Ve=this.localClippingEnabled,Se=et.init(this.clippingPlanes,Ve),w=mt.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&Wo(St,z,-1/0,P.sortObjects)}Wo(T,z,0,P.sortObjects),w.finish(),F!==null&&F.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(xt,Bt),mi=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,mi&&U.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),Se===!0&&et.beginShadows();let Z=A.state.shadowsArray;if(ut.render(Z,T,z),Se===!0&&et.endShadows(),(W&&D.hasRenderPass())===!1){let St=w.opaque,pt=w.transmissive;if(A.setupLights(),z.isArrayCamera){let Mt=z.cameras;if(pt.length>0)for(let Ct=0,Wt=Mt.length;Ct<Wt;Ct++){let jt=Mt[Ct];Ic(St,pt,T,jt)}mi&&U.render(T);for(let Ct=0,Wt=Mt.length;Ct<Wt;Ct++){let jt=Mt[Ct];Pc(w,T,jt,jt.viewport)}}else pt.length>0&&Ic(St,pt,T,z),mi&&U.render(T),Pc(w,T,z)}I!==null&&N===0&&(Vt.updateMultisampleRenderTarget(I),Vt.updateRenderTargetMipmap(I)),W&&D.end(P),T.isScene===!0&&T.onAfterRender(P,T,z),ht.resetDefaultState(),k=-1,V=null,M.pop(),M.length>0?(A=M[M.length-1],Vt.setTextureUnits(A.state.textureUnits),Se===!0&&et.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,F!==null&&F.renderEnd()};function Wo(T,z,K,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let St=z.isArrayCamera?pe:Dt;if(!T.frustumCulled||T.intersectsFrustum(St)){W&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);let pt=rt.update(T),Mt=T.material;Mt.visible&&w.push(T,pt,Mt,K,Ue.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){let St=z.isArrayCamera?pe:Dt;if(!T.frustumCulled||T.intersectsFrustum(St)){let pt=rt.update(T),Mt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ue.copy(pt.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Mt)){let Ct=pt.groups;for(let Wt=0,jt=Ct.length;Wt<jt;Wt++){let Tt=Ct[Wt],Qt=Mt[Tt.materialIndex];Qt&&Qt.visible&&w.push(T,pt,Qt,K,Ue.z,Tt,z)}}else Mt.visible&&w.push(T,pt,Mt,K,Ue.z,null,z)}}}let gt=T.children;for(let St=0,pt=gt.length;St<pt;St++)Wo(gt[St],z,K,W)}function Pc(T,z,K,W){let{opaque:Z,transmissive:gt,transparent:St}=T;A.setupLightsView(K),Se===!0&&et.setGlobalState(P.clippingPlanes,K),W&&yt.viewport(J.copy(W)),Z.length>0&&Rr(Z,z,K),gt.length>0&&Rr(gt,z,K),St.length>0&&Rr(St,z,K),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Ic(T,z,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){let Tt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new ui(1,1,{generateMipmaps:!0,type:Tt?Pi:ai,minFilter:sn,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let gt=A.state.transmissionRenderTarget[W.id],St=W.viewport||J;gt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),Mt=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor($),X=P.getClearAlpha(),X<1&&P.setClearColor(16777215,.5),P.clear(),mi&&U.render(K);let Wt=P.toneMapping;P.toneMapping=Gi;let jt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Se===!0&&et.setGlobalState(P.clippingPlanes,W),Rr(T,K,W),Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Qt=0,Ae=z.length;Qt<Ae;Qt++){let fe=z[Qt],{object:he,geometry:$e,material:At,group:ei}=fe;if(At.side===Ie&&he.layers.test(W.layers)){let ne=At.side;At.side=qe,At.needsUpdate=!0,Lc(he,K,W,$e,At,ei),At.side=ne,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt))}P.setRenderTarget(pt,Mt,Ct),P.setClearColor($,X),jt!==void 0&&(W.viewport=jt),P.toneMapping=Wt}function Rr(T,z,K){let W=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,gt=T.length;Z<gt;Z++){let St=T[Z],{object:pt,geometry:Mt,group:Ct}=St,Wt=St.material;Wt.allowOverride===!0&&W!==null&&(Wt=W),pt.layers.test(K.layers)&&Lc(pt,z,K,Mt,Wt,Ct)}}function Lc(T,z,K,W,Z,gt){F!==null&&Z.isNodeMaterial&&F.setObject(T,Z),T.onBeforeRender(P,z,K,W,Z,gt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(P,z,K,W,T,gt),Z.transparent===!0&&Z.side===Ie&&Z.forceSinglePass===!1?(Z.side=qe,Z.needsUpdate=!0,P.renderBufferDirect(K,z,W,Z,T,gt),Z.side=Mn,Z.needsUpdate=!0,P.renderBufferDirect(K,z,W,Z,T,gt),Z.side=Ie):P.renderBufferDirect(K,z,W,Z,T,gt),T.onAfterRender(P,z,K,W,Z,gt)}function Dc(T){let z=0;for(let K of T)K.texture!==null&&z++;return z}function Ls(T,z,K){z.isScene!==!0&&(z=pi);let W=Ut.get(T),Z=A.state.lights,gt=A.state.shadowsArray,St=Z.state.version,pt=nt.getParameters(T,Z.state,gt,z,K,A.state.lightProbeGridArray),Mt=nt.getProgramCacheKey(pt),Ct=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;let Wt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=C.get(T.envMap||W.environment,Wt),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ct===void 0&&(T.addEventListener("dispose",ae),Ct=new Map,W.programs=Ct,W.programVariants=new Map);let jt=Ct.get(Mt);if(jt!==void 0){if(W.currentProgram===jt&&W.lightsStateVersion===St)return Uc(T,pt),jt}else pt.uniforms=nt.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,K,pt),T.onBeforeCompile(pt,P),jt=nt.acquireProgram(pt,Mt),Ct.set(Mt,jt),W.uniforms=pt.uniforms;let Tt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=et.uniform),Uc(T,pt),W.needsLights=pf(T),W.lightsStateVersion=St,W.needsLights&&(Tt.ambientLightColor.value=Z.state.ambient,Tt.lightProbe.value=Z.state.probe,Tt.sunLights.value=Z.state.sun,Tt.sunLightShadows.value=Z.state.sunShadow,Tt.directionalLights.value=Z.state.directional,Tt.directionalLightShadows.value=Z.state.directionalShadow,Tt.spotLights.value=Z.state.spot,Tt.spotLightShadows.value=Z.state.spotShadow,Tt.rectAreaLights.value=Z.state.rectArea,Tt.ltc_1.value=Z.state.rectAreaLTC1,Tt.ltc_2.value=Z.state.rectAreaLTC2,Tt.pointLights.value=Z.state.point,Tt.pointLightShadows.value=Z.state.pointShadow,Tt.hemisphereLights.value=Z.state.hemi,Tt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Tt.sunShadowCascade.value=Z.state.sunShadowCascade,Tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Tt.spotLightMatrix.value=Z.state.spotLightMatrix,Tt.spotLightMap.value=Z.state.spotLightMap,Tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.numLightProbeGrids=Dc(A.state.lightProbeGridArray),W.currentProgram=jt,W.uniformsList=null,jt}function uf(T,z,K,W,Z){let gt=Ut.get(T),St=gt.currentProgram.id+","+W+","+Z,pt=gt.programVariants.get(St);return pt===void 0?(pt=Ls(T,z,K),gt.programVariants.set(St,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=W,gt.toneMapping=Z),pt}function Nc(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Ss.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Uc(T,z){let K=Ut.get(T);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function ff(T,z,K,W,Z){z.isScene!==!0&&(z=pi),Vt.resetTextureUnits();let gt=z.fog,St=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,pt=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:te.workingColorSpace,Mt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ct=C.get(W.envMap||St,Mt),Wt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,jt=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!K.morphAttributes.position,Qt=!!K.morphAttributes.normal,Ae=!!K.morphAttributes.color,fe=Gi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(fe=P.toneMapping);let he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$e=he!==void 0?he.length:0,At=Ut.get(W),ei=A.state.lights;if(Se===!0&&(Ve===!0||T!==V)){let Me=T===V&&W.id===k;et.setState(W,T,Me)}let ne=!1,Cn=!1;W.version===At.__version?At.needsLights&&At.lightsStateVersion!==ei.state.version||Z.isBatchedMesh&&At.batching===!1||!Z.isBatchedMesh&&At.batching===!0||Z.isBatchedMesh&&At.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&At.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||Z.isInstancedMesh&&At.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&At.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&At.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&At.instancingMorph===!1&&Z.morphTexture!==null||At.envMap!==Ct||W.fog===!0&&At.fog!==gt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Wt||At.vertexTangents!==jt||At.morphTargets!==Tt||At.morphNormals!==Qt||At.morphColors!==Ae||At.morphTargetsCount!==$e||At.numLightProbeGrids!==Dc(A.state.lightProbeGridArray)?ne=!0:(At.outputColorSpace!==pt||At.toneMapping!==fe)&&(Cn=!0):(ne=!0,At.__version=W.version);let Ke=At.currentProgram;(ne===!0||Cn===!0)&&(Ke=Cn===!0?uf(W,z,Z,pt,fe):Ls(W,z,Z),F&&W.isNodeMaterial&&F.onUpdateProgram(W,Ke,At));let Pr=!1,un=!1,Rn=!1,ie=Ke.getUniforms(),We=At.uniforms;if(yt.useProgram(Ke.program)&&(Pr=!0,un=!0,Rn=!0),W.id!==k&&(k=W.id,un=!0),Pr||V!==T){yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ie.setValue(B,"projectionMatrix",T.projectionMatrix),ie.setValue(B,"viewMatrix",T.matrixWorldInverse);let Oe=ie.map.cameraPosition;Oe!==void 0&&Oe.setValue(B,di.setFromMatrixPosition(T.matrixWorld)),ve.logarithmicDepthBuffer&&ie.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ie.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,un=!0,Rn=!0)}if(At.needsLights&&(ei.state.sunShadowMap.length>0&&ie.setValue(B,"sunShadowMap",ei.state.sunShadowMap,Vt),ei.state.directionalShadowMap.length>0&&ie.setValue(B,"directionalShadowMap",ei.state.directionalShadowMap,Vt),ei.state.spotShadowMap.length>0&&ie.setValue(B,"spotShadowMap",ei.state.spotShadowMap,Vt),ei.state.pointShadowMap.length>0&&ie.setValue(B,"pointShadowMap",ei.state.pointShadowMap,Vt)),Z.isSkinnedMesh){ie.setOptional(B,Z,"bindMatrix"),ie.setOptional(B,Z,"bindMatrixInverse");let Me=Z.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ie.setValue(B,"boneTexture",Me.boneTexture,Vt))}Z.isBatchedMesh&&(ie.setOptional(B,Z,"batchingTexture"),ie.setValue(B,"batchingTexture",Z._matricesTexture,Vt),ie.setOptional(B,Z,"batchingIdTexture"),ie.setValue(B,"batchingIdTexture",Z._indirectTexture,Vt),ie.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ie.setValue(B,"batchingColorTexture",Z._colorsTexture,Vt));let wi=K.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&it.update(Z,K,Ke),(un||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,ie.setValue(B,"receiveShadow",Z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(We.envMapIntensity.value=z.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Fg()),un){if(ie.setValue(B,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&df(We,Rn),gt&&W.fog===!0&&ct.refreshFogUniforms(We,gt),ct.refreshMaterialUniforms(We,W,st,dt,A.state.transmissionRenderTarget[T.id]),At.needsLights&&At.numLightProbeGrids>0){let Me=y,Oe=0;for(let Wi of A.state.lightProbeGridArray)Wi.texture!==null&&(Me.textures[Oe]=Wi.texture,Me.min[Oe]=Wi.boundingBox.min,Me.max[Oe]=Wi.boundingBox.max,Me.resolution[Oe]=Wi.resolution,Oe++);for(let Wi in Me)Me[Wi].length=Oe;We.probesSH.value=Me.textures,We.probesMin.value=Me.min,We.probesMax.value=Me.max,We.probesResolution.value=Me.resolution}Ss.upload(B,Nc(At),We,Vt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ss.upload(B,Nc(At),We,Vt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ie.setValue(B,"center",Z.center),ie.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ie.setValue(B,"normalMatrix",Z.normalMatrix),ie.setValue(B,"modelMatrix",Z.matrixWorld),W.uniformsGroups!==void 0){let Me=W.uniformsGroups;for(let Oe=0,Wi=Me.length;Oe<Wi;Oe++){let Oc=Me[Oe];Rt.update(Oc,Ke),Rt.bind(Oc,Ke)}}return Ke}function df(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function pf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,z,K){let W=Ut.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ut.get(T.texture).__webglTexture=z,Ut.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let K=Ut.get(T);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,K=0){I=T,R=z,N=K;let W=null,Z=!1,gt=!1;if(T){let pt=Ut.get(T);if(pt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(B.FRAMEBUFFER,pt.__webglFramebuffer),J.copy(T.viewport),lt.copy(T.scissor),_t=T.scissorTest,yt.viewport(J),yt.scissor(lt),yt.setScissorTest(_t),k=-1;return}else if(pt.__webglFramebuffer===void 0)Vt.setupRenderTarget(T);else if(pt.__hasExternalTextures)Vt.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Wt=T.depthTexture;if(pt.__boundDepthTexture!==Wt){if(Wt!==null&&Ut.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(T)}}let Mt=T.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let Ct=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ct[z])?W=Ct[z][K]:W=Ct[z],Z=!0):T.samples>0&&Vt.useMultisampledRTT(T)===!1?W=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Ct)?W=Ct[K]:W=Ct,J.copy(T.viewport),lt.copy(T.scissor),_t=T.scissorTest}else J.copy(Lt).multiplyScalar(st).floor(),lt.copy(Ht).multiplyScalar(st).floor(),_t=Nt;if(K!==0&&(W=G),yt.bindFramebuffer(B.FRAMEBUFFER,W)&&yt.drawBuffers(T,W),yt.viewport(J),yt.scissor(lt),yt.setScissorTest(_t),Z){let pt=Ut.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,pt.__webglTexture,K)}else if(gt){let pt=z;for(let Mt=0;Mt<T.textures.length;Mt++){let Ct=Ut.get(T.textures[Mt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,K,pt)}}else if(T!==null&&K!==0){let pt=Ut.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pt.__webglTexture,K)}k=-1};function kc(T){let z=Ut.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=ve.textureFormatReadable(T.format),z.__typeReadable=ve.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,K,W,Z,gt,St,pt=0){if(!(T&&T.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){yt.bindFramebuffer(B.FRAMEBUFFER,Mt);try{let Ct=T.textures[pt],Wt=Ct.format,jt=Ct.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt);let Tt=kc(Ct);if(Tt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&K>=0&&K<=T.height-Z&&B.readPixels(z,K,W,Z,ot.convert(Wt),ot.convert(jt),gt)}finally{let Ct=I!==null?Ut.get(I).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,z,K,W,Z,gt,St,pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(z>=0&&z<=T.width-W&&K>=0&&K<=T.height-Z){yt.bindFramebuffer(B.FRAMEBUFFER,Mt);let Ct=T.textures[pt],Wt=Ct.format,jt=Ct.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt);let Tt=kc(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),B.readPixels(z,K,W,Z,ot.convert(Wt),ot.convert(jt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ae=I!==null?Ut.get(I).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Ae);let fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qh(B,fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Qt),B.deleteSync(fe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,K=0){let W=Math.pow(2,-K),Z=Math.floor(T.image.width*W),gt=Math.floor(T.image.height*W),St=z!==null?z.x:0,pt=z!==null?z.y:0;Vt.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,St,pt,Z,gt),yt.unbindTexture()},this.copyTextureToTexture=function(T,z,K=null,W=null,Z=0,gt=0){let St,pt,Mt,Ct,Wt,jt,Tt,Qt,Ae,fe=T.isCompressedTexture?T.mipmaps[gt]:T.image;if(K!==null)St=K.max.x-K.min.x,pt=K.max.y-K.min.y,Mt=K.isBox3?K.max.z-K.min.z:1,Ct=K.min.x,Wt=K.min.y,jt=K.isBox3?K.min.z:0;else{let ie=Math.pow(2,-Z);St=Math.floor(fe.width*ie),pt=Math.floor(fe.height*ie),T.isDataArrayTexture?Mt=fe.depth:T.isData3DTexture?Mt=Math.floor(fe.depth*ie):Mt=1,Ct=0,Wt=0,jt=0}W!==null?(Tt=W.x,Qt=W.y,Ae=W.z):(Tt=0,Qt=0,Ae=0);let he=ot.convert(z.format),$e=ot.convert(z.type),At;z.isData3DTexture?(Vt.setTexture3D(z,0),At=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Vt.setTexture2DArray(z,0),At=B.TEXTURE_2D_ARRAY):(Vt.setTexture2D(z,0),At=B.TEXTURE_2D),yt.activeTexture(B.TEXTURE0),yt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),yt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),yt.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let ei=yt.getParameter(B.UNPACK_ROW_LENGTH),ne=yt.getParameter(B.UNPACK_IMAGE_HEIGHT),Cn=yt.getParameter(B.UNPACK_SKIP_PIXELS),Ke=yt.getParameter(B.UNPACK_SKIP_ROWS),Pr=yt.getParameter(B.UNPACK_SKIP_IMAGES);yt.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),yt.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,jt);let un=T.isDataArrayTexture||T.isData3DTexture,Rn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let ie=Ut.get(T),We=Ut.get(z),wi=Ut.get(ie.__renderTarget),Me=Ut.get(We.__renderTarget);yt.bindFramebuffer(B.READ_FRAMEBUFFER,wi.__webglFramebuffer),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Oe=0;Oe<Mt;Oe++)un&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(T).__webglTexture,Z,jt+Oe),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(z).__webglTexture,gt,Ae+Oe)),B.blitFramebuffer(Ct,Wt,Ct+St,Wt+pt,Tt,Qt,Tt+St,Qt+pt,B.DEPTH_BUFFER_BIT,B.NEAREST);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Ut.has(T)){let ie=Ut.get(T),We=Ut.get(z);yt.bindFramebuffer(B.READ_FRAMEBUFFER,L),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,E);for(let wi=0;wi<Mt;wi++)un?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ie.__webglTexture,Z,jt+wi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ie.__webglTexture,Z),Rn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,gt,Ae+wi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,gt),Z!==0?B.blitFramebuffer(Ct,Wt,Ct+St,Wt+pt,Tt,Qt,Tt+St,Qt+pt,B.COLOR_BUFFER_BIT,B.NEAREST):Rn?B.copyTexSubImage3D(At,gt,Tt,Qt,Ae+wi,Ct,Wt,St,pt):B.copyTexSubImage2D(At,gt,Tt,Qt,Ct,Wt,St,pt);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(At,gt,Tt,Qt,Ae,St,pt,Mt,he,$e,fe.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(At,gt,Tt,Qt,Ae,St,pt,Mt,he,fe.data):B.texSubImage3D(At,gt,Tt,Qt,Ae,St,pt,Mt,he,$e,fe):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,gt,Tt,Qt,St,pt,he,$e,fe.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,gt,Tt,Qt,fe.width,fe.height,he,fe.data):B.texSubImage2D(B.TEXTURE_2D,gt,Tt,Qt,St,pt,he,$e,fe);yt.pixelStorei(B.UNPACK_ROW_LENGTH,ei),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,Cn),yt.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,Pr),gt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&B.generateMipmap(At),yt.unbindTexture()},this.initRenderTarget=function(T){Ut.get(T).__webglFramebuffer===void 0&&Vt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Vt.setTextureCube(T,0):T.isData3DTexture?Vt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Vt.setTexture2DArray(T,0):Vt.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){R=0,N=0,I=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Be=(n,t,e)=>n<t?t:n>e?e:n,zg=(n,t,e)=>n+(t-n)*e,ti=(n,t,e,i)=>zg(n,t,1-Math.exp(-e*i)),Te=(n,t)=>n+Math.random()*(t-n),hc=Math.PI*2;function Ne(n,t){let e=(t-n)%hc;return e>Math.PI&&(e-=hc),e<-Math.PI&&(e+=hc),e}function wn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wt(n,t){let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return e<<16|i<<8|s}var Sr=n=>{let t=Math.floor(n);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Ye=n=>"$"+Math.round(n).toLocaleString("en-US");var Ts=wn(99),le=(n,t)=>n+Ts()*(t-n),Wn=(n,t,e,i=1)=>`hsla(${n},${t}%,${e}%,${i})`;function Ze(n,t,e=!0,i=!0){let s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d");t(r,n);let a=new Qs(s);return i&&(a.colorSpace=ii),a.wrapS=a.wrapT=e?hs:_i,a.anisotropy=4,a}function Tn(n,t,e,i,s,r,a,o,l=2){for(let h=0;h<e;h++)n.fillStyle=Wn(i,s,le(r,a),o),n.fillRect(Ts()*t,Ts()*t,l*le(.5,1.5),l*le(.5,1.5))}var Ce={};function on(){return Ce.wood||(Ce.wood=Ze(256,(n,t)=>{let i=t/8;for(let s=0;s<8;s++){let r=-le(0,120);for(;r<t;){let a=le(90,190),o=le(52,64),l=le(26,33);n.fillStyle=Wn(l,55,o*.75),n.fillRect(r,s*i,a,i);for(let h=0;h<6;h++){n.strokeStyle=Wn(l,50,o*.62,.35),n.lineWidth=le(.6,1.6),n.beginPath();let c=s*i+le(3,i-3);n.moveTo(r,c),n.bezierCurveTo(r+a*.3,c+le(-3,3),r+a*.7,c+le(-3,3),r+a,c+le(-2,2)),n.stroke()}Ts()<.3&&(n.fillStyle=Wn(l,50,o*.55,.5),n.beginPath(),n.ellipse(r+le(10,a-10),s*i+i/2,le(3,6),le(1.5,3),0,0,7),n.fill()),n.fillStyle="rgba(60,30,10,.55)",n.fillRect(r,s*i,2,i),r+=a}n.fillStyle="rgba(60,30,10,.6)",n.fillRect(0,s*i,t,2),n.fillStyle="rgba(255,240,210,.12)",n.fillRect(0,s*i+2,t,2)}}),Ce.woodfine=Ze(128,(n,t)=>{n.fillStyle="#e9dccb",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){n.strokeStyle=`rgba(120,80,40,${le(.06,.18)})`,n.lineWidth=le(.5,2),n.beginPath();let i=le(0,t);n.moveTo(0,i),n.bezierCurveTo(t*.3,i+le(-4,4),t*.6,i+le(-4,4),t,i),n.stroke()}}),Ce.carpet=Ze(128,(n,t)=>{n.fillStyle="#e4e4e4",n.fillRect(0,0,t,t),Tn(n,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)n.fillStyle="rgba(0,0,0,.035)",n.fillRect(0,e,t,3)}),Ce.tile=Ze(128,(n,t)=>{n.fillStyle="#aab5bd",n.fillRect(0,0,t,t);let e=2,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++)n.fillStyle=Wn(200,10,le(93,98)),n.fillRect(r*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(255,255,255,.6)",n.fillRect(r*i+3,s*i+3,i-8,3),n.fillStyle="rgba(0,0,0,.06)",n.fillRect(r*i+3,s*i+i-7,i-6,3)}),Ce.wallpaper=Ze(128,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)n.fillStyle="rgba(0,0,0,.045)",n.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let i=23;i<t;i+=32)n.fillStyle="rgba(0,0,0,.08)",n.beginPath(),n.moveTo(i,e),n.lineTo(i+4,e+6),n.lineTo(i,e+12),n.lineTo(i-4,e+6),n.fill();Tn(n,t,500,0,0,60,100,.04,2)}),Ce.panel=Ze(128,(n,t)=>{n.fillStyle="#f0f0f0",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3,n.strokeRect(e+10,14,44,t-28),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2,n.strokeRect(e+13,17,44,t-28)}),Ce.brick=Ze(256,(n,t)=>{n.fillStyle="#d8c6b0",n.fillRect(0,0,t,t);let e=t/8,i=t/4;for(let s=0;s<8;s++)for(let r=-1;r<5;r++){let a=r*i+(s%2?i/2:0);n.fillStyle=Wn(le(10,20),le(35,50),le(42,52)),n.fillRect(a+3,s*e+3,i-6,e-6),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(a+3,s*e+3,i-6,4)}Tn(n,t,900,10,30,20,60,.15,2)}),Ce.plaster=Ze(128,(n,t)=>{n.fillStyle="#f4f2ef",n.fillRect(0,0,t,t),Tn(n,t,1500,30,10,75,100,.12,2)}),Ce.plain=Ze(64,(n,t)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,t,t),Tn(n,t,500,0,0,82,100,.25,2)}),Ce.grass=Ze(128,(n,t)=>{n.fillStyle="#6dbb4a",n.fillRect(0,0,t,t);for(let e=0;e<1400;e++){n.strokeStyle=Wn(le(85,110),le(45,65),le(32,55),.7),n.lineWidth=1,n.beginPath();let i=Ts()*t,s=Ts()*t;n.moveTo(i,s),n.lineTo(i+le(-2,2),s-le(3,7)),n.stroke()}}),Ce.asphalt=Ze(128,(n,t)=>{n.fillStyle="#4a4f5c",n.fillRect(0,0,t,t),Tn(n,t,2200,220,8,22,60,.4,1.6)}),Ce.concrete=Ze(128,(n,t)=>{n.fillStyle="#cfd2d6",n.fillRect(0,0,t,t),Tn(n,t,1400,210,6,60,95,.2,2),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(0,0,t,2),n.fillRect(0,0,2,t)}),Ce.rug=Ze(256,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t),n.fillStyle="#9a9a9a",n.fillRect(10,10,t-20,t-20),n.fillStyle="#ffffff",n.fillRect(22,22,t-44,t-44),n.fillStyle="#c8c8c8",n.fillRect(30,30,t-60,t-60),n.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let i=46;i<t-46;i+=32)n.beginPath(),n.moveTo(i+16,e+2),n.lineTo(i+30,e+16),n.lineTo(i+16,e+30),n.lineTo(i+2,e+16),n.fill();n.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)n.fillRect(e,0,2,8),n.fillRect(e,t-8,2,8);Tn(n,t,1500,0,0,50,100,.12,1.5)},!1),Ce.shadow=Ze(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ce.glow=Ze(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ce.beam=Ze(64,(n,t)=>{let e=n.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ce.patch=Ze(64,(n,t)=>{for(let e=0;e<12;e++){n.fillStyle=`rgba(255,255,255,${.06})`;let i=e*2.5;n.fillRect(i,i,t-2*i,t-2*i)}},!1,!1)),Ce}function Iu(){let n=new sr(90,16,10),t=n.attributes.position,e=new Float32Array(t.count*3),i=new Ot,s=new Ot(7311320),r=new Ot(16038282),a=new Ot(16767400);for(let l=0;l<t.count;l++){let h=t.getY(l)/90;h>.15?i.copy(r).lerp(s,Math.min(1,(h-.15)/.6)):i.copy(a).lerp(r,Math.max(0,(h+.1)/.25)),e[l*3]=i.r,e[l*3+1]=i.g,e[l*3+2]=i.b}n.setAttribute("color",new oe(e,3));let o=new Et(n,new Xt({vertexColors:!0,side:qe,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-10,o.frustumCulled=!1,o}var Co=class{constructor(t,e=220){this.n=e,this.box=7;let i=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*this.box,i[s*3+1]=Math.random()*1.9,i[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new xe,this.geo.setAttribute("position",new oe(i,3)),this.points=new en(this.geo,new zi({map:on().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:ri})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,i){this.t+=t;let s=this.geo.attributes.position.array,r=this.vel,a=this.box/2;for(let o=0;o<this.n;o++){let l=o*3;s[l]+=(r[l]+Math.sin(this.t*.5+o)*.02)*t,s[l+1]+=(r[l+1]+Math.cos(this.t*.4+o*1.3)*.015)*t,s[l+2]+=r[l+2]*t,s[l]<e-a?s[l]+=this.box:s[l]>e+a&&(s[l]-=this.box),s[l+2]<i-a?s[l+2]+=this.box:s[l+2]>i+a&&(s[l+2]-=this.box),s[l+1]<.05?s[l+1]=1.85:s[l+1]>1.88&&(s[l+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var uc={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},fc={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe",z:"teller",v:"case",m:"pedestal",a:"statue",s:"slots",j:"poker"},Bg=new Set(["h","f","x","a"]),Lu={$:"cash",G:"gold",J:"jewel",A:"art"};function Du(n){let t=n.map,e=t.length,i=Math.max(...t.map(y=>y.length)),s=i*e,r=new Array(s);for(let y=0;y<e;y++)for(let w=0;w<i;w++)r[y*i+w]=t[y][w]||"g";let a=new Uint8Array(s),o=new Uint8Array(s),l=new Uint8Array(s),h=new Array(s),c=[],f=[],u={x:1,y:1},p=null,g=null,_=null,d=[],m=[];for(let y=0;y<e;y++)for(let w=0;w<i;w++){let A=y*i+w,x=r[A];if(x==="#"){o[A]=1;continue}if(x==="D"||x==="L"){o[A]=1,a[A]=0,d.push({x:w,y,type:x==="L"?"lock":"key"});continue}x==="K"&&m.push({x:w,y}),fc[x]?(o[A]=Bg.has(x)?1:0,a[A]=0):x==="S"?(p={x:w,y},a[A]=0):a[A]=1,Lu[x]&&c.push({type:Lu[x],x:w,y}),x==="P"&&(u={x:w,y}),x==="V"&&(g={x:w,y}),x==="R"&&(_={x:w,y})}for(let y=0;y<s;y++){let w=r[y];if(w==="#")continue;if(uc[w]){h[y]=uc[w];continue}let A=y%i,x=y/i|0,M="wood";t:for(let D=1;D<6;D++)for(let P=-D;P<=D;P++)for(let O=-D;O<=D;O++){if(Math.max(Math.abs(O),Math.abs(P))!==D)continue;let F=A+O,G=x+P;if(F<0||G<0||F>=i||G>=e)continue;let L=uc[r[G*i+F]];if(L){M=L;break t}}h[y]=M}for(let y=0;y<s;y++)l[y]=h[y]==="grass"||h[y]==="road"?1:0;let v={x:u.x+.5,z:u.y+.5};if(g){for(let y=g.y;y<=g.y+1;y++)for(let w=g.x-1;w<=g.x+1;w++)w>=0&&y>=0&&w<i&&y<e&&(a[y*i+w]=0);v={x:g.x+.5,z:g.y-.5}}else _&&(v={x:_.x+.5,z:_.y+.5});let b=new Uint8Array(s);for(let y=0;y<s;y++){let w=r[y];if(!fc[w]||b[y])continue;let A=y%i,x=y/i|0,M=A,D=x,P=[y];for(b[y]=1;P.length;){let O=P.pop(),F=O%i,G=O/i|0;A=Math.min(A,F),M=Math.max(M,F),x=Math.min(x,G),D=Math.max(D,G);for(let[L,E]of[[1,0],[-1,0],[0,1],[0,-1]]){let R=F+L,N=G+E;if(R<0||N<0||R>=i||N>=e)continue;let I=N*i+R;!b[I]&&r[I]===w&&(b[I]=1,P.push(I))}}f.push({c:w,type:fc[w],x0:A,y0:x,w:M-A+1,d:D-x+1})}return{W:i,H:e,ch:r,walk:a,opaque:o,outdoor:l,floor:h,loot:c,furn:f,start:u,safe:p,van:g,roof:_,exit:v,def:n,doors:d,keys:m}}var Gg=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],oi=1,Li=2,ye=4,Mi=8,kt=16,Ge=32;var Hg=55,An=new Ot,$t=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,i,s,r,a,o,l={}){let h=l.faces??Hg,c=s/2,f=r/2,u=a/2,p=e+f,g=l.ry||0,_=Math.cos(g),d=Math.sin(g);for(let m=0;m<6;m++){if(!(h&1<<m))continue;let v=l.fc&&l.fc[m]!=null?l.fc[m]:m===2&&l.top!=null?l.top:o;An.setHex(v);let[b,y]=Gg[m],w=this.p.length/3,A=b[0]*_+b[2]*d,x=-b[0]*d+b[2]*_,M=l.us||this.us,D=Math.abs(A),P=Math.abs(x),O=0;for(let F of y){let G=F[0]*c,L=F[2]*u,E=t+G*_+L*d,R=p+F[1]*f,N=i-G*d+L*_;this.p.push(E,R,N),this.n.push(A,b[1],x),this.c.push(An.r,An.g,An.b),l.fit?(this.u.push(O===1||O===2?1:0,O>=2?1:0),O++):m===2||m===3?this.u.push(E/M,-N/M):D>P?this.u.push((A>0?-N:N)/M,R/M):this.u.push((x>0?E:-E)/M,R/M)}this.i.push(w,w+1,w+2,w,w+2,w+3)}return this}add(t,e,i=0,s=0,r=0){let a=t.index?t.toNonIndexed():t,o=a.attributes.position.array,l=a.attributes.normal.array;An.setHex(e);let h=this.p.length/3;for(let c=0;c<o.length;c+=3)this.p.push(o[c]+i,o[c+1]+s,o[c+2]+r),this.n.push(l[c],l[c+1],l[c+2]),this.c.push(An.r,An.g,An.b),this.u.push(o[c]/this.us,o[c+1]/this.us);for(let c=0;c<o.length/3;c++)this.i.push(h+c);return this}get empty(){return this.p.length===0}build(){let t=new xe;t.setAttribute("position",new oe(new Float32Array(this.p),3)),t.setAttribute("normal",new oe(new Float32Array(this.n),3)),t.setAttribute("color",new oe(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new oe(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new oe(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var He=1.9,Vg=7227954,dc=16183526,Wg=15985888,Nu=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],pc=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],As=[5020230,6074452,4164168,7126874],Uu=()=>new Pe({vertexColors:!0,emissive:2760720});function Xg(n,t,e,i){let{W:s,H:r,ch:a}=n,o=(v,b)=>v<0||b<0||v>=s||b>=r||a[b*s+v]==="#",l=i;if(!l){let v=0;l=[0,-1];let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let y of b){let w=0;if(y[1]){let A=y[1]<0?t.y0-1:t.y0+t.d;for(let x=t.x0;x<t.x0+t.w;x++)w+=o(x,A);w/=t.w}else{let A=y[0]<0?t.x0-1:t.x0+t.w;for(let x=t.y0;x<t.y0+t.d;x++)w+=o(A,x);w/=t.d}w>v+.01&&(v=w,l=y)}}let h=Math.atan2(-l[0],-l[1]),c=l[0]?t.d:t.w,f=l[0]?t.w:t.d,u=t.x0+t.w/2,p=t.y0+t.d/2,g=Math.cos(h),_=Math.sin(h),d=(v,b)=>[u+v*g+b*_,p-v*_+b*g];return{b:(v,b,y,w,A,x,M,D,P={})=>{let[O,F]=d(b,w);v.box(O,y,F,A,x,M,D,{...P,ry:(P.ry||0)+h})},W:c,D:f,rot:h,wpos:d}}function qg(n,t,e,i,s){let r=(_,d)=>_+i()*(d-_),a=e.plain,o=e.woodfine,l=e.unlit,h;if(t.type==="couch"){let _=n.furn.find(d=>d.type==="tv");h=_&&_.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let _=n.furn.find(d=>d.type==="table");if(_){let d=_.x0+_.w/2-(t.x0+.5),m=_.y0+_.d/2-(t.y0+.5);h=Math.abs(d)>Math.abs(m)?[-Math.sign(d),0]:[0,-Math.sign(m)]}}else t.type==="desk"||t.type==="table"?h=[0,-1]:t.type==="slots"&&(h=t.y0<n.H/2?[0,-1]:[0,1]);let{b:c,W:f,D:u,wpos:p}=Xg(n,t,e,h),g=(_,d,m,v,b,y)=>{let[w,A]=p(_,m);s.push({x:w,y:d,z:A,col:v,I:b,R:y})};switch(c(e.shadow,0,.012,0,f+.35,.001,u+.35,16777215,{faces:ye,fit:!0}),t.type){case"shelf":{for(let m of[-1,1])c(o,m*(f/2-.04),0,0,.07,1.6,u-.12,8015411);c(o,0,1.6-.06,0,f-.02,.07,u-.08,8015411),c(o,0,0,-u/2+.09,f-.1,1.6,.03,wt(8015411,.7));for(let m=0;m<4;m++){let v=.06+m*.38;if(c(o,0,v,0,f-.1,.035,u-.18,8015411),m===3&&i()<.5){c(a,r(-.2,.2),v+.035,0,.12,.2,.12,4165530),c(a,0,v+.235,0,.18,.18,.18,As[1],{ry:.6});continue}let b=-f/2+.1;for(;b<f/2-.12;){let y=r(.04,.09),w=r(.2,.31),A=pc[i()*pc.length|0];if(i()<.08){b+=.12;continue}let x=i()<.1?.25:0;c(a,b+y/2,v+.035,.02,y,w,u-.32,A,{top:wt(A,1.25)}),w>.25&&c(a,b+y/2,v+.035+w*.7,.02,y+.004,.025,u-.31,15914122,{faces:kt|Ge}),b+=y+.006+x*.1}}break}case"fridge":{c(a,0,.04,0,f-.12,1.55,u-.14,15265522,{top:14278886}),c(a,0,0,.02,f-.16,.05,u-.2,3816006),c(a,0,1,u/2-.068,f-.12,.015,.01,11450560,{faces:kt}),c(a,.3,.55,u/2-.04,.04,.35,.05,12108492),c(a,.3,1.1,u/2-.04,.04,.3,.05,12108492);for(let d=0;d<4;d++)c(a,r(-.3,.15),r(.6,1.45),u/2-.066,.06,.06,.01,pc[d],{faces:kt});c(a,-.1,1.15,u/2-.066,.18,.22,.008,16777215,{faces:kt,ry:.08});break}case"bed":{c(o,0,.08,0,f-.06,.22,u-.06,10118724);for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,m*(f/2-.09),0,v*(u/2-.09),.1,.1,.1,wt(10118724,.7));c(o,0,0,-u/2+.06,f,1.05,.1,10118724),c(o,0,1.05,-u/2+.06,f+.06,.07,.14,wt(10118724,.85)),c(o,0,.45,-u/2+.115,f-.3,.45,.01,wt(10118724,1.15),{faces:kt}),c(a,0,.3,.04,f-.14,.18,u-.22,16250094),c(a,0,.33,.42,f-.08,.2,u-.95,6066121,{top:wt(6066121,1.12)}),c(a,0,.36,-u/2+1.08,f-.07,.19,.22,15789284);for(let m of[-1,1])c(a,m*.45,.47,-u/2+.42,.78,.15,.4,16777215,{ry:m*.04});c(a,0,.535,u/2-.42,f-.04,.03,.42,15246141),c(a,0,.3,u/2-.205,f-.04,.26,.02,15246141,{faces:kt});break}case"desk":{c(o,0,.7,-.45,f-.1,.06,.8,11565642,{top:wt(11565642,1.1)}),c(o,-f/2+.35,0,-.45,.5,.7,.72,wt(11565642,.9));for(let d=0;d<3;d++)c(a,-f/2+.35,.08+d*.21,-.08,.42,.16,.01,wt(11565642,.75),{faces:kt}),c(a,-f/2+.35,.15+d*.21,-.07,.12,.025,.02,14267482);c(o,f/2-.08,0,-.45,.06,.7,.72,wt(11565642,.9)),c(a,.15,.76,-.7,.18,.04,.14,2763574),c(a,.15,.8,-.7,.05,.16,.05,2763574),c(a,.15,.92,-.7,.72,.44,.05,2237229),c(l,.15,.95,-.672,.64,.37,.01,6272255,{faces:kt}),c(l,0,1.05,-.665,.25,.14,.008,12576511,{faces:kt}),c(l,.32,1,-.665,.18,.08,.008,16765806,{faces:kt}),c(a,.15,.76,-.38,.55,.025,.18,3421503),c(a,.55,.76,-.38,.07,.03,.1,3421503),c(a,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),c(a,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),c(a,.78,.76,-.5,.08,.1,.08,14185306),c(a,-.7,.76,-.7,.14,.03,.14,2763574),c(a,-.7,.79,-.7,.025,.32,.025,2763574),c(l,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),g(-.6,1,-.55,[1,.72,.42],.75,2.6),c(a,0,0,.35,.5,.05,.05,2763574),c(a,0,0,.35,.05,.05,.5,2763574),c(a,0,.05,.35,.05,.35,.05,5592671),c(a,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),c(a,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{c(a,0,0,.04,f-.02,.08,u-.2,3816006),c(a,0,.08,0,f-.02,.72,u-.12,15854818);let m=Math.max(1,Math.round(f/.5));for(let v=0;v<m;v++){let b=-f/2+(v+.5)*(f/m);c(a,b,.14,u/2-.055,f/m-.06,.6,.012,wt(15854818,.93),{faces:kt}),c(a,b+(v%2?-1:1)*(f/m/2-.08),.62,u/2-.04,.025,.12,.025,11901530)}c(a,0,.8,.02,f,.06,u-.06,3881544,{top:4868440}),c(e.tile,0,.86,-u/2+.02,f,.48,.01,16777215,{faces:kt,us:.5}),c(a,0,1.36,-u/2+.2,f-.02,.48,.36,15854818);for(let v=0;v<m;v++){let b=-f/2+(v+.5)*(f/m);c(a,b,1.4,-u/2+.385,f/m-.06,.4,.012,wt(15854818,.93),{faces:kt}),c(a,b,1.43,-u/2+.4,.12,.025,.025,11901530)}f>=2?(c(a,.45,.855,.05,.6,.012,.42,9345186,{faces:ye}),c(a,.45,.86,-.22,.04,.22,.04,12831958),c(a,.45,1.05,-.12,.04,.04,.2,12831958),c(o,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),c(a,-.35,.89,.05,.12,.06,.06,14185306)):(c(a,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),c(a,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{c(a,0,0,.04,f-.02,.08,u-.2,3816006),c(a,0,.08,0,f-.04,.74,u-.12,14081250),c(a,0,.18,u/2-.055,f-.2,.42,.012,2829364,{faces:kt}),c(l,0,.26,u/2-.05,f-.36,.22,.01,6961698,{faces:kt}),c(a,0,.56,u/2-.04,f-.3,.03,.03,12108492);for(let d=0;d<4;d++)c(a,-.3+d*.2,.7,u/2-.05,.05,.05,.03,2829364);c(a,0,.82,.02,f-.02,.04,u-.06,2302763);for(let[d,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(a,d*.2,.86,m*.17,.2,.012,.2,4868693);c(a,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),c(a,0,1.42,-u/2+.24,f-.1,.18,.44,12831958),c(a,0,1.6,-u/2+.12,.3,.3,.22,12831958),c(e.tile,0,.86,-u/2+.02,f,.56,.01,16777215,{faces:kt,us:.5});break}case"couch":{for(let y of[-1,1])for(let w of[-1,1])c(o,y*(f/2-.2),0,w*(u/2-.15),.07,.1,.07,5913126);c(a,0,.1,0,f-.08,.26,u-.12,wt(3115662,.85)),c(a,0,.1,-u/2+.17,f-.08,.66,.22,3115662);for(let y of[-1,1])c(a,y*(f/2-.13),.1,.02,.22,.44,u-.1,3115662),c(a,y*(f/2-.13),.54,.02,.26,.06,u-.06,3842212);let v=3,b=(f-.6)/v;for(let y=0;y<v;y++){let w=-f/2+.3+(y+.5)*b;c(a,w,.36,.08,b-.04,.13,u-.4,3842212,{top:wt(3842212,1.1)}),c(a,w,.42,-u/2+.34,b-.06,.38,.14,3842212,{ry:0})}c(a,-f/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),c(a,f/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),c(a,f/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),c(a,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let d of[-1,1])c(o,d*(f/2-.15),0,0,.06,.12,.06,2763574);c(o,0,.12,-.05,f-.1,.38,u-.45,7226670,{top:wt(7226670,1.15)});for(let d=0;d<3;d++)c(o,-f/2+.05+(d+.5)*((f-.1)/3),.16,u/2-.27,(f-.1)/3-.05,.3,.012,wt(7226670,1.2),{faces:kt});c(a,0,.62,-.2,f-.4,.92,.07,1447710),c(l,0,.67,-.163,f-.52,.8,.005,2903966,{faces:kt}),c(l,-.3,.75,-.159,.9,.35,.004,6269160,{faces:kt}),c(l,.5,.85,-.158,.4,.22,.004,16762967,{faces:kt}),c(l,.25,.73,-.158,.3,.12,.004,8049530,{faces:kt}),c(a,0,.5,-.02,f-1,.07,.1,2237227),c(a,f/2-.35,.5,-.05,.16,.22,.16,13133631);for(let d=0;d<4;d++)c(a,f/2-.35+r(-.05,.05),.68+d*.05,-.05,.22,.05,.08,As[d%4],{ry:d*.8});c(a,-f/2+.4,.5,-.05,.3,.06,.2,2763574),g(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{c(o,0,.66,0,f-.2,.07,u-.2,13867874,{top:wt(13867874,1.08)});for(let[d,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,d*(f/2-.25),0,m*(u/2-.25),.08,.66,.08,wt(13867874,.8));c(a,0,.73,0,.5,.006,u-.25,12999242),c(a,0,.736,0,.36,.06,.36,16777215,{top:15262422}),c(a,-.06,.79,.02,.12,.12,.12,15230287),c(a,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),c(a,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[d,m]of[[-.45,-.45],[.45,.45]])c(a,d,.735,m,.28,.012,.28,16777215),c(a,d+.2,.735,m,.03,.01,.2,12831958);break}case"chair":{for(let[d,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,d*.17,0,m*.17,.05,.42,.05,wt(12157268,.8));c(o,0,.42,0,.44,.05,.44,12157268),c(a,0,.47,0,.38,.03,.38,12999242),c(o,0,.47,-.19,.42,.52,.05,12157268),c(o,0,.82,-.19,.3,.1,.06,wt(12157268,1.1));break}case"tub":{c(a,0,0,0,f-.12,.58,u-.12,16054007,{top:16777215}),c(a,0,.5,0,f-.34,.06,u-.34,9425898,{faces:ye}),c(a,0,.58,-u/2+.15,.05,.2,.05,12831958),c(a,0,.74,-u/2+.22,.05,.04,.18,12831958),c(a,.3,.56,.2,.12,.1,.14,16765503),c(a,.3,.64,.24,.08,.08,.08,16765503),c(a,.3,.66,.3,.04,.03,.05,16747069),c(a,0,1.75,u/2-.08,f-.1,.025,.025,12831958),c(a,-f/2+.35,.6,u/2-.08,.6,1.15,.03,9423064);for(let _=0;_<3;_++)c(a,-f/2+.15+_*.2,.6,u/2-.06,.04,1.15,.035,16183526);break}case"slots":{let _=[16732026,5037311,16766810,8191898];for(let d=0;d<f;d++){let m=-f/2+d+.5,v=[9051946,2046602,5906314,2058826][(d+t.x0)%4];c(a,m,0,0,.78,.5,.7,wt(v,.7)),c(a,m,.5,-.05,.74,.95,.6,v,{top:wt(v,1.2)}),c(a,m,.5,.26,.76,.1,.12,14267482),c(a,m,.85,.26,.6,.42,.01,1315868,{faces:kt});for(let b=0;b<3;b++)c(l,m-.18+b*.18,.9,.268,.14,.3,.005,16183526,{faces:kt});for(let b=0;b<3;b++)c(l,m-.18+b*.18,1,.272,.08,.08,.004,_[(b+d)%4],{faces:kt});c(l,m,1.32,.1,.7,.16,.32,_[(d+t.y0)%4],{faces:63}),c(a,m+.42,.75,.1,.04,.35,.04,12831958),c(a,m+.42,1.1,.1,.1,.1,.1,15222847),c(a,m,.62,.3,.3,.05,.08,2763574)}g(0,1.3,.6,[1,.55,.75],.8,3.2);break}case"poker":{let m=[15222847,3111656,15911244,2237487,16183526];c(o,0,0,0,.6,.68,.6,5909018),c(o,0,.68,0,f-.1,.08,u-.1,5909018,{top:wt(5909018,1.2)}),c(a,0,.76,0,f-.34,.012,u-.34,2062922,{faces:ye}),c(a,0,.775,0,f-.9,.004,.02,14267482,{faces:ye});for(let v=0;v<6;v++){let b=v/6*6.28,y=Math.min(f,u)*.32;c(a,Math.cos(b)*y,.78,Math.sin(b)*y,.08,.03+v%3*.03,.08,m[v%5])}for(let v=0;v<4;v++)c(a,-.2+v*.13,.775,-.05,.1,.006,.14,16777215,{ry:(v-1.5)*.2});for(let[v,b]of[[-1,0],[1,0],[0,-1],[0,1]])c(o,v*(f/2+.3),0,b*(u/2+.3),.36,.48,.36,11745617,{top:13650522});g(0,1.4,0,[1,.85,.55],.9,2.6);break}case"pedestal":{let d=[14267482,4165530,11745617,6971304][(t.x0+t.y0)%4];c(a,0,0,0,.62,.12,.62,wt(15262422,.85)),c(a,0,.12,0,.46,.7,.46,15262422),c(a,0,.82,0,.6,.08,.6,wt(15262422,.92)),c(a,0,.9,0,.2,.22,.2,d,{top:wt(d,1.2)}),c(a,0,1.12,0,.12,.1,.12,wt(d,1.15)),c(a,0,.45,.235,.24,.1,.01,14267482,{faces:kt}),g(0,1.6,0,[1,.85,.6],.7,2);break}case"statue":{let d=wt(12104876,.8);c(a,0,0,0,.8,.35,.8,d,{top:12104876}),c(a,0,.35,0,.62,.08,.62,12104876),c(a,-.1,.43,0,.16,.5,.18,12104876),c(a,.1,.43,0,.16,.5,.18,12104876),c(a,0,.93,0,.42,.45,.24,12104876,{top:d}),c(a,-.27,.95,.05,.12,.42,.13,12104876,{ry:.2}),c(a,.27,1.2,0,.12,.42,.13,12104876,{ry:-.6}),c(a,0,1.38,0,.26,.3,.26,12104876,{top:d}),c(a,0,1.55,-.02,.28,.08,.28,d);break}case"case":{c(o,0,0,0,f-.1,.78,u-.1,2759202,{top:wt(2759202,1.3)}),c(a,0,.1,u/2-.06,f-.2,.55,.01,wt(2759202,1.4),{faces:kt}),c(a,0,.78,0,f-.06,.04,u-.06,14267482),c(l,0,.82,0,f-.2,.012,u-.2,3811930,{faces:ye});for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(a,m*(f/2-.06),.82,v*(u/2-.06),.04,.46,.04,14267482);c(a,0,1.28,0,f-.06,.03,u-.06,14267482),g(0,1.05,0,[.75,.85,1],.9,2.4);break}case"wardrobe":{let d=wt(9067068,1.18),m=wt(9067068,.7);c(o,0,0,-.06,.92,1.72,.74,9067068,{top:m}),c(o,0,1.72,-.06,.98,.06,.8,m),c(o,0,0,-.06,.96,.08,.78,m);for(let v of[-1,1]){c(o,v*.225,.12,.315,.42,1.54,.02,d,{faces:kt|oi|Li|ye});for(let b=0;b<9;b++)c(a,v*.225,.78+b*.09,.327,.34,.025,.01,m,{faces:kt|ye});c(o,v*.225,.2,.327,.34,.5,.008,wt(d,1.08),{faces:kt}),c(a,v*.04,.8,.34,.03,.12,.03,14267482)}c(a,0,.12,.33,.012,1.54,.02,m,{faces:kt});break}case"teller":{c(o,0,0,.05,f,.78,u-.3,5913130,{top:wt(5913130,1.1)}),c(a,0,.08,u/2-.1,f-.02,.78-.16,.01,wt(5913130,1.25),{faces:kt}),c(a,0,.78,.05,f+.02,.05,u-.2,15262422);let v=Math.max(1,Math.round(f));for(let b=0;b<=v;b++)c(a,-f/2+b*f/v,.78+.05,.05,.04,.82,.04,14267482);c(a,0,.78+.87,.05,f,.04,.06,14267482);for(let b=0;b<v;b++){let y=-f/2+(b+.5)*(f/v);c(a,y,.78+.05,.05,.3,.06,.05,2763574),b%2===0?(c(a,y+.15,.78+.05,-.2,.3,.22,.04,2237229),c(l,y+.15,.78+.09,-.177,.26,.15,.005,6272255,{faces:kt})):c(a,y-.1,.78+.05,-.15,.22,.04,.16,5221978,{top:9429130})}break}case"plant":{c(a,0,0,0,.36,.34,.36,13133631,{top:4863014}),c(a,0,.3,0,.42,.06,.42,14186319),c(o,0,.36,0,.05,.5,.05,6965802);for(let _=0;_<9;_++){let d=_*2.4,m=r(.08,.26),v=r(.45,1.2);c(a,Math.cos(d)*m,v,Math.sin(d)*m,r(.18,.3),.04,r(.1,.16),As[_%4],{ry:d})}break}case"night":{c(o,0,0,0,f-.38,.5,u-.4,10118724,{top:wt(10118724,1.12)}),c(o,0,.28,u/2-.195,f-.48,.16,.01,wt(10118724,1.2),{faces:kt}),c(a,0,.35,u/2-.18,.06,.03,.02,14267482),c(a,0,.5,-.05,.12,.03,.12,3816006),c(a,0,.53,-.05,.05,.2,.05,14267482),c(l,0,.72,-.05,.26,.18,.26,16767392),c(a,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),g(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{c(a,0,0,.05,.36,.38,.46,16185336),c(a,0,.38,.07,.4,.04,.5,16777215),c(a,0,.3,-u/2+.2,.44,.45,.2,16185336,{top:16777215}),c(a,.15,.7,-u/2+.25,.06,.02,.03,12831958);break}case"sink":{c(a,0,0,0,f-.2,.8,u-.42,6989198),c(a,0,.12,u/2-.205,f-.3,.6,.01,wt(6989198,1.15),{faces:kt}),c(a,0,.8,0,f-.14,.05,u-.36,16777215),c(a,0,.84,.02,.4,.015,.28,13227742,{faces:ye}),c(a,0,.85,-u/2+.26,.04,.16,.04,12831958),c(a,0,1,-u/2+.03,.62,.72,.03,14267482),c(l,0,1.04,-u/2+.05,.54,.64,.005,12179172,{faces:kt}),c(l,-.12,1.3,-u/2+.054,.12,.3,.004,15135994,{faces:kt,ry:0});break}}}function Yg(n,t){let{W:e,H:i}=n,s=(u,p)=>u<0||p<0||u>=e||p>=i?-1:Math.floor(p)*e+Math.floor(u),r=(u,p)=>{let g=s(u,p);return g<0||n.opaque[g]===1},a=(u,p,g,_)=>{let d=g-u,m=_-p,v=Math.ceil(Math.hypot(d,m)/.15);for(let b=1;b<v;b++){let y=b/v;if(r(u+d*y,p+m*y))return!1}return!0},o=[-.55,.7,.45],l=Math.hypot(...o);o[0]/=l,o[1]/=l,o[2]/=l;let h=[0,0,0],c=(u,p)=>{let g=s(u,p);return g<0?0:n.ch[g]==="#"?1:!n.walk[g]&&!n.outdoor[g]?.55:0};function f(u,p,g,_,d,m,v){let b=u+_*.14,y=g+m*.14,w=s(b,y),A=w>=0&&!n.outdoor[w]&&n.ch[w]!=="#",x,M,D;if(A){let O=.85+.15*d;x=.2*O,M=.19*O,D=.27*O,n.def.night&&(x*=.6,M*=.65,D*=.85);for(let F of t){let G=F.x-u,L=F.y-p,E=F.z-g,R=Math.hypot(G,L,E);if(R>F.R||!a(F.x,F.z,b,y))continue;let N=1-R/F.R,I=F.I*N*N,k=v?.7:Math.max(0,(_*G+d*L+m*E)/(R||1))*.75+.25;x+=F.col[0]*I*k,M+=F.col[1]*I*k,D+=F.col[2]*I*k}}else{let O=Math.max(0,_*o[0]+d*o[1]+m*o[2]),F=.55+.45*d;if(x=.5*F+.95*O,M=.5*F+.8*O,D=.62*F+.62*O,n.def.night){x*=.14,M*=.18,D*=.38;for(let G of t){if(!G.street)continue;let L=G.x-u,E=G.y-p,R=G.z-g,N=Math.hypot(L,E,R);if(N>G.R)continue;let I=1-N/G.R,k=G.I*I*I,V=Math.max(0,(_*L+d*E+m*R)/(N||1))*.7+.3;x+=G.col[0]*k*V,M+=G.col[1]*k*V,D+=G.col[2]*k*V}}}let P=1;if(p<.06||A&&p>He-.08){let O=0;for(let[F,G]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])O+=c(b+F,y+G);P=1-.17*O-(p<.06?.06:.1)}else p<.3&&A&&(P=.9+p*.3);return h[0]=x*P,h[1]=M*P,h[2]=D*P,h}return f}function Zg(n,t){let e=n.p,i=n.n,s=n.c;for(let r=0;r<e.length;r+=3){let a=t(e[r],e[r+1],e[r+2],i[r],i[r+1],i[r+2],!1);s[r]*=a[0],s[r+1]*=a[1],s[r+2]*=a[2]}}function ku(n){let t=on(),e={wood:new $t(2),carpet:new $t(1),tile:new $t(1),wallpaper:new $t(1),panel:new $t(1),brick:new $t(.9),plaster:new $t(2),grass:new $t(3),asphalt:new $t(3),concrete:new $t(1),plain:new $t(1),woodfine:new $t(.8),rug:new $t(1),unlit:new $t(1),shadow:new $t(1),patch:new $t(1)},{W:i,H:s,ch:r,floor:a}=n,o=wn(1337),l=(E,R)=>E+o()*(R-E),h=(E,R)=>E>=0&&R>=0&&E<i&&R<s&&r[R*i+E]==="#",c=(E,R)=>E<0||R<0||E>=i||R>=s||n.outdoor[R*i+E]===1,f=n.van?n.van.y-1:n.def.roadTop??s,u=!!n.def.night,p=n.def.lampScale||1,g=[],_=[],d=[],m=new Int16Array(i*s).fill(-1),v=(E,R)=>!h(E,R)&&(h(E-1,R)&&h(E+1,R)||h(E,R-1)&&h(E,R+1)),b=[];for(let E=0;E<i*s;E++){let R=E%i,N=E/i|0;if(m[E]>=0||r[E]==="#"||n.outdoor[E]||v(R,N))continue;let I=b.length,k=[],V=[E];for(m[E]=I;V.length;){let lt=V.pop(),_t=lt%i,$=lt/i|0;k.push(lt);for(let[X,Y]of[[1,0],[-1,0],[0,1],[0,-1]]){let dt=_t+X,st=$+Y,xt=st*i+dt;dt<0||st<0||dt>=i||st>=s||m[xt]>=0||r[xt]==="#"||n.outdoor[xt]||v(dt,st)||(m[xt]=I,V.push(xt))}}let J=n.def.palette||Nu;b.push({id:I,cells:k,pal:J[I%J.length]})}for(let E=0;E<i*s;E++)if(m[E]<0&&v(E%i,E/i|0)){let R=E%i,N=E/i|0;for(let[I,k]of[[0,1],[1,0],[0,-1],[-1,0]]){let V=(N+k)*i+R+I;if(m[V]>=0){m[E]=m[V];break}}}let y=(E,R)=>{let N=E>=0&&R>=0&&E<i&&R<s?m[R*i+E]:-1;return N>=0?b[N].pal:Nu[0]};for(let E of b){let R=1e9,N=-1,I=1e9,k=-1;for(let $ of E.cells){let X=$%i,Y=$/i|0;R=Math.min(R,X),N=Math.max(N,X),I=Math.min(I,Y),k=Math.max(k,Y)}let V=N-R+1,J=k-I+1,lt=Math.max(V,J),_t=Math.max(1,Math.round(lt/6));for(let $=0;$<_t;$++){let X=($+.5)/_t,Y=V>=J?R+V*X:R+V/2,dt=V>=J?I+J/2:I+J*X;g.push({x:Y,y:He-.4,z:dt,col:u?[1,.7,.5]:[1,.74,.45],I:1.75*p,R:5.6,pendant:!0})}}let w=40,A=(E,R,N,I,k,V)=>E.box((R+I)/2,-.06,(N+k)/2,I-R,.05,k-N,V,{faces:ye});A(e.grass,-w,-w,0,f,16777215),A(e.grass,i,-w,i+w,f,16777215),A(e.grass,0,-w,i,0,16777215),A(e.concrete,-w,f,0,f+1,16777215),A(e.concrete,i,f,i+w,f+1,16777215),A(e.asphalt,-w,f+1,0,s,16777215),A(e.asphalt,i,f+1,i+w,s,16777215),A(e.concrete,-w,s,i+w,s+1.2,16777215),A(e.grass,-w,s+1.2,i+w,s+w,16777215);for(let E=-w;E<i+w;E+=2.2)e.plain.box(E+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:ye});let x=(E,R)=>{let N=.8+o()*.6,I=o()*1.5;e.woodfine.box(E,0,R,.28*N,.9*N,.28*N,8016438,{ry:I}),e.plain.box(E,.7*N,R,1.4*N,1*N,1.4*N,As[o()*4|0],{ry:I}),e.plain.box(E+.2*N,1.5*N,R-.1*N,1*N,.8*N,1*N,As[o()*4|0],{ry:I+.5}),e.plain.box(E-.1*N,2.15*N,R+.1*N,.6*N,.5*N,.6*N,As[o()*4|0],{ry:I+.9})};for(let E=-w+2;E<f-.5;E+=2.6)for(let R=-w+2;R<i+w-2;R+=2.6)R>-1.5&&R<i+1&&E>-1.5||o()<.55&&x(R+(o()-.5)*1.4,E+(o()-.5)*1.4);let M=[15246478,10274761,15652762,12167636,11064480];for(let E=-w+3,R=0;E<i+w;E+=7,R++){let N=s+4.5+R%2*.8,I=M[R%5];e.plain.box(E,0,N,5,2.4,4,I),e.plain.box(E,2.4,N,5.5,.3,4.5,5914712),e.plain.box(E,2.7,N,4.2,.4,3.4,6965862);for(let k of[-1.5,1.5])e.unlit.box(E+k,.95,N-2.01,.8,.75,.02,16765834,{faces:Ge}),e.plain.box(E+k,.9,N-2.03,.95,.06,.06,16777215);e.woodfine.box(E,0,N-2.01,.75,1.35,.03,8014643,{faces:Ge}),o()<.8&&x(E+3.3,N-1.5)}let D=(E,R,N,I)=>{let k=Math.hypot(N-E,I-R),V=Math.round(k/.45),J=R===I;e.plain.box((E+N)/2,.28,(R+I)/2,J?k:.05,.07,J?.05:k,16183526),e.plain.box((E+N)/2,.58,(R+I)/2,J?k:.05,.07,J?.05:k,16183526);for(let lt=0;lt<=V;lt++){let _t=lt/V;e.plain.box(E+(N-E)*_t,0,R+(I-R)*_t,.1,.8,.1,16777215)}};D(-.05,-.05,i+.05,-.05),D(-.05,-.05,-.05,f-.05),D(i+.05,-.05,i+.05,f-.05);for(let E of[-.25,i+.25])for(let R=f;R<s;R+=.5)e.plain.box(E,0,R+.25,.3,.7,.5,(R*2|0)%2?15222847:16777215);let P=(E,R,N,I,k,V,J,lt,_t=2,$={})=>{let X=I>0?oi:I<0?Li:k>0?kt:Ge,Y=R+.5+I*.5+I*($.off||0),dt=N+.5+k*.5+k*($.off||0);for(let st=0;st<_t;st++){let xt=(st+.5)/_t-.5;E.box(Y+(k?xt:0),V,dt+(I?xt:0),I?0:1/_t,J,k?0:1/_t,lt,{faces:X})}};for(let E=0;E<s;E++)for(let R=0;R<i;R++){let N=E*i+R,I=r[N];if(I==="#"){e.plain.box(R+.5,He,E+.5,1,0,1,3813194,{faces:ye});for(let[X,Y]of[[1,0],[-1,0],[0,1],[0,-1]]){if(h(R+X,E+Y))continue;let dt=c(R+X,E+Y),st=(R+E)%3===0&&(dt||c(R-X,E-Y)&&!h(R-X,E-Y)),xt=R+.5+X*.5,Bt=E+.5+Y*.5,Lt=Nt=>[X?.03:Nt,Y?.03:Nt],Ht=X>0?oi:X<0?Li:Y>0?kt:Ge;if(dt)P(e.brick,R,E,X,Y,0,He,16777215,2),e.plain.box(xt+X*.02,0,Bt+Y*.02,...[X?.04:1,.2,Y?.04:1].slice(0,1),.2,Y?.04:1,9075306,{faces:Ht|ye});else{let Nt=y(R+X,E+Y);P(e.panel,R,E,X,Y,0,.72,Nt.panel,2),P(e.wallpaper,R,E,X,Y,.72,.6,Nt.wall,2),P(e.wallpaper,R,E,X,Y,1.32,He-1.32,Nt.wall,2);let[Dt,pe]=Lt(1);e.woodfine.box(xt+X*.015,0,Bt+Y*.015,Dt,.13,pe,Vg,{faces:Ht|ye}),e.plain.box(xt+X*.02,.7,Bt+Y*.02,X?.04:1,.05,Y?.04:1,Wg,{faces:Ht|ye|Mi}),e.plain.box(xt+X*.02,He-.1,Bt+Y*.02,X?.04:1,.1,Y?.04:1,dc,{faces:Ht|Mi})}if(st){let Nt=dt?16183526:16777215;e.unlit.box(xt+X*.006,.82,Bt+Y*.006,X?.01:.62,.62,Y?.01:.62,dt?u?3820138:7315138:u?4872842:16769712,{faces:Ht}),e.unlit.box(xt+X*.008,1.14,Bt+Y*.008,X?.01:.62,.3,Y?.01:.62,dt?u?4872826:9418966:u?6978216:16773584,{faces:Ht}),e.plain.box(xt+X*.02,.76,Bt+Y*.02,X?.06:.78,.06,Y?.06:.78,Nt,{faces:63&~Mi}),e.plain.box(xt+X*.02,1.44,Bt+Y*.02,X?.05:.74,.05,Y?.05:.74,Nt);for(let Dt of[-1,1])e.plain.box(xt+X*.02+(Y?Dt*.345:0),.8,Bt+Y*.02+(X?Dt*.345:0),.05,.66,.05,Nt);if(e.plain.box(xt+X*.02,1.11,Bt+Y*.02,X?.04:.62,.035,Y?.04:.62,Nt),e.plain.box(xt+X*.02,.8,Bt+Y*.02,X?.04:.035,.64,Y?.04:.035,Nt),!dt){let Dt=y(R+X,E+Y);for(let Ve of[-1,1]){let me=Y?Ve*.48:0,di=X?Ve*.48:0;e.plain.box(xt+X*.06+me,.55,Bt+Y*.06+di,X?.06:.2,1.2,Y?.06:.2,Dt.curtain,{top:wt(Dt.curtain,.8)})}e.plain.box(xt+X*.07,1.68,Bt+Y*.07,X?.03:1.2,.03,Y?.03:1.2,11901530);let pe=xt+X*.9,Se=Bt+Y*.9;e.patch.box(pe+(Y?.25:0),.015,Se+(X?.25:0),X?1:.8,0,Y?1:.8,16767392,{faces:ye,fit:!0}),g.push({x:xt+X*.6,y:1.1,z:Bt+Y*.6,col:u?[.45,.55,1]:[1,.8,.55],I:u?.6:.95,R:3.6}),d.push([xt+X*.03,Bt+Y*.03,X,Y])}}else if(!dt&&(R*5+E*3)%7===0){let Nt=[15230287,4165530,15905076,6971304,5216858][(R+E*2)%5];e.woodfine.box(xt+X*.025,.95,Bt+Y*.025,X?.05:.56,.46,Y?.05:.56,5913126,{faces:63}),e.plain.box(xt+X*.035,1,Bt+Y*.035,X?.05:.46,.36,Y?.05:.46,16183526,{faces:Ht}),e.plain.box(xt+X*.04,1.03,Bt+Y*.04,X?.05:.38,.3,Y?.05:.38,Nt,{faces:Ht}),e.plain.box(xt+X*.045,1.06,Bt+Y*.045,X?.05:.16,.14,Y?.05:.16,wt(Nt,.65),{faces:Ht}),e.plain.box(xt+X*.045+(Y?.1:0),1.16,Bt+Y*.045+(X?.1:0),X?.05:.08,.08,Y?.05:.08,16773568,{faces:Ht})}}continue}let k=a[N],V=k==="wood"?e.wood:k==="carpet"?e.carpet:k==="tile"?e.tile:k==="grass"?e.grass:E===f?e.concrete:e.asphalt,J=k==="carpet"?n.def.carpet||9346022:16777215,lt=k==="grass"||k==="road"?1:2;for(let X=0;X<lt;X++)for(let Y=0;Y<lt;Y++)V.box(R+(Y+.5)/lt,-.05,E+(X+.5)/lt,1/lt,.05,1/lt,J,{faces:ye});if(k==="road"&&E===f+1&&R%2===0&&e.plain.box(R+1,-.01,E+1,1.1,.02,.12,15911244,{faces:ye}),k!=="grass"&&k!=="road")for(let X=0;X<2;X++)for(let Y=0;Y<2;Y++)e.plaster.box(R+.25+Y*.5,He,E+.25+X*.5,.5,0,.5,16183268,{faces:Mi});let _t=h(R-1,E)&&h(R+1,E),$=h(R,E-1)&&h(R,E+1);if(_t||$){let X=y(R,E);e.plain.box(R+.5,1.55,E+.5,1,He-1.55,1,X.wall,{faces:_t?Mi|kt|Ge:Mi|oi|Li}),e.plain.box(R+.5,1.55,E+.5,_t?1.04:1.12,.07,_t?1.12:1.04,dc,{faces:63&~ye});for(let dt of[-1,1])e.plain.box(R+.5+(_t?dt*.48:0),0,E+.5+($?dt*.48:0),_t?.07:1.12,1.55,$?.07:1.12,dc,{faces:63&~Mi&~ye});let Y=I==="D"||I==="L"?[]:_t?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[dt,st]of Y){let xt=_t?R+dt:R+st,Bt=_t?E+st:E+dt;if(!h(_t?R+dt:R,_t?E:E+dt)||h(xt,Bt)||c(xt,Bt))continue;let Lt=Bt*i+xt;if(!n.walk[Lt])continue;let Ht=11040588;if(_t){let Nt=st>0?E+1+.04:E-.04,Dt=dt>0?R+1+.44:R-.44;e.woodfine.box(Dt,0,Nt,.86,1.5,.05,Ht,{faces:63}),e.plain.box(Dt+dt*.32,.72,Nt+st*.035,.05,.05,.03,14267482,{faces:63});for(let pe of[.15,.85])e.woodfine.box(Dt,pe,Nt+st*.028,.6,.55,.01,wt(Ht,1.12),{faces:st>0?kt:Ge})}else{let Nt=st>0?R+1+.04:R-.04,Dt=dt>0?E+1+.44:E-.44;e.woodfine.box(Nt,0,Dt,.05,1.5,.86,Ht,{faces:63}),e.plain.box(Nt+st*.035,.72,Dt+dt*.32,.03,.05,.05,14267482,{faces:63});for(let pe of[.15,.85])e.woodfine.box(Nt+st*.028,pe,Dt,.01,.55,.6,wt(Ht,1.12),{faces:st>0?oi:Li})}break}}}for(let E of n.def.decor||[])if(E.type==="rug"){let[R,N,I,k]=E.rect;e.rug.box(R+I/2,0,N+k/2,I-.2,.02,k-.2,E.color,{faces:ye,fit:!0})}for(let E of n.furn)qg(n,E,e,o,g);for(let E of g)E.pendant&&(e.plain.box(E.x,E.y+.12,E.z,.02,He-E.y-.12,.02,2763574),e.plain.box(E.x,He-.02,E.z,.16,.02,.16,16183526),e.plain.box(E.x,E.y+.02,E.z,.46,.12,.46,15260868,{faces:63&~Mi}),e.plain.box(E.x,E.y+.14,E.z,.3,.06,.3,14207920),e.unlit.box(E.x,E.y-.04,E.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(E.x,E.y+.021,E.z,.44,.001,.44,16769192,{faces:Mi}),_.push(E.x,E.y-.02,E.z));for(let E of g)!E.pendant&&E.I>.8&&E.y<1.2&&E.col[2]<.5&&_.push(E.x,E.y-.05,E.z);if(u)for(let E=-10;E<i+12;E+=6){let R=f+.15;e.plain.box(E,0,R,.12,2.6,.12,2763574),e.plain.box(E,2.55,R+.35,.1,.08,.7,2763574),e.unlit.box(E,2.45,R+.65,.3,.1,.3,16769696,{faces:63}),g.push({x:E,y:2.3,z:R+.7,col:[1,.78,.45],I:1.6,R:5.5,street:!0}),_.push(E,2.42,R+.65)}if(n.roof){let E=n.roof.x+.5,R=n.roof.y+.5;for(let N of[-1,1])e.plain.box(E+N*.22,0,R-.3,.05,He,.05,9082020);for(let N=0;N<6;N++)e.plain.box(E,.25+N*.28,R-.3,.44,.04,.04,12108496);e.unlit.box(E,He-.005,R-.1,.7,.01,.7,658456,{faces:Mi}),e.plain.box(E,He-.08,R-.1,.8,.08,.8,6976644,{faces:63&~ye&~Mi})}let O=Yg(n,g);for(let E of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])Zg(e[E],O);n.light=new Float32Array(i*s*3);for(let E=0;E<s;E++)for(let R=0;R<i;R++){let N=O(R+.5,1,E+.5,0,0,0,!0),I=(E*i+R)*3;n.light[I]=N[0],n.light[I+1]=N[1],n.light[I+2]=N[2]}let F=new Yt,G=(E,R,N=0)=>{if(E.empty)return;let I=new Et(E.build(),R);I.matrixAutoUpdate=!1,I.updateMatrix(),I.renderOrder=N,F.add(I)},L=E=>new Xt({vertexColors:!0,map:E});if(G(e.wood,L(t.wood)),G(e.carpet,L(t.carpet)),G(e.tile,L(t.tile)),G(e.wallpaper,L(t.wallpaper)),G(e.panel,L(t.panel)),G(e.brick,L(t.brick)),G(e.plaster,L(t.plaster)),G(e.grass,L(t.grass)),G(e.asphalt,L(t.asphalt)),G(e.concrete,L(t.concrete)),G(e.plain,L(t.plain)),G(e.woodfine,L(t.woodfine)),G(e.rug,new Xt({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),G(e.unlit,new Xt({vertexColors:!0,toneMapped:!1})),G(e.shadow,new Xt({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),G(e.patch,new Xt({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:ri,polygonOffset:!0,polygonOffsetFactor:-3}),2),d.length){let E=[],R=[],N=[];for(let[V,J,lt,_t]of d){let $=_t?1:0,X=lt?1:0,Y=E.length/3,dt=[[V-$*.3,1.4,J-X*.3,.16],[V+$*.3,1.4,J+X*.3,.16],[V+lt*1.5+$*.75,.02,J+_t*1.5+X*.75,0],[V+lt*1.5-$*.15,.02,J+_t*1.5-X*.15,0],[V-$*.3,.82,J-X*.3,.12],[V+$*.3,.82,J+X*.3,.12],[V+lt*.55+$*.55,.02,J+_t*.55+X*.55,0],[V+lt*.55-$*.05,.02,J+_t*.55-X*.05,0]];for(let st of dt)E.push(st[0],st[1],st[2]),R.push(1,.85,.6,st[3]);N.push(Y,Y+1,Y+2,Y,Y+2,Y+3,Y+4,Y+5,Y+6,Y+4,Y+6,Y+7),N.push(Y,Y+1,Y+5,Y,Y+5,Y+4)}let I=new xe;I.setAttribute("position",new oe(new Float32Array(E),3)),I.setAttribute("color",new oe(new Float32Array(R),4)),I.setIndex(N);let k=new Et(I,new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,blending:ri,side:Ie}));k.renderOrder=5,F.add(k)}if(_.length){let E=new xe;E.setAttribute("position",new oe(new Float32Array(_),3));let R=new en(E,new zi({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:ri,sizeAttenuation:!0}));R.renderOrder=6,F.add(R)}return F}function Ou(){let n=new Pe({vertexColors:!0}),t=new Yt,e=new $t,i=4080992,s=2501178,r=15250234;e.box(0,0,0,.94,1.04,.84,i,{top:4936563}),e.box(0,0,0,.98,.06,.88,s),e.box(0,.98,0,.98,.06,.88,s);for(let l of[-1,1])e.box(l*.47,.06,0,.04,.92,.86,s);e.box(0,.12,.38,.74,.8,.05,987158,{faces:kt}),e.box(0,.14,.2,.66,.02,.3,2764350,{faces:ye}),e.box(0,.5,.2,.66,.02,.3,2764350,{faces:ye});for(let l=0;l<3;l++)e.box(-.18+l*.18,.16,.24,.16,.08,.1,r,{top:16769658,faces:63}),e.box(-.09+l*.18,.24,.24,.16,.08,.1,r,{top:16769658,faces:63});for(let l=0;l<4;l++)e.box(-.2+l*.13,.52,.24,.11,.07+l%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new Et(e.build(),n));let a=new $t;a.box(.37,.1,.035,.74,.84,.07,5857674,{faces:63}),a.box(.37,.16,.075,.62,.72,.02,4936563,{faces:63}),a.box(.37,.46,.09,.24,.24,.04,r,{faces:63}),a.box(.37,.5,.115,.16,.16,.03,2237487,{faces:63});for(let l=0;l<8;l++){let h=l*Math.PI/4;a.box(.37+Math.cos(h)*.105,.574+Math.sin(h)*.105,.1,.02,.02,.03,16773568,{faces:63})}for(let l of[0,2.1,4.2])a.box(.62+Math.cos(l)*.05,.45+Math.sin(l)*.05,.12,.03,.03,.1,14212842,{faces:63});a.box(.62,.45,.1,.06,.06,.06,14212842,{faces:63});for(let l of[.2,.8])a.box(.03,l,.04,.06,.12,.09,s,{faces:63});let o=new Et(a.build(),n);return o.position.set(-.37,0,.42),t.add(o),{group:t,door:o,mat:n}}function Fu(){let n=new $t,t=5981910,e=15905076,i=2371663;n.box(0,.25,0,2.7,1.05,1.3,t,{top:7166184}),n.box(1.15,.25,0,.6,.75,1.32,t),n.box(0,.55,0,2.72,.14,1.32,e,{faces:oi|Li|kt|Ge}),n.box(.95,.78,0,.4,.4,1.34,i,{faces:kt|Ge}),n.box(1.36,.78,0,.04,.4,1.1,i,{faces:oi}),n.box(-.3,.75,-.66,1.4,.42,.03,i,{faces:Ge}),n.box(0,1.3,0,1.6,.06,1,2763574),n.box(1.5,.22,0,.12,.12,1.34,2763574),n.box(1.52,.35,.42,.06,.16,.24,16774064,{faces:oi}),n.box(1.52,.35,-.42,.06,.16,.24,16774064,{faces:oi}),n.box(-1.37,.4,.45,.04,.18,.2,16731486,{faces:Li}),n.box(-1.37,.4,-.45,.04,.18,.2,16731486,{faces:Li});for(let a of[-.85,.85])for(let o of[-.6,.6])n.box(a,0,o,.5,.5,.22,1842728,{faces:63}),n.box(a,.15,o+Math.sign(o)*.1,.22,.22,.04,12107984,{faces:o>0?kt:Ge});let s=new Et(n.build(),new Pe({vertexColors:!0})),r=new Yt;return r.add(s),{group:r,body:s}}function zu(){let n=new $t,t=16054008,e=2237487,i=2371663;n.box(0,.22,0,2.5,.45,1.2,t,{top:16777215}),n.box(-.1,.67,0,1.3,.38,1.1,t),n.box(-.1,.72,0,1.32,.28,1.12,i,{faces:oi|Li|kt|Ge}),n.box(0,.3,0,2.52,.16,1.22,e,{faces:oi|Li|kt|Ge}),n.box(1.26,.32,.38,.03,.1,.22,16774064,{faces:oi}),n.box(1.26,.32,-.38,.03,.1,.22,16774064,{faces:oi});for(let l of[-.8,.8])for(let h of[-.56,.56])n.box(l,0,h,.46,.46,.2,1842728,{faces:63});let s=new Et(n.build(),new Pe({vertexColors:!0})),r=new Yt;r.add(s);let a=new Et(new de(.3,.12,.5),new Xt({color:16722490})),o=new Et(new de(.3,.12,.5),new Xt({color:2779903}));return a.position.set(-.1,1.11,.26),o.position.set(-.1,1.11,-.26),r.add(a,o),{group:r,red:a,blue:o}}function Bu(n){let t=new $t,e=1,i=1.55,s=.16;t.box(0,0,0,n?e:s,i,n?s:e,9082020,{faces:63,top:6976644});for(let o=0;o<6;o++)t.box(0,.08+o*.08,0,n?e+.004:s+.004,.04,n?s+.004:e+.004,o%2?2237487:15911244,{faces:51});t.box(0,.75,0,n?.3:s+.02,.3,n?s+.02:.3,3818066,{faces:63}),t.box(0,1.2,0,n?.5:s+.01,.08,n?s+.01:.5,5923956,{faces:63});let r=new Yt;r.add(new Et(t.build(),new Pe({vertexColors:!0})));let a=new Et(new de(n?.12:s+.04,.12,n?s+.04:.12),new Xt({color:16722490}));return a.position.y=.95,r.add(a),{group:r,led:a}}function Gu(){let n=new $t;n.box(0,0,0,.42,.56,.1,6976644,{faces:63,top:8029332}),n.box(0,.06,.051,.36,.44,.01,4870754,{faces:16}),n.box(-.08,.36,.06,.12,.12,.01,15911244,{faces:16}),n.box(-.08,.38,.065,.03,.08,.01,2237487,{faces:16});for(let r=0;r<3;r++)n.box(-.1+r*.1,.12,.065,.06,.12,.03,2237487,{faces:63});let t=new Yt;t.add(new Et(n.build(),new Pe({vertexColors:!0})));let e=new Yt,i=new $t;i.box(0,0,.04,.05,.2,.05,14168890,{faces:63}),i.box(0,.18,.04,.09,.06,.08,2237487,{faces:63}),e.add(new Et(i.build(),new Pe({vertexColors:!0}))),e.position.set(.12,.3,.06),t.add(e);let s=new Et(new de(.05,.05,.02),new Xt({color:16722490}));return s.position.set(.12,.5,.06),t.add(s),{group:t,lever:e,led:s}}function Hu(n){let t=n.map(d=>d[0]),e=n.map(d=>d[1]),i=new Set(e).size===1,s=Math.min(...t),r=Math.max(...t)+1,a=Math.min(...e),o=Math.max(...e)+1,l=i?r-s:o-a,h=(s+r)/2,c=(a+o)/2,f=new $t,u=new $t;for(let d of[.25,.55,.85,1.15])f.box(h,d,c,i?l:.025,.025,i?.025:l,16724032,{faces:63});for(let d of[-1,1]){let m=i?h+d*(l/2-.05):h,v=i?c:c+d*(l/2-.05);u.box(m,0,v,.1,1.3,.1,3817294,{faces:63,top:16724032});for(let b of[.25,.55,.85,1.15])u.box(m,b-.02,v,.12,.06,.12,16736368,{faces:63})}let p=new Xt({color:16724032,transparent:!0,opacity:.9,depthWrite:!1,blending:ri,toneMapped:!1}),g=new Et(f.build(),p);g.renderOrder=6;let _=new Yt;return _.add(g,new Et(u.build(),new Pe({vertexColors:!0}))),{group:_,mat:p,alongX:i,line:i?c:h,lo:i?s:a,hi:i?r:o}}function Vu(n){let t=new $t,e=9067068,i=wt(e,1.15),s=.98,r=.07,a=1.52,o=(h,c,f,u,p,g,_,d)=>n?t.box(h,c,f,u,p,g,_,d):t.box(f,c,h,g,p,u,_,d);o(s/2,0,0,s,a,r,e,{faces:63,top:wt(e,.8)});for(let h of[-1,1])for(let c of[.15,.85])o(s/2,c,h*.036,.62,.55,.01,i,{faces:n?h>0?16:32:h>0?1:2});for(let h of[-1,1])o(s-.14,.72,h*.05,.06,.06,.04,14267482,{faces:63}),o(s-.14,.62,h*.042,.05,.1,.02,3816006,{faces:63});let l=new Yt;return l.add(new Et(t.build(),new Pe({vertexColors:!0}))),{group:l,led:null}}function Wu(){let n=new $t;n.box(0,-.1,0,.34,.22,.03,3111656,{faces:63}),n.box(0,-.06,0,.35,.05,.035,15911244,{faces:63}),n.box(-.09,-.16,0,.1,.06,.036,16777215,{faces:63}),n.box(.12,0,0,.05,.05,.036,2237487,{faces:63});let t=new Et(n.build(),new Xt({vertexColors:!0})),e=new Yt;return e.add(t),e}function Xu(){let n=new $t;n.box(0,0,0,.32,.42,.06,15262422,{faces:63}),n.box(0,.24,.031,.22,.1,.01,2046511,{faces:16});for(let i=0;i<3;i++)for(let s=0;s<3;s++)n.box(-.07+s*.07,.04+i*.06,.035,.05,.04,.012,10134704,{faces:63});let t=new Yt;t.add(new Et(n.build(),new Pe({vertexColors:!0})));let e=new Et(new de(.05,.05,.02),new Xt({color:4054148}));return e.position.set(.11,.36,.035),t.add(e),{group:t,led:e}}function qu(){let n=new $t;for(let r=0;r<3;r++){let a=-.12+r*.075,o=(r-1)*.15;n.box(r*.015,a,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:o}),n.box(r*.015,a-.002,0,.09,.075,.245,15983520,{faces:63,ry:o})}let t=new $t;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new $t,i=new ir(.17,0);i.scale(1.15,1.2,1.15),e.add(i,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new $t;return s.box(0,-.34,0,.74,.7,.08,12618298,{faces:63}),s.box(0,-.29,0,.62,.6,.09,3098712,{faces:kt|Ge}),s.box(0,-.29,0,.62,.22,.095,4165530,{faces:kt|Ge}),s.box(.14,-.02,0,.16,.16,.1,15905076,{faces:kt|Ge}),s.box(-.12,-.14,0,.3,.12,.1,15230287,{faces:kt|Ge}),{cash:n.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var mc={},wr=(n,t)=>{if(!mc[n]){let e=new $t;t(e),mc[n]=e.build()}return mc[n]},Pt=63,$g={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},clerk:{skin:14264186,shirt:16052714,pants:3422282,shoe:2760216,belt:2237487,hat:3811874,vest:3422282},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function gc(n,t,e){for(let s of[-.11,.11])n.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),n.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),n.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),n.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:Pt,ry:s>0?-.15:.15});n.box(0,.03,.222+.01,.07,.09,.05,wt(t.skin,.88),{faces:Pt});for(let s of[-.255,.255])n.box(s,.08,0,.03,.1,.08,wt(t.skin,.92),{faces:Pt})}function Kg(n,t){return wr(n+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:Pt}),n==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:Pt});for(let i of[-.11,.11])e.box(i,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(i,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:Pt}),e.box(0,.22,0,.56,.06,.5,wt(t.hat,.8),{faces:Pt&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:Pt})}else if(n==="guard")gc(e,t,n),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:Pt}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:Pt}),e.box(0,.35,-.02,.5,.06,.44,wt(t.hat,1.15),{faces:Pt}),e.box(0,.2,.29,.5,.04,.2,wt(t.hat,.8),{faces:Pt}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16});else if(n==="clerk"){gc(e,t,n),e.box(0,-.12,.225,.12,.03,.02,10115658,{faces:16}),e.box(0,.2,-.02,.53,.14,.47,t.hat,{faces:Pt}),e.box(-.18,.12,.2,.18,.08,.1,t.hat,{faces:Pt}),e.box(0,.13,.226,.4,.035,.015,2237487,{faces:16});for(let i of[-.11,.11])e.box(i,.13,.232,.13,.12,.01,2237487,{faces:16})}else gc(e,t,n),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:Pt}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:Pt}),e.box(.14,.42,-.1,.18,.1,.18,wt(t.hat,1.1),{faces:Pt}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:Pt}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:Pt&-5&-9})})}function xc(n){let t=$g[n],e=new Pe({vertexColors:!0}),i=new Yt,s=new Yt;i.add(s);let r=[],a=(b,y,w=0,A=0,x=0)=>{let M=new Et(b,e);return M.position.set(w,A,x),y.add(M),r.push(M),M},o=wr(n+"leg",b=>{b.box(0,-.36,0,.18,.36,.21,t.pants,{faces:Pt}),b.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:Pt,top:wt(t.shoe,1.3)}),n==="owner"&&b.box(0,-.3,.06,.205,.04,.25,16777215,{faces:Pt}),n==="guard"&&b.box(0,-.12,0,.185,.02,.215,wt(t.pants,.8),{faces:Pt&-5&-9})}),l=wr(n+"torso",b=>{if(b.box(0,.34,0,.5,.45,.3,t.shirt,{faces:Pt}),n==="guard"){b.box(0,.4,0,.53,.38,.33,t.vest,{faces:Pt}),b.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),b.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:Pt}),b.box(.14,.62,.168,.12,.04,.02,16777215,{faces:Pt}),b.box(.16,.48,.17,.08,.12,.05,2237487,{faces:Pt}),b.box(.18,.6,.18,.015,.08,.015,2237487,{faces:Pt}),b.box(0,.33,0,.55,.08,.35,1777195,{faces:Pt}),b.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let y of[-.2,.2])b.box(y,.3,.1,.09,.1,.1,2763574,{faces:Pt})}else if(n==="player")b.box(0,.33,0,.52,.08,.32,t.belt,{faces:Pt}),b.box(0,.42,.155,.3,.14,.02,wt(t.shirt,.8),{faces:16}),b.box(0,.72,-.12,.42,.14,.12,wt(t.shirt,.85),{faces:Pt});else if(n==="clerk"){b.box(0,.33,0,.52,.06,.32,t.belt,{faces:Pt}),b.box(0,.42,.156,.07,.34,.015,11745617,{faces:16}),b.box(0,.73,.156,.1,.05,.016,11745617,{faces:16}),b.box(-.13,.62,.157,.12,.06,.01,15911244,{faces:16});for(let y of[-1,1])b.box(y*.07,.72,.155,.1,.07,.015,16777215,{faces:16,ry:y*.3})}else{for(let y=0;y<4;y++)b.box(0,.38+y*.1,0,.51,.035,.31,16777215,{faces:Pt&-5&-9});for(let y=0;y<3;y++)b.box(0,.42+y*.11,.155,.04,.04,.02,16777215,{faces:16});b.box(0,.74,.14,.3,.06,.04,wt(t.shirt,.85),{faces:Pt})}}),h=b=>wr(n+"arm"+b,y=>{y.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:Pt}),y.box(0,-.37,0,.14,.18,.16,n==="guard"?t.shirt:wt(t.shirt,.95),{faces:Pt}),y.box(0,-.48,0,.13,.11,.14,n==="player"?2763837:t.skin,{faces:Pt}),n==="guard"&&y.box(0,-.06,0,.16,.1,.18,t.vest,{faces:Pt}),n==="guard"&&b==="R"&&(y.box(0,-.66,.06,.07,.24,.07,2763574,{faces:Pt}),y.box(0,-.73,.06,.095,.08,.095,12831958,{faces:Pt}),y.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),c=new Yt;c.position.set(-.12,.36,0),s.add(c),a(o,c);let f=new Yt;f.position.set(.12,.36,0),s.add(f),a(o,f),a(l,s);let u=new Yt;u.position.set(-.33,.77,0),s.add(u),a(h("L"),u);let p=new Yt;p.position.set(.33,.77,0),s.add(p),a(h("R"),p);let g=new Yt;g.position.set(0,.84,0),s.add(g),a(Kg(n,t),g);let _=null,d=null;if(n==="player"&&(_=new Yt,_.position.set(0,.66,-.16),s.add(_),a(wr("bag",b=>{b.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:Pt}),b.box(0,.19,-.18,.14,.1,.14,10779973,{faces:Pt}),b.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),_)),n==="guard"){let b=new kn(.75,3.4,14,1,!0);b.translate(0,-1.7,0),d=new Et(b,new Xt({map:on().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:ri,side:Ie,fog:!1})),d.position.set(0,-.74,.06),d.renderOrder=6,p.add(d)}let m={player:.76,guard:.72,owner:.78,clerk:.74}[n],v={player:.88,guard:.8,owner:.86,clerk:.84}[n];return n!=="player"&&g.scale.set(.9/m,1,.92/v),d&&d.scale.set(1/m,1/v,1),{kind:n,root:i,body:s,legL:c,legR:f,armL:u,armR:p,head:g,bag:_,beam:d,mat:e,meshes:r,phase:0,sq:1,sqv:0,flash:0,wx:m,wz:v}}function yc(n,t,e,i){n.phase+=t*(5+9*e);let s=Math.sin(n.phase)*.8*e;n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armOverride||(n.armL.rotation.x=-s*.9,n.armR.rotation.x=n.beam?-1.35+Math.sin(n.phase*.5)*.06*e+Math.sin(i*1.3)*.03:s*.9),n.body.position.y=Math.abs(Math.sin(n.phase))*.07*e+(1-e)*Math.sin(i*2.2)*.012,n.head.rotation.y=n.beam?Math.sin(i*.9)*.15*(1-e):0,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let r=Math.max(.5,n.sq),a=1/Math.sqrt(r);if(n.body.scale.set(a*n.wx,r,a*n.wz),n.flash>0){n.flash-=t;let o=Math.max(0,n.flash)*6;n.mat.emissive.setRGB(o,o,o)}}function Ro(n,t,e,i,s){if(!t.light)return;let r=Math.max(0,Math.min(t.W-1,Math.floor(e))),o=(Math.max(0,Math.min(t.H-1,Math.floor(i)))*t.W+r)*3,l=1-Math.exp(-6*s),h=1.55,c=n.mat.color;c.r+=(Math.max(.82,Math.min(1.5,t.light[o]*h))-c.r)*l,c.g+=(Math.max(.78,Math.min(1.5,t.light[o+1]*h))-c.g)*l,c.b+=(Math.max(.78,Math.min(1.5,t.light[o+2]*h))-c.b)*l}var Di=(n,t)=>{n.sq=t,n.sqv=0};function Yu(){let n=new Pe({vertexColors:!0}),t=13208138,e=8014374,i=16181976,s=new Yt,r=new Yt;s.add(r);let a=(c,f,u=0,p=0,g=0)=>{let _=new $t;c(_);let d=new Et(_.build(),n);return d.position.set(u,p,g),f.add(d),d};a(c=>{c.box(0,.3,-.02,.32,.28,.66,t,{faces:Pt,top:wt(t,1.1)}),c.box(0,.3,.2,.28,.22,.2,i,{faces:Pt&-5}),c.box(0,.5,.26,.34,.06,.1,14168890,{faces:Pt}),c.box(0,.44,.32,.06,.07,.03,15911244,{faces:Pt}),c.box(0,.4,-.1,.33,.12,.3,e,{faces:7})},r);let o=new Yt;o.position.set(0,.58,.34),r.add(o),a(c=>{c.box(0,-.12,0,.3,.26,.28,t,{faces:Pt}),c.box(0,-.12,.2,.17,.13,.16,i,{faces:Pt}),c.box(0,-.05,.285,.07,.05,.03,1842470,{faces:Pt}),c.box(0,-.165,.26,.1,.03,.06,15233146,{faces:Pt});for(let f of[-1,1])c.box(f*.08,-.01,.141,.06,.06,.02,1842470,{faces:16}),c.box(f*.09,0,.151,.02,.02,.01,16777215,{faces:16}),c.box(f*.17,-.12,-.02,.06,.22,.14,e,{faces:Pt})},o);let l=[];for(let[c,f]of[[-.1,.2],[.1,.2],[-.1,-.24],[.1,-.24]]){let u=new Yt;u.position.set(c,.3,f),r.add(u),l.push(u),a(p=>{p.box(0,-.3,0,.09,.3,.1,t,{faces:Pt}),p.box(0,-.3,.015,.1,.05,.13,i,{faces:Pt})},u)}let h=new Yt;return h.position.set(0,.42,-.34),r.add(h),a(c=>c.box(0,0,-.1,.06,.06,.22,t,{faces:Pt}),h),h.rotation.x=.7,r.scale.setScalar(1.1),{root:s,body:r,head:o,legs:l,tail:h,mat:n,phase:0,sq:1,sqv:0}}function Zu(n,t,e,i,s){n.phase+=t*(6+12*e);let r=Math.sin(n.phase)*.7*e;n.legs[0].rotation.x=r,n.legs[3].rotation.x=r,n.legs[1].rotation.x=-r,n.legs[2].rotation.x=-r,n.tail.rotation.y=Math.sin(i*(s?26:12))*(s?.4:.7),n.body.position.y=Math.abs(Math.sin(n.phase))*.03*e,n.head.rotation.x=s?-.25+Math.sin(i*18)*.15:Math.sin(i*1.5)*.05,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let a=1.1*Math.max(.6,n.sq);n.body.scale.set(1.1/Math.sqrt(n.sq),a,1.1)}var li=n=>n?"ok":"pending",Jg=[{id:"art",text:"Steal the painting",bonus:600,needs:n=>n.totals.art>0,check:n=>li(n.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,needs:n=>n.totals.jewel>0,check:n=>li(n.got.jewel>=n.totals.jewel)},{id:"gold",text:"Grab every gold bar",bonus:500,needs:n=>n.totals.gold>0,check:n=>li(n.got.gold>=n.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:n=>li(n.got.cashLoose>=n.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,needs:n=>n.hides.length>0,check:n=>li(n.hidFromAlert)},{id:"nodog",text:"Don't get barked at",bonus:600,needs:n=>n.dogs.length>0,check:(n,t)=>n.barkedAt?"fail":t?"ok":"pending"},{id:"nolaser",text:"Never trip a laser",bonus:600,needs:n=>n.lasers.length>0,check:(n,t)=>n.lasersTripped>0?"fail":t?"ok":"pending"},{id:"power",text:"Cut the power",bonus:500,needs:n=>!!n.breaker,check:n=>li(n.powerOff)},{id:"clerk",text:"Stop a fleeing clerk",bonus:500,needs:n=>n.buttons.length>0,check:n=>li(n.clerkStopped)},{id:"smoke",text:"Break a guard's sight with smoke",bonus:500,check:n=>li(n.smokeHid)},{id:"cleanpick",text:"Pick a lock without a slip",bonus:500,needs:n=>n.doors.some(t=>t.type==="lock"),check:n=>li(n.cleanPick)},{id:"cases",text:"Smash every display case",bonus:900,needs:n=>n.cases.length>0,check:n=>li(n.casesSmashed>=n.cases.length)},{id:"radio",text:"Fake a radio check-in",bonus:500,check:n=>li(n.radioFaked>0)},{id:"nospot",text:"Never step into a spotlight",bonus:700,needs:n=>n.spots.length>0,check:(n,t)=>n.spotHit?"fail":t?"ok":"pending"},{id:"slot",text:"Distract guards with a slot machine",bonus:500,needs:n=>n.slots.length>0,check:n=>li(n.slotLures>0)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:n=>li(n.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:n=>li(n.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(n,t)=>n.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(n,t)=>n.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,needs:n=>n.guards.some(t=>t.kind==="owner"),check:(n,t)=>n.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(n,t)=>n.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(n,t)=>n.dashes>0?"fail":t?"ok":"pending"}];function $u(n=3,t=Math.random,e=null){let i=Jg.filter(r=>!e||!r.needs||r.needs(e)),s=[];for(;s.length<n&&i.length;){let r=i.splice(t()*i.length|0,1)[0];r.tag&&s.some(a=>a.tag===r.tag)||s.push({...r,st:"pending"})}return s}var Es={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,smoke:2,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,smoke:1,alarm:45,radio:2.6,mult:1,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,smoke:1,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},Xn=(n,t)=>t==="normal"?n:n+"_"+t;var _c=.3,vc=3.7,Ku=11,Ju=.18,jg=.8,bc=1.02,Qg=3.2,Rs=20,Cs={cone:16769357,sus:16752412,alert:16726862},Tr=new we,Po=new H,Si={x:0,y:0},qn={x:0,y:0},Io=(n,t,e)=>n+Be(Ne(n,t),-e,e),ju=Io,tx=new ms(.36,12).rotateX(-Math.PI/2),ex=new Xt({color:0,transparent:!0,opacity:.22,depthWrite:!1});function Qu(){let n=new xe,t=new Float32Array((Rs+2)*3),e=new Float32Array((Rs+2)*4);e.set([1,1,1,.3],0);for(let r=1;r<=Rs+1;r++)e.set([1,1,1,.05],r*4);let i=[];for(let r=1;r<=Rs;r++)i.push(0,r+1,r);n.setAttribute("position",new oe(t,3)),n.setAttribute("color",new oe(e,4)),n.setIndex(i);let s=new Et(n,new Xt({color:Cs.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie}));return s.frustumCulled=!1,s.renderOrder=3,s}function ix(){let n=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new xe;t.setAttribute("position",new oe(new Float32Array(n),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new Et(t,new Xt({color:16765503,side:Ie,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function nx(){let n=new Yt,t=new de(.13,.13,.13),e=new Xt({color:16765503});for(let i=0;i<3;i++){let s=new Et(t,e);n.add(s)}return n.visible=!1,n}var Lo=class{constructor(t){this.app=t,this.root=new Yt,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){this.root.clear();for(let u of this.guards||[])u.badge.remove();this.def=t;let e=this.L=Du(t);this.root.add(ku(e)),this.safe=Ou(),this.prev=null,this.safe.group.position.set(e.safe.x+.5,0,e.safe.y+.5),this.safeScale=t.safeScale||1,this.safe.group.scale.setScalar(this.safeScale);let i=(u,p)=>e.ch[p*e.W+u]==="#";if(this.doors=e.doors.map(u=>{let p=i(u.x-1,u.y)&&i(u.x+1,u.y),g=u.type==="lock"?Vu(p):Bu(p);return u.type==="lock"?g.group.position.set(p?u.x+.01:u.x+.5,0,p?u.y+.5:u.y+.01):g.group.position.set(u.x+.5,0,u.y+.5),u.alongX=p,this.root.add(g.group),{...u,m:g,open:!1,t:0}}),this.lasers=(t.lasers||[]).map(u=>{let p=Hu(u.cells);return this.root.add(p.group),{def:u,...p,on:!0}}),this.breaker=null,t.breaker){let u=t.breaker,p=Gu();p.group.position.set(u.x+.5+u.dx*.53,.75,u.y+.5+u.dy*.53),p.group.rotation.y=Math.atan2(u.dx,u.dy),this.root.add(p.group),this.breaker={...p,at:{x:u.x+.5+u.dx*1.15,z:u.y+.5+u.dy*1.15}}}if(this.keyMeshes=e.keys.map(u=>{let p=Wu();return p.position.set(u.x+.5,.8,u.y+.5),this.root.add(p),{...u,m:p}}),this.root.add(this.safe.group),this.police=zu(),this.police.group.visible=!1,this.root.add(this.police.group),this.panel=null,t.panel){let u=t.panel;this.panel=Xu(),this.panel.group.position.set(u.x+.5+u.dx*.53,.85,u.y+.5+u.dy*.53),this.panel.group.rotation.y=Math.atan2(u.dx,u.dy),this.panel.at={x:u.x+.5+u.dx*1.1,z:u.y+.5+u.dy*1.1},this.root.add(this.panel.group)}this.van=Fu(),this.root.add(this.van.group);let s=qu(),r=Uu();this.lootMeshes={};let a={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let u of e.loot)a[u.type]++;for(let u in s){let p=new Un(s[u],r,Math.max(1,a[u]));p.frustumCulled=!1,p.count=0,this.lootMeshes[u]=p,this.root.add(p)}let o=xc("player");o.root.rotation.order="YXZ",this.root.add(o.root),this.player={c:o,shadow:this.addShadow()},this.guards=[];let l=(u,p)=>{let g=xc(u);g.root.rotation.order="YXZ",this.root.add(g.root);let _=Qu();this.root.add(_);let d=nx();this.root.add(d);let m=document.createElement("div");m.className="badge",m.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(m);let v={kind:u,def:p,c:g,cone:_,stars:d,badge:m,shadow:this.addShadow()};return this.guards.push(v),v};for(let u of t.guards)l("guard",u);this.buttons=[];for(let u of t.clerks||[]){let p=l("clerk",u),g=u.button,_=new Et(new de(.2,.26,.06),new Xt({color:14212582})),d=new Et(new de(.11,.11,.05),new Xt({color:16722490}));d.position.z=.04,_.add(d),_.position.set(g.x+.5+g.dx*.53,1.05,g.y+.5+g.dy*.53),_.rotation.y=Math.atan2(-g.dx,-g.dy),this.root.add(_),p.button={x:g.x+.5+g.dx*.15,z:g.y+.5+g.dy*.15,btn:d},this.buttons.push(p.button)}if(t.owner){let u=t.owner;l("owner",{path:u.patrol,wait:1.2,speed:u.speed,loop:!0,owner:u})}this.dogs=(t.dogs||[]).map(u=>{let p=Yu();return this.root.add(p.root),{def:u,m:p,shadow:this.addShadow()}}),this.cams=(t.cameras||[]).map(u=>{let p=Qu();this.root.add(p);let g=new Et(new de(.22,.18,.36),new Xt({color:2961744})),_=new Et(new de(.12,.1,.06),new Xt({color:16726862}));return _.position.z=.2,g.add(_),g.position.set(u.pos[0],1.3,u.pos[1]),this.root.add(g),{def:u,cone:p,mesh:g,lens:_}}),this.exitRing=new Et(new xs(.62,.9,28).rotateX(-Math.PI/2),new Xt({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new Et(new gs(.85,.85,2.4,20,1,!0),new Xt({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:Ie})),this.exitRing.position.set(e.exit.x,.03,e.exit.z),this.exitBeam.position.set(e.exit.x,1.2,e.exit.z),this.root.add(this.exitRing,this.exitBeam);let h=new de(.11,.025,.11);this.coinMeshes=[];for(let u=0;u<4;u++){let p=new Et(h,new Xt({color:16762938}));p.visible=!1,this.root.add(p),this.coinMeshes.push(p)}this.hides=e.furn.filter(u=>u.type==="wardrobe").map(u=>{let p=u.x0+.5,g=u.y0+.5;for(let[_,d]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(u.x0+_,u.y0+d))return{cx:p,cz:g,ex:p+_*.95,ez:g+d*.95,face:Math.atan2(_,d)};return null}).filter(Boolean),this.smokeFx=[];for(let u=0;u<2;u++){let g=new xe;g.setAttribute("position",new oe(new Float32Array(138),3));let _=new en(g,new zi({map:on().glow,size:1.5,color:14275810,transparent:!0,opacity:0,depthWrite:!1}));_.frustumCulled=!1,_.renderOrder=8,_.visible=!1;let d=new Float32Array(184);for(let m=0;m<46;m++){let v=Math.random()*6.28,b=Math.sqrt(Math.random());d.set([Math.cos(v)*b,Math.random(),Math.sin(v)*b,Math.random()*6.28],m*4)}this.root.add(_),this.smokeFx.push({pts:_,geo:g,off:d,N:46})}this.arrow=ix(),this.root.add(this.arrow),this.noiseRings=[];let c=new xs(.9,1,32).rotateX(-Math.PI/2);for(let u=0;u<4;u++){let p=new Et(c,new Xt({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));p.visible=!1,p.renderOrder=4,this.root.add(p),this.noiseRings.push({m:p,t:1,r:1})}let f=t.values;this.cases=e.furn.filter(u=>u.type==="case").map(u=>{let p=u.x0+u.w/2,g=u.y0+u.d/2,_=new Et(new de(u.w-.12,.46,u.d-.12),new Xt({color:12576511,transparent:!0,opacity:.28,depthWrite:!1}));_.position.set(p,1.05,g),_.renderOrder=5;let d=new Yt,m=[5037311,16732026,8191898,16766810,13073919];for(let v=0;v<5;v++){let b=new Et(new de(.09,.09,.09),new Xt({color:m[(v+u.x0)%5]}));b.position.set(p+(v%3-1)*(u.w*.25),.88,g+((v/3|0)-.5)*(u.d*.3)),b.rotation.set(.6,v,.6),d.add(b)}return this.root.add(_,d),{f:u,cx:p,cz:g,glass:_,gems:d,smashed:!1,prog:0}}),this.caseLoot=t.caseLoot||0,this.slots=e.furn.filter(u=>u.type==="slots").map(u=>{let p=u.x0+u.w/2,g=u.y0+u.d/2,_=u.y0<e.H/2?1:-1,d=new Et(new de(u.w-.2,.08,.08),new Xt({color:16766810,toneMapped:!1}));return d.position.set(p,1.52,g+_*.15),d.visible=!1,this.root.add(d),{f:u,cx:p,cz:g,face:_,top:d,used:!1,prog:0,t:0}}),this.spots=(t.spots||[]).map(u=>{let p=new Et(new ms(u.r,28).rotateX(-Math.PI/2),new Xt({map:on().glow,color:16773296,transparent:!0,opacity:.85,depthWrite:!1,blending:ri,toneMapped:!1}));p.renderOrder=4;let g=new Et(new kn(u.r*.95,He,20,1,!0),new Xt({color:16773296,transparent:!0,opacity:.09,depthWrite:!1,blending:ri,side:Ie,toneMapped:!1}));g.rotation.x=Math.PI,g.renderOrder=5;let _=new Et(new de(.3,.16,.3),new Xt({color:2763574})),d=new Et(new de(.2,.02,.2),new Xt({color:16774864}));d.position.y=-.09,_.add(d),this.root.add(p,g,_);let[m,v]=u.path;return{def:u,pool:p,cone:g,fix:_,ax:m[0]+.5,az:m[1]+.5,bx:v[0]+.5,bz:v[1]+.5,len:Math.hypot(v[0]-m[0],v[1]-m[1]),susp:0,cool:0,x:0,z:0,tickT:0}}),this.policeLane=e.van?{x:e.exit.x,z:e.exit.z+2.5}:{x:e.start.x+.5,z:e.start.y+1.5},this.baseLootTotal=f.stash+f.bundle*f.bundles+e.loot.reduce((u,p)=>u+f[p.type],0)+this.cases.length*this.caseLoot*f.jewel+this.slots.length*f.cash,this.lootTotal=this.baseLootTotal,this.reset()}addShadow(){let t=new Et(tx,ex);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasKey=!1,this.objText="",this.crackNoiseT=0;for(let s of this.buttons||[])s.btn.material.color.setHex(16722490);this.powerOff=!1,this.breakProg=0,this.lasersTripped=0,this.breaker&&(this.breaker.lever.rotation.x=0,this.breaker.led.material.color.setHex(16722490));for(let s of this.lasers||[])s.group.visible=!0;this.spotHit=!1;for(let s of this.spots||[])s.susp=0,s.cool=0,s.pool.visible=s.cone.visible=!0;for(let s of this.doors||[]){let r=s.y*this.L.W+s.x;s.open=!1,s.t=0,this.L.walk[r]=0,this.L.opaque[r]=1,s.m.group.position.y=0,s.m.group.rotation.y=0,s.m.group.visible=!0,s.m.led&&s.m.led.material.color.setHex(16722490),this.picking=null,this.cleanPick=!1,this.app.onPick&&this.app.onPick(null)}for(let s of this.keyMeshes||[])s.m.visible=!0;this.app.onKey&&this.app.onKey(!1),this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.daily=this.app.mode==="daily"?this.app.daily:null,this.tut=this.app.mode==="tutorial",this.D=this.daily||this.tut?Es.normal:Es[this.app.diff]||Es.normal,this.lookTotal=0,this.lootTotal=this.baseLootTotal,this.smokesLeft=this.D.smoke,this.clouds=[],this.smokeHid=!1;for(let s of this.smokeFx||[])s.pts.visible=!1;this.coinsLeft=this.D.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.clerkStopped=!1,this.hidesUsed=0,this.smokesUsed=0,this.coinsThrown=0,this.radioFaked=0,this.trail=[],this.trailT=0,this.marks=[],this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let s of this.L.loot)this.totals[s.type]++;this.contracts=this.tut?[]:$u(3,this.daily?wn(this.daily.seed):Math.random,this),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let s of this.coinMeshes||[])s.visible=!1;let i=this.player;Object.assign(i,{x:t.start.x+.5,z:t.start.y+.5,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),i.c.root.visible=!0,i.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let s of this.guards||[])s.knowsHide=!1;Di(i.c,1);for(let s of this.guards)this.resetGuard(s);this.crumbs=[],this.crumbT=0,this.barkedAt=!1;for(let s of this.dogs){let r=s.def.path[0];Object.assign(s,{x:r[0]+.5,z:r[1]+.5,wp:1%s.def.path.length,state:"roam",t:0,barkT:0,sniffT:0,ci:0,lostT:0,nav:[],navGoal:-1,navT:0,face:0,moving:0,tx:0,tz:0,waitT:0,smellT:0,mul:1})}for(let s of this.cams)Object.assign(s,{susp:0,cool:0,face:s.def.face});this.loot=t.loot.map((s,r)=>({type:s.type,x:s.x+.5,y:.45,z:s.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[s.type],ph:r*1.7,ms:0,s:1,rot:r})),this.safe.door.rotation.y=0,this.van.group.visible=!!t.van,t.van&&this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.casesSmashed=0,this.slotLures=0;for(let s of this.slots||[])s.used=!1,s.prog=0,s.t=0,s.top.visible=!1;for(let s of this.cases||[])s.smashed=!1,s.prog=0,s.glass.visible=!0,s.gems.visible=!0;this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let s of this.noiseRings)s.m.visible=!1,s.t=1;if(this.app.particles.clear(),this.app.floaters.clear(),this.daily&&this.daily.mutator.apply(this),this.tut)for(let s of this.guards)s.range*=.85,s.speed*=.9}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1,sawCase:!1,...t.kind==="clerk"?{range:4.6*this.D.range,fov:1.5}:{}}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let i=e.owner.bed;t.x=i[0]+i[2]/2,t.z=i[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let i=e.path[t.wp];t.face=Math.atan2(i[0]+.5-t.x,i[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let i=this.L;return t>=0&&e>=0&&t<i.W&&e<i.H&&i.walk[e*i.W+t]===1}opaqueAt(t,e){let i=this.L;return t<0||e<0||t>=i.W||e>=i.H||i.opaque[e*i.W+t]===1}rayLen(t,e,i,s){let r=Math.sin(i),a=Math.cos(i);for(let o=.1;o<s;o+=.1)if(this.opaqueAt(Math.floor(t+r*o),Math.floor(e+a*o)))return o-.05;return s}los(t,e,i,s){let r=i-t,a=s-e,o=Math.ceil(Math.hypot(r,a)/.12);for(let l=1;l<o;l++){let h=l/o;if(this.opaqueAt(Math.floor(t+r*h),Math.floor(e+a*h)))return!1}return!0}clearLine(t,e,i,s){let r=i-t,a=s-e,o=Math.hypot(r,a);if(o<.01)return!0;let l=-a/o*.28,h=r/o*.28,c=Math.ceil(o/.25);for(let f=1;f<=c;f++){let u=f/c,p=t+r*u,g=e+a*u;if(!this.walkable(Math.floor(p),Math.floor(g))||!this.walkable(Math.floor(p+l),Math.floor(g+h))||!this.walkable(Math.floor(p-l),Math.floor(g-h)))return!1}return!0}collide(t,e){let i=Math.floor(t.x),s=Math.floor(t.z);for(let r=s-1;r<=s+1;r++)for(let a=i-1;a<=i+1;a++){if(this.walkable(a,r))continue;let o=Be(t.x,a,a+1),l=Be(t.z,r,r+1),h=t.x-o,c=t.z-l,f=h*h+c*c;if(!(f>=e*e))if(f>1e-9){let u=Math.sqrt(f);t.x+=h/u*(e-u),t.z+=c/u*(e-u)}else{let u=t.x-a,p=a+1-t.x,g=t.z-r,_=r+1-t.z,d=Math.min(u,p,g,_);d===u?t.x=a-e:d===p?t.x=a+1+e:d===g?t.z=r-e:t.z=r+1+e}}}moveEnt(t,e,i,s){let r=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(i))/.15));for(let a=0;a<r;a++)t.x+=e/r,t.z+=i/r,this.collide(t,s)}path(t,e,i,s){let{W:r,H:a,walk:o}=this.L,l=r*a;this.prev||(this.prev=new Int32Array(l),this.q=new Int32Array(l));let h=this.prev,c=this.q;if(i<0||s<0||i>=r||s>=a)return[];h.fill(-1);let f=e*r+t,u=s*r+i,p=0,g=0;for(c[g++]=f,h[f]=f;p<g;){let d=c[p++];if(d===u)break;let m=d%r,v=d/r|0;for(let b=-1;b<=1;b++)for(let y=-1;y<=1;y++){if(!y&&!b)continue;let w=m+y,A=v+b;if(w<0||A<0||w>=r||A>=a)continue;let x=A*r+w;!o[x]||h[x]!==-1||y&&b&&(!o[v*r+w]||!o[A*r+m])||(h[x]=d,c[g++]=x)}}if(h[u]===-1)return[];let _=[];for(let d=u;d!==f;d=h[d])_.push(d);return _.reverse()}navTo(t,e,i,s,r){let a=this.L.W,o=Math.floor(i)*a+Math.floor(e);(o!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(i)),t.navGoal=o,t.navT=.5),t.navT-=r;let l=t.nav,h=e,c=i;if(l.length>1){let d=Math.min(l.length-1,6),m=0;for(let v=d;v>=1;v--){let b=l[v]%a+.5,y=(l[v]/a|0)+.5;if(this.clearLine(t.x,t.z,v===l.length-1?e:b,v===l.length-1?i:y)){m=v;break}}m===l.length-1?(h=e,c=i):(h=l[m]%a+.5,c=(l[m]/a|0)+.5),m>0?l.splice(0,m):Math.hypot(h-t.x,c-t.z)<.3&&l.shift()}let f=h-t.x,u=c-t.z,p=Math.hypot(f,u);if(Math.hypot(e-t.x,i-t.z)<.12)return!0;let _=Math.min(p,s*r);return p>.001&&(this.moveEnt(t,f/p*_,u/p*_,.28),t.face=Io(t.face,Math.atan2(f,u),8*r)),t.moving=1,!1}update(t,e){let i=t;this.hitstop>0&&(this.hitstop-=t,i*=.08),this.t+=i;let s=!e&&this.state==="play";if(s){if(this.time+=i,this.updatePlayer(i),this.trailT-=i,this.trailT<=0){this.trailT=.35;let o=this.alarm||this.guards.some(l=>l.state==="alert"||l.state==="flee"||l.susp>.35);this.trail.push([this.player.x,this.player.z,o?1:0]),this.trail.length>900&&this.trail.splice(0,2)}}else e&&(this.player.c.root.visible=!1);let r=0;for(let o of this.guards)o.moving=0,this.updateGuard(o,i,s),(o.state==="alert"||o.state==="flee")&&r++,this.syncGuard(o,i);for(let o of this.cams)this.updateCam(o,i,s);for(let o of this.dogs)this.updateDog(o,i,s);let a=0;for(let o of this.guards)(o.susp>.3||o.state==="investigate"||o.state==="search")&&a++;this.tension=this.alarm?3:r>0?2:a>0?1:0,this.updateAlarm(i,s),this.updateLasers(i,s),this.updateSpots(i,s),this.updateSlots(i),this.updateLoot(i,s),this.updateProps(i),e||this.syncPlayer(i),this.updateNoiseRings(i),this.updateCoins(i,s),this.updateSmoke(i),this.state==="escape"&&this.updateEscape(i),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,i=this.app,s=i.input;s.move(Si),s.consumeLook(qn);let r=i.sens||.0024;if(e.lookX=qn.x,e.lookY=qn.y,e.yaw-=qn.x*r,this.lookTotal+=Math.abs(qn.x*r)+Math.abs(qn.y*r),e.pitch=Be(e.pitch-qn.y*r,-1.25,1.2),e.face=e.yaw+Math.PI,e.hiding){this.updateHiding(t,s);return}if(this.picking){this.updatePicking(t,s);return}let a=Math.sin(e.face),o=Math.cos(e.face),l=-o,h=a,c=l*Si.x-a*Si.y,f=h*Si.x-o*Si.y;e.strafe=Si.x;let u=this.lootGot/this.lootTotal,p=vc*(1-.1*u);if(e.vx=ti(e.vx,c*p,14,t),e.vz=ti(e.vz,f*p,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let I=c,k=f;Math.abs(I)+Math.abs(k)<.01&&(I=a,k=o);let V=Math.hypot(I,k);I/=V,k/=V,e.dashT=Ju,e.dashCd=jg,e.ddx=I,e.ddz=k,this.dashes++,i.audio.play("dash"),i.shake.add(.18),Di(e.c,.7),i.particles.burst(e.x,.1,e.z,{count:8,colors:[16777215,14673646],speed:2,up:1.5,size:.16,gravity:2,life:.5}),this.makeNoise(e.x,e.z,4.2,null),i.hintDone("dash")}let g=e.vx,_=e.vz;if(e.dashT>0){e.dashT-=t;let I=Math.max(0,e.dashT/Ju);g+=e.ddx*Ku*I,_+=e.ddz*Ku*I,Math.random()<.6&&i.particles.burst(e.x,.15,e.z,{count:1,colors:[16777215],speed:.5,up:.5,size:.12,gravity:0,life:.35})}this.moveEnt(e,g*t,_*t,_c),this.crumbT-=t,this.crumbT<=0&&Math.hypot(e.vx,e.vz)>.5&&(this.crumbT=.4,this.crumbs.push({x:e.x,z:e.z,t:this.time}),this.crumbs.length>60&&this.crumbs.shift());for(let I of this.dogs){let k=e.x-I.x,V=e.z-I.z,J=Math.hypot(k,V);J<.5&&J>.001&&(e.x+=k/J*(.5-J),e.z+=V/J*(.5-J),this.collide(e,_c))}for(let I of this.guards){if(I.state==="sleep")continue;let k=e.x-I.x,V=e.z-I.z,J=Math.hypot(k,V);J<.55&&J>.001&&(e.x+=k/J*(.55-J),e.z+=V/J*(.55-J),this.collide(e,_c))}let d=Math.hypot(g,_);e.moving=Math.min(1,d/vc);let m=Math.floor(e.bob/Math.PI);if(e.bob+=Math.min(d,vc)*t*2.6,Math.floor(e.bob/Math.PI)!==m){let I=this.L,k=Be(Math.floor(e.x),0,I.W-1),V=Be(Math.floor(e.z),0,I.H-1);i.audio.stepSound(I.floor[V*I.W+k],e.dashT>0?1.6:1)}d>.5&&i.hintDone("move");let v=this.L.safe.x+.5,b=this.L.safe.y+.5,y=!this.safeOpen&&Math.hypot(e.x-v,e.z-b)<1.45+(this.safeScale-1)*.8&&Math.abs(Ne(e.face,Math.atan2(v-e.x,b-e.z)))<1.1,w=null,A=9;for(let I of this.guards){if(!this.canKO(I))continue;let k=Math.hypot(e.x-I.x,e.z-I.z);if(!(e.dashT<=0&&Math.abs(Ne(e.face,Math.atan2(I.x-e.x,I.z-e.z)))>.9)&&(k<A&&(A=k,w=I),e.dashT>0&&k<.95)){this.knockout(I),w=null;break}}let x=s.consumeAct();e.crack=!1;for(let I of this.keyMeshes)I.m.visible&&(I.m.rotation.y=this.t*2,I.m.position.y=.8+Math.sin(this.t*3)*.06,Math.hypot(e.x-(I.x+.5),e.z-(I.y+.5))<.85&&(I.m.visible=!1,this.hasKey=!0,i.audio.play("gold"),i.onKey(!0),i.hint("door"),i.floaters.spawn("KEYCARD!",I.x+.5,1.3,I.y+.5,"big",1.2),i.particles.burst(I.x+.5,.8,I.y+.5,{count:12,colors:[3111656,16777215,15911244],speed:2,up:2,size:.04,life:.6})));let M=null;for(let I of this.doors){if(I.open)continue;let k=I.x+.5,V=I.y+.5;Math.hypot(e.x-k,e.z-V)<1.5&&Math.abs(Ne(e.face,Math.atan2(k-e.x,V-e.z)))<1&&(M=I)}let D=null;for(let I of this.slots){if(I.used)continue;let k=I.cz+I.face*.9;Math.abs(e.z-k)<.9&&Math.abs(e.x-I.cx)<I.f.w/2+.3&&(D=I)}for(let I of this.slots)I!==D&&(I.prog=Math.max(0,I.prog-t*2));D&&(i.hint("slot"),s.act&&(D.prog+=t/.5,e.crack=!0,D.prog>=1&&this.pullSlot(D)));let P=null;for(let I of this.cases){if(I.smashed)continue;Math.hypot(e.x-I.cx,e.z-I.cz)<1.3+Math.max(I.f.w,I.f.d)*.35&&Math.abs(Ne(e.face,Math.atan2(I.cx-e.x,I.cz-e.z)))<1&&(P=I)}for(let I of this.cases)I!==P&&(I.prog=Math.max(0,I.prog-t*2));P&&(i.hint("case"),s.act&&(P.prog+=t/.55,e.crack=!0,P.prog>=1&&this.smashCase(P)));let O=!1;if(this.breaker&&!this.powerOff){let I=this.breaker.at,k=this.breaker.group.position;O=Math.hypot(e.x-I.x,e.z-I.z)<1&&Math.abs(Ne(e.face,Math.atan2(k.x-e.x,k.z-e.z)))<1,O&&s.act?(this.breakProg+=t/1.2,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.15,i.audio.play("tick",this.breakProg*.5),i.particles.burst(k.x,k.y+.3,k.z,{count:2,colors:[16773544,8378623],speed:2,up:1.5,size:.03,life:.3})),this.breakProg>=1&&this.cutPower()):this.breakProg=Math.max(0,this.breakProg-t)}let F=!1,G=this.nearHide();if(this.alarm&&this.panel){let I=this.panel.at,k=this.panel.group.position;F=Math.hypot(e.x-I.x,e.z-I.z)<1&&Math.abs(Ne(e.face,Math.atan2(k.x-e.x,k.z-e.z)))<1,F&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,i.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}if(y?(i.hint("safe"),s.act?(this.safeProg+=t/(this.def.crackTime||1.4),this.def.crackNoise&&(this.crackNoiseT-=t,this.crackNoiseT<=0&&(this.crackNoiseT=1.1,this.makeNoise(v,b,this.def.crackNoise,null),i.hint("drill"))),this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,i.audio.play("tick",this.safeProg),i.particles.burst(v,.7,b+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t),w&&(i.hint("ko"),x&&!y&&this.knockout(w)),D&&!y&&!w){i.setPrompt("slot",D.prog),this.updateObjective();return}if(P&&!y&&!w){i.setPrompt("case",P.prog),this.updateObjective();return}let L=null;for(let I of this.guards){if(I.state!=="ko"||I.radioCall!==1){I.answerProg=0;continue}Math.hypot(e.x-I.x,e.z-I.z)<1.6&&(L=I)}if(L&&!y){s.act?(L.answerProg+=t/.7,e.crack=!0,L.answerProg>=1&&this.fakeCheckIn(L)):L.answerProg=Math.max(0,L.answerProg-t),i.setPrompt("radio",L.answerProg),this.updateObjective();return}if(M&&!y&&!w&&M.type==="lock"){i.hint("pick"),x?this.startPick(M):i.setPrompt("pick"),this.updateObjective();return}if(M&&!y&&!w){x&&(this.hasKey?this.openDoor(M):this.nopeT<=0&&(this.nopeT=1.5,i.audio.play("nope"),i.floaters.spawn("Need the keycard!",M.x+.5,1.3,M.y+.5,"warn",1.2),i.hint("key"))),i.setPrompt(this.hasKey?"door":"locked"),this.updateObjective();return}if(O&&!y&&!w){i.setPrompt("breaker",this.breakProg),this.updateObjective();return}let E=G&&!F&&!y&&!w;if(E&&(i.hint("hide"),x)){this.enterHide(G);return}i.setPrompt(F?"panel":y?"safe":w?"ko":E?"hide":"",F?this.disarmProg:this.safeProg);let R=this.L.exit,N=Math.hypot(e.x-R.x,e.z-R.z);this.nopeT-=t,N<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,i.audio.play("nope"),i.floaters.spawn("Crack the safe first!",e.x+a*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),s.consumeSmoke()&&this.dropSmoke(),this.checkContracts(!1),this.updateObjective(),this.time>3.5&&i.hint("dash");for(let I of this.guards){let k=Math.hypot(e.x-I.x,e.z-I.z);I.state==="sleep"&&k<6&&i.hint("owner");for(let V of this.dogs)Math.hypot(e.x-V.x,e.z-V.z)<7&&i.hint("dog");if(this.powerOff)I.state!=="sleep"&&k<6.5&&(i.hint("cone"),this.time>8&&i.hint("coin"));else for(let V of this.lasers){let J=V.alongX?e.x:e.z,lt=V.alongX?e.z:e.x;J>V.lo-1&&J<V.hi+1&&Math.abs(lt-V.line)<3.5&&i.hint("laser")}}for(let I of this.loot)if(Math.hypot(e.x-I.x,e.z-I.z)<4){i.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,i=e.x-t.x,s=e.z-t.z;return Math.hypot(i,s)>1.35||Math.abs(Ne(t.face,Math.atan2(i,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}mark(t,e,i){this.marks.push({t,x:e,z:i})}knockout(t){this.mark("ko",t.x,t.z);let e=this.app,i=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.kind==="clerk"&&t.state==="flee"&&(this.clerkStopped=!0,this.app.floaters.spawn("ALARM STOPPED",t.x,2.2,t.z,"big",1.2)),t.state="ko",t.koT=9,t.susp=0,t.fallT=0,t.radioCall=0,t.answerProg=0,t.callT=0,t.c.flash=.2,Di(t.c,.6),this.kos++,this.hitstop=.08,e.shake.add(.35),i.punchT=.28,Di(i.c,1.25),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,i=1.25;for(let s of this.hides){let r=Math.hypot(t.x-s.cx,t.z-s.cz);r<i&&Math.abs(Ne(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(i=r,e=s)}return e}enterHide(t){this.hidesUsed++;let e=this.player,i=this.app,s=!1,r=0;for(let a of this.guards)(a.state==="alert"||a.state==="flee")&&r++,a.state!=="ko"&&a.state!=="sleep"&&a.state!=="getup"&&this.canSee(a)&&(s=!0,a.knowsHide=!0,a.state!=="alert"&&this.alert(a),i.floaters.spawn("I saw that!",a.x,2,a.z,"alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,r>0&&!s){this.hidFromAlert=!0;for(let a of this.guards)a.state==="alert"&&(a.lostT=99)}i.audio.play("creak"),i.onHide(!0),i.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let i=e.hiding;e.hiding=null,e.x=i.ex,e.z=i.ez,e.yaw=i.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let i=this.player,s=i.hiding,r=this.app;i.hideT+=t;let a=s.face-Math.PI;i.yaw=a+Be(Ne(a,i.yaw),-1,1),i.pitch=Be(i.pitch,-.5,.4),i.moving=0,i.crack=!1,e.consumeDash(),e.consumeThrow();let o=9;for(let l of this.guards)l.state!=="ko"&&l.state!=="sleep"&&(o=Math.min(o,Math.hypot(l.x-s.cx,l.z-s.cz)));i.beatT-=t,o<4.5&&i.beatT<=0&&(i.beatT=.45+o*.12,r.audio.play("beat"),r.shake.add(.04)),e.move(Si),r.setPrompt("leave"),i.hideT>.35&&(e.consumeAct()||Math.hypot(Si.x,Si.y)>.5)&&this.leaveHide(!1)}dropSmoke(){let t=this.player,e=this.app;if(this.smokesLeft<=0){e.audio.play("nope");return}if(this.clouds.length>=this.smokeFx.length)return;this.smokesLeft--,this.smokesUsed++;let i=t.x+Math.sin(t.face)*.7,s=t.z+Math.cos(t.face)*.7;this.walkable(Math.floor(i),Math.floor(s))||(i=t.x,s=t.z);let r=this.smokeFx.find(a=>!a.pts.visible);r.pts.visible=!0,this.clouds.push({x:i,z:s,t:0,dur:7.5,r:0,fx:r}),e.audio.play("smoke"),e.shake.add(.12),e.particles.burst(i,.2,s,{count:14,colors:[16777215,14275810,12104390],speed:3,up:2,size:.12,life:.7,gravity:1}),e.onSmoke(this.smokesLeft),e.hintDone("smoke")}smokeBlocks(t,e,i,s){for(let r of this.clouds){let a=r.r*.9;if(a<.3)continue;if(Math.hypot(i-r.x,s-r.z)<a||Math.hypot(t-r.x,e-r.z)<a)return!0;let o=i-t,l=s-e,h=o*o+l*l||1,c=Be(((r.x-t)*o+(r.z-e)*l)/h,0,1);if(Math.hypot(t+o*c-r.x,e+l*c-r.z)<a)return!0}return!1}inSmoke(t,e){return this.clouds.some(i=>Math.hypot(t-i.x,e-i.z)<i.r*.85)}updateSmoke(t){for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];i.t+=t;let s=Math.min(1,i.t/.6),r=Be((i.dur-i.t)/1.6,0,1);i.r=2.1*(1-Math.pow(1-s,3))*(.75+.25*r);let a=i.fx,o=a.geo.attributes.position.array;for(let l=0;l<a.N;l++){let h=l*4,c=Math.sin(i.t*.8+a.off[h+3])*.15;o[l*3]=i.x+a.off[h]*i.r+c,o[l*3+1]=.2+a.off[h+1]*1.5*s+i.t*.04,o[l*3+2]=i.z+a.off[h+2]*i.r+c}a.geo.attributes.position.needsUpdate=!0,a.pts.material.opacity=.55*r*s,a.pts.material.size=1.2+s*.6;for(let l of this.guards)l.coughT>0&&(l.coughT-=t),!(l.state==="ko"||l.state==="sleep"||Math.hypot(l.x-i.x,l.z-i.z)>i.r*.8)&&(l.coughT>0||(l.coughT=2.2,this.app.floaters.spawn("*cough*",l.x,1.9,l.z,"q",.9),l.state==="alert"&&(l.lostT=Math.max(l.lostT,1.5))));i.t>=i.dur&&(a.pts.visible=!1,this.clouds.splice(e,1))}this.app.onInSmoke(this.state==="play"&&this.inSmoke(this.player.x,this.player.z))}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let i=this.coinMeshes.find(h=>!h.visible);if(!i)return;this.coinsLeft--,this.coinsThrown++;let s=Math.sin(t.face),r=Math.cos(t.face),a=Math.cos(t.pitch),o=Math.sin(t.pitch),l=7.5;this.coins.push({mesh:i,x:t.x+s*.35,y:.95,z:t.z+r*.35,vx:s*a*l+t.vx*.5,vy:o*l+2.6,vz:r*a*l+t.vz*.5,st:"fly",t:0,bounces:0}),i.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let i=this.player,s=this.app;for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];if(a.t+=t,a.st==="fly"){a.vy-=16*t;let o=a.x,l=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let h=Math.floor(a.x),c=Math.floor(a.z);!this.walkable(h,c)&&(this.opaqueAt(h,c)||a.y<.9)&&(Math.floor(o)!==h?a.vx*=-.4:a.vx*=.6,Math.floor(l)!==c?a.vz*=-.4:a.vz*=.6,a.x=o,a.z=l,s.audio.play("clink",.4)),a.y<.03&&(a.y=.03,a.bounces===0?(this.makeNoise(a.x,a.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(a.x,.06,a.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),a.bounces++,a.vy=Math.abs(a.vy)*.35,a.vx*=.5,a.vz*=.5,(a.bounces>2||Math.abs(a.vy)<.5)&&(a.st="rest",a.vy=0)),a.mesh.rotation.set(a.t*18,a.t*7,0)}else if(a.mesh.rotation.set(0,a.t*2,0),a.mesh.position.y=.03,e&&a.t>.6&&Math.hypot(i.x-a.x,i.z-a.z)<.6){this.coinsLeft++,a.mesh.visible=!1,this.coins.splice(r,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}a.mesh.position.set(a.x,a.y,a.z)}}makeNoise(t,e,i,s,r){let a=this.noiseRings.find(o=>o.t>=1);a&&(a.t=0,a.r=i,a.x=t,a.z=e,a.m.visible=!0);for(let o of this.guards)if(!(o===s||o.state==="ko"||o.state==="getup"||o.state==="alert"||o.state==="waking")&&!(Math.hypot(o.x-t,o.z-e)>i)){if(o.state==="sleep"){this.wake(o,t,e);continue}o.state!=="investigate"&&o.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(typeof r=="string"?r:r?"Huh? A coin?":"?",o.x,1.9,o.z,"q",.9),r===!0&&this.lures++,r==="Jackpot!?"&&this.slotLures++),o.state="investigate",o.tx=t,o.tz=e,o.hurry=o.speed*1.4,o.susp=Math.max(o.susp,.3)}if(r)for(let o of this.dogs)(o.state==="roam"||o.state==="sniff")&&Math.hypot(o.x-t,o.z-e)<i+2&&(o.state="coin",o.tx=t,o.tz=e,o.waitT=5,o.navGoal=-1,this.app.floaters.spawn("!",o.x,1,o.z,"q",.7))}updateDog(t,e,i){let s=this.player,r=this.app;t.t+=e,t.moving=0;let a=Math.hypot(s.x-t.x,s.z-t.z),o=s.hiding;i&&t.state!=="bark"&&t.state!=="barkHide"&&(!o&&s.inv<=0&&a<3&&this.los(t.x,t.z,s.x,s.z)&&!this.smokeBlocks(t.x,t.z,s.x,s.z)?(t.state="bark",t.barkT=.25,t.lostT=0,r.floaters.spawn("!",t.x,1.1,t.z,"alert",.8)):o&&Math.hypot(o.ex-t.x,o.ez-t.z)<1.4&&(t.state="barkHide",t.barkT=.3,t.hide=o));let l=t.def.path;switch(t.state){case"roam":{if(t.waitT>0){t.waitT-=e,t.face+=Math.sin(t.t*3)*e;break}let c=l[t.wp];if(this.navTo(t,c[0]+.5,c[1]+.5,t.def.speed*t.mul,e)&&(t.wp=(t.wp+1)%l.length,t.waitT=1.2),t.smellT-=e,i&&t.smellT<=0){t.smellT=.5;for(let f=this.crumbs.length-1;f>=0;f--){let u=this.crumbs[f];if(this.time-u.t>14)break;if(Math.hypot(u.x-t.x,u.z-t.z)<2.2){t.state="sniff",t.ci=f,t.sniffT=0,r.audio.play("sniff");break}}}break}case"sniff":{t.sniffT+=e;let c=this.crumbs[t.ci];if(!c||t.sniffT>16){t.state="roam",t.navGoal=-1;break}(this.navTo(t,c.x,c.z,2.5*t.mul,e)||Math.hypot(c.x-t.x,c.z-t.z)<.45)&&(t.ci<this.crumbs.length-1?t.ci++:(t.state="roam",t.waitT=2,t.navGoal=-1)),Math.random()<e*1.5&&r.audio.play("sniff");break}case"coin":(this.navTo(t,t.tx,t.tz,3.2*t.mul,e)||Math.hypot(t.tx-t.x,t.tz-t.z)<.6)&&(t.waitT-=e,t.face+=Math.sin(t.t*6)*e*3,Math.random()<e*2&&r.audio.play("sniff"),t.waitT<=0&&(t.state="roam",t.navGoal=-1));break;case"bark":{let c=!o&&a<6&&this.los(t.x,t.z,s.x,s.z);c?t.lostT=0:t.lostT+=e,a>1.3&&!o&&this.navTo(t,s.x,s.z,3.3*t.mul,e),t.face=ju(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),(t.lostT>2.5||o)&&(t.state="sniff",t.ci=Math.max(0,this.crumbs.length-6),t.sniffT=0),i&&c&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0);break}case"barkHide":{let c=t.hide;if(!s.hiding){t.state="bark",t.lostT=0;break}t.face=ju(t.face,Math.atan2(c.cx-t.x,c.cz-t.z),8*e),this.dogBark(t,e,c.ex,c.ez,10),this.barkedAt||(this.barkedAt=!0);break}}let h=t.m;h.root.position.set(t.x,0,t.z),h.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.scale.set(.8,1,1.1),Zu(h,e,t.moving?1:0,this.t,t.state==="bark"||t.state==="barkHide"),Ro(h,this.L,t.x,t.z,e)}dogBark(t,e,i,s,r=7){if(t.barkT-=e,t.barkT>0)return;t.barkT=.85;let a=this.app;a.audio.play("woof"),a.floaters.spawn("WOOF!",t.x,1,t.z,"woof",.7),t.m.sq=1.3,t.m.sqv=0,this.makeNoise(i,s,r,null)}wake(t,e,i){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=i,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,i-t.z),Di(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,i,s){let r=e-t.x,a=i-t.z,o=Math.hypot(r,a);return o>s||o>.6&&Math.abs(Ne(t.face,Math.atan2(r,a)))>t.fov/2?!1:this.los(t.x,t.z,e,i)}noticeThings(t){let e=this.app;for(let i of this.guards)if(!(i===t||i.state!=="ko"||i.koT<1.2||i.claimed)&&this.seesPoint(t,i.x,i.z,t.range)){i.claimed=!0,t.state="investigate",t.tx=i.x,t.tz=i.z,t.hurry=t.speed*1.7,t.reviveT=i,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"warn",1.3);return}if(this.casesSmashed&&t.kind==="guard"&&!t.sawCase){let i=this.cases.find(s=>s.smashed&&this.seesPoint(t,s.cx,s.cz,t.range));if(i){t.sawCase=!0,t.safeRun=!0,t.state="investigate",t.tx=i.cx,t.tz=i.cz+1.2,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The display case!?",t.x,2,t.z,"warn",1.3);return}}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let i=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,i,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=i,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"warn",1.3))}}arrive(t){let e=this.app;if(t.reviveT){let s=t.reviveT;t.reviveT=null,s.claimed=!1,s.state==="ko"&&Math.hypot(s.x-t.x,s.z-t.z)<1.8&&(s.koT=.25,this.revives++,t.face=Math.atan2(s.x-t.x,s.z-t.z),e.floaters.spawn("Wake up!",s.x,1.4,s.z,"warn",1.1),e.audio.play("wake"))}let i=this.player.hiding;if(i&&this.state==="play"&&this.dogs.some(s=>s.state==="barkHide")&&Math.hypot(i.ex-t.x,i.ez-t.z)<1.8){e.floaters.spawn("Got you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t);return}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){if(t.kind==="clerk"){if(t.state==="flee"||t.state==="cower")return;t.state="flee",t.susp=1,t.navGoal=-1,this.spotted=!0,this.app.audio.play("scream"),this.app.floaters.spawn("AAAH! A ROBBER!",t.x,2,t.z,"alert",1.2),this.app.shake.add(.12),Di(t.c,1.35),this.app.hint("clerk");return}t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"alert",.8),this.smokesLeft>0&&this.app.hint("smoke"),this.app.shake.add(.15),Di(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}roamCell(t){for(let e=0;e<40;e++){let i=t[0]+Math.floor(Math.random()*(t[2]-t[0]+1)),s=t[1]+Math.floor(Math.random()*(t[3]-t[1]+1));if(this.walkable(i,s))return[i,s]}return[t[0],t[1]]}effRange(t){return t.yawnT>0?t.range*.35:t.range}canSee(t){let e=this.player,i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s);return e.hiding||r>this.effRange(t)||r>.35&&Math.abs(Ne(t.face,Math.atan2(i,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)?0:this.smokeBlocks(t.x,t.z,e.x,e.z)?((t.susp>.2||t.state==="alert")&&(this.smokeHid=!0),0):r+.001}updateGuard(t,e,i){let s=this.player,r=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!i)&&r.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.kind==="guard"&&i&&(!t.radioCall&&t.koT<5.5&&(t.radioCall=1,t.callT=0,r.hint("radio")),t.radioCall===1&&(t.callT-=e,t.callT<=0&&(t.callT=1.1,r.audio.play("radio"),r.floaters.spawn('\u{1F4FB} "Unit, report in!"',t.x,1.2,t.z,"warn",1)),t.koT<1.8&&this.missedCheckIn(t))),t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,r.floaters.spawn("?!",t.x,1.9,t.z,"q",.8));return}t.yawnT>0&&(t.yawnT-=e,t.state!=="wait"&&(t.yawnT=0)),t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let a=i&&s.inv<=0?this.canSee(t):0;if(a){let l=1-Be(a/this.effRange(t),0,1),h=(.65+2.3*l*l)*(s.dashT>0?1.6:1)*this.D.susp;t.susp=Math.min(1,t.susp+h*e),t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",r.audio.play("huh")))}else t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3));i&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),i&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&!this.canKO(t)&&Math.abs(Ne(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let o=t.def;switch(t.state){case"patrol":{let l=o.path[t.wp];this.navTo(t,l[0]+.5,l[1]+.5,t.speed,e)&&(t.state="wait",t.t=o.wait??1,t.baseFace=t.face,t.kind==="guard"&&t.susp<.1&&Math.random()<.35&&(t.yawnT=2.2,t.t=Math.max(t.t,2.2),r.floaters.spawn("*yaaawn*",t.x,1.9,t.z,"zz",1.4)));break}case"wait":{t.t-=e;let l=(o.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(l*2.4)*.9,t.t<=0){let h=o.path.length;o.roam?(o.path=[[Math.floor(t.x),Math.floor(t.z)],this.roamCell(o.roam)],t.wp=1):o.loop?t.wp=(t.wp+1)%h:((t.wp+t.dir>=h||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir),t.state="patrol"}break}case"post":{let l=o.post[0]+.5,h=o.post[1]+.5;Math.hypot(t.x-l,t.z-h)>.15?this.navTo(t,l,h,t.speed,e):t.face=Io(t.face,o.face+Math.sin(this.t*o.sweepSpeed)*o.sweep,3*e);break}case"suspicious":{let l=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=Io(t.face,l,5*e),t.kind!=="clerk"&&Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,r.floaters.spawn("Calling it in...",t.x,2,t.z,"warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let l=a?s.x:t.lastX,h=a?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(l=s.hiding.ex,h=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(l-t.x,h-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,l,h,Qg,e),!a&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,r.audio.play("lost"),r.floaters.spawn("?",t.x,1.9,t.z,"q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"flee":this.navTo(t,t.button.x,t.button.z,3.4,e)&&(t.state="cower",t.t=0,t.face=Math.atan2(t.button.x-t.x,t.button.z-t.z),t.button.btn.material.color.setHex(4054148),this.state==="play"&&!this.alarm&&this.triggerAlarm("The clerk hit the silent alarm!"),r.audio.play("click"));break;case"cower":t.face+=Math.sin(this.t*9)*e*2;break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let i=t.c;if(t.moving&&this.state==="play"&&(t.stepAcc=(t.stepAcc||0)+e*(t.state==="alert"||t.state==="flee"?3.4:2.2),t.stepAcc>1)){t.stepAcc=0;let o=this.player,l=Math.hypot(t.x-o.x,t.z-o.z);if(l<8){let h=Ne(o.face,Math.atan2(t.x-o.x,t.z-o.z)),c=this.los(t.x,t.z,o.x,o.z)?1:.45;this.app.audio.stepSound("boot",(1-l/8)*.9*c,Be(-Math.sin(h),-.9,.9))}}i.root.position.x=t.x,i.root.position.z=t.z,i.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(yc(i,e*(s?1.5:1),t.moving?1:0,this.t),Ro(i,this.L,t.x,t.z,e),i.beam){let o=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";i.beam.visible=o,o&&i.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let o=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,l=t.state==="ko"?1-Math.pow(1-o,3)*Math.cos(o*7):o;if(i.root.rotation.x=-Math.PI/2*l,i.root.position.y=.16*l,t.stars.visible=t.state==="ko",t.stars.visible){let h=t.x-Math.sin(t.face)*1,c=t.z-Math.cos(t.face)*1;t.stars.children.forEach((f,u)=>{let p=this.t*5+u*Math.PI*2/3;f.position.set(h+Math.cos(p)*.35,.55+Math.sin(p*2)*.05,c+Math.sin(p)*.35),f.rotation.set(p,p,0)})}}else t.state!=="sleep"&&(i.root.rotation.x=0,i.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(i.armOverride=!0,i.armL.rotation.x=i.armR.rotation.x=-2.6);let r=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=r,r){let o=t.state==="alert"||t.state==="flee"?Cs.alert:t.susp>.25?Cs.sus:Cs.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,this.effRange(t),o)}let a="";t.state==="alert"||t.state==="flee"?a="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.susp>.04)&&(a="sus"),a!==t.prevBadge&&(t.prevBadge=a,t.badge.className="badge "+a,t.badge.lastChild.textContent=a==="alert"?"!":"?"),a&&(Po.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",Po.z>1),t.badge.style.transform=`translate(${(Po.x+1)/2*this.app.w}px,${(1-Po.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",a==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,i,s,r,a,o){let l=t.geometry.attributes.position.array;l[0]=e,l[1]=.04,l[2]=i;for(let h=0;h<=Rs;h++){let c=s-r/2+r*h/Rs,f=this.rayLen(e,i,c,a),u=(h+1)*3;l[u]=e+Math.sin(c)*f,l[u+1]=.04,l[u+2]=i+Math.cos(c)*f}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(o)}updateCam(t,e,i){let s=t.def,r=this.player;t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let a=s.pos[0],o=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let l=!1;if(i&&r.inv<=0&&t.cool<=0){let c=r.x-a,f=r.z-o;l=Math.hypot(c,f)<6.5&&Math.abs(Ne(t.face,Math.atan2(c,f)))<.45&&this.los(a,o,r.x,r.z)&&!this.smokeBlocks(a,o,r.x,r.z)}if(t.susp=Be(t.susp+(l?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.audio.play("alarm"),this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",a,2,o,"alert",1.2);for(let c of this.guards)c.state==="ko"||c.state==="sleep"||c.state==="getup"||c.state==="alert"||c.state==="waking"||Math.hypot(c.x-r.x,c.z-r.z)<18&&(c.state="investigate",c.tx=r.x,c.tz=r.z,c.hurry=3.2,c.susp=Math.max(c.susp,.6))}let h=t.cool>0;t.lens.material.color.setHex(h||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,a,o,t.face,.9,6.5,h?Cs.alert:t.susp>.2?Cs.sus:10479871)}openSafe(){this.mark("safe",this.L.safe.x+.5,this.L.safe.y+.5);let t=this.app,e=this.L.safe.x+.5,i=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,i+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.burst(e,1,i+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,i,"big",1.6);for(let r=0;r<s.bundles;r++){let a=-.9+1.8*r/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:i+.4*this.safeScale+.1,vx:Math.sin(a)*Te(2,3.2),vy:Te(5,7),vz:Math.cos(a)*Te(1.5,3),st:"fly",t:0,value:s.bundle,ph:r,ms:0,s:1,rot:r,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.hintDone("safe"),t.hint("stash")}collect(t){(t.type!=="cash"||!t.bundle)&&this.mark(t.type==="cash"?"cash":"loot",t.x,t.z);let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let i=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,r=Math.sin(s.face),a=Math.cos(s.face),o=Te(-.35,.35),l=s.x+r*1.4-a*o,h=s.z+a*1.4+r*o;e.floaters.spawn("+$"+t.value,l,1,h,i,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+r*1.4,1.45,s.z+a*1.4,"combo",.8),e.audio.play("combo",this.combo));let c={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+r*1.4,.8,s.z+a*1.4,{count:t.type==="cash"?4:10,colors:c,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+r*1,1,s.z+a*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+r*1.5,1,s.z+a*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,Di(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let i=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let r=this.loot.length-1;r>=0;r--){let a=this.loot[r];a.t+=t;let o=a.type==="art"?.9:.62;if(a.st==="fly"){a.vy-=18*t;let c=a.x,f=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,this.walkable(Math.floor(a.x),Math.floor(a.z))||(a.x=c,a.z=f,a.vx*=-.5,a.vz*=-.5),a.y<.3&&(a.y=.3,a.vy*=-.45,a.vx*=.6,a.vz*=.6),a.rot+=t*8,a.t>.8&&(a.st="idle")}else if(a.st==="idle")a.y+=(o+Math.sin(this.t*3+a.ph)*.08-a.y)*Math.min(1,t*6),a.rot+=t*1.8,e&&Math.hypot(i.x-a.x,i.z-a.z)<1.5&&(a.st="mag",a.ms=2);else{a.ms+=t*30;let c=i.x-a.x,f=.7-a.y,u=i.z-a.z,p=Math.hypot(c,f,u),g=Math.min(p,a.ms*t);if(a.x+=c/p*g,a.y+=f/p*g,a.z+=u/p*g,a.rot+=t*12,p<.45){this.collect(a),this.loot.splice(r,1);continue}}a.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(a.x+Te(-.2,.2),a.y+Te(0,.25),a.z+Te(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let l=this.lootMeshes[a.type],h=a.st==="mag"?Math.max(.4,1-a.ms*.02):1+(a.type==="art"?0:Math.sin(this.t*6+a.ph)*.06);Tr.position.set(a.x,a.y,a.z),Tr.rotation.set(0,a.rot,0),Tr.scale.setScalar(h*(a.type==="jewel"?1.5:1.25)),Tr.updateMatrix(),l.setMatrixAt(s[a.type]++,Tr.matrix)}for(let r in s){let a=this.lootMeshes[r];a.count=s[r],a.instanceMatrix.needsUpdate=!0}}updateProps(t){for(let e of this.doors)if(e.open&&e.t<1){e.t=Math.min(1,e.t+t*1.6);let i=1-Math.pow(1-e.t,3);e.type==="lock"?e.m.group.rotation.y=(e.alongX?1:-1)*1.55*(i+Math.sin(e.t*Math.PI)*.12):e.m.group.position.y=i*(He-.12)}if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,i=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*i}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,i=e.c,s=this.state==="escape"&&!e.hidden;i.root.visible=s,e.shadow.visible=s,s&&(i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),yc(i,t,1,this.t),i.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=ti(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),Ro(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let i=this.player,s=this.app;if(this.state==="escape"&&!this.L.van){let g=this.L.exit,_=this.endT,d=Math.min(1,Math.max(0,(_-.3)/2)),m=d*d*(3-2*d);t.position.set(g.x,bc+m*9,g.z+m*3.5),t.rotation.set(-.1-m*1,Math.PI+m*.5,0),this.fovKick=0;return}if(this.state==="escape"){let g=this.van.group.position,_=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(_.x-2.5,1.6,_.z+5)),t.position.x+=(g.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(g.x+.3,.7,g.z),this.fovKick=0;return}if(i.hiding){let g=i.hiding;t.position.set(g.cx+Math.sin(g.face)*.12,bc-.06,g.cz+Math.cos(g.face)*.12),t.rotation.set(i.pitch+s.shake.y*.06,i.yaw+s.shake.x*.06,0),this.fovKick=ti(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let g=this.catcher,_=Math.atan2(g.x-i.x,g.z-i.z)-Math.PI;i.yaw+=Ne(i.yaw,_)*Math.min(1,e*8),i.pitch+=(.08-i.pitch)*Math.min(1,e*8)}let r=i.moving,a=Math.abs(Math.sin(i.bob))*.05*r,o=Math.cos(i.bob)*.03*r,l=Math.cos(i.yaw+Math.PI),h=Math.sin(i.yaw+Math.PI),c=-l,f=h;i.roll=ti(i.roll,-i.strafe*.03*r,8,e),this.fovKick=ti(this.fovKick,i.dashT>0?12:0,i.dashT>0?25:6,e);let u=s.shake,p=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(i.x+c*o,bc+a-p,i.z+f*o),t.rotation.set(i.pitch+u.y*.06,i.yaw+u.x*.06,i.roll+u.x*.02)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let i=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(i,1,i),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1,this.whooshed=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),t.onEscapeStart()}updateEscape(t){let e=this.player,i=this.van.group,s=this.app;if(!this.L.van){this.endT+=t,e.hidden||(e.hidden=!0,e.c.root.visible=!1,s.audio.play("creak")),this.endT>.5&&!this.whooshed&&(this.whooshed=!0,s.audio.play("dash")),this.endT>2.8&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()));return}this.endT+=t;let r=this.endT;if(r<.4){let a=r/.4;e.x=e.sx+(i.position.x-e.sx)*a,e.z=e.sz+(i.position.z-.3-e.sz)*a,e.y=Math.sin(a*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,i.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));i.scale.x+=(1-i.scale.x)*Math.min(1,t*10),i.scale.y+=(1-i.scale.y)*Math.min(1,t*10),i.scale.z=i.scale.x,r>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),i.position.x+=this.van.vx*t,i.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.burst(i.position.x-1.5,.25,i.position.z,{count:2,colors:[14540253,12303291],speed:1,up:1,size:.22,gravity:-1,life:.6})),r>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;this.mark("alarm",this.player.x,this.player.z);let e=this.app,i=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(this.policeLane.x+40,0,this.policeLane.z),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let o=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?o?16722490:5900816:4054148)}let i=this.police;if(!this.alarm){i.group.visible&&this.state==="play"&&(i.group.position.x+=t*10,i.group.position.x>this.policeLane.x+45&&(i.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(i.red.material.color.setHex(s?16722490:5574682),i.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let r=this.L.exit,a=Math.max(0,this.alarmT/this.alarmTotal);i.group.position.x=this.policeLane.x+2.5+a*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){this.mark("caught",this.player.x,this.player.z);let t=this.app,e=this.player;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}bust(t){this.mark("caught",this.player.x,this.player.z);let e=this.app;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),Di(this.player.c,.55),this.hitstop=.15,e.shake.add(.7),e.flash("red"),e.audio.play("bust"),e.audio.siren(!1),e.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),e.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,Di(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let i of this.guards)i.state==="alert"&&(i.state="search",i.tx=i.lastX,i.tz=i.lastZ,i.hurry=2.4,i.susp=.5)}cutPower(){let t=this.app,e=this.breaker.group.position;this.powerOff=!0,this.breakProg=0,this.breaker.lever.rotation.x=-2.2,this.breaker.led.material.color.setHex(4054148);for(let i of this.lasers)i.group.visible=!1;for(let i of this.spots)i.pool.visible=i.cone.visible=!1;t.audio.play("powerdown"),t.shake.add(.2),t.particles.burst(e.x,e.y+.3,e.z,{count:24,colors:[16773544,8378623,16777215],speed:3,up:3,size:.04,life:.6}),t.floaters.spawn("LASERS OFF",e.x,1.6,e.z,"big",1.3)}updateSlots(t){for(let e of this.slots){if(e.t<=0){e.top.visible=!1;continue}e.t-=t,e.top.visible=!0,e.top.material.color.setHSL(this.t*2%1,1,.6),e.top.scale.y=1+Math.sin(this.t*30)*.5}}updateSpots(t,e){let i=this.player,s=this.app;for(let r of this.spots){let a=r.def,o=r.len||1,l=(this.t*a.speed+(a.phase||0))%(2*o),h=(l<o?l:2*o-l)/o;if(r.x=r.ax+(r.bx-r.ax)*h,r.z=r.az+(r.bz-r.az)*h,r.pool.position.set(r.x,.03,r.z),r.cone.position.set(r.x,He/2,r.z),r.fix.position.set(r.x,He-.08,r.z),this.powerOff)continue;r.cool-=t;let c=e&&!i.hiding&&i.inv<=0&&r.cool<=0&&Math.hypot(i.x-r.x,i.z-r.z)<a.r*.9&&!this.inSmoke(i.x,i.z);r.susp=Be(r.susp+(c?t*1.7:-t*.7),0,1),c&&(this.spotHit=!0,r.tickT-=t,r.tickT<=0&&(r.tickT=.22,s.audio.play("tick",1+r.susp)),s.hint("spot")),r.susp>=1&&(r.susp=0,r.cool=5,this.spotted=!0,s.flash("alarm"),s.shake.add(.2),this.triggerAlarm("Caught in the spotlight!"));let u=r.cool>0&&Math.sin(this.t*14)>0?16724032:r.susp>.05?r.susp>.6?16734778:16752704:16773296;r.pool.material.color.setHex(u),r.cone.material.color.setHex(u),r.pool.scale.setScalar(1+r.susp*.15)}}updateLasers(t,e){if(this.powerOff)return;let i=this.player,s=this.app;for(let r of this.lasers){let a=r.def,o=a.on+a.off,l=(this.t+(a.phase||0))%o,h=l<a.on,c=!h&&o-l<.45;if(r.on=h,r.mat.opacity=h?.75+Math.sin(this.t*40)*.15:c&&Math.sin(this.t*50)>0?.35:0,!e||!h||i.hiding)continue;let f=r.alongX?i.x:i.z,u=r.alongX?i.z:i.x;f>r.lo&&f<r.hi&&Math.abs(u-r.line)<.28&&(!this.laserHitT||this.t-this.laserHitT>1.5)&&(this.laserHitT=this.t,this.lasersTripped++,s.audio.play("zap"),s.flash("red"),s.shake.add(.3),s.particles.burst(i.x,.8,i.z,{count:14,colors:[16724032,16777215],speed:2.5,up:2,size:.04,life:.5}),this.spotted=!0,this.triggerAlarm("You tripped a laser!"))}}fakeCheckIn(t){let e=this.app;t.radioCall=2,t.answerProg=0,t.koT+=8,this.radioFaked++,e.audio.play("radioOk"),e.floaters.spawn('"All clear, over."',t.x,1.3,t.z,"big",1.3),e.hintDone("radio")}missedCheckIn(t){let e=this.app;t.radioCall=3,e.audio.play("radio"),e.floaters.spawn('\u{1F4FB} "No answer... sending backup!"',t.x,1.4,t.z,"alert",1.4);let i=null,s=1e9;for(let r of this.guards){if(r===t||r.kind!=="guard"||["ko","getup","sleep","alert","waking"].includes(r.state))continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a<s&&(s=a,i=r)}i&&(t.claimed=!0,i.state="investigate",i.tx=t.x,i.tz=t.z,i.hurry=i.speed*1.8,i.reviveT=t,i.susp=Math.max(i.susp,.7),i.navGoal=-1,e.floaters.spawn("On my way!",i.x,2,i.z,"warn",1.1)),this.app.diff==="hard"&&this.app.mode!=="daily"&&this.app.mode!=="tutorial"&&this.triggerAlarm("A guard missed his radio check-in!")}pullSlot(t){let e=this.app,i=this.def.values;t.used=!0,t.prog=0,t.t=3,e.audio.play("jackpot"),e.shake.add(.15),e.floaters.spawn("JACKPOT!",t.cx,1.9,t.cz+t.face*.6,"big",1.4);for(let s=0;s<4;s++)setTimeout(()=>e.particles.burst(t.cx,1.3,t.cz+t.face*.4,{count:10,colors:[16766810,16773544,16777215],speed:2.2,up:3.5,size:.06,life:.9}),s*250);this.makeNoise(t.cx,t.cz,8,null,"Jackpot!?"),this.loot.push({type:"cash",x:t.cx,y:1,z:t.cz+t.face*.5,vx:(Math.random()-.5)*2,vy:4,vz:t.face*2.2,st:"fly",t:0,value:i.cash,ph:0,ms:0,s:1,rot:0})}smashCase(t){let e=this.app,i=this.def.values;t.smashed=!0,t.prog=0,this.casesSmashed++,t.glass.visible=!1,t.gems.visible=!1,e.audio.play("glass"),e.shake.add(.28),this.hitstop=.06,e.particles.burst(t.cx,1.05,t.cz,{count:26,colors:[14677247,12576511,16777215],speed:3.2,up:3,size:.07,life:.9,spin:2}),e.particles.burst(t.cx,.95,t.cz,{count:8,colors:[5037311,16732026,16766810],speed:1.5,up:2.5,size:.05,life:.7}),this.makeNoise(t.cx,t.cz,3.6,null);for(let s=0;s<this.caseLoot;s++){let r=Math.atan2(this.player.x-t.cx,this.player.z-t.cz)+(s-.5)*.9;this.loot.push({type:"jewel",x:t.cx,y:1,z:t.cz,vx:Math.sin(r)*Te(1.5,2.4),vy:Te(3.5,5),vz:Math.cos(r)*Te(1.5,2.4),st:"fly",t:0,value:i.jewel,ph:s,ms:0,s:1,rot:s})}e.floaters.spawn("SMASH!",t.cx,1.6,t.cz,"ko",.8)}startPick(t){this.picking={d:t,pin:0,t:Math.random()*6,speed:2.2,w:.26,zone:.5,pos:.5,slips:0,cool:0},this.newPinZone(),this.app.audio.play("click"),this.app.onPick(this.picking)}newPinZone(){let t=this.picking,e;do e=.18+Math.random()*.64;while(Math.abs(e-t.pos)<.25);t.zone=e}stopPick(){this.picking=null,this.app.onPick(null)}updatePicking(t,e){let i=this.picking,s=this.player,r=this.app,a=i.d;if(e.move(Si),e.consumeDash(),e.consumeThrow(),e.consumeSmoke(),s.vx=s.vz=0,s.moving=0,s.crack=!0,Math.hypot(Si.x,Si.y)>.5){this.stopPick();return}if(i.t+=t*i.speed,i.cool-=t,i.pos=.5+.5*Math.sin(i.t),e.consumeAct()&&i.cool<=0)if(Math.abs(i.pos-i.zone)<i.w/2){if(i.pin++,r.audio.play("pin",i.pin),r.shake.add(.05),r.particles.burst(a.x+.5,.72,a.y+.5,{count:4,colors:[16773544,16777215],speed:1,up:1,size:.025,life:.3}),i.pin>=3){i.slips===0&&(this.cleanPick=!0),this.stopPick(),this.openDoor(a);return}i.w*=.78,i.speed*=1.25,this.newPinZone()}else i.slips++,i.cool=.45,r.audio.play("slip"),r.shake.add(.15),r.floaters.spawn("*rattle*",a.x+.5,1.2,a.y+.5,"warn",.8),this.makeNoise(a.x+.5,a.y+.5,3.4,null);r.onPick(i),r.setPrompt("picking")}openDoor(t){let e=this.app,i=t.y*this.L.W+t.x;t.open=!0,t.t=0,this.L.walk[i]=1,this.L.opaque[i]=0;for(let s of this.guards)s.navGoal=-1;if(t.type==="lock"){e.audio.play("creak"),e.hintDone("pick"),e.floaters.spawn("UNLOCKED!",t.x+.5,1.5,t.y+.5,"big",1.2),e.particles.burst(t.x+.5,.75,t.y+.5,{count:10,colors:[14267482,16777215],speed:1.5,up:1.5,size:.03,life:.5});return}t.m.led.material.color.setHex(4054148),e.audio.play("disarm"),e.audio.play("creak"),e.shake.add(.25),e.particles.burst(t.x+.5,1.5,t.y+.5,{count:18,colors:[14212842,16777215],speed:1.5,up:.5,size:.06,life:.8}),e.floaters.spawn("ACCESS GRANTED",t.x+.5,1.6,t.y+.5,"big",1.2)}objectiveTarget(){let t=this.L;if(this.hasStash)return{x:t.exit.x,z:t.exit.z,label:t.van?"VAN":"ROOF HATCH"};let e=this.doors.find(s=>!s.open&&s.type!=="lock");if(e&&!this.hasKey){let s=this.keyMeshes.find(r=>r.m.visible);if(s)return{x:s.x+.5,z:s.y+.5,label:"KEYCARD"}}if(e)return{x:e.x+.5,z:e.y+.5,label:"DOOR"};let i=this.doors.find(s=>!s.open&&s.type==="lock");return i?{x:i.x+.5,z:i.y+.5,label:"LOCKED DOOR"}:{x:t.safe.x+.5,z:t.safe.y+.5,label:(this.def.safeName||"safe").toUpperCase()}}updateObjective(){let t=this.doors.find(s=>!s.open&&s.type!=="lock"),e=this.doors.find(s=>!s.open&&s.type==="lock"),i=this.hasStash?this.L.van?"Escape to the van!":"Escape through the roof hatch!":t&&!this.hasKey?"Find the keycard!":t?"Open the vault door!":e?"Pick the lock!":`Crack the ${this.def.safeName||"safe"}!`;i!==this.objText&&(this.objText=i,this.app.setObjective(i))}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let i=e.check(this,t);i!=="pending"&&(e.st=i,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,i=this.contracts.reduce((o,l)=>o+(l.st==="ok"?l.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),r=!this.spotted,a=[!0,e>=.7,r];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:r,kos:this.kos,stars:a,timeBonus:s,ghostBonus:r?1e3:0,contracts:this.contracts,contractBonus:i,diff:this.daily?"Daily "+this.daily.label:this.D.label,mult:this.D.mult,daily:!!this.daily,score:Math.round((this.lootGot+s+(r?1e3:0)+i)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var ln=n=>440*Math.pow(2,(n-69)/12),Do=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32,this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;this.apply(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setMuted(t){this.muted=t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,i={}){let s=this.ctx,r=s.currentTime+(i.delay||0),a=s.createOscillator(),o=s.createGain();a.type=i.type||"square",a.frequency.setValueAtTime(t,r),i.slide&&a.frequency.exponentialRampToValueAtTime(i.slide,r+e);let l=i.vol??.15;o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(l,r+(i.attack||.006)),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o).connect(i.dest||this.sfx),a.start(r),a.stop(r+e+.05)}noise(t,e={}){let i=this.ctx,s=i.currentTime+(e.delay||0),r=i.createBufferSource();r.buffer=this.noiseBuf;let a=i.createBiquadFilter();a.type=e.type||"bandpass",a.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&a.frequency.exponentialRampToValueAtTime(e.slide,s+t),a.Q.value=e.q??1;let o=i.createGain(),l=e.vol??.2;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(l,s+(e.attack||.005)),o.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(o).connect(e.dest||this.sfx),r.start(s,Math.random()*.5),r.stop(s+t+.05)}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let i=(r,a,o)=>this.tone(r,a,o),s=(r,a)=>this.noise(r,a);switch(t){case"step":s(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":s(.28,{vol:.3,freq:500,slide:3e3,q:2}),i(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let r=880*Math.pow(2,Math.min(e,14)/12);i(r,.07,{vol:.1}),i(r*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((r,a)=>i(r,.18,{type:"triangle",vol:.14,delay:a*.045})),s(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((r,a)=>i(r,.25,{type:"sine",vol:.16,delay:a*.06}));break;case"art":[523,659,784,1046,1318].forEach((r,a)=>i(r,.2,{type:"triangle",vol:.13,delay:a*.05}));break;case"ko":i(170,.28,{type:"sine",slide:45,vol:.55}),s(.14,{vol:.35,freq:900}),i(560,.12,{slide:260,vol:.12}),i(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":i(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":i(880,.09,{vol:.16}),i(1320,.16,{vol:.16,delay:.1});break;case"lost":i(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":s(.03,{vol:.22,freq:4e3,type:"highpass"}),i(1500+e*600,.04,{vol:.05});break;case"safe":i(110,.45,{type:"sine",slide:40,vol:.6}),s(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((r,a)=>i(r,.16,{vol:.09,delay:.1+a*.05}));for(let r=0;r<12;r++)i(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+r*.05});break;case"win":[523,659,784,1046].forEach((r,a)=>i(r,.22,{vol:.12,delay:a*.1})),[523,659,784].forEach(r=>i(r*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":i(392,.3,{type:"sawtooth",slide:370,vol:.12}),i(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),i(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let r=0;r<4;r++)i(r%2?660:880,.22,{type:"square",vol:.05,delay:r*.22});break;case"alarm":for(let r=0;r<6;r++)i(r%2?700:950,.15,{vol:.09,delay:r*.15});break;case"wake":i(300,.25,{type:"sawtooth",slide:520,vol:.1}),i(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"engine":s(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),i(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":i(700,.05,{vol:.08});break;case"star":i(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),i(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"throw":s(.12,{vol:.15,freq:1800,slide:900,q:1.5}),i(900,.06,{type:"triangle",vol:.06});break;case"clink":{let r=.05+e*.12;i(2400+Math.random()*300,.12,{type:"triangle",vol:r}),i(3700+Math.random()*300,.18,{type:"sine",vol:r*.7,delay:.02}),e>.5&&i(3100,.25,{type:"sine",vol:r*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((r,a)=>i(r,.12,{type:"square",vol:.07,delay:a*.06}));break;case"contract":[784,988,1175,1568].forEach((r,a)=>i(r,.16,{type:"triangle",vol:.12,delay:a*.07})),i(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":s(.35,{vol:.12,freq:300,slide:900,q:8}),i(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":i(62,.12,{type:"sine",slide:40,vol:.45}),i(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"woof":i(330,.09,{type:"sawtooth",slide:170,vol:.22}),s(.08,{freq:800,vol:.18,q:2}),i(300,.11,{type:"sawtooth",slide:150,vol:.2,delay:.15}),s(.09,{freq:700,vol:.16,q:2,delay:.15});break;case"sniff":for(let r=0;r<3;r++)s(.04,{freq:2500,vol:.05,q:3,delay:r*.07});break;case"zap":i(1400,.25,{type:"sawtooth",slide:200,vol:.18}),s(.2,{freq:3e3,vol:.2,type:"highpass"});break;case"powerdown":i(440,.8,{type:"sawtooth",slide:40,vol:.16}),s(.15,{freq:2e3,vol:.25,q:.7}),i(60,.5,{type:"sine",vol:.4,delay:.05});break;case"scream":i(900,.45,{type:"sawtooth",slide:1400,vol:.09}),i(1100,.4,{type:"square",slide:1600,vol:.04,delay:.05});break;case"smoke":i(160,.12,{type:"sine",slide:60,vol:.4}),s(1.4,{freq:4e3,slide:900,vol:.22,q:.6}),s(.5,{freq:900,vol:.12,type:"lowpass",delay:.05});break;case"pin":i(2400+e*300,.05,{type:"square",vol:.08}),i(1600+e*200,.08,{type:"triangle",vol:.1,delay:.03}),s(.03,{freq:6e3,vol:.1,type:"highpass"});break;case"slip":s(.18,{freq:2200,vol:.22,q:3}),i(320,.15,{type:"square",slide:180,vol:.08}),s(.12,{freq:1500,vol:.15,q:4,delay:.08});break;case"glass":s(.5,{freq:5e3,vol:.35,type:"highpass"}),s(.25,{freq:2500,vol:.25,q:.8,delay:.02});for(let r=0;r<8;r++)i(2500+Math.random()*3500,.12,{type:"triangle",vol:.06,delay:.03+r*.035});i(140,.2,{type:"sine",slide:60,vol:.3});break;case"radio":s(.35,{freq:1800,vol:.12,q:1.2}),i(1200,.05,{type:"square",vol:.05,delay:.02}),i(900,.05,{type:"square",vol:.05,delay:.12}),s(.15,{freq:2400,vol:.08,q:2,delay:.25});break;case"radioOk":s(.12,{freq:1800,vol:.12,q:1.2}),i(1400,.06,{type:"square",vol:.06,delay:.05}),i(1800,.08,{type:"square",vol:.06,delay:.13});break;case"jackpot":for(let r=0;r<14;r++)i([1046,1318,1568,2093][r%4]*(r>9?1.5:1),.1,{type:"square",vol:.07,delay:r*.08});for(let r=0;r<18;r++)i(2400+Math.random()*1800,.06,{type:"triangle",vol:.05,delay:.3+r*.07});i(523,.6,{type:"triangle",vol:.1,delay:1.1});break;case"nope":i(220,.12,{vol:.08}),i(180,.15,{vol:.08,delay:.1});break;case"combo":i(1320+e*80,.12,{type:"triangle",vol:.1});break}}siren(t){if(this.ctx){if(t&&!this.sir){let e=this.ctx,i=e.createOscillator(),s=e.createOscillator(),r=e.createGain(),a=e.createGain();i.type="sawtooth",i.frequency.value=780,s.type="square",s.frequency.value=1.6,r.gain.value=170,s.connect(r).connect(i.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,a.gain.value=1e-4,a.gain.setTargetAtTime(.045,e.currentTime,.2),i.connect(o).connect(a).connect(this.sfx),i.start(),s.start(),this.sir={o:i,lfo:s,g:a}}else if(!t&&this.sir){let e=this.sir,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.1),e.o.stop(i+.5),e.lfo.stop(i+.5),this.sir=null}}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=this.mode==="menu"?0:this.tension|0,s=60/(this.mode==="menu"?96:[104,110,128,140][e]||104)/4;for(this.lvl=this.lvl==null?e:this.lvl+Math.sign(e-this.lvl)*0,this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.step%16===0&&(this.lvl=e),this.mode==="menu"?this.menuBeat(this.step,this.nextT-t.currentTime):this.beat(this.step,this.nextT-t.currentTime,this.lvl),this.nextT+=s,this.step=(this.step+1)%64}pad(t,e,i,s){for(let r of t)for(let a of[-5,5]){let o=this.ctx,l=o.currentTime+i,h=o.createOscillator(),c=o.createGain(),f=o.createBiquadFilter();h.type="sawtooth",h.frequency.value=ln(r),h.detune.value=a,f.type="lowpass",f.frequency.value=900,c.gain.setValueAtTime(1e-4,l),c.gain.linearRampToValueAtTime(s,l+e*.35),c.gain.linearRampToValueAtTime(1e-4,l+e),h.connect(f).connect(c).connect(this.mus),h.start(l),h.stop(l+e+.05)}}beat(t,e,i){let s=this.mus,r=(p,g,_)=>this.tone(p,g,{..._,delay:e,dest:s}),a=(p,g)=>this.noise(p,{...g,delay:e,dest:s}),o=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],l=[45,41,48,43],h=t>>4&3,c=l[h]+(i>=2?12:0),f=t&15,u=[1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0];if(u[f]&&r(ln(c+(f===6?7:f===13?5:0)),.18,{type:"triangle",vol:.3}),u[f]&&i>=1&&r(ln(c+12),.08,{type:"square",vol:.035}),f%4===2&&a(.03,{vol:.07,freq:7e3,type:"highpass"}),f===0&&this.pad(o[h],16*(60/([104,110,128,140][i]||104)/4),e,i>=2?.012:.018),i>=1){let p=o[h],g=f%3;f%2===0&&r(ln(p[g]+12),.1,{type:"sine",vol:.06}),(f===4||f===12)&&a(.04,{vol:.12,freq:2500,q:3})}i>=2&&(f%4===0&&r(120,.15,{type:"sine",slide:40,vol:.45}),(f===4||f===12)&&(a(.12,{vol:.18,freq:1800,q:.8}),r(200,.08,{type:"triangle",slide:120,vol:.12})),f%2===1&&a(.02,{vol:.06,freq:9e3,type:"highpass"}),f===14&&r(ln(c+24),.1,{type:"square",vol:.04})),i>=3&&(f===0||f===3||f===6)&&(r(ln(c+24),.12,{type:"sawtooth",vol:.05}),r(ln(c+27),.12,{type:"sawtooth",vol:.04}))}menuBeat(t,e){let i=this.mus,s=(f,u,p)=>this.tone(f,u,{...p,delay:e,dest:i}),r=(f,u)=>this.noise(f,{...u,delay:e,dest:i}),a=[[57,60,64,67],[50,53,57,60],[52,55,59,62],[57,60,64,67]],o=[45,38,40,45],l=t>>4&3,h=t&15,c=o[l];(h===0||h===7||h===10)&&s(ln(c),.25,{type:"triangle",vol:.3}),h===0&&this.pad(a[l],2.4,e,.014),(h===4||h===12)&&r(.05,{vol:.1,freq:2600,q:2.5}),h%2===0&&r(.025,{vol:.05,freq:8e3,type:"highpass"}),(h===2||h===6||h===9||h===14)&&s(ln(a[l][(h>>1)%4]+12),.12,{type:"sine",vol:.05})}stepSound(t,e=1,i=0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.sfx;if(i){let o=this.ctx.createStereoPanner();o.pan.value=i,o.connect(this.sfx),s=o}let r=(o,l)=>this.noise(o,{...l,vol:(l.vol||.1)*e,dest:s}),a=(o,l,h)=>this.tone(o,l,{...h,vol:(h.vol||.1)*e,dest:s});switch(t){case"carpet":r(.07,{vol:.05,freq:300,type:"lowpass"});break;case"tile":r(.03,{vol:.09,freq:3200,q:1.5}),a(900+Math.random()*200,.03,{type:"triangle",vol:.03});break;case"grass":r(.09,{vol:.07,freq:1400,q:.6});break;case"road":r(.06,{vol:.08,freq:900,q:.9});break;case"boot":r(.06,{vol:.1,freq:450,type:"lowpass"}),a(110,.06,{type:"sine",vol:.08});break;default:r(.05,{vol:.07,freq:600,type:"lowpass"}),a(170+Math.random()*30,.05,{type:"sine",vol:.06})}}};var Ar={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},sx=new Set([...Object.keys(Ar),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),tf=2.4,No=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",l=>{sx.has(l.code)&&l.preventDefault(),this.setTouch(!1),!l.repeat&&(Ar[l.code]&&(this.k[Ar[l.code]]=1),(l.code==="Space"||l.code.startsWith("Shift"))&&(this.dashP=!0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!0,this.actP=!0),(l.code==="Escape"||l.code==="KeyP")&&this.emit("pause"),l.code==="KeyR"&&this.emit("restart"),l.code==="KeyM"&&this.emit("mute"),(l.code==="KeyQ"||l.code==="KeyG")&&(this.throwP=!0),(l.code==="KeyC"||l.code==="KeyX")&&(this.smokeP=!0),this.emit("key",l.code))}),addEventListener("keyup",l=>{Ar[l.code]&&(this.k[Ar[l.code]]=0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",l=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}l.button===0&&(this.act=!0,this.actP=!0),l.button===2&&(this.dashP=!0),l.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",l=>{l.button===0&&(this.act=!1),this.dragLook=!1}),addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{this.active&&(this.locked||this.lockFailed&&this.dragLook)&&(this.lx+=l.movementX||0,this.ly+=l.movementY||0)}),addEventListener("pointermove",l=>{l.pointerType==="mouse"&&(l.movementX||l.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let l=this.locked;this.locked=document.pointerLockElement===e,l&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let i=t.joyzone;i.addEventListener("pointerdown",l=>{if(this.joy.id===-1){l.preventDefault(),this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=0,this.joy.y=0;try{i.setPointerCapture(l.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${l.clientX}px,${l.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),i.addEventListener("pointermove",l=>{if(l.pointerId!==this.joy.id)return;let h=56,c=l.clientX-this.joy.ox,f=l.clientY-this.joy.oy,u=Math.hypot(c,f);u>h&&(this.joy.ox+=c/u*(u-h),this.joy.oy+=f/u*(u-h),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,c=c/u*h,f=f/u*h),this.joy.x=c/h,this.joy.y=f/h,t.knob.style.transform=`translate(calc(-50% + ${c}px),calc(-50% + ${f}px))`});let s=l=>{l.pointerId===this.joy.id&&this.joyEnd()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s);let r=t.lookzone;r.addEventListener("pointerdown",l=>{if(this.look.id===-1){l.preventDefault(),this.look.id=l.pointerId,this.look.x=l.clientX,this.look.y=l.clientY;try{r.setPointerCapture(l.pointerId)}catch{}}}),r.addEventListener("pointermove",l=>{l.pointerId===this.look.id&&(this.lx+=(l.clientX-this.look.x)*tf,this.ly+=(l.clientY-this.look.y)*tf,this.look.x=l.clientX,this.look.y=l.clientY)});let a=l=>{l.pointerId===this.look.id&&(this.look.id=-1)};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a);let o=(l,h,c)=>{l.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),l.classList.add("down"),h()});let f=()=>{l.classList.remove("down"),c&&c()};l.addEventListener("pointerup",f),l.addEventListener("pointercancel",f),l.addEventListener("pointerleave",f)};o(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),o(t.bDash,()=>{this.dashP=!0}),o(t.bThrow,()=>{this.throwP=!0}),o(t.bSmoke,()=>{this.smokeP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),i=(this.k.d||0)-(this.k.u||0);if(e||i){let s=Math.hypot(e,i);e/=s,i/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let r=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*r,i=this.joy.y*r}}return t.x=e,t.y=i,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeSmoke(){let t=this.smokeP;return this.smokeP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.actP=!1,this.dashP=!1,this.throwP=!1,this.smokeP=!1,this.lx=0,this.ly=0}};var Er=new we,ef=new Ot,Uo=new H,ko=class{constructor(t,e=360){this.max=e,this.mesh=new Un(new de(1,1,1),new Xt,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,ef.set(16777215)),t.add(this.mesh),this.list=[]}burst(t,e,i,s={}){let r=s.count??10,a=s.colors||[16777215];for(let o=0;o<r&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,h=Te(.4,1)*(s.speed??3);this.list.push({x:t+Te(-1,1)*(s.spread??.1),y:e,z:i+Te(-1,1)*(s.spread??.1),vx:Math.cos(l)*h,vy:Te(.5,1)*(s.up??3),vz:Math.sin(l)*h,g:s.gravity??9,life:Te(.6,1)*(s.life??.7),t:0,s:Te(.6,1.1)*(s.size??.12),c:a[Math.random()*a.length|0],rx:Te(0,6),rs:Te(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?Te(2,5):0})}}update(t){let e=this.list,i=0;for(let s=e.length-1;s>=0;s--){let r=e[s];if(r.t+=t,r.t>=r.life){e[s]=e[e.length-1],e.pop();continue}}for(let s of e){let r=Math.exp(-s.drag*t);s.vx*=r,s.vz*=r,s.vy-=s.g*t,s.flut&&(s.vy=Math.max(s.vy,-.9),s.vx+=Math.sin(s.t*s.flut*2)*t*1.5),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.03&&(s.y=.03,s.vy*=-.4,s.vx*=.7,s.vz*=.7),s.rx+=s.rs*t;let a=1-s.t/s.life,o=s.s*Math.min(1,a*2.5);Er.position.set(s.x,s.y,s.z),Er.rotation.set(s.flut?Math.sin(s.rx)*.8:s.rx,s.rx*.7,s.flut?Math.cos(s.rx*.7)*.6:0),Er.scale.set(o*s.kx,o*s.ky,o*s.kz),Er.updateMatrix(),this.mesh.setMatrixAt(i,Er.matrix),this.mesh.setColorAt(i,ef.setHex(s.c)),i++}this.mesh.count=i,i&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},Oo=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t)}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},Fo=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,i,s,r="",a=1){let o=this.pool.pop();o||(o=document.createElement("div"),this.layer.appendChild(o)),o.className="ft "+r,o.textContent=t,o.style.opacity="1",o.style.display="",o.style.animation="none",o.offsetWidth,o.style.animation="",this.live.push({el:o,x:e,y:i,z:s,t:0,life:a})}update(t,e,i,s){for(let r=this.live.length-1;r>=0;r--){let a=this.live[r];if(a.t+=t,a.y+=t*.9,a.t>=a.life){a.el.style.display="none",this.pool.push(a.el),this.live.splice(r,1);continue}Uo.set(a.x,a.y,a.z).project(e),a.el.style.visibility=Uo.z>1?"hidden":"",a.el.style.transform=`translate(${(Uo.x+1)/2*i}px,${(1-Uo.y)/2*s}px) translate(-50%,-50%)`,a.t>a.life*.6&&(a.el.style.opacity=String(1-(a.t-a.life*.6)/(a.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var zo="safehouse-heist-v1",Ni=null,Bo=!1,Cr=!1,re={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let n=window.CrazyGames&&window.CrazyGames.SDK;if(!n)return;await Promise.race([n.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=n.environment,(this.env==="crazygames"||this.env==="local")&&(Ni=n,this.available=!0)}catch(n){console.warn("[SDK] not available:",n&&n.message)}},_c(n){if(Ni)try{n(Ni)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(n=>n.game.loadingStart())},loadingStop(){this._c(n=>n.game.loadingStop())},gameplayStart(){Bo||(Bo=!0,this._c(n=>n.game.gameplayStart()))},gameplayStop(){Bo&&(Bo=!1,this._c(n=>n.game.gameplayStop()))},happytime(){this._c(n=>n.game.happytime())},ad(n){return new Promise(t=>{if(!Ni||!Cr){t(!1);return}let e=!1,i=s=>{e&&this.hooks.adEnd(),t(s)};try{Ni.ad.requestAd(n,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>i(!0),adError:s=>{console.warn("[SDK] ad error",s),i(!1)}})}catch{i(!1)}})},load(){try{let n=null;return Ni&&Ni.data&&(n=Ni.data.getItem(zo)),n==null&&(n=localStorage.getItem(zo)),n&&JSON.parse(n)||{}}catch{return{}}},store(n){let t=JSON.stringify(n);try{Ni&&Ni.data&&Ni.data.setItem(zo,t)}catch{}try{localStorage.setItem(zo,t)}catch{}}};var rx=[{id:"safehouse",num:1,name:"Safe House",load:()=>import("./c-L3XBGY5W.js")},{id:"bank",num:2,name:"The Bank",unlock:"safehouse",load:()=>import("./c-VUP4IWEX.js")},{id:"jewelry",num:3,name:"Jewelry Store",unlock:"bank",load:()=>import("./c-462HNGJ5.js")},{id:"museum",num:4,name:"The Museum",unlock:"jewelry",load:()=>import("./c-K3GIMKCA.js")},{id:"casino",num:5,name:"The Casino",unlock:"museum",load:()=>import("./c-ISIEMIFB.js")}],Mc={};async function nf(n){return Mc[n]||(Mc[n]=(await rx[n].load()).default),Mc[n]}var ax={sleeve:3123354,sleeve2:2526336,cuff:2060134,glove:2763837,glove2:3816786,bar:14168890,barHi:16747146,band:15905076},Go=class{constructor(){this.scene=new Nn,this.camera=new Xe(60,1,.01,10),this.hemi=new On(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Fn(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new Pe({vertexColors:!0});this.root=new Yt,this.scene.add(this.root),this.R=new Yt,this.R.position.set(.2,-.27,0),this.R.rotation.y=.16,this.root.add(this.R),this.L=new Yt,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L),this.setOutfit(null),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}setOutfit(t){t=t||ax;let e=this.mat;for(let h of this.parts||[])h.parent.remove(h),h.geometry.dispose();let i=h=>{let c=new $t;if(c.box(0,-.075,-.285,.14,.14,.17,t.sleeve,{faces:63}),c.box(0,-.082,-.24,.152,.152,.05,t.sleeve2,{faces:63}),c.box(0,-.08,-.36,.148,.148,.1,t.sleeve,{faces:63}),c.box(0,-.082,-.44,.155,.155,.07,t.cuff,{faces:63}),c.box(0,-.082,-.448,.158,.02,.05,t.band,{faces:63}),h){c.box(0,-.065,-.5,.12,.13,.05,t.glove,{faces:63}),c.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),c.box(0,-.07,-.57,.15,.06,.13,t.glove,{faces:63,top:t.glove2});for(let f=0;f<4;f++)c.box(-.055+f*.037,-.072,-.67,.032,.05,.09,t.glove,{faces:63,top:t.glove2});c.box(.09,-.07,-.56,.045,.05,.08,t.glove,{faces:63,ry:-.5})}else{c.box(0,-.07,-.56,.13,.12,.14,t.glove,{faces:63,top:t.glove2});for(let f=0;f<4;f++)c.box(-.045+f*.03,-.01,-.6,.027,.03,.05,t.glove2,{faces:63});c.box(-.07,-.04,-.55,.04,.05,.08,t.glove,{faces:63})}return c.build()},s=new Et(i(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let r=new $t,a=12108496,o=8029334;r.box(0,-.2,0,.034,.08,.034,a,{faces:63}),r.box(0,-.235,.012,.03,.04,.02,o,{faces:63}),r.box(0,-.12,0,.042,.42,.042,t.bar,{faces:63}),r.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),r.box(0,.3,0,.038,.07,.038,a,{faces:63}),r.box(0,.36,-.035,.036,.036,.1,a,{faces:63,top:14673647}),r.box(0,.33,-.095,.034,.05,.03,a,{faces:63}),r.box(0,.305,-.1,.03,.03,.022,a,{faces:63}),r.box(.02,-.05,.022,.006,.3,.002,t.barHi,{faces:16}),this.bar=new Et(r.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.75,.95,.75),this.bar.rotation.set(-.35,0,-.25),this.R.add(this.bar);let l=new Et(i(!0),e);l.scale.set(.56,.6,1),this.L.add(l),this.parts=[s,this.bar,l]}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let i=this.R,s=this.L;this.swX=ti(this.swX,Be(-e.lookX*9e-4,-.06,.06),10,t),this.swY=ti(this.swY,Be(e.lookY*9e-4,-.06,.06),10,t),this.down=ti(this.down,e.busted?.7:0,6,t),this.kick=ti(this.kick,e.dash?1:0,14,t);let r=e.move,a=Math.cos(e.bob)*.014*r,o=-Math.abs(Math.sin(e.bob))*.02*r+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+a,this.swY+o-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let l=.14,h=0,c=0;if(e.punch>0){let u=1-e.punch;u<.3?l=u/.3*.9:u<.55?l=.9-(u-.3)/.25*1.9:l=-1+(u-.55)/.45*1.14,h=-l*.3}else e.crack&&(l=.35+Math.sin(this.t*38)*.08,h=Math.sin(this.t*23)*.1,c=-.06);i.rotation.x=ti(i.rotation.x,l,e.punch>0?40:14,t),i.rotation.z=ti(i.rotation.z,h,20,t),i.position.z=ti(i.position.z,c,12,t);let f=e.grab>0||e.crack?1:0;this.lIn=ti(this.lIn,f,f?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var sf=n=>String(n).padStart(2,"0"),af=(n=new Date)=>`${n.getFullYear()}${sf(n.getMonth()+1)}${sf(n.getDate())}`,Sc=()=>{let n=new Date;return n.setDate(n.getDate()-1),af(n)},ox=(n=new Date)=>n.toLocaleDateString("en-US",{month:"short",day:"numeric"}),rf=[{id:"paranoid",name:"Paranoid Guards",desc:"Guards see 30% further",apply:n=>n.guards.forEach(t=>{t.range*=1.3})},{id:"insomniac",name:"Insomniac Owner",desc:"The owner is awake and patrolling",apply:n=>n.guards.forEach(t=>{if(t.state!=="sleep")return;let e=t.def.path[0];t.state="patrol",t.x=e[0]+.5,t.z=e[1]+.5,t.wp=1,t.c.root.rotation.x=0,t.c.root.position.y=0})},{id:"goldrush",name:"Gold Rush",desc:"Gold and jewels are worth 3x",apply:n=>{for(let t of n.loot)(t.type==="gold"||t.type==="jewel")&&(n.lootTotal+=t.value*2,t.value*=3)}},{id:"butter",name:"Butterfingers",desc:"No coins this time",apply:n=>{n.coinsLeft=0}},{id:"rush",name:"Rapid Response",desc:"Police arrive in 20s",apply:n=>{n.alarmTotal=20}},{id:"hound",name:"Hungry Hound",desc:"The dog is 50% faster",apply:n=>n.dogs.forEach(t=>{t.mul=1.5})}];function Ho(){let n=af(),t=wn(parseInt(n,10)*7919),e=rf[t()*rf.length|0];return{key:n,label:ox(),mutator:e,seed:t()*1e9|0}}var Ps=[{id:"first",icon:"\u{1F4B0}",name:"First Score",desc:"Escape with the stash",check:(n,t)=>t.win},{id:"ghost",icon:"\u{1F47B}",name:"Ghost",desc:"Escape without ever being spotted",check:(n,t)=>t.win&&t.ghost},{id:"speed",icon:"\u26A1",name:"Speed Demon",desc:"Escape in under 45 seconds",check:(n,t)=>t.win&&t.time<45},{id:"pacifist",icon:"\u{1F54A}\uFE0F",name:"Pacifist",desc:"Escape without knocking anyone out",check:(n,t)=>t.win&&t.kos===0},{id:"sweep",icon:"\u{1F9F9}",name:"Clean Sweep",desc:"Escape with 100% of the loot",check:(n,t)=>t.win&&t.frac>=.999},{id:"contracts",icon:"\u{1F4CB}",name:"Overachiever",desc:"Complete all 3 contracts in one run",check:(n,t)=>t.win&&t.contractsDone>=3},{id:"bank",icon:"\u{1F3E6}",name:"Bank Job",desc:"Escape from the Bank",check:(n,t)=>t.win&&t.level==="bank"},{id:"phantom",icon:"\u{1F3AD}",name:"Phantom of the Vault",desc:"Ghost the Bank",check:(n,t)=>t.win&&t.level==="bank"&&t.ghost},{id:"jewelry",icon:"\u{1F48E}",name:"Night Owl",desc:"Escape from the Jewelry Store",check:(n,t)=>t.win&&t.level==="jewelry"},{id:"radio3",icon:"\u{1F4FB}",name:"Smooth Talker",desc:"Fake 3 radio check-ins (total)",check:n=>(n.radio||0)>=3},{id:"museum",icon:"\u{1F3DB}\uFE0F",name:"Night at the Museum",desc:"Escape from the Museum",check:(n,t)=>t.win&&t.level==="museum"},{id:"casino",icon:"\u{1F3B0}",name:"High Roller",desc:"Escape from the Casino",check:(n,t)=>t.win&&t.level==="casino"},{id:"hard",icon:"\u{1F480}",name:"Hardened",desc:"Escape on Hard",check:(n,t)=>t.win&&t.diff==="hard"},{id:"ko10",icon:"\u{1F94A}",name:"Lights Out",desc:"Knock out 10 guards (total)",check:n=>n.kos>=10},{id:"loot50",icon:"\u{1F4B5}",name:"Big Spender",desc:"Steal $50,000 in total",check:n=>n.loot>=5e4},{id:"loot250",icon:"\u{1F911}",name:"Fat Stacks",desc:"Steal $250,000 in total",check:n=>n.loot>=25e4},{id:"hide5",icon:"\u{1F6AA}",name:"Wardrobe Ninja",desc:"Hide in wardrobes 5 times",check:n=>n.hides>=5},{id:"smoke3",icon:"\u{1F4A8}",name:"Now You See Me",desc:"Use 3 smoke bombs",check:n=>n.smokes>=3},{id:"streak3",icon:"\u{1F525}",name:"Regular",desc:"Reach a 3 day daily streak",check:(n,t,e)=>!!(e.streak&&e.streak.n>=3)},{id:"busted10",icon:"\u{1F693}",name:"Frequent Flyer",desc:"Get busted 10 times",check:n=>n.busts>=10}],wc=()=>({runs:0,escapes:0,busts:0,loot:0,kos:0,hides:0,smokes:0,coins:0,contracts:0,best:{}});function Tc(n,t){let e=n.stats=Object.assign(wc(),n.stats||{});if(e.runs++,t.win){e.escapes++,e.loot+=t.loot,e.contracts+=t.contractsDone;let r=e.best[t.level];(!r||t.time<r)&&(e.best[t.level]=t.time)}else e.busts++;e.radio=(e.radio||0)+(t.radio||0),e.kos+=t.kos,e.hides+=t.hides,e.smokes+=t.smokes,e.coins+=t.coins;let i=n.ach=n.ach||{},s=[];for(let r of Ps)!i[r.id]&&r.check(e,t,n)&&(i[r.id]=Date.now(),s.push(r));return s}var Yn=[{id:"classic",name:"Classic",sleeve:3123354,glove:2763837,bar:14168890,band:15905076},{id:"midnight",name:"Midnight",sleeve:3095138,glove:1447711,bar:9082020,band:6272255,need:1},{id:"hazard",name:"Hazard",sleeve:16747050,glove:2763837,bar:15911244,band:2237487,need:3},{id:"camo",name:"Woodland",sleeve:5929530,glove:5913126,bar:4872746,band:13213795,ach:"ghost"},{id:"bubblegum",name:"Bubblegum",sleeve:16748480,glove:16052714,bar:16732064,band:16777215,ach:"pacifist"},{id:"tux",name:"Black Tie",sleeve:2237487,glove:16052714,bar:11745617,band:16777215,ach:"bank"},{id:"royal",name:"Royal",sleeve:6965976,glove:14267482,bar:15250234,band:14267482,need:6},{id:"golden",name:"Golden Boy",sleeve:15250234,glove:15914122,bar:16766810,band:16777215,need:10}],of=n=>({sleeve:n.sleeve,sleeve2:wt(n.sleeve,.85),cuff:wt(n.sleeve,.66),glove:n.glove,glove2:wt(n.glove,1.35)||3816786,bar:n.bar,barHi:wt(n.bar,1.35),band:n.band});function Is(n,t){let e=t.ach||{},i=Object.keys(e).length;return n.ach?!!e[n.ach]:!n.need||i>=n.need}var lf=(n,t)=>n.ach?`Achievement: ${(t.find(e=>e.id===n.ach)||{}).name}`:`${n.need} ${n.need===1?"trophy":"trophies"}`;var cn=[{text:["Move with WASD","Drag the left side to move"],done:n=>Math.hypot(n.player.x-n.L.start.x-.5,n.player.z-n.L.start.y-.5)>1.6},{text:["Move the mouse to look around","Drag the right side to look around"],done:n=>n.lookTotal>1.2},{text:["Walk over cash to grab it","Walk over cash to grab it"],done:n=>n.lootGot>0},{text:["Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)","Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)"],done:n=>n.kos>0||n.doors.some(t=>t.type==="lock"&&(t.open||Math.hypot(n.player.x-t.x-.5,n.player.z-t.y-.5)<2.2))},{text:["Pick the lock: press E when the pin is in the green","Pick the lock: tap \u270B when the pin is in the green"],done:n=>n.doors.every(t=>t.type!=="lock"||t.open)},{text:["Hold E at the safe to crack it","Hold \u270B at the safe to crack it"],done:n=>n.hasStash},{text:["Run back to the van with the stash!","Run back to the van with the stash!"],done:n=>n.state==="escape"}];var Q=n=>document.getElementById(n),lx={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? E / Click = knock out!","Behind a guard? Tap the hand = knock out!"],safe:["Hold E / Mouse to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],dog:["A guard dog! It follows your scent and barks. Coins distract it.","A guard dog! It follows your scent and barks. Coins distract it."],clerk:["The clerk is running for the alarm button! Knock them out first!","The clerk is running for the alarm button! Knock them out first!"],slot:["Slot machine! Hold E to hit a noisy jackpot that lures guards away","Slot machine! Hold \u270B to hit a noisy jackpot that lures guards away"],spot:["Spotlight! Stay out of the moving light pools, or cut the power at the breaker","Spotlight! Stay out of the moving light pools, or cut the power at the breaker"],radio:["A knocked-out guard's radio is calling! Hold E next to him to answer, or backup comes","A knocked-out guard's radio is calling! Hold \u270B next to him to answer, or backup comes"],case:["Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm","Hold \u270B to smash a display case. Loud! Guards who see a broken case raise the alarm"],pick:["Locked! Press E when the pin is in the green zone. Slips are noisy!","Locked! Tap the hand when the pin is in the green zone. Slips are noisy!"],laser:["Laser grid! Time your run, or cut the power at the breaker in the security room","Laser grid! Time your run, or cut the power at the breaker in the security room"],key:["The vault door needs a keycard. Search the offices!","The vault door needs a keycard. Search the offices!"],door:["Got the keycard! Swipe it at the vault door","Got the keycard! Swipe it at the vault door"],drill:["Cracking the vault is LOUD. Guards will hear it!","Cracking the vault is LOUD. Guards will hear it!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],smoke:["C: drop a smoke bomb. Guards cannot see into or through the cloud!","Tap \u{1F4A8} to drop a smoke bomb. Guards cannot see through it!"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},Ac=class{constructor(){this.els={canvas:Q("c"),fxl:Q("fxl"),joyzone:Q("joyzone"),lookzone:Q("lookzone"),joy:Q("joy"),knob:Q("knob"),bAct:Q("bAct"),bDash:Q("bDash"),bThrow:Q("bThrow"),bSmoke:Q("bSmoke")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new H(15,30,40),this.camLook=new H(15,0,9),this._f=new H,this._d=new H,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await re.init(),re.loadingStart(),re.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},re.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=re.load(),this.save.best=this.save.best||{},this.diff=Es[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new To({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(this.dpr),e.toneMapping=hr,e.toneMappingExposure=1.15,this.scene=new Nn,this.scene.background=new Ot(16038282),this.scene.fog=new qs(15778970,16,70),this.sky=Iu(),this.scene.add(this.sky),e.autoClear=!1,this.camera=new Xe(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new Go,this.hemi=new On(16770760,8022152,1.8),this.scene.add(this.hemi);let i=this.sun=new Fn(16769208,1.4);i.position.set(-4,10,6),this.scene.add(i),this.audio=new Do,this.audio.setMuted(!!this.save.muted),this.input=new No(this.els),this.particles=new ko(this.scene),this.shake=new Oo,this.floaters=new Fo(this.els.fxl),this.dust=new Co(this.scene),this.game=new Lo(this),this.levelIdx=0,await this.useLevel(0),this.bindUI(),this.applyOutfit(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),re.loadingStop(),Q("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,i)=>Q(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),i()});t("bPlay",()=>this.playSel());for(let e of["lvl1","lvl2","lvl3","lvl4","lvl5","daily"])Q(e).addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.selectPin(e)});for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.diff=e.dataset.d,this.save.diff=this.diff,re.store(this.save),this.showMenu()});t("bResume",()=>this.resume()),t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>{this.levelIdx===0&&this.mode!=="daily"&&this.bankUnlocked()?this.start("classic",1):this.levelIdx===1&&this.jewelryUnlocked()?this.start("classic",2):this.levelIdx===2&&this.museumUnlocked()?this.start("classic",3):this.levelIdx===3&&this.casinoUnlocked()?this.start("classic",4):this.showSoon()}),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bTrophy",()=>this.showTrophies()),t("bOutfit",()=>this.showOutfits()),t("bOfBack",()=>this.showMenu()),t("bTut",()=>this.start("tutorial",0)),Q("tut").addEventListener("pointerdown",e=>{this.input.touch&&this.game.tut&&(e.stopPropagation(),this.skipTutorial())}),t("bTrBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{e==="KeyT"&&this.state==="play"&&this.game.tut&&this.skipTutorial(),(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.playSel()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}screen(t){for(let i of document.querySelectorAll(".screen"))i.classList.toggle("hidden",i.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),Q("fp").classList.toggle("hidden",!e),Q("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),Q("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){re.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[Xn("safehouse",this.diff)],e=this.bankUnlocked(),i=this.save.best[Xn("bank",this.diff)];Q("lvl2").classList.toggle("lock",!e),Q("lvl2art").textContent=e?"\u{1F3E6}":"\u{1F512}",Q("lvl2stars").innerHTML=e?this.starsHTML(i?i.stars:0):"",Q("lvl2best").textContent=e?i?"Best "+Ye(i.score):"New!":"Escape Safe House to unlock";let s=this.jewelryUnlocked(),r=this.save.best[Xn("jewelry",this.diff)];Q("lvl3").classList.toggle("lock",!s),Q("lvl3art").textContent=s?"\u{1F48E}":"\u{1F512}",Q("lvl3stars").innerHTML=s?this.starsHTML(r?r.stars:0):"";let a=this.casinoUnlocked(),o=this.save.best[Xn("casino",this.diff)];Q("lvl5").classList.toggle("lock",!a),Q("lvl5art").textContent=a?"\u{1F3B0}":"\u{1F512}",Q("lvl5stars").innerHTML=a?this.starsHTML(o?o.stars:0):"",Q("lvl5best").textContent=a?o?"Best "+Ye(o.score):"New!":"Escape the Museum to unlock";let l=this.museumUnlocked(),h=this.save.best[Xn("museum",this.diff)];Q("lvl4").classList.toggle("lock",!l),Q("lvl4art").textContent=l?"\u{1F3DB}\uFE0F":"\u{1F512}",Q("lvl4stars").innerHTML=l?this.starsHTML(h?h.stars:0):"",Q("lvl4best").textContent=l?h?"Best "+Ye(h.score):"New!":"Escape the Jewelry Store to unlock",Q("lvl3best").textContent=s?r?"Best "+Ye(r.score):"New!":"Escape the Bank to unlock",this.renderSel();for(let f of document.querySelectorAll("#diff button"))f.classList.toggle("on",f.dataset.d===this.diff);Q("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),Q("lvl1best").textContent=t?"Best "+Ye(t.score):"New!",this.daily=Ho();let c=(this.save.daily||{})[this.daily.key];Q("dMut").textContent=this.daily.mutator.name;{let f=new Date;Q("dArt").innerHTML=`<span style="font-size:20px">${f.getDate()}</span>`}Q("dDesc").textContent=this.daily.mutator.desc,Q("dBest").textContent=(c?"Today "+Ye(c.score):this.daily.label)+(this.save.streak&&this.save.streak.n>1&&(this.save.streak.last===this.daily.key||this.save.streak.last===Sc())?` \xB7 \u{1F525}${this.save.streak.n}`:""),this.screen("menu")}runRecord(t,e){let i=this.game;return{win:t,level:this.level.id,diff:this.mode==="daily"?"daily":this.diff,ghost:t&&e.ghost,time:i.time,kos:i.kos,frac:i.lootGot/i.lootTotal,loot:i.lootGot,contractsDone:t?e.contracts.filter(s=>s.st==="ok").length:0,hides:i.hidesUsed,smokes:i.smokesUsed,coins:i.coinsThrown,radio:i.radioFaked}}applyOutfit(){let t=Yn.find(e=>e.id===this.save.outfit);return(!t||!Is(t,this.save))&&(t=Yn[0]),this.vm.setOutfit(of(t)),t}showOutfits(){re.gameplayStop(),this.state="outfits";let t=this.applyOutfit(),e=i=>"#"+i.toString(16).padStart(6,"0");Q("ofGrid").innerHTML=Yn.map(i=>{let s=Is(i,this.save);return`<button class="of ${s?"":"lock"} ${i.id===t.id?"on":""}" data-id="${i.id}">
        <span class="sw"><i style="background:${e(i.sleeve)}"></i><i style="background:${e(i.glove)}"></i><i style="background:${e(i.bar)}"></i></span>
        <b>${i.name}</b><small>${s?i.id===t.id?"EQUIPPED":"Tap to wear":"\u{1F512} "+lf(i,Ps)}</small></button>`}).join("");for(let i of document.querySelectorAll("#ofGrid .of"))i.addEventListener("click",s=>{s.stopPropagation();let r=Yn.find(a=>a.id===i.dataset.id);if(!Is(r,this.save)){this.audio.play("nope"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake");return}this.audio.play("pick",4),this.save.outfit=r.id,re.store(this.save),this.showOutfits()});this.screen("outfits")}showTrophies(){re.gameplayStop(),this.state="trophies";let t=Object.assign(wc(),this.save.stats||{}),e=this.save.ach||{},i=r=>t.best[r]!=null?Sr(t.best[r]):"\u2014",s=[["Heists",t.runs],["Escapes",t.escapes],["Busted",t.busts],["Total loot",Ye(t.loot)],["Guards KO",t.kos],["Contracts",t.contracts],["Best Safe House",i("safehouse")],["Best Bank",i("bank")]];Q("trStats").innerHTML=s.map(([r,a])=>`<div><small>${r}</small><b>${a}</b></div>`).join(""),Q("trAch").innerHTML=Ps.map(r=>`<div class="ach ${e[r.id]?"on":""}"><i>${e[r.id]?r.icon:"\u{1F512}"}</i><b>${r.name}</b><small>${r.desc}</small></div>`).join(""),Q("trCount").textContent=`${Object.keys(e).filter(r=>Ps.some(a=>a.id===r)).length} / ${Ps.length}`,this.screen("trophies")}showAchToast(t){Q("rAch").innerHTML=t.length?"\u{1F3C6} Unlocked: "+t.map(e=>`<b>${e.icon} ${e.name}</b>`).join(" \xB7 "):"",Q("rAch").classList.toggle("hidden",!t.length),t.length&&setTimeout(()=>this.audio.play("contract"),1600)}pinLocked(t){return t==="lvl2"?!this.bankUnlocked():t==="lvl3"?!this.jewelryUnlocked():t==="lvl4"?!this.museumUnlocked():t==="lvl5"?!this.casinoUnlocked():!1}selectPin(t){if(this.sel=t,this.save.sel=t,this.pinLocked(t)){let e=Q(t);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}this.renderSel()}renderSel(){let t=this.sel||this.save.sel||"lvl1";Q(t)||(t="lvl1"),this.sel=t;for(let a of["lvl1","lvl2","lvl3","lvl4","lvl5","daily"])Q(a).classList.toggle("on",a===t);let e=Q(t),i=this.pinLocked(t);Q("selName").textContent=t==="daily"?"Daily: "+Q("dMut").textContent:e.querySelector(".t").textContent;let s=e.querySelector(".stars");Q("selStars").innerHTML=s?s.innerHTML:"",Q("selSub").textContent=t==="daily"?Q("dDesc").textContent+" \xB7 "+Q("dBest").textContent:e.querySelector(".best").textContent,Q("bPlay").textContent=i?"\u{1F512} LOCKED":"PLAY",Q("bPlay").classList.toggle("dis",i);let r=0;for(let a of["safehouse","bank","jewelry","museum","casino"])r+=Math.max(...["","_easy","_hard"].map(o=>(this.save.best[a+o]||{stars:0}).stars));Q("starTotal").textContent=`\u2605 ${r}/15`}playSel(){let t=this.sel||"lvl1";if(this.pinLocked(t)){this.audio.play("nope"),this.selectPin(t);return}t==="daily"?this.start("daily"):this.start("classic",{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4}[t])}drawRecap(t,e){let i=Q(t),s=this.game,r=s.L,a=this.mmBase;if(!i||!a)return;let o=this.mmS,l=Math.min(260/a.width,170/a.height);i.width=Math.round(a.width*l*2),i.height=Math.round(a.height*l*2);let h=i.getContext("2d"),c=i.width/a.width*o,f=s.trail.slice(),u=s.marks.slice();f.push([s.player.x,s.player.z,f.length?f[f.length-1][2]:0]);let p=performance.now(),g=1600,_=this.recapId=(this.recapId||0)+1,d=(y,w)=>{let A=y.x*c,x=y.z*c,M=5.5;h.globalAlpha=w,y.t==="ko"?(h.strokeStyle="#c77dff",h.lineWidth=3,h.beginPath(),h.moveTo(A-M,x-M),h.lineTo(A+M,x+M),h.moveTo(A+M,x-M),h.lineTo(A-M,x+M),h.stroke()):y.t==="alarm"||y.t==="caught"?(h.fillStyle="#ff3b4e",h.beginPath(),h.arc(A,x,M+2,0,6.3),h.fill(),h.fillStyle="#fff",h.font="bold 11px sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText(y.t==="caught"?"\u2716":"!",A,x+1)):y.t==="safe"?(h.fillStyle="#ffd23f",h.fillRect(A-M,x-M,M*2,M*2),h.strokeStyle="#1c1330",h.lineWidth=2,h.strokeRect(A-M,x-M,M*2,M*2)):(h.fillStyle=y.t==="cash"?"#4fe0a0":"#ffc94a",h.beginPath(),h.arc(A,x,y.t==="cash"?3:4.5,0,6.3),h.fill()),h.globalAlpha=1},m=()=>{if(_!==this.recapId)return;let y=Math.min(1,(performance.now()-p)/g),w=Math.max(1,Math.floor(f.length*y));h.drawImage(a,0,0,i.width,i.height),h.fillStyle="rgba(28,19,48,.35)",h.fillRect(0,0,i.width,i.height),h.lineCap="round",h.lineJoin="round",h.lineWidth=3.5;for(let M=1;M<w;M++){let D=f[M-1],P=f[M];h.strokeStyle=P[2]?"#ff5a6a":"#4fe0a0",h.beginPath(),h.moveTo(D[0]*c,D[1]*c),h.lineTo(P[0]*c,P[1]*c),h.stroke()}let A=Math.floor(u.length*y);for(let M=0;M<u.length;M++)(M<A||y>=1)&&d(u[M],1);let x=f[w-1];x&&(h.fillStyle="#fff6e8",h.strokeStyle="#1c1330",h.lineWidth=2,h.beginPath(),h.arc(x[0]*c,x[1]*c,5,0,6.3),h.fill(),h.stroke()),y<1&&requestAnimationFrame(m)};m();let v=f.length?Math.round(f.filter(y=>y[2]).length/f.length*100):0,b=Q(t+"Lg");b&&(b.innerHTML=`<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${v}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">\u2715</b> KO`)}showSoon(){re.gameplayStop(),this.state="soon",Q("soonName").textContent="More heists",Q("soonList").innerHTML=["Downtown jewelry store","Penthouse with laser grids","Night train job"].map(t=>`<li>${t}</li>`).join(""),this.screen("soon")}casinoUnlocked(){let t=this.save.best;return!!(t.museum||t.museum_easy||t.museum_hard||this.save.casinoOpen)}museumUnlocked(){let t=this.save.best;return!!(t.jewelry||t.jewelry_easy||t.jewelry_hard||this.save.museumOpen)}jewelryUnlocked(){let t=this.save.best;return!!(t.bank||t.bank_easy||t.bank_hard||this.save.jewelryOpen)}bankUnlocked(){let t=this.save.best;return!!(t.safehouse||t.safehouse_easy||t.safehouse_hard||this.save.bankOpen)}async useLevel(t){if(this.loadedIdx===t)return;this.level=await nf(t),this.game.load(this.level),this.buildMinimap(),this.loadedIdx=t;let e=!!this.level.night;this.scene.background.setHex(e?1317427:16038282),this.scene.fog.color.setHex(e?1712704:15778970),this.scene.fog.near=e?10:16,this.scene.fog.far=e?48:70,this.sky.material.color.setHex(e?2502746:16777215),this.hemi.intensity=e?1.1:1.8,this.hemi.color.setHex(e?12109055:16770760),this.sun.intensity=e?.5:1.4,this.sun.color.setHex(e?10465535:16769208),this.vm.hemi.intensity=e?1.6:2.4,this.renderer.compile(this.scene,this.camera)}starsHTML(t){let e="";for(let i=0;i<3;i++)e+=`<span class="${i<t?"on":""}">\u2605</span>`;return e}async start(t,e){if(t&&(this.mode=t),this.mode||(this.mode="classic"),!t&&this.mode==="tutorial"&&this.save.tutDone&&(this.mode="classic"),this.mode==="classic"&&(e==null||e===0)&&!this.save.tutDone&&(this.levelIdx||0)===0&&(this.mode="tutorial"),(this.mode==="daily"||this.mode==="tutorial")&&(e=0),e!=null&&(this.levelIdx=e),this.loadedIdx!==this.levelIdx&&await this.useLevel(this.levelIdx),this.mode==="daily"&&(!this.daily||this.daily.key!==Ho().key)&&(this.daily=Ho()),this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.onSmoke(this.game.smokesLeft),this.renderContracts(this.game.contracts),this.tutStep=this.game.tut?0:cn.length,Q("tut").dataset.k="",clearTimeout(this.whyT),Q("alarmwhy").classList.add("hidden"),this.mode==="daily"){let i=Q("ctoast");i.innerHTML=`<small>DAILY CHALLENGE \xB7 ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),3200)}else Q("ctoast").classList.add("hidden");this.hint("move"),re.gameplayStart()}async retry(){await this.maybeMidgame(),this.start()}pause(){this.state==="play"&&(this.audio.siren(!1),this.state="pause",re.gameplayStop(),this.screen("pause"))}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),re.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),re.store(this.save),this.updateMuteIcon()}updateMuteIcon(){Q("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!Cr||!re.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await re.ad("midgame"))}async reviveAd(){if(!Cr||!re.available||this.game.revived)return;this.state="ad",await re.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),re.gameplayStart()):(this.state="busted",Q("bRevive").classList.add("hidden"))}hint(t){!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t)||this.game&&this.game.tut&&["move","loot","safe","pick","cone","stash"].includes(t)||this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=Q("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=lx[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let i=Q("prompt"),s=Q("ring"),r=this.input&&this.input.touch,a=(this.level&&this.level.safeName?this.level.safeName:"safe").toUpperCase(),o=t==="slot"?r?"HOLD \u270B TO PULL THE LEVER":"HOLD E: PULL THE LEVER":t==="radio"?r?"HOLD \u270B TO ANSWER THE RADIO":'HOLD E: ANSWER "ALL CLEAR"':t==="case"?r?"HOLD \u270B TO SMASH":"HOLD E TO SMASH THE CASE":t==="pick"?r?"TAP \u270B TO PICK THE LOCK":"E: PICK THE LOCK":t==="picking"?r?"TAP \u270B IN THE GREEN \xB7 MOVE TO STOP":"E IN THE GREEN \xB7 MOVE TO STOP":t==="breaker"?r?"HOLD \u270B TO CUT POWER":"HOLD E TO CUT THE POWER":t==="door"?r?"TAP \u270B TO OPEN":"E: SWIPE KEYCARD":t==="locked"?"LOCKED: FIND THE KEYCARD":t==="hide"?r?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?r?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?r?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?r?"HOLD \u270B TO CRACK "+a:"HOLD E / CLICK TO CRACK "+a:t==="ko"?r?"TAP \u270B TO KNOCK OUT":"E / CLICK: KNOCK OUT":"";i.dataset.k!==t&&(i.dataset.k=t,i.textContent=o,i.classList.toggle("hidden",!t),Q("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t),this.els.bAct.lastChild.textContent=t==="slot"?"PULL":t==="radio"?"ANSWER":t==="case"?"SMASH":t==="pick"||t==="picking"?"PICK":t==="breaker"?"CUT":t==="door"?"OPEN":t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="panel"||t==="breaker"||t==="case"||t==="radio"||t==="slot")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=Q("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let i=this.game;if(Q("lootv").textContent=Ye(i.lootGot),Q("lootp").textContent=Math.round(i.lootGot/i.lootTotal*100)+"%",Q("lootbar").style.width=Math.min(100,i.lootGot/i.lootTotal*100)+"%",Q("lootbar").classList.toggle("star",i.lootGot/i.lootTotal>=.7),e)return;let s=Q("loot");s.classList.remove("punch","bigpunch"),s.offsetWidth,s.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(Q("alarm").classList.toggle("hidden",!t),Q("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let i=Q("alarmwhy");i.textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>i.classList.add("hidden"),2600)}}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,Q("alarmt").textContent=Sr(e),Q("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t){Q("ctr").innerHTML=t.map(e=>`<li class="${e.st}"><i></i>${e.text}<b>+${Ye(e.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let i=Q("ctoast");i.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${Ye(t.bonus)}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onPick(t){let e=Q("lockpick");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");let i=e.querySelector(".lp-zone"),s=e.querySelector(".lp-needle");i.style.left=((t.zone-t.w/2)*100).toFixed(1)+"%",i.style.width=(t.w*100).toFixed(1)+"%",s.style.left=(t.pos*100).toFixed(1)+"%",e.querySelectorAll(".lp-pins b").forEach((r,a)=>r.classList.toggle("on",a<t.pin)),e.classList.toggle("cool",t.cool>0)}onKey(t){if(Q("key").classList.toggle("hidden",!t),t){let e=Q("key");e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch")}}onHide(t){Q("slats").classList.toggle("hidden",!t),Q("xh").classList.toggle("hidden",t)}onSmoke(t){let e=Q("smokep");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bSmoke.lastChild.textContent="\xD7"+t,this.els.bSmoke.classList.toggle("empty",t===0)}onInSmoke(t){this.inSmokeOn!==t&&(this.inSmokeOn=t,Q("smokeov").classList.toggle("on",t))}onCoins(t){let e=Q("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}flash(t){let e=Q("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){Q("touch").classList.add("hidden"),Q("fp").classList.add("hidden"),Q("hud").classList.add("hidden"),Q("alarm").classList.add("hidden"),this.audio.siren(!1),this.input.exitLock()}onBusted(){this.state="busted",this.audio.siren(!1),re.gameplayStop(),Q("bRevive").classList.toggle("hidden",!Cr||!re.available||this.game.revived),Q("bustTip").textContent=this.game.policeBusted?"The police arrived! Knock out alerted guards before they radio in, or disarm the keypad by the front door.":["Tip: guards can't see behind them. Sneak up and knock them out!","Tip: dashing is loud. Walk near guards and the sleeping owner.","Tip: break line of sight and alerted guards will lose you.","Tip: the camera in the office sweeps. Time your move!","Tip: try the side door on the east of the house."][Math.random()*5|0];let t=Tc(this.save,this.runRecord(!1));re.store(this.save),Q("bAch").innerHTML=t.map(e=>`\u{1F3C6} ${e.icon} ${e.name} unlocked!`).join("<br>"),this.screen("busted"),this.drawRecap("bMap",!1)}onWin(t){this.state="result",this.audio.siren(!1),Q("alarm").classList.add("hidden"),Q("siren").classList.remove("on"),re.gameplayStop(),re.happytime();let e=t.stars.filter(Boolean).length,i,s,r;if(t.daily){let g=this.daily.key,_=this.save.daily=this.save.daily||{};i=_[g]||{score:0,stars:0},s=t.score>i.score,_[g]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},r=_[g].score;let d=this.save.streak||{last:"",n:0};d.last!==g&&(d.n=d.last===Sc()?d.n+1:1,d.last=g),this.save.streak=d;for(let m of Object.keys(_).sort().slice(0,-14))delete _[m]}else{let g=Xn(this.level.id,this.diff);i=this.save.best[g]||{score:0,stars:0},s=t.score>i.score,this.save.best[g]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},r=this.save.best[g].score}this.save.contracts=(this.save.contracts||0)+t.contracts.filter(g=>g.st==="ok").length,re.store(this.save),Q("rStars").innerHTML=this.starsHTML(0);let a=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];Q("rGoals").innerHTML=t.stars.map((g,_)=>`<li class="${g?"ok":""}">${g?"\u2714":"\u2716"} ${a[_]}</li>`).join(""),Q("rLoot").textContent=Ye(t.loot),Q("rTime").textContent=Sr(t.time)+(t.timeBonus?`  (+${Ye(t.timeBonus)})`:""),Q("rGhost").textContent=t.ghost?"+"+Ye(t.ghostBonus):"\u2014",Q("rScore").textContent="$0",Q("rCtr").innerHTML=t.contracts.map(g=>`<li class="${g.st==="ok"?"ok":"no"}">${g.st==="ok"?"\u2714":"\u2716"} ${g.text}<b>${g.st==="ok"?"+"+Ye(g.bonus):"\u2014"}</b></li>`).join(""),Q("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),Q("rBest").textContent=(s?"NEW BEST!":"Best "+Ye(r))+" \xB7 "+t.diff+(t.daily?` \xB7 \u{1F525}${this.save.streak.n} day streak`:""),Q("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,Q("rBest").classList.toggle("new",s);let o=this.game.tut&&!this.save.tutDone;this.game.tut&&(this.save.tutDone=!0);let l=Tc(this.save,this.runRecord(!0,t)),h=Yn.filter(g=>g.id!=="classic"&&Is(g,this.save)&&!(this.save.seenOut||[]).includes(g.id));this.save.seenOut=Yn.filter(g=>Is(g,this.save)).map(g=>g.id),this.showAchToast(l),o&&(Q("rAch").innerHTML="\u{1F393} <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now."+(Q("rAch").innerHTML?"<br>"+Q("rAch").innerHTML:""),Q("rAch").classList.remove("hidden")),h.length&&(Q("rAch").innerHTML+=`<br>\u{1F9E4} New outfit: <b>${h.map(g=>g.name).join(", ")}</b>`,Q("rAch").classList.remove("hidden")),re.store(this.save),this.screen("result"),this.drawRecap("rMap",!0);let c=Q("rStars").children;t.stars.forEach((g,_)=>{g&&setTimeout(()=>{this.state==="result"&&(c[_].classList.add("on","pop"),this.audio.play("star",_),this.shake.add(.12))},450+_*380)});let f=performance.now(),u=1100,p=()=>{let g=Math.min(1,(performance.now()-f)/u);Q("rScore").textContent=Ye(t.score*(1-Math.pow(1-g,3))),g<1&&this.state==="result"&&requestAnimationFrame(p)};p()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let i=this.state;i==="play"||i==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(i==="menu"||i==="soon")&&this.game.update(e,!0),i!=="pause"&&i!=="ad"&&(this.particles.update(e),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),i!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),this.dust.points.visible=i!=="menu"&&i!=="soon",this.floaters.update(i==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),i==="play"&&this.updateHud(),this.audio.tension=i==="play"?this.game.tension:0,this.audio.mode=i==="menu"||i==="soon"||i==="trophies"||i==="outfits"?"menu":"game",Q("vignette").style.opacity=i==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),i==="outfits"&&(this.vm.mat.color.setRGB(1.05,1,.95),this.vm.update(e,{move:0,bob:0,lookX:0,lookY:0,punch:0,crack:!1,grab:0,dash:!1,busted:!1})),this.vm.visible=i==="outfits"||(i==="play"||i==="busted"||i==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}skipTutorial(){this.save.tutDone=!0,re.store(this.save),this.tutStep=cn.length,Q("tut").classList.add("hidden"),this.audio.play("click")}updateTutorial(){let t=Q("tut"),e=this.game;if(!e.tut||this.tutStep>=cn.length){t.classList.add("hidden");return}if(this.tutStep==null&&(this.tutStep=0),cn[this.tutStep].done(e)&&(this.tutStep++,this.audio.play("star",Math.min(2,this.tutStep%3)),t.classList.remove("done"),t.offsetWidth,t.classList.add("done"),this.tutStep>=cn.length)){setTimeout(()=>t.classList.add("hidden"),900);return}let s=cn[this.tutStep],r=this.tutStep+(this.input.touch?"t":"k");t.dataset.k!==r&&(t.dataset.k=r,t.querySelector("small").textContent=`TUTORIAL ${this.tutStep+1}/${cn.length}`,t.querySelector("span").textContent=s.text[this.input.touch?1:0],t.querySelector("em").textContent=this.input.touch?"tap to skip":"T to skip",t.querySelector("i").style.width=this.tutStep/cn.length*100+"%"),t.classList.toggle("hidden",e.alarm||e.state!=="play")}updateHud(){this.updateTutorial();let t=this.game,e=t.player,i=Math.floor(t.time);i!==this.lastSec&&(this.lastSec=i,Q("time").textContent=Sr(i)),this.drawMinimap();let s=Q("wp"),r=t.objectiveTarget(),a=r.x,o=r.z,l=r.label,h=Math.hypot(a-e.x,o-e.z);if(t.state!=="play"||h<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let f=this._d.set(a,1.1,o).project(this.camera),u=f.x,p=f.y,g=f.z>1;g&&(u=-u,p=-p);let _=.88,d=g||Math.abs(u)>_||Math.abs(p)>_;if(d){let v=_/Math.max(Math.abs(u),Math.abs(p),.001);u*=v,p*=v,g&&Math.abs(p)<_-.01&&(p=-_)}d&&u<-.4&&p>-.3&&(u=-.4),s.classList.toggle("edge",d),s.style.transform=`translate(${(u+1)/2*this.w}px,${(1-p)/2*this.h}px) translate(-50%,-50%)`;let m=l+" "+Math.round(h*1.5)+"m";s.dataset.t!==m&&(s.dataset.t=m,s.lastChild.textContent=m)}let c=Q("ind");t.guards.forEach((f,u)=>{let p=c.children[u];p||(p=document.createElement("i"),c.appendChild(p));let g=f.state==="alert"||f.state==="flee",_=!g&&(f.susp>.04||f.state==="investigate"||f.state==="search");if(!g&&!_){p.style.display="none";return}let d=Ne(e.face,Math.atan2(f.x-e.x,f.z-e.z));p.style.display="",p.className=g?"alert":"",p.style.opacity=g?1:(.35+f.susp*.65).toFixed(2),p.style.transform=`translate(-50%,-50%) rotate(${-d*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let s=i.getContext("2d");for(let a=0;a<t.H;a++)for(let o=0;o<t.W;o++){let l=a*t.W+o,h=t.ch[l];s.fillStyle=h==="#"?"#1d2140":!t.walk[l]&&!t.outdoor[l]?"#a7a3bd":t.outdoor[l]?t.floor[l]==="road"?"#7d8596":"#5fae4c":"#efe9df",s.fillRect(o*e,a*e,e,e)}this.mmBase=i,this.mmS=e;let r=Q("mm");r.width=i.width,r.height=i.height,this.mmCtx=r.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,i=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let l of t.loot)e.fillStyle=l.type==="cash"?"#2fbf5a":l.type==="gold"?"#f5b301":l.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(l.x*i-1.5,l.z*i-1.5,3,3);t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*i,(t.L.safe.y+.15)*i,i*.7,i*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*i,t.L.exit.z*i,i,0,6.3),e.stroke());for(let l of t.guards){let h=l.state==="ko"||l.state==="getup"||l.state==="sleep",c=l.state==="alert"||l.state==="flee"?"#ff3b4e":l.kind==="clerk"?"#f4f1ea":l.susp>.25?"#ff9f1c":h?"#8a8fae":"#3f6fe0";if(!h){e.fillStyle=l.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(l.x*i,l.z*i);let f=-l.face+Math.PI/2;e.arc(l.x*i,l.z*i,l.range*i,f-l.fov/2,f+l.fov/2),e.closePath(),e.fill()}e.fillStyle=c,e.beginPath(),e.arc(l.x*i,l.z*i,2.6,0,6.3),e.fill()}if(!t.powerOff)for(let l of t.spots)e.fillStyle=l.cool>0?"rgba(255,48,64,.6)":"rgba(255,240,176,.55)",e.beginPath(),e.arc(l.x*i,l.z*i,l.def.r*i,0,6.3),e.fill();if(!t.powerOff)for(let l of t.lasers)e.fillStyle=l.on?"#ff3040":"rgba(255,48,64,.3)",l.alongX?e.fillRect(l.lo*i,l.line*i-1,(l.hi-l.lo)*i,2):e.fillRect(l.line*i-1,l.lo*i,2,(l.hi-l.lo)*i);for(let l of t.doors)e.fillStyle=l.open?"#3ddc84":"#ff3b4e",e.fillRect(l.x*i,l.y*i,i,i);for(let l of t.keyMeshes)l.m.visible&&(e.fillStyle="#2f7ae8",e.fillRect(l.x*i+.5,l.y*i+.5,i-1,i-1));for(let l of t.dogs)e.fillStyle=l.state==="bark"||l.state==="barkHide"?"#ff3b4e":"#c98a4a",e.fillRect(l.x*i-2,l.z*i-2,4,4);let r=-s.face+Math.PI/2,a=s.x*i,o=s.z*i;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(a+Math.cos(r)*5,o+Math.sin(r)*5),e.lineTo(a+Math.cos(r+2.5)*4,o+Math.sin(r+2.5)*4),e.lineTo(a+Math.cos(r-2.5)*4,o+Math.sin(r-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,i=e.L,s=this.camera,r=this.aspect<1?1+(1-this.aspect)*1.6:1,a;if(this.state==="menu"||this.state==="soon"){let o=this.time*.07,l=this._f.set(i.W/2,0,i.H/2-2);s.position.set(l.x+Math.sin(o)*17*r,19*r,l.z+Math.cos(o)*17*r),s.lookAt(l),a=42}else{e.applyCamera(s,t),a=(this.aspect<1?84:70)+e.fovKick;let o=Q("speed"),l=Math.min(1,e.fovKick/9).toFixed(2);o.dataset.o!==l&&(o.dataset.o=l,o.style.opacity=l)}Math.abs(s.fov-a)>.01&&(s.fov=a,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},cf=new Ac;window.__app=cf;cf.boot().catch(n=>{console.error(n);let t=Q("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
