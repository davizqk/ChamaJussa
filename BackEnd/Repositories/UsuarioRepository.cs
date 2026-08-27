using chamaJussa.Models;
using Microsoft.EntityFrameworkCore;

namespace chamaJussa.Repositories
{
    public class UsuarioRepository
    {
        private readonly ChamaJussaContext _context;

        public UsuarioRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public async Task<Usuario?> ObterPorEmailESenhaAsync(string email, string senha)
        {
            return await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email && u.Senha == senha);
        }

        public async Task<Usuario?> ObterPorIdAsync(int id)
        {
            return await _context.Usuarios.FindAsync(id);
        }

        public async Task<Usuario> CriarAsync(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }
    }
}