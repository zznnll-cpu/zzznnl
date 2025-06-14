
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'bestxuyi'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'bestxuyi';
let SUBUpdateTime = 24; //自定义订阅更新时间，单位小时
let total = 500;//TB
let timestamp = 4102366036000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:46547?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#dark%20cherry%20mystery~
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:30273?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF01-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:31210?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF02-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:28780?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF03-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:33824?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF04-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:36940?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF05-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.ab.he.defehaita.xyz:11210?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E9%A6%99%E6%B8%AF06-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.vb.defehaita.xyz:39009?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E5%8F%B0%E6%B9%BE01-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.vb.defehaita.xyz:27364?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E5%8F%B0%E6%B9%BE02-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.vb.defehaita.xyz:46585?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E6%96%B0%E5%8A%A0%E5%9D%A101-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.vb.defehaita.xyz:39760?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E6%96%B0%E5%8A%A0%E5%9D%A102-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.eb.defehaita.xyz:24215?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E6%97%A5%E6%9C%AC01-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.eb.defehaita.xyz:25661?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E6%97%A5%E6%9C%AC02-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.eb.defehaita.xyz:42541?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E7%BE%8E%E5%9B%BD01-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.eb.defehaita.xyz:18604?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E7%BE%8E%E5%9B%BD02-%F0%9F%8C%B810Gbps
trojan://7452381d-63a7-446c-bdcf-fc74ff451ffa@high.vb.defehaita.xyz:13946?security=tls&sni=douyin.com&allowInsecure=1&type=tcp&headerType=none#%E5%94%AF%E4%BA%91%EF%BD%9C%E8%8B%B1%E5%9B%BD01-%F0%9F%8C%B810Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@hk01.ss888.tw:42687#%E9%A6%99%E6%B8%AFIPLC%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@hk03.ss888.tw:25237#%E9%A6%99%E6%B8%AFIPLC%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@hk04.ss888.tw:49921#%E9%A6%99%E6%B8%AFIPLC%E4%B8%93%E7%BA%BF3-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@sg01.ss888.tw:40221#%E6%96%B0%E5%8A%A0%E5%9D%A1IPLC%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@sg03.ss888.tw:51110#%E6%96%B0%E5%8A%A0%E5%9D%A1IPLC%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@jp01.ss888.tw:26943#%E6%97%A5%E6%9C%ACIPLC%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@jp02.ss888.tw:32000#%E6%97%A5%E6%9C%ACIPLC%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@tw01.ss888.tw:31401#%E5%8F%B0%E6%B9%BEIPLC%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@tw02.ss888.tw:34651#%E5%8F%B0%E6%B9%BEIPLC%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@us02.ss888.tw:54977#%E7%BE%8E%E5%9B%BDIPLC%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@uk01.ss888.tw:20432#%E8%8B%B1%E5%9B%BDIPLC%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@dk.ss888.tw:28012#%E8%A5%BF%E7%8F%AD%E7%89%99IPLC%E4%B8%93%E7%BA%BF-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@ua.ss888.tw:42312#%E4%B9%8C%E5%85%8B%E5%85%B0IPLC%E4%B8%93%E7%BA%BF-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1NjM2ZDI0YS1jMWY0LTQzNmEtOWQ1ZC1lZTVlMGYyM2NhMmM%3D@eg.ss888.tw:47869#%E5%9F%83%E5%8F%8AIPLC%E4%B8%93%E7%BA%BF-%F0%9F%8C%B83Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30001#%E9%A6%99%E6%B8%AFIEPL%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30008#%E9%A6%99%E6%B8%AFIEPL%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30011#%E6%96%B0%E5%8A%A0%E5%9D%A1zy-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30021#%E5%8F%B0%E6%B9%BEIEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk2.youtu2.top:30041#%E6%97%A5%E6%9C%ACIEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30051#%E8%8B%B1%E5%9B%BD%E4%BD%8F%E5%AE%85%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:34071#%E6%BE%B3%E6%B4%B2IEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk1.youtu2.top:30091#%E9%A9%AC%E6%9D%A5IEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk2.youtu2.top:30081#%E5%9C%9F%E8%80%B3%E5%85%B6IEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk2.youtu2.top:30082#%E9%98%BF%E6%A0%B9%E5%BB%B7IEPL%E4%B8%93%E7%BA%BF-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk2.youtu2.top:30031#%E7%BE%8E%E5%9B%BDIEPL%E4%B8%93%E7%BA%BF1-%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOTUxMWI4Mi0zZDcxLTQ0YzUtOTllYS1iNTJlOTllZDQyNGE%3D@rk4.youtu2.top:34032#%E7%BE%8E%E5%9B%BDIEPL%E4%B8%93%E7%BA%BF2-%F0%9F%8C%B82Gbps
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@alibaba1.xn--z7x16bf6t.com:38899?security=tls&sni=v1.kwaicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A6%99%E6%B8%AF%E5%AE%B6%E5%AE%BD1
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@ahuaweisb2.xn--z7x16bf6t.com:38899?security=tls&sni=v1.kwaicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A6%99%E6%B8%AF%E5%AE%B6%E5%AE%BD2
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@agoogleyun3.xn--z7x16bf6t.com:38899?security=tls&sni=v1.kwaicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A6%99%E6%B8%AF%E5%AE%B6%E5%AE%BD3
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@adubaiyun4.xn--z7x16bf6t.com:38899?security=tls&sni=v1.kwaicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A6%99%E6%B8%AF%E5%AE%B6%E5%AE%BD4
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@abaidusb5.xn--z7x16bf6t.com:38899?security=tls&sni=v1.kwaicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A6%99%E6%B8%AF%E5%AE%B6%E5%AE%BD5
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@alibaba1.xn--z7x16bf6t.com:18229?security=tls&sni=g.alicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E6%97%A5%E6%9C%AC%E5%AE%B6%E5%AE%BD1
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@agoogleyun3.xn--z7x16bf6t.com:18229?security=tls&sni=g.alicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E6%97%A5%E6%9C%AC%E5%AE%B6%E5%AE%BD2
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@abaidusb5.xn--z7x16bf6t.com:39966?security=tls&sni=g.alicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E7%BE%8E%E5%9B%BD%E5%AE%B6%E5%AE%BD1
trojan://c49589b1-7745-4f45-bde5-c6d2b8f5348e@alibaba1.xn--z7x16bf6t.com:17227?security=tls&sni=g.alicdn.com&allowInsecure=1&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E7%BE%8E%E5%9B%BD%E5%AE%B6%E5%AE%BD2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@v1a01.78787878.top:31001#%E9%A6%99%E6%B8%AFPremium1%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@v3s01.78787878.top:31003#%E9%A6%99%E6%B8%AFPremium2%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@dedicated-hk02.78787878.top:51066#%E6%B7%B1%E6%B8%AFIEPL%E4%B8%93%E7%BA%BF%E6%B8%B8%E6%88%8F%E4%B8%93%E7%94%A8%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@v3s01.78787878.top:32013#%E6%96%B0%E5%8A%A0%E5%9D%A1Premium%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@v3s01.78787878.top:33003#%E6%97%A5%E6%9C%ACPremium%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@v2a03.78787878.top:35013#%E7%BE%8E%E5%9B%BDPremium%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@aa02rare.78787878.top:39044#%E4%BF%84%E7%BD%97%E6%96%AFPremium%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@aa02rare.78787878.top:35555#%E8%BF%AA%E6%8B%9CPremium%F0%9F%8C%B82Gbps
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3N2U1ZmFlYS1hMTZiLTQyYmYtYTM4Mi1kMTBiZGYyZTBlNDA%3D@aa01rare.78787878.top:30549#%E5%8D%97%E6%9E%81%20%E6%94%B9B%E7%AB%99IP
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hn.yuyan.vin:10010#%E9%A6%99%E6%B8%AF%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hn.yuyan.vin:10030#%E6%96%B0%E5%8A%A0%E5%9D%A1%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hd.yuyan.vin:10016#%E7%BE%8E%E5%9B%BD%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hd.yuyan.vin:10021#%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hd.yuyan.vin:10019#%E9%9F%A9%E5%9B%BD%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplMDdkZGY0OC03YTg4LTRlZTQtYThjNS05NzFkNjdhMWE0OGE=@hn.yuyan.vin:10035#%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E9%9A%A7%E9%81%93%E4%B8%AD%E8%BD%AC
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@south.ltltltltltltlt.top:20910#%E9%A6%99%E6%B8%AFg1
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@south.ltltltltltltlt.top:20912#%E9%A6%99%E6%B8%AFg2
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@south.ltltltltltltlt.top:20920#%E5%8F%B0%E6%B9%BEg1
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@east.ltltltltltltlt.top:20930#%E6%97%A5%E6%9C%ACg1
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@south-2.ltltltltltltlt.top:20940#%E6%96%B0%E5%8A%A0%E5%9D%A1g1
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@east-2.ltltltltltltlt.top:20950#%E7%BE%8E%E5%9B%BDg1
ss://YWVzLTI1Ni1nY206ZjJmOTc5OTktMzFjZC00ZGFlLThjOTctZDk2NjQyOTgxNDgz@east-2.ltltltltltltlt.top:20951#%E7%BE%8E%E5%9B%BDg2
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:32385#%E9%A6%99%E6%B8%AF01-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRUTYwODc3OQ%3D%3D@node4.bgp.666888.biz:12434#%E9%A6%99%E6%B8%AF02-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRUTYwODc3OQ%3D%3D@node4.bgp.666888.biz:26820#%E9%A6%99%E6%B8%AF03-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRUTYwODc3OQ%3D%3D@561.bgp.666888.biz:11312#%E9%A6%99%E6%B8%AF04-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:47934#%E9%A6%99%E6%B8%AF05-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRUTYwODc3OQ%3D%3D@node4.bgp.666888.biz:14406#%E9%A6%99%E6%B8%AF06-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:29953#%E9%A6%99%E6%B8%AF07-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:18920#%E8%8B%B1%E5%9B%BD01-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:19665#%E8%8B%B1%E5%9B%BD02-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node4.bgp.666888.biz:42297#%E8%8B%B1%E5%9B%BD03-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:27734#%E8%8B%B1%E5%9B%BD04-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://MjMzYmxvZzoyMzNibG9nLmNvbQ%3D%3D@561.bgp.666888.biz:15924#%E8%8B%B1%E5%9B%BD05-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:36152#%E8%8B%B1%E5%9B%BD06-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@2047-12021254.666888.biz:37724#%E8%8B%B1%E5%9B%BD07-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@2047-12021254.666888.biz:48501#%E8%8B%B1%E5%9B%BD08-%E4%B8%AD%E8%BD%AC%E5%8A%A0%E9%80%9F
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:40944#HK01-Accelerate
socks://cm9vdDpRUTYwODc3OQ%3D%3D@561.bgp.666888.biz:47477#HK02-Accelerate
socks://cm9vdDpRUTYwODc3OQ%3D%3D@561.bgp.666888.biz:33045#HK03-Accelerate
socks://cm9vdDpRUTYwODc3OQ%3D%3D@node4.bgp.666888.biz:14933#HK04-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:12718#HK05-Accelerate
socks://cm9vdDpRUTYwODc3OQ%3D%3D@561.bgp.666888.biz:30912#HK06-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:40948#HK07-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:49977#%E8%8B%B1%E5%9B%BD01-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:32707#%E8%8B%B1%E5%9B%BD02-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:24722#%E8%8B%B1%E5%9B%BD03-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@2047-12021254.666888.biz:17165#%E8%8B%B1%E5%9B%BD04-Accelerate
socks://MjMzYmxvZzoyMzNibG9nLmNvbQ%3D%3D@208.dnsv3.cc:16003#%E8%8B%B1%E5%9B%BD05-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@gdhk1-07312200.666888.biz:36608#%E8%8B%B1%E5%9B%BD06-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@561.bgp.666888.biz:17103#%E8%8B%B1%E5%9B%BD07-Accelerate
socks://cm9vdDpRcTYwODc3OQ%3D%3D@node2.bgp.666888.biz:39094#%E8%8B%B1%E5%9B%BD08-Accelerate
ss://YWVzLTI1Ni1nY206MjMzYmxvZy5jb20%3D@561.666888.biz:34403#%E7%BA%AF%E5%87%80%EF%BD%9C%E7%BE%8E%E5%9B%BD%E4%BD%8F%E5%AE%85IP-%E6%B2%AA%E6%97%A5%E4%B8%AD%E8%BD%AC
ss://YWVzLTI1Ni1nY206MjMzYmxvZy5jb20%3D@node4.bgp.666888.biz:24574#%E7%BA%AF%E5%87%80%EF%BD%9C%E7%BE%8E%E5%9B%BD%E4%BD%8F%E5%AE%85IP-%E5%B9%BF%E6%B8%AF%E4%B8%AD%E8%BD%AC
vless://5ccd1392-ddcc-4d1a-9d93-1ed388e8811a@45.144.174.229:443?encryption=none&security=reality&sni=d83ljfrn.com&fp=chrome&pbk=uWcAGbLl7rfmFCjk12tf5j72ZBL8DlrysxTTOGyC4x0&sid=0ab93748add0e5&spx=%2F&type=tcp&headerType=none#%E7%BA%AF%E5%87%80%EF%BD%9C%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E4%BD%8F%E5%AE%85IP-%E5%B9%BF%E6%B8%AF%E4%B8%AD%E8%BD%AC



















`


let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if(url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if(url.searchParams.has('surge')) 追加UA = 'surge';
			
			const 请求订阅响应内容 = await getSUB(urls, 追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	}

	let newapi = "";
	let 订阅转换URLs = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求

	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);
	
	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
			method: 'get', 
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
			},
			signal: controller.signal // 将AbortController的信号量添加到fetch请求中
		}).then(response => response.ok ? response.text() : Promise.reject())));
	
		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});
	
		console.log(modifiedResponses); // 输出修改后的响应数组
	
		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies') && content.includes('proxy-groups')) {
					// Clash 配置
					订阅转换URLs += "|" + response.apiUrl;
				} else if (content.includes('outbounds') && content.includes('inbounds')){
					// Singbox 配置
					订阅转换URLs += "|" + response.apiUrl;
				} else {
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}
	
	const 订阅内容 = await ADD(newapi);

	// 返回处理后的结果
	return [订阅内容,订阅转换URLs];
}
