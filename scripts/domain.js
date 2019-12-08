var fs = require('fs')
var path = require('path')
var minify = require('html-minifier').minify;

const rootDir = process.cwd()

var foo = `
sok.app
eux.app
leur.app
cantik.app
darksideofmoon.com
tahu.app
lightingchaos.com
haz.app
lus.app
ves.app
gus.app
yuzan.app
aspera.app
kez.app
vez.app
doy.app
kop.app
kota.app
dore.app
saca.app
pare.app
rodo.app
tora.app
daca.app
dosa.app
dese.app
toda.app
roda.app
zie.app
viu.app
poder.app
nico.app
fel.app
kama.app
gusta.app
ako.app
zoals.app
siz.app
sida.app
sama.app
paz.app
xishi.app
mut.app
dod.app
dea.app
cea.app
shasha.app
seb.app
sor.app
suc.app
cer.app
cus.app
cuc.app
pib.app
rab.app
gapo.app
bij.app
meo.app
loa.app
hom.app
yea.app
hea.app
dag.app
sua.app
cor.app
esco.app
biv.app
lon.app
motu.app
astra.app
hath.app
rele.app
rege.app
cete.app
cere.app
lovin.app
linlin.app
tmp.app
zato.app
yaounde.app
vara.app
tere.app
taza.app
tamo.app
tage.app
taca.app
sete.app
sere.app
sede.app
reda.app
quezon.app
poza.app
pote.app
poca.app
pase.app
papo.app
mogadishu.app
lade.app
ibadan.app
hara.app
gele.app
gehe.app
fata.app
erre.app
erba.app
douala.app
desa.app
cela.app
caer.app
zhizan.app
xiaozan.app
kaya.app
dafit.app
wedating.app
tazza.app
shri.app
shree.app
sesi.app
geri.app
fitu.app
mecoo.app
nannan.app
comme.app
seperti.app
piace.app
liho.app
rantaiblok.app
mulai.app
mytim.app
cuir.app
veel.app
snel.app
nhanh.app
rovo.app
juth.app
mund.app
dollify.app
voud.app
dois.app
fois.app
hout.app
vaut.app
veut.app
faut.app
laut.app
sont.app
sant.app
tant.app
sunt.app
vont.app
molt.app
helt.app
zakzak.app
dels.app
bons.app
nast.app
mest.app
hast.app
vist.app
rast.app
sist.app
tard.app
jeon.app
zeba.app
zafra.app
xiaoda.app
wecharge.app
teba.app
romer.app
razzi.app
quickcharge.app
qualit.app
pixit.app
payall.app
mycharge.app
mentu.app
meete.app
lipp.app
itchy.app
etno.app
clos.app
chunyi.app
baoyun.app
rady.app
hogy.app
nowy.app
veego.app
ceny.app
boas.app
flipnote.app
flipmusic.app
flasia.app
lebih.app
banyak.app
indah.app
pulau.app
besar.app
mesin.app
pertama.app
bekas.app
lotre.app
bebas.app
rantai.app
tidak.app
viss.app
tolar.app
ress.app
yimu.app
yikang.app
yidu.app
yanpu.app
yanke.app
liwa.app
jiko.app
bipu.app
oike.app
miru.app
hiru.app
dimi.app
viru.app
anji.app
dianzan.dev
zihu.app
yuren.app
yuefei.app
yinhu.app
yihuo.app
yibu.app
yian.app
yatao.app
xunsi.app
wula.app
taiqiu.app
naqu.app
mazi.app
dabei.app
caiye.app
bizu.app
bimi.app
baofu.app
balei.app
bade.app
laz.app
zitan.app
zhiyi.app
zhenqu.app
shuiqian.app
lianyiqun.app
fuzi.app
fubei.app
fuan.app
diaodai.app
daxian.app
dajiu.app
dafu.app
dadao.app
zhifang.app
zhantai.app
youtu.app
tiko.app
puan.app
nilai.app
matong.app
maoka.app
manke.app
luyu.app
lufei.app
lize.app
lebao.app
kouyi.app
junmi.app
jiemo.app
jidu.app
jianpu.app
jiandao.app
hecha.app
gongjian.app
bohai.app
biru.app
baole.app
yese.app
yele.app
xuri.app
ranqi.app
lvke.app
liwai.app
keqi.app
kelai.app
jeda.app
haili.app
dapu.app
biko.app
yashe.app
yaqu.app
xike.app
weizu.app
waikuai.app
quba.app
meizai.app
meipo.app
maiqi.app
liequ.app
lianzi.app
kejia.app
baoxiu.app
fela.app
jeli.app
dete.app
hona.app
baci.app
feda.app
cini.app
daki.app
joto.app
beca.app
fado.app
haza.app
bano.app
bete.app
faza.app
fosa.app
jola.app
fena.app
hoca.app
hota.app
fece.app
dalo.app
dasi.app
deba.app
fana.app
kida.app
fesa.app
gule.app
fapa.app
falo.app
jela.app
jopa.app
jate.app
hoco.app
jale.app
busa.app
cedi.app
feto.app
bero.app
keni.app
koka.app
mahu.app
poma.app
lito.app
puce.app
peca.app
naja.app
lini.app
kape.app
lene.app
noce.app
leme.app
nane.app
moza.app
luto.app
lebe.app
mici.app
lelu.app
rahe.app
kosi.app
legi.app
lome.app
kepa.app
peka.app
poze.app
mazo.app
loza.app
koyu.app
pegi.app
pori.app
keye.app
pade.app
mede.app
masi.app
tida.app
vibo.app
sado.app
toso.app
wada.app
peto.app
leki.app
puno.app
kuca.app
xuesi.app
woda.app
misi.app
mida.app
lezhi.app
leya.app
leho.app
haxi.app
ziko.app
yunli.app
youxu.app
yitang.app
yiqun.app
yimian.app
visee.app
vico.app
tike.app
ruzhu.app
roki.app
piyao.app
mitu.app
minu.app
mayou.app
liru.app
jiazi.app
huma.app
huiju.app
goki.app
gico.app
fuhe.app
fude.app
diki.app
anhao.app
yazan.app
dalou.app
zhipai.app
yutou.app
yunti.app
yunbo.app
yubo.app
youdu.app
yali.app
xiari.app
weilan.app
sinan.app
liuyu.app
lianyi.app
kito.app
dakan.app
cizhan.app
bayu.app
zhufeng.app
zhazha.app
zhangqu.app
zelu.app
zanmei.app
xitian.app
xinrong.app
xinhun.app
xinfu.app
weizan.app
songfen.app
songcai.app
situ.app
sipai.app
shuiwu.app
shili.app
shenyu.app
shanzhu.app
ruitu.app
puji.app
liko.app
koto.app
huali.app
gaowan.app
dill.app
bude.app
beiyu.app
bailu.app
zanzan.app
zta.app
zro.app
vld.app
qsa.app
mvo.app
lko.app
juw.app
fes.app
basa.app
bodo.app
bote.app
coba.app
dano.app
debo.app
deki.app
deti.app
dini.app
fera.app
fino.app
gara.app
gori.app
habe.app
joka.app
jota.app
judi.app
kadi.app
kari.app
lada.app
lino.app
mato.app
mora.app
nika.app
pape.app
riza.app
rode.app
sava.app
sodi.app
tapa.app
deg.app
dek.app
eka.app
gom.app
gor.app
hin.app
hor.app
jak.app
jat.app
jek.app
jep.app
jer.app
jou.app
mez.app
nek.app
nia.app
nif.app
odi.app
tif.app
vek.app
zat.app
mybag.app
mypower.app
rezu.app
quzu.app
nanhu.app
foyu.app
suihua.app
hechi.app
linfen.app
deyang.app
qichacha.app
dazhou.app
dabai.app
dizhu.app
tangshi.app
kuyin.app
laoshan.app
chifeng.app
chuzhou.app
tonghua.app
giantnews.app
quyi.app
qixia.app
qihua.app
qifei.app
qiaoyu.app
qianyun.app
mushang.app
mulan.app
mowang.app
moshan.app
meijin.app
meibei.app
lepai.app
kuying.app
kaiye.app
jiuyu.app
jiecao.app
jidong.app
jiaoshou.app
huyu.app
huosu.app
huji.app
huazi.app
huaxiu.app
huanyou.app
huajie.app
huage.app
heji.app
fenghuo.app
fangtang.app
fabao.app
duoqu.app
dunhuang.app
dufu.app
duanqun.app
donghu.app
dafan.app
caitou.app
cailu.app
bishan.app
biang.app
benpao.app
baoer.app
ziyue.app
zishu.app
zique.app
zhiqu.app
zhichi.app
zhibi.app
zanhu.app
yunque.app
youli.app
yiru.app
yiqu.app
yilu.app
xiya.app
xiuhua.app
ximei.app
xiaoyin.app
xiaoyi.app
xiaowu.app
xiaonuo.app
xiaomei.app
xiaodou.app
wuyi.app
woqu.app
wocai.app
weiyao.app
weiqu.app
wanhua.app
shiqu.app
qixie.app
qifu.app
panshi.app
moju.app
mishi.app
milu.app
meiyu.app
meiqi.app
meile.app
meiji.app
meihu.app
meicuo.app
meichu.app
liba.app
kanghui.app
jiyu.app
jiuyou.app
jiri.app
huiyou.app
huatian.app
huaqian.app
huahai.app
dianzan.app
dazao.app
dazan.app
datou.app
dashu.app
dafei.app
chuci.app
chayue.app
bishi.app
baile.app
zhuyilong.app
zhuzhu.app
zhouyi.app
zhiyun.app
zhiai.app
yunjia.app
yeba.app
xicha.app
wuyifan.app
wumu.app
wanyi.app
tousu.app
puhui.app
naima.app
naiba.app
mucai.app
mojie.app
moer.app
manyi.app
lvdou.app
lianyun.app
leisi.app
lanmao.app
kongjie.app
keyan.app
keche.app
juxie.app
jitui.app
jichi.app
hukou.app
huangdi.app
heidou.app
fuyun.app
fashi.app
daiyu.app
chushi.app
caizhi.app
bihang.app
lesa.app
jako.app
gora.app
gemo.app
ceca.app
leca.app
meda.app
zhubo.app
yishi.app
yimin.app
xiche.app
siwa.app
maizi.app
lvka.app
jizhi.app
heka.app
dazui.app
bole.app
baoyu.app
yaodian.app
meijian.app
livr.app
skap.app
miaosi.app
heiwu.app
shiwen.app
panpay.app
zhaohua.app
zhigu.app
bendi.app
chuju.app
ours.app
atop.app
fujia.app
tuyi.app
jizan.app
fuli.app
qiuba.app
shiren.app
weoffice.app
zantan.app
zhiti.app
xinyule.app
zhuma.app
tanta.app
cheji.app
jijiji.app
fend.app
qihui.app
yess.app
shanbo.app
luohua.app
juyuan.app
creams.app
cheyu.app
chaxin.app
zhian.app
yehua.app
weilv.app
zhulu.app
yunyao.app
meiwan.app
meicha.app
lecha.app
kujia.app
kurong.app
okstore.app
okshop.app
okname.app
dianyu.app
autoex.app
zawen.app
cose.app
qudai.app
statics.app
jades.app
coinews.app
mani.app
onechian.app
gula.app
digchain.app
goldex.app
yunzhu.app
meiting.app
kushu.app
kuting.app
lvku.app
qupao.app
lieyou.app
cixiu.app
qitan.app
etro.app
jitu.app
starnews.app
chequ.app
rongyu.app
yunfei.app
juyu.app
jingmi.app
daran.app
ihot.app
jingbao.app
qihai.app
qieqie.app
zhunzhun.app
topbrand.app
miaoqu.app
licaike.app
atat.app
wefly.app
sexmall.app
motian.app
daibao.app
topname.app
thur.app
mide.app
flowing.app
zakon.app
qushu.app
cestbon.app
brooks.app
danhua.app
qulu.app
jipai.app
skycity.app
zhiche.app
vegascity.app
guonong.app
xuehai.app
vegashotel.app
shoulu.app
fuckup.app
suyin.app
yunmei.app
feiwen.app
moyou.app
bitfun.app
aifan.app
laver.app
litre.app
liyu.app
hao24.app
geton.app
lowest.app
jean.app
wejoy.app
dafeng.app
zoin.app
qusou.app
nande.app
gotta.app
shenmi.app
woods.app
kaiyue.app
douhua.app
juece.app
shuta.app
waicai.app
outs.app
guozi.app
jindun.app
huafu.app
bihua.app
keren.app
miaobi.app
zuhu.app
ages.app
gaocai.app
poor.app
aden.app
ends.app
mils.app
yunche.app
hede.app
slas.app
lilv.app
shepin.app
zhihua.app
kuzhan.app
yunhua.app
lianyu.app
zaoxing.app
taixing.app
yandi.app
chiyou.app
miaozan.app
doco.app
golo.app
dibi.app
yaobao.app
kuyun.app
haoju.app
taotie.app
perhaps.app
weiju.app
mopai.app
datao.app
aione.app
qubao.app
xinxiu.app
xingxiu.app
tsv.app
svo.app
grv.app
lwv.app
lxv.app
pgi.app
toj.app
wij.app
bucuo.app
caitu.app
ogk.app
osg.app
detu.app
oud.app
ows.app
meizhe.app
mystar.app
geh.app
mej.app
ney.app
nua.app
lze.app
meipiao.app
meiyang.app
jri.app
tej.app
yoa.app
asg.app
tzu.app
mij.app
eqt.app
ebd.app
nir.app
puy.app
gpo.app
meiqu.app
ihm.app
kjo.app
rga.app
wga.app
kanman.app
kemi.app
jutou.app
jieti.app
tew.app
midou.app
meidu.app
peta.app
yuqu.app
passing.app
ziyu.app
enf.app
ontop.app
weauto.app
ral.app
sems.app
ahd.app
hali.app
shenbi.app
lgs.app
khm.app
khs.app
ksh.app
kwd.app
tfk.app
ptk.app
kgm.app
kpt.app
mkd.app
tgk.app
meiniu.app
duiba.app
meidie.app
zhixun.app
heel.app
goda.app
lea.app
reju.app
kuaixi.app
yizhe.app
chache.app
loudi.app
qiuhun.app
noter.app
eap.app
wantu.app
wochacha.app
shici.app
findjob.app
xuanzhi.app
ican.app
dilireba.app
37wan.app
360jie.app
xmax.app
mihome.app
haoyi.app
gushici.app
zhangyou.app
mozi.app
`

var res = foo.split(/\r?\n/)
var str = ''

res.map(item => {
    if (item) {
        str += `
<tr>
    <td><a class="domain-grid-name" href="http://${item}"
            target="_blank">${item}</a></td>
    <td>${item.replace('.app', '').toUpperCase()}</td>
    <td>
        <a target="_blank" href="https://dan.com/buy-domain/${item}">buy</a>
    </td>
</tr>
`;
    }
})

let strTmpl = fs.readFileSync(path.join(rootDir, 'index_tmpl.html')).toString('utf8')
let strResult = minify(strTmpl.replace("{{TMP_STRING}}", str), {
    collapseWhitespace: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
});

fs.writeFileSync(path.join(rootDir, 'index.html'), strResult)