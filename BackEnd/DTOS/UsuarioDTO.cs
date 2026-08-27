namespace chamaJussa.DTOS
{
    public class UsuarioDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Cargo { get; set; } = null!;
    }

    public class CriarUsuarioDTO
    {
        public string Nome { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Senha { get; set; } = null!;
        public string Cargo { get; set; } = null!;
    }
}