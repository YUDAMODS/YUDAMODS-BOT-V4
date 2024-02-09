let FormData = require("form-data");
let Jimp = require("jimp");

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "enhancer":
		case "unblur":
		case "enhance":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					throw "Masih Ada Proses Yang Belum Selesai, Silahkan Tunggu Sampai Selesai";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Fotonya mana?`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.enhancer[m.sender] = true;
				m.reply("Proses...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Nih Jadi", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Aduh Proses Gagal");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "colorize":
		case "colorizer":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				if (m.sender in conn.recolor)
					throw "Masih Ada Proses Yang Belum Selesai, Silahkan Tunggu Sampai Selesai";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Fotonya Mana?`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.recolor[m.sender] = true;
				m.reply("Proses...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Nih jadi", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Sori Proses Gagal");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hd":
		case "hdr":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				if (m.sender in conn.hdr)
					throw "Masih Ada Proses Yang Belum Selesai, Silahkan Tunggu Sampai Selesai";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Fotonya Mana?`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.hdr[m.sender] = true;
				m.reply("Proses...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Nih Jadi", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Gagal Prosesnya Sorry");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["enhancer", "hdr", "colorize"];
handler.tags = ["internet"];
handler.premium = false;
handler.command = ["unblur", "enhance", "hdr", "colorize", "hd"];
module.exports = handler;