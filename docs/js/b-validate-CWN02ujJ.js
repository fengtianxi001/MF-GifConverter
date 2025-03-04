var y=Object.prototype.toString;function j(i){return y.call(i)==="[object Array]"}function f(i){return y.call(i)==="[object Object]"}function _(i){return y.call(i)==="[object String]"}function P(i){return y.call(i)==="[object Number]"&&i===i}function T(i){return y.call(i)==="[object Boolean]"}function E(i){return y.call(i)==="[object Function]"}function z(i){return f(i)&&Object.keys(i).length===0}function b(i){return i==null||i===""}function w(i){return j(i)&&!i.length}var x=function(i,t){if(typeof i!="object"||typeof t!="object")return i===t;if(E(i)&&E(t))return i===t||i.toString()===t.toString();if(Object.keys(i).length!==Object.keys(t).length)return!1;for(var a in i){var r=x(i[a],t[a]);if(!r)return!1}return!0},q=function(i,t){var a=Object.assign({},i);return Object.keys(t||{}).forEach(function(r){var e=a[r],n=t==null?void 0:t[r];a[r]=f(e)?Object.assign(Object.assign({},e),n):n||e}),a},N=function(i,t){for(var a=t.split("."),r=i,e=0;e<a.length;e++)if(r=r&&r[a[e]],r===void 0)return r;return r},p="#{field} is not a #{type} type",R={required:"#{field} is required",type:{ip:p,email:p,url:p,string:p,number:p,array:p,object:p,boolean:p},number:{min:"`#{value}` is not greater than `#{min}`",max:"`#{value}` is not less than `#{max}`",equal:"`#{value}` is not equal to `#{equal}`",range:"`#{value}` is not in range `#{min} ~ #{max}`",positive:"`#{value}` is not a positive number",negative:"`#{value}` is not a negative number"},string:{maxLength:"#{field} cannot be longer than #{maxLength} characters",minLength:"#{field} must be at least #{minLength} characters",length:"#{field} must be exactly #{length} characters",match:"`#{value}` does not match pattern #{pattern}",uppercase:"`#{value}` must be all uppercase",lowercase:"`#{value}` must be all lowercased"},array:{length:"#{field} must be exactly #{length} in length",minLength:"#{field} cannot be less than #{minLength} in length",maxLength:"#{field} cannot be greater than #{maxLength} in length",includes:"#{field} is not includes #{includes}",deepEqual:"#{field} is not deep equal with #{deepEqual}",empty:"#{field} is not an empty array"},object:{deepEqual:"#{field} is not deep equal to expected value",hasKeys:"#{field} does not contain required fields",empty:"#{field} is not an empty object"},boolean:{true:"Expect true but got `#{value}`",false:"Expect false but got `#{value}`"}},c=function(t,a){var r=this;this.getValidateMsg=function(e,n){n===void 0&&(n={});var o=Object.assign(Object.assign({},n),{value:r.obj,field:r.field,type:r.type}),s=N(r.validateMessages,e);return E(s)?s(o):_(s)?s.replace(/\#\{.+?\}/g,function(d){var g=d.slice(2,-1);if(g in o){if(f(o[g])||j(o[g]))try{return JSON.stringify(o[g])}catch{return o[g]}return String(o[g])}return d}):s},f(a)&&_(t)&&a.trim?this.obj=t.trim():f(a)&&a.ignoreEmptyString&&t===""?this.obj=void 0:this.obj=t,this.message=a.message,this.type=a.type,this.error=null,this.field=a.field||a.type,this.validateMessages=q(R,a.validateMessages)},m={not:{configurable:!0},isRequired:{configurable:!0},end:{configurable:!0}};m.not.get=function(){return this._not=!this._not,this};m.isRequired.get=function(){if(b(this.obj)||w(this.obj)){var i=this.getValidateMsg("required");this.error={value:this.obj,type:this.type,requiredError:!0,message:this.message||(f(i)?i:(this._not?"[NOT MODE]:":"")+i)}}return this};m.end.get=function(){return this.error};c.prototype.addError=function(t){!this.error&&t&&(this.error={value:this.obj,type:this.type,message:this.message||(f(t)?t:(this._not?"[NOT MODE]:":"")+t)})};c.prototype.validate=function(t,a){var r=this._not?t:!t;return r&&this.addError(a),this};c.prototype.collect=function(t){t&&t(this.error)};Object.defineProperties(c.prototype,m);var K=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"string"})),this.validate(e&&e.strict?_(this.obj):!0,this.getValidateMsg("type.string"))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={uppercase:{configurable:!0},lowercase:{configurable:!0}};return t.prototype.maxLength=function(e){return this.obj?this.validate(this.obj.length<=e,this.getValidateMsg("string.maxLength",{maxLength:e})):this},t.prototype.minLength=function(e){return this.obj?this.validate(this.obj.length>=e,this.getValidateMsg("string.minLength",{minLength:e})):this},t.prototype.length=function(e){return this.obj?this.validate(this.obj.length===e,this.getValidateMsg("string.length",{length:e})):this},t.prototype.match=function(e){var n=e instanceof RegExp;return n&&(e.lastIndex=0),this.validate(this.obj===void 0||n&&e.test(this.obj),this.getValidateMsg("string.match",{pattern:e}))},a.uppercase.get=function(){return this.obj?this.validate(this.obj.toUpperCase()===this.obj,this.getValidateMsg("string.uppercase")):this},a.lowercase.get=function(){return this.obj?this.validate(this.obj.toLowerCase()===this.obj,this.getValidateMsg("string.lowercase")):this},Object.defineProperties(t.prototype,a),t}(c),D=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"number"})),this.validate(e&&e.strict?P(this.obj):!0,this.getValidateMsg("type.number"))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={positive:{configurable:!0},negative:{configurable:!0}};return t.prototype.min=function(e){return b(this.obj)?this:this.validate(this.obj>=e,this.getValidateMsg("number.min",{min:e}))},t.prototype.max=function(e){return b(this.obj)?this:this.validate(this.obj<=e,this.getValidateMsg("number.max",{max:e}))},t.prototype.equal=function(e){return b(this.obj)?this:this.validate(this.obj===e,this.getValidateMsg("number.equal",{equal:e}))},t.prototype.range=function(e,n){return b(this.obj)?this:this.validate(this.obj>=e&&this.obj<=n,this.getValidateMsg("number.range",{min:e,max:n}))},a.positive.get=function(){return b(this.obj)?this:this.validate(this.obj>0,this.getValidateMsg("number.positive"))},a.negative.get=function(){return b(this.obj)?this:this.validate(this.obj<0,this.getValidateMsg("number.negative"))},Object.defineProperties(t.prototype,a),t}(c),F=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"array"})),this.validate(e&&e.strict?j(this.obj):!0,this.getValidateMsg("type.array",{value:this.obj,type:this.type}))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={empty:{configurable:!0}};return t.prototype.length=function(e){return this.obj?this.validate(this.obj.length===e,this.getValidateMsg("array.length",{value:this.obj,length:e})):this},t.prototype.minLength=function(e){return this.obj?this.validate(this.obj.length>=e,this.getValidateMsg("array.minLength",{value:this.obj,minLength:e})):this},t.prototype.maxLength=function(e){return this.obj?this.validate(this.obj.length<=e,this.getValidateMsg("array.maxLength",{value:this.obj,maxLength:e})):this},t.prototype.includes=function(e){var n=this;return this.obj?this.validate(e.every(function(o){return n.obj.indexOf(o)!==-1}),this.getValidateMsg("array.includes",{value:this.obj,includes:e})):this},t.prototype.deepEqual=function(e){return this.obj?this.validate(x(this.obj,e),this.getValidateMsg("array.deepEqual",{value:this.obj,deepEqual:e})):this},a.empty.get=function(){return this.validate(w(this.obj),this.getValidateMsg("array.empty",{value:this.obj}))},Object.defineProperties(t.prototype,a),t}(c),I=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"object"})),this.validate(e&&e.strict?f(this.obj):!0,this.getValidateMsg("type.object"))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={empty:{configurable:!0}};return t.prototype.deepEqual=function(e){return this.obj?this.validate(x(this.obj,e),this.getValidateMsg("object.deepEqual",{deepEqual:e})):this},t.prototype.hasKeys=function(e){var n=this;return this.obj?this.validate(e.every(function(o){return n.obj[o]}),this.getValidateMsg("object.hasKeys",{keys:e})):this},a.empty.get=function(){return this.validate(z(this.obj),this.getValidateMsg("object.empty"))},Object.defineProperties(t.prototype,a),t}(c),U=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"boolean"})),this.validate(e&&e.strict?T(this.obj):!0,this.getValidateMsg("type.boolean"))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={true:{configurable:!0},false:{configurable:!0}};return a.true.get=function(){return this.validate(this.obj===!0,this.getValidateMsg("boolean.true"))},a.false.get=function(){return this.validate(this.obj===!1,this.getValidateMsg("boolean.false"))},Object.defineProperties(t.prototype,a),t}(c),Z=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,G=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),J=/^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/,Y=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"type"}))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={email:{configurable:!0},url:{configurable:!0},ip:{configurable:!0}};return a.email.get=function(){return this.type="email",this.validate(this.obj===void 0||Z.test(this.obj),this.getValidateMsg("type.email"))},a.url.get=function(){return this.type="url",this.validate(this.obj===void 0||G.test(this.obj),this.getValidateMsg("type.url"))},a.ip.get=function(){return this.type="ip",this.validate(this.obj===void 0||J.test(this.obj),this.getValidateMsg("type.ip"))},Object.defineProperties(t.prototype,a),t}(c),H=function(i){function t(r,e){i.call(this,r,Object.assign(Object.assign({},e),{type:"custom"}))}i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t;var a={validate:{configurable:!0}};return a.validate.get=function(){var r=this;return function(e,n){var o;if(e)return o=e(r.obj,r.addError.bind(r)),o&&o.then?(n&&o.then(function(){n&&n(r.error)},function(s){console.error(s)}),[o,r]):(n&&n(r.error),r.error)}},Object.defineProperties(t.prototype,a),t}(c),v=function(i,t){return new S(i,Object.assign({field:"value"},t))};v.globalConfig={};v.setGlobalConfig=function(i){v.globalConfig=i||{}};var S=function(t,a){var r=v.globalConfig,e=Object.assign(Object.assign(Object.assign({},r),a),{validateMessages:q(r.validateMessages,a.validateMessages)});this.string=new K(t,e),this.number=new D(t,e),this.array=new F(t,e),this.object=new I(t,e),this.boolean=new U(t,e),this.type=new Y(t,e),this.custom=new H(t,e)},A=function(t,a){a===void 0&&(a={}),this.schema=t,this.options=a};A.prototype.messages=function(t){this.options=Object.assign(Object.assign({},this.options),{validateMessages:q(this.options.validateMessages,t)})};A.prototype.validate=function(t,a){var r=this;if(!f(t))return;var e=[],n=null;function o(s,d){n||(n={}),(!n[s]||d.requiredError)&&(n[s]=d)}this.schema&&Object.keys(this.schema).forEach(function(s){if(j(r.schema[s]))for(var d=function($){var l=r.schema[s][$],O=l.type,C=l.message;if(!O&&!l.validator)throw"You must specify a type to field "+s+"!";var V=Object.assign(Object.assign({},r.options),{message:C,field:s});"ignoreEmptyString"in l&&(V.ignoreEmptyString=l.ignoreEmptyString),"strict"in l&&(V.strict=l.strict);var M=new S(t[s],V),u=M.type[O]||null;if(!u)if(l.validator){u=M.custom.validate(l.validator),Object.prototype.toString.call(u)==="[object Array]"&&u[0].then?e.push({function:u[0],_this:u[1],key:s}):u&&o(s,u);return}else u=M[O];if(Object.keys(l).forEach(function(h){l.required&&(u=u.isRequired),h!=="message"&&u[h]&&l[h]&&typeof u[h]=="object"&&(u=u[h]),u[h]&&l[h]!==void 0&&typeof u[h]=="function"&&(u=u[h](l[h]))}),u.collect(function(h){h&&o(s,h)}),n)return"break"},g=0;g<r.schema[s].length;g++){var L=d(g);if(L==="break")break}}),e.length>0?Promise.all(e.map(function(s){return s.function})).then(function(){e.forEach(function(s){s._this.error&&o(s.key,s._this.error)}),a&&a(n)}):a&&a(n)};export{A as S};
