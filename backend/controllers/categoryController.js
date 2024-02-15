const categoryModel = require("../models/CategoryModel");


const createCategory = (async (req, res) => {
    try {
        console.log("Request---->", req.body)
        const body = req.body;
        const errMsg = [];
        if (!body.categoryName) {
            errMsg.push("Please enter category name")
        }
        if (!body.subCategoryName1) {
            errMsg.push("Please enter sub category name1")
        }
        if (!body.subCategoryName2) {
            errMsg.push("Please enter sub category name2")
        }
        if (errMsg.length === 0) {
            let categores = await categoryModel.create(body)
            console.log("categores---->", categores)
            res.status(200).send({ status: "success", message: "Successfully created category" })
        } else {
            res.status(404).send({ status: "failure", message: errMsg.toString() })
        }

    } catch (error) {
        console.log("error---->", error.code)
        if (error.code === 11000) {
            res.status(404).send({ status: "failure", message: "Category name already exist" })
        } else {
            res.status(500).send({ status: "failure", message: "Internal Server Error" })
        }
    }

})

module.exports = createCategory;