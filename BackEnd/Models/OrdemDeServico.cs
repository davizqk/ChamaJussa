using System;
using System.Collections.Generic;


namespace chamaJussa.Models;

public partial class OrdemDeServico
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

    public virtual Usuario Usuario { get; set; } = null!;
}
