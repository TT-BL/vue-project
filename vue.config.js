module.exports={
    publicPath:'./',
    devServer:{
        open:true,
        host:'192.168.0.102',
        port:8080,
        proxy: {
            "/api": {
                //你要跨域的域名(包含host、端口号,切记：一定要带上http头);
                //同一个域名只能设置一次跨域，否则重复报错！
                target: "http://192.168.0.102:3000",
                ws: true,
                changeOrigin: true, //是否跨域，设置为true;(必须)
                pathRewrite: {
                    "^/api": "", // 设置/api路径重定向为根目录
                },
            }
        }
    },
}