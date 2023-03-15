import{_ as v,f as m,o as x,c as b,p as A,g,a as R}from"./app.e12c69cb.js";function p(o,n,r){let t=o.createShader(n);if(o.shaderSource(t,r),o.compileShader(t),o.getShaderParameter(t,o.COMPILE_STATUS))return t;console.log(o.getShaderInfoLog(t)),o.deleteShader(t)}function P(o,n,r){let t=o.createProgram();if(o.attachShader(t,n),o.attachShader(t,r),o.linkProgram(t),o.getProgramParameter(t,o.LINK_STATUS))return t;console.log(o.getProgramInfoLog),o.deleteProgram(t)}function z(o,[n,r]){return P(o,p(o,o.VERTEX_SHADER,n),p(o,o.FRAGMENT_SHADER,r))}function u(o){return Math.floor(Math.random()*o)}function B(o,n,r){let t=o.height!==r||o.width!==n;return t&&(o.height=r,o.width=n),t}function w(o){o.forEach(n=>{let r,t,a=window.devicePixelRatio;"devicePixelContentBoxSize"in n?(console.log("devicePixelContentBoxSize, displayHeight: ",n.devicePixelContentBoxSize[0].blockSize),r=n.devicePixelContentBoxSize[0].blockSize,t=n.devicePixelContentBoxSize[0].inlineSize):"contentBoxSize"in n?(r=Math.round(n.contentBoxSize[0].blockSize*a),t=Math.round(n.contentBoxSize[0].inlineSize*a)):(r=Math.round(n.contentRect.height*a),t=Math.round(n.contentRect.width*a)),B(n.target,t,r)})}const M=o=>(A("data-v-67c8e44e"),o=o(),g(),o),C={class:"wrapper"},E=M(()=>R("canvas",{id:"webgl2"},"Unsupporting WebGL",-1)),I=[E],L={__name:"App",setup(o){m(()=>t());var n=`#version 300 es
    in vec2 a_position;
    uniform vec2 u_resolution;

    void main() {
        vec2 clipSpace = (a_position/u_resolution) * 2.0 - 1.0;
        gl_Position = vec4(clipSpace*vec2(1, -1), 0, 1);
    }
`,r=`#version 300 es
    precision highp float;

    uniform vec4 u_color;
    out vec4 outColor;

    void main() {
        outColor = u_color;
    }
`;function t(){const c=document.querySelector("#webgl2"),e=c.getContext("webgl2");if(!e)return;const i=z(e,[n,r]),s=e.getAttribLocation(i,"a_position"),d=e.getUniformLocation(i,"u_color"),f=e.getUniformLocation(i,"u_resolution"),S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0);const _=new ResizeObserver(l=>{w(l),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i),e.uniform2f(f,e.canvas.width,e.canvas.height);for(let h=0;h<66;h++)e.uniform4f(d,Math.random(),Math.random(),Math.random(),(Math.random()+1)*.6),a(e,[u(e.canvas.width),u(e.canvas.height)],u(e.canvas.width),u(e.canvas.width)),e.drawArrays(e.TRIANGLES,0,6)});try{_.observe(c,{box:"device-pixel-content-box"})}catch(l){console.log("device-pixel-content-box \u4E0D\u652F\u6301",l),_.observe(c,{box:"content-box"})}}function a(c,[e,i],s,d){c.bufferData(c.ARRAY_BUFFER,new Float32Array([e,i,e+s,i,e,i+d,e+s,i+d,e,i+d,e+s,i]),c.STATIC_DRAW)}return(c,e)=>(x(),b("div",C,I))}},F=v(L,[["__scopeId","data-v-67c8e44e"],["__file","App.vue"]]);export{F as default};
