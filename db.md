adonis make:controller post --resource  创建一个资源类型的控制器

adonis make:view post.create --layout layouts.main  创建一个视图 在views/post/create.edge 文件同时使用 @layout('layouts.main')

input.form-controller[placehoder="enter"]  +  tab  快捷输入

'@adonisjs/lucid',  这个是迁移数据库时用的包  在app.js 文件下配置 , 有两处要配置 

adonis 支持多种数据库, 安装相应的数据库引擎 

adonis migration:run 执行数据库

adonis migration:status 查看那些数据表在运行

adonis migration:rollback 回滚 最近的一次
adonis migration:rollback --batch 1 回滚--batch 1 的事务

mysql -u root -p 登录数据库

show databases; 显示数据库

use adonis; 使用数据库

show tables; 显示数据库下的所有表

describe users;显示名字为 users 的表

adonis make:migration post  在migration下面创建一个post 表, 用于保存项目文档用  然后选择创建表 

adonis 是支持knex: 数据查询的  https://www.songxingguo.com/2018/06/30/knex.js-query/
