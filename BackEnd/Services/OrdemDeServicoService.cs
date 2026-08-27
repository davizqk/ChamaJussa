using chamaJussa.DTOS;
using chamaJussa.Models;
using chamaJussa.Repositories;

namespace chamaJussa.Services
{
    public class OrdemDeServicoService
    {
        private readonly OrdemDeServicoRepository _repository;

        public OrdemDeServicoService(OrdemDeServicoRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<OrdemDeServicoRespostaDTO>> ObterPorUsuarioAsync(int usuarioId)
        {
            var ordens = await _repository.ObterPorUsuarioIdAsync(usuarioId);
            return ordens.Select(MapearParaDTO).ToList();
        }

        public async Task<OrdemDeServicoRespostaDTO?> ObterPorIdAsync(int id, int usuarioId)
        {
            var os = await _repository.ObterPorIdAsync(id);
            if (os == null || os.UsuarioId != usuarioId) return null;

            return MapearParaDTO(os);
        }

        public async Task<OrdemDeServicoRespostaDTO> CriarAsync(CriarOrdemDeServicoDTO dto, int usuarioId)
        {
            var os = new OrdemDeServico
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                LocalOs = dto.LocalOs,
                Equipamento = dto.Equipamento,
                FotoUrl = dto.FotoUrl,
                StatusOs = "Aberta",
                UsuarioId = usuarioId,
                CriadoEm = DateTime.Now
            };

            var criada = await _repository.CriarAsync(os);
            return MapearParaDTO(criada);
        }

        public async Task<(bool Sucesso, string? Mensagem, OrdemDeServicoRespostaDTO? DTO)> AtualizarAsync(int id, AtualizarOrdemDeServicoDTO dto, int usuarioId)
        {
            var os = await _repository.ObterPorIdAsync(id);

            if (os == null) return (false, "Ordem de Serviço não encontrada.", null);
            if (os.UsuarioId != usuarioId) return (false, "Apenas o criador pode editar.", null);
            if (os.StatusOs == "Finalizada") return (false, "Ordens finalizadas não podem ser editadas.", null);

            os.Titulo = dto.Titulo;
            os.Descricao = dto.Descricao;
            os.LocalOs = dto.LocalOs;
            os.Equipamento = dto.Equipamento;
            os.FotoUrl = dto.FotoUrl;
            if (!string.IsNullOrEmpty(dto.StatusOs)) os.StatusOs = dto.StatusOs;

            await _repository.AtualizarAsync(os);
            return (true, null, MapearParaDTO(os));
        }

        public async Task<(bool Sucesso, string? Mensagem)> DeletarAsync(int id, int usuarioId)
        {
            var os = await _repository.ObterPorIdAsync(id);

            if (os == null) return (false, "Ordem de Serviço não encontrada.");
            if (os.UsuarioId != usuarioId) return (false, "Apenas o criador pode excluir a solicitação.");
            if (os.StatusOs == "Finalizada") return (false, "Ordens finalizadas não podem ser excluídas.");

            await _repository.DeletarAsync(os);
            return (true, null);
        }

        private static OrdemDeServicoRespostaDTO MapearParaDTO(OrdemDeServico os) => new()
        {
            Id = os.Id,
            Titulo = os.Titulo,
            Descricao = os.Descricao,
            LocalOs = os.LocalOs,
            Equipamento = os.Equipamento,
            FotoUrl = os.FotoUrl,
            StatusOs = os.StatusOs,
            UsuarioId = os.UsuarioId,
            CriadoEm = os.CriadoEm
        };
    }
}