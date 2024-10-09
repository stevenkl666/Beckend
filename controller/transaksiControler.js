import Transaksi from '../models/TransaksiModel.js';
import Transaksi from '../models/TransaksiModel.js'
import User from '../models/UserModel.js';
import Admin from '../models/adminModels.js';


export const getTransaksi = async (req, res) => {
    try{
        const Transaksi = await Transaksi.findAll({
            include: [
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: Admin,
                    as: 'admin'
                }
            ]
        });
        res.status(200).json(transaksi)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPembayaran"})
    }
};


export const getTransaksiById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const transaksi = await transaksi.findByPk(id,{
            include: [
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: Admin,
                    as: 'admin'
                }
            ]
        }); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!transaksi) {
            return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
        }
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createTransaksi = async (req, res) => {
    try{
        const { metode_transaksi, tanggal_transaksi, jumlah_transaksi, id_user, id_admin} = req.body;
        const pembayaran = await Transaksi.create({metode_transaksi, tanggal_transaksi, jumlah_transaksi, id_user, id_admin});
        res.status(200).json(transaksi);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createPembayaran"})
    }
}

export const updateTransaksi = async (req, res) => {
    try {
        const { metode_transaksi, tanggal_transaksi, jumlah_transaksi } = req.body
        const data = await Transaksi.update({ metode_transaksi, tanggal_transaksi, jumlah_transaksi }, {
            where: {
                id_transaksi: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pembayaran"})
    }

}
export const deleteTransaksi = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Transaksi.destroy({where: {id_transaksi:id}});
        res.status(200).json(deleted + `Stock ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pembayaran"})
    }
}

