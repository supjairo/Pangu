免除所有配置，专注于使用模板思想构建项目
把样式构建放于template目录下，也可以理解为对vue的二次封装
数据流:
约定大于配置
你需要定义的文件有
/模板名/index.vue,需要自动挂载入口
/复制js目录,将自动把需要的参数对外暴露
//其他内容暂不约束
