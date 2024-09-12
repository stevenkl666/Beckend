import Admin from "../models/adminModels.js";
import Item from "../models/ItemModel.js";
import User from '../models/UserModel.js';

export default async function clean (){
    await User.destroy({
        where: {},
        force: true,
        cascade: true,
    });
    await Item.destroy({
        where: {},
        force: true,
        cascade: true,
    })
    await Admin.destroy({
        where: {},
        force: true,
        cascade: true,
    })
    
}

clean()