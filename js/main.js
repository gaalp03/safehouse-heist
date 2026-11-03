var Qh=0,ec=1,tf=2;var ga=1,ef=2,Ps=3,kn=0,Qe=1,Oe=2,Zn=0,Ls=1,Le=2,ic=3,nc=4,nf=5;var Jn=100,sf=101,af=102,rf=103,of=104,lf=200,cf=201,hf=202,ff=203,sc=204,ac=205,uf=206,df=207,pf=208,mf=209,xf=210,gf=211,yf=212,vf=213,_f=214,_r=0,br=1,Mr=2,bs=3,Sr=4,wr=5,Tr=6,Ar=7,to=0,bf=1,Mf=2,Qi=0,rc=1,oc=2,lc=3,ya=4,cc=5,hc=6,fc=7;var uc=300,jn=301,Is=302,eo=303,io=304,fn=1e3,fi=1001,Er=1002,Ke=1003,Sf=1004;var va=1005;var ui=1006,no=1007;var mn=1008;var xi=1009,dc=1010,pc=1011,ks=1012,so=1013,Oi=1014,Ci=1015,Fi=1016,ao=1017,ro=1018,Qn=1020,mc=35902,xc=35899,gc=1021,yc=1022,zi=1023,un=1026,xn=1027,oo=1028,lo=1029,Dn=1030,co=1031;var ho=1033,_a=33776,ba=33777,Ma=33778,Sa=33779,fo=35840,uo=35841,po=35842,mo=35843,xo=36196,go=37492,yo=37496,vo=37488,_o=37489,wa=37490,bo=37491,Mo=37808,So=37809,wo=37810,To=37811,Ao=37812,Eo=37813,Co=37814,Ro=37815,Po=37816,Lo=37817,Io=37818,ko=37819,Do=37820,No=37821,Uo=36492,Oo=36494,Fo=36495,zo=36283,Bo=36284,Ta=36285,Ho=36286;var Zs=2300,Cr=2301,yr=2302,Yl=2303,$l=2400,Kl=2401,Zl=2402;var wf=3200;var Go=0,Tf=1,gn="",Me="srgb",Js="srgb-linear",js="linear",fe="srgb";var vr=7680;var Af=519,Ef=512,Cf=513,Rf=514,vc=515,Pf=516,Lf=517,_c=518,bc=519,If=35044;var Mc="300 es",Ei=2e3,Ms=2001;function fd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ud(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kf(){let n=Qs("canvas");return n.style.display="block",n}var Mh={},Ss=null;function Sc(...n){let t="THREE."+n.shift();Ss?Ss("log",t,...n):console.log(t,...n)}function Df(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=Df(n);let t="THREE."+n.shift();if(Ss)Ss("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=Df(n);let t="THREE."+n.shift();if(Ss)Ss("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ks(...n){let t=n.join(" ");t in Mh||(Mh[t]=!0,Ft(...n))}function Nf(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}var Uf={[_r]:_r,[Mr]:Tr,[Sr]:Sr,[bs]:wr,[br]:br,[Tr]:Mr,[Ar]:Ar,[wr]:bs},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wl=Math.PI/180,Rr=180/Math.PI;function Aa(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[t&255]+ri[t>>8&255]+"-"+ri[t>>16&15|64]+ri[t>>24&255]+"-"+ri[e&63|128]+ri[e>>8&255]+"-"+ri[e>>16&255]+ri[e>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function dd(n,t){return(n%t+t)%t}function Tl(n,t,e){return(1-e)*n+e*t}function Of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pd(n,t){if(t.constructor===Float32Array)return n;let e=wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function md(n,t){if(t.constructor===Float32Array)return n;let e=wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Rc=class Rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;var qt=Rc,Yi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,l){let o=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],f=a[r+0],x=a[r+1],g=a[r+2],m=a[r+3];if(u!==m||o!==f||h!==x||c!==g){let d=o*f+h*x+c*g+u*m;d<0&&(f=-f,x=-x,g=-g,m=-m,d=-d);let p=1-l;if(d<.9995){let v=Math.acos(d),b=Math.sin(v);p=Math.sin(p*v)/b,l=Math.sin(l*v)/b,o=o*p+f*l,h=h*p+x*l,c=c*p+g*l,u=u*p+m*l}else{o=o*p+f*l,h=h*p+x*l,c=c*p+g*l,u=u*p+m*l;let v=1/Math.sqrt(o*o+h*h+c*c+u*u);o*=v,h*=v,c*=v,u*=v}}t[e]=o,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,a,r){let l=i[s],o=i[s+1],h=i[s+2],c=i[s+3],u=a[r],f=a[r+1],x=a[r+2],g=a[r+3];return t[e]=l*g+c*u+o*x-h*f,t[e+1]=o*g+c*f+h*u-l*x,t[e+2]=h*g+c*x+l*f-o*u,t[e+3]=c*g-l*u-o*f-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,r=t._order,l=Math.cos,o=Math.sin,h=l(i/2),c=l(s/2),u=l(a/2),f=o(i/2),x=o(s/2),g=o(a/2);switch(r){case"XYZ":this._x=f*c*u+h*x*g,this._y=h*x*u-f*c*g,this._z=h*c*g+f*x*u,this._w=h*c*u-f*x*g;break;case"YXZ":this._x=f*c*u+h*x*g,this._y=h*x*u-f*c*g,this._z=h*c*g-f*x*u,this._w=h*c*u+f*x*g;break;case"ZXY":this._x=f*c*u-h*x*g,this._y=h*x*u+f*c*g,this._z=h*c*g+f*x*u,this._w=h*c*u-f*x*g;break;case"ZYX":this._x=f*c*u-h*x*g,this._y=h*x*u+f*c*g,this._z=h*c*g-f*x*u,this._w=h*c*u+f*x*g;break;case"YZX":this._x=f*c*u+h*x*g,this._y=h*x*u+f*c*g,this._z=h*c*g-f*x*u,this._w=h*c*u-f*x*g;break;case"XZY":this._x=f*c*u-h*x*g,this._y=h*x*u-f*c*g,this._z=h*c*g+f*x*u,this._w=h*c*u+f*x*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],l=e[5],o=e[9],h=e[2],c=e[6],u=e[10],f=i+l+u;if(f>0){let x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(c-o)*x,this._y=(a-h)*x,this._z=(r-s)*x}else if(i>l&&i>u){let x=2*Math.sqrt(1+i-l-u);this._w=(c-o)/x,this._x=.25*x,this._y=(s+r)/x,this._z=(a+h)/x}else if(l>u){let x=2*Math.sqrt(1+l-i-u);this._w=(a-h)/x,this._x=(s+r)/x,this._y=.25*x,this._z=(o+c)/x}else{let x=2*Math.sqrt(1+u-i-l);this._w=(r-s)/x,this._x=(a+h)/x,this._y=(o+c)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,l=e._x,o=e._y,h=e._z,c=e._w;return this._x=i*c+r*l+s*h-a*o,this._y=s*c+r*o+a*l-i*h,this._z=a*c+r*h+i*o-s*l,this._w=r*c-i*l-s*o-a*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,a=-a,r=-r,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),c=Math.sin(h);o=Math.sin(o*h)/c,e=Math.sin(e*h)/c,this._x=this._x*o+i*e,this._y=this._y*o+s*e,this._z=this._z*o+a*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+s*e,this._z=this._z*o+a*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pc=class Pc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,l=t.z,o=t.w,h=2*(r*s-l*i),c=2*(l*e-a*s),u=2*(a*i-r*e);return this.x=e+o*h+r*u-l*c,this.y=i+o*c+l*h-a*u,this.z=s+o*u+a*c-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,r=e.x,l=e.y,o=e.z;return this.x=s*o-a*l,this.y=a*r-i*o,this.z=i*l-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;var X=Pc,Al=new X,Sh=new Yi,Lc=class Lc{constructor(t,e,i,s,a,r,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,l,o,h)}set(t,e,i,s,a,r,l,o,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=l,c[3]=e,c[4]=a,c[5]=o,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],l=i[3],o=i[6],h=i[1],c=i[4],u=i[7],f=i[2],x=i[5],g=i[8],m=s[0],d=s[3],p=s[6],v=s[1],b=s[4],y=s[7],M=s[2],S=s[5],_=s[8];return a[0]=r*m+l*v+o*M,a[3]=r*d+l*b+o*S,a[6]=r*p+l*y+o*_,a[1]=h*m+c*v+u*M,a[4]=h*d+c*b+u*S,a[7]=h*p+c*y+u*_,a[2]=f*m+x*v+g*M,a[5]=f*d+x*b+g*S,a[8]=f*p+x*y+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],l=t[5],o=t[6],h=t[7],c=t[8];return e*r*c-e*l*h-i*a*c+i*l*o+s*a*h-s*r*o}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=c*r-l*h,f=l*o-c*a,x=h*a-r*o,g=e*u+i*f+s*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(s*h-c*i)*m,t[2]=(l*i-s*r)*m,t[3]=f*m,t[4]=(c*e-s*o)*m,t[5]=(s*a-l*e)*m,t[6]=x*m,t[7]=(i*o-h*e)*m,t[8]=(r*e-i*a)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,l){let o=Math.cos(a),h=Math.sin(a);return this.set(i*o,i*h,-i*(o*r+h*l)+r+t,-s*h,s*o,-s*(-h*r+o*l)+l+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;var Gt=Lc,El=new Gt,wh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){let n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===fe&&(s.r=hn(s.r),s.g=hn(s.g),s.b=hn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:t,whitePoint:i,transfer:js,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),n}var se=xd();function hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,Pr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=Qs("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=hn(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hn(e[i]/255)*255):e[i]=hn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Aa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,l=s.length;r<l;r++)s[r].isDataTexture?a.push(Cl(s[r].image)):a.push(Cl(s[r]))}else a=Cl(s);i.url=a}return e||(t.images[this.uuid]=i),i}};function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var yd=0,Rl=new X,di=class n extends qi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fi,s=fi,a=ui,r=mn,l=zi,o=xi,h=n.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Aa(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=uc;di.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,o=t.elements,h=o[0],c=o[4],u=o[8],f=o[1],x=o[5],g=o[9],m=o[2],d=o[6],p=o[10];if(Math.abs(c-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(h+x+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(x+1)/2,M=(p+1)/2,S=(c+f)/4,_=(u+m)/4,w=(g+d)/4;return b>y&&b>M?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=S/i,a=_/i):y>M?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=S/s,a=w/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=_/a,s=w/a),this.set(i,s,a,e),this}let v=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(u-m)/v,this.z=(f-c)/v,this.w=Math.acos((h+x+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;var Se=Ic,Lr=class extends qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new di({width:t,height:e,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Lr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ta=class extends di{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends di{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Qr=class Qr{constructor(t,e,i,s,a,r,l,o,h,c,u,f,x,g,m,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,l,o,h,c,u,f,x,g,m,d)}set(t,e,i,s,a,r,l,o,h,c,u,f,x,g,m,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=l,p[13]=o,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=x,p[7]=g,p[11]=m,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qr().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),a=1/os.setFromMatrixColumn(t,1).length(),r=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),l=Math.sin(i),o=Math.cos(s),h=Math.sin(s),c=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){let f=r*c,x=r*u,g=l*c,m=l*u;e[0]=o*c,e[4]=-o*u,e[8]=h,e[1]=x+g*h,e[5]=f-m*h,e[9]=-l*o,e[2]=m-f*h,e[6]=g+x*h,e[10]=r*o}else if(t.order==="YXZ"){let f=o*c,x=o*u,g=h*c,m=h*u;e[0]=f+m*l,e[4]=g*l-x,e[8]=r*h,e[1]=r*u,e[5]=r*c,e[9]=-l,e[2]=x*l-g,e[6]=m+f*l,e[10]=r*o}else if(t.order==="ZXY"){let f=o*c,x=o*u,g=h*c,m=h*u;e[0]=f-m*l,e[4]=-r*u,e[8]=g+x*l,e[1]=x+g*l,e[5]=r*c,e[9]=m-f*l,e[2]=-r*h,e[6]=l,e[10]=r*o}else if(t.order==="ZYX"){let f=r*c,x=r*u,g=l*c,m=l*u;e[0]=o*c,e[4]=g*h-x,e[8]=f*h+m,e[1]=o*u,e[5]=m*h+f,e[9]=x*h-g,e[2]=-h,e[6]=l*o,e[10]=r*o}else if(t.order==="YZX"){let f=r*o,x=r*h,g=l*o,m=l*h;e[0]=o*c,e[4]=m-f*u,e[8]=g*u+x,e[1]=u,e[5]=r*c,e[9]=-l*c,e[2]=-h*c,e[6]=x*u+g,e[10]=f-m*u}else if(t.order==="XZY"){let f=r*o,x=r*h,g=l*o,m=l*h;e[0]=o*c,e[4]=-u,e[8]=h*c,e[1]=f*u+m,e[5]=r*c,e[9]=x*u-g,e[2]=g*u-x,e[6]=l*c,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,_d)}lookAt(t,e,i){let s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),bn.crossVectors(i,yi),bn.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),bn.crossVectors(i,yi)),bn.normalize(),Ya.crossVectors(yi,bn),s[0]=bn.x,s[4]=Ya.x,s[8]=yi.x,s[1]=bn.y,s[5]=Ya.y,s[9]=yi.y,s[2]=bn.z,s[6]=Ya.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],l=i[4],o=i[8],h=i[12],c=i[1],u=i[5],f=i[9],x=i[13],g=i[2],m=i[6],d=i[10],p=i[14],v=i[3],b=i[7],y=i[11],M=i[15],S=s[0],_=s[4],w=s[8],D=s[12],L=s[1],I=s[5],F=s[9],A=s[13],C=s[2],B=s[6],N=s[10],U=s[14],G=s[3],W=s[7],K=s[11],Z=s[15];return a[0]=r*S+l*L+o*C+h*G,a[4]=r*_+l*I+o*B+h*W,a[8]=r*w+l*F+o*N+h*K,a[12]=r*D+l*A+o*U+h*Z,a[1]=c*S+u*L+f*C+x*G,a[5]=c*_+u*I+f*B+x*W,a[9]=c*w+u*F+f*N+x*K,a[13]=c*D+u*A+f*U+x*Z,a[2]=g*S+m*L+d*C+p*G,a[6]=g*_+m*I+d*B+p*W,a[10]=g*w+m*F+d*N+p*K,a[14]=g*D+m*A+d*U+p*Z,a[3]=v*S+b*L+y*C+M*G,a[7]=v*_+b*I+y*B+M*W,a[11]=v*w+b*F+y*N+M*K,a[15]=v*D+b*A+y*U+M*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],l=t[5],o=t[9],h=t[13],c=t[2],u=t[6],f=t[10],x=t[14],g=t[3],m=t[7],d=t[11],p=t[15],v=o*x-h*f,b=l*x-h*u,y=l*f-o*u,M=r*x-h*c,S=r*f-o*c,_=r*u-l*c;return e*(m*v-d*b+p*y)-i*(g*v-d*M+p*S)+s*(g*b-m*M+p*_)-a*(g*y-m*S+d*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],r=t[5],l=t[9],o=t[2],h=t[6],c=t[10];return e*(r*c-l*h)-i*(a*c-l*o)+s*(a*h-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=t[9],f=t[10],x=t[11],g=t[12],m=t[13],d=t[14],p=t[15],v=e*l-i*r,b=e*o-s*r,y=e*h-a*r,M=i*o-s*l,S=i*h-a*l,_=s*h-a*o,w=c*m-u*g,D=c*d-f*g,L=c*p-x*g,I=u*d-f*m,F=u*p-x*m,A=f*p-x*d,C=v*A-b*F+y*I+M*L-S*D+_*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return t[0]=(l*A-o*F+h*I)*B,t[1]=(s*F-i*A-a*I)*B,t[2]=(m*_-d*S+p*M)*B,t[3]=(f*S-u*_-x*M)*B,t[4]=(o*L-r*A-h*D)*B,t[5]=(e*A-s*L+a*D)*B,t[6]=(d*y-g*_-p*b)*B,t[7]=(c*_-f*y+x*b)*B,t[8]=(r*F-l*L+h*w)*B,t[9]=(i*L-e*F-a*w)*B,t[10]=(g*S-m*y+p*v)*B,t[11]=(u*y-c*S-x*v)*B,t[12]=(l*D-r*I-o*w)*B,t[13]=(e*I-i*D+s*w)*B,t[14]=(m*b-g*M-d*v)*B,t[15]=(c*M-u*b+f*v)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,l=t.y,o=t.z,h=a*r,c=a*l;return this.set(h*r+i,h*l-s*o,h*o+s*l,0,h*l+s*o,c*l+i,c*o-s*r,0,h*o-s*l,c*o+s*r,a*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,r=e._y,l=e._z,o=e._w,h=a+a,c=r+r,u=l+l,f=a*h,x=a*c,g=a*u,m=r*c,d=r*u,p=l*u,v=o*h,b=o*c,y=o*u,M=i.x,S=i.y,_=i.z;return s[0]=(1-(m+p))*M,s[1]=(x+y)*M,s[2]=(g-b)*M,s[3]=0,s[4]=(x-y)*S,s[5]=(1-(f+p))*S,s[6]=(d+v)*S,s[7]=0,s[8]=(g+b)*_,s[9]=(d-v)*_,s[10]=(1-(f+m))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let r=os.set(s[0],s[1],s[2]).length(),l=os.set(s[4],s[5],s[6]).length(),o=os.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ii.copy(this);let h=1/r,c=1/l,u=1/o;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=c,Ii.elements[5]*=c,Ii.elements[6]*=c,Ii.elements[8]*=u,Ii.elements[9]*=u,Ii.elements[10]*=u,e.setFromRotationMatrix(Ii),i.x=r,i.y=l,i.z=o,this}makePerspective(t,e,i,s,a,r,l=Ei,o=!1){let h=this.elements,c=2*a/(e-t),u=2*a/(i-s),f=(e+t)/(e-t),x=(i+s)/(i-s),g,m;if(o)g=a/(r-a),m=r*a/(r-a);else if(l===Ei)g=-(r+a)/(r-a),m=-2*r*a/(r-a);else if(l===Ms)g=-r/(r-a),m=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=c,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=u,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,a,r,l=Ei,o=!1){let h=this.elements,c=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),x=-(i+s)/(i-s),g,m;if(o)g=1/(r-a),m=r/(r-a);else if(l===Ei)g=-2/(r-a),m=-(r+a)/(r-a);else if(l===Ms)g=-1/(r-a),m=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=c,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=u,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=g,h[14]=m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Qr.prototype.isMatrix4=!0;var de=Qr,os=new X,Ii=new de,vd=new X(0,0,0),_d=new X(1,1,1),bn=new X,Ya=new X,yi=new X,Ah=new de,Eh=new Yi,dn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],l=s[8],o=s[1],h=s[5],c=s[9],u=s[2],f=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,x),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-c,x),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,Ch=new X,ls=new Yi,an=new de,$a=new X,Gs=new X,Md=new X,Sd=new Yi,Rh=new X(1,0,0),Ph=new X(0,1,0),Lh=new X(0,0,1),Ih={type:"added"},wd={type:"removed"},cs={type:"childadded",child:null},Pl={type:"childremoved",child:null},Re=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new dn,i=new Yi,s=new X(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Gt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$a.copy(t):$a.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Gs,$a,this.up):an.lookAt($a,Gs,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(an),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),cs.child=t,this.dispatchEvent(cs),cs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let r=0,l=a.length;r<l;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,c=o.length;h<c;h++){let u=o[h];a(t.shapes,u)}else a(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(a(t.materials,this.material[o]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(a(t.animations,o))}}if(e){let l=r(t.geometries),o=r(t.materials),h=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),x=r(t.animations),g=r(t.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(l){let o=[];for(let h in l){let c=l[h];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Re.DEFAULT_UP=new X(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(let m of t.hand.values()){let d=e.getJointPose(m,i),p=this._getHandJoint(h,m);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),x=.02,g=.005;h.inputState.pinching&&f>x+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=x-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=a!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Ll(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Nt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=dd(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Ll(r,a,t+1/3),this.g=Ll(r,a,t),this.b=Ll(r,a,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function i(a){a!==void 0&&parseFloat(a)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],l=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return se.workingToColorSpace(oi.copy(this),t),Math.round(ae(oi.r*255,0,255))*65536+Math.round(ae(oi.g*255,0,255))*256+Math.round(ae(oi.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(oi.copy(this),e);let i=oi.r,s=oi.g,a=oi.b,r=Math.max(i,s,a),l=Math.min(i,s,a),o,h,c=(l+r)/2;if(l===r)o=0,h=0;else{let u=r-l;switch(h=c<=.5?u/(r+l):u/(2-r-l),r){case i:o=(s-a)/u+(s<a?6:0);break;case s:o=(a-i)/u+2;break;case a:o=(i-s)/u+4;break}o/=6}return t.h=o,t.s=h,t.l=c,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=Me){se.workingToColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,s=oi.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Ka);let i=Tl(Mn.h,Ka.h,e),s=Tl(Mn.s,Ka.s,e),a=Tl(Mn.l,Ka.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new Nt;Nt.NAMES=Ff;var ia=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ki=new X,rn=new X,Il=new X,on=new X,hs=new X,fs=new X,kh=new X,kl=new X,Dl=new X,Nl=new X,Ul=new Se,Ol=new Se,Fl=new Se,An=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ki.subVectors(t,e),s.cross(ki);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){ki.subVectors(s,e),rn.subVectors(i,e),Il.subVectors(t,e);let r=ki.dot(ki),l=ki.dot(rn),o=ki.dot(Il),h=rn.dot(rn),c=rn.dot(Il),u=r*h-l*l;if(u===0)return a.set(0,0,0),null;let f=1/u,x=(h*o-l*c)*f,g=(r*c-l*o)*f;return a.set(1-x-g,g,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,i,s,a,r,l,o){return this.getBarycoord(t,e,i,s,on)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,on.x),o.addScaledVector(r,on.y),o.addScaledVector(l,on.z),o)}static getInterpolatedAttribute(t,e,i,s,a,r){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(t,e),Ol.fromBufferAttribute(t,i),Fl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ul,a.x),r.addScaledVector(Ol,a.y),r.addScaledVector(Fl,a.z),r}static isFrontFacing(t,e,i,s){return ki.subVectors(i,e),rn.subVectors(t,e),ki.cross(rn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),ki.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,r,l;hs.subVectors(s,i),fs.subVectors(a,i),kl.subVectors(t,i);let o=hs.dot(kl),h=fs.dot(kl);if(o<=0&&h<=0)return e.copy(i);Dl.subVectors(t,s);let c=hs.dot(Dl),u=fs.dot(Dl);if(c>=0&&u<=c)return e.copy(s);let f=o*u-c*h;if(f<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(i).addScaledVector(hs,r);Nl.subVectors(t,a);let x=hs.dot(Nl),g=fs.dot(Nl);if(g>=0&&x<=g)return e.copy(a);let m=x*h-o*g;if(m<=0&&h>=0&&g<=0)return l=h/(h-g),e.copy(i).addScaledVector(fs,l);let d=c*g-x*u;if(d<=0&&u-c>=0&&x-g>=0)return kh.subVectors(a,s),l=(u-c)/(u-c+(x-g)),e.copy(s).addScaledVector(kh,l);let p=1/(d+m+f);return r=m*p,l=f*p,e.copy(i).addScaledVector(hs,r).addScaledVector(fs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$i=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,l=a.count;r<l;r++)t.isMesh===!0?t.getVertexPosition(r,Di):Di.fromBufferAttribute(a,r),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ja.subVectors(this.max,Vs),us.subVectors(t.a,Vs),ds.subVectors(t.b,Vs),ps.subVectors(t.c,Vs),Sn.subVectors(ds,us),wn.subVectors(ps,ds),Gn.subVectors(us,ps);let e=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!zl(e,us,ds,ps,Ja)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,us,ds,ps,Ja))?!1:(ja.crossVectors(Sn,wn),e=[ja.x,ja.y,ja.z],zl(e,us,ds,ps,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ln=[new X,new X,new X,new X,new X,new X,new X,new X],Di=new X,Za=new $i,us=new X,ds=new X,ps=new X,Sn=new X,wn=new X,Gn=new X,Vs=new X,Ja=new X,ja=new X,Vn=new X;function zl(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Vn.fromArray(n,a);let l=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),o=t.dot(Vn),h=e.dot(Vn),c=i.dot(Vn);if(Math.max(-Math.max(o,h,c),Math.min(o,h,c))>l)return!1}return!0}var Ue=new X,Qa=new qt,Ad=0,le=class extends qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=If,this.updateRanges=[],this.gpuType=Ci,this.version=0,this._normalizationScale=t!==void 0?wc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):pd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):md(t,this.array)}};var na=class extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var sa=class extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ed=new $i,Ws=new X,Bl=new X,Ki=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ed.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Bl)),this.expandByPoint(Ws.copy(t.center).sub(Bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cd=0,Ai=new de,Hl=new Re,ms=new X,vi=new $i,Xs=new $i,$e=new X,me=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?sa:na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Gt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,i){return Ai.makeTranslation(t,e,i),this.applyMatrix4(Ai),this}scale(t,e,i){return Ai.makeScale(t,e,i),this.applyMatrix4(Ai),this}lookAt(t){return Hl.lookAt(t),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new pe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];vi.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){let l=e[a];Xs.setFromBufferAttribute(l),this.morphTargetsRelative?($e.addVectors(vi.min,Xs.min),vi.expandByPoint($e),$e.addVectors(vi.max,Xs.max),vi.expandByPoint($e)):(vi.expandByPoint(Xs.min),vi.expandByPoint(Xs.max))}vi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)$e.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared($e));if(e)for(let a=0,r=e.length;a<r;a++){let l=e[a],o=this.morphTargetsRelative;for(let h=0,c=l.count;h<c;h++)$e.fromBufferAttribute(l,h),o&&(ms.fromBufferAttribute(t,h),$e.add(ms)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new le(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let l=[],o=[],h=new Uint8Array(i.count);for(let D=0;D<i.count;D++)l[D]=new X,o[D]=new X;let c=new X,u=new X,f=new X,x=new qt,g=new qt,m=new qt,d=new X,p=new X;function v(D,L,I){h[D]=h[L]=h[I]=1,c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,I),x.fromBufferAttribute(a,D),g.fromBufferAttribute(a,L),m.fromBufferAttribute(a,I),u.sub(c),f.sub(c),g.sub(x),m.sub(x);let F=1/(g.x*m.y-m.x*g.y);isFinite(F)&&(d.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(F),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(F),l[D].add(d),l[L].add(d),l[I].add(d),o[D].add(p),o[L].add(p),o[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,L=b.length;D<L;++D){let I=b[D],F=I.start,A=I.count;for(let C=F,B=F+A;C<B;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new X,M=new X,S=new X,_=new X;function w(D){S.fromBufferAttribute(s,D),_.copy(S);let L=l[D];y.copy(L),y.sub(S.multiplyScalar(S.dot(L))).normalize(),M.crossVectors(_,L);let F=M.dot(o[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,L=i.count;D<L;++D)h[D]&&w(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);let s=new X,a=new X,r=new X,l=new X,o=new X,h=new X,c=new X,u=new X;if(t)for(let f=0,x=t.count;f<x;f+=3){let g=t.getX(f+0),m=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),r.fromBufferAttribute(e,d),c.subVectors(r,a),u.subVectors(s,a),c.cross(u),l.fromBufferAttribute(i,g),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,d),l.add(c),o.add(c),h.add(c),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let f=0,x=e.count;f<x;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,a),u.subVectors(s,a),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(l,o){let h=l.array,c=l.itemSize,u=l.normalized,f=new h.constructor(o.length*c),x=0,g=0;for(let m=0,d=o.length;m<d;m++){l.isInterleavedBufferAttribute?x=o[m]*l.data.stride+l.offset:x=o[m]*c;for(let p=0;p<c;p++)f[g++]=h[x++]}return new le(f,c,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,i);e.setAttribute(l,h)}let a=this.morphAttributes;for(let l in a){let o=[],h=a[l];for(let c=0,u=h.length;c<u;c++){let f=h[c],x=t(f,i);o.push(x)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let l=0,o=r.length;l<o;l++){let h=r[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let o in i){let h=i[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},a=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],c=[];for(let u=0,f=h.length;u<f;u++){let x=h[u];c.push(x.toJSON(t.data))}c.length>0&&(s[o]=c,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let a=t.morphAttributes;for(let h in a){let c=[],u=a[h];for(let f=0,x=u.length;f<x;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let h=0,c=r.length;h<c;h++){let u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gl=new X,Rd=new X,Pd=new Gt,Ni=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Gl.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Gl),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(Gl).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ld=0,Zi=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=Ls,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=ac,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let l in a){let o=a[l];delete o.metadata,r.push(o)}return r}if(e){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ni().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var cn=new X,Vl=new X,tr=new X,er=new X,As=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vl.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),er.copy(this.origin).sub(Vl);let a=t.distanceTo(e)*.5,r=-this.direction.dot(tr),l=er.dot(this.direction),o=-er.dot(tr),h=er.lengthSq(),c=Math.abs(1-r*r),u,f,x,g;if(c>0)if(u=r*o-l,f=r*l-o,g=a*c,u>=0)if(f>=-g)if(f<=g){let m=1/c;u*=m,f*=m,x=u*(u+r*f+2*l)+f*(r*u+f+2*o)+h}else f=a,u=Math.max(0,-(r*f+l)),x=-u*u+f*(f+2*o)+h;else f=-a,u=Math.max(0,-(r*f+l)),x=-u*u+f*(f+2*o)+h;else f<=-g?(u=Math.max(0,-(-r*a+l)),f=u>0?-a:Math.min(Math.max(-a,-o),a),x=-u*u+f*(f+2*o)+h):f<=g?(u=0,f=Math.min(Math.max(-a,-o),a),x=f*(f+2*o)+h):(u=Math.max(0,-(r*a+l)),f=u>0?a:Math.min(Math.max(-a,-o),a),x=-u*u+f*(f+2*o)+h);else f=r>0?-a:a,u=Math.max(0,-(r*f+l)),x=-u*u+f*(f+2*o)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vl).addScaledVector(tr,f),x}intersectSphere(t,e){if(t.radius<0)return null;cn.subVectors(t.center,this.origin);let i=cn.dot(this.direction),s=cn.dot(cn)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),l=i-r,o=i+r;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,l,o,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(a=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(a=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),u>=0?(l=(t.min.z-f.z)*u,o=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,o=(t.min.z-f.z)*u),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,s,a){let r=this.origin,l=this.direction,o=l.x,h=l.y,c=l.z,u=t.x-r.x,f=t.y-r.y,x=t.z-r.z,g=e.x-r.x,m=e.y-r.y,d=e.z-r.z,p=i.x-r.x,v=i.y-r.y,b=i.z-r.z,y=Math.abs(o),M=Math.abs(h),S=Math.abs(c),_,w,D,L,I,F,A,C,B,N,U,G;if(y>=M&&y>=S?(D=o,F=u,B=g,G=p,o>=0?(_=h,w=c,L=f,I=x,A=m,C=d,N=v,U=b):(_=c,w=h,L=x,I=f,A=d,C=m,N=b,U=v)):M>=S?(D=h,F=f,B=m,G=v,h>=0?(_=c,w=o,L=x,I=u,A=d,C=g,N=b,U=p):(_=o,w=c,L=u,I=x,A=g,C=d,N=p,U=b)):(D=c,F=x,B=d,G=b,c>=0?(_=o,w=h,L=u,I=f,A=g,C=m,N=p,U=v):(_=h,w=o,L=f,I=u,A=m,C=g,N=v,U=p)),D===0)return null;let W=_/D,K=w/D,Z=1/D,rt=L-W*F,k=I-K*F,P=A-W*B,Q=C-K*B,st=N-W*G,ct=U-K*G,at=st*Q-ct*P,Bt=rt*ct-k*st,Qt=P*k-Q*rt;if(s){if(at<0||Bt<0||Qt<0)return null}else if((at<0||Bt<0||Qt<0)&&(at>0||Bt>0||Qt>0))return null;let Mt=at+Bt+Qt;if(Mt===0)return null;let Ut=Z*(at*F+Bt*B+Qt*G);return(Mt>0?Ut<0:Ut>0)?null:this.at(Ut/Mt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dh=new de,Wn=new As,ir=new Ki,Nh=new X,nr=new X,sr=new X,ar=new X,Wl=new X,rr=new X,Uh=new X,or=new X,dt=class extends Re{constructor(t=new me,e=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(a&&l){rr.set(0,0,0);for(let o=0,h=a.length;o<h;o++){let c=l[o],u=a[o];c!==0&&(Wl.fromBufferAttribute(u,t),r?rr.addScaledVector(Wl,c):rr.addScaledVector(Wl.sub(e),c))}e.add(rr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(a),Wn.copy(t.ray).recast(t.near),!(ir.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(ir,Nh)===null||Wn.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Dh.copy(a).invert(),Wn.copy(t.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,i){let s,a=this.geometry,r=this.material,l=a.index,o=a.attributes.position,h=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,f=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(r))for(let g=0,m=f.length;g<m;g++){let d=f[g],p=r[d.materialIndex],v=Math.max(d.start,x.start),b=Math.min(l.count,Math.min(d.start+d.count,x.start+x.count));for(let y=v,M=b;y<M;y+=3){let S=l.getX(y),_=l.getX(y+1),w=l.getX(y+2);s=lr(this,p,t,i,h,c,u,S,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),m=Math.min(l.count,x.start+x.count);for(let d=g,p=m;d<p;d+=3){let v=l.getX(d),b=l.getX(d+1),y=l.getX(d+2);s=lr(this,r,t,i,h,c,u,v,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,m=f.length;g<m;g++){let d=f[g],p=r[d.materialIndex],v=Math.max(d.start,x.start),b=Math.min(o.count,Math.min(d.start+d.count,x.start+x.count));for(let y=v,M=b;y<M;y+=3){let S=y,_=y+1,w=y+2;s=lr(this,p,t,i,h,c,u,S,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),m=Math.min(o.count,x.start+x.count);for(let d=g,p=m;d<p;d+=3){let v=d,b=d+1,y=d+2;s=lr(this,r,t,i,h,c,u,v,b,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Id(n,t,e,i,s,a,r,l){let o;if(t.side===Qe?o=i.intersectTriangle(r,a,s,!0,l):o=i.intersectTriangle(s,a,r,t.side===kn,l),o===null)return null;or.copy(l),or.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(or);return h<e.near||h>e.far?null:{distance:h,point:or.clone(),object:n}}function lr(n,t,e,i,s,a,r,l,o,h){n.getVertexPosition(l,nr),n.getVertexPosition(o,sr),n.getVertexPosition(h,ar);let c=Id(n,t,e,i,nr,sr,ar,Uh);if(c){let u=new X;An.getBarycoord(Uh,nr,sr,ar,u),s&&(c.uv=An.getInterpolatedAttribute(s,l,o,h,u,new qt)),a&&(c.uv1=An.getInterpolatedAttribute(a,l,o,h,u,new qt)),r&&(c.normal=An.getInterpolatedAttribute(r,l,o,h,u,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new X,materialIndex:0};An.getNormal(nr,sr,ar,f.normal),c.face=f,c.barycoord=u}return c}var aa=class extends di{constructor(t=null,e=1,i=1,s,a,r,l,o,h=Ke,c=Ke,u,f){super(null,r,l,o,h,c,s,a,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ra=class extends le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new de,Oh=new de,cr=[],Fh=new $i,kd=new de,qs=new dt,Ys=new Ki,En=class extends dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),Fh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),Ys.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let l=0;l<i.length;l++)i[l]=s[r+l]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),t.ray.intersectsSphere(Ys)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,xs),Oh.multiplyMatrices(i,xs),qs.matrixWorld=Oh,qs.raycast(t,cr);for(let r=0,l=cr.length;r<l;r++){let o=cr[r];o.instanceId=a,o.object=this,e.push(o)}cr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(s*this.count),s,this.count,oo,Ci));let a=this.morphTexture.source.data.data,r=0;for(let h=0;h<i.length;h++)r+=i[h];let l=this.geometry.morphTargetsRelative?1:1-r,o=s*t;return a[o]=l,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xn=new Ki,Dd=new qt(.5,.5),hr=new X,Cn=class{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,a=new Ni,r=new Ni){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(a),l[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei,i=!1){let s=this.planes,a=t.elements,r=a[0],l=a[1],o=a[2],h=a[3],c=a[4],u=a[5],f=a[6],x=a[7],g=a[8],m=a[9],d=a[10],p=a[11],v=a[12],b=a[13],y=a[14],M=a[15];if(s[0].setComponents(h-r,x-c,p-g,M-v).normalize(),s[1].setComponents(h+r,x+c,p+g,M+v).normalize(),s[2].setComponents(h+l,x+u,p+m,M+b).normalize(),s[3].setComponents(h-l,x-u,p-m,M-b).normalize(),i)s[4].setComponents(o,f,d,y).normalize(),s[5].setComponents(h-o,x-f,p-d,M-y).normalize();else if(s[4].setComponents(h-o,x-f,p-d,M-y).normalize(),e===Ei)s[5].setComponents(h+o,x+f,p+d,M+y).normalize();else if(e===Ms)s[5].setComponents(o,f,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);let e=Dd.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zh=new de,kr=class n{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let a=e[s];zh.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Cn),i[s].setFromProjectionMatrix(zh,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Cn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Es=class extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new X,Nr=new X,Bh=new de,$s=new As,fr=new Ki,Xl=new X,Hh=new X,Ur=class extends Re{constructor(t=new me,e=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Dr.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Dr.distanceTo(Nr);t.setAttribute("lineDistance",new pe(i,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),fr.radius+=a,t.ray.intersectsSphere(fr)===!1)return;Bh.copy(s).invert(),$s.copy(t.ray).applyMatrix4(Bh);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,h=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let x=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let m=x,d=g-1;m<d;m+=h){let p=c.getX(m),v=c.getX(m+1),b=ur(this,t,$s,o,p,v,m);b&&e.push(b)}if(this.isLineLoop){let m=c.getX(g-1),d=c.getX(x),p=ur(this,t,$s,o,m,d,g-1);p&&e.push(p)}}else{let x=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let m=x,d=g-1;m<d;m+=h){let p=ur(this,t,$s,o,m,m+1,m);p&&e.push(p)}if(this.isLineLoop){let m=ur(this,t,$s,o,g-1,x,g-1);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}};function ur(n,t,e,i,s,a,r){let l=n.geometry.attributes.position;if(Dr.fromBufferAttribute(l,s),Nr.fromBufferAttribute(l,a),e.distanceSqToSegment(Dr,Nr,Xl,Hh)>i)return;Xl.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Xl);if(!(h<t.near||h>t.far))return{distance:h,point:Hh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var Gh=new X,Vh=new X,oa=class extends Ur{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gh.distanceTo(Vh);t.setAttribute("lineDistance",new pe(i,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ui=class extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wh=new de,Jl=new As,dr=new Ki,pr=new X,Ji=class extends Re{constructor(t=new me,e=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=a,t.ray.intersectsSphere(dr)===!1)return;Wh.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(Wh);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let g=f,m=x;g<m;g++){let d=h.getX(g);pr.fromBufferAttribute(u,d),Xh(pr,d,o,s,t,e,this)}}else{let f=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let g=f,m=x;g<m;g++)pr.fromBufferAttribute(u,g),Xh(pr,g,o,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}};function Xh(n,t,e,i,s,a,r){let l=Jl.distanceSqToPoint(n);if(l<e){let o=new X;Jl.closestPointToPoint(n,o),o.applyMatrix4(i);let h=s.ray.origin.distanceTo(o);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var la=class extends di{constructor(t=[],e=jn,i,s,a,r,l,o,h,c){super(t,e,i,s,a,r,l,o,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends di{constructor(t,e,i,s,a,r,l,o,h){super(t,e,i,s,a,r,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pn=class extends di{constructor(t,e,i=Oi,s,a,r,l=Ke,o=Ke,h,c=un,u=1){if(c!==un&&c!==xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,a,r,l,o,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ca=class extends pn{constructor(t,e=Oi,i=jn,s,a,r=Ke,l=Ke,o,h=un){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,s,a,r,l,o,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ha=class extends di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ce=class n extends me{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let l=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let o=[],h=[],c=[],u=[],f=0,x=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(o),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2));function g(m,d,p,v,b,y,M,S,_,w,D){let L=y/_,I=M/w,F=y/2,A=M/2,C=S/2,B=_+1,N=w+1,U=0,G=0,W=new X;for(let K=0;K<N;K++){let Z=K*I-A;for(let rt=0;rt<B;rt++){let k=rt*L-F;W[m]=k*v,W[d]=Z*b,W[p]=C,h.push(W.x,W.y,W.z),W[m]=0,W[d]=0,W[p]=S>0?1:-1,c.push(W.x,W.y,W.z),u.push(rt/_),u.push(1-K/w),U+=1}}for(let K=0;K<w;K++)for(let Z=0;Z<_;Z++){let rt=f+Z+B*K,k=f+Z+B*(K+1),P=f+(Z+1)+B*(K+1),Q=f+(Z+1)+B*K;o.push(rt,k,Q),o.push(k,P,Q),G+=6}l.addGroup(x,G,D),x+=G,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rn=class n extends me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let a=[],r=[],l=[],o=[],h=new X,c=new qt;r.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let x=i+u/e*s;h.x=t*Math.cos(x),h.y=t*Math.sin(x),r.push(h.x,h.y,h.z),l.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,o.push(c.x,c.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mi=class n extends me{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),a=Math.floor(a);let c=[],u=[],f=[],x=[],g=0,m=[],d=i/2,p=0;v(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(x,2));function v(){let y=new X,M=new X,S=0,_=(e-t)/i;for(let w=0;w<=a;w++){let D=[],L=w/a,I=L*(e-t)+t;for(let F=0;F<=s;F++){let A=F/s,C=A*o+l,B=Math.sin(C),N=Math.cos(C);M.x=I*B,M.y=-L*i+d,M.z=I*N,u.push(M.x,M.y,M.z),y.set(B,_,N).normalize(),f.push(y.x,y.y,y.z),x.push(A,1-L),D.push(g++)}m.push(D)}for(let w=0;w<s;w++)for(let D=0;D<a;D++){let L=m[D][w],I=m[D+1][w],F=m[D+1][w+1],A=m[D][w+1];(t>0||D!==0)&&(c.push(L,I,A),S+=3),(e>0||D!==a-1)&&(c.push(I,F,A),S+=3)}h.addGroup(p,S,0),p+=S}function b(y){let M=g,S=new qt,_=new X,w=0,D=y===!0?t:e,L=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,d*L,0),f.push(0,L,0),x.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let C=F/s*o+l,B=Math.cos(C),N=Math.sin(C);_.x=D*N,_.y=d*L,_.z=D*B,u.push(_.x,_.y,_.z),f.push(0,L,0),S.x=B*.5+.5,S.y=N*.5*L+.5,x.push(S.x,S.y),g++}for(let F=0;F<s;F++){let A=M+F,C=I+F;y===!0?c.push(C,C+1,A):c.push(C+1,C,A),w+=3}h.addGroup(p,w,y===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yn=class n extends mi{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,l=Math.PI*2){super(0,t,e,i,s,a,r,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Or=class n extends me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let a=[],r=[];l(s),h(i),c(),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(a.slice(),3)),this.setAttribute("uv",new pe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let b=new X,y=new X,M=new X;for(let S=0;S<e.length;S+=3)x(e[S+0],b),x(e[S+1],y),x(e[S+2],M),o(b,y,M,v)}function o(v,b,y,M){let S=M+1,_=[];for(let w=0;w<=S;w++){_[w]=[];let D=v.clone().lerp(y,w/S),L=b.clone().lerp(y,w/S),I=S-w;for(let F=0;F<=I;F++)F===0&&w===S?_[w][F]=D:_[w][F]=D.clone().lerp(L,F/I)}for(let w=0;w<S;w++)for(let D=0;D<2*(S-w)-1;D++){let L=Math.floor(D/2);D%2===0?(f(_[w][L+1]),f(_[w+1][L]),f(_[w][L])):(f(_[w][L+1]),f(_[w+1][L+1]),f(_[w+1][L]))}}function h(v){let b=new X;for(let y=0;y<a.length;y+=3)b.x=a[y+0],b.y=a[y+1],b.z=a[y+2],b.normalize().multiplyScalar(v),a[y+0]=b.x,a[y+1]=b.y,a[y+2]=b.z}function c(){let v=new X;for(let b=0;b<a.length;b+=3){v.x=a[b+0],v.y=a[b+1],v.z=a[b+2];let y=d(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;r.push(y,1-M)}g(),u()}function u(){for(let v=0;v<r.length;v+=6){let b=r[v+0],y=r[v+2],M=r[v+4],S=Math.max(b,y,M),_=Math.min(b,y,M);S>.9&&_<.1&&(b<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),M<.2&&(r[v+4]+=1))}}function f(v){a.push(v.x,v.y,v.z)}function x(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let v=new X,b=new X,y=new X,M=new X,S=new qt,_=new qt,w=new qt;for(let D=0,L=0;D<a.length;D+=9,L+=6){v.set(a[D+0],a[D+1],a[D+2]),b.set(a[D+3],a[D+4],a[D+5]),y.set(a[D+6],a[D+7],a[D+8]),S.set(r[L+0],r[L+1]),_.set(r[L+2],r[L+3]),w.set(r[L+4],r[L+5]),M.copy(v).add(b).add(y).divideScalar(3);let I=d(M);m(S,L+0,v,I),m(_,L+2,b,I),m(w,L+4,y,I)}}function m(v,b,y,M){M<0&&v.x===1&&(r[b]=v.x-1),y.x===0&&y.z===0&&(r[b]=M/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var fa=class n extends Or{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},je=class n extends me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,r=e/2,l=Math.floor(i),o=Math.floor(s),h=l+1,c=o+1,u=t/l,f=e/o,x=[],g=[],m=[],d=[];for(let p=0;p<c;p++){let v=p*f-r;for(let b=0;b<h;b++){let y=b*u-a;g.push(y,-v,0),m.push(0,0,1),d.push(b/l),d.push(1-p/o)}}for(let p=0;p<o;p++)for(let v=0;v<l;v++){let b=v+h*p,y=v+h*(p+1),M=v+1+h*(p+1),S=v+1+h*p;x.push(b,y,S),x.push(y,M,S)}this.setIndex(x),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(m,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Cs=class n extends me{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let l=[],o=[],h=[],c=[],u=t,f=(e-t)/s,x=new X,g=new qt;for(let m=0;m<=s;m++){for(let d=0;d<=i;d++){let p=a+d/i*r;x.x=u*Math.cos(p),x.y=u*Math.sin(p),o.push(x.x,x.y,x.z),h.push(0,0,1),g.x=(x.x/e+1)/2,g.y=(x.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let m=0;m<s;m++){let d=m*(i+1);for(let p=0;p<i;p++){let v=p+d,b=v,y=v+i+1,M=v+i+2,S=v+1;l.push(b,y,S),l.push(y,M,S)}}this.setIndex(l),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ua=class n extends me{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let o=Math.min(r+l,Math.PI),h=0,c=[],u=new X,f=new X,x=[],g=[],m=[],d=[];for(let p=0;p<=i;p++){let v=[],b=p/i,y=r+b*l,M=t*Math.cos(y),S=Math.sqrt(t*t-M*M),_=0;p===0&&r===0?_=.5/e:p===i&&o===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let D=w/e,L=s+D*a;u.x=-S*Math.cos(L),u.y=M,u.z=S*Math.sin(L),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),d.push(D+_,1-b),v.push(h++)}c.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let b=c[p][v+1],y=c[p][v],M=c[p+1][v],S=c[p+1][v+1];(p!==0||r>0)&&x.push(b,y,S),(p!==i-1||o<Math.PI)&&x.push(y,M,S)}this.setIndex(x),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(m,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(qh(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let a=[];for(let r=0,l=s.length;r<l;r++)a[r]=s[r].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ci(n){let t={};for(let e=0;e<n.length;e++){let i=ts(n[e]);for(let s in i)t[s]=i[s]}return t}function qh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var zf={clone:ts,merge:ci},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ji=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new de().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fr=class extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var we=class extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=to,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zr=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Br=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function mr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Pn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];t:{e:{let r;i:{n:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(a=s,s=e[++i],t<s)break e}r=e.length;break i}if(!(t>=a)){let l=e[1];t<l&&(i=2,a=l);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(s=a,a=e[--i-1],t>=a)break e}r=i,i=0;break i}break t}for(;i<r;){let l=i+r>>>1;t<e[l]?r=l:i=l+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)e[r]=i[a+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends Pn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,r=t+1,l=s[a],o=s[r];if(l===void 0)switch(this.getSettings_().endingStart){case Kl:a=t,l=2*e-i;break;case Zl:a=s.length-2,l=e+s[a]-s[a+1];break;default:a=t,l=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Kl:r=t,o=2*i-e;break;case Zl:r=1,o=i+s[1]-s[0];break;default:r=t-1,o=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-i),this._offsetPrev=a*c,this._offsetNext=r*c}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,x=this._weightNext,g=(i-e)/(s-e),m=g*g,d=m*g,p=-f*d+2*f*m-f*g,v=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,b=(-1-x)*d+(1.5+x)*m+.5*g,y=x*d-x*m;for(let M=0;M!==l;++M)a[M]=p*r[c+M]+v*r[h+M]+b*r[o+M]+y*r[u+M];return a}},Gr=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,c=(i-e)/(s-e),u=1-c;for(let f=0;f!==l;++f)a[f]=r[h+f]*u+r[o+f]*c;return a}},Vr=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wr=class extends Pn{interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,c=this.inTangents,u=this.outTangents;if(!c||!u){let g=(i-e)/(s-e),m=1-g;for(let d=0;d!==l;++d)a[d]=r[h+d]*m+r[o+d]*g;return a}let f=l*2,x=t-1;for(let g=0;g!==l;++g){let m=r[h+g],d=r[o+g],p=x*f+g*2,v=u[p],b=u[p+1],y=t*f+g*2,M=c[y],S=c[y+1],_=zd(i,e,v,M,s);a[g]=Bf(_,m,b,S,d)}return a}};function Bf(n,t,e,i,s){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*i+n*n*n*s}function Fd(n,t,e,i,s){let a=1-n;return 3*a*a*(e-t)+6*a*n*(i-e)+3*n*n*(s-i)}function zd(n,t,e,i,s){let a=(n-t)/(s-t);for(let r=0;r<8;r++){let l=Bf(a,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let o=Fd(a,t,e,i,s);if(Math.abs(o)<1e-10)break;a=Math.max(0,Math.min(1,a-l/o))}return a}var bi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),mr(t.settings)&&(i.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case yr:e=this.InterpolantFactoryMethodSmooth;break;case Yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return yr;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;mr(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;mr(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>e;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let l=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*l,r*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let l=0;l!==a;l++){let o=i[l];if(typeof o=="number"&&isNaN(o)){Ht("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(r!==null&&r>o){Ht("KeyframeTrack: Out of order keys.",this,l,o,r),t=!1;break}r=o}if(s!==void 0&&ud(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){Ht("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===yr,a=t.length-1,r=1;for(let l=1;l<a;++l){let o=!1,h=t[l],c=t[l+1];if(h!==c&&(l!==1||h!==t[0]))if(s)o=!0;else{let u=l*i,f=u-i,x=u+i;for(let g=0;g!==i;++g){let m=e[u+g];if(m!==e[f+g]||m!==e[x+g]){o=!0;break}}}if(o){if(l!==r){t[r]=t[l];let u=l*i,f=r*i;for(let x=0;x!==i;++x)e[f+x]=e[u+x]}++r}}if(a>0){t[r]=t[a];for(let l=a*i,o=r*i,h=0;h!==i;++h)e[o+h]=e[l+h];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,mr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function $h(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Cr;var Ln=class extends bi{constructor(t,e,i){super(t,e,i)}};Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=Zs;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};Xr.prototype.ValueTypeName="color";var qr=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};qr.prototype.ValueTypeName="number";var Yr=class extends Pn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=(i-e)/(s-e),h=t*l;for(let c=h+l;h!==c;h+=4)Yi.slerpFlat(a,0,r,h-l,r,h,o);return a}},da=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends bi{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Zs;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};$r.prototype.ValueTypeName="vector";var Kr=class{constructor(t,e,i){let s=this,a=!1,r=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){l++,a===!1&&s.onStart!==void 0&&s.onStart(c,r,l),a=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,l),r===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let x=h[u],g=h[u+1];if(x.global&&(x.lastIndex=0),x.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hf=new Kr,Zr=class{constructor(t){this.manager=t!==void 0?t:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var pa=class extends Re{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$n=class extends pa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ql=new de,Kh=new X,Zh=new X,Jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cn,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ql,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,l=s?s.w/a.y:1,o=s?s.x/a.x:0,h=s?s.y/a.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*r,0,0,.5*r+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xr=new X,gr=new Yi,Xi=new X,ma=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,gr,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,gr,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(xr,gr,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,gr,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tn=new X,Jh=new qt,jh=new qt,Je=class extends ma{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,jh),e.subVectors(jh,Jh)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let o=r.fullWidth,h=r.fullHeight;a+=r.offsetX*s/o,e-=r.offsetY*i/h,s*=r.width/o,i*=r.height/h}let l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xa=class extends ma{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,r=a+h*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(a,r,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jl=class extends Jr{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ys=-90,vs=1,Rs=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ys,vs,t,e);s.layers=this.layers,this.add(s);let a=new Je(ys,vs,t,e);a.layers=this.layers,this.add(a);let r=new Je(ys,vs,t,e);r.layers=this.layers,this.add(r);let l=new Je(ys,vs,t,e);l.layers=this.layers,this.add(l);let o=new Je(ys,vs,t,e);o.layers=this.layers,this.add(o);let h=new Je(ys,vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,l,o]=e;for(let h of e)this.remove(h);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,l,o,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.mipmapsAutoUpdate=m,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,f,x),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jr=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ac="\\[\\]\\.:\\/",Bd=new RegExp("["+Ac+"]","g"),Ec="[^"+Ac+"]",Hd="[^"+Ac.replace("\\.","")+"]",Gd=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Vd=/(WCOD+)?/.source.replace("WCOD",Hd),Wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),qd=new RegExp("^"+Gd+Vd+Wd+Xd+"$"),Yd=["material","materials","bones","map"],Ql=class{constructor(t,e,i){let s=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bd,"")}static parseTrackName(t){let e=qd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Yd.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let l=a[r];if(l.name===e||l.uuid===e)return l;let o=i(l.children);if(o)return o}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let r=t[s];if(r===void 0){let h=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(o=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Ql;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var py=new Float32Array(1);var kc=class kc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=s,this}};kc.prototype.isMatrix2=!0;var tc=kc;function Cc(n,t,e,i){let s=$d(i);switch(e){case gc:return n*t;case oo:return n*t/s.components*s.byteLength;case lo:return n*t/s.components*s.byteLength;case Dn:return n*t*2/s.components*s.byteLength;case co:return n*t*2/s.components*s.byteLength;case yc:return n*t*3/s.components*s.byteLength;case zi:return n*t*4/s.components*s.byteLength;case ho:return n*t*4/s.components*s.byteLength;case _a:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:case mo:return Math.max(n,16)*Math.max(t,8)/4;case fo:case po:return Math.max(n,8)*Math.max(t,8)/2;case xo:case go:case vo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case wa:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Oo:case Fo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zo:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ta:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $d(n){switch(n){case xi:case dc:return{byteLength:1,components:1};case ks:case pc:case Fi:return{byteLength:2,components:1};case ao:case ro:return{byteLength:2,components:4};case Oi:case so:case Ci:return{byteLength:4,components:1};case mc:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cu(){let n=null,t=!1,e=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Zd(n){let t=new WeakMap;function e(l,o){let h=l.array,c=l.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(o,f),n.bufferData(o,h,c),l.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}function i(l,o,h){let c=o.array,u=o.updateRanges;if(n.bindBuffer(h,l),u.length===0)n.bufferSubData(h,0,c);else{u.sort((x,g)=>x.start-g.start);let f=0;for(let x=1;x<u.length;x++){let g=u[f],m=u[x];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++f,u[f]=m)}u.length=f+1;for(let x=0,g=u.length;x<g;x++){let m=u[x];n.bufferSubData(h,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(n.deleteBuffer(o.buffer),t.delete(l))}function r(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,o),h.version=l.version}}return{get:s,remove:a,update:r}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_0=`#define PI 3.141592653589793
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
} // validated`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,$0=`uniform sampler2D dfgLUT;
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
}`,K0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
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
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Np=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform float backgroundBlurriness;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,ym=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Jd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:i0,aomap_fragment:n0,aomap_pars_fragment:s0,batching_pars_vertex:a0,batching_vertex:r0,begin_vertex:o0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:h0,bumpmap_pars_fragment:f0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:x0,color_pars_fragment:g0,color_pars_vertex:y0,color_vertex:v0,common:_0,defaultnormal_vertex:b0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:w0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:E0,envmap_fragment:C0,envmap_common_pars_fragment:R0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:G0,envmap_vertex:I0,fog_vertex:k0,fog_pars_vertex:D0,fog_fragment:N0,fog_pars_fragment:U0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:F0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:B0,lights_pars_begin:H0,lights_toon_fragment:V0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:$0,lights_fragment_begin:K0,lights_fragment_maps:Z0,lights_fragment_end:J0,lightprobes_pars_fragment:j0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:ip,map_fragment:np,map_pars_fragment:sp,map_particle_fragment:ap,map_particle_pars_fragment:rp,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:fp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:xp,normal_pars_vertex:gp,normal_vertex:yp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:wp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Ep,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:kp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Np,skinbase_vertex:Up,skinning_pars_vertex:Op,skinning_vertex:Fp,skinnormal_vertex:zp,specularmap_fragment:Bp,specularmap_pars_fragment:Hp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:Zp,background_frag:Jp,backgroundCube_vert:jp,backgroundCube_frag:Qp,cube_vert:tm,cube_frag:em,depth_vert:im,depth_frag:nm,distance_vert:sm,distance_frag:am,equirect_vert:rm,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:fm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:xm,meshnormal_frag:gm,meshphong_vert:ym,meshphong_frag:vm,meshphysical_vert:_m,meshphysical_frag:bm,meshtoon_vert:Mm,meshtoon_frag:Sm,points_vert:wm,points_frag:Tm,shadow_vert:Am,shadow_frag:Em,sprite_vert:Cm,sprite_frag:Rm},wt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},en={basic:{uniforms:ci([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ci([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ci([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ci([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ci([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ci([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ci([wt.points,wt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ci([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ci([wt.common,wt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ci([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ci([wt.sprite,wt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:ci([wt.common,wt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:ci([wt.lights,wt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};en.physical={uniforms:ci([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Vo={r:0,b:0,g:0},Pm=new de,hu=new Gt;hu.set(-1,0,0,0,1,0,0,0,1);function Lm(n,t,e,i,s,a){let r=new Nt(0),l=s===!0?0:1,o,h,c=null,u=0,f=null;function x(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(v){let b=!1,y=x(v);y===null?d(r,l):y&&y.isColor&&(d(y,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,b){let y=x(b);y&&y.isCubeTexture?(h===void 0&&(h=new dt(new ce(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ts(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(hu),h.material.toneMapped=se.getTransfer(y.colorSpace)!==fe,(c!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,c=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(o===void 0&&(o=new dt(new je(2,2),new ji({name:"BackgroundMaterial",uniforms:ts(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=y,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=se.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),o.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||u!==y.version||f!==n.toneMapping)&&(o.material.needsUpdate=!0,c=y,u=y.version,f=n.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function d(v,b){v.getRGB(Vo,Tc(n)),e.buffers.color.setClear(Vo.r,Vo.g,Vo.b,b,a)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,b=1){r.set(v),l=b,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(r,l)},render:g,addToRenderList:m,dispose:p}}function Im(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function l(I,F,A,C,B){let N=!1,U=u(I,C,A,F);a!==U&&(a=U,h(a.object)),N=x(I,C,A,B),N&&g(I,C,A,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,y(I,F,A,C),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function o(){return n.createVertexArray()}function h(I){return n.bindVertexArray(I)}function c(I){return n.deleteVertexArray(I)}function u(I,F,A,C){let B=C.wireframe===!0,N=i[F.id];N===void 0&&(N={},i[F.id]=N);let U=I.isInstancedMesh===!0?I.id:0,G=N[U];G===void 0&&(G={},N[U]=G);let W=G[A.id];W===void 0&&(W={},G[A.id]=W);let K=W[B];return K===void 0&&(K=f(o()),W[B]=K),K}function f(I){let F=[],A=[],C=[];for(let B=0;B<e;B++)F[B]=0,A[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:A,attributeDivisors:C,object:I,attributes:{},index:null}}function x(I,F,A,C){let B=a.attributes,N=F.attributes,U=0,G=A.getAttributes();for(let W in G)if(G[W].location>=0){let Z=B[W],rt=N[W];if(rt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),Z===void 0||Z.attribute!==rt||rt&&Z.data!==rt.data)return!0;U++}return a.attributesNum!==U||a.index!==C}function g(I,F,A,C){let B={},N=F.attributes,U=0,G=A.getAttributes();for(let W in G)if(G[W].location>=0){let Z=N[W];Z===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let rt={};rt.attribute=Z,Z&&Z.data&&(rt.data=Z.data),B[W]=rt,U++}a.attributes=B,a.attributesNum=U,a.index=C}function m(){let I=a.newAttributes;for(let F=0,A=I.length;F<A;F++)I[F]=0}function d(I){p(I,0)}function p(I,F){let A=a.newAttributes,C=a.enabledAttributes,B=a.attributeDivisors;A[I]=1,C[I]===0&&(n.enableVertexAttribArray(I),C[I]=1),B[I]!==F&&(n.vertexAttribDivisor(I,F),B[I]=F)}function v(){let I=a.newAttributes,F=a.enabledAttributes;for(let A=0,C=F.length;A<C;A++)F[A]!==I[A]&&(n.disableVertexAttribArray(A),F[A]=0)}function b(I,F,A,C,B,N,U){U===!0?n.vertexAttribIPointer(I,F,A,B,N):n.vertexAttribPointer(I,F,A,C,B,N)}function y(I,F,A,C){m();let B=C.attributes,N=A.getAttributes(),U=F.defaultAttributeValues;for(let G in N){let W=N[G];if(W.location>=0){let K=B[G];if(K===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let Z=K.normalized,rt=K.itemSize,k=t.get(K);if(k===void 0)continue;let P=k.buffer,Q=k.type,st=k.bytesPerElement,ct=Q===n.INT||Q===n.UNSIGNED_INT||K.gpuType===so;if(K.isInterleavedBufferAttribute){let at=K.data,Bt=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Qt=K.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)p(W.location+Mt,at.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)d(W.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,P);for(let Mt=0;Mt<W.locationSize;Mt++)b(W.location+Mt,rt/W.locationSize,Q,Z,Bt*st,(Qt+rt/W.locationSize*Mt)*st,ct)}else{if(K.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)p(W.location+at,K.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let at=0;at<W.locationSize;at++)d(W.location+at);n.bindBuffer(n.ARRAY_BUFFER,P);for(let at=0;at<W.locationSize;at++)b(W.location+at,rt/W.locationSize,Q,Z,rt*st,rt/W.locationSize*at*st,ct)}}else if(U!==void 0){let Z=U[G];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(W.location,Z);break;case 3:n.vertexAttrib3fv(W.location,Z);break;case 4:n.vertexAttrib4fv(W.location,Z);break;default:n.vertexAttrib1fv(W.location,Z)}}}}v()}function M(){D();for(let I in i){let F=i[I];for(let A in F){let C=F[A];for(let B in C){let N=C[B];for(let U in N)c(N[U].object),delete N[U];delete C[B]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let A in F){let C=F[A];for(let B in C){let N=C[B];for(let U in N)c(N[U].object),delete N[U];delete C[B]}}delete i[I.id]}function _(I){for(let F in i){let A=i[F];for(let C in A){let B=A[C];if(B[I.id]===void 0)continue;let N=B[I.id];for(let U in N)c(N[U].object),delete N[U];delete B[I.id]}}}function w(I){for(let F in i){let A=i[F],C=I.isInstancedMesh===!0?I.id:0,B=A[C];if(B!==void 0){for(let N in B){let U=B[N];for(let G in U)c(U[G].object),delete U[G];delete B[N]}delete A[C],Object.keys(A).length===0&&delete i[F]}}}function D(){L(),r=!0,a!==s&&(a=s,h(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:D,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:m,enableAttribute:d,disableUnusedAttributes:v}}function km(n,t,e){let i;function s(o){i=o}function a(o,h){n.drawArrays(i,o,h),e.update(h,i,1)}function r(o,h,c){c!==0&&(n.drawArraysInstanced(i,o,h,c),e.update(h,i,c))}function l(o,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,h,0,c);let f=0;for(let x=0;x<c;x++)f+=h[x];e.update(f,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=l}function Dm(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==zi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(_){let w=_===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==xi&&_!==Ci&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=o(h);c!==h&&(Ft("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:S}}function Nm(n){let t=this,e=null,i=0,s=!1,a=!1,r=new Ni,l=new Gt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let x=u.length!==0||f||i!==0||s;return s=f,i=u.length,x},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,x){let g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||a&&!d)a?c(null):h();else{let v=a?0:i,b=v*4,y=p.clippingState||null;o.value=y,y=c(g,f,b,x);for(let M=0;M!==b;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,x,g){let m=u!==null?u.length:0,d=null;if(m!==0){if(d=o.value,g!==!0||d===null){let p=x+m*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(d===null||d.length<p)&&(d=new Float32Array(p));for(let b=0,y=x;b!==m;++b,y+=4)r.copy(u[b]).applyMatrix4(v,l),r.normal.toArray(d,y),d[y+3]=r.constant}o.value=d,o.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}var Ra=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new la(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),a=new ji({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Zn});a.uniforms.tEquirect.value=e;let r=new dt(s,a),l=e.minFilter;return e.minFilter===mn&&(e.minFilter=ui),new Rs(1,10,this).update(t,r),e.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}},Gf=256,Um=3,Om=20,fu=256,uu=16,Fm=3,zm=new X,Bm=new Nt,Xo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rs(1,10,null),this._boxMesh=new dt(new ce(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){let{size:r=256,position:l=zm}=a,o=this._renderer;this._setSize(r);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let u=o.autoClear,f=o.autoClearColor,x=o.autoClearDepth,g=o.autoClearStencil,m=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,m===null&&(t.background=o.getClearColor(Bm));let d=new Rs(i,s,c);return d.position.copy(l),d.update(o,t),o.autoClear=u,o.autoClearColor=f,o.autoClearDepth=x,o.autoClearStencil=g,t.background=m,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gf,Of(t))}_fromTexture(t,e){t.mapping===jn||t.mapping===Is?this._setSize(t.image.length===0?Gf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Vf(t,!1,!1),i=Math.log2(t)-Um;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jn||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Hm(),this._integrationMaterial=Gm());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/uu);for(let r=0;r<=i;r++){let l=n.lodToRoughness(r,i);if(r>i-Fm)a.roughness.value=l,this._renderCube(t,r,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(fu*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Vm());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function Vf(n,t,e){return new Ra(n,{minFilter:mn,generateMipmaps:t,type:Fi,colorSpace:Js,depthBuffer:e})}function Pa(n,t,e){return new ji({name:n,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Qe,blending:Zn,depthTest:!1,depthWrite:!1})}function Hm(){return Pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fu}u

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
	`)}function Gm(){return Pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uu}},`

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
	`)}function Vm(){return Pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Om}
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
	`)}function Wf(){return Pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xf(){return Pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,x=!1){return f==null?null:x?r(f):a(f)}function a(f){if(f&&f.isTexture){let x=f.mapping;if(x===eo||x===io)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let m=new Ra(g.height);return m.fromEquirectangularTexture(n,f),t.set(f,m),f.addEventListener("dispose",h),l(m.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let x=f.mapping,g=x===eo||x===io,m=x===jn||x===Is;if(g||m){let d=e.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Xo(n)),d=g?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{let v=f.image;return g&&v&&v.height>0||m&&v&&o(v)?(i===null&&(i=new Xo(n)),d=g?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",c),d.texture):null}}}return f}function l(f,x){return x===eo?f.mapping=jn:x===io&&(f.mapping=Is),f}function o(f){let x=0,g=6;for(let m=0;m<g;m++)f[m]!==void 0&&x++;return x===g}function h(f){let x=f.target;x.removeEventListener("dispose",h);let g=t.get(x);g!==void 0&&(t.delete(x),g.dispose())}function c(f){let x=f.target;x.removeEventListener("dispose",c);let g=e.get(x);g!==void 0&&(e.delete(x),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Xm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ks("WebGLRenderer: "+i+" extension not supported."),s}}}function qm(n,t,e,i){let s={},a=new WeakMap,r=new FinalizationRegistry(g=>delete s[g]);function l(g){o(g.target)}function o(g){g.index!==null&&t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",l),delete s[g.id],r.unregister(g);let m=a.get(g);m&&(t.remove(m),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,m){return s[m.id]!==void 0||(m.addEventListener("dispose",l),s[m.id]=new WeakRef(m),r.register(m,m.id,m),e.memory.geometries++),m}function c(g){let m=g.attributes;for(let d in m)t.update(m[d],n.ARRAY_BUFFER)}function u(g){let m=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let v=m!==null?m.array.length:d.array.length/3-1,b=d.count>=65535?sa:na,y=new b(Math.ceil(v/3)*6,1),M=y.array;if(m!==null){let _=m.array;p=m.version;for(let w=0,D=0;w<v;w+=3){let L=_[w+0],I=_[w+1],F=_[w+2];M[D++]=L,M[D++]=I,M[D++]=I,M[D++]=F,M[D++]=F,M[D++]=L}}else{p=d.version;for(let _=0,w=0;_<v;_+=3){let D=_+0,L=_+1,I=_+2;M[w++]=D,M[w++]=L,M[w++]=L,M[w++]=I,M[w++]=I,M[w++]=D}}y.version=p;let S=a.get(g);S&&t.remove(S),a.set(g,y)}function f(g){let m=a.get(g);if(m){let d=g.index;d!==null&&m.version<d.version&&u(g)}else u(g);return a.get(g)}function x(){for(let g in s){let m=s[g].deref();m!==void 0&&o(m)}}return{get:h,update:c,getWireframeAttribute:f,dispose:x}}function Ym(n,t,e){let i;function s(u){i=u}let a,r;function l(u){a=u.type,r=u.bytesPerElement}function o(u,f){n.drawElements(i,f,a,u*r),e.update(f,i,1)}function h(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,a,u*r,x),e.update(f,i,x))}function c(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,x);let m=0;for(let d=0;d<x;d++)m+=f[d];e.update(m,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=c}function $m(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,l){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=l*(a/3);break;case n.LINES:e.lines+=l*(a/2);break;case n.LINE_STRIP:e.lines+=l*(a-1);break;case n.LINE_LOOP:e.lines+=l*a;break;case n.POINTS:e.points+=l*a;break;default:Ht("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Km(n,t,e){let i=new WeakMap,s=new Se;function a(r,l,o){let h=r.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=c!==void 0?c.length:0,f=i.get(l);if(f===void 0||f.count!==u){let D=function(){_.dispose(),i.delete(l),l.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let x=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],b=0;x===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let y=l.attributes.position.count*b,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*M*4*u),_=new ta(S,y,M,u);_.type=Ci,_.needsUpdate=!0;let w=b*4;for(let L=0;L<u;L++){let I=d[L],F=p[L],A=v[L],C=y*M*4*L;for(let B=0;B<I.count;B++){let N=B*w;x===!0&&(s.fromBufferAttribute(I,B),S[C+N+0]=s.x,S[C+N+1]=s.y,S[C+N+2]=s.z,S[C+N+3]=0),g===!0&&(s.fromBufferAttribute(F,B),S[C+N+4]=s.x,S[C+N+5]=s.y,S[C+N+6]=s.z,S[C+N+7]=0),m===!0&&(s.fromBufferAttribute(A,B),S[C+N+8]=s.x,S[C+N+9]=s.y,S[C+N+10]=s.z,S[C+N+11]=A.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new qt(y,M)},i.set(l,f),l.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let x=0;for(let m=0;m<h.length;m++)x+=h[m];let g=l.morphTargetsRelative?1:1-x;o.getUniforms().setValue(n,"morphTargetBaseInfluence",g),o.getUniforms().setValue(n,"morphTargetInfluences",h)}o.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Zm(n,t,e,i,s){let a=new WeakMap;function r(h){let c=s.render.frame,u=h.geometry,f=t.get(h,u);if(a.get(f)!==c&&(t.update(f),a.set(f,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),a.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,c))),h.isSkinnedMesh){let x=h.skeleton;a.get(x)!==c&&(x.update(),a.set(x,c))}return f}function l(){a=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:l}}var Jm={[rc]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[lc]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[hc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[cc]:"CUSTOM_TONE_MAPPING"};function jm(n,t,e,i,s,a){let r=new _i(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,c=new me;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new Fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dt(c,u),x=new xa(-1,1,1,-1,0,1),g=null,m=null,d=!1,p,v=null,b=[],y=!1;this.setSize=function(M,S){r.setSize(M,S),l!==null&&l.setSize(M,S),o!==null&&o.setSize(M,S);for(let _=0;_<b.length;_++){let w=b[_];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){b=M,y=b.length>0&&b[0].isRenderPass===!0;let S=r.width,_=r.height;b.length>0&&l===null&&(l=new _i(S,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new _i(S,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&b.some(D=>D.needsDepthTexture===!0);w!==(r.depthTexture!==null)&&(w===!0&&h===null&&(h=new pn(S,_),a===!0&&(h.format=xn,h.type=Qn)),r.dispose(),r.depthTexture=w?h:null,r.resolveDepthBuffer=w,r.storeMultisampledDepthBuffer=w);for(let D=0;D<b.length;D++){let L=b[D];L.setSize&&L.setSize(S,_),w&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(h)}},this.begin=function(M,S){if(d||M.toneMapping===Qi&&b.length===0)return!1;if(v=S,S!==null){let _=S.width,w=S.height;(r.width!==_||r.height!==w)&&this.setSize(_,w)}return y===!1&&M.setRenderTarget(r),p=M.toneMapping,M.toneMapping=Qi,!0},this.hasRenderPass=function(){return y},this.end=function(M,S){M.toneMapping=p,d=!0;let _=r,w=l;for(let D=0;D<b.length;D++){let L=b[D];L.enabled!==!1&&(L.render(M,w,_,S),L.needsSwap!==!1&&(_=w,w=w===l?o:l))}if(g!==M.outputColorSpace||m!==M.toneMapping){g=M.outputColorSpace,m=M.toneMapping,u.defines={},se.getTransfer(g)===fe&&(u.defines.SRGB_TRANSFER="");let D=Jm[m];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(v),M.render(f,x),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),u.dispose()}}var du=new di,pu=new pn(1,1),mu=new ca(1),xu=new ta,gu=new Ir,yu=new la,qf=[],Yf=[],$f=new Float32Array(16),Kf=new Float32Array(9),Zf=new Float32Array(4);function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=qf[s];if(a===void 0&&(a=new Float32Array(s),qf[s]=a),t!==0){i.toArray(a,0);for(let r=1,l=0;r!==t;++r)l+=e,n[r].toArray(a,l)}return a}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yo(n,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),Ge(e,i)}}function sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),Ge(e,i)}}function ax(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;$f.set(i),n.uniformMatrix4fv(this.addr,!1,$f),Ge(e,i)}}function rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function hx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function $o(n){return n.version===0&&(n.compareFunction=bc,n.needsUpdate=!0),n}function px(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=$o(pu):a=du,e.setTexture2D(t||a,s)}function mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gu,s)}function xx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=$o(mu):a=yu,e.setTextureCube(t||a,s)}function gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xu,s)}function yx(n){switch(n){case 5126:return Qm;case 35664:return tx;case 35665:return ex;case 35666:return ix;case 35674:return nx;case 35675:return sx;case 35676:return ax;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return fx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(n,t){n.uniform1fv(this.addr,t)}function _x(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function bx(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function Mx(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function Sx(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wx(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tx(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ax(n,t){n.uniform1iv(this.addr,t)}function Ex(n,t){n.uniform2iv(this.addr,t)}function Cx(n,t){n.uniform3iv(this.addr,t)}function Rx(n,t){n.uniform4iv(this.addr,t)}function Px(n,t){n.uniform1uiv(this.addr,t)}function Lx(n,t){n.uniform2uiv(this.addr,t)}function Ix(n,t){n.uniform3uiv(this.addr,t)}function kx(n,t){n.uniform4uiv(this.addr,t)}function Dx(n,t,e){let i=this.cache,s=t.length,a=Yo(e,s);He(i,a)||(n.uniform1iv(this.addr,a),Ge(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=$o(pu):r=du;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||r,a[l])}function Nx(n,t,e){let i=this.cache,s=t.length,a=Yo(e,s);He(i,a)||(n.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||gu,a[r])}function Ux(n,t,e){let i=this.cache,s=t.length,a=Yo(e,s);He(i,a)||(n.uniform1iv(this.addr,a),Ge(i,a));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=$o(mu):r=yu;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||r,a[l])}function Ox(n,t,e){let i=this.cache,s=t.length,a=Yo(e,s);He(i,a)||(n.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||xu,a[r])}function Fx(n){switch(n){case 5126:return vx;case 35664:return _x;case 35665:return bx;case 35666:return Mx;case 35674:return Sx;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Ex;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Lx;case 36295:return Ix;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}var Uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yx(e.type)}},Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let l=s[a];l.setValue(t,e[l.id],i)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Jf(n,t){n.seq.push(t),n.map[t.id]=t}function zx(n,t,e){let i=n.name,s=i.length;for(Dc.lastIndex=0;;){let a=Dc.exec(i),r=Dc.lastIndex,l=a[1],o=a[2]==="]",h=a[3];if(o&&(l=l|0),h===void 0||h==="["&&r+2===s){Jf(e,h===void 0?new Uc(l,n,t):new Oc(l,n,t));break}else{let u=e.map[l];u===void 0&&(u=new Fc(l),Jf(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let l=t.getActiveUniform(e,r),o=t.getUniformLocation(e,l.name);zx(l,o,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){let l=e[a],o=i[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function jf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Bx=37297,Hx=0;function Gx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){let l=r+1;i.push(`${l===t?">":" "} ${l}: ${e[r]}`)}return i.join(`
`)}var Qf=new Gt;function Vx(n){se._getMatrix(Qf,se.workingColorSpace,n);let t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case js:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let l=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Gx(n.getShaderSource(t),l)}else return a}function Wx(n,t){let e=Vx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xx={[rc]:"Linear",[oc]:"Reinhard",[lc]:"Cineon",[ya]:"ACESFilmic",[hc]:"AgX",[fc]:"Neutral",[cc]:"Custom"};function qx(n,t){let e=Xx[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new X;function Yx(){se.getLuminanceCoefficients(Wo);let n=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function Kx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),r=a.name,l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:l}}return e}function Ca(n){return n!==""}function eu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(Jx,jx)}function jx(n,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zc(e)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace(Qx,tg)}function tg(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function su(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var eg={[ga]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function ig(n){return eg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ng={[Is]:"ENVMAP_MODE_REFRACTION"};function sg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ag={[to]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function rg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ag[n.combine]||"ENVMAP_BLENDING_NONE"}function og(n,t,e,i){let s=n.getContext(),a=e.defines,r=e.vertexShader,l=e.fragmentShader,o=ig(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=sg(e),u=rg(e),f=$x(e),x=Kx(a),g=s.createProgram(),m,d,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ca).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ca).join(`
`),d.length>0&&(d+=`
`)):(m=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),d=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Wx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),r=zc(r),r=eu(r,e),r=iu(r,e),l=zc(l),l=eu(l,e),l=iu(l,e),r=nu(r),l=nu(l),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=p+m+r,b=p+d+l,y=jf(s,s.VERTEX_SHADER,v),M=jf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,y),s.attachShader(g,M),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(L){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(y)||"",A=s.getShaderInfoLog(M)||"",C=I.trim(),B=F.trim(),N=A.trim(),U=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,M);else{let W=tu(s,y,"vertex"),K=tu(s,M,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+W+`
`+K)}else C!==""?Ft("WebGLProgram: Program Info Log:",C):(B===""||N==="")&&(G=!1);G&&(L.diagnostics={runnable:U,programLog:C,vertexShader:{log:B,prefix:m},fragmentShader:{log:N,prefix:d}})}s.deleteShader(y),s.deleteShader(M),_=new Ds(s,g),w=Zx(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Bx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}var lg=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Hc(t),e.set(t,i)),i}},Hc=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function cg(n){return n===Dn||n===wa||n===Ta}function hg(n,t,e,i,s,a){let r=new ea,l=new Bc,o=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return o.add(_),_===0?"uv":`uv${_}`}function g(_,w,D,L,I,F){let A=L.fog,C=I.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||B,N),G=f[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Z=K!==void 0?K.length:0,rt=0;C.morphAttributes.position!==void 0&&(rt=1),C.morphAttributes.normal!==void 0&&(rt=2),C.morphAttributes.color!==void 0&&(rt=3);let k,P,Q,st;if(G){let St=en[G];k=St.vertexShader,P=St.fragmentShader}else{k=_.vertexShader,P=_.fragmentShader;let St=l.getVertexShaderStage(_),ue=l.getFragmentShaderStage(_);l.update(_,St,ue),Q=St.id,st=ue.id}let ct=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),Bt=I.isInstancedMesh===!0,Qt=I.isBatchedMesh===!0,Mt=!!_.map,Ut=!!_.matcap,te=!!U,Jt=te&&U.isPMREMTexture===!0,De=!!_.aoMap,ke=!!_.lightMap,ni=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,Wi=!!_.displacementMap,Xe=!!_.emissiveMap,Mi=!!_.metalnessMap,Si=!!_.roughnessMap,wi=_.anisotropy>0,V=_.clearcoat>0,Ti=_.diffuseRoughness>0,_e=_.dispersion>0,be=_.retroreflectivity>0,bt=_.iridescence>0,Be=_.sheen>0,Ot=_.transmission>0,Vt=wi&&!!_.anisotropyMap,R=V&&!!_.clearcoatMap,T=V&&!!_.clearcoatNormalMap,Y=V&&!!_.clearcoatRoughnessMap,ot=Ti&&!!_.diffuseRoughnessMap,nt=bt&&!!_.iridescenceMap,pt=bt&&!!_.iridescenceThicknessMap,vt=Be&&!!_.sheenColorMap,tt=Be&&!!_.sheenRoughnessMap,et=!!_.specularMap,xt=!!_.specularColorMap,z=!!_.specularIntensityMap,it=Ot&&!!_.transmissionMap,j=Ot&&!!_.thicknessMap,gt=!!_.gradientMap,ut=!!_.alphaMap,mt=_.alphaTest>0,Lt=!!_.alphaHash,Kt=!!_.extensions,ht=Qi;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ht=n.toneMapping);let Dt=Jt?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Xt={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:P,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Qt,batchingColor:Qt&&I._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&I.instanceColor!==null,instancingMorph:Bt&&I.morphTexture!==null,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Mt,matcap:Ut,envMap:te,envMapMode:te&&U.mapping,envMapPMREM:Jt,envMapMaxLod:Jt?Dt.length-1:null,envMapSize:Jt?Dt[0].width:null,aoMap:De,lightMap:ke,bumpMap:ni,normalMap:Ee,displacementMap:Wi,emissiveMap:Xe,normalMapObjectSpace:Ee&&_.normalMapType===Tf,normalMapTangentSpace:Ee&&_.normalMapType===Go,packedNormalMap:Ee&&_.normalMapType===Go&&cg(_.normalMap.format),metalnessMap:Mi,roughnessMap:Si,anisotropy:wi,anisotropyMap:Vt,clearcoat:V,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,diffuseRoughness:Ti,diffuseRoughnessMap:ot,dispersion:_e,retroreflection:be,iridescence:bt,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:Be,sheenColorMap:vt,sheenRoughnessMap:tt,specularMap:et,specularColorMap:xt,specularIntensityMap:z,transmission:Ot,transmissionMap:it,thicknessMap:j,gradientMap:gt,opaque:_.transparent===!1&&_.blending===Ls&&_.alphaToCoverage===!1,alphaMap:ut,alphaTest:mt,alphaHash:Lt,combine:_.combine,mapUv:Mt&&x(_.map.channel),aoMapUv:De&&x(_.aoMap.channel),lightMapUv:ke&&x(_.lightMap.channel),bumpMapUv:ni&&x(_.bumpMap.channel),normalMapUv:Ee&&x(_.normalMap.channel),displacementMapUv:Wi&&x(_.displacementMap.channel),emissiveMapUv:Xe&&x(_.emissiveMap.channel),metalnessMapUv:Mi&&x(_.metalnessMap.channel),roughnessMapUv:Si&&x(_.roughnessMap.channel),anisotropyMapUv:Vt&&x(_.anisotropyMap.channel),clearcoatMapUv:R&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&x(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(_.sheenRoughnessMap.channel),specularMapUv:et&&x(_.specularMap.channel),specularColorMapUv:xt&&x(_.specularColorMap.channel),specularIntensityMapUv:z&&x(_.specularIntensityMap.channel),transmissionMapUv:it&&x(_.transmissionMap.channel),thicknessMapUv:j&&x(_.thicknessMap.channel),alphaMapUv:ut&&x(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ee||wi),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Mt||ut),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(St=>St.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Mt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Xe&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Oe,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=o.has(1),Xt.vertexUv2s=o.has(2),Xt.vertexUv3s=o.has(3),o.clear(),Xt}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(d(w,_),p(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function d(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.diffuseRoughness&&r.enable(25),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function v(_){let w=f[_.type],D;if(w){let L=en[w];D=zf.clone(L.uniforms)}else D=_.uniforms;return D}function b(_,w){let D=c.get(w);return D!==void 0?++D.usedTimes:(D=new og(n,w,_,s),h.push(D),c.set(w,D)),D}function y(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),c.delete(_.cacheKey),_.destroy()}}function M(_){l.remove(_)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:h,dispose:S}}function fg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let l=n.get(r);return l===void 0&&(l={},n.set(r,l)),l}function i(r){n.delete(r)}function s(r,l,o){n.get(r)[l]=o}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function ug(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function au(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ru(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function l(f,x,g,m,d,p){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:x,material:g,materialVariant:r(f),groupOrder:m,renderOrder:f.renderOrder,z:d,group:p},n[t]=v):(v.id=f.id,v.object=f,v.geometry=x,v.material=g,v.materialVariant=r(f),v.groupOrder=m,v.renderOrder=f.renderOrder,v.z=d,v.group=p),t++,v}function o(f,x,g,m,d,p,v){v.reversedDepth===!0&&(d=-d);let b=l(f,x,g,m,d,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function h(f,x,g,m,d,p){let v=l(f,x,g,m,d,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function c(f,x){e.length>1&&e.sort(f||ug),i.length>1&&i.sort(x||au),s.length>1&&s.sort(x||au)}function u(){for(let f=t,x=n.length;f<x;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:h,finish:u,sort:c}}function dg(){let n=new WeakMap;function t(i,s){let a=n.get(i),r;return a===void 0?(r=new ru,n.set(i,[r])):s>=a.length?(r=new ru,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function pg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new Nt};break;case"SpotLight":e={position:new X,direction:new X,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function mg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var xg=0;function gg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function yg(n){let t=new pg,e=mg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);let s=new X,a=new de,r=new de;function l(h){let c=0,u=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,g=0,m=0,d=0,p=0,v=0,b=0,y=0,M=0,S=0,_=0,w=0,D=0,L=0;h.sort(gg);for(let F=0,A=h.length;F<A;F++){let C=h[F],B=C.color,N=C.intensity,U=C.distance,G=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Dn?G=C.shadow.map.texture:G=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=B.r*N,u+=B.g*N,f+=B.b*N;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],N);L++}else if(C.isSunLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Z=e.get(C);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=G;let rt=K.getViewportCount();for(let k=0;k<rt;k++)i.sunShadowMatrix[m+k]=K.getMatrix(k),i.sunShadowCascade[m+k]=K._cascadeData[k];m+=rt,g++}i.sun[x]=W,x++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Z=e.get(C);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=W,d++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(N),W.distance=U,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[v]=W;let K=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,K.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[v]=K.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=G,_++}v++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(B).multiplyScalar(N),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[b]=W,b++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let K=C.shadow,Z=e.get(C);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=W,p++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(N),W.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[y]=W,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.sunLength!==x||I.directionalLength!==d||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==L)&&(i.sun.length=x,i.directional.length=d,i.spot.length=v,i.rectArea.length=b,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=m,i.sunShadowCascade.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,I.sunLength=x,I.directionalLength=d,I.pointLength=p,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=L,i.version=xg++)}function o(h,c){let u=0,f=0,x=0,g=0,m=0,d=0,p=c.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){let y=h[v];if(y.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(y.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){let M=i.point[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),x++}else if(y.isHemisphereLight){let M=i.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),d++}}}return{setup:l,setupView:o,state:i}}function ou(n){let t=new yg(n),e=[],i=[],s=[];function a(u){c.camera=u,e.length=0,i.length=0,s.length=0}function r(u){u.isLightProbeGrid?s.push(u):e.push(u)}function l(u){i.push(u)}function o(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:l}}function vg(n){let t=new WeakMap;function e(s,a=0){let r=t.get(s),l;return r===void 0?(l=new ou(n),t.set(s,[l])):a>=r.length?(l=new ou(n),r.push(l)):l=r[a],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`,Mg=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Sg=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],lu=new de,Ea=new X,Nc=new X;function wg(n,t,e){let i=new Cn,s=new qt,a=new qt,r=new Se,l=new zr,o=new Br,h={},c=e.maxTextureSize,u={[kn]:Qe,[Qe]:kn,[Oe]:Oe},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:_g,fragmentShader:bg}),x=f.clone();x.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new dt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let p=this.type;this.render=function(S,_,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;this.type===ef&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);let D=n.getRenderTarget(),L=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let A=p!==this.type;A&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=S.length;C<B;C++){let N=S[C],U=N.shadow;if(U===void 0){Ft("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let G=U.getFrameExtents();s.multiply(G),a.copy(U.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/G.x),s.x=a.x*G.x,U.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/G.y),s.y=a.y*G.y,U.mapSize.y=a.y));let W=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=W,U.map===null||A===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ps){if(N.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new _i(s.x,s.y,{format:Dn,type:Fi,minFilter:ui,magFilter:ui,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new pn(s.x,s.y,Ci),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=un,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ke,U.map.depthTexture.magFilter=Ke}else N.isPointLight?(U.map=new Ra(s.x),U.map.depthTexture=new ca(s.x,Oi)):(U.map=new _i(s.x,s.y),U.map.depthTexture=new pn(s.x,s.y,Oi)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=un,this.type===ga?(U.map.depthTexture.compareFunction=W?_c:vc,U.map.depthTexture.minFilter=ui,U.map.depthTexture.magFilter=ui):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ke,U.map.depthTexture.magFilter=Ke);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let K=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,w);let Z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:w.layers;for(let rt=0;rt<K;rt++){let k=U.getCamera(rt);if(N.isPointLight){let P=U.camera,Q=U.matrix,st=N.distance||P.far;st!==P.far&&(P.far=st,P.updateProjectionMatrix()),Ea.setFromMatrixPosition(N.matrixWorld),P.position.copy(Ea),Nc.copy(P.position),Nc.add(Mg[rt]),P.up.copy(Sg[rt]),P.lookAt(Nc),P.updateMatrixWorld(),Q.makeTranslation(-Ea.x,-Ea.y,-Ea.z),lu.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),U._frustum.setFromProjectionMatrix(lu,P.coordinateSystem,P.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(U.map),n.clear());let P=U.getViewport(rt);r.set(a.x*P.x,a.y*P.y,a.x*P.z,a.y*P.w),F.viewport(r)}i=U.getFrustum(rt),y(_,w,k,N,Z,this.type)}U.isPointLightShadow!==!0&&this.type===Ps&&v(U,w),U.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(D,L,I)};function v(S,_){let w=t.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,x.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),S.mapPass===null?S.mapPass=new _i(s.x,s.y,{format:Dn,type:Fi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,w,f,m,null),x.uniforms.shadow_pass.value=S.mapPass.texture,x.uniforms.resolution.value.set(S.map.width,S.map.height),x.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,w,x,m,null)}function b(S,_,w,D){let L=null,I=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)L=I;else if(L=w.isPointLight===!0?o:l,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=L.uuid,A=_.uuid,C=h[F];C===void 0&&(C={},h[F]=C);let B=C[A];B===void 0&&(B=L.clone(),C[A]=B,_.addEventListener("dispose",M)),L=B}if(L.visible=_.visible,L.wireframe=_.wireframe,D===Ps?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:u[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let F=n.properties.get(L);F.light=w}return L}function y(S,_,w,D,L,I){if(S.visible===!1)return;if(S.layers.test(L)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Ps)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let C=t.update(S),B=S.material;if(Array.isArray(B)){let N=C.groups;for(let U=0,G=N.length;U<G;U++){let W=N[U],K=B[W.materialIndex];if(K&&K.visible){let Z=b(S,K,D,I);S.onBeforeShadow(n,S,_,w,C,Z,W),n.renderBufferDirect(w,null,C,Z,S,W),S.onAfterShadow(n,S,_,w,C,Z,W)}}}else if(B.visible){let N=b(S,B,D,I);S.onBeforeShadow(n,S,_,w,C,N,null),n.renderBufferDirect(w,null,C,N,S,null),S.onAfterShadow(n,S,_,w,C,N,null)}}let A=S.children;for(let C=0,B=A.length;C<B;C++)y(A[C],_,w,D,L,I)}function M(S){S.target.removeEventListener("dispose",M);for(let w in h){let D=h[w],L=S.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function Tg(n,t){function e(){let z=!1,it=new Se,j=null,gt=new Se(0,0,0,0);return{setMask:function(ut){j!==ut&&!z&&(n.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){z=ut},setClear:function(ut,mt,Lt,Kt,ht){ht===!0&&(ut*=Kt,mt*=Kt,Lt*=Kt),it.set(ut,mt,Lt,Kt),gt.equals(it)===!1&&(n.clearColor(ut,mt,Lt,Kt),gt.copy(it))},reset:function(){z=!1,j=null,gt.set(-1,0,0,0)}}}function i(){let z=!1,it=!1,j=null,gt=null,ut=null;return{setReversed:function(mt){if(it!==mt){let Lt=t.get("EXT_clip_control");mt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),it=mt;let Kt=ut;ut=null,this.setClear(Kt)}},getReversed:function(){return it},setTest:function(mt){mt?at(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(mt){j!==mt&&!z&&(n.depthMask(mt),j=mt)},setFunc:function(mt){if(it&&(mt=Uf[mt]),gt!==mt){switch(mt){case _r:n.depthFunc(n.NEVER);break;case br:n.depthFunc(n.ALWAYS);break;case Mr:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Sr:n.depthFunc(n.EQUAL);break;case wr:n.depthFunc(n.GEQUAL);break;case Tr:n.depthFunc(n.GREATER);break;case Ar:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){ut!==mt&&(ut=mt,it&&(mt=1-mt),n.clearDepth(mt))},reset:function(){z=!1,j=null,gt=null,ut=null,it=!1}}}function s(){let z=!1,it=null,j=null,gt=null,ut=null,mt=null,Lt=null,Kt=null,ht=null;return{setTest:function(Dt){z||(Dt?at(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(Dt){it!==Dt&&!z&&(n.stencilMask(Dt),it=Dt)},setFunc:function(Dt,Xt,St){(j!==Dt||gt!==Xt||ut!==St)&&(n.stencilFunc(Dt,Xt,St),j=Dt,gt=Xt,ut=St)},setOp:function(Dt,Xt,St){(mt!==Dt||Lt!==Xt||Kt!==St)&&(n.stencilOp(Dt,Xt,St),mt=Dt,Lt=Xt,Kt=St)},setLocked:function(Dt){z=Dt},setClear:function(Dt){ht!==Dt&&(n.clearStencil(Dt),ht=Dt)},reset:function(){z=!1,it=null,j=null,gt=null,ut=null,mt=null,Lt=null,Kt=null,ht=null}}}let a=new e,r=new i,l=new s,o={},h=new WeakMap,c={},u={},f={},x=new WeakMap,g=[],m=null,d=!1,p=null,v=null,b=null,y=null,M=null,S=null,_=null,w=new Nt(0,0,0),D=0,L=!1,I=null,F=null,A=null,C=null,B=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,G=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=G>=2);let K=null,Z={},rt=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),P=new Se().fromArray(rt),Q=new Se().fromArray(k);function st(z,it,j,gt){let ut=new Uint8Array(4),mt=n.createTexture();n.bindTexture(z,mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<j;Lt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(it+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return mt}let ct={};ct[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),l.setClear(0),at(n.DEPTH_TEST),r.setFunc(bs),ni(!1),Ee(ec),at(n.CULL_FACE),De(Zn);function at(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function Bt(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function Qt(z,it){return f[z]!==it?(n.bindFramebuffer(z,it),f[z]=it,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Mt(z,it){let j=g,gt=!1;if(z){j=x.get(it),j===void 0&&(j=[],x.set(it,j));let ut=z.textures;if(j.length!==ut.length||j[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Lt=ut.length;mt<Lt;mt++)j[mt]=n.COLOR_ATTACHMENT0+mt;j.length=ut.length,gt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,gt=!0);gt&&n.drawBuffers(j)}function Ut(z){return m!==z?(n.useProgram(z),m=z,!0):!1}let te={[Jn]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[af]:n.FUNC_REVERSE_SUBTRACT};te[rf]=n.MIN,te[of]=n.MAX;let Jt={[lf]:n.ZERO,[cf]:n.ONE,[hf]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[uf]:n.DST_ALPHA,[ff]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function De(z,it,j,gt,ut,mt,Lt,Kt,ht,Dt){if(z===Zn){d===!0&&(Bt(n.BLEND),d=!1);return}if(d===!1&&(at(n.BLEND),d=!0),z!==nf){if(z!==p||Dt!==L){if((v!==Jn||M!==Jn)&&(n.blendEquation(n.FUNC_ADD),v=Jn,M=Jn),Dt)switch(z){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Le:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",z);break}else switch(z){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Le:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ic:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",z);break}b=null,y=null,S=null,_=null,w.set(0,0,0),D=0,p=z,L=Dt}return}ut=ut||it,mt=mt||j,Lt=Lt||gt,(it!==v||ut!==M)&&(n.blendEquationSeparate(te[it],te[ut]),v=it,M=ut),(j!==b||gt!==y||mt!==S||Lt!==_)&&(n.blendFuncSeparate(Jt[j],Jt[gt],Jt[mt],Jt[Lt]),b=j,y=gt,S=mt,_=Lt),(Kt.equals(w)===!1||ht!==D)&&(n.blendColor(Kt.r,Kt.g,Kt.b,ht),w.copy(Kt),D=ht),p=z,L=!1}function ke(z,it){z.side===Oe?Bt(n.CULL_FACE):at(n.CULL_FACE);let j=z.side===Qe;it&&(j=!j),ni(j),z.blending===Ls&&z.transparent===!1?De(Zn):De(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),a.setMask(z.colorWrite);let gt=z.stencilWrite;l.setTest(gt),gt&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Xe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ni(z){I!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),I=z)}function Ee(z){z!==Qh?(at(n.CULL_FACE),z!==F&&(z===ec?n.cullFace(n.BACK):z===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),F=z}function Wi(z){z!==A&&(U&&n.lineWidth(z),A=z)}function Xe(z,it,j){z?(at(n.POLYGON_OFFSET_FILL),(C!==it||B!==j)&&(C=it,B=j,r.getReversed()&&(it=-it,j=-j),n.polygonOffset(it,j))):Bt(n.POLYGON_OFFSET_FILL)}function Mi(z){z?at(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function Si(z){z===void 0&&(z=n.TEXTURE0+N-1),K!==z&&(n.activeTexture(z),K=z)}function wi(z,it,j){j===void 0&&(K===null?j=n.TEXTURE0+N-1:j=K);let gt=Z[j];gt===void 0&&(gt={type:void 0,texture:void 0},Z[j]=gt),(gt.type!==z||gt.texture!==it)&&(K!==j&&(n.activeTexture(j),K=j),n.bindTexture(z,it||ct[z]),gt.type=z,gt.texture=it)}function V(){let z=Z[K];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ti(){try{n.compressedTexImage2D(...arguments)}catch(z){Ht("WebGLState:",z)}}function _e(){try{n.compressedTexImage3D(...arguments)}catch(z){Ht("WebGLState:",z)}}function be(){try{n.texSubImage2D(...arguments)}catch(z){Ht("WebGLState:",z)}}function bt(){try{n.texSubImage3D(...arguments)}catch(z){Ht("WebGLState:",z)}}function Be(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Ht("WebGLState:",z)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Ht("WebGLState:",z)}}function Vt(){try{n.texStorage2D(...arguments)}catch(z){Ht("WebGLState:",z)}}function R(){try{n.texStorage3D(...arguments)}catch(z){Ht("WebGLState:",z)}}function T(){try{n.texImage2D(...arguments)}catch(z){Ht("WebGLState:",z)}}function Y(){try{n.texImage3D(...arguments)}catch(z){Ht("WebGLState:",z)}}function ot(z){return u[z]!==void 0?u[z]:n.getParameter(z)}function nt(z,it){u[z]!==it&&(n.pixelStorei(z,it),u[z]=it)}function pt(z){P.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),P.copy(z))}function vt(z){Q.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function tt(z,it){let j=h.get(it);j===void 0&&(j=new WeakMap,h.set(it,j));let gt=j.get(z);gt===void 0&&(gt=n.getUniformBlockIndex(it,z.name),n.uniformBlockBinding(it,gt,gt),j.set(z,gt))}function et(z,it,j){let ut=h.get(it).get(z);o[ut]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ut,j),o[ut]=j)}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},u={},K=null,Z={},f={},o={},x=new WeakMap,g=[],m=null,d=!1,p=null,v=null,b=null,y=null,M=null,S=null,_=null,w=new Nt(0,0,0),D=0,L=!1,I=null,F=null,A=null,C=null,B=null,P.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),l.reset()}return{buffers:{color:a,depth:r,stencil:l},enable:at,disable:Bt,bindFramebuffer:Qt,drawBuffers:Mt,useProgram:Ut,setBlending:De,setMaterial:ke,setFlipSided:ni,setCullFace:Ee,setLineWidth:Wi,setPolygonOffset:Xe,setScissorTest:Mi,activeTexture:Si,bindTexture:wi,unbindTexture:V,compressedTexImage2D:Ti,compressedTexImage3D:_e,texImage2D:T,texImage3D:Y,pixelStorei:nt,getParameter:ot,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:Vt,texStorage3D:R,texSubImage2D:be,texSubImage3D:bt,compressedTexSubImage2D:Be,compressedTexSubImage3D:Ot,scissor:pt,viewport:vt,reset:xt}}function Ag(n,t,e,i,s,a,r){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,c=new WeakMap,u=new Set,f,x=new WeakMap,g=new Set,m=new FinalizationRegistry(R=>g.delete(R)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return d?new OffscreenCanvas(R,T):Qs("canvas")}function v(R,T,Y){let ot=1,nt=Vt(R);if((nt.width>Y||nt.height>Y)&&(ot=Y/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(ot*nt.width),vt=Math.floor(ot*nt.height);f===void 0&&(f=p(pt,vt));let tt=T?p(pt,vt):f;return tt.width=pt,tt.height=vt,tt.getContext("2d").drawImage(R,0,0,pt,vt),Ft("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+vt+")."),tt}else return"data"in R&&Ft("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function b(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,T,Y,ot,nt,pt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let vt;ot&&(vt=t.get("EXT_texture_norm16"),vt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=T;if(T===n.RED&&(Y===n.FLOAT&&(tt=n.R32F),Y===n.HALF_FLOAT&&(tt=n.R16F),Y===n.UNSIGNED_BYTE&&(tt=n.R8),Y===n.UNSIGNED_SHORT&&vt&&(tt=vt.R16_EXT),Y===n.SHORT&&vt&&(tt=vt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(tt=n.R8UI),Y===n.UNSIGNED_SHORT&&(tt=n.R16UI),Y===n.UNSIGNED_INT&&(tt=n.R32UI),Y===n.BYTE&&(tt=n.R8I),Y===n.SHORT&&(tt=n.R16I),Y===n.INT&&(tt=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(tt=n.RG32F),Y===n.HALF_FLOAT&&(tt=n.RG16F),Y===n.UNSIGNED_BYTE&&(tt=n.RG8),Y===n.UNSIGNED_SHORT&&vt&&(tt=vt.RG16_EXT),Y===n.SHORT&&vt&&(tt=vt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(tt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(tt=n.RG16UI),Y===n.UNSIGNED_INT&&(tt=n.RG32UI),Y===n.BYTE&&(tt=n.RG8I),Y===n.SHORT&&(tt=n.RG16I),Y===n.INT&&(tt=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),Y===n.UNSIGNED_INT&&(tt=n.RGB32UI),Y===n.BYTE&&(tt=n.RGB8I),Y===n.SHORT&&(tt=n.RGB16I),Y===n.INT&&(tt=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(tt=n.RGBA32UI),Y===n.BYTE&&(tt=n.RGBA8I),Y===n.SHORT&&(tt=n.RGBA16I),Y===n.INT&&(tt=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_SHORT&&vt&&(tt=vt.RGB16_EXT),Y===n.SHORT&&vt&&(tt=vt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),T===n.RGBA){let et=pt?js:se.getTransfer(nt);Y===n.FLOAT&&(tt=n.RGBA32F),Y===n.HALF_FLOAT&&(tt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(tt=et===fe?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&vt&&(tt=vt.RGBA16_EXT),Y===n.SHORT&&vt&&(tt=vt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(R,T){let Y;return R?T===null||T===Oi||T===Qn?Y=n.DEPTH24_STENCIL8:T===Ci?Y=n.DEPTH32F_STENCIL8:T===ks&&(Y=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oi||T===Qn?Y=n.DEPTH_COMPONENT24:T===Ci?Y=n.DEPTH_COMPONENT32F:T===ks&&(Y=n.DEPTH_COMPONENT16),Y}function w(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==ui?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function D(R){let T=new WeakRef(R);i.get(R).__ref=T,g.add(T),m.register(R,T,T)}function L(R){let T=i.get(R).__ref;T!==void 0&&(g.delete(T),m.unregister(T))}function I(R){A(R.target)}function F(R){C(R.target)}function A(R){R.removeEventListener("dispose",I),L(R),N(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&u.delete(R)}function C(R){R.removeEventListener("dispose",F),L(R),G(R)}function B(){for(let R of g){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):A(T))}g.clear(),u.clear()}function N(R){let T=i.get(R);if(T.__webglInit===void 0)return;let Y=R.source,ot=x.get(Y);if(ot){let nt=ot[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&U(R),Object.keys(ot).length===0&&x.delete(Y)}i.remove(R)}function U(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let Y=R.source,ot=x.get(Y);delete ot[T.__cacheKey],r.memory.textures--}function G(R){let T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Y=R.depthTexture;if(Y&&Y.renderTarget===R&&A(Y),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let pt=0;pt<T.__webglFramebuffer[nt].length;pt++)n.deleteFramebuffer(T.__webglFramebuffer[nt][pt]);else n.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)n.deleteFramebuffer(T.__webglFramebuffer[nt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ot=R.textures;for(let nt=0,pt=ot.length;nt<pt;nt++){let vt=i.get(ot[nt]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),r.memory.textures--),i.remove(ot[nt])}i.remove(R)}let W=0;function K(){W=0}function Z(){return W}function rt(R){W=R}function k(){let R=W;return R>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function P(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function Q(R,T){let Y=i.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let ot=R.image;if(ot===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,R,T);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function st(R,T){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){ke(Y,R,T);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function ct(R,T){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){ke(Y,R,T);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function at(R,T){let Y=i.get(R);if(R.version>0&&Y.__version!==R.version){ni(Y,R,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}let Bt={[fn]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Er]:n.MIRRORED_REPEAT},Qt={[Ke]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[va]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[mn]:n.LINEAR_MIPMAP_LINEAR},Mt={[Ef]:n.NEVER,[bc]:n.ALWAYS,[Cf]:n.LESS,[vc]:n.LEQUAL,[Rf]:n.EQUAL,[_c]:n.GEQUAL,[Pf]:n.GREATER,[Lf]:n.NOTEQUAL};function Ut(R,T){if(T.type===Ci&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ui||T.magFilter===no||T.magFilter===va||T.magFilter===mn||T.minFilter===ui||T.minFilter===no||T.minFilter===va||T.minFilter===mn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Bt[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Bt[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Bt[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Qt[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Qt[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ke||T.minFilter!==va&&T.minFilter!==mn||T.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function te(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I),D(T));let ot=T.source,nt=x.get(ot);nt===void 0&&(nt={},x.set(ot,nt));let pt=P(T);if(pt!==R.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),nt[pt].usedTimes++;let vt=nt[R.__cacheKey];vt!==void 0&&(nt[R.__cacheKey].usedTimes--,vt.usedTimes===0&&U(T)),R.__cacheKey=pt,R.__webglTexture=nt[pt].texture}return Y}function Jt(R,T,Y){return Math.floor(Math.floor(R/Y)/T)}function De(R,T,Y,ot){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,ot,T.data);else{pt.sort((z,it)=>z.start-it.start);let vt=0;for(let z=1;z<pt.length;z++){let it=pt[vt],j=pt[z],gt=it.start+it.count,ut=Jt(j.start,T.width,4),mt=Jt(it.start,T.width,4);j.start<=gt+1&&ut===mt&&Jt(j.start+j.count-1,T.width,4)===ut?it.count=Math.max(it.count,j.start+j.count-it.start):(++vt,pt[vt]=j)}pt.length=vt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let z=0,it=pt.length;z<it;z++){let j=pt[z],gt=Math.floor(j.start/4),ut=Math.ceil(j.count/4),mt=gt%T.width,Lt=Math.floor(gt/T.width),Kt=ut,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(n.TEXTURE_2D,0,mt,Lt,Kt,ht,Y,ot,T.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function ke(R,T,Y){let ot=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=n.TEXTURE_3D);let nt=te(R,T),pt=T.source;e.bindTexture(ot,R.__webglTexture,n.TEXTURE0+Y);let vt=i.get(pt);if(pt.version!==vt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ht=se.getPrimaries(se.workingColorSpace),Dt=T.colorSpace===gn?null:se.getPrimaries(T.colorSpace),Xt=T.colorSpace===gn||ht===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let et=v(T.image,!1,s.maxTextureSize);et=Ot(T,et);let xt=a.convert(T.format,T.colorSpace),z=a.convert(T.type),it=S(T.internalFormat,xt,z,T.normalized,T.colorSpace,T.isVideoTexture);Ut(ot,T);let j,gt=T.mipmaps,ut=T.isVideoTexture!==!0,mt=vt.__version===void 0||nt===!0,Lt=pt.dataReady,Kt=w(T,et);if(T.isDepthTexture)it=_(T.format===xn,T.type),mt&&(ut?e.texStorage2D(n.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,it,et.width,et.height,0,xt,z,null));else if(T.isDataTexture)if(gt.length>0){ut&&mt&&e.texStorage2D(n.TEXTURE_2D,Kt,it,gt[0].width,gt[0].height);for(let ht=0,Dt=gt.length;ht<Dt;ht++)j=gt[ht],ut?Lt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,j.width,j.height,xt,z,j.data):e.texImage2D(n.TEXTURE_2D,ht,it,j.width,j.height,0,xt,z,j.data);T.generateMipmaps=!1}else ut?(mt&&e.texStorage2D(n.TEXTURE_2D,Kt,it,et.width,et.height),Lt&&De(T,et,xt,z)):e.texImage2D(n.TEXTURE_2D,0,it,et.width,et.height,0,xt,z,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ut&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,it,gt[0].width,gt[0].height,et.depth);for(let ht=0,Dt=gt.length;ht<Dt;ht++)if(j=gt[ht],T.format!==zi)if(xt!==null)if(ut){if(Lt)if(T.layerUpdates.size>0){let Xt=Cc(j.width,j.height,T.format,T.type);for(let St of T.layerUpdates){let ue=j.data.subarray(St*Xt/j.data.BYTES_PER_ELEMENT,(St+1)*Xt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,St,j.width,j.height,1,xt,ue)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,j.width,j.height,et.depth,xt,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,it,j.width,j.height,et.depth,0,j.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,j.width,j.height,et.depth,xt,z,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,it,j.width,j.height,et.depth,0,xt,z,j.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ut&&mt&&e.texStorage2D(n.TEXTURE_2D,Kt,it,gt[0].width,gt[0].height);for(let ht=0,Dt=gt.length;ht<Dt;ht++)j=gt[ht],T.format!==zi?xt!==null?ut?Lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,j.width,j.height,xt,j.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,it,j.width,j.height,0,j.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Lt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,j.width,j.height,xt,z,j.data):e.texImage2D(n.TEXTURE_2D,ht,it,j.width,j.height,0,xt,z,j.data)}else if(T.isDataArrayTexture)if(ut){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,it,et.width,et.height,et.depth),Lt)if(T.layerUpdates.size>0){let ht=Cc(et.width,et.height,T.format,T.type);for(let Dt of T.layerUpdates){let Xt=et.data.subarray(Dt*ht/et.data.BYTES_PER_ELEMENT,(Dt+1)*ht/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Dt,et.width,et.height,1,xt,z,Xt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,z,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,xt,z,et.data);else if(T.isData3DTexture)ut?(mt&&e.texStorage3D(n.TEXTURE_3D,Kt,it,et.width,et.height,et.depth),Lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,z,et.data)):e.texImage3D(n.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,xt,z,et.data);else if(T.isFramebufferTexture){if(mt)if(ut)e.texStorage2D(n.TEXTURE_2D,Kt,it,et.width,et.height);else{let ht=et.width,Dt=et.height;for(let Xt=0;Xt<Kt;Xt++)e.texImage2D(n.TEXTURE_2D,Xt,it,ht,Dt,0,xt,z,null),ht>>=1,Dt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),et.parentNode!==ht){ht.appendChild(et),u.add(T),ht.onpaint=Dt=>{let Xt=Dt.changedElements;for(let St of u)Xt.includes(St.image)&&(St.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let Xt=n.RGBA,St=n.RGBA,ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xt,St,ue,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ut&&mt){let ht=Vt(gt[0]);e.texStorage2D(n.TEXTURE_2D,Kt,it,ht.width,ht.height)}for(let ht=0,Dt=gt.length;ht<Dt;ht++)j=gt[ht],ut?Lt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,xt,z,j):e.texImage2D(n.TEXTURE_2D,ht,it,xt,z,j);T.generateMipmaps=!1}else if(ut){if(mt){let ht=Vt(et);e.texStorage2D(n.TEXTURE_2D,Kt,it,ht.width,ht.height)}Lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,z,et)}else e.texImage2D(n.TEXTURE_2D,0,it,xt,z,et);b(T)&&T.mipmapsAutoUpdate===!0&&y(ot),vt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ni(R,T,Y){if(T.image.length!==6)return;let ot=te(R,T),nt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);let pt=i.get(nt);if(nt.version!==pt.__version||ot===!0){e.activeTexture(n.TEXTURE0+Y);let vt=se.getPrimaries(se.workingColorSpace),tt=T.colorSpace===gn?null:se.getPrimaries(T.colorSpace),et=T.colorSpace===gn||vt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let xt=T.isCompressedTexture||T.image[0].isCompressedTexture,z=T.image[0]&&T.image[0].isDataTexture,it=[];for(let St=0;St<6;St++)!xt&&!z?it[St]=v(T.image[St],!0,s.maxCubemapSize):it[St]=z?T.image[St].image:T.image[St],it[St]=Ot(T,it[St]);let j=it[0],gt=a.convert(T.format,T.colorSpace),ut=a.convert(T.type),mt=S(T.internalFormat,gt,ut,T.normalized,T.colorSpace),Lt=T.isVideoTexture!==!0,Kt=pt.__version===void 0||ot===!0,ht=nt.dataReady,Dt=w(T,j);Ut(n.TEXTURE_CUBE_MAP,T);let Xt;if(T.isDepthTexture){if(mt=_(T.format===xn,T.type),Kt)if(Lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,mt,j.width,j.height);else for(let St=0;St<6;St++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,mt,j.width,j.height,0,gt,ut,null)}else if(xt){Lt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,mt,j.width,j.height);for(let St=0;St<6;St++){Xt=it[St].mipmaps;for(let ue=0;ue<Xt.length;ue++){let qe=Xt[ue];T.format!==zi?gt!==null?Lt?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue,0,0,qe.width,qe.height,gt,qe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue,mt,qe.width,qe.height,0,qe.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue,0,0,qe.width,qe.height,gt,ut,qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue,mt,qe.width,qe.height,0,gt,ut,qe.data)}}}else{if(Xt=T.mipmaps,Lt&&Kt){Xt.length>0&&Dt++;let St=Vt(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,mt,St.width,St.height)}for(let St=0;St<6;St++)if(z){Lt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,it[St].width,it[St].height,gt,ut,it[St].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,mt,it[St].width,it[St].height,0,gt,ut,it[St].data);for(let ue=0;ue<Xt.length;ue++){let vn=Xt[ue].image[St].image;Lt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue+1,0,0,vn.width,vn.height,gt,ut,vn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue+1,mt,vn.width,vn.height,0,gt,ut,vn.data)}}else{Lt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,gt,ut,it[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,mt,gt,ut,it[St]);for(let ue=0;ue<Xt.length;ue++){let qe=Xt[ue];Lt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue+1,0,0,gt,ut,qe.image[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,ue+1,mt,gt,ut,qe.image[St])}}}b(T)&&T.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),pt.__version=nt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ee(R,T,Y,ot,nt,pt){let vt=a.convert(Y.format,Y.colorSpace),tt=a.convert(Y.type),et=S(Y.internalFormat,vt,tt,Y.normalized,Y.colorSpace),xt=i.get(T),z=i.get(Y);if(z.__renderTarget=T,!xt.__hasExternalTextures){let it=Math.max(1,T.width>>pt),j=Math.max(1,T.height>>pt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,et,it,j,T.depth,0,vt,tt,null):e.texImage2D(nt,pt,et,it,j,0,vt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),bt(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,nt,z.__webglTexture,0,be(T)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,nt,z.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wi(R,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let ot=T.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,pt=_(T.stencilBuffer,nt),vt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(T),pt,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(T),pt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,R)}else{let ot=T.textures;for(let nt=0;nt<ot.length;nt++){let pt=ot[nt],vt=a.convert(pt.format,pt.colorSpace),tt=a.convert(pt.type),et=S(pt.internalFormat,vt,tt,pt.normalized,pt.colorSpace);bt(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(T),et,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(T),et,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,et,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(R,T,Y){let ot=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(T.depthTexture);nt.__renderTarget=T;let pt=ot?T.depthTexture.image[0]:T.depthTexture.image;(!nt.__webglTexture||pt.width!==T.width||pt.height!==T.height)&&(pt.width=T.width,pt.height=T.height,T.depthTexture.needsUpdate=!0),ot?at(T.depthTexture,0):Q(T.depthTexture,0);let vt=nt.__webglTexture,tt=be(T),et=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,xt=T.depthTexture.format===xn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===un)bt(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,et,vt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,et,vt,0);else if(T.depthTexture.format===xn)bt(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,et,vt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,et,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mi(R){let T=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let ot=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ot){let nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=ot}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let ot=0;ot<6;ot++)Xe(T.__webglFramebuffer[ot],R,ot);else R.texture.mipmaps.length>0?Xe(T.__webglFramebuffer[0],R,0):Xe(T.__webglFramebuffer,R,0);else if(Y){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]===void 0)T.__webglDepthbuffer[ot]=n.createRenderbuffer(),Wi(T.__webglDepthbuffer[ot],R,!1);else{let nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Wi(T.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Si(R,T,Y){let ot=i.get(R);T!==void 0&&Ee(ot.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Mi(R)}function wi(R){let T=R.texture,Y=i.get(R),ot=i.get(T);R.addEventListener("dispose",F),D(R);let nt=R.textures,pt=R.isWebGLCubeRenderTarget===!0,vt=nt.length>1;if(vt||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=T.version,r.memory.textures++),pt){Y.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0){Y.__webglFramebuffer[tt]=[];for(let et=0;et<T.mipmaps.length;et++)Y.__webglFramebuffer[tt][et]=n.createFramebuffer()}else Y.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let tt=0;tt<T.mipmaps.length;tt++)Y.__webglFramebuffer[tt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(vt)for(let tt=0,et=nt.length;tt<et;tt++){let xt=i.get(nt[tt]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),r.memory.textures++)}if(R.samples>0&&bt(R)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let tt=0;tt<nt.length;tt++){let et=nt[tt];Y.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[tt]);let xt=a.convert(et.format,et.colorSpace),z=a.convert(et.type),it=S(et.internalFormat,xt,z,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),j=be(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,it,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Wi(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,T);for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ee(Y.__webglFramebuffer[tt][et],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else Ee(Y.__webglFramebuffer[tt],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(T)?y(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let tt=0,et=nt.length;tt<et;tt++){let xt=nt[tt],z=i.get(xt),it=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,z.__webglTexture),Ut(it,xt),Ee(Y.__webglFramebuffer,R,xt,n.COLOR_ATTACHMENT0+tt,it,0),b(xt)&&y(it)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,ot.__webglTexture),Ut(tt,T),T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ee(Y.__webglFramebuffer[et],R,T,n.COLOR_ATTACHMENT0,tt,et);else Ee(Y.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,tt,0);b(T)?y(tt):T.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Mi(R)}function V(R){let T=R.textures;for(let Y=0,ot=T.length;Y<ot;Y++){let nt=T[Y];if(b(nt)&&nt.mipmapsAutoUpdate===!0){let pt=M(R),vt=i.get(nt).__webglTexture;e.bindTexture(pt,vt),y(pt),e.unbindTexture()}}}let Ti=[];function _e(R){if(R.samples>0){if(bt(R)===!1){let T=R.textures,Y=R.width,ot=R.height,nt=n.COLOR_BUFFER_BIT,pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(R),tt=T.length>1;if(tt)for(let xt=0;xt<T.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let xt=0;xt<T.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[xt]);let z=i.get(T[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,nt,n.NEAREST),o===!0&&(Ti.length=0,Ti.push(n.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ti.push(pt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ti))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let xt=0;xt<T.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[xt]);let z=i.get(T[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,z,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&o){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function bt(R){let T=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(R){let T=r.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function Ot(R,T){let Y=R.colorSpace,ot=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Js&&Y!==gn&&(se.getTransfer(Y)===fe?(ot!==zi||nt!==xi)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Y)),T}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.getTextureUnits=Z,this.setTextureUnits=rt,this.setTexture2D=Q,this.setTexture2DArray=st,this.setTexture3D=ct,this.setTextureCube=at,this.rebindTextures=Si,this.setupRenderTarget=wi,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Mi,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=bt,this.dispose=B}function Eg(n,t){function e(i,s=gn){let a,r=se.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===ao)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dc)return n.BYTE;if(i===pc)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===so)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===gc)return n.ALPHA;if(i===yc)return n.RGB;if(i===zi)return n.RGBA;if(i===un)return n.DEPTH_COMPONENT;if(i===xn)return n.DEPTH_STENCIL;if(i===oo)return n.RED;if(i===lo)return n.RED_INTEGER;if(i===Dn)return n.RG;if(i===co)return n.RG_INTEGER;if(i===ho)return n.RGBA_INTEGER;if(i===_a||i===ba||i===Ma||i===Sa)if(r===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===uo||i===po||i===mo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===po)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===go||i===yo||i===vo||i===_o||i===wa||i===bo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===xo||i===go)return r===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===yo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===vo)return a.COMPRESSED_R11_EAC;if(i===_o)return a.COMPRESSED_SIGNED_R11_EAC;if(i===wa)return a.COMPRESSED_RG11_EAC;if(i===bo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mo||i===So||i===wo||i===To||i===Ao||i===Eo||i===Co||i===Ro||i===Po||i===Lo||i===Io||i===ko||i===Do||i===No)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Mo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===To)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ao)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Co)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ro)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ko)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Oo||i===Fo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Uo)return r===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zo||i===Bo||i===Ta||i===Ho)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===zo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ho)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ji({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new je(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends qi{constructor(t,e){super();let i=this,s=null,a=1,r=null,l="local-floor",o=1,h=null,c=null,u=null,f=null,x=null,g=null,m=typeof XRWebGLBinding<"u",d=new Gc,p={},v=e.getContextAttributes(),b=null,y=null,M=[],S=[],_=new qt,w=null,D=null,L=new Je;L.viewport=new Se;let I=new Je;I.viewport=new Se;let F=[L,I],A=new jr,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let Q=M[P];return Q===void 0&&(Q=new Ts,M[P]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(P){let Q=M[P];return Q===void 0&&(Q=new Ts,M[P]=Q),Q.getGripSpace()},this.getHand=function(P){let Q=M[P];return Q===void 0&&(Q=new Ts,M[P]=Q),Q.getHandSpace()};function N(P){let Q=S.indexOf(P.inputSource);if(Q===-1)return;let st=M[Q];st!==void 0&&(st.update(P.inputSource,P.frame,h||r),st.dispatchEvent({type:P.type,data:P.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",G);for(let P=0;P<M.length;P++){let Q=S[P];Q!==null&&(S[P]=null,M[P].disconnect(Q))}C=null,B=null,d.reset();for(let P in p)delete p[P];if(t.setRenderTarget(b),x=null,f=null,u=null,s=null,y=null,k.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),D!==null){let P=D.camera;P.fov=D.fov,P.zoom=D.zoom,P.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){a=P,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){l=P,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(P){h=P},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ct=null,at=null;v.depth&&(at=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?xn:un,ct=v.stencil?Qn:Oi);let Bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new _i(f.textureWidth,f.textureHeight,{format:zi,type:xi,depthTexture:new pn(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let st={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),y=new _i(x.framebufferWidth,x.framebufferHeight,{format:zi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),h=null,r=await s.requestReferenceSpace(l),k.setContext(s),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function G(P){for(let Q=0;Q<P.removed.length;Q++){let st=P.removed[Q],ct=S.indexOf(st);ct>=0&&(S[ct]=null,M[ct].disconnect(st))}for(let Q=0;Q<P.added.length;Q++){let st=P.added[Q],ct=S.indexOf(st);if(ct===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=S.length){S.push(st),ct=Bt;break}else if(S[Bt]===null){S[Bt]=st,ct=Bt;break}if(ct===-1)break}let at=M[ct];at&&at.connect(st)}}function W(P,Q){Q===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(Q.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let Q=P.near,st=P.far;d.texture!==null&&(d.depthNear>0&&(Q=d.depthNear),d.depthFar>0&&(st=d.depthFar)),A.near=I.near=L.near=Q,A.far=I.far=L.far=st,(C!==A.near||B!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,B=A.far),A.layers.mask=P.layers.mask|6,L.layers.mask=A.layers.mask&-5,I.layers.mask=A.layers.mask&-3;let ct=P.parent,at=A.cameras;W(A,ct);for(let Bt=0;Bt<at.length;Bt++)W(at[Bt],ct);A.projectionMatrix.copy(L.projectionMatrix),A.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&P.isPerspectiveCamera&&(D={camera:P,fov:P.fov,zoom:P.zoom}),K(P,A,ct)};function K(P,Q,st){st===null?P.matrix.copy(Q.matrixWorld):(P.matrix.copy(st.matrixWorld),P.matrix.invert(),P.matrix.multiply(Q.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(Q.projectionMatrix),P.projectionMatrixInverse.copy(Q.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Rr*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&x===null))return o},this.setFoveation=function(P){o=P,f!==null&&(f.fixedFoveation=P),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=P)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(A)},this.getCameraTexture=function(P){return p[P]};let Z=null;function rt(P,Q){if(c=Q.getViewerPose(h||r),g=Q,c!==null){let st=c.views;x!==null&&(t.setRenderTargetFramebuffer(y,x.framebuffer),t.setRenderTarget(y));let ct=!1;st.length!==A.cameras.length&&(A.cameras.length=0,ct=!0);for(let Mt=0;Mt<st.length;Mt++){let Ut=st[Mt],te=null;if(x!==null)te=x.getViewport(Ut);else{let De=u.getViewSubImage(f,Ut);te=De.viewport,Mt===0&&(t.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(y))}let Jt=F[Mt];Jt===void 0&&(Jt=new Je,Jt.layers.enable(Mt),Jt.viewport=new Se,F[Mt]=Jt),Jt.matrix.fromArray(Ut.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Ut.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(te.x,te.y,te.width,te.height),Mt===0&&(A.matrix.copy(Jt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ct===!0&&A.cameras.push(Jt)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let Mt=u.getDepthInformation(st[0]);Mt&&Mt.isValid&&Mt.texture&&d.init(Mt,s.renderState)}if(at&&at.includes("camera-access")&&m){t.state.unbindTexture(),u=i.getBinding();for(let Mt=0;Mt<st.length;Mt++){let Ut=st[Mt].camera;if(Ut){let te=p[Ut];te||(te=new ha,p[Ut]=te);let Jt=u.getCameraImage(Ut);te.sourceTexture=Jt}}}}for(let st=0;st<M.length;st++){let ct=S[st],at=M[st];ct!==null&&at!==void 0&&at.update(ct,Q,h||r)}Z&&Z(P,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let k=new cu;k.setAnimationLoop(rt),this.setAnimationLoop=function(P){Z=P},this.dispose=function(){}}},Pg=new de,vu=new Gt;vu.set(-1,0,0,0,1,0,0,0,1);function Lg(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Tc(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,v,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(d,p):p.isMeshLambertMaterial?(a(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(d,p),u(d,p)):p.isMeshPhongMaterial?(a(d,p),c(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(d,p),f(d,p),p.isMeshPhysicalMaterial&&x(d,p,y)):p.isMeshMatcapMaterial?(a(d,p),g(d,p)):p.isMeshDepthMaterial?a(d,p):p.isMeshDistanceMaterial?(a(d,p),m(d,p)):p.isMeshNormalMaterial?a(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&l(d,p)):p.isPointsMaterial?o(d,p,v,b):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Qe&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Qe&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v=t.get(p),b=v.envMap,y=v.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(vu),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function l(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,v,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=b*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function x(d,p,v){d.ior.value=p.ior,p.diffuseRoughness>0&&(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function m(d,p){let v=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ig(n,t,e,i){let s={},a={};function r(v,b){let y=b.program;i.uniformBlockBinding(v,y,s[v.id])}function l(v,b){let y=s[v.id];y===void 0&&(g(v),y=o(v),s[v.id]=y,v.addEventListener("dispose",d));let M=b.program;i.updateUBOMapping(v,M);let S=t.render.frame;a[v.id]!==S&&(h(v),a[v.id]=S)}function o(v){let b=n.createBuffer(),y=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function h(v){let b=s[v.id],y=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,_=y.length;S<_;S++){let w=y[S];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)c(w[D],S,D,M);else c(w,S,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(v,b,y,M){if(f(v,b,y,M)===!0){let S=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let L=_[D],I=m(L,!0);u(L,v.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,v.__data)}}function u(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function f(v,b,y,M){let S=v.value,_=b+"_"+y;if(Array.isArray(S)){M[_]===void 0&&(M[_]=[]);let w=M[_],D=!1;for(let L=0;L<S.length;L++)x(S[L],w,L)===!0&&(D=!0);return D}return x(S,M,_)}function x(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let M=b[y];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function g(v){let b=v.uniforms,y=0,M=16;for(let _=0,w=b.length;_<w;_++){let D=Array.isArray(b[_])?b[_]:[b[_]];for(let L=0,I=D.length;L<I;L++){let F=D[L],A=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(b[_])||Array.isArray(F.value),B=y;for(let U=0,G=A.length;U<G;U++){let W=A[U],K=m(W,C),Z=y%M,rt=Z%K.boundary,k=Z+rt;y+=rt,k!==0&&M-k<K.storage&&(y+=M-k),U===0&&(B=y),y+=K.storage}let N=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new N((y-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let S=y%M;return S>0&&(y+=M-S),v.__size=y,v.__cache={},this}function m(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function d(v){let b=v.target;b.removeEventListener("dispose",d),n.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);s={},a={}}return{bind:r,update:l,dispose:p}}var kg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tn=null;function Dg(){return tn===null&&(tn=new aa(kg,16,16,Dn,Fi),tn.name="DFG_LUT",tn.minFilter=ui,tn.magFilter=ui,tn.wrapS=fi,tn.wrapT=fi,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}var qo=class{constructor(t={}){let{canvas:e=kf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:x=xi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let m=x,d=new Set([ho,co,lo]),p=new Set([xi,Oi,ks,Qn,ao,ro]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,S=null,_=[],w=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,I=!1,F=null,A=null,C=null,B=null;this._outputColorSpace=Me;let N=0,U=0,G=null,W=-1,K=null,Z=new Se,rt=new Se,k=null,P=new Nt(0),Q=0,st=e.width,ct=e.height,at=1,Bt=null,Qt=null,Mt=new Se(0,0,st,ct),Ut=new Se(0,0,st,ct),te=!1,Jt=new Cn,De=new kr,ke=!1,ni=!1,Ee=new de,Wi=new X,Xe=new Se,Mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Si=!1;function wi(){return G===null?at:1}let V=i;function Ti(E,H){return e.getContext(E,H)}let _e,be,bt,Be,Ot,Vt,R,T,Y,ot,nt,pt,vt,tt,et,xt,z,it,j,gt,ut,mt,Lt;try{let E={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),V===null){let H="webgl2";if(V=Ti(H,E),V===null)throw Ti(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(E){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ht("WebGLRenderer: "+E.message),E}function Kt(){_e=new Xm(V),_e.init(),ut=new Eg(V,_e),be=new Dm(V,_e,t,ut),bt=new Tg(V,_e),be.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),A=V.createFramebuffer(),C=V.createFramebuffer(),B=V.createFramebuffer(),Be=new $m(V),Ot=new fg,Vt=new Ag(V,_e,bt,Ot,be,ut,Be),R=new Wm(L),T=new Zd(V),mt=new Im(V,T),Y=new qm(V,T,Be,mt),ot=new Zm(V,Y,T,mt,Be),it=new Km(V,be,Vt),et=new Nm(Ot),nt=new hg(L,R,_e,be,mt,et),pt=new Lg(L,Ot),vt=new dg,tt=new vg(_e),z=new Lm(L,R,bt,ot,g,o),xt=new wg(L,ot,be),Lt=new Ig(V,Be,be,bt),j=new km(V,_e,Be),gt=new Ym(V,_e,Be),Be.programs=nt.programs,L.capabilities=be,L.extensions=_e,L.properties=Ot,L.renderLists=vt,L.shadowMap=xt,L.state=bt,L.info=Be}m!==xi&&(D=new jm(m,e.width,e.height,l,s,a));let ht=new Vc(L,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(st,ct,!1))},this.getSize=function(E){return E.set(st,ct)},this.setSize=function(E,H,J=!0){if(ht.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}st=E,ct=H,e.width=Math.floor(E*at),e.height=Math.floor(H*at),J===!0&&(e.style.width=E+"px",e.style.height=H+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(st*at,ct*at).floor()},this.setDrawingBufferSize=function(E,H,J){st=E,ct=H,at=J,e.width=Math.floor(E*J),e.height=Math.floor(H*J),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(m===xi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,H,J,q){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,H,J,q),bt.viewport(Z.copy(Mt).multiplyScalar(wi()).round())},this.getScissor=function(E){return E.copy(Ut)},this.setScissor=function(E,H,J,q){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,H,J,q),bt.scissor(rt.copy(Ut).multiplyScalar(wi()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){bt.setScissorTest(te=E)},this.setOpaqueSort=function(E){Bt=E},this.setTransparentSort=function(E){Qt=E},this.getClearColor=function(E){return E.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,J=!0){let q=0;if(E){let $=!1;if(G!==null){let _t=G.texture.format;$=d.has(_t)}if($){let _t=G.texture.type,Et=p.has(_t),yt=z.getClearColor(),Tt=z.getClearAlpha(),Pt=yt.r,Wt=yt.g,ie=yt.b;Et?(v[0]=Pt,v[1]=Wt,v[2]=ie,v[3]=Tt,V.clearBufferuiv(V.COLOR,0,v)):(b[0]=Pt,b[1]=Wt,b[2]=ie,b[3]=Tt,V.clearBufferiv(V.COLOR,0,b))}else q|=V.COLOR_BUFFER_BIT}H&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),z.dispose(),vt.dispose(),tt.dispose(),Vt.dispose(),Ot.dispose(),R.dispose(),ot.dispose(),Y.dispose(),mt.dispose(),Lt.dispose(),nt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",uh),ht.removeEventListener("sessionend",dh),zn.stop()};function Dt(E){E.preventDefault(),Sc("WebGLRenderer: Context Lost."),I=!0}function Xt(){Sc("WebGLRenderer: Context Restored."),I=!1;let E=Be.autoReset,H=xt.enabled,J=xt.autoUpdate,q=xt.needsUpdate,$=xt.type;Kt(),Be.autoReset=E,xt.enabled=H,xt.autoUpdate=J,xt.needsUpdate=q,xt.type=$}function St(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){let H=E.target;H.removeEventListener("dispose",ue),qe(H)}function qe(E){vn(E),Ot.remove(E)}function vn(E){let H=Ot.get(E).programs;H!==void 0&&(H.forEach(function(J){nt.releaseProgram(J)}),E.isShaderMaterial&&nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,J,q,$,_t){H===null&&(H=Mi);let Et=$.isMesh&&$.matrixWorld.determinantAffine()<0,yt=ld(E,H,J,q,$);bt.setMaterial(q,Et);let Tt=J.index,Pt=1;if(q.wireframe===!0){if(Tt=Y.getWireframeAttribute(J),Tt===void 0)return;Pt=2}let Wt=J.drawRange,ie=J.attributes.position,Ct=Wt.start*Pt,ne=(Wt.start+Wt.count)*Pt;_t!==null&&(Ct=Math.max(Ct,_t.start*Pt),ne=Math.min(ne,(_t.start+_t.count)*Pt)),Tt!==null?(Ct=Math.max(Ct,0),ne=Math.min(ne,Tt.count)):ie!=null&&(Ct=Math.max(Ct,0),ne=Math.min(ne,ie.count));let Ne=ne-Ct;if(Ne<0||Ne===1/0)return;mt.setup($,q,yt,J,Tt);let ye,ge=j;if(Tt!==null&&(ye=T.get(Tt),ge=gt,ge.setIndex(ye)),$.isMesh)q.wireframe===!0?(bt.setLineWidth(q.wireframeLinewidth*wi()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if($.isLine){let si=q.linewidth;si===void 0&&(si=1),bt.setLineWidth(si*wi()),$.isLineSegments?ge.setMode(V.LINES):$.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else $.isPoints?ge.setMode(V.POINTS):$.isSprite&&ge.setMode(V.TRIANGLES);if($.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let si=$._multiDrawStarts,Rt=$._multiDrawCounts,hi=$._multiDrawCount,he=Tt?T.get(Tt).bytesPerElement:1,Bn=Ot.get(q).currentProgram.getUniforms();for(let ai=0;ai<hi;ai++)Bn.setValue(V,"_gl_DrawID",ai),ge.render(si[ai]/he,Rt[ai])}else if($.isInstancedMesh)ge.renderInstances(Ct,Ne,$.count);else if(J.isInstancedBufferGeometry){let si=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Rt=Math.min(J.instanceCount,si);ge.renderInstances(Ct,Ne,Rt)}else ge.render(Ct,Ne)};function fh(E,H,J,q){F!==null&&E.isNodeMaterial&&F.setObject(q,E),ke===!0&&et.setState(E,J,!1),E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,Hs(E,H,q),E.side=kn,E.needsUpdate=!0,Hs(E,H,q),E.side=Oe):Hs(E,H,q)}this.compile=function(E,H,J=null){J===null&&(J=E),F!==null&&F.renderStart(E,H,J),S=tt.get(J),S.init(H),w.push(S),J.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),E!==J&&E.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),ni=this.localClippingEnabled,ke=et.init(this.clippingPlanes,ni),ke===!0&&et.setGlobalState(this.clippingPlanes,H),F!==null&&xt.render(S.state.shadowsArray,J,H);let q=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let _t=$.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let yt=_t[Et];fh(yt,J,H,$),q.add(yt)}else fh(_t,J,H,$),q.add(_t)}),S=w.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(E,H,J=null){let q=this.compile(E,H,J);return new Promise($=>{function _t(){if(q.forEach(function(Et){let Tt=Ot.get(Et).currentProgram;(Tt===void 0||Tt.isReady())&&q.delete(Et)}),q.size===0){$(E);return}setTimeout(_t,10)}_e.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ml=null;function rd(E){Ml&&Ml(E)}function uh(){zn.stop()}function dh(){zn.start()}let zn=new cu;zn.setAnimationLoop(rd),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(E){Ml=E,ht.setAnimationLoop(E),E===null?zn.stop():zn.start()},ht.addEventListener("sessionstart",uh),ht.addEventListener("sessionend",dh),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,H);let J=ht.enabled===!0&&ht.isPresenting===!0,q=D!==null&&(G===null||J)&&D.begin(L,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(H),H=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,H,G),S=tt.get(E,w.length),S.init(H),S.state.textureUnits=Vt.getTextureUnits(),w.push(S),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?De.setFromArrayCamera(H):Jt.setFromProjectionMatrix(Ee,Ei,H.reversedDepth),ni=this.localClippingEnabled,ke=et.init(this.clippingPlanes,ni),M=vt.get(E,_.length),M.init(),_.push(M),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Et=L.xr.getDepthSensingMesh();Et!==null&&Sl(Et,H,-1/0,L.sortObjects)}Sl(E,H,0,L.sortObjects),M.finish(),F!==null&&F.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(Bt,Qt),Si=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Si&&z.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),ke===!0&&et.beginShadows();let $=S.state.shadowsArray;if(xt.render($,E,H),ke===!0&&et.endShadows(),(q&&D.hasRenderPass())===!1){let Et=M.opaque,yt=M.transmissive;if(S.setupLights(),H.isArrayCamera){let Tt=H.cameras;if(yt.length>0)for(let Pt=0,Wt=Tt.length;Pt<Wt;Pt++){let ie=Tt[Pt];mh(Et,yt,E,ie)}Si&&z.render(E);for(let Pt=0,Wt=Tt.length;Pt<Wt;Pt++){let ie=Tt[Pt];ph(M,E,ie,ie.viewport)}}else yt.length>0&&mh(Et,yt,E,H),Si&&z.render(E),ph(M,E,H)}G!==null&&U===0&&(Vt.updateMultisampleRenderTarget(G),Vt.updateRenderTargetMipmap(G)),q&&D.end(L),E.isScene===!0&&E.onAfterRender(L,E,H),mt.resetDefaultState(),W=-1,K=null,w.pop(),w.length>0?(S=w[w.length-1],Vt.setTextureUnits(S.state.textureUnits),ke===!0&&et.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,F!==null&&F.renderEnd()};function Sl(E,H,J,q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){let Et=H.isArrayCamera?De:Jt;if(!E.frustumCulled||E.intersectsFrustum(Et)){q&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);let yt=ot.update(E),Tt=E.material;Tt.visible&&M.push(E,yt,Tt,J,Xe.z,null,H)}}else if(E.isMesh||E.isLine||E.isPoints){let Et=H.isArrayCamera?De:Jt;if(!E.frustumCulled||E.intersectsFrustum(Et)){let yt=ot.update(E),Tt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Xe.copy(yt.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Tt)){let Pt=yt.groups;for(let Wt=0,ie=Pt.length;Wt<ie;Wt++){let Ct=Pt[Wt],ne=Tt[Ct.materialIndex];ne&&ne.visible&&M.push(E,yt,ne,J,Xe.z,Ct,H)}}else Tt.visible&&M.push(E,yt,Tt,J,Xe.z,null,H)}}}let _t=E.children;for(let Et=0,yt=_t.length;Et<yt;Et++)Sl(_t[Et],H,J,q)}function ph(E,H,J,q){let{opaque:$,transmissive:_t,transparent:Et}=E;S.setupLightsView(J),ke===!0&&et.setGlobalState(L.clippingPlanes,J),q&&bt.viewport(Z.copy(q)),$.length>0&&Xa($,H,J),_t.length>0&&Xa(_t,H,J),Et.length>0&&Xa(Et,H,J),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function mh(E,H,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Ct=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new _i(1,1,{generateMipmaps:!0,type:Ct?Fi:xi,minFilter:mn,samples:Math.max(4,be.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let _t=S.state.transmissionRenderTarget[q.id],Et=q.viewport||Z;_t.setSize(Et.z*L.transmissionResolutionScale,Et.w*L.transmissionResolutionScale);let yt=L.getRenderTarget(),Tt=L.getActiveCubeFace(),Pt=L.getActiveMipmapLevel();L.setRenderTarget(_t),L.getClearColor(P),Q=L.getClearAlpha(),Q<1&&L.setClearColor(16777215,.5),L.clear(),Si&&z.render(J);let Wt=L.toneMapping;L.toneMapping=Qi;let ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ke===!0&&et.setGlobalState(L.clippingPlanes,q),Xa(E,J,q),Vt.updateMultisampleRenderTarget(_t),Vt.updateRenderTargetMipmap(_t),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ne=0,Ne=H.length;ne<Ne;ne++){let ye=H[ne],{object:ge,geometry:si,material:Rt,group:hi}=ye;if(Rt.side===Oe&&ge.layers.test(q.layers)){let he=Rt.side;Rt.side=Qe,Rt.needsUpdate=!0,xh(ge,J,q,si,Rt,hi),Rt.side=he,Rt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(_t),Vt.updateRenderTargetMipmap(_t))}L.setRenderTarget(yt,Tt,Pt),L.setClearColor(P,Q),ie!==void 0&&(q.viewport=ie),L.toneMapping=Wt}function Xa(E,H,J){let q=H.isScene===!0?H.overrideMaterial:null;for(let $=0,_t=E.length;$<_t;$++){let Et=E[$],{object:yt,geometry:Tt,group:Pt}=Et,Wt=Et.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),yt.layers.test(J.layers)&&xh(yt,H,J,Tt,Wt,Pt)}}function xh(E,H,J,q,$,_t){F!==null&&$.isNodeMaterial&&F.setObject(E,$),E.onBeforeRender(L,H,J,q,$,_t),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(L,H,J,q,E,_t),$.transparent===!0&&$.side===Oe&&$.forceSinglePass===!1?($.side=Qe,$.needsUpdate=!0,L.renderBufferDirect(J,H,q,$,E,_t),$.side=kn,$.needsUpdate=!0,L.renderBufferDirect(J,H,q,$,E,_t),$.side=Oe):L.renderBufferDirect(J,H,q,$,E,_t),E.onAfterRender(L,H,J,q,$,_t)}function gh(E){let H=0;for(let J of E)J.texture!==null&&H++;return H}function Hs(E,H,J){H.isScene!==!0&&(H=Mi);let q=Ot.get(E),$=S.state.lights,_t=S.state.shadowsArray,Et=$.state.version,yt=nt.getParameters(E,$.state,_t,H,J,S.state.lightProbeGridArray),Tt=nt.getProgramCacheKey(yt),Pt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let Wt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=R.get(E.envMap||q.environment,Wt),q.envMapRotation=q.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",ue),Pt=new Map,q.programs=Pt,q.programVariants=new Map);let ie=Pt.get(Tt);if(ie!==void 0){if(q.currentProgram===ie&&q.lightsStateVersion===Et)return vh(E,yt),ie}else yt.uniforms=nt.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,J,yt),E.onBeforeCompile(yt,L),ie=nt.acquireProgram(yt,Tt),Pt.set(Tt,ie),q.uniforms=yt.uniforms;let Ct=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=et.uniform),vh(E,yt),q.needsLights=hd(E),q.lightsStateVersion=Et,q.needsLights&&(Ct.ambientLightColor.value=$.state.ambient,Ct.lightProbe.value=$.state.probe,Ct.sunLights.value=$.state.sun,Ct.sunLightShadows.value=$.state.sunShadow,Ct.directionalLights.value=$.state.directional,Ct.directionalLightShadows.value=$.state.directionalShadow,Ct.spotLights.value=$.state.spot,Ct.spotLightShadows.value=$.state.spotShadow,Ct.rectAreaLights.value=$.state.rectArea,Ct.ltc_1.value=$.state.rectAreaLTC1,Ct.ltc_2.value=$.state.rectAreaLTC2,Ct.pointLights.value=$.state.point,Ct.pointLightShadows.value=$.state.pointShadow,Ct.hemisphereLights.value=$.state.hemi,Ct.sunShadowMatrix.value=$.state.sunShadowMatrix,Ct.sunShadowCascade.value=$.state.sunShadowCascade,Ct.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ct.spotLightMatrix.value=$.state.spotLightMatrix,Ct.spotLightMap.value=$.state.spotLightMap,Ct.pointShadowMatrix.value=$.state.pointShadowMatrix),q.numLightProbeGrids=gh(S.state.lightProbeGridArray),q.currentProgram=ie,q.uniformsList=null,ie}function od(E,H,J,q,$){let _t=Ot.get(E),Et=_t.currentProgram.id+","+q+","+$,yt=_t.programVariants.get(Et);return yt===void 0?(yt=Hs(E,H,J),_t.programVariants.set(Et,yt)):(_t.currentProgram=yt,_t.uniformsList=null,_t.outputColorSpace=q,_t.toneMapping=$),yt}function yh(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function vh(E,H){let J=Ot.get(E);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function ld(E,H,J,q,$){H.isScene!==!0&&(H=Mi),Vt.resetTextureUnits();let _t=H.fog,Et=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,yt=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:se.workingColorSpace,Tt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Pt=R.get(q.envMap||Et,Tt),Wt=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ie=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ct=!!J.morphAttributes.position,ne=!!J.morphAttributes.normal,Ne=!!J.morphAttributes.color,ye=Qi;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ye=L.toneMapping);let ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,si=ge!==void 0?ge.length:0,Rt=Ot.get(q),hi=S.state.lights;if(ke===!0&&(ni===!0||E!==K)){let Ce=E===K&&q.id===W;et.setState(q,E,Ce)}let he=!1,Bn=!1;q.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==hi.state.version||$.isBatchedMesh&&Rt.batching===!1||!$.isBatchedMesh&&Rt.batching===!0||$.isBatchedMesh&&Rt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Rt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||$.isInstancedMesh&&Rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Rt.instancingMorph===!1&&$.morphTexture!==null||Rt.envMap!==Pt||q.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Wt||Rt.vertexTangents!==ie||Rt.morphTargets!==Ct||Rt.morphNormals!==ne||Rt.morphColors!==Ne||Rt.morphTargetsCount!==si||Rt.numLightProbeGrids!==gh(S.state.lightProbeGridArray)?he=!0:(Rt.outputColorSpace!==yt||Rt.toneMapping!==ye)&&(Bn=!0):(he=!0,Rt.__version=q.version);let ai=Rt.currentProgram;(he===!0||Bn===!0)&&(ai=Bn===!0?od(q,H,$,yt,ye):Hs(q,H,$),F&&q.isNodeMaterial&&F.onUpdateProgram(q,ai,Rt));let qa=!1,_n=!1,Hn=!1,oe=ai.getUniforms(),Ze=Rt.uniforms;if(bt.useProgram(ai.program)&&(qa=!0,_n=!0,Hn=!0),q.id!==W&&(W=q.id,_n=!0),qa||K!==E){bt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),oe.setValue(V,"projectionMatrix",E.projectionMatrix),oe.setValue(V,"viewMatrix",E.matrixWorldInverse);let Ye=oe.map.cameraPosition;Ye!==void 0&&Ye.setValue(V,Wi.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&oe.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&oe.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,_n=!0,Hn=!0)}if(Rt.needsLights&&(hi.state.sunShadowMap.length>0&&oe.setValue(V,"sunShadowMap",hi.state.sunShadowMap,Vt),hi.state.directionalShadowMap.length>0&&oe.setValue(V,"directionalShadowMap",hi.state.directionalShadowMap,Vt),hi.state.spotShadowMap.length>0&&oe.setValue(V,"spotShadowMap",hi.state.spotShadowMap,Vt),hi.state.pointShadowMap.length>0&&oe.setValue(V,"pointShadowMap",hi.state.pointShadowMap,Vt)),$.isSkinnedMesh){oe.setOptional(V,$,"bindMatrix"),oe.setOptional(V,$,"bindMatrixInverse");let Ce=$.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),oe.setValue(V,"boneTexture",Ce.boneTexture,Vt))}$.isBatchedMesh&&(oe.setOptional(V,$,"batchingTexture"),oe.setValue(V,"batchingTexture",$._matricesTexture,Vt),oe.setOptional(V,$,"batchingIdTexture"),oe.setValue(V,"batchingIdTexture",$._indirectTexture,Vt),oe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&oe.setValue(V,"batchingColorTexture",$._colorsTexture,Vt));let Li=J.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&it.update($,J,ai),(_n||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,oe.setValue(V,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Ze.envMapIntensity.value=H.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Dg()),_n){if(oe.setValue(V,"toneMappingExposure",L.toneMappingExposure),Rt.needsLights&&cd(Ze,Hn),_t&&q.fog===!0&&pt.refreshFogUniforms(Ze,_t),pt.refreshMaterialUniforms(Ze,q,at,ct,S.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Ce=y,Ye=0;for(let sn of S.state.lightProbeGridArray)sn.texture!==null&&(Ce.textures[Ye]=sn.texture,Ce.min[Ye]=sn.boundingBox.min,Ce.max[Ye]=sn.boundingBox.max,Ce.resolution[Ye]=sn.resolution,Ye++);for(let sn in Ce)Ce[sn].length=Ye;Ze.probesSH.value=Ce.textures,Ze.probesMin.value=Ce.min,Ze.probesMax.value=Ce.max,Ze.probesResolution.value=Ce.resolution}Ds.upload(V,yh(Rt),Ze,Vt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ds.upload(V,yh(Rt),Ze,Vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&oe.setValue(V,"center",$.center),oe.setValue(V,"modelViewMatrix",$.modelViewMatrix),oe.setValue(V,"normalMatrix",$.normalMatrix),oe.setValue(V,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Ce=q.uniformsGroups;for(let Ye=0,sn=Ce.length;Ye<sn;Ye++){let bh=Ce[Ye];Lt.update(bh,ai),Lt.bind(bh,ai)}}return ai}function cd(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function hd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,H,J){let q=Ot.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ot.get(E.texture).__webglTexture=H,Ot.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let J=Ot.get(E);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,J=0){G=E,N=H,U=J;let q=null,$=!1,_t=!1;if(E){let yt=Ot.get(E);if(yt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(V.FRAMEBUFFER,yt.__webglFramebuffer),Z.copy(E.viewport),rt.copy(E.scissor),k=E.scissorTest,bt.viewport(Z),bt.scissor(rt),bt.setScissorTest(k),W=-1;return}else if(yt.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(yt.__hasExternalTextures)Vt.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Wt=E.depthTexture;if(yt.__boundDepthTexture!==Wt){if(Wt!==null&&Ot.has(Wt)&&(E.width!==Wt.image.width||E.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}let Tt=E.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(_t=!0);let Pt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[H])?q=Pt[H][J]:q=Pt[H],$=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?q=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?q=Pt[J]:q=Pt,Z.copy(E.viewport),rt.copy(E.scissor),k=E.scissorTest}else Z.copy(Mt).multiplyScalar(at).floor(),rt.copy(Ut).multiplyScalar(at).floor(),k=te;if(J!==0&&(q=A),bt.bindFramebuffer(V.FRAMEBUFFER,q)&&bt.drawBuffers(E,q),bt.viewport(Z),bt.scissor(rt),bt.setScissorTest(k),$){let yt=Ot.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,yt.__webglTexture,J)}else if(_t){let yt=H;for(let Tt=0;Tt<E.textures.length;Tt++){let Pt=Ot.get(E.textures[Tt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Tt,Pt.__webglTexture,J,yt)}}else if(E!==null&&J!==0){let yt=Ot.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,J)}W=-1};function _h(E){let H=Ot.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=be.textureFormatReadable(E.format),H.__typeReadable=be.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,J,q,$,_t,Et,yt=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){bt.bindFramebuffer(V.FRAMEBUFFER,Tt);try{let Pt=E.textures[yt],Wt=Pt.format,ie=Pt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt);let Ct=_h(Pt);if(Ct.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-q&&J>=0&&J<=E.height-$&&V.readPixels(H,J,q,$,ut.convert(Wt),ut.convert(ie),_t)}finally{let Pt=G!==null?Ot.get(G).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,H,J,q,$,_t,Et,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(H>=0&&H<=E.width-q&&J>=0&&J<=E.height-$){bt.bindFramebuffer(V.FRAMEBUFFER,Tt);let Pt=E.textures[yt],Wt=Pt.format,ie=Pt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt);let Ct=_h(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ne),V.bufferData(V.PIXEL_PACK_BUFFER,_t.byteLength,V.STREAM_READ),V.readPixels(H,J,q,$,ut.convert(Wt),ut.convert(ie),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ne=G!==null?Ot.get(G).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,Ne);let ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Nf(V,ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ne),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,_t),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ne),V.deleteSync(ye),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,J=0){let q=Math.pow(2,-J),$=Math.floor(E.image.width*q),_t=Math.floor(E.image.height*q),Et=H!==null?H.x:0,yt=H!==null?H.y:0;Vt.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Et,yt,$,_t),bt.unbindTexture()},this.copyTextureToTexture=function(E,H,J=null,q=null,$=0,_t=0){let Et,yt,Tt,Pt,Wt,ie,Ct,ne,Ne,ye=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(J!==null)Et=J.max.x-J.min.x,yt=J.max.y-J.min.y,Tt=J.isBox3?J.max.z-J.min.z:1,Pt=J.min.x,Wt=J.min.y,ie=J.isBox3?J.min.z:0;else{let oe=Math.pow(2,-$);Et=Math.floor(ye.width*oe),yt=Math.floor(ye.height*oe),E.isDataArrayTexture?Tt=ye.depth:E.isData3DTexture?Tt=Math.floor(ye.depth*oe):Tt=1,Pt=0,Wt=0,ie=0}q!==null?(Ct=q.x,ne=q.y,Ne=q.z):(Ct=0,ne=0,Ne=0);let ge=ut.convert(H.format),si=ut.convert(H.type),Rt;H.isData3DTexture?(Vt.setTexture3D(H,0),Rt=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Vt.setTexture2DArray(H,0),Rt=V.TEXTURE_2D_ARRAY):(Vt.setTexture2D(H,0),Rt=V.TEXTURE_2D),bt.activeTexture(V.TEXTURE0),bt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),bt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),bt.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let hi=bt.getParameter(V.UNPACK_ROW_LENGTH),he=bt.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=bt.getParameter(V.UNPACK_SKIP_PIXELS),ai=bt.getParameter(V.UNPACK_SKIP_ROWS),qa=bt.getParameter(V.UNPACK_SKIP_IMAGES);bt.pixelStorei(V.UNPACK_ROW_LENGTH,ye.width),bt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ye.height),bt.pixelStorei(V.UNPACK_SKIP_PIXELS,Pt),bt.pixelStorei(V.UNPACK_SKIP_ROWS,Wt),bt.pixelStorei(V.UNPACK_SKIP_IMAGES,ie);let _n=E.isDataArrayTexture||E.isData3DTexture,Hn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let oe=Ot.get(E),Ze=Ot.get(H),Li=Ot.get(oe.__renderTarget),Ce=Ot.get(Ze.__renderTarget);bt.bindFramebuffer(V.READ_FRAMEBUFFER,Li.__webglFramebuffer),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ye=0;Ye<Tt;Ye++)_n&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ot.get(E).__webglTexture,$,ie+Ye),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ot.get(H).__webglTexture,_t,Ne+Ye)),V.blitFramebuffer(Pt,Wt,Pt+Et,Wt+yt,Ct,ne,Ct+Et,ne+yt,V.DEPTH_BUFFER_BIT,V.NEAREST);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||Ot.has(E)){let oe=Ot.get(E),Ze=Ot.get(H);bt.bindFramebuffer(V.READ_FRAMEBUFFER,C),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,B);for(let Li=0;Li<Tt;Li++)_n?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,oe.__webglTexture,$,ie+Li):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,oe.__webglTexture,$),Hn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ze.__webglTexture,_t,Ne+Li):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ze.__webglTexture,_t),$!==0?V.blitFramebuffer(Pt,Wt,Pt+Et,Wt+yt,Ct,ne,Ct+Et,ne+yt,V.COLOR_BUFFER_BIT,V.NEAREST):Hn?V.copyTexSubImage3D(Rt,_t,Ct,ne,Ne+Li,Pt,Wt,Et,yt):V.copyTexSubImage2D(Rt,_t,Ct,ne,Pt,Wt,Et,yt);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Hn?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(Rt,_t,Ct,ne,Ne,Et,yt,Tt,ge,si,ye.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Rt,_t,Ct,ne,Ne,Et,yt,Tt,ge,ye.data):V.texSubImage3D(Rt,_t,Ct,ne,Ne,Et,yt,Tt,ge,si,ye):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,_t,Ct,ne,Et,yt,ge,si,ye.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,_t,Ct,ne,ye.width,ye.height,ge,ye.data):V.texSubImage2D(V.TEXTURE_2D,_t,Ct,ne,Et,yt,ge,si,ye);bt.pixelStorei(V.UNPACK_ROW_LENGTH,hi),bt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,he),bt.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),bt.pixelStorei(V.UNPACK_SKIP_ROWS,ai),bt.pixelStorei(V.UNPACK_SKIP_IMAGES,qa),_t===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&V.generateMipmap(Rt),bt.unbindTexture()},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){N=0,U=0,G=null,bt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Ve=(n,t,e)=>n<t?t:n>e?e:n,Ng=(n,t,e)=>n+(t-n)*e,Te=(n,t,e,i)=>Ng(n,t,1-Math.exp(-e*i)),re=(n,t)=>n+Math.random()*(t-n),Wc=Math.PI*2;function Ie(n,t){let e=(t-n)%Wc;return e>Math.PI&&(e-=Wc),e<-Math.PI&&(e+=Wc),e}function Ri(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ft(n,t){let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return e<<16|i<<8|s}var Us=n=>{let t=Math.floor(n);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ee=n=>"$"+Math.round(n).toLocaleString("en-US");var Os=Ri(99),xe=(n,t)=>n+Os()*(t-n),es=(n,t,e,i=1)=>`hsla(${n},${t}%,${e}%,${i})`;function ti(n,t,e=!0,i=!0){let s=document.createElement("canvas");s.width=s.height=n;let a=s.getContext("2d");t(a,n);let r=new li(s);return i&&(r.colorSpace=Me),r.wrapS=r.wrapT=e?fn:fi,r.anisotropy=4,r}function Nn(n,t,e,i,s,a,r,l,o=2){for(let h=0;h<e;h++)n.fillStyle=es(i,s,xe(a,r),l),n.fillRect(Os()*t,Os()*t,o*xe(.5,1.5),o*xe(.5,1.5))}var Fe={};function pi(){return Fe.wood||(Fe.wood=ti(256,(n,t)=>{let i=t/8;for(let s=0;s<8;s++){let a=-xe(0,120);for(;a<t;){let r=xe(90,190),l=xe(52,64),o=xe(26,33);n.fillStyle=es(o,55,l*.75),n.fillRect(a,s*i,r,i);for(let h=0;h<6;h++){n.strokeStyle=es(o,50,l*.62,.35),n.lineWidth=xe(.6,1.6),n.beginPath();let c=s*i+xe(3,i-3);n.moveTo(a,c),n.bezierCurveTo(a+r*.3,c+xe(-3,3),a+r*.7,c+xe(-3,3),a+r,c+xe(-2,2)),n.stroke()}Os()<.3&&(n.fillStyle=es(o,50,l*.55,.5),n.beginPath(),n.ellipse(a+xe(10,r-10),s*i+i/2,xe(3,6),xe(1.5,3),0,0,7),n.fill()),n.fillStyle="rgba(60,30,10,.55)",n.fillRect(a,s*i,2,i),a+=r}n.fillStyle="rgba(60,30,10,.6)",n.fillRect(0,s*i,t,2),n.fillStyle="rgba(255,240,210,.12)",n.fillRect(0,s*i+2,t,2)}}),Fe.woodfine=ti(128,(n,t)=>{n.fillStyle="#e9dccb",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){n.strokeStyle=`rgba(120,80,40,${xe(.06,.18)})`,n.lineWidth=xe(.5,2),n.beginPath();let i=xe(0,t);n.moveTo(0,i),n.bezierCurveTo(t*.3,i+xe(-4,4),t*.6,i+xe(-4,4),t,i),n.stroke()}}),Fe.carpet=ti(128,(n,t)=>{n.fillStyle="#e4e4e4",n.fillRect(0,0,t,t),Nn(n,t,2600,0,0,70,98,.5,1.6);for(let e=0;e<t;e+=8)n.fillStyle="rgba(0,0,0,.035)",n.fillRect(0,e,t,3)}),Fe.tile=ti(128,(n,t)=>{n.fillStyle="#aab5bd",n.fillRect(0,0,t,t);let e=2,i=t/e;for(let s=0;s<e;s++)for(let a=0;a<e;a++)n.fillStyle=es(200,10,xe(93,98)),n.fillRect(a*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(255,255,255,.6)",n.fillRect(a*i+3,s*i+3,i-8,3),n.fillStyle="rgba(0,0,0,.06)",n.fillRect(a*i+3,s*i+i-7,i-6,3)}),Fe.wallpaper=ti(128,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=32)n.fillStyle="rgba(0,0,0,.045)",n.fillRect(e,0,14,t);for(let e=8;e<t;e+=32)for(let i=23;i<t;i+=32)n.fillStyle="rgba(0,0,0,.08)",n.beginPath(),n.moveTo(i,e),n.lineTo(i+4,e+6),n.lineTo(i,e+12),n.lineTo(i-4,e+6),n.fill();Nn(n,t,500,0,0,60,100,.04,2)}),Fe.panel=ti(128,(n,t)=>{n.fillStyle="#f0f0f0",n.fillRect(0,0,t,t);for(let e=0;e<t;e+=64)n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3,n.strokeRect(e+10,14,44,t-28),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2,n.strokeRect(e+13,17,44,t-28)}),Fe.brick=ti(256,(n,t)=>{n.fillStyle="#d8c6b0",n.fillRect(0,0,t,t);let e=t/8,i=t/4;for(let s=0;s<8;s++)for(let a=-1;a<5;a++){let r=a*i+(s%2?i/2:0);n.fillStyle=es(xe(10,20),xe(35,50),xe(42,52)),n.fillRect(r+3,s*e+3,i-6,e-6),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(r+3,s*e+3,i-6,4)}Nn(n,t,900,10,30,20,60,.15,2)}),Fe.plaster=ti(128,(n,t)=>{n.fillStyle="#f4f2ef",n.fillRect(0,0,t,t),Nn(n,t,1500,30,10,75,100,.12,2)}),Fe.plain=ti(64,(n,t)=>{n.fillStyle="#f2f2f2",n.fillRect(0,0,t,t),Nn(n,t,500,0,0,82,100,.25,2)}),Fe.grass=ti(128,(n,t)=>{n.fillStyle="#6dbb4a",n.fillRect(0,0,t,t);for(let e=0;e<1400;e++){n.strokeStyle=es(xe(85,110),xe(45,65),xe(32,55),.7),n.lineWidth=1,n.beginPath();let i=Os()*t,s=Os()*t;n.moveTo(i,s),n.lineTo(i+xe(-2,2),s-xe(3,7)),n.stroke()}}),Fe.asphalt=ti(128,(n,t)=>{n.fillStyle="#4a4f5c",n.fillRect(0,0,t,t),Nn(n,t,2200,220,8,22,60,.4,1.6)}),Fe.concrete=ti(128,(n,t)=>{n.fillStyle="#cfd2d6",n.fillRect(0,0,t,t),Nn(n,t,1400,210,6,60,95,.2,2),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(0,0,t,2),n.fillRect(0,0,2,t)}),Fe.rug=ti(256,(n,t)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,t),n.fillStyle="#9a9a9a",n.fillRect(10,10,t-20,t-20),n.fillStyle="#ffffff",n.fillRect(22,22,t-44,t-44),n.fillStyle="#c8c8c8",n.fillRect(30,30,t-60,t-60),n.fillStyle="#ffffff";for(let e=46;e<t-46;e+=32)for(let i=46;i<t-46;i+=32)n.beginPath(),n.moveTo(i+16,e+2),n.lineTo(i+30,e+16),n.lineTo(i+16,e+30),n.lineTo(i+2,e+16),n.fill();n.fillStyle="#8a8a8a";for(let e=4;e<t;e+=6)n.fillRect(e,0,2,8),n.fillRect(e,t-8,2,8);Nn(n,t,1500,0,0,50,100,.12,1.5)},!1),Fe.shadow=ti(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Fe.glow=ti(64,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Fe.beam=ti(64,(n,t)=>{let e=n.createLinearGradient(0,t,0,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,.9)"),n.fillStyle=e,n.fillRect(0,0,t,t)},!1,!1),Fe.patch=ti(64,(n,t)=>{for(let e=0;e<12;e++){n.fillStyle=`rgba(255,255,255,${.06})`;let i=e*2.5;n.fillRect(i,i,t-2*i,t-2*i)}},!1,!1)),Fe}function _u(){let n=new ua(90,16,10),t=n.attributes.position,e=new Float32Array(t.count*3),i=new Nt,s=new Nt(7311320),a=new Nt(16038282),r=new Nt(16767400);for(let o=0;o<t.count;o++){let h=t.getY(o)/90;h>.15?i.copy(a).lerp(s,Math.min(1,(h-.15)/.6)):i.copy(r).lerp(a,Math.max(0,(h+.1)/.25)),e[o*3]=i.r,e[o*3+1]=i.g,e[o*3+2]=i.b}n.setAttribute("color",new le(e,3));let l=new dt(n,new At({vertexColors:!0,side:Qe,fog:!1,depthWrite:!1,toneMapped:!1}));return l.renderOrder=-10,l.frustumCulled=!1,l}function bu(){let n=new zt,t=420,e=new Float32Array(t*3);for(let o=0;o<t;o++){let h=Math.random()*6.283,c=.08+Math.random()*.9,u=80;e.set([Math.cos(h)*Math.cos(c*1.5)*u,Math.sin(c*1.5)*u,Math.sin(h)*Math.cos(c*1.5)*u],o*3)}let i=new me;i.setAttribute("position",new le(e,3));let s=new Ji(i,new Ui({color:14673663,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,toneMapped:!1}));s.renderOrder=-9;let a=new At({map:pi().glow,color:14674175,transparent:!0,depthWrite:!1,fog:!1,blending:Le,toneMapped:!1}),r=new dt(new je(16,16),a),l=new dt(new Rn(2.6,24),new At({color:15922431,fog:!1,toneMapped:!1,depthWrite:!1}));return r.position.set(-38,44,-52),l.position.copy(r.position),r.lookAt(0,0,0),l.lookAt(0,0,0),r.renderOrder=-8,l.renderOrder=-8,n.add(s,r,l),n.visible=!1,n}var Ko=class{constructor(t,e=220){this.n=e,this.box=7;let i=new Float32Array(e*3);this.vel=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*this.box,i[s*3+1]=Math.random()*1.9,i[s*3+2]=(Math.random()-.5)*this.box,this.vel[s*3]=(Math.random()-.5)*.06,this.vel[s*3+1]=(Math.random()-.5)*.03,this.vel[s*3+2]=(Math.random()-.5)*.06;this.geo=new me,this.geo.setAttribute("position",new le(i,3)),this.points=new Ji(this.geo,new Ui({map:pi().glow,size:.035,color:16769712,transparent:!0,opacity:.6,depthWrite:!1,blending:Le})),this.points.frustumCulled=!1,this.points.renderOrder=7,this.t=0,t.add(this.points)}update(t,e,i){this.t+=t;let s=this.geo.attributes.position.array,a=this.vel,r=this.box/2;for(let l=0;l<this.n;l++){let o=l*3;s[o]+=(a[o]+Math.sin(this.t*.5+l)*.02)*t,s[o+1]+=(a[o+1]+Math.cos(this.t*.4+l*1.3)*.015)*t,s[o+2]+=a[o+2]*t,s[o]<e-r?s[o]+=this.box:s[o]>e+r&&(s[o]-=this.box),s[o+2]<i-r?s[o+2]+=this.box:s[o+2]>i+r&&(s[o+2]-=this.box),s[o+1]<.05?s[o+1]=1.85:s[o+1]>1.88&&(s[o+1]=.08)}this.geo.attributes.position.needsUpdate=!0}};var Zo=class{constructor(t,e=900){this.n=e,this.box=13,this.L=null,this.pos=new Float32Array(e*6),this.speed=new Float32Array(e),this.geo=new me,this.geo.setAttribute("position",new le(this.pos,3)),this.lines=new oa(this.geo,new Es({color:11058406,transparent:!0,opacity:.5,depthWrite:!1,fog:!0})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,t.add(this.lines)}setLevel(t){if(this.L=t,this.lines.visible=!!t,t)for(let e=0;e<this.n;e++)this.spawn(e,0,0,!0)}outdoor(t,e){let i=this.L,s=Math.floor(t),a=Math.floor(e);return s<0||a<0||s>=i.W||a>=i.H?!0:!!i.outdoor[a*i.W+s]}spawn(t,e,i,s){let a=this.pos,r=t*6,l=this.box,o=0,h=0,c=!1;for(let f=0;f<4&&!c;f++)o=e+(Math.random()-.5)*2*l,h=i+(Math.random()-.5)*2*l,c=this.outdoor(o,h);let u=c?s?Math.random()*7:6+Math.random()*2:-50;this.speed[t]=11+Math.random()*5,a[r]=o,a[r+1]=u,a[r+2]=h,a[r+3]=o+.04,a[r+4]=u+.42,a[r+5]=h}update(t,e,i){if(!this.lines.visible)return;let s=this.pos,a=this.box;for(let r=0;r<this.n;r++){let l=r*6,o=this.speed[r]*t;s[l+1]-=o,s[l+4]-=o,s[l]-=o*.08,s[l+3]-=o*.08,(s[l+1]<0||Math.abs(s[l]-e)>a||Math.abs(s[l+2]-i)>a)&&this.spawn(r,e,i,s[l+1]<-10)}this.geo.attributes.position.needsUpdate=!0}};var Ug=[[[1,0,0],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]]],[[-1,0,0],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]],[[0,0,-1],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]]]],Pe=1,We=2,Yt=4,ei=8,lt=16,jt=32;var Og=55,Un=new Nt,kt=class{constructor(t=1){this.p=[],this.n=[],this.c=[],this.i=[],this.u=[],this.us=t}box(t,e,i,s,a,r,l,o={}){let h=o.faces??Og,c=s/2,u=a/2,f=r/2,x=e+u,g=o.ry||0,m=Math.cos(g),d=Math.sin(g);for(let p=0;p<6;p++){if(!(h&1<<p))continue;let v=o.fc&&o.fc[p]!=null?o.fc[p]:p===2&&o.top!=null?o.top:l;Un.setHex(v);let[b,y]=Ug[p],M=this.p.length/3,S=b[0]*m+b[2]*d,_=-b[0]*d+b[2]*m,w=o.us||this.us,D=Math.abs(S),L=Math.abs(_),I=0;for(let F of y){let A=F[0]*c,C=F[2]*f,B=t+A*m+C*d,N=x+F[1]*u,U=i-A*d+C*m;this.p.push(B,N,U),this.n.push(S,b[1],_),this.c.push(Un.r,Un.g,Un.b),o.fit?(this.u.push(I===1||I===2?1:0,I>=2?1:0),I++):p===2||p===3?this.u.push(B/w,-U/w):D>L?this.u.push((S>0?-U:U)/w,N/w):this.u.push((_>0?B:-B)/w,N/w)}this.i.push(M,M+1,M+2,M,M+2,M+3)}return this}add(t,e,i=0,s=0,a=0){let r=t.index?t.toNonIndexed():t,l=r.attributes.position.array,o=r.attributes.normal.array;Un.setHex(e);let h=this.p.length/3;for(let c=0;c<l.length;c+=3)this.p.push(l[c]+i,l[c+1]+s,l[c+2]+a),this.n.push(o[c],o[c+1],o[c+2]),this.c.push(Un.r,Un.g,Un.b),this.u.push(l[c]/this.us,l[c+1]/this.us);for(let c=0;c<l.length/3;c++)this.i.push(h+c);return this}get empty(){return this.p.length===0}build(){let t=new me;t.setAttribute("position",new le(new Float32Array(this.p),3)),t.setAttribute("normal",new le(new Float32Array(this.n),3)),t.setAttribute("color",new le(new Float32Array(this.c),3)),this.u.length&&t.setAttribute("uv",new le(new Float32Array(this.u),2));let e=this.p.length/3;return t.setIndex(new le(e>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),t.computeBoundingSphere(),t}};var Xc={".":"wood",_:"carpet",",":"tile",g:"grass",p:"road"},qc={h:"shelf",f:"fridge",b:"bed",t:"desk",k:"counter",c:"couch",e:"tv",i:"table",u:"tub",q:"plant",n:"night",r:"stove",y:"chair",o:"toilet",w:"sink",x:"wardrobe",z:"teller",v:"case",m:"pedestal",a:"statue",s:"slots",j:"poker",C:"crate"},Fg=new Set(["h","f","x","a","C"]),Mu={$:"cash",G:"gold",J:"jewel",A:"art"};function Su(n){let t=n.map,e=t.length,i=Math.max(...t.map(y=>y.length)),s=i*e,a=new Array(s);for(let y=0;y<e;y++)for(let M=0;M<i;M++)a[y*i+M]=t[y][M]||"g";let r=new Uint8Array(s),l=new Uint8Array(s),o=new Uint8Array(s),h=new Array(s),c=[],u=[],f={x:1,y:1},x=null,g=null,m=null,d=[],p=[];for(let y=0;y<e;y++)for(let M=0;M<i;M++){let S=y*i+M,_=a[S];if(_==="#"){l[S]=1;continue}if(_==="D"||_==="L"){l[S]=1,r[S]=0,d.push({x:M,y,type:_==="L"?"lock":"key"});continue}_==="K"&&p.push({x:M,y}),qc[_]?(l[S]=Fg.has(_)?1:0,r[S]=0):_==="S"?(x={x:M,y},r[S]=0):r[S]=1,Mu[_]&&c.push({type:Mu[_],x:M,y}),_==="P"&&(f={x:M,y}),_==="V"&&(g={x:M,y}),_==="R"&&(m={x:M,y})}for(let y=0;y<s;y++){let M=a[y];if(M==="#")continue;if(Xc[M]){h[y]=Xc[M];continue}let S=y%i,_=y/i|0,w="wood";t:for(let D=1;D<6;D++)for(let L=-D;L<=D;L++)for(let I=-D;I<=D;I++){if(Math.max(Math.abs(I),Math.abs(L))!==D)continue;let F=S+I,A=_+L;if(F<0||A<0||F>=i||A>=e)continue;let C=Xc[a[A*i+F]];if(C){w=C;break t}}h[y]=w}for(let y=0;y<s;y++)o[y]=h[y]==="grass"||h[y]==="road"?1:0;let v={x:f.x+.5,z:f.y+.5};if(g){for(let y=g.y;y<=g.y+1;y++)for(let M=g.x-1;M<=g.x+1;M++)M>=0&&y>=0&&M<i&&y<e&&(r[y*i+M]=0);v={x:g.x+.5,z:g.y-.5}}else m&&(v={x:m.x+.5,z:m.y+.5});let b=new Uint8Array(s);for(let y=0;y<s;y++){let M=a[y];if(!qc[M]||b[y])continue;let S=y%i,_=y/i|0,w=S,D=_,L=[y];for(b[y]=1;L.length;){let I=L.pop(),F=I%i,A=I/i|0;S=Math.min(S,F),w=Math.max(w,F),_=Math.min(_,A),D=Math.max(D,A);for(let[C,B]of[[1,0],[-1,0],[0,1],[0,-1]]){let N=F+C,U=A+B;if(N<0||U<0||N>=i||U>=e)continue;let G=U*i+N;!b[G]&&a[G]===M&&(b[G]=1,L.push(G))}}u.push({c:M,type:qc[M],x0:S,y0:_,w:w-S+1,d:D-_+1})}return{W:i,H:e,ch:a,walk:r,opaque:l,outdoor:o,floor:h,loot:c,furn:u,start:f,safe:x,van:g,roof:m,exit:v,def:n,doors:d,keys:p}}var Ae=1.9,zg=7227954,Yc=16183526,Bg=15985888,wu=[{wall:16180164,panel:8363658,curtain:12999242},{wall:14214351,panel:7311226,curtain:14721850},{wall:15847371,panel:11892346,curtain:6971304},{wall:13623018,panel:6191254,curtain:14711642},{wall:13888480,panel:6989198,curtain:4165536},{wall:16050102,panel:11901530,curtain:9067162}],$c=[13125695,4091816,15246141,5216858,8085159,15260868,3098712,14185306,9071178],Bi=[5020230,6074452,4164168,7126874],Ia=()=>new we({vertexColors:!0,emissive:2760720});function Au(n,t){return Eu(n,t,null,null).back}function Eu(n,t,e,i){let{W:s,H:a,ch:r}=n,l=(v,b)=>v<0||b<0||v>=s||b>=a||r[b*s+v]==="#",o=i;if(!o){let v=0;o=[0,-1];let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let y of b){let M=0;if(y[1]){let S=y[1]<0?t.y0-1:t.y0+t.d;for(let _=t.x0;_<t.x0+t.w;_++)M+=l(_,S);M/=t.w}else{let S=y[0]<0?t.x0-1:t.x0+t.w;for(let _=t.y0;_<t.y0+t.d;_++)M+=l(S,_);M/=t.d}M>v+.01&&(v=M,o=y)}}let h=Math.atan2(-o[0],-o[1]),c=o[0]?t.d:t.w,u=o[0]?t.w:t.d,f=t.x0+t.w/2,x=t.y0+t.d/2,g=Math.cos(h),m=Math.sin(h),d=(v,b)=>[f+v*g+b*m,x-v*m+b*g];return{b:(v,b,y,M,S,_,w,D,L={})=>{let[I,F]=d(b,M);v.box(I,y,F,S,_,w,D,{...L,ry:(L.ry||0)+h})},W:c,D:u,rot:h,wpos:d,back:o}}function Hg(n,t,e,i,s){let a=(m,d)=>m+i()*(d-m),r=e.plain,l=e.woodfine,o=e.unlit,h;if(t.type==="couch"){let m=n.furn.find(d=>d.type==="tv");h=m&&m.y0<t.y0?[0,1]:[0,-1]}else if(t.type==="chair"){let m=n.furn.find(d=>d.type==="table");if(m){let d=m.x0+m.w/2-(t.x0+.5),p=m.y0+m.d/2-(t.y0+.5);h=Math.abs(d)>Math.abs(p)?[-Math.sign(d),0]:[0,-Math.sign(p)]}}else t.type==="desk"||t.type==="table"?h=[0,-1]:t.type==="slots"&&(h=t.y0<n.H/2?[0,-1]:[0,1]);let{b:c,W:u,D:f,wpos:x}=Eu(n,t,e,h),g=(m,d,p,v,b,y)=>{let[M,S]=x(m,p);s.push({x:M,y:d,z:S,col:v,I:b,R:y})};switch(c(e.shadow,0,.012,0,u+.35,.001,f+.35,16777215,{faces:Yt,fit:!0}),t.type){case"crate":{let m=[11041098,9398852,12159573,8219218];for(let d=0;d<u;d++)for(let p=0;p<f;p++){let v=-u/2+d+.5,b=-f/2+p+.5;for(let y=0;y<2;y++){let M=m[i()*m.length|0],S=y?a(.72,.86):.9,_=y?a(-.25,.25):0,w=y?a(-.06,.06):0,D=y*.86;c(l,v+w,D,b+w,S,.86,S,M,{ry:_,top:ft(M,1.12)}),c(l,v+w,D+.38,b+w,S+.02,.1,S+.02,ft(M,.72),{ry:_,faces:51});for(let L of[-1,1])for(let I of[-1,1])c(l,v+w+L*(S/2-.03),D,b+w+I*(S/2-.03),.07,.86,.07,ft(M,.6),{ry:_})}i()<.3&&c(r,v,.38,b+.46,.4,.12,.01,2237487,{faces:16})}break}case"shelf":{for(let p of[-1,1])c(l,p*(u/2-.04),0,0,.07,1.6,f-.12,8015411);c(l,0,1.6-.06,0,u-.02,.07,f-.08,8015411),c(l,0,0,-f/2+.09,u-.1,1.6,.03,ft(8015411,.7));for(let p=0;p<4;p++){let v=.06+p*.38;if(c(l,0,v,0,u-.1,.035,f-.18,8015411),p===3&&i()<.5){c(r,a(-.2,.2),v+.035,0,.12,.2,.12,4165530),c(r,0,v+.235,0,.18,.18,.18,Bi[1],{ry:.6});continue}let b=-u/2+.1;for(;b<u/2-.12;){let y=a(.04,.09),M=a(.2,.31),S=$c[i()*$c.length|0];if(i()<.08){b+=.12;continue}let _=i()<.1?.25:0;c(r,b+y/2,v+.035,.02,y,M,f-.32,S,{top:ft(S,1.25)}),M>.25&&c(r,b+y/2,v+.035+M*.7,.02,y+.004,.025,f-.31,15914122,{faces:lt|jt}),b+=y+.006+_*.1}}break}case"fridge":{c(r,0,.04,0,u-.12,1.55,f-.14,15265522,{top:14278886}),c(r,0,0,.02,u-.16,.05,f-.2,3816006),c(r,0,1,f/2-.068,u-.12,.015,.01,11450560,{faces:lt}),c(r,.3,.55,f/2-.04,.04,.35,.05,12108492),c(r,.3,1.1,f/2-.04,.04,.3,.05,12108492);for(let d=0;d<4;d++)c(r,a(-.3,.15),a(.6,1.45),f/2-.066,.06,.06,.01,$c[d],{faces:lt});c(r,-.1,1.15,f/2-.066,.18,.22,.008,16777215,{faces:lt,ry:.08});break}case"bed":{c(l,0,.08,0,u-.06,.22,f-.06,10118724);for(let[p,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(l,p*(u/2-.09),0,v*(f/2-.09),.1,.1,.1,ft(10118724,.7));c(l,0,0,-f/2+.06,u,1.05,.1,10118724),c(l,0,1.05,-f/2+.06,u+.06,.07,.14,ft(10118724,.85)),c(l,0,.45,-f/2+.115,u-.3,.45,.01,ft(10118724,1.15),{faces:lt}),c(r,0,.3,.04,u-.14,.18,f-.22,16250094),c(r,0,.33,.42,u-.08,.2,f-.95,6066121,{top:ft(6066121,1.12)}),c(r,0,.36,-f/2+1.08,u-.07,.19,.22,15789284);for(let p of[-1,1])c(r,p*.45,.47,-f/2+.42,.78,.15,.4,16777215,{ry:p*.04});c(r,0,.535,f/2-.42,u-.04,.03,.42,15246141),c(r,0,.3,f/2-.205,u-.04,.26,.02,15246141,{faces:lt});break}case"desk":{c(l,0,.7,-.45,u-.1,.06,.8,11565642,{top:ft(11565642,1.1)}),c(l,-u/2+.35,0,-.45,.5,.7,.72,ft(11565642,.9));for(let d=0;d<3;d++)c(r,-u/2+.35,.08+d*.21,-.08,.42,.16,.01,ft(11565642,.75),{faces:lt}),c(r,-u/2+.35,.15+d*.21,-.07,.12,.025,.02,14267482);c(l,u/2-.08,0,-.45,.06,.7,.72,ft(11565642,.9)),c(r,.15,.76,-.7,.18,.04,.14,2763574),c(r,.15,.8,-.7,.05,.16,.05,2763574),c(r,.15,.92,-.7,.72,.44,.05,2237229),c(o,.15,.95,-.672,.64,.37,.01,6272255,{faces:lt}),c(o,0,1.05,-.665,.25,.14,.008,12576511,{faces:lt}),c(o,.32,1,-.665,.18,.08,.008,16765806,{faces:lt}),c(r,.15,.76,-.38,.55,.025,.18,3421503),c(r,.55,.76,-.38,.07,.03,.1,3421503),c(r,-.5,.76,-.35,.3,.012,.22,16777215,{ry:.2}),c(r,-.5,.772,-.35,.28,.012,.2,15986656,{ry:-.1}),c(r,.78,.76,-.5,.08,.1,.08,14185306),c(r,-.7,.76,-.7,.14,.03,.14,2763574),c(r,-.7,.79,-.7,.025,.32,.025,2763574),c(o,-.62,1.05,-.62,.16,.1,.16,16767386,{ry:.5}),g(-.6,1,-.55,[1,.72,.42],.75,2.6),c(r,0,0,.35,.5,.05,.05,2763574),c(r,0,0,.35,.05,.05,.5,2763574),c(r,0,.05,.35,.05,.35,.05,5592671),c(r,0,.4,.35,.48,.09,.46,4165530,{top:4891565}),c(r,0,.49,.58,.46,.5,.08,4165530);break}case"counter":{if(n.def.bar){c(l,0,0,0,u-.04,.95,f-.2,4858904,{top:ft(4858904,1.2)});for(let M=0;M<u*2;M++)c(l,-u/2+.25+M*.5,.12,f/2-.1,.4,.7,.012,ft(4858904,1.3),{faces:lt});c(r,0,.14,f/2+.02,u-.1,.04,.04,14725194),c(r,0,.95,.02,u+.04,.06,f-.04,1841956,{top:2762806}),c(r,0,1.01,f/2-.04,u+.04,.012,.03,14725194,{faces:Yt|lt});let y=[3119706,9058858,14262330,3828424,15262422,8006234];for(let M=0;M<u*3;M++){let S=-u/2+.2+M*(u-.4)/Math.max(1,u*3-1),_=y[(M+t.x0)%y.length];if(M%3===1){c(o,S,1.01,-.05,.07,.11,.07,14217471),c(o,S,1.07,-.05,.05,.03,.05,[16738954,16765503,8191898][M%3]);continue}c(r,S,1.01,-.12,.09,.22,.09,_,{top:ft(_,1.3)}),c(r,S,1.23,-.12,.035,.08,.035,_),c(r,S,1.31,-.12,.04,.02,.04,2763574)}for(let M=0;M<u;M++){let S=-u/2+M+.5,_=f/2+.38;c(r,S,0,_,.26,.03,.26,2763574),c(r,S,.03,_,.05,.56,.05,13226716),c(r,S,.59,_,.34,.09,.34,11740730,{top:13645898})}g(0,1.4,.3,[1,.6,.4],.9,3);break}let m=15854818,d=3881544;c(r,0,0,.04,u-.02,.08,f-.2,3816006),c(r,0,.08,0,u-.02,.72,f-.12,m);let p=Math.max(1,Math.round(u/.5));for(let v=0;v<p;v++){let b=-u/2+(v+.5)*(u/p);c(r,b,.14,f/2-.055,u/p-.06,.6,.012,ft(m,.93),{faces:lt}),c(r,b+(v%2?-1:1)*(u/p/2-.08),.62,f/2-.04,.025,.12,.025,11901530)}c(r,0,.8,.02,u,.06,f-.06,d,{top:4868440}),c(e.tile,0,.86,-f/2+.02,u,.48,.01,16777215,{faces:lt,us:.5}),c(r,0,1.36,-f/2+.2,u-.02,.48,.36,m);for(let v=0;v<p;v++){let b=-u/2+(v+.5)*(u/p);c(r,b,1.4,-f/2+.385,u/p-.06,.4,.012,ft(m,.93),{faces:lt}),c(r,b,1.43,-f/2+.4,.12,.025,.025,11901530)}u>=2?(c(r,.45,.855,.05,.6,.012,.42,9345186,{faces:Yt}),c(r,.45,.86,-.22,.04,.22,.04,12831958),c(r,.45,1.05,-.12,.04,.04,.2,12831958),c(l,-.45,.86,.05,.42,.03,.3,14264180,{ry:.1}),c(r,-.35,.89,.05,.12,.06,.06,14185306)):(c(r,0,.86,-.05,.22,.2,.16,14174271,{top:3092280}),c(r,.1,.92,-.05,.03,.12,.03,3092280));break}case"stove":{c(r,0,0,.04,u-.02,.08,f-.2,3816006),c(r,0,.08,0,u-.04,.74,f-.12,14081250),c(r,0,.18,f/2-.055,u-.2,.42,.012,2829364,{faces:lt}),c(o,0,.26,f/2-.05,u-.36,.22,.01,6961698,{faces:lt}),c(r,0,.56,f/2-.04,u-.3,.03,.03,12108492);for(let d=0;d<4;d++)c(r,-.3+d*.2,.7,f/2-.05,.05,.05,.03,2829364);c(r,0,.82,.02,u-.02,.04,f-.06,2302763);for(let[d,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(r,d*.2,.86,p*.17,.2,.012,.2,4868693);c(r,.2,.872,.17,.3,.12,.3,10134702,{top:6976640}),c(r,0,1.42,-f/2+.24,u-.1,.18,.44,12831958),c(r,0,1.6,-f/2+.12,.3,.3,.22,12831958),c(e.tile,0,.86,-f/2+.02,u,.56,.01,16777215,{faces:lt,us:.5});break}case"couch":{for(let y of[-1,1])for(let M of[-1,1])c(l,y*(u/2-.2),0,M*(f/2-.15),.07,.1,.07,5913126);c(r,0,.1,0,u-.08,.26,f-.12,ft(3115662,.85)),c(r,0,.1,-f/2+.17,u-.08,.66,.22,3115662);for(let y of[-1,1])c(r,y*(u/2-.13),.1,.02,.22,.44,f-.1,3115662),c(r,y*(u/2-.13),.54,.02,.26,.06,f-.06,3842212);let v=3,b=(u-.6)/v;for(let y=0;y<v;y++){let M=-u/2+.3+(y+.5)*b;c(r,M,.36,.08,b-.04,.13,f-.4,3842212,{top:ft(3842212,1.1)}),c(r,M,.42,-f/2+.34,b-.06,.38,.14,3842212,{ry:0})}c(r,-u/2+.6,.49,-.12,.34,.3,.12,15905076,{ry:.3}),c(r,u/2-.65,.49,-.12,.34,.3,.12,15230287,{ry:-.25}),c(r,u/2-1.3,.49,-.1,.3,.27,.11,15985888,{ry:.1}),c(r,-.4,.49,.05,1,.025,.55,15260868,{ry:.05});break}case"tv":{for(let d of[-1,1])c(l,d*(u/2-.15),0,0,.06,.12,.06,2763574);c(l,0,.12,-.05,u-.1,.38,f-.45,7226670,{top:ft(7226670,1.15)});for(let d=0;d<3;d++)c(l,-u/2+.05+(d+.5)*((u-.1)/3),.16,f/2-.27,(u-.1)/3-.05,.3,.012,ft(7226670,1.2),{faces:lt});c(r,0,.62,-.2,u-.4,.92,.07,1447710),c(o,0,.67,-.163,u-.52,.8,.005,2903966,{faces:lt}),c(o,-.3,.75,-.159,.9,.35,.004,6269160,{faces:lt}),c(o,.5,.85,-.158,.4,.22,.004,16762967,{faces:lt}),c(o,.25,.73,-.158,.3,.12,.004,8049530,{faces:lt}),c(r,0,.5,-.02,u-1,.07,.1,2237227),c(r,u/2-.35,.5,-.05,.16,.22,.16,13133631);for(let d=0;d<4;d++)c(r,u/2-.35+a(-.05,.05),.68+d*.05,-.05,.22,.05,.08,Bi[d%4],{ry:d*.8});c(r,-u/2+.4,.5,-.05,.3,.06,.2,2763574),g(0,.9,.35,[.45,.62,1],.7,3.4);break}case"table":{if(n.def.gala||n.def.train){c(r,0,0,0,u-.16,.72,f-.16,16184042,{top:16777215}),c(r,0,.6,0,u-.12,.13,f-.12,ft(16184042,.96),{faces:63&~Yt}),c(r,0,.72,0,.3,.004,f-.36,n.def.train?8006202:13213760,{faces:Yt}),c(r,0,.724,0,.12,.04,.12,14725194),c(r,0,.76,0,.04,.22,.04,14725194);for(let p of[-1,1])c(r,p*.12,.92,0,.2,.025,.03,14725194),c(r,p*.2,.94,0,.04,.14,.04,16774880),c(o,p*.2,1.08,0,.03,.05,.03,16758858);c(r,0,.98,0,.04,.14,.04,16774880),c(o,0,1.12,0,.03,.05,.03,16758858),c(r,.32,.724,.28,.08,.2,.08,2775610),c(r,.32,.92,.28,.03,.07,.03,14725194);for(let[p,v]of[[-.4,-.38],[.4,.38],[-.4,.38],[.4,-.38]])c(r,p,.724,v,.24,.012,.24,16777215),c(r,p,.736,v,.14,.01,.14,15262422),c(o,p+.17,.724,v,.04,.1,.04,14217471);g(0,1.2,0,[1,.75,.45],.7,2.2);break}let m=13867874;c(l,0,.66,0,u-.2,.07,f-.2,m,{top:ft(m,1.08)});for(let[d,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(l,d*(u/2-.25),0,p*(f/2-.25),.08,.66,.08,ft(m,.8));c(r,0,.73,0,.5,.006,f-.25,12999242),c(r,0,.736,0,.36,.06,.36,16777215,{top:15262422}),c(r,-.06,.79,.02,.12,.12,.12,15230287),c(r,.08,.79,-.04,.11,.11,.11,15905076,{ry:.5}),c(r,.02,.84,.08,.1,.1,.1,8045146,{ry:.2});for(let[d,p]of[[-.45,-.45],[.45,.45]])c(r,d,.735,p,.28,.012,.28,16777215),c(r,d+.2,.735,p,.03,.01,.2,12831958);break}case"chair":{if(n.def.train){c(r,0,0,0,.36,.06,.36,2763574),c(r,0,.06,0,.06,.3,.06,13226716),c(r,0,.36,.02,.5,.14,.46,2771594,{top:ft(2771594,1.2)}),c(r,0,.36,-.22,.5,.82,.12,2771594,{top:1714770});for(let v=0;v<3;v++)c(r,0,.56+v*.18,-.155,.44,.012,.01,1714770,{faces:lt});c(r,0,1.02,-.15,.36,.14,.015,16052714,{faces:lt|Yt});for(let v of[-1,1])c(r,v*.27,.36,-.02,.06,.34,.42,1714770,{top:ft(1714770,1.4)});break}let m=12157268;for(let[d,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(l,d*.17,0,p*.17,.05,.42,.05,ft(m,.8));c(l,0,.42,0,.44,.05,.44,m),c(r,0,.47,0,.38,.03,.38,12999242),c(l,0,.47,-.19,.42,.52,.05,m),c(l,0,.82,-.19,.3,.1,.06,ft(m,1.1));break}case"tub":{c(r,0,0,0,u-.12,.58,f-.12,16054007,{top:16777215}),c(r,0,.5,0,u-.34,.06,f-.34,9425898,{faces:Yt}),c(r,0,.58,-f/2+.15,.05,.2,.05,12831958),c(r,0,.74,-f/2+.22,.05,.04,.18,12831958),c(r,.3,.56,.2,.12,.1,.14,16765503),c(r,.3,.64,.24,.08,.08,.08,16765503),c(r,.3,.66,.3,.04,.03,.05,16747069),c(r,0,1.75,f/2-.08,u-.1,.025,.025,12831958),c(r,-u/2+.35,.6,f/2-.08,.6,1.15,.03,9423064);for(let m=0;m<3;m++)c(r,-u/2+.15+m*.2,.6,f/2-.06,.04,1.15,.035,16183526);break}case"slots":{let v=[16732026,5037311,16766810,8191898];for(let b=0;b<u;b++){let y=-u/2+b+.5,M=[11740730,2771635,6957747,2067034][(b+t.x0)%4],S=ft(M,.62),_=v[(b+t.y0)%4];c(r,y,0,0,.82,.12,.74,1512991),c(r,y,.02,.371,.8,.07,.008,14725194,{faces:lt}),c(r,y,.12,-.02,.76,.58,.66,S,{top:M}),c(r,y,.3,.315,.62,.3,.012,M,{faces:lt}),c(r,y,.34,.32,.5,.2,.008,ft(M,1.3),{faces:lt}),c(r,y,.17,.33,.36,.09,.09,13226716),c(r,y,.21,.37,.28,.04,.03,855314,{faces:lt|Yt}),c(r,y,.7,.1,.78,.07,.48,2368302,{top:3026234});for(let w=0;w<3;w++)c(o,y-.2+w*.2,.77,.25,.13,.035,.09,[16726862,16765503,4054148][w]);c(r,y,.77,-.09,.76,.64,.52,M);for(let w of[-1,1])c(r,y+w*.385,.12,.3,.035,1.3,.05,13226716),c(r,y+w*.385,.12,-.34,.03,1.3,.04,ft(M,.5));c(r,y,.84,.172,.68,.48,.012,14725194,{faces:lt}),c(r,y,.87,.18,.6,.42,.01,723728,{faces:lt});for(let w=0;w<3;w++)c(e.slotReel,y-.19+w*.19,.89,.187,.17,.38,.004,[16777215,16774368,16777215][w],{faces:lt,fit:!0});c(o,y,1.075,.19,.58,.014,.004,16724032,{faces:lt}),c(r,y,1.41,-.06,.78,.26,.5,1512991),c(e.slotSign,y,1.43,.192,.74,.22,.004,16777215,{faces:lt,fit:!0}),c(r,y,1.67,-.06,.46,.05,.3,13226716),c(o,y,1.72,-.06,.2,.13,.2,_),c(r,y+.43,.82,.02,.06,.14,.12,13226716),c(r,y+.45,.86,.02,.035,.42,.035,13226716),c(r,y+.45,1.28,.02,.1,.1,.1,15216702,{top:16738932})}g(0,1.5,.7,[1,.5,.8],.9,3.4);break}case"poker":{let p=[15222847,3111656,15911244,2237487,16183526];c(l,0,0,0,.6,.68,.6,5909018),c(l,0,.68,0,u-.1,.08,f-.1,5909018,{top:ft(5909018,1.2)}),c(r,0,.76,0,u-.34,.012,f-.34,2062922,{faces:Yt}),c(r,0,.775,0,u-.9,.004,.02,14267482,{faces:Yt});for(let v=0;v<6;v++){let b=v/6*6.28,y=Math.min(u,f)*.32;c(r,Math.cos(b)*y,.78,Math.sin(b)*y,.08,.03+v%3*.03,.08,p[v%5])}for(let v=0;v<4;v++)c(r,-.2+v*.13,.775,-.05,.1,.006,.14,16777215,{ry:(v-1.5)*.2});for(let[v,b]of[[-1,0],[1,0],[0,-1],[0,1]])c(l,v*(u/2+.3),0,b*(f/2+.3),.36,.48,.36,11745617,{top:13650522});g(0,1.4,0,[1,.85,.55],.9,2.6);break}case"pedestal":{let d=(t.x0*3+t.y0)%4,p=15250234;c(r,0,0,0,.64,.12,.64,ft(15525594,.82),{top:ft(15525594,.95)}),c(r,0,.12,0,.46,.68,.46,15525594);for(let[b,y,M,S]of[[0,.232,.06,.01],[.12,.232,.04,.01],[-.12,.232,.04,.01],[.232,0,.01,.06],[-.232,0,.01,.06],[0,-.232,.06,.01]])c(r,b,.16,y,M,.58,S,ft(15525594,.86),{faces:63&~Yt&~ei});c(r,0,.8,0,.6,.08,.6,ft(15525594,.92)),c(r,0,.88,0,.36,.06,.36,10100538,{top:12068938}),c(r,0,.42,.236,.22,.08,.008,p,{faces:lt});let v=.94;if(d===0){c(r,0,v,0,.12,.05,.12,p),c(r,0,v+.05,0,.2,.14,.2,p,{top:ft(p,1.2)}),c(r,0,v+.19,0,.1,.1,.1,p),c(r,0,v+.29,0,.16,.04,.16,ft(p,1.15));for(let b of[-1,1])c(r,b*.12,v+.14,0,.03,.14,.03,p);c(r,0,v+.1,.101,.16,.03,.005,2058874,{faces:lt})}else if(d===1){c(r,0,v,0,.24,.08,.24,p,{faces:63&~Yt});for(let[b,y]of[[-.1,-.1],[.1,-.1],[-.1,.1],[.1,.1],[0,.11],[0,-.11],[.11,0],[-.11,0]])c(r,b,v+.08,y,.04,.07,.04,p);c(o,0,v+.03,.122,.05,.04,.005,16726890,{faces:lt}),c(o,.122,v+.03,0,.005,.04,.05,3920895,{faces:Pe}),c(o,-.122,v+.03,0,.005,.04,.05,3932042,{faces:We})}else if(d===2)c(r,0,v,0,.12,.04,.12,p),c(r,0,v+.04,0,.16,.06,.16,4156120),c(r,0,v+.1,0,.2,.1,.2,4156120,{top:5932784}),c(r,0,v+.2,0,.14,.08,.14,4156120),c(r,0,v+.28,0,.07,.04,.07,p),c(r,0,v+.135,0,.21,.025,.21,p,{faces:63&~Yt&~ei});else{c(r,0,v,0,.14,.04,.1,2763316),c(r,0,v+.04,0,.22,.28,.06,p,{top:ft(p,1.2)}),c(r,0,v+.32,0,.26,.06,.08,2771635);for(let b of[-1,1])c(r,b*.05,v+.2,.031,.05,.03,.005,1839920,{faces:lt});c(r,0,v+.1,.031,.04,.06,.005,ft(p,.8),{faces:lt})}g(0,1.6,0,[1,.85,.6],.8,2);break}case"statue":{let d=ft(14999250,.78),p=14725194;c(r,0,0,0,.84,.16,.84,d,{top:ft(14999250,.9)}),c(r,0,.16,0,.68,.3,.68,14999250,{top:ft(14999250,1.04)}),c(r,0,.24,.341,.34,.1,.008,p,{faces:lt}),c(r,0,.46,0,.56,.06,.56,d),c(r,0,.52,0,.36,.42,.3,14999250,{top:d}),c(r,0,.9,0,.42,.42,.24,14999250),c(r,.06,.9,.125,.3,.42,.01,ft(14999250,.92),{faces:lt,ry:.15}),c(r,-.27,.92,.04,.12,.38,.13,14999250,{ry:.25}),c(r,.27,1.18,0,.12,.42,.13,14999250),c(r,.27,1.6,0,.08,.2,.08,p),c(o,.27,1.8,0,.12,.14,.12,16753210),c(o,.27,1.9,0,.07,.08,.07,16769162),c(r,0,1.32,0,.24,.28,.24,14999250),c(r,0,1.56,-.01,.27,.08,.27,d),c(r,0,1.52,0,.29,.04,.29,6987850,{faces:63&~Yt}),g(.27,1.85,0,[1,.7,.35],.5,1.8);break}case"case":{c(l,0,0,0,u-.1,.78,f-.1,2759202,{top:ft(2759202,1.3)}),c(r,0,.1,f/2-.06,u-.2,.55,.01,ft(2759202,1.4),{faces:lt}),c(r,0,.78,0,u-.06,.04,f-.06,14267482),c(o,0,.82,0,u-.2,.012,f-.2,3811930,{faces:Yt});for(let[p,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])c(r,p*(u/2-.06),.82,v*(f/2-.06),.04,.46,.04,14267482);c(r,0,1.28,0,u-.06,.03,f-.06,14267482),g(0,1.05,0,[.75,.85,1],.9,2.4);break}case"wardrobe":{let d=ft(9067068,1.18),p=ft(9067068,.7);c(l,0,0,-.06,.92,1.72,.74,9067068,{top:p}),c(l,0,1.72,-.06,.98,.06,.8,p),c(l,0,0,-.06,.96,.08,.78,p);for(let v of[-1,1]){c(l,v*.225,.12,.315,.42,1.54,.02,d,{faces:lt|Pe|We|Yt});for(let b=0;b<9;b++)c(r,v*.225,.78+b*.09,.327,.34,.025,.01,p,{faces:lt|Yt});c(l,v*.225,.2,.327,.34,.5,.008,ft(d,1.08),{faces:lt}),c(r,v*.04,.8,.34,.03,.12,.03,14267482)}c(r,0,.12,.33,.012,1.54,.02,p,{faces:lt});break}case"teller":{c(l,0,0,.05,u,.78,f-.3,5913130,{top:ft(5913130,1.1)}),c(r,0,.08,f/2-.1,u-.02,.78-.16,.01,ft(5913130,1.25),{faces:lt}),c(r,0,.78,.05,u+.02,.05,f-.2,15262422);let v=Math.max(1,Math.round(u));for(let b=0;b<=v;b++)c(r,-u/2+b*u/v,.78+.05,.05,.04,.82,.04,14267482);c(r,0,.78+.87,.05,u,.04,.06,14267482);for(let b=0;b<v;b++){let y=-u/2+(b+.5)*(u/v);c(r,y,.78+.05,.05,.3,.06,.05,2763574),b%2===0?(c(r,y+.15,.78+.05,-.2,.3,.22,.04,2237229),c(o,y+.15,.78+.09,-.177,.26,.15,.005,6272255,{faces:lt})):c(r,y-.1,.78+.05,-.15,.22,.04,.16,5221978,{top:9429130})}break}case"plant":{if(c(r,0,0,0,.34,.3,.34,13133631,{top:4863014}),c(r,0,.26,0,.42,.08,.42,ft(13133631,1.12)),c(r,0,.1,0,.36,.04,.36,ft(13133631,.82),{faces:Pe|We|lt|jt}),(t.x0+t.y0)%2){c(l,0,.34,0,.07,.62,.07,8018486),c(l,.02,.6,0,.06,.36,.06,6965802,{ry:.3});for(let d=0;d<7;d++){let p=d*.9,v=Bi[d%4];c(r,Math.cos(p)*.18,1-d%2*.05,Math.sin(p)*.18,.3,.07,.14,v,{ry:-p,top:ft(v,1.15)}),c(r,Math.cos(p)*.36,.93-d%2*.05,Math.sin(p)*.36,.18,.06,.11,ft(v,.9),{ry:-p})}c(r,0,1.04,0,.16,.1,.16,Bi[2])}else{[[0,.42,0,.42],[.08,.66,.05,.34],[-.07,.62,-.06,.32],[0,.86,0,.26]].forEach(([p,v,b,y],M)=>c(r,p,v,b,y,y,y,Bi[M%4],{ry:M*.5,top:ft(Bi[M%4],1.15)}));for(let p=0;p<6;p++){let v=p*1.05;c(r,Math.cos(v)*.22,.5+p%3*.14,Math.sin(v)*.22,.12,.12,.12,Bi[(p+1)%4],{ry:v})}}break}case"night":{c(l,0,0,0,u-.38,.5,f-.4,10118724,{top:ft(10118724,1.12)}),c(l,0,.28,f/2-.195,u-.48,.16,.01,ft(10118724,1.2),{faces:lt}),c(r,0,.35,f/2-.18,.06,.03,.02,14267482),c(r,0,.5,-.05,.12,.03,.12,3816006),c(r,0,.53,-.05,.05,.2,.05,14267482),c(o,0,.72,-.05,.26,.18,.26,16767392),c(r,.12,.5,.08,.12,.03,.16,4091816,{ry:.3}),g(0,.8,.05,[1,.7,.42],.9,2.8);break}case"toilet":{c(r,0,0,.04,.3,.06,.38,15001834),c(r,0,.06,.05,.32,.26,.42,16185336),c(r,0,.32,.07,.4,.05,.5,16777215),c(r,0,.365,.08,.3,.005,.36,10471894,{faces:Yt}),c(r,0,.37,-f/2+.33,.38,.32,.04,16777215),c(r,0,.3,-f/2+.17,.44,.48,.2,16185336,{top:16777215}),c(r,0,.78,-f/2+.17,.48,.04,.24,16777215),c(r,.16,.66,-f/2+.28,.08,.025,.04,12831958),c(r,-.36,.5,-f/2+.08,.12,.12,.1,12831958),c(r,-.36,.44,-f/2+.12,.1,.12,.1,16777215);break}case"sink":{c(l,0,0,0,u-.18,.78,f-.44,9067066,{top:ft(9067066,1.1)});for(let d of[-1,1])c(l,d*(u-.24)/4,.08,f/2-.215,(u-.3)/2-.04,.6,.012,ft(9067066,1.18),{faces:lt}),c(r,d*.05,.5,f/2-.205,.03,.12,.02,14267482);c(r,0,.78,0,u-.12,.05,f-.36,16052714),c(r,0,.8,.02,.44,.07,.32,16777215),c(r,0,.865,.03,.34,.006,.22,10471894,{faces:Yt}),c(r,0,.83,-f/2+.26,.06,.2,.06,13226716),c(r,0,1,-f/2+.31,.04,.04,.12,13226716),c(r,-.08,.95,-f/2+.26,.05,.03,.05,16738922),c(r,.08,.95,-f/2+.26,.05,.03,.05,6990079),c(r,.3,.83,-f/2+.3,.08,.14,.08,5227432),c(r,.3,.97,-f/2+.3,.03,.04,.03,16777215),c(r,-.3,.83,-f/2+.3,.08,.12,.08,16765503),c(r,-.29,.95,-f/2+.3,.015,.1,.015,3832552),c(l,0,1.02,-f/2+.03,.66,.76,.03,6965802),c(o,0,1.06,-f/2+.05,.56,.66,.005,12179172,{faces:lt}),c(o,-.12,1.3,-f/2+.054,.12,.3,.004,15135994,{faces:lt}),c(o,-.2,1.2,-f/2+.054,.05,.2,.004,15135994,{faces:lt});break}}}function Gg(n,t){let{W:e,H:i}=n,s=(f,x)=>f<0||x<0||f>=e||x>=i?-1:Math.floor(x)*e+Math.floor(f),a=(f,x)=>{let g=s(f,x);return g<0||n.opaque[g]===1},r=(f,x,g,m)=>{let d=g-f,p=m-x,v=Math.ceil(Math.hypot(d,p)/.15);for(let b=1;b<v;b++){let y=b/v;if(a(f+d*y,x+p*y))return!1}return!0},l=[-.55,.7,.45],o=Math.hypot(...l);l[0]/=o,l[1]/=o,l[2]/=o;let h=[0,0,0],c=(f,x)=>{let g=s(f,x);return g<0?0:n.ch[g]==="#"?1:!n.walk[g]&&!n.outdoor[g]?.55:0};function u(f,x,g,m,d,p,v){let b=f+m*.14,y=g+p*.14,M=s(b,y),S=M>=0&&!n.outdoor[M]&&n.ch[M]!=="#",_,w,D;if(S){let I=.85+.15*d;_=.2*I,w=.19*I,D=.27*I,n.def.night&&(_*=1.05,w*=1.1,D*=1.35);for(let F of t){let A=F.x-f,C=F.y-x,B=F.z-g,N=Math.hypot(A,C,B);if(N>F.R||!r(F.x,F.z,b,y))continue;let U=1-N/F.R,G=F.I*U*U,W=v?.7:Math.max(0,(m*A+d*C+p*B)/(N||1))*.75+.25;_+=F.col[0]*G*W,w+=F.col[1]*G*W,D+=F.col[2]*G*W}}else{let I=Math.max(0,m*l[0]+d*l[1]+p*l[2]),F=.55+.45*d;if(_=.5*F+.95*I,w=.5*F+.8*I,D=.62*F+.62*I,n.def.night){_*=.14,w*=.18,D*=.38;for(let A of t){if(!A.street)continue;let C=A.x-f,B=A.y-x,N=A.z-g,U=Math.hypot(C,B,N);if(U>A.R)continue;let G=1-U/A.R,W=A.I*G*G,K=Math.max(0,(m*C+d*B+p*N)/(U||1))*.7+.3;_+=A.col[0]*W*K,w+=A.col[1]*W*K,D+=A.col[2]*W*K}}}let L=1;if(x<.06||S&&x>Ae-.08){let I=0;for(let[F,A]of[[.28,.28],[-.28,.28],[.28,-.28],[-.28,-.28]])I+=c(b+F,y+A);L=1-.17*I-(x<.06?.06:.1)}else x<.3&&S&&(L=.9+x*.3);return h[0]=_*L,h[1]=w*L,h[2]=D*L,h}return u}function Vg(n,t){let e=n.p,i=n.n,s=n.c;for(let a=0;a<e.length;a+=3){let r=t(e[a],e[a+1],e[a+2],i[a],i[a+1],i[a+2],!1);s[a]*=r[0],s[a+1]*=r[1],s[a+2]*=r[2]}}function Wg(){let n=document.createElement("canvas");n.width=512,n.height=128;let t=n.getContext("2d"),e=Ri(99),i=n.width,s=n.height,a=t.createLinearGradient(0,0,0,s);a.addColorStop(0,"#0b1030"),a.addColorStop(.7,"#2a2f6a"),a.addColorStop(1,"#6a4a8a"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,.8)";for(let l=0;l<40;l++)t.fillRect(e()*i,e()*s*.35,1.2,1.2);for(let[l,o,h]of[[0,"#1a1f45",.25],[1,"#10132e",.45]]){let c=-10;for(;c<i;){let u=18+e()*34,f=(l?40:55)+e()*(l?55:45);t.fillStyle=o,t.fillRect(c,s-f,u,f);for(let x=s-f+5;x<s-4;x+=7)for(let g=c+3;g<c+u-4;g+=6)e()<h&&(t.fillStyle=e()<.8?"#ffd38a":"#9fd8ff",t.fillRect(g,x,3,3));l&&e()<.3&&(t.fillStyle=o,t.fillRect(c+u/2-1,s-f-12,2,12),t.fillStyle="#ff4a5a",t.fillRect(c+u/2-2,s-f-14,4,3)),c+=u+e()*4}}let r=new li(n);return r.colorSpace=Me,r.wrapS=fn,r.wrapT=fi,r}var Jo=null;function Xg(){if(Jo)return Jo;let n=e=>{let i=document.createElement("canvas");i.width=64,i.height=52;let s=i.getContext("2d");e(s);let a=new li(i);return a.colorSpace=Me,a},t=(e,i,s,a,r)=>{e.fillStyle=r,e.beginPath(),e.arc(i,s,a,0,6.3),e.fill()};return Jo=[n(e=>{e.fillStyle="#8ec8f0",e.fillRect(0,0,64,52),t(e,48,12,7,"#ffd23f"),e.fillStyle="#6a7aa0",e.beginPath(),e.moveTo(4,38),e.lineTo(24,12),e.lineTo(44,38),e.fill(),e.fillStyle="#fff",e.beginPath(),e.moveTo(19,19),e.lineTo(24,12),e.lineTo(29,19),e.fill(),e.fillStyle="#4fae5a",e.fillRect(0,36,64,16),t(e,52,36,10,"#3f9a4a")}),n(e=>{e.fillStyle="#5a2a3a",e.fillRect(0,0,64,52),e.fillStyle="#2a3a6a",e.fillRect(16,34,32,18),t(e,32,22,11,"#f0c8a0"),e.fillStyle="#3a2418",e.fillRect(20,9,24,8),e.fillStyle="#1c1330",e.fillRect(27,21,3,3),e.fillRect(35,21,3,3),e.fillStyle="#3a2418",e.fillRect(26,28,13,3)}),n(e=>{e.fillStyle="#ffc89a",e.fillRect(0,0,64,28),e.fillStyle="#3f8fd0",e.fillRect(0,28,64,24),e.fillStyle="#7a4a2a",e.fillRect(18,32,28,6),e.fillStyle="#fff",e.beginPath(),e.moveTo(32,8),e.lineTo(32,31),e.lineTo(48,31),e.fill(),e.fillStyle="#e8483f",e.beginPath(),e.moveTo(30,12),e.lineTo(30,31),e.lineTo(20,31),e.fill(),e.fillStyle="rgba(255,255,255,.5)",e.fillRect(4,42,14,2),e.fillRect(40,46,16,2)}),n(e=>{e.fillStyle="#9ad8c0",e.fillRect(0,0,64,52),t(e,32,34,14,"#f2a03a"),t(e,32,20,11,"#f2a03a"),e.fillStyle="#f2a03a",e.beginPath(),e.moveTo(22,14),e.lineTo(24,3),e.lineTo(30,11),e.fill(),e.beginPath(),e.moveTo(42,14),e.lineTo(40,3),e.lineTo(34,11),e.fill(),e.fillStyle="#1c1330",e.fillRect(27,18,3,4),e.fillRect(35,18,3,4),e.fillStyle="#ff7a8a",e.fillRect(31,24,3,2),e.fillStyle="#d8822a",e.fillRect(24,32,16,3)})],Jo}var Kc=null;function qg(){if(Kc)return Kc;let n=(i,s,a)=>{let r=document.createElement("canvas");r.width=i,r.height=s,a(r.getContext("2d"),i,s);let l=new li(r);return l.colorSpace=Me,l},t=n(64,128,(i,s,a)=>{let r=i.createLinearGradient(0,0,0,a);r.addColorStop(0,"#b9b2a2"),r.addColorStop(.2,"#fffaf0"),r.addColorStop(.8,"#fffaf0"),r.addColorStop(1,"#b9b2a2"),i.fillStyle=r,i.fillRect(0,0,s,a),i.fillStyle="#2f9a3a",i.fillRect(30,-2,4,14),i.fillStyle="#e8303e",i.beginPath(),i.arc(24,14,9,0,6.3),i.arc(40,16,9,0,6.3),i.fill(),i.font="bold 54px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="#1c1330",i.strokeText("7",32,66),i.fillStyle="#e8303e",i.fillText("7",32,66),i.fillStyle="#1c1330",i.fillRect(8,104,48,22),i.fillStyle="#ffd23f",i.font="bold 15px Arial Black, Arial, sans-serif",i.fillText("BAR",32,116)}),e=n(256,72,(i,s,a)=>{let r=i.createLinearGradient(0,0,0,a);r.addColorStop(0,"#ff5fa2"),r.addColorStop(1,"#a8207a"),i.fillStyle="#1c1330",i.fillRect(0,0,s,a),i.fillStyle=r,i.fillRect(6,6,s-12,a-12);for(let o=12;o<s-6;o+=16)for(let h of[11,a-11])i.fillStyle="#fff3b0",i.beginPath(),i.arc(o,h,3.4,0,6.3),i.fill();i.font="bold 38px Arial Black, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=7,i.strokeStyle="#1c1330",i.strokeText("LUCKY 7",s/2,a/2+2);let l=i.createLinearGradient(0,18,0,54);l.addColorStop(0,"#fff6c0"),l.addColorStop(1,"#ffb52e"),i.fillStyle=l,i.fillText("LUCKY 7",s/2,a/2+2)});return Kc={reel:t,sign:e}}function Yg(){let n=document.createElement("canvas");n.width=1024,n.height=128;let t=n.getContext("2d"),e=Ri(77),i=n.width,s=n.height,a=t.createLinearGradient(0,0,0,s);a.addColorStop(0,"#0d1430"),a.addColorStop(.55,"#24325e"),a.addColorStop(1,"#3a3f66"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(230,236,255,0.8)";for(let o=0;o<70;o++)t.fillRect(e()*i,e()*s*.45,1.5,1.5);let r=o=>{o(0),o(-i),o(i)};t.fillStyle="#1b2446",t.beginPath(),t.moveTo(0,s);for(let o=0;o<=i;o+=16)t.lineTo(o,62+Math.sin(o/i*Math.PI*6)*10+Math.sin(o/i*Math.PI*14)*5);t.lineTo(i,s),t.fill();for(let o=0;o<14;o++){let h=e()*i,c=70+e()*14;r(u=>{t.fillStyle="#ffd38a",t.fillRect(h+u,c,3,2)})}t.fillStyle="#0c1226";for(let o=0;o<90;o++){let h=e()*i,c=14+e()*22,u=8+e()*10;r(f=>{t.beginPath(),t.moveTo(h+f-u,s-18),t.lineTo(h+f,s-18-c),t.lineTo(h+f+u,s-18),t.fill()})}t.fillRect(0,s-20,i,20),t.strokeStyle="#05080f",t.lineWidth=3;for(let o=40;o<i;o+=128)t.beginPath(),t.moveTo(o,s),t.lineTo(o,26),t.stroke(),t.fillStyle="#05080f",t.fillRect(o-9,30,18,3);t.lineWidth=1,t.beginPath();for(let o=40;o<i+128;o+=128)t.moveTo(o,31),t.quadraticCurveTo(o+64,40,o+128,31);t.stroke();let l=new li(n);return l.colorSpace=Me,l.wrapS=fn,l.wrapT=fi,l}var Tu=new Nt,La={};function Zc(n,t,e){return Tu.setHex(n).getHSL(La),La.l>.75?n:Tu.setHSL(La.h,Math.min(.66,Math.max(e,La.s*1.12)),Math.max(t,La.l)).getHex()}var Jc=new Map;function $g(n){if(Jc.has(n))return Jc.get(n);let t={...n,wall:Zc(n.wall,.34,.32),panel:Zc(n.panel,.2,.3),curtain:Zc(n.curtain,.3,.4)};return Jc.set(n,t),t}function Cu(n){let t=pi(),e={wood:new kt(2),carpet:new kt(1),tile:new kt(1),wallpaper:new kt(1),panel:new kt(1),brick:new kt(.9),plaster:new kt(2),grass:new kt(3),asphalt:new kt(3),concrete:new kt(1),plain:new kt(1),woodfine:new kt(.8),rug:new kt(1),unlit:new kt(1),shadow:new kt(1),patch:new kt(1),trainN:new kt(8),trainS:new kt(8),slotReel:new kt(1),slotSign:new kt(1),pics:[0,1,2,3].map(()=>new kt(1)),skyline:new kt(6)},i=!!n.def.train,{W:s,H:a,ch:r,floor:l}=n,o=Ri(1337),h=(A,C)=>A+o()*(C-A),c=(A,C)=>A>=0&&C>=0&&A<s&&C<a&&r[C*s+A]==="#",u=(A,C)=>A<0||C<0||A>=s||C>=a||n.outdoor[C*s+A]===1,f=n.van?n.van.y-1:n.def.roadTop??a,x=!!n.def.night,g=n.def.lampScale||1,m=[],d=[],p=[],v=new Int16Array(s*a).fill(-1),b=(A,C)=>!c(A,C)&&(c(A-1,C)&&c(A+1,C)||c(A,C-1)&&c(A,C+1)),y=[];for(let A=0;A<s*a;A++){let C=A%s,B=A/s|0;if(v[A]>=0||r[A]==="#"||n.outdoor[A]||b(C,B))continue;let N=y.length,U=[],G=[A];for(v[A]=N;G.length;){let K=G.pop(),Z=K%s,rt=K/s|0;U.push(K);for(let[k,P]of[[1,0],[-1,0],[0,1],[0,-1]]){let Q=Z+k,st=rt+P,ct=st*s+Q;Q<0||st<0||Q>=s||st>=a||v[ct]>=0||r[ct]==="#"||n.outdoor[ct]||b(Q,st)||(v[ct]=N,G.push(ct))}}let W=n.def.palette||wu;y.push({id:N,cells:U,pal:$g(W[N%W.length])})}for(let A=0;A<s*a;A++)if(v[A]<0&&b(A%s,A/s|0)){let C=A%s,B=A/s|0;for(let[N,U]of[[0,1],[1,0],[0,-1],[-1,0]]){let G=(B+U)*s+C+N;if(v[G]>=0){v[A]=v[G];break}}}let M=(A,C)=>{let B=A>=0&&C>=0&&A<s&&C<a?v[C*s+A]:-1;return B>=0?y[B].pal:wu[0]};for(let A of y){let C=1e9,B=-1,N=1e9,U=-1;for(let rt of A.cells){let k=rt%s,P=rt/s|0;C=Math.min(C,k),B=Math.max(B,k),N=Math.min(N,P),U=Math.max(U,P)}let G=B-C+1,W=U-N+1,K=Math.max(G,W),Z=Math.max(1,Math.round(K/6));for(let rt=0;rt<Z;rt++){let k=(rt+.5)/Z,P=G>=W?C+G*k:C+G/2,Q=G>=W?N+W/2:N+W*k;m.push({x:P,y:Ae-.4,z:Q,col:x?[1,.7,.5]:[1,.74,.45],I:1.75*g,R:5.6,pendant:!0})}}let S=40,_=(A,C,B,N,U,G)=>A.box((C+N)/2,-.06,(B+U)/2,N-C,.05,U-B,G,{faces:Yt});if(i){_(e.grass,-S,-S,s+S,.6,6978154),_(e.grass,-S,a-.6,s+S,a+S,6978154),_(e.concrete,-S,.6,s+S,a-.6,9077880);for(let A=-S;A<s+S;A+=.7)(A<-.3||A>s+.3)&&e.woodfine.box(A,-.02,a/2,.22,.05,a-2.4,5914412,{faces:Yt|Pe|We});for(let A of[a/2-1.6,a/2+1.6])for(let[C,B]of[[-S,-.2],[s+.2,s+S]])e.plain.box((C+B)/2,0,A,B-C,.08,.1,12107980,{top:15265526})}if(!i){_(e.grass,-S,-S,0,f,16777215),_(e.grass,s,-S,s+S,f,16777215),_(e.grass,0,-S,s,0,16777215),_(e.concrete,-S,f,0,f+1,16777215),_(e.concrete,s,f,s+S,f+1,16777215),_(e.asphalt,-S,f+1,0,a,16777215),_(e.asphalt,s,f+1,s+S,a,16777215),_(e.concrete,-S,a,s+S,a+1.2,16777215),_(e.grass,-S,a+1.2,s+S,a+S,16777215);for(let N=-S;N<s+S;N+=2.2)e.plain.box(N+.5,-.01,f+2,1.1,.02,.12,15911244,{faces:Yt});let A=(N,U)=>{let G=.8+o()*.6,W=o()*1.5;e.woodfine.box(N,0,U,.28*G,.9*G,.28*G,8016438,{ry:W}),e.plain.box(N,.7*G,U,1.4*G,1*G,1.4*G,Bi[o()*4|0],{ry:W}),e.plain.box(N+.2*G,1.5*G,U-.1*G,1*G,.8*G,1*G,Bi[o()*4|0],{ry:W+.5}),e.plain.box(N-.1*G,2.15*G,U+.1*G,.6*G,.5*G,.6*G,Bi[o()*4|0],{ry:W+.9})};for(let N=-S+2;N<f-.5;N+=2.6)for(let U=-S+2;U<s+S-2;U+=2.6)U>-1.5&&U<s+1&&N>-1.5||o()<.55&&A(U+(o()-.5)*1.4,N+(o()-.5)*1.4);let C=[15246478,10274761,15652762,12167636,11064480];for(let N=-S+3,U=0;N<s+S;N+=7,U++){let G=a+4.5+U%2*.8,W=C[U%5],K=[9058874,3820138,5914712,3824202][U%4];e.plain.box(N,0,G,5,2.4,4,W),e.plain.box(N,0,G-2.01,5.02,.35,.02,ft(W,.75),{faces:jt});for(let Z=0;Z<4;Z++)e.plain.box(N,2.4+Z*.32,G,5.6-Z*1.1,.32,4.6,ft(K,1-Z*.06),{top:ft(K,1.12)});e.plain.box(N+1.5,2.9,G+.6,.5,1.2,.5,9062970,{top:5909024});for(let Z of[-1.5,1.5]){e.plain.box(N+Z,.88,G-2.02,.98,.9,.04,16777215,{faces:jt}),e.unlit.box(N+Z,.95,G-2.04,.8,.75,.02,16765834,{faces:jt}),e.plain.box(N+Z,1.3,G-2.06,.04,.75,.02,16777215,{faces:jt}),e.plain.box(N+Z,1.31,G-2.06,.8,.04,.02,16777215,{faces:jt});for(let rt of[-1,1])e.plain.box(N+Z+rt*.62,.9,G-2.04,.22,.86,.04,ft(K,1.2),{faces:jt|Pe|We});e.plain.box(N+Z,.84,G-2.12,1,.08,.2,16777215),e.plain.box(N+Z,.92,G-2.12,.8,.14,.16,Bi[U%4])}e.plain.box(N,0,G-2.3,1.3,.14,.6,13156528),e.woodfine.box(N,0,G-2.02,.95,1.55,.04,16777215,{faces:jt}),e.woodfine.box(N,0,G-2.04,.75,1.42,.03,[8014643,11745617,2775690,3832394][(U+1)%4],{faces:jt}),e.plain.box(N+.25,.7,G-2.07,.06,.06,.04,14725194),e.plain.box(N-1.9,0,G-3.3,.06,.8,.06,5913126),e.plain.box(N-1.9,.8,G-3.3,.24,.2,.34,[3107560,15222847,3816006][U%3]),o()<.8&&A(N+3.3,G-1.5)}let B=(N,U,G,W)=>{let K=Math.hypot(G-N,W-U),Z=Math.round(K/.45),rt=U===W;e.plain.box((N+G)/2,.28,(U+W)/2,rt?K:.05,.07,rt?.05:K,16183526),e.plain.box((N+G)/2,.58,(U+W)/2,rt?K:.05,.07,rt?.05:K,16183526);for(let k=0;k<=Z;k++){let P=k/Z;e.plain.box(N+(G-N)*P,0,U+(W-U)*P,.1,.8,.1,16777215)}};B(-.05,-.05,s+.05,-.05),B(-.05,-.05,-.05,f-.05),B(s+.05,-.05,s+.05,f-.05);for(let N of[-.25,s+.25])for(let U=f;U<a;U+=.5)e.plain.box(N,0,U+.25,.3,.7,.5,(U*2|0)%2?15222847:16777215)}let w=(A,C,B,N,U,G,W,K,Z=2,rt={})=>{let k=N>0?Pe:N<0?We:U>0?lt:jt,P=C+.5+N*.5+N*(rt.off||0),Q=B+.5+U*.5+U*(rt.off||0);for(let st=0;st<Z;st++){let ct=(st+.5)/Z-.5;A.box(P+(U?ct:0),G,Q+(N?ct:0),N?0:1/Z,W,U?0:1/Z,K,{faces:k})}};for(let A=0;A<a;A++)for(let C=0;C<s;C++){let B=A*s+C,N=r[B];if(N==="#"){e.plain.box(C+.5,Ae,A+.5,1,0,1,3813194,{faces:Yt});for(let[k,P]of[[1,0],[-1,0],[0,1],[0,-1]]){if(c(C+k,A+P))continue;let Q=u(C+k,A+P),st=(i?C%2===0&&P!==0:(C+A)%3===0)&&(Q||u(C-k,A-P)&&!c(C-k,A-P)),ct=C+.5+k*.5,at=A+.5+P*.5,Bt=Mt=>[k?.03:Mt,P?.03:Mt],Qt=k>0?Pe:k<0?We:P>0?lt:jt;if(Q&&i)w(e.plain,C,A,k,P,0,Ae,2766162,2),e.plain.box(ct+k*.01,.62,at+P*.01,k?.02:1,.08,P?.02:1,14267482,{faces:Qt});else if(Q){if(w(e.brick,C,A,k,P,0,Ae,16777215,2),e.plain.box(ct+k*.05,Ae-.16,at+P*.05,k?.1:1,.16,P?.1:1,14866112,{faces:63&~(k>0?We:k<0?Pe:P>0?jt:lt)}),e.plain.box(ct+k*.035,Ae-.24,at+P*.035,k?.07:1,.08,P?.07:1,12101768,{faces:63&~Yt&~(k>0?We:k<0?Pe:P>0?jt:lt)}),(C*3+A*5)%9===0&&(C+A)%3!==0){let Mt=P?.42:0,Ut=k?.42:0;e.plain.box(ct+k*.05+Mt,.05,at+P*.05+Ut,.07,Ae-.25,.07,5923958);for(let te of[.5,1.2])e.plain.box(ct+k*.04+Mt,te,at+P*.04+Ut,k?.06:.11,.04,P?.06:.11,4081238);e.plain.box(ct+k*.09+Mt,.02,at+P*.09+Ut,k?.14:.09,.05,P?.14:.09,5923958)}e.plain.box(ct+k*.02,0,at+P*.02,...[k?.04:1,.2,P?.04:1].slice(0,1),.2,P?.04:1,9075306,{faces:Qt|Yt})}else{let Mt=M(C+k,A+P);w(e.panel,C,A,k,P,0,.72,Mt.panel,2),w(e.wallpaper,C,A,k,P,.72,.6,Mt.wall,2),w(e.wallpaper,C,A,k,P,1.32,Ae-1.32,Mt.wall,2);let[Ut,te]=Bt(1);e.woodfine.box(ct+k*.015,0,at+P*.015,Ut,.13,te,zg,{faces:Qt|Yt}),e.plain.box(ct+k*.02,.7,at+P*.02,k?.04:1,.05,P?.04:1,Bg,{faces:Qt|Yt|ei}),e.plain.box(ct+k*.02,Ae-.1,at+P*.02,k?.04:1,.1,P?.04:1,Yc,{faces:Qt|ei})}if(st){let Mt=Q?16183526:16777215;n.def.skyline&&!Q?e.skyline.box(ct+k*.006,.82,at+P*.006,k?.01:.62,.62,P?.01:.62,16777215,{faces:Qt}):i&&!Q?(P>0?e.trainN:e.trainS).box(ct+k*.006,.82,at+P*.006,.62,.62,.01,16777215,{faces:Qt}):(e.unlit.box(ct+k*.006,.82,at+P*.006,k?.01:.62,.62,P?.01:.62,Q?x?3820138:7315138:x?4872842:16769712,{faces:Qt}),e.unlit.box(ct+k*.008,1.14,at+P*.008,k?.01:.62,.3,P?.01:.62,Q?x?4872826:9418966:x?6978216:16773584,{faces:Qt})),e.plain.box(ct+k*.02,.76,at+P*.02,k?.06:.78,.06,P?.06:.78,Mt,{faces:63&~ei}),e.plain.box(ct+k*.02,1.44,at+P*.02,k?.05:.74,.05,P?.05:.74,Mt);for(let Ut of[-1,1])e.plain.box(ct+k*.02+(P?Ut*.345:0),.8,at+P*.02+(k?Ut*.345:0),.05,.66,.05,Mt);if(e.plain.box(ct+k*.02,1.11,at+P*.02,k?.04:.62,.035,P?.04:.62,Mt),e.plain.box(ct+k*.02,.8,at+P*.02,k?.04:.035,.64,P?.04:.035,Mt),!Q){let Ut=M(C+k,A+P);for(let De of[-1,1]){let ke=P?De*.48:0,ni=k?De*.48:0;e.plain.box(ct+k*.06+ke,.55,at+P*.06+ni,k?.06:.2,1.2,P?.06:.2,Ut.curtain,{top:ft(Ut.curtain,.8)})}e.plain.box(ct+k*.07,1.68,at+P*.07,k?.03:1.2,.03,P?.03:1.2,11901530);let te=ct+k*.9,Jt=at+P*.9;e.patch.box(te+(P?.25:0),.015,Jt+(k?.25:0),k?1:.8,0,P?1:.8,x?7309016:16767392,{faces:Yt,fit:!0}),m.push({x:ct+k*.6,y:1.1,z:at+P*.6,col:x?[.45,.55,1]:[1,.8,.55],I:x?.6:.95,R:3.6}),p.push([ct+k*.03,at+P*.03,k,P])}}else if(!Q&&(C*5+A*3)%7===0){let Mt=(C*7+A*3)%4,Ut=[5913126,13146682,2763574,9067066][(C+A)%4];e.woodfine.box(ct+k*.025,.95,at+P*.025,k?.05:.56,.46,P?.05:.56,Ut,{faces:63}),e.plain.box(ct+k*.035,1,at+P*.035,k?.05:.46,.36,P?.05:.46,16183526,{faces:Qt}),e.pics[Mt].box(ct+k*.042,1.03,at+P*.042,k?.05:.38,.3,P?.05:.38,16777215,{faces:Qt,fit:!0})}}continue}let U=l[B],G=U==="wood"?e.wood:U==="carpet"?e.carpet:U==="tile"?e.tile:U==="grass"?e.grass:A===f?e.concrete:e.asphalt,W=U==="carpet"?n.def.carpet||9346022:16777215,K=U==="grass"||U==="road"?1:2;for(let k=0;k<K;k++)for(let P=0;P<K;P++)G.box(C+(P+.5)/K,-.05,A+(k+.5)/K,1/K,.05,1/K,W,{faces:Yt});if(U==="road"&&A===f+1&&C%2===0&&e.plain.box(C+1,-.01,A+1,1.1,.02,.12,15911244,{faces:Yt}),U!=="grass"&&U!=="road")for(let k=0;k<2;k++)for(let P=0;P<2;P++)e.plaster.box(C+.25+P*.5,Ae,A+.25+k*.5,.5,0,.5,16183268,{faces:ei});let Z=c(C-1,A)&&c(C+1,A),rt=c(C,A-1)&&c(C,A+1);if(Z||rt){let k=M(C,A);e.plain.box(C+.5,1.55,A+.5,1,Ae-1.55,1,k.wall,{faces:Z?ei|lt|jt:ei|Pe|We}),e.plain.box(C+.5,1.55,A+.5,Z?1.04:1.12,.07,Z?1.12:1.04,Yc,{faces:63&~Yt});for(let Q of[-1,1])e.plain.box(C+.5+(Z?Q*.48:0),0,A+.5+(rt?Q*.48:0),Z?.07:1.12,1.55,rt?.07:1.12,Yc,{faces:63&~ei&~Yt});let P=N==="D"||N==="L"?[]:Z?[[-1,1],[1,1],[-1,-1],[1,-1]]:[[1,-1],[1,1],[-1,-1],[-1,1]];for(let[Q,st]of P){let ct=Z?C+Q:C+st,at=Z?A+st:A+Q;if(!c(Z?C+Q:C,Z?A:A+Q)||c(ct,at)||u(ct,at))continue;let Bt=at*s+ct;if(!n.walk[Bt])continue;let Qt=11040588;if(Z){let Mt=st>0?A+1+.04:A-.04,Ut=Q>0?C+1+.44:C-.44;e.woodfine.box(Ut,0,Mt,.86,1.5,.05,Qt,{faces:63}),e.plain.box(Ut+Q*.32,.72,Mt+st*.035,.05,.05,.03,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(Ut,te,Mt+st*.028,.6,.55,.01,ft(Qt,1.12),{faces:st>0?lt:jt})}else{let Mt=st>0?C+1+.04:C-.04,Ut=Q>0?A+1+.44:A-.44;e.woodfine.box(Mt,0,Ut,.05,1.5,.86,Qt,{faces:63}),e.plain.box(Mt+st*.035,.72,Ut+Q*.32,.03,.05,.05,14267482,{faces:63});for(let te of[.15,.85])e.woodfine.box(Mt+st*.028,te,Ut,.01,.55,.6,ft(Qt,1.12),{faces:st>0?Pe:We})}break}}}for(let A of n.def.decor||[])if(A.type==="rug"){let[C,B,N,U]=A.rect;e.rug.box(C+N/2,0,B+U/2,N-.2,.02,U-.2,A.color,{faces:Yt,fit:!0})}for(let A of n.furn)Hg(n,A,e,o,m);for(let A of m)A.pendant&&(e.plain.box(A.x,A.y+.12,A.z,.02,Ae-A.y-.12,.02,2763574),e.plain.box(A.x,Ae-.02,A.z,.16,.02,.16,16183526),e.plain.box(A.x,A.y+.02,A.z,.46,.12,.46,15260868,{faces:63&~ei}),e.plain.box(A.x,A.y+.14,A.z,.3,.06,.3,14207920),e.unlit.box(A.x,A.y-.04,A.z,.16,.08,.16,16773576,{faces:63}),e.unlit.box(A.x,A.y+.021,A.z,.44,.001,.44,16769192,{faces:ei}),d.push(A.x,A.y-.02,A.z));for(let A of m)!A.pendant&&A.I>.8&&A.y<1.2&&A.col[2]<.5&&d.push(A.x,A.y-.05,A.z);if(x)for(let A=-10;A<s+12;A+=6){let C=f+.15;e.plain.box(A,0,C,.12,2.6,.12,2763574),e.plain.box(A,2.55,C+.35,.1,.08,.7,2763574),e.unlit.box(A,2.45,C+.65,.3,.1,.3,16769696,{faces:63}),m.push({x:A,y:2.3,z:C+.7,col:[1,.78,.45],I:1.6,R:5.5,street:!0}),d.push(A,2.42,C+.65)}if(n.roof){let A=n.roof.x+.5,C=n.roof.y+.5;for(let B of[-1,1])e.plain.box(A+B*.22,0,C-.3,.05,Ae,.05,9082020);for(let B=0;B<6;B++)e.plain.box(A,.25+B*.28,C-.3,.44,.04,.04,12108496);e.unlit.box(A,Ae-.005,C-.1,.7,.01,.7,658456,{faces:ei}),e.plain.box(A,Ae-.08,C-.1,.8,.08,.8,6976644,{faces:63&~Yt&~ei})}let D=Gg(n,m);for(let A of["wood","carpet","tile","wallpaper","panel","brick","plaster","grass","asphalt","concrete","plain","woodfine","rug"])Vg(e[A],D);n.light=new Float32Array(s*a*3);for(let A=0;A<a;A++)for(let C=0;C<s;C++){let B=D(C+.5,1,A+.5,0,0,0,!0),N=(A*s+C)*3;n.light[N]=B[0],n.light[N+1]=B[1],n.light[N+2]=B[2]}let L=new zt,I=(A,C,B=0)=>{if(A.empty)return;let N=new dt(A.build(),C);N.matrixAutoUpdate=!1,N.updateMatrix(),N.renderOrder=B,L.add(N)},F=A=>new At({vertexColors:!0,map:A});if(I(e.wood,F(t.wood)),I(e.carpet,F(t.carpet)),I(e.tile,F(t.tile)),I(e.wallpaper,F(t.wallpaper)),I(e.panel,F(t.panel)),I(e.brick,F(t.brick)),I(e.plaster,F(t.plaster)),I(e.grass,F(t.grass)),I(e.asphalt,F(t.asphalt)),I(e.concrete,F(t.concrete)),I(e.plain,F(t.plain)),I(e.woodfine,F(t.woodfine)),I(e.rug,new At({vertexColors:!0,map:t.rug,polygonOffset:!0,polygonOffsetFactor:-1})),I(e.unlit,new At({vertexColors:!0,toneMapped:!1})),!e.skyline.empty){let A=Wg();A.repeat.set(1,6/.62),A.offset.set(0,-.82/.62),I(e.skyline,new At({map:A,toneMapped:!1}))}{let A=Xg();e.pics.forEach((C,B)=>I(C,new At({vertexColors:!0,map:A[B]})))}if(!e.slotReel.empty){let A=qg();I(e.slotReel,new At({vertexColors:!0,map:A.reel,toneMapped:!1})),I(e.slotSign,new At({vertexColors:!0,map:A.sign,toneMapped:!1}))}if(i){let A=Yg(),C=[];for(let[B,N]of[[e.trainN,1],[e.trainS,-1]]){let U=A.clone();U.needsUpdate=!0,U.repeat.set(1,8/.62),U.offset.set(0,-.82/.62);let G=new At({map:U,toneMapped:!1});G.userData.sgn=N,C.push(G),I(B,G)}L.userData.trainMats=C}if(I(e.shadow,new At({map:t.shadow,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1),I(e.patch,new At({vertexColors:!0,map:t.patch,transparent:!0,depthWrite:!1,blending:Le,polygonOffset:!0,polygonOffsetFactor:-3}),2),p.length){let A=[],C=[],B=[];for(let[G,W,K,Z]of p){let rt=Z?1:0,k=K?1:0,P=A.length/3,Q=[[G-rt*.3,1.4,W-k*.3,.16],[G+rt*.3,1.4,W+k*.3,.16],[G+K*1.5+rt*.75,.02,W+Z*1.5+k*.75,0],[G+K*1.5-rt*.15,.02,W+Z*1.5-k*.15,0],[G-rt*.3,.82,W-k*.3,.12],[G+rt*.3,.82,W+k*.3,.12],[G+K*.55+rt*.55,.02,W+Z*.55+k*.55,0],[G+K*.55-rt*.05,.02,W+Z*.55-k*.05,0]];for(let st of Q)A.push(st[0],st[1],st[2]),x?C.push(.5,.62,1,st[3]*.9):C.push(1,.85,.6,st[3]);B.push(P,P+1,P+2,P,P+2,P+3,P+4,P+5,P+6,P+4,P+6,P+7),B.push(P,P+1,P+5,P,P+5,P+4)}let N=new me;N.setAttribute("position",new le(new Float32Array(A),3)),N.setAttribute("color",new le(new Float32Array(C),4)),N.setIndex(B);let U=new dt(N,new At({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Le,side:Oe}));U.renderOrder=5,L.add(U)}if(d.length){let A=new me;A.setAttribute("position",new le(new Float32Array(d),3));let C=new Ji(A,new Ui({map:t.glow,size:1.1,color:16762746,transparent:!0,depthWrite:!1,blending:Le,sizeAttenuation:!0}));C.renderOrder=6,L.add(C)}return L}function Ru(){let n=new we({vertexColors:!0,emissive:1448486}),t=new zt,e=new kt,i=5923976,s=7239840,a=2764612,r=15250234,l=16766810;for(let[d,p]of[[-.38,-.32],[.38,-.32],[-.38,.32],[.38,.32]])e.box(d,0,p,.14,.08,.14,a,{faces:63});e.box(0,.08,0,.96,1,.86,i,{top:s}),e.box(0,1.06,0,.9,.04,.8,s,{top:8423856}),e.box(0,.08,0,1,.06,.9,a);for(let d of[-1,1])e.box(d*.485,.14,.02,.03,.9,.84,s,{faces:d>0?Pe:We});for(let d of[-1,1])for(let p of[.24,.94])e.box(d*.502,p,.3,.01,.05,.05,r,{faces:d>0?Pe:We});e.box(0,.16,.425,.86,.06,.02,r,{faces:lt|Yt}),e.box(0,1,.425,.86,.04,.02,r,{faces:lt}),e.box(0,.2,.38,.74,.8,.05,987158,{faces:lt}),e.box(0,.22,.2,.66,.02,.3,2764350,{faces:Yt}),e.box(0,.58,.2,.66,.02,.3,2764350,{faces:Yt});for(let d=0;d<3;d++)e.box(-.18+d*.18,.24,.24,.16,.08,.1,r,{top:16769658,faces:63}),e.box(-.09+d*.18,.32,.24,.16,.08,.1,r,{top:16769658,faces:63});for(let d=0;d<4;d++)e.box(-.2+d*.13,.6,.24,.11,.07+d%2*.03,.18,4176208,{top:7330938,faces:63});t.add(new dt(e.build(),n));let o=new kt;o.box(.37,.18,.035,.76,.84,.08,s,{faces:63,top:8423856}),o.box(.37,.24,.08,.64,.72,.02,i,{faces:63}),o.box(.37,.84,.095,.3,.07,.012,l,{faces:lt|Yt}),o.box(.37,.86,.103,.22,.025,.004,5913106,{faces:lt});let h=new mi(.15,.15,.04,20);h.rotateX(Math.PI/2);let c=new mi(.115,.115,.05,20);c.rotateX(Math.PI/2);let u=new mi(.05,.06,.07,12);u.rotateX(Math.PI/2),o.add(h,r,.3,.6,.1),o.box(.3,.745,.12,.02,.03,.02,16726862,{faces:63});let f=new kt;f.add(c,2237487,0,0,.005),f.add(u,14212842,0,0,.04);for(let d=0;d<12;d++){let p=d*Math.PI/6;f.box(Math.cos(p)*.095,Math.sin(p)*.095-.008,.031,d%3?.012:.02,.016,.004,d?16773568:16726862,{faces:lt})}f.box(0,.025,.075,.016,.05,.012,10134446,{faces:63});let x=new mi(.035,.035,.08,10);x.rotateX(Math.PI/2),o.add(x,14212842,.56,.42,.13),o.box(.56,.405,.13,.26,.03,.03,14212842,{faces:63}),o.box(.56,.29,.13,.03,.26,.03,14212842,{faces:63});for(let[d,p]of[[.69,.42],[.43,.42],[.56,.55],[.56,.29]])o.box(d,p-.025,.13,.05,.05,.05,15216702,{faces:63,top:16738932});o.box(.56,.24,.095,.05,.08,.01,r,{faces:lt}),o.box(.56,.25,.1,.015,.04,.006,1839920,{faces:lt});for(let d of[.26,.84])o.box(0,d,.04,.08,.16,.12,a,{faces:63}),o.box(0,d+.04,.1,.05,.08,.02,r,{faces:lt});for(let d of[.32,.6,.88])o.box(.77,d,.03,.06,.06,.06,14212842,{faces:63});let g=new dt(o.build(),n);g.position.set(-.37,-.08,.42);let m=new dt(f.build(),n);return m.position.set(.3,.6,.1),g.add(m),t.add(g),{group:t,door:g,dial:m,mat:n}}function Pu(){let n=new kt,t=5981910,e=16052714,i=15905076,s=2502735,a=14015716,r=1842728;n.box(-.15,.28,0,2.3,.6,1.3,t),n.box(-.15,.88,0,2.3,.5,1.28,e,{top:16777215}),n.box(1.12,.28,0,.5,.52,1.28,t),n.box(1,.8,0,.34,.42,1.24,e,{top:16777215,ry:0}),n.box(1.17,.83,0,.02,.36,1.08,s,{faces:Pe}),n.box(1.18,.86,.3,.025,.28,.04,9085120,{faces:Pe});for(let x of[-1,1])n.box(.88,.88,x*.645,.4,.32,.01,s,{faces:x>0?lt:jt}),n.box(-.3,.92,x*.645,1.4,.28,.01,s,{faces:x>0?lt:jt}),n.box(-.15,.56,x*.652,2.3,.1,.01,i,{faces:x>0?lt:jt}),n.box(.6,.38,x*.652,.06,.04,.012,a,{faces:x>0?lt:jt}),n.box(1.12,.92,x*.72,.08,.12,.1,2237487);n.box(-.3,.68,.656,1.1,.2,.006,16777215,{faces:lt}),n.box(-.3,.68,-.656,1.1,.2,.006,16777215,{faces:jt}),n.box(1.38,.32,0,.03,.22,.8,2237487,{faces:Pe});for(let x=0;x<4;x++)n.box(1.39,.35+x*.05,0,.02,.02,.74,a,{faces:Pe});for(let x of[-1,1])n.box(1.385,.36,x*.5,.04,.14,.2,16774064,{faces:Pe}),n.box(-1.31,.42,x*.5,.04,.2,.16,16731486,{faces:We});n.box(1.42,.16,0,.1,.12,1.34,a),n.box(-1.33,.16,0,.1,.12,1.34,a),n.box(-1.31,.4,0,.02,.88,.02,2237487,{faces:We}),n.box(-.2,1.38,0,1.6,.04,1,2763574);for(let x of[-1,1])n.box(-.2,1.42,x*.48,1.6,.05,.04,a);n.box(-.4,1.42,0,1.4,.07,.07,14189370,{faces:63}),n.box(.1,1.42,.25,.9,.06,.06,10134446,{faces:63});for(let x of[-.75,.95])for(let g of[-.6,.6])n.box(x,0,g,.54,.54,.24,r,{faces:63}),n.box(x,.14,g+Math.sign(g)*.125,.26,.26,.012,a,{faces:g>0?lt:jt}),n.box(x,.24,g+Math.sign(g)*.132,.08,.08,.008,5923440,{faces:g>0?lt:jt}),n.box(x,.5,g,.64,.08,.28,ft(t,.7),{faces:63&~ei});let l=new dt(n.build(),new we({vertexColors:!0,emissive:1709096})),o=new zt;o.add(l);let h=document.createElement("canvas");h.width=256,h.height=48;let c=h.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,48),c.fillStyle="#5b46d6",c.font="bold 26px Arial Black, Arial, sans-serif",c.textBaseline="middle",c.fillText("PIPE DREAMS",46,22),c.font="bold 11px Arial, sans-serif",c.fillStyle="#1c1330",c.fillText("24h PLUMBING \xB7 NO QUESTIONS",48,40),c.fillStyle="#f2b134",c.fillRect(8,18,30,8),c.beginPath(),c.arc(36,22,9,0,6.3),c.fill(),c.fillStyle="#ffffff",c.fillRect(36,18,10,8);let u=new li(h);u.colorSpace=Me;let f=new At({map:u});for(let x of[-1,1]){let g=new dt(new je(1.08,.19),f);g.position.set(-.3,.78,x*.661),x<0&&(g.rotation.y=Math.PI),o.add(g)}return{group:o,body:l}}function Lu(){let n=new kt,t=2237743,e=15905076,i=7321599,s=1316380;n.box(0,0,0,2.2,1,1.1,t,{top:2895932}),n.box(1.25,.1,0,.5,.75,.95,i),n.box(.35,.45,0,1,.36,1.12,i,{faces:lt|jt}),n.box(0,.32,0,2.22,.1,1.12,e,{faces:Pe|We|lt|jt}),n.box(-1.9,.45,0,1.9,.26,.26,t),n.box(-2.8,.45,0,.3,.75,.08,e),n.box(0,1,0,.5,.22,.5,s);for(let u of[-.62,.62])n.box(0,-.42,u,2.2,.07,.08,s,{faces:63}),n.box(.5,-.24,u*.92,.07,.36,.07,s,{faces:63}),n.box(-.5,-.24,u*.92,.07,.36,.07,s,{faces:63});n.box(1.5,-.28,0,.1,.12,.3,16774064);let a=new zt;a.add(new dt(n.build(),new we({vertexColors:!0})));let r=new zt,l=new At({color:789778});for(let u=0;u<2;u++){let f=new dt(new ce(5.2,.04,.22),l);f.rotation.y=u*Math.PI/2,r.add(f)}r.position.y=1.16,a.add(r);let o=new zt;o.add(new dt(new ce(.04,.9,.12),l),new dt(new ce(.04,.12,.9),l)),o.position.set(-2.8,.55,.1),a.add(o);let h=new dt(new mi(.08,1.6,6,16,1,!0),new At({color:16773568,transparent:!0,opacity:.16,blending:Le,depthWrite:!1,side:Oe}));h.position.set(1.5,-3.3,0),a.add(h);let c=new dt(new ce(.1,.1,.1),new At({color:16722490}));return c.position.set(-2.8,.95,0),a.add(c),a.visible=!1,{group:a,rotor:r,tail:o,beam:h,blink:c}}function Iu(){let n=new kt,t=16054008,e=1842728,i=2502735,s=14015716;n.box(0,.2,0,2.6,.42,1.22,t,{top:16777215}),n.box(1.05,.2,0,.5,.42,1.24,e,{top:2763832}),n.box(-1.1,.2,0,.4,.42,1.24,e,{top:2763832}),n.box(-.1,.62,0,1.4,.36,1.12,t,{top:16777215}),n.box(.61,.66,0,.02,.28,1,i,{faces:Pe}),n.box(-.81,.66,0,.02,.28,1,i,{faces:We});for(let x of[-1,1])n.box(.15,.66,x*.565,.52,.26,.01,i,{faces:x>0?lt:jt}),n.box(-.45,.66,x*.565,.48,.26,.01,i,{faces:x>0?lt:jt}),n.box(-.15,.62,x*.565,.04,.32,.012,t,{faces:x>0?lt:jt}),n.box(0,.3,x*.616,1.9,.08,.008,3107560,{faces:x>0?lt:jt}),n.box(.66,.66,x*.62,.06,.1,.1,e);n.box(1.31,.26,0,.03,.14,.7,e,{faces:Pe});for(let x of[-1,1])n.box(1.31,.32,x*.42,.03,.1,.2,16774064,{faces:Pe}),n.box(-1.31,.32,x*.42,.03,.1,.2,16731486,{faces:We});n.box(1.36,.1,0,.12,.12,1.26,2763832);for(let x=0;x<2;x++)n.box(1.43,.22,(x-.5)*.6,.04,.3,.06,2763832);n.box(-1.33,.12,0,.08,.1,1.24,s);for(let x of[-.8,.8])for(let g of[-.56,.56])n.box(x,0,g,.48,.48,.2,1316382,{faces:63}),n.box(x,.12,g+Math.sign(g)*.105,.24,.24,.01,s,{faces:g>0?lt:jt});n.box(-.1,.98,0,.5,.06,.9,2763832);let a=new dt(n.build(),new we({vertexColors:!0,emissive:1315872})),r=new zt;r.add(a);let l=document.createElement("canvas");l.width=128,l.height=32;let o=l.getContext("2d");o.fillStyle="#f4f6f8",o.fillRect(0,0,128,32),o.fillStyle="#1c1e28",o.font="bold 24px Arial Black, Arial, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("POLICE",64,17);let h=new li(l);h.colorSpace=Me;let c=new At({map:h});for(let x of[-1,1]){let g=new dt(new je(.8,.2),c);g.position.set(.1,.48,x*.618),x<0&&(g.rotation.y=Math.PI),r.add(g)}let u=new dt(new ce(.4,.12,.4),new At({color:16722490})),f=new dt(new ce(.4,.12,.4),new At({color:2779903}));return u.position.set(-.1,1.07,.22),f.position.set(-.1,1.07,-.22),r.add(u,f),{group:r,red:u,blue:f}}function ku(n){let t=new kt,e=1,i=1.55,s=.16,a=(o,h,c,u,f,x,g={})=>t.box(n?o:0,h,n?0:o,n?c:f,u,n?f:c,x,g);a(0,0,e,i,s,8029334,{faces:63,top:5923956});for(let o of[-1,1])a(o*.46,0,.08,i,s+.02,5923956,{faces:63});a(0,i-.08,e,.08,s+.02,5923956,{faces:63});for(let o of[.55,1])a(0,o,.84,.05,s+.012,6976644,{faces:63});for(let o=0;o<6;o++)a(-.36+o*.144,.04,.072,.34,s+.006,o%2?2237487:15911244,{faces:63&~Yt&~ei});for(let o of[-1,1])for(let h of[.45,.6,.95,1.1,1.4])a(o*.46,h,.035,.035,s+.04,13226716,{faces:63});a(0,1.15,.26,.22,s+.03,3818066,{faces:63}),a(0,1.17,.18,.16,s+.036,10475775,{faces:63}),a(0,.78,.5,.12,s+.01,15911244,{faces:63});for(let o=0;o<6;o++)a(-.19+o*.076,.8,.05,.08,s+.016,2237487,{faces:63&~Yt&~ei});a(.3,.62,.16,.06,s+.03,13226716,{faces:63});let r=new zt;r.add(new dt(t.build(),new we({vertexColors:!0,emissive:1053724})));let l=new dt(new ce(n?.1:s+.05,.1,n?s+.05:.1),new At({color:16722490}));return l.position.set(n?-.3:0,.62,n?0:-.3),r.add(l),{group:r,led:l}}function Du(){let n=new kt;n.box(0,0,0,.74,.46,.05,9082020,{faces:63,top:10134708}),n.box(0,.05,.026,.62,.36,.01,1053208,{faces:16});for(let i=0;i<5;i++)n.box(0,.08+i*.07,.035,.62,.03,.03,11581636,{faces:63});for(let i of[-.33,.33])for(let s of[.03,.41])n.box(i,s,.03,.03,.03,.01,4870754,{faces:16});let t=new zt;t.add(new dt(n.build(),new we({vertexColors:!0})));let e=new zt;return e.add(t),{group:e,flap:t}}function Nu(){let n=new kt;n.box(0,0,0,.42,.56,.1,6976644,{faces:63,top:8029332}),n.box(0,.06,.051,.36,.44,.01,4870754,{faces:16}),n.box(0,.47,.056,.42,.07,.008,15911244,{faces:16});for(let a=0;a<5;a++)n.box(-.17+a*.085,.47,.061,.035,.07,.004,1842728,{faces:16,ry:0});n.box(-.08,.32,.06,.13,.13,.01,15911244,{faces:16}),n.box(-.08,.34,.065,.03,.08,.01,2237487,{faces:16}),n.box(-.07,.3,.065,.06,.02,.01,2237487,{faces:16});for(let a=0;a<3;a++)n.box(-.1+a*.1,.12,.065,.06,.12,.03,2237487,{faces:63});let t=new zt;t.add(new dt(n.build(),new we({vertexColors:!0})));let e=new zt,i=new kt;i.box(0,0,.04,.05,.2,.05,14168890,{faces:63}),i.box(0,.18,.04,.09,.06,.08,2237487,{faces:63}),e.add(new dt(i.build(),new we({vertexColors:!0}))),e.position.set(.12,.3,.06),t.add(e);let s=new dt(new ce(.05,.05,.02),new At({color:16722490}));return s.position.set(.12,.5,.06),t.add(s),{group:t,lever:e,led:s}}function Uu(n){let t=n.map(d=>d[0]),e=n.map(d=>d[1]),i=new Set(e).size===1,s=Math.min(...t),a=Math.max(...t)+1,r=Math.min(...e),l=Math.max(...e)+1,o=i?a-s:l-r,h=(s+a)/2,c=(r+l)/2,u=new kt,f=new kt;for(let d of[.25,.55,.85,1.15])u.box(h,d,c,i?o:.025,.025,i?.025:o,16724032,{faces:63});for(let d of[-1,1]){let p=i?h+d*(o/2-.05):h,v=i?c:c+d*(o/2-.05);f.box(p,0,v,.1,1.3,.1,3817294,{faces:63,top:16724032});for(let b of[.25,.55,.85,1.15])f.box(p,b-.02,v,.12,.06,.12,16736368,{faces:63})}let x=new At({color:16724032,transparent:!0,opacity:.9,depthWrite:!1,blending:Le,toneMapped:!1}),g=new dt(u.build(),x);g.renderOrder=6;let m=new zt;return m.add(g,new dt(f.build(),new we({vertexColors:!0}))),{group:m,mat:x,alongX:i,line:i?c:h,lo:i?s:r,hi:i?a:l}}function Ou(n){let t=new kt,e=9067068,i=ft(e,1.15),s=.98,a=.07,r=1.52,l=(h,c,u,f,x,g,m,d)=>n?t.box(h,c,u,f,x,g,m,d):t.box(u,c,h,g,x,f,m,d);l(s/2,0,0,s,r,a,e,{faces:63,top:ft(e,.8)});for(let h of[-1,1])for(let c of[.15,.85])l(s/2,c,h*.036,.62,.55,.01,i,{faces:n?h>0?16:32:h>0?1:2});for(let h of[-1,1])l(s-.14,.72,h*.05,.06,.06,.04,14267482,{faces:63}),l(s-.14,.62,h*.042,.05,.1,.02,3816006,{faces:63});let o=new zt;return o.add(new dt(t.build(),new we({vertexColors:!0}))),{group:o,led:null}}function Fu(){let n=new kt;n.box(0,-.14,0,.4,.27,.035,3111656,{faces:63,top:5937919}),n.box(-.1,-.1,0,.14,.16,.04,16777215,{faces:lt|jt}),n.box(-.1,-.06,0,.07,.07,.044,1578e4,{faces:lt|jt}),n.box(-.1,-.1,0,.1,.04,.044,2046602,{faces:lt|jt}),n.box(.09,-.02,0,.08,.06,.042,15911244,{faces:lt|jt}),n.box(.09,-.1,0,.14,.02,.042,16777215,{faces:lt|jt}),n.box(.09,-.07,0,.1,.015,.042,14214399,{faces:lt|jt}),n.box(0,-.13+.115,0,.4,.035,.04,1842728,{faces:63}),n.box(0,.14-.01,0,.06,.04,.04,13226716,{faces:63}),n.box(0,.17,0,.03,.07,.01,15216702,{faces:63});let t=new dt(n.build(),new At({vertexColors:!0})),e=new zt;e.add(t);let i=new dt(new je(1.7,1.7),new At({map:pi().glow,color:7319807,transparent:!0,opacity:.9,depthWrite:!1,blending:Le,fog:!1}));return i.rotation.x=-Math.PI/2,i.position.y=-.76,i.renderOrder=4,e.add(i),e.userData.halo=i,e}function zu(){let n=new kt;n.box(0,0,0,.32,.44,.06,15262422,{faces:63,top:16052714}),n.box(0,.36,.031,.32,.08,.01,14168126,{faces:lt});for(let i=0;i<4;i++)n.box(-.09+i*.06,.39,.037,.035,.022,.004,16777215,{faces:lt});n.box(0,.25,.031,.24,.09,.012,1319964,{faces:lt}),n.box(-.04,.265,.038,.12,.04,.004,5963658,{faces:lt});for(let i=0;i<4;i++)for(let s=0;s<3;s++){let a=i===0?s===0?16763210:s===2?4054148:10134704:10134704;n.box(-.07+s*.07,.02+i*.05,.035,.055,.04,.014,a,{faces:63,top:14212842})}let t=new zt;t.add(new dt(n.build(),new we({vertexColors:!0})));let e=new dt(new ce(.05,.05,.02),new At({color:4054148}));return e.position.set(.11,.25,.04),t.add(e),{group:t,led:e}}function Bu(){let n=new kt;for(let l=0;l<3;l++){let o=-.12+l*.075,h=(l-1)*.15;n.box(l*.015,o,0,.44,.07,.24,5221978,{top:9429130,faces:63,ry:h}),n.box(l*.015,o-.002,0,.09,.075,.245,15983520,{faces:63,ry:h})}let t=new kt;t.box(-.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(.13,-.13,0,.24,.12,.42,15246624,{top:16766810,faces:63}),t.box(0,-.01,0,.24,.12,.42,15773738,{top:16770688,faces:63});let e=new kt,i=new fa(.17,0);i.scale(1.15,1.2,1.15),e.add(i,5037311,0,.02,0),e.box(0,-.3,0,.34,.06,.34,6957642,{faces:63}),e.box(0,-.24,0,.26,.05,.26,15911244,{faces:63}),e.box(0,-.19,0,.12,.05,.12,15911244,{faces:63});let s=new kt,a=(l,o,h,c)=>s.box(l,o,0,h,c,.1,14262330,{faces:63,top:15909994});a(0,-.36,.78,.08),a(0,.34,.78,.08),a(-.35,-.3,.08,.66),a(.35,-.3,.08,.66);for(let[l,o]of[[-.35,-.36],[.35,-.36],[-.35,.34],[.35,.34]])s.box(l,o-.01,0,.11,.11,.12,12089892,{faces:63});let r=lt|jt;return s.box(0,-.28,0,.62,.62,.06,9357552,{faces:r}),s.box(0,.12,0,.62,.22,.062,12181754,{faces:r}),s.box(.17,.12,0,.12,.12,.066,16765503,{faces:r}),s.box(-.06,-.06,0,.3,.18,.064,8030888,{faces:r}),s.box(-.06,.08,0,.14,.08,.066,10136260,{faces:r}),s.box(-.06,.12,0,.08,.05,.068,16777215,{faces:r}),s.box(-.14,-.2,0,.36,.12,.068,5221978,{faces:r}),s.box(.14,-.18,0,.32,.1,.066,6078298,{faces:r}),s.box(0,-.28,0,.62,.1,.07,4165482,{faces:r}),s.box(.12,-.27,0,.2,.04,.072,5941472,{faces:r}),s.box(-.2,-.24,0,.04,.1,.074,8016438,{faces:r}),s.box(-.2,-.16,0,.1,.1,.076,3115583,{faces:r}),s.box(0,-.42,0,.18,.04,.11,15909994,{faces:63}),{cash:n.build(),gold:t.build(),jewel:e.build(),art:s.build()}}var jc={},ka=(n,t)=>{if(!jc[n]){let e=new kt;t(e),jc[n]=e.build()}return jc[n]},It=63,Kg={player:{skin:15910560,shirt:3123354,pants:3816789,shoe:2237487,belt:2566714,hat:15222847,vest:3123354},guard:{skin:15250826,shirt:8366041,pants:2765136,shoe:1777195,belt:1777195,hat:2042450,vest:2502735},clerk:{skin:14264186,shirt:16052714,pants:3422282,shoe:2760216,belt:2237487,hat:3811874,vest:3422282},owner:{skin:16041634,shirt:15896496,pants:15896496,shoe:16773365,belt:14249362,hat:9423088,vest:15896496}};function Qc(n,t,e){for(let s of[-.11,.11])n.box(s,.13,.222,.1,.09,.02,16777215,{faces:20}),n.box(s+.012,.135,.222+.01,.05,.065,.02,1842470,{faces:16}),n.box(s+.025,.165,.222+.02,.018,.018,.01,16777215,{faces:16}),n.box(s,.235,.222,.12,.03,.025,e==="owner"?9071194:3811874,{faces:It,ry:s>0?-.15:.15});n.box(0,.03,.222+.01,.07,.09,.05,ft(t.skin,.88),{faces:It});for(let s of[-.255,.255])n.box(s,.08,0,.03,.1,.08,ft(t.skin,.92),{faces:It})}function Zg(n,t){return ka(n+"head",e=>{if(e.box(0,-.06,0,.5,.48,.44,t.skin,{faces:It}),n==="player"){e.box(0,.07,0,.53,.15,.47,1447711,{faces:It});for(let i of[-.11,.11])e.box(i,.08,.236,.1,.09,.02,16777215,{faces:16}),e.box(i,.085,.247,.045,.055,.02,1447711,{faces:16});e.box(0,-.15,.225,.14,.035,.02,10115658,{faces:16}),e.box(0,.24,0,.55,.2,.49,t.hat,{faces:It}),e.box(0,.22,0,.56,.06,.5,ft(t.hat,.8),{faces:It&-5&-9}),e.box(0,.44,0,.14,.12,.14,16777215,{faces:It})}else if(n==="guard")Qc(e,t,n),e.box(0,-.1,.23,.24,.06,.04,5913126,{faces:It}),e.box(0,.2,0,.54,.16,.48,t.hat,{faces:It}),e.box(0,.35,-.02,.5,.06,.44,ft(t.hat,1.15),{faces:It}),e.box(0,.2,.29,.5,.04,.2,ft(t.hat,.8),{faces:It}),e.box(0,.26,.245,.11,.1,.02,15911244,{faces:16}),e.box(0,.282,.256,.05,.05,.01,15222847,{faces:16});else if(n==="clerk"){Qc(e,t,n),e.box(0,-.12,.225,.12,.03,.02,10115658,{faces:16}),e.box(0,.2,-.02,.53,.14,.47,t.hat,{faces:It}),e.box(-.18,.12,.2,.18,.08,.1,t.hat,{faces:It}),e.box(0,.13,.226,.4,.035,.015,2237487,{faces:16});for(let i of[-.11,.11])e.box(i,.13,.232,.13,.12,.01,2237487,{faces:16})}else Qc(e,t,n),e.box(0,-.12,.225,.12,.04,.02,12607594,{faces:16}),e.box(0,.18,0,.53,.14,.47,t.hat,{faces:It}),e.box(.06,.31,-.04,.34,.13,.32,t.hat,{faces:It}),e.box(.14,.42,-.1,.18,.1,.18,ft(t.hat,1.1),{faces:It}),e.box(.2,.47,-.14,.13,.13,.13,16777215,{faces:It}),e.box(0,.12,0,.535,.04,.475,16777215,{faces:It&-5&-9})})}function th(n){let t=Kg[n],e=new we({vertexColors:!0}),i=new zt,s=new zt;i.add(s);let a=[],r=(b,y,M=0,S=0,_=0)=>{let w=new dt(b,e);return w.position.set(M,S,_),y.add(w),a.push(w),w},l=ka(n+"leg",b=>{b.box(0,-.36,0,.18,.36,.21,t.pants,{faces:It}),b.box(0,-.37,.035,.2,.1,.29,t.shoe,{faces:It,top:ft(t.shoe,1.3)}),n==="owner"&&b.box(0,-.3,.06,.205,.04,.25,16777215,{faces:It}),n==="guard"&&b.box(0,-.12,0,.185,.02,.215,ft(t.pants,.8),{faces:It&-5&-9})}),o=ka(n+"torso",b=>{if(b.box(0,.34,0,.5,.45,.3,t.shirt,{faces:It}),n==="guard"){b.box(0,.4,0,.53,.38,.33,t.vest,{faces:It}),b.box(0,.56,.166,.1,.22,.01,t.shirt,{faces:16}),b.box(-.13,.6,.168,.11,.1,.02,15911244,{faces:It}),b.box(.14,.62,.168,.12,.04,.02,16777215,{faces:It}),b.box(.16,.48,.17,.08,.12,.05,2237487,{faces:It}),b.box(.18,.6,.18,.015,.08,.015,2237487,{faces:It}),b.box(0,.33,0,.55,.08,.35,1777195,{faces:It}),b.box(0,.33,.176,.08,.07,.01,12831958,{faces:16});for(let y of[-.2,.2])b.box(y,.3,.1,.09,.1,.1,2763574,{faces:It})}else if(n==="player")b.box(0,.33,0,.52,.08,.32,t.belt,{faces:It}),b.box(0,.42,.155,.3,.14,.02,ft(t.shirt,.8),{faces:16}),b.box(0,.72,-.12,.42,.14,.12,ft(t.shirt,.85),{faces:It});else if(n==="clerk"){b.box(0,.33,0,.52,.06,.32,t.belt,{faces:It}),b.box(0,.42,.156,.07,.34,.015,11745617,{faces:16}),b.box(0,.73,.156,.1,.05,.016,11745617,{faces:16}),b.box(-.13,.62,.157,.12,.06,.01,15911244,{faces:16});for(let y of[-1,1])b.box(y*.07,.72,.155,.1,.07,.015,16777215,{faces:16,ry:y*.3})}else{for(let y=0;y<4;y++)b.box(0,.38+y*.1,0,.51,.035,.31,16777215,{faces:It&-5&-9});for(let y=0;y<3;y++)b.box(0,.42+y*.11,.155,.04,.04,.02,16777215,{faces:16});b.box(0,.74,.14,.3,.06,.04,ft(t.shirt,.85),{faces:It})}}),h=b=>ka(n+"arm"+b,y=>{y.box(0,-.2,0,.15,.22,.17,t.shirt,{faces:It}),y.box(0,-.37,0,.14,.18,.16,n==="guard"?t.shirt:ft(t.shirt,.95),{faces:It}),y.box(0,-.48,0,.13,.11,.14,n==="player"?2763837:t.skin,{faces:It}),n==="guard"&&y.box(0,-.06,0,.16,.1,.18,t.vest,{faces:It}),n==="guard"&&b==="R"&&(y.box(0,-.66,.06,.07,.24,.07,2763574,{faces:It}),y.box(0,-.73,.06,.095,.08,.095,12831958,{faces:It}),y.box(0,-.735,.06,.07,.01,.07,16774860,{faces:8}))}),c=new zt;c.position.set(-.12,.36,0),s.add(c),r(l,c);let u=new zt;u.position.set(.12,.36,0),s.add(u),r(l,u),r(o,s);let f=new zt;f.position.set(-.33,.77,0),s.add(f),r(h("L"),f);let x=new zt;x.position.set(.33,.77,0),s.add(x),r(h("R"),x);let g=new zt;g.position.set(0,.84,0),s.add(g),r(Zg(n,t),g);let m=null,d=null;if(n==="player"&&(m=new zt,m.position.set(0,.66,-.16),s.add(m),r(ka("bag",b=>{b.box(0,-.25,-.18,.42,.44,.34,13213795,{faces:It}),b.box(0,.19,-.18,.14,.1,.14,10779973,{faces:It}),b.box(0,-.12,-.355,.16,.2,.01,8215856,{faces:32})}),m)),n==="guard"){let b=new Yn(.75,3.4,14,1,!0);b.translate(0,-1.7,0),d=new dt(b,new At({map:pi().beam,color:16770728,transparent:!0,opacity:.32,depthWrite:!1,blending:Le,side:Oe,fog:!1})),d.position.set(0,-.74,.06),d.renderOrder=6,x.add(d)}let p={player:.76,guard:.72,owner:.78,clerk:.74}[n],v={player:.88,guard:.8,owner:.86,clerk:.84}[n];return n!=="player"&&g.scale.set(.9/p,1,.92/v),d&&d.scale.set(1/p,1/v,1),{kind:n,root:i,body:s,legL:c,legR:u,armL:f,armR:x,head:g,bag:m,beam:d,mat:e,meshes:a,phase:0,sq:1,sqv:0,flash:0,wx:p,wz:v}}function jo(n,t,e,i){n.phase+=t*(5+9*e);let s=Math.sin(n.phase)*.8*e;n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armOverride||(n.armL.rotation.x=-s*.9,n.armR.rotation.x=n.beam?-1.35+Math.sin(n.phase*.5)*.06*e+Math.sin(i*1.3)*.03:s*.9),n.body.position.y=Math.abs(Math.sin(n.phase))*.07*e+(1-e)*Math.sin(i*2.2)*.012,n.body.rotation.z=Math.sin(n.phase)*.07*e,n.body.rotation.x=.07*e*e,n.head.rotation.y=n.beam?Math.sin(i*.9)*.15*(1-e):0,n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let a=Math.max(.5,n.sq),r=1/Math.sqrt(a);if(n.body.scale.set(r*n.wx,a,r*n.wz),n.flash>0){n.flash-=t;let l=Math.max(0,n.flash)*6;n.mat.emissive.setRGB(l,l,l)}}function Qo(n,t,e,i,s){if(!t.light)return;let a=Math.max(0,Math.min(t.W-1,Math.floor(e))),l=(Math.max(0,Math.min(t.H-1,Math.floor(i)))*t.W+a)*3,o=1-Math.exp(-6*s),h=1.55,c=n.mat.color;c.r+=(Math.max(.82,Math.min(1.5,t.light[l]*h))-c.r)*o,c.g+=(Math.max(.78,Math.min(1.5,t.light[l+1]*h))-c.g)*o,c.b+=(Math.max(.78,Math.min(1.5,t.light[l+2]*h))-c.b)*o}var Hi=(n,t)=>{n.sq=t,n.sqv=0};function Hu(){let n=new we({vertexColors:!0}),t=13208138,e=8014374,i=16181976,s=new zt,a=new zt;s.add(a);let r=(c,u,f=0,x=0,g=0)=>{let m=new kt;c(m);let d=new dt(m.build(),n);return d.position.set(f,x,g),u.add(d),d};r(c=>{c.box(0,.3,-.02,.32,.28,.66,t,{faces:It,top:ft(t,1.1)}),c.box(0,.3,.2,.28,.22,.2,i,{faces:It&-5}),c.box(0,.5,.26,.34,.06,.1,14168890,{faces:It}),c.box(0,.44,.32,.06,.07,.03,15911244,{faces:It}),c.box(0,.4,-.1,.33,.12,.3,e,{faces:7})},a);let l=new zt;l.position.set(0,.58,.34),a.add(l),r(c=>{c.box(0,-.12,0,.3,.26,.28,t,{faces:It}),c.box(0,-.12,.2,.17,.13,.16,i,{faces:It}),c.box(0,-.05,.285,.07,.05,.03,1842470,{faces:It}),c.box(0,-.165,.26,.1,.03,.06,15233146,{faces:It});for(let u of[-1,1])c.box(u*.08,-.01,.141,.06,.06,.02,1842470,{faces:16}),c.box(u*.09,0,.151,.02,.02,.01,16777215,{faces:16}),c.box(u*.17,-.12,-.02,.06,.22,.14,e,{faces:It})},l);let o=[];for(let[c,u]of[[-.1,.2],[.1,.2],[-.1,-.24],[.1,-.24]]){let f=new zt;f.position.set(c,.3,u),a.add(f),o.push(f),r(x=>{x.box(0,-.3,0,.09,.3,.1,t,{faces:It}),x.box(0,-.3,.015,.1,.05,.13,i,{faces:It})},f)}let h=new zt;return h.position.set(0,.42,-.34),a.add(h),r(c=>c.box(0,0,-.1,.06,.06,.22,t,{faces:It}),h),h.rotation.x=.7,a.scale.setScalar(1.1),{root:s,body:a,head:l,legs:o,tail:h,mat:n,phase:0,sq:1,sqv:0}}function Gu(n,t,e,i,s){n.phase+=t*(6+12*e);let a=Math.sin(n.phase)*.7*e;n.legs[0].rotation.x=a,n.legs[3].rotation.x=a,n.legs[1].rotation.x=-a,n.legs[2].rotation.x=-a,n.tail.rotation.y=Math.sin(i*(s?26:12))*(s?.4:.7),n.body.position.y=Math.abs(Math.sin(n.phase))*.05*e,n.body.rotation.x=Math.sin(n.phase*2)*.06*e,n.head.rotation.x=s?-.25+Math.sin(i*18)*.15:Math.sin(i*1.5)*.05+Math.sin(n.phase*2+1)*.08*e,n.head.rotation.z=s?0:Math.sin(i*.8)*.16*(1-e),n.sqv+=(1-n.sq)*260*t,n.sqv*=Math.exp(-11*t),n.sq+=n.sqv*t;let r=1.1*Math.max(.6,n.sq);n.body.scale.set(1.1/Math.sqrt(n.sq),r,1.1)}var ze=n=>n?"ok":"pending",Jg=[{id:"art",text:"Steal the painting",bonus:600,needs:n=>n.totals.art>0,check:n=>ze(n.got.art>0)},{id:"jewels",text:"Grab every jewel",bonus:700,needs:n=>n.totals.jewel>0,check:n=>ze(n.got.jewel>=n.totals.jewel)},{id:"gold",text:"Grab every gold bar",bonus:500,needs:n=>n.totals.gold>0,check:n=>ze(n.got.gold>=n.totals.gold)},{id:"cash",text:"Pocket all loose cash",bonus:500,check:n=>ze(n.got.cashLoose>=n.totals.cash)},{id:"hide",text:"Hide from an alerted guard",bonus:500,needs:n=>n.hides.length>0,check:n=>ze(n.hidFromAlert)},{id:"nodog",text:"Don't get barked at",bonus:600,needs:n=>n.dogs.length>0,check:(n,t)=>n.barkedAt?"fail":t?"ok":"pending"},{id:"disguise",text:"Wear a guard's uniform",bonus:500,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>ze(n.disguises>0)},{id:"tv",text:"Lure a guard with the TV",bonus:400,needs:n=>n.tvs.length>0,check:n=>ze(n.tvLures>0)},{id:"vent",text:"Crawl through an air vent",bonus:400,needs:n=>n.vents.length>0,check:n=>ze(n.ventsUsed>0)},{id:"nolaser",text:"Never trip a laser",bonus:600,needs:n=>n.lasers.length>0,check:(n,t)=>n.lasersTripped>0?"fail":t?"ok":"pending"},{id:"power",text:"Cut the power",bonus:500,needs:n=>!!n.breaker,check:n=>ze(n.powerOff)},{id:"clerk",text:"Stop a fleeing clerk",bonus:500,needs:n=>n.buttons.length>0,check:n=>ze(n.clerkStopped)},{id:"smoke",text:"Break a guard's sight with smoke",bonus:500,check:n=>ze(n.smokeHid)},{id:"cleanpick",text:"Pick a lock without a slip",bonus:500,needs:n=>n.doors.some(t=>t.type==="lock"),check:n=>ze(n.cleanPick)},{id:"cases",text:"Smash every display case",bonus:900,needs:n=>n.cases.length>0,check:n=>ze(n.casesSmashed>=n.cases.length)},{id:"radio",text:"Fake a radio check-in",bonus:500,check:n=>ze(n.radioFaked>0)},{id:"nospot",text:"Never step into a spotlight",bonus:700,needs:n=>n.spots.length>0,check:(n,t)=>n.spotHit?"fail":t?"ok":"pending"},{id:"slot",text:"Distract guards with a slot machine",bonus:500,needs:n=>n.slots.length>0,check:n=>ze(n.slotLures>0)},{id:"pocket2",text:"Pickpocket 2 guards",bonus:600,needs:n=>n.guards.some(t=>t.kind==="guard"),check:n=>ze(n.picks>=2)},{id:"camhit",text:"Knock out a camera with a coin",bonus:500,needs:n=>n.cams.length>0,check:n=>ze(n.camsHit>0)},{id:"stashrun",text:"Stash heavy loot before cracking the safe",bonus:500,needs:n=>n.totals.gold+n.totals.art>0,check:n=>ze(n.stashedEarly)},{id:"lure",text:"Lure a guard with a coin",bonus:400,check:n=>ze(n.lures>0)},{id:"ko2",text:"Knock out 2 guards",bonus:500,tag:"ko",check:n=>ze(n.kos>=2)},{id:"noko",text:"No knockouts",bonus:700,tag:"ko",check:(n,t)=>n.kos>0?"fail":t?"ok":"pending"},{id:"noalarm",text:"Never trigger the alarm",bonus:600,check:(n,t)=>n.alarms>0?"fail":t?"ok":"pending"},{id:"owner",text:"Don't wake the owner",bonus:500,needs:n=>n.guards.some(t=>t.kind==="owner"),check:(n,t)=>n.ownerWoke?"fail":t?"ok":"pending"},{id:"fast",text:"Escape in under 60s",bonus:800,check:(n,t)=>n.time>=60?"fail":t?"ok":"pending"},{id:"nodash",text:"Never dash",bonus:500,check:(n,t)=>n.dashes>0?"fail":t?"ok":"pending"}];function Vu(n=3,t=Math.random,e=null){let i=Jg.filter(a=>!e||!a.needs||a.needs(e)),s=[];for(;s.length<n&&i.length;){let a=i.splice(t()*i.length|0,1)[0];a.tag&&s.some(r=>r.tag===a.tag)||s.push({...a,st:"pending"})}return s}var is={easy:{label:"Easy",range:.82,speed:.85,susp:.7,coins:4,smoke:2,alarm:60,radio:3.6,mult:.75,safeAlarm:!1},normal:{label:"Normal",range:1,speed:1,susp:1,coins:3,smoke:1,alarm:45,radio:2.6,mult:1,safeAlarm:!0},ironman:{label:"Ironman",range:1.25,speed:1.2,susp:1.6,coins:1,smoke:0,alarm:15,radio:1.2,mult:2.5,safeAlarm:!0},hard:{label:"Hard",range:1.18,speed:1.15,susp:1.4,coins:2,smoke:1,alarm:30,radio:1.8,mult:1.5,safeAlarm:!0}},gi=(n,t)=>t==="normal"?n:n+"_"+t;var eh=.3,ih=3.7,Wu=11,Xu=.18,jg=.8,tl=1.02,Qg=3.2,Fs=20,Ua={cone:16769357,sus:16752412,alert:16726862},Da=new Re,el=new X,Pi={x:0,y:0},ns={x:0,y:0},il=(n,t,e)=>n+Ve(Ie(n,t),-e,e),Na=il,ty=new Rn(.36,12).rotateX(-Math.PI/2),ey=new At({color:0,transparent:!0,opacity:.22,depthWrite:!1}),qu=4.2;function Yu(){let n=new me,t=new Float32Array((Fs+2)*3),e=new Float32Array((Fs+2)*4);e.set([1,1,1,.3],0);for(let a=1;a<=Fs+1;a++)e.set([1,1,1,.05],a*4);let i=[];for(let a=1;a<=Fs;a++)i.push(0,a+1,a);n.setAttribute("position",new le(t,3)),n.setAttribute("color",new le(e,4)),n.setIndex(i);let s=new dt(n,new At({color:Ua.cone,vertexColors:!0,transparent:!0,depthWrite:!1,side:Oe}));return s.frustumCulled=!1,s.renderOrder=3,s}function iy(){let n=[0,0,.5,-.3,0,.12,.3,0,.12,-.11,0,.12,.11,0,.12,.11,0,-.3,-.11,0,-.3],t=new me;t.setAttribute("position",new le(new Float32Array(n),3)),t.setIndex([0,1,2,3,4,5,3,5,6]);let e=new dt(t,new At({color:16765503,side:Oe,transparent:!0,opacity:.95,depthWrite:!1}));return e.renderOrder=4,e}function ny(){let n=new zt,t=new ce(.13,.13,.13),e=new At({color:16765503});for(let i=0;i<3;i++){let s=new dt(t,e);n.add(s)}return n.visible=!1,n}var $u=n=>"$"+Math.round(n).toLocaleString("en-US"),Ku=new Set(["patrol","wait","post"]),sy=[["Quiet night, huh?","Too quiet."],["Did you hear something?","Just the pipes again."],["Coffee machine's broken again.","This job, I swear..."],["Who has the keycard?","Not me. Ask the boss."],["My feet are killing me.","Two more hours, buddy."],["You watch the game last night?","Don't remind me."],["They say this place is unrobbable.","Yeah, yeah."],["Saw a weird van outside earlier.","Probably the pizza guy."],["Remember the drill if the alarm goes?","Run toward it, right?"],["Is it just me or is it cold in here?","It's you."]],nl=class{constructor(t){this.app=t,this.root=new zt,t.scene.add(this.root),this.t=0,this.noiseRings=[]}load(t){let e=new Set([Ia&&this.lootMeshes?Object.values(this.lootMeshes).map(m=>m.material):[]].flat());this.root.traverse(m=>{m.geometry&&m.geometry.dispose();let d=Array.isArray(m.material)?m.material:m.material?[m.material]:[];for(let p of d)e.has(p)||(p.map&&!p.map.userData.keep&&p.map.dispose(),p.dispose())}),this.root.clear();for(let m of this.guards||[])m.badge.remove();this.def=t;let i=this.L=Su(t),s=Cu(i);this.root.add(s),this.worldMats=[],s.traverse(m=>{m.isMesh&&m.material&&m.material.vertexColors&&!m.material.blending&&this.worldMats.push(m.material)}),this.alarmTint=0,this.trainMats=s.userData.trainMats||null,this.clackT=0,this.sway=0,this.safe=Ru(),this.prev=null,this.safe.group.position.set(i.safe.x+.5,0,i.safe.y+.5),this.safeScale=t.safeScale||1,this.safe.group.scale.setScalar(this.safeScale);let a=(m,d)=>i.ch[d*i.W+m]==="#";if(this.doors=i.doors.map(m=>{let d=a(m.x-1,m.y)&&a(m.x+1,m.y),p=m.type==="lock"?Ou(d):ku(d);return m.type==="lock"?p.group.position.set(d?m.x+.01:m.x+.5,0,d?m.y+.5:m.y+.01):p.group.position.set(m.x+.5,0,m.y+.5),m.alongX=d,this.root.add(p.group),{...m,m:p,open:!1,t:0}}),this.lasers=(t.lasers||[]).map(m=>{let d=Uu(m.cells);return this.root.add(d.group),{def:m,...d,on:!0}}),this.breaker=null,t.breaker){let m=t.breaker,d=Nu();d.group.position.set(m.x+.5+m.dx*.53,.75,m.y+.5+m.dy*.53),d.group.rotation.y=Math.atan2(m.dx,m.dy),this.root.add(d.group),this.breaker={...d,at:{x:m.x+.5+m.dx*1.15,z:m.y+.5+m.dy*1.15}}}if(this.keyMeshes=i.keys.map(m=>{let d=Fu();return d.position.set(m.x+.5,.8,m.y+.5),this.root.add(d),{...m,m:d}}),this.root.add(this.safe.group),this.police=Iu(),this.police.group.visible=!1,this.root.add(this.police.group),this.panel=null,t.panel){let m=t.panel;this.panel=zu(),this.panel.group.position.set(m.x+.5+m.dx*.53,.85,m.y+.5+m.dy*.53),this.panel.group.rotation.y=Math.atan2(m.dx,m.dy),this.panel.at={x:m.x+.5+m.dx*1.1,z:m.y+.5+m.dy*1.1},this.root.add(this.panel.group)}this.vents=[];for(let m of t.vents||[]){let d=[m.a,m.b].map(([p,v,b,y])=>{let M=Du();return M.group.position.set(p+.5+b*.47,.06,v+.5+y*.47),M.group.rotation.y=Math.atan2(-b,-y),this.root.add(M.group),{...M,cx:p+.5,cz:v+.5,gx:p+.5+b*.5,gz:v+.5+y*.5,out:Math.atan2(-b,-y)}});d[0].other=d[1],d[1].other=d[0],this.vents.push(...d)}this.tvs=i.furn.filter(m=>m.type==="tv").map(m=>{let d=Au(i,m),p=Math.atan2(-d[0],-d[1]),v=d[0]?m.d:m.w,b=d[0]?m.w:m.d,y=m.x0+m.w/2,M=m.y0+m.d/2,S=new dt(new je(v-.52,.8),new At({color:10473727,toneMapped:!1}));S.position.set(y+d[0]*.15,1.07,M+d[1]*.15),S.rotation.y=p;let _=new dt(new je(3.2,2.2),new At({map:pi().glow,color:7317759,transparent:!0,opacity:.5,depthWrite:!1,blending:Le,fog:!1}));return _.position.set(y-d[0]*.7,.03,M-d[1]*.7),_.rotation.x=-Math.PI/2,S.visible=_.visible=!1,this.root.add(S,_),{scr:S,glow:_,cx:y,cz:M,fx:y-d[0]*(b/2+.9),fz:M-d[1]*(b/2+.9),on:!1,used:!1,t:0,flick:0,babble:0}}),this.heli=t.heli?Lu():null;{let m=i.W,d=new Int32Array(i.W*i.H).fill(-1),p=[i.start.y*m+i.start.x];d[p[0]]=0;let v=F=>i.walk[F]||i.doors.some(A=>A.y*m+A.x===F),b=p[0];for(let F=0;F<p.length;F++){let A=p[F],C=A%m,B=A/m|0;for(let[N,U]of[[1,0],[-1,0],[0,1],[0,-1]]){let G=C+N,W=B+U,K=W*m+G;G<0||W<0||G>=m||W>=i.H||d[K]>=0||!v(K)||(d[K]=d[A]+1,p.push(K),!i.outdoor[K]&&i.walk[K]&&!i.loot.some(Z=>Z.y*m+Z.x===K)&&d[K]>d[b]&&(b=K))}}let y=b%m+.5,M=(b/m|0)+.5,S=15769626,_=12087306,w=new kt;w.box(0,0,0,.24,.05,.2,10100538,{faces:63}),w.box(0,.05,0,.18,.16,.14,S,{faces:63,top:16762954}),w.box(0,.2,.01,.16,.13,.13,S,{faces:63,top:16762954});for(let F of[-1,1])w.box(F*.055,.33,.01,.04,.05,.04,_,{faces:63});w.box(.11,.22,.02,.05,.13,.05,S,{faces:63});for(let F of[-1,1])w.box(F*.035,.27,.076,.02,.02,.01,1839920,{faces:16});w.box(0,.12,.072,.07,.06,.01,15216702,{faces:16}),w.box(0,.11,.078,.03,.03,.01,16773568,{faces:16});let D=new dt(w.build(),Ia());D.position.set(y,.02,M),D.scale.setScalar(1.6),this.root.add(D);let L=0,I=-1;for(let[F,A]of[[0,1],[0,-1],[1,0],[-1,0]]){let C=0;for(let B=1;B<4&&this.walkable(Math.floor(y+F*B),Math.floor(M+A*B));B++)C++;C>I&&(I=C,L=Math.atan2(F,A))}this.secret={mesh:D,x:y,z:M,face:L}}{let m=new kt;m.box(0,0,0,.56,.4,.16,15773738,{faces:63,top:16766810}),m.box(0,.19,0,.58,.03,.17,13141530,{faces:63}),m.box(0,.4,0,.2,.05,.06,3810328,{faces:63});for(let b of[-1,1])m.box(b*.09,.36,0,.04,.06,.06,3810328,{faces:63});for(let b of[-1,1])m.box(b*.17,.27,.081,.07,.06,.02,14212842,{faces:63});m.box(0,.1,.082,.14,.1,.01,16773568,{faces:16});let p=new zt;p.add(new dt(m.build(),Ia()));let v=new dt(new je(2.2,2.2),new At({map:pi().glow,color:16761402,transparent:!0,opacity:.9,depthWrite:!1,blending:Le,fog:!1}));v.rotation.x=-Math.PI/2,v.position.y=-.6,v.renderOrder=4,p.add(v),p.visible=!1,this.root.add(p),this.briefcase={group:p,halo:v}}this.heli&&this.root.add(this.heli.group),this.van=Pu(),this.root.add(this.van.group);let r=Bu(),l=Ia();this.lootMeshes={};let o={cash:t.values.bundles,gold:0,jewel:0,art:0};for(let m of i.loot)o[m.type]++;for(let m in r){let d=new En(r[m],l,Math.max(1,o[m]));d.frustumCulled=!1,d.count=0,this.lootMeshes[m]=d,this.root.add(d)}let h=th("player");h.root.rotation.order="YXZ",this.root.add(h.root),this.player={c:h,shadow:this.addShadow()},this.guards=[];let c=(m,d)=>{let p=th(m);p.root.rotation.order="YXZ",this.root.add(p.root);let v=Yu();this.root.add(v);let b=ny();this.root.add(b);let y=document.createElement("div");y.className="badge",y.innerHTML="<i></i><b></b>",this.app.els.fxl.appendChild(y);let M={kind:m,def:d,c:p,cone:v,stars:b,badge:y,shadow:this.addShadow()};return m==="guard"&&(M.walletMesh=new dt(new ce(.13,.09,.035),new At({color:6962978})),M.walletMesh.position.set(.12,.34,-.17),M.keyMesh=new dt(new ce(.1,.07,.02),new At({color:3111656})),M.keyMesh.position.set(-.13,.36,-.17),p.body.add(M.walletMesh,M.keyMesh)),this.guards.push(M),M};for(let m of t.guards)c("guard",m);this.buttons=[];for(let m of t.clerks||[]){let d=c("clerk",m),p=m.button,v=new dt(new ce(.2,.26,.06),new At({color:14212582})),b=new dt(new ce(.11,.11,.05),new At({color:16722490}));b.position.z=.04,v.add(b),v.position.set(p.x+.5+p.dx*.53,1.05,p.y+.5+p.dy*.53),v.rotation.y=Math.atan2(-p.dx,-p.dy),this.root.add(v),d.button={x:p.x+.5+p.dx*.15,z:p.y+.5+p.dy*.15,btn:b},this.buttons.push(d.button)}if(t.owner){let m=t.owner;c("owner",{path:m.patrol,wait:1.2,speed:m.speed,loop:!0,owner:m})}{let m=i.W,d=new Uint8Array(m*i.H),p=[i.start.y*m+i.start.x];for(d[p[0]]=1,this.entrance={x:i.start.x,y:i.start.y};p.length;){let v=p.shift(),b=v%m,y=v/m|0;if(!i.outdoor[v]&&i.walk[v]){this.entrance={x:b,y};break}for(let[M,S]of[[0,-1],[1,0],[-1,0],[0,1]]){let _=(y+S)*m+b+M;b+M>=0&&y+S>=0&&b+M<m&&y+S<i.H&&!d[_]&&i.walk[_]&&(d[_]=1,p.push(_))}}this.reserve=[];for(let v=0;v<2;v++){let b=this.entrance,y=c("guard",{roam:[1,1,i.W-2,i.H-2],path:[[b.x,b.y],[b.x,b.y]],wait:1.3,speed:1.7,reinforce:!0});this.guards.pop(),this.reserve.push(y)}}this.dogs=(t.dogs||[]).map(m=>{let d=Hu();this.root.add(d.root);let p=null;return m.handler!=null&&(p=new dt(new ce(.022,.022,1),new At({color:13119534})),this.root.add(p)),{def:m,m:d,leash:p,shadow:this.addShadow()}}),this.cams=(t.cameras||[]).map(m=>{let d=Yu();this.root.add(d);let p=new zt,v=new kt;v.box(0,.36,0,.26,.04,.26,14672872,{faces:63}),v.box(0,-.06,0,.05,.42,.05,10134446,{faces:63}),p.add(new dt(v.build(),new we({vertexColors:!0}))),p.position.set(m.pos[0],Ae-.4,m.pos[1]),this.root.add(p);let b=new kt;b.box(0,-.06,-.04,.2,.15,.36,15922422,{faces:63,top:16777215}),b.box(0,.09,0,.24,.025,.44,2763574,{faces:63}),b.box(0,-.075,.15,.15,.13,.03,2763574,{faces:63}),b.box(0,-.06,-.06,.04,.12,.04,10134446,{faces:63});let y=new dt(b.build(),new we({vertexColors:!0})),M=new dt(new ce(.09,.08,.03),new At({color:16726862}));M.position.set(0,-.075,.17),y.add(M);let S=new dt(new ce(.05,.045,.012),new At({color:16777215,transparent:!0,opacity:.45}));return S.position.set(-.015,-.06,.188),y.add(S),y.position.set(m.pos[0],Ae-.56,m.pos[1]),this.root.add(y),{def:m,cone:d,mesh:y,lens:M}}),this.exitRing=new dt(new Cs(.62,.9,28).rotateX(-Math.PI/2),new At({color:4054148,transparent:!0,opacity:.95,depthWrite:!1})),this.exitBeam=new dt(new mi(.85,.85,2.4,20,1,!0),new At({color:4054148,transparent:!0,opacity:.2,depthWrite:!1,side:Oe})),this.exitRing.position.set(i.exit.x,.03,i.exit.z),this.exitBeam.position.set(i.exit.x,1.2,i.exit.z),this.root.add(this.exitRing,this.exitBeam);let u=new mi(.065,.065,.022,14);u.rotateX(Math.PI/2);let f=new mi(.045,.045,.026,12);f.rotateX(Math.PI/2),this.coinMeshes=[];for(let m=0;m<6;m++){let d=new dt(u,new At({color:15246624}));d.add(new dt(f,new At({color:16766810}))),d.visible=!1,this.root.add(d),this.coinMeshes.push(d)}this.hides=i.furn.filter(m=>m.type==="wardrobe").map(m=>{let d=m.x0+.5,p=m.y0+.5;for(let[v,b]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.walkable(m.x0+v,m.y0+b))return{cx:d,cz:p,ex:d+v*.95,ez:p+b*.95,face:Math.atan2(v,b)};return null}).filter(Boolean),this.smokeFx=[];for(let m=0;m<2;m++){let p=new me;p.setAttribute("position",new le(new Float32Array(138),3));let v=new Ji(p,new Ui({map:pi().glow,size:1.5,color:14275810,transparent:!0,opacity:0,depthWrite:!1}));v.frustumCulled=!1,v.renderOrder=8,v.visible=!1;let b=new Float32Array(184);for(let y=0;y<46;y++){let M=Math.random()*6.28,S=Math.sqrt(Math.random());b.set([Math.cos(M)*S,Math.random(),Math.sin(M)*S,Math.random()*6.28],y*4)}this.root.add(v),this.smokeFx.push({pts:v,geo:p,off:b,N:46})}this.arrow=iy(),this.root.add(this.arrow),this.noiseRings=[];let x=new Cs(.9,1,32).rotateX(-Math.PI/2);for(let m=0;m<4;m++){let d=new dt(x,new At({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));d.visible=!1,d.renderOrder=4,this.root.add(d),this.noiseRings.push({m:d,t:1,r:1})}let g=t.values;this.cases=i.furn.filter(m=>m.type==="case").map(m=>{let d=m.x0+m.w/2,p=m.y0+m.d/2,v=new dt(new ce(m.w-.12,.46,m.d-.12),new At({color:12576511,transparent:!0,opacity:.28,depthWrite:!1}));v.position.set(d,1.05,p),v.renderOrder=5;let b=new zt,y=[5037311,16732026,8191898,16766810,13073919];for(let M=0;M<5;M++){let S=new dt(new ce(.09,.09,.09),new At({color:y[(M+m.x0)%5]}));S.position.set(d+(M%3-1)*(m.w*.25),.88,p+((M/3|0)-.5)*(m.d*.3)),S.rotation.set(.6,M,.6),b.add(S)}return this.root.add(v,b),{f:m,cx:d,cz:p,glass:v,gems:b,smashed:!1,prog:0}}),this.caseLoot=t.caseLoot||0,this.slots=i.furn.filter(m=>m.type==="slots").map(m=>{let d=m.x0+m.w/2,p=m.y0+m.d/2,v=m.y0<i.H/2?1:-1,b=new dt(new ce(m.w-.2,.08,.08),new At({color:16766810,toneMapped:!1}));return b.position.set(d,1.66,p+v*.22),b.visible=!1,this.root.add(b),{f:m,cx:d,cz:p,face:v,top:b,used:!1,prog:0,t:0}}),this.spots=(t.spots||[]).map(m=>{let d=new dt(new Rn(m.r,28).rotateX(-Math.PI/2),new At({map:pi().glow,color:16773296,transparent:!0,opacity:.85,depthWrite:!1,blending:Le,toneMapped:!1}));d.renderOrder=4;let p=new dt(new Yn(m.r*.95,Ae,20,1,!0),new At({color:16773296,transparent:!0,opacity:.09,depthWrite:!1,blending:Le,side:Oe,toneMapped:!1}));p.rotation.x=Math.PI,p.renderOrder=5;let v=new dt(new ce(.3,.16,.3),new At({color:2763574})),b=new dt(new ce(.2,.02,.2),new At({color:16774864}));b.position.y=-.09,v.add(b),this.root.add(d,p,v);let[y,M]=m.path;return{def:m,pool:d,cone:p,fix:v,ax:y[0]+.5,az:y[1]+.5,bx:M[0]+.5,bz:M[1]+.5,len:Math.hypot(M[0]-y[0],M[1]-y[1]),susp:0,cool:0,x:0,z:0,tickT:0}}),this.policeLane=i.van?{x:i.exit.x,z:i.exit.z+2.5}:{x:i.start.x+.5,z:i.start.y+1.5},this.baseLootTotal=g.stash+g.bundle*g.bundles+i.loot.reduce((m,d)=>m+g[d.type],0)+this.cases.length*this.caseLoot*g.jewel+this.slots.length*g.cash,this.lootTotal=this.baseLootTotal,this.reset()}addShadow(){let t=new dt(ty,ey);return t.renderOrder=0,this.root.add(t),t}reset(){let t=this.L,e=this.def;this.state="play",this.time=0,this.lootGot=0,this.spotted=!1,this.kos=0,this.hasKey=!1,this.objText="",this.crackNoiseT=0;for(let a of this.buttons||[])a.btn.material.color.setHex(16722490);this.powerOff=!1,this.breakProg=0,this.lasersTripped=0,this.breaker&&(this.breaker.lever.rotation.x=0,this.breaker.led.material.color.setHex(16722490));for(let a of this.lasers||[])a.group.visible=!0;this.spotHit=!1;for(let a of this.spots||[])a.susp=0,a.cool=0,a.pool.visible=a.cone.visible=!0;for(let a of this.doors||[]){let r=a.y*this.L.W+a.x;a.open=!1,a.t=0,this.L.walk[r]=0,this.L.opaque[r]=1,a.m.group.position.y=0,a.m.group.rotation.y=0,a.m.group.visible=!0,a.m.led&&a.m.led.material.color.setHex(16722490),this.picking=null,this.cleanPick=!1,this.app.onPick&&this.app.onPick(null)}for(let a of this.keyMeshes||[])a.m.visible=!0;this.app.onKey&&this.app.onKey(!1),this.hasStash=!1,this.safeOpen=!1,this.safeProg=0,this.safeTick=0,this.doorT=0,this.combo=0,this.comboT=0,this.revived=!1,this.endT=0,this.hitstop=0,this.nopeT=0,this.tension=0,this.catcher=null,this.fovKick=0,this.cineInit=!1,this.slowT=0,this.fovPunch=0,this.kickP=0,this.kickR=0,this.daily=this.app.mode==="daily"?this.app.daily:null,this.tut=this.app.mode==="tutorial",this.D=this.tut?{...is.easy,label:"Normal",mult:1,susp:.5,coins:5,smoke:2,safeAlarm:!1}:this.daily?is.normal:is[this.app.diff]||is.normal,this.tutCheck=null,this.tutAt=null,this.tutRetries=0,this.lookTotal=0,this.lootTotal=this.baseLootTotal,this.gear=this.app.gearMods?this.app.gearMods(!this.tut&&!this.daily&&this.D.label!=="Ironman"):{coins:0,smoke:0,sneak:1,pickW:1,crack:1,disguise:0},this.smokesLeft=this.D.smoke+this.gear.smoke,this.clouds=[],this.smokeHid=!1;for(let a of this.smokeFx||[])a.pts.visible=!1;this.coinsLeft=this.D.coins+this.gear.coins,this.coins=[],this.lures=0,this.revives=0,this.hidFromAlert=!1,this.clerkStopped=!1,this.hidesUsed=0,this.smokesUsed=0,this.coinsThrown=0,this.radioFaked=0,this.trail=[],this.trailT=0,this.marks=[],this.heavy=[],this.stashRuns=0,this.stashedEarly=!1,this.app.onWeight&&this.app.onWeight(1),this.got={cash:0,cashLoose:0,gold:0,jewel:0,art:0},this.ownerWoke=!1,this.dashes=0,this.totals={cash:0,gold:0,jewel:0,art:0};for(let a of this.L.loot)this.totals[a.type]++;this.contracts=this.tut?[]:Vu(3,this.daily?Ri(this.daily.seed):Math.random,this),this.alarm=!1,this.alarmT=0,this.alarmTotal=this.D.alarm,this.disarmProg=0,this.alarms=0,this.policeBusted=!1,this.police&&(this.police.group.visible=!1),this.app.onAlarm&&this.app.onAlarm(!1);for(let a of this.coinMeshes||[])a.visible=!1;let i=this.player;Object.assign(i,{x:t.start.x+.5,z:t.start.y+.5,okX:void 0,okZ:void 0,vx:0,vz:0,face:Math.PI,dashT:0,dashCd:0,ddx:0,ddz:0,inv:0,stepAcc:0,bagS:.5,bagV:0,punchT:0,hidden:!1,y:0,moving:0,hiding:null,hideT:0,beatT:0,crouch:!1,crouchK:0,yaw:0,pitch:-.05,roll:0,bob:0,strafe:0,lookX:0,lookY:0,grabT:0,crack:!1}),i.c.root.visible=!0,i.c.root.rotation.set(0,Math.PI,0),this.app.onHide&&this.app.onHide(!1);for(let a of this.guards||[])a.knowsHide=!1;Hi(i.c,1);for(let a of this.reserve||[]){let r=this.guards.indexOf(a);r>=0&&this.guards.splice(r,1),a.c.root.visible=!1,a.cone.visible=!1,a.shadow.visible=!1,a.stars.visible=!1,a.badge.className="badge"}this.shiftN=0,this.shiftWarn=0,this.chatT=6+Math.random()*6,this.chatQ=null,this.chatI=Math.floor(Math.random()*20),this.boltT=8+Math.random()*8,this.thunderIn=0,this.thunderT=0,this.heli&&(this.heli.group.visible=!1),this.secret&&(this.secret.got=!1,this.secret.mesh.visible=!(this.app.save.cats||{})[this.def.id]&&this.app.mode!=="tutorial"),this.brief=null,this.briefsGot=0,this.app.onBrief&&this.app.onBrief(0),this.briefcase&&(this.briefcase.group.visible=!1),this.briefAt=this.app.mode==="classic"&&Math.random()<.55?18+Math.random()*30:1/0;for(let a of this.vents||[])a.flap.rotation.x=0;for(let a of this.tvs||[])a.on=a.used=!1,a.scr.visible=a.glow.visible=!1;this.tvLures=0,this.photoFinish=!1,this.closeCalls=0,this.koStreak=0,this.maxKoStreak=0,this.lastKo=-99;for(let a of this.guards)a.peak=0;this.disguiseT=this.def.startDisguise&&!this.tut?this.def.startDisguise:0,this.disguises=0,this.uniformProg=0;for(let a of this.guards)a.stripped=!1;this.ventsUsed=0,this.player.venting=null;for(let a of this.guards)this.resetGuard(a);this.picks=0,this.pocketProg=0,this.koHold=0,this.koTarget=null;let s=!!(this.keyMeshes&&this.keyMeshes.length);for(let a of this.guards)a.wallet=a.kind==="guard"?150+(Math.random()*6|0)*50:0,a.spareKey=!1,s&&a.kind==="guard"&&a.def.path&&!a.def.roam&&(a.spareKey=!0,s=!1),a.walletMesh&&(a.walletMesh.visible=a.wallet>0,a.keyMesh.visible=a.spareKey),this.lootTotal+=a.wallet;this.crumbs=[],this.crumbT=0,this.barkedAt=!1;for(let a of this.dogs){let r=a.def.path[0];Object.assign(a,{x:r[0]+.5,z:r[1]+.5,wp:1%a.def.path.length,state:"roam",t:0,barkT:0,sniffT:0,ci:0,lostT:0,nav:[],navGoal:-1,navT:0,face:0,moving:0,tx:0,tz:0,waitT:0,smellT:0,mul:1});let l=a.def.handler!=null&&this.guards[a.def.handler];if(l){let o=this.heelSpot(a,l);a.x=o[0],a.z=o[1],a.face=l.face,a.state="heel"}}for(let a of this.cams)Object.assign(a,{susp:0,cool:0,face:a.def.face,off:0}),a.cone.visible=!0,a.mesh.rotation.x=0;this.camsHit=0,this.loot=t.loot.map((a,r)=>({type:a.type,x:a.x+.5,y:.45,z:a.y+.5,vx:0,vy:0,vz:0,st:"idle",t:0,value:e.values[a.type],ph:r*1.7,ms:0,s:1,rot:r})),this.safe.door.rotation.y=0,this.safe.dial&&(this.safe.dial.rotation.z=0),this.van.group.visible=!!t.van,t.van&&this.van.group.position.set(t.van.x+.5,0,t.van.y+1),this.casesSmashed=0,this.slotLures=0;for(let a of this.slots||[])a.used=!1,a.prog=0,a.t=0,a.top.visible=!1;for(let a of this.cases||[])a.smashed=!1,a.prog=0,a.glass.visible=!0,a.gems.visible=!0;this.van.group.rotation.set(0,0,0),this.van.vx=0,this.exitRing.visible=this.exitBeam.visible=!1;for(let a of this.noiseRings)a.m.visible=!1,a.t=1;if(this.app.particles.clear(),this.app.floaters.clear(),this.daily&&this.daily.mutator.apply(this),this.tut)for(let a of this.guards)a.range*=.85,a.speed*=.9}resetGuard(t){let e=t.def;if(Object.assign(t,{susp:0,lastX:0,lastZ:0,lostT:99,koT:0,t:0,wp:0,dir:1,nav:[],navGoal:-1,navT:0,tx:0,tz:0,hurry:0,baseFace:0,fallT:0,zz:.5,prevBadge:"",speed:(e.speed||1.8)*this.D.speed,range:(t.kind==="owner"?4.6:5.6)*this.D.range,fov:t.kind==="owner"?1.2:1.35,reviveT:null,sawSafe:!1,safeRun:!1,sawCase:!1,...t.kind==="clerk"?{range:4.6*this.D.range,fov:1.5}:{}}),t.c.root.rotation.set(0,0,0),t.c.root.position.y=0,t.stars.visible=!1,t.c.armOverride=!1,e.owner){let i=e.owner.bed;t.x=i[0]+i[2]/2,t.z=i[1]+1,t.face=0,t.state="sleep",t.c.root.rotation.x=-Math.PI/2,t.c.root.position.y=.62}else if(e.post)t.x=e.post[0]+.5,t.z=e.post[1]+.5,t.face=e.face,t.state="post";else{t.x=e.path[0][0]+.5,t.z=e.path[0][1]+.5,t.wp=1%e.path.length;let i=e.path[t.wp];t.face=Math.atan2(i[0]+.5-t.x,i[1]+.5-t.z),t.state="patrol"}}walkable(t,e){let i=this.L;return t>=0&&e>=0&&t<i.W&&e<i.H&&i.walk[e*i.W+t]===1}opaqueAt(t,e){let i=this.L;return t<0||e<0||t>=i.W||e>=i.H||i.opaque[e*i.W+t]===1}rayLen(t,e,i,s){let a=Math.sin(i),r=Math.cos(i);for(let l=.1;l<s;l+=.1)if(this.opaqueAt(Math.floor(t+a*l),Math.floor(e+r*l)))return l-.05;return s}los(t,e,i,s){let a=i-t,r=s-e,l=Math.ceil(Math.hypot(a,r)/.12);for(let o=1;o<l;o++){let h=o/l;if(this.opaqueAt(Math.floor(t+a*h),Math.floor(e+r*h)))return!1}return!0}clearLine(t,e,i,s){let a=i-t,r=s-e,l=Math.hypot(a,r);if(l<.01)return!0;let o=-r/l*.28,h=a/l*.28,c=Math.ceil(l/.25);for(let u=1;u<=c;u++){let f=u/c,x=t+a*f,g=e+r*f;if(!this.walkable(Math.floor(x),Math.floor(g))||!this.walkable(Math.floor(x+o),Math.floor(g+h))||!this.walkable(Math.floor(x-o),Math.floor(g-h)))return!1}return!0}collide(t,e){let i=Math.floor(t.x),s=Math.floor(t.z);for(let a=s-1;a<=s+1;a++)for(let r=i-1;r<=i+1;r++){if(this.walkable(r,a))continue;let l=Ve(t.x,r,r+1),o=Ve(t.z,a,a+1),h=t.x-l,c=t.z-o,u=h*h+c*c;if(!(u>=e*e))if(u>1e-9){let f=Math.sqrt(u);t.x+=h/f*(e-f),t.z+=c/f*(e-f)}else{let f=t.x-r,x=r+1-t.x,g=t.z-a,m=a+1-t.z,d=Math.min(f,x,g,m);d===f?t.x=r-e:d===x?t.x=r+1+e:d===g?t.z=a-e:t.z=a+1+e}}}moveEnt(t,e,i,s){let a=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(i))/.15));for(let r=0;r<a;r++)t.x+=e/a,t.z+=i/a,this.collide(t,s)}path(t,e,i,s){let{W:a,H:r,walk:l}=this.L,o=a*r;this.prev||(this.prev=new Int32Array(o),this.q=new Int32Array(o));let h=this.prev,c=this.q;if(i<0||s<0||i>=a||s>=r)return[];h.fill(-1);let u=e*a+t,f=s*a+i,x=0,g=0;for(c[g++]=u,h[u]=u;x<g;){let d=c[x++];if(d===f)break;let p=d%a,v=d/a|0;for(let b=-1;b<=1;b++)for(let y=-1;y<=1;y++){if(!y&&!b)continue;let M=p+y,S=v+b;if(M<0||S<0||M>=a||S>=r)continue;let _=S*a+M;!l[_]||h[_]!==-1||y&&b&&(!l[v*a+M]||!l[S*a+p])||(h[_]=d,c[g++]=_)}}if(h[f]===-1)return[];let m=[];for(let d=f;d!==u;d=h[d])m.push(d);return m.reverse()}navTo(t,e,i,s,a){let r=this.L.W,l=Math.floor(i)*r+Math.floor(e);(l!==t.navGoal||t.navT<=0)&&(t.nav=this.path(Math.floor(t.x),Math.floor(t.z),Math.floor(e),Math.floor(i)),t.navGoal=l,t.navT=.5),t.navT-=a;let o=t.nav,h=e,c=i;if(o.length>1){let d=Math.min(o.length-1,6),p=0;for(let v=d;v>=1;v--){let b=o[v]%r+.5,y=(o[v]/r|0)+.5;if(this.clearLine(t.x,t.z,v===o.length-1?e:b,v===o.length-1?i:y)){p=v;break}}p===o.length-1?(h=e,c=i):(h=o[p]%r+.5,c=(o[p]/r|0)+.5),p>0?o.splice(0,p):Math.hypot(h-t.x,c-t.z)<.3&&o.shift()}let u=h-t.x,f=c-t.z,x=Math.hypot(u,f);if(Math.hypot(e-t.x,i-t.z)<.12)return!0;let m=Math.min(x,s*a);return x>.001&&(this.moveEnt(t,u/x*m,f/x*m,.28),t.face=il(t.face,Math.atan2(u,f),8*a)),t.moving=1,!1}update(t,e){let i=t;this.trainMats&&this.updateTrain(t,e),this.hitstop>0?(this.hitstop-=t,i*=.08):this.slowT>0&&(this.slowT-=t,i*=this.slowK+(1-this.slowK)*Ve(1-this.slowT/.15,0,1)),this.fovPunch=Te(this.fovPunch||0,0,6,t),this.kickP=Te(this.kickP||0,0,9,t),this.kickR=Te(this.kickR||0,0,7,t),this.t+=i;let s=!e&&this.state==="play";if(s){this.time+=i,this.updatePlayer(i);let l=this.app.mode==="tutorial"||this.daily||this.D.label==="Easy"||this.def.noShift?[]:this.D.mult>=1.5?[45,90]:[60,120];this.shiftWarn===this.shiftN&&this.shiftN<l.length&&this.time>=l[this.shiftN]-10&&(this.shiftWarn++,this.app.audio.play("radio"),this.app.announce('\u{1F4FB} "Relief guard arriving in 10 seconds" \u2014 grab what you can!')),this.def.rain&&this.updateStorm(t),this.disguiseT>0&&(this.disguiseT-=i,this.app.onDisguise(Math.max(0,this.disguiseT)),this.disguiseT<=0&&(this.app.audio.play("lost"),this.app.floaters.spawn("Disguise worn off",this.player.x,1.6,this.player.z,"warn",1.2))),this.tvs.length&&this.updateTVs(i),this.updateBriefcase(i);let o=this.secret;if(o&&o.mesh.visible&&(o.mesh.rotation.y=o.face+Math.sin(this.t*1.5)*.4,Math.random()<i*2&&this.app.particles.burst(o.x,.45,o.z,{count:1,colors:[16770688,16777215],speed:.2,up:.4,size:.04,gravity:0,life:.6}),Math.hypot(this.player.x-o.x,this.player.z-o.z)<.8&&this.app.foundCat(o)),this.shiftN<l.length&&this.time>=l[this.shiftN]&&this.reserve[this.shiftN]&&this.callReinforcement(this.reserve[this.shiftN++]),this.trailT-=i,this.trailT<=0){this.trailT=.35;let h=this.alarm||this.guards.some(c=>c.state==="alert"||c.state==="flee"||c.susp>.35);this.trail.push([this.player.x,this.player.z,h?1:0]),this.trail.length>900&&this.trail.splice(0,2)}}else e&&!this.actorOn&&(this.player.c.root.visible=!1);let a=0;for(let l of this.guards)l.moving=0,this.updateGuard(l,i,s),(l.state==="alert"||l.state==="flee")&&a++,this.syncGuard(l,i);s&&this.updateChatter(i);for(let l of this.cams)this.updateCam(l,i,s);for(let l of this.dogs)this.updateDog(l,i,s);let r=0;for(let l of this.guards)(l.susp>.3||l.state==="investigate"||l.state==="search")&&r++;this.tension=this.alarm?3:a>0?2:r>0?1:0,this.updateAlarm(i,s),this.updateLasers(i,s),this.updateSpots(i,s),this.updateSlots(i),this.updateLoot(i,s),this.updateProps(i),e||this.syncPlayer(i),this.updateNoiseRings(i),this.updateCoins(i,s),this.updateSmoke(i),this.state==="escape"&&this.updateEscape(i),this.state==="caught"&&(this.endT+=t,this.endT>1.2&&!this.endSent&&(this.endSent=!0,this.app.onBusted()))}updatePlayer(t){let e=this.player,i=this.app,s=i.input;s.move(Pi),s.consumeLook(ns);let a=i.sens||.0024;e.lookX=ns.x,e.lookY=ns.y,e.yaw-=ns.x*a,this.lookTotal+=Math.abs(ns.x*a)+Math.abs(ns.y*a),e.pitch=Ve(e.pitch-ns.y*a*(i.invertY?-1:1),-1.25,1.2),e.face=e.yaw+Math.PI;let r=s.consumeAtk();if(e.hiding){this.updateHiding(t,s);return}if(e.venting){this.updateVent(t,s);return}if(this.picking){this.updatePicking(t,s);return}let l=Math.sin(e.face),o=Math.cos(e.face),h=-o,c=l,u=h*Pi.x-l*Pi.y,f=c*Pi.x-o*Pi.y;e.strafe=Pi.x;let x=this.lootGot/this.lootTotal;s.consumeCrouch()&&(e.crouch=!e.crouch,i.onCrouch(e.crouch),i.hintDone("sneak")),e.dashT>0&&e.crouch&&(e.crouch=!1,i.onCrouch(!1)),e.crouchK=Te(e.crouchK||0,e.crouch?1:0,10,t);let g=ih*(1-.1*x)*(e.crouch?.5*this.gear.sneak:1)*this.weightMul();if(e.vx=Te(e.vx,u*g,14,t),e.vz=Te(e.vz,f*g,14,t),e.dashCd-=t,e.inv-=t,e.punchT-=t,s.consumeDash()&&e.dashCd<=0){let k=u,P=f;Math.abs(k)+Math.abs(P)<.01&&(k=l,P=o);let Q=Math.hypot(k,P);k/=Q,P/=Q,e.dashT=Xu,e.dashCd=jg,e.ddx=k,e.ddz=P,this.dashes++,this.lastDash=this.time,i.audio.play("dash"),i.shake.add(.18),Hi(e.c,.7),i.particles.puff(e.x,.1,e.z,{count:6,size:.34,speed:1.8,up:.7,life:.55}),this.makeNoise(e.x,e.z,4.2,null),i.hintDone("dash")}let m=e.vx,d=e.vz;if(e.dashT>0){e.dashT-=t;let k=Math.max(0,e.dashT/Xu);m+=e.ddx*Wu*k,d+=e.ddz*Wu*k,Math.random()<.6&&i.particles.puff(e.x,.12,e.z,{count:1,size:.24,speed:.4,up:.5,life:.45})}this.moveEnt(e,m*t,d*t,eh),this.crumbT-=t,this.crumbT<=0&&Math.hypot(e.vx,e.vz)>.5&&(this.crumbT=.4,this.crumbs.push({x:e.x,z:e.z,t:this.time}),this.crumbs.length>60&&this.crumbs.shift());for(let k of this.dogs){let P=e.x-k.x,Q=e.z-k.z,st=Math.hypot(P,Q);st<.5&&st>.001&&this.moveEnt(e,P/st*(.5-st),Q/st*(.5-st),eh)}for(let k of this.guards){if(k.state==="sleep")continue;let P=e.x-k.x,Q=e.z-k.z,st=Math.hypot(P,Q);st<.55&&st>.001&&this.moveEnt(e,P/st*(.55-st),Q/st*(.55-st),eh)}this.walkable(Math.floor(e.x),Math.floor(e.z))?(e.okX=e.x,e.okZ=e.z):e.okX!==void 0&&(e.x=e.okX,e.z=e.okZ,e.vx=e.vz=0);let p=Math.hypot(m,d);e.moving=Math.min(1,p/ih);let v=Math.floor(e.bob/Math.PI);if(e.bob+=Math.min(p,ih)*t*2.6,Math.floor(e.bob/Math.PI)!==v){let k=this.L,P=Ve(Math.floor(e.x),0,k.W-1),Q=Ve(Math.floor(e.z),0,k.H-1);i.audio.stepSound(k.floor[Q*k.W+P],e.dashT>0?1.6:e.crouch?.35:1)}p>.5&&i.hintDone("move");let b=this.L.safe.x+.5,y=this.L.safe.y+.5,M=!this.safeOpen&&Math.hypot(e.x-b,e.z-y)<1.45+(this.safeScale-1)*.8&&Math.abs(Ie(e.face,Math.atan2(b-e.x,y-e.z)))<1.1,S=null,_=9;for(let k of this.guards){if(!this.canKO(k))continue;let P=Math.hypot(e.x-k.x,e.z-k.z);if(!(e.dashT<=0&&Math.abs(Ie(e.face,Math.atan2(k.x-e.x,k.z-e.z)))>.9)&&(P<_&&(_=P,S=k),e.dashT>0&&P<.95)){this.knockout(k),S=null;break}}let w=s.consumeAct();e.crack=!1;for(let k of this.keyMeshes){if(!k.m.visible)continue;k.m.rotation.y=this.t*2,k.m.position.y=.8+Math.sin(this.t*3)*.06;let P=k.m.userData.halo;P&&(P.position.y=-.76-Math.sin(this.t*3)*.06,P.material.opacity=.75+Math.sin(this.t*4)*.25,P.rotation.z=-this.t*2),Math.hypot(e.x-(k.x+.5),e.z-(k.y+.5))<.85&&(k.m.visible=!1,this.hasKey=!0,i.audio.play("gold"),i.onKey(!0),i.hint("door"),i.floaters.spawn("KEYCARD!",k.x+.5,1.3,k.y+.5,"big",1.2),i.particles.burst(k.x+.5,.8,k.y+.5,{count:12,colors:[3111656,16777215,15911244],speed:2,up:2,size:.04,life:.6}),i.particles.flash(k.x+.5,.9,k.y+.5,7319807,1.6))}let D=null;for(let k of this.doors){if(k.open)continue;let P=k.x+.5,Q=k.y+.5;Math.hypot(e.x-P,e.z-Q)<1.5&&Math.abs(Ie(e.face,Math.atan2(P-e.x,Q-e.z)))<1&&(D=k)}let L=null;for(let k of this.slots){if(k.used)continue;let P=k.cz+k.face*.9;Math.abs(e.z-P)<.9&&Math.abs(e.x-k.cx)<k.f.w/2+.3&&(L=k)}for(let k of this.slots)k!==L&&(k.prog=Math.max(0,k.prog-t*2));L&&(i.hint("slot"),s.act&&(L.prog+=t/.5,e.crack=!0,L.prog>=1&&this.pullSlot(L)));let I=null;for(let k of this.cases){if(k.smashed)continue;Math.hypot(e.x-k.cx,e.z-k.cz)<1.3+Math.max(k.f.w,k.f.d)*.35&&Math.abs(Ie(e.face,Math.atan2(k.cx-e.x,k.cz-e.z)))<1&&(I=k)}for(let k of this.cases)k!==I&&(k.prog=Math.max(0,k.prog-t*2));I&&(i.hint("case"),s.act&&(I.prog+=t/.55,e.crack=!0,I.prog>=1&&this.smashCase(I)));let F=!1;if(this.breaker&&!this.powerOff){let k=this.breaker.at,P=this.breaker.group.position;F=Math.hypot(e.x-k.x,e.z-k.z)<1&&Math.abs(Ie(e.face,Math.atan2(P.x-e.x,P.z-e.z)))<1,F&&s.act?(this.breakProg+=t/1.2,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.15,i.audio.play("tick",this.breakProg*.5),i.particles.burst(P.x,P.y+.3,P.z,{count:2,colors:[16773544,8378623],speed:2,up:1.5,size:.03,life:.3})),this.breakProg>=1&&this.cutPower()):this.breakProg=Math.max(0,this.breakProg-t)}let A=!1,C=this.nearHide();if(this.alarm&&this.panel){let k=this.panel.at,P=this.panel.group.position;A=Math.hypot(e.x-k.x,e.z-k.z)<1&&Math.abs(Ie(e.face,Math.atan2(P.x-e.x,P.z-e.z)))<1,A&&s.act?(this.disarmProg+=t/1.3,e.crack=!0,this.safeTick-=t,this.safeTick<=0&&(this.safeTick=.13,i.audio.play("tick",this.disarmProg)),this.disarmProg>=1&&this.disarm()):this.disarmProg=Math.max(0,this.disarmProg-t)}M?(i.hint("safe"),s.act?(this.safeProg+=t*this.gear.crack/(this.def.crackTime||1.4),this.safe.dial&&(this.safe.dial.rotation.z=Math.sin(this.safeProg*9.4)*2.6+this.safeProg*3),this.def.crackNoise&&(this.crackNoiseT-=t,this.crackNoiseT<=0&&(this.crackNoiseT=1.1,this.makeNoise(b,y,this.def.crackNoise,null),i.hint("drill"))),this.safeTick-=t,e.crack=!0,this.safeTick<=0&&(this.safeTick=.11,i.audio.play("tick",this.safeProg),i.particles.burst(b,.7,y+.4,{count:1,colors:[16765503,16777215],speed:1.5,up:2,size:.06,life:.3})),this.safeProg>=1&&this.openSafe()):this.safeProg=Math.max(0,this.safeProg-t*.5)):this.safeProg=Math.max(0,this.safeProg-t);let B=S&&(S.wallet>0||S.spareKey);if(S&&!M?(i.hint(B?"pocket":"ko"),r?(this.knockout(S),this.pocketProg=0):s.act&&B?(this.koTarget!==S&&(this.koTarget=S,this.pocketProg=0),this.pocketProg+=t/.9,e.crack=!0,S.susp=Math.min(.9,S.susp+t*.12),this.pocketProg>=1&&(this.pickpocket(S),this.pocketProg=0)):this.pocketProg=0):(this.pocketProg=0,this.koTarget=null),r&&!(S&&!M)&&this.swing(),L&&!M&&!S){i.setPrompt("slot",L.prog),this.updateObjective();return}if(I&&!M&&!S){i.setPrompt("case",I.prog),this.updateObjective();return}let N=null;for(let k of this.guards){if(k.state!=="ko"||k.radioCall!==1){k.answerProg=0;continue}Math.hypot(e.x-k.x,e.z-k.z)<1.6&&(N=k)}if(N&&!M){s.act?(N.answerProg+=t/.7,e.crack=!0,N.answerProg>=1&&this.fakeCheckIn(N)):N.answerProg=Math.max(0,N.answerProg-t),i.setPrompt("radio",N.answerProg),this.updateObjective();return}let U=null;if(!M&&!S&&this.disguiseT<=0)for(let k of this.guards)k.kind==="guard"&&k.state==="ko"&&!k.stripped&&k.radioCall!==1&&Math.hypot(e.x-k.x,e.z-k.z)<1.5&&(U=k);if(U){s.act?(this.uniformProg+=t/1.1,e.crack=!0,this.uniformProg>=1&&(this.uniformProg=0,this.takeUniform(U))):this.uniformProg=Math.max(0,this.uniformProg-t*2),i.hint("uniform"),i.setPrompt("uniform",this.uniformProg),this.updateObjective();return}else this.uniformProg=0;if(D&&!M&&!S&&D.type==="lock"){i.hint("pick"),w?this.startPick(D):i.setPrompt("pick"),this.updateObjective();return}if(D&&!M&&!S){w&&(this.hasKey?this.openDoor(D):this.nopeT<=0&&(this.nopeT=1.5,i.audio.play("nope"),i.floaters.spawn("Need the keycard!",D.x+.5,1.3,D.y+.5,"warn",1.2),i.hint("key"))),i.setPrompt(this.hasKey?"door":"locked"),this.updateObjective();return}if(F&&!M&&!S){i.setPrompt("breaker",this.breakProg),this.updateObjective();return}let G=!A&&!M&&!S?this.nearTV():null;if(G)if(w){this.tvOn(G),this.updateObjective();return}else{i.setPrompt("tv"),this.updateObjective();return}let W=!A&&!M&&!S?this.nearVent():null;if(W){if(i.hint("vent"),w){this.enterVent(W);return}i.setPrompt("vent"),this.updateObjective();return}let K=C&&!A&&!M&&!S;if(K&&(i.hint("hide"),w)){this.enterHide(C);return}i.setPrompt(A?"panel":M?"safe":S?B?"pocket":"ko":K?"hide":"",A?this.disarmProg:S&&B?this.pocketProg:this.safeProg);let Z=this.L.exit,rt=Math.hypot(e.x-Z.x,e.z-Z.z);rt<2.4&&this.heavy.length&&this.stashHeavy(),this.nopeT-=t,rt<.95&&(this.hasStash?this.escape():this.nopeT<=0&&(this.nopeT=3,i.audio.play("nope"),i.floaters.spawn("Crack the safe first!",e.x+l*1.6,1.2,e.z+o*1.6,"warn",1.4))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),s.consumeThrow()&&this.throwCoin(),s.consumeSmoke()&&this.dropSmoke(),this.checkContracts(!1),this.updateObjective(),this.time>3.5&&i.hint("dash");for(let k of this.guards){let P=Math.hypot(e.x-k.x,e.z-k.z);k.state==="sleep"&&P<6&&i.hint("owner");for(let Q of this.dogs)Math.hypot(e.x-Q.x,e.z-Q.z)<7&&i.hint("dog");if(this.powerOff)k.state!=="sleep"&&P<6.5&&(i.hint("cone"),this.time>8&&i.hint("coin"),this.time>14&&i.hint("sneak"));else for(let Q of this.lasers){let st=Q.alongX?e.x:e.z,ct=Q.alongX?e.z:e.x;st>Q.lo-1&&st<Q.hi+1&&Math.abs(ct-Q.line)<3.5&&i.hint("laser")}}for(let k of this.loot)if(Math.hypot(e.x-k.x,e.z-k.z)<4){i.hint("loot");break}}canKO(t){if(t.state==="ko"||t.state==="sleep"||t.state==="waking"||t.state==="getup")return!1;let e=this.player,i=e.x-t.x,s=e.z-t.z;return Math.hypot(i,s)>1.35||Math.abs(Ie(t.face,Math.atan2(i,s)))<1.75?!1:this.los(t.x,t.z,e.x,e.z)}juice(t,e,i,s,a){t>0&&(!this.slowT||this.slowT<t)&&(this.slowT=t,this.slowK=e);let r=this.app.shake.scale??1;this.fovPunch=(this.fovPunch||0)+i*r,this.kickP=(this.kickP||0)+s*r,this.kickR=(this.kickR||0)+a*r}mark(t,e,i){this.marks.push({t,x:e,z:i})}actor(t,e,i,s,a,r,l){let o=this.player.c;this.actorOn=!0,o.root.visible=!0,o.root.position.set(e,0,i),o.root.rotation.set(0,s,0),o.root.scale.set(1,r?.72:1,1),o.armOverride=l!=null,jo(o,t,a,this.t),l!=null&&(o.armR.rotation.x=-2.9+l*2.4,o.armL.rotation.x=-.3)}actorOff(){let t=this.player.c;this.actorOn=!1,t.armOverride=!1,t.root.scale.set(1,1,1),t.root.visible=!1}swing(){let t=this.player,e=this.app;if(!(t.punchT>.05)){t.punchT=.28,e.audio.play("swing"),e.shake.add(.05),this.swings=(this.swings||0)+1;for(let i of this.guards){if(i.state==="ko"||i.state==="sleep"||i.state==="getup")continue;if(Math.hypot(i.x-t.x,i.z-t.z)<1.35&&Math.abs(Ie(t.face,Math.atan2(i.x-t.x,i.z-t.z)))<.8){e.floaters.spawn("Hit from BEHIND!",i.x,1.9,i.z,"warn",1.1),e.hint("ko");break}}}}knockout(t){this.mark("ko",t.x,t.z);let e=this.app,i=this.player;t.reviveT&&(t.reviveT.claimed=!1,t.reviveT=null),t.safeRun=!1,t.claimed=!1,t.kind==="clerk"&&t.state==="flee"&&(this.clerkStopped=!0,this.app.floaters.spawn("ALARM STOPPED",t.x,2.2,t.z,"big",1.2)),t.state="ko",t.koT=this.tut?90:9,t.susp=0,t.fallT=0,t.radioCall=0,t.answerProg=0,t.callT=0,this.koStreak=this.time-(this.lastKo??-99)<8?(this.koStreak||1)+1:1,this.lastKo=this.time,this.maxKoStreak=Math.max(this.maxKoStreak||0,this.koStreak),this.koStreak>=2&&(e.floaters.spawn(["","","DOUBLE TAKEDOWN!","TRIPLE TAKEDOWN!"][this.koStreak]||"UNSTOPPABLE!",t.x,2.3,t.z,"big",1.3),e.audio.play("combo",this.koStreak*3),e.shake.add(.2)),t.c.flash=.2,Hi(t.c,.6),this.kos++,this.hitstop=.08,this.juice(.38,.3,-9,-.05,(Math.random()<.5?-1:1)*.07),e.shake.add(.35),i.punchT=.28,Hi(i.c,1.25),e.audio.play("swing"),e.audio.play("ko"),e.particles.burst(t.x,1,t.z,{count:14,colors:[16765503,16777215,16752412],speed:3.5,up:4,size:.13,life:.7}),e.particles.flash(t.x,1.3,t.z,16770688,1.6),e.particles.ring(t.x,.05,t.z,16765503,2.2),e.floaters.spawn("KO!",t.x,1.7,t.z,"ko",.9),this.makeNoise(t.x,t.z,2.5,t),e.hintDone("ko")}nearHide(){let t=this.player,e=null,i=1.25;for(let s of this.hides){let a=Math.hypot(t.x-s.cx,t.z-s.cz);a<i&&Math.abs(Ie(t.face,Math.atan2(s.cx-t.x,s.cz-t.z)))<.9&&(i=a,e=s)}return e}enterHide(t){this.hidesUsed++;let e=this.player,i=this.app,s=!1,a=0;for(let r of this.guards)(r.state==="alert"||r.state==="flee")&&a++,r.state!=="ko"&&r.state!=="sleep"&&r.state!=="getup"&&this.canSee(r)&&(s=!0,r.knowsHide=!0,r.state!=="alert"&&this.alert(r),i.floaters.spawn("I saw that!",r.x,2,r.z,"say alert",1.2));if(e.hiding=t,e.hideT=0,e.vx=e.vz=0,e.x=t.ex,e.z=t.ez,e.yaw=t.face-Math.PI,e.pitch=-.05,a>0&&!s){this.hidFromAlert=!0;for(let r of this.guards)r.state==="alert"&&(r.lostT=99)}i.audio.play("creak"),i.onHide(!0),i.hintDone("hide")}leaveHide(t){let e=this.player;if(!e.hiding)return;let i=e.hiding;e.hiding=null,e.x=i.ex,e.z=i.ez,e.yaw=i.face-Math.PI,t||this.app.audio.play("creak"),this.app.onHide(!1)}updateHiding(t,e){let i=this.player,s=i.hiding,a=this.app;i.hideT+=t;let r=s.face-Math.PI;i.yaw=r+Ve(Ie(r,i.yaw),-1,1),i.pitch=Ve(i.pitch,-.5,.4),i.moving=0,i.crack=!1,e.consumeDash(),e.consumeThrow();let l=9;for(let o of this.guards)o.state!=="ko"&&o.state!=="sleep"&&(l=Math.min(l,Math.hypot(o.x-s.cx,o.z-s.cz)));i.beatT-=t,l<4.5&&i.beatT<=0&&(i.beatT=.45+l*.12,a.audio.play("beat"),a.shake.add(.04)),e.move(Pi),a.setPrompt("leave"),i.hideT>.35&&(e.consumeAct()||Math.hypot(Pi.x,Pi.y)>.5)&&this.leaveHide(!1)}takeUniform(t){let e=this.app;t.stripped=!0,this.disguises++,this.disguiseT=25+this.gear.disguise,t.koT=Math.max(t.koT,6),e.audio.play("creak"),e.audio.play("pick",6),e.floaters.spawn("Uniform on!",t.x,1.4,t.z,"big",1.2),e.onDisguise(this.disguiseT),e.hintDone("uniform")}updateBriefcase(t){let e=this.app,i=this.player,s=this.briefcase;if(!s)return;if(!this.brief){if(this.time<this.briefAt||this.hasStash||this.alarm)return;this.briefAt=1/0;let r=this.L,l=[];for(let c=1;c<r.H-1;c++)for(let u=1;u<r.W-1;u++){let f=c*r.W+u;if(!r.walk[f]||r.outdoor[f])continue;let x=Math.hypot(u+.5-i.x,c+.5-i.z);x>6&&x<16&&l.push([u,c])}let o=Math.floor(i.x),h=Math.floor(i.z);for(let c=0;c<12&&l.length;c++){let[u,f]=l.splice(Math.random()*l.length|0,1)[0];if(!this.path(o,h,u,f).length)continue;let x=Math.round((this.def.values.stash||2e3)*.3/50)*50;this.brief={x:u+.5,z:f+.5,t:30,value:x},s.group.position.set(u+.5,.7,f+.5),s.group.visible=!0,e.announce(`\u{1F4BC} A courier dropped a golden briefcase! ${$u(x)} \xB7 30s`),e.audio.play("jackpot");break}return}let a=this.brief;a.t-=t,e.onBrief(Math.max(0,a.t)),s.group.rotation.y+=t*2,s.group.position.y=.7+Math.sin(this.t*3)*.08,s.halo.position.y=-.6-Math.sin(this.t*3)*.08,s.halo.material.opacity=.7+Math.sin(this.t*5)*.25,s.group.visible=a.t>5||Math.sin(this.t*14)>-.3,Math.random()<t*3&&e.particles.burst(a.x,.9,a.z,{count:1,colors:[16770688,16777215],speed:.3,up:.6,size:.05,gravity:0,life:.6}),this.state==="play"&&Math.hypot(i.x-a.x,i.z-a.z)<.85?(this.lootGot+=a.value,this.lootTotal+=a.value,this.briefsGot++,e.floaters.spawn("+"+$u(a.value)+" BRIEFCASE!",a.x,1.6,a.z,"big",1.5),e.audio.play("gold"),e.audio.play("combo",10),e.flash("gold"),this.juice(.35,.4,-8,.03,0),e.shake.add(.25),e.particles.burst(a.x,.8,a.z,{count:26,colors:[16765503,16777215,16770688],speed:4,up:5,size:.09,life:.9}),e.particles.flash(a.x,.9,a.z,16773544,2.2),e.particles.ring(a.x,.05,a.z,16765503,2.8),e.onLoot(!0),s.group.visible=!1,this.brief=null,e.onBrief(0)):a.t<=0&&(e.onBrief(0),e.floaters.spawn("The courier took it back...",a.x,1.4,a.z,"q",1.4),s.group.visible=!1,this.brief=null)}nearTV(){let t=this.player;for(let e of this.tvs)if(!(e.on||e.used)&&Math.hypot(t.x-e.cx,t.z-e.cz)<1.9&&Math.abs(Ie(t.face,Math.atan2(e.cx-t.x,e.cz-t.z)))<.7)return e;return null}tvOn(t){let e=this.app;t.on=!0,t.t=0,t.scr.visible=t.glow.visible=!0,e.audio.play("click"),e.audio.play("tvon"),this.makeNoise(t.fx,t.fz,7.5,null,"Who turned the TV on?"),e.setPrompt("")}tvOff(t,e){t.on=!1,t.used=!0,t.scr.visible=t.glow.visible=!1,this.app.audio.play("click"),e&&(this.tvLures++,this.app.floaters.spawn("Stupid TV...",e.x,2,e.z,"say q",1.2))}updateTVs(t){let e=this.player;for(let i of this.tvs){if(!i.on)continue;if(i.t+=t,i.flick-=t,i.babble-=t,i.flick<=0){i.flick=.12+Math.random()*.25;let a=[10473727,16765562,9109440,16751312,16777215][Math.random()*5|0];i.scr.material.color.setHex(a),i.glow.material.color.setHex(a),i.glow.material.opacity=.35+Math.random()*.3}let s=Math.hypot(e.x-i.cx,e.z-i.cz);i.babble<=0&&(i.babble=.2+Math.random()*.12,s<14&&this.app.audio.play("tv",Math.max(0,1-s/14))),i.t>18&&this.tvOff(i,null)}}nearVent(){let t=this.player;for(let e of this.vents)if(Math.hypot(t.x-e.cx,t.z-e.cz)<1.15&&Math.abs(Ie(t.face,Math.atan2(e.gx-t.x,e.gz-t.z)))<1.4)return e;return null}enterVent(t){let e=this.player,i=this.app;for(let s of this.guards)s.state!=="ko"&&s.state!=="sleep"&&s.state!=="getup"&&this.canSee(s)&&(s.state!=="alert"&&this.alert(s),i.floaters.spawn("Hey! The vent!",s.x,2,s.z,"say alert",1.2));this.ventsUsed++,e.venting={t:0,from:t,to:t.other,dur:1.7,moved:!1},e.vx=e.vz=0,e.crouch=!0,i.onCrouch(!0),i.audio.play("vent"),i.setPrompt(""),i.hintDone("vent")}updateVent(t,e){let i=this.player,s=i.venting,a=this.app;s.t+=t,i.inv=.5,i.moving=0,i.crack=!1,i.crouchK=1,e.consumeDash(),e.consumeThrow(),e.consumeAct(),e.consumeSmoke();let r=s.t/s.dur;s.from.flap.rotation.x=Math.min(1.3,s.t*6)*(r<.5?1:Math.max(0,1-(r-.5)*6)),s.to.flap.rotation.x=r>.55?Math.min(1.3,(r-.55)*8)*Math.max(0,1-Math.max(0,r-.85)*7):0,!s.moved&&r>=.5&&(s.moved=!0,i.x=s.to.cx,i.z=s.to.cz,i.yaw=s.to.out-Math.PI,i.pitch=-.1,this.trail&&this.trail.push([i.x,i.z,0])),a.ventFx(r<.22?r/.22:r>.78?(1-r)/.22:1),r>=1&&(i.venting=null,i.inv=.4,s.from.flap.rotation.x=0,s.to.flap.rotation.x=0,a.ventFx(0),a.audio.play("clank"),a.shake.add(.12),this.makeNoise(i.x,i.z,2.4,null),a.particles.puff(i.x,.3,i.z,{count:5,color:13616820,size:.3,speed:.9,up:.7,life:.8}))}dropSmoke(){let t=this.player,e=this.app;if(this.smokesLeft<=0){e.audio.play("nope");return}if(this.clouds.length>=this.smokeFx.length)return;this.smokesLeft--,this.smokesUsed++;let i=t.x+Math.sin(t.face)*.7,s=t.z+Math.cos(t.face)*.7;this.walkable(Math.floor(i),Math.floor(s))||(i=t.x,s=t.z);let a=this.smokeFx.find(r=>!r.pts.visible);a.pts.visible=!0,this.clouds.push({x:i,z:s,t:0,dur:7.5,r:0,fx:a}),e.audio.play("smoke"),e.shake.add(.12),e.particles.burst(i,.2,s,{count:14,colors:[16777215,14275810,12104390],speed:3,up:2,size:.12,life:.7,gravity:1}),e.particles.puff(i,.25,s,{count:14,color:15657718,size:.85,speed:2.4,up:.9,life:1.5,spread:.3}),e.particles.ring(i,.05,s,16777215,3),e.onSmoke(this.smokesLeft),e.hintDone("smoke")}smokeBlocks(t,e,i,s){for(let a of this.clouds){let r=a.r*.9;if(r<.3)continue;if(Math.hypot(i-a.x,s-a.z)<r||Math.hypot(t-a.x,e-a.z)<r)return!0;let l=i-t,o=s-e,h=l*l+o*o||1,c=Ve(((a.x-t)*l+(a.z-e)*o)/h,0,1);if(Math.hypot(t+l*c-a.x,e+o*c-a.z)<r)return!0}return!1}lowCover(t,e,i,s){let a=this.L,r=i-t,l=s-e,o=Math.hypot(r,l),h=Math.ceil(o/.2);for(let c=1;c<h;c++){let u=c/h;if(u*o>o-.25&&u*o>0)continue;let f=Math.floor(t+r*u),x=Math.floor(e+l*u);if(Math.hypot(t+r*u-i,e+l*u-s)>1.6)continue;let g=x*a.W+f;if(g>=0&&g<a.W*a.H&&!a.walk[g]&&!a.opaque[g]&&!a.outdoor[g]&&a.ch[g]!=="D"&&a.ch[g]!=="L")return!0}return!1}inSmoke(t,e){return this.clouds.some(i=>Math.hypot(t-i.x,e-i.z)<i.r*.85)}updateSmoke(t){for(let e=this.clouds.length-1;e>=0;e--){let i=this.clouds[e];i.t+=t;let s=Math.min(1,i.t/.6),a=Ve((i.dur-i.t)/1.6,0,1);i.r=2.1*(1-Math.pow(1-s,3))*(.75+.25*a);let r=i.fx,l=r.geo.attributes.position.array;for(let o=0;o<r.N;o++){let h=o*4,c=Math.sin(i.t*.8+r.off[h+3])*.15;l[o*3]=i.x+r.off[h]*i.r+c,l[o*3+1]=.2+r.off[h+1]*1.5*s+i.t*.04,l[o*3+2]=i.z+r.off[h+2]*i.r+c}r.geo.attributes.position.needsUpdate=!0,r.pts.material.opacity=.55*a*s,r.pts.material.size=1.2+s*.6;for(let o of this.guards)o.coughT>0&&(o.coughT-=t),!(o.state==="ko"||o.state==="sleep"||Math.hypot(o.x-i.x,o.z-i.z)>i.r*.8)&&(o.coughT>0||(o.coughT=2.2,this.app.floaters.spawn("*cough*",o.x,1.9,o.z,"say q",.9),o.state==="alert"&&(o.lostT=Math.max(o.lostT,1.5))));i.t>=i.dur&&(r.pts.visible=!1,this.clouds.splice(e,1))}this.app.onInSmoke(this.state==="play"&&this.inSmoke(this.player.x,this.player.z))}throwCoin(){let t=this.player,e=this.app;if(this.coinsLeft<=0){e.audio.play("nope"),e.floaters.spawn("No coins!",t.x+Math.sin(t.face)*1.5,1.2,t.z+Math.cos(t.face)*1.5,"warn",.9);return}let i=this.coinMeshes.find(h=>!h.visible);if(!i)return;this.coinsLeft--,this.coinsThrown++;let s=Math.sin(t.face),a=Math.cos(t.face),r=Math.cos(t.pitch),l=Math.sin(t.pitch),o=7.5;this.coins.push({mesh:i,x:t.x+s*.35,y:.95,z:t.z+a*.35,vx:s*r*o+t.vx*.5,vy:l*o+2.6,vz:a*r*o+t.vz*.5,st:"fly",t:0,bounces:0}),i.visible=!0,t.grabT=1,e.audio.play("throw"),e.onCoins(this.coinsLeft),e.hintDone("coin")}updateCoins(t,e){let i=this.player,s=this.app;for(let a=this.coins.length-1;a>=0;a--){let r=this.coins[a];if(r.t+=t,r.st==="fly"){r.vy-=16*t;let l=r.x,o=r.z;r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let h=Math.floor(r.x),c=Math.floor(r.z);!this.walkable(h,c)&&(this.opaqueAt(h,c)||r.y<.9)&&(Math.floor(l)!==h?r.vx*=-.4:r.vx*=.6,Math.floor(o)!==c?r.vz*=-.4:r.vz*=.6,r.x=l,r.z=o,s.audio.play("clink",.4)),r.y<.03&&(r.y=.03,r.bounces===0?(this.makeNoise(r.x,r.z,4.6,null,!0),s.audio.play("clink",1),s.particles.burst(r.x,.06,r.z,{count:6,colors:[16770688,16777215],speed:1.5,up:1.5,size:.04,life:.4})):s.audio.play("clink",.3),r.bounces++,r.vy=Math.abs(r.vy)*.35,r.vx*=.5,r.vz*=.5,(r.bounces>2||Math.abs(r.vy)<.5)&&(r.st="rest",r.vy=0)),r.mesh.rotation.set(r.t*18,r.t*7,0);for(let u of this.cams){if(u.off>0)continue;let f=u.mesh.position;Math.hypot(r.x-f.x,r.y-f.y,r.z-f.z)<.5&&(u.off=12,u.susp=0,this.camsHit++,r.vx*=-.3,r.vz*=-.3,r.vy=1,s.audio.play("zap"),s.shake.add(.1),s.particles.burst(f.x,f.y,f.z,{count:16,colors:[16773544,8378623,16777215],speed:2.5,up:2,size:.04,life:.6}),s.floaters.spawn("CAMERA DOWN",f.x,f.y+.5,f.z,"big",1.2),s.hintDone("camhit"))}}else if(r.mesh.rotation.set(Math.PI/2,0,r.t*2),r.mesh.position.y=.03,e&&r.t>.6&&Math.hypot(i.x-r.x,i.z-r.z)<.6){this.coinsLeft++,r.mesh.visible=!1,this.coins.splice(a,1),s.audio.play("pick",6),s.onCoins(this.coinsLeft);continue}r.mesh.position.set(r.x,r.y,r.z)}}makeNoise(t,e,i,s,a){this.thunderT>0&&s==null&&!a&&(i*=.3);let r=this.noiseRings.find(l=>l.t>=1);r&&(r.t=0,r.r=i,r.x=t,r.z=e,r.m.visible=!0);for(let l of this.guards)if(!(l===s||l.state==="ko"||l.state==="getup"||l.state==="alert"||l.state==="waking")&&!(Math.hypot(l.x-t,l.z-e)>i)){if(l.state==="sleep"){this.wake(l,t,e);continue}l.state!=="investigate"&&l.state!=="suspicious"&&(this.app.audio.play("huh"),this.app.floaters.spawn(typeof a=="string"?a:a?"Huh? A coin?":"?",l.x,1.9,l.z,"say q",.9),a===!0&&this.lures++,a==="Jackpot!?"&&this.slotLures++),l.state="investigate",l.tx=t,l.tz=e,l.hurry=l.speed*1.4,l.susp=Math.max(l.susp,.3)}if(a)for(let l of this.dogs)l.def.handler==null&&(l.state==="roam"||l.state==="sniff")&&Math.hypot(l.x-t,l.z-e)<i+2&&(l.state="coin",l.tx=t,l.tz=e,l.waitT=5,l.navGoal=-1,this.app.floaters.spawn("!",l.x,1,l.z,"say q",.7))}updateDog(t,e,i){let s=this.player,a=this.app;t.t+=e,t.moving=0;let r=Math.hypot(s.x-t.x,s.z-t.z),l=s.hiding;i&&t.state!=="bark"&&t.state!=="barkHide"&&(!l&&s.inv<=0&&r<3&&this.los(t.x,t.z,s.x,s.z)&&!this.smokeBlocks(t.x,t.z,s.x,s.z)?(t.state="bark",t.barkT=.25,t.lostT=0,a.floaters.spawn("!",t.x,1.1,t.z,"say alert",.8)):l&&Math.hypot(l.ex-t.x,l.ez-t.z)<1.4&&(t.state="barkHide",t.barkT=.3,t.hide=l));let o=t.def.path,h=t.def.handler!=null?this.guards[t.def.handler]:null;if(h){let u=h.state==="ko"||h.state==="getup";if(t.state==="bark"){let g=!l&&r<6&&this.los(t.x,t.z,s.x,s.z);g?t.lostT=0:t.lostT+=e,t.face=Na(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),i&&g&&(this.lastBark=this.time),i&&g&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0),(t.lostT>2.5||l)&&(t.state="heel")}else if(t.state==="barkHide"){let g=t.hide;s.hiding?(t.face=Na(t.face,Math.atan2(g.cx-t.x,g.cz-t.z),8*e),this.dogBark(t,e,g.ex,g.ez,10),this.barkedAt||(this.barkedAt=!0)):t.state="heel"}else t.state="heel";let f=this.heelSpot(t,h),x=Math.hypot(f[0]-t.x,f[1]-t.z);if(!u&&x>.18?this.navTo(t,f[0],f[1],Math.max(2.6,h.speed*1.5),e):t.state==="heel"&&(t.face=Na(t.face,u?Math.atan2(h.x-t.x,h.z-t.z):h.face,6*e)),Math.hypot(h.x-t.x,h.z-t.z)>1.6){let g=1.6/Math.hypot(h.x-t.x,h.z-t.z);t.x=h.x+(t.x-h.x)*g,t.z=h.z+(t.z-h.z)*g}if(t.leash){let g=h.x+Math.cos(h.face)*.22,m=h.z-Math.sin(h.face)*.22,d=.75,p=t.x+Math.sin(t.face)*.28,v=t.z+Math.cos(t.face)*.28,b=.42,y=Math.hypot(p-g,b-d,v-m);t.leash.position.set((g+p)/2,(d+b)/2-.04,(m+v)/2),t.leash.lookAt(p,b,v),t.leash.scale.set(1,1,y),t.leash.visible=!0}}else switch(t.state){case"roam":{if(t.waitT>0){t.waitT-=e,t.face+=Math.sin(t.t*3)*e;break}let u=o[t.wp];if(this.navTo(t,u[0]+.5,u[1]+.5,t.def.speed*t.mul,e)&&(t.wp=(t.wp+1)%o.length,t.waitT=1.2),t.smellT-=e,i&&t.smellT<=0){t.smellT=.5;for(let f=this.crumbs.length-1;f>=0;f--){let x=this.crumbs[f];if(this.time-x.t>14)break;if(Math.hypot(x.x-t.x,x.z-t.z)<2.2){t.state="sniff",t.ci=f,t.sniffT=0,a.audio.play("sniff");break}}}break}case"sniff":{t.sniffT+=e;let u=this.crumbs[t.ci];if(!u||t.sniffT>16){t.state="roam",t.navGoal=-1;break}(this.navTo(t,u.x,u.z,2.5*t.mul,e)||Math.hypot(u.x-t.x,u.z-t.z)<.45)&&(t.ci<this.crumbs.length-1?t.ci++:(t.state="roam",t.waitT=2,t.navGoal=-1)),Math.random()<e*1.5&&a.audio.play("sniff");break}case"coin":(this.navTo(t,t.tx,t.tz,3.2*t.mul,e)||Math.hypot(t.tx-t.x,t.tz-t.z)<.6)&&(t.waitT-=e,t.face+=Math.sin(t.t*6)*e*3,Math.random()<e*2&&a.audio.play("sniff"),t.waitT<=0&&(t.state="roam",t.navGoal=-1));break;case"bark":{let u=!l&&r<6&&this.los(t.x,t.z,s.x,s.z);u?t.lostT=0:t.lostT+=e,r>1.3&&!l&&this.navTo(t,s.x,s.z,3.3*t.mul,e),t.face=Na(t.face,Math.atan2(s.x-t.x,s.z-t.z),8*e),this.dogBark(t,e,t.x,t.z),(t.lostT>2.5||l)&&(t.state="sniff",t.ci=Math.max(0,this.crumbs.length-6),t.sniffT=0),i&&u&&(this.lastBark=this.time),i&&u&&!this.barkedAt&&(this.barkedAt=!0,this.spotted=!0);break}case"barkHide":{let u=t.hide;if(!s.hiding){t.state="bark",t.lostT=0;break}t.face=Na(t.face,Math.atan2(u.cx-t.x,u.cz-t.z),8*e),this.dogBark(t,e,u.ex,u.ez,10),this.barkedAt||(this.barkedAt=!0);break}}let c=t.m;c.root.position.set(t.x,0,t.z),c.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.scale.set(.8,1,1.1),Gu(c,e,t.moving?1:0,this.t,t.state==="bark"||t.state==="barkHide"),Qo(c,this.L,t.x,t.z,e)}heelSpot(t,e){let i=Math.sin(e.face),s=Math.cos(e.face),a=s,r=-i;for(let[l,o]of[[.6,-.15],[-.6,-.15],[0,-.75]]){let h=e.x+a*l+i*o,c=e.z+r*l+s*o;if(this.walkable(Math.floor(h),Math.floor(c)))return[h,c]}return[e.x-i*.5,e.z-s*.5]}dogBark(t,e,i,s,a=7){if(t.barkT-=e,t.barkT>0)return;t.barkT=.85;let r=this.app;r.audio.play("woof"),r.floaters.spawn("WOOF!",t.x,1,t.z,"say woof",.7),t.m.sq=1.3,t.m.sqv=0,this.makeNoise(i,s,a,null)}wake(t,e,i){let s=t.def.owner.bed;this.ownerWoke=!0,t.state="waking",t.t=.9,t.tx=e,t.tz=i,t.hurry=t.speed*1.3,t.x=s[0]-.5,t.z=s[1]+1.5,t.c.root.rotation.x=0,t.c.root.position.y=0,t.face=Math.atan2(e-t.x,i-t.z),Hi(t.c,1.4),this.app.audio.play("wake"),this.app.floaters.spawn("WHO'S THERE?!",t.x,2,t.z,"say warn",1.3),this.app.shake.add(.15)}seesPoint(t,e,i,s){let a=e-t.x,r=i-t.z,l=Math.hypot(a,r);return l>s||l>.6&&Math.abs(Ie(t.face,Math.atan2(a,r)))>t.fov/2?!1:this.los(t.x,t.z,e,i)}noticeThings(t){let e=this.app;for(let i of this.guards)if(!(i===t||i.state!=="ko"||i.koT<1.2||i.claimed)&&this.seesPoint(t,i.x,i.z,t.range)){i.claimed=!0,t.state="investigate",t.tx=i.x,t.tz=i.z,t.hurry=t.speed*1.7,t.reviveT=i,t.susp=Math.max(t.susp,.6),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("Man down!",t.x,2,t.z,"say warn",1.3);return}if(this.casesSmashed&&t.kind==="guard"&&!t.sawCase){let i=this.cases.find(s=>s.smashed&&this.seesPoint(t,s.cx,s.cz,t.range));if(i){t.sawCase=!0,t.safeRun=!0,t.state="investigate",t.tx=i.cx,t.tz=i.cz+1.2,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The display case!?",t.x,2,t.z,"say warn",1.3);return}}if(this.safeOpen&&!t.sawSafe&&t.kind==="guard"){let i=this.L.safe.x+.5,s=this.L.safe.y+.5;this.seesPoint(t,i,s,t.range)&&(t.sawSafe=!0,t.safeRun=!0,t.state="investigate",t.tx=i,t.tz=s+1,t.hurry=t.speed*1.6,t.susp=Math.max(t.susp,.7),t.navGoal=-1,e.audio.play("huh"),e.floaters.spawn("The safe!?",t.x,2,t.z,"say warn",1.3))}}arrive(t){let e=this.app;for(let s of this.tvs)if(s.on&&Math.hypot(s.fx-t.x,s.fz-t.z)<2.2){t.face=Math.atan2(s.cx-t.x,s.cz-t.z),this.tvOff(s,t);return}if(t.kind==="guard"&&this.hides.length&&!t.reviveT&&!t.safeRun&&Math.random()<(this.player.hiding?.55:.35)){let s=null,a=4.5;for(let r of this.hides){let l=Math.hypot(r.ex-t.x,r.ez-t.z);l<a&&(!r.checkedT||this.t-r.checkedT>15)&&(a=l,s=r)}if(s){s.checkedT=this.t,t.state="checkHide",t.chk=s,t.navGoal=-1,e.floaters.spawn("Hmm... the wardrobe?",t.x,2,t.z,"say q",1.2);return}}if(t.reviveT){let s=t.reviveT;t.reviveT=null,s.claimed=!1,s.state==="ko"&&Math.hypot(s.x-t.x,s.z-t.z)<1.8&&(s.koT=.25,this.revives++,t.face=Math.atan2(s.x-t.x,s.z-t.z),e.floaters.spawn("Wake up!",s.x,1.4,s.z,"say warn",1.1),e.audio.play("wake"))}let i=this.player.hiding;if(i&&this.state==="play"&&this.dogs.some(s=>s.state==="barkHide")&&Math.hypot(i.ex-t.x,i.ez-t.z)<1.8){e.floaters.spawn("Got you!",t.x,2,t.z,"say alert",1.2),this.leaveHide(!0),this.bust(t);return}t.safeRun&&(t.safeRun=!1,this.D.safeAlarm&&this.state==="play"&&!this.alarm&&(e.floaters.spawn("We've been robbed!",t.x,2,t.z,"say alert",1.4),this.triggerAlarm("A guard found the open safe!")))}alert(t){if(t.kind==="clerk"){if(t.state==="flee"||t.state==="cower")return;t.state="flee",t.susp=1,t.navGoal=-1,this.spotted=!0,this.app.audio.play("scream"),this.app.floaters.spawn("AAAH! A ROBBER!",t.x,2,t.z,"say alert",1.2),this.app.shake.add(.12),Hi(t.c,1.35),this.app.hint("clerk");return}t.state="alert",t.susp=1,t.lostT=0,t.radioT=0,t.radioSaid=!1,t.alertAt=this.time,this.disguiseT>0&&(this.disguiseT=0,this.app.onDisguise(0),this.app.floaters.spawn("You're not Dave!",t.x,2.3,t.z,"say alert",1.3)),this.spotted||this.app.hintDone("cone"),this.spotted=!0,this.app.audio.play("alert"),this.app.floaters.spawn("!",t.x,2,t.z,"say alert",.8),this.smokesLeft>0&&this.app.hint("smoke"),this.app.shake.add(.15),Hi(t.c,1.3)}baseState(t){t.state=t.def.post?"post":"patrol",t.navGoal=-1}updateTrain(t,e){for(let i of this.trainMats)i.map.offset.x+=i.userData.sgn*t*.9;this.sway=Math.sin(this.t*1.3)*.006+Math.sin(this.t*3.1)*.002,!(e||this.state!=="play")&&(this.clackT-=t,this.clackT<=0&&(this.clackT=.95+Math.random()*.15,this.app.audio.play("clack"),this.app.shake.add(.015)))}updateChatter(t){let e=this.app,i=this.player;if(this.chatQ){let a=this.chatQ;a.t-=t,a.t<=0&&(this.chatQ=null,Ku.has(a.g.state)&&(e.floaters.spawn(a.text,a.g.x,2,a.g.z,"say zz",1.6),e.audio.play("mumble")));return}if(this.chatT-=t,this.chatT>0||this.alarm)return;let s=this.guards.filter(a=>a.kind==="guard"&&Ku.has(a.state)&&a.susp<.1&&Math.hypot(a.x-i.x,a.z-i.z)<11);for(let a=0;a<s.length;a++)for(let r=a+1;r<s.length;r++){let l=s[a],o=s[r];if(Math.hypot(l.x-o.x,l.z-o.z)>2.6||!this.los(l.x,l.z,o.x,o.z))continue;let h=sy.slice();this.def.rain&&h.push(["Nasty storm out there.","Better than standing in it."]),(l.def.reinforce||o.def.reinforce)&&h.push(["You the new guy?","First night. Anything I should know?"]),this.kos>0&&h.push(["Anyone seen Dave? He's not answering.","Probably asleep on the job again."]);let[c,u]=h[this.chatI++%h.length];e.floaters.spawn(c,l.x,2,l.z,"say zz",1.6),e.audio.play("mumble"),l.face=Math.atan2(o.x-l.x,o.z-l.z),this.chatQ={g:o,text:u,t:1.5},this.chatT=16+Math.random()*10;return}this.chatT=1.5}updateStorm(t){let e=this.app;this.thunderT=Math.max(0,this.thunderT-t),this.thunderIn>0&&(this.thunderIn-=t,this.thunderIn<=0&&(this.thunderT=2.6,e.audio.play("thunder"),e.shake.add(.12),e.hint("thunder"))),this.boltT-=t,this.boltT<=0&&(this.boltT=12+Math.random()*12,this.thunderIn=.35+Math.random()*.6,e.lightning())}callReinforcement(t){let e=this.app,i=this.entrance;t.def.path=[[i.x,i.y],this.roamCell(t.def.roam,i.x,i.y)],this.resetGuard(t),t.wallet=0,t.spareKey=!1,t.walletMesh.visible=!1,t.keyMesh.visible=!1,t.c.root.visible=!0,this.guards.push(t),e.audio.play("radio"),e.announce("\u{1F4FB} Shift change! A new guard is on duty"),e.floaters.spawn("Reporting for duty!",t.x,2,t.z,"say warn",1.4)}roamCell(t,e,i){let s=0;for(let a=0;a<40;a++){let r=t[0]+Math.floor(Math.random()*(t[2]-t[0]+1)),l=t[1]+Math.floor(Math.random()*(t[3]-t[1]+1));if(!(!this.walkable(r,l)||this.L.outdoor[l*this.L.W+r])){if(e!==void 0&&(r!==e||l!==i)){if(s++>=8)break;if(!this.path(e,i,r,l).length)continue}return[r,l]}}return e!==void 0?[e,i]:[t[0],t[1]]}effRange(t){return t.yawnT>0?t.range*.35:t.range}canSee(t){let e=this.player,i=e.x-t.x,s=e.z-t.z,a=Math.hypot(i,s);return e.hiding||e.venting||a>this.effRange(t)||a>.35&&Math.abs(Ie(t.face,Math.atan2(i,s)))>t.fov/2||!this.los(t.x,t.z,e.x,e.z)||e.crouch&&this.lowCover(t.x,t.z,e.x,e.z)?0:this.smokeBlocks(t.x,t.z,e.x,e.z)?((t.susp>.2||t.state==="alert")&&(this.smokeHid=!0),0):a+.001}updateGuard(t,e,i){let s=this.player,a=this.app;switch(t.state){case"sleep":t.zz-=e,t.zz<=0&&(t.zz=1.5,(Math.hypot(s.x-t.x,s.z-t.z)<7||!i)&&a.floaters.spawn("z",t.x+.3,1,t.z-.4,"zz",1.4));return;case"waking":t.t-=e,t.t<=0&&(t.state="investigate");return;case"ko":t.koT-=e,t.fallT+=e,t.kind==="guard"&&i&&(!t.radioCall&&t.koT<(this.tut?87:5.5)&&(t.radioCall=1,t.callT=0,a.hint("radio")),t.radioCall===1&&(t.callT-=e,t.callT<=0&&(t.callT=1.1,a.audio.play("radio"),a.floaters.spawn('\u{1F4FB} "Unit, report in!"',t.x,1.2,t.z,"say warn",1)),t.koT<1.8&&this.missedCheckIn(t))),t.koT<=0&&(t.state="getup",t.t=.5);return;case"getup":t.t-=e,t.t<=0&&(this.baseState(t),t.susp=.2,a.floaters.spawn(t.stripped?"Hey! Where's my uniform?!":"?!",t.x,1.9,t.z,"q",t.stripped?1.4:.8));return}t.yawnT>0&&(t.yawnT-=e,t.state!=="wait"&&(t.yawnT=0)),t.state!==t.lastState&&(t.lastState=t.state,t.stateT=0),t.stateT+=e;let r=i&&s.inv<=0?this.canSee(t):0;if(r){let o=1-Ve(r/this.effRange(t),0,1),h=(.65+2.3*o*o)*(s.dashT>0?1.6:s.crouch?.55:1)*this.D.susp,c=this.disguiseT>0&&t.kind!=="owner"&&t.state!=="alert";c&&(h=s.dashT>0?h*.5:r<1.2?h*.25:0),t.susp=Math.min(c&&s.dashT<=0?Math.max(Math.min(t.susp,.6),0):1,t.susp+h*e),t.state!=="alert"?t.peak=Math.max(t.peak||0,t.susp):t.peak=0,t.lastX=s.x,t.lastZ=s.z,t.lostT=0,t.state!=="alert"&&(t.susp>=1?this.alert(t):t.susp>.25&&t.state!=="suspicious"&&(t.state="suspicious",a.audio.play("huh")))}else if(t.lostT+=e,t.state!=="alert"&&(t.susp=Math.max(0,t.susp-e*.3)),t.state!=="alert"&&t.peak>.72&&t.susp<.15&&i){t.peak=0,this.closeCalls++;let o=this.player,h=Math.sin(o.face),c=Math.cos(o.face);a.floaters.spawn("PHEW! Close call +$50",o.x+h*1.5,1.35,o.z+c*1.5,"combo",1.2),a.audio.play("star",1),this.lootGot+=50,this.lootTotal+=50,a.onLoot(!0)}i&&(t.state==="patrol"||t.state==="wait"||t.state==="post"||t.state==="look"||t.state==="suspicious")&&this.noticeThings(t),i&&s.inv<=0&&t.state!=="alert"&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.7&&this.disguiseT<=0&&!this.canKO(t)&&Math.abs(Ie(t.face,Math.atan2(s.x-t.x,s.z-t.z)))<1.75&&this.alert(t);let l=t.def;switch(t.state){case"patrol":{let o=l.path[t.wp];(this.navTo(t,o[0]+.5,o[1]+.5,t.speed,e)||t.stateT>14)&&(t.state="wait",t.t=l.wait??1,t.baseFace=t.face,t.kind==="guard"&&t.susp<.1&&Math.random()<.35&&(t.yawnT=2.2,t.t=Math.max(t.t,2.2),a.floaters.spawn("*yaaawn*",t.x,1.9,t.z,"say zz",1.4)));break}case"wait":{t.t-=e;let o=(l.wait??1)-t.t;if(t.face=t.baseFace+Math.sin(o*2.4)*.9,t.t<=0){let h=l.path.length;if(l.roam){let c=Math.floor(t.x),u=Math.floor(t.z);l.path=[[c,u],this.roamCell(l.roam,c,u)],t.wp=1}else l.loop?t.wp=(t.wp+1)%h:((t.wp+t.dir>=h||t.wp+t.dir<0)&&(t.dir*=-1),t.wp+=t.dir);t.state="patrol"}break}case"post":{let o=l.post[0]+.5,h=l.post[1]+.5;Math.hypot(t.x-o,t.z-h)>.15?this.navTo(t,o,h,t.speed,e):t.face=il(t.face,l.face+Math.sin(this.t*l.sweepSpeed)*l.sweep,3*e);break}case"suspicious":{let o=Math.atan2(t.lastX-t.x,t.lastZ-t.z);t.face=il(t.face,o,5*e),t.kind!=="clerk"&&Math.hypot(t.lastX-t.x,t.lastZ-t.z)>1.6&&t.susp>.45&&this.navTo(t,t.lastX,t.lastZ,t.speed*.6,e),t.susp<.1&&this.baseState(t);break}case"alert":{t.radioT=(t.radioT||0)+e,!this.alarm&&t.radioT>.7&&!t.radioSaid&&(t.radioSaid=!0,a.floaters.spawn("Calling it in...",t.x,2,t.z,"say warn",1.4)),!this.alarm&&t.radioT>this.D.radio&&this.triggerAlarm("A guard radioed the police!");let o=r?s.x:t.lastX,h=r?s.z:t.lastZ;if(t.knowsHide&&s.hiding&&(o=s.hiding.ex,h=s.hiding.ez,t.lostT=0,this.state==="play"&&Math.hypot(o-t.x,h-t.z)<.9)){t.knowsHide=!1,this.leaveHide(!0),this.bust(t);break}this.navTo(t,o,h,Qg,e),!r&&t.lostT>2.2&&(t.state="search",t.tx=t.lastX,t.tz=t.lastZ,t.hurry=2.8,t.susp=.6,a.audio.play("lost"),a.floaters.spawn("?",t.x,1.9,t.z,"say q",.8)),this.state==="play"&&s.inv<=0&&!s.hiding&&Math.hypot(s.x-t.x,s.z-t.z)<.78&&this.bust(t);break}case"investigate":case"search":(this.navTo(t,t.tx,t.tz,t.hurry||t.speed,e)||t.stateT>9||t.nav.length===0&&Math.hypot(t.tx-t.x,t.tz-t.z)<.9)&&(t.state="look",t.t=2.2,t.baseFace=t.face,this.arrive(t));break;case"checkHide":{let o=t.chk;(this.navTo(t,o.ex,o.ez,t.speed*1.15,e)||t.stateT>8)&&(t.face=Math.atan2(o.cx-t.x,o.cz-t.z),this.player.hiding===o&&this.state==="play"?(a.floaters.spawn("Found you!",t.x,2,t.z,"say alert",1.2),this.leaveHide(!0),this.bust(t)):(a.audio.play("creak"),a.floaters.spawn("Nobody here...",t.x,2,t.z,"say q",1.1),t.state="look",t.t=1.6,t.baseFace=t.face));break}case"flee":this.navTo(t,t.button.x,t.button.z,3.4,e)&&(t.state="cower",t.t=0,t.face=Math.atan2(t.button.x-t.x,t.button.z-t.z),t.button.btn.material.color.setHex(4054148),this.state==="play"&&!this.alarm&&this.triggerAlarm("The clerk hit the silent alarm!"),a.audio.play("click"));break;case"cower":t.face+=Math.sin(this.t*9)*e*2;break;case"look":t.t-=e,t.face=t.baseFace+Math.sin((2.2-t.t)*2.6)*1.2,t.t<=0&&this.baseState(t);break}}syncGuard(t,e){let i=t.c;if(t.moving&&this.state==="play"&&(t.stepAcc=(t.stepAcc||0)+e*(t.state==="alert"||t.state==="flee"?3.4:2.2),t.stepAcc>1)){t.stepAcc=0;let l=this.player,o=Math.hypot(t.x-l.x,t.z-l.z);if(o<8){let h=Ie(l.face,Math.atan2(t.x-l.x,t.z-l.z)),c=this.los(t.x,t.z,l.x,l.z)?1:.45;this.app.audio.stepSound("boot",(1-o/8)*.9*c,Ve(-Math.sin(h),-.9,.9))}}i.root.position.x=t.x,i.root.position.z=t.z,i.root.rotation.y=t.face,t.shadow.position.set(t.x,.02,t.z),t.shadow.visible=t.state!=="sleep";let s=t.state==="alert";if(jo(i,e*(s?1.5:1),t.moving?1:0,this.t),Qo(i,this.L,t.x,t.z,e),i.beam){let l=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep";i.beam.visible=l,l&&i.beam.material.color.setHex(t.state==="alert"?16734810:t.susp>.25?16757594:16770728)}if(t.state==="ko"||t.state==="getup"){let l=t.state==="ko"?Math.min(1,t.fallT/.25):t.t/.5,o=t.state==="ko"?1-Math.pow(1-l,3)*Math.cos(l*7):l;if(i.root.rotation.x=-Math.PI/2*o,i.root.position.y=.16*o,t.stars.visible=t.state==="ko",t.stars.visible){let h=t.x-Math.sin(t.face)*1,c=t.z-Math.cos(t.face)*1;t.stars.children.forEach((u,f)=>{let x=this.t*5+f*Math.PI*2/3;u.position.set(h+Math.cos(x)*.35,.55+Math.sin(x*2)*.05,c+Math.sin(x)*.35),u.rotation.set(x,x,0)})}}else t.state!=="sleep"&&(i.root.rotation.x=0,i.root.position.y=0,t.stars.visible=!1);this.state==="caught"&&this.catcher===t&&(i.armOverride=!0,i.armL.rotation.x=i.armR.rotation.x=-2.6);let a=t.state!=="ko"&&t.state!=="getup"&&t.state!=="sleep"&&t.state!=="waking";if(t.cone.visible=a,a){let l=t.state==="alert"||t.state==="flee"?Ua.alert:t.susp>.25?Ua.sus:Ua.cone;this.updateCone(t.cone,t.x,t.z,t.face,t.fov,this.effRange(t),l)}let r="";t.state==="alert"||t.state==="flee"?r="alert":(t.state==="investigate"||t.state==="search"||t.state==="look"||t.state==="checkHide"||t.susp>.04)&&(r="sus"),r!==t.prevBadge&&(t.prevBadge=r,t.badge.className="badge "+r,t.badge.lastChild.textContent=r==="alert"?"!":"?"),r&&(el.set(t.x,1.8,t.z).project(this.app.camera),t.badge.classList.toggle("off",el.z>1),t.badge.style.transform=`translate(${(el.x+1)/2*this.app.w}px,${(1-el.y)/2*this.app.h}px) translate(-50%,-50%)`,t.badge.style.setProperty("--p",r==="alert"?1:t.susp.toFixed(2)))}updateCone(t,e,i,s,a,r,l){let o=t.geometry.attributes.position.array;o[0]=e,o[1]=.04,o[2]=i;for(let h=0;h<=Fs;h++){let c=s-a/2+a*h/Fs,u=this.rayLen(e,i,c,r),f=(h+1)*3;o[f]=e+Math.sin(c)*u,o[f+1]=.04,o[f+2]=i+Math.cos(c)*u}t.geometry.attributes.position.needsUpdate=!0,t.material.color.setHex(l)}updateCam(t,e,i){let s=t.def,a=this.player;if(t.off>0){t.off-=e,t.cone.visible=!1,t.mesh.rotation.x=.6,t.lens.material.color.setHex(Math.random()<.04?16773544:1710626),Math.random()<e*3&&this.app.particles.burst(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,{count:2,colors:[16773544,8378623],speed:1.2,up:.5,size:.03,life:.3}),t.off<=0&&(t.cone.visible=!0,t.mesh.rotation.x=0,this.app.audio.play("click"));return}i&&Math.hypot(a.x-s.pos[0],a.z-s.pos[1])<7&&this.coinsLeft>0&&this.app.hint("camhit"),t.face=s.face+Math.sin(this.t*s.sweepSpeed)*s.sweep;let r=s.pos[0],l=s.pos[1];t.mesh.rotation.y=t.face,t.cool-=e;let o=!1;if(i&&a.inv<=0&&t.cool<=0){let c=a.x-r,u=a.z-l,f=Math.hypot(c,u);o=this.disguiseT<=0&&f<qu&&Math.abs(Ie(t.face,Math.atan2(c,u)))<.45&&this.los(r,l,a.x,a.z)&&!this.smokeBlocks(r,l,a.x,a.z)}if(t.susp=Ve(t.susp+(o?e*1.5:-e*.8),0,1),t.susp>=1){t.susp=0,t.cool=4,this.triggerAlarm("The camera triggered the alarm!"),this.spotted=!0,this.app.flash("alarm"),this.app.floaters.spawn("ALARM!",r,2,l,"alert",1.2),this.app.particles.flash(r,t.mesh.position.y,l,16726862,1.8);for(let c of this.guards)c.state==="ko"||c.state==="sleep"||c.state==="getup"||c.state==="alert"||c.state==="waking"||Math.hypot(c.x-a.x,c.z-a.z)<18&&(c.state="investigate",c.tx=a.x,c.tz=a.z,c.hurry=3.2,c.susp=Math.max(c.susp,.6))}let h=t.cool>0;t.lens.material.color.setHex(h||Math.sin(this.t*6)>0?16726862:8003368),this.updateCone(t.cone,r,l,t.face,.9,qu,h?Ua.alert:t.susp>.2?16743046:16757688)}openSafe(){this.mark("safe",this.L.safe.x+.5,this.L.safe.y+.5);let t=this.app,e=this.L.safe.x+.5,i=this.L.safe.y+.5,s=this.def.values;this.safeOpen=!0,this.hasStash=!0,this.doorT=0,this.lootGot+=s.stash,this.hitstop=.12,this.juice(.6,.35,-12,.04,0),t.shake.add(.55),t.audio.play("safe"),t.flash("gold"),t.particles.burst(e,.8,i+.4,{count:24,colors:[16765503,16777215,16770688],speed:4,up:6,size:.1,life:1}),t.particles.flash(e,1,i+.4,16773544,2.6,.35),t.particles.ring(e,.05,i+.4,16765503,3.4,.6),t.particles.burst(e,1,i+.5,{count:30,colors:[7327610,10216346,5221978],speed:3,up:4,size:.13,life:2.2,shape:"bill",gravity:3,drag:1.5}),t.floaters.spawn("+$"+s.stash.toLocaleString("en-US")+" STASH!",e,1.8,i,"big",1.6);for(let a=0;a<s.bundles;a++){let r=-.9+1.8*a/(s.bundles-1);this.loot.push({type:"cash",x:e,y:.7,z:i+.4*this.safeScale+.1,vx:Math.sin(r)*re(2,3.2),vy:re(5,7),vz:Math.cos(r)*re(1.5,3),st:"fly",t:0,value:s.bundle,ph:a,ms:0,s:1,rot:a,bundle:!0})}this.exitRing.visible=this.exitBeam.visible=!0,t.onLoot(!0),t.hintDone("safe"),t.hint("stash")}weightMul(){let t=0;for(let e of this.heavy)t+=e==="art"?.1:.06;return Math.max(.65,1-t)}stashHeavy(){let t=this.app,e=this.player,i=this.heavy.length;this.heavy=[],this.stashRuns++,this.hasStash||(this.stashedEarly=!0),t.audio.play("disarm"),t.floaters.spawn(`STASHED ${i} IN THE ${this.L.van?"VAN":"HIDEOUT"}!`,e.x+Math.sin(e.face)*1.5,1.3,e.z+Math.cos(e.face)*1.5,"big",1.3),t.particles.burst(e.x,.9,e.z,{count:10,colors:[16765503,16777215],speed:1.6,up:2,size:.04,life:.6}),this.juice(0,1,-3,0,0),t.onWeight(1),t.hintDone("heavy")}collect(t){(t.type==="gold"||t.type==="art")&&!t.bundle&&(this.heavy.push(t.type),this.app.onWeight(this.weightMul()),this.app.hint("heavy")),(t.type!=="cash"||!t.bundle)&&this.mark(t.type==="cash"?"cash":"loot",t.x,t.z);let e=this.app;this.lootGot+=t.value,this.got[t.type]++,t.type==="cash"&&!t.bundle&&this.got.cashLoose++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=1.6;let i=t.type==="cash"?"cash":t.type==="gold"?"gold":t.type==="jewel"?"jewel":"art",s=this.player,a=Math.sin(s.face),r=Math.cos(s.face),l=re(-.35,.35),o=s.x+a*1.4-r*l,h=s.z+r*1.4+a*l;e.floaters.spawn("+$"+t.value,o,1,h,i,.9),s.grabT=1,this.combo>=3&&(e.floaters.spawn("COMBO x"+this.combo,s.x+a*1.4,1.45,s.z+r*1.4,"combo",.8),e.audio.play("combo",this.combo));let c={cash:[4176208,10352031,16777215],gold:[16765503,16773544],jewel:[4122879,16777215,12056319],art:[16739179,5164484,16770669]}[t.type];e.particles.burst(s.x+a*1.4,.8,s.z+r*1.4,{count:t.type==="cash"?4:10,colors:c,speed:1.4,up:1.6,size:.03,life:.5}),t.type==="cash"?e.particles.burst(s.x+a*1,1,s.z+r*1,{count:6,colors:[7327610,10216346,5221978],speed:1.4,up:1.6,size:.1,life:1.1,shape:"bill",gravity:3,drag:2.5}):e.particles.burst(s.x+a*1.5,1,s.z+r*1.5,{count:8,colors:[16777215,16773544],speed:1.2,up:1,size:.025,life:.6,gravity:0}),e.audio.play(t.type==="cash"?"pick":t.type,this.combo),this.player.bagV+=4,this.juice(0,1,t.type==="cash"?-1.2:-3,t.type==="cash"?0:-.015,0),Hi(this.player.c,1.12),e.onLoot(!1)}updateLoot(t,e){let i=this.player,s={cash:0,gold:0,jewel:0,art:0};for(let a=this.loot.length-1;a>=0;a--){let r=this.loot[a];r.t+=t;let l=r.type==="art"?.9:.62;if(r.st==="fly"){r.vy-=18*t;let c=r.x,u=r.z;r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,this.walkable(Math.floor(r.x),Math.floor(r.z))||(r.x=c,r.z=u,r.vx*=-.5,r.vz*=-.5),r.y<.3&&(r.y=.3,r.vy*=-.45,r.vx*=.6,r.vz*=.6),r.rot+=t*8,r.t>.8&&(r.st="idle")}else if(r.st==="idle")r.y+=(l+Math.sin(this.t*3+r.ph)*.08-r.y)*Math.min(1,t*6),r.rot+=t*1.8,e&&Math.hypot(i.x-r.x,i.z-r.z)<1.5&&(r.st="mag",r.ms=2);else{r.ms+=t*30;let c=i.x-r.x,u=.7-r.y,f=i.z-r.z,x=Math.hypot(c,u,f),g=Math.min(x,r.ms*t);if(r.x+=c/x*g,r.y+=u/x*g,r.z+=f/x*g,r.rot+=t*12,x<.45){this.collect(r),this.loot.splice(a,1);continue}}r.st==="idle"&&Math.random()<t*1.6&&this.app.particles.burst(r.x+re(-.2,.2),r.y+re(0,.25),r.z+re(-.2,.2),{count:1,colors:[16777215,16773544],speed:.1,up:.3,size:.05,gravity:0,life:.5,spin:3});let o=this.lootMeshes[r.type],h=r.st==="mag"?Math.max(.4,1-r.ms*.02):1+(r.type==="art"?0:Math.sin(this.t*6+r.ph)*.06);Da.position.set(r.x,r.y,r.z),Da.rotation.set(0,r.rot,0),Da.scale.setScalar(h*(r.type==="jewel"?1.5:1.25)),Da.updateMatrix(),o.setMatrixAt(s[r.type]++,Da.matrix)}for(let a in s){let r=this.lootMeshes[a];r.count=s[a],r.instanceMatrix.needsUpdate=!0}}updateProps(t){for(let e of this.doors)if(e.open&&e.t<1){e.t=Math.min(1,e.t+t*1.6);let i=1-Math.pow(1-e.t,3);e.type==="lock"?e.m.group.rotation.y=(e.alongX?1:-1)*1.55*(i+Math.sin(e.t*Math.PI)*.12):e.m.group.position.y=i*(Ae-.12)}if(this.safeOpen&&this.doorT<1){this.doorT=Math.min(1,this.doorT+t*3);let e=this.doorT,i=1+2.7*Math.pow(e-1,3)+1.7*Math.pow(e-1,2);this.safe.door.rotation.y=-1.9*i}if(this.exitRing.visible){let e=1+Math.sin(this.t*5)*.08;this.exitRing.scale.set(e,1,e),this.exitBeam.material.opacity=.16+Math.sin(this.t*4)*.06}this.arrow.visible=!1}syncPlayer(t){let e=this.player,i=e.c,s=this.state==="escape"&&!e.hidden;i.root.visible=s,e.shadow.visible=s,s&&(i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.face,e.shadow.position.set(e.x,.02,e.z),jo(i,t,1,this.t),i.bag.scale.setScalar(.5+.95*Math.min(1,this.lootGot/this.lootTotal))),this.state!=="play"&&(e.moving=Te(e.moving,0,8,t)),e.grabT=Math.max(0,e.grabT-t*4),Qo(this.app.vm,this.L,e.x,e.z,t),this.app.vm.update(t,{move:e.moving,bob:e.bob,lookX:e.lookX,lookY:e.lookY,punch:e.punchT>0?e.punchT/.28:0,crack:e.crack&&this.state==="play",grab:e.grabT,dash:e.dashT>0,busted:this.state==="caught"}),e.lookX=e.lookY=0}applyCamera(t,e){let i=this.player,s=this.app;if(this.state==="escape"&&this.heli&&this.heli.group.visible){let g=this.L.exit,m=this.endT,d=this.heli.group.position;if(m<1.1){let p=Math.min(1,m/1.1),v=p*p*(3-2*p);t.position.set(g.x,tl+v*1.6,g.z+v*.6)}else{let p=Math.min(1,(m-1.1)*1.4);t.position.x+=(g.x+3-t.position.x)*p*e*2,t.position.y+=(6-t.position.y)*e*1.5,t.position.z+=(g.z+7-t.position.z)*e*1.5}t.lookAt(d.x,d.y,d.z),this.fovKick=0;return}if(this.state==="escape"&&!this.L.van){let g=this.L.exit,m=this.endT,d=Math.min(1,Math.max(0,(m-.3)/2)),p=d*d*(3-2*d);t.position.set(g.x,tl+p*9,g.z+p*3.5),t.rotation.set(-.1-p*1,Math.PI+p*.5,0),this.fovKick=0;return}if(this.state==="escape"){let g=this.van.group.position,m=this.L.exit;this.cineInit||(this.cineInit=!0,t.position.set(m.x-2.5,1.6,m.z+5)),t.position.x+=(g.x-1.5-t.position.x)*Math.min(1,e*1.2),t.lookAt(g.x+.3,.7,g.z),this.fovKick=0;return}if(i.hiding){let g=i.hiding;t.position.set(g.cx+Math.sin(g.face)*.12,tl-.06,g.cz+Math.cos(g.face)*.12),t.rotation.set(i.pitch+s.shake.y*.06,i.yaw+s.shake.x*.06,0),this.fovKick=Te(this.fovKick,-6,6,e);return}if(this.state==="caught"&&this.catcher){let g=this.catcher,m=Math.atan2(g.x-i.x,g.z-i.z)-Math.PI;i.yaw+=Ie(i.yaw,m)*Math.min(1,e*8),i.pitch+=(.08-i.pitch)*Math.min(1,e*8)}let a=i.moving,r=Math.abs(Math.sin(i.bob))*.05*a,l=Math.cos(i.bob)*.03*a,o=Math.cos(i.yaw+Math.PI),h=Math.sin(i.yaw+Math.PI),c=-o,u=h;i.roll=Te(i.roll,-i.strafe*.03*a,8,e),this.fovKick=Te(this.fovKick,i.dashT>0?12:0,i.dashT>0?25:6,e);let f=s.shake,x=this.state==="caught"?.3*Math.min(1,this.endT*3):0;t.position.set(i.x+c*l,tl-(i.crouchK||0)*.42+r*(1-(i.crouchK||0)*.5)-x,i.z+u*l),t.rotation.set(i.pitch+f.y*.06+(this.kickP||0),i.yaw+f.x*.06,i.roll+f.x*.02+(this.kickR||0)+this.sway)}updateNoiseRings(t){for(let e of this.noiseRings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t*2.2);let i=.3+(e.r-.3)*(1-Math.pow(1-e.t,3));e.m.position.set(e.x,.05,e.z),e.m.scale.set(i,1,i),e.m.material.opacity=.6*(1-e.t),e.t>=1&&(e.m.visible=!1)}}escape(){let t=this.app;this.checkContracts(!0),this.state="escape",this.endT=0,this.endSent=!1,this.cineInit=!1,this.whooshed=!1;let e=this.player;e.sx=e.x,e.sz=e.z,t.setPrompt(""),t.audio.play("win"),t.shake.add(.2),this.alarm&&this.alarmT<10&&(this.photoFinish=!0,this.juice(.9,.25,-10,0,0),t.shake.add(.4),t.floaters.spawn("JUST IN TIME!",e.x,1.7,e.z-1.2,"big",1.6),t.audio.play("jackpot")),t.onEscapeStart()}updateHeli(t){let e=this.heli,i=e.group,s=this.L.exit,a=this.endT;i.visible||(i.visible=!0,this.heliV=0,i.position.set(s.x,4.4,s.z-1.2),i.rotation.set(0,0,0)),e.rotor.rotation.y+=t*32,e.tail.rotation.x+=t*40,e.blink.visible=a*2.5%1<.4,e.beam.rotation.z=Math.sin(a*1.3)*.25,a<1.3?i.position.y=4.4+Math.sin(a*3)*.08:(this.heliV=Math.min(14,this.heliV+t*9),i.position.x-=this.heliV*t,i.position.y+=(1.5+this.heliV*.25)*t,i.rotation.z+=(.22-i.rotation.z)*Math.min(1,t*3),i.rotation.x+=(-.12-i.rotation.x)*Math.min(1,t*2)),a>.6&&a<1.4&&this.app.shake.add(t*.25)}updateEscape(t){let e=this.player,i=this.van.group,s=this.app;if(!this.L.van){this.endT+=t,e.hidden||(e.hidden=!0,e.c.root.visible=!1,s.audio.play("creak")),this.endT>.5&&!this.whooshed&&(this.whooshed=!0,s.audio.play(this.heli?"chopper":"dash")),this.heli&&this.updateHeli(t),this.endT>(this.heli?3.6:2.8)&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()));return}this.endT+=t;let a=this.endT;if(a<.4){let r=a/.4;e.x=e.sx+(i.position.x-e.sx)*r,e.z=e.sz+(i.position.z-.3-e.sz)*r,e.y=Math.sin(r*Math.PI)*.9,e.face=Math.PI}else e.hidden||(e.hidden=!0,e.c.root.visible=!1,i.scale.set(1.08,.88,1.08),s.audio.play("engine"),s.shake.add(.3));i.scale.x+=(1-i.scale.x)*Math.min(1,t*10),i.scale.y+=(1-i.scale.y)*Math.min(1,t*10),i.scale.z=i.scale.x,a>.6&&(this.van.vx=Math.min(16,this.van.vx+t*14),i.position.x+=this.van.vx*t,i.rotation.z=Math.min(.06,this.van.vx*.01),Math.random()<.7&&s.particles.puff(i.position.x-1.5,.25,i.position.z,{count:1,color:14079710,size:.4,speed:.9,up:.7,life:.7})),a>2&&!this.endSent&&(this.endSent=!0,s.onWin(this.results()))}triggerAlarm(t){if(this.alarm||this.state!=="play")return;if(this.tut){for(let s of this.guards)s.state==="alert"&&(s.state="search",s.tx=this.player.x,s.tz=this.player.z);return}this.mark("alarm",this.player.x,this.player.z);let e=this.app,i=this.L.exit;this.alarm=!0,this.alarmT=this.alarmTotal,this.alarms++,this.spotted=!0,this.police.group.visible=!0,this.police.group.position.set(this.policeLane.x+40,0,this.policeLane.z),this.police.group.rotation.y=Math.PI,e.audio.play("alarm"),e.audio.siren(!0),e.flash("alarm"),e.particles.ring(this.player.x,.05,this.player.z,16726862,4,.6),e.shake.add(.25),e.onAlarm(!0,t),e.hint("alarm")}disarm(){let t=this.app,e=this.panel.group.position;this.alarm=!1,this.disarmProg=0,t.audio.siren(!1),t.audio.play("disarm"),t.onAlarm(!1),t.floaters.spawn("ALARM DISARMED",e.x,1.5,e.z,"big",1.4),t.particles.burst(e.x,1.1,e.z,{count:14,colors:[4054148,16777215],speed:2,up:2,size:.04,life:.6}),t.hintDone("alarm")}updateAlarm(t,e){if(this.panel){let l=this.alarm&&Math.sin(this.t*14)>0;this.panel.led.material.color.setHex(this.alarm?l?16722490:5900816:4054148)}{let l=this.alarm&&this.state==="play"?1:0;if(this.alarmTint+=(l-this.alarmTint)*Math.min(1,t*4),this.alarmTint>.004||this.alarmTintOn){this.alarmTintOn=this.alarmTint>.004;let o=this.alarmTintOn?this.alarmTint:0,h=Math.max(0,Math.sin(this.t*7)),c=Math.max(0,-Math.sin(this.t*7)),u=1-o*(.05+.12*c),f=1-o*(.2*h+.12*c),x=1-o*(.24*h);for(let g of this.worldMats)g.color.setRGB(u,f,x)}}let i=this.police;if(!this.alarm){i.group.visible&&this.state==="play"&&(i.group.position.x+=t*10,i.group.position.x>this.policeLane.x+45&&(i.group.visible=!1));return}let s=Math.sin(this.t*16)>0;if(i.red.material.color.setHex(s?16722490:5574682),i.blue.material.color.setHex(s?1319002:2779903),!e)return;this.alarmT-=t;let a=this.L.exit,r=Math.max(0,this.alarmT/this.alarmTotal);i.group.position.x=this.policeLane.x+2.5+r*37,this.app.onAlarmTime(Math.max(0,this.alarmT)),this.alarmT<=0&&this.policeBust()}policeBust(){this.mark("caught",this.player.x,this.player.z);let t=this.app,e=this.player;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=null,this.policeBusted=!0,this.hitstop=.15,this.juice(.5,.3,-14,.06,.04),t.shake.add(.7),t.flash("red"),t.audio.play("bust"),t.audio.siren(!1),t.floaters.spawn("POLICE!",e.x+Math.sin(e.face)*1.6,1.3,e.z+Math.cos(e.face)*1.6,"alert big",1.2),t.setPrompt("")}tutRetry(t){let e=this.player,i=this.app,s=this.tutCheck||{x:this.L.start.x+.5,z:this.L.start.y+.5};this.picking&&this.stopPick(),e.hiding&&this.leaveHide(!1),this.tutRetries++,i.floaters.spawn("Spotted!",t.x,1.9,t.z,"say alert",1.1),i.audio.play("nope"),i.flash("red"),i.shake.add(.3),e.x=s.x,e.z=s.z,e.vx=e.vz=0,e.inv=3,e.dashT=0;for(let a of this.guards)a.state==="ko"||a.state==="sleep"||a.state==="getup"||(this.baseState(a),a.susp=0,a.hurry=1);i.announce("Spotted! Back to the checkpoint. Try again: stay out of the yellow cones")}bust(t){if(this.tut&&this.state==="play"){this.tutRetry(t);return}this.mark("caught",this.player.x,this.player.z);let e=this.time;this.bustCause=this.player.hiding?"hide":t.kind==="owner"?"owner":e-(this.lastDash??-99)<2.5?"dash":e-(this.lastBark??-99)<6?"dog":e-(t.alertAt??e)>3?"los":"cone";let i=this.app;this.picking&&this.stopPick(),this.state="caught",this.endT=0,this.endSent=!1,this.catcher=t,t.face=Math.atan2(this.player.x-t.x,this.player.z-t.z),Hi(this.player.c,.55),this.hitstop=.15,this.juice(.5,.3,-14,.06,-.04),i.shake.add(.7),i.flash("red"),i.audio.play("bust"),i.audio.siren(!1),i.floaters.spawn("BUSTED!",t.x,1.5,t.z,"alert big",1.2),i.particles.ring(t.x,.05,t.z,16726862,3),i.particles.flash(t.x,1.4,t.z,16734826,1.8),i.setPrompt("")}revive(){let t=this.catcher,e=this.player;this.state="play",this.revived=!0,this.catcher=null,e.inv=2.5,Hi(e.c,1.3),t&&(this.knockout(t),this.kos--);for(let i of this.guards)i.state==="alert"&&(i.state="search",i.tx=i.lastX,i.tz=i.lastZ,i.hurry=2.4,i.susp=.5)}cutPower(){let t=this.app,e=this.breaker.group.position;this.powerOff=!0,this.breakProg=0,this.breaker.lever.rotation.x=-2.2,this.breaker.led.material.color.setHex(4054148);for(let i of this.lasers)i.group.visible=!1;for(let i of this.spots)i.pool.visible=i.cone.visible=!1;t.audio.play("powerdown"),t.shake.add(.2),t.particles.burst(e.x,e.y+.3,e.z,{count:24,colors:[16773544,8378623,16777215],speed:3,up:3,size:.04,life:.6}),t.particles.flash(e.x,e.y+.3,e.z,8378623,1.8),t.floaters.spawn("LASERS OFF",e.x,1.6,e.z,"big",1.3)}updateSlots(t){for(let e of this.slots){if(e.t<=0){e.top.visible=!1;continue}e.t-=t,e.top.visible=!0,e.top.material.color.setHSL(this.t*2%1,1,.6),e.top.scale.y=1+Math.sin(this.t*30)*.5}}updateSpots(t,e){let i=this.player,s=this.app;for(let a of this.spots){let r=a.def,l=a.len||1,o=(this.t*r.speed+(r.phase||0))%(2*l),h=(o<l?o:2*l-o)/l;if(a.x=a.ax+(a.bx-a.ax)*h,a.z=a.az+(a.bz-a.az)*h,a.pool.position.set(a.x,.03,a.z),a.cone.position.set(a.x,Ae/2,a.z),a.fix.position.set(a.x,Ae-.08,a.z),this.powerOff)continue;a.cool-=t;let c=e&&!i.hiding&&i.inv<=0&&a.cool<=0&&Math.hypot(i.x-a.x,i.z-a.z)<r.r*.9&&!this.inSmoke(i.x,i.z);a.susp=Ve(a.susp+(c?t*1.7:-t*.7),0,1),c&&(this.spotHit=!0,a.tickT-=t,a.tickT<=0&&(a.tickT=.22,s.audio.play("tick",1+a.susp)),s.hint("spot")),a.susp>=1&&(a.susp=0,a.cool=5,this.spotted=!0,s.flash("alarm"),s.shake.add(.2),this.triggerAlarm("Caught in the spotlight!"));let f=a.cool>0&&Math.sin(this.t*14)>0?16724032:a.susp>.05?a.susp>.6?16734778:16752704:16773296;a.pool.material.color.setHex(f),a.cone.material.color.setHex(f),a.pool.scale.setScalar(1+a.susp*.15)}}updateLasers(t,e){if(this.powerOff)return;let i=this.player,s=this.app;for(let a of this.lasers){let r=a.def,l=r.on+r.off,o=(this.t+(r.phase||0))%l,h=o<r.on,c=!h&&l-o<.45;if(a.on=h,a.mat.opacity=h?.75+Math.sin(this.t*40)*.15:c&&Math.sin(this.t*50)>0?.35:0,!e||!h||i.hiding)continue;let u=a.alongX?i.x:i.z,f=a.alongX?i.z:i.x;u>a.lo&&u<a.hi&&Math.abs(f-a.line)<.28&&(!this.laserHitT||this.t-this.laserHitT>1.5)&&(this.laserHitT=this.t,this.lasersTripped++,s.audio.play("zap"),s.flash("red"),s.shake.add(.3),s.particles.burst(i.x,.8,i.z,{count:14,colors:[16724032,16777215],speed:2.5,up:2,size:.04,life:.5}),this.spotted=!0,this.triggerAlarm("You tripped a laser!"))}}fakeCheckIn(t){let e=this.app;t.radioCall=2,t.answerProg=0,t.koT+=8,this.radioFaked++,e.audio.play("radioOk"),e.floaters.spawn('"All clear, over."',t.x,1.3,t.z,"big",1.3),e.hintDone("radio")}missedCheckIn(t){let e=this.app;t.radioCall=3,e.audio.play("radio"),e.floaters.spawn('\u{1F4FB} "No answer... sending backup!"',t.x,1.4,t.z,"say alert",1.4);let i=null,s=1e9;for(let a of this.guards){if(a===t||a.kind!=="guard"||["ko","getup","sleep","alert","waking"].includes(a.state))continue;let r=Math.hypot(a.x-t.x,a.z-t.z);r<s&&(s=r,i=a)}i&&(t.claimed=!0,i.state="investigate",i.tx=t.x,i.tz=t.z,i.hurry=i.speed*1.8,i.reviveT=t,i.susp=Math.max(i.susp,.7),i.navGoal=-1,e.floaters.spawn("On my way!",i.x,2,i.z,"say warn",1.1)),this.app.diff==="hard"&&this.app.mode!=="daily"&&this.app.mode!=="tutorial"&&this.triggerAlarm("A guard missed his radio check-in!")}pullSlot(t){let e=this.app,i=this.def.values;t.used=!0,t.prog=0,t.t=3,e.audio.play("jackpot"),e.shake.add(.15),e.floaters.spawn("JACKPOT!",t.cx,1.9,t.cz+t.face*.6,"big",1.4);for(let s=0;s<4;s++)setTimeout(()=>e.particles.burst(t.cx,1.3,t.cz+t.face*.4,{count:10,colors:[16766810,16773544,16777215],speed:2.2,up:3.5,size:.06,life:.9}),s*250);this.makeNoise(t.cx,t.cz,8,null,"Jackpot!?"),this.loot.push({type:"cash",x:t.cx,y:1,z:t.cz+t.face*.5,vx:(Math.random()-.5)*2,vy:4,vz:t.face*2.2,st:"fly",t:0,value:i.cash,ph:0,ms:0,s:1,rot:0})}pickpocket(t){let e=this.app,i=this.player,s=Math.sin(i.face),a=Math.cos(i.face);if(this.picks++,this.pocketProg=0,t.spareKey){if(t.spareKey=!1,t.keyMesh.visible=!1,!this.hasKey){this.hasKey=!0;for(let r of this.keyMeshes)r.m.visible=!1;e.onKey(!0),e.hint("door")}e.floaters.spawn("SPARE KEYCARD!",t.x,1.6,t.z,"big",1.2),e.audio.play("gold")}if(t.wallet>0){let r=t.wallet;t.wallet=0,t.walletMesh.visible=!1,this.lootGot+=r,this.got.cash++,e.floaters.spawn("+$"+r+" WALLET",i.x+s*1.2,1.1,i.z+a*1.2,"cash",1),e.particles.burst(i.x+s*.9,1,i.z+a*.9,{count:5,colors:[7327610,10216346],speed:1.2,up:1.4,size:.09,life:1,shape:"bill",gravity:3,drag:2.5}),e.audio.play("pick",8),e.onLoot(!1)}i.grabT=1,e.floaters.spawn("?",t.x,2,t.z,"say q",.7),e.hintDone("pocket")}smashCase(t){let e=this.app,i=this.def.values;t.smashed=!0,t.prog=0,this.casesSmashed++,t.glass.visible=!1,t.gems.visible=!1,e.audio.play("glass"),e.shake.add(.28),this.hitstop=.06,this.juice(0,1,-4,-.06,(Math.random()-.5)*.08),e.particles.burst(t.cx,1.05,t.cz,{count:26,colors:[14677247,12576511,16777215],speed:3.2,up:3,size:.07,life:.9,spin:2}),e.particles.flash(t.cx,1.1,t.cz,14677247,1.8),e.particles.burst(t.cx,.95,t.cz,{count:8,colors:[5037311,16732026,16766810],speed:1.5,up:2.5,size:.05,life:.7}),this.makeNoise(t.cx,t.cz,3.6,null);for(let s=0;s<this.caseLoot;s++){let a=Math.atan2(this.player.x-t.cx,this.player.z-t.cz)+(s-.5)*.9;this.loot.push({type:"jewel",x:t.cx,y:1,z:t.cz,vx:Math.sin(a)*re(1.5,2.4),vy:re(3.5,5),vz:Math.cos(a)*re(1.5,2.4),st:"fly",t:0,value:i.jewel,ph:s,ms:0,s:1,rot:s})}e.floaters.spawn("SMASH!",t.cx,1.6,t.cz,"ko",.8)}startPick(t){this.picking={d:t,pin:0,t:Math.random()*6,speed:this.tut?1.7:2.2,w:(this.tut?.36:.26)*this.gear.pickW,zone:.5,pos:.5,slips:0,cool:0},this.newPinZone(),this.app.audio.play("click"),this.app.onPick(this.picking)}newPinZone(){let t=this.picking,e;do e=.18+Math.random()*.64;while(Math.abs(e-t.pos)<.25);t.zone=e}stopPick(){this.picking=null,this.app.onPick(null)}updatePicking(t,e){let i=this.picking,s=this.player,a=this.app,r=i.d;if(e.move(Pi),e.consumeDash(),e.consumeThrow(),e.consumeSmoke(),s.vx=s.vz=0,s.moving=0,s.crack=!0,Math.hypot(Pi.x,Pi.y)>.5){this.stopPick();return}if(i.t+=t*i.speed,i.cool-=t,i.pos=.5+.5*Math.sin(i.t),e.consumeAct()&&i.cool<=0)if(Math.abs(i.pos-i.zone)<i.w/2){if(i.pin++,a.audio.play("pin",i.pin),a.shake.add(.05),a.particles.burst(r.x+.5,.72,r.y+.5,{count:4,colors:[16773544,16777215],speed:1,up:1,size:.025,life:.3}),i.pin>=3){i.slips===0&&(this.cleanPick=!0),this.stopPick(),this.openDoor(r);return}i.w*=.78,i.speed*=1.25,this.newPinZone()}else i.slips++,i.cool=.45,a.audio.play("slip"),a.shake.add(.15),a.floaters.spawn("*rattle*",r.x+.5,1.2,r.y+.5,"say warn",.8),this.makeNoise(r.x+.5,r.y+.5,3.4,null);a.onPick(i),a.setPrompt("picking")}openDoor(t){let e=this.app,i=t.y*this.L.W+t.x;t.open=!0,t.t=0,this.L.walk[i]=1,this.L.opaque[i]=0;for(let s of this.guards)s.navGoal=-1;if(t.type==="lock"){e.audio.play("creak"),e.hintDone("pick"),e.floaters.spawn("UNLOCKED!",t.x+.5,1.5,t.y+.5,"big",1.2),e.particles.burst(t.x+.5,.75,t.y+.5,{count:10,colors:[14267482,16777215],speed:1.5,up:1.5,size:.03,life:.5});return}t.m.led.material.color.setHex(4054148),e.audio.play("disarm"),e.audio.play("creak"),e.shake.add(.25),e.particles.puff(t.x+.5,1.2,t.y+.5,{count:6,color:15001842,size:.35,speed:1.2,up:.3,life:.8}),e.particles.flash(t.x+.5,1,t.y+.5,4054148,1.4),e.floaters.spawn("ACCESS GRANTED",t.x+.5,1.6,t.y+.5,"big",1.2)}objectiveTarget(){let t=this.L;if(this.tut&&this.tutAt)return this.tutAt;if(this.hasStash)return{x:t.exit.x,z:t.exit.z,label:t.van?"VAN":"ROOF HATCH"};if(this.tut&&this.lootGot===0){let s=this.player,a=null,r=1e9;for(let l of this.loot){let o=Math.hypot(l.x-s.x,l.z-s.z);l.type==="cash"&&o<r&&(r=o,a=l)}if(a)return{x:a.x,z:a.z,label:"CASH"}}let e=this.doors.find(s=>!s.open&&s.type!=="lock");if(e&&!this.hasKey){let s=this.keyMeshes.find(a=>a.m.visible);if(s)return{x:s.x+.5,z:s.y+.5,label:"KEYCARD"}}if(e)return{x:e.x+.5,z:e.y+.5,label:"DOOR"};let i=this.doors.find(s=>!s.open&&s.type==="lock");return i?{x:i.x+.5,z:i.y+.5,label:"LOCKED DOOR"}:{x:t.safe.x+.5,z:t.safe.y+.5,label:(this.def.safeName||"safe").toUpperCase()}}updateObjective(){let t=this.doors.find(s=>!s.open&&s.type!=="lock"),e=this.doors.find(s=>!s.open&&s.type==="lock"),i=this.hasStash?this.L.van?"Escape to the van!":"Escape through the roof hatch!":t&&!this.hasKey?"Find the keycard!":t?"Open the vault door!":e?"Pick the lock!":`Crack the ${this.def.safeName||"safe"}!`;i!==this.objText&&(this.objText=i,this.app.setObjective(i))}checkContracts(t){for(let e of this.contracts){if(e.st!=="pending")continue;let i=e.check(this,t);i!=="pending"&&(e.st=i,this.app.onContract(e,this.contracts))}}results(){let t=this.def.parTime,e=this.lootGot/this.lootTotal,i=this.contracts.reduce((l,o)=>l+(o.st==="ok"?o.bonus:0),0),s=Math.max(0,Math.round((t-this.time)*25)),a=!this.spotted,r=[!0,e>=.7,a];return{loot:this.lootGot,total:this.lootTotal,frac:e,time:this.time,ghost:a,kos:this.kos,stars:r,timeBonus:s,ghostBonus:a?1e3:0,contracts:this.contracts,contractBonus:i,diff:this.daily?"Daily "+this.daily.label:this.D.label,mult:this.D.mult,daily:!!this.daily,score:Math.round((this.lootGot+s+(a?1e3:0)+i)*this.D.mult)}}hideBadges(){for(let t of this.guards)t.badge.className="badge",t.prevBadge=""}};var yn=n=>440*Math.pow(2,(n-69)/12),ay=[[[0,0],[-4,1],[3,1],[-2,1]],[[0,0],[5,0],[7,0],[0,0]],[[0,0],[-2,1],[-4,1],[-5,1]],[[0,0],[-4,1],[5,0],[7,1]]],ry=[[1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0],[1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0],[1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0]],sl=[{prog:0,tr:0,bass:0,k:1},{prog:1,tr:2,bass:1,k:1.02},{prog:2,tr:-3,bass:2,k:.96},{prog:3,tr:-5,bass:0,k:.94},{prog:0,tr:3,bass:2,k:1.08},{prog:2,tr:1,bass:1,k:1},{prog:1,tr:-2,bass:2,k:1.1},{prog:3,tr:4,bass:1,k:1}],al=class{constructor(){this.ctx=null,this.muted=!1,this.adMuted=!1,this.hidden=!1,this.tension=0,this.step=0,this.nextT=0,this.musicOn=!0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.master.connect(this.lp).connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8*(this.sfxVol??1),this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.32*(this.musVol??1),this.mus.connect(this.master);let s=e.sampleRate;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let r=0;r<s;r++)a[r]=Math.random()*2-1;this.apply(),this.decodeSamples(),this.timer=setInterval(()=>this.sched(),40)}this.ctx.state==="suspended"&&!this.hidden&&!this.adMuted&&this.ctx.resume()}apply(){if(!this.ctx)return;let t=this.muted||this.adMuted||this.platMuted?0:1;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.03)}setVolumes(t,e){this.musVol=t,this.sfxVol=e,this.mus&&(this.mus.gain.value=.32*t,this.sfx.gain.value=.8*e)}setMuffle(t){!this.lp||this.muffled===t||(this.muffled=t,this.lp.frequency.setTargetAtTime(t?900:2e4,this.ctx.currentTime,t?.03:.15))}setMuted(t){this.muted=t,this.apply()}setPlatformMuted(t){this.platMuted=!!t,this.apply()}setAdMuted(t){this.adMuted=t,this.apply(),this.ctx&&(t?this.ctx.suspend():this.hidden||this.ctx.resume())}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend():this.adMuted||this.ctx.resume())}tone(t,e,i={}){let s=this.ctx,a=s.currentTime+(i.delay||0),r=s.createOscillator(),l=s.createGain();r.type=i.type||"square",r.frequency.setValueAtTime(t,a),i.slide&&r.frequency.exponentialRampToValueAtTime(i.slide,a+e);let o=i.vol??.15;l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(o,a+(i.attack||.006)),l.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(l).connect(i.dest||this.sfx),r.start(a),r.stop(a+e+.05)}noise(t,e={}){let i=this.ctx,s=i.currentTime+(e.delay||0),a=i.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let r=i.createBiquadFilter();r.type=e.type||"bandpass",r.frequency.setValueAtTime(e.freq||1e3,s),e.slide&&r.frequency.exponentialRampToValueAtTime(e.slide,s+t),r.Q.value=e.q??1;let l=i.createGain(),o=e.vol??.2;l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(o,s+(e.attack||.005)),l.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(r).connect(l).connect(e.dest||this.sfx),a.start(s,Math.random()*.5),a.stop(s+t+.05)}loadSamples(t="./sfx/"){this.raw||(this.raw={},this.bufs={},fetch(t+"manifest.json").then(e=>e.json()).then(e=>{this.man=e;let i=Object.values(e).flat(),s=()=>{let a=i.shift();a&&fetch(t+a).then(r=>r.arrayBuffer()).then(r=>{this.raw[a]=r,this.decodeSamples()}).catch(()=>{}).finally(s)};for(let a=0;a<4;a++)s()}).catch(()=>{}))}decodeSamples(){if(!(!this.ctx||!this.raw))for(let t of Object.keys(this.raw)){let e=this.raw[t];delete this.raw[t];try{this.ctx.decodeAudioData(e,i=>{this.bufs[t]=i},()=>{})}catch{}}}loopBuf(t){let e=this.man&&this.man[t]&&this.man[t][0];return e&&this.bufs&&this.bufs[e]||null}sample(t,e={}){let i=this.man&&this.man[t];if(!i)return!1;let s=i.filter(h=>this.bufs[h]);if(!s.length)return!1;let a=this.ctx,r=a.createBufferSource(),l=a.createGain();r.buffer=this.bufs[s[Math.random()*s.length|0]],r.playbackRate.value=(e.rate||1)*(e.jitter?1+(Math.random()-.5)*e.jitter:1),l.gain.value=e.vol??.6;let o=l;if(e.pan){let h=a.createStereoPanner();h.pan.value=e.pan,l.connect(h),o=h}return r.connect(l),o.connect(e.dest||this.sfx),r.start(a.currentTime+(e.delay||0),e.offset||0),!0}play(t,e=0){if(!this.ctx||this.ctx.state!=="running")return;let i=(o,h)=>this.sample(o,h),s=o=>Math.pow(2,o/12),a={dash:()=>i("dash",{vol:.5,jitter:.1}),pick:()=>i("pick",{vol:.55,rate:s(Math.min(e,12)*.5),jitter:.06}),gold:()=>i("gold",{vol:.6}),jewel:()=>i("jewel",{vol:.55}),art:()=>i("art",{vol:.55}),ko:()=>i("ko",{vol:.6,jitter:.12}),alert:()=>i("alert",{vol:.5}),lost:()=>i("lost",{vol:.45}),tick:()=>i("tick",{vol:.45,rate:1+Math.min(1,e)*.35,jitter:.08}),safe:()=>i("safe",{vol:.6})&&(i("coins",{vol:.5,delay:.18}),!0),win:()=>i("win",{vol:.55}),bust:()=>i("bust",{vol:.55}),alarm:()=>i("alarm",{vol:.5}),thunder:()=>i("thunder",{vol:.65,jitter:.08}),vent:()=>i("vent",{vol:.55}),clank:()=>i("clank",{vol:.55,jitter:.1}),click:()=>i("click",{vol:.5}),star:()=>i("star",{vol:.5,rate:s([0,4,7][Math.min(2,e|0)]||0)}),throw:()=>i("throw",{vol:.5,jitter:.1}),swing:()=>i("throw",{vol:.6,rate:1.3,jitter:.12}),clink:()=>i("clink",{vol:.5*Math.max(.35,Math.min(1,e||1)),jitter:.1}),disarm:()=>i("disarm",{vol:.5}),contract:()=>i("contract",{vol:.5}),creak:()=>i("creak",{vol:.5,jitter:.08}),zap:()=>i("zap",{vol:.5}),powerdown:()=>i("powerdown",{vol:.55}),smoke:()=>i("smoke",{vol:.55}),pin:()=>i("pin",{vol:.55,rate:1+e*.12}),slip:()=>i("slip",{vol:.55}),glass:()=>i("glass",{vol:.6,jitter:.1}),radio:()=>i("radio",{vol:.4}),radioOk:()=>i("radioOk",{vol:.5}),jackpot:()=>i("jackpot",{vol:.55})&&(i("coins",{vol:.45,delay:.25}),!0),nope:()=>i("nope",{vol:.45}),combo:()=>i("combo",{vol:.4,rate:s(Math.min(e,12))}),tvon:()=>i("tvon",{vol:.5}),unlock:()=>i("unlock",{vol:.55}),woof:()=>i("woof",{vol:.6,jitter:.1}),scream:()=>i("scream",{vol:.55,jitter:.08}),chopper:()=>i("chopper",{vol:.6}),engine:()=>i("engine",{vol:.55,offset:.7})};if(a[t]&&a[t]())return;let r=(o,h,c)=>this.tone(o,h,c),l=(o,h)=>this.noise(o,h);switch(t){case"step":l(.05,{vol:.05,freq:500,type:"lowpass"});break;case"dash":l(.28,{vol:.3,freq:500,slide:3e3,q:2}),r(200,.15,{type:"sine",slide:420,vol:.12});break;case"pick":{let o=880*Math.pow(2,Math.min(e,14)/12);r(o,.07,{vol:.1}),r(o*1.5,.12,{vol:.09,delay:.05});break}case"gold":[1046,1318,1568,2093].forEach((o,h)=>r(o,.18,{type:"triangle",vol:.14,delay:h*.045})),l(.3,{vol:.06,freq:8e3,type:"highpass",delay:.1});break;case"jewel":[1568,2093,2637].forEach((o,h)=>r(o,.25,{type:"sine",vol:.16,delay:h*.06}));break;case"art":[523,659,784,1046,1318].forEach((o,h)=>r(o,.2,{type:"triangle",vol:.13,delay:h*.05}));break;case"ko":r(170,.28,{type:"sine",slide:45,vol:.55}),l(.14,{vol:.35,freq:900}),r(560,.12,{slide:260,vol:.12}),r(1800,.25,{type:"triangle",slide:2400,vol:.06,delay:.12});break;case"huh":r(400,.2,{type:"triangle",slide:640,vol:.16});break;case"alert":r(880,.09,{vol:.16}),r(1320,.16,{vol:.16,delay:.1});break;case"lost":r(620,.32,{type:"triangle",slide:300,vol:.13});break;case"tick":l(.03,{vol:.22,freq:4e3,type:"highpass"}),r(1500+e*600,.04,{vol:.05});break;case"safe":r(110,.45,{type:"sine",slide:40,vol:.6}),l(.45,{vol:.45,freq:1200,type:"lowpass"}),[523,659,784,1046,1318,1568].forEach((o,h)=>r(o,.16,{vol:.09,delay:.1+h*.05}));for(let o=0;o<12;o++)r(2e3+Math.random()*2e3,.06,{type:"triangle",vol:.06,delay:.3+o*.05});break;case"win":[523,659,784,1046].forEach((o,h)=>r(o,.22,{vol:.12,delay:h*.1})),[523,659,784].forEach(o=>r(o*2,.6,{type:"triangle",vol:.1,delay:.42}));break;case"bust":r(392,.3,{type:"sawtooth",slide:370,vol:.12}),r(370,.3,{type:"sawtooth",slide:349,vol:.12,delay:.3}),r(349,.7,{type:"sawtooth",slide:250,vol:.12,delay:.6});for(let o=0;o<4;o++)r(o%2?660:880,.22,{type:"square",vol:.05,delay:o*.22});break;case"alarm":for(let o=0;o<6;o++)r(o%2?700:950,.15,{vol:.09,delay:o*.15});break;case"wake":r(300,.25,{type:"sawtooth",slide:520,vol:.1}),r(520,.2,{type:"sawtooth",slide:700,vol:.08,delay:.22});break;case"thunder":l(.25,{vol:.5,freq:900,type:"lowpass",q:.5}),l(2.8,{vol:.55,freq:220,slide:60,type:"lowpass",q:.7,attack:.08}),l(1.6,{vol:.3,freq:120,type:"lowpass",delay:.5,attack:.3});break;case"tvon":r(60,.4,{type:"sawtooth",vol:.06}),l(.35,{vol:.12,freq:5e3,type:"highpass",delay:.05});break;case"tv":{let o=Math.max(.05,e);r(180+Math.random()*260,.1+Math.random()*.08,{type:"sawtooth",vol:.035*o,slide:150+Math.random()*300}),Math.random()<.3&&r(600+Math.random()*500,.08,{type:"triangle",vol:.03*o,delay:.05}),l(.12,{vol:.03*o,freq:1600,q:2});break}case"mumble":for(let o=0;o<4;o++)r(150+Math.random()*90,.07,{type:"triangle",vol:.04,delay:o*.09,slide:120+Math.random()*80});break;case"clack":l(.05,{vol:.16,freq:260,type:"lowpass"}),l(.05,{vol:.13,freq:240,type:"lowpass",delay:.13}),r(70,.06,{type:"sine",vol:.08}),r(65,.06,{type:"sine",vol:.07,delay:.13});break;case"vent":r(140,.12,{type:"square",vol:.12}),l(.12,{vol:.3,freq:2200,q:3});for(let o=0;o<9;o++)l(.11,{vol:.16,freq:600+o%3*250,q:4,delay:.25+o*.14});break;case"clank":r(180,.1,{type:"square",vol:.13}),r(95,.18,{type:"triangle",vol:.14,delay:.03}),l(.16,{vol:.3,freq:2600,q:3});break;case"chopper":for(let o=0;o<34;o++){let h=o<8?o/8:1-(o-8)/30;l(.07,{vol:.08+h*.32,freq:160+h*120,type:"lowpass",delay:o*.09})}l(3,{vol:.08,freq:2400,type:"bandpass",q:.8,attack:.6});break;case"engine":l(1.4,{vol:.35,freq:200,slide:600,type:"lowpass"}),r(55,1.2,{type:"sawtooth",slide:140,vol:.12});break;case"click":r(700,.05,{vol:.08});break;case"star":r(784*Math.pow(2,e*4/12),.35,{type:"triangle",vol:.2}),r(1568*Math.pow(2,e*4/12),.25,{type:"sine",vol:.08,delay:.05});break;case"swing":l(.16,{vol:.2,freq:2400,slide:700,q:1.2});break;case"throw":l(.12,{vol:.15,freq:1800,slide:900,q:1.5}),r(900,.06,{type:"triangle",vol:.06});break;case"clink":{let o=.05+e*.12;r(2400+Math.random()*300,.12,{type:"triangle",vol:o}),r(3700+Math.random()*300,.18,{type:"sine",vol:o*.7,delay:.02}),e>.5&&r(3100,.25,{type:"sine",vol:o*.5,delay:.09});break}case"disarm":[1046,1318,1568,2093].forEach((o,h)=>r(o,.12,{type:"square",vol:.07,delay:h*.06}));break;case"contract":[784,988,1175,1568].forEach((o,h)=>r(o,.16,{type:"triangle",vol:.12,delay:h*.07})),r(2093,.4,{type:"sine",vol:.08,delay:.3});break;case"creak":l(.35,{vol:.12,freq:300,slide:900,q:8}),r(140,.25,{type:"sawtooth",slide:190,vol:.03});break;case"beat":r(62,.12,{type:"sine",slide:40,vol:.45}),r(58,.12,{type:"sine",slide:38,vol:.32,delay:.17});break;case"woof":r(330,.09,{type:"sawtooth",slide:170,vol:.22}),l(.08,{freq:800,vol:.18,q:2}),r(300,.11,{type:"sawtooth",slide:150,vol:.2,delay:.15}),l(.09,{freq:700,vol:.16,q:2,delay:.15});break;case"sniff":for(let o=0;o<3;o++)l(.04,{freq:2500,vol:.05,q:3,delay:o*.07});break;case"zap":r(1400,.25,{type:"sawtooth",slide:200,vol:.18}),l(.2,{freq:3e3,vol:.2,type:"highpass"});break;case"powerdown":r(440,.8,{type:"sawtooth",slide:40,vol:.16}),l(.15,{freq:2e3,vol:.25,q:.7}),r(60,.5,{type:"sine",vol:.4,delay:.05});break;case"scream":r(900,.45,{type:"sawtooth",slide:1400,vol:.09}),r(1100,.4,{type:"square",slide:1600,vol:.04,delay:.05});break;case"smoke":r(160,.12,{type:"sine",slide:60,vol:.4}),l(1.4,{freq:4e3,slide:900,vol:.22,q:.6}),l(.5,{freq:900,vol:.12,type:"lowpass",delay:.05});break;case"pin":r(2400+e*300,.05,{type:"square",vol:.08}),r(1600+e*200,.08,{type:"triangle",vol:.1,delay:.03}),l(.03,{freq:6e3,vol:.1,type:"highpass"});break;case"slip":l(.18,{freq:2200,vol:.22,q:3}),r(320,.15,{type:"square",slide:180,vol:.08}),l(.12,{freq:1500,vol:.15,q:4,delay:.08});break;case"glass":l(.5,{freq:5e3,vol:.35,type:"highpass"}),l(.25,{freq:2500,vol:.25,q:.8,delay:.02});for(let o=0;o<8;o++)r(2500+Math.random()*3500,.12,{type:"triangle",vol:.06,delay:.03+o*.035});r(140,.2,{type:"sine",slide:60,vol:.3});break;case"radio":l(.35,{freq:1800,vol:.12,q:1.2}),r(1200,.05,{type:"square",vol:.05,delay:.02}),r(900,.05,{type:"square",vol:.05,delay:.12}),l(.15,{freq:2400,vol:.08,q:2,delay:.25});break;case"radioOk":l(.12,{freq:1800,vol:.12,q:1.2}),r(1400,.06,{type:"square",vol:.06,delay:.05}),r(1800,.08,{type:"square",vol:.06,delay:.13});break;case"jackpot":for(let o=0;o<14;o++)r([1046,1318,1568,2093][o%4]*(o>9?1.5:1),.1,{type:"square",vol:.07,delay:o*.08});for(let o=0;o<18;o++)r(2400+Math.random()*1800,.06,{type:"triangle",vol:.05,delay:.3+o*.07});r(523,.6,{type:"triangle",vol:.1,delay:1.1});break;case"nope":r(220,.12,{vol:.08}),r(180,.15,{vol:.08,delay:.1});break;case"combo":r(1320+e*80,.12,{type:"triangle",vol:.1});break}}rumble(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rb){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),a=e.createGain();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=.5,s.type="lowpass",s.frequency.value=260,a.gain.value=1e-4,a.gain.setTargetAtTime(.16,e.currentTime,.6),i.connect(s).connect(a).connect(this.sfx),i.start(),this.rb={src:i,g:a}}else if(!t&&this.rb){let e=this.rb,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rb=null}}}rain(t){if(!(!this.ctx||!this.noiseBuf)){if(t&&!this.rn){let e=this.ctx,i=e.createBufferSource(),s=e.createBiquadFilter(),a=e.createBiquadFilter(),r=e.createGain(),l=this.loopBuf("rain");i.buffer=l||this.noiseBuf,i.loop=!0,s.type="lowpass",s.frequency.value=l?2600:1400,a.type="highpass",a.frequency.value=220,r.gain.value=1e-4,r.gain.setTargetAtTime(l?.5:.09,e.currentTime,.6),i.connect(s).connect(a).connect(r).connect(this.sfx),i.start(),this.rn={src:i,g:r}}else if(!t&&this.rn){let e=this.rn,i=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,i,.2),e.src.stop(i+1),this.rn=null}}}siren(t){if(!this.ctx)return;let e=this.loopBuf("siren");if(t&&!this.sir&&e){let i=this.ctx,s=i.createBufferSource(),a=i.createGain();s.buffer=e,s.loop=!0,a.gain.value=1e-4,a.gain.setTargetAtTime(.32,i.currentTime,.15),s.connect(a).connect(this.sfx),s.start(),this.sir={o:s,g:a}}else if(t&&!this.sir){let i=this.ctx,s=i.createOscillator(),a=i.createOscillator(),r=i.createGain(),l=i.createGain();s.type="sawtooth",s.frequency.value=780,a.type="square",a.frequency.value=1.6,r.gain.value=170,a.connect(r).connect(s.frequency);let o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,l.gain.value=1e-4,l.gain.setTargetAtTime(.045,i.currentTime,.2),s.connect(o).connect(l).connect(this.sfx),s.start(),a.start(),this.sir={o:s,lfo:a,g:l}}else if(!t&&this.sir){let i=this.sir,s=this.ctx.currentTime;i.g.gain.setTargetAtTime(1e-4,s,.1),i.o.stop(s+.5),i.lfo&&i.lfo.stop(s+.5),this.sir=null}}sched(){let t=this.ctx;if(!t||t.state!=="running"||!this.musicOn)return;let e=this.mode==="menu"?0:this.tension|0,s=60/(this.mode==="menu"?96:([104,110,128,140][e]||104)*(sl[this.theme||0]||sl[0]).k)/4;for(this.lvl=this.lvl==null?e:this.lvl+Math.sign(e-this.lvl)*0,this.nextT<t.currentTime&&(this.nextT=t.currentTime+.03);this.nextT<t.currentTime+.15;)this.step%16===0&&(this.lvl=e),this.mode==="menu"?this.menuBeat(this.step,this.nextT-t.currentTime):this.beat(this.step,this.nextT-t.currentTime,this.lvl),this.nextT+=s,this.step=(this.step+1)%64}pad(t,e,i,s){for(let a of t)for(let r of[-5,5]){let l=this.ctx,o=l.currentTime+i,h=l.createOscillator(),c=l.createGain(),u=l.createBiquadFilter();h.type="sawtooth",h.frequency.value=yn(a),h.detune.value=r,u.type="lowpass",u.frequency.value=900,c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(s,o+e*.35),c.gain.linearRampToValueAtTime(1e-4,o+e),h.connect(u).connect(c).connect(this.mus),h.start(o),h.stop(o+e+.05)}}beat(t,e,i){let s=this.mus,a=(p,v,b)=>this.tone(p,v,{...b,delay:e,dest:s}),r=(p,v)=>this.noise(p,{...v,delay:e,dest:s}),l=sl[this.theme||0]||sl[0],o=ay[l.prog],h=t>>4&3,[c,u]=o[h],f=45+l.tr+c,x=o.map(([p,v])=>[45+l.tr+p+12,45+l.tr+p+(v?16:15),45+l.tr+p+19]),g=f+(i>=2?12:0),m=t&15,d=ry[l.bass];if(d[m]&&a(yn(g+(m===6?7:m===13?5:0)),.18,{type:"triangle",vol:.3}),d[m]&&i>=1&&a(yn(g+12),.08,{type:"square",vol:.035}),m%4===2&&r(.03,{vol:.07,freq:7e3,type:"highpass"}),m===0&&this.pad(x[h],16*(60/(([104,110,128,140][i]||104)*l.k)/4),e,i>=2?.012:.018),i>=1){let p=x[h],v=m%3;m%2===0&&a(yn(p[v]+12),.1,{type:"sine",vol:.06}),(m===4||m===12)&&r(.04,{vol:.12,freq:2500,q:3})}i>=2&&(m%4===0&&a(120,.15,{type:"sine",slide:40,vol:.45}),(m===4||m===12)&&(r(.12,{vol:.18,freq:1800,q:.8}),a(200,.08,{type:"triangle",slide:120,vol:.12})),m%2===1&&r(.02,{vol:.06,freq:9e3,type:"highpass"}),m===14&&a(yn(g+24),.1,{type:"square",vol:.04})),i>=3&&(m===0||m===3||m===6)&&(a(yn(g+24),.12,{type:"sawtooth",vol:.05}),a(yn(g+27),.12,{type:"sawtooth",vol:.04}))}menuBeat(t,e){let i=this.mus,s=(u,f,x)=>this.tone(u,f,{...x,delay:e,dest:i}),a=(u,f)=>this.noise(u,{...f,delay:e,dest:i}),r=[[57,60,64,67],[50,53,57,60],[52,55,59,62],[57,60,64,67]],l=[45,38,40,45],o=t>>4&3,h=t&15,c=l[o];(h===0||h===7||h===10)&&s(yn(c),.25,{type:"triangle",vol:.3}),h===0&&this.pad(r[o],2.4,e,.014),(h===4||h===12)&&a(.05,{vol:.1,freq:2600,q:2.5}),h%2===0&&a(.025,{vol:.05,freq:8e3,type:"highpass"}),(h===2||h===6||h===9||h===14)&&s(yn(r[o][(h>>1)%4]+12),.12,{type:"sine",vol:.05})}stepSound(t,e=1,i=0){if(!this.ctx||this.ctx.state!=="running")return;let s={carpet:"step_carpet",tile:"step_tile",road:"step_tile",grass:"step_grass",boot:"step_tile"}[t]||"step_wood";if(this.sample(s,{vol:.32*e*(t==="boot"?1.15:1),rate:t==="boot"?.85:1,jitter:.1,pan:i}))return;let a=this.sfx;if(i){let o=this.ctx.createStereoPanner();o.pan.value=i,o.connect(this.sfx),a=o}let r=(o,h)=>this.noise(o,{...h,vol:(h.vol||.1)*e,dest:a}),l=(o,h,c)=>this.tone(o,h,{...c,vol:(c.vol||.1)*e,dest:a});switch(t){case"carpet":r(.07,{vol:.05,freq:300,type:"lowpass"});break;case"tile":r(.03,{vol:.09,freq:3200,q:1.5}),l(900+Math.random()*200,.03,{type:"triangle",vol:.03});break;case"grass":r(.09,{vol:.07,freq:1400,q:.6});break;case"road":r(.06,{vol:.08,freq:900,q:.9});break;case"boot":r(.06,{vol:.1,freq:450,type:"lowpass"}),l(110,.06,{type:"sine",vol:.08});break;default:r(.05,{vol:.07,freq:600,type:"lowpass"}),l(170+Math.random()*30,.05,{type:"sine",vol:.06})}}};var Oa={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"},oy=new Set([...Object.keys(Oa),"Space","ShiftLeft","ShiftRight","KeyE","KeyF","Enter"]),Zu=2.4,rl=class{constructor(t){this.k={},this.act=!1,this.actP=!1,this.dashP=!1,this.lx=0,this.ly=0,this.joy={id:-1,ox:0,oy:0,x:0,y:0},this.look={id:-1,x:0,y:0},this.handlers={},this.touch=(matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0)&&!matchMedia("(pointer: fine)").matches,this.els=t,this.locked=!1,this.lockFailed=!1,this.active=!1,this.dragLook=!1,addEventListener("keydown",o=>{oy.has(o.code)&&o.preventDefault(),this.setTouch(!1),!o.repeat&&(Oa[o.code]&&(this.k[Oa[o.code]]=1),(o.code==="Space"||o.code.startsWith("Shift"))&&(this.dashP=!0),(o.code==="KeyE"||o.code==="KeyF"||o.code==="Enter")&&(this.act=!0,this.actP=!0),(o.code==="Escape"||o.code==="KeyP")&&this.emit("pause"),o.code==="KeyR"&&this.emit("restart"),o.code==="KeyM"&&this.emit("mute"),(o.code==="KeyQ"||o.code==="KeyG")&&(this.throwP=!0),(o.code==="KeyC"||o.code==="KeyX")&&(this.smokeP=!0),(o.code==="KeyZ"||o.code==="ControlRight")&&(this.crouchP=!0),this.emit("key",o.code))}),addEventListener("keyup",o=>{Oa[o.code]&&(this.k[Oa[o.code]]=0),(o.code==="KeyE"||o.code==="KeyF"||o.code==="Enter")&&(this.act=!1)}),addEventListener("blur",()=>{this.k={},this.act=!1,this.joyEnd(),this.look.id=-1});let e=t.canvas;e.addEventListener("mousedown",o=>{if(this.active){if(!this.locked&&!this.lockFailed&&!this.touch){this.requestLock();return}o.button===0&&(this.atkP=!0),o.button===2&&(this.dashP=!0),o.button===1&&(this.throwP=!0),this.dragLook=!0}}),addEventListener("mouseup",()=>{this.dragLook=!1}),addEventListener("contextmenu",o=>o.preventDefault()),addEventListener("mousemove",o=>{if(this.active&&(this.locked||this.lockFailed&&this.dragLook)){let h=o.movementX||0,c=o.movementY||0;if(performance.now()-(this.lockT||0)<150||Math.abs(h)>260||Math.abs(c)>260)return;this.lx+=h,this.ly+=c}}),addEventListener("pointermove",o=>{o.pointerType==="mouse"&&(o.movementX||o.movementY)&&this.setTouch(!1)}),addEventListener("pointerdown",o=>{o.pointerType==="touch"&&this.setTouch(!0)},!0),document.addEventListener("pointerlockchange",()=>{let o=this.locked;this.locked=document.pointerLockElement===e,this.locked&&!o&&(this.lockT=performance.now(),this.lx=0,this.ly=0,this.emit("lock")),o&&!this.locked&&this.emit("unlock")}),document.addEventListener("pointerlockerror",()=>{this.lockFailed=!0});let i=t.joyzone;i.addEventListener("pointerdown",o=>{if(this.joy.id===-1){o.preventDefault(),this.joy.id=o.pointerId,this.joy.ox=o.clientX,this.joy.oy=o.clientY,this.joy.x=0,this.joy.y=0;try{i.setPointerCapture(o.pointerId)}catch{}t.joy.style.display="block",t.joy.style.transform=`translate(${o.clientX}px,${o.clientY}px)`,t.knob.style.transform="translate(-50%,-50%)"}}),i.addEventListener("pointermove",o=>{if(o.pointerId!==this.joy.id)return;let h=56,c=o.clientX-this.joy.ox,u=o.clientY-this.joy.oy,f=Math.hypot(c,u);f>h&&(this.joy.ox+=c/f*(f-h),this.joy.oy+=u/f*(f-h),t.joy.style.transform=`translate(${this.joy.ox}px,${this.joy.oy}px)`,c=c/f*h,u=u/f*h),this.joy.x=c/h,this.joy.y=u/h,t.knob.style.transform=`translate(calc(-50% + ${c}px),calc(-50% + ${u}px))`});let s=o=>{o.pointerId===this.joy.id&&this.joyEnd()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s);let a=t.lookzone;a.addEventListener("pointerdown",o=>{if(this.look.id===-1){o.preventDefault(),this.look.id=o.pointerId,this.look.x=o.clientX,this.look.y=o.clientY;try{a.setPointerCapture(o.pointerId)}catch{}}}),a.addEventListener("pointermove",o=>{o.pointerId===this.look.id&&(this.lx+=(o.clientX-this.look.x)*Zu,this.ly+=(o.clientY-this.look.y)*Zu,this.look.x=o.clientX,this.look.y=o.clientY)});let r=o=>{o.pointerId===this.look.id&&(this.look.id=-1)};a.addEventListener("pointerup",r),a.addEventListener("pointercancel",r);let l=(o,h,c)=>{o.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),o.classList.add("down"),h()});let u=()=>{o.classList.remove("down"),c&&c()};o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u),o.addEventListener("pointerleave",u)};l(t.bAct,()=>{this.act=!0,this.actP=!0},()=>{this.act=!1}),t.bHit&&l(t.bHit,()=>{this.atkP=!0}),l(t.bDash,()=>{this.dashP=!0}),l(t.bThrow,()=>{this.throwP=!0}),l(t.bSmoke,()=>{this.smokeP=!0}),l(t.bSneak,()=>{this.crouchP=!0})}requestLock(){if(this.touch||this.locked)return;let t=this.els.canvas;if(!t.requestPointerLock){this.lockFailed=!0;return}try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}joyEnd(){this.joy.id=-1,this.joy.x=0,this.joy.y=0,this.els.joy&&(this.els.joy.style.display="none")}setTouch(t){this.touch!==t&&(this.touch=t,this.emit("mode",t))}on(t,e){this.handlers[t]=e}emit(t,e){this.handlers[t]&&this.handlers[t](e)}move(t){let e=(this.k.r||0)-(this.k.l||0),i=(this.k.d||0)-(this.k.u||0);if(e||i){let s=Math.hypot(e,i);e/=s,i/=s}else if(this.joy.id!==-1){let s=Math.hypot(this.joy.x,this.joy.y);if(s>.15){let a=Math.min(1,(s-.15)/.65)/s;e=this.joy.x*a,i=this.joy.y*a}}return t.x=e,t.y=i,t}consumeLook(t){return t.x=this.lx,t.y=this.ly,this.lx=0,this.ly=0,t}consumeAtk(){let t=this.atkP;return this.atkP=!1,t}consumeAct(){let t=this.actP;return this.actP=!1,t}consumeDash(){let t=this.dashP;return this.dashP=!1,t}consumeCrouch(){let t=this.crouchP;return this.crouchP=!1,t}consumeSmoke(){let t=this.smokeP;return this.smokeP=!1,t}consumeThrow(){let t=this.throwP;return this.throwP=!1,t}clear(){this.atkP=!1,this.actP=!1,this.dashP=!1,this.throwP=!1,this.smokeP=!1,this.lx=0,this.ly=0}};function ly(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(26,24,4,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.7,"rgba(236,236,244,1)"),e.addColorStop(.93,"rgba(200,200,214,1)"),e.addColorStop(1,"rgba(200,200,214,0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,30,0,6.3),t.fill();let i=new li(n);return i.colorSpace=Me,i}function cy(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,14,32,32,31);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.55,"rgba(255,255,255,.15)"),e.addColorStop(.8,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new li(n)}function hy(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,14);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="#fff",t.beginPath();for(let s=0;s<8;s++){let a=s*Math.PI/4,r=s%2?5:31;t.lineTo(32+Math.cos(a)*r,32+Math.sin(a)*r)}return t.fill(),new li(n)}var Fa=new Re,za=new Nt,ol=new X,ll=class{constructor(t,e=360){this.max=e,this.mesh=new En(new ce(1,1,1),new At,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,za.set(16777215)),t.add(this.mesh),this.list=[],this.fx=new nh(t)}flash(t,e,i,s=16777215,a=1.6,r=.28){this.fx.add("flash",t,e,i,{c:s,s:a,life:r})}ring(t,e,i,s=16777215,a=2.6,r=.45){this.fx.add("ring",t,Math.max(.04,e),i,{c:s,s:a,life:r})}puff(t,e,i,s={}){let a=s.count??6;for(let r=0;r<a;r++){let l=Math.random()*6.283,o=re(.3,1)*(s.speed??1.2);this.fx.add("puff",t+re(-1,1)*(s.spread??.15),e+re(0,.15),i+re(-1,1)*(s.spread??.15),{c:s.color??16777215,s:re(.7,1.2)*(s.size??.45),life:re(.7,1)*(s.life??.8),vx:Math.cos(l)*o,vy:re(.4,1)*(s.up??.8),vz:Math.sin(l)*o,drag:2.5})}}burst(t,e,i,s={}){let a=s.count??10,r=s.colors||[16777215];if((s.size??.12)<.065&&s.shape!=="bill"&&!s.cube){for(let l=0;l<a;l++){let o=Math.random()*Math.PI*2,h=re(.4,1)*(s.speed??3);this.fx.add(Math.random()<.3?"star":"spark",t+re(-1,1)*(s.spread??.1),e,i+re(-1,1)*(s.spread??.1),{c:r[Math.random()*r.length|0],s:re(.7,1.2)*(s.size??.05)*5.5,life:re(.6,1)*(s.life??.7)*1.2,vx:Math.cos(o)*h,vy:re(.5,1)*(s.up??3),vz:Math.sin(o)*h,g:(s.gravity??9)*.6,drag:s.drag??1.8})}return}for(let l=0;l<a&&this.list.length<this.max;l++){let o=Math.random()*Math.PI*2,h=re(.4,1)*(s.speed??3);this.list.push({x:t+re(-1,1)*(s.spread??.1),y:e,z:i+re(-1,1)*(s.spread??.1),vx:Math.cos(o)*h,vy:re(.5,1)*(s.up??3),vz:Math.sin(o)*h,g:s.gravity??9,life:re(.6,1)*(s.life??.7),t:0,s:re(.6,1.1)*(s.size??.12),c:r[Math.random()*r.length|0],rx:re(0,6),rs:re(-10,10)*(s.spin??1),drag:s.drag??1.5,kx:s.shape==="bill"?1.7:1,ky:s.shape==="bill"?.08:1,kz:s.shape==="bill"?.85:1,flut:s.shape==="bill"?re(2,5):0})}}update(t,e){e&&this.fx.update(t,e);let i=this.list,s=0;for(let a=i.length-1;a>=0;a--){let r=i[a];if(r.t+=t,r.t>=r.life){i[a]=i[i.length-1],i.pop();continue}}for(let a of i){let r=Math.exp(-a.drag*t);a.vx*=r,a.vz*=r,a.vy-=a.g*t,a.flut&&(a.vy=Math.max(a.vy,-.9),a.vx+=Math.sin(a.t*a.flut*2)*t*1.5),a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.y<.03&&(a.y=.03,a.vy*=-.4,a.vx*=.7,a.vz*=.7),a.rx+=a.rs*t;let l=1-a.t/a.life,o=a.s*Math.min(1,l*2.5);Fa.position.set(a.x,a.y,a.z),Fa.rotation.set(a.flut?Math.sin(a.rx)*.8:a.rx,a.rx*.7,a.flut?Math.cos(a.rx*.7)*.6:0),Fa.scale.set(o*a.kx,o*a.ky,o*a.kz),Fa.updateMatrix(),this.mesh.setMatrixAt(s,Fa.matrix),this.mesh.setColorAt(s,za.setHex(a.c)),s++}this.mesh.count=s,s&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0)}clear(){this.list.length=0,this.mesh.count=0,this.fx.clear()}},ss=new Re,nh=class{constructor(t){let e=new je(1,1),i=pi(),s=(a,r,l)=>{let o=new En(e,new At({map:a,transparent:!0,depthWrite:!1,blending:r?Le:void 0,toneMapped:!1,fog:!1}),l);return o.frustumCulled=!1,o.count=0,o.renderOrder=8,o.setColorAt(0,za.set(16777215)),t.add(o),o};this.m={spark:s(i.glow,!0,240),star:s(hy(),!0,120),ring:s(cy(),!0,24),puff:s(ly(),!1,90)},this.m.flash=this.m.spark,this.list=[]}add(t,e,i,s,a){this.list.length>460||this.list.push({k:t,x:e,y:i,z:s,t:0,vx:0,vy:0,vz:0,g:0,drag:0,rot:re(0,6.28),...a})}update(t,e){let i=this.list,s={spark:0,star:0,ring:0,puff:0};for(let a=i.length-1;a>=0;a--){let r=i[a];r.t+=t,r.t>=r.life&&(i[a]=i[i.length-1],i.pop())}for(let a of i){let r=a.t/a.life,l=Math.exp(-a.drag*t);a.vx*=l,a.vz*=l,a.vy=a.vy*l-a.g*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.y<.03&&(a.y=.03,a.vy*=-.3);let o=a.s,h=1;a.k==="flash"?(o=a.s*(.5+r*.9),h=(1-r)*(1-r)):a.k==="ring"?(o=a.s*(.15+Math.sqrt(r)*.85),h=1-r):a.k==="puff"?o=a.s*(r<.25?.4+r*2.4:1-(r-.25)*1.1):(h=Math.min(1,(1-r)*2.5),o=a.s*(a.k==="star"?.6+.4*Math.abs(Math.sin(a.t*14+a.rot)):1));let c=a.k==="flash"?"spark":a.k,u=this.m[c],f=s[c];if(!(f>=u.instanceMatrix.count)){if(ss.position.set(a.x,a.y,a.z),a.k==="ring"?ss.rotation.set(-Math.PI/2,0,0):(ss.quaternion.copy(e.quaternion),a.k!=="spark"&&a.k!=="flash"&&ss.rotateZ(a.rot+a.t*(a.k==="star"?3:.8))),ss.scale.set(o,o,o),ss.updateMatrix(),u.setMatrixAt(f,ss.matrix),a.k==="puff"){let x=.82+.18*(1-r);u.setColorAt(f,za.setHex(a.c).multiplyScalar(x))}else u.setColorAt(f,za.setHex(a.c).multiplyScalar(h));s[c]=f+1}}for(let a of["spark","star","ring","puff"]){let r=this.m[a];r.count=s[a],s[a]&&(r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0)}}clear(){this.list.length=0;for(let t of["spark","star","ring","puff"])this.m[t].count=0}},cl=class{constructor(){this.trauma=0,this.x=0,this.y=0,this.t=0}add(t){this.trauma=Math.min(1,this.trauma+t*(this.scale??1))}update(t){this.t+=t,this.trauma=Math.max(0,this.trauma-t*1.6);let e=this.trauma*this.trauma*.6;this.x=e*(Math.sin(this.t*71)+Math.sin(this.t*37)*.5),this.y=e*(Math.cos(this.t*63)+Math.sin(this.t*29)*.5)}},hl=class{constructor(t){this.layer=t,this.pool=[],this.live=[]}spawn(t,e,i,s,a="",r=1){let l=this.pool.pop();l||(l=document.createElement("div"),this.layer.appendChild(l)),l.className="ft "+a+(a.startsWith("say")&&t.length<=3?" short":""),l.textContent=t,l.style.opacity="1",l.style.display="",l.style.animation="none",l.offsetWidth,l.style.animation="",this.live.push({el:l,x:e,y:i,z:s,t:0,life:r})}update(t,e,i,s){for(let a=this.live.length-1;a>=0;a--){let r=this.live[a];if(r.t+=t,r.y+=t*.9,r.t>=r.life){r.el.style.display="none",this.pool.push(r.el),this.live.splice(a,1);continue}ol.set(r.x,r.y,r.z).project(e),r.el.style.visibility=ol.z>1?"hidden":"";let l=Math.hypot(r.x-e.position.x,r.y-e.position.y,r.z-e.position.z),o=Math.max(.55,Math.min(1.1,3.4/(l||1)));r.el.style.transform=`translate(${(ol.x+1)/2*i}px,${(1-ol.y)/2*s}px) translate(-50%,-50%) scale(${o.toFixed(2)})`,r.t>r.life*.6&&(r.el.style.opacity=String(1-(r.t-r.life*.6)/(r.life*.4)))}}clear(){for(let t of this.live)t.el.style.display="none",this.pool.push(t.el);this.live.length=0}};var fl="safehouse-heist-v1",Gi=null,ul=!1,Ba=!1,$t={available:!1,env:"none",hooks:{adStart:()=>{},adEnd:()=>{}},async init(){try{let n=window.CrazyGames&&window.CrazyGames.SDK;if(!n)return;await Promise.race([n.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),4e3))]),this.env=n.environment,(this.env==="crazygames"||this.env==="local")&&(Gi=n,this.available=!0)}catch(n){console.warn("[SDK] not available:",n&&n.message)}},_c(n){if(Gi)try{n(Gi)}catch(t){console.warn("[SDK]",t)}},loadingStart(){this._c(n=>n.game.loadingStart())},loadingStop(){this._c(n=>n.game.loadingStop())},gameplayStart(){ul||(ul=!0,this._c(n=>n.game.gameplayStart()))},gameplayStop(){ul&&(ul=!1,this._c(n=>n.game.gameplayStop()))},happytime(){this._c(n=>n.game.happytime())},onSettings(n){this._c(t=>{let e=t.game;e.settings&&n(e.settings),e.addSettingsChangeListener&&e.addSettingsChangeListener(i=>n(i))})},ad(n){return new Promise(t=>{if(!Gi||!Ba){t(!1);return}let e=!1,i=s=>{e&&this.hooks.adEnd(),t(s)};try{Gi.ad.requestAd(n,{adStarted:()=>{e=!0,this.hooks.adStart()},adFinished:()=>i(!0),adError:s=>{console.warn("[SDK] ad error",s),i(!1)}})}catch{i(!1)}})},load(){try{let n=null;return Gi&&Gi.data&&(n=Gi.data.getItem(fl)),n==null&&(n=localStorage.getItem(fl)),n&&JSON.parse(n)||{}}catch{return{}}},store(n){let t=JSON.stringify(n);try{Gi&&Gi.data&&Gi.data.setItem(fl,t)}catch{}try{localStorage.setItem(fl,t)}catch{}}};var ii=[{id:"safehouse",num:1,owner:!0,dog:!0,name:"Safe House",load:()=>import("./c-AS2BBBZL.js")},{id:"bank",num:2,name:"The Bank",unlock:"safehouse",load:()=>import("./c-UA7ROTIC.js")},{id:"jewelry",num:3,name:"Jewelry Store",unlock:"bank",load:()=>import("./c-Y3VF5QVP.js")},{id:"museum",num:4,dog:!0,name:"The Museum",unlock:"jewelry",load:()=>import("./c-EHV74VXP.js")},{id:"casino",num:5,name:"The Casino",unlock:"museum",load:()=>import("./c-TLRJETZW.js")},{id:"penthouse",num:6,owner:!0,name:"The Penthouse",unlock:"casino",load:()=>import("./c-VIC3C7Q5.js")},{id:"train",num:7,name:"Night Train",unlock:"penthouse",load:()=>import("./c-NPY7BHPC.js")},{id:"warehouse",num:8,dog:!0,name:"The Warehouse",unlock:"train",load:()=>import("./c-54A6G2KB.js")},{id:"mansion",num:9,name:"Mansion Gala",unlock:"warehouse",load:()=>import("./c-IMNGXOEP.js")}],sh={};async function Ju(n){return sh[n]||(sh[n]=(await ii[n].load()).default),sh[n]}var fy={sleeve:3123354,sleeve2:2526336,cuff:2060134,glove:2763837,glove2:3816786,bar:14168890,barHi:16747146,band:15905076},dl=class{constructor(){this.scene=new qn,this.camera=new Je(60,1,.01,10),this.hemi=new $n(16770760,6969464,2.4),this.scene.add(this.hemi);let t=new Kn(16769208,1.5);t.position.set(-1,2,1.5),this.scene.add(t);let e=this.mat=new we({vertexColors:!0});this.root=new zt,this.scene.add(this.root),this.R=new zt,this.R.position.set(.23,-.29,0),this.R.rotation.y=.16,this.root.add(this.R),this.L=new zt,this.L.position.set(-.2,-.27,0),this.L.rotation.y=-.16,this.root.add(this.L),this.setOutfit(null),this.swX=0,this.swY=0,this.down=0,this.lIn=0,this.t=0,this.kick=0,this.visible=!0}setOutfit(t){t=t||fy;let e=this.mat;for(let h of this.parts||[])h.parent.remove(h),h.geometry.dispose();let i=h=>{let c=new kt;if(c.box(0,-.075,-.285,.14,.14,.17,t.sleeve,{faces:63}),c.box(0,-.082,-.24,.152,.152,.05,t.sleeve2,{faces:63}),c.box(0,-.08,-.36,.148,.148,.1,t.sleeve,{faces:63}),c.box(0,-.082,-.44,.155,.155,.07,t.cuff,{faces:63}),c.box(0,-.082,-.448,.158,.02,.05,t.band,{faces:63}),h){c.box(0,-.065,-.5,.12,.13,.05,t.glove,{faces:63}),c.box(0,-0,-.5,.05,.03,.055,14267482,{faces:63}),c.box(0,-.07,-.57,.15,.06,.13,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.055+u*.037,-.072,-.67,.032,.05,.09,t.glove,{faces:63,top:t.glove2});c.box(.09,-.07,-.56,.045,.05,.08,t.glove,{faces:63,ry:-.5})}else{c.box(0,-.07,-.56,.13,.12,.14,t.glove,{faces:63,top:t.glove2});for(let u=0;u<4;u++)c.box(-.045+u*.03,-.01,-.6,.027,.03,.05,t.glove2,{faces:63});c.box(-.07,-.04,-.55,.04,.05,.08,t.glove,{faces:63})}return c.build()},s=new dt(i(!1),e);s.scale.set(.56,.6,1),this.R.add(s);let a=new kt,r=12108496,l=8029334;a.box(0,-.2,0,.034,.08,.034,r,{faces:63}),a.box(0,-.235,.012,.03,.04,.02,l,{faces:63}),a.box(0,-.12,0,.042,.42,.042,t.bar,{faces:63}),a.box(0,-.1,0,.046,.12,.046,2237487,{faces:63}),a.box(0,.3,0,.038,.07,.038,r,{faces:63}),a.box(0,.36,-.035,.036,.036,.1,r,{faces:63,top:14673647}),a.box(0,.33,-.095,.034,.05,.03,r,{faces:63}),a.box(0,.305,-.1,.03,.03,.022,r,{faces:63}),a.box(.02,-.05,.022,.006,.3,.002,t.barHi,{faces:16}),this.bar=new dt(a.build(),e),this.bar.position.set(0,-.035,-.57),this.bar.scale.set(.8,.88,.8),this.bar.rotation.set(-.72,.15,-.5),this.R.add(this.bar);let o=new dt(i(!0),e);o.scale.set(.56,.6,1),this.L.add(o),this.parts=[s,this.bar,o]}resize(t,e){this.camera.aspect=t,this.camera.fov=t<1?88:60,this.camera.updateProjectionMatrix(),this.root.scale.setScalar(t<1?.9:.92),this.root.userData.px=t<1?-.03:0}update(t,e){this.t+=t;let i=this.R,s=this.L;this.swX=Te(this.swX,Ve(-e.lookX*9e-4,-.06,.06),10,t),this.swY=Te(this.swY,Ve(e.lookY*9e-4,-.06,.06),10,t),this.down=Te(this.down,e.busted?.7:0,6,t),this.kick=Te(this.kick,e.dash?1:0,14,t);let a=e.move,r=Math.cos(e.bob)*.014*a,l=-Math.abs(Math.sin(e.bob))*.02*a+Math.sin(this.t*1.8)*.004;this.root.position.set((this.root.userData.px||0)+this.swX+r,this.swY+l-this.down,-.12+this.kick*.08),this.root.rotation.z=this.kick*.08;let o=.14,h=0,c=0,u=0,f=0;if(e.punch>0){let m=1-e.punch,d={rx:.9,rz:-.45,ry:-.3,px:.05},p={rx:0,rz:.7,ry:.62,px:-.12},v=(b,y,M)=>b+(y-b)*M;if(m<.22){let b=m/.22;o=v(.14,d.rx,b),h=d.rz*b,f=d.ry*b,u=d.px*b}else if(m<.5){let b=(m-.22)/.28;o=v(d.rx,p.rx,b),h=v(d.rz,p.rz,b),f=v(d.ry,p.ry,b),u=v(d.px,p.px,b),c=-.08*b}else{let b=(m-.5)/.5;o=v(p.rx,.14,b),h=p.rz*(1-b),f=p.ry*(1-b),u=p.px*(1-b),c=-.08*(1-b)}}else e.crack&&(o=.35+Math.sin(this.t*38)*.08,h=Math.sin(this.t*23)*.1,c=-.06);let x=e.punch>0?45:14;i.rotation.x=Te(i.rotation.x,o,x,t),i.rotation.z=Te(i.rotation.z,h,e.punch>0?45:20,t),i.rotation.y=Te(i.rotation.y,.16+f,x,t),i.position.x=Te(i.position.x,.23+u,x,t),i.position.z=Te(i.position.z,c,e.punch>0?40:12,t);let g=e.grab>0||e.crack?1:0;this.lIn=Te(this.lIn,g,g?18:8,t),s.visible=this.lIn>.02,s.position.y=-.27-(1-this.lIn)*.45,s.position.z=.02-(e.grab>0?Math.sin(Math.min(1,e.grab)*Math.PI)*.12:0),s.rotation.x=e.crack?.25:.1,s.rotation.z=e.crack?Math.sin(this.t*9)*.35:0}render(t){this.visible&&(t.clearDepth(),t.render(this.scene,this.camera))}};var On=[["Rookie",0],["Pickpocket",40],["Burglar",120],["Safecracker",250],["Cat Burglar",450],["Infiltrator",750],["Phantom",1150],["Heist Pro",1700],["Vault Breaker",2400],["Mastermind",3300],["Kingpin",4500],["Legend",6e3]];function pl(n){let t=0;for(;t+1<On.length&&n>=On[t+1][1];)t++;let e=On[t][1],i=t+1<On.length?On[t+1][1]:e;return{i:t,name:On[t][0],lvl:t+1,frac:i>e?(n-e)/(i-e):1,next:t+1<On.length?On[t+1][0]:null,toNext:i-n}}var ju=(n,t,e)=>n?Math.max(10,Math.round(t/100)):4+Math.round((e||0)/250);var Qu=n=>String(n).padStart(2,"0"),nn=(n=new Date)=>`${n.getFullYear()}${Qu(n.getMonth()+1)}${Qu(n.getDate())}`,Ha=()=>{let n=new Date;return n.setDate(n.getDate()-1),nn(n)},uy=(n=new Date)=>n.toLocaleDateString("en-US",{month:"short",day:"numeric"}),ah=[{id:"paranoid",name:"Paranoid Guards",desc:"Guards see 30% further",apply:n=>n.guards.forEach(t=>{t.range*=1.3})},{id:"insomniac",needs:"owner",name:"Insomniac Owner",desc:"The owner is awake and patrolling",apply:n=>n.guards.forEach(t=>{if(t.state!=="sleep")return;let e=t.def.path[0];t.state="patrol",t.x=e[0]+.5,t.z=e[1]+.5,t.wp=1,t.c.root.rotation.x=0,t.c.root.position.y=0})},{id:"goldrush",name:"Gold Rush",desc:"Gold and jewels are worth 3x",apply:n=>{for(let t of n.loot)(t.type==="gold"||t.type==="jewel")&&(n.lootTotal+=t.value*2,t.value*=3)}},{id:"butter",name:"Butterfingers",desc:"No coins this time",apply:n=>{n.coinsLeft=0}},{id:"rush",name:"Rapid Response",desc:"Police arrive in 20s",apply:n=>{n.alarmTotal=20}},{id:"hound",needs:"dog",name:"Hungry Hound",desc:"The dog is 50% faster",apply:n=>n.dogs.forEach(t=>{t.mul=1.5})}];function td(n=[{idx:0,owner:!0,dog:!0}]){let t=nn(),e=Ri(parseInt(t,10)*7919),i=n[e()*n.length|0]||n[0],s=ah.filter(r=>!r.needs||i[r.needs]),a=s[e()*s.length|0];return{key:t,label:uy(),mutator:a,level:i.idx,seed:e()*1e9|0}}function ml(){let n=new Date,t=new Date(n);t.setHours(24,0,0,0);let e=Math.max(0,(t-n)/1e3),i=Math.floor(e/3600),s=Math.floor(e%3600/60);return i?`${i}h ${s}m`:`${s}m`}function rh(){let n=new Date,t=new Date(n.getFullYear(),n.getMonth(),n.getDate()),e=(t.getDay()+6)%7,i=new Date(t);i.setDate(t.getDate()-e);let s=Math.round(i.getTime()/864e5/7),a=new Date(i);a.setDate(i.getDate()+7);let r=Math.max(0,a-n),l=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5);return{week:s,left:l?`${l}d ${o}h`:`${o}h`}}var ed=[{id:"ko",n:5,text:"Knock out 5 guards",v:n=>n.kos},{id:"loot",n:8e3,text:"Steal $8,000 of loot",v:n=>Math.round(n.loot||0),money:!0},{id:"esc",n:3,text:"Escape 3 heists",v:n=>n.win?1:0},{id:"ghost",n:1,text:"Escape without being spotted",v:n=>n.win&&n.ghost?1:0},{id:"pick",n:3,text:"Pickpocket 3 guards",v:n=>n.picks||0},{id:"vent",n:2,text:"Crawl through 2 air vents",v:n=>n.vents||0},{id:"close",n:3,text:"Survive 3 close calls",v:n=>n.close||0},{id:"coin",n:6,text:"Throw 6 coins",v:n=>n.coins||0},{id:"hide",n:3,text:"Hide in a wardrobe 3 times",v:n=>n.hides||0},{id:"ctr",n:4,text:"Complete 4 contracts",v:n=>n.contractsDone||0},{id:"fast",n:1,text:"Escape in under 90 seconds",v:n=>n.win&&n.time<90?1:0},{id:"radio",n:2,text:"Fake 2 radio check-ins",v:n=>n.radio||0},{id:"sweep",n:1,text:"Escape with 70% of the loot",v:n=>n.win&&n.frac>=.7?1:0}],xl=1500,gl=2500;function Ga(n){let t=nn();if(!n.jobs||n.jobs.key!==t){let e=Ri(parseInt(t,10)*31+7),i=ed.slice(),s=[];for(;s.length<3;)s.push(i.splice(e()*i.length|0,1)[0].id);n.jobs={key:t,ids:s,prog:{},done:{},bonus:!1}}return n.jobs}var yl=n=>ed.find(t=>t.id===n);function oh(n,t){let e=Ga(n),i=[];for(let a of e.ids){if(e.done[a])continue;let r=yl(a);e.prog[a]=Math.min(r.n,(e.prog[a]||0)+(r.v(t)||0)),e.prog[a]>=r.n&&(e.done[a]=!0,i.push(r),n.cash=(n.cash||0)+xl)}let s=!1;return!e.bonus&&e.ids.every(a=>e.done[a])&&(e.bonus=s=!0,n.cash=(n.cash||0)+gl),{fresh:i,bonus:s}}var Va=[{id:"coins",icon:"\u{1FA99}",name:"Coin Pouch",desc:"+1 coin per run",prices:[3e3,8e3,2e4]},{id:"smoke",icon:"\u{1F4A8}",name:"Smoke Belt",desc:"+1 smoke bomb per run",prices:[6e3,18e3]},{id:"shoes",icon:"\u{1F45F}",name:"Soft Shoes",desc:"Sneak 15% faster",prices:[4e3,1e4,25e3]},{id:"pick",icon:"\u{1F513}",name:"Lockpick Kit",desc:"Wider pick zone, crack safes 12% faster",prices:[3500,9e3,22e3]},{id:"tailor",icon:"\u{1F574}",name:"Tailor",desc:"+8 s in a guard uniform",prices:[5e3,15e3]}],Wa=(n,t)=>Math.min((n.gear||{})[t]||0,Va.find(e=>e.id===t).prices.length),vl=(n,t)=>t.prices[Wa(n,t.id)]??null;function id(n,t){let e=i=>t?Wa(n,i):0;return{coins:e("coins"),smoke:e("smoke"),sneak:1+.15*e("shoes"),pickW:1+.15*e("pick"),crack:1+.12*e("pick"),disguise:8*e("tailor")}}var zs=[{id:"first",icon:"\u{1F4B0}",name:"First Score",desc:"Escape with the stash",check:(n,t)=>t.win},{id:"ghost",icon:"\u{1F47B}",name:"Ghost",desc:"Escape without ever being spotted",check:(n,t)=>t.win&&t.ghost},{id:"speed",icon:"\u26A1",name:"Speed Demon",desc:"Escape in under 45 seconds",check:(n,t)=>t.win&&t.time<45},{id:"pacifist",icon:"\u{1F54A}\uFE0F",name:"Pacifist",desc:"Escape without knocking anyone out",check:(n,t)=>t.win&&t.kos===0},{id:"sweep",icon:"\u{1F9F9}",name:"Clean Sweep",desc:"Escape with 100% of the loot",check:(n,t)=>t.win&&t.frac>=.999},{id:"contracts",icon:"\u{1F4CB}",name:"Overachiever",desc:"Complete all 3 contracts in one run",check:(n,t)=>t.win&&t.contractsDone>=3},{id:"bank",icon:"\u{1F3E6}",name:"Bank Job",desc:"Escape from the Bank",check:(n,t)=>t.win&&t.level==="bank"},{id:"phantom",icon:"\u{1F3AD}",name:"Phantom of the Vault",desc:"Ghost the Bank",check:(n,t)=>t.win&&t.level==="bank"&&t.ghost},{id:"jewelry",icon:"\u{1F48E}",name:"Night Owl",desc:"Escape from the Jewelry Store",check:(n,t)=>t.win&&t.level==="jewelry"},{id:"radio3",icon:"\u{1F4FB}",name:"Smooth Talker",desc:"Fake 3 radio check-ins (total)",check:n=>(n.radio||0)>=3},{id:"museum",icon:"\u{1F3DB}\uFE0F",name:"Night at the Museum",desc:"Escape from the Museum",check:(n,t)=>t.win&&t.level==="museum"},{id:"penthouse",icon:"\u{1F303}",name:"Sky High",desc:"Escape from the Penthouse",check:(n,t)=>t.win&&t.level==="penthouse"},{id:"laser",icon:"\u{1F534}",name:"Laser Dancer",desc:"Escape the Penthouse with the power on and no lasers tripped",check:(n,t)=>t.win&&t.level==="penthouse"&&!t.power&&t.lasers===0},{id:"vent5",icon:"\u{1F573}\uFE0F",name:"Duct Rat",desc:"Crawl through 5 air vents (total)",check:n=>(n.vents||0)>=5},{id:"inside",icon:"\u{1F574}",name:"Inside Man",desc:"Escape while wearing a guard uniform",check:(n,t)=>t.win&&t.disguised},{id:"train",icon:"\u{1F682}",name:"Great Train Robbery",desc:"Escape from the Night Train",check:(n,t)=>t.win&&t.level==="train"},{id:"warehouse",icon:"\u{1F4E6}",name:"Dock Rat",desc:"Escape from the Warehouse",check:(n,t)=>t.win&&t.level==="warehouse"},{id:"close10",icon:"\u{1F605}",name:"Nerves of Steel",desc:"Survive 10 close calls (total)",check:n=>(n.close||0)>=10},{id:"triple",icon:"\u{1F4A5}",name:"Combo Breaker",desc:"Pull off a triple takedown",check:(n,t)=>(t.streak||0)>=3},{id:"kitted",icon:"\u{1F9F0}",name:"Fully Kitted",desc:"Buy 5 gear upgrades",check:(n,t,e)=>Object.values(e.gear||{}).reduce((i,s)=>i+s,0)>=5},{id:"loyal",icon:"\u{1F4C5}",name:"Loyal Crew",desc:"Log in 7 days in a row",check:(n,t,e)=>!!(e.login&&e.login.n>=7)},{id:"photo",icon:"\u{1F6A8}",name:"Photo Finish",desc:"Escape with under 10 s left on the police timer",check:(n,t)=>t.win&&t.photo},{id:"mansion",icon:"\u{1F942}",name:"Party Crasher",desc:"Escape from the Mansion Gala",check:(n,t)=>t.win&&t.level==="mansion"},{id:"courier",icon:"\u{1F4BC}",name:"Special Delivery",desc:"Grab a golden briefcase",check:(n,t)=>(t.briefs||0)>0},{id:"cats",icon:"\u{1F431}",name:"Cat Collector",desc:"Find all 9 hidden lucky cats",check:(n,t,e)=>Object.keys(e.cats||{}).length>=9},{id:"cat1",icon:"\u{1F43E}",name:"Curious",desc:"Find a hidden lucky cat",check:(n,t,e)=>Object.keys(e.cats||{}).length>=1},{id:"casino",icon:"\u{1F3B0}",name:"High Roller",desc:"Escape from the Casino",check:(n,t)=>t.win&&t.level==="casino"},{id:"pick10",icon:"\u{1F45B}",name:"Sticky Fingers",desc:"Pickpocket 10 guards (total)",check:n=>(n.picks||0)>=10},{id:"iron",icon:"\u{1F6E1}\uFE0F",name:"Iron Will",desc:"Escape on Ironman",check:(n,t)=>t.win&&t.diff==="ironman"},{id:"hard",icon:"\u{1F480}",name:"Hardened",desc:"Escape on Hard",check:(n,t)=>t.win&&t.diff==="hard"},{id:"ko10",icon:"\u{1F94A}",name:"Lights Out",desc:"Knock out 10 guards (total)",check:n=>n.kos>=10},{id:"loot50",icon:"\u{1F4B5}",name:"Big Spender",desc:"Steal $50,000 in total",check:n=>n.loot>=5e4},{id:"loot250",icon:"\u{1F911}",name:"Fat Stacks",desc:"Steal $250,000 in total",check:n=>n.loot>=25e4},{id:"hide5",icon:"\u{1F6AA}",name:"Wardrobe Ninja",desc:"Hide in wardrobes 5 times",check:n=>n.hides>=5},{id:"smoke3",icon:"\u{1F4A8}",name:"Now You See Me",desc:"Use 3 smoke bombs",check:n=>n.smokes>=3},{id:"streak3",icon:"\u{1F525}",name:"Regular",desc:"Reach a 3 day daily streak",check:(n,t,e)=>!!(e.streak&&e.streak.n>=3)},{id:"busted10",icon:"\u{1F693}",name:"Frequent Flyer",desc:"Get busted 10 times",check:n=>n.busts>=10}],lh=()=>({runs:0,escapes:0,busts:0,loot:0,kos:0,hides:0,smokes:0,coins:0,contracts:0,best:{}});function ch(n,t){let e=n.stats=Object.assign(lh(),n.stats||{});if(e.runs++,t.win){e.escapes++,e.loot+=t.loot,e.contracts+=t.contractsDone;let a=e.best[t.level];(!a||t.time<a)&&(e.best[t.level]=t.time)}else e.busts++;e.radio=(e.radio||0)+(t.radio||0),e.picks=(e.picks||0)+(t.picks||0),e.vents=(e.vents||0)+(t.vents||0),e.close=(e.close||0)+(t.close||0),e.kos+=t.kos,e.hides+=t.hides,e.smokes+=t.smokes,e.coins+=t.coins;let i=n.ach=n.ach||{},s=[];for(let a of zs)!i[a.id]&&a.check(e,t,n)&&(i[a.id]=Date.now(),s.push(a));return s}var Fn=[{id:"classic",name:"Classic",sleeve:3123354,glove:2763837,bar:14168890,band:15905076},{id:"midnight",name:"Midnight",sleeve:3095138,glove:1447711,bar:9082020,band:6272255,need:1},{id:"hazard",name:"Hazard",sleeve:16747050,glove:2763837,bar:15911244,band:2237487,need:3},{id:"camo",name:"Woodland",sleeve:5929530,glove:5913126,bar:4872746,band:13213795,ach:"ghost"},{id:"bubblegum",name:"Bubblegum",sleeve:16748480,glove:16052714,bar:16732064,band:16777215,ach:"pacifist"},{id:"tux",name:"Black Tie",sleeve:2237487,glove:16052714,bar:11745617,band:16777215,ach:"bank"},{id:"neon",name:"Neon Laser",sleeve:1709104,glove:789014,bar:16722522,band:3866576,ach:"laser"},{id:"gala",name:"Gala Night",sleeve:16052714,glove:1512989,bar:14267482,band:11745617,ach:"mansion"},{id:"chain",name:"Gold Chain",sleeve:2763837,glove:15250234,bar:16766810,band:15250234,ach:"loyal"},{id:"dock",name:"Dockhand",sleeve:13194794,glove:3817290,bar:5925498,band:15911244,ach:"warehouse"},{id:"lucky",name:"Lucky Cat",sleeve:16761402,glove:16052714,bar:15216702,band:15216702,ach:"cats"},{id:"royal",name:"Royal",sleeve:6965976,glove:14267482,bar:15250234,band:14267482,need:6},{id:"golden",name:"Golden Boy",sleeve:15250234,glove:15914122,bar:16766810,band:16777215,need:10}],_l=n=>({sleeve:n.sleeve,sleeve2:ft(n.sleeve,.85),cuff:ft(n.sleeve,.66),glove:n.glove,glove2:ft(n.glove,1.35)||3816786,bar:n.bar,barHi:ft(n.bar,1.35),band:n.band});function Bs(n,t){let e=t.ach||{},i=Object.keys(e).length;return n.ach?!!e[n.ach]:!n.need||i>=n.need}var nd=(n,t)=>n.ach?`Achievement: ${(t.find(e=>e.id===n.ach)||{}).name}`:`${n.need} ${n.need===1?"trophy":"trophies"}`;var sd=(n,t,e,i,s)=>n.player.x>=t&&n.player.x<=i&&n.player.z>=e&&n.player.z<=s,Vi=[{text:["Move with WASD","Drag the left side to move"],done:n=>Math.hypot(n.player.x-n.L.start.x-.5,n.player.z-n.L.start.y-.5)>1.6},{text:["Move the mouse to look around","Drag the right side to look around"],done:n=>n.lookTotal>1.2},{text:["Go in through the front door and grab the cash","Go in through the front door and grab the cash"],done:n=>n.lootGot>0},{text:["Press SPACE to dash: fast, but guards can HEAR it","Tap DASH to dash: fast, but guards can HEAR it"],done:n=>n.dashes>0},{text:["Press Z to sneak: slow, silent and low","Tap the boot to sneak: slow, silent and low"],done:n=>n.player.crouch,at:{x:8.5,z:12.5,label:"NEXT ROOM"}},{text:["Stay crouched BEHIND the low counter and sneak past the guard","Stay crouched BEHIND the low counter and sneak past the guard"],done:n=>sd(n,16.6,7.5,24,13),at:{x:16.5,z:12.5,label:"SNEAK HERE"}},{text:["A guard patrols here! Press E at the wardrobe to hide inside","A guard patrols here! Tap \u270B at the wardrobe to hide inside"],done:n=>n.hidesUsed>0,at:{x:18.5,z:11.6,label:"WARDROBE"}},{text:["Wait until he walks away, then press E to step out","Wait until he walks away, then tap \u270B to step out"],done:n=>!n.player.hiding},{text:["Sneak up BEHIND the guard upstairs and CLICK to hit him","Sneak up BEHIND the guard upstairs and tap HIT"],done:n=>n.kos>0,at:{x:20.5,z:4.6,label:"HIT FROM BEHIND"}},{text:["His radio will call in! Stay next to him and HOLD E to answer","His radio will call in! Stay next to him and HOLD \u270B to answer"],done:n=>n.radioFaked>0},{text:["HOLD E on him to wear his uniform: guards won't spot you from afar","HOLD \u270B on him to wear his uniform: guards won't spot you from afar"],done:n=>n.disguises>0},{text:["A guard blocks the lounge. Press Q to throw a coin and lure him away","A guard blocks the lounge. Tap the coin to throw it and lure him away"],done:n=>n.coinsThrown>0,at:{x:15.5,z:4.5,label:"LOUNGE"}},{text:["Press C to drop a smoke bomb: guards can't see through it","Tap the cloud to drop a smoke bomb: guards can't see through it"],done:n=>n.smokesUsed>0},{text:["Pick the lock: press E when the pin is in the green","Pick the lock: tap \u270B when the pin is in the green"],done:n=>n.doors.every(t=>t.type!=="lock"||t.open),at:{x:8.5,z:4.5,label:"LOCKED DOOR"}},{text:["HOLD E at the safe to crack it","HOLD \u270B at the safe to crack it"],done:n=>n.hasStash,at:{x:5.5,z:4.4,label:"SAFE"}},{text:["Press E at the air vent: a secret shortcut back to the entrance","Tap \u270B at the air vent: a secret shortcut back to the entrance"],done:n=>n.ventsUsed>0||sd(n,1,7.6,8,13),at:{x:2.4,z:4.5,label:"AIR VENT"}},{text:["Run back to the van with the stash!","Run back to the van with the stash!"],done:n=>n.state==="escape"}];var as=[{pos:[13,12.5,25],look:[13,0,8],title:"THE JOB",text:"Sneak into the landlord's house, crack his safe and get back to the van.",keys:[[["WASD","move"],["MOUSE","look"]],[["LEFT","move"],["RIGHT","look"]]]},{pos:[17.8,5,10.6],look:[12.2,0,10.4],title:"YELLOW CONE = WHERE HE SEES",text:"Never step into a guard's yellow cone. Press sneak and crouch behind low furniture: he can't see you there.",keys:[[["Z","sneak"]],[["BOOT","sneak"]]],act:"sneak"},{pos:[19.5,4.2,15.5],look:[19.5,.2,10.5],title:"HIDE IN WARDROBES",text:"A patrol is coming? Jump in and the guard walks right past you.",keys:[[["E","hide"]],[["HAND","hide"]]]},{pos:[23.6,3,5.2],look:[20.4,.5,4.6],title:"HIT THEM FROM BEHIND",text:"Sneak up on a guard's back and smack him with your crowbar.",keys:[[["CLICK","hit"]],[["HIT","hit"]]],act:"ko"},{pos:[22.6,2.4,6],look:[20.5,.5,3.6],title:"RADIO & DISGUISE",text:"Knocked-out guards get radio calls: answer them! Then wear the uniform and nobody spots you from afar.",keys:[[["HOLD E","answer \xB7 wear"]],[["HOLD HAND","answer \xB7 wear"]]],act:"stand"},{pos:[15.2,3.6,7.6],look:[10.5,.5,4.5],title:"LURE THEM AWAY",text:"Throw a coin to make a guard look somewhere else. Smoke bombs block their view.",keys:[[["Q","coin"],["C","smoke"]],[["COIN","coin"],["CLOUD","smoke"]]]},{pos:[7,3.6,8.2],look:[4.5,.5,3.5],title:"CRACK IT & ESCAPE",text:"Pick the lock, crack the safe, then crawl through the vent back to the van. Dashing is fast but LOUD!",keys:[[["E","lock \xB7 safe \xB7 vent"],["SPACE","dash"]],[["HAND","lock \xB7 safe \xB7 vent"],["DASH","dash"]]]}],bl=4.6;var O=n=>document.getElementById(n),dy={move:["WASD to move \xB7 Mouse to look","Left side: move \xB7 Right side: look"],thunder:["\u26A1 Thunder covers your noise for a moment. Dash now!","\u26A1 Thunder covers your noise for a moment. Dash now!"],uniform:["Hold E on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar","Hold \u270B on a knocked-out guard to wear his uniform: guards & cameras ignore you from afar"],ctr:["\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash","\u{1F4CB} The slips on the left are bonus contracts: optional side jobs worth extra cash"],vent:["Air vent! E to crawl through to another room, unseen","Air vent! Tap the hand to crawl through, unseen"],dash:["SPACE / SHIFT to dash. Careful, it's noisy!","Tap DASH to dash. Careful, it's noisy!"],cone:["Stay out of the vision cones!","Stay out of the vision cones!"],ko:["Behind a guard? CLICK to hit = knock out!","Behind a guard? Tap HIT = knock out!"],safe:["Hold E to crack the safe","Hold the hand button to crack the safe"],owner:["Shh... the owner is asleep. No dashing near the bed!","Shh... the owner is asleep. No dashing near the bed!"],loot:["Extra loot = more stars. Grab it all!","Extra loot = more stars. Grab it all!"],stash:["Got the stash! Get back to the van!","Got the stash! Get back to the van!"],dog:["A guard dog! It follows your scent and barks. Coins distract it.","A guard dog! It follows your scent and barks. Coins distract it."],clerk:["The clerk is running for the alarm button! Knock them out first!","The clerk is running for the alarm button! Knock them out first!"],camhit:["Security camera! Hit it with a thrown coin (Q) to knock it out for 12s","Security camera! Hit it with a thrown coin to knock it out for 12s"],pocket:["Behind a guard: CLICK to knock out, HOLD E to pickpocket his wallet (or spare keycard)","Behind a guard: tap HIT to knock out, HOLD \u270B to pickpocket his wallet"],slot:["Slot machine! Hold E to hit a noisy jackpot that lures guards away","Slot machine! Hold \u270B to hit a noisy jackpot that lures guards away"],spot:["Spotlight! Stay out of the moving light pools, or cut the power at the breaker","Spotlight! Stay out of the moving light pools, or cut the power at the breaker"],radio:["A knocked-out guard's radio is calling! Hold E next to him to answer, or backup comes","A knocked-out guard's radio is calling! Hold \u270B next to him to answer, or backup comes"],case:["Hold E to smash a display case. Loud! Guards who see a broken case raise the alarm","Hold \u270B to smash a display case. Loud! Guards who see a broken case raise the alarm"],pick:["Locked! Press E when the pin is in the green zone. Slips are noisy!","Locked! Tap the hand when the pin is in the green zone. Slips are noisy!"],laser:["Laser grid! Time your run, or cut the power at the breaker in the security room","Laser grid! Time your run, or cut the power at the breaker in the security room"],key:["The vault door needs a keycard. Search the offices!","The vault door needs a keycard. Search the offices!"],door:["Got the keycard! Swipe it at the vault door","Got the keycard! Swipe it at the vault door"],drill:["Cracking the vault is LOUD. Guards will hear it!","Cracking the vault is LOUD. Guards will hear it!"],hide:["E at a wardrobe: hide inside. Guards lose you if they did not see you!","Tap the hand at a wardrobe to hide inside"],heavy:["Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them","Gold and paintings are HEAVY and slow you down. Walk back to the van to stash them"],sneak:["Z: crouch-sneak. Slower and quieter, and crouching behind counters or tables hides you","Tap \u{1F9B6} to sneak. Slower and quieter, and crouching behind low cover hides you"],smoke:["C: drop a smoke bomb. Guards cannot see into or through the cloud!","Tap \u{1F4A8} to drop a smoke bomb. Guards cannot see through it!"],coin:["Q: throw a coin to lure guards away","Tap the coin to lure guards away"],alarm:["ALARM! Escape or hold E at the keypad by the front door","ALARM! Escape or hold the hand at the keypad by the front door"]},hh=class{constructor(){this.els={canvas:O("c"),fxl:O("fxl"),joyzone:O("joyzone"),lookzone:O("lookzone"),joy:O("joy"),knob:O("knob"),bAct:O("bAct"),bDash:O("bDash"),bThrow:O("bThrow"),bSmoke:O("bSmoke"),bSneak:O("bSneak"),bHit:O("bHit")},this.state="boot",this.hShown=new Set,this.hDone=new Set,this.hQ=[],this.hT=0,this.hCur=null,this.lastAd=performance.now(),this.runs=0,this.time=0,this.camPos=new X(15,30,40),this.camLook=new X(15,0,9),this._f=new X,this._d=new X,this.frameAcc=0,this.frameN=0,this.goodWin=0}async boot(){await $t.init(),$t.loadingStart(),$t.hooks.adStart=()=>{this.inAd=!0,this.audio.setAdMuted(!0)},$t.hooks.adEnd=()=>{this.inAd=!1,this.audio.setAdMuted(!1)},this.save=$t.load(),this.save.best=this.save.best||{},this.diff=is[this.save.diff]?this.save.diff:"normal";let t=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.maxDpr=t?1.25:1.75,this.dpr=Math.min(devicePixelRatio||1,this.maxDpr);let e=this.renderer=new qo({canvas:this.els.canvas,antialias:!t,powerPreference:"high-performance",stencil:!1});this.els.canvas.addEventListener("webglcontextlost",r=>{r.preventDefault();try{$t.store(this.save)}catch{}this.state==="play"&&(this.state="pause",$t.gameplayStop()),O("ctxlost").classList.remove("hidden")}),this.els.canvas.addEventListener("webglcontextrestored",()=>{location.reload()}),e.setPixelRatio(this.dpr),e.toneMapping=ya,e.toneMappingExposure=1.15,this.scene=new qn,this.scene.background=new Nt(16038282),this.scene.fog=new ia(15778970,16,70),this.sky=_u(),this.scene.add(this.sky),this.nightSky=bu(),this.scene.add(this.nightSky),e.autoClear=!1,this.camera=new Je(42,1,.05,120),this.camera.rotation.order="YXZ",this.vm=new dl,this.hemi=new $n(16770760,8022152,1.8),this.scene.add(this.hemi);let i=this.sun=new Kn(16769208,1.4);i.position.set(-4,10,6),this.scene.add(i),this.audio=new al;let s={ko:35,zap:[60,40,60],alert:25,bust:[90,60,160],alarm:[120,80,120],safe:[30,40,50],dash:12,glass:40,thunder:[20,40,60],clank:25,jackpot:[20,30,20,30,40],win:[30,50,80]},a=this.audio.play.bind(this.audio);this.audio.play=(r,l)=>{a(r,l);let o=s[r];if(o&&this.input&&this.input.touch&&this.shake&&this.shake.scale>0&&navigator.vibrate)try{navigator.vibrate(o)}catch{}},this.audio.setMuted(!!this.save.muted),$t.onSettings(r=>this.audio.setPlatformMuted(r&&r.muteAudio)),this.input=new rl(this.els),this.particles=new ll(this.scene),this.shake=new cl,this.floaters=new hl(this.els.fxl),this.dust=new Ko(this.scene),this.rain=new Zo(this.scene),this.boltK=0,this.applySettings(),this.game=new nl(this),this.levelIdx=0,await this.useLevel(0),this.bindUI(),this.applyOutfit(),addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.compile(this.scene,this.camera),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),$t.loadingStop(),setTimeout(()=>this.audio.loadSamples(),300),O("loading").classList.add("hidden"),this.showMenu()}bindUI(){let t=(e,i)=>O(e).addEventListener("click",s=>{s.stopPropagation(),this.audio.unlock(),this.audio.play("click"),i()});t("bPlay",()=>this.playSel());for(let e of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])O(e).addEventListener("click",i=>{i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),this.selectPin(e)});for(let e of document.querySelectorAll("#diff button"))e.addEventListener("click",i=>{if(i.stopPropagation(),this.audio.unlock(),this.audio.play("click"),e.dataset.d==="ironman"&&!this.ironUnlocked()){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.diff=e.dataset.d,this.save.diff=this.diff,$t.store(this.save),this.showMenu()});t("bResume",()=>this.resume()),t("bPSkip",()=>{this.skipTutorial(),this.resume()}),t("bSet",()=>this.showSettings()),t("bPSet",()=>this.showSettings()),t("bSetBack",()=>{this.setFrom==="pause"?(this.state="pause",this.screen("pause")):this.showMenu()});for(let e of document.querySelectorAll("#settings input"))e.addEventListener("input",()=>this.readSettings());t("bRestart",()=>this.start()),t("bPMenu",()=>this.showMenu()),t("bRetry",()=>this.retry()),t("bNext",()=>{this.mode==="daily"?this.showMenu():this.levelIdx===0&&this.bankUnlocked()?this.start("classic",1):this.levelIdx===1&&this.jewelryUnlocked()?this.start("classic",2):this.levelIdx===2&&this.museumUnlocked()?this.start("classic",3):this.levelIdx===3&&this.casinoUnlocked()?this.start("classic",4):this.levelIdx===4&&this.penthouseUnlocked()?this.start("classic",5):this.levelIdx===5&&this.trainUnlocked()?this.start("classic",6):this.levelIdx===6&&this.warehouseUnlocked()?this.start("classic",7):this.levelIdx===7&&this.mansionUnlocked()?this.start("classic",8):this.showSoon()}),t("bRMenu",()=>this.showMenu()),t("bBRetry",()=>this.retry()),t("bBMenu",()=>this.showMenu()),t("bEasy",()=>{this.diff="easy",this.bustStreak=0,this.start("classic",this.levelIdx)}),t("bRevive",()=>this.reviveAd()),t("bSoonBack",()=>this.showMenu()),t("bTrophy",()=>this.showTrophies()),t("bOutfit",()=>this.showOutfits()),t("bOfBack",()=>this.showMenu()),t("bTut",()=>{this.introSeen=!1,this.start("tutorial",0)}),t("bISkip",()=>this.endIntro()),t("bINext",()=>this.nextIntro()),O("tutSkip").addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault(),this.game.tut&&this.skipTutorial()}),t("bTrBack",()=>this.showMenu()),t("bPause",()=>this.pause()),t("bMute",()=>this.toggleMute()),this.input.on("pause",()=>{this.state==="play"?this.pause():this.state==="pause"&&this.resume()}),this.input.on("restart",()=>{["play","pause","result","busted"].includes(this.state)&&this.start()}),this.input.on("mute",()=>this.toggleMute()),this.input.on("key",e=>{if(e==="KeyT"&&this.state==="play"&&this.game.tut&&this.skipTutorial(),this.state==="intro"){e==="Escape"?this.endIntro():(e==="Enter"||e==="Space"||e==="KeyE")&&this.nextIntro();return}(e==="Enter"||e==="Space")&&this.state==="menu"?(this.audio.unlock(),this.playSel()):e==="Enter"&&this.state==="result"?(this.audio.unlock(),O("bNext").click()):(e==="Enter"||e==="Space")&&(this.state==="result"||this.state==="busted")&&(this.audio.unlock(),this.retry())}),this.input.on("mode",()=>this.syncTouch()),this.input.on("lock",()=>{this.state!=="play"&&this.input.exitLock()}),this.input.on("unlock",()=>{this.state==="play"&&this.game.state==="play"&&!this.input.touch&&this.pause()}),addEventListener("pointerdown",()=>this.audio.unlock(),{capture:!0}),addEventListener("keydown",()=>this.audio.unlock(),{capture:!0}),addEventListener("blur",()=>{this.state==="play"&&this.pause()}),document.addEventListener("visibilitychange",()=>{this.audio.setHidden(document.hidden),document.hidden&&this.state==="play"&&this.pause()}),this.updateMuteIcon()}iris(){let t=O("iris");t&&(t.classList.remove("go"),t.offsetWidth,t.classList.add("go"),clearTimeout(this.irisT),this.irisT=setTimeout(()=>t.classList.remove("go"),850))}screen(t){for(let i of document.querySelectorAll(".screen"))i.classList.toggle("hidden",i.id!==t);let e=this.state==="play";this.input.active=e,e||this.input.exitLock(),O("fp").classList.toggle("hidden",!e),O("hud").classList.toggle("hidden",!e&&this.state!=="pause"),this.syncTouch(),e||(this.setPrompt(""),this.game&&this.game.hideBadges())}syncTouch(){let t=this.input.touch;document.body.classList.toggle("touch",t),O("touch").classList.toggle("hidden",!(t&&this.state==="play")),this.input.joyEnd()}showMenu(){{let b=document.querySelector("meta[name=build]"),y=O("ver");y&&b&&(y.textContent="build "+b.content)}if(this.lastTutLevel=null,this.save.tutDone){let b=nn(),y=this.save.login||{last:"",n:0};if(y.last!==b){y.n=y.last===Ha()?y.n+1:1,y.last=b,this.save.login=y;let M=500*Math.min(y.n,7);this.save.cash=(this.save.cash||0)+M,$t.store(this.save);let S=O("bonus");S.querySelector("b").textContent="+"+ee(M);let _=(y.n-1)%7+1;S.querySelector(".days").innerHTML=[1,2,3,4,5,6,7].map(w=>`<i class="${w<_?"on":w===_?"now":""}">${w===7?"\u{1F9E4}":w}</i>`).join(""),S.querySelector("em").textContent=y.n>=7?`Day ${y.n} in a row! Max bonus`:`Day ${y.n} of 7 \xB7 day 7 unlocks the Gold Chain outfit`,S.classList.remove("hidden"),S.style.animation="none",S.offsetWidth,S.style.animation="",clearTimeout(this.bonT),this.bonT=setTimeout(()=>S.classList.add("hidden"),4200),setTimeout(()=>{this.audio.play("safe"),this.shake.add(.15)},250)}}$t.gameplayStop(),this.audio.siren(!1),this.state="menu",this.game.reset();let t=this.save.best[gi("safehouse",this.diff)],e=this.bankUnlocked(),i=this.save.best[gi("bank",this.diff)];O("lvl2").classList.toggle("lock",!e),O("daily").classList.toggle("lock",!e),!e&&this.sel==="daily"&&(this.sel=this.save.sel="lvl1"),O("lvl2art").textContent=e?"\u{1F3E6}":"\u{1F512}",O("lvl2stars").innerHTML=e?this.starsHTML(i?i.stars:0):"",O("lvl2best").textContent=e?i?"Best "+ee(i.score):"New!":"Escape Safe House to unlock";let s=this.jewelryUnlocked(),a=this.save.best[gi("jewelry",this.diff)];O("lvl3").classList.toggle("lock",!s),O("lvl3art").textContent=s?"\u{1F48E}":"\u{1F512}",O("lvl3stars").innerHTML=s?this.starsHTML(a?a.stars:0):"";let r=this.casinoUnlocked(),l=this.save.best[gi("casino",this.diff)];O("lvl5").classList.toggle("lock",!r),O("lvl5art").textContent=r?"\u{1F3B0}":"\u{1F512}",O("lvl5stars").innerHTML=r?this.starsHTML(l?l.stars:0):"",O("lvl5best").textContent=r?l?"Best "+ee(l.score):"New!":"Escape the Museum to unlock";let o=this.mansionUnlocked(),h=this.save.best[gi("mansion",this.diff)];O("lvl9").classList.toggle("lock",!o),O("lvl9art").textContent=o?"\u{1F942}":"\u{1F512}",O("lvl9stars").innerHTML=o?this.starsHTML(h?h.stars:0):"",O("lvl9best").textContent=o?h?"Best "+ee(h.score):"New!":"Escape the Warehouse to unlock";let c=this.warehouseUnlocked(),u=this.save.best[gi("warehouse",this.diff)];O("lvl8").classList.toggle("lock",!c),O("lvl8art").textContent=c?"\u{1F4E6}":"\u{1F512}",O("lvl8stars").innerHTML=c?this.starsHTML(u?u.stars:0):"",O("lvl8best").textContent=c?u?"Best "+ee(u.score):"New!":"Escape the Night Train to unlock";let f=this.trainUnlocked(),x=this.save.best[gi("train",this.diff)];O("lvl7").classList.toggle("lock",!f),O("lvl7art").textContent=f?"\u{1F682}":"\u{1F512}",O("lvl7stars").innerHTML=f?this.starsHTML(x?x.stars:0):"",O("lvl7best").textContent=f?x?"Best "+ee(x.score):"New!":"Escape the Penthouse to unlock";let g=this.penthouseUnlocked(),m=this.save.best[gi("penthouse",this.diff)];O("lvl6").classList.toggle("lock",!g),O("lvl6art").textContent=g?"\u{1F303}":"\u{1F512}",O("lvl6stars").innerHTML=g?this.starsHTML(m?m.stars:0):"",O("lvl6best").textContent=g?m?"Best "+ee(m.score):"New!":"Escape the Casino to unlock";let d=this.museumUnlocked(),p=this.save.best[gi("museum",this.diff)];O("lvl4").classList.toggle("lock",!d),O("lvl4art").textContent=d?"\u{1F3DB}\uFE0F":"\u{1F512}",O("lvl4stars").innerHTML=d?this.starsHTML(p?p.stars:0):"",O("lvl4best").textContent=d?p?"Best "+ee(p.score):"New!":"Escape the Jewelry Store to unlock",O("lvl3best").textContent=s?a?"Best "+ee(a.score):"New!":"Escape the Bank to unlock",this.renderSel(),this.diff==="ironman"&&!this.ironUnlocked()&&(this.diff="normal");for(let b of document.querySelectorAll("#diff button"))b.classList.toggle("on",b.dataset.d===this.diff),b.dataset.d==="ironman"&&(b.classList.toggle("lock",!this.ironUnlocked()),b.title=this.ironUnlocked()?"Ironman: x2.5 score, 1 coin, no smoke, 15s police":"Escape any heist on Hard to unlock");O("lvl1stars").innerHTML=this.starsHTML(t?t.stars:0),O("lvl1best").textContent=t?"Best "+ee(t.score):"New!",this.daily=this.todays();let v=(this.save.daily||{})[this.daily.key];O("dMut").textContent=this.daily.mutator.name;{let b=new Date;O("dArt").innerHTML=`<span style="font-size:20px">${b.getDate()}</span>`}O("dDesc").textContent=this.daily.mutator.desc+" \xB7 "+ii[this.daily.level].name,O("dBest").textContent=(v?"Today "+ee(v.score):this.daily.label)+(this.save.streak&&this.save.streak.n>1&&(this.save.streak.last===this.daily.key||this.save.streak.last===Ha())?` \xB7 \u{1F525}${this.save.streak.n}`:""),this.screen("menu")}runRecord(t,e){let i=this.game;return{win:t,level:this.level.id,diff:this.mode==="daily"?"daily":this.diff,ghost:t&&e.ghost,time:i.time,kos:i.kos,frac:i.lootGot/i.lootTotal,loot:i.lootGot,contractsDone:t?e.contracts.filter(s=>s.st==="ok").length:0,hides:i.hidesUsed,smokes:i.smokesUsed,coins:i.coinsThrown,radio:i.radioFaked,picks:i.picks,vents:i.ventsUsed,close:i.closeCalls,briefs:i.briefsGot,photo:i.photoFinish,streak:i.maxKoStreak||0,disguised:i.disguiseT>0&&i.disguises>0,lasers:i.lasersTripped,power:i.powerOff}}applyOutfit(){let t=Fn.find(e=>e.id===this.save.outfit);return(!t||!Bs(t,this.save))&&(t=Fn[0]),this.vm.setOutfit(_l(t)),t}gearMods(t){return id(this.save,t)}canAffordGear(){return Va.some(t=>{let e=vl(this.save,t);return e!=null&&(this.save.cash||0)>=e})}renderGear(){let t=this.save.cash||0;O("wallet").textContent="\u{1F4B0} "+ee(t),O("gearGrid").innerHTML=Va.map(e=>{let i=Wa(this.save,e.id),s=vl(this.save,e),a=s==null;return`<button class="gr ${a?"max":t>=s?"":"cant"}" data-id="${e.id}"><span class="ic">${e.icon}</span><b>${e.name}</b><small>${e.desc}</small>
        <span class="pips">${e.prices.map((r,l)=>`<i class="${l<i?"on":""}"></i>`).join("")}</span><span class="pr">${a?"MAXED":ee(s)}</span></button>`}).join("");for(let e of document.querySelectorAll("#gearGrid .gr"))e.addEventListener("click",i=>{i.stopPropagation();let s=Va.find(l=>l.id===e.dataset.id),a=vl(this.save,s);if(a==null||(this.save.cash||0)<a){this.audio.play("nope"),e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake");return}this.save.cash-=a,(this.save.gear=this.save.gear||{})[s.id]=Wa(this.save,s.id)+1,$t.store(this.save),this.audio.play("safe"),this.shake.add(.15),this.renderGear();let r=document.querySelector(`#gearGrid .gr[data-id="${s.id}"]`);r&&r.classList.add("buy")})}showOutfits(){$t.gameplayStop(),this.state="outfits",this.renderGear();let t=this.applyOutfit(),e=i=>"#"+i.toString(16).padStart(6,"0");O("ofGrid").innerHTML=Fn.map(i=>{let s=Bs(i,this.save);return`<button class="of ${s?"":"lock"} ${i.id===t.id?"on":""}" data-id="${i.id}">
        <span class="sw"><i style="background:${e(i.sleeve)}"></i><i style="background:${e(i.glove)}"></i><i style="background:${e(i.bar)}"></i></span>
        <b>${i.name}</b><small>${s?i.id===t.id?"EQUIPPED":"Tap to wear":"\u{1F512} "+nd(i,zs)}</small></button>`}).join("");for(let i of document.querySelectorAll("#ofGrid .of"))i.addEventListener("click",s=>{s.stopPropagation();let a=Fn.find(r=>r.id===i.dataset.id);if(!Bs(a,this.save)){this.audio.play("nope"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake");return}this.audio.play("pick",4),this.save.outfit=a.id,$t.store(this.save),this.showOutfits()});this.screen("outfits")}showTrophies(){$t.gameplayStop(),this.state="trophies";let t=Object.assign(lh(),this.save.stats||{}),e=this.save.ach||{},i=a=>t.best[a]!=null?Us(t.best[a]):"\u2014",s=[["Heists",t.runs],["Escapes",t.escapes],["Busted",t.busts],["Total loot",ee(t.loot)],["Guards KO",t.kos],["Contracts",t.contracts],["Lucky cats",Object.keys(this.save.cats||{}).length+"/"+ii.length],["Best Safe House",i("safehouse")],["Best Bank",i("bank")],["Best Jewelry",i("jewelry")],["Best Museum",i("museum")],["Best Casino",i("casino")],["Best Penthouse",i("penthouse")],["Best Train",i("train")],["Best Warehouse",i("warehouse")],["Best Mansion",i("mansion")]];O("trJobs").innerHTML=this.jobsHTML(),O("jobsIn").textContent=`(new jobs in ${ml()})`;for(let a=s.length-1;a>=0;a--)String(s[a][0]).startsWith("Best ")&&s[a][1]==="\u2014"&&s.splice(a,1);O("trStats").innerHTML=s.map(([a,r])=>`<div><small>${a}</small><b>${r}</b></div>`).join(""),O("trAch").innerHTML=zs.map(a=>`<div class="ach ${e[a.id]?"on":""}"><i>${e[a.id]?a.icon:"\u{1F512}"}</i><b>${a.name}</b><small>${a.desc}</small></div>`).join(""),O("trCount").textContent=`${Object.keys(e).filter(a=>zs.some(r=>r.id===a)).length} / ${zs.length}`,this.screen("trophies")}chipify(t){let e=O(t),i=e.innerHTML.split(/<br\s*\/?>/).map(s=>s.trim()).filter(Boolean);e.innerHTML=i.map((s,a)=>`<span class="rw" style="animation-delay:${(1.3+a*.12).toFixed(2)}s">${s}</span>`).join("")}jobsHTML(){let t=Ga(this.save),e=(i,s)=>i.money?ee(s):s;return t.ids.map(i=>{let s=yl(i),a=t.prog[i]||0,r=!!t.done[i];return`<li class="${r?"ok":""}"><i></i><span>${s.text}</span><em>${r?"\u2714":e(s,a)+"/"+e(s,s.n)}</em><b>+${ee(xl)}</b></li>`}).join("")+`<li class="bonus ${t.bonus?"ok":""}"><i></i><span>All 3 done</span><em>${t.bonus?"\u2714":""}</em><b>+${ee(gl)}</b></li>`}jobsToast(t){if(!this.save.tutDone)return"";let e=t.fresh.map(i=>`\u{1F4CB} Job done: <b>${i.text}</b> +${ee(xl)}`);return t.bonus&&e.push(`\u{1F4CB} <b>All daily jobs done!</b> +${ee(gl)}`),e.length&&setTimeout(()=>{(this.state==="result"||this.state==="busted")&&(this.audio.play("contract"),this.shake.add(.12))},2e3),e.join("<br>")}showAchToast(t){O("rAch").innerHTML=t.length?"\u{1F3C6} Unlocked: "+t.map(e=>`<b>${e.icon} ${e.name}</b>`).join(" \xB7 "):"",O("rAch").classList.toggle("hidden",!t.length),t.length&&setTimeout(()=>this.audio.play("contract"),1600)}pinLocked(t){return t==="lvl2"?!this.bankUnlocked():t==="lvl3"?!this.jewelryUnlocked():t==="lvl4"?!this.museumUnlocked():t==="lvl5"?!this.casinoUnlocked():t==="lvl6"?!this.penthouseUnlocked():t==="lvl7"?!this.trainUnlocked():t==="lvl8"?!this.warehouseUnlocked():t==="lvl9"?!this.mansionUnlocked():t==="daily"?!this.bankUnlocked():!1}selectPin(t){if(this.sel=t,this.save.sel=t,this.pinLocked(t)){let e=O(t);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")}this.renderSel()}renderSel(){let t=this.sel||this.save.sel||"lvl1";O(t)||(t="lvl1"),this.sel=t;for(let g of["lvl1","lvl2","lvl3","lvl4","lvl5","lvl6","lvl7","lvl8","lvl9","daily"])O(g).classList.toggle("on",g===t);let e=O(t),i=this.pinLocked(t);O("selName").textContent=t==="daily"?"Daily: "+O("dMut").textContent:e.querySelector(".t").textContent;let s=e.querySelector(".stars");O("selStars").innerHTML=s?s.innerHTML:"";let a=!!(this.save.daily||{})[this.daily&&this.daily.key],r=t!=="daily"&&!i&&{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t]===this.hotTarget()?`\u{1F3AF} HOT TARGET: double cash this week (${rh().left} left)  \xB7  `:"",l=t!=="daily"&&!i&&this.save.tutDone?(this.save.cats||{})[ii[{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t]].id]?"  \xB7  \u{1F431} cat found":"  \xB7  \u{1F431} a lucky cat is hidden here":"";O("selSub").textContent=t==="daily"?O("dDesc").textContent+" \xB7 "+O("dBest").textContent+(a?` \xB7 new Daily in ${ml()}`:""):r+e.querySelector(".best").textContent+l;let o=[];if(!i&&t!=="daily"&&this.save.tutDone){let g=ii[{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t]].id,m=(this.save.best[gi(g,this.diff)]||{stars:0}).stars;m===0?o.push("Escape to earn your first \u2605"):m<3&&o.push("Next \u2605: grab 70% loot \xB7 or never get spotted")}if(this.save.tutDone&&(this.save.hot||0)>=1&&o.unshift(`\u{1F525} Hot streak ${this.save.hot}: next escape +${Math.min(50,10*this.save.hot)}% cash`),this.save.tutDone&&this.canAffordGear()&&o.unshift("\u{1F9F0} You can afford new gear in the Locker!"),this.save.tutDone){let g=Ga(this.save),m=g.ids.find(d=>!g.done[d]);if(m){let d=yl(m),p=g.prog[m]||0;o.push(`\u{1F4CB} Job: ${d.text} (${d.money?ee(p):p}/${d.money?ee(d.n):d.n})`)}}let h=this.save.streak;h&&h.n>=1&&h.last===Ha()&&o.unshift(`\u{1F525} Play today's Daily to keep your ${h.n}-day streak`);let c=Object.keys(this.save.ach||{}).length,u=Fn.filter(g=>g.need&&g.need>c).sort((g,m)=>g.need-m.need)[0];u&&this.save.tutDone&&o.push(`\u{1F9E4} ${u.need-c} more troph${u.need-c===1?"y":"ies"} \u2192 ${u.name} outfit`),O("selGoal").textContent=o.slice(0,2).join("  \xB7  "),O("selGoal").classList.toggle("hidden",!o.length),O("bPlay").textContent=i?"\u{1F512} LOCKED":"PLAY",O("bPlay").classList.toggle("dis",i),O("daily").classList.toggle("done",a),O("bPlay").classList.toggle("pulse",!i&&!this.save.tutDone&&!this.runs);let f=0;for(let g of["safehouse","bank","jewelry","museum","casino","penthouse","train","warehouse","mansion"])f+=Math.max(...["","_easy","_hard","_ironman"].map(m=>(this.save.best[g+m]||{stars:0}).stars));O("starTotal").textContent=`\u2605 ${f}/27`;let x=this.hotTarget();ii.forEach((g,m)=>{let d=O("lvl"+(m+1));d&&(d.classList.toggle("gold",!!(this.save.mastered||{})[g.id]),d.classList.toggle("hot",m===x))});{let g=this.save.cash||0,m=g>=1e6?(g/1e6).toFixed(1)+"M":g>=1e3?(g/1e3).toFixed(g>=1e4?0:1)+"k":String(g);O("bOutfit").innerHTML=`\u{1F9F0} LOCKER${g?` <small>$${m}</small>`:""}`}{let g=Ga(this.save),m=g.ids.filter(d=>g.done[d]).length;O("bTrophy").innerHTML=this.save.tutDone?`\u{1F4CB} JOBS <small>${m}/3</small>`:"\u{1F3C6} TROPHIES"}O("bOutfit").classList.toggle("pulse",this.save.tutDone&&this.canAffordGear());{let g=pl(this.save.xp||0);O("rankChip").innerHTML=`\u{1F396} ${g.name}<i style="width:${(g.frac*100).toFixed(0)}%"></i>`,O("rankChip").title=g.next?`${g.toNext} XP to ${g.next}`:"Max rank"}}playSel(){let t=this.sel||"lvl1";if(this.pinLocked(t)){this.audio.play("nope"),this.selectPin(t);return}t==="daily"?this.start("daily"):this.start("classic",{lvl1:0,lvl2:1,lvl3:2,lvl4:3,lvl5:4,lvl6:5,lvl7:6,lvl8:7,lvl9:8}[t])}drawRecap(t,e){let i=O(t),s=this.game,a=s.L,r=this.mmBase;if(!i||!r)return;let l=this.mmS,o=Math.min(260/r.width,170/r.height);i.width=Math.round(r.width*o*2),i.height=Math.round(r.height*o*2);let h=i.getContext("2d"),c=i.width/r.width*l,u=s.trail.slice(),f=s.marks.slice();u.push([s.player.x,s.player.z,u.length?u[u.length-1][2]:0]);let x=performance.now(),g=1600,m=this.recapId=(this.recapId||0)+1,d=(y,M)=>{let S=y.x*c,_=y.z*c,w=5.5;h.globalAlpha=M,y.t==="ko"?(h.strokeStyle="#c77dff",h.lineWidth=3,h.beginPath(),h.moveTo(S-w,_-w),h.lineTo(S+w,_+w),h.moveTo(S+w,_-w),h.lineTo(S-w,_+w),h.stroke()):y.t==="alarm"||y.t==="caught"?(h.fillStyle="#ff3b4e",h.beginPath(),h.arc(S,_,w+2,0,6.3),h.fill(),h.fillStyle="#fff",h.font="bold 11px sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText(y.t==="caught"?"\u2716":"!",S,_+1)):y.t==="safe"?(h.fillStyle="#ffd23f",h.fillRect(S-w,_-w,w*2,w*2),h.strokeStyle="#1c1330",h.lineWidth=2,h.strokeRect(S-w,_-w,w*2,w*2)):(h.fillStyle=y.t==="cash"?"#4fe0a0":"#ffc94a",h.beginPath(),h.arc(S,_,y.t==="cash"?3:4.5,0,6.3),h.fill()),h.globalAlpha=1},p=()=>{if(m!==this.recapId)return;let y=Math.min(1,(performance.now()-x)/g),M=Math.max(1,Math.floor(u.length*y));h.drawImage(r,0,0,i.width,i.height),h.fillStyle="rgba(28,19,48,.18)",h.fillRect(0,0,i.width,i.height),h.lineCap="round",h.lineJoin="round",h.lineWidth=3.5;for(let w=1;w<M;w++){let D=u[w-1],L=u[w];h.strokeStyle=L[2]?"#ff5a6a":"#4fe0a0",h.beginPath(),h.moveTo(D[0]*c,D[1]*c),h.lineTo(L[0]*c,L[1]*c),h.stroke()}let S=Math.floor(f.length*y);for(let w=0;w<f.length;w++)(w<S||y>=1)&&d(f[w],1);let _=u[M-1];_&&(h.fillStyle="#fff6e8",h.strokeStyle="#1c1330",h.lineWidth=2,h.beginPath(),h.arc(_[0]*c,_[1]*c,5,0,6.3),h.fill(),h.stroke()),y<1&&requestAnimationFrame(p)};p();let v=u.length?Math.round(u.filter(y=>y[2]).length/u.length*100):0,b=O(t+"Lg");b&&(b.innerHTML=`<i style="background:#4fe0a0"></i>unseen <i style="background:#ff5a6a"></i>chased ${v}% <i style="background:#ffc94a;border-radius:50%"></i>loot <b style="color:#c77dff">\u2715</b> KO`)}showSoon(){$t.gameplayStop(),this.state="soon",O("soonName").textContent="More heists",O("soonList").innerHTML=["Armored truck ambush","Diamond exchange","Harbor yacht party"].map(t=>`<li>${t}</li>`).join(""),this.screen("soon")}hotTarget(){let t=ii.map((s,a)=>a).filter(s=>this.levelUnlocked(s));if(t.length<2)return-1;let e=t.filter(s=>s>0),i=rh().week;return e[(i*2654435761>>>0)%e.length]}todays(){let t=td(ii.map((i,s)=>({idx:s,owner:!!i.owner,dog:!!i.dog})).filter(i=>this.levelUnlocked(i.idx))),e=this.save.dailyPick;if(e&&e.key===t.key){let i=ah.find(s=>s.id===e.mut);i&&(t.level=e.level,t.mutator=i)}return t}levelUnlocked(t){return[()=>!0,()=>this.bankUnlocked(),()=>this.jewelryUnlocked(),()=>this.museumUnlocked(),()=>this.casinoUnlocked(),()=>this.penthouseUnlocked(),()=>this.trainUnlocked(),()=>this.warehouseUnlocked(),()=>this.mansionUnlocked()][t]?.()||!1}mansionUnlocked(){let t=this.save.best;return!!(t.warehouse||t.warehouse_easy||t.warehouse_hard||t.warehouse_ironman||this.save.mansionOpen)}warehouseUnlocked(){let t=this.save.best;return!!(t.train||t.train_easy||t.train_hard||t.train_ironman||this.save.warehouseOpen)}trainUnlocked(){let t=this.save.best;return!!(t.penthouse||t.penthouse_easy||t.penthouse_hard||t.penthouse_ironman||this.save.trainOpen)}penthouseUnlocked(){let t=this.save.best;return!!(t.casino||t.casino_easy||t.casino_hard||t.casino_ironman||this.save.penthouseOpen)}casinoUnlocked(){let t=this.save.best;return!!(t.museum||t.museum_easy||t.museum_hard||t.museum_ironman||this.save.casinoOpen)}museumUnlocked(){let t=this.save.best;return!!(t.jewelry||t.jewelry_easy||t.jewelry_hard||t.jewelry_ironman||this.save.museumOpen)}jewelryUnlocked(){let t=this.save.best;return!!(t.bank||t.bank_easy||t.bank_hard||t.bank_ironman||this.save.jewelryOpen)}ironUnlocked(){return Object.keys(this.save.best).some(t=>t.endsWith("_hard")||t.endsWith("_ironman"))}bankUnlocked(){let t=this.save.best;return!!(t.safehouse||t.safehouse_easy||t.safehouse_hard||t.safehouse_ironman||this.save.bankOpen)}async useLevel(t){if(this.loadedIdx===t)return;this.level=await Ju(t),this.game.load(this.level),this.buildMinimap(),this.loadedIdx=t,this.audio.theme=t;let e=!!this.level.night;this.scene.background.setHex(e?1317427:16038282),this.scene.fog.color.setHex(e?1712704:15778970),this.scene.fog.near=e?10:16,this.scene.fog.far=e?48:70,this.sky.material.color.setHex(e?2502746:16777215),this.nightSky.visible=e,this.rain.setLevel(this.level.rain?this.game.L:null),this.dust.points.material.color.setHex(e?12110079:16769712),this.hemi.intensity=e?1.1:1.8,this.hemi.color.setHex(e?12109055:16770760),this.sun.intensity=e?.5:1.4,this.sun.color.setHex(e?10465535:16769208),this.vm.hemi.intensity=e?1.6:2.4,this.renderer.compile(this.scene,this.camera)}starsHTML(t){let e="";for(let i=0;i<3;i++)e+=`<span class="${i<t?"on":""}">\u2605</span>`;return e}async start(t,e){t&&(this.mode=t),this.mode||(this.mode="classic"),!t&&this.mode==="tutorial"&&this.save.tutDone&&(this.mode="classic"),this.mode==="classic"&&(e==null||e===0)&&!this.save.tutDone&&(this.levelIdx||0)===0&&(this.mode="tutorial"),this.mode==="daily"?((!this.daily||this.daily.key!==nn())&&(this.daily=this.todays()),e=this.daily.level,this.save.dailyPick={key:this.daily.key,level:e,mut:this.daily.mutator.id}):this.mode==="tutorial"&&(e=0),e!=null&&(this.levelIdx=e);let i=this.loadedIdx!==this.levelIdx;if(i&&await this.useLevel(this.levelIdx),this.mode==="daily"&&(!this.daily||this.daily.key!==nn())&&(this.daily=this.todays()),this.audio.unlock(),this.audio.siren(!1),this.game.reset(),this.input.clear(),this.state="play",this.iris(),this.input.requestLock(),this.runs++,this.startT=this.time,this.screen(null),this.hQ.length=0,this.lastLoot=-1,this.lastSec=-1,this.onLoot(!1,!0),this.onCoins(this.game.coinsLeft),this.ghost=this.mode==="classic"&&(this.save.ghost||{})[gi(this.level.id,this.diff)]||null,O("ghostp").classList.toggle("hidden",!this.ghost),this.ghost&&(O("ghostp").lastChild.textContent=Us(this.ghost.t)),this.onSmoke(this.game.smokesLeft),this.onCrouch(!1),this.onDisguise(this.game.disguiseT),this.level.startDisguise&&setTimeout(()=>{this.state==="play"&&this.announce("\u{1F378} You're dressed as a waiter: from afar nobody looks twice")},1300),this.renderContracts(this.game.contracts),this.tutStep=this.game.tut?this.lastTutLevel===this.level.id?Math.min(this.tutStep||0,3):0:Vi.length,O("tut").dataset.k="",this.lastTutLevel=this.game.tut?this.level.id:null,clearTimeout(this.whyT),O("alarmwhy").classList.add("hidden"),this.mode==="daily"){let s=O("ctoast");s.innerHTML=`<small>DAILY CHALLENGE \xB7 ${this.daily.label}</small>${this.daily.mutator.name}<b>${this.daily.mutator.desc}</b>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>s.classList.add("hidden"),3200)}else i&&this.mode==="classic"&&this.save.tutDone?(this.save.mmSeen||{})[this.level.id]?this.showIntel():(O("ctoast").classList.add("hidden"),clearTimeout(this.intelT),this.intelT=setTimeout(()=>{this.state==="play"&&this.showIntel()},3300)):O("ctoast").classList.add("hidden");if(!(i&&this.mode==="classic"&&this.save.tutDone)&&this.mode!=="daily"){let s=O("gostamp");s.querySelector("small").textContent=this.level.name.toUpperCase()+((this.save.hot||0)>=1&&this.mode==="classic"?`  \xB7  \u{1F525} STREAK ${this.save.hot}`:""),s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.goT),this.goT=setTimeout(()=>s.classList.add("hidden"),1200),this.audio.play("dash")}this.mode==="classic"&&this.game.contracts.length&&!this.save.seenCtr&&(this.save.seenCtr=!0,$t.store(this.save),this.hint("ctr")),this.hint("move"),$t.gameplayStart(),this.game.tut&&this.tutStep===0&&!this.introSeen?this.beginIntro():this.mapIntro()}mapIntro(){let t=this.level.id,e=this.save.mmSeen=this.save.mmSeen||{};e[t]||(e[t]=1,$t.store(this.save),setTimeout(()=>{let i=O("mm");if(!i||this.state!=="play"||!i.animate)return;let s=i.getBoundingClientRect();if(!s.width)return;let a=Math.min(3,Math.min(this.w,this.h)*.62/s.width),r=this.w/2-(s.left+s.width/2),l=this.h*.45-(s.top+s.height/2),o=`translate(${r}px,${l}px) scale(${a})`,h="drop-shadow(0 0 0 rgba(255,210,58,0))",c="drop-shadow(0 0 14px rgba(255,210,58,.95))";i.animate([{transform:o,opacity:0,filter:h,offset:0},{transform:o,opacity:1,filter:c,offset:.1},{transform:o,opacity:.1,filter:h,offset:.24},{transform:o,opacity:1,filter:c,offset:.38},{transform:o,opacity:.1,filter:h,offset:.52},{transform:o,opacity:1,filter:c,offset:.64,easing:"cubic-bezier(.5,0,.2,1.15)"},{transform:"none",opacity:.92,filter:h,offset:1}],{duration:2600}),this.audio.play("click"),setTimeout(()=>this.audio.play("star",0),1650)},700))}beginIntro(){this.introSeen=!0,this.state="intro",this.introI=-1,this.introKO=!1;for(let t of this.game.guards)t.cone.material.opacity=3.2,t.cone.material.color.setHex(16761856);this.input.active=!1,this.input.exitLock();for(let t of["hud","fp","touch","tut","hint","ctoast","gostamp"])O(t).classList.add("hidden");document.body.classList.remove("tutcard"),this.introFrom={p:this.camera.position.clone(),l:this._f.clone()},O("intro").classList.remove("hidden"),this.nextIntro()}nextIntro(){if(this.state!=="intro")return;let t=this.camera;if(this.introI>=0){let a=as[this.introI];this.introFrom={p:t.position.clone(),l:this._introLook?this._introLook.clone():this._f.set(...a.look).clone()}}if(this.introI++,this.introT=0,this.introI>=as.length){this.endIntro();return}let e=as[this.introI],i=O("intro").querySelector(".icard"),s=this.input.touch?1:0;i.querySelector("small").textContent=`HOW TO HEIST ${this.introI+1}/${as.length}`,i.querySelector("b").textContent=e.title,i.querySelector("span").textContent=e.text,i.querySelector(".ikeys").innerHTML=e.keys[s].map(([a,r])=>`<kbd>${a}<em>${r}</em></kbd>`).join(""),i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"),O("bINext").textContent=this.introI===as.length-1?"LET'S GO! \u25B6":"NEXT \u25B6",this.audio.play("click")}updateIntro(t){let e=as[this.introI];if(!e)return;this.introT+=t;let i=this.camera,s=Math.min(1,this.introT/1.3),a=s*s*(3-2*s),r=this.introFrom,l=this.introT*.12,o=e.pos[0]+Math.sin(this.introT*.4)*.4,h=e.pos[2]-l;i.position.set(r.p.x+(o-r.p.x)*a,r.p.y+(e.pos[1]-r.p.y)*a,r.p.z+(h-r.p.z)*a);let c=this._introLook=this._introLook||this._f.clone();c.set(r.l.x+(e.look[0]-r.l.x)*a,r.l.y+(e.look[1]-r.l.y)*a,r.l.z+(e.look[2]-r.l.z)*a),i.lookAt(c);let u=O("intro").querySelector(".ibar i");u.style.width=Math.min(100,this.introT/bl*100)+"%";let f=this.game,x=f.guards[2],g=this.introT;if(e.act==="sneak")f.actor(t,9.6+Math.min(1,g/bl)*5.8,12.45,Math.PI/2,.55,!0);else if(e.act==="ko"&&x){let m=x.z+.85;if(g<1.9)f.actor(t,x.x,6.6-g/1.9*(6.6-m),Math.PI,.6,!0);else{let d=Math.min(1,(g-1.9)/.22);f.actor(t,x.x,m,Math.PI,0,!1,d),!this.introKO&&d>=1&&(this.introKO=!0,f.player.x=x.x,f.player.z=m,f.knockout(x))}}else e.act==="stand"&&x?f.actor(t,x.x+.75,x.z+.5,-2.4,0,!1):f.actorOn&&f.actorOff();this.introT>=bl&&this.nextIntro()}endIntro(){if(this.state==="intro"){O("intro").classList.add("hidden"),this.game.actorOff();for(let t of this.game.guards)t.cone.material.opacity=1,t.cone.material.color.setHex(16769357);this.introKO&&(this.game.reset(),this.introKO=!1),this.state="play",this.input.clear(),this.screen(null),this.iris(),this.input.requestLock(),this.hint("move"),this.audio.play("dash"),this.mapIntro()}}showIntel(){let t=this.game,e=this.level,i=t.L,s=[];i.keys.length&&s.push("\u{1F511} Keycard door"),i.doors.some(r=>r.type==="lock")&&s.push("\u{1F512} Locked door"),t.lasers.length&&s.push("\u{1F534} Lasers"),e.owner&&s.push("\u{1F634} Sleeping owner"),(e.dogs||[]).length&&s.push("\u{1F415} Guard dog"),(e.spots||[]).length&&s.push("\u{1F526} Searchlights"),t.cases.length&&s.push("\u{1F48E} Display cases"),t.slots.length&&s.push("\u{1F3B0} Slot machines"),t.vents.length&&s.push("\u{1F573}\uFE0F Air vent"),t.tvs.length&&s.push("\u{1F4FA} TV lure"),(e.cameras||[]).length&&s.push(`\u{1F4F9} ${e.cameras.length} camera${e.cameras.length>1?"s":""}`),e.train&&s.push("\u{1F682} Moving train"),e.startDisguise&&s.push("\u{1F378} Waiter disguise"),(e.clerks||[]).length&&s.push(`\u{1F64B} ${e.clerks.length} panic-button witness${e.clerks.length>1?"es":""}`),s.push(e.heli?"\u{1F681} Roof extraction":i.van?"\u{1F690} Van out front":"\u{1FA9C} Roof hatch exit");let a=O("ctoast");a.innerHTML=`<small>INTEL \xB7 ${e.name.toUpperCase()}</small>${e.brief?`<span class="brief">${e.brief}</span>`:""}<span class="intel">${s.map(r=>`<i>${r}</i>`).join("")}</span><span class="stargoal">\u2605 Escape \xB7 \u2605 Grab 70% loot \xB7 \u2605 Never get spotted</span>`,a.classList.remove("hidden"),a.style.animation="none",a.offsetWidth,a.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>a.classList.add("hidden"),5200)}async retry(){await this.maybeMidgame(),this.start()}settings(){return Object.assign({sens:1,fov:70,music:.8,sfx:1,invert:!1,shake:!0},this.save.settings||{})}applySettings(){let t=this.settings();this.sens=.0024*t.sens,this.invertY=t.invert,this.fovBase=t.fov,this.audio.setVolumes(t.music,t.sfx),this.shake.scale=t.shake?1:0}showSettings(){this.setFrom=this.state==="pause"?"pause":"menu",this.state="settings";let t=this.settings();O("sSens").value=t.sens,O("sFov").value=t.fov,O("sMus").value=t.music,O("sSfx").value=t.sfx,O("sInv").checked=t.invert,O("sShake").checked=t.shake,this.readSettings(!0),this.screen("settings")}readSettings(t){let e={sens:+O("sSens").value,fov:+O("sFov").value,music:+O("sMus").value,sfx:+O("sSfx").value,invert:O("sInv").checked,shake:O("sShake").checked};O("vSens").textContent=e.sens.toFixed(1)+"\xD7",O("vFov").textContent=e.fov+"\xB0",O("vMus").textContent=Math.round(e.music*100)+"%",O("vSfx").textContent=Math.round(e.sfx*100)+"%",!t&&(this.save.settings=e,$t.store(this.save),this.applySettings(),this.audio.play("click"))}pause(){if(this.state!=="play")return;this.audio.siren(!1),this.state="pause",$t.gameplayStop(),O("pObj").textContent="\u{1F3AF} "+(this.game.objText||""),O("bPSkip").classList.toggle("hidden",!(this.game.tut&&this.tutStep<Vi.length));let t=this.input.touch,e=t?[["\u25C0\u25B6","Left side: move"],["\u{1F446}","Right side: look"],["\u{1F528}","HIT: knock out a guard from behind"],["\u270B","Use \xB7 grab \xB7 crack (hold)"],["\u26A1","Dash (loud!)"],["\u{1F9B6}","Sneak (quiet, slower)"],["\u{1FA99}","Throw a coin (lure)"],["\u{1F4A8}","Smoke bomb"]]:[["WASD","Move"],["Mouse","Look"],["Click","HIT: knock out a guard from behind"],["E","Use \xB7 grab \xB7 crack (hold)"],["Space","Dash (loud!)"],["Z","Sneak (quiet, slower)"],["Q","Throw a coin (lure)"],["C","Smoke bomb"],["R","Restart run"]];O("pKeys").innerHTML=e.map(([i,s])=>`<li><kbd>${i}</kbd>${s}</li>`).join(""),this.screen("pause")}resume(){this.state==="pause"&&(this.state="play",this.input.clear(),this.input.requestLock(),this.game.alarm&&this.audio.siren(!0),this.last=performance.now(),this.screen(null),$t.gameplayStart())}toggleMute(){this.audio.unlock(),this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),$t.store(this.save),this.updateMuteIcon()}updateMuteIcon(){O("bMute").classList.toggle("off",!!this.save.muted)}async maybeMidgame(){let t=performance.now();!Ba||!$t.available||this.runs<2||t-this.lastAd<15e4||(this.lastAd=t,this.state="ad",await $t.ad("midgame"))}async reviveAd(){if(this.freeRevOk&&!this.game.revived){if(this.preBust){let e=JSON.parse(this.preBust);for(let i of Object.keys(this.save))delete this.save[i];Object.assign(this.save,e)}this.save.freeRev=nn(),this.freeRevOk=!1,$t.store(this.save),this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),this.input.requestLock(),this.announce("\u{1F4AA} Second chance! You shook him off. Next free one tomorrow"),$t.gameplayStart();return}if(!Ba||!$t.available||this.game.revived)return;this.state="ad",await $t.ad("rewarded")?(this.game.revive(),this.state="play",this.last=performance.now(),this.screen(null),$t.gameplayStart()):(this.state="busted",O("bRevive").classList.add("hidden"))}hint(t){if(!(!this.level||!this.level.tutorial||this.hShown.has(t)||this.hDone.has(t))){if(this.game&&this.game.tut&&(this.tutStep<Vi.length||["move","loot","safe","pick","cone","stash"].includes(t))){this.hShown.delete(t);return}this.hCur===t||this.hQ.includes(t)||(this.hShown.add(t),this.hQ.push(t))}}hintDone(t){this.hDone.add(t);let e=this.hQ.indexOf(t);e>=0&&this.hQ.splice(e,1),this.hCur===t&&this.hT>1.2&&(this.hT=Math.min(this.hT,.5))}updateHints(t){let e=O("hint");if(this.hCur)this.hT-=t,(this.hT<=0||this.state!=="play"||this.game.state!=="play")&&(this.hCur=null,e.classList.add("hidden"));else if(this.hQ.length&&this.state==="play"){if(this.hCur=this.hQ.shift(),this.hDone.has(this.hCur)&&this.hCur!=="stash"){this.hCur=null;return}e.textContent=dy[this.hCur][this.input.touch?1:0],e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",this.hT=3.4}}setPrompt(t,e=0){let i=O("prompt"),s=O("ring"),a=this.input&&this.input.touch,r=(this.level&&this.level.safeName?this.level.safeName:"safe").toUpperCase(),l=t==="slot"?a?"HOLD \u270B TO PULL THE LEVER":"HOLD E: PULL THE LEVER":t==="radio"?a?"HOLD \u270B TO ANSWER THE RADIO":'HOLD E: ANSWER "ALL CLEAR"':t==="case"?a?"HOLD \u270B TO SMASH":"HOLD E TO SMASH THE CASE":t==="pick"?a?"TAP \u270B TO PICK THE LOCK":"E: PICK THE LOCK":t==="picking"?a?"TAP \u270B IN THE GREEN \xB7 MOVE TO STOP":"E IN THE GREEN \xB7 MOVE TO STOP":t==="breaker"?a?"HOLD \u270B TO CUT POWER":"HOLD E TO CUT THE POWER":t==="door"?a?"TAP \u270B TO OPEN":"E: SWIPE KEYCARD":t==="locked"?"LOCKED: FIND THE KEYCARD":t==="uniform"?a?"HOLD \u270B TO TAKE THE UNIFORM":"HOLD E: TAKE HIS UNIFORM":t==="tv"?a?"TAP \u270B TO TURN THE TV ON":"E: TURN THE TV ON (LURE)":t==="vent"?a?"TAP \u270B TO CRAWL IN":"E: CRAWL INTO THE VENT":t==="hide"?a?"TAP \u270B TO HIDE":"E: HIDE":t==="leave"?a?"TAP \u270B OR MOVE TO LEAVE":"E / MOVE: LEAVE":t==="panel"?a?"HOLD \u270B TO DISARM":"HOLD E TO DISARM ALARM":t==="safe"?a?"HOLD \u270B TO CRACK "+r:"HOLD E TO CRACK "+r:t==="pocket"?a?"HIT: KO \xB7 HOLD \u270B: PICKPOCKET":"CLICK: KO \xB7 HOLD E: PICKPOCKET":t==="ko"?a?"TAP HIT TO KNOCK OUT":"CLICK TO KNOCK OUT":"";i.dataset.k!==t&&(i.dataset.k=t,i.innerHTML=l.replace(/(^|[\s(])(E|✋|CLICK)(?=[\s:/]|$)/g,"$1<kbd>$2</kbd>"),i.classList.toggle("hidden",!t),O("xh").classList.toggle("ready",!!t),this.els.bAct.classList.toggle("ready",!!t&&t!=="ko"),this.els.bHit&&this.els.bHit.classList.toggle("ready",t==="ko"||t==="pocket"),this.els.bAct.lastChild.textContent=t==="pocket"?"LIFT":t==="slot"?"PULL":t==="radio"?"ANSWER":t==="case"?"SMASH":t==="pick"||t==="picking"?"PICK":t==="breaker"?"CUT":t==="door"?"OPEN":t==="uniform"?"DISGUISE":t==="tv"?"TV ON":t==="vent"?"CRAWL":t==="hide"?"HIDE":t==="leave"?"LEAVE":t==="panel"?"DISARM":t==="safe"?"CRACK":t==="ko"?"KO!":"GRAB"),(t==="safe"||t==="uniform"||t==="panel"||t==="breaker"||t==="case"||t==="radio"||t==="slot"||t==="pocket")&&e>0?(s.lastChild.style.strokeDashoffset=String(126*(1-Math.min(1,e))),s.classList.remove("hidden")):s.classList.add("hidden")}setObjective(t){let e=O("obj");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}onLoot(t,e){let i=this.game;if(e||this.lootShown==null)this.lootShown=i.lootGot,O("lootv").textContent=ee(i.lootGot);else if(i.lootGot>this.lootShown){let r=i.lootGot-(this.lootTarget??this.lootShown);if(this.lootTarget=i.lootGot,r>0){let l=O("lootplus");l.textContent="+"+ee(r),l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}}if(O("lootp").textContent=Math.round(i.lootGot/i.lootTotal*100)+"%",O("lootbar").style.width=Math.min(100,i.lootGot/i.lootTotal*100)+"%",!e&&this.mode==="classic"&&i.state==="play"&&!this.bestBeat){let r=(this.save.best[gi(this.level.id,this.diff)]||{}).score||0;r>0&&i.lootGot*i.D.mult>r&&(this.bestBeat=!0,this.announce("\u{1F3C6} New record pace! You already beat your best loot"),this.audio.play("combo",8))}let s=i.lootGot/i.lootTotal>=.7;if(O("lootbar").classList.toggle("star",s),e){this.lootStar=s,this.bestBeat=!1;return}if(s&&!this.lootStar&&i.state==="play"){this.lootStar=!0;let r=O("ctoast");r.innerHTML="<small>LOOT STAR EARNED</small>\u2605 70% grabbed<b>Every extra dollar still counts!</b>",r.classList.remove("hidden"),r.style.animation="none",r.offsetWidth,r.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>r.classList.add("hidden"),2e3),this.audio.play("star",1),this.shake.add(.12)}let a=O("loot");a.classList.remove("punch","bigpunch"),a.offsetWidth,a.classList.add(t?"bigpunch":"punch")}onAlarm(t,e){if(O("alarm").classList.toggle("hidden",!t),O("siren").classList.toggle("on",t),t&&(this.lastAlarmS=-1,e)){let i=O("alarmwhy");i.textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>i.classList.add("hidden"),2600)}}announce(t){let e=O("alarmwhy");e.textContent=t,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(this.whyT),this.whyT=setTimeout(()=>e.classList.add("hidden"),3e3)}onAlarmTime(t){let e=Math.ceil(t);e!==this.lastAlarmS&&(this.lastAlarmS=e,O("alarmt").textContent=Us(e),O("alarm").classList.toggle("hurry",e<=10),e<=10&&e>0&&this.audio.play("tick",1.5))}renderContracts(t,e){O("ctr").innerHTML=t.map(i=>`<li class="${i.st}${i===e?" just":""}"><i></i>${i.text}<b>+${ee(i.bonus)}</b></li>`).join("")}onContract(t,e){if(this.renderContracts(e,t),t.st==="ok"&&this.game.state==="play"){this.audio.play("contract");let i=O("ctoast");i.innerHTML=`<small>CONTRACT COMPLETE</small>${t.text}<b>+${ee(t.bonus)}</b>`,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this.ctT),this.ctT=setTimeout(()=>i.classList.add("hidden"),2200),this.shake.add(.1)}else t.st==="fail"&&this.game.state==="play"&&this.audio.play("lost")}onPick(t){let e=O("lockpick");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");let i=e.querySelector(".lp-zone"),s=e.querySelector(".lp-needle");i.style.left=((t.zone-t.w/2)*100).toFixed(1)+"%",i.style.width=(t.w*100).toFixed(1)+"%",s.style.left=(t.pos*100).toFixed(1)+"%",e.querySelectorAll(".lp-pins b").forEach((a,r)=>a.classList.toggle("on",r<t.pin)),e.classList.toggle("cool",t.cool>0)}onKey(t){if(O("key").classList.toggle("hidden",!t),t){let e=O("key");e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch")}}ventFx(t){let e=O("ventfx");e.style.opacity=t.toFixed(3),e.classList.toggle("hidden",t<=0)}onHide(t){O("slats").classList.toggle("hidden",!t),O("xh").classList.toggle("hidden",t)}foundCat(t){t.mesh.visible=!1,t.got=!0;let e=this.save.cats=this.save.cats||{};e[this.level.id]=1;let i=Object.keys(e).length;this.save.cash=(this.save.cash||0)+1e3,$t.store(this.save),this.floaters.spawn(`\u{1F431} LUCKY CAT ${i}/${ii.length}! +$1,000`,t.x,1.3,t.z,"big",1.8),this.announce(`\u{1F431} Secret found! Lucky cat ${i}/${ii.length} (+$1,000 to your stash)`),this.audio.play("jackpot"),this.flash("gold"),this.shake.add(.2),this.particles.burst(t.x,.4,t.z,{count:24,colors:[16765503,16777215,16752324],speed:3,up:4,size:.08,life:.9})}onBrief(t){let e=O("briefp"),i=Math.ceil(t),s=String(i);e.classList.toggle("hidden",t<=0||this.state!=="play"),t>0&&e.dataset.s!==s&&(e.dataset.s=s,e.textContent=`\u{1F4BC} BRIEFCASE ${i}s`,e.classList.toggle("low",i<=5))}onDisguise(t){let e=O("disgp"),i=t>0;e.classList.toggle("hidden",!i);let s=i&&this.level&&this.level.startDisguise&&!this.game.disguises,a=i?s?"w":"g":"";if(i){let r=Math.ceil(t),l=a+r;e.dataset.s!==l&&(e.dataset.s=l,e.textContent=(s?"\u{1F378} WAITER ":"\u{1F574} DISGUISED ")+r+"s",e.classList.toggle("low",r<=5))}this.disgLook!==a&&(this.disgLook=a,this.disgOn=i,a==="w"?this.vm.setOutfit(_l({sleeve:1512989,glove:16052714,bar:9082020,band:14267482})):a==="g"?this.vm.setOutfit(_l({sleeve:2834298,glove:1711142,bar:9082020,band:15911244})):this.applyOutfit())}onCrouch(t){O("sneakp").classList.toggle("hidden",!t),this.els.bSneak.classList.toggle("on",t),document.body.classList.toggle("crouch",t)}onWeight(t){let e=O("weight"),i=Math.round((1-t)*100);e.classList.toggle("hidden",i<=0),e.textContent=`\u{1F3CB} \u2212${i}%`,e.classList.toggle("hot",i>=25)}onSmoke(t){let e=O("smokep");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bSmoke.lastChild.textContent="\xD7"+t,this.els.bSmoke.classList.toggle("empty",t===0)}onInSmoke(t){this.inSmokeOn!==t&&(this.inSmokeOn=t,O("smokeov").classList.toggle("on",t))}onCoins(t){let e=O("coins");e.lastChild.textContent="\xD7"+t,e.classList.toggle("empty",t===0),e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"),this.els.bThrow.lastChild.textContent="\xD7"+t}lightning(){this.boltK=1,this.flash("bolt")}flash(t){let e=O("flash");e.className="",e.offsetWidth,e.className=t}onEscapeStart(){O("touch").classList.add("hidden"),O("fp").classList.add("hidden"),O("hud").classList.add("hidden"),O("alarm").classList.add("hidden"),this.audio.siren(!1),this.input.exitLock()}awardXP(t,e,i,s){let a=this.save.xp||0,r=ju(t,e,i),l=a+r;this.save.xp=l;let o=pl(a),h=pl(l),c=O(s);c.innerHTML=`<span class="rk">\u{1F396} <b>${o.name}</b></span><span class="xpbar"><i style="width:${(o.frac*100).toFixed(1)}%"></i></span><span class="xpg">+${r} XP</span>`;let u=c.querySelector("i"),f=c.querySelector("b");return setTimeout(()=>{h.i>o.i?(u.style.width="100%",setTimeout(()=>{f.textContent=h.name,u.style.transition="none",u.style.width="0%",u.offsetWidth,u.style.transition="",u.style.width=(h.frac*100).toFixed(1)+"%",c.classList.add("up"),c.querySelector(".xpg").textContent="RANK UP!",this.audio.play("contract"),this.shake.add(.2)},650)):u.style.width=(h.frac*100).toFixed(1)+"%"},900),c.classList.remove("up"),{gain:r,up:h.i>o.i,rank:h}}bustTip(){let t=this.game,e=this.input.touch,i=e?"the \u{1F9B6} button":"Z",s=e?"HIT":"a CLICK";if(t.policeBusted)return"The police arrived! Knock out alerted guards before they radio in, or disarm the alarm keypad.";let a={hide:"Tip: a guard saw you climb in. Only hide when nobody is looking.",owner:"Tip: the owner wakes up to noise. Sneak past slowly and never dash near him.",dash:`Tip: dashing is loud and gets you noticed. Walk, or sneak with ${i}.`,dog:(this.level.dogs||[]).some(o=>o.handler!=null)?"Tip: the dog walks with its handler and barks if it sees you up close. Stay out of its sight, or take the handler out from behind.":"Tip: the dog follows your scent. Throw a coin and it runs off to sniff it.",los:"Tip: once spotted, break line of sight: duck round a corner, hide in a wardrobe or drop smoke.",cone:`Tip: stay out of the yellow vision cones. Sneak with ${i} behind low furniture, and hit guards from behind with ${s}.`},r=this.level.tips||[],l=t.bustCause||"cone";return t.tut?a[l]||a.cone:(l==="cone"||l==="los")&&r.length&&Math.random()<.5?"Tip: "+r[Math.random()*r.length|0]:a[l]||a.cone}onBusted(){this.state="busted",this.audio.siren(!1),$t.gameplayStop(),this.freeRevOk=this.mode!=="daily"&&!this.game.revived&&!this.game.policeBusted&&this.save.freeRev!==nn();let t=Ba&&$t.available&&!this.game.revived&&!this.game.policeBusted;O("bRevive").classList.toggle("hidden",!(this.freeRevOk||t)),O("bRevive").innerHTML=this.freeRevOk?"\u25B6 SECOND CHANCE <small>free \xB7 1 per day</small>":"\u25B6 SECOND CHANCE",O("bustTip").textContent=(this.game.hasStash&&this.mode!=="daily"&&this.levelIdx+1<ii.length&&!this.levelUnlocked(this.levelIdx+1)?`So close! You had the stash: get it all the way back to the ${this.game.L.van?"van":"exit"} to unlock ${ii[this.levelIdx+1].name}. `:"")+this.bustTip(),this.preBust=JSON.stringify(this.save);let e=ch(this.save,this.runRecord(!1));this.awardXP(!1,0,this.game.lootGot,"bXP"),(this.save.hot||0)>=2&&(this.lostStreak=this.save.hot),this.save.hot=0;{let s=Math.round(this.game.lootGot*.25);this.save.cash=(this.save.cash||0)+s,O("bCash").textContent=s?`\u{1F4B0} Kept ${ee(s)} of the loot you grabbed`:""}this.bustStreak=this.bustKey===this.level.id?(this.bustStreak||0)+1:1,this.bustKey=this.level.id,O("bEasy").classList.toggle("hidden",!(this.mode==="classic"&&this.bustStreak>=3&&(this.diff==="normal"||this.diff==="hard"))),$t.store(this.save);let i=this.mode==="tutorial"?"":this.jobsToast(oh(this.save,this.runRecord(!1)));if(this.lostStreak){let s=O("bCash");s.textContent=(s.textContent?s.textContent+" \xB7 ":"")+`\u{1F525} ${this.lostStreak}-escape streak lost`,this.lostStreak=0}O("bAch").innerHTML=e.map(s=>`\u{1F3C6} ${s.icon} ${s.name} unlocked!`).concat(i?[i]:[]).join("<br>"),this.chipify("bAch"),this.screen("busted"),this.drawRecap("bMap",!1)}onWin(t){this.state="result",this.bustStreak=0,this.audio.siren(!1),O("alarm").classList.add("hidden"),O("siren").classList.remove("on"),$t.gameplayStop(),$t.happytime();let e=t.stars.filter(Boolean).length,i,s,a;if(t.daily){let M=this.daily.key,S=this.save.daily=this.save.daily||{};i=S[M]||{score:0,stars:0},s=t.score>i.score,S[M]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)},a=S[M].score;let _=this.save.streak||{last:"",n:0};_.last!==M&&(_.n=_.last===Ha()?_.n+1:1,_.last=M),this.save.streak=_;for(let w of Object.keys(S).sort().slice(0,-14))delete S[w]}else{let M=gi(this.level.id,this.diff);this.nextWasLocked=this.mode==="classic"&&this.levelIdx+1<ii.length&&!this.levelUnlocked(this.levelIdx+1),i=this.save.best[M]||{score:0,stars:0},s=t.score>i.score,this.save.best[M]={score:Math.max(i.score,t.score),stars:Math.max(i.stars,e)};let S=this.save.mastered=this.save.mastered||{};this.justMastered=e>=3&&this.mode==="classic"&&!S[this.level.id],this.justMastered&&(S[this.level.id]=1,this.save.cash=(this.save.cash||0)+2e3),a=this.save.best[M].score;let _=this.ghost,w=!_||t.time<_.t;if(this.ghostMsg=_?w?`\u{1F47B} Beat your ghost by ${(_.t-t.time).toFixed(1)}s!`:`\u{1F47B} Ghost was ${(t.time-_.t).toFixed(1)}s faster`:"",this.mode==="classic"&&(s||w)){let D=this.game.trail,L=[];for(let I=0;I<D.length;I+=2)L.push(Math.round(D[I][0]*10),Math.round(D[I][1]*10));(this.save.ghost=this.save.ghost||{})[M]={t:t.time,dt:.7,pts:L}}}this.save.contracts=(this.save.contracts||0)+t.contracts.filter(M=>M.st==="ok").length,$t.store(this.save),O("rStars").innerHTML=this.starsHTML(0);let r=["Escaped with the stash","Loot 70%+ ("+Math.round(t.frac*100)+"%)","Ghost: never spotted"];O("rGoals").innerHTML=t.stars.map((M,S)=>`<li class="${M?"ok":""}">${M?"\u2714":"\u2716"} ${r[S]}</li>`).join(""),O("rLoot").textContent=ee(t.loot),O("rTime").textContent=Us(t.time)+(t.timeBonus?`  (+${ee(t.timeBonus)})`:""),O("rGhost").textContent=t.ghost?"+"+ee(t.ghostBonus):"\u2014",O("rScore").textContent="$0",O("rCtr").innerHTML=t.contracts.map(M=>`<li class="${M.st==="ok"?"ok":"no"}">${M.st==="ok"?"\u2714":"\u2716"} ${M.text}<b>${M.st==="ok"?"+"+ee(M.bonus):"\u2014"}</b></li>`).join(""),O("rCtrTotal").textContent="Contracts done (all time): "+(this.save.contracts||0),O("rBest").textContent=(s?"NEW BEST!":"Best "+ee(a))+" \xB7 "+t.diff+(t.daily?` \xB7 \u{1F525}${this.save.streak.n} day streak \xB7 next Daily in ${ml()}`:""),O("rMult").textContent=t.mult===1?"":`${t.diff} \xD7${t.mult}`,O("rBest").classList.toggle("new",s),!t.daily&&this.ghostMsg&&(O("rBest").textContent+="  \xB7  "+this.ghostMsg);let l=this.game.tut&&!this.save.tutDone;this.game.tut&&(this.save.tutDone=!0);let o=ch(this.save,this.runRecord(!0,t));this.awardXP(!0,t.score,t.loot,"rXP");let h=this.jobsToast(oh(this.save,this.runRecord(!0,t))),c=this.mode==="tutorial"?0:this.save.hot=(this.save.hot||0)+1,u=Math.min(.5,.1*Math.max(0,c-1)),f=Math.round(t.score*u),x=this.mode==="classic"&&this.levelIdx===this.hotTarget()?t.score:0;this.save.cash=(this.save.cash||0)+t.score+f+x,O("rCash").textContent=`\u{1F4B0} +${ee(t.score+f+x)} to your stash${x?" (\u{1F3AF} hot target \xD72)":""}${f?` (\u{1F525} streak ${c}: +${Math.round(u*100)}%)`:""} \xB7 ${ee(this.save.cash)}${this.canAffordGear()?" \xB7 \u{1F9F0} new gear!":""}`;let g=Fn.filter(M=>M.id!=="classic"&&Bs(M,this.save)&&!(this.save.seenOut||[]).includes(M.id));this.save.seenOut=Fn.filter(M=>Bs(M,this.save)).map(M=>M.id),this.showAchToast(o),l&&(O("rAch").innerHTML="\u{1F393} <b>Tutorial complete!</b> Contracts, difficulty and the Daily are yours now."+(O("rAch").innerHTML?"<br>"+O("rAch").innerHTML:""),O("rAch").classList.remove("hidden"));let m=this.levelIdx+1,d=!t.daily&&m<ii.length&&this.levelUnlocked(m);O("bNext").textContent=t.daily?"MAP \u25B6":d?"NEXT: "+ii[m].name.toUpperCase()+" \u25B6":"NEXT \u25B6",!t.daily&&this.nextWasLocked&&d&&(this.sel=this.save.sel="lvl"+(m+1),O("rAch").innerHTML=`<span class="unlock">\u{1F513} New heist unlocked: <b>${ii[m].name}</b></span>`+(O("rAch").innerHTML?"<br>"+O("rAch").innerHTML:""),O("rAch").classList.remove("hidden"),setTimeout(()=>{this.state==="result"&&(this.audio.play("unlock"),this.shake.add(.15))},1500)),this.nextWasLocked=!1,this.justMastered&&(O("rAch").innerHTML='<span class="unlock">\u{1F3C5} Heist mastered! +$2,000 bonus</span><br>'+O("rAch").innerHTML,O("rAch").classList.remove("hidden"),this.justMastered=!1),h&&(O("rAch").innerHTML+=(O("rAch").innerHTML?"<br>":"")+h,O("rAch").classList.remove("hidden")),g.length&&(O("rAch").innerHTML+=`<br>\u{1F9E4} New outfit: <b>${g.map(M=>M.name).join(", ")}</b>`,O("rAch").classList.remove("hidden")),$t.store(this.save),this.chipify("rAch"),this.screen("result"),this.drawRecap("rMap",!0);let p=O("rStars").children;t.stars.forEach((M,S)=>{M&&setTimeout(()=>{this.state==="result"&&(p[S].classList.add("on","pop"),this.audio.play("star",S),this.shake.add(.12))},450+S*380)});let v=performance.now(),b=1100,y=()=>{let M=Math.min(1,(performance.now()-v)/b);O("rScore").textContent=ee(t.score*(1-Math.pow(1-M,3))),M<1&&this.state==="result"&&requestAnimationFrame(y)};y()}resize(){this.w=innerWidth,this.h=innerHeight,this.aspect=this.w/this.h,this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.vm.resize(this.aspect)}frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e;let i=this.state;i==="play"||i==="busted"&&this.game.state==="caught"&&!this.game.endSent?this.game.update(e,!1):(i==="menu"||i==="soon"||i==="intro")&&this.game.update(e,!0),i!=="pause"&&i!=="ad"&&(this.particles.update(e,this.camera),this.shake.update(e)),this.updateCamera(e),this.sky.position.copy(this.camera.position),this.nightSky.position.copy(this.camera.position),i!=="pause"&&this.dust.update(e,this.camera.position.x,this.camera.position.z),i!=="pause"&&this.rain.update(e,this.camera.position.x,this.camera.position.z);{let s=this.game,a=s.L,r=s.player,l=i==="play"&&this.level&&this.level.rain&&a&&a.outdoor[Math.floor(r.z)*a.W+Math.floor(r.x)]===1;this.wetK=Te(this.wetK||0,l?1:0,l?2.5:.8,e);let o=O("wet");o.style.opacity=this.wetK.toFixed(2),o.classList.toggle("hidden",this.wetK<.02)}this.audio.rain(!!(this.level&&this.level.rain)&&(i==="play"||i==="pause"||i==="busted")),this.audio.rumble(!!(this.level&&this.level.train)&&(i==="play"||i==="pause"||i==="busted")),this.boltK>0&&(this.boltK=Math.max(0,this.boltK-e*2.2)),this.renderer.toneMappingExposure=1.15+this.boltK*this.boltK*1.6,this.dust.points.visible=i!=="menu"&&i!=="soon",this.floaters.update(i==="pause"?0:e,this.camera,this.w,this.h),this.updateHints(e),i==="play"&&this.updateHud(),this.audio.setMuffle(i==="play"&&this.game.slowT>.05),this.audio.tension=i==="play"?this.game.tension:0,this.audio.mode=i==="menu"||i==="soon"||i==="trophies"||i==="outfits"?"menu":"game",O("vignette").style.opacity=i==="play"&&this.game.tension?1:0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),i==="outfits"&&(this.vm.mat.color.setRGB(1.05,1,.95),this.vm.update(e,{move:0,bob:0,lookX:0,lookY:0,punch:0,crack:!1,grab:0,dash:!1,busted:!1})),this.vm.visible=i==="outfits"||(i==="play"||i==="busted"||i==="pause")&&(this.game.state==="play"||this.game.state==="caught")&&!this.game.player.hiding,this.vm.render(this.renderer),this.adaptRes(e)}skipTutorial(){this.save.tutDone=!0,$t.store(this.save),this.tutStep=Vi.length,O("tut").classList.add("hidden"),this.audio.play("click")}updateTutorial(){let t=O("tut"),e=this.game;if(!e.tut||this.tutStep>=Vi.length){e.tutAt=null,t.classList.add("hidden"),document.body.classList.remove("tutcard");return}if(this.tutStep==null&&(this.tutStep=0),Vi[this.tutStep].done(e)&&(this.tutStep++,!e.player.hiding&&!e.player.venting&&(e.tutCheck={x:e.player.x,z:e.player.z}),this.audio.play("star",Math.min(2,this.tutStep%3)),t.classList.remove("done"),t.offsetWidth,t.classList.add("done"),this.tutStep>=Vi.length)){setTimeout(()=>t.classList.add("hidden"),900);return}let s=Vi[this.tutStep],a=this.tutStep+(this.input.touch?"t":"k");e.tutAt=s.at||null,t.dataset.k!==a&&(t.dataset.k=a,t.querySelector("small").textContent=`TUTORIAL ${this.tutStep+1}/${Vi.length}`,t.querySelector("span").textContent=s.text[this.input.touch?1:0],O("tutSkip").innerHTML=this.input.touch?"SKIP TUTORIAL \u25B6":"SKIP TUTORIAL <kbd>T</kbd>",t.querySelector("i").style.width=this.tutStep/Vi.length*100+"%"),t.classList.toggle("hidden",e.alarm||e.state!=="play"),document.body.classList.toggle("tutcard",!t.classList.contains("hidden"))}updateHud(){this.updateTutorial();let t=this.game,e=t.player;this.lootShown!=null&&this.lootShown<t.lootGot?(this.lootShown=Math.min(t.lootGot,this.lootShown+Math.max(7,(t.lootGot-this.lootShown)*.18)),O("lootv").textContent=ee(Math.round(this.lootShown))):this.lootShown!=null&&this.lootShown>t.lootGot&&(this.lootShown=t.lootGot,O("lootv").textContent=ee(t.lootGot));let i=Math.floor(t.time);i!==this.lastSec&&(this.lastSec=i,O("time").textContent=Us(i)),this.drawMinimap();let s=O("wp"),a=t.objectiveTarget(),r=a.x,l=a.z,o=a.label,h=Math.hypot(r-e.x,l-e.z);if(t.state!=="play"||h<1.6)s.classList.add("hidden");else{s.classList.remove("hidden");let u=this._d.set(r,1.1,l).project(this.camera),f=u.x,x=u.y,g=u.z>1;g&&(f=-f,x=-x);let m=.88,d=g||Math.abs(f)>m||Math.abs(x)>m;if(d){let y=m/Math.max(Math.abs(f),Math.abs(x),.001);f*=y,x*=y,g&&Math.abs(x)<m-.01&&(x=-m)}d&&f<-.4&&x>-.3&&(f=-.4),s.classList.toggle("edge",d);let p=Math.max(64,Math.min(this.w-64,(f+1)/2*this.w)),v=Math.max(40,Math.min(this.h-40,(1-x)/2*this.h));if(this.input.touch){(!this.btnRects||this.time-(this.btnRectT||0)>1)&&(this.btnRectT=this.time,this.btnRects=["bAct","bHit","bDash","bThrow","bSmoke","bSneak"].map(y=>O(y).getBoundingClientRect()).filter(y=>y.width));for(let y of this.btnRects)p>y.left-70&&p<y.right+70&&v>y.top-24&&v<y.bottom+24&&(v=Math.max(40,y.top-30))}s.style.transform=`translate(${p}px,${v}px) translate(-50%,-50%)`;let b=o+" "+Math.round(h*1.5)+"m";s.dataset.t!==b&&(s.dataset.t=b,s.lastChild.textContent=b)}let c=O("ind");t.guards.forEach((u,f)=>{let x=c.children[f];x||(x=document.createElement("i"),c.appendChild(x));let g=u.state==="alert"||u.state==="flee",m=!g&&(u.susp>.04||u.state==="investigate"||u.state==="search");if(!g&&!m){x.style.display="none";return}let d=Ie(e.face,Math.atan2(u.x-e.x,u.z-e.z));x.style.display="",x.className=g?"alert":"",x.style.opacity=g?1:(.35+u.susp*.65).toFixed(2),x.style.transform=`translate(-50%,-50%) rotate(${-d*180/Math.PI}deg) translateY(-${this.h<500?70:96}px)`})}buildMinimap(){let t=this.game.L,e=5,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let s=i.getContext("2d");for(let r=0;r<t.H;r++)for(let l=0;l<t.W;l++){let o=r*t.W+l,h=t.ch[o],c=t.floor[o];s.fillStyle=h==="#"?"#1d2140":!t.walk[o]&&!t.outdoor[o]?"#9a8cc0":t.outdoor[o]?c==="road"?"#7d8596":"#5fae4c":c==="wood"?"#f0d3a6":c==="carpet"?"#d9dcf6":"#f4f0e8",s.fillRect(l*e,r*e,e,e)}for(let r of this.game.vents||[]){let l=r.gx*e,o=r.gz*e;s.fillStyle="#6a7484",s.fillRect(l-3,o-3,6,6),s.fillStyle="#1d2140",s.fillRect(l-2,o-1.5,4,1),s.fillRect(l-2,o+.5,4,1)}this.mmBase=i,this.mmS=e;let a=O("mm");a.width=i.width,a.height=i.height,this.mmCtx=a.getContext("2d")}drawMinimap(){let t=this.game,e=this.mmCtx,i=this.mmS,s=t.player;if(!e)return;e.drawImage(this.mmBase,0,0);for(let h of t.loot)e.fillStyle=h.type==="cash"?"#2fbf5a":h.type==="gold"?"#f5b301":h.type==="jewel"?"#20c8e8":"#ff6b9a",e.fillRect(h.x*i-1.5,h.z*i-1.5,3,3);t.brief&&Math.sin(this.time*10)>-.2&&(e.fillStyle="#ffb000",e.strokeStyle="#fff",e.lineWidth=1.5,e.beginPath(),e.arc(t.brief.x*i,t.brief.z*i,4.5,0,6.3),e.fill(),e.stroke()),t.safeOpen||(e.fillStyle="#ffd23f",e.fillRect((t.L.safe.x+.15)*i,(t.L.safe.y+.15)*i,i*.7,i*.7)),t.hasStash&&(e.strokeStyle="#3ddc84",e.lineWidth=2,e.beginPath(),e.arc(t.L.exit.x*i,t.L.exit.z*i,i,0,6.3),e.stroke());for(let h of t.guards){let c=h.state==="ko"||h.state==="getup"||h.state==="sleep",u=h.state==="alert"||h.state==="flee"?"#ff3b4e":h.kind==="clerk"?"#f4f1ea":h.susp>.25?"#ff9f1c":c?"#8a8fae":"#3f6fe0";if(!c){e.fillStyle=h.state==="alert"?"rgba(255,59,78,.3)":"rgba(255,225,77,.35)",e.beginPath(),e.moveTo(h.x*i,h.z*i);let f=-h.face+Math.PI/2;e.arc(h.x*i,h.z*i,h.range*i,f-h.fov/2,f+h.fov/2),e.closePath(),e.fill()}e.fillStyle=u,e.beginPath(),e.arc(h.x*i,h.z*i,2.6,0,6.3),e.fill()}if(!t.powerOff)for(let h of t.spots)e.fillStyle=h.cool>0?"rgba(255,48,64,.6)":"rgba(255,240,176,.55)",e.beginPath(),e.arc(h.x*i,h.z*i,h.def.r*i,0,6.3),e.fill();if(!t.powerOff)for(let h of t.lasers)e.fillStyle=h.on?"#ff3040":"rgba(255,48,64,.3)",h.alongX?e.fillRect(h.lo*i,h.line*i-1,(h.hi-h.lo)*i,2):e.fillRect(h.line*i-1,h.lo*i,2,(h.hi-h.lo)*i);for(let h of t.doors)e.fillStyle=h.open?"#3ddc84":"#ff3b4e",e.fillRect(h.x*i,h.y*i,i,i);for(let h of t.keyMeshes)h.m.visible&&(e.fillStyle="#2f7ae8",e.fillRect(h.x*i+.5,h.y*i+.5,i-1,i-1));for(let h of t.dogs)e.fillStyle=h.state==="bark"||h.state==="barkHide"?"#ff3b4e":"#c98a4a",e.fillRect(h.x*i-2,h.z*i-2,4,4);let a=this.ghost;if(a&&a.pts.length>3){let h=a.pts,c=h.length/2;e.strokeStyle="rgba(199,125,255,.45)",e.lineWidth=1.5,e.setLineDash([3,3]),e.beginPath(),e.moveTo(h[0]/10*i,h[1]/10*i);for(let p=1;p<c;p++)e.lineTo(h[p*2]/10*i,h[p*2+1]/10*i);e.stroke(),e.setLineDash([]);let u=Math.min(c-1,t.time/a.dt),f=Math.floor(u),x=Math.min(c-1,f+1),g=u-f,m=(h[f*2]+(h[x*2]-h[f*2])*g)/10*i,d=(h[f*2+1]+(h[x*2+1]-h[f*2+1])*g)/10*i;e.fillStyle="rgba(199,125,255,.95)",e.beginPath(),e.arc(m,d,3.4,0,6.3),e.fill(),e.strokeStyle="#fff",e.lineWidth=1,e.stroke()}let r=-s.face+Math.PI/2,l=s.x*i,o=s.z*i;e.fillStyle="#fff",e.strokeStyle="#17c3a2",e.lineWidth=1.5,e.beginPath(),e.moveTo(l+Math.cos(r)*5,o+Math.sin(r)*5),e.lineTo(l+Math.cos(r+2.5)*4,o+Math.sin(r+2.5)*4),e.lineTo(l+Math.cos(r-2.5)*4,o+Math.sin(r-2.5)*4),e.closePath(),e.fill(),e.stroke()}updateCamera(t){let e=this.game,i=e.L,s=this.camera,a=this.aspect<1?1+(1-this.aspect)*1.6:1,r;if(this.state==="intro")this.updateIntro(t),r=this.aspect<1?62:50;else if(this.state==="menu"||this.state==="soon"){let l=this.time*.07,o=this._f.set(i.W/2,0,i.H/2-2);s.position.set(o.x+Math.sin(l)*17*a,19*a,o.z+Math.cos(l)*17*a),s.lookAt(o),r=42}else{e.applyCamera(s,t),r=(this.aspect<1?this.fovBase+14:this.fovBase)+e.fovKick+(e.fovPunch||0);let l=O("speed"),o=Math.min(1,e.fovKick/9).toFixed(2);l.dataset.o!==o&&(l.dataset.o=o,l.style.opacity=o)}Math.abs(s.fov-r)>.01&&(s.fov=r,s.updateProjectionMatrix())}adaptRes(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc<2)return;let e=this.frameAcc/this.frameN;if(this.frameAcc=0,this.frameN=0,!document.hidden){if(e>1/45&&this.dpr>.6)this.dpr=Math.max(.6,this.dpr-.15),this.goodWin=0;else if(e<1/57)if(++this.goodWin>=3&&this.dpr<Math.min(devicePixelRatio||1,this.maxDpr))this.dpr=Math.min(this.maxDpr,this.dpr+.1),this.goodWin=0;else return;else return;this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1)}}},ad=new hh;window.__app=ad;ad.boot().catch(n=>{console.error(n);let t=O("loading");t.classList.remove("hidden"),t.querySelector("p").textContent="Oops! Your browser could not start the game (WebGL needed)."});
