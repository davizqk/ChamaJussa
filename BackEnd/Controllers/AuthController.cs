using chamaJussa.DTOS;
using chamaJussa.Services;
using Microsoft.AspNetCore.Mvc;

namespace chamaJussa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO dto)
        {
            var usuario = await _authService.AutenticarAsync(dto);
            if (usuario == null) return Unauthorized(new { mensagem = "E-mail ou senha inválidos." });

            return Ok(usuario);
        }
    }
}