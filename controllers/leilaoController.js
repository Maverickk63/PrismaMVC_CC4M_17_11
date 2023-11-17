// controllers/leilaoController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllLeiloes(req, res) {
  const leiloes = await prisma.leilao.findMany();
  res.json(leiloes);
}

async function JobFecharLeilao(req, res) {
    res.json({ message: 'Leilao fechado'});
}

module.exports = {
  getAllLeiloes,
  JobFecharLeilao,
};