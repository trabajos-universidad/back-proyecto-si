const {Router}=require("express")
const {testDelete,testGet,testPost,testPut}=require("../controllers/test")
const router=Router();

router.get("/getApi",testGet)

router.post("/postApi",testPost)

router.delete("/deleteApi",testDelete)

router.put("/putApi",testPut)

module.exports = router