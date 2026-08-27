using chamaJussa.DTOS;
using chamaJussa.Repositories;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace chamaJussa.Services
{
    public class AuthService
    {
        private readonly UsuarioRepository _usuarioRepository;
        private readonly IConfiguration _configuration;

        public AuthService(UsuarioRepository usuarioRepository, IConfiguration configuration)
        {
            _usuarioRepository = usuarioRepository;
            _configuration = configuration;
        }

        public async Task<LoginRespostaDTO?> AutenticarAsync(LoginDTO dto)
        {
            var usuario = await _usuarioRepository.ObterPorEmailESenhaAsync(dto.Email, dto.Senha);
            if (usuario == null) return null;

            var token = GerarTokenJwt(usuario.Id.ToString(), usuario.Email, usuario.Cargo);

            return new LoginRespostaDTO
            {
                Token = token,
                Usuario = new UsuarioDTO
                {
                    Id = usuario.Id,
                    Nome = usuario.Nome,
                    Email = usuario.Email,
                    Cargo = usuario.Cargo
                }
            };
        }

        private string GerarTokenJwt(string usuarioId, string email, string cargo)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var key = Encoding.ASCII.GetBytes(jwtSettings["Secret"]!);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, usuarioId),
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, cargo)
                }),
                Expires = DateTime.UtcNow.AddHours(8),
                Issuer = jwtSettings["Issuer"],
                Audience = jwtSettings["Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}