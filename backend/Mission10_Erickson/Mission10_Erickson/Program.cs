using Microsoft.EntityFrameworkCore;
using Mission10_Erickson.Data;

//using Backend.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddDbContext<BowlerContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("BowlerConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Middleware
app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();

app.Run();
