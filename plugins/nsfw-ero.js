let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(ero), null, `Nih *${name}*`, m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i

handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const ero = [

    "https://media.discordapp.net/attachments/527959391446761473/682672218207027260/A9I9FLW_d.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681855421245554708/J4gfxcR_d.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790172592865315/xgt7ys7ua1b41.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790129203052568/image0-5.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790122743693313/66193871_p0_master1200.png",
    "https://media.discordapp.net/attachments/527959391446761473/681790107539341380/image0-7.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790096722231327/ec32416771771cea8a46f077c62fe174.png",
    "https://media.discordapp.net/attachments/527959391446761473/681790083115909154/image2.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790058176446489/image0-9.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790048206585924/image2-1.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790032599973989/IMG_1572905606332.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/681790022856474654/image0-10.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/673284759065198612/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/671109511976583186/IQqVj85_-_Copy.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/670306041048727572/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/668528655043002368/sophia_tanaka_the_wizard_drawn_by_m_da_s_tarou__ffd81eb33f59c40621e5023f29f0df37.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/668485777185046538/1_33.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/667325160159969290/66193871_p0_master1200.png",
    "https://media.discordapp.net/attachments/527959391446761473/666010814938873861/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/665995702551445514/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/665972706323202081/image3.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/665972705417363470/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/665712394672013322/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/665259247474573320/full_07da84a5-9f5c.webp",
    "https://media.discordapp.net/attachments/527959391446761473/664932180966768657/image1.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/664932180966768654/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/657028534623010836/03da4d7036effc392dabce5d4c9db0e1.png",
    "https://media.discordapp.net/attachments/527959391446761473/657028190904254469/ec32416771771cea8a46f077c62fe174.png",
    "https://media.discordapp.net/attachments/527959391446761473/655453753515835422/image2.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/655453752580636693/image1.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/655453752580636692/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/651106170995605524/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/643475455151964170/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/643472954684080141/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/643414515928662016/Jh10Eh5.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/643414491438120970/vn6udN3.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/641678607235678248/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/641405739012718592/IMG_1572823502432.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/641405724123201596/IMG_1572717415604.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/683505579444011079/9cUvraP_d.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/683508839743881241/7LP0hxB_d.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/641148731219116052/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/639266734980988938/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/638792710286868496/image0.png",
    "https://media.discordapp.net/attachments/527959391446761473/637878322726043669/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/637296785181769779/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636755521164017674/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636754317197574155/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636745919655575552/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636745915738226739/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636744380329492481/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636740594202574848/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/636157761066893325/M6PA37a.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/634439280218865695/d5e3d47.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/634439279543713802/ba8c3fe.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/633618828781289482/1ff5da6.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/630451853196525568/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/630451849123856422/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/630042122514595840/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/622732860092055592/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/621442352837427210/sirius_azur_lane_drawn_by_takayaki__a8c6e0862d8666f5d64914dfc7138852.png",
    "https://media.discordapp.net/attachments/527959391446761473/611122245611552799/wa2000_girls_frontline_drawn_by_saya_mychristian2__sample-bf4b5ffc8bf7d39c077b56910847ffaf.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/611122245099585575/original_drawn_by_shibainu_niki__e608924584a026ad1774bc35b23920d7.png",
    "https://media.discordapp.net/attachments/527959391446761473/611122244365713438/nakano_nino_go_toubun_no_hanayome_drawn_by_suisen_21__sample-d374908c0a2dba790fdd0828ccee7f12.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/611122243682172928/original_drawn_by_piripun__sample-c7239167f9610c0b7267a2ecd8208f04.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/611122242918547456/original_drawn_by_akausuko__sample-a573900473d9d90db9da856ddda01c21.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/606527197720870912/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/606519853884637184/75828537_p0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/595244278587064328/x.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/592568179444940808/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/592566544425549844/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/592566327755931668/image1.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/592238817050886144/Kyonyuu-Anime-Ero-Anime-Maid-5273030.png",
    "https://media.discordapp.net/attachments/527959391446761473/590083191142875136/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/582632110263894046/f29b0f8.png",
    "https://media.discordapp.net/attachments/527959391446761473/582206981494931457/74827240_p0.png",
    "https://media.discordapp.net/attachments/527959391446761473/582198509042925599/8meop31uc7x21.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/581828815592882187/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/578296008581185550/image0.png",
    "https://media.discordapp.net/attachments/527959391446761473/578295988540932117/image0.png",
    "https://media.discordapp.net/attachments/527959391446761473/578295355280457759/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/575837526187835402/74635394_p0.png",
    "https://media.discordapp.net/attachments/527959391446761473/575477218659139604/macciatto-28aciel0229-Anime-AO-Anime-Art-5183289.png",
    "https://media.discordapp.net/attachments/527959391446761473/575477166771404820/hiragi-ringo-Anime-AO-Anime-Art-5183293.png",
    "https://media.discordapp.net/attachments/527959391446761473/575108498636144640/ero-waifu-Rem-28re-zero29-Re-Zero-Kara-Hajimeru-Isekai-Seikatsu-Anime-5181899.png",
    "https://media.discordapp.net/attachments/527959391446761473/574223805711384586/74541928_p0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/572054221134888971/image0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/571642065704845322/74398146_p1.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/571642063909552129/74398146_p0.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/570387521658290246/Konachan.com_-_274528_apron_ass_ass_grab_blonde_hair_blush_book_bow_breasts_cleavage_maid_male_origi.jpg",   
    "https://media.discordapp.net/attachments/527959391446761473/569413547273093130/74285341_p0.png",
    "https://media.discordapp.net/attachments/527959391446761473/568198898242289664/Konachan.com_-_269716_sample.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/568198854822985738/Konachan.com_-_260033_sample.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/568198737915281410/Konachan.com_-_258221_dokiyuri_drink_idolmaster_idolmaster_cinderella_girls_kurokawa_chiaki_maid.jpg",       
    "https://media.discordapp.net/attachments/527959391446761473/568198734144471080/Konachan.com_-_227749_sample.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/568198734144471080/Konachan.com_-_227749_sample.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/568198715425292347/Konachan.com_-_232936_bed_blue_eyes_blue_hair_blush_bow_braids_breasts_censored_cleavage_cum_footjob.jpg",   
    "https://media.discordapp.net/attachments/527959391446761473/567856327221706771/saki-saki-achiga-hen-Matsumi-Kuro-trista-28makkoivenus29-5138348.png",
    "https://media.discordapp.net/attachments/527959391446761473/567759128060100627/arisugawa_natsuha_idolmaster_shiny_colors_and_etc_drawn_by_wasabi_nmrw4477__36b438983e3b3f3e99ff5e8b.png",   
    "https://media.discordapp.net/attachments/527959391446761473/567292967103234062/54559599_p0.png",
    "https://media.discordapp.net/attachments/527959391446761473/567047011568844831/Konachan.com_-_281407_apron_blush_breasts_brown_hair_cameltoe_cum_gloves_headdress_long_hair_maid_ni.png",   
    "https://media.discordapp.net/attachments/527959391446761473/567045419398594591/f8fa5a3.jpg",
    "https://media.discordapp.net/attachments/527959391446761473/567041161085190154/Konachan.com_-_281528_sample.png",
    "https://media.discordapp.net/attachments/527959391446761473/567017638673252363/Konachan.com_-_281985_ass_azur_lane_brown_eyes_drink_elbow_gloves_food_fruit_fujima_takuya_gloves_lo.png",   
    "https://media.discordapp.net/attachments/527959391446761473/561680566546857984/Konachan.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/770949690048380959/Hentai_Nation_20.jpg",
    "https://images-ext-2.discordapp.net/external/qKu6CT8vnfvWk9A90TCHZCMSk-WYfJ78NM8yjawQGuU/%3Ffit%3D270%252C400%26ssl%3D1/https/i1.wp.com/manytoon.com/wp-content/uploads/2019/05/miss.jpg",
    "https://images-ext-2.discordapp.net/external/H3mxlBUSkdq98OhtbA2OlmB5GcFJCpLKEwG94ggak1o/%3Ffit%3D270%252C400%26ssl%3D1/https/i1.wp.com/manytoon.com/wp-content/uploads/2019/07/Pheromone-Holic-manhwahentai.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/553360483315613739/22t.jpg",
    "https://media.discordapp.net/attachments/527959259107950603/553360456392245248/21t.jpg",
    "https://cdn.discordapp.com/attachments/707201738255368194/771335958271623168/504af0dc33851aacf0e5cdfd46094514.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000644152197130/710.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000747315560488/497-Fe67B-bfmcg.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001374086397962/0525-iWRn0JWF9EY.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001575933476884/0545-SwaxxBy0cAk.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771001885883629588/569-6VBU3b08Y-A.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002102260563968/0585-GJ5pfHuOWkc.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771002155427168301/590-upM3zPauvLw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016377116655626/1653-52vm09z1VuM.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016584859746384/1684-Rhc9pVcoy4c.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771018006133735434/1898_mIjFlf6bPc.jpg",
    "https://cdn.discordapp.com/attachments/763827461250613268/771857665046872085/image0.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771861522757976064/1mu59y817hm41.png",
    "https://cdn.discordapp.com/attachments/707201738255368194/771861594694352926/4a61e5528a0d1efb0ed163edc4cd31c1.png",
    "https://cdn.discordapp.com/attachments/707201738255368194/771861708267585596/qakn1osmum451.png"
]