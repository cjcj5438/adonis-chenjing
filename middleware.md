# 创建中间件:
adonis make:middleware CountryDetector

# 注册中间件:
都是在文件 kernel.js 文件下面执行;
1. 有服务器中间件
2. 全局中间件
3. 命名空间中间件

# 中间件的属性
```
Route.post(url, closure).middleware(['auth:session,jwt'])
```

使用的话在后面在写