import Item from "../models/ItemModel.js";
import User from "../models/UserModel.js";
import Admin from "../models/adminModels.js";
import Transaksi from "../models/TransaksiModel.js";
const createSeeder = async () => {
  const admin = await Admin.create({
    email: "Admin123",
    password: "admin123",
    nama: "Admin1",
  });
  const user = await User.create({
    name: "Jao Felix",
    email: "JaoFelix@hotmail.com",
    password: "JaoFelixBego",
  });
  const Item1 = await Item.create({
    name: "tembakau kering",
    rasa_tembakau: "chocolate",
    harga: 15000,
    UserId: user.dataValues.id,
    AdminId: admin.dataValues.id,
  });
  const Item2 = await Item.create({
    name: "tembakau basah",
    rasa_tembakau: "strawberry",
    harga: 15000,
    UserId: user.dataValues.id,
    AdminId: admin.dataValues.id,
  });

  const findItemByUser = await Item.findAll({
    where: {
      UserId: user.dataValues.id,
    },
  });

  const deleteUser = async (id) => {
    await User.destroy({
      where: {
        id,
      },
    });
  };

  return findItemByUser ;
};
createSeeder()
// const {user, findBookByUser: users } =await
// createSeeder();
// console.log("=== INI ADALAH DATA USER ===");
// console.log(user);
// console.log("=== INI ADALAH DATA BUKU ====")
// users.map((item) => {
//     console.log(item.dataValues);
// });
// const = await createSeeder();
// console.log(users);
