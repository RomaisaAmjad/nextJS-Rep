const { Cartoon } = require("../models");
const { asyncWrapper } = require("../middlewares/asyncWrapper.middleware.js");

exports.addCartoon = asyncWrapper(async function (req, res) {
  const { title, character } = req.body;
  
  const cartoon = await Cartoon.create({
   title,
   character,
  });
  
  const cartoonData = {
    id: cartoon.id,
    title: cartoon.title,
    character: cartoon.character,
  };
  return res
    .status(200)
    .json({ cartoonData, message: "Cartoon Added successfully!" });
});

exports.deleteCartoon = asyncWrapper(async function (req, res) {
  
  const { id } = req.params;
  const cartoon = await Cartoon.findByPk(id);
  await cartoon.destroy();
  res.status(200).send("Cartoon deleted successfully!");

});

exports.getAllCartoons = asyncWrapper(async function (req, res) {
  const cartoons = await Cartoon.findAll();
  return res.status(200).send(cartoons);
});
