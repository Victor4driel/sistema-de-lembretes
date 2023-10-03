using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaDeLembretes.Models;

namespace SistemaDeLembretes.Data.Map
{
    public class LembreteMap : IEntityTypeConfiguration<LembreteModel>
    {
        void IEntityTypeConfiguration<LembreteModel>.Configure(EntityTypeBuilder<LembreteModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Data).IsRequired();
        }
    }
}
