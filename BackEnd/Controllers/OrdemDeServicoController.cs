using chamaJussa.DTOS;
using chamaJussa.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace chamaJussa.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OrdemDeServicoController : ControllerBase
    {
        private readonly OrdemDeServicoService _osService;

        public OrdemDeServicoController(OrdemDeServicoService osService)
        {
            _osService = osService;
        }

        private int ObterUsuarioIdDoToken()
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);
            return claim != null ? int.Parse(claim.Value) : 0;
        }

        [HttpGet("minhas-ordens")]
        public async Task<IActionResult> ObterMinhasOrdens()
        {
            int usuarioId = ObterUsuarioIdDoToken();
            var ordens = await _osService.ObterPorUsuarioAsync(usuarioId);
            return Ok(ordens);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterPorId(int id)
        {
            int usuarioId = ObterUsuarioIdDoToken();
            var os = await _osService.ObterPorIdAsync(id, usuarioId);
            if (os == null) return NotFound(new { mensagem = "Ordem de serviço não encontrada ou não pertence ao usuário." });

            return Ok(os);
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] CriarOrdemDeServicoDTO dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Titulo) || string.IsNullOrWhiteSpace(dto.Descricao) || string.IsNullOrWhiteSpace(dto.LocalOs))
                return BadRequest(new { mensagem = "Título, Descrição e Local são obrigatórios." });

            int usuarioId = ObterUsuarioIdDoToken();
            var os = await _osService.CriarAsync(dto, usuarioId);
            return CreatedAtAction(nameof(ObterPorId), new { id = os.Id }, os);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(int id, [FromBody] AtualizarOrdemDeServicoDTO dto)
        {
            int usuarioId = ObterUsuarioIdDoToken();
            var (sucesso, mensagem, os) = await _osService.AtualizarAsync(id, dto, usuarioId);
            if (!sucesso) return BadRequest(new { mensagem });

            return Ok(os);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar(int id)
        {
            int usuarioId = ObterUsuarioIdDoToken();
            var (sucesso, mensagem) = await _osService.DeletarAsync(id, usuarioId);
            if (!sucesso) return BadRequest(new { mensagem });

            return NoContent();
        }
    }
}