using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaDeLembretes.Models;
using SistemaDeLembretes.Repositorios.Interfaces;

namespace SistemaDeLembretes.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class LembreteController : ControllerBase
    {
        private readonly ILembreteRepositorio _lembreteRepositorio;
        public LembreteController(ILembreteRepositorio lembreteRepositorio)
        {
            _lembreteRepositorio = lembreteRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<LembreteModel>>> BuscarTodosLembretes()
        {
            List<LembreteModel> lembretes = await _lembreteRepositorio.BuscarTodosLembretes();
            return Ok(lembretes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LembreteModel>> BuscarPorId(int id)
        {
            LembreteModel lembrete = await _lembreteRepositorio.BuscarPorId(id);
            return Ok(lembrete);
        }

        [HttpPost]
        public async Task<ActionResult<LembreteModel>> Cadastrar([FromBody] LembreteModel lembreteModel)
        {
            LembreteModel lembrete = await _lembreteRepositorio.Adicionar(lembreteModel);
            return Ok(lembrete);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<LembreteModel>> Atualizar([FromBody] LembreteModel lembreteModel, int id)
        {
            lembreteModel.Id = id;
            LembreteModel lembrete = await _lembreteRepositorio.Atualizar(lembreteModel, id);
            return Ok(lembrete);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Apagar(int id)
        {
            bool apagado = await _lembreteRepositorio.Apagar(id);
            return Ok(apagado);
        }
    }
}
