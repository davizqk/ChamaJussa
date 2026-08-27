using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace chamaJussa.Models;

public partial class ChamaJussaContext : DbContext
{
    public ChamaJussaContext()
    {
    }

    public ChamaJussaContext(DbContextOptions<ChamaJussaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<OrdemDeServico> OrdemDeServicos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=ChamaJussa;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrdemDeServico>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OrdemDeS__3213E83FBD1EA29C");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CriadoEm)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("criadoEm");
            entity.Property(e => e.Descricao)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descricao");
            entity.Property(e => e.Equipamento)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("equipamento");
            entity.Property(e => e.FotoUrl)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("fotoUrl");
            entity.Property(e => e.LocalOs)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("localOS");
            entity.Property(e => e.StatusOs)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("Aberta")
                .HasColumnName("statusOS");
            entity.Property(e => e.Titulo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("titulo");
            entity.Property(e => e.UsuarioId).HasColumnName("usuarioId");

            entity.HasOne(d => d.Usuario).WithMany(p => p.OrdemDeServicos)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrdemDeSe__usuar__619B8048");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuarios__3213E83F9E5DE5BC");

            entity.HasIndex(e => e.Email, "UQ__Usuarios__AB6E61649D3172C9").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cargo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("cargo");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nome");
            entity.Property(e => e.Senha)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("senha");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
