import { request, response } from "express";
import db from "../../prisma/connection";

// create data siswa
export const siswa_create = async (req = request, res = response) => {
  try {
    const data = await req.body;
    const createDataSiswa = await db.dataSiswa.create({
      data: data,
    });
    return res.status(201).json({
      success: true,
      data: createDataSiswa,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// read data siswa
export const siswa_read = async (req = request, res = response) => {
  try {
    const result = await db.dataSiswa.findMany();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
