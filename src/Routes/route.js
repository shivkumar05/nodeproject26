const express = require("express");
const battingController = require("../Controllers/user");
const commnMid = require("../Middleware/Auth");
const Router = express.Router();

//==================[EndPoints]====================================//

Router.post("/tag", battingController.tag);
Router.post("/user", battingController.createUser);
Router.get("/getUsers", battingController.getUsers);
Router.post("/category", battingController.category);
Router.post("/userlogin", battingController.userLogin);
Router.post("/getContact", battingController.getContact);
Router.post("/AcademyLogin", battingController.AcademyLogin);
Router.post("/academy/coach", battingController.createAcademy);
Router.post("/updatePassword", battingController.updatePassword);
Router.post("/getContactCoach", battingController.getContactCoach);
Router.post("/updateCoachPassword", battingController.updateCoachPassword);
Router.get("/:userId/Tags", commnMid.jwtValidation, commnMid.authorization, battingController.getTags);
Router.get("/:userId/Categoy", commnMid.jwtValidation, commnMid.authorization, battingController.getCategory);
Router.post("/:userId/bow_batPost", commnMid.jwtValidation, commnMid.authorization, battingController.bow_bat);
Router.get("/:userId/getRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.getRoutine);
Router.get("/:userId/getMyDrill", commnMid.jwtValidation, commnMid.authorization, battingController.getMyDrills);
Router.put("/:userId/updateDrill", commnMid.jwtValidation, commnMid.authorization, battingController.updateDrill);
Router.post("/:userId/batting", commnMid.jwtValidation, commnMid.authorization, battingController.createBattings);
Router.get("/:userId/getAllUsers", commnMid.jwtValidation, commnMid.authorization, battingController.getAllUsers);
Router.post("/:userId/bowling", commnMid.jwtValidation, commnMid.authorization, battingController.createBowlings);
Router.get("/:userId/getPersonal", commnMid.jwtValidation, commnMid.authorization, battingController.getPersonal);
Router.get("/:userId/getProgress", commnMid.jwtValidation, commnMid.authorization, battingController.getProgress);
Router.put("/:userId/updateWicket", commnMid.jwtValidation, commnMid.authorization, battingController.updateWicket);
Router.get("/:userId/getPastDrill", commnMid.jwtValidation, commnMid.authorization, battingController.getPastDrill);
Router.post("/:userId/postDrills", commnMid.jwtValidation, commnMid.authorization, battingController.createRoutine);
Router.post("/:userId/PowerTest", commnMid.jwtValidation, commnMid.authorization, battingController.createPowerTest);
Router.put("/:userId/updateBatting", commnMid.jwtValidation, commnMid.authorization, battingController.updateBatting);
Router.put("/:userId/updateBowling", commnMid.jwtValidation, commnMid.authorization, battingController.updateBowling);
Router.put("/:userId/updateRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.updateRoutine);
Router.put("/:userId/updateBat_Bow", commnMid.jwtValidation, commnMid.authorization, battingController.updateBat_Bow);
Router.post("/:userId/wicketKeeping", commnMid.jwtValidation, commnMid.authorization, battingController.createWickets);
Router.delete("/:userId/deleteRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.deleteRoutine);
Router.get("/:userId/getCoachRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.getCoachRoutine);
Router.post("/:userId/readinessSurvey", commnMid.jwtValidation, commnMid.authorization, battingController.readinessSurvey);
Router.post("/:userId/StrengthTest", commnMid.jwtValidation, commnMid.authorization, battingController.createStrengthTest);
Router.post("/:userId/createCoachRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.createCoachRoutine);
Router.get("/:userId/getAssignedBydrills", commnMid.jwtValidation, commnMid.authorization, battingController.getAssignedByDrills);

//===================== checking your end point valid or not =======================//
Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
});

module.exports = Router;


