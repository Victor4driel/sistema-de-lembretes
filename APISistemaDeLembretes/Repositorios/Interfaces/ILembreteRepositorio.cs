using SistemaDeLembretes.Models;

namespace SistemaDeLembretes.Repositorios.Interfaces
{
    public interface ILembreteRepositorio
    {
        Task<List<LembreteModel>> BuscarTodosLembretes(); 
        Task<LembreteModel> BuscarPorId(int id);
        Task<LembreteModel> Adicionar(LembreteModel lembrete);
        Task<LembreteModel> Atualizar(LembreteModel lembrete, int id);
        Task<bool> Apagar(int id);
    }
}
