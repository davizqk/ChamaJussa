using System;
using System.Collections.Generic;

namespace chamaJussa.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Cargo { get; set; } = null!;

    public virtual ICollection<OrdemDeServico> OrdemDeServicos { get; set; } = new List<OrdemDeServico>();
}
