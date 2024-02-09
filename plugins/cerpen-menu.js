const axios = require('axios')
const fetch = require('node-fetch')
const crypto = require('crypto')
const cheerio = require("cheerio")
const { cerpen } = require("../lib/yudamods")
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  switch (command) {
  case 'cerpen_anak':{
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
break
}
case 'cerpen_bahasadaerah':{
let cerpet = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpet.title}\n⭔ _*Author :*_ ${cerpet.author}\n⭔ _*Category :*_ ${cerpet.kategori}\n⭔ _*Pass Moderation :*_ ${cerpet.lolos}\n⭔ _*Story :*_\n${cerpet.cerita}`)
break
}
case 'cerpen_bahasainggris':{
let cerpez = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpez.title}\n⭔ _*Author :*_ ${cerpez.author}\n⭔ _*Category :*_ ${cerpez.kategori}\n⭔ _*Pass Moderation :*_ ${cerpez.lolos}\n⭔ _*Story :*_\n${cerpez.cerita}`)
break
}
case 'cerpen_bahasajawa':{
let cerpep = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpep.title}\n⭔ _*Author :*_ ${cerpep.author}\n⭔ _*Category :*_ ${cerpep.kategori}\n⭔ _*Pass Moderation :*_ ${cerpep.lolos}\n⭔ _*Story :*_\n${cerpep.cerita}`)
break
}
case 'cerpen_bahasasunda':{
let cerped = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerped.title}\n⭔ _*Author :*_ ${cerped.author}\n⭔ _*Category :*_ ${cerped.kategori}\n⭔ _*Pass Moderation :*_ ${cerped.lolos}\n⭔ _*Story :*_\n${cerped.cerita}`)
break
}
case 'cerpen_budaya':{
let cerper = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerper.title}\n⭔ _*Author :*_ ${cerper.author}\n⭔ _*Category :*_ ${cerper.kategori}\n⭔ _*Pass Moderation :*_ ${cerper.lolos}\n⭔ _*Story :*_\n${cerper.cerita}`)
break
}
case 'cerpen_cinta':{
let cerpem = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpem.title}\n⭔ _*Author :*_ ${cerpem.author}\n⭔ _*Category :*_ ${cerpem.kategori}\n⭔ _*Pass Moderation :*_ ${cerpem.lolos}\n⭔ _*Story :*_\n${cerpem.cerita}`)
break
}
case 'cerpen_cintaislami':{
let cerpel = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpel.title}\n⭔ _*Author :*_ ${cerpel.author}\n⭔ _*Category :*_ ${cerpel.kategori}\n⭔ _*Pass Moderation :*_ ${cerpel.lolos}\n⭔ _*Story :*_\n${cerpel.cerita}`)
break
}
case 'cerpen_cintapertama':{
let cerpes = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpes.title}\n⭔ _*Author :*_ ${cerpes.author}\n⭔ _*Category :*_ ${cerpes.kategori}\n⭔ _*Pass Moderation :*_ ${cerpes.lolos}\n⭔ _*Story :*_\n${cerpes.cerita}`)
break
}
case 'cerpen_cintaromantis':{
let cerpde = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpde.title}\n⭔ _*Author :*_ ${cerpde.author}\n⭔ _*Category :*_ ${cerpde.kategori}\n⭔ _*Pass Moderation :*_ ${cerpde.lolos}\n⭔ _*Story :*_\n${cerpde.cerita}`)
break
}
case 'cerpen_cintasedih':{
let fejdj = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${fejdj.title}\n⭔ _*Author :*_ ${fejdj.author}\n⭔ _*Category :*_ ${fejdj.kategori}\n⭔ _*Pass Moderation :*_ ${fejdj.lolos}\n⭔ _*Story :*_\n${fejdj.cerita}`)
break
}
case 'cerpen_cintasegitiga':{
let frofk = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${frofk.title}\n⭔ _*Author :*_ ${frofk.author}\n⭔ _*Category :*_ ${frofk.kategori}\n⭔ _*Pass Moderation :*_ ${frofk.lolos}\n⭔ _*Story :*_\n${frofk.cerita}`)
break
}
case 'cerpen_cintasejati':{
let frljkek = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${frljkek.title}\n⭔ _*Author :*_ ${frljkek.author}\n⭔ _*Category :*_ ${frljkek.kategori}\n⭔ _*Pass Moderation :*_ ${frljkek.lolos}\n⭔ _*Story :*_\n${frljkek.cerita}`)
break
}
case 'cerpen_galau':{
let cdjfj = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cdjfj.title}\n⭔ _*Author :*_ ${cdjfj.author}\n⭔ _*Category :*_ ${cdjfj.kategori}\n⭔ _*Pass Moderation :*_ ${cdjfj.lolos}\n⭔ _*Story :*_\n${cdjfj.cerita}`)
break
}
case 'cerpen_gokil':{
let vrkfjf = await cerpen(`gokil`)
m.reply(`⭔ _*Title :*_ ${vrkfjf.title}\n⭔ _*Author :*_ ${vrkfjf.author}\n⭔ _*Category :*_ ${vrkfjf.kategori}\n⭔ _*Pass Moderation :*_ ${vrkfjf.lolos}\n⭔ _*Story :*_\n${vrkfjf.cerita}`)
break
}
case 'cerpen_inspiratif':{
let ngkgk = await cerpen(`inspiratif`)
m.reply(`⭔ _*Title :*_ ${ngkgk.title}\n⭔ _*Author :*_ ${ngkgk.author}\n⭔ _*Category :*_ ${ngkgk.kategori}\n⭔ _*Pass Moderation :*_ ${ngkgk.lolos}\n⭔ _*Story :*_\n${ngkgk.cerita}`)
break
}
case 'cerpen_jepang':{
let vrlgk = await cerpen(`jepang`)
m.reply(`⭔ _*Title :*_ ${vrlgk.title}\n⭔ _*Author :*_ ${vrlgk.author}\n⭔ _*Category :*_ ${vrlgk.kategori}\n⭔ _*Pass Moderation :*_ ${vrlgk.lolos}\n⭔ _*Story :*_\n${vrlgk.cerita}`)
break
}
case 'cerpen_kehidupan':{
let ntlgkt = await cerpen(`kehidupan`)
m.reply(`⭔ _*Title :*_ ${ntlgkt.title}\n⭔ _*Author :*_ ${ntlgkt.author}\n⭔ _*Category :*_ ${ntlgkt.kategori}\n⭔ _*Pass Moderation :*_ ${ntlgkt.lolos}\n⭔ _*Story :*_\n${ntlgkt.cerita}`)
break
}
case 'cerpen_keluarga':{
let bmflg = await cerpen(`keluarga`)
m.reply(`⭔ _*Title :*_ ${bmflg.title}\n⭔ _*Author :*_ ${bmflg.author}\n⭔ _*Category :*_ ${bmflg.kategori}\n⭔ _*Pass Moderation :*_ ${bmflg.lolos}\n⭔ _*Story :*_\n${bmflg.cerita}`)
break
}
case 'cerpen_kisahnyata':{
let yptoo = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${yptoo.title}\n⭔ _*Author :*_ ${yptoo.author}\n⭔ _*Category :*_ ${yptoo.kategori}\n⭔ _*Pass Moderation :*_ ${yptoo.lolos}\n⭔ _*Story :*_\n${yptoo.cerita}`)
break
}
case 'cerpen_korea':{
let jptpgr = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${jptpgr.title}\n⭔ _*Author :*_ ${jptpgr.author}\n⭔ _*Category :*_ ${jptpgr.kategori}\n⭔ _*Pass Moderation :*_ ${jptpgr.lolos}\n⭔ _*Story :*_\n${jptpgr.cerita}`)
break
}
case 'cerpen_kristen':{
let yesusanjing = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${yesusanjing.title}\n⭔ _*Author :*_ ${yesusanjing.author}\n⭔ _*Category :*_ ${yesusanjing.kategori}\n⭔ _*Pass Moderation :*_ ${yesusanjing.lolos}\n⭔ _*Story :*_\n${yesusanjing.cerita}`)
break
}
case 'cerpen_liburan':{
let frkfkrk = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${frkfkrk.title}\n⭔ _*Author :*_ ${frkfkrk.author}\n⭔ _*Category :*_ ${frkfkrk.kategori}\n⭔ _*Pass Moderation :*_ ${frkfkrk.lolos}\n⭔ _*Story :*_\n${frkfkrk.cerita}`)
break
}
case 'cerpen_malaysia':{
let mzbdjd = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${mzbdjd.title}\n⭔ _*Author :*_ ${mzbdjd.author}\n⭔ _*Category :*_ ${mzbdjd.kategori}\n⭔ _*Pass Moderation :*_ ${mzbdjd.lolos}\n⭔ _*Story :*_\n${mzbdjd.cerita}`)
break
}
case 'cerpen_mengharukan':{
let bgfngk = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${bgfngk.title}\n⭔ _*Author :*_ ${bgfngk.author}\n⭔ _*Category :*_ ${bgfngk.kategori}\n⭔ _*Pass Moderation :*_ ${bgfngk.lolos}\n⭔ _*Story :*_\n${bgfngk.cerita}`)
break
}
case 'cerpen_misteri':{
let lapdoek = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${lapdoek.title}\n⭔ _*Author :*_ ${lapdoek.author}\n⭔ _*Category :*_ ${lapdoek.kategori}\n⭔ _*Pass Moderation :*_ ${lapdoek.lolos}\n⭔ _*Story :*_\n${lapdoek.cerita}`)
break
}
case 'cerpen_motivasi':{
let bltkyj = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${bltkyj.title}\n⭔ _*Author :*_ ${bltkyj.author}\n⭔ _*Category :*_ ${bltkyj.kategori}\n⭔ _*Pass Moderation :*_ ${bltkyj.lolos}\n⭔ _*Story :*_\n${bltkyj.cerita}`)
break
}
case 'cerpen_nasihat':{
let qpeidek = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${qpeidek.title}\n⭔ _*Author :*_ ${qpeidek.author}\n⭔ _*Category :*_ ${qpeidek.kategori}\n⭔ _*Pass Moderation :*_ ${qpeidek.lolos}\n⭔ _*Story :*_\n${qpeidek.cerita}`)
break
}
case 'cerpen_nasionalisme':{
let cdmrgo = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cdmrgo.title}\n⭔ _*Author :*_ ${cdmrgo.author}\n⭔ _*Category :*_ ${cdmrgo.kategori}\n⭔ _*Pass Moderation :*_ ${cdmrgo.lolos}\n⭔ _*Story :*_\n${cdmrgo.cerita}`)
break
}
case 'cerpen_olahraga':{
let qpdiek = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${qpdiek.title}\n⭔ _*Author :*_ ${qpdiek.author}\n⭔ _*Category :*_ ${qpdiek.kategori}\n⭔ _*Pass Moderation :*_ ${qpdiek.lolos}\n⭔ _*Story :*_\n${qpdiek.cerita}`)
break
}
case 'cerpen_patahhati':{
let vrlfor = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${vrlfor.title}\n⭔ _*Author :*_ ${vrlfor.author}\n⭔ _*Category :*_ ${vrlfor.kategori}\n⭔ _*Pass Moderation :*_ ${vrlfor.lolos}\n⭔ _*Story :*_\n${vrlfor.cerita}`)
break
}
case 'cerpen_penantian':{
let aldpek = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${aldpek.title}\n⭔ _*Author :*_ ${aldpek.author}\n⭔ _*Category :*_ ${aldpek.kategori}\n⭔ _*Pass Moderation :*_ ${aldpek.lolos}\n⭔ _*Story :*_\n${aldpek.cerita}`)
break
}
case 'cerpen_pendidikan':{
let xnrjrk = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${xnrjrk.title}\n⭔ _*Author :*_ ${xnrjrk.author}\n⭔ _*Category :*_ ${xnrjrk.kategori}\n⭔ _*Pass Moderation :*_ ${xnrjrk.lolos}\n⭔ _*Story :*_\n${xnrjrk.cerita}`)
break
}
case 'cerpen_pengalaman':{
let hrkgor = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${hrkgor.title}\n⭔ _*Author :*_ ${hrkgor.author}\n⭔ _*Category :*_ ${hrkgor.kategori}\n⭔ _*Pass Moderation :*_ ${hrkgor.lolos}\n⭔ _*Story :*_\n${hrkgor.cerita}`)
break
}
case 'cerpen_pengorbanan':{


let itklog = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${itklog.title}\n⭔ _*Author :*_ ${itklog.author}\n⭔ _*Category :*_ ${itklog.kategori}\n⭔ _*Pass Moderation :*_ ${itklog.lolos}\n⭔ _*Story :*_\n${itklog.cerita}`)
break
}
case 'cerpen_penyesalan':{
let pgrjgo = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${pgrjgo.title}\n⭔ _*Author :*_ ${pgrjgo.author}\n⭔ _*Category :*_ ${pgrjgo.kategori}\n⭔ _*Pass Moderation :*_ ${pgrjgo.lolos}\n⭔ _*Story :*_\n${pgrjgo.cerita}`)
break
}
case 'cerpen_perjuangan':{
let vtlgotk = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${vtlgotk.title}\n⭔ _*Author :*_ ${vtlgotk.author}\n⭔ _*Category :*_ ${vtlgotk.kategori}\n⭔ _*Pass Moderation :*_ ${vtlgotk.lolos}\n⭔ _*Story :*_\n${vtlgotk.cerita}`)
break
}
case 'cerpen_perpisahan':{
let wpfuej = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${wpfuej.title}\n⭔ _*Author :*_ ${wpfuej.author}\n⭔ _*Category :*_ ${wpfuej.kategori}\n⭔ _*Pass Moderation :*_ ${wpfuej.lolos}\n⭔ _*Story :*_\n${wpfuej.cerita}`)
break
}
case 'cerpen_persahabatan':{
let jptoyk = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${jptoyk.title}\n⭔ _*Author :*_ ${jptoyk.author}\n⭔ _*Category :*_ ${jptoyk.kategori}\n⭔ _*Pass Moderation :*_ ${jptoyk.lolos}\n⭔ _*Story :*_\n${jptoyk.cerita}`)
break
}
case 'cerpen_petualangan':{
let qwers = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${qwers.title}\n⭔ _*Author :*_ ${qwers.author}\n⭔ _*Category :*_ ${qwers.kategori}\n⭔ _*Pass Moderation :*_ ${qwers.lolos}\n⭔ _*Story :*_\n${qwers.cerita}`)
break
}
case 'cerpen_ramadhan':{
let vrmfkk = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${vrmfkk.title}\n⭔ _*Author :*_ ${vrmfkk.author}\n⭔ _*Category :*_ ${vrmfkk.kategori}\n⭔ _*Pass Moderation :*_ ${vrmfkk.lolos}\n⭔ _*Story :*_\n${vrmfkk.cerita}`)
break
}
case 'cerpen_remaja':{
let vhptotk = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${vhptotk.title}\n⭔ _*Author :*_ ${vhptotk.author}\n⭔ _*Category :*_ ${vhptotk.kategori}\n⭔ _*Pass Moderation :*_ ${vhptotk.lolos}\n⭔ _*Story :*_\n${vhptotk.cerita}`)
break
}
case 'cerpen_rindu':{
let hptotlltk = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${hptotlltk.title}\n⭔ _*Author :*_ ${hptotlltk.author}\n⭔ _*Category :*_ ${hptotlltk.kategori}\n⭔ _*Pass Moderation :*_ ${hptotlltk.lolos}\n⭔ _*Story :*_\n${hptotlltk.cerita}`)
break
}
case 'cerpen_rohani':{
let zaldjdws = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${zaldjdws.title}\n⭔ _*Author :*_ ${zaldjdws.author}\n⭔ _*Category :*_ ${zaldjdws.kategori}\n⭔ _*Pass Moderation :*_ ${zaldjdws.lolos}\n⭔ _*Story :*_\n${zaldjdws.cerita}`)
break
}
case 'cerpen_romantis':{
let lxprhrh = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${lxprhrh.title}\n⭔ _*Author :*_ ${lxprhrh.author}\n⭔ _*Category :*_ ${lxprhrh.kategori}\n⭔ _*Pass Moderation :*_ ${lxprhrh.lolos}\n⭔ _*Story :*_\n${lxprhrh.cerita}`)
break
}
case 'cerpen_sastra':{
let qpifker = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${qpifker.title}\n⭔ _*Author :*_ ${qpifker.author}\n⭔ _*Category :*_ ${qpifker.kategori}\n⭔ _*Pass Moderation :*_ ${qpifker.lolos}\n⭔ _*Story :*_\n${qpifker.cerita}`)
break
}
    case 'cerpen_sedih': {
      let bmflgkjt = await cerpen('sedih');
      m.reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`);
      break;
    }
    
    case 'cerpen_sejarah': {
      let xwpwifj = await cerpen('sejarah');
      m.reply(`⭔ _*Title :*_ ${xwpwifj.title}\n⭔ _*Author :*_ ${xwpwifj.author}\n⭔ _*Category :*_ ${xwpwifj.kategori}\n⭔ _*Pass Moderation :*_ ${xwpwifj.lolos}\n⭔ _*Story :*_\n${xwpwifj.cerita}`);
      break;
    }
  }
};
handler.tags = ['cerpen']
handler.help = handler.command = ['cerpen_sejarah',
'cerpen_sedih',
'cerpen_sastra',
'cerpen_romantis',
'cerpen_rohani',
'cerpen_rindu',
'cerpen_remaja',
'cerpen_ramadhan',
'cerpen_petualangan',
'cerpen_persahabatan',
'cerpen_perpisahan',
'cerpen_perjuangan',
'cerpen_penyesalan',
'cerpen_pengorbanan',
'cerpen_pengalaman',
'cerpen_pendidikan',
'cerpen_penantian',
'cerpen_patahhati',
'cerpen_olahraga',
'cerpen_nasionalisme',
'cerpen_nasihat',
'cerpen_motivasi',
'cerpen_misteri',
'cerpen_mengharukan',
'cerpen_malaysia',
'cerpen_liburan',
'cerpen_kristen',
'cerpen_korea',
'cerpen_kisahnyata',
'cerpen_keluarga',
'cerpen_kehidupan',
'cerpen_jepang',
'cerpen_inspiratif',
'cerpen_gokil',
'cerpen_galau',
'cerpen_cintasejati',
'cerpen_cintasegitiga',
'cerpen_cintasedih',
'cerpen_cintaromantis',
'cerpen_cintapertama',
'cerpen_cintaislami',
'cerpen_cinta',
'cerpen_budaya',
'cerpen_bahasasunda',
'cerpen_bahasajawa',
'cerpen_bahasainggris',
'cerpen_bahasadaerah',
'cerpen_anak']
module.exports = handler 

