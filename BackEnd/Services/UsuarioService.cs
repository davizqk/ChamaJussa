using chamaJussa.DTOS;
using chamaJussa.Models;
using chamaJussa.Repositories;

namespace chamaJussa.Services
{
    public class UsuarioService
    {
        private readonly UsuarioRepository _usuarioRepository;

        public UsuarioService(UsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public async Task<UsuarioDTO?> ObterPerfilAsync(int id)
        {
            var usuario = await _usuarioRepository.ObterPorIdAsync(id);
            if (usuario == null) return null;

            return new UsuarioDTO
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Email = usuario.Email,
                Cargo = usuario.Cargo
            };
        }

        public async Task<UsuarioDTO> CadastrarAsync(CriarUsuarioDTO dto)
        {
            var usuario = new Usuario
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Senha = dto.Senha,
                Cargo = dto.Cargo
            };

            var criado = await _usuarioRepository.CriarAsync(usuario);

            return new UsuarioDTO
            {
                Id = criado.Id,
                Nome = criado.Nome,
                Email = criado.Email,
                Cargo = criado.Cargo
            };
        }
    }
}