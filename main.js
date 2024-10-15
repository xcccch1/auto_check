// const { SMTPClient } = require('d://study/auto/emailjs/email')

// let email_client = SMTPClient({
//     user:'852848642@qq.com',
//     password:'ATUDEGVKYJTEFLQB',
//     host:'smtp.qq.com',
//     ssl:true
// })

const passwd = '0922'
const app_name = '企业微信'
let stats = true //false stop  true start
// 当前日期对象
let now = new Date()
// 当前时间戳
let cur_timestamp = now.getTime()

// 当前格式化日期时间
let cur_date = formatDateTime(cur_timestamp)
// 打卡时间
let check_time
// 下次打卡时间
let next_date

// 判断打卡时间是否已经存在
let storage = storages.create('info')
if (!storage.get('check_time')) storage.put('check_time', get_check_time(cur_date))

while (stats) {
    now = new Date()
    cur_timestamp = now.getTime()
    cur_date = formatDateTime(cur_timestamp)
    check_time = storage.get('check_time')
    if (cur_timestamp >= check_time) {
        console.log('执行自动任务');
        if (!device.isScreenOn()) {
            // #唤醒屏幕
            device.wakeUp();
            unclock(passwd)
            sleep(100)
        }
        laungh_app(app_name)
        sleep(10000)
        // 打开应用后需要执行的操作
        // const gzt_btn = id('h8_').className('android.widget.TextView').text('工作台').findOne(1000)
        // if (gzt_btn) {
        //     click_center(gzt_btn)
        //     sleep(2000)
        //     swipe(300, 600, 300, 300, 1000)
        // }
        // const daka_btn = id('mid1Txt').className('android.widget.TextView').text('打卡').findOne(1000)
        // if (daka_btn) click_center(daka_btn)
        // const daka_btn1 = id('buj').className('android.widget.TextView').text('下班打卡').findOne(1000)
        // if (daka_btn1) click_center(daka_btn1)
        next_date = get_check_time(cur_date)
        storage.put('check_time', next_date)
        console.log('更新下次打卡时间', formatDateTime(next_date));
    } else {
        console.log('当前时间：' + cur_date, '下次执行打卡时间：' + formatDateTime(check_time));
        sleep(5000)
    }
}

// 时间测试
// const am = "2024-09-06 18:05:21"
// console.log(formatDateTime(get_check_time(am)));
// sendmail()
// console.log(SMTPClient);


function sendmail(cur_time, next_time) {
    email_client.send({
        text: 'test',
        from: '852848642@qq.com',
        to: '852848642@qq.com',
        subject: 'auto_check'
    }, (err, message) => {
        console.log(err || message);
        return err || message
    })
}

// 控件点击中心点
function click_center(ctrl_btn) {
    const x = ctrl_btn.bounds().centerX()
    const y = ctrl_btn.bounds().centerY()
    click(x, y)
}

// 随机产生打卡时间 cur_date:yyyy-mm-dd hh:mm:ss 返回下次打卡时间戳
function get_check_time(cur_date) {
    let random_min
    let random_sed
    let temp_check_date
    // 提取传入当前时间的小时时间，9-17为产生下午打卡，除外为产生上午打卡时间
    const hour = parseInt(cur_date.substring(11, 13), 10)
    const day = new Date(cur_date.substring(0, 10)).getDay()
    // 上午打卡时间
    let am_check_date
    if (9 <= hour && hour < 18) {
        random_min = getRandomNumber(0, 7)
        random_sed = getRandomNumber(0, 59)
        temp_check_date = cur_date.split(" ")[0] + ' 18:' + random_min + ':' + random_sed;
        const pm_check_date = parseDateTimeToTimestamp(temp_check_date)
        return pm_check_date
    } else {
        random_min = getRandomNumber(28, 35)
        random_sed = getRandomNumber(0, 59)
        temp_check_date = cur_date.split(" ")[0] + ' 09:' + random_min + ':' + random_sed;
        if (day == 5) {
            // 如果判断当前日期为周五，加3天时间戳，否则加1天
            am_check_date = parseDateTimeToTimestamp(temp_check_date) + 259200000
        } else {
            am_check_date = parseDateTimeToTimestamp(temp_check_date) + 86400000
        }

        return am_check_date
    }
}

// 格式化时间戳转 YY-MM-DD hh:mm:ss
function formatDateTime(timestamp) {
    const date = new Date(timestamp);  // 参数需要毫秒数，所以这里将秒数乘于 1000
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    const h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    const s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D + h + m + s
}

// 格式化日期转时间戳
function parseDateTimeToTimestamp(dateTimeStr) {
    // 确保输入字符串符合 yyyy-mm-dd hh:mm:ss 格式
    let dateTimeParts = dateTimeStr.split(' ');
    if (dateTimeParts.length !== 2) {
        throw new Error('Invalid date time format');
    }

    let dateParts = dateTimeParts[0].split('-');
    let timeParts = dateTimeParts[1].split(':');

    if (dateParts.length !== 3 || timeParts.length !== 3) {
        throw new Error('Invalid date time format');
    }

    let year = parseInt(dateParts[0], 10);
    let month = parseInt(dateParts[1], 10) - 1; // 月份从0开始
    let day = parseInt(dateParts[2], 10);
    let hour = parseInt(timeParts[0], 10);
    let minute = parseInt(timeParts[1], 10);
    let second = parseInt(timeParts[2], 10);

    let date = new Date(year, month, day, hour, minute, second);
    return date.getTime(); // 返回时间戳，单位为毫秒
}

// 生成范围内随机整数
function getRandomNumber(min, max) {
    // 确保最小值和最大值是整数，并且最小值小于最大值
    min = Math.ceil(min);
    max = Math.floor(max);
    // 生成范围内的随机整数
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    num < 10 ? num = '0' + num : num
    return num
}

// 解锁屏幕
function unclock(passwd) {
    sleep(2000)
    swipe(390, 1447, 423, 282, 738)
    sleep(1000)
    for (let index = 0; index < passwd.length; index++) {
        let element = passwd[index];
        desc(element).findOne().click()
    }
}

// 运行应用
function laungh_app(app_name) {
    app.launchApp(app_name)
}





