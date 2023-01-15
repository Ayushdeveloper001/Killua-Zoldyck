module.exports = {
    name: "botcomment",
    alias: ["botmaker","botc"],
    use: "<query>",
    desc: "Bot Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(ayush, m, { text }) => {
        ayush.sendFile(m.from, global.api("zenz", "/creator/botcomment", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}
