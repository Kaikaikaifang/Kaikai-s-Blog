<template>
  <div class="wrapper">
    <canvas id="webgl2">Unsupporting WebGL</canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => main());
/**
 * 着色器实例生成函数
 * @param { WebGL2RenderingContext } gl 绘图上下文
 * @param { number } type 着色器类型 enu: [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER]
 * @param { string } source GLSL代码
 * @returns { shader } shader 着色器
 */
function createShader(gl, type, source) {
  let shader = gl.createShader(type); // 指定着色器类型，初始化着色器实例
  gl.shaderSource(shader, source); // 指定GLSL代码
  gl.compileShader(shader); // 编译代码
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader)); // 获取编译失败的信息
  gl.deleteShader(shader); // 删除着色器实例
}

/**
 * GLSL程序生成函数
 * @param { WebGL2RenderingContext } gl 绘图上下文
 * @param { VERTEX_SHADER } vertexShader 定点着色器
 * @param { FRAGMENT_SHADER } fragmentShader 片元着色器
 * @returns { program } program GLSL程序
 */
function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram(); // 初始化程序
  gl.attachShader(program, vertexShader); // 为GLSL程序指定着色器
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program); // 为绘图上下文指定GLSL程序
  const success = gl.getProgramParameter(program, gl.LINK_STATUS); // 查询上述步骤是否执行成功
  if (success) {
    return program; // 成功：返回GLSL程序
  }
  // 失败：1. 打印错误信息 2. 删除GLSL程序
  console.log(gl.getProgramInfoLog);
  gl.deleteProgram(program);
}

/**
 * 封装createShader&createProgram
 * @param {WebGL2RenderingContext} gl 绘图上下文
 * @param {Array} shadersSrc 顶点着色器&片元着色器的GLSL代码
 * @returns {program} GLSL程序
 */
function createProgramWithShaderSrc(gl, [vertexShaderSrc, fragmentShaderSrc]) {
  return createProgram(
    gl,
    createShader(gl, gl.VERTEX_SHADER, vertexShaderSrc),
    createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSrc)
  );
}

/**
 * 随机正整数生成器
 * @param {Int} range 范围
 */
function randomInt(range) {
  return Math.floor(Math.random() * range);
}

var vShaderSrc = `#version 300 es
    in vec2 a_position;
    uniform vec2 u_resolution;

    void main() {
        vec2 clipSpace = (a_position/u_resolution) * 2.0 - 1.0;
        gl_Position = vec4(clipSpace*vec2(1, -1), 0, 1);
    }
`;

var fShaderSrc = `#version 300 es
    precision highp float;

    uniform vec4 u_color;
    out vec4 outColor;

    void main() {
        outColor = u_color;
    }
`;

/**
 * 主函数
 */
function main() {
  const canvas = document.querySelector("#webgl2");
  const gl = canvas.getContext("webgl2");
  if (!gl) return;

  // 创建GLSL程序
  const program = createProgramWithShaderSrc(gl, [vShaderSrc, fShaderSrc]);
  const a_position = gl.getAttribLocation(program, "a_position");
  const u_color = gl.getUniformLocation(program, "u_color");
  const u_resolution = gl.getUniformLocation(program, "u_resolution");

  // 创建缓冲区
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  // 使能attribute属性
  gl.enableVertexAttribArray(a_position);
  // 设置attribute属性从缓冲区（当前的gl.ARRAY_BUFFER）中读取的方式
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

  // 指定区域及背景
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 调用GLSL程序
  gl.useProgram(program);
  gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);

  // 绘制50个矩形
  for (let i = 0; i < 66; i++) {
    gl.uniform4f(
      u_color,
      Math.random(),
      Math.random(),
      Math.random(),
      (Math.random() + 1) * 0.6
    ); // 设置矩形颜色
    setRectangle(
      gl,
      [randomInt(gl.canvas.width), randomInt(gl.canvas.height)],
      randomInt(gl.canvas.width),
      randomInt(gl.canvas.width)
    );
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

/**
 * 绘制矩形
 * @param {WebGL2RenderingContext} gl 绘图上下文
 * @param {Array} xy 顶点坐标：[x, y]
 * @param {Int} width 宽
 * @param {Int} height 长
 */
function setRectangle(gl, [x, y], width, height) {
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      x,
      y,
      x + width,
      y,
      x,
      y + height,
      x + width,
      y + height,
      x,
      y + height,
      x + width,
      y,
    ]),
    gl.STATIC_DRAW
  );
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  height: 100%;
  width: 100%;
}
</style>
