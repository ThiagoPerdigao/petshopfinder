const { getBestPetshop } = require('../index');

describe('getBestPetshop', () => {
  test('deve retornar o petshop mais barato para um cão grande em dia de semana', () => {
    const date = '2024-08-01'; // Quinta
    const smallDogs = 0;
    const largeDogs = 1;
    const result = getBestPetshop(date, smallDogs, largeDogs);
    expect(result).toEqual({ petshop: 'Meu Canino Feliz', total: 40 });
  });

  test('deve retornar o petshop mais barato para um cão pequeno no fim de semana', () => {
    const date = '2024-08-04'; // Domingo
    const smallDogs = 1;
    const largeDogs = 0;
    const result = getBestPetshop(date, smallDogs, largeDogs);
    expect(result).toEqual({ petshop: 'Vai Rex', total: 20 });
  });

  test('deve considerar a distância em caso de empate', () => {
    const date = '2024-08-04'; // Domingo
    const smallDogs = 2;
    const largeDogs = 4;
    const result = getBestPetshop(date, smallDogs, largeDogs);
    expect(result).toEqual({ petshop: 'ChowChawgas', total: 240 }); // Mesmo valor que o Meu Canino Feliz
  });
});
