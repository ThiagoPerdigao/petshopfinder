const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

module.exports = { getBestPetshop };

const petshops = [
  {
    name: 'Meu Canino Feliz',
    distance: 2,
    weekPrices: { small: 20, large: 40 },
    weekendPrices: { small: 24, large: 48 }
  },
  {
    name: 'Vai Rex',
    distance: 1.7,
    weekPrices: { small: 15, large: 50 },
    weekendPrices: { small: 20, large: 55 }
  },
  {
    name: 'ChowChawgas',
    distance: 0.8,
    weekPrices: { small: 30, large: 45 },
    weekendPrices: { small: 30, large: 45 }
  }
];

app.use(cors());
app.use(express.json());

// Rota para receber dados dos cães e da data
app.post('/api/calculate', (req, res) => {
  const { date, smallDogs, largeDogs } = req.body;

  if (!date || smallDogs === undefined || largeDogs === undefined) {
    return res.status(400).json({ error: 'Dados incompletos.' });
  }

  const result = getBestPetshop(date, smallDogs, largeDogs);
  res.json(result);
});


function getBestPetshop(date, smallDogs, largeDogs) {
  const dayOfWeek = new Date(date).getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  let bestPetshop = null;
  let lowestCost = Infinity;

  petshops.forEach(shop => {
    let totalCost = 0;

    if (isWeekend) {
      // Se for fim de semana, usa weekendPrices
      totalCost = (shop.weekendPrices.small * smallDogs) + (shop.weekendPrices.large * largeDogs);
    } else {
      // Se for dia de semana, usa weekPrices
      totalCost = (shop.weekPrices.small * smallDogs) + (shop.weekPrices.large * largeDogs);
    }

    // Verifica se o custo total é o menor ou se há um empate e o shop é mais próximo
    if (totalCost < lowestCost || (totalCost === lowestCost && shop.distance < (bestPetshop?.distance || Infinity))) {
      lowestCost = totalCost;
      bestPetshop = { name: shop.name, total: totalCost };
    }
  });

  return bestPetshop
    ? { petshop: bestPetshop.name, total: bestPetshop.total }
    : { petshop: 'Nenhum petshop encontrado', total: 0 };
}



// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
