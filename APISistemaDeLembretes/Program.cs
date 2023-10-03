using Microsoft.EntityFrameworkCore;
using SistemaDeLembretes.Data;
using SistemaDeLembretes.Repositorios;
using SistemaDeLembretes.Repositorios.Interfaces;

namespace SistemaDeLembretes
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkSqlServer()
                .AddDbContext<SistemaLembretesDBContext>(
                    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
                 );

            builder.Services.AddScoped<ILembreteRepositorio, LembreteRepositorio>();

            #region [Cors]
            builder.Services.AddCors();
            #endregion

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            #region [Cors]
            app.UseCors(c =>
            {
                c.AllowAnyHeader();
                c.AllowAnyMethod();
                c.AllowAnyOrigin();
            });
            #endregion

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}