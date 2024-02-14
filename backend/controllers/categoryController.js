
const createCategory = ((req, res) => {
    console.log("Request---->", req.body)
    res.send({ status: "ok" })
})

module.exports = createCategory;