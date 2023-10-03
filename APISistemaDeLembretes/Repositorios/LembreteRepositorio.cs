using Microsoft.EntityFrameworkCore;
using SistemaDeLembretes.Data;
using SistemaDeLembretes.Models;
using SistemaDeLembretes.Repositorios.Interfaces;

namespace SistemaDeLembretes.Repositorios
{
    public class LembreteRepositorio : ILembreteRepositorio
    {
        private readonly SistemaLembretesDBContext _dbContext;
        public LembreteRepositorio(SistemaLembretesDBContext sistemaLembretesDBContext)
        {
            _dbContext = sistemaLembretesDBContext;
        }

        public async Task<LembreteModel> BuscarPorId(int id)
        {
            return await _dbContext.DB_lembrete.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<LembreteModel>> BuscarTodosLembretes()
        {
            return await _dbContext.DB_lembrete.ToListAsync();
        }

        public async Task<LembreteModel> Adicionar(LembreteModel lembrete)
        {
            await _dbContext.DB_lembrete.AddAsync(lembrete);
            await _dbContext.SaveChangesAsync();

            return lembrete;
        }
        public async Task<LembreteModel> Atualizar(LembreteModel lembrete, int id)
        {
            LembreteModel lembretePorId = await BuscarPorId(id);

            if(lembretePorId == null)
            {
                throw new Exception($"Lembrete para o ID: {id} não foi encontrado no banco de dados.");
            }

            lembretePorId.Nome = lembrete.Nome;
            lembretePorId.Data = lembrete.Data;   

            _dbContext.DB_lembrete.Update(lembretePorId);
            await _dbContext.SaveChangesAsync();

            return lembretePorId;
        }

        public async Task<bool> Apagar(int id)
        {
            LembreteModel lembretePorId = await BuscarPorId(id);

            if (lembretePorId == null)
            {
                throw new Exception($"Lembrete para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.DB_lembrete.Remove(lembretePorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
