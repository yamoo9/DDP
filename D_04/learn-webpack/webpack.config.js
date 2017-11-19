// Webpack 설정 파일
  // 진입(entry)
  // 출력(output)
  // 모듈(module > rules)
    // style-loader
    // css-loader
    // babel-loader
  // 플러그인(plugins)

// 의존 개발 모듈 로드
// Node.js 내장 모듈 path
const path = require('path');

// path 유틸리티 함수
function _path(src){
  return path.resolve(__dirname, src);
}

// webpack 설정
const config = {
  // 컨텍스트
  context: _path('./src'),
  // 진입(싱글 파일)
  entry: './main.js',
  // 출력
  output: {
    publicPath: '', // 웹서버에서 사용되는 경로
    path: _path('./dist'),
    filename: 'bundle.js'
  },
  // 모듈 로더 설정
  module: {
    // 규칙
    rules: [
      // ————————————————————————————————————————————————————————
      // JS: babel-laoder
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      // ————————————————————————————————————————————————————————
      // CSS: style-loader!css-loader
      {
        test: /\.css$/,

        // 간단하게 style, css 로더를 사용(use)할 경우
        // use: ['style-loader', 'css-loader']

        // 옵션을 설정하여 style, css 로더를 사용할 경우
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // <style>로 들어가는 CSS 코드는 소스맵이 생성되지 않는다.
              // 참고: https://goo.gl/D8uE2x

              // extract-text-webpack-plugin 플러그인을 사용하여
              // 별도의 CSS 파일을 내보내면 소스맵 사용이 가능하다.
              // 참고: https://goo.gl/Li5ZPQ
              sourceMap: true
            }
          }
        ]
      },
      // ————————————————————————————————————————————————————————
      // Sass: style-loader <- css-loader <- sass-loader
      {
        test: /\.s(c|a)ss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  // 관찰
  // watch: true,
  // 소스맵
  // sourcemap: 'cheap-source-map',
};

// 설정을 내보냄
module.exports = config;
