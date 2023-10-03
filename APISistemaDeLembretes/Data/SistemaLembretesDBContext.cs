using Microsoft.EntityFrameworkCore;
using SistemaDeLembretes.Data.Map;
using SistemaDeLembretes.Models;

namespace SistemaDeLembretes.Data
{
    public class SistemaLembretesDBContext : DbContext
    {
        public SistemaLembretesDBContext(DbContextOptions<SistemaLembretesDBContext> options)
            : base(options) 
        {
        }

        public DbSet<LembreteModel> DB_lembrete { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LembreteMap());
            base.OnModelCreating(modelBuilder);
        }

    }
}
