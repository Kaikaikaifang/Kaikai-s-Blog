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

/**
 * 画布像素重置（与画布大小保持一致）
 * @param {HTMLCanvasElement} canvas 待重置的元素
 * @returns {Boolean} 是否需要重置
 */
function resizeCanvas(canvas) {
  let need =
    canvas.height !== canvas.clientHeight ||
    canvas.width !== canvas.clientWidth;
  if (need) {
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
  }
  return need;
}

/**
 * 重置画布&设置视域（告诉webgl如何转换坐标）
 * @param {WebGL2RenderingContext} gl 绘图上下文
 * @param {HTMLCanvasElement} canvas 待重置的元素
 */
function resizeCanvasAndSetViewport(gl, canvas) {
  if (resizeCanvas(canvas)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // 设置视域，告诉webgl将剪裁空间(-1, 1)转换至像素空间(0, width), (0, height)
  }
}

export { createProgramWithShaderSrc, randomInt, resizeCanvasAndSetViewport };
