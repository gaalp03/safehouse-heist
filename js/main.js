var Ih=0,Ul=1,Lh=2;var mr=1,kh=2,Ts=3,Rn=0,Ze=1,Ie=2,Kn=0,As=1,qe=2,Ol=3,Fl=4,Dh=5;var $n=100,Nh=101,Uh=102,Oh=103,Fh=104,zh=200,Bh=201,Hh=202,Gh=203,zl=204,Bl=205,Vh=206,Wh=207,Xh=208,qh=209,Yh=210,Kh=211,$h=212,Zh=213,Jh=214,ha=0,ua=1,fa=2,gs=3,da=4,pa=5,ma=6,ga=7,Wa=0,jh=1,Qh=2,Yi=0,Hl=1,Gl=2,Vl=3,gr=4,Wl=5,Xl=6,ql=7;var Yl=300,Zn=301,Es=302,Xa=303,qa=304,Mn=1e3,li=1001,xa=1002,Xe=1003,tu=1004;var xr=1005;var ai=1006,Ya=1007;var ln=1008;var ci=1009,Kl=1010,$l=1011,Cs=1012,Ka=1013,Pi=1014,bi=1015,Ii=1016,$a=1017,Za=1018,Jn=1020,Zl=35902,Jl=35899,jl=1021,Ql=1022,Li=1023,rn=1026,cn=1027,Ja=1028,ja=1029,Pn=1030,Qa=1031;var to=1033,yr=33776,vr=33777,_r=33778,br=33779,eo=35840,io=35841,no=35842,so=35843,ro=36196,ao=37492,oo=37496,lo=37488,co=37489,Mr=37490,ho=37491,uo=37808,fo=37809,po=37810,mo=37811,go=37812,xo=37813,yo=37814,vo=37815,_o=37816,bo=37817,Mo=37818,So=37819,wo=37820,To=37821,Ao=36492,Eo=36494,Co=36495,Ro=36283,Po=36284,Sr=36285,Io=36286;var Ks=2300,ya=2301,la=2302,Cl=2303,Rl=2400,Pl=2401,Il=2402;var eu=3200;var Lo=0,iu=1,hn="",Ke="srgb",$s="srgb-linear",Zs="linear",oe="srgb";var ca=7680;var nu=519,su=512,ru=513,au=514,tc=515,ou=516,lu=517,ec=518,ic=519,cu=35044;var nc="300 es",_i=2e3,xs=2001;function Bf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hu(){let n=Js("canvas");return n.style.display="block",n}var th={},ys=null;function sc(...n){let t="THREE."+n.shift();ys?ys("log",t,...n):console.log(t,...n)}function uu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=uu(n);let t="THREE."+n.shift();if(ys)ys("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=uu(n);let t="THREE."+n.shift();if(ys)ys("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ys(...n){let t=n.join(" ");t in th||(th[t]=!0,Nt(...n))}function fu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var du={[ha]:ha,[fa]:ma,[da]:da,[gs]:pa,[ua]:ua,[ma]:fa,[ga]:ga,[pa]:gs},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,va=180/Math.PI;function wr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[e&63|128]+ei[e>>8&255]+"-"+ei[e>>16&255]+ei[e>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function Gf(n,t){return(n%t+t)%t}function al(n,t,e){return(1-e)*n+e*t}function pu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(n,t){if(t.constructor===Float32Array)return n;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Wf(n,t){if(t.constructor===Float32Array)return n;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var hc=class hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;var qt=hc,Bi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uc=class uc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;var X=uc,ol=new X,eh=new Bi,fc=class fc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],v=s[1],b=s[4],_=s[7],w=s[2],T=s[5],x=s[8];return r[0]=a*y+o*v+l*w,r[3]=a*p+o*b+l*T,r[6]=a*m+o*_+l*x,r[1]=c*y+h*v+u*w,r[4]=c*p+h*b+u*T,r[7]=c*m+h*_+u*x,r[2]=f*y+d*v+g*w,r[5]=f*p+d*b+g*T,r[8]=f*m+d*_+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(t,e)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;var Bt=fc,ll=new Bt,ih=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){let n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=sn(s.r),s.g=sn(s.g),s.b=sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hn?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:t,whitePoint:i,transfer:Zs,toXYZ:ih,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:ih,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var Qt=Xf();function sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var es,_a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{es===void 0&&(es=Js("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sn(e[i]/255)*255):e[i]=sn(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qf=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Yf=0,hl=new X,oi=class n extends zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=li,s=li,r=ai,a=ln,o=Li,l=ci,c=n.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=wr(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=Yl;oi.DEFAULT_ANISOTROPY=1;var dc=class dc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(d+1)/2,w=(m+1)/2,T=(h+f)/4,x=(u+y)/4,M=(g+p)/4;return b>_&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=x/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=x/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-y)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dc.prototype.isVector4=!0;var ve=dc,ba=class extends zi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new oi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends ba{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},js=class extends oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends oi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Va=class Va{constructor(t,e,i,s,r,a,o,l,c,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,f,d,g,y,p)}set(t,e,i,s,r,a,o,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Va().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kf,t,$f)}lookAt(t,e,i){let s=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),gn.crossVectors(i,hi),gn.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),gn.crossVectors(i,hi)),gn.normalize(),Or.crossVectors(hi,gn),s[0]=gn.x,s[4]=Or.x,s[8]=hi.x,s[1]=gn.y,s[5]=Or.y,s[9]=hi.y,s[2]=gn.z,s[6]=Or.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],v=i[3],b=i[7],_=i[11],w=i[15],T=s[0],x=s[4],M=s[8],k=s[12],P=s[1],L=s[5],O=s[9],C=s[13],E=s[2],z=s[6],U=s[10],D=s[14],q=s[3],G=s[7],Z=s[11],j=s[15];return r[0]=a*T+o*P+l*E+c*q,r[4]=a*x+o*L+l*z+c*G,r[8]=a*M+o*O+l*U+c*Z,r[12]=a*k+o*C+l*D+c*j,r[1]=h*T+u*P+f*E+d*q,r[5]=h*x+u*L+f*z+d*G,r[9]=h*M+u*O+f*U+d*Z,r[13]=h*k+u*C+f*D+d*j,r[2]=g*T+y*P+p*E+m*q,r[6]=g*x+y*L+p*z+m*G,r[10]=g*M+y*O+p*U+m*Z,r[14]=g*k+y*C+p*D+m*j,r[3]=v*T+b*P+_*E+w*q,r[7]=v*x+b*L+_*z+w*G,r[11]=v*M+b*O+_*U+w*Z,r[15]=v*k+b*C+_*D+w*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],v=l*d-c*f,b=o*d-c*u,_=o*f-l*u,w=a*d-c*h,T=a*f-l*h,x=a*u-o*h;return e*(y*v-p*b+m*_)-i*(g*v-p*w+m*T)+s*(g*b-y*w+m*x)-r*(g*_-y*T+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],v=e*o-i*a,b=e*l-s*a,_=e*c-r*a,w=i*l-s*o,T=i*c-r*o,x=s*c-r*l,M=h*y-u*g,k=h*p-f*g,P=h*m-d*g,L=u*p-f*y,O=u*m-d*y,C=f*m-d*p,E=v*C-b*O+_*L+w*P-T*k+x*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/E;return t[0]=(o*C-l*O+c*L)*z,t[1]=(s*O-i*C-r*L)*z,t[2]=(y*x-p*T+m*w)*z,t[3]=(f*T-u*x-d*w)*z,t[4]=(l*P-a*C-c*k)*z,t[5]=(e*C-s*P+r*k)*z,t[6]=(p*_-g*x-m*b)*z,t[7]=(h*x-f*_+d*b)*z,t[8]=(a*O-o*P+c*M)*z,t[9]=(i*P-e*O-r*M)*z,t[10]=(g*T-y*_+m*v)*z,t[11]=(u*_-h*T-d*v)*z,t[12]=(o*k-a*L-l*M)*z,t[13]=(e*L-i*k+s*M)*z,t[14]=(y*b-g*w-p*v)*z,t[15]=(h*w-u*b+f*v)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,y=a*h,p=a*u,m=o*u,v=l*c,b=l*h,_=l*u,w=i.x,T=i.y,x=i.z;return s[0]=(1-(y+m))*w,s[1]=(d+_)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+b)*x,s[9]=(p-v)*x,s[10]=(1-(f+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ti.copy(this);let c=1/a,h=1/o,u=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=_i,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===_i)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===xs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=_i,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===_i)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===xs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Va.prototype.isMatrix4=!0;var ce=Va,is=new X,Ti=new ce,Kf=new X(0,0,0),$f=new X(1,1,1),gn=new X,Or=new X,hi=new X,sh=new ce,rh=new Bi,an=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,ah=new X,ns=new Bi,ji=new ce,Fr=new X,Bs=new X,Jf=new X,jf=new Bi,oh=new X(1,0,0),lh=new X(0,1,0),ch=new X(0,0,1),hh={type:"added"},Qf={type:"removed"},ss={type:"childadded",child:null},ul={type:"childremoved",child:null},Me=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new an,i=new Bi,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fr.copy(t):Fr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Bs,Fr,this.up):ji.lookAt(Fr,Bs,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ji),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),ss.child=t,this.dispatchEvent(ss),ss.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Me.DEFAULT_UP=new X(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},td={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Gf(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=fl(a,r,t+1/3),this.g=fl(a,r,t),this.b=fl(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=mu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sn(t.r),this.g=sn(t.g),this.b=sn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Qt.workingToColorSpace(ii.copy(this),t),Math.round(ee(ii.r*255,0,255))*65536+Math.round(ee(ii.g*255,0,255))*256+Math.round(ee(ii.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ii.copy(this),e);let i=ii.r,s=ii.g,r=ii.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ii.copy(this),e),t.r=ii.r,t.g=ii.g,t.b=ii.b,t}getStyle(t=Ke){Qt.workingToColorSpace(ii.copy(this),t);let e=ii.r,i=ii.g,s=ii.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(zr);let i=al(xn.h,zr.h,e),s=al(xn.s,zr.s,e),r=al(xn.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new Ut;Ut.NAMES=mu;var tr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gn=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new X,Qi=new X,dl=new X,tn=new X,rs=new X,as=new X,uh=new X,pl=new X,ml=new X,gl=new X,xl=new ve,yl=new ve,vl=new ve,bn=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ai.subVectors(t,e),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ai.subVectors(s,e),Qi.subVectors(i,e),dl.subVectors(t,e);let a=Ai.dot(Ai),o=Ai.dot(Qi),l=Ai.dot(dl),c=Qi.dot(Qi),h=Qi.dot(dl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xl,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(t,e,i,s){return Ai.subVectors(i,e),Qi.subVectors(t,e),Ai.cross(Qi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ai.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,i),as.subVectors(r,i),pl.subVectors(t,i);let l=rs.dot(pl),c=as.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,s);let h=rs.dot(ml),u=as.dot(ml);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(rs,a);gl.subVectors(t,r);let d=rs.dot(gl),g=as.dot(gl);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(as,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return uh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(uh,o);let m=1/(p+y+f);return a=y*m,o=f*m,e.copy(i).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Hr.subVectors(this.max,Hs),os.subVectors(t.a,Hs),ls.subVectors(t.b,Hs),cs.subVectors(t.c,Hs),yn.subVectors(ls,os),vn.subVectors(cs,ls),Fn.subVectors(os,cs);let e=[0,-yn.z,yn.y,0,-vn.z,vn.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,vn.z,0,-vn.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-vn.y,vn.x,0,-Fn.y,Fn.x,0];return!_l(e,os,ls,cs,Hr)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,os,ls,cs,Hr))?!1:(Gr.crossVectors(yn,vn),e=[Gr.x,Gr.y,Gr.z],_l(e,os,ls,cs,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},en=[new X,new X,new X,new X,new X,new X,new X,new X],Ei=new X,Br=new Hi,os=new X,ls=new X,cs=new X,yn=new X,vn=new X,Fn=new X,Hs=new X,Hr=new X,Gr=new X,zn=new X;function _l(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zn.fromArray(n,r);let o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),h=i.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new X,Vr=new qt,ed=0,ne=class extends zi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=t!==void 0?rc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Vf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wf(t,this.array)}};var er=class extends ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ir=class extends ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends ne{constructor(t,e,i){super(new Float32Array(t),e,i)}},id=new Hi,Gs=new X,bl=new X,Gi=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):id.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(bl)),this.expandByPoint(Gs.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nd=0,vi=new ce,Ml=new Me,hs=new X,ui=new Hi,Vs=new Hi,We=new X,ue=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bf(t)?ir:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,i){return vi.makeTranslation(t,e,i),this.applyMatrix4(vi),this}scale(t,e,i){return vi.makeScale(t,e,i),this.applyMatrix4(vi),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(ui.min,Vs.min),ui.expandByPoint(We),We.addVectors(ui.max,Vs.max),ui.expandByPoint(We)):(ui.expandByPoint(Vs.min),ui.expandByPoint(Vs.max))}ui.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),We.add(hs)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ne(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new X,l[k]=new X;let h=new X,u=new X,f=new X,d=new qt,g=new qt,y=new qt,p=new X,m=new X;function v(k,P,L){c[k]=c[P]=c[L]=1,h.fromBufferAttribute(i,k),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,k),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,L),u.sub(h),f.sub(h),g.sub(d),y.sub(d);let O=1/(g.x*y.y-y.x*g.y);isFinite(O)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(O),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(O),o[k].add(p),o[P].add(p),o[L].add(p),l[k].add(m),l[P].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let k=0,P=b.length;k<P;++k){let L=b[k],O=L.start,C=L.count;for(let E=O,z=O+C;E<z;E+=3)v(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let _=new X,w=new X,T=new X,x=new X;function M(k){T.fromBufferAttribute(s,k),x.copy(T);let P=o[k];_.copy(P),_.sub(T.multiplyScalar(T.dot(P))).normalize(),w.crossVectors(x,P);let O=w.dot(l[k])<0?-1:1;a.setXYZW(k,_.x,_.y,_.z,O)}for(let k=0,P=i.count;k<P;++k)c[k]&&M(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new ne(f,h,u)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sl=new X,sd=new X,rd=new Bt,Ci=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sl.subVectors(i,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||rd.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ad=0,Vi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=As,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var nn=new X,wl=new X,Wr=new X,Xr=new X,bs=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wl).addScaledVector(Wr,f),d}intersectSphere(t,e){if(t.radius<0)return null;nn.subVectors(t.center,this.origin);let i=nn.dot(this.direction),s=nn.dot(nn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,v=i.y-a.y,b=i.z-a.z,_=Math.abs(l),w=Math.abs(c),T=Math.abs(h),x,M,k,P,L,O,C,E,z,U,D,q;if(_>=w&&_>=T?(k=l,O=u,z=g,q=m,l>=0?(x=c,M=h,P=f,L=d,C=y,E=p,U=v,D=b):(x=h,M=c,P=d,L=f,C=p,E=y,U=b,D=v)):w>=T?(k=c,O=f,z=y,q=v,c>=0?(x=h,M=l,P=d,L=u,C=p,E=g,U=b,D=m):(x=l,M=h,P=u,L=d,C=g,E=p,U=m,D=b)):(k=h,O=d,z=p,q=b,h>=0?(x=l,M=c,P=u,L=f,C=g,E=y,U=m,D=v):(x=c,M=l,P=f,L=u,C=y,E=g,U=v,D=m)),k===0)return null;let G=x/k,Z=M/k,j=1/k,B=P-G*O,W=L-Z*O,I=C-G*z,et=E-Z*z,ot=U-G*q,ct=D-Z*q,rt=ot*et-ct*I,Ft=B*ct-W*ot,$t=I*W-et*B;if(s){if(rt<0||Ft<0||$t<0)return null}else if((rt<0||Ft<0||$t<0)&&(rt>0||Ft>0||$t>0))return null;let Mt=rt+Ft+$t;if(Mt===0)return null;let Ht=j*(rt*O+Ft*z+$t*q);return(Mt>0?Ht<0:Ht>0)?null:this.at(Ht/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fh=new ce,Bn=new bs,qr=new Gi,dh=new X,Yr=new X,Kr=new X,$r=new X,Tl=new X,Zr=new X,ph=new X,Jr=new X,_t=class extends Me{constructor(t=new ue,e=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Tl.fromBufferAttribute(u,t),a?Zr.addScaledVector(Tl,h):Zr.addScaledVector(Tl.sub(e),h))}e.add(Zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(qr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(qr,dh)===null||Bn.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(fh.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,w=b;_<w;_+=3){let T=o.getX(_),x=o.getX(_+1),M=o.getX(_+2);s=jr(this,m,t,i,c,h,u,T,x,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let v=o.getX(p),b=o.getX(p+1),_=o.getX(p+2);s=jr(this,a,t,i,c,h,u,v,b,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,w=b;_<w;_+=3){let T=_,x=_+1,M=_+2;s=jr(this,m,t,i,c,h,u,T,x,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let v=p,b=p+1,_=p+2;s=jr(this,a,t,i,c,h,u,v,b,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function od(n,t,e,i,s,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Rn,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:n}}function jr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Yr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,$r);let h=od(n,t,e,i,Yr,Kr,$r,ph);if(h){let u=new X;bn.getBarycoord(ph,Yr,Kr,$r,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,l,c,u,new qt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new qt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new X,materialIndex:0};bn.getNormal(Yr,Kr,$r,f.normal),h.face=f,h.barycoord=u}return h}var nr=class extends oi{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Xe,h=Xe,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=class extends ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new ce,mh=new ce,Qr=[],gh=new Hi,ld=new ce,Ws=new _t,Xs=new Gi,Vn=class extends _t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ld)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),gh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),Xs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),mh.multiplyMatrices(i,us),Ws.matrixWorld=mh,Ws.raycast(t,Qr);for(let a=0,o=Qr.length;a<o;a++){let l=Qr[a];l.instanceId=r,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,Ja,bi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hn=new Gi,cd=new qt(.5,.5),ta=new X,Sn=class{constructor(t=new Ci,e=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],v=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,m-g,w-v).normalize(),s[1].setComponents(c+a,d+h,m+g,w+v).normalize(),s[2].setComponents(c+o,d+u,m+y,w+b).normalize(),s[3].setComponents(c-o,d-u,m-y,w-b).normalize(),i)s[4].setComponents(l,f,p,_).normalize(),s[5].setComponents(c-l,d-f,m-p,w-_).normalize();else if(s[4].setComponents(c-l,d-f,m-p,w-_).normalize(),e===_i)s[5].setComponents(c+l,d+f,m+p,w+_).normalize();else if(e===xs)s[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){Hn.center.set(0,0,0);let e=cd.distanceTo(t.center);return Hn.radius=.7071067811865476+e,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xh=new ce,Sa=class n{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Sn),i[s].setFromProjectionMatrix(xh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Sn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Ms=class extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wa=new X,Ta=new X,yh=new ce,qs=new bs,ea=new Gi,Al=new X,vh=new X,Aa=class extends Me{constructor(t=new ue,e=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)wa.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=wa.distanceTo(Ta);t.setAttribute("lineDistance",new he(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;yh.copy(s).invert(),qs.copy(t.ray).applyMatrix4(yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=c){let m=h.getX(y),v=h.getX(y+1),b=ia(this,t,qs,l,m,v,y);b&&e.push(b)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=ia(this,t,qs,l,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=c){let m=ia(this,t,qs,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=ia(this,t,qs,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ia(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),e.distanceSqToSegment(wa,Ta,Al,vh)>i)return;Al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Al);if(!(c<t.near||c>t.far))return{distance:c,point:vh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var _h=new X,bh=new X,rr=class extends Aa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),bh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_h.distanceTo(bh);t.setAttribute("lineDistance",new he(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mh=new ce,Ll=new bs,na=new Gi,sa=new X,Wi=class extends Me{constructor(t=new ue,e=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;Mh.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(Mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);sa.fromBufferAttribute(u,p),Sh(sa,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,y=d;g<y;g++)sa.fromBufferAttribute(u,g),Sh(sa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sh(n,t,e,i,s,r,a){let o=Ll.distanceSqToPoint(n);if(o<e){let l=new X;Ll.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ar=class extends oi{constructor(t=[],e=Zn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends oi{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var on=class extends oi{constructor(t,e,i=Pi,s,r,a,o=Xe,l=Xe,c,h=rn,u=1){if(h!==rn&&h!==cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},or=class extends on{constructor(t,e=Pi,i=Zn,s,r,a=Xe,o=Xe,l,c=rn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},se=class n extends ue{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(y,p,m,v,b,_,w,T,x,M,k){let P=_/x,L=w/M,O=_/2,C=w/2,E=T/2,z=x+1,U=M+1,D=0,q=0,G=new X;for(let Z=0;Z<U;Z++){let j=Z*L-C;for(let B=0;B<z;B++){let W=B*P-O;G[y]=W*v,G[p]=j*b,G[m]=E,c.push(G.x,G.y,G.z),G[y]=0,G[p]=0,G[m]=T>0?1:-1,h.push(G.x,G.y,G.z),u.push(B/x),u.push(1-Z/M),D+=1}}for(let Z=0;Z<M;Z++)for(let j=0;j<x;j++){let B=f+j+z*Z,W=f+j+z*(Z+1),I=f+(j+1)+z*(Z+1),et=f+(j+1)+z*Z;l.push(B,W,et),l.push(W,I,et),q+=6}o.addGroup(d,q,k),d+=q,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wn=class n extends ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new X,h=new qt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Tn=class n extends ue{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=i/2,m=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function v(){let _=new X,w=new X,T=0,x=(e-t)/i;for(let M=0;M<=r;M++){let k=[],P=M/r,L=P*(e-t)+t;for(let O=0;O<=s;O++){let C=O/s,E=C*l+o,z=Math.sin(E),U=Math.cos(E);w.x=L*z,w.y=-P*i+p,w.z=L*U,u.push(w.x,w.y,w.z),_.set(z,x,U).normalize(),f.push(_.x,_.y,_.z),d.push(C,1-P),k.push(g++)}y.push(k)}for(let M=0;M<s;M++)for(let k=0;k<r;k++){let P=y[k][M],L=y[k+1][M],O=y[k+1][M+1],C=y[k][M+1];(t>0||k!==0)&&(h.push(P,L,C),T+=3),(e>0||k!==r-1)&&(h.push(L,O,C),T+=3)}c.addGroup(m,T,0),m+=T}function b(_){let w=g,T=new qt,x=new X,M=0,k=_===!0?t:e,P=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*P,0),f.push(0,P,0),d.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let E=O/s*l+o,z=Math.cos(E),U=Math.sin(E);x.x=k*U,x.y=p*P,x.z=k*z,u.push(x.x,x.y,x.z),f.push(0,P,0),T.x=z*.5+.5,T.y=U*.5*P+.5,d.push(T.x,T.y),g++}for(let O=0;O<s;O++){let C=w+O,E=L+O;_===!0?h.push(E,E+1,C):h.push(E+1,E,C),M+=3}c.addGroup(m,M,_===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class n extends Tn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class n extends ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new X,_=new X,w=new X;for(let T=0;T<e.length;T+=3)d(e[T+0],b),d(e[T+1],_),d(e[T+2],w),l(b,_,w,v)}function l(v,b,_,w){let T=w+1,x=[];for(let M=0;M<=T;M++){x[M]=[];let k=v.clone().lerp(_,M/T),P=b.clone().lerp(_,M/T),L=T-M;for(let O=0;O<=L;O++)O===0&&M===T?x[M][O]=k:x[M][O]=k.clone().lerp(P,O/L)}for(let M=0;M<T;M++)for(let k=0;k<2*(T-M)-1;k++){let P=Math.floor(k/2);k%2===0?(f(x[M][P+1]),f(x[M+1][P]),f(x[M][P])):(f(x[M][P+1]),f(x[M+1][P+1]),f(x[M+1][P]))}}function c(v){let b=new X;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let v=new X;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(_,1-w)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let b=a[v+0],_=a[v+2],w=a[v+4],T=Math.max(b,_,w),x=Math.min(b,_,w);T>.9&&x<.1&&(b<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,b){let _=v*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){let v=new X,b=new X,_=new X,w=new X,T=new qt,x=new qt,M=new qt;for(let k=0,P=0;k<r.length;k+=9,P+=6){v.set(r[k+0],r[k+1],r[k+2]),b.set(r[k+3],r[k+4],r[k+5]),_.set(r[k+6],r[k+7],r[k+8]),T.set(a[P+0],a[P+1]),x.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),w.copy(v).add(b).add(_).divideScalar(3);let L=p(w);y(T,P+0,v,L),y(x,P+2,b,L),y(M,P+4,_,L)}}function y(v,b,_,w){w<0&&v.x===1&&(a[b]=v.x-1),_.x===0&&_.z===0&&(a[b]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var cr=class n extends Ea{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Xi=class n extends ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let v=m*f-a;for(let b=0;b<c;b++){let _=b*u-r;g.push(_,-v,0),y.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let b=v+c*m,_=v+c*(m+1),w=v+1+c*(m+1),T=v+1+c*m;d.push(b,_,T),d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ss=class n extends ue{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new X,g=new qt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let v=m+p,b=v,_=v+i+1,w=v+i+2,T=v+1;o.push(b,_,T),o.push(_,w,T)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hr=class n extends ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new X,f=new X,d=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let v=[],b=m/i,_=a+b*o,w=t*Math.cos(_),T=Math.sqrt(t*t-w*w),x=0;m===0&&a===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let k=M/e,P=s+k*r;u.x=-T*Math.cos(P),u.y=w,u.z=T*Math.sin(P),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(k+x,1-b),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let b=h[m][v+1],_=h[m][v],w=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&d.push(b,_,T),(m!==i-1||l<Math.PI)&&d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function jn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(wh(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(wh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ni(n){let t={};for(let e=0;e<n.length;e++){let i=jn(n[e]);for(let s in i)t[s]=i[s]}return t}function wh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function hd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ac(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var gu={clone:jn,merge:ni},ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qi=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ca=class extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Te=class extends Vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ra=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ra(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var An=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends An{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,o=2*e-i;break;case Il:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=t,l=2*i-e;break;case Il:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,v=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+v*a[c+w]+b*a[l+w]+_*a[u+w];return r}},La=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ka=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Da=class extends An{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=d*f+g*2,v=u[m],b=u[m+1],_=t*f+g*2,w=h[_],T=h[_+1],x=pd(i,e,v,w,s);r[g]=xu(x,y,b,T,p)}return r}};function xu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function dd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function pd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=xu(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=dd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var di=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ra(t.settings)&&(i.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Cl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ra(this.settings)&&(Th(this.settings.inTangents,t),Th(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ra(this.settings)&&(Ah(this.settings.inTangents,t),Ah(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Th(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Ah(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ya;var En=class extends di{constructor(t,e,i){super(t,e,i)}};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=Ks;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends di{constructor(t,e,i,s){super(t,e,i,s)}};Na.prototype.ValueTypeName="color";var Ua=class extends di{constructor(t,e,i,s){super(t,e,i,s)}};Ua.prototype.ValueTypeName="number";var Oa=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Bi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ur=class extends di{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends di{constructor(t,e,i){super(t,e,i)}};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=Ks;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends di{constructor(t,e,i,s){super(t,e,i,s)}};Fa.prototype.ValueTypeName="vector";var za=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new za,Ba=class{constructor(t){this.manager=t!==void 0?t:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Me{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qn=class extends fr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},El=new ce,Eh=new X,Ch=new X,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sn,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(El,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=new X,oa=new Bi,Fi=new X,dr=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(aa,oa,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_n=new X,Rh=new qt,Ph=new qt,$e=class extends dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ph),e.subVectors(Ph,Rh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pr=class extends dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends Ha{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ds=-90,ps=1,ws=class extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(ds,ps,t,e);s.layers=this.layers,this.add(s);let r=new $e(ds,ps,t,e);r.layers=this.layers,this.add(r);let a=new $e(ds,ps,t,e);a.layers=this.layers,this.add(a);let o=new $e(ds,ps,t,e);o.layers=this.layers,this.add(o);let l=new $e(ds,ps,t,e);l.layers=this.layers,this.add(l);let c=new $e(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ga=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var oc="\\[\\]\\.:\\/",md=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",gd="[^"+oc.replace("\\.","")+"]",xd=/((?:WC+[\/:])*)/.source.replace("WC",lc),yd=/(WCOD+)?/.source.replace("WCOD",gd),vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),_d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),bd=new RegExp("^"+xd+yd+vd+_d+"$"),Md=["material","materials","bones","map"],Dl=class{constructor(t,e,i){let s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(md,"")}static parseTrackName(t){let e=bd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Md.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Dl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var pc=class pc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};pc.prototype.isMatrix2=!0;var Nl=pc;function cc(n,t,e,i){let s=Sd(i);switch(e){case jl:return n*t;case Ja:return n*t/s.components*s.byteLength;case ja:return n*t/s.components*s.byteLength;case Pn:return n*t*2/s.components*s.byteLength;case Qa:return n*t*2/s.components*s.byteLength;case Ql:return n*t*3/s.components*s.byteLength;case Li:return n*t*4/s.components*s.byteLength;case to:return n*t*4/s.components*s.byteLength;case yr:case vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _r:case br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case io:case so:return Math.max(n,16)*Math.max(t,8)/4;case eo:case no:return Math.max(n,8)*Math.max(t,8)/2;case ro:case ao:case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oo:case Mr:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ao:case Eo:case Co:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ro:case Po:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sr:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sd(n){switch(n){case ci:case Kl:return{byteLength:1,components:1};case Cs:case $l:case Ii:return{byteLength:2,components:1};case $a:case Za:return{byteLength:2,components:4};case Pi:case Ka:case bi:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Td(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`uniform sampler2D dfgLUT;
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
}`,wp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform float backgroundBlurriness;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,F0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Ad,alphahash_pars_fragment:Ed,alphamap_fragment:Cd,alphamap_pars_fragment:Rd,alphatest_fragment:Pd,alphatest_pars_fragment:Id,aomap_fragment:Ld,aomap_pars_fragment:kd,batching_pars_vertex:Dd,batching_vertex:Nd,begin_vertex:Ud,beginnormal_vertex:Od,bsdfs:Fd,iridescence_fragment:zd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Kd,common:$d,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:ip,envmap_fragment:np,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:yp,lights_toon_pars_fragment:vp,lights_phong_fragment:_p,lights_phong_pars_fragment:bp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,lightprobes_pars_fragment:Ep,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:kp,map_particle_fragment:Dp,map_particle_pars_fragment:Np,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Op,morphinstance_vertex:Fp,morphcolor_vertex:zp,morphnormal_vertex:Bp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:i0,dithering_fragment:n0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:_0,uv_pars_fragment:b0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:w0,background_vert:T0,background_frag:A0,backgroundCube_vert:E0,backgroundCube_frag:C0,cube_vert:R0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distance_vert:k0,distance_frag:D0,equirect_vert:N0,equirect_frag:U0,linedashed_vert:O0,linedashed_frag:F0,meshbasic_vert:z0,meshbasic_frag:B0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:$0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:j0,points_vert:Q0,points_frag:tm,shadow_vert:em,shadow_frag:im,sprite_vert:nm,sprite_frag:sm},bt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},$i={basic:{uniforms:ni([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ni([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ni([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ni([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ni([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ni([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ni([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ni([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ni([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ni([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ni([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:ni([bt.common,bt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:ni([bt.lights,bt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};$i.physical={uniforms:ni([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ko={r:0,b:0,g:0},rm=new ce,Hu=new Bt;Hu.set(-1,0,0,0,1,0,0,0,1);function am(n,t,e,i,s,r){let a=new Ut(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=t.get(b,_)}return b}function g(v){let b=!1,_=d(v);_===null?p(a,o):_&&_.isColor&&(p(_,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,b){let _=d(b);_&&_.isCubeTexture?(c===void 0&&(c=new _t(new se(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:jn($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hu),c.material.toneMapped=Qt.getTransfer(_.colorSpace)!==oe,(h!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new _t(new Xi(2,2),new qi({name:"BackgroundMaterial",uniforms:jn($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(ko,ac(n)),e.buffers.color.setClear(ko.r,ko.g,ko.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:y,dispose:m}}function om(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(L,O,C,E,z){let U=!1,D=u(L,E,C,O);r!==D&&(r=D,c(r.object)),U=d(L,E,C,z),U&&g(L,E,C,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(L,O,C,E),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,O,C,E){let z=E.wireframe===!0,U=i[O.id];U===void 0&&(U={},i[O.id]=U);let D=L.isInstancedMesh===!0?L.id:0,q=U[D];q===void 0&&(q={},U[D]=q);let G=q[C.id];G===void 0&&(G={},q[C.id]=G);let Z=G[z];return Z===void 0&&(Z=f(l()),G[z]=Z),Z}function f(L){let O=[],C=[],E=[];for(let z=0;z<e;z++)O[z]=0,C[z]=0,E[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:C,attributeDivisors:E,object:L,attributes:{},index:null}}function d(L,O,C,E){let z=r.attributes,U=O.attributes,D=0,q=C.getAttributes();for(let G in q)if(q[G].location>=0){let j=z[G],B=U[G];if(B===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),j===void 0||j.attribute!==B||B&&j.data!==B.data)return!0;D++}return r.attributesNum!==D||r.index!==E}function g(L,O,C,E){let z={},U=O.attributes,D=0,q=C.getAttributes();for(let G in q)if(q[G].location>=0){let j=U[G];j===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let B={};B.attribute=j,j&&j.data&&(B.data=j.data),z[G]=B,D++}r.attributes=z,r.attributesNum=D,r.index=E}function y(){let L=r.newAttributes;for(let O=0,C=L.length;O<C;O++)L[O]=0}function p(L){m(L,0)}function m(L,O){let C=r.newAttributes,E=r.enabledAttributes,z=r.attributeDivisors;C[L]=1,E[L]===0&&(n.enableVertexAttribArray(L),E[L]=1),z[L]!==O&&(n.vertexAttribDivisor(L,O),z[L]=O)}function v(){let L=r.newAttributes,O=r.enabledAttributes;for(let C=0,E=O.length;C<E;C++)O[C]!==L[C]&&(n.disableVertexAttribArray(C),O[C]=0)}function b(L,O,C,E,z,U,D){D===!0?n.vertexAttribIPointer(L,O,C,z,U):n.vertexAttribPointer(L,O,C,E,z,U)}function _(L,O,C,E){y();let z=E.attributes,U=C.getAttributes(),D=O.defaultAttributeValues;for(let q in U){let G=U[q];if(G.location>=0){let Z=z[q];if(Z===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let j=Z.normalized,B=Z.itemSize,W=t.get(Z);if(W===void 0)continue;let I=W.buffer,et=W.type,ot=W.bytesPerElement,ct=et===n.INT||et===n.UNSIGNED_INT||Z.gpuType===Ka;if(Z.isInterleavedBufferAttribute){let rt=Z.data,Ft=rt.isInterleavedBuffer===!0?rt.stride:rt.itemSize,$t=Z.offset;if(rt.isInstancedInterleavedBuffer||rt.isInstancedBufferAttribute){for(let Mt=0;Mt<G.locationSize;Mt++)m(G.location+Mt,rt.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Mt=0;Mt<G.locationSize;Mt++)p(G.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,I);for(let Mt=0;Mt<G.locationSize;Mt++)b(G.location+Mt,B/G.locationSize,et,j,Ft*ot,($t+B/G.locationSize*Mt)*ot,ct)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt,Z.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,I);for(let rt=0;rt<G.locationSize;rt++)b(G.location+rt,B/G.locationSize,et,j,B*ot,B/G.locationSize*rt*ot,ct)}}else if(D!==void 0){let j=D[q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(G.location,j);break;case 3:n.vertexAttrib3fv(G.location,j);break;case 4:n.vertexAttrib4fv(G.location,j);break;default:n.vertexAttrib1fv(G.location,j)}}}}v()}function w(){k();for(let L in i){let O=i[L];for(let C in O){let E=O[C];for(let z in E){let U=E[z];for(let D in U)h(U[D].object),delete U[D];delete E[z]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let C in O){let E=O[C];for(let z in E){let U=E[z];for(let D in U)h(U[D].object),delete U[D];delete E[z]}}delete i[L.id]}function x(L){for(let O in i){let C=i[O];for(let E in C){let z=C[E];if(z[L.id]===void 0)continue;let U=z[L.id];for(let D in U)h(U[D].object),delete U[D];delete z[L.id]}}}function M(L){for(let O in i){let C=i[O],E=L.isInstancedMesh===!0?L.id:0,z=C[E];if(z!==void 0){for(let U in z){let D=z[U];for(let q in D)h(D[q].object),delete D[q];delete z[U]}delete C[E],Object.keys(C).length===0&&delete i[O]}}}function k(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function lm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Li&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==ci&&x!==bi&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:T}}function hm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ci,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,b=v*4,_=m.clippingState||null;l.value=_,_=h(g,f,b,d);for(let w=0;w!==b;++w)_[w]=e[w];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,_=d;b!==y;++b,_+=4)a.copy(u[b]).applyMatrix4(v,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Er=class extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new qi({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Kn});r.uniforms.tEquirect.value=e;let a=new _t(s,r),o=e.minFilter;return e.minFilter===ln&&(e.minFilter=ai),new ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},vu=256,um=3,fm=20,Gu=256,Vu=16,dm=3,pm=new X,mm=new Ut,No=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new _t(new se(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=pm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(mm));let p=new ws(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vu,pu(t))}_fromTexture(t,e){t.mapping===Zn||t.mapping===Es?this._setSize(t.image.length===0?vu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=_u(t,!1,!1),i=Math.log2(t)-um;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_u(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Zn||t.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gm(),this._integrationMaterial=xm());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-dm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Gu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ym());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function _u(n,t,e){return new Er(n,{minFilter:ln,generateMipmaps:t,type:Ii,colorSpace:$s,depthBuffer:e})}function Cr(n,t,e){return new qi({name:n,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:Ze,blending:Kn,depthTest:!1,depthWrite:!1})}function gm(){return Cr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gu}u

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
	`)}function xm(){return Cr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vu}},`

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
	`)}function ym(){return Cr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fm}
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
	`)}function bu(){return Cr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mu(){return Cr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Xa||d===qa)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Er(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Xa||d===qa,y=d===Zn||d===Es;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new No(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new No(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Xa?f.mapping=Zn:d===qa&&(f.mapping=Es),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function _m(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ys("WebGLRenderer: "+i+" extension not supported."),s}}}function bm(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function u(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,b=p.count>=65535?ir:er,_=new b(Math.ceil(v/3)*6,1),w=_.array;if(y!==null){let x=y.array;m=y.version;for(let M=0,k=0;M<v;M+=3){let P=x[M+0],L=x[M+1],O=x[M+2];w[k++]=P,w[k++]=L,w[k++]=L,w[k++]=O,w[k++]=O,w[k++]=P}}else{m=p.version;for(let x=0,M=0;x<v;x+=3){let k=x+0,P=x+1,L=x+2;w[M++]=k,w[M++]=P,w[M++]=P,w[M++]=L,w[M++]=L,w[M++]=k}}_.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,_)}function f(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Mm(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wm(n,t,e){let i=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let k=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let _=o.attributes.position.count*b,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*w*4*u),x=new js(T,_,w,u);x.type=bi,x.needsUpdate=!0;let M=b*4;for(let P=0;P<u;P++){let L=p[P],O=m[P],C=v[P],E=_*w*4*P;for(let z=0;z<L.count;z++){let U=z*M;d===!0&&(s.fromBufferAttribute(L,z),T[E+U+0]=s.x,T[E+U+1]=s.y,T[E+U+2]=s.z,T[E+U+3]=0),g===!0&&(s.fromBufferAttribute(O,z),T[E+U+4]=s.x,T[E+U+5]=s.y,T[E+U+6]=s.z,T[E+U+7]=0),y===!0&&(s.fromBufferAttribute(C,z),T[E+U+8]=s.x,T[E+U+9]=s.y,T[E+U+10]=s.z,T[E+U+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new qt(_,w)},i.set(o,f),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tm(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Am={[Hl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Vl]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function Em(n,t,e,i,s,r){let a=new fi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ue;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let u=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _t(h,u),d=new pr(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,v=null,b=[],_=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){b=w,_=b.length>0&&b[0].isRenderPass===!0;let T=a.width,x=a.height;b.length>0&&o===null&&(o=new fi(T,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new fi(T,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(k=>k.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new on(T,x),r===!0&&(c.format=cn,c.type=Jn)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let k=0;k<b.length;k++){let P=b[k];P.setSize&&P.setSize(T,x),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===Yi&&b.length===0)return!1;if(v=T,T!==null){let x=T.width,M=T.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return _===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Yi,!0},this.hasRenderPass=function(){return _},this.end=function(w,T){w.toneMapping=m,p=!0;let x=a,M=o;for(let k=0;k<b.length;k++){let P=b[k];P.enabled!==!1&&(P.render(w,M,x,T),P.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,u.defines={},Qt.getTransfer(g)===oe&&(u.defines.SRGB_TRANSFER="");let k=Am[y];k&&(u.defines[k]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(f,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Wu=new oi,Xu=new on(1,1),qu=new or(1),Yu=new js,Ku=new Ma,$u=new ar,Su=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Eu=new Float32Array(4);function Ps(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Oo(n,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function Pm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function Im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function Lm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Oe(e,i)}}function km(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),Oe(e,i)}}function Dm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),Oe(e,i)}}function Nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function Om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function zm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function Fo(n){return n.version===0&&(n.compareFunction=ic,n.needsUpdate=!0),n}function Vm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fo(Xu):r=Wu,e.setTexture2D(t||r,s)}function Wm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ku,s)}function Xm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fo(qu):r=$u,e.setTextureCube(t||r,s)}function qm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yu,s)}function Ym(n){switch(n){case 5126:return Cm;case 35664:return Rm;case 35665:return Pm;case 35666:return Im;case 35674:return Lm;case 35675:return km;case 35676:return Dm;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Om;case 35669:case 35673:return Fm;case 5125:return zm;case 36294:return Bm;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Km(n,t){n.uniform1fv(this.addr,t)}function $m(n,t){let e=Ps(t,this.size,2);n.uniform2fv(this.addr,e)}function Zm(n,t){let e=Ps(t,this.size,3);n.uniform3fv(this.addr,e)}function Jm(n,t){let e=Ps(t,this.size,4);n.uniform4fv(this.addr,e)}function jm(n,t){let e=Ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qm(n,t){let e=Ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tg(n,t){let e=Ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eg(n,t){n.uniform1iv(this.addr,t)}function ig(n,t){n.uniform2iv(this.addr,t)}function ng(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function rg(n,t){n.uniform1uiv(this.addr,t)}function ag(n,t){n.uniform2uiv(this.addr,t)}function og(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function cg(n,t,e){let i=this.cache,s=t.length,r=Oo(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fo(Xu):a=Wu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function hg(n,t,e){let i=this.cache,s=t.length,r=Oo(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ku,r[a])}function ug(n,t,e){let i=this.cache,s=t.length,r=Oo(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Fo(qu):a=$u;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function fg(n,t,e){let i=this.cache,s=t.length,r=Oo(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function dg(n){switch(n){case 5126:return Km;case 35664:return $m;case 35665:return Zm;case 35666:return Jm;case 35674:return jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}},yc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Cu(n,t){n.seq.push(t),n.map[t.id]=t}function pg(n,t,e){let i=n.name,s=i.length;for(mc.lastIndex=0;;){let r=mc.exec(i),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cu(e,c===void 0?new xc(o,n,t):new yc(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new vc(o),Cu(e,u)),e=u}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);pg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Ru(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mg=37297,gg=0;function xg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Pu=new Bt;function yg(n){Qt._getMatrix(Pu,Qt.workingColorSpace,n);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Zs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Iu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xg(n.getShaderSource(t),o)}else return r}function vg(n,t){let e=yg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _g={[Hl]:"Linear",[Gl]:"Reinhard",[Vl]:"Cineon",[gr]:"ACESFilmic",[Xl]:"AgX",[ql]:"Neutral",[Wl]:"Custom"};function bg(n,t){let e=_g[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Do=new X;function Mg(){Qt.getLuminanceCoefficients(Do);let n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function wg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Tg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ar(n){return n!==""}function Lu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(Ag,Eg)}function Eg(n,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _c(e)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(Cg,Rg)}function Rg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Pg={[mr]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function Ig(n){return Pg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lg={[Es]:"ENVMAP_MODE_REFRACTION"};function kg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dg={[Wa]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function Ng(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[n.combine]||"ENVMAP_BLENDING_NONE"}function Ug(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ig(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kg(e),u=Ng(e),f=Sg(e),d=wg(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ar).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(y=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=_c(a),a=Lu(a,e),a=ku(a,e),o=_c(o),o=Lu(o,e),o=ku(o,e),a=Du(a),o=Du(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+y+a,b=m+p+o,_=Ru(s,s.VERTEX_SHADER,v),w=Ru(s,s.FRAGMENT_SHADER,b);s.attachShader(g,_),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(_)||"",C=s.getShaderInfoLog(w)||"",E=L.trim(),z=O.trim(),U=C.trim(),D=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,_,w);else{let G=Iu(s,_,"vertex"),Z=Iu(s,w,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+E+`
`+G+`
`+Z)}else E!==""?Nt("WebGLProgram: Program Info Log:",E):(z===""||U==="")&&(q=!1);q&&(P.diagnostics={runnable:D,programLog:E,vertexShader:{log:z,prefix:y},fragmentShader:{log:U,prefix:p}})}s.deleteShader(_),s.deleteShader(w),x=new Rs(s,g),M=Tg(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(g,mg)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=w,this}var Og=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mc(t),e.set(t,i)),i}},Mc=class{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}};function Fg(n){return n===Pn||n===Mr||n===Sr}function zg(n,t,e,i,s,r){let a=new Qs,o=new bc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,k,P,L,O){let C=P.fog,E=L.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||z,U),q=f[x.type],G=i.precision;x.precision!==null&&(G=i.getMaxPrecision(x.precision),G!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let Z=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,j=Z!==void 0?Z.length:0,B=0;E.morphAttributes.position!==void 0&&(B=1),E.morphAttributes.normal!==void 0&&(B=2),E.morphAttributes.color!==void 0&&(B=3);let W,I,et,ot;if(q){let vt=$i[q];W=vt.vertexShader,I=vt.fragmentShader}else{W=x.vertexShader,I=x.fragmentShader;let vt=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,vt,le),et=vt.id,ot=le.id}let ct=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,Mt=!!x.map,Ht=!!x.matcap,te=!!D,Zt=te&&D.isPMREMTexture===!0,Ce=!!x.aoMap,we=!!x.lightMap,je=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Oi=!!x.displacementMap,He=!!x.emissiveMap,mi=!!x.metalnessMap,gi=!!x.roughnessMap,xi=x.anisotropy>0,H=x.clearcoat>0,yi=x.diffuseRoughness>0,xe=x.dispersion>0,ye=x.retroreflectivity>0,yt=x.iridescence>0,Ne=x.sheen>0,Dt=x.transmission>0,Gt=xi&&!!x.anisotropyMap,R=H&&!!x.clearcoatMap,S=H&&!!x.clearcoatNormalMap,K=H&&!!x.clearcoatRoughnessMap,at=yi&&!!x.diffuseRoughnessMap,st=yt&&!!x.iridescenceMap,ut=yt&&!!x.iridescenceThicknessMap,gt=Ne&&!!x.sheenColorMap,tt=Ne&&!!x.sheenRoughnessMap,it=!!x.specularMap,dt=!!x.specularColorMap,N=!!x.specularIntensityMap,nt=Dt&&!!x.transmissionMap,Q=Dt&&!!x.thicknessMap,pt=!!x.gradientMap,ht=!!x.alphaMap,ft=x.alphaTest>0,Rt=!!x.alphaHash,Yt=!!x.extensions,lt=Yi;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(lt=n.toneMapping);let It=Zt?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,Xt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:I,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:$t,batchingColor:$t&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:Ht,envMap:te,envMapMode:te&&D.mapping,envMapPMREM:Zt,envMapMaxLod:Zt?It.length-1:null,envMapSize:Zt?It[0].width:null,aoMap:Ce,lightMap:we,bumpMap:je,normalMap:_e,displacementMap:Oi,emissiveMap:He,normalMapObjectSpace:_e&&x.normalMapType===iu,normalMapTangentSpace:_e&&x.normalMapType===Lo,packedNormalMap:_e&&x.normalMapType===Lo&&Fg(x.normalMap.format),metalnessMap:mi,roughnessMap:gi,anisotropy:xi,anisotropyMap:Gt,clearcoat:H,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:K,diffuseRoughness:yi,diffuseRoughnessMap:at,dispersion:xe,retroreflection:ye,iridescence:yt,iridescenceMap:st,iridescenceThicknessMap:ut,sheen:Ne,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:dt,specularIntensityMap:N,transmission:Dt,transmissionMap:nt,thicknessMap:Q,gradientMap:pt,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Rt,combine:x.combine,mapUv:Mt&&d(x.map.channel),aoMapUv:Ce&&d(x.aoMap.channel),lightMapUv:we&&d(x.lightMap.channel),bumpMapUv:je&&d(x.bumpMap.channel),normalMapUv:_e&&d(x.normalMap.channel),displacementMapUv:Oi&&d(x.displacementMap.channel),emissiveMapUv:He&&d(x.emissiveMap.channel),metalnessMapUv:mi&&d(x.metalnessMap.channel),roughnessMapUv:gi&&d(x.roughnessMap.channel),anisotropyMapUv:Gt&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&d(x.sheenRoughnessMap.channel),specularMapUv:it&&d(x.specularMap.channel),specularColorMapUv:dt&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:nt&&d(x.transmissionMap.channel),thicknessMapUv:Q&&d(x.thicknessMap.channel),alphaMapUv:ht&&d(x.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(_e||xi),vertexNormals:!!E.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!E.attributes.uv&&(Mt||ht),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||E.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:B,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ie,flipSided:x.side===Ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&x.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function y(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)M.push(k),M.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(M,x),m(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=f[x.type],k;if(M){let P=$i[M];k=gu.clone(P.uniforms)}else k=x.uniforms;return k}function b(x,M){let k=h.get(M);return k!==void 0?++k.usedTimes:(k=new Ug(n,M,x,s),c.push(k),h.set(M,k)),k}function _(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:T}}function Bg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Hg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ou(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,y,p,m){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},n[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=a(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=p,v.group=m),t++,v}function l(f,d,g,y,p,m,v){v.reversedDepth===!0&&(p=-p);let b=o(f,d,g,y,p,m);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(f,d,g,y,p,m){let v=o(f,d,g,y,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||Hg),i.length>1&&i.sort(d||Uu),s.length>1&&s.sort(d||Uu)}function u(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Gg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ou,n.set(i,[a])):s>=r.length?(a=new Ou,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new Ut};break;case"SpotLight":e={position:new X,direction:new X,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function Wg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Xg=0;function qg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Yg(n){let t=new Vg,e=Wg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,r=new ce,a=new ce;function o(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,v=0,b=0,_=0,w=0,T=0,x=0,M=0,k=0,P=0;c.sort(qg);for(let O=0,C=c.length;O<C;O++){let E=c[O],z=E.color,U=E.intensity,D=E.distance,q=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Pn?q=E.shadow.map.texture:q=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=z.r*U,u+=z.g*U,f+=z.b*U;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],U);P++}else if(E.isSunLight){let G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=q;let B=Z.getViewportCount();for(let W=0;W<B;W++)i.sunShadowMatrix[y+W]=Z.getMatrix(W),i.sunShadowCascade[y+W]=Z._cascadeData[W];y+=B,g++}i.sun[d]=G,d++}else if(E.isDirectionalLight){let G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=E.shadow.matrix,w++}i.directional[p]=G,p++}else if(E.isSpotLight){let G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(z).multiplyScalar(U),G.distance=D,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[v]=G;let Z=E.shadow;if(E.map&&(i.spotLightMap[M]=E.map,M++,Z.updateMatrices(E),E.castShadow&&k++),i.spotLightMatrix[v]=Z.matrix,E.castShadow){let j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=q,x++}v++}else if(E.isRectAreaLight){let G=t.get(E);G.color.copy(z).multiplyScalar(U),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[b]=G,b++}else if(E.isPointLight){let G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){let Z=E.shadow,j=e.get(E);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=E.shadow.matrix,T++}i.point[m]=G,m++}else if(E.isHemisphereLight){let G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(U),G.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[_]=G,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==b||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=b,i.point.length=m,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-k,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=P,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=b,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=P,i.version=Xg++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let _=c[v];if(_.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(_.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Fu(n){let t=new Yg(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fu(n),t.set(s,[o])):r>=a.length?(o=new Fu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`,Jg=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],jg=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],zu=new ce,Tr=new X,gc=new X;function Qg(n,t,e){let i=new Sn,s=new qt,r=new qt,a=new ve,o=new Ra,l=new Pa,c={},h=e.maxTextureSize,u={[Rn]:Ze,[Ze]:Rn,[Ie]:Ie},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:$g,fragmentShader:Zg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let m=this.type;this.render=function(T,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===kh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let k=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let C=m!==this.type;C&&x.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(z=>z.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,z=T.length;E<z;E++){let U=T[E],D=U.shadow;if(D===void 0){Nt("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let q=D.getFrameExtents();s.multiply(q),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,D.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=G,D.map===null||C===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Ts){if(U.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new fi(s.x,s.y,{format:Pn,type:Ii,minFilter:ai,magFilter:ai,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new on(s.x,s.y,bi),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=rn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe}else U.isPointLight?(D.map=new Er(s.x),D.map.depthTexture=new or(s.x,Pi)):(D.map=new fi(s.x,s.y),D.map.depthTexture=new on(s.x,s.y,Pi)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=rn,this.type===mr?(D.map.depthTexture.compareFunction=G?ec:tc,D.map.depthTexture.minFilter=ai,D.map.depthTexture.magFilter=ai):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let Z=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();U.isPointLight!==!0&&D.updateMatrices(U,M);let j=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:M.layers;for(let B=0;B<Z;B++){let W=D.getCamera(B);if(U.isPointLight){let I=D.camera,et=D.matrix,ot=U.distance||I.far;ot!==I.far&&(I.far=ot,I.updateProjectionMatrix()),Tr.setFromMatrixPosition(U.matrixWorld),I.position.copy(Tr),gc.copy(I.position),gc.add(Jg[B]),I.up.copy(jg[B]),I.lookAt(gc),I.updateMatrixWorld(),et.makeTranslation(-Tr.x,-Tr.y,-Tr.z),zu.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),D._frustum.setFromProjectionMatrix(zu,I.coordinateSystem,I.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,B),n.clear();else{B===0&&(n.setRenderTarget(D.map),n.clear());let I=D.getViewport(B);a.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),O.viewport(a)}i=D.getFrustum(B),_(x,M,W,U,j,this.type)}D.isPointLightShadow!==!0&&this.type===Ts&&v(D,M),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(k,P,L)};function v(T,x){let M=t.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new fi(s.x,s.y,{format:Pn,type:Ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,M,f,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,M,d,y,null)}function b(T,x,M,k){let P=null,L=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=P.uuid,C=x.uuid,E=c[O];E===void 0&&(E={},c[O]=E);let z=E[C];z===void 0&&(z=P.clone(),E[C]=z,x.addEventListener("dispose",w)),P=z}if(P.visible=x.visible,P.wireframe=x.wireframe,k===Ts?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=M}return P}function _(T,x,M,k,P,L){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ts)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let E=t.update(T),z=T.material;if(Array.isArray(z)){let U=E.groups;for(let D=0,q=U.length;D<q;D++){let G=U[D],Z=z[G.materialIndex];if(Z&&Z.visible){let j=b(T,Z,k,L);T.onBeforeShadow(n,T,x,M,E,j,G),n.renderBufferDirect(M,null,E,j,T,G),T.onAfterShadow(n,T,x,M,E,j,G)}}}else if(z.visible){let U=b(T,z,k,L);T.onBeforeShadow(n,T,x,M,E,U,null),n.renderBufferDirect(M,null,E,U,T,null),T.onAfterShadow(n,T,x,M,E,U,null)}}let C=T.children;for(let E=0,z=C.length;E<z;E++)_(C[E],x,M,k,P,L)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let k=c[M],P=T.target.uuid;P in k&&(k[P].dispose(),delete k[P])}}}function tx(n,t){function e(){let N=!1,nt=new ve,Q=null,pt=new ve(0,0,0,0);return{setMask:function(ht){Q!==ht&&!N&&(n.colorMask(ht,ht,ht,ht),Q=ht)},setLocked:function(ht){N=ht},setClear:function(ht,ft,Rt,Yt,lt){lt===!0&&(ht*=Yt,ft*=Yt,Rt*=Yt),nt.set(ht,ft,Rt,Yt),pt.equals(nt)===!1&&(n.clearColor(ht,ft,Rt,Yt),pt.copy(nt))},reset:function(){N=!1,Q=null,pt.set(-1,0,0,0)}}}function i(){let N=!1,nt=!1,Q=null,pt=null,ht=null;return{setReversed:function(ft){if(nt!==ft){let Rt=t.get("EXT_clip_control");ft?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),nt=ft;let Yt=ht;ht=null,this.setClear(Yt)}},getReversed:function(){return nt},setTest:function(ft){ft?rt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(ft){Q!==ft&&!N&&(n.depthMask(ft),Q=ft)},setFunc:function(ft){if(nt&&(ft=du[ft]),pt!==ft){switch(ft){case ha:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case da:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=ft}},setLocked:function(ft){N=ft},setClear:function(ft){ht!==ft&&(ht=ft,nt&&(ft=1-ft),n.clearDepth(ft))},reset:function(){N=!1,Q=null,pt=null,ht=null,nt=!1}}}function s(){let N=!1,nt=null,Q=null,pt=null,ht=null,ft=null,Rt=null,Yt=null,lt=null;return{setTest:function(It){N||(It?rt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(It){nt!==It&&!N&&(n.stencilMask(It),nt=It)},setFunc:function(It,Xt,vt){(Q!==It||pt!==Xt||ht!==vt)&&(n.stencilFunc(It,Xt,vt),Q=It,pt=Xt,ht=vt)},setOp:function(It,Xt,vt){(ft!==It||Rt!==Xt||Yt!==vt)&&(n.stencilOp(It,Xt,vt),ft=It,Rt=Xt,Yt=vt)},setLocked:function(It){N=It},setClear:function(It){lt!==It&&(n.clearStencil(It),lt=It)},reset:function(){N=!1,nt=null,Q=null,pt=null,ht=null,ft=null,Rt=null,Yt=null,lt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,v=null,b=null,_=null,w=null,T=null,x=null,M=new Ut(0,0,0),k=0,P=!1,L=null,O=null,C=null,E=null,z=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=q>=2);let Z=null,j={},B=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),I=new ve().fromArray(B),et=new ve().fromArray(W);function ot(N,nt,Q,pt){let ht=new Uint8Array(4),ft=n.createTexture();n.bindTexture(N,ft),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<Q;Rt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(nt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return ft}let ct={};ct[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(gs),je(!1),_e(Ul),rt(n.CULL_FACE),Ce(Kn);function rt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ft(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function $t(N,nt){return f[N]!==nt?(n.bindFramebuffer(N,nt),f[N]=nt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=nt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Mt(N,nt){let Q=g,pt=!1;if(N){Q=d.get(nt),Q===void 0&&(Q=[],d.set(nt,Q));let ht=N.textures;if(Q.length!==ht.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Rt=ht.length;ft<Rt;ft++)Q[ft]=n.COLOR_ATTACHMENT0+ft;Q.length=ht.length,pt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,pt=!0);pt&&n.drawBuffers(Q)}function Ht(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let te={[$n]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Uh]:n.FUNC_REVERSE_SUBTRACT};te[Oh]=n.MIN,te[Fh]=n.MAX;let Zt={[zh]:n.ZERO,[Bh]:n.ONE,[Hh]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[Yh]:n.SRC_ALPHA_SATURATE,[Xh]:n.DST_COLOR,[Vh]:n.DST_ALPHA,[Gh]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[qh]:n.ONE_MINUS_DST_COLOR,[Wh]:n.ONE_MINUS_DST_ALPHA,[Kh]:n.CONSTANT_COLOR,[$h]:n.ONE_MINUS_CONSTANT_COLOR,[Zh]:n.CONSTANT_ALPHA,[Jh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,nt,Q,pt,ht,ft,Rt,Yt,lt,It){if(N===Kn){p===!0&&(Ft(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),N!==Dh){if(N!==m||It!==P){if((v!==$n||w!==$n)&&(n.blendEquation(n.FUNC_ADD),v=$n,w=$n),It)switch(N){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qe:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",N);break}else switch(N){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ol:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",N);break}b=null,_=null,T=null,x=null,M.set(0,0,0),k=0,m=N,P=It}return}ht=ht||nt,ft=ft||Q,Rt=Rt||pt,(nt!==v||ht!==w)&&(n.blendEquationSeparate(te[nt],te[ht]),v=nt,w=ht),(Q!==b||pt!==_||ft!==T||Rt!==x)&&(n.blendFuncSeparate(Zt[Q],Zt[pt],Zt[ft],Zt[Rt]),b=Q,_=pt,T=ft,x=Rt),(Yt.equals(M)===!1||lt!==k)&&(n.blendColor(Yt.r,Yt.g,Yt.b,lt),M.copy(Yt),k=lt),m=N,P=!1}function we(N,nt){N.side===Ie?Ft(n.CULL_FACE):rt(n.CULL_FACE);let Q=N.side===Ze;nt&&(Q=!Q),je(Q),N.blending===As&&N.transparent===!1?Ce(Kn):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function _e(N){N!==Ih?(rt(n.CULL_FACE),N!==O&&(N===Ul?n.cullFace(n.BACK):N===Lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),O=N}function Oi(N){N!==C&&(D&&n.lineWidth(N),C=N)}function He(N,nt,Q){N?(rt(n.POLYGON_OFFSET_FILL),(E!==nt||z!==Q)&&(E=nt,z=Q,a.getReversed()&&(nt=-nt,Q=-Q),n.polygonOffset(nt,Q))):Ft(n.POLYGON_OFFSET_FILL)}function mi(N){N?rt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function gi(N){N===void 0&&(N=n.TEXTURE0+U-1),Z!==N&&(n.activeTexture(N),Z=N)}function xi(N,nt,Q){Q===void 0&&(Z===null?Q=n.TEXTURE0+U-1:Q=Z);let pt=j[Q];pt===void 0&&(pt={type:void 0,texture:void 0},j[Q]=pt),(pt.type!==N||pt.texture!==nt)&&(Z!==Q&&(n.activeTexture(Q),Z=Q),n.bindTexture(N,nt||ct[N]),pt.type=N,pt.texture=nt)}function H(){let N=j[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function yi(){try{n.compressedTexImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function xe(){try{n.compressedTexImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function ye(){try{n.texSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function yt(){try{n.texSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function Ne(){try{n.compressedTexSubImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function Dt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function Gt(){try{n.texStorage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function R(){try{n.texStorage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function S(){try{n.texImage2D(...arguments)}catch(N){zt("WebGLState:",N)}}function K(){try{n.texImage3D(...arguments)}catch(N){zt("WebGLState:",N)}}function at(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function st(N,nt){u[N]!==nt&&(n.pixelStorei(N,nt),u[N]=nt)}function ut(N){I.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),I.copy(N))}function gt(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function tt(N,nt){let Q=c.get(nt);Q===void 0&&(Q=new WeakMap,c.set(nt,Q));let pt=Q.get(N);pt===void 0&&(pt=n.getUniformBlockIndex(nt,N.name),n.uniformBlockBinding(nt,pt,pt),Q.set(N,pt))}function it(N,nt,Q){let ht=c.get(nt).get(N);l[ht]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ht,Q),l[ht]=Q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,j={},f={},l={},d=new WeakMap,g=[],y=null,p=!1,m=null,v=null,b=null,_=null,w=null,T=null,x=null,M=new Ut(0,0,0),k=0,P=!1,L=null,O=null,C=null,E=null,z=null,I.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Ft,bindFramebuffer:$t,drawBuffers:Mt,useProgram:Ht,setBlending:Ce,setMaterial:we,setFlipSided:je,setCullFace:_e,setLineWidth:Oi,setPolygonOffset:He,setScissorTest:mi,activeTexture:gi,bindTexture:xi,unbindTexture:H,compressedTexImage2D:yi,compressedTexImage3D:xe,texImage2D:S,texImage3D:K,pixelStorei:st,getParameter:at,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Gt,texStorage3D:R,texSubImage2D:ye,texSubImage3D:yt,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Dt,scissor:ut,viewport:gt,reset:dt}}function ex(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,y=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return p?new OffscreenCanvas(R,S):Js("canvas")}function v(R,S,K){let at=1,st=Gt(R);if((st.width>K||st.height>K)&&(at=K/Math.max(st.width,st.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ut=Math.floor(at*st.width),gt=Math.floor(at*st.height);f===void 0&&(f=m(ut,gt));let tt=S?m(ut,gt):f;return tt.width=ut,tt.height=gt,tt.getContext("2d").drawImage(R,0,0,ut,gt),Nt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+gt+")."),tt}else return"data"in R&&Nt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function b(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,S,K,at,st,ut=!1){if(R!==null){if(n[R]!==void 0)return n[R];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;at&&(gt=t.get("EXT_texture_norm16"),gt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===n.RED&&(K===n.FLOAT&&(tt=n.R32F),K===n.HALF_FLOAT&&(tt=n.R16F),K===n.UNSIGNED_BYTE&&(tt=n.R8),K===n.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),K===n.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(tt=n.R8UI),K===n.UNSIGNED_SHORT&&(tt=n.R16UI),K===n.UNSIGNED_INT&&(tt=n.R32UI),K===n.BYTE&&(tt=n.R8I),K===n.SHORT&&(tt=n.R16I),K===n.INT&&(tt=n.R32I)),S===n.RG&&(K===n.FLOAT&&(tt=n.RG32F),K===n.HALF_FLOAT&&(tt=n.RG16F),K===n.UNSIGNED_BYTE&&(tt=n.RG8),K===n.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),K===n.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(tt=n.RG8UI),K===n.UNSIGNED_SHORT&&(tt=n.RG16UI),K===n.UNSIGNED_INT&&(tt=n.RG32UI),K===n.BYTE&&(tt=n.RG8I),K===n.SHORT&&(tt=n.RG16I),K===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),K===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),K===n.UNSIGNED_INT&&(tt=n.RGB32UI),K===n.BYTE&&(tt=n.RGB8I),K===n.SHORT&&(tt=n.RGB16I),K===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),K===n.UNSIGNED_INT&&(tt=n.RGBA32UI),K===n.BYTE&&(tt=n.RGBA8I),K===n.SHORT&&(tt=n.RGBA16I),K===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&(K===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),K===n.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),S===n.RGBA){let it=ut?Zs:Qt.getTransfer(st);K===n.FLOAT&&(tt=n.RGBA32F),K===n.HALF_FLOAT&&(tt=n.RGBA16F),K===n.UNSIGNED_BYTE&&(tt=it===oe?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),K===n.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(R,S){let K;return R?S===null||S===Pi||S===Jn?K=n.DEPTH24_STENCIL8:S===bi?K=n.DEPTH32F_STENCIL8:S===Cs&&(K=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===Jn?K=n.DEPTH_COMPONENT24:S===bi?K=n.DEPTH_COMPONENT32F:S===Cs&&(K=n.DEPTH_COMPONENT16),K}function M(R,S){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==ai?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function k(R){let S=new WeakRef(R);i.get(R).__ref=S,g.add(S),y.register(R,S,S)}function P(R){let S=i.get(R).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function L(R){C(R.target)}function O(R){E(R.target)}function C(R){R.removeEventListener("dispose",L),P(R),U(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function E(R){R.removeEventListener("dispose",O),P(R),q(R)}function z(){for(let R of g){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?E(S):C(S))}g.clear(),u.clear()}function U(R){let S=i.get(R);if(S.__webglInit===void 0)return;let K=R.source,at=d.get(K);if(at){let st=at[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(R),Object.keys(at).length===0&&d.delete(K)}i.remove(R)}function D(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let K=R.source,at=d.get(K);delete at[S.__cacheKey],a.memory.textures--}function q(R){let S=i.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let K=R.depthTexture;if(K&&K.renderTarget===R&&C(K),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ut=0;ut<S.__webglFramebuffer[st].length;ut++)n.deleteFramebuffer(S.__webglFramebuffer[st][ut]);else n.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)n.deleteFramebuffer(S.__webglFramebuffer[st]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let at=R.textures;for(let st=0,ut=at.length;st<ut;st++){let gt=i.get(at[st]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(at[st])}i.remove(R)}let G=0;function Z(){G=0}function j(){return G}function B(R){G=R}function W(){let R=G;return R>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,R}function I(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function et(R,S){let K=i.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){let at=R.image;if(at===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,R,S);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+S)}function ot(R,S){let K=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){we(K,R,S);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+S)}function ct(R,S){let K=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){we(K,R,S);return}e.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+S)}function rt(R,S){let K=i.get(R);if(R.version>0&&K.__version!==R.version){je(K,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+S)}let Ft={[Mn]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},$t={[Xe]:n.NEAREST,[tu]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[ln]:n.LINEAR_MIPMAP_LINEAR},Mt={[su]:n.NEVER,[ic]:n.ALWAYS,[ru]:n.LESS,[tc]:n.LEQUAL,[au]:n.EQUAL,[ec]:n.GEQUAL,[ou]:n.GREATER,[lu]:n.NOTEQUAL};function Ht(R,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ai||S.magFilter===Ya||S.magFilter===xr||S.magFilter===ln||S.minFilter===ai||S.minFilter===Ya||S.minFilter===xr||S.minFilter===ln)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ft[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ft[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ft[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$t[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$t[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==xr&&S.minFilter!==ln||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function te(R,S){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L),k(S));let at=S.source,st=d.get(at);st===void 0&&(st={},d.set(at,st));let ut=I(S);if(ut!==R.__cacheKey){st[ut]===void 0&&(st[ut]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),st[ut].usedTimes++;let gt=st[R.__cacheKey];gt!==void 0&&(st[R.__cacheKey].usedTimes--,gt.usedTimes===0&&D(S)),R.__cacheKey=ut,R.__webglTexture=st[ut].texture}return K}function Zt(R,S,K){return Math.floor(Math.floor(R/K)/S)}function Ce(R,S,K,at){let ut=R.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,K,at,S.data);else{ut.sort((N,nt)=>N.start-nt.start);let gt=0;for(let N=1;N<ut.length;N++){let nt=ut[gt],Q=ut[N],pt=nt.start+nt.count,ht=Zt(Q.start,S.width,4),ft=Zt(nt.start,S.width,4);Q.start<=pt+1&&ht===ft&&Zt(Q.start+Q.count-1,S.width,4)===ht?nt.count=Math.max(nt.count,Q.start+Q.count-nt.start):(++gt,ut[gt]=Q)}ut.length=gt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let N=0,nt=ut.length;N<nt;N++){let Q=ut[N],pt=Math.floor(Q.start/4),ht=Math.ceil(Q.count/4),ft=pt%S.width,Rt=Math.floor(pt/S.width),Yt=ht,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(n.TEXTURE_2D,0,ft,Rt,Yt,lt,K,at,S.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function we(R,S,K){let at=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=n.TEXTURE_3D);let st=te(R,S),ut=S.source;e.bindTexture(at,R.__webglTexture,n.TEXTURE0+K);let gt=i.get(ut);if(ut.version!==gt.__version||st===!0){if(e.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let lt=Qt.getPrimaries(Qt.workingColorSpace),It=S.colorSpace===hn?null:Qt.getPrimaries(S.colorSpace),Xt=S.colorSpace===hn||lt===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let it=v(S.image,!1,s.maxTextureSize);it=Dt(S,it);let dt=r.convert(S.format,S.colorSpace),N=r.convert(S.type),nt=T(S.internalFormat,dt,N,S.normalized,S.colorSpace,S.isVideoTexture);Ht(at,S);let Q,pt=S.mipmaps,ht=S.isVideoTexture!==!0,ft=gt.__version===void 0||st===!0,Rt=ut.dataReady,Yt=M(S,it);if(S.isDepthTexture)nt=x(S.format===cn,S.type),ft&&(ht?e.texStorage2D(n.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,dt,N,null));else if(S.isDataTexture)if(pt.length>0){ht&&ft&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,pt[0].width,pt[0].height);for(let lt=0,It=pt.length;lt<It;lt++)Q=pt[lt],ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,N,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,dt,N,Q.data);S.generateMipmaps=!1}else ht?(ft&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height),Rt&&Ce(S,it,dt,N)):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,dt,N,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,pt[0].width,pt[0].height,it.depth);for(let lt=0,It=pt.length;lt<It;lt++)if(Q=pt[lt],S.format!==Li)if(dt!==null)if(ht){if(Rt)if(S.layerUpdates.size>0){let Xt=cc(Q.width,Q.height,S.format,S.type);for(let vt of S.layerUpdates){let le=Q.data.subarray(vt*Xt/Q.data.BYTES_PER_ELEMENT,(vt+1)*Xt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,vt,Q.width,Q.height,1,dt,le)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,dt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,Q.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,dt,N,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,dt,N,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ht&&ft&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,pt[0].width,pt[0].height);for(let lt=0,It=pt.length;lt<It;lt++)Q=pt[lt],S.format!==Li?dt!==null?ht?Rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,Q.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,dt,N,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,dt,N,Q.data)}else if(S.isDataArrayTexture)if(ht){if(ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,it.width,it.height,it.depth),Rt)if(S.layerUpdates.size>0){let lt=cc(it.width,it.height,S.format,S.type);for(let It of S.layerUpdates){let Xt=it.data.subarray(It*lt/it.data.BYTES_PER_ELEMENT,(It+1)*lt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,it.width,it.height,1,dt,N,Xt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,N,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,dt,N,it.data);else if(S.isData3DTexture)ht?(ft&&e.texStorage3D(n.TEXTURE_3D,Yt,nt,it.width,it.height,it.depth),Rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,N,it.data)):e.texImage3D(n.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,dt,N,it.data);else if(S.isFramebufferTexture){if(ft)if(ht)e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height);else{let lt=it.width,It=it.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(n.TEXTURE_2D,Xt,nt,lt,It,0,dt,N,null),lt>>=1,It>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),it.parentNode!==lt){lt.appendChild(it),u.add(S),lt.onpaint=It=>{let Xt=It.changedElements;for(let vt of u)Xt.includes(vt.image)&&(vt.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Xt=n.RGBA,vt=n.RGBA,le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xt,vt,le,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&ft){let lt=Gt(pt[0]);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}for(let lt=0,It=pt.length;lt<It;lt++)Q=pt[lt],ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,dt,N,Q):e.texImage2D(n.TEXTURE_2D,lt,nt,dt,N,Q);S.generateMipmaps=!1}else if(ht){if(ft){let lt=Gt(it);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}Rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,it)}else e.texImage2D(n.TEXTURE_2D,0,nt,dt,N,it);b(S)&&S.mipmapsAutoUpdate===!0&&_(at),gt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function je(R,S,K){if(S.image.length!==6)return;let at=te(R,S),st=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+K);let ut=i.get(st);if(st.version!==ut.__version||at===!0){e.activeTexture(n.TEXTURE0+K);let gt=Qt.getPrimaries(Qt.workingColorSpace),tt=S.colorSpace===hn?null:Qt.getPrimaries(S.colorSpace),it=S.colorSpace===hn||gt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let dt=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,nt=[];for(let vt=0;vt<6;vt++)!dt&&!N?nt[vt]=v(S.image[vt],!0,s.maxCubemapSize):nt[vt]=N?S.image[vt].image:S.image[vt],nt[vt]=Dt(S,nt[vt]);let Q=nt[0],pt=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),ft=T(S.internalFormat,pt,ht,S.normalized,S.colorSpace),Rt=S.isVideoTexture!==!0,Yt=ut.__version===void 0||at===!0,lt=st.dataReady,It=M(S,Q);Ht(n.TEXTURE_CUBE_MAP,S);let Xt;if(S.isDepthTexture){if(ft=x(S.format===cn,S.type),Yt)if(Rt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ft,Q.width,Q.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ft,Q.width,Q.height,0,pt,ht,null)}else if(dt){Rt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ft,Q.width,Q.height);for(let vt=0;vt<6;vt++){Xt=nt[vt].mipmaps;for(let le=0;le<Xt.length;le++){let Ge=Xt[le];S.format!==Li?pt!==null?Rt?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,Ge.width,Ge.height,pt,Ge.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,ft,Ge.width,Ge.height,0,Ge.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,Ge.width,Ge.height,pt,ht,Ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,ft,Ge.width,Ge.height,0,pt,ht,Ge.data)}}}else{if(Xt=S.mipmaps,Rt&&Yt){Xt.length>0&&It++;let vt=Gt(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ft,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(N){Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,nt[vt].width,nt[vt].height,pt,ht,nt[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ft,nt[vt].width,nt[vt].height,0,pt,ht,nt[vt].data);for(let le=0;le<Xt.length;le++){let pn=Xt[le].image[vt].image;Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,pn.width,pn.height,pt,ht,pn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,ft,pn.width,pn.height,0,pt,ht,pn.data)}}else{Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,pt,ht,nt[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ft,pt,ht,nt[vt]);for(let le=0;le<Xt.length;le++){let Ge=Xt[le];Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,pt,ht,Ge.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,ft,pt,ht,Ge.image[vt])}}}b(S)&&S.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),ut.__version=st.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,K,at,st,ut){let gt=r.convert(K.format,K.colorSpace),tt=r.convert(K.type),it=T(K.internalFormat,gt,tt,K.normalized,K.colorSpace),dt=i.get(S),N=i.get(K);if(N.__renderTarget=S,!dt.__hasExternalTextures){let nt=Math.max(1,S.width>>ut),Q=Math.max(1,S.height>>ut);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,ut,it,nt,Q,S.depth,0,gt,tt,null):e.texImage2D(st,ut,it,nt,Q,0,gt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,st,N.__webglTexture,0,ye(S)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,st,N.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Oi(R,S,K){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let at=S.depthTexture,st=at&&at.isDepthTexture?at.type:null,ut=x(S.stencilBuffer,st),gt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(S),ut,S.width,S.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(S),ut,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ut,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,R)}else{let at=S.textures;for(let st=0;st<at.length;st++){let ut=at[st],gt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),it=T(ut.internalFormat,gt,tt,ut.normalized,ut.colorSpace);yt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(S),it,S.width,S.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(S),it,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,it,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(R,S,K){let at=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(S.depthTexture);st.__renderTarget=S;let ut=at?S.depthTexture.image[0]:S.depthTexture.image;(!st.__webglTexture||ut.width!==S.width||ut.height!==S.height)&&(ut.width=S.width,ut.height=S.height,S.depthTexture.needsUpdate=!0),at?rt(S.depthTexture,0):et(S.depthTexture,0);let gt=st.__webglTexture,tt=ye(S),it=at?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,dt=S.depthTexture.format===cn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===rn)yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,it,gt,0);else if(S.depthTexture.format===cn)yt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mi(R){let S=i.get(R),K=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let at=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),at){let st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,at.removeEventListener("dispose",st)};at.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=at}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(K)for(let at=0;at<6;at++)He(S.__webglFramebuffer[at],R,at);else R.texture.mipmaps.length>0?He(S.__webglFramebuffer[0],R,0):He(S.__webglFramebuffer,R,0);else if(K){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]===void 0)S.__webglDepthbuffer[at]=n.createRenderbuffer(),Oi(S.__webglDepthbuffer[at],R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ut)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Oi(S.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function gi(R,S,K){let at=i.get(R);S!==void 0&&_e(at.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&mi(R)}function xi(R){let S=R.texture,K=i.get(R),at=i.get(S);R.addEventListener("dispose",O),k(R);let st=R.textures,ut=R.isWebGLCubeRenderTarget===!0,gt=st.length>1;if(gt||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=S.version,a.memory.textures++),ut){K.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0){K.__webglFramebuffer[tt]=[];for(let it=0;it<S.mipmaps.length;it++)K.__webglFramebuffer[tt][it]=n.createFramebuffer()}else K.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(S.mipmaps.length>0){K.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)K.__webglFramebuffer[tt]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(gt)for(let tt=0,it=st.length;tt<it;tt++){let dt=i.get(st[tt]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&yt(R)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let tt=0;tt<st.length;tt++){let it=st[tt];K.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[tt]);let dt=r.convert(it.format,it.colorSpace),N=r.convert(it.type),nt=T(it.internalFormat,dt,N,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),Q=ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,nt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,K.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Oi(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)_e(K.__webglFramebuffer[tt][it],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else _e(K.__webglFramebuffer[tt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(S)?_(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let tt=0,it=st.length;tt<it;tt++){let dt=st[tt],N=i.get(dt),nt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),Ht(nt,dt),_e(K.__webglFramebuffer,R,dt,n.COLOR_ATTACHMENT0+tt,nt,0),b(dt)&&_(nt)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,at.__webglTexture),Ht(tt,S),S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)_e(K.__webglFramebuffer[it],R,S,n.COLOR_ATTACHMENT0,tt,it);else _e(K.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,tt,0);b(S)?_(tt):S.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&mi(R)}function H(R){let S=R.textures;for(let K=0,at=S.length;K<at;K++){let st=S[K];if(b(st)&&st.mipmapsAutoUpdate===!0){let ut=w(R),gt=i.get(st).__webglTexture;e.bindTexture(ut,gt),_(ut),e.unbindTexture()}}}let yi=[];function xe(R){if(R.samples>0){if(yt(R)===!1){let S=R.textures,K=R.width,at=R.height,st=n.COLOR_BUFFER_BIT,ut=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(R),tt=S.length>1;if(tt)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let N=i.get(S[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,K,at,0,0,K,at,st,n.NEAREST),l===!0&&(yi.length=0,yi.push(n.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&yi.push(ut),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yi))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let N=i.get(S[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ye(R){return Math.min(s.maxSamples,R.samples)}function yt(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Dt(R,S){let K=R.colorSpace,at=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==$s&&K!==hn&&(Qt.getTransfer(K)===oe?(at!==Li||st!==ci)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",K)),S}function Gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=B,this.setTexture2D=et,this.setTexture2DArray=ot,this.setTexture3D=ct,this.setTextureCube=rt,this.rebindTextures=gi,this.setupRenderTarget=xi,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=mi,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=yt,this.dispose=z}function ix(n,t){function e(i,s=hn){let r,a=Qt.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===$a)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kl)return n.BYTE;if(i===$l)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===jl)return n.ALPHA;if(i===Ql)return n.RGB;if(i===Li)return n.RGBA;if(i===rn)return n.DEPTH_COMPONENT;if(i===cn)return n.DEPTH_STENCIL;if(i===Ja)return n.RED;if(i===ja)return n.RED_INTEGER;if(i===Pn)return n.RG;if(i===Qa)return n.RG_INTEGER;if(i===to)return n.RGBA_INTEGER;if(i===yr||i===vr||i===_r||i===br)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eo||i===io||i===no||i===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===ao||i===oo||i===lo||i===co||i===Mr||i===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ro||i===ao)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return r.COMPRESSED_R11_EAC;if(i===co)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mr)return r.COMPRESSED_RG11_EAC;if(i===ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uo||i===fo||i===po||i===mo||i===go||i===xo||i===yo||i===vo||i===_o||i===bo||i===Mo||i===So||i===wo||i===To)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===Eo||i===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ao)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Po||i===Sr||i===Io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new qi({vertexShader:nx,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends zi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Sc,m={},v=e.getContextAttributes(),b=null,_=null,w=[],T=[],x=new qt,M=null,k=null,P=new $e;P.viewport=new ve;let L=new $e;L.viewport=new ve;let O=[P,L],C=new Ga,E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let et=w[I];return et===void 0&&(et=new _s,w[I]=et),et.getTargetRaySpace()},this.getControllerGrip=function(I){let et=w[I];return et===void 0&&(et=new _s,w[I]=et),et.getGripSpace()},this.getHand=function(I){let et=w[I];return et===void 0&&(et=new _s,w[I]=et),et.getHandSpace()};function U(I){let et=T.indexOf(I.inputSource);if(et===-1)return;let ot=w[et];ot!==void 0&&(ot.update(I.inputSource,I.frame,c||a),ot.dispatchEvent({type:I.type,data:I.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",q);for(let I=0;I<w.length;I++){let et=T[I];et!==null&&(T[I]=null,w[I].disconnect(et))}E=null,z=null,p.reset();for(let I in m)delete m[I];if(t.setRenderTarget(b),d=null,f=null,u=null,s=null,_=null,W.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),k!==null){let I=k.camera;I.fov=k.fov,I.zoom=k.zoom,I.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ct=null,rt=null;v.depth&&(rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=v.stencil?cn:rn,ct=v.stencil?Jn:Pi);let Ft={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new fi(f.textureWidth,f.textureHeight,{format:Li,type:ci,depthTexture:new on(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new fi(d.framebufferWidth,d.framebufferHeight,{format:Li,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(I){for(let et=0;et<I.removed.length;et++){let ot=I.removed[et],ct=T.indexOf(ot);ct>=0&&(T[ct]=null,w[ct].disconnect(ot))}for(let et=0;et<I.added.length;et++){let ot=I.added[et],ct=T.indexOf(ot);if(ct===-1){for(let Ft=0;Ft<w.length;Ft++)if(Ft>=T.length){T.push(ot),ct=Ft;break}else if(T[Ft]===null){T[Ft]=ot,ct=Ft;break}if(ct===-1)break}let rt=w[ct];rt&&rt.connect(ot)}}function G(I,et){et===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(et.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let et=I.near,ot=I.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),C.near=L.near=P.near=et,C.far=L.far=P.far=ot,(E!==C.near||z!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),E=C.near,z=C.far),C.layers.mask=I.layers.mask|6,P.layers.mask=C.layers.mask&-5,L.layers.mask=C.layers.mask&-3;let ct=I.parent,rt=C.cameras;G(C,ct);for(let Ft=0;Ft<rt.length;Ft++)G(rt[Ft],ct);C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),k===null&&I.isPerspectiveCamera&&(k={camera:I,fov:I.fov,zoom:I.zoom}),Z(I,C,ct)};function Z(I,et,ot){ot===null?I.matrix.copy(et.matrixWorld):(I.matrix.copy(ot.matrixWorld),I.matrix.invert(),I.matrix.multiply(et.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(et.projectionMatrix),I.projectionMatrixInverse.copy(et.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=va*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(C)},this.getCameraTexture=function(I){return m[I]};let j=null;function B(I,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ct=!1;ot.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Mt=0;Mt<ot.length;Mt++){let Ht=ot[Mt],te=null;if(d!==null)te=d.getViewport(Ht);else{let Ce=u.getViewSubImage(f,Ht);te=Ce.viewport,Mt===0&&(t.setRenderTargetTextures(_,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(_))}let Zt=O[Mt];Zt===void 0&&(Zt=new $e,Zt.layers.enable(Mt),Zt.viewport=new ve,O[Mt]=Zt),Zt.matrix.fromArray(Ht.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Ht.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(te.x,te.y,te.width,te.height),Mt===0&&(C.matrix.copy(Zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Zt)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Mt=u.getDepthInformation(ot[0]);Mt&&Mt.isValid&&Mt.texture&&p.init(Mt,s.renderState)}if(rt&&rt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Mt=0;Mt<ot.length;Mt++){let Ht=ot[Mt].camera;if(Ht){let te=m[Ht];te||(te=new lr,m[Ht]=te);let Zt=u.getCameraImage(Ht);te.sourceTexture=Zt}}}}for(let ot=0;ot<w.length;ot++){let ct=T[ot],rt=w[ot];ct!==null&&rt!==void 0&&rt.update(ct,et,c||a)}j&&j(I,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let W=new Bu;W.setAnimationLoop(B),this.setAnimationLoop=function(I){j=I},this.dispose=function(){}}},rx=new ce,Zu=new Bt;Zu.set(-1,0,0,0,1,0,0,0,1);function ax(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ac(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),b=v.envMap,_=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,t,e,i){let s={},r={};function a(v,b){let _=b.program;i.uniformBlockBinding(v,_,s[v.id])}function o(v,b){let _=s[v.id];_===void 0&&(g(v),_=l(v),s[v.id]=_,v.addEventListener("dispose",p));let w=b.program;i.updateUBOMapping(v,w);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let b=n.createBuffer(),_=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,_,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],_=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,x=_.length;T<x;T++){let M=_[T];if(Array.isArray(M))for(let k=0,P=M.length;k<P;k++)h(M[k],T,k,w);else h(M,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,_,w){if(f(v,b,_,w)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let k=0;k<x.length;k++){let P=x[k],L=y(P,!0);u(P,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function u(v,b,_){typeof v=="number"||typeof v=="boolean"?b[_]=v:v.isMatrix3?(b[_]=v.elements[0],b[_+1]=v.elements[1],b[_+2]=v.elements[2],b[_+3]=0,b[_+4]=v.elements[3],b[_+5]=v.elements[4],b[_+6]=v.elements[5],b[_+7]=0,b[_+8]=v.elements[6],b[_+9]=v.elements[7],b[_+10]=v.elements[8],b[_+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-_),_):v.toArray(b,_)}function f(v,b,_,w){let T=v.value,x=b+"_"+_;if(Array.isArray(T)){w[x]===void 0&&(w[x]=[]);let M=w[x],k=!1;for(let P=0;P<T.length;P++)d(T[P],M,P)===!0&&(k=!0);return k}return d(T,w,x)}function d(v,b,_){if(b[_]===void 0)return typeof v=="number"||typeof v=="boolean"?b[_]=v:ArrayBuffer.isView(v)?b[_]=v.slice():b[_]=v.clone(),!0;{let w=b[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return b[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){let b=v.uniforms,_=0,w=16;for(let x=0,M=b.length;x<M;x++){let k=Array.isArray(b[x])?b[x]:[b[x]];for(let P=0,L=k.length;P<L;P++){let O=k[P],C=Array.isArray(O.value)?O.value:[O.value],E=Array.isArray(b[x])||Array.isArray(O.value),z=_;for(let D=0,q=C.length;D<q;D++){let G=C[D],Z=y(G,E),j=_%w,B=j%Z.boundary,W=j+B;_+=B,W!==0&&w-W<Z.storage&&(_+=w-W),D===0&&(z=_),_+=Z.storage}let U=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new U((_-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let T=_%w;return T>0&&(_+=w-T),v.__size=_,v.__cache={},this}function y(v,b){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(v){let b=v.target;b.removeEventListener("dispose",p),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function cx(){return Ki===null&&(Ki=new nr(lx,16,16,Pn,Ii),Ki.name="DFG_LUT",Ki.minFilter=ai,Ki.magFilter=ai,Ki.wrapS=li,Ki.wrapT=li,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Uo=class{constructor(t={}){let{canvas:e=hu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ci}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=d,p=new Set([to,Qa,ja]),m=new Set([ci,Pi,Cs,Jn,$a,Za]),v=new Uint32Array(4),b=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,T=null,x=[],M=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,O=null,C=null,E=null,z=null;this._outputColorSpace=Ke;let U=0,D=0,q=null,G=-1,Z=null,j=new ve,B=new ve,W=null,I=new Ut(0),et=0,ot=e.width,ct=e.height,rt=1,Ft=null,$t=null,Mt=new ve(0,0,ot,ct),Ht=new ve(0,0,ot,ct),te=!1,Zt=new Sn,Ce=new Sa,we=!1,je=!1,_e=new ce,Oi=new X,He=new ve,mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gi=!1;function xi(){return q===null?rt:1}let H=i;function yi(A,F){return e.getContext(A,F)}let xe,ye,yt,Ne,Dt,Gt,R,S,K,at,st,ut,gt,tt,it,dt,N,nt,Q,pt,ht,ft,Rt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),H===null){let F="webgl2";if(H=yi(F,A),H===null)throw yi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(A){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),zt("WebGLRenderer: "+A.message),A}function Yt(){xe=new _m(H),xe.init(),ht=new ix(H,xe),ye=new cm(H,xe,t,ht),yt=new tx(H,xe),ye.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),C=H.createFramebuffer(),E=H.createFramebuffer(),z=H.createFramebuffer(),Ne=new Sm(H),Dt=new Bg,Gt=new ex(H,xe,yt,Dt,ye,ht,Ne),R=new vm(P),S=new Td(H),ft=new om(H,S),K=new bm(H,S,Ne,ft),at=new Tm(H,K,S,ft,Ne),nt=new wm(H,ye,Gt),it=new hm(Dt),st=new zg(P,R,xe,ye,ft,it),ut=new ax(P,Dt),gt=new Gg,tt=new Kg(xe),N=new am(P,R,yt,at,g,l),dt=new Qg(P,at,ye),Rt=new ox(H,Ne,ye,yt),Q=new lm(H,xe,Ne),pt=new Mm(H,xe,Ne),Ne.programs=st.programs,P.capabilities=ye,P.extensions=xe,P.properties=Dt,P.renderLists=gt,P.shadowMap=dt,P.state=yt,P.info=Ne}y!==ci&&(k=new Em(y,e.width,e.height,o,s,r));let lt=new wc(P,H);this.xr=lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(A){A!==void 0&&(rt=A,this.setSize(ot,ct,!1))},this.getSize=function(A){return A.set(ot,ct)},this.setSize=function(A,F,J=!0){if(lt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,ct=F,e.width=Math.floor(A*rt),e.height=Math.floor(F*rt),J===!0&&(e.style.width=A+"px",e.style.height=F+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ot*rt,ct*rt).floor()},this.setDrawingBufferSize=function(A,F,J){ot=A,ct=F,rt=J,e.width=Math.floor(A*J),e.height=Math.floor(F*J),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(y===ci){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Mt)},this.setViewport=function(A,F,J,Y){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,F,J,Y),yt.viewport(j.copy(Mt).multiplyScalar(xi()).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,F,J,Y){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,F,J,Y),yt.scissor(B.copy(Ht).multiplyScalar(xi()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){yt.setScissorTest(te=A)},this.setOpaqueSort=function(A){Ft=A},this.setTransparentSort=function(A){$t=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,J=!0){let Y=0;if(A){let $=!1;if(q!==null){let xt=q.texture.format;$=p.has(xt)}if($){let xt=q.texture.type,wt=m.has(xt),mt=N.getClearColor(),St=N.getClearAlpha(),Ct=mt.r,Wt=mt.g,Jt=mt.b;wt?(v[0]=Ct,v[1]=Wt,v[2]=Jt,v[3]=St,H.clearBufferuiv(H.COLOR,0,v)):(b[0]=Ct,b[1]=Wt,b[2]=Jt,b[3]=St,H.clearBufferiv(H.COLOR,0,b))}else Y|=H.COLOR_BUFFER_BIT}F&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),N.dispose(),gt.dispose(),tt.dispose(),Gt.dispose(),Dt.dispose(),R.dispose(),at.dispose(),K.dispose(),ft.dispose(),Rt.dispose(),st.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Wc),lt.removeEventListener("sessionend",Xc),Nn.stop()};function It(A){A.preventDefault(),sc("WebGLRenderer: Context Lost."),L=!0}function Xt(){sc("WebGLRenderer: Context Restored."),L=!1;let A=Ne.autoReset,F=dt.enabled,J=dt.autoUpdate,Y=dt.needsUpdate,$=dt.type;Yt(),Ne.autoReset=A,dt.enabled=F,dt.autoUpdate=J,dt.needsUpdate=Y,dt.type=$}function vt(A){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){let F=A.target;F.removeEventListener("dispose",le),Ge(F)}function Ge(A){pn(A),Dt.remove(A)}function pn(A){let F=Dt.get(A).programs;F!==void 0&&(F.forEach(function(J){st.releaseProgram(J)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,J,Y,$,xt){F===null&&(F=mi);let wt=$.isMesh&&$.matrixWorld.determinantAffine()<0,mt=Of(A,F,J,Y,$);yt.setMaterial(Y,wt);let St=J.index,Ct=1;if(Y.wireframe===!0){if(St=K.getWireframeAttribute(J),St===void 0)return;Ct=2}let Wt=J.drawRange,Jt=J.attributes.position,At=Wt.start*Ct,jt=(Wt.start+Wt.count)*Ct;xt!==null&&(At=Math.max(At,xt.start*Ct),jt=Math.min(jt,(xt.start+xt.count)*Ct)),St!==null?(At=Math.max(At,0),jt=Math.min(jt,St.count)):Jt!=null&&(At=Math.max(At,0),jt=Math.min(jt,Jt.count));let Re=jt-At;if(Re<0||Re===1/0)return;ft.setup($,Y,mt,J,St);let pe,de=Q;if(St!==null&&(pe=S.get(St),de=pt,de.setIndex(pe)),$.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*xi()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if($.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),yt.setLineWidth(Qe*xi()),$.isLineSegments?de.setMode(H.LINES):$.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else $.isPoints?de.setMode(H.POINTS):$.isSprite&&de.setMode(H.TRIANGLES);if($.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))de.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Qe=$._multiDrawStarts,Et=$._multiDrawCounts,ri=$._multiDrawCount,re=St?S.get(St).bytesPerElement:1,Un=Dt.get(Y).currentProgram.getUniforms();for(let ti=0;ti<ri;ti++)Un.setValue(H,"_gl_DrawID",ti),de.render(Qe[ti]/re,Et[ti])}else if($.isInstancedMesh)de.renderInstances(At,Re,$.count);else if(J.isInstancedBufferGeometry){let Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Et=Math.min(J.instanceCount,Qe);de.renderInstances(At,Re,Et)}else de.render(At,Re)};function Vc(A,F,J,Y){O!==null&&A.isNodeMaterial&&O.setObject(Y,A),we===!0&&it.setState(A,J,!1),A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,zs(A,F,Y),A.side=Rn,A.needsUpdate=!0,zs(A,F,Y),A.side=Ie):zs(A,F,Y)}this.compile=function(A,F,J=null){J===null&&(J=A),O!==null&&O.renderStart(A,F,J),T=tt.get(J),T.init(F),M.push(T),J.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),A!==J&&A.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),je=this.localClippingEnabled,we=it.init(this.clippingPlanes,je),we===!0&&it.setGlobalState(this.clippingPlanes,F),O!==null&&dt.render(T.state.shadowsArray,J,F);let Y=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let xt=$.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let mt=xt[wt];Vc(mt,J,F,$),Y.add(mt)}else Vc(xt,J,F,$),Y.add(xt)}),T=M.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(A,F,J=null){let Y=this.compile(A,F,J);return new Promise($=>{function xt(){if(Y.forEach(function(wt){let St=Dt.get(wt).currentProgram;(St===void 0||St.isReady())&&Y.delete(wt)}),Y.size===0){$(A);return}setTimeout(xt,10)}xe.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let nl=null;function Nf(A){nl&&nl(A)}function Wc(){Nn.stop()}function Xc(){Nn.start()}let Nn=new Bu;Nn.setAnimationLoop(Nf),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){nl=A,lt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},lt.addEventListener("sessionstart",Wc),lt.addEventListener("sessionend",Xc),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(A,F);let J=lt.enabled===!0&&lt.isPresenting===!0,Y=k!==null&&(q===null||J)&&k.begin(P,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(F),F=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,F,q),T=tt.get(A,M.length),T.init(F),T.state.textureUnits=Gt.getTextureUnits(),M.push(T),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Ce.setFromArrayCamera(F):Zt.setFromProjectionMatrix(_e,_i,F.reversedDepth),je=this.localClippingEnabled,we=it.init(this.clippingPlanes,je),w=gt.get(A,x.length),w.init(),x.push(w),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let wt=P.xr.getDepthSensingMesh();wt!==null&&sl(wt,F,-1/0,P.sortObjects)}sl(A,F,0,P.sortObjects),w.finish(),O!==null&&O.updateLights(T.state.lightsArray),P.sortObjects===!0&&w.sort(Ft,$t),gi=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,gi&&N.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),we===!0&&it.beginShadows();let $=T.state.shadowsArray;if(dt.render($,A,F),we===!0&&it.endShadows(),(Y&&k.hasRenderPass())===!1){let wt=w.opaque,mt=w.transmissive;if(T.setupLights(),F.isArrayCamera){let St=F.cameras;if(mt.length>0)for(let Ct=0,Wt=St.length;Ct<Wt;Ct++){let Jt=St[Ct];Yc(wt,mt,A,Jt)}gi&&N.render(A);for(let Ct=0,Wt=St.length;Ct<Wt;Ct++){let Jt=St[Ct];qc(w,A,Jt,Jt.viewport)}}else mt.length>0&&Yc(wt,mt,A,F),gi&&N.render(A),qc(w,A,F)}q!==null&&D===0&&(Gt.updateMultisampleRenderTarget(q),Gt.updateRenderTargetMipmap(q)),Y&&k.end(P),A.isScene===!0&&A.onAfterRender(P,A,F),ft.resetDefaultState(),G=-1,Z=null,M.pop(),M.length>0?(T=M[M.length-1],Gt.setTextureUnits(T.state.textureUnits),we===!0&&it.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,O!==null&&O.renderEnd()};function sl(A,F,J,Y){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let wt=F.isArrayCamera?Ce:Zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){Y&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);let mt=at.update(A),St=A.material;St.visible&&w.push(A,mt,St,J,He.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let wt=F.isArrayCamera?Ce:Zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){let mt=at.update(A),St=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),He.copy(mt.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(St)){let Ct=mt.groups;for(let Wt=0,Jt=Ct.length;Wt<Jt;Wt++){let At=Ct[Wt],jt=St[At.materialIndex];jt&&jt.visible&&w.push(A,mt,jt,J,He.z,At,F)}}else St.visible&&w.push(A,mt,St,J,He.z,null,F)}}}let xt=A.children;for(let wt=0,mt=xt.length;wt<mt;wt++)sl(xt[wt],F,J,Y)}function qc(A,F,J,Y){let{opaque:$,transmissive:xt,transparent:wt}=A;T.setupLightsView(J),we===!0&&it.setGlobalState(P.clippingPlanes,J),Y&&yt.viewport(j.copy(Y)),$.length>0&&Nr($,F,J),xt.length>0&&Nr(xt,F,J),wt.length>0&&Nr(wt,F,J),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Yc(A,F,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let At=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new fi(1,1,{generateMipmaps:!0,type:At?Ii:ci,minFilter:ln,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let xt=T.state.transmissionRenderTarget[Y.id],wt=Y.viewport||j;xt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),St=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(xt),P.getClearColor(I),et=P.getClearAlpha(),et<1&&P.setClearColor(16777215,.5),P.clear(),gi&&N.render(J);let Wt=P.toneMapping;P.toneMapping=Yi;let Jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),we===!0&&it.setGlobalState(P.clippingPlanes,Y),Nr(A,J,Y),Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let jt=0,Re=F.length;jt<Re;jt++){let pe=F[jt],{object:de,geometry:Qe,material:Et,group:ri}=pe;if(Et.side===Ie&&de.layers.test(Y.layers)){let re=Et.side;Et.side=Ze,Et.needsUpdate=!0,Kc(de,J,Y,Qe,Et,ri),Et.side=re,Et.needsUpdate=!0,At=!0}}At===!0&&(Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt))}P.setRenderTarget(mt,St,Ct),P.setClearColor(I,et),Jt!==void 0&&(Y.viewport=Jt),P.toneMapping=Wt}function Nr(A,F,J){let Y=F.isScene===!0?F.overrideMaterial:null;for(let $=0,xt=A.length;$<xt;$++){let wt=A[$],{object:mt,geometry:St,group:Ct}=wt,Wt=wt.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),mt.layers.test(J.layers)&&Kc(mt,F,J,St,Wt,Ct)}}function Kc(A,F,J,Y,$,xt){O!==null&&$.isNodeMaterial&&O.setObject(A,$),A.onBeforeRender(P,F,J,Y,$,xt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(P,F,J,Y,A,xt),$.transparent===!0&&$.side===Ie&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,P.renderBufferDirect(J,F,Y,$,A,xt),$.side=Rn,$.needsUpdate=!0,P.renderBufferDirect(J,F,Y,$,A,xt),$.side=Ie):P.renderBufferDirect(J,F,Y,$,A,xt),A.onAfterRender(P,F,J,Y,$,xt)}function $c(A){let F=0;for(let J of A)J.texture!==null&&F++;return F}function zs(A,F,J){F.isScene!==!0&&(F=mi);let Y=Dt.get(A),$=T.state.lights,xt=T.state.shadowsArray,wt=$.state.version,mt=st.getParameters(A,$.state,xt,F,J,T.state.lightProbeGridArray),St=st.getProgramCacheKey(mt),Ct=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;let Wt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=R.get(A.envMap||Y.environment,Wt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",le),Ct=new Map,Y.programs=Ct,Y.programVariants=new Map);let Jt=Ct.get(St);if(Jt!==void 0){if(Y.currentProgram===Jt&&Y.lightsStateVersion===wt)return Jc(A,mt),Jt}else mt.uniforms=st.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,J,mt),A.onBeforeCompile(mt,P),Jt=st.acquireProgram(mt,St),Ct.set(St,Jt),Y.uniforms=mt.uniforms;let At=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(At.clippingPlanes=it.uniform),Jc(A,mt),Y.needsLights=zf(A),Y.lightsStateVersion=wt,Y.needsLights&&(At.ambientLightColor.value=$.state.ambient,At.lightProbe.value=$.state.probe,At.sunLights.value=$.state.sun,At.sunLightShadows.value=$.state.sunShadow,At.directionalLights.value=$.state.directional,At.directionalLightShadows.value=$.state.directionalShadow,At.spotLights.value=$.state.spot,At.spotLightShadows.value=$.state.spotShadow,At.rectAreaLights.value=$.state.rectArea,At.ltc_1.value=$.state.rectAreaLTC1,At.ltc_2.value=$.state.rectAreaLTC2,At.pointLights.value=$.state.point,At.pointLightShadows.value=$.state.pointShadow,At.hemisphereLights.value=$.state.hemi,At.sunShadowMatrix.value=$.state.sunShadowMatrix,At.sunShadowCascade.value=$.state.sunShadowCascade,At.directionalShadowMatrix.value=$.state.directionalShadowMatrix,At.spotLightMatrix.value=$.state.spotLightMatrix,At.spotLightMap.value=$.state.spotLightMap,At.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=$c(T.state.lightProbeGridArray),Y.currentProgram=Jt,Y.uniformsList=null,Jt}function Uf(A,F,J,Y,$){let xt=Dt.get(A),wt=xt.currentProgram.id+","+Y+","+$,mt=xt.programVariants.get(wt);return mt===void 0?(mt=zs(A,F,J),xt.programVariants.set(wt,mt)):(xt.currentProgram=mt,xt.uniformsList=null,xt.outputColorSpace=Y,xt.toneMapping=$),mt}function Zc(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Rs.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Jc(A,F){let J=Dt.get(A);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Of(A,F,J,Y,$){F.isScene!==!0&&(F=mi),Gt.resetTextureUnits();let xt=F.fog,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,mt=q===null?P.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qt.workingColorSpace,St=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ct=R.get(Y.envMap||wt,St),Wt=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,Re=!!J.morphAttributes.color,pe=Yi;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(pe=P.toneMapping);let de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qe=de!==void 0?de.length:0,Et=Dt.get(Y),ri=T.state.lights;if(we===!0&&(je===!0||A!==Z)){let be=A===Z&&Y.id===G;it.setState(Y,A,be)}let re=!1,Un=!1;Y.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==ri.state.version||$.isBatchedMesh&&Et.batching===!1||!$.isBatchedMesh&&Et.batching===!0||$.isBatchedMesh&&Et.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Et.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Et.instancing===!1||!$.isInstancedMesh&&Et.instancing===!0||$.isSkinnedMesh&&Et.skinning===!1||!$.isSkinnedMesh&&Et.skinning===!0||$.isInstancedMesh&&Et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Et.instancingMorph===!1&&$.morphTexture!==null||Et.envMap!==Ct||Y.fog===!0&&Et.fog!==xt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Wt||Et.vertexTangents!==Jt||Et.morphTargets!==At||Et.morphNormals!==jt||Et.morphColors!==Re||Et.morphTargetsCount!==Qe||Et.numLightProbeGrids!==$c(T.state.lightProbeGridArray)?re=!0:(Et.outputColorSpace!==mt||Et.toneMapping!==pe)&&(Un=!0):(re=!0,Et.__version=Y.version);let ti=Et.currentProgram;(re===!0||Un===!0)&&(ti=Un===!0?Uf(Y,F,$,mt,pe):zs(Y,F,$),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,ti,Et));let Ur=!1,mn=!1,On=!1,ie=ti.getUniforms(),Ye=Et.uniforms;if(yt.useProgram(ti.program)&&(Ur=!0,mn=!0,On=!0),Y.id!==G&&(G=Y.id,mn=!0),Ur||Z!==A){yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ie.setValue(H,"projectionMatrix",A.projectionMatrix),ie.setValue(H,"viewMatrix",A.matrixWorldInverse);let Ve=ie.map.cameraPosition;Ve!==void 0&&Ve.setValue(H,Oi.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&ie.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ie.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,mn=!0,On=!0)}if(Et.needsLights&&(ri.state.sunShadowMap.length>0&&ie.setValue(H,"sunShadowMap",ri.state.sunShadowMap,Gt),ri.state.directionalShadowMap.length>0&&ie.setValue(H,"directionalShadowMap",ri.state.directionalShadowMap,Gt),ri.state.spotShadowMap.length>0&&ie.setValue(H,"spotShadowMap",ri.state.spotShadowMap,Gt),ri.state.pointShadowMap.length>0&&ie.setValue(H,"pointShadowMap",ri.state.pointShadowMap,Gt)),$.isSkinnedMesh){ie.setOptional(H,$,"bindMatrix"),ie.setOptional(H,$,"bindMatrixInverse");let be=$.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ie.setValue(H,"boneTexture",be.boneTexture,Gt))}$.isBatchedMesh&&(ie.setOptional(H,$,"batchingTexture"),ie.setValue(H,"batchingTexture",$._matricesTexture,Gt),ie.setOptional(H,$,"batchingIdTexture"),ie.setValue(H,"batchingIdTexture",$._indirectTexture,Gt),ie.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&ie.setValue(H,"batchingColorTexture",$._colorsTexture,Gt));let wi=J.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update($,J,ti),(mn||Et.receiveShadow!==$.receiveShadow)&&(Et.receiveShadow=$.receiveShadow,ie.setValue(H,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(Ye.envMapIntensity.value=F.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=cx()),mn){if(ie.setValue(H,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Ff(Ye,On),xt&&Y.fog===!0&&ut.refreshFogUniforms(Ye,xt),ut.refreshMaterialUniforms(Ye,Y,rt,ct,T.state.transmissionRenderTarget[A.id]),Et.needsLights&&Et.numLightProbeGrids>0){let be=_,Ve=0;for(let Ji of T.state.lightProbeGridArray)Ji.texture!==null&&(be.textures[Ve]=Ji.texture,be.min[Ve]=Ji.boundingBox.min,be.max[Ve]=Ji.boundingBox.max,be.resolution[Ve]=Ji.resolution,Ve++);for(let Ji in be)be[Ji].length=Ve;Ye.probesSH.value=be.textures,Ye.probesMin.value=be.min,Ye.probesMax.value=be.max,Ye.probesResolution.value=be.resolution}Rs.upload(H,Zc(Et),Ye,Gt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rs.upload(H,Zc(Et),Ye,Gt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ie.setValue(H,"center",$.center),ie.setValue(H,"modelViewMatrix",$.modelViewMatrix),ie.setValue(H,"normalMatrix",$.normalMatrix),ie.setValue(H,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let be=Y.uniformsGroups;for(let Ve=0,Ji=be.length;Ve<Ji;Ve++){let Qc=be[Ve];Rt.update(Qc,ti),Rt.bind(Qc,ti)}}return ti}function Ff(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function zf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,F,J){let Y=Dt.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Dt.get(A.texture).__webglTexture=F,Dt.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let J=Dt.get(A);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,J=0){q=A,U=F,D=J;let Y=null,$=!1,xt=!1;if(A){let mt=Dt.get(A);if(mt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(H.FRAMEBUFFER,mt.__webglFramebuffer),j.copy(A.viewport),B.copy(A.scissor),W=A.scissorTest,yt.viewport(j),yt.scissor(B),yt.setScissorTest(W),G=-1;return}else if(mt.__webglFramebuffer===void 0)Gt.setupRenderTarget(A);else if(mt.__hasExternalTextures)Gt.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Wt=A.depthTexture;if(mt.__boundDepthTexture!==Wt){if(Wt!==null&&Dt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(A)}}let St=A.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(xt=!0);let Ct=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?Y=Ct[F][J]:Y=Ct[F],$=!0):A.samples>0&&Gt.useMultisampledRTT(A)===!1?Y=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?Y=Ct[J]:Y=Ct,j.copy(A.viewport),B.copy(A.scissor),W=A.scissorTest}else j.copy(Mt).multiplyScalar(rt).floor(),B.copy(Ht).multiplyScalar(rt).floor(),W=te;if(J!==0&&(Y=C),yt.bindFramebuffer(H.FRAMEBUFFER,Y)&&yt.drawBuffers(A,Y),yt.viewport(j),yt.scissor(B),yt.setScissorTest(W),$){let mt=Dt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,J)}else if(xt){let mt=F;for(let St=0;St<A.textures.length;St++){let Ct=Dt.get(A.textures[St]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+St,Ct.__webglTexture,J,mt)}}else if(A!==null&&J!==0){let mt=Dt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mt.__webglTexture,J)}G=-1};function jc(A){let F=Dt.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=ye.textureFormatReadable(A.format),F.__typeReadable=ye.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,J,Y,$,xt,wt,mt=0){if(!(A&&A.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(St=St[wt],Array.isArray(St)&&(St=St[0])),St){yt.bindFramebuffer(H.FRAMEBUFFER,St);try{let Ct=A.textures[mt],Wt=Ct.format,Jt=Ct.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+mt);let At=jc(Ct);if(At.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-Y&&J>=0&&J<=A.height-$&&H.readPixels(F,J,Y,$,ht.convert(Wt),ht.convert(Jt),xt)}finally{let Ct=q!==null?Dt.get(q).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,F,J,Y,$,xt,wt,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(St=St[wt],Array.isArray(St)&&(St=St[0])),St)if(F>=0&&F<=A.width-Y&&J>=0&&J<=A.height-$){yt.bindFramebuffer(H.FRAMEBUFFER,St);let Ct=A.textures[mt],Wt=Ct.format,Jt=Ct.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+mt);let At=jc(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,xt.byteLength,H.STREAM_READ),H.readPixels(F,J,Y,$,ht.convert(Wt),ht.convert(Jt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Re=q!==null?Dt.get(q).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,Re);let pe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fu(H,pe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(jt),H.deleteSync(pe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,J=0){let Y=Math.pow(2,-J),$=Math.floor(A.image.width*Y),xt=Math.floor(A.image.height*Y),wt=F!==null?F.x:0,mt=F!==null?F.y:0;Gt.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,wt,mt,$,xt),yt.unbindTexture()},this.copyTextureToTexture=function(A,F,J=null,Y=null,$=0,xt=0){let wt,mt,St,Ct,Wt,Jt,At,jt,Re,pe=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(J!==null)wt=J.max.x-J.min.x,mt=J.max.y-J.min.y,St=J.isBox3?J.max.z-J.min.z:1,Ct=J.min.x,Wt=J.min.y,Jt=J.isBox3?J.min.z:0;else{let ie=Math.pow(2,-$);wt=Math.floor(pe.width*ie),mt=Math.floor(pe.height*ie),A.isDataArrayTexture?St=pe.depth:A.isData3DTexture?St=Math.floor(pe.depth*ie):St=1,Ct=0,Wt=0,Jt=0}Y!==null?(At=Y.x,jt=Y.y,Re=Y.z):(At=0,jt=0,Re=0);let de=ht.convert(F.format),Qe=ht.convert(F.type),Et;F.isData3DTexture?(Gt.setTexture3D(F,0),Et=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Gt.setTexture2DArray(F,0),Et=H.TEXTURE_2D_ARRAY):(Gt.setTexture2D(F,0),Et=H.TEXTURE_2D),yt.activeTexture(H.TEXTURE0),yt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),yt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),yt.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);let ri=yt.getParameter(H.UNPACK_ROW_LENGTH),re=yt.getParameter(H.UNPACK_IMAGE_HEIGHT),Un=yt.getParameter(H.UNPACK_SKIP_PIXELS),ti=yt.getParameter(H.UNPACK_SKIP_ROWS),Ur=yt.getParameter(H.UNPACK_SKIP_IMAGES);yt.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),yt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),yt.pixelStorei(H.UNPACK_SKIP_PIXELS,Ct),yt.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),yt.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);let mn=A.isDataArrayTexture||A.isData3DTexture,On=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let ie=Dt.get(A),Ye=Dt.get(F),wi=Dt.get(ie.__renderTarget),be=Dt.get(Ye.__renderTarget);yt.bindFramebuffer(H.READ_FRAMEBUFFER,wi.__webglFramebuffer),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<St;Ve++)mn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.get(A).__webglTexture,$,Jt+Ve),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.get(F).__webglTexture,xt,Re+Ve)),H.blitFramebuffer(Ct,Wt,Ct+wt,Wt+mt,At,jt,At+wt,jt+mt,H.DEPTH_BUFFER_BIT,H.NEAREST);yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Dt.has(A)){let ie=Dt.get(A),Ye=Dt.get(F);yt.bindFramebuffer(H.READ_FRAMEBUFFER,E),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,z);for(let wi=0;wi<St;wi++)mn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.__webglTexture,$,Jt+wi):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ie.__webglTexture,$),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,xt,Re+wi):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,xt),$!==0?H.blitFramebuffer(Ct,Wt,Ct+wt,Wt+mt,At,jt,At+wt,jt+mt,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(Et,xt,At,jt,Re+wi,Ct,Wt,wt,mt):H.copyTexSubImage2D(Et,xt,At,jt,Ct,Wt,wt,mt);yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Et,xt,At,jt,Re,wt,mt,St,de,Qe,pe.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(Et,xt,At,jt,Re,wt,mt,St,de,pe.data):H.texSubImage3D(Et,xt,At,jt,Re,wt,mt,St,de,Qe,pe):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xt,At,jt,wt,mt,de,Qe,pe.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xt,At,jt,pe.width,pe.height,de,pe.data):H.texSubImage2D(H.TEXTURE_2D,xt,At,jt,wt,mt,de,Qe,pe);yt.pixelStorei(H.UNPACK_ROW_LENGTH,ri),yt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,re),yt.pixelStorei(H.UNPACK_SKIP_PIXELS,Un),yt.pixelStorei(H.UNPACK_SKIP_ROWS,ti),yt.pixelStorei(H.UNPACK_SKIP_IMAGES,Ur),xt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&H.generateMipmap(Et),yt.unbindTexture()},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&Gt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Gt.setTextureCube(A,0):A.isData3DTexture?Gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Gt.setTexture2DArray(A,0):Gt.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){U=0,D=0,q=null,yt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Fe=(n,t,e)=>n<t?t:n>e?e:n,hx=(n,t,e)=>n+(t-n)*e,Se=(n,t,e,i)=>hx(n,t,1-Math.exp(-e*i)),Ae=(n,t)=>n+Math.random()*(t-n),Tc=Math.PI*2;function Ee(n,t){let e=(t-n)%Tc;return e>Math.PI&&(e-=Tc),e<-Math.PI&&(e+=Tc),e}function un(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Tt(n,t){let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return e<<16|i<<8|s}var Is=n=>{let t=Math.floor(n);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ze=n=>"$"+Math.round(n).toLocaleString("en-US");var Ls=un(99),fe=(n,t)=>n+Ls()*(t-n),Qn=(n,t,e,i=1)=>`hsla(${n},${t}%,${e}%,${i})`;function Je(n,t,e=!0,i=!0){let s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d");t(r,n);let a=new Wn(s);return i&&(a.colorSpace=Ke),a.wrapS=a.wrapT=e?Mn:li,a.anisotropy=4,a}function In(n,t,e,i,s,r,a,o,l=2){for(let c=0;c<e;c++)n.fillStyle=Qn(i,s,fe(r,a),o),n.fillRect(Ls()*t,Ls()*t,l*fe(.5,1.5),l*fe(.5,1.5))}var Le={};function ki(){return Le.wood||(Le.wood=Je(256,(n,t)=>{let i=t/8;for(let s=0;s<8;s++){let r=-fe(0,120);for(;r<t;){let a=fe(90,190),o=fe(52,64),l=fe(26,33);n.fillStyle=Qn(l,55,o*.75),n.fillRect(r,s*i,a,i);for(let c=0;c<6;c++){n.strokeStyle=Qn(l,50,o*.62,.35),n.lineWidth=fe(.6,1.6),n.beginPath();let h=s*i+fe(3,i-3);n.moveTo(r,h),n.bezierCurveTo(r+a*.3,h+fe(-3,3),r+a*.7,h+fe(-3,3),r+a,h+fe(-2,2)),n.stroke()}Ls()<.3&&(n.fillStyle=Qn(l,50,o*.55,.5),n.beginPath(),n.ellipse(r+fe(10,a-10),s*i+i/2,fe(3,6),fe(1.5,3),0,0,7),n.fill()),n.fillStyle="rgba(60,30,10,.55)",n.fillRect(r,s*i,2,i),r+=a}n.fillStyle="rgba(60,30,10,.6)",n.fillRect(0,s*i,t,2),n.fillStyle="rgba(255,240,210,.12)",n.fillRect(0,s*i+2,t,2)}}),Le.woodfine=Je(128,(n,t)=>{n.fillStyle="#e9dccb",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){n.strokeStyle=`rgba(120,80,40,${fe(.06,.18)})`,n.lineWidth=fe(.5,2),n.beginPath();let i=fe(0,t);n.moveTo(0,i),n.bezierCurveTo(t*.3,i+fe(-4,4),t*.6,i+fe(-4,4),t,i),n.stroke()}}),Le.carpet=Je(128,(n,t)=>{n.fillStyle="#e4e4e4",n.fillRect(0,0,t,t),In(n,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)n.fillStyle="rgba(0,0,0,.035)",n.fillRect(0,e,t,3)}),Le.tile=Je(128,(n,t)=>{n.fillStyle="#aab5bd",n.fillRect(0,0,t,t);let e=2,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++)n.fillStyle=Qn(200,10,fe(93,98)),n.fillRect(r*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(255,255,255,.6)",n.fillRect(r*i+3,s*i+3,i-8,3),n.fillStyle="rgba(0,0,0,.06)",n.fillRect(r*i+3,s*i+i-7,i-6,3)}),Le.wallpaper=Je(128,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)n.fillStyle="rgba(0,0,0,.045)",n.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let i=23;i<t;i+=32)n.fillStyle="rgba(0,0,0,.08)",n.beginPath(),n.moveTo(i,e),n.lineTo(i+4,e+6),n.lineTo(i,e+12),n.lineTo(i-4,e+6),n.fill();In(n,t,500,0,0,60,100,.04,2)}),Le.panel=Je(128,(n,t)=>{n.fillStyle="#f0f0f0",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3,n.strokeRect(e+10,14,44,t-28),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2,n.strokeRect(e+13,17,44,t-28)}),Le.brick=Je(256,(n,t)=>{n.fillStyle="#d8c6b0",n.fillRect(0,0,t,t);let e=t/8,i=t/4;for(let s=0;s<8;s++)for(let r=-1;r<5;r++){let a=r*i+(s%2?i/2:0);n.fillStyle=Qn(fe(10,20),fe(35,50),fe(42,52)),n.fillRect(a+3,s*e+3,i-6,e-6),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(a+3,s*e+3,i-6,4)}In(n,t,900,10,30,20,60,.15,2)}),Le.plaster=Je(128,(n,t)=>{n.fillStyle="#f4f2ef",n.fillRect(0,0,t,t),In(n,t,1500,30,10,75,100,.12,2)}),Le.plain=Je(64,(n,t)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,t,t),In(n,t,500,0,0,82,100,.25,2)}),Le.grass=Je(128,(n,t)=>{n.fillStyle="#6dbb4a",n.fillRect(0,0,t,t);for(let e=0;e<1400;e++){n.strokeStyle=Qn(fe(85,110),fe(45,65),fe(32,55),.7),n.lineWidth=1,n.beginPath();let i=Ls()*t,s=Ls()*t;n.moveTo(i,s),n.lineTo(i+fe(-2,2),s-fe(3,7)),n.stroke()}}),Le.asphalt=Je(128,(n,t)=>{n.fillStyle="#4a4f5c",n.fillRect(0,0,t,t),In(n,t,2200,220,8,22,60,.4,1.6)}),Le.concrete=Je(128,(n,t)=>{n.fillStyle="#cfd2d6",n.fillRect(0,0,t,t),In(n,t,1400,210,6,60,95,.2,2),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(0,0,t,2),n.fillRect(0,0,2,t)}),Le.rug=Je(256,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t),n.fillStyle="#9a9a9a",n.fillRect(10,10,t-20,t-20),n.fillStyle="#ffffff",n.fillRect(22,22,t-44,t-44),n.fillStyle="#c8c8c8",n.fillRect(30,30,t-60,t-60),n.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let i=46;i<t-46;i+=32)n.beginPath(),n.moveTo(i+16,e+2),n.lineTo(i+30,e+16),n.lineTo(i+16,e+30),n.lineTo(i+2,e+16),n.fill();n.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)n.fillRect(e,0,2,8),n.fillRect(e,t-8,2,8);In(n,t,1500,0,0,50,100,.12,1.5)},!1),Le.shadow=Je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Le.glow=Je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Le.beam=Je(64,(n,t)=>{let e=n.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Le.patch=Je(64,(n,t)=>{for(let e=0;e<12;e++){n.fillStyle=`rgba(255,255,255,${.06})`;let i=e*2.5;n.fillRect(i,i,t-2*i,t-2*i)}},!1,!1)),Le}function Ju(){let n=new hr(90,16,10),t=n.attributes.position,e=new Float32Array(t.count*3),i=new Ut,s=new Ut(7311320),r=new Ut(16038282),a=new Ut(16767400);for(let l=0;l<t.count;l++){let c=t.getY(l)/90;c>.15?i.copy(r).lerp(s,Math.min(1,(c-.15)/.6)):i.copy(a).lerp(r,Math.max(0,(c+.1)/.25)),e[l*3]=i.r,e[l*3+1]=i.g,e[l*3+2]=i.b}n.setAttribute("color",new ne(e,3));let o=new _t(n,new Lt({vertexColors:!0,side:Ze,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-10,o.frustumCulled=!1,o}function ju(){let n=new Ot,t=420,e=new Float32Array(t*3);for(let l=0;l<t;l++){let c=Math.random()*6.283,h=.08+Math.random()*.9,u=80;e.set([Math.cos(c)*Math.cos(h*1.5)*u,Math.sin(h*1.5)*u,Math.sin(c)*Math.cos(h*1.5)*u],l*3)}let i=new ue;i.setAttribute("position",new ne(e,3));let s=new Wi(i,new Ri({color:14673663,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,toneMapped:!1}));s.renderOrder=-9;let r=new Lt({map:ki().glow,color:14674175,transparent:!0,depthWrite:!1,fog:!1,blending:qe,toneMapped:!1}),a=new _t(new Xi(16,16),r),o=new _t(new wn(2.6,24),new Lt({color:15922431,fog:!1,toneMapped:!1,depthWrite:!1}));return a.position.set(-38,44,-52),o.position.copy(a.position),a.lookAt(0,0,0),o.lookAt(0,0,0),a.renderOrder=-8,o.renderOrder=-8,n.add(s,a,o),n.visible=!1,n}var zo=class{constructor(t,e=220){this.n=e,this.box=7;let i=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*this.box,i[s*3+1]=Math.random()*1.9,i[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new ue,this.geo.setAttribute("position",new ne(i,3)),this.points=new Wi(this.geo,new Ri({map:ki().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:qe})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,i){this.t+=t;let s=this.geo.attributes.position.array,r=this.vel,a=this.box/2;for(let o=0;o<this.n;o++){let l=o*3;s[l]+=(r[l]+Math.sin(this.t*.5+o)*.02)*t,s[l+1]+=(r[l+1]+Math.cos(this.t*.4+o*1.3)*.015)*t,s[l+2]+=r[l+2]*t,s[l]<e-a?s[l]+=this.box:s[l]>e+a&&(s[l]-=this.box),s[l+2]<i-a?s[l+2]+=this.box:s[l+2]>i+a&&(s[l+2]-=this.box),s[l+1]<.05?s[l+1]=1.85:s[l+1]>1.88&&(s[l+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var Bo=class{constructor(t,e=900){this.n=e,this.box=13,this.L=null,this.pos=new Float32Array(e*6),this.speed=new Float32Array(e),this.geo=new ue,this.geo.setAttribute("position",new ne(this.pos,3)),this.lines=new rr(this.geo,new Ms({color:11058406,transparent:!0,opacity:.5,depthWrite:!1,fog:!0})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,t.add(this.lines)}setLevel(t){if(this.L=t,this.lines.visible=!!t,t)for(let e=0;e<this.n;e++)this.spawn(e,0,0,!0)}outdoor(t,e){let i=this.L,s=Math.floor(t),r=Math.floor(e);return s<0||r<0||s>=i.W||r>=i.H?!0:!!i.outdoor[r*i.W+s]}spawn(t,e,i,s){let r=this.pos,a=t*6,o=this.box,l=0,c=0,h=!1;for(let f=0;f<4&&!h;f++)l=e+(Math.random()-.5)*2*o,c=i+(Math.random()-.5)*2*o,h=this.outdoor(l,c);let u=h?s?Math.random()*7:6+Math.random()*2:-50;this.speed[t]=11+Math.random()*5,r[a]=l,r[a+1]=u,r[a+2]=c,r[a+3]=l+.04,r[a+4]=u+.42,r[a+5]=c}update(t,e,i){if(!this.lines.visible)return;let s=this.pos,r=this.box;for(let a=0;a<this.n;a++){let o=a*6,l=this.speed[a]*t;s[o+1]-=l,s[o+4]-=l,s[o]-=l*.08,s[o+3]-=l*.08,(s[o+1]<0||Math.abs(s[o]-e)>r||Math.abs(s[o+2]-i)>r)&&this.spawn(a,e,i,s[o+1]<-10)}this.geo.attributes.position.needsUpdate=!0}};var Ac={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},Ec={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe",z:"teller",v:"case",m:"pedestal",a:"statue",s:"slots",j:"poker"},ux=new Set(["h","f","x","a"]),Qu={$:"cash",G:"gold",J:"jewel",A:"art"};function tf(n){let t=n.map,e=t.length,i=Math.max(...t.map(_=>_.length)),s=i*e,r=new Array(s);for(let _=0;_<e;_++)for(let w=0;w<i;w++)r[_*i+w]=t[_][w]||"g";let a=new Uint8Array(s),o=new Uint8Array(s),l=new Uint8Array(s),c=new Array(s),h=[],u=[],f={x:1,y:1},d=null,g=null,y=null,p=[],m=[];for(let _=0;_<e;_++)for(let w=0;w<i;w++){let T=_*i+w,x=r[T];if(x==="#"){o[T]=1;continue}if(x==="D"||x==="L"){o[T]=1,a[T]=0,p.push({x:w,y:_,type:x==="L"?"lock":"key"});continue}x==="K"&&m.push({x:w,y:_}),Ec[x]?(o[T]=ux.has(x)?1:0,a[T]=0):x==="S"?(d={x:w,y:_},a[T]=0):a[T]=1,Qu[x]&&h.push({type:Qu[x],x:w,y:_}),x==="P"&&(f={x:w,y:_}),x==="V"&&(g={x:w,y:_}),x==="R"&&(y={x:w,y:_})}for(let _=0;_<s;_++){let w=r[_];if(w==="#")continue;if(Ac[w]){c[_]=Ac[w];continue}let T=_%i,x=_/i|0,M="wood";t:for(let k=1;k<6;k++)for(let P=-k;P<=k;P++)for(let L=-k;L<=k;L++){if(Math.max(Math.abs(L),Math.abs(P))!==k)continue;let O=T+L,C=x+P;if(O<0||C<0||O>=i||C>=e)continue;let E=Ac[r[C*i+O]];if(E){M=E;break t}}c[_]=M}for(let _=0;_<s;_++)l[_]=c[_]==="grass"||c[_]==="road"?1:0;let v={x:f.x+.5,z:f.y+.5};if(g){for(let _=g.y;_<=g.y+1;_++)for(let w=g.x-1;w<=g.x+1;w++)w>=0&&_>=0&&w<i&&_<e&&(a[_*i+w]=0);v={x:g.x+.5,z:g.y-.5}}else y&&(v={x:y.x+.5,z:y.y+.5});let b=new Uint8Array(s);for(let _=0;_<s;_++){let w=r[_];if(!Ec[w]||b[_])continue;let T=_%i,x=_/i|0,M=T,k=x,P=[_];for(b[_]=1;P.length;){let L=P.pop(),O=L%i,C=L/i|0;T=Math.min(T,O),M=Math.max(M,O),x=Math.min(x,C),k=Math.max(k,C);for(let[E,z]of[[1,0],[-1,0],[0,1],[0,-1]]){let U=O+E,D=C+z;if(U<0||D<0||U>=i||D>=e)continue;let q=D*i+U;!b[q]&&r[q]===w&&(b[q]=1,P.push(q))}}u.push({c:w,type:Ec[w],x0:T,y0:x,w:M-T+1,d:k-x+1})}return{W:i,H:e,ch:r,walk:a,opaque:o,outdoor:l,floor:c,loot:h,furn:u,start:f,safe:d,van:g,roof:y,exit:v,def:n,doors:p,keys:m}}var fx=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],si=1,pi=2,me=4,Mi=8,kt=16,ke=32;var dx=55,Ln=new Ut,Vt=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,i,s,r,a,o,l={}){let c=l.faces??dx,h=s/2,u=r/2,f=a/2,d=e+u,g=l.ry||0,y=Math.cos(g),p=Math.sin(g);for(let m=0;m<6;m++){if(!(c&1<<m))continue;let v=l.fc&&l.fc[m]!=null?l.fc[m]:m===2&&l.top!=null?l.top:o;Ln.setHex(v);let[b,_]=fx[m],w=this.p.length/3,T=b[0]*y+b[2]*p,x=-b[0]*p+b[2]*y,M=l.us||this.us,k=Math.abs(T),P=Math.abs(x),L=0;for(let O of _){let C=O[0]*h,E=O[2]*f,z=t+C*y+E*p,U=d+O[1]*u,D=i-C*p+E*y;this.p.push(z,U,D),this.n.push(T,b[1],x),this.c.push(Ln.r,Ln.g,Ln.b),l.fit?(this.u.push(L===1||L===2?1:0,L>=2?1:0),L++):m===2||m===3?this.u.push(z/M,-D/M):k>P?this.u.push((T>0?-D:D)/M,U/M):this.u.push((x>0?z:-z)/M,U/M)}this.i.push(w,w+1,w+2,w,w+2,w+3)}return this}add(t,e,i=0,s=0,r=0){let a=t.index?t.toNonIndexed():t,o=a.attributes.position.array,l=a.attributes.normal.array;Ln.setHex(e);let c=this.p.length/3;for(let h=0;h<o.length;h+=3)this.p.push(o[h]+i,o[h+1]+s,o[h+2]+r),this.n.push(l[h],l[h+1],l[h+2]),this.c.push(Ln.r,Ln.g,Ln.b),this.u.push(o[h]/this.us,o[h+1]/this.us);for(let h=0;h<o.length/3;h++)this.i.push(c+h);return this}get empty(){return this.p.length===0}build(){let t=new ue;t.setAttribute("position",new ne(new Float32Array(this.p),3)),t.setAttribute("normal",new ne(new Float32Array(this.n),3)),t.setAttribute("color",new ne(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new ne(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new ne(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var Be=1.9,px=7227954,Cc=16183526,mx=15985888,ef=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],Rc=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],ks=[5020230,6074452,4164168,7126874],nf=()=>new Te({vertexColors:!0,emissive:2760720});function sf(n,t){return rf(n,t,null,null).back}function rf(n,t,e,i){let{W:s,H:r,ch:a}=n,o=(v,b)=>v<0||b<0||v>=s||b>=r||a[b*s+v]==="#",l=i;if(!l){let v=0;l=[0,-1];let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let _ of b){let w=0;if(_[1]){let T=_[1]<0?t.y0-1:t.y0+t.d;for(let x=t.x0;x<t.x0+t.w;x++)w+=o(x,T);w/=t.w}else{let T=_[0]<0?t.x0-1:t.x0+t.w;for(let x=t.y0;x<t.y0+t.d;x++)w+=o(T,x);w/=t.d}w>v+.01&&(v=w,l=_)}}let c=Math.atan2(-l[0],-l[1]),h=l[0]?t.d:t.w,u=l[0]?t.w:t.d,f=t.x0+t.w/2,d=t.y0+t.d/2,g=Math.cos(c),y=Math.sin(c),p=(v,b)=>[f+v*g+b*y,d-v*y+b*g];return{b:(v,b,_,w,T,x,M,k,P={})=>{let[L,O]=p(b,w);v.box(L,_,O,T,x,M,k,{...P,ry:(P.ry||0)+c})},W:h,D:u,rot:c,wpos:p,back:l}}function gx(n,t,e,i,s){let r=(y,p)=>y+i()*(p-y),a=e.plain,o=e.woodfine,l=e.unlit,c;if(t.type==="couch"){let y=n.furn.find(p=>p.type==="tv");c=y&&y.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let y=n.furn.find(p=>p.type==="table");if(y){let p=y.x0+y.w/2-(t.x0+.5),m=y.y0+y.d/2-(t.y0+.5);c=Math.abs(p)>Math.abs(m)?[-Math.sign(p),0]:[0,-Math.sign(m)]}}else t.type==="desk"||t.type==="table"?c=[0,-1]:t.type==="slots"&&(c=t.y0<n.H/2?[0,-1]:[0,1]);let{b:h,W:u,D:f,wpos:d}=rf(n,t,e,c),g=(y,p,m,v,b,_)=>{let[w,T]=d(y,m);s.push({x:w,y:p,z:T,col:v,I:b,R:_})};switch(h(e.shadow,0,.012,0,u+.35,.001,f+.35,16777215,{faces:me,fit:!0}),t.type){case"shelf":{for(let m of[-1,1])h(o,m*(u/2-.04),0,0,.07,1.6,f-.12,8015411);h(o,0,1.6-.06,0,u-.02,.07,f-.08,8015411),h(o,0,0,-f/2+.09,u-.1,1.6,.03,Tt(8015411,.7));for(let m=0;m<4;m++){let v=.06+m*.38;if(h(o,0,v,0,u-.1,.035,f-.18,8015411),m===3&&i()<.5){h(a,r(-.2,.2),v+.035,0,.12,.2,.12,4165530),h(a,0,v+.235,0,.18,.18,.18,ks[1],{ry:.6});continue}let b=-u/2+.1;for(;b<u/2-.12;){let _=r(.04,.09),w=r(.2,.31),T=Rc[i()*Rc.length|0];if(i()<.08){b+=.12;continue}let x=i()<.1?.25:0;h(a,b+_/2,v+.035,.02,_,w,f-.32,T,{top:Tt(T,1.25)}),w>.25&&h(a,b+_/2,v+.035+w*.7,.02,_+.004,.025,f-.31,15914122,{faces:kt|ke}),b+=_+.006+x*.1}}break}case"fridge":{h(a,0,.04,0,u-.12,1.55,f-.14,15265522,{top:14278886}),h(a,0,0,.02,u-.16,.05,f-.2,3816006),h(a,0,1,f/2-.068,u-.12,.015,.01,11450560,{faces:kt}),h(a,.3,.55,f/2-.04,.04,.35,.05,12108492),h(a,.3,1.1,f/2-.04,.04,.3,.05,12108492);for(let p=0;p<4;p++)h(a,r(-.3,.15),r(.6,1.45),f/2-.066,.06,.06,.01,Rc[p],{faces:kt});h(a,-.1,1.15,f/2-.066,.18,.22,.008,16777215,{faces:kt,ry:.08});break}case"bed":{h(o,0,.08,0,u-.06,.22,f-.06,10118724);for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])h(o,m*(u/2-.09),0,v*(f/2-.09),.1,.1,.1,Tt(10118724,.7));h(o,0,0,-f/2+.06,u,1.05,.1,10118724),h(o,0,1.05,-f/2+.06,u+.06,.07,.14,Tt(10118724,.85)),h(o,0,.45,-f/2+.115,u-.3,.45,.01,Tt(10118724,1.15),{faces:kt}),h(a,0,.3,.04,u-.14,.18,f-.22,16250094),h(a,0,.33,.42,u-.08,.2,f-.95,6066121,{top:Tt(6066121,1.12)}),h(a,0,.36,-f/2+1.08,u-.07,.19,.22,15789284);for(let m of[-1,1])h(a,m*.45,.47,-f/2+.42,.78,.15,.4,16777215,{ry:m*.04});h(a,0,.535,f/2-.42,u-.04,.03,.42,15246141),h(a,0,.3,f/2-.205,u-.04,.26,.02,15246141,{faces:kt});break}case"desk":{h(o,0,.7,-.45,u-.1,.06,.8,11565642,{top:Tt(11565642,1.1)}),h(o,-u/2+.35,0,-.45,.5,.7,.72,Tt(11565642,.9));for(let p=0;p<3;p++)h(a,-u/2+.35,.08+p*.21,-.08,.42,.16,.01,Tt(11565642,.75),{faces:kt}),h(a,-u/2+.35,.15+p*.21,-.07,.12,.025,.02,14267482);h(o,u/2-.08,0,-.45,.06,.7,.72,Tt(11565642,.9)),h(a,.15,.76,-.7,.18,.04,.14,2763574),h(a,.15,.8,-.7,.05,.16,.05,2763574),h(a,.15,.92,-.7,.72,.44,.05,2237229),h(l,.15,.95,-.672,.64,.37,.01,6272255,{faces:kt}),h(l,0,1.05,-.665,.25,.14,.008,12576511,{faces:kt}),h(l,.32,1,-.665,.18,.08,.008,16765806,{faces:kt}),h(a,.15,.76,-.38,.55,.025,.18,3421503),h(a,.55,.76,-.38,.07,.03,.1,3421503),h(a,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),h(a,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),h(a,.78,.76,-.5,.08,.1,.08,14185306),h(a,-.7,.76,-.7,.14,.03,.14,2763574),h(a,-.7,.79,-.7,.025,.32,.025,2763574),h(l,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),g(-.6,1,-.55,[1,.72,.42],.75,2.6),h(a,0,0,.35,.5,.05,.05,2763574),h(a,0,0,.35,.05,.05,.5,2763574),h(a,0,.05,.35,.05,.35,.05,5592671),h(a,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),h(a,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{h(a,0,0,.04,u-.02,.08,f-.2,3816006),h(a,0,.08,0,u-.02,.72,f-.12,15854818);let m=Math.max(1,Math.round(u/.5));for(let v=0;v<m;v++){let b=-u/2+(v+.5)*(u/m);h(a,b,.14,f/2-.055,u/m-.06,.6,.012,Tt(15854818,.93),{faces:kt}),h(a,b+(v%2?-1:1)*(u/m/2-.08),.62,f/2-.04,.025,.12,.025,11901530)}h(a,0,.8,.02,u,.06,f-.06,3881544,{top:4868440}),h(e.tile,0,.86,-f/2+.02,u,.48,.01,16777215,{faces:kt,us:.5}),h(a,0,1.36,-f/2+.2,u-.02,.48,.36,15854818);for(let v=0;v<m;v++){let b=-u/2+(v+.5)*(u/m);h(a,b,1.4,-f/2+.385,u/m-.06,.4,.012,Tt(15854818,.93),{faces:kt}),h(a,b,1.43,-f/2+.4,.12,.025,.025,11901530)}u>=2?(h(a,.45,.855,.05,.6,.012,.42,9345186,{faces:me}),h(a,.45,.86,-.22,.04,.22,.04,12831958),h(a,.45,1.05,-.12,.04,.04,.2,12831958),h(o,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),h(a,-.35,.89,.05,.12,.06,.06,14185306)):(h(a,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),h(a,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{h(a,0,0,.04,u-.02,.08,f-.2,3816006),h(a,0,.08,0,u-.04,.74,f-.12,14081250),h(a,0,.18,f/2-.055,u-.2,.42,.012,2829364,{faces:kt}),h(l,0,.26,f/2-.05,u-.36,.22,.01,6961698,{faces:kt}),h(a,0,.56,f/2-.04,u-.3,.03,.03,12108492);for(let p=0;p<4;p++)h(a,-.3+p*.2,.7,f/2-.05,.05,.05,.03,2829364);h(a,0,.82,.02,u-.02,.04,f-.06,2302763);for(let[p,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])h(a,p*.2,.86,m*.17,.2,.012,.2,4868693);h(a,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),h(a,0,1.42,-f/2+.24,u-.1,.18,.44,12831958),h(a,0,1.6,-f/2+.12,.3,.3,.22,12831958),h(e.tile,0,.86,-f/2+.02,u,.56,.01,16777215,{faces:kt,us:.5});break}case"couch":{for(let _ of[-1,1])for(let w of[-1,1])h(o,_*(u/2-.2),0,w*(f/2-.15),.07,.1,.07,5913126);h(a,0,.1,0,u-.08,.26,f-.12,Tt(3115662,.85)),h(a,0,.1,-f/2+.17,u-.08,.66,.22,3115662);for(let _ of[-1,1])h(a,_*(u/2-.13),.1,.02,.22,.44,f-.1,3115662),h(a,_*(u/2-.13),.54,.02,.26,.06,f-.06,3842212);let v=3,b=(u-.6)/v;for(let _=0;_<v;_++){let w=-u/2+.3+(_+.5)*b;h(a,w,.36,.08,b-.04,.13,f-.4,3842212,{top:Tt(3842212,1.1)}),h(a,w,.42,-f/2+.34,b-.06,.38,.14,3842212,{ry:0})}h(a,-u/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),h(a,u/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),h(a,u/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),h(a,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let p of[-1,1])h(o,p*(u/2-.15),0,0,.06,.12,.06,2763574);h(o,0,.12,-.05,u-.1,.38,f-.45,7226670,{top:Tt(7226670,1.15)});for(let p=0;p<3;p++)h(o,-u/2+.05+(p+.5)*((u-.1)/3),.16,f/2-.27,(u-.1)/3-.05,.3,.012,Tt(7226670,1.2),{faces:kt});h(a,0,.62,-.2,u-.4,.92,.07,1447710),h(l,0,.67,-.163,u-.52,.8,.005,2903966,{faces:kt}),h(l,-.3,.75,-.159,.9,.35,.004,6269160,{faces:kt}),h(l,.5,.85,-.158,.4,.22,.004,16762967,{faces:kt}),h(l,.25,.73,-.158,.3,.12,.004,8049530,{faces:kt}),h(a,0,.5,-.02,u-1,.07,.1,2237227),h(a,u/2-.35,.5,-.05,.16,.22,.16,13133631);for(let p=0;p<4;p++)h(a,u/2-.35+r(-.05,.05),.68+p*.05,-.05,.22,.05,.08,ks[p%4],{ry:p*.8});h(a,-u/2+.4,.5,-.05,.3,.06,.2,2763574),g(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{h(o,0,.66,0,u-.2,.07,f-.2,13867874,{top:Tt(13867874,1.08)});for(let[p,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])h(o,p*(u/2-.25),0,m*(f/2-.25),.08,.66,.08,Tt(13867874,.8));h(a,0,.73,0,.5,.006,f-.25,12999242),h(a,0,.736,0,.36,.06,.36,16777215,{top:15262422}),h(a,-.06,.79,.02,.12,.12,.12,15230287),h(a,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),h(a,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[p,m]of[[-.45,-.45],[.45,.45]])h(a,p,.735,m,.28,.012,.28,16777215),h(a,p+.2,.735,m,.03,.01,.2,12831958);break}case"chair":{for(let[p,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])h(o,p*.17,0,m*.17,.05,.42,.05,Tt(12157268,.8));h(o,0,.42,0,.44,.05,.44,12157268),h(a,0,.47,0,.38,.03,.38,12999242),h(o,0,.47,-.19,.42,.52,.05,12157268),h(o,0,.82,-.19,.3,.1,.06,Tt(12157268,1.1));break}case"tub":{h(a,0,0,0,u-.12,.58,f-.12,16054007,{top:16777215}),h(a,0,.5,0,u-.34,.06,f-.34,9425898,{faces:me}),h(a,0,.58,-f/2+.15,.05,.2,.05,12831958),h(a,0,.74,-f/2+.22,.05,.04,.18,12831958),h(a,.3,.56,.2,.12,.1,.14,16765503),h(a,.3,.64,.24,.08,.08,.08,16765503),h(a,.3,.66,.3,.04,.03,.05,16747069),h(a,0,1.75,f/2-.08,u-.1,.025,.025,12831958),h(a,-u/2+.35,.6,f/2-.08,.6,1.15,.03,9423064);for(let y=0;y<3;y++)h(a,-u/2+.15+y*.2,.6,f/2-.06,.04,1.15,.035,16183526);break}case"slots":{let y=[16732026,5037311,16766810,8191898];for(let p=0;p<u;p++){let m=-u/2+p+.5,v=[9051946,2046602,5906314,2058826][(p+t.x0)%4];h(a,m,0,0,.78,.5,.7,Tt(v,.7)),h(a,m,.5,-.05,.74,.95,.6,v,{top:Tt(v,1.2)}),h(a,m,.5,.26,.76,.1,.12,14267482),h(a,m,.85,.26,.6,.42,.01,1315868,{faces:kt});for(let b=0;b<3;b++)h(l,m-.18+b*.18,.9,.268,.14,.3,.005,16183526,{faces:kt});for(let b=0;b<3;b++)h(l,m-.18+b*.18,1,.272,.08,.08,.004,y[(b+p)%4],{faces:kt});h(l,m,1.32,.1,.7,.16,.32,y[(p+t.y0)%4],{faces:63}),h(a,m+.42,.75,.1,.04,.35,.04,12831958),h(a,m+.42,1.1,.1,.1,.1,.1,15222847),h(a,m,.62,.3,.3,.05,.08,2763574)}g(0,1.3,.6,[1,.55,.75],.8,3.2);break}case"poker":{let m=[15222847,3111656,15911244,2237487,16183526];h(o,0,0,0,.6,.68,.6,5909018),h(o,0,.68,0,u-.1,.08,f-.1,5909018,{top:Tt(5909018,1.2)}),h(a,0,.76,0,u-.34,.012,f-.34,2062922,{faces:me}),h(a,0,.775,0,u-.9,.004,.02,14267482,{faces:me});for(let v=0;v<6;v++){let b=v/6*6.28,_=Math.min(u,f)*.32;h(a,Math.cos(b)*_,.78,Math.sin(b)*_,.08,.03+v%3*.03,.08,m[v%5])}for(let v=0;v<4;v++)h(a,-.2+v*.13,.775,-.05,.1,.006,.14,16777215,{ry:(v-1.5)*.2});for(let[v,b]of[[-1,0],[1,0],[0,-1],[0,1]])h(o,v*(u/2+.3),0,b*(f/2+.3),.36,.48,.36,11745617,{top:13650522});g(0,1.4,0,[1,.85,.55],.9,2.6);break}case"pedestal":{let p=[14267482,4165530,11745617,6971304][(t.x0+t.y0)%4];h(a,0,0,0,.62,.12,.62,Tt(15262422,.85)),h(a,0,.12,0,.46,.7,.46,15262422),h(a,0,.82,0,.6,.08,.6,Tt(15262422,.92)),h(a,0,.9,0,.2,.22,.2,p,{top:Tt(p,1.2)}),h(a,0,1.12,0,.12,.1,.12,Tt(p,1.15)),h(a,0,.45,.235,.24,.1,.01,14267482,{faces:kt}),g(0,1.6,0,[1,.85,.6],.7,2);break}case"statue":{let p=Tt(12104876,.8);h(a,0,0,0,.8,.35,.8,p,{top:12104876}),h(a,0,.35,0,.62,.08,.62,12104876),h(a,-.1,.43,0,.16,.5,.18,12104876),h(a,.1,.43,0,.16,.5,.18,12104876),h(a,0,.93,0,.42,.45,.24,12104876,{top:p}),h(a,-.27,.95,.05,.12,.42,.13,12104876,{ry:.2}),h(a,.27,1.2,0,.12,.42,.13,12104876,{ry:-.6}),h(a,0,1.38,0,.26,.3,.26,12104876,{top:p}),h(a,0,1.55,-.02,.28,.08,.28,p);break}case"case":{h(o,0,0,0,u-.1,.78,f-.1,2759202,{top:Tt(2759202,1.3)}),h(a,0,.1,f/2-.06,u-.2,.55,.01,Tt(2759202,1.4),{faces:kt}),h(a,0,.78,0,u-.06,.04,f-.06,14267482),h(l,0,.82,0,u-.2,.012,f-.2,3811930,{faces:me});for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])h(a,m*(u/2-.06),.82,v*(f/2-.06),.04,.46,.04,14267482);h(a,0,1.28,0,u-.06,.03,f-.06,14267482),g(0,1.05,0,[.75,.85,1],.9,2.4);break}case"wardrobe":{let p=Tt(9067068,1.18),m=Tt(9067068,.7);h(o,0,0,-.06,.92,1.72,.74,9067068,{top:m}),h(o,0,1.72,-.06,.98,.06,.8,m),h(o,0,0,-.06,.96,.08,.78,m);for(let v of[-1,1]){h(o,v*.225,.12,.315,.42,1.54,.02,p,{faces:kt|si|pi|me});for(let b=0;b<9;b++)h(a,v*.225,.78+b*.09,.327,.34,.025,.01,m,{faces:kt|me});h(o,v*.225,.2,.327,.34,.5,.008,Tt(p,1.08),{faces:kt}),h(a,v*.04,.8,.34,.03,.12,.03,14267482)}h(a,0,.12,.33,.012,1.54,.02,m,{faces:kt});break}case"teller":{h(o,0,0,.05,u,.78,f-.3,5913130,{top:Tt(5913130,1.1)}),h(a,0,.08,f/2-.1,u-.02,.78-.16,.01,Tt(5913130,1.25),{faces:kt}),h(a,0,.78,.05,u+.02,.05,f-.2,15262422);let v=Math.max(1,Math.round(u));for(let b=0;b<=v;b++)h(a,-u/2+b*u/v,.78+.05,.05,.04,.82,.04,14267482);h(a,0,.78+.87,.05,u,.04,.06,14267482);for(let b=0;b<v;b++){let _=-u/2+(b+.5)*(u/v);h(a,_,.78+.05,.05,.3,.06,.05,2763574),b%2===0?(h(a,_+.15,.78+.05,-.2,.3,.22,.04,2237229),h(l,_+.15,.78+.09,-.177,.26,.15,.005,6272255,{faces:kt})):h(a,_-.1,.78+.05,-.15,.22,.04,.16,5221978,{top:9429130})}break}case"plant":{h(a,0,0,0,.36,.34,.36,13133631,{top:4863014}),h(a,0,.3,0,.42,.06,.42,14186319),h(o,0,.36,0,.05,.5,.05,6965802);for(let y=0;y<9;y++){let p=y*2.4,m=r(.08,.26),v=r(.45,1.2);h(a,Math.cos(p)*m,v,Math.sin(p)*m,r(.18,.3),.04,r(.1,.16),ks[y%4],{ry:p})}break}case"night":{h(o,0,0,0,u-.38,.5,f-.4,10118724,{top:Tt(10118724,1.12)}),h(o,0,.28,f/2-.195,u-.48,.16,.01,Tt(10118724,1.2),{faces:kt}),h(a,0,.35,f/2-.18,.06,.03,.02,14267482),h(a,0,.5,-.05,.12,.03,.12,3816006),h(a,0,.53,-.05,.05,.2,.05,14267482),h(l,0,.72,-.05,.26,.18,.26,16767392),h(a,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),g(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{h(a,0,0,.05,.36,.38,.46,16185336),h(a,0,.38,.07,.4,.04,.5,16777215),h(a,0,.3,-f/2+.2,.44,.45,.2,16185336,{top:16777215}),h(a,.15,.7,-f/2+.25,.06,.02,.03,12831958);break}case"sink":{h(a,0,0,0,u-.2,.8,f-.42,6989198),h(a,0,.12,f/2-.205,u-.3,.6,.01,Tt(6989198,1.15),{faces:kt}),h(a,0,.8,0,u-.14,.05,f-.36,16777215),h(a,0,.84,.02,.4,.015,.28,13227742,{faces:me}),h(a,0,.85,-f/2+.26,.04,.16,.04,12831958),h(a,0,1,-f/2+.03,.62,.72,.03,14267482),h(l,0,1.04,-f/2+.05,.54,.64,.005,12179172,{faces:kt}),h(l,-.12,1.3,-f/2+.054,.12,.3,.004,15135994,{faces:kt,ry:0});break}}}function xx(n,t){let{W:e,H:i}=n,s=(f,d)=>f<0||d<0||f>=e||d>=i?-1:Math.floor(d)*e+Math.floor(f),r=(f,d)=>{let g=s(f,d);return g<0||n.opaque[g]===1},a=(f,d,g,y)=>{let p=g-f,m=y-d,v=Math.ceil(Math.hypot(p,m)/.15);for(let b=1;b<v;b++){let _=b/v;if(r(f+p*_,d+m*_))return!1}return!0},o=[-.55,.7,.45],l=Math.hypot(...o);o[0]/=l,o[1]/=l,o[2]/=l;let c=[0,0,0],h=(f,d)=>{let g=s(f,d);return g<0?0:n.ch[g]==="#"?1:!n.walk[g]&&!n.outdoor[g]?.55:0};function u(f,d,g,y,p,m,v){let b=f+y*.14,_=g+m*.14,w=s(b,_),T=w>=0&&!n.outdoor[w]&&n.ch[w]!=="#",x,M,k;if(T){let L=.85+.15*p;x=.2*L,M=.19*L,k=.27*L,n.def.night&&(x*=.6,M*=.65,k*=.85);for(let O of t){let C=O.x-f,E=O.y-d,z=O.z-g,U=Math.hypot(C,E,z);if(U>O.R||!a(O.x,O.z,b,_))continue;let D=1-U/O.R,q=O.I*D*D,G=v?.7:Math.max(0,(y*C+p*E+m*z)/(U||1))*.75+.25;x+=O.col[0]*q*G,M+=O.col[1]*q*G,k+=O.col[2]*q*G}}else{let L=Math.max(0,y*o[0]+p*o[1]+m*o[2]),O=.55+.45*p;if(x=.5*O+.95*L,M=.5*O+.8*L,k=.62*O+.62*L,n.def.night){x*=.14,M*=.18,k*=.38;for(let C of t){if(!C.street)continue;let E=C.x-f,z=C.y-d,U=C.z-g,D=Math.hypot(E,z,U);if(D>C.R)continue;let q=1-D/C.R,G=C.I*q*q,Z=Math.max(0,(y*E+p*z+m*U)/(D||1))*.7+.3;x+=C.col[0]*G*Z,M+=C.col[1]*G*Z,k+=C.col[2]*G*Z}}}let P=1;if(d<.06||T&&d>Be-.08){let L=0;for(let[O,C]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])L+=h(b+O,_+C);P=1-.17*L-(d<.06?.06:.1)}else d<.3&&T&&(P=.9+d*.3);return c[0]=x*P,c[1]=M*P,c[2]=k*P,c}return u}function yx(n,t){let e=n.p,i=n.n,s=n.c;for(let r=0;r<e.length;r+=3){let a=t(e[r],e[r+1],e[r+2],i[r],i[r+1],i[r+2],!1);s[r]*=a[0],s[r+1]*=a[1],s[r+2]*=a[2]}}function vx(){let n=document.createElement("canvas");n.width=1024,n.height=128;let t=n.getContext("2d"),e=un(77),i=n.width,s=n.height,r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#0d1430"),r.addColorStop(.55,"#24325e"),r.addColorStop(1,"#3a3f66"),t.fillStyle=r,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,0.8)";for(let l=0;l<70;l++)t.fillRect(e()*i,e()*s*.45,1.5,1.5);let a=l=>{l(0),l(-i),l(i)};t.fillStyle="#1b2446",t.beginPath(),t.moveTo(0,s);for(let l=0;l<=i;l+=16)t.lineTo(l,62+Math.sin(l/i*Math.PI*6)*10+Math.sin(l/i*Math.PI*14)*5);t.lineTo(i,s),t.fill();for(let l=0;l<14;l++){let c=e()*i,h=70+e()*14;a(u=>{t.fillStyle="#ffd38a",t.fillRect(c+u,h,3,2)})}t.fillStyle="#0c1226";for(let l=0;l<90;l++){let c=e()*i,h=14+e()*22,u=8+e()*10;a(f=>{t.beginPath(),t.moveTo(c+f-u,s-18),t.lineTo(c+f,s-18-h),t.lineTo(c+f+u,s-18),t.fill()})}t.fillRect(0,s-20,i,20),t.strokeStyle="#05080f",t.lineWidth=3;for(let l=40;l<i;l+=128)t.beginPath(),t.moveTo(l,s),t.lineTo(l,26),t.stroke(),t.fillStyle="#05080f",t.fillRect(l-9,30,18,3);t.lineWidth=1,t.beginPath();for(let l=40;l<i+128;l+=128)t.moveTo(l,31),t.quadraticCurveTo(l+64,40,l+128,31);t.stroke();let o=new Wn(n);return o.colorSpace=Ke,o.wrapS=Mn,o.wrapT=li,o}function af(n){let t=ki(),e={wood:new Vt(2),carpet:new Vt(1),tile:new Vt(1),wallpaper:new Vt(1),panel:new Vt(1),brick:new Vt(.9),plaster:new Vt(2),grass:new Vt(3),asphalt:new Vt(3),concrete:new Vt(1),plain:new Vt(1),woodfine:new Vt(.8),rug:new Vt(1),unlit:new Vt(1),shadow:new Vt(1),patch:new Vt(1),trainN:new Vt(8),trainS:new Vt(8)},i=!!n.def.train,{W:s,H:r,ch:a,floor:o}=n,l=un(1337),c=(C,E)=>C+l()*(E-C),h=(C,E)=>C>=0&&E>=0&&C<s&&E<r&&a[E*s+C]==="#",u=(C,E)=>C<0||E<0||C>=s||E>=r||n.outdoor[E*s+C]===1,f=n.van?n.van.y-1:n.def.roadTop??r,d=!!n.def.night,g=n.def.lampScale||1,y=[],p=[],m=[],v=new Int16Array(s*r).fill(-1),b=(C,E)=>!h(C,E)&&(h(C-1,E)&&h(C+1,E)||h(C,E-1)&&h(C,E+1)),_=[];for(let C=0;C<s*r;C++){let E=C%s,z=C/s|0;if(v[C]>=0||a[C]==="#"||n.outdoor[C]||b(E,z))continue;let U=_.length,D=[],q=[C];for(v[C]=U;q.length;){let Z=q.pop(),j=Z%s,B=Z/s|0;D.push(Z);for(let[W,I]of[[1,0],[-1,0],[0,1],[0,-1]]){let et=j+W,ot=B+I,ct=ot*s+et;et<0||ot<0||et>=s||ot>=r||v[ct]>=0||a[ct]==="#"||n.outdoor[ct]||b(et,ot)||(v[ct]=U,q.push(ct))}}let G=n.def.palette||ef;_.push({id:U,cells:D,pal:G[U%G.length]})}for(let C=0;C<s*r;C++)if(v[C]<0&&b(C%s,C/s|0)){let E=C%s,z=C/s|0;for(let[U,D]of[[0,1],[1,0],[0,-1],[-1,0]]){let q=(z+D)*s+E+U;if(v[q]>=0){v[C]=v[q];break}}}let w=(C,E)=>{let z=C>=0&&E>=0&&C<s&&E<r?v[E*s+C]:-1;return z>=0?_[z].pal:ef[0]};for(let C of _){let E=1e9,z=-1,U=1e9,D=-1;for(let B of C.cells){let W=B%s,I=B/s|0;E=Math.min(E,W),z=Math.max(z,W),U=Math.min(U,I),D=Math.max(D,I)}let q=z-E+1,G=D-U+1,Z=Math.max(q,G),j=Math.max(1,Math.round(Z/6));for(let B=0;B<j;B++){let W=(B+.5)/j,I=q>=G?E+q*W:E+q/2,et=q>=G?U+G/2:U+G*W;y.push({x:I,y:Be-.4,z:et,col:d?[1,.7,.5]:[1,.74,.45],I:1.75*g,R:5.6,pendant:!0})}}let T=40,x=(C,E,z,U,D,q)=>C.box((E+U)/2,-.06,(z+D)/2,U-E,.05,D-z,q,{faces:me});if(i){x(e.grass,-T,-T,s+T,.6,6978154),x(e.grass,-T,r-.6,s+T,r+T,6978154),x(e.concrete,-T,.6,s+T,r-.6,9077880);for(let C=-T;C<s+T;C+=.7)e.woodfine.box(C,-.02,r/2,.22,.05,r-2.4,5914412,{faces:me|si|pi});for(let C of[r/2-1.6,r/2+1.6])e.plain.box(s/2,0,C,s+T*2,.08,.1,12107980,{top:15265526})}if(!i){x(e.grass,-T,-T,0,f,16777215),x(e.grass,s,-T,s+T,f,16777215),x(e.grass,0,-T,s,0,16777215),x(e.concrete,-T,f,0,f+1,16777215),x(e.concrete,s,f,s+T,f+1,16777215),x(e.asphalt,-T,f+1,0,r,16777215),x(e.asphalt,s,f+1,s+T,r,16777215),x(e.concrete,-T,r,s+T,r+1.2,16777215),x(e.grass,-T,r+1.2,s+T,r+T,16777215);for(let U=-T;U<s+T;U+=2.2)e.plain.box(U+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:me});let C=(U,D)=>{let q=.8+l()*.6,G=l()*1.5;e.woodfine.box(U,0,D,.28*q,.9*q,.28*q,8016438,{ry:G}),e.plain.box(U,.7*q,D,1.4*q,1*q,1.4*q,ks[l()*4|0],{ry:G}),e.plain.box(U+.2*q,1.5*q,D-.1*q,1*q,.8*q,1*q,ks[l()*4|0],{ry:G+.5}),e.plain.box(U-.1*q,2.15*q,D+.1*q,.6*q,.5*q,.6*q,ks[l()*4|0],{ry:G+.9})};for(let U=-T+2;U<f-.5;U+=2.6)for(let D=-T+2;D<s+T-2;D+=2.6)D>-1.5&&D<s+1&&U>-1.5||l()<.55&&C(D+(l()-.5)*1.4,U+(l()-.5)*1.4);let E=[15246478,10274761,15652762,12167636,11064480];for(let U=-T+3,D=0;U<s+T;U+=7,D++){let q=r+4.5+D%2*.8,G=E[D%5];e.plain.box(U,0,q,5,2.4,4,G),e.plain.box(U,2.4,q,5.5,.3,4.5,5914712),e.plain.box(U,2.7,q,4.2,.4,3.4,6965862);for(let Z of[-1.5,1.5])e.unlit.box(U+Z,.95,q-2.01,.8,.75,.02,16765834,{faces:ke}),e.plain.box(U+Z,.9,q-2.03,.95,.06,.06,16777215);e.woodfine.box(U,0,q-2.01,.75,1.35,.03,8014643,{faces:ke}),l()<.8&&C(U+3.3,q-1.5)}let z=(U,D,q,G)=>{let Z=Math.hypot(q-U,G-D),j=Math.round(Z/.45),B=D===G;e.plain.box((U+q)/2,.28,(D+G)/2,B?Z:.05,.07,B?.05:Z,16183526),e.plain.box((U+q)/2,.58,(D+G)/2,B?Z:.05,.07,B?.05:Z,16183526);for(let W=0;W<=j;W++){let I=W/j;e.plain.box(U+(q-U)*I,0,D+(G-D)*I,.1,.8,.1,16777215)}};z(-.05,-.05,s+.05,-.05),z(-.05,-.05,-.05,f-.05),z(s+.05,-.05,s+.05,f-.05);for(let U of[-.25,s+.25])for(let D=f;D<r;D+=.5)e.plain.box(U,0,D+.25,.3,.7,.5,(D*2|0)%2?15222847:16777215)}let M=(C,E,z,U,D,q,G,Z,j=2,B={})=>{let W=U>0?si:U<0?pi:D>0?kt:ke,I=E+.5+U*.5+U*(B.off||0),et=z+.5+D*.5+D*(B.off||0);for(let ot=0;ot<j;ot++){let ct=(ot+.5)/j-.5;C.box(I+(D?ct:0),q,et+(U?ct:0),U?0:1/j,G,D?0:1/j,Z,{faces:W})}};for(let C=0;C<r;C++)for(let E=0;E<s;E++){let z=C*s+E,U=a[z];if(U==="#"){e.plain.box(E+.5,Be,C+.5,1,0,1,3813194,{faces:me});for(let[W,I]of[[1,0],[-1,0],[0,1],[0,-1]]){if(h(E+W,C+I))continue;let et=u(E+W,C+I),ot=(i?E%2===0&&I!==0:(E+C)%3===0)&&(et||u(E-W,C-I)&&!h(E-W,C-I)),ct=E+.5+W*.5,rt=C+.5+I*.5,Ft=Mt=>[W?.03:Mt,I?.03:Mt],$t=W>0?si:W<0?pi:I>0?kt:ke;if(et&&i)M(e.plain,E,C,W,I,0,Be,2766162,2),e.plain.box(ct+W*.01,.62,rt+I*.01,W?.02:1,.08,I?.02:1,14267482,{faces:$t});else if(et)M(e.brick,E,C,W,I,0,Be,16777215,2),e.plain.box(ct+W*.02,0,rt+I*.02,...[W?.04:1,.2,I?.04:1].slice(0,1),.2,I?.04:1,9075306,{faces:$t|me});else{let Mt=w(E+W,C+I);M(e.panel,E,C,W,I,0,.72,Mt.panel,2),M(e.wallpaper,E,C,W,I,.72,.6,Mt.wall,2),M(e.wallpaper,E,C,W,I,1.32,Be-1.32,Mt.wall,2);let[Ht,te]=Ft(1);e.woodfine.box(ct+W*.015,0,rt+I*.015,Ht,.13,te,px,{faces:$t|me}),e.plain.box(ct+W*.02,.7,rt+I*.02,W?.04:1,.05,I?.04:1,mx,{faces:$t|me|Mi}),e.plain.box(ct+W*.02,Be-.1,rt+I*.02,W?.04:1,.1,I?.04:1,Cc,{faces:$t|Mi})}if(ot){let Mt=et?16183526:16777215;i&&!et?(I>0?e.trainN:e.trainS).box(ct+W*.006,.82,rt+I*.006,.62,.62,.01,16777215,{faces:$t}):(e.unlit.box(ct+W*.006,.82,rt+I*.006,W?.01:.62,.62,I?.01:.62,et?d?3820138:7315138:d?4872842:16769712,{faces:$t}),e.unlit.box(ct+W*.008,1.14,rt+I*.008,W?.01:.62,.3,I?.01:.62,et?d?4872826:9418966:d?6978216:16773584,{faces:$t})),e.plain.box(ct+W*.02,.76,rt+I*.02,W?.06:.78,.06,I?.06:.78,Mt,{faces:63&~Mi}),e.plain.box(ct+W*.02,1.44,rt+I*.02,W?.05:.74,.05,I?.05:.74,Mt);for(let Ht of[-1,1])e.plain.box(ct+W*.02+(I?Ht*.345:0),.8,rt+I*.02+(W?Ht*.345:0),.05,.66,.05,Mt);if(e.plain.box(ct+W*.02,1.11,rt+I*.02,W?.04:.62,.035,I?.04:.62,Mt),e.plain.box(ct+W*.02,.8,rt+I*.02,W?.04:.035,.64,I?.04:.035,Mt),!et){let Ht=w(E+W,C+I);for(let Ce of[-1,1]){let we=I?Ce*.48:0,je=W?Ce*.48:0;e.plain.box(ct+W*.06+we,.55,rt+I*.06+je,W?.06:.2,1.2,I?.06:.2,Ht.curtain,{top:Tt(Ht.curtain,.8)})}e.plain.box(ct+W*.07,1.68,rt+I*.07,W?.03:1.2,.03,I?.03:1.2,11901530);let te=ct+W*.9,Zt=rt+I*.9;e.patch.box(te+(I?.25:0),.015,Zt+(W?.25:0),W?1:.8,0,I?1:.8,d?7309016:16767392,{faces:me,fit:!0}),y.push({x:ct+W*.6,y:1.1,z:rt+I*.6,col:d?[.45,.55,1]:[1,.8,.55],I:d?.6:.95,R:3.6}),m.push([ct+W*.03,rt+I*.03,W,I])}}else if(!et&&(E*5+C*3)%7===0){let Mt=[15230287,4165530,15905076,6971304,5216858][(E+C*2)%5];e.woodfine.box(ct+W*.025,.95,rt+I*.025,W?.05:.56,.46,I?.05:.56,5913126,{faces:63}),e.plain.box(ct+W*.035,1,rt+I*.035,W?.05:.46,.36,I?.05:.46,16183526,{faces:$t}),e.plain.box(ct+W*.04,1.03,rt+I*.04,W?.05:.38,.3,I?.05:.38,Mt,{faces:$t}),e.plain.box(ct+W*.045,1.06,rt+I*.045,W?.05:.16,.14,I?.05:.16,Tt(Mt,.65),{faces:$t}),e.plain.box(ct+W*.045+(I?.1:0),1.16,rt+I*.045+(W?.1:0),W?.05:.08,.08,I?.05:.08,16773568,{faces:$t})}}continue}let D=o[z],q=D==="wood"?e.wood:D==="carpet"?e.carpet:D==="tile"?e.tile:D==="grass"?e.grass:C===f?e.concrete:e.asphalt,G=D==="carpet"?n.def.carpet||9346022:16777215,Z=D==="grass"||D==="road"?1:2;for(let W=0;W<Z;W++)for(let I=0;I<Z;I++)q.box(E+(I+.5)/Z,-.05,C+(W+.5)/Z,1/Z,.05,1/Z,G,{faces:me});if(D==="road"&&C===f+1&&E%2===0&&e.plain.box(E+1,-.01,C+1,1.1,.02,.12,15911244,{faces:me}),D!=="grass"&&D!=="road")for(let W=0;W<2;W++)for(let I=0;I<2;I++)e.plaster.box(E+.25+I*.5,Be,C+.25+W*.5,.5,0,.5,16183268,{faces:Mi});let j=h(E-1,C)&&h(E+1,C),B=h(E,C-1)&&h(E,C+1);if(j||B){let W=w(E,C);e.plain.box(E+.5,1.55,C+.5,1,Be-1.55,1,W.wall,{faces:j?Mi|kt|ke:Mi|si|pi}),e.plain.box(E+.5,1.55,C+.5,j?1.04:1.12,.07,j?1.12:1.04,Cc,{faces:63&~me});for(let et of[-1,1])e.plain.box(E+.5+(j?et*.48:0),0,C+.5+(B?et*.48:0),j?.07:1.12,1.55,B?.07:1.12,Cc,{faces:63&~Mi&~me});let I=U==="D"||U==="L"?[]:j?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[et,ot]of I){let ct=j?E+et:E+ot,rt=j?C+ot:C+et;if(!h(j?E+et:E,j?C:C+et)||h(ct,rt)||u(ct,rt))continue;let Ft=rt*s+ct;if(!n.walk[Ft])continue;let $t=11040588;if(j){let Mt=ot>0?C+1+.04:C-.04,Ht=et>0?E+1+.44:E-.44;e.woodfine.box(Ht,0,Mt,.86,1.5,.05,$t,{faces:63}),e.plain.box(Ht+et*.32,.72,Mt+ot*.035,.05,.05,.03,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(Ht,te,Mt+ot*.028,.6,.55,.01,Tt($t,1.12),{faces:ot>0?kt:ke})}else{let Mt=ot>0?E+1+.04:E-.04,Ht=et>0?C+1+.44:C-.44;e.woodfine.box(Mt,0,Ht,.05,1.5,.86,$t,{faces:63}),e.plain.box(Mt+ot*.035,.72,Ht+et*.32,.03,.05,.05,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(Mt+ot*.028,te,Ht,.01,.55,.6,Tt($t,1.12),{faces:ot>0?si:pi})}break}}}for(let C of n.def.decor||[])if(C.type==="rug"){let[E,z,U,D]=C.rect;e.rug.box(E+U/2,0,z+D/2,U-.2,.02,D-.2,C.color,{faces:me,fit:!0})}for(let C of n.furn)gx(n,C,e,l,y);for(let C of y)C.pendant&&(e.plain.box(C.x,C.y+.12,C.z,.02,Be-C.y-.12,.02,2763574),e.plain.box(C.x,Be-.02,C.z,.16,.02,.16,16183526),e.plain.box(C.x,C.y+.02,C.z,.46,.12,.46,15260868,{faces:63&~Mi}),e.plain.box(C.x,C.y+.14,C.z,.3,.06,.3,14207920),e.unlit.box(C.x,C.y-.04,C.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(C.x,C.y+.021,C.z,.44,.001,.44,16769192,{faces:Mi}),p.push(C.x,C.y-.02,C.z));for(let C of y)!C.pendant&&C.I>.8&&C.y<1.2&&C.col[2]<.5&&p.push(C.x,C.y-.05,C.z);if(d)for(let C=-10;C<s+12;C+=6){let E=f+.15;e.plain.box(C,0,E,.12,2.6,.12,2763574),e.plain.box(C,2.55,E+.35,.1,.08,.7,2763574),e.unlit.box(C,2.45,E+.65,.3,.1,.3,16769696,{faces:63}),y.push({x:C,y:2.3,z:E+.7,col:[1,.78,.45],I:1.6,R:5.5,street:!0}),p.push(C,2.42,E+.65)}if(n.roof){let C=n.roof.x+.5,E=n.roof.y+.5;for(let z of[-1,1])e.plain.box(C+z*.22,0,E-.3,.05,Be,.05,9082020);for(let z=0;z<6;z++)e.plain.box(C,.25+z*.28,E-.3,.44,.04,.04,12108496);e.unlit.box(C,Be-.005,E-.1,.7,.01,.7,658456,{faces:Mi}),e.plain.box(C,Be-.08,E-.1,.8,.08,.8,6976644,{faces:63&~me&~Mi})}let k=xx(n,y);for(let C of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])yx(e[C],k);n.light=new Float32Array(s*r*3);for(let C=0;C<r;C++)for(let E=0;E<s;E++){let z=k(E+.5,1,C+.5,0,0,0,!0),U=(C*s+E)*3;n.light[U]=z[0],n.light[U+1]=z[1],n.light[U+2]=z[2]}let P=new Ot,L=(C,E,z=0)=>{if(C.empty)return;let U=new _t(C.build(),E);U.matrixAutoUpdate=!1,U.updateMatrix(),U.renderOrder=z,P.add(U)},O=C=>new Lt({vertexColors:!0,map:C});if(L(e.wood,O(t.wood)),L(e.carpet,O(t.carpet)),L(e.tile,O(t.tile)),L(e.wallpaper,O(t.wallpaper)),L(e.panel,O(t.panel)),L(e.brick,O(t.brick)),L(e.plaster,O(t.plaster)),L(e.grass,O(t.grass)),L(e.asphalt,O(t.asphalt)),L(e.concrete,O(t.concrete)),L(e.plain,O(t.plain)),L(e.woodfine,O(t.woodfine)),L(e.rug,new Lt({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),L(e.unlit,new Lt({vertexColors:!0,toneMapped:!1})),i){let C=vx(),E=[];for(let[z,U]of[[e.trainN,1],[e.trainS,-1]]){let D=C.clone();D.needsUpdate=!0,D.repeat.set(1,8/.62),D.offset.set(0,-.82/.62);let q=new Lt({map:D,toneMapped:!1});q.userData.sgn=U,E.push(q),L(z,q)}P.userData.trainMats=E}if(L(e.shadow,new Lt({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),L(e.patch,new Lt({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:qe,polygonOffset:!0,polygonOffsetFactor:-3}),2),m.length){let C=[],E=[],z=[];for(let[q,G,Z,j]of m){let B=j?1:0,W=Z?1:0,I=C.length/3,et=[[q-B*.3,1.4,G-W*.3,.16],[q+B*.3,1.4,G+W*.3,.16],[q+Z*1.5+B*.75,.02,G+j*1.5+W*.75,0],[q+Z*1.5-B*.15,.02,G+j*1.5-W*.15,0],[q-B*.3,.82,G-W*.3,.12],[q+B*.3,.82,G+W*.3,.12],[q+Z*.55+B*.55,.02,G+j*.55+W*.55,0],[q+Z*.55-B*.05,.02,G+j*.55-W*.05,0]];for(let ot of et)C.push(ot[0],ot[1],ot[2]),d?E.push(.5,.62,1,ot[3]*.9):E.push(1,.85,.6,ot[3]);z.push(I,I+1,I+2,I,I+2,I+3,I+4,I+5,I+6,I+4,I+6,I+7),z.push(I,I+1,I+5,I,I+5,I+4)}let U=new ue;U.setAttribute("position",new ne(new Float32Array(C),3)),U.setAttribute("color",new ne(new Float32Array(E),4)),U.setIndex(z);let D=new _t(U,new Lt({vertexColors:!0,transparent:!0,depthWrite:!1,blending:qe,side:Ie}));D.renderOrder=5,P.add(D)}if(p.length){let C=new ue;C.setAttribute("position",new ne(new Float32Array(p),3));let E=new Wi(C,new Ri({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:qe,sizeAttenuation:!0}));E.renderOrder=6,P.add(E)}return P}function of(){let n=new Te({vertexColors:!0}),t=new Ot,e=new Vt,i=4080992,s=2501178,r=15250234;e.box(0,0,0,.94,1.04,.84,i,{top:4936563}),e.box(0,0,0,.98,.06,.88,s),e.box(0,.98,0,.98,.06,.88,s);for(let l of[-1,1])e.box(l*.47,.06,0,.04,.92,.86,s);e.box(0,.12,.38,.74,.8,.05,987158,{faces:kt}),e.box(0,.14,.2,.66,.02,.3,2764350,{faces:me}),e.box(0,.5,.2,.66,.02,.3,2764350,{faces:me});for(let l=0;l<3;l++)e.box(-.18+l*.18,.16,.24,.16,.08,.1,r,{top:16769658,faces:63}),e.box(-.09+l*.18,.24,.24,.16,.08,.1,r,{top:16769658,faces:63});for(let l=0;l<4;l++)e.box(-.2+l*.13,.52,.24,.11,.07+l%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new _t(e.build(),n));let a=new Vt;a.box(.37,.1,.035,.74,.84,.07,5857674,{faces:63}),a.box(.37,.16,.075,.62,.72,.02,4936563,{faces:63}),a.box(.37,.46,.09,.24,.24,.04,r,{faces:63}),a.box(.37,.5,.115,.16,.16,.03,2237487,{faces:63});for(let l=0;l<8;l++){let c=l*Math.PI/4;a.box(.37+Math.cos(c)*.105,.574+Math.sin(c)*.105,.1,.02,.02,.03,16773568,{faces:63})}for(let l of[0,2.1,4.2])a.box(.62+Math.cos(l)*.05,.45+Math.sin(l)*.05,.12,.03,.03,.1,14212842,{faces:63});a.box(.62,.45,.1,.06,.06,.06,14212842,{faces:63});for(let l of[.2,.8])a.box(.03,l,.04,.06,.12,.09,s,{faces:63});let o=new _t(a.build(),n);return o.position.set(-.37,0,.42),t.add(o),{group:t,door:o,mat:n}}function lf(){let n=new Vt,t=5981910,e=15905076,i=2371663;n.box(0,.25,0,2.7,1.05,1.3,t,{top:7166184}),n.box(1.15,.25,0,.6,.75,1.32,t),n.box(0,.55,0,2.72,.14,1.32,e,{faces:si|pi|kt|ke}),n.box(.95,.78,0,.4,.4,1.34,i,{faces:kt|ke}),n.box(1.36,.78,0,.04,.4,1.1,i,{faces:si}),n.box(-.3,.75,-.66,1.4,.42,.03,i,{faces:ke}),n.box(0,1.3,0,1.6,.06,1,2763574),n.box(1.5,.22,0,.12,.12,1.34,2763574),n.box(1.52,.35,.42,.06,.16,.24,16774064,{faces:si}),n.box(1.52,.35,-.42,.06,.16,.24,16774064,{faces:si}),n.box(-1.37,.4,.45,.04,.18,.2,16731486,{faces:pi}),n.box(-1.37,.4,-.45,.04,.18,.2,16731486,{faces:pi});for(let a of[-.85,.85])for(let o of[-.6,.6])n.box(a,0,o,.5,.5,.22,1842728,{faces:63}),n.box(a,.15,o+Math.sign(o)*.1,.22,.22,.04,12107984,{faces:o>0?kt:ke});let s=new _t(n.build(),new Te({vertexColors:!0})),r=new Ot;return r.add(s),{group:r,body:s}}function cf(){let n=new Vt,t=2237743,e=15905076,i=7321599,s=1316380;n.box(0,0,0,2.2,1,1.1,t,{top:2895932}),n.box(1.25,.1,0,.5,.75,.95,i),n.box(.35,.45,0,1,.36,1.12,i,{faces:kt|ke}),n.box(0,.32,0,2.22,.1,1.12,e,{faces:si|pi|kt|ke}),n.box(-1.9,.45,0,1.9,.26,.26,t),n.box(-2.8,.45,0,.3,.75,.08,e),n.box(0,1,0,.5,.22,.5,s);for(let u of[-.62,.62])n.box(0,-.42,u,2.2,.07,.08,s,{faces:63}),n.box(.5,-.24,u*.92,.07,.36,.07,s,{faces:63}),n.box(-.5,-.24,u*.92,.07,.36,.07,s,{faces:63});n.box(1.5,-.28,0,.1,.12,.3,16774064);let r=new Ot;r.add(new _t(n.build(),new Te({vertexColors:!0})));let a=new Ot,o=new Lt({color:789778});for(let u=0;u<2;u++){let f=new _t(new se(5.2,.04,.22),o);f.rotation.y=u*Math.PI/2,a.add(f)}a.position.y=1.16,r.add(a);let l=new Ot;l.add(new _t(new se(.04,.9,.12),o),new _t(new se(.04,.12,.9),o)),l.position.set(-2.8,.55,.1),r.add(l);let c=new _t(new Tn(.08,1.6,6,16,1,!0),new Lt({color:16773568,transparent:!0,opacity:.16,blending:qe,depthWrite:!1,side:Ie}));c.position.set(1.5,-3.3,0),r.add(c);let h=new _t(new se(.1,.1,.1),new Lt({color:16722490}));return h.position.set(-2.8,.95,0),r.add(h),r.visible=!1,{group:r,rotor:a,tail:l,beam:c,blink:h}}function hf(){let n=new Vt,t=16054008,e=2237487,i=2371663;n.box(0,.22,0,2.5,.45,1.2,t,{top:16777215}),n.box(-.1,.67,0,1.3,.38,1.1,t),n.box(-.1,.72,0,1.32,.28,1.12,i,{faces:si|pi|kt|ke}),n.box(0,.3,0,2.52,.16,1.22,e,{faces:si|pi|kt|ke}),n.box(1.26,.32,.38,.03,.1,.22,16774064,{faces:si}),n.box(1.26,.32,-.38,.03,.1,.22,16774064,{faces:si});for(let l of[-.8,.8])for(let c of[-.56,.56])n.box(l,0,c,.46,.46,.2,1842728,{faces:63});let s=new _t(n.build(),new Te({vertexColors:!0})),r=new Ot;r.add(s);let a=new _t(new se(.3,.12,.5),new Lt({color:16722490})),o=new _t(new se(.3,.12,.5),new Lt({color:2779903}));return a.position.set(-.1,1.11,.26),o.position.set(-.1,1.11,-.26),r.add(a,o),{group:r,red:a,blue:o}}function uf(n){let t=new Vt,e=1,i=1.55,s=.16;t.box(0,0,0,n?e:s,i,n?s:e,9082020,{faces:63,top:6976644});for(let o=0;o<6;o++)t.box(0,.08+o*.08,0,n?e+.004:s+.004,.04,n?s+.004:e+.004,o%2?2237487:15911244,{faces:51});t.box(0,.75,0,n?.3:s+.02,.3,n?s+.02:.3,3818066,{faces:63}),t.box(0,1.2,0,n?.5:s+.01,.08,n?s+.01:.5,5923956,{faces:63});let r=new Ot;r.add(new _t(t.build(),new Te({vertexColors:!0})));let a=new _t(new se(n?.12:s+.04,.12,n?s+.04:.12),new Lt({color:16722490}));return a.position.y=.95,r.add(a),{group:r,led:a}}function ff(){let n=new Vt;n.box(0,0,0,.74,.46,.05,9082020,{faces:63,top:10134708}),n.box(0,.05,.026,.62,.36,.01,1053208,{faces:16});for(let i=0;i<5;i++)n.box(0,.08+i*.07,.035,.62,.03,.03,11581636,{faces:63});for(let i of[-.33,.33])for(let s of[.03,.41])n.box(i,s,.03,.03,.03,.01,4870754,{faces:16});let t=new Ot;t.add(new _t(n.build(),new Te({vertexColors:!0})));let e=new Ot;return e.add(t),{group:e,flap:t}}function df(){let n=new Vt;n.box(0,0,0,.42,.56,.1,6976644,{faces:63,top:8029332}),n.box(0,.06,.051,.36,.44,.01,4870754,{faces:16}),n.box(-.08,.36,.06,.12,.12,.01,15911244,{faces:16}),n.box(-.08,.38,.065,.03,.08,.01,2237487,{faces:16});for(let r=0;r<3;r++)n.box(-.1+r*.1,.12,.065,.06,.12,.03,2237487,{faces:63});let t=new Ot;t.add(new _t(n.build(),new Te({vertexColors:!0})));let e=new Ot,i=new Vt;i.box(0,0,.04,.05,.2,.05,14168890,{faces:63}),i.box(0,.18,.04,.09,.06,.08,2237487,{faces:63}),e.add(new _t(i.build(),new Te({vertexColors:!0}))),e.position.set(.12,.3,.06),t.add(e);let s=new _t(new se(.05,.05,.02),new Lt({color:16722490}));return s.position.set(.12,.5,.06),t.add(s),{group:t,lever:e,led:s}}function pf(n){let t=n.map(p=>p[0]),e=n.map(p=>p[1]),i=new Set(e).size===1,s=Math.min(...t),r=Math.max(...t)+1,a=Math.min(...e),o=Math.max(...e)+1,l=i?r-s:o-a,c=(s+r)/2,h=(a+o)/2,u=new Vt,f=new Vt;for(let p of[.25,.55,.85,1.15])u.box(c,p,h,i?l:.025,.025,i?.025:l,16724032,{faces:63});for(let p of[-1,1]){let m=i?c+p*(l/2-.05):c,v=i?h:h+p*(l/2-.05);f.box(m,0,v,.1,1.3,.1,3817294,{faces:63,top:16724032});for(let b of[.25,.55,.85,1.15])f.box(m,b-.02,v,.12,.06,.12,16736368,{faces:63})}let d=new Lt({color:16724032,transparent:!0,opacity:.9,depthWrite:!1,blending:qe,toneMapped:!1}),g=new _t(u.build(),d);g.renderOrder=6;let y=new Ot;return y.add(g,new _t(f.build(),new Te({vertexColors:!0}))),{group:y,mat:d,alongX:i,line:i?h:c,lo:i?s:a,hi:i?r:o}}function mf(n){let t=new Vt,e=9067068,i=Tt(e,1.15),s=.98,r=.07,a=1.52,o=(c,h,u,f,d,g,y,p)=>n?t.box(c,h,u,f,d,g,y,p):t.box(u,h,c,g,d,f,y,p);o(s/2,0,0,s,a,r,e,{faces:63,top:Tt(e,.8)});for(let c of[-1,1])for(let h of[.15,.85])o(s/2,h,c*.036,.62,.55,.01,i,{faces:n?c>0?16:32:c>0?1:2});for(let c of[-1,1])o(s-.14,.72,c*.05,.06,.06,.04,14267482,{faces:63}),o(s-.14,.62,c*.042,.05,.1,.02,3816006,{faces:63});let l=new Ot;return l.add(new _t(t.build(),new Te({vertexColors:!0}))),{group:l,led:null}}function gf(){let n=new Vt;n.box(0,-.1,0,.34,.22,.03,3111656,{faces:63}),n.box(0,-.06,0,.35,.05,.035,15911244,{faces:63}),n.box(-.09,-.16,0,.1,.06,.036,16777215,{faces:63}),n.box(.12,0,0,.05,.05,.036,2237487,{faces:63});let t=new _t(n.build(),new Lt({vertexColors:!0})),e=new Ot;return e.add(t),e}function xf(){let n=new Vt;n.box(0,0,0,.32,.42,.06,15262422,{faces:63}),n.box(0,.24,.031,.22,.1,.01,2046511,{faces:16});for(let i=0;i<3;i++)for(let s=0;s<3;s++)n.box(-.07+s*.07,.04+i*.06,.035,.05,.04,.012,10134704,{faces:63});let t=new Ot;t.add(new _t(n.build(),new Te({vertexColors:!0})));let e=new _t(new se(.05,.05,.02),new Lt({color:4054148}));return e.position.set(.11,.36,.035),t.add(e),{group:t,led:e}}function yf(){let n=new Vt;for(let r=0;r<3;r++){let a=-.12+r*.075,o=(r-1)*.15;n.box(r*.015,a,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:o}),n.box(r*.015,a-.002,0,.09,.075,.245,15983520,{faces:63,ry:o})}let t=new Vt;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new Vt,i=new cr(.17,0);i.scale(1.15,1.2,1.15),e.add(i,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new Vt;return s.box(0,-.34,0,.74,.7,.08,12618298,{faces:63}),s.box(0,-.29,0,.62,.6,.09,3098712,{faces:kt|ke}),s.box(0,-.29,0,.62,.22,.095,4165530,{faces:kt|ke}),s.box(.14,-.02,0,.16,.16,.1,15905076,{faces:kt|ke}),s.box(-.12,-.14,0,.3,.12,.1,15230287,{faces:kt|ke}),{cash:n.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var Pc={},Rr=(n,t)=>{if(!Pc[n]){let e=new Vt;t(e),Pc[n]=e.build()}return Pc[n]},Pt=63,_x={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},clerk:{skin:14264186,shirt:16052714,pants:3422282,shoe:2760216,belt:2237487,hat:3811874,vest:3422282},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function Ic(n,t,e){for(let s of[-.11,.11])n.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),n.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),n.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),n.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:Pt,ry:s>0?-.15:.15});n.box(0,.03,.222+.01,.07,.09,.05,Tt(t.skin,.88),{faces:Pt});for(let s of[-.255,.255])n.box(s,.08,0,.03,.1,.08,Tt(t.skin,.92),{faces:Pt})}function bx(n,t){return Rr(n+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:Pt}),n==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:Pt});for(let i of[-.11,.11])e.box(i,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(i,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:Pt}),e.box(0,.22,0,.56,.06,.5,Tt(t.hat,.8),{faces:Pt&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:Pt})}else if(n==="guard")Ic(e,t,n),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:Pt}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:Pt}),e.box(0,.35,-.02,.5,.06,.44,Tt(t.hat,1.15),{faces:Pt}),e.box(0,.2,.29,.5,.04,.2,Tt(t.hat,.8),{faces:Pt}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16});else if(n==="clerk"){Ic(e,t,n),e.box(0,-.12,.225,.12,.03,.02,10115658,{faces:16}),e.box(0,.2,-.02,.53,.14,.47,t.hat,{faces:Pt}),e.box(-.18,.12,.2,.18,.08,.1,t.hat,{faces:Pt}),e.box(0,.13,.226,.4,.035,.015,2237487,{faces:16});for(let i of[-.11,.11])e.box(i,.13,.232,.13,.12,.01,2237487,{faces:16})}else Ic(e,t,n),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:Pt}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:Pt}),e.box(.14,.42,-.1,.18,.1,.18,Tt(t.hat,1.1),{faces:Pt}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:Pt}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:Pt&-5&-9})})}function Lc(n){let t=_x[n],e=new Te({vertexColors:!0}),i=new Ot,s=new Ot;i.add(s);let r=[],a=(b,_,w=0,T=0,x=0)=>{let M=new _t(b,e);return M.position.set(w,T,x),_.add(M),r.push(M),M},o=Rr(n+"leg",b=>{b.box(0,-.36,0,.18,.36,.21,t.pants,{faces:Pt}),b.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:Pt,top:Tt(t.shoe,1.3)}),n==="owner"&&b.box(0,-.3,.06,.205,.04,.25,16777215,{faces:Pt}),n==="guard"&&b.box(0,-.12,0,.185,.02,.215,Tt(t.pants,.8),{faces:Pt&-5&-9})}),l=Rr(n+"torso",b=>{if(b.box(0,.34,0,.5,.45,.3,t.shirt,{faces:Pt}),n==="guard"){b.box(0,.4,0,.53,.38,.33,t.vest,{faces:Pt}),b.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),b.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:Pt}),b.box(.14,.62,.168,.12,.04,.02,16777215,{faces:Pt}),b.box(.16,.48,.17,.08,.12,.05,2237487,{faces:Pt}),b.box(.18,.6,.18,.015,.08,.015,2237487,{faces:Pt}),b.box(0,.33,0,.55,.08,.35,1777195,{faces:Pt}),b.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let _ of[-.2,.2])b.box(_,.3,.1,.09,.1,.1,2763574,{faces:Pt})}else if(n==="player")b.box(0,.33,0,.52,.08,.32,t.belt,{faces:Pt}),b.box(0,.42,.155,.3,.14,.02,Tt(t.shirt,.8),{faces:16}),b.box(0,.72,-.12,.42,.14,.12,Tt(t.shirt,.85),{faces:Pt});else if(n==="clerk"){b.box(0,.33,0,.52,.06,.32,t.belt,{faces:Pt}),b.box(0,.42,.156,.07,.34,.015,11745617,{faces:16}),b.box(0,.73,.156,.1,.05,.016,11745617,{faces:16}),b.box(-.13,.62,.157,.12,.06,.01,15911244,{faces:16});for(let _ of[-1,1])b.box(_*.07,.72,.155,.1,.07,.015,16777215,{faces:16,ry:_*.3})}else{for(let _=0;_<4;_++)b.box(0,.38+_*.1,0,.51,.035,.31,16777215,{faces:Pt&-5&-9});for(let _=0;_<3;_++)b.box(0,.42+_*.11,.155,.04,.04,.02,16777215,{faces:16});b.box(0,.74,.14,.3,.06,.04,Tt(t.shirt,.85),{faces:Pt})}}),c=b=>Rr(n+"arm"+b,_=>{_.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:Pt}),_.box(0,-.37,0,.14,.18,.16,n==="guard"?t.shirt:Tt(t.shirt,.95),{faces:Pt}),_.box(0,-.48,0,.13,.11,.14,n==="player"?2763837:t.skin,{faces:Pt}),n==="guard"&&_.box(0,-.06,0,.16,.1,.18,t.vest,{faces:Pt}),n==="guard"&&b==="R"&&(_.box(0,-.66,.06,.07,.24,.07,2763574,{faces:Pt}),_.box(0,-.73,.06,.095,.08,.095,12831958,{faces:Pt}),_.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),h=new Ot;h.position.set(-.12,.36,0),s.add(h),a(o,h);let u=new Ot;u.position.set(.12,.36,0),s.add(u),a(o,u),a(l,s);let f=new Ot;f.position.set(-.33,.77,0),s.add(f),a(c("L"),f);let d=new Ot;d.position.set(.33,.77,0),s.add(d),a(c("R"),d);let g=new Ot;g.position.set(0,.84,0),s.add(g),a(bx(n,t),g);let y=null,p=null;if(n==="player"&&(y=new Ot,y.position.set(0,.66,-.16),s.add(y),a(Rr("bag",b=>{b.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:Pt}),b.box(0,.19,-.18,.14,.1,.14,10779973,{faces:Pt}),b.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),y)),n==="guard"){let b=new Xn(.75,3.4,14,1,!0);b.translate(0,-1.7,0),p=new _t(b,new Lt({map:ki().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:qe,side:Ie,fog:!1})),p.position.set(0,-.74,.06),p.renderOrder=6,d.add(p)}let m={player:.76,guard:.72,owner:.78,clerk:.74}[n],v={player:.88,guard:.8,owner:.86,clerk:.84}[n];return n!=="player"&&g.scale.set(.9/m,1,.92/v),p&&p.scale.set(1/m,1/v,1),{kind:n,root:i,body:s,legL:h,legR:u,armL:f,armR:d,head:g,bag:y,beam:p,mat:e,meshes:r,phase:0,sq:1,sqv:0,flash:0,wx:m,wz:v}}function kc(n,t,e,i){n.phase+=t*(5+9*e);let s=Math.sin(n.phase)*.8*e;n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armOverride||(n.armL.rotation.x=-s*.9,n.armR.rotation.x=n.beam?-1.35+Math.sin(n.phase*.5)*.06*e+Math.sin(i*1.3)*.03:s*.9),n.body.position.y=Math.abs(Math.sin(n.phase))*.07*e+(1-e)*Math.sin(i*2.2)*.012,n.head.rotation.y=n.beam?Math.sin(i*.9)*.15*(1-e):0,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let r=Math.max(.5,n.sq),a=1/Math.sqrt(r);if(n.body.scale.set(a*n.wx,r,a*n.wz),n.flash>0){n.flash-=t;let o=Math.max(0,n.flash)*6;n.mat.emissive.setRGB(o,o,o)}}function Ho(n,t,e,i,s){if(!t.light)return;let r=Math.max(0,Math.min(t.W-1,Math.floor(e))),o=(Math.max(0,Math.min(t.H-1,Math.floor(i)))*t.W+r)*3,l=1-Math.exp(-6*s),c=1.55,h=n.mat.color;h.r+=(Math.max(.82,Math.min(1.5,t.light[o]*c))-h.r)*l,h.g+=(Math.max(.78,Math.min(1.5,t.light[o+1]*c))-h.g)*l,h.b+=(Math.max(.78,Math.min(1.5,t.light[o+2]*c))-h.b)*l}var Di=(n,t)=>{n.sq=t,n.sqv=0};function vf(){let n=new Te({vertexColors:!0}),t=13208138,e=8014374,i=16181976,s=new Ot,r=new Ot;s.add(r);let a=(h,u,f=0,d=0,g=0)=>{let y=new Vt;h(y);let p=new _t(y.build(),n);return p.position.set(f,d,g),u.add(p),p};a(h=>{h.box(0,.3,-.02,.32,.28,.66,t,{faces:Pt,top:Tt(t,1.1)}),h.box(0,.3,.2,.28,.22,.2,i,{faces:Pt&-5}),h.box(0,.5,.26,.34,.06,.1,14168890,{faces:Pt}),h.box(0,.44,.32,.06,.07,.03,15911244,{faces:Pt}),h.box(0,.4,-.1,.33,.12,.3,e,{faces:7})},r);let o=new Ot;o.position.set(0,.58,.34),r.add(o),a(h=>{h.box(0,-.12,0,.3,.26,.28,t,{faces:Pt}),h.box(0,-.12,.2,.17,.13,.16,i,{faces:Pt}),h.box(0,-.05,.285,.07,.05,.03,1842470,{faces:Pt}),h.box(0,-.165,.26,.1,.03,.06,15233146,{faces:Pt});for(let u of[-1,1])h.box(u*.08,-.01,.141,.06,.06,.02,1842470,{faces:16}),h.box(u*.09,0,.151,.02,.02,.01,16777215,{faces:16}),h.box(u*.17,-.12,-.02,.06,.22,.14,e,{faces:Pt})},o);let l=[];for(let[h,u]of[[-.1,.2],[.1,.2],[-.1,-.24],[.1,-.24]]){let f=new Ot;f.position.set(h,.3,u),r.add(f),l.push(f),a(d=>{d.box(0,-.3,0,.09,.3,.1,t,{faces:Pt}),d.box(0,-.3,.015,.1,.05,.13,i,{faces:Pt})},f)}let c=new Ot;return c.position.set(0,.42,-.34),r.add(c),a(h=>h.box(0,0,-.1,.06,.06,.22,t,{faces:Pt}),c),c.rotation.x=.7,r.scale.setScalar(1.1),{root:s,body:r,head:o,legs:l,tail:c,mat:n,phase:0,sq:1,sqv:0}}function _f(n,t,e,i,s){n.phase+=t*(6+12*e);let r=Math.sin(n.phase)*.7*e;n.legs[0].rotation.x=r,n.legs[3].rotation.x=r,n.legs[1].rotation.x=-r,n.legs[2].rotation.x=-r,n.tail.rotation.y=Math.sin(i*(s?26:12))*(s?.4:.7),n.body.position.y=Math.abs(Math.sin(n.phase))*.03*e,n.head.rotation.x=s?-.25+Math.sin(i*18)*.15:Math.sin(i*1.5)*.05,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let a=1.1*Math.max(.6,n.sq);n.body.scale.set(1.1/Math.sqrt(n.sq),a,1.1)}var De=n=>n?"ok":"pending",Mx=[{id:"art",text:"Steal the painting",bonus:600,needs:n=>n.totals.art>0,check:n=>De(n.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,needs:n=>n.totals.jewel>0,check:n=>De(n.got.jewel>=n.totals.jewel)},{id:"gold",text:"Grab every gold bar",bonus:500,needs:n=>n.totals.gold>0,check:n=>De(n.got.gold>=n.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:n=>De(n.got.cashLoose>=n.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,needs:n=>n.hides.length>0,check:n=>De(n.hidFromAlert)},{id:"nodog",text:"Don't get barked at",bonus:600,needs:n=>n.dogs.length>0,check:(n,t)=>n.barkedAt?"fail":t?"ok":"pending"},{id:"disguise",text:"Wear a guard's uniform",bonus:500,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>De(n.disguises>0)},{id:"tv",text:"Lure a guard with the TV",bonus:400,needs:n=>n.tvs.length>0,check:n=>De(n.tvLures>0)},{id:"vent",text:"Crawl through an air vent",bonus:400,needs:n=>n.vents.length>0,check:n=>De(n.ventsUsed>0)},{id:"nolaser",text:"Never trip a laser",bonus:600,needs:n=>n.lasers.length>0,check:(n,t)=>n.lasersTripped>0?"fail":t?"ok":"pending"},{id:"power",text:"Cut the power",bonus:500,needs:n=>!!n.breaker,check:n=>De(n.powerOff)},{id:"clerk",text:"Stop a fleeing clerk",bonus:500,needs:n=>n.buttons.length>0,check:n=>De(n.clerkStopped)},{id:"smoke",text:"Break a guard's sight with smoke",bonus:500,check:n=>De(n.smokeHid)},{id:"cleanpick",text:"Pick a lock without a slip",bonus:500,needs:n=>n.doors.some(t=>t.type==="lock"),check:n=>De(n.cleanPick)},{id:"cases",text:"Smash every display case",bonus:900,needs:n=>n.cases.length>0,check:n=>De(n.casesSmashed>=n.cases.length)},{id:"radio",text:"Fake a radio check-in",bonus:500,check:n=>De(n.radioFaked>0)},{id:"nospot",text:"Never step into a spotlight",bonus:700,needs:n=>n.spots.length>0,check:(n,t)=>n.spotHit?"fail":t?"ok":"pending"},{id:"slot",text:"Distract guards with a slot machine",bonus:500,needs:n=>n.slots.length>0,check:n=>De(n.slotLures>0)},{id:"pocket2",text:"Pickpocket 2 guards",bonus:600,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>De(n.picks>=2)},{id:"camhit",text:"Knock out a camera with a coin",bonus:500,needs:n=>n.cams.length>0,check:n=>De(n.camsHit>0)},{id:"stashrun",text:"Stash heavy loot before cracking the safe",bonus:500,needs:n=>n.totals.gold+n.totals.art>0,check:n=>De(n.stashedEarly)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:n=>De(n.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:n=>De(n.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(n,t)=>n.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(n,t)=>n.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,needs:n=>n.guards.some(t=>t.kind==="owner"),check:(n,t)=>n.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(n,t)=>n.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(n,t)=>n.dashes>0?"fail":t?"ok":"pending"}];function bf(n=3,t=Math.random,e=null){let i=Mx.filter(r=>!e||!r.needs||r.needs(e)),s=[];for(;s.length<n&&i.length;){let r=i.splice(t()*i.length|0,1)[0];r.tag&&s.some(a=>a.tag===r.tag)||s.push({...r,st:"pending"})}return s}var Ds={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,smoke:2,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,smoke:1,alarm:45,radio:2.6,mult:1,safeAlarm:!0},ironman:{label:"Ironman",range:1.25,speed:1.2,susp:1.6,coins:1,smoke:0,alarm:15,radio:1.2,mult:2.5,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,smoke:1,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},Ni=(n,t)=>t==="normal"?n:n+"_"+t;var Dc=.3,Nc=3.7,Mf=11,Sf=.18,Sx=.8,Go=1.02,wx=3.2,Us=20,Ns={cone:16769357,sus:16752412,alert:16726862},Pr=new Me,Vo=new X,Si={x:0,y:0},ts={x:0,y:0},Wo=(n,t,e)=>n+Fe(Ee(n,t),-e,e),wf=Wo,Tx=new wn(.36,12).rotateX(-Math.PI/2),Ax=new Lt({color:0,transparent:!0,opacity:.22,depthWrite:!1});function Tf(){let n=new ue,t=new Float32Array((Us+2)*3),e=new Float32Array((Us+2)*4);e.set([1,1,1,.3],0);for(let r=1;r<=Us+1;r++)e.set([1,1,1,.05],r*4);let i=[];for(let r=1;r<=Us;r++)i.push(0,r+1,r);n.setAttribute("position",new ne(t,3)),n.setAttribute("color",new ne(e,4)),n.setIndex(i);let s=new _t(n,new Lt({color:Ns.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie}));return s.frustumCulled=!1,s.renderOrder=3,s}function Ex(){let n=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new ue;t.setAttribute("position",new ne(new Float32Array(n),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new _t(t,new Lt({color:16765503,side:Ie,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function Cx(){let n=new Ot,t=new se(.13,.13,.13),e=new Lt({color:16765503});for(let i=0;i<3;i++){let s=new _t(t,e);n.add(s)}return n.visible=!1,n}var Af=new Set(["patrol","wait","post"]),Rx=[["Quiet night, huh?","Too quiet."],["Did you hear something?","Just the pipes again."],["Coffee machine's broken again.","This job, I swear..."],["Who has the keycard?","Not me. Ask the boss."],["My feet are killing me.","Two more hours, buddy."],["You watch the game last night?","Don't remind me."],["They say this place is unrobbable.","Yeah, yeah."],["Saw a weird van outside earlier.","Probably the pizza guy."],["Remember the drill if the alarm goes?","Run toward it, right?"],["Is it just me or is it cold in here?","It's you."]],Xo=class{constructor(t){this.app=t,this.root=new Ot,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){this.root.clear();for(let d of this.guards||[])d.badge.remove();this.def=t;let e=this.L=tf(t),i=af(e);this.root.add(i),this.trainMats=i.userData.trainMats||null,this.clackT=0,this.sway=0,this.safe=of(),this.prev=null,this.safe.group.position.set(e.safe.x+.5,0,e.safe.y+.5),this.safeScale=t.safeScale||1,this.safe.group.scale.setScalar(this.safeScale);let s=(d,g)=>e.ch[g*e.W+d]==="#";if(this.doors=e.doors.map(d=>{let g=s(d.x-1,d.y)&&s(d.x+1,d.y),y=d.type==="lock"?mf(g):uf(g);return d.type==="lock"?y.group.position.set(g?d.x+.01:d.x+.5,0,g?d.y+.5:d.y+.01):y.group.position.set(d.x+.5,0,d.y+.5),d.alongX=g,this.root.add(y.group),{...d,m:y,open:!1,t:0}}),this.lasers=(t.lasers||[]).map(d=>{let g=pf(d.cells);return this.root.add(g.group),{def:d,...g,on:!0}}),this.breaker=null,t.breaker){let d=t.breaker,g=df();g.group.position.set(d.x+.5+d.dx*.53,.75,d.y+.5+d.dy*.53),g.group.rotation.y=Math.atan2(d.dx,d.dy),this.root.add(g.group),this.breaker={...g,at:{x:d.x+.5+d.dx*1.15,z:d.y+.5+d.dy*1.15}}}if(this.keyMeshes=e.keys.map(d=>{let g=gf();return g.position.set(d.x+.5,.8,d.y+.5),this.root.add(g),{...d,m:g}}),this.root.add(this.safe.group),this.police=hf(),this.police.group.visible=!1,this.root.add(this.police.group),this.panel=null,t.panel){let d=t.panel;this.panel=xf(),this.panel.group.position.set(d.x+.5+d.dx*.53,.85,d.y+.5+d.dy*.53),this.panel.group.rotation.y=Math.atan2(d.dx,d.dy),this.panel.at={x:d.x+.5+d.dx*1.1,z:d.y+.5+d.dy*1.1},this.root.add(this.panel.group)}this.vents=[];for(let d of t.vents||[]){let g=[d.a,d.b].map(([y,p,m,v])=>{let b=ff();return b.group.position.set(y+.5+m*.47,.06,p+.5+v*.47),b.group.rotation.y=Math.atan2(-m,-v),this.root.add(b.group),{...b,cx:y+.5,cz:p+.5,gx:y+.5+m*.5,gz:p+.5+v*.5,out:Math.atan2(-m,-v)}});g[0].other=g[1],g[1].other=g[0],this.vents.push(...g)}this.tvs=e.furn.filter(d=>d.type==="tv").map(d=>{let g=sf(e,d),y=Math.atan2(-g[0],-g[1]),p=g[0]?d.d:d.w,m=g[0]?d.w:d.d,v=d.x0+d.w/2,b=d.y0+d.d/2,_=new _t(new Xi(p-.52,.8),new Lt({color:10473727,toneMapped:!1}));_.position.set(v+g[0]*.15,1.07,b+g[1]*.15),_.rotation.y=y;let w=new _t(new Xi(3.2,2.2),new Lt({map:ki().glow,color:7317759,transparent:!0,opacity:.5,depthWrite:!1,blending:qe,fog:!1}));return w.position.set(v-g[0]*.7,.03,b-g[1]*.7),w.rotation.x=-Math.PI/2,_.visible=w.visible=!1,this.root.add(_,w),{scr:_,glow:w,cx:v,cz:b,fx:v-g[0]*(m/2+.9),fz:b-g[1]*(m/2+.9),on:!1,used:!1,t:0,flick:0,babble:0}}),this.heli=t.heli?cf():null,this.heli&&this.root.add(this.heli.group),this.van=lf(),this.root.add(this.van.group);let r=yf(),a=nf();this.lootMeshes={};let o={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let d of e.loot)o[d.type]++;for(let d in r){let g=new Vn(r[d],a,Math.max(1,o[d]));g.frustumCulled=!1,g.count=0,this.lootMeshes[d]=g,this.root.add(g)}let l=Lc("player");l.root.rotation.order="YXZ",this.root.add(l.root),this.player={c:l,shadow:this.addShadow()},this.guards=[];let c=(d,g)=>{let y=Lc(d);y.root.rotation.order="YXZ",this.root.add(y.root);let p=Tf();this.root.add(p);let m=Cx();this.root.add(m);let v=document.createElement("div");v.className="badge",v.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(v);let b={kind:d,def:g,c:y,cone:p,stars:m,badge:v,shadow:this.addShadow()};return d==="guard"&&(b.walletMesh=new _t(new se(.13,.09,.035),new Lt({color:6962978})),b.walletMesh.position.set(.12,.34,-.17),b.keyMesh=new _t(new se(.1,.07,.02),new Lt({color:3111656})),b.keyMesh.position.set(-.13,.36,-.17),y.body.add(b.walletMesh,b.keyMesh)),this.guards.push(b),b};for(let d of t.guards)c("guard",d);this.buttons=[];for(let d of t.clerks||[]){let g=c("clerk",d),y=d.button,p=new _t(new se(.2,.26,.06),new Lt({color:14212582})),m=new _t(new se(.11,.11,.05),new Lt({color:16722490}));m.position.z=.04,p.add(m),p.position.set(y.x+.5+y.dx*.53,1.05,y.y+.5+y.dy*.53),p.rotation.y=Math.atan2(-y.dx,-y.dy),this.root.add(p),g.button={x:y.x+.5+y.dx*.15,z:y.y+.5+y.dy*.15,btn:m},this.buttons.push(g.button)}if(t.owner){let d=t.owner;c("owner",{path:d.patrol,wait:1.2,speed:d.speed,loop:!0,owner:d})}{let d=e.W,g=new Uint8Array(d*e.H),y=[e.start.y*d+e.start.x];for(g[y[0]]=1,this.entrance={x:e.start.x,y:e.start.y};y.length;){let p=y.shift(),m=p%d,v=p/d|0;if(!e.outdoor[p]&&e.walk[p]){this.entrance={x:m,y:v};break}for(let[b,_]of[[0,-1],[1,0],[-1,0],[0,1]]){let w=(v+_)*d+m+b;m+b>=0&&v+_>=0&&m+b<d&&v+_<e.H&&!g[w]&&e.walk[w]&&(g[w]=1,y.push(w))}}this.reserve=[];for(let p=0;p<2;p++){let m=this.entrance,v=c("guard",{roam:[1,1,e.W-2,e.H-2],path:[[m.x,m.y],[m.x,m.y]],wait:1.3,speed:1.7,reinforce:!0});this.guards.pop(),this.reserve.push(v)}}this.dogs=(t.dogs||[]).map(d=>{let g=vf();return this.root.add(g.root),{def:d,m:g,shadow:this.addShadow()}}),this.cams=(t.cameras||[]).map(d=>{let g=Tf();this.root.add(g);let y=new _t(new se(.22,.18,.36),new Lt({color:2961744})),p=new _t(new se(.12,.1,.06),new Lt({color:16726862}));return p.position.z=.2,y.add(p),y.position.set(d.pos[0],1.3,d.pos[1]),this.root.add(y),{def:d,cone:g,mesh:y,lens:p}}),this.exitRing=new _t(new Ss(.62,.9,28).rotateX(-Math.PI/2),new Lt({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new _t(new Tn(.85,.85,2.4,20,1,!0),new Lt({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:Ie})),this.exitRing.position.set(e.exit.x,.03,e.exit.z),this.exitBeam.position.set(e.exit.x,1.2,e.exit.z),this.root.add(this.exitRing,this.exitBeam);let h=new se(.11,.025,.11);this.coinMeshes=[];for(let d=0;d<4;d++){let g=new _t(h,new Lt({color:16762938}));g.visible=!1,this.root.add(g),this.coinMeshes.push(g)}this.hides=e.furn.filter(d=>d.type==="wardrobe").map(d=>{let g=d.x0+.5,y=d.y0+.5;for(let[p,m]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(d.x0+p,d.y0+m))return{cx:g,cz:y,ex:g+p*.95,ez:y+m*.95,face:Math.atan2(p,m)};return null}).filter(Boolean),this.smokeFx=[];for(let d=0;d<2;d++){let y=new ue;y.setAttribute("position",new ne(new Float32Array(138),3));let p=new Wi(y,new Ri({map:ki().glow,size:1.5,color:14275810,transparent:!0,opacity:0,depthWrite:!1}));p.frustumCulled=!1,p.renderOrder=8,p.visible=!1;let m=new Float32Array(184);for(let v=0;v<46;v++){let b=Math.random()*6.28,_=Math.sqrt(Math.random());m.set([Math.cos(b)*_,Math.random(),Math.sin(b)*_,Math.random()*6.28],v*4)}this.root.add(p),this.smokeFx.push({pts:p,geo:y,off:m,N:46})}this.arrow=Ex(),this.root.add(this.arrow),this.noiseRings=[];let u=new Ss(.9,1,32).rotateX(-Math.PI/2);for(let d=0;d<4;d++){let g=new _t(u,new Lt({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));g.visible=!1,g.renderOrder=4,this.root.add(g),this.noiseRings.push({m:g,t:1,r:1})}let f=t.values;this.cases=e.furn.filter(d=>d.type==="case").map(d=>{let g=d.x0+d.w/2,y=d.y0+d.d/2,p=new _t(new se(d.w-.12,.46,d.d-.12),new Lt({color:12576511,transparent:!0,opacity:.28,depthWrite:!1}));p.position.set(g,1.05,y),p.renderOrder=5;let m=new Ot,v=[5037311,16732026,8191898,16766810,13073919];for(let b=0;b<5;b++){let _=new _t(new se(.09,.09,.09),new Lt({color:v[(b+d.x0)%5]}));_.position.set(g+(b%3-1)*(d.w*.25),.88,y+((b/3|0)-.5)*(d.d*.3)),_.rotation.set(.6,b,.6),m.add(_)}return this.root.add(p,m),{f:d,cx:g,cz:y,glass:p,gems:m,smashed:!1,prog:0}}),this.caseLoot=t.caseLoot||0,this.slots=e.furn.filter(d=>d.type==="slots").map(d=>{let g=d.x0+d.w/2,y=d.y0+d.d/2,p=d.y0<e.H/2?1:-1,m=new _t(new se(d.w-.2,.08,.08),new Lt({color:16766810,toneMapped:!1}));return m.position.set(g,1.52,y+p*.15),m.visible=!1,this.root.add(m),{f:d,cx:g,cz:y,face:p,top:m,used:!1,prog:0,t:0}}),this.spots=(t.spots||[]).map(d=>{let g=new _t(new wn(d.r,28).rotateX(-Math.PI/2),new Lt({map:ki().glow,color:16773296,transparent:!0,opacity:.85,depthWrite:!1,blending:qe,toneMapped:!1}));g.renderOrder=4;let y=new _t(new Xn(d.r*.95,Be,20,1,!0),new Lt({color:16773296,transparent:!0,opacity:.09,depthWrite:!1,blending:qe,side:Ie,toneMapped:!1}));y.rotation.x=Math.PI,y.renderOrder=5;let p=new _t(new se(.3,.16,.3),new Lt({color:2763574})),m=new _t(new se(.2,.02,.2),new Lt({color:16774864}));m.position.y=-.09,p.add(m),this.root.add(g,y,p);let[v,b]=d.path;return{def:d,pool:g,cone:y,fix:p,ax:v[0]+.5,az:v[1]+.5,bx:b[0]+.5,bz:b[1]+.5,len:Math.hypot(b[0]-v[0],b[1]-v[1]),susp:0,cool:0,x:0,z:0,tickT:0}}),this.policeLane=e.van?{x:e.exit.x,z:e.exit.z+2.5}:{x:e.start.x+.5,z:e.start.y+1.5},this.baseLootTotal=f.stash+f.bundle*f.bundles+e.loot.reduce((d,g)=>d+f[g.type],0)+this.cases.length*this.caseLoot*f.jewel+this.slots.length*f.cash,this.lootTotal=this.baseLootTotal,this.reset()}addShadow(){let t=new _t(Tx,Ax);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasKey=!1,this.objText="",this.crackNoiseT=0;for(let r of this.buttons||[])r.btn.material.color.setHex(16722490);this.powerOff=!1,this.breakProg=0,this.lasersTripped=0,this.breaker&&(this.breaker.lever.rotation.x=0,this.breaker.led.material.color.setHex(16722490));for(let r of this.lasers||[])r.group.visible=!0;this.spotHit=!1;for(let r of this.spots||[])r.susp=0,r.cool=0,r.pool.visible=r.cone.visible=!0;for(let r of this.doors||[]){let a=r.y*this.L.W+r.x;r.open=!1,r.t=0,this.L.walk[a]=0,this.L.opaque[a]=1,r.m.group.position.y=0,r.m.group.rotation.y=0,r.m.group.visible=!0,r.m.led&&r.m.led.material.color.setHex(16722490),this.picking=null,this.cleanPick=!1,this.app.onPick&&this.app.onPick(null)}for(let r of this.keyMeshes||[])r.m.visible=!0;this.app.onKey&&this.app.onKey(!1),this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.slowT=0,this.fovPunch=0,this.kickP=0,this.kickR=0,this.daily=this.app.mode==="daily"?this.app.daily:null,this.tut=this.app.mode==="tutorial",this.D=this.daily||this.tut?Ds.normal:Ds[this.app.diff]||Ds.normal,this.lookTotal=0,this.lootTotal=this.baseLootTotal,this.smokesLeft=this.D.smoke,this.clouds=[],this.smokeHid=!1;for(let r of this.smokeFx||[])r.pts.visible=!1;this.coinsLeft=this.D.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.clerkStopped=!1,this.hidesUsed=0,this.smokesUsed=0,this.coinsThrown=0,this.radioFaked=0,this.trail=[],this.trailT=0,this.marks=[],this.heavy=[],this.stashRuns=0,this.stashedEarly=!1,this.app.onWeight&&this.app.onWeight(1),this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let r of this.L.loot)this.totals[r.type]++;this.contracts=this.tut?[]:bf(3,this.daily?un(this.daily.seed):Math.random,this),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let r of this.coinMeshes||[])r.visible=!1;let i=this.player;Object.assign(i,{x:t.start.x+.5,z:t.start.y+.5,okX:void 0,okZ:void 0,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,crouch:!1,crouchK:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),i.c.root.visible=!0,i.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let r of this.guards||[])r.knowsHide=!1;Di(i.c,1);for(let r of this.reserve||[]){let a=this.guards.indexOf(r);a>=0&&this.guards.splice(a,1),r.c.root.visible=!1,r.cone.visible=!1,r.shadow.visible=!1,r.stars.visible=!1,r.badge.className="badge"}this.shiftN=0,this.shiftWarn=0,this.chatT=6+Math.random()*6,this.chatQ=null,this.chatI=Math.floor(Math.random()*20),this.boltT=8+Math.random()*8,this.thunderIn=0,this.thunderT=0,this.heli&&(this.heli.group.visible=!1);for(let r of this.vents||[])r.flap.rotation.x=0;for(let r of this.tvs||[])r.on=r.used=!1,r.scr.visible=r.glow.visible=!1;this.tvLures=0,this.disguiseT=0,this.disguises=0,this.uniformProg=0;for(let r of this.guards)r.stripped=!1;this.ventsUsed=0,this.player.venting=null;for(let r of this.guards)this.resetGuard(r);this.picks=0,this.pocketProg=0,this.koHold=0,this.koTarget=null;let s=!!(this.keyMeshes&&this.keyMeshes.length);for(let r of this.guards)r.wallet=r.kind==="guard"?150+(Math.random()*6|0)*50:0,r.spareKey=!1,s&&r.kind==="guard"&&r.def.path&&!r.def.roam&&(r.spareKey=!0,s=!1),r.walletMesh&&(r.walletMesh.visible=r.wallet>0,r.keyMesh.visible=r.spareKey),this.lootTotal+=r.wallet;this.crumbs=[],this.crumbT=0,this.barkedAt=!1;for(let r of this.dogs){let a=r.def.path[0];Object.assign(r,{x:a[0]+.5,z:a[1]+.5,wp:1%r.def.path.length,state:"roam",t:0,barkT:0,sniffT:0,ci:0,lostT:0,nav:[],navGoal:-1,navT:0,face:0,moving:0,tx:0,tz:0,waitT:0,smellT:0,mul:1})}for(let r of this.cams)Object.assign(r,{susp:0,cool:0,face:r.def.face,off:0}),r.cone.visible=!0,r.mesh.rotation.x=0;this.camsHit=0,this.loot=t.loot.map((r,a)=>({type:r.type,x:r.x+.5,y:.45,z:r.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[r.type],ph:a*1.7,ms:0,s:1,rot:a})),this.safe.door.rotation.y=0,this.van.group.visible=!!t.van,t.van&&this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.casesSmashed=0,this.slotLures=0;for(let r of this.slots||[])r.used=!1,r.prog=0,r.t=0,r.top.visible=!1;for(let r of this.cases||[])r.smashed=!1,r.prog=0,r.glass.visible=!0,r.gems.visible=!0;this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let r of this.noiseRings)r.m.visible=!1,r.t=1;if(this.app.particles.clear(),this.app.floaters.clear(),this.daily&&this.daily.mutator.apply(this),this.tut)for(let r of this.guards)r.range*=.85,r.speed*=.9}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1,sawCase:!1,...t.kind==="clerk"?{range:4.6*this.D.range,fov:1.5}:{}}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let i=e.owner.bed;t.x=i[0]+i[2]/2,t.z=i[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let i=e.path[t.wp];t.face=Math.atan2(i[0]+.5-t.x,i[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let i=this.L;return t>=0&&e>=0&&t<i.W&&e<i.H&&i.walk[e*i.W+t]===1}opaqueAt(t,e){let i=this.L;return t<0||e<0||t>=i.W||e>=i.H||i.opaque[e*i.W+t]===1}rayLen(t,e,i,s){let r=Math.sin(i),a=Math.cos(i);for(let o=.1;o<s;o+=.1)if(this.opaqueAt(Math.floor(t+r*o),Math.floor(e+a*o)))return o-.05;return s}los(t,e,i,s){let r=i-t,a=s-e,o=Math.ceil(Math.hypot(r,a)/.12);for(let l=1;l<o;l++){let c=l/o;if(this.opaqueAt(Math.floor(t+r*c),Math.floor(e+a*c)))return!1}return!0}clearLine(t,e,i,s){let r=i-t,a=s-e,o=Math.hypot(r,a);if(o<.01)return!0;let l=-a/o*.28,c=r/o*.28,h=Math.ceil(o/.25);for(let u=1;u<=h;u++){let f=u/h,d=t+r*f,g=e+a*f;if(!this.walkable(Math.floor(d),Math.floor(g))||!this.walkable(Math.floor(d+l),Math.floor(g+c))||!this.walkable(Math.floor(d-l),Math.floor(g-c)))return!1}return!0}collide(t,e){let i=Math.floor(t.x),s=Math.floor(t.z);for(let r=s-1;r<=s+1;r++)for(let a=i-1;a<=i+1;a++){if(this.walkable(a,r))continue;let o=Fe(t.x,a,a+1),l=Fe(t.z,r,r+1),c=t.x-o,h=t.z-l,u=c*c+h*h;if(!(u>=e*e))if(u>1e-9){let f=Math.sqrt(u);t.x+=c/f*(e-f),t.z+=h/f*(e-f)}else{let f=t.x-a,d=a+1-t.x,g=t.z-r,y=r+1-t.z,p=Math.min(f,d,g,y);p===f?t.x=a-e:p===d?t.x=a+1+e:p===g?t.z=r-e:t.z=r+1+e}}}moveEnt(t,e,i,s){let r=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(i))/.15));for(let a=0;a<r;a++)t.x+=e/r,t.z+=i/r,this.collide(t,s)}path(t,e,i,s){let{W:r,H:a,walk:o}=this.L,l=r*a;this.prev||(this.prev=new Int32Array(l),this.q=new Int32Array(l));let c=this.prev,h=this.q;if(i<0||s<0||i>=r||s>=a)return[];c.fill(-1);let u=e*r+t,f=s*r+i,d=0,g=0;for(h[g++]=u,c[u]=u;d<g;){let p=h[d++];if(p===f)break;let m=p%r,v=p/r|0;for(let b=-1;b<=1;b++)for(let _=-1;_<=1;_++){if(!_&&!b)continue;let w=m+_,T=v+b;if(w<0||T<0||w>=r||T>=a)continue;let x=T*r+w;!o[x]||c[x]!==-1||_&&b&&(!o[v*r+w]||!o[T*r+m])||(c[x]=p,h[g++]=x)}}if(c[f]===-1)return[];let y=[];for(let p=f;p!==u;p=c[p])y.push(p);return y.reverse()}navTo(t,e,i,s,r){let a=this.L.W,o=Math.floor(i)*a+Math.floor(e);(o!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(i)),t.navGoal=o,t.navT=.5),t.navT-=r;let l=t.nav,c=e,h=i;if(l.length>1){let p=Math.min(l.length-1,6),m=0;for(let v=p;v>=1;v--){let b=l[v]%a+.5,_=(l[v]/a|0)+.5;if(this.clearLine(t.x,t.z,v===l.length-1?e:b,v===l.length-1?i:_)){m=v;break}}m===l.length-1?(c=e,h=i):(c=l[m]%a+.5,h=(l[m]/a|0)+.5),m>0?l.splice(0,m):Math.hypot(c-t.x,h-t.z)<.3&&l.shift()}let u=c-t.x,f=h-t.z,d=Math.hypot(u,f);if(Math.hypot(e-t.x,i-t.z)<.12)return!0;let y=Math.min(d,s*r);return d>.001&&(this.moveEnt(t,u/d*y,f/d*y,.28),t.face=Wo(t.face,Math.atan2(u,f),8*r)),t.moving=1,!1}update(t,e){let i=t;this.trainMats&&this.updateTrain(t,e),this.hitstop>0?(this.hitstop-=t,i*=.08):this.slowT>0&&(this.slowT-=t,i*=this.slowK+(1-this.slowK)*Fe(1-this.slowT/.15,0,1)),this.fovPunch=Se(this.fovPunch||0,0,6,t),this.kickP=Se(this.kickP||0,0,9,t),this.kickR=Se(this.kickR||0,0,7,t),this.t+=i;let s=!e&&this.state==="play";if(s){this.time+=i,this.updatePlayer(i);let o=this.app.mode==="tutorial"||this.daily||this.D.label==="Easy"||this.def.noShift?[]:this.D.mult>=1.5?[45,90]:[60,120];if(this.shiftWarn===this.shiftN&&this.shiftN<o.length&&this.time>=o[this.shiftN]-10&&(this.shiftWarn++,this.app.audio.play("radio"),this.app.announce('\u{1F4FB} "Relief guard arriving in 10 seconds" \u2014 grab what you can!')),this.def.rain&&this.updateStorm(t),this.disguiseT>0&&(this.disguiseT-=i,this.app.onDisguise(Math.max(0,this.disguiseT)),this.disguiseT<=0&&(this.app.audio.play("lost"),this.app.floaters.spawn("Disguise worn off",this.player.x,1.6,this.player.z,"warn",1.2))),this.tvs.length&&this.updateTVs(i),this.shiftN<o.length&&this.time>=o[this.shiftN]&&this.reserve[this.shiftN]&&this.callReinforcement(this.reserve[this.shiftN++]),this.trailT-=i,this.trailT<=0){this.trailT=.35;let l=this.alarm||this.guards.some(c=>c.state==="alert"||c.state==="flee"||c.susp>.35);this.trail.push([this.player.x,this.player.z,l?1:0]),this.trail.length>900&&this.trail.splice(0,2)}}else e&&(this.player.c.root.visible=!1);let r=0;for(let o of this.guards)o.moving=0,this.updateGuard(o,i,s),(o.state==="alert"||o.state==="flee")&&r++,this.syncGuard(o,i);s&&this.updateChatter(i);for(let o of this.cams)this.updateCam(o,i,s);for(let o of this.dogs)this.updateDog(o,i,s);let a=0;for(let o of this.guards)(o.susp>.3||o.state==="investigate"||o.state==="search")&&a++;this.tension=this.alarm?3:r>0?2:a>0?1:0,this.updateAlarm(i,s),this.updateLasers(i,s),this.updateSpots(i,s),this.updateSlots(i),this.updateLoot(i,s),this.updateProps(i),e||this.syncPlayer(i),this.updateNoiseRings(i),this.updateCoins(i,s),this.updateSmoke(i),this.state==="escape"&&this.updateEscape(i),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,i=this.app,s=i.input;s.move(Si),s.consumeLook(ts);let r=i.sens||.0024;if(e.lookX=ts.x,e.lookY=ts.y,e.yaw-=ts.x*r,this.lookTotal+=Math.abs(ts.x*r)+Math.abs(ts.y*r),e.pitch=Fe(e.pitch-ts.y*r*(i.invertY?-1:1),-1.25,1.2),e.face=e.yaw+Math.PI,e.hiding){this.updateHiding(t,s);return}if(e.venting){this.updateVent(t,s);return}if(this.picking){this.updatePicking(t,s);return}let a=Math.sin(e.face),o=Math.cos(e.face),l=-o,c=a,h=l*Si.x-a*Si.y,u=c*Si.x-o*Si.y;e.strafe=Si.x;let f=this.lootGot/this.lootTotal;s.consumeCrouch()&&(e.crouch=!e.crouch,i.onCrouch(e.crouch),i.hintDone("sneak")),e.dashT>0&&e.crouch&&(e.crouch=!1,i.onCrouch(!1)),e.crouchK=Se(e.crouchK||0,e.crouch?1:0,10,t);let d=Nc*(1-.1*f)*(e.crouch?.5:1)*this.weightMul();if(e.vx=Se(e.vx,h*d,14,t),e.vz=Se(e.vz,u*d,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let B=h,W=u;Math.abs(B)+Math.abs(W)<.01&&(B=a,W=o);let I=Math.hypot(B,W);B/=I,W/=I,e.dashT=Sf,e.dashCd=Sx,e.ddx=B,e.ddz=W,this.dashes++,this.lastDash=this.time,i.audio.play("dash"),i.shake.add(.18),Di(e.c,.7),i.particles.burst(e.x,.1,e.z,{count:8,colors:[16777215,14673646],speed:2,up:1.5,size:.16,gravity:2,life:.5}),this.makeNoise(e.x,e.z,4.2,null),i.hintDone("dash")}let g=e.vx,y=e.vz;if(e.dashT>0){e.dashT-=t;let B=Math.max(0,e.dashT/Sf);g+=e.ddx*Mf*B,y+=e.ddz*Mf*B,Math.random()<.6&&i.particles.burst(e.x,.15,e.z,{count:1,colors:[16777215],speed:.5,up:.5,size:.12,gravity:0,life:.35})}this.moveEnt(e,g*t,y*t,Dc),this.crumbT-=t,this.crumbT<=0&&Math.hypot(e.vx,e.vz)>.5&&(this.crumbT=.4,this.crumbs.push({x:e.x,z:e.z,t:this.time}),this.crumbs.length>60&&this.crumbs.shift());for(let B of this.dogs){let W=e.x-B.x,I=e.z-B.z,et=Math.hypot(W,I);et<.5&&et>.001&&this.moveEnt(e,W/et*(.5-et),I/et*(.5-et),Dc)}for(let B of this.guards){if(B.state==="sleep")continue;let W=e.x-B.x,I=e.z-B.z,et=Math.hypot(W,I);et<.55&&et>.001&&this.moveEnt(e,W/et*(.55-et),I/et*(.55-et),Dc)}this.walkable(Math.floor(e.x),Math.floor(e.z))?(e.okX=e.x,e.okZ=e.z):e.okX!==void 0&&(e.x=e.okX,e.z=e.okZ,e.vx=e.vz=0);let p=Math.hypot(g,y);e.moving=Math.min(1,p/Nc);let m=Math.floor(e.bob/Math.PI);if(e.bob+=Math.min(p,Nc)*t*2.6,Math.floor(e.bob/Math.PI)!==m){let B=this.L,W=Fe(Math.floor(e.x),0,B.W-1),I=Fe(Math.floor(e.z),0,B.H-1);i.audio.stepSound(B.floor[I*B.W+W],e.dashT>0?1.6:e.crouch?.35:1)}p>.5&&i.hintDone("move");let v=this.L.safe.x+.5,b=this.L.safe.y+.5,_=!this.safeOpen&&Math.hypot(e.x-v,e.z-b)<1.45+(this.safeScale-1)*.8&&Math.abs(Ee(e.face,Math.atan2(v-e.x,b-e.z)))<1.1,w=null,T=9;for(let B of this.guards){if(!this.canKO(B))continue;let W=Math.hypot(e.x-B.x,e.z-B.z);if(!(e.dashT<=0&&Math.abs(Ee(e.face,Math.atan2(B.x-e.x,B.z-e.z)))>.9)&&(W<T&&(T=W,w=B),e.dashT>0&&W<.95)){this.knockout(B),w=null;break}}let x=s.consumeAct();e.crack=!1;for(let B of this.keyMeshes)B.m.visible&&(B.m.rotation.y=this.t*2,B.m.position.y=.8+Math.sin(this.t*3)*.06,Math.hypot(e.x-(B.x+.5),e.z-(B.y+.5))<.85&&(B.m.visible=!1,this.hasKey=!0,i.audio.play("gold"),i.onKey(!0),i.hint("door"),i.floaters.spawn("KEYCARD!",B.x+.5,1.3,B.y+.5,"big",1.2),i.particles.burst(B.x+.5,.8,B.y+.5,{count:12,colors:[3111656,16777215,15911244],speed:2,up:2,size:.04,life:.6})));let M=null;for(let B of this.doors){if(B.open)continue;let W=B.x+.5,I=B.y+.5;Math.hypot(e.x-W,e.z-I)<1.5&&Math.abs(Ee(e.face,Math.atan2(W-e.x,I-e.z)))<1&&(M=B)}let k=null;for(let B of this.slots){if(B.used)continue;let W=B.cz+B.face*.9;Math.abs(e.z-W)<.9&&Math.abs(e.x-B.cx)<B.f.w/2+.3&&(k=B)}for(let B of this.slots)B!==k&&(B.prog=Math.max(0,B.prog-t*2));k&&(i.hint("slot"),s.act&&(k.prog+=t/.5,e.crack=!0,k.prog>=1&&this.pullSlot(k)));let P=null;for(let B of this.cases){if(B.smashed)continue;Math.hypot(e.x-B.cx,e.z-B.cz)<1.3+Math.max(B.f.w,B.f.d)*.35&&Math.abs(Ee(e.face,Math.atan2(B.cx-e.x,B.cz-e.z)))<1&&(P=B)}for(let B of this.cases)B!==P&&(B.prog=Math.max(0,B.prog-t*2));P&&(i.hint("case"),s.act&&(P.prog+=t/.55,e.crack=!0,P.prog>=1&&this.smashCase(P)));let L=!1;if(this.breaker&&!this.powerOff){let B=this.breaker.at,W=this.breaker.group.position;L=Math.hypot(e.x-B.x,e.z-B.z)<1&&Math.abs(Ee(e.face,Math.atan2(W.x-e.x,W.z-e.z)))<1,L&&s.act?(this.breakProg+=t/1.2,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.15,i.audio.play("tick",this.breakProg*.5),i.particles.burst(W.x,W.y+.3,W.z,{count:2,colors:[16773544,8378623],speed:2,up:1.5,size:.03,life:.3})),this.breakProg>=1&&this.cutPower()):this.breakProg=Math.max(0,this.breakProg-t)}let O=!1,C=this.nearHide();if(this.alarm&&this.panel){let B=this.panel.at,W=this.panel.group.position;O=Math.hypot(e.x-B.x,e.z-B.z)<1&&Math.abs(Ee(e.face,Math.atan2(W.x-e.x,W.z-e.z)))<1,O&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,i.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}_?(i.hint("safe"),s.act?(this.safeProg+=t/(this.def.crackTime||1.4),this.def.crackNoise&&(this.crackNoiseT-=t,this.crackNoiseT<=0&&(this.crackNoiseT=1.1,this.makeNoise(v,b,this.def.crackNoise,null),i.hint("drill"))),this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,i.audio.play("tick",this.safeProg),i.particles.burst(v,.7,b+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t);let E=w&&(w.wallet>0||w.spareKey);if(w&&!_?(i.hint(E?"pocket":"ko"),s.act?(this.koTarget!==w&&(this.koTarget=w,this.koHold=0,this.pocketProg=0),this.koHold+=t,E&&this.koHold>.22&&(this.pocketProg+=t/.9,e.crack=!0,w.susp=Math.min(.9,w.susp+t*.12),this.pocketProg>=1&&(this.pickpocket(w),this.koHold=99))):this.koHold>0&&(this.koHold<.22&&this.koTarget===w&&this.knockout(w),this.koHold=0,this.pocketProg=0)):(this.koHold=0,this.pocketProg=0,this.koTarget=null),k&&!_&&!w){i.setPrompt("slot",k.prog),this.updateObjective();return}if(P&&!_&&!w){i.setPrompt("case",P.prog),this.updateObjective();return}let z=null;for(let B of this.guards){if(B.state!=="ko"||B.radioCall!==1){B.answerProg=0;continue}Math.hypot(e.x-B.x,e.z-B.z)<1.6&&(z=B)}if(z&&!_){s.act?(z.answerProg+=t/.7,e.crack=!0,z.answerProg>=1&&this.fakeCheckIn(z)):z.answerProg=Math.max(0,z.answerProg-t),i.setPrompt("radio",z.answerProg),this.updateObjective();return}let U=null;if(!_&&!w&&this.disguiseT<=0)for(let B of this.guards)B.kind==="guard"&&B.state==="ko"&&!B.stripped&&B.radioCall!==1&&Math.hypot(e.x-B.x,e.z-B.z)<1.5&&(U=B);if(U){s.act?(this.uniformProg+=t/1.1,e.crack=!0,this.uniformProg>=1&&(this.uniformProg=0,this.takeUniform(U))):this.uniformProg=Math.max(0,this.uniformProg-t*2),i.hint("uniform"),i.setPrompt("uniform",this.uniformProg),this.updateObjective();return}else this.uniformProg=0;if(M&&!_&&!w&&M.type==="lock"){i.hint("pick"),x?this.startPick(M):i.setPrompt("pick"),this.updateObjective();return}if(M&&!_&&!w){x&&(this.hasKey?this.openDoor(M):this.nopeT<=0&&(this.nopeT=1.5,i.audio.play("nope"),i.floaters.spawn("Need the keycard!",M.x+.5,1.3,M.y+.5,"warn",1.2),i.hint("key"))),i.setPrompt(this.hasKey?"door":"locked"),this.updateObjective();return}if(L&&!_&&!w){i.setPrompt("breaker",this.breakProg),this.updateObjective();return}let D=!O&&!_&&!w?this.nearTV():null;if(D)if(x){this.tvOn(D),this.updateObjective();return}else{i.setPrompt("tv"),this.updateObjective();return}let q=!O&&!_&&!w&&!this.heavy.length?this.nearVent():null;if(q){if(i.hint("vent"),x){this.enterVent(q);return}i.setPrompt("vent"),this.updateObjective();return}let G=C&&!O&&!_&&!w;if(G&&(i.hint("hide"),x)){this.enterHide(C);return}i.setPrompt(O?"panel":_?"safe":w?E?"pocket":"ko":G?"hide":"",O?this.disarmProg:w&&E?this.pocketProg:this.safeProg);let Z=this.L.exit,j=Math.hypot(e.x-Z.x,e.z-Z.z);j<2.4&&this.heavy.length&&this.stashHeavy(),this.nopeT-=t,j<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,i.audio.play("nope"),i.floaters.spawn("Crack the safe first!",e.x+a*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),s.consumeSmoke()&&this.dropSmoke(),this.checkContracts(!1),this.updateObjective(),this.time>3.5&&i.hint("dash");for(let B of this.guards){let W=Math.hypot(e.x-B.x,e.z-B.z);B.state==="sleep"&&W<6&&i.hint("owner");for(let I of this.dogs)Math.hypot(e.x-I.x,e.z-I.z)<7&&i.hint("dog");if(this.powerOff)B.state!=="sleep"&&W<6.5&&(i.hint("cone"),this.time>8&&i.hint("coin"),this.time>14&&i.hint("sneak"));else for(let I of this.lasers){let et=I.alongX?e.x:e.z,ot=I.alongX?e.z:e.x;et>I.lo-1&&et<I.hi+1&&Math.abs(ot-I.line)<3.5&&i.hint("laser")}}for(let B of this.loot)if(Math.hypot(e.x-B.x,e.z-B.z)<4){i.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,i=e.x-t.x,s=e.z-t.z;return Math.hypot(i,s)>1.35||Math.abs(Ee(t.face,Math.atan2(i,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}juice(t,e,i,s,r){t>0&&(!this.slowT||this.slowT<t)&&(this.slowT=t,this.slowK=e);let a=this.app.shake.scale??1;this.fovPunch=(this.fovPunch||0)+i*a,this.kickP=(this.kickP||0)+s*a,this.kickR=(this.kickR||0)+r*a}mark(t,e,i){this.marks.push({t,x:e,z:i})}knockout(t){this.mark("ko",t.x,t.z);let e=this.app,i=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.kind==="clerk"&&t.state==="flee"&&(this.clerkStopped=!0,this.app.floaters.spawn("ALARM STOPPED",t.x,2.2,t.z,"big",1.2)),t.state="ko",t.koT=9,t.susp=0,t.fallT=0,t.radioCall=0,t.answerProg=0,t.callT=0,t.c.flash=.2,Di(t.c,.6),this.kos++,this.hitstop=.08,this.juice(.38,.3,-9,-.05,(Math.random()<.5?-1:1)*.07),e.shake.add(.35),i.punchT=.28,Di(i.c,1.25),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,i=1.25;for(let s of this.hides){let r=Math.hypot(t.x-s.cx,t.z-s.cz);r<i&&Math.abs(Ee(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(i=r,e=s)}return e}enterHide(t){this.hidesUsed++;let e=this.player,i=this.app,s=!1,r=0;for(let a of this.guards)(a.state==="alert"||a.state==="flee")&&r++,a.state!=="ko"&&a.state!=="sleep"&&a.state!=="getup"&&this.canSee(a)&&(s=!0,a.knowsHide=!0,a.state!=="alert"&&this.alert(a),i.floaters.spawn("I saw that!",a.x,2,a.z,"alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,r>0&&!s){this.hidFromAlert=!0;for(let a of this.guards)a.state==="alert"&&(a.lostT=99)}i.audio.play("creak"),i.onHide(!0),i.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let i=e.hiding;e.hiding=null,e.x=i.ex,e.z=i.ez,e.yaw=i.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let i=this.player,s=i.hiding,r=this.app;i.hideT+=t;let a=s.face-Math.PI;i.yaw=a+Fe(Ee(a,i.yaw),-1,1),i.pitch=Fe(i.pitch,-.5,.4),i.moving=0,i.crack=!1,e.consumeDash(),e.consumeThrow();let o=9;for(let l of this.guards)l.state!=="ko"&&l.state!=="sleep"&&(o=Math.min(o,Math.hypot(l.x-s.cx,l.z-s.cz)));i.beatT-=t,o<4.5&&i.beatT<=0&&(i.beatT=.45+o*.12,r.audio.play("beat"),r.shake.add(.04)),e.move(Si),r.setPrompt("leave"),i.hideT>.35&&(e.consumeAct()||Math.hypot(Si.x,Si.y)>.5)&&this.leaveHide(!1)}takeUniform(t){let e=this.app;t.stripped=!0,this.disguises++,this.disguiseT=25,t.koT=Math.max(t.koT,6),e.audio.play("creak"),e.audio.play("pick",6),e.floaters.spawn("Uniform on!",t.x,1.4,t.z,"big",1.2),e.onDisguise(this.disguiseT),e.hintDone("uniform")}nearTV(){let t=this.player;for(let e of this.tvs)if(!(e.on||e.used)&&Math.hypot(t.x-e.cx,t.z-e.cz)<1.9&&Math.abs(Ee(t.face,Math.atan2(e.cx-t.x,e.cz-t.z)))<.7)return e;return null}tvOn(t){let e=this.app;t.on=!0,t.t=0,t.scr.visible=t.glow.visible=!0,e.audio.play("click"),e.audio.play("tvon"),this.makeNoise(t.fx,t.fz,7.5,null,"Who turned the TV on?"),e.setPrompt("")}tvOff(t,e){t.on=!1,t.used=!0,t.scr.visible=t.glow.visible=!1,this.app.audio.play("click"),e&&(this.tvLures++,this.app.floaters.spawn("Stupid TV...",e.x,2,e.z,"q",1.2))}updateTVs(t){let e=this.player;for(let i of this.tvs){if(!i.on)continue;if(i.t+=t,i.flick-=t,i.babble-=t,i.flick<=0){i.flick=.12+Math.random()*.25;let r=[10473727,16765562,9109440,16751312,16777215][Math.random()*5|0];i.scr.material.color.setHex(r),i.glow.material.color.setHex(r),i.glow.material.opacity=.35+Math.random()*.3}let s=Math.hypot(e.x-i.cx,e.z-i.cz);i.babble<=0&&(i.babble=.2+Math.random()*.12,s<14&&this.app.audio.play("tv",Math.max(0,1-s/14))),i.t>18&&this.tvOff(i,null)}}nearVent(){let t=this.player;for(let e of this.vents)if(Math.hypot(t.x-e.cx,t.z-e.cz)<.85&&Math.abs(Ee(t.face,Math.atan2(e.gx-t.x,e.gz-t.z)))<1)return e;return null}enterVent(t){let e=this.player,i=this.app;for(let s of this.guards)s.state!=="ko"&&s.state!=="sleep"&&s.state!=="getup"&&this.canSee(s)&&(s.state!=="alert"&&this.alert(s),i.floaters.spawn("Hey! The vent!",s.x,2,s.z,"alert",1.2));this.ventsUsed++,e.venting={t:0,from:t,to:t.other,dur:1.7,moved:!1},e.vx=e.vz=0,e.crouch=!0,i.onCrouch(!0),i.audio.play("vent"),i.setPrompt(""),i.hintDone("vent")}updateVent(t,e){let i=this.player,s=i.venting,r=this.app;s.t+=t,i.inv=.5,i.moving=0,i.crack=!1,i.crouchK=1,e.consumeDash(),e.consumeThrow(),e.consumeAct(),e.consumeSmoke();let a=s.t/s.dur;s.from.flap.rotation.x=Math.min(1.3,s.t*6)*(a<.5?1:Math.max(0,1-(a-.5)*6)),s.to.flap.rotation.x=a>.55?Math.min(1.3,(a-.55)*8)*Math.max(0,1-Math.max(0,a-.85)*7):0,!s.moved&&a>=.5&&(s.moved=!0,i.x=s.to.cx,i.z=s.to.cz,i.yaw=s.to.out-Math.PI,i.pitch=-.1,this.trail&&this.trail.push([i.x,i.z,0])),r.ventFx(a<.22?a/.22:a>.78?(1-a)/.22:1),a>=1&&(i.venting=null,i.inv=.4,s.from.flap.rotation.x=0,s.to.flap.rotation.x=0,r.ventFx(0),r.audio.play("clank"),r.shake.add(.12),this.makeNoise(i.x,i.z,2.4,null),r.particles.burst(i.x,.3,i.z,{count:10,colors:[12103840,9077880],speed:1.2,up:1.2,size:.07,gravity:-.5,life:.8}))}dropSmoke(){let t=this.player,e=this.app;if(this.smokesLeft<=0){e.audio.play("nope");return}if(this.clouds.length>=this.smokeFx.length)return;this.smokesLeft--,this.smokesUsed++;let i=t.x+Math.sin(t.face)*.7,s=t.z+Math.cos(t.face)*.7;this.walkable(Math.floor(i),Math.floor(s))||(i=t.x,s=t.z);let r=this.smokeFx.find(a=>!a.pts.visible);r.pts.visible=!0,this.clouds.push({x:i,z:s,t:0,dur:7.5,r:0,fx:r}),e.audio.play("smoke"),e.shake.add(.12),e.particles.burst(i,.2,s,{count:14,colors:[16777215,14275810,12104390],speed:3,up:2,size:.12,life:.7,gravity:1}),e.onSmoke(this.smokesLeft),e.hintDone("smoke")}smokeBlocks(t,e,i,s){for(let r of this.clouds){let a=r.r*.9;if(a<.3)continue;if(Math.hypot(i-r.x,s-r.z)<a||Math.hypot(t-r.x,e-r.z)<a)return!0;let o=i-t,l=s-e,c=o*o+l*l||1,h=Fe(((r.x-t)*o+(r.z-e)*l)/c,0,1);if(Math.hypot(t+o*h-r.x,e+l*h-r.z)<a)return!0}return!1}lowCover(t,e,i,s){let r=this.L,a=i-t,o=s-e,l=Math.hypot(a,o),c=Math.ceil(l/.2);for(let h=1;h<c;h++){let u=h/c;if(u*l>l-.25&&u*l>0)continue;let f=Math.floor(t+a*u),d=Math.floor(e+o*u);if(Math.hypot(t+a*u-i,e+o*u-s)>1.6)continue;let g=d*r.W+f;if(g>=0&&g<r.W*r.H&&!r.walk[g]&&!r.opaque[g]&&!r.outdoor[g]&&r.ch[g]!=="D"&&r.ch[g]!=="L")return!0}return!1}inSmoke(t,e){return this.clouds.some(i=>Math.hypot(t-i.x,e-i.z)<i.r*.85)}updateSmoke(t){for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];i.t+=t;let s=Math.min(1,i.t/.6),r=Fe((i.dur-i.t)/1.6,0,1);i.r=2.1*(1-Math.pow(1-s,3))*(.75+.25*r);let a=i.fx,o=a.geo.attributes.position.array;for(let l=0;l<a.N;l++){let c=l*4,h=Math.sin(i.t*.8+a.off[c+3])*.15;o[l*3]=i.x+a.off[c]*i.r+h,o[l*3+1]=.2+a.off[c+1]*1.5*s+i.t*.04,o[l*3+2]=i.z+a.off[c+2]*i.r+h}a.geo.attributes.position.needsUpdate=!0,a.pts.material.opacity=.55*r*s,a.pts.material.size=1.2+s*.6;for(let l of this.guards)l.coughT>0&&(l.coughT-=t),!(l.state==="ko"||l.state==="sleep"||Math.hypot(l.x-i.x,l.z-i.z)>i.r*.8)&&(l.coughT>0||(l.coughT=2.2,this.app.floaters.spawn("*cough*",l.x,1.9,l.z,"q",.9),l.state==="alert"&&(l.lostT=Math.max(l.lostT,1.5))));i.t>=i.dur&&(a.pts.visible=!1,this.clouds.splice(e,1))}this.app.onInSmoke(this.state==="play"&&this.inSmoke(this.player.x,this.player.z))}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let i=this.coinMeshes.find(c=>!c.visible);if(!i)return;this.coinsLeft--,this.coinsThrown++;let s=Math.sin(t.face),r=Math.cos(t.face),a=Math.cos(t.pitch),o=Math.sin(t.pitch),l=7.5;this.coins.push({mesh:i,x:t.x+s*.35,y:.95,z:t.z+r*.35,vx:s*a*l+t.vx*.5,vy:o*l+2.6,vz:r*a*l+t.vz*.5,st:"fly",t:0,bounces:0}),i.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let i=this.player,s=this.app;for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];if(a.t+=t,a.st==="fly"){a.vy-=16*t;let o=a.x,l=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let c=Math.floor(a.x),h=Math.floor(a.z);!this.walkable(c,h)&&(this.opaqueAt(c,h)||a.y<.9)&&(Math.floor(o)!==c?a.vx*=-.4:a.vx*=.6,Math.floor(l)!==h?a.vz*=-.4:a.vz*=.6,a.x=o,a.z=l,s.audio.play("clink",.4)),a.y<.03&&(a.y=.03,a.bounces===0?(this.makeNoise(a.x,a.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(a.x,.06,a.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),a.bounces++,a.vy=Math.abs(a.vy)*.35,a.vx*=.5,a.vz*=.5,(a.bounces>2||Math.abs(a.vy)<.5)&&(a.st="rest",a.vy=0)),a.mesh.rotation.set(a.t*18,a.t*7,0);for(let u of this.cams){if(u.off>0)continue;let f=u.mesh.position;Math.hypot(a.x-f.x,a.y-f.y,a.z-f.z)<.5&&(u.off=12,u.susp=0,this.camsHit++,a.vx*=-.3,a.vz*=-.3,a.vy=1,s.audio.play("zap"),s.shake.add(.1),s.particles.burst(f.x,f.y,f.z,{count:16,colors:[16773544,8378623,16777215],speed:2.5,up:2,size:.04,life:.6}),s.floaters.spawn("CAMERA DOWN",f.x,f.y+.5,f.z,"big",1.2),s.hintDone("camhit"))}}else if(a.mesh.rotation.set(0,a.t*2,0),a.mesh.position.y=.03,e&&a.t>.6&&Math.hypot(i.x-a.x,i.z-a.z)<.6){this.coinsLeft++,a.mesh.visible=!1,this.coins.splice(r,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}a.mesh.position.set(a.x,a.y,a.z)}}makeNoise(t,e,i,s,r){this.thunderT>0&&s==null&&!r&&(i*=.3);let a=this.noiseRings.find(o=>o.t>=1);a&&(a.t=0,a.r=i,a.x=t,a.z=e,a.m.visible=!0);for(let o of this.guards)if(!(o===s||o.state==="ko"||o.state==="getup"||o.state==="alert"||o.state==="waking")&&!(Math.hypot(o.x-t,o.z-e)>i)){if(o.state==="sleep"){this.wake(o,t,e);continue}o.state!=="investigate"&&o.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(typeof r=="string"?r:r?"Huh? A coin?":"?",o.x,1.9,o.z,"q",.9),r===!0&&this.lures++,r==="Jackpot!?"&&this.slotLures++),o.state="investigate",o.tx=t,o.tz=e,o.hurry=o.speed*1.4,o.susp=Math.max(o.susp,.3)}if(r)for(let o of this.dogs)(o.state==="roam"||o.state==="sniff")&&Math.hypot(o.x-t,o.z-e)<i+2&&(o.state="coin",o.tx=t,o.tz=e,o.waitT=5,o.navGoal=-1,this.app.floaters.spawn("!",o.x,1,o.z,"q",.7))}updateDog(t,e,i){let s=this.player,r=this.app;t.t+=e,t.moving=0;let a=Math.hypot(s.x-t.x,s.z-t.z),o=s.hiding;i&&t.state!=="bark"&&t.state!=="barkHide"&&(!o&&s.inv<=0&&a<3&&this.los(t.x,t.z,s.x,s.z)&&!this.smokeBlocks(t.x,t.z,s.x,s.z)?(t.state="bark",t.barkT=.25,t.lostT=0,r.floaters.spawn("!",t.x,1.1,t.z,"alert",.8)):o&&Math.hypot(o.ex-t.x,o.ez-t.z)<1.4&&(t.state="barkHide",t.barkT=.3,t.hide=o));let l=t.def.path;switch(t.state){case"roam":{if(t.waitT>0){t.waitT-=e,t.face+=Math.sin(t.t*3)*e;break}let h=l[t.wp];if(this.navTo(t,h[0]+.5,h[1]+.5,t.def.speed*t.mul,e)&&(t.wp=(t.wp+1)%l.length,t.waitT=1.2),t.smellT-=e,i&&t.smellT<=0){t.smellT=.5;for(let u=this.crumbs.length-1;u>=0;u--){let f=this.crumbs[u];if(this.time-f.t>14)break;if(Math.hypot(f.x-t.x,f.z-t.z)<2.2){t.state="sniff",t.ci=u,t.sniffT=0,r.audio.play("sniff");break}}}break}case"sniff":{t.sniffT+=e;let h=this.crumbs[t.ci];if(!h||t.sniffT>16){t.state="roam",t.navGoal=-1;break}(this.navTo(t,h.x,h.z,2.5*t.mul,e)||Math.hypot(h.x-t.x,h.z-t.z)<.45)&&(t.ci<this.crumbs.length-1?t.ci++:(t.state="roam",t.waitT=2,t.navGoal=-1)),Math.random()<e*1.5&&r.audio.play("sniff");break}case"coin":(this.navTo(t,t.tx,t.tz,3.2*t.mul,e)||Math.hypot(t.tx-t.x,t.tz-t.z)<.6)&&(t.waitT-=e,t.face+=Math.sin(t.t*6)*e*3,Math.random()<e*2&&r.audio.play("sniff"),t.waitT<=0&&(t.state="roam",t.navGoal=-1));break;case"bark":{let h=!o&&a<6&&this.los(t.x,t.z,s.x,s.z);h?t.lostT=0:t.lostT+=e,a>1.3&&!o&&this.navTo(t,s.x,s.z,3.3*t.mul,e),t.face=wf(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),(t.lostT>2.5||o)&&(t.state="sniff",t.ci=Math.max(0,this.crumbs.length-6),t.sniffT=0),i&&h&&(this.lastBark=this.time),i&&h&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0);break}case"barkHide":{let h=t.hide;if(!s.hiding){t.state="bark",t.lostT=0;break}t.face=wf(t.face,Math.atan2(h.cx-t.x,h.cz-t.z),8*e),this.dogBark(t,e,h.ex,h.ez,10),this.barkedAt||(this.barkedAt=!0);break}}let c=t.m;c.root.position.set(t.x,0,t.z),c.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.scale.set(.8,1,1.1),_f(c,e,t.moving?1:0,this.t,t.state==="bark"||t.state==="barkHide"),Ho(c,this.L,t.x,t.z,e)}dogBark(t,e,i,s,r=7){if(t.barkT-=e,t.barkT>0)return;t.barkT=.85;let a=this.app;a.audio.play("woof"),a.floaters.spawn("WOOF!",t.x,1,t.z,"woof",.7),t.m.sq=1.3,t.m.sqv=0,this.makeNoise(i,s,r,null)}wake(t,e,i){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=i,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,i-t.z),Di(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,i,s){let r=e-t.x,a=i-t.z,o=Math.hypot(r,a);return o>s||o>.6&&Math.abs(Ee(t.face,Math.atan2(r,a)))>t.fov/2?!1:this.los(t.x,t.z,e,i)}noticeThings(t){let e=this.app;for(let i of this.guards)if(!(i===t||i.state!=="ko"||i.koT<1.2||i.claimed)&&this.seesPoint(t,i.x,i.z,t.range)){i.claimed=!0,t.state="investigate",t.tx=i.x,t.tz=i.z,t.hurry=t.speed*1.7,t.reviveT=i,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"warn",1.3);return}if(this.casesSmashed&&t.kind==="guard"&&!t.sawCase){let i=this.cases.find(s=>s.smashed&&this.seesPoint(t,s.cx,s.cz,t.range));if(i){t.sawCase=!0,t.safeRun=!0,t.state="investigate",t.tx=i.cx,t.tz=i.cz+1.2,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The display case!?",t.x,2,t.z,"warn",1.3);return}}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let i=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,i,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=i,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"warn",1.3))}}arrive(t){let e=this.app;for(let s of this.tvs)if(s.on&&Math.hypot(s.fx-t.x,s.fz-t.z)<2.2){t.face=Math.atan2(s.cx-t.x,s.cz-t.z),this.tvOff(s,t);return}if(t.kind==="guard"&&this.hides.length&&!t.reviveT&&!t.safeRun&&Math.random()<(this.player.hiding?.55:.35)){let s=null,r=4.5;for(let a of this.hides){let o=Math.hypot(a.ex-t.x,a.ez-t.z);o<r&&(!a.checkedT||this.t-a.checkedT>15)&&(r=o,s=a)}if(s){s.checkedT=this.t,t.state="checkHide",t.chk=s,t.navGoal=-1,e.floaters.spawn("Hmm... the wardrobe?",t.x,2,t.z,"q",1.2);return}}if(t.reviveT){let s=t.reviveT;t.reviveT=null,s.claimed=!1,s.state==="ko"&&Math.hypot(s.x-t.x,s.z-t.z)<1.8&&(s.koT=.25,this.revives++,t.face=Math.atan2(s.x-t.x,s.z-t.z),e.floaters.spawn("Wake up!",s.x,1.4,s.z,"warn",1.1),e.audio.play("wake"))}let i=this.player.hiding;if(i&&this.state==="play"&&this.dogs.some(s=>s.state==="barkHide")&&Math.hypot(i.ex-t.x,i.ez-t.z)<1.8){e.floaters.spawn("Got you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t);return}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){if(t.kind==="clerk"){if(t.state==="flee"||t.state==="cower")return;t.state="flee",t.susp=1,t.navGoal=-1,this.spotted=!0,this.app.audio.play("scream"),this.app.floaters.spawn("AAAH! A ROBBER!",t.x,2,t.z,"alert",1.2),this.app.shake.add(.12),Di(t.c,1.35),this.app.hint("clerk");return}t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,t.alertAt=this.time,this.disguiseT>0&&(this.disguiseT=0,this.app.onDisguise(0),this.app.floaters.spawn("You're not Dave!",t.x,2.3,t.z,"alert",1.3)),this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"alert",.8),this.smokesLeft>0&&this.app.hint("smoke"),this.app.shake.add(.15),Di(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}updateTrain(t,e){for(let i of this.trainMats)i.map.offset.x+=i.userData.sgn*t*.9;this.sway=Math.sin(this.t*1.3)*.006+Math.sin(this.t*3.1)*.002,!(e||this.state!=="play")&&(this.clackT-=t,this.clackT<=0&&(this.clackT=.95+Math.random()*.15,this.app.audio.play("clack"),this.app.shake.add(.015)))}updateChatter(t){let e=this.app,i=this.player;if(this.chatQ){let r=this.chatQ;r.t-=t,r.t<=0&&(this.chatQ=null,Af.has(r.g.state)&&(e.floaters.spawn(r.text,r.g.x,2,r.g.z,"zz",1.6),e.audio.play("mumble")));return}if(this.chatT-=t,this.chatT>0||this.alarm)return;let s=this.guards.filter(r=>r.kind==="guard"&&Af.has(r.state)&&r.susp<.1&&Math.hypot(r.x-i.x,r.z-i.z)<11);for(let r=0;r<s.length;r++)for(let a=r+1;a<s.length;a++){let o=s[r],l=s[a];if(Math.hypot(o.x-l.x,o.z-l.z)>2.6||!this.los(o.x,o.z,l.x,l.z))continue;let c=Rx.slice();this.def.rain&&c.push(["Nasty storm out there.","Better than standing in it."]),(o.def.reinforce||l.def.reinforce)&&c.push(["You the new guy?","First night. Anything I should know?"]),this.kos>0&&c.push(["Anyone seen Dave? He's not answering.","Probably asleep on the job again."]);let[h,u]=c[this.chatI++%c.length];e.floaters.spawn(h,o.x,2,o.z,"zz",1.6),e.audio.play("mumble"),o.face=Math.atan2(l.x-o.x,l.z-o.z),this.chatQ={g:l,text:u,t:1.5},this.chatT=16+Math.random()*10;return}this.chatT=1.5}updateStorm(t){let e=this.app;this.thunderT=Math.max(0,this.thunderT-t),this.thunderIn>0&&(this.thunderIn-=t,this.thunderIn<=0&&(this.thunderT=2.6,e.audio.play("thunder"),e.shake.add(.12),e.hint("thunder"))),this.boltT-=t,this.boltT<=0&&(this.boltT=12+Math.random()*12,this.thunderIn=.35+Math.random()*.6,e.lightning())}callReinforcement(t){let e=this.app,i=this.entrance;t.def.path=[[i.x,i.y],this.roamCell(t.def.roam,i.x,i.y)],this.resetGuard(t),t.wallet=0,t.spareKey=!1,t.walletMesh.visible=!1,t.keyMesh.visible=!1,t.c.root.visible=!0,this.guards.push(t),e.audio.play("radio"),e.announce("\u{1F4FB} Shift change! A new guard is on duty"),e.floaters.spawn("Reporting for duty!",t.x,2,t.z,"warn",1.4)}roamCell(t,e,i){let s=0;for(let r=0;r<40;r++){let a=t[0]+Math.floor(Math.random()*(t[2]-t[0]+1)),o=t[1]+Math.floor(Math.random()*(t[3]-t[1]+1));if(!(!this.walkable(a,o)||this.L.outdoor[o*this.L.W+a])){if(e!==void 0&&(a!==e||o!==i)){if(s++>=8)break;if(!this.path(e,i,a,o).length)continue}return[a,o]}}return e!==void 0?[e,i]:[t[0],t[1]]}effRange(t){return t.yawnT>0?t.range*.35:t.range}canSee(t){let e=this.player,i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s);return e.hiding||e.venting||r>this.effRange(t)||r>.35&&Math.abs(Ee(t.face,Math.atan2(i,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)||e.crouch&&this.lowCover(t.x,t.z,e.x,e.z)?0:this.smokeBlocks(t.x,t.z,e.x,e.z)?((t.susp>.2||t.state==="alert")&&(this.smokeHid=!0),0):r+.001}updateGuard(t,e,i){let s=this.player,r=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!i)&&r.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.kind==="guard"&&i&&(!t.radioCall&&t.koT<5.5&&(t.radioCall=1,t.callT=0,r.hint("radio")),t.radioCall===1&&(t.callT-=e,t.callT<=0&&(t.callT=1.1,r.audio.play("radio"),r.floaters.spawn('\u{1F4FB} "Unit, report in!"',t.x,1.2,t.z,"warn",1)),t.koT<1.8&&this.missedCheckIn(t))),t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,r.floaters.spawn(t.stripped?"Hey! Where's my uniform?!":"?!",t.x,1.9,t.z,"q",t.stripped?1.4:.8));return}t.yawnT>0&&(t.yawnT-=e,t.state!=="wait"&&(t.yawnT=0)),t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let a=i&&s.inv<=0?this.canSee(t):0;if(a){let l=1-Fe(a/this.effRange(t),0,1),c=(.65+2.3*l*l)*(s.dashT>0?1.6:s.crouch?.55:1)*this.D.susp;this.disguiseT>0&&t.kind!=="owner"&&a>2.3&&s.dashT<=0&&(c*=.12),t.susp=Math.min(1,t.susp+c*e),t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",r.audio.play("huh")))}else t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3));i&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),i&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&!this.canKO(t)&&Math.abs(Ee(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let o=t.def;switch(t.state){case"patrol":{let l=o.path[t.wp];(this.navTo(t,l[0]+.5,l[1]+.5,t.speed,e)||t.stateT>14)&&(t.state="wait",t.t=o.wait??1,t.baseFace=t.face,t.kind==="guard"&&t.susp<.1&&Math.random()<.35&&(t.yawnT=2.2,t.t=Math.max(t.t,2.2),r.floaters.spawn("*yaaawn*",t.x,1.9,t.z,"zz",1.4)));break}case"wait":{t.t-=e;let l=(o.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(l*2.4)*.9,t.t<=0){let c=o.path.length;if(o.roam){let h=Math.floor(t.x),u=Math.floor(t.z);o.path=[[h,u],this.roamCell(o.roam,h,u)],t.wp=1}else o.loop?t.wp=(t.wp+1)%c:((t.wp+t.dir>=c||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir);t.state="patrol"}break}case"post":{let l=o.post[0]+.5,c=o.post[1]+.5;Math.hypot(t.x-l,t.z-c)>.15?this.navTo(t,l,c,t.speed,e):t.face=Wo(t.face,o.face+Math.sin(this.t*o.sweepSpeed)*o.sweep,3*e);break}case"suspicious":{let l=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=Wo(t.face,l,5*e),t.kind!=="clerk"&&Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,r.floaters.spawn("Calling it in...",t.x,2,t.z,"warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let l=a?s.x:t.lastX,c=a?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(l=s.hiding.ex,c=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(l-t.x,c-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,l,c,wx,e),!a&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,r.audio.play("lost"),r.floaters.spawn("?",t.x,1.9,t.z,"q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"checkHide":{let l=t.chk;(this.navTo(t,l.ex,l.ez,t.speed*1.15,e)||t.stateT>8)&&(t.face=Math.atan2(l.cx-t.x,l.cz-t.z),this.player.hiding===l&&this.state==="play"?(r.floaters.spawn("Found you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t)):(r.audio.play("creak"),r.floaters.spawn("Nobody here...",t.x,2,t.z,"q",1.1),t.state="look",t.t=1.6,t.baseFace=t.face));break}case"flee":this.navTo(t,t.button.x,t.button.z,3.4,e)&&(t.state="cower",t.t=0,t.face=Math.atan2(t.button.x-t.x,t.button.z-t.z),t.button.btn.material.color.setHex(4054148),this.state==="play"&&!this.alarm&&this.triggerAlarm("The clerk hit the silent alarm!"),r.audio.play("click"));break;case"cower":t.face+=Math.sin(this.t*9)*e*2;break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let i=t.c;if(t.moving&&this.state==="play"&&(t.stepAcc=(t.stepAcc||0)+e*(t.state==="alert"||t.state==="flee"?3.4:2.2),t.stepAcc>1)){t.stepAcc=0;let o=this.player,l=Math.hypot(t.x-o.x,t.z-o.z);if(l<8){let c=Ee(o.face,Math.atan2(t.x-o.x,t.z-o.z)),h=this.los(t.x,t.z,o.x,o.z)?1:.45;this.app.audio.stepSound("boot",(1-l/8)*.9*h,Fe(-Math.sin(c),-.9,.9))}}i.root.position.x=t.x,i.root.position.z=t.z,i.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(kc(i,e*(s?1.5:1),t.moving?1:0,this.t),Ho(i,this.L,t.x,t.z,e),i.beam){let o=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";i.beam.visible=o,o&&i.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let o=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,l=t.state==="ko"?1-Math.pow(1-o,3)*Math.cos(o*7):o;if(i.root.rotation.x=-Math.PI/2*l,i.root.position.y=.16*l,t.stars.visible=t.state==="ko",t.stars.visible){let c=t.x-Math.sin(t.face)*1,h=t.z-Math.cos(t.face)*1;t.stars.children.forEach((u,f)=>{let d=this.t*5+f*Math.PI*2/3;u.position.set(c+Math.cos(d)*.35,.55+Math.sin(d*2)*.05,h+Math.sin(d)*.35),u.rotation.set(d,d,0)})}}else t.state!=="sleep"&&(i.root.rotation.x=0,i.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(i.armOverride=!0,i.armL.rotation.x=i.armR.rotation.x=-2.6);let r=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=r,r){let o=t.state==="alert"||t.state==="flee"?Ns.alert:t.susp>.25?Ns.sus:Ns.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,this.effRange(t),o)}let a="";t.state==="alert"||t.state==="flee"?a="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.state==="checkHide"||t.susp>.04)&&(a="sus"),a!==t.prevBadge&&(t.prevBadge=a,t.badge.className="badge "+a,t.badge.lastChild.textContent=a==="alert"?"!":"?"),a&&(Vo.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",Vo.z>1),t.badge.style.transform=`translate(${(Vo.x+1)/2*this.app.w}px,${(1-Vo.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",a==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,i,s,r,a,o){let l=t.geometry.attributes.position.array;l[0]=e,l[1]=.04,l[2]=i;for(let c=0;c<=Us;c++){let h=s-r/2+r*c/Us,u=this.rayLen(e,i,h,a),f=(c+1)*3;l[f]=e+Math.sin(h)*u,l[f+1]=.04,l[f+2]=i+Math.cos(h)*u}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(o)}updateCam(t,e,i){let s=t.def,r=this.player;if(t.off>0){t.off-=e,t.cone.visible=!1,t.mesh.rotation.x=.6,t.lens.material.color.setHex(Math.random()<.04?16773544:1710626),Math.random()<e*3&&this.app.particles.burst(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,{count:2,colors:[16773544,8378623],speed:1.2,up:.5,size:.03,life:.3}),t.off<=0&&(t.cone.visible=!0,t.mesh.rotation.x=0,this.app.audio.play("click"));return}i&&Math.hypot(r.x-s.pos[0],r.z-s.pos[1])<7&&this.coinsLeft>0&&this.app.hint("camhit"),t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let a=s.pos[0],o=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let l=!1;if(i&&r.inv<=0&&t.cool<=0){let h=r.x-a,u=r.z-o,f=Math.hypot(h,u);l=this.disguiseT<=0&&f<6.5&&Math.abs(Ee(t.face,Math.atan2(h,u)))<.45&&this.los(a,o,r.x,r.z)&&!this.smokeBlocks(a,o,r.x,r.z)}if(t.susp=Fe(t.susp+(l?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.audio.play("alarm"),this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",a,2,o,"alert",1.2);for(let h of this.guards)h.state==="ko"||h.state==="sleep"||h.state==="getup"||h.state==="alert"||h.state==="waking"||Math.hypot(h.x-r.x,h.z-r.z)<18&&(h.state="investigate",h.tx=r.x,h.tz=r.z,h.hurry=3.2,h.susp=Math.max(h.susp,.6))}let c=t.cool>0;t.lens.material.color.setHex(c||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,a,o,t.face,.9,6.5,c?Ns.alert:t.susp>.2?Ns.sus:10479871)}openSafe(){this.mark("safe",this.L.safe.x+.5,this.L.safe.y+.5);let t=this.app,e=this.L.safe.x+.5,i=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,this.juice(.6,.35,-12,.04,0),t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,i+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.burst(e,1,i+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,i,"big",1.6);for(let r=0;r<s.bundles;r++){let a=-.9+1.8*r/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:i+.4*this.safeScale+.1,vx:Math.sin(a)*Ae(2,3.2),vy:Ae(5,7),vz:Math.cos(a)*Ae(1.5,3),st:"fly",t:0,value:s.bundle,ph:r,ms:0,s:1,rot:r,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.hintDone("safe"),t.hint("stash")}weightMul(){let t=0;for(let e of this.heavy)t+=e==="art"?.1:.06;return Math.max(.65,1-t)}stashHeavy(){let t=this.app,e=this.player,i=this.heavy.length;this.heavy=[],this.stashRuns++,this.hasStash||(this.stashedEarly=!0),t.audio.play("disarm"),t.floaters.spawn(`STASHED ${i} IN THE ${this.L.van?"VAN":"HIDEOUT"}!`,e.x+Math.sin(e.face)*1.5,1.3,e.z+Math.cos(e.face)*1.5,"big",1.3),t.particles.burst(e.x,.9,e.z,{count:10,colors:[16765503,16777215],speed:1.6,up:2,size:.04,life:.6}),this.juice(0,1,-3,0,0),t.onWeight(1),t.hintDone("heavy")}collect(t){(t.type==="gold"||t.type==="art")&&!t.bundle&&(this.heavy.push(t.type),this.app.onWeight(this.weightMul()),this.app.hint("heavy")),(t.type!=="cash"||!t.bundle)&&this.mark(t.type==="cash"?"cash":"loot",t.x,t.z);let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let i=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,r=Math.sin(s.face),a=Math.cos(s.face),o=Ae(-.35,.35),l=s.x+r*1.4-a*o,c=s.z+a*1.4+r*o;e.floaters.spawn("+$"+t.value,l,1,c,i,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+r*1.4,1.45,s.z+a*1.4,"combo",.8),e.audio.play("combo",this.combo));let h={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+r*1.4,.8,s.z+a*1.4,{count:t.type==="cash"?4:10,colors:h,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+r*1,1,s.z+a*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+r*1.5,1,s.z+a*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,this.juice(0,1,t.type==="cash"?-1.2:-3,t.type==="cash"?0:-.015,0),Di(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let i=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let r=this.loot.length-1;r>=0;r--){let a=this.loot[r];a.t+=t;let o=a.type==="art"?.9:.62;if(a.st==="fly"){a.vy-=18*t;let h=a.x,u=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,this.walkable(Math.floor(a.x),Math.floor(a.z))||(a.x=h,a.z=u,a.vx*=-.5,a.vz*=-.5),a.y<.3&&(a.y=.3,a.vy*=-.45,a.vx*=.6,a.vz*=.6),a.rot+=t*8,a.t>.8&&(a.st="idle")}else if(a.st==="idle")a.y+=(o+Math.sin(this.t*3+a.ph)*.08-a.y)*Math.min(1,t*6),a.rot+=t*1.8,e&&Math.hypot(i.x-a.x,i.z-a.z)<1.5&&(a.st="mag",a.ms=2);else{a.ms+=t*30;let h=i.x-a.x,u=.7-a.y,f=i.z-a.z,d=Math.hypot(h,u,f),g=Math.min(d,a.ms*t);if(a.x+=h/d*g,a.y+=u/d*g,a.z+=f/d*g,a.rot+=t*12,d<.45){this.collect(a),this.loot.splice(r,1);continue}}a.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(a.x+Ae(-.2,.2),a.y+Ae(0,.25),a.z+Ae(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let l=this.lootMeshes[a.type],c=a.st==="mag"?Math.max(.4,1-a.ms*.02):1+(a.type==="art"?0:Math.sin(this.t*6+a.ph)*.06);Pr.position.set(a.x,a.y,a.z),Pr.rotation.set(0,a.rot,0),Pr.scale.setScalar(c*(a.type==="jewel"?1.5:1.25)),Pr.updateMatrix(),l.setMatrixAt(s[a.type]++,Pr.matrix)}for(let r in s){let a=this.lootMeshes[r];a.count=s[r],a.instanceMatrix.needsUpdate=!0}}updateProps(t){for(let e of this.doors)if(e.open&&e.t<1){e.t=Math.min(1,e.t+t*1.6);let i=1-Math.pow(1-e.t,3);e.type==="lock"?e.m.group.rotation.y=(e.alongX?1:-1)*1.55*(i+Math.sin(e.t*Math.PI)*.12):e.m.group.position.y=i*(Be-.12)}if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,i=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*i}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,i=e.c,s=this.state==="escape"&&!e.hidden;i.root.visible=s,e.shadow.visible=s,s&&(i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),kc(i,t,1,this.t),i.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=Se(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),Ho(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let i=this.player,s=this.app;if(this.state==="escape"&&this.heli&&this.heli.group.visible){let g=this.L.exit,y=this.endT,p=this.heli.group.position;if(y<1.1){let m=Math.min(1,y/1.1),v=m*m*(3-2*m);t.position.set(g.x,Go+v*1.6,g.z+v*.6)}else{let m=Math.min(1,(y-1.1)*1.4);t.position.x+=(g.x+3-t.position.x)*m*e*2,t.position.y+=(6-t.position.y)*e*1.5,t.position.z+=(g.z+7-t.position.z)*e*1.5}t.lookAt(p.x,p.y,p.z),this.fovKick=0;return}if(this.state==="escape"&&!this.L.van){let g=this.L.exit,y=this.endT,p=Math.min(1,Math.max(0,(y-.3)/2)),m=p*p*(3-2*p);t.position.set(g.x,Go+m*9,g.z+m*3.5),t.rotation.set(-.1-m*1,Math.PI+m*.5,0),this.fovKick=0;return}if(this.state==="escape"){let g=this.van.group.position,y=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(y.x-2.5,1.6,y.z+5)),t.position.x+=(g.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(g.x+.3,.7,g.z),this.fovKick=0;return}if(i.hiding){let g=i.hiding;t.position.set(g.cx+Math.sin(g.face)*.12,Go-.06,g.cz+Math.cos(g.face)*.12),t.rotation.set(i.pitch+s.shake.y*.06,i.yaw+s.shake.x*.06,0),this.fovKick=Se(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let g=this.catcher,y=Math.atan2(g.x-i.x,g.z-i.z)-Math.PI;i.yaw+=Ee(i.yaw,y)*Math.min(1,e*8),i.pitch+=(.08-i.pitch)*Math.min(1,e*8)}let r=i.moving,a=Math.abs(Math.sin(i.bob))*.05*r,o=Math.cos(i.bob)*.03*r,l=Math.cos(i.yaw+Math.PI),c=Math.sin(i.yaw+Math.PI),h=-l,u=c;i.roll=Se(i.roll,-i.strafe*.03*r,8,e),this.fovKick=Se(this.fovKick,i.dashT>0?12:0,i.dashT>0?25:6,e);let f=s.shake,d=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(i.x+h*o,Go-(i.crouchK||0)*.42+a*(1-(i.crouchK||0)*.5)-d,i.z+u*o),t.rotation.set(i.pitch+f.y*.06+(this.kickP||0),i.yaw+f.x*.06,i.roll+f.x*.02+(this.kickR||0)+this.sway)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let i=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(i,1,i),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1,this.whooshed=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),t.onEscapeStart()}updateHeli(t){let e=this.heli,i=e.group,s=this.L.exit,r=this.endT;i.visible||(i.visible=!0,this.heliV=0,i.position.set(s.x,4.4,s.z-1.2),i.rotation.set(0,0,0)),e.rotor.rotation.y+=t*32,e.tail.rotation.x+=t*40,e.blink.visible=r*2.5%1<.4,e.beam.rotation.z=Math.sin(r*1.3)*.25,r<1.3?i.position.y=4.4+Math.sin(r*3)*.08:(this.heliV=Math.min(14,this.heliV+t*9),i.position.x-=this.heliV*t,i.position.y+=(1.5+this.heliV*.25)*t,i.rotation.z+=(.22-i.rotation.z)*Math.min(1,t*3),i.rotation.x+=(-.12-i.rotation.x)*Math.min(1,t*2)),r>.6&&r<1.4&&this.app.shake.add(t*.25)}updateEscape(t){let e=this.player,i=this.van.group,s=this.app;if(!this.L.van){this.endT+=t,e.hidden||(e.hidden=!0,e.c.root.visible=!1,s.audio.play("creak")),this.endT>.5&&!this.whooshed&&(this.whooshed=!0,s.audio.play(this.heli?"chopper":"dash")),this.heli&&this.updateHeli(t),this.endT>(this.heli?3.6:2.8)&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()));return}this.endT+=t;let r=this.endT;if(r<.4){let a=r/.4;e.x=e.sx+(i.position.x-e.sx)*a,e.z=e.sz+(i.position.z-.3-e.sz)*a,e.y=Math.sin(a*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,i.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));i.scale.x+=(1-i.scale.x)*Math.min(1,t*10),i.scale.y+=(1-i.scale.y)*Math.min(1,t*10),i.scale.z=i.scale.x,r>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),i.position.x+=this.van.vx*t,i.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.burst(i.position.x-1.5,.25,i.position.z,{count:2,colors:[14540253,12303291],speed:1,up:1,size:.22,gravity:-1,life:.6})),r>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;this.mark("alarm",this.player.x,this.player.z);let e=this.app,i=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(this.policeLane.x+40,0,this.policeLane.z),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let o=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?o?16722490:5900816:4054148)}let i=this.police;if(!this.alarm){i.group.visible&&this.state==="play"&&(i.group.position.x+=t*10,i.group.position.x>this.policeLane.x+45&&(i.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(i.red.material.color.setHex(s?16722490:5574682),i.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let r=this.L.exit,a=Math.max(0,this.alarmT/this.alarmTotal);i.group.position.x=this.policeLane.x+2.5+a*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){this.mark("caught",this.player.x,this.player.z);let t=this.app,e=this.player;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,this.juice(.5,.3,-14,.06,.04),t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}bust(t){this.mark("caught",this.player.x,this.player.z);let e=this.time;this.bustCause=this.player.hiding?"hide":t.kind==="owner"?"owner":e-(this.lastDash??-99)<2.5?"dash":e-(this.lastBark??-99)<6?"dog":e-(t.alertAt??e)>3?"los":"cone";let i=this.app;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),Di(this.player.c,.55),this.hitstop=.15,this.juice(.5,.3,-14,.06,-.04),i.shake.add(.7),i.flash("red"),i.audio.play("bust"),i.audio.siren(!1),i.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),i.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,Di(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let i of this.guards)i.state==="alert"&&(i.state="search",i.tx=i.lastX,i.tz=i.lastZ,i.hurry=2.4,i.susp=.5)}cutPower(){let t=this.app,e=this.breaker.group.position;this.powerOff=!0,this.breakProg=0,this.breaker.lever.rotation.x=-2.2,this.breaker.led.material.color.setHex(4054148);for(let i of this.lasers)i.group.visible=!1;for(let i of this.spots)i.pool.visible=i.cone.visible=!1;t.audio.play("powerdown"),t.shake.add(.2),t.particles.burst(e.x,e.y+.3,e.z,{count:24,colors:[16773544,8378623,16777215],speed:3,up:3,size:.04,life:.6}),t.floaters.spawn("LASERS OFF",e.x,1.6,e.z,"big",1.3)}updateSlots(t){for(let e of this.slots){if(e.t<=0){e.top.visible=!1;continue}e.t-=t,e.top.visible=!0,e.top.material.color.setHSL(this.t*2%1,1,.6),e.top.scale.y=1+Math.sin(this.t*30)*.5}}updateSpots(t,e){let i=this.player,s=this.app;for(let r of this.spots){let a=r.def,o=r.len||1,l=(this.t*a.speed+(a.phase||0))%(2*o),c=(l<o?l:2*o-l)/o;if(r.x=r.ax+(r.bx-r.ax)*c,r.z=r.az+(r.bz-r.az)*c,r.pool.position.set(r.x,.03,r.z),r.cone.position.set(r.x,Be/2,r.z),r.fix.position.set(r.x,Be-.08,r.z),this.powerOff)continue;r.cool-=t;let h=e&&!i.hiding&&i.inv<=0&&r.cool<=0&&Math.hypot(i.x-r.x,i.z-r.z)<a.r*.9&&!this.inSmoke(i.x,i.z);r.susp=Fe(r.susp+(h?t*1.7:-t*.7),0,1),h&&(this.spotHit=!0,r.tickT-=t,r.tickT<=0&&(r.tickT=.22,s.audio.play("tick",1+r.susp)),s.hint("spot")),r.susp>=1&&(r.susp=0,r.cool=5,this.spotted=!0,s.flash("alarm"),s.shake.add(.2),this.triggerAlarm("Caught in the spotlight!"));let f=r.cool>0&&Math.sin(this.t*14)>0?16724032:r.susp>.05?r.susp>.6?16734778:16752704:16773296;r.pool.material.color.setHex(f),r.cone.material.color.setHex(f),r.pool.scale.setScalar(1+r.susp*.15)}}updateLasers(t,e){if(this.powerOff)return;let i=this.player,s=this.app;for(let r of this.lasers){let a=r.def,o=a.on+a.off,l=(this.t+(a.phase||0))%o,c=l<a.on,h=!c&&o-l<.45;if(r.on=c,r.mat.opacity=c?.75+Math.sin(this.t*40)*.15:h&&Math.sin(this.t*50)>0?.35:0,!e||!c||i.hiding)continue;let u=r.alongX?i.x:i.z,f=r.alongX?i.z:i.x;u>r.lo&&u<r.hi&&Math.abs(f-r.line)<.28&&(!this.laserHitT||this.t-this.laserHitT>1.5)&&(this.laserHitT=this.t,this.lasersTripped++,s.audio.play("zap"),s.flash("red"),s.shake.add(.3),s.particles.burst(i.x,.8,i.z,{count:14,colors:[16724032,16777215],speed:2.5,up:2,size:.04,life:.5}),this.spotted=!0,this.triggerAlarm("You tripped a laser!"))}}fakeCheckIn(t){let e=this.app;t.radioCall=2,t.answerProg=0,t.koT+=8,this.radioFaked++,e.audio.play("radioOk"),e.floaters.spawn('"All clear, over."',t.x,1.3,t.z,"big",1.3),e.hintDone("radio")}missedCheckIn(t){let e=this.app;t.radioCall=3,e.audio.play("radio"),e.floaters.spawn('\u{1F4FB} "No answer... sending backup!"',t.x,1.4,t.z,"alert",1.4);let i=null,s=1e9;for(let r of this.guards){if(r===t||r.kind!=="guard"||["ko","getup","sleep","alert","waking"].includes(r.state))continue;let a=Math.hypot(r.x-t.x,r.z-t.z);a<s&&(s=a,i=r)}i&&(t.claimed=!0,i.state="investigate",i.tx=t.x,i.tz=t.z,i.hurry=i.speed*1.8,i.reviveT=t,i.susp=Math.max(i.susp,.7),i.navGoal=-1,e.floaters.spawn("On my way!",i.x,2,i.z,"warn",1.1)),this.app.diff==="hard"&&this.app.mode!=="daily"&&this.app.mode!=="tutorial"&&this.triggerAlarm("A guard missed his radio check-in!")}pullSlot(t){let e=this.app,i=this.def.values;t.used=!0,t.prog=0,t.t=3,e.audio.play("jackpot"),e.shake.add(.15),e.floaters.spawn("JACKPOT!",t.cx,1.9,t.cz+t.face*.6,"big",1.4);for(let s=0;s<4;s++)setTimeout(()=>e.particles.burst(t.cx,1.3,t.cz+t.face*.4,{count:10,colors:[16766810,16773544,16777215],speed:2.2,up:3.5,size:.06,life:.9}),s*250);this.makeNoise(t.cx,t.cz,8,null,"Jackpot!?"),this.loot.push({type:"cash",x:t.cx,y:1,z:t.cz+t.face*.5,vx:(Math.random()-.5)*2,vy:4,vz:t.face*2.2,st:"fly",t:0,value:i.cash,ph:0,ms:0,s:1,rot:0})}pickpocket(t){let e=this.app,i=this.player,s=Math.sin(i.face),r=Math.cos(i.face);if(this.picks++,this.pocketProg=0,t.spareKey){if(t.spareKey=!1,t.keyMesh.visible=!1,!this.hasKey){this.hasKey=!0;for(let a of this.keyMeshes)a.m.visible=!1;e.onKey(!0),e.hint("door")}e.floaters.spawn("SPARE KEYCARD!",t.x,1.6,t.z,"big",1.2),e.audio.play("gold")}if(t.wallet>0){let a=t.wallet;t.wallet=0,t.walletMesh.visible=!1,this.lootGot+=a,this.got.cash++,e.floaters.spawn("+$"+a+" WALLET",i.x+s*1.2,1.1,i.z+r*1.2,"cash",1),e.particles.burst(i.x+s*.9,1,i.z+r*.9,{count:5,colors:[7327610,10216346],speed:1.2,up:1.4,size:.09,life:1,shape:"bill",gravity:3,drag:2.5}),e.audio.play("pick",8),e.onLoot(!1)}i.grabT=1,e.floaters.spawn("?",t.x,2,t.z,"q",.7),e.hintDone("pocket")}smashCase(t){let e=this.app,i=this.def.values;t.smashed=!0,t.prog=0,this.casesSmashed++,t.glass.visible=!1,t.gems.visible=!1,e.audio.play("glass"),e.shake.add(.28),this.hitstop=.06,this.juice(0,1,-4,-.06,(Math.random()-.5)*.08),e.particles.burst(t.cx,1.05,t.cz,{count:26,colors:[14677247,12576511,16777215],speed:3.2,up:3,size:.07,life:.9,spin:2}),e.particles.burst(t.cx,.95,t.cz,{count:8,colors:[5037311,16732026,16766810],speed:1.5,up:2.5,size:.05,life:.7}),this.makeNoise(t.cx,t.cz,3.6,null);for(let s=0;s<this.caseLoot;s++){let r=Math.atan2(this.player.x-t.cx,this.player.z-t.cz)+(s-.5)*.9;this.loot.push({type:"jewel",x:t.cx,y:1,z:t.cz,vx:Math.sin(r)*Ae(1.5,2.4),vy:Ae(3.5,5),vz:Math.cos(r)*Ae(1.5,2.4),st:"fly",t:0,value:i.jewel,ph:s,ms:0,s:1,rot:s})}e.floaters.spawn("SMASH!",t.cx,1.6,t.cz,"ko",.8)}startPick(t){this.picking={d:t,pin:0,t:Math.random()*6,speed:this.tut?1.7:2.2,w:this.tut?.36:.26,zone:.5,pos:.5,slips:0,cool:0},this.newPinZone(),this.app.audio.play("click"),this.app.onPick(this.picking)}newPinZone(){let t=this.picking,e;do e=.18+Math.random()*.64;while(Math.abs(e-t.pos)<.25);t.zone=e}stopPick(){this.picking=null,this.app.onPick(null)}updatePicking(t,e){let i=this.picking,s=this.player,r=this.app,a=i.d;if(e.move(Si),e.consumeDash(),e.consumeThrow(),e.consumeSmoke(),s.vx=s.vz=0,s.moving=0,s.crack=!0,Math.hypot(Si.x,Si.y)>.5){this.stopPick();return}if(i.t+=t*i.speed,i.cool-=t,i.pos=.5+.5*Math.sin(i.t),e.consumeAct()&&i.cool<=0)if(Math.abs(i.pos-i.zone)<i.w/2){if(i.pin++,r.audio.play("pin",i.pin),r.shake.add(.05),r.particles.burst(a.x+.5,.72,a.y+.5,{count:4,colors:[16773544,16777215],speed:1,up:1,size:.025,life:.3}),i.pin>=3){i.slips===0&&(this.cleanPick=!0),this.stopPick(),this.openDoor(a);return}i.w*=.78,i.speed*=1.25,this.newPinZone()}else i.slips++,i.cool=.45,r.audio.play("slip"),r.shake.add(.15),r.floaters.spawn("*rattle*",a.x+.5,1.2,a.y+.5,"warn",.8),this.makeNoise(a.x+.5,a.y+.5,3.4,null);r.onPick(i),r.setPrompt("picking")}openDoor(t){let e=this.app,i=t.y*this.L.W+t.x;t.open=!0,t.t=0,this.L.walk[i]=1,this.L.opaque[i]=0;for(let s of this.guards)s.navGoal=-1;if(t.type==="lock"){e.audio.play("creak"),e.hintDone("pick"),e.floaters.spawn("UNLOCKED!",t.x+.5,1.5,t.y+.5,"big",1.2),e.particles.burst(t.x+.5,.75,t.y+.5,{count:10,colors:[14267482,16777215],speed:1.5,up:1.5,size:.03,life:.5});return}t.m.led.material.color.setHex(4054148),e.audio.play("disarm"),e.audio.play("creak"),e.shake.add(.25),e.particles.burst(t.x+.5,1.5,t.y+.5,{count:18,colors:[14212842,16777215],speed:1.5,up:.5,size:.06,life:.8}),e.floaters.spawn("ACCESS GRANTED",t.x+.5,1.6,t.y+.5,"big",1.2)}objectiveTarget(){let t=this.L;if(this.hasStash)return{x:t.exit.x,z:t.exit.z,label:t.van?"VAN":"ROOF HATCH"};let e=this.doors.find(s=>!s.open&&s.type!=="lock");if(e&&!this.hasKey){let s=this.keyMeshes.find(r=>r.m.visible);if(s)return{x:s.x+.5,z:s.y+.5,label:"KEYCARD"}}if(e)return{x:e.x+.5,z:e.y+.5,label:"DOOR"};let i=this.doors.find(s=>!s.open&&s.type==="lock");return i?{x:i.x+.5,z:i.y+.5,label:"LOCKED DOOR"}:{x:t.safe.x+.5,z:t.safe.y+.5,label:(this.def.safeName||"safe").toUpperCase()}}updateObjective(){let t=this.doors.find(s=>!s.open&&s.type!=="lock"),e=this.doors.find(s=>!s.open&&s.type==="lock"),i=this.hasStash?this.L.van?"Escape to the van!":"Escape through the roof hatch!":t&&!this.hasKey?"Find the keycard!":t?"Open the vault door!":e?"Pick the lock!":`Crack the ${this.def.safeName||"safe"}!`;i!==this.objText&&(this.objText=i,this.app.setObjective(i))}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let i=e.check(this,t);i!=="pending"&&(e.st=i,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,i=this.contracts.reduce((o,l)=>o+(l.st==="ok"?l.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),r=!this.spotted,a=[!0,e>=.7,r];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:r,kos:this.kos,stars:a,timeBonus:s,ghostBonus:r?1e3:0,contracts:this.contracts,contractBonus:i,diff:this.daily?"Daily "+this.daily.label:this.D.label,mult:this.D.mult,daily:!!this.daily,score:Math.round((this.lootGot+s+(r?1e3:0)+i)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var fn=n=>440*Math.pow(2,(n-69)/12),qo=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.master.connect(this.lp).connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8*(this.sfxVol??1),this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32*(this.musVol??1),this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;this.apply(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setVolumes(t,e){this.musVol=t,this.sfxVol=e,this.mus&&(this.mus.gain.value=.32*t,this.sfx.gain.value=.8*e)}setMuffle(t){!this.lp||this.muffled===t||(this.muffled=t,this.lp.frequency.setTargetAtTime(t?900:2e4,this.ctx.currentTime,t?.03:.15))}setMuted(t){this.muted=t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,i={}){let s=this.ctx,r=s.currentTime+(i.delay||0),a=s.createOscillator(),o=s.createGain();a.type=i.type||"square",a.frequency.setValueAtTime(t,r),i.slide&&a.frequency.exponentialRampToValueAtTime(i.slide,r+e);let l=i.vol??.15;o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(l,r+(i.attack||.006)),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o).connect(i.dest||this.sfx),a.start(r),a.stop(r+e+.05)}noise(t,e={}){let i=this.ctx,s=i.currentTime+(e.delay||0),r=i.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;let a=i.createBiquadFilter();a.type=e.type||"bandpass",a.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&a.frequency.exponentialRampToValueAtTime(e.slide,s+t),a.Q.value=e.q??1;let o=i.createGain(),l=e.vol??.2;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(l,s+(e.attack||.005)),o.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(o).connect(e.dest||this.sfx),r.start(s,Math.random()*.5),r.stop(s+t+.05)}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let i=(r,a,o)=>this.tone(r,a,o),s=(r,a)=>this.noise(r,a);switch(t){case"step":s(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":s(.28,{vol:.3,freq:500,slide:3e3,q:2}),i(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let r=880*Math.pow(2,Math.min(e,14)/12);i(r,.07,{vol:.1}),i(r*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((r,a)=>i(r,.18,{type:"triangle",vol:.14,delay:a*.045})),s(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((r,a)=>i(r,.25,{type:"sine",vol:.16,delay:a*.06}));break;case"art":[523,659,784,1046,1318].forEach((r,a)=>i(r,.2,{type:"triangle",vol:.13,delay:a*.05}));break;case"ko":i(170,.28,{type:"sine",slide:45,vol:.55}),s(.14,{vol:.35,freq:900}),i(560,.12,{slide:260,vol:.12}),i(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":i(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":i(880,.09,{vol:.16}),i(1320,.16,{vol:.16,delay:.1});break;case"lost":i(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":s(.03,{vol:.22,freq:4e3,type:"highpass"}),i(1500+e*600,.04,{vol:.05});break;case"safe":i(110,.45,{type:"sine",slide:40,vol:.6}),s(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((r,a)=>i(r,.16,{vol:.09,delay:.1+a*.05}));for(let r=0;r<12;r++)i(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+r*.05});break;case"win":[523,659,784,1046].forEach((r,a)=>i(r,.22,{vol:.12,delay:a*.1})),[523,659,784].forEach(r=>i(r*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":i(392,.3,{type:"sawtooth",slide:370,vol:.12}),i(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),i(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let r=0;r<4;r++)i(r%2?660:880,.22,{type:"square",vol:.05,delay:r*.22});break;case"alarm":for(let r=0;r<6;r++)i(r%2?700:950,.15,{vol:.09,delay:r*.15});break;case"wake":i(300,.25,{type:"sawtooth",slide:520,vol:.1}),i(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"thunder":s(.25,{vol:.5,freq:900,type:"lowpass",q:.5}),s(2.8,{vol:.55,freq:220,slide:60,type:"lowpass",q:.7,attack:.08}),s(1.6,{vol:.3,freq:120,type:"lowpass",delay:.5,attack:.3});break;case"tvon":i(60,.4,{type:"sawtooth",vol:.06}),s(.35,{vol:.12,freq:5e3,type:"highpass",delay:.05});break;case"tv":{let r=Math.max(.05,e);i(180+Math.random()*260,.1+Math.random()*.08,{type:"sawtooth",vol:.035*r,slide:150+Math.random()*300}),Math.random()<.3&&i(600+Math.random()*500,.08,{type:"triangle",vol:.03*r,delay:.05}),s(.12,{vol:.03*r,freq:1600,q:2});break}case"mumble":for(let r=0;r<4;r++)i(150+Math.random()*90,.07,{type:"triangle",vol:.04,delay:r*.09,slide:120+Math.random()*80});break;case"clack":s(.05,{vol:.16,freq:260,type:"lowpass"}),s(.05,{vol:.13,freq:240,type:"lowpass",delay:.13}),i(70,.06,{type:"sine",vol:.08}),i(65,.06,{type:"sine",vol:.07,delay:.13});break;case"vent":i(140,.12,{type:"square",vol:.12}),s(.12,{vol:.3,freq:2200,q:3});for(let r=0;r<9;r++)s(.11,{vol:.16,freq:600+r%3*250,q:4,delay:.25+r*.14});break;case"clank":i(180,.1,{type:"square",vol:.13}),i(95,.18,{type:"triangle",vol:.14,delay:.03}),s(.16,{vol:.3,freq:2600,q:3});break;case"chopper":for(let r=0;r<34;r++){let a=r<8?r/8:1-(r-8)/30;s(.07,{vol:.08+a*.32,freq:160+a*120,type:"lowpass",delay:r*.09})}s(3,{vol:.08,freq:2400,type:"bandpass",q:.8,attack:.6});break;case"engine":s(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),i(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":i(700,.05,{vol:.08});break;case"star":i(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),i(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"throw":s(.12,{vol:.15,freq:1800,slide:900,q:1.5}),i(900,.06,{type:"triangle",vol:.06});break;case"clink":{let r=.05+e*.12;i(2400+Math.random()*300,.12,{type:"triangle",vol:r}),i(3700+Math.random()*300,.18,{type:"sine",vol:r*.7,delay:.02}),e>.5&&i(3100,.25,{type:"sine",vol:r*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((r,a)=>i(r,.12,{type:"square",vol:.07,delay:a*.06}));break;case"contract":[784,988,1175,1568].forEach((r,a)=>i(r,.16,{type:"triangle",vol:.12,delay:a*.07})),i(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":s(.35,{vol:.12,freq:300,slide:900,q:8}),i(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":i(62,.12,{type:"sine",slide:40,vol:.45}),i(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"woof":i(330,.09,{type:"sawtooth",slide:170,vol:.22}),s(.08,{freq:800,vol:.18,q:2}),i(300,.11,{type:"sawtooth",slide:150,vol:.2,delay:.15}),s(.09,{freq:700,vol:.16,q:2,delay:.15});break;case"sniff":for(let r=0;r<3;r++)s(.04,{freq:2500,vol:.05,q:3,delay:r*.07});break;case"zap":i(1400,.25,{type:"sawtooth",slide:200,vol:.18}),s(.2,{freq:3e3,vol:.2,type:"highpass"});break;case"powerdown":i(440,.8,{type:"sawtooth",slide:40,vol:.16}),s(.15,{freq:2e3,vol:.25,q:.7}),i(60,.5,{type:"sine",vol:.4,delay:.05});break;case"scream":i(900,.45,{type:"sawtooth",slide:1400,vol:.09}),i(1100,.4,{type:"square",slide:1600,vol:.04,delay:.05});break;case"smoke":i(160,.12,{type:"sine",slide:60,vol:.4}),s(1.4,{freq:4e3,slide:900,vol:.22,q:.6}),s(.5,{freq:900,vol:.12,type:"lowpass",delay:.05});break;case"pin":i(2400+e*300,.05,{type:"square",vol:.08}),i(1600+e*200,.08,{type:"triangle",vol:.1,delay:.03}),s(.03,{freq:6e3,vol:.1,type:"highpass"});break;case"slip":s(.18,{freq:2200,vol:.22,q:3}),i(320,.15,{type:"square",slide:180,vol:.08}),s(.12,{freq:1500,vol:.15,q:4,delay:.08});break;case"glass":s(.5,{freq:5e3,vol:.35,type:"highpass"}),s(.25,{freq:2500,vol:.25,q:.8,delay:.02});for(let r=0;r<8;r++)i(2500+Math.random()*3500,.12,{type:"triangle",vol:.06,delay:.03+r*.035});i(140,.2,{type:"sine",slide:60,vol:.3});break;case"radio":s(.35,{freq:1800,vol:.12,q:1.2}),i(1200,.05,{type:"square",vol:.05,delay:.02}),i(900,.05,{type:"square",vol:.05,delay:.12}),s(.15,{freq:2400,vol:.08,q:2,delay:.25});break;case"radioOk":s(.12,{freq:1800,vol:.12,q:1.2}),i(1400,.06,{type:"square",vol:.06,delay:.05}),i(1800,.08,{type:"square",vol:.06,delay:.13});break;case"jackpot":for(let r=0;r<14;r++)i([1046,1318,1568,2093][r%4]*(r>9?1.5:1),.1,{type:"square",vol:.07,delay:r*.08});for(let r=0;r<18;r++)i(2400+Math.random()*1800,.06,{type:"triangle",vol:.05,delay:.3+r*.07});i(523,.6,{type:"triangle",vol:.1,delay:1.1});break;case"nope":i(220,.12,{vol:.08}),i(180,.15,{vol:.08,delay:.1});break;case"combo":i(1320+e*80,.12,{type:"triangle",vol:.1});break}}rumble(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rb){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=.5,s.type="lowpass",s.frequency.value=260,r.gain.value=1e-4,r.gain.setTargetAtTime(.16,e.currentTime,.6),i.connect(s).connect(r).connect(this.sfx),i.start(),this.rb={src:i,g:r}}else if(!t&&this.rb){let e=this.rb,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rb=null}}}rain(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rn){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createBiquadFilter(),a=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,s.type="lowpass",s.frequency.value=1400,r.type="highpass",r.frequency.value=220,a.gain.value=1e-4,a.gain.setTargetAtTime(.09,e.currentTime,.6),i.connect(s).connect(r).connect(a).connect(this.sfx),i.start(),this.rn={src:i,g:a}}else if(!t&&this.rn){let e=this.rn,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rn=null}}}siren(t){if(this.ctx){if(t&&!this.sir){let e=this.ctx,i=e.createOscillator(),s=e.createOscillator(),r=e.createGain(),a=e.createGain();i.type="sawtooth",i.frequency.value=780,s.type="square",s.frequency.value=1.6,r.gain.value=170,s.connect(r).connect(i.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,a.gain.value=1e-4,a.gain.setTargetAtTime(.045,e.currentTime,.2),i.connect(o).connect(a).connect(this.sfx),i.start(),s.start(),this.sir={o:i,lfo:s,g:a}}else if(!t&&this.sir){let e=this.sir,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.1),e.o.stop(i+.5),e.lfo.stop(i+.5),this.sir=null}}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=this.mode==="menu"?0:this.tension|0,s=60/(this.mode==="menu"?96:[104,110,128,140][e]||104)/4;for(this.lvl=this.lvl==null?e:this.lvl+Math.sign(e-this.lvl)*0,this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.step%16===0&&(this.lvl=e),this.mode==="menu"?this.menuBeat(this.step,this.nextT-t.currentTime):this.beat(this.step,this.nextT-t.currentTime,this.lvl),this.nextT+=s,this.step=(this.step+1)%64}pad(t,e,i,s){for(let r of t)for(let a of[-5,5]){let o=this.ctx,l=o.currentTime+i,c=o.createOscillator(),h=o.createGain(),u=o.createBiquadFilter();c.type="sawtooth",c.frequency.value=fn(r),c.detune.value=a,u.type="lowpass",u.frequency.value=900,h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(s,l+e*.35),h.gain.linearRampToValueAtTime(1e-4,l+e),c.connect(u).connect(h).connect(this.mus),c.start(l),c.stop(l+e+.05)}}beat(t,e,i){let s=this.mus,r=(d,g,y)=>this.tone(d,g,{...y,delay:e,dest:s}),a=(d,g)=>this.noise(d,{...g,delay:e,dest:s}),o=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],l=[45,41,48,43],c=t>>4&3,h=l[c]+(i>=2?12:0),u=t&15,f=[1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0];if(f[u]&&r(fn(h+(u===6?7:u===13?5:0)),.18,{type:"triangle",vol:.3}),f[u]&&i>=1&&r(fn(h+12),.08,{type:"square",vol:.035}),u%4===2&&a(.03,{vol:.07,freq:7e3,type:"highpass"}),u===0&&this.pad(o[c],16*(60/([104,110,128,140][i]||104)/4),e,i>=2?.012:.018),i>=1){let d=o[c],g=u%3;u%2===0&&r(fn(d[g]+12),.1,{type:"sine",vol:.06}),(u===4||u===12)&&a(.04,{vol:.12,freq:2500,q:3})}i>=2&&(u%4===0&&r(120,.15,{type:"sine",slide:40,vol:.45}),(u===4||u===12)&&(a(.12,{vol:.18,freq:1800,q:.8}),r(200,.08,{type:"triangle",slide:120,vol:.12})),u%2===1&&a(.02,{vol:.06,freq:9e3,type:"highpass"}),u===14&&r(fn(h+24),.1,{type:"square",vol:.04})),i>=3&&(u===0||u===3||u===6)&&(r(fn(h+24),.12,{type:"sawtooth",vol:.05}),r(fn(h+27),.12,{type:"sawtooth",vol:.04}))}menuBeat(t,e){let i=this.mus,s=(u,f,d)=>this.tone(u,f,{...d,delay:e,dest:i}),r=(u,f)=>this.noise(u,{...f,delay:e,dest:i}),a=[[57,60,64,67],[50,53,57,60],[52,55,59,62],[57,60,64,67]],o=[45,38,40,45],l=t>>4&3,c=t&15,h=o[l];(c===0||c===7||c===10)&&s(fn(h),.25,{type:"triangle",vol:.3}),c===0&&this.pad(a[l],2.4,e,.014),(c===4||c===12)&&r(.05,{vol:.1,freq:2600,q:2.5}),c%2===0&&r(.025,{vol:.05,freq:8e3,type:"highpass"}),(c===2||c===6||c===9||c===14)&&s(fn(a[l][(c>>1)%4]+12),.12,{type:"sine",vol:.05})}stepSound(t,e=1,i=0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.sfx;if(i){let o=this.ctx.createStereoPanner();o.pan.value=i,o.connect(this.sfx),s=o}let r=(o,l)=>this.noise(o,{...l,vol:(l.vol||.1)*e,dest:s}),a=(o,l,c)=>this.tone(o,l,{...c,vol:(c.vol||.1)*e,dest:s});switch(t){case"carpet":r(.07,{vol:.05,freq:300,type:"lowpass"});break;case"tile":r(.03,{vol:.09,freq:3200,q:1.5}),a(900+Math.random()*200,.03,{type:"triangle",vol:.03});break;case"grass":r(.09,{vol:.07,freq:1400,q:.6});break;case"road":r(.06,{vol:.08,freq:900,q:.9});break;case"boot":r(.06,{vol:.1,freq:450,type:"lowpass"}),a(110,.06,{type:"sine",vol:.08});break;default:r(.05,{vol:.07,freq:600,type:"lowpass"}),a(170+Math.random()*30,.05,{type:"sine",vol:.06})}}};var Ir={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},Px=new Set([...Object.keys(Ir),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),Ef=2.4,Yo=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",l=>{Px.has(l.code)&&l.preventDefault(),this.setTouch(!1),!l.repeat&&(Ir[l.code]&&(this.k[Ir[l.code]]=1),(l.code==="Space"||l.code.startsWith("Shift"))&&(this.dashP=!0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!0,this.actP=!0),(l.code==="Escape"||l.code==="KeyP")&&this.emit("pause"),l.code==="KeyR"&&this.emit("restart"),l.code==="KeyM"&&this.emit("mute"),(l.code==="KeyQ"||l.code==="KeyG")&&(this.throwP=!0),(l.code==="KeyC"||l.code==="KeyX")&&(this.smokeP=!0),(l.code==="KeyZ"||l.code==="ControlRight")&&(this.crouchP=!0),this.emit("key",l.code))}),addEventListener("keyup",l=>{Ir[l.code]&&(this.k[Ir[l.code]]=0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",l=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}l.button===0&&(this.act=!0,this.actP=!0),l.button===2&&(this.dashP=!0),l.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",l=>{l.button===0&&(this.act=!1),this.dragLook=!1}),addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{if(this.active&&(this.locked||this.lockFailed&&this.dragLook)){let c=l.movementX||0,h=l.movementY||0;if(performance.now()-(this.lockT||0)<150||Math.abs(c)>260||Math.abs(h)>260)return;this.lx+=c,this.ly+=h}}),addEventListener("pointermove",l=>{l.pointerType==="mouse"&&(l.movementX||l.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let l=this.locked;this.locked=document.pointerLockElement===e,this.locked&&!l&&(this.lockT=performance.now(),this.lx=0,this.ly=0),l&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let i=t.joyzone;i.addEventListener("pointerdown",l=>{if(this.joy.id===-1){l.preventDefault(),this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=0,this.joy.y=0;try{i.setPointerCapture(l.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${l.clientX}px,${l.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),i.addEventListener("pointermove",l=>{if(l.pointerId!==this.joy.id)return;let c=56,h=l.clientX-this.joy.ox,u=l.clientY-this.joy.oy,f=Math.hypot(h,u);f>c&&(this.joy.ox+=h/f*(f-c),this.joy.oy+=u/f*(f-c),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,h=h/f*c,u=u/f*c),this.joy.x=h/c,this.joy.y=u/c,t.knob.style.transform=`translate(calc(-50% + ${h}px),calc(-50% + ${u}px))`});let s=l=>{l.pointerId===this.joy.id&&this.joyEnd()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s);let r=t.lookzone;r.addEventListener("pointerdown",l=>{if(this.look.id===-1){l.preventDefault(),this.look.id=l.pointerId,this.look.x=l.clientX,this.look.y=l.clientY;try{r.setPointerCapture(l.pointerId)}catch{}}}),r.addEventListener("pointermove",l=>{l.pointerId===this.look.id&&(this.lx+=(l.clientX-this.look.x)*Ef,this.ly+=(l.clientY-this.look.y)*Ef,this.look.x=l.clientX,this.look.y=l.clientY)});let a=l=>{l.pointerId===this.look.id&&(this.look.id=-1)};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a);let o=(l,c,h)=>{l.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),l.classList.add("down"),c()});let u=()=>{l.classList.remove("down"),h&&h()};l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u),l.addEventListener("pointerleave",u)};o(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),o(t.bDash,()=>{this.dashP=!0}),o(t.bThrow,()=>{this.throwP=!0}),o(t.bSmoke,()=>{this.smokeP=!0}),o(t.bSneak,()=>{this.crouchP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),i=(this.k.d||0)-(this.k.u||0);if(e||i){let s=Math.hypot(e,i);e/=s,i/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let r=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*r,i=this.joy.y*r}}return t.x=e,t.y=i,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeCrouch(){let t=this.crouchP;return this.crouchP=!1,t}consumeSmoke(){let t=this.smokeP;return this.smokeP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.actP=!1,this.dashP=!1,this.throwP=!1,this.smokeP=!1,this.lx=0,this.ly=0}};var Lr=new Me,Cf=new Ut,Ko=new X,$o=class{constructor(t,e=360){this.max=e,this.mesh=new Vn(new se(1,1,1),new Lt,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,Cf.set(16777215)),t.add(this.mesh),this.list=[]}burst(t,e,i,s={}){let r=s.count??10,a=s.colors||[16777215];for(let o=0;o<r&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,c=Ae(.4,1)*(s.speed??3);this.list.push({x:t+Ae(-1,1)*(s.spread??.1),y:e,z:i+Ae(-1,1)*(s.spread??.1),vx:Math.cos(l)*c,vy:Ae(.5,1)*(s.up??3),vz:Math.sin(l)*c,g:s.gravity??9,life:Ae(.6,1)*(s.life??.7),t:0,s:Ae(.6,1.1)*(s.size??.12),c:a[Math.random()*a.length|0],rx:Ae(0,6),rs:Ae(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?Ae(2,5):0})}}update(t){let e=this.list,i=0;for(let s=e.length-1;s>=0;s--){let r=e[s];if(r.t+=t,r.t>=r.life){e[s]=e[e.length-1],e.pop();continue}}for(let s of e){let r=Math.exp(-s.drag*t);s.vx*=r,s.vz*=r,s.vy-=s.g*t,s.flut&&(s.vy=Math.max(s.vy,-.9),s.vx+=Math.sin(s.t*s.flut*2)*t*1.5),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.03&&(s.y=.03,s.vy*=-.4,s.vx*=.7,s.vz*=.7),s.rx+=s.rs*t;let a=1-s.t/s.life,o=s.s*Math.min(1,a*2.5);Lr.position.set(s.x,s.y,s.z),Lr.rotation.set(s.flut?Math.sin(s.rx)*.8:s.rx,s.rx*.7,s.flut?Math.cos(s.rx*.7)*.6:0),Lr.scale.set(o*s.kx,o*s.ky,o*s.kz),Lr.updateMatrix(),this.mesh.setMatrixAt(i,Lr.matrix),this.mesh.setColorAt(i,Cf.setHex(s.c)),i++}this.mesh.count=i,i&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},Zo=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t*(this.scale??1))}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},Jo=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,i,s,r="",a=1){let o=this.pool.pop();o||(o=document.createElement("div"),this.layer.appendChild(o)),o.className="ft "+r,o.textContent=t,o.style.opacity="1",o.style.display="",o.style.animation="none",o.offsetWidth,o.style.animation="",this.live.push({el:o,x:e,y:i,z:s,t:0,life:a})}update(t,e,i,s){for(let r=this.live.length-1;r>=0;r--){let a=this.live[r];if(a.t+=t,a.y+=t*.9,a.t>=a.life){a.el.style.display="none",this.pool.push(a.el),this.live.splice(r,1);continue}Ko.set(a.x,a.y,a.z).project(e),a.el.style.visibility=Ko.z>1?"hidden":"",a.el.style.transform=`translate(${(Ko.x+1)/2*i}px,${(1-Ko.y)/2*s}px) translate(-50%,-50%)`,a.t>a.life*.6&&(a.el.style.opacity=String(1-(a.t-a.life*.6)/(a.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var jo="safehouse-heist-v1",Ui=null,Qo=!1,kr=!1,ae={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let n=window.CrazyGames&&window.CrazyGames.SDK;if(!n)return;await Promise.race([n.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=n.environment,(this.env==="crazygames"||this.env==="local")&&(Ui=n,this.available=!0)}catch(n){console.warn("[SDK] not available:",n&&n.message)}},_c(n){if(Ui)try{n(Ui)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(n=>n.game.loadingStart())},loadingStop(){this._c(n=>n.game.loadingStop())},gameplayStart(){Qo||(Qo=!0,this._c(n=>n.game.gameplayStart()))},gameplayStop(){Qo&&(Qo=!1,this._c(n=>n.game.gameplayStop()))},happytime(){this._c(n=>n.game.happytime())},ad(n){return new Promise(t=>{if(!Ui||!kr){t(!1);return}let e=!1,i=s=>{e&&this.hooks.adEnd(),t(s)};try{Ui.ad.requestAd(n,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>i(!0),adError:s=>{console.warn("[SDK] ad error",s),i(!1)}})}catch{i(!1)}})},load(){try{let n=null;return Ui&&Ui.data&&(n=Ui.data.getItem(jo)),n==null&&(n=localStorage.getItem(jo)),n&&JSON.parse(n)||{}}catch{return{}}},store(n){let t=JSON.stringify(n);try{Ui&&Ui.data&&Ui.data.setItem(jo,t)}catch{}try{localStorage.setItem(jo,t)}catch{}}};var dn=[{id:"safehouse",num:1,owner:!0,dog:!0,name:"Safe House",load:()=>import("./c-2D5N5WY6.js")},{id:"bank",num:2,name:"The Bank",unlock:"safehouse",load:()=>import("./c-HIRFWWGO.js")},{id:"jewelry",num:3,name:"Jewelry Store",unlock:"bank",load:()=>import("./c-3PT7KB6M.js")},{id:"museum",num:4,dog:!0,name:"The Museum",unlock:"jewelry",load:()=>import("./c-OVTMZ4HH.js")},{id:"casino",num:5,name:"The Casino",unlock:"museum",load:()=>import("./c-V5N5NTXB.js")},{id:"penthouse",num:6,owner:!0,name:"The Penthouse",unlock:"casino",load:()=>import("./c-57OBLCMX.js")},{id:"train",num:7,name:"Night Train",unlock:"penthouse",load:()=>import("./c-DEBP7OHP.js")}],Uc={};async function Rf(n){return Uc[n]||(Uc[n]=(await dn[n].load()).default),Uc[n]}var Ix={sleeve:3123354,sleeve2:2526336,cuff:2060134,glove:2763837,glove2:3816786,bar:14168890,barHi:16747146,band:15905076},tl=class{constructor(){this.scene=new Gn,this.camera=new $e(60,1,.01,10),this.hemi=new qn(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Yn(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new Te({vertexColors:!0});this.root=new Ot,this.scene.add(this.root),this.R=new Ot,this.R.position.set(.2,-.27,0),this.R.rotation.y=.16,this.root.add(this.R),this.L=new Ot,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L),this.setOutfit(null),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}setOutfit(t){t=t||Ix;let e=this.mat;for(let c of this.parts||[])c.parent.remove(c),c.geometry.dispose();let i=c=>{let h=new Vt;if(h.box(0,-.075,-.285,.14,.14,.17,t.sleeve,{faces:63}),h.box(0,-.082,-.24,.152,.152,.05,t.sleeve2,{faces:63}),h.box(0,-.08,-.36,.148,.148,.1,t.sleeve,{faces:63}),h.box(0,-.082,-.44,.155,.155,.07,t.cuff,{faces:63}),h.box(0,-.082,-.448,.158,.02,.05,t.band,{faces:63}),c){h.box(0,-.065,-.5,.12,.13,.05,t.glove,{faces:63}),h.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),h.box(0,-.07,-.57,.15,.06,.13,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)h.box(-.055+u*.037,-.072,-.67,.032,.05,.09,t.glove,{faces:63,top:t.glove2});h.box(.09,-.07,-.56,.045,.05,.08,t.glove,{faces:63,ry:-.5})}else{h.box(0,-.07,-.56,.13,.12,.14,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)h.box(-.045+u*.03,-.01,-.6,.027,.03,.05,t.glove2,{faces:63});h.box(-.07,-.04,-.55,.04,.05,.08,t.glove,{faces:63})}return h.build()},s=new _t(i(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let r=new Vt,a=12108496,o=8029334;r.box(0,-.2,0,.034,.08,.034,a,{faces:63}),r.box(0,-.235,.012,.03,.04,.02,o,{faces:63}),r.box(0,-.12,0,.042,.42,.042,t.bar,{faces:63}),r.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),r.box(0,.3,0,.038,.07,.038,a,{faces:63}),r.box(0,.36,-.035,.036,.036,.1,a,{faces:63,top:14673647}),r.box(0,.33,-.095,.034,.05,.03,a,{faces:63}),r.box(0,.305,-.1,.03,.03,.022,a,{faces:63}),r.box(.02,-.05,.022,.006,.3,.002,t.barHi,{faces:16}),this.bar=new _t(r.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.75,.95,.75),this.bar.rotation.set(-.35,0,-.25),this.R.add(this.bar);let l=new _t(i(!0),e);l.scale.set(.56,.6,1),this.L.add(l),this.parts=[s,this.bar,l]}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let i=this.R,s=this.L;this.swX=Se(this.swX,Fe(-e.lookX*9e-4,-.06,.06),10,t),this.swY=Se(this.swY,Fe(e.lookY*9e-4,-.06,.06),10,t),this.down=Se(this.down,e.busted?.7:0,6,t),this.kick=Se(this.kick,e.dash?1:0,14,t);let r=e.move,a=Math.cos(e.bob)*.014*r,o=-Math.abs(Math.sin(e.bob))*.02*r+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+a,this.swY+o-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let l=.14,c=0,h=0;if(e.punch>0){let f=1-e.punch;f<.3?l=f/.3*.9:f<.55?l=.9-(f-.3)/.25*1.9:l=-1+(f-.55)/.45*1.14,c=-l*.3}else e.crack&&(l=.35+Math.sin(this.t*38)*.08,c=Math.sin(this.t*23)*.1,h=-.06);i.rotation.x=Se(i.rotation.x,l,e.punch>0?40:14,t),i.rotation.z=Se(i.rotation.z,c,20,t),i.position.z=Se(i.position.z,h,12,t);let u=e.grab>0||e.crack?1:0;this.lIn=Se(this.lIn,u,u?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var kn=[["Rookie",0],["Pickpocket",40],["Burglar",120],["Safecracker",250],["Cat Burglar",450],["Infiltrator",750],["Phantom",1150],["Heist Pro",1700],["Vault Breaker",2400],["Mastermind",3300],["Kingpin",4500],["Legend",6e3]];function el(n){let t=0;for(;t+1<kn.length&&n>=kn[t+1][1];)t++;let e=kn[t][1],i=t+1<kn.length?kn[t+1][1]:e;return{i:t,name:kn[t][0],lvl:t+1,frac:i>e?(n-e)/(i-e):1,next:t+1<kn.length?kn[t+1][0]:null,toNext:i-n}}var Pf=(n,t,e)=>n?Math.max(10,Math.round(t/100)):4+Math.round((e||0)/250);var If=n=>String(n).padStart(2,"0"),Dr=(n=new Date)=>`${n.getFullYear()}${If(n.getMonth()+1)}${If(n.getDate())}`,il=()=>{let n=new Date;return n.setDate(n.getDate()-1),Dr(n)},Lx=(n=new Date)=>n.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Oc=[{id:"paranoid",name:"Paranoid Guards",desc:"Guards see 30% further",apply:n=>n.guards.forEach(t=>{t.range*=1.3})},{id:"insomniac",needs:"owner",name:"Insomniac Owner",desc:"The owner is awake and patrolling",apply:n=>n.guards.forEach(t=>{if(t.state!=="sleep")return;let e=t.def.path[0];t.state="patrol",t.x=e[0]+.5,t.z=e[1]+.5,t.wp=1,t.c.root.rotation.x=0,t.c.root.position.y=0})},{id:"goldrush",name:"Gold Rush",desc:"Gold and jewels are worth 3x",apply:n=>{for(let t of n.loot)(t.type==="gold"||t.type==="jewel")&&(n.lootTotal+=t.value*2,t.value*=3)}},{id:"butter",name:"Butterfingers",desc:"No coins this time",apply:n=>{n.coinsLeft=0}},{id:"rush",name:"Rapid Response",desc:"Police arrive in 20s",apply:n=>{n.alarmTotal=20}},{id:"hound",needs:"dog",name:"Hungry Hound",desc:"The dog is 50% faster",apply:n=>n.dogs.forEach(t=>{t.mul=1.5})}];function Lf(n=[{idx:0,owner:!0,dog:!0}]){let t=Dr(),e=un(parseInt(t,10)*7919),i=n[e()*n.length|0]||n[0],s=Oc.filter(a=>!a.needs||i[a.needs]),r=s[e()*s.length|0];return{key:t,label:Lx(),mutator:r,level:i.idx,seed:e()*1e9|0}}function Fc(){let n=new Date,t=new Date(n);t.setHours(24,0,0,0);let e=Math.max(0,(t-n)/1e3),i=Math.floor(e/3600),s=Math.floor(e%3600/60);return i?`${i}h ${s}m`:`${s}m`}var Os=[{id:"first",icon:"\u{1F4B0}",name:"First Score",desc:"Escape with the stash",check:(n,t)=>t.win},{id:"ghost",icon:"\u{1F47B}",name:"Ghost",desc:"Escape without ever being spotted",check:(n,t)=>t.win&&t.ghost},{id:"speed",icon:"\u26A1",name:"Speed Demon",desc:"Escape in under 45 seconds",check:(n,t)=>t.win&&t.time<45},{id:"pacifist",icon:"\u{1F54A}\uFE0F",name:"Pacifist",desc:"Escape without knocking anyone out",check:(n,t)=>t.win&&t.kos===0},{id:"sweep",icon:"\u{1F9F9}",name:"Clean Sweep",desc:"Escape with 100% of the loot",check:(n,t)=>t.win&&t.frac>=.999},{id:"contracts",icon:"\u{1F4CB}",name:"Overachiever",desc:"Complete all 3 contracts in one run",check:(n,t)=>t.win&&t.contractsDone>=3},{id:"bank",icon:"\u{1F3E6}",name:"Bank Job",desc:"Escape from the Bank",check:(n,t)=>t.win&&t.level==="bank"},{id:"phantom",icon:"\u{1F3AD}",name:"Phantom of the Vault",desc:"Ghost the Bank",check:(n,t)=>t.win&&t.level==="bank"&&t.ghost},{id:"jewelry",icon:"\u{1F48E}",name:"Night Owl",desc:"Escape from the Jewelry Store",check:(n,t)=>t.win&&t.level==="jewelry"},{id:"radio3",icon:"\u{1F4FB}",name:"Smooth Talker",desc:"Fake 3 radio check-ins (total)",check:n=>(n.radio||0)>=3},{id:"museum",icon:"\u{1F3DB}\uFE0F",name:"Night at the Museum",desc:"Escape from the Museum",check:(n,t)=>t.win&&t.level==="museum"},{id:"penthouse",icon:"\u{1F303}",name:"Sky High",desc:"Escape from the Penthouse",check:(n,t)=>t.win&&t.level==="penthouse"},{id:"laser",icon:"\u{1F534}",name:"Laser Dancer",desc:"Escape the Penthouse with the power on and no lasers tripped",check:(n,t)=>t.win&&t.level==="penthouse"&&!t.power&&t.lasers===0},{id:"vent5",icon:"\u{1F573}\uFE0F",name:"Duct Rat",desc:"Crawl through 5 air vents (total)",check:n=>(n.vents||0)>=5},{id:"inside",icon:"\u{1F574}",name:"Inside Man",desc:"Escape while wearing a guard uniform",check:(n,t)=>t.win&&t.disguised},{id:"train",icon:"\u{1F682}",name:"Great Train Robbery",desc:"Escape from the Night Train",check:(n,t)=>t.win&&t.level==="train"},{id:"casino",icon:"\u{1F3B0}",name:"High Roller",desc:"Escape from the Casino",check:(n,t)=>t.win&&t.level==="casino"},{id:"pick10",icon:"\u{1F45B}",name:"Sticky Fingers",desc:"Pickpocket 10 guards (total)",check:n=>(n.picks||0)>=10},{id:"iron",icon:"\u{1F6E1}\uFE0F",name:"Iron Will",desc:"Escape on Ironman",check:(n,t)=>t.win&&t.diff==="ironman"},{id:"hard",icon:"\u{1F480}",name:"Hardened",desc:"Escape on Hard",check:(n,t)=>t.win&&t.diff==="hard"},{id:"ko10",icon:"\u{1F94A}",name:"Lights Out",desc:"Knock out 10 guards (total)",check:n=>n.kos>=10},{id:"loot50",icon:"\u{1F4B5}",name:"Big Spender",desc:"Steal $50,000 in total",check:n=>n.loot>=5e4},{id:"loot250",icon:"\u{1F911}",name:"Fat Stacks",desc:"Steal $250,000 in total",check:n=>n.loot>=25e4},{id:"hide5",icon:"\u{1F6AA}",name:"Wardrobe Ninja",desc:"Hide in wardrobes 5 times",check:n=>n.hides>=5},{id:"smoke3",icon:"\u{1F4A8}",name:"Now You See Me",desc:"Use 3 smoke bombs",check:n=>n.smokes>=3},{id:"streak3",icon:"\u{1F525}",name:"Regular",desc:"Reach a 3 day daily streak",check:(n,t,e)=>!!(e.streak&&e.streak.n>=3)},{id:"busted10",icon:"\u{1F693}",name:"Frequent Flyer",desc:"Get busted 10 times",check:n=>n.busts>=10}],zc=()=>({runs:0,escapes:0,busts:0,loot:0,kos:0,hides:0,smokes:0,coins:0,contracts:0,best:{}});function Bc(n,t){let e=n.stats=Object.assign(zc(),n.stats||{});if(e.runs++,t.win){e.escapes++,e.loot+=t.loot,e.contracts+=t.contractsDone;let r=e.best[t.level];(!r||t.time<r)&&(e.best[t.level]=t.time)}else e.busts++;e.radio=(e.radio||0)+(t.radio||0),e.picks=(e.picks||0)+(t.picks||0),e.vents=(e.vents||0)+(t.vents||0),e.kos+=t.kos,e.hides+=t.hides,e.smokes+=t.smokes,e.coins+=t.coins;let i=n.ach=n.ach||{},s=[];for(let r of Os)!i[r.id]&&r.check(e,t,n)&&(i[r.id]=Date.now(),s.push(r));return s}var Dn=[{id:"classic",name:"Classic",sleeve:3123354,glove:2763837,bar:14168890,band:15905076},{id:"midnight",name:"Midnight",sleeve:3095138,glove:1447711,bar:9082020,band:6272255,need:1},{id:"hazard",name:"Hazard",sleeve:16747050,glove:2763837,bar:15911244,band:2237487,need:3},{id:"camo",name:"Woodland",sleeve:5929530,glove:5913126,bar:4872746,band:13213795,ach:"ghost"},{id:"bubblegum",name:"Bubblegum",sleeve:16748480,glove:16052714,bar:16732064,band:16777215,ach:"pacifist"},{id:"tux",name:"Black Tie",sleeve:2237487,glove:16052714,bar:11745617,band:16777215,ach:"bank"},{id:"neon",name:"Neon Laser",sleeve:1709104,glove:789014,bar:16722522,band:3866576,ach:"laser"},{id:"royal",name:"Royal",sleeve:6965976,glove:14267482,bar:15250234,band:14267482,need:6},{id:"golden",name:"Golden Boy",sleeve:15250234,glove:15914122,bar:16766810,band:16777215,need:10}],Hc=n=>({sleeve:n.sleeve,sleeve2:Tt(n.sleeve,.85),cuff:Tt(n.sleeve,.66),glove:n.glove,glove2:Tt(n.glove,1.35)||3816786,bar:n.bar,barHi:Tt(n.bar,1.35),band:n.band});function Fs(n,t){let e=t.ach||{},i=Object.keys(e).length;return n.ach?!!e[n.ach]:!n.need||i>=n.need}var kf=(n,t)=>n.ach?`Achievement: ${(t.find(e=>e.id===n.ach)||{}).name}`:`${n.need} ${n.need===1?"trophy":"trophies"}`;var Zi=[{text:["Move with WASD","Drag the left side to move"],done:n=>Math.hypot(n.player.x-n.L.start.x-.5,n.player.z-n.L.start.y-.5)>1.6},{text:["Move the mouse to look around","Drag the right side to look around"],done:n=>n.lookTotal>1.2},{text:["Walk over cash to grab it","Walk over cash to grab it"],done:n=>n.lootGot>0},{text:["Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)","Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)"],done:n=>n.kos>0||n.doors.some(t=>t.type==="lock"&&(t.open||Math.hypot(n.player.x-t.x-.5,n.player.z-t.y-.5)<2.2))},{text:["Pick the lock: press E when the pin is in the green","Pick the lock: tap \u270B when the pin is in the green"],done:n=>n.doors.every(t=>t.type!=="lock"||t.open)},{text:["Hold E at the safe to crack it","Hold \u270B at the safe to crack it"],done:n=>n.hasStash},{text:["Run back to the van with the stash!","Run back to the van with the stash!"],done:n=>n.state==="escape"}];var V=n=>document.getElementById(n),kx={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],thunder:["\u26A1 Thunder covers your noise for a moment. Dash now!","\u26A1 Thunder covers your noise for a moment. Dash now!"],uniform:["Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar","Hold \u270B on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar"],vent:["Air vent! E to crawl through to another room, unseen","Air vent! Tap the hand to crawl through, unseen"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? E / Click = knock out!","Behind a guard? Tap the hand = knock out!"],safe:["Hold E / Mouse to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],dog:["A guard dog! It follows your scent and barks. Coins distract it.","A guard dog! It follows your scent and barks. Coins distract it."],clerk:["The clerk is running for the alarm button! Knock them out first!","The clerk is running for the alarm button! Knock them out first!"],camhit:["Security camera! Hit it with a thrown coin (Q) to knock it out for 12s","Security camera! Hit it with a thrown coin to knock it out for 12s"],pocket:["Behind a guard: tap E to knock out, HOLD E to pickpocket his wallet (or spare keycard)","Behind a guard: tap \u270B to knock out, HOLD \u270B to pickpocket his wallet"],slot:["Slot machine! Hold E to hit a noisy jackpot that lures guards away","Slot machine! Hold \u270B to hit a noisy jackpot that lures guards away"],spot:["Spotlight! Stay out of the moving light pools, or cut the power at the breaker","Spotlight! Stay out of the moving light pools, or cut the power at the breaker"],radio:["A knocked-out guard's radio is calling! Hold E next to him to answer, or backup comes","A knocked-out guard's radio is calling! Hold \u270B next to him to answer, or backup comes"],case:["Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm","Hold \u270B to smash a display case. Loud! Guards who see a broken case raise the alarm"],pick:["Locked! Press E when the pin is in the green zone. Slips are noisy!","Locked! Tap the hand when the pin is in the green zone. Slips are noisy!"],laser:["Laser grid! Time your run, or cut the power at the breaker in the security room","Laser grid! Time your run, or cut the power at the breaker in the security room"],key:["The vault door needs a keycard. Search the offices!","The vault door needs a keycard. Search the offices!"],door:["Got the keycard! Swipe it at the vault door","Got the keycard! Swipe it at the vault door"],drill:["Cracking the vault is LOUD. Guards will hear it!","Cracking the vault is LOUD. Guards will hear it!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],heavy:["Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them","Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them"],sneak:["Z: crouch-sneak. Slower and quieter, and crouching behind counters or tables hides you","Tap \u{1F9B6} to sneak. Slower and quieter, and crouching behind low cover hides you"],smoke:["C: drop a smoke bomb. Guards cannot see into or through the cloud!","Tap \u{1F4A8} to drop a smoke bomb. Guards cannot see through it!"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},Gc=class{constructor(){this.els={canvas:V("c"),fxl:V("fxl"),joyzone:V("joyzone"),lookzone:V("lookzone"),joy:V("joy"),knob:V("knob"),bAct:V("bAct"),bDash:V("bDash"),bThrow:V("bThrow"),bSmoke:V("bSmoke"),bSneak:V("bSneak")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new X(15,30,40),this.camLook=new X(15,0,9),this._f=new X,this._d=new X,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await ae.init(),ae.loadingStart(),ae.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},ae.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=ae.load(),this.save.best=this.save.best||{},this.diff=Ds[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new Uo({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(this.dpr),e.toneMapping=gr,e.toneMappingExposure=1.15,this.scene=new Gn,this.scene.background=new Ut(16038282),this.scene.fog=new tr(15778970,16,70),this.sky=Ju(),this.scene.add(this.sky),this.nightSky=ju(),this.scene.add(this.nightSky),e.autoClear=!1,this.camera=new $e(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new tl,this.hemi=new qn(16770760,8022152,1.8),this.scene.add(this.hemi);let i=this.sun=new Yn(16769208,1.4);i.position.set(-4,10,6),this.scene.add(i),this.audio=new qo;let s={ko:35,zap:[60,40,60],alert:25,bust:[90,60,160],alarm:[120,80,120],safe:[30,40,50],dash:12,glass:40,thunder:[20,40,60],clank:25,jackpot:[20,30,20,30,40],win:[30,50,80]},r=this.audio.play.bind(this.audio);this.audio.play=(a,o)=>{r(a,o);let l=s[a];if(l&&this.input&&this.input.touch&&this.shake&&this.shake.scale>0&&navigator.vibrate)try{navigator.vibrate(l)}catch{}},this.audio.setMuted(!!this.save.muted),this.input=new Yo(this.els),this.particles=new $o(this.scene),this.shake=new Zo,this.floaters=new Jo(this.els.fxl),this.dust=new zo(this.scene),this.rain=new Bo(this.scene),this.boltK=0,this.applySettings(),this.game=new Xo(this),this.levelIdx=0,await this.useLevel(0),this.bindUI(),this.applyOutfit(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),ae.loadingStop(),V("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,i)=>V(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),i()});t("bPlay",()=>this.playSel());for(let e of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","daily"])V(e).addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.selectPin(e)});for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",i=>{if(i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),e.dataset.d==="ironman"&&!this.ironUnlocked()){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.diff=e.dataset.d,this.save.diff=this.diff,ae.store(this.save),this.showMenu()});t("bResume",()=>this.resume()),t("bSet",()=>this.showSettings()),t("bPSet",()=>this.showSettings()),t("bSetBack",()=>{this.setFrom==="pause"?(this.state="pause",this.screen("pause")):this.showMenu()});for(let e of document.querySelectorAll("#settings input"))e.addEventListener("input",()=>this.readSettings());t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>{this.mode==="daily"?this.showMenu():this.levelIdx===0&&this.bankUnlocked()?this.start("classic",1):this.levelIdx===1&&this.jewelryUnlocked()?this.start("classic",2):this.levelIdx===2&&this.museumUnlocked()?this.start("classic",3):this.levelIdx===3&&this.casinoUnlocked()?this.start("classic",4):this.levelIdx===4&&this.penthouseUnlocked()?this.start("classic",5):this.levelIdx===5&&this.trainUnlocked()?this.start("classic",6):this.showSoon()}),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bTrophy",()=>this.showTrophies()),t("bOutfit",()=>this.showOutfits()),t("bOfBack",()=>this.showMenu()),t("bTut",()=>this.start("tutorial",0)),V("tut").addEventListener("pointerdown",e=>{this.input.touch&&this.game.tut&&(e.stopPropagation(),this.skipTutorial())}),t("bTrBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{e==="KeyT"&&this.state==="play"&&this.game.tut&&this.skipTutorial(),(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.playSel()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}screen(t){for(let i of document.querySelectorAll(".screen"))i.classList.toggle("hidden",i.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),V("fp").classList.toggle("hidden",!e),V("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),V("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){this.lastTutLevel=null,ae.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[Ni("safehouse",this.diff)],e=this.bankUnlocked(),i=this.save.best[Ni("bank",this.diff)];V("lvl2").classList.toggle("lock",!e),V("lvl2art").textContent=e?"\u{1F3E6}":"\u{1F512}",V("lvl2stars").innerHTML=e?this.starsHTML(i?i.stars:0):"",V("lvl2best").textContent=e?i?"Best "+ze(i.score):"New!":"Escape Safe House to unlock";let s=this.jewelryUnlocked(),r=this.save.best[Ni("jewelry",this.diff)];V("lvl3").classList.toggle("lock",!s),V("lvl3art").textContent=s?"\u{1F48E}":"\u{1F512}",V("lvl3stars").innerHTML=s?this.starsHTML(r?r.stars:0):"";let a=this.casinoUnlocked(),o=this.save.best[Ni("casino",this.diff)];V("lvl5").classList.toggle("lock",!a),V("lvl5art").textContent=a?"\u{1F3B0}":"\u{1F512}",V("lvl5stars").innerHTML=a?this.starsHTML(o?o.stars:0):"",V("lvl5best").textContent=a?o?"Best "+ze(o.score):"New!":"Escape the Museum to unlock";let l=this.trainUnlocked(),c=this.save.best[Ni("train",this.diff)];V("lvl7").classList.toggle("lock",!l),V("lvl7art").textContent=l?"\u{1F682}":"\u{1F512}",V("lvl7stars").innerHTML=l?this.starsHTML(c?c.stars:0):"",V("lvl7best").textContent=l?c?"Best "+ze(c.score):"New!":"Escape the Penthouse to unlock";let h=this.penthouseUnlocked(),u=this.save.best[Ni("penthouse",this.diff)];V("lvl6").classList.toggle("lock",!h),V("lvl6art").textContent=h?"\u{1F303}":"\u{1F512}",V("lvl6stars").innerHTML=h?this.starsHTML(u?u.stars:0):"",V("lvl6best").textContent=h?u?"Best "+ze(u.score):"New!":"Escape the Casino to unlock";let f=this.museumUnlocked(),d=this.save.best[Ni("museum",this.diff)];V("lvl4").classList.toggle("lock",!f),V("lvl4art").textContent=f?"\u{1F3DB}\uFE0F":"\u{1F512}",V("lvl4stars").innerHTML=f?this.starsHTML(d?d.stars:0):"",V("lvl4best").textContent=f?d?"Best "+ze(d.score):"New!":"Escape the Jewelry Store to unlock",V("lvl3best").textContent=s?r?"Best "+ze(r.score):"New!":"Escape the Bank to unlock",this.renderSel(),this.diff==="ironman"&&!this.ironUnlocked()&&(this.diff="normal");for(let y of document.querySelectorAll("#diff button"))y.classList.toggle("on",y.dataset.d===this.diff),y.dataset.d==="ironman"&&(y.classList.toggle("lock",!this.ironUnlocked()),y.title=this.ironUnlocked()?"Ironman: x2.5 score, 1 coin, no smoke, 15s police":"Escape any heist on Hard to unlock");V("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),V("lvl1best").textContent=t?"Best "+ze(t.score):"New!",this.daily=this.todays();let g=(this.save.daily||{})[this.daily.key];V("dMut").textContent=this.daily.mutator.name;{let y=new Date;V("dArt").innerHTML=`<span style="font-size:20px">${y.getDate()}</span>`}V("dDesc").textContent=this.daily.mutator.desc+" \xB7 "+dn[this.daily.level].name,V("dBest").textContent=(g?"Today "+ze(g.score):this.daily.label)+(this.save.streak&&this.save.streak.n>1&&(this.save.streak.last===this.daily.key||this.save.streak.last===il())?` \xB7 \u{1F525}${this.save.streak.n}`:""),this.screen("menu")}runRecord(t,e){let i=this.game;return{win:t,level:this.level.id,diff:this.mode==="daily"?"daily":this.diff,ghost:t&&e.ghost,time:i.time,kos:i.kos,frac:i.lootGot/i.lootTotal,loot:i.lootGot,contractsDone:t?e.contracts.filter(s=>s.st==="ok").length:0,hides:i.hidesUsed,smokes:i.smokesUsed,coins:i.coinsThrown,radio:i.radioFaked,picks:i.picks,vents:i.ventsUsed,disguised:i.disguiseT>0,lasers:i.lasersTripped,power:i.powerOff}}applyOutfit(){let t=Dn.find(e=>e.id===this.save.outfit);return(!t||!Fs(t,this.save))&&(t=Dn[0]),this.vm.setOutfit(Hc(t)),t}showOutfits(){ae.gameplayStop(),this.state="outfits";let t=this.applyOutfit(),e=i=>"#"+i.toString(16).padStart(6,"0");V("ofGrid").innerHTML=Dn.map(i=>{let s=Fs(i,this.save);return`<button class="of ${s?"":"lock"} ${i.id===t.id?"on":""}" data-id="${i.id}">
        <span class="sw"><i style="background:${e(i.sleeve)}"></i><i style="background:${e(i.glove)}"></i><i style="background:${e(i.bar)}"></i></span>
        <b>${i.name}</b><small>${s?i.id===t.id?"EQUIPPED":"Tap to wear":"\u{1F512} "+kf(i,Os)}</small></button>`}).join("");for(let i of document.querySelectorAll("#ofGrid .of"))i.addEventListener("click",s=>{s.stopPropagation();let r=Dn.find(a=>a.id===i.dataset.id);if(!Fs(r,this.save)){this.audio.play("nope"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake");return}this.audio.play("pick",4),this.save.outfit=r.id,ae.store(this.save),this.showOutfits()});this.screen("outfits")}showTrophies(){ae.gameplayStop(),this.state="trophies";let t=Object.assign(zc(),this.save.stats||{}),e=this.save.ach||{},i=r=>t.best[r]!=null?Is(t.best[r]):"\u2014",s=[["Heists",t.runs],["Escapes",t.escapes],["Busted",t.busts],["Total loot",ze(t.loot)],["Guards KO",t.kos],["Contracts",t.contracts],["Best Safe House",i("safehouse")],["Best Bank",i("bank")],["Best Jewelry",i("jewelry")],["Best Museum",i("museum")],["Best Casino",i("casino")],["Best Penthouse",i("penthouse")],["Best Train",i("train")]];V("trStats").innerHTML=s.map(([r,a])=>`<div><small>${r}</small><b>${a}</b></div>`).join(""),V("trAch").innerHTML=Os.map(r=>`<div class="ach ${e[r.id]?"on":""}"><i>${e[r.id]?r.icon:"\u{1F512}"}</i><b>${r.name}</b><small>${r.desc}</small></div>`).join(""),V("trCount").textContent=`${Object.keys(e).filter(r=>Os.some(a=>a.id===r)).length} / ${Os.length}`,this.screen("trophies")}showAchToast(t){V("rAch").innerHTML=t.length?"\u{1F3C6} Unlocked: "+t.map(e=>`<b>${e.icon} ${e.name}</b>`).join(" \xB7 "):"",V("rAch").classList.toggle("hidden",!t.length),t.length&&setTimeout(()=>this.audio.play("contract"),1600)}pinLocked(t){return t==="lvl2"?!this.bankUnlocked():t==="lvl3"?!this.jewelryUnlocked():t==="lvl4"?!this.museumUnlocked():t==="lvl5"?!this.casinoUnlocked():t==="lvl6"?!this.penthouseUnlocked():t==="lvl7"?!this.trainUnlocked():!1}selectPin(t){if(this.sel=t,this.save.sel=t,this.pinLocked(t)){let e=V(t);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}this.renderSel()}renderSel(){let t=this.sel||this.save.sel||"lvl1";V(t)||(t="lvl1"),this.sel=t;for(let u of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","daily"])V(u).classList.toggle("on",u===t);let e=V(t),i=this.pinLocked(t);V("selName").textContent=t==="daily"?"Daily: "+V("dMut").textContent:e.querySelector(".t").textContent;let s=e.querySelector(".stars");V("selStars").innerHTML=s?s.innerHTML:"";let r=!!(this.save.daily||{})[this.daily&&this.daily.key];V("selSub").textContent=t==="daily"?V("dDesc").textContent+" \xB7 "+V("dBest").textContent+(r?` \xB7 new Daily in ${Fc()}`:""):e.querySelector(".best").textContent;let a=[];if(!i&&t!=="daily"&&this.save.tutDone){let u=dn[{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6}[t]].id,f=(this.save.best[Ni(u,this.diff)]||{stars:0}).stars;f===0?a.push("Escape to earn your first \u2605"):f<3&&a.push("Next \u2605: grab 70% loot \xB7 or never get spotted")}let o=this.save.streak;o&&o.n>=1&&o.last===il()&&a.unshift(`\u{1F525} Play today's Daily to keep your ${o.n}-day streak`);let l=Object.keys(this.save.ach||{}).length,c=Dn.filter(u=>u.need&&u.need>l).sort((u,f)=>u.need-f.need)[0];c&&this.save.tutDone&&a.push(`\u{1F9E4} ${c.need-l} more troph${c.need-l===1?"y":"ies"} \u2192 ${c.name} outfit`),V("selGoal").textContent=a.slice(0,2).join("  \xB7  "),V("selGoal").classList.toggle("hidden",!a.length),V("bPlay").textContent=i?"\u{1F512} LOCKED":"PLAY",V("bPlay").classList.toggle("dis",i),V("daily").classList.toggle("done",r),V("bPlay").classList.toggle("pulse",!i&&!this.save.tutDone&&!this.runs);let h=0;for(let u of["safehouse","bank","jewelry","museum","casino","penthouse","train"])h+=Math.max(...["","_easy","_hard","_ironman"].map(f=>(this.save.best[u+f]||{stars:0}).stars));V("starTotal").textContent=`\u2605 ${h}/21`;{let u=el(this.save.xp||0);V("rankChip").innerHTML=`\u{1F396} ${u.name}<i style="width:${(u.frac*100).toFixed(0)}%"></i>`,V("rankChip").title=u.next?`${u.toNext} XP to ${u.next}`:"Max rank"}}playSel(){let t=this.sel||"lvl1";if(this.pinLocked(t)){this.audio.play("nope"),this.selectPin(t);return}t==="daily"?this.start("daily"):this.start("classic",{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6}[t])}drawRecap(t,e){let i=V(t),s=this.game,r=s.L,a=this.mmBase;if(!i||!a)return;let o=this.mmS,l=Math.min(260/a.width,170/a.height);i.width=Math.round(a.width*l*2),i.height=Math.round(a.height*l*2);let c=i.getContext("2d"),h=i.width/a.width*o,u=s.trail.slice(),f=s.marks.slice();u.push([s.player.x,s.player.z,u.length?u[u.length-1][2]:0]);let d=performance.now(),g=1600,y=this.recapId=(this.recapId||0)+1,p=(_,w)=>{let T=_.x*h,x=_.z*h,M=5.5;c.globalAlpha=w,_.t==="ko"?(c.strokeStyle="#c77dff",c.lineWidth=3,c.beginPath(),c.moveTo(T-M,x-M),c.lineTo(T+M,x+M),c.moveTo(T+M,x-M),c.lineTo(T-M,x+M),c.stroke()):_.t==="alarm"||_.t==="caught"?(c.fillStyle="#ff3b4e",c.beginPath(),c.arc(T,x,M+2,0,6.3),c.fill(),c.fillStyle="#fff",c.font="bold 11px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(_.t==="caught"?"\u2716":"!",T,x+1)):_.t==="safe"?(c.fillStyle="#ffd23f",c.fillRect(T-M,x-M,M*2,M*2),c.strokeStyle="#1c1330",c.lineWidth=2,c.strokeRect(T-M,x-M,M*2,M*2)):(c.fillStyle=_.t==="cash"?"#4fe0a0":"#ffc94a",c.beginPath(),c.arc(T,x,_.t==="cash"?3:4.5,0,6.3),c.fill()),c.globalAlpha=1},m=()=>{if(y!==this.recapId)return;let _=Math.min(1,(performance.now()-d)/g),w=Math.max(1,Math.floor(u.length*_));c.drawImage(a,0,0,i.width,i.height),c.fillStyle="rgba(28,19,48,.35)",c.fillRect(0,0,i.width,i.height),c.lineCap="round",c.lineJoin="round",c.lineWidth=3.5;for(let M=1;M<w;M++){let k=u[M-1],P=u[M];c.strokeStyle=P[2]?"#ff5a6a":"#4fe0a0",c.beginPath(),c.moveTo(k[0]*h,k[1]*h),c.lineTo(P[0]*h,P[1]*h),c.stroke()}let T=Math.floor(f.length*_);for(let M=0;M<f.length;M++)(M<T||_>=1)&&p(f[M],1);let x=u[w-1];x&&(c.fillStyle="#fff6e8",c.strokeStyle="#1c1330",c.lineWidth=2,c.beginPath(),c.arc(x[0]*h,x[1]*h,5,0,6.3),c.fill(),c.stroke()),_<1&&requestAnimationFrame(m)};m();let v=u.length?Math.round(u.filter(_=>_[2]).length/u.length*100):0,b=V(t+"Lg");b&&(b.innerHTML=`<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${v}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">\u2715</b> KO`)}showSoon(){ae.gameplayStop(),this.state="soon",V("soonName").textContent="More heists",V("soonList").innerHTML=["Harbor container yard","Mayor's mansion gala","Armored truck ambush"].map(t=>`<li>${t}</li>`).join(""),this.screen("soon")}todays(){let t=Lf(dn.map((i,s)=>({idx:s,owner:!!i.owner,dog:!!i.dog})).filter(i=>this.levelUnlocked(i.idx))),e=this.save.dailyPick;if(e&&e.key===t.key){let i=Oc.find(s=>s.id===e.mut);i&&(t.level=e.level,t.mutator=i)}return t}levelUnlocked(t){return[()=>!0,()=>this.bankUnlocked(),()=>this.jewelryUnlocked(),()=>this.museumUnlocked(),()=>this.casinoUnlocked(),()=>this.penthouseUnlocked(),()=>this.trainUnlocked()][t]?.()||!1}trainUnlocked(){let t=this.save.best;return!!(t.penthouse||t.penthouse_easy||t.penthouse_hard||t.penthouse_ironman||this.save.trainOpen)}penthouseUnlocked(){let t=this.save.best;return!!(t.casino||t.casino_easy||t.casino_hard||t.casino_ironman||this.save.penthouseOpen)}casinoUnlocked(){let t=this.save.best;return!!(t.museum||t.museum_easy||t.museum_hard||t.museum_ironman||this.save.casinoOpen)}museumUnlocked(){let t=this.save.best;return!!(t.jewelry||t.jewelry_easy||t.jewelry_hard||t.jewelry_ironman||this.save.museumOpen)}jewelryUnlocked(){let t=this.save.best;return!!(t.bank||t.bank_easy||t.bank_hard||t.bank_ironman||this.save.jewelryOpen)}ironUnlocked(){return Object.keys(this.save.best).some(t=>t.endsWith("_hard")||t.endsWith("_ironman"))}bankUnlocked(){let t=this.save.best;return!!(t.safehouse||t.safehouse_easy||t.safehouse_hard||t.safehouse_ironman||this.save.bankOpen)}async useLevel(t){if(this.loadedIdx===t)return;this.level=await Rf(t),this.game.load(this.level),this.buildMinimap(),this.loadedIdx=t;let e=!!this.level.night;this.scene.background.setHex(e?1317427:16038282),this.scene.fog.color.setHex(e?1712704:15778970),this.scene.fog.near=e?10:16,this.scene.fog.far=e?48:70,this.sky.material.color.setHex(e?2502746:16777215),this.nightSky.visible=e,this.rain.setLevel(this.level.rain?this.game.L:null),this.dust.points.material.color.setHex(e?12110079:16769712),this.hemi.intensity=e?1.1:1.8,this.hemi.color.setHex(e?12109055:16770760),this.sun.intensity=e?.5:1.4,this.sun.color.setHex(e?10465535:16769208),this.vm.hemi.intensity=e?1.6:2.4,this.renderer.compile(this.scene,this.camera)}starsHTML(t){let e="";for(let i=0;i<3;i++)e+=`<span class="${i<t?"on":""}">\u2605</span>`;return e}async start(t,e){t&&(this.mode=t),this.mode||(this.mode="classic"),!t&&this.mode==="tutorial"&&this.save.tutDone&&(this.mode="classic"),this.mode==="classic"&&(e==null||e===0)&&!this.save.tutDone&&(this.levelIdx||0)===0&&(this.mode="tutorial"),this.mode==="daily"?((!this.daily||this.daily.key!==Dr())&&(this.daily=this.todays()),e=this.daily.level,this.save.dailyPick={key:this.daily.key,level:e,mut:this.daily.mutator.id}):this.mode==="tutorial"&&(e=0),e!=null&&(this.levelIdx=e);let i=this.loadedIdx!==this.levelIdx;if(i&&await this.useLevel(this.levelIdx),this.mode==="daily"&&(!this.daily||this.daily.key!==Dr())&&(this.daily=this.todays()),this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.ghost=this.mode==="classic"&&(this.save.ghost||{})[Ni(this.level.id,this.diff)]||null,V("ghostp").classList.toggle("hidden",!this.ghost),this.ghost&&(V("ghostp").lastChild.textContent=Is(this.ghost.t)),this.onSmoke(this.game.smokesLeft),this.onCrouch(!1),this.renderContracts(this.game.contracts),this.tutStep=this.game.tut?this.lastTutLevel===this.level.id?Math.min(this.tutStep||0,3):0:Zi.length,V("tut").dataset.k="",this.lastTutLevel=this.game.tut?this.level.id:null,clearTimeout(this.whyT),V("alarmwhy").classList.add("hidden"),this.mode==="daily"){let s=V("ctoast");s.innerHTML=`<small>DAILY CHALLENGE \xB7 ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>s.classList.add("hidden"),3200)}else i&&this.mode==="classic"&&this.save.tutDone?this.showIntel():V("ctoast").classList.add("hidden");this.hint("move"),ae.gameplayStart()}showIntel(){let t=this.game,e=this.level,i=t.L,s=[];i.keys.length&&s.push("\u{1F511} Keycard door"),i.doors.some(a=>a.type==="lock")&&s.push("\u{1F512} Locked door"),t.lasers.length&&s.push("\u{1F534} Lasers"),e.owner&&s.push("\u{1F634} Sleeping owner"),(e.dogs||[]).length&&s.push("\u{1F415} Guard dog"),(e.spots||[]).length&&s.push("\u{1F526} Searchlights"),t.cases.length&&s.push("\u{1F48E} Display cases"),t.slots.length&&s.push("\u{1F3B0} Slot machines"),t.vents.length&&s.push("\u{1F573}\uFE0F Air vent"),t.tvs.length&&s.push("\u{1F4FA} TV lure"),(e.cameras||[]).length&&s.push(`\u{1F4F9} ${e.cameras.length} camera${e.cameras.length>1?"s":""}`),e.train&&s.push("\u{1F682} Moving train"),s.push(e.heli?"\u{1F681} Roof extraction":i.van?"\u{1F690} Van out front":"\u{1FA9C} Roof hatch exit");let r=V("ctoast");r.innerHTML=`<small>INTEL \xB7 ${e.name.toUpperCase()}</small><span class="intel">${s.map(a=>`<i>${a}</i>`).join("")}</span>`,r.classList.remove("hidden"),r.style.animation="none",r.offsetWidth,r.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>r.classList.add("hidden"),4200)}async retry(){await this.maybeMidgame(),this.start()}settings(){return Object.assign({sens:1,fov:70,music:.8,sfx:1,invert:!1,shake:!0},this.save.settings||{})}applySettings(){let t=this.settings();this.sens=.0024*t.sens,this.invertY=t.invert,this.fovBase=t.fov,this.audio.setVolumes(t.music,t.sfx),this.shake.scale=t.shake?1:0}showSettings(){this.setFrom=this.state==="pause"?"pause":"menu",this.state="settings";let t=this.settings();V("sSens").value=t.sens,V("sFov").value=t.fov,V("sMus").value=t.music,V("sSfx").value=t.sfx,V("sInv").checked=t.invert,V("sShake").checked=t.shake,this.readSettings(!0),this.screen("settings")}readSettings(t){let e={sens:+V("sSens").value,fov:+V("sFov").value,music:+V("sMus").value,sfx:+V("sSfx").value,invert:V("sInv").checked,shake:V("sShake").checked};V("vSens").textContent=e.sens.toFixed(1)+"\xD7",V("vFov").textContent=e.fov+"\xB0",V("vMus").textContent=Math.round(e.music*100)+"%",V("vSfx").textContent=Math.round(e.sfx*100)+"%",!t&&(this.save.settings=e,ae.store(this.save),this.applySettings(),this.audio.play("click"))}pause(){this.state==="play"&&(this.audio.siren(!1),this.state="pause",ae.gameplayStop(),this.screen("pause"))}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),ae.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),ae.store(this.save),this.updateMuteIcon()}updateMuteIcon(){V("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!kr||!ae.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await ae.ad("midgame"))}async reviveAd(){if(!kr||!ae.available||this.game.revived)return;this.state="ad",await ae.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),ae.gameplayStart()):(this.state="busted",V("bRevive").classList.add("hidden"))}hint(t){if(!(!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t))){if(this.game&&this.game.tut&&(this.tutStep<Zi.length||["move","loot","safe","pick","cone","stash"].includes(t))){this.hShown.delete(t);return}this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=V("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=kx[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let i=V("prompt"),s=V("ring"),r=this.input&&this.input.touch,a=(this.level&&this.level.safeName?this.level.safeName:"safe").toUpperCase(),o=t==="slot"?r?"HOLD \u270B TO PULL THE LEVER":"HOLD E: PULL THE LEVER":t==="radio"?r?"HOLD \u270B TO ANSWER THE RADIO":'HOLD E: ANSWER "ALL CLEAR"':t==="case"?r?"HOLD \u270B TO SMASH":"HOLD E TO SMASH THE CASE":t==="pick"?r?"TAP \u270B TO PICK THE LOCK":"E: PICK THE LOCK":t==="picking"?r?"TAP \u270B IN THE GREEN \xB7 MOVE TO STOP":"E IN THE GREEN \xB7 MOVE TO STOP":t==="breaker"?r?"HOLD \u270B TO CUT POWER":"HOLD E TO CUT THE POWER":t==="door"?r?"TAP \u270B TO OPEN":"E: SWIPE KEYCARD":t==="locked"?"LOCKED: FIND THE KEYCARD":t==="uniform"?r?"HOLD \u270B TO TAKE THE UNIFORM":"HOLD E: TAKE HIS UNIFORM":t==="tv"?r?"TAP \u270B TO TURN THE TV ON":"E: TURN THE TV ON (LURE)":t==="vent"?r?"TAP \u270B TO CRAWL IN":"E: CRAWL INTO THE VENT":t==="hide"?r?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?r?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?r?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?r?"HOLD \u270B TO CRACK "+a:"HOLD E / CLICK TO CRACK "+a:t==="pocket"?r?"TAP \u270B KO \xB7 HOLD \u270B PICKPOCKET":"TAP E: KO \xB7 HOLD E: PICKPOCKET":t==="ko"?r?"TAP \u270B TO KNOCK OUT":"E / CLICK: KNOCK OUT":"";i.dataset.k!==t&&(i.dataset.k=t,i.textContent=o,i.classList.toggle("hidden",!t),V("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t),this.els.bAct.lastChild.textContent=t==="pocket"?"KO / LIFT":t==="slot"?"PULL":t==="radio"?"ANSWER":t==="case"?"SMASH":t==="pick"||t==="picking"?"PICK":t==="breaker"?"CUT":t==="door"?"OPEN":t==="uniform"?"DISGUISE":t==="tv"?"TV ON":t==="vent"?"CRAWL":t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="uniform"||t==="panel"||t==="breaker"||t==="case"||t==="radio"||t==="slot"||t==="pocket")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=V("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let i=this.game;if(V("lootv").textContent=ze(i.lootGot),V("lootp").textContent=Math.round(i.lootGot/i.lootTotal*100)+"%",V("lootbar").style.width=Math.min(100,i.lootGot/i.lootTotal*100)+"%",V("lootbar").classList.toggle("star",i.lootGot/i.lootTotal>=.7),e)return;let s=V("loot");s.classList.remove("punch","bigpunch"),s.offsetWidth,s.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(V("alarm").classList.toggle("hidden",!t),V("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let i=V("alarmwhy");i.textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>i.classList.add("hidden"),2600)}}announce(t){let e=V("alarmwhy");e.textContent=t,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>e.classList.add("hidden"),3e3)}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,V("alarmt").textContent=Is(e),V("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t){V("ctr").innerHTML=t.map(e=>`<li class="${e.st}"><i></i>${e.text}<b>+${ze(e.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let i=V("ctoast");i.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${ze(t.bonus)}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onPick(t){let e=V("lockpick");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");let i=e.querySelector(".lp-zone"),s=e.querySelector(".lp-needle");i.style.left=((t.zone-t.w/2)*100).toFixed(1)+"%",i.style.width=(t.w*100).toFixed(1)+"%",s.style.left=(t.pos*100).toFixed(1)+"%",e.querySelectorAll(".lp-pins b").forEach((r,a)=>r.classList.toggle("on",a<t.pin)),e.classList.toggle("cool",t.cool>0)}onKey(t){if(V("key").classList.toggle("hidden",!t),t){let e=V("key");e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch")}}ventFx(t){let e=V("ventfx");e.style.opacity=t.toFixed(3),e.classList.toggle("hidden",t<=0)}onHide(t){V("slats").classList.toggle("hidden",!t),V("xh").classList.toggle("hidden",t)}onDisguise(t){let e=V("disgp"),i=t>0;if(e.classList.toggle("hidden",!i),i){let s=Math.ceil(t);e.dataset.s!==String(s)&&(e.dataset.s=s,e.textContent="\u{1F574} DISGUISED "+s+"s",e.classList.toggle("low",s<=5))}this.disgOn!==i&&(this.disgOn=i,i?this.vm.setOutfit(Hc({sleeve:2834298,glove:1711142,bar:9082020,band:15911244})):this.applyOutfit())}onCrouch(t){V("sneakp").classList.toggle("hidden",!t),this.els.bSneak.classList.toggle("on",t),document.body.classList.toggle("crouch",t)}onWeight(t){let e=V("weight"),i=Math.round((1-t)*100);e.classList.toggle("hidden",i<=0),e.textContent=`\u{1F3CB} \u2212${i}%`,e.classList.toggle("hot",i>=25)}onSmoke(t){let e=V("smokep");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bSmoke.lastChild.textContent="\xD7"+t,this.els.bSmoke.classList.toggle("empty",t===0)}onInSmoke(t){this.inSmokeOn!==t&&(this.inSmokeOn=t,V("smokeov").classList.toggle("on",t))}onCoins(t){let e=V("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}lightning(){this.boltK=1,this.flash("bolt")}flash(t){let e=V("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){V("touch").classList.add("hidden"),V("fp").classList.add("hidden"),V("hud").classList.add("hidden"),V("alarm").classList.add("hidden"),this.audio.siren(!1),this.input.exitLock()}awardXP(t,e,i,s){let r=this.save.xp||0,a=Pf(t,e,i),o=r+a;this.save.xp=o;let l=el(r),c=el(o),h=V(s);h.innerHTML=`<span class="rk">\u{1F396} <b>${l.name}</b></span><span class="xpbar"><i style="width:${(l.frac*100).toFixed(1)}%"></i></span><span class="xpg">+${a} XP</span>`;let u=h.querySelector("i"),f=h.querySelector("b");return setTimeout(()=>{c.i>l.i?(u.style.width="100%",setTimeout(()=>{f.textContent=c.name,u.style.transition="none",u.style.width="0%",u.offsetWidth,u.style.transition="",u.style.width=(c.frac*100).toFixed(1)+"%",h.classList.add("up"),h.querySelector(".xpg").textContent="RANK UP!",this.audio.play("contract"),this.shake.add(.2)},650)):u.style.width=(c.frac*100).toFixed(1)+"%"},900),h.classList.remove("up"),{gain:a,up:c.i>l.i,rank:c}}bustTip(){let t=this.game,e=this.input.touch,i=e?"the \u{1F9B6} button":"Z",s=e?"\u270B":"E";if(t.policeBusted)return"The police arrived! Knock out alerted guards before they radio in, or disarm the alarm keypad.";let r={hide:"Tip: a guard saw you climb in. Only hide when nobody is looking.",owner:"Tip: the owner wakes up to noise. Sneak past slowly and never dash near him.",dash:`Tip: dashing is loud and gets you noticed. Walk, or sneak with ${i}.`,dog:"Tip: the dog follows your scent. Throw a coin and it runs off to sniff it.",los:"Tip: once spotted, break line of sight: duck round a corner, hide in a wardrobe or drop smoke.",cone:`Tip: stay out of the yellow vision cones. Sneak with ${i} behind low furniture, and hit guards from behind with ${s}.`},a=this.level.tips||[],o=t.bustCause||"cone";return t.tut?r[o]||r.cone:(o==="cone"||o==="los")&&a.length&&Math.random()<.5?"Tip: "+a[Math.random()*a.length|0]:r[o]||r.cone}onBusted(){this.state="busted",this.audio.siren(!1),ae.gameplayStop(),V("bRevive").classList.toggle("hidden",!kr||!ae.available||this.game.revived),V("bustTip").textContent=this.bustTip();let t=Bc(this.save,this.runRecord(!1));this.awardXP(!1,0,this.game.lootGot,"bXP"),ae.store(this.save),V("bAch").innerHTML=t.map(e=>`\u{1F3C6} ${e.icon} ${e.name} unlocked!`).join("<br>"),this.screen("busted"),this.drawRecap("bMap",!1)}onWin(t){this.state="result",this.audio.siren(!1),V("alarm").classList.add("hidden"),V("siren").classList.remove("on"),ae.gameplayStop(),ae.happytime();let e=t.stars.filter(Boolean).length,i,s,r;if(t.daily){let p=this.daily.key,m=this.save.daily=this.save.daily||{};i=m[p]||{score:0,stars:0},s=t.score>i.score,m[p]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},r=m[p].score;let v=this.save.streak||{last:"",n:0};v.last!==p&&(v.n=v.last===il()?v.n+1:1,v.last=p),this.save.streak=v;for(let b of Object.keys(m).sort().slice(0,-14))delete m[b]}else{let p=Ni(this.level.id,this.diff);this.nextWasLocked=this.mode==="classic"&&this.levelIdx+1<dn.length&&!this.levelUnlocked(this.levelIdx+1),i=this.save.best[p]||{score:0,stars:0},s=t.score>i.score,this.save.best[p]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},r=this.save.best[p].score;let m=this.ghost,v=!m||t.time<m.t;if(this.ghostMsg=m?v?`\u{1F47B} Beat your ghost by ${(m.t-t.time).toFixed(1)}s!`:`\u{1F47B} Ghost was ${(t.time-m.t).toFixed(1)}s faster`:"",this.mode==="classic"&&(s||v)){let b=this.game.trail,_=[];for(let w=0;w<b.length;w+=2)_.push(Math.round(b[w][0]*10),Math.round(b[w][1]*10));(this.save.ghost=this.save.ghost||{})[p]={t:t.time,dt:.7,pts:_}}}this.save.contracts=(this.save.contracts||0)+t.contracts.filter(p=>p.st==="ok").length,ae.store(this.save),V("rStars").innerHTML=this.starsHTML(0);let a=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];V("rGoals").innerHTML=t.stars.map((p,m)=>`<li class="${p?"ok":""}">${p?"\u2714":"\u2716"} ${a[m]}</li>`).join(""),V("rLoot").textContent=ze(t.loot),V("rTime").textContent=Is(t.time)+(t.timeBonus?`  (+${ze(t.timeBonus)})`:""),V("rGhost").textContent=t.ghost?"+"+ze(t.ghostBonus):"\u2014",V("rScore").textContent="$0",V("rCtr").innerHTML=t.contracts.map(p=>`<li class="${p.st==="ok"?"ok":"no"}">${p.st==="ok"?"\u2714":"\u2716"} ${p.text}<b>${p.st==="ok"?"+"+ze(p.bonus):"\u2014"}</b></li>`).join(""),V("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),V("rBest").textContent=(s?"NEW BEST!":"Best "+ze(r))+" \xB7 "+t.diff+(t.daily?` \xB7 \u{1F525}${this.save.streak.n} day streak \xB7 next Daily in ${Fc()}`:""),V("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,V("rBest").classList.toggle("new",s),!t.daily&&this.ghostMsg&&(V("rBest").textContent+="  \xB7  "+this.ghostMsg);let o=this.game.tut&&!this.save.tutDone;this.game.tut&&(this.save.tutDone=!0);let l=Bc(this.save,this.runRecord(!0,t));this.awardXP(!0,t.score,t.loot,"rXP");let c=Dn.filter(p=>p.id!=="classic"&&Fs(p,this.save)&&!(this.save.seenOut||[]).includes(p.id));this.save.seenOut=Dn.filter(p=>Fs(p,this.save)).map(p=>p.id),this.showAchToast(l),o&&(V("rAch").innerHTML="\u{1F393} <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now."+(V("rAch").innerHTML?"<br>"+V("rAch").innerHTML:""),V("rAch").classList.remove("hidden"));let h=this.levelIdx+1,u=!t.daily&&h<dn.length&&this.levelUnlocked(h);V("bNext").textContent=t.daily?"MAP \u25B6":u?"NEXT: "+dn[h].name.toUpperCase()+" \u25B6":"NEXT \u25B6",!t.daily&&this.nextWasLocked&&u&&(V("rAch").innerHTML=`<span class="unlock">\u{1F513} New heist unlocked: <b>${dn[h].name}</b></span>`+(V("rAch").innerHTML?"<br>"+V("rAch").innerHTML:""),V("rAch").classList.remove("hidden"),setTimeout(()=>{this.state==="result"&&(this.audio.play("contract"),this.shake.add(.15))},1500)),this.nextWasLocked=!1,c.length&&(V("rAch").innerHTML+=`<br>\u{1F9E4} New outfit: <b>${c.map(p=>p.name).join(", ")}</b>`,V("rAch").classList.remove("hidden")),ae.store(this.save),this.screen("result"),this.drawRecap("rMap",!0);let f=V("rStars").children;t.stars.forEach((p,m)=>{p&&setTimeout(()=>{this.state==="result"&&(f[m].classList.add("on","pop"),this.audio.play("star",m),this.shake.add(.12))},450+m*380)});let d=performance.now(),g=1100,y=()=>{let p=Math.min(1,(performance.now()-d)/g);V("rScore").textContent=ze(t.score*(1-Math.pow(1-p,3))),p<1&&this.state==="result"&&requestAnimationFrame(y)};y()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let i=this.state;i==="play"||i==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(i==="menu"||i==="soon")&&this.game.update(e,!0),i!=="pause"&&i!=="ad"&&(this.particles.update(e),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),this.nightSky.position.copy(this.camera.position),i!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),i!=="pause"&&this.rain.update(e,this.camera.position.x,this.camera.position.z);{let s=this.game,r=s.L,a=s.player,o=i==="play"&&this.level&&this.level.rain&&r&&r.outdoor[Math.floor(a.z)*r.W+Math.floor(a.x)]===1;this.wetK=Se(this.wetK||0,o?1:0,o?2.5:.8,e);let l=V("wet");l.style.opacity=this.wetK.toFixed(2),l.classList.toggle("hidden",this.wetK<.02)}this.audio.rain(!!(this.level&&this.level.rain)&&(i==="play"||i==="pause"||i==="busted")),this.audio.rumble(!!(this.level&&this.level.train)&&(i==="play"||i==="pause"||i==="busted")),this.boltK>0&&(this.boltK=Math.max(0,this.boltK-e*2.2)),this.renderer.toneMappingExposure=1.15+this.boltK*this.boltK*1.6,this.dust.points.visible=i!=="menu"&&i!=="soon",this.floaters.update(i==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),i==="play"&&this.updateHud(),this.audio.setMuffle(i==="play"&&this.game.slowT>.05),this.audio.tension=i==="play"?this.game.tension:0,this.audio.mode=i==="menu"||i==="soon"||i==="trophies"||i==="outfits"?"menu":"game",V("vignette").style.opacity=i==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),i==="outfits"&&(this.vm.mat.color.setRGB(1.05,1,.95),this.vm.update(e,{move:0,bob:0,lookX:0,lookY:0,punch:0,crack:!1,grab:0,dash:!1,busted:!1})),this.vm.visible=i==="outfits"||(i==="play"||i==="busted"||i==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}skipTutorial(){this.save.tutDone=!0,ae.store(this.save),this.tutStep=Zi.length,V("tut").classList.add("hidden"),this.audio.play("click")}updateTutorial(){let t=V("tut"),e=this.game;if(!e.tut||this.tutStep>=Zi.length){t.classList.add("hidden"),document.body.classList.remove("tutcard");return}if(this.tutStep==null&&(this.tutStep=0),Zi[this.tutStep].done(e)&&(this.tutStep++,this.audio.play("star",Math.min(2,this.tutStep%3)),t.classList.remove("done"),t.offsetWidth,t.classList.add("done"),this.tutStep>=Zi.length)){setTimeout(()=>t.classList.add("hidden"),900);return}let s=Zi[this.tutStep],r=this.tutStep+(this.input.touch?"t":"k");t.dataset.k!==r&&(t.dataset.k=r,t.querySelector("small").textContent=`TUTORIAL ${this.tutStep+1}/${Zi.length}`,t.querySelector("span").textContent=s.text[this.input.touch?1:0],t.querySelector("em").textContent=this.input.touch?"tap to skip":"T to skip",t.querySelector("i").style.width=this.tutStep/Zi.length*100+"%"),t.classList.toggle("hidden",e.alarm||e.state!=="play"),document.body.classList.toggle("tutcard",!t.classList.contains("hidden"))}updateHud(){this.updateTutorial();let t=this.game,e=t.player,i=Math.floor(t.time);i!==this.lastSec&&(this.lastSec=i,V("time").textContent=Is(i)),this.drawMinimap();let s=V("wp"),r=t.objectiveTarget(),a=r.x,o=r.z,l=r.label,c=Math.hypot(a-e.x,o-e.z);if(t.state!=="play"||c<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let u=this._d.set(a,1.1,o).project(this.camera),f=u.x,d=u.y,g=u.z>1;g&&(f=-f,d=-d);let y=.88,p=g||Math.abs(f)>y||Math.abs(d)>y;if(p){let _=y/Math.max(Math.abs(f),Math.abs(d),.001);f*=_,d*=_,g&&Math.abs(d)<y-.01&&(d=-y)}p&&f<-.4&&d>-.3&&(f=-.4),s.classList.toggle("edge",p);let m=Math.max(64,Math.min(this.w-64,(f+1)/2*this.w)),v=Math.max(40,Math.min(this.h-40,(1-d)/2*this.h));s.style.transform=`translate(${m}px,${v}px) translate(-50%,-50%)`;let b=l+" "+Math.round(c*1.5)+"m";s.dataset.t!==b&&(s.dataset.t=b,s.lastChild.textContent=b)}let h=V("ind");t.guards.forEach((u,f)=>{let d=h.children[f];d||(d=document.createElement("i"),h.appendChild(d));let g=u.state==="alert"||u.state==="flee",y=!g&&(u.susp>.04||u.state==="investigate"||u.state==="search");if(!g&&!y){d.style.display="none";return}let p=Ee(e.face,Math.atan2(u.x-e.x,u.z-e.z));d.style.display="",d.className=g?"alert":"",d.style.opacity=g?1:(.35+u.susp*.65).toFixed(2),d.style.transform=`translate(-50%,-50%) rotate(${-p*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let s=i.getContext("2d");for(let a=0;a<t.H;a++)for(let o=0;o<t.W;o++){let l=a*t.W+o,c=t.ch[l];s.fillStyle=c==="#"?"#1d2140":!t.walk[l]&&!t.outdoor[l]?"#a7a3bd":t.outdoor[l]?t.floor[l]==="road"?"#7d8596":"#5fae4c":"#efe9df",s.fillRect(o*e,a*e,e,e)}for(let a of this.game.vents||[]){let o=a.gx*e,l=a.gz*e;s.fillStyle="#6a7484",s.fillRect(o-3,l-3,6,6),s.fillStyle="#1d2140",s.fillRect(o-2,l-1.5,4,1),s.fillRect(o-2,l+.5,4,1)}this.mmBase=i,this.mmS=e;let r=V("mm");r.width=i.width,r.height=i.height,this.mmCtx=r.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,i=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let c of t.loot)e.fillStyle=c.type==="cash"?"#2fbf5a":c.type==="gold"?"#f5b301":c.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(c.x*i-1.5,c.z*i-1.5,3,3);t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*i,(t.L.safe.y+.15)*i,i*.7,i*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*i,t.L.exit.z*i,i,0,6.3),e.stroke());for(let c of t.guards){let h=c.state==="ko"||c.state==="getup"||c.state==="sleep",u=c.state==="alert"||c.state==="flee"?"#ff3b4e":c.kind==="clerk"?"#f4f1ea":c.susp>.25?"#ff9f1c":h?"#8a8fae":"#3f6fe0";if(!h){e.fillStyle=c.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(c.x*i,c.z*i);let f=-c.face+Math.PI/2;e.arc(c.x*i,c.z*i,c.range*i,f-c.fov/2,f+c.fov/2),e.closePath(),e.fill()}e.fillStyle=u,e.beginPath(),e.arc(c.x*i,c.z*i,2.6,0,6.3),e.fill()}if(!t.powerOff)for(let c of t.spots)e.fillStyle=c.cool>0?"rgba(255,48,64,.6)":"rgba(255,240,176,.55)",e.beginPath(),e.arc(c.x*i,c.z*i,c.def.r*i,0,6.3),e.fill();if(!t.powerOff)for(let c of t.lasers)e.fillStyle=c.on?"#ff3040":"rgba(255,48,64,.3)",c.alongX?e.fillRect(c.lo*i,c.line*i-1,(c.hi-c.lo)*i,2):e.fillRect(c.line*i-1,c.lo*i,2,(c.hi-c.lo)*i);for(let c of t.doors)e.fillStyle=c.open?"#3ddc84":"#ff3b4e",e.fillRect(c.x*i,c.y*i,i,i);for(let c of t.keyMeshes)c.m.visible&&(e.fillStyle="#2f7ae8",e.fillRect(c.x*i+.5,c.y*i+.5,i-1,i-1));for(let c of t.dogs)e.fillStyle=c.state==="bark"||c.state==="barkHide"?"#ff3b4e":"#c98a4a",e.fillRect(c.x*i-2,c.z*i-2,4,4);let r=this.ghost;if(r&&r.pts.length>3){let c=r.pts,h=c.length/2;e.strokeStyle="rgba(199,125,255,.45)",e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(c[0]/10*i,c[1]/10*i);for(let m=1;m<h;m++)e.lineTo(c[m*2]/10*i,c[m*2+1]/10*i);e.stroke(),e.setLineDash([]);let u=Math.min(h-1,t.time/r.dt),f=Math.floor(u),d=Math.min(h-1,f+1),g=u-f,y=(c[f*2]+(c[d*2]-c[f*2])*g)/10*i,p=(c[f*2+1]+(c[d*2+1]-c[f*2+1])*g)/10*i;e.fillStyle="rgba(199,125,255,.95)",e.beginPath(),e.arc(y,p,3.4,0,6.3),e.fill(),e.strokeStyle="#fff",e.lineWidth=1,e.stroke()}let a=-s.face+Math.PI/2,o=s.x*i,l=s.z*i;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(o+Math.cos(a)*5,l+Math.sin(a)*5),e.lineTo(o+Math.cos(a+2.5)*4,l+Math.sin(a+2.5)*4),e.lineTo(o+Math.cos(a-2.5)*4,l+Math.sin(a-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,i=e.L,s=this.camera,r=this.aspect<1?1+(1-this.aspect)*1.6:1,a;if(this.state==="menu"||this.state==="soon"){let o=this.time*.07,l=this._f.set(i.W/2,0,i.H/2-2);s.position.set(l.x+Math.sin(o)*17*r,19*r,l.z+Math.cos(o)*17*r),s.lookAt(l),a=42}else{e.applyCamera(s,t),a=(this.aspect<1?this.fovBase+14:this.fovBase)+e.fovKick+(e.fovPunch||0);let o=V("speed"),l=Math.min(1,e.fovKick/9).toFixed(2);o.dataset.o!==l&&(o.dataset.o=l,o.style.opacity=l)}Math.abs(s.fov-a)>.01&&(s.fov=a,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},Df=new Gc;window.__app=Df;Df.boot().catch(n=>{console.error(n);let t=V("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
