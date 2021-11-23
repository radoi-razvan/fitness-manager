using FitMan.Models;
using Microsoft.EntityFrameworkCore;


namespace FitMan.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<Gym> Gyms { get; set; }
        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Review> Reviews { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Course>().ToTable("Course");
            modelBuilder.Entity<Exercise>().ToTable("Exercise");
            modelBuilder.Entity<Gym>().ToTable("Gym");
            modelBuilder.Entity<Trainer>().ToTable("Trainer");
            modelBuilder.Entity<Review>().ToTable("Review");
        }
    }
}
