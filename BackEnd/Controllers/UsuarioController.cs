using chamaJussa.DTOS;
using chamaJussa.Services;
using Microsoft.AspNetCore.Mvc;

namespace chamaJussa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterPerfil(int id)
        {
            var usuario = await _usuarioService.ObterPerfilAsync(id);
            if (usuario == null) return NotFound(new { mensagem = "Usuário não encontrado." });

            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] CriarUsuarioDTO dto)
        {
            var usuario = await _usuarioService.CadastrarAsync(dto);
            return CreatedAtAction(nameof(ObterPerfil), new { id = usuario.Id }, usuario);
        }
    }
}