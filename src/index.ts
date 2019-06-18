let say: string = 'hello';
console.log('我是可爱的程序媛，么么么哒')
// 全局安装 typescript npm i -g typescript

// 配置ts ：tsc --init 直接tsconfig.json文件，直接使用tsc命令 运行任意文件 
// 如何配置文件，请看tsconfig.json
// 解决编译完，ts文件报错  安装cnpm i -D @types/node

// 使用第三方库 简化编译流程
// ts-node:将ts代码在内存中完成编译，同时完成运行,输出结果
// 安装ts-node: cnpm i -g ts-node
// 输入命令 ts-node src/index.ts   会打印出结果

// nodemon: 用于检查文件的变化 无需多次编译代码，保存完，立即输出结果
// 安装nodemon: cnpm i -g nodemon
// 输入命令：nodemon --exec ts-node src/index.ts
// 在package.json 配置 可以直接npm run dev 直接运行入口文件
// {
//     "scripts": {
//       "dev": "nodemon --exec ts-node src/index.ts"
//     },
//     "devDependencies": {
//       "@types/node": "^12.0.8"
//     }
//   }

// 在package.json 配置 直接监测文件扩展名为ts nodemon -e ts --exec ts-node src/index.ts
// {
//     "scripts": {
//       "dev": "nodemon -e ts --exec ts-node src/index.ts"
//     },
//     "devDependencies": {
//       "@types/node": "^12.0.8"
//     }
//   }

// 在package.json 配置 只监测src下的ts文件 nodemon -- watch src -e ts --exec ts-node src/index.ts
// {
//     "scripts": {
//       "dev": "nodemon -- watch src -e ts --exec ts-node src/index.ts"
//     },
//     "devDependencies": {
//       "@types/node": "^12.0.8"
//     }
//   }