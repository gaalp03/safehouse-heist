var Gh=0,Yl=1,Vh=2;var xa=1,Wh=2,Es=3,Ln=0,Je=1,Ne=2,Zn=0,Cs=1,$e=2,$l=3,Kl=4,Xh=5;var Jn=100,qh=101,Yh=102,$h=103,Kh=104,Zh=200,Jh=201,jh=202,Qh=203,Zl=204,Jl=205,tf=206,ef=207,nf=208,sf=209,af=210,rf=211,of=212,lf=213,cf=214,pr=0,mr=1,xr=2,ys=3,gr=4,yr=5,vr=6,_r=7,$r=0,hf=1,ff=2,Ji=0,jl=1,Ql=2,tc=3,ga=4,ec=5,ic=6,nc=7;var sc=300,jn=301,Rs=302,Kr=303,Zr=304,hn=1e3,ri=1001,br=1002,Ye=1003,uf=1004;var ya=1005;var oi=1006,Jr=1007;var pn=1008;var fi=1009,ac=1010,rc=1011,Ps=1012,jr=1013,Di=1014,Ti=1015,Ni=1016,Qr=1017,to=1018,Qn=1020,oc=35902,lc=35899,cc=1021,hc=1022,Ui=1023,fn=1026,mn=1027,eo=1028,io=1029,In=1030,no=1031;var so=1033,va=33776,_a=33777,ba=33778,Ma=33779,ao=35840,ro=35841,oo=35842,lo=35843,co=36196,ho=37492,fo=37496,uo=37488,po=37489,Sa=37490,mo=37491,xo=37808,go=37809,yo=37810,vo=37811,_o=37812,bo=37813,Mo=37814,So=37815,wo=37816,To=37817,Ao=37818,Eo=37819,Co=37820,Ro=37821,Po=36492,Lo=36494,Io=36495,ko=36283,Do=36284,wa=36285,No=36286;var Ks=2300,Mr=2301,ur=2302,zl=2303,Bl=2400,Hl=2401,Gl=2402;var df=3200;var Uo=0,pf=1,xn="",Te="srgb",Zs="srgb-linear",Js="linear",ce="srgb";var dr=7680;var mf=519,xf=512,gf=513,yf=514,fc=515,vf=516,_f=517,uc=518,dc=519,bf=35044;var pc="300 es",Si=2e3,vs=2001;function Qu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function td(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mf(){let n=js("canvas");return n.style.display="block",n}var fh={},_s=null;function mc(...n){let t="THREE."+n.shift();_s?_s("log",t,...n):console.log(t,...n)}function Sf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=Sf(n);let t="THREE."+n.shift();if(_s)_s("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=Sf(n);let t="THREE."+n.shift();if(_s)_s("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function $s(...n){let t=n.join(" ");t in fh||(fh[t]=!0,Ut(...n))}function wf(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}var Tf={[pr]:pr,[xr]:vr,[gr]:gr,[ys]:yr,[mr]:mr,[vr]:xr,[_r]:_r,[yr]:ys},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xl=Math.PI/180,Sr=180/Math.PI;function Ta(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function ed(n,t){return(n%t+t)%t}function gl(n,t,e){return(1-e)*n+e*t}function Af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function id(n,t){if(t.constructor===Float32Array)return n;let e=xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function nd(n,t){if(t.constructor===Float32Array)return n;let e=xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var bc=class bc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bc.prototype.isVector2=!0;var qt=bc,Wi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],f=a[r+0],x=a[r+1],d=a[r+2],v=a[r+3];if(u!==v||l!==f||h!==x||c!==d){let m=l*f+h*x+c*d+u*v;m<0&&(f=-f,x=-x,d=-d,v=-v,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+f*o,h=h*p+x*o,c=c*p+d*o,u=u*p+v*o}else{l=l*p+f*o,h=h*p+x*o,c=c*p+d*o,u=u*p+v*o;let y=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=y,h*=y,c*=y,u*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,a,r){let o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=a[r],f=a[r+1],x=a[r+2],d=a[r+3];return t[e]=o*d+c*u+l*x-h*f,t[e+1]=l*d+c*f+h*u-o*x,t[e+2]=h*d+c*x+o*f-l*u,t[e+3]=c*d-o*u-l*f-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(a/2),f=l(i/2),x=l(s/2),d=l(a/2);switch(r){case"XYZ":this._x=f*c*u+h*x*d,this._y=h*x*u-f*c*d,this._z=h*c*d+f*x*u,this._w=h*c*u-f*x*d;break;case"YXZ":this._x=f*c*u+h*x*d,this._y=h*x*u-f*c*d,this._z=h*c*d-f*x*u,this._w=h*c*u+f*x*d;break;case"ZXY":this._x=f*c*u-h*x*d,this._y=h*x*u+f*c*d,this._z=h*c*d+f*x*u,this._w=h*c*u-f*x*d;break;case"ZYX":this._x=f*c*u-h*x*d,this._y=h*x*u+f*c*d,this._z=h*c*d-f*x*u,this._w=h*c*u+f*x*d;break;case"YZX":this._x=f*c*u+h*x*d,this._y=h*x*u+f*c*d,this._z=h*c*d-f*x*u,this._w=h*c*u-f*x*d;break;case"XZY":this._x=f*c*u-h*x*d,this._y=h*x*u-f*c*d,this._z=h*c*d+f*x*u,this._w=h*c*u+f*x*d;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=i+o+u;if(f>0){let x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(c-l)*x,this._y=(a-h)*x,this._z=(r-s)*x}else if(i>o&&i>u){let x=2*Math.sqrt(1+i-o-u);this._w=(c-l)/x,this._x=.25*x,this._y=(s+r)/x,this._z=(a+h)/x}else if(o>u){let x=2*Math.sqrt(1+o-i-u);this._w=(a-h)/x,this._x=(s+r)/x,this._y=.25*x,this._z=(l+c)/x}else{let x=2*Math.sqrt(1+u-i-o);this._w=(r-s)/x,this._x=(a+h)/x,this._y=(l+c)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+r*o+s*h-a*l,this._y=s*c+r*l+a*o-i*h,this._z=a*c+r*h+i*l-s*o,this._w=r*c-i*o-s*l-a*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mc=class Mc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,h=2*(r*s-o*i),c=2*(o*e-a*s),u=2*(a*i-r*e);return this.x=e+l*h+r*u-o*c,this.y=i+l*c+o*h-a*u,this.z=s+l*u+a*c-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mc.prototype.isVector3=!0;var X=Mc,yl=new X,uh=new Wi,Sc=class Sc{constructor(t,e,i,s,a,r,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,h)}set(t,e,i,s,a,r,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=a,c[5]=l,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],f=i[2],x=i[5],d=i[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],g=s[7],M=s[2],S=s[5],_=s[8];return a[0]=r*v+o*y+l*M,a[3]=r*m+o*b+l*S,a[6]=r*p+o*g+l*_,a[1]=h*v+c*y+u*M,a[4]=h*m+c*b+u*S,a[7]=h*p+c*g+u*_,a[2]=f*v+x*y+d*M,a[5]=f*m+x*b+d*S,a[8]=f*p+x*g+d*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*r*c-e*o*h-i*a*c+i*o*l+s*a*h-s*r*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*r-o*h,f=o*l-c*a,x=h*a-r*l,d=e*u+i*f+s*x;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/d;return t[0]=u*v,t[1]=(s*h-c*i)*v,t[2]=(o*i-s*r)*v,t[3]=f*v,t[4]=(c*e-s*l)*v,t[5]=(s*a-o*e)*v,t[6]=x*v,t[7]=(i*l-h*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){let l=Math.cos(a),h=Math.sin(a);return this.set(i*l,i*h,-i*(l*r+h*o)+r+t,-s*h,s*l,-s*(-h*r+l*o)+o+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vl.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;var Gt=Sc,vl=new Gt,dh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){let n={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ce&&(s.r=cn(s.r),s.g=cn(s.g),s.b=cn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zs]:{primaries:t,whitePoint:i,transfer:Js,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),n}var Qt=sd();function cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ns,wr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ns===void 0&&(ns=js("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=cn(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cn(e[i]/255)*255):e[i]=cn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_l(s[r].image)):a.push(_l(s[r]))}else a=_l(s);i.url=a}return e||(t.images[this.uuid]=i),i}};function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var rd=0,bl=new X,li=class n extends Vi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ri,s=ri,a=oi,r=pn,o=Ui,l=fi,h=n.DEFAULT_ANISOTROPY,c=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Ta(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hn:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hn:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=sc;li.DEFAULT_ANISOTROPY=1;var wc=class wc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],x=l[5],d=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-v)<.01&&Math.abs(d-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+v)<.1&&Math.abs(d+m)<.1&&Math.abs(h+x+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,g=(x+1)/2,M=(p+1)/2,S=(c+f)/4,_=(u+v)/4,w=(d+m)/4;return b>g&&b>M?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=S/i,a=_/i):g>M?g<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(g),i=S/s,a=w/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=_/a,s=w/a),this.set(i,s,a,e),this}let y=Math.sqrt((m-d)*(m-d)+(u-v)*(u-v)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-d)/y,this.y=(u-v)/y,this.z=(f-c)/y,this.w=Math.acos((h+x+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wc.prototype.isVector4=!0;var be=wc,Tr=class extends Vi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new li({width:t,height:e,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Tr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qs=class extends li{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ar=class extends li{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yr=class Yr{constructor(t,e,i,s,a,r,o,l,h,c,u,f,x,d,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,h,c,u,f,x,d,v,m)}set(t,e,i,s,a,r,o,l,h,c,u,f,x,d,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=x,p[7]=d,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yr().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),a=1/ss.setFromMatrixColumn(t,1).length(),r=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){let f=r*c,x=r*u,d=o*c,v=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=x+d*h,e[5]=f-v*h,e[9]=-o*l,e[2]=v-f*h,e[6]=d+x*h,e[10]=r*l}else if(t.order==="YXZ"){let f=l*c,x=l*u,d=h*c,v=h*u;e[0]=f+v*o,e[4]=d*o-x,e[8]=r*h,e[1]=r*u,e[5]=r*c,e[9]=-o,e[2]=x*o-d,e[6]=v+f*o,e[10]=r*l}else if(t.order==="ZXY"){let f=l*c,x=l*u,d=h*c,v=h*u;e[0]=f-v*o,e[4]=-r*u,e[8]=d+x*o,e[1]=x+d*o,e[5]=r*c,e[9]=v-f*o,e[2]=-r*h,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){let f=r*c,x=r*u,d=o*c,v=o*u;e[0]=l*c,e[4]=d*h-x,e[8]=f*h+v,e[1]=l*u,e[5]=v*h+f,e[9]=x*h-d,e[2]=-h,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){let f=r*l,x=r*h,d=o*l,v=o*h;e[0]=l*c,e[4]=v-f*u,e[8]=d*u+x,e[1]=u,e[5]=r*c,e[9]=-o*c,e[2]=-h*c,e[6]=x*u+d,e[10]=f-v*u}else if(t.order==="XZY"){let f=r*l,x=r*h,d=o*l,v=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+v,e[5]=r*c,e[9]=x*u-d,e[2]=d*u-x,e[6]=o*c,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(od,t,ld)}lookAt(t,e,i){let s=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),_n.crossVectors(i,ui),_n.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),_n.crossVectors(i,ui)),_n.normalize(),Ha.crossVectors(ui,_n),s[0]=_n.x,s[4]=Ha.x,s[8]=ui.x,s[1]=_n.y,s[5]=Ha.y,s[9]=ui.y,s[2]=_n.z,s[6]=Ha.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],f=i[9],x=i[13],d=i[2],v=i[6],m=i[10],p=i[14],y=i[3],b=i[7],g=i[11],M=i[15],S=s[0],_=s[4],w=s[8],k=s[12],P=s[1],I=s[5],O=s[9],C=s[13],E=s[2],z=s[6],D=s[10],N=s[14],V=s[3],W=s[7],Z=s[11],J=s[15];return a[0]=r*S+o*P+l*E+h*V,a[4]=r*_+o*I+l*z+h*W,a[8]=r*w+o*O+l*D+h*Z,a[12]=r*k+o*C+l*N+h*J,a[1]=c*S+u*P+f*E+x*V,a[5]=c*_+u*I+f*z+x*W,a[9]=c*w+u*O+f*D+x*Z,a[13]=c*k+u*C+f*N+x*J,a[2]=d*S+v*P+m*E+p*V,a[6]=d*_+v*I+m*z+p*W,a[10]=d*w+v*O+m*D+p*Z,a[14]=d*k+v*C+m*N+p*J,a[3]=y*S+b*P+g*E+M*V,a[7]=y*_+b*I+g*z+M*W,a[11]=y*w+b*O+g*D+M*Z,a[15]=y*k+b*C+g*N+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],x=t[14],d=t[3],v=t[7],m=t[11],p=t[15],y=l*x-h*f,b=o*x-h*u,g=o*f-l*u,M=r*x-h*c,S=r*f-l*c,_=r*u-o*c;return e*(v*y-m*b+p*g)-i*(d*y-m*M+p*S)+s*(d*b-v*M+p*_)-a*(d*g-v*S+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(r*c-o*h)-i*(a*c-o*l)+s*(a*h-r*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],x=t[11],d=t[12],v=t[13],m=t[14],p=t[15],y=e*o-i*r,b=e*l-s*r,g=e*h-a*r,M=i*l-s*o,S=i*h-a*o,_=s*h-a*l,w=c*v-u*d,k=c*m-f*d,P=c*p-x*d,I=u*m-f*v,O=u*p-x*v,C=f*p-x*m,E=y*C-b*O+g*I+M*P-S*k+_*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/E;return t[0]=(o*C-l*O+h*I)*z,t[1]=(s*O-i*C-a*I)*z,t[2]=(v*_-m*S+p*M)*z,t[3]=(f*S-u*_-x*M)*z,t[4]=(l*P-r*C-h*k)*z,t[5]=(e*C-s*P+a*k)*z,t[6]=(m*g-d*_-p*b)*z,t[7]=(c*_-f*g+x*b)*z,t[8]=(r*O-o*P+h*w)*z,t[9]=(i*P-e*O-a*w)*z,t[10]=(d*S-v*g+p*y)*z,t[11]=(u*g-c*S-x*y)*z,t[12]=(o*k-r*I-l*w)*z,t[13]=(e*I-i*k+s*w)*z,t[14]=(v*b-d*M-m*y)*z,t[15]=(c*M-u*b+f*y)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,h=a*r,c=a*o;return this.set(h*r+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*r,0,h*l-s*o,c*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,h=a+a,c=r+r,u=o+o,f=a*h,x=a*c,d=a*u,v=r*c,m=r*u,p=o*u,y=l*h,b=l*c,g=l*u,M=i.x,S=i.y,_=i.z;return s[0]=(1-(v+p))*M,s[1]=(x+g)*M,s[2]=(d-b)*M,s[3]=0,s[4]=(x-g)*S,s[5]=(1-(f+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(d+b)*_,s[9]=(m-y)*_,s[10]=(1-(f+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ri.copy(this);let h=1/r,c=1/o,u=1/l;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=c,Ri.elements[5]*=c,Ri.elements[6]*=c,Ri.elements[8]*=u,Ri.elements[9]*=u,Ri.elements[10]*=u,e.setFromRotationMatrix(Ri),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,s,a,r,o=Si,l=!1){let h=this.elements,c=2*a/(e-t),u=2*a/(i-s),f=(e+t)/(e-t),x=(i+s)/(i-s),d,v;if(l)d=a/(r-a),v=r*a/(r-a);else if(o===Si)d=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===vs)d=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=u,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Si,l=!1){let h=this.elements,c=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),x=-(i+s)/(i-s),d,v;if(l)d=1/(r-a),v=r/(r-a);else if(o===Si)d=-2/(r-a),v=-(r+a)/(r-a);else if(o===vs)d=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=u,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=d,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Yr.prototype.isMatrix4=!0;var ue=Yr,ss=new X,Ri=new ue,od=new X(0,0,0),ld=new X(1,1,1),_n=new X,Ha=new X,ui=new X,mh=new ue,xh=new Wi,un=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,x),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,x),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cd=0,gh=new X,as=new Wi,sn=new ue,Ga=new X,Hs=new X,hd=new X,fd=new Wi,yh=new X(1,0,0),vh=new X(0,1,0),_h=new X(0,0,1),bh={type:"added"},ud={type:"removed"},rs={type:"childadded",child:null},Ml={type:"childremoved",child:null},Ae=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new un,i=new Wi,s=new X(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ga.copy(t):Ga.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Hs,Ga,this.up):sn.lookAt(Ga,Hs,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(sn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),rs.child=t,this.dispatchEvent(rs),rs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){let o=r(t.geometries),l=r(t.materials),h=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),x=r(t.animations),d=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),d.length>0&&(i.nodes=d)}return i.object=s,i;function r(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new X(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ft=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},dd={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),x=.02,d=.005;h.inputState.pinching&&f>x+d?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=x-d&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=ed(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Sl(r,a,t+1/3),this.g=Sl(r,a,t),this.b=Sl(r,a,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function i(a){a!==void 0&&parseFloat(a)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=Ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Qt.workingToColorSpace(ni.copy(this),t),Math.round(ie(ni.r*255,0,255))*65536+Math.round(ie(ni.g*255,0,255))*256+Math.round(ie(ni.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ni.copy(this),e);let i=ni.r,s=ni.g,a=ni.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,h,c=(o+r)/2;if(o===r)l=0,h=0;else{let u=r-o;switch(h=c<=.5?u/(r+o):u/(2-r-o),r){case i:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-i)/u+2;break;case a:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=Te){Qt.workingToColorSpace(ni.copy(this),t);let e=ni.r,i=ni.g,s=ni.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(Va);let i=gl(bn.h,Va.h,e),s=gl(bn.s,Va.s,e),a=gl(bn.l,Va.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Ot;Ot.NAMES=Ef;var ea=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xn=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new X,an=new X,wl=new X,rn=new X,os=new X,ls=new X,Mh=new X,Tl=new X,Al=new X,El=new X,Cl=new be,Rl=new be,Pl=new be,Tn=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pi.subVectors(t,e),s.cross(Pi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Pi.subVectors(s,e),an.subVectors(i,e),wl.subVectors(t,e);let r=Pi.dot(Pi),o=Pi.dot(an),l=Pi.dot(wl),h=an.dot(an),c=an.dot(wl),u=r*h-o*o;if(u===0)return a.set(0,0,0),null;let f=1/u,x=(h*l-o*c)*f,d=(r*c-o*l)*f;return a.set(1-x-d,d,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,rn.x),l.addScaledVector(r,rn.y),l.addScaledVector(o,rn.z),l)}static getInterpolatedAttribute(t,e,i,s,a,r){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Cl,a.x),r.addScaledVector(Rl,a.y),r.addScaledVector(Pl,a.z),r}static isFrontFacing(t,e,i,s){return Pi.subVectors(i,e),an.subVectors(t,e),Pi.cross(an).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Pi.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,r,o;os.subVectors(s,i),ls.subVectors(a,i),Tl.subVectors(t,i);let l=os.dot(Tl),h=ls.dot(Tl);if(l<=0&&h<=0)return e.copy(i);Al.subVectors(t,s);let c=os.dot(Al),u=ls.dot(Al);if(c>=0&&u<=c)return e.copy(s);let f=l*u-c*h;if(f<=0&&l>=0&&c<=0&&l-c>0)return r=l/(l-c),e.copy(i).addScaledVector(os,r);El.subVectors(t,a);let x=os.dot(El),d=ls.dot(El);if(d>=0&&x<=d)return e.copy(a);let v=x*h-l*d;if(v<=0&&h>=0&&d<=0)return o=h/(h-d),e.copy(i).addScaledVector(ls,o);let m=c*d-x*u;if(m<=0&&u-c>=0&&x-d>=0)return Mh.subVectors(a,s),o=(u-c)/(u-c+(x-d)),e.copy(s).addScaledVector(Mh,o);let p=1/(m+v+f);return r=v*p,o=f*p,e.copy(i).addScaledVector(os,r).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xi=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Li):Li.fromBufferAttribute(a,r),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Xa.subVectors(this.max,Gs),cs.subVectors(t.a,Gs),hs.subVectors(t.b,Gs),fs.subVectors(t.c,Gs),Mn.subVectors(hs,cs),Sn.subVectors(fs,hs),Hn.subVectors(cs,fs);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Hn.z,Hn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Hn.z,0,-Hn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Hn.y,Hn.x,0];return!Ll(e,cs,hs,fs,Xa)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,cs,hs,fs,Xa))?!1:(qa.crossVectors(Mn,Sn),e=[qa.x,qa.y,qa.z],Ll(e,cs,hs,fs,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},on=[new X,new X,new X,new X,new X,new X,new X,new X],Li=new X,Wa=new Xi,cs=new X,hs=new X,fs=new X,Mn=new X,Sn=new X,Hn=new X,Gs=new X,Xa=new X,qa=new X,Gn=new X;function Ll(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Gn.fromArray(n,a);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),h=e.dot(Gn),c=i.dot(Gn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var De=new X,Ya=new qt,pd=0,re=class extends Vi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=t!==void 0?xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):id(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nd(t,this.array)}};var ia=class extends re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var na=class extends re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends re{constructor(t,e,i){super(new Float32Array(t),e,i)}},md=new Xi,Vs=new X,Il=new X,qi=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):md.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Il)),this.expandByPoint(Vs.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xd=0,Mi=new ue,kl=new Ae,us=new X,di=new Xi,Ws=new Xi,qe=new X,pe=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?na:ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Gt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];di.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){let o=e[a];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(di.min,Ws.min),di.expandByPoint(qe),qe.addVectors(di.max,Ws.max),di.expandByPoint(qe)):(di.expandByPoint(Ws.min),di.expandByPoint(Ws.max))}di.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)qe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(qe));if(e)for(let a=0,r=e.length;a<r;a++){let o=e[a],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)qe.fromBufferAttribute(o,h),l&&(us.fromBufferAttribute(t,h),qe.add(us)),s=Math.max(s,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new re(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],h=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new X,l[k]=new X;let c=new X,u=new X,f=new X,x=new qt,d=new qt,v=new qt,m=new X,p=new X;function y(k,P,I){h[k]=h[P]=h[I]=1,c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,I),x.fromBufferAttribute(a,k),d.fromBufferAttribute(a,P),v.fromBufferAttribute(a,I),u.sub(c),f.sub(c),d.sub(x),v.sub(x);let O=1/(d.x*v.y-v.x*d.y);isFinite(O)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(O),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(O),o[k].add(m),o[P].add(m),o[I].add(m),l[k].add(p),l[P].add(p),l[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let k=0,P=b.length;k<P;++k){let I=b[k],O=I.start,C=I.count;for(let E=O,z=O+C;E<z;E+=3)y(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let g=new X,M=new X,S=new X,_=new X;function w(k){S.fromBufferAttribute(s,k),_.copy(S);let P=o[k];g.copy(P),g.sub(S.multiplyScalar(S.dot(P))).normalize(),M.crossVectors(_,P);let O=M.dot(l[k])<0?-1:1;r.setXYZW(k,g.x,g.y,g.z,O)}for(let k=0,P=i.count;k<P;++k)h[k]&&w(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);let s=new X,a=new X,r=new X,o=new X,l=new X,h=new X,c=new X,u=new X;if(t)for(let f=0,x=t.count;f<x;f+=3){let d=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,d),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),c.subVectors(r,a),u.subVectors(s,a),c.cross(u),o.fromBufferAttribute(i,d),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,x=e.count;f<x;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,a),u.subVectors(s,a),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(l.length*c),x=0,d=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?x=l[v]*o.data.stride+o.offset:x=l[v]*c;for(let p=0;p<c;p++)f[d++]=h[x++]}return new re(f,c,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let a=this.morphAttributes;for(let o in a){let l=[],h=a[o];for(let c=0,u=h.length;c<u;c++){let f=h[c],x=t(f,i);l.push(x)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let h=r[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){let x=h[u];c.push(x.toJSON(t.data))}c.length>0&&(s[l]=c,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let a=t.morphAttributes;for(let h in a){let c=[],u=a[h];for(let f=0,x=u.length;f<x;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let h=0,c=r.length;h<c;h++){let u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dl=new X,gd=new X,yd=new Gt,Ii=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dl.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Dl),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||yd.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vd=0,Yi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Cs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(e){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ln=new X,Nl=new X,$a=new X,Ka=new X,Ss=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Nl.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Ka.copy(this.origin).sub(Nl);let a=t.distanceTo(e)*.5,r=-this.direction.dot($a),o=Ka.dot(this.direction),l=-Ka.dot($a),h=Ka.lengthSq(),c=Math.abs(1-r*r),u,f,x,d;if(c>0)if(u=r*l-o,f=r*o-l,d=a*c,u>=0)if(f>=-d)if(f<=d){let v=1/c;u*=v,f*=v,x=u*(u+r*f+2*o)+f*(r*u+f+2*l)+h}else f=a,u=Math.max(0,-(r*f+o)),x=-u*u+f*(f+2*l)+h;else f=-a,u=Math.max(0,-(r*f+o)),x=-u*u+f*(f+2*l)+h;else f<=-d?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),x=-u*u+f*(f+2*l)+h):f<=d?(u=0,f=Math.min(Math.max(-a,-l),a),x=f*(f+2*l)+h):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),x=-u*u+f*(f+2*l)+h);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),x=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nl).addScaledVector($a,f),x}intersectSphere(t,e){if(t.radius<0)return null;ln.subVectors(t.center,this.origin);let i=ln.dot(this.direction),s=ln.dot(ln)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(a=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(a=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,i,s,a){let r=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,u=t.x-r.x,f=t.y-r.y,x=t.z-r.z,d=e.x-r.x,v=e.y-r.y,m=e.z-r.z,p=i.x-r.x,y=i.y-r.y,b=i.z-r.z,g=Math.abs(l),M=Math.abs(h),S=Math.abs(c),_,w,k,P,I,O,C,E,z,D,N,V;if(g>=M&&g>=S?(k=l,O=u,z=d,V=p,l>=0?(_=h,w=c,P=f,I=x,C=v,E=m,D=y,N=b):(_=c,w=h,P=x,I=f,C=m,E=v,D=b,N=y)):M>=S?(k=h,O=f,z=v,V=y,h>=0?(_=c,w=l,P=x,I=u,C=m,E=d,D=b,N=p):(_=l,w=c,P=u,I=x,C=d,E=m,D=p,N=b)):(k=c,O=x,z=m,V=b,c>=0?(_=l,w=h,P=u,I=f,C=d,E=v,D=p,N=y):(_=h,w=l,P=f,I=u,C=v,E=d,D=y,N=p)),k===0)return null;let W=_/k,Z=w/k,J=1/k,H=P-W*O,q=I-Z*O,L=C-W*z,et=E-Z*z,ot=D-W*V,ft=N-Z*V,at=ot*et-ft*L,zt=H*ft-q*ot,Zt=L*q-et*H;if(s){if(at<0||zt<0||Zt<0)return null}else if((at<0||zt<0||Zt<0)&&(at>0||zt>0||Zt>0))return null;let Tt=at+zt+Zt;if(Tt===0)return null;let Bt=J*(at*O+zt*z+Zt*V);return(Tt>0?Bt<0:Bt>0)?null:this.at(Bt/Tt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sh=new ue,Vn=new Ss,Za=new qi,wh=new X,Ja=new X,ja=new X,Qa=new X,Ul=new X,tr=new X,Th=new X,er=new X,vt=class extends Ae{constructor(t=new pe,e=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){tr.set(0,0,0);for(let l=0,h=a.length;l<h;l++){let c=o[l],u=a[l];c!==0&&(Ul.fromBufferAttribute(u,t),r?tr.addScaledVector(Ul,c):tr.addScaledVector(Ul.sub(e),c))}e.add(tr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(a),Vn.copy(t.ray).recast(t.near),!(Za.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Za,wh)===null||Vn.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Sh.copy(a).invert(),Vn.copy(t.ray).applyMatrix4(Sh),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,h=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,f=a.groups,x=a.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,v=f.length;d<v;d++){let m=f[d],p=r[m.materialIndex],y=Math.max(m.start,x.start),b=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let g=y,M=b;g<M;g+=3){let S=o.getX(g),_=o.getX(g+1),w=o.getX(g+2);s=ir(this,p,t,i,h,c,u,S,_,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,x.start),v=Math.min(o.count,x.start+x.count);for(let m=d,p=v;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),g=o.getX(m+2);s=ir(this,r,t,i,h,c,u,y,b,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,v=f.length;d<v;d++){let m=f[d],p=r[m.materialIndex],y=Math.max(m.start,x.start),b=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let g=y,M=b;g<M;g+=3){let S=g,_=g+1,w=g+2;s=ir(this,p,t,i,h,c,u,S,_,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,x.start),v=Math.min(l.count,x.start+x.count);for(let m=d,p=v;m<p;m+=3){let y=m,b=m+1,g=m+2;s=ir(this,r,t,i,h,c,u,y,b,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _d(n,t,e,i,s,a,r,o){let l;if(t.side===Je?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ln,o),l===null)return null;er.copy(o),er.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(er);return h<e.near||h>e.far?null:{distance:h,point:er.clone(),object:n}}function ir(n,t,e,i,s,a,r,o,l,h){n.getVertexPosition(o,Ja),n.getVertexPosition(l,ja),n.getVertexPosition(h,Qa);let c=_d(n,t,e,i,Ja,ja,Qa,Th);if(c){let u=new X;Tn.getBarycoord(Th,Ja,ja,Qa,u),s&&(c.uv=Tn.getInterpolatedAttribute(s,o,l,h,u,new qt)),a&&(c.uv1=Tn.getInterpolatedAttribute(a,o,l,h,u,new qt)),r&&(c.normal=Tn.getInterpolatedAttribute(r,o,l,h,u,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new X,materialIndex:0};Tn.getNormal(Ja,ja,Qa,f.normal),c.face=f,c.barycoord=u}return c}var sa=class extends li{constructor(t=null,e=1,i=1,s,a,r,o,l,h=Ye,c=Ye,u,f){super(null,r,o,l,h,c,s,a,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var aa=class extends re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new ue,Ah=new ue,nr=[],Eh=new Xi,bd=new ue,Xs=new vt,qs=new qi,qn=class extends vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),Eh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Eh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ds),Ah.multiplyMatrices(i,ds),Xs.matrixWorld=Ah,Xs.raycast(t,nr);for(let r=0,o=nr.length;r<o;r++){let l=nr[r];l.instanceId=a,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(s*this.count),s,this.count,eo,Ti));let a=this.morphTexture.source.data.data,r=0;for(let h=0;h<i.length;h++)r+=i[h];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wn=new qi,Md=new qt(.5,.5),sr=new X,An=class{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,a=new Ii,r=new Ii){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Si,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],h=a[3],c=a[4],u=a[5],f=a[6],x=a[7],d=a[8],v=a[9],m=a[10],p=a[11],y=a[12],b=a[13],g=a[14],M=a[15];if(s[0].setComponents(h-r,x-c,p-d,M-y).normalize(),s[1].setComponents(h+r,x+c,p+d,M+y).normalize(),s[2].setComponents(h+o,x+u,p+v,M+b).normalize(),s[3].setComponents(h-o,x-u,p-v,M-b).normalize(),i)s[4].setComponents(l,f,m,g).normalize(),s[5].setComponents(h-l,x-f,p-m,M-g).normalize();else if(s[4].setComponents(h-l,x-f,p-m,M-g).normalize(),e===Si)s[5].setComponents(h+l,x+f,p+m,M+g).normalize();else if(e===vs)s[5].setComponents(l,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){Wn.center.set(0,0,0);let e=Md.distanceTo(t.center);return Wn.radius=.7071067811865476+e,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ch=new ue,Er=class n{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let a=e[s];Ch.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new An),i[s].setFromProjectionMatrix(Ch,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new An),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var ws=class extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Cr=new X,Rr=new X,Rh=new ue,Ys=new Ss,ar=new qi,Ol=new X,Ph=new X,Pr=class extends Ae{constructor(t=new pe,e=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Cr.fromBufferAttribute(e,s-1),Rr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Cr.distanceTo(Rr);t.setAttribute("lineDistance",new de(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),ar.radius+=a,t.ray.intersectsSphere(ar)===!1)return;Rh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Rh);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let x=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let v=x,m=d-1;v<m;v+=h){let p=c.getX(v),y=c.getX(v+1),b=rr(this,t,Ys,l,p,y,v);b&&e.push(b)}if(this.isLineLoop){let v=c.getX(d-1),m=c.getX(x),p=rr(this,t,Ys,l,v,m,d-1);p&&e.push(p)}}else{let x=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let v=x,m=d-1;v<m;v+=h){let p=rr(this,t,Ys,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=rr(this,t,Ys,l,d-1,x,d-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function rr(n,t,e,i,s,a,r){let o=n.geometry.attributes.position;if(Cr.fromBufferAttribute(o,s),Rr.fromBufferAttribute(o,a),e.distanceSqToSegment(Cr,Rr,Ol,Ph)>i)return;Ol.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Ol);if(!(h<t.near||h>t.far))return{distance:h,point:Ph.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var Lh=new X,Ih=new X,ra=class extends Pr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)Lh.fromBufferAttribute(e,s),Ih.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lh.distanceTo(Ih);t.setAttribute("lineDistance",new de(i,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ki=class extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kh=new ue,Vl=new Ss,or=new qi,lr=new X,$i=class extends Ae{constructor(t=new pe,e=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(s),or.radius+=a,t.ray.intersectsSphere(or)===!1)return;kh.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(kh);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let d=f,v=x;d<v;d++){let m=h.getX(d);lr.fromBufferAttribute(u,m),Dh(lr,m,l,s,t,e,this)}}else{let f=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let d=f,v=x;d<v;d++)lr.fromBufferAttribute(u,d),Dh(lr,d,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Dh(n,t,e,i,s,a,r){let o=Vl.distanceSqToPoint(n);if(o<e){let l=new X;Vl.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var oa=class extends li{constructor(t=[],e=jn,i,s,a,r,o,l,h,c){super(t,e,i,s,a,r,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wi=class extends li{constructor(t,e,i,s,a,r,o,l,h){super(t,e,i,s,a,r,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dn=class extends li{constructor(t,e,i=Di,s,a,r,o=Ye,l=Ye,h,c=fn,u=1){if(c!==fn&&c!==mn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,a,r,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends dn{constructor(t,e=Di,i=jn,s,a,r=Ye,o=Ye,l,h=fn){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,s,a,r,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},le=class n extends pe{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],h=[],c=[],u=[],f=0,x=0;d("z","y","x",-1,-1,i,e,t,r,a,0),d("z","y","x",1,-1,i,e,-t,r,a,1),d("x","z","y",1,1,t,i,e,s,r,2),d("x","z","y",1,-1,t,i,-e,s,r,3),d("x","y","z",1,-1,t,e,i,s,a,4),d("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2));function d(v,m,p,y,b,g,M,S,_,w,k){let P=g/_,I=M/w,O=g/2,C=M/2,E=S/2,z=_+1,D=w+1,N=0,V=0,W=new X;for(let Z=0;Z<D;Z++){let J=Z*I-C;for(let H=0;H<z;H++){let q=H*P-O;W[v]=q*y,W[m]=J*b,W[p]=E,h.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=S>0?1:-1,c.push(W.x,W.y,W.z),u.push(H/_),u.push(1-Z/w),N+=1}}for(let Z=0;Z<w;Z++)for(let J=0;J<_;J++){let H=f+J+z*Z,q=f+J+z*(Z+1),L=f+(J+1)+z*(Z+1),et=f+(J+1)+z*Z;l.push(H,q,et),l.push(q,L,et),V+=6}o.addGroup(x,V,k),x+=V,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var En=class n extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let a=[],r=[],o=[],l=[],h=new X,c=new qt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let x=i+u/e*s;h.x=t*Math.cos(x),h.y=t*Math.sin(x),r.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ki=class n extends pe{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),a=Math.floor(a);let c=[],u=[],f=[],x=[],d=0,v=[],m=i/2,p=0;y(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(x,2));function y(){let g=new X,M=new X,S=0,_=(e-t)/i;for(let w=0;w<=a;w++){let k=[],P=w/a,I=P*(e-t)+t;for(let O=0;O<=s;O++){let C=O/s,E=C*l+o,z=Math.sin(E),D=Math.cos(E);M.x=I*z,M.y=-P*i+m,M.z=I*D,u.push(M.x,M.y,M.z),g.set(z,_,D).normalize(),f.push(g.x,g.y,g.z),x.push(C,1-P),k.push(d++)}v.push(k)}for(let w=0;w<s;w++)for(let k=0;k<a;k++){let P=v[k][w],I=v[k+1][w],O=v[k+1][w+1],C=v[k][w+1];(t>0||k!==0)&&(c.push(P,I,C),S+=3),(e>0||k!==a-1)&&(c.push(I,O,C),S+=3)}h.addGroup(p,S,0),p+=S}function b(g){let M=d,S=new qt,_=new X,w=0,k=g===!0?t:e,P=g===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*P,0),f.push(0,P,0),x.push(.5,.5),d++;let I=d;for(let O=0;O<=s;O++){let E=O/s*l+o,z=Math.cos(E),D=Math.sin(E);_.x=k*D,_.y=m*P,_.z=k*z,u.push(_.x,_.y,_.z),f.push(0,P,0),S.x=z*.5+.5,S.y=D*.5*P+.5,x.push(S.x,S.y),d++}for(let O=0;O<s;O++){let C=M+O,E=I+O;g===!0?c.push(E,E+1,C):c.push(E+1,E,C),w+=3}h.addGroup(p,w,g===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yn=class n extends Ki{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lr=class n extends pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let a=[],r=[];o(s),h(i),c(),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(a.slice(),3)),this.setAttribute("uv",new de(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new X,g=new X,M=new X;for(let S=0;S<e.length;S+=3)x(e[S+0],b),x(e[S+1],g),x(e[S+2],M),l(b,g,M,y)}function l(y,b,g,M){let S=M+1,_=[];for(let w=0;w<=S;w++){_[w]=[];let k=y.clone().lerp(g,w/S),P=b.clone().lerp(g,w/S),I=S-w;for(let O=0;O<=I;O++)O===0&&w===S?_[w][O]=k:_[w][O]=k.clone().lerp(P,O/I)}for(let w=0;w<S;w++)for(let k=0;k<2*(S-w)-1;k++){let P=Math.floor(k/2);k%2===0?(f(_[w][P+1]),f(_[w+1][P]),f(_[w][P])):(f(_[w][P+1]),f(_[w+1][P+1]),f(_[w+1][P]))}}function h(y){let b=new X;for(let g=0;g<a.length;g+=3)b.x=a[g+0],b.y=a[g+1],b.z=a[g+2],b.normalize().multiplyScalar(y),a[g+0]=b.x,a[g+1]=b.y,a[g+2]=b.z}function c(){let y=new X;for(let b=0;b<a.length;b+=3){y.x=a[b+0],y.y=a[b+1],y.z=a[b+2];let g=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;r.push(g,1-M)}d(),u()}function u(){for(let y=0;y<r.length;y+=6){let b=r[y+0],g=r[y+2],M=r[y+4],S=Math.max(b,g,M),_=Math.min(b,g,M);S>.9&&_<.1&&(b<.2&&(r[y+0]+=1),g<.2&&(r[y+2]+=1),M<.2&&(r[y+4]+=1))}}function f(y){a.push(y.x,y.y,y.z)}function x(y,b){let g=y*3;b.x=t[g+0],b.y=t[g+1],b.z=t[g+2]}function d(){let y=new X,b=new X,g=new X,M=new X,S=new qt,_=new qt,w=new qt;for(let k=0,P=0;k<a.length;k+=9,P+=6){y.set(a[k+0],a[k+1],a[k+2]),b.set(a[k+3],a[k+4],a[k+5]),g.set(a[k+6],a[k+7],a[k+8]),S.set(r[P+0],r[P+1]),_.set(r[P+2],r[P+3]),w.set(r[P+4],r[P+5]),M.copy(y).add(b).add(g).divideScalar(3);let I=m(M);v(S,P+0,y,I),v(_,P+2,b,I),v(w,P+4,g,I)}}function v(y,b,g,M){M<0&&y.x===1&&(r[b]=y.x-1),g.x===0&&g.z===0&&(r[b]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ha=class n extends Lr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},mi=class n extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=t/o,f=e/l,x=[],d=[],v=[],m=[];for(let p=0;p<c;p++){let y=p*f-r;for(let b=0;b<h;b++){let g=b*u-a;d.push(g,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+h*p,g=y+h*(p+1),M=y+1+h*(p+1),S=y+1+h*p;x.push(b,g,S),x.push(g,M,S)}this.setIndex(x),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ts=class n extends pe{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],c=[],u=t,f=(e-t)/s,x=new X,d=new qt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=a+m/i*r;x.x=u*Math.cos(p),x.y=u*Math.sin(p),l.push(x.x,x.y,x.z),h.push(0,0,1),d.x=(x.x/e+1)/2,d.y=(x.y/e+1)/2,c.push(d.x,d.y)}u+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let y=p+m,b=y,g=y+i+1,M=y+i+2,S=y+1;o.push(b,g,S),o.push(g,M,S)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var fa=class n extends pe{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),h=0,c=[],u=new X,f=new X,x=[],d=[],v=[],m=[];for(let p=0;p<=i;p++){let y=[],b=p/i,g=r+b*o,M=t*Math.cos(g),S=Math.sqrt(t*t-M*M),_=0;p===0&&r===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let k=w/e,P=s+k*a;u.x=-S*Math.cos(P),u.y=M,u.z=S*Math.sin(P),d.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(k+_,1-b),y.push(h++)}c.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=c[p][y+1],g=c[p][y],M=c[p+1][y],S=c[p+1][y+1];(p!==0||r>0)&&x.push(b,g,S),(p!==i-1||l<Math.PI)&&x.push(g,M,S)}this.setIndex(x),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Nh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Nh(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function si(n){let t={};for(let e=0;e<n.length;e++){let i=ts(n[e]);for(let s in i)t[s]=i[s]}return t}function Nh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Cf={clone:ts,merge:si},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ir=class extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Me=class extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kr=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dr=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function cr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];t:{e:{let r;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=e[++i],t<s)break e}r=e.length;break i}if(!(t>=a)){let o=e[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=e[--i-1],t>=a)break e}r=i,i=0;break i}break t}for(;i<r;){let o=i+r>>>1;t<e[o]?r=o:i=o+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)e[r]=i[a+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nr=class extends Cn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:a=t,o=2*e-i;break;case Gl:a=s.length-2,o=e+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:r=t,l=2*i-e;break;case Gl:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=a*c,this._offsetNext=r*c}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,x=this._weightNext,d=(i-e)/(s-e),v=d*d,m=v*d,p=-f*m+2*f*v-f*d,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*d+1,b=(-1-x)*m+(1.5+x)*v+.5*d,g=x*m-x*v;for(let M=0;M!==o;++M)a[M]=p*r[c+M]+y*r[h+M]+b*r[l+M]+g*r[u+M];return a}},Ur=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(s-e),u=1-c;for(let f=0;f!==o;++f)a[f]=r[h+f]*u+r[l+f]*c;return a}},Or=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fr=class extends Cn{interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let d=(i-e)/(s-e),v=1-d;for(let m=0;m!==o;++m)a[m]=r[h+m]*v+r[l+m]*d;return a}let f=o*2,x=t-1;for(let d=0;d!==o;++d){let v=r[h+d],m=r[l+d],p=x*f+d*2,y=u[p],b=u[p+1],g=t*f+d*2,M=c[g],S=c[g+1],_=Ed(i,e,y,M,s);a[d]=Rf(_,v,b,S,m)}return a}};function Rf(n,t,e,i,s){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*i+n*n*n*s}function Ad(n,t,e,i,s){let a=1-n;return 3*a*a*(e-t)+6*a*n*(i-e)+3*n*n*(s-i)}function Ed(n,t,e,i,s){let a=(n-t)/(s-t);for(let r=0;r<8;r++){let o=Rf(a,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Ad(a,t,e,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var xi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),cr(t.settings)&&(i.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Mr:e=this.InterpolantFactoryMethodLinear;break;case ur:e=this.InterpolantFactoryMethodSmooth;break;case zl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return ur;case this.InterpolantFactoryMethodBezier:return zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;cr(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;cr(this.settings)&&(Oh(this.settings.inTangents,t),Oh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>e;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&td(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Ht("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ur,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,x=u+i;for(let d=0;d!==i;++d){let v=e[u+d];if(v!==e[f+d]||v!==e[x+d]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let u=o*i,f=r*i;for(let x=0;x!==i;++x)e[f+x]=e[u+x]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,h=0;h!==i;++h)e[l+h]=e[o+h];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,cr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Oh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Mr;var Rn=class extends xi{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Ks;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}};zr.prototype.ValueTypeName="color";var Br=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}};Br.prototype.ValueTypeName="number";var Hr=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Wi.slerpFlat(a,0,r,h-o,r,h,l);return a}},ua=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Hr(this.times,this.values,this.getValueSize(),t)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends xi{constructor(t,e,i){super(t,e,i)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Ks;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}};Gr.prototype.ValueTypeName="vector";var Vr=class{constructor(t,e,i){let s=this,a=!1,r=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,a===!1&&s.onStart!==void 0&&s.onStart(c,r,o),a=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let x=h[u],d=h[u+1];if(x.global&&(x.lastIndex=0),x.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pf=new Vr,Wr=class{constructor(t){this.manager=t!==void 0?t:Pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=class extends Ae{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$n=class extends da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new ue,Fh=new X,zh=new X,Xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new An,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,h=s?s.y/a.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},hr=new X,fr=new Wi,Gi=new X,pa=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hr,fr,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,fr,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(hr,fr,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,fr,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wn=new X,Bh=new qt,Hh=new qt,Ze=class extends pa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,Hh),e.subVectors(Hh,Bh)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,h=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/h,s*=r.width/l,i*=r.height/h}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ma=class extends pa{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,r=a+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wl=class extends Xr{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ms=-90,xs=1,As=class extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(ms,xs,t,e);s.layers=this.layers,this.add(s);let a=new Ze(ms,xs,t,e);a.layers=this.layers,this.add(a);let r=new Ze(ms,xs,t,e);r.layers=this.layers,this.add(r);let o=new Ze(ms,xs,t,e);o.layers=this.layers,this.add(o);let l=new Ze(ms,xs,t,e);l.layers=this.layers,this.add(l);let h=new Ze(ms,xs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(let h of e)this.remove(h);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,f,x),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},qr=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var yc="\\[\\]\\.:\\/",Cd=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",Rd="[^"+yc.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",vc),Ld=/(WCOD+)?/.source.replace("WCOD",Rd),Id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Dd=new RegExp("^"+Pd+Ld+Id+kd+"$"),Nd=["material","materials","bones","map"],Xl=class{constructor(t,e,i){let s=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cd,"")}static parseTrackName(t){let e=Dd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Nd.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let r=t[s];if(r===void 0){let h=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Xl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var Tc=class Tc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=s,this}};Tc.prototype.isMatrix2=!0;var ql=Tc;function _c(n,t,e,i){let s=Ud(i);switch(e){case cc:return n*t;case eo:return n*t/s.components*s.byteLength;case io:return n*t/s.components*s.byteLength;case In:return n*t*2/s.components*s.byteLength;case no:return n*t*2/s.components*s.byteLength;case hc:return n*t*3/s.components*s.byteLength;case Ui:return n*t*4/s.components*s.byteLength;case so:return n*t*4/s.components*s.byteLength;case va:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:case lo:return Math.max(n,16)*Math.max(t,8)/4;case ao:case oo:return Math.max(n,8)*Math.max(t,8)/2;case co:case ho:case uo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fo:case Sa:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Po:case Lo:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Do:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wa:case No:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(n){switch(n){case fi:case ac:return{byteLength:1,components:1};case Ps:case rc:case Ni:return{byteLength:2,components:1};case Qr:case to:return{byteLength:2,components:4};case Di:case jr:case Ti:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jf(){let n=null,t=!1,e=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Fd(n){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,c),o.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){let c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((x,d)=>x.start-d.start);let f=0;for(let x=1;x<u.length;x++){let d=u[f],v=u[x];v.start<=d.start+d.count+1?d.count=Math.max(d.count,v.start+v.count-d.start):(++f,u[f]=v)}u.length=f+1;for(let x=0,d=u.length;x<d;x++){let v=u[x];n.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:a,update:r}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,U0=`uniform sampler2D dfgLUT;
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
}`,O0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
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
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
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
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform float backgroundBlurriness;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,fm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,$t={alphahash_fragment:zd,alphahash_pars_fragment:Bd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:$d,begin_vertex:Kd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:n0,color_fragment:s0,color_pars_fragment:a0,color_pars_vertex:r0,color_vertex:o0,common:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:f0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:x0,envmap_common_pars_fragment:g0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:_0,fog_vertex:b0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:C0,lights_pars_begin:R0,lights_toon_fragment:L0,lights_toon_pars_fragment:I0,lights_phong_fragment:k0,lights_phong_pars_fragment:D0,lights_physical_fragment:N0,lights_physical_pars_fragment:U0,lights_fragment_begin:O0,lights_fragment_maps:F0,lights_fragment_end:z0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:$0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:j0,morphnormal_vertex:Q0,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:ip,normal_fragment_maps:np,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:fp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:xp,dithering_pars_fragment:gp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:bp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Ap,skinnormal_vertex:Ep,specularmap_fragment:Cp,specularmap_pars_fragment:Rp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Lp,transmission_fragment:Ip,transmission_pars_fragment:kp,uv_pars_fragment:Dp,uv_pars_vertex:Np,uv_vertex:Up,worldpos_vertex:Op,background_vert:Fp,background_frag:zp,backgroundCube_vert:Bp,backgroundCube_frag:Hp,cube_vert:Gp,cube_frag:Vp,depth_vert:Wp,depth_frag:Xp,distance_vert:qp,distance_frag:Yp,equirect_vert:$p,equirect_frag:Kp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:jp,meshbasic_frag:Qp,meshlambert_vert:tm,meshlambert_frag:em,meshmatcap_vert:im,meshmatcap_frag:nm,meshnormal_vert:sm,meshnormal_frag:am,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:fm,points_vert:um,points_frag:dm,shadow_vert:pm,shadow_frag:mm,sprite_vert:xm,sprite_frag:gm},Mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Qi={basic:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:si([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:si([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:si([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:si([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:si([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:si([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:si([Mt.common,Mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:si([Mt.lights,Mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Qi.physical={uniforms:si([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Oo={r:0,b:0,g:0},ym=new ue,Qf=new Gt;Qf.set(-1,0,0,0,1,0,0,0,1);function vm(n,t,e,i,s,a){let r=new Ot(0),o=s===!0?0:1,l,h,c=null,u=0,f=null;function x(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let g=y.backgroundBlurriness>0;b=t.get(b,g)}return b}function d(y){let b=!1,g=x(y);g===null?m(r,o):g&&g.isColor&&(m(g,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){let g=x(b);g&&g.isCubeTexture?(h===void 0&&(h=new vt(new le(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:ts(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(b.backgroundRotation)).transpose(),g.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Qf),h.material.toneMapped=Qt.getTransfer(g.colorSpace)!==ce,(c!==g||u!==g.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,c=g,u=g.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new vt(new mi(2,2),new Zi({name:"BackgroundMaterial",uniforms:ts(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(g.colorSpace)!==ce,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||u!==g.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=g,u=g.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Oo,gc(n)),e.buffers.color.setClear(Oo.r,Oo.g,Oo.b,b,a)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,b=1){r.set(y),o=b,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(r,o)},render:d,addToRenderList:v,dispose:p}}function _m(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(I,O,C,E,z){let D=!1,N=u(I,E,C,O);a!==N&&(a=N,h(a.object)),D=x(I,E,C,z),D&&d(I,E,C,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,g(I,O,C,E),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function h(I){return n.bindVertexArray(I)}function c(I){return n.deleteVertexArray(I)}function u(I,O,C,E){let z=E.wireframe===!0,D=i[O.id];D===void 0&&(D={},i[O.id]=D);let N=I.isInstancedMesh===!0?I.id:0,V=D[N];V===void 0&&(V={},D[N]=V);let W=V[C.id];W===void 0&&(W={},V[C.id]=W);let Z=W[z];return Z===void 0&&(Z=f(l()),W[z]=Z),Z}function f(I){let O=[],C=[],E=[];for(let z=0;z<e;z++)O[z]=0,C[z]=0,E[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:C,attributeDivisors:E,object:I,attributes:{},index:null}}function x(I,O,C,E){let z=a.attributes,D=O.attributes,N=0,V=C.getAttributes();for(let W in V)if(V[W].location>=0){let J=z[W],H=D[W];if(H===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),J===void 0||J.attribute!==H||H&&J.data!==H.data)return!0;N++}return a.attributesNum!==N||a.index!==E}function d(I,O,C,E){let z={},D=O.attributes,N=0,V=C.getAttributes();for(let W in V)if(V[W].location>=0){let J=D[W];J===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let H={};H.attribute=J,J&&J.data&&(H.data=J.data),z[W]=H,N++}a.attributes=z,a.attributesNum=N,a.index=E}function v(){let I=a.newAttributes;for(let O=0,C=I.length;O<C;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let C=a.newAttributes,E=a.enabledAttributes,z=a.attributeDivisors;C[I]=1,E[I]===0&&(n.enableVertexAttribArray(I),E[I]=1),z[I]!==O&&(n.vertexAttribDivisor(I,O),z[I]=O)}function y(){let I=a.newAttributes,O=a.enabledAttributes;for(let C=0,E=O.length;C<E;C++)O[C]!==I[C]&&(n.disableVertexAttribArray(C),O[C]=0)}function b(I,O,C,E,z,D,N){N===!0?n.vertexAttribIPointer(I,O,C,z,D):n.vertexAttribPointer(I,O,C,E,z,D)}function g(I,O,C,E){v();let z=E.attributes,D=C.getAttributes(),N=O.defaultAttributeValues;for(let V in D){let W=D[V];if(W.location>=0){let Z=z[V];if(Z===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let J=Z.normalized,H=Z.itemSize,q=t.get(Z);if(q===void 0)continue;let L=q.buffer,et=q.type,ot=q.bytesPerElement,ft=et===n.INT||et===n.UNSIGNED_INT||Z.gpuType===jr;if(Z.isInterleavedBufferAttribute){let at=Z.data,zt=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Zt=Z.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let Tt=0;Tt<W.locationSize;Tt++)p(W.location+Tt,at.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,L);for(let Tt=0;Tt<W.locationSize;Tt++)b(W.location+Tt,H/W.locationSize,et,J,zt*ot,(Zt+H/W.locationSize*Tt)*ot,ft)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)p(W.location+at,Z.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);n.bindBuffer(n.ARRAY_BUFFER,L);for(let at=0;at<W.locationSize;at++)b(W.location+at,H/W.locationSize,et,J,H*ot,H/W.locationSize*at*ot,ft)}}else if(N!==void 0){let J=N[V];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(W.location,J);break;case 3:n.vertexAttrib3fv(W.location,J);break;case 4:n.vertexAttrib4fv(W.location,J);break;default:n.vertexAttrib1fv(W.location,J)}}}}y()}function M(){k();for(let I in i){let O=i[I];for(let C in O){let E=O[C];for(let z in E){let D=E[z];for(let N in D)c(D[N].object),delete D[N];delete E[z]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let C in O){let E=O[C];for(let z in E){let D=E[z];for(let N in D)c(D[N].object),delete D[N];delete E[z]}}delete i[I.id]}function _(I){for(let O in i){let C=i[O];for(let E in C){let z=C[E];if(z[I.id]===void 0)continue;let D=z[I.id];for(let N in D)c(D[N].object),delete D[N];delete z[I.id]}}}function w(I){for(let O in i){let C=i[O],E=I.isInstancedMesh===!0?I.id:0,z=C[E];if(z!==void 0){for(let D in z){let N=z[D];for(let V in N)c(N[V].object),delete N[V];delete z[D]}delete C[E],Object.keys(C).length===0&&delete i[O]}}}function k(){P(),r=!0,a!==s&&(a=s,h(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function bm(n,t,e){let i;function s(l){i=l}function a(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let f=0;for(let x=0;x<c;x++)f+=h[x];e.update(f,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Mm(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==Ui&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==fi&&_!==Ti&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Ut("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:g,maxSamples:M,samples:S}}function Sm(n){let t=this,e=null,i=0,s=!1,a=!1,r=new Ii,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let x=u.length!==0||f||i!==0||s;return s=f,i=u.length,x},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,x){let d=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||d===null||d.length===0||a&&!m)a?c(null):h();else{let y=a?0:i,b=y*4,g=p.clippingState||null;l.value=g,g=c(d,f,b,x);for(let M=0;M!==b;++M)g[M]=e[M];p.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,x,d){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,d!==!0||m===null){let p=x+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,g=x;b!==v;++b,g+=4)r.copy(u[b]).applyMatrix4(y,o),r.normal.toArray(m,g),m[g+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ca=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Zn});a.uniforms.tEquirect.value=e;let r=new vt(s,a),o=e.minFilter;return e.minFilter===pn&&(e.minFilter=oi),new As(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}},Lf=256,wm=3,Tm=20,tu=256,eu=16,Am=3,Em=new X,Cm=new Ot,zo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new vt(new le(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){let{size:r=256,position:o=Em}=a,l=this._renderer;this._setSize(r);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,x=l.autoClearDepth,d=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Cm));let m=new As(i,s,c);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=x,l.autoClearStencil=d,t.background=v,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Lf,Af(t))}_fromTexture(t,e){t.mapping===jn||t.mapping===Rs?this._setSize(t.image.length===0?Lf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=If(t,!1,!1),i=Math.log2(t)-wm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=If(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jn||t.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rm(),this._integrationMaterial=Pm());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/eu);for(let r=0;r<=i;r++){let o=n.lodToRoughness(r,i);if(r>i-Am)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(tu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Lm());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function If(n,t,e){return new Ca(n,{minFilter:pn,generateMipmaps:t,type:Ni,colorSpace:Zs,depthBuffer:e})}function Ra(n,t,e){return new Zi({name:n,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Je,blending:Zn,depthTest:!1,depthWrite:!1})}function Rm(){return Ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tu}u

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
	`)}function Pm(){return Ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eu}},`

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
	`)}function Lm(){return Ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tm}
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
	`)}function kf(){return Ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Df(){return Ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Im(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,x=!1){return f==null?null:x?r(f):a(f)}function a(f){if(f&&f.isTexture){let x=f.mapping;if(x===Kr||x===Zr)if(t.has(f)){let d=t.get(f).texture;return o(d,f.mapping)}else{let d=f.image;if(d&&d.height>0){let v=new Ca(d.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",h),o(v.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let x=f.mapping,d=x===Kr||x===Zr,v=x===jn||x===Rs;if(d||v){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new zo(n)),m=d?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return d&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new zo(n)),m=d?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,x){return x===Kr?f.mapping=jn:x===Zr&&(f.mapping=Rs),f}function l(f){let x=0,d=6;for(let v=0;v<d;v++)f[v]!==void 0&&x++;return x===d}function h(f){let x=f.target;x.removeEventListener("dispose",h);let d=t.get(x);d!==void 0&&(t.delete(x),d.dispose())}function c(f){let x=f.target;x.removeEventListener("dispose",c);let d=e.get(x);d!==void 0&&(e.delete(x),d.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function km(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$s("WebGLRenderer: "+i+" extension not supported."),s}}}function Dm(n,t,e,i){let s={},a=new WeakMap,r=new FinalizationRegistry(d=>delete s[d]);function o(d){l(d.target)}function l(d){d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id],r.unregister(d);let v=a.get(d);v&&(t.remove(v),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function h(d,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),r.register(v,v.id,v),e.memory.geometries++),v}function c(d){let v=d.attributes;for(let m in v)t.update(v[m],n.ARRAY_BUFFER)}function u(d){let v=d.index,m=d.attributes.position,p=0;if(m===void 0)return;let y=v!==null?v.array.length:m.array.length/3-1,b=m.count>=65535?na:ia,g=new b(Math.ceil(y/3)*6,1),M=g.array;if(v!==null){let _=v.array;p=v.version;for(let w=0,k=0;w<y;w+=3){let P=_[w+0],I=_[w+1],O=_[w+2];M[k++]=P,M[k++]=I,M[k++]=I,M[k++]=O,M[k++]=O,M[k++]=P}}else{p=m.version;for(let _=0,w=0;_<y;_+=3){let k=_+0,P=_+1,I=_+2;M[w++]=k,M[w++]=P,M[w++]=P,M[w++]=I,M[w++]=I,M[w++]=k}}g.version=p;let S=a.get(d);S&&t.remove(S),a.set(d,g)}function f(d){let v=a.get(d);if(v){let m=d.index;m!==null&&v.version<m.version&&u(d)}else u(d);return a.get(d)}function x(){for(let d in s){let v=s[d].deref();v!==void 0&&l(v)}}return{get:h,update:c,getWireframeAttribute:f,dispose:x}}function Nm(n,t,e){let i;function s(u){i=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,f){n.drawElements(i,f,a,u*r),e.update(f,i,1)}function h(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,a,u*r,x),e.update(f,i,x))}function c(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,x);let v=0;for(let m=0;m<x;m++)v+=f[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Um(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:Ht("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Om(n,t,e){let i=new WeakMap,s=new be;function a(r,o,l){let h=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,f=i.get(o);if(f===void 0||f.count!==u){let k=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let x=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;x===!0&&(b=1),d===!0&&(b=2),v===!0&&(b=3);let g=o.attributes.position.count*b,M=1;g>t.maxTextureSize&&(M=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let S=new Float32Array(g*M*4*u),_=new Qs(S,g,M,u);_.type=Ti,_.needsUpdate=!0;let w=b*4;for(let P=0;P<u;P++){let I=m[P],O=p[P],C=y[P],E=g*M*4*P;for(let z=0;z<I.count;z++){let D=z*w;x===!0&&(s.fromBufferAttribute(I,z),S[E+D+0]=s.x,S[E+D+1]=s.y,S[E+D+2]=s.z,S[E+D+3]=0),d===!0&&(s.fromBufferAttribute(O,z),S[E+D+4]=s.x,S[E+D+5]=s.y,S[E+D+6]=s.z,S[E+D+7]=0),v===!0&&(s.fromBufferAttribute(C,z),S[E+D+8]=s.x,S[E+D+9]=s.y,S[E+D+10]=s.z,S[E+D+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new qt(g,M)},i.set(o,f),o.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let x=0;for(let v=0;v<h.length;v++)x+=h[v];let d=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",d),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Fm(n,t,e,i,s){let a=new WeakMap;function r(h){let c=s.render.frame,u=h.geometry,f=t.get(h,u);if(a.get(f)!==c&&(t.update(f),a.set(f,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),a.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,c))),h.isSkinnedMesh){let x=h.skeleton;a.get(x)!==c&&(x.update(),a.set(x,c))}return f}function o(){a=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var zm={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function Bm(n,t,e,i,s,a){let r=new pi(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new pe;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let u=new Ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new vt(c,u),x=new ma(-1,1,1,-1,0,1),d=null,v=null,m=!1,p,y=null,b=[],g=!1;this.setSize=function(M,S){r.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let _=0;_<b.length;_++){let w=b[_];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){b=M,g=b.length>0&&b[0].isRenderPass===!0;let S=r.width,_=r.height;b.length>0&&o===null&&(o=new pi(S,_,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new pi(S,_,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&b.some(k=>k.needsDepthTexture===!0);w!==(r.depthTexture!==null)&&(w===!0&&h===null&&(h=new dn(S,_),a===!0&&(h.format=mn,h.type=Qn)),r.dispose(),r.depthTexture=w?h:null,r.resolveDepthBuffer=w,r.storeMultisampledDepthBuffer=w);for(let k=0;k<b.length;k++){let P=b[k];P.setSize&&P.setSize(S,_),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(M,S){if(m||M.toneMapping===Ji&&b.length===0)return!1;if(y=S,S!==null){let _=S.width,w=S.height;(r.width!==_||r.height!==w)&&this.setSize(_,w)}return g===!1&&M.setRenderTarget(r),p=M.toneMapping,M.toneMapping=Ji,!0},this.hasRenderPass=function(){return g},this.end=function(M,S){M.toneMapping=p,m=!0;let _=r,w=o;for(let k=0;k<b.length;k++){let P=b[k];P.enabled!==!1&&(P.render(M,w,_,S),P.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(d!==M.outputColorSpace||v!==M.toneMapping){d=M.outputColorSpace,v=M.toneMapping,u.defines={},Qt.getTransfer(d)===ce&&(u.defines.SRGB_TRANSFER="");let k=zm[v];k&&(u.defines[k]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(y),M.render(f,x),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var iu=new li,nu=new dn(1,1),su=new la(1),au=new Qs,ru=new Ar,ou=new oa,Nf=[],Uf=[],Of=new Float32Array(16),Ff=new Float32Array(9),zf=new Float32Array(4);function Is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=Nf[s];if(a===void 0&&(a=new Float32Array(s),Nf[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Uf[t];e===void 0&&(e=new Int32Array(t),Uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Hm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function Wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Xm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;zf.set(i),n.uniformMatrix2fv(this.addr,!1,zf),Be(e,i)}}function qm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;Ff.set(i),n.uniformMatrix3fv(this.addr,!1,Ff),Be(e,i)}}function Ym(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),Be(e,i)}}function $m(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function Go(n){return n.version===0&&(n.compareFunction=dc,n.needsUpdate=!0),n}function ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=Go(nu):a=iu,e.setTexture2D(t||a,s)}function nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ru,s)}function sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Go(su):a=ou,e.setTextureCube(t||a,s)}function ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||au,s)}function rx(n){switch(n){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return jm;case 36294:return Qm;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ax}}function ox(n,t){n.uniform1fv(this.addr,t)}function lx(n,t){let e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function cx(n,t){let e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function hx(n,t){let e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function fx(n,t){let e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ux(n,t){let e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dx(n,t){let e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function px(n,t){n.uniform1iv(this.addr,t)}function mx(n,t){n.uniform2iv(this.addr,t)}function xx(n,t){n.uniform3iv(this.addr,t)}function gx(n,t){n.uniform4iv(this.addr,t)}function yx(n,t){n.uniform1uiv(this.addr,t)}function vx(n,t){n.uniform2uiv(this.addr,t)}function _x(n,t){n.uniform3uiv(this.addr,t)}function bx(n,t){n.uniform4uiv(this.addr,t)}function Mx(n,t,e){let i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=Go(nu):r=iu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function Sx(n,t,e){let i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ru,a[r])}function wx(n,t,e){let i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Go(su):r=ou;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||r,a[o])}function Tx(n,t,e){let i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||au,a[r])}function Ax(n){switch(n){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return fx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return xx;case 35669:case 35673:return gx;case 5125:return yx;case 36294:return vx;case 36295:return _x;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}var Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}},Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ax(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,e[o.id],i)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Bf(n,t){n.seq.push(t),n.map[t.id]=t}function Ex(n,t,e){let i=n.name,s=i.length;for(Ac.lastIndex=0;;){let a=Ac.exec(i),r=Ac.lastIndex,o=a[1],l=a[2]==="]",h=a[3];if(l&&(o=o|0),h===void 0||h==="["&&r+2===s){Bf(e,h===void 0?new Cc(o,n,t):new Rc(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Pc(o),Bf(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Ex(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){let o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function Hf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Cx=37297,Rx=0;function Px(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}var Gf=new Gt;function Lx(n){Qt._getMatrix(Gf,Qt.workingColorSpace,n);let t=`mat3( ${Gf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Js:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Px(n.getShaderSource(t),o)}else return a}function Ix(n,t){let e=Lx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kx={[jl]:"Linear",[Ql]:"Reinhard",[tc]:"Cineon",[ga]:"ACESFilmic",[ic]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function Dx(n,t){let e=kx[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fo=new X;function Nx(){Qt.getLuminanceCoefficients(Fo);let n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function Ox(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Ea(n){return n!==""}function Wf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(zx,Bx)}function Bx(n,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Lc(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(Hx,Gx)}function Gx(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Vx={[xa]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Wx(n){return Vx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xx={[Rs]:"ENVMAP_MODE_REFRACTION"};function qx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yx={[$r]:"ENVMAP_BLENDING_MULTIPLY",[hf]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function $x(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[n.combine]||"ENVMAP_BLENDING_NONE"}function Kx(n,t,e,i){let s=n.getContext(),a=e.defines,r=e.vertexShader,o=e.fragmentShader,l=Wx(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=qx(e),u=$x(e),f=Ux(e),x=Ox(a),d=s.createProgram(),v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ea).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ea).join(`
`),m.length>0&&(m+=`
`)):(v=[Yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),m=[Yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ji?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),r=Lc(r),r=Wf(r,e),r=Xf(r,e),o=Lc(o),o=Wf(o,e),o=Xf(o,e),r=qf(r),o=qf(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+v+r,b=p+m+o,g=Hf(s,s.VERTEX_SHADER,y),M=Hf(s,s.FRAGMENT_SHADER,b);s.attachShader(d,g),s.attachShader(d,M),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function S(P){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(d)||"",O=s.getShaderInfoLog(g)||"",C=s.getShaderInfoLog(M)||"",E=I.trim(),z=O.trim(),D=C.trim(),N=!0,V=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,g,M);else{let W=Vf(s,g,"vertex"),Z=Vf(s,M,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+E+`
`+W+`
`+Z)}else E!==""?Ut("WebGLProgram: Program Info Log:",E):(z===""||D==="")&&(V=!1);V&&(P.diagnostics={runnable:N,programLog:E,vertexShader:{log:z,prefix:v},fragmentShader:{log:D,prefix:m}})}s.deleteShader(g),s.deleteShader(M),_=new Ls(s,d),w=Fx(s,d)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(d,Cx)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=g,this.fragmentShader=M,this}var Zx=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}};function Jx(n){return n===In||n===Sa||n===wa}function jx(n,t,e,i,s,a){let r=new ta,o=new Ic,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,w,k,P,I,O){let C=P.fog,E=I.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=t.get(_.envMap||z,D),V=f[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Z=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,J=Z!==void 0?Z.length:0,H=0;E.morphAttributes.position!==void 0&&(H=1),E.morphAttributes.normal!==void 0&&(H=2),E.morphAttributes.color!==void 0&&(H=3);let q,L,et,ot;if(V){let bt=Qi[V];q=bt.vertexShader,L=bt.fragmentShader}else{q=_.vertexShader,L=_.fragmentShader;let bt=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,bt,fe),et=bt.id,ot=fe.id}let ft=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),zt=I.isInstancedMesh===!0,Zt=I.isBatchedMesh===!0,Tt=!!_.map,Bt=!!_.matcap,ee=!!N,Kt=ee&&N.isPMREMTexture===!0,Ie=!!_.aoMap,Ce=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,Hi=!!_.displacementMap,Ve=!!_.emissiveMap,yi=!!_.metalnessMap,vi=!!_.roughnessMap,_i=_.anisotropy>0,G=_.clearcoat>0,bi=_.diffuseRoughness>0,ve=_.dispersion>0,_e=_.retroreflectivity>0,_t=_.iridescence>0,Fe=_.sheen>0,Nt=_.transmission>0,Vt=_i&&!!_.anisotropyMap,R=G&&!!_.clearcoatMap,T=G&&!!_.clearcoatNormalMap,$=G&&!!_.clearcoatRoughnessMap,rt=bi&&!!_.diffuseRoughnessMap,st=_t&&!!_.iridescenceMap,ut=_t&&!!_.iridescenceThicknessMap,gt=Fe&&!!_.sheenColorMap,tt=Fe&&!!_.sheenRoughnessMap,it=!!_.specularMap,pt=!!_.specularColorMap,U=!!_.specularIntensityMap,nt=Nt&&!!_.transmissionMap,Q=Nt&&!!_.thicknessMap,mt=!!_.gradientMap,ht=!!_.alphaMap,dt=_.alphaTest>0,Lt=!!_.alphaHash,Yt=!!_.extensions,lt=Ji;_.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(lt=n.toneMapping);let kt=Kt?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,Xt={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:L,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Zt,batchingColor:Zt&&I._colorsTexture!==null,instancing:zt,instancingColor:zt&&I.instanceColor!==null,instancingMorph:zt&&I.morphTexture!==null,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Tt,matcap:Bt,envMap:ee,envMapMode:ee&&N.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?kt.length-1:null,envMapSize:Kt?kt[0].width:null,aoMap:Ie,lightMap:Ce,bumpMap:Qe,normalMap:Se,displacementMap:Hi,emissiveMap:Ve,normalMapObjectSpace:Se&&_.normalMapType===pf,normalMapTangentSpace:Se&&_.normalMapType===Uo,packedNormalMap:Se&&_.normalMapType===Uo&&Jx(_.normalMap.format),metalnessMap:yi,roughnessMap:vi,anisotropy:_i,anisotropyMap:Vt,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:bi,diffuseRoughnessMap:rt,dispersion:ve,retroreflection:_e,iridescence:_t,iridescenceMap:st,iridescenceThicknessMap:ut,sheen:Fe,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:pt,specularIntensityMap:U,transmission:Nt,transmissionMap:nt,thicknessMap:Q,gradientMap:mt,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:dt,alphaHash:Lt,combine:_.combine,mapUv:Tt&&x(_.map.channel),aoMapUv:Ie&&x(_.aoMap.channel),lightMapUv:Ce&&x(_.lightMap.channel),bumpMapUv:Qe&&x(_.bumpMap.channel),normalMapUv:Se&&x(_.normalMap.channel),displacementMapUv:Hi&&x(_.displacementMap.channel),emissiveMapUv:Ve&&x(_.emissiveMap.channel),metalnessMapUv:yi&&x(_.metalnessMap.channel),roughnessMapUv:vi&&x(_.roughnessMap.channel),anisotropyMapUv:Vt&&x(_.anisotropyMap.channel),clearcoatMapUv:R&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&x(_.diffuseRoughnessMap.channel),iridescenceMapUv:st&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(_.sheenRoughnessMap.channel),specularMapUv:it&&x(_.specularMap.channel),specularColorMapUv:pt&&x(_.specularColorMap.channel),specularIntensityMapUv:U&&x(_.specularIntensityMap.channel),transmissionMapUv:nt&&x(_.transmissionMap.channel),thicknessMapUv:Q&&x(_.thicknessMap.channel),alphaMapUv:ht&&x(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Se||_i),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!E.attributes.uv&&(Tt||ht),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:H,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.filter(bt=>bt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ne,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function v(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)w.push(k),w.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(m(w,_),p(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.diffuseRoughness&&r.enable(25),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function y(_){let w=f[_.type],k;if(w){let P=Qi[w];k=Cf.clone(P.uniforms)}else k=_.uniforms;return k}function b(_,w){let k=c.get(w);return k!==void 0?++k.usedTimes:(k=new Kx(n,w,_,s),h.push(k),c.set(w,k)),k}function g(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),c.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function S(){o.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:y,acquireProgram:b,releaseProgram:g,releaseShaderCache:M,programs:h,dispose:S}}function Qx(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function tg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $f(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Kf(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function o(f,x,d,v,m,p){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:x,material:d,materialVariant:r(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},n[t]=y):(y.id=f.id,y.object=f,y.geometry=x,y.material=d,y.materialVariant=r(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=p),t++,y}function l(f,x,d,v,m,p,y){y.reversedDepth===!0&&(m=-m);let b=o(f,x,d,v,m,p);d.transmission>0?i.push(b):d.transparent===!0?s.push(b):e.push(b)}function h(f,x,d,v,m,p){let y=o(f,x,d,v,m,p);d.transmission>0?i.unshift(y):d.transparent===!0?s.unshift(y):e.unshift(y)}function c(f,x){e.length>1&&e.sort(f||tg),i.length>1&&i.sort(x||$f),s.length>1&&s.sort(x||$f)}function u(){for(let f=t,x=n.length;f<x;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:l,unshift:h,finish:u,sort:c}}function eg(){let n=new WeakMap;function t(i,s){let a=n.get(i),r;return a===void 0?(r=new Kf,n.set(i,[r])):s>=a.length?(r=new Kf,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function ig(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new Ot};break;case"SpotLight":e={position:new X,direction:new X,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function ng(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var sg=0;function ag(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rg(n){let t=new ig,e=ng(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);let s=new X,a=new ue,r=new ue;function o(h){let c=0,u=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let x=0,d=0,v=0,m=0,p=0,y=0,b=0,g=0,M=0,S=0,_=0,w=0,k=0,P=0;h.sort(ag);for(let O=0,C=h.length;O<C;O++){let E=h[O],z=E.color,D=E.intensity,N=E.distance,V=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===In?V=E.shadow.map.texture:V=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)c+=z.r*D,u+=z.g*D,f+=z.b*D;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],D);P++}else if(E.isSunLight){let W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,J=e.get(E);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[d]=J,i.sunShadowMap[d]=V;let H=Z.getViewportCount();for(let q=0;q<H;q++)i.sunShadowMatrix[v+q]=Z.getMatrix(q),i.sunShadowCascade[v+q]=Z._cascadeData[q];v+=H,d++}i.sun[x]=W,x++}else if(E.isDirectionalLight){let W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,J=e.get(E);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=E.shadow.matrix,M++}i.directional[m]=W,m++}else if(E.isSpotLight){let W=t.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(z).multiplyScalar(D),W.distance=N,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[y]=W;let Z=E.shadow;if(E.map&&(i.spotLightMap[w]=E.map,w++,Z.updateMatrices(E),E.castShadow&&k++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){let J=e.get(E);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=V,_++}y++}else if(E.isRectAreaLight){let W=t.get(E);W.color.copy(z).multiplyScalar(D),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[b]=W,b++}else if(E.isPointLight){let W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){let Z=E.shadow,J=e.get(E);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=E.shadow.matrix,S++}i.point[p]=W,p++}else if(E.isHemisphereLight){let W=t.get(E);W.skyColor.copy(E.color).multiplyScalar(D),W.groundColor.copy(E.groundColor).multiplyScalar(D),i.hemi[g]=W,g++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.sunLength!==x||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==b||I.hemiLength!==g||I.numSunShadows!==d||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==P)&&(i.sun.length=x,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=p,i.hemi.length=g,i.sunShadow.length=d,i.sunShadowMap.length=d,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-k,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=P,I.sunLength=x,I.directionalLength=m,I.pointLength=p,I.spotLength=y,I.rectAreaLength=b,I.hemiLength=g,I.numSunShadows=d,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=P,i.version=sg++)}function l(h,c){let u=0,f=0,x=0,d=0,v=0,m=0,p=c.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){let g=h[y];if(g.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),u++}else if(g.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(g.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(g.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),r.identity(),a.copy(g.matrixWorld),a.premultiply(p),r.extractRotation(a),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(g.isPointLight){let M=i.point[x];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),x++}else if(g.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Zf(n){let t=new rg(n),e=[],i=[],s=[];function a(u){c.camera=u,e.length=0,i.length=0,s.length=0}function r(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:c,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o}}function og(n){let t=new WeakMap;function e(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Zf(n),t.set(s,[o])):a>=r.length?(o=new Zf(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`,hg=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],fg=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Jf=new ue,Aa=new X,Ec=new X;function ug(n,t,e){let i=new An,s=new qt,a=new qt,r=new be,o=new kr,l=new Dr,h={},c=e.maxTextureSize,u={[Ln]:Je,[Je]:Ln,[Ne]:Ne},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),x=f.clone();x.defines.HORIZONTAL_PASS=1;let d=new pe;d.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(d,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let p=this.type;this.render=function(S,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Wh&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xa);let k=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let C=p!==this.type;C&&_.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(z=>z.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,z=S.length;E<z;E++){let D=S[E],N=D.shadow;if(N===void 0){Ut("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let V=N.getFrameExtents();s.multiply(V),a.copy(N.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/V.x),s.x=a.x*V.x,N.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/V.y),s.y=a.y*V.y,N.mapSize.y=a.y));let W=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=W,N.map===null||C===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Es){if(D.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new pi(s.x,s.y,{format:In,type:Ni,minFilter:oi,magFilter:oi,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new dn(s.x,s.y,Ti),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=fn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ye,N.map.depthTexture.magFilter=Ye}else D.isPointLight?(N.map=new Ca(s.x),N.map.depthTexture=new la(s.x,Di)):(N.map=new pi(s.x,s.y),N.map.depthTexture=new dn(s.x,s.y,Di)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=fn,this.type===xa?(N.map.depthTexture.compareFunction=W?uc:fc,N.map.depthTexture.minFilter=oi,N.map.depthTexture.magFilter=oi):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ye,N.map.depthTexture.magFilter=Ye);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let Z=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();D.isPointLight!==!0&&N.updateMatrices(D,w);let J=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:w.layers;for(let H=0;H<Z;H++){let q=N.getCamera(H);if(D.isPointLight){let L=N.camera,et=N.matrix,ot=D.distance||L.far;ot!==L.far&&(L.far=ot,L.updateProjectionMatrix()),Aa.setFromMatrixPosition(D.matrixWorld),L.position.copy(Aa),Ec.copy(L.position),Ec.add(hg[H]),L.up.copy(fg[H]),L.lookAt(Ec),L.updateMatrixWorld(),et.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Jf.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Jf,L.coordinateSystem,L.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,H),n.clear();else{H===0&&(n.setRenderTarget(N.map),n.clear());let L=N.getViewport(H);r.set(a.x*L.x,a.y*L.y,a.x*L.z,a.y*L.w),O.viewport(r)}i=N.getFrustum(H),g(_,w,q,D,J,this.type)}N.isPointLightShadow!==!0&&this.type===Es&&y(N,w),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(k,P,I)};function y(S,_){let w=t.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,x.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),S.mapPass===null?S.mapPass=new pi(s.x,s.y,{format:In,type:Ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,w,f,v,null),x.uniforms.shadow_pass.value=S.mapPass.texture,x.uniforms.resolution.value.set(S.map.width,S.map.height),x.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,w,x,v,null)}function b(S,_,w,k){let P=null,I=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=w.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=P.uuid,C=_.uuid,E=h[O];E===void 0&&(E={},h[O]=E);let z=E[C];z===void 0&&(z=P.clone(),E[C]=z,_.addEventListener("dispose",M)),P=z}if(P.visible=_.visible,P.wireframe=_.wireframe,k===Es?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=w}return P}function g(S,_,w,k,P,I){if(S.visible===!1)return;if(S.layers.test(P)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Es)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let E=t.update(S),z=S.material;if(Array.isArray(z)){let D=E.groups;for(let N=0,V=D.length;N<V;N++){let W=D[N],Z=z[W.materialIndex];if(Z&&Z.visible){let J=b(S,Z,k,I);S.onBeforeShadow(n,S,_,w,E,J,W),n.renderBufferDirect(w,null,E,J,S,W),S.onAfterShadow(n,S,_,w,E,J,W)}}}else if(z.visible){let D=b(S,z,k,I);S.onBeforeShadow(n,S,_,w,E,D,null),n.renderBufferDirect(w,null,E,D,S,null),S.onAfterShadow(n,S,_,w,E,D,null)}}let C=S.children;for(let E=0,z=C.length;E<z;E++)g(C[E],_,w,k,P,I)}function M(S){S.target.removeEventListener("dispose",M);for(let w in h){let k=h[w],P=S.target.uuid;P in k&&(k[P].dispose(),delete k[P])}}}function dg(n,t){function e(){let U=!1,nt=new be,Q=null,mt=new be(0,0,0,0);return{setMask:function(ht){Q!==ht&&!U&&(n.colorMask(ht,ht,ht,ht),Q=ht)},setLocked:function(ht){U=ht},setClear:function(ht,dt,Lt,Yt,lt){lt===!0&&(ht*=Yt,dt*=Yt,Lt*=Yt),nt.set(ht,dt,Lt,Yt),mt.equals(nt)===!1&&(n.clearColor(ht,dt,Lt,Yt),mt.copy(nt))},reset:function(){U=!1,Q=null,mt.set(-1,0,0,0)}}}function i(){let U=!1,nt=!1,Q=null,mt=null,ht=null;return{setReversed:function(dt){if(nt!==dt){let Lt=t.get("EXT_clip_control");dt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),nt=dt;let Yt=ht;ht=null,this.setClear(Yt)}},getReversed:function(){return nt},setTest:function(dt){dt?at(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(dt){Q!==dt&&!U&&(n.depthMask(dt),Q=dt)},setFunc:function(dt){if(nt&&(dt=Tf[dt]),mt!==dt){switch(dt){case pr:n.depthFunc(n.NEVER);break;case mr:n.depthFunc(n.ALWAYS);break;case xr:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case gr:n.depthFunc(n.EQUAL);break;case yr:n.depthFunc(n.GEQUAL);break;case vr:n.depthFunc(n.GREATER);break;case _r:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=dt}},setLocked:function(dt){U=dt},setClear:function(dt){ht!==dt&&(ht=dt,nt&&(dt=1-dt),n.clearDepth(dt))},reset:function(){U=!1,Q=null,mt=null,ht=null,nt=!1}}}function s(){let U=!1,nt=null,Q=null,mt=null,ht=null,dt=null,Lt=null,Yt=null,lt=null;return{setTest:function(kt){U||(kt?at(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(kt){nt!==kt&&!U&&(n.stencilMask(kt),nt=kt)},setFunc:function(kt,Xt,bt){(Q!==kt||mt!==Xt||ht!==bt)&&(n.stencilFunc(kt,Xt,bt),Q=kt,mt=Xt,ht=bt)},setOp:function(kt,Xt,bt){(dt!==kt||Lt!==Xt||Yt!==bt)&&(n.stencilOp(kt,Xt,bt),dt=kt,Lt=Xt,Yt=bt)},setLocked:function(kt){U=kt},setClear:function(kt){lt!==kt&&(n.clearStencil(kt),lt=kt)},reset:function(){U=!1,nt=null,Q=null,mt=null,ht=null,dt=null,Lt=null,Yt=null,lt=null}}}let a=new e,r=new i,o=new s,l={},h=new WeakMap,c={},u={},f={},x=new WeakMap,d=[],v=null,m=!1,p=null,y=null,b=null,g=null,M=null,S=null,_=null,w=new Ot(0,0,0),k=0,P=!1,I=null,O=null,C=null,E=null,z=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,V=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=V>=2);let Z=null,J={},H=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),L=new be().fromArray(H),et=new be().fromArray(q);function ot(U,nt,Q,mt){let ht=new Uint8Array(4),dt=n.createTexture();n.bindTexture(U,dt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Q;Lt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(nt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return dt}let ft={};ft[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(n.DEPTH_TEST),r.setFunc(ys),Qe(!1),Se(Yl),at(n.CULL_FACE),Ie(Zn);function at(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function zt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Zt(U,nt){return f[U]!==nt?(n.bindFramebuffer(U,nt),f[U]=nt,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=nt),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(U,nt){let Q=d,mt=!1;if(U){Q=x.get(nt),Q===void 0&&(Q=[],x.set(nt,Q));let ht=U.textures;if(Q.length!==ht.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Lt=ht.length;dt<Lt;dt++)Q[dt]=n.COLOR_ATTACHMENT0+dt;Q.length=ht.length,mt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,mt=!0);mt&&n.drawBuffers(Q)}function Bt(U){return v!==U?(n.useProgram(U),v=U,!0):!1}let ee={[Jn]:n.FUNC_ADD,[qh]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};ee[$h]=n.MIN,ee[Kh]=n.MAX;let Kt={[Zh]:n.ZERO,[Jh]:n.ONE,[jh]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[rf]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(U,nt,Q,mt,ht,dt,Lt,Yt,lt,kt){if(U===Zn){m===!0&&(zt(n.BLEND),m=!1);return}if(m===!1&&(at(n.BLEND),m=!0),U!==Xh){if(U!==p||kt!==P){if((y!==Jn||M!==Jn)&&(n.blendEquation(n.FUNC_ADD),y=Jn,M=Jn),kt)switch(U){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",U);break}b=null,g=null,S=null,_=null,w.set(0,0,0),k=0,p=U,P=kt}return}ht=ht||nt,dt=dt||Q,Lt=Lt||mt,(nt!==y||ht!==M)&&(n.blendEquationSeparate(ee[nt],ee[ht]),y=nt,M=ht),(Q!==b||mt!==g||dt!==S||Lt!==_)&&(n.blendFuncSeparate(Kt[Q],Kt[mt],Kt[dt],Kt[Lt]),b=Q,g=mt,S=dt,_=Lt),(Yt.equals(w)===!1||lt!==k)&&(n.blendColor(Yt.r,Yt.g,Yt.b,lt),w.copy(Yt),k=lt),p=U,P=!1}function Ce(U,nt){U.side===Ne?zt(n.CULL_FACE):at(n.CULL_FACE);let Q=U.side===Je;nt&&(Q=!Q),Qe(Q),U.blending===Cs&&U.transparent===!1?Ie(Zn):Ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let mt=U.stencilWrite;o.setTest(mt),mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){I!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),I=U)}function Se(U){U!==Gh?(at(n.CULL_FACE),U!==O&&(U===Yl?n.cullFace(n.BACK):U===Vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),O=U}function Hi(U){U!==C&&(N&&n.lineWidth(U),C=U)}function Ve(U,nt,Q){U?(at(n.POLYGON_OFFSET_FILL),(E!==nt||z!==Q)&&(E=nt,z=Q,r.getReversed()&&(nt=-nt,Q=-Q),n.polygonOffset(nt,Q))):zt(n.POLYGON_OFFSET_FILL)}function yi(U){U?at(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function vi(U){U===void 0&&(U=n.TEXTURE0+D-1),Z!==U&&(n.activeTexture(U),Z=U)}function _i(U,nt,Q){Q===void 0&&(Z===null?Q=n.TEXTURE0+D-1:Q=Z);let mt=J[Q];mt===void 0&&(mt={type:void 0,texture:void 0},J[Q]=mt),(mt.type!==U||mt.texture!==nt)&&(Z!==Q&&(n.activeTexture(Q),Z=Q),n.bindTexture(U,nt||ft[U]),mt.type=U,mt.texture=nt)}function G(){let U=J[Z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function bi(){try{n.compressedTexImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ve(){try{n.compressedTexImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function _e(){try{n.texSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function _t(){try{n.texSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Fe(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Nt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Vt(){try{n.texStorage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function R(){try{n.texStorage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function T(){try{n.texImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function $(){try{n.texImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function rt(U){return u[U]!==void 0?u[U]:n.getParameter(U)}function st(U,nt){u[U]!==nt&&(n.pixelStorei(U,nt),u[U]=nt)}function ut(U){L.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),L.copy(U))}function gt(U){et.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function tt(U,nt){let Q=h.get(nt);Q===void 0&&(Q=new WeakMap,h.set(nt,Q));let mt=Q.get(U);mt===void 0&&(mt=n.getUniformBlockIndex(nt,U.name),n.uniformBlockBinding(nt,mt,mt),Q.set(U,mt))}function it(U,nt,Q){let ht=h.get(nt).get(U);l[ht]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ht,Q),l[ht]=Q)}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},u={},Z=null,J={},f={},l={},x=new WeakMap,d=[],v=null,m=!1,p=null,y=null,b=null,g=null,M=null,S=null,_=null,w=new Ot(0,0,0),k=0,P=!1,I=null,O=null,C=null,E=null,z=null,L.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:zt,bindFramebuffer:Zt,drawBuffers:Tt,useProgram:Bt,setBlending:Ie,setMaterial:Ce,setFlipSided:Qe,setCullFace:Se,setLineWidth:Hi,setPolygonOffset:Ve,setScissorTest:yi,activeTexture:vi,bindTexture:_i,unbindTexture:G,compressedTexImage2D:bi,compressedTexImage3D:ve,texImage2D:T,texImage3D:$,pixelStorei:st,getParameter:rt,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Vt,texStorage3D:R,texSubImage2D:_e,texSubImage3D:_t,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Nt,scissor:ut,viewport:gt,reset:pt}}function pg(n,t,e,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,c=new WeakMap,u=new Set,f,x=new WeakMap,d=new Set,v=new FinalizationRegistry(R=>d.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return m?new OffscreenCanvas(R,T):js("canvas")}function y(R,T,$){let rt=1,st=Vt(R);if((st.width>$||st.height>$)&&(rt=$/Math.max(st.width,st.height)),rt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ut=Math.floor(rt*st.width),gt=Math.floor(rt*st.height);f===void 0&&(f=p(ut,gt));let tt=T?p(ut,gt):f;return tt.width=ut,tt.height=gt,tt.getContext("2d").drawImage(R,0,0,ut,gt),Ut("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+gt+")."),tt}else return"data"in R&&Ut("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function b(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,T,$,rt,st,ut=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=T;if(T===n.RED&&($===n.FLOAT&&(tt=n.R32F),$===n.HALF_FLOAT&&(tt=n.R16F),$===n.UNSIGNED_BYTE&&(tt=n.R8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),$===n.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.R8UI),$===n.UNSIGNED_SHORT&&(tt=n.R16UI),$===n.UNSIGNED_INT&&(tt=n.R32UI),$===n.BYTE&&(tt=n.R8I),$===n.SHORT&&(tt=n.R16I),$===n.INT&&(tt=n.R32I)),T===n.RG&&($===n.FLOAT&&(tt=n.RG32F),$===n.HALF_FLOAT&&(tt=n.RG16F),$===n.UNSIGNED_BYTE&&(tt=n.RG8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),$===n.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RG8UI),$===n.UNSIGNED_SHORT&&(tt=n.RG16UI),$===n.UNSIGNED_INT&&(tt=n.RG32UI),$===n.BYTE&&(tt=n.RG8I),$===n.SHORT&&(tt=n.RG16I),$===n.INT&&(tt=n.RG32I)),T===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),$===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),$===n.UNSIGNED_INT&&(tt=n.RGB32UI),$===n.BYTE&&(tt=n.RGB8I),$===n.SHORT&&(tt=n.RGB16I),$===n.INT&&(tt=n.RGB32I)),T===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),$===n.UNSIGNED_INT&&(tt=n.RGBA32UI),$===n.BYTE&&(tt=n.RGBA8I),$===n.SHORT&&(tt=n.RGBA16I),$===n.INT&&(tt=n.RGBA32I)),T===n.RGB&&($===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),$===n.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),T===n.RGBA){let it=ut?Js:Qt.getTransfer(st);$===n.FLOAT&&(tt=n.RGBA32F),$===n.HALF_FLOAT&&(tt=n.RGBA16F),$===n.UNSIGNED_BYTE&&(tt=it===ce?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),$===n.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(R,T){let $;return R?T===null||T===Di||T===Qn?$=n.DEPTH24_STENCIL8:T===Ti?$=n.DEPTH32F_STENCIL8:T===Ps&&($=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Di||T===Qn?$=n.DEPTH_COMPONENT24:T===Ti?$=n.DEPTH_COMPONENT32F:T===Ps&&($=n.DEPTH_COMPONENT16),$}function w(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function k(R){let T=new WeakRef(R);i.get(R).__ref=T,d.add(T),v.register(R,T,T)}function P(R){let T=i.get(R).__ref;T!==void 0&&(d.delete(T),v.unregister(T))}function I(R){C(R.target)}function O(R){E(R.target)}function C(R){R.removeEventListener("dispose",I),P(R),D(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&u.delete(R)}function E(R){R.removeEventListener("dispose",O),P(R),V(R)}function z(){for(let R of d){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?E(T):C(T))}d.clear(),u.clear()}function D(R){let T=i.get(R);if(T.__webglInit===void 0)return;let $=R.source,rt=x.get($);if(rt){let st=rt[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&N(R),Object.keys(rt).length===0&&x.delete($)}i.remove(R)}function N(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let $=R.source,rt=x.get($);delete rt[T.__cacheKey],r.memory.textures--}function V(R){let T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=R.depthTexture;if($&&$.renderTarget===R&&C($),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let ut=0;ut<T.__webglFramebuffer[st].length;ut++)n.deleteFramebuffer(T.__webglFramebuffer[st][ut]);else n.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)n.deleteFramebuffer(T.__webglFramebuffer[st]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let rt=R.textures;for(let st=0,ut=rt.length;st<ut;st++){let gt=i.get(rt[st]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),r.memory.textures--),i.remove(rt[st])}i.remove(R)}let W=0;function Z(){W=0}function J(){return W}function H(R){W=R}function q(){let R=W;return R>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function L(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function et(R,T){let $=i.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let rt=R.image;if(rt===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,R,T);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function ot(R,T){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Ce($,R,T);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function ft(R,T){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){Ce($,R,T);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function at(R,T){let $=i.get(R);if(R.version>0&&$.__version!==R.version){Qe($,R,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}let zt={[hn]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[br]:n.MIRRORED_REPEAT},Zt={[Ye]:n.NEAREST,[uf]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[pn]:n.LINEAR_MIPMAP_LINEAR},Tt={[xf]:n.NEVER,[dc]:n.ALWAYS,[gf]:n.LESS,[fc]:n.LEQUAL,[yf]:n.EQUAL,[uc]:n.GEQUAL,[vf]:n.GREATER,[_f]:n.NOTEQUAL};function Bt(R,T){if(T.type===Ti&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===Jr||T.magFilter===ya||T.magFilter===pn||T.minFilter===oi||T.minFilter===Jr||T.minFilter===ya||T.minFilter===pn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,zt[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,zt[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,zt[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Zt[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Zt[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ye||T.minFilter!==ya&&T.minFilter!==pn||T.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ee(R,T){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I),k(T));let rt=T.source,st=x.get(rt);st===void 0&&(st={},x.set(rt,st));let ut=L(T);if(ut!==R.__cacheKey){st[ut]===void 0&&(st[ut]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,$=!0),st[ut].usedTimes++;let gt=st[R.__cacheKey];gt!==void 0&&(st[R.__cacheKey].usedTimes--,gt.usedTimes===0&&N(T)),R.__cacheKey=ut,R.__webglTexture=st[ut].texture}return $}function Kt(R,T,$){return Math.floor(Math.floor(R/$)/T)}function Ie(R,T,$,rt){let ut=R.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,$,rt,T.data);else{ut.sort((U,nt)=>U.start-nt.start);let gt=0;for(let U=1;U<ut.length;U++){let nt=ut[gt],Q=ut[U],mt=nt.start+nt.count,ht=Kt(Q.start,T.width,4),dt=Kt(nt.start,T.width,4);Q.start<=mt+1&&ht===dt&&Kt(Q.start+Q.count-1,T.width,4)===ht?nt.count=Math.max(nt.count,Q.start+Q.count-nt.start):(++gt,ut[gt]=Q)}ut.length=gt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let U=0,nt=ut.length;U<nt;U++){let Q=ut[U],mt=Math.floor(Q.start/4),ht=Math.ceil(Q.count/4),dt=mt%T.width,Lt=Math.floor(mt/T.width),Yt=ht,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(n.TEXTURE_2D,0,dt,Lt,Yt,lt,$,rt,T.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function Ce(R,T,$){let rt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=n.TEXTURE_3D);let st=ee(R,T),ut=T.source;e.bindTexture(rt,R.__webglTexture,n.TEXTURE0+$);let gt=i.get(ut);if(ut.version!==gt.__version||st===!0){if(e.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let lt=Qt.getPrimaries(Qt.workingColorSpace),kt=T.colorSpace===xn?null:Qt.getPrimaries(T.colorSpace),Xt=T.colorSpace===xn||lt===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let it=y(T.image,!1,s.maxTextureSize);it=Nt(T,it);let pt=a.convert(T.format,T.colorSpace),U=a.convert(T.type),nt=S(T.internalFormat,pt,U,T.normalized,T.colorSpace,T.isVideoTexture);Bt(rt,T);let Q,mt=T.mipmaps,ht=T.isVideoTexture!==!0,dt=gt.__version===void 0||st===!0,Lt=ut.dataReady,Yt=w(T,it);if(T.isDepthTexture)nt=_(T.format===mn,T.type),dt&&(ht?e.texStorage2D(n.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,pt,U,null));else if(T.isDataTexture)if(mt.length>0){ht&&dt&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,mt[0].width,mt[0].height);for(let lt=0,kt=mt.length;lt<kt;lt++)Q=mt[lt],ht?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,pt,U,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,pt,U,Q.data);T.generateMipmaps=!1}else ht?(dt&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height),Lt&&Ie(T,it,pt,U)):e.texImage2D(n.TEXTURE_2D,0,nt,it.width,it.height,0,pt,U,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,mt[0].width,mt[0].height,it.depth);for(let lt=0,kt=mt.length;lt<kt;lt++)if(Q=mt[lt],T.format!==Ui)if(pt!==null)if(ht){if(Lt)if(T.layerUpdates.size>0){let Xt=_c(Q.width,Q.height,T.format,T.type);for(let bt of T.layerUpdates){let fe=Q.data.subarray(bt*Xt/Q.data.BYTES_PER_ELEMENT,(bt+1)*Xt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,bt,Q.width,Q.height,1,pt,fe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,pt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,Q.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,it.depth,pt,U,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,nt,Q.width,Q.height,it.depth,0,pt,U,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ht&&dt&&e.texStorage2D(n.TEXTURE_2D,Yt,nt,mt[0].width,mt[0].height);for(let lt=0,kt=mt.length;lt<kt;lt++)Q=mt[lt],T.format!==Ui?pt!==null?ht?Lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,pt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,Q.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,pt,U,Q.data):e.texImage2D(n.TEXTURE_2D,lt,nt,Q.width,Q.height,0,pt,U,Q.data)}else if(T.isDataArrayTexture)if(ht){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,nt,it.width,it.height,it.depth),Lt)if(T.layerUpdates.size>0){let lt=_c(it.width,it.height,T.format,T.type);for(let kt of T.layerUpdates){let Xt=it.data.subarray(kt*lt/it.data.BYTES_PER_ELEMENT,(kt+1)*lt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,kt,it.width,it.height,1,pt,U,Xt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,U,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,pt,U,it.data);else if(T.isData3DTexture)ht?(dt&&e.texStorage3D(n.TEXTURE_3D,Yt,nt,it.width,it.height,it.depth),Lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,U,it.data)):e.texImage3D(n.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,pt,U,it.data);else if(T.isFramebufferTexture){if(dt)if(ht)e.texStorage2D(n.TEXTURE_2D,Yt,nt,it.width,it.height);else{let lt=it.width,kt=it.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(n.TEXTURE_2D,Xt,nt,lt,kt,0,pt,U,null),lt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),it.parentNode!==lt){lt.appendChild(it),u.add(T),lt.onpaint=kt=>{let Xt=kt.changedElements;for(let bt of u)Xt.includes(bt.image)&&(bt.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Xt=n.RGBA,bt=n.RGBA,fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xt,bt,fe,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(mt.length>0){if(ht&&dt){let lt=Vt(mt[0]);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}for(let lt=0,kt=mt.length;lt<kt;lt++)Q=mt[lt],ht?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,pt,U,Q):e.texImage2D(n.TEXTURE_2D,lt,nt,pt,U,Q);T.generateMipmaps=!1}else if(ht){if(dt){let lt=Vt(it);e.texStorage2D(n.TEXTURE_2D,Yt,nt,lt.width,lt.height)}Lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,U,it)}else e.texImage2D(n.TEXTURE_2D,0,nt,pt,U,it);b(T)&&T.mipmapsAutoUpdate===!0&&g(rt),gt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Qe(R,T,$){if(T.image.length!==6)return;let rt=ee(R,T),st=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);let ut=i.get(st);if(st.version!==ut.__version||rt===!0){e.activeTexture(n.TEXTURE0+$);let gt=Qt.getPrimaries(Qt.workingColorSpace),tt=T.colorSpace===xn?null:Qt.getPrimaries(T.colorSpace),it=T.colorSpace===xn||gt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let pt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,nt=[];for(let bt=0;bt<6;bt++)!pt&&!U?nt[bt]=y(T.image[bt],!0,s.maxCubemapSize):nt[bt]=U?T.image[bt].image:T.image[bt],nt[bt]=Nt(T,nt[bt]);let Q=nt[0],mt=a.convert(T.format,T.colorSpace),ht=a.convert(T.type),dt=S(T.internalFormat,mt,ht,T.normalized,T.colorSpace),Lt=T.isVideoTexture!==!0,Yt=ut.__version===void 0||rt===!0,lt=st.dataReady,kt=w(T,Q);Bt(n.TEXTURE_CUBE_MAP,T);let Xt;if(T.isDepthTexture){if(dt=_(T.format===mn,T.type),Yt)if(Lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,dt,Q.width,Q.height);else for(let bt=0;bt<6;bt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,Q.width,Q.height,0,mt,ht,null)}else if(pt){Lt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,dt,Q.width,Q.height);for(let bt=0;bt<6;bt++){Xt=nt[bt].mipmaps;for(let fe=0;fe<Xt.length;fe++){let We=Xt[fe];T.format!==Ui?mt!==null?Lt?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,0,0,We.width,We.height,mt,We.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,dt,We.width,We.height,0,We.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,0,0,We.width,We.height,mt,ht,We.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,dt,We.width,We.height,0,mt,ht,We.data)}}}else{if(Xt=T.mipmaps,Lt&&Yt){Xt.length>0&&kt++;let bt=Vt(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,dt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(U){Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,nt[bt].width,nt[bt].height,mt,ht,nt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,nt[bt].width,nt[bt].height,0,mt,ht,nt[bt].data);for(let fe=0;fe<Xt.length;fe++){let yn=Xt[fe].image[bt].image;Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,0,0,yn.width,yn.height,mt,ht,yn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,dt,yn.width,yn.height,0,mt,ht,yn.data)}}else{Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,mt,ht,nt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,mt,ht,nt[bt]);for(let fe=0;fe<Xt.length;fe++){let We=Xt[fe];Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,0,0,mt,ht,We.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,dt,mt,ht,We.image[bt])}}}b(T)&&T.mipmapsAutoUpdate===!0&&g(n.TEXTURE_CUBE_MAP),ut.__version=st.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Se(R,T,$,rt,st,ut){let gt=a.convert($.format,$.colorSpace),tt=a.convert($.type),it=S($.internalFormat,gt,tt,$.normalized,$.colorSpace),pt=i.get(T),U=i.get($);if(U.__renderTarget=T,!pt.__hasExternalTextures){let nt=Math.max(1,T.width>>ut),Q=Math.max(1,T.height>>ut);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,ut,it,nt,Q,T.depth,0,gt,tt,null):e.texImage2D(st,ut,it,nt,Q,0,gt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),_t(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,st,U.__webglTexture,0,_e(T)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,st,U.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Hi(R,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let rt=T.depthTexture,st=rt&&rt.isDepthTexture?rt.type:null,ut=_(T.stencilBuffer,st),gt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(T),ut,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(T),ut,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ut,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,R)}else{let rt=T.textures;for(let st=0;st<rt.length;st++){let ut=rt[st],gt=a.convert(ut.format,ut.colorSpace),tt=a.convert(ut.type),it=S(ut.internalFormat,gt,tt,ut.normalized,ut.colorSpace);_t(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(T),it,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(T),it,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,it,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(R,T,$){let rt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(T.depthTexture);st.__renderTarget=T;let ut=rt?T.depthTexture.image[0]:T.depthTexture.image;(!st.__webglTexture||ut.width!==T.width||ut.height!==T.height)&&(ut.width=T.width,ut.height=T.height,T.depthTexture.needsUpdate=!0),rt?at(T.depthTexture,0):et(T.depthTexture,0);let gt=st.__webglTexture,tt=_e(T),it=rt?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,pt=T.depthTexture.format===mn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===fn)_t(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,it,gt,0);else if(T.depthTexture.format===mn)_t(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,it,gt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yi(R){let T=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let rt=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){let st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",st)};rt.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=rt}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let rt=0;rt<6;rt++)Ve(T.__webglFramebuffer[rt],R,rt);else R.texture.mipmaps.length>0?Ve(T.__webglFramebuffer[0],R,0):Ve(T.__webglFramebuffer,R,0);else if($){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=n.createRenderbuffer(),Hi(T.__webglDepthbuffer[rt],R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ut)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Hi(T.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function vi(R,T,$){let rt=i.get(R);T!==void 0&&Se(rt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&yi(R)}function _i(R){let T=R.texture,$=i.get(R),rt=i.get(T);R.addEventListener("dispose",O),k(R);let st=R.textures,ut=R.isWebGLCubeRenderTarget===!0,gt=st.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=T.version,r.memory.textures++),ut){$.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0){$.__webglFramebuffer[tt]=[];for(let it=0;it<T.mipmaps.length;it++)$.__webglFramebuffer[tt][it]=n.createFramebuffer()}else $.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let tt=0;tt<T.mipmaps.length;tt++)$.__webglFramebuffer[tt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(gt)for(let tt=0,it=st.length;tt<it;tt++){let pt=i.get(st[tt]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),r.memory.textures++)}if(R.samples>0&&_t(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let tt=0;tt<st.length;tt++){let it=st[tt];$.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[tt]);let pt=a.convert(it.format,it.colorSpace),U=a.convert(it.type),nt=S(it.internalFormat,pt,U,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),Q=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,nt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,$.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Hi($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,T);for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Se($.__webglFramebuffer[tt][it],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else Se($.__webglFramebuffer[tt],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(T)?g(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let tt=0,it=st.length;tt<it;tt++){let pt=st[tt],U=i.get(pt),nt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,U.__webglTexture),Bt(nt,pt),Se($.__webglFramebuffer,R,pt,n.COLOR_ATTACHMENT0+tt,nt,0),b(pt)&&g(nt)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,rt.__webglTexture),Bt(tt,T),T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Se($.__webglFramebuffer[it],R,T,n.COLOR_ATTACHMENT0,tt,it);else Se($.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,tt,0);b(T)?g(tt):T.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&yi(R)}function G(R){let T=R.textures;for(let $=0,rt=T.length;$<rt;$++){let st=T[$];if(b(st)&&st.mipmapsAutoUpdate===!0){let ut=M(R),gt=i.get(st).__webglTexture;e.bindTexture(ut,gt),g(ut),e.unbindTexture()}}}let bi=[];function ve(R){if(R.samples>0){if(_t(R)===!1){let T=R.textures,$=R.width,rt=R.height,st=n.COLOR_BUFFER_BIT,ut=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(R),tt=T.length>1;if(tt)for(let pt=0;pt<T.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let pt=0;pt<T.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);let U=i.get(T[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,$,rt,0,0,$,rt,st,n.NEAREST),l===!0&&(bi.length=0,bi.push(n.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&bi.push(ut),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bi))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let pt=0;pt<T.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);let U=i.get(T[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,U,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function _e(R){return Math.min(s.maxSamples,R.samples)}function _t(R){let T=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(R){let T=r.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function Nt(R,T){let $=R.colorSpace,rt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Zs&&$!==xn&&(Qt.getTransfer($)===ce?(rt!==Ui||st!==fi)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",$)),T}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.getTextureUnits=J,this.setTextureUnits=H,this.setTexture2D=et,this.setTexture2DArray=ot,this.setTexture3D=ft,this.setTextureCube=at,this.rebindTextures=vi,this.setupRenderTarget=_i,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=yi,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_t,this.dispose=z}function mg(n,t){function e(i,s=xn){let a,r=Qt.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===Qr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===to)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ac)return n.BYTE;if(i===rc)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===jr)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===cc)return n.ALPHA;if(i===hc)return n.RGB;if(i===Ui)return n.RGBA;if(i===fn)return n.DEPTH_COMPONENT;if(i===mn)return n.DEPTH_STENCIL;if(i===eo)return n.RED;if(i===io)return n.RED_INTEGER;if(i===In)return n.RG;if(i===no)return n.RG_INTEGER;if(i===so)return n.RGBA_INTEGER;if(i===va||i===_a||i===ba||i===Ma)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===ro||i===oo||i===lo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===co||i===ho||i===fo||i===uo||i===po||i===Sa||i===mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===co||i===ho)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===fo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===uo)return a.COMPRESSED_R11_EAC;if(i===po)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return a.COMPRESSED_RG11_EAC;if(i===mo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xo||i===go||i===yo||i===vo||i===_o||i===bo||i===Mo||i===So||i===wo||i===To||i===Ao||i===Eo||i===Co||i===Ro)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===xo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===To)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Lo||i===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Po)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Io)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Do||i===wa||i===No)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ko)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Zi({vertexShader:xg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vt(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Vi{constructor(t,e){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,h=null,c=null,u=null,f=null,x=null,d=null,v=typeof XRWebGLBinding<"u",m=new Dc,p={},y=e.getContextAttributes(),b=null,g=null,M=[],S=[],_=new qt,w=null,k=null,P=new Ze;P.viewport=new be;let I=new Ze;I.viewport=new be;let O=[P,I],C=new qr,E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let et=M[L];return et===void 0&&(et=new Ms,M[L]=et),et.getTargetRaySpace()},this.getControllerGrip=function(L){let et=M[L];return et===void 0&&(et=new Ms,M[L]=et),et.getGripSpace()},this.getHand=function(L){let et=M[L];return et===void 0&&(et=new Ms,M[L]=et),et.getHandSpace()};function D(L){let et=S.indexOf(L.inputSource);if(et===-1)return;let ot=M[et];ot!==void 0&&(ot.update(L.inputSource,L.frame,h||r),ot.dispatchEvent({type:L.type,data:L.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let L=0;L<M.length;L++){let et=S[L];et!==null&&(S[L]=null,M[L].disconnect(et))}E=null,z=null,m.reset();for(let L in p)delete p[L];if(t.setRenderTarget(b),x=null,f=null,u=null,s=null,g=null,q.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),k!==null){let L=k.camera;L.fov=k.fov,L.zoom=k.zoom,L.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(L){h=L},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ft=null,at=null;y.depth&&(at=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?mn:fn,ft=y.stencil?Qn:Di);let zt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new pi(f.textureWidth,f.textureHeight,{format:Ui,type:fi,depthTexture:new dn(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),g=new pi(x.framebufferWidth,x.framebufferHeight,{format:Ui,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await s.requestReferenceSpace(o),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(L){for(let et=0;et<L.removed.length;et++){let ot=L.removed[et],ft=S.indexOf(ot);ft>=0&&(S[ft]=null,M[ft].disconnect(ot))}for(let et=0;et<L.added.length;et++){let ot=L.added[et],ft=S.indexOf(ot);if(ft===-1){for(let zt=0;zt<M.length;zt++)if(zt>=S.length){S.push(ot),ft=zt;break}else if(S[zt]===null){S[zt]=ot,ft=zt;break}if(ft===-1)break}let at=M[ft];at&&at.connect(ot)}}function W(L,et){et===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(et.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let et=L.near,ot=L.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),C.near=I.near=P.near=et,C.far=I.far=P.far=ot,(E!==C.near||z!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),E=C.near,z=C.far),C.layers.mask=L.layers.mask|6,P.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let ft=L.parent,at=C.cameras;W(C,ft);for(let zt=0;zt<at.length;zt++)W(at[zt],ft);C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),k===null&&L.isPerspectiveCamera&&(k={camera:L,fov:L.fov,zoom:L.zoom}),Z(L,C,ft)};function Z(L,et,ot){ot===null?L.matrix.copy(et.matrixWorld):(L.matrix.copy(ot.matrixWorld),L.matrix.invert(),L.matrix.multiply(et.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(et.projectionMatrix),L.projectionMatrixInverse.copy(et.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Sr*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&x===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=L)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(L){return p[L]};let J=null;function H(L,et){if(c=et.getViewerPose(h||r),d=et,c!==null){let ot=c.views;x!==null&&(t.setRenderTargetFramebuffer(g,x.framebuffer),t.setRenderTarget(g));let ft=!1;ot.length!==C.cameras.length&&(C.cameras.length=0,ft=!0);for(let Tt=0;Tt<ot.length;Tt++){let Bt=ot[Tt],ee=null;if(x!==null)ee=x.getViewport(Bt);else{let Ie=u.getViewSubImage(f,Bt);ee=Ie.viewport,Tt===0&&(t.setRenderTargetTextures(g,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(g))}let Kt=O[Tt];Kt===void 0&&(Kt=new Ze,Kt.layers.enable(Tt),Kt.viewport=new be,O[Tt]=Kt),Kt.matrix.fromArray(Bt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Bt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ee.x,ee.y,ee.width,ee.height),Tt===0&&(C.matrix.copy(Kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ft===!0&&C.cameras.push(Kt)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Tt=u.getDepthInformation(ot[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(Tt,s.renderState)}if(at&&at.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Tt=0;Tt<ot.length;Tt++){let Bt=ot[Tt].camera;if(Bt){let ee=p[Bt];ee||(ee=new ca,p[Bt]=ee);let Kt=u.getCameraImage(Bt);ee.sourceTexture=Kt}}}}for(let ot=0;ot<M.length;ot++){let ft=S[ot],at=M[ot];ft!==null&&at!==void 0&&at.update(ft,et,h||r)}J&&J(L,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),d=null}let q=new jf;q.setAnimationLoop(H),this.setAnimationLoop=function(L){J=L},this.dispose=function(){}}},yg=new ue,lu=new Gt;lu.set(-1,0,0,0,1,0,0,0,1);function vg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&x(m,p,g)):p.isMeshMatcapMaterial?(a(m,p),d(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,g=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(g)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _g(n,t,e,i){let s={},a={};function r(y,b){let g=b.program;i.uniformBlockBinding(y,g,s[y.id])}function o(y,b){let g=s[y.id];g===void 0&&(d(y),g=l(y),s[y.id]=g,y.addEventListener("dispose",m));let M=b.program;i.updateUBOMapping(y,M);let S=t.render.frame;a[y.id]!==S&&(h(y),a[y.id]=S)}function l(y){let b=n.createBuffer(),g=y.__size,M=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,g,M),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function h(y){let b=s[y.id],g=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,_=g.length;S<_;S++){let w=g[S];if(Array.isArray(w))for(let k=0,P=w.length;k<P;k++)c(w[k],S,k,M);else c(w,S,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(y,b,g,M){if(f(y,b,g,M)===!0){let S=y.__offset,_=y.value;if(Array.isArray(_)){let w=0;for(let k=0;k<_.length;k++){let P=_[k],I=v(P,!0);u(P,y.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function u(y,b,g){typeof y=="number"||typeof y=="boolean"?b[g]=y:y.isMatrix3?(b[g]=y.elements[0],b[g+1]=y.elements[1],b[g+2]=y.elements[2],b[g+3]=0,b[g+4]=y.elements[3],b[g+5]=y.elements[4],b[g+6]=y.elements[5],b[g+7]=0,b[g+8]=y.elements[6],b[g+9]=y.elements[7],b[g+10]=y.elements[8],b[g+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-g),g):y.toArray(b,g)}function f(y,b,g,M){let S=y.value,_=b+"_"+g;if(Array.isArray(S)){M[_]===void 0&&(M[_]=[]);let w=M[_],k=!1;for(let P=0;P<S.length;P++)x(S[P],w,P)===!0&&(k=!0);return k}return x(S,M,_)}function x(y,b,g){if(b[g]===void 0)return typeof y=="number"||typeof y=="boolean"?b[g]=y:ArrayBuffer.isView(y)?b[g]=y.slice():b[g]=y.clone(),!0;{let M=b[g];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return b[g]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function d(y){let b=y.uniforms,g=0,M=16;for(let _=0,w=b.length;_<w;_++){let k=Array.isArray(b[_])?b[_]:[b[_]];for(let P=0,I=k.length;P<I;P++){let O=k[P],C=Array.isArray(O.value)?O.value:[O.value],E=Array.isArray(b[_])||Array.isArray(O.value),z=g;for(let N=0,V=C.length;N<V;N++){let W=C[N],Z=v(W,E),J=g%M,H=J%Z.boundary,q=J+H;g+=H,q!==0&&M-q<Z.storage&&(g+=M-q),N===0&&(z=g),g+=Z.storage}let D=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new D((g-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let S=g%M;return S>0&&(g+=M-S),y.__size=g,y.__cache={},this}function v(y,b){let g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=16,g.storage=48):y.isMatrix4?(g.boundary=16,g.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(g.boundary=16,g.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(g.boundary=16,g.storage=Math.ceil(g.storage/16)*16),g}function m(y){let b=y.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);s={},a={}}return{bind:r,update:o,dispose:p}}var bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function Mg(){return ji===null&&(ji=new sa(bg,16,16,In,Ni),ji.name="DFG_LUT",ji.minFilter=oi,ji.magFilter=oi,ji.wrapS=ri,ji.wrapT=ri,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Bo=class{constructor(t={}){let{canvas:e=Mf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:x=fi}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;let v=x,m=new Set([so,no,io]),p=new Set([fi,Di,Ps,Qn,Qr,to]),y=new Uint32Array(4),b=new Int32Array(4),g={textures:[],min:[],max:[],resolution:[]},M=null,S=null,_=[],w=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,O=null,C=null,E=null,z=null;this._outputColorSpace=Te;let D=0,N=0,V=null,W=-1,Z=null,J=new be,H=new be,q=null,L=new Ot(0),et=0,ot=e.width,ft=e.height,at=1,zt=null,Zt=null,Tt=new be(0,0,ot,ft),Bt=new be(0,0,ot,ft),ee=!1,Kt=new An,Ie=new Er,Ce=!1,Qe=!1,Se=new ue,Hi=new X,Ve=new be,yi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vi=!1;function _i(){return V===null?at:1}let G=i;function bi(A,B){return e.getContext(A,B)}let ve,_e,_t,Fe,Nt,Vt,R,T,$,rt,st,ut,gt,tt,it,pt,U,nt,Q,mt,ht,dt,Lt;try{let A={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),G===null){let B="webgl2";if(G=bi(B,A),G===null)throw bi(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(A){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Ht("WebGLRenderer: "+A.message),A}function Yt(){ve=new km(G),ve.init(),ht=new mg(G,ve),_e=new Mm(G,ve,t,ht),_t=new dg(G,ve),_e.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),C=G.createFramebuffer(),E=G.createFramebuffer(),z=G.createFramebuffer(),Fe=new Um(G),Nt=new Qx,Vt=new pg(G,ve,_t,Nt,_e,ht,Fe),R=new Im(P),T=new Fd(G),dt=new _m(G,T),$=new Dm(G,T,Fe,dt),rt=new Fm(G,$,T,dt,Fe),nt=new Om(G,_e,Vt),it=new Sm(Nt),st=new jx(P,R,ve,_e,dt,it),ut=new vg(P,Nt),gt=new eg,tt=new og(ve),U=new vm(P,R,_t,rt,d,l),pt=new ug(P,rt,_e),Lt=new _g(G,Fe,_e,_t),Q=new bm(G,ve,Fe),mt=new Nm(G,ve,Fe),Fe.programs=st.programs,P.capabilities=_e,P.extensions=ve,P.properties=Nt,P.renderLists=gt,P.shadowMap=pt,P.state=_t,P.info=Fe}v!==fi&&(k=new Bm(v,e.width,e.height,o,s,a));let lt=new Nc(P,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(ot,ft,!1))},this.getSize=function(A){return A.set(ot,ft)},this.setSize=function(A,B,j=!0){if(lt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,ft=B,e.width=Math.floor(A*at),e.height=Math.floor(B*at),j===!0&&(e.style.width=A+"px",e.style.height=B+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(ot*at,ft*at).floor()},this.setDrawingBufferSize=function(A,B,j){ot=A,ft=B,at=j,e.width=Math.floor(A*j),e.height=Math.floor(B*j),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===fi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,B,j,Y){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,B,j,Y),_t.viewport(J.copy(Tt).multiplyScalar(_i()).round())},this.getScissor=function(A){return A.copy(Bt)},this.setScissor=function(A,B,j,Y){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,B,j,Y),_t.scissor(H.copy(Bt).multiplyScalar(_i()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){_t.setScissorTest(ee=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){Zt=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,j=!0){let Y=0;if(A){let K=!1;if(V!==null){let yt=V.texture.format;K=m.has(yt)}if(K){let yt=V.texture.type,At=p.has(yt),xt=U.getClearColor(),wt=U.getClearAlpha(),Pt=xt.r,Wt=xt.g,Jt=xt.b;At?(y[0]=Pt,y[1]=Wt,y[2]=Jt,y[3]=wt,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Pt,b[1]=Wt,b[2]=Jt,b[3]=wt,G.clearBufferiv(G.COLOR,0,b))}else Y|=G.COLOR_BUFFER_BIT}B&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),U.dispose(),gt.dispose(),tt.dispose(),Vt.dispose(),Nt.dispose(),R.dispose(),rt.dispose(),$.dispose(),dt.dispose(),Lt.dispose(),st.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",eh),lt.removeEventListener("sessionend",ih),Fn.stop()};function kt(A){A.preventDefault(),mc("WebGLRenderer: Context Lost."),I=!0}function Xt(){mc("WebGLRenderer: Context Restored."),I=!1;let A=Fe.autoReset,B=pt.enabled,j=pt.autoUpdate,Y=pt.needsUpdate,K=pt.type;Yt(),Fe.autoReset=A,pt.enabled=B,pt.autoUpdate=j,pt.needsUpdate=Y,pt.type=K}function bt(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){let B=A.target;B.removeEventListener("dispose",fe),We(B)}function We(A){yn(A),Nt.remove(A)}function yn(A){let B=Nt.get(A).programs;B!==void 0&&(B.forEach(function(j){st.releaseProgram(j)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,j,Y,K,yt){B===null&&(B=yi);let At=K.isMesh&&K.matrixWorld.determinantAffine()<0,xt=Zu(A,B,j,Y,K);_t.setMaterial(Y,At);let wt=j.index,Pt=1;if(Y.wireframe===!0){if(wt=$.getWireframeAttribute(j),wt===void 0)return;Pt=2}let Wt=j.drawRange,Jt=j.attributes.position,Et=Wt.start*Pt,jt=(Wt.start+Wt.count)*Pt;yt!==null&&(Et=Math.max(Et,yt.start*Pt),jt=Math.min(jt,(yt.start+yt.count)*Pt)),wt!==null?(Et=Math.max(Et,0),jt=Math.min(jt,wt.count)):Jt!=null&&(Et=Math.max(Et,0),jt=Math.min(jt,Jt.count));let ke=jt-Et;if(ke<0||ke===1/0)return;dt.setup(K,Y,xt,j,wt);let ge,xe=Q;if(wt!==null&&(ge=T.get(wt),xe=mt,xe.setIndex(ge)),K.isMesh)Y.wireframe===!0?(_t.setLineWidth(Y.wireframeLinewidth*_i()),xe.setMode(G.LINES)):xe.setMode(G.TRIANGLES);else if(K.isLine){let ti=Y.linewidth;ti===void 0&&(ti=1),_t.setLineWidth(ti*_i()),K.isLineSegments?xe.setMode(G.LINES):K.isLineLoop?xe.setMode(G.LINE_LOOP):xe.setMode(G.LINE_STRIP)}else K.isPoints?xe.setMode(G.POINTS):K.isSprite&&xe.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ti=K._multiDrawStarts,Ct=K._multiDrawCounts,ai=K._multiDrawCount,oe=wt?T.get(wt).bytesPerElement:1,zn=Nt.get(Y).currentProgram.getUniforms();for(let ei=0;ei<ai;ei++)zn.setValue(G,"_gl_DrawID",ei),xe.render(ti[ei]/oe,Ct[ei])}else if(K.isInstancedMesh)xe.renderInstances(Et,ke,K.count);else if(j.isInstancedBufferGeometry){let ti=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,ti);xe.renderInstances(Et,ke,Ct)}else xe.render(Et,ke)};function th(A,B,j,Y){O!==null&&A.isNodeMaterial&&O.setObject(Y,A),Ce===!0&&it.setState(A,j,!1),A.transparent===!0&&A.side===Ne&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,Bs(A,B,Y),A.side=Ln,A.needsUpdate=!0,Bs(A,B,Y),A.side=Ne):Bs(A,B,Y)}this.compile=function(A,B,j=null){j===null&&(j=A),O!==null&&O.renderStart(A,B,j),S=tt.get(j),S.init(B),w.push(S),j.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),A!==j&&A.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),Qe=this.localClippingEnabled,Ce=it.init(this.clippingPlanes,Qe),Ce===!0&&it.setGlobalState(this.clippingPlanes,B),O!==null&&pt.render(S.state.shadowsArray,j,B);let Y=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let yt=K.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let xt=yt[At];th(xt,j,B,K),Y.add(xt)}else th(yt,j,B,K),Y.add(yt)}),S=w.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(A,B,j=null){let Y=this.compile(A,B,j);return new Promise(K=>{function yt(){if(Y.forEach(function(At){let wt=Nt.get(At).currentProgram;(wt===void 0||wt.isReady())&&Y.delete(At)}),Y.size===0){K(A);return}setTimeout(yt,10)}ve.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let pl=null;function $u(A){pl&&pl(A)}function eh(){Fn.stop()}function ih(){Fn.start()}let Fn=new jf;Fn.setAnimationLoop($u),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){pl=A,lt.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},lt.addEventListener("sessionstart",eh),lt.addEventListener("sessionend",ih),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(A,B);let j=lt.enabled===!0&&lt.isPresenting===!0,Y=k!==null&&(V===null||j)&&k.begin(P,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(B),B=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,V),S=tt.get(A,w.length),S.init(B),S.state.textureUnits=Vt.getTextureUnits(),w.push(S),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ie.setFromArrayCamera(B):Kt.setFromProjectionMatrix(Se,Si,B.reversedDepth),Qe=this.localClippingEnabled,Ce=it.init(this.clippingPlanes,Qe),M=gt.get(A,_.length),M.init(),_.push(M),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&ml(At,B,-1/0,P.sortObjects)}ml(A,B,0,P.sortObjects),M.finish(),O!==null&&O.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(zt,Zt),vi=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,vi&&U.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&it.beginShadows();let K=S.state.shadowsArray;if(pt.render(K,A,B),Ce===!0&&it.endShadows(),(Y&&k.hasRenderPass())===!1){let At=M.opaque,xt=M.transmissive;if(S.setupLights(),B.isArrayCamera){let wt=B.cameras;if(xt.length>0)for(let Pt=0,Wt=wt.length;Pt<Wt;Pt++){let Jt=wt[Pt];sh(At,xt,A,Jt)}vi&&U.render(A);for(let Pt=0,Wt=wt.length;Pt<Wt;Pt++){let Jt=wt[Pt];nh(M,A,Jt,Jt.viewport)}}else xt.length>0&&sh(At,xt,A,B),vi&&U.render(A),nh(M,A,B)}V!==null&&N===0&&(Vt.updateMultisampleRenderTarget(V),Vt.updateRenderTargetMipmap(V)),Y&&k.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),dt.resetDefaultState(),W=-1,Z=null,w.pop(),w.length>0?(S=w[w.length-1],Vt.setTextureUnits(S.state.textureUnits),Ce===!0&&it.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,O!==null&&O.renderEnd()};function ml(A,B,j,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let At=B.isArrayCamera?Ie:Kt;if(!A.frustumCulled||A.intersectsFrustum(At)){Y&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);let xt=rt.update(A),wt=A.material;wt.visible&&M.push(A,xt,wt,j,Ve.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){let At=B.isArrayCamera?Ie:Kt;if(!A.frustumCulled||A.intersectsFrustum(At)){let xt=rt.update(A),wt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ve.copy(xt.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(wt)){let Pt=xt.groups;for(let Wt=0,Jt=Pt.length;Wt<Jt;Wt++){let Et=Pt[Wt],jt=wt[Et.materialIndex];jt&&jt.visible&&M.push(A,xt,jt,j,Ve.z,Et,B)}}else wt.visible&&M.push(A,xt,wt,j,Ve.z,null,B)}}}let yt=A.children;for(let At=0,xt=yt.length;At<xt;At++)ml(yt[At],B,j,Y)}function nh(A,B,j,Y){let{opaque:K,transmissive:yt,transparent:At}=A;S.setupLightsView(j),Ce===!0&&it.setGlobalState(P.clippingPlanes,j),Y&&_t.viewport(J.copy(Y)),K.length>0&&za(K,B,j),yt.length>0&&za(yt,B,j),At.length>0&&za(At,B,j),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function sh(A,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Et=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new pi(1,1,{generateMipmaps:!0,type:Et?Ni:fi,minFilter:pn,samples:Math.max(4,_e.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let yt=S.state.transmissionRenderTarget[Y.id],At=Y.viewport||J;yt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),wt=P.getActiveCubeFace(),Pt=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(L),et=P.getClearAlpha(),et<1&&P.setClearColor(16777215,.5),P.clear(),vi&&U.render(j);let Wt=P.toneMapping;P.toneMapping=Ji;let Jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),Ce===!0&&it.setGlobalState(P.clippingPlanes,Y),za(A,j,Y),Vt.updateMultisampleRenderTarget(yt),Vt.updateRenderTargetMipmap(yt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let jt=0,ke=B.length;jt<ke;jt++){let ge=B[jt],{object:xe,geometry:ti,material:Ct,group:ai}=ge;if(Ct.side===Ne&&xe.layers.test(Y.layers)){let oe=Ct.side;Ct.side=Je,Ct.needsUpdate=!0,ah(xe,j,Y,ti,Ct,ai),Ct.side=oe,Ct.needsUpdate=!0,Et=!0}}Et===!0&&(Vt.updateMultisampleRenderTarget(yt),Vt.updateRenderTargetMipmap(yt))}P.setRenderTarget(xt,wt,Pt),P.setClearColor(L,et),Jt!==void 0&&(Y.viewport=Jt),P.toneMapping=Wt}function za(A,B,j){let Y=B.isScene===!0?B.overrideMaterial:null;for(let K=0,yt=A.length;K<yt;K++){let At=A[K],{object:xt,geometry:wt,group:Pt}=At,Wt=At.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),xt.layers.test(j.layers)&&ah(xt,B,j,wt,Wt,Pt)}}function ah(A,B,j,Y,K,yt){O!==null&&K.isNodeMaterial&&O.setObject(A,K),A.onBeforeRender(P,B,j,Y,K,yt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,B,j,Y,A,yt),K.transparent===!0&&K.side===Ne&&K.forceSinglePass===!1?(K.side=Je,K.needsUpdate=!0,P.renderBufferDirect(j,B,Y,K,A,yt),K.side=Ln,K.needsUpdate=!0,P.renderBufferDirect(j,B,Y,K,A,yt),K.side=Ne):P.renderBufferDirect(j,B,Y,K,A,yt),A.onAfterRender(P,B,j,Y,K,yt)}function rh(A){let B=0;for(let j of A)j.texture!==null&&B++;return B}function Bs(A,B,j){B.isScene!==!0&&(B=yi);let Y=Nt.get(A),K=S.state.lights,yt=S.state.shadowsArray,At=K.state.version,xt=st.getParameters(A,K.state,yt,B,j,S.state.lightProbeGridArray),wt=st.getProgramCacheKey(xt),Pt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Wt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=R.get(A.envMap||Y.environment,Wt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Pt===void 0&&(A.addEventListener("dispose",fe),Pt=new Map,Y.programs=Pt,Y.programVariants=new Map);let Jt=Pt.get(wt);if(Jt!==void 0){if(Y.currentProgram===Jt&&Y.lightsStateVersion===At)return lh(A,xt),Jt}else xt.uniforms=st.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,j,xt),A.onBeforeCompile(xt,P),Jt=st.acquireProgram(xt,wt),Pt.set(wt,Jt),Y.uniforms=xt.uniforms;let Et=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=it.uniform),lh(A,xt),Y.needsLights=ju(A),Y.lightsStateVersion=At,Y.needsLights&&(Et.ambientLightColor.value=K.state.ambient,Et.lightProbe.value=K.state.probe,Et.sunLights.value=K.state.sun,Et.sunLightShadows.value=K.state.sunShadow,Et.directionalLights.value=K.state.directional,Et.directionalLightShadows.value=K.state.directionalShadow,Et.spotLights.value=K.state.spot,Et.spotLightShadows.value=K.state.spotShadow,Et.rectAreaLights.value=K.state.rectArea,Et.ltc_1.value=K.state.rectAreaLTC1,Et.ltc_2.value=K.state.rectAreaLTC2,Et.pointLights.value=K.state.point,Et.pointLightShadows.value=K.state.pointShadow,Et.hemisphereLights.value=K.state.hemi,Et.sunShadowMatrix.value=K.state.sunShadowMatrix,Et.sunShadowCascade.value=K.state.sunShadowCascade,Et.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Et.spotLightMatrix.value=K.state.spotLightMatrix,Et.spotLightMap.value=K.state.spotLightMap,Et.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=rh(S.state.lightProbeGridArray),Y.currentProgram=Jt,Y.uniformsList=null,Jt}function Ku(A,B,j,Y,K){let yt=Nt.get(A),At=yt.currentProgram.id+","+Y+","+K,xt=yt.programVariants.get(At);return xt===void 0?(xt=Bs(A,B,j),yt.programVariants.set(At,xt)):(yt.currentProgram=xt,yt.uniformsList=null,yt.outputColorSpace=Y,yt.toneMapping=K),xt}function oh(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ls.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function lh(A,B){let j=Nt.get(A);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Zu(A,B,j,Y,K){B.isScene!==!0&&(B=yi),Vt.resetTextureUnits();let yt=B.fog,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,xt=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qt.workingColorSpace,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pt=R.get(Y.envMap||At,wt),Wt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Jt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!j.morphAttributes.position,jt=!!j.morphAttributes.normal,ke=!!j.morphAttributes.color,ge=Ji;Y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ge=P.toneMapping);let xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ti=xe!==void 0?xe.length:0,Ct=Nt.get(Y),ai=S.state.lights;if(Ce===!0&&(Qe===!0||A!==Z)){let we=A===Z&&Y.id===W;it.setState(Y,A,we)}let oe=!1,zn=!1;Y.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==ai.state.version||K.isBatchedMesh&&Ct.batching===!1||!K.isBatchedMesh&&Ct.batching===!0||K.isBatchedMesh&&Ct.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ct.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ct.instancing===!1||!K.isInstancedMesh&&Ct.instancing===!0||K.isSkinnedMesh&&Ct.skinning===!1||!K.isSkinnedMesh&&Ct.skinning===!0||K.isInstancedMesh&&Ct.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ct.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ct.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ct.instancingMorph===!1&&K.morphTexture!==null||Ct.envMap!==Pt||Y.fog===!0&&Ct.fog!==yt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Wt||Ct.vertexTangents!==Jt||Ct.morphTargets!==Et||Ct.morphNormals!==jt||Ct.morphColors!==ke||Ct.morphTargetsCount!==ti||Ct.numLightProbeGrids!==rh(S.state.lightProbeGridArray)?oe=!0:(Ct.outputColorSpace!==xt||Ct.toneMapping!==ge)&&(zn=!0):(oe=!0,Ct.__version=Y.version);let ei=Ct.currentProgram;(oe===!0||zn===!0)&&(ei=zn===!0?Ku(Y,B,K,xt,ge):Bs(Y,B,K),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,ei,Ct));let Ba=!1,vn=!1,Bn=!1,ae=ei.getUniforms(),Ke=Ct.uniforms;if(_t.useProgram(ei.program)&&(Ba=!0,vn=!0,Bn=!0),Y.id!==W&&(W=Y.id,vn=!0),Ba||Z!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ae.setValue(G,"projectionMatrix",A.projectionMatrix),ae.setValue(G,"viewMatrix",A.matrixWorldInverse);let Xe=ae.map.cameraPosition;Xe!==void 0&&Xe.setValue(G,Hi.setFromMatrixPosition(A.matrixWorld)),_e.logarithmicDepthBuffer&&ae.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ae.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,vn=!0,Bn=!0)}if(Ct.needsLights&&(ai.state.sunShadowMap.length>0&&ae.setValue(G,"sunShadowMap",ai.state.sunShadowMap,Vt),ai.state.directionalShadowMap.length>0&&ae.setValue(G,"directionalShadowMap",ai.state.directionalShadowMap,Vt),ai.state.spotShadowMap.length>0&&ae.setValue(G,"spotShadowMap",ai.state.spotShadowMap,Vt),ai.state.pointShadowMap.length>0&&ae.setValue(G,"pointShadowMap",ai.state.pointShadowMap,Vt)),K.isSkinnedMesh){ae.setOptional(G,K,"bindMatrix"),ae.setOptional(G,K,"bindMatrixInverse");let we=K.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ae.setValue(G,"boneTexture",we.boneTexture,Vt))}K.isBatchedMesh&&(ae.setOptional(G,K,"batchingTexture"),ae.setValue(G,"batchingTexture",K._matricesTexture,Vt),ae.setOptional(G,K,"batchingIdTexture"),ae.setValue(G,"batchingIdTexture",K._indirectTexture,Vt),ae.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&ae.setValue(G,"batchingColorTexture",K._colorsTexture,Vt));let Ci=j.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&nt.update(K,j,ei),(vn||Ct.receiveShadow!==K.receiveShadow)&&(Ct.receiveShadow=K.receiveShadow,ae.setValue(G,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Ke.envMapIntensity.value=B.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Mg()),vn){if(ae.setValue(G,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Ju(Ke,Bn),yt&&Y.fog===!0&&ut.refreshFogUniforms(Ke,yt),ut.refreshMaterialUniforms(Ke,Y,at,ft,S.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let we=g,Xe=0;for(let nn of S.state.lightProbeGridArray)nn.texture!==null&&(we.textures[Xe]=nn.texture,we.min[Xe]=nn.boundingBox.min,we.max[Xe]=nn.boundingBox.max,we.resolution[Xe]=nn.resolution,Xe++);for(let nn in we)we[nn].length=Xe;Ke.probesSH.value=we.textures,Ke.probesMin.value=we.min,Ke.probesMax.value=we.max,Ke.probesResolution.value=we.resolution}Ls.upload(G,oh(Ct),Ke,Vt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(G,oh(Ct),Ke,Vt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ae.setValue(G,"center",K.center),ae.setValue(G,"modelViewMatrix",K.modelViewMatrix),ae.setValue(G,"normalMatrix",K.normalMatrix),ae.setValue(G,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){let we=Y.uniformsGroups;for(let Xe=0,nn=we.length;Xe<nn;Xe++){let hh=we[Xe];Lt.update(hh,ei),Lt.bind(hh,ei)}}return ei}function Ju(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,B,j){let Y=Nt.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Nt.get(A.texture).__webglTexture=B,Nt.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let j=Nt.get(A);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,j=0){V=A,D=B,N=j;let Y=null,K=!1,yt=!1;if(A){let xt=Nt.get(A);if(xt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(G.FRAMEBUFFER,xt.__webglFramebuffer),J.copy(A.viewport),H.copy(A.scissor),q=A.scissorTest,_t.viewport(J),_t.scissor(H),_t.setScissorTest(q),W=-1;return}else if(xt.__webglFramebuffer===void 0)Vt.setupRenderTarget(A);else if(xt.__hasExternalTextures)Vt.rebindTextures(A,Nt.get(A.texture).__webglTexture,Nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Wt=A.depthTexture;if(xt.__boundDepthTexture!==Wt){if(Wt!==null&&Nt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(A)}}let wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);let Pt=Nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pt[B])?Y=Pt[B][j]:Y=Pt[B],K=!0):A.samples>0&&Vt.useMultisampledRTT(A)===!1?Y=Nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Pt)?Y=Pt[j]:Y=Pt,J.copy(A.viewport),H.copy(A.scissor),q=A.scissorTest}else J.copy(Tt).multiplyScalar(at).floor(),H.copy(Bt).multiplyScalar(at).floor(),q=ee;if(j!==0&&(Y=C),_t.bindFramebuffer(G.FRAMEBUFFER,Y)&&_t.drawBuffers(A,Y),_t.viewport(J),_t.scissor(H),_t.setScissorTest(q),K){let xt=Nt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,j)}else if(yt){let xt=B;for(let wt=0;wt<A.textures.length;wt++){let Pt=Nt.get(A.textures[wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+wt,Pt.__webglTexture,j,xt)}}else if(A!==null&&j!==0){let xt=Nt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xt.__webglTexture,j)}W=-1};function ch(A){let B=Nt.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=_e.textureFormatReadable(A.format),B.__typeReadable=_e.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,j,Y,K,yt,At,xt=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt){_t.bindFramebuffer(G.FRAMEBUFFER,wt);try{let Pt=A.textures[xt],Wt=Pt.format,Jt=Pt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+xt);let Et=ch(Pt);if(Et.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&j>=0&&j<=A.height-K&&G.readPixels(B,j,Y,K,ht.convert(Wt),ht.convert(Jt),yt)}finally{let Pt=V!==null?Nt.get(V).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,B,j,Y,K,yt,At,xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt)if(B>=0&&B<=A.width-Y&&j>=0&&j<=A.height-K){_t.bindFramebuffer(G.FRAMEBUFFER,wt);let Pt=A.textures[xt],Wt=Pt.format,Jt=Pt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+xt);let Et=ch(Pt);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.bufferData(G.PIXEL_PACK_BUFFER,yt.byteLength,G.STREAM_READ),G.readPixels(B,j,Y,K,ht.convert(Wt),ht.convert(Jt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let ke=V!==null?Nt.get(V).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,ke);let ge=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await wf(G,ge,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,yt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(jt),G.deleteSync(ge),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,j=0){let Y=Math.pow(2,-j),K=Math.floor(A.image.width*Y),yt=Math.floor(A.image.height*Y),At=B!==null?B.x:0,xt=B!==null?B.y:0;Vt.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,At,xt,K,yt),_t.unbindTexture()},this.copyTextureToTexture=function(A,B,j=null,Y=null,K=0,yt=0){let At,xt,wt,Pt,Wt,Jt,Et,jt,ke,ge=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(j!==null)At=j.max.x-j.min.x,xt=j.max.y-j.min.y,wt=j.isBox3?j.max.z-j.min.z:1,Pt=j.min.x,Wt=j.min.y,Jt=j.isBox3?j.min.z:0;else{let ae=Math.pow(2,-K);At=Math.floor(ge.width*ae),xt=Math.floor(ge.height*ae),A.isDataArrayTexture?wt=ge.depth:A.isData3DTexture?wt=Math.floor(ge.depth*ae):wt=1,Pt=0,Wt=0,Jt=0}Y!==null?(Et=Y.x,jt=Y.y,ke=Y.z):(Et=0,jt=0,ke=0);let xe=ht.convert(B.format),ti=ht.convert(B.type),Ct;B.isData3DTexture?(Vt.setTexture3D(B,0),Ct=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Vt.setTexture2DArray(B,0),Ct=G.TEXTURE_2D_ARRAY):(Vt.setTexture2D(B,0),Ct=G.TEXTURE_2D),_t.activeTexture(G.TEXTURE0),_t.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),_t.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_t.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let ai=_t.getParameter(G.UNPACK_ROW_LENGTH),oe=_t.getParameter(G.UNPACK_IMAGE_HEIGHT),zn=_t.getParameter(G.UNPACK_SKIP_PIXELS),ei=_t.getParameter(G.UNPACK_SKIP_ROWS),Ba=_t.getParameter(G.UNPACK_SKIP_IMAGES);_t.pixelStorei(G.UNPACK_ROW_LENGTH,ge.width),_t.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ge.height),_t.pixelStorei(G.UNPACK_SKIP_PIXELS,Pt),_t.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),_t.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);let vn=A.isDataArrayTexture||A.isData3DTexture,Bn=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let ae=Nt.get(A),Ke=Nt.get(B),Ci=Nt.get(ae.__renderTarget),we=Nt.get(Ke.__renderTarget);_t.bindFramebuffer(G.READ_FRAMEBUFFER,Ci.__webglFramebuffer),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Xe=0;Xe<wt;Xe++)vn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Nt.get(A).__webglTexture,K,Jt+Xe),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Nt.get(B).__webglTexture,yt,ke+Xe)),G.blitFramebuffer(Pt,Wt,Pt+At,Wt+xt,Et,jt,Et+At,jt+xt,G.DEPTH_BUFFER_BIT,G.NEAREST);_t.bindFramebuffer(G.READ_FRAMEBUFFER,null),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Nt.has(A)){let ae=Nt.get(A),Ke=Nt.get(B);_t.bindFramebuffer(G.READ_FRAMEBUFFER,E),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,z);for(let Ci=0;Ci<wt;Ci++)vn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ae.__webglTexture,K,Jt+Ci):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ae.__webglTexture,K),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.__webglTexture,yt,ke+Ci):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ke.__webglTexture,yt),K!==0?G.blitFramebuffer(Pt,Wt,Pt+At,Wt+xt,Et,jt,Et+At,jt+xt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(Ct,yt,Et,jt,ke+Ci,Pt,Wt,At,xt):G.copyTexSubImage2D(Ct,yt,Et,jt,Pt,Wt,At,xt);_t.bindFramebuffer(G.READ_FRAMEBUFFER,null),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ct,yt,Et,jt,ke,At,xt,wt,xe,ti,ge.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Ct,yt,Et,jt,ke,At,xt,wt,xe,ge.data):G.texSubImage3D(Ct,yt,Et,jt,ke,At,xt,wt,xe,ti,ge):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,yt,Et,jt,At,xt,xe,ti,ge.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,yt,Et,jt,ge.width,ge.height,xe,ge.data):G.texSubImage2D(G.TEXTURE_2D,yt,Et,jt,At,xt,xe,ti,ge);_t.pixelStorei(G.UNPACK_ROW_LENGTH,ai),_t.pixelStorei(G.UNPACK_IMAGE_HEIGHT,oe),_t.pixelStorei(G.UNPACK_SKIP_PIXELS,zn),_t.pixelStorei(G.UNPACK_SKIP_ROWS,ei),_t.pixelStorei(G.UNPACK_SKIP_IMAGES,Ba),yt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(Ct),_t.unbindTexture()},this.initRenderTarget=function(A){Nt.get(A).__webglFramebuffer===void 0&&Vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){D=0,N=0,V=null,_t.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var He=(n,t,e)=>n<t?t:n>e?e:n,Sg=(n,t,e)=>n+(t-n)*e,Ee=(n,t,e,i)=>Sg(n,t,1-Math.exp(-e*i)),Re=(n,t)=>n+Math.random()*(t-n),Uc=Math.PI*2;function Pe(n,t){let e=(t-n)%Uc;return e>Math.PI&&(e-=Uc),e<-Math.PI&&(e+=Uc),e}function Ai(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ct(n,t){let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return e<<16|i<<8|s}var ks=n=>{let t=Math.floor(n);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ne=n=>"$"+Math.round(n).toLocaleString("en-US");var Ds=Ai(99),me=(n,t)=>n+Ds()*(t-n),es=(n,t,e,i=1)=>`hsla(${n},${t}%,${e}%,${i})`;function je(n,t,e=!0,i=!0){let s=document.createElement("canvas");s.width=s.height=n;let a=s.getContext("2d");t(a,n);let r=new wi(s);return i&&(r.colorSpace=Te),r.wrapS=r.wrapT=e?hn:ri,r.anisotropy=4,r}function kn(n,t,e,i,s,a,r,o,l=2){for(let h=0;h<e;h++)n.fillStyle=es(i,s,me(a,r),o),n.fillRect(Ds()*t,Ds()*t,l*me(.5,1.5),l*me(.5,1.5))}var Ue={};function Oi(){return Ue.wood||(Ue.wood=je(256,(n,t)=>{let i=t/8;for(let s=0;s<8;s++){let a=-me(0,120);for(;a<t;){let r=me(90,190),o=me(52,64),l=me(26,33);n.fillStyle=es(l,55,o*.75),n.fillRect(a,s*i,r,i);for(let h=0;h<6;h++){n.strokeStyle=es(l,50,o*.62,.35),n.lineWidth=me(.6,1.6),n.beginPath();let c=s*i+me(3,i-3);n.moveTo(a,c),n.bezierCurveTo(a+r*.3,c+me(-3,3),a+r*.7,c+me(-3,3),a+r,c+me(-2,2)),n.stroke()}Ds()<.3&&(n.fillStyle=es(l,50,o*.55,.5),n.beginPath(),n.ellipse(a+me(10,r-10),s*i+i/2,me(3,6),me(1.5,3),0,0,7),n.fill()),n.fillStyle="rgba(60,30,10,.55)",n.fillRect(a,s*i,2,i),a+=r}n.fillStyle="rgba(60,30,10,.6)",n.fillRect(0,s*i,t,2),n.fillStyle="rgba(255,240,210,.12)",n.fillRect(0,s*i+2,t,2)}}),Ue.woodfine=je(128,(n,t)=>{n.fillStyle="#e9dccb",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){n.strokeStyle=`rgba(120,80,40,${me(.06,.18)})`,n.lineWidth=me(.5,2),n.beginPath();let i=me(0,t);n.moveTo(0,i),n.bezierCurveTo(t*.3,i+me(-4,4),t*.6,i+me(-4,4),t,i),n.stroke()}}),Ue.carpet=je(128,(n,t)=>{n.fillStyle="#e4e4e4",n.fillRect(0,0,t,t),kn(n,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)n.fillStyle="rgba(0,0,0,.035)",n.fillRect(0,e,t,3)}),Ue.tile=je(128,(n,t)=>{n.fillStyle="#aab5bd",n.fillRect(0,0,t,t);let e=2,i=t/e;for(let s=0;s<e;s++)for(let a=0;a<e;a++)n.fillStyle=es(200,10,me(93,98)),n.fillRect(a*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(255,255,255,.6)",n.fillRect(a*i+3,s*i+3,i-8,3),n.fillStyle="rgba(0,0,0,.06)",n.fillRect(a*i+3,s*i+i-7,i-6,3)}),Ue.wallpaper=je(128,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)n.fillStyle="rgba(0,0,0,.045)",n.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let i=23;i<t;i+=32)n.fillStyle="rgba(0,0,0,.08)",n.beginPath(),n.moveTo(i,e),n.lineTo(i+4,e+6),n.lineTo(i,e+12),n.lineTo(i-4,e+6),n.fill();kn(n,t,500,0,0,60,100,.04,2)}),Ue.panel=je(128,(n,t)=>{n.fillStyle="#f0f0f0",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3,n.strokeRect(e+10,14,44,t-28),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2,n.strokeRect(e+13,17,44,t-28)}),Ue.brick=je(256,(n,t)=>{n.fillStyle="#d8c6b0",n.fillRect(0,0,t,t);let e=t/8,i=t/4;for(let s=0;s<8;s++)for(let a=-1;a<5;a++){let r=a*i+(s%2?i/2:0);n.fillStyle=es(me(10,20),me(35,50),me(42,52)),n.fillRect(r+3,s*e+3,i-6,e-6),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(r+3,s*e+3,i-6,4)}kn(n,t,900,10,30,20,60,.15,2)}),Ue.plaster=je(128,(n,t)=>{n.fillStyle="#f4f2ef",n.fillRect(0,0,t,t),kn(n,t,1500,30,10,75,100,.12,2)}),Ue.plain=je(64,(n,t)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,t,t),kn(n,t,500,0,0,82,100,.25,2)}),Ue.grass=je(128,(n,t)=>{n.fillStyle="#6dbb4a",n.fillRect(0,0,t,t);for(let e=0;e<1400;e++){n.strokeStyle=es(me(85,110),me(45,65),me(32,55),.7),n.lineWidth=1,n.beginPath();let i=Ds()*t,s=Ds()*t;n.moveTo(i,s),n.lineTo(i+me(-2,2),s-me(3,7)),n.stroke()}}),Ue.asphalt=je(128,(n,t)=>{n.fillStyle="#4a4f5c",n.fillRect(0,0,t,t),kn(n,t,2200,220,8,22,60,.4,1.6)}),Ue.concrete=je(128,(n,t)=>{n.fillStyle="#cfd2d6",n.fillRect(0,0,t,t),kn(n,t,1400,210,6,60,95,.2,2),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(0,0,t,2),n.fillRect(0,0,2,t)}),Ue.rug=je(256,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t),n.fillStyle="#9a9a9a",n.fillRect(10,10,t-20,t-20),n.fillStyle="#ffffff",n.fillRect(22,22,t-44,t-44),n.fillStyle="#c8c8c8",n.fillRect(30,30,t-60,t-60),n.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let i=46;i<t-46;i+=32)n.beginPath(),n.moveTo(i+16,e+2),n.lineTo(i+30,e+16),n.lineTo(i+16,e+30),n.lineTo(i+2,e+16),n.fill();n.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)n.fillRect(e,0,2,8),n.fillRect(e,t-8,2,8);kn(n,t,1500,0,0,50,100,.12,1.5)},!1),Ue.shadow=je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ue.glow=je(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ue.beam=je(64,(n,t)=>{let e=n.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Ue.patch=je(64,(n,t)=>{for(let e=0;e<12;e++){n.fillStyle=`rgba(255,255,255,${.06})`;let i=e*2.5;n.fillRect(i,i,t-2*i,t-2*i)}},!1,!1)),Ue}function cu(){let n=new fa(90,16,10),t=n.attributes.position,e=new Float32Array(t.count*3),i=new Ot,s=new Ot(7311320),a=new Ot(16038282),r=new Ot(16767400);for(let l=0;l<t.count;l++){let h=t.getY(l)/90;h>.15?i.copy(a).lerp(s,Math.min(1,(h-.15)/.6)):i.copy(r).lerp(a,Math.max(0,(h+.1)/.25)),e[l*3]=i.r,e[l*3+1]=i.g,e[l*3+2]=i.b}n.setAttribute("color",new re(e,3));let o=new vt(n,new Rt({vertexColors:!0,side:Je,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-10,o.frustumCulled=!1,o}function hu(){let n=new Ft,t=420,e=new Float32Array(t*3);for(let l=0;l<t;l++){let h=Math.random()*6.283,c=.08+Math.random()*.9,u=80;e.set([Math.cos(h)*Math.cos(c*1.5)*u,Math.sin(c*1.5)*u,Math.sin(h)*Math.cos(c*1.5)*u],l*3)}let i=new pe;i.setAttribute("position",new re(e,3));let s=new $i(i,new ki({color:14673663,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,toneMapped:!1}));s.renderOrder=-9;let a=new Rt({map:Oi().glow,color:14674175,transparent:!0,depthWrite:!1,fog:!1,blending:$e,toneMapped:!1}),r=new vt(new mi(16,16),a),o=new vt(new En(2.6,24),new Rt({color:15922431,fog:!1,toneMapped:!1,depthWrite:!1}));return r.position.set(-38,44,-52),o.position.copy(r.position),r.lookAt(0,0,0),o.lookAt(0,0,0),r.renderOrder=-8,o.renderOrder=-8,n.add(s,r,o),n.visible=!1,n}var Vo=class{constructor(t,e=220){this.n=e,this.box=7;let i=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*this.box,i[s*3+1]=Math.random()*1.9,i[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new pe,this.geo.setAttribute("position",new re(i,3)),this.points=new $i(this.geo,new ki({map:Oi().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:$e})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,i){this.t+=t;let s=this.geo.attributes.position.array,a=this.vel,r=this.box/2;for(let o=0;o<this.n;o++){let l=o*3;s[l]+=(a[l]+Math.sin(this.t*.5+o)*.02)*t,s[l+1]+=(a[l+1]+Math.cos(this.t*.4+o*1.3)*.015)*t,s[l+2]+=a[l+2]*t,s[l]<e-r?s[l]+=this.box:s[l]>e+r&&(s[l]-=this.box),s[l+2]<i-r?s[l+2]+=this.box:s[l+2]>i+r&&(s[l+2]-=this.box),s[l+1]<.05?s[l+1]=1.85:s[l+1]>1.88&&(s[l+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var Wo=class{constructor(t,e=900){this.n=e,this.box=13,this.L=null,this.pos=new Float32Array(e*6),this.speed=new Float32Array(e),this.geo=new pe,this.geo.setAttribute("position",new re(this.pos,3)),this.lines=new ra(this.geo,new ws({color:11058406,transparent:!0,opacity:.5,depthWrite:!1,fog:!0})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,t.add(this.lines)}setLevel(t){if(this.L=t,this.lines.visible=!!t,t)for(let e=0;e<this.n;e++)this.spawn(e,0,0,!0)}outdoor(t,e){let i=this.L,s=Math.floor(t),a=Math.floor(e);return s<0||a<0||s>=i.W||a>=i.H?!0:!!i.outdoor[a*i.W+s]}spawn(t,e,i,s){let a=this.pos,r=t*6,o=this.box,l=0,h=0,c=!1;for(let f=0;f<4&&!c;f++)l=e+(Math.random()-.5)*2*o,h=i+(Math.random()-.5)*2*o,c=this.outdoor(l,h);let u=c?s?Math.random()*7:6+Math.random()*2:-50;this.speed[t]=11+Math.random()*5,a[r]=l,a[r+1]=u,a[r+2]=h,a[r+3]=l+.04,a[r+4]=u+.42,a[r+5]=h}update(t,e,i){if(!this.lines.visible)return;let s=this.pos,a=this.box;for(let r=0;r<this.n;r++){let o=r*6,l=this.speed[r]*t;s[o+1]-=l,s[o+4]-=l,s[o]-=l*.08,s[o+3]-=l*.08,(s[o+1]<0||Math.abs(s[o]-e)>a||Math.abs(s[o+2]-i)>a)&&this.spawn(r,e,i,s[o+1]<-10)}this.geo.attributes.position.needsUpdate=!0}};var wg=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],Ge=1,ci=2,te=4,hi=8,St=16,he=32;var Tg=55,Dn=new Ot,Dt=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,i,s,a,r,o,l={}){let h=l.faces??Tg,c=s/2,u=a/2,f=r/2,x=e+u,d=l.ry||0,v=Math.cos(d),m=Math.sin(d);for(let p=0;p<6;p++){if(!(h&1<<p))continue;let y=l.fc&&l.fc[p]!=null?l.fc[p]:p===2&&l.top!=null?l.top:o;Dn.setHex(y);let[b,g]=wg[p],M=this.p.length/3,S=b[0]*v+b[2]*m,_=-b[0]*m+b[2]*v,w=l.us||this.us,k=Math.abs(S),P=Math.abs(_),I=0;for(let O of g){let C=O[0]*c,E=O[2]*f,z=t+C*v+E*m,D=x+O[1]*u,N=i-C*m+E*v;this.p.push(z,D,N),this.n.push(S,b[1],_),this.c.push(Dn.r,Dn.g,Dn.b),l.fit?(this.u.push(I===1||I===2?1:0,I>=2?1:0),I++):p===2||p===3?this.u.push(z/w,-N/w):k>P?this.u.push((S>0?-N:N)/w,D/w):this.u.push((_>0?z:-z)/w,D/w)}this.i.push(M,M+1,M+2,M,M+2,M+3)}return this}add(t,e,i=0,s=0,a=0){let r=t.index?t.toNonIndexed():t,o=r.attributes.position.array,l=r.attributes.normal.array;Dn.setHex(e);let h=this.p.length/3;for(let c=0;c<o.length;c+=3)this.p.push(o[c]+i,o[c+1]+s,o[c+2]+a),this.n.push(l[c],l[c+1],l[c+2]),this.c.push(Dn.r,Dn.g,Dn.b),this.u.push(o[c]/this.us,o[c+1]/this.us);for(let c=0;c<o.length/3;c++)this.i.push(h+c);return this}get empty(){return this.p.length===0}build(){let t=new pe;t.setAttribute("position",new re(new Float32Array(this.p),3)),t.setAttribute("normal",new re(new Float32Array(this.n),3)),t.setAttribute("color",new re(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new re(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new re(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var Oc={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},Fc={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe",z:"teller",v:"case",m:"pedestal",a:"statue",s:"slots",j:"poker",C:"crate"},Ag=new Set(["h","f","x","a","C"]),fu={$:"cash",G:"gold",J:"jewel",A:"art"};function uu(n){let t=n.map,e=t.length,i=Math.max(...t.map(g=>g.length)),s=i*e,a=new Array(s);for(let g=0;g<e;g++)for(let M=0;M<i;M++)a[g*i+M]=t[g][M]||"g";let r=new Uint8Array(s),o=new Uint8Array(s),l=new Uint8Array(s),h=new Array(s),c=[],u=[],f={x:1,y:1},x=null,d=null,v=null,m=[],p=[];for(let g=0;g<e;g++)for(let M=0;M<i;M++){let S=g*i+M,_=a[S];if(_==="#"){o[S]=1;continue}if(_==="D"||_==="L"){o[S]=1,r[S]=0,m.push({x:M,y:g,type:_==="L"?"lock":"key"});continue}_==="K"&&p.push({x:M,y:g}),Fc[_]?(o[S]=Ag.has(_)?1:0,r[S]=0):_==="S"?(x={x:M,y:g},r[S]=0):r[S]=1,fu[_]&&c.push({type:fu[_],x:M,y:g}),_==="P"&&(f={x:M,y:g}),_==="V"&&(d={x:M,y:g}),_==="R"&&(v={x:M,y:g})}for(let g=0;g<s;g++){let M=a[g];if(M==="#")continue;if(Oc[M]){h[g]=Oc[M];continue}let S=g%i,_=g/i|0,w="wood";t:for(let k=1;k<6;k++)for(let P=-k;P<=k;P++)for(let I=-k;I<=k;I++){if(Math.max(Math.abs(I),Math.abs(P))!==k)continue;let O=S+I,C=_+P;if(O<0||C<0||O>=i||C>=e)continue;let E=Oc[a[C*i+O]];if(E){w=E;break t}}h[g]=w}for(let g=0;g<s;g++)l[g]=h[g]==="grass"||h[g]==="road"?1:0;let y={x:f.x+.5,z:f.y+.5};if(d){for(let g=d.y;g<=d.y+1;g++)for(let M=d.x-1;M<=d.x+1;M++)M>=0&&g>=0&&M<i&&g<e&&(r[g*i+M]=0);y={x:d.x+.5,z:d.y-.5}}else v&&(y={x:v.x+.5,z:v.y+.5});let b=new Uint8Array(s);for(let g=0;g<s;g++){let M=a[g];if(!Fc[M]||b[g])continue;let S=g%i,_=g/i|0,w=S,k=_,P=[g];for(b[g]=1;P.length;){let I=P.pop(),O=I%i,C=I/i|0;S=Math.min(S,O),w=Math.max(w,O),_=Math.min(_,C),k=Math.max(k,C);for(let[E,z]of[[1,0],[-1,0],[0,1],[0,-1]]){let D=O+E,N=C+z;if(D<0||N<0||D>=i||N>=e)continue;let V=N*i+D;!b[V]&&a[V]===M&&(b[V]=1,P.push(V))}}u.push({c:M,type:Fc[M],x0:S,y0:_,w:w-S+1,d:k-_+1})}return{W:i,H:e,ch:a,walk:r,opaque:o,outdoor:l,floor:h,loot:c,furn:u,start:f,safe:x,van:d,roof:v,exit:y,def:n,doors:m,keys:p}}var Le=1.9,Eg=7227954,zc=16183526,Cg=15985888,du=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],Bc=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],Fi=[5020230,6074452,4164168,7126874],pu=()=>new Me({vertexColors:!0,emissive:2760720});function mu(n,t){return xu(n,t,null,null).back}function xu(n,t,e,i){let{W:s,H:a,ch:r}=n,o=(y,b)=>y<0||b<0||y>=s||b>=a||r[b*s+y]==="#",l=i;if(!l){let y=0;l=[0,-1];let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let g of b){let M=0;if(g[1]){let S=g[1]<0?t.y0-1:t.y0+t.d;for(let _=t.x0;_<t.x0+t.w;_++)M+=o(_,S);M/=t.w}else{let S=g[0]<0?t.x0-1:t.x0+t.w;for(let _=t.y0;_<t.y0+t.d;_++)M+=o(S,_);M/=t.d}M>y+.01&&(y=M,l=g)}}let h=Math.atan2(-l[0],-l[1]),c=l[0]?t.d:t.w,u=l[0]?t.w:t.d,f=t.x0+t.w/2,x=t.y0+t.d/2,d=Math.cos(h),v=Math.sin(h),m=(y,b)=>[f+y*d+b*v,x-y*v+b*d];return{b:(y,b,g,M,S,_,w,k,P={})=>{let[I,O]=m(b,M);y.box(I,g,O,S,_,w,k,{...P,ry:(P.ry||0)+h})},W:c,D:u,rot:h,wpos:m,back:l}}function Rg(n,t,e,i,s){let a=(v,m)=>v+i()*(m-v),r=e.plain,o=e.woodfine,l=e.unlit,h;if(t.type==="couch"){let v=n.furn.find(m=>m.type==="tv");h=v&&v.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let v=n.furn.find(m=>m.type==="table");if(v){let m=v.x0+v.w/2-(t.x0+.5),p=v.y0+v.d/2-(t.y0+.5);h=Math.abs(m)>Math.abs(p)?[-Math.sign(m),0]:[0,-Math.sign(p)]}}else t.type==="desk"||t.type==="table"?h=[0,-1]:t.type==="slots"&&(h=t.y0<n.H/2?[0,-1]:[0,1]);let{b:c,W:u,D:f,wpos:x}=xu(n,t,e,h),d=(v,m,p,y,b,g)=>{let[M,S]=x(v,p);s.push({x:M,y:m,z:S,col:y,I:b,R:g})};switch(c(e.shadow,0,.012,0,u+.35,.001,f+.35,16777215,{faces:te,fit:!0}),t.type){case"crate":{let v=[11041098,9398852,12159573,8219218];for(let m=0;m<u;m++)for(let p=0;p<f;p++){let y=-u/2+m+.5,b=-f/2+p+.5;for(let g=0;g<2;g++){let M=v[i()*v.length|0],S=g?a(.72,.86):.9,_=g?a(-.25,.25):0,w=g?a(-.06,.06):0,k=g*.86;c(o,y+w,k,b+w,S,.86,S,M,{ry:_,top:ct(M,1.12)}),c(o,y+w,k+.38,b+w,S+.02,.1,S+.02,ct(M,.72),{ry:_,faces:51});for(let P of[-1,1])for(let I of[-1,1])c(o,y+w+P*(S/2-.03),k,b+w+I*(S/2-.03),.07,.86,.07,ct(M,.6),{ry:_})}i()<.3&&c(r,y,.38,b+.46,.4,.12,.01,2237487,{faces:16})}break}case"shelf":{for(let p of[-1,1])c(o,p*(u/2-.04),0,0,.07,1.6,f-.12,8015411);c(o,0,1.6-.06,0,u-.02,.07,f-.08,8015411),c(o,0,0,-f/2+.09,u-.1,1.6,.03,ct(8015411,.7));for(let p=0;p<4;p++){let y=.06+p*.38;if(c(o,0,y,0,u-.1,.035,f-.18,8015411),p===3&&i()<.5){c(r,a(-.2,.2),y+.035,0,.12,.2,.12,4165530),c(r,0,y+.235,0,.18,.18,.18,Fi[1],{ry:.6});continue}let b=-u/2+.1;for(;b<u/2-.12;){let g=a(.04,.09),M=a(.2,.31),S=Bc[i()*Bc.length|0];if(i()<.08){b+=.12;continue}let _=i()<.1?.25:0;c(r,b+g/2,y+.035,.02,g,M,f-.32,S,{top:ct(S,1.25)}),M>.25&&c(r,b+g/2,y+.035+M*.7,.02,g+.004,.025,f-.31,15914122,{faces:St|he}),b+=g+.006+_*.1}}break}case"fridge":{c(r,0,.04,0,u-.12,1.55,f-.14,15265522,{top:14278886}),c(r,0,0,.02,u-.16,.05,f-.2,3816006),c(r,0,1,f/2-.068,u-.12,.015,.01,11450560,{faces:St}),c(r,.3,.55,f/2-.04,.04,.35,.05,12108492),c(r,.3,1.1,f/2-.04,.04,.3,.05,12108492);for(let m=0;m<4;m++)c(r,a(-.3,.15),a(.6,1.45),f/2-.066,.06,.06,.01,Bc[m],{faces:St});c(r,-.1,1.15,f/2-.066,.18,.22,.008,16777215,{faces:St,ry:.08});break}case"bed":{c(o,0,.08,0,u-.06,.22,f-.06,10118724);for(let[p,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,p*(u/2-.09),0,y*(f/2-.09),.1,.1,.1,ct(10118724,.7));c(o,0,0,-f/2+.06,u,1.05,.1,10118724),c(o,0,1.05,-f/2+.06,u+.06,.07,.14,ct(10118724,.85)),c(o,0,.45,-f/2+.115,u-.3,.45,.01,ct(10118724,1.15),{faces:St}),c(r,0,.3,.04,u-.14,.18,f-.22,16250094),c(r,0,.33,.42,u-.08,.2,f-.95,6066121,{top:ct(6066121,1.12)}),c(r,0,.36,-f/2+1.08,u-.07,.19,.22,15789284);for(let p of[-1,1])c(r,p*.45,.47,-f/2+.42,.78,.15,.4,16777215,{ry:p*.04});c(r,0,.535,f/2-.42,u-.04,.03,.42,15246141),c(r,0,.3,f/2-.205,u-.04,.26,.02,15246141,{faces:St});break}case"desk":{c(o,0,.7,-.45,u-.1,.06,.8,11565642,{top:ct(11565642,1.1)}),c(o,-u/2+.35,0,-.45,.5,.7,.72,ct(11565642,.9));for(let m=0;m<3;m++)c(r,-u/2+.35,.08+m*.21,-.08,.42,.16,.01,ct(11565642,.75),{faces:St}),c(r,-u/2+.35,.15+m*.21,-.07,.12,.025,.02,14267482);c(o,u/2-.08,0,-.45,.06,.7,.72,ct(11565642,.9)),c(r,.15,.76,-.7,.18,.04,.14,2763574),c(r,.15,.8,-.7,.05,.16,.05,2763574),c(r,.15,.92,-.7,.72,.44,.05,2237229),c(l,.15,.95,-.672,.64,.37,.01,6272255,{faces:St}),c(l,0,1.05,-.665,.25,.14,.008,12576511,{faces:St}),c(l,.32,1,-.665,.18,.08,.008,16765806,{faces:St}),c(r,.15,.76,-.38,.55,.025,.18,3421503),c(r,.55,.76,-.38,.07,.03,.1,3421503),c(r,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),c(r,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),c(r,.78,.76,-.5,.08,.1,.08,14185306),c(r,-.7,.76,-.7,.14,.03,.14,2763574),c(r,-.7,.79,-.7,.025,.32,.025,2763574),c(l,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),d(-.6,1,-.55,[1,.72,.42],.75,2.6),c(r,0,0,.35,.5,.05,.05,2763574),c(r,0,0,.35,.05,.05,.5,2763574),c(r,0,.05,.35,.05,.35,.05,5592671),c(r,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),c(r,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{if(n.def.bar){c(o,0,0,0,u-.04,.95,f-.2,4858904,{top:ct(4858904,1.2)});for(let M=0;M<u*2;M++)c(o,-u/2+.25+M*.5,.12,f/2-.1,.4,.7,.012,ct(4858904,1.3),{faces:St});c(r,0,.14,f/2+.02,u-.1,.04,.04,14725194),c(r,0,.95,.02,u+.04,.06,f-.04,1841956,{top:2762806}),c(r,0,1.01,f/2-.04,u+.04,.012,.03,14725194,{faces:te|St});let g=[3119706,9058858,14262330,3828424,15262422,8006234];for(let M=0;M<u*3;M++){let S=-u/2+.2+M*(u-.4)/Math.max(1,u*3-1),_=g[(M+t.x0)%g.length];if(M%3===1){c(l,S,1.01,-.05,.07,.11,.07,14217471),c(l,S,1.07,-.05,.05,.03,.05,[16738954,16765503,8191898][M%3]);continue}c(r,S,1.01,-.12,.09,.22,.09,_,{top:ct(_,1.3)}),c(r,S,1.23,-.12,.035,.08,.035,_),c(r,S,1.31,-.12,.04,.02,.04,2763574)}for(let M=0;M<u;M++){let S=-u/2+M+.5,_=f/2+.38;c(r,S,0,_,.26,.03,.26,2763574),c(r,S,.03,_,.05,.56,.05,13226716),c(r,S,.59,_,.34,.09,.34,11740730,{top:13645898})}d(0,1.4,.3,[1,.6,.4],.9,3);break}let v=15854818,m=3881544;c(r,0,0,.04,u-.02,.08,f-.2,3816006),c(r,0,.08,0,u-.02,.72,f-.12,v);let p=Math.max(1,Math.round(u/.5));for(let y=0;y<p;y++){let b=-u/2+(y+.5)*(u/p);c(r,b,.14,f/2-.055,u/p-.06,.6,.012,ct(v,.93),{faces:St}),c(r,b+(y%2?-1:1)*(u/p/2-.08),.62,f/2-.04,.025,.12,.025,11901530)}c(r,0,.8,.02,u,.06,f-.06,m,{top:4868440}),c(e.tile,0,.86,-f/2+.02,u,.48,.01,16777215,{faces:St,us:.5}),c(r,0,1.36,-f/2+.2,u-.02,.48,.36,v);for(let y=0;y<p;y++){let b=-u/2+(y+.5)*(u/p);c(r,b,1.4,-f/2+.385,u/p-.06,.4,.012,ct(v,.93),{faces:St}),c(r,b,1.43,-f/2+.4,.12,.025,.025,11901530)}u>=2?(c(r,.45,.855,.05,.6,.012,.42,9345186,{faces:te}),c(r,.45,.86,-.22,.04,.22,.04,12831958),c(r,.45,1.05,-.12,.04,.04,.2,12831958),c(o,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),c(r,-.35,.89,.05,.12,.06,.06,14185306)):(c(r,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),c(r,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{c(r,0,0,.04,u-.02,.08,f-.2,3816006),c(r,0,.08,0,u-.04,.74,f-.12,14081250),c(r,0,.18,f/2-.055,u-.2,.42,.012,2829364,{faces:St}),c(l,0,.26,f/2-.05,u-.36,.22,.01,6961698,{faces:St}),c(r,0,.56,f/2-.04,u-.3,.03,.03,12108492);for(let m=0;m<4;m++)c(r,-.3+m*.2,.7,f/2-.05,.05,.05,.03,2829364);c(r,0,.82,.02,u-.02,.04,f-.06,2302763);for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(r,m*.2,.86,p*.17,.2,.012,.2,4868693);c(r,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),c(r,0,1.42,-f/2+.24,u-.1,.18,.44,12831958),c(r,0,1.6,-f/2+.12,.3,.3,.22,12831958),c(e.tile,0,.86,-f/2+.02,u,.56,.01,16777215,{faces:St,us:.5});break}case"couch":{for(let g of[-1,1])for(let M of[-1,1])c(o,g*(u/2-.2),0,M*(f/2-.15),.07,.1,.07,5913126);c(r,0,.1,0,u-.08,.26,f-.12,ct(3115662,.85)),c(r,0,.1,-f/2+.17,u-.08,.66,.22,3115662);for(let g of[-1,1])c(r,g*(u/2-.13),.1,.02,.22,.44,f-.1,3115662),c(r,g*(u/2-.13),.54,.02,.26,.06,f-.06,3842212);let y=3,b=(u-.6)/y;for(let g=0;g<y;g++){let M=-u/2+.3+(g+.5)*b;c(r,M,.36,.08,b-.04,.13,f-.4,3842212,{top:ct(3842212,1.1)}),c(r,M,.42,-f/2+.34,b-.06,.38,.14,3842212,{ry:0})}c(r,-u/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),c(r,u/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),c(r,u/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),c(r,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let m of[-1,1])c(o,m*(u/2-.15),0,0,.06,.12,.06,2763574);c(o,0,.12,-.05,u-.1,.38,f-.45,7226670,{top:ct(7226670,1.15)});for(let m=0;m<3;m++)c(o,-u/2+.05+(m+.5)*((u-.1)/3),.16,f/2-.27,(u-.1)/3-.05,.3,.012,ct(7226670,1.2),{faces:St});c(r,0,.62,-.2,u-.4,.92,.07,1447710),c(l,0,.67,-.163,u-.52,.8,.005,2903966,{faces:St}),c(l,-.3,.75,-.159,.9,.35,.004,6269160,{faces:St}),c(l,.5,.85,-.158,.4,.22,.004,16762967,{faces:St}),c(l,.25,.73,-.158,.3,.12,.004,8049530,{faces:St}),c(r,0,.5,-.02,u-1,.07,.1,2237227),c(r,u/2-.35,.5,-.05,.16,.22,.16,13133631);for(let m=0;m<4;m++)c(r,u/2-.35+a(-.05,.05),.68+m*.05,-.05,.22,.05,.08,Fi[m%4],{ry:m*.8});c(r,-u/2+.4,.5,-.05,.3,.06,.2,2763574),d(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{if(n.def.gala||n.def.train){c(r,0,0,0,u-.16,.72,f-.16,16184042,{top:16777215}),c(r,0,.6,0,u-.12,.13,f-.12,ct(16184042,.96),{faces:63&~te}),c(r,0,.72,0,.3,.004,f-.36,n.def.train?8006202:13213760,{faces:te}),c(r,0,.724,0,.12,.04,.12,14725194),c(r,0,.76,0,.04,.22,.04,14725194);for(let p of[-1,1])c(r,p*.12,.92,0,.2,.025,.03,14725194),c(r,p*.2,.94,0,.04,.14,.04,16774880),c(l,p*.2,1.08,0,.03,.05,.03,16758858);c(r,0,.98,0,.04,.14,.04,16774880),c(l,0,1.12,0,.03,.05,.03,16758858),c(r,.32,.724,.28,.08,.2,.08,2775610),c(r,.32,.92,.28,.03,.07,.03,14725194);for(let[p,y]of[[-.4,-.38],[.4,.38],[-.4,.38],[.4,-.38]])c(r,p,.724,y,.24,.012,.24,16777215),c(r,p,.736,y,.14,.01,.14,15262422),c(l,p+.17,.724,y,.04,.1,.04,14217471);d(0,1.2,0,[1,.75,.45],.7,2.2);break}let v=13867874;c(o,0,.66,0,u-.2,.07,f-.2,v,{top:ct(v,1.08)});for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,m*(u/2-.25),0,p*(f/2-.25),.08,.66,.08,ct(v,.8));c(r,0,.73,0,.5,.006,f-.25,12999242),c(r,0,.736,0,.36,.06,.36,16777215,{top:15262422}),c(r,-.06,.79,.02,.12,.12,.12,15230287),c(r,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),c(r,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[m,p]of[[-.45,-.45],[.45,.45]])c(r,m,.735,p,.28,.012,.28,16777215),c(r,m+.2,.735,p,.03,.01,.2,12831958);break}case"chair":{if(n.def.train){c(r,0,0,0,.36,.06,.36,2763574),c(r,0,.06,0,.06,.3,.06,13226716),c(r,0,.36,.02,.5,.14,.46,2771594,{top:ct(2771594,1.2)}),c(r,0,.36,-.22,.5,.82,.12,2771594,{top:1714770});for(let y=0;y<3;y++)c(r,0,.56+y*.18,-.155,.44,.012,.01,1714770,{faces:St});c(r,0,1.02,-.15,.36,.14,.015,16052714,{faces:St|te});for(let y of[-1,1])c(r,y*.27,.36,-.02,.06,.34,.42,1714770,{top:ct(1714770,1.4)});break}let v=12157268;for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,m*.17,0,p*.17,.05,.42,.05,ct(v,.8));c(o,0,.42,0,.44,.05,.44,v),c(r,0,.47,0,.38,.03,.38,12999242),c(o,0,.47,-.19,.42,.52,.05,v),c(o,0,.82,-.19,.3,.1,.06,ct(v,1.1));break}case"tub":{c(r,0,0,0,u-.12,.58,f-.12,16054007,{top:16777215}),c(r,0,.5,0,u-.34,.06,f-.34,9425898,{faces:te}),c(r,0,.58,-f/2+.15,.05,.2,.05,12831958),c(r,0,.74,-f/2+.22,.05,.04,.18,12831958),c(r,.3,.56,.2,.12,.1,.14,16765503),c(r,.3,.64,.24,.08,.08,.08,16765503),c(r,.3,.66,.3,.04,.03,.05,16747069),c(r,0,1.75,f/2-.08,u-.1,.025,.025,12831958),c(r,-u/2+.35,.6,f/2-.08,.6,1.15,.03,9423064);for(let v=0;v<3;v++)c(r,-u/2+.15+v*.2,.6,f/2-.06,.04,1.15,.035,16183526);break}case"slots":{let y=[16732026,5037311,16766810,8191898];for(let b=0;b<u;b++){let g=-u/2+b+.5,M=[11740730,2771635,6957747,2067034][(b+t.x0)%4],S=ct(M,.62),_=y[(b+t.y0)%4];c(r,g,0,0,.82,.12,.74,1512991),c(r,g,.02,.371,.8,.07,.008,14725194,{faces:St}),c(r,g,.12,-.02,.76,.58,.66,S,{top:M}),c(r,g,.3,.315,.62,.3,.012,M,{faces:St}),c(r,g,.34,.32,.5,.2,.008,ct(M,1.3),{faces:St}),c(r,g,.17,.33,.36,.09,.09,13226716),c(r,g,.21,.37,.28,.04,.03,855314,{faces:St|te}),c(r,g,.7,.1,.78,.07,.48,2368302,{top:3026234});for(let w=0;w<3;w++)c(l,g-.2+w*.2,.77,.25,.13,.035,.09,[16726862,16765503,4054148][w]);c(r,g,.77,-.09,.76,.64,.52,M);for(let w of[-1,1])c(r,g+w*.385,.12,.3,.035,1.3,.05,13226716),c(r,g+w*.385,.12,-.34,.03,1.3,.04,ct(M,.5));c(r,g,.84,.172,.68,.48,.012,14725194,{faces:St}),c(r,g,.87,.18,.6,.42,.01,723728,{faces:St});for(let w=0;w<3;w++)c(e.slotReel,g-.19+w*.19,.89,.187,.17,.38,.004,[16777215,16774368,16777215][w],{faces:St,fit:!0});c(l,g,1.075,.19,.58,.014,.004,16724032,{faces:St}),c(r,g,1.41,-.06,.78,.26,.5,1512991),c(e.slotSign,g,1.43,.192,.74,.22,.004,16777215,{faces:St,fit:!0}),c(r,g,1.67,-.06,.46,.05,.3,13226716),c(l,g,1.72,-.06,.2,.13,.2,_),c(r,g+.43,.82,.02,.06,.14,.12,13226716),c(r,g+.45,.86,.02,.035,.42,.035,13226716),c(r,g+.45,1.28,.02,.1,.1,.1,15216702,{top:16738932})}d(0,1.5,.7,[1,.5,.8],.9,3.4);break}case"poker":{let p=[15222847,3111656,15911244,2237487,16183526];c(o,0,0,0,.6,.68,.6,5909018),c(o,0,.68,0,u-.1,.08,f-.1,5909018,{top:ct(5909018,1.2)}),c(r,0,.76,0,u-.34,.012,f-.34,2062922,{faces:te}),c(r,0,.775,0,u-.9,.004,.02,14267482,{faces:te});for(let y=0;y<6;y++){let b=y/6*6.28,g=Math.min(u,f)*.32;c(r,Math.cos(b)*g,.78,Math.sin(b)*g,.08,.03+y%3*.03,.08,p[y%5])}for(let y=0;y<4;y++)c(r,-.2+y*.13,.775,-.05,.1,.006,.14,16777215,{ry:(y-1.5)*.2});for(let[y,b]of[[-1,0],[1,0],[0,-1],[0,1]])c(o,y*(u/2+.3),0,b*(f/2+.3),.36,.48,.36,11745617,{top:13650522});d(0,1.4,0,[1,.85,.55],.9,2.6);break}case"pedestal":{let m=(t.x0*3+t.y0)%4,p=15250234;c(r,0,0,0,.64,.12,.64,ct(15525594,.82),{top:ct(15525594,.95)}),c(r,0,.12,0,.46,.68,.46,15525594);for(let[b,g,M,S]of[[0,.232,.06,.01],[.12,.232,.04,.01],[-.12,.232,.04,.01],[.232,0,.01,.06],[-.232,0,.01,.06],[0,-.232,.06,.01]])c(r,b,.16,g,M,.58,S,ct(15525594,.86),{faces:63&~te&~hi});c(r,0,.8,0,.6,.08,.6,ct(15525594,.92)),c(r,0,.88,0,.36,.06,.36,10100538,{top:12068938}),c(r,0,.42,.236,.22,.08,.008,p,{faces:St});let y=.94;if(m===0){c(r,0,y,0,.12,.05,.12,p),c(r,0,y+.05,0,.2,.14,.2,p,{top:ct(p,1.2)}),c(r,0,y+.19,0,.1,.1,.1,p),c(r,0,y+.29,0,.16,.04,.16,ct(p,1.15));for(let b of[-1,1])c(r,b*.12,y+.14,0,.03,.14,.03,p);c(r,0,y+.1,.101,.16,.03,.005,2058874,{faces:St})}else if(m===1){c(r,0,y,0,.24,.08,.24,p,{faces:63&~te});for(let[b,g]of[[-.1,-.1],[.1,-.1],[-.1,.1],[.1,.1],[0,.11],[0,-.11],[.11,0],[-.11,0]])c(r,b,y+.08,g,.04,.07,.04,p);c(l,0,y+.03,.122,.05,.04,.005,16726890,{faces:St}),c(l,.122,y+.03,0,.005,.04,.05,3920895,{faces:Ge}),c(l,-.122,y+.03,0,.005,.04,.05,3932042,{faces:ci})}else if(m===2)c(r,0,y,0,.12,.04,.12,p),c(r,0,y+.04,0,.16,.06,.16,4156120),c(r,0,y+.1,0,.2,.1,.2,4156120,{top:5932784}),c(r,0,y+.2,0,.14,.08,.14,4156120),c(r,0,y+.28,0,.07,.04,.07,p),c(r,0,y+.135,0,.21,.025,.21,p,{faces:63&~te&~hi});else{c(r,0,y,0,.14,.04,.1,2763316),c(r,0,y+.04,0,.22,.28,.06,p,{top:ct(p,1.2)}),c(r,0,y+.32,0,.26,.06,.08,2771635);for(let b of[-1,1])c(r,b*.05,y+.2,.031,.05,.03,.005,1839920,{faces:St});c(r,0,y+.1,.031,.04,.06,.005,ct(p,.8),{faces:St})}d(0,1.6,0,[1,.85,.6],.8,2);break}case"statue":{let m=ct(14999250,.78),p=14725194;c(r,0,0,0,.84,.16,.84,m,{top:ct(14999250,.9)}),c(r,0,.16,0,.68,.3,.68,14999250,{top:ct(14999250,1.04)}),c(r,0,.24,.341,.34,.1,.008,p,{faces:St}),c(r,0,.46,0,.56,.06,.56,m),c(r,0,.52,0,.36,.42,.3,14999250,{top:m}),c(r,0,.9,0,.42,.42,.24,14999250),c(r,.06,.9,.125,.3,.42,.01,ct(14999250,.92),{faces:St,ry:.15}),c(r,-.27,.92,.04,.12,.38,.13,14999250,{ry:.25}),c(r,.27,1.18,0,.12,.42,.13,14999250),c(r,.27,1.6,0,.08,.2,.08,p),c(l,.27,1.8,0,.12,.14,.12,16753210),c(l,.27,1.9,0,.07,.08,.07,16769162),c(r,0,1.32,0,.24,.28,.24,14999250),c(r,0,1.56,-.01,.27,.08,.27,m),c(r,0,1.52,0,.29,.04,.29,6987850,{faces:63&~te}),d(.27,1.85,0,[1,.7,.35],.5,1.8);break}case"case":{c(o,0,0,0,u-.1,.78,f-.1,2759202,{top:ct(2759202,1.3)}),c(r,0,.1,f/2-.06,u-.2,.55,.01,ct(2759202,1.4),{faces:St}),c(r,0,.78,0,u-.06,.04,f-.06,14267482),c(l,0,.82,0,u-.2,.012,f-.2,3811930,{faces:te});for(let[p,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(r,p*(u/2-.06),.82,y*(f/2-.06),.04,.46,.04,14267482);c(r,0,1.28,0,u-.06,.03,f-.06,14267482),d(0,1.05,0,[.75,.85,1],.9,2.4);break}case"wardrobe":{let m=ct(9067068,1.18),p=ct(9067068,.7);c(o,0,0,-.06,.92,1.72,.74,9067068,{top:p}),c(o,0,1.72,-.06,.98,.06,.8,p),c(o,0,0,-.06,.96,.08,.78,p);for(let y of[-1,1]){c(o,y*.225,.12,.315,.42,1.54,.02,m,{faces:St|Ge|ci|te});for(let b=0;b<9;b++)c(r,y*.225,.78+b*.09,.327,.34,.025,.01,p,{faces:St|te});c(o,y*.225,.2,.327,.34,.5,.008,ct(m,1.08),{faces:St}),c(r,y*.04,.8,.34,.03,.12,.03,14267482)}c(r,0,.12,.33,.012,1.54,.02,p,{faces:St});break}case"teller":{c(o,0,0,.05,u,.78,f-.3,5913130,{top:ct(5913130,1.1)}),c(r,0,.08,f/2-.1,u-.02,.78-.16,.01,ct(5913130,1.25),{faces:St}),c(r,0,.78,.05,u+.02,.05,f-.2,15262422);let y=Math.max(1,Math.round(u));for(let b=0;b<=y;b++)c(r,-u/2+b*u/y,.78+.05,.05,.04,.82,.04,14267482);c(r,0,.78+.87,.05,u,.04,.06,14267482);for(let b=0;b<y;b++){let g=-u/2+(b+.5)*(u/y);c(r,g,.78+.05,.05,.3,.06,.05,2763574),b%2===0?(c(r,g+.15,.78+.05,-.2,.3,.22,.04,2237229),c(l,g+.15,.78+.09,-.177,.26,.15,.005,6272255,{faces:St})):c(r,g-.1,.78+.05,-.15,.22,.04,.16,5221978,{top:9429130})}break}case"plant":{if(c(r,0,0,0,.34,.3,.34,13133631,{top:4863014}),c(r,0,.26,0,.42,.08,.42,ct(13133631,1.12)),c(r,0,.1,0,.36,.04,.36,ct(13133631,.82),{faces:Ge|ci|St|he}),(t.x0+t.y0)%2){c(o,0,.34,0,.07,.62,.07,8018486),c(o,.02,.6,0,.06,.36,.06,6965802,{ry:.3});for(let m=0;m<7;m++){let p=m*.9,y=Fi[m%4];c(r,Math.cos(p)*.18,1-m%2*.05,Math.sin(p)*.18,.3,.07,.14,y,{ry:-p,top:ct(y,1.15)}),c(r,Math.cos(p)*.36,.93-m%2*.05,Math.sin(p)*.36,.18,.06,.11,ct(y,.9),{ry:-p})}c(r,0,1.04,0,.16,.1,.16,Fi[2])}else{[[0,.42,0,.42],[.08,.66,.05,.34],[-.07,.62,-.06,.32],[0,.86,0,.26]].forEach(([p,y,b,g],M)=>c(r,p,y,b,g,g,g,Fi[M%4],{ry:M*.5,top:ct(Fi[M%4],1.15)}));for(let p=0;p<6;p++){let y=p*1.05;c(r,Math.cos(y)*.22,.5+p%3*.14,Math.sin(y)*.22,.12,.12,.12,Fi[(p+1)%4],{ry:y})}}break}case"night":{c(o,0,0,0,u-.38,.5,f-.4,10118724,{top:ct(10118724,1.12)}),c(o,0,.28,f/2-.195,u-.48,.16,.01,ct(10118724,1.2),{faces:St}),c(r,0,.35,f/2-.18,.06,.03,.02,14267482),c(r,0,.5,-.05,.12,.03,.12,3816006),c(r,0,.53,-.05,.05,.2,.05,14267482),c(l,0,.72,-.05,.26,.18,.26,16767392),c(r,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),d(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{c(r,0,0,.04,.3,.06,.38,15001834),c(r,0,.06,.05,.32,.26,.42,16185336),c(r,0,.32,.07,.4,.05,.5,16777215),c(r,0,.365,.08,.3,.005,.36,10471894,{faces:te}),c(r,0,.37,-f/2+.33,.38,.32,.04,16777215),c(r,0,.3,-f/2+.17,.44,.48,.2,16185336,{top:16777215}),c(r,0,.78,-f/2+.17,.48,.04,.24,16777215),c(r,.16,.66,-f/2+.28,.08,.025,.04,12831958),c(r,-.36,.5,-f/2+.08,.12,.12,.1,12831958),c(r,-.36,.44,-f/2+.12,.1,.12,.1,16777215);break}case"sink":{c(o,0,0,0,u-.18,.78,f-.44,9067066,{top:ct(9067066,1.1)});for(let m of[-1,1])c(o,m*(u-.24)/4,.08,f/2-.215,(u-.3)/2-.04,.6,.012,ct(9067066,1.18),{faces:St}),c(r,m*.05,.5,f/2-.205,.03,.12,.02,14267482);c(r,0,.78,0,u-.12,.05,f-.36,16052714),c(r,0,.8,.02,.44,.07,.32,16777215),c(r,0,.865,.03,.34,.006,.22,10471894,{faces:te}),c(r,0,.83,-f/2+.26,.06,.2,.06,13226716),c(r,0,1,-f/2+.31,.04,.04,.12,13226716),c(r,-.08,.95,-f/2+.26,.05,.03,.05,16738922),c(r,.08,.95,-f/2+.26,.05,.03,.05,6990079),c(r,.3,.83,-f/2+.3,.08,.14,.08,5227432),c(r,.3,.97,-f/2+.3,.03,.04,.03,16777215),c(r,-.3,.83,-f/2+.3,.08,.12,.08,16765503),c(r,-.29,.95,-f/2+.3,.015,.1,.015,3832552),c(o,0,1.02,-f/2+.03,.66,.76,.03,6965802),c(l,0,1.06,-f/2+.05,.56,.66,.005,12179172,{faces:St}),c(l,-.12,1.3,-f/2+.054,.12,.3,.004,15135994,{faces:St}),c(l,-.2,1.2,-f/2+.054,.05,.2,.004,15135994,{faces:St});break}}}function Pg(n,t){let{W:e,H:i}=n,s=(f,x)=>f<0||x<0||f>=e||x>=i?-1:Math.floor(x)*e+Math.floor(f),a=(f,x)=>{let d=s(f,x);return d<0||n.opaque[d]===1},r=(f,x,d,v)=>{let m=d-f,p=v-x,y=Math.ceil(Math.hypot(m,p)/.15);for(let b=1;b<y;b++){let g=b/y;if(a(f+m*g,x+p*g))return!1}return!0},o=[-.55,.7,.45],l=Math.hypot(...o);o[0]/=l,o[1]/=l,o[2]/=l;let h=[0,0,0],c=(f,x)=>{let d=s(f,x);return d<0?0:n.ch[d]==="#"?1:!n.walk[d]&&!n.outdoor[d]?.55:0};function u(f,x,d,v,m,p,y){let b=f+v*.14,g=d+p*.14,M=s(b,g),S=M>=0&&!n.outdoor[M]&&n.ch[M]!=="#",_,w,k;if(S){let I=.85+.15*m;_=.2*I,w=.19*I,k=.27*I,n.def.night&&(_*=.6,w*=.65,k*=.85);for(let O of t){let C=O.x-f,E=O.y-x,z=O.z-d,D=Math.hypot(C,E,z);if(D>O.R||!r(O.x,O.z,b,g))continue;let N=1-D/O.R,V=O.I*N*N,W=y?.7:Math.max(0,(v*C+m*E+p*z)/(D||1))*.75+.25;_+=O.col[0]*V*W,w+=O.col[1]*V*W,k+=O.col[2]*V*W}}else{let I=Math.max(0,v*o[0]+m*o[1]+p*o[2]),O=.55+.45*m;if(_=.5*O+.95*I,w=.5*O+.8*I,k=.62*O+.62*I,n.def.night){_*=.14,w*=.18,k*=.38;for(let C of t){if(!C.street)continue;let E=C.x-f,z=C.y-x,D=C.z-d,N=Math.hypot(E,z,D);if(N>C.R)continue;let V=1-N/C.R,W=C.I*V*V,Z=Math.max(0,(v*E+m*z+p*D)/(N||1))*.7+.3;_+=C.col[0]*W*Z,w+=C.col[1]*W*Z,k+=C.col[2]*W*Z}}}let P=1;if(x<.06||S&&x>Le-.08){let I=0;for(let[O,C]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])I+=c(b+O,g+C);P=1-.17*I-(x<.06?.06:.1)}else x<.3&&S&&(P=.9+x*.3);return h[0]=_*P,h[1]=w*P,h[2]=k*P,h}return u}function Lg(n,t){let e=n.p,i=n.n,s=n.c;for(let a=0;a<e.length;a+=3){let r=t(e[a],e[a+1],e[a+2],i[a],i[a+1],i[a+2],!1);s[a]*=r[0],s[a+1]*=r[1],s[a+2]*=r[2]}}function Ig(){let n=document.createElement("canvas");n.width=512,n.height=128;let t=n.getContext("2d"),e=Ai(99),i=n.width,s=n.height,a=t.createLinearGradient(0,0,0,s);a.addColorStop(0,"#0b1030"),a.addColorStop(.7,"#2a2f6a"),a.addColorStop(1,"#6a4a8a"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,.8)";for(let o=0;o<40;o++)t.fillRect(e()*i,e()*s*.35,1.2,1.2);for(let[o,l,h]of[[0,"#1a1f45",.25],[1,"#10132e",.45]]){let c=-10;for(;c<i;){let u=18+e()*34,f=(o?40:55)+e()*(o?55:45);t.fillStyle=l,t.fillRect(c,s-f,u,f);for(let x=s-f+5;x<s-4;x+=7)for(let d=c+3;d<c+u-4;d+=6)e()<h&&(t.fillStyle=e()<.8?"#ffd38a":"#9fd8ff",t.fillRect(d,x,3,3));o&&e()<.3&&(t.fillStyle=l,t.fillRect(c+u/2-1,s-f-12,2,12),t.fillStyle="#ff4a5a",t.fillRect(c+u/2-2,s-f-14,4,3)),c+=u+e()*4}}let r=new wi(n);return r.colorSpace=Te,r.wrapS=hn,r.wrapT=ri,r}var Xo=null;function kg(){if(Xo)return Xo;let n=e=>{let i=document.createElement("canvas");i.width=64,i.height=52;let s=i.getContext("2d");e(s);let a=new wi(i);return a.colorSpace=Te,a},t=(e,i,s,a,r)=>{e.fillStyle=r,e.beginPath(),e.arc(i,s,a,0,6.3),e.fill()};return Xo=[n(e=>{e.fillStyle="#8ec8f0",e.fillRect(0,0,64,52),t(e,48,12,7,"#ffd23f"),e.fillStyle="#6a7aa0",e.beginPath(),e.moveTo(4,38),e.lineTo(24,12),e.lineTo(44,38),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(19,19),e.lineTo(24,12),e.lineTo(29,19),e.fill(),e.fillStyle="#4fae5a",e.fillRect(0,36,64,16),t(e,52,36,10,"#3f9a4a")}),n(e=>{e.fillStyle="#5a2a3a",e.fillRect(0,0,64,52),e.fillStyle="#2a3a6a",e.fillRect(16,34,32,18),t(e,32,22,11,"#f0c8a0"),e.fillStyle="#3a2418",e.fillRect(20,9,24,8),e.fillStyle="#1c1330",e.fillRect(27,21,3,3),e.fillRect(35,21,3,3),e.fillStyle="#3a2418",e.fillRect(26,28,13,3)}),n(e=>{e.fillStyle="#ffc89a",e.fillRect(0,0,64,28),e.fillStyle="#3f8fd0",e.fillRect(0,28,64,24),e.fillStyle="#7a4a2a",e.fillRect(18,32,28,6),e.fillStyle="#fff",e.beginPath(),e.moveTo(32,8),e.lineTo(32,31),e.lineTo(48,31),e.fill(),e.fillStyle="#e8483f",e.beginPath(),e.moveTo(30,12),e.lineTo(30,31),e.lineTo(20,31),e.fill(),e.fillStyle="rgba(255,255,255,.5)",e.fillRect(4,42,14,2),e.fillRect(40,46,16,2)}),n(e=>{e.fillStyle="#9ad8c0",e.fillRect(0,0,64,52),t(e,32,34,14,"#f2a03a"),t(e,32,20,11,"#f2a03a"),e.fillStyle="#f2a03a",e.beginPath(),e.moveTo(22,14),e.lineTo(24,3),e.lineTo(30,11),e.fill(),e.beginPath(),e.moveTo(42,14),e.lineTo(40,3),e.lineTo(34,11),e.fill(),e.fillStyle="#1c1330",e.fillRect(27,18,3,4),e.fillRect(35,18,3,4),e.fillStyle="#ff7a8a",e.fillRect(31,24,3,2),e.fillStyle="#d8822a",e.fillRect(24,32,16,3)})],Xo}var Hc=null;function Dg(){if(Hc)return Hc;let n=(i,s,a)=>{let r=document.createElement("canvas");r.width=i,r.height=s,a(r.getContext("2d"),i,s);let o=new wi(r);return o.colorSpace=Te,o},t=n(64,128,(i,s,a)=>{let r=i.createLinearGradient(0,0,0,a);r.addColorStop(0,"#b9b2a2"),r.addColorStop(.2,"#fffaf0"),r.addColorStop(.8,"#fffaf0"),r.addColorStop(1,"#b9b2a2"),i.fillStyle=r,i.fillRect(0,0,s,a),i.fillStyle="#2f9a3a",i.fillRect(30,-2,4,14),i.fillStyle="#e8303e",i.beginPath(),i.arc(24,14,9,0,6.3),i.arc(40,16,9,0,6.3),i.fill(),i.font="bold 54px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="#1c1330",i.strokeText("7",32,66),i.fillStyle="#e8303e",i.fillText("7",32,66),i.fillStyle="#1c1330",i.fillRect(8,104,48,22),i.fillStyle="#ffd23f",i.font="bold 15px Arial Black, Arial, sans-serif",i.fillText("BAR",32,116)}),e=n(256,72,(i,s,a)=>{let r=i.createLinearGradient(0,0,0,a);r.addColorStop(0,"#ff5fa2"),r.addColorStop(1,"#a8207a"),i.fillStyle="#1c1330",i.fillRect(0,0,s,a),i.fillStyle=r,i.fillRect(6,6,s-12,a-12);for(let l=12;l<s-6;l+=16)for(let h of[11,a-11])i.fillStyle="#fff3b0",i.beginPath(),i.arc(l,h,3.4,0,6.3),i.fill();i.font="bold 38px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=7,i.strokeStyle="#1c1330",i.strokeText("LUCKY 7",s/2,a/2+2);let o=i.createLinearGradient(0,18,0,54);o.addColorStop(0,"#fff6c0"),o.addColorStop(1,"#ffb52e"),i.fillStyle=o,i.fillText("LUCKY 7",s/2,a/2+2)});return Hc={reel:t,sign:e}}function Ng(){let n=document.createElement("canvas");n.width=1024,n.height=128;let t=n.getContext("2d"),e=Ai(77),i=n.width,s=n.height,a=t.createLinearGradient(0,0,0,s);a.addColorStop(0,"#0d1430"),a.addColorStop(.55,"#24325e"),a.addColorStop(1,"#3a3f66"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,0.8)";for(let l=0;l<70;l++)t.fillRect(e()*i,e()*s*.45,1.5,1.5);let r=l=>{l(0),l(-i),l(i)};t.fillStyle="#1b2446",t.beginPath(),t.moveTo(0,s);for(let l=0;l<=i;l+=16)t.lineTo(l,62+Math.sin(l/i*Math.PI*6)*10+Math.sin(l/i*Math.PI*14)*5);t.lineTo(i,s),t.fill();for(let l=0;l<14;l++){let h=e()*i,c=70+e()*14;r(u=>{t.fillStyle="#ffd38a",t.fillRect(h+u,c,3,2)})}t.fillStyle="#0c1226";for(let l=0;l<90;l++){let h=e()*i,c=14+e()*22,u=8+e()*10;r(f=>{t.beginPath(),t.moveTo(h+f-u,s-18),t.lineTo(h+f,s-18-c),t.lineTo(h+f+u,s-18),t.fill()})}t.fillRect(0,s-20,i,20),t.strokeStyle="#05080f",t.lineWidth=3;for(let l=40;l<i;l+=128)t.beginPath(),t.moveTo(l,s),t.lineTo(l,26),t.stroke(),t.fillStyle="#05080f",t.fillRect(l-9,30,18,3);t.lineWidth=1,t.beginPath();for(let l=40;l<i+128;l+=128)t.moveTo(l,31),t.quadraticCurveTo(l+64,40,l+128,31);t.stroke();let o=new wi(n);return o.colorSpace=Te,o.wrapS=hn,o.wrapT=ri,o}function gu(n){let t=Oi(),e={wood:new Dt(2),carpet:new Dt(1),tile:new Dt(1),wallpaper:new Dt(1),panel:new Dt(1),brick:new Dt(.9),plaster:new Dt(2),grass:new Dt(3),asphalt:new Dt(3),concrete:new Dt(1),plain:new Dt(1),woodfine:new Dt(.8),rug:new Dt(1),unlit:new Dt(1),shadow:new Dt(1),patch:new Dt(1),trainN:new Dt(8),trainS:new Dt(8),slotReel:new Dt(1),slotSign:new Dt(1),pics:[0,1,2,3].map(()=>new Dt(1)),skyline:new Dt(6)},i=!!n.def.train,{W:s,H:a,ch:r,floor:o}=n,l=Ai(1337),h=(C,E)=>C+l()*(E-C),c=(C,E)=>C>=0&&E>=0&&C<s&&E<a&&r[E*s+C]==="#",u=(C,E)=>C<0||E<0||C>=s||E>=a||n.outdoor[E*s+C]===1,f=n.van?n.van.y-1:n.def.roadTop??a,x=!!n.def.night,d=n.def.lampScale||1,v=[],m=[],p=[],y=new Int16Array(s*a).fill(-1),b=(C,E)=>!c(C,E)&&(c(C-1,E)&&c(C+1,E)||c(C,E-1)&&c(C,E+1)),g=[];for(let C=0;C<s*a;C++){let E=C%s,z=C/s|0;if(y[C]>=0||r[C]==="#"||n.outdoor[C]||b(E,z))continue;let D=g.length,N=[],V=[C];for(y[C]=D;V.length;){let Z=V.pop(),J=Z%s,H=Z/s|0;N.push(Z);for(let[q,L]of[[1,0],[-1,0],[0,1],[0,-1]]){let et=J+q,ot=H+L,ft=ot*s+et;et<0||ot<0||et>=s||ot>=a||y[ft]>=0||r[ft]==="#"||n.outdoor[ft]||b(et,ot)||(y[ft]=D,V.push(ft))}}let W=n.def.palette||du;g.push({id:D,cells:N,pal:W[D%W.length]})}for(let C=0;C<s*a;C++)if(y[C]<0&&b(C%s,C/s|0)){let E=C%s,z=C/s|0;for(let[D,N]of[[0,1],[1,0],[0,-1],[-1,0]]){let V=(z+N)*s+E+D;if(y[V]>=0){y[C]=y[V];break}}}let M=(C,E)=>{let z=C>=0&&E>=0&&C<s&&E<a?y[E*s+C]:-1;return z>=0?g[z].pal:du[0]};for(let C of g){let E=1e9,z=-1,D=1e9,N=-1;for(let H of C.cells){let q=H%s,L=H/s|0;E=Math.min(E,q),z=Math.max(z,q),D=Math.min(D,L),N=Math.max(N,L)}let V=z-E+1,W=N-D+1,Z=Math.max(V,W),J=Math.max(1,Math.round(Z/6));for(let H=0;H<J;H++){let q=(H+.5)/J,L=V>=W?E+V*q:E+V/2,et=V>=W?D+W/2:D+W*q;v.push({x:L,y:Le-.4,z:et,col:x?[1,.7,.5]:[1,.74,.45],I:1.75*d,R:5.6,pendant:!0})}}let S=40,_=(C,E,z,D,N,V)=>C.box((E+D)/2,-.06,(z+N)/2,D-E,.05,N-z,V,{faces:te});if(i){_(e.grass,-S,-S,s+S,.6,6978154),_(e.grass,-S,a-.6,s+S,a+S,6978154),_(e.concrete,-S,.6,s+S,a-.6,9077880);for(let C=-S;C<s+S;C+=.7)(C<-.3||C>s+.3)&&e.woodfine.box(C,-.02,a/2,.22,.05,a-2.4,5914412,{faces:te|Ge|ci});for(let C of[a/2-1.6,a/2+1.6])for(let[E,z]of[[-S,-.2],[s+.2,s+S]])e.plain.box((E+z)/2,0,C,z-E,.08,.1,12107980,{top:15265526})}if(!i){_(e.grass,-S,-S,0,f,16777215),_(e.grass,s,-S,s+S,f,16777215),_(e.grass,0,-S,s,0,16777215),_(e.concrete,-S,f,0,f+1,16777215),_(e.concrete,s,f,s+S,f+1,16777215),_(e.asphalt,-S,f+1,0,a,16777215),_(e.asphalt,s,f+1,s+S,a,16777215),_(e.concrete,-S,a,s+S,a+1.2,16777215),_(e.grass,-S,a+1.2,s+S,a+S,16777215);for(let D=-S;D<s+S;D+=2.2)e.plain.box(D+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:te});let C=(D,N)=>{let V=.8+l()*.6,W=l()*1.5;e.woodfine.box(D,0,N,.28*V,.9*V,.28*V,8016438,{ry:W}),e.plain.box(D,.7*V,N,1.4*V,1*V,1.4*V,Fi[l()*4|0],{ry:W}),e.plain.box(D+.2*V,1.5*V,N-.1*V,1*V,.8*V,1*V,Fi[l()*4|0],{ry:W+.5}),e.plain.box(D-.1*V,2.15*V,N+.1*V,.6*V,.5*V,.6*V,Fi[l()*4|0],{ry:W+.9})};for(let D=-S+2;D<f-.5;D+=2.6)for(let N=-S+2;N<s+S-2;N+=2.6)N>-1.5&&N<s+1&&D>-1.5||l()<.55&&C(N+(l()-.5)*1.4,D+(l()-.5)*1.4);let E=[15246478,10274761,15652762,12167636,11064480];for(let D=-S+3,N=0;D<s+S;D+=7,N++){let V=a+4.5+N%2*.8,W=E[N%5],Z=[9058874,3820138,5914712,3824202][N%4];e.plain.box(D,0,V,5,2.4,4,W),e.plain.box(D,0,V-2.01,5.02,.35,.02,ct(W,.75),{faces:he});for(let J=0;J<4;J++)e.plain.box(D,2.4+J*.32,V,5.6-J*1.1,.32,4.6,ct(Z,1-J*.06),{top:ct(Z,1.12)});e.plain.box(D+1.5,2.9,V+.6,.5,1.2,.5,9062970,{top:5909024});for(let J of[-1.5,1.5]){e.plain.box(D+J,.88,V-2.02,.98,.9,.04,16777215,{faces:he}),e.unlit.box(D+J,.95,V-2.04,.8,.75,.02,16765834,{faces:he}),e.plain.box(D+J,1.3,V-2.06,.04,.75,.02,16777215,{faces:he}),e.plain.box(D+J,1.31,V-2.06,.8,.04,.02,16777215,{faces:he});for(let H of[-1,1])e.plain.box(D+J+H*.62,.9,V-2.04,.22,.86,.04,ct(Z,1.2),{faces:he|Ge|ci});e.plain.box(D+J,.84,V-2.12,1,.08,.2,16777215),e.plain.box(D+J,.92,V-2.12,.8,.14,.16,Fi[N%4])}e.plain.box(D,0,V-2.3,1.3,.14,.6,13156528),e.woodfine.box(D,0,V-2.02,.95,1.55,.04,16777215,{faces:he}),e.woodfine.box(D,0,V-2.04,.75,1.42,.03,[8014643,11745617,2775690,3832394][(N+1)%4],{faces:he}),e.plain.box(D+.25,.7,V-2.07,.06,.06,.04,14725194),e.plain.box(D-1.9,0,V-3.3,.06,.8,.06,5913126),e.plain.box(D-1.9,.8,V-3.3,.24,.2,.34,[3107560,15222847,3816006][N%3]),l()<.8&&C(D+3.3,V-1.5)}let z=(D,N,V,W)=>{let Z=Math.hypot(V-D,W-N),J=Math.round(Z/.45),H=N===W;e.plain.box((D+V)/2,.28,(N+W)/2,H?Z:.05,.07,H?.05:Z,16183526),e.plain.box((D+V)/2,.58,(N+W)/2,H?Z:.05,.07,H?.05:Z,16183526);for(let q=0;q<=J;q++){let L=q/J;e.plain.box(D+(V-D)*L,0,N+(W-N)*L,.1,.8,.1,16777215)}};z(-.05,-.05,s+.05,-.05),z(-.05,-.05,-.05,f-.05),z(s+.05,-.05,s+.05,f-.05);for(let D of[-.25,s+.25])for(let N=f;N<a;N+=.5)e.plain.box(D,0,N+.25,.3,.7,.5,(N*2|0)%2?15222847:16777215)}let w=(C,E,z,D,N,V,W,Z,J=2,H={})=>{let q=D>0?Ge:D<0?ci:N>0?St:he,L=E+.5+D*.5+D*(H.off||0),et=z+.5+N*.5+N*(H.off||0);for(let ot=0;ot<J;ot++){let ft=(ot+.5)/J-.5;C.box(L+(N?ft:0),V,et+(D?ft:0),D?0:1/J,W,N?0:1/J,Z,{faces:q})}};for(let C=0;C<a;C++)for(let E=0;E<s;E++){let z=C*s+E,D=r[z];if(D==="#"){e.plain.box(E+.5,Le,C+.5,1,0,1,3813194,{faces:te});for(let[q,L]of[[1,0],[-1,0],[0,1],[0,-1]]){if(c(E+q,C+L))continue;let et=u(E+q,C+L),ot=(i?E%2===0&&L!==0:(E+C)%3===0)&&(et||u(E-q,C-L)&&!c(E-q,C-L)),ft=E+.5+q*.5,at=C+.5+L*.5,zt=Tt=>[q?.03:Tt,L?.03:Tt],Zt=q>0?Ge:q<0?ci:L>0?St:he;if(et&&i)w(e.plain,E,C,q,L,0,Le,2766162,2),e.plain.box(ft+q*.01,.62,at+L*.01,q?.02:1,.08,L?.02:1,14267482,{faces:Zt});else if(et)w(e.brick,E,C,q,L,0,Le,16777215,2),e.plain.box(ft+q*.02,0,at+L*.02,...[q?.04:1,.2,L?.04:1].slice(0,1),.2,L?.04:1,9075306,{faces:Zt|te});else{let Tt=M(E+q,C+L);w(e.panel,E,C,q,L,0,.72,Tt.panel,2),w(e.wallpaper,E,C,q,L,.72,.6,Tt.wall,2),w(e.wallpaper,E,C,q,L,1.32,Le-1.32,Tt.wall,2);let[Bt,ee]=zt(1);e.woodfine.box(ft+q*.015,0,at+L*.015,Bt,.13,ee,Eg,{faces:Zt|te}),e.plain.box(ft+q*.02,.7,at+L*.02,q?.04:1,.05,L?.04:1,Cg,{faces:Zt|te|hi}),e.plain.box(ft+q*.02,Le-.1,at+L*.02,q?.04:1,.1,L?.04:1,zc,{faces:Zt|hi})}if(ot){let Tt=et?16183526:16777215;n.def.skyline&&!et?e.skyline.box(ft+q*.006,.82,at+L*.006,q?.01:.62,.62,L?.01:.62,16777215,{faces:Zt}):i&&!et?(L>0?e.trainN:e.trainS).box(ft+q*.006,.82,at+L*.006,.62,.62,.01,16777215,{faces:Zt}):(e.unlit.box(ft+q*.006,.82,at+L*.006,q?.01:.62,.62,L?.01:.62,et?x?3820138:7315138:x?4872842:16769712,{faces:Zt}),e.unlit.box(ft+q*.008,1.14,at+L*.008,q?.01:.62,.3,L?.01:.62,et?x?4872826:9418966:x?6978216:16773584,{faces:Zt})),e.plain.box(ft+q*.02,.76,at+L*.02,q?.06:.78,.06,L?.06:.78,Tt,{faces:63&~hi}),e.plain.box(ft+q*.02,1.44,at+L*.02,q?.05:.74,.05,L?.05:.74,Tt);for(let Bt of[-1,1])e.plain.box(ft+q*.02+(L?Bt*.345:0),.8,at+L*.02+(q?Bt*.345:0),.05,.66,.05,Tt);if(e.plain.box(ft+q*.02,1.11,at+L*.02,q?.04:.62,.035,L?.04:.62,Tt),e.plain.box(ft+q*.02,.8,at+L*.02,q?.04:.035,.64,L?.04:.035,Tt),!et){let Bt=M(E+q,C+L);for(let Ie of[-1,1]){let Ce=L?Ie*.48:0,Qe=q?Ie*.48:0;e.plain.box(ft+q*.06+Ce,.55,at+L*.06+Qe,q?.06:.2,1.2,L?.06:.2,Bt.curtain,{top:ct(Bt.curtain,.8)})}e.plain.box(ft+q*.07,1.68,at+L*.07,q?.03:1.2,.03,L?.03:1.2,11901530);let ee=ft+q*.9,Kt=at+L*.9;e.patch.box(ee+(L?.25:0),.015,Kt+(q?.25:0),q?1:.8,0,L?1:.8,x?7309016:16767392,{faces:te,fit:!0}),v.push({x:ft+q*.6,y:1.1,z:at+L*.6,col:x?[.45,.55,1]:[1,.8,.55],I:x?.6:.95,R:3.6}),p.push([ft+q*.03,at+L*.03,q,L])}}else if(!et&&(E*5+C*3)%7===0){let Tt=(E*7+C*3)%4,Bt=[5913126,13146682,2763574,9067066][(E+C)%4];e.woodfine.box(ft+q*.025,.95,at+L*.025,q?.05:.56,.46,L?.05:.56,Bt,{faces:63}),e.plain.box(ft+q*.035,1,at+L*.035,q?.05:.46,.36,L?.05:.46,16183526,{faces:Zt}),e.pics[Tt].box(ft+q*.042,1.03,at+L*.042,q?.05:.38,.3,L?.05:.38,16777215,{faces:Zt,fit:!0})}}continue}let N=o[z],V=N==="wood"?e.wood:N==="carpet"?e.carpet:N==="tile"?e.tile:N==="grass"?e.grass:C===f?e.concrete:e.asphalt,W=N==="carpet"?n.def.carpet||9346022:16777215,Z=N==="grass"||N==="road"?1:2;for(let q=0;q<Z;q++)for(let L=0;L<Z;L++)V.box(E+(L+.5)/Z,-.05,C+(q+.5)/Z,1/Z,.05,1/Z,W,{faces:te});if(N==="road"&&C===f+1&&E%2===0&&e.plain.box(E+1,-.01,C+1,1.1,.02,.12,15911244,{faces:te}),N!=="grass"&&N!=="road")for(let q=0;q<2;q++)for(let L=0;L<2;L++)e.plaster.box(E+.25+L*.5,Le,C+.25+q*.5,.5,0,.5,16183268,{faces:hi});let J=c(E-1,C)&&c(E+1,C),H=c(E,C-1)&&c(E,C+1);if(J||H){let q=M(E,C);e.plain.box(E+.5,1.55,C+.5,1,Le-1.55,1,q.wall,{faces:J?hi|St|he:hi|Ge|ci}),e.plain.box(E+.5,1.55,C+.5,J?1.04:1.12,.07,J?1.12:1.04,zc,{faces:63&~te});for(let et of[-1,1])e.plain.box(E+.5+(J?et*.48:0),0,C+.5+(H?et*.48:0),J?.07:1.12,1.55,H?.07:1.12,zc,{faces:63&~hi&~te});let L=D==="D"||D==="L"?[]:J?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[et,ot]of L){let ft=J?E+et:E+ot,at=J?C+ot:C+et;if(!c(J?E+et:E,J?C:C+et)||c(ft,at)||u(ft,at))continue;let zt=at*s+ft;if(!n.walk[zt])continue;let Zt=11040588;if(J){let Tt=ot>0?C+1+.04:C-.04,Bt=et>0?E+1+.44:E-.44;e.woodfine.box(Bt,0,Tt,.86,1.5,.05,Zt,{faces:63}),e.plain.box(Bt+et*.32,.72,Tt+ot*.035,.05,.05,.03,14267482,{faces:63});for(let ee of[.15,.85])e.woodfine.box(Bt,ee,Tt+ot*.028,.6,.55,.01,ct(Zt,1.12),{faces:ot>0?St:he})}else{let Tt=ot>0?E+1+.04:E-.04,Bt=et>0?C+1+.44:C-.44;e.woodfine.box(Tt,0,Bt,.05,1.5,.86,Zt,{faces:63}),e.plain.box(Tt+ot*.035,.72,Bt+et*.32,.03,.05,.05,14267482,{faces:63});for(let ee of[.15,.85])e.woodfine.box(Tt+ot*.028,ee,Bt,.01,.55,.6,ct(Zt,1.12),{faces:ot>0?Ge:ci})}break}}}for(let C of n.def.decor||[])if(C.type==="rug"){let[E,z,D,N]=C.rect;e.rug.box(E+D/2,0,z+N/2,D-.2,.02,N-.2,C.color,{faces:te,fit:!0})}for(let C of n.furn)Rg(n,C,e,l,v);for(let C of v)C.pendant&&(e.plain.box(C.x,C.y+.12,C.z,.02,Le-C.y-.12,.02,2763574),e.plain.box(C.x,Le-.02,C.z,.16,.02,.16,16183526),e.plain.box(C.x,C.y+.02,C.z,.46,.12,.46,15260868,{faces:63&~hi}),e.plain.box(C.x,C.y+.14,C.z,.3,.06,.3,14207920),e.unlit.box(C.x,C.y-.04,C.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(C.x,C.y+.021,C.z,.44,.001,.44,16769192,{faces:hi}),m.push(C.x,C.y-.02,C.z));for(let C of v)!C.pendant&&C.I>.8&&C.y<1.2&&C.col[2]<.5&&m.push(C.x,C.y-.05,C.z);if(x)for(let C=-10;C<s+12;C+=6){let E=f+.15;e.plain.box(C,0,E,.12,2.6,.12,2763574),e.plain.box(C,2.55,E+.35,.1,.08,.7,2763574),e.unlit.box(C,2.45,E+.65,.3,.1,.3,16769696,{faces:63}),v.push({x:C,y:2.3,z:E+.7,col:[1,.78,.45],I:1.6,R:5.5,street:!0}),m.push(C,2.42,E+.65)}if(n.roof){let C=n.roof.x+.5,E=n.roof.y+.5;for(let z of[-1,1])e.plain.box(C+z*.22,0,E-.3,.05,Le,.05,9082020);for(let z=0;z<6;z++)e.plain.box(C,.25+z*.28,E-.3,.44,.04,.04,12108496);e.unlit.box(C,Le-.005,E-.1,.7,.01,.7,658456,{faces:hi}),e.plain.box(C,Le-.08,E-.1,.8,.08,.8,6976644,{faces:63&~te&~hi})}let k=Pg(n,v);for(let C of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])Lg(e[C],k);n.light=new Float32Array(s*a*3);for(let C=0;C<a;C++)for(let E=0;E<s;E++){let z=k(E+.5,1,C+.5,0,0,0,!0),D=(C*s+E)*3;n.light[D]=z[0],n.light[D+1]=z[1],n.light[D+2]=z[2]}let P=new Ft,I=(C,E,z=0)=>{if(C.empty)return;let D=new vt(C.build(),E);D.matrixAutoUpdate=!1,D.updateMatrix(),D.renderOrder=z,P.add(D)},O=C=>new Rt({vertexColors:!0,map:C});if(I(e.wood,O(t.wood)),I(e.carpet,O(t.carpet)),I(e.tile,O(t.tile)),I(e.wallpaper,O(t.wallpaper)),I(e.panel,O(t.panel)),I(e.brick,O(t.brick)),I(e.plaster,O(t.plaster)),I(e.grass,O(t.grass)),I(e.asphalt,O(t.asphalt)),I(e.concrete,O(t.concrete)),I(e.plain,O(t.plain)),I(e.woodfine,O(t.woodfine)),I(e.rug,new Rt({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),I(e.unlit,new Rt({vertexColors:!0,toneMapped:!1})),!e.skyline.empty){let C=Ig();C.repeat.set(1,6/.62),C.offset.set(0,-.82/.62),I(e.skyline,new Rt({map:C,toneMapped:!1}))}{let C=kg();e.pics.forEach((E,z)=>I(E,new Rt({vertexColors:!0,map:C[z]})))}if(!e.slotReel.empty){let C=Dg();I(e.slotReel,new Rt({vertexColors:!0,map:C.reel,toneMapped:!1})),I(e.slotSign,new Rt({vertexColors:!0,map:C.sign,toneMapped:!1}))}if(i){let C=Ng(),E=[];for(let[z,D]of[[e.trainN,1],[e.trainS,-1]]){let N=C.clone();N.needsUpdate=!0,N.repeat.set(1,8/.62),N.offset.set(0,-.82/.62);let V=new Rt({map:N,toneMapped:!1});V.userData.sgn=D,E.push(V),I(z,V)}P.userData.trainMats=E}if(I(e.shadow,new Rt({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),I(e.patch,new Rt({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:$e,polygonOffset:!0,polygonOffsetFactor:-3}),2),p.length){let C=[],E=[],z=[];for(let[V,W,Z,J]of p){let H=J?1:0,q=Z?1:0,L=C.length/3,et=[[V-H*.3,1.4,W-q*.3,.16],[V+H*.3,1.4,W+q*.3,.16],[V+Z*1.5+H*.75,.02,W+J*1.5+q*.75,0],[V+Z*1.5-H*.15,.02,W+J*1.5-q*.15,0],[V-H*.3,.82,W-q*.3,.12],[V+H*.3,.82,W+q*.3,.12],[V+Z*.55+H*.55,.02,W+J*.55+q*.55,0],[V+Z*.55-H*.05,.02,W+J*.55-q*.05,0]];for(let ot of et)C.push(ot[0],ot[1],ot[2]),x?E.push(.5,.62,1,ot[3]*.9):E.push(1,.85,.6,ot[3]);z.push(L,L+1,L+2,L,L+2,L+3,L+4,L+5,L+6,L+4,L+6,L+7),z.push(L,L+1,L+5,L,L+5,L+4)}let D=new pe;D.setAttribute("position",new re(new Float32Array(C),3)),D.setAttribute("color",new re(new Float32Array(E),4)),D.setIndex(z);let N=new vt(D,new Rt({vertexColors:!0,transparent:!0,depthWrite:!1,blending:$e,side:Ne}));N.renderOrder=5,P.add(N)}if(m.length){let C=new pe;C.setAttribute("position",new re(new Float32Array(m),3));let E=new $i(C,new ki({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:$e,sizeAttenuation:!0}));E.renderOrder=6,P.add(E)}return P}function yu(){let n=new Me({vertexColors:!0}),t=new Ft,e=new Dt,i=4080992,s=2501178,a=15250234;e.box(0,0,0,.94,1.04,.84,i,{top:4936563}),e.box(0,0,0,.98,.06,.88,s),e.box(0,.98,0,.98,.06,.88,s);for(let l of[-1,1])e.box(l*.47,.06,0,.04,.92,.86,s);e.box(0,.12,.38,.74,.8,.05,987158,{faces:St}),e.box(0,.14,.2,.66,.02,.3,2764350,{faces:te}),e.box(0,.5,.2,.66,.02,.3,2764350,{faces:te});for(let l=0;l<3;l++)e.box(-.18+l*.18,.16,.24,.16,.08,.1,a,{top:16769658,faces:63}),e.box(-.09+l*.18,.24,.24,.16,.08,.1,a,{top:16769658,faces:63});for(let l=0;l<4;l++)e.box(-.2+l*.13,.52,.24,.11,.07+l%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new vt(e.build(),n));let r=new Dt;r.box(.37,.1,.035,.74,.84,.07,5857674,{faces:63}),r.box(.37,.16,.075,.62,.72,.02,4936563,{faces:63}),r.box(.37,.46,.09,.24,.24,.04,a,{faces:63}),r.box(.37,.5,.115,.16,.16,.03,2237487,{faces:63});for(let l=0;l<8;l++){let h=l*Math.PI/4;r.box(.37+Math.cos(h)*.105,.574+Math.sin(h)*.105,.1,.02,.02,.03,16773568,{faces:63})}for(let l of[0,2.1,4.2])r.box(.62+Math.cos(l)*.05,.45+Math.sin(l)*.05,.12,.03,.03,.1,14212842,{faces:63});r.box(.62,.45,.1,.06,.06,.06,14212842,{faces:63});for(let l of[.2,.8])r.box(.03,l,.04,.06,.12,.09,s,{faces:63});let o=new vt(r.build(),n);return o.position.set(-.37,0,.42),t.add(o),{group:t,door:o,mat:n}}function vu(){let n=new Dt,t=5981910,e=16052714,i=15905076,s=2502735,a=14015716,r=1842728;n.box(-.15,.28,0,2.3,.6,1.3,t),n.box(-.15,.88,0,2.3,.5,1.28,e,{top:16777215}),n.box(1.12,.28,0,.5,.52,1.28,t),n.box(1,.8,0,.34,.42,1.24,e,{top:16777215,ry:0}),n.box(1.17,.83,0,.02,.36,1.08,s,{faces:Ge}),n.box(1.18,.86,.3,.025,.28,.04,9085120,{faces:Ge});for(let x of[-1,1])n.box(.88,.88,x*.645,.4,.32,.01,s,{faces:x>0?St:he}),n.box(-.3,.92,x*.645,1.4,.28,.01,s,{faces:x>0?St:he}),n.box(-.15,.56,x*.652,2.3,.1,.01,i,{faces:x>0?St:he}),n.box(.6,.38,x*.652,.06,.04,.012,a,{faces:x>0?St:he}),n.box(1.12,.92,x*.72,.08,.12,.1,2237487);n.box(-.3,.68,.656,1.1,.2,.006,16777215,{faces:St}),n.box(-.3,.68,-.656,1.1,.2,.006,16777215,{faces:he}),n.box(1.38,.32,0,.03,.22,.8,2237487,{faces:Ge});for(let x=0;x<4;x++)n.box(1.39,.35+x*.05,0,.02,.02,.74,a,{faces:Ge});for(let x of[-1,1])n.box(1.385,.36,x*.5,.04,.14,.2,16774064,{faces:Ge}),n.box(-1.31,.42,x*.5,.04,.2,.16,16731486,{faces:ci});n.box(1.42,.16,0,.1,.12,1.34,a),n.box(-1.33,.16,0,.1,.12,1.34,a),n.box(-1.31,.4,0,.02,.88,.02,2237487,{faces:ci}),n.box(-.2,1.38,0,1.6,.04,1,2763574);for(let x of[-1,1])n.box(-.2,1.42,x*.48,1.6,.05,.04,a);n.box(-.4,1.42,0,1.4,.07,.07,14189370,{faces:63}),n.box(.1,1.42,.25,.9,.06,.06,10134446,{faces:63});for(let x of[-.75,.95])for(let d of[-.6,.6])n.box(x,0,d,.54,.54,.24,r,{faces:63}),n.box(x,.14,d+Math.sign(d)*.125,.26,.26,.012,a,{faces:d>0?St:he}),n.box(x,.24,d+Math.sign(d)*.132,.08,.08,.008,5923440,{faces:d>0?St:he}),n.box(x,.5,d,.64,.08,.28,ct(t,.7),{faces:63&~hi});let o=new vt(n.build(),new Me({vertexColors:!0,emissive:1709096})),l=new Ft;l.add(o);let h=document.createElement("canvas");h.width=256,h.height=48;let c=h.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,48),c.fillStyle="#5b46d6",c.font="bold 26px Arial Black, Arial, sans-serif",c.textBaseline="middle",c.fillText("PIPE DREAMS",46,22),c.font="bold 11px Arial, sans-serif",c.fillStyle="#1c1330",c.fillText("24h PLUMBING \xB7 NO QUESTIONS",48,40),c.fillStyle="#f2b134",c.fillRect(8,18,30,8),c.beginPath(),c.arc(36,22,9,0,6.3),c.fill(),c.fillStyle="#ffffff",c.fillRect(36,18,10,8);let u=new wi(h);u.colorSpace=Te;let f=new Rt({map:u});for(let x of[-1,1]){let d=new vt(new mi(1.08,.19),f);d.position.set(-.3,.78,x*.661),x<0&&(d.rotation.y=Math.PI),l.add(d)}return{group:l,body:o}}function _u(){let n=new Dt,t=2237743,e=15905076,i=7321599,s=1316380;n.box(0,0,0,2.2,1,1.1,t,{top:2895932}),n.box(1.25,.1,0,.5,.75,.95,i),n.box(.35,.45,0,1,.36,1.12,i,{faces:St|he}),n.box(0,.32,0,2.22,.1,1.12,e,{faces:Ge|ci|St|he}),n.box(-1.9,.45,0,1.9,.26,.26,t),n.box(-2.8,.45,0,.3,.75,.08,e),n.box(0,1,0,.5,.22,.5,s);for(let u of[-.62,.62])n.box(0,-.42,u,2.2,.07,.08,s,{faces:63}),n.box(.5,-.24,u*.92,.07,.36,.07,s,{faces:63}),n.box(-.5,-.24,u*.92,.07,.36,.07,s,{faces:63});n.box(1.5,-.28,0,.1,.12,.3,16774064);let a=new Ft;a.add(new vt(n.build(),new Me({vertexColors:!0})));let r=new Ft,o=new Rt({color:789778});for(let u=0;u<2;u++){let f=new vt(new le(5.2,.04,.22),o);f.rotation.y=u*Math.PI/2,r.add(f)}r.position.y=1.16,a.add(r);let l=new Ft;l.add(new vt(new le(.04,.9,.12),o),new vt(new le(.04,.12,.9),o)),l.position.set(-2.8,.55,.1),a.add(l);let h=new vt(new Ki(.08,1.6,6,16,1,!0),new Rt({color:16773568,transparent:!0,opacity:.16,blending:$e,depthWrite:!1,side:Ne}));h.position.set(1.5,-3.3,0),a.add(h);let c=new vt(new le(.1,.1,.1),new Rt({color:16722490}));return c.position.set(-2.8,.95,0),a.add(c),a.visible=!1,{group:a,rotor:r,tail:l,beam:h,blink:c}}function bu(){let n=new Dt,t=16054008,e=1842728,i=2502735,s=14015716;n.box(0,.2,0,2.6,.42,1.22,t,{top:16777215}),n.box(1.05,.2,0,.5,.42,1.24,e,{top:2763832}),n.box(-1.1,.2,0,.4,.42,1.24,e,{top:2763832}),n.box(-.1,.62,0,1.4,.36,1.12,t,{top:16777215}),n.box(.61,.66,0,.02,.28,1,i,{faces:Ge}),n.box(-.81,.66,0,.02,.28,1,i,{faces:ci});for(let x of[-1,1])n.box(.15,.66,x*.565,.52,.26,.01,i,{faces:x>0?St:he}),n.box(-.45,.66,x*.565,.48,.26,.01,i,{faces:x>0?St:he}),n.box(-.15,.62,x*.565,.04,.32,.012,t,{faces:x>0?St:he}),n.box(0,.3,x*.616,1.9,.08,.008,3107560,{faces:x>0?St:he}),n.box(.66,.66,x*.62,.06,.1,.1,e);n.box(1.31,.26,0,.03,.14,.7,e,{faces:Ge});for(let x of[-1,1])n.box(1.31,.32,x*.42,.03,.1,.2,16774064,{faces:Ge}),n.box(-1.31,.32,x*.42,.03,.1,.2,16731486,{faces:ci});n.box(1.36,.1,0,.12,.12,1.26,2763832);for(let x=0;x<2;x++)n.box(1.43,.22,(x-.5)*.6,.04,.3,.06,2763832);n.box(-1.33,.12,0,.08,.1,1.24,s);for(let x of[-.8,.8])for(let d of[-.56,.56])n.box(x,0,d,.48,.48,.2,1316382,{faces:63}),n.box(x,.12,d+Math.sign(d)*.105,.24,.24,.01,s,{faces:d>0?St:he});n.box(-.1,.98,0,.5,.06,.9,2763832);let a=new vt(n.build(),new Me({vertexColors:!0,emissive:1315872})),r=new Ft;r.add(a);let o=document.createElement("canvas");o.width=128,o.height=32;let l=o.getContext("2d");l.fillStyle="#f4f6f8",l.fillRect(0,0,128,32),l.fillStyle="#1c1e28",l.font="bold 24px Arial Black, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("POLICE",64,17);let h=new wi(o);h.colorSpace=Te;let c=new Rt({map:h});for(let x of[-1,1]){let d=new vt(new mi(.8,.2),c);d.position.set(.1,.48,x*.618),x<0&&(d.rotation.y=Math.PI),r.add(d)}let u=new vt(new le(.4,.12,.4),new Rt({color:16722490})),f=new vt(new le(.4,.12,.4),new Rt({color:2779903}));return u.position.set(-.1,1.07,.22),f.position.set(-.1,1.07,-.22),r.add(u,f),{group:r,red:u,blue:f}}function Mu(n){let t=new Dt,e=1,i=1.55,s=.16;t.box(0,0,0,n?e:s,i,n?s:e,9082020,{faces:63,top:6976644});for(let o=0;o<6;o++)t.box(0,.08+o*.08,0,n?e+.004:s+.004,.04,n?s+.004:e+.004,o%2?2237487:15911244,{faces:51});t.box(0,.75,0,n?.3:s+.02,.3,n?s+.02:.3,3818066,{faces:63}),t.box(0,1.2,0,n?.5:s+.01,.08,n?s+.01:.5,5923956,{faces:63});let a=new Ft;a.add(new vt(t.build(),new Me({vertexColors:!0})));let r=new vt(new le(n?.12:s+.04,.12,n?s+.04:.12),new Rt({color:16722490}));return r.position.y=.95,a.add(r),{group:a,led:r}}function Su(){let n=new Dt;n.box(0,0,0,.74,.46,.05,9082020,{faces:63,top:10134708}),n.box(0,.05,.026,.62,.36,.01,1053208,{faces:16});for(let i=0;i<5;i++)n.box(0,.08+i*.07,.035,.62,.03,.03,11581636,{faces:63});for(let i of[-.33,.33])for(let s of[.03,.41])n.box(i,s,.03,.03,.03,.01,4870754,{faces:16});let t=new Ft;t.add(new vt(n.build(),new Me({vertexColors:!0})));let e=new Ft;return e.add(t),{group:e,flap:t}}function wu(){let n=new Dt;n.box(0,0,0,.42,.56,.1,6976644,{faces:63,top:8029332}),n.box(0,.06,.051,.36,.44,.01,4870754,{faces:16}),n.box(-.08,.36,.06,.12,.12,.01,15911244,{faces:16}),n.box(-.08,.38,.065,.03,.08,.01,2237487,{faces:16});for(let a=0;a<3;a++)n.box(-.1+a*.1,.12,.065,.06,.12,.03,2237487,{faces:63});let t=new Ft;t.add(new vt(n.build(),new Me({vertexColors:!0})));let e=new Ft,i=new Dt;i.box(0,0,.04,.05,.2,.05,14168890,{faces:63}),i.box(0,.18,.04,.09,.06,.08,2237487,{faces:63}),e.add(new vt(i.build(),new Me({vertexColors:!0}))),e.position.set(.12,.3,.06),t.add(e);let s=new vt(new le(.05,.05,.02),new Rt({color:16722490}));return s.position.set(.12,.5,.06),t.add(s),{group:t,lever:e,led:s}}function Tu(n){let t=n.map(m=>m[0]),e=n.map(m=>m[1]),i=new Set(e).size===1,s=Math.min(...t),a=Math.max(...t)+1,r=Math.min(...e),o=Math.max(...e)+1,l=i?a-s:o-r,h=(s+a)/2,c=(r+o)/2,u=new Dt,f=new Dt;for(let m of[.25,.55,.85,1.15])u.box(h,m,c,i?l:.025,.025,i?.025:l,16724032,{faces:63});for(let m of[-1,1]){let p=i?h+m*(l/2-.05):h,y=i?c:c+m*(l/2-.05);f.box(p,0,y,.1,1.3,.1,3817294,{faces:63,top:16724032});for(let b of[.25,.55,.85,1.15])f.box(p,b-.02,y,.12,.06,.12,16736368,{faces:63})}let x=new Rt({color:16724032,transparent:!0,opacity:.9,depthWrite:!1,blending:$e,toneMapped:!1}),d=new vt(u.build(),x);d.renderOrder=6;let v=new Ft;return v.add(d,new vt(f.build(),new Me({vertexColors:!0}))),{group:v,mat:x,alongX:i,line:i?c:h,lo:i?s:r,hi:i?a:o}}function Au(n){let t=new Dt,e=9067068,i=ct(e,1.15),s=.98,a=.07,r=1.52,o=(h,c,u,f,x,d,v,m)=>n?t.box(h,c,u,f,x,d,v,m):t.box(u,c,h,d,x,f,v,m);o(s/2,0,0,s,r,a,e,{faces:63,top:ct(e,.8)});for(let h of[-1,1])for(let c of[.15,.85])o(s/2,c,h*.036,.62,.55,.01,i,{faces:n?h>0?16:32:h>0?1:2});for(let h of[-1,1])o(s-.14,.72,h*.05,.06,.06,.04,14267482,{faces:63}),o(s-.14,.62,h*.042,.05,.1,.02,3816006,{faces:63});let l=new Ft;return l.add(new vt(t.build(),new Me({vertexColors:!0}))),{group:l,led:null}}function Eu(){let n=new Dt;n.box(0,-.1,0,.34,.22,.03,3111656,{faces:63}),n.box(0,-.06,0,.35,.05,.035,15911244,{faces:63}),n.box(-.09,-.16,0,.1,.06,.036,16777215,{faces:63}),n.box(.12,0,0,.05,.05,.036,2237487,{faces:63});let t=new vt(n.build(),new Rt({vertexColors:!0})),e=new Ft;return e.add(t),e}function Cu(){let n=new Dt;n.box(0,0,0,.32,.42,.06,15262422,{faces:63}),n.box(0,.24,.031,.22,.1,.01,2046511,{faces:16});for(let i=0;i<3;i++)for(let s=0;s<3;s++)n.box(-.07+s*.07,.04+i*.06,.035,.05,.04,.012,10134704,{faces:63});let t=new Ft;t.add(new vt(n.build(),new Me({vertexColors:!0})));let e=new vt(new le(.05,.05,.02),new Rt({color:4054148}));return e.position.set(.11,.36,.035),t.add(e),{group:t,led:e}}function Ru(){let n=new Dt;for(let o=0;o<3;o++){let l=-.12+o*.075,h=(o-1)*.15;n.box(o*.015,l,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:h}),n.box(o*.015,l-.002,0,.09,.075,.245,15983520,{faces:63,ry:h})}let t=new Dt;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new Dt,i=new ha(.17,0);i.scale(1.15,1.2,1.15),e.add(i,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new Dt,a=(o,l,h,c)=>s.box(o,l,0,h,c,.1,14262330,{faces:63,top:15909994});a(0,-.36,.78,.08),a(0,.34,.78,.08),a(-.35,-.3,.08,.66),a(.35,-.3,.08,.66);for(let[o,l]of[[-.35,-.36],[.35,-.36],[-.35,.34],[.35,.34]])s.box(o,l-.01,0,.11,.11,.12,12089892,{faces:63});let r=St|he;return s.box(0,-.28,0,.62,.62,.06,9357552,{faces:r}),s.box(0,.12,0,.62,.22,.062,12181754,{faces:r}),s.box(.17,.12,0,.12,.12,.066,16765503,{faces:r}),s.box(-.06,-.06,0,.3,.18,.064,8030888,{faces:r}),s.box(-.06,.08,0,.14,.08,.066,10136260,{faces:r}),s.box(-.06,.12,0,.08,.05,.068,16777215,{faces:r}),s.box(-.14,-.2,0,.36,.12,.068,5221978,{faces:r}),s.box(.14,-.18,0,.32,.1,.066,6078298,{faces:r}),s.box(0,-.28,0,.62,.1,.07,4165482,{faces:r}),s.box(.12,-.27,0,.2,.04,.072,5941472,{faces:r}),s.box(-.2,-.24,0,.04,.1,.074,8016438,{faces:r}),s.box(-.2,-.16,0,.1,.1,.076,3115583,{faces:r}),s.box(0,-.42,0,.18,.04,.11,15909994,{faces:63}),{cash:n.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var Gc={},Pa=(n,t)=>{if(!Gc[n]){let e=new Dt;t(e),Gc[n]=e.build()}return Gc[n]},It=63,Ug={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},clerk:{skin:14264186,shirt:16052714,pants:3422282,shoe:2760216,belt:2237487,hat:3811874,vest:3422282},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function Vc(n,t,e){for(let s of[-.11,.11])n.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),n.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),n.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),n.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:It,ry:s>0?-.15:.15});n.box(0,.03,.222+.01,.07,.09,.05,ct(t.skin,.88),{faces:It});for(let s of[-.255,.255])n.box(s,.08,0,.03,.1,.08,ct(t.skin,.92),{faces:It})}function Og(n,t){return Pa(n+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:It}),n==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:It});for(let i of[-.11,.11])e.box(i,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(i,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:It}),e.box(0,.22,0,.56,.06,.5,ct(t.hat,.8),{faces:It&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:It})}else if(n==="guard")Vc(e,t,n),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:It}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:It}),e.box(0,.35,-.02,.5,.06,.44,ct(t.hat,1.15),{faces:It}),e.box(0,.2,.29,.5,.04,.2,ct(t.hat,.8),{faces:It}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16});else if(n==="clerk"){Vc(e,t,n),e.box(0,-.12,.225,.12,.03,.02,10115658,{faces:16}),e.box(0,.2,-.02,.53,.14,.47,t.hat,{faces:It}),e.box(-.18,.12,.2,.18,.08,.1,t.hat,{faces:It}),e.box(0,.13,.226,.4,.035,.015,2237487,{faces:16});for(let i of[-.11,.11])e.box(i,.13,.232,.13,.12,.01,2237487,{faces:16})}else Vc(e,t,n),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:It}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:It}),e.box(.14,.42,-.1,.18,.1,.18,ct(t.hat,1.1),{faces:It}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:It}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:It&-5&-9})})}function Wc(n){let t=Ug[n],e=new Me({vertexColors:!0}),i=new Ft,s=new Ft;i.add(s);let a=[],r=(b,g,M=0,S=0,_=0)=>{let w=new vt(b,e);return w.position.set(M,S,_),g.add(w),a.push(w),w},o=Pa(n+"leg",b=>{b.box(0,-.36,0,.18,.36,.21,t.pants,{faces:It}),b.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:It,top:ct(t.shoe,1.3)}),n==="owner"&&b.box(0,-.3,.06,.205,.04,.25,16777215,{faces:It}),n==="guard"&&b.box(0,-.12,0,.185,.02,.215,ct(t.pants,.8),{faces:It&-5&-9})}),l=Pa(n+"torso",b=>{if(b.box(0,.34,0,.5,.45,.3,t.shirt,{faces:It}),n==="guard"){b.box(0,.4,0,.53,.38,.33,t.vest,{faces:It}),b.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),b.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:It}),b.box(.14,.62,.168,.12,.04,.02,16777215,{faces:It}),b.box(.16,.48,.17,.08,.12,.05,2237487,{faces:It}),b.box(.18,.6,.18,.015,.08,.015,2237487,{faces:It}),b.box(0,.33,0,.55,.08,.35,1777195,{faces:It}),b.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let g of[-.2,.2])b.box(g,.3,.1,.09,.1,.1,2763574,{faces:It})}else if(n==="player")b.box(0,.33,0,.52,.08,.32,t.belt,{faces:It}),b.box(0,.42,.155,.3,.14,.02,ct(t.shirt,.8),{faces:16}),b.box(0,.72,-.12,.42,.14,.12,ct(t.shirt,.85),{faces:It});else if(n==="clerk"){b.box(0,.33,0,.52,.06,.32,t.belt,{faces:It}),b.box(0,.42,.156,.07,.34,.015,11745617,{faces:16}),b.box(0,.73,.156,.1,.05,.016,11745617,{faces:16}),b.box(-.13,.62,.157,.12,.06,.01,15911244,{faces:16});for(let g of[-1,1])b.box(g*.07,.72,.155,.1,.07,.015,16777215,{faces:16,ry:g*.3})}else{for(let g=0;g<4;g++)b.box(0,.38+g*.1,0,.51,.035,.31,16777215,{faces:It&-5&-9});for(let g=0;g<3;g++)b.box(0,.42+g*.11,.155,.04,.04,.02,16777215,{faces:16});b.box(0,.74,.14,.3,.06,.04,ct(t.shirt,.85),{faces:It})}}),h=b=>Pa(n+"arm"+b,g=>{g.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:It}),g.box(0,-.37,0,.14,.18,.16,n==="guard"?t.shirt:ct(t.shirt,.95),{faces:It}),g.box(0,-.48,0,.13,.11,.14,n==="player"?2763837:t.skin,{faces:It}),n==="guard"&&g.box(0,-.06,0,.16,.1,.18,t.vest,{faces:It}),n==="guard"&&b==="R"&&(g.box(0,-.66,.06,.07,.24,.07,2763574,{faces:It}),g.box(0,-.73,.06,.095,.08,.095,12831958,{faces:It}),g.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),c=new Ft;c.position.set(-.12,.36,0),s.add(c),r(o,c);let u=new Ft;u.position.set(.12,.36,0),s.add(u),r(o,u),r(l,s);let f=new Ft;f.position.set(-.33,.77,0),s.add(f),r(h("L"),f);let x=new Ft;x.position.set(.33,.77,0),s.add(x),r(h("R"),x);let d=new Ft;d.position.set(0,.84,0),s.add(d),r(Og(n,t),d);let v=null,m=null;if(n==="player"&&(v=new Ft,v.position.set(0,.66,-.16),s.add(v),r(Pa("bag",b=>{b.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:It}),b.box(0,.19,-.18,.14,.1,.14,10779973,{faces:It}),b.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),v)),n==="guard"){let b=new Yn(.75,3.4,14,1,!0);b.translate(0,-1.7,0),m=new vt(b,new Rt({map:Oi().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:$e,side:Ne,fog:!1})),m.position.set(0,-.74,.06),m.renderOrder=6,x.add(m)}let p={player:.76,guard:.72,owner:.78,clerk:.74}[n],y={player:.88,guard:.8,owner:.86,clerk:.84}[n];return n!=="player"&&d.scale.set(.9/p,1,.92/y),m&&m.scale.set(1/p,1/y,1),{kind:n,root:i,body:s,legL:c,legR:u,armL:f,armR:x,head:d,bag:v,beam:m,mat:e,meshes:a,phase:0,sq:1,sqv:0,flash:0,wx:p,wz:y}}function Xc(n,t,e,i){n.phase+=t*(5+9*e);let s=Math.sin(n.phase)*.8*e;n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armOverride||(n.armL.rotation.x=-s*.9,n.armR.rotation.x=n.beam?-1.35+Math.sin(n.phase*.5)*.06*e+Math.sin(i*1.3)*.03:s*.9),n.body.position.y=Math.abs(Math.sin(n.phase))*.07*e+(1-e)*Math.sin(i*2.2)*.012,n.head.rotation.y=n.beam?Math.sin(i*.9)*.15*(1-e):0,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let a=Math.max(.5,n.sq),r=1/Math.sqrt(a);if(n.body.scale.set(r*n.wx,a,r*n.wz),n.flash>0){n.flash-=t;let o=Math.max(0,n.flash)*6;n.mat.emissive.setRGB(o,o,o)}}function qo(n,t,e,i,s){if(!t.light)return;let a=Math.max(0,Math.min(t.W-1,Math.floor(e))),o=(Math.max(0,Math.min(t.H-1,Math.floor(i)))*t.W+a)*3,l=1-Math.exp(-6*s),h=1.55,c=n.mat.color;c.r+=(Math.max(.82,Math.min(1.5,t.light[o]*h))-c.r)*l,c.g+=(Math.max(.78,Math.min(1.5,t.light[o+1]*h))-c.g)*l,c.b+=(Math.max(.78,Math.min(1.5,t.light[o+2]*h))-c.b)*l}var zi=(n,t)=>{n.sq=t,n.sqv=0};function Pu(){let n=new Me({vertexColors:!0}),t=13208138,e=8014374,i=16181976,s=new Ft,a=new Ft;s.add(a);let r=(c,u,f=0,x=0,d=0)=>{let v=new Dt;c(v);let m=new vt(v.build(),n);return m.position.set(f,x,d),u.add(m),m};r(c=>{c.box(0,.3,-.02,.32,.28,.66,t,{faces:It,top:ct(t,1.1)}),c.box(0,.3,.2,.28,.22,.2,i,{faces:It&-5}),c.box(0,.5,.26,.34,.06,.1,14168890,{faces:It}),c.box(0,.44,.32,.06,.07,.03,15911244,{faces:It}),c.box(0,.4,-.1,.33,.12,.3,e,{faces:7})},a);let o=new Ft;o.position.set(0,.58,.34),a.add(o),r(c=>{c.box(0,-.12,0,.3,.26,.28,t,{faces:It}),c.box(0,-.12,.2,.17,.13,.16,i,{faces:It}),c.box(0,-.05,.285,.07,.05,.03,1842470,{faces:It}),c.box(0,-.165,.26,.1,.03,.06,15233146,{faces:It});for(let u of[-1,1])c.box(u*.08,-.01,.141,.06,.06,.02,1842470,{faces:16}),c.box(u*.09,0,.151,.02,.02,.01,16777215,{faces:16}),c.box(u*.17,-.12,-.02,.06,.22,.14,e,{faces:It})},o);let l=[];for(let[c,u]of[[-.1,.2],[.1,.2],[-.1,-.24],[.1,-.24]]){let f=new Ft;f.position.set(c,.3,u),a.add(f),l.push(f),r(x=>{x.box(0,-.3,0,.09,.3,.1,t,{faces:It}),x.box(0,-.3,.015,.1,.05,.13,i,{faces:It})},f)}let h=new Ft;return h.position.set(0,.42,-.34),a.add(h),r(c=>c.box(0,0,-.1,.06,.06,.22,t,{faces:It}),h),h.rotation.x=.7,a.scale.setScalar(1.1),{root:s,body:a,head:o,legs:l,tail:h,mat:n,phase:0,sq:1,sqv:0}}function Lu(n,t,e,i,s){n.phase+=t*(6+12*e);let a=Math.sin(n.phase)*.7*e;n.legs[0].rotation.x=a,n.legs[3].rotation.x=a,n.legs[1].rotation.x=-a,n.legs[2].rotation.x=-a,n.tail.rotation.y=Math.sin(i*(s?26:12))*(s?.4:.7),n.body.position.y=Math.abs(Math.sin(n.phase))*.03*e,n.head.rotation.x=s?-.25+Math.sin(i*18)*.15:Math.sin(i*1.5)*.05,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let r=1.1*Math.max(.6,n.sq);n.body.scale.set(1.1/Math.sqrt(n.sq),r,1.1)}var Oe=n=>n?"ok":"pending",Fg=[{id:"art",text:"Steal the painting",bonus:600,needs:n=>n.totals.art>0,check:n=>Oe(n.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,needs:n=>n.totals.jewel>0,check:n=>Oe(n.got.jewel>=n.totals.jewel)},{id:"gold",text:"Grab every gold bar",bonus:500,needs:n=>n.totals.gold>0,check:n=>Oe(n.got.gold>=n.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:n=>Oe(n.got.cashLoose>=n.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,needs:n=>n.hides.length>0,check:n=>Oe(n.hidFromAlert)},{id:"nodog",text:"Don't get barked at",bonus:600,needs:n=>n.dogs.length>0,check:(n,t)=>n.barkedAt?"fail":t?"ok":"pending"},{id:"disguise",text:"Wear a guard's uniform",bonus:500,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>Oe(n.disguises>0)},{id:"tv",text:"Lure a guard with the TV",bonus:400,needs:n=>n.tvs.length>0,check:n=>Oe(n.tvLures>0)},{id:"vent",text:"Crawl through an air vent",bonus:400,needs:n=>n.vents.length>0,check:n=>Oe(n.ventsUsed>0)},{id:"nolaser",text:"Never trip a laser",bonus:600,needs:n=>n.lasers.length>0,check:(n,t)=>n.lasersTripped>0?"fail":t?"ok":"pending"},{id:"power",text:"Cut the power",bonus:500,needs:n=>!!n.breaker,check:n=>Oe(n.powerOff)},{id:"clerk",text:"Stop a fleeing clerk",bonus:500,needs:n=>n.buttons.length>0,check:n=>Oe(n.clerkStopped)},{id:"smoke",text:"Break a guard's sight with smoke",bonus:500,check:n=>Oe(n.smokeHid)},{id:"cleanpick",text:"Pick a lock without a slip",bonus:500,needs:n=>n.doors.some(t=>t.type==="lock"),check:n=>Oe(n.cleanPick)},{id:"cases",text:"Smash every display case",bonus:900,needs:n=>n.cases.length>0,check:n=>Oe(n.casesSmashed>=n.cases.length)},{id:"radio",text:"Fake a radio check-in",bonus:500,check:n=>Oe(n.radioFaked>0)},{id:"nospot",text:"Never step into a spotlight",bonus:700,needs:n=>n.spots.length>0,check:(n,t)=>n.spotHit?"fail":t?"ok":"pending"},{id:"slot",text:"Distract guards with a slot machine",bonus:500,needs:n=>n.slots.length>0,check:n=>Oe(n.slotLures>0)},{id:"pocket2",text:"Pickpocket 2 guards",bonus:600,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>Oe(n.picks>=2)},{id:"camhit",text:"Knock out a camera with a coin",bonus:500,needs:n=>n.cams.length>0,check:n=>Oe(n.camsHit>0)},{id:"stashrun",text:"Stash heavy loot before cracking the safe",bonus:500,needs:n=>n.totals.gold+n.totals.art>0,check:n=>Oe(n.stashedEarly)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:n=>Oe(n.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:n=>Oe(n.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(n,t)=>n.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(n,t)=>n.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,needs:n=>n.guards.some(t=>t.kind==="owner"),check:(n,t)=>n.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(n,t)=>n.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(n,t)=>n.dashes>0?"fail":t?"ok":"pending"}];function Iu(n=3,t=Math.random,e=null){let i=Fg.filter(a=>!e||!a.needs||a.needs(e)),s=[];for(;s.length<n&&i.length;){let a=i.splice(t()*i.length|0,1)[0];a.tag&&s.some(r=>r.tag===a.tag)||s.push({...a,st:"pending"})}return s}var Ns={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,smoke:2,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,smoke:1,alarm:45,radio:2.6,mult:1,safeAlarm:!0},ironman:{label:"Ironman",range:1.25,speed:1.2,susp:1.6,coins:1,smoke:0,alarm:15,radio:1.2,mult:2.5,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,smoke:1,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},gi=(n,t)=>t==="normal"?n:n+"_"+t;var qc=.3,Yc=3.7,ku=11,Du=.18,zg=.8,Yo=1.02,Bg=3.2,Os=20,Us={cone:16769357,sus:16752412,alert:16726862},La=new Ae,$o=new X,Ei={x:0,y:0},is={x:0,y:0},Ko=(n,t,e)=>n+He(Pe(n,t),-e,e),Nu=Ko,Hg=new En(.36,12).rotateX(-Math.PI/2),Gg=new Rt({color:0,transparent:!0,opacity:.22,depthWrite:!1});function Uu(){let n=new pe,t=new Float32Array((Os+2)*3),e=new Float32Array((Os+2)*4);e.set([1,1,1,.3],0);for(let a=1;a<=Os+1;a++)e.set([1,1,1,.05],a*4);let i=[];for(let a=1;a<=Os;a++)i.push(0,a+1,a);n.setAttribute("position",new re(t,3)),n.setAttribute("color",new re(e,4)),n.setIndex(i);let s=new vt(n,new Rt({color:Us.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ne}));return s.frustumCulled=!1,s.renderOrder=3,s}function Vg(){let n=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new pe;t.setAttribute("position",new re(new Float32Array(n),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new vt(t,new Rt({color:16765503,side:Ne,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function Wg(){let n=new Ft,t=new le(.13,.13,.13),e=new Rt({color:16765503});for(let i=0;i<3;i++){let s=new vt(t,e);n.add(s)}return n.visible=!1,n}var Ou=new Set(["patrol","wait","post"]),Xg=[["Quiet night, huh?","Too quiet."],["Did you hear something?","Just the pipes again."],["Coffee machine's broken again.","This job, I swear..."],["Who has the keycard?","Not me. Ask the boss."],["My feet are killing me.","Two more hours, buddy."],["You watch the game last night?","Don't remind me."],["They say this place is unrobbable.","Yeah, yeah."],["Saw a weird van outside earlier.","Probably the pizza guy."],["Remember the drill if the alarm goes?","Run toward it, right?"],["Is it just me or is it cold in here?","It's you."]],Zo=class{constructor(t){this.app=t,this.root=new Ft,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){this.root.clear();for(let d of this.guards||[])d.badge.remove();this.def=t;let e=this.L=uu(t),i=gu(e);this.root.add(i),this.trainMats=i.userData.trainMats||null,this.clackT=0,this.sway=0,this.safe=yu(),this.prev=null,this.safe.group.position.set(e.safe.x+.5,0,e.safe.y+.5),this.safeScale=t.safeScale||1,this.safe.group.scale.setScalar(this.safeScale);let s=(d,v)=>e.ch[v*e.W+d]==="#";if(this.doors=e.doors.map(d=>{let v=s(d.x-1,d.y)&&s(d.x+1,d.y),m=d.type==="lock"?Au(v):Mu(v);return d.type==="lock"?m.group.position.set(v?d.x+.01:d.x+.5,0,v?d.y+.5:d.y+.01):m.group.position.set(d.x+.5,0,d.y+.5),d.alongX=v,this.root.add(m.group),{...d,m,open:!1,t:0}}),this.lasers=(t.lasers||[]).map(d=>{let v=Tu(d.cells);return this.root.add(v.group),{def:d,...v,on:!0}}),this.breaker=null,t.breaker){let d=t.breaker,v=wu();v.group.position.set(d.x+.5+d.dx*.53,.75,d.y+.5+d.dy*.53),v.group.rotation.y=Math.atan2(d.dx,d.dy),this.root.add(v.group),this.breaker={...v,at:{x:d.x+.5+d.dx*1.15,z:d.y+.5+d.dy*1.15}}}if(this.keyMeshes=e.keys.map(d=>{let v=Eu();return v.position.set(d.x+.5,.8,d.y+.5),this.root.add(v),{...d,m:v}}),this.root.add(this.safe.group),this.police=bu(),this.police.group.visible=!1,this.root.add(this.police.group),this.panel=null,t.panel){let d=t.panel;this.panel=Cu(),this.panel.group.position.set(d.x+.5+d.dx*.53,.85,d.y+.5+d.dy*.53),this.panel.group.rotation.y=Math.atan2(d.dx,d.dy),this.panel.at={x:d.x+.5+d.dx*1.1,z:d.y+.5+d.dy*1.1},this.root.add(this.panel.group)}this.vents=[];for(let d of t.vents||[]){let v=[d.a,d.b].map(([m,p,y,b])=>{let g=Su();return g.group.position.set(m+.5+y*.47,.06,p+.5+b*.47),g.group.rotation.y=Math.atan2(-y,-b),this.root.add(g.group),{...g,cx:m+.5,cz:p+.5,gx:m+.5+y*.5,gz:p+.5+b*.5,out:Math.atan2(-y,-b)}});v[0].other=v[1],v[1].other=v[0],this.vents.push(...v)}this.tvs=e.furn.filter(d=>d.type==="tv").map(d=>{let v=mu(e,d),m=Math.atan2(-v[0],-v[1]),p=v[0]?d.d:d.w,y=v[0]?d.w:d.d,b=d.x0+d.w/2,g=d.y0+d.d/2,M=new vt(new mi(p-.52,.8),new Rt({color:10473727,toneMapped:!1}));M.position.set(b+v[0]*.15,1.07,g+v[1]*.15),M.rotation.y=m;let S=new vt(new mi(3.2,2.2),new Rt({map:Oi().glow,color:7317759,transparent:!0,opacity:.5,depthWrite:!1,blending:$e,fog:!1}));return S.position.set(b-v[0]*.7,.03,g-v[1]*.7),S.rotation.x=-Math.PI/2,M.visible=S.visible=!1,this.root.add(M,S),{scr:M,glow:S,cx:b,cz:g,fx:b-v[0]*(y/2+.9),fz:g-v[1]*(y/2+.9),on:!1,used:!1,t:0,flick:0,babble:0}}),this.heli=t.heli?_u():null,this.heli&&this.root.add(this.heli.group),this.van=vu(),this.root.add(this.van.group);let a=Ru(),r=pu();this.lootMeshes={};let o={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let d of e.loot)o[d.type]++;for(let d in a){let v=new qn(a[d],r,Math.max(1,o[d]));v.frustumCulled=!1,v.count=0,this.lootMeshes[d]=v,this.root.add(v)}let l=Wc("player");l.root.rotation.order="YXZ",this.root.add(l.root),this.player={c:l,shadow:this.addShadow()},this.guards=[];let h=(d,v)=>{let m=Wc(d);m.root.rotation.order="YXZ",this.root.add(m.root);let p=Uu();this.root.add(p);let y=Wg();this.root.add(y);let b=document.createElement("div");b.className="badge",b.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(b);let g={kind:d,def:v,c:m,cone:p,stars:y,badge:b,shadow:this.addShadow()};return d==="guard"&&(g.walletMesh=new vt(new le(.13,.09,.035),new Rt({color:6962978})),g.walletMesh.position.set(.12,.34,-.17),g.keyMesh=new vt(new le(.1,.07,.02),new Rt({color:3111656})),g.keyMesh.position.set(-.13,.36,-.17),m.body.add(g.walletMesh,g.keyMesh)),this.guards.push(g),g};for(let d of t.guards)h("guard",d);this.buttons=[];for(let d of t.clerks||[]){let v=h("clerk",d),m=d.button,p=new vt(new le(.2,.26,.06),new Rt({color:14212582})),y=new vt(new le(.11,.11,.05),new Rt({color:16722490}));y.position.z=.04,p.add(y),p.position.set(m.x+.5+m.dx*.53,1.05,m.y+.5+m.dy*.53),p.rotation.y=Math.atan2(-m.dx,-m.dy),this.root.add(p),v.button={x:m.x+.5+m.dx*.15,z:m.y+.5+m.dy*.15,btn:y},this.buttons.push(v.button)}if(t.owner){let d=t.owner;h("owner",{path:d.patrol,wait:1.2,speed:d.speed,loop:!0,owner:d})}{let d=e.W,v=new Uint8Array(d*e.H),m=[e.start.y*d+e.start.x];for(v[m[0]]=1,this.entrance={x:e.start.x,y:e.start.y};m.length;){let p=m.shift(),y=p%d,b=p/d|0;if(!e.outdoor[p]&&e.walk[p]){this.entrance={x:y,y:b};break}for(let[g,M]of[[0,-1],[1,0],[-1,0],[0,1]]){let S=(b+M)*d+y+g;y+g>=0&&b+M>=0&&y+g<d&&b+M<e.H&&!v[S]&&e.walk[S]&&(v[S]=1,m.push(S))}}this.reserve=[];for(let p=0;p<2;p++){let y=this.entrance,b=h("guard",{roam:[1,1,e.W-2,e.H-2],path:[[y.x,y.y],[y.x,y.y]],wait:1.3,speed:1.7,reinforce:!0});this.guards.pop(),this.reserve.push(b)}}this.dogs=(t.dogs||[]).map(d=>{let v=Pu();return this.root.add(v.root),{def:d,m:v,shadow:this.addShadow()}}),this.cams=(t.cameras||[]).map(d=>{let v=Uu();this.root.add(v);let m=new Ft,p=new Dt;p.box(0,.36,0,.26,.04,.26,14672872,{faces:63}),p.box(0,-.06,0,.05,.42,.05,10134446,{faces:63}),m.add(new vt(p.build(),new Me({vertexColors:!0}))),m.position.set(d.pos[0],Le-.4,d.pos[1]),this.root.add(m);let y=new Dt;y.box(0,-.06,-.04,.2,.15,.36,15922422,{faces:63,top:16777215}),y.box(0,.09,0,.24,.025,.44,2763574,{faces:63}),y.box(0,-.075,.15,.15,.13,.03,2763574,{faces:63}),y.box(0,-.06,-.06,.04,.12,.04,10134446,{faces:63});let b=new vt(y.build(),new Me({vertexColors:!0})),g=new vt(new le(.09,.08,.03),new Rt({color:16726862}));g.position.set(0,-.075,.17),b.add(g);let M=new vt(new le(.05,.045,.012),new Rt({color:16777215,transparent:!0,opacity:.45}));return M.position.set(-.015,-.06,.188),b.add(M),b.position.set(d.pos[0],Le-.56,d.pos[1]),this.root.add(b),{def:d,cone:v,mesh:b,lens:g}}),this.exitRing=new vt(new Ts(.62,.9,28).rotateX(-Math.PI/2),new Rt({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new vt(new Ki(.85,.85,2.4,20,1,!0),new Rt({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:Ne})),this.exitRing.position.set(e.exit.x,.03,e.exit.z),this.exitBeam.position.set(e.exit.x,1.2,e.exit.z),this.root.add(this.exitRing,this.exitBeam);let c=new Ki(.065,.065,.022,14);c.rotateX(Math.PI/2);let u=new Ki(.045,.045,.026,12);u.rotateX(Math.PI/2),this.coinMeshes=[];for(let d=0;d<6;d++){let v=new vt(c,new Rt({color:15246624}));v.add(new vt(u,new Rt({color:16766810}))),v.visible=!1,this.root.add(v),this.coinMeshes.push(v)}this.hides=e.furn.filter(d=>d.type==="wardrobe").map(d=>{let v=d.x0+.5,m=d.y0+.5;for(let[p,y]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(d.x0+p,d.y0+y))return{cx:v,cz:m,ex:v+p*.95,ez:m+y*.95,face:Math.atan2(p,y)};return null}).filter(Boolean),this.smokeFx=[];for(let d=0;d<2;d++){let m=new pe;m.setAttribute("position",new re(new Float32Array(138),3));let p=new $i(m,new ki({map:Oi().glow,size:1.5,color:14275810,transparent:!0,opacity:0,depthWrite:!1}));p.frustumCulled=!1,p.renderOrder=8,p.visible=!1;let y=new Float32Array(184);for(let b=0;b<46;b++){let g=Math.random()*6.28,M=Math.sqrt(Math.random());y.set([Math.cos(g)*M,Math.random(),Math.sin(g)*M,Math.random()*6.28],b*4)}this.root.add(p),this.smokeFx.push({pts:p,geo:m,off:y,N:46})}this.arrow=Vg(),this.root.add(this.arrow),this.noiseRings=[];let f=new Ts(.9,1,32).rotateX(-Math.PI/2);for(let d=0;d<4;d++){let v=new vt(f,new Rt({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));v.visible=!1,v.renderOrder=4,this.root.add(v),this.noiseRings.push({m:v,t:1,r:1})}let x=t.values;this.cases=e.furn.filter(d=>d.type==="case").map(d=>{let v=d.x0+d.w/2,m=d.y0+d.d/2,p=new vt(new le(d.w-.12,.46,d.d-.12),new Rt({color:12576511,transparent:!0,opacity:.28,depthWrite:!1}));p.position.set(v,1.05,m),p.renderOrder=5;let y=new Ft,b=[5037311,16732026,8191898,16766810,13073919];for(let g=0;g<5;g++){let M=new vt(new le(.09,.09,.09),new Rt({color:b[(g+d.x0)%5]}));M.position.set(v+(g%3-1)*(d.w*.25),.88,m+((g/3|0)-.5)*(d.d*.3)),M.rotation.set(.6,g,.6),y.add(M)}return this.root.add(p,y),{f:d,cx:v,cz:m,glass:p,gems:y,smashed:!1,prog:0}}),this.caseLoot=t.caseLoot||0,this.slots=e.furn.filter(d=>d.type==="slots").map(d=>{let v=d.x0+d.w/2,m=d.y0+d.d/2,p=d.y0<e.H/2?1:-1,y=new vt(new le(d.w-.2,.08,.08),new Rt({color:16766810,toneMapped:!1}));return y.position.set(v,1.66,m+p*.22),y.visible=!1,this.root.add(y),{f:d,cx:v,cz:m,face:p,top:y,used:!1,prog:0,t:0}}),this.spots=(t.spots||[]).map(d=>{let v=new vt(new En(d.r,28).rotateX(-Math.PI/2),new Rt({map:Oi().glow,color:16773296,transparent:!0,opacity:.85,depthWrite:!1,blending:$e,toneMapped:!1}));v.renderOrder=4;let m=new vt(new Yn(d.r*.95,Le,20,1,!0),new Rt({color:16773296,transparent:!0,opacity:.09,depthWrite:!1,blending:$e,side:Ne,toneMapped:!1}));m.rotation.x=Math.PI,m.renderOrder=5;let p=new vt(new le(.3,.16,.3),new Rt({color:2763574})),y=new vt(new le(.2,.02,.2),new Rt({color:16774864}));y.position.y=-.09,p.add(y),this.root.add(v,m,p);let[b,g]=d.path;return{def:d,pool:v,cone:m,fix:p,ax:b[0]+.5,az:b[1]+.5,bx:g[0]+.5,bz:g[1]+.5,len:Math.hypot(g[0]-b[0],g[1]-b[1]),susp:0,cool:0,x:0,z:0,tickT:0}}),this.policeLane=e.van?{x:e.exit.x,z:e.exit.z+2.5}:{x:e.start.x+.5,z:e.start.y+1.5},this.baseLootTotal=x.stash+x.bundle*x.bundles+e.loot.reduce((d,v)=>d+x[v.type],0)+this.cases.length*this.caseLoot*x.jewel+this.slots.length*x.cash,this.lootTotal=this.baseLootTotal,this.reset()}addShadow(){let t=new vt(Hg,Gg);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasKey=!1,this.objText="",this.crackNoiseT=0;for(let a of this.buttons||[])a.btn.material.color.setHex(16722490);this.powerOff=!1,this.breakProg=0,this.lasersTripped=0,this.breaker&&(this.breaker.lever.rotation.x=0,this.breaker.led.material.color.setHex(16722490));for(let a of this.lasers||[])a.group.visible=!0;this.spotHit=!1;for(let a of this.spots||[])a.susp=0,a.cool=0,a.pool.visible=a.cone.visible=!0;for(let a of this.doors||[]){let r=a.y*this.L.W+a.x;a.open=!1,a.t=0,this.L.walk[r]=0,this.L.opaque[r]=1,a.m.group.position.y=0,a.m.group.rotation.y=0,a.m.group.visible=!0,a.m.led&&a.m.led.material.color.setHex(16722490),this.picking=null,this.cleanPick=!1,this.app.onPick&&this.app.onPick(null)}for(let a of this.keyMeshes||[])a.m.visible=!0;this.app.onKey&&this.app.onKey(!1),this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.slowT=0,this.fovPunch=0,this.kickP=0,this.kickR=0,this.daily=this.app.mode==="daily"?this.app.daily:null,this.tut=this.app.mode==="tutorial",this.D=this.daily||this.tut?Ns.normal:Ns[this.app.diff]||Ns.normal,this.lookTotal=0,this.lootTotal=this.baseLootTotal,this.gear=this.app.gearMods?this.app.gearMods(!this.tut&&!this.daily&&this.D.label!=="Ironman"):{coins:0,smoke:0,sneak:1,pickW:1,crack:1,disguise:0},this.smokesLeft=this.D.smoke+this.gear.smoke,this.clouds=[],this.smokeHid=!1;for(let a of this.smokeFx||[])a.pts.visible=!1;this.coinsLeft=this.D.coins+this.gear.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.clerkStopped=!1,this.hidesUsed=0,this.smokesUsed=0,this.coinsThrown=0,this.radioFaked=0,this.trail=[],this.trailT=0,this.marks=[],this.heavy=[],this.stashRuns=0,this.stashedEarly=!1,this.app.onWeight&&this.app.onWeight(1),this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let a of this.L.loot)this.totals[a.type]++;this.contracts=this.tut?[]:Iu(3,this.daily?Ai(this.daily.seed):Math.random,this),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let a of this.coinMeshes||[])a.visible=!1;let i=this.player;Object.assign(i,{x:t.start.x+.5,z:t.start.y+.5,okX:void 0,okZ:void 0,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,crouch:!1,crouchK:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),i.c.root.visible=!0,i.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let a of this.guards||[])a.knowsHide=!1;zi(i.c,1);for(let a of this.reserve||[]){let r=this.guards.indexOf(a);r>=0&&this.guards.splice(r,1),a.c.root.visible=!1,a.cone.visible=!1,a.shadow.visible=!1,a.stars.visible=!1,a.badge.className="badge"}this.shiftN=0,this.shiftWarn=0,this.chatT=6+Math.random()*6,this.chatQ=null,this.chatI=Math.floor(Math.random()*20),this.boltT=8+Math.random()*8,this.thunderIn=0,this.thunderT=0,this.heli&&(this.heli.group.visible=!1);for(let a of this.vents||[])a.flap.rotation.x=0;for(let a of this.tvs||[])a.on=a.used=!1,a.scr.visible=a.glow.visible=!1;this.tvLures=0,this.photoFinish=!1,this.closeCalls=0,this.koStreak=0,this.maxKoStreak=0,this.lastKo=-99;for(let a of this.guards)a.peak=0;this.disguiseT=this.def.startDisguise&&!this.tut?this.def.startDisguise:0,this.disguises=0,this.uniformProg=0;for(let a of this.guards)a.stripped=!1;this.ventsUsed=0,this.player.venting=null;for(let a of this.guards)this.resetGuard(a);this.picks=0,this.pocketProg=0,this.koHold=0,this.koTarget=null;let s=!!(this.keyMeshes&&this.keyMeshes.length);for(let a of this.guards)a.wallet=a.kind==="guard"?150+(Math.random()*6|0)*50:0,a.spareKey=!1,s&&a.kind==="guard"&&a.def.path&&!a.def.roam&&(a.spareKey=!0,s=!1),a.walletMesh&&(a.walletMesh.visible=a.wallet>0,a.keyMesh.visible=a.spareKey),this.lootTotal+=a.wallet;this.crumbs=[],this.crumbT=0,this.barkedAt=!1;for(let a of this.dogs){let r=a.def.path[0];Object.assign(a,{x:r[0]+.5,z:r[1]+.5,wp:1%a.def.path.length,state:"roam",t:0,barkT:0,sniffT:0,ci:0,lostT:0,nav:[],navGoal:-1,navT:0,face:0,moving:0,tx:0,tz:0,waitT:0,smellT:0,mul:1})}for(let a of this.cams)Object.assign(a,{susp:0,cool:0,face:a.def.face,off:0}),a.cone.visible=!0,a.mesh.rotation.x=0;this.camsHit=0,this.loot=t.loot.map((a,r)=>({type:a.type,x:a.x+.5,y:.45,z:a.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[a.type],ph:r*1.7,ms:0,s:1,rot:r})),this.safe.door.rotation.y=0,this.van.group.visible=!!t.van,t.van&&this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.casesSmashed=0,this.slotLures=0;for(let a of this.slots||[])a.used=!1,a.prog=0,a.t=0,a.top.visible=!1;for(let a of this.cases||[])a.smashed=!1,a.prog=0,a.glass.visible=!0,a.gems.visible=!0;this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let a of this.noiseRings)a.m.visible=!1,a.t=1;if(this.app.particles.clear(),this.app.floaters.clear(),this.daily&&this.daily.mutator.apply(this),this.tut)for(let a of this.guards)a.range*=.85,a.speed*=.9}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1,sawCase:!1,...t.kind==="clerk"?{range:4.6*this.D.range,fov:1.5}:{}}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let i=e.owner.bed;t.x=i[0]+i[2]/2,t.z=i[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let i=e.path[t.wp];t.face=Math.atan2(i[0]+.5-t.x,i[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let i=this.L;return t>=0&&e>=0&&t<i.W&&e<i.H&&i.walk[e*i.W+t]===1}opaqueAt(t,e){let i=this.L;return t<0||e<0||t>=i.W||e>=i.H||i.opaque[e*i.W+t]===1}rayLen(t,e,i,s){let a=Math.sin(i),r=Math.cos(i);for(let o=.1;o<s;o+=.1)if(this.opaqueAt(Math.floor(t+a*o),Math.floor(e+r*o)))return o-.05;return s}los(t,e,i,s){let a=i-t,r=s-e,o=Math.ceil(Math.hypot(a,r)/.12);for(let l=1;l<o;l++){let h=l/o;if(this.opaqueAt(Math.floor(t+a*h),Math.floor(e+r*h)))return!1}return!0}clearLine(t,e,i,s){let a=i-t,r=s-e,o=Math.hypot(a,r);if(o<.01)return!0;let l=-r/o*.28,h=a/o*.28,c=Math.ceil(o/.25);for(let u=1;u<=c;u++){let f=u/c,x=t+a*f,d=e+r*f;if(!this.walkable(Math.floor(x),Math.floor(d))||!this.walkable(Math.floor(x+l),Math.floor(d+h))||!this.walkable(Math.floor(x-l),Math.floor(d-h)))return!1}return!0}collide(t,e){let i=Math.floor(t.x),s=Math.floor(t.z);for(let a=s-1;a<=s+1;a++)for(let r=i-1;r<=i+1;r++){if(this.walkable(r,a))continue;let o=He(t.x,r,r+1),l=He(t.z,a,a+1),h=t.x-o,c=t.z-l,u=h*h+c*c;if(!(u>=e*e))if(u>1e-9){let f=Math.sqrt(u);t.x+=h/f*(e-f),t.z+=c/f*(e-f)}else{let f=t.x-r,x=r+1-t.x,d=t.z-a,v=a+1-t.z,m=Math.min(f,x,d,v);m===f?t.x=r-e:m===x?t.x=r+1+e:m===d?t.z=a-e:t.z=a+1+e}}}moveEnt(t,e,i,s){let a=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(i))/.15));for(let r=0;r<a;r++)t.x+=e/a,t.z+=i/a,this.collide(t,s)}path(t,e,i,s){let{W:a,H:r,walk:o}=this.L,l=a*r;this.prev||(this.prev=new Int32Array(l),this.q=new Int32Array(l));let h=this.prev,c=this.q;if(i<0||s<0||i>=a||s>=r)return[];h.fill(-1);let u=e*a+t,f=s*a+i,x=0,d=0;for(c[d++]=u,h[u]=u;x<d;){let m=c[x++];if(m===f)break;let p=m%a,y=m/a|0;for(let b=-1;b<=1;b++)for(let g=-1;g<=1;g++){if(!g&&!b)continue;let M=p+g,S=y+b;if(M<0||S<0||M>=a||S>=r)continue;let _=S*a+M;!o[_]||h[_]!==-1||g&&b&&(!o[y*a+M]||!o[S*a+p])||(h[_]=m,c[d++]=_)}}if(h[f]===-1)return[];let v=[];for(let m=f;m!==u;m=h[m])v.push(m);return v.reverse()}navTo(t,e,i,s,a){let r=this.L.W,o=Math.floor(i)*r+Math.floor(e);(o!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(i)),t.navGoal=o,t.navT=.5),t.navT-=a;let l=t.nav,h=e,c=i;if(l.length>1){let m=Math.min(l.length-1,6),p=0;for(let y=m;y>=1;y--){let b=l[y]%r+.5,g=(l[y]/r|0)+.5;if(this.clearLine(t.x,t.z,y===l.length-1?e:b,y===l.length-1?i:g)){p=y;break}}p===l.length-1?(h=e,c=i):(h=l[p]%r+.5,c=(l[p]/r|0)+.5),p>0?l.splice(0,p):Math.hypot(h-t.x,c-t.z)<.3&&l.shift()}let u=h-t.x,f=c-t.z,x=Math.hypot(u,f);if(Math.hypot(e-t.x,i-t.z)<.12)return!0;let v=Math.min(x,s*a);return x>.001&&(this.moveEnt(t,u/x*v,f/x*v,.28),t.face=Ko(t.face,Math.atan2(u,f),8*a)),t.moving=1,!1}update(t,e){let i=t;this.trainMats&&this.updateTrain(t,e),this.hitstop>0?(this.hitstop-=t,i*=.08):this.slowT>0&&(this.slowT-=t,i*=this.slowK+(1-this.slowK)*He(1-this.slowT/.15,0,1)),this.fovPunch=Ee(this.fovPunch||0,0,6,t),this.kickP=Ee(this.kickP||0,0,9,t),this.kickR=Ee(this.kickR||0,0,7,t),this.t+=i;let s=!e&&this.state==="play";if(s){this.time+=i,this.updatePlayer(i);let o=this.app.mode==="tutorial"||this.daily||this.D.label==="Easy"||this.def.noShift?[]:this.D.mult>=1.5?[45,90]:[60,120];if(this.shiftWarn===this.shiftN&&this.shiftN<o.length&&this.time>=o[this.shiftN]-10&&(this.shiftWarn++,this.app.audio.play("radio"),this.app.announce('\u{1F4FB} "Relief guard arriving in 10 seconds" \u2014 grab what you can!')),this.def.rain&&this.updateStorm(t),this.disguiseT>0&&(this.disguiseT-=i,this.app.onDisguise(Math.max(0,this.disguiseT)),this.disguiseT<=0&&(this.app.audio.play("lost"),this.app.floaters.spawn("Disguise worn off",this.player.x,1.6,this.player.z,"warn",1.2))),this.tvs.length&&this.updateTVs(i),this.shiftN<o.length&&this.time>=o[this.shiftN]&&this.reserve[this.shiftN]&&this.callReinforcement(this.reserve[this.shiftN++]),this.trailT-=i,this.trailT<=0){this.trailT=.35;let l=this.alarm||this.guards.some(h=>h.state==="alert"||h.state==="flee"||h.susp>.35);this.trail.push([this.player.x,this.player.z,l?1:0]),this.trail.length>900&&this.trail.splice(0,2)}}else e&&(this.player.c.root.visible=!1);let a=0;for(let o of this.guards)o.moving=0,this.updateGuard(o,i,s),(o.state==="alert"||o.state==="flee")&&a++,this.syncGuard(o,i);s&&this.updateChatter(i);for(let o of this.cams)this.updateCam(o,i,s);for(let o of this.dogs)this.updateDog(o,i,s);let r=0;for(let o of this.guards)(o.susp>.3||o.state==="investigate"||o.state==="search")&&r++;this.tension=this.alarm?3:a>0?2:r>0?1:0,this.updateAlarm(i,s),this.updateLasers(i,s),this.updateSpots(i,s),this.updateSlots(i),this.updateLoot(i,s),this.updateProps(i),e||this.syncPlayer(i),this.updateNoiseRings(i),this.updateCoins(i,s),this.updateSmoke(i),this.state==="escape"&&this.updateEscape(i),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,i=this.app,s=i.input;s.move(Ei),s.consumeLook(is);let a=i.sens||.0024;if(e.lookX=is.x,e.lookY=is.y,e.yaw-=is.x*a,this.lookTotal+=Math.abs(is.x*a)+Math.abs(is.y*a),e.pitch=He(e.pitch-is.y*a*(i.invertY?-1:1),-1.25,1.2),e.face=e.yaw+Math.PI,e.hiding){this.updateHiding(t,s);return}if(e.venting){this.updateVent(t,s);return}if(this.picking){this.updatePicking(t,s);return}let r=Math.sin(e.face),o=Math.cos(e.face),l=-o,h=r,c=l*Ei.x-r*Ei.y,u=h*Ei.x-o*Ei.y;e.strafe=Ei.x;let f=this.lootGot/this.lootTotal;s.consumeCrouch()&&(e.crouch=!e.crouch,i.onCrouch(e.crouch),i.hintDone("sneak")),e.dashT>0&&e.crouch&&(e.crouch=!1,i.onCrouch(!1)),e.crouchK=Ee(e.crouchK||0,e.crouch?1:0,10,t);let x=Yc*(1-.1*f)*(e.crouch?.5*this.gear.sneak:1)*this.weightMul();if(e.vx=Ee(e.vx,c*x,14,t),e.vz=Ee(e.vz,u*x,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let H=c,q=u;Math.abs(H)+Math.abs(q)<.01&&(H=r,q=o);let L=Math.hypot(H,q);H/=L,q/=L,e.dashT=Du,e.dashCd=zg,e.ddx=H,e.ddz=q,this.dashes++,this.lastDash=this.time,i.audio.play("dash"),i.shake.add(.18),zi(e.c,.7),i.particles.burst(e.x,.1,e.z,{count:8,colors:[16777215,14673646],speed:2,up:1.5,size:.16,gravity:2,life:.5}),this.makeNoise(e.x,e.z,4.2,null),i.hintDone("dash")}let d=e.vx,v=e.vz;if(e.dashT>0){e.dashT-=t;let H=Math.max(0,e.dashT/Du);d+=e.ddx*ku*H,v+=e.ddz*ku*H,Math.random()<.6&&i.particles.burst(e.x,.15,e.z,{count:1,colors:[16777215],speed:.5,up:.5,size:.12,gravity:0,life:.35})}this.moveEnt(e,d*t,v*t,qc),this.crumbT-=t,this.crumbT<=0&&Math.hypot(e.vx,e.vz)>.5&&(this.crumbT=.4,this.crumbs.push({x:e.x,z:e.z,t:this.time}),this.crumbs.length>60&&this.crumbs.shift());for(let H of this.dogs){let q=e.x-H.x,L=e.z-H.z,et=Math.hypot(q,L);et<.5&&et>.001&&this.moveEnt(e,q/et*(.5-et),L/et*(.5-et),qc)}for(let H of this.guards){if(H.state==="sleep")continue;let q=e.x-H.x,L=e.z-H.z,et=Math.hypot(q,L);et<.55&&et>.001&&this.moveEnt(e,q/et*(.55-et),L/et*(.55-et),qc)}this.walkable(Math.floor(e.x),Math.floor(e.z))?(e.okX=e.x,e.okZ=e.z):e.okX!==void 0&&(e.x=e.okX,e.z=e.okZ,e.vx=e.vz=0);let m=Math.hypot(d,v);e.moving=Math.min(1,m/Yc);let p=Math.floor(e.bob/Math.PI);if(e.bob+=Math.min(m,Yc)*t*2.6,Math.floor(e.bob/Math.PI)!==p){let H=this.L,q=He(Math.floor(e.x),0,H.W-1),L=He(Math.floor(e.z),0,H.H-1);i.audio.stepSound(H.floor[L*H.W+q],e.dashT>0?1.6:e.crouch?.35:1)}m>.5&&i.hintDone("move");let y=this.L.safe.x+.5,b=this.L.safe.y+.5,g=!this.safeOpen&&Math.hypot(e.x-y,e.z-b)<1.45+(this.safeScale-1)*.8&&Math.abs(Pe(e.face,Math.atan2(y-e.x,b-e.z)))<1.1,M=null,S=9;for(let H of this.guards){if(!this.canKO(H))continue;let q=Math.hypot(e.x-H.x,e.z-H.z);if(!(e.dashT<=0&&Math.abs(Pe(e.face,Math.atan2(H.x-e.x,H.z-e.z)))>.9)&&(q<S&&(S=q,M=H),e.dashT>0&&q<.95)){this.knockout(H),M=null;break}}let _=s.consumeAct();e.crack=!1;for(let H of this.keyMeshes)H.m.visible&&(H.m.rotation.y=this.t*2,H.m.position.y=.8+Math.sin(this.t*3)*.06,Math.hypot(e.x-(H.x+.5),e.z-(H.y+.5))<.85&&(H.m.visible=!1,this.hasKey=!0,i.audio.play("gold"),i.onKey(!0),i.hint("door"),i.floaters.spawn("KEYCARD!",H.x+.5,1.3,H.y+.5,"big",1.2),i.particles.burst(H.x+.5,.8,H.y+.5,{count:12,colors:[3111656,16777215,15911244],speed:2,up:2,size:.04,life:.6})));let w=null;for(let H of this.doors){if(H.open)continue;let q=H.x+.5,L=H.y+.5;Math.hypot(e.x-q,e.z-L)<1.5&&Math.abs(Pe(e.face,Math.atan2(q-e.x,L-e.z)))<1&&(w=H)}let k=null;for(let H of this.slots){if(H.used)continue;let q=H.cz+H.face*.9;Math.abs(e.z-q)<.9&&Math.abs(e.x-H.cx)<H.f.w/2+.3&&(k=H)}for(let H of this.slots)H!==k&&(H.prog=Math.max(0,H.prog-t*2));k&&(i.hint("slot"),s.act&&(k.prog+=t/.5,e.crack=!0,k.prog>=1&&this.pullSlot(k)));let P=null;for(let H of this.cases){if(H.smashed)continue;Math.hypot(e.x-H.cx,e.z-H.cz)<1.3+Math.max(H.f.w,H.f.d)*.35&&Math.abs(Pe(e.face,Math.atan2(H.cx-e.x,H.cz-e.z)))<1&&(P=H)}for(let H of this.cases)H!==P&&(H.prog=Math.max(0,H.prog-t*2));P&&(i.hint("case"),s.act&&(P.prog+=t/.55,e.crack=!0,P.prog>=1&&this.smashCase(P)));let I=!1;if(this.breaker&&!this.powerOff){let H=this.breaker.at,q=this.breaker.group.position;I=Math.hypot(e.x-H.x,e.z-H.z)<1&&Math.abs(Pe(e.face,Math.atan2(q.x-e.x,q.z-e.z)))<1,I&&s.act?(this.breakProg+=t/1.2,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.15,i.audio.play("tick",this.breakProg*.5),i.particles.burst(q.x,q.y+.3,q.z,{count:2,colors:[16773544,8378623],speed:2,up:1.5,size:.03,life:.3})),this.breakProg>=1&&this.cutPower()):this.breakProg=Math.max(0,this.breakProg-t)}let O=!1,C=this.nearHide();if(this.alarm&&this.panel){let H=this.panel.at,q=this.panel.group.position;O=Math.hypot(e.x-H.x,e.z-H.z)<1&&Math.abs(Pe(e.face,Math.atan2(q.x-e.x,q.z-e.z)))<1,O&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,i.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}g?(i.hint("safe"),s.act?(this.safeProg+=t*this.gear.crack/(this.def.crackTime||1.4),this.def.crackNoise&&(this.crackNoiseT-=t,this.crackNoiseT<=0&&(this.crackNoiseT=1.1,this.makeNoise(y,b,this.def.crackNoise,null),i.hint("drill"))),this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,i.audio.play("tick",this.safeProg),i.particles.burst(y,.7,b+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t);let E=M&&(M.wallet>0||M.spareKey);if(M&&!g?(i.hint(E?"pocket":"ko"),s.act?(this.koTarget!==M&&(this.koTarget=M,this.koHold=0,this.pocketProg=0),this.koHold+=t,E&&this.koHold>.22&&(this.pocketProg+=t/.9,e.crack=!0,M.susp=Math.min(.9,M.susp+t*.12),this.pocketProg>=1&&(this.pickpocket(M),this.koHold=99))):this.koHold>0&&(this.koHold<.22&&this.koTarget===M&&this.knockout(M),this.koHold=0,this.pocketProg=0)):(this.koHold=0,this.pocketProg=0,this.koTarget=null),k&&!g&&!M){i.setPrompt("slot",k.prog),this.updateObjective();return}if(P&&!g&&!M){i.setPrompt("case",P.prog),this.updateObjective();return}let z=null;for(let H of this.guards){if(H.state!=="ko"||H.radioCall!==1){H.answerProg=0;continue}Math.hypot(e.x-H.x,e.z-H.z)<1.6&&(z=H)}if(z&&!g){s.act?(z.answerProg+=t/.7,e.crack=!0,z.answerProg>=1&&this.fakeCheckIn(z)):z.answerProg=Math.max(0,z.answerProg-t),i.setPrompt("radio",z.answerProg),this.updateObjective();return}let D=null;if(!g&&!M&&this.disguiseT<=0)for(let H of this.guards)H.kind==="guard"&&H.state==="ko"&&!H.stripped&&H.radioCall!==1&&Math.hypot(e.x-H.x,e.z-H.z)<1.5&&(D=H);if(D){s.act?(this.uniformProg+=t/1.1,e.crack=!0,this.uniformProg>=1&&(this.uniformProg=0,this.takeUniform(D))):this.uniformProg=Math.max(0,this.uniformProg-t*2),i.hint("uniform"),i.setPrompt("uniform",this.uniformProg),this.updateObjective();return}else this.uniformProg=0;if(w&&!g&&!M&&w.type==="lock"){i.hint("pick"),_?this.startPick(w):i.setPrompt("pick"),this.updateObjective();return}if(w&&!g&&!M){_&&(this.hasKey?this.openDoor(w):this.nopeT<=0&&(this.nopeT=1.5,i.audio.play("nope"),i.floaters.spawn("Need the keycard!",w.x+.5,1.3,w.y+.5,"warn",1.2),i.hint("key"))),i.setPrompt(this.hasKey?"door":"locked"),this.updateObjective();return}if(I&&!g&&!M){i.setPrompt("breaker",this.breakProg),this.updateObjective();return}let N=!O&&!g&&!M?this.nearTV():null;if(N)if(_){this.tvOn(N),this.updateObjective();return}else{i.setPrompt("tv"),this.updateObjective();return}let V=!O&&!g&&!M&&!this.heavy.length?this.nearVent():null;if(V){if(i.hint("vent"),_){this.enterVent(V);return}i.setPrompt("vent"),this.updateObjective();return}let W=C&&!O&&!g&&!M;if(W&&(i.hint("hide"),_)){this.enterHide(C);return}i.setPrompt(O?"panel":g?"safe":M?E?"pocket":"ko":W?"hide":"",O?this.disarmProg:M&&E?this.pocketProg:this.safeProg);let Z=this.L.exit,J=Math.hypot(e.x-Z.x,e.z-Z.z);J<2.4&&this.heavy.length&&this.stashHeavy(),this.nopeT-=t,J<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,i.audio.play("nope"),i.floaters.spawn("Crack the safe first!",e.x+r*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),s.consumeSmoke()&&this.dropSmoke(),this.checkContracts(!1),this.updateObjective(),this.time>3.5&&i.hint("dash");for(let H of this.guards){let q=Math.hypot(e.x-H.x,e.z-H.z);H.state==="sleep"&&q<6&&i.hint("owner");for(let L of this.dogs)Math.hypot(e.x-L.x,e.z-L.z)<7&&i.hint("dog");if(this.powerOff)H.state!=="sleep"&&q<6.5&&(i.hint("cone"),this.time>8&&i.hint("coin"),this.time>14&&i.hint("sneak"));else for(let L of this.lasers){let et=L.alongX?e.x:e.z,ot=L.alongX?e.z:e.x;et>L.lo-1&&et<L.hi+1&&Math.abs(ot-L.line)<3.5&&i.hint("laser")}}for(let H of this.loot)if(Math.hypot(e.x-H.x,e.z-H.z)<4){i.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,i=e.x-t.x,s=e.z-t.z;return Math.hypot(i,s)>1.35||Math.abs(Pe(t.face,Math.atan2(i,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}juice(t,e,i,s,a){t>0&&(!this.slowT||this.slowT<t)&&(this.slowT=t,this.slowK=e);let r=this.app.shake.scale??1;this.fovPunch=(this.fovPunch||0)+i*r,this.kickP=(this.kickP||0)+s*r,this.kickR=(this.kickR||0)+a*r}mark(t,e,i){this.marks.push({t,x:e,z:i})}knockout(t){this.mark("ko",t.x,t.z);let e=this.app,i=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.kind==="clerk"&&t.state==="flee"&&(this.clerkStopped=!0,this.app.floaters.spawn("ALARM STOPPED",t.x,2.2,t.z,"big",1.2)),t.state="ko",t.koT=9,t.susp=0,t.fallT=0,t.radioCall=0,t.answerProg=0,t.callT=0,this.koStreak=this.time-(this.lastKo??-99)<8?(this.koStreak||1)+1:1,this.lastKo=this.time,this.maxKoStreak=Math.max(this.maxKoStreak||0,this.koStreak),this.koStreak>=2&&(e.floaters.spawn(["","","DOUBLE TAKEDOWN!","TRIPLE TAKEDOWN!"][this.koStreak]||"UNSTOPPABLE!",t.x,2.3,t.z,"big",1.3),e.audio.play("combo",this.koStreak*3),e.shake.add(.2)),t.c.flash=.2,zi(t.c,.6),this.kos++,this.hitstop=.08,this.juice(.38,.3,-9,-.05,(Math.random()<.5?-1:1)*.07),e.shake.add(.35),i.punchT=.28,zi(i.c,1.25),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,i=1.25;for(let s of this.hides){let a=Math.hypot(t.x-s.cx,t.z-s.cz);a<i&&Math.abs(Pe(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(i=a,e=s)}return e}enterHide(t){this.hidesUsed++;let e=this.player,i=this.app,s=!1,a=0;for(let r of this.guards)(r.state==="alert"||r.state==="flee")&&a++,r.state!=="ko"&&r.state!=="sleep"&&r.state!=="getup"&&this.canSee(r)&&(s=!0,r.knowsHide=!0,r.state!=="alert"&&this.alert(r),i.floaters.spawn("I saw that!",r.x,2,r.z,"alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,a>0&&!s){this.hidFromAlert=!0;for(let r of this.guards)r.state==="alert"&&(r.lostT=99)}i.audio.play("creak"),i.onHide(!0),i.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let i=e.hiding;e.hiding=null,e.x=i.ex,e.z=i.ez,e.yaw=i.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let i=this.player,s=i.hiding,a=this.app;i.hideT+=t;let r=s.face-Math.PI;i.yaw=r+He(Pe(r,i.yaw),-1,1),i.pitch=He(i.pitch,-.5,.4),i.moving=0,i.crack=!1,e.consumeDash(),e.consumeThrow();let o=9;for(let l of this.guards)l.state!=="ko"&&l.state!=="sleep"&&(o=Math.min(o,Math.hypot(l.x-s.cx,l.z-s.cz)));i.beatT-=t,o<4.5&&i.beatT<=0&&(i.beatT=.45+o*.12,a.audio.play("beat"),a.shake.add(.04)),e.move(Ei),a.setPrompt("leave"),i.hideT>.35&&(e.consumeAct()||Math.hypot(Ei.x,Ei.y)>.5)&&this.leaveHide(!1)}takeUniform(t){let e=this.app;t.stripped=!0,this.disguises++,this.disguiseT=25+this.gear.disguise,t.koT=Math.max(t.koT,6),e.audio.play("creak"),e.audio.play("pick",6),e.floaters.spawn("Uniform on!",t.x,1.4,t.z,"big",1.2),e.onDisguise(this.disguiseT),e.hintDone("uniform")}nearTV(){let t=this.player;for(let e of this.tvs)if(!(e.on||e.used)&&Math.hypot(t.x-e.cx,t.z-e.cz)<1.9&&Math.abs(Pe(t.face,Math.atan2(e.cx-t.x,e.cz-t.z)))<.7)return e;return null}tvOn(t){let e=this.app;t.on=!0,t.t=0,t.scr.visible=t.glow.visible=!0,e.audio.play("click"),e.audio.play("tvon"),this.makeNoise(t.fx,t.fz,7.5,null,"Who turned the TV on?"),e.setPrompt("")}tvOff(t,e){t.on=!1,t.used=!0,t.scr.visible=t.glow.visible=!1,this.app.audio.play("click"),e&&(this.tvLures++,this.app.floaters.spawn("Stupid TV...",e.x,2,e.z,"q",1.2))}updateTVs(t){let e=this.player;for(let i of this.tvs){if(!i.on)continue;if(i.t+=t,i.flick-=t,i.babble-=t,i.flick<=0){i.flick=.12+Math.random()*.25;let a=[10473727,16765562,9109440,16751312,16777215][Math.random()*5|0];i.scr.material.color.setHex(a),i.glow.material.color.setHex(a),i.glow.material.opacity=.35+Math.random()*.3}let s=Math.hypot(e.x-i.cx,e.z-i.cz);i.babble<=0&&(i.babble=.2+Math.random()*.12,s<14&&this.app.audio.play("tv",Math.max(0,1-s/14))),i.t>18&&this.tvOff(i,null)}}nearVent(){let t=this.player;for(let e of this.vents)if(Math.hypot(t.x-e.cx,t.z-e.cz)<.85&&Math.abs(Pe(t.face,Math.atan2(e.gx-t.x,e.gz-t.z)))<1)return e;return null}enterVent(t){let e=this.player,i=this.app;for(let s of this.guards)s.state!=="ko"&&s.state!=="sleep"&&s.state!=="getup"&&this.canSee(s)&&(s.state!=="alert"&&this.alert(s),i.floaters.spawn("Hey! The vent!",s.x,2,s.z,"alert",1.2));this.ventsUsed++,e.venting={t:0,from:t,to:t.other,dur:1.7,moved:!1},e.vx=e.vz=0,e.crouch=!0,i.onCrouch(!0),i.audio.play("vent"),i.setPrompt(""),i.hintDone("vent")}updateVent(t,e){let i=this.player,s=i.venting,a=this.app;s.t+=t,i.inv=.5,i.moving=0,i.crack=!1,i.crouchK=1,e.consumeDash(),e.consumeThrow(),e.consumeAct(),e.consumeSmoke();let r=s.t/s.dur;s.from.flap.rotation.x=Math.min(1.3,s.t*6)*(r<.5?1:Math.max(0,1-(r-.5)*6)),s.to.flap.rotation.x=r>.55?Math.min(1.3,(r-.55)*8)*Math.max(0,1-Math.max(0,r-.85)*7):0,!s.moved&&r>=.5&&(s.moved=!0,i.x=s.to.cx,i.z=s.to.cz,i.yaw=s.to.out-Math.PI,i.pitch=-.1,this.trail&&this.trail.push([i.x,i.z,0])),a.ventFx(r<.22?r/.22:r>.78?(1-r)/.22:1),r>=1&&(i.venting=null,i.inv=.4,s.from.flap.rotation.x=0,s.to.flap.rotation.x=0,a.ventFx(0),a.audio.play("clank"),a.shake.add(.12),this.makeNoise(i.x,i.z,2.4,null),a.particles.burst(i.x,.3,i.z,{count:10,colors:[12103840,9077880],speed:1.2,up:1.2,size:.07,gravity:-.5,life:.8}))}dropSmoke(){let t=this.player,e=this.app;if(this.smokesLeft<=0){e.audio.play("nope");return}if(this.clouds.length>=this.smokeFx.length)return;this.smokesLeft--,this.smokesUsed++;let i=t.x+Math.sin(t.face)*.7,s=t.z+Math.cos(t.face)*.7;this.walkable(Math.floor(i),Math.floor(s))||(i=t.x,s=t.z);let a=this.smokeFx.find(r=>!r.pts.visible);a.pts.visible=!0,this.clouds.push({x:i,z:s,t:0,dur:7.5,r:0,fx:a}),e.audio.play("smoke"),e.shake.add(.12),e.particles.burst(i,.2,s,{count:14,colors:[16777215,14275810,12104390],speed:3,up:2,size:.12,life:.7,gravity:1}),e.onSmoke(this.smokesLeft),e.hintDone("smoke")}smokeBlocks(t,e,i,s){for(let a of this.clouds){let r=a.r*.9;if(r<.3)continue;if(Math.hypot(i-a.x,s-a.z)<r||Math.hypot(t-a.x,e-a.z)<r)return!0;let o=i-t,l=s-e,h=o*o+l*l||1,c=He(((a.x-t)*o+(a.z-e)*l)/h,0,1);if(Math.hypot(t+o*c-a.x,e+l*c-a.z)<r)return!0}return!1}lowCover(t,e,i,s){let a=this.L,r=i-t,o=s-e,l=Math.hypot(r,o),h=Math.ceil(l/.2);for(let c=1;c<h;c++){let u=c/h;if(u*l>l-.25&&u*l>0)continue;let f=Math.floor(t+r*u),x=Math.floor(e+o*u);if(Math.hypot(t+r*u-i,e+o*u-s)>1.6)continue;let d=x*a.W+f;if(d>=0&&d<a.W*a.H&&!a.walk[d]&&!a.opaque[d]&&!a.outdoor[d]&&a.ch[d]!=="D"&&a.ch[d]!=="L")return!0}return!1}inSmoke(t,e){return this.clouds.some(i=>Math.hypot(t-i.x,e-i.z)<i.r*.85)}updateSmoke(t){for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];i.t+=t;let s=Math.min(1,i.t/.6),a=He((i.dur-i.t)/1.6,0,1);i.r=2.1*(1-Math.pow(1-s,3))*(.75+.25*a);let r=i.fx,o=r.geo.attributes.position.array;for(let l=0;l<r.N;l++){let h=l*4,c=Math.sin(i.t*.8+r.off[h+3])*.15;o[l*3]=i.x+r.off[h]*i.r+c,o[l*3+1]=.2+r.off[h+1]*1.5*s+i.t*.04,o[l*3+2]=i.z+r.off[h+2]*i.r+c}r.geo.attributes.position.needsUpdate=!0,r.pts.material.opacity=.55*a*s,r.pts.material.size=1.2+s*.6;for(let l of this.guards)l.coughT>0&&(l.coughT-=t),!(l.state==="ko"||l.state==="sleep"||Math.hypot(l.x-i.x,l.z-i.z)>i.r*.8)&&(l.coughT>0||(l.coughT=2.2,this.app.floaters.spawn("*cough*",l.x,1.9,l.z,"q",.9),l.state==="alert"&&(l.lostT=Math.max(l.lostT,1.5))));i.t>=i.dur&&(r.pts.visible=!1,this.clouds.splice(e,1))}this.app.onInSmoke(this.state==="play"&&this.inSmoke(this.player.x,this.player.z))}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let i=this.coinMeshes.find(h=>!h.visible);if(!i)return;this.coinsLeft--,this.coinsThrown++;let s=Math.sin(t.face),a=Math.cos(t.face),r=Math.cos(t.pitch),o=Math.sin(t.pitch),l=7.5;this.coins.push({mesh:i,x:t.x+s*.35,y:.95,z:t.z+a*.35,vx:s*r*l+t.vx*.5,vy:o*l+2.6,vz:a*r*l+t.vz*.5,st:"fly",t:0,bounces:0}),i.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let i=this.player,s=this.app;for(let a=this.coins.length-1;a>=0;a--){let r=this.coins[a];if(r.t+=t,r.st==="fly"){r.vy-=16*t;let o=r.x,l=r.z;r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let h=Math.floor(r.x),c=Math.floor(r.z);!this.walkable(h,c)&&(this.opaqueAt(h,c)||r.y<.9)&&(Math.floor(o)!==h?r.vx*=-.4:r.vx*=.6,Math.floor(l)!==c?r.vz*=-.4:r.vz*=.6,r.x=o,r.z=l,s.audio.play("clink",.4)),r.y<.03&&(r.y=.03,r.bounces===0?(this.makeNoise(r.x,r.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(r.x,.06,r.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),r.bounces++,r.vy=Math.abs(r.vy)*.35,r.vx*=.5,r.vz*=.5,(r.bounces>2||Math.abs(r.vy)<.5)&&(r.st="rest",r.vy=0)),r.mesh.rotation.set(r.t*18,r.t*7,0);for(let u of this.cams){if(u.off>0)continue;let f=u.mesh.position;Math.hypot(r.x-f.x,r.y-f.y,r.z-f.z)<.5&&(u.off=12,u.susp=0,this.camsHit++,r.vx*=-.3,r.vz*=-.3,r.vy=1,s.audio.play("zap"),s.shake.add(.1),s.particles.burst(f.x,f.y,f.z,{count:16,colors:[16773544,8378623,16777215],speed:2.5,up:2,size:.04,life:.6}),s.floaters.spawn("CAMERA DOWN",f.x,f.y+.5,f.z,"big",1.2),s.hintDone("camhit"))}}else if(r.mesh.rotation.set(Math.PI/2,0,r.t*2),r.mesh.position.y=.03,e&&r.t>.6&&Math.hypot(i.x-r.x,i.z-r.z)<.6){this.coinsLeft++,r.mesh.visible=!1,this.coins.splice(a,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}r.mesh.position.set(r.x,r.y,r.z)}}makeNoise(t,e,i,s,a){this.thunderT>0&&s==null&&!a&&(i*=.3);let r=this.noiseRings.find(o=>o.t>=1);r&&(r.t=0,r.r=i,r.x=t,r.z=e,r.m.visible=!0);for(let o of this.guards)if(!(o===s||o.state==="ko"||o.state==="getup"||o.state==="alert"||o.state==="waking")&&!(Math.hypot(o.x-t,o.z-e)>i)){if(o.state==="sleep"){this.wake(o,t,e);continue}o.state!=="investigate"&&o.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(typeof a=="string"?a:a?"Huh? A coin?":"?",o.x,1.9,o.z,"q",.9),a===!0&&this.lures++,a==="Jackpot!?"&&this.slotLures++),o.state="investigate",o.tx=t,o.tz=e,o.hurry=o.speed*1.4,o.susp=Math.max(o.susp,.3)}if(a)for(let o of this.dogs)(o.state==="roam"||o.state==="sniff")&&Math.hypot(o.x-t,o.z-e)<i+2&&(o.state="coin",o.tx=t,o.tz=e,o.waitT=5,o.navGoal=-1,this.app.floaters.spawn("!",o.x,1,o.z,"q",.7))}updateDog(t,e,i){let s=this.player,a=this.app;t.t+=e,t.moving=0;let r=Math.hypot(s.x-t.x,s.z-t.z),o=s.hiding;i&&t.state!=="bark"&&t.state!=="barkHide"&&(!o&&s.inv<=0&&r<3&&this.los(t.x,t.z,s.x,s.z)&&!this.smokeBlocks(t.x,t.z,s.x,s.z)?(t.state="bark",t.barkT=.25,t.lostT=0,a.floaters.spawn("!",t.x,1.1,t.z,"alert",.8)):o&&Math.hypot(o.ex-t.x,o.ez-t.z)<1.4&&(t.state="barkHide",t.barkT=.3,t.hide=o));let l=t.def.path;switch(t.state){case"roam":{if(t.waitT>0){t.waitT-=e,t.face+=Math.sin(t.t*3)*e;break}let c=l[t.wp];if(this.navTo(t,c[0]+.5,c[1]+.5,t.def.speed*t.mul,e)&&(t.wp=(t.wp+1)%l.length,t.waitT=1.2),t.smellT-=e,i&&t.smellT<=0){t.smellT=.5;for(let u=this.crumbs.length-1;u>=0;u--){let f=this.crumbs[u];if(this.time-f.t>14)break;if(Math.hypot(f.x-t.x,f.z-t.z)<2.2){t.state="sniff",t.ci=u,t.sniffT=0,a.audio.play("sniff");break}}}break}case"sniff":{t.sniffT+=e;let c=this.crumbs[t.ci];if(!c||t.sniffT>16){t.state="roam",t.navGoal=-1;break}(this.navTo(t,c.x,c.z,2.5*t.mul,e)||Math.hypot(c.x-t.x,c.z-t.z)<.45)&&(t.ci<this.crumbs.length-1?t.ci++:(t.state="roam",t.waitT=2,t.navGoal=-1)),Math.random()<e*1.5&&a.audio.play("sniff");break}case"coin":(this.navTo(t,t.tx,t.tz,3.2*t.mul,e)||Math.hypot(t.tx-t.x,t.tz-t.z)<.6)&&(t.waitT-=e,t.face+=Math.sin(t.t*6)*e*3,Math.random()<e*2&&a.audio.play("sniff"),t.waitT<=0&&(t.state="roam",t.navGoal=-1));break;case"bark":{let c=!o&&r<6&&this.los(t.x,t.z,s.x,s.z);c?t.lostT=0:t.lostT+=e,r>1.3&&!o&&this.navTo(t,s.x,s.z,3.3*t.mul,e),t.face=Nu(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),(t.lostT>2.5||o)&&(t.state="sniff",t.ci=Math.max(0,this.crumbs.length-6),t.sniffT=0),i&&c&&(this.lastBark=this.time),i&&c&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0);break}case"barkHide":{let c=t.hide;if(!s.hiding){t.state="bark",t.lostT=0;break}t.face=Nu(t.face,Math.atan2(c.cx-t.x,c.cz-t.z),8*e),this.dogBark(t,e,c.ex,c.ez,10),this.barkedAt||(this.barkedAt=!0);break}}let h=t.m;h.root.position.set(t.x,0,t.z),h.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.scale.set(.8,1,1.1),Lu(h,e,t.moving?1:0,this.t,t.state==="bark"||t.state==="barkHide"),qo(h,this.L,t.x,t.z,e)}dogBark(t,e,i,s,a=7){if(t.barkT-=e,t.barkT>0)return;t.barkT=.85;let r=this.app;r.audio.play("woof"),r.floaters.spawn("WOOF!",t.x,1,t.z,"woof",.7),t.m.sq=1.3,t.m.sqv=0,this.makeNoise(i,s,a,null)}wake(t,e,i){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=i,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,i-t.z),zi(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,i,s){let a=e-t.x,r=i-t.z,o=Math.hypot(a,r);return o>s||o>.6&&Math.abs(Pe(t.face,Math.atan2(a,r)))>t.fov/2?!1:this.los(t.x,t.z,e,i)}noticeThings(t){let e=this.app;for(let i of this.guards)if(!(i===t||i.state!=="ko"||i.koT<1.2||i.claimed)&&this.seesPoint(t,i.x,i.z,t.range)){i.claimed=!0,t.state="investigate",t.tx=i.x,t.tz=i.z,t.hurry=t.speed*1.7,t.reviveT=i,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"warn",1.3);return}if(this.casesSmashed&&t.kind==="guard"&&!t.sawCase){let i=this.cases.find(s=>s.smashed&&this.seesPoint(t,s.cx,s.cz,t.range));if(i){t.sawCase=!0,t.safeRun=!0,t.state="investigate",t.tx=i.cx,t.tz=i.cz+1.2,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The display case!?",t.x,2,t.z,"warn",1.3);return}}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let i=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,i,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=i,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"warn",1.3))}}arrive(t){let e=this.app;for(let s of this.tvs)if(s.on&&Math.hypot(s.fx-t.x,s.fz-t.z)<2.2){t.face=Math.atan2(s.cx-t.x,s.cz-t.z),this.tvOff(s,t);return}if(t.kind==="guard"&&this.hides.length&&!t.reviveT&&!t.safeRun&&Math.random()<(this.player.hiding?.55:.35)){let s=null,a=4.5;for(let r of this.hides){let o=Math.hypot(r.ex-t.x,r.ez-t.z);o<a&&(!r.checkedT||this.t-r.checkedT>15)&&(a=o,s=r)}if(s){s.checkedT=this.t,t.state="checkHide",t.chk=s,t.navGoal=-1,e.floaters.spawn("Hmm... the wardrobe?",t.x,2,t.z,"q",1.2);return}}if(t.reviveT){let s=t.reviveT;t.reviveT=null,s.claimed=!1,s.state==="ko"&&Math.hypot(s.x-t.x,s.z-t.z)<1.8&&(s.koT=.25,this.revives++,t.face=Math.atan2(s.x-t.x,s.z-t.z),e.floaters.spawn("Wake up!",s.x,1.4,s.z,"warn",1.1),e.audio.play("wake"))}let i=this.player.hiding;if(i&&this.state==="play"&&this.dogs.some(s=>s.state==="barkHide")&&Math.hypot(i.ex-t.x,i.ez-t.z)<1.8){e.floaters.spawn("Got you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t);return}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){if(t.kind==="clerk"){if(t.state==="flee"||t.state==="cower")return;t.state="flee",t.susp=1,t.navGoal=-1,this.spotted=!0,this.app.audio.play("scream"),this.app.floaters.spawn("AAAH! A ROBBER!",t.x,2,t.z,"alert",1.2),this.app.shake.add(.12),zi(t.c,1.35),this.app.hint("clerk");return}t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,t.alertAt=this.time,this.disguiseT>0&&(this.disguiseT=0,this.app.onDisguise(0),this.app.floaters.spawn("You're not Dave!",t.x,2.3,t.z,"alert",1.3)),this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"alert",.8),this.smokesLeft>0&&this.app.hint("smoke"),this.app.shake.add(.15),zi(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}updateTrain(t,e){for(let i of this.trainMats)i.map.offset.x+=i.userData.sgn*t*.9;this.sway=Math.sin(this.t*1.3)*.006+Math.sin(this.t*3.1)*.002,!(e||this.state!=="play")&&(this.clackT-=t,this.clackT<=0&&(this.clackT=.95+Math.random()*.15,this.app.audio.play("clack"),this.app.shake.add(.015)))}updateChatter(t){let e=this.app,i=this.player;if(this.chatQ){let a=this.chatQ;a.t-=t,a.t<=0&&(this.chatQ=null,Ou.has(a.g.state)&&(e.floaters.spawn(a.text,a.g.x,2,a.g.z,"zz",1.6),e.audio.play("mumble")));return}if(this.chatT-=t,this.chatT>0||this.alarm)return;let s=this.guards.filter(a=>a.kind==="guard"&&Ou.has(a.state)&&a.susp<.1&&Math.hypot(a.x-i.x,a.z-i.z)<11);for(let a=0;a<s.length;a++)for(let r=a+1;r<s.length;r++){let o=s[a],l=s[r];if(Math.hypot(o.x-l.x,o.z-l.z)>2.6||!this.los(o.x,o.z,l.x,l.z))continue;let h=Xg.slice();this.def.rain&&h.push(["Nasty storm out there.","Better than standing in it."]),(o.def.reinforce||l.def.reinforce)&&h.push(["You the new guy?","First night. Anything I should know?"]),this.kos>0&&h.push(["Anyone seen Dave? He's not answering.","Probably asleep on the job again."]);let[c,u]=h[this.chatI++%h.length];e.floaters.spawn(c,o.x,2,o.z,"zz",1.6),e.audio.play("mumble"),o.face=Math.atan2(l.x-o.x,l.z-o.z),this.chatQ={g:l,text:u,t:1.5},this.chatT=16+Math.random()*10;return}this.chatT=1.5}updateStorm(t){let e=this.app;this.thunderT=Math.max(0,this.thunderT-t),this.thunderIn>0&&(this.thunderIn-=t,this.thunderIn<=0&&(this.thunderT=2.6,e.audio.play("thunder"),e.shake.add(.12),e.hint("thunder"))),this.boltT-=t,this.boltT<=0&&(this.boltT=12+Math.random()*12,this.thunderIn=.35+Math.random()*.6,e.lightning())}callReinforcement(t){let e=this.app,i=this.entrance;t.def.path=[[i.x,i.y],this.roamCell(t.def.roam,i.x,i.y)],this.resetGuard(t),t.wallet=0,t.spareKey=!1,t.walletMesh.visible=!1,t.keyMesh.visible=!1,t.c.root.visible=!0,this.guards.push(t),e.audio.play("radio"),e.announce("\u{1F4FB} Shift change! A new guard is on duty"),e.floaters.spawn("Reporting for duty!",t.x,2,t.z,"warn",1.4)}roamCell(t,e,i){let s=0;for(let a=0;a<40;a++){let r=t[0]+Math.floor(Math.random()*(t[2]-t[0]+1)),o=t[1]+Math.floor(Math.random()*(t[3]-t[1]+1));if(!(!this.walkable(r,o)||this.L.outdoor[o*this.L.W+r])){if(e!==void 0&&(r!==e||o!==i)){if(s++>=8)break;if(!this.path(e,i,r,o).length)continue}return[r,o]}}return e!==void 0?[e,i]:[t[0],t[1]]}effRange(t){return t.yawnT>0?t.range*.35:t.range}canSee(t){let e=this.player,i=e.x-t.x,s=e.z-t.z,a=Math.hypot(i,s);return e.hiding||e.venting||a>this.effRange(t)||a>.35&&Math.abs(Pe(t.face,Math.atan2(i,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)||e.crouch&&this.lowCover(t.x,t.z,e.x,e.z)?0:this.smokeBlocks(t.x,t.z,e.x,e.z)?((t.susp>.2||t.state==="alert")&&(this.smokeHid=!0),0):a+.001}updateGuard(t,e,i){let s=this.player,a=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!i)&&a.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.kind==="guard"&&i&&(!t.radioCall&&t.koT<5.5&&(t.radioCall=1,t.callT=0,a.hint("radio")),t.radioCall===1&&(t.callT-=e,t.callT<=0&&(t.callT=1.1,a.audio.play("radio"),a.floaters.spawn('\u{1F4FB} "Unit, report in!"',t.x,1.2,t.z,"warn",1)),t.koT<1.8&&this.missedCheckIn(t))),t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,a.floaters.spawn(t.stripped?"Hey! Where's my uniform?!":"?!",t.x,1.9,t.z,"q",t.stripped?1.4:.8));return}t.yawnT>0&&(t.yawnT-=e,t.state!=="wait"&&(t.yawnT=0)),t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let r=i&&s.inv<=0?this.canSee(t):0;if(r){let l=1-He(r/this.effRange(t),0,1),h=(.65+2.3*l*l)*(s.dashT>0?1.6:s.crouch?.55:1)*this.D.susp;this.disguiseT>0&&t.kind!=="owner"&&r>2.3&&s.dashT<=0&&(h*=.12),t.susp=Math.min(1,t.susp+h*e),t.state!=="alert"?t.peak=Math.max(t.peak||0,t.susp):t.peak=0,t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",a.audio.play("huh")))}else if(t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3)),t.state!=="alert"&&t.peak>.72&&t.susp<.15&&i){t.peak=0,this.closeCalls++;let l=this.player,h=Math.sin(l.face),c=Math.cos(l.face);a.floaters.spawn("PHEW! Close call +$50",l.x+h*1.5,1.35,l.z+c*1.5,"combo",1.2),a.audio.play("star",1),this.lootGot+=50,this.lootTotal+=50,a.onLoot(!0)}i&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),i&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&!this.canKO(t)&&Math.abs(Pe(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let o=t.def;switch(t.state){case"patrol":{let l=o.path[t.wp];(this.navTo(t,l[0]+.5,l[1]+.5,t.speed,e)||t.stateT>14)&&(t.state="wait",t.t=o.wait??1,t.baseFace=t.face,t.kind==="guard"&&t.susp<.1&&Math.random()<.35&&(t.yawnT=2.2,t.t=Math.max(t.t,2.2),a.floaters.spawn("*yaaawn*",t.x,1.9,t.z,"zz",1.4)));break}case"wait":{t.t-=e;let l=(o.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(l*2.4)*.9,t.t<=0){let h=o.path.length;if(o.roam){let c=Math.floor(t.x),u=Math.floor(t.z);o.path=[[c,u],this.roamCell(o.roam,c,u)],t.wp=1}else o.loop?t.wp=(t.wp+1)%h:((t.wp+t.dir>=h||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir);t.state="patrol"}break}case"post":{let l=o.post[0]+.5,h=o.post[1]+.5;Math.hypot(t.x-l,t.z-h)>.15?this.navTo(t,l,h,t.speed,e):t.face=Ko(t.face,o.face+Math.sin(this.t*o.sweepSpeed)*o.sweep,3*e);break}case"suspicious":{let l=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=Ko(t.face,l,5*e),t.kind!=="clerk"&&Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,a.floaters.spawn("Calling it in...",t.x,2,t.z,"warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let l=r?s.x:t.lastX,h=r?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(l=s.hiding.ex,h=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(l-t.x,h-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,l,h,Bg,e),!r&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,a.audio.play("lost"),a.floaters.spawn("?",t.x,1.9,t.z,"q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"checkHide":{let l=t.chk;(this.navTo(t,l.ex,l.ez,t.speed*1.15,e)||t.stateT>8)&&(t.face=Math.atan2(l.cx-t.x,l.cz-t.z),this.player.hiding===l&&this.state==="play"?(a.floaters.spawn("Found you!",t.x,2,t.z,"alert",1.2),this.leaveHide(!0),this.bust(t)):(a.audio.play("creak"),a.floaters.spawn("Nobody here...",t.x,2,t.z,"q",1.1),t.state="look",t.t=1.6,t.baseFace=t.face));break}case"flee":this.navTo(t,t.button.x,t.button.z,3.4,e)&&(t.state="cower",t.t=0,t.face=Math.atan2(t.button.x-t.x,t.button.z-t.z),t.button.btn.material.color.setHex(4054148),this.state==="play"&&!this.alarm&&this.triggerAlarm("The clerk hit the silent alarm!"),a.audio.play("click"));break;case"cower":t.face+=Math.sin(this.t*9)*e*2;break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let i=t.c;if(t.moving&&this.state==="play"&&(t.stepAcc=(t.stepAcc||0)+e*(t.state==="alert"||t.state==="flee"?3.4:2.2),t.stepAcc>1)){t.stepAcc=0;let o=this.player,l=Math.hypot(t.x-o.x,t.z-o.z);if(l<8){let h=Pe(o.face,Math.atan2(t.x-o.x,t.z-o.z)),c=this.los(t.x,t.z,o.x,o.z)?1:.45;this.app.audio.stepSound("boot",(1-l/8)*.9*c,He(-Math.sin(h),-.9,.9))}}i.root.position.x=t.x,i.root.position.z=t.z,i.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(Xc(i,e*(s?1.5:1),t.moving?1:0,this.t),qo(i,this.L,t.x,t.z,e),i.beam){let o=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";i.beam.visible=o,o&&i.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let o=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,l=t.state==="ko"?1-Math.pow(1-o,3)*Math.cos(o*7):o;if(i.root.rotation.x=-Math.PI/2*l,i.root.position.y=.16*l,t.stars.visible=t.state==="ko",t.stars.visible){let h=t.x-Math.sin(t.face)*1,c=t.z-Math.cos(t.face)*1;t.stars.children.forEach((u,f)=>{let x=this.t*5+f*Math.PI*2/3;u.position.set(h+Math.cos(x)*.35,.55+Math.sin(x*2)*.05,c+Math.sin(x)*.35),u.rotation.set(x,x,0)})}}else t.state!=="sleep"&&(i.root.rotation.x=0,i.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(i.armOverride=!0,i.armL.rotation.x=i.armR.rotation.x=-2.6);let a=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=a,a){let o=t.state==="alert"||t.state==="flee"?Us.alert:t.susp>.25?Us.sus:Us.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,this.effRange(t),o)}let r="";t.state==="alert"||t.state==="flee"?r="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.state==="checkHide"||t.susp>.04)&&(r="sus"),r!==t.prevBadge&&(t.prevBadge=r,t.badge.className="badge "+r,t.badge.lastChild.textContent=r==="alert"?"!":"?"),r&&($o.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",$o.z>1),t.badge.style.transform=`translate(${($o.x+1)/2*this.app.w}px,${(1-$o.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",r==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,i,s,a,r,o){let l=t.geometry.attributes.position.array;l[0]=e,l[1]=.04,l[2]=i;for(let h=0;h<=Os;h++){let c=s-a/2+a*h/Os,u=this.rayLen(e,i,c,r),f=(h+1)*3;l[f]=e+Math.sin(c)*u,l[f+1]=.04,l[f+2]=i+Math.cos(c)*u}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(o)}updateCam(t,e,i){let s=t.def,a=this.player;if(t.off>0){t.off-=e,t.cone.visible=!1,t.mesh.rotation.x=.6,t.lens.material.color.setHex(Math.random()<.04?16773544:1710626),Math.random()<e*3&&this.app.particles.burst(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,{count:2,colors:[16773544,8378623],speed:1.2,up:.5,size:.03,life:.3}),t.off<=0&&(t.cone.visible=!0,t.mesh.rotation.x=0,this.app.audio.play("click"));return}i&&Math.hypot(a.x-s.pos[0],a.z-s.pos[1])<7&&this.coinsLeft>0&&this.app.hint("camhit"),t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let r=s.pos[0],o=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let l=!1;if(i&&a.inv<=0&&t.cool<=0){let c=a.x-r,u=a.z-o,f=Math.hypot(c,u);l=this.disguiseT<=0&&f<6.5&&Math.abs(Pe(t.face,Math.atan2(c,u)))<.45&&this.los(r,o,a.x,a.z)&&!this.smokeBlocks(r,o,a.x,a.z)}if(t.susp=He(t.susp+(l?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.audio.play("alarm"),this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",r,2,o,"alert",1.2);for(let c of this.guards)c.state==="ko"||c.state==="sleep"||c.state==="getup"||c.state==="alert"||c.state==="waking"||Math.hypot(c.x-a.x,c.z-a.z)<18&&(c.state="investigate",c.tx=a.x,c.tz=a.z,c.hurry=3.2,c.susp=Math.max(c.susp,.6))}let h=t.cool>0;t.lens.material.color.setHex(h||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,r,o,t.face,.9,6.5,h?Us.alert:t.susp>.2?Us.sus:10479871)}openSafe(){this.mark("safe",this.L.safe.x+.5,this.L.safe.y+.5);let t=this.app,e=this.L.safe.x+.5,i=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,this.juice(.6,.35,-12,.04,0),t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,i+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.burst(e,1,i+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,i,"big",1.6);for(let a=0;a<s.bundles;a++){let r=-.9+1.8*a/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:i+.4*this.safeScale+.1,vx:Math.sin(r)*Re(2,3.2),vy:Re(5,7),vz:Math.cos(r)*Re(1.5,3),st:"fly",t:0,value:s.bundle,ph:a,ms:0,s:1,rot:a,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.hintDone("safe"),t.hint("stash")}weightMul(){let t=0;for(let e of this.heavy)t+=e==="art"?.1:.06;return Math.max(.65,1-t)}stashHeavy(){let t=this.app,e=this.player,i=this.heavy.length;this.heavy=[],this.stashRuns++,this.hasStash||(this.stashedEarly=!0),t.audio.play("disarm"),t.floaters.spawn(`STASHED ${i} IN THE ${this.L.van?"VAN":"HIDEOUT"}!`,e.x+Math.sin(e.face)*1.5,1.3,e.z+Math.cos(e.face)*1.5,"big",1.3),t.particles.burst(e.x,.9,e.z,{count:10,colors:[16765503,16777215],speed:1.6,up:2,size:.04,life:.6}),this.juice(0,1,-3,0,0),t.onWeight(1),t.hintDone("heavy")}collect(t){(t.type==="gold"||t.type==="art")&&!t.bundle&&(this.heavy.push(t.type),this.app.onWeight(this.weightMul()),this.app.hint("heavy")),(t.type!=="cash"||!t.bundle)&&this.mark(t.type==="cash"?"cash":"loot",t.x,t.z);let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let i=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,a=Math.sin(s.face),r=Math.cos(s.face),o=Re(-.35,.35),l=s.x+a*1.4-r*o,h=s.z+r*1.4+a*o;e.floaters.spawn("+$"+t.value,l,1,h,i,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+a*1.4,1.45,s.z+r*1.4,"combo",.8),e.audio.play("combo",this.combo));let c={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+a*1.4,.8,s.z+r*1.4,{count:t.type==="cash"?4:10,colors:c,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+a*1,1,s.z+r*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+a*1.5,1,s.z+r*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,this.juice(0,1,t.type==="cash"?-1.2:-3,t.type==="cash"?0:-.015,0),zi(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let i=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let a=this.loot.length-1;a>=0;a--){let r=this.loot[a];r.t+=t;let o=r.type==="art"?.9:.62;if(r.st==="fly"){r.vy-=18*t;let c=r.x,u=r.z;r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,this.walkable(Math.floor(r.x),Math.floor(r.z))||(r.x=c,r.z=u,r.vx*=-.5,r.vz*=-.5),r.y<.3&&(r.y=.3,r.vy*=-.45,r.vx*=.6,r.vz*=.6),r.rot+=t*8,r.t>.8&&(r.st="idle")}else if(r.st==="idle")r.y+=(o+Math.sin(this.t*3+r.ph)*.08-r.y)*Math.min(1,t*6),r.rot+=t*1.8,e&&Math.hypot(i.x-r.x,i.z-r.z)<1.5&&(r.st="mag",r.ms=2);else{r.ms+=t*30;let c=i.x-r.x,u=.7-r.y,f=i.z-r.z,x=Math.hypot(c,u,f),d=Math.min(x,r.ms*t);if(r.x+=c/x*d,r.y+=u/x*d,r.z+=f/x*d,r.rot+=t*12,x<.45){this.collect(r),this.loot.splice(a,1);continue}}r.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(r.x+Re(-.2,.2),r.y+Re(0,.25),r.z+Re(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let l=this.lootMeshes[r.type],h=r.st==="mag"?Math.max(.4,1-r.ms*.02):1+(r.type==="art"?0:Math.sin(this.t*6+r.ph)*.06);La.position.set(r.x,r.y,r.z),La.rotation.set(0,r.rot,0),La.scale.setScalar(h*(r.type==="jewel"?1.5:1.25)),La.updateMatrix(),l.setMatrixAt(s[r.type]++,La.matrix)}for(let a in s){let r=this.lootMeshes[a];r.count=s[a],r.instanceMatrix.needsUpdate=!0}}updateProps(t){for(let e of this.doors)if(e.open&&e.t<1){e.t=Math.min(1,e.t+t*1.6);let i=1-Math.pow(1-e.t,3);e.type==="lock"?e.m.group.rotation.y=(e.alongX?1:-1)*1.55*(i+Math.sin(e.t*Math.PI)*.12):e.m.group.position.y=i*(Le-.12)}if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,i=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*i}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,i=e.c,s=this.state==="escape"&&!e.hidden;i.root.visible=s,e.shadow.visible=s,s&&(i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),Xc(i,t,1,this.t),i.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=Ee(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),qo(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let i=this.player,s=this.app;if(this.state==="escape"&&this.heli&&this.heli.group.visible){let d=this.L.exit,v=this.endT,m=this.heli.group.position;if(v<1.1){let p=Math.min(1,v/1.1),y=p*p*(3-2*p);t.position.set(d.x,Yo+y*1.6,d.z+y*.6)}else{let p=Math.min(1,(v-1.1)*1.4);t.position.x+=(d.x+3-t.position.x)*p*e*2,t.position.y+=(6-t.position.y)*e*1.5,t.position.z+=(d.z+7-t.position.z)*e*1.5}t.lookAt(m.x,m.y,m.z),this.fovKick=0;return}if(this.state==="escape"&&!this.L.van){let d=this.L.exit,v=this.endT,m=Math.min(1,Math.max(0,(v-.3)/2)),p=m*m*(3-2*m);t.position.set(d.x,Yo+p*9,d.z+p*3.5),t.rotation.set(-.1-p*1,Math.PI+p*.5,0),this.fovKick=0;return}if(this.state==="escape"){let d=this.van.group.position,v=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(v.x-2.5,1.6,v.z+5)),t.position.x+=(d.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(d.x+.3,.7,d.z),this.fovKick=0;return}if(i.hiding){let d=i.hiding;t.position.set(d.cx+Math.sin(d.face)*.12,Yo-.06,d.cz+Math.cos(d.face)*.12),t.rotation.set(i.pitch+s.shake.y*.06,i.yaw+s.shake.x*.06,0),this.fovKick=Ee(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let d=this.catcher,v=Math.atan2(d.x-i.x,d.z-i.z)-Math.PI;i.yaw+=Pe(i.yaw,v)*Math.min(1,e*8),i.pitch+=(.08-i.pitch)*Math.min(1,e*8)}let a=i.moving,r=Math.abs(Math.sin(i.bob))*.05*a,o=Math.cos(i.bob)*.03*a,l=Math.cos(i.yaw+Math.PI),h=Math.sin(i.yaw+Math.PI),c=-l,u=h;i.roll=Ee(i.roll,-i.strafe*.03*a,8,e),this.fovKick=Ee(this.fovKick,i.dashT>0?12:0,i.dashT>0?25:6,e);let f=s.shake,x=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(i.x+c*o,Yo-(i.crouchK||0)*.42+r*(1-(i.crouchK||0)*.5)-x,i.z+u*o),t.rotation.set(i.pitch+f.y*.06+(this.kickP||0),i.yaw+f.x*.06,i.roll+f.x*.02+(this.kickR||0)+this.sway)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let i=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(i,1,i),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1,this.whooshed=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),this.alarm&&this.alarmT<10&&(this.photoFinish=!0,this.juice(.9,.25,-10,0,0),t.shake.add(.4),t.floaters.spawn("JUST IN TIME!",e.x,1.7,e.z-1.2,"big",1.6),t.audio.play("jackpot")),t.onEscapeStart()}updateHeli(t){let e=this.heli,i=e.group,s=this.L.exit,a=this.endT;i.visible||(i.visible=!0,this.heliV=0,i.position.set(s.x,4.4,s.z-1.2),i.rotation.set(0,0,0)),e.rotor.rotation.y+=t*32,e.tail.rotation.x+=t*40,e.blink.visible=a*2.5%1<.4,e.beam.rotation.z=Math.sin(a*1.3)*.25,a<1.3?i.position.y=4.4+Math.sin(a*3)*.08:(this.heliV=Math.min(14,this.heliV+t*9),i.position.x-=this.heliV*t,i.position.y+=(1.5+this.heliV*.25)*t,i.rotation.z+=(.22-i.rotation.z)*Math.min(1,t*3),i.rotation.x+=(-.12-i.rotation.x)*Math.min(1,t*2)),a>.6&&a<1.4&&this.app.shake.add(t*.25)}updateEscape(t){let e=this.player,i=this.van.group,s=this.app;if(!this.L.van){this.endT+=t,e.hidden||(e.hidden=!0,e.c.root.visible=!1,s.audio.play("creak")),this.endT>.5&&!this.whooshed&&(this.whooshed=!0,s.audio.play(this.heli?"chopper":"dash")),this.heli&&this.updateHeli(t),this.endT>(this.heli?3.6:2.8)&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()));return}this.endT+=t;let a=this.endT;if(a<.4){let r=a/.4;e.x=e.sx+(i.position.x-e.sx)*r,e.z=e.sz+(i.position.z-.3-e.sz)*r,e.y=Math.sin(r*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,i.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));i.scale.x+=(1-i.scale.x)*Math.min(1,t*10),i.scale.y+=(1-i.scale.y)*Math.min(1,t*10),i.scale.z=i.scale.x,a>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),i.position.x+=this.van.vx*t,i.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.burst(i.position.x-1.5,.25,i.position.z,{count:2,colors:[14540253,12303291],speed:1,up:1,size:.22,gravity:-1,life:.6})),a>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;this.mark("alarm",this.player.x,this.player.z);let e=this.app,i=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(this.policeLane.x+40,0,this.policeLane.z),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let o=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?o?16722490:5900816:4054148)}let i=this.police;if(!this.alarm){i.group.visible&&this.state==="play"&&(i.group.position.x+=t*10,i.group.position.x>this.policeLane.x+45&&(i.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(i.red.material.color.setHex(s?16722490:5574682),i.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let a=this.L.exit,r=Math.max(0,this.alarmT/this.alarmTotal);i.group.position.x=this.policeLane.x+2.5+r*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){this.mark("caught",this.player.x,this.player.z);let t=this.app,e=this.player;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,this.juice(.5,.3,-14,.06,.04),t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}bust(t){this.mark("caught",this.player.x,this.player.z);let e=this.time;this.bustCause=this.player.hiding?"hide":t.kind==="owner"?"owner":e-(this.lastDash??-99)<2.5?"dash":e-(this.lastBark??-99)<6?"dog":e-(t.alertAt??e)>3?"los":"cone";let i=this.app;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),zi(this.player.c,.55),this.hitstop=.15,this.juice(.5,.3,-14,.06,-.04),i.shake.add(.7),i.flash("red"),i.audio.play("bust"),i.audio.siren(!1),i.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),i.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,zi(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let i of this.guards)i.state==="alert"&&(i.state="search",i.tx=i.lastX,i.tz=i.lastZ,i.hurry=2.4,i.susp=.5)}cutPower(){let t=this.app,e=this.breaker.group.position;this.powerOff=!0,this.breakProg=0,this.breaker.lever.rotation.x=-2.2,this.breaker.led.material.color.setHex(4054148);for(let i of this.lasers)i.group.visible=!1;for(let i of this.spots)i.pool.visible=i.cone.visible=!1;t.audio.play("powerdown"),t.shake.add(.2),t.particles.burst(e.x,e.y+.3,e.z,{count:24,colors:[16773544,8378623,16777215],speed:3,up:3,size:.04,life:.6}),t.floaters.spawn("LASERS OFF",e.x,1.6,e.z,"big",1.3)}updateSlots(t){for(let e of this.slots){if(e.t<=0){e.top.visible=!1;continue}e.t-=t,e.top.visible=!0,e.top.material.color.setHSL(this.t*2%1,1,.6),e.top.scale.y=1+Math.sin(this.t*30)*.5}}updateSpots(t,e){let i=this.player,s=this.app;for(let a of this.spots){let r=a.def,o=a.len||1,l=(this.t*r.speed+(r.phase||0))%(2*o),h=(l<o?l:2*o-l)/o;if(a.x=a.ax+(a.bx-a.ax)*h,a.z=a.az+(a.bz-a.az)*h,a.pool.position.set(a.x,.03,a.z),a.cone.position.set(a.x,Le/2,a.z),a.fix.position.set(a.x,Le-.08,a.z),this.powerOff)continue;a.cool-=t;let c=e&&!i.hiding&&i.inv<=0&&a.cool<=0&&Math.hypot(i.x-a.x,i.z-a.z)<r.r*.9&&!this.inSmoke(i.x,i.z);a.susp=He(a.susp+(c?t*1.7:-t*.7),0,1),c&&(this.spotHit=!0,a.tickT-=t,a.tickT<=0&&(a.tickT=.22,s.audio.play("tick",1+a.susp)),s.hint("spot")),a.susp>=1&&(a.susp=0,a.cool=5,this.spotted=!0,s.flash("alarm"),s.shake.add(.2),this.triggerAlarm("Caught in the spotlight!"));let f=a.cool>0&&Math.sin(this.t*14)>0?16724032:a.susp>.05?a.susp>.6?16734778:16752704:16773296;a.pool.material.color.setHex(f),a.cone.material.color.setHex(f),a.pool.scale.setScalar(1+a.susp*.15)}}updateLasers(t,e){if(this.powerOff)return;let i=this.player,s=this.app;for(let a of this.lasers){let r=a.def,o=r.on+r.off,l=(this.t+(r.phase||0))%o,h=l<r.on,c=!h&&o-l<.45;if(a.on=h,a.mat.opacity=h?.75+Math.sin(this.t*40)*.15:c&&Math.sin(this.t*50)>0?.35:0,!e||!h||i.hiding)continue;let u=a.alongX?i.x:i.z,f=a.alongX?i.z:i.x;u>a.lo&&u<a.hi&&Math.abs(f-a.line)<.28&&(!this.laserHitT||this.t-this.laserHitT>1.5)&&(this.laserHitT=this.t,this.lasersTripped++,s.audio.play("zap"),s.flash("red"),s.shake.add(.3),s.particles.burst(i.x,.8,i.z,{count:14,colors:[16724032,16777215],speed:2.5,up:2,size:.04,life:.5}),this.spotted=!0,this.triggerAlarm("You tripped a laser!"))}}fakeCheckIn(t){let e=this.app;t.radioCall=2,t.answerProg=0,t.koT+=8,this.radioFaked++,e.audio.play("radioOk"),e.floaters.spawn('"All clear, over."',t.x,1.3,t.z,"big",1.3),e.hintDone("radio")}missedCheckIn(t){let e=this.app;t.radioCall=3,e.audio.play("radio"),e.floaters.spawn('\u{1F4FB} "No answer... sending backup!"',t.x,1.4,t.z,"alert",1.4);let i=null,s=1e9;for(let a of this.guards){if(a===t||a.kind!=="guard"||["ko","getup","sleep","alert","waking"].includes(a.state))continue;let r=Math.hypot(a.x-t.x,a.z-t.z);r<s&&(s=r,i=a)}i&&(t.claimed=!0,i.state="investigate",i.tx=t.x,i.tz=t.z,i.hurry=i.speed*1.8,i.reviveT=t,i.susp=Math.max(i.susp,.7),i.navGoal=-1,e.floaters.spawn("On my way!",i.x,2,i.z,"warn",1.1)),this.app.diff==="hard"&&this.app.mode!=="daily"&&this.app.mode!=="tutorial"&&this.triggerAlarm("A guard missed his radio check-in!")}pullSlot(t){let e=this.app,i=this.def.values;t.used=!0,t.prog=0,t.t=3,e.audio.play("jackpot"),e.shake.add(.15),e.floaters.spawn("JACKPOT!",t.cx,1.9,t.cz+t.face*.6,"big",1.4);for(let s=0;s<4;s++)setTimeout(()=>e.particles.burst(t.cx,1.3,t.cz+t.face*.4,{count:10,colors:[16766810,16773544,16777215],speed:2.2,up:3.5,size:.06,life:.9}),s*250);this.makeNoise(t.cx,t.cz,8,null,"Jackpot!?"),this.loot.push({type:"cash",x:t.cx,y:1,z:t.cz+t.face*.5,vx:(Math.random()-.5)*2,vy:4,vz:t.face*2.2,st:"fly",t:0,value:i.cash,ph:0,ms:0,s:1,rot:0})}pickpocket(t){let e=this.app,i=this.player,s=Math.sin(i.face),a=Math.cos(i.face);if(this.picks++,this.pocketProg=0,t.spareKey){if(t.spareKey=!1,t.keyMesh.visible=!1,!this.hasKey){this.hasKey=!0;for(let r of this.keyMeshes)r.m.visible=!1;e.onKey(!0),e.hint("door")}e.floaters.spawn("SPARE KEYCARD!",t.x,1.6,t.z,"big",1.2),e.audio.play("gold")}if(t.wallet>0){let r=t.wallet;t.wallet=0,t.walletMesh.visible=!1,this.lootGot+=r,this.got.cash++,e.floaters.spawn("+$"+r+" WALLET",i.x+s*1.2,1.1,i.z+a*1.2,"cash",1),e.particles.burst(i.x+s*.9,1,i.z+a*.9,{count:5,colors:[7327610,10216346],speed:1.2,up:1.4,size:.09,life:1,shape:"bill",gravity:3,drag:2.5}),e.audio.play("pick",8),e.onLoot(!1)}i.grabT=1,e.floaters.spawn("?",t.x,2,t.z,"q",.7),e.hintDone("pocket")}smashCase(t){let e=this.app,i=this.def.values;t.smashed=!0,t.prog=0,this.casesSmashed++,t.glass.visible=!1,t.gems.visible=!1,e.audio.play("glass"),e.shake.add(.28),this.hitstop=.06,this.juice(0,1,-4,-.06,(Math.random()-.5)*.08),e.particles.burst(t.cx,1.05,t.cz,{count:26,colors:[14677247,12576511,16777215],speed:3.2,up:3,size:.07,life:.9,spin:2}),e.particles.burst(t.cx,.95,t.cz,{count:8,colors:[5037311,16732026,16766810],speed:1.5,up:2.5,size:.05,life:.7}),this.makeNoise(t.cx,t.cz,3.6,null);for(let s=0;s<this.caseLoot;s++){let a=Math.atan2(this.player.x-t.cx,this.player.z-t.cz)+(s-.5)*.9;this.loot.push({type:"jewel",x:t.cx,y:1,z:t.cz,vx:Math.sin(a)*Re(1.5,2.4),vy:Re(3.5,5),vz:Math.cos(a)*Re(1.5,2.4),st:"fly",t:0,value:i.jewel,ph:s,ms:0,s:1,rot:s})}e.floaters.spawn("SMASH!",t.cx,1.6,t.cz,"ko",.8)}startPick(t){this.picking={d:t,pin:0,t:Math.random()*6,speed:this.tut?1.7:2.2,w:(this.tut?.36:.26)*this.gear.pickW,zone:.5,pos:.5,slips:0,cool:0},this.newPinZone(),this.app.audio.play("click"),this.app.onPick(this.picking)}newPinZone(){let t=this.picking,e;do e=.18+Math.random()*.64;while(Math.abs(e-t.pos)<.25);t.zone=e}stopPick(){this.picking=null,this.app.onPick(null)}updatePicking(t,e){let i=this.picking,s=this.player,a=this.app,r=i.d;if(e.move(Ei),e.consumeDash(),e.consumeThrow(),e.consumeSmoke(),s.vx=s.vz=0,s.moving=0,s.crack=!0,Math.hypot(Ei.x,Ei.y)>.5){this.stopPick();return}if(i.t+=t*i.speed,i.cool-=t,i.pos=.5+.5*Math.sin(i.t),e.consumeAct()&&i.cool<=0)if(Math.abs(i.pos-i.zone)<i.w/2){if(i.pin++,a.audio.play("pin",i.pin),a.shake.add(.05),a.particles.burst(r.x+.5,.72,r.y+.5,{count:4,colors:[16773544,16777215],speed:1,up:1,size:.025,life:.3}),i.pin>=3){i.slips===0&&(this.cleanPick=!0),this.stopPick(),this.openDoor(r);return}i.w*=.78,i.speed*=1.25,this.newPinZone()}else i.slips++,i.cool=.45,a.audio.play("slip"),a.shake.add(.15),a.floaters.spawn("*rattle*",r.x+.5,1.2,r.y+.5,"warn",.8),this.makeNoise(r.x+.5,r.y+.5,3.4,null);a.onPick(i),a.setPrompt("picking")}openDoor(t){let e=this.app,i=t.y*this.L.W+t.x;t.open=!0,t.t=0,this.L.walk[i]=1,this.L.opaque[i]=0;for(let s of this.guards)s.navGoal=-1;if(t.type==="lock"){e.audio.play("creak"),e.hintDone("pick"),e.floaters.spawn("UNLOCKED!",t.x+.5,1.5,t.y+.5,"big",1.2),e.particles.burst(t.x+.5,.75,t.y+.5,{count:10,colors:[14267482,16777215],speed:1.5,up:1.5,size:.03,life:.5});return}t.m.led.material.color.setHex(4054148),e.audio.play("disarm"),e.audio.play("creak"),e.shake.add(.25),e.particles.burst(t.x+.5,1.5,t.y+.5,{count:18,colors:[14212842,16777215],speed:1.5,up:.5,size:.06,life:.8}),e.floaters.spawn("ACCESS GRANTED",t.x+.5,1.6,t.y+.5,"big",1.2)}objectiveTarget(){let t=this.L;if(this.hasStash)return{x:t.exit.x,z:t.exit.z,label:t.van?"VAN":"ROOF HATCH"};if(this.tut&&this.lootGot===0){let s=this.player,a=null,r=1e9;for(let o of this.loot){let l=Math.hypot(o.x-s.x,o.z-s.z);o.type==="cash"&&l<r&&(r=l,a=o)}if(a)return{x:a.x,z:a.z,label:"CASH"}}let e=this.doors.find(s=>!s.open&&s.type!=="lock");if(e&&!this.hasKey){let s=this.keyMeshes.find(a=>a.m.visible);if(s)return{x:s.x+.5,z:s.y+.5,label:"KEYCARD"}}if(e)return{x:e.x+.5,z:e.y+.5,label:"DOOR"};let i=this.doors.find(s=>!s.open&&s.type==="lock");return i?{x:i.x+.5,z:i.y+.5,label:"LOCKED DOOR"}:{x:t.safe.x+.5,z:t.safe.y+.5,label:(this.def.safeName||"safe").toUpperCase()}}updateObjective(){let t=this.doors.find(s=>!s.open&&s.type!=="lock"),e=this.doors.find(s=>!s.open&&s.type==="lock"),i=this.hasStash?this.L.van?"Escape to the van!":"Escape through the roof hatch!":t&&!this.hasKey?"Find the keycard!":t?"Open the vault door!":e?"Pick the lock!":`Crack the ${this.def.safeName||"safe"}!`;i!==this.objText&&(this.objText=i,this.app.setObjective(i))}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let i=e.check(this,t);i!=="pending"&&(e.st=i,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,i=this.contracts.reduce((o,l)=>o+(l.st==="ok"?l.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),a=!this.spotted,r=[!0,e>=.7,a];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:a,kos:this.kos,stars:r,timeBonus:s,ghostBonus:a?1e3:0,contracts:this.contracts,contractBonus:i,diff:this.daily?"Daily "+this.daily.label:this.D.label,mult:this.D.mult,daily:!!this.daily,score:Math.round((this.lootGot+s+(a?1e3:0)+i)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var gn=n=>440*Math.pow(2,(n-69)/12),qg=[[[0,0],[-4,1],[3,1],[-2,1]],[[0,0],[5,0],[7,0],[0,0]],[[0,0],[-2,1],[-4,1],[-5,1]],[[0,0],[-4,1],[5,0],[7,1]]],Yg=[[1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0],[1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0],[1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0]],Jo=[{prog:0,tr:0,bass:0,k:1},{prog:1,tr:2,bass:1,k:1.02},{prog:2,tr:-3,bass:2,k:.96},{prog:3,tr:-5,bass:0,k:.94},{prog:0,tr:3,bass:2,k:1.08},{prog:2,tr:1,bass:1,k:1},{prog:1,tr:-2,bass:2,k:1.1},{prog:3,tr:4,bass:1,k:1}],jo=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.master.connect(this.lp).connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8*(this.sfxVol??1),this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32*(this.musVol??1),this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let r=0;r<s;r++)a[r]=Math.random()*2-1;this.apply(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setVolumes(t,e){this.musVol=t,this.sfxVol=e,this.mus&&(this.mus.gain.value=.32*t,this.sfx.gain.value=.8*e)}setMuffle(t){!this.lp||this.muffled===t||(this.muffled=t,this.lp.frequency.setTargetAtTime(t?900:2e4,this.ctx.currentTime,t?.03:.15))}setMuted(t){this.muted=t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,i={}){let s=this.ctx,a=s.currentTime+(i.delay||0),r=s.createOscillator(),o=s.createGain();r.type=i.type||"square",r.frequency.setValueAtTime(t,a),i.slide&&r.frequency.exponentialRampToValueAtTime(i.slide,a+e);let l=i.vol??.15;o.gain.setValueAtTime(1e-4,a),o.gain.linearRampToValueAtTime(l,a+(i.attack||.006)),o.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(o).connect(i.dest||this.sfx),r.start(a),r.stop(a+e+.05)}noise(t,e={}){let i=this.ctx,s=i.currentTime+(e.delay||0),a=i.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let r=i.createBiquadFilter();r.type=e.type||"bandpass",r.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&r.frequency.exponentialRampToValueAtTime(e.slide,s+t),r.Q.value=e.q??1;let o=i.createGain(),l=e.vol??.2;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(l,s+(e.attack||.005)),o.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(r).connect(o).connect(e.dest||this.sfx),a.start(s,Math.random()*.5),a.stop(s+t+.05)}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let i=(a,r,o)=>this.tone(a,r,o),s=(a,r)=>this.noise(a,r);switch(t){case"step":s(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":s(.28,{vol:.3,freq:500,slide:3e3,q:2}),i(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let a=880*Math.pow(2,Math.min(e,14)/12);i(a,.07,{vol:.1}),i(a*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((a,r)=>i(a,.18,{type:"triangle",vol:.14,delay:r*.045})),s(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((a,r)=>i(a,.25,{type:"sine",vol:.16,delay:r*.06}));break;case"art":[523,659,784,1046,1318].forEach((a,r)=>i(a,.2,{type:"triangle",vol:.13,delay:r*.05}));break;case"ko":i(170,.28,{type:"sine",slide:45,vol:.55}),s(.14,{vol:.35,freq:900}),i(560,.12,{slide:260,vol:.12}),i(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":i(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":i(880,.09,{vol:.16}),i(1320,.16,{vol:.16,delay:.1});break;case"lost":i(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":s(.03,{vol:.22,freq:4e3,type:"highpass"}),i(1500+e*600,.04,{vol:.05});break;case"safe":i(110,.45,{type:"sine",slide:40,vol:.6}),s(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((a,r)=>i(a,.16,{vol:.09,delay:.1+r*.05}));for(let a=0;a<12;a++)i(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+a*.05});break;case"win":[523,659,784,1046].forEach((a,r)=>i(a,.22,{vol:.12,delay:r*.1})),[523,659,784].forEach(a=>i(a*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":i(392,.3,{type:"sawtooth",slide:370,vol:.12}),i(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),i(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let a=0;a<4;a++)i(a%2?660:880,.22,{type:"square",vol:.05,delay:a*.22});break;case"alarm":for(let a=0;a<6;a++)i(a%2?700:950,.15,{vol:.09,delay:a*.15});break;case"wake":i(300,.25,{type:"sawtooth",slide:520,vol:.1}),i(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"thunder":s(.25,{vol:.5,freq:900,type:"lowpass",q:.5}),s(2.8,{vol:.55,freq:220,slide:60,type:"lowpass",q:.7,attack:.08}),s(1.6,{vol:.3,freq:120,type:"lowpass",delay:.5,attack:.3});break;case"tvon":i(60,.4,{type:"sawtooth",vol:.06}),s(.35,{vol:.12,freq:5e3,type:"highpass",delay:.05});break;case"tv":{let a=Math.max(.05,e);i(180+Math.random()*260,.1+Math.random()*.08,{type:"sawtooth",vol:.035*a,slide:150+Math.random()*300}),Math.random()<.3&&i(600+Math.random()*500,.08,{type:"triangle",vol:.03*a,delay:.05}),s(.12,{vol:.03*a,freq:1600,q:2});break}case"mumble":for(let a=0;a<4;a++)i(150+Math.random()*90,.07,{type:"triangle",vol:.04,delay:a*.09,slide:120+Math.random()*80});break;case"clack":s(.05,{vol:.16,freq:260,type:"lowpass"}),s(.05,{vol:.13,freq:240,type:"lowpass",delay:.13}),i(70,.06,{type:"sine",vol:.08}),i(65,.06,{type:"sine",vol:.07,delay:.13});break;case"vent":i(140,.12,{type:"square",vol:.12}),s(.12,{vol:.3,freq:2200,q:3});for(let a=0;a<9;a++)s(.11,{vol:.16,freq:600+a%3*250,q:4,delay:.25+a*.14});break;case"clank":i(180,.1,{type:"square",vol:.13}),i(95,.18,{type:"triangle",vol:.14,delay:.03}),s(.16,{vol:.3,freq:2600,q:3});break;case"chopper":for(let a=0;a<34;a++){let r=a<8?a/8:1-(a-8)/30;s(.07,{vol:.08+r*.32,freq:160+r*120,type:"lowpass",delay:a*.09})}s(3,{vol:.08,freq:2400,type:"bandpass",q:.8,attack:.6});break;case"engine":s(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),i(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":i(700,.05,{vol:.08});break;case"star":i(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),i(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"throw":s(.12,{vol:.15,freq:1800,slide:900,q:1.5}),i(900,.06,{type:"triangle",vol:.06});break;case"clink":{let a=.05+e*.12;i(2400+Math.random()*300,.12,{type:"triangle",vol:a}),i(3700+Math.random()*300,.18,{type:"sine",vol:a*.7,delay:.02}),e>.5&&i(3100,.25,{type:"sine",vol:a*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((a,r)=>i(a,.12,{type:"square",vol:.07,delay:r*.06}));break;case"contract":[784,988,1175,1568].forEach((a,r)=>i(a,.16,{type:"triangle",vol:.12,delay:r*.07})),i(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":s(.35,{vol:.12,freq:300,slide:900,q:8}),i(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":i(62,.12,{type:"sine",slide:40,vol:.45}),i(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"woof":i(330,.09,{type:"sawtooth",slide:170,vol:.22}),s(.08,{freq:800,vol:.18,q:2}),i(300,.11,{type:"sawtooth",slide:150,vol:.2,delay:.15}),s(.09,{freq:700,vol:.16,q:2,delay:.15});break;case"sniff":for(let a=0;a<3;a++)s(.04,{freq:2500,vol:.05,q:3,delay:a*.07});break;case"zap":i(1400,.25,{type:"sawtooth",slide:200,vol:.18}),s(.2,{freq:3e3,vol:.2,type:"highpass"});break;case"powerdown":i(440,.8,{type:"sawtooth",slide:40,vol:.16}),s(.15,{freq:2e3,vol:.25,q:.7}),i(60,.5,{type:"sine",vol:.4,delay:.05});break;case"scream":i(900,.45,{type:"sawtooth",slide:1400,vol:.09}),i(1100,.4,{type:"square",slide:1600,vol:.04,delay:.05});break;case"smoke":i(160,.12,{type:"sine",slide:60,vol:.4}),s(1.4,{freq:4e3,slide:900,vol:.22,q:.6}),s(.5,{freq:900,vol:.12,type:"lowpass",delay:.05});break;case"pin":i(2400+e*300,.05,{type:"square",vol:.08}),i(1600+e*200,.08,{type:"triangle",vol:.1,delay:.03}),s(.03,{freq:6e3,vol:.1,type:"highpass"});break;case"slip":s(.18,{freq:2200,vol:.22,q:3}),i(320,.15,{type:"square",slide:180,vol:.08}),s(.12,{freq:1500,vol:.15,q:4,delay:.08});break;case"glass":s(.5,{freq:5e3,vol:.35,type:"highpass"}),s(.25,{freq:2500,vol:.25,q:.8,delay:.02});for(let a=0;a<8;a++)i(2500+Math.random()*3500,.12,{type:"triangle",vol:.06,delay:.03+a*.035});i(140,.2,{type:"sine",slide:60,vol:.3});break;case"radio":s(.35,{freq:1800,vol:.12,q:1.2}),i(1200,.05,{type:"square",vol:.05,delay:.02}),i(900,.05,{type:"square",vol:.05,delay:.12}),s(.15,{freq:2400,vol:.08,q:2,delay:.25});break;case"radioOk":s(.12,{freq:1800,vol:.12,q:1.2}),i(1400,.06,{type:"square",vol:.06,delay:.05}),i(1800,.08,{type:"square",vol:.06,delay:.13});break;case"jackpot":for(let a=0;a<14;a++)i([1046,1318,1568,2093][a%4]*(a>9?1.5:1),.1,{type:"square",vol:.07,delay:a*.08});for(let a=0;a<18;a++)i(2400+Math.random()*1800,.06,{type:"triangle",vol:.05,delay:.3+a*.07});i(523,.6,{type:"triangle",vol:.1,delay:1.1});break;case"nope":i(220,.12,{vol:.08}),i(180,.15,{vol:.08,delay:.1});break;case"combo":i(1320+e*80,.12,{type:"triangle",vol:.1});break}}rumble(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rb){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),a=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=.5,s.type="lowpass",s.frequency.value=260,a.gain.value=1e-4,a.gain.setTargetAtTime(.16,e.currentTime,.6),i.connect(s).connect(a).connect(this.sfx),i.start(),this.rb={src:i,g:a}}else if(!t&&this.rb){let e=this.rb,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rb=null}}}rain(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rn){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),a=e.createBiquadFilter(),r=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,s.type="lowpass",s.frequency.value=1400,a.type="highpass",a.frequency.value=220,r.gain.value=1e-4,r.gain.setTargetAtTime(.09,e.currentTime,.6),i.connect(s).connect(a).connect(r).connect(this.sfx),i.start(),this.rn={src:i,g:r}}else if(!t&&this.rn){let e=this.rn,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rn=null}}}siren(t){if(this.ctx){if(t&&!this.sir){let e=this.ctx,i=e.createOscillator(),s=e.createOscillator(),a=e.createGain(),r=e.createGain();i.type="sawtooth",i.frequency.value=780,s.type="square",s.frequency.value=1.6,a.gain.value=170,s.connect(a).connect(i.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,r.gain.value=1e-4,r.gain.setTargetAtTime(.045,e.currentTime,.2),i.connect(o).connect(r).connect(this.sfx),i.start(),s.start(),this.sir={o:i,lfo:s,g:r}}else if(!t&&this.sir){let e=this.sir,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.1),e.o.stop(i+.5),e.lfo.stop(i+.5),this.sir=null}}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=this.mode==="menu"?0:this.tension|0,s=60/(this.mode==="menu"?96:([104,110,128,140][e]||104)*(Jo[this.theme||0]||Jo[0]).k)/4;for(this.lvl=this.lvl==null?e:this.lvl+Math.sign(e-this.lvl)*0,this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.step%16===0&&(this.lvl=e),this.mode==="menu"?this.menuBeat(this.step,this.nextT-t.currentTime):this.beat(this.step,this.nextT-t.currentTime,this.lvl),this.nextT+=s,this.step=(this.step+1)%64}pad(t,e,i,s){for(let a of t)for(let r of[-5,5]){let o=this.ctx,l=o.currentTime+i,h=o.createOscillator(),c=o.createGain(),u=o.createBiquadFilter();h.type="sawtooth",h.frequency.value=gn(a),h.detune.value=r,u.type="lowpass",u.frequency.value=900,c.gain.setValueAtTime(1e-4,l),c.gain.linearRampToValueAtTime(s,l+e*.35),c.gain.linearRampToValueAtTime(1e-4,l+e),h.connect(u).connect(c).connect(this.mus),h.start(l),h.stop(l+e+.05)}}beat(t,e,i){let s=this.mus,a=(p,y,b)=>this.tone(p,y,{...b,delay:e,dest:s}),r=(p,y)=>this.noise(p,{...y,delay:e,dest:s}),o=Jo[this.theme||0]||Jo[0],l=qg[o.prog],h=t>>4&3,[c,u]=l[h],f=45+o.tr+c,x=l.map(([p,y])=>[45+o.tr+p+12,45+o.tr+p+(y?16:15),45+o.tr+p+19]),d=f+(i>=2?12:0),v=t&15,m=Yg[o.bass];if(m[v]&&a(gn(d+(v===6?7:v===13?5:0)),.18,{type:"triangle",vol:.3}),m[v]&&i>=1&&a(gn(d+12),.08,{type:"square",vol:.035}),v%4===2&&r(.03,{vol:.07,freq:7e3,type:"highpass"}),v===0&&this.pad(x[h],16*(60/(([104,110,128,140][i]||104)*o.k)/4),e,i>=2?.012:.018),i>=1){let p=x[h],y=v%3;v%2===0&&a(gn(p[y]+12),.1,{type:"sine",vol:.06}),(v===4||v===12)&&r(.04,{vol:.12,freq:2500,q:3})}i>=2&&(v%4===0&&a(120,.15,{type:"sine",slide:40,vol:.45}),(v===4||v===12)&&(r(.12,{vol:.18,freq:1800,q:.8}),a(200,.08,{type:"triangle",slide:120,vol:.12})),v%2===1&&r(.02,{vol:.06,freq:9e3,type:"highpass"}),v===14&&a(gn(d+24),.1,{type:"square",vol:.04})),i>=3&&(v===0||v===3||v===6)&&(a(gn(d+24),.12,{type:"sawtooth",vol:.05}),a(gn(d+27),.12,{type:"sawtooth",vol:.04}))}menuBeat(t,e){let i=this.mus,s=(u,f,x)=>this.tone(u,f,{...x,delay:e,dest:i}),a=(u,f)=>this.noise(u,{...f,delay:e,dest:i}),r=[[57,60,64,67],[50,53,57,60],[52,55,59,62],[57,60,64,67]],o=[45,38,40,45],l=t>>4&3,h=t&15,c=o[l];(h===0||h===7||h===10)&&s(gn(c),.25,{type:"triangle",vol:.3}),h===0&&this.pad(r[l],2.4,e,.014),(h===4||h===12)&&a(.05,{vol:.1,freq:2600,q:2.5}),h%2===0&&a(.025,{vol:.05,freq:8e3,type:"highpass"}),(h===2||h===6||h===9||h===14)&&s(gn(r[l][(h>>1)%4]+12),.12,{type:"sine",vol:.05})}stepSound(t,e=1,i=0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.sfx;if(i){let o=this.ctx.createStereoPanner();o.pan.value=i,o.connect(this.sfx),s=o}let a=(o,l)=>this.noise(o,{...l,vol:(l.vol||.1)*e,dest:s}),r=(o,l,h)=>this.tone(o,l,{...h,vol:(h.vol||.1)*e,dest:s});switch(t){case"carpet":a(.07,{vol:.05,freq:300,type:"lowpass"});break;case"tile":a(.03,{vol:.09,freq:3200,q:1.5}),r(900+Math.random()*200,.03,{type:"triangle",vol:.03});break;case"grass":a(.09,{vol:.07,freq:1400,q:.6});break;case"road":a(.06,{vol:.08,freq:900,q:.9});break;case"boot":a(.06,{vol:.1,freq:450,type:"lowpass"}),r(110,.06,{type:"sine",vol:.08});break;default:a(.05,{vol:.07,freq:600,type:"lowpass"}),r(170+Math.random()*30,.05,{type:"sine",vol:.06})}}};var Ia={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},$g=new Set([...Object.keys(Ia),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),Fu=2.4,Qo=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",l=>{$g.has(l.code)&&l.preventDefault(),this.setTouch(!1),!l.repeat&&(Ia[l.code]&&(this.k[Ia[l.code]]=1),(l.code==="Space"||l.code.startsWith("Shift"))&&(this.dashP=!0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!0,this.actP=!0),(l.code==="Escape"||l.code==="KeyP")&&this.emit("pause"),l.code==="KeyR"&&this.emit("restart"),l.code==="KeyM"&&this.emit("mute"),(l.code==="KeyQ"||l.code==="KeyG")&&(this.throwP=!0),(l.code==="KeyC"||l.code==="KeyX")&&(this.smokeP=!0),(l.code==="KeyZ"||l.code==="ControlRight")&&(this.crouchP=!0),this.emit("key",l.code))}),addEventListener("keyup",l=>{Ia[l.code]&&(this.k[Ia[l.code]]=0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",l=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}l.button===0&&(this.act=!0,this.actP=!0),l.button===2&&(this.dashP=!0),l.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",l=>{l.button===0&&(this.act=!1),this.dragLook=!1}),addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{if(this.active&&(this.locked||this.lockFailed&&this.dragLook)){let h=l.movementX||0,c=l.movementY||0;if(performance.now()-(this.lockT||0)<150||Math.abs(h)>260||Math.abs(c)>260)return;this.lx+=h,this.ly+=c}}),addEventListener("pointermove",l=>{l.pointerType==="mouse"&&(l.movementX||l.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let l=this.locked;this.locked=document.pointerLockElement===e,this.locked&&!l&&(this.lockT=performance.now(),this.lx=0,this.ly=0),l&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let i=t.joyzone;i.addEventListener("pointerdown",l=>{if(this.joy.id===-1){l.preventDefault(),this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=0,this.joy.y=0;try{i.setPointerCapture(l.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${l.clientX}px,${l.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),i.addEventListener("pointermove",l=>{if(l.pointerId!==this.joy.id)return;let h=56,c=l.clientX-this.joy.ox,u=l.clientY-this.joy.oy,f=Math.hypot(c,u);f>h&&(this.joy.ox+=c/f*(f-h),this.joy.oy+=u/f*(f-h),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,c=c/f*h,u=u/f*h),this.joy.x=c/h,this.joy.y=u/h,t.knob.style.transform=`translate(calc(-50% + ${c}px),calc(-50% + ${u}px))`});let s=l=>{l.pointerId===this.joy.id&&this.joyEnd()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s);let a=t.lookzone;a.addEventListener("pointerdown",l=>{if(this.look.id===-1){l.preventDefault(),this.look.id=l.pointerId,this.look.x=l.clientX,this.look.y=l.clientY;try{a.setPointerCapture(l.pointerId)}catch{}}}),a.addEventListener("pointermove",l=>{l.pointerId===this.look.id&&(this.lx+=(l.clientX-this.look.x)*Fu,this.ly+=(l.clientY-this.look.y)*Fu,this.look.x=l.clientX,this.look.y=l.clientY)});let r=l=>{l.pointerId===this.look.id&&(this.look.id=-1)};a.addEventListener("pointerup",r),a.addEventListener("pointercancel",r);let o=(l,h,c)=>{l.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),l.classList.add("down"),h()});let u=()=>{l.classList.remove("down"),c&&c()};l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u),l.addEventListener("pointerleave",u)};o(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),o(t.bDash,()=>{this.dashP=!0}),o(t.bThrow,()=>{this.throwP=!0}),o(t.bSmoke,()=>{this.smokeP=!0}),o(t.bSneak,()=>{this.crouchP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),i=(this.k.d||0)-(this.k.u||0);if(e||i){let s=Math.hypot(e,i);e/=s,i/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let a=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*a,i=this.joy.y*a}}return t.x=e,t.y=i,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeCrouch(){let t=this.crouchP;return this.crouchP=!1,t}consumeSmoke(){let t=this.smokeP;return this.smokeP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.actP=!1,this.dashP=!1,this.throwP=!1,this.smokeP=!1,this.lx=0,this.ly=0}};var ka=new Ae,zu=new Ot,tl=new X,el=class{constructor(t,e=360){this.max=e,this.mesh=new qn(new le(1,1,1),new Rt,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,zu.set(16777215)),t.add(this.mesh),this.list=[]}burst(t,e,i,s={}){let a=s.count??10,r=s.colors||[16777215];for(let o=0;o<a&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,h=Re(.4,1)*(s.speed??3);this.list.push({x:t+Re(-1,1)*(s.spread??.1),y:e,z:i+Re(-1,1)*(s.spread??.1),vx:Math.cos(l)*h,vy:Re(.5,1)*(s.up??3),vz:Math.sin(l)*h,g:s.gravity??9,life:Re(.6,1)*(s.life??.7),t:0,s:Re(.6,1.1)*(s.size??.12),c:r[Math.random()*r.length|0],rx:Re(0,6),rs:Re(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?Re(2,5):0})}}update(t){let e=this.list,i=0;for(let s=e.length-1;s>=0;s--){let a=e[s];if(a.t+=t,a.t>=a.life){e[s]=e[e.length-1],e.pop();continue}}for(let s of e){let a=Math.exp(-s.drag*t);s.vx*=a,s.vz*=a,s.vy-=s.g*t,s.flut&&(s.vy=Math.max(s.vy,-.9),s.vx+=Math.sin(s.t*s.flut*2)*t*1.5),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.03&&(s.y=.03,s.vy*=-.4,s.vx*=.7,s.vz*=.7),s.rx+=s.rs*t;let r=1-s.t/s.life,o=s.s*Math.min(1,r*2.5);ka.position.set(s.x,s.y,s.z),ka.rotation.set(s.flut?Math.sin(s.rx)*.8:s.rx,s.rx*.7,s.flut?Math.cos(s.rx*.7)*.6:0),ka.scale.set(o*s.kx,o*s.ky,o*s.kz),ka.updateMatrix(),this.mesh.setMatrixAt(i,ka.matrix),this.mesh.setColorAt(i,zu.setHex(s.c)),i++}this.mesh.count=i,i&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},il=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t*(this.scale??1))}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},nl=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,i,s,a="",r=1){let o=this.pool.pop();o||(o=document.createElement("div"),this.layer.appendChild(o)),o.className="ft "+a,o.textContent=t,o.style.opacity="1",o.style.display="",o.style.animation="none",o.offsetWidth,o.style.animation="",this.live.push({el:o,x:e,y:i,z:s,t:0,life:r})}update(t,e,i,s){for(let a=this.live.length-1;a>=0;a--){let r=this.live[a];if(r.t+=t,r.y+=t*.9,r.t>=r.life){r.el.style.display="none",this.pool.push(r.el),this.live.splice(a,1);continue}tl.set(r.x,r.y,r.z).project(e),r.el.style.visibility=tl.z>1?"hidden":"",r.el.style.transform=`translate(${(tl.x+1)/2*i}px,${(1-tl.y)/2*s}px) translate(-50%,-50%)`,r.t>r.life*.6&&(r.el.style.opacity=String(1-(r.t-r.life*.6)/(r.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var sl="safehouse-heist-v1",Bi=null,al=!1,Da=!1,se={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let n=window.CrazyGames&&window.CrazyGames.SDK;if(!n)return;await Promise.race([n.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=n.environment,(this.env==="crazygames"||this.env==="local")&&(Bi=n,this.available=!0)}catch(n){console.warn("[SDK] not available:",n&&n.message)}},_c(n){if(Bi)try{n(Bi)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(n=>n.game.loadingStart())},loadingStop(){this._c(n=>n.game.loadingStop())},gameplayStart(){al||(al=!0,this._c(n=>n.game.gameplayStart()))},gameplayStop(){al&&(al=!1,this._c(n=>n.game.gameplayStop()))},happytime(){this._c(n=>n.game.happytime())},ad(n){return new Promise(t=>{if(!Bi||!Da){t(!1);return}let e=!1,i=s=>{e&&this.hooks.adEnd(),t(s)};try{Bi.ad.requestAd(n,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>i(!0),adError:s=>{console.warn("[SDK] ad error",s),i(!1)}})}catch{i(!1)}})},load(){try{let n=null;return Bi&&Bi.data&&(n=Bi.data.getItem(sl)),n==null&&(n=localStorage.getItem(sl)),n&&JSON.parse(n)||{}}catch{return{}}},store(n){let t=JSON.stringify(n);try{Bi&&Bi.data&&Bi.data.setItem(sl,t)}catch{}try{localStorage.setItem(sl,t)}catch{}}};var tn=[{id:"safehouse",num:1,owner:!0,dog:!0,name:"Safe House",load:()=>import("./c-FL2VXH4R.js")},{id:"bank",num:2,name:"The Bank",unlock:"safehouse",load:()=>import("./c-UA7ROTIC.js")},{id:"jewelry",num:3,name:"Jewelry Store",unlock:"bank",load:()=>import("./c-Y3VF5QVP.js")},{id:"museum",num:4,dog:!0,name:"The Museum",unlock:"jewelry",load:()=>import("./c-EHV74VXP.js")},{id:"casino",num:5,name:"The Casino",unlock:"museum",load:()=>import("./c-TLRJETZW.js")},{id:"penthouse",num:6,owner:!0,name:"The Penthouse",unlock:"casino",load:()=>import("./c-VIC3C7Q5.js")},{id:"train",num:7,name:"Night Train",unlock:"penthouse",load:()=>import("./c-NPY7BHPC.js")},{id:"warehouse",num:8,dog:!0,name:"The Warehouse",unlock:"train",load:()=>import("./c-54A6G2KB.js")},{id:"mansion",num:9,name:"Mansion Gala",unlock:"warehouse",load:()=>import("./c-IMNGXOEP.js")}],$c={};async function Bu(n){return $c[n]||($c[n]=(await tn[n].load()).default),$c[n]}var Kg={sleeve:3123354,sleeve2:2526336,cuff:2060134,glove:2763837,glove2:3816786,bar:14168890,barHi:16747146,band:15905076},rl=class{constructor(){this.scene=new Xn,this.camera=new Ze(60,1,.01,10),this.hemi=new $n(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Kn(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new Me({vertexColors:!0});this.root=new Ft,this.scene.add(this.root),this.R=new Ft,this.R.position.set(.2,-.27,0),this.R.rotation.y=.16,this.root.add(this.R),this.L=new Ft,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L),this.setOutfit(null),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}setOutfit(t){t=t||Kg;let e=this.mat;for(let h of this.parts||[])h.parent.remove(h),h.geometry.dispose();let i=h=>{let c=new Dt;if(c.box(0,-.075,-.285,.14,.14,.17,t.sleeve,{faces:63}),c.box(0,-.082,-.24,.152,.152,.05,t.sleeve2,{faces:63}),c.box(0,-.08,-.36,.148,.148,.1,t.sleeve,{faces:63}),c.box(0,-.082,-.44,.155,.155,.07,t.cuff,{faces:63}),c.box(0,-.082,-.448,.158,.02,.05,t.band,{faces:63}),h){c.box(0,-.065,-.5,.12,.13,.05,t.glove,{faces:63}),c.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),c.box(0,-.07,-.57,.15,.06,.13,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.055+u*.037,-.072,-.67,.032,.05,.09,t.glove,{faces:63,top:t.glove2});c.box(.09,-.07,-.56,.045,.05,.08,t.glove,{faces:63,ry:-.5})}else{c.box(0,-.07,-.56,.13,.12,.14,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.045+u*.03,-.01,-.6,.027,.03,.05,t.glove2,{faces:63});c.box(-.07,-.04,-.55,.04,.05,.08,t.glove,{faces:63})}return c.build()},s=new vt(i(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let a=new Dt,r=12108496,o=8029334;a.box(0,-.2,0,.034,.08,.034,r,{faces:63}),a.box(0,-.235,.012,.03,.04,.02,o,{faces:63}),a.box(0,-.12,0,.042,.42,.042,t.bar,{faces:63}),a.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),a.box(0,.3,0,.038,.07,.038,r,{faces:63}),a.box(0,.36,-.035,.036,.036,.1,r,{faces:63,top:14673647}),a.box(0,.33,-.095,.034,.05,.03,r,{faces:63}),a.box(0,.305,-.1,.03,.03,.022,r,{faces:63}),a.box(.02,-.05,.022,.006,.3,.002,t.barHi,{faces:16}),this.bar=new vt(a.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.75,.95,.75),this.bar.rotation.set(-.35,0,-.25),this.R.add(this.bar);let l=new vt(i(!0),e);l.scale.set(.56,.6,1),this.L.add(l),this.parts=[s,this.bar,l]}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let i=this.R,s=this.L;this.swX=Ee(this.swX,He(-e.lookX*9e-4,-.06,.06),10,t),this.swY=Ee(this.swY,He(e.lookY*9e-4,-.06,.06),10,t),this.down=Ee(this.down,e.busted?.7:0,6,t),this.kick=Ee(this.kick,e.dash?1:0,14,t);let a=e.move,r=Math.cos(e.bob)*.014*a,o=-Math.abs(Math.sin(e.bob))*.02*a+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+r,this.swY+o-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let l=.14,h=0,c=0;if(e.punch>0){let f=1-e.punch;f<.3?l=f/.3*.9:f<.55?l=.9-(f-.3)/.25*1.9:l=-1+(f-.55)/.45*1.14,h=-l*.3}else e.crack&&(l=.35+Math.sin(this.t*38)*.08,h=Math.sin(this.t*23)*.1,c=-.06);i.rotation.x=Ee(i.rotation.x,l,e.punch>0?40:14,t),i.rotation.z=Ee(i.rotation.z,h,20,t),i.position.z=Ee(i.position.z,c,12,t);let u=e.grab>0||e.crack?1:0;this.lIn=Ee(this.lIn,u,u?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var Nn=[["Rookie",0],["Pickpocket",40],["Burglar",120],["Safecracker",250],["Cat Burglar",450],["Infiltrator",750],["Phantom",1150],["Heist Pro",1700],["Vault Breaker",2400],["Mastermind",3300],["Kingpin",4500],["Legend",6e3]];function ol(n){let t=0;for(;t+1<Nn.length&&n>=Nn[t+1][1];)t++;let e=Nn[t][1],i=t+1<Nn.length?Nn[t+1][1]:e;return{i:t,name:Nn[t][0],lvl:t+1,frac:i>e?(n-e)/(i-e):1,next:t+1<Nn.length?Nn[t+1][0]:null,toNext:i-n}}var Hu=(n,t,e)=>n?Math.max(10,Math.round(t/100)):4+Math.round((e||0)/250);var Gu=n=>String(n).padStart(2,"0"),Un=(n=new Date)=>`${n.getFullYear()}${Gu(n.getMonth()+1)}${Gu(n.getDate())}`,Na=()=>{let n=new Date;return n.setDate(n.getDate()-1),Un(n)},Zg=(n=new Date)=>n.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Kc=[{id:"paranoid",name:"Paranoid Guards",desc:"Guards see 30% further",apply:n=>n.guards.forEach(t=>{t.range*=1.3})},{id:"insomniac",needs:"owner",name:"Insomniac Owner",desc:"The owner is awake and patrolling",apply:n=>n.guards.forEach(t=>{if(t.state!=="sleep")return;let e=t.def.path[0];t.state="patrol",t.x=e[0]+.5,t.z=e[1]+.5,t.wp=1,t.c.root.rotation.x=0,t.c.root.position.y=0})},{id:"goldrush",name:"Gold Rush",desc:"Gold and jewels are worth 3x",apply:n=>{for(let t of n.loot)(t.type==="gold"||t.type==="jewel")&&(n.lootTotal+=t.value*2,t.value*=3)}},{id:"butter",name:"Butterfingers",desc:"No coins this time",apply:n=>{n.coinsLeft=0}},{id:"rush",name:"Rapid Response",desc:"Police arrive in 20s",apply:n=>{n.alarmTotal=20}},{id:"hound",needs:"dog",name:"Hungry Hound",desc:"The dog is 50% faster",apply:n=>n.dogs.forEach(t=>{t.mul=1.5})}];function Vu(n=[{idx:0,owner:!0,dog:!0}]){let t=Un(),e=Ai(parseInt(t,10)*7919),i=n[e()*n.length|0]||n[0],s=Kc.filter(r=>!r.needs||i[r.needs]),a=s[e()*s.length|0];return{key:t,label:Zg(),mutator:a,level:i.idx,seed:e()*1e9|0}}function ll(){let n=new Date,t=new Date(n);t.setHours(24,0,0,0);let e=Math.max(0,(t-n)/1e3),i=Math.floor(e/3600),s=Math.floor(e%3600/60);return i?`${i}h ${s}m`:`${s}m`}var Wu=[{id:"ko",n:5,text:"Knock out 5 guards",v:n=>n.kos},{id:"loot",n:8e3,text:"Steal $8,000 of loot",v:n=>Math.round(n.loot||0),money:!0},{id:"esc",n:3,text:"Escape 3 heists",v:n=>n.win?1:0},{id:"ghost",n:1,text:"Escape without being spotted",v:n=>n.win&&n.ghost?1:0},{id:"pick",n:3,text:"Pickpocket 3 guards",v:n=>n.picks||0},{id:"vent",n:2,text:"Crawl through 2 air vents",v:n=>n.vents||0},{id:"close",n:3,text:"Survive 3 close calls",v:n=>n.close||0},{id:"coin",n:6,text:"Throw 6 coins",v:n=>n.coins||0},{id:"hide",n:3,text:"Hide in a wardrobe 3 times",v:n=>n.hides||0},{id:"ctr",n:4,text:"Complete 4 contracts",v:n=>n.contractsDone||0},{id:"fast",n:1,text:"Escape in under 90 seconds",v:n=>n.win&&n.time<90?1:0},{id:"radio",n:2,text:"Fake 2 radio check-ins",v:n=>n.radio||0},{id:"sweep",n:1,text:"Escape with 70% of the loot",v:n=>n.win&&n.frac>=.7?1:0}],cl=1500,hl=2500;function Ua(n){let t=Un();if(!n.jobs||n.jobs.key!==t){let e=Ai(parseInt(t,10)*31+7),i=Wu.slice(),s=[];for(;s.length<3;)s.push(i.splice(e()*i.length|0,1)[0].id);n.jobs={key:t,ids:s,prog:{},done:{},bonus:!1}}return n.jobs}var fl=n=>Wu.find(t=>t.id===n);function Zc(n,t){let e=Ua(n),i=[];for(let a of e.ids){if(e.done[a])continue;let r=fl(a);e.prog[a]=Math.min(r.n,(e.prog[a]||0)+(r.v(t)||0)),e.prog[a]>=r.n&&(e.done[a]=!0,i.push(r),n.cash=(n.cash||0)+cl)}let s=!1;return!e.bonus&&e.ids.every(a=>e.done[a])&&(e.bonus=s=!0,n.cash=(n.cash||0)+hl),{fresh:i,bonus:s}}var Oa=[{id:"coins",icon:"\u{1FA99}",name:"Coin Pouch",desc:"+1 coin per run",prices:[3e3,8e3,2e4]},{id:"smoke",icon:"\u{1F4A8}",name:"Smoke Belt",desc:"+1 smoke bomb per run",prices:[6e3,18e3]},{id:"shoes",icon:"\u{1F45F}",name:"Soft Shoes",desc:"Sneak 15% faster",prices:[4e3,1e4,25e3]},{id:"pick",icon:"\u{1F513}",name:"Lockpick Kit",desc:"Wider pick zone, crack safes 12% faster",prices:[3500,9e3,22e3]},{id:"tailor",icon:"\u{1F574}",name:"Tailor",desc:"+8 s in a guard uniform",prices:[5e3,15e3]}],Fa=(n,t)=>Math.min((n.gear||{})[t]||0,Oa.find(e=>e.id===t).prices.length),ul=(n,t)=>t.prices[Fa(n,t.id)]??null;function Xu(n,t){let e=i=>t?Fa(n,i):0;return{coins:e("coins"),smoke:e("smoke"),sneak:1+.15*e("shoes"),pickW:1+.15*e("pick"),crack:1+.12*e("pick"),disguise:8*e("tailor")}}var Fs=[{id:"first",icon:"\u{1F4B0}",name:"First Score",desc:"Escape with the stash",check:(n,t)=>t.win},{id:"ghost",icon:"\u{1F47B}",name:"Ghost",desc:"Escape without ever being spotted",check:(n,t)=>t.win&&t.ghost},{id:"speed",icon:"\u26A1",name:"Speed Demon",desc:"Escape in under 45 seconds",check:(n,t)=>t.win&&t.time<45},{id:"pacifist",icon:"\u{1F54A}\uFE0F",name:"Pacifist",desc:"Escape without knocking anyone out",check:(n,t)=>t.win&&t.kos===0},{id:"sweep",icon:"\u{1F9F9}",name:"Clean Sweep",desc:"Escape with 100% of the loot",check:(n,t)=>t.win&&t.frac>=.999},{id:"contracts",icon:"\u{1F4CB}",name:"Overachiever",desc:"Complete all 3 contracts in one run",check:(n,t)=>t.win&&t.contractsDone>=3},{id:"bank",icon:"\u{1F3E6}",name:"Bank Job",desc:"Escape from the Bank",check:(n,t)=>t.win&&t.level==="bank"},{id:"phantom",icon:"\u{1F3AD}",name:"Phantom of the Vault",desc:"Ghost the Bank",check:(n,t)=>t.win&&t.level==="bank"&&t.ghost},{id:"jewelry",icon:"\u{1F48E}",name:"Night Owl",desc:"Escape from the Jewelry Store",check:(n,t)=>t.win&&t.level==="jewelry"},{id:"radio3",icon:"\u{1F4FB}",name:"Smooth Talker",desc:"Fake 3 radio check-ins (total)",check:n=>(n.radio||0)>=3},{id:"museum",icon:"\u{1F3DB}\uFE0F",name:"Night at the Museum",desc:"Escape from the Museum",check:(n,t)=>t.win&&t.level==="museum"},{id:"penthouse",icon:"\u{1F303}",name:"Sky High",desc:"Escape from the Penthouse",check:(n,t)=>t.win&&t.level==="penthouse"},{id:"laser",icon:"\u{1F534}",name:"Laser Dancer",desc:"Escape the Penthouse with the power on and no lasers tripped",check:(n,t)=>t.win&&t.level==="penthouse"&&!t.power&&t.lasers===0},{id:"vent5",icon:"\u{1F573}\uFE0F",name:"Duct Rat",desc:"Crawl through 5 air vents (total)",check:n=>(n.vents||0)>=5},{id:"inside",icon:"\u{1F574}",name:"Inside Man",desc:"Escape while wearing a guard uniform",check:(n,t)=>t.win&&t.disguised},{id:"train",icon:"\u{1F682}",name:"Great Train Robbery",desc:"Escape from the Night Train",check:(n,t)=>t.win&&t.level==="train"},{id:"warehouse",icon:"\u{1F4E6}",name:"Dock Rat",desc:"Escape from the Warehouse",check:(n,t)=>t.win&&t.level==="warehouse"},{id:"close10",icon:"\u{1F605}",name:"Nerves of Steel",desc:"Survive 10 close calls (total)",check:n=>(n.close||0)>=10},{id:"triple",icon:"\u{1F4A5}",name:"Combo Breaker",desc:"Pull off a triple takedown",check:(n,t)=>(t.streak||0)>=3},{id:"kitted",icon:"\u{1F9F0}",name:"Fully Kitted",desc:"Buy 5 gear upgrades",check:(n,t,e)=>Object.values(e.gear||{}).reduce((i,s)=>i+s,0)>=5},{id:"loyal",icon:"\u{1F4C5}",name:"Loyal Crew",desc:"Log in 7 days in a row",check:(n,t,e)=>!!(e.login&&e.login.n>=7)},{id:"photo",icon:"\u{1F6A8}",name:"Photo Finish",desc:"Escape with under 10 s left on the police timer",check:(n,t)=>t.win&&t.photo},{id:"mansion",icon:"\u{1F942}",name:"Party Crasher",desc:"Escape from the Mansion Gala",check:(n,t)=>t.win&&t.level==="mansion"},{id:"casino",icon:"\u{1F3B0}",name:"High Roller",desc:"Escape from the Casino",check:(n,t)=>t.win&&t.level==="casino"},{id:"pick10",icon:"\u{1F45B}",name:"Sticky Fingers",desc:"Pickpocket 10 guards (total)",check:n=>(n.picks||0)>=10},{id:"iron",icon:"\u{1F6E1}\uFE0F",name:"Iron Will",desc:"Escape on Ironman",check:(n,t)=>t.win&&t.diff==="ironman"},{id:"hard",icon:"\u{1F480}",name:"Hardened",desc:"Escape on Hard",check:(n,t)=>t.win&&t.diff==="hard"},{id:"ko10",icon:"\u{1F94A}",name:"Lights Out",desc:"Knock out 10 guards (total)",check:n=>n.kos>=10},{id:"loot50",icon:"\u{1F4B5}",name:"Big Spender",desc:"Steal $50,000 in total",check:n=>n.loot>=5e4},{id:"loot250",icon:"\u{1F911}",name:"Fat Stacks",desc:"Steal $250,000 in total",check:n=>n.loot>=25e4},{id:"hide5",icon:"\u{1F6AA}",name:"Wardrobe Ninja",desc:"Hide in wardrobes 5 times",check:n=>n.hides>=5},{id:"smoke3",icon:"\u{1F4A8}",name:"Now You See Me",desc:"Use 3 smoke bombs",check:n=>n.smokes>=3},{id:"streak3",icon:"\u{1F525}",name:"Regular",desc:"Reach a 3 day daily streak",check:(n,t,e)=>!!(e.streak&&e.streak.n>=3)},{id:"busted10",icon:"\u{1F693}",name:"Frequent Flyer",desc:"Get busted 10 times",check:n=>n.busts>=10}],Jc=()=>({runs:0,escapes:0,busts:0,loot:0,kos:0,hides:0,smokes:0,coins:0,contracts:0,best:{}});function jc(n,t){let e=n.stats=Object.assign(Jc(),n.stats||{});if(e.runs++,t.win){e.escapes++,e.loot+=t.loot,e.contracts+=t.contractsDone;let a=e.best[t.level];(!a||t.time<a)&&(e.best[t.level]=t.time)}else e.busts++;e.radio=(e.radio||0)+(t.radio||0),e.picks=(e.picks||0)+(t.picks||0),e.vents=(e.vents||0)+(t.vents||0),e.close=(e.close||0)+(t.close||0),e.kos+=t.kos,e.hides+=t.hides,e.smokes+=t.smokes,e.coins+=t.coins;let i=n.ach=n.ach||{},s=[];for(let a of Fs)!i[a.id]&&a.check(e,t,n)&&(i[a.id]=Date.now(),s.push(a));return s}var On=[{id:"classic",name:"Classic",sleeve:3123354,glove:2763837,bar:14168890,band:15905076},{id:"midnight",name:"Midnight",sleeve:3095138,glove:1447711,bar:9082020,band:6272255,need:1},{id:"hazard",name:"Hazard",sleeve:16747050,glove:2763837,bar:15911244,band:2237487,need:3},{id:"camo",name:"Woodland",sleeve:5929530,glove:5913126,bar:4872746,band:13213795,ach:"ghost"},{id:"bubblegum",name:"Bubblegum",sleeve:16748480,glove:16052714,bar:16732064,band:16777215,ach:"pacifist"},{id:"tux",name:"Black Tie",sleeve:2237487,glove:16052714,bar:11745617,band:16777215,ach:"bank"},{id:"neon",name:"Neon Laser",sleeve:1709104,glove:789014,bar:16722522,band:3866576,ach:"laser"},{id:"gala",name:"Gala Night",sleeve:16052714,glove:1512989,bar:14267482,band:11745617,ach:"mansion"},{id:"chain",name:"Gold Chain",sleeve:2763837,glove:15250234,bar:16766810,band:15250234,ach:"loyal"},{id:"dock",name:"Dockhand",sleeve:13194794,glove:3817290,bar:5925498,band:15911244,ach:"warehouse"},{id:"royal",name:"Royal",sleeve:6965976,glove:14267482,bar:15250234,band:14267482,need:6},{id:"golden",name:"Golden Boy",sleeve:15250234,glove:15914122,bar:16766810,band:16777215,need:10}],dl=n=>({sleeve:n.sleeve,sleeve2:ct(n.sleeve,.85),cuff:ct(n.sleeve,.66),glove:n.glove,glove2:ct(n.glove,1.35)||3816786,bar:n.bar,barHi:ct(n.bar,1.35),band:n.band});function zs(n,t){let e=t.ach||{},i=Object.keys(e).length;return n.ach?!!e[n.ach]:!n.need||i>=n.need}var qu=(n,t)=>n.ach?`Achievement: ${(t.find(e=>e.id===n.ach)||{}).name}`:`${n.need} ${n.need===1?"trophy":"trophies"}`;var en=[{text:["Move with WASD","Drag the left side to move"],done:n=>Math.hypot(n.player.x-n.L.start.x-.5,n.player.z-n.L.start.y-.5)>1.6},{text:["Move the mouse to look around","Drag the right side to look around"],done:n=>n.lookTotal>1.2},{text:["Walk over cash to grab it","Walk over cash to grab it"],done:n=>n.lootGot>0},{text:["Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)","Stay out of the yellow vision cones. Sneak to the locked door (follow the marker)"],done:n=>n.kos>0||n.doors.some(t=>t.type==="lock"&&(t.open||Math.hypot(n.player.x-t.x-.5,n.player.z-t.y-.5)<2.2))},{text:["Pick the lock: press E when the pin is in the green","Pick the lock: tap \u270B when the pin is in the green"],done:n=>n.doors.every(t=>t.type!=="lock"||t.open)},{text:["Hold E at the safe to crack it","Hold \u270B at the safe to crack it"],done:n=>n.hasStash},{text:["Run back to the van with the stash!","Run back to the van with the stash!"],done:n=>n.state==="escape"}];var F=n=>document.getElementById(n),Jg={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],thunder:["\u26A1 Thunder covers your noise for a moment. Dash now!","\u26A1 Thunder covers your noise for a moment. Dash now!"],uniform:["Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar","Hold \u270B on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar"],ctr:["\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash","\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash"],vent:["Air vent! E to crawl through to another room, unseen","Air vent! Tap the hand to crawl through, unseen"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? E / Click = knock out!","Behind a guard? Tap the hand = knock out!"],safe:["Hold E / Mouse to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],dog:["A guard dog! It follows your scent and barks. Coins distract it.","A guard dog! It follows your scent and barks. Coins distract it."],clerk:["The clerk is running for the alarm button! Knock them out first!","The clerk is running for the alarm button! Knock them out first!"],camhit:["Security camera! Hit it with a thrown coin (Q) to knock it out for 12s","Security camera! Hit it with a thrown coin to knock it out for 12s"],pocket:["Behind a guard: tap E to knock out, HOLD E to pickpocket his wallet (or spare keycard)","Behind a guard: tap \u270B to knock out, HOLD \u270B to pickpocket his wallet"],slot:["Slot machine! Hold E to hit a noisy jackpot that lures guards away","Slot machine! Hold \u270B to hit a noisy jackpot that lures guards away"],spot:["Spotlight! Stay out of the moving light pools, or cut the power at the breaker","Spotlight! Stay out of the moving light pools, or cut the power at the breaker"],radio:["A knocked-out guard's radio is calling! Hold E next to him to answer, or backup comes","A knocked-out guard's radio is calling! Hold \u270B next to him to answer, or backup comes"],case:["Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm","Hold \u270B to smash a display case. Loud! Guards who see a broken case raise the alarm"],pick:["Locked! Press E when the pin is in the green zone. Slips are noisy!","Locked! Tap the hand when the pin is in the green zone. Slips are noisy!"],laser:["Laser grid! Time your run, or cut the power at the breaker in the security room","Laser grid! Time your run, or cut the power at the breaker in the security room"],key:["The vault door needs a keycard. Search the offices!","The vault door needs a keycard. Search the offices!"],door:["Got the keycard! Swipe it at the vault door","Got the keycard! Swipe it at the vault door"],drill:["Cracking the vault is LOUD. Guards will hear it!","Cracking the vault is LOUD. Guards will hear it!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],heavy:["Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them","Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them"],sneak:["Z: crouch-sneak. Slower and quieter, and crouching behind counters or tables hides you","Tap \u{1F9B6} to sneak. Slower and quieter, and crouching behind low cover hides you"],smoke:["C: drop a smoke bomb. Guards cannot see into or through the cloud!","Tap \u{1F4A8} to drop a smoke bomb. Guards cannot see through it!"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},Qc=class{constructor(){this.els={canvas:F("c"),fxl:F("fxl"),joyzone:F("joyzone"),lookzone:F("lookzone"),joy:F("joy"),knob:F("knob"),bAct:F("bAct"),bDash:F("bDash"),bThrow:F("bThrow"),bSmoke:F("bSmoke"),bSneak:F("bSneak")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new X(15,30,40),this.camLook=new X(15,0,9),this._f=new X,this._d=new X,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await se.init(),se.loadingStart(),se.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},se.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=se.load(),this.save.best=this.save.best||{},this.diff=Ns[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new Bo({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(this.dpr),e.toneMapping=ga,e.toneMappingExposure=1.15,this.scene=new Xn,this.scene.background=new Ot(16038282),this.scene.fog=new ea(15778970,16,70),this.sky=cu(),this.scene.add(this.sky),this.nightSky=hu(),this.scene.add(this.nightSky),e.autoClear=!1,this.camera=new Ze(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new rl,this.hemi=new $n(16770760,8022152,1.8),this.scene.add(this.hemi);let i=this.sun=new Kn(16769208,1.4);i.position.set(-4,10,6),this.scene.add(i),this.audio=new jo;let s={ko:35,zap:[60,40,60],alert:25,bust:[90,60,160],alarm:[120,80,120],safe:[30,40,50],dash:12,glass:40,thunder:[20,40,60],clank:25,jackpot:[20,30,20,30,40],win:[30,50,80]},a=this.audio.play.bind(this.audio);this.audio.play=(r,o)=>{a(r,o);let l=s[r];if(l&&this.input&&this.input.touch&&this.shake&&this.shake.scale>0&&navigator.vibrate)try{navigator.vibrate(l)}catch{}},this.audio.setMuted(!!this.save.muted),this.input=new Qo(this.els),this.particles=new el(this.scene),this.shake=new il,this.floaters=new nl(this.els.fxl),this.dust=new Vo(this.scene),this.rain=new Wo(this.scene),this.boltK=0,this.applySettings(),this.game=new Zo(this),this.levelIdx=0,await this.useLevel(0),this.bindUI(),this.applyOutfit(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),se.loadingStop(),F("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,i)=>F(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),i()});t("bPlay",()=>this.playSel());for(let e of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])F(e).addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.selectPin(e)});for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",i=>{if(i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),e.dataset.d==="ironman"&&!this.ironUnlocked()){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.diff=e.dataset.d,this.save.diff=this.diff,se.store(this.save),this.showMenu()});t("bResume",()=>this.resume()),t("bSet",()=>this.showSettings()),t("bPSet",()=>this.showSettings()),t("bSetBack",()=>{this.setFrom==="pause"?(this.state="pause",this.screen("pause")):this.showMenu()});for(let e of document.querySelectorAll("#settings input"))e.addEventListener("input",()=>this.readSettings());t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>{this.mode==="daily"?this.showMenu():this.levelIdx===0&&this.bankUnlocked()?this.start("classic",1):this.levelIdx===1&&this.jewelryUnlocked()?this.start("classic",2):this.levelIdx===2&&this.museumUnlocked()?this.start("classic",3):this.levelIdx===3&&this.casinoUnlocked()?this.start("classic",4):this.levelIdx===4&&this.penthouseUnlocked()?this.start("classic",5):this.levelIdx===5&&this.trainUnlocked()?this.start("classic",6):this.levelIdx===6&&this.warehouseUnlocked()?this.start("classic",7):this.levelIdx===7&&this.mansionUnlocked()?this.start("classic",8):this.showSoon()}),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bEasy",()=>{this.diff="easy",this.bustStreak=0,this.start("classic",this.levelIdx)}),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bTrophy",()=>this.showTrophies()),t("bOutfit",()=>this.showOutfits()),t("bOfBack",()=>this.showMenu()),t("bTut",()=>this.start("tutorial",0)),F("tut").addEventListener("pointerdown",e=>{this.input.touch&&this.game.tut&&(e.stopPropagation(),this.skipTutorial())}),t("bTrBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{e==="KeyT"&&this.state==="play"&&this.game.tut&&this.skipTutorial(),(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.playSel()):e==="Enter"&&this.state==="result"?(this.audio.unlock(),F("bNext").click()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}screen(t){for(let i of document.querySelectorAll(".screen"))i.classList.toggle("hidden",i.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),F("fp").classList.toggle("hidden",!e),F("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),F("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){if(this.lastTutLevel=null,this.save.tutDone){let b=Un(),g=this.save.login||{last:"",n:0};if(g.last!==b){g.n=g.last===Na()?g.n+1:1,g.last=b,this.save.login=g;let M=500*Math.min(g.n,7);this.save.cash=(this.save.cash||0)+M,se.store(this.save);let S=F("bonus");S.querySelector("b").textContent="+"+ne(M);let _=(g.n-1)%7+1;S.querySelector(".days").innerHTML=[1,2,3,4,5,6,7].map(w=>`<i class="${w<_?"on":w===_?"now":""}">${w===7?"\u{1F9E4}":w}</i>`).join(""),S.querySelector("em").textContent=g.n>=7?`Day ${g.n} in a row! Max bonus`:`Day ${g.n} of 7 \xB7 day 7 unlocks the Gold Chain outfit`,S.classList.remove("hidden"),S.style.animation="none",S.offsetWidth,S.style.animation="",clearTimeout(this.bonT),this.bonT=setTimeout(()=>S.classList.add("hidden"),4200),setTimeout(()=>{this.audio.play("safe"),this.shake.add(.15)},250)}}se.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[gi("safehouse",this.diff)],e=this.bankUnlocked(),i=this.save.best[gi("bank",this.diff)];F("lvl2").classList.toggle("lock",!e),F("lvl2art").textContent=e?"\u{1F3E6}":"\u{1F512}",F("lvl2stars").innerHTML=e?this.starsHTML(i?i.stars:0):"",F("lvl2best").textContent=e?i?"Best "+ne(i.score):"New!":"Escape Safe House to unlock";let s=this.jewelryUnlocked(),a=this.save.best[gi("jewelry",this.diff)];F("lvl3").classList.toggle("lock",!s),F("lvl3art").textContent=s?"\u{1F48E}":"\u{1F512}",F("lvl3stars").innerHTML=s?this.starsHTML(a?a.stars:0):"";let r=this.casinoUnlocked(),o=this.save.best[gi("casino",this.diff)];F("lvl5").classList.toggle("lock",!r),F("lvl5art").textContent=r?"\u{1F3B0}":"\u{1F512}",F("lvl5stars").innerHTML=r?this.starsHTML(o?o.stars:0):"",F("lvl5best").textContent=r?o?"Best "+ne(o.score):"New!":"Escape the Museum to unlock";let l=this.mansionUnlocked(),h=this.save.best[gi("mansion",this.diff)];F("lvl9").classList.toggle("lock",!l),F("lvl9art").textContent=l?"\u{1F942}":"\u{1F512}",F("lvl9stars").innerHTML=l?this.starsHTML(h?h.stars:0):"",F("lvl9best").textContent=l?h?"Best "+ne(h.score):"New!":"Escape the Warehouse to unlock";let c=this.warehouseUnlocked(),u=this.save.best[gi("warehouse",this.diff)];F("lvl8").classList.toggle("lock",!c),F("lvl8art").textContent=c?"\u{1F4E6}":"\u{1F512}",F("lvl8stars").innerHTML=c?this.starsHTML(u?u.stars:0):"",F("lvl8best").textContent=c?u?"Best "+ne(u.score):"New!":"Escape the Night Train to unlock";let f=this.trainUnlocked(),x=this.save.best[gi("train",this.diff)];F("lvl7").classList.toggle("lock",!f),F("lvl7art").textContent=f?"\u{1F682}":"\u{1F512}",F("lvl7stars").innerHTML=f?this.starsHTML(x?x.stars:0):"",F("lvl7best").textContent=f?x?"Best "+ne(x.score):"New!":"Escape the Penthouse to unlock";let d=this.penthouseUnlocked(),v=this.save.best[gi("penthouse",this.diff)];F("lvl6").classList.toggle("lock",!d),F("lvl6art").textContent=d?"\u{1F303}":"\u{1F512}",F("lvl6stars").innerHTML=d?this.starsHTML(v?v.stars:0):"",F("lvl6best").textContent=d?v?"Best "+ne(v.score):"New!":"Escape the Casino to unlock";let m=this.museumUnlocked(),p=this.save.best[gi("museum",this.diff)];F("lvl4").classList.toggle("lock",!m),F("lvl4art").textContent=m?"\u{1F3DB}\uFE0F":"\u{1F512}",F("lvl4stars").innerHTML=m?this.starsHTML(p?p.stars:0):"",F("lvl4best").textContent=m?p?"Best "+ne(p.score):"New!":"Escape the Jewelry Store to unlock",F("lvl3best").textContent=s?a?"Best "+ne(a.score):"New!":"Escape the Bank to unlock",this.renderSel(),this.diff==="ironman"&&!this.ironUnlocked()&&(this.diff="normal");for(let b of document.querySelectorAll("#diff button"))b.classList.toggle("on",b.dataset.d===this.diff),b.dataset.d==="ironman"&&(b.classList.toggle("lock",!this.ironUnlocked()),b.title=this.ironUnlocked()?"Ironman: x2.5 score, 1 coin, no smoke, 15s police":"Escape any heist on Hard to unlock");F("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),F("lvl1best").textContent=t?"Best "+ne(t.score):"New!",this.daily=this.todays();let y=(this.save.daily||{})[this.daily.key];F("dMut").textContent=this.daily.mutator.name;{let b=new Date;F("dArt").innerHTML=`<span style="font-size:20px">${b.getDate()}</span>`}F("dDesc").textContent=this.daily.mutator.desc+" \xB7 "+tn[this.daily.level].name,F("dBest").textContent=(y?"Today "+ne(y.score):this.daily.label)+(this.save.streak&&this.save.streak.n>1&&(this.save.streak.last===this.daily.key||this.save.streak.last===Na())?` \xB7 \u{1F525}${this.save.streak.n}`:""),this.screen("menu")}runRecord(t,e){let i=this.game;return{win:t,level:this.level.id,diff:this.mode==="daily"?"daily":this.diff,ghost:t&&e.ghost,time:i.time,kos:i.kos,frac:i.lootGot/i.lootTotal,loot:i.lootGot,contractsDone:t?e.contracts.filter(s=>s.st==="ok").length:0,hides:i.hidesUsed,smokes:i.smokesUsed,coins:i.coinsThrown,radio:i.radioFaked,picks:i.picks,vents:i.ventsUsed,close:i.closeCalls,photo:i.photoFinish,streak:i.maxKoStreak||0,disguised:i.disguiseT>0&&i.disguises>0,lasers:i.lasersTripped,power:i.powerOff}}applyOutfit(){let t=On.find(e=>e.id===this.save.outfit);return(!t||!zs(t,this.save))&&(t=On[0]),this.vm.setOutfit(dl(t)),t}gearMods(t){return Xu(this.save,t)}canAffordGear(){return Oa.some(t=>{let e=ul(this.save,t);return e!=null&&(this.save.cash||0)>=e})}renderGear(){let t=this.save.cash||0;F("wallet").textContent="\u{1F4B0} "+ne(t),F("gearGrid").innerHTML=Oa.map(e=>{let i=Fa(this.save,e.id),s=ul(this.save,e),a=s==null;return`<button class="gr ${a?"max":t>=s?"":"cant"}" data-id="${e.id}"><span class="ic">${e.icon}</span><b>${e.name}</b><small>${e.desc}</small>
        <span class="pips">${e.prices.map((r,o)=>`<i class="${o<i?"on":""}"></i>`).join("")}</span><span class="pr">${a?"MAXED":ne(s)}</span></button>`}).join("");for(let e of document.querySelectorAll("#gearGrid .gr"))e.addEventListener("click",i=>{i.stopPropagation();let s=Oa.find(o=>o.id===e.dataset.id),a=ul(this.save,s);if(a==null||(this.save.cash||0)<a){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.save.cash-=a,(this.save.gear=this.save.gear||{})[s.id]=Fa(this.save,s.id)+1,se.store(this.save),this.audio.play("safe"),this.shake.add(.15),this.renderGear();let r=document.querySelector(`#gearGrid .gr[data-id="${s.id}"]`);r&&r.classList.add("buy")})}showOutfits(){se.gameplayStop(),this.state="outfits",this.renderGear();let t=this.applyOutfit(),e=i=>"#"+i.toString(16).padStart(6,"0");F("ofGrid").innerHTML=On.map(i=>{let s=zs(i,this.save);return`<button class="of ${s?"":"lock"} ${i.id===t.id?"on":""}" data-id="${i.id}">
        <span class="sw"><i style="background:${e(i.sleeve)}"></i><i style="background:${e(i.glove)}"></i><i style="background:${e(i.bar)}"></i></span>
        <b>${i.name}</b><small>${s?i.id===t.id?"EQUIPPED":"Tap to wear":"\u{1F512} "+qu(i,Fs)}</small></button>`}).join("");for(let i of document.querySelectorAll("#ofGrid .of"))i.addEventListener("click",s=>{s.stopPropagation();let a=On.find(r=>r.id===i.dataset.id);if(!zs(a,this.save)){this.audio.play("nope"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake");return}this.audio.play("pick",4),this.save.outfit=a.id,se.store(this.save),this.showOutfits()});this.screen("outfits")}showTrophies(){se.gameplayStop(),this.state="trophies";let t=Object.assign(Jc(),this.save.stats||{}),e=this.save.ach||{},i=a=>t.best[a]!=null?ks(t.best[a]):"\u2014",s=[["Heists",t.runs],["Escapes",t.escapes],["Busted",t.busts],["Total loot",ne(t.loot)],["Guards KO",t.kos],["Contracts",t.contracts],["Best Safe House",i("safehouse")],["Best Bank",i("bank")],["Best Jewelry",i("jewelry")],["Best Museum",i("museum")],["Best Casino",i("casino")],["Best Penthouse",i("penthouse")],["Best Train",i("train")],["Best Warehouse",i("warehouse")],["Best Mansion",i("mansion")]];F("trJobs").innerHTML=this.jobsHTML(),F("jobsIn").textContent=`(new jobs in ${ll()})`;for(let a=s.length-1;a>=0;a--)String(s[a][0]).startsWith("Best ")&&s[a][1]==="\u2014"&&s.splice(a,1);F("trStats").innerHTML=s.map(([a,r])=>`<div><small>${a}</small><b>${r}</b></div>`).join(""),F("trAch").innerHTML=Fs.map(a=>`<div class="ach ${e[a.id]?"on":""}"><i>${e[a.id]?a.icon:"\u{1F512}"}</i><b>${a.name}</b><small>${a.desc}</small></div>`).join(""),F("trCount").textContent=`${Object.keys(e).filter(a=>Fs.some(r=>r.id===a)).length} / ${Fs.length}`,this.screen("trophies")}chipify(t){let e=F(t),i=e.innerHTML.split(/<br\s*\/?>/).map(s=>s.trim()).filter(Boolean);e.innerHTML=i.map((s,a)=>`<span class="rw" style="animation-delay:${(1.3+a*.12).toFixed(2)}s">${s}</span>`).join("")}jobsHTML(){let t=Ua(this.save),e=(i,s)=>i.money?ne(s):s;return t.ids.map(i=>{let s=fl(i),a=t.prog[i]||0,r=!!t.done[i];return`<li class="${r?"ok":""}"><i></i><span>${s.text}</span><em>${r?"\u2714":e(s,a)+"/"+e(s,s.n)}</em><b>+${ne(cl)}</b></li>`}).join("")+`<li class="bonus ${t.bonus?"ok":""}"><i></i><span>All 3 done</span><em>${t.bonus?"\u2714":""}</em><b>+${ne(hl)}</b></li>`}jobsToast(t){if(!this.save.tutDone)return"";let e=t.fresh.map(i=>`\u{1F4CB} Job done: <b>${i.text}</b> +${ne(cl)}`);return t.bonus&&e.push(`\u{1F4CB} <b>All daily jobs done!</b> +${ne(hl)}`),e.length&&setTimeout(()=>{(this.state==="result"||this.state==="busted")&&(this.audio.play("contract"),this.shake.add(.12))},2e3),e.join("<br>")}showAchToast(t){F("rAch").innerHTML=t.length?"\u{1F3C6} Unlocked: "+t.map(e=>`<b>${e.icon} ${e.name}</b>`).join(" \xB7 "):"",F("rAch").classList.toggle("hidden",!t.length),t.length&&setTimeout(()=>this.audio.play("contract"),1600)}pinLocked(t){return t==="lvl2"?!this.bankUnlocked():t==="lvl3"?!this.jewelryUnlocked():t==="lvl4"?!this.museumUnlocked():t==="lvl5"?!this.casinoUnlocked():t==="lvl6"?!this.penthouseUnlocked():t==="lvl7"?!this.trainUnlocked():t==="lvl8"?!this.warehouseUnlocked():t==="lvl9"?!this.mansionUnlocked():!1}selectPin(t){if(this.sel=t,this.save.sel=t,this.pinLocked(t)){let e=F(t);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}this.renderSel()}renderSel(){let t=this.sel||this.save.sel||"lvl1";F(t)||(t="lvl1"),this.sel=t;for(let u of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])F(u).classList.toggle("on",u===t);let e=F(t),i=this.pinLocked(t);F("selName").textContent=t==="daily"?"Daily: "+F("dMut").textContent:e.querySelector(".t").textContent;let s=e.querySelector(".stars");F("selStars").innerHTML=s?s.innerHTML:"";let a=!!(this.save.daily||{})[this.daily&&this.daily.key];F("selSub").textContent=t==="daily"?F("dDesc").textContent+" \xB7 "+F("dBest").textContent+(a?` \xB7 new Daily in ${ll()}`:""):e.querySelector(".best").textContent;let r=[];if(!i&&t!=="daily"&&this.save.tutDone){let u=tn[{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t]].id,f=(this.save.best[gi(u,this.diff)]||{stars:0}).stars;f===0?r.push("Escape to earn your first \u2605"):f<3&&r.push("Next \u2605: grab 70% loot \xB7 or never get spotted")}if(this.save.tutDone&&(this.save.hot||0)>=1&&r.unshift(`\u{1F525} Hot streak ${this.save.hot}: next escape +${Math.min(50,10*this.save.hot)}% cash`),this.save.tutDone&&this.canAffordGear()&&r.unshift("\u{1F9F0} You can afford new gear in the Locker!"),this.save.tutDone){let u=Ua(this.save),f=u.ids.find(x=>!u.done[x]);if(f){let x=fl(f),d=u.prog[f]||0;r.push(`\u{1F4CB} Job: ${x.text} (${x.money?ne(d):d}/${x.money?ne(x.n):x.n})`)}}let o=this.save.streak;o&&o.n>=1&&o.last===Na()&&r.unshift(`\u{1F525} Play today's Daily to keep your ${o.n}-day streak`);let l=Object.keys(this.save.ach||{}).length,h=On.filter(u=>u.need&&u.need>l).sort((u,f)=>u.need-f.need)[0];h&&this.save.tutDone&&r.push(`\u{1F9E4} ${h.need-l} more troph${h.need-l===1?"y":"ies"} \u2192 ${h.name} outfit`),F("selGoal").textContent=r.slice(0,2).join("  \xB7  "),F("selGoal").classList.toggle("hidden",!r.length),F("bPlay").textContent=i?"\u{1F512} LOCKED":"PLAY",F("bPlay").classList.toggle("dis",i),F("daily").classList.toggle("done",a),F("bPlay").classList.toggle("pulse",!i&&!this.save.tutDone&&!this.runs);let c=0;for(let u of["safehouse","bank","jewelry","museum","casino","penthouse","train","warehouse","mansion"])c+=Math.max(...["","_easy","_hard","_ironman"].map(f=>(this.save.best[u+f]||{stars:0}).stars));F("starTotal").textContent=`\u2605 ${c}/27`,tn.forEach((u,f)=>{let x=F("lvl"+(f+1));x&&x.classList.toggle("gold",!!(this.save.mastered||{})[u.id])});{let u=this.save.cash||0,f=u>=1e6?(u/1e6).toFixed(1)+"M":u>=1e3?(u/1e3).toFixed(u>=1e4?0:1)+"k":String(u);F("bOutfit").innerHTML=`\u{1F9F0} LOCKER${u?` <small>$${f}</small>`:""}`}{let u=Ua(this.save),f=u.ids.filter(x=>u.done[x]).length;F("bTrophy").innerHTML=this.save.tutDone?`\u{1F4CB} JOBS <small>${f}/3</small>`:"\u{1F3C6} TROPHIES"}F("bOutfit").classList.toggle("pulse",this.save.tutDone&&this.canAffordGear());{let u=ol(this.save.xp||0);F("rankChip").innerHTML=`\u{1F396} ${u.name}<i style="width:${(u.frac*100).toFixed(0)}%"></i>`,F("rankChip").title=u.next?`${u.toNext} XP to ${u.next}`:"Max rank"}}playSel(){let t=this.sel||"lvl1";if(this.pinLocked(t)){this.audio.play("nope"),this.selectPin(t);return}t==="daily"?this.start("daily"):this.start("classic",{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t])}drawRecap(t,e){let i=F(t),s=this.game,a=s.L,r=this.mmBase;if(!i||!r)return;let o=this.mmS,l=Math.min(260/r.width,170/r.height);i.width=Math.round(r.width*l*2),i.height=Math.round(r.height*l*2);let h=i.getContext("2d"),c=i.width/r.width*o,u=s.trail.slice(),f=s.marks.slice();u.push([s.player.x,s.player.z,u.length?u[u.length-1][2]:0]);let x=performance.now(),d=1600,v=this.recapId=(this.recapId||0)+1,m=(g,M)=>{let S=g.x*c,_=g.z*c,w=5.5;h.globalAlpha=M,g.t==="ko"?(h.strokeStyle="#c77dff",h.lineWidth=3,h.beginPath(),h.moveTo(S-w,_-w),h.lineTo(S+w,_+w),h.moveTo(S+w,_-w),h.lineTo(S-w,_+w),h.stroke()):g.t==="alarm"||g.t==="caught"?(h.fillStyle="#ff3b4e",h.beginPath(),h.arc(S,_,w+2,0,6.3),h.fill(),h.fillStyle="#fff",h.font="bold 11px sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText(g.t==="caught"?"\u2716":"!",S,_+1)):g.t==="safe"?(h.fillStyle="#ffd23f",h.fillRect(S-w,_-w,w*2,w*2),h.strokeStyle="#1c1330",h.lineWidth=2,h.strokeRect(S-w,_-w,w*2,w*2)):(h.fillStyle=g.t==="cash"?"#4fe0a0":"#ffc94a",h.beginPath(),h.arc(S,_,g.t==="cash"?3:4.5,0,6.3),h.fill()),h.globalAlpha=1},p=()=>{if(v!==this.recapId)return;let g=Math.min(1,(performance.now()-x)/d),M=Math.max(1,Math.floor(u.length*g));h.drawImage(r,0,0,i.width,i.height),h.fillStyle="rgba(28,19,48,.35)",h.fillRect(0,0,i.width,i.height),h.lineCap="round",h.lineJoin="round",h.lineWidth=3.5;for(let w=1;w<M;w++){let k=u[w-1],P=u[w];h.strokeStyle=P[2]?"#ff5a6a":"#4fe0a0",h.beginPath(),h.moveTo(k[0]*c,k[1]*c),h.lineTo(P[0]*c,P[1]*c),h.stroke()}let S=Math.floor(f.length*g);for(let w=0;w<f.length;w++)(w<S||g>=1)&&m(f[w],1);let _=u[M-1];_&&(h.fillStyle="#fff6e8",h.strokeStyle="#1c1330",h.lineWidth=2,h.beginPath(),h.arc(_[0]*c,_[1]*c,5,0,6.3),h.fill(),h.stroke()),g<1&&requestAnimationFrame(p)};p();let y=u.length?Math.round(u.filter(g=>g[2]).length/u.length*100):0,b=F(t+"Lg");b&&(b.innerHTML=`<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${y}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">\u2715</b> KO`)}showSoon(){se.gameplayStop(),this.state="soon",F("soonName").textContent="More heists",F("soonList").innerHTML=["Armored truck ambush","Diamond exchange","Harbor yacht party"].map(t=>`<li>${t}</li>`).join(""),this.screen("soon")}todays(){let t=Vu(tn.map((i,s)=>({idx:s,owner:!!i.owner,dog:!!i.dog})).filter(i=>this.levelUnlocked(i.idx))),e=this.save.dailyPick;if(e&&e.key===t.key){let i=Kc.find(s=>s.id===e.mut);i&&(t.level=e.level,t.mutator=i)}return t}levelUnlocked(t){return[()=>!0,()=>this.bankUnlocked(),()=>this.jewelryUnlocked(),()=>this.museumUnlocked(),()=>this.casinoUnlocked(),()=>this.penthouseUnlocked(),()=>this.trainUnlocked(),()=>this.warehouseUnlocked(),()=>this.mansionUnlocked()][t]?.()||!1}mansionUnlocked(){let t=this.save.best;return!!(t.warehouse||t.warehouse_easy||t.warehouse_hard||t.warehouse_ironman||this.save.mansionOpen)}warehouseUnlocked(){let t=this.save.best;return!!(t.train||t.train_easy||t.train_hard||t.train_ironman||this.save.warehouseOpen)}trainUnlocked(){let t=this.save.best;return!!(t.penthouse||t.penthouse_easy||t.penthouse_hard||t.penthouse_ironman||this.save.trainOpen)}penthouseUnlocked(){let t=this.save.best;return!!(t.casino||t.casino_easy||t.casino_hard||t.casino_ironman||this.save.penthouseOpen)}casinoUnlocked(){let t=this.save.best;return!!(t.museum||t.museum_easy||t.museum_hard||t.museum_ironman||this.save.casinoOpen)}museumUnlocked(){let t=this.save.best;return!!(t.jewelry||t.jewelry_easy||t.jewelry_hard||t.jewelry_ironman||this.save.museumOpen)}jewelryUnlocked(){let t=this.save.best;return!!(t.bank||t.bank_easy||t.bank_hard||t.bank_ironman||this.save.jewelryOpen)}ironUnlocked(){return Object.keys(this.save.best).some(t=>t.endsWith("_hard")||t.endsWith("_ironman"))}bankUnlocked(){let t=this.save.best;return!!(t.safehouse||t.safehouse_easy||t.safehouse_hard||t.safehouse_ironman||this.save.bankOpen)}async useLevel(t){if(this.loadedIdx===t)return;this.level=await Bu(t),this.game.load(this.level),this.buildMinimap(),this.loadedIdx=t,this.audio.theme=t;let e=!!this.level.night;this.scene.background.setHex(e?1317427:16038282),this.scene.fog.color.setHex(e?1712704:15778970),this.scene.fog.near=e?10:16,this.scene.fog.far=e?48:70,this.sky.material.color.setHex(e?2502746:16777215),this.nightSky.visible=e,this.rain.setLevel(this.level.rain?this.game.L:null),this.dust.points.material.color.setHex(e?12110079:16769712),this.hemi.intensity=e?1.1:1.8,this.hemi.color.setHex(e?12109055:16770760),this.sun.intensity=e?.5:1.4,this.sun.color.setHex(e?10465535:16769208),this.vm.hemi.intensity=e?1.6:2.4,this.renderer.compile(this.scene,this.camera)}starsHTML(t){let e="";for(let i=0;i<3;i++)e+=`<span class="${i<t?"on":""}">\u2605</span>`;return e}async start(t,e){t&&(this.mode=t),this.mode||(this.mode="classic"),!t&&this.mode==="tutorial"&&this.save.tutDone&&(this.mode="classic"),this.mode==="classic"&&(e==null||e===0)&&!this.save.tutDone&&(this.levelIdx||0)===0&&(this.mode="tutorial"),this.mode==="daily"?((!this.daily||this.daily.key!==Un())&&(this.daily=this.todays()),e=this.daily.level,this.save.dailyPick={key:this.daily.key,level:e,mut:this.daily.mutator.id}):this.mode==="tutorial"&&(e=0),e!=null&&(this.levelIdx=e);let i=this.loadedIdx!==this.levelIdx;if(i&&await this.useLevel(this.levelIdx),this.mode==="daily"&&(!this.daily||this.daily.key!==Un())&&(this.daily=this.todays()),this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.ghost=this.mode==="classic"&&(this.save.ghost||{})[gi(this.level.id,this.diff)]||null,F("ghostp").classList.toggle("hidden",!this.ghost),this.ghost&&(F("ghostp").lastChild.textContent=ks(this.ghost.t)),this.onSmoke(this.game.smokesLeft),this.onCrouch(!1),this.onDisguise(this.game.disguiseT),this.level.startDisguise&&setTimeout(()=>{this.state==="play"&&this.announce("\u{1F378} You're dressed as a waiter: from afar nobody looks twice")},1300),this.renderContracts(this.game.contracts),this.tutStep=this.game.tut?this.lastTutLevel===this.level.id?Math.min(this.tutStep||0,3):0:en.length,F("tut").dataset.k="",this.lastTutLevel=this.game.tut?this.level.id:null,clearTimeout(this.whyT),F("alarmwhy").classList.add("hidden"),this.mode==="daily"){let s=F("ctoast");s.innerHTML=`<small>DAILY CHALLENGE \xB7 ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>s.classList.add("hidden"),3200)}else i&&this.mode==="classic"&&this.save.tutDone?this.showIntel():F("ctoast").classList.add("hidden");if(!(i&&this.mode==="classic"&&this.save.tutDone)&&this.mode!=="daily"){let s=F("gostamp");s.querySelector("small").textContent=this.level.name.toUpperCase()+((this.save.hot||0)>=1&&this.mode==="classic"?`  \xB7  \u{1F525} STREAK ${this.save.hot}`:""),s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.goT),this.goT=setTimeout(()=>s.classList.add("hidden"),1200),this.audio.play("dash")}this.mode==="classic"&&this.game.contracts.length&&!this.save.seenCtr&&(this.save.seenCtr=!0,se.store(this.save),this.hint("ctr")),this.hint("move"),se.gameplayStart()}showIntel(){let t=this.game,e=this.level,i=t.L,s=[];i.keys.length&&s.push("\u{1F511} Keycard door"),i.doors.some(r=>r.type==="lock")&&s.push("\u{1F512} Locked door"),t.lasers.length&&s.push("\u{1F534} Lasers"),e.owner&&s.push("\u{1F634} Sleeping owner"),(e.dogs||[]).length&&s.push("\u{1F415} Guard dog"),(e.spots||[]).length&&s.push("\u{1F526} Searchlights"),t.cases.length&&s.push("\u{1F48E} Display cases"),t.slots.length&&s.push("\u{1F3B0} Slot machines"),t.vents.length&&s.push("\u{1F573}\uFE0F Air vent"),t.tvs.length&&s.push("\u{1F4FA} TV lure"),(e.cameras||[]).length&&s.push(`\u{1F4F9} ${e.cameras.length} camera${e.cameras.length>1?"s":""}`),e.train&&s.push("\u{1F682} Moving train"),e.startDisguise&&s.push("\u{1F378} Waiter disguise"),(e.clerks||[]).length&&s.push(`\u{1F64B} ${e.clerks.length} panic-button witness${e.clerks.length>1?"es":""}`),s.push(e.heli?"\u{1F681} Roof extraction":i.van?"\u{1F690} Van out front":"\u{1FA9C} Roof hatch exit");let a=F("ctoast");a.innerHTML=`<small>INTEL \xB7 ${e.name.toUpperCase()}</small>${e.brief?`<span class="brief">${e.brief}</span>`:""}<span class="intel">${s.map(r=>`<i>${r}</i>`).join("")}</span><span class="stargoal">\u2605 Escape \xB7 \u2605 Grab 70% loot \xB7 \u2605 Never get spotted</span>`,a.classList.remove("hidden"),a.style.animation="none",a.offsetWidth,a.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>a.classList.add("hidden"),5200)}async retry(){await this.maybeMidgame(),this.start()}settings(){return Object.assign({sens:1,fov:70,music:.8,sfx:1,invert:!1,shake:!0},this.save.settings||{})}applySettings(){let t=this.settings();this.sens=.0024*t.sens,this.invertY=t.invert,this.fovBase=t.fov,this.audio.setVolumes(t.music,t.sfx),this.shake.scale=t.shake?1:0}showSettings(){this.setFrom=this.state==="pause"?"pause":"menu",this.state="settings";let t=this.settings();F("sSens").value=t.sens,F("sFov").value=t.fov,F("sMus").value=t.music,F("sSfx").value=t.sfx,F("sInv").checked=t.invert,F("sShake").checked=t.shake,this.readSettings(!0),this.screen("settings")}readSettings(t){let e={sens:+F("sSens").value,fov:+F("sFov").value,music:+F("sMus").value,sfx:+F("sSfx").value,invert:F("sInv").checked,shake:F("sShake").checked};F("vSens").textContent=e.sens.toFixed(1)+"\xD7",F("vFov").textContent=e.fov+"\xB0",F("vMus").textContent=Math.round(e.music*100)+"%",F("vSfx").textContent=Math.round(e.sfx*100)+"%",!t&&(this.save.settings=e,se.store(this.save),this.applySettings(),this.audio.play("click"))}pause(){if(this.state!=="play")return;this.audio.siren(!1),this.state="pause",se.gameplayStop(),F("pObj").textContent="\u{1F3AF} "+(this.game.objText||"");let t=this.input.touch,e=t?[["\u25C0\u25B6","Left side: move"],["\u{1F446}","Right side: look"],["\u270B","Grab \xB7 KO from behind \xB7 crack (hold)"],["\u26A1","Dash (loud!)"],["\u{1F9B6}","Sneak (quiet, slower)"],["\u{1FA99}","Throw a coin (lure)"],["\u{1F4A8}","Smoke bomb"]]:[["WASD","Move"],["Mouse","Look"],["E","Grab \xB7 KO from behind \xB7 crack (hold)"],["Space","Dash (loud!)"],["Z","Sneak (quiet, slower)"],["Q","Throw a coin (lure)"],["C","Smoke bomb"],["R","Restart run"]];F("pKeys").innerHTML=e.map(([i,s])=>`<li><kbd>${i}</kbd>${s}</li>`).join(""),this.screen("pause")}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),se.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),se.store(this.save),this.updateMuteIcon()}updateMuteIcon(){F("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!Da||!se.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await se.ad("midgame"))}async reviveAd(){if(!Da||!se.available||this.game.revived)return;this.state="ad",await se.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),se.gameplayStart()):(this.state="busted",F("bRevive").classList.add("hidden"))}hint(t){if(!(!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t))){if(this.game&&this.game.tut&&(this.tutStep<en.length||["move","loot","safe","pick","cone","stash"].includes(t))){this.hShown.delete(t);return}this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=F("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=Jg[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let i=F("prompt"),s=F("ring"),a=this.input&&this.input.touch,r=(this.level&&this.level.safeName?this.level.safeName:"safe").toUpperCase(),o=t==="slot"?a?"HOLD \u270B TO PULL THE LEVER":"HOLD E: PULL THE LEVER":t==="radio"?a?"HOLD \u270B TO ANSWER THE RADIO":'HOLD E: ANSWER "ALL CLEAR"':t==="case"?a?"HOLD \u270B TO SMASH":"HOLD E TO SMASH THE CASE":t==="pick"?a?"TAP \u270B TO PICK THE LOCK":"E: PICK THE LOCK":t==="picking"?a?"TAP \u270B IN THE GREEN \xB7 MOVE TO STOP":"E IN THE GREEN \xB7 MOVE TO STOP":t==="breaker"?a?"HOLD \u270B TO CUT POWER":"HOLD E TO CUT THE POWER":t==="door"?a?"TAP \u270B TO OPEN":"E: SWIPE KEYCARD":t==="locked"?"LOCKED: FIND THE KEYCARD":t==="uniform"?a?"HOLD \u270B TO TAKE THE UNIFORM":"HOLD E: TAKE HIS UNIFORM":t==="tv"?a?"TAP \u270B TO TURN THE TV ON":"E: TURN THE TV ON (LURE)":t==="vent"?a?"TAP \u270B TO CRAWL IN":"E: CRAWL INTO THE VENT":t==="hide"?a?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?a?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?a?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?a?"HOLD \u270B TO CRACK "+r:"HOLD E / CLICK TO CRACK "+r:t==="pocket"?a?"TAP \u270B KO \xB7 HOLD \u270B PICKPOCKET":"TAP E: KO \xB7 HOLD E: PICKPOCKET":t==="ko"?a?"TAP \u270B TO KNOCK OUT":"E / CLICK: KNOCK OUT":"";i.dataset.k!==t&&(i.dataset.k=t,i.innerHTML=o.replace(/(^|[\s(])(E|✋|CLICK)(?=[\s:/]|$)/g,"$1<kbd>$2</kbd>"),i.classList.toggle("hidden",!t),F("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t),this.els.bAct.lastChild.textContent=t==="pocket"?"KO / LIFT":t==="slot"?"PULL":t==="radio"?"ANSWER":t==="case"?"SMASH":t==="pick"||t==="picking"?"PICK":t==="breaker"?"CUT":t==="door"?"OPEN":t==="uniform"?"DISGUISE":t==="tv"?"TV ON":t==="vent"?"CRAWL":t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="uniform"||t==="panel"||t==="breaker"||t==="case"||t==="radio"||t==="slot"||t==="pocket")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=F("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let i=this.game;F("lootv").textContent=ne(i.lootGot),F("lootp").textContent=Math.round(i.lootGot/i.lootTotal*100)+"%",F("lootbar").style.width=Math.min(100,i.lootGot/i.lootTotal*100)+"%";let s=i.lootGot/i.lootTotal>=.7;if(F("lootbar").classList.toggle("star",s),e){this.lootStar=s;return}if(s&&!this.lootStar&&i.state==="play"){this.lootStar=!0;let r=F("ctoast");r.innerHTML="<small>LOOT STAR EARNED</small>\u2605 70% grabbed<b>Every extra dollar still counts!</b>",r.classList.remove("hidden"),r.style.animation="none",r.offsetWidth,r.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>r.classList.add("hidden"),2e3),this.audio.play("star",1),this.shake.add(.12)}let a=F("loot");a.classList.remove("punch","bigpunch"),a.offsetWidth,a.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(F("alarm").classList.toggle("hidden",!t),F("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let i=F("alarmwhy");i.textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>i.classList.add("hidden"),2600)}}announce(t){let e=F("alarmwhy");e.textContent=t,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>e.classList.add("hidden"),3e3)}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,F("alarmt").textContent=ks(e),F("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t,e){F("ctr").innerHTML=t.map(i=>`<li class="${i.st}${i===e?" just":""}"><i></i>${i.text}<b>+${ne(i.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e,t),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let i=F("ctoast");i.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${ne(t.bonus)}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onPick(t){let e=F("lockpick");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");let i=e.querySelector(".lp-zone"),s=e.querySelector(".lp-needle");i.style.left=((t.zone-t.w/2)*100).toFixed(1)+"%",i.style.width=(t.w*100).toFixed(1)+"%",s.style.left=(t.pos*100).toFixed(1)+"%",e.querySelectorAll(".lp-pins b").forEach((a,r)=>a.classList.toggle("on",r<t.pin)),e.classList.toggle("cool",t.cool>0)}onKey(t){if(F("key").classList.toggle("hidden",!t),t){let e=F("key");e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch")}}ventFx(t){let e=F("ventfx");e.style.opacity=t.toFixed(3),e.classList.toggle("hidden",t<=0)}onHide(t){F("slats").classList.toggle("hidden",!t),F("xh").classList.toggle("hidden",t)}onDisguise(t){let e=F("disgp"),i=t>0;e.classList.toggle("hidden",!i);let s=i&&this.level&&this.level.startDisguise&&!this.game.disguises,a=i?s?"w":"g":"";if(i){let r=Math.ceil(t),o=a+r;e.dataset.s!==o&&(e.dataset.s=o,e.textContent=(s?"\u{1F378} WAITER ":"\u{1F574} DISGUISED ")+r+"s",e.classList.toggle("low",r<=5))}this.disgLook!==a&&(this.disgLook=a,this.disgOn=i,a==="w"?this.vm.setOutfit(dl({sleeve:1512989,glove:16052714,bar:9082020,band:14267482})):a==="g"?this.vm.setOutfit(dl({sleeve:2834298,glove:1711142,bar:9082020,band:15911244})):this.applyOutfit())}onCrouch(t){F("sneakp").classList.toggle("hidden",!t),this.els.bSneak.classList.toggle("on",t),document.body.classList.toggle("crouch",t)}onWeight(t){let e=F("weight"),i=Math.round((1-t)*100);e.classList.toggle("hidden",i<=0),e.textContent=`\u{1F3CB} \u2212${i}%`,e.classList.toggle("hot",i>=25)}onSmoke(t){let e=F("smokep");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bSmoke.lastChild.textContent="\xD7"+t,this.els.bSmoke.classList.toggle("empty",t===0)}onInSmoke(t){this.inSmokeOn!==t&&(this.inSmokeOn=t,F("smokeov").classList.toggle("on",t))}onCoins(t){let e=F("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}lightning(){this.boltK=1,this.flash("bolt")}flash(t){let e=F("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){F("touch").classList.add("hidden"),F("fp").classList.add("hidden"),F("hud").classList.add("hidden"),F("alarm").classList.add("hidden"),this.audio.siren(!1),this.input.exitLock()}awardXP(t,e,i,s){let a=this.save.xp||0,r=Hu(t,e,i),o=a+r;this.save.xp=o;let l=ol(a),h=ol(o),c=F(s);c.innerHTML=`<span class="rk">\u{1F396} <b>${l.name}</b></span><span class="xpbar"><i style="width:${(l.frac*100).toFixed(1)}%"></i></span><span class="xpg">+${r} XP</span>`;let u=c.querySelector("i"),f=c.querySelector("b");return setTimeout(()=>{h.i>l.i?(u.style.width="100%",setTimeout(()=>{f.textContent=h.name,u.style.transition="none",u.style.width="0%",u.offsetWidth,u.style.transition="",u.style.width=(h.frac*100).toFixed(1)+"%",c.classList.add("up"),c.querySelector(".xpg").textContent="RANK UP!",this.audio.play("contract"),this.shake.add(.2)},650)):u.style.width=(h.frac*100).toFixed(1)+"%"},900),c.classList.remove("up"),{gain:r,up:h.i>l.i,rank:h}}bustTip(){let t=this.game,e=this.input.touch,i=e?"the \u{1F9B6} button":"Z",s=e?"\u270B":"E";if(t.policeBusted)return"The police arrived! Knock out alerted guards before they radio in, or disarm the alarm keypad.";let a={hide:"Tip: a guard saw you climb in. Only hide when nobody is looking.",owner:"Tip: the owner wakes up to noise. Sneak past slowly and never dash near him.",dash:`Tip: dashing is loud and gets you noticed. Walk, or sneak with ${i}.`,dog:"Tip: the dog follows your scent. Throw a coin and it runs off to sniff it.",los:"Tip: once spotted, break line of sight: duck round a corner, hide in a wardrobe or drop smoke.",cone:`Tip: stay out of the yellow vision cones. Sneak with ${i} behind low furniture, and hit guards from behind with ${s}.`},r=this.level.tips||[],o=t.bustCause||"cone";return t.tut?a[o]||a.cone:(o==="cone"||o==="los")&&r.length&&Math.random()<.5?"Tip: "+r[Math.random()*r.length|0]:a[o]||a.cone}onBusted(){this.state="busted",this.audio.siren(!1),se.gameplayStop(),F("bRevive").classList.toggle("hidden",!Da||!se.available||this.game.revived),F("bustTip").textContent=this.bustTip();let t=jc(this.save,this.runRecord(!1));this.awardXP(!1,0,this.game.lootGot,"bXP"),(this.save.hot||0)>=2&&(this.lostStreak=this.save.hot),this.save.hot=0;{let i=Math.round(this.game.lootGot*.25);this.save.cash=(this.save.cash||0)+i,F("bCash").textContent=i?`\u{1F4B0} Kept ${ne(i)} of the loot you grabbed`:""}this.bustStreak=this.bustKey===this.level.id?(this.bustStreak||0)+1:1,this.bustKey=this.level.id,F("bEasy").classList.toggle("hidden",!(this.mode==="classic"&&this.bustStreak>=3&&(this.diff==="normal"||this.diff==="hard"))),se.store(this.save);let e=this.mode==="tutorial"?"":this.jobsToast(Zc(this.save,this.runRecord(!1)));this.lostStreak&&(F("bCash").textContent+=` \xB7 \u{1F525} ${this.lostStreak}-escape streak lost`,this.lostStreak=0),F("bAch").innerHTML=t.map(i=>`\u{1F3C6} ${i.icon} ${i.name} unlocked!`).concat(e?[e]:[]).join("<br>"),this.chipify("bAch"),this.screen("busted"),this.drawRecap("bMap",!1)}onWin(t){this.state="result",this.bustStreak=0,this.audio.siren(!1),F("alarm").classList.add("hidden"),F("siren").classList.remove("on"),se.gameplayStop(),se.happytime();let e=t.stars.filter(Boolean).length,i,s,a;if(t.daily){let g=this.daily.key,M=this.save.daily=this.save.daily||{};i=M[g]||{score:0,stars:0},s=t.score>i.score,M[g]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},a=M[g].score;let S=this.save.streak||{last:"",n:0};S.last!==g&&(S.n=S.last===Na()?S.n+1:1,S.last=g),this.save.streak=S;for(let _ of Object.keys(M).sort().slice(0,-14))delete M[_]}else{let g=gi(this.level.id,this.diff);this.nextWasLocked=this.mode==="classic"&&this.levelIdx+1<tn.length&&!this.levelUnlocked(this.levelIdx+1),i=this.save.best[g]||{score:0,stars:0},s=t.score>i.score,this.save.best[g]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)};let M=this.save.mastered=this.save.mastered||{};this.justMastered=e>=3&&this.mode==="classic"&&!M[this.level.id],this.justMastered&&(M[this.level.id]=1,this.save.cash=(this.save.cash||0)+2e3),a=this.save.best[g].score;let S=this.ghost,_=!S||t.time<S.t;if(this.ghostMsg=S?_?`\u{1F47B} Beat your ghost by ${(S.t-t.time).toFixed(1)}s!`:`\u{1F47B} Ghost was ${(t.time-S.t).toFixed(1)}s faster`:"",this.mode==="classic"&&(s||_)){let w=this.game.trail,k=[];for(let P=0;P<w.length;P+=2)k.push(Math.round(w[P][0]*10),Math.round(w[P][1]*10));(this.save.ghost=this.save.ghost||{})[g]={t:t.time,dt:.7,pts:k}}}this.save.contracts=(this.save.contracts||0)+t.contracts.filter(g=>g.st==="ok").length,se.store(this.save),F("rStars").innerHTML=this.starsHTML(0);let r=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];F("rGoals").innerHTML=t.stars.map((g,M)=>`<li class="${g?"ok":""}">${g?"\u2714":"\u2716"} ${r[M]}</li>`).join(""),F("rLoot").textContent=ne(t.loot),F("rTime").textContent=ks(t.time)+(t.timeBonus?`  (+${ne(t.timeBonus)})`:""),F("rGhost").textContent=t.ghost?"+"+ne(t.ghostBonus):"\u2014",F("rScore").textContent="$0",F("rCtr").innerHTML=t.contracts.map(g=>`<li class="${g.st==="ok"?"ok":"no"}">${g.st==="ok"?"\u2714":"\u2716"} ${g.text}<b>${g.st==="ok"?"+"+ne(g.bonus):"\u2014"}</b></li>`).join(""),F("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),F("rBest").textContent=(s?"NEW BEST!":"Best "+ne(a))+" \xB7 "+t.diff+(t.daily?` \xB7 \u{1F525}${this.save.streak.n} day streak \xB7 next Daily in ${ll()}`:""),F("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,F("rBest").classList.toggle("new",s),!t.daily&&this.ghostMsg&&(F("rBest").textContent+="  \xB7  "+this.ghostMsg);let o=this.game.tut&&!this.save.tutDone;this.game.tut&&(this.save.tutDone=!0);let l=jc(this.save,this.runRecord(!0,t));this.awardXP(!0,t.score,t.loot,"rXP");let h=this.jobsToast(Zc(this.save,this.runRecord(!0,t))),c=this.mode==="tutorial"?0:this.save.hot=(this.save.hot||0)+1,u=Math.min(.5,.1*Math.max(0,c-1)),f=Math.round(t.score*u);this.save.cash=(this.save.cash||0)+t.score+f,F("rCash").textContent=`\u{1F4B0} +${ne(t.score+f)} to your stash${f?` (\u{1F525} streak ${c}: +${Math.round(u*100)}%)`:""} \xB7 ${ne(this.save.cash)}${this.canAffordGear()?" \xB7 \u{1F9F0} new gear!":""}`;let x=On.filter(g=>g.id!=="classic"&&zs(g,this.save)&&!(this.save.seenOut||[]).includes(g.id));this.save.seenOut=On.filter(g=>zs(g,this.save)).map(g=>g.id),this.showAchToast(l),o&&(F("rAch").innerHTML="\u{1F393} <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now."+(F("rAch").innerHTML?"<br>"+F("rAch").innerHTML:""),F("rAch").classList.remove("hidden"));let d=this.levelIdx+1,v=!t.daily&&d<tn.length&&this.levelUnlocked(d);F("bNext").textContent=t.daily?"MAP \u25B6":v?"NEXT: "+tn[d].name.toUpperCase()+" \u25B6":"NEXT \u25B6",!t.daily&&this.nextWasLocked&&v&&(this.sel=this.save.sel="lvl"+(d+1),F("rAch").innerHTML=`<span class="unlock">\u{1F513} New heist unlocked: <b>${tn[d].name}</b></span>`+(F("rAch").innerHTML?"<br>"+F("rAch").innerHTML:""),F("rAch").classList.remove("hidden"),setTimeout(()=>{this.state==="result"&&(this.audio.play("contract"),this.shake.add(.15))},1500)),this.nextWasLocked=!1,this.justMastered&&(F("rAch").innerHTML='<span class="unlock">\u{1F3C5} Heist mastered! +$2,000 bonus</span><br>'+F("rAch").innerHTML,F("rAch").classList.remove("hidden"),this.justMastered=!1),h&&(F("rAch").innerHTML+=(F("rAch").innerHTML?"<br>":"")+h,F("rAch").classList.remove("hidden")),x.length&&(F("rAch").innerHTML+=`<br>\u{1F9E4} New outfit: <b>${x.map(g=>g.name).join(", ")}</b>`,F("rAch").classList.remove("hidden")),se.store(this.save),this.chipify("rAch"),this.screen("result"),this.drawRecap("rMap",!0);let m=F("rStars").children;t.stars.forEach((g,M)=>{g&&setTimeout(()=>{this.state==="result"&&(m[M].classList.add("on","pop"),this.audio.play("star",M),this.shake.add(.12))},450+M*380)});let p=performance.now(),y=1100,b=()=>{let g=Math.min(1,(performance.now()-p)/y);F("rScore").textContent=ne(t.score*(1-Math.pow(1-g,3))),g<1&&this.state==="result"&&requestAnimationFrame(b)};b()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let i=this.state;i==="play"||i==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(i==="menu"||i==="soon")&&this.game.update(e,!0),i!=="pause"&&i!=="ad"&&(this.particles.update(e),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),this.nightSky.position.copy(this.camera.position),i!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),i!=="pause"&&this.rain.update(e,this.camera.position.x,this.camera.position.z);{let s=this.game,a=s.L,r=s.player,o=i==="play"&&this.level&&this.level.rain&&a&&a.outdoor[Math.floor(r.z)*a.W+Math.floor(r.x)]===1;this.wetK=Ee(this.wetK||0,o?1:0,o?2.5:.8,e);let l=F("wet");l.style.opacity=this.wetK.toFixed(2),l.classList.toggle("hidden",this.wetK<.02)}this.audio.rain(!!(this.level&&this.level.rain)&&(i==="play"||i==="pause"||i==="busted")),this.audio.rumble(!!(this.level&&this.level.train)&&(i==="play"||i==="pause"||i==="busted")),this.boltK>0&&(this.boltK=Math.max(0,this.boltK-e*2.2)),this.renderer.toneMappingExposure=1.15+this.boltK*this.boltK*1.6,this.dust.points.visible=i!=="menu"&&i!=="soon",this.floaters.update(i==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),i==="play"&&this.updateHud(),this.audio.setMuffle(i==="play"&&this.game.slowT>.05),this.audio.tension=i==="play"?this.game.tension:0,this.audio.mode=i==="menu"||i==="soon"||i==="trophies"||i==="outfits"?"menu":"game",F("vignette").style.opacity=i==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),i==="outfits"&&(this.vm.mat.color.setRGB(1.05,1,.95),this.vm.update(e,{move:0,bob:0,lookX:0,lookY:0,punch:0,crack:!1,grab:0,dash:!1,busted:!1})),this.vm.visible=i==="outfits"||(i==="play"||i==="busted"||i==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}skipTutorial(){this.save.tutDone=!0,se.store(this.save),this.tutStep=en.length,F("tut").classList.add("hidden"),this.audio.play("click")}updateTutorial(){let t=F("tut"),e=this.game;if(!e.tut||this.tutStep>=en.length){t.classList.add("hidden"),document.body.classList.remove("tutcard");return}if(this.tutStep==null&&(this.tutStep=0),en[this.tutStep].done(e)&&(this.tutStep++,this.audio.play("star",Math.min(2,this.tutStep%3)),t.classList.remove("done"),t.offsetWidth,t.classList.add("done"),this.tutStep>=en.length)){setTimeout(()=>t.classList.add("hidden"),900);return}let s=en[this.tutStep],a=this.tutStep+(this.input.touch?"t":"k");t.dataset.k!==a&&(t.dataset.k=a,t.querySelector("small").textContent=`TUTORIAL ${this.tutStep+1}/${en.length}`,t.querySelector("span").textContent=s.text[this.input.touch?1:0],t.querySelector("em").textContent=this.input.touch?"tap to skip":"T to skip",t.querySelector("i").style.width=this.tutStep/en.length*100+"%"),t.classList.toggle("hidden",e.alarm||e.state!=="play"),document.body.classList.toggle("tutcard",!t.classList.contains("hidden"))}updateHud(){this.updateTutorial();let t=this.game,e=t.player,i=Math.floor(t.time);i!==this.lastSec&&(this.lastSec=i,F("time").textContent=ks(i)),this.drawMinimap();let s=F("wp"),a=t.objectiveTarget(),r=a.x,o=a.z,l=a.label,h=Math.hypot(r-e.x,o-e.z);if(t.state!=="play"||h<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let u=this._d.set(r,1.1,o).project(this.camera),f=u.x,x=u.y,d=u.z>1;d&&(f=-f,x=-x);let v=.88,m=d||Math.abs(f)>v||Math.abs(x)>v;if(m){let g=v/Math.max(Math.abs(f),Math.abs(x),.001);f*=g,x*=g,d&&Math.abs(x)<v-.01&&(x=-v)}m&&f<-.4&&x>-.3&&(f=-.4),s.classList.toggle("edge",m);let p=Math.max(64,Math.min(this.w-64,(f+1)/2*this.w)),y=Math.max(40,Math.min(this.h-40,(1-x)/2*this.h));s.style.transform=`translate(${p}px,${y}px) translate(-50%,-50%)`;let b=l+" "+Math.round(h*1.5)+"m";s.dataset.t!==b&&(s.dataset.t=b,s.lastChild.textContent=b)}let c=F("ind");t.guards.forEach((u,f)=>{let x=c.children[f];x||(x=document.createElement("i"),c.appendChild(x));let d=u.state==="alert"||u.state==="flee",v=!d&&(u.susp>.04||u.state==="investigate"||u.state==="search");if(!d&&!v){x.style.display="none";return}let m=Pe(e.face,Math.atan2(u.x-e.x,u.z-e.z));x.style.display="",x.className=d?"alert":"",x.style.opacity=d?1:(.35+u.susp*.65).toFixed(2),x.style.transform=`translate(-50%,-50%) rotate(${-m*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let s=i.getContext("2d");for(let r=0;r<t.H;r++)for(let o=0;o<t.W;o++){let l=r*t.W+o,h=t.ch[l];s.fillStyle=h==="#"?"#1d2140":!t.walk[l]&&!t.outdoor[l]?"#a7a3bd":t.outdoor[l]?t.floor[l]==="road"?"#7d8596":"#5fae4c":"#efe9df",s.fillRect(o*e,r*e,e,e)}for(let r of this.game.vents||[]){let o=r.gx*e,l=r.gz*e;s.fillStyle="#6a7484",s.fillRect(o-3,l-3,6,6),s.fillStyle="#1d2140",s.fillRect(o-2,l-1.5,4,1),s.fillRect(o-2,l+.5,4,1)}this.mmBase=i,this.mmS=e;let a=F("mm");a.width=i.width,a.height=i.height,this.mmCtx=a.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,i=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let h of t.loot)e.fillStyle=h.type==="cash"?"#2fbf5a":h.type==="gold"?"#f5b301":h.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(h.x*i-1.5,h.z*i-1.5,3,3);t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*i,(t.L.safe.y+.15)*i,i*.7,i*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*i,t.L.exit.z*i,i,0,6.3),e.stroke());for(let h of t.guards){let c=h.state==="ko"||h.state==="getup"||h.state==="sleep",u=h.state==="alert"||h.state==="flee"?"#ff3b4e":h.kind==="clerk"?"#f4f1ea":h.susp>.25?"#ff9f1c":c?"#8a8fae":"#3f6fe0";if(!c){e.fillStyle=h.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(h.x*i,h.z*i);let f=-h.face+Math.PI/2;e.arc(h.x*i,h.z*i,h.range*i,f-h.fov/2,f+h.fov/2),e.closePath(),e.fill()}e.fillStyle=u,e.beginPath(),e.arc(h.x*i,h.z*i,2.6,0,6.3),e.fill()}if(!t.powerOff)for(let h of t.spots)e.fillStyle=h.cool>0?"rgba(255,48,64,.6)":"rgba(255,240,176,.55)",e.beginPath(),e.arc(h.x*i,h.z*i,h.def.r*i,0,6.3),e.fill();if(!t.powerOff)for(let h of t.lasers)e.fillStyle=h.on?"#ff3040":"rgba(255,48,64,.3)",h.alongX?e.fillRect(h.lo*i,h.line*i-1,(h.hi-h.lo)*i,2):e.fillRect(h.line*i-1,h.lo*i,2,(h.hi-h.lo)*i);for(let h of t.doors)e.fillStyle=h.open?"#3ddc84":"#ff3b4e",e.fillRect(h.x*i,h.y*i,i,i);for(let h of t.keyMeshes)h.m.visible&&(e.fillStyle="#2f7ae8",e.fillRect(h.x*i+.5,h.y*i+.5,i-1,i-1));for(let h of t.dogs)e.fillStyle=h.state==="bark"||h.state==="barkHide"?"#ff3b4e":"#c98a4a",e.fillRect(h.x*i-2,h.z*i-2,4,4);let a=this.ghost;if(a&&a.pts.length>3){let h=a.pts,c=h.length/2;e.strokeStyle="rgba(199,125,255,.45)",e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(h[0]/10*i,h[1]/10*i);for(let p=1;p<c;p++)e.lineTo(h[p*2]/10*i,h[p*2+1]/10*i);e.stroke(),e.setLineDash([]);let u=Math.min(c-1,t.time/a.dt),f=Math.floor(u),x=Math.min(c-1,f+1),d=u-f,v=(h[f*2]+(h[x*2]-h[f*2])*d)/10*i,m=(h[f*2+1]+(h[x*2+1]-h[f*2+1])*d)/10*i;e.fillStyle="rgba(199,125,255,.95)",e.beginPath(),e.arc(v,m,3.4,0,6.3),e.fill(),e.strokeStyle="#fff",e.lineWidth=1,e.stroke()}let r=-s.face+Math.PI/2,o=s.x*i,l=s.z*i;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(o+Math.cos(r)*5,l+Math.sin(r)*5),e.lineTo(o+Math.cos(r+2.5)*4,l+Math.sin(r+2.5)*4),e.lineTo(o+Math.cos(r-2.5)*4,l+Math.sin(r-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,i=e.L,s=this.camera,a=this.aspect<1?1+(1-this.aspect)*1.6:1,r;if(this.state==="menu"||this.state==="soon"){let o=this.time*.07,l=this._f.set(i.W/2,0,i.H/2-2);s.position.set(l.x+Math.sin(o)*17*a,19*a,l.z+Math.cos(o)*17*a),s.lookAt(l),r=42}else{e.applyCamera(s,t),r=(this.aspect<1?this.fovBase+14:this.fovBase)+e.fovKick+(e.fovPunch||0);let o=F("speed"),l=Math.min(1,e.fovKick/9).toFixed(2);o.dataset.o!==l&&(o.dataset.o=l,o.style.opacity=l)}Math.abs(s.fov-r)>.01&&(s.fov=r,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},Yu=new Qc;window.__app=Yu;Yu.boot().catch(n=>{console.error(n);let t=F("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
