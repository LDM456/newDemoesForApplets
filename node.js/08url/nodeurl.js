let url = require('url')
console.log(url);

let httpurl = `https://v.youku.com/v_show/id_XMT
gxMDcyMjg5Mg==.html?spm=a2hcb.12523958.m_4392_c_25192.d_1&s=cc001f06962411de83b1
&scm=20140719.rcmd.4392.show_cc001f06962411de83b1`
let urlObj = url.parse(httpurl)
console.log(urlObj);