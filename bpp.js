// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 创建网站服务器
const app = express();
console.log('网站服务器启动');
// 连接数据库
mongoose.connect(`mongodb://localhost`, { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))