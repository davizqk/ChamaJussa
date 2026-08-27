namespace chamaJussa.DTOS
{
    public class LoginDTO
    {
        public string Email { get; set; } = null!;
        public string Senha { get; set; } = null!;
    }

    public class LoginRespostaDTO
    {
        public string Token { get; set; } = null!;
        public UsuarioDTO Usuario { get; set; } = null!;
    }
}