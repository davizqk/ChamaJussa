namespace chamaJussa.DTOS
{
    public class CriarOrdemDeServicoDTO
    {
        public string Titulo { get; set; } = null!;
        public string Descricao { get; set; } = null!;
        public string LocalOs { get; set; } = null!;
        public string? Equipamento { get; set; }
        public string? FotoUrl { get; set; }
    }

    public class AtualizarOrdemDeServicoDTO
    {
        public string Titulo { get; set; } = null!;
        public string Descricao { get; set; } = null!;
        public string LocalOs { get; set; } = null!;
        public string? Equipamento { get; set; }
        public string? FotoUrl { get; set; }
        public string? StatusOs { get; set; }
    }

    public class OrdemDeServicoRespostaDTO
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = null!;
        public string? Descricao { get; set; }
        public string? LocalOs { get; set; }
        public string? Equipamento { get; set; }
        public string? FotoUrl { get; set; }
        public string StatusOs { get; set; } = null!;
        public int UsuarioId { get; set; }
        public DateTime? CriadoEm { get; set; }
    }
}