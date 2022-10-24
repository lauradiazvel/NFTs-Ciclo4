const express = require("express")
const router = express.Router()
const nftsController = require ("../controllers/nfts.controller")

router.post("/", nftsController.create)
router.get("/", nftsController.find)
router.get("/:id", nftsController.findOne)
router.put("/:id", nftsController.update)
router.delete("/:id", nftsController.remove)

module.exports = router