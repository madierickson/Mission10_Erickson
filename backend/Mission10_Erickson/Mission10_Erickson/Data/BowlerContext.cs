using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Mission10_Erickson.Data;

public class BowlerContext : DbContext
{
    public BowlerContext(DbContextOptions<BowlerContext> options) : base(options) {}

    public DbSet<Bowler> Bowlers { get; set; }
    public DbSet<Team> Teams { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bowler>()
            .HasOne(b => b.Team)
            .WithMany(t => t.Bowlers)
            .HasForeignKey(b => b.TeamID);
    }
}

