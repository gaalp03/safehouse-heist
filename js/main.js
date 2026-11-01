var sh=0,ml=1,rh=2;var er=1,ah=2,hs=3,xi=0,Ge=1,Ue=2,Di=0,us=1,Sn=2,gl=3,xl=4,oh=5;var Ni=100,lh=101,ch=102,hh=103,uh=104,fh=200,dh=201,ph=202,mh=203,_l=204,yl=205,gh=206,xh=207,_h=208,yh=209,vh=210,Mh=211,bh=212,Sh=213,wh=214,Jr=0,$r=1,Kr=2,es=3,jr=4,Qr=5,ta=6,ea=7,Aa=0,Th=1,Ah=2,Fn=0,vl=1,Ml=2,bl=3,nr=4,Sl=5,wl=6,Tl=7;var Al=300,Ui=301,fs=302,Ea=303,Ca=304,ns=1e3,pn=1001,na=1002,Ne=1003,Eh=1004;var ir=1005;var je=1006,Ra=1007;var ti=1008;var en=1009,El=1010,Cl=1011,ds=1012,Pa=1013,wn=1014,gn=1015,Tn=1016,Ia=1017,La=1018,Fi=1020,Rl=35902,Pl=35899,Il=1021,Ll=1022,An=1023,Jn=1026,ei=1027,Da=1028,Na=1029,_i=1030,Ua=1031;var Fa=1033,sr=33776,rr=33777,ar=33778,or=33779,Oa=35840,Ba=35841,za=35842,ka=35843,Ga=36196,Va=37492,Ha=37496,Wa=37488,Xa=37489,lr=37490,qa=37491,Ya=37808,Za=37809,Ja=37810,$a=37811,Ka=37812,ja=37813,Qa=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,cr=36285,fo=36286;var Ps=2300,ia=2301,Yr=2302,ol=2303,ll=2400,cl=2401,hl=2402;var Ch=3200;var po=0,Rh=1,ni="",Ke="srgb",Is="srgb-linear",Ls="linear",ie="srgb";var Zr=7680;var Ph=519,Ih=512,Lh=513,Dh=514,Dl=515,Nh=516,Uh=517,Nl=518,Ul=519,Fh=35044;var Fl="300 es",mn=2e3,is=2001;function $u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ku(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=Ds("canvas");return i.style.display="block",i}var Ic={},ss=null;function Ol(...i){let t="THREE."+i.shift();ss?ss("log",t,...i):console.log(t,...i)}function Bh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=Bh(i);let t="THREE."+i.shift();if(ss)ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Dt(...i){i=Bh(i);let t="THREE."+i.shift();if(ss)ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rs(...i){let t=i.join(" ");t in Ic||(Ic[t]=!0,It(...i))}function zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kh={[Jr]:Jr,[Kr]:ta,[jr]:jr,[es]:Qr,[$r]:$r,[ta]:Kr,[ea]:ea,[Qr]:es},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zo=Math.PI/180,sa=180/Math.PI;function hr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function ju(i,t){return(i%t+t)%t}function ko(i,t,e){return(1-e)*i+e*t}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qu(i,t){if(t.constructor===Float32Array)return i;let e=Bl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function tf(i,t){if(t.constructor===Float32Array)return i;let e=Bl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Hl=class Hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hl.prototype.isVector2=!0;var Vt=Hl,Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],c=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==u||h!==m||c!==g){let p=l*u+h*m+c*g+f*v;p<0&&(u=-u,m=-m,g=-g,v=-v,p=-p);let d=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);d=Math.sin(d*_)/M,o=Math.sin(o*_)/M,l=l*d+u*o,h=h*d+m*o,c=c*d+g*o,f=f*d+v*o}else{l=l*d+u*o,h=h*d+m*o,c=c*d+g*o,f=f*d+v*o;let _=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=_,h*=_,c*=_,f*=_}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],c=n[s+3],f=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+c*f+l*m-h*u,t[e+1]=l*g+c*u+h*f-o*m,t[e+2]=h*g+c*m+o*u-l*f,t[e+3]=c*g-o*f-l*u-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"YXZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"ZXY":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"ZYX":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"YZX":this._x=u*c*f+h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f-u*m*g;break;case"XZY":this._x=u*c*f-h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f+u*m*g;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-s*o,this._w=a*c-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wl=class Wl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),c=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*h+a*f-o*c,this.y=n+l*c+o*h-r*f,this.z=s+l*f+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wl.prototype.isVector3=!0;var G=Wl,Go=new G,Lc=new Dn,Xl=class Xl{constructor(t,e,n,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],f=n[7],u=n[2],m=n[5],g=n[8],v=s[0],p=s[3],d=s[6],_=s[1],M=s[4],y=s[7],C=s[2],E=s[5],x=s[8];return r[0]=a*v+o*_+l*C,r[3]=a*p+o*M+l*E,r[6]=a*d+o*y+l*x,r[1]=h*v+c*_+f*C,r[4]=h*p+c*M+f*E,r[7]=h*d+c*y+f*x,r[2]=u*v+m*_+g*C,r[5]=u*p+m*M+g*E,r[8]=u*d+m*y+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=c*a-o*h,u=o*l-c*r,m=h*r-a*l,g=e*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*h-c*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xl.prototype.isMatrix3=!0;var Nt=Xl,Vo=new Nt,Dc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}var $t=ef();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=Ds("canvas")),ki.width=t.width,ki.height=t.height;let s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nf=0,rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var sf=0,Wo=new G,Qe=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=je,a=ti,o=An,l=en,h=i.DEFAULT_ANISOTROPY,c=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=hr(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Al;Qe.DEFAULT_ANISOTROPY=1;var ql=class ql{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],f=l[8],u=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(c-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,y=(m+1)/2,C=(d+1)/2,E=(c+u)/4,x=(f+v)/4,T=(g+p)/4;return M>y&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=x/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=T/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=T/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-v)/_,this.z=(u-c)/_,this.w=Math.acos((h+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ql.prototype.isVector4=!0;var me=ql,aa=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ns=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ta=class Ta{constructor(t,e,n,s,r,a,o,l,h,c,f,u,m,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,c,f,u,m,g,v,p)}set(t,e,n,s,r,a,o,l,h,c,f,u,m,g,v,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*c,m=a*f,g=o*c,v=o*f;e[0]=l*c,e[4]=-l*f,e[8]=h,e[1]=m+g*h,e[5]=u-v*h,e[9]=-o*l,e[2]=v-u*h,e[6]=g+m*h,e[10]=a*l}else if(t.order==="YXZ"){let u=l*c,m=l*f,g=h*c,v=h*f;e[0]=u+v*o,e[4]=g*o-m,e[8]=a*h,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=m*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*c,m=l*f,g=h*c,v=h*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*c,e[9]=v-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*c,m=a*f,g=o*c,v=o*f;e[0]=l*c,e[4]=g*h-m,e[8]=u*h+v,e[1]=l*f,e[5]=v*h+u,e[9]=m*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*h,g=o*l,v=o*h;e[0]=l*c,e[4]=v-u*f,e[8]=g*f+m,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=m*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,m=a*h,g=o*l,v=o*h;e[0]=l*c,e[4]=-f,e[8]=h*c,e[1]=u*f+v,e[5]=a*c,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*c,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,af)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ai.crossVectors(n,sn),ai.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ai.crossVectors(n,sn)),ai.normalize(),wr.crossVectors(sn,ai),s[0]=ai.x,s[4]=wr.x,s[8]=sn.x,s[1]=ai.y,s[5]=wr.y,s[9]=sn.y,s[2]=ai.z,s[6]=wr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],f=n[5],u=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],_=n[3],M=n[7],y=n[11],C=n[15],E=s[0],x=s[4],T=s[8],U=s[12],P=s[1],I=s[5],F=s[9],A=s[13],w=s[2],N=s[6],B=s[10],z=s[14],K=s[3],V=s[7],Y=s[11],$=s[15];return r[0]=a*E+o*P+l*w+h*K,r[4]=a*x+o*I+l*N+h*V,r[8]=a*T+o*F+l*B+h*Y,r[12]=a*U+o*A+l*z+h*$,r[1]=c*E+f*P+u*w+m*K,r[5]=c*x+f*I+u*N+m*V,r[9]=c*T+f*F+u*B+m*Y,r[13]=c*U+f*A+u*z+m*$,r[2]=g*E+v*P+p*w+d*K,r[6]=g*x+v*I+p*N+d*V,r[10]=g*T+v*F+p*B+d*Y,r[14]=g*U+v*A+p*z+d*$,r[3]=_*E+M*P+y*w+C*K,r[7]=_*x+M*I+y*N+C*V,r[11]=_*T+M*F+y*B+C*Y,r[15]=_*U+M*A+y*z+C*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],f=t[6],u=t[10],m=t[14],g=t[3],v=t[7],p=t[11],d=t[15],_=l*m-h*u,M=o*m-h*f,y=o*u-l*f,C=a*m-h*c,E=a*u-l*c,x=a*f-o*c;return e*(v*_-p*M+d*y)-n*(g*_-p*C+d*E)+s*(g*M-v*C+d*x)-r*(g*y-v*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(a*c-o*h)-n*(r*c-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=t[9],u=t[10],m=t[11],g=t[12],v=t[13],p=t[14],d=t[15],_=e*o-n*a,M=e*l-s*a,y=e*h-r*a,C=n*l-s*o,E=n*h-r*o,x=s*h-r*l,T=c*v-f*g,U=c*p-u*g,P=c*d-m*g,I=f*p-u*v,F=f*d-m*v,A=u*d-m*p,w=_*A-M*F+y*I+C*P-E*U+x*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=(o*A-l*F+h*I)*N,t[1]=(s*F-n*A-r*I)*N,t[2]=(v*x-p*E+d*C)*N,t[3]=(u*E-f*x-m*C)*N,t[4]=(l*P-a*A-h*U)*N,t[5]=(e*A-s*P+r*U)*N,t[6]=(p*y-g*x-d*M)*N,t[7]=(c*x-u*y+m*M)*N,t[8]=(a*F-o*P+h*T)*N,t[9]=(n*P-e*F-r*T)*N,t[10]=(g*E-v*y+d*_)*N,t[11]=(f*y-c*E-m*_)*N,t[12]=(o*U-a*I-l*T)*N,t[13]=(e*I-n*U+s*T)*N,t[14]=(v*M-g*C-p*_)*N,t[15]=(c*C-f*M+u*_)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+n,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,f=o+o,u=r*h,m=r*c,g=r*f,v=a*c,p=a*f,d=o*f,_=l*h,M=l*c,y=l*f,C=n.x,E=n.y,x=n.z;return s[0]=(1-(v+d))*C,s[1]=(m+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(m-y)*E,s[5]=(1-(u+d))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+M)*x,s[9]=(p-_)*x,s[10]=(1-(u+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let h=1/a,c=1/o,f=1/l;return yn.elements[0]*=h,yn.elements[1]*=h,yn.elements[2]*=h,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){let h=this.elements,c=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===is)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=f,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){let h=this.elements,c=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===mn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===is)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=f,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ta.prototype.isMatrix4=!0;var oe=Ta,Gi=new G,yn=new oe,rf=new G(0,0,0),af=new G(1,1,1),ai=new G,wr=new G,sn=new G,Uc=new oe,Fc=new Dn,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},of=0,Oc=new G,Vi=new Dn,Hn=new oe,Tr=new G,Ss=new G,lf=new G,cf=new Dn,Bc=new G(1,0,0),zc=new G(0,1,0),kc=new G(0,0,1),Gc={type:"added"},hf={type:"removed"},Hi={type:"childadded",child:null},Xo={type:"childremoved",child:null},Me=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new $n,n=new Dn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ss,Tr,this.up):Hn.lookAt(Tr,Ss,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Me.DEFAULT_UP=new G(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},uf={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),d=this._getHandJoint(h,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&u>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=ju(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qo(a,r,t+1/3),this.g=qo(a,r,t),this.b=qo(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return $t.workingToColorSpace(Ye.copy(this),t),Math.round(jt(Ye.r*255,0,255))*65536+Math.round(jt(Ye.g*255,0,255))*256+Math.round(jt(Ye.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=c<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ke){$t.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ar);let n=ko(oi.h,Ar.h,e),s=ko(oi.s,Ar.s,e),r=ko(oi.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Pt;Pt.NAMES=Vh;var Fs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ci=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new G,Wn=new G,Yo=new G,Xn=new G,Wi=new G,Xi=new G,Vc=new G,Zo=new G,Jo=new G,$o=new G,Ko=new me,jo=new me,Qo=new me,ui=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Wn.subVectors(n,e),Yo.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Wn),l=vn.dot(Yo),h=Wn.dot(Wn),c=Wn.dot(Yo),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ko.setScalar(0),jo.setScalar(0),Qo.setScalar(0),Ko.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(Qo,r.z),a}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Wn.subVectors(t,e),vn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),Zo.subVectors(t,n);let l=Wi.dot(Zo),h=Xi.dot(Zo);if(l<=0&&h<=0)return e.copy(n);Jo.subVectors(t,s);let c=Wi.dot(Jo),f=Xi.dot(Jo);if(c>=0&&f<=c)return e.copy(s);let u=l*f-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return a=l/(l-c),e.copy(n).addScaledVector(Wi,a);$o.subVectors(t,r);let m=Wi.dot($o),g=Xi.dot($o);if(g>=0&&m<=g)return e.copy(r);let v=m*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Xi,o);let p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return Vc.subVectors(r,s),o=(f-c)/(f-c+(m-g)),e.copy(s).addScaledVector(Vc,o);let d=1/(p+v+u);return a=v*d,o=u*d,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),Cr.subVectors(this.max,ws),qi.subVectors(t.a,ws),Yi.subVectors(t.b,ws),Zi.subVectors(t.c,ws),li.subVectors(Yi,qi),ci.subVectors(Zi,Yi),wi.subVectors(qi,Zi);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-wi.z,wi.y,li.z,0,-li.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-li.y,li.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!tl(e,qi,Yi,Zi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,qi,Yi,Zi,Cr))?!1:(Rr.crossVectors(li,ci),e=[Rr.x,Rr.y,Rr.z],tl(e,qi,Yi,Zi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new G,new G,new G,new G,new G,new G,new G,new G],Mn=new G,Er=new Nn,qi=new G,Yi=new G,Zi=new G,li=new G,ci=new G,wi=new G,ws=new G,Cr=new G,Rr=new G,Ti=new G;function tl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),h=e.dot(Ti),c=n.dot(Ti);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Te=new G,Pr=new Vt,ff=0,le=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fh,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?Bl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Qu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):tf(t,this.array)}};var Os=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Bs=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},df=new Nn,Ts=new G,el=new G,Kn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(el)),this.expandByPoint(Ts.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pf=0,dn=new oe,nl=new Me,Ji=new G,rn=new Nn,As=new Nn,De=new G,ge=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?Bs:Os)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(rn.min,As.min),rn.expandByPoint(De),De.addVectors(rn.max,As.max),rn.expandByPoint(De)):(rn.expandByPoint(As.min),rn.expandByPoint(As.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)De.fromBufferAttribute(o,h),l&&(Ji.fromBufferAttribute(t,h),De.add(Ji)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],h=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new G,l[U]=new G;let c=new G,f=new G,u=new G,m=new Vt,g=new Vt,v=new Vt,p=new G,d=new G;function _(U,P,I){h[U]=h[P]=h[I]=1,c.fromBufferAttribute(n,U),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,I),m.fromBufferAttribute(r,U),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,I),f.sub(c),u.sub(c),g.sub(m),v.sub(m);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(F),d.copy(u).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(F),o[U].add(p),o[P].add(p),o[I].add(p),l[U].add(d),l[P].add(d),l[I].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,P=M.length;U<P;++U){let I=M[U],F=I.start,A=I.count;for(let w=F,N=F+A;w<N;w+=3)_(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let y=new G,C=new G,E=new G,x=new G;function T(U){E.fromBufferAttribute(s,U),x.copy(E);let P=o[U];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),C.crossVectors(x,P);let F=C.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,F)}for(let U=0,P=n.count;U<P;++U)h[U]&&T(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,h=new G,c=new G,f=new G;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,p),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,f=o.normalized,u=new h.constructor(l.length*c),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*c;for(let d=0;d<c;d++)u[g++]=h[m++]}return new le(u,c,f)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,f=h.length;c<f;c++){let u=h[c],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let f=0,u=h.length;f<u;f++){let m=h[f];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],f=r[h];for(let u=0,m=f.length;u<m;u++)c.push(f[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var il=new G,mf=new G,gf=new Nt,bn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=il.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gf.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xf=0,jn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=us,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new G,sl=new G,Ir=new G,Lr=new G,zs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sl.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),l=-Lr.dot(Ir),h=Lr.lengthSq(),c=Math.abs(1-a*a),f,u,m,g;if(c>0)if(f=a*l-o,u=a*o-l,g=r*c,f>=0)if(u>=-g)if(u<=g){let v=1/c;f*=v,u*=v,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+h}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+h):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+h):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+h);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sl).addScaledVector(Ir,u),m}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,f=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,d=n.x-a.x,_=n.y-a.y,M=n.z-a.z,y=Math.abs(l),C=Math.abs(h),E=Math.abs(c),x,T,U,P,I,F,A,w,N,B,z,K;if(y>=C&&y>=E?(U=l,F=f,N=g,K=d,l>=0?(x=h,T=c,P=u,I=m,A=v,w=p,B=_,z=M):(x=c,T=h,P=m,I=u,A=p,w=v,B=M,z=_)):C>=E?(U=h,F=u,N=v,K=_,h>=0?(x=c,T=l,P=m,I=f,A=p,w=g,B=M,z=d):(x=l,T=c,P=f,I=m,A=g,w=p,B=d,z=M)):(U=c,F=m,N=p,K=M,c>=0?(x=l,T=h,P=f,I=u,A=g,w=v,B=d,z=_):(x=h,T=l,P=u,I=f,A=v,w=g,B=_,z=d)),U===0)return null;let V=x/U,Y=T/U,$=1/U,lt=P-V*F,J=I-Y*F,D=A-V*N,nt=w-Y*N,at=B-V*K,gt=z-Y*K,it=at*nt-gt*D,Lt=lt*gt-J*at,Yt=D*J-nt*lt;if(s){if(it<0||Lt<0||Yt<0)return null}else if((it<0||Lt<0||Yt<0)&&(it>0||Lt>0||Yt>0))return null;let vt=it+Lt+Yt;if(vt===0)return null;let Ut=$*(it*F+Lt*N+Yt*K);return(vt>0?Ut<0:Ut>0)?null:this.at(Ut/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hc=new oe,Ai=new zs,Dr=new Kn,Wc=new G,Nr=new G,Ur=new G,Fr=new G,rl=new G,Or=new G,Xc=new G,Br=new G,kt=class extends Me{constructor(t=new ge,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],f=r[l];c!==0&&(rl.fromBufferAttribute(f,t),a?Or.addScaledVector(rl,c):Or.addScaledVector(rl.sub(e),c))}e.add(Or)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Dr,Wc)===null||Ai.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Hc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],d=a[p.materialIndex],_=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=M;y<C;y+=3){let E=o.getX(y),x=o.getX(y+1),T=o.getX(y+2);s=zr(this,d,t,n,h,c,f,E,x,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let _=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);s=zr(this,a,t,n,h,c,f,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],d=a[p.materialIndex],_=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=M;y<C;y+=3){let E=y,x=y+1,T=y+2;s=zr(this,d,t,n,h,c,f,E,x,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let _=p,M=p+1,y=p+2;s=zr(this,a,t,n,h,c,f,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function _f(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===xi,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Br);return h<e.near||h>e.far?null:{distance:h,point:Br.clone(),object:i}}function zr(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Nr),i.getVertexPosition(l,Ur),i.getVertexPosition(h,Fr);let c=_f(i,t,e,n,Nr,Ur,Fr,Xc);if(c){let f=new G;ui.getBarycoord(Xc,Nr,Ur,Fr,f),s&&(c.uv=ui.getInterpolatedAttribute(s,o,l,h,f,new Vt)),r&&(c.uv1=ui.getInterpolatedAttribute(r,o,l,h,f,new Vt)),a&&(c.normal=ui.getInterpolatedAttribute(a,o,l,h,f,new G),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new G,materialIndex:0};ui.getNormal(Nr,Ur,Fr,u.normal),c.face=u,c.barycoord=f}return c}var ks=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Ne,c=Ne,f,u){super(null,a,o,l,h,c,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$i=new oe,qc=new oe,kr=[],Yc=new Nn,yf=new oe,Es=new kt,Cs=new Kn,Ri=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Yc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(Yc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Cs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),qc.multiplyMatrices(n,$i),Es.matrixWorld=qc,Es.raycast(t,kr);for(let a=0,o=kr.length;a<o;a++){let l=kr[a];l.instanceId=r,l.object=this,e.push(l)}kr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(s*this.count),s,this.count,Da,gn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new Kn,vf=new Vt(.5,.5),Gr=new G,fi=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],f=r[5],u=r[6],m=r[7],g=r[8],v=r[9],p=r[10],d=r[11],_=r[12],M=r[13],y=r[14],C=r[15];if(s[0].setComponents(h-a,m-c,d-g,C-_).normalize(),s[1].setComponents(h+a,m+c,d+g,C+_).normalize(),s[2].setComponents(h+o,m+f,d+v,C+M).normalize(),s[3].setComponents(h-o,m-f,d-v,C-M).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(h-l,m-u,d-p,C-y).normalize();else if(s[4].setComponents(h-l,m-u,d-p,C-y).normalize(),e===mn)s[5].setComponents(h+l,m+u,d+p,C+y).normalize();else if(e===is)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);let e=vf.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=new oe,la=class i{constructor(){this.coordinateSystem=mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fi),n[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var di=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jc=new oe,ul=new zs,Vr=new Kn,Hr=new G,Pi=class extends Me{constructor(t=new ge,e=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Jc.copy(s).invert(),ul.copy(t.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=u,v=m;g<v;g++){let p=h.getX(g);Hr.fromBufferAttribute(f,p),$c(Hr,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,v=m;g<v;g++)Hr.fromBufferAttribute(f,g),$c(Hr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $c(i,t,e,n,s,r,a){let o=ul.distanceSqToPoint(i);if(o<e){let l=new G;ul.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vs=class extends Qe{constructor(t=[],e=Ui,n,s,r,a,o,l,h,c){super(t,e,n,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hs=class extends Qe{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Qe{constructor(t,e,n=wn,s,r,a,o=Ne,l=Ne,h,c=Jn,f=1){if(c!==Jn&&c!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ws=class extends Qn{constructor(t,e=wn,n=Ui,s,r,a=Ne,o=Ne,l,h=Jn){let c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,n,s,r,a,o,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ke=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(f,2));function g(v,p,d,_,M,y,C,E,x,T,U){let P=y/x,I=C/T,F=y/2,A=C/2,w=E/2,N=x+1,B=T+1,z=0,K=0,V=new G;for(let Y=0;Y<B;Y++){let $=Y*I-A;for(let lt=0;lt<N;lt++){let J=lt*P-F;V[v]=J*_,V[p]=$*M,V[d]=w,h.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[d]=E>0?1:-1,c.push(V.x,V.y,V.z),f.push(lt/x),f.push(1-Y/T),z+=1}}for(let Y=0;Y<T;Y++)for(let $=0;$<x;$++){let lt=u+$+N*Y,J=u+$+N*(Y+1),D=u+($+1)+N*(Y+1),nt=u+($+1)+N*Y;l.push(lt,J,nt),l.push(J,D,nt),K+=6}o.addGroup(m,K,U),m+=K,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new G,c=new Vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let m=n+f/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},os=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],f=[],u=[],m=[],g=0,v=[],p=n/2,d=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(m,2));function _(){let y=new G,C=new G,E=0,x=(e-t)/n;for(let T=0;T<=r;T++){let U=[],P=T/r,I=P*(e-t)+t;for(let F=0;F<=s;F++){let A=F/s,w=A*l+o,N=Math.sin(w),B=Math.cos(w);C.x=I*N,C.y=-P*n+p,C.z=I*B,f.push(C.x,C.y,C.z),y.set(N,x,B).normalize(),u.push(y.x,y.y,y.z),m.push(A,1-P),U.push(g++)}v.push(U)}for(let T=0;T<s;T++)for(let U=0;U<r;U++){let P=v[U][T],I=v[U+1][T],F=v[U+1][T+1],A=v[U][T+1];(t>0||U!==0)&&(c.push(P,I,A),E+=3),(e>0||U!==r-1)&&(c.push(I,F,A),E+=3)}h.addGroup(d,E,0),d+=E}function M(y){let C=g,E=new Vt,x=new G,T=0,U=y===!0?t:e,P=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,p*P,0),u.push(0,P,0),m.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let w=F/s*l+o,N=Math.cos(w),B=Math.sin(w);x.x=U*B,x.y=p*P,x.z=U*N,f.push(x.x,x.y,x.z),u.push(0,P,0),E.x=N*.5+.5,E.y=B*.5*P+.5,m.push(E.x,E.y),g++}for(let F=0;F<s;F++){let A=C+F,w=I+F;y===!0?c.push(w,w+1,A):c.push(w+1,w,A),T+=3}h.addGroup(d,T,y===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class i extends os{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),c(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new G,y=new G,C=new G;for(let E=0;E<e.length;E+=3)m(e[E+0],M),m(e[E+1],y),m(e[E+2],C),l(M,y,C,_)}function l(_,M,y,C){let E=C+1,x=[];for(let T=0;T<=E;T++){x[T]=[];let U=_.clone().lerp(y,T/E),P=M.clone().lerp(y,T/E),I=E-T;for(let F=0;F<=I;F++)F===0&&T===E?x[T][F]=U:x[T][F]=U.clone().lerp(P,F/I)}for(let T=0;T<E;T++)for(let U=0;U<2*(E-T)-1;U++){let P=Math.floor(U/2);U%2===0?(u(x[T][P+1]),u(x[T+1][P]),u(x[T][P])):(u(x[T][P+1]),u(x[T+1][P+1]),u(x[T+1][P]))}}function h(_){let M=new G;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function c(){let _=new G;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=p(_)/2/Math.PI+.5,C=d(_)/Math.PI+.5;a.push(y,1-C)}g(),f()}function f(){for(let _=0;_<a.length;_+=6){let M=a[_+0],y=a[_+2],C=a[_+4],E=Math.max(M,y,C),x=Math.min(M,y,C);E>.9&&x<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function m(_,M){let y=_*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){let _=new G,M=new G,y=new G,C=new G,E=new Vt,x=new Vt,T=new Vt;for(let U=0,P=0;U<r.length;U+=9,P+=6){_.set(r[U+0],r[U+1],r[U+2]),M.set(r[U+3],r[U+4],r[U+5]),y.set(r[U+6],r[U+7],r[U+8]),E.set(a[P+0],a[P+1]),x.set(a[P+2],a[P+3]),T.set(a[P+4],a[P+5]),C.copy(_).add(M).add(y).divideScalar(3);let I=p(C);v(E,P+0,_,I),v(x,P+2,M,I),v(T,P+4,y,I)}}function v(_,M,y,C){C<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Zs=class i extends ca{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Js=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,c=l+1,f=t/o,u=e/l,m=[],g=[],v=[],p=[];for(let d=0;d<c;d++){let _=d*u-a;for(let M=0;M<h;M++){let y=M*f-r;g.push(y,-_,0),v.push(0,0,1),p.push(M/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){let M=_+h*d,y=_+h*(d+1),C=_+1+h*(d+1),E=_+1+h*d;m.push(M,y,E),m.push(y,C,E)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ls=class i extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],h=[],c=[],f=t,u=(e-t)/s,m=new G,g=new Vt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let d=r+p/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}f+=u}for(let v=0;v<s;v++){let p=v*(n+1);for(let d=0;d<n;d++){let _=d+p,M=_,y=_+n+1,C=_+n+2,E=_+1;o.push(M,y,E),o.push(y,C,E)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $s=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,c=[],f=new G,u=new G,m=[],g=[],v=[],p=[];for(let d=0;d<=n;d++){let _=[],M=d/n,y=a+M*o,C=t*Math.cos(y),E=Math.sqrt(t*t-C*C),x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let U=T/e,P=s+U*r;f.x=-E*Math.cos(P),f.y=C,f.z=E*Math.sin(P),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(U+x,1-M),_.push(h++)}c.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let M=c[d][_+1],y=c[d][_],C=c[d+1][_],E=c[d+1][_+1];(d!==0||a>0)&&m.push(M,y,E),(d!==n-1||l<Math.PI)&&m.push(y,C,E)}this.setIndex(m),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Kc(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function Kc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Hh={clone:Oi,merge:Ze},bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ha=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var on=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ua=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ki(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=t,o=2*e-n;break;case hl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:a=t,l=2*n-e;break;case hl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,d=-u*p+2*u*v-u*g,_=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,M=(-1-m)*p+(1.5+m)*v+.5*g,y=m*p-m*v;for(let C=0;C!==o;++C)r[C]=d*a[c+C]+_*a[h+C]+M*a[l+C]+y*a[f+C];return r}},pa=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(n-e)/(s-e),f=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*f+a[l+u]*c;return r}},ma=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ga=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let g=(n-e)/(s-e),v=1-g;for(let p=0;p!==o;++p)r[p]=a[h+p]*v+a[l+p]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let v=a[h+g],p=a[l+g],d=m*u+g*2,_=f[d],M=f[d+1],y=t*u+g*2,C=c[y],E=c[y+1],x=Tf(n,e,_,C,s);r[g]=Wh(x,v,M,E,p)}return r}};function Wh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Wh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ki(e,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ki(t.times,Array),values:Ki(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wr(t.settings)&&(n.settings={inTangents:Ki(t.settings.inTangents,Array),outTangents:Ki(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case ia:e=this.InterpolantFactoryMethodLinear;break;case Yr:e=this.InterpolantFactoryMethodSmooth;break;case ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Yr;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Wr(this.settings)&&(jc(this.settings.inTangents,t),jc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wr(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ku(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Dt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Qc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=ia;var mi=class extends ln{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ps;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="color";var _a=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var ya=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Dn.slerpFlat(r,0,a,h-o,a,h,l);return r}},Ks=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends ln{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ps;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};va.prototype.ValueTypeName="vector";var Ma=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return h.push(c,f),this},this.removeHandler=function(c){let f=h.indexOf(c);return f!==-1&&h.splice(f,2),this},this.getHandler=function(c){for(let f=0,u=h.length;f<u;f+=2){let m=h[f],g=h[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xh=new Ma,ba=class{constructor(t){this.manager=t!==void 0?t:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Me{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ii=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},al=new oe,th=new G,eh=new G,Sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xr=new G,qr=new Dn,In=new G,Qs=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xr,qr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xr,qr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new G,nh=new Vt,ih=new Vt,ze=class extends Qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tr=class extends Qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fl=class extends Sa{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Li=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ji=-90,Qi=1,cs=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new ze(ji,Qi,t,e);r.layers=this.layers,this.add(r);let a=new ze(ji,Qi,t,e);a.layers=this.layers,this.add(a);let o=new ze(ji,Qi,t,e);o.layers=this.layers,this.add(o);let l=new ze(ji,Qi,t,e);l.layers=this.layers,this.add(l);let h=new ze(ji,Qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(f,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wa=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kl="\\[\\]\\.:\\/",Af=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",Ef="[^"+kl.replace("\\.","")+"]",Cf=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Rf=/(WCOD+)?/.source.replace("WCOD",Ef),Pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),If=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Lf=new RegExp("^"+Cf+Rf+Pf+If+"$"),Df=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(t){let e=Lf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=dl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xg=new Float32Array(1);var Yl=class Yl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yl.prototype.isMatrix2=!0;var pl=Yl;function Vl(i,t,e,n){let s=Nf(n);switch(e){case Il:return i*t;case Da:return i*t/s.components*s.byteLength;case Na:return i*t/s.components*s.byteLength;case _i:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case Ll:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Fa:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case lr:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oo:case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cr:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nf(i){switch(i){case en:case El:return{byteLength:1,components:1};case ds:case Cl:case Tn:return{byteLength:2,components:1};case Ia:case La:return{byteLength:2,components:4};case wn:case Pa:case gn:return{byteLength:4,components:1};case Rl:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,f=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,h){let c=l.array,f=l.updateRanges;if(i.bindBuffer(h,o),f.length===0)i.bufferSubData(h,0,c);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let v=f[m];i.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ad=`#define PI 3.141592653589793
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
} // validated`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
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
#endif`,Nd=`uniform sampler2D dfgLUT;
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
}`,Ud=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,zp=`uniform float backgroundBlurriness;
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
}`,kp=`varying vec3 vWorldDirection;
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
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
}`,$p=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,d0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Gf,alphatest_pars_fragment:Vf,aomap_fragment:Hf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:fd,colorspace_pars_fragment:dd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Cd,envmap_vertex:_d,fog_vertex:yd,fog_pars_vertex:vd,fog_fragment:Md,fog_pars_fragment:bd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:wd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Ed,lights_toon_fragment:Rd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Nd,lights_fragment_begin:Ud,lights_fragment_maps:Fd,lights_fragment_end:Od,lightprobes_pars_fragment:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Vd,map_fragment:Hd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:jd,morphtarget_vertex:Qd,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:fp,project_vertex:dp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:yp,shadowmap_vertex:vp,shadowmask_pars_fragment:Mp,skinbase_vertex:bp,skinning_pars_vertex:Sp,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Ep,tonemapping_fragment:Cp,tonemapping_pars_fragment:Rp,transmission_fragment:Pp,transmission_pars_fragment:Ip,uv_pars_fragment:Lp,uv_pars_vertex:Dp,uv_vertex:Np,worldpos_vertex:Up,background_vert:Fp,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:kp,cube_frag:Gp,depth_vert:Vp,depth_frag:Hp,distance_vert:Wp,distance_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:$p,meshbasic_frag:Kp,meshlambert_vert:jp,meshlambert_frag:Qp,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:a0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:f0,shadow_frag:d0,sprite_vert:p0,sprite_frag:m0},yt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ze([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ze([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ze([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ze([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ze([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ze([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Ze([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Ze([yt.lights,yt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Bn.physical={uniforms:Ze([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var mo={r:0,b:0,g:0},g0=new oe,pu=new Nt;pu.set(-1,0,0,0,1,0,0,0,1);function x0(i,t,e,n,s,r){let a=new Pt(0),o=s===!0?0:1,l,h,c=null,f=0,u=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=t.get(M,y)}return M}function g(_){let M=!1,y=m(_);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,M){let y=m(M);y&&y.isCubeTexture?(h===void 0&&(h=new kt(new ke(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Oi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pu),h.material.toneMapped=$t.getTransfer(y.colorSpace)!==ie,(c!==y||f!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,c=y,f=y.version,u=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new kt(new Js(2,2),new Un({name:"BackgroundMaterial",uniforms:Oi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$t.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(mo,zl(i)),e.buffers.color.setClear(mo.r,mo.g,mo.b,M,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:d}}function _0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,F,A,w,N){let B=!1,z=f(I,w,A,F);r!==z&&(r=z,h(r.object)),B=m(I,w,A,N),B&&g(I,w,A,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(I,F,A,w),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function h(I){return i.bindVertexArray(I)}function c(I){return i.deleteVertexArray(I)}function f(I,F,A,w){let N=w.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let z=I.isInstancedMesh===!0?I.id:0,K=B[z];K===void 0&&(K={},B[z]=K);let V=K[A.id];V===void 0&&(V={},K[A.id]=V);let Y=V[N];return Y===void 0&&(Y=u(l()),V[N]=Y),Y}function u(I){let F=[],A=[],w=[];for(let N=0;N<e;N++)F[N]=0,A[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:A,attributeDivisors:w,object:I,attributes:{},index:null}}function m(I,F,A,w){let N=r.attributes,B=F.attributes,z=0,K=A.getAttributes();for(let V in K)if(K[V].location>=0){let $=N[V],lt=B[V];if(lt===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor)),$===void 0||$.attribute!==lt||lt&&$.data!==lt.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function g(I,F,A,w){let N={},B=F.attributes,z=0,K=A.getAttributes();for(let V in K)if(K[V].location>=0){let $=B[V];$===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let lt={};lt.attribute=$,$&&$.data&&(lt.data=$.data),N[V]=lt,z++}r.attributes=N,r.attributesNum=z,r.index=w}function v(){let I=r.newAttributes;for(let F=0,A=I.length;F<A;F++)I[F]=0}function p(I){d(I,0)}function d(I,F){let A=r.newAttributes,w=r.enabledAttributes,N=r.attributeDivisors;A[I]=1,w[I]===0&&(i.enableVertexAttribArray(I),w[I]=1),N[I]!==F&&(i.vertexAttribDivisor(I,F),N[I]=F)}function _(){let I=r.newAttributes,F=r.enabledAttributes;for(let A=0,w=F.length;A<w;A++)F[A]!==I[A]&&(i.disableVertexAttribArray(A),F[A]=0)}function M(I,F,A,w,N,B,z){z===!0?i.vertexAttribIPointer(I,F,A,N,B):i.vertexAttribPointer(I,F,A,w,N,B)}function y(I,F,A,w){v();let N=w.attributes,B=A.getAttributes(),z=F.defaultAttributeValues;for(let K in B){let V=B[K];if(V.location>=0){let Y=N[K];if(Y===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let $=Y.normalized,lt=Y.itemSize,J=t.get(Y);if(J===void 0)continue;let D=J.buffer,nt=J.type,at=J.bytesPerElement,gt=nt===i.INT||nt===i.UNSIGNED_INT||Y.gpuType===Pa;if(Y.isInterleavedBufferAttribute){let it=Y.data,Lt=it.isInterleavedBuffer===!0?it.stride:it.itemSize,Yt=Y.offset;if(it.isInstancedInterleavedBuffer||it.isInstancedBufferAttribute){for(let vt=0;vt<V.locationSize;vt++)d(V.location+vt,it.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let vt=0;vt<V.locationSize;vt++)p(V.location+vt);i.bindBuffer(i.ARRAY_BUFFER,D);for(let vt=0;vt<V.locationSize;vt++)M(V.location+vt,lt/V.locationSize,nt,$,Lt*at,(Yt+lt/V.locationSize*vt)*at,gt)}else{if(Y.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)d(V.location+it,Y.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let it=0;it<V.locationSize;it++)p(V.location+it);i.bindBuffer(i.ARRAY_BUFFER,D);for(let it=0;it<V.locationSize;it++)M(V.location+it,lt/V.locationSize,nt,$,lt*at,lt/V.locationSize*it*at,gt)}}else if(z!==void 0){let $=z[K];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(V.location,$);break;case 3:i.vertexAttrib3fv(V.location,$);break;case 4:i.vertexAttrib4fv(V.location,$);break;default:i.vertexAttrib1fv(V.location,$)}}}}_()}function C(){U();for(let I in n){let F=n[I];for(let A in F){let w=F[A];for(let N in w){let B=w[N];for(let z in B)c(B[z].object),delete B[z];delete w[N]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let A in F){let w=F[A];for(let N in w){let B=w[N];for(let z in B)c(B[z].object),delete B[z];delete w[N]}}delete n[I.id]}function x(I){for(let F in n){let A=n[F];for(let w in A){let N=A[w];if(N[I.id]===void 0)continue;let B=N[I.id];for(let z in B)c(B[z].object),delete B[z];delete N[I.id]}}}function T(I){for(let F in n){let A=n[F],w=I.isInstancedMesh===!0?I.id:0,N=A[w];if(N!==void 0){for(let B in N){let z=N[B];for(let K in z)c(z[K].object),delete z[K];delete N[B]}delete A[w],Object.keys(A).length===0&&delete n[F]}}}function U(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function y0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,c){c!==0&&(i.drawArraysInstanced(n,l,h,c),e.update(h,n,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,c);let u=0;for(let m=0;m<c;m++)u+=h[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function v0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==An&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==en&&x!==gn&&!T&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(It("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:C,samples:E}}function M0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new bn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=c(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?c(null):h();else{let _=r?0:n,M=_*4,y=d.clippingState||null;l.value=y,y=c(g,u,M,m);for(let C=0;C!==M;++C)y[C]=e[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(f,u,m,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let d=m+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,y=m;M!==v;++M,y+=4)a.copy(f[M]).applyMatrix4(_,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var dr=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Di});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=je),new cs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},qh=256,b0=3,S0=20,mu=256,gu=16,w0=3,T0=new G,A0=new Pt,xo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cs(1,10,null),this._boxMesh=new kt(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=T0}=r,l=this._renderer;this._setSize(a);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(A0));let p=new cs(n,s,c);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=g,t.background=v,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qh,Gh(t))}_fromTexture(t,e){t.mapping===Ui||t.mapping===fs?this._setSize(t.image.length===0?qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Yh(t,!1,!1),n=Math.log2(t)-b0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ui||t.mapping===fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=E0(),this._integrationMaterial=C0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-w0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(mu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=R0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Yh(i,t,e){return new dr(i,{minFilter:ti,generateMipmaps:t,type:Tn,colorSpace:Is,depthBuffer:e})}function pr(i,t,e){return new Un({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ge,blending:Di,depthTest:!1,depthWrite:!1})}function E0(){return pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mu}u

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
	`)}function C0(){return pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gu}},`

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
	`)}function R0(){return pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${S0}
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
	`)}function Zh(){return pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jh(){return pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ea||m===Ca)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new dr(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",h),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===Ea||m===Ca,v=m===Ui||m===fs;if(g||v){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new xo(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new xo(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function o(u,m){return m===Ea?u.mapping=Ui:m===Ca&&(u.mapping=fs),u}function l(u){let m=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&m++;return m===g}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function I0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function L0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function c(g){let v=g.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function f(g){let v=g.index,p=g.attributes.position,d=0;if(p===void 0)return;let _=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?Bs:Os,y=new M(Math.ceil(_/3)*6,1),C=y.array;if(v!==null){let x=v.array;d=v.version;for(let T=0,U=0;T<_;T+=3){let P=x[T+0],I=x[T+1],F=x[T+2];C[U++]=P,C[U++]=I,C[U++]=I,C[U++]=F,C[U++]=F,C[U++]=P}}else{d=p.version;for(let x=0,T=0;x<_;x+=3){let U=x+0,P=x+1,I=x+2;C[T++]=U,C[T++]=P,C[T++]=P,C[T++]=I,C[T++]=I,C[T++]=U}}y.version=d;let E=r.get(g);E&&t.remove(E),r.set(g,y)}function u(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&f(g)}else f(g);return r.get(g)}function m(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:h,update:c,getWireframeAttribute:u,dispose:m}}function D0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function h(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),e.update(u,n,m))}function c(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function N0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,t,e){let n=new WeakMap,s=new me;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0,u=n.get(o);if(u===void 0||u.count!==f){let U=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let y=o.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*f),x=new Ns(E,y,C,f);x.type=gn,x.needsUpdate=!0;let T=M*4;for(let P=0;P<f;P++){let I=p[P],F=d[P],A=_[P],w=y*C*4*P;for(let N=0;N<I.count;N++){let B=N*T;m===!0&&(s.fromBufferAttribute(I,N),E[w+B+0]=s.x,E[w+B+1]=s.y,E[w+B+2]=s.z,E[w+B+3]=0),g===!0&&(s.fromBufferAttribute(F,N),E[w+B+4]=s.x,E[w+B+5]=s.y,E[w+B+6]=s.z,E[w+B+7]=0),v===!0&&(s.fromBufferAttribute(A,N),E[w+B+8]=s.x,E[w+B+9]=s.y,E[w+B+10]=s.z,E[w+B+11]=A.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Vt(y,C)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<h.length;v++)m+=h[v];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function F0(i,t,e,n,s){let r=new WeakMap;function a(h){let c=s.render.frame,f=h.geometry,u=t.get(h,f);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return u}function o(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}var O0={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[nr]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Tl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function B0(i,t,e,n,s,r){let a=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new ge;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));let f=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new kt(c,f),m=new tr(-1,1,1,-1,0,1),g=null,v=null,p=!1,d,_=null,M=[],y=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let x=0;x<M.length;x++){let T=M[x];T.setSize&&T.setSize(C,E)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;let E=a.width,x=a.height;M.length>0&&o===null&&(o=new an(E,x,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new an(E,x,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&M.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new Qn(E,x),r===!0&&(h.format=ei,h.type=Fi)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<M.length;U++){let P=M[U];P.setSize&&P.setSize(E,x),T&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(C,E){if(p||C.toneMapping===Fn&&M.length===0)return!1;if(_=E,E!==null){let x=E.width,T=E.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return y===!1&&C.setRenderTarget(a),d=C.toneMapping,C.toneMapping=Fn,!0},this.hasRenderPass=function(){return y},this.end=function(C,E){C.toneMapping=d,p=!0;let x=a,T=o;for(let U=0;U<M.length;U++){let P=M[U];P.enabled!==!1&&(P.render(C,T,x,E),P.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(g!==C.outputColorSpace||v!==C.toneMapping){g=C.outputColorSpace,v=C.toneMapping,f.defines={},$t.getTransfer(g)===ie&&(f.defines.SRGB_TRANSFER="");let U=O0[v];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(_),C.render(u,m),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var xu=new Qe,_u=new Qn(1,1),yu=new Ws(1),vu=new Ns,Mu=new oa,bu=new Vs,$h=[],Kh=[],jh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yo(i,t){let e=Kh[t];e===void 0&&(e=new Int32Array(t),Kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function H0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),Re(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),Re(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Re(e,n)}}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function vo(i){return i.version===0&&(i.compareFunction=Ul,i.needsUpdate=!0),i}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vo(_u):r=xu,e.setTexture2D(t||r,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vo(yu):r=bu,e.setTextureCube(t||r,s)}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function sm(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return G0;case 35666:return V0;case 35674:return H0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(i,t){i.uniform1fv(this.addr,t)}function am(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function om(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function lm(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function cm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function um(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fm(i,t){i.uniform1iv(this.addr,t)}function dm(i,t){i.uniform2iv(this.addr,t)}function pm(i,t){i.uniform3iv(this.addr,t)}function mm(i,t){i.uniform4iv(this.addr,t)}function gm(i,t){i.uniform1uiv(this.addr,t)}function xm(i,t){i.uniform2uiv(this.addr,t)}function _m(i,t){i.uniform3uiv(this.addr,t)}function ym(i,t){i.uniform4uiv(this.addr,t)}function vm(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vo(_u):a=xu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function bm(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=vo(yu):a=bu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Sm(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vu,r[a])}function wm(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return xm;case 36295:return _m;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Sm}}var $l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sm(e.type)}},Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wm(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function eu(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),a=Zl.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){eu(e,h===void 0?new $l(o,i,t):new Kl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new jl(o),eu(e,f)),e=f}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function nu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Am=37297,Em=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var iu=new Nt;function Rm(i){$t._getMatrix(iu,$t.workingColorSpace,i);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cm(i.getShaderSource(t),o)}else return r}function Pm(i,t){let e=Rm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Im={[vl]:"Linear",[Ml]:"Reinhard",[bl]:"Cineon",[nr]:"ACESFilmic",[wl]:"AgX",[Tl]:"Neutral",[Sl]:"Custom"};function Lm(i,t){let e=Im[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var go=new G;function Dm(){$t.getLuminanceCoefficients(go);let i=go.x.toFixed(4),t=go.y.toFixed(4),e=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Um(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function ru(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function au(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(Om,Bm)}function Bm(i,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ql(e)}var zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(zm,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Gm={[er]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function Vm(i){return Gm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hm={[fs]:"ENVMAP_MODE_REFRACTION"};function Wm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xm={[Aa]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function qm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xm[i.combine]||"ENVMAP_BLENDING_NONE"}function Ym(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vm(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=Wm(e),f=qm(e),u=Nm(e),m=Um(r),g=s.createProgram(),v,p,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(v=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Ql(a),a=ru(a,e),a=au(a,e),o=Ql(o),o=ru(o,e),o=au(o,e),a=ou(a),o=ou(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=d+v+a,M=d+p+o,y=nu(s,s.VERTEX_SHADER,_),C=nu(s,s.FRAGMENT_SHADER,M);s.attachShader(g,y),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(y)||"",A=s.getShaderInfoLog(C)||"",w=I.trim(),N=F.trim(),B=A.trim(),z=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,C);else{let V=su(s,y,"vertex"),Y=su(s,C,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+w+`
`+V+`
`+Y)}else w!==""?It("WebGLProgram: Program Info Log:",w):(N===""||B==="")&&(K=!1);K&&(P.diagnostics={runnable:z,programLog:w,vertexShader:{log:N,prefix:v},fragmentShader:{log:B,prefix:p}})}s.deleteShader(y),s.deleteShader(C),x=new ps(s,g),T=Fm(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,Am)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=C,this}var Zm=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ec(t),e.set(t,n)),n}},ec=class{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}};function Jm(i){return i===_i||i===lr||i===cr}function $m(i,t,e,n,s,r){let a=new Us,o=new tc,l=new Set,h=[],c=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,T,U,P,I,F){let A=P.fog,w=I.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||N,B),K=u[x.type],V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let Y=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=Y!==void 0?Y.length:0,lt=0;w.morphAttributes.position!==void 0&&(lt=1),w.morphAttributes.normal!==void 0&&(lt=2),w.morphAttributes.color!==void 0&&(lt=3);let J,D,nt,at;if(K){let _t=Bn[K];J=_t.vertexShader,D=_t.fragmentShader}else{J=x.vertexShader,D=x.fragmentShader;let _t=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,_t,se),nt=_t.id,at=se.id}let gt=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,Yt=I.isBatchedMesh===!0,vt=!!x.map,Ut=!!x.matcap,Kt=!!z,qt=Kt&&z.isPMREMTexture===!0,Se=!!x.aoMap,ve=!!x.lightMap,He=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Pn=!!x.displacementMap,Pe=!!x.emissiveMap,cn=!!x.metalnessMap,hn=!!x.roughnessMap,un=x.anisotropy>0,k=x.clearcoat>0,fn=x.diffuseRoughness>0,de=x.dispersion>0,pe=x.retroreflectivity>0,xt=x.iridescence>0,Ee=x.sheen>0,Rt=x.transmission>0,Ft=un&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,b=k&&!!x.clearcoatNormalMap,W=k&&!!x.clearcoatRoughnessMap,st=fn&&!!x.diffuseRoughnessMap,et=xt&&!!x.iridescenceMap,ct=xt&&!!x.iridescenceThicknessMap,pt=Ee&&!!x.sheenColorMap,j=Ee&&!!x.sheenRoughnessMap,Q=!!x.specularMap,ut=!!x.specularColorMap,L=!!x.specularIntensityMap,tt=Rt&&!!x.transmissionMap,Z=Rt&&!!x.thicknessMap,ft=!!x.gradientMap,ot=!!x.alphaMap,ht=x.alphaTest>0,Et=!!x.alphaHash,Wt=!!x.extensions,rt=Fn;x.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(rt=i.toneMapping);let Ct=qt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Gt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:D,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Yt,batchingColor:Yt&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:Ut,envMap:Kt,envMapMode:Kt&&z.mapping,envMapPMREM:qt,envMapMaxLod:qt?Ct.length-1:null,envMapSize:qt?Ct[0].width:null,aoMap:Se,lightMap:ve,bumpMap:He,normalMap:_e,displacementMap:Pn,emissiveMap:Pe,normalMapObjectSpace:_e&&x.normalMapType===Rh,normalMapTangentSpace:_e&&x.normalMapType===po,packedNormalMap:_e&&x.normalMapType===po&&Jm(x.normalMap.format),metalnessMap:cn,roughnessMap:hn,anisotropy:un,anisotropyMap:Ft,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:fn,diffuseRoughnessMap:st,dispersion:de,retroreflection:pe,iridescence:xt,iridescenceMap:et,iridescenceThicknessMap:ct,sheen:Ee,sheenColorMap:pt,sheenRoughnessMap:j,specularMap:Q,specularColorMap:ut,specularIntensityMap:L,transmission:Rt,transmissionMap:tt,thicknessMap:Z,gradientMap:ft,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Et,combine:x.combine,mapUv:vt&&m(x.map.channel),aoMapUv:Se&&m(x.aoMap.channel),lightMapUv:ve&&m(x.lightMap.channel),bumpMapUv:He&&m(x.bumpMap.channel),normalMapUv:_e&&m(x.normalMap.channel),displacementMapUv:Pn&&m(x.displacementMap.channel),emissiveMapUv:Pe&&m(x.emissiveMap.channel),metalnessMapUv:cn&&m(x.metalnessMap.channel),roughnessMapUv:hn&&m(x.roughnessMap.channel),anisotropyMapUv:Ft&&m(x.anisotropyMap.channel),clearcoatMapUv:R&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:et&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&m(x.sheenRoughnessMap.channel),specularMapUv:Q&&m(x.specularMap.channel),specularColorMapUv:ut&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:tt&&m(x.transmissionMap.channel),thicknessMapUv:Z&&m(x.thicknessMap.channel),alphaMapUv:ot&&m(x.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(_e||un),vertexNormals:!!w.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!w.attributes.uv&&(vt||ot),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||w.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:lt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ue,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function v(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(T,x),d(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function d(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let T=u[x.type],U;if(T){let P=Bn[T];U=Hh.clone(P.uniforms)}else U=x.uniforms;return U}function M(x,T){let U=c.get(T);return U!==void 0?++U.usedTimes:(U=new Ym(i,T,x,s),h.push(U),c.set(T,U)),U}function y(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:C,programs:h,dispose:E}}function Km(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,v,p,d){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:d},i[t]=_):(_.id=u.id,_.object=u,_.geometry=m,_.material=g,_.materialVariant=a(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=p,_.group=d),t++,_}function l(u,m,g,v,p,d,_){_.reversedDepth===!0&&(p=-p);let M=o(u,m,g,v,p,d);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function h(u,m,g,v,p,d){let _=o(u,m,g,v,p,d);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function c(u,m){e.length>1&&e.sort(u||jm),n.length>1&&n.sort(m||cu),s.length>1&&s.sort(m||cu)}function f(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:f,sort:c}}function Qm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hu,i.set(n,[a])):s>=r.length?(a=new hu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Pt};break;case"SpotLight":e={position:new G,direction:new G,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ng=0;function ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sg(i){let t=new tg,e=eg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);let s=new G,r=new oe,a=new oe;function o(h){let c=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,_=0,M=0,y=0,C=0,E=0,x=0,T=0,U=0,P=0;h.sort(ig);for(let F=0,A=h.length;F<A;F++){let w=h[F],N=w.color,B=w.intensity,z=w.distance,K=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===_i?K=w.shadow.map.texture:K=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=N.r*B,f+=N.g*B,u+=N.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],B);P++}else if(w.isSunLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,$=e.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=K;let lt=Y.getViewportCount();for(let J=0;J<lt;J++)n.sunShadowMatrix[v+J]=Y.getMatrix(J),n.sunShadowCascade[v+J]=Y._cascadeData[J];v+=lt,g++}n.sun[m]=V,m++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,$=e.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=w.shadow.matrix,C++}n.directional[p]=V,p++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(N).multiplyScalar(B),V.distance=z,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;let Y=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,Y.updateMatrices(w),w.castShadow&&U++),n.spotLightMatrix[_]=Y.matrix,w.castShadow){let $=e.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=K,x++}_++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(N).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[M]=V,M++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let Y=w.shadow,$=e.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=w.shadow.matrix,E++}n.point[d]=V,d++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[y]=V,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==m||I.directionalLength!==p||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==C||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==T||I.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=d,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+T-U,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,I.sunLength=m,I.directionalLength=p,I.pointLength=d,I.spotLength=_,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=C,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=T,I.numLightProbes=P,n.version=ng++)}function l(h,c){let f=0,u=0,m=0,g=0,v=0,p=0,d=c.matrixWorldInverse;for(let _=0,M=h.length;_<M;_++){let y=h[_];if(y.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),u++}else if(y.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let C=n.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let C=n.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function uu(i){let t=new sg(i),e=[],n=[],s=[];function r(f){c.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function h(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function rg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(i),t.set(s,[o])):r>=a.length?(o=new uu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`,lg=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],cg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],fu=new oe,ur=new G,Jl=new G;function hg(i,t,e){let n=new fi,s=new Vt,r=new Vt,a=new me,o=new ua,l=new fa,h={},c=e.maxTextureSize,f={[xi]:Ge,[Ge]:xi,[Ue]:Ue},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:ag,fragmentShader:og}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new kt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let d=this.type;this.render=function(E,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ah&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let U=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let A=d!==this.type;A&&x.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(N=>N.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,N=E.length;w<N;w++){let B=E[w],z=B.shadow;if(z===void 0){It("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||A===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===hs){if(B.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new an(s.x,s.y,{format:_i,type:Tn,minFilter:je,magFilter:je,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Qn(s.x,s.y,gn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ne,z.map.depthTexture.magFilter=Ne}else B.isPointLight?(z.map=new dr(s.x),z.map.depthTexture=new Ws(s.x,wn)):(z.map=new an(s.x,s.y),z.map.depthTexture=new Qn(s.x,s.y,wn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Jn,this.type===er?(z.map.depthTexture.compareFunction=V?Nl:Dl,z.map.depthTexture.minFilter=je,z.map.depthTexture.magFilter=je):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ne,z.map.depthTexture.magFilter=Ne);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Y=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,T);let $=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:T.layers;for(let lt=0;lt<Y;lt++){let J=z.getCamera(lt);if(B.isPointLight){let D=z.camera,nt=z.matrix,at=B.distance||D.far;at!==D.far&&(D.far=at,D.updateProjectionMatrix()),ur.setFromMatrixPosition(B.matrixWorld),D.position.copy(ur),Jl.copy(D.position),Jl.add(lg[lt]),D.up.copy(cg[lt]),D.lookAt(Jl),D.updateMatrixWorld(),nt.makeTranslation(-ur.x,-ur.y,-ur.z),fu.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),z._frustum.setFromProjectionMatrix(fu,D.coordinateSystem,D.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(z.map),i.clear());let D=z.getViewport(lt);a.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),F.viewport(a)}n=z.getFrustum(lt),y(x,T,J,B,$,this.type)}z.isPointLightShadow!==!0&&this.type===hs&&_(z,T),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(U,P,I)};function _(E,x){let T=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new an(s.x,s.y,{format:_i,type:Tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,T,u,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,T,m,v,null)}function M(E,x,T,U){let P=null,I=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=T.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=P.uuid,A=x.uuid,w=h[F];w===void 0&&(w={},h[F]=w);let N=w[A];N===void 0&&(N=P.clone(),w[A]=N,x.addEventListener("dispose",C)),P=N}if(P.visible=x.visible,P.wireframe=x.wireframe,U===hs?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:f[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=T}return P}function y(E,x,T,U,P,I){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===hs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let w=t.update(E),N=E.material;if(Array.isArray(N)){let B=w.groups;for(let z=0,K=B.length;z<K;z++){let V=B[z],Y=N[V.materialIndex];if(Y&&Y.visible){let $=M(E,Y,U,I);E.onBeforeShadow(i,E,x,T,w,$,V),i.renderBufferDirect(T,null,w,$,E,V),E.onAfterShadow(i,E,x,T,w,$,V)}}}else if(N.visible){let B=M(E,N,U,I);E.onBeforeShadow(i,E,x,T,w,B,null),i.renderBufferDirect(T,null,w,B,E,null),E.onAfterShadow(i,E,x,T,w,B,null)}}let A=E.children;for(let w=0,N=A.length;w<N;w++)y(A[w],x,T,U,P,I)}function C(E){E.target.removeEventListener("dispose",C);for(let T in h){let U=h[T],P=E.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function ug(i,t){function e(){let L=!1,tt=new me,Z=null,ft=new me(0,0,0,0);return{setMask:function(ot){Z!==ot&&!L&&(i.colorMask(ot,ot,ot,ot),Z=ot)},setLocked:function(ot){L=ot},setClear:function(ot,ht,Et,Wt,rt){rt===!0&&(ot*=Wt,ht*=Wt,Et*=Wt),tt.set(ot,ht,Et,Wt),ft.equals(tt)===!1&&(i.clearColor(ot,ht,Et,Wt),ft.copy(tt))},reset:function(){L=!1,Z=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,tt=!1,Z=null,ft=null,ot=null;return{setReversed:function(ht){if(tt!==ht){let Et=t.get("EXT_clip_control");ht?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),tt=ht;let Wt=ot;ot=null,this.setClear(Wt)}},getReversed:function(){return tt},setTest:function(ht){ht?it(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ht){Z!==ht&&!L&&(i.depthMask(ht),Z=ht)},setFunc:function(ht){if(tt&&(ht=kh[ht]),ft!==ht){switch(ht){case Jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ht}},setLocked:function(ht){L=ht},setClear:function(ht){ot!==ht&&(ot=ht,tt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){L=!1,Z=null,ft=null,ot=null,tt=!1}}}function s(){let L=!1,tt=null,Z=null,ft=null,ot=null,ht=null,Et=null,Wt=null,rt=null;return{setTest:function(Ct){L||(Ct?it(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Ct){tt!==Ct&&!L&&(i.stencilMask(Ct),tt=Ct)},setFunc:function(Ct,Gt,_t){(Z!==Ct||ft!==Gt||ot!==_t)&&(i.stencilFunc(Ct,Gt,_t),Z=Ct,ft=Gt,ot=_t)},setOp:function(Ct,Gt,_t){(ht!==Ct||Et!==Gt||Wt!==_t)&&(i.stencilOp(Ct,Gt,_t),ht=Ct,Et=Gt,Wt=_t)},setLocked:function(Ct){L=Ct},setClear:function(Ct){rt!==Ct&&(i.clearStencil(Ct),rt=Ct)},reset:function(){L=!1,tt=null,Z=null,ft=null,ot=null,ht=null,Et=null,Wt=null,rt=null}}}let r=new e,a=new n,o=new s,l={},h=new WeakMap,c={},f={},u={},m=new WeakMap,g=[],v=null,p=!1,d=null,_=null,M=null,y=null,C=null,E=null,x=null,T=new Pt(0,0,0),U=0,P=!1,I=null,F=null,A=null,w=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=K>=2);let Y=null,$={},lt=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),D=new me().fromArray(lt),nt=new me().fromArray(J);function at(L,tt,Z,ft){let ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(L,ht),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<Z;Et++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(tt+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}let gt={};gt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(es),He(!1),_e(ml),it(i.CULL_FACE),Se(Di);function it(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function Lt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Yt(L,tt){return u[L]!==tt?(i.bindFramebuffer(L,tt),u[L]=tt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=tt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function vt(L,tt){let Z=g,ft=!1;if(L){Z=m.get(tt),Z===void 0&&(Z=[],m.set(tt,Z));let ot=L.textures;if(Z.length!==ot.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Et=ot.length;ht<Et;ht++)Z[ht]=i.COLOR_ATTACHMENT0+ht;Z.length=ot.length,ft=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ft=!0);ft&&i.drawBuffers(Z)}function Ut(L){return v!==L?(i.useProgram(L),v=L,!0):!1}let Kt={[Ni]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};Kt[hh]=i.MIN,Kt[uh]=i.MAX;let qt={[fh]:i.ZERO,[dh]:i.ONE,[ph]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(L,tt,Z,ft,ot,ht,Et,Wt,rt,Ct){if(L===Di){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),L!==oh){if(L!==d||Ct!==P){if((_!==Ni||C!==Ni)&&(i.blendEquation(i.FUNC_ADD),_=Ni,C=Ni),Ct)switch(L){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",L);break}else switch(L){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",L);break}M=null,y=null,E=null,x=null,T.set(0,0,0),U=0,d=L,P=Ct}return}ot=ot||tt,ht=ht||Z,Et=Et||ft,(tt!==_||ot!==C)&&(i.blendEquationSeparate(Kt[tt],Kt[ot]),_=tt,C=ot),(Z!==M||ft!==y||ht!==E||Et!==x)&&(i.blendFuncSeparate(qt[Z],qt[ft],qt[ht],qt[Et]),M=Z,y=ft,E=ht,x=Et),(Wt.equals(T)===!1||rt!==U)&&(i.blendColor(Wt.r,Wt.g,Wt.b,rt),T.copy(Wt),U=rt),d=L,P=!1}function ve(L,tt){L.side===Ue?Lt(i.CULL_FACE):it(i.CULL_FACE);let Z=L.side===Ge;tt&&(Z=!Z),He(Z),L.blending===us&&L.transparent===!1?Se(Di):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function _e(L){L!==sh?(it(i.CULL_FACE),L!==F&&(L===ml?i.cullFace(i.BACK):L===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),F=L}function Pn(L){L!==A&&(z&&i.lineWidth(L),A=L)}function Pe(L,tt,Z){L?(it(i.POLYGON_OFFSET_FILL),(w!==tt||N!==Z)&&(w=tt,N=Z,a.getReversed()&&(tt=-tt,Z=-Z),i.polygonOffset(tt,Z))):Lt(i.POLYGON_OFFSET_FILL)}function cn(L){L?it(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function hn(L){L===void 0&&(L=i.TEXTURE0+B-1),Y!==L&&(i.activeTexture(L),Y=L)}function un(L,tt,Z){Z===void 0&&(Y===null?Z=i.TEXTURE0+B-1:Z=Y);let ft=$[Z];ft===void 0&&(ft={type:void 0,texture:void 0},$[Z]=ft),(ft.type!==L||ft.texture!==tt)&&(Y!==Z&&(i.activeTexture(Z),Y=Z),i.bindTexture(L,tt||gt[L]),ft.type=L,ft.texture=tt)}function k(){let L=$[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function fn(){try{i.compressedTexImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function pe(){try{i.texSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function xt(){try{i.texSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Ft(){try{i.texStorage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function b(){try{i.texImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function W(){try{i.texImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function st(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function et(L,tt){f[L]!==tt&&(i.pixelStorei(L,tt),f[L]=tt)}function ct(L){D.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),D.copy(L))}function pt(L){nt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function j(L,tt){let Z=h.get(tt);Z===void 0&&(Z=new WeakMap,h.set(tt,Z));let ft=Z.get(L);ft===void 0&&(ft=i.getUniformBlockIndex(tt,L.name),i.uniformBlockBinding(tt,ft,ft),Z.set(L,ft))}function Q(L,tt,Z){let ot=h.get(tt).get(L);l[ot]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,Z),l[ot]=Z)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},f={},Y=null,$={},u={},l={},m=new WeakMap,g=[],v=null,p=!1,d=null,_=null,M=null,y=null,C=null,E=null,x=null,T=new Pt(0,0,0),U=0,P=!1,I=null,F=null,A=null,w=null,N=null,D.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Lt,bindFramebuffer:Yt,drawBuffers:vt,useProgram:Ut,setBlending:Se,setMaterial:ve,setFlipSided:He,setCullFace:_e,setLineWidth:Pn,setPolygonOffset:Pe,setScissorTest:cn,activeTexture:hn,bindTexture:un,unbindTexture:k,compressedTexImage2D:fn,compressedTexImage3D:de,texImage2D:b,texImage3D:W,pixelStorei:et,getParameter:st,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ft,texStorage3D:R,texSubImage2D:pe,texSubImage3D:xt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Rt,scissor:ct,viewport:pt,reset:ut}}function fg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,c=new WeakMap,f=new Set,u,m=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,b){return p?new OffscreenCanvas(R,b):Ds("canvas")}function _(R,b,W){let st=1,et=Ft(R);if((et.width>W||et.height>W)&&(st=W/Math.max(et.width,et.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(st*et.width),pt=Math.floor(st*et.height);u===void 0&&(u=d(ct,pt));let j=b?d(ct,pt):u;return j.width=ct,j.height=pt,j.getContext("2d").drawImage(R,0,0,ct,pt),It("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ct+"x"+pt+")."),j}else return"data"in R&&It("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,b,W,st,et,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt;st&&(pt=t.get("EXT_texture_norm16"),pt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8),W===i.UNSIGNED_SHORT&&pt&&(j=pt.R16_EXT),W===i.SHORT&&pt&&(j=pt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),b===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8),W===i.UNSIGNED_SHORT&&pt&&(j=pt.RG16_EXT),W===i.SHORT&&pt&&(j=pt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&pt&&(j=pt.RGB16_EXT),W===i.SHORT&&pt&&(j=pt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){let Q=ct?Ls:$t.getTransfer(et);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=Q===ie?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pt&&(j=pt.RGBA16_EXT),W===i.SHORT&&pt&&(j=pt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,b){let W;return R?b===null||b===wn||b===Fi?W=i.DEPTH24_STENCIL8:b===gn?W=i.DEPTH32F_STENCIL8:b===ds&&(W=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wn||b===Fi?W=i.DEPTH_COMPONENT24:b===gn?W=i.DEPTH_COMPONENT32F:b===ds&&(W=i.DEPTH_COMPONENT16),W}function T(R,b){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ne&&R.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function U(R){let b=new WeakRef(R);n.get(R).__ref=b,g.add(b),v.register(R,b,b)}function P(R){let b=n.get(R).__ref;b!==void 0&&(g.delete(b),v.unregister(b))}function I(R){A(R.target)}function F(R){w(R.target)}function A(R){R.removeEventListener("dispose",I),P(R),B(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&f.delete(R)}function w(R){R.removeEventListener("dispose",F),P(R),K(R)}function N(){for(let R of g){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?w(b):A(b))}g.clear(),f.clear()}function B(R){let b=n.get(R);if(b.__webglInit===void 0)return;let W=R.source,st=m.get(W);if(st){let et=st[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&z(R),Object.keys(st).length===0&&m.delete(W)}n.remove(R)}function z(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let W=R.source,st=m.get(W);delete st[b.__cacheKey],a.memory.textures--}function K(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&A(W),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let ct=0;ct<b.__webglFramebuffer[et].length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[et][ct]);else i.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)i.deleteFramebuffer(b.__webglFramebuffer[et]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=R.textures;for(let et=0,ct=st.length;et<ct;et++){let pt=n.get(st[et]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(st[et])}n.remove(R)}let V=0;function Y(){V=0}function $(){return V}function lt(R){V=R}function J(){let R=V;return R>=s.maxTextures&&It("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function D(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function nt(R,b){let W=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let st=R.image;if(st===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,R,b);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function at(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ve(W,R,b);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function gt(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ve(W,R,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function it(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){He(W,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let Lt={[ns]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},Yt={[Ne]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},vt={[Ih]:i.NEVER,[Ul]:i.ALWAYS,[Lh]:i.LESS,[Dl]:i.LEQUAL,[Dh]:i.EQUAL,[Nl]:i.GEQUAL,[Nh]:i.GREATER,[Uh]:i.NOTEQUAL};function Ut(R,b){if(b.type===gn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===je||b.magFilter===Ra||b.magFilter===ir||b.magFilter===ti||b.minFilter===je||b.minFilter===Ra||b.minFilter===ir||b.minFilter===ti)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Lt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Lt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Lt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Yt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Yt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ne||b.minFilter!==ir&&b.minFilter!==ti||b.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",I),U(b));let st=b.source,et=m.get(st);et===void 0&&(et={},m.set(st,et));let ct=D(b);if(ct!==R.__cacheKey){et[ct]===void 0&&(et[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[ct].usedTimes++;let pt=et[R.__cacheKey];pt!==void 0&&(et[R.__cacheKey].usedTimes--,pt.usedTimes===0&&z(b)),R.__cacheKey=ct,R.__webglTexture=et[ct].texture}return W}function qt(R,b,W){return Math.floor(Math.floor(R/W)/b)}function Se(R,b,W,st){let ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,st,b.data);else{ct.sort((L,tt)=>L.start-tt.start);let pt=0;for(let L=1;L<ct.length;L++){let tt=ct[pt],Z=ct[L],ft=tt.start+tt.count,ot=qt(Z.start,b.width,4),ht=qt(tt.start,b.width,4);Z.start<=ft+1&&ot===ht&&qt(Z.start+Z.count-1,b.width,4)===ot?tt.count=Math.max(tt.count,Z.start+Z.count-tt.start):(++pt,ct[pt]=Z)}ct.length=pt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,tt=ct.length;L<tt;L++){let Z=ct[L],ft=Math.floor(Z.start/4),ot=Math.ceil(Z.count/4),ht=ft%b.width,Et=Math.floor(ft/b.width),Wt=ot,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,ht,Et,Wt,rt,W,st,b.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function ve(R,b,W){let st=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=i.TEXTURE_3D);let et=Kt(R,b),ct=b.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+W);let pt=n.get(ct);if(ct.version!==pt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=$t.getPrimaries($t.workingColorSpace),Ct=b.colorSpace===ni?null:$t.getPrimaries(b.colorSpace),Gt=b.colorSpace===ni||rt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=_(b.image,!1,s.maxTextureSize);Q=Rt(b,Q);let ut=r.convert(b.format,b.colorSpace),L=r.convert(b.type),tt=E(b.internalFormat,ut,L,b.normalized,b.colorSpace,b.isVideoTexture);Ut(st,b);let Z,ft=b.mipmaps,ot=b.isVideoTexture!==!0,ht=pt.__version===void 0||et===!0,Et=ct.dataReady,Wt=T(b,Q);if(b.isDepthTexture)tt=x(b.format===ei,b.type),ht&&(ot?e.texStorage2D(i.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,tt,Q.width,Q.height,0,ut,L,null));else if(b.isDataTexture)if(ft.length>0){ot&&ht&&e.texStorage2D(i.TEXTURE_2D,Wt,tt,ft[0].width,ft[0].height);for(let rt=0,Ct=ft.length;rt<Ct;rt++)Z=ft[rt],ot?Et&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,L,Z.data):e.texImage2D(i.TEXTURE_2D,rt,tt,Z.width,Z.height,0,ut,L,Z.data);b.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(i.TEXTURE_2D,Wt,tt,Q.width,Q.height),Et&&Se(b,Q,ut,L)):e.texImage2D(i.TEXTURE_2D,0,tt,Q.width,Q.height,0,ut,L,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,tt,ft[0].width,ft[0].height,Q.depth);for(let rt=0,Ct=ft.length;rt<Ct;rt++)if(Z=ft[rt],b.format!==An)if(ut!==null)if(ot){if(Et)if(b.layerUpdates.size>0){let Gt=Vl(Z.width,Z.height,b.format,b.type);for(let _t of b.layerUpdates){let se=Z.data.subarray(_t*Gt/Z.data.BYTES_PER_ELEMENT,(_t+1)*Gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,_t,Z.width,Z.height,1,ut,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,tt,Z.width,Z.height,Q.depth,0,Z.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,L,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,tt,Z.width,Z.height,Q.depth,0,ut,L,Z.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(i.TEXTURE_2D,Wt,tt,ft[0].width,ft[0].height);for(let rt=0,Ct=ft.length;rt<Ct;rt++)Z=ft[rt],b.format!==An?ut!==null?ot?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,tt,Z.width,Z.height,0,Z.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Et&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,L,Z.data):e.texImage2D(i.TEXTURE_2D,rt,tt,Z.width,Z.height,0,ut,L,Z.data)}else if(b.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,tt,Q.width,Q.height,Q.depth),Et)if(b.layerUpdates.size>0){let rt=Vl(Q.width,Q.height,b.format,b.type);for(let Ct of b.layerUpdates){let Gt=Q.data.subarray(Ct*rt/Q.data.BYTES_PER_ELEMENT,(Ct+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,Q.width,Q.height,1,ut,L,Gt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,L,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,ut,L,Q.data);else if(b.isData3DTexture)ot?(ht&&e.texStorage3D(i.TEXTURE_3D,Wt,tt,Q.width,Q.height,Q.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,L,Q.data)):e.texImage3D(i.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,ut,L,Q.data);else if(b.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(i.TEXTURE_2D,Wt,tt,Q.width,Q.height);else{let rt=Q.width,Ct=Q.height;for(let Gt=0;Gt<Wt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,tt,rt,Ct,0,ut,L,null),rt>>=1,Ct>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),f.add(b),rt.onpaint=Ct=>{let Gt=Ct.changedElements;for(let _t of f)Gt.includes(_t.image)&&(_t.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Gt=i.RGBA,_t=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,_t,se,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ot&&ht){let rt=Ft(ft[0]);e.texStorage2D(i.TEXTURE_2D,Wt,tt,rt.width,rt.height)}for(let rt=0,Ct=ft.length;rt<Ct;rt++)Z=ft[rt],ot?Et&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ut,L,Z):e.texImage2D(i.TEXTURE_2D,rt,tt,ut,L,Z);b.generateMipmaps=!1}else if(ot){if(ht){let rt=Ft(Q);e.texStorage2D(i.TEXTURE_2D,Wt,tt,rt.width,rt.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,L,Q)}else e.texImage2D(i.TEXTURE_2D,0,tt,ut,L,Q);M(b)&&b.mipmapsAutoUpdate===!0&&y(st),pt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function He(R,b,W){if(b.image.length!==6)return;let st=Kt(R,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let ct=n.get(et);if(et.version!==ct.__version||st===!0){e.activeTexture(i.TEXTURE0+W);let pt=$t.getPrimaries($t.workingColorSpace),j=b.colorSpace===ni?null:$t.getPrimaries(b.colorSpace),Q=b.colorSpace===ni||pt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let _t=0;_t<6;_t++)!ut&&!L?tt[_t]=_(b.image[_t],!0,s.maxCubemapSize):tt[_t]=L?b.image[_t].image:b.image[_t],tt[_t]=Rt(b,tt[_t]);let Z=tt[0],ft=r.convert(b.format,b.colorSpace),ot=r.convert(b.type),ht=E(b.internalFormat,ft,ot,b.normalized,b.colorSpace),Et=b.isVideoTexture!==!0,Wt=ct.__version===void 0||st===!0,rt=et.dataReady,Ct=T(b,Z);Ut(i.TEXTURE_CUBE_MAP,b);let Gt;if(b.isDepthTexture){if(ht=x(b.format===ei,b.type),Wt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,Z.width,Z.height);else for(let _t=0;_t<6;_t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ht,Z.width,Z.height,0,ft,ot,null)}else if(ut){Et&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ht,Z.width,Z.height);for(let _t=0;_t<6;_t++){Gt=tt[_t].mipmaps;for(let se=0;se<Gt.length;se++){let Ie=Gt[se];b.format!==An?ft!==null?Et?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,0,0,Ie.width,Ie.height,ft,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,ht,Ie.width,Ie.height,0,Ie.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,0,0,Ie.width,Ie.height,ft,ot,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se,ht,Ie.width,Ie.height,0,ft,ot,Ie.data)}}}else{if(Gt=b.mipmaps,Et&&Wt){Gt.length>0&&Ct++;let _t=Ft(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ht,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(L){Et?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,tt[_t].width,tt[_t].height,ft,ot,tt[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ht,tt[_t].width,tt[_t].height,0,ft,ot,tt[_t].data);for(let se=0;se<Gt.length;se++){let si=Gt[se].image[_t].image;Et?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,0,0,si.width,si.height,ft,ot,si.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,ht,si.width,si.height,0,ft,ot,si.data)}}else{Et?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ft,ot,tt[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ht,ft,ot,tt[_t]);for(let se=0;se<Gt.length;se++){let Ie=Gt[se];Et?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,0,0,ft,ot,Ie.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,se+1,ht,ft,ot,Ie.image[_t])}}}M(b)&&b.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ct.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,W,st,et,ct){let pt=r.convert(W.format,W.colorSpace),j=r.convert(W.type),Q=E(W.internalFormat,pt,j,W.normalized,W.colorSpace),ut=n.get(b),L=n.get(W);if(L.__renderTarget=b,!ut.__hasExternalTextures){let tt=Math.max(1,b.width>>ct),Z=Math.max(1,b.height>>ct);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ct,Q,tt,Z,b.depth,0,pt,j,null):e.texImage2D(et,ct,Q,tt,Z,0,pt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,L.__webglTexture,0,pe(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,et,L.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pn(R,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let st=b.depthTexture,et=st&&st.isDepthTexture?st.type:null,ct=x(b.stencilBuffer,et),pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(b),ct,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(b),ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,R)}else{let st=b.textures;for(let et=0;et<st.length;et++){let ct=st[et],pt=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),Q=E(ct.internalFormat,pt,j,ct.normalized,ct.colorSpace);xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(b),Q,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(R,b,W){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(b.depthTexture);et.__renderTarget=b;let ct=st?b.depthTexture.image[0]:b.depthTexture.image;(!et.__webglTexture||ct.width!==b.width||ct.height!==b.height)&&(ct.width=b.width,ct.height=b.height,b.depthTexture.needsUpdate=!0),st?it(b.depthTexture,0):nt(b.depthTexture,0);let pt=et.__webglTexture,j=pe(b),Q=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ut=b.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Jn)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else if(b.depthTexture.format===ei)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(R){let b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",et)};st.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=st}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let st=0;st<6;st++)Pe(b.__webglFramebuffer[st],R,st);else R.texture.mipmaps.length>0?Pe(b.__webglFramebuffer[0],R,0):Pe(b.__webglFramebuffer,R,0);else if(W){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=i.createRenderbuffer(),Pn(b.__webglDepthbuffer[st],R,!1);else{let et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pn(b.__webglDepthbuffer,R,!1);else{let et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function hn(R,b,W){let st=n.get(R);b!==void 0&&_e(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&cn(R)}function un(R){let b=R.texture,W=n.get(R),st=n.get(b);R.addEventListener("dispose",F),U(R);let et=R.textures,ct=R.isWebGLCubeRenderTarget===!0,pt=et.length>1;if(pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=b.version,a.memory.textures++),ct){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let Q=0;Q<b.mipmaps.length;Q++)W.__webglFramebuffer[j][Q]=i.createFramebuffer()}else W.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)W.__webglFramebuffer[j]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pt)for(let j=0,Q=et.length;j<Q;j++){let ut=n.get(et[j]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&xt(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<et.length;j++){let Q=et[j];W.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let ut=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),tt=E(Q.internalFormat,ut,L,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),Z=pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,W.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Pn(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)_e(W.__webglFramebuffer[j][Q],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else _e(W.__webglFramebuffer[j],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(b)?y(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let j=0,Q=et.length;j<Q;j++){let ut=et[j],L=n.get(ut),tt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,L.__webglTexture),Ut(tt,ut),_e(W.__webglFramebuffer,R,ut,i.COLOR_ATTACHMENT0+j,tt,0),M(ut)&&y(tt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,st.__webglTexture),Ut(j,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)_e(W.__webglFramebuffer[Q],R,b,i.COLOR_ATTACHMENT0,j,Q);else _e(W.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,j,0);M(b)?y(j):b.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&cn(R)}function k(R){let b=R.textures;for(let W=0,st=b.length;W<st;W++){let et=b[W];if(M(et)&&et.mipmapsAutoUpdate===!0){let ct=C(R),pt=n.get(et).__webglTexture;e.bindTexture(ct,pt),y(ct),e.unbindTexture()}}}let fn=[];function de(R){if(R.samples>0){if(xt(R)===!1){let b=R.textures,W=R.width,st=R.height,et=i.COLOR_BUFFER_BIT,ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(R),j=b.length>1;if(j)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let L=n.get(b[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,st,0,0,W,st,et,i.NEAREST),l===!0&&(fn.length=0,fn.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&fn.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let L=n.get(b[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pe(R){return Math.min(s.maxSamples,R.samples)}function xt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(R){let b=a.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function Rt(R,b){let W=R.colorSpace,st=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Is&&W!==ni&&($t.getTransfer(W)===ie?(st!==An||et!==en)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",W)),b}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.getTextureUnits=$,this.setTextureUnits=lt,this.setTexture2D=nt,this.setTexture2DArray=at,this.setTexture3D=gt,this.setTextureCube=it,this.rebindTextures=hn,this.setupRenderTarget=un,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xt,this.dispose=N}function dg(i,t){function e(n,s=ni){let r,a=$t.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Cl)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Ll)return i.RGB;if(n===An)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Fa)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Ha||n===Wa||n===Xa||n===lr||n===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Va)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return r.COMPRESSED_R11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return r.COMPRESSED_RG11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===cr||n===fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,f=null,u=null,m=null,g=null,v=typeof XRWebGLBinding<"u",p=new nc,d={},_=e.getContextAttributes(),M=null,y=null,C=[],E=[],x=new Vt,T=null,U=null,P=new ze;P.viewport=new me;let I=new ze;I.viewport=new me;let F=[P,I],A=new wa,w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let nt=C[D];return nt===void 0&&(nt=new as,C[D]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(D){let nt=C[D];return nt===void 0&&(nt=new as,C[D]=nt),nt.getGripSpace()},this.getHand=function(D){let nt=C[D];return nt===void 0&&(nt=new as,C[D]=nt),nt.getHandSpace()};function B(D){let nt=E.indexOf(D.inputSource);if(nt===-1)return;let at=C[nt];at!==void 0&&(at.update(D.inputSource,D.frame,h||a),at.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let D=0;D<C.length;D++){let nt=E[D];nt!==null&&(E[D]=null,C[D].disconnect(nt))}w=null,N=null,p.reset();for(let D in d)delete d[D];if(t.setRenderTarget(M),m=null,u=null,f=null,s=null,y=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(x.width,x.height,!1),U!==null){let D=U.camera;D.fov=U.fov,D.zoom=U.zoom,D.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(D){h=D},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,gt=null,it=null;_.depth&&(it=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?ei:Jn,gt=_.stencil?Fi:wn);let Lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new an(u.textureWidth,u.textureHeight,{format:An,type:en,depthTexture:new Qn(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new an(m.framebufferWidth,m.framebufferHeight,{format:An,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(D){for(let nt=0;nt<D.removed.length;nt++){let at=D.removed[nt],gt=E.indexOf(at);gt>=0&&(E[gt]=null,C[gt].disconnect(at))}for(let nt=0;nt<D.added.length;nt++){let at=D.added[nt],gt=E.indexOf(at);if(gt===-1){for(let Lt=0;Lt<C.length;Lt++)if(Lt>=E.length){E.push(at),gt=Lt;break}else if(E[Lt]===null){E[Lt]=at,gt=Lt;break}if(gt===-1)break}let it=C[gt];it&&it.connect(at)}}function V(D,nt){nt===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(nt.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let nt=D.near,at=D.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(at=p.depthFar)),A.near=I.near=P.near=nt,A.far=I.far=P.far=at,(w!==A.near||N!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,N=A.far),A.layers.mask=D.layers.mask|6,P.layers.mask=A.layers.mask&-5,I.layers.mask=A.layers.mask&-3;let gt=D.parent,it=A.cameras;V(A,gt);for(let Lt=0;Lt<it.length;Lt++)V(it[Lt],gt);A.projectionMatrix.copy(P.projectionMatrix),A.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&D.isPerspectiveCamera&&(U={camera:D,fov:D.fov,zoom:D.zoom}),Y(D,A,gt)};function Y(D,nt,at){at===null?D.matrix.copy(nt.matrixWorld):(D.matrix.copy(at.matrixWorld),D.matrix.invert(),D.matrix.multiply(nt.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(nt.projectionMatrix),D.projectionMatrixInverse.copy(nt.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=sa*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(A)},this.getCameraTexture=function(D){return d[D]};let $=null;function lt(D,nt){if(c=nt.getViewerPose(h||a),g=nt,c!==null){let at=c.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let gt=!1;at.length!==A.cameras.length&&(A.cameras.length=0,gt=!0);for(let vt=0;vt<at.length;vt++){let Ut=at[vt],Kt=null;if(m!==null)Kt=m.getViewport(Ut);else{let Se=f.getViewSubImage(u,Ut);Kt=Se.viewport,vt===0&&(t.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(y))}let qt=F[vt];qt===void 0&&(qt=new ze,qt.layers.enable(vt),qt.viewport=new me,F[vt]=qt),qt.matrix.fromArray(Ut.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Ut.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),vt===0&&(A.matrix.copy(qt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),gt===!0&&A.cameras.push(qt)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let vt=f.getDepthInformation(at[0]);vt&&vt.isValid&&vt.texture&&p.init(vt,s.renderState)}if(it&&it.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let vt=0;vt<at.length;vt++){let Ut=at[vt].camera;if(Ut){let Kt=d[Ut];Kt||(Kt=new Xs,d[Ut]=Kt);let qt=f.getCameraImage(Ut);Kt.sourceTexture=qt}}}}for(let at=0;at<C.length;at++){let gt=E[at],it=C[at];gt!==null&&it!==void 0&&it.update(gt,nt,h||a)}$&&$(D,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let J=new du;J.setAnimationLoop(lt),this.setAnimationLoop=function(D){$=D},this.dispose=function(){}}},gg=new oe,Su=new Nt;Su.set(-1,0,0,0,1,0,0,0,1);function xg(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,zl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,_,M,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,_,M):d.isSpriteMaterial?h(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ge&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ge&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _=t.get(d),M=_.envMap,y=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Su),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,_,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,_){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let _=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,t,e,n){let s={},r={};function a(_,M){let y=M.program;n.uniformBlockBinding(_,y,s[_.id])}function o(_,M){let y=s[_.id];y===void 0&&(g(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",p));let C=M.program;n.updateUBOMapping(_,C);let E=t.render.frame;r[_.id]!==E&&(h(_),r[_.id]=E)}function l(_){let M=i.createBuffer(),y=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function h(_){let M=s[_.id],y=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,x=y.length;E<x;E++){let T=y[E];if(Array.isArray(T))for(let U=0,P=T.length;U<P;U++)c(T[U],E,U,C);else c(T,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(_,M,y,C){if(u(_,M,y,C)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let T=0;for(let U=0;U<x.length;U++){let P=x[U],I=v(P,!0);f(P,_.__data,T),T+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function f(_,M,y){typeof _=="number"||typeof _=="boolean"?M[y]=_:_.isMatrix3?(M[y]=_.elements[0],M[y+1]=_.elements[1],M[y+2]=_.elements[2],M[y+3]=0,M[y+4]=_.elements[3],M[y+5]=_.elements[4],M[y+6]=_.elements[5],M[y+7]=0,M[y+8]=_.elements[6],M[y+9]=_.elements[7],M[y+10]=_.elements[8],M[y+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-y),y):_.toArray(M,y)}function u(_,M,y,C){let E=_.value,x=M+"_"+y;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let T=C[x],U=!1;for(let P=0;P<E.length;P++)m(E[P],T,P)===!0&&(U=!0);return U}return m(E,C,x)}function m(_,M,y){if(M[y]===void 0)return typeof _=="number"||typeof _=="boolean"?M[y]=_:ArrayBuffer.isView(_)?M[y]=_.slice():M[y]=_.clone(),!0;{let C=M[y];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return M[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(_){let M=_.uniforms,y=0,C=16;for(let x=0,T=M.length;x<T;x++){let U=Array.isArray(M[x])?M[x]:[M[x]];for(let P=0,I=U.length;P<I;P++){let F=U[P],A=Array.isArray(F.value)?F.value:[F.value],w=Array.isArray(M[x])||Array.isArray(F.value),N=y;for(let z=0,K=A.length;z<K;z++){let V=A[z],Y=v(V,w),$=y%C,lt=$%Y.boundary,J=$+lt;y+=lt,J!==0&&C-J<Y.storage&&(y+=C-J),z===0&&(N=y),y+=Y.storage}let B=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new B((y-N)/Float32Array.BYTES_PER_ELEMENT),F.__offset=N}}let E=y%C;return E>0&&(y+=C-E),_.__size=y,_.__cache={},this}function v(_,M){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):It("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(_){let M=_.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:d}}var yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function vg(){return On===null&&(On=new ks(yg,16,16,_i,Tn),On.name="DFG_LUT",On.minFilter=je,On.magFilter=je,On.wrapS=pn,On.wrapT=pn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var _o=class{constructor(t={}){let{canvas:e=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=m,p=new Set([Fa,Ua,Na]),d=new Set([en,wn,ds,Fi,Ia,La]),_=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],T=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,F=null,A=null,w=null,N=null;this._outputColorSpace=Ke;let B=0,z=0,K=null,V=-1,Y=null,$=new me,lt=new me,J=null,D=new Pt(0),nt=0,at=e.width,gt=e.height,it=1,Lt=null,Yt=null,vt=new me(0,0,at,gt),Ut=new me(0,0,at,gt),Kt=!1,qt=new fi,Se=new la,ve=!1,He=!1,_e=new oe,Pn=new G,Pe=new me,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hn=!1;function un(){return K===null?it:1}let k=n;function fn(S,O){return e.getContext(S,O)}let de,pe,xt,Ee,Rt,Ft,R,b,W,st,et,ct,pt,j,Q,ut,L,tt,Z,ft,ot,ht,Et;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),k===null){let O="webgl2";if(k=fn(O,S),k===null)throw fn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(S){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Dt("WebGLRenderer: "+S.message),S}function Wt(){de=new I0(k),de.init(),ot=new dg(k,de),pe=new v0(k,de,t,ot),xt=new ug(k,de),pe.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),A=k.createFramebuffer(),w=k.createFramebuffer(),N=k.createFramebuffer(),Ee=new N0(k),Rt=new Km,Ft=new fg(k,de,xt,Rt,pe,ot,Ee),R=new P0(P),b=new Ff(k),ht=new _0(k,b),W=new L0(k,b,Ee,ht),st=new F0(k,W,b,ht,Ee),tt=new U0(k,pe,Ft),Q=new M0(Rt),et=new $m(P,R,de,pe,ht,Q),ct=new xg(P,Rt),pt=new Qm,j=new rg(de),L=new x0(P,R,xt,st,g,l),ut=new hg(P,st,pe),Et=new _g(k,Ee,pe,xt),Z=new y0(k,de,Ee),ft=new D0(k,de,Ee),Ee.programs=et.programs,P.capabilities=pe,P.extensions=de,P.properties=Rt,P.renderLists=pt,P.shadowMap=ut,P.state=xt,P.info=Ee}v!==en&&(U=new B0(v,e.width,e.height,o,s,r));let rt=new ic(P,k);this.xr=rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=de.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=de.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(at,gt,!1))},this.getSize=function(S){return S.set(at,gt)},this.setSize=function(S,O,q=!0){if(rt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,gt=O,e.width=Math.floor(S*it),e.height=Math.floor(O*it),q===!0&&(e.style.width=S+"px",e.style.height=O+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(at*it,gt*it).floor()},this.setDrawingBufferSize=function(S,O,q){at=S,gt=O,it=q,e.width=Math.floor(S*q),e.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(v===en){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(vt)},this.setViewport=function(S,O,q,H){S.isVector4?vt.set(S.x,S.y,S.z,S.w):vt.set(S,O,q,H),xt.viewport($.copy(vt).multiplyScalar(un()).round())},this.getScissor=function(S){return S.copy(Ut)},this.setScissor=function(S,O,q,H){S.isVector4?Ut.set(S.x,S.y,S.z,S.w):Ut.set(S,O,q,H),xt.scissor(lt.copy(Ut).multiplyScalar(un()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(S){xt.setScissorTest(Kt=S)},this.setOpaqueSort=function(S){Lt=S},this.setTransparentSort=function(S){Yt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,q=!0){let H=0;if(S){let X=!1;if(K!==null){let mt=K.texture.format;X=p.has(mt)}if(X){let mt=K.texture.type,St=d.has(mt),dt=L.getClearColor(),Mt=L.getClearAlpha(),At=dt.r,Ot=dt.g,Zt=dt.b;St?(_[0]=At,_[1]=Ot,_[2]=Zt,_[3]=Mt,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=At,M[1]=Ot,M[2]=Zt,M[3]=Mt,k.clearBufferiv(k.COLOR,0,M))}else H|=k.COLOR_BUFFER_BIT}O&&(H|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),L.dispose(),pt.dispose(),j.dispose(),Ft.dispose(),Rt.dispose(),R.dispose(),st.dispose(),W.dispose(),ht.dispose(),Et.dispose(),et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Mc),rt.removeEventListener("sessionend",bc),Mi.stop()};function Ct(S){S.preventDefault(),Ol("WebGLRenderer: Context Lost."),I=!0}function Gt(){Ol("WebGLRenderer: Context Restored."),I=!1;let S=Ee.autoReset,O=ut.enabled,q=ut.autoUpdate,H=ut.needsUpdate,X=ut.type;Wt(),Ee.autoReset=S,ut.enabled=O,ut.autoUpdate=q,ut.needsUpdate=H,ut.type=X}function _t(S){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){let O=S.target;O.removeEventListener("dispose",se),Ie(O)}function Ie(S){si(S),Rt.remove(S)}function si(S){let O=Rt.get(S).programs;O!==void 0&&(O.forEach(function(q){et.releaseProgram(q)}),S.isShaderMaterial&&et.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,H,X,mt){O===null&&(O=cn);let St=X.isMesh&&X.matrixWorld.determinantAffine()<0,dt=Yu(S,O,q,H,X);xt.setMaterial(H,St);let Mt=q.index,At=1;if(H.wireframe===!0){if(Mt=W.getWireframeAttribute(q),Mt===void 0)return;At=2}let Ot=q.drawRange,Zt=q.attributes.position,wt=Ot.start*At,Jt=(Ot.start+Ot.count)*At;mt!==null&&(wt=Math.max(wt,mt.start*At),Jt=Math.min(Jt,(mt.start+mt.count)*At)),Mt!==null?(wt=Math.max(wt,0),Jt=Math.min(Jt,Mt.count)):Zt!=null&&(wt=Math.max(wt,0),Jt=Math.min(Jt,Zt.count));let we=Jt-wt;if(we<0||we===1/0)return;ht.setup(X,H,dt,q,Mt);let ue,ce=Z;if(Mt!==null&&(ue=b.get(Mt),ce=ft,ce.setIndex(ue)),X.isMesh)H.wireframe===!0?(xt.setLineWidth(H.wireframeLinewidth*un()),ce.setMode(k.LINES)):ce.setMode(k.TRIANGLES);else if(X.isLine){let We=H.linewidth;We===void 0&&(We=1),xt.setLineWidth(We*un()),X.isLineSegments?ce.setMode(k.LINES):X.isLineLoop?ce.setMode(k.LINE_LOOP):ce.setMode(k.LINE_STRIP)}else X.isPoints?ce.setMode(k.POINTS):X.isSprite&&ce.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,Tt=X._multiDrawCounts,$e=X._multiDrawCount,ee=Mt?b.get(Mt).bytesPerElement:1,bi=Rt.get(H).currentProgram.getUniforms();for(let Xe=0;Xe<$e;Xe++)bi.setValue(k,"_gl_DrawID",Xe),ce.render(We[Xe]/ee,Tt[Xe])}else if(X.isInstancedMesh)ce.renderInstances(wt,we,X.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,We);ce.renderInstances(wt,we,Tt)}else ce.render(wt,we)};function vc(S,O,q,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),ve===!0&&Q.setState(S,q,!1),S.transparent===!0&&S.side===Ue&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,bs(S,O,H),S.side=xi,S.needsUpdate=!0,bs(S,O,H),S.side=Ue):bs(S,O,H)}this.compile=function(S,O,q=null){q===null&&(q=S),F!==null&&F.renderStart(S,O,q),E=j.get(q),E.init(O),T.push(E),q.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),He=this.localClippingEnabled,ve=Q.init(this.clippingPlanes,He),ve===!0&&Q.setGlobalState(this.clippingPlanes,O),F!==null&&ut.render(E.state.shadowsArray,q,O);let H=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let mt=X.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let dt=mt[St];vc(dt,q,O,X),H.add(dt)}else vc(mt,q,O,X),H.add(mt)}),E=T.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,O,q=null){let H=this.compile(S,O,q);return new Promise(X=>{function mt(){if(H.forEach(function(St){let Mt=Rt.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(St)}),H.size===0){X(S);return}setTimeout(mt,10)}de.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Oo=null;function Xu(S){Oo&&Oo(S)}function Mc(){Mi.stop()}function bc(){Mi.start()}let Mi=new du;Mi.setAnimationLoop(Xu),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(S){Oo=S,rt.setAnimationLoop(S),S===null?Mi.stop():Mi.start()},rt.addEventListener("sessionstart",Mc),rt.addEventListener("sessionend",bc),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,O);let q=rt.enabled===!0&&rt.isPresenting===!0,H=U!==null&&(K===null||q)&&U.begin(P,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,O,K),E=j.get(S,T.length),E.init(O),E.state.textureUnits=Ft.getTextureUnits(),T.push(E),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Se.setFromArrayCamera(O):qt.setFromProjectionMatrix(_e,mn,O.reversedDepth),He=this.localClippingEnabled,ve=Q.init(this.clippingPlanes,He),C=pt.get(S,x.length),C.init(),x.push(C),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&Bo(St,O,-1/0,P.sortObjects)}Bo(S,O,0,P.sortObjects),C.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&C.sort(Lt,Yt),hn=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,hn&&L.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),ve===!0&&Q.beginShadows();let X=E.state.shadowsArray;if(ut.render(X,S,O),ve===!0&&Q.endShadows(),(H&&U.hasRenderPass())===!1){let St=C.opaque,dt=C.transmissive;if(E.setupLights(),O.isArrayCamera){let Mt=O.cameras;if(dt.length>0)for(let At=0,Ot=Mt.length;At<Ot;At++){let Zt=Mt[At];wc(St,dt,S,Zt)}hn&&L.render(S);for(let At=0,Ot=Mt.length;At<Ot;At++){let Zt=Mt[At];Sc(C,S,Zt,Zt.viewport)}}else dt.length>0&&wc(St,dt,S,O),hn&&L.render(S),Sc(C,S,O)}K!==null&&z===0&&(Ft.updateMultisampleRenderTarget(K),Ft.updateRenderTargetMipmap(K)),H&&U.end(P),S.isScene===!0&&S.onAfterRender(P,S,O),ht.resetDefaultState(),V=-1,Y=null,T.pop(),T.length>0?(E=T[T.length-1],Ft.setTextureUnits(E.state.textureUnits),ve===!0&&Q.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,F!==null&&F.renderEnd()};function Bo(S,O,q,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let St=O.isArrayCamera?Se:qt;if(!S.frustumCulled||S.intersectsFrustum(St)){H&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);let dt=st.update(S),Mt=S.material;Mt.visible&&C.push(S,dt,Mt,q,Pe.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){let St=O.isArrayCamera?Se:qt;if(!S.frustumCulled||S.intersectsFrustum(St)){let dt=st.update(S),Mt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pe.copy(dt.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Mt)){let At=dt.groups;for(let Ot=0,Zt=At.length;Ot<Zt;Ot++){let wt=At[Ot],Jt=Mt[wt.materialIndex];Jt&&Jt.visible&&C.push(S,dt,Jt,q,Pe.z,wt,O)}}else Mt.visible&&C.push(S,dt,Mt,q,Pe.z,null,O)}}}let mt=S.children;for(let St=0,dt=mt.length;St<dt;St++)Bo(mt[St],O,q,H)}function Sc(S,O,q,H){let{opaque:X,transmissive:mt,transparent:St}=S;E.setupLightsView(q),ve===!0&&Q.setGlobalState(P.clippingPlanes,q),H&&xt.viewport($.copy(H)),X.length>0&&br(X,O,q),mt.length>0&&br(mt,O,q),St.length>0&&br(St,O,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function wc(S,O,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let wt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new an(1,1,{generateMipmaps:!0,type:wt?Tn:en,minFilter:ti,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=E.state.transmissionRenderTarget[H.id],St=H.viewport||$;mt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let dt=P.getRenderTarget(),Mt=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(D),nt=P.getClearAlpha(),nt<1&&P.setClearColor(16777215,.5),P.clear(),hn&&L.render(q);let Ot=P.toneMapping;P.toneMapping=Fn;let Zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ve===!0&&Q.setGlobalState(P.clippingPlanes,H),br(S,q,H),Ft.updateMultisampleRenderTarget(mt),Ft.updateRenderTargetMipmap(mt),de.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Jt=0,we=O.length;Jt<we;Jt++){let ue=O[Jt],{object:ce,geometry:We,material:Tt,group:$e}=ue;if(Tt.side===Ue&&ce.layers.test(H.layers)){let ee=Tt.side;Tt.side=Ge,Tt.needsUpdate=!0,Tc(ce,q,H,We,Tt,$e),Tt.side=ee,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(Ft.updateMultisampleRenderTarget(mt),Ft.updateRenderTargetMipmap(mt))}P.setRenderTarget(dt,Mt,At),P.setClearColor(D,nt),Zt!==void 0&&(H.viewport=Zt),P.toneMapping=Ot}function br(S,O,q){let H=O.isScene===!0?O.overrideMaterial:null;for(let X=0,mt=S.length;X<mt;X++){let St=S[X],{object:dt,geometry:Mt,group:At}=St,Ot=St.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),dt.layers.test(q.layers)&&Tc(dt,O,q,Mt,Ot,At)}}function Tc(S,O,q,H,X,mt){F!==null&&X.isNodeMaterial&&F.setObject(S,X),S.onBeforeRender(P,O,q,H,X,mt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(P,O,q,H,S,mt),X.transparent===!0&&X.side===Ue&&X.forceSinglePass===!1?(X.side=Ge,X.needsUpdate=!0,P.renderBufferDirect(q,O,H,X,S,mt),X.side=xi,X.needsUpdate=!0,P.renderBufferDirect(q,O,H,X,S,mt),X.side=Ue):P.renderBufferDirect(q,O,H,X,S,mt),S.onAfterRender(P,O,q,H,X,mt)}function Ac(S){let O=0;for(let q of S)q.texture!==null&&O++;return O}function bs(S,O,q){O.isScene!==!0&&(O=cn);let H=Rt.get(S),X=E.state.lights,mt=E.state.shadowsArray,St=X.state.version,dt=et.getParameters(S,X.state,mt,O,q,E.state.lightProbeGridArray),Mt=et.getProgramCacheKey(dt),At=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=R.get(S.envMap||H.environment,Ot),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",se),At=new Map,H.programs=At,H.programVariants=new Map);let Zt=At.get(Mt);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===St)return Cc(S,dt),Zt}else dt.uniforms=et.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,q,dt),S.onBeforeCompile(dt,P),Zt=et.acquireProgram(dt,Mt),At.set(Mt,Zt),H.uniforms=dt.uniforms;let wt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=Q.uniform),Cc(S,dt),H.needsLights=Ju(S),H.lightsStateVersion=St,H.needsLights&&(wt.ambientLightColor.value=X.state.ambient,wt.lightProbe.value=X.state.probe,wt.sunLights.value=X.state.sun,wt.sunLightShadows.value=X.state.sunShadow,wt.directionalLights.value=X.state.directional,wt.directionalLightShadows.value=X.state.directionalShadow,wt.spotLights.value=X.state.spot,wt.spotLightShadows.value=X.state.spotShadow,wt.rectAreaLights.value=X.state.rectArea,wt.ltc_1.value=X.state.rectAreaLTC1,wt.ltc_2.value=X.state.rectAreaLTC2,wt.pointLights.value=X.state.point,wt.pointLightShadows.value=X.state.pointShadow,wt.hemisphereLights.value=X.state.hemi,wt.sunShadowMatrix.value=X.state.sunShadowMatrix,wt.sunShadowCascade.value=X.state.sunShadowCascade,wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,wt.spotLightMatrix.value=X.state.spotLightMatrix,wt.spotLightMap.value=X.state.spotLightMap,wt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=Ac(E.state.lightProbeGridArray),H.currentProgram=Zt,H.uniformsList=null,Zt}function qu(S,O,q,H,X){let mt=Rt.get(S),St=mt.currentProgram.id+","+H+","+X,dt=mt.programVariants.get(St);return dt===void 0?(dt=bs(S,O,q),mt.programVariants.set(St,dt)):(mt.currentProgram=dt,mt.uniformsList=null,mt.outputColorSpace=H,mt.toneMapping=X),dt}function Ec(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Cc(S,O){let q=Rt.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Yu(S,O,q,H,X){O.isScene!==!0&&(O=cn),Ft.resetTextureUnits();let mt=O.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,dt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$t.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=R.get(H.envMap||St,Mt),Ot=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,we=!!q.morphAttributes.color,ue=Fn;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ue=P.toneMapping);let ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,We=ce!==void 0?ce.length:0,Tt=Rt.get(H),$e=E.state.lights;if(ve===!0&&(He===!0||S!==Y)){let ye=S===Y&&H.id===V;Q.setState(H,S,ye)}let ee=!1,bi=!1;H.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==$e.state.version||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==At||H.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==Ot||Tt.vertexTangents!==Zt||Tt.morphTargets!==wt||Tt.morphNormals!==Jt||Tt.morphColors!==we||Tt.morphTargetsCount!==We||Tt.numLightProbeGrids!==Ac(E.state.lightProbeGridArray)?ee=!0:(Tt.outputColorSpace!==dt||Tt.toneMapping!==ue)&&(bi=!0):(ee=!0,Tt.__version=H.version);let Xe=Tt.currentProgram;(ee===!0||bi===!0)&&(Xe=bi===!0?qu(H,O,X,dt,ue):bs(H,O,X),F&&H.isNodeMaterial&&F.onUpdateProgram(H,Xe,Tt));let Sr=!1,ri=!1,Si=!1,Qt=Xe.getUniforms(),Be=Tt.uniforms;if(xt.useProgram(Xe.program)&&(Sr=!0,ri=!0,Si=!0),H.id!==V&&(V=H.id,ri=!0),Sr||Y!==S){xt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Qt.setValue(k,"projectionMatrix",S.projectionMatrix),Qt.setValue(k,"viewMatrix",S.matrixWorldInverse);let Le=Qt.map.cameraPosition;Le!==void 0&&Le.setValue(k,Pn.setFromMatrixPosition(S.matrixWorld)),pe.logarithmicDepthBuffer&&Qt.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Qt.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,ri=!0,Si=!0)}if(Tt.needsLights&&($e.state.sunShadowMap.length>0&&Qt.setValue(k,"sunShadowMap",$e.state.sunShadowMap,Ft),$e.state.directionalShadowMap.length>0&&Qt.setValue(k,"directionalShadowMap",$e.state.directionalShadowMap,Ft),$e.state.spotShadowMap.length>0&&Qt.setValue(k,"spotShadowMap",$e.state.spotShadowMap,Ft),$e.state.pointShadowMap.length>0&&Qt.setValue(k,"pointShadowMap",$e.state.pointShadowMap,Ft)),X.isSkinnedMesh){Qt.setOptional(k,X,"bindMatrix"),Qt.setOptional(k,X,"bindMatrixInverse");let ye=X.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),Qt.setValue(k,"boneTexture",ye.boneTexture,Ft))}X.isBatchedMesh&&(Qt.setOptional(k,X,"batchingTexture"),Qt.setValue(k,"batchingTexture",X._matricesTexture,Ft),Qt.setOptional(k,X,"batchingIdTexture"),Qt.setValue(k,"batchingIdTexture",X._indirectTexture,Ft),Qt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Qt.setValue(k,"batchingColorTexture",X._colorsTexture,Ft));let _n=q.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&tt.update(X,q,Xe),(ri||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,Qt.setValue(k,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Be.envMapIntensity.value=O.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=vg()),ri){if(Qt.setValue(k,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&Zu(Be,Si),mt&&H.fog===!0&&ct.refreshFogUniforms(Be,mt),ct.refreshMaterialUniforms(Be,H,it,gt,E.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let ye=y,Le=0;for(let Vn of E.state.lightProbeGridArray)Vn.texture!==null&&(ye.textures[Le]=Vn.texture,ye.min[Le]=Vn.boundingBox.min,ye.max[Le]=Vn.boundingBox.max,ye.resolution[Le]=Vn.resolution,Le++);for(let Vn in ye)ye[Vn].length=Le;Be.probesSH.value=ye.textures,Be.probesMin.value=ye.min,Be.probesMax.value=ye.max,Be.probesResolution.value=ye.resolution}ps.upload(k,Ec(Tt),Be,Ft)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ps.upload(k,Ec(Tt),Be,Ft),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Qt.setValue(k,"center",X.center),Qt.setValue(k,"modelViewMatrix",X.modelViewMatrix),Qt.setValue(k,"normalMatrix",X.normalMatrix),Qt.setValue(k,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let ye=H.uniformsGroups;for(let Le=0,Vn=ye.length;Le<Vn;Le++){let Pc=ye[Le];Et.update(Pc,Xe),Et.bind(Pc,Xe)}}return Xe}function Zu(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,O,q){let H=Rt.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Rt.get(S.texture).__webglTexture=O,Rt.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let q=Rt.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,q=0){K=S,B=O,z=q;let H=null,X=!1,mt=!1;if(S){let dt=Rt.get(S);if(dt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(k.FRAMEBUFFER,dt.__webglFramebuffer),$.copy(S.viewport),lt.copy(S.scissor),J=S.scissorTest,xt.viewport($),xt.scissor(lt),xt.setScissorTest(J),V=-1;return}else if(dt.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(dt.__hasExternalTextures)Ft.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ot=S.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&Rt.has(Ot)&&(S.width!==Ot.image.width||S.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}let Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(mt=!0);let At=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[O])?H=At[O][q]:H=At[O],X=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?H=Rt.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[q]:H=At,$.copy(S.viewport),lt.copy(S.scissor),J=S.scissorTest}else $.copy(vt).multiplyScalar(it).floor(),lt.copy(Ut).multiplyScalar(it).floor(),J=Kt;if(q!==0&&(H=A),xt.bindFramebuffer(k.FRAMEBUFFER,H)&&xt.drawBuffers(S,H),xt.viewport($),xt.scissor(lt),xt.setScissorTest(J),X){let dt=Rt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,q)}else if(mt){let dt=O;for(let Mt=0;Mt<S.textures.length;Mt++){let At=Rt.get(S.textures[Mt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Mt,At.__webglTexture,q,dt)}}else if(S!==null&&q!==0){let dt=Rt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dt.__webglTexture,q)}V=-1};function Rc(S){let O=Rt.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=pe.textureFormatReadable(S.format),O.__typeReadable=pe.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,q,H,X,mt,St,dt=0){if(!(S&&S.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){xt.bindFramebuffer(k.FRAMEBUFFER,Mt);try{let At=S.textures[dt],Ot=At.format,Zt=At.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+dt);let wt=Rc(At);if(wt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&q>=0&&q<=S.height-X&&k.readPixels(O,q,H,X,ot.convert(Ot),ot.convert(Zt),mt)}finally{let At=K!==null?Rt.get(K).__webglFramebuffer:null;xt.bindFramebuffer(k.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,H,X,mt,St,dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(O>=0&&O<=S.width-H&&q>=0&&q<=S.height-X){xt.bindFramebuffer(k.FRAMEBUFFER,Mt);let At=S.textures[dt],Ot=At.format,Zt=At.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+dt);let wt=Rc(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.bufferData(k.PIXEL_PACK_BUFFER,mt.byteLength,k.STREAM_READ),k.readPixels(O,q,H,X,ot.convert(Ot),ot.convert(Zt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let we=K!==null?Rt.get(K).__webglFramebuffer:null;xt.bindFramebuffer(k.FRAMEBUFFER,we);let ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zh(k,ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,mt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Jt),k.deleteSync(ue),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,q=0){let H=Math.pow(2,-q),X=Math.floor(S.image.width*H),mt=Math.floor(S.image.height*H),St=O!==null?O.x:0,dt=O!==null?O.y:0;Ft.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,St,dt,X,mt),xt.unbindTexture()},this.copyTextureToTexture=function(S,O,q=null,H=null,X=0,mt=0){let St,dt,Mt,At,Ot,Zt,wt,Jt,we,ue=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(q!==null)St=q.max.x-q.min.x,dt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Ot=q.min.y,Zt=q.isBox3?q.min.z:0;else{let Qt=Math.pow(2,-X);St=Math.floor(ue.width*Qt),dt=Math.floor(ue.height*Qt),S.isDataArrayTexture?Mt=ue.depth:S.isData3DTexture?Mt=Math.floor(ue.depth*Qt):Mt=1,At=0,Ot=0,Zt=0}H!==null?(wt=H.x,Jt=H.y,we=H.z):(wt=0,Jt=0,we=0);let ce=ot.convert(O.format),We=ot.convert(O.type),Tt;O.isData3DTexture?(Ft.setTexture3D(O,0),Tt=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ft.setTexture2DArray(O,0),Tt=k.TEXTURE_2D_ARRAY):(Ft.setTexture2D(O,0),Tt=k.TEXTURE_2D),xt.activeTexture(k.TEXTURE0),xt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),xt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),xt.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let $e=xt.getParameter(k.UNPACK_ROW_LENGTH),ee=xt.getParameter(k.UNPACK_IMAGE_HEIGHT),bi=xt.getParameter(k.UNPACK_SKIP_PIXELS),Xe=xt.getParameter(k.UNPACK_SKIP_ROWS),Sr=xt.getParameter(k.UNPACK_SKIP_IMAGES);xt.pixelStorei(k.UNPACK_ROW_LENGTH,ue.width),xt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue.height),xt.pixelStorei(k.UNPACK_SKIP_PIXELS,At),xt.pixelStorei(k.UNPACK_SKIP_ROWS,Ot),xt.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt);let ri=S.isDataArrayTexture||S.isData3DTexture,Si=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Qt=Rt.get(S),Be=Rt.get(O),_n=Rt.get(Qt.__renderTarget),ye=Rt.get(Be.__renderTarget);xt.bindFramebuffer(k.READ_FRAMEBUFFER,_n.__webglFramebuffer),xt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Le=0;Le<Mt;Le++)ri&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.get(S).__webglTexture,X,Zt+Le),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,mt,we+Le)),k.blitFramebuffer(At,Ot,At+St,Ot+dt,wt,Jt,wt+St,Jt+dt,k.DEPTH_BUFFER_BIT,k.NEAREST);xt.bindFramebuffer(k.READ_FRAMEBUFFER,null),xt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Rt.has(S)){let Qt=Rt.get(S),Be=Rt.get(O);xt.bindFramebuffer(k.READ_FRAMEBUFFER,w),xt.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let _n=0;_n<Mt;_n++)ri?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,X,Zt+_n):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,X),Si?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,mt,we+_n):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,mt),X!==0?k.blitFramebuffer(At,Ot,At+St,Ot+dt,wt,Jt,wt+St,Jt+dt,k.COLOR_BUFFER_BIT,k.NEAREST):Si?k.copyTexSubImage3D(Tt,mt,wt,Jt,we+_n,At,Ot,St,dt):k.copyTexSubImage2D(Tt,mt,wt,Jt,At,Ot,St,dt);xt.bindFramebuffer(k.READ_FRAMEBUFFER,null),xt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Si?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Tt,mt,wt,Jt,we,St,dt,Mt,ce,We,ue.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(Tt,mt,wt,Jt,we,St,dt,Mt,ce,ue.data):k.texSubImage3D(Tt,mt,wt,Jt,we,St,dt,Mt,ce,We,ue):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,mt,wt,Jt,St,dt,ce,We,ue.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,mt,wt,Jt,ue.width,ue.height,ce,ue.data):k.texSubImage2D(k.TEXTURE_2D,mt,wt,Jt,St,dt,ce,We,ue);xt.pixelStorei(k.UNPACK_ROW_LENGTH,$e),xt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ee),xt.pixelStorei(k.UNPACK_SKIP_PIXELS,bi),xt.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),xt.pixelStorei(k.UNPACK_SKIP_IMAGES,Sr),mt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&k.generateMipmap(Tt),xt.unbindTexture()},this.initRenderTarget=function(S){Rt.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){B=0,z=0,K=null,xt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var xn=(i,t,e)=>i<t?t:i>e?e:i,Mg=(i,t,e)=>i+(t-i)*e,Je=(i,t,e,n)=>Mg(i,t,1-Math.exp(-e*n)),Fe=(i,t)=>i+Math.random()*(t-i),sc=Math.PI*2;function tn(i,t){let e=(t-i)%sc;return e>Math.PI&&(e-=sc),e<-Math.PI&&(e+=sc),e}function Mo(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Bt(i,t){let e=Math.min(255,(i>>16&255)*t)|0,n=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return e<<16|n<<8|s}var bo=i=>{let t=Math.floor(i);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},En=i=>"$"+Math.round(i).toLocaleString("en-US");var gs=Mo(99),ae=(i,t)=>i+gs()*(t-i),Bi=(i,t,e,n=1)=>`hsla(${i},${t}%,${e}%,${n})`;function Ve(i,t,e=!0,n=!0){let s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d");t(r,i);let a=new Hs(s);return n&&(a.colorSpace=Ke),a.wrapS=a.wrapT=e?ns:pn,a.anisotropy=4,a}function yi(i,t,e,n,s,r,a,o,l=2){for(let h=0;h<e;h++)i.fillStyle=Bi(n,s,ae(r,a),o),i.fillRect(gs()*t,gs()*t,l*ae(.5,1.5),l*ae(.5,1.5))}var Ae={};function xs(){return Ae.wood||(Ae.wood=Ve(256,(i,t)=>{let n=t/8;for(let s=0;s<8;s++){let r=-ae(0,120);for(;r<t;){let a=ae(90,190),o=ae(52,64),l=ae(26,33);i.fillStyle=Bi(l,55,o*.75),i.fillRect(r,s*n,a,n);for(let h=0;h<6;h++){i.strokeStyle=Bi(l,50,o*.62,.35),i.lineWidth=ae(.6,1.6),i.beginPath();let c=s*n+ae(3,n-3);i.moveTo(r,c),i.bezierCurveTo(r+a*.3,c+ae(-3,3),r+a*.7,c+ae(-3,3),r+a,c+ae(-2,2)),i.stroke()}gs()<.3&&(i.fillStyle=Bi(l,50,o*.55,.5),i.beginPath(),i.ellipse(r+ae(10,a-10),s*n+n/2,ae(3,6),ae(1.5,3),0,0,7),i.fill()),i.fillStyle="rgba(60,30,10,.55)",i.fillRect(r,s*n,2,n),r+=a}i.fillStyle="rgba(60,30,10,.6)",i.fillRect(0,s*n,t,2),i.fillStyle="rgba(255,240,210,.12)",i.fillRect(0,s*n+2,t,2)}}),Ae.woodfine=Ve(128,(i,t)=>{i.fillStyle="#e9dccb",i.fillRect(0,0,t,t);for(let e=0;e<40;e++){i.strokeStyle=`rgba(120,80,40,${ae(.06,.18)})`,i.lineWidth=ae(.5,2),i.beginPath();let n=ae(0,t);i.moveTo(0,n),i.bezierCurveTo(t*.3,n+ae(-4,4),t*.6,n+ae(-4,4),t,n),i.stroke()}}),Ae.carpet=Ve(128,(i,t)=>{i.fillStyle="#e4e4e4",i.fillRect(0,0,t,t),yi(i,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)i.fillStyle="rgba(0,0,0,.035)",i.fillRect(0,e,t,3)}),Ae.tile=Ve(128,(i,t)=>{i.fillStyle="#aab5bd",i.fillRect(0,0,t,t);let e=2,n=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++)i.fillStyle=Bi(200,10,ae(93,98)),i.fillRect(r*n+2,s*n+2,n-4,n-4),i.fillStyle="rgba(255,255,255,.6)",i.fillRect(r*n+3,s*n+3,n-8,3),i.fillStyle="rgba(0,0,0,.06)",i.fillRect(r*n+3,s*n+n-7,n-6,3)}),Ae.wallpaper=Ve(128,(i,t)=>{i.fillStyle="#ffffff",i.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)i.fillStyle="rgba(0,0,0,.045)",i.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let n=23;n<t;n+=32)i.fillStyle="rgba(0,0,0,.08)",i.beginPath(),i.moveTo(n,e),i.lineTo(n+4,e+6),i.lineTo(n,e+12),i.lineTo(n-4,e+6),i.fill();yi(i,t,500,0,0,60,100,.04,2)}),Ae.panel=Ve(128,(i,t)=>{i.fillStyle="#f0f0f0",i.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3,i.strokeRect(e+10,14,44,t-28),i.strokeStyle="rgba(255,255,255,.7)",i.lineWidth=2,i.strokeRect(e+13,17,44,t-28)}),Ae.brick=Ve(256,(i,t)=>{i.fillStyle="#d8c6b0",i.fillRect(0,0,t,t);let e=t/8,n=t/4;for(let s=0;s<8;s++)for(let r=-1;r<5;r++){let a=r*n+(s%2?n/2:0);i.fillStyle=Bi(ae(10,20),ae(35,50),ae(42,52)),i.fillRect(a+3,s*e+3,n-6,e-6),i.fillStyle="rgba(255,255,255,.08)",i.fillRect(a+3,s*e+3,n-6,4)}yi(i,t,900,10,30,20,60,.15,2)}),Ae.plaster=Ve(128,(i,t)=>{i.fillStyle="#f4f2ef",i.fillRect(0,0,t,t),yi(i,t,1500,30,10,75,100,.12,2)}),Ae.plain=Ve(64,(i,t)=>{i.fillStyle="#f2f2f2",i.fillRect(0,0,t,t),yi(i,t,500,0,0,82,100,.25,2)}),Ae.grass=Ve(128,(i,t)=>{i.fillStyle="#6dbb4a",i.fillRect(0,0,t,t);for(let e=0;e<1400;e++){i.strokeStyle=Bi(ae(85,110),ae(45,65),ae(32,55),.7),i.lineWidth=1,i.beginPath();let n=gs()*t,s=gs()*t;i.moveTo(n,s),i.lineTo(n+ae(-2,2),s-ae(3,7)),i.stroke()}}),Ae.asphalt=Ve(128,(i,t)=>{i.fillStyle="#4a4f5c",i.fillRect(0,0,t,t),yi(i,t,2200,220,8,22,60,.4,1.6)}),Ae.concrete=Ve(128,(i,t)=>{i.fillStyle="#cfd2d6",i.fillRect(0,0,t,t),yi(i,t,1400,210,6,60,95,.2,2),i.fillStyle="rgba(0,0,0,.18)",i.fillRect(0,0,t,2),i.fillRect(0,0,2,t)}),Ae.rug=Ve(256,(i,t)=>{i.fillStyle="#ffffff",i.fillRect(0,0,t,t),i.fillStyle="#9a9a9a",i.fillRect(10,10,t-20,t-20),i.fillStyle="#ffffff",i.fillRect(22,22,t-44,t-44),i.fillStyle="#c8c8c8",i.fillRect(30,30,t-60,t-60),i.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let n=46;n<t-46;n+=32)i.beginPath(),i.moveTo(n+16,e+2),i.lineTo(n+30,e+16),i.lineTo(n+16,e+30),i.lineTo(n+2,e+16),i.fill();i.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)i.fillRect(e,0,2,8),i.fillRect(e,t-8,2,8);yi(i,t,1500,0,0,50,100,.12,1.5)},!1),Ae.shadow=Ve(64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)},!1,!1),Ae.glow=Ve(64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)},!1,!1),Ae.beam=Ve(64,(i,t)=>{let e=i.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),i.fillStyle=e,i.fillRect(0,0,t,t)},!1,!1),Ae.patch=Ve(64,(i,t)=>{for(let e=0;e<12;e++){i.fillStyle=`rgba(255,255,255,${.06})`;let n=e*2.5;i.fillRect(n,n,t-2*n,t-2*n)}},!1,!1)),Ae}function wu(){let i=new $s(90,16,10),t=i.attributes.position,e=new Float32Array(t.count*3),n=new Pt,s=new Pt(7311320),r=new Pt(16038282),a=new Pt(16767400);for(let l=0;l<t.count;l++){let h=t.getY(l)/90;h>.15?n.copy(r).lerp(s,Math.min(1,(h-.15)/.6)):n.copy(a).lerp(r,Math.max(0,(h+.1)/.25)),e[l*3]=n.r,e[l*3+1]=n.g,e[l*3+2]=n.b}i.setAttribute("color",new le(e,3));let o=new kt(i,new ne({vertexColors:!0,side:Ge,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-10,o.frustumCulled=!1,o}var So=class{constructor(t,e=220){this.n=e,this.box=7;let n=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=(Math.random()-.5)*this.box,n[s*3+1]=Math.random()*1.9,n[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new ge,this.geo.setAttribute("position",new le(n,3)),this.points=new Pi(this.geo,new di({map:xs().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:Sn})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,n){this.t+=t;let s=this.geo.attributes.position.array,r=this.vel,a=this.box/2;for(let o=0;o<this.n;o++){let l=o*3;s[l]+=(r[l]+Math.sin(this.t*.5+o)*.02)*t,s[l+1]+=(r[l+1]+Math.cos(this.t*.4+o*1.3)*.015)*t,s[l+2]+=r[l+2]*t,s[l]<e-a?s[l]+=this.box:s[l]>e+a&&(s[l]-=this.box),s[l+2]<n-a?s[l+2]+=this.box:s[l+2]>n+a&&(s[l+2]-=this.box),s[l+1]<.05?s[l+1]=1.85:s[l+1]>1.88&&(s[l+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var rc={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},ac={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe"},bg=new Set(["h","f","x"]),Tu={$:"cash",G:"gold",J:"jewel",A:"art"};function Au(i){let t=i.map,e=t.length,n=Math.max(...t.map(d=>d.length)),s=n*e,r=new Array(s);for(let d=0;d<e;d++)for(let _=0;_<n;_++)r[d*n+_]=t[d][_]||"g";let a=new Uint8Array(s),o=new Uint8Array(s),l=new Uint8Array(s),h=new Array(s),c=[],f=[],u={x:1,y:1},m=null,g=null;for(let d=0;d<e;d++)for(let _=0;_<n;_++){let M=d*n+_,y=r[M];if(y==="#"){o[M]=1;continue}ac[y]?(o[M]=bg.has(y)?1:0,a[M]=0):y==="S"?(m={x:_,y:d},a[M]=0):a[M]=1,Tu[y]&&c.push({type:Tu[y],x:_,y:d}),y==="P"&&(u={x:_,y:d}),y==="V"&&(g={x:_,y:d})}for(let d=0;d<s;d++){let _=r[d];if(_==="#")continue;if(rc[_]){h[d]=rc[_];continue}let M=d%n,y=d/n|0,C="wood";t:for(let E=1;E<6;E++)for(let x=-E;x<=E;x++)for(let T=-E;T<=E;T++){if(Math.max(Math.abs(T),Math.abs(x))!==E)continue;let U=M+T,P=y+x;if(U<0||P<0||U>=n||P>=e)continue;let I=rc[r[P*n+U]];if(I){C=I;break t}}h[d]=C}for(let d=0;d<s;d++)l[d]=h[d]==="grass"||h[d]==="road"?1:0;let v={x:u.x+.5,z:u.y+.5};if(g){for(let d=g.y;d<=g.y+1;d++)for(let _=g.x-1;_<=g.x+1;_++)_>=0&&d>=0&&_<n&&d<e&&(a[d*n+_]=0);v={x:g.x+.5,z:g.y-.5}}let p=new Uint8Array(s);for(let d=0;d<s;d++){let _=r[d];if(!ac[_]||p[d])continue;let M=d%n,y=d/n|0,C=M,E=y,x=[d];for(p[d]=1;x.length;){let T=x.pop(),U=T%n,P=T/n|0;M=Math.min(M,U),C=Math.max(C,U),y=Math.min(y,P),E=Math.max(E,P);for(let[I,F]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=U+I,w=P+F;if(A<0||w<0||A>=n||w>=e)continue;let N=w*n+A;!p[N]&&r[N]===_&&(p[N]=1,x.push(N))}}f.push({c:_,type:ac[_],x0:M,y0:y,w:C-M+1,d:E-y+1})}return{W:n,H:e,ch:r,walk:a,opaque:o,outdoor:l,floor:h,loot:c,furn:f,start:u,safe:m,van:g,exit:v,def:i}}var Sg=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],nn=1,Cn=2,be=4,zn=8,zt=16,Oe=32;var wg=55,vi=new Pt,te=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,n,s,r,a,o,l={}){let h=l.faces??wg,c=s/2,f=r/2,u=a/2,m=e+f,g=l.ry||0,v=Math.cos(g),p=Math.sin(g);for(let d=0;d<6;d++){if(!(h&1<<d))continue;let _=l.fc&&l.fc[d]!=null?l.fc[d]:d===2&&l.top!=null?l.top:o;vi.setHex(_);let[M,y]=Sg[d],C=this.p.length/3,E=M[0]*v+M[2]*p,x=-M[0]*p+M[2]*v,T=l.us||this.us,U=Math.abs(E),P=Math.abs(x),I=0;for(let F of y){let A=F[0]*c,w=F[2]*u,N=t+A*v+w*p,B=m+F[1]*f,z=n-A*p+w*v;this.p.push(N,B,z),this.n.push(E,M[1],x),this.c.push(vi.r,vi.g,vi.b),l.fit?(this.u.push(I===1||I===2?1:0,I>=2?1:0),I++):d===2||d===3?this.u.push(N/T,-z/T):U>P?this.u.push((E>0?-z:z)/T,B/T):this.u.push((x>0?N:-N)/T,B/T)}this.i.push(C,C+1,C+2,C,C+2,C+3)}return this}add(t,e,n=0,s=0,r=0){let a=t.index?t.toNonIndexed():t,o=a.attributes.position.array,l=a.attributes.normal.array;vi.setHex(e);let h=this.p.length/3;for(let c=0;c<o.length;c+=3)this.p.push(o[c]+n,o[c+1]+s,o[c+2]+r),this.n.push(l[c],l[c+1],l[c+2]),this.c.push(vi.r,vi.g,vi.b),this.u.push(o[c]/this.us,o[c+1]/this.us);for(let c=0;c<o.length/3;c++)this.i.push(h+c);return this}get empty(){return this.p.length===0}build(){let t=new ge;t.setAttribute("position",new le(new Float32Array(this.p),3)),t.setAttribute("normal",new le(new Float32Array(this.n),3)),t.setAttribute("color",new le(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new le(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new le(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var kn=1.9,Tg=7227954,oc=16183526,Ag=15985888,lc=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],cc=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],_s=[5020230,6074452,4164168,7126874],Eu=()=>new on({vertexColors:!0,emissive:2760720});function Eg(i,t,e,n){let{W:s,H:r,ch:a}=i,o=(_,M)=>_<0||M<0||_>=s||M>=r||a[M*s+_]==="#",l=n;if(!l){let _=0;l=[0,-1];let M=[[0,-1],[0,1],[-1,0],[1,0]];for(let y of M){let C=0;if(y[1]){let E=y[1]<0?t.y0-1:t.y0+t.d;for(let x=t.x0;x<t.x0+t.w;x++)C+=o(x,E);C/=t.w}else{let E=y[0]<0?t.x0-1:t.x0+t.w;for(let x=t.y0;x<t.y0+t.d;x++)C+=o(E,x);C/=t.d}C>_+.01&&(_=C,l=y)}}let h=Math.atan2(-l[0],-l[1]),c=l[0]?t.d:t.w,f=l[0]?t.w:t.d,u=t.x0+t.w/2,m=t.y0+t.d/2,g=Math.cos(h),v=Math.sin(h),p=(_,M)=>[u+_*g+M*v,m-_*v+M*g];return{b:(_,M,y,C,E,x,T,U,P={})=>{let[I,F]=p(M,C);_.box(I,y,F,E,x,T,U,{...P,ry:(P.ry||0)+h})},W:c,D:f,rot:h,wpos:p}}function Cg(i,t,e,n,s){let r=(v,p)=>v+n()*(p-v),a=e.plain,o=e.woodfine,l=e.unlit,h;if(t.type==="couch"){let v=i.furn.find(p=>p.type==="tv");h=v&&v.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let v=i.furn.find(p=>p.type==="table");if(v){let p=v.x0+v.w/2-(t.x0+.5),d=v.y0+v.d/2-(t.y0+.5);h=Math.abs(p)>Math.abs(d)?[-Math.sign(p),0]:[0,-Math.sign(d)]}}else(t.type==="desk"||t.type==="table")&&(h=[0,-1]);let{b:c,W:f,D:u,wpos:m}=Eg(i,t,e,h),g=(v,p,d,_,M,y)=>{let[C,E]=m(v,d);s.push({x:C,y:p,z:E,col:_,I:M,R:y})};switch(c(e.shadow,0,.012,0,f+.35,.001,u+.35,16777215,{faces:be,fit:!0}),t.type){case"shelf":{for(let d of[-1,1])c(o,d*(f/2-.04),0,0,.07,1.6,u-.12,8015411);c(o,0,1.6-.06,0,f-.02,.07,u-.08,8015411),c(o,0,0,-u/2+.09,f-.1,1.6,.03,Bt(8015411,.7));for(let d=0;d<4;d++){let _=.06+d*.38;if(c(o,0,_,0,f-.1,.035,u-.18,8015411),d===3&&n()<.5){c(a,r(-.2,.2),_+.035,0,.12,.2,.12,4165530),c(a,0,_+.235,0,.18,.18,.18,_s[1],{ry:.6});continue}let M=-f/2+.1;for(;M<f/2-.12;){let y=r(.04,.09),C=r(.2,.31),E=cc[n()*cc.length|0];if(n()<.08){M+=.12;continue}let x=n()<.1?.25:0;c(a,M+y/2,_+.035,.02,y,C,u-.32,E,{top:Bt(E,1.25)}),C>.25&&c(a,M+y/2,_+.035+C*.7,.02,y+.004,.025,u-.31,15914122,{faces:zt|Oe}),M+=y+.006+x*.1}}break}case"fridge":{c(a,0,.04,0,f-.12,1.55,u-.14,15265522,{top:14278886}),c(a,0,0,.02,f-.16,.05,u-.2,3816006),c(a,0,1,u/2-.068,f-.12,.015,.01,11450560,{faces:zt}),c(a,.3,.55,u/2-.04,.04,.35,.05,12108492),c(a,.3,1.1,u/2-.04,.04,.3,.05,12108492);for(let p=0;p<4;p++)c(a,r(-.3,.15),r(.6,1.45),u/2-.066,.06,.06,.01,cc[p],{faces:zt});c(a,-.1,1.15,u/2-.066,.18,.22,.008,16777215,{faces:zt,ry:.08});break}case"bed":{c(o,0,.08,0,f-.06,.22,u-.06,10118724);for(let[d,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,d*(f/2-.09),0,_*(u/2-.09),.1,.1,.1,Bt(10118724,.7));c(o,0,0,-u/2+.06,f,1.05,.1,10118724),c(o,0,1.05,-u/2+.06,f+.06,.07,.14,Bt(10118724,.85)),c(o,0,.45,-u/2+.115,f-.3,.45,.01,Bt(10118724,1.15),{faces:zt}),c(a,0,.3,.04,f-.14,.18,u-.22,16250094),c(a,0,.33,.42,f-.08,.2,u-.95,6066121,{top:Bt(6066121,1.12)}),c(a,0,.36,-u/2+1.08,f-.07,.19,.22,15789284);for(let d of[-1,1])c(a,d*.45,.47,-u/2+.42,.78,.15,.4,16777215,{ry:d*.04});c(a,0,.535,u/2-.42,f-.04,.03,.42,15246141),c(a,0,.3,u/2-.205,f-.04,.26,.02,15246141,{faces:zt});break}case"desk":{c(o,0,.7,-.45,f-.1,.06,.8,11565642,{top:Bt(11565642,1.1)}),c(o,-f/2+.35,0,-.45,.5,.7,.72,Bt(11565642,.9));for(let p=0;p<3;p++)c(a,-f/2+.35,.08+p*.21,-.08,.42,.16,.01,Bt(11565642,.75),{faces:zt}),c(a,-f/2+.35,.15+p*.21,-.07,.12,.025,.02,14267482);c(o,f/2-.08,0,-.45,.06,.7,.72,Bt(11565642,.9)),c(a,.15,.76,-.7,.18,.04,.14,2763574),c(a,.15,.8,-.7,.05,.16,.05,2763574),c(a,.15,.92,-.7,.72,.44,.05,2237229),c(l,.15,.95,-.672,.64,.37,.01,6272255,{faces:zt}),c(l,0,1.05,-.665,.25,.14,.008,12576511,{faces:zt}),c(l,.32,1,-.665,.18,.08,.008,16765806,{faces:zt}),c(a,.15,.76,-.38,.55,.025,.18,3421503),c(a,.55,.76,-.38,.07,.03,.1,3421503),c(a,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),c(a,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),c(a,.78,.76,-.5,.08,.1,.08,14185306),c(a,-.7,.76,-.7,.14,.03,.14,2763574),c(a,-.7,.79,-.7,.025,.32,.025,2763574),c(l,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),g(-.6,1,-.55,[1,.72,.42],.75,2.6),c(a,0,0,.35,.5,.05,.05,2763574),c(a,0,0,.35,.05,.05,.5,2763574),c(a,0,.05,.35,.05,.35,.05,5592671),c(a,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),c(a,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{c(a,0,0,.04,f-.02,.08,u-.2,3816006),c(a,0,.08,0,f-.02,.72,u-.12,15854818);let d=Math.max(1,Math.round(f/.5));for(let _=0;_<d;_++){let M=-f/2+(_+.5)*(f/d);c(a,M,.14,u/2-.055,f/d-.06,.6,.012,Bt(15854818,.93),{faces:zt}),c(a,M+(_%2?-1:1)*(f/d/2-.08),.62,u/2-.04,.025,.12,.025,11901530)}c(a,0,.8,.02,f,.06,u-.06,3881544,{top:4868440}),c(e.tile,0,.86,-u/2+.02,f,.48,.01,16777215,{faces:zt,us:.5}),c(a,0,1.36,-u/2+.2,f-.02,.48,.36,15854818);for(let _=0;_<d;_++){let M=-f/2+(_+.5)*(f/d);c(a,M,1.4,-u/2+.385,f/d-.06,.4,.012,Bt(15854818,.93),{faces:zt}),c(a,M,1.43,-u/2+.4,.12,.025,.025,11901530)}f>=2?(c(a,.45,.855,.05,.6,.012,.42,9345186,{faces:be}),c(a,.45,.86,-.22,.04,.22,.04,12831958),c(a,.45,1.05,-.12,.04,.04,.2,12831958),c(o,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),c(a,-.35,.89,.05,.12,.06,.06,14185306)):(c(a,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),c(a,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{c(a,0,0,.04,f-.02,.08,u-.2,3816006),c(a,0,.08,0,f-.04,.74,u-.12,14081250),c(a,0,.18,u/2-.055,f-.2,.42,.012,2829364,{faces:zt}),c(l,0,.26,u/2-.05,f-.36,.22,.01,6961698,{faces:zt}),c(a,0,.56,u/2-.04,f-.3,.03,.03,12108492);for(let p=0;p<4;p++)c(a,-.3+p*.2,.7,u/2-.05,.05,.05,.03,2829364);c(a,0,.82,.02,f-.02,.04,u-.06,2302763);for(let[p,d]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(a,p*.2,.86,d*.17,.2,.012,.2,4868693);c(a,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),c(a,0,1.42,-u/2+.24,f-.1,.18,.44,12831958),c(a,0,1.6,-u/2+.12,.3,.3,.22,12831958),c(e.tile,0,.86,-u/2+.02,f,.56,.01,16777215,{faces:zt,us:.5});break}case"couch":{for(let y of[-1,1])for(let C of[-1,1])c(o,y*(f/2-.2),0,C*(u/2-.15),.07,.1,.07,5913126);c(a,0,.1,0,f-.08,.26,u-.12,Bt(3115662,.85)),c(a,0,.1,-u/2+.17,f-.08,.66,.22,3115662);for(let y of[-1,1])c(a,y*(f/2-.13),.1,.02,.22,.44,u-.1,3115662),c(a,y*(f/2-.13),.54,.02,.26,.06,u-.06,3842212);let _=3,M=(f-.6)/_;for(let y=0;y<_;y++){let C=-f/2+.3+(y+.5)*M;c(a,C,.36,.08,M-.04,.13,u-.4,3842212,{top:Bt(3842212,1.1)}),c(a,C,.42,-u/2+.34,M-.06,.38,.14,3842212,{ry:0})}c(a,-f/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),c(a,f/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),c(a,f/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),c(a,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let p of[-1,1])c(o,p*(f/2-.15),0,0,.06,.12,.06,2763574);c(o,0,.12,-.05,f-.1,.38,u-.45,7226670,{top:Bt(7226670,1.15)});for(let p=0;p<3;p++)c(o,-f/2+.05+(p+.5)*((f-.1)/3),.16,u/2-.27,(f-.1)/3-.05,.3,.012,Bt(7226670,1.2),{faces:zt});c(a,0,.62,-.2,f-.4,.92,.07,1447710),c(l,0,.67,-.163,f-.52,.8,.005,2903966,{faces:zt}),c(l,-.3,.75,-.159,.9,.35,.004,6269160,{faces:zt}),c(l,.5,.85,-.158,.4,.22,.004,16762967,{faces:zt}),c(l,.25,.73,-.158,.3,.12,.004,8049530,{faces:zt}),c(a,0,.5,-.02,f-1,.07,.1,2237227),c(a,f/2-.35,.5,-.05,.16,.22,.16,13133631);for(let p=0;p<4;p++)c(a,f/2-.35+r(-.05,.05),.68+p*.05,-.05,.22,.05,.08,_s[p%4],{ry:p*.8});c(a,-f/2+.4,.5,-.05,.3,.06,.2,2763574),g(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{c(o,0,.66,0,f-.2,.07,u-.2,13867874,{top:Bt(13867874,1.08)});for(let[p,d]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,p*(f/2-.25),0,d*(u/2-.25),.08,.66,.08,Bt(13867874,.8));c(a,0,.73,0,.5,.006,u-.25,12999242),c(a,0,.736,0,.36,.06,.36,16777215,{top:15262422}),c(a,-.06,.79,.02,.12,.12,.12,15230287),c(a,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),c(a,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[p,d]of[[-.45,-.45],[.45,.45]])c(a,p,.735,d,.28,.012,.28,16777215),c(a,p+.2,.735,d,.03,.01,.2,12831958);break}case"chair":{for(let[p,d]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(o,p*.17,0,d*.17,.05,.42,.05,Bt(12157268,.8));c(o,0,.42,0,.44,.05,.44,12157268),c(a,0,.47,0,.38,.03,.38,12999242),c(o,0,.47,-.19,.42,.52,.05,12157268),c(o,0,.82,-.19,.3,.1,.06,Bt(12157268,1.1));break}case"tub":{c(a,0,0,0,f-.12,.58,u-.12,16054007,{top:16777215}),c(a,0,.5,0,f-.34,.06,u-.34,9425898,{faces:be}),c(a,0,.58,-u/2+.15,.05,.2,.05,12831958),c(a,0,.74,-u/2+.22,.05,.04,.18,12831958),c(a,.3,.56,.2,.12,.1,.14,16765503),c(a,.3,.64,.24,.08,.08,.08,16765503),c(a,.3,.66,.3,.04,.03,.05,16747069),c(a,0,1.75,u/2-.08,f-.1,.025,.025,12831958),c(a,-f/2+.35,.6,u/2-.08,.6,1.15,.03,9423064);for(let v=0;v<3;v++)c(a,-f/2+.15+v*.2,.6,u/2-.06,.04,1.15,.035,16183526);break}case"wardrobe":{let p=Bt(9067068,1.18),d=Bt(9067068,.7);c(o,0,0,-.06,.92,1.72,.74,9067068,{top:d}),c(o,0,1.72,-.06,.98,.06,.8,d),c(o,0,0,-.06,.96,.08,.78,d);for(let _ of[-1,1]){c(o,_*.225,.12,.315,.42,1.54,.02,p,{faces:zt|nn|Cn|be});for(let M=0;M<9;M++)c(a,_*.225,.78+M*.09,.327,.34,.025,.01,d,{faces:zt|be});c(o,_*.225,.2,.327,.34,.5,.008,Bt(p,1.08),{faces:zt}),c(a,_*.04,.8,.34,.03,.12,.03,14267482)}c(a,0,.12,.33,.012,1.54,.02,d,{faces:zt});break}case"plant":{c(a,0,0,0,.36,.34,.36,13133631,{top:4863014}),c(a,0,.3,0,.42,.06,.42,14186319),c(o,0,.36,0,.05,.5,.05,6965802);for(let v=0;v<9;v++){let p=v*2.4,d=r(.08,.26),_=r(.45,1.2);c(a,Math.cos(p)*d,_,Math.sin(p)*d,r(.18,.3),.04,r(.1,.16),_s[v%4],{ry:p})}break}case"night":{c(o,0,0,0,f-.38,.5,u-.4,10118724,{top:Bt(10118724,1.12)}),c(o,0,.28,u/2-.195,f-.48,.16,.01,Bt(10118724,1.2),{faces:zt}),c(a,0,.35,u/2-.18,.06,.03,.02,14267482),c(a,0,.5,-.05,.12,.03,.12,3816006),c(a,0,.53,-.05,.05,.2,.05,14267482),c(l,0,.72,-.05,.26,.18,.26,16767392),c(a,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),g(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{c(a,0,0,.05,.36,.38,.46,16185336),c(a,0,.38,.07,.4,.04,.5,16777215),c(a,0,.3,-u/2+.2,.44,.45,.2,16185336,{top:16777215}),c(a,.15,.7,-u/2+.25,.06,.02,.03,12831958);break}case"sink":{c(a,0,0,0,f-.2,.8,u-.42,6989198),c(a,0,.12,u/2-.205,f-.3,.6,.01,Bt(6989198,1.15),{faces:zt}),c(a,0,.8,0,f-.14,.05,u-.36,16777215),c(a,0,.84,.02,.4,.015,.28,13227742,{faces:be}),c(a,0,.85,-u/2+.26,.04,.16,.04,12831958),c(a,0,1,-u/2+.03,.62,.72,.03,14267482),c(l,0,1.04,-u/2+.05,.54,.64,.005,12179172,{faces:zt}),c(l,-.12,1.3,-u/2+.054,.12,.3,.004,15135994,{faces:zt,ry:0});break}}}function Rg(i,t){let{W:e,H:n}=i,s=(u,m)=>u<0||m<0||u>=e||m>=n?-1:Math.floor(m)*e+Math.floor(u),r=(u,m)=>{let g=s(u,m);return g<0||i.opaque[g]===1},a=(u,m,g,v)=>{let p=g-u,d=v-m,_=Math.ceil(Math.hypot(p,d)/.15);for(let M=1;M<_;M++){let y=M/_;if(r(u+p*y,m+d*y))return!1}return!0},o=[-.55,.7,.45],l=Math.hypot(...o);o[0]/=l,o[1]/=l,o[2]/=l;let h=[0,0,0],c=(u,m)=>{let g=s(u,m);return g<0?0:i.ch[g]==="#"?1:!i.walk[g]&&!i.outdoor[g]?.55:0};function f(u,m,g,v,p,d,_){let M=u+v*.14,y=g+d*.14,C=s(M,y),E=C>=0&&!i.outdoor[C]&&i.ch[C]!=="#",x,T,U;if(E){let I=.85+.15*p;x=.2*I,T=.19*I,U=.27*I;for(let F of t){let A=F.x-u,w=F.y-m,N=F.z-g,B=Math.hypot(A,w,N);if(B>F.R||!a(F.x,F.z,M,y))continue;let z=1-B/F.R,K=F.I*z*z,V=_?.7:Math.max(0,(v*A+p*w+d*N)/(B||1))*.75+.25;x+=F.col[0]*K*V,T+=F.col[1]*K*V,U+=F.col[2]*K*V}}else{let I=Math.max(0,v*o[0]+p*o[1]+d*o[2]),F=.55+.45*p;x=.5*F+.95*I,T=.5*F+.8*I,U=.62*F+.62*I}let P=1;if(m<.06||E&&m>kn-.08){let I=0;for(let[F,A]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])I+=c(M+F,y+A);P=1-.17*I-(m<.06?.06:.1)}else m<.3&&E&&(P=.9+m*.3);return h[0]=x*P,h[1]=T*P,h[2]=U*P,h}return f}function Pg(i,t){let e=i.p,n=i.n,s=i.c;for(let r=0;r<e.length;r+=3){let a=t(e[r],e[r+1],e[r+2],n[r],n[r+1],n[r+2],!1);s[r]*=a[0],s[r+1]*=a[1],s[r+2]*=a[2]}}function Cu(i){let t=xs(),e={wood:new te(2),carpet:new te(1),tile:new te(1),wallpaper:new te(1),panel:new te(1),brick:new te(.9),plaster:new te(2),grass:new te(3),asphalt:new te(3),concrete:new te(1),plain:new te(1),woodfine:new te(.8),rug:new te(1),unlit:new te(1),shadow:new te(1),patch:new te(1)},{W:n,H:s,ch:r,floor:a}=i,o=Mo(1337),l=(A,w)=>A+o()*(w-A),h=(A,w)=>A>=0&&w>=0&&A<n&&w<s&&r[w*n+A]==="#",c=(A,w)=>A<0||w<0||A>=n||w>=s||i.outdoor[w*n+A]===1,f=i.van?i.van.y-1:s,u=[],m=[],g=[],v=new Int16Array(n*s).fill(-1),p=(A,w)=>!h(A,w)&&(h(A-1,w)&&h(A+1,w)||h(A,w-1)&&h(A,w+1)),d=[];for(let A=0;A<n*s;A++){let w=A%n,N=A/n|0;if(v[A]>=0||r[A]==="#"||i.outdoor[A]||p(w,N))continue;let B=d.length,z=[],K=[A];for(v[A]=B;K.length;){let V=K.pop(),Y=V%n,$=V/n|0;z.push(V);for(let[lt,J]of[[1,0],[-1,0],[0,1],[0,-1]]){let D=Y+lt,nt=$+J,at=nt*n+D;D<0||nt<0||D>=n||nt>=s||v[at]>=0||r[at]==="#"||i.outdoor[at]||p(D,nt)||(v[at]=B,K.push(at))}}d.push({id:B,cells:z,pal:lc[B%lc.length]})}for(let A=0;A<n*s;A++)if(v[A]<0&&p(A%n,A/n|0)){let w=A%n,N=A/n|0;for(let[B,z]of[[0,1],[1,0],[0,-1],[-1,0]]){let K=(N+z)*n+w+B;if(v[K]>=0){v[A]=v[K];break}}}let _=(A,w)=>{let N=A>=0&&w>=0&&A<n&&w<s?v[w*n+A]:-1;return N>=0?d[N].pal:lc[0]};for(let A of d){let w=1e9,N=-1,B=1e9,z=-1;for(let lt of A.cells){let J=lt%n,D=lt/n|0;w=Math.min(w,J),N=Math.max(N,J),B=Math.min(B,D),z=Math.max(z,D)}let K=N-w+1,V=z-B+1,Y=Math.max(K,V),$=Math.max(1,Math.round(Y/6));for(let lt=0;lt<$;lt++){let J=(lt+.5)/$,D=K>=V?w+K*J:w+K/2,nt=K>=V?B+V/2:B+V*J;u.push({x:D,y:kn-.4,z:nt,col:[1,.74,.45],I:1.75,R:5.6,pendant:!0})}}let M=40,y=(A,w,N,B,z,K)=>A.box((w+B)/2,-.06,(N+z)/2,B-w,.05,z-N,K,{faces:be});y(e.grass,-M,-M,0,f,16777215),y(e.grass,n,-M,n+M,f,16777215),y(e.grass,0,-M,n,0,16777215),y(e.concrete,-M,f,0,f+1,16777215),y(e.concrete,n,f,n+M,f+1,16777215),y(e.asphalt,-M,f+1,0,s,16777215),y(e.asphalt,n,f+1,n+M,s,16777215),y(e.concrete,-M,s,n+M,s+1.2,16777215),y(e.grass,-M,s+1.2,n+M,s+M,16777215);for(let A=-M;A<n+M;A+=2.2)e.plain.box(A+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:be});let C=(A,w)=>{let N=.8+o()*.6,B=o()*1.5;e.woodfine.box(A,0,w,.28*N,.9*N,.28*N,8016438,{ry:B}),e.plain.box(A,.7*N,w,1.4*N,1*N,1.4*N,_s[o()*4|0],{ry:B}),e.plain.box(A+.2*N,1.5*N,w-.1*N,1*N,.8*N,1*N,_s[o()*4|0],{ry:B+.5}),e.plain.box(A-.1*N,2.15*N,w+.1*N,.6*N,.5*N,.6*N,_s[o()*4|0],{ry:B+.9})};for(let A=-M+2;A<f-.5;A+=2.6)for(let w=-M+2;w<n+M-2;w+=2.6)w>-1.5&&w<n+1&&A>-1.5||o()<.55&&C(w+(o()-.5)*1.4,A+(o()-.5)*1.4);let E=[15246478,10274761,15652762,12167636,11064480];for(let A=-M+3,w=0;A<n+M;A+=7,w++){let N=s+4.5+w%2*.8,B=E[w%5];e.plain.box(A,0,N,5,2.4,4,B),e.plain.box(A,2.4,N,5.5,.3,4.5,5914712),e.plain.box(A,2.7,N,4.2,.4,3.4,6965862);for(let z of[-1.5,1.5])e.unlit.box(A+z,.95,N-2.01,.8,.75,.02,16765834,{faces:Oe}),e.plain.box(A+z,.9,N-2.03,.95,.06,.06,16777215);e.woodfine.box(A,0,N-2.01,.75,1.35,.03,8014643,{faces:Oe}),o()<.8&&C(A+3.3,N-1.5)}let x=(A,w,N,B)=>{let z=Math.hypot(N-A,B-w),K=Math.round(z/.45),V=w===B;e.plain.box((A+N)/2,.28,(w+B)/2,V?z:.05,.07,V?.05:z,16183526),e.plain.box((A+N)/2,.58,(w+B)/2,V?z:.05,.07,V?.05:z,16183526);for(let Y=0;Y<=K;Y++){let $=Y/K;e.plain.box(A+(N-A)*$,0,w+(B-w)*$,.1,.8,.1,16777215)}};x(-.05,-.05,n+.05,-.05),x(-.05,-.05,-.05,f-.05),x(n+.05,-.05,n+.05,f-.05);for(let A of[-.25,n+.25])for(let w=f;w<s;w+=.5)e.plain.box(A,0,w+.25,.3,.7,.5,(w*2|0)%2?15222847:16777215);let T=(A,w,N,B,z,K,V,Y,$=2,lt={})=>{let J=B>0?nn:B<0?Cn:z>0?zt:Oe,D=w+.5+B*.5+B*(lt.off||0),nt=N+.5+z*.5+z*(lt.off||0);for(let at=0;at<$;at++){let gt=(at+.5)/$-.5;A.box(D+(z?gt:0),K,nt+(B?gt:0),B?0:1/$,V,z?0:1/$,Y,{faces:J})}};for(let A=0;A<s;A++)for(let w=0;w<n;w++){let N=A*n+w;if(r[N]==="#"){e.plain.box(w+.5,kn,A+.5,1,0,1,3813194,{faces:be});for(let[J,D]of[[1,0],[-1,0],[0,1],[0,-1]]){if(h(w+J,A+D))continue;let nt=c(w+J,A+D),at=(w+A)%3===0&&(nt||c(w-J,A-D)&&!h(w-J,A-D)),gt=w+.5+J*.5,it=A+.5+D*.5,Lt=vt=>[J?.03:vt,D?.03:vt],Yt=J>0?nn:J<0?Cn:D>0?zt:Oe;if(nt)T(e.brick,w,A,J,D,0,kn,16777215,2),e.plain.box(gt+J*.02,0,it+D*.02,...[J?.04:1,.2,D?.04:1].slice(0,1),.2,D?.04:1,9075306,{faces:Yt|be});else{let vt=_(w+J,A+D);T(e.panel,w,A,J,D,0,.72,vt.panel,2),T(e.wallpaper,w,A,J,D,.72,.6,vt.wall,2),T(e.wallpaper,w,A,J,D,1.32,kn-1.32,vt.wall,2);let[Ut,Kt]=Lt(1);e.woodfine.box(gt+J*.015,0,it+D*.015,Ut,.13,Kt,Tg,{faces:Yt|be}),e.plain.box(gt+J*.02,.7,it+D*.02,J?.04:1,.05,D?.04:1,Ag,{faces:Yt|be|zn}),e.plain.box(gt+J*.02,kn-.1,it+D*.02,J?.04:1,.1,D?.04:1,oc,{faces:Yt|zn})}if(at){let vt=nt?16183526:16777215;e.unlit.box(gt+J*.006,.82,it+D*.006,J?.01:.62,.62,D?.01:.62,nt?7315138:16769712,{faces:Yt}),e.unlit.box(gt+J*.008,1.14,it+D*.008,J?.01:.62,.3,D?.01:.62,nt?9418966:16773584,{faces:Yt}),e.plain.box(gt+J*.02,.76,it+D*.02,J?.06:.78,.06,D?.06:.78,vt,{faces:63&~zn}),e.plain.box(gt+J*.02,1.44,it+D*.02,J?.05:.74,.05,D?.05:.74,vt);for(let Ut of[-1,1])e.plain.box(gt+J*.02+(D?Ut*.345:0),.8,it+D*.02+(J?Ut*.345:0),.05,.66,.05,vt);if(e.plain.box(gt+J*.02,1.11,it+D*.02,J?.04:.62,.035,D?.04:.62,vt),e.plain.box(gt+J*.02,.8,it+D*.02,J?.04:.035,.64,D?.04:.035,vt),!nt){let Ut=_(w+J,A+D);for(let Se of[-1,1]){let ve=D?Se*.48:0,He=J?Se*.48:0;e.plain.box(gt+J*.06+ve,.55,it+D*.06+He,J?.06:.2,1.2,D?.06:.2,Ut.curtain,{top:Bt(Ut.curtain,.8)})}e.plain.box(gt+J*.07,1.68,it+D*.07,J?.03:1.2,.03,D?.03:1.2,11901530);let Kt=gt+J*.9,qt=it+D*.9;e.patch.box(Kt+(D?.25:0),.015,qt+(J?.25:0),J?1:.8,0,D?1:.8,16767392,{faces:be,fit:!0}),u.push({x:gt+J*.6,y:1.1,z:it+D*.6,col:[1,.8,.55],I:.95,R:3.6}),g.push([gt+J*.03,it+D*.03,J,D])}}else if(!nt&&(w*5+A*3)%7===0){let vt=[15230287,4165530,15905076,6971304,5216858][(w+A*2)%5];e.woodfine.box(gt+J*.025,.95,it+D*.025,J?.05:.56,.46,D?.05:.56,5913126,{faces:63}),e.plain.box(gt+J*.035,1,it+D*.035,J?.05:.46,.36,D?.05:.46,16183526,{faces:Yt}),e.plain.box(gt+J*.04,1.03,it+D*.04,J?.05:.38,.3,D?.05:.38,vt,{faces:Yt}),e.plain.box(gt+J*.045,1.06,it+D*.045,J?.05:.16,.14,D?.05:.16,Bt(vt,.65),{faces:Yt}),e.plain.box(gt+J*.045+(D?.1:0),1.16,it+D*.045+(J?.1:0),J?.05:.08,.08,D?.05:.08,16773568,{faces:Yt})}}continue}let z=a[N],K=z==="wood"?e.wood:z==="carpet"?e.carpet:z==="tile"?e.tile:z==="grass"?e.grass:A===f?e.concrete:e.asphalt,V=z==="carpet"?9346022:16777215,Y=z==="grass"||z==="road"?1:2;for(let J=0;J<Y;J++)for(let D=0;D<Y;D++)K.box(w+(D+.5)/Y,-.05,A+(J+.5)/Y,1/Y,.05,1/Y,V,{faces:be});if(z==="road"&&A===f+1&&w%2===0&&e.plain.box(w+1,-.01,A+1,1.1,.02,.12,15911244,{faces:be}),z!=="grass"&&z!=="road")for(let J=0;J<2;J++)for(let D=0;D<2;D++)e.plaster.box(w+.25+D*.5,kn,A+.25+J*.5,.5,0,.5,16183268,{faces:zn});let $=h(w-1,A)&&h(w+1,A),lt=h(w,A-1)&&h(w,A+1);if($||lt){let J=_(w,A);e.plain.box(w+.5,1.55,A+.5,1,kn-1.55,1,J.wall,{faces:$?zn|zt|Oe:zn|nn|Cn}),e.plain.box(w+.5,1.55,A+.5,$?1.04:1.12,.07,$?1.12:1.04,oc,{faces:63&~be});for(let nt of[-1,1])e.plain.box(w+.5+($?nt*.48:0),0,A+.5+(lt?nt*.48:0),$?.07:1.12,1.55,lt?.07:1.12,oc,{faces:63&~zn&~be});let D=$?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[nt,at]of D){let gt=$?w+nt:w+at,it=$?A+at:A+nt;if(!h($?w+nt:w,$?A:A+nt)||h(gt,it)||c(gt,it))continue;let Lt=it*n+gt;if(!i.walk[Lt])continue;let Yt=11040588;if($){let vt=at>0?A+1+.04:A-.04,Ut=nt>0?w+1+.44:w-.44;e.woodfine.box(Ut,0,vt,.86,1.5,.05,Yt,{faces:63}),e.plain.box(Ut+nt*.32,.72,vt+at*.035,.05,.05,.03,14267482,{faces:63});for(let Kt of[.15,.85])e.woodfine.box(Ut,Kt,vt+at*.028,.6,.55,.01,Bt(Yt,1.12),{faces:at>0?zt:Oe})}else{let vt=at>0?w+1+.04:w-.04,Ut=nt>0?A+1+.44:A-.44;e.woodfine.box(vt,0,Ut,.05,1.5,.86,Yt,{faces:63}),e.plain.box(vt+at*.035,.72,Ut+nt*.32,.03,.05,.05,14267482,{faces:63});for(let Kt of[.15,.85])e.woodfine.box(vt+at*.028,Kt,Ut,.01,.55,.6,Bt(Yt,1.12),{faces:at>0?nn:Cn})}break}}}for(let A of i.def.decor||[])if(A.type==="rug"){let[w,N,B,z]=A.rect;e.rug.box(w+B/2,0,N+z/2,B-.2,.02,z-.2,A.color,{faces:be,fit:!0})}for(let A of i.furn)Cg(i,A,e,o,u);for(let A of u)A.pendant&&(e.plain.box(A.x,A.y+.12,A.z,.02,kn-A.y-.12,.02,2763574),e.plain.box(A.x,kn-.02,A.z,.16,.02,.16,16183526),e.plain.box(A.x,A.y+.02,A.z,.46,.12,.46,15260868,{faces:63&~zn}),e.plain.box(A.x,A.y+.14,A.z,.3,.06,.3,14207920),e.unlit.box(A.x,A.y-.04,A.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(A.x,A.y+.021,A.z,.44,.001,.44,16769192,{faces:zn}),m.push(A.x,A.y-.02,A.z));for(let A of u)!A.pendant&&A.I>.8&&A.y<1.2&&A.col[2]<.5&&m.push(A.x,A.y-.05,A.z);let U=Rg(i,u);for(let A of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])Pg(e[A],U);i.light=new Float32Array(n*s*3);for(let A=0;A<s;A++)for(let w=0;w<n;w++){let N=U(w+.5,1,A+.5,0,0,0,!0),B=(A*n+w)*3;i.light[B]=N[0],i.light[B+1]=N[1],i.light[B+2]=N[2]}let P=new re,I=(A,w,N=0)=>{if(A.empty)return;let B=new kt(A.build(),w);B.matrixAutoUpdate=!1,B.updateMatrix(),B.renderOrder=N,P.add(B)},F=A=>new ne({vertexColors:!0,map:A});if(I(e.wood,F(t.wood)),I(e.carpet,F(t.carpet)),I(e.tile,F(t.tile)),I(e.wallpaper,F(t.wallpaper)),I(e.panel,F(t.panel)),I(e.brick,F(t.brick)),I(e.plaster,F(t.plaster)),I(e.grass,F(t.grass)),I(e.asphalt,F(t.asphalt)),I(e.concrete,F(t.concrete)),I(e.plain,F(t.plain)),I(e.woodfine,F(t.woodfine)),I(e.rug,new ne({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),I(e.unlit,new ne({vertexColors:!0,toneMapped:!1})),I(e.shadow,new ne({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),I(e.patch,new ne({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:Sn,polygonOffset:!0,polygonOffsetFactor:-3}),2),g.length){let A=[],w=[],N=[];for(let[K,V,Y,$]of g){let lt=$?1:0,J=Y?1:0,D=A.length/3,nt=[[K-lt*.3,1.4,V-J*.3,.16],[K+lt*.3,1.4,V+J*.3,.16],[K+Y*1.5+lt*.75,.02,V+$*1.5+J*.75,0],[K+Y*1.5-lt*.15,.02,V+$*1.5-J*.15,0],[K-lt*.3,.82,V-J*.3,.12],[K+lt*.3,.82,V+J*.3,.12],[K+Y*.55+lt*.55,.02,V+$*.55+J*.55,0],[K+Y*.55-lt*.05,.02,V+$*.55-J*.05,0]];for(let at of nt)A.push(at[0],at[1],at[2]),w.push(1,.85,.6,at[3]);N.push(D,D+1,D+2,D,D+2,D+3,D+4,D+5,D+6,D+4,D+6,D+7),N.push(D,D+1,D+5,D,D+5,D+4)}let B=new ge;B.setAttribute("position",new le(new Float32Array(A),3)),B.setAttribute("color",new le(new Float32Array(w),4)),B.setIndex(N);let z=new kt(B,new ne({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Sn,side:Ue}));z.renderOrder=5,P.add(z)}if(m.length){let A=new ge;A.setAttribute("position",new le(new Float32Array(m),3));let w=new Pi(A,new di({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:Sn,sizeAttenuation:!0}));w.renderOrder=6,P.add(w)}return P}function Ru(){let i=new on({vertexColors:!0}),t=new re,e=new te,n=4080992,s=2501178,r=15250234;e.box(0,0,0,.94,1.04,.84,n,{top:4936563}),e.box(0,0,0,.98,.06,.88,s),e.box(0,.98,0,.98,.06,.88,s);for(let l of[-1,1])e.box(l*.47,.06,0,.04,.92,.86,s);e.box(0,.12,.38,.74,.8,.05,987158,{faces:zt}),e.box(0,.14,.2,.66,.02,.3,2764350,{faces:be}),e.box(0,.5,.2,.66,.02,.3,2764350,{faces:be});for(let l=0;l<3;l++)e.box(-.18+l*.18,.16,.24,.16,.08,.1,r,{top:16769658,faces:63}),e.box(-.09+l*.18,.24,.24,.16,.08,.1,r,{top:16769658,faces:63});for(let l=0;l<4;l++)e.box(-.2+l*.13,.52,.24,.11,.07+l%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new kt(e.build(),i));let a=new te;a.box(.37,.1,.035,.74,.84,.07,5857674,{faces:63}),a.box(.37,.16,.075,.62,.72,.02,4936563,{faces:63}),a.box(.37,.46,.09,.24,.24,.04,r,{faces:63}),a.box(.37,.5,.115,.16,.16,.03,2237487,{faces:63});for(let l=0;l<8;l++){let h=l*Math.PI/4;a.box(.37+Math.cos(h)*.105,.574+Math.sin(h)*.105,.1,.02,.02,.03,16773568,{faces:63})}for(let l of[0,2.1,4.2])a.box(.62+Math.cos(l)*.05,.45+Math.sin(l)*.05,.12,.03,.03,.1,14212842,{faces:63});a.box(.62,.45,.1,.06,.06,.06,14212842,{faces:63});for(let l of[.2,.8])a.box(.03,l,.04,.06,.12,.09,s,{faces:63});let o=new kt(a.build(),i);return o.position.set(-.37,0,.42),t.add(o),{group:t,door:o,mat:i}}function Pu(){let i=new te,t=5981910,e=15905076,n=2371663;i.box(0,.25,0,2.7,1.05,1.3,t,{top:7166184}),i.box(1.15,.25,0,.6,.75,1.32,t),i.box(0,.55,0,2.72,.14,1.32,e,{faces:nn|Cn|zt|Oe}),i.box(.95,.78,0,.4,.4,1.34,n,{faces:zt|Oe}),i.box(1.36,.78,0,.04,.4,1.1,n,{faces:nn}),i.box(-.3,.75,-.66,1.4,.42,.03,n,{faces:Oe}),i.box(0,1.3,0,1.6,.06,1,2763574),i.box(1.5,.22,0,.12,.12,1.34,2763574),i.box(1.52,.35,.42,.06,.16,.24,16774064,{faces:nn}),i.box(1.52,.35,-.42,.06,.16,.24,16774064,{faces:nn}),i.box(-1.37,.4,.45,.04,.18,.2,16731486,{faces:Cn}),i.box(-1.37,.4,-.45,.04,.18,.2,16731486,{faces:Cn});for(let a of[-.85,.85])for(let o of[-.6,.6])i.box(a,0,o,.5,.5,.22,1842728,{faces:63}),i.box(a,.15,o+Math.sign(o)*.1,.22,.22,.04,12107984,{faces:o>0?zt:Oe});let s=new kt(i.build(),new on({vertexColors:!0})),r=new re;return r.add(s),{group:r,body:s}}function Iu(){let i=new te,t=16054008,e=2237487,n=2371663;i.box(0,.22,0,2.5,.45,1.2,t,{top:16777215}),i.box(-.1,.67,0,1.3,.38,1.1,t),i.box(-.1,.72,0,1.32,.28,1.12,n,{faces:nn|Cn|zt|Oe}),i.box(0,.3,0,2.52,.16,1.22,e,{faces:nn|Cn|zt|Oe}),i.box(1.26,.32,.38,.03,.1,.22,16774064,{faces:nn}),i.box(1.26,.32,-.38,.03,.1,.22,16774064,{faces:nn});for(let l of[-.8,.8])for(let h of[-.56,.56])i.box(l,0,h,.46,.46,.2,1842728,{faces:63});let s=new kt(i.build(),new on({vertexColors:!0})),r=new re;r.add(s);let a=new kt(new ke(.3,.12,.5),new ne({color:16722490})),o=new kt(new ke(.3,.12,.5),new ne({color:2779903}));return a.position.set(-.1,1.11,.26),o.position.set(-.1,1.11,-.26),r.add(a,o),{group:r,red:a,blue:o}}function Lu(){let i=new te;i.box(0,0,0,.32,.42,.06,15262422,{faces:63}),i.box(0,.24,.031,.22,.1,.01,2046511,{faces:16});for(let n=0;n<3;n++)for(let s=0;s<3;s++)i.box(-.07+s*.07,.04+n*.06,.035,.05,.04,.012,10134704,{faces:63});let t=new re;t.add(new kt(i.build(),new on({vertexColors:!0})));let e=new kt(new ke(.05,.05,.02),new ne({color:4054148}));return e.position.set(.11,.36,.035),t.add(e),{group:t,led:e}}function Du(){let i=new te;for(let r=0;r<3;r++){let a=-.12+r*.075,o=(r-1)*.15;i.box(r*.015,a,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:o}),i.box(r*.015,a-.002,0,.09,.075,.245,15983520,{faces:63,ry:o})}let t=new te;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new te,n=new Zs(.17,0);n.scale(1.15,1.2,1.15),e.add(n,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new te;return s.box(0,-.34,0,.74,.7,.08,12618298,{faces:63}),s.box(0,-.29,0,.62,.6,.09,3098712,{faces:zt|Oe}),s.box(0,-.29,0,.62,.22,.095,4165530,{faces:zt|Oe}),s.box(.14,-.02,0,.16,.16,.1,15905076,{faces:zt|Oe}),s.box(-.12,-.14,0,.3,.12,.1,15230287,{faces:zt|Oe}),{cash:i.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var hc={},mr=(i,t)=>{if(!hc[i]){let e=new te;t(e),hc[i]=e.build()}return hc[i]},Ht=63,Ig={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function Nu(i,t,e){for(let s of[-.11,.11])i.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),i.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),i.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),i.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:Ht,ry:s>0?-.15:.15});i.box(0,.03,.222+.01,.07,.09,.05,Bt(t.skin,.88),{faces:Ht});for(let s of[-.255,.255])i.box(s,.08,0,.03,.1,.08,Bt(t.skin,.92),{faces:Ht})}function Lg(i,t){return mr(i+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:Ht}),i==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:Ht});for(let n of[-.11,.11])e.box(n,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(n,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:Ht}),e.box(0,.22,0,.56,.06,.5,Bt(t.hat,.8),{faces:Ht&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:Ht})}else i==="guard"?(Nu(e,t,i),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:Ht}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:Ht}),e.box(0,.35,-.02,.5,.06,.44,Bt(t.hat,1.15),{faces:Ht}),e.box(0,.2,.29,.5,.04,.2,Bt(t.hat,.8),{faces:Ht}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16})):(Nu(e,t,i),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:Ht}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:Ht}),e.box(.14,.42,-.1,.18,.1,.18,Bt(t.hat,1.1),{faces:Ht}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:Ht}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:Ht&-5&-9}))})}function uc(i){let t=Ig[i],e=new on({vertexColors:!0}),n=new re,s=new re;n.add(s);let r=[],a=(M,y,C=0,E=0,x=0)=>{let T=new kt(M,e);return T.position.set(C,E,x),y.add(T),r.push(T),T},o=mr(i+"leg",M=>{M.box(0,-.36,0,.18,.36,.21,t.pants,{faces:Ht}),M.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:Ht,top:Bt(t.shoe,1.3)}),i==="owner"&&M.box(0,-.3,.06,.205,.04,.25,16777215,{faces:Ht}),i==="guard"&&M.box(0,-.12,0,.185,.02,.215,Bt(t.pants,.8),{faces:Ht&-5&-9})}),l=mr(i+"torso",M=>{if(M.box(0,.34,0,.5,.45,.3,t.shirt,{faces:Ht}),i==="guard"){M.box(0,.4,0,.53,.38,.33,t.vest,{faces:Ht}),M.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),M.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:Ht}),M.box(.14,.62,.168,.12,.04,.02,16777215,{faces:Ht}),M.box(.16,.48,.17,.08,.12,.05,2237487,{faces:Ht}),M.box(.18,.6,.18,.015,.08,.015,2237487,{faces:Ht}),M.box(0,.33,0,.55,.08,.35,1777195,{faces:Ht}),M.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let y of[-.2,.2])M.box(y,.3,.1,.09,.1,.1,2763574,{faces:Ht})}else if(i==="player")M.box(0,.33,0,.52,.08,.32,t.belt,{faces:Ht}),M.box(0,.42,.155,.3,.14,.02,Bt(t.shirt,.8),{faces:16}),M.box(0,.72,-.12,.42,.14,.12,Bt(t.shirt,.85),{faces:Ht});else{for(let y=0;y<4;y++)M.box(0,.38+y*.1,0,.51,.035,.31,16777215,{faces:Ht&-5&-9});for(let y=0;y<3;y++)M.box(0,.42+y*.11,.155,.04,.04,.02,16777215,{faces:16});M.box(0,.74,.14,.3,.06,.04,Bt(t.shirt,.85),{faces:Ht})}}),h=M=>mr(i+"arm"+M,y=>{y.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:Ht}),y.box(0,-.37,0,.14,.18,.16,i==="guard"?t.shirt:Bt(t.shirt,.95),{faces:Ht}),y.box(0,-.48,0,.13,.11,.14,i==="player"?2763837:t.skin,{faces:Ht}),i==="guard"&&y.box(0,-.06,0,.16,.1,.18,t.vest,{faces:Ht}),i==="guard"&&M==="R"&&(y.box(0,-.66,.06,.07,.24,.07,2763574,{faces:Ht}),y.box(0,-.73,.06,.095,.08,.095,12831958,{faces:Ht}),y.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),c=new re;c.position.set(-.12,.36,0),s.add(c),a(o,c);let f=new re;f.position.set(.12,.36,0),s.add(f),a(o,f),a(l,s);let u=new re;u.position.set(-.33,.77,0),s.add(u),a(h("L"),u);let m=new re;m.position.set(.33,.77,0),s.add(m),a(h("R"),m);let g=new re;g.position.set(0,.84,0),s.add(g),a(Lg(i,t),g);let v=null,p=null;if(i==="player"&&(v=new re,v.position.set(0,.66,-.16),s.add(v),a(mr("bag",M=>{M.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:Ht}),M.box(0,.19,-.18,.14,.1,.14,10779973,{faces:Ht}),M.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),v)),i==="guard"){let M=new Ys(.75,3.4,14,1,!0);M.translate(0,-1.7,0),p=new kt(M,new ne({map:xs().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:Sn,side:Ue,fog:!1})),p.position.set(0,-.74,.06),p.renderOrder=6,m.add(p)}let d={player:.76,guard:.72,owner:.78}[i],_={player:.88,guard:.8,owner:.86}[i];return i!=="player"&&g.scale.set(.9/d,1,.92/_),p&&p.scale.set(1/d,1/_,1),{kind:i,root:n,body:s,legL:c,legR:f,armL:u,armR:m,head:g,bag:v,beam:p,mat:e,meshes:r,phase:0,sq:1,sqv:0,flash:0,wx:d,wz:_}}function fc(i,t,e,n){i.phase+=t*(5+9*e);let s=Math.sin(i.phase)*.8*e;i.legL.rotation.x=s,i.legR.rotation.x=-s,i.armOverride||(i.armL.rotation.x=-s*.9,i.armR.rotation.x=i.beam?-1.35+Math.sin(i.phase*.5)*.06*e+Math.sin(n*1.3)*.03:s*.9),i.body.position.y=Math.abs(Math.sin(i.phase))*.07*e+(1-e)*Math.sin(n*2.2)*.012,i.head.rotation.y=i.beam?Math.sin(n*.9)*.15*(1-e):0,i.sqv+=(1-i.sq)*260*t,i.sqv*=Math.exp(-11*t),i.sq+=i.sqv*t;let r=Math.max(.5,i.sq),a=1/Math.sqrt(r);if(i.body.scale.set(a*i.wx,r,a*i.wz),i.flash>0){i.flash-=t;let o=Math.max(0,i.flash)*6;i.mat.emissive.setRGB(o,o,o)}}function dc(i,t,e,n,s){if(!t.light)return;let r=Math.max(0,Math.min(t.W-1,Math.floor(e))),o=(Math.max(0,Math.min(t.H-1,Math.floor(n)))*t.W+r)*3,l=1-Math.exp(-6*s),h=1.55,c=i.mat.color;c.r+=(Math.max(.82,Math.min(1.5,t.light[o]*h))-c.r)*l,c.g+=(Math.max(.78,Math.min(1.5,t.light[o+1]*h))-c.g)*l,c.b+=(Math.max(.78,Math.min(1.5,t.light[o+2]*h))-c.b)*l}var Gn=(i,t)=>{i.sq=t,i.sqv=0};var zi=i=>i?"ok":"pending",Dg=[{id:"art",text:"Steal the painting",bonus:600,check:i=>zi(i.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,check:i=>zi(i.got.jewel>=i.totals.jewel)},{id:"gold",text:"Grab both gold bars",bonus:500,check:i=>zi(i.got.gold>=i.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:i=>zi(i.got.cashLoose>=i.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,check:i=>zi(i.hidFromAlert)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:i=>zi(i.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:i=>zi(i.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(i,t)=>i.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(i,t)=>i.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,check:(i,t)=>i.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(i,t)=>i.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(i,t)=>i.dashes>0?"fail":t?"ok":"pending"}];function Uu(i=3){let t=Dg.slice(),e=[];for(;e.length<i&&t.length;){let n=t.splice(Math.random()*t.length|0,1)[0];n.tag&&e.some(s=>s.tag===n.tag)||e.push({...n,st:"pending"})}return e}var gr={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,alarm:45,radio:2.6,mult:1,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},pc=(i,t)=>t==="normal"?i:i+"_"+t;var Fu=.3,mc=3.7,Ou=11,Bu=.18,Ng=.8,zu=1.02,Ug=3.2,vs=20,ys={cone:16769357,sus:16752412,alert:16726862},xr=new Me,wo=new G,ii={x:0,y:0},_r={x:0,y:0},gc=(i,t,e)=>i+xn(tn(i,t),-e,e),Fg=new qs(.36,12).rotateX(-Math.PI/2),Og=new ne({color:0,transparent:!0,opacity:.22,depthWrite:!1});function ku(){let i=new ge,t=new Float32Array((vs+2)*3),e=new Float32Array((vs+2)*4);e.set([1,1,1,.3],0);for(let r=1;r<=vs+1;r++)e.set([1,1,1,.05],r*4);let n=[];for(let r=1;r<=vs;r++)n.push(0,r+1,r);i.setAttribute("position",new le(t,3)),i.setAttribute("color",new le(e,4)),i.setIndex(n);let s=new kt(i,new ne({color:ys.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ue}));return s.frustumCulled=!1,s.renderOrder=3,s}function Bg(){let i=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new ge;t.setAttribute("position",new le(new Float32Array(i),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new kt(t,new ne({color:16765503,side:Ue,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function zg(){let i=new re,t=new ke(.13,.13,.13),e=new ne({color:16765503});for(let n=0;n<3;n++){let s=new kt(t,e);i.add(s)}return i.visible=!1,i}var To=class{constructor(t){this.app=t,this.root=new re,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){this.root.clear();for(let f of this.guards||[])f.badge.remove();this.def=t;let e=this.L=Au(t);if(this.root.add(Cu(e)),this.safe=Ru(),this.safe.group.position.set(e.safe.x+.5,0,e.safe.y+.5),this.root.add(this.safe.group),this.police=Iu(),this.police.group.visible=!1,this.root.add(this.police.group),t.panel){let f=t.panel;this.panel=Lu(),this.panel.group.position.set(f.x+.5+f.dx*.53,.85,f.y+.5+f.dy*.53),this.panel.group.rotation.y=Math.atan2(f.dx,f.dy),this.panel.at={x:f.x+.5+f.dx*1.1,z:f.y+.5+f.dy*1.1},this.root.add(this.panel.group)}this.van=Pu(),this.root.add(this.van.group);let n=Du(),s=Eu();this.lootMeshes={};let r={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let f of e.loot)r[f.type]++;for(let f in n){let u=new Ri(n[f],s,Math.max(1,r[f]));u.frustumCulled=!1,u.count=0,this.lootMeshes[f]=u,this.root.add(u)}let a=uc("player");a.root.rotation.order="YXZ",this.root.add(a.root),this.player={c:a,shadow:this.addShadow()},this.guards=[];let o=(f,u)=>{let m=uc(f);m.root.rotation.order="YXZ",this.root.add(m.root);let g=ku();this.root.add(g);let v=zg();this.root.add(v);let p=document.createElement("div");p.className="badge",p.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(p);let d={kind:f,def:u,c:m,cone:g,stars:v,badge:p,shadow:this.addShadow()};return this.guards.push(d),d};for(let f of t.guards)o("guard",f);if(t.owner){let f=t.owner;o("owner",{path:f.patrol,wait:1.2,speed:f.speed,loop:!0,owner:f})}this.cams=(t.cameras||[]).map(f=>{let u=ku();this.root.add(u);let m=new kt(new ke(.22,.18,.36),new ne({color:2961744})),g=new kt(new ke(.12,.1,.06),new ne({color:16726862}));return g.position.z=.2,m.add(g),m.position.set(f.pos[0],1.3,f.pos[1]),this.root.add(m),{def:f,cone:u,mesh:m,lens:g}}),this.exitRing=new kt(new ls(.62,.9,28).rotateX(-Math.PI/2),new ne({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new kt(new os(.85,.85,2.4,20,1,!0),new ne({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:Ue})),this.exitRing.position.set(e.exit.x,.03,e.exit.z),this.exitBeam.position.set(e.exit.x,1.2,e.exit.z),this.root.add(this.exitRing,this.exitBeam);let l=new ke(.11,.025,.11);this.coinMeshes=[];for(let f=0;f<4;f++){let u=new kt(l,new ne({color:16762938}));u.visible=!1,this.root.add(u),this.coinMeshes.push(u)}this.hides=e.furn.filter(f=>f.type==="wardrobe").map(f=>{let u=f.x0+.5,m=f.y0+.5;for(let[g,v]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(f.x0+g,f.y0+v))return{cx:u,cz:m,ex:u+g*.95,ez:m+v*.95,face:Math.atan2(g,v)};return null}).filter(Boolean),this.arrow=Bg(),this.root.add(this.arrow),this.noiseRings=[];let h=new ls(.9,1,32).rotateX(-Math.PI/2);for(let f=0;f<4;f++){let u=new kt(h,new ne({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));u.visible=!1,u.renderOrder=4,this.root.add(u),this.noiseRings.push({m:u,t:1,r:1})}let c=t.values;this.lootTotal=c.stash+c.bundle*c.bundles+e.loot.reduce((f,u)=>f+c[u.type],0),this.reset()}addShadow(){let t=new kt(Fg,Og);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.D=gr[this.app.diff]||gr.normal,this.coinsLeft=this.D.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let s of this.L.loot)this.totals[s.type]++;this.contracts=Uu(3),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let s of this.coinMeshes||[])s.visible=!1;let n=this.player;Object.assign(n,{x:t.start.x+.5,z:t.start.y+.5,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),n.c.root.visible=!0,n.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let s of this.guards||[])s.knowsHide=!1;Gn(n.c,1);for(let s of this.guards)this.resetGuard(s);for(let s of this.cams)Object.assign(s,{susp:0,cool:0,face:s.def.face});this.loot=t.loot.map((s,r)=>({type:s.type,x:s.x+.5,y:.45,z:s.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[s.type],ph:r*1.7,ms:0,s:1,rot:r})),this.safe.door.rotation.y=0,this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let s of this.noiseRings)s.m.visible=!1,s.t=1;this.app.particles.clear(),this.app.floaters.clear()}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let n=e.owner.bed;t.x=n[0]+n[2]/2,t.z=n[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let n=e.path[t.wp];t.face=Math.atan2(n[0]+.5-t.x,n[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let n=this.L;return t>=0&&e>=0&&t<n.W&&e<n.H&&n.walk[e*n.W+t]===1}opaqueAt(t,e){let n=this.L;return t<0||e<0||t>=n.W||e>=n.H||n.opaque[e*n.W+t]===1}rayLen(t,e,n,s){let r=Math.sin(n),a=Math.cos(n);for(let o=.1;o<s;o+=.1)if(this.opaqueAt(Math.floor(t+r*o),Math.floor(e+a*o)))return o-.05;return s}los(t,e,n,s){let r=n-t,a=s-e,o=Math.ceil(Math.hypot(r,a)/.12);for(let l=1;l<o;l++){let h=l/o;if(this.opaqueAt(Math.floor(t+r*h),Math.floor(e+a*h)))return!1}return!0}clearLine(t,e,n,s){let r=n-t,a=s-e,o=Math.hypot(r,a);if(o<.01)return!0;let l=-a/o*.28,h=r/o*.28,c=Math.ceil(o/.25);for(let f=1;f<=c;f++){let u=f/c,m=t+r*u,g=e+a*u;if(!this.walkable(Math.floor(m),Math.floor(g))||!this.walkable(Math.floor(m+l),Math.floor(g+h))||!this.walkable(Math.floor(m-l),Math.floor(g-h)))return!1}return!0}collide(t,e){let n=Math.floor(t.x),s=Math.floor(t.z);for(let r=s-1;r<=s+1;r++)for(let a=n-1;a<=n+1;a++){if(this.walkable(a,r))continue;let o=xn(t.x,a,a+1),l=xn(t.z,r,r+1),h=t.x-o,c=t.z-l,f=h*h+c*c;if(!(f>=e*e))if(f>1e-9){let u=Math.sqrt(f);t.x+=h/u*(e-u),t.z+=c/u*(e-u)}else{let u=t.x-a,m=a+1-t.x,g=t.z-r,v=r+1-t.z,p=Math.min(u,m,g,v);p===u?t.x=a-e:p===m?t.x=a+1+e:p===g?t.z=r-e:t.z=r+1+e}}}moveEnt(t,e,n,s){let r=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(n))/.15));for(let a=0;a<r;a++)t.x+=e/r,t.z+=n/r,this.collide(t,s)}path(t,e,n,s){let{W:r,H:a,walk:o}=this.L,l=r*a;this.prev||(this.prev=new Int32Array(l),this.q=new Int32Array(l));let h=this.prev,c=this.q;if(n<0||s<0||n>=r||s>=a)return[];h.fill(-1);let f=e*r+t,u=s*r+n,m=0,g=0;for(c[g++]=f,h[f]=f;m<g;){let p=c[m++];if(p===u)break;let d=p%r,_=p/r|0;for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++){if(!y&&!M)continue;let C=d+y,E=_+M;if(C<0||E<0||C>=r||E>=a)continue;let x=E*r+C;!o[x]||h[x]!==-1||y&&M&&(!o[_*r+C]||!o[E*r+d])||(h[x]=p,c[g++]=x)}}if(h[u]===-1)return[];let v=[];for(let p=u;p!==f;p=h[p])v.push(p);return v.reverse()}navTo(t,e,n,s,r){let a=this.L.W,o=Math.floor(n)*a+Math.floor(e);(o!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(n)),t.navGoal=o,t.navT=.5),t.navT-=r;let l=t.nav,h=e,c=n;if(l.length>1){let p=Math.min(l.length-1,6),d=0;for(let _=p;_>=1;_--){let M=l[_]%a+.5,y=(l[_]/a|0)+.5;if(this.clearLine(t.x,t.z,_===l.length-1?e:M,_===l.length-1?n:y)){d=_;break}}d===l.length-1?(h=e,c=n):(h=l[d]%a+.5,c=(l[d]/a|0)+.5),d>0?l.splice(0,d):Math.hypot(h-t.x,c-t.z)<.3&&l.shift()}let f=h-t.x,u=c-t.z,m=Math.hypot(f,u);if(Math.hypot(e-t.x,n-t.z)<.12)return!0;let v=Math.min(m,s*r);return m>.001&&(this.moveEnt(t,f/m*v,u/m*v,.28),t.face=gc(t.face,Math.atan2(f,u),8*r)),t.moving=1,!1}update(t,e){let n=t;this.hitstop>0&&(this.hitstop-=t,n*=.08),this.t+=n;let s=!e&&this.state==="play";s?(this.time+=n,this.updatePlayer(n)):e&&(this.player.c.root.visible=!1);let r=0;for(let a of this.guards)a.moving=0,this.updateGuard(a,n,s),a.state==="alert"&&r++,this.syncGuard(a,n);for(let a of this.cams)this.updateCam(a,n,s);this.tension=r>0||this.alarm?1:0,this.updateAlarm(n,s),this.updateLoot(n,s),this.updateProps(n),e||this.syncPlayer(n),this.updateNoiseRings(n),this.updateCoins(n,s),this.state==="escape"&&this.updateEscape(n),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,n=this.app,s=n.input;s.move(ii),s.consumeLook(_r);let r=n.sens||.0024;if(e.lookX=_r.x,e.lookY=_r.y,e.yaw-=_r.x*r,e.pitch=xn(e.pitch-_r.y*r,-1.25,1.2),e.face=e.yaw+Math.PI,e.hiding){this.updateHiding(t,s);return}let a=Math.sin(e.face),o=Math.cos(e.face),l=-o,h=a,c=l*ii.x-a*ii.y,f=h*ii.x-o*ii.y;e.strafe=ii.x;let u=this.lootGot/this.lootTotal,m=mc*(1-.1*u);if(e.vx=Je(e.vx,c*m,14,t),e.vz=Je(e.vz,f*m,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let A=c,w=f;Math.abs(A)+Math.abs(w)<.01&&(A=a,w=o);let N=Math.hypot(A,w);A/=N,w/=N,e.dashT=Bu,e.dashCd=Ng,e.ddx=A,e.ddz=w,this.dashes++,n.audio.play("dash"),n.shake.add(.18),Gn(e.c,.7),n.particles.burst(e.x,.1,e.z,{count:8,colors:[16777215,14673646],speed:2,up:1.5,size:.16,gravity:2,life:.5}),this.makeNoise(e.x,e.z,4.2,null),n.hintDone("dash")}let g=e.vx,v=e.vz;if(e.dashT>0){e.dashT-=t;let A=Math.max(0,e.dashT/Bu);g+=e.ddx*Ou*A,v+=e.ddz*Ou*A,Math.random()<.6&&n.particles.burst(e.x,.15,e.z,{count:1,colors:[16777215],speed:.5,up:.5,size:.12,gravity:0,life:.35})}this.moveEnt(e,g*t,v*t,Fu);for(let A of this.guards){if(A.state==="sleep")continue;let w=e.x-A.x,N=e.z-A.z,B=Math.hypot(w,N);B<.55&&B>.001&&(e.x+=w/B*(.55-B),e.z+=N/B*(.55-B),this.collide(e,Fu))}let p=Math.hypot(g,v);e.moving=Math.min(1,p/mc);let d=Math.floor(e.bob/Math.PI);e.bob+=Math.min(p,mc)*t*2.6,Math.floor(e.bob/Math.PI)!==d&&n.audio.play("step"),p>.5&&n.hintDone("move");let _=this.L.safe.x+.5,M=this.L.safe.y+.5,y=!this.safeOpen&&Math.hypot(e.x-_,e.z-M)<1.45&&Math.abs(tn(e.face,Math.atan2(_-e.x,M-e.z)))<1.1,C=null,E=9;for(let A of this.guards){if(!this.canKO(A))continue;let w=Math.hypot(e.x-A.x,e.z-A.z);if(!(e.dashT<=0&&Math.abs(tn(e.face,Math.atan2(A.x-e.x,A.z-e.z)))>.9)&&(w<E&&(E=w,C=A),e.dashT>0&&w<.95)){this.knockout(A),C=null;break}}let x=s.consumeAct();e.crack=!1;let T=!1,U=this.nearHide();if(this.alarm&&this.panel){let A=this.panel.at,w=this.panel.group.position;T=Math.hypot(e.x-A.x,e.z-A.z)<1&&Math.abs(tn(e.face,Math.atan2(w.x-e.x,w.z-e.z)))<1,T&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,n.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}y?(n.hint("safe"),s.act?(this.safeProg+=t/1.4,this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,n.audio.play("tick",this.safeProg),n.particles.burst(_,.7,M+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t),C&&(n.hint("ko"),x&&!y&&this.knockout(C));let P=U&&!T&&!y&&!C;if(P&&(n.hint("hide"),x)){this.enterHide(U);return}n.setPrompt(T?"panel":y?"safe":C?"ko":P?"hide":"",T?this.disarmProg:this.safeProg);let I=this.L.exit,F=Math.hypot(e.x-I.x,e.z-I.z);this.nopeT-=t,F<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,n.audio.play("nope"),n.floaters.spawn("Crack the safe first!",e.x+a*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),this.checkContracts(!1),this.time>3.5&&n.hint("dash");for(let A of this.guards){let w=Math.hypot(e.x-A.x,e.z-A.z);A.state==="sleep"&&w<6?n.hint("owner"):A.state!=="sleep"&&w<6.5&&(n.hint("cone"),this.time>8&&n.hint("coin"))}for(let A of this.loot)if(Math.hypot(e.x-A.x,e.z-A.z)<4){n.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,n=e.x-t.x,s=e.z-t.z;return Math.hypot(n,s)>1.35||Math.abs(tn(t.face,Math.atan2(n,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}knockout(t){let e=this.app,n=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.state="ko",t.koT=9,t.susp=0,t.fallT=0,t.c.flash=.2,Gn(t.c,.6),this.kos++,this.hitstop=.08,e.shake.add(.35),n.punchT=.28,Gn(n.c,1.25),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,n=1.25;for(let s of this.hides){let r=Math.hypot(t.x-s.cx,t.z-s.cz);r<n&&Math.abs(tn(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(n=r,e=s)}return e}enterHide(t){let e=this.player,n=this.app,s=!1,r=0;for(let a of this.guards)a.state==="alert"&&r++,a.state!=="ko"&&a.state!=="sleep"&&a.state!=="getup"&&this.canSee(a)&&(s=!0,a.knowsHide=!0,a.state!=="alert"&&this.alert(a),n.floaters.spawn("I saw that!",a.x,2,a.z,"alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,r>0&&!s){this.hidFromAlert=!0;for(let a of this.guards)a.state==="alert"&&(a.lostT=99)}n.audio.play("creak"),n.onHide(!0),n.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let n=e.hiding;e.hiding=null,e.x=n.ex,e.z=n.ez,e.yaw=n.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let n=this.player,s=n.hiding,r=this.app;n.hideT+=t;let a=s.face-Math.PI;n.yaw=a+xn(tn(a,n.yaw),-1,1),n.pitch=xn(n.pitch,-.5,.4),n.moving=0,n.crack=!1,e.consumeDash(),e.consumeThrow();let o=9;for(let l of this.guards)l.state!=="ko"&&l.state!=="sleep"&&(o=Math.min(o,Math.hypot(l.x-s.cx,l.z-s.cz)));n.beatT-=t,o<4.5&&n.beatT<=0&&(n.beatT=.45+o*.12,r.audio.play("beat"),r.shake.add(.04)),e.move(ii),r.setPrompt("leave"),n.hideT>.35&&(e.consumeAct()||Math.hypot(ii.x,ii.y)>.5)&&this.leaveHide(!1)}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let n=this.coinMeshes.find(h=>!h.visible);if(!n)return;this.coinsLeft--;let s=Math.sin(t.face),r=Math.cos(t.face),a=Math.cos(t.pitch),o=Math.sin(t.pitch),l=7.5;this.coins.push({mesh:n,x:t.x+s*.35,y:.95,z:t.z+r*.35,vx:s*a*l+t.vx*.5,vy:o*l+2.6,vz:r*a*l+t.vz*.5,st:"fly",t:0,bounces:0}),n.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let n=this.player,s=this.app;for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];if(a.t+=t,a.st==="fly"){a.vy-=16*t;let o=a.x,l=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let h=Math.floor(a.x),c=Math.floor(a.z);!this.walkable(h,c)&&(this.opaqueAt(h,c)||a.y<.9)&&(Math.floor(o)!==h?a.vx*=-.4:a.vx*=.6,Math.floor(l)!==c?a.vz*=-.4:a.vz*=.6,a.x=o,a.z=l,s.audio.play("clink",.4)),a.y<.03&&(a.y=.03,a.bounces===0?(this.makeNoise(a.x,a.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(a.x,.06,a.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),a.bounces++,a.vy=Math.abs(a.vy)*.35,a.vx*=.5,a.vz*=.5,(a.bounces>2||Math.abs(a.vy)<.5)&&(a.st="rest",a.vy=0)),a.mesh.rotation.set(a.t*18,a.t*7,0)}else if(a.mesh.rotation.set(0,a.t*2,0),a.mesh.position.y=.03,e&&a.t>.6&&Math.hypot(n.x-a.x,n.z-a.z)<.6){this.coinsLeft++,a.mesh.visible=!1,this.coins.splice(r,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}a.mesh.position.set(a.x,a.y,a.z)}}makeNoise(t,e,n,s,r){let a=this.noiseRings.find(o=>o.t>=1);a&&(a.t=0,a.r=n,a.x=t,a.z=e,a.m.visible=!0);for(let o of this.guards)if(!(o===s||o.state==="ko"||o.state==="getup"||o.state==="alert"||o.state==="waking")&&!(Math.hypot(o.x-t,o.z-e)>n)){if(o.state==="sleep"){this.wake(o,t,e);continue}o.state!=="investigate"&&o.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(r?"Huh? A coin?":"?",o.x,1.9,o.z,"q",.9),r&&this.lures++),o.state="investigate",o.tx=t,o.tz=e,o.hurry=o.speed*1.4,o.susp=Math.max(o.susp,.3)}}wake(t,e,n){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=n,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,n-t.z),Gn(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,n,s){let r=e-t.x,a=n-t.z,o=Math.hypot(r,a);return o>s||o>.6&&Math.abs(tn(t.face,Math.atan2(r,a)))>t.fov/2?!1:this.los(t.x,t.z,e,n)}noticeThings(t){let e=this.app;for(let n of this.guards)if(!(n===t||n.state!=="ko"||n.koT<1.2||n.claimed)&&this.seesPoint(t,n.x,n.z,t.range)){n.claimed=!0,t.state="investigate",t.tx=n.x,t.tz=n.z,t.hurry=t.speed*1.7,t.reviveT=n,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"warn",1.3);return}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let n=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,n,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=n,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"warn",1.3))}}arrive(t){let e=this.app;if(t.reviveT){let n=t.reviveT;t.reviveT=null,n.claimed=!1,n.state==="ko"&&Math.hypot(n.x-t.x,n.z-t.z)<1.8&&(n.koT=.25,this.revives++,t.face=Math.atan2(n.x-t.x,n.z-t.z),e.floaters.spawn("Wake up!",n.x,1.4,n.z,"warn",1.1),e.audio.play("wake"))}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"alert",.8),this.app.shake.add(.15),Gn(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}canSee(t){let e=this.player,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s);return e.hiding||r>t.range||r>.35&&Math.abs(tn(t.face,Math.atan2(n,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)?0:r+.001}updateGuard(t,e,n){let s=this.player,r=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!n)&&r.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,r.floaters.spawn("?!",t.x,1.9,t.z,"q",.8));return}t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let a=n&&s.inv<=0?this.canSee(t):0;if(a){let l=1-xn(a/t.range,0,1),h=(.65+2.3*l*l)*(s.dashT>0?1.6:1)*this.D.susp;t.susp=Math.min(1,t.susp+h*e),t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",r.audio.play("huh")))}else t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3));n&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),n&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&!this.canKO(t)&&Math.abs(tn(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let o=t.def;switch(t.state){case"patrol":{let l=o.path[t.wp];this.navTo(t,l[0]+.5,l[1]+.5,t.speed,e)&&(t.state="wait",t.t=o.wait??1,t.baseFace=t.face);break}case"wait":{t.t-=e;let l=(o.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(l*2.4)*.9,t.t<=0){let h=o.path.length;o.loop?t.wp=(t.wp+1)%h:((t.wp+t.dir>=h||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir),t.state="patrol"}break}case"post":{let l=o.post[0]+.5,h=o.post[1]+.5;Math.hypot(t.x-l,t.z-h)>.15?this.navTo(t,l,h,t.speed,e):t.face=gc(t.face,o.face+Math.sin(this.t*o.sweepSpeed)*o.sweep,3*e);break}case"suspicious":{let l=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=gc(t.face,l,5*e),Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,r.floaters.spawn("Calling it in...",t.x,2,t.z,"warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let l=a?s.x:t.lastX,h=a?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(l=s.hiding.ex,h=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(l-t.x,h-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,l,h,Ug,e),!a&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,r.audio.play("lost"),r.floaters.spawn("?",t.x,1.9,t.z,"q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let n=t.c;n.root.position.x=t.x,n.root.position.z=t.z,n.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(fc(n,e*(s?1.5:1),t.moving?1:0,this.t),dc(n,this.L,t.x,t.z,e),n.beam){let o=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";n.beam.visible=o,o&&n.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let o=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,l=t.state==="ko"?1-Math.pow(1-o,3)*Math.cos(o*7):o;if(n.root.rotation.x=-Math.PI/2*l,n.root.position.y=.16*l,t.stars.visible=t.state==="ko",t.stars.visible){let h=t.x-Math.sin(t.face)*1,c=t.z-Math.cos(t.face)*1;t.stars.children.forEach((f,u)=>{let m=this.t*5+u*Math.PI*2/3;f.position.set(h+Math.cos(m)*.35,.55+Math.sin(m*2)*.05,c+Math.sin(m)*.35),f.rotation.set(m,m,0)})}}else t.state!=="sleep"&&(n.root.rotation.x=0,n.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(n.armOverride=!0,n.armL.rotation.x=n.armR.rotation.x=-2.6);let r=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=r,r){let o=t.state==="alert"?ys.alert:t.susp>.25?ys.sus:ys.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,t.range,o)}let a="";t.state==="alert"?a="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.susp>.04)&&(a="sus"),a!==t.prevBadge&&(t.prevBadge=a,t.badge.className="badge "+a,t.badge.lastChild.textContent=a==="alert"?"!":"?"),a&&(wo.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",wo.z>1),t.badge.style.transform=`translate(${(wo.x+1)/2*this.app.w}px,${(1-wo.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",a==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,n,s,r,a,o){let l=t.geometry.attributes.position.array;l[0]=e,l[1]=.04,l[2]=n;for(let h=0;h<=vs;h++){let c=s-r/2+r*h/vs,f=this.rayLen(e,n,c,a),u=(h+1)*3;l[u]=e+Math.sin(c)*f,l[u+1]=.04,l[u+2]=n+Math.cos(c)*f}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(o)}updateCam(t,e,n){let s=t.def,r=this.player;t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let a=s.pos[0],o=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let l=!1;if(n&&r.inv<=0&&t.cool<=0){let c=r.x-a,f=r.z-o;l=Math.hypot(c,f)<6.5&&Math.abs(tn(t.face,Math.atan2(c,f)))<.45&&this.los(a,o,r.x,r.z)}if(t.susp=xn(t.susp+(l?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.audio.play("alarm"),this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",a,2,o,"alert",1.2);for(let c of this.guards)c.state==="ko"||c.state==="sleep"||c.state==="getup"||c.state==="alert"||c.state==="waking"||Math.hypot(c.x-r.x,c.z-r.z)<18&&(c.state="investigate",c.tx=r.x,c.tz=r.z,c.hurry=3.2,c.susp=Math.max(c.susp,.6))}let h=t.cool>0;t.lens.material.color.setHex(h||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,a,o,t.face,.9,6.5,h?ys.alert:t.susp>.2?ys.sus:10479871)}openSafe(){let t=this.app,e=this.L.safe.x+.5,n=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,n+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.burst(e,1,n+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,n,"big",1.6);for(let r=0;r<s.bundles;r++){let a=-.9+1.8*r/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:n+.5,vx:Math.sin(a)*Fe(2,3.2),vy:Fe(5,7),vz:Math.cos(a)*Fe(1.5,3),st:"fly",t:0,value:s.bundle,ph:r,ms:0,s:1,rot:r,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.setObjective("Escape to the van!"),t.hintDone("safe"),t.hint("stash")}collect(t){let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let n=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,r=Math.sin(s.face),a=Math.cos(s.face),o=Fe(-.35,.35),l=s.x+r*1.4-a*o,h=s.z+a*1.4+r*o;e.floaters.spawn("+$"+t.value,l,1,h,n,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+r*1.4,1.45,s.z+a*1.4,"combo",.8),e.audio.play("combo",this.combo));let c={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+r*1.4,.8,s.z+a*1.4,{count:t.type==="cash"?4:10,colors:c,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+r*1,1,s.z+a*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+r*1.5,1,s.z+a*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,Gn(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let n=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let r=this.loot.length-1;r>=0;r--){let a=this.loot[r];a.t+=t;let o=a.type==="art"?.9:.62;if(a.st==="fly"){a.vy-=18*t;let c=a.x,f=a.z;a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,this.walkable(Math.floor(a.x),Math.floor(a.z))||(a.x=c,a.z=f,a.vx*=-.5,a.vz*=-.5),a.y<.3&&(a.y=.3,a.vy*=-.45,a.vx*=.6,a.vz*=.6),a.rot+=t*8,a.t>.8&&(a.st="idle")}else if(a.st==="idle")a.y+=(o+Math.sin(this.t*3+a.ph)*.08-a.y)*Math.min(1,t*6),a.rot+=t*1.8,e&&Math.hypot(n.x-a.x,n.z-a.z)<1.5&&(a.st="mag",a.ms=2);else{a.ms+=t*30;let c=n.x-a.x,f=.7-a.y,u=n.z-a.z,m=Math.hypot(c,f,u),g=Math.min(m,a.ms*t);if(a.x+=c/m*g,a.y+=f/m*g,a.z+=u/m*g,a.rot+=t*12,m<.45){this.collect(a),this.loot.splice(r,1);continue}}a.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(a.x+Fe(-.2,.2),a.y+Fe(0,.25),a.z+Fe(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let l=this.lootMeshes[a.type],h=a.st==="mag"?Math.max(.4,1-a.ms*.02):1+(a.type==="art"?0:Math.sin(this.t*6+a.ph)*.06);xr.position.set(a.x,a.y,a.z),xr.rotation.set(0,a.rot,0),xr.scale.setScalar(h*(a.type==="jewel"?1.5:1.25)),xr.updateMatrix(),l.setMatrixAt(s[a.type]++,xr.matrix)}for(let r in s){let a=this.lootMeshes[r];a.count=s[r],a.instanceMatrix.needsUpdate=!0}}updateProps(t){if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,n=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*n}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,n=e.c,s=this.state==="escape"&&!e.hidden;n.root.visible=s,e.shadow.visible=s,s&&(n.root.position.set(e.x,e.y,e.z),n.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),fc(n,t,1,this.t),n.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=Je(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),dc(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let n=this.player,s=this.app;if(this.state==="escape"){let g=this.van.group.position,v=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(v.x-2.5,1.6,v.z+5)),t.position.x+=(g.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(g.x+.3,.7,g.z),this.fovKick=0;return}if(n.hiding){let g=n.hiding;t.position.set(g.cx+Math.sin(g.face)*.12,zu-.06,g.cz+Math.cos(g.face)*.12),t.rotation.set(n.pitch+s.shake.y*.06,n.yaw+s.shake.x*.06,0),this.fovKick=Je(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let g=this.catcher,v=Math.atan2(g.x-n.x,g.z-n.z)-Math.PI;n.yaw+=tn(n.yaw,v)*Math.min(1,e*8),n.pitch+=(.08-n.pitch)*Math.min(1,e*8)}let r=n.moving,a=Math.abs(Math.sin(n.bob))*.05*r,o=Math.cos(n.bob)*.03*r,l=Math.cos(n.yaw+Math.PI),h=Math.sin(n.yaw+Math.PI),c=-l,f=h;n.roll=Je(n.roll,-n.strafe*.03*r,8,e),this.fovKick=Je(this.fovKick,n.dashT>0?12:0,n.dashT>0?25:6,e);let u=s.shake,m=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(n.x+c*o,zu+a-m,n.z+f*o),t.rotation.set(n.pitch+u.y*.06,n.yaw+u.x*.06,n.roll+u.x*.02)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let n=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(n,1,n),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),t.onEscapeStart()}updateEscape(t){let e=this.player,n=this.van.group,s=this.app;this.endT+=t;let r=this.endT;if(r<.4){let a=r/.4;e.x=e.sx+(n.position.x-e.sx)*a,e.z=e.sz+(n.position.z-.3-e.sz)*a,e.y=Math.sin(a*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,n.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));n.scale.x+=(1-n.scale.x)*Math.min(1,t*10),n.scale.y+=(1-n.scale.y)*Math.min(1,t*10),n.scale.z=n.scale.x,r>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),n.position.x+=this.van.vx*t,n.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.burst(n.position.x-1.5,.25,n.position.z,{count:2,colors:[14540253,12303291],speed:1,up:1,size:.22,gravity:-1,life:.6})),r>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;let e=this.app,n=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(n.x+40,0,n.z+2.5),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let o=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?o?16722490:5900816:4054148)}let n=this.police;if(!this.alarm){n.group.visible&&this.state==="play"&&(n.group.position.x+=t*10,n.group.position.x>this.L.exit.x+45&&(n.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(n.red.material.color.setHex(s?16722490:5574682),n.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let r=this.L.exit,a=Math.max(0,this.alarmT/this.alarmTotal);n.group.position.x=r.x+2.5+a*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){let t=this.app,e=this.player;this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}bust(t){let e=this.app;this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),Gn(this.player.c,.55),this.hitstop=.15,e.shake.add(.7),e.flash("red"),e.audio.play("bust"),e.audio.siren(!1),e.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),e.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,Gn(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let n of this.guards)n.state==="alert"&&(n.state="search",n.tx=n.lastX,n.tz=n.lastZ,n.hurry=2.4,n.susp=.5)}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let n=e.check(this,t);n!=="pending"&&(e.st=n,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,n=this.contracts.reduce((o,l)=>o+(l.st==="ok"?l.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),r=!this.spotted,a=[!0,e>=.7,r];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:r,kos:this.kos,stars:a,timeBonus:s,ghostBonus:r?1e3:0,contracts:this.contracts,contractBonus:n,diff:this.D.label,mult:this.D.mult,score:Math.round((this.lootGot+s+(r?1e3:0)+n)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var Ao=i=>440*Math.pow(2,(i-69)/12),Eo=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32,this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;this.apply(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setMuted(t){this.muted=t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,n={}){let s=this.ctx,r=s.currentTime+(n.delay||0),a=s.createOscillator(),o=s.createGain();a.type=n.type||"square",a.frequency.setValueAtTime(t,r),n.slide&&a.frequency.exponentialRampToValueAtTime(n.slide,r+e);let l=n.vol??.15;o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(l,r+(n.attack||.006)),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o).connect(n.dest||this.sfx),a.start(r),a.stop(r+e+.05)}noise(t,e={}){let n=this.ctx,s=n.currentTime+(e.delay||0),r=n.createBufferSource();r.buffer=this.noiseBuf;let a=n.createBiquadFilter();a.type=e.type||"bandpass",a.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&a.frequency.exponentialRampToValueAtTime(e.slide,s+t),a.Q.value=e.q??1;let o=n.createGain(),l=e.vol??.2;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(l,s+(e.attack||.005)),o.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(o).connect(e.dest||this.sfx),r.start(s,Math.random()*.5),r.stop(s+t+.05)}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let n=(r,a,o)=>this.tone(r,a,o),s=(r,a)=>this.noise(r,a);switch(t){case"step":s(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":s(.28,{vol:.3,freq:500,slide:3e3,q:2}),n(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let r=880*Math.pow(2,Math.min(e,14)/12);n(r,.07,{vol:.1}),n(r*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((r,a)=>n(r,.18,{type:"triangle",vol:.14,delay:a*.045})),s(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((r,a)=>n(r,.25,{type:"sine",vol:.16,delay:a*.06}));break;case"art":[523,659,784,1046,1318].forEach((r,a)=>n(r,.2,{type:"triangle",vol:.13,delay:a*.05}));break;case"ko":n(170,.28,{type:"sine",slide:45,vol:.55}),s(.14,{vol:.35,freq:900}),n(560,.12,{slide:260,vol:.12}),n(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":n(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":n(880,.09,{vol:.16}),n(1320,.16,{vol:.16,delay:.1});break;case"lost":n(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":s(.03,{vol:.22,freq:4e3,type:"highpass"}),n(1500+e*600,.04,{vol:.05});break;case"safe":n(110,.45,{type:"sine",slide:40,vol:.6}),s(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((r,a)=>n(r,.16,{vol:.09,delay:.1+a*.05}));for(let r=0;r<12;r++)n(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+r*.05});break;case"win":[523,659,784,1046].forEach((r,a)=>n(r,.22,{vol:.12,delay:a*.1})),[523,659,784].forEach(r=>n(r*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":n(392,.3,{type:"sawtooth",slide:370,vol:.12}),n(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),n(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let r=0;r<4;r++)n(r%2?660:880,.22,{type:"square",vol:.05,delay:r*.22});break;case"alarm":for(let r=0;r<6;r++)n(r%2?700:950,.15,{vol:.09,delay:r*.15});break;case"wake":n(300,.25,{type:"sawtooth",slide:520,vol:.1}),n(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"engine":s(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),n(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":n(700,.05,{vol:.08});break;case"star":n(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),n(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"throw":s(.12,{vol:.15,freq:1800,slide:900,q:1.5}),n(900,.06,{type:"triangle",vol:.06});break;case"clink":{let r=.05+e*.12;n(2400+Math.random()*300,.12,{type:"triangle",vol:r}),n(3700+Math.random()*300,.18,{type:"sine",vol:r*.7,delay:.02}),e>.5&&n(3100,.25,{type:"sine",vol:r*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((r,a)=>n(r,.12,{type:"square",vol:.07,delay:a*.06}));break;case"contract":[784,988,1175,1568].forEach((r,a)=>n(r,.16,{type:"triangle",vol:.12,delay:a*.07})),n(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":s(.35,{vol:.12,freq:300,slide:900,q:8}),n(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":n(62,.12,{type:"sine",slide:40,vol:.45}),n(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"nope":n(220,.12,{vol:.08}),n(180,.15,{vol:.08,delay:.1});break;case"combo":n(1320+e*80,.12,{type:"triangle",vol:.1});break}}siren(t){if(this.ctx){if(t&&!this.sir){let e=this.ctx,n=e.createOscillator(),s=e.createOscillator(),r=e.createGain(),a=e.createGain();n.type="sawtooth",n.frequency.value=780,s.type="square",s.frequency.value=1.6,r.gain.value=170,s.connect(r).connect(n.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,a.gain.value=1e-4,a.gain.setTargetAtTime(.045,e.currentTime,.2),n.connect(o).connect(a).connect(this.sfx),n.start(),s.start(),this.sir={o:n,lfo:s,g:a}}else if(!t&&this.sir){let e=this.sir,n=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,n,.1),e.o.stop(n+.5),e.lfo.stop(n+.5),this.sir=null}}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=60/108/4*(this.tension>.5?.8:1);for(this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.beat(this.step,this.nextT-t.currentTime),this.nextT+=e,this.step=(this.step+1)%32}beat(t,e){let s=[45,0,0,45,0,0,48,0,45,0,0,43,0,40,0,0,45,0,0,45,0,0,48,0,50,0,48,0,47,0,43,0][t],r=this.mus,a=this.tension>.5;s&&(this.tone(Ao(s+(a?12:0)),.2,{type:"triangle",vol:.32,delay:e,dest:r}),this.tone(Ao(s),.12,{type:"square",vol:.04,delay:e,dest:r})),t%4===2&&this.noise(.03,{vol:.08,freq:7e3,type:"highpass",delay:e,dest:r}),t%8===4&&this.tone(Ao(69+(t%16===4?3:0)),.06,{type:"sine",vol:.05,delay:e,dest:r}),a&&(t%4===0&&this.tone(120,.15,{type:"sine",slide:40,vol:.4,delay:e,dest:r}),t%2===1&&this.noise(.02,{vol:.06,freq:9e3,type:"highpass",delay:e,dest:r}),t%8===6&&this.tone(Ao(81),.08,{vol:.04,delay:e,dest:r}))}};var yr={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},kg=new Set([...Object.keys(yr),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),Gu=2.4,Co=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",l=>{kg.has(l.code)&&l.preventDefault(),this.setTouch(!1),!l.repeat&&(yr[l.code]&&(this.k[yr[l.code]]=1),(l.code==="Space"||l.code.startsWith("Shift"))&&(this.dashP=!0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!0,this.actP=!0),(l.code==="Escape"||l.code==="KeyP")&&this.emit("pause"),l.code==="KeyR"&&this.emit("restart"),l.code==="KeyM"&&this.emit("mute"),(l.code==="KeyQ"||l.code==="KeyG")&&(this.throwP=!0),this.emit("key",l.code))}),addEventListener("keyup",l=>{yr[l.code]&&(this.k[yr[l.code]]=0),(l.code==="KeyE"||l.code==="KeyF"||l.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",l=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}l.button===0&&(this.act=!0,this.actP=!0),l.button===2&&(this.dashP=!0),l.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",l=>{l.button===0&&(this.act=!1),this.dragLook=!1}),addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{this.active&&(this.locked||this.lockFailed&&this.dragLook)&&(this.lx+=l.movementX||0,this.ly+=l.movementY||0)}),addEventListener("pointermove",l=>{l.pointerType==="mouse"&&(l.movementX||l.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let l=this.locked;this.locked=document.pointerLockElement===e,l&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let n=t.joyzone;n.addEventListener("pointerdown",l=>{if(this.joy.id===-1){l.preventDefault(),this.joy.id=l.pointerId,this.joy.ox=l.clientX,this.joy.oy=l.clientY,this.joy.x=0,this.joy.y=0;try{n.setPointerCapture(l.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${l.clientX}px,${l.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),n.addEventListener("pointermove",l=>{if(l.pointerId!==this.joy.id)return;let h=56,c=l.clientX-this.joy.ox,f=l.clientY-this.joy.oy,u=Math.hypot(c,f);u>h&&(this.joy.ox+=c/u*(u-h),this.joy.oy+=f/u*(u-h),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,c=c/u*h,f=f/u*h),this.joy.x=c/h,this.joy.y=f/h,t.knob.style.transform=`translate(calc(-50% + ${c}px),calc(-50% + ${f}px))`});let s=l=>{l.pointerId===this.joy.id&&this.joyEnd()};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s);let r=t.lookzone;r.addEventListener("pointerdown",l=>{if(this.look.id===-1){l.preventDefault(),this.look.id=l.pointerId,this.look.x=l.clientX,this.look.y=l.clientY;try{r.setPointerCapture(l.pointerId)}catch{}}}),r.addEventListener("pointermove",l=>{l.pointerId===this.look.id&&(this.lx+=(l.clientX-this.look.x)*Gu,this.ly+=(l.clientY-this.look.y)*Gu,this.look.x=l.clientX,this.look.y=l.clientY)});let a=l=>{l.pointerId===this.look.id&&(this.look.id=-1)};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a);let o=(l,h,c)=>{l.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),l.classList.add("down"),h()});let f=()=>{l.classList.remove("down"),c&&c()};l.addEventListener("pointerup",f),l.addEventListener("pointercancel",f),l.addEventListener("pointerleave",f)};o(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),o(t.bDash,()=>{this.dashP=!0}),o(t.bThrow,()=>{this.throwP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),n=(this.k.d||0)-(this.k.u||0);if(e||n){let s=Math.hypot(e,n);e/=s,n/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let r=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*r,n=this.joy.y*r}}return t.x=e,t.y=n,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.actP=!1,this.dashP=!1,this.throwP=!1,this.lx=0,this.ly=0}};var vr=new Me,Vu=new Pt,Ro=new G,Po=class{constructor(t,e=360){this.max=e,this.mesh=new Ri(new ke(1,1,1),new ne,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,Vu.set(16777215)),t.add(this.mesh),this.list=[]}burst(t,e,n,s={}){let r=s.count??10,a=s.colors||[16777215];for(let o=0;o<r&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,h=Fe(.4,1)*(s.speed??3);this.list.push({x:t+Fe(-1,1)*(s.spread??.1),y:e,z:n+Fe(-1,1)*(s.spread??.1),vx:Math.cos(l)*h,vy:Fe(.5,1)*(s.up??3),vz:Math.sin(l)*h,g:s.gravity??9,life:Fe(.6,1)*(s.life??.7),t:0,s:Fe(.6,1.1)*(s.size??.12),c:a[Math.random()*a.length|0],rx:Fe(0,6),rs:Fe(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?Fe(2,5):0})}}update(t){let e=this.list,n=0;for(let s=e.length-1;s>=0;s--){let r=e[s];if(r.t+=t,r.t>=r.life){e[s]=e[e.length-1],e.pop();continue}}for(let s of e){let r=Math.exp(-s.drag*t);s.vx*=r,s.vz*=r,s.vy-=s.g*t,s.flut&&(s.vy=Math.max(s.vy,-.9),s.vx+=Math.sin(s.t*s.flut*2)*t*1.5),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.03&&(s.y=.03,s.vy*=-.4,s.vx*=.7,s.vz*=.7),s.rx+=s.rs*t;let a=1-s.t/s.life,o=s.s*Math.min(1,a*2.5);vr.position.set(s.x,s.y,s.z),vr.rotation.set(s.flut?Math.sin(s.rx)*.8:s.rx,s.rx*.7,s.flut?Math.cos(s.rx*.7)*.6:0),vr.scale.set(o*s.kx,o*s.ky,o*s.kz),vr.updateMatrix(),this.mesh.setMatrixAt(n,vr.matrix),this.mesh.setColorAt(n,Vu.setHex(s.c)),n++}this.mesh.count=n,n&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0}},Io=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t)}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},Lo=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,n,s,r="",a=1){let o=this.pool.pop();o||(o=document.createElement("div"),this.layer.appendChild(o)),o.className="ft "+r,o.textContent=t,o.style.opacity="1",o.style.display="",o.style.animation="none",o.offsetWidth,o.style.animation="",this.live.push({el:o,x:e,y:n,z:s,t:0,life:a})}update(t,e,n,s){for(let r=this.live.length-1;r>=0;r--){let a=this.live[r];if(a.t+=t,a.y+=t*.9,a.t>=a.life){a.el.style.display="none",this.pool.push(a.el),this.live.splice(r,1);continue}Ro.set(a.x,a.y,a.z).project(e),a.el.style.visibility=Ro.z>1?"hidden":"",a.el.style.transform=`translate(${(Ro.x+1)/2*n}px,${(1-Ro.y)/2*s}px) translate(-50%,-50%)`,a.t>a.life*.6&&(a.el.style.opacity=String(1-(a.t-a.life*.6)/(a.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var Do="safehouse-heist-v1",Rn=null,No=!1,Mr=!1,xe={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let i=window.CrazyGames&&window.CrazyGames.SDK;if(!i)return;await Promise.race([i.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=i.environment,(this.env==="crazygames"||this.env==="local")&&(Rn=i,this.available=!0)}catch(i){console.warn("[SDK] not available:",i&&i.message)}},_c(i){if(Rn)try{i(Rn)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(i=>i.game.loadingStart())},loadingStop(){this._c(i=>i.game.loadingStop())},gameplayStart(){No||(No=!0,this._c(i=>i.game.gameplayStart()))},gameplayStop(){No&&(No=!1,this._c(i=>i.game.gameplayStop()))},happytime(){this._c(i=>i.game.happytime())},ad(i){return new Promise(t=>{if(!Rn||!Mr){t(!1);return}let e=!1,n=s=>{e&&this.hooks.adEnd(),t(s)};try{Rn.ad.requestAd(i,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>n(!0),adError:s=>{console.warn("[SDK] ad error",s),n(!1)}})}catch{n(!1)}})},load(){try{let i=null;return Rn&&Rn.data&&(i=Rn.data.getItem(Do)),i==null&&(i=localStorage.getItem(Do)),i&&JSON.parse(i)||{}}catch{return{}}},store(i){let t=JSON.stringify(i);try{Rn&&Rn.data&&Rn.data.setItem(Do,t)}catch{}try{localStorage.setItem(Do,t)}catch{}}};var Gg=[{id:"safehouse",num:1,name:"Safe House",load:()=>import("./c-6NAWEG62.js")},{id:"bank",num:2,name:"The Bank",comingSoon:!0,load:()=>import("./c-RSSQC5GU.js")}],xc={};async function _c(i){return xc[i]||(xc[i]=(await Gg[i].load()).default),xc[i]}var Hu=3123354,Vg=2526336,Hg=2060134,Ms=2763837,Uo=3816786,Fo=class{constructor(){this.scene=new Ci,this.camera=new ze(60,1,.01,10),this.hemi=new Ii(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Li(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new on({vertexColors:!0});this.root=new re,this.scene.add(this.root);let n=c=>{let f=new te;if(f.box(0,-.075,-.285,.14,.14,.17,Hu,{faces:63}),f.box(0,-.082,-.24,.152,.152,.05,Vg,{faces:63}),f.box(0,-.08,-.36,.148,.148,.1,Hu,{faces:63}),f.box(0,-.082,-.44,.155,.155,.07,Hg,{faces:63}),f.box(0,-.082,-.448,.158,.02,.05,15905076,{faces:63}),c){f.box(0,-.065,-.5,.12,.13,.05,Ms,{faces:63}),f.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),f.box(0,-.07,-.57,.15,.06,.13,Ms,{faces:63,top:Uo});for(let u=0;u<4;u++)f.box(-.055+u*.037,-.072,-.67,.032,.05,.09,Ms,{faces:63,top:Uo});f.box(.09,-.07,-.56,.045,.05,.08,Ms,{faces:63,ry:-.5})}else{f.box(0,-.07,-.56,.13,.12,.14,Ms,{faces:63,top:Uo});for(let u=0;u<4;u++)f.box(-.045+u*.03,-.01,-.6,.027,.03,.05,Uo,{faces:63});f.box(-.07,-.04,-.55,.04,.05,.08,Ms,{faces:63})}return f.build()};this.R=new re,this.R.position.set(.2,-.27,0),this.R.rotation.y=.16,this.root.add(this.R);let s=new kt(n(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let r=new te,a=14168890,o=12108496,l=8029334;r.box(0,-.2,0,.034,.08,.034,o,{faces:63}),r.box(0,-.235,.012,.03,.04,.02,l,{faces:63}),r.box(0,-.12,0,.042,.42,.042,a,{faces:63}),r.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),r.box(0,.3,0,.038,.07,.038,o,{faces:63}),r.box(0,.36,-.035,.036,.036,.1,o,{faces:63,top:14673647}),r.box(0,.33,-.095,.034,.05,.03,o,{faces:63}),r.box(0,.305,-.1,.03,.03,.022,o,{faces:63}),r.box(.02,-.05,.022,.006,.3,.002,16747146,{faces:16}),this.bar=new kt(r.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.75,.95,.75),this.bar.rotation.set(-.35,0,-.25),this.R.add(this.bar),this.L=new re,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L);let h=new kt(n(!0),e);h.scale.set(.56,.6,1),this.L.add(h),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let n=this.R,s=this.L;this.swX=Je(this.swX,xn(-e.lookX*9e-4,-.06,.06),10,t),this.swY=Je(this.swY,xn(e.lookY*9e-4,-.06,.06),10,t),this.down=Je(this.down,e.busted?.7:0,6,t),this.kick=Je(this.kick,e.dash?1:0,14,t);let r=e.move,a=Math.cos(e.bob)*.014*r,o=-Math.abs(Math.sin(e.bob))*.02*r+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+a,this.swY+o-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let l=.14,h=0,c=0;if(e.punch>0){let u=1-e.punch;u<.3?l=u/.3*.9:u<.55?l=.9-(u-.3)/.25*1.9:l=-1+(u-.55)/.45*1.14,h=-l*.3}else e.crack&&(l=.35+Math.sin(this.t*38)*.08,h=Math.sin(this.t*23)*.1,c=-.06);n.rotation.x=Je(n.rotation.x,l,e.punch>0?40:14,t),n.rotation.z=Je(n.rotation.z,h,20,t),n.position.z=Je(n.position.z,c,12,t);let f=e.grab>0||e.crack?1:0;this.lIn=Je(this.lIn,f,f?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var bt=i=>document.getElementById(i),Wg={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? E / Click = knock out!","Behind a guard? Tap the hand = knock out!"],safe:["Hold E / Mouse to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},yc=class{constructor(){this.els={canvas:bt("c"),fxl:bt("fxl"),joyzone:bt("joyzone"),lookzone:bt("lookzone"),joy:bt("joy"),knob:bt("knob"),bAct:bt("bAct"),bDash:bt("bDash"),bThrow:bt("bThrow")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new G(15,30,40),this.camLook=new G(15,0,9),this._f=new G,this._d=new G,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await xe.init(),xe.loadingStart(),xe.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},xe.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=xe.load(),this.save.best=this.save.best||{},this.diff=gr[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new _o({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(this.dpr),e.toneMapping=nr,e.toneMappingExposure=1.15,this.scene=new Ci,this.scene.background=new Pt(16038282),this.scene.fog=new Fs(15778970,16,70),this.sky=wu(),this.scene.add(this.sky),e.autoClear=!1,this.camera=new ze(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new Fo,this.scene.add(new Ii(16770760,8022152,1.8));let n=new Li(16769208,1.4);n.position.set(-4,10,6),this.scene.add(n),this.audio=new Eo,this.audio.setMuted(!!this.save.muted),this.input=new Co(this.els),this.particles=new Po(this.scene),this.shake=new Io,this.floaters=new Lo(this.els.fxl),this.dust=new So(this.scene),this.game=new To(this),this.level=await _c(0),this.game.load(this.level),this.buildMinimap(),this.bindUI(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),xe.loadingStop(),bt("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,n)=>bt(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),n()});t("bPlay",()=>this.start());for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",n=>{n.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.diff=e.dataset.d,this.save.diff=this.diff,xe.store(this.save),this.showMenu()});t("lvl1",()=>this.start()),t("lvl2",()=>this.showSoon()),t("bResume",()=>this.resume()),t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>this.showSoon()),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.start()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}screen(t){for(let n of document.querySelectorAll(".screen"))n.classList.toggle("hidden",n.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),bt("fp").classList.toggle("hidden",!e),bt("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),bt("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){xe.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[pc("safehouse",this.diff)];for(let e of document.querySelectorAll("#diff button"))e.classList.toggle("on",e.dataset.d===this.diff);bt("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),bt("lvl1best").textContent=t?"Best "+En(t.score):"New!",this.screen("menu")}async showSoon(){xe.gameplayStop(),this.state="soon";let t=await _c(1);bt("soonName").textContent=t.name,bt("soonList").innerHTML=t.teaser.map(e=>`<li>${e}</li>`).join(""),this.screen("soon")}starsHTML(t){let e="";for(let n=0;n<3;n++)e+=`<span class="${n<t?"on":""}">\u2605</span>`;return e}start(){this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.renderContracts(this.game.contracts),bt("ctoast").classList.add("hidden"),this.setObjective("Crack the safe!"),this.hint("move"),xe.gameplayStart()}async retry(){await this.maybeMidgame(),this.start()}pause(){this.state==="play"&&(this.audio.siren(!1),this.state="pause",xe.gameplayStop(),this.screen("pause"))}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),xe.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),xe.store(this.save),this.updateMuteIcon()}updateMuteIcon(){bt("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!Mr||!xe.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await xe.ad("midgame"))}async reviveAd(){if(!Mr||!xe.available||this.game.revived)return;this.state="ad",await xe.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),xe.gameplayStart()):(this.state="busted",bt("bRevive").classList.add("hidden"))}hint(t){!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t)||this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=bt("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=Wg[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let n=bt("prompt"),s=bt("ring"),r=this.input&&this.input.touch,a=t==="hide"?r?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?r?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?r?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?r?"HOLD \u270B TO CRACK":"HOLD E / CLICK TO CRACK":t==="ko"?r?"TAP \u270B TO KNOCK OUT":"E / CLICK: KNOCK OUT":"";n.dataset.k!==t&&(n.dataset.k=t,n.textContent=a,n.classList.toggle("hidden",!t),bt("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t),this.els.bAct.lastChild.textContent=t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="panel")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=bt("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let n=this.game;if(bt("lootv").textContent=En(n.lootGot),bt("lootp").textContent=Math.round(n.lootGot/n.lootTotal*100)+"%",bt("lootbar").style.width=Math.min(100,n.lootGot/n.lootTotal*100)+"%",bt("lootbar").classList.toggle("star",n.lootGot/n.lootTotal>=.7),e)return;let s=bt("loot");s.classList.remove("punch","bigpunch"),s.offsetWidth,s.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(bt("alarm").classList.toggle("hidden",!t),bt("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let n=bt("alarmwhy");n.textContent=e,n.classList.remove("hidden"),n.style.animation="none",n.offsetWidth,n.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>n.classList.add("hidden"),2600)}}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,bt("alarmt").textContent=bo(e),bt("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t){bt("ctr").innerHTML=t.map(e=>`<li class="${e.st}"><i></i>${e.text}<b>+${En(e.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let n=bt("ctoast");n.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${En(t.bonus)}</b>`,n.classList.remove("hidden"),n.style.animation="none",n.offsetWidth,n.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>n.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onHide(t){bt("slats").classList.toggle("hidden",!t),bt("xh").classList.toggle("hidden",t)}onCoins(t){let e=bt("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}flash(t){let e=bt("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){bt("touch").classList.add("hidden"),bt("fp").classList.add("hidden"),this.input.exitLock()}onBusted(){this.state="busted",this.audio.siren(!1),xe.gameplayStop(),bt("bRevive").classList.toggle("hidden",!Mr||!xe.available||this.game.revived),bt("bustTip").textContent=this.game.policeBusted?"The police arrived! Knock out alerted guards before they radio in, or disarm the keypad by the front door.":["Tip: guards can't see behind them. Sneak up and knock them out!","Tip: dashing is loud. Walk near guards and the sleeping owner.","Tip: break line of sight and alerted guards will lose you.","Tip: the camera in the office sweeps. Time your move!","Tip: try the side door on the east of the house."][Math.random()*5|0],this.screen("busted")}onWin(t){this.state="result",this.audio.siren(!1),bt("alarm").classList.add("hidden"),bt("siren").classList.remove("on"),xe.gameplayStop(),xe.happytime();let e=t.stars.filter(Boolean).length,n=pc("safehouse",this.diff),s=this.save.best[n]||{score:0,stars:0},r=t.score>s.score;this.save.best[n]={score:Math.max(s.score,t.score),stars:Math.max(s.stars,e)},this.save.contracts=(this.save.contracts||0)+t.contracts.filter(f=>f.st==="ok").length,xe.store(this.save),bt("rStars").innerHTML=this.starsHTML(0);let a=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];bt("rGoals").innerHTML=t.stars.map((f,u)=>`<li class="${f?"ok":""}">${f?"\u2714":"\u2716"} ${a[u]}</li>`).join(""),bt("rLoot").textContent=En(t.loot),bt("rTime").textContent=bo(t.time)+(t.timeBonus?`  (+${En(t.timeBonus)})`:""),bt("rGhost").textContent=t.ghost?"+"+En(t.ghostBonus):"\u2014",bt("rScore").textContent="$0",bt("rCtr").innerHTML=t.contracts.map(f=>`<li class="${f.st==="ok"?"ok":"no"}">${f.st==="ok"?"\u2714":"\u2716"} ${f.text}<b>${f.st==="ok"?"+"+En(f.bonus):"\u2014"}</b></li>`).join(""),bt("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),bt("rBest").textContent=(r?"NEW BEST!":"Best "+En(this.save.best[n].score))+" \xB7 "+t.diff,bt("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,bt("rBest").classList.toggle("new",r),this.screen("result");let o=bt("rStars").children;t.stars.forEach((f,u)=>{f&&setTimeout(()=>{this.state==="result"&&(o[u].classList.add("on","pop"),this.audio.play("star",u),this.shake.add(.12))},450+u*380)});let l=performance.now(),h=1100,c=()=>{let f=Math.min(1,(performance.now()-l)/h);bt("rScore").textContent=En(t.score*(1-Math.pow(1-f,3))),f<1&&this.state==="result"&&requestAnimationFrame(c)};c()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let n=this.state;n==="play"||n==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(n==="menu"||n==="soon")&&this.game.update(e,!0),n!=="pause"&&n!=="ad"&&(this.particles.update(e),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),n!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),this.dust.points.visible=n!=="menu"&&n!=="soon",this.floaters.update(n==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),n==="play"&&this.updateHud(),this.audio.tension=this.game.tension,bt("vignette").style.opacity=n==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.vm.visible=(n==="play"||n==="busted"||n==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}updateHud(){let t=this.game,e=t.player,n=Math.floor(t.time);n!==this.lastSec&&(this.lastSec=n,bt("time").textContent=bo(n)),this.drawMinimap();let s=bt("wp"),r,a,o;t.hasStash?(r=t.L.exit.x,a=t.L.exit.z,o="VAN"):(r=t.L.safe.x+.5,a=t.L.safe.y+.5,o="SAFE");let l=Math.hypot(r-e.x,a-e.z);if(t.state!=="play"||l<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let c=this._d.set(r,1.1,a).project(this.camera),f=c.x,u=c.y,m=c.z>1;m&&(f=-f,u=-u);let g=.88,v=m||Math.abs(f)>g||Math.abs(u)>g;if(v){let d=g/Math.max(Math.abs(f),Math.abs(u),.001);f*=d,u*=d,m&&Math.abs(u)<g-.01&&(u=-g)}s.classList.toggle("edge",v),s.style.transform=`translate(${(f+1)/2*this.w}px,${(1-u)/2*this.h}px) translate(-50%,-50%)`;let p=o+" "+Math.round(l*1.5)+"m";s.dataset.t!==p&&(s.dataset.t=p,s.lastChild.textContent=p)}let h=bt("ind");t.guards.forEach((c,f)=>{let u=h.children[f];u||(u=document.createElement("i"),h.appendChild(u));let m=c.state==="alert",g=!m&&(c.susp>.04||c.state==="investigate"||c.state==="search");if(!m&&!g){u.style.display="none";return}let v=tn(e.face,Math.atan2(c.x-e.x,c.z-e.z));u.style.display="",u.className=m?"alert":"",u.style.opacity=m?1:(.35+c.susp*.65).toFixed(2),u.style.transform=`translate(-50%,-50%) rotate(${-v*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,n=document.createElement("canvas");n.width=t.W*e,n.height=t.H*e;let s=n.getContext("2d");for(let a=0;a<t.H;a++)for(let o=0;o<t.W;o++){let l=a*t.W+o,h=t.ch[l];s.fillStyle=h==="#"?"#1d2140":!t.walk[l]&&!t.outdoor[l]?"#a7a3bd":t.outdoor[l]?t.floor[l]==="road"?"#7d8596":"#5fae4c":"#efe9df",s.fillRect(o*e,a*e,e,e)}this.mmBase=n,this.mmS=e;let r=bt("mm");r.width=n.width,r.height=n.height,this.mmCtx=r.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,n=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let l of t.loot)e.fillStyle=l.type==="cash"?"#2fbf5a":l.type==="gold"?"#f5b301":l.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(l.x*n-1.5,l.z*n-1.5,3,3);t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*n,(t.L.safe.y+.15)*n,n*.7,n*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*n,t.L.exit.z*n,n,0,6.3),e.stroke());for(let l of t.guards){let h=l.state==="ko"||l.state==="getup"||l.state==="sleep",c=l.state==="alert"?"#ff3b4e":l.susp>.25?"#ff9f1c":h?"#8a8fae":"#3f6fe0";if(!h){e.fillStyle=l.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(l.x*n,l.z*n);let f=-l.face+Math.PI/2;e.arc(l.x*n,l.z*n,l.range*n,f-l.fov/2,f+l.fov/2),e.closePath(),e.fill()}e.fillStyle=c,e.beginPath(),e.arc(l.x*n,l.z*n,2.6,0,6.3),e.fill()}let r=-s.face+Math.PI/2,a=s.x*n,o=s.z*n;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(a+Math.cos(r)*5,o+Math.sin(r)*5),e.lineTo(a+Math.cos(r+2.5)*4,o+Math.sin(r+2.5)*4),e.lineTo(a+Math.cos(r-2.5)*4,o+Math.sin(r-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,n=e.L,s=this.camera,r=this.aspect<1?1+(1-this.aspect)*1.6:1,a;if(this.state==="menu"||this.state==="soon"){let o=this.time*.07,l=this._f.set(n.W/2,0,n.H/2-2);s.position.set(l.x+Math.sin(o)*17*r,19*r,l.z+Math.cos(o)*17*r),s.lookAt(l),a=42}else{e.applyCamera(s,t),a=(this.aspect<1?84:70)+e.fovKick;let o=bt("speed"),l=Math.min(1,e.fovKick/9).toFixed(2);o.dataset.o!==l&&(o.dataset.o=l,o.style.opacity=l)}Math.abs(s.fov-a)>.01&&(s.fov=a,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},Wu=new yc;window.__app=Wu;Wu.boot().catch(i=>{console.error(i);let t=bt("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
