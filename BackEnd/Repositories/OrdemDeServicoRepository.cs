using chamaJussa.Models;
using Microsoft.EntityFrameworkCore;

namespace chamaJussa.Repositories
{
    public class OrdemDeServicoRepository
    {
        private readonly ChamaJussaContext _context;

        public OrdemDeServicoRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public async Task<List<OrdemDeServico>> ObterPorUsuarioIdAsync(int usuarioId)
        {
            return await _context.OrdemDeServicos
                .Where(o => o.UsuarioId == usuarioId)
                .OrderByDescending(o => o.CriadoEm)
                .ToListAsync();
        }

        public async Task<OrdemDeServico?> ObterPorIdAsync(int id)
        {
            return await _context.OrdemDeServicos.FindAsync(id);
        }

        public async Task<OrdemDeServico> CriarAsync(OrdemDeServico os)
        {
            _context.OrdemDeServicos.Add(os);
            await _context.SaveChangesAsync();
            return os;
        }

        public async Task AtualizarAsync(OrdemDeServico os)
        {
            _context.OrdemDeServicos.Update(os);
            await _context.SaveChangesAsync();
        }

        public async Task DeletarAsync(OrdemDeServico os)
        {
            _context.OrdemDeServicos.Remove(os);
            await _context.SaveChangesAsync();
        }
    }
}